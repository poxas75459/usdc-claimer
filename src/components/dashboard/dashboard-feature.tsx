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
    "2QK7qVKKwaiSJiGcmJ2RaxarXDxsFUsAaNZTiEdjM61mrXxBzNEv5o2Xq3ESwmKK2iHhgnvLs8GMmkFggubpQSYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPgwjHfvu6EaPNukHv8NqA7P5YJsgc88oAs3Yhgk4p3QaouQgns2SN17yLxsX55BksVGJne15Q8eBTTraQAkBTp",
  "key1": "5rmDSc23mBVS1wyeucsXmzzv9KFJqxtUVPCLSfZKsXiqL15c3H2d99yDK97HrS2QYowvsNVNT7zU5sQnpFoSUKw",
  "key2": "3k29czQwvPc1i63o8hqvHjiNzhWLEZQZyHmMwnS4GKnGAZr8D7GSsZdKGpKQ5jP1vE4wueMZePoop8FsYdHnYDcJ",
  "key3": "ReM7nav3grt8PutU92m1gQAz5mSuUve1wbhT5esZj9pYFYeVNuRVfFFGrTMd6ye7ZfXkjE2aRkVEWMFsQJUNWRQ",
  "key4": "3MJL6X16nh7wqhQrYEdUvkCvYu1w3K7FALDjcKEjxC3wd9nTn2K5abR351QZn3fdtyS8qoJmHoLT2y5vWD5Jqyf1",
  "key5": "57RVGu6nipmnW8UmczsKoSamX92JKtsus8m7DuYz84yKE6kGv3EtN8NZrAauRUg6M77B8toCHfiaYnPWA17bBRJr",
  "key6": "5p6MDudAtt1vymXBFsRN4hmje9YvoBCGE8CfJV3WXyU4C4oZV2CYsRm8GeKDY9wkdTJ5YgLS2u31aPgx4sDC7H7y",
  "key7": "2M6ynj2kCKFMKrYLJz49gszAbkAqA3m5P5YPPnPjAiT7iDsFFrASS9wA3bkFLDTA2kCmJJ9fKn8wrrTYQNntQr6X",
  "key8": "4XRNXCzHo69YEFPqZ4QMhwWfZMGXg8aLEDd7C94PVhgC66rUjkSb5z7fBpB5xzkKWr8yT8nNgoQV7SomNRRAy2tV",
  "key9": "3TQWBaRmz3wHJV3EzLPi7RDoVqGeFhwwz2yrh7E269zEKyiQgFN2DK5ME7e9mEHJEnVYRoYdpMVbtnDFimg8Pbn6",
  "key10": "2VN32KkRmsRB64Hv3FjTnSA5ZUTTqKop4LBf86CWjYBZL7u9UCP5EatvDzTPTRWrgqvWo7uAKUpLQjTQcHdj7QRb",
  "key11": "51moaxus1NUAYxS7syCGgxbgNXWwcCMcjjN8MHCsHnhncYKFHNWyPPS4m4gYxVwdE5yx58XiaUyuBeeViT7XS8mV",
  "key12": "3NJhQonYQfYaY9W5jUk5yq6UCNYrwr53awKvwD4PCvfGBYXPzbXZLdvuS177rFWSANqktn7BMGYx48hVjcqQqyF",
  "key13": "DzRmc9oq8zKtdF8JUW9Po3x9ghGjV2JqpcudU3i8JQv1vNTkyduPmKkcExJ9oieQj31xMhVpwi6Xk9cFjvCfjhx",
  "key14": "5frHfVKFTePmkELSSCRcyVdeC2vyRFrnruCznPR6o9HXN2Csh1Wyf3A8iYkacaphR7Es1HxCoW3WKahsSdbNt8eY",
  "key15": "2R2jMMV8vxQ1mupwJAgCc3FjSjZcXjAAAXqWPko7tzeEoWQ3zbnx7SfzYsS8o2bGMrMd7dWwDPtR2t6RTHgmTS34",
  "key16": "3xB51XfT4G7rah2cvJjLpJb6iky1HPUerP4tkPMLMCg15FdpKFwcdhzH3ZndExWWc6P8ya5Cfbv387KKv6cWQtSd",
  "key17": "2u3ay1UvmiaR5NjqfbcHjEHjGsscLctJAfDUVYr5dAuyhUdjyBqhqGXHgDjbEDn75PtQGTL9cgdKQgwN1bWGKHcq",
  "key18": "WJgEvtvbqjCQKopzW5iWABnbgLQHF7xTNtJQxQqUeDauhHd7iE75W1NBiZ7eNJo7myRjyWxDaxxzTA7awUSmZfP",
  "key19": "34u5LbeCe2NtSqV5qWWsqYHUBibYuqw28gWH7MhnvSS8v8A98gR3ALRsVS2FTJjY2aDr9piECk2d4gWtA6oMDLa5",
  "key20": "2Jv3Jf79XatMsmAsa5TpR6Y1Z2XBLMHsdiJxV2vwmSDHJVzxHqgjgs6gXtVrZoXiXnsXqh4bcScGwwEWvkvDxXQb",
  "key21": "2kiWoaVd4Hb6cUrYQsmG7y2PHD7g8xx3qkQ3CCrnrnah2mesywdpJ2cQCVnjwXSrGTEHFMStuunuPEPjhX99nYH1",
  "key22": "3PGFYp8LjiB4ttWFkVQFUGZEJt54gcCWFDJjpCaDXc6EmJJ3CWz9QUFSrH7dbgVnMxijwZ6XRggQYiQmzSpknpft",
  "key23": "2z5fY9enxAEa8NEsEDzj8qBLbbq8AUYZXb4WAmmRhbwxztYyKsCi456ySxXX6q3vyZcjT5EttwQxPgU6sgnNWWXT",
  "key24": "3v3cMuzFZuSRqti8dxYYM55jRZi4G7mWmaUo7pyMEVHKV9AHNak9eHvdAiYJSZ6BnrM4iigRcezydE4mThcmjgLE",
  "key25": "5xPL8MoYtNjJ8LQaB9PYAfCeFC4PYgAHFStSQ2qYZjrt5vxmSfJUzQ57vxV3jA71UvgERtj9hBwR8eHyEQxaK9K8",
  "key26": "2rDZeuGp73HDQdyQnDXWtZAuDHRYcMdMyQJ5M6X7Xt2cR65EkBbesNoXSdnXyWK2eNXQc4JcSPbksyjBFLpf4bar",
  "key27": "4BqR19cEK1nk6WQVyELmAQsvHeHvm2gnTxxL7LoTgf5WfMMpdcyDdzQ4NZ2s9i1i3KSmjydbmLoZmUy8MGno7YNX",
  "key28": "2B4bVjBqrivKY4TFPX9fqCCUR3fB8e9LYoKAv6YRMYinBmdxnB68ekh1FDxGKQUcGLEvEf6b69vyKLYKWi2UKov5",
  "key29": "4hTuLJSC2AyJAjG9xqqcVcF47DYWDb8BrSuLTvZETkRgv6jgTdFFnmviv1QEhFcbwj12SBoSLfaNkuMfqdC934vY"
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
