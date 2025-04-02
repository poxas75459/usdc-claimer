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
    "3G51FJzFSRAVqH3DExRed8Mqh7irUMsJdWUHePmC9k1sRJ9WZ93FLjNYQ2K2zj13T3WYmmag4MaZD7jbaq3pAjqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dHYwEpfJTecntPFPkVmWPo5BmPwZ1diFrDhsHeEQhRwcYxpfdfZzQqP6MawnKK6bywDkoZiF14uD915K4dGnbyK",
  "key1": "fmMzbTau6r9QFuRAVt1sW7ksHWepvr4udBzzSMh7aoXeAxfcqwksW9JusbpK3sfuA46VyAfFN2KYWm8d2SKt5Wo",
  "key2": "5xSJrL3wAXXzbXCtDHZsgjwtED1qwCyxizHu3kR5aBivv2U4Qiikn1U5B8ofWquriZDUeaymFJhhzTvdQj5KTFsg",
  "key3": "2fjm1xHLtV5RxytNquhZzvXJzP86LKAuedRVQmkQgSRWjzqVTLdAktrDH1ayxMRG5XRq5CUCUG1XSoFtrigiHTwH",
  "key4": "3f3NhdHnvXXQ1rdw1BdgWTgMNgCYwFgiBbrKms53xtCKMWsPH9Bv9X8AGPLn6ZXgFYMf9QEUr7QtCb7RiiTh7jJk",
  "key5": "3ntrNFX5dvfNbE2TWrkvVfY9ZVfSzshQBgSh3bHhieFv9tPJbfyGBhDQxA2ZG4uXcLoL8ooq91BWHuWRhDVo3Z7q",
  "key6": "aCUUTT7Nu6HwKTFqJN3QCXnm6gMbKUhNC7PVCDwXro43QwmkHDZYH44GLHgFfkTuPBUfZuLuSs92MaF67B6L8tk",
  "key7": "581HVY39GUu2xCguzv9EhrZyEXDJTxoZzCvEGKDUFF5y4JwDQyqLpeSfBBoEigC7R88FzZiFXB9ahCB67EB5xf1y",
  "key8": "u1a3g6mw5ygvaBDhZr8RHMVZGXCp4mRutYbCQ2tsJWdFSTqpX7NYNUGx8rA8pNpwvrKAVByo9NEVedut24Lscdk",
  "key9": "3FUMCSeVJiRKf4WZKmAwrwyywZQt9LXAVzF5pZPYPGCmdTdHYGzPzdc8443k34MLRGSkXpoKGaJbw43utM7eiZxG",
  "key10": "41jCQwH22jitseio3VDYgUAfByKW2TSnysQUZW52UkEJUMzUqukpc4oiCfBRNbeCL8NXoUEehwa1vEEQ8Yes6GcU",
  "key11": "4BybudF85W6N3RMHvZpRxFQ2wQ5j82zA9sNV8pwm7eqoyPXnoCBTCzNJg5ku65r3GDfQ2Bj4iuG6KbDhpb3s383k",
  "key12": "ErQBF4xV7d3KZTNyDmPQqcnwUaYfJMHFFfpinq6MCdHswMPLsigPje7YUKrLkzMJHfKR1izMyfqia8UuUPbPLMX",
  "key13": "4wqoc4LfEu2zD2UsLd6fSQmZBAkRXTuK1o7XdJwg8BDdcMyDTixpGhrn8Z4p7Z2f7CMcNzychkGrjGfaqhdtsLP2",
  "key14": "7hKup61nC7ce6gvSHEYAaHhFztpLBpLpXyv8WZKzZ276YGo84ZaaiXTv9HUHo5fuybq1TqPsBCuZcWuLvPxmWRv",
  "key15": "447RCUNtSKJrznsSKLqm5PZUTibB6XPgUWAhEbcCz4z2oJQioCn9L7MENWFW2Z69BPoUxXVezhAPyh3FFz5uvjKm",
  "key16": "5oR9CR98LAJiCUk42dBqWH4tzwKf121YQFnuuqCVLA4NysWEJzDsZi8gZkgXTiiAGCTJGkkBiSn4mXwek5pu87S",
  "key17": "5eV19Sd8H4QmrJRccnhMS64wVzJdvDqbeEMfqmeoqdsh5LcNWxpieRCYeVGt464pZVintsk6HDfb6iAT2atoc35p",
  "key18": "64k9PRpbkcLSxzcoeYeVhNrN2KnFUAykgS7gcsyDW5tu2YagEED2iUzYzbAyDo7sexniBBpkBqC5S7Q15WVKwwD7",
  "key19": "32F5HCkive1gMsgeHTqisq9fvaHnWRsy6BXs8X1AYzN6YP58pGc6x9Ao5BNnXf5dRJpc2UabHandynVg2BMNw5aw",
  "key20": "3pK3aACxLpr6hXC6oiBJWJMmghdW9rgyia3PnJ7fP1axNT5Ww6pHgJUuDxLwRuD147fSvZ4yw9ZpUrGnwgMRJpjW",
  "key21": "4JSjFp3Swq8AXXsAgNae1KhbpdD4U3JT5Frzeqrmd6Takmc331XBPxuwPjbBgDryfV7G2B7bC8WxoRFP3JCyUwU",
  "key22": "5T4v8ZzBYTFR3KdFUiqUbnVmSWGkdF8H4WjUvjYND9JYQCAnwLV5FMcxoPB5L6or3jFVWTHLhvxyQYcexn1gXUGc",
  "key23": "jhiXFjrkL48Jir7ovWyoPzFkQsJaCnYRx1Jg6AqYdNhLf9D3LDgi1AztQaWERnvT1WQYnzTPmr85xEmfyt1odpa",
  "key24": "5xRficvdyh9KnaFycGbGfwP9Bg4opgewrgpwRDZnGmkFdeJwvb8NxTQmyzev6L5TknUVcLmTPT7tShBNv4Ajge9S",
  "key25": "MBn2GUciDP2SSWdANqSTcFBP6nCVH5can4X7xRJkb9ePoUnsHtVVtckC8knBa1Q4PZEx3PbLcJ8ggbT6uKGjXwq",
  "key26": "35sv2ekHAvHWL8RHKQzqDYxdVy4hLcgjnMsq1THhQTSRfsDK9hNzean8Urrw8ZgjHGbZNqXBBxCejnpxXKuGnN8t",
  "key27": "3wEytWRw5EdFzqfBt3cNrLmRwxF1eknJFR8RLQwg4AW8SjSzuCwnLgPQoHgLUqPg5SqF3q3HUrNm9hEX5xPV7Jjj",
  "key28": "46SWGNFKJmdVVxf7Xy2VZYCzpTLNPXSf2yfRTeiWnyZrN3VT1rY75UCYxZuL33ANA6UN6Uu5fUfsL4uA4pHUohiU",
  "key29": "5ooGB3FWBEXTgtCi2m8qqS5t14WGeVJzcxXuHinHfvU25Az9xaahngVK397VSTZG7MrQP3dtKPJfUrMeazgRDfgS",
  "key30": "5jsLvK696WaZmr4o46veCD9T5c3jRjbdMBTZfKKsYBXx3U21RumSFA3SP1fVgv4U7SLkDBHuRWAxQPXRN3rJy6vD",
  "key31": "4eKGjzseAVHqdExLZh3scER5ToDB1jRujuyVScu3GNQtJXYb1AXVLBeY22NuFX9GCh9ntNhUaHND2GySB2c4j6GN",
  "key32": "3jt86BtXTSZeD14f1wKatcAEbBjQfP8MuE4i1ihFJxN4WFzArSMRs4r55kQSWhU4wzDmNXqtss616LHk4Z5DGzjW",
  "key33": "5nrknfzA499Ji1SGXJiJE9582eake8jy2FDHh3y2naV7kcenF17yTvp24jPKYACppKzFbV11DRdUAtUxRor9EL9E",
  "key34": "2YUFstTzph61vX6McrMSeVtdd7SxR7TwveZteNb4n8NWgHYcgis7FJjfNHNL338Yk7qdcVXZuXH74Wfj7RYS2npR",
  "key35": "2xZLwKjDL7UYEGRCEcHHZHibSBj3s4Mq8qqLahgB1fPNfbMfNgQY3SNMbX1YMAUty8okXMkdpozRph8vPZ1yjzHg",
  "key36": "3cp3jB7NCLUE21Ub3W4nWAiSs9D6P4yjzkUrSYciQkDzr5nswDhyP4WW1FQnCdyRUdw3tJnpafxmmFD55qAHTWFk",
  "key37": "5wSjpAX9FQ5q7XKoyNT7wh1rJfYxCv3TR8Fs38j85MosG2ctzCfgkajTawtch36a4bukFknyqFKte46bjPRTu2Ug",
  "key38": "3333hYTCuWHYVpQfZrBaUNU86bSPW6sMheLwYXSncuUfGBJSY75efizAWLKnvVijrabSLohSBxfoFuHEu5vuMV4L",
  "key39": "43KgJbqFLb3PrEJqvvwKZXPg5rK1aWcasrpmSrG5XHBiDwaurcDbBDawMn9AHqeLUSpuNRmiWX913wfsRewujg3b",
  "key40": "66asZKtBVFbwQ7DBd1rDXVkzbFaJRBXXbRRERgAsitSeW5yZZx6spfHWkv5iWGXAdWaDw2gZ8Z2sb6unnhePDZ3b",
  "key41": "49K1jusEdcLrxxMo7UUg3hpDvUkdAcECPj1RrMSnEQYm84NoBiwwZWGd2BZ6gFSg8Bj7AVLM71ar8kQmhKkrQ5Sq",
  "key42": "5gAAZDT2tuusTjUKHED76c93Xo7qG8ES5ud3RzVgrK9zTYcxNDipWvVHxY6HG7ycCHWmfb94iS9Fc4uouaiFtK2u",
  "key43": "32toydGJ77ESzQYCFnndiouYKqH5J2t7SES7zRdEE52MKktShtgErAd3G2GLQbZZm9RTS9Diz58G55ntNW5pV8JB",
  "key44": "5GPCLzsBxSheunQsQ6p8oeWjHW6ZcexPPCcYpoB3Uo5YMnG5gFXfdjKzmDYmpWVAt83CeiGPFi67dYP6XjwZug4X",
  "key45": "2wg46VfBGhTMJpoJMCDx14c34qJUrZ28MgA6MiShfXv4PU6vbhVJu9LEGfQznjbkLkKbcKVarRAH8txTQJJMCtq3",
  "key46": "5vpBM5xfRFMj76RaxmbsXp9eYu5MUB29QY8meZbuhNSYTLKsuwniySSSkpXbDaPWvLQeoSWWmbY1PgrSrRHWc8hs",
  "key47": "DuNdZSwUtXzakztJzJJw1XEoFXrpMmEhoiZ52tPQ4zir1bqSGd2C7CHBbRqMv9EMqDincGtipcy4EfAK4vTogde",
  "key48": "3VD64YdL85KCL4366L5Cf6psQhjtvbUaUJLsJ9nRto6LHHWY9XLeX6saki2yeytkdDsLTjq3SZzfo9Q1aePQZVfn",
  "key49": "5trE28fC9sfDkUsNKNoZhBjYhTFFYeK1SD6y71SThKWHfHdiYv871FcsovktwJdaLKfigJHtWv4ySkfdeeUpkwL3"
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
