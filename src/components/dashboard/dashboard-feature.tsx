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
    "55mRb7kqGdLosyY8TEc7s13q6GAT1VSUyDJDfX8wgjD2RbSYHasCSChWpbmEmst7Bw3BTeLKmxXHhMC66QaDojpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HkPib6TTw7b79cKKu8No6CwAPMRvFYzDyKTGJEFTRUUP8vMC79BF1iVXHQMeMZmBw3UZXAdR2gZUtgUynbHerfM",
  "key1": "3h1vcE6Y6rE9bLj8p7ovtjPQCPD6uKxXpG1nrTXBoAb9way9ejbEeFKS58wzTPyvK4e4GMMWhTk7mpYv9G349xP8",
  "key2": "QDhE9wj3oDxwAiCdZYPCk14JqgMyDCvDkivmUYHyhVTgD9thVV9m434PWhJsPUsUpznJoZy6cmWhoyDMREvrE1h",
  "key3": "tDQPE6rtsBhr1yqXYAGoLweXJmhLf3sL1627oKxvjvTpfGsoPmCg1zLYyNYnkNfiNvR2Q4yrWGn6JJoSghcL4fH",
  "key4": "5m68MRrhLnBnXTFuVoNgqK1p38BpHrcy7v1ajCzxKSY9axESYykuweHbbFhM69HRBwT2qV5cCshuvMDKyUBFMUZ8",
  "key5": "4HahPPtxLUYgSREFxR3a118xa6nn7w7nzRmL4WT3jabFxDwC25KXgjHtdNVxupxwEgXZKm5MeHAZUoRoAsUMH7nv",
  "key6": "46mLDB6wausrt5QaNVbJ4tkcD6aCgBexoasvCh8C5T9gqtVusNPtaQt94JZDhrpYmY6hnooEaA7H6HRgtYqsm65V",
  "key7": "4jd7kEGW6JL96H4kGMwqj2HHvw3m1tUhx51NuQBbJZjeaejpKLvtzKAwRFFeH99wg827YPfzTCAw3FGaigi8bCA4",
  "key8": "5kQhfrsrnos6nG3aBA2C47FSdV7iy8VF2FLKHYktXp8n4uwQRKKehdetJfjAu4RATWNJoJTBWMo2izYfkYvGsphq",
  "key9": "5rrwFcF8MFuoq6BzWktgoc1fT9pVWvr2n3H4n9iRrXHtpXeYqY5k2ArrbgJkrK8pjP2yRvKFg5P4Hc78E8h5VTGf",
  "key10": "4wF6AoDprSsPrBzuxZGVBLUTrXR7YoHLscpVskApwJcJoRztvuw1PqunNGZKsEpVfrYHpePfq2J56V8vbfiNR2MP",
  "key11": "52ShdJHUd3wUEHeodGmnAj4mPbE2W1WY56Yz1vFiQVxHHAtrDakDGQaYpqsz5MF5zKANgwps11LZH3nrwNTf8NAm",
  "key12": "4ZwoeiS39YvUR7DSZ5kroQCG8ZfdFgaTCByVz8kJyfvMPRgDkYcE9ZcZKPco1dSovpxcKZQiuSzoErZ5cfjwjADc",
  "key13": "2bg2XhJiq2gJYRPuGdFVxLZB26yKeb3vdVKvuZwrAQ12WXr14WjALv4h5D1L3Rq93GhL6S4ghUFZ3RXMncrTGzW2",
  "key14": "377vWLcMr5NnRoK6GhmRS5oRsjiy7odpLuAmnCuBPMCBuCkC28CkCm1FVapfeKNVoG9FJbT5k9J9MVcLBj9ygnit",
  "key15": "3qYQs7caAAzXTuRhP2zU2scSAVWayDELPmRJB2bjtGpUdUcqSUZTZgPpfw45SFnVt4RnGzSTVHBmGNcvV6oZYoKP",
  "key16": "2AjxudsUy4M87pzv3mfFPKRCqKcQk5c3fXJQdVgeC2MzxKmVXLhDSjX7PksrF8HnhmpVqifLppT6LeKqxd7ggV8N",
  "key17": "5XnmrnkUHQx6EoJq7crtrSzDXfvx4YgkzjzGVZGxd1qZoPJtMxmRHtgyhJmcYvPbeV7btfoG24yjX7rHqXdFUKoR",
  "key18": "Ux5VNfMiXob7LdxyusWcmtVFSwyRPU4Uwyy54BZqyvYibE4teG4C5Edmx3GssPd3Mry5Y3W9HXtPJJ5EQJnkjL8",
  "key19": "k5eADB4Jk6soA6fRRePn4EZw55crpPTd41ds3oM3JtR56CJXSksgF89YCFM4Jyg3WnPsuPu7rbZH3TJrdfyqYGU",
  "key20": "52HUkq4XnuNtLNGhsaTZwGPkENvDkFSvPP7s7qs98d9h4U8X2U5zyvpQNVxs9wo2g9RQPjjwdLu25EPZp26o6Ea1",
  "key21": "5zusV4DreWQbuhrUX9s7nELEBGv6N7LPtD52gM5rsoiqNWyreL5pLgkj31mTYzQLaWJojwZDiGDNXfzuUAKV9Guz",
  "key22": "3vKy9NVXwnk6YzoxnYNVCptuHTs39k8P3MMVEZbrBHMypLE56ra6Mg4aLX2uvLtDvm4KNGf8eDfZFrDS78C7WJMH",
  "key23": "2xG5xoWJpeXrVCjoQzndnhnrLzLqGtrmRoYL1BH7cVnZhhGPgDdXc4ftZt73i8r3LDAUywHzJBYsFdCWKhdH4w3B",
  "key24": "5wcjMsq9GJy4Gcrpx4oXLVfY3WvbTZgqRZzBgJCCTuXJxNCj5u2c15oRNrc5FJ8ZxXDFCvUzqKrUJHws1Wtnteae",
  "key25": "2snSBVDaT2sHwyX1es5q8KjTcUeGMsuqK46o6W2u9NsBcEqun24SEjGGwraU3gJZkRBhs3axr5s5s9zhVxrGbG5r",
  "key26": "4mDqAxfn1ZF7QQt5S9iVhCPbKmH49j1hGxYQXabj7RygqYRAN3GtVdGDA2qtkYUqHRDdgyQaZEbmw3SJagyeBNtj",
  "key27": "ecm95QgZoa33aJiWNUYUXB5mb76M9zdkdNnTMJivkEaUN9WG7GAuPJywAxkaJoP1U4b8zf4XDsNedyAcKpxYQRP",
  "key28": "r3yxzQaQ7EYxER1BfBy6bG96EhJESAkjd4xbbTpmeoSQzZheE8s1C1KRKsEJ5rtvJLvy9zHL1EpXXP9ghMesFit",
  "key29": "2KPBzBtkHmFjYCUip95h8s3pxAkLZoP6t6c6FAAo3ME2YAe25RbVXSJ9qN78B8hZnEY2DEfjTQZBqZFPeeBzkiWe",
  "key30": "WKGjyUY8BfdZvrufauLRKGWsPE3rxpHbWiGG1JqbgXSEpnHGsrY5ka384f4UdKr9SBGBUJCyfK73h6uS3u5tD42",
  "key31": "4HVy4jB5RdrVu5Ze848URdGse9nVu379h3HPNZoAKoDyANtgh1jE9G1tFAQrnjt2Xv6J4DWYZWyfBf9hfxUy1xEU",
  "key32": "39brbau4bmryJ5LqDj7wyi8t68SpnDNDJMfrJtqiq6HwWNH4cDtxDNwHJMxgHvSDcE2pHzCsa55Z8GVoPLKbhAsv",
  "key33": "3jTnLJ957XX2nyPbSc8Ni7dJfVcae8scZTW9nXcMefDfXt1oUzWPyDc2HzMtGSMR7EAUwrUjS7b4E1f41a4R2T8x",
  "key34": "2ChKyU6tAoU8Zu8VTiqS8vKTDrApQExZx2T9Gtznit5BkmpcNRtdTenVw6iuUZjcEhUiKx5u6NwhNxWHb12MYrPJ"
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
