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
    "2A6rxhvcjDqqWbYyP76yKQJLiciNC2ecjaTjiMGJ2a3MWatKqyBCftyS28ETFGpqZTrFFWn6sbNqbtSXw7mo2Lpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m389XyC3yjuQi9ZcduPcbkbemLBZUH3VkADHyVhbY6zycSkK1ExfW5jr2hP2yQ1z7SBzuGCF8DoXuw7caaegLe5",
  "key1": "5aLuYkJfXKdcN5kXGQzwhvyx6MZHSMTjCGu2XJnq8vcS1qnwKEGBBXRrbeFuAmWVwBZbN8GT2oUoA7ytzTfjLaBJ",
  "key2": "3cTtaobutqMoC5YCqC9s9DRHmYfTC9qT61jQjtwRdyW1DkJmeSKAWGwb15xwoRnos5mDrsfgj4V6HAC9pjLwMKMQ",
  "key3": "3FvUjBMPVhGmKmXqugs8Eq4X9CMGUH92SeYmqGidz2HfLe3wz8Q38A9spsqmZBn8PZqYefMvwwK2Gt6eywvk5vr2",
  "key4": "TmGZt8NHzDfw6AuwHEQgfcohjVSZQeRmnvzXWBcBHjeEUNfW8eGQdGiNBwLGBUbmNouuAR54mBu7zobmKRjpSsd",
  "key5": "4aPBYmoBhV7pQSttAzktYxtjZ4mXEwZ1CvZsosQxZjge8JHRPWiyVamRfj9uL7hFtS8cK8j9uwU1icueXFFyPNWm",
  "key6": "5RtqyHN9obsfpzzxdAwmBinoJN8mwte1Ucrf2tijgVbCmbmgs8KPMcvFG8KAmUxWR25ftFJ1D8uiZkvufdqKTf6U",
  "key7": "66b7W5Xk9TRrLnVhABL9fvxdUFEqtDPZTFx1nR2rHdtkQ1567fs5KpMYfF85eJP9gt8bv145Vd8EKsvjh4MmaC84",
  "key8": "5n6MrNKpGASKyyaRDHYXchE5x8zPHu1AhbZwEAkm3ZmBfuT115YAK5JURkkunyQDSZBWbyjsciV5qAyzZjhF3kqS",
  "key9": "2jQd1edMiLY4p6w6UuNDtCUmcPgfzeNNVhGRS4shPmCiZ66HKjh5mcV1eTXSTurzaqe94XUfYikXxPuzJvPcShgh",
  "key10": "4RLfnELofmgtKm9CrWwiTw6eH1W2qXksEtGjny9yH1SQtT6UUZZEZenu9xP2VHCJ1mkfNSxpjbgaH1AAbFyJcuQL",
  "key11": "31iqenqLDyJ35FFHWBZ7V8CF2wQwXdtGBNs7aNuTfiEa52csnJSXQNwmws8kvipS7x6uy7gPUox7N9JQtyg7ihWd",
  "key12": "4xR8Y21H42yi8hs3RNPruCQMkv17fcouHDESPCRXn6VewtVQugTYLWZKcrTaxZN8Eu7Md9NYbkBx5X5rRuuE1769",
  "key13": "4svaUvSZFJ4rbTPsRWx6FwfhpdmwmYoNVV4AjBv8AcproxGmwgQi2AinxBe6FBGb7L4ZEjS5ox5kK7Csx8kFw6MS",
  "key14": "4z9JzsA3ZYnBCPs1kaucQiLeRAKGpLBPDaZw67UjnXPsmdo5fyyrkX6ecqJo7L1o5BwYGMBYqVXaa6FG6tTGF7tA",
  "key15": "5LYaho8jcnU8JAUeE2rvv4jD3bp1KbKvX8R3FSCRtQeHhWfKA6KFfnaydJVPfyGMnETFTgJUpA3HtHDoQapeNcHC",
  "key16": "3RsNqA8RrM8L1vCPZc2uxbPuqDxN415dw1Mbn2VxyHr2nbUtca5e7wvjDzBnjMo6MAuDqHXtDqzEbYYRRimQMRqV",
  "key17": "zv9R6htXCKTKcBkyUh4UWLG8KoHvaYq2HqaEMQFXu7UxaM86EJ3PreQkTBWGbT1ZrMPxEnesWhgRUjaHQMFvicv",
  "key18": "2F4fgGAi2w5cD6pj1FpPpVF7mCmURS5SrHHQB2Vb3ocEumYWn385oHyZmwaYUyCRG8t6YvFDePMbFHZSSdYGzUjY",
  "key19": "573unQ648hfJEXN8XXrBMDo5PNfjZgQakamyE2JG1PXuHsjUTvy3hNam8LaMapb7dgiq1cXtB5pUxm9eFfyypRKD",
  "key20": "4zN185pPUS6bEVMTXxjgbbDrb3UoSJEZU99yoaqouNazEP2zrmHmfa3y7MTLDxxuD4s1JdVcoh7oQ9PFXcndhXZn",
  "key21": "4f2C7KHcLJn1iTTKDBd4f1Cdd65tUk69ZpZpdYxH2q1Ey7RZyN68m6Zvo6rEtUi222H3GS9Qh8gN6pP4DxM9KML9",
  "key22": "4UZpYxVzyyKocK2hk1MiG4764uUSxXAD9s66TGVTzXmfTLcrExesn4JBdLQ56ApsHM5NRfFdZ2RHoj8P4bi7u6si",
  "key23": "2ymGEE1u5PJZ3ybz44zzaCc5ZwRqMRgwhtjw9UvYMtUinaA1bQ5Q2wk8d7WKafiZnkpZ49WXF2C24muqdVseCPQ8",
  "key24": "81taN1fBm5ScqbMgZBKfGrdqRjGJPP86GQStDoCU852dPi7JRHTbMh6qrecEAEio2XoLJ1Ax74owKkBmkmHqYCh",
  "key25": "Mto7CpbeiM5GuQ2NuX8dmXRq4pBGQJDKD5UcbZJtxhYezaNoLuqjMxput8tkug5Bz2nQD7uUPnFc7ty2HgNfYCq",
  "key26": "5LwHQVZ4meqWVyBZm7p4215LmdCP1mwmaksC7w3qTi1QxkSjK9RrQbh7V1agggSEjqaKPbjJv2qQ6on4rZxDBWFn",
  "key27": "4MyEDFRfSKYzzn337zXorwH6oEcHm3P6BQZLq2om7Q7eNUFEtbeWXF1fpTtSAD7aY4PbU6WT2J3HnsY1Kyk7XkT6",
  "key28": "33ARMKnfz7YcCkQ6Jn1bjGEdg5vx11K6N86mF7PHnfQuK1TaqWMBqQNTzS958fxZ39w9Do4woDXhGVSZkzmGzDhM"
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
