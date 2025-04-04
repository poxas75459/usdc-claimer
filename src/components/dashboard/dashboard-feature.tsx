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
    "2qTdyegeKLnXCyNasHVy8XZXXxhwFBQXSTQkQZwFjW9kyj2jNVai83FaTkMK6j7euU9uHzXtfbMppKC6dbrPZLvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wF1fVkYNFVxQ325HaeWTLDqGAF6iiPRVPMbtd4gbx5eYyDxiTWPPHgjrsDkxHq6VFXkVNoqAFBEapPATFz1p4R",
  "key1": "5WnTtzaFVFELrrdEKowXZuGfzQ5BNt444ZVYJsNLK3jkNkRU7UFqswuceaXkAq3bxDNLb9f4kp4AW8qKq2r2KjFg",
  "key2": "5jaVyB7VXBrGUmtTLwnYDmVyfrEwdAtvmhYaJ8yJhwBsbD4mZiVNaTLVw1P9CKeJREY1PhomRwNHaJGXozDVLkGu",
  "key3": "3GGpDhuuLuicrPyGzxDo2oPsi1Q5Z71muRdA9c8JhsEJ7NyeqWkt7AZEwXqaCaPYMUiQ3ioBs4K2McJXK8BRKe4k",
  "key4": "3daapjENfZpdbbKWJXLo2RoRH13A3M9ktKjyKGJrGjjZQNkTfiagkw7NhX7QEzp6faEjGreMDwqTw6DeN5Kacf7z",
  "key5": "26FBc8Hn52XnFRsyfuM1MC2w7kcbxmLxVNnczgeV3gxkkVdAo65VjQCSWRPtxiY7NJfKM3q6LeM6TKyRBXWQf75z",
  "key6": "4VDir8QR6Ur9w1gLTkSrsdPPiSxcrrRaYhyedWeexdjryc3h6JgMvkYgs8rFpQ8LNKRX4ohn3ytPT7KvcXZn45Bt",
  "key7": "hmGHDhzuGtPq951fLr58C8LeBgW9P9a4y5nP8JnczgH3boEKUrkrXAH1xSsfkszFkjwo8TU33hvbziYyEVBC1PB",
  "key8": "5ZLXjcwAYecpGwj4CWtv4YtZ9eykbDR8pkaBwMwaBX6H4PwTUtkgjuxYqsBiKtk9eXmWmGG8AeCQWYa9UzsN1pfE",
  "key9": "2xN9kYCYSkmrJF6YtJqmsA8YXcSuBFaM9oXjkP7fdBd5iZVvFprvqiqqJx2KCynertHzW5HwZoCpNPf5RjbfSxGB",
  "key10": "vpcELDN1ARnDm9pk5irvFpeTiAxmz5fRcS2Bqbe6gTPbsTpcYb9Qu3jStyNCduiZ8PQXcDvoSHtgkaKhm95uQrb",
  "key11": "4kSSht4z1FDzM41xQPqrY5vJm4Z4X9jeKxDqB7JYmFvFp8mxPnSVSzDEqLdh7Ldo6uHS9ErN4wfFGsLRjdZZrYyh",
  "key12": "4HNTV9eyKueoco7tMcaQdXef4m65zmwRCcU3GxJcPfCZ2kgH4QBkMDUJ86hxfs8YUWdhVArBfBJN9VCdHNjsk2h6",
  "key13": "tZiX5xPbLGktMyAx3sgf2aR4ob35CJzLGfXGZ7cYH4iF5WSbcnknGDXR2sRNdZ8h8aypAgUe3xkrhyvzyGVPFiD",
  "key14": "3iQPYoUYaLVJTVsZmtwHLG7SX1ZsX5nfCsXYboQFAbopj8HWcCzj7A9s251F3Pt9wgqobURLYj9BEsYJRdJhqAuR",
  "key15": "2tZL2yE1Sfud1UKUnwpA86FUdJQZ5NhEKGCBNZKYx3XMoQY35VHPpEN4yyS3uHdLnfucSJJKvhXaB7d9t3v1mGqv",
  "key16": "36aJtG5k6X2ZbWY5Jiz54wex9t9kDJ1rKk54jqWKjxeR6pcuoXEVkoi5yiPYHZCTb7Acub6vDENG8BSKFDsPgtSu",
  "key17": "hSXzcry42EWWCCBXfnt8PNSctLrQhdbAGMWdzQXDvyuShbCCCnt5G4HXt41Rx6CdxgNHZjU8eExsqHWuyZSFYGk",
  "key18": "5z29NR757tTAw9fxQg3U1bnkMpEBL68BATk6jzjb9qnEAgZsaN5J1UbznBA4tZn8qqVT7qhU3mB7hj6cn8wGqi1R",
  "key19": "2FT6c3UETkEdLpiu4citkWt5Kzvhsx81XdukrR4eacbKVzDcKfeunyhyUmeG4NHrV1SqYhvFiR4D419GcuS3kpwJ",
  "key20": "QFsq7u3dkAzqMmuken249apo5UWyKX5UZ699xd38V7UhUsJSS3g9o6FJVCwCx63xyzjWW8KsdQffg7ZLdTZHkhG",
  "key21": "46LP849qwDfAsSJfLgq7BMaE1wfp5yZyM4ViQaCqcn1GvLnDnjqxfGpbdYuwu5fGEo583u4H3PrJYhJArVDcx2JU",
  "key22": "3iZsZojuTaUu8jCRCxkKHN4i3pYf6Sw1AxAWX8mCEQ4bmqzUvqKDT5b28ZYvUiaXf1QjGaUNJgSFBQ5MPfqBNig6",
  "key23": "cVgY2Z3Swe4NnC9AUQCfJyJjHdwyy6ty4zSw2rz5GW9qW7LSQdBJd18n62Gw25efCKo9dzR78g6tsFp1e8jREQe",
  "key24": "2Go58SXA4TDhV3HV13vV8cbqYUwDh3bbeAvhATmq3a1H1vwXxS2N7hMXBiscYHttryDiKv9paJLwgZz55fJW286U",
  "key25": "NoV11fHtK6QjcYUjrMjfzcysXbcLALoNJJEfgwxL1gUVSxEWXPm2PBt2FQn56nMVLGJ2nksnsoQWJtXxKxcFDr5",
  "key26": "5jnhJg1LRQ9W3QE81av51CCeGi9Xnp7QgxXdjaTYc5y4TJMdE9Uaz4xeWT3ZebykG69tYsAYMjmXxRvx9QMv63t8",
  "key27": "52AE52fx8qW7vdZCidhRdkBSSFTZWyako3Wjff7hf7e4BULvLrihKSxjAAEFhejkheNLeX8AjGVDxkijXXXeRmS2",
  "key28": "sRQYJSieP1A6LPnRq5zZDMLGAucd54Tb4DBxEYPeDNbMSy873KSi9az4cnnUtutgbRoLbuRtL1HdM5haUQZKQKo",
  "key29": "4otCLbET8Z5to3X6SEAMfjXZFnUZvzvihBKUEAih99Akqsd8fcswfmVU3zYivUp9pWmfJi7pjHx8TqqU6vikKgZZ",
  "key30": "2EaJQZDY8KVKsNY4VF4hT2LXTwfhyfJBPCtZRpVRgo45gos4vhzUNdN3bcZ8oBTh7w2VYWL658eKksSPCmeKemYW",
  "key31": "35SuJAKBzWMFStAtqaTJAEw61xJ4vqGheF6WwGWqdQQYPpGZBx4ckwFrqw4kMMBbhZDLcDCzV2DNfR2kHy6fEJL2",
  "key32": "4YRbzSE6ru7aGVGGVS8wxnpfJqMfSSMgah452J9Mtvh5WbakqiuCZwiUfzW5gokgC6iqZXKvEM8MHoPzH6QLFR1f",
  "key33": "2kWRNXNfLxR5ZjhjJhUjz5dLK5RhpPfwpDyqVggFqdRDdf7wKgF4TfYs5gdmjQJcJhvZRL5taqeETYMCzJ7V2CVZ",
  "key34": "4kbwVHFyvNn6chUMYvLeZVoQsVaFJdX4UJFm4C92TNjXnuSp8jdS6KdNeK5hCCENXNEMAJg3zWdL6s9ziA8cGXZq",
  "key35": "tokTtYaTxDMZDsjun6N2MiYmBXc8KrqSxYGcaYUWBrpJcXDpCWmDJsNrmHmQYQ1sH35DH7bYhH3z8nuKbj2jQ7e",
  "key36": "62q4awQjPwYC68tU6SQ7Yf4ZQYs57iwT4iwRQTkZBWExBMim5JsjDCykyFhq1doi9eG6YiiZ5MhKiEYe8cKaZfk5",
  "key37": "32oiBo5FmqU78cw3usKShehWKuhCpXQewQFvM5SPTDXjHshpi5K9QACuHozBxysvRuLJH5y3h9iFRW2CpefwqiBj",
  "key38": "26SVCvfGxuTBrqFHhoZyF3fcXck353XDuDgMgfwctYr7ymrZRDUXwCEcYGQMrxzn9spSAzU8bH1Hr8mMKVcHWnzE",
  "key39": "2GKCX9qmwvE3bvC8X2sbeLCHQH635b6XtRN2Bp5Y1rX6JBhJvZKykCqpKyd9vxtsDjmTSoHvK5v6CTzZ1dauf35R",
  "key40": "5A29HiiZgL2XPaMnPcTdFoqCFV8sTHqXGzM5G5x2n8qiWY1rPdBdbhi2JbNyrf8rYdc14GaBN4So97TsJ3rtU6t6",
  "key41": "2gVPeokoan7Barc3KAtwHCU2yyU4GT8uJuT8us5ouKh88Ws6hGs4XnUizeR1UgUQYDq8NTj4CdYE1WgzUcZKtqQ7",
  "key42": "3TUKX3XBTnviEzG82BJvhtTFgZaXsjEZMrSDaiEqfv17vASzW1gRqdNzTBds7fwMJGrfLecVLP7E6w8mjjnfjtQW",
  "key43": "3SoYk4WALdCE1W4htfoDBPmDbd3o21FQv6xQ1qdDPnmXQVUaDhtDrmr5gkDq531k5ioX9gQCEpmyD6nG9oExsxtQ",
  "key44": "5dai6Vvr4E7UQ8MUwGEb4Z9nNrS6cP7QaF9G6FxGVaWj8YUQ68FVjk4dcDcM2wondao3j1f2Cw5pVe29zrKoqp3K",
  "key45": "Divg2qFDZJDPwAPTrG6e7kSXqTkg1ECi2LQeN67PH3nJvsUZBpd2bsLgKmUJBsoJiwD1GhDMBk4F9DJKcy8xvZf",
  "key46": "CjT9cpuKG3YRMPouzWBeND2hhoj8dBRBYbg9sM1DCLFwVAEMKA7Qcs4KaBXeX5wmXf2CXXnHAgaLaWJFmCnZssA",
  "key47": "5PphP6ZwmVgp73MmqgFhiKRaRTxcfRWPJBZSUgr9BRqWyk9Liqoh2i5Xp9wib5esTwff4D3xvK9U3zHaKtZAS5Zk"
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
