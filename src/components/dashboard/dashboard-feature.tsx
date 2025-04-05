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
    "2VGEKcknzgRbxePzVs7dxZUVnzxSmjtoM9JC7tbTCYbaMAfDiy6gTM1vG3w4tgxiYATojCq4zmQpbU12y4mdrjSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21R53BXyJ1nLoQ88cvRWr4vKEgNBjLcEuc2odgd8KcN5ruKDzkE8cxK4k1ywxifnYaWy1h1heocdUJ1NQHzouTNA",
  "key1": "2wczxi9TiZ5MmqsL8dsDwE4iLwAVEz7f741tFn5ErrZbJj5sWu2AzfFKhp1ox8meq9pUJXDdtGu7oticrAdfUgcv",
  "key2": "26ZX8tKRUgGv85srtYATApQK2NDsKQmcuyqGMSpp9bPBafABPCXRN8muaJvPprsDtQzzdrMXvdkjQTikSMXqe56v",
  "key3": "28Hygv9b2hmSd6YZgnM2dLrD2dVnhwxrpYmFSWM7jFMuwEXGCBiUjJCSwHZoaHiGvZKWHAzfSDKHcvmMHW6d7N12",
  "key4": "VJUSXmF7csQwU57r9exUNyGseb8yDf8fcVmdmWeN3HMfyEV3bsC99YLAKbemRQEagUXzwA94zhz2mdTJKnaKc39",
  "key5": "4LoNZoGT5KXzc9VJddXAxB76gQRPkSE3uTebJJJoDKTeyB1p5mwf8a8oYk2YXosJDvTTL5a4XFnzLaqhymaDGfn5",
  "key6": "3SrRZFyFG6iPGuRuScZdNp6UhgHkJDLFxCG82f5kMhh3S8CFDr7SYnjRWEHdrnB3h4J61o3yCwQv2icMuH7AJzhZ",
  "key7": "3V9vTMZVR4H95VsKVYqBy4p6kgPJzE3bxGpNadCwjKJcup7HmNyjEWWvatCLujrzYFsceCYuwvwPF2dFV8buWRUK",
  "key8": "4Fr9rek9mBX9A8xM2E2az2zKoqBRkdYxbxr4G24EeKfuZLfUxCXjz2A5yMDj5K24injyAFV6JM5F668RbXs6Uqt6",
  "key9": "5gbiuAcrgCWjsu6zqGutvnntsByK5obaKkdcXK4TcpLS64JeSZ72rLkhxpSFN4awLjTPCz5yRhnsd8VjA18QtrGd",
  "key10": "3SpP7R4PcBL8DFDs8pNJCNGXH49tD582fLSF1JamhxuAnzfUQYJ6fkaFWs14wh2phVgnCecWZbvdiWaptWv1ES5Q",
  "key11": "4CaSsbcKFgGa2Dr4wfpik2EuhjjV6WmH3yQezZKuCgninvMtGjQ4LLwLjJfBU9HXQwa7hhVaeUrjRMBt1Y3yUaeJ",
  "key12": "jPEpij1iFhts4kvfU45TobsuC1At3qhdyU1mun9hcTsNrGnJqgwrVXpGX2WGayoGSpTexVTuwTy4a7ftwNqir4X",
  "key13": "29KYgU1brFJVSfeAvGXkBWXcsjt51y1WcBmQKpFS89dnQF49LryVqL6adBF4yYRcaDWq1T7ZF5NPSgt5RFUnv3nK",
  "key14": "KSiVAmdsNazgAxNRvsXxstndA5BJwogXdT45PchHTdFYZXxRcrUgk98J2D5f6q1c3TM6L6NPyzqQoWZBhiqz3c4",
  "key15": "2a7cnFHqbo8Mqqz4xvxo2j8nHJwkcWuV1RGD3N7gmkV5ZiF2MjjnaGsNEfYXHzXnonXXMJKdJMQVt8JKXi4E4qQg",
  "key16": "5vjqS2LmySLptBoAJn5bTwNPRb3VFmYQS1RkkT3HqRJYKTaoHQvSaPmX9hAGx1oysFJy158sVE7N5vNhJnindxoW",
  "key17": "377xVHLGzCJ7zrM1gqTKKdn2MKGNDZ3pEiBRNUQ2SUQAyoUmEw3oioZSPPnY8TqtjPsAgPJCmgy3RkPP7twj7au4",
  "key18": "PSGMuXGo5WgrQdvkKHmV8rhPpkpghzWe4fzePJetRW2KtSJvqwxxAZSfgrEKATc6b6ZcvyHMJGneL3eeNXTgQHJ",
  "key19": "3qrzgxFcvcZYojRxxfGUPxZRyjHzhMDnuLChr9c1G4u6dPcgj5Gnha7fXM8tE7yLYrif1vWgUjcQSepHJCPbMhDQ",
  "key20": "5VYNTx9erdanVRBuy9W3AZHitNd9Wk97xwpmrneofbxU32ZR77cc3zYGkvceKuCFRPQLbaKZN9mNVUDyPqLJBVJc",
  "key21": "2LRBCNUFXrVr7YazvRsgzTmyn815MRfBJd7PMBBtvxJb9JN1UmPQE1vGfCyYAA1nJxX4oyLfxmzqWhDV9wJs1LEQ",
  "key22": "5oQepsQxTrbgzbpLZwMGafj6PkqyrX3CqejLX1N7Rsd6Tb9ZUBWNfsEv9QmbJH1F8MUdUaXqmfMfL3ZDFjvhTGgj",
  "key23": "26vPCEXhe6DohXpPatzFTobbkM6WdThZJQYhZURNBt56ztuzDGAi1UtnebL7x1oAhLKBPjMjz6DqrGggjp3mbUvV",
  "key24": "4z9PqkFyTKtuuqudYyBwEhWpjAzTDtmo5QV1BjKFuBZXBp2yG9kWaabzU7NFWLc8jnmKbYZftuxGrNJxirmxUJUx",
  "key25": "5MGjwoLPLCy4rX2iUGyKHFFQzhGGVE1369Vi5kvCaTT2W1jowr5jSoGC55NxHBEbFpUjZuQGYfYfPeszMuGsuUoT",
  "key26": "2oDsSYvRtAF3v6cRGa8YXnzYef76PDaufUxEMbANvhSzxsecVuVP3X7v1bxiB4XsaKVeFGuV5WZ84xjQChkKT114",
  "key27": "5L81wULDMoAaZJvuf4QmYNgmd7PK3F3gy7vursuE8b9dKrhmS9DB4PG6gvFSEtGubCGUjmE5rP3GEeRrEjDqem6J",
  "key28": "2mXsEQtbMoBV4caLB9NTTmeTeHamNLX4yzcSNabd4zXv6o4ex1VRXYmYL94QFNdRYaVqKFzFaUYLrKCHCbsf8afD",
  "key29": "2wTTbXz8GUimjCJgrbnhBbfSd65jt3kvFK78wPRSxzeuRFoXapckvXLUMcDkyE18ui6yT3a2g12SQ9dt4Pr71NY6",
  "key30": "4gVVdB14n2F91k95uN6VhxHLbyPqSRsUepn9jddJyM69rLnbe37u5jLthobwzxbe9N3xc35BJEvzPYtt3YJkD9ej",
  "key31": "29hj7dM54Ad5CteseNECsCPm85okNGnU2HYKL7Hg8JsQwrhvrdynALrqtpAsmCRRRHLafHUa4zwRtJPJj2EaR1Hq",
  "key32": "1YJgUiXgDCrNraBPtAQsZiuraVE9N3HomKSEQv16eFExrCHpemsQbwsMqwGNtK4b37sxuTXCKm4Ax4v3stUGbDq",
  "key33": "9e9hYAi1aEMMSu4bnACmP61jtVVfWQzm7UbCM1LgiV3sN5MCfAK95pUJHsRg1Tkap72BZKcZ8UwH1yxz4bwDkgh"
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
