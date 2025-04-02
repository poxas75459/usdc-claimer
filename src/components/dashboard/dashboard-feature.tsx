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
    "24JbXcQXg3UKfM5Yd4nn3h5ypL99npnCLSf9ixKRPmyvQnmxrf57hR8Qzd764qoCfyeRTghmnxBDKMQiQbyx68Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvaF3TseCR7SYYYDciRKaHM6ZibyXqihZrJSJRTMtU2ztCJVGzdW1yrN7Vomga64m5NSebks5NScrCj1mWUNziF",
  "key1": "LNtwc8R8Rri9XCTS3xpa7zdwsfVphwx2rQwmzRv67trrirdtgAaRKmtH7pT98g8gxb7GpUGrV1we9H78bzMyRDw",
  "key2": "iFVnBxcJXSnbgtqWQ3ZJ9Cj4gDoQCvec5ZZ46qWhXwhwNK8Z2fWtxmZd3mm2vkNcD3EqeD3kEvv8zHzEU9DqED3",
  "key3": "2tkixGGKcNviNFrk7RdpP8Pt11Qi2KnBpRYHaGqvMhdATqkmXtJjMDzjs7ohwy5V8dkCJsrLAy8MJxbxBfc2a1nu",
  "key4": "3ETxd9MqLVs7KRedH3YnC4xQ1agkHsHxGNgV755ne4nS8HkPmjvBrnAHnfZVJYq5CWiHwoaEsmGxqzFRqQjCUpvZ",
  "key5": "3FvibsXN4PZVGn4JYcccCafbevweBqP9sc3j4zYWU77tNcjRFF1iS7VFm3kKHcpe4C5xAX7ybnwENG5YWuNs7Yut",
  "key6": "bVjnBcL385t4EvGUsRYxnBwEQRP5mGdqxiuwkCBUyaPESQYNPgCbfccd3W1jymRyJQsyVpPtCcFsWoWojssGz7U",
  "key7": "5t5ZfA1Va7VQak8XafHq52oU8nWGWZqgPT9FFNfqKbjGmtyYKNHhdY9NwFA5Y9jQazWuVAYRywUAcegWcz4gwqTi",
  "key8": "oRDJ9i8mCFmjZzgxRhoefEa45Em7ffJGZ1c5GsWTLRJ4HGUyhQ45wbNFGghBK6CY8b1YCaaQ8GWqGQnBUC6uyoE",
  "key9": "WaBTRmURBAMM8HA4tUKf2rS7K5UGUrcY5JDyh2QacsuUhkEbjke4Eekod25WZ19dFzPVtRKtZq3QEKwry5PCHfF",
  "key10": "2EwxM3Tti5LeXTkSND3ME3Yx4JCM5g6J5mDdxaDU2FCd8FuXSDHs4t7yFhkogYzR8Khooya52nxSEoH243yZiNvq",
  "key11": "5S5HU7T2vWGiwp46WTrx8qbCtaJNjFXQ343SCe4279GdyNScsMNt2Y8KWVGpYuc9XHZmbCdFjQfxyM3unoAbg8Mk",
  "key12": "PqQCKxVcwq7x3wGJLNVrswRUNa1YbVq8A4M7LPUK6h8WgYfM9EyLfB7jSENzucRPKRMR9Esx4TXXNWUch4GtKDp",
  "key13": "5cM6RMfYhv6iSfLBKERvK9MrxeJNySQrA9TxVDJMXPiXmR8XnLq4yb1BTiiPLPpsTPtPMHKpdKCodkR6UihkARW6",
  "key14": "45iuhMyJBs462bePkgFWxzK1Q9q1r5mKfPkMBatFt4xmfHD3PPCHJ8D3qwWKk95RMb8sRrUPqXKV5VcnAX8KRBMK",
  "key15": "47sFfj5c7s77h7Q6uuSKdGi4M8t8j2a6B4GdykqiWMFM4cP1dW2qC87aQJfJ9WKKJiwS4krt1kVZuEHQFR4EMB3H",
  "key16": "5MnjXWFaWqkezBdeb5QyVmRSoDmc5PssgDMn472TxXPYs61z7RxgpZaBJZFujpjDapMYijoFQinnBqJGBaEseZbP",
  "key17": "3jGKoguynx9uTv8asU5SfXGXJrzWZ2JbRsAJFRdFi8rHH6jLk1nnhgZFMpzqJJpDhgj5ppp7ni87iwmKafn499MA",
  "key18": "3Eqa1v6vzvimFnryjTCDaNdAfvuQRSk8FzK9gtdjSf9XgSoeG43FCUg9i4VD8pWM376AWEUFsSkPFu1AGJVzNe9E",
  "key19": "625G3gBz7tH23Nzz8DTi7CMvrX21ze15ouHzbK7wo7YrtyYTHgqwBtSoe8hiEt4EhKEHQ4EuSEYVrY8kJnzap7P8",
  "key20": "3AokWJPzoUFYoA8Z8uk8YLc1tcDSGXBvvAu6YPKdbUxXrKYeNqcLym4osqs9FR7Qii291aFyrvGnzDS4e1Uu8gSx",
  "key21": "62WVbZ5BqGvxxyT4k11nP7BKndbDk3dChtWPaGkrCHWhtjt1JqnTgoTBF6A4kWSfcvTW4GZ3KgKo79HNnqeWQnZC",
  "key22": "3DoKCUHDRxKYYTzv9wSSrcKAHv8NESoFNnjmNsP5FPS93oheVEprhFFR44kCeD5csEkHgjSNsLAXnxGHsvc2snDn",
  "key23": "2crkhDZT3ADWQiAxjhbL6KQwJh4zjQBZTBcvN2hVk1we2yb8pLbcG4jas9g86NZQRY817w1EbDyqnZyQAmNhm2rx",
  "key24": "2D2puUBsvjeNSKeCB3Vg81q8GHdjzKMdNfuaVfGjP6HBeNqgDZea5a9o7KHquFSVXgCtdVTxgUVvEtLudfurnGv9",
  "key25": "4Wwi3Sb7GwzDRRre2EJncNdhw3sYhBWtHaKhCjrWtp1uuUF2w6LxYesvFwGAKXSxd758fxdgd9RtDFyhBwtsxSB4",
  "key26": "2C2Jy6WMZGnLkPUBj61ADNk1HLSH5ke9xEBJCn67QLeanDZTJmtghp4VBZfrFck8YHnzqpD8H5L6LYZeYAMypLhB",
  "key27": "4xbk4EjxKQnk3cUzX1sdcMbbczZjhq14mWBCLA6C5k59s7KVBTkXLaAA3VX8TEfcmKUdnPjsyhm9UfqhkozS8aDg",
  "key28": "3n5foRTJQKcNJ7GjLPDdKq5hVWGXqmMtiggyYLZkAqFuQNA1pekkyuaEY1s8psFR7w4sSKjWJsUAYofqfUYDP93T",
  "key29": "4ZezfagMWj4TYoBgdj4Ha5YBA4c32eJ6TnTxJL25msBNpjtQ4QStgrUWc2ZKpLriqoTt2uWA61H6zNtRPsmZRdTU",
  "key30": "2Hg3c2AwRg224aVf6tE8qHUnpULJbzmm3Jz9Kbh9ZJM4VwiC3adf1rHseRPE4Pmjk8e2V16ZbUd4zuazLXqoCqwB",
  "key31": "N9EpYW1Y6FBeqhKoXhHuj78yQ7BUA4x623t4pQQRWy1HXvzQFuSqWTEyiFV312wmpuBbMdzHrc9tr9z5kRgS256"
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
