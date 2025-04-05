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
    "Z2GxxVmKurnBm3ntzY7zmdLSjPF4HbRTULu7cWDXjFfaw3e9qGD8E4sqymmDvJhVmonG3LvuwNbF87ne6kkZ9BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkyeBLttTYt9JDVnVDDpc5ru4KNtpwX4D8FZ26kWPrpe3ciKZRDFsBVaPFAxHWp2ViTQkaKHnMZHhkiwmkfQWgF",
  "key1": "bg8Ev5V7yjSSZ5HtjzvVvn75yDcAQEfvDq5vvqeXFzFcibKx6AKPaKDmRUfZwWq7FPc7vkCtuttWBwmuvRpb8Rs",
  "key2": "3U7BYuynZQAj6b3kuztp84z4wSN5cKB45S4v3R6DPgCkQgMvXECLhS8hMvcfJvZ8ELA7LR9LHWH6BRwf1Hj6GGmA",
  "key3": "5Ni5yGHdEh4wtaMVa1RjJcz7k4VfyPw6iHHjPwFRNdhmDJMq1b62ibs9qf1yot17LRyp7Lqe5cahYxf9FHUg6usG",
  "key4": "37rmHTv1oP73URCrQTQwm3iSmNwBEDuAmvW1WgGVAYZJsXdKR8iAiRKmBJJsJu3YHVDERTMmfWgX3swzFZNZ7fr7",
  "key5": "4bsL6WigThH2kU9cdQv2u6wBuw4HFY5NWfUHvS8rmrbvPLQfptWBcHYo2eVezqbq9rnxhkzNB2GK1eHYC2ydPmeJ",
  "key6": "4xXtNXVZVfzKzyGABMgE2JcSDNnp7iwiv5wVhR3wm24bR1vqQAEna12Q5G7o7vWeibve4ncQrVomZaLFcmDiEwjN",
  "key7": "5YurcTVujSMaoACpc6J3K9Gqcf9czTgC7mykxN1CdqjMgY5Qoj8WiNcDGNrcNWUuF6TNFed3FqGUD5eNYAR2gbZ9",
  "key8": "4itqEwEp31KVcL3q2HN3jPQQUuao92TtfLdN2WxjryWTE5Tweuvx9W3zRYxJQXuaMrqNACkQmu7YSNS4xi8tAVAi",
  "key9": "AmXuauX6zLaTskpcnih7zT4mor6nrfo6ckEdJsk2SEFwfbtEU3Go25qNR8muKGtS3o36Cggv2GHds3ajjaexJr2",
  "key10": "vaVdKPS8GotvMFVFvTSfVjybLUNSX5Vvcu7M7Ukfk5WJVzF6Jp2BkEk34Z3bmYkmZpN4cWcjDrBB6UFaLVk1TM7",
  "key11": "56actA1BcicS7mS2Fs9KP8xrVZVvhfUigyxpwU15qZoSpv2tgev5ERRZFh2wtaFmVtc6ZU3zvYR3WzbDeQAkrQrv",
  "key12": "28D3aNJfwYPVK7p68MvebpXXtG6RTKPDgYm8evLEZ5ifHTB4jn3QnTeT2uPFa31PNFJ9asSbmxwD92bezHgF7qPQ",
  "key13": "4PwLuUfHqseHaBYLs3qwJxApk2nyuhZdtk2z3hQ5uPvrr2EqtAvPfggqsZ4nq1Tn99KaK5hrSqU4NJjEo5B2DG6r",
  "key14": "3u6gEqe2adoWfocbTRCHeVZf4x78nGHBoQMyic5b1Vi1Qu9DiwKbhLSfUfMSvmqkT3sBETQMfFvWFys19GJ8wTsT",
  "key15": "2JSiro1v1W4Hdfsf2dhx8odAA7pKb6aTFf3j3cGsET8yrMGfUwdho6i5pidpgJc6eN4jgaaVpHJ6iuU8ywUXhBpX",
  "key16": "7q8Lm5NJas2UoxKZeqpZeZ1UHQXiWdWbNYf56GoyXnRd1Mq4qonS4MitySHx4TtiueuZaPpcZTpCqaXz9YML4et",
  "key17": "59iXdkLM5ou3dhQDQ8ZG58uwMzE6yG165xCA5ahfjLxLFMRKGjo1JkTpYoihnsZinhzdVGhwmrWiF8YtrtmAfQZN",
  "key18": "5AeT7prByBuLwCJ1U5MAiG9nEyGzEJYjsnoVkXb8EnzghESUEjaJg5BUqnY4pZKQq76V2RL1tmjJZXALsLbA8JAm",
  "key19": "45TNeKC6jB3ux6nP4R2fgkTepXhLqCaB8YLK7t257zSxYTmGW7q9LC4XQzH54DfGZtu1YYjzoc64wvYV9iqS2GsT",
  "key20": "26WbL2LReYPNifQ8Cff5UMZX6QzqY9Vkp6eEZC2897qKpP5PhV6NbUfhDmhyEKXHsXjz8nB7JFTxiMX7DJ3oSxnz",
  "key21": "4hoJ4HkxwdGiLywXyGVY7yJUxK7UzVJ9oXYjpmgDc2R42of478GYmUU1PiPB3fc6uquYSVhAV8onNAEZcrgyPcpT",
  "key22": "4vAVzkzxhtUm6LW2oxtpoUVKom4gGpm1aaKuSmaeciKbvYoPJC7WcfDjx6T5skLbWTSUNc477yiuYhdxwXPZ9AJb",
  "key23": "25nSUgS44dU6cGB8Bpt6TydLtWT1gNAJb3ikySoyAoLk2D2ozQ2aXHgja1cncgXTe2mqLM24mDEjCmw25KHJ3ALP",
  "key24": "2EjiDKKGebjBJQ8CDZ45UhYsGJ2KypspXbek2VugD8B1cZuwts1oN8TLwBtPHJEohVkpkLK9Zbim63SJ4u5HzsFg",
  "key25": "2rYrbUuPVfWb8G3uZ5eeCMG89VRe54ycjex49d9a4hzeazxgd9LFXbrB2G6KLWnt5vYTKoegM4gNRmZKULnehnMM",
  "key26": "dXcRg5qsvv6kivzhg6o5Jmi7j4oKa1SjNREUGS4tdFpLjpd16GsWYL4CEK1vBGds5APEfgYCfaS71FqaUALZykc"
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
