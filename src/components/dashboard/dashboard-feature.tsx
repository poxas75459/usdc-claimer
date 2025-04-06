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
    "4bZYX3cbnaD1QFzFwGezAQEm71vNtmp6xg6DeUbzmC2cbWNu1UeTEM1at58vC5vGb3ukteECYCu4aQNaRTEtYtZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UCV1W6rTsQUPKRNKRAiUPjntpRCLZvQoHaveWnkQ18ZrMWnQoscNXdKGMikSPAXsJQAFfSuJ2SUYGseocsePkT",
  "key1": "3ZoNNFMiCW4bkZ1odbcFnarmz4XqgTRkAvPvw5sok5XH9D7k8xhJ6EEFs3w8xEopXspF5d7yezBvedB2tJvWiAB8",
  "key2": "4CPRADNDufFtMTi1GVtPkLkYd1K9LQMiBFkrunLwcx8cmkD3EvDJNEhhdPZa2cRqE7asZJXhAJVDFuVvcwxo1hUJ",
  "key3": "61dfhECfikPqowJPdVRsDhXpuv2JLmrEruuodfNDrR9wpWzoVC4sZMdgY3PcxfFCvHRNKap8HoffEKRQCGipZYbA",
  "key4": "2MyhB7UHeaKVAkvakxchmefeSmwrvnUhnzSjc9ssq3TfAxHV48jmf8HdZdPSNzhaD2ggY7h3pBNXwPsXUmZ9T6P",
  "key5": "35bc6dMmX3c4CpiskcDZ55vKMKmjetnq5Ad4eVNPjxRJRrymVxTnhTwN2WQJSZQzTH3q3ANgsvUuZ7zdLWUc3Rz3",
  "key6": "2VFVMhPEouAEKNJZz8GhKi9u5W4FeD2yThC71wNqEGXgtkEbeGxwL3hTUEYam5R9S1czRZRvyHHaNBFE3iZNPH53",
  "key7": "5ca8jxm98NZrNMVKTP5BYni5iotUAkLtrkAgomXtjBBbUFEto51nXHZqCU8neXTLV31o6Lw4aAaq3V7c28wSJDrx",
  "key8": "3SbzUx3wNLDjFdhbcTWyGB2UvpGCX4FotRLNXhcbhic3PatxqMfe1zKXvc9dkNfj7852wzwizGfPjRZ5HGK3cPqB",
  "key9": "5CAJzSjyQt26wKA38oKRz2TDwN8H9PceX8PTw4ncHgK7g2Kymr2DWVBAVUe4NcFGmXwDDhr7TVVGm2UhY2GdjHC6",
  "key10": "5SUzTpagpemQ28HwCeMCvLQvrB5ooXTGu2g8XwVs6jVKn67LEySD1UHQUibAqgajbhUAFVMWzhDUc3494wGgjcuN",
  "key11": "4ASugW2bQaUgbtz75SNj32krz39JLsUu1aVXFbioFbtB1wrmDmWeemnCoedbZ6QoHyGB2k53H93JoRJCELwKBYRK",
  "key12": "61qnFaZyq896bdjJ7VvbCA611tGiqy3vudjNywQe43M3btTcvMawYXDjCjLyLfpDgR7hwA2B78vi1gsFoE6WEPLX",
  "key13": "4EyAgL85CV1o3u7fsZPGQRQib388Z3sHgVNksCxWmciAgcRmB7Lh8jVVwy4dHbfpCf7PkLghu4AbBozaPohD7pj4",
  "key14": "2gvtA5RTJD6fGpr8Rd3Svbm6s8vSUdfu42noLQokf4wbSJv5ZqSxMtANvfKud6R6V6px3Ruwq68vZeK7VydjQZsL",
  "key15": "4ot3sUaDxwJVwBq3eJTWLYK1xF2PWiK7a3i9kRUqq7onJRKJZW4PUjXSUamJi2N4yKYDFXdz6RktLXMLxzX1FVFG",
  "key16": "3Lb238sULsKWRXkyrneFseH7pckLmiyWZvSBBK9B9tfiiMqjLUN3mNt9jBci5vrYq1hiFuem9qk14Uej5KFEefzm",
  "key17": "4pg1YzZVFdu36yNN1KLS6Tp9HRA9RCpDK43AMV96WKxBjEFsxYxk6bfm4NveUuznahAdWQum7rmRNw78VR5AcnGX",
  "key18": "XtiBHpf9wGLMu44dJWXziAmrgATdftbZbohXwV5VgZUEWTqA2EizYtjAHUZywHn9CVzb8xhvxW1Ef56hYTpp56M",
  "key19": "wXZPuFQrZmonjdxcS1ve3NhvR37JAaZwDw9SCCKzQwePFdu3a32DcySBAUoiBGdbZokcwEzQzkSdtcGhWSiQsRh",
  "key20": "4EbAw56cjcr4Hi4v3Jgp1jhX3HHcebqhJjmRb5s2D1qKtzJyi4ifMmBchJEP6m3Tex2MmwnVSsVLiZVbv8N1ie6P",
  "key21": "52HVd4kGwaa9Typh6Tr5vC1MuSRjYskfzixa8sY4ZXciKbR6ni7ScfEN8h7GXuALa18bZ4xpo94YF3qwEptKnub7",
  "key22": "5b2QdexuhwKhhkCvE2AZkQDBHpF8ePZCH3wg7JWVeeaqxit3wm82wyqkGJL4BSNN4T7wJDJH2LvN6HBhLt8ZJAJ2",
  "key23": "5YSRgRxPCusfVgmi2jFFdiNrxDiAAUCg18AaVLLK6gy2UUaDjmWmCiBUkzKkFmsNwwbu3RUrABGF289MHF4rXKeC",
  "key24": "3pgx8qV5w8e5bLz4JScJsPFHuM9X7ahht7ZsCVQ1bMR4y1nZHdnhJJNDD7GrCLHhXjkcZTHr2yRdyggRzaauWqUr",
  "key25": "xhcDHZueQXmWskGQimp7d2QZK1bkpmsK4ToqoXYP12zyQvBZ59i7Qn3hKhyby4SPUZ1b25V64wHhc7MbFb9DLYd",
  "key26": "2ykapsVBvXnN68zrxRtSGSERRZs61r1pjJ1iQ15FerJ2C5h7Cv552up3Pu4TCDFUPZGoyc8Qg1DiyRFqYTLo9Q8q",
  "key27": "2tMgfWwskvSVPLHDdCZ4YKZCmMAZxUMTTUkPvcuffzvRDZUCPPCQUrjRyqTJ76VJxQQdgyi8ZCJtq6dLmtTBn7bN",
  "key28": "63a7pKSCRy5JjLzXkbodQQf2zLFDvBa1R7ooxd8GjFGqSW8ZVPbuKiR7Xy9bLoGn8M3acXXuDbtnv94Q2VAP7Ee8",
  "key29": "34DaApCuCQHdw5YK4CRcSuZvjADwfozp5E2bayK5Huf4KryAfxka6iD1ghWutRg8c4dim8FW8qR4C5DTaWKN27MA"
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
