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
    "3TJinyib1BtpsytcRzi9REpZ77VXRWCPP8VEhpAwgJLrbcZtmkxr25PscVJEFJfYPjYyvdnBL6jgvNTsrNqVJ4Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4tAD3wM9WNUtg32NwUHWCwco6PBYvy51dMx3WLnizp8CwUwDfzXwryAuTWiRqwprCMsMpALdNGMffPiS2Wbcvt",
  "key1": "4YeBgvUb7i5HdxTtUqvLQvCPZLQkUVeD2b1vzHNGU6gjuGULrcYPDYfbXamLgLdT8QeQTeY5c4ts6JQxUBgThsAf",
  "key2": "44m7X8meUyiEvoz9H84PREiFsPJkpDppr2funVvWxUtM1rzpcvoADBHsnGPku9acdgAgUjCpb8ZuVPUYvtKzBmsu",
  "key3": "3p1A3KdKhHZdw1GsTi4S42zfHhMrfRuGH5hBVuPWv88A7dzZnNWCwwUnhBKXDH3KWGLDGZ1Hph8Y4YiHxZafA1KP",
  "key4": "3M8stWyTMGZXg3vNkpvUbd3zo8jCoJ2cc6kC4SpN9PViEQAEMymHXe4SSbcfjo8TNFRcqscotjTQ8uXn9WzTb4Yu",
  "key5": "3aWqiMNasYupCk869FcdjUsPjdp1LqYUYT8VmLguKtTjn3yiv2ZPb9b4tLWSCttSGWUmau2k3DTzkdyuyac21FSg",
  "key6": "3HQdm8ZSkAfi1druXZsiz186aGKNfGVD2FP7JsetnUZHHrKCVCfJmMawuciH3JSVYHA6j4pEBK3qT81CZyYZrPeD",
  "key7": "34GGG67FH4r2jAFWfHfc69p1yJ7LTJffszWY5mWNoWsCSgoA9DPuwsMG669Yj4RWY7BQZxKMT3hJvChorfXHKp1u",
  "key8": "2zALT2dk512UUeJFVteYC31y2nSouELSWJFrhTZF3ZHX7fUR6HUcLtcvvTLY9o5GoQhLMrBnDYwxZ3LKYU43mEc2",
  "key9": "ZGRVbDc1AGDSTEJQVRi874BC1qnVLQFVE9EuQyrpBpLL6AjNwfCmCt2yfosWsZUud7P342v7mFx4GnJAgZESn9Q",
  "key10": "5YbmzEB1DrRWBvioNSPBN4Pf3UJ3M8LcjWA6NVLxnjTXyhUrhm8qfCsqznkXP1bhT9RoaNv9d3evVbw64guK7CEx",
  "key11": "51V2CV2FwK6DgtfBpLuq6N6Tid8NwaLTWAFkQtQevJnqzVtgqnmieNLmMhrSXZiaXP6T1dp8qwmKdMAa2PmKKpKE",
  "key12": "5WvyVP4sJ2Wp5pg73oAJBjcCLs4ihm78mugLmcLGP7F2KUhLKwGNDoC5q9Gy8849SfusE3KvBwCtFkkt6Hj2HbED",
  "key13": "36JBtK79uQCG21bWDJb8mGVmVTGxiBEijaePsehVrhY8A8xriXrbz2f7ojX8SfR5PLBL751HG1xpDkqVf8oJLxWu",
  "key14": "HB21op2TUwAafeAqr5mDscYHvzCaYsgwi8Nrbxtjp8E6kHERgMzjvpLi8vrvmg9inwtpwgbQ69MvYVQgQVPJ9gY",
  "key15": "5FYRtWLP865k1rnmhx7Z9PzV738F5sWqard6hTUmmxv1LFkXDA5wq8HpUTqSpHsDP62G9N1Vvhds8N44WkDHSaid",
  "key16": "3XSLdGzpxfjVq7KPKh6j7RhNoiMXwGrZbjQbdMkdY1Km1BTsQPspdGgej1MR8aY9j26vVN2NC95kvHTW8CCbggzC",
  "key17": "2szhYc1tncHE8XhuapXpvsw15bqaUh5uB6vk4ri5NwdJbci3wMtZs9W42YQUnzz891qwg5LKuStmyjkkYpyJr1ZG",
  "key18": "sFrU4EzAtTgBmdcJqMUuMqEg12zWC1uCgV539HUnAhWNeQn96x9hc1Qz4UmpmNcRySgFodAdCZfL7ew1YVrCaF9",
  "key19": "54is7Yd9Pp7RWL9xK4tRAmiiMu6GBzy6ndHQnJr8EMRoSk2efLDUhk4pRf2dvKUEidGB1nZSTi7BENitPdzRypG6",
  "key20": "2mYGEpJc2qED51UtSstsz3jqbWH72J9v8tvEiT8JiwP4BnNEHCrkPuLudciWNLCebVEpiuzFvWtHa5iGCDCtcBnP",
  "key21": "2TmZcxRpcA51ZrLPbqSYwGHQoGkgiThSEscFNvWx1VnieM575pZ4P3rQgST94K1Y3Fah2tdtwLxhPB7AwxsPHdPc",
  "key22": "31obru2uhYGqPLUUPyPpZKYxnPGSoijdZLv5M7XmUADGC4uLpyAEphKCJ3SHidxNZnVhYDhWZY4nxk3stBTDycJe",
  "key23": "5Cyiiv7AVUHtmZiaFAnZ7p1DKoY3Q6L7MQh8uAt5Q9cRnRN2YBFjswrx9WWFgXHbitGLWTnaTktgvdphhHZ8pHBz",
  "key24": "3QGrL7zwuXPXF14S4DRaRFL2YwynVPsBsBVvngKRSc77E4hSjm2QaGnq7ipwmF1FZ9qLYJhhkCXbAbWjZRP4oi3j"
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
