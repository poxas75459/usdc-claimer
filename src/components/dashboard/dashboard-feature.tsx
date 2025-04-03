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
    "2fqH7smhCrFYyKmZTZbcG65h3hVwM2zgAHTJZbbGiWmch1LMkpexLtkyex4g2VaowXvmgRobZvhRdzU8sFEr93dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mu4UHa36RGSNoKv1a7214QYpZMcQiHb64MYBc63RPexyaDFxezwhD7eG6am5M9uE9XuCPUcU4FAC8Rc427Bwn59",
  "key1": "36FouCR3urpa2GZ2SKzJVUeNxug1tthSyQyYsqnyjyNJudYi5sP11oxKuV1xH7S7UKGAB9izYRxcAqoBNKVrpBSG",
  "key2": "2g9zCrGwnXtqy7E49K4X35ftWNX86DQSRNDRipfMz1nYpH2E8bK8YADcdTYx8EbWgs7p4P5umPcV5mhr7YUwN9To",
  "key3": "5Rgd121ZMxLbMMNpaKy2rBNz6jUsH7x5Db7XsckisN3jDgvfD2mcs28uTUxeGu5vqU7Enp39khdBotpESWPB8FbX",
  "key4": "66AuswcrS7MVsTCA1NoBSSQqvBCt5c5Zev8rX73h9wwEsYd8GdZHG4TcC3tyi29EmDrCzPSV4XR9otshqUf9LoGX",
  "key5": "3FA6MRd1UUpa8VkobhceRAcanx7fbFSZQFoSPkFmLaTPG17GRE9KqDvkrQNP24yiQXvEKYsJGBFb3Sbc7JMpi3uJ",
  "key6": "5wrbp5mWW4n5DJrTMg7R4KznbcouryW9aDHnTGqGsCQVazzZwezbE8Ujs1MZGnSvk4K8pPrG1k5qgz8s98s7LcoA",
  "key7": "4BSRZuFfWDx6yzEQ6px3jYGVNEXR4XJShjA7s77yHiHZuPgdMEJWpcgR4YrM4e7aGGMY3bSUxuwvxNkPN8MT27XT",
  "key8": "2fxs5yGS2A2P2WbYKpbAXuRjUaFktGbgpGZYr8mjZSUhUYyz3Ms91D5PbyooZYsp9KhagDRLX1HkxXPCGxFSDRSL",
  "key9": "5tisQqyxsHStGxrtpWuaKXY3qBgXwUzQvhguJieGgi2DdCho9Yr2sRXYfD5WMjaao43yp77bb6dVnMLATgLK735o",
  "key10": "5YsTBb2HnhJXmrFVqFMvap9xN3weeHxdFNK64h72QoRjDwfBnzoLnsgk19YuPxFE6hiNWy5A4yo2S9rR7u9ED4Th",
  "key11": "2PsT6fGcCKii1sgYrzTQQAdxGXrCwVr5knQbfChe19rgxjZ6yrLJDX47Krsbdbpo2e8XHfpvWqtEUPoaUY8dJnM1",
  "key12": "4EHk5h17PiwiVeM6ARLgMkF52esqYndBUa6wTGR48RANgNAzbizbKmNvaZSnm8EK7fyR9AhMfbF48PCc24vKc6X9",
  "key13": "cMvuL4pFG3xqCPFHau2Ta86bB2rgua5Udv9RPMKN4BVvU5KWgjsA4H1cGJTTXmF87pZxKRQbJ5ekysxCkNt22C2",
  "key14": "66181qqAdWfDxPURLtH4fso7aBqjXVdA3Pw8PZfTKYP5wNJMgmkxvMjE34iymeLdnVzj9Xo4wDJkKaNsJa59yzjo",
  "key15": "3hvQHkkNEZd91dweew22HbFJhFRwic3zMhrScBmwd54rmRJBbxgMxPqw415nKi4r9hPCbjz5LvT9Jb7XebXwSK1U",
  "key16": "xPdHXCekEgXLvw5F8NgDHZ7XQ3WPiqhdvWQRNoaqxd9nMUxzGMdKEx9ataCu961sJ3F89EwcfyvDjtd2U1t73bL",
  "key17": "2xoVGPD2BQeiXuVXDE9VUppcYcVXqy1v42gWx7Hi92mf57SyLmwH442G31JMBtjYKu5uu3HR183334MdhRjYKxth",
  "key18": "Pwns7vt4PKagZ8fpYZveKvhAFpQSfHc4bN2eHpoUs2Pa3FD5AKZ2kEF5p4NAnqq74o5VLh72dJVex8xu7DrsiG4",
  "key19": "h4WdB4Nq6zaKcUmqTihKr5KPchJjUv5eaM1odDGGgF2E1Pa9vYD4jyRTYwJpFXjkWRbM7Ljay49cYzHMrpgX4SV",
  "key20": "5DJaY3KuNkToV5mVuh38oUx1LXQ5YuFd8RbHFaj44UCtM5eyxiJQG6MGjMDvxYN1nqzMuDiV4JXzgYVFKkWr4J6T",
  "key21": "5R3xTsYpNrCCA85QKQmLpPtDGCK6Lh2VmM1JvikjCW5sNs83uwVetHxRRGMsPLyUcaQ6a17mw9bGwD22JyL3f3D9",
  "key22": "JMp65AQLqv7tyBRoY4n8TPRmf7Btui8dNt8xFCixdeV1ZnEaoqi8jWyodiA6qcvSubFmEKDMKpEnCxDff9dyy1Q",
  "key23": "26Ad52TEbKDVELDgPtEjUfoQCGNNQeLhfnYMpViMpWGZzERSnzmdjiPU8qboma7TbiuduUUY6cVvf58vHUA4J2kC",
  "key24": "4qzj6NABJ5JfVnBYAm4oLxW17WUt5ssq7mEjtyKW1wysDy4nPCoTGAwxKDQqRoYEWdJuXCYej8Dct4mL8kqtmfF3",
  "key25": "2yRsnYQPmJq9SGsSFakE3ZmPTT7ELVJBBSZPbBBLXzT578J9sJDS6YfCjMiEphLFajGTHr56Vrjg43cs871rs7b1",
  "key26": "2zXSZgwoZpR2MckcWWaFs9Wzedf32kNtmYXmjUkMn9B75VNkFM8eQvGWZgAf1cfYjoNg4apypqr7N7RVgJAy1qZB",
  "key27": "2UYT5mvE4eeZ7ZHh3VwCTkkfPrBa8Q92AkzLq1qN53gdELrAkNSJkubuFZq18nvw2PetNR8o5Xxo2aa8jMm91a3o",
  "key28": "4QKYeb3uEE5UUxnQooRwKA2yBRH78zjff9C6VPEGYms8rBnXNvzCJFKeCn3QQ9nNy4mMDjEkgBsMNP2YphZJ5oAS",
  "key29": "33xYXR3kxX291CZywcdRSeSxv8D58Qyk4JDbjCw9Np69uzWs1jc7BfZLneJcTU7rNJKf1w5JHtLKM6qPVcgD1RER",
  "key30": "neJMJULbEg5fPRSxaB4oCRqYuhoxs6GYruMYh97dQPv5PvZH3V1BMyLRGrCXdxqsnucgQcZcmepdAzV4Q9ZdMNX",
  "key31": "LepZSanFXC6J7rdpo1AWGNAoKpDafQgzFEDdkk5peEZHHyMd7BJyrmKADCfpjNbjZwzuTn8JuEZNMbR8ArTSrRX",
  "key32": "SYuMurg77SdtEWgZPo2kD9bCZBMw5hARHVFRXEugcFwj5dWrKMUwjj1YWMfx2bdh8bs9cAhxCYRpgNQhXmUe6VG",
  "key33": "5saLwxseys91NpRwBHR6pTvPRufpxuXX3zuRAiSiuRFwguAWsJxDdqg2GCcdZWpF5qD74K8sbF1kW9ET2McYPj2k",
  "key34": "4GFyMUS2p5v4dBGEwNHjyFBJPFEzFkPApgZpmc3gy5jXBcAPNToL9jKf5RS2RVh4pmBKyNr7cEMoCdXqPD8kWWjt",
  "key35": "5iV8wd21g82dW5L5brAJu97UEqHAUtWkXYhYFWukUEMjdAAYNZ5F43hempT7XhjXC2kcVFD612oCE6Ri2Qp1BEcF",
  "key36": "4dq6CnEzDhrS9PjDLmb1boFAF4a9bmCHoBDCCxECHRKp4J1nmhAj4FTHtGw6UH5eZsMWnBwZgzQ8q9Xg1VHFvJGY"
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
