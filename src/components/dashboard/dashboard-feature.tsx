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
    "4tgL1EjUhDdJF2LXHAwEnz2bpCUGvTXQ8BtJjhA7u6pnb7NCKMrQ79DVWW2nB1ZVZbv3F43MHt8jsKSRkLixdjV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPR64M6j9SqcKv7QGXivSWQEHhvxAXJ2CP2RQgzXvifqTGDpQJfg7JnpKxjmZ8LEq6EvRmenVEoatB8Fh8Kn5hd",
  "key1": "2fY7XQN9q4bN9TTRCaJgz4TdDAtFoxVMAh1nnWWADbb76pzHEVqU8Vd258ZLdV2fgvbxAnUVwftWTgac59SXJhtY",
  "key2": "Ti7kmLdytJpC7ywBtSbm7CzhateoWkbXgpXHmDxx6NVsbMpp6djJFnLfHcBHeGoteWa5ox4JVpHpcrJqZdkbuwD",
  "key3": "2N9SSenARMwpCbTvaqYLzMoesKXuX2XsDgVGh5Kd4J7EX8KkiGk7oKhYcvnp5jaNvja4iMdBPga6hbrEbosG6a6Z",
  "key4": "eKMDZoq9ZevkzaSHEjwSg5JL1MnbCQdoWDcUHqSK7qTDcabJi8ee3m5vBMTCtHwAvtchhii741yvQPVfwndcdQF",
  "key5": "4uyJd4jRDRZT8Z9BxHbj186KrrHPxjHz9R9K6NpraQxHa9Vw32TegK1SWCpbmmtVQ4no9peiQAoS4x1jQRJyjveU",
  "key6": "hqRftS2ypVzrAPtdtJVvjfJKxcErABF1iByX4sQQrfSJL42MbQZgUZR2fFxwVD2umRBm67ozkxz9Sb7MN7exDqt",
  "key7": "5wEpi1TGPCswF4iCR1DJja5GncskqEbErQoZT3qMbUrjh1egyJzKxpMyRGimsiFFCW8q8nLkixAejDU1r3RwPd3D",
  "key8": "2mjBc3cXjGEwQZGwGK4KtSuNmW4JmZXtFRCRKn73YsXT8iCqy19PjXqnHn3rSzW2UrBJ17Z6MjxVjxHovjYEdpUT",
  "key9": "2JW5zCMzoPqNFsNWWud3ycLzg3YeZqbY4mirtrmhS6URz8HHPzrvztvvtZRiDcybb8UQcgB9fWtdSE8j14NaoJYx",
  "key10": "2ALyGPN6XUQoeaDPGnHUxQwaVmhH1hYc9wHRCaaVxYQgaDJPP6q1ienJmMtpomsvNibLXefGTX2i95z7HMsxR5xH",
  "key11": "4z1JVkkzYW9kuZNRvuDvjrsuhdig9bysAq8jmNXFCkUSHhj2F8HYat5QnHnP9MJNRU8XhA2Tv6LYKxyze3ZHCDUz",
  "key12": "3r8ZddcKfwSi6oAC7yQKWJx58FGbHNAa6ZGFiivLHJUQ1ZJERPf2njZRwFyMdmc36HMhCrRyjRbSehfTXUWMr1g5",
  "key13": "5G6RVxVgLRGBxJdMWH4wuEzSPpsT4gBHAwamZUBKnDi3aR4n2ycp6dBs1cUFmf7VjWznArCuqxDMPMmQdsyg9pdp",
  "key14": "2BEEGYJvw5Ur2wWgto8bu2mYUQxu59dyUnLcTvWiVrBuKzMmffyWZdyxnJBm7rT8yRZbR2se7tQ1pJ71sdSdfsDM",
  "key15": "4JPSYxG3GPLHW8nyKPtqAbCUxUs7SozkJSxL6wGAaY55vkLsYyYk1Fy3YxQiqEyzd83LDc4TWnp71cdVHbDqmcSz",
  "key16": "2SJGJmvbxWmpLAXzviij2JG3aBw31LUSMnjmwTZYEpDuJ32ZLz3mSX3r787itk5NHRmyxbo4LRoqwyFdGX6NHRsY",
  "key17": "3UQ9xiTiDBwHJT86pb9h7VmX71VSK2zyoefmeTfaYyVvoUDXk4E1aFzs9Zh1DY2w1n7EDsZXnBTtUF9m3HhHLAK8",
  "key18": "5GKNKcf3ZavKXKy4h3Lqu1fVDb35MVHFCB3FyEzkqxymigMgou4XEGp8XsRU2RVq89C565ZzjiEZwmUFmhj7bAsy",
  "key19": "wecD6eAqo5yJMsKyTTT2pohwZqoJnrKmc8M5CNvtR29ELWrCSjgPxCibZApQzwyQZePchL8x2E1M6R3LXJuNGE4",
  "key20": "4BTjryDmn8e8AqyuejuWv4rDYBQXxmS9j3hm5MQ4t6JgPx1ouigRvWRVNhyt2YEB3icb3x1HxXZbq1WQrYUacgGP",
  "key21": "AS9QcDYRDV7S75KGAt6vpwFNNG9CZQw6P1UKneaEkQH12tECpMwpyFoDJtzkRhVMWWkE4nrknLASjgsEKzhUKfQ",
  "key22": "3W54MgKM7g1JQScmgLJmvTQBxzQtmsuyLoTn8AZvbXWoyHcS4kGPKN5vd6yJvggBEkX2RL6EKiRwnpyqd6yU78mA",
  "key23": "5yf6NhPRCAUdFxv52SSjxJwDnhUAa3aefuNrgT4RkHZf8kB7di4U8hX5bS73DZQmzmyut3ExTSS7Hm3GYtgG4js9",
  "key24": "2Yhw7q8ZoAcGoNQBT4HviowQdgjWQakBaPmBdgVQpzr8Lcwz9GX4bCwvmWW6QUYkCmyH81ZYpkbBV1uTWZx1dPEk",
  "key25": "5B1Q1nSYvNgeFfmAM2B7hNehTrwnhmGvH23TF7er9UG9ACmbCpAAJvLbYksFnUrNQCsLXHCjgzBL75S2BUBWXhtv",
  "key26": "4LyyLJfP29okxt3G1xoD7RSRtrm9p159ciEoAWyGrp6xLheDj1ZZE9fQokETZjyiwmGikWzSwvQvVB4yJKB5PT9a",
  "key27": "4YXbxS7ELevucJqNpKtnVn9wmofbYX9dKS3jK9V9K5kcx5NQJFhsrvoSGH2WZepE3EcEvr5ZQuheE67xGzLK74z3",
  "key28": "5HA4Jkrtu7LdFMKbomYtxK3UNzJUD5HVUq8Pu4EzSSttbEghdap7yLMqLiEYEgEfL32CxKP6gUD6MyzWGTLQ5cj7",
  "key29": "3dVaGzcwqKu6QejmEYZjVEYCp3wKApAD5ptz7ZZtDfAZv9wq6UN2rDLcYUZQtRFE5CxKSMa1qfihec7tts8x87dk",
  "key30": "m8FD7BqMyL9L43XxrpP8QPJV7n4JiqqK83GZACmmfhrAya3NRq2xhP6s8WBVkcRpAGy8LaBxN9QgeZ7TRuWVY7D",
  "key31": "3mfGSYDfoSX2VQYH7EfqPGPgvQSRxT2TmvVZEP4aLTrKe5k4yNctPazRpBajijHXNyThULB3yvCEqn3U7BpSK2iK",
  "key32": "4gjhSqQsgrp8QHK4WtLsYretFsq5Cktjf7XHuSCMTN1BunuoELKDGv2sVi9Jn5WSvCmKRw9sxYV22uy1TrKAynEH",
  "key33": "33JSnR7YdtBg3pQWEXZAR4JucryYoGU7DbeiN69noXzJUUDutCD6zwV3CVqq7v2pVnm53X4VPA9i7H3n1KQBxafH",
  "key34": "sjDse3QCywFuK6fBCuiXudb1EBdSCPpfcr2REMEW4D9S7HscsyknDoJzf8bDeA5EW3HK5MeMdQLvYMpymeRRiVC",
  "key35": "4yzw6PVLJTkUgrjJioMSiiFGenZBXevnL6qHSZZT5KPTBByhyYccjrEFHjYtRRCoj8D8mMQ25gwMFwjbmaTNNhw1",
  "key36": "5NQZ3Q1kHncwoQQHx52qXyfbDdGeXho1vsGYtRebTJkumFafLi9Ho8YDCW3bFafqEgSX4nZqEd2V6q7UWXNdpGpV",
  "key37": "XMPYoXmxFa7kCU8HTiPzrtt5tFNrTPaqhsuaKNwEyw6dAnQ57nwXHicGWy59oHeyiGHYmuiUQ2baj9rFWRekYPn",
  "key38": "2LhKGKFssnYNdLR8AXV7CZtVrKtwNsAqhcenii7yjrBMuhMxxf9S1CjCQheQMBCikuCSymZ4ufjiHC73spvXvrgq",
  "key39": "5YTmjhER3UUHqAwkd8zW2wExbdRnbTsRQtuyu5fVuDDYUYN65zcGamGFCBRH4QjPGrBNMfBHasQS2KBKPMaBrnbP",
  "key40": "iF62hBcAT1pk8GC8YQtXTzLQM4BT2y3E8WYVM8tUrhboGTxdBQsv6JuxSJUUChCEbMtWy3JiVDDEQUUwt5hPP8i",
  "key41": "4Kj9jCP8Kv9iWEnrW17eYRqVVCZndw5397ZzR8TQs7gMDRjfZJ3tzRsutUNRXYN4qzqQwFoX1nLb1eXntyzZRyWf",
  "key42": "4PW46CjVia1wFzyHBkce6Gfyk4tST1a9u4tNyC623jdaz4M6XDdS94m5P8TZJw16YmfSCLRU5BQs7hNsg84JXAg7",
  "key43": "4mDhnNHi2ri1EbFvZdzETRqRdUChQNvB23myJqnTyjqac7Vvo9uyWFikmyx4qdXi7wQqSBFGbFmRz5GUwJRB4k9Y",
  "key44": "4uusdmsBhr13mcQmghqqZd9RvgkHFPug7cKwTi4LibLeYLbRgZrcH1e1inTMDuTvcztZaN91osAZ5nQ9t7zpSF5F",
  "key45": "3QLoe1Lhn9zovcQnvpk4AuyUmEztJtYGsBQZiSQEKLAGv93QGXDFW5wvKa6hCzaDDTSkMNpynma9AxnTfv8xowpa",
  "key46": "5a2qvqv9XQRCuz5cSjDdc4ZrAF7mmzv9Fs5bXYeMDvhePEnkMgqSD14TYSgnuDWbh8PEEpRVpA5YKYDhq2TQm2TJ"
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
