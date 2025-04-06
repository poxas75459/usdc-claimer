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
    "26o5mU4MfQtmKMbDx9cvdM3HnPBAnsVuN3qJ1nxPtQwMF5Mb1w3hEB29RVvs9mGhWQnHvuNdvQ4hpFdy865SN3VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MG9ipzE3SCbA4FEcssBaZ9LMbn8Eps4RPui7rzjUUXcZhbyr4A8QB7sLBsggZuxj5FhPumRYzW3vxNtUjHmHvrN",
  "key1": "wZJd4xHDnCMHQTK3SuADW4PDiCGQnw1Af9qs1AZYQmqZNmaED7zmH84jGKtCgfHW83ieHxsBy5HzBtVKDKSFQHS",
  "key2": "4p8NTag4rgUPsbvhbz2AMCYgoebEhyLDxVjBdG5p7cLnQ8tKccUG13HG5qgaFXMyVVHMun5fgKDu4TsBXSupSgZN",
  "key3": "6jXVdZgX9efxNu8toKNw1UveW3NaBBe5TKW1zpJhkBS3XWAsG5CzYwRDh3F7ZNsJadN1NroyEMKyHFPfXK9sp8s",
  "key4": "2SxNmNJUu7ckA7LNcqm1dacmz9K5cgtX3GVNJS67dRZus1iSYoCvVt7sXtRvFD8SaAhGkwauuDUBYTsvv55ZD1ta",
  "key5": "5WzoVUGLTFhSnyycZ5FtuzWra8B6BLAhrwfu1AzyQB5djXMXqDRcmUafhGotpwCm7wsfLoKJT5DQFBaDuKLAK7gD",
  "key6": "4kQCUMwYwUWVFNzhAS8R2drfRfWccveA2uhzLcDwWZytReD8zDEFju4ytVMKJqWBKZ4cpqBWoEqMv81fKc26qbpB",
  "key7": "5BbSaCVtubhAsUa3974ZqmfXUHnGvBfDtTFujg6YHjwNw5mmWW6gohWNoRf53E5BMPfrqCNVNXL9nXRnY7U2RRoy",
  "key8": "4Gnq2EiW2RW3cTubkxnr9zD8pXKq2S9wdYVSp157VVWTEBwuahFXWMeKUmgw7tSkas6QcF6Ag2DZsagUDzyVdNjG",
  "key9": "kTmpCoKGnwokuKDwrb2beWqCLgbVUSyT2qUHrzcEdZ7Sg5QwoZRefnvcaxoFKoYA5LVJu79EsFWZFbaoFQghbZy",
  "key10": "4wTrCWyDC8S5KUBfnZzK4wH9wVHhCez6oyqBk2j9TpmJknFk4TscQfNDHUAyEG3vL2pRpXHzUHcTD2Pku3Qr5TmA",
  "key11": "28oJcScCcM3bFUFxPXKU9U9FiM2KxakpirvBhrmD4D4ARYQGzEkzUrQXiCua5FASu7rjf2oAJEPtG2ve7eWN6HUs",
  "key12": "DxzigP5EeXpaUdnbR93Lw4BAvZfyhJtWoJUqUotXMvTeTnWJDYiuCXZDp7QCHMh4tmsXbuRtE6A6HtBAXKTQ3vL",
  "key13": "4REmbTHdXYZDqgQcKZ6b9gnRU3vKfB1369omsJGZLZgnwsuyDxNLTq73kFqQUXYKvAiHRj1eXbMYe2jQTtkssMk1",
  "key14": "QSUoeqKGGyjLS9dT1RKez4zBF7kG8iA6BXjNnjKn4ziAJtc7MqkMRhUVGqHawe7STbzrgVxpicQd4VWfn6JknJE",
  "key15": "43zb3fVXBHKmVK493hCzBDiEXss6RmR61HzX2pJPurytJP3iyrhTxhRkEJfNtSAf2vf1c1ZJL6TeffGdQDGTsC3c",
  "key16": "C1a2qpSwEptzK6D29f55Fwsb11Kbyxv4pJea9ozKDrNxr3Juyv1HAyYnMqJi3xzUJEg8JM5jEVnSC2nfaSPkmM2",
  "key17": "24CbP7v51Hbicwd5ibqvbmKvFzAaYVikY9weYMSWLM6BGqu2ioAcarSqLjkL6gqdb6W9iLaBjehPDiespejPpMRM",
  "key18": "3Ai5qxZNA3yjZaqUWinG3BudtcXnxeyQZHFWMSv8hkxKDdWt2ZGa1SMdtVj1CBarHa4CopVWQGLU5XKrKxEHm3mr",
  "key19": "3gcWfw24QHFjmZfq1nGCQCApcaVu6bAGQ3Uc4td1AuEpPKc1YV8kmxSTgxRMXraRKwD4PBS2ARumtDVudg7DceDv",
  "key20": "5UzKa8jMQLRbQ9Uhm5mk6zaULoxLwY5Thqj6S1szPT9bucWvvrXyk7zfLt36ALW85pJy9m34wFKDZKMW3vwwyjo6",
  "key21": "4p115QBytPeurWqZuCBtQr4dsQJJrDqWAwY91Cg7tCsNNdRNnTbeLKrzcLWgLBuukXes7fdi1SFDnHmHyyoNSCfu",
  "key22": "4qVbrfrnpvG33L6fonhsre722gr7QS52BbfNcTqE5pHBJ8sBgZM1BJXcTgyNsHUp3CLkPHgBCF5L9wooQ6VTPQiV",
  "key23": "3AeHgKQw2HkZLcWV1Sqyh3BS9psusgxFU3og9jMFAZBtr1ZLZumaKPMA9pcU8mCfDT64ZDGirxejc5huAaWKg7RL",
  "key24": "21n2XRCpSt8c18kRfwSsUADLWuotG9Z31jVjQM36gd41S1MesBCNz55szN8xKrBaj2kHRs4SwzXtyaBZt4qCaMps",
  "key25": "mwiBCBLJD1NTzi2CJkxcmULj9kF8owuGg8xAcmn42ojvCht8AFu5yRCPpquhcZwkBnpYkEUe81UjQrWVNwDsRcg",
  "key26": "2mKedur56JjAJtYbY7BqYZyoe8F7VGZRhav9kx36Cu1SoEPfGQ238RES8j34sM9P8hNs7UThekNP7DPK3bepM3yS"
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
