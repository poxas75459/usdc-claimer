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
    "WzHFdKbY28JRuz7DFFPuj1HSNc1vorvbCAoE9K2XUEcFrwyf5j26gbgQQJ7AvcJwmcrAnUurYsJqmEphg5fqok9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2czWiUJephR2GhRR8532Ca83pSbLskGTxh5HC6RxWi2cZyHDbQgHrr65uwmGMEtTqA6Jd8gL7HM41k32dwGKjE",
  "key1": "3zUg9LYuup9it8R57XnSZjh5xppoC1JYt5oxA1G8uNAbVfkbZCo3FZQFtNr3SrCgFX94DibzdTFekZzyiqQkCxAX",
  "key2": "5piBsAN7itCVAEs5fzKnmfFYUb32wMiD9thnVR6ZK2zXXndKcUGreBzQBrr9Gz3hsM2gT8y8CK4KPYeNNEnLpta7",
  "key3": "2fozCS9LczyMYKWHwWvEq1f1GDBaDLtjJdHXrff588pfQ5RA6kYfQ3cTjEnV3Rhac7X6fNNFvW9uLMLR94ns2D8N",
  "key4": "KUcFs96YNphJ5qtRFVXVJHoHhstynfXKVSxuxAzsyk3CcFzCFwbp1mnxA2eg8nX7YwgAysvjadX3RjUEx78E4Wb",
  "key5": "65EDziBoCnpZyaUZLXzvSUpDYP3eqqeZkhaZXhmqYouxfsft9mHbzqEzJEQi5gx4yDiZTB2zQK6GqNTaF3txqzns",
  "key6": "4DodpXwe2oUZmzVEq2FK4yw6datyKX2FnjEWx4V7sPL3WrZozjcgeFFCRwEKY5hMSMj4yNWDhEFHaCNjWjxPQVtx",
  "key7": "2XB7xzqSnXjnBwjzioYTJpa3qzXhidGuarLHtLF6tiAvkLFzCGxDYx6sDofE5UNJWGguj9gL2BRUEP8mriDSyx2P",
  "key8": "67jFv99NcNGUcmh4k6tU9gZu2GEWEnPPraUF5F1TDvFo26qFL2V22cpNSHau9TXyKJWS7n7vjCeatLz42hBW6BvD",
  "key9": "57fFW3hp7jzW8hte6uLB8X7tEbU856s81rSp3vm5LEcwA9wpNujnQtMCxWhwtSnULTADedoSjYH3JTg5g3bZoNZL",
  "key10": "PinqgmjEUjgsVUvGxDFPjtcuVHLvgEhVQHvZqueeGB4sAzKdiqmRwU9q2cZzcqz5AohPTHiqxKQFEedzE13t8zQ",
  "key11": "58U4PThoivc5CDahX2HpPTx5QjLhdjByepZ41XwoLaLwCygYVanHuKbusu3JzWARjgzgM6ag4S3nqxbU9mG5a34w",
  "key12": "4g4a724T9PMo4GVn2roaF6nFYBK7TMp9LQ2TSRWqTwP6EhWvw5AzUGnW3xjRDHhrXJjHgjCeUFwVdEPq5kX5jxx7",
  "key13": "3cnC9tPrnYAcHY1P6DWuYUaHWozGku1sg4Da3DHjPPqYm7cRndjPSvr9CLSLCz34DYHBD9DQ5iuqRqivcpud8D6U",
  "key14": "4e4kXA4wLt6mAnEny25pZB9tLwCfkKbiVRbtmLEvkEtEgT7rxibaJJf1ak8mLC8WgsyrfChTD91kUcqTVJhShRa4",
  "key15": "WzLYnqheu87nQQJuCubs8SoSX3WB6tyPfqfoTP8c8dSXf37MRvMeJuf9kFEwKmeYefQ89BQsaUqpKPQ4dWghVF5",
  "key16": "2sbZKyKz816Z25QfBCdMrH1uxb9zcdvtN8iYeGZe2q1yZZ6xz1sxWFxShc98CXuEbauAaDqhDHVpNUotLUoMmhZC",
  "key17": "5rAtsPwBVMK5TJCVRL7UAj1u3ddVToT1fy7HFcb44ovMQRB1mKPSyjCQd7jNVjqxJ88wxR5vkmzKBXkpbKc5YPwJ",
  "key18": "2cXKSsGrvMUZH39sF4hh5546XeacQW5NJdqsqrPQkZ4YR45a9idGbW6RKsHyqxyqNq3KvtkeEKSQdyVX9u2xRKDv",
  "key19": "w13r9X6XeyDGQZwxGYfrrsFkSncvSBBNsUdT1rG95YUdLaftEpMM74pH3WKgRWLfGnVPsthtweAFcRViN4j2aZk",
  "key20": "3wfTpm8Uo3RbbRTfeiH9tq8uNXXJHpHYpHLqDCpLEZvDNwS4cmHoAwFYP73qJ81viRufmmBu4rNwNk7Vaao1EFsq",
  "key21": "FvFo7hPfLQxaNx4wuUAjHi12w1vnx881eyXmLWLassijQjf24JCFuKvD4SvUrU3b2rTJdzweKYMoPS2cPGuejjA",
  "key22": "5TheEWUCC13YJtH6J4fpVyStsKZmNhU2UKBad8U6hkja6CEhEracy2gdg6LFd8T176dFPdvmThNwQxzka8zxP4B",
  "key23": "jv4PPTA3hcxETemzZnY7RW2q1oXMJGc7qP6qmjs1YFCM2CEzqo1FdCuq6MFVTjZwjJz64riz4ir9vtR1umG1724",
  "key24": "2mhAiKa4fHfQUw2Deybhd8fv8mXbaCfE7Ej7731M2AERJjDz3PpURMHKLfDRH1uemjti5QNK99sMwL1AuCq1NBBH",
  "key25": "31kGy4PfSr9aqezPRN2BCRta1mm5Ch1nKbmgfu6J6XpXum75aszQeqy9RYb1hMJuqyY5YpxCL5A5YK1GteHcQVbA",
  "key26": "3s1R6n4MeHedT63aCiPGDouL8zRdGJFJvyKSnJEgDnABTSTiCXRb4kB8877ZeuJhbUstXeqwRGXDNW5y3AF1kw68",
  "key27": "A61AhBqG6H4ErQk65hLzz1iwPana7WbGMmiZHSCT1NYhzvCykbynAWFZrp1AgxKfRyFeFmZM1Va1fzg2B2ELVqh",
  "key28": "27YPFEKpcTRcMa2gRiDZqvfbB7XYqT3RJdrrkFUseSLzdkqw2WqdPkWL2eFHtYxPuJPvKTMtrn8y4cU97ERYEBhK",
  "key29": "66zVfywQcumiWU7JRHzpahgReZK1eXhdMAoEzxwAVAM3cRuymJ33tHNWU1HXP1kWpouqS9kZx4qgX9sHzHTii6RY",
  "key30": "dshWGnFGk279fKh3AYuk4bvZceQs4wBM3RecuinLLxg9F5TzcSjQrNq1qBPsyixnq24B8ueN1QucyZWRsxwcP1X"
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
