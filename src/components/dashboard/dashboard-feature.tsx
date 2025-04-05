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
    "5PjAAvVjnFxnS2re7eNsyueNTnMNLFr19aWUk6Snk2QLYPwph6ZZBHGhhyHmUixXY5ReZ91BNN3Xj2YMZaPFBFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7yAXV6nJHpCEKie8iumDGNSXggz2bn1Rivb5CkS2auHvSb26NhVVCguSc8cAs92MYSGWMJ4U6CGX4rNizdbxGn",
  "key1": "5UUHGsJzTTmnJN8F5txeUtPjeoiK1VjcbnbYAMvtGpe2raDrXyzn39PDe6gmJ6jxcfhe5mzZS1HxEBteqtrqhxds",
  "key2": "4i7RDoQVZarsYuN6Ni26XtMKuE2fNoSirEJDK28sqBDJfZk7MT4etyQr6DzsDRfip1wfbfLVzUWwwtcRmrNBYPAx",
  "key3": "3iDvTxKfeNU2LkaGyfB6v1Qab51VPKpYhbbGKFeETdPpBWtLiVELg89C12FD9Xz8Z4dSUWwMNj2bA6HtkdmsGjrx",
  "key4": "55BQ96aFLyo12h9NGJU5WT1fC5SwoBmnRvWZMhKUncXRTFBMtVD1qFcLUyaoxP55nEkHZeMWvfCHPAQ5XZyQgW4Y",
  "key5": "5fvAxzB98RWBLyJMvKDh5WSz5sxpZm1yNnK6jwHWPGTh3Lk7KUBhXVwWNkd8DCyBKT19dgEb8aPpYCCjeh3unxtx",
  "key6": "2FjoEiTrwnZ6Yn5m8HhoEh2BxxbDMvPsFc9f7fypXWLzpN8aUiEY35tYHRAi3HFS54bKYBBVxYYA4zaAhGqa9Wht",
  "key7": "2xsbNEcSwcFpFhwKv5t21qUPxVncJz3TcM9qEjAYtK7oXkVnoTaBg2CJPCagkkdFzMu5zox37JgwAazWHGSoSsiL",
  "key8": "S1QTGuMzN2WvgjfVbs7KfvLZFg8nxLdQXnrzyhJdWDsjo2HM2SG9esCsveNk9URaw8qPytTZuHnmwtuPc9oSGmh",
  "key9": "2U9myMUL5gTN1qAgFtoMqN6ZqRd4Crv2igkMmDjXnCAJzchgDHWGTFZbdAiKEtKonwivneRrvHNwmfRxikoo5hqs",
  "key10": "4L24sxiaDrotG5dNKsHbgYXvzV97dWXzQyD6FJWoRtEpaTq6cYq9rqULdD5Woc9Frg8JsRy227mty3gP8m3T7E1n",
  "key11": "5Z8jocP6jXn76keUcLnwQ1bNWeZLjyp3gfLHCpNanVCVWRVSyhMykgVbC5hmvTw6ch5D9VmXARZG4tu7zNDXLWL9",
  "key12": "2xt2xZeckdAAMPQNctkpAuQsEX9zjvym5gGxQg2Ph8Ld8Rjp1GKdUDq8s3M2fnSC9Qa6FbWSZoPh4kVz3pNPmD9F",
  "key13": "5zKWWDoj1JNV8pgAKHEzjawSJHMVy3EHxR8eTKeRwpiqtiFYLwk8Tmu8vYAoNmXQNvGBiBJWNyttUTinFce3DQbE",
  "key14": "2YYpH32U8ejVAXTuus5JubdDkMHMJQgc7v9XBF2Bjx7EK8puKXinjm55EWeUNamG2PTSX7kSVEaQAWuifdkAiBJF",
  "key15": "5bBZAXd91K4erCCR2y6M1brf1LdtRFp4aLZUywcqXMf8zfg5pbaqWzi5c4DfFTxrL4kKHpA2tVdcqWC6UJmCvTwB",
  "key16": "4vrKdvAVTpSxpqU1nLKuor3gynxedwpShrNnav732jZhSwZxUt2pX8QSTocpXBfoRhhYJZo4JGyDMPWXsGuFETkW",
  "key17": "52ynt7p76w4Cir5vF7uP4HZSJZUjbp3c88zZtLjXKiz4hzenKBFfVNpU6RW7jB6vTnCh9s8mD6Tuiq775CvPdsnw",
  "key18": "42bUpbJVTheSydEeop75VPMYdGSPUKuRvKnri1Dfd8qK6ijBVsrVGibF87mjT4myNpXA5kJTvJW5izAJf7okUR5J",
  "key19": "4ADfweDGiRDKYVE37n8tXT77PvjQgQc1nLnFJ4o7KTjv8N2YxNuynLDsEcFEhVt48XERmvkN5n8X1SzMAksqVVUG",
  "key20": "4bkV3qh9tq5HCSh8C5zkr8iHABxzHieGPeKn39VDVtA6j7NT47C2L9bomKCGy9ss7r6vnNkdBFBHFVRqkizHXFq4",
  "key21": "4Hfzt3rUMLG6kcxJYQjfL8XTwHBHb1Ssrs9KqTtaUvCr5Troe926kbvW87rJgQ5qF9DhwGMQ9rEPc9Jt5BvGCXsB",
  "key22": "rYgudfpaCmBQSEaq54WLaatRv5FNo3m3urrufCekiJ8sgMNtmFnRGg9Pe7Upu7gRmVgWSqYPNZDP5826fAe6FLF",
  "key23": "2ntMaSBFWwt1cX2SsP8eBEdh431T2pDUKiFMuaAGzFGUvHwZqV2YsiUuk2aC4pwabq9BAyiaFyjPoMXMNToGZTVK",
  "key24": "3A1eCupLdJU2QucDxJFgDrKfzrm9zN9By3QFytT33SWJLGM6EfKQvobv7C3TvQEcRGoWxo9Rkgmhca4fiUKwhxXh",
  "key25": "2EnBydxEjFVzBtaxtGc7DX7bqr5zKAV6r9t8HxWtpt5HoDv9t4bLsd6qXX6sjhAgQYguGHCDLh3VbtHxVyo9U98X",
  "key26": "2PaZTtYtNdGAUEHdjVhc74MNcJkwxRKa7d4c8Fuz4EHdJnPwWXoDA8DhQ1g5S4Pa6KQW9NJ5pirYWRuhEpehu7Ve",
  "key27": "2eEixAZS6iCrCLpLBFrqDXY9MXtycSZjTb6nmTA3oGeiQNcrVvpp4U35pf5DwZci3YbSAZLrN9o7JwfEuiBNey31",
  "key28": "4Pi7DqSCLq6fJndaYVa3zrqf6AFwp1BeAjPkBmtNiitqrDWXuCn9j1fZr3wGoKZiZtjzZR4vD62VeMAk659AMSBC",
  "key29": "2eKdqowVk8nhGWi7iiUcwXCnKFZaDj7EyEn6W4ZZiUsGzGJEnmC8ZoryHXiZjSKN7JHtzKQo8YVxLBpyd6EkXetW",
  "key30": "41N3JEea2krqY3rbhBhGpzp4w9JKQ2V4Uczb3Xjf3pbX2iFW1aa1U4hYEJJZeaJ3gktw6G8JL9xVpWL2jq12wS9T",
  "key31": "2XaZ2S1ZT1nRspTVhireYVjqeyEKeGEm3n5UexWmaquw62y3avnXh4uUcZxSUddk6rp3RQpFtNNLqPbY76ioP8bs",
  "key32": "5ZJD6McB8fJToATXsHc7N3Qz5ekZGcDhdwbjnfy8uECro1PxJvBkHD8YjVwGqkVHYyYZ2ckiDMN6dXykUkGqRfuE",
  "key33": "6HGafqE2mAKyYxoKt3Cr1Bb88zabxs1KcBVQtQfd49zEufYgXphrEF7UwrRt62fKYmPNDVNMEQ4DdqVAZxrCThB",
  "key34": "4SC6CEsXarVeWbjtfUkB37ZZiqdh1AWXGBuM7VvWGvUD8DheFwY6KLd7EbF4TcSKnsqSACKz4srPsDASfSzy97ML"
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
