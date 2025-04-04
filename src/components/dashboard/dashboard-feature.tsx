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
    "3GFiwwtaTADDZjHmzCe3STYak6cTmYGts9dAGtyGo7GBQUMjJ6p7BEPvPkdk3AJFCYdk52YVaFZW1KLfrDMyyTbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQWMEzu1Qn5tXZ6ewSRZpxB97XcGTNKGJdvkbAaBrDWXAjeb5Fzw7kKbr19jnxN14S5LQyHDrwfHhEjF7V4nh9D",
  "key1": "53E3GcRZXnmSHq1e7wSkdtYcEbLWVxYUNLc3NHnAFUfwKRquv7Nfw9X3oVBvMRsXuzph9tsQGLyXBhNLkwKp3QP",
  "key2": "seTtAdfvYiTLFuUZPYgnh6LLC7mkUG2jrjkKpBoqpEAfmuzvbY4XKXB7CKB3kdxFce17VXm1rFiaBgusg8BJ4T3",
  "key3": "5VAgDJuH3goUohqukLuJQiPbqz9mm31BQNoUPRi7uaH7K4DjBr5EwwTrotKG7R8deYvrKg6PaU8BykZFqgUoeJaP",
  "key4": "39W2fw8YmoL5ud3vVuzrBsBJaVF6FDmEcdz14FA26LFUFeZjoub9bgUg3WFqDDVpW1iTYVXS8utaekUWJLKqw6nM",
  "key5": "4yqdQX9BaLSJy3M5fP4PTbim63TQhjbXSRa1U1xMGNbxQAviznYw4HZM1ggBMVnMWTY8RdhmzAkzVmrnXT2YFcdB",
  "key6": "4nhkSVQVYsXm7fyPaBKZZvssBBjPBLDkcn6DVxpuv51jddK6jZYdtETuvoByN9jfDZagZRq2PoXGHwdmPgtCqmkS",
  "key7": "fhDWTCFqSkboVEEZxSqMLnZVaHwPMANrhHyGQz3LLjNNtLWVNtf8YnssLKCf7b6oiqhX3R9ciTAw6LybdNw9Dwh",
  "key8": "4aLHzViiwE46GGkQfHcQYDVYbji2PcDLAr4DFmQuxN6MKBPQVhYMbn4fneWEphUQH7TnkC7Ec1WAvdN8YLA3Yqi1",
  "key9": "PgtWJbEXqqFTXaYzCbNcvnoYN4UxEPXeQ6FWbF86G8FPLJBdUvKJjGMxymnfZSdGqnonQGqJX5iGVm9mec2UREm",
  "key10": "61Dgu2PKnhqZYbsgstrM93zEMDSw3i7GH3NNX8Ab8cqbT66aBrhHYWhW5QBDUB3gauvagW3fscJT8w8RPgvfBgnR",
  "key11": "Hv8YHcJvgwy1ZMcjT5tVdjSRU5EuYRfVDxafzoHorWWTUPiErdzNt79kXs8mcikCdGyTWTzsCqsp7e7WrMZAXJ5",
  "key12": "5P89S6nfxBcwENUjoGjooPYRUQYdvGk1xFD1Fy2EwyziDgXm9p6PZ9LcaqT5h6Y7QGhd9RcTQ5kpxFmCCkuJDdEL",
  "key13": "5RYnYuToGLhHiAcChfJmE1SUbgihviQYdEvgqVRNprUmPFkStbTzKnELX43RWyj6j4NzrkPjPw6rgmGj21vRQroH",
  "key14": "3rFL9KNzvjF4P8tHRFQKxMA7Ghfs9tyK64L7Gt5Q6nJrEA1rE3WyoKPMtW6P7ffkXf2HPK2NQML5ubUQsHMmga8H",
  "key15": "3ZTqk2qx2UNrdDK9d7EmEa795f7GKwsmycRvrFwHsgPwCLS62k42dJPWwmQjb11KgKwiwVNtmAS4eNSFzPfUFRJk",
  "key16": "5r2KJ1PtGs6UJbGyshXxXxGLgfvQfqRM4Ei8PEFPNRws9Zdg1VmureR1a7ZTm86a3QJkWSkzZBeDyvneq9uFM84D",
  "key17": "4kaZ86ZEe834jMTHHF2GS4sv15sDwzZ3nHXAVUdUfTL6hH2fonpJVF2nvX4DjeU6ChCReMMYnpChZkeH9tNubbsu",
  "key18": "4pTQSz2g87qP5wFmDTDX7F2nNyQLxL55Hn2ov7HcskkzQHzyp6sUjvDgAxMWu4V2nTSvcScLdSByq5mbsJC8karH",
  "key19": "4rmKrLVHc9KfBYQL3Gfhugj5UdvvEqWnvtiPLCXTKqwDTucAJpRX66tjs64Y1srr8dJ9DKcAtAYFhxpR6msfeTtB",
  "key20": "3vPDJqCCVLYRZHCqeKUk7wACrX6mq3jP8Sn77qoRH6Nf4WYt3ejKJ3VbJzG4jrTFqaMJ9VEK1iUVpoBq1gYZUQcW",
  "key21": "4Lb65ubAizAHNZcNuwFBxaYtanMocsY3QFKfdQAkcdGomvJRXwEPi7UXPFvqCiRNEih6afTkoYQ1Kaib43HkJfUh",
  "key22": "27bZJsbm9mVhnuagxfm3iyWyViwYQcAzLP5Rr7SPKLCiDmVU4RUs3m5qfyoaLeLsHtT5mU58QpTt9MYR6hMUokcH",
  "key23": "65Px8iTZnBsxdPhF2C3hwx1mfRBnpV4ULvAZcskBQvVmQkMEpKw3jNW3Sibnaj2vg2o2HDPJeVAuRdssCwBqi3a9",
  "key24": "DyCULKrNsHXzFjpkjsKbWRsgYKwimCzTMJJ56q1XLiJCNAdsNnQJ3iQ82294b6NNzR5YBeDnsKYyAgcrdVubjL3",
  "key25": "5sAJzJyi25RhNFSmhQXUF2gM7XnarRxDp6MHGPmW8LqZkPKv2BqwcYAxS7iUa9AArpjuXhey7T8dFoGq2iCmhoHJ",
  "key26": "3TZaMaUJy8PnKFGxkWDue4FwEvj3z7dCtZEMESRuxM8niAnvhLwj1xzTzSK7dgRcyqHU2nABAXDbCUbegJM42V7G",
  "key27": "41KjMt2jUGhhi2qTCMFPijSzt7kmkEJP8Ge8aoKbvrc9PpzXvdg3VArJzAbpxU6sVxrb8E31ivinb1FGeEWetunD",
  "key28": "2Zr1DUTsjE6YPSrXZVaCHqnV6ioy6agA125PGBfXvyPpgBgqxAcWk7qGXpTXVYPwoHNC6gQq45N5s9VR4t8gbj9s"
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
