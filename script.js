function verificarSintoma() {
    const sintomas = {
      'Neymar': 'Nota DÓ.',
      'Messi': 'Nota 10.',
      'Cristiano Ronaldo': 'Nota 10.',
      'Mbappe': 'Nota 8.',
      'Yuri Alberto': 'Nota 1000.',
      'Piqué': 'Nota Shakira.',
      'Menphis Depay': 'Nota 7.',
      'Gavi': 'Nota Homossexual.',
      'Robinho': 'Nota Abusada.',
      'Rodrigo Garro': 'Nota Moto.',
      'Goleiro Bruno': 'Nota Dog.',
      'Pedri': 'Nota 8.',
      'Lamine Yamal': 'Nota 10.',
      'Hugo Souza': 'Goleirão Foda.',
      'Raphinha': 'Nota 10.',
      'Mateuzinho': 'Nota 4.',
      'Cubarsi': 'Amigo Yamal.',
      'Fabrizio Angileri': 'Nota 6.',
      'Tales Magno': 'Nota Quebradeira RJ.',
      
    };
  
    const sintomaSelecionado = document.getElementById('sintoma').value;
    const mensagem = sintomas[sintomaSelecionado] || 'Sintoma não encontrado. Consulte um médico.';
  
    document.getElementById('mensagemConfirmar').innerText = mensagem;
  } 