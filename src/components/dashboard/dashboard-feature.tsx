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
    "2v1BoViP8fWQNQB33qVXZj9ac1k8Yu3t4Nth6qCAr3By6WTwpwbDdAqorGB2vFR1cuq3j9U99cx7pnzQHo3rG16S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJb9DC11gwYy5qrPiw34Mt3enhe69z9A6P9P98MPCTT3kpG92VH9JVMxXtSY3ssp3TsQSGxE1LmMY6YBuDg9hrg",
  "key1": "5utiad6XJ2fKC3WUYKPMfPVmYVVbBsEdvHjqPDtsX7LEghtQBECmjtEsMcQmh2LKzczX6WTuJY1AXzsfbqL2htqG",
  "key2": "4Hy4kTXLBcR7NieYRNs2a7wGxrrJEozaUjCr9VadMX4Qx6eFkGwPWVaXmKRhNnd2F998Dmm2Fqms5sLJBjUpFjAD",
  "key3": "4nmSS1P37Gephb1Ys66vxLeyKpHCJ848uNga9twrRUN9TXySZFU8sWkwgNsHCCsNo8cw8MBNyUZuyvpob5DzURoE",
  "key4": "2WicREEMXmAfnkYnRsjQfXeTB4S4Dt15NDTHHGxaqFKaUZaPaKaKzbdBEsm1HecckFgB3kTrHDP5RoMBi5z8Bxiv",
  "key5": "PP1Xi65ozr7BncpYG2UFJSoxjdEUzW6UabyjGmdk524rETJ9rCnPsDq2ZWqCvihWiyq57UCfrM47EYXN8LfGz1k",
  "key6": "2VXTgJCWLRCQnM3kp5uFRUrccR49m5MX4WELwirGgs4KwQnLNQLW1WooquAGjXYgbqttMe1f8UUkB6VQVLpN5CNL",
  "key7": "2ZJvAL2Sn4P12Qmx63zQ6TW4EmXZMFKroMhSmR6soPFfqjzSiiBu4yjgBVJYJXL15d5EYR4hBDpmk2CCXATVss3s",
  "key8": "XDEtCwAbGFQcyX5V7ZybNv2P1va2UwSbsB3N3MeKY4w1pVR48eDp4u7dTWkCN5fAfZxJcCgo3h2XbJQskzS8zZK",
  "key9": "41UK3USfPsFZdTFZiqwVFmyXSBYFtFbcC2qTVbTYbACAVVavSTMP9iV4T47wczE7yN36kvj5pAvs2bfUDsqeWMTg",
  "key10": "2Br36kAGoFjnigLxg16J8WyK7BD1FMsv81PKuLVsR4NFCbaohoyULk4gcEMKx8k7nckoruYptffgaHeiMN6irJgE",
  "key11": "N9cwPZETzm7BuiaC4hJhbcW6joZce3sVXxbR4xSG8PFiGi1wmBubH8D4Qs5RM2eWWrbvzNmpXuFugm9gAd4FuKg",
  "key12": "VMo8YfECjgbsSAnZ8tL8AS4wD6ksSL4a8nn1k4tXJ8cnhjcWERKDXPrjCbtrYpx3NfXBPsyZ1fbQxewPXZHBSrB",
  "key13": "4tFFacKH5LYMegGAp68kZcuY93HeKon7TDsmpHaZZbhFyWZLfZwSrv32A4DhW9EaSPFXBLDG6ghScypL7jDbwZgt",
  "key14": "2nNPqMj3GXhJsfHY5ts5XiyNdz841eTdBRwZKYMohNFUbSBnipmjswbwRHg7CAwbz8syAMJq1tSkzoQXk12qtcWW",
  "key15": "5gGrzmM98Qh3f64gCysD9Xoq1t5zbxNiF5QQrEwyRDaDRryf4Mi8juVnXVtFh2EWYDS4oq9AjD1UL7hRp7Xm3ppV",
  "key16": "4sKi7mHzDhvFuSvhr4ZS9Nq6bxvMbEHN4GzPv49AhHU6Aoo2XLTx1ZtGTGjeG8SDcyZ2xApzo1uPrzUCaAgoy8ZK",
  "key17": "2qXEb1ztEhoiJeFTmW9yMSvkEGFPWfKFrLEGdYt1mL16W1n2uJJVPh5BNhssgGUk69imGZyp1En9mgKZPM96HNG6",
  "key18": "g4KgUy9Kr5nRa14QFDbiRRbfSPVWsDhHJ7iUZSqgAYw5sY4MGFTKH5BzTJgLVw3MbJfZBDjnGCqKpANEdegsNMX",
  "key19": "3bonBYWbmbqTM3SZ92HfiEnxRBhghLvypvGNkvJx4CdzPTdUGgiLYxF7KpFyWQT6vsxb9QnVXSi97X5TdmgfZu4t",
  "key20": "48dfADrs6peaeVcndbWQ3zM7uJJByMS4HXbxvdWpPhfJy8svpRj2w4Lj9wfL9RPbvtcfd8fZaMLMVuiphsA8rWBt",
  "key21": "3ofmTo3ABuC4Y5PtoRWEMmqk1vNr9k7ys2xncgiQhAqSjqSnXwxJyMx8TjJgb6LAFbKPbGGohjjrXJunizpKrhLL",
  "key22": "sRAYkbPjDt2zxbRFmbfX673Kr8sGZBFpTPZh48WP47MjpfBX46n9jKHNUwXFn6XEuV9MfWqr5CuehcsSw1pr5po",
  "key23": "2W3A6qXPLwZUFefvQakrm1RqdzppFG64GPQf5fo6fkDGHkZEd8xEN8HmBy9vbbRrpy7oLWMKAiXLnrtApr6Z4dWA",
  "key24": "2DuWF1vFYWsHbLH67UfhaU2ajq7JYY84x8TXp4gG1q2L6Y4xJJ1ZR4TXJQS2zkrriMG8HC1eZ6av1aC3UnNtbRD3"
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
