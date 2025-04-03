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
    "iXhqJMGHiHyP3Ls55UMrrg37EQBsig82XhoobAgyKrtfRh8Prx2FEkAQpzqYyQhzNSRyyHoGKGCYXCMsa75ZBM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2J2aUqofJsr8uc9w4pAN1nvk48GjXQn6DBi92QRjg7QvY6UzdWupqkDR9kJpiVm2UxM8uEZnHYw1WcQQEavFBc",
  "key1": "RSK3EtueRF7kBPh1TeFB2fHWUBy6VjTpWdVeDfhnmhNwPq8RospouU6stKh3Aa6wj4ury4ScqyQJeRABxtDFwL9",
  "key2": "44hCoeWA5bPDx44Jc8wuKKDod86ns11ZzSixVo4qAfARRQustvjDub9dEkv5AiVxHjQVHgJGoPxtxSvanGkfJkJs",
  "key3": "2dmJbQSeHmKEBGy3evXBNKvd3dmgmhKL5pk48KZFq6MmnVvysdzNvqG1TmiHQPsKJ1AfW5y8phMvC5ZHZUAQNQjd",
  "key4": "45etSG1FRksvNRVAZ5MGrkp3otSXYPbWd3beTn6887nnGbt3AVDDJYauBZbKYtA9H6eq39TjcPNhSdfAooqogpq9",
  "key5": "1NZW3A8tqTV2RFrq61af5toHcFjrrMzSqcmwk3TrghMe5bf9FeCHjcN5G293gdkoNtEyrQTG5DQUiCggwwC2PKo",
  "key6": "3uvWbrD3zU7m2Djpsthn7y2rEu2HEB1wy6f73TU8ky6K9RFavWvxVQGiz43MGfWNC9kJeqrMGqzz69AgfggyterC",
  "key7": "4SfdZ2bVQFc4ZsjBqw69Kgje65D6darF73f8ntNmeCBuohPhh2916WomFuCbwX4rkhUp51AxcT7Tpuo9AWN6vqoh",
  "key8": "2P1Jw3WLGx7v6kp67PirsmqQkbu1UHEhyrXZW7SEntFNcbYfzDz3aDGcNUUoEUPnuDAnjSeaUpb3jXfdEDMtcHGA",
  "key9": "iE3hUnAH6UiSLizB8RJQdW23tB3JJHrWjkXf5ScQAQzibvQ8q8E5X74qrXkdnbi4iyxPRLftX1MZ13gE3aPriMz",
  "key10": "5n8614sBKnfnHqpA2NUtG8H5MaZwgh5WPxvJ2W4zRfy4rYhmrEKG4rpqZ1HMXeuY5RqDQDUxGKgSJkNBwTdqA2e5",
  "key11": "DGDarvsSYLxTdjihS83gM12EshWxVwwepnMqT2ux85tgjVuWXhWWhieRaxLdrSTVoZNGmc4C8KURH3rzXth5TMQ",
  "key12": "3uSw38uEoNuKcppVb2BzP1uhv9tt6gf7LXdBixsXS8dRCRUkyNdddT1MzSQzXY6kqeBGiq9sLY3fZZ8ymqWqm23h",
  "key13": "1qjbQB4UCa6RzerMx7w8m3xtWAnyDJXd3niQP2RFNgap6EkGY3GumyjqTQKomyHFhNVk5VZN1FMPpRcjPwUHHTZ",
  "key14": "4gvnAZtpVDeeTr5SGRREaDGzWjbnsjcbtdGCUg9BQYxAZ7r7BkRxK9cBba6vQR5Gaomq1tsEgVavvCb33pWGgUCi",
  "key15": "82onuXuenvDsxnHeaDjTx93h9g1FsomCnK36bKNgPSvV3X8ntmAr6JrYwgBgufdP35Uwtu8XoBedrLpqjAGvqWU",
  "key16": "61FS4ZEEoBSoJzUFXiQTy3v5GYyWib85HgpuTKyqY9ProZW68G3FqEAUYeiJMDq3gdtZDd3PPcW14YeHuZvSYK57",
  "key17": "pgZ5DNv8pXwV4DDdrGwQCcUg7aknCBJWPct7YXWibB783AZCq4MhX3ahThprMPVtuXCGzh4pxauVi6RLq8BKcGC",
  "key18": "4fUXAu9VXuWpKjpASFPUgNjBvqbvqWVkbsMrWxcuXUN7iyJmZujjGUyfYMbQvyyYUfZq3kd1tStUzJUjhCjkyshA",
  "key19": "3atEqLHbbVFUQXicAWpNE3rYoKNxhzD2y4HELerZ4tviJGvvAe8YCwszJQPhv1ojGeZUumwGqKghfEuN2SZpFVCt",
  "key20": "4Vq9zeaKsA17iGSt6zGqtXxurpPnk31bEeSY9VKSw1e1nEZbnRcS4Nrq9nrxgk8n2Z7eQ2HbTkcetwnN7RPiJ5ni",
  "key21": "3DGhAXEgQFkwPQhyikLt2cauRG4THjSarFrkZRomP1D28Rxiq1a9ayiQw8EqWzmdEinnnDbnbffaDMH8VGsHRWfT",
  "key22": "4tWofzC8Kgm7mwpUm4vBKyaoj1Gk11pwgjn1k5D5MNm1zp5y9biPk14oLTQmFCioHLoZ9Je4bEtfnMpSCGFx84fc",
  "key23": "qcsJUD2WmwTCAbyFLPfyBTwc8ANRogWjTKrgNPWvReXWVaPW6T3sCXuLX5uirkCrooBu34ZW1Nzdmb1mSD9Nm4E",
  "key24": "3UJaespmea7Yai8LWXtaBBesmt26XBHCQUSLFVfnxKkXBocFiXZwGb39sK3upRZdT2VnyJCWn1sV99LuEE8oNBn2",
  "key25": "2CwzhLWU9gUqQDfakAiavUu9AzbGFAJMSzPXzt156SHArCqDFX9955gKhDgG4zcwzfVhiEJuWj9RR91UfbJTVBDU",
  "key26": "4qNQ4jBP8NNQ4Dz92y5ptkfyZSxEXjn3SJCJeRr9ZBV7sJpWH65Fp2nJfb9YpFr4R3nCZ8F4qP7kr534MBk8dQiU",
  "key27": "4V9moNGvLCEULoeynMAvS7o7GaCThXHwnfbjusJxVbGct62y1RwYt4rdkpeHQziybWPYE7aAoWPyqdAWSUxxLDp4",
  "key28": "gPqYhn4fGFL5HQCbQyyNR8ZFGhNinxYfnEwe6wceKYP8s5uSgSSVrzeBpGa4Nwkd4ZMsX3qt2AGBPMMBzVt8rek",
  "key29": "5Y1bKDANWNTUR2CFm4NzGjs2RNULQB9BshABcME3Q2Y8AVwmZa8oedLVuLZDB1QgRmD3Y4ZN1k7sb4cVBtqQWxw6",
  "key30": "3QVQCpxaofkXoXTDr4wQui9KX1YQAEViYUYHh8MRxL57iKpz5NKmytS5bHtGcyReges6E5RwcQxMNsLNf9vkhvWw",
  "key31": "vTH8uHRAYPTGpJa87UiQ4HL7cY1MNs7azTfzj3E87F81kD2RB34wDt1RgfpNyCp1hTma8A3zaYSReMpm7cc1FgD"
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
