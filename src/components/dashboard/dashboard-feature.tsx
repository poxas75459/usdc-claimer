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
    "4mMJBC2WR23EEBz2Z8c381PSayPrYqwyqoULWE6v82JbvYyHAZstfXNAer2TEyaihgdtArM2X5LFF3YgMdyGdhXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VoD2WUnAX3AhtrdSnWm3uWYrtwEwRXNZ4StS48eYzjtUGrFAgd2GEryWAhY88uw6K64yQ1e2XFR8JF6mDxn3GTP",
  "key1": "2ZuqWizVE16SJuj65hTdvjGWVBaTRQYK7qFrJFMtgnAATRhFggK5N1A2o6am2ns7hDedrnbU5CFkAb3WhavcN1Rm",
  "key2": "B2UpwqAqVB9uWGEVfJTnsugQSArEhA6T7FvzxLUdYP8LAxxX2tNyn55FJirAeahxvZU4f93oGM1LVbZiVuA4oZ8",
  "key3": "ApyzvjN6N4kTc6sCUoXDp4mATfyAgdX4dVFTGECxoA4LQbN1hHMjZk6acauedgZXhvN7APmHQeaGZAC1jy5rc4A",
  "key4": "2ydCQXErYu7AY5YHJKR3VegjJt2g6dNPZtEoTBYuFSuXZ6rCRyNp2qCqBbwzJ4LhW7juQEXHPgAJ19Gr8svjbkzj",
  "key5": "3LJXRaXTpWsTapKdTvCBGibJACLcDJRrERoLCnsDPAfMzs4yg4YTPGYeQ5zu4t1Jh8H1DRdNYwS4wK2GBVBiW74o",
  "key6": "5F7bbn9rt749aB6tSeKwuzTh7wgk1bWPNR1ty3gAmxSd5Mip7UCVNF3dkRFbXT1gjV2YfGhLSEaKSrCaUa16eWwB",
  "key7": "45nfFg3isEXLU4dwoVYRZUP8SKPz6GbGDzScfhkWzqDhttbeJRVjYTCqrXCnb8C8y2XRYW81SzJeXrDN1WRpSZn8",
  "key8": "4TpM4Zp7HAwjVwMN2uaPVo9W6xGJ4v31XsB8neqgS4RRd81Hb1HstjsfxssT3EDE6GY3rkUghyDUXVsEAdfc1tT9",
  "key9": "5qKpWUsSCdrPKxr5ePQ38oJar6rmzgcYMBEbxnqXnp4XXHcY2BKKR1kU5Fbt9SNsamSQo9avLv5fESJFzWvsETEa",
  "key10": "279kJRw6NYDB6NUfu3NgpS3WYr15wPBm3E55eBsow9FUBzeNDJZG9gTBCj41Ur5NpK2Hxb6Uq4akuY9R4Y53Jodh",
  "key11": "5tuSMo5X5pnhnFd2QC9caUhSKH3f6zE6cLWYF271KxA8wZMQNDFo3YJEs4zdUm2eSRURTzovJ4kDfLYk3p83pChp",
  "key12": "595U9neHY7H2xQ8rQQdFuvLqa52f2Smb9pAbaF6YbVSuLJqHXhJ2U7jYi767KvqyzGenp3SFJCBqiPwgmdK8MbTz",
  "key13": "3qxcAUmntSpV1uj3KVKiP9H5yKa6nmeMWSwHP3XLNWfshhSAApLiWrFKv9ULgU52grCJVYpF1eJ9LcyyQwtZjL92",
  "key14": "5Yuoc61rfQNRh8Fb5w6gsa3Z1r1QC1aCvrAz7GNoGY85wJTsXusQTWJT8X7jHqx3JUeZsioYBfRrbJNyieWmKcF3",
  "key15": "2FBp87HK9qvhq4r3DceEjBbM3ckx5VtjbC39YK5aZWoh9y6ukNPmwPMn7uCsq5KpdCuuqGDQZ62FDGeueAKjdBfz",
  "key16": "5yZRZryAtuBQ1gK4RHKQ93eLB7B5moJ63dNMGcmGDzABDoYdWTRXPvBz7CarQ4yfD6oZ93RGbEPY3qQ6XGZGVFNR",
  "key17": "3X3vypHHbBGSHrj6xGRUNEHVGvuei9tEzMaaGhQVzvFTZZDPxEguj8iGaKbV5LSVzT9YrDAjf5X1uQY5TceyeLuS",
  "key18": "3Nhd14dgqBisnBKr6V9ikssYD3zYaYC95HeX3iFx4S6HR7FYvJ3aUWAZdBMUzBDE3XQESbxxSRMzg64XkAJSrEon",
  "key19": "3Tq48n38M8jNJwtLc2JzzQdA5tkipSDofmwEJniad5dfQ6mkDVvQG5Xb4rZXg6qsSFJcAaRRUrAxJbsjJ6Ha2Qd3",
  "key20": "467jfPDiQtm1JRz9RbC73qvQAVmEG2rBkdTcTPkEzSWpQ3AxiMANgvewDCoEpD6C8r81vuPQn5JBGmCmBkrHxEPe",
  "key21": "RC5fEY9eVsDpGvRJEiBrWsATNPnN7EaVSX28cDxDnGADzwwf74Di5Xr5E2wHWwysQrP9Vu32uJWaVw8fVtwdoAK",
  "key22": "2d9zfGWztpqWLbzEiPp8fiCHFcqRRSPRvZWC1wd5cjZ7HnSKqYJSLURZnp6wyc4gQcpwQtiR4E7kSnoZjwRcgTMn",
  "key23": "DArosxChh1rTcHcCWM7G6ux8kxdGFQBBDSUrF8qGWgaLZA7VgJpDgatbStmLLJjX2HCHKQojP685vzconFuLXm4",
  "key24": "5JYpdCvk2mGU4gWLk1dAD8CgeJvLxauKja2GxwLvJzTT8PtK3ZBSF4Y6oCDqVTsyXLYUSJVgQbZC7xWiuvKDz8s2",
  "key25": "6PNhuQW4VpR2jE67Y5RdjQ2UMVVAt5q2DoqvQ4CvshVB1sPYx4bXUw7ZP5H39UhdhNp1JXBL4C8U8Qs5z67CcVT",
  "key26": "B7LfyEDiq7aW5vS3NU6mnx52wBG5xBJry8BEHHs4MmhC28cxEN4tPJ3kHjrTzccWt5ACuWamS5dvcU6mPuwoA53",
  "key27": "5JdzkVt6saU7AQfwk6g4zoYmV9PvD8xjhzamgJ4mFrRr4xbMfYNTrQugpS9fTu1HLkbVnm8inGZ44NeF3xTSyeq3",
  "key28": "5QdDFsobaCSJHBgKBgFCH9LT9DUde3NH49LE8whVDx8nu6KfRPv1z5hjejdr8GLeb6yAt6tzfsonxDtVB9xdbUiE",
  "key29": "4z7kQ4eiX1kTPxuZ6GKwSEXLQH8rcw7SF3zgi4ttdEreUapKXx4UYg1DeFw7ikdzNXGJr6cJhsWQYyP9hKFjuMVe",
  "key30": "5R8r17ji183LyqF7MHDvs7nDNfR2dDwbrHbGrctGLypPjh4xfRn5KVg21pquStMrGhKt486YVR7Z44uBbph75vtc",
  "key31": "26AxtyChykajvR3Qifb1zGd6QRZYESsbghh9J4iJuzPwUYp2KRTnbUqcBZqTbsjDYjgQe2beX3M828ePgmro2pMa",
  "key32": "vHXsvwU9HFgwP9TRNAhZKk2YtGF7DrGBjd4p9RExzijmVKKVwG4q631y1HYu1EwFgaNswB4pBwENLawarYowk5x"
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
