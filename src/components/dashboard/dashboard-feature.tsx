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
    "5Gq2AQ33s8snW8Bcw64dsZgUfDxFBEHwXNE1RGbC7emUYsvffvzFha8nZGmNKbEkgbzRHKqxHTBUAvVdLAZTwDXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnAhoqmzEg9d912Tb5wrKrMSyRD33BTGmLLVQwvqXsaV6rZJvCTywuueG6CeKvz64hVR8GkNQH4QnHxGdrTV9z8",
  "key1": "4JtVHmBJPMWVkdSY3JDddewKNcg3gJCw7k2UfPjn6qmEo7RaBsYJKKEdKVzrdaESe1ZNYnhtPExmhiAtwmEgHRWM",
  "key2": "5MY7GXVz2HAmaE5FevuB4Pfb6EAoBw7SiUaXFXshpZwNGwEgkC4rXNSfQbACJ8SJrz1mgC3SmxdEAZeXrNE9kA8h",
  "key3": "29ukhg8ooySatBhfHfA9T8yw6aUkXJtG7WBmDoXU8SR33M8pTyvHmBeCLYnw9dyujznjn8TxD6kjz4HprYCaCQTi",
  "key4": "3L4JvCQAE2wpUXGpXh1Hx2ma7U4KwfpbqdM15rkUuP1zZk2daVrNfgRpoLpG31re5jHHZz4GEKXfPW1psUvDgGsp",
  "key5": "4tNXmamqnNF6Zw2298davQYhpuJxUgjBvDjJivUYJqes9kdfi5SGhgb6egJ9qCnNGAuUwnBDcQQqJgwVhKEeWU2Z",
  "key6": "2GvBwx2ZyhG7KrxcqinHsNL8zpmXv5AvQsYoxGY7XZ2FYVbtHCRrkrF2UENWUgnUgHg2EbuQyorXKWY2zCHePXAY",
  "key7": "55XxH96x7sSQU7V2Hrir2Aa3USZwXWDnSqe1xZZcgHLKBUJRsnnr6tFZBj339bEKmYdHXL3CVNQkoda6XdBKSa1m",
  "key8": "49ju93bcJYttEu4p9zh1dKjWPcDLih6j8qiCnMofudPGokPofEieRnXtQBteSXHihsbyAJCAv9jXoVb16txFAvsq",
  "key9": "5LMNv482HccgstSH5Wxac4u7updbegYyMGhPUvZZbYGgVrm45AqM6fSMGWS66ZDzWbNFtagTrci9eNW5hxHrQwjY",
  "key10": "527HZAp2GYPduTVDD8e8rBqyUzNYawjSpJswvLkxD3o5ETUReBK9AmmkbWnSNX9WcZYbivjsR9xGgqbndwcJc8UJ",
  "key11": "FzWgVGiqKqcUJqVfY6QgFLqjCw8rvqNHPZ5R8Hs2Ppwg3gJahHc5LqE8C7zqQEjuf3AVPwWqRVtGVLHMqQPVxCc",
  "key12": "4nJmb95SpEdA68B4R17mUaey2xjUHSHqMzxEQRb785NQGTeW2bngXCqqJ19TsHVhFVWovPJc3NCoCVbh9TXrFinY",
  "key13": "KixPhFHjrbihgHH2u3bLhP2tC2yyA8YFWdUFd9ZqnrEWFrAWQ8C74ph58Tw4utKZ1w1R68QMv8oxfcfYuqTsYKy",
  "key14": "3vTex5sLotB3tQjyAVeLbNHgoxvXkFRhzsdmxrULzQgrcQFYNw2SUGXyD52GUoj85sxJ4QyLi66sdkEuGLVXzCLJ",
  "key15": "Cv4cB98x6reJMfJDZuWjbvT9LGVQDUeKni6YrtJCiSmuspEo4yvWseYsF3SwXfKYzoQRjHMiq1uW5jPjk7KGaxi",
  "key16": "4zrrpVsaSv7MzqVTn7vwE1hdL3Rj3A3p1E2KkLHj4oJqxnV4rnhKrAmBNvrXyTjdER5wP6Edyrfn7T3WYumJfcTe",
  "key17": "4s1SbVaPjrVcWEsdaXxhT8QDzcYZj22khK5gQoRTJHWCbc7cAp1NAZg8XBud1dTVFFzkzBgboAHQrL8VUw2Pzm3u",
  "key18": "5oGzPV1JDeUy7KSoLBoaL2giJiVYXNQB2LXrC8C1BJ99DUWb9BSFXJVtgQX6rh9ZdzWJDmU2gBx8JhQM14d4eXhw",
  "key19": "48weTcPPqNikdDKz3hfdM53txcXBjWF6kmmBQvTa9i71pNeypVAA7xPVLKn1bfCkFT8tXNGsrH7qGkZWdN3ycJ4D",
  "key20": "36wPmKe1KcDtizLJR7ysp19qYLkmovSUBAodNjDduBr8G7Q3CWLSD6XgkUaUP3hhdULGJorJ3fzujq1BCCeuaujY",
  "key21": "4jtEeEWR1r5B6n2cvHFy1vpYjDCiVvc3ofNDKn7fXvsWjen7ebLxzcTnTJJTL6M4Mq7SjgjRS56maUgra9cXVNdk",
  "key22": "45ASYoSbgbQM2z5TuBdLyphsLJENiyHURT6a68ufDboK3qSFX9PQbU7Bw42LN1oX5z373Pi1nKzUdMYMQzTXmMkQ",
  "key23": "5Lysn4W5oYgdDubAwMfvTP7WqShxCkGLkLeNYNxXQ8FhVg2qousZwPWLNkKxpJ1kewYBohdEzqYHmTw6woguDjQs",
  "key24": "3ooMzbc926vXEVrfttQq4YjtM6k3KS88buRQtTrJVZiF9v8XzgfwGumvXCLpYhFYHiUaDNpUBrWfWLitGRnwa8s9",
  "key25": "7Fhh9UCqDPSHzZhfbw3trKyjmNQewttFcajNAE8P5fri6pDit3ojZW16tpw3ZkSL46gS9sBZizXZ7xvyifsjVdA",
  "key26": "22NiybfQr3Cv6RSmEGpnkzpPPfrtzuNfZphv4zm7QXDt7ucnMZAFxRGW6kXh3xB7AAgqj7JTYDLXXaXi4wJ1GNmd",
  "key27": "2HiV1y9feVFTy8y4FfCKqUfrDJw15No4TCkGqYBjRdEKaYAFMtc6qnk6ETUBYTNh3T5ScAWqEMK8whf7DFW3DuHj",
  "key28": "4sKkfaF7w8yvtVgqYYQCwYt3oTSsRCG5XqunJ4cbNqTHordHphb4FC5CTB2ptg3astozWz3qBSKDLHoL7PBsEfBn",
  "key29": "2pydd5UyMaoasAp2Qig9fsU28idtopeFxf1f8PaCmpsMg2Ydc5Av8kjtwmtXD4A9Zn37rZEGZ76MqQz3bY5p29nP",
  "key30": "4p8JoydWaR36Y9ZSB5y9xwKnPAnRczo1bDgtehV7XAFQEX3kaPBY34coQrZDyij1MK2pGMPzh7BQBNnpcRhiRZGw",
  "key31": "3Fw8mDTAWG3X5bCs87oFJoj6XmzcSKmEGLaQscFGwYC5bFqUHWD5TTKnAeGJdsHBFzpPtRaDX9Nm2HZ2qUai6t6H",
  "key32": "5pa8Bi5xG8PcuoUWrgmuroCyn8yUQTcTgqD4YWhEQGyRHD8L6zibZ5A5ZoGqMaYbFWbQKyevZEi22iv72yxi21Me",
  "key33": "DisfJM6Pmt6AaEfZg33QPqC63w2GTtQJNsk9rBQB9UC1yV6dewrRA1j7j35Ff124M3dzwif8Ps2PG83YpdpEkAn",
  "key34": "625AxujeLwwm1rVUYvNCGkBYExKHT7Vw3ffCGrWbNVEXNRD9F7uiNYGHf7Vs7hdBfeNUUWrroDfu312qffEkEmHa",
  "key35": "4xsjBENGLNCopkKGCbLSFsdzKYrf55BHRAfMkwGaYbPvJ8FWnEbLbThksWXeMxDKTao63ExfBKmDbxmTZck2MfpT",
  "key36": "AtiYkhzoxKjBV1fWuucRycZMMXbMMXNHgMki4fYaVpq8381BTUgK1yRbnYAVSk8m9TqpbVRMryyKbE9fT2podE7",
  "key37": "v97CAYE58MhMkKULr8r1krYKSqaUbHwfa6UN9UFiUzgPR5Sb7PoDUxnUgitCKYCXH4isHwKTBxMZS7E3TP6Kz1E",
  "key38": "5BADnAsqBJaggUrQjXCyQh84jo87pxcGazCoRPTVLRwnLcBtj3mmzbbyKvMZeboniBUMzvf1WKUQyYDTFz6sLx7R",
  "key39": "24Wrcdn2mLPwymbihA85twzzR24LVNQTLejLt1X3ZUJ6z1oRQ5RqgjHfiJbb7vGXFqQZsM9NsVhH2fXnmBq9mBME",
  "key40": "5ax4nZKcYHinrnwnWECdsRT3uvJe6xTPoUcjqgFMU7YqK4suryhWdMfYXyMV5BFh1drzJwfoG8LYK6qzHdTat2BD",
  "key41": "43geDELpLaeAwQNGyAr31wcYi94bQGNF9Yf7USjB4VgmqajUu7gmoVh7AVpefrD6pfCocBcSvBTWHhqCMD6irRkY",
  "key42": "2o47nhAs4SvtzHheTAY97Hti35at4pq5Y2MWRW195W2LzE5sYAuzdKirkPdahzLp67RwY54LBcv8mSNavnsvwesB",
  "key43": "4BmLbyS72rqYEU44fa87afPhaEswTURvYrNffcDD53UsCWUQ8eaXbn2Q4ZY3AGr8Yfx18tydZ1bSt6Uk64BDjR9p",
  "key44": "5iVPLL3fZS8pUa3nNEBkyyG4Ajfx8vQbH5Yp9bZ89vswiRE7yoZi2tCgUK47icBoUBbhTavtEMYDF5ffdQvseQF"
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
