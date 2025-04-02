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
    "mWCmVgfiCMGBVranpVx8WbzJFE9SiK4fWYqiN8F6UjcV59umattGuk5WG5UzzZh2XWo5R9aEKShzquCpVMd3py8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32b78RqikPiBGjtp5Te1sLk22amEpc2Hvwva8Sqtu6u8MCkDGViNxgbX5iUa4jauWCauetSZeQpNxe8BEmLVRUsf",
  "key1": "4KGA4WdnhxLGX2wp5HjZRntMeGd77TzrJkRxSa8p2VDr9zDC5Tqe9s893xyabdgdSftkkZFnAXUeQqzfdE7mQQK5",
  "key2": "3Vw5hwNDcRnX4vB8fD4M3D8trHjtwheyboX6swe4DSqr49wu4aL8MhtnxVYhxPqeNC8Cy4CHxXzbUg2hsM1zJVYG",
  "key3": "aE77UxRMRinQTnFGwBgQuRX1gYzUnUXs6EzvPmjSKszB6bguHAqwX8kLfCSbBHxPJJ9WfbhRrg9iSgHxH6zDVpm",
  "key4": "4Y6SpEg2kmNPMWbVHSZViy9begvJsis4HfchbZrVgsgwR3eQbN3Xu4XmTNXq5SR5DkbZzMDryMjQM3JPkYDQmjRR",
  "key5": "3jF1DWnzV1dePQAFLuD1SzNjSRNMmrMmeQvVBmqdoFjVrdhhEJ9wTBYZGWQpCRmj96A1gG1FbQzWmjdZeUNvWHHa",
  "key6": "341VRnLTLMwUXMFKX2o3haBEYyGz7nu6PNdRdVL7pzNa5KXhsnoCfc1yf5uc8CNZZfQ6ub1jWYcdx1ASuZjnQ9z5",
  "key7": "nWVRPmrFWoRfy7ByQ1KoDhgEot8rkgBsdKidvrkbJKDyfBTtog4TQ7YzJmeKKrLRKwCLsDyVEFzYqKpHeJ7Lzpp",
  "key8": "5gik7YwypYcWGBgRHqdUqGSTDokuQY4fwXoADQcgyEuEK8dCtCG3sQpESRqHZoDNcFJGYmXu2t4zzigh8hUCtbwx",
  "key9": "5wSUgb3DuJEWGy95WDfwN7hrHApuHMsrryBYaXcKfJveYns6n8nVDzUi6kmA2TWzzHZEcoYcSEg61syujEnGABGa",
  "key10": "wuaBjiDdxvfs48GayG133AZQ3y5LXwTvNoJrTS8Qd3BkzeZof4mDjrGzWTt5NYySocN4Lazs3p5jQ3vtzyZYKun",
  "key11": "62UwMT4zHLZQXJffzPd5Bp9M8x95CYyQNjaZS2aCvPWLyo21PYT3t3MsZY6gSa85nYNZccg3nkqBfkhbWePy5m61",
  "key12": "4UJWzLzRnhzJRqdpEdCy5ZHPaXE9PgLSaeuPoZGd6Qknvbwe6xsjjw8tXp42r3PviZBSbSdqQGz8PVvTWcuZJHXU",
  "key13": "2hEJavXUiD96bb2GwRb5xmMyWz8r5RwLad7b8bBSYF5x4egCCf2hAupC12BXQf5d2YXzAbstP9sxLFtRJDLiarr4",
  "key14": "4mh5DedQ8eLXNn2ngStP5UsdcYN614uwL3rzzNL4dHwTBzZgTWCnC45HtdvLUM7VShJYKaTydJwCVpSLz5yqPRfv",
  "key15": "213azw9RkXEezzaqQqywZMSX1TkSVgxJdcDa2Z4g4mUhqV8HDeNFMhz7iE6R7pQ6yMEqN2nTU2RBxuUUPAVtSYfK",
  "key16": "4YMAq3SkdLS4HKLyfV3c5kFSHznpTB9dcbtzHaQbAwAD1t9PUM4yuscDD4h3ySCTSLUDhCQMfWc1Equ2vgd8Ykym",
  "key17": "26K9zxKJ751XyMLioVEtyCb3EWNguAmBCjfxFbQsDLSmQQbLxQk3nZRqdy5D1fTWbpRxGPcAEhUJtaM3qouKdYs8",
  "key18": "3LCZnbAzpmGFxngcXa4WGxSdxUkYzhSnKrUYKDEefijvZXPn8pGSHGnZFzJNc2zA9GVtugfbmLNiFe36LMqf9EHH",
  "key19": "4psgmh6K2nJsunLBTs5Zs7fy1hGjsERdztKSpKMxnBQKVdfc833D4eaomCBVewmuQGiYoQEKJ4s6iZZ6uXemUCx6",
  "key20": "4hMDoHsYFLwnek4KzjydTdmhrrhbHbyUisQYHmBnHKr1C1idniDZmwJfSP7GSSUSa4BVW7yewaCW52zQKc4A3uDL",
  "key21": "9mtiYdiu83CmkrwD3DLHx1w2FrcLZXcQW8s3Qh4jGy2vyobzu33Ewq6fq48EXYgX8UR551CLhLCSbhmeLgQiJF5",
  "key22": "5WjNSjbTqTXq9294keyaL6QpCzweZHTZHLNMf6WnTeGxgTpGodi8EaPjVs8oMfQMAN1sdjNB783uUXrj2CFH1TVe",
  "key23": "5qAB8qLgLyd9uokCJEtcYxVCf9YiboqN4LfH12jktUfAa35KgpFf8pWMeV6GZqwvuu7G1hv8nrzNfkv8wbFy4msH",
  "key24": "4jrWiFitS1Fh81JWtgQA7Tt8mBjt11XqhMJj6sKgkSCpcMuaKUcZghPP6rEpDvaPd3ueJtaZgGFqigUsxfGX4C1n",
  "key25": "5CKiGybcBYFcCzXfjyiF1E6vRj6anEhHoAMgjAtLYhoqbiNvJzBELhCu9rkcSgQQMcm1Gb9guiKMsKMaJ98ANZGR",
  "key26": "48qrasraaaAQ43RGhZck5j6hCUYLDFUkJk36fMexKze1KVtUHk9Z3mBy4xTDbEWQ8CeD2J9qXme1eHaF8iM5D8ew",
  "key27": "2kCSKJFdhL6oeBU233LxBNL9QoKE7rxU56Nonrat2dbsJFX915Eg2AFHFo4BEeid2yDMD33LcQuprZZ7XmR4WKZ9",
  "key28": "3ifQmVgfNxX2gvNLsTe4Sum4mjzRHxGSQeQPCg2muXWusNLhRxTcob2tLkQYPiH6xbxjZy3FKNrTE1QM2UbnhUVG",
  "key29": "22sheVdTAYDv1rFxwkixoM1bTKXMxL9YvYfV38anFpyCyYRWD9XxzNgXq3utHcCboEpgaLUGWE1do2YjuGzVk1nb",
  "key30": "5HushkicL114U5F4CSUW281BvHwJsN2qVtdUYPbzT8hZX47G2Cmj7CDpS5k3wnLxy4HyE1V8wkTDm6qx31bpVnMr",
  "key31": "4A2N5mbv7CW7pTVAj86ToZEiMUv6biD6Y8b9FA5c75hDPV7cX1qpcQdq8hAx6HPrr6gG4CoCWqrmbLAjoTHbs7zd",
  "key32": "2uwfoyZZZDwW76RaGSZESWPVs49cLDEYaNZiVoyYP9eaPoeS1h4MgFeKYad1S6AXAvxxgPQT1pUbdodUqmZwuSHE",
  "key33": "2tF7RZj3rGMruNQfNNPpsiByPTDcx7zkrUyuDS1S36VRk6uuJbNxcWn2z6soQSJk8yWWgM3EfUksQc7RYTtQJ6rv",
  "key34": "RpgJEGNhpunNcTjeZuijh2mxGZWduSpkBNQAZhzn8SDeAfkV3Hz8UdbCGE3iR61owUthCJ7Rt9VJR42q1DsuUzy",
  "key35": "3JpMdVekoAdjUmgRxShEjLyEGMk8ioySn8P4UhFmLBFqTsJZKdyWETTraHxahC7vC7B7hmcxpCcmWYUDoDD2pGWx",
  "key36": "5Hs2GpKmGAMsudSZmhRWAyEUzFQSE21xYBTMMVgExfkBoYE9uMGo8RFLJnUKJ3cMwHoK3zHLChrzwYTF5WC1JULi",
  "key37": "5TZhXK61R12XfjDVwSSVfhphtamvBnSaZgaCYQFhVAF3fTf4fEXfRr7rzpLSAACdv8QZjKzh5y9rEcrRwAuSdmQg",
  "key38": "56rSsV59fmoJgoPRPviSWi3b2eFiHoaYwYNiNzPVkoK9teKKYde3aBnypJegimR7HBNk7LQsZLtQXDCKVRUFyDph",
  "key39": "63F7fysbB9JEHymdqLT32RytYfBSKvGDJbGjsxmdWJTNWeKxVmWiFxN4mLGSHSuGQnE7nznDuLrzjckrhVm5uX9Q"
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
