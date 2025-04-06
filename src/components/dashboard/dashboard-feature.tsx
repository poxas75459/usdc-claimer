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
    "5XDBspvZUcrC9vQP5qEnUpJhtNqLExfD1pfB1AqgguKNDcKvuTDntgRzVBnYft5JuRr6RcTofYCZ1FS7yG13F29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gguwHF4QChognKwun8thSD6smXAmjmJX3VRTKmFLrPcnmxRfCN3nEf2QvE1eQ2UrUc2tV5m8gaEpaS3Pq6QKhB8",
  "key1": "3ggV3Wwsaid8eRkRMZXMKdh6oc8MQzY6GLpmVHJskYBtLKXcrBUWsKRZ7ehdyWh9YSJKMRkCftnnumXLaxQjiruc",
  "key2": "QMbKYS37rcsmPPP4hu7nSCwXVw5CremybAMCp7mmQpYEHLaTVH9VvJ6XALnFpkV7HUQzJ185EaLuzmWZEczFvuc",
  "key3": "37JHxm9qHP28FcNGHHCxHQxacQFaoFUyh7bPg5fV5hoyUH5paYt9X1Pk66jvRRWEPVqQFXxtdqj8nKM91pufcqx2",
  "key4": "3Ze12WwqS2yW4q73KTqLw7K65vsVbaCuDJNvjGm3knzdBGfwy8cQoFdKwJiXdtY8iqzX1iCBpA7KVs8d6c5qsGPb",
  "key5": "4NXBiLsU5Bnz1rEG6piZT5rjDY9pfdzZNBpigrouEnyTdQGPrbxBG9BDMRrnPAYuxoWk9VDky27dK6QmFraKSFn6",
  "key6": "57XRnVJdb8urjHj5rGaBDkC6wJ5LgcvL4MFdsawBAwKv2DBc8Dsh7m2X98je4kQWzzTR9DUEgv6swLrh5dPtfx9U",
  "key7": "3b9bBc9uTFx2xuFLXVD7NQXEy8DQags8hsvEhMwa3gmeNVmoEecubMMSCNdRujHXgJTtFCDAoEjeBA6RqANLHcX1",
  "key8": "3rWjarc8vSCQFsCxQk7Y4VZSUovuazri7nfmZcWsbVAripgNRcMxQ56HMpU3yHsxbtesinuq3AZ48Rs9vyHxKc4i",
  "key9": "25gQmReeZaAm7QNcUayKZ7cszH8kxWDw3Wo2ryZSNJFDKYgFpV2yjA5Md7My1tsY9D4QtDCwxKvtem2Vo7Tt3xSb",
  "key10": "44jeRYQ3RtHosTHmVK4qBkXb4TC6S3FQQ1s1bJv2Qtb7mG67GBkPHH3FNL8JtJxBSwnFcorMKTHYWR1QYNzbeK7N",
  "key11": "2ZnU7cYXM8DSEm1F4McHQQzjeu1hVBCUiKs8bnn1C6k1WgoDBm7tQA6cSuF6uhPB7MJY7cqSHVqCjNtcoeg5oNSt",
  "key12": "5CTfUBxhZ7v94p3iMouT5NUgg97YcASu1pTLPLjdxPKJzAgBXRjfk7x5b6ms5tnrBi3L3ATYRexwiNJrCSYDHwHg",
  "key13": "3reiCHQXnmU4Ro4JfkJ8RdqTkb3fgnXArzW9HvXboiFX8Mv3WwC5pxTgFFAeDhnu3FrziaKJ1EPkFfkJNcGXAKh5",
  "key14": "3C3chLpaDRSAM6N7i7jhoAEfE7zKuguxUXasT3Ah6a5ZZPT4f8mz87hQ3Q5CrCA7pjVvE3cnfn3k3euKtDjPMcZb",
  "key15": "41QcARdNBjRMvDtzgpQj9f7cKXsAKFU9ZaJBgi4CswSgWCVhfYM4Kvjdv3Wr5D76Xxy6fddEsXht7gjJyPSHGiWo",
  "key16": "3rbMd2RAZdByquVCbwhTMk9GSo4TwHduNwTWdY9txyQrfFqByNHe4Jdwo6ERqUzMDyTvkFejcRxffSdhDeMqr5bi",
  "key17": "4jdhDd3vXRdSFkHSRzWMut5uhqZMTRRuKXgdB5MmwA75ze5LtxHuxYZWCVd5BTgaAMaU7LK2G2rdMxMt8rFAoU7K",
  "key18": "3vbhrSWWssf5FiDhRwN9r1WpTqMocKEDgJVcMofMfHq7v4dzqcuDQk3evuA5tsSHLR2KKwNNvLmqEbSJQQcXAX3k",
  "key19": "3Ngz8ZSePpapgS81jpHwbVEmK7FgPjeiMXXs3tS1rfxiawA7xwRChj5MzSpgfGhwBiJMfgEn9eTF9MHMhvczza4q",
  "key20": "2tQbJchqJ2LiB91uewHc5PPgdU62PJXPAMe7DhDwsCEJxBNnnKUbMmtqQe9FXcWSh2pa3J5dnzGMc1WzP334TncR",
  "key21": "398hTvsW9vG7pN4ZcaejSy5M7DpaU9ovJ8HpFJssZgqe2Ac2MJyZ4vwMcGoyink1xmb8J4SyBzzgh6f7CQEYB4rn",
  "key22": "ySJmArL6qoGL5sXnntbQHS3BD23EiWhaocD6j61uC446G4wrezUw7xMa442VkyXQ7tTSbwNCGj1983TRqhv1x2K",
  "key23": "3Fj2ShnEH6dwogh24ZmiStEiNxM1B3Qc3xfD3MpJVvZJTyh8vjct1pfRMVbcU34Ut3SH6m46Zv6N1r3LF9uQ7VgG",
  "key24": "3AuYWuaKKJhhwzYBvyaHGwuCbjqG147N11nK2XJ7qgkFvDEtfhyBvNY4bVqd2Q57L7dXfmryq1vhK3i9mXJhAU2s",
  "key25": "5nhRMPdUaT63iH1rkgZ363XrQezRG7cghUp74C294tFQYHHhuujzABWb2mAPSHbovhhMH9GTnLZWeEDcpvj4dVKH",
  "key26": "3zDE1PfSHDNRBCKUHSN4Y4isDgnDKamoRyfFgDXdJPH9yG7qS664rdvRZvcwEPhXWQD2rErWZJGiPVvk7nZiiAm4",
  "key27": "2v1R1Ag1vvDnVwk4zBHtfZwXkuMMGAL2wj4v7KUFMUTLVAJahdFpkfhozj1jwBX15XPtMLM6rn2LghaL3W13CH7j",
  "key28": "VvWUq9SktY3mNQtF2q65sznczNFwXavc3gG7nMNZAp9wFuA2eoWLFPm8xSLB4UBMYGg7caMbKdhJXeUqfboSmbv",
  "key29": "NRueSAK2GnBFL6YLu6wwTGBQSxAJbVufSwXqPfQBDZQRfoAqQJurdj4n2nhk8pwDPhrhxT4xMwH9pTFWgpy7Mau",
  "key30": "YDC9pNABBxpTmA5FDt4AazumLvaDts33mq2MxAUy6PE9iKV9fTffz4vbgpLBP8Qi5M9N9TgCz6VXnBnrkMDHotc",
  "key31": "5A99iLoEQNLTxq4QPVKTSZenkpyHizohKd2srWRPp4VyqyMoqEfjS8rqRWjUUVDXiELinSTQ6oJKHWyzjYZkfVpV",
  "key32": "2ScVwML4q3UWu8axLjGB2z13HC55i9hRnESvBovSj38FXYhxh3hDaLL8NFv9BjED6k2TZkwWi6yGkynejkU883Q5",
  "key33": "2PRCk4ZoCbEpf3xHH8ZjGrKzE9Tqs9WFrNAZz7D13qUyCmiHdeh8PtU84oTnEA5szzodtQGn6CxJsi2y4kDfVgVn",
  "key34": "2EvNJnN5VdWG1kQugUMR2cgWnMs9pqMmxwFv8FNLb2Kat2aL8YBBVCYnm3apzdBPnzT1NJotHVq2PKWh4zDCSaUh",
  "key35": "319x4eUCXQHQaCR1J9tjNXWN18YBhRNLuqJDnyfVhcqu8ZrrMthT2R4Ss4JQ1BTaNJj2VyyxeE97biQsaptpznsQ",
  "key36": "62N86rh1AKrXyjRkptMMwPbJbAr3UUNGGBQJjU97Z9o9nuav8xYwkwMy3oLYCQgqfioeWk7ckmDpCM44KyMgiPTV",
  "key37": "fjrDevhKpiHyp3zqVLVhgAY22dzFEYiy5gSxBoda5DboQsTApWGcaDobng8csNcBn9qZcL7d2WNnTmxpZUjuGvQ",
  "key38": "5AM1SrpWKaNgQKiN92QNmF8xgWrWrLxZpJLFpnBPVp9A5xxxhqZsEr6ur5qmpXoheCSLkAXmMVdYd37vjvEEzC9U",
  "key39": "5oVsfYak9NHce6b4s7d7eWbQdfRqDrrjq57cygi7U4yRRn5RRhLQcQxdAiyHdBwYiHkxPcom2BXwefDhRihEnYaL",
  "key40": "HmTXs61wQesZf2SvPhjunNcvY5CSVVrbSEUeHgYTmPTGdAsxiZ8cSKS6F2qnY76JHRC4jAMDbbyLCdm8TZr7T1B",
  "key41": "53Q8sFjdr1Z6kktCXMqKBZN9y2NB95QgQjRQGKujrwFBsJe5YvMPQSVsWkCQ788NwmmuRBJSXRSPRqnbsG31N697"
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
