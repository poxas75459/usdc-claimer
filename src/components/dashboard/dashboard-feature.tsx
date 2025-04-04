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
    "4z1Xq2FamSXxJsi323sk7dQeYy44HDx2RJh72TpRLsEuvzYhzrgv7qpzBAhsgRiVGQuynsJDNzQmHPdFBV9KRZ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcdgQGBBCN97BDS8t1N3FK2EMzAHyrTXRj4SXsM4LpCa45uUCEEKsXmyeCpm9FEEnk4UdxbevQHb3d6CkHZTtK",
  "key1": "4DrFrdeousV6GqAtmGWvGbnHXWqonN3FS1CpvaE5nFuLWx3yfbAxxxmy2TfM5UogN7HREFontdLavzoRqex8G4yN",
  "key2": "277A6TZK58kE2Q2wyL38VXVGUQ5DpUJeB5o41oQ9QFNeGjw4MX9vkSeYcpbL4d7MzokMJGqyX1ZhkBA7x2LCFMRV",
  "key3": "3hiwi5cF4JfmKAssA1iTNEDxDvEakbF3TdCPQ5Y1W5kepdWh3uJdJbFNczx1TNCH5sgF1xwRp26MQhwT9KQRSvgK",
  "key4": "oAkLd8EB3iMW2DhpLaMH7jPKKj29ZKnpPSDef2VbVGBpMGKEvgadouK9biJQNzrPH2AYRR4jn1uwGCbxVhsir7p",
  "key5": "2Gm94w5CP74n7aKz2LCdG3evSbAWRFi5YHH6RK8xZP6hj57xqveBEukJPD4BNX66Mwa6tBf5zYJK1kjSxVhgymRc",
  "key6": "5WmGfzEqtnxQbjQKeLRmMa4679Avv2x3h14P8vMBpSjDaJ1Z2orFUGekAQ3bTMQTpWNAhkffte5UdM6AtyEc9BTb",
  "key7": "5rQCF19hWpFDqRKP7gR2QyTkMgyxKudrMJzPQPrTXXhwSQmxRU3Bdgb33KXoVTyJPBeSWkkZrB8vJdbP6nYfPzEo",
  "key8": "5riNE6ywcu9uLKGHXakMAQaJZFJpEYLSgjSc7aJrNzee6w9tT9rgv4PdKHC7Hq8S5x9wZLxxTsdcANsBJcxHCuEQ",
  "key9": "4brCJRpdJoJy9sd3SHMwtdvTTyRJnWSaSusHFr96utxNtZwHXQCFmYCsWxwutsN1ijBpEos3wD6WQ4WwZUmc1VXF",
  "key10": "4dQ2bKx3u1J91aVjFkNHhUG7kj7ysNbZfg78g2ZfYVrSVsBoi6A3htC5f6KrV3heYp6P9VA52X9JRfufut3Er8v5",
  "key11": "643XAjm9MDAismJtstzjUT8zumdLvyAfd3WyyvC1iEnynnwdzsMLrgqJZmQxQcFJAzrjF38EWu512vUhaaxSceDQ",
  "key12": "5n67v6Tnqughg1bEEguSMnCebdQVEsFK85pBNJkCN6tfJHJojK25hXcn91pTwGzu4PFA69FLnLZ6uxzYrP47NN71",
  "key13": "41BpvGKQhwzpSyKbnCHihitrSTHDBSW4WJ4BjtUQbNoDDDffWvQXnPpa1GvJaLs7QQpdHjZokCD9HcSSpk3tut3w",
  "key14": "3biypYjT18ppGdi8BpuychRnzwCSGiBXAJLkjhcgqtmiqrX4WH11MnQDAD6RyCFUfSdnZq8PTkx5yzAtrGAHEiYE",
  "key15": "4xgnotkZ75nd9wfUKwVb4XnQNsfMBK8Y2sAnsvMN6PyL7VYQqoBd5vm6PhvbHqxFnKP7oKCc9EAx9Y7wmX2t28oJ",
  "key16": "44BwRQbUdAw9YyJXZevYduk67YPzRCjvwKEa7XCpos9pr9v7U6rrnAbtdqTcyv96XtGHatBqD85oyfWNnt96thKA",
  "key17": "3pDRN6FiFvUps4aBN6xwPoi8qUACkrgwrNEQYaVSpDVcQxQBiVatGvyup3jbYnAoScDdJw1ND7uHWBhDNWCbtPkW",
  "key18": "2L9E8YcTXUVT6vKiCfBDrLUQb8pRAibL1DS6ZHWj6bjUf2w233TihXMYzNApFLLyU99v66fjvvbAv1afHb5zJH6H",
  "key19": "5dnsRc44QpY7S4jSn5z9dDM9fkTXkZYTyTLt5yVV3E2pVrB2cZsC61ghPgkuFLJiYT3FgXsHvMweSo52qG3vMKLi",
  "key20": "3FbAnFBpSa584LaiciNVuvostBbNYDGM3zuwGdwjATzAA6vkstEmMqjcHW5RHjGqCwvC8NosKZo6EqD8vCYYNweM",
  "key21": "2hwdaxqYxXgkPUXxLWniLU7qxUumejGKyhs4C4PsxkSsygfrSGngUh6NPxZu7eyRR3kfzbtQbJp46pEVCf5uqAE2",
  "key22": "e9Ga3hAsQejbWosD43ASBneRHDXkxjFrJgCFokkADrZFHNW9K5E17V1mAYawUJXNB4nnsAzXErS7vvWfwcZHZ4y",
  "key23": "5VYVJQfzinc5WYcZjUHbgfv9475qjEG1vqEV54qEdqfw9WW87qPKADVi1oTnjmFAUSBiWFHsPG7UMDWHAv5VxpqW",
  "key24": "42FErvnDmcs6nAMqF5RRszefa2P4AfdAmvw1VUpF9rkraT2c3ByHoMK3pMRvfzReMrJLskjD23kJgUHMCnsatgBC",
  "key25": "4mNwoSvWxAvyrdZ7A4hodaXPM4PjAuBuggYLmBfGtexfd8DBusK9773XP1UhbcyX1veEWEzvcL4WnFoDSfnmP5rA",
  "key26": "5ZmBwweYcJHvBXUgj2nUuXaPrKzCFKAYVtqCvXJtSPLj4tSvqdvVeKFyZAo1Fr9GcKcZKmrVtbZhuRcxbku5F7Ur",
  "key27": "4AsqvLWm5n4q1suxCCq21XmumEkDqxMAXNP6raLXgYASWkTDPTRxiBrzYASmxosccDib9vTvRCmwA2YENKTbdxvE",
  "key28": "4NeFQGWVYeNmc6jYrjA2K4sBP2VpNRdz4jtLEKYYAjPApjxydwcghT1eRNfeuGPYKk8pd3oy5AxckKSMCVJ48YtG",
  "key29": "645RmQsYuuXAqGrcD4ogRbYag3PgpX6rFtdLvCnSJiiSxo67Lw8cZPBZ5QDusAMySK9e5K9TER5nChehSLa7UbVg",
  "key30": "5C7Lhn2L2snnwvX4xiifEuKnH5ZEexPFptPv3yUeMaUZVUTUdTKkReheoBKbThcFs6Comuy76zDVgRoUkU1oSwNZ",
  "key31": "JFgFc1DHKEX2y17GkMcXcX7DHuqh3ZRmFwmoACD8iWvb7xLAy5sUiVsakxvVui5QSR75WqsCMeJ1kYa1jweQqQn",
  "key32": "4u4xcN98C9GGLbympEm5RtDv6PS6mcweRndhm7gyfxPeyMpZHpQ2aN3XVJTwfHMguYceFoCvh2UfK7Zab2iZ8Pbz",
  "key33": "Tre9nP3eJ9z7PhDPjFu7LkB4w3SaBHYQhson9oWph3h3n5zrKVqYXoejpGu8h5gUAeqhKhfeq15arxj9K9VQeJX",
  "key34": "4MLX26E8737PMfnK65BebBXVWCmycpSweSuPJDpjyMmjKz7VGskbdEiS5MoSWoRyCrggKs4h753vMF9FCqqxZQWY",
  "key35": "4XwY2gvvHwFtRmB8ifVLQUqhXYwfrrkA6eDBHkXsjEjLFocoTVMzPGJRVdF2qSEaQc1cVqQYdM5g4goH1HCx7HVr",
  "key36": "3whX1GAzxw4oXnVC14MV6gAH56mjXLocA1mJnYFe2jdU4bTK8XcUWRkkjBsLfRhGYx16iJPGMUQ23cgetYdk7z5V",
  "key37": "5K9Jfp2HB1eS82GwRT81NkoJsKz3jGSgULhqoYTU6GtoH1shixWeFjVp5Jiy5kH5ZHz8EvAkTt22tCPPZYYsABMi",
  "key38": "3iSTrZ9xj68XU51eoP93wx1ziKK6E6DM23hTjvKhyKEnPWLG6Aea8Ke5CQiM4CbZZsdknW1VVNsLxosmWdh4KAHF",
  "key39": "5wh152QZyWoc4gFts7bGopmepUa2Ks7NUXZnSf5ydBYm155aRy9FkvmPhxxhfa2SkWovQHFyNFMi4RbaGJtRDjLX",
  "key40": "Z7ojNh1jp3mPZRnSPmRDV4MaLSDQkpikKr8y8m1qb5ALEW2iBjfFtq43ewsnitkr6s95kpi4mZH27pkKsw4qZ5v",
  "key41": "4QcpYcZ4z7CXJTzdGwVtab3vCvontucxBagmfKRrzWGnj3GbmexoBXRYcewLZp4bfkumEe3qB76xsAP2jdCxkY9M",
  "key42": "XGmm22eDfTiFVqFrMrBJ4K2gdTQm845YogPKza7dz3sMJhF8JVfYU7wCpR2hK8rJfyYFh5sSvqbkL4WogMAFCfL",
  "key43": "63skV6SBxZut7NkHcGQm6R1gc3q6tA4tFbLyHY1Wq92wYLC3hS7pdtHrfNGSdQGeFfDYdxW2iDLriy2AwCp4rHig",
  "key44": "51B2eBEZZajUNdDvzy9vEwaSvEza94wkAjzBuCBoeaqoDuptskKv5YD74fLidvZiuQVxHJSqn8d6iqcZj1ZntTLU",
  "key45": "4h9UPD7qrqA1grsmeUamh7KemMGH7rbZLpccbB33qD3UZ3Gwe52gFUNAukxKDGwHNjTCbR4XQvAtouwfvrv5m2Pg",
  "key46": "3QUUzsGqfXiSGTPsWVZHgQnhHCjdbAuqGcfiPvtciqw5s3qixb1pmeNceABfdnExcdJ8UQebLWiocAdUAGkhLMF4",
  "key47": "s3cCthqbv6vzQczjSnvyizkaekTdyo8AGz7KPNSoKWKePnWds9dMaiC8fuNJrEyAEEwkbhPRpPkWfhUQnnrxLhA"
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
