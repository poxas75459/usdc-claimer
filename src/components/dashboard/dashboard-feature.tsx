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
    "4B8woRhFYg7GPAsibTSAYK2j8MGR9zFKT7erYkWbAMDpBEL6fbFGT57NFZiMSgu2Qd4wiRHry6ngMjMHztZQtjKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYZJ8EfsxyHiqovLqwb4ARmr7GfWgn9MsbTsCLSRzpvT1P6LzKQLMGw4qvJCHwWfZqsrcZejtXfLDP6aTDbgVRu",
  "key1": "4dBdZVfvzB2MBuWivv1McJcp8SdccniWWrmbUKn88qtTKzqjkLSfraHuQy98m49GAxycQHwsHChTt2USJ41GhKKa",
  "key2": "4b39ucpWeTa6qGnFhRbYhEQAQQ9pAdHK9fX9qRzsbypcYg4kyXeWzeLxLNAYh9BR7P4nALh5vN3mTfu9fQGoyQaG",
  "key3": "45XgrYuuw9WAwiCp43pnafTsM6YAL835XzYCkS5AAFHqzAfQcvGvWR8THAR77VRPzqZTkXauZg952WpHDYNe9Vnv",
  "key4": "62bygAkdZikZ4oxRZQqspMsJGSG3xdkWd1jXtiBFbsNpLs5MBbndyWHDQmdGw9RrSYU4KL6HdVur3fE6a2oBjrnT",
  "key5": "2yrpgx4yUCDCfu4CoyQCM1xKKzD89YH4hUf3pUEK3UjqGT6LTu4yeGYVF9ueFUztNmAX9LeroGt41FCTiHSkgbQv",
  "key6": "2weasy563mpTwsvgPy5HEWTBNyHdzgtN4gkQGaf9euqbJXKYfRR3Mcm6hUF6RpMzhn7j1ZJD2k8CcaLhFREj3Mrb",
  "key7": "4RNfsadosvJkRmLUtoMcpJJfCqvZvDGp9rYfYiMFmEHmbTgVme3wUj1uKDCEUzRn2aEjPZU9ekzcLvCqcCXF7cSY",
  "key8": "5zdvdjwFus3mmw5Xcb7Zm8ca7v8bX6TP5N59EiTQr3A1arsJqMbHRHS5yMQWMugSbuiEdjSEZdSt7N7ae9YVpLZB",
  "key9": "588v5uL1uYdgN2NZi3rgTwsDvidC2sDyrxMyn4e2tt8HsZeX1F9TfoNzbfw341fwoo4njNZMjziQgDPTGFfEqZGN",
  "key10": "5NmkZ9Nue9P6FMTpfYqKB2VVQ6MqKE4juMPrfm8gNhpw152kpKaf3FvM4Mubz5uVn83WtNaJkfm1vVDCszhmgmzk",
  "key11": "5DpG3B5uUHD1gGCb9DJCRT7TWB7irTEwfppXuDw2Nwe475xAAQDN2iEc6YcaXkBXfy4QxhoSojqhY2VNmbdrvYBu",
  "key12": "5nWj1DbgKXbW67i9pBmgWP2Uqp8ydsPCUXVGU3UvPvMGB5FBG3UdavUnjwWhG5WopfRPNpGdqkxMHuZaVXTWp6VX",
  "key13": "4gdTBAKRHYeyXC7RTjHEjAGWVzoN37orfqa5ehHgX8wMX1tfXyAyKPBaCvwJKWbrFyqYdJR5mRwwEuTpHwdofkyY",
  "key14": "43Aqx6rfiPJqjyFbL2cJUSDmuTzhrojo3o6Xynn9qfFn72xEWmKPgHALQZKK7cMr1yk863xhKRBZNG79dmkoDXNH",
  "key15": "5d1n851LqC4JyDssoNmsK3ZGe48rfTonRkt28eS6Xi6tW1idW1xkhhcwMqApc8r4yEP3vAWAUmBzEAa7YAHk8jPo",
  "key16": "cHHeqf21JkFQJA7seL4xGLWmrski379H8L3i2zj8TmyZjqGPm82PMDKZxHcaj8Xcb2QWkayhjJG2RRFYJa2CfBL",
  "key17": "uLfPzr15Rcqg3HA6enUaSzB3xDtNokuqDq2wDFhJhh1VYKRxqnTH8YFASHkcYXFwXAAHdcDWhzny8AtJaxs9WW8",
  "key18": "61et3U4yVUNc48qCXkt4nPqt6abJNzstgQHBftKsdaBWg3ohUZdpG3m3wZvYqCvGdSgsFRtHMywbmBtLjiS5zcfA",
  "key19": "2u66dSDPxZDZtZFN8NRxQPPEVey9wiysHx88mZNwx8PcSRoeVMaXnDoMyZKVpVjEm4Judvcvgv7jxV4YGNVXC2ba",
  "key20": "3DfNmbPD88gUZHDs47CeKjM1iiUPb2WePQMo9ikeX5YjuxXY2v4891g5QFq2MPPV6P1WMkWCYZKrREUqGCVMHosS",
  "key21": "91qVrDB9ZhecgGMKXYhNyhvnzbtSBUusH6wactzGvV5js95YPBmTLAJMAtPKBqqB7BuRwGNQuesQsurNpJ7dgoq",
  "key22": "5bEADnDi7vvf9wj7DdfgphccRG9DqGmMFy4RbqQckoWVXHS6LX7k5ubpfv18dns2SNEuWKX29XjcDEoFA6ruZhBW",
  "key23": "44q3ymAkXXimdvkVxvEDSiZKDRhXgMcQKdBxAXVC8kPWDDY6eAFixmtFzkqVJEcizWfaek2xmXDpv4qRjN573kCw",
  "key24": "399MjSQMjm87zgieYUbrDAH7Z79Zj8C9K7xibqPEWFQPs3sXDEiBdu7Jucv4pbEdjmMN75CGoSqkXtaMHC1BxJ4u",
  "key25": "2Bp6y5Qf9zeosqNWYwZ6aiEhMb2BfuqdLCeQwM3NQbUMXq6tGtNRTvruuE4ZmuqoUa1t1PxWfEbUkNEaou2gALiJ",
  "key26": "39XnCrSHBQvR7pfcYHVg7YhYHCt9ebgiWSdbrqbe1yFKU8PtmxhbCRZBE2TAxkAZ8DK63wt6A5saTRZg7p8qSH9D",
  "key27": "25z6hN3ggRQSuVAnkco1SKZGA3N7KXWQJCifsHmkn69bSKEVPDcGCCznT5S6Nqt7tkf6rPNcGZrKkNmKqM8Vf9S7",
  "key28": "4WBQtjfLZ5YA1tkkTLN6HfNLr83oUKcTwx6QGjZrNCYfwdX4BiWGhMRXeK5FJPBrriXCvBHdXmxQafT1uzVTxciL",
  "key29": "J2YoParopxtZ3sDy7d4gPBjsvLHpajdmQPCMN6wNxs5SzVLpZFCasCB6hRiHVciPXy2RWzh5d5C6LLdr2jpFj2V",
  "key30": "3uMdUm2nNJ2sC8sr6pC7cWfAikpsd9uoh4FD5wCm3Md5mWJ3VTvGgGx38Zq2TzmjBo7nqqLR1fZV4cz7fXR3K4CZ",
  "key31": "4SKsQL1pQqYioktH6rFBjWAgsHMr64nBS1DGLdBVXCX91EkmhG2waxyzrpXhkmNacuTpMaYWCiTgBXE1YHMG2NxS",
  "key32": "XE5GZU395e9RaqiFtT4Ce9xSo4pABALo5HkLXy24GcWbZBWQgaSuWSKtgfYkux1MwZhDWmywdzAocNyomRReZfj",
  "key33": "2KLm2feWphUKDgmF9tuw1XWpYDqPNyiKy9aepJkfLApGSDBDT2LJD34zMmmTJRxm5SDtj4VbKRHuGMkt5U1FHAtp",
  "key34": "48MFjxw3txEP12aek9XCPbG9FF9XnjABPcr23bWjYQZB8fenctUY5gV7zWQafDvTNUerLVZEKcYL8zjmb436PERE"
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
