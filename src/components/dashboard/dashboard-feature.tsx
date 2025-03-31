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
    "KfWfymFCirHRX7VpPZLBbaYuFgpQvd5uc5MJ1fXtCRm8VbTiRXT4ww5WYsWFfjq4tZsz3os5KuzwHJyzqc4G4pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55TC5ZcCbA9Ns9r9ejNovhah7KpJofJQRY5VQAzyNjrZcvpBjX47WsKjLa9HNZt6gGm1efRVAdc2xF1YWUHWS8qw",
  "key1": "3mGtLmktBUdYYGyeiDCSrhu97h8CkmK2g9XAKUeh6uYuahLcSNLJzJpvtWeexWWrFSGgaDLBWFb6WeZfM6YynMQ8",
  "key2": "4i9p2BuDxShTx2zceSTSQmWH3x4kevT4U7qk9dhUuvedErMUFVXhDGR9KT8ZQ4mvvrLb36h9V4tzL5XcsFtuU25d",
  "key3": "4B8gbZJAFGKZbWcMCQHHwj1xSKyeuyZTXEg1wLkb5HN8ZyPVoXGUmodmTTCcWStUQNCG4BZNeuneijnQGyv55bYA",
  "key4": "R867RCfYMHwjMLW9VDPCwkjygEsFpiFoVs1a7STWYAULiCZe72cWZQbq27mui4C1hahrgydAuVqrjoCzZK3PiQa",
  "key5": "CtDReowWBhTCYVMZZ1XtGzcMnkqHuh2p35CYDNcmBYMNJhZpvAPv8zqDjd2xfQurW9qezdGdoSamfoPf2vQQ7V9",
  "key6": "2fN37g4LrYowhoNcwFrJ3bY55XaABVLiHs6GuNfyp7aUzKP1fNb5hif27VTu9pUZ9asN51sThMtiF6LGKt6vr5v7",
  "key7": "3A5vUDXZLuH4JnN7UujqBjJ3DN2rQsRTSGjniTHqb8EGTyMYANfnmfBQW5b1B4UbCjMH1QfwHFS743jqAVfh89bn",
  "key8": "2YZFcxeAFNLFSiUMD5HZqMnnWX6RZWSQstL4cBPYYmqBahMriZT1s1CAUyW25LepiYqkCB7hHtbL6xXx1YVgX8Rh",
  "key9": "5WGPaJJRioybZTu7LBE5ut3XzgiL2UaWYTr6nAoqamE4vHSw7EP8LJb5PFhnYd8JKvgLgkPGV2PXGWaGYtjdHzWf",
  "key10": "2hhPTe4bssg41zUDR4ZQCwKJbUhq76g4eHZ7oQFyR7z6xULxiFgbFL8GGeux6f85c6AXk94dvCTaSRqWbVKNpCAi",
  "key11": "4MFWTdAZkBujxgxxA9MRFmeoPJZ7qxrqkYov1WvdeKW1NhFn5q1uBp7S8E6M2W4dELNpGWEpr8JvHm415CWzzgM6",
  "key12": "5e8XzC3Ns2BYoqx5aLAyn2nYdhBePJKC6xrUU8r7uD3CkiogTt7jZ2U62KFGPhDq34GtkQyKGY7uzsMvNqJM32yV",
  "key13": "5F81z6mTar3TUaTa4ew5BghVM27rioLa6VSYyv638mWrCTEncurx9PmcFu9HEW3uCiBV5ks2Rip1vvgpaxSewqHb",
  "key14": "3wgcZyn49WLQRnGpR2zRavCcfKTRov9XFZTtFXdfWkwwoiD3iLPNx2hbjpDXi5hpuqrc93WXtVS9S5pm1gPGUmuy",
  "key15": "cPtBeTV64QMcRJtdpPJHhqz7Ri4DYNQSHPZBmNKjyRc1URRTC17Bt38zq1WMBuTosKhReJ6qtGBhAinK6p6wP8k",
  "key16": "39DvvNTQH4CH2QTNzDSCeGLQR2nFjqqrA8xkgv2WjE6afuRqT1Avf8m9pp7TjrudcKFAmmpYXaTABAnboJ5goscr",
  "key17": "382HeTTy7MG6a5Y41aJqz3uD88m3k74WLvEwkBNgcFv1XMfVpRReGou7xgVY7asFWCWZjZG1eWg1xLfF9EGE25ND",
  "key18": "5QfmwKd96c5mXUhQxKWvq4uumMT87wFzeigdAqMvX5Vp2LSZYvkLbFv84jXFsS4SwoCFBjRu8GZ5Vd9PUNYocbLn",
  "key19": "Cf6FaaWBLNHMYqee8SXgBjBzyNWkmoV6wNtWMJ5vTsvQDdHW1toyPBnfFEa7zV79qSJRhXqTk3hwqtbqe9PC2t7",
  "key20": "4cKva36knKLif2nqyKr6qdWNTNLVymjRVWJJJHHcvAksZEiwpSrFLztjzL3zs8DPLs5wFDzhdkGRrJnWhWDGqSCe",
  "key21": "4GpB1SBDSr1JossecbQFG4sZAiyRb1wgMvMgATpg8d8BZTrDvhSqktchEForEsbyWxMipcnsPpHcZQy1uG6hCSij",
  "key22": "3BqWzHLHrqSFHKHGHHkj7RhdEynYgzXD3f68Y72WAjnWBtePZ2rsPAawVCPb96CkTmLES9t6kCejGykUfW1n68W7",
  "key23": "LR2SSmDdtQ8ebAxZuDic84dJeF8wcx8PTCzQZXbAwYucSiG5xUL4UDc2jKk1PDYwi1zLBLsiUwPcre5HKXETtAK",
  "key24": "3wvumYP2fYcSuKEXJVXQ7Y5e5zAR4pjY8S2MyGZeJMgLCGLs3p1ev9dG1JUcPFAPTdPxRnjUaGAL9WTpH2RCweMX",
  "key25": "2Ltw7KSHP6s373Z7QjBXZwtcBas8TDSGagwTivNKzhpaeqNyWUWM8s3KHW93n9p9fGaX8TyKxHmCyiNby63u7ZNt",
  "key26": "4rSG6nXf2tZcRVesgevPTncttcuSuDic11sDFPYvCHdUM7voZyFUdPUXG7ybgMSihwHebNCGfq6kDYnu2L4oCF1z",
  "key27": "53qC6i1oT3Ugpm34mCTSqQqekQoaJHwoahaAVdbgbiPWsfrJA76pKkDkmU32QvRSn5vigSkY4eUxfSYJ9hXLYsnP",
  "key28": "4mGvrTeRuYZLUWvjJRhNj4wcTPTpEiBfreDgjYfcoS6yH4CApz62zLWvDPdATDq7pBirdQchCpL7dqehQn8g5esb",
  "key29": "Wy5aJtteNpbECu1GfQxGZZgAG7ebWTRaCw1Ng5jZdCBxvZdb8frgYaZM531pmdSiRGJxukCxH1z6h2y7jE4ZYsP",
  "key30": "5vNPj1pHkNoAMzzkAx8EFBGRXZqjNTcP1WpfZZ8JpmCPt1tVqtE9YBTAtsXssH5Nwv8tJLGCRUVpcnksYLXwJfcv",
  "key31": "3FiLwgDRZ1x2fAE34oRh23NeZ56UaoWC3LmCiRvwNjAATzzDFczem629nf6gz1uYXpjGUTxkBQRSpcQvqQhVvJgW",
  "key32": "43xDU5AgWPgdSW6HtQkbAG7uLrR5S9SPghqZ2k6fWz9LqUPj7QUbDLpYq1Fkyogd2FzQ2mudv4oqqyKYgX7XVY2y",
  "key33": "WbvUY4yviGCzzK8XktLB36bMoYHxmCkyGc4CwW5PXXPqGmSNfVqE61V2mJCgMDutFuUV7zmpaghuxdZZ3cGwXcu",
  "key34": "3CGWSRVq5R2yKPg9aBt37b4JyNuUWKjodRC2DMB87CaK8QSwDg7xoTaCTPMVsgTS2SFMyX5BEKQm94wnkr8JjNEm",
  "key35": "3ExfKxQ42hLu5wZPyZgGQ8Hm4pwxZVSVdB4wczTGBFCosCQ16LDCBwqSHYu2sq39JdP9gA7QgBhZaNDCJZ62R4TU",
  "key36": "52WwSKFM1RCT4RGCXvMdBzVn1NxuCWYgEdA1e1pFU4quFdHSNy7dWYtPpYcia42XjfRhjCmkgJcMYQp9i2t8qwzr",
  "key37": "3CpyUg25jrwr5r4P5zad6z9bPZ87zDzUNi9agXx7CpwwGf1JuiEWBbRbV96HxHrjGJwTEdtnUAGEw3Q75CeHznvp",
  "key38": "Y2CjrfEoj59Em645FTheLADGPFqZw5DRAiUQBGgtH3XaYc8JY6XjaUgN7kL2FQuuyds8nEpk2PdS8WsFnTf76BQ",
  "key39": "2ZLFka6A4J9mq6HdMtWALfVkPbY4gaX235nhAiSnbsgdVB6neimYCMpazmMvQYcYkFJQkbjvQB8ZZwsu44yKHiYW",
  "key40": "4GxgkX3WqHx234kNZnyUDWZpDPGsBdyZYczKNVBUQBMh5upDZhQFxzHrz2fUTxUiYZ44jpdcF1pjJbkXTgPtaeUH",
  "key41": "3J9fcTMB1SnZu6ykfVhwNPxwN3sCGvjpXVrs2qfvS8aighLuhCcv43Lt4oUDxAKAXYHnRJhmWZPjeV8UpQdGssx3",
  "key42": "YjL1ejgixhfQzHnFVvshFvQQSAyULQqrpvePEdBBWJXCAZwiBe2i2yZ55GnUtT3TkqpRvUeZ8pd8b5y1oLPY3wQ",
  "key43": "3JXTmJz9CzJ85Z6ypkVfYWRMea9qDLJAxJGjmHdxpMdvgPwUBoLJD3j5ryMM6yTFAotd7FyLVSkEsBH5MPXsG4MQ"
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
