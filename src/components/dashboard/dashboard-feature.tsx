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
    "3bZ6UhamERe7GxyxijMpcFwsGhSuWdRPeu7VivdgDsKpFLjfKPc6uVpL6Bgv4SQBVeTLds4VFuyxorYzJLEcHD7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zsF2xdL3vzjfZt633caSweNYFjS42K2R9sxyeTiKQLcohxRYEHK1qwLLEuCbUZxUhNY6ftaERcR6cwZnSvRNwo",
  "key1": "4tEB2kZyQxDgNR2ew7wQRaHAd5L4c34HJJgjAopGuRn5wE1ZNaktqmQr6LRq1UT4CSkVrKS4xXZZQ6ofkE4PTjuv",
  "key2": "aYcswFWtvbZEbwuB7acXnfkh2eRCUMWLCtp5EGgosED1K2AdBTcADUeDXEBC7279ZxFxsfQqVzxrV4AmwrKbnhS",
  "key3": "ruXpAgkofyNdhr9XeG7vbACvgWtXQiJXEF7953os2K7iHFSbsJCM5A6qHa7eVoUy5JkpsXFVexiJCeTLyQkDc72",
  "key4": "3DVhnK4JE4niHhEKmzUgpcrTVwBCB1sJKxuXF4TGmVhRbQYTxFgevKp4LSBcdfh4qjhezhvNSs8x9bddhKbLjDy9",
  "key5": "brdx3V6Q4JzSvvZE7a1WcJodoyDGdVxScja34pPTn6j5yKzKM7kxgt1RMKGssNrhGKH4Zm9o9hVbczUqiJHQQXc",
  "key6": "2n2thFUrEpaZdEdkXcfgjRzu785LeDEVkq8coJHTGCTFjC6L4XbKdDPGERppfiNt9aLvkdoXnE1sptzZqgmFDwqa",
  "key7": "5oFqAYxKGuhseQxL1TMGgFP8JGmW9Gd6ED1PZ1DiNJZXZeBABRDz9vED3Ae1R8k41vuxxjCTN3YjU9tWKmoa8UVB",
  "key8": "2y6P8g9k9PaaM4kAafYwCNgL1neqUzyfU63zULy1Wjfeo7JTMs6TjeQTGj4qsThiUdDnpwZ7XwGa2nMVygAzhAPz",
  "key9": "2QRcECfwdJGeih8X2wXfQisN2u1ZWgKYxTy7d7jJh5vePJNMrmC6WRpkqVqbcydj59yySHBNwoS441dCe7DHeDcd",
  "key10": "3mLYZMpPj5ztwy4Xb9gpoy4HCQjY82XSzrn8xEezX1oWhhVTKUckqex47WJNqZtx3qYsJJz2HM3inqufjRCrt3Jo",
  "key11": "2cTLCKfCgMAx6oAFFg7xWF2UXbeGb2NYxJ9KsaJBRtP9Stp7QABpcR5qgE75SaY37JifjhyEEf138Qu1emDYT8sw",
  "key12": "2Ch29k6738y3TkuWNZJSn9h7SjLZyDoCw3znynSpQJkhfUUo1fSUygvJ7MH6rwoGpy1hUKQWe4GYh8LhUXqVrX1K",
  "key13": "5sMjHLipSae4BVAgFWpmFAMtPvcmmi7QLv6ayRhHJy96cq6rYV4iJqV5yrVsEvamdu4XDQLJLp86CshV3mxfrhS2",
  "key14": "CEgLWtWXUjqsymaukY7eTjYw9ST1fFVGKp5iKxcCitfkgY1P8DXuMEZVCCG9bSrtHEhTb9vqVTm4CZLJXucj24n",
  "key15": "283phPaU3WFW8HHQiSfwMDqbWM7LtKVqMMkjjzr2cP7KkZ5FctrzJJ8K6EdRZHhSnrVRJB9qSSCwy8LwSKdWoLK2",
  "key16": "4TeKAt1dJDxRvWt5kk7uUtU9SiK2v535SUFPKRZTmLgVP1seLVu9UShS39xHapASBanmJAhwWHejApYZhuYjLuwU",
  "key17": "5rrj7LEFyaHaEW99z2tr4J5nMqnznHfh3QCV8HP6GZFinHqFZbTeG7uKALrSjxT3qMjwoWfC3hzuvHcWvYu65NxA",
  "key18": "KFkLB6ECACgP1ew9Z2Fe6RWyXY5rsfp6g728c64zgLNKNAeEeTxaGq6XUYaHrzqo6MdhjgWu8Jiyc9BzQr1qKak",
  "key19": "sRPZRw8EGhb8pD1GWNg5FLZEb7cYVAaiyoSAkNZJBQhqGg4BB1Zws3Bbuye2ki6VfP6qVjWbFjqocE4kpywhvmB",
  "key20": "2Y5ivePY2Jw6iWzpHAino46xzEL5mL7rTEJVzjWWwk8JxoAhLc3PGckWRqoNezd6y6tK6tpjtrAqGpPBRne8GjoS",
  "key21": "5ryCuK4v17yb7LpxHCHWfWUDrEnRhjDPr8BWHnRme6geDW4RzQ5waAcHCRqaW5m4DEwjDRpfjMdCFXBveViW2q4X",
  "key22": "4GG2AcWaQ3FoYNJBmuef75LqsSKbMB2eCa3BQmbeJpgoGRZyy6vPwoYDwKcH4j3U76Ty7UEaJESoz6LWWYZWqGyA",
  "key23": "2zNYuKqPBT59vVc85cYQ525GSmbKkY8mP3hGLTeghYmrcCPWU73vQ7DDKLGkoRboRdeaH8m73rMZgeTQQjD4EhFp",
  "key24": "28W33CCJoEGwowekXamWU9WD2jCnx1sWtUu17u1dxEvwhtw1a8hJ7wGbzqYeg7sDwZjeDusa13sAe4w47Q8ixCAJ",
  "key25": "4RAkhtXx1UgF5HRZNp8DwvU5bvzNevyK5DFmoxSRtwE4k3zBdTcyh4QWz2Y5cy1eRLy7D8V4My4yQpfuRNWtaqxN",
  "key26": "oANroXMAZgzjG6gfS7cXEZ9RnaZMEzC4iXFT5CqtdanMjXr1UzKTUCduztLoVRcMkZmqXfe2o5WPmcWu2fBrrrG",
  "key27": "2AxWHvgq4Z4ySD3UiNoKFjUdaxdxLf23X6mtCaaBgAFrxcy7eUffPKjyKfhsXREub1HcpNS7rMrf9Fy1K1h2q1GA",
  "key28": "449MEj8m9CsS59b2ZeVen57ZEty3raiXRjnGmuiSQxX9HqoegfpxK5X4LE6dLRh1gK48yfd43hh33Q16gAamMmQ",
  "key29": "PabAnHMmk18Kocd6ArScQDgvXVaeARfFfmEWBFxXLJcB8H3WsfjhjneV5jciwi3mjwPL8zAZkHkUyUYvr2thXjz",
  "key30": "7axMr6WyXYJM1XEQevs8KbZ1hkAZC3p8zTuGcJLbjcJdnn3YF58MXmPMCo73gcwJHZXoANJfFHLzKbLv9eA25n9",
  "key31": "5cHEb7YMuo8qmJbrxbb2Dt34XU6EnHM1D1ebMYeoL8AjanoSyX8nyekWGARtzS8fYVuBW8hSBAatSd75Kdbdxx2H",
  "key32": "3zk9K3zNUbh5QWGPWRdS9jskFdSGuobdPAmZd7JTUufnoBjYwC91bbw56ZeMTzYMi3NiPQfhHTJka4Jy7Y518L5L",
  "key33": "48g6QGeLYatUCTBwovDiPzqkTmvuk5nwEAVVTSMWKkdjEsjhkqGESTtAnf3xo1HEdXnVk4GdZEuMDSjepBeokUSD",
  "key34": "4XD8Jggvfb67RnS1g8gaH7sfiiHdBD5tHxtL1r94DHukJc3x9LkrRzhiLEzpJ26qXJitpJUwinmBCRaTSPF24cAT",
  "key35": "2phL6D4M92Q1rzvifTqtM1CBAvnVcAhkd8BvZdFY3hsqeeg4BsAX1XV7Ss4rf5pNZ8uAjsBb8AyMUA4G6tUgYjbK",
  "key36": "44TXwxYwrKsXT61S6xcjeYbcUCTe62KakxWsjdJBNSL6vui4UatsJDt7qdCu8mcE9Yv9XAuHyENQC4MqGrAtB6vi",
  "key37": "54D47jAU7BzBPr5gL6gyMVTBER7bBwuUHr9fN4fCaXhMfPjf8Wf93AmyieyYQhpDcaZZY8qfFoxdJZCeSdkfeMkt",
  "key38": "58tFsTJwrBqA1yYfStiYnKUPj9PTbaShSh5xpdVLU39LcFH1vfdZayVxhyirWV3M8arRQnmm211gMDFoJt4CntqA"
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
