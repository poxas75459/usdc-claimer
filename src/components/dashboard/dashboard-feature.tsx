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
    "SWB9nRh8Nqw4eiDuKNau6tjroAsCuhUkwqGGY2iSahUbzYHqVd7XntJT9Ygzny5QHEYuayXiCZQPdyC9cqEWtr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jA8U1UXGCDvK1wAfsyJngQG4TVq7NbiafVaavpfG6hcqocMsn9kijAza7DAsAA8tGWejZ7W3mcEDgWMK311Jm8",
  "key1": "2KhdrAC9Topav31Erhh1B5qnKVKZMBd5keCRSiwFYB857K2QR1MTRQHHrMBVAv8sxNLyU3U2XdmZrm5miqkrZQzT",
  "key2": "3UVorFNVeAzRWp4CtyehVvZHqrSp7AUGxngTMQFfStVtXwBuGkWzGFQMPsWggxPvw3qgPBbZnRAvehsULp3NDcjQ",
  "key3": "4WS2HoBGXnxZb3AcSPzENkNEp1wN5ZByHbKs5Br2MkqWFn5TBjCcna3WebDPNzgudLeAqp7BkN39PSQ1AqSuWUh9",
  "key4": "46Zso1rmfJ2dnGjQke2tdc2Bq54qbFioTLMzveLDWSKtmPafgKKQXkVmqBJpUBuC3XUTcQAepNrguQ5Ba3kJS56h",
  "key5": "5wxuJBY7XHGrGWtuwzQHid4GCh64pvKpEC5a38ZZPvyZXybEAvbDSe6PyAzPxXuaWVeqtyqCkrHdE1wZByDZ9vqu",
  "key6": "5ebP9CEZVPKxTUTSQSJGbMFTnSgiqJpgvGHZ1vHmPJvFUZQZ3zMg4qwdDXyA8cB4t7UwesjmRvUCiqLyfn9fbhns",
  "key7": "4qDbpGYcmJGpPj39CFKka26WjTqER8sFsin8RrnuqNakuGHisLgAUncUWeypP14KLqPGXQSTT4BiHV8W9K8mJWnf",
  "key8": "5xNhi6apSPHgmdQ6DjqnnU67o6NJgt7M1Uu8qVnCK4keWWQ7Qyqpx574QNXSW1oiKtQst75QzhYkAW23RFcQeuxY",
  "key9": "9GaG5MqUPtBcTJwyewePKbLZhCfbBt84x8g8Nk67YSoEfLueknpNpL5pSfwFc51gD7Uuqcfkax2mgvvPenUoU33",
  "key10": "5SPAeu7J2JCYvfrsbnMgLV9rmHgugNNMhVcUbPUsyDxEcSLFiuMuZVHr83jZY2jnk8i1imoMnYLXTU4QcU6uKThv",
  "key11": "4TrMHyZ8gxi1gxRqVBzJYSv5JwYNQ4tSW4knjdsty8XQiHkzdLbJA1JgAEvZ8xoYyGGPqXLSCVRw7gdLJWAdWtRE",
  "key12": "2cvwNih9myrvptf9zB9nuV862dX1BHpGGwFuN94LRFNzZzUAvj9DoZKXKiB8YCtRdEoWKoTMtHhEoqxQtteJ1FeW",
  "key13": "4DFdq5LYPVwHhGeiRzw2NPAAfqkLKP2MewPqmPPfhUySaykSx3bVq6v4cDGWacC5Tkwf2pm2XacNQrf8MvveKwnB",
  "key14": "3af8mBv5HEwVVnCvV8HUoG5L3SUF4PJRDizqtyFkmrhxidnJC9PwDBgETc4F4T95d3RGpirJYVtNuYURyYXkA6bv",
  "key15": "9jR4VWUgNmXnuqYKLWkuyRvPsb7LxQ1X3ejGAKoHyGCQPH9dAfAZsL9kW1sVbagMaVbWvYmQgZj7qRP5MoRBuKh",
  "key16": "4mCwHJJb8H2oa31dGHfDF3wcmVnyCn2mZbiQL546RJdRC5eN4utJkw2hytmeBgsa75z4fSD3egzxiYjJH97vrfRr",
  "key17": "2r1SHAs9BGFVTGUKoSHPh3t93LTWyGsbXZGBja7UuLdR9TGpywiXeQXNumpuJnydSvzAmd9UkgTvoibq4qNnkwd6",
  "key18": "4azeHeGaxdVVQviZMLthYKSJ45TeP1QpKi7XJz9M1WPs1a7YoqCkqmedKfvDQj8wnSaoJs1RxHbbezmMDuXMGeLa",
  "key19": "67K4jB7xbrJJRwomUXAFhbdn3grVQfCCwwURCcJj4GrR7ksWEMDDKb42hGBhsaKVzRbA5RkVSe45uDoCeuvsJAfW",
  "key20": "pgp6eZKcrHzTUpu9ZKM4KzU9U2k7nmsCYMvM7WRwXfuqoZJqq5niNW849xuZg6AWha8WNfBfpiM8a4LY13NyN71",
  "key21": "5L7JTskhNp9i8otk5WF8sqW4fBrPKm7vc8vWJ1tqJ4APuQSoB5WzREPiugerEmaNJ6AeKrBAw5MU8oK25fmLj2oc",
  "key22": "Wztc5BoGbkmfKyUiDoABncj2KKB9JcrAcajwbDYQfntW59QbXQnDSSbLQUS3t5MMi8UdubjdM9acCr2fi9WyKs1",
  "key23": "39aQGL6zQygtfz3oCcjZCv4NnZAFEd5vNAXCvZEgYzQFPT5SuB7FyEUaKJcuR7YS5nFRz3fwfiBiP3fUmZnt9CKK",
  "key24": "4yYZ2NG66P1sBVtina324xWDNvmNZ8Le2o2qrre2QhmZn7NiZewcwuN6BQMM314q9djuGYgZh5Vivd9tGyvJDopd",
  "key25": "CfFNreu1Vj1tgcuLo42g68UqKQdXGDTo2s5M1BndzJJDuQsZR7QSdbkpPK7zeJ2QYQuXwZJgdMQPhWgXegjX4QX",
  "key26": "2GypCwYW6KdrEr8aUSXnTN8UkBui77Zd1qyauRx2VCZNRxfX56xn57BMU4vr6nREmSykzH54M4T5vZvhMm9vvRNt",
  "key27": "3mqzJP3Ymw3muKMNjjfj2Nd4nBEWgSxPh3gA6mh8iU1drL1VfBsj89C2GWYSuBgpe4cDL7dSBYpomifD1RGW8k2X",
  "key28": "3ckihbsDXwDwyzyVotfPiMGnYLMqkQQ1TycQ97dm6pRfjQDyZkErMz67SezDH4jqWGqL1MzeRwvp8RDGysnq6art",
  "key29": "536CgmoyZKB4TPeLjgqxocMf1hPuoufoHa5jsdsfiY823HJgC7kyVVX3reSYFttrvL8sDbc2ng5YSPxNrgKedyJA",
  "key30": "46vDDyZEoEYFTbabdrjf5zA9hz2ieNWabvpJos4iw9ahxZnJsfzuLEt45Pz9ogMj1ERZWnsqd2WZ5WUy2Ee5PFHz",
  "key31": "yRcP4sjrMPwgJSYZcCs8C78ivz6ZdPdCTVmFLttvwf19iSAnNHowc6pdUwmdZxk56nLUM23dbFDAqvi8GcY8Tri",
  "key32": "5B9u6yBUALh6HciNKMVoCMhRA6rmLacD2u9Zv7WvhNUgdbVFhBYqgpTm4NbMA6szsEgANzmxK1xt9RxMXPezm6LW",
  "key33": "2zVNbsCw16xRznVk8zbZuqRNK1cbfrQaNL1qZt39foDuPdtkAu1ovDaLVJq4e9wVGU3DSo1uXP8BoPPi56k1HLWj",
  "key34": "4Ucmxdno4qZSXoDPxAZNrnU1o3wcFR45Rx6cnTqo66WP8NjSWnWf92XC6tq7XjGaWEwR7iwNNDFFdKWPXWuXCA6f"
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
