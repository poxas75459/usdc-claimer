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
    "qJMNdpACevWEf2Q6uv2mf1ypa3zVAmrSFDxzFSFykYEkYurKz3EG2xGkWD9Egbt8KoAR7NxnqjX2v8hoMQLynEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgpBCc1WGZ2s9FnMdAC3KES85ajQ3ELBuDSx3j7PDEUhLyRW55sh7ZsN5Hy9ZpZLqtvibCQG9nDPFJt16xAbz7z",
  "key1": "Uwaji6fUGJkfniMHgBaYRsbJQ4DcdvSF2Yk96qFqHeF2dT6yMMkYsPehMEP679PZbnAxsRiKKtKB1wePD4VhXPy",
  "key2": "4NKiMyv81uo7rGkseZDRxTPvnxKFfYUkEQ1MvdXrZdTW5svAujVC6piDrAQgjGhhZP5MXKhYt9ejBPhUVBuDdDaF",
  "key3": "35YzMYGEN8cerPZ5czo62XA1nLfsbE8b9AdyTmSsp3xmhfcGPJJKzJDS69BhEEyteKNPsq4vCJfCmZcegQGHVGh7",
  "key4": "2ugS69Ju1FB4e1Ttgqsz5YDLU7amxpJBHTBV3MYNtVp4WeEP1HfEx681rsmkCnix1EBnVMyCah3vzeFPSGG6WyRP",
  "key5": "4jdt2yhDMLSL28UwLnWJtULzJtLaQZ3ZQjiJcjqFXhpNCi9KfVRavvNjC5ZSUQopxmVSaxjcccibzKy85x6m1KWk",
  "key6": "2VUXjx2ZSkmXgBtsQbrhPcLWrNiBAxbFfKNqSBjim8YVHSDKpEhsNbQhVFbm1o9YUkhuAi9BVEUydBGHCKYke45H",
  "key7": "3gx2UPm8yruCTeFgbQZm98KMV1gWJ8mrwvywQDzmF1ZFBMn4tVNXTMvLHgDGUhfc6Vi3cLrs96NtbFpMAUtTjKjY",
  "key8": "3drFtwNdvrxQAZ3piTHUSbHicGBX3RCmkrDesLRVTUp5YxEyFCsob66dCfqDiTydtqCuFeBFr9YD8cvsxsGj44H5",
  "key9": "3mcdGaA1PVQg9qaVGEM88QHRX9xfU3khrRre6uUiUJCgn65nhZJ5FxYSAzpK4ZTCzWA7qNS7LXSFiTX27pFRDXyt",
  "key10": "5WPtoY7nYxJ9RWBNhH36stMFjuj5e3Z7bsJyB2cbb1u3GZFvyaG3A9A8mquWyqzzaHyKXjHFqXdLCQnfpgCFaWnw",
  "key11": "3pPY3CY364VP99LpHpJeK166Nt92NDo9W1CvFCsA1TJaAc3LUr5C16anamMdEbuzg4iNPsZLqbGT6sGFghuDAL5B",
  "key12": "5LHrvKZ3QjJyi4a7bGTXj2rnhsn54t7MDgRGQBz456BFAWMHZ3JGYppCAgQ4yEdN8vmViiMH5U1PyXKfGi1YsREW",
  "key13": "37Kt89ayAFgM4Dood8F3grszNTD1zuvYT2W2SnqZ8ukBfMBf5mXxFpEHCGkC9e5jsQiUvW2Xe5SrChAbKirvKh8a",
  "key14": "3ABSJFcAtgptHm5wXtdbmpLitRd6woCQApMmmdJAk4SBowDSDwQ9e4V9wCUH4SyhYeoaHLdAnNAfVq7nrYq2Py8m",
  "key15": "25ww4wN2RXaYQ4S7EfYgtzdxD7LvWGJXSsF1mQ7VpDayEjCmgQVu35W4QVVXKuN7TZqFBVTrE8WkfuUfPuJRNU8S",
  "key16": "5dxTRwXHFurSNRi391esq5BGZLcQGaTvnJntKFrVjmNJM6xrKeAdFDoFKkLm6E9TRDj1QBuwXeaA4JTUqELRmhGG",
  "key17": "4u9Mh8LfFWESJvtRtXkYqLvFGVi46br44uRtbKcpYXgpUph3HWPT8R7FULVf5ACPmtjR23jsCSnq85kLD7RzgV8u",
  "key18": "225binxgSuffwWdDobKK8cYuUD1ZzZR3EkHuWoW2HHvSs5kRJ9hr8cUnBqHMGQm8NmBBv5sytf5sqEhGgSdsCFfW",
  "key19": "247NxNWpH3v6H9aQePkz8crZpiRu4TVPRFcqJVwYpwzyvaa34N929VM7jD1hVBizT3DXJjDwhjFnm58RDWangNNh",
  "key20": "YmADQLHLxXX6KTgeaQAqoUVBE8rNKnmDQTTQZS9Vbp4rJnQ3FYhrURjn3n3phwbcvVtMWNr4v2icezchaY5yo3U",
  "key21": "3udYvgZnFdcNudkBondMBsXyUJnVZHXpB4bvY64KDGbshesoLmph3KxSiWnHZXFLXfJ5i7e3mq47Q86J3JxXTc8W",
  "key22": "45vdCMP2WYC1CU6iSCfm4rS9ZTx5CUcbyfFJ2hiwybEGgG3S6C2PkGm6rnAkcnbFrvYpBup4G6nm6LssKhQhDGH6",
  "key23": "44SKh8L5WPAXs6D8B2WktEaVsDV9SoggFAAyA1kMuTuuhYyxgbKeJzXosrma8kh4b4JDhJx8VgzgP14wwTr3V24V",
  "key24": "3mXTF7wiy1Hr1LKgVGWQYJWs2xmb1Jo9zcYCcAnoDHUf349w64igmi933AJoovrdZHiFr132cYdfbXkwVqhnDVVQ"
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
