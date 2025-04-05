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
    "2RXNabToTgnyo9rxa4tn1RCGXh4SzK43Dachjk34FyTZKFtqoHwaYbBL28vtLKDPYiNto2wTmFv9fNEkuSA27kM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbJZman8nbEwFpKwUrEm7eJA3v8DgDVcDDBDDDKZfgBJDjGckHGrjdsEFJ3fWBXWKkCrXjBwV6dXquUTsKKrRS6",
  "key1": "2wLXPzzaebsWZNncNicGK3v15mzRnyRguaoE2CtEvSkreMjYRSgbdvXoWxQt1iEhbZXcuHCALJMWfKNtc2dvBmRQ",
  "key2": "2zfaeDMb2ZWNH3rkZhnmBs7SpGQMnULrnB1FLLzFtoNYCnJZ4KnB12HQapQk2ZN5gdh7AWLo1asJap88Lwa5yLUV",
  "key3": "5hvFJqXCC7WPssUxKWtCvd1CpmkXMonRgeos5mhtE1cyKdtjpjzFd2hgMnwawBZsp9LHBGBZsSFo2fp5G3VTrJf6",
  "key4": "2y6iDEFRxdbsdXiRu4Nk5NyKfij5MGq5AeMZ7MJEKALeR55L8Bz1pprhyiyShywnbbHBofG44ovsrdGztaDbHwi",
  "key5": "2RB9teze2mYty7G8PqEPKXeu9fxJgUddkxBzGUTc8GuA8HAVhTypRWiyLpwNiZaZudjCJdLjFWKhsUJ7un9Fr41j",
  "key6": "pizCzgBFqKn5TaAXhJM3WrVCiuomDYCT17CWNXfufLRcotDYorBwvQApTUp7GmW84GU6g2HcpG7RKv6GZE1DRpe",
  "key7": "4QkubapQAtC67d2AvEEUTMWu7Vrh6aP2qUZfWb3ByytTP8chxjPPZVxhvkmohj4bTnr7mLUo2CdHATexzyQgSmvh",
  "key8": "HGV3vF744BBqJQKp8Rtj3mw2WtMSAWWn9qXMmxkgsnRXomdz6vJV7Dp91iEo9cZLkrJJhGeRRPwiZqyte6UqsWw",
  "key9": "WrEXoWC1U278YBW49wWmTf5V3VNTYZgp2NQaXyX9Gw4HTNNHb8D1VKtV1BfQHEFaCcVufAncTE4sdFzNRPW7mvK",
  "key10": "4Ts8T8iUhWMmzUzu2tNEeG8K4dirTvQUStj11sjJUEWjqQu6gaYwreNhhqi6FCs6FD34wyKgAi8ai1Wn1NLeAd7Z",
  "key11": "5ydAHpzo5Q6J7hRzewMYPMLN4QzCogPPoUEo2YxiczgLc1gcunwaWeRABtnpPEaj4yRTWX8uM9mN9SPmNFzYu8XF",
  "key12": "3WDiohr8VAWx3dk1zwZJ8WBeYmwhe1EAMuoCkMY6w9zBvmcTi4pXuzA35BjkjvoWfC3gYjVNosAicZNBNMmFjysk",
  "key13": "2qjBBxYuoZh87ecvQdzCURc9SEPYQ9ZiU3o1nLXRffwZ9ESjDmXJiNuruxjsHtBpVh7mmm92HaQFxGimYhHnK591",
  "key14": "2So1mis1M35UkhWf83cUXaWqeV95Njn8tdX4UJ6MW4M4zwn9JYr7PGKJrNXYX1wAnEbowdkPUtP3h4r2Kn1h29gp",
  "key15": "5EBxAsVaR4X4vTH7rrS8J2kjiMXJsJCz8FZpu9orbNYQZNkBsgVCrFpfE6DrMGuWjuYgXQhCu72ikfdssyRwF1Lf",
  "key16": "VHXuwv2dDtfyUkZNCjRujMnUHnB98Z2ZLDKLj92NcxAiiJKjPqH7qRvugYvxaPKiQedhfHeUWwhAzVQtziUFjf9",
  "key17": "5MayACnb5a2vuLMzAMR5KLMVRLReuPYNhfZC8SBxGCfdf8tfXPmeEMJVk7XD4AZmDpTiwEC5aVqqMnxYdyrc3Jc3",
  "key18": "3ZNZQEWN9p7wYB8zCN1Ha1rUhq1qggEg328m6EWEQCaq2siyPLmzbZjAWsLU7ZQGGRJgjpoA6got25WNy5y12EC8",
  "key19": "5YtDrojNcwgyypyRWerNQm8PyRLt5pSzndG5mWNygpStmypUrmsiivW5gBEkXKm4HSERcynuTfYEh6hM3qH5bHRa",
  "key20": "4aDxx21JEcKCeWMesquWUXZj1FAsw3EDy3AoXgE4p5y9RJfrLygwXw3TaYYsEjKjbzM7bTH4rC65bPXJ9txj3ayq",
  "key21": "mvz2X7yY54MkVymVdPcX5zHX4u2Q9HikmuYQY4KYwj9iLkZ4SoMa9PL9hkLvGtJMD3Bvpu3tMw2wcYsK5vwUj63",
  "key22": "4qXHBrBWjD2NKQSRHdogGnrUicQf7gtHkxL41wAFd4uNVZQjesg4Sj4VRx2wCA2LyFaTR6776YiHKFx8bAG36qgj",
  "key23": "5dvyxRco4aDg4y8PYSnji6ZKN7CZLQvA2jkrkrCYkrAgWqMRWTM383x3pb3632BqAbpKL91sazidGr9xwFvRSNBr",
  "key24": "4T9irqT7PqWUjbuba4SSgZtvkFMQhanZ8Kq1gyEYbY4wesCVVSX1vXhJoedm7uPvZRRQnXM2PMG9Lb6xeNDnK6LE",
  "key25": "3JHMmCz2YSPKifDejHnffCYsxjKqEEBguGcPbTQXXmancTqWrGS9Yw3TmHxd2RLoinAdhagoU37jt1swejijTY9D",
  "key26": "5Dqzm3LwznEmrQQnxfYxruddQkxPYv8iKparabw1xGdGNRNhQyundQyfxGpk7QABi321ZaKmSMHAL2B5tyqj22p5",
  "key27": "EyL7JxGtyynZbWb1RqyzcZpNdY1A17iRaw12ji84RPGt6p6EJ96RUFFaLUqvEWFHmshzrpKjz8pdRpRJ5i3rsWB",
  "key28": "5emgkgqHFtvVVW7codyNL11frsu9b7NaFwo17WqZT5HE2UhGrZYtnHiSDcmCoCXY9eDhhmLdYdo1VbYon1ufvvno",
  "key29": "2dX5ZQXEME4MQ2tRvDQSLRkRZFyc7yi2emNpSjeus6EMyKiBa3Lk2qhdwMtmqZ12cnwrNnPoD76GtkkfEdu6tmyt",
  "key30": "4XNyUPKAVsN67ceKtFiJsCtRNmHiUVH685BWS5UeFavHLK2NnnhEJqh5nR89DSQM3PUQsLJcYVQQzcgx9CcpE4Kw",
  "key31": "5PRsT6Dq2DzBYnmSVy4MLrWNQfLis9VbHdZixSWB91kcpuy6S4FBdCwJDeAqkQK9z5RBeuZfELUCUSH8AqgqsoVC",
  "key32": "2mgV5bzEUKqmJezxke7VeHHYHmvDAnRbFyAEfRcwNrnn8o5VX6FS4gJK4ZF8ALzgUpafH2A4oi58f47h3izysP2v",
  "key33": "2KiVSu74NuucWW2wFDCBTPA6tJxYoEqwDYqj1jXetDKZ4oZsHtvKkzL3hSGpY2PFYPqvnLAFVAQFPGps4KC3qa83",
  "key34": "3zxvEGxBH5D8w1jCcUMjuR1Kv9GGJH6tAmhfqYxQNgVMcZm5ULNfUMsMYEy6ufs7cBxkgGnwjxHJRtsrKLSE2DJe",
  "key35": "4zq8DJj2jHWenm3aMUsrSsUtiBhhp8gFs9azFWUDL6R5FvAqCn25kP3SHT9fZ5MkB2Wksef72ppv3zgXH5gs1pUn",
  "key36": "44WWrTKWpt81kGJ46jJzV3pVpTig6by8ZhUqajY5X1Ha9hANj3g2ns5F9Q1ohmqAHin73RrwKuZhLKXMJfrhEuM2",
  "key37": "2kyLdDsW2fZwfSJ2GG9Acn2tf73KsCZbZ382ZTSYufQQGkQZkwhHCbsfjLTF8vjGHiF5z8CuGNVA4YftHQVqJJ9b",
  "key38": "2NKaCfvaDezqPCNxSxzuxHs7cc7XcutQkdxTR2LaH7cCLvLYuzaEMtgZzVG4trhkhz6ybr39dy8BsxmWk6kuaUmW",
  "key39": "65fByyHh3HLvzjF67iza9ujDaUTQQN83h6WtsH2rB8WQHrXaVFYNMNhSJSCyaTMBjy5QLqEjEcuY77ocwzqBdvF1",
  "key40": "mj7WEVCpe8zGMXBQ2wnKmvJijCyqghntAEACcJBEiqTvcV3bhboRLHsB3diR2vqdeN4mwwD8iJUtsJ3THj7BsNb"
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
