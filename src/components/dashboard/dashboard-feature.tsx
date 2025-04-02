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
    "3CxySbjBMb4JpBuoAR56yhdq4ndXAmG7P4W3i8CBNnfWaqkYeSBhg5WgdNQPjwX2qAEVUtQfLJpBkbUCjWmont2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZGA2SmBCTfszRefuRGxpGfF8dBeBPGJwUaK1GoYYydmjprAXZGJKcnjJkqDTpsaRXC83z8bfnSoua9NFWRerH4",
  "key1": "24QBhU7rPD9hhVQPtNobckEwFSPiWPpXywyos35P29k6pBgRLR7SenXBBrsyB83BsP4t9UzXJ5AsLrC3ZbiJeDw4",
  "key2": "4b6dhY3Dt9srfixXcUKX6QzcUWJeW7piZUPvCedb7gwPzk8jnU54Mgphqxf9rSWyrPFz5mkKj8vmacTAig94NWnn",
  "key3": "3LFZd4rgm6rfWwhXfb8n2GL4LJsG8aQCQUYtcAamMy16SmeBuvQWEBAVHchy9uWgDs2J25XpCzwawNJTw2BfnD7o",
  "key4": "2bqZnhoaWR7U7DU6WryA5c5PNTFHG1EwUxoy11KPiMx3vRXTNocuUpeFUsjzwn5njeDZVi5K8NNhezUH9mLCJYMY",
  "key5": "4qEaxgWCTWs5XjJSnYjJkMr29s1tUteykGDJXYLSd7WdRfCHQ1JFxyWo9uRPb9G1YoXCQc9YzAGaaRr3tC9wv1LX",
  "key6": "3VGqgR34FBTksJ83s4Y8J2c4bKWEzBz6SBy2W1Bb1bKDavVo5b1oWYjoLoG9VYWKWYtjjndTfxLjVwNfL9PYuAH4",
  "key7": "3A6TQbwMbBAHzoezNZxAbBZZeAxUMFxLHtXqq9fDXHaRinMLWucUXWm7YxPuNLBANyQeMMn7MydeYKLbCQ3uMTxu",
  "key8": "2P6YNpAx5jdDcHwi3Np8dvkpCNJ4FqQzSbts1oWdiE9D8LvoKeSGegb5mmaxkDWKN1WRvmHwREMgusrdpKCC4c8m",
  "key9": "2rtj3Z1D2QA4QMr9i9mS1D8pXQbhiVcSXFghfrBASuvhT37wv51uKATVivDV4R6jBeVXrA3U9o6acitudH8HMDoq",
  "key10": "4YLrFCEsyvXPfsswr2UiNjFbmuLZi2rtRzPXqK6bZWUAyQ8e7SYkELQAQrPQbByfYWHiBjbY11YEdexYg339smTc",
  "key11": "2P1aEzzGw669mTZzyCtB4hdyWui2TN4bXpJGMg7vT1c46hrd1X7drH6bpYVhqf1k7vxh4Xz5ocTq3zgHgKk9RJo9",
  "key12": "41XzdaNM24S9yUBGyvztinbXzEZrNCYopvFjG7bNhkq2fY71WzNNovMZPgBwq6LS61W9kz1txUDxCn32qnbnVCtt",
  "key13": "4qYZd1Ww9NLsBXfG2grUe1L5QEqT8Y1FNVJufkDc84532Amo9jrhWBuS9mm12QyHj7gMM1zCg3aSJm6SfQijjMsv",
  "key14": "4G7kgncRu9W5x9wvj3zt332Y3xMEtGXA61Ka6o9zRvf2Nx7cKFQMR1ZifyUWgcTr6G7sXABYjdnDBffjNGWdGNBj",
  "key15": "4A3gtCB6TLj64x8GPBvmrEyfux5AU7ZC3hoJp55rdBSTeuyMSULWv51zJwXs9MPmKxXKpmY8QKGQYEwXym3BAVco",
  "key16": "4fp9sS51zFmXesn93H6mjGzaswRZ7FmoHoVnNExhVxbYyPfyZUSVsvBkGFCaF9fRUtpkTcJxpHwypX32qkKBnwgc",
  "key17": "4qHdzYqHwncrfyvBXNmtTg3VJSrrZEhmncyBYAHfQkNg4NVPnub7PRNPEE9gjQFhRjVZkLAsQmeTKBjAHBtoqxdy",
  "key18": "4U3vCmBfiURp5X7wCUUoBaKpuSAXPQALUULE3bca2q15jQPi2rur1twASjzd4XvWJjcBr35B5hyHk592cFiGxESz",
  "key19": "5PbWDxBsew1X6fToBM7qfUtJE8jqJwbz4SsKuNjrjLFoRCgLVcJxrJhp7KueLjrWWXBUT2AaKF9UMNuXqfJwv7QU",
  "key20": "qHeXhiPMtYRttaaaTWM4dJZPZxTho2BsoNFvgtspNRpfXPnVUxt6ttVTij8pGsqVN1UxhzjR27LqSdjBvD2Pg7e",
  "key21": "31mwgn6uhzgJMVfoUSzRsZtUzGZCaUffbRuN8CGZHZFc61aE3U6yLzckNQMMKCuUK1HKAXUv7nHu6VvtU6uFNBVE",
  "key22": "2CiXh6BrMZ8vApKnN9uDSve2qQ4F3vHRxB9v9RsxQ9BNrQ88PJfjkraXE5kHg5wdfPdwhk6E5dq5wNLPiC5r9nDo",
  "key23": "SmYkyC8Ff1reDbaA7YAFTQYB25jVPKkB5RS4z8LJ5fHXFs15kzZJrx4qqnHJ4BVhmed2NNitwvMyu4K82RBcSW6",
  "key24": "2s4m471pvrG5wPE7yUgUYNyhQFkrqTiFfKBN47DX7LjE4vZDL83V4VT98gCBBeft7gnDFRjAMJ8VLZYv4TZNMkXn",
  "key25": "M1tysmAmiVEUZNYz8ZJwg6KRqhbJyKDWQs28Gjzo4k1hsjEAjjoMdMmzksXrbPZRdLW3N9ioQakntxCHM7Sf2GH",
  "key26": "3YKSh3zHtXiTbsdh2c7HD2gjjxqGiPuSG7P2NyXwxGdoFeC84uuihK9UkmgqESE4rchUwYoLoATYTzaGX6Q6NgoZ",
  "key27": "4ynqvYSwS44E9zuUNFTxu89r3Q8cGFJdF9XypeZnui6m1Zom6qi1yxLqCoTpr6bFBvRepE2N5RCaHqa8iNZws19U",
  "key28": "jiPhMXutiAbYo9pTt7fggnvuHdg6KRQdqDuVHTGPexk8LRaCrGnKHb5bsgjJYvvDwtTYoYEB4KhsJUSRPk7QoVo",
  "key29": "5nda11QupimoXPxQaezTEx22WoFKyHWyaLwMH9Rw8Sog8tbzSorry1kFs7Gp2uRFw31ymoKohHZgtKKMn4q2dBjH",
  "key30": "4G5ccKNb26mDCEHFwpJVRhKta3QiSnncScunURMCLHG8sF6yCoJd8y5SZVMQJGHFfv29SFYCtseiN5i6dLXPKYm4",
  "key31": "4TnJwNyvb5AvxcrMekTMxCgqRsYdfprkDErjVkdStFWdrVwbYhGTrmKyCL9SqbczzNtLN465HwjoATmmnpJv6sP9",
  "key32": "63eZVujg7RWJxUutpr4EAxADf6u1LnmScZDjx1aaUws9ZnaX1Dc4HVbXdbXKXCiBkptYxBpS9q5KE8YJk2Jt3Wdj",
  "key33": "4E5s9KSvptxSNjn48DEfkBm2mULjZJUuqW2MeRWpyTth5rrRVzzPSt4uefEnq93XAcuQQXBdP5198PQChghWkBL8",
  "key34": "3K9wivTTvkGqDEuRcWvy9zRtXSsj417zxa9iMHmKujtNuEJR5csYEig4poTq9ENRa7mph63hAN6ZEmPyBYP4jZd4",
  "key35": "2t8Y6LjrvHog2wnqxK8DJnscwCciwSsWm3LzxJaFdafSXY6hLJmEb79TqmvAZ8sDqW2kHZkWcPKvv4JayHiXC77y",
  "key36": "3eAgFzWQik9NrRekzGPEdzTXq2TuYCZdC1peRaJNUAsmrZbTrtURtYLvyj6xhWT6GaURcRRcC5bB45qRbWubyf51",
  "key37": "5M11PQDSC84q3JHdEMaRbtEfFAniHx57WaasRcgdBy3zfYM29MTNTGbeJEZLnkTvxtpPAy7bv33175ohfsvYGzSX",
  "key38": "3Z6gg1vqYcdU5o8SXqAkjBwpUUKfGZyNupaqkVrgJ3J1GJ2eKKHFpvuwRijRcZZvA1BHQa8jUcWtvHPNJttmogqp",
  "key39": "49pax7UdxnbAKvUv1TYBwyp2568angocQcMRC8rTYkr4hm6rZCrMwitthw5zkSoKftEMFRGgFKJEXz8wZwFFrKAA",
  "key40": "2zUYshxdJukki9teZ7hHuHVki5u92xxB3nsJ24ZpACEB9eJBTQyNzBoc5nyUTPo85qdYKEBbuU8tiWtp8tKPatTi",
  "key41": "4Ruagzr9Ue6dp5sirA9RfXNGY3cYZNVUqBFaSgifxGpxTNUpXDQcbWNC5G2DD2EMuatpHhDF1s7MYCm2qARaK16x",
  "key42": "2JpiKGxVbAwUSWsiP983yK8Ac1AMf4GazGyEX1d8teEc5o23riGCnkRy7LUkunbkYoWPunctYq6zVSemRXucGgmb",
  "key43": "5spQzJdf1R8QAmDeG5hzSoPqkD7D8oN418wUf6MDvZkuQNgQggKt6gtbwA4vDUpPVHUpVE73BYvY2P2NTrWVDWKc",
  "key44": "2EkKsKQEFBdjaw95Q8UdrzpXHGNVFTy3WkY7w7TiR6mt7GSCWnph1vVVRpafx9RyeAg6PpbbA1nSFf6mjxJmgAVM",
  "key45": "3M3icVmAob2JF8nFmye14V2pRhvzuhb7eQ75eK3TXq8LtFf19zqwnhqJ4pMuuLirqyP6P6Xuu8k6JKp5tsK3vRQc",
  "key46": "2Fni1yjFHLqanKM5y6sLYuesiTyaT9cs9vhma4Y6QZvoN161eXc3GbiUcdq2yBzi4uriyPegSVMBYFaGdoC244Pc",
  "key47": "5KKY92wN1bUrK7qMeK5x1JqCGFwB92oTKPjD5KqUJgpTquAAQSduG33JzNtoQuqrznL93hxQSVwDyp2D7yQuXEV8",
  "key48": "2rJRbKHFQXWXT9uN1BUnBAPWFJSKGes4ZUJM97zN9n2eaqMprskZGKRFyCznhPjbcGS6nCWZKSdPPERtAFzLquDN"
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
