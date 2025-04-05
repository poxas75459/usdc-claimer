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
    "3CQDkMqdz7X2VWJTvWkad2EBE1qNZ4Fpo57Mzm2Ez3Ub8VNdfGPxYxxeA2oARnbPCcZp3xvgAhvzoqVNcLGNpT56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxepEZF5iDqVetDYWb3G1DaufQ8wBJW2HEwgDn56CbTL84ceGSyCZBt6hTSpfLZLeSh8aJU2DnuXNVN9wcvcePx",
  "key1": "5TPCRN9BTcCAMascvb8whtKSYSs9hTDaDbSD2KVRWaiPuCaE7jEUG61TmAHEb46eTwF8Tg5FNcLbGSo8zUAaryyV",
  "key2": "5F3yM3pQLQd9wfbHEyq1RrS5RyBnQcXXLf5bzU5kQ6yJfkeyuurmm3ZEqCwNQfZFDhkn57TGe69yC9m2qjxUepSx",
  "key3": "65vbrCFPQe1pPFWY9i7GrEAx58EswQJaxLUCgkxe6kP7gbJcu9RPTCPA3cgDsCoJPQ91iLSWHG2ozj5VHQ4NpzZC",
  "key4": "3JsNvueTQorfYudA2fTsb7WXDjRFnUmDqu4MvxCF13k5RmQkD8ggx3zsmuzYPh5HvGieXTA4VJnuoXZTbvBDJV6A",
  "key5": "mtMVGob32rwtg1o1zUwaMK3V7Cn7X8QVEHpLyPhJZXox2qTKUxFzXeiX8YqGgrRixiPD2UzEcGG6SmanRvgASUv",
  "key6": "5Gar4EW5NugJbSMjpY2Fd5nC3t4i4j9TMwCZ5aYysuY8Nh54w5o178ordXreYWRern9rK8vE2FQvhjsPRJyrCUzK",
  "key7": "3zXv3tqS8jB1jnoccw32eRhzxoHio1eAk12agyhpjBKeSALF5KK15zuQM1bPPWSKjcKDEJYhkJNfBPVEAKHeRSPq",
  "key8": "ekdAYQdcYWn8KhgADqDer391FTBt2pNDfbSJUmAWLKeRATP6DVDJBYt139UwJi6BjTdriMeGSwuNCAEeCT7oWUU",
  "key9": "3gqpqQLhx51mbsNp9nyGiZoxozhmvtrXEUoQtcVAKBRwXL7FxdJM6JU7oVrYUpy5DYpfUB8ofwZ8bhxJCMMDqwGD",
  "key10": "vYE88ewr9DohfFDFkHaEDtFMh2ZuAd8Vo9pQSNfVTha7JkDwACE6FdgVe7gYEg6rmXf32AkSUbfWAcCJFwBhWfa",
  "key11": "4kRiFrx42JnYMm3hqyK9XtffPezwQNgxtki9o81gBvVekDHb6gxL6eVXAqf8vWdYX2E9yoDwXw2iVihH2vJbsqDk",
  "key12": "jzCHV6ECPJa3aWLG4MbGPgMiDaw5VAjimkNtHpyhPqCcw65dKUyq8MBhaGcb3HQzLtekTb4TsvvN53CidUPnZvq",
  "key13": "4Q3yyvd7pKk6cxuKHtiZt5nVkS2P4EAjb6ATddDcp4fsLgMxTaFiFPef731YUAedLU5soqbMaRF6dCb2X11czdqF",
  "key14": "4iGE3ZWQRdL6RZL7LkGPT5pRgJH6onApia4HWWZuQMUSXYYvZ9aZUcKHVRo7JSbx918BDkvUigja2uA2pgXDS7UD",
  "key15": "2w1r8LCzFfpG1dUNeKN6aRVFYKZek79NuBwQ3pzdM2Ms8VoA8vfBgyR6LFWYWPB8p4MgVmPpXy6WjvJccLE3gURJ",
  "key16": "4W6gkZRnWSmRonGuQqUBfKgNWUBjD8QrJKZqteUyk97ZQZ9dypiuJ1ie35qRLgRgcHAWAba7M1bUmAvJNbtpGimJ",
  "key17": "31tK5ij2y1F5CeZQ1ykDQF5GRnuidLkyvx14x6xodNwF8jB3uZwqscjSbA5krSVGZaNy2L4qXBZNGfeDcG2Tec8Q",
  "key18": "5AuB7NNNZfzjnhU9Xes9GXDuNTg2F8chHUsfxJAvddREnahCJcYRbZCkdPQeyi4XdT8EMwXLkoabs7HWGqHG5X3U",
  "key19": "5ACyiSEjPQ6VRk2ShPrYv4wJaW49v3Ueh9FF94eyZdXCMo4sNKygPExQDW65EvhJPJdukmTd1wWbnko85TXEN7rB",
  "key20": "4E5ghFbTnEs4yfPLv4iTptQ1kvSqkDU8o5pg2tmzjgzkBwSzoSAETWDPQKN24BVaYZKtNuAAsQtQqiEJhS9vnd7a",
  "key21": "2ss5gd52uH9C9zhYddjZu5z2VP4idwpGNyWKA7pWRH3RU8oFL9UhDh9CWhqk8kssLhpdabuZRDXdJM9X62e8wSNC",
  "key22": "4Lut1grhSwqQeHBuTukUEec9LGYaG5g2tAkMwdTPxgAvwsKzC4MbXPEio5yKfV1e7MSHp8T23H3cJMYnCAPAKrG4",
  "key23": "63DYbP1SFZmWr4LPBTVXVBetxh9xjALLCG39JrVdgtNAyXypVgPZfkRpEbHze3b46MjjG69UKcZcDT1Tz4wG9w7",
  "key24": "26fr9k2HyUZK57Fvy85XBH3MJTybU7xJvXjFbv6f2ZFTRZFhMa7VaoLKEGp45RNaA6SUoqLVyCYDVD4b5KfSU6uw",
  "key25": "3C86S9hhn6UuGuZqDywsWd5pzSLnM3p1Uxx22nDtNXzPovpEHpkRocfTkwrfKhSirYXKa93t9UhsuiDnYm2AxPem",
  "key26": "4yv3q3DD1BzsP2fgQqFErUyizV8eamjrPV39vMS343WefcnCZAZfLeBZCUr8RRKkgYsVW2iE1b7CDZBaEpwidPve",
  "key27": "4zuoVaKf4UqjdNTV94jVNdkjVB4wm9XpzKzHDWuZZSHf4fVe1crdYUdoNnzHw1t3P1mVWMDM8b2YKBqVpDvRyJAi",
  "key28": "rrvAravBFphRS6i8JuLKYDCbnMgzYnygV89uugDgVPtgKDp1rZNqNApcANB8ym6JC5KCEhubHp83wkBoLf69xQj",
  "key29": "2iTyvKLwGVPYzFKYLF6qDrA8mhyK9EBPx39efdwwerjMNa2dX8a4FUZMUAf3HTCABXUNBZvJV3yo2vDrk1kinnD",
  "key30": "426Mk1WKeYihyqR4GHhD7h9ebaYQmGtveLJvKZ1pyUnZHaQhQLiKjojcimBrwpxDxWDYpuWfzjwTU3Dfb63c7uJm",
  "key31": "2e8DTh4kRir8oVd5o1aRQfaqAF1r53Qx8iCDDJZoV5RJgBshx16DvzFHAQhwrqPkom3pQgyk1mNVZADSpMtiTPpr",
  "key32": "3MnzwKyQHmD9mYgrxhMq4dwUNbBoECNU8zKxTWbJBAGcnAJCUmfoyDSVKxLvXMvusKMvCiy41fDHBgUfrSgk5sqZ",
  "key33": "TtKMAXMrDD4NMSDRR11hR3AtpJzGDtvjZYpd8RPPFNBJmBCESr8SfCR7mmMWyjg9fSf95ey86vivi1PbXZYoWMh"
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
