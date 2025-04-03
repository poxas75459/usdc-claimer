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
    "2Xp6kW4z6itxUX3NCLvp62F3yggT7XHEVRwrcmjgUG5prZsy7b55P9BDLmm9mPiCYg2sV51aCKL28sJRCzBMgg4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63AuYHvexFaf9XWy9BPEpJYxjZo4qeRnaytYu3cUa89HTWoY4TVb9kBarDAAMKmSc1QquFiNrGmiULQ4171o4K2L",
  "key1": "5gdrdZMHYQBwE4aZ1hNLGBCNHYxRAP86YWC2whk4Bm21nrPM4GqXsX4Lgzrggd46TVXdypB4nj59osDAbvWRyrd7",
  "key2": "54ujFL3Vv8F9QUdEvkLLMMdzddKPRtMQ8toYUg5FBFiok48APyz6g6BHc7T31KUSLJBy5W6GeAn2uN7yg7hRRcSb",
  "key3": "4hWNH1yvhiPwDT3iDAUfhDTy4YHR9HmvZ4WBRA3wbPrnRhi7CLWCMZVPJFJQKV1HKGBfXVtQAqHLjBaxSzByzcwN",
  "key4": "3yuikB4aHtSwCPh5JFufQ8vUMXKZic9u2g1Vzxo3cyXAhcZxJk9E2iwurvL1QG47ED7kv64spRxu659EjJ9DaM9K",
  "key5": "5Ciohpjd22zEgCt9xXj9kPBuPyPuVNUHsEFzwFDtbdNmbJDREokWyKH39GeLeEfchPSBPKXrPyLyhiS39SpSYxn9",
  "key6": "2rorXyFz8dyAG4FRmG7uey2nMhMtpDuC39sSUu5GuNsebkEJ5yE6wPQKnJ7WqkVF1YrTkDTUPp88TSEcqMb7gAFi",
  "key7": "3tUN2kDomPTBXu7Ps9v1QDHFFs8AhLd6tYj5NUgcHBRu88d16EFB4HMYGyWekAbfKeb1Y8WVxzA3egjJSroYK1Wn",
  "key8": "2tyCiyFqu4RXGWiT43yLcoxy8A4sndLKFmWF5REZdzFEGTKtM9eY4ehvbJNkSB7ev3o2iVDjLMXNHqdDuiGXr4b4",
  "key9": "3YfiCvs3PysqnHaAeLzzzGLsB49Kuy2N9C3CGtBtnDKff35QF1ZjvdMsadaSoS1TbTmGnoXPFRBAVjAhU2s6ZJm4",
  "key10": "4RByPuRuM3vMyTTBEJPwSmwuUqj9YzvpjxAAB4r39vs6hx4vpUfahv9Revh2nLH2oW81to1Wg4LUw9wzmm1y6RfQ",
  "key11": "2X5Laqx97LYppv8tAAgkymowEUextQ5EMTnzqvCpLHC657p56H1pSrAjVzJD9sXPJAc5xdte4mvt6GUKuYGH4GzT",
  "key12": "hb68T1Kk767LebG3LMAzdnrWaRb1FhXQPhHeBgbVTbPJHDAM9ATWZ8CyPtzpgigvESqMUeSx6Jxobnyv7R1rkEA",
  "key13": "q2mG6RLy8n4z1t63KVKc62jWffdsz1ZEZmT9NpzyT615uWUaXT2EnCrQz3qofoYbhVtSaqneivjjWmY4qHNindz",
  "key14": "2FtYXe9hPFMsXUZc5zjphyhro7wVoy26Ajbm7GPJYcvKWRZEuDkhZzuqkc6gQdcp7zLFZMBiupfc7uJJguDL6jHW",
  "key15": "2qBhjgKZdgvA8wdStuSfYPQWwvBxTXDoqF7nndr7SAoX9w8mHeSNcKkj4rY1oDyKgQBcVEdfYYMucDaKQ8xySX1A",
  "key16": "3TXCWUaiKT3DSm6oTchVcDHfvYkLTK49KbRUeSG1y7qjzVMFHzQ2wqp4nyzUWC1zJD8KpesN3o58EZwBPZSZMu3n",
  "key17": "3RVc3VAwBQKsXudiXb4eCFU4XxCr4mxNT1EfLvbTTSR4qhR6ueRvoqtbMywVkKJYcujcNvebwe2mP8dffb7aV2zS",
  "key18": "348R5WByqy2Vfrq2P5kowq38q629e4UGnbNtscqNbviAy22enpybwn4L67mzdPLKFGW5n2aF5gsbKwVJie5tdAet",
  "key19": "471aTXp93iSLbEgKUr3vb6KUnAwQj5nvdYYbb1q7gjDZBiWLcfRWffPyRafReHUjDGuGQX6i7MGWqMKi6kMg8uoQ",
  "key20": "Fdi7Z4ajCxtNMQm4YdBYxJWKBENoBav37r5DTxSGJpE1asri5kPkVqCkMiTN7fJe2rC3pNEHTzbR3JYBnVtswY2",
  "key21": "7v8QDKVhjCyXVWxkP1dUnfbbDcSi3vakCfR2eRnxwA2w5oQgLxjKx6rCHoNmqFLVcihNqmR1ggigRh8TNVUjTHT",
  "key22": "5ATp4wEAuuYSYdFjWCKGeVD8vSoPL9ZB3BBhXdDYvyY18PccGnFoehAqUWryfqzmzZBuhCTBWAqWGRi2KE4Ft6J4",
  "key23": "2jog4AZ1CZ7S8vDtJd3ZXUzzSF1TipbPMtQCVh1BnB3qF6dLX21tximoCxwViFWti38tNJu9BsDmnR4dA69UW6pa",
  "key24": "4Dyv9L5FN6GWk4TJZdV55Pkg5ZpgqXoQUdMP2xr4zAHi2Pz96pJmagbeqCmm4nduf9bQEtWF7uWi46rLbfyCo21g",
  "key25": "qjaRFoXNzRdXjMDY5S494PbiQnJJciqedQBGheKAqEniGHxoZ8KrUfR7QecFBRohVhu4382K8M2smKXh7jNJbtM"
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
