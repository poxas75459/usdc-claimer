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
    "61RAnq4XT9uacoPH3LGuDjitNtcpYjezF1Dm3c2rBXqENA1Rv5kXxH5x6cyayDg677w4TuqkrucVby42qeXuWBE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXAtiDBuc4aQ3HDC93ZYnDcE5WhpCeRguSH87faBcAGXEvY5DnKnVKGdKkjaFz62hgW3Y8msPNXEJ7DkjtAuGSA",
  "key1": "2qD8EmvHnnBpfRGmZuebuaK4fNs3e6mvPgbWDLfMhfBfgxGG97jG5LA6tuNyJ8cbRDV5A95UphrSkeSaLPaY8aKh",
  "key2": "4Mgxzc2pLDptyGBDxzmYU1mdefCyGXoyowccHMXr2nhvv1xyyQXHdcXnMhgo8yBv5JUqKtrtbh2HqxEYy54coPPX",
  "key3": "3EyEHJ9rrL66y11URKAQ7nnoroPgEbmoR8nMLMFrfZjP1zGbv5uy5rqdNbxwGhgTPVtWSu1xR1h6shvPefaP1K5i",
  "key4": "nkaExYKLP4k9REKqYXWDuNu14te43mR3s7CQzmWnGMAgjmXpjtru4wmUFsVnVABjxyb8wWeyBdoYByKiojxpoxm",
  "key5": "5yMwYh3cSmhwYpgDVCoSxMxuSUt9bsVxFP98GziVcR8z6x4hTWCnVb4hPj6yaUYvi4US1T51aHFALFFirp2M21NT",
  "key6": "4EEdQva9PmTBuFWNBCGtp3uPyZSXRrWccqbEj1R4sTtAsWMJ79hBHeXEAJfYhtWk1dcM98PyxPAWzjy9d4zNhKFQ",
  "key7": "3qhJUFwXaomw1BvuoJLr8FfHoFTN9t5v5TSJDHNgoDDLkGvysobgXBk3fxbTERgCxrDbfpgpRQiJjE8Xpqu7vML8",
  "key8": "7VLwaSyrmauBsuDtoRGAfCMLjhpztNW5D1cbsZZ72buoV4pAyj31JWUMRk4dfSKFx4HrWxDGtajx5DH17FRyGBZ",
  "key9": "4R6gAcevtBgU9F7FPyXye3bnoVvCAwjsfDF69V5e3xW2snfYNkrQzDz1Q29n8XgNmJgetArPuMmABdvThP8DpQje",
  "key10": "2AtZH9wSxAPsKfL3iSTJqLsUGNxUEzUgG5mjdYqhk3hikVu5iwsm1AKH5W6M7NmQCJEC8fC1VBVoeG4UzZ8xjg7E",
  "key11": "5DKTxdxCmLcMzBCp4vybX5cSHP7Sbn1RmckY8v6iCakfn9RCDV6QBZqnN1kYLpooab79njhBu3GGHZDMk78catTW",
  "key12": "55ndpK3oZQXVPqB7ve1nn9BSsQryMUP3MPjkSDghpkrB1MAHVMg1ZVGRWosqXArDeyMakUg6qssZG3fjrUvm4DcD",
  "key13": "3aopUo5peHYY5SY8fVG7DqbhCQXQ8fgT7eeZziC99NkSurgc1pe8tAuans8g2g2kRQGfUX74DqNLS5GHyjVAsQL6",
  "key14": "2xQpws32cuwHM3Yur4uTQKk3dPU4GxGaWDuge1pdMf6AzjK9YSDCqe5DtZiCTHNbAe4B5wVEJuAvHQohPL4dpmfg",
  "key15": "5eUisWcs5vKazSS7PirgqegDCXjgGfrppA415M2DiF8VTf3rDYi9C3kF55zmrNu4QkYjVJRHUFTqBx8RWNUATgm7",
  "key16": "4JDD3h2cfSvaqK2MWDo46U7cVNuKK4s2i8eC4V5e4NDsKgwHEBjrFLp8iJcmmx3J8CjXvJfoAXpe3gbgnqEgStoL",
  "key17": "5wst9J9GHzaFfd36vVw1aCC2rwBneDVcHNe4ZJHQfru6516MhmT4kAgbHSb1ceg4cfxFJWsGuRrQpB4Cj8Jztbeb",
  "key18": "2y5A8txUbGoWJFNohhDQdhJo2ETX9DmJzAREuAcmXyUsHHVEmAqjhMTqnbYLW6V4SN34wpDgUpGA8VJkZ8FHyQT6",
  "key19": "4tCSQYm8wMVmET294p4NaQZCeL6Pe9kA2osU5723r7NoPitfzvRwv1qAUqkWrnSVW5YJXfXpsMwK7vycAS78ZjoB",
  "key20": "3PxrSJRZazjEsMXgrxFSYDqwmJEkTqNFqRL7yzZq2D7Ug4vs9U1P5XksbsCZ7nnsqfwgXTZC8SJppsvBacYXa2ge",
  "key21": "5w6tCVAeVnaPS2YPjBdBSFnykWy785ax9fv5cZgVWJLP1Rmn12UNcbgtSZL1TpJzGH7szBnArp2pKMTVFq9kryK3",
  "key22": "4GCmeynwpZrND4oW5oobivQWowM9uqpAcqGaDbDPgtFHF9VCb7RwX45B6XQU8FqArmEfFw5vDVyjhmikBwpZDgHd",
  "key23": "9VvzRCEakHY1TnuZMfUWNfrw27Ry2oukrRWjrKBdMvsZmkkwaUKqG4z9Q8T2jzWAg8eu4NDAx5oeafLktSExx6m",
  "key24": "4xDVuSJjyhYhtZDqZKSz5GPefK38hB6LaS1bEviymMsQkZX5wvPcwcieBvp5Vq2q2mmUmEQQLh89E4UPdKoF3zf8",
  "key25": "2b44WRhiep1pZPZzs28YrLTchi2fReYSQnnhpNCxEThSmvCxjJqh333dbwzUCRmT5kmWDW3SZ58h3Dcdd3FvU8Jh",
  "key26": "5saVuKdMm2hEf7Ek15grJYkUhvsPquq8bQ4e4KGA78gTcNv7Lusyzm1ZzGbsMj2dZL4xk358DCteoZqbzzGmenZX",
  "key27": "2wuaBD3WeqDRxjGLQVNG9Scfi97UFqsqvkZQhauWtpBwDa6P1zRoQiPUjzTXAG1KFU8MiDiNJNJvfifF1a91CyYC",
  "key28": "5wBfUeyB4qLqoQHLTpz8UMdizZQGZYjUD4UYLNqCVRfPzqGy1JX696AF7W9UtxxrSMyLTXikuKgEBfzLgJbEdku3",
  "key29": "5S2jNi7GfwkZY7vgzU2f6ex8jpHgzfuNUbPDuQ6WRmL1z12AMZbmp2RCupiWrCssUAsBV1i5toj32s1gmyua91mW",
  "key30": "3TfJD61NvV18gc8uQpJYgDFF9yrZ7KgbTnPDmFLiBEQodKQ7E3V2B64aHQaMcbRDRWVuH8KqvAtaFbaqrG2PXUqr",
  "key31": "QeTfoYqU1ihatNeazbj6JhgQyxqHfrP1MWJFVWtnQGThtCqWGduUqBPKPciCLWQzK98QjTTsRiVNxfYAwehqAtH",
  "key32": "4nY4aX8NkPEcfSfaRF2HCANWQsLe8A9tqUBx67Qt2G4WvD6uzT3PTNDHoztR3eaZFvATcFa44AnRRm37npAZjzvw",
  "key33": "3qE4V6RWHQ1pjCsmAFHmu4wPTxNfUfr48yb1BuXKCgvJqsVmveFhCDgtzunGaKWnxMan9Ppc8h6aUp4JaJbe9ei3",
  "key34": "3qeDRuytvSx1p4wKJcoVcpG9DzJHMRt6amxrRVPEsXF4copRHTGc4RPy2arFk2oKrohj15FjTeUnA6PKSxnwaJXt",
  "key35": "5F1Vz1kBKpwEQLWG8h4SncMV8Q6LNFJZJFBPVqzJKCEYyYJhFarEm37fNnnM43QP2mgdgNoKahbA3KdZpThgUQdr",
  "key36": "2eSv3v9eznG42MWAMpuwTWkDhqp6M7TK5nMACbu5v58qRhfJmKTjZHvxpSg8QmfCNvPuKyTYCo4MaTy7j3gDeVes",
  "key37": "ACdh6yKq9dWupRLttVyW7wZJa94LSBngkzYvDDsqvTQG3W61z8iuDgCvpnsQwoTvEF9wD1fn5FHRqChpL2En6fP",
  "key38": "QMfBLA3wJxVpuCEKriNfELWhnaXtCAgVKBby5KX7fsSoPsmfxCA9TNV1cBGF2ubXurTBmqP9WtXCLrgXsDhHdFp",
  "key39": "5Sb94pKZPMg48qkMsadL9VrkykLvkeM99UoJ3vnk6csJYwoPuQaMjY8JG7KwHuT4m9wa3S7nPP8434evwC556VDW",
  "key40": "4Z8LPTAKHLKQHCFA8FQUdCXQRmRGCy1gyiQx9pPhMeSytj16ZVWwdQ2uWBTaDc9omSHLVv8ewrQpHya3gyPM6QaT",
  "key41": "5cX8A5p8Gm6uByP7PcjuSTWAekH1gRx2HvpYgN5nGRtaVkFZ3mgFpHSdyuMJRELSgBDtMGZumhHGMgkFdSLRghFx",
  "key42": "2jmvW1jA16MoQfdJfZQk1ie15d3wojoKqF5WmUL3Mf6dpbGxPkAzXsH5YW7cqCb9zrHEt94rLWrW98smbNhMfeq3"
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
