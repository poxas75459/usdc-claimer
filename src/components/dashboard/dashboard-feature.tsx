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
    "3X5xKcuzWhdb4TxBWKM5ZYfpL7UAbVutRJ9GRccdRCmC1RTNVQpjMbNCin9GVSfFRSxsC3BpNko5SLNgKz47zHCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJbQrDKU759UrnbvEbyPcnMPpaJsSmmm4chvGV4WyP3FxghjML5PrHB5HR3m3vBiXqrYqw9Ep47H8Bk68xJ6wbq",
  "key1": "4xg8BpgPV39qWtJNYjL7hjv9YC1JigtnvjKAXyXba7kMPyRhJfcnq8H9x6BAVq6xBeigGJhWDk7R47EttWFWq7SQ",
  "key2": "uhzUDmHdxv6NCZWz9czQjioJAB6mhytRkoPEqMWGUw9aQU9XPv4NyLUzZgibLwLjoU61rGq9T3oeoCz1XvpRJsJ",
  "key3": "5FhAzeRoJ7MEpK4SUVq4XLD8hKnBrv33Ros1XDiYCQctmjc5uYSHqQPnGioFuZoyBC3uicbASegrQSdc4sEteYa6",
  "key4": "66w51WchqTTy21iqDfBXKaZeAz4Hz4tCssaMf8qEHx2CTXBYT39LaDLpAHjRCZXGFc32DBYwWyfSdD23JKs3UZBT",
  "key5": "NM4VFmWYfxQTH5uxPLUNbG4sRv7m1ZpB7GV5Xa6Q8mW58LFTi7HVnd2FMyoxa4GiDfMq62Sk2dzQsLFvAiD1JkP",
  "key6": "3rtdq23DfbanKJB7Mym7YSke7eyhfAbZK614oKcaCs6ShBfWsfwSgvThCMag3cew9ETjhSPijPSdsiNvJkiBC8wD",
  "key7": "2P3eChcGiaTQe5zMjAaeHCBk7DrQGn4RMUAR9QchbZ3TbjpEWKuKyLHySb2m8GWwWdo6U5pQUZJmkF6A5hD3D7Vk",
  "key8": "2pgQxt4RrcPMj7T6nz7Qro1TDogoQtnhTjUzcS64kEoubkdzkU4gxN23CR3BMsaFuPGLE7t3Jk5Wi7psmkKmBQee",
  "key9": "2yDKvq4DXR4dgePnULcvWLudhWexDvJWtSgykWDeVCqNjc3MfkPMvsL9kQcwzVkFQi4PvVbrV43sFgM9FSwFYAaM",
  "key10": "3NcW8QdHTe3quFinjnBHUe1bswFtXQfBaJJa1F96Vt2a1XQxZ5tFznTwbSvG6hdcpNuBmpnL5nac3X1wFJH5G1Sy",
  "key11": "5B7hHgjym8YFoZPgxnST7GBg9sfS4X4MDNzP4y6y1PNx91SKtzDapxMNgB8Y1y6P1YWErkdKCMQr47qVKu3YM7mN",
  "key12": "3kwvkdRMb5nDeudHAjoLzoY9dUebSQzMW5bPxsLDhEhhUpVEmwANAU37EDBCgRPaj4N5EUYJzccxjPvG9YJG5o1D",
  "key13": "fQh8jvcadoJ9yYM59Z2itcpY88D8zF6TLEcAsbgzX23vBh1cryeDfj9UkzDL9qVud5ChidXbJdsYaYp25Q54A3K",
  "key14": "5eFURkRqPTw4Vp9zz3TiibTEWVy9W6nEmGa1S6tmPSzUa51WVnocYwFPvQra7LjYy785TqwrJNXDudRs5jWHhqJX",
  "key15": "5v1f5nBqrXRSchUywcWdLDAMETvxEq6DHAARBSqtBYSSSb9YYxYCXezKv32bfCJjsXU5K7tbrUttCgzJ2uMnzukS",
  "key16": "3URP3twVfaFG1nUcf26RXfJUDNRjUBVjiCqnqewhKRe2M5UkYUjgzYKGkGZrei4oKqF5W6fAmPq5dgCSKi9gXm7B",
  "key17": "2TiCKBsrp1fgWBJVjGAJ6F9iDKBnvsMDBbeCzae2SS6h6egSjzYpnbCjysppW24rzC2tp48HXPztqNndXzYznuU2",
  "key18": "3yKNd6LT7oSdh3ednwiUaSwgEYL8RGEeuwkkTPiY6PDpoMhMu8FQZ1sZNc7QE4RsDtvELbpua7n61x7wcD8bQrbg",
  "key19": "sFV51FLqw66CBDuGzcCQ8SFyjqDRXNxKGHtvhZx3dJq3VsRZyiAvRdUvAnabGWXa5WJPs9gUEERt2oVtTdgxJiw",
  "key20": "5cEohoH9SkR74Wsp2TwLRbYHwUaoPGTPRbnVENTFcqPjNkCT2AmPjfHQc4xt3U2mXLnjUvYEFt7wSx256hK6nmkM",
  "key21": "3UxwDCXHPrnFBQXDV3TfZv9haSLRQBbCLkBpYAWPPY3EDSJuz6wJBnpCBhvsfwjKnAdzX8xfbyN2BioFN4MJKBLX",
  "key22": "2REncSVHbpNsHCeX1Zs7DBDK5XiNF2ERPEDVw2RLpa4FvKp3xt55De6cEPUzMUDbwBpsangHQddaz52q9X86Y7cy",
  "key23": "GF7SVjs8FrJesAvRudjzws5RjBiJZnEG6snc7XUNmCjZE1f6GyYEAENmgcHNoKZpTjkpFtHxeRjPyro3gep8sr4",
  "key24": "4uVAWPMJCemGqhLvieWXM6gKLHwgfAV7tHpPv4uXmEKCCz8Utj8xUp823RY6B3CAWSnHLUd93w28tgNkoxsUBaZm",
  "key25": "3tuFbNzLLocAd8NSYA65RGsd5DEhXapeDyPPMh3Q4G8cjY4EQXQ28ujn4ovApgj5GNmWAYdeSb89oL46P3pA6hXf",
  "key26": "54ch4GwFwX28MjaBsP42WVMyuMJognqr2HduRpURsoV1iu71oedB9ZyaXEdMd4A3NVitBnSHi57N5oFvFkf4aCCn",
  "key27": "4XVG5amASYv8WHgPr1AxeusurNuRkeu1N4788cHBP7UvriPRkQuRnQ17NT2ZSVwiKXkBWY1MPyRR8uDVHNEEumDV",
  "key28": "23BCxRmzMsjtpVn5ETxfptSgD1obnxH6ativ4dDysCvmpufvGe7v656PFKjDf7E52JXtMLemKsxDEupMaixktwY9",
  "key29": "3wANdM8hXrHsSZ6Pxh1sMV7EXBffcvaxvxBgEvRY3ZMfM3vxV2GUadju6n7eH4i8pxkxQYC7jnMfbJGqJ8PsEsYK",
  "key30": "2gYBH8Mdnq7Mbv33peaqiPzfXByXfytvUwrqjbWVB9TynThamCH4679uKXpjAMyLNwVpTHSTZMt74RdpVUdzj58q",
  "key31": "4jWfeFCJQmFtV8sKQLEsqqwdop2b2e2NrpgxeVtkwR1nfUwVadp9HzpYaqwSRv2xLunSPSKx58ty3b2VqPUcwHrJ",
  "key32": "3JnKw1zhihPaZQPpVKfNPp1HoF6w6yjZ5nZivBHvvXYm8xZkhh6domLPLExyP7b4MApKLUdgmaGWR9DyQLVfST4G",
  "key33": "59kSjTpBpy6juUTm9WLrbo4AJ1QHWYgWdfXU7XemLC1MTTUGdSoNttrode7fWLKdqWUtZtvQywYavXacj91ybxr9",
  "key34": "eQVTfV7WztbyJWTfSLmuEjuMWTRV3vvwc7SAgWLJKSBzEney14sfhJnLPqoG67iy588xwmyQjTdAnj2wFX2qn27"
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
