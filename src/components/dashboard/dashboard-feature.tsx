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
    "5Aq6a33wTeBDw78fUWqLGwUhaUPSDttWG9arup7dVMtHvoWMqqheyy6tcNppAdZ6X6DAwTeGAtDwr4WkpgErfQU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QkKeab2GPc43Z4NFJG2sZY9wtYVk5mwBCPGvyEe3E4FBck8BfWpjfcXhUn3YbcDZx3Hb7tVSD3XvQt7m3EfXkWn",
  "key1": "3R6YiHxWxn3BinN5tMrc3wExno4uRyxzFbzFu15GTzZiCFPXuxZAcMtFGdFuCPzTxSabLxmDEpAGJVzBnHzsYqkD",
  "key2": "3FEvTcaF7phUCV49NQixBLTn9Pz68qYCHnW6joQzyjrGy7Bn5dW8dKzHGYkJBNMDXQswd1yrcinopsJSuyVd2Dhy",
  "key3": "FTmT9kxExthZ7B2r6tbswivRQjqo6G6PfHZGCp7Kh1e7WXZCukjF9fqYCSXH287sDnV1Kgo4LndCdaV4nSc6qqX",
  "key4": "27AJNppt9Q1rEEEXa3VFAd8Z5LBJjEHEr6ECdTLjedmPuxWykpW5WdNxdyuV7GFzEMLpT7UxHfgswnRjEeVVQWKN",
  "key5": "vc2V86qAyB3qid8YPhApBhrQiLeK9wUmKDm312fBChFyrJZewNyixsc3njs7gXNskY6dHQ6GGuLBAQMdWYTTsfV",
  "key6": "2qy8qFVwQKQ4WMzZeLdi4uWeJVYAiSxEg1x6x4SjsTCgLi6opyb7Ux15DWUTB2VE3YVsJpoTVUAbvhMfJRUJPtMA",
  "key7": "3o5jeQJhPfbRFJ9kc1ejZ8YRPYptew194rRyRojeVBcASKGkYwTrm8GjPV8qPRAbN6mhFUUwP81ECBPiZFupbT7Y",
  "key8": "4CUhVGsFNi8QJtYsX2yzRrJ2cDTSAGJKpvd5RH19VoMNcRqB75U4Yp6k5wpfGwL4jfKARh7LB98v1D1oeQdPy3S1",
  "key9": "3Wt7o2qSnEuJRMW6d2ksKy5aLg7CSHodaoEYmSbMBghN4m7ionjaK8h9h1EshLsXEp2x3wAQkLChbNV216BxafQA",
  "key10": "24G81pHhnoL4DZ1dNWebQp1YT8Hq61SYHFHaJaEEQcQLk58fS4yxGA69zuJQv5WHtEw17cZA7ev2WpLjT5TYrWMf",
  "key11": "87ok7w2gs7Ry722xDUagH3k14tf91qxJYtYTbxQ4WNb2DFhCnoVNbwnbcynRKBsxBMv95FGigM6nBykg72W5Sot",
  "key12": "41iBUUgy26xqzVv2mGDVmR7rwB3GVdVsAD7U4JkocLHunniskqvSAPWbJGnYKicruDTEitScMqhn7SMV2BuyT3iX",
  "key13": "5MVKDWmVDRLncd7UViXMZGaZYvrddobVhwLSv6VntW5QXaxspGC9ons4HPW7eLbzv47ZVd6sW5FCkPH3JmC9hpsb",
  "key14": "3r36GFvXwvKusuSavvrxXmgkQuSYhLhTVqrSxt7ypVZ2JjXQh5QLkLLB7AjLCCZyPW9WGLub1SrKb52Ffabnmm6z",
  "key15": "3SsweE2s9gRsuXUB5Uu4ppEM5k2di4Fd7dGnpixk7UD1Q5cLA7ZdXksjXJcywtfHgfziYJBPB3G2ziNHqy6TErGy",
  "key16": "3G9xAW5qzizjQese1Lkpqj3xnkSwex9QrJbAkEVtsu4eMiy4gZHYBTH6YwCs86uSeEP4h9MqZ2csqLvAEP1zcpnz",
  "key17": "4mveaCmsvp8MhuG3Jqe5gyohVVQAGgJ7Pprmoa6cXGekfk1DP7TS5b6J4nCTwFeVeVjgnoTWX1uKJnUjtxoVT9kB",
  "key18": "voG22cxWkdYsfpvrps57BNxed9QwQkKmfVAVUo6HLEnhEW2yWnhx5k7XwJd3QiAXmmvv23x2uSmw3sTigs2RbB8",
  "key19": "3kxEkWuhvfwBd99Z92xa95VQLRN4erwER5KVorUg3vGmAcKtATveBedCGeivYqqQrKEGrGrUacSC7JspT7MjLQJn",
  "key20": "5PCxwvcLL4NjsLaFRa621eP1wfgKdSVo7x5ZzkSe3s4yWk1VPKVUSHAdBUxNH5u4QJ4emEYyres4ut4Yrk61dtUE",
  "key21": "5XcnXYLqTUqCp4g9rzQtpJeZuGEf7eBeWSn7cjvRrsxAwPy23fgJ7uRK8etKTmeFsASsKQFYd77GJCNwmJSCQZQt",
  "key22": "3qkg8su7Crcg9sXjNQsFoEekvc4HEChLgLK8F8fHaQZer3Jy6nyVxwxxxuz5QMFCJXE2HB6kSD7jJ2d1cSzqN9T9",
  "key23": "37KYfKyqyQKdcGTiehWFGnQr43HUpDE8ocKryKpv7WVg1Qs3sqkYHoGNLu663URY9hRazBYxRiERRW3e5AfJoFRb",
  "key24": "4pgyVV7uhmJ4VrudkBcNTpn9oLSCjcgxtZw5GMPCye2wTAxp8SXKAb9tAvX5VGNVvMqHA3ikdHcZb7krVp3gEbrQ",
  "key25": "3U2FqLytQvdsdvb1i5WT8f79C72Dc8BEgwPC7BuNSwKjC9kGxtbeRv9NRqoMWYhkE69bcxNWXTRxq4k8SQ9rX2xn",
  "key26": "4qgyKfKm7j9n2dg8VAKbnc3sKsLzMAFpQhgLZA7JPoJYe39z8vpja6HfyJGrS8KA5TmxEgZEPkhEWGmwTCGg6mVm",
  "key27": "4fWxXAKc7K2sxPoRZNuKR26ZZJ5pnWWuQxy8wDDrpBh5DFVeWLBXRjuKZoJsF5AZcgime3SxxP4WryKCB2jcLqeg",
  "key28": "3H1JeVeuySBajPqePLkMNdBEwkNGsf69pD5qWYhxUJPaScFUCNAzvAF6gZfdReBc7HqwoFJhTEu254m4cbNFLKky",
  "key29": "3Y7ufv59ervZG9E2UziJvkRFQTaLBERAPrVB3YRBomSHmX7bpaAWidqDn6nyMJmXxYT9t7KAgRphS41iSW7Drqjo",
  "key30": "3czTNaiMLEoBvLXUco5BSRgh7Mo85gYdCSiTjB3uZTcfHFjvgkhzYACT7XnaiwkAXmQSBt2wZe2XYu5hJ6YN4Pqq",
  "key31": "5WuKfTMnesHnfW8XL1AE1bMGJdYbd5W4iNQZLja11xBgAzmo21AbrWTnCgKiCa7QdQJFPKqHiBrg8qzVasj5BjfG"
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
