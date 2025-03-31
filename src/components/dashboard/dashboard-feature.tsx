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
    "4EzpTcpNnGYh8xPF2pEQwYcdvU7jeXy6UcYAyM2pXvFhP53zS9YdQrUmAkPC86U5t6fWgxJAunb3nhFEaudigdAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1iQ9h4TWiXieEFeg387pMWk3NEzo22WWCnFt4fdXj23hhQp2aQZKDrZ7NrxigVLd6DbwupuLXPqVybgCNdZAaB",
  "key1": "4cdAVMxh7Bc6p3mUarXtYbD5sNNtVCKkNTNGYRZs2zUY9XwZ8gwpjzCM11h6QxYtjskCvEc5N4UgT2ZahhBbGPK6",
  "key2": "5L3sEdJu9Aeprh96SAMtaUHkESKbiY9Rh4WPpyjjuchvMYyddgy9F6ggNh3qUsBydRuoGXxtq5teyWDN3mCqSiti",
  "key3": "4Fxbsqp8uvR6sFMHgFnKbu4HHqmP2ooyRuTxyqhfYr5EuqWWhS9BKToy6qvTTsSoobJ8hUqHdDoaaKkpAi71GzSd",
  "key4": "25qEE3y5aynDAEmmP6DdvRmBkPbhyvoWNPnnBLufbwEUg8L8RqgRjK1qPrGQAFdDe98gmMF14ro4DDZsgynwfepg",
  "key5": "5xSRLnk2R3RCrVqDnMd8hvg7wFc2E44B6UYsY9Q1Yk82pqHer4sngZwS1WQYbCpiSXefKzPGqWYA5S8Zhf4K9Zgw",
  "key6": "x7smc6fz7Q2F23cwmpj1xaTwvRcTSkrUHXdFf1zPzKvKihSCf1F4DivXN9ZKpZG3BRaYR8ikY3nYG2sbJr4brVU",
  "key7": "5HdJpfSsWVLXqN8ihkUXpdw2DJ9C6CLF7XAvUkvJf5GsaERQQ3WLrSdpwyXxbtyFz27yok2jpfmRBNGeE3LcaiVX",
  "key8": "5zimsswTLUWA6MivZr3RviY61gLH13ryRyyMo1687hF1yWjm3cf4xqs6P2zUekd8hsp2aRXs432fKK1qDqug28am",
  "key9": "4UU1acr4WzhrtenaznWfYMPPtWLGaqhxWAdNtyZqJdP9k6JCU67sWuRSDsDTR4vfp8bvxgw6hcR6ALGjy9eaZTDK",
  "key10": "36JmHzE8LDQxkMozhiFWyoLN7CQ6hD2RFH5DK61mM5tD4sdrNwp2H6uxXjdsgVx7Y6Kxh8E1yFyaraUg8Ubv9S1X",
  "key11": "5zMdrikhn3zK2pT3vdkFN5BPRzxhnugHetMA5x8hQ8eqFhWHvncvQiFSXs2o2xPh3WDjpKuQzc1GjwPgy46QrqyD",
  "key12": "4ZJ1EoqcYwPL58KMqd66f6U5wUumCWU48tUczpq97m5KEFVTPznXc1mDiJUfPXLPJXdMbCibZPDJCMYW3LTHKbE5",
  "key13": "23Pab4eNcADyzRTSRVvyVTxWywtuiEBvtZHcsrrQBTcMid3jKVPcTjYpY3f9S9nEu9jjrPkxUtxB7wojVvdSXR3w",
  "key14": "5F2sfCET1iEqbUbaAxDg1nhjgucSzA6ett8i8R5xq4N1FG5XTiEpEm3vrPfTmiQ712Z5LPkDoPM16T91QfRTWTP3",
  "key15": "3J7iNCFUGofXoCXwAucqmaAY4w828gyA6htN9F3FDaSUvkjn786vQev6xkT6wCCqJ4VfYWSyCKSkZMSjXgZDHJ1F",
  "key16": "2LAzAQyBxRwepauicDk36fAencyaNJXEABJYVccTm2AWYQW5yrtMDdYF8nEqXQXN9WumQ37XKUZWcZsaD9b9ZSUK",
  "key17": "2XrTj6YeQxren7at7DA8g7QCiyHfzBLVN9neeZjR3avmBLKTNLB98gr9zrqWHG1TwydKLxLbjAt3UvS99wjBUebi",
  "key18": "23HGz8edeqUKePKsT1Uj4K8s1GDsPdwAe5YBr26dKpxFNtHFqKqPnYU3rFFt1e9vVqXdXmdXkcXJ8iiYA98pJb3U",
  "key19": "2xCABA5brvj6A8Q86Wed917FeVYxNboFQrYJ9wiVA3mkHUGNqfdd5Njg45YUKq2Scm2KsTLJEmhysP6LpxefcQAD",
  "key20": "4tktHrtxjwG8qd4JyUE6zEyu61QzqYMFcaa2DGxH1qiZ7SJn2RDhTnwqH7BT9AzpAkcRAVGjDf5NzJD7BH3KdKhX",
  "key21": "3NtXjCwWyR91xK9vKzh9xzcWW4DnrtotxtJFxCwm21CVh4qiiUBaquSVQHPHWXeth8vai8rvjucm3RqbdsCsEGKo",
  "key22": "5YFv7PSygMi5vXPbkCNdeGPJGTfzQBbv13Rn5Mo7zTzSgbZAtCzALZQ1JtUQkGRetdr2WVtYqN25kboJ1d5gJ9AK",
  "key23": "3hsvd4L2n1pNN69vvvgdfG9D8isBs8f5yA4VtoEX2W9QkLedSnnrYDkjxJhk4yovuAPk5qWmGabANcAPoF8xi9ZH",
  "key24": "4zJUNX4eAuUyMRNVKRSB1Mg2mB5YzK2t7orsEMMxdLRjUo3RC3dDSipsukiwVMi3X7apQUq4r2ukthBqnyLnHdqr",
  "key25": "4jT2TtyYu7J8ZEVpu3ifaaupGydrgXLdob65uSU415UFz44NVKGMDTqNyQQjhXittaS9jM9v6WwdWb4661K4WDbR",
  "key26": "3UPDGtqP7dkBjQcete75GuFR18JEwUwidZAEgJfK89jVxFyfwNmQcYo5s29BvSW7LKfHig6gRRVJrFrtiSYgShe4",
  "key27": "2SBUKdsN11zCh3qejB9i9BYspT5uq8KvNgu1jDUkdMutTGSPQjfaxL2ohSwjEcdVTSCQ6EYp5PRQ9Q5uYvDJHc5L"
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
