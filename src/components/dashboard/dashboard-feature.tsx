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
    "2meZctPuYQskGFkoLZF9fYryB4xjH6mJmz8Q8VezGvQwjpsihCGZdwEuzYEwpEBqkCFx6XaARHHfskdqeQ31wkFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fa2ZWmXy2peme4jtvC4rfPEWDDJX6kztAUKVzCEsN3kaRPjSNbBLBRRWPYG4UMJJinKAR357YQ7XqvDhCpxBZEe",
  "key1": "62qGaZZ3P1W7sWpjUrnu4cRjH1sYbjDPhvwvff8bn4EuvKoY382NBzuH7XHeSgv9gJkLn7CNCD5SyGs9AL3Rp96i",
  "key2": "iPcjuBiuJBZmLKHNLf3TPREi5SdkvuvXTx8D8FyUzGMxNW5Kq1PmyDJf5u4W5BVzu9Qp1C3P6npfQJtCaqTUS3b",
  "key3": "3forQyfuEpVokPgYdgBLCjcvE2rvHGqmWbHkGTjDxMNTbcAMEZz6XCdZTRxzw7ds5qbz5vYm3n9RtgciY1VGcLbt",
  "key4": "47BrhdaUHLutQhhHeY5iUbxpmBdsBJGLDASpBLAnXVVAcYQ6YWhcwXCATFjcjjNPWYEC4NKEoaGTYSYTJb63W1PC",
  "key5": "5sbgS9ckEYQ4LMHUALbKuomfHG7rDjvWJbowt3hHaJFC8tcujGFSkLmqYVPYr1H7o6D8KRQxeuZfZKJvzg23WUCj",
  "key6": "5SpivmtUTYYHistDX7J4TZoMZM3bhpY9SbrRex9tBd2PcDmTQnsDyAKsT1w15UWHU6zhej7Ts7tqwE5bNpmGwSfx",
  "key7": "o4R6LxyZmz84TBcVWNWT9sMKzPaG9WeP4JsyYc2oMsYurdazEy2k3aSiZ5hrKzkKqvd4vdHSEygb2ab8bu3nnxm",
  "key8": "2pDhUKUStyW2BpULRwmDuMPGsTSYoV9TMkdJZ6TWMK6PLzdZRALfXvFF3FhY6r23f6c7c2juHphB9PmbDtKRXRKM",
  "key9": "5szNWt6eC4Hepv6j7KKb6v4N8LRjSFtiZaFD87r7HbWZD4enYBsYvpyZxDrLNSyqt5srHaNXKm1NquNuqYYirwuW",
  "key10": "5x3bPQBnpVPpMmtiaaSqAr4mMRXph5mvJwfbQqzFXszEseC9bvDAeJwHfThkvmU89VHYnB1NeAsab7y5LzgR7FAb",
  "key11": "5NrquvUNE3W3NKWjf3KPuyK2QGxRyqdjAhprNowGdjZzeS7np9Xv7AhD5zsPBvRW1EbzTcCFCc1A3kMSYVqoV4PV",
  "key12": "42h56Yf9C9Dc5uu6ZpqkgxWy7BzXZwdCqAfrYcAtGqzo64QvwWFBpCEKAGLKvqGnNxWMNFfNrfWxikGT7r83m7md",
  "key13": "5UwAVbshFCYdvjEAxVJbZqAbKTEN66LhSXAUzh9nsVStCZr7GcnKHPR4LBXaCkUSWzatjtEzSis9VYE7NxQq3Zrp",
  "key14": "2eM42XL6MWGRMKkpi2f9j4sxQ5rwrK1RhZgjrWzHBXnd6L6Wb3QCguQc2teiciBSV3n4rCtdrGD37gcVCqXC1GNJ",
  "key15": "3KKAvTNKuNVxEFR9MACdtRxgAWor5XazXu8ATLPjWGa9FupuPzwC8PXLmNZkfpwu1mM65ps5rHRzJuVzt4AAmTzi",
  "key16": "3qZ94K3oM9Gj5y33crKYokGrNNQEbCA81NNB9QfcWBzheqzjdyv18G9vuN7HDbVtmEPgvZ6PowJ9baf6ST38LZPs",
  "key17": "3NeHsSQxewDwa5svZjj38eyprrkw1mR455YEMqrGGi3CSk2uyNfBw6wYV42KDuVL8xiP6DvWmbpu7VPNCcPRkoNi",
  "key18": "57XZ9KXJ6BTs1haarrHom7xM41w37iniYNK5XeRhmiL9cYnqD6acjNs9DrhmH6ugp5iKFnsNmpikFnvw4Zt2E2D2",
  "key19": "3vbpPcgLL1Lr83HW6ANzCoP8iahUceFGyS3rwVpYUL9niviYQvYR6rVJXYEjC2BbzjrmQAwLzppoa8A1FxTetvdT",
  "key20": "isxhGw6uw3QwjBtRsmP42oiotePanURPsGPPUmL5jBtRZZJArfUZYEkzaK4NUGD752LjBqMCuwi9bfXDgc9SxYs",
  "key21": "53cQhPdXMHTH2gDgvqZTFwBS7M3mLuNq3dRFL3Qke2WaujEkAtxikmCyAfHPbuuLwJDcPyUHCxAXYPZ6gDDorSJU",
  "key22": "2XFqWQ4HDuwMqkTsEEukQPnwZcytBTmhwcUfRg1tNKPGNtwPHzRtGWkXU2JkLmy8A7UVE71yz8GMAktPVqgSRWGM",
  "key23": "129bhhqJvyFev3wyxbBckkomsZVypUv3G7JoXVSUvn9VLhUAe7XwMqqTZtzc16xYehqqFx36gNQ2TKwdfRQhuQbY",
  "key24": "4bktoMK3HYDsSrX3G6F6SzDJPE4jfT65EQP8CgibbSz3rjiGqYa4BUtz6aVXKj1wPrCzUE5WaRbAdcry7DmqS17Q",
  "key25": "254Xu6cB6euGpTtbJBKQ8wWC7e8XXDmGYzVKDXzkBxN8wH1gyMo3a7mQqw6GpNFzqKg94CY9RcdkbVYxggsdT75y",
  "key26": "5X7eCxeF6qMShw9eozQVpXZJNoFffJWWWuVRub5UEGf3YFMeyqtSZWtApfTkavttvahuZ8x56ZuTkCHX5xTMEjry",
  "key27": "3SsMowHfmRg2X1t4wnp9jYgemMUP3LWocNfobWrnwL6PebTz1gRWqkj68Cpy6hEiwy9Bp7Af8T2fbhLpkrcnVXEc",
  "key28": "26aZsXvG9TX3JaqM9jQv6LdChRwNpRfBjNZLrLe2GyDaNtF2PpCZnwPtwNZRLzxLADWNPW2qswv5G4s79dGFe5BM",
  "key29": "31MKfGKwzQQw8V9dKL1LDePNNr1Ly2sPiuwLFqsa8CLVPeLtw3cMJHMMXqfPGUhNDgqBy4YChZTM6Z9ycm13eZqn",
  "key30": "3tPWkn7gWc69HSEqfwrXpxWJmkkenMfncJbH8VmrKqvkVTX82GXqGM7pFFxcq1CNjNm8hqKkAoKKvApwvhhwDQVx",
  "key31": "pnMDqT97CBdu46AKnVTGwSYCoekpgmrhWuZqCHna1gJThNi2nSA2w9mssYqALTa58jg188ijNCMApv6EQq1F9Zy",
  "key32": "3psaiMJ72zjpgjqyi3Mb8Zp2oekDW1bWA3NTobC1HiQVnkpqQnWqspYLpjC7LV4z8zNhW3hrjj2HU5Y2p1fSy9V5",
  "key33": "E7xHxxSGAE2dbNorMgcstLo9PJgUnNsyiq32RHtdkEegWbVfXSTYqdq5VW2soVZVxKxd9m7AmqKPhBPAye2UoVt",
  "key34": "3GKDF8BVqettEWJLSxci6925QtHDeqgmnEKnkbcaxWGHm78B58QXU7kXz6vDEcLLbn9gUhNM5AbLmAAoCLXvS6TS",
  "key35": "5a8hXKPEnf8CZTZjw5pMhuerAAB5rB5SGPpUPN9xu9wcD1E6aWcrKdineppULnvxBdTQ4YDLbaQACU7MnXAeCtx6",
  "key36": "2gdrtJxALpoE4EW7tfiErmfJC98x4BuWqLEpdNGtZYxDFQkHJWBxDMgTmKXiDBY1GbULxoPZgvuSej4aJSrHmGj2",
  "key37": "3qsfksGVweUdGozWxGNU8iJShBfgxEMH7Jjniw11TEwyGFahtndia7gsisXjwj72FXeEqSpQVu9oaKnMtRP7Ev8c"
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
