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
    "3ED8XEUXnsq3nXk93QQ333frEUxJMq6ZcxftzCaEHDj19Q6zgesgHsvUGtGbMZoQNpwdNcDK9N89BvBn8NtZTfdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLQwwMjqDLG28U57gthhTjThqdF1G2APgRqDbYttFtM6H7BK894yZMMtYyR8MX2RXFMLkEkuwinaRoEpeEE179C",
  "key1": "2nv72ofxVQPrRozFJGbVQxkdaBH5eLfbCPUcEK6dAbVehCK8RmGGLv9ognkm2jMvfRMhwYgTJRoN1tYw4rgYjoLa",
  "key2": "3Hb7YnRfgbmb3SU3FrbJg6xt2EHxA5TSMa371ygqsqSZmf9rQDwD6wsZ1tKEGKDUQzVP8FYx9MAzByVSEzTdy5vZ",
  "key3": "5v1YrZfbpXFLKZq9gUYJckHjxydNxqiDtxebzTwbaNWixoxPsN83Y1QobdcvKz7JEvEfJdDNv1aEJZcYjormpBJj",
  "key4": "3H7cwpyc3pB4TEoRdddUjWmLfW3TQSfix62AHr9K6dmdZ1ZZb8Vg4TYFMi2hUFEAmnmzSUVC32a9BVgwXCaUv4tD",
  "key5": "L3pfULCsjwL5sJBJqfiNa9rmbZuaeZ4DPnJAoNec1yUZRZyahndLngVKgUycW8NukDNWY7q1kL4MqH5ymUrwSCZ",
  "key6": "NLRZkn9LPNYJmPEKcMbHmCUSZZgFLsTvzCqxewHFtC46i1pnh8TK2NoEKD2qGxqxXw2f9CoYvDHmpbLh8q2Fq9Z",
  "key7": "5pUwGQ5RJquPzM3c7eF7WUFcbbavnHkT8CXvHDNwSXDNQJsMp8G1Fr7XmPFw6Y6HHL4rvAa8VxsppiWmwUT85VAi",
  "key8": "2wtExi2yFusv2bzQ3hoNe7Vy9GSFm1wdnTuohhK7B33Xt4zjbqb5mo9hv3KVyG8Qhk3dnDkBhdUh9GX1JpyY8cS9",
  "key9": "2oEF2ToEQmJycakNDG9maG89C3LEswVbwenhHX74BJhFnF5APgpdYipCKoJJ825ECn61vxbEJsVt5xoJGEjuUVVk",
  "key10": "5XG1EghjGZRW4mGkRSV5KTixjF1VpHCwTaHBmxEuQPni6mFMiyzVn68QZVDdN7MpwnWNz1NfBafVyS9ysk71h3iy",
  "key11": "4R1z5sy3bkW6a8CxY3zw7PgMveCs1k195x9iXh3bx73wT1YttQzC2psKPb5fioXhyNvfXWqXHDHnxhWLRgehqrvU",
  "key12": "1G2nLR2cQjV1MFKghDW8Kd4XYUeBimdbZLZNJG5tUy2MyyvyxQb7hTTVDBaiysvcFZr2EEtvF2FeNEWGGf9nGjz",
  "key13": "5UXVEMFtweteiHfqSPQqBCcNmaxobYb4qJj7gD5roQs9m8ENnVeBANewRD5VM8WYEgC6q5bh2Gs5GMkvvaWkSfJs",
  "key14": "3VR3hVH89CQetVhin8MpBgR427sv4pBji58q8e8C3GXReG3M7j7f7EeyGwvx3G9wZywh5rwF5nasC6ppCJfXvBMA",
  "key15": "ZiVABzgDRx9V2pE2TKgJ9TLFj5PRLza3qqi9N6JAH7mreMA9bT9p8T5HyPe7whx5zVWSJ2vLeEe1Gzi1Rjz1rNh",
  "key16": "3SLX53szDFMrX9XUEdRWoveVBY2pi1wJg9FaykMeyiJpAJy2XW2tchyyMiRC1jS3yc8Gad1e58839Q6rYEgrvTQA",
  "key17": "4VHufnwErSYFoPXRsyqQ5Nc39JhAo1m8zssWtDeV262QTwQZGWUriap2rdnFdCtSQbgPJV2CTDhZCnqbiePUT5xg",
  "key18": "5PDujRUu37BfBNfff51G6kSvQ6nBrDGXMqXCwKKYgRkaojnkdDnVh3v4LXQ3cFQSeJePNp2XfEDnwBpxz47tvjsm",
  "key19": "5Fkux7aQ3w3LGE434iWFw5frNHiVq8jWioKLEYNc76xboe3HGqqJT5tLd9rzn3qrS85ZJCPmPnCPc54hJpf4itHp",
  "key20": "T7DBi4cq4WU6TQzvL4pjJKDcGbc8KdKqjVvPtRP3w3td9VS29BYTt5KDbjckXogCQp4rKQv4fsbFdqgHxTX3hNb",
  "key21": "4akBM6jdjg5UQw8USh6kjYRyf1y49qSuQAhdVjgux5ebCLBovudgEVQDBynpWzR2KWtKRHVmc8QGMJu2oEr1sfnT",
  "key22": "2EDabW7Ck2Pw13dd6KUxbLD4oKV1YYjVEEqVW6sMHocMj3zEFBFTSy7NouTydVcu62RtPJX57kc1WLfqxe98oGEc",
  "key23": "FFqL8mhhKkCxnMeZoUcz7n1FFQpuC9aB8AkyefHDW87EoYRdbARbMnqvBsr8bEPKECSeTKJTtSt7aaSknNKjWFW",
  "key24": "2huXZCmGe1s282KktyaaFvLQ49NbS8JYb3UwQ7CVfA7SLU1MDSkmLExvBPrX6L46udCeNbqMZifs8UqHxp3eWJAN",
  "key25": "4My13n6B3NxcoNmSRPmszLHWFmHqHxYk9Qww4pT6vcFV7Wtk1jo6cNpzUWepGaiS3P2agnmcHcuC7BkVv7V4yedQ",
  "key26": "5rDT7eJW2aHLm6LJh88C892rdxkW5XwQUgUpUbybVePzX5JgcCMA3dz6hTGBEbN2fXKfSvdNkijF7dFi3BwN432c",
  "key27": "5Ckd8fHY3fRaWpM9j1swmxFckVY7PngzxvPfbojRwkZbRpmFkkB6iT2TUVwAoCXqNm5tUvJgKvkrYmdmKYxJ65X3",
  "key28": "2Kah6KDcjMfQt45AoBWNL1NdLKSYRWTGNukUgA1ghR8iFTsmdRx7cZkWFRpp5yCNdzZM6742mucd77UaoAasS9UT",
  "key29": "WXP7WJ5JtE847Gj7YvPRdrmdna8LnE6WovNdfx3ormW5cdEDEmWxxyoLUKLoSeo6kLfqSnTgkAuox6x73aeZcWH",
  "key30": "VxGpCGbwCXU66Ap1eEoR1gaq6cqzi8iTLZRy5jPoXyreofRFH3jXsZvDYe4XHUDCuBujnpEfAbExRz3o6dfFqqK",
  "key31": "5zEiKuvXDXK7kXqzS8rrpjaW542eZzABPPsig7vdQ2Lcfb2pfT6A2YH8qXKRCF7q6RK2WqnnwGG5Z5rk2YkuTEHo",
  "key32": "3rBAGZdTSisyPsqM1syM26cvwbj6C7xYYS4LhEfQRrzHtDSywdyXSRdZgs93sPf981HFmYbDZTAcyYDo6ZCGKQW7",
  "key33": "4eCCRPeM58jorZ88LnHRXYv8v7jv1UE6w2xriBH2s9gktqVM387HiYUaetnMgxYmZJzaMtBeCHKk8QWTgsYEfort",
  "key34": "NykkGanCj6dedWoMGCsU75rBkxYE9ogLMbDXLaHHF7FVtLu8ymYYhcfzehtTfCu6GxbaACGLMj3dzCYhoU8JwwB",
  "key35": "YdGuh6oxgPnqMfuA8j9ZT62srPCLo4hf2StnUYPmcBbe892WAuUb359CA1QujzVC5RHrjMrvkXxgBsfJYdDprog",
  "key36": "weygB8jKhTu73gj5aJEfpMrGAbUNKXfqGShgPcxwAhUV9UCNqBxQmf3dVy5u58HKh4J9BJZ8rxWJLi3Lqb1henp"
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
