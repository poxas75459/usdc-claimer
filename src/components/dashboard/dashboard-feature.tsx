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
    "31YbZTQS6vT82Z2urLZwgjcdnD2G5DmnPzMEGsZctL9LZ71QTSVZkmgiqrNBnYmExkQmH9RPgcdwicEeVUkkttNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pc5ePV4f5ym9k7VnKfouGE9K9aFgXiURfWYmg3m7gVZe1baNZj7HH45x1w9NogftRSxN8PbgYWtizfvRfBtoyyR",
  "key1": "2dfG72SK9dShway6gf2mh8CgSwNihv9omtcFU8a5fbEKQMvat32MWqBGtcqYG3MSkCq1kKGuqefLoGJ8uhywR5V4",
  "key2": "4sokr3xLYsCUxEFsQtWyT6ZuSD8WDGKidkCf3oTryGo7QgFPuEXMe7thXmdzGg1fcLAo1JKJrBbKdQZkS57CwesX",
  "key3": "2qkTft8Rc7zMLfHJtH2C8MMMeC2vU2fV8JBfcqUTUuDMnSjaQacgBGwW6cY6TVoXM4PETUmfnSAN8fgEDagw6hyD",
  "key4": "3Z4C8oRD69PnEYRi9Woe5CLkmoLJubC2e6cKmRRmWDUfUKZGJ12UXJaJirgFGKjkeexzLBK6A6NBJJ89nPqyGoyq",
  "key5": "48EjMxwDEZoEaNbDKpz5H2jQgbenKw98PHsqLHp7yPsNPzENau5cm1SJmnYheUDHMCuNVWZzgMgevfY8io9UC1RY",
  "key6": "5azfpa2enc9BUFBkH66e5318swiprPzTLqZkyBkjgkXZAudv2DEv7rMxBw7chRBdVSzdiWu3pb84NZsDV7hpAtGq",
  "key7": "zesHkeUdmyXMAn15PbaxsDpHq7Vy6SsBdyQpce4jVn6WVSmbQTUa2EcwxpYR8yzfUd2y8mSa5wPu2S5R5YJSukR",
  "key8": "5K2dYrrgkMVmjgVJyRxPXVJQi3ZNDLzxiuWGG4BH3i4kXEZgzKEG7bz2CdUBCyxVDSQ2Lb11qJ4oz3eiyZSovNSv",
  "key9": "3SJ8x27CQMbmCtw3wDwterDx8QmqdZvK1ymaSGcbJ4jF3adW9aVHB2hDw8BvMAwJrz2uQeGLs9xzFkfFmgCs2wA7",
  "key10": "5o1FtPHYy4Ufnk5vME8T6XZRSLNAzUiqzuT95gCfyZUNNhUQYbEnFxBAhUdJ3ScqopuQXxERRqU4DiKZ6RbsBdwB",
  "key11": "5u4rDakwVABFoBmU5NPcnGGtUDmHZyPtCmuY5ngVyq78CNcAg57ZmwXaGboxa6o9RxQ2tax6zTdUwQewy7RwMXq2",
  "key12": "2z4GLNNCFpRxxznnkxNKtW7FNfvCVCJLM82Fp7aXWyo5JLBqeGDEsUnstXDF4g8mdqWV3At3exehZowkYZCeW2Fw",
  "key13": "5xPjL44GwAapEfkCLM8Zd7v9Y3JwRUeF7twziBx66iEtT6mciXj5xFXU7LaeF8CqThjHyomiZFsV7rMhogqj5v7V",
  "key14": "4gcbxSSLDca6BuLSBcRTSGB6YvVr6jdcY1fHfA25DA9e7N8UmrDVXdTh9cHfGSBBq76NmgBsthLmc2dtTXrLzoj",
  "key15": "3dnLuvSMeRC2PbNxRzKQsnorntWpkwYz4PP2t5gdysrWsFP6YuwiGJz6do2m6wFmZ4NUwVWmigD5AH8ZuPng1V9c",
  "key16": "3BgKsvv3wemsSTqvh2Pmt5iaMzJYF7MESLU6wySN357zEp9yfSeYxqt1xia9RoVmJKrf6UHiEefX3bhn11H6de1y",
  "key17": "2smXvbFgW5UXJYU18NSvKRaTTVHEUwb8PLxJDa33ynrPLg3GeNvzoNMBMCc9EBb7rcKGCcj8CgRrWXnwJXZtBjQ2",
  "key18": "3kLrdtNhJLkRLrmS8z16JjYrjhmyY3JKWb9RD4JVvhbPrcDm6Mz1GM9wAjoaKnvjMq3Z7W6aZT3zanpYSTG4J8GC",
  "key19": "3Vz1XXbYudAbAAcKHwiGzRyw3tPwqQ2nWbnE2HvzCgzoJJx9VoEDGP4eCgcsd78KzubHyfuuonCbUFALfDGzU71B",
  "key20": "33FkN1tuKQVc2yrQyTd1CQXopKmSqtg7Aza9bWhMJETYTgvHmfJyvdFtHaw6ZgEjfZLCgFb49iZfc2xTGUG7SmWz",
  "key21": "5d1ZMUN1Q3tNHazpzDAN3p3AoyehqQTwuxEQMXd2sHRiEPBzMeu6KYtuN6eJVeeqRkCRwt7oPgynYUBhgaCxDcfy",
  "key22": "5erAkBWajgakJfvk9y4mSXr3bPEHaFsoVY7vakWRmtLxxLbWccCgQPN3asvwsYgrnzDRvwMmu7HeVdfp2BqfZK5Q",
  "key23": "4T1UHpwEJn4Q84YqSpujVHBJYQi3X46yQCkM7qt63JQh2EXahzi1TU1kUvR21AGrjrwkHZQHFoet5ge4kKFmxaEo",
  "key24": "5fFCHvP9z5kGr4cEoCJ2RtcZciVfiNHbCJZFRP5fLRKzjTDZFz4gJV2SyPQx8LsVKJ1yWf6bkG5sQk4vj5MS4zek",
  "key25": "63xB9z41RmgHCcaN1pu7USKc8YDs8nbivK2pYT3AbMy66St3v91MPo4Las8g4gFLcDg2LbcuzR6Ld7m5KFPft28x",
  "key26": "3xKbEkHvN7mFtdM3SzXb1k1CGKXXsAqUu6xFXW6aK39vhuVoc1t8bWEY7PAYQT1cn8LpXZSpqsBVyKcqZdMsanF1",
  "key27": "Wvh42J3ka4jFvbexZfssPauXETuqd8erdW2d3hvetDyRgnWW1SEprdZG6t16vzDGi8H7W1ZeKr9tMmXNPGFfuhv",
  "key28": "4nzQfRXnBeeKhKaFPhFuMD5CGToMdxK2ZFbwt9tQwCVrKGLDhZHUdNhNjsFXWF1Cdiw74zsvUEfzc49MLXkCG7WU",
  "key29": "epEHGD5bnizhug26TA8G6bqjBws3UdA89md3b9ft8oQCMaiYouABGQMt1qnAL5GbM2AtMnb9Jevc7RxYiz2Uci9",
  "key30": "J5taxAS9w29nxLctLvRppwV6gtYkrnnP1h7YLzxarqAs2kC4auu86JAJBYSoWCj3Ega3g5F6PrMMxvwac4BgEuM",
  "key31": "5SNHnifgupE2JoPMaQ7NN8Psc3djddffMJytzZCy5LGo4uphwFQNuKsKUB1hfC7rhQETq4BG96renhTGumT2vxN4",
  "key32": "5knkhAHEtqoR5sEA6FT2SwgZLjsdVtvqEnyryxp4vUxB4FtHbXUm9qdZctQa26vBJEpb1Ca9MbtDkNX8wHQonVwj"
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
