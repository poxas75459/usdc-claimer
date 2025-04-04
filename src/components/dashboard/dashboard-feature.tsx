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
    "1pWMJvxSF9TeB8tnY5SnucTZyMT4nAFV7RhiH8HDiGxnwLdFYzV1hbEJkLnUkG3Xj9oHuGxQUTu1aVJGSo4JRW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCDgjKjVYH7bansU7m2pbgo8WSrkeZdNVV7qS6pQPsXHnYVVAAHogduSccf4dDrmJKhgPATuVEs87Yqk73i9XmJ",
  "key1": "2VUQgYezEVDVu71SkWwfkYLW1fn62hoyNToDQQ8fNSkip2HbWbbgpY6nrXzb96zaZu8zH1eqnFdWgHnwz74KAdKE",
  "key2": "4nmcWfdoGTtAd6zBF8cqNjZDcua9B5rpog5wmqDtSGsjb4Tnp9b2aF8PxZx5U92XDSVpdcXncAXF1B5y3WDZNFWR",
  "key3": "4NmwHdAQzK9vkTfyoquZcxuk9ZVDEcJSqFx2LVe6XgRHedvxMxnCxN5PYoSEka3vFqFVJ4g7w4UVTignYj4a45Rd",
  "key4": "3BD5tX7kHPjmtzv6wgwR72Kc2h4Qk1H1KaM943H4AbhYSZ7yT1wBedxG6nS3FYxTSaFMyMbFNWWRCvWNokfhgzF3",
  "key5": "3y2rL6s1uQWnwaidhMhQ27Q6LRqE5degCVAHMcLaHRfY1hotyAoC5YFuJEtH33CdJ5zKJjGZpzjHyaohQYVjWCwy",
  "key6": "VXEaQAiFhLMFrY8qZ7YCPXrSVizqshzZ2webQzCEK4TRCQTFTPqcASV9bxhUBvEH9iAU3p4QCMSFoUqYkqHiBfr",
  "key7": "67WSDmX9j7FiJU4T8NtfqkNCM1jTjoY54t5YXwwgfa52fLJVxhx4WvUP6sb7HVyw4mvN2swRMCfnRYNn31XPvBPh",
  "key8": "3AbGeGVPAFc62bk5VGQbLWGVtgNorBGWZURkmkB9EnfAsvQsTNUU7PtP3qiNmz8Ty5wgbomGx7RNHWZVNCr1f6UP",
  "key9": "5U5hfumoqm4ac9ZiohZab1QUWebx6idV6u2WivTrA6YrniGvgoi53MxAe59xUPnHi7BiFb97DSrZEMX8CbhQXFgr",
  "key10": "5h91xLybyexajrFzysoWFXGGVL2HJDMvyaqbDNvAtv4aiXt3phNDcbvV4za8EwmdUPR8yQB4jvtfQVxGPQjP1XCj",
  "key11": "2BxoK3TKgrPQydJbVPtYeHrn49UmjrUTvLqaQcQeob4Br3NAwrjb6vKn7XwDwwfi3hc5LfCjMCeSn582MG25qoi9",
  "key12": "hTvp6LJzD8vz9HvHF4xAutmKbZnT89CgqLXb61BFMkdJHftq6j8m1Ko9suqtEBPRU4Xh37k4Ac4dsJpQSXWwtHu",
  "key13": "24yUXJeT8JBXpp5JgX1b1s9YmwSDMEXwMVHeY5RYDrz8VNHxq4Ct87LEpGvyzaFHfPNsbgC5G4AdhfF8E1pxiw91",
  "key14": "2nGGvw5q3y9jRTm5LkxLtWEQvYMYwwj3TSic5nqBgW6vNhJNoG2e5RkGChuhHaqZHP9yW68s85ncroB5fsygS4cH",
  "key15": "syxtcYV2AjhZusVBgZyTcbMF5sTEogdJnRb8tscMv8ghhQQT2bscs9vXCL7n3vNnxRuXmsagiNcKjM2MU1hsNa7",
  "key16": "4XZWCJcNaXjUoRoPzyeju6ALbqPAP5yDaWkuWUQNZUYQr7BAhUsyQ1DFcmsY3szUVtGoqTjEhiXbgYmfXMS2E4zS",
  "key17": "4WQdkA3HLaiMwSUKmwGVdUcTwYTUwGTqEsnHXFpS2xANvnJEos8XBrqrtE8v9DK8sVrUVJUDX7bczGz7S5X1dLkE",
  "key18": "3iMnLf1b6cwPt4dgqWjKis1a2mTUJeJx2RngbiBD5HxNvU8qTCWkmom6oqX1raVo6UaPcX81pm4XzsQ7ktu6ktxm",
  "key19": "5LKSFa5aUVmb6ErjPwUUtrAzUd8MmX4QvGVdZzuVUjb8daa4cLq4qp7QwowMok5DCdBRmWGn8RL9uRLSGfaNmdiE",
  "key20": "41KqGo7yZqWPQQBHzx2xLRfhArzsQNSWrVx3xEKW8doqcjd6sg7LN1pf8cpuMc19eonM9sHUCBqQiXH1JA9asYvr",
  "key21": "3PFQkS2kmUr4Fs4wLyrU1wuGg2WncN5Pa4URXsHhJYGxfoKAtnScWNoCSAj99FCVXwKksxturJsQQBNh2A2pheBz",
  "key22": "4Br3ujSA88oU4AbfJAPQJUER1uNaab6p2nPwTtSdwqvfxAZSrFnopkkVhRUrcsD4zGU1yMRLq6Lrh8pmqejNTyoG",
  "key23": "62UPY43PSDETms59aBa2ynLACuhUGBDnY7ZcXyuSpvdS8wmKNjsRfFwfX8vbGadKAEJQJQogwtBcE3jtgaEp3bsk",
  "key24": "23Y4nu1QnN3YTWviMdhuHfFFrhLE6tsYa2Wd9VWPY4BaAnrfwkT4r1jSEu4Rr48AgoEyVwc2xP3Pd46orKXGhEaF",
  "key25": "wFPtiuffcvhHM5wSBUb1b2LtPEWA7g1Q152D1zg3ce2ZjoR3CtGJMP52v8ed27kkBpuiZ4hPqzTyTMzzPdKCJ9Y",
  "key26": "4bwhFzUKh5CPcsJ1YuCaPJcGLWFqnkvf1RaUaKUn4UFyTHsQm13D72mQyBA1p8NTo8oiJeUe3qeCBmHAMNCTtA4o",
  "key27": "45g6CQFyn8wg95wYzS9gcLJVKJ2qoQZMnJMwa1pKqQp1vD4ZqZAsJNKiXwn3tMJ2qFXtkf7VFRfzwMgLYQa9iGUT",
  "key28": "5Pr6quR8v235vQ9MU9ZvGMrZrdGDfBqC2ayKHcLgwyknhk5DvVWavj3t8r7UctMRyG4aSoNXcbXxiPMUr7aKF7ue",
  "key29": "5QkLMTvnpguV9tmmfrxx77jN7wwtizbRq8jrH9oWhX7MNP7iBsixTjeMqxDoDJUz4aCL1NpuvHgfA86NWNFq1ia1"
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
