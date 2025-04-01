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
    "44ZFVf5BiV9ff8hfWLUndnintAbmZJ9McM1QtWY3rXifDtoniQyVPqkzQvEobFrW9emitUqQYA5JQKmH9FwiMPdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XivYTQqmmBZtPL17Rjk6M3MgVVg9w5Z9FfeHw8AKUBjfpDfoFMLX12UGJG9hZ31GPtHeKZNaot4Y91fivqf6ZEH",
  "key1": "3kULaJVzziBL4DifbJ7xMbbvVMiEkaypCXn2Ti1n5VJaydXTBXdWqhoP8a81JzuM857tCu8urFLmjxi3DyeMDphk",
  "key2": "44o9NBq1ghAzefbMsJXSYifWsvxyku1xaQ4TELccFFfCtsowk8RHLfhu5TcgaNaAJLgmwWLpcF1fvtL2efxWwae8",
  "key3": "5M8XhB17FxcF3TvZUA8GchBB7Vs9YfGuQnyWhQQ2fmoq6gTUMoY5RhYSLpH2HG6iomRivRdm8DahRsTQZeD2Y9gu",
  "key4": "5EHoAvCAYT5CmkUrsLMDBKLSwk5rUfrYaBkkUBvdadQtfj4W1Ggbe3j43KAmgx8RjFFqciUzJu5dkxzmLXHcvPxP",
  "key5": "ZinBdULYnbEpdgKNhfNF6u3tHabuav66QqGsdm54wjNYDqtoBvNB48RKMB6XYjPNh3ZqUGYR9mvHDt6YT8p3QPk",
  "key6": "5wRRUnTeZB8MrHahwXLYSddjrekMCLhbVJgba7M5Xmbc8GitRSL3Fm9vj87HeJRtJZzznoCd2wRmJBD282xHY1wM",
  "key7": "23d23T65VVPi4JitsWLPu27W8CyqMvqC7YGz5CYtNRyMyyUq2WfktkZFj7JXpMt49cQGtFyy1Zo9SPVSp6edk267",
  "key8": "4dvC5d3uccQKh8Lm2VZty77bDRxgxaUHwexzEPuqpKz2ttbz7SQoCJePJLh4BQ4adZ5BDnZEm1YWYa6rhtc19UjA",
  "key9": "52AvDF2tAjiFWGURvBfN615g3eeUim267mTsxpQV3xTmqetwoFr6JUbXChakGiQSE5s4hRQDsBFxCLNH1d53QTVH",
  "key10": "4gd7aJAeXjj343YMN5A97qh1zjVwdGHoW7W9SmXErVpLzC11uS78Az1s9zyMfgrLg93gdzBLDga6TPQwCkjd9pdw",
  "key11": "5mJ44EPEbhs2PACGeEJv7rSjXyq8LTw9igxWK44E6FhZTvp7TLVVNPbLkXPygVJLWVu94Jj65k5AYMoEiuBkheF4",
  "key12": "4R9VsTiV1iLQpyVVrA3GHVmysxUetZgvHyoGuQhAQaPgVgEbkzTjp1zea4o6teoKg22PwHxwXRd4DZsHAUvo4oR1",
  "key13": "5mfP4ULbN8NCWAAGmp3UMFPg5p3ijPQRe2i6yBVetPzS5LFbodDWZKsHPAKQmscrCnYebDGsQ7pnFUe7hcE1Xyai",
  "key14": "3D2bUxPAnGMHasmXSJkFALCNeCsdMLz5F3ECsgkcXZxqqKLTAtkBU7m5cNgCBZkrmCVjZvFriKMaKz3zq89YKPLh",
  "key15": "5ksxCssbn6AaKEYL5wnx3gf68juDBtQ9dY18jSY3e4oERx9aTn5SBVUhRw6FVb7uurcGWQ6GM3iDmEr3vf4cukbG",
  "key16": "PEUPgneH9p1uyWSamRk7aJm8HS3q7uP5DzrLtzJ2gi5bfGVZLDjjnqpZd2L4MKwRnVMZqfAnoBtfEmRcbXbTjyu",
  "key17": "2ZVfRt8LnfUmdWyaAz8sDMaEf6Y2mcGRtP3z3b7MQP8UosYd3rzpGdrE83zdwZwTDDTt5ULdVHAcP49GCpQ3wdxi",
  "key18": "3SAoueUaurbJRfgbHHwBNPddr7KmFSbLSGXcNeRpiJ6Hou1ykDGmSHWc4ye672qvjEMcafqcDKj2HNdp14DpmJpK",
  "key19": "ttv2uCt2vsqf6NXZ6a9uaS5Pyb255FzeYerdpuUEKUQyyFibr7mvTSME8PMXiatJCiZbZ3hNuyedDMCAjk6sLG8",
  "key20": "62usmx694fbxSPC4oJ2SY6rRJ9bt1kXZWDpoyYU9it3z2ND1NFkGsAsciGEhxR1HEniFdBReBEjER2nPXuvMATWJ",
  "key21": "2gS9y3AjbjiTUh1XCsim193UAc6h2azigJ8WfjdQo95CTeMTVyarXt6tNw81bcd7iwtDKUVpoBEEu8kCNrTUnarC",
  "key22": "uL4x3kC6ykubqMW3CKvtLd1C4yrfVAfUXbEfsQcTYERdLWu88a2sa5FWfNsiqsz4jry4RfrPynXuV2oMC7W1rGd",
  "key23": "5sq6xpNLC1nmB2ScMXbpi52KKb6WBa67K6nxLkPprLj1fJbPzoHNNL2NQnFG4xtezyYvZTtkXM91EunEQ9HPdUCz",
  "key24": "5n7KP9k4sBS5GES8wbkWRYyv5TweXyUbC7XkcZSMHCc8ffdtkyAZvPmXv5v7Ld5TjuFR4dCV1x1aWvy6ufDQ8vHG",
  "key25": "BJTmpPfRzeKGXzkyPoH6RLHGLZQAC2mJ1jtithX7DVs3SPcbyPkaB4e3FU9BwbHGuMUzMAQcWe7FMk5kd2dq37B",
  "key26": "SQbFoz5pw5inDGJ9SVTjU4Q1Pnow3ivzah3sG1rpAP2cddmuMQdMKkJGx7yQJEUVs2aTgLZPHqtxYU7ePUarCNL",
  "key27": "27ciATh5UMQWzd6LipG7KUkG2s39kTf7qYbPHxSr5sykgLREQjUm96c9A8uQSoYzmRJwjcz9etjJXDjtbPNYs7HJ",
  "key28": "386CVBbLm5GVUEPujcJyGdqFZQb4Drza6sqEGyXQ1tYFFURj2uh1qXoaU581UH7jHuwjLByWCQXViVFHiibs4M8A",
  "key29": "311Se1XDurHYbTCsn3AbuzQoUMpEsxSaEawLfiBwy7BqnSyozoxRVqAAJbExd6HGJx4d1vUCchFMRTJ1g4JjtmCe",
  "key30": "5YJowMFsJBqc2TsaQ8NzTVXqzWf1NPHkZTGiQ8FN38NF4AhqfzUZD25gvAccGRmJ3KKNfS2315c59AfKzHdH6tin",
  "key31": "32bSjM8FNST1qcoTjBN4EdTXohoktmw7VeuCRd2gfZJBw5MDmv9XvoicQShesSszwCtQEPG9r53uZNEfRrXwKa6j",
  "key32": "2QeRkyXZtJYJc492VH3HhmXmchzzsmUPcgTwUm3JZSyHgciP8JYgQdh2erFiodZJqTY51fzJnXxCXVH2hWkTxDkR"
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
