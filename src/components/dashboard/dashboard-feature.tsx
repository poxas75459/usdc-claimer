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
    "emEZPt2CAKnUdSosg38SW2Zag9XA1u6KPBa4vW6AgbBPt9h8cmAWKJQNS9v5wbrXGpoPkLA5ZuFmRTdyhLXrLVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENxYw9sJYuFrcpVQSgbrRs6amx2GjMFh3z6UPck1TsoK7MptSYqDt1uvjDoHk416RDU59Y5QWhLYDDjFUpmfyyk",
  "key1": "2LkEm7acZPGLTr8mD6A3LJSi3cReAi18BoRUd4H5ap34YtHRXU1Q2vJw7acvMRVr5Qbf2CpBaSPFWUzFcgG5yBUG",
  "key2": "2cJqXsfpyfuvipqNMXU1aDQxdyaMmn9bm92yDveZzgZzVTFYxWVXucGjCWyn5BqjDQGzDzz4W9VHQf5awUKXtdSd",
  "key3": "3KR3GBrA4WXJhwnWn9YUEFt2ReeKEpmGThw33TCjesz9KgsWVJpxtV99PSQYszxTbE7j7Kf1fqv1u8f6GZAjjsQv",
  "key4": "22F1AHZqBBo5L4WnxG7B155aC49k4GqQNKbrofPjtPpJ1dmM3K1cCe9Y6Bbcd2Y6n8E8gkG8h1G1btRaurWMV8uM",
  "key5": "EHYpgaY3xBEREKxdnFvUupWGd77xsd1SMvhQZzNB7kouvHq4xmdGwQVFoSqmAS2A5fVpuRFSz92FLL6zNwWo15T",
  "key6": "2YcakzQpE8TJyhBxgakZ7J9c91YFFaBx785XF6Pf7rzYYUQthyQzuiecJpkrbMXgUkWqwrNhMvvf9kdJDrFj1znD",
  "key7": "63Aa27p2SPKYjF4CWE8TXt7tAm24j8LrzSmVt63PUdGeymXSgYYU35zCmT5iARR1jsN9zrhr8zGxzzyjzEb18q1z",
  "key8": "4C91tuXihbKQT3qYvJp12ZkPZhYsm4MHd5HCdBGgVmBsL3CcLLNqCDgiCBUjuFxbseB7xrQcEnsDUTnmsp5Y47YS",
  "key9": "SFtiUrh3V3keQshRHBEz2uTasKvP8iJzEJAup82yLVYgVziqL1L1GyNoAXZDTfpJXYj8BhhPBJJqSgZMsJvAP18",
  "key10": "UiEWX3VqEDfXjQS5NfyQiMUWJDj5qjV5CzfvsDtWmigZW6WaKjiD6bYt5XwdQJSSomUuFkW9Db2EZgYUbG16RmT",
  "key11": "5SzNhcCqkqguCGg4b312d7dCtXJiCKMr95R9C2b64NJc58e6x2QcNoe5npbz5nTrKbZtvcZZ9CeDP6dgnNsRk7a8",
  "key12": "3eWDdPVmQ3cQRLS2WR1ywMXkZZaq4vXgtsnMYUNjT56et6izn3WF3eR31Q8r4JtGCufCdQgp4CGuKC3AwAx1Wis9",
  "key13": "bEEBfrqrbfgbtDTrbhpxxG12mP5a98FZfk7YNabmJAado3kxitEG3ot6CL3tNCG4DN1JHjxXm3PUjQzLxpQdPb9",
  "key14": "5wr69SwTuP7Cnp35GNZe6DATVzpSeQvUG34cBvyKWc8EkLVv1XoLdMsqzSLAmA9vDkWebsXHbbNddGAc2sCy3UF6",
  "key15": "Yba1ExQn7M1299hv64KF8dDdTHBG87veJ7eneKNgWT5bHwjMPAURonnwMUqp7M6PBDVQdB4UyMbU9XWHcnfm8cH",
  "key16": "5VvbQ2t3jhW4cnWwKa7TNYZ3AGJTdQF9WZNSeMvBKmK9o7Kvxgcc6Sj79KED9mQF51yHmMQAgxd7aGxDPGKpiBas",
  "key17": "3Tk289zN9L62f6eyYYEYNvVVaJrwo56gDfZTU2yAo1tC7hxKLfs9sVKQiuvbxG4bT2dq4R1kyrgE61dcvEcdDRmp",
  "key18": "2vhJ9dpiM3FLg4gTxMHZwaRSCWD44YAU49P54Hamfp9VuVRhQu548kwafUjyQGEQrW43hdJFwKCLrxaJQQyRT8zy",
  "key19": "UiFraQ8UrDyJdSQowe6bVZjGJrcj2H1VMUa6dGshY5CdvxXu7pLz4J8fBmTdegn7HmCVtUic617KiHfMgTTpkot",
  "key20": "PqCowN5r28GUGCitMKxnUgxMWnFGgH2cXuY1FCs7LGCC1dx37tMNiaRD7iwdzePJSSwhu2xHsYbTiBPu5kgxFV4",
  "key21": "u3as9VrDg44Dp178DYasHZ2yEyPKcii5HkwacnYS3j1qkUmWsntCGaJJfAZk3hevWwy3CWJdLNVCyr64TEkxouS",
  "key22": "5csiszxuwusNgbhNjcWtokNmDpYTCy3VwiZBnYc4CNVnvAwhGG3jEQJZWm3rnwunDxQp1XUvMQ9YVCrLYkJgJq9j",
  "key23": "2SeeREKMovpDzf6koApjtxK8oU7CvgGCR9kqFMrWQruwkjWU9pvvmNfKGToza5WKcGtvEVoWZ4NFfyQtXdgyHARj",
  "key24": "4BvN64wom7npCHHKwvkdk2QZ7Hes6bReeAvca4x5R8EBxx2Wbu4NsxRYjNSMRzryM6XueS6qWdFkGBmYxV64kAap",
  "key25": "3PxBbCmDrG8xBudJzRPdKcgv3jtknrXkYEiWb7bCgdrzFCfKjmYMRNp7bYcW1F63h3sJcJgsYDseZsrdaGJmxifr",
  "key26": "38ZsWv3orBZkMgh6hi8jdpsSV7Vz9CzHNPL3aFFirjQY9XoPR1sMxbtUP7VJBMh7jvDkVxjZwWiRAT1tZgSAj4hH",
  "key27": "2YogHFWe5cHC6bxMQgeBwUdpaoHh4hibfpBdbZ8La6yRnGawvwgWz5MLFBxg3FFnCoAMsxXZTQMX9UzHeRBkGd5L",
  "key28": "ked7ryNC2XEkWyVEyKEWrMJ5UEJmuWP9GrQJXBHrvWTZANW3bSBwiBKS3ZnVSWdwgZBUSxs2U8FPBrZrV463AWx",
  "key29": "4mo3cFXYZ1PCHkaTUDCNvsP4tCbYPAqxQUEb7k5XnEPg4bpv43d8G1iTggsEuo8Kp25biMsMavKTpFdPG9TvtfFg",
  "key30": "53zEJcgSGLYcdsQ7vpRqkRWydRiFBiY67JDTRvETkeodduiVAErydRVUe7os2Bf1zZuN7cBrtXWpYPTRVpbGcNLU",
  "key31": "3a5ka9njUQtLQcXDtp8tDrnNKp1cSnur3wubf1mGE5sUuHayxE5t2r485bAeUNJ5bpizPrrK5DSMUaX5akTeZnnv",
  "key32": "NcVxqhuSbLj6DSCg9dEodo7JMRUMTZ6mdwsxf1vTJX9GgAvwBSJR6iv2Wt7WYGVC5bE2P4R9mLM4zzUvxpuzTyA",
  "key33": "3cumJM7cF4PeBNGuWtXESmKxSNwKjpfrdSRHc6wJExEZVyxZKfRdzYafqyRpRCtNw3QLbZhXLJofydWjpj61W9NA",
  "key34": "2VYP1tEM5JuftDsCjA3j7eo5KrQNZ6QfJo2wbfSjoN8mk1c5Pqv7oSdmNuYt45pgEgism1TEFj5bCMcVn6JywWKc",
  "key35": "5eqMZZ91qDDAzzy7mPq5Qee7s171WiLuHGBXUf3t3fscwg74zZTbVgb2jUZC1AYXMkBQytHmwL7TtpX1o3oTNVHc",
  "key36": "53Z1ppTHjaZEh7yv8NY1GRc5xHESsNfNuY9UxWmrqtBUHfr1XntkkBUuQu5ZR2MFLAG4DkAAekSD1h1nRTeAuTkK",
  "key37": "27v9bbLFmrECBEeGr9v61bgvfyxK7phJh1P8EBUgk2t3Grq6sBCZVCPUVEHUJm3BP3UBdr3oPtoqHstWQG3GW3LH",
  "key38": "5uGyYDne7PbuYPFD1x6REArQBByx6EwP8RByQXMFG2CZPtBGgu3xnZFoCBeBdQHqWzMTnEQvFacyfx1cDnqRFCMK",
  "key39": "4AE6feWV7nNQvxJB4cD3Q3RvvRRzodx9XEbcjBfTz5uJ1TD2V73onFgQvQ3tjKo3i2or6g97xSoBEK4swFs75KZp",
  "key40": "3DHaTQvTw49E6LsoXnmuNQ5QM3fLW1fkzYUyxz1xroq7DYXGFLvZecrfvReJCPssGtwyovvzZKw2WxRhQ9mf4PGJ",
  "key41": "5ff8KBS6BVrhtber6qsXKNxKVYXbNYvP3WKcSw4YVaFEABMsoN74ZTzwKUNPJ7uWKN6JptF3fFKrLuMac5H2Wxdt",
  "key42": "62eHsojpirTAQya7a34YmfWLo2Y6chmzkVSCAZ9d9XYxLLGQ7e4DuvvA8JQvz9GumZmKex1TzvSStxSCrRM45WNP",
  "key43": "23e1VXPocJrqiazV1umYZrd1mWFcr3WwegafbMpj2FC6RfPtd9VPvoeqv7gtDTLNTjkLFrBcm8VcHjLUgz9cCDAH",
  "key44": "4asXFAymTAYBtLFQ5gJ6yiUgBydXtX9FgUzzrzULdkdXguicJRTLALcqrZWbrVYZDnnCNxkECcf1ccvEvT9WxYXv"
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
