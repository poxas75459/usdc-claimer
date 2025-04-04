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
    "2z9pWaxqJ2rNtxRpy6phXT8GaYzVCF6TbgKmyYf9UaYqeMg4Ygtakk478eJZqno3yNPt5xQPr2vrrUW52vxdxd7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3YjSpvBVQo2beRVQxaPDNfPuLxqjgo2RojRFRrCDK7E1gJjhvkRVgaQZp6AAxJHBzikasXX8mXHSJdmpufBXkt",
  "key1": "63xe1aWmwoe4CEsWXEdwVUBqPb9H1stV8TA8gi4a43HCFsKHWUHnhJwuvUmK9GocrRsPyPd5qPg1momE2Xkh3rSZ",
  "key2": "4FUugCGsW8dWscGSPpg7s6AjUo1ErWNgH9Enc1eC539mgdKj4adkRpFaTGw55ddiYBiJpR4t86S2Xi91vRWm1Li2",
  "key3": "5hdfnEi1ztaD5QpGy9n71MUSy15nVy3upFbSix3WQWfaGciDinRwixbWxZkf68kMiBuxj1Q89K5wSJMHyoQeVFhK",
  "key4": "5HoWtxGRSFjDcY7VRxs5iSNdJiSKwY1nUV27kDYFgZ4a19EPzAzwfDJGfqYawcL2mu1NfJPfHe7iauh5XGz67CcP",
  "key5": "4JH74cS7cZvY9xc7ukRCt24zFGUZZGFUtYzcwXN2WrmqR5m4HyENor9VMXEpyxy9t47WiSMQ1RxAeueFDVpP7ghy",
  "key6": "27ZbqnBgQ7PSbvd76RNUStzNEzqFyJ35itQ1FWJQP51oodw6zVGG1UFryob9ccnnKRBhhuU6Xm3iBuGfb9icuiMQ",
  "key7": "3dMS5wtTkBF9A2PUGoytjTLAYpw3wAT1VdvjhGUrqzBbF4ycYXQCXq2k6eTcezvpwn27wyEC5QLGJ5CwMRzSmF4",
  "key8": "4xGNckM397HSodKC39gePUMZuAudRADtTicM5MUSxaELsPFEcW6b877YGzkhYw13y1SAhE9xx72NYWSNHnJLyqiE",
  "key9": "2enVYcisCaHEjSAUUJdHCAWaY18V6mRBhvyhZSadzF56twwkBQ6pJaLdfypfkEfqoftRoXdy4g4NpvSyKCzSMSxX",
  "key10": "3JqFqTctWz2jrmkYj2iRbTVQsB925yVxsTaVRyUbZgotLeVBYip8BKM7nXb8nyYvNGWE5BaaHRDjPsV1SFgzEr7c",
  "key11": "3vwytAac71mGsqJa2hDwaUwYmR1jcPL1DnpTYF5aJunArx66yBLyPCCGWTcY7PVSpK88GMP6vqFsdFN3enhe5v48",
  "key12": "3uAVPyg7ujSAEtHbQMVcgu7dNtZH9kFHt3399t2hsRxWvUVqLkvocU7d87qoP12QABt9tdjkvaWY2SiHhvMM6nNQ",
  "key13": "NLjfnEGuZbQpusuDDDVgQgZZB5tcY2FnbVdjB7wowfhQAyGa1wkW7NYXB39DuLAad2LqtfPWymxoU8U6AgshzBn",
  "key14": "35SAjiet6z8xPFNLYxQfuRB8YBKzocFVMRfDHn6KVxx7ScG2seYjS2zVGfh7jxcsqzMnqWLwDVFJHq3Yndhosw3e",
  "key15": "mCb25ubVbsmtLp3Y15Zaz5vaogZQaCKLbZhEs4yLmqq9vVa2zU8g3dSesnsHbS1CaEQt2V2SUiiJtUzjrd6niFv",
  "key16": "4gx8eJcoac96W75rDQGwdyHQdBMtH3JXFBCPVxqBae4ExnAyYqoFfaefnsAwyY1iSUHoKMSPQiFvEwWZHW65sVCP",
  "key17": "38gwXUG6R223oGzFZXAdgvjMZ8PEg72u5NNLw3NGX3hCQ1ZqvJdPaszw7abQyDni4CEivCfLAwF4e1DU9xZq9Vnx",
  "key18": "WQWJhbEsqLHEbFERc2Sg5zyPnYKxL9tHXBdDvqjVg8VaAHW5gEGwJx8Kro8JrCG7E4bsxEaheUXFggETJdXgwq4",
  "key19": "3zye77bSdyV5uJVEv9Zr6WKd4Pcrji6X77xGKTqbFxsrNiAGveXPNLYsEBsr96LtRfE5n7Nf1wgMxo8T8MqsTfM",
  "key20": "37MJzc1d7HhH9if6NLUF692W6hmQurpdLk2mV6pL7Evq66UDtT3vdQYKec28qevEsxNpnbw4WYYtPHnfNY8N1P4i",
  "key21": "3Q6M1QwSAWCVpViUzMgCsvfmfn2o9GHvarjGGg9ZrWiRHcyLPRMWxcXv8dAJMcQGYetpS5G6G98SnYpMULZDAnBA",
  "key22": "2L4DAV3NtKre5vUk6j2tSVESAd1dGCqmA5FYFya5UyfHsVpjKCZFyFYP7h57TuRBfRg4tBiq5nkC8AzRYyDpEnXJ",
  "key23": "3gaheTnuuyxYtyb6zz1zBoaszN18ZghmBijrm1trasvvmdC8CBetvG95dDuc2UmeFhrjKEKv2JufjN6zth8i3WTo",
  "key24": "v7Vxd1sxCpj6dtG7kbyasFm168BPv4f4PdpgpexkChdtWPVkbanDQqzZmskrF8L2c1aySuzdm65qepoXhEfM6L8",
  "key25": "3Q5NaUckkvAfXozN6JJD57pnnhNhJfAyo1pDECFbr84GcuSXa6kkGZnbYBMfvknD85Vc9uLSNwFczExGnu9VxXBc",
  "key26": "5ZXtw7JurMczotqdMJcQH3zXwSgzM7RP5hKWqUShQZREKmUJh5YVoE89chcnN27fiM7erLz5Xv9txdUoZDDyeGv8",
  "key27": "4HkssehytnnFzqvV6yLR8WCFaEhvY5F7SCNtroM9mRiFEPvujXsMbsXQ3agXqP1Bo76R46qeKPQuxUQjT5a7pud8",
  "key28": "2Crb9U1jJJPy3y8eNS61cJ69Nq13aoBbvXd5P46Y91dkdzFa4ccS8VvX2K4c8CeauTJ7eLGdE1JGzbebieKPtbq8",
  "key29": "2q96UHoPAPY51JKZyAsjkzKejNYwnzLEw48469nd9VbRkjTGwhBRHSsqwkkLQytVxM6YtcfoYMx9d52cbhF6ZRXx",
  "key30": "tCVY2WdiLejdkJrJQ3oRi1KfhxsmYBDdDJE8d8zo3CGSXcx6whgwRB1HpmaMTupkv3vZnvGh87v2EF6Uu2YPVZn",
  "key31": "5HRSWEWRzKSg3YYbQw7kVF1EwP9qkUkLAuNcYZs4b25vC6GZTfLHPxy1qXoCfhhdD3o2hRQumXxLr7ZZiAvFLTsk",
  "key32": "2CSiPJRYhAvaK4XZEgZZvhmcZq3HTBtz6XBBP5cssvWMT3QRz8byx1sPXLEjjMK9R4GiSWF1JXXgFPP3brCBjxyt",
  "key33": "LU4ew6DvNcXevRPU9rnZ6oRiCBJgxy9fHoAnKXix6pAkPnFsZeprMj7hSpJ8QhuDHtLCnvGHD2mUELrgnQMJryf",
  "key34": "62UbfkqJghwrBsuD2GLtoCszaCVFzjgMu4jQWqAXA557VaeS9e3KugKhz3JRrXhAZjfyi3L13MFmFmpWebyUFd5G"
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
