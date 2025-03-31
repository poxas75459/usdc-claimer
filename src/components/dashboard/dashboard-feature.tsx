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
    "622aoWUQwZ8SCFtNBpUM1baRFTJkALw6mjpgDvHbUxEdgdHcSKnBVWBwPLghX9NjY9ryXV9yTUFLQhZQhP3Bs2AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgDmXZJbUcZ46W7dCimZJcPsGeT3k1vmtvk1fjF8afhHrgcajb7rQkf8sm87UMPhZqn9FNhGBmwFBMHQ1USEuA2",
  "key1": "3mBMp75v3rSazxf565rCAAMAx9PDLXzB9oZxisVFMh5FZBpsjydPuFvikqWWGNoK7YRCKoFyoSjYJ5h1PZkmiT5j",
  "key2": "5efDoVT8bNQQAwHGZpYc3HSsh59jvQNNELTwyzSc8FCw5dnpgqUSVUTvr5inam2X8KagB38v4jnp3DSJdJ9S4qrd",
  "key3": "5tVy8Yrs1uJkhUkSvK9MD9DW1YQCeMdf81UgGWd4EAxSej19zWsvhSd3tVa8yhKRZF4P5SffPb783id876ZQZL6N",
  "key4": "MzfnvP5pBJAQAAxdANfKCRRn4hu7omySV9BaCV3ZziKPkTK8Rx88JG5ceQqceRd2BeaSM4X7QrzuJz4nd2cCvUa",
  "key5": "3VRG2zyer6vnKAtzaNy6pw1JXcsjz7dZpHrh51zJMd1H82KuDcj8ayDKBbj3dB4hdkHtuvKF5utSUkjErpN2FG8C",
  "key6": "UpzvDVyVbz9mYYWLD9NX9PDu5v3t7eDKLqoYJu3CSjuoQYdCaGBw73ntAtAiBsxQzaDWCxZSsE1V3eH3DP4TNaV",
  "key7": "zLkeYxxjaHpseQt9oEJfLu6bY6CE8Zojc7HDQ4zw2Juf1GH9sy5GysDYoEpzfgaXaUFa8geVDrx59JXqZ9jEoNb",
  "key8": "66jXi43Xx9Vvbjee2MjnMezPGr3FJgNw795emQ4jzV1NmS67n4B6SGLAJ4sXJ3o7V5sLFygaqv4BvtkD77EXjmzN",
  "key9": "3sQMZUPwUdYX4hYM8M3BhQSMdAgzkCF7xpdQG2MMYoanayjtE3CNK8pPH3xnf43DXti25NGT7tZ72LT6KwyAGM5R",
  "key10": "YMzgox6j6ng3iMU6xSpQU9NeWJyte8n4NRTFg4x3m9hJDChy1VbGxr3qDbVmgaPdEsg9ay6cTiaEV49bevLPRAP",
  "key11": "419Zma4buVLggceWD9RykjUVVeKxvXdcrAy2YoQCkoFdzGMbqqvAbQvPmpeXVWPVaTWGjhTPXtfJWLcF3D79RWWy",
  "key12": "4tkDksKJzJhLSBx7KpjdzNvwRXpTa99Dh3qGTdtjCCRjsuXvo2P3o8g112WFJBhqARQsMcAAmZy2j9dpx1z6w7BV",
  "key13": "2e6XUmFaYtjJq6Hpn5MgdKfHdqdq1XRPshSYuMufSRJURRHSHoo6iYsnHozxtvxMvzXoMPzuHgC6zUYkxAJbaaaN",
  "key14": "3DUxR9GXGkMJ4eCAD4EeP7C5BPxLqTHVQfAF5ijTCRVZwsy8YtMgNgo4wVH3KWN5u1TtCXdp8pGqC6mdJ4FVEUdF",
  "key15": "4dZEkr3Psq8MbvxMrmvYxRFUNS5bpfe6u2TCoyPusjXbQ7FJ6qbHV8omHnMB3TKqSkyvk3kpPRkgVQqCcm4JtZkU",
  "key16": "3ZMdpLMTV9nr9B7JvAZfQjvQJkUmZXXb62Ck2snBLJFkbBCY67WCFxXi7e6ZS5zoSfTVG3tUqG2G2MNZvQqzSZSj",
  "key17": "2P6aDw7zBcHmAzwtnJFQjt9o6sT5jScjGpRYbGuasmZ15AWsDC2SC33hXNJ8W4FKrj3H2b4Lac5jQRBqthFoGXF2",
  "key18": "MeWt96FuknjotbaQppvVfsxX2RpxwSXA9SziQTRXyDwnopQCspQYjHNMJFrxAdfMjz294DhNjY1iNsG3KeeHhfV",
  "key19": "5QmwrEyvY8ssymYGiBzp9hvqWsGXFJzYV3w61NvaVk1Zy3BSxpbbgQzwetLaZc4Mt2bjQZsnGEdjtqmywxUnx8i2",
  "key20": "563xL2vK4isryUBzz33aDqkKkNoAoy4rS5Xe7xikZwrxL2zL7vkSq9wvp7xGSRa7bHXNYngRBCZwfPR3DqHhMoNk",
  "key21": "eADTcKvVriJvCz9kzDh1f1cAarLdNYiiGjva2j7F99Yr6eF1wURmeC4McKzWT3xwHrf3yaLSSUsncrVVQrxfGfk",
  "key22": "5KLogLCUo6iMbsvvHiYFKfSwJaWYWaFLaHSg6i2m5VoA2FVRf7BvCZhsCeqEXa6JrGbdSijWoVJVThf99qtgdC3J",
  "key23": "3hQk3PEPrwDjc6xT6JsBJJXUaW6RtYLq257E8QoU6mFsyqVNx6uSBE8492g6qLa18NCebEXLTkQPNeBoSrDYcHQg",
  "key24": "2hezRsdNWJ2rdWWoTwaUakoVgTaf4WAaW7yNGCWDgMjssSuvmFfXigsZ4oMDM3T2NnEy4VEwKZC8ycUaV86bCiQw",
  "key25": "2h5PsszuqHk1uZukV5QnQDaQiE4tTwq2cRYpM1t5atCeeqiUN7Jhv2HP5kbEwXJqoq3MarnkLDQJHGBJzcGdaHTT",
  "key26": "64WSsmhWnpJbDvyms94Yfz1ZMkBzHd9wwkXXmoKVB22Wb9uSvQP5EcSVqe6xJbbez5YajgTspqgL92wZZmsCpgZk",
  "key27": "zqXd84EFgqeEbk4o5kEhcMepUhHEAZbfP4BLbpHvPVb2H57nRGhak362JHJCHMPK1UXnw5bX6qGVqe9vBm9w7UL",
  "key28": "2ZL4pZ9EQy3k8z5qGcUQnRTrgfY6HfZwbXQY7VFPJCJohSHLt3tpDHesMP6PV89JTJCyX9fphxzcdazEDnjfpTVB",
  "key29": "4ZV9KwX1PiQLBhVFv4rr6XAa3fgoosxBM6B3FizoMeRA4Rg91EHmZq5vgvvEYSwEXPd5RMgy6sF5mX19L2FA8pGU",
  "key30": "cdR5VjYJc5M5nnRUz75vm8p5fa6uyPdKzMbEfBWDCCefjR5VdxtyE58o9NAhrbq5rWXMqpjwsVHKpQuzfSAo3mT",
  "key31": "4kHXMJU4CF7vaPMso2hLDYC3H21ZNQjbs5GPTtkY37rdfye8DBAZ3ZdbZqd4J72BwEm6Zrw6inrKZyACj8NthNK4",
  "key32": "4j7ji2PoKknH4BGPWWEpgEBqM5kHJPB1HrzktPZiNMYqNoGuHmEr7YscL82wurAoV48D7ig1vemynuyZFmrfErzG",
  "key33": "3Kg8j4FfmL8anUgWhbNkT5umLH3y6rQKxeGfkCjrxyvg4dSDHz88YRwAs6AKQhTRJRgW4cHteJy4e9rrF9Vgqx4d"
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
