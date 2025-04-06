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
    "4VTaxLd8ULSdxTV1VqrLiR5eMVbWeuyqBoMHpjhBg2KXjPHZHD3xBPfBLjpGqedZrGyYj9ZDDaY6mBL1KqYb2NFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBcPtMYGcFBfissjhGQdRETQittZrf5pYax2FQb2UQAUat5odbbKGuhPeA1tPFk4QVYFGSn6AsgTgTPwtUYzqmP",
  "key1": "2QLAHTeTka48otA4xL4vYq2ZMLzgKsxsywyPd6o199pkmWKju6vgXMxUyeF7viwtQvVH5jfJbdMPfE6PYEgRi7cu",
  "key2": "3g3j366zG7uZRQZoE31w6H8v8pFSGTR9KYmeNB5duh1PxiDStGnvvs8QNC2nkxtggXoqtqBgpVz2S4sF3f6Md463",
  "key3": "61HEvguy6ksaUK25dwrRDT4vG6pcqeaEQCJeoKzFrEVLcBEMsjGbRXQZnYSkZRLGtVGuNhXJy9ijNZgQxVBCSsyR",
  "key4": "3ba6Mgo7HsBKvvvU9omK7SYQHHk4d5FZwYnZKSf1xpCfgnN1mKYEboB63JgTHhXMhzK9f8TLGNH7K2okWJw34RHA",
  "key5": "3XZvF37HyJAZL6fLw4R4Lygo5zRs7aYcZm53RnawJVzv1XxhjHUuzRGw7r3mXffNVioripvhwRdWxuR6wx5uKQov",
  "key6": "5hd6GYGLRfCXjDNTB7B3Yv8BF3wJVY6JEkUkMHyn76b6bHT5wQyP4mr66icWdRCKLkavPaqSV2xE8voq5z7aFcdi",
  "key7": "5P9qCoCx6WuzyKQoBTtW9Avz3hzdj47mJmwPiQs3mjnruWcXD12VejMAcTXVtKgbquzg96aMbJrfj3CosAC4kevb",
  "key8": "8i9TCP3TVGn9dpg1CLKTbitSueQwNF7ZWnVtGxbH4GvCHpepCPNjNkLnxr4tQ3iEzrRu4iiei4UzsRw6ubKV9J4",
  "key9": "4SDHri9rMxXGktpVXkDnjzRhGY2XgFwWZJbgPYzuCN5RLiENhkUmuaAoRJuFvpuoWTeXxLZMWDrf4Kq8WkTAHFDK",
  "key10": "4vbpZLRKsR8vghYS1RMqrK5DnhhpaWpdyQb54z98Y4yD613Tm5dmBput8F9dyuVUcdh4tghs1jerQRnfFHFf49bg",
  "key11": "4cJFWyZjihU7TxtLaUexC47C1DQDXxK1ViFe5Nd6bqh1S738c5xrb7NEAGw4Peh2Yc6wKja179tbNCoh7ysLzMNb",
  "key12": "BaUG3VgVRmtUTNA9rocoPGoiPukknU33ooKDPoioTVVT4DHjwWjHT27LRfYWeQqYn97G7EiKQDf4U2iWwRaeo6B",
  "key13": "5r4ednts4h86cxXyLZAHbg1qU2AK8d2Yv5mHaCYhJmBo9P4iSHKmpVGMfKMqrnPwEQajPZqf5sVkk5QridLfU5nQ",
  "key14": "32PfU9FLJnQACVkrsQ8NURrNNDQZbUyB7ZULo1rTmAZRwhFsetXGPA6KZQC6RXrkkUYVvNXQUh9bRW2UEaYXvaVA",
  "key15": "4Rw1gACPudGXmML7xMRD3N2eFCQUbnXF4Arkea7nRbTixJYocBCdzySs2xucqcN44pNgaEXB6F6GWzu7jrRbKuxU",
  "key16": "5ah3wgNS5Qm1cXFwDSwwAdvwTad6EnD6KXK98JU1Lrud3pFL882fRSSqU3L92xVHWGLFXevBCixRtTo8gkn5NCBr",
  "key17": "2yhFRDUvaSDbedTKJamLW2r2KEgvMZsZa4oAVw4iLYBrhLtg6jhpJNYuSSFocyX3PQu8KprqfTDW3z1fFMT39yxv",
  "key18": "5kAnee49s7XLJuv5ozDpnVPu5XccK5UWD5pG9e1niMTnX6ZJMS7yg3Gmp7XyPqwQzpugW2AcgjEotgFsuCQjcVc4",
  "key19": "2KT61uZ3hEE8JrFrs2nkabZmQjD7ATHuWnmTpsQGJE2cWNKprWwy22wQk58PM4hVzFVsf8Ruq4M7LDic8gVQzGSo",
  "key20": "2N5Q2p6ixutkfPhFpBbTF1sBarZWRFzG3WXogKJMRc3FxMDE8fegzs6r4BQFtjesBfQ4d3iixZyZPUeCvjqKUvHN",
  "key21": "3dBPSiyrriPqvFD3TCUmK9F6cX7VeyxNT1FRdTqRT7CYjPhVfVEqzcHCRjFE1bZcGyexWE4wUggauKwmtwNRDutd",
  "key22": "4XE7UcL3m3LzzrbDM7reL9bahmuoKtJAczoZ3CKBetZmmHbovcKQ5XPqT8m3JQXCCbhdfWgi6Rfqs3DoMA3pQPHV",
  "key23": "2isWq51nsntr3ojGaETaWtXr8HqD94wJzQ2rXKVghJbNRkyWEfPukA95VrSD6Y3ryXskSh6saxW8GJXcxr1e4V7W",
  "key24": "5di2NPJHJGhEnnNZXUUJcpumcw4ZEbkRwkbbWEzGLDqMbbo9zNMevbG9cCMiXbqeu8hnKGTSURi7UVjb9eRk8td",
  "key25": "2YibdpUUSZaCycketFrbC32QH45TEYKXVsBDyZnj2VC2zXVE9iWfPWzsLYxseYJSbHw5uTbvurxUuTfXHhqzrGzd",
  "key26": "3Frrvn52wL69M5up2DzmCqnmWXC5xDYWeEFmc4rivUwFftuGi8ez3b158oVZL6WLfkobvtQPbXsNu4D6vbFHmN1A",
  "key27": "3rngfT6fmSTQUXzBbFqrVo8kUoGvhRHw4Vev7pJkKyPa8YWbRPD6bhbEJcq7V6PmauAoLsfpJaVQtPmnU6kVryjA",
  "key28": "44RXD3HTHZnwroYnFohXMttHq8WaXYA4YvPCRC2QuYoT3mWpxdz1B1PPPrwcYQ7x2WYEAcTvZbfBpnbckT7dW3S7",
  "key29": "3JALMSNC3nRTUtbKxP6wgnakEaeuxcrLtxTk8Tjy5T1KEr1u1tDD1YHpvAGXxR6phiHngWZMptpXVyKfwvrRgePm",
  "key30": "2azTQZwdoDffkXpZSodD2uXqPYbiTjsDEoZHy71hmSNT4pyiNVKUPPWF19hwff8yAA1fxRssk3mkDuZPjXdRgRLC",
  "key31": "2koWVsseULUNWDVuMuyUGsrbNLMuyAVa3YnQah6VbYFCJaeJgcjpvhF5nBY9LPJLbMcsQHo5dE5q3XKdPm4w3nev",
  "key32": "3c84MYRpPsEP2yqyTrcN5k63Ra8gtEuV9qnrw7kwnpgEdoZggzEdMFyC1MFS639XFCo6LNnM8qr8jmLEyWYUf381",
  "key33": "2KzQrXWuhuR33X7TVkvBwd4ycNpyWvccfwwinz87iTYgVhFStx4ZfnupN1WS7sJPhxBUvQQ8mqszHfEiV3LcTVH6",
  "key34": "49DUwRBLKYCtM4QqQsxYjiFAsNVZ5NeMmMxQWqbvPaKm7nnxhnmtb9AUd54Lc6jxT3iaSCj2n7JyZFM2GDtDeqKW",
  "key35": "4mP8PbJdXi2spTjbymoAPPnzJt4dYitEUGbuu8hzfyhCW6yhJDp6M1w2iR2xU7femzHZ2XpdhRd9xaejyBTq9ka3",
  "key36": "R5yD8vPCyJ7YJVYA9H539WTiSSfTFKfsPZYNkD1EKodGzbMx21zGKBNKjG3im5jAbjRsHg2ZVjmJcB4wv8vzDrq",
  "key37": "3BV17mDP2TSxFfZQ6diSndEX3GpjRH3eczabXEF8r8TdNUWT2JHrAMP1Vf26u1bVQ5j7ggvxdnf7G5wXxHSCKZ7D"
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
