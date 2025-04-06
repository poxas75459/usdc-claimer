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
    "3rBHqsD9eVp8PyYSjzpcZ4kh6X5DR9XEZih9YpHVE9Wj8P32GZK2FfvpRBrSswwfYZAHpWS36iUm8QoQ5DV2bFsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRYiLngcvbZmo4CWP3wit3Nan4dqqjyT9x5MA8xcNXPviHbKAf4Qq4mgPFZLfUYrFuVEjYrqgV64KHfitf84eXQ",
  "key1": "4btMrM17HRgLyzyEwNQF7meHMBBd47speqSKEzwFyJfj7BhxVgLA3sfc34PmyZMYP5YDsQGF76o4ST3UTNivEev4",
  "key2": "28aWdKsoHM4CCG1mpdQq6H3h9543z3QivRfgyCB1qj9V7yti9PxGx49NXV79ExUUEFgnMZLFAC16a3KMpuFKNWaP",
  "key3": "ZgDNPshiduAZoujs41WiU1G1gFnT8DJeemxgY31wRKfsaHcP6s1cLo91cz96z7uxmRr85RCCp9vr33xQFNMqkFF",
  "key4": "2KbQCM9Nu1yEGbfLPH3UAKRdW33JGr1yq69bwdxtuHX48hf2fQx5AaiYQxJFy5XhgahHNYrjoiB8KRHKXZwNJcuZ",
  "key5": "528SrmEr9FCA37Hva4oqJUBZD6xnpoDfbiG6sFHTLsavPZB3mYTwCoFB3DwQNdH4w18FCTmVQCHKZJiJeCseSXdr",
  "key6": "35uroG7gJJLZsvTbxbSjGVWjvD1fME6XqrsHYPjM6W5QjLx25uBNTrHzjxXFdomxEUjHNaqy2WrnLy3gYaafp5Ye",
  "key7": "4tqSP2Cv3515D2wTDXwxzNaCYzj1kFBCmd3uak6y6gp6B3fdrvTTAUeFFzM4E5wxqFySCrqRGi1dLXWZhN9MvDBp",
  "key8": "38bMymbGfZ77NpUjzwzNKiBGsvWJaPXXyuvbhRwybMvFRT5cHF2r3vfyQ5Kce7Wj9n9BBC28Vq1qtb56c6NLhnQn",
  "key9": "tUiTXom6xBKyGcXShppXP6hS9FHdUf55fRxnXhWCW2Roy1X6oXAxAYsRdefDNWCQvRPvh36xWSrhNAF6zy1a6zz",
  "key10": "5y6jCm1Xgvr4PXbypBCCPPAePWx5PWhMWdLjJvXDp87RkhMumNoHi39CmV3ZuYQhc4tXjdKmp6vtfpcJPoWioBAC",
  "key11": "27aEVnqmWW6GbdZzWFZsMdgZqFHmHRTPmrWafrQp6GowsF9FbBPYxfVHJFRjcDUMUmXMYFnTdNSEtkE2rHZqqReq",
  "key12": "2rcsNYoA9G7nWcS1i5dje99hbU9fsDZ9PWPeAoJH4nVnSRUriES59C38bavvyYPDZwRxqT1mwLfZtdMpEsLV36SS",
  "key13": "2aHuwBVjmDTq7XFW5nJ4t3ZCDTRZTFFGG9QpH5oiWsL6vQFcr9EEf6Dh8FKH7YSfvdGvDJEBXNxipxx8LMcoT6kt",
  "key14": "MXb6YwzpCKcv5i18KtdVE5R1ZQx3byGnXkR7MryzcYvi665WgNmJBbH4aUBVR9h3Q6uhriduLsh2CBA35qcMTEU",
  "key15": "3PoWigyRWaHNUHsv3KmyTtm4rJptbr78QzC4V3fJQFh4duXAYqyjnNonmc9txR6VoE93PCw2mWr8dAJD9Tqc28DS",
  "key16": "5UAVkYSJ3ta6f8eNX2RnvjG4aLWQAseCd6So6eaYHVfwsnbVyUgGPpRr4Xbv45ED4t99XeUYYs18VzCRc8BetBSo",
  "key17": "3Yvvkhjpv99RovxM9AcjWQ81HFLVJxXt3fyqf4oqaVV547ug4nMSnrhKnwhnVzQcXh4uRVWpsWfdFJgBrcBdmUGa",
  "key18": "2NEvjogrceG2ZERfGCgQgqmSitevsrHF6ELRhZobThn8KGKg84bMHNoFo93DpWaMiRUfs2baofB7oUMkHE9Q7xub",
  "key19": "2TuqJqjJxHeCfTTn2qin5fok547x8Ypwj1TjYwHZdeCeZeuthmfxo49zgirCMghbbxMPraPPSCKHVabJSvE7swAA",
  "key20": "d46P52G5Ed33EZvL5WB34JsybLmXpgvwScTuqtBg9ucJ2CYivFqaCUq7q9TwiyHKosYURuyuH578XcRG2MJrPAk",
  "key21": "5LbsT5pmK7kurSKUAD4YSRdJZxTTsQMz1dQ5RohVuf5q4npThEFBZkSsEFETT2GP9DQX1EAb2zuuuxGxHPrtBPwQ",
  "key22": "24aFYhZTC9sEsz5arQPMP9zdtVhJ4T5q4Ujsw6GjKsboxjUr6TbD4AU6Kt8EKzqFPqTTCfF51DVQwqMBNYd3VTuF",
  "key23": "5FmkLdWcaP3L6cGQdJXmhkPcsGWFUnX8Q9HgdHDngojwxzc1nrcbSN19yZx3o8DNXYJTZBrw54ok98TEkFxKwfr7",
  "key24": "32qapxTpGLzy8VPHQW3EMS8yXWsqUsodf9F3WM8GPqNFUu1vQhLx7bni6VoDQpg8sy2bDDgU34WmyvdZpLhZgnSx",
  "key25": "58yr2HkA4q3PHfnLRr1gbRFRHv6LCiVnLcDNnPXkD7dP1zmXM4cw9jGwC5Hhca8vNRAWgAMariRqvAw6mo5eF4Ph",
  "key26": "29njudAdgfboVYutjZKUHDiuR64EroLRzvjUg2boFuopdViRwhEd8JwfRA6LcWLETx6JNQrXfR1xjApyv6kgQh5k",
  "key27": "5XvmJcEyU3URUfZdSEX7oE5RdmqPKcH4fCa15atQwHJoF6iEJBbQ15DJpTrVebevvyyAjvQLvFeb2t3gdKubQCU1",
  "key28": "5kiPm2oLcs6V1e9ceu8uPKtfH7hrpzC48KPA41kqMtCWyAVeK8j88AaJrnk1bQrVuEoWRisYCGvmVuGiHc1XNaWL",
  "key29": "6hNbGfZ7gjTWt6rdgbCPPkFkbYnEKVrPsjT78TTdqW8qbuNPbjzTZdtrpGCynwnVLRD7BBisvWggRukph5zG2z9",
  "key30": "5yLcpmVgxfZnU9PqJdaPkAoAjzZoUGzKznxpdQjBww2t7RDjoPzQjPfvzEpAuQDcqLBnhRmDesTAMLJUgP36cu4b",
  "key31": "2itG1ZEvPnhhVruBwtJBzXshYZqyrEz1AGvbSboyTA4cidj7Bkf7N8aRCsEnTKq2ocAYxAGiP21vDcYSCVJq6xv",
  "key32": "3niUKvoUgBhqVveNp8mQJpDV9VvbocssBsYzuLJRfvmq1b76PhaduBkQNUTXKezvvDuS9b58Ss89SDXme9FWMDfW",
  "key33": "CoUiAooBgf57bFwjrkX5ByJZ6ma9SQ57gLcHWD8qdeodFf2sfdWsLrPBzGHgVsE82vGe2ukDqesDPqfaFaPBNzj",
  "key34": "yaFWXq3bUGhvWYPe2gsYhknD4Rshi9467GVFTeuNGBWzk1HzNLc8Y7dWxswpYEDtF3PMPU4yuTQihurGqpjTYNY",
  "key35": "FeNy9cQQq3BcWTm45jUjQzexDyzr7cnVDpXxSNV9grxEWPrHh63Y56ntNQJdX9vb4ootwXqqvi7Cx6o8H57qDqP",
  "key36": "5eYG77vtp5PFcoqKTvG53v3CoWspLdWzwviAKjAK33319V9bLG6ARpKM8WVK8Cva3RYqf6tjXDDgCGz5ZDSXuF5d"
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
