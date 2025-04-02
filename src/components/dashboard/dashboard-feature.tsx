/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "7Y8hfzAS9EkkDWbfwvTXstaSe3ksF2eL6ZB3vHHyiNTC7uUZwoGr75th9quMCJt4LY7vAY8gBawZP6DvQZ66KVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgVDZzbi75t1aqwoT6kG7Gtg4pzkLC2bHwouodYtpAShK1kv7KVS4X3vnRv4Tkq3Evs5dgqnJSbt6DKtEMLL7hG",
  "key1": "BsF326EatMPiriQd7cN7gZXsqW1Ci4AWgAcwNnyTDYX2wka7gyUU92vw9m9ZfMQfTdV7wztz5g3SBNXZvaW6zua",
  "key2": "2m13ck6FbnzXMwxoPunmftG1hBwiW5zZ235o8amLGwMQS7dcwiqPwdoKL9aJKnmxnNYH3cY4EzNJ3JzCmLdDqbWa",
  "key3": "57DsgY6mucPJnAeU3SH69Dwcsg3ivcK7btoe6MMcmzjgrGEKuatNoo1XnNV8hhRa2f2JE5VuoycsNWvveEP1oLoQ",
  "key4": "61SWqyGhviqe9P1bV9F7aenFvuyHfMmStuetssPiqVEoYrLFqArik7BekBQq15npkon6ctbGba3wjL8eK7yzKP7W",
  "key5": "5LwUTcPdbY1LSNkxd7DfKtn11L3RV8FNLtYXXCFX5PBXAGLQB1EZP4udR89buzdXPSpSNwMdDaNaLt7XG2jkuaYg",
  "key6": "4aK4ZzMYcLkh1dTyvTTkfZnDbTdk538U1RzGGUo8d5HiT5FhKevevdV4bjU23dj9XapUsPJgBVLgWobK5APm92Tv",
  "key7": "3kn5n3Jef2ybb5WGr1jjuNQ7iPttoME7dkEzhEzN1kSN7VSapVpohSwHMBhmRfvNNytHrsMGGzhVFQR2Fjd8cstM",
  "key8": "2YbezRVfSEf2wqDoQt79yx1wFQTN9Tem26kF6zWv6kc1PK3AfECtSgX6kiiH37yXuzHsBjiY88U39wCJACEmHpNd",
  "key9": "fVDRbzg1m6VfHSPWvmzUP2CgAsMkqVbYwhWwoz2EnyPLnTkuL57KnVfLK4zvkPQGrfoD3aYW5Ly787FRzXLuu1W",
  "key10": "2oS5npE2r5jzyybgBefUoJUswgCLX1s32D3FjyGPw4YJkH5E7Li75P8DzPcynGTFV1FFswcBoiVPccX1QwiPNH7u",
  "key11": "2zCAgbdcKA5LNnZxwUEjd7t41qWjBqHmUbH3RRKAs7NpF6Jf4NRYEEU9z3Ct4WwKv624xQvvYBh2NryACGtce9hR",
  "key12": "hJKQKXjdBbSjKtrzygkB6pBiyfztdguxMxRxNQwP8xU9S948jCszt4ozsxwqbSQaB74EHnfPurTAkaSw7k7gT3D",
  "key13": "3zhFia1qpfrGzCT3JJoxvHNDudjhTajF5fjY9L3qZP8hkUevcvmyoqk2nu6gbb3dGzuwY5eiWAmoELsbvdAgTWZC",
  "key14": "2DUcPZ8KhXY9jhbB5wUp1S1aUrx826pUPmb91H3ts1gFU2dqnQV5jDRc7LHCMxo35EA92qMD2qcgoymQ4axWyNyE",
  "key15": "pS2M43wRtBsC2hUnwY3vqj1HpVFzgZDJcytgL7J8drtEZG7APWdPMUsEEHs3nrNmiAWk1yMKaykxy3fd7z8agzx",
  "key16": "2vZN2QyybG7ZiKnFzbFK94vSThRvUviA3KyNPigXkbrrwWUrKfQLkvhQTPbQ5AyffohSMdBnmfXRxZddy9tYDKHg",
  "key17": "39S6Bk1Dit22vmrgLjrqnsH9JkbCgdPkxMXQWfAP67MPtnMuVdmgngPAqYG4ByHK2rS6WPtsMFqvjHBCQJbhSbZk",
  "key18": "2AY9EXHJwUyop4vgReeK2YfbepPMUwRpUFJjXmm3MjR6o1wLoHHNcjGyMr5HTcoNjqMNPTV8uwZQ8G1J7XoPZqFu",
  "key19": "4dRSQX7zgCf7vxhUqFKz31mvA1i6wWrQrLsURL69vNbz6mMsBqv3cbcC16JoEKgGMxCs9WpXPWvbxrKaKcCrYEJq",
  "key20": "2HtF2MidpjVPXKXCCd1FtvTCrYauwCL1vo94kuUMyz32gazXEoJuewqykAjpxhRG1Kzpf7Xd6TbusG8TjWTiqeR5",
  "key21": "5P6Xo1aZJfrqM9n1rQmfKLqNEuj7YakH8aumbF3x7uS9uHMK2xTVZ3DBXy9kxG6HcveQ5DNYx9aPsoEszJNcLp4y",
  "key22": "5p8ZPpbiY1FYNzT7mYPmQQbHqcMZUvkkomscitmPqj8UdnbsBTXLn4q9wJxyucAbJHqxtV4oNhDxCcXjZpqju4iv",
  "key23": "3Gz6HDPao6zqUVDPZRB81KkA2Ssf7FKaGN9sQkze2sR7r4gBKT6XTpmemPRNQVc93jRwR7FV1Je3kLbaxtcFfT6Q",
  "key24": "2gtKjUwVk4qSc1yRRUuMdGbeXR2DCT47iELAqii2fcSUnPjBK6MaZQb9jV31SCoyExB2SZqt48ZKF5eVcZfgYLaq",
  "key25": "3gC4yoQiGa5GBrkHrmLC832dX2DZMk1qtDAhWiqvod81cKqGepABRecsJ5TnUA2B4PKBhCUN4vVt1U9Je7bFLb6o",
  "key26": "2uvQSJkfwzV37VfvntndvHxE3Dw3Qa1iAajSA3ZjE9dkDmGeSU7gWyGiFUdSrtYARzQ7pJH2dUvaR4uuJyi19AVS",
  "key27": "2xbMn5AMRMfHpsbb6tR91GrLyzYtR1h6n2FenoD4yD1BnRNXFKSdCn2rTSy5cw2jwuK1iYAhn8oRtY9AGNcuDQKt",
  "key28": "42xvfjJZgbab6pBAFKALobyU4G8MXd2R5op82XNhmd8RaDHsvZeeWPoc6pk4eyHY2cpxEBognwp2QNFrmBztKMEa",
  "key29": "2x1HojsNe5uFVT62cEsEwEmbqwo8GWqBuL4iWBJk9ihPrS6uiTJojvvdVVuTYp584td6SgVTeMmmmPDvYu17tzfY",
  "key30": "55o6MauvZjwrC2aSUfmBVKySNfv3ihDhhNQNf9nYb2W9tfhtMggesMRsEJkKP3p4XzdfmfrpeVBo1DFm4qQpyHdc",
  "key31": "21pfJ6i2M4wX3PY22Zx3xtTQUGX2JNEgNBbZeTCftgUDGiUG324vqZWfuduhFUKzPLdtVCEkhbf2p2ZUAF59Ch8k",
  "key32": "45tdvUY3Y6Sp1ufBmjb9YQf3VieYwyv1sU9ZJqFgJw85cAk2xxGA2mAAm29Xja4nfqAEjZs6ZWE4kbM4kqsA14dk",
  "key33": "2ShrdiFQnv5vbBuj3nGRz21hpuUL1Nf4djZ852fD2mtxR21trZ1pKJwbq8XPJW13YDMfHCLuUSQsAv6iMLpMxJRz",
  "key34": "5GDtTPAeyUUw3cN5G2g11XbfaZMqR7hoExQMbm9MhJ5wHw86bGGFPhX1DffSUPzeySjkVnUyEzy5A2bn5HJKygYE",
  "key35": "5rvze4KGsSK9PGWFmwijCv9fdFkzfE3UBZZZ7WpcGPmSwMc92rQQV8ZHknSjrJmFj8oPhdzCx58Ue5XhR3ek3PhC",
  "key36": "51bTeywgFSERX6j6ezhcoLgWU1RzoEdeM4Tk6g6HSk9bUruSgUxjLU2XaNYrsDSbYP6h5oiYdYnfCyJhpWEmxxSk",
  "key37": "YLcyChJwq9QbkD225Pxpzdhqwz9NFta2EEVr62DB95XRLHnmqoeBUSYopePYBWzFgHpm4xzh43Xh3QyYhxt8pfJ",
  "key38": "2mpkrwNKCjazVRzRUAWsYrUjg4ECkz1nBPZ5QX8f4YshsW61tvdJHGeKrsjWbYSJQUJi81GhTmfL5xoYea1x5TDx",
  "key39": "61QfifJeKRPuNhftFi18GPy4aXmFqVstThYQQsyZZc9cJUwKk1LTULHDnGwUgGMLPpLRRh95ESszX2t4R3QMEZR7",
  "key40": "EdCi1HbGQuibv3AJN8n6cBZtFRk6N16qPaS6oKxshzaRp7ALL2GzSWtCsfHKb9FzF4GY4vTH8NZyZ3cBdcBvpq9",
  "key41": "qbYfySRFm6VpmygPB3UP8QkWJJfSGfYVZVHwoNpdSnxkekt2gYTh1VVSa2v9tojMrNDKw8NQBaKDR8cbcJPwmcg",
  "key42": "27qVBA7M6YJDdCRVyMvYbNGaw8bjrEHGadUnwT5ws9ZVadDuNhe8w2mZNmEWv9ZsiGx8fffE7wLDEP7KKMjukqwg",
  "key43": "24QckaeGjghtu7QknaUZ1j4sGVGgCzqCk6HCd2FSXscQikti15wv1x4KyExhiCvRDnB1U9RLTECiQHxVN3nAUaRh",
  "key44": "5D42Az52J6EpmCBnz1gCDGpdcTEaMBRpUezYCmQL3a6PanE6i7aikLPweA5UkddxqjwnYHMYErckLaP52p7bcGPm",
  "key45": "2uvetGWcVrfEuGAnk79JUS2ivxU5HokDy6ULRM7HWTHmREyLtE2LKdrXtD5R6eKPcgD6vkJ9PH6ASFCZ3j9okjRx",
  "key46": "4GTy9sC8g5fk7Xo1W1txWbyMgyg3Ujj2gM4TRnd48QKUdaFsQQY5RVYtPDiwJtxr6T2CLepeC6W6aY549G8m19JT",
  "key47": "2At4RA3iGt3ge4ya3pLPMXKeYW6XjgYDQ7ktH3AVJL28njWP72vSHVeYCbo9bzeGmo9wJZTw9hKrJyz1K6ERYWXN",
  "key48": "2cXhEz6bQuDutF7ccbBo41XWEwmv5CMrtv5y6mETCvyLKkLVcv8JVN8dYu8UcwJ253j4csncRFmqayqvf9HXsHrp",
  "key49": "4UCeSKFhjDYSQPgGUn3jtTGWpqjSbzXfXM95XYnifEfmW2auWdw6iCm9Xn4sG4UrHKKcEa4PJeU1U5vVHrdib2oZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
