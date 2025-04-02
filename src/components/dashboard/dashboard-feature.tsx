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
    "5bJ14B9axEBPHHiryyssgBvAAyFXsGMzsLvToLc7of6b89aHXRVws8kHmFR7rY9vQ37piRs9Ea6aVtxpCypS4XjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7egM3MiJWE4xAcnp1Usbm8hnjiHUaRT6vJFJM2wiWWoDNjuQu1vsTLuSJnqX3exUpfb4exQkvazE2bCMSP5VU44",
  "key1": "2TrdaobJBBdsmEZRCBzRVYeMTHqXKkzXcZqTPF2vVomw7cdSeFHCmdPbmjzRQ3qY53rdfGKzqjwL2vKmCq8XK9JJ",
  "key2": "4oDDgqeCrCs74vkNk1k8bGXCmbhY1nZse1KyPtVWmr3RwXtVPpYZZCwv8vyAE52A7TcZJv3WMVUiwncVYJ5cZ9Rh",
  "key3": "2uB936YGSD2r2R6WhQ3wJPtV5FejYCmo4Jdp3s3Ks23P5vpPeYkMjpW14NSAew1HuvySXPJLZ3WHa6DgAoKhr5SD",
  "key4": "49Qo8THpt8ku6G1Bm1JRzMATNN1dLhid1FbDNQTL8BMNPkuPGfqLwWEsiXjnDEssmwNNV5fxomsr7gxjtsVpq9HE",
  "key5": "3cEHc7V7uSH7PkEWsbsCwKwJXxJSqh6UsKAtzKoT3gawb5onvP5PmBwEyhBJtPxxWw8yejf8nFTmRBM7fz5jSE7X",
  "key6": "2y1t8b2pyRHG7DAiubzj7R5q5tyNnT6eVBPcDMCZMeCjn1oHaLw3H4yoAoigvXc7LZ1UN3ofxvNk3shvmBc1dhYV",
  "key7": "DMcTmNKevzVY5Rk1D92uWY79W6x7x84dziKaM9ExdEtz5SYZih6Scu4qgqevydvjgmYCbCW2GS7CK8TzZdxjvmJ",
  "key8": "2YDLxCL1bdJK9ZwbpCX6x2unVTrk99qJPoSWmgrSvqbMqJgbZh4pRSbCox1mN9H9ayPMffeCe9p9PfQRTEJ6yyGq",
  "key9": "4Yt4BDDUsmsWFJMUJPfxGSL55SQ1Aj6GnzNNXEU26hfUdAQHBd8niPZegF2st3GFA3sBu7Wq1d21xseEdfRia1ku",
  "key10": "3e9WcjrUJHEQ8cXrH5VnRuap7pnqXLF1r5ZgWrvYxgnpnBDJk7T43YUinsXpfwhH28UrhEhyeCyZQVPZSjHnrb3o",
  "key11": "2cfYG7C9CZM7BYc8FVeyweWXVE6QEGzuaWHaEBGLx1YQo61Hm6JKPDHTJP1voEvFJiR6q6MdCmE2XD3keXaXM4EN",
  "key12": "5T13cu7KVBUGgcvzrehqFLr3Cu1aB1YbNTZFyRo4vWVzYqFVN2YuqUvyG4iCKbxAMktbdeWvtEsx5Y7i6c9pVuPy",
  "key13": "3En67xBUMveQATrEKkggjHgBG13fg1aJ574q569DabbXhZbnk4kEbkEgjwL6FTvpi1zvuMpWPir5QwAv4whHpiGQ",
  "key14": "2h8vdTV3Jt2XqN4bXVK91FD8SBDJraGTCK1joL3b2UvdWZVWXYxUT6ehW1cLRkr4zrQ39P7AnNY4frSXDTshci8N",
  "key15": "5Bbjkg8WxjxGryYMntHw6i3A4CXGtJd6pMj5sfrLuH61WbDbg2zB6nxH1fEJQj15RhQYrVN4gFvMbX6EcywDHzj5",
  "key16": "4ArVdwXJMfNh219p5TQXvPwn4aDP8XzybbwLAEirdyzmFyjGyUERTP5iJouE9r4XtufkTPcUUX4zDiRb34nk5DU2",
  "key17": "51K7sxYZhc2HEEftECpaVRYXrt759xn6VPzt2m24ExKTjffMDzpMjqZYkfi8aJQxisPcwijkN7eyJfQzBHZD5G27",
  "key18": "5eBavRSwFb8pHgDU12EvCcSA1BXiHodvQvT7H4b7RekA1jDmuW1VQDMDwTdq3W6f14zBZaXTgjwEQJS6svDFAihG",
  "key19": "2dHTYfc3f1rGB28F5uT2QTQwtF2WYPPCXBkT5o6U43X9wvkdJsmSyQhW8jL16sCgddZgtc9NcJhrgEYk2Qj8z4ZL",
  "key20": "5QgaoZHyo1rCt9iMEWfDmsijSnSLx3y8QDGnSS84ewaVLqFHYZMu8JrqPaUm27J5MYFVKo7FMJNTGY4ETsPkjfjr",
  "key21": "4HiYjUegx1rQ6ZfW8mNPGEnyuq8gEnKP5NtLsGXaSsRbu6rADAXfxkAWHCb61qkCfuEP8hrXURncHczhTX5ZvWAt",
  "key22": "4imSxAHFqMG49hdgJGJwF5FpxeBk315qQG8nYsTfMCtKAJ3jXZbdazXFzCQJ9MEVUDV9tqvaPywvRG5GSEqYL4Xp",
  "key23": "4TDh2qoN66ZJ53AoB6uZhaXp6GtwMQu1Nx7NbfmktY7ggRyGZ5c5EpxdPeJiEV9nctLXkJuf855thkWTPKX1y5Ss",
  "key24": "24e9oniPiCuqNSJW5pfn4or3wHVaSgvL1xTuNBMiS4yrEstWTPS4oJiagBm5v98Gcmp5Ed3As3Vrmg4311urC6R1",
  "key25": "4QF9UXsVngT2QuMCYfy5Z17m4McMJrNHGP1wzenJqaUEWu5737fzVSF7cBbtzEri7GtLHC7cKB7pAjZoDhzMJbRz",
  "key26": "e2BtbWkVW9uXHK9CFqiE9aCh2eF6tyADHqcGNzPjbshAkVBCBeUbp45RAFKLHRDG3rVi6NWv5UV4H24a3bLbbyA",
  "key27": "5jeFUHRkWfJ7dBHPQFv8YWB8y8jiHKnFbUr3PttEcmgDGKLxQsy7tGmGLKih4mLa4FwfHjvRWmwxvvk5ECMnhKta",
  "key28": "nnfkX3kmqh5xFoGngVZeEMwUNCLGndryBaTAoXUX9eJrFuMKGNnezpxoTac4oWiZyup2whVNXqYHWVsSzb7A2SW",
  "key29": "4Hjej4bjZWVE9dSb4GMWu7pkXDpc4aWC9yjDJWVgvGaycK52b15hBxDCfLKtnGhi6dG3BzoENFbRazHsc7emNtK",
  "key30": "3ZphbztKt8eZSVWpCQ7B1L3eKbfQ6kfkytJs8dMSHKDTFJ4xEij3HKKDPfRNtrm3MJ1K7GpRgtGi12ha3Gjfz6K5",
  "key31": "2cpxsTnKDGoeGbYH5EY8HELtEesyYBfjeFq4zw48XR1ETN27uQ9CRCNtaZC9uAEbBXwWDgL7XpmLEQ4b4wooCoEi",
  "key32": "3cpSNoi6eNiTKHptVq7SNGv5DTfrcTms9szCEW7kCWp68d1iF3ruVnh5CJecZULEcEFjDnhmbt7kLXU7zN39v1nD",
  "key33": "iMDkbcZBJNLJGCAd9yD9Mb7ED96GDJHdBBW2oKxQaAi391FFpS9n51B8YoUotGFzhdwCe1rqErQHAUSHyqoan9A",
  "key34": "248qmaXKindDCufvJC59rdZYo6c6ovgLC8DRaXXecDghjjzzy7vewLpiDWRkbQR8Y1z8LVdZ3Xrxr23ofYVXETsa",
  "key35": "zBDJcbCZkZcp29PfTNwdrho7hQhuR6r5J5mk5y8uFx52K4TNrW9E9p6VytsuLQYcep7D1QP1sDJEp3CvjZ8zZye",
  "key36": "225LeaJNwfSPhpVv1CFNquhq1sm1xSyUcdRbf9d65HZuTyZyDKgXtpP5Fqw8YWEpMo2UwRG5eRBEaw3USb6o6fLo",
  "key37": "T8ex7GEvJih6jcEkhTPn4ZrEupX77YgnbFvd2yrXRRkRZL1aLGCPj6QjgZBepvbb4EfXcEGDnsumxygQqLwJHYb"
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
