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
    "2oEyo1wE8XC54aZrdS4w8yWCJ2DFtuYKEEJxw31LTD8UqUctoYh4S5DfttHAzU7FSFBrmoVsDLsVS5AbLs7784rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64iHKDFVJ1SdpCwxqGz53mfU8sQGiNCvv7cdaSXiweE4N2yW9VeQb39o3JkNivvBsPk8AUzwVoKWHjxuFrxnG4nh",
  "key1": "5a7WQPE2dvzY1ASkUHnnfScczayHSbCnNo6hY6K74DcPtUzMAn26KNrtQZkzFFrcgxuXy5n8Wt1EtSghxe8STCLR",
  "key2": "4QxqAq1kivZKXoUHErqWYmwdGAiScaSHDu6Ca5DfQ1fpRkfeXXcxqAqyZYC6TTMT2CZyMPrVq8fcXvUtZG6Gu1xa",
  "key3": "aqC1EjqHEaykN1zhNoTzUMDVU9x6S4E7BBS5JRkuJWYnTxTBPQfc5eM43hEmhAj4BjxhaxSisGmiKmVag7t3okF",
  "key4": "4maWzFFYNoCAsgGBwacam93Mq6krHqsBA72cn2Xf1YH51CMqyUYigxMGCHdnu2ZBbULsF6ZRgzTcqNUJbEmiKjJk",
  "key5": "2iu6Br4hWGuzFTpBdLuQF2mzSDH8B4dUAZyCgZBhDgGNe75BFDkFXYRVtyG313tJdgWbL9jEbse83yi4EZQtGVEx",
  "key6": "2KaXJ89okXsFzLiSdwYFsgRA5iLKfWfJKoNCuZJwQHWimSkNuCMTT9sTi2ErJuWA5MGcGDXR1ph2mRU8GxRthfK",
  "key7": "36PeZ5G8XygXwiBfBdgowaWxMHwtNd6PyK288o4HB6cLa2bkK7mKF4iC6fERj8j4ojzTSa7tYU8wRus7Dn5teyUg",
  "key8": "5NgRGcVr4gwCjP13B4oxoAkp4NNx6FQViJUSKWeS6fzrZSkLdRSksyJz8Na3S2hn1MFUwKY7GqQXMLxCG3apdrEF",
  "key9": "2cY33YVhsTTjoM3wDLeq7B4NGJSUbKuASJiG8ZQFhtGCGNyNeZfzjdGXXpPWGz3yeQ6FcMsWkWTZSJ1tGbLswFZ",
  "key10": "ZnoU6Xp5nDRFU9xicnh7r4ysSweCrZUxTQPDBmyCkWfV3d5N5EHFhYUF9rHn7SRG84hnNyT91YJiAFh78AbzyMw",
  "key11": "5Yrvedhw4QTFULJR15XrDi2B49YoEtNcw49MR1GLNZNDyNP4ZBV2kHpK777YdrabzhSDAFD9twZjPuK4zzAC72EB",
  "key12": "3EZYGmVMcYtUYHTx2GYAwtrMMH4iAFEHSTjMBWSGXhW7ePC8chNSmQJby2Csyd1xY9T9x4xuWYKvt1LL7YRT4Rfo",
  "key13": "5zEr43RaoLJX1uQuRMHhrRGCW4YKrrCiS2T5DoDdhj2cbwJQ4GgfDmGnFECn9USFWFt5Vjy3Ka8dEPL4mVFb4ENT",
  "key14": "4eSuqwxi44jezJgRNHHghNENusYipq3mydF8CuVN1FLzmtRbzAuCUuhg64FkQskzYYr7soPWhLW1AKwDAE9LQJAS",
  "key15": "4viGRFxdZfDGo5GAXDBEP8bAfqXpyEnrDz5cLtnLxs9yQ8NTCTHpyVNmv9rnarSKX2f1UZqUHZsp9iqzZV2eMgZY",
  "key16": "265sQDLyLppdZf1oefwVWtBSFbTjsj7zP9XuCH3CAVLQhfxLCNz1ukSyPZCceGJXDKxYfumphzkPCS7BE7oryD1m",
  "key17": "27b79kMqxRgFmiTwftMjxFSRbhRFj7nS86sK1wDZb3AQL7RjEKRnjgZK5EGzaKzTusyeAihwuaEgGGEDJDz3zMAB",
  "key18": "4ihHwZ9kcSEkBR7JUVtQjtKfkt52renHLizyQtWW3f2cstVyGCd9fuiBY2uKHjNa3iboUqFvgnRQimbnyUDgM7Gf",
  "key19": "3fwZUVwUJjJe4HrBMW7kqzTcVP6JEZ2Xfz3fpfEc45zYdxAjtf6BnGsssCBykCUYsJuqyBFjTmeCN3rXkA1qZkgz",
  "key20": "52Wr4xRP9FNeobYrYJuZcsy79sRLbf2QCikM5WYkCY1yTbwor39mi7NP2GwKBqXGhrsqvCyFaoE2mnuHpSYXn1pw",
  "key21": "5PeVrqX3UrCNU1VzDQnFnTrWrv7Q7WM57zRhUfZvfY2mLQu7JZi54uDN48n43txFqh9bHUVcY5GX5hYxgdWF9SKN",
  "key22": "2cnUu5uQ4o3LRNamWXMaSy2ZFnEHVrajooSCH7AXbroJeJfmDVDapUesb5b9ago357zVZiqkuqPCys5LKJcsJdwt",
  "key23": "tgEAh7nRFJvHXMo4KJQi5cW5HWpuD5HHEEqHMcmcZ6RqvRShXYZz9CXyWESh73oXE4gJ3gYHw6au8QT6DCcLurz",
  "key24": "4spTxQycjhWTMuXDG9HHg2KdrjAyPiTRbr2i2wh9WnPRvGu3WLpNjmJb8bS5CfjjsE1it3BceB1A2NngoTKAx7qL",
  "key25": "2kVjdmKshYocJRMpxHLaC5YWFGMzyneoTYnVNJMdcnzJhtVAtUFkFsWH5G1PxbgiX7bvZNFkrTeD5ymATcapuJgG",
  "key26": "MQhsrGNUBQ8xHNr6XsGV15AJ8id8MwEG5sSEmb5P7eXm6Q1EuzwhD5rRUtJ6KYUcpde8q7eWTq6pMdPVV16z5pN",
  "key27": "5R3SjvsX1zj6cusJDNM5riYLCxwhGjfVkAgCKMyW36eCqvND3V5E1edQMq9cXbSpBupG7UmPfQsQjyiVE6j7GeYk"
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
