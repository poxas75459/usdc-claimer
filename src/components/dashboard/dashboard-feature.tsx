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
    "4o1dHfqyrvyMYGxeC14DPdpUs4LVZECdPxbgiq3esbgcQzbPdJo8pm38hQeM3iHLLZRk3QjPZEKD792eShGiyLkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66adMW6PJhFRDg9gWRKjKnws2ZZkm8ekRGPm9GBYnbffkrzE333bpdRUijEP2XHsDMLJgfZjsLvH48LV6P5ha6nt",
  "key1": "tgHed3RerZvBXSncuCzBYoCYCpWxwUfpTyfoiPhNPhKsfniNaLEfFkBGRVAXQK1XARXnJ8YMZY5vHAJXyUj4CHw",
  "key2": "3SnF5zPLdhciAVAukoktYMEggYHBSnvj5ZoSsoa3fcTHKz7HyNieZJ8CtNhKWsQuK4jV85LK45YQM9pzb6SAxwDX",
  "key3": "3oaoPrhuMmnK3dZGbj5M49LLgME1Zs5kPhSCg9EasXkN3MgE5GN7JCK98Fqpmbw6o9Aqav9wdoo3AcpzjCJG7NEC",
  "key4": "25wHf1bv6VU6atswJrHDSzT5dM2KcSWVbYZGLYYcXHyiUsyXtC7og5Wck8Rn59j4qYwy9PwNyH8FVQkFy1GKrH4r",
  "key5": "3x51GbJuFz593srUvuZNfJaetKg1sTRciQ28HoDT1oYSVcS5XzepP97Ye8mpyopdnaiSSp5kt6wgkuV6vvLvN4Zh",
  "key6": "21UDvLKZXrLJxhGbjgnT7SVGrSRnWKGMnsymyzmauy7s5x6owDzQaJLxXE2m7yYMYiYbqH7HdPbysQRTrfcck25x",
  "key7": "5Kkm9w9ipa9XP5jNRrBUH7npmcoT2AbYrMbVKXLYPxp5xfReG8PseNdY4vXMQcvAimUfgYSodsdr3MCNpawkzbhz",
  "key8": "5gqzGighrhB6WRBAwRUnD9UkynRqN1twPDW4LKRHrPv9g2LoCHnz5WggQtVMNz4u8qbkhFLWqrKjAsD8VwtwAmtt",
  "key9": "63bPV9oHz3yjwjJQAGNHHik1YWNCyEdkxMHaceDzSbs8bo35kAEJQJ8R2dBB95qDmJRzKSqq85Q6yQwsHKdF7wvR",
  "key10": "dbAU1dtqZF2pHwBfWBh2BzddurcqFtnbxTpaXKB6tHR4RzxcRJq6fAHdTbvub9XYqp5bySRZCBwP7AHRu7S9TWs",
  "key11": "3GTZccum9gwv8VhTdE12Q7GvFVQSzQnpogZwnpXaFNmRDAko2mxcmAkDfekYJDZ8ZZ9xoFz6WBkjeWHWi1EGHq3W",
  "key12": "33ukziwAp1kJTZc2MNmTnJJuQX6YCrrhHxSMtHHR6vCCgBQXzxVQgDh2aA9JWrPdxETn8K8YK1Dj92uHbvdgaPJv",
  "key13": "3cKVHETGnFP6nZUmb1cQ6Nnr8EAJGGiWtGoM5YCqkw22WhZ8iLahRJivyV6MKK18T6mRKA6tDqoo8gd6wF6tGmLY",
  "key14": "3heMzxTf5GB8pEyHBnL7EPG9HvWkSHXvxguhKKUow9nJ8eejVDfcytSAL8zL7UTBs28u9iN5nPKsocsfk1LYQWix",
  "key15": "CN7586BBF341HyqCC3X6pX46grDJ7oCvH4qXz4qRihpzieyS3Ghu7kfmxbY8EabvTUPJFiQ4t65C4tWovxLPDiw",
  "key16": "5P8CyRU3TrCFieqmQHEwmzYoQeMQZfsixvsX7M1DYnf9PyEXbfCwFvyBHLtHPqdiKnHxGWtBjprtjxsyp4HeGgiz",
  "key17": "5Y3T5Hc665UwPoNDSRkfFKnaDwioU7VRAe7BfqABiVvyqiT9AV35MA1MVzZoaG8g9a3QciYedd1aWG5k4afWgPzA",
  "key18": "26XKThP5XeT9v7xttyudemA9WN8dbXdP1oQb6i3oTGJxn4zqQj3zaFsWUNeHCj4W2k4pNgZV96y68NVFkRinXXBk",
  "key19": "5KzBN8DoNbtfzbyLBaj8N68oUf4fM1bKQ3mb25N7pq5BcCbTHiG26P1oVwth2GuiewJyeyn4uN6k836meYVUDCJh",
  "key20": "4q3QxZdvryG42mCWuFkdWvdwfLhxrVhb6HyGBzp6aW6B1jxBVTbJ4kEW8xZ7JHbmt1WFzoqvMGVkqLuBSWCkvqAx",
  "key21": "5pUWm96ziJ9MK9PsXGGQpjW1PHxBfqbfLwKLXB7oaqaH1UihD9SRsAie5sRD8yKYQPABrzpB2ZvoVK3ZDVdTq4z7",
  "key22": "5nQp693maG4qKcWXZsBpmZbLkBaewq8L59UXe84546LNXt36Nb3qmiqdzewYmj2abQbwzjAXgejwcQTAPfY4fFpG",
  "key23": "2LwTQqTgVccJzN79MQJiUJiFoNj6o8JUS2WkAPxE6Js17xG4ZQH1yUT15MS6vW2GyexGwyPwf3Wv2fAy3cVhmgEh",
  "key24": "JZ7Pb4B2dKuTdBpdykfwhjJWg15APYnqaKekjUyU2TY2VHrX21NwJdVSCvLHHitq2NSr6hmUNXTFwqDu5jBd4Sh",
  "key25": "2aVR5mYHKzR2zSLbxNTiaNanWmDtGQrCXvDLzETZX64W9w9B2Mw25f5Yy8qegdNhHyPsU5umvkRaWJrNL1z6YkYG",
  "key26": "3V7kt9TWyzznn37cysqfmopMspRxdicd6cnfkujJ3kC5PqEiCa78CSPMvxA6UVNNHDXAG4HjbUiiKZaX9PX9qzmF",
  "key27": "4MJYPZB1q96FNTXdq5a8BPT2xQDQfXFdrXTLXC7bw8YTf6JPACv6UNNujNQwSe8gHBXZtDCavEa3vaT3RGPwjFVr",
  "key28": "5G5uC89S8SrjJppCsy27WDEBEpKTrafvzDkM1W9rkjgWxWrHtmFy5cpj754jMqBWE1tRqJvMn9hRyLrtqgPEzeCm",
  "key29": "2KuXrsQ6iymc9sjGopxejBNVVQqpCPBDyHbDG4Goa9UsQcatpaPqJdgEZvWxmaTVWNKps2AqhtTAWg3xMWCAdUu7",
  "key30": "2AABjkHHj2UkRA8zykGHA2hdm9cLfStNXRTJnyAxrTAkULXHRFaW1L9RsZQ3RF1KiCfLJTF6N4dMiCaS1DxtyWb4",
  "key31": "4zVgAJ5qbadQNQoii6jueCinLUPmoKytwKxtioKQNo1HNWU7rUZcmoBboYTK2He8GXUKkqjS3BHgXgMDvwkye4dD",
  "key32": "2jRjjND81pax4ohBkydrFhBf4poyyxieLQHF9Mtizspxqp7ejSKdQwaNKU4bR8u87z7dDNi31xMBoYnc1XR5yGqM",
  "key33": "2RyNGZNphkjnJWmmWd6f8GZgVAqqBaWYuUxY8kDvkC3mEBup9tvBZ34WTjak5knSxBRKBvWCZwgf8GepEWHP4aY9",
  "key34": "4uKmCTiFdBvpW7z4oQdGbnyKm5bmPNmQw1EK6ZiehhkqKAym21sifEfB9mktLnQnjvTQiUe1yt8htt6vRnon6kgA",
  "key35": "4PN4kk1FHwzELotZtFXKbVj6uAN7HGb5by2QMcF2sGoxMHkaQCoCgYn3fpjJ4UupsKnNo68MpmZ1SiTWY1SERB46",
  "key36": "5vVMrkb4LxzkxBC2Bm8UFn8owp1Zpd6bnZywTH3xa89jXEAxY6229UaD5LxGZJNL5bQ24ZXoUapqbpYMf4hzS6VE",
  "key37": "2YFQ9NjM4a2HKBrJWq1C6Qm3BknPw7LTHMK3etrLhZTf8a2KEFu1jLWzEVec8i9EZKZ2LBixE32ZkRTumHpEXztn",
  "key38": "53GE42QSNUm6Rp7TR65M3ZNLxmbveJhJZVkA4ouitb4ZHcU2Dv86Kn36Adg3Vpd1ZPNaXrDoPg1NS2wwpbLNsNoe",
  "key39": "5M4mZAavPJGshN6qxHUoSRHrvGCabN4VNRkX3kqzYuig5hhhEu6QMGnJd1xvtFgHigdGn7Y5cEcBFY7dRivZ3ShA",
  "key40": "H68TENU4eDk2UPkFpKbdgmaK4MvDKRmxyVJjeUiiL4gyY1iMPmLZVQ2gvGVzdXzEX5XYe6w5Xpzt6op7UFra4Xk",
  "key41": "2cxtNbJEjV47DBZyBBNpSH8h43WjdSTGi5rrgCE7CQA5hSL4mznhUBQggEPZrPyybPAmDuLVjAXhuGXgH7Hp5Wv3",
  "key42": "yjBno3Nm6uqtbfr2sQBQeTV7mNRR5eMdsYsz2CFV61si4D7qFhEQnt71r8v5T1uwMRKKQMKpMmDYQEGAcWWz7s1"
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
