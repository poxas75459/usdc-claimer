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
    "Csf7Ah7aiwVh6xYU6G8qVhjo6KSZzP22VxeWSEA7yCJHQ5AZeE9kFZDi8KEBVdw1m1TVh2VrCttRJEY2zm9NXeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYePrTRyRDYrNRroWFXfz4afgYN5Uk7Pqh19jFM7Lmvd4PZetuhdLuvfPbZA8kYgB6jhrUoMg2L2VYYGQokHaWi",
  "key1": "RYihNpjt5XBWy1EZpm185hGwDA7BMdTedrZMnGsVkF6zrfwSj6R2XTzGnZ81uDcEEBBq26ModHcU8bkDh3aMEcu",
  "key2": "3fFmyHEYV6u8Fg8L5iZYvFYaF3a5A1TBnfMjp9UVhcwtDJ8EfnGRs6JB1Dz63RKDcFcEHb4DEsEpxY8Dk1r9ntdx",
  "key3": "4VZKvHAbpAu2mWphNXYVWVSCPt6wszWYZjsUsHgGQQUXTZVhdL25cfsHi4mTwzxjKoLNEUFtkUpeFyT8i2MJ7tpd",
  "key4": "4EqfrcMbiN44mRZb3GftNeQVbpNSQPfkPXnPxXiu5a2p4TYPx8TkCsWAQigZ2zuyQ25mPXaPu4mRKUpJGTwMrkUF",
  "key5": "56SScHjur63dbTuV8uRGTePcdM3bZNxAAgzV1mzeEGgDML4j4eH7Hbtnh9E5BQgvBaBvggKk8HAkkQnsZeKgt9vy",
  "key6": "q9pYw5FFqNqryfeQVXioXFyfjDtCXSSHHfbN6wowZnsm4RKfUeRNQZpSLKmAdEuGtuaQNH4jUpGbGwbphXB5ExW",
  "key7": "2gdd9f2cvbDgdpREhQmvNuQgLjJUAmeZ2MoErxsPL5YpcQZPGim3UTbTL1xrAXWJFGteoFQAPepxsxUaqm1yRwUz",
  "key8": "PStGweeTnjaHSJbNVEGwPHFLTspd9dcApat9HSe1QyGJJQhNaA5ZoVn38HXeP5PSH6oPEHotgCjsGpnD9XqrJNs",
  "key9": "5urHsTwXrVVwpeVHx1dMR64AHWz2A3gRCQxRzQKLto13ta5XydyYeU57xF7Ef5H2bKci4nbfcBWQey4nedNnZDDd",
  "key10": "4fLcJGmET8huquT5tn2nhzzLPkCNWMHfUyb6Ms9NRsJfBwVwKSe9TWb64SNWUhZk41tdtTBpe7PQrBujc8cBR5VR",
  "key11": "7pvqDRqC8nQVYeuXntrWbprwr3bqgkaPcZaAky7A1BFPRajdCCPDhAj3U9S2Lu3vwPXwZotTr7xi7F8kMDaTkKQ",
  "key12": "4ukfmqKhGZ82Yu3BFLUvFiNksdfhnEbiFGMj1qp2xbQErrqAe14efwWBMYsA3THx1edY4Wqs8rug62gXzAJqy5rU",
  "key13": "q9Hg3s1M2xBqfJAA66CuXtNENsmzE4Vwj8HBMpT1rMmd8y1KZswpSUg51cyjzEbUqniXvVkNCzi3czPLUd9Ue9h",
  "key14": "3pjr5xxUWTsmEopsUswE4y9kzCDfg9KrUGyVhZarzH1UHhAnF3PxgXb8vbqVncnWQPEsSvwRnXkZk8whbrG8PnXK",
  "key15": "2FzrogwsN3h9P8oipECM1w6Uhr7VMBYmQe7QGD9v4d2zt7L7Wn7d8eL5ZS4swmdFzKxHCiYhcucTGtWWvUfKgWw7",
  "key16": "4iPB2rU5Ytyx1jPsSUZWA8SyM3868CPqATN5NjzU2CWZP1tA8JF4y1b3C8YSHm1vN2fucV3LG5PMj5fk37JcPdv7",
  "key17": "5LQZf6JwXQtEwH3BGsmS6ANES3tW2bdwZ6nJtbpPjiX6FkGBLmm4Pv7znse9uxuU4qfjUSrXbF1KzGtknEuZw1jJ",
  "key18": "Rs4VgXCN1PzBWWPenaQ1kozSadM2HF1LA4bgWdyGYTiDRvMoFvjfzH9UcpWae5yL6NzUKyAgwpG9T1gELvFrYrf",
  "key19": "2rsPKhvh8GAcWXXZ87dssVwP8k7YdsYt8mbFpQV2bFunGfg6SWiQd714nEfvwJUbBmwsMeJpEFntVjjJvgceqnmj",
  "key20": "5bpmxm3tQyRgywSEb162qquVjVj9TwMHiVQvJEwxFTWyRKBHxVMd7NtAFLLSXNQ6bAMhmdomQzFokxVRKwjeC3t",
  "key21": "124Akm2Z9WQKyBJN8hsyRGGS7ticsrnxASnnzTWD7GitXk67BP3SBC3zFd7M9P9c1XZmC4GEfHV74mz8MfxFBfBy",
  "key22": "3GoPHudSmUd94syC94Q8XtjvFxW9qChqey4iyVoeviUaaxDSDmSJ82j4FhyQmN2aoj9JrznHq55vauJCcAvxBXTn",
  "key23": "3zZGF37DEKJDVwRGXjarDHavzZsYPFPmMumMit3YTtyCibgU5jDzM8sa6CtqbjuBCj1Cacs9s1Vg7CxmrUWjxmkq",
  "key24": "5ff9gNnL2VCP98hg75vH6sWyL5qLxE2fk25Nn6kapAzzutH8s8QVnQghLxojjMiSGk2X7zWH5HUnfYVxpbbauJ1b",
  "key25": "5HUDYQf6uu7sokPnLFMEcncmaN869a6EMGytorDdsc12HRP3swHxKgn659rj9sBTbyvjrzRrsmgf1nRmXomruGL4",
  "key26": "4GGkZzcSFafA9JeAq1NZxQuE3VHmJZRHJk7xSyj7JEotpFcEKfa6oK2LpYJAJEL5moA2vcbTLjoYoCZibCBFwyEc",
  "key27": "64mLtGm11VpnZ8vqyc9i97Y86WyYzD9HXWUGfhhVgPiyvRH9Ua9XM1XmxEmdo18fNUuzwHn2djYeA4MpqzxHdbea"
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
