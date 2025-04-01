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
    "2J2MXjEm6ACTFmMKejZS2r2mX1pgE3Cc411iz6KH9q2BHZCzu75dagjmxaoGqFtwYihLpy2uvPZNsTjwmDLCFyJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C13hvHPcndCc19GuEUuyF8znbT4HqcNZ3Ke5CVYZehuUQaC57ZQbiuqTMJWS5UUd9CMFeutsogN7vWRcepivwpQ",
  "key1": "3DesLVWDMHGzhSdeFbU6fTorqskXCSeZSLo1mcvURhCNJPuKMtL4GH2tLarPAwRRaaYqcKAVurxG8Y7usEe1pftK",
  "key2": "2qAupyVLaw2Y6njW6d9NUWyFgZ5HAVA25WA2SYKwMzH9VZo7oX2vUdiAGYm3dS1Wfw51Vpk9PfBzSh1iaRf79AEi",
  "key3": "YqAG7CtTNfh64uCQAxAGWfwyqVF9SeMXy4RCSrGR3ZwSLUZN9GLoNvw7GGtFiC2mwGfNWEQTp4vc7EamZJowCXT",
  "key4": "wP7DAGHdPqiKZ5TcTfTBnagA2AZetiSfwdjYSUVo8mcJwU9seECjA3gDpbSSJUZ1YcRkac1m4y3wq4HqViYUdJJ",
  "key5": "2ZhTt6yrLiDd228dfocsiScUxhgBL4CyAEi6xpfZJJEsbBsdMHJy3SAf1QfR521ucaMgDjnn5VyhjZsTdWKtHoKn",
  "key6": "3sUEecPfLBSKhRE8zMgegbz66nMW8U6xo88tmn9wDschRNR2rN6hkctm5rjHeqL2rx7HzPrKuk44rTX6WmXAmyvd",
  "key7": "2R7H6zyH7HjCStcfbhC4gc1rGEs43x6QwuuGaE2mNNLkKPUFn93E7scWkCU5f1sAy5jJrVACjkwVHhbA9JTSJ2q3",
  "key8": "5uvTqrBcfMfpxcoxwSM1zrz56ZJWGnDcDShtpMXYB2LozDUPmniStg4iNDFBTanrjn3HGHSRFSZ7XFZWb43f8QCb",
  "key9": "4aoUvqTmw8Np4xmLwvvDsALbUnWGdAziKcPJWSfV7j5PEWRfWc9ggqiQb8kGcA6HpBkC6kz3XDgm7QqghTKC9iq3",
  "key10": "41BmfvPEZeBa338LXgLqH7ia1mH9NHiCi8Ez17J1zCJW9WLKsiKsHFwppfYakkQgusUrfteXv94muwhQSE1jifdP",
  "key11": "36Bxc8ucnhuxvnuJ8bqb3uvRt6ccQL1cv25iea7tU1VT6eKuSBz959eUbJhNXzFCCLvJoA8n6YaHb2mp6LQfFKxn",
  "key12": "28sjUXSKXapw6xeQGqHG7ypRVsrvHXBAYrUstSYt5geTAiXjAphhYcd5fHE6JLZ2RFYL96dGbCBW2ZjDfwHVSCnM",
  "key13": "5ML4aHoigZDBiMiqP3C8iAPUNCjsW7k8QhbTFdXNMVEkqYKmiepmfNm1d3GZiJznNWEvSgtkEqhjUKuaEPWYsh5y",
  "key14": "rtbEJxQHibXC1roVySfUwArM7hMiM3rVqrAiVGoz3aqMGvEkgVJD3EFWGQBprgPXHz2PugPg4bJpsVo9gw3mVJf",
  "key15": "2ighgLosBBNQNgJyFdwYRkpHA2Po7iQ5JPUGrSjmDX2FbqkUZqXJEGE5QUg8Gp2R4QaCggWvJ91TA5ggxYzj1CzW",
  "key16": "X3B6ZtbLvULEQuwEnCkyuGDf5dzVNRn8iDroUGGGuf2bVANd1C4ZskZs8qHTJsbuAg97HZ5EF2kBMtQewmN6d9w",
  "key17": "5BW8bChsTPfNW7c6CkEdaM1VYqMq7w9kuTdxzTM2wt1UGgdc36HQRw5GTeTUw2Ni331GWQEMGW67rPCn8gSLVRZp",
  "key18": "5h9i6Zk7yuMyPcuMPhi1LuugtYyCaDdZwnr4Rf5CNhMzHCu8jTf6Uuk1qFSZG9c31TaYoXBekUBrSpyDLJxD7WsR",
  "key19": "5VeV2nUTEeXqpG4jNP7WsFa9XkPBqkvh1tUN2NoBWq7PE6buctSP9Xz1dr3ZgZM79A8ZD8paKWzQPCHL4YnxM1Rh",
  "key20": "yjq7L5GtvYt5ApsLzTccwzdQvqcLFcH3FJ9Jsb1wvmbzpHrVnf2sfS6EZSqTfAMEeUvR3jX1ehEzLFmZjeo6MBk",
  "key21": "2PyJwpEGGvfSdaXvmigwbNyT31snwAxwoxZJzueDwxXG2RSgLyxqMCB6gcQTvzrrHHuosXDcqVzd9uwAJWPcbVsf",
  "key22": "2eybTrXg12SjeywaeVuWcPpAobYEAbU18ahm7fQ4WzZxJ2k7WBTSPvCHbr1bq26YAzkhSYQAGjFb6tVUF5QAaAKx",
  "key23": "2GMUM58F56bURMtAu5o5FJeQFQTiG5KFzgfgaKNsuVctBVexNiJhesBtNwJDcQ7QkaZf9WgsmivK6zmsSy52b2Kd",
  "key24": "32UwtDgDdQYTb4EqTe9jAinkmqzy4pfV1E1XV8rukcbPLx9HqJnJUM7xqF2cVpsonBmKM8jixwCtSz8X1XuZmiD3",
  "key25": "3NWgnTy7cDR1qC9mN7ZVPiiajUdq7w38hPkHdS8SQokgmdMY12FhzGZJX9YC2FtpRsUjd3p7BuwNSf1ww4KTRwfz",
  "key26": "4V1b34qhRkJ8LMFc8gd9nBUmQVHFnJCWrs9YmjwshySvwtB6q7uBNYKuDkDBRBKramGhSDcmtH8PEGL85yAWpuEi",
  "key27": "66tv6z4vFkxm4xZABSZnmHkT5M3WAdxGuP3oW7Y9SVc7ZzNzvDSY1VgPuR4saLxDnaYN5sfXBzY5LVcyQSuHZPcN"
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
