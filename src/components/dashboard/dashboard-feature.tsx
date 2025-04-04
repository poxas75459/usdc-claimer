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
    "m1c7Bhx2nkVXPAF9JmhikmTiCy9ucyDfwDvQhP9ssDo2u1kv5EdQJaZWFgU3mE4cedfvRu9xPTH5qPgawPEN4KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQtNdq9EWZviCKdUinc5gFpDTMEJYV3HSUUbg1a7p41JaLTY3F6xYxFwcZNMnarEDCoK6WqgcEhqcMCY41zVHv",
  "key1": "52CVtAHwxGwKmUVujQPEcdGyr5fyLnSpKK231uHTCvMN34GrQvNi82q36UBNDufeN9sAFE6XHaGLg34R1ky4nXaq",
  "key2": "2m2FHzzudhgGBbK1BN31dzVdJQrUnJDmYyFvV349WLeiu1YqNqw2qyToHm9LhvMSQ9xiiWwtsxJd3kmkHK7oUu42",
  "key3": "3FruCx5ZiNPY4i7VGWQ8d4bnpkBQosm79yJCtpYin3F97iphnqj2idyDvoT8WquWTEGhJaMjExJVdDp9kxV9gRXE",
  "key4": "3yoLLLgiCGEaNFHspn5kVX3kkvmNeMeL9qKSKPSxNqdQQt32Uq9LB9yuXSzQYkgW4wa2kLRQSpAP56UHLQHZSupD",
  "key5": "3Xkj52t23zDake49JUdEhGHVyyomnGxu3GremBoKAUr1HSDZQ7WrVFc4DXWTEZcDzFWgBAgYoqCqzRcjaFVe1tFV",
  "key6": "2nugihERcEZ87p73uFxFfBhR37MZGJZy7tEovcspNop8N34RLK1LJTSimLtVC6CPL4D1tuQhRycwSEyWbAAnkhz8",
  "key7": "aHEE6LYbia7je4iyaZyZBHLQZ4d3cgTz2QjQuuJ9vkc2TuhmmRKSow6n8vPC29sW5YGSBz7RUYyGiu7xcvb31Mz",
  "key8": "5qLQVUW4ob6fhUX664ksvo9rXuJ5Vy7acAF3FaCvbUbjjL99ug7Ti3rJLffLWMhJf2aw4WpbC2iugwhx12KhKFBb",
  "key9": "3neT5kuF5a9hdNomvETMAfspNBBrYaBXPTR47HxudD5884tfWE7mMY18bF31tzU6Fg3i8wAFPZ1wVkpjbXe6CBwG",
  "key10": "7ky1nqsvb74BSJJv13atRCHWFi8NE6vtAifCzfJVxMhKJySywkVNPDm6rdBdMKbh3J9iHKc39VR8no8cfsj9QEG",
  "key11": "5uZc7d6KDQ6z7MMEYitu5cU6u85dGT28Xdie31VEt58KZQeth9J1YqkDaKBTH1LUGC7GZ1rWQgc4ytaVSEjZnYZt",
  "key12": "3r8APE8GozXFivXJREZe6CNytqf2daxU83aZLrmLkAqz63YzDnN38qf7xRUNaEV56howgFGKjiGiEKwkZWDEqNZH",
  "key13": "5qsh8KAVqgoFYvDA41qhKsP8M86xNoMZSDxvk9Gnrnwm61gS3b4NHVWY1XZZweD7Lr3dmSoiT4PwHUX11p3MMwYk",
  "key14": "5odoqPQ5kXKFEeYviYdC6epnoV9qpvsgpRkFLZhvQHHEuoj67W7hhyy3vgpBBnZVDUqeDnS2a8Wd1M5EgQAMePCn",
  "key15": "23CenyA16CsS9qGXZZDYDVnVde1jVZH46DUZY8VC8ZkyDYDp6rmNsFAqnGc5rjrFRPt3ye4jBjdzEhTurQGNq7dZ",
  "key16": "ohSYesaGNNQoJgey5j4HZE5iXQiVZwgVaTASeGbUF5shJZJQRmH1hFQ8iDjvhdah8XKyaBQixc5XdFuJBQWHAQS",
  "key17": "3YJvh8XamMHtgZPBhJopaQ5FFQQ9ZPVxhaXBXWeANaRaV7UcdLwfwRPemL7gUY3e5oCGvchBvkgnqfZjXXVQZrsa",
  "key18": "3wAocRGr3yMJrPHqJFR9DnzkLVjrnUMb6f6g57uTW58javMpPJVmkXNvN2KBY7RCXSUEd8yvZAN3kC38ExpJGPxT",
  "key19": "2UjsBPoE1DA5Q4Vp1nxFsERj9pZeujpGBBieSQbGMWurXkRt3Jxek3uRF6zpGgRKF7xcQNLyVxr3mrauQT6x6SJA",
  "key20": "3Lfx1UVhenBYPbRQqARxnpDs7E9Z425JKkFHRGtvvpd5LGgmyzi2KpD8ryCuLDBBmY3hdoUKuCoMS4GD6Mfirpuk",
  "key21": "4ZBHMD9zgmQqb8jhcyW6F5HX9faAyoJnkBxpFpzFjPACS3QoogJzEQ2akVuWvUp178KX4Swyrc3q9mctvmLY2wJz",
  "key22": "3vCDSMNBQ6NAE3CPGkpmFrx9uGFgdTkb14gDXHvz9JcMwagKQtPepWcphz3rNi42Q1JDjEUvxZq74Tk7GQMF6Z6v",
  "key23": "2BVgsLHjv9x8ExrpZ9w8bJFXhTX4ynPN6QcteckzcsAhywUHkGs14DYknTc5LNtiK4AXJv6p9KvJt86KRgZUjFKv",
  "key24": "21ZGGqMoNKrbzwgmPqyjPp1us4Qn4bXvUN9yM9UHQ8JCEo7Mg4T6Khrfo7i9N9ba9VWf571fP3yAJk1BVTNSKtcj",
  "key25": "4NATguyChaA9fKXAm5YAoPhuSdWPgPwDwARaqJfuuqrB5w3jhAu8Hd6Y12fjiVLb1aqTqMCjyTL2rUCi1xsNs7tX",
  "key26": "TmsxTgQJjBEBTDcUrwdb4bLQZWRL2UH6dGGEWgkLaweToXB67rxwavWc2rnmYTqLpVbkBvw15r5H3YAyZmbpqiR",
  "key27": "qqBXF28CAg9ZeFGfMygddqefRWrNoZsGawAVCAKdbXCeMPKKWLkbLekeQEU9xoVPUM7A91cQxkpRQ8ZRuSzYxRJ",
  "key28": "2uKh5pnk1bmjomQN1oaa46pgHgpwbXAZJvQqbao1Aw2tc8TQrdxxJm1u93rpYGdFtTftWESfr25BQzU9hketjrJ",
  "key29": "f6d9JJSEYic9tUXVg9oF2CpyYamem1GWgRHNnsz2uh8SqsR9xvM9J7gitqfBnAg4mTWNe66MtmWdQHZHXvzG5ct",
  "key30": "52TgN576XvR3QdGV8Wbhrrr5GSG2z9zurZdonf9bruG5YtnohxWwCzmb2HtNWhji7LS2AyohNdxwxNPM5Xcvdage",
  "key31": "GzqYYzGcfCu6coGswwMULHLUJXVpEiCvkz7xEGbZpnnWrnz4GmQ55ZSXjVaX7fdpo8bHYnfHeFTVyn9YJSQEFRD",
  "key32": "4DAJ2yKwYrN3gVy8Z2PFpQEga9hacSQAR7vpDubA7iSTeiNf5KF9BK15UkpJRJzXEfT9DXGxNi5a8tFLrhbUtAcY",
  "key33": "3MPR21fso79UYuWrf5RB4igHnZN7guBKAkMrq7TgGDV5gtaUj1VVzWKfphdqKKqVcnWyf9LaUg4rYrNi98hS3cFS",
  "key34": "5D83s27t3K8tYzabbrb68NKsKiyNodCYSKewjyj8iNNsTViqNhKPAb1Bp9fV3HB1aBAmtRkUz4P6eXC2UhTVowaK",
  "key35": "4MH8P9g4WtfdSCi99jajz7peReCALakDmscw6JFrFaCVTX5hLWMhWcJokg7dinFqY89HCqgk125qsYjEFLcUd4Ny",
  "key36": "3Tdqq8sKFJ94PyEW1rZAtymFC5Z3YBivmHNGKKAkTGZryFeYjJXEFcrQ1BgU4tZjEZBYxHjLTK2ZmdouHzZjxeaz"
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
