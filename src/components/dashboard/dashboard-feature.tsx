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
    "23KFiEhHTHVqC3ghgc5avBM6wrxaQP6jXjxBQkxt7YNzLxQPTm6E7My6YTXmNmaZdGjhAFMRpCjBZSLuG5TtREay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pk6tvB9CtLDHLCP758zfi3r8utufBsjFWuaBkQNfvFeLkMV8y5jcJfA9rNyV5Ss7ekThvKZXMD9tqNvWkeCvhmf",
  "key1": "rhMdzRNdA67UgEhqXFYpC5JYbxyhS73xVUM2VijyMquMzJxZasatBiFUqeG7j1NVbUUzNZCBtT6o8HGuK7agbPP",
  "key2": "44VeXx792PzmLbEtXu8yQLjPg1ZeAMU8GwNKaMwHsWQucvYFfK4iAAg2yRGjzhtQ2Q4b4uv3H71N8GYLS9uuccmU",
  "key3": "4Y86xh4s2MzAHJRkSfwrZhRfyphUMMFh2obBFRSzrnWC32HKXX82FrzRQ8xGDck2EzdE6Gk3JdJZ6arThvJMzMRV",
  "key4": "5LjGfDbBMmLYLpCW8aoLabgbPn1BZVKb6tXJVBMJwf5NxfAyNq3H16XpaooTSHawET67UATXZdV9b1irNtWVcvS4",
  "key5": "3o5tAWoR1cNXLksBt4dv74WSq72U7piBVYBRpQWjwAuKmiUU2rL84bgxnbPNhFQH2UFNgVyMVWhpFDtvhj1Z4CgR",
  "key6": "3Dr2ULtV8jRiKLoyNPZ9C8TkqkbxoCMvQCfajJVb7ZWqiYeYZJXUqZ994Vr1Q6h2tYvQRjEnQbcewsqJ2bbjMbxu",
  "key7": "2zE1uDt6bqimfAT9v7RrH38aZmJQweFrqCpudXz3YXro6M93kSG1nLeUXH5d9pBxQbAD2jn1ZLRx9qy1hnTRgj6M",
  "key8": "5sTF7Ffk9JsAcT5syABEojGS6Ss2kmQy319MyvhAo9cRgD8WiPULZEWQXqxX1pgnsNnpbMuqpPyCezj92cJeza2p",
  "key9": "5nNddQSBN5YhT9i4peUzpDS58LuhPeKZYodJTw2m9G89gEASAtrxa84QxQxosLw8cMpTpd1ZYg1bqqy3DrcVrgLQ",
  "key10": "5WxaZ2skM7rnDzz3PpKh1wqfHYFRk7ZejUnRrXnwwoZCDKbQPU1YYX434YVcDPnuj5Feq5LtFdeBojaem1xkNfAM",
  "key11": "54SrkB6U3gJAy2pWrdUQtWTjNRZekteDNZ1rc4wWuY9ZWGs6VvQ4gM9VY3KTuKuJ8AKPoWsynMq99e8WmyYoeeS6",
  "key12": "4FPBtD61PLxTyMm9ZN6s4h5dEBqr24wzafYc4MT2a8QtYz2Rax9dJG8TozMguMAx7bp9cEELPLGZ9Xvb6qYXZ2dc",
  "key13": "2yFb6X4m5gd8ALpDeMNFkFAeh9gqdR5BXc19XzyAHwnDJKKnbQJkHSGZ4o1vbfb1uvmNmF5grNqoKfsF17bLCpxU",
  "key14": "4UuZBygr4mkzpimAK92exM2rW1GUrrf55cEmc4TKjjjJyeSNSt3Cwtm125AG8sUPXaFXZeJ8ZJVhXSDoP6Rc3nEc",
  "key15": "2RUgk7bc6ssVwRwnDwxbr2t21sWm5aTrQGRCFMuzSxRo8cHRZVwqcTLMRDrsgGieK2B6G9He2NKin39283GVSfAw",
  "key16": "4VUZCpyrsxXNG2s6KxGFYdwxkHJkYruWov2znuXNyZ8a4dB334eqnMYFX8zAa3vgWBeasj9DTS35BbkKjgA3dHzR",
  "key17": "3rn9bw29ARNuA8E5QymcPokMuc7GG7nSC2Gc5c2TvUHTUB1v9vaeVT9LaAfbuSi4frzxARmT8Q3PzhPQhbUsC6jq",
  "key18": "4ZdRR1FCdXetQgcBgAoA5U8ukWQjfwaMh5VKFDcPHU7qjH4m42kXVDQP7D58QRZaSHnxFXgtpMh3UgaxhkRnt3jF",
  "key19": "2nH8DjParyiMFXaa92uoapZUFCcgjGbikFvt6Xzw3YhXxoetouKduamPoBh2C9X84zpgGCrDXmanuBPuGvCcGzvo",
  "key20": "57ENuk45caeKNH1z3U1MMi59eSM5PjZuSbhVPuzYWHdodZ2mtFfEAXSHd5FnMD3eUKUEmMfBquYebjbMSfPykT5t",
  "key21": "2KpYrD4E3hDQyk7sF77D5UnruZA2kRs5GGki7go5oXd47BFnyxtkDq8kLTwfRw36xdXiLCSgUyNMgf8AfQsYjMCi",
  "key22": "2wBr7E2156EFo19UBR5yTbiPCQbBq96UgGnGkRYNXBsHjW53zkGYFfWSh3VmTTzgWn7EK9LQpKGC9yPhTEnW7uUx",
  "key23": "4aRv1qrYFu1YqZJXWT1tJrc9j3TVymzo3muYp3VnJDmzT9KXDNmbd2zAM5N2xcpy1ieqpRUUD6v8R83g9U5SMc8h",
  "key24": "5sL6dH1zCATpKxoYYgarKG8TopuX9S7N3K4ZRNvXpXdqAUr9y8Z2FF8aoTYD5txWpV1pyvbN3rSrTLqKdWZUWoLf",
  "key25": "4fvWb9Mobw1QLJQnRihEE1opckrSLYJzifft4PiMc7BcJfQA2iy3pBwscepokG6nAce1iwEqtJEhSPr1iZPKdXef",
  "key26": "2uDhnKVwsGLh2h3momUWfvgraQjtAnE1nSTUZyjVKZuJ5aGTy9M72VWrfNmcKgxdRKc8id7us37FCiY6BUi4WB6M",
  "key27": "5mNBm8mePmdUEKvj6c7vBbTuDnAmbv6TJ1cc9nCW7efcFGHantgNQv5LGzAX5Qbnymob8UDneewYGJ9yC61ZxWWT",
  "key28": "3xsFa8nNWJgg9bf4BeA3hnuQmqvrDb1ukPCCx2TWKSST9JzJugTY1rXHDrxVUP4WWQFwm4QPtxBEacYbgDsfVhxE",
  "key29": "hcqBdgj96RFgJQYXt16ZNeqCJVst6YYGDVpkhi1sn4mF5PwSE3D23Q9fpFFpS3Wa5MSbcfE4FDPSZzAQ3T5K4qU",
  "key30": "2pQq32ZJTK8qYqof9Y9jQd7i1oLwuQZEo2yphv8Rbt6UpD7ZjyYpZxsRvjjGJdjmBdynQSPLR8AnoQm6L4psZHpM",
  "key31": "2cxJk3o8PqDvPhjjayzRXjDMoFSvjL5JKmawtxuZd1ECku8V7eGKeHHp6NaZ6vJfSQzTivEEebYuZAj6kZaxhivJ",
  "key32": "FNdZP934RXjbDP6MyY7yhSFPo5avSXGtWGFfmaU1aDDamZfqdobt7sBfiFVwCFvGKaZgXfwWz9HTjNZFbEE5VnH",
  "key33": "5HCda1NJGKmk5RgVWwvsWLYduktTTrmDANDZDWgyJQNYnifkPhD78ZhKf3yMMau5nAaqE4djXydHNZYw29NUQog9",
  "key34": "5Mkt9VLLDNBeVcnqFKQ6Z8rN6CTL3VDUVArfwzeDcap8G1iEqPvcdNjX8A9e4DVnhvKAtqENkLDYbtzEasBk6Q4",
  "key35": "3NL1kEPxLuHuQWLreLHWZvsciQCrBwkLXKTkq36MVkGcib7KggumvQcN6KvaCGLuNijtim1sc3XBayoBveACD91q",
  "key36": "4n6RWqv3cyv541QDjuMbKfPo4iPNr9sxeiyjUYWdEFKZZZf6F4HuzosqjmPdFAuAorKnDvNdCpyH2Tof9oouYa5S",
  "key37": "vNAWmBJtPzvMKH9U6wyx8iQjX4XvkeSCzBhPSMcrsHTDHiogErHwzmGq2dmk8EDaZjACcyaJPMDZHHQnG1T8K7k"
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
