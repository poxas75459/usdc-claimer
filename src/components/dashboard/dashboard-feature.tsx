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
    "2QdA8UDTvztbw1LT2Anweg5F7HiFfFDEZHAPEdWJvmB5NQoHdAKQWnRxuXAVjocrsKaigeMhbt8DFThHCS3yHnau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QYyXmrLvYRURiKsiGdVA5YaTs1i8h2BHeGXNWnCt8zwVuo55mhFyYKBWNfLn6tiqTpD2TsxJEuaffkPJVnxVs7",
  "key1": "4Z8LHBo46yVGkwNtwvGhYcbCx6NGmFiBH9RxUV616nnUuNXTrZ2xuSdA9R54aww6HjuaF2emaM89pEjrem61CpVm",
  "key2": "4nvpiWnYgMyAy1kNT1F1K479wrgWjvjNK12AGWsiCUNHzv1zVd8rTRNSEQVZHou5kEgQqA9os6tg6VTuAPQ33RJK",
  "key3": "58dWoJJxMbq4yigwHzyVyY6GZKqdPeGiPJ3K4jt7hostWxRuFh23RAu9hAvNWe4jZnzLngxz5BZZtSeKxhyse5bR",
  "key4": "jnfBXNnQnYoff13SrXYEvFyaRPmT2oHm5NPLX2RUmoQG6kzHKhYyNDgFUzwemXKoVUWCk7ixefCjHJFMeyDkjyC",
  "key5": "27okWTtJP7t9HUJa216jkSbYTeF8aMA2y37XRuQQCVFxX5C5F2Z7fqXK6vhMfuGV1kYi38AcpYkkuULQTgitKh9f",
  "key6": "5A46KUVDH7sw5DJ66xN9J9mK2XwqWotizs7GAvAd9w7qSyfJqQx6P9LFZq6X7CkgJnnRKFhZh1vjqyeQ5auMQmHd",
  "key7": "3qAo3eQSFoAi4zi672yB14NfDEvwoQxRXtJZC268kJr18whPgtYLZPTVgj81dabjaTuw3JLDwTBU7cf4m36cJAaB",
  "key8": "2U6PwwMxm2ETeVABMGcJGCdc4BRuZBRbySrzDMMraC2beHKLwrnwQA6DYiuC4SVnQMoRgYpVnWvj3qd4StqfDXnn",
  "key9": "4tzqKbEU6Jg3eHtUa3Qd65jkkya1GmaAqYwccgDudMLxd6sjEqwZz2Kfc85HRytqjw9QL96p5hBLZMMvYdHQrU9z",
  "key10": "24Rgn3Z5BFJzb6gVZ4fKH89RrsShW9pvwzNxCQ1H22Qk9pSFisR7oHiqNcZePXe1G6a2K5tTunXHd7ZGPRzWTabn",
  "key11": "5gqv94BB7bMakrApUBuWcq9ToXFrga2mXT6ZCfgfq3kMXyd44YB5uzw5LmunkhapUa57WY1Bq48QnnWw9kr1xB1w",
  "key12": "tQDEZhhVLGhhPYfZXPy8mm6CnFHprapZwv15dUTBrGDq1hdgGPykTAfhKFkcNGbuYmdVYe1u5K2p3uncwSTrZae",
  "key13": "4vaca6zEBGKQ47gCQQ5cJBHgc4trToqeEL6EDqYD8gDmC249zeAMRQQFkmc9r9U8VYdjTnAwJvpMXotPM5Dbz6be",
  "key14": "4E7EiGfDmEf3BXS5bmCGAyeit9WRAfznntF3133jSJdnnvKe1pEqe6TcoYa56CY59LaCavPjCT5wartNEyRqLhEL",
  "key15": "24RpRQ7VqXBHrzGJzVNvaxiYiTPB5NPqtUBj21ZZKNgLGQnY2qzxWxEZK5PQnZAiXHztCxhCWZTWYkUzVH1oz4xa",
  "key16": "XAg3vfyMUwJmmCJ6sjwN2GKA2CkaiXycC7cwSp4ZnEAL1C9cG51Ak6J7ZmbFofhZqp8Hgc864GywooxPxPWp8rQ",
  "key17": "4sFny7QuJbMaNG34Ub1Rpv8aALvoemfE7WgrJzssEpNAF7YKb7EdagUpccJ1dW3ag9UYnkTr19rsLj8Pr9KozQvC",
  "key18": "4wTdBBLB5nYB5R444a4c9GsgKmo2X8XLm6wc8zTRZoKcUBaJKhWgXoHWa4NiJp3jQJRWczf2sfd3eujeCFwa5LSx",
  "key19": "4wXWrSuXB6dJhmi6Q6QYXYyv1hBbkCBLsdxxtpNKVc766cqicsWwgceuau82JYaFVatZr8uBUuy38Sp2jPJati9y",
  "key20": "54y5qjwT4No6JZekqqpjikL6aUzA3WEuMRZLnT1HNgbLdKqS5fXHBNzDSoE4ZLYgYChKQjt28fGh14hbKwBKH59u",
  "key21": "3FJgZAVb65GLFTJUfQMj4NrU5u2eQjJHsqqSjHwYSMDQoCwqo4S8gSmV623EZaPXLnkJLAjSyoMbPUrfX6tJioL5",
  "key22": "2G19R1DBZdGLpGTphaiSsDrAZEzCZB9SVMYC1byp1d9AFuKbHChR8DKcxVhbZeqrhoMJa59R9tZ2SihBn8YvJzqo",
  "key23": "96mfePhJn8KpKaYc3gcvFmZt5chNQT7eaLjQ8YbdFXozwe71tBCJH3xDpcSNTYQx5s94GzZDRakdTuujipBRvYs",
  "key24": "3wGsLNvzX8iH4GKndEyTSArKbyjwi7RpZ1JKgML9tMdaMpzG9G7B3XecruvBc9v5o25ThdBRvmC8fTACutSdtvTU"
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
