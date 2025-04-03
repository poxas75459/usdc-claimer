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
    "2oAy41L3k9ebadf5RLymaNsCe384MmwYbBrgw1bK6TWEdWqQMrTLVMo5GJDw8wbiswoLnMfFn2FFAV3dVDqzCdv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48icLojA3bKb73Wqz8kAEDCRryAhzbkTDMhEb53fEUK4pkJRTjKSM1xCnFWN7Xtsx28zmYabuBsgNZCmUCsVEozL",
  "key1": "5jwVxnJF4RdAjRLGddjuR1KFp9iYDgJ5zvv65dXrBvCi2bPtKHacNjC11zkGZJEEpgvtvzbnn74qciJ9bvF1PToT",
  "key2": "4XxPCWvA1SEvwZz92wFQLKLNpdiEQQRaiud9LUn5Psmaiwaq7pdjE8E6EEi4pB8jEDqUd6Yci3WuRmHDRcKkgn4s",
  "key3": "2qUdSv5qMvyMckhTrkrK5ZQimuLVtZNYLapEeZFLPrmYUNGmNM8ktfkXjPgBvNeVqpT5gLGTrm4EKd1vTVxiftCb",
  "key4": "T5xbYsYdiKe8PUT8B2a6CCW7tjZoVMSeEJ9i5aLyzrx97e8umpyWmV9jGy3DqBYthG8cBzZCgErHS8Lkj5164Nj",
  "key5": "gzheSC9PENLyVKT15sCQEt2pDTqQvCsAFSgo9QmiE7bcrDD68o3yfBKT5vdqthBKgSYYFtF4ZoYuFQPfb4JyQdR",
  "key6": "2ZTQYJiUnQm9dwiWSidX8LBrckjBNrr5LFuYhBjurqYdg2Jk3sqpZnxcSLyUtNPjfGYMZSedaxubKxGJKYSwycK5",
  "key7": "5SkEHzYCGt71oRb8T8KEmiftjtHDZTpbxcukr6Ri8ivrFVx5J2S3jCfvXVyKJEjWanCionKntrm2MRWXmEcYERiS",
  "key8": "2eCojQsBn1cYxf9EnYChqiWEZT2iNFAh4Qj6hMQzKutMZK64V9rgjWPHgeUxrHempEUxNJKjPdxvaaxsMUJxDHU3",
  "key9": "dtQQDREs4rXTXS7Ueq34Bu2R5ZMTTJREmHwASD9gsxrohCNLx2onZwLoU4RniS7tavNCiJneiHRbRmnNpxJG2TZ",
  "key10": "546s6QDdVc9uoU5f7GDzpH7V589xaM2wgJuGBtzRKh5EMobQwoFCjY4VvVYQZ5DpWipRo6gKcUjmeqyZU7jLb3ym",
  "key11": "2wp1QapgabksDQ73oK5UB51Xm1pXeVC3w6oW6Bt4A3HD2fpmL8D78zGHSMoqof8XLGho4Ak9u5J2DSDiAPzTeoQt",
  "key12": "5Vh3Y8MJ1GU51tP7GzMr2jCzWWWEYiKLbPbRomtryzefZLWxNWqpeMb7wyKtCxHPVybcu8LCy3Wer44ceByECUFU",
  "key13": "3DrZyWEdVLCFG4VJteQcxW9fWGPqJdC9rxRmTdnnotPEfEZ7GJSwjrWSehYkPxpLwqQoe5wvypHiaGpMNDMFWiPg",
  "key14": "4qmCC7wFEvSGC8tUGCe63PYAizLSgyvjTAXCn5ciBZNmtxC8bxstc9cjaqREJaXvAF6jTFECGNYANe4ubh8dnj2H",
  "key15": "2w2Gj3z8yvue95HiGoU9jhRkHCuS7PX3V2H84YkFiPp5vJGRZisnmik1CMCcA9hGL3sKJc8LWjXtiDYr1Ln6k5FD",
  "key16": "2Rvfpomddo5dkTgeYeArvvTdnvexwSrkPyLLt3gDCQtawVLiZxLug5pK1ywWdNHu1pPkxgLE1Eg6QhEDf8FC3GUY",
  "key17": "3qjBJHwLo8bj7Y1Sxe3Z9N8s9mJPmWJqL8fmJT1GFvWhJjFV65zkTej4YgFXvSD6Lj6o3LWvkRoHsBXNs8t2z18C",
  "key18": "2VvrLnnmj53gs12vddFovs86idHvYmsG4efW8EahspgW6gwNHm66kpbaepF8K9eeUgeeu4eiB78ejmhbhr95rHMQ",
  "key19": "3qGzuktmNHWLkAtsrqrP6e4qLGoWCz9ffBRC8jMezSXPQTuG73s12YGt95YJdhrS1dD466aixE2MBctcu5Qxqsk4",
  "key20": "3kwjVinQLV8K5Swm54w2MLTM4gLfdiHeBjxVFy9m4a2ecUHE1ns1CwimcMZ6msLME2T9yjnj2rZhKsfJkfPLRz8A",
  "key21": "ChxGzVuxgwAX6UqoBKmPxKsvmbMGYhEbVJ4L7whmY6wBZoRLnZRzSh8q3WdoKeHBbgUHc3LKzYjUK7hPQ1PA8jV",
  "key22": "3jukichRX3h551hjRbCjWCs6DuuMMaWrT5p1s2vu1HTyDHKJChjiSQr694N1bKZHgTUBvq4fTUu4RFixqNBNxDyA",
  "key23": "42GmouAhG4VxuMSo6AZL9Lvs61SpqqjxfkS3xfKRjXg2bhLxWT27xVSwLfptaUT9CjL5JBKxXH1aP5gpv14J6VNk",
  "key24": "5mcGYrFbedwCkuuNSb3ombbffnh1cPnPEQUMUzSf7wxgE8rCKLYcqdpHzMugG81TW8ntLjN3ywboH7pWhXKuu1k6",
  "key25": "FGfpFrWzUy6kcUGsvdhDA5ee5JMmZfBmA4GaZYxxsUmytUA2ttzxEqpGTmtEeQ1ZAeKVDxeMpwcbKbRnvxkwbLi",
  "key26": "4F9nEysKsv4dRDa9Fdb4EhDh495aDW3Sz9Foa6CESeZVLmqpgnv5Xw51mALXotgo1xicehvQYZL2opme8jwBnH5",
  "key27": "5rR7khKaW6e1WUn7a5ZboqTrnhJCo7QUGiL3E7MocvGWuQnpqYVNzLjoFqDqNE5AQjXDbCPieVpxSHdauxci5Vk",
  "key28": "4XeKp3K8NHGAfE31bmbLcJRLxFpaSEKnRziYaySgDDXNzScYSWHbpcz5QhLZEzcoY61eNuiQuKgn3Sscjf6Gk8FZ"
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
