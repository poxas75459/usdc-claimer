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
    "2SsToruNkYLZofW9F7sbwGExPso4PBxfD7chQKZeLTARqzGrfWM7VK38keNvq442GLjyj2BgQVn6hxguBcDmqiMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3appHe2cCYJ9GVoPDGPhTDAt3xQU2NAGB5ZTHknTRe7KCPhVTBWfYKqs8bbqxQVrCWvHa5rfKPC6S6d6NXakAAYw",
  "key1": "3j6XHXk6tPwGiJoRG9x1ycNQB1na6tX3rMVUTJV2P1q1NSfMJ49nGPgnSZkS3ThB8D1VDKz5uJ2Jaa8tAdxQbr9m",
  "key2": "542ST1TuKY9oSA6nE8N7GFtBPMS2qwtGRJVwVjfFqUkre17wsgwjyEYv8sTgFEBTwr7mu1DQSPqVz4bvMiYfyenG",
  "key3": "3VSCBsx95h27swHGoT9GSYrNEUB4obYRcjAiwnzqCHrL8nHdfN5ac5FBd4JpS3uCMKzmk1gSSYvvk9GhJGWgJp1a",
  "key4": "3bf7R7Hf3xmK4bMayEwfYkZHu88MvUiMrxwcYuHjp8vV8TYXHsgm3ymu82VW8nvjh1eZSaHUPYyN8SJ7Di9VnabC",
  "key5": "2LXoHG2SEUE3A333bjQ1oXyqUBnL8jqY5farMUrB4PqVEzAV38pybMh7aYcs2RM4FYNJGZBHogGuEEsu6tvUyPTp",
  "key6": "nz8QUvwjDVSjU5JVvnUXMiCZFhRoM3n5ajNhxFoSBRW8GaiXRgs2sCY1nYdwM7uGTVxArRDbUsoBmrEQBxn9A9z",
  "key7": "4H9LjBKByq5a7R4sWYeskwXB7mqyNXUbxtjKWE3v1Zmqt4cg4FbhYrPTLSAhnhgv4yQLtt6h3myVm2XU1LzHEE59",
  "key8": "xodpTXEA3Zn8YS9Tv7afZjRZQLBnA2Sc7oZFr1W4QRrz972guEpupxphwq4qNG8S5mB5eAoSowcbWQ8kvc9zALm",
  "key9": "4TVXajrgaMR5GAHBCGCxmsumx6oSnYo5imo2Z6WoGfXpt2oXpweNRpumCAzud7W7VwwyVBDyqR5R8XEsDW8gdv7n",
  "key10": "2AZ9oSS2LY96imBLPnXutuhvDBpSLe6N3VLrYi44vLaa7wDdBZkAz8BcrYJrX4Fujv1tuLzmLVtJ2DUX7d44uG5q",
  "key11": "5BwjATU17CyWEH3u9ynsCsfTS3QcWFvpfzFM6Nnu3Cg3aJvQnpqkRsmmb1FEymEiP5pWAncLpDVLDMGUMm4bEydS",
  "key12": "3Tyrdjszi2ET89hMB7Zvu3jJZZ7Vyd992n9BMTJ9oHn5WKifieqsGrnq6hZNS7bJU42etZGYPhefMGk37BjtR4Wd",
  "key13": "3aVnsaLBgoSdie9v74vBiCfvLrxJA8mr274uJtXXnjSbCcrFboUjmumB9XxHHPVsJy1suy6nVvocnXx19twMmeAz",
  "key14": "2zwHNsKRR3SrGKibnxCYW6izVkyawAYschn2jwJLUzayXVFv25U61SEBL8HnxNHCerx7GdbeGqU4KD6ZBimqgMfK",
  "key15": "4XMBkXi7m8izZhsr17ZGrFfqfzv2KhDdJdk1ygSWyTxmCPC41YmTBw3HKjeaCEThDMQwnp1iV4b4cwK61tT18pJb",
  "key16": "4tEiSCiHJdPWTct5mf9ZW6JC2ifhBLfGYvpCAUjK5tARFHzj7kot6jEXY81UzRRzshePpodPLeWqDxxtoNEphpZH",
  "key17": "2qcHdsgDVeW2eerSjLMQE7F8QSeFZg7hacCwwW8cX6jMGkeNrURiJpWcK5EQnArWz2wb22RwWsWHSM9fGV3Qhrsr",
  "key18": "5KfXJRk9NLGEvRpZhdNfAGG9rmR5acPE2bUDXozfjjcUAJeafDSbb4wmwfhfxB6THAwjufhSwK6buPJsP7HaN4iE",
  "key19": "4sWeL83gztnDgcazihYdeDK2L9n7GdDUTaHJxvFPbr6cbTE7oX5NREnZGErwwF5bbYvsDpcDUaft22PJ6Lrc5f8g",
  "key20": "3P3U7GAsZfFC6pbqbZh6TuTxfGd4o6y5CRGmJgoyAcT2hAnzjEa22pNvA7Ketnhxjic8kxaNMWa71zvBtG6KGJ7k",
  "key21": "5CjH6CjQFyPTkhNaYuZpdXZfxU6WkdSHuC4gNg8k8TnzsYze6eKrK4DdGbcdLh5ufDiwbESpXaN4v7hFEiNcUnEy",
  "key22": "3LAezxQtxMimYVDN5Cb2s68ksCNdqUvKC6cXKdzQeW8yY6SHvduX33WfMUSnW2GT8dishgUnCyUhAsxyZtwKqBbv",
  "key23": "42zvVZQVf4d5Dv81P1SktaiiaXiziYnvbAm8ydiB6Q52cunmJpXtxaVcqKbAcZmfRijgBZwpqg3RK8rhFpFZBDgv",
  "key24": "3NCh42Zedxw3C4XzBb2AMVAU2wov5CU6fL29jkyvarUu3fU4kbstgmiUNdmWAAdgpwGVU1rz3jQqyfxCqLCYPvVd",
  "key25": "4zAZtM8WrDuvrJUjuaHyDrX1RjcbDPS2muJSDfjmpvq9tGqN7rhrvb3Nz9XRsTmsugRwvT6sn6NSFwXtMSyNK4Dj",
  "key26": "LRf2Mntcfy3y7hxHxj5TJcsNKcmFP4QTAPoAUi9fjV4HwuTTuF1tJFwSkL4afJ4pCXQgDB2XGh6AtUxzfziM5xo",
  "key27": "3sjf2bmTHV2bygZ18hMyoUvAwczJwvqRdHiA3Yuuo42kot7e5eQGpVZCbDpQik4jnJWyEquD3R4hXVMFEbCD6X7k",
  "key28": "t1CACbjXRCDp3mstvzjwG4x2isPrm7Jhzh9VcUacdaLAJAEWFfP1pAcY93i6QWPWLdEMWi4iNbE5nJszQhdcDhN",
  "key29": "VPrH2RAhj1bUj4xbmdvtj3Zr3iVjbLDvMaDJwQrEDhMLvjFHcE52kFZ6i93GaKp4fu2UN9NJz4MewopVHaBj2rc",
  "key30": "5mHMr5ofW33HmwNeYYGtK1nZ1B5E47L6DaLhCspY2kuswEEDVKtENRBhJavWhtHMXAkYukf3EsRXJrNCUTSwP6fU",
  "key31": "fZyo9BJpQd3Mj7JfndPBoboG9Cv7BQbC3GLJfeHegQ5gxoJRCNesxEfsey2q4zXGxoVANe97FNVXcfGVLWffbeC",
  "key32": "2tZqGRSQmeFyGZ7mk5fAEy3xmuEhBFBV6CySdPjjF9umXB7MQfQ64uUc3KnkPUwPB2xX1JRriNsQgsVXQVtmnfzF",
  "key33": "vZrSrJ59sgE6NVV14fcdoK7SgR2PDiREqFGEaiuAGkiarmYAdZ6ZUNTLB89UC8zTxg3a6rwW9uCRKv67HsgZKmb",
  "key34": "63HJp4LYMALzvJDahbaUWGSGgAbe4FHt8f4brEb2e8MbigNFYHcS7Cb3qU4B2NQspZFszpJzHfAtyqhNctgAECpg",
  "key35": "41PeTCGgVvBVnwdec5kPBiZCeib4CQrHuuHG4pSBP8B5c9DzAXCkHijCMyWAj9UcaHAdypzrVKp7E36tipqBgUk",
  "key36": "329JgCiRfjmMuPuZ3XteDC5m5NmGLCQWEuGDMqiYPzh7uuUEoQzvWqBUrnWBHi9KdiMrn8mVMid8ahXPzDaFXPdu",
  "key37": "5gqiiPJ3TrzY5csxZBbHYRDG2Uy8ywHK7zwhqtS13bSu46XG6vr8JnGTQ5GgDw1wYUQxJyWpFzChWLXFBdP9R73g"
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
