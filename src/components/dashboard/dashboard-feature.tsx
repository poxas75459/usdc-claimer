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
    "39Lrp5iDVw357kVQtvpNkXAhXUPJx4ezz5y588xFQJu8nLaNx9oYQc8LbEzqeNUuk9LRKFt1KzZBQzgJdVkKfjEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmC8dP5WRKXRZNETvWeUzbtFcXb5EAJYMjUh67JkxDTPNa1Z3EqDsC3mCmYUs2VLZFLirKSN4TsiWULwtbXq7rt",
  "key1": "2fshNY8UkqqR2h6ndhnwwZmdLZSoYvAurn3Q857D6m3fofq6FHAttiXPTZ7obhzoq55gmKoyLEoUeScM7wHtvVjK",
  "key2": "5wwj1v6eCmYUBwJQjKXB8ATfqzHaFKtoLfD9suTvT63iJfvv6inpL3QGQEhrB6YACAazf5WNQN6LJ95xH7xgJWTK",
  "key3": "2AmE9AYm1HjgcN8M4NSiMLxYTjBUYRdMGrcoBcJot9XPkrfk1VsVk2bvssi8kCjY9NtxfrNCxYrHV2gBCbrmrBU3",
  "key4": "5kqNC4ECnS3TEdz1hZS39odqydH8adckjEieoJ6h6K9mpsNDcFwTWAdVWYimX1VNtaaSmyCfTp52je1hj23hexRC",
  "key5": "2uEbvJm7FSvFWr1WHnP2trHKqsBxKtwkkcJD7icBQzpDWVJrxrZsBgiUqLGAHsdzaEixDvaibQqewQmCPGpgHvtS",
  "key6": "3in1aaqjtvUdSjdvnJbqw2bH2LeN9tQvjBtEAkkoL7iRGgAgcT5Xng9RcFCYanoK9CnXdrbjhMh1iN5RGCofQBJx",
  "key7": "gY6puxDHar3vzX9acWb725na1fh2MMhq78DsAw5itcAK5rsmhDZJ2pe5XZjJJidz8PngSB2MmA2xAmk5V1o5UwQ",
  "key8": "2o2bn4SoS3AmUJt73guLAtUUxRncdAEE5eGpv5xMM3acvzqcUXpxrR9cGRoBhFjNAvNUECdQKmJhox5jFevQnY54",
  "key9": "5YoKSfxHF2PsfKQvz1hkedcaNUf4iiDjwqFBtLzjRMvjdPgghC4EdT7iFC9SgdkjXybgQCMboX1GzxiENKv6bNwo",
  "key10": "2AkhCSrpTTbHtVQL847A8zChruFxHksFiCh7seUuJCCM4zZfThqAPrNnX73wbSvS6keXyNJt6gyGN19wE8UWMXkK",
  "key11": "4eFJAnoPUbmBhbe6jSk787nTv26TZAtUxbbYDZ5xG3rQY9ijte6Z1CYhxdy8pidfygzmjY21dyeoLZ6U2cFwyeHJ",
  "key12": "4KkTPWAszorvBDLJio1MTCheRQtHF6bTHA15WXicedGK4fzkVcUeSdkKufg2URwVUsGTry6CRMkoJU5Liyvy4kKs",
  "key13": "2ayfHHTGCcHirNzubYZ8sgs2eQ8EVUVdU3qkAsxsTZdha8CCs1fpDeKDuSDLXd6xU3Qut1BFAJs9NBJjkRtS4kt1",
  "key14": "3nFL7SwTEygSLh7ovwW6aJxs1UvhfsGrThgR5czUTtQ3Qc28HpnbCeiRJ8GxtZFvoPckJZoB3N55if6ttfRcKSFW",
  "key15": "63wECC6fgVuE2DGhHcjzon6kL1kA5dSTPQoyTgCvfFuDaeAWBpJbfBXGubaapvQyrnNgLnWGAJ85AA9K9WtMDZRF",
  "key16": "38tqMxcULW4CiQxVeiNThHi5qaSkF2KY1yxrBfmB6p2cXGGX9QCUiKZwwdTj3vzx3QHzgESxG347XoUsnpKRn16d",
  "key17": "4zukURPLRqF7RomA3meSi6WzboEgNz2xiExsLMPjjrJFmRxL68148bMj3ZGDbqWK7EfUq5RjDGEaiMYeJ8coS4h6",
  "key18": "61sMoLKMyG5eKAu9b14wUspWiyKstnEumRx6icjwASRohfcTXggCvaBaqtnvYwtxMdTPLnVDiqtKjHWFfBDXgk23",
  "key19": "5993hD7ZeDGi8YMUqZv9coLe2hvZkxh49QaxGbAZNuswdq67w5aoQzfQnhgNqEUX7kDT23iQxLCVZFoFmiVpwKvf",
  "key20": "5ayK47FP9nuABwt4R48BxTQxonpuqnh9abrA6LXFb5wWv9sEkp75Y6XULAQcFkC358m1TxbizHbGTRWkeoLoHdX1",
  "key21": "5igZ71nHj9mrumTeWw4f1At1zc7uYWDzG41XSNyqwwiVRCNKgaeCb9Fe5QaPdkhsqwMukXxPtrCK4jrx95Kj2R6R",
  "key22": "4eQxAwDqSnkDdE8sYT3FF7coFNqMkSnGYPCcL8QD3CPR3dLh3WKW9VbZEjrXrrnaA3F6mo2QSRriqyZ3bnSwDzDc",
  "key23": "2b2fHtknQyTTsTB2nQ4yBzf9oxPUXwVEt5H5xas4tktVuEemhGAs16VoXAkmn4mRuve9HM58YTtTi1NqxmkzUaig",
  "key24": "2ikzx8HfehSQfKTkZ6YeswuHNfQQq7d4S5pRUdEKVWRFjwqzjux6iyHDsZXqDpnTeKySmP7Ugk96HBTP2z2iRx8e",
  "key25": "2PXFqoqWQZFkdaEJVm4C3Mu6juA5J4sg3NUvc3MCtzPH5Kqosiz8SGiGoXNcYSMAtEEbw7ddp9RuSbtMxa1WB5Va",
  "key26": "2pCYerk1TwYUrx7vfATkEL6FvEuNfaUK2zLTNSBgU6gw6dDiKVPKAWXtvr6YM8xVvFhroLn31gnQVe1XHJUDTCVX",
  "key27": "5TMb16cAs4eqNgxmzdvPdjmCuA24Xbcc569E2Af7RR55r2wdCDdN9HFeLnHXvxjwhakYZtgbwqK1sadvkJcCo1dx",
  "key28": "2n6s4pCRrQTiEuZJJyoUJJ7gA5VXw3AN6yeZAE2NuVWk6gmxeK7vvRgButb9zBh4HmJh1UxuHeRQ3LBrcBjaUBY",
  "key29": "5WU8AEYiUZrMqtTFnpjpKuSnM1JRhjonsAm6FXRkWR7JAEmeyyDCA8fj8yYFECT7viuhLRNQcj27KDPSsouPLN9T",
  "key30": "3mhVRRUnfpWucVoiQw29BHPpVQWjQQzqT9aRBNZtq5jw8pN9eKVtYPyWTMoYyJT5jCi6h1rmB79XgdAMabvSvW7n",
  "key31": "5JiMtEAP3h3mPK9QDJgNwzMeSeSPJqK32MuMtJWgvWp56Bb3jgWBqec7UTHRArLu1kTHwybpi86jfDHXZPFzmdFb",
  "key32": "22vyBUFsPquBvfnq2G7x5UY8BDaYJ7ks1mFvqaWadLVZedRAUPZKJMBdtXGDYvMDzyHKGbf3KgSVpefJXJbQ5a5e",
  "key33": "4hdqgfNXeGh2AnEyobz33Jqsv8iHdYtAF2UX2WAdBP5ddi8p3G2kd8j7EzKE5GbUM5CwQBvkd2RruyupE29kbEYx",
  "key34": "4YDVivjN6u5qvwYarJSdXoYpFmPiuBcUEx41DdP64cxWBPrDHKGCQK7ZAdkVzs3wr2eJjumiG44snjHEqk747Bi1",
  "key35": "5wY63ZNmrTEDG8tcf8cVtNESokLDrsWTy94pbPyyBqhYxbcRnD5krMLJuUy72Qkyc6CUPFeXWyZQetAni8U7LZY8",
  "key36": "5Rgmy8P9qFuR3zqGk11LxaUPZNAS5Y8nYdTgNTTCPw2GebknUj8taJPjFMnJFymdSfYzAGBs9TRCKvjVoi5u94yb",
  "key37": "4botkxqYpf56PhLp238aLRY2oXZUMmvUfog73G7PDCYrdBoNRtZXyHYVrnJTq4u14HrPBrB2wqLWjveeD9AmUMRT",
  "key38": "amUiMFEYuE94SnBF29CVoH9nci8W6CdEw9kPnj3qzZad74E4DHVVQZQf5X3gYNEXEeu9Nz18pDSrGkiqBWWYf31",
  "key39": "5zc95DDYpKngsWbYAWQthr1Ny8vckLJaxsFwzLSj6YfVbXEPnRaafhqB8TfrvrTza1nQgtZ38u2keatoUYGEf4KU",
  "key40": "65QzbXPtnnvaqqwySm3Nw3Z7BtaySnUCp9urEF2tdex85sQFqx7XnYELYrKLLM7C9zBAepkuKKrrKHKyhSbCoGgG",
  "key41": "4jUbTYJ8qWK1d22vs1eDn7yPQdNtvq2UQ7MzfhNgYEhFVD7gWXHkBh4JMpi7T7UkbxzzMgpmRjV59bM3ZZBHHp2k",
  "key42": "5TLgW4h9yLZ2u9Ny3iP7sjTp1viAbBqKdXjYj4oG1KidaZ21Gfyg8f4MpsmzaTNScmYwADvSQFFBkTKWbmWnakdZ"
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
