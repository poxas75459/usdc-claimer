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
    "3uYyPE79ZPpoCqVBxysPFPWCaHg9cPeTdhoZbWaEzFNNw3pcyB4AeTXq27w3xE9ENg6p1JDSV1dxnBrwDmN4emtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PTByu8JEizbvnmu8fBqBVUPJoiV2BrgpsvTQEaPpn69LCmodCw83CUfWumMzt4Yfn3hcF1uUvw6mNGWStvuB8q",
  "key1": "2gz6QggUr6981vY5YAe728oyE7yd1ZmBbtgEFaveDxL5woubTBE7UvX2RNCWpJAPWxgCdwEaUxXPHw7piKn5SYjh",
  "key2": "2Kh2fkFYQj7wJfa4wvc1QQQe4JVtqbByKEmguSErikUZM2E3MjvRTRuJJnw3Y3Upt334azgPLQ2rsFB2q5h3cHUV",
  "key3": "4g6GeC7J6KP6J81kgvrY9dtg3kWMjPWyTq6zmVh8tjzEt9jWiXHpZbeFXmTvmQrCDAEE6wZZnfcFRHHF62DStxiB",
  "key4": "21UmoXC5aXFERBE2pWkzKRFtnHoLdzzt5FiEHccE6tSDe7SsS23AsJZ965Av8XNbtXs4y8m38vwiuCkSvzXdC7JJ",
  "key5": "3DVq8DpTAAeJH5QJiGDNmerz2G6AWGhvsx2DoD2qKWKwhDonDEnaQLhfTtxNPQ9cmeZWcie7zRqpZQo4VPDLD9aL",
  "key6": "4KgdiUfM58RV5QZzH4heJPptFc3ku8mSGYqfZqSYgNd782FN9BRRU2x6mVizsxNXmAAFpFxuHa2Q2aKAnDNqW1Lq",
  "key7": "5DMDYS4oKwqrwEc5U8Dutj8C91d75KLDx3iabqUHoe8ATdrim9QKubAS3xAfmDA6aW3G45SxxQJhfdkxLUfWKB5g",
  "key8": "4JJHwWsnA8Wrr1r3E6RgrtGn9trW2wydFoburoqieEXkgwYfsWYmbbgAmRVCsDsprpNjB3a8NoEnVPxP3y5GD8w",
  "key9": "JGM1MXXG1EZ7PqEXngz4aHTg9Tsaar7aoxxjqeTJ433vLp8YHUGzj11qPE7RSPb3Qxu4768GpdV8eYNf9ykWeEY",
  "key10": "2WqFSM7mfohYyxTD1hfjm1iKCd39iat6NE9jbh2HtLt9S2ZJYncVZcf7AkamcZ1LbMMec7qixQJCgHdwHHvgXCwV",
  "key11": "sNRZjvTE6aEBKjs7f5B1om3y54yBsSx7Fuc5LDEHnFAGadVNR5Xd8PJzT5FZBYo9cNqt1Tyy1tfDW9TaVBXJtaj",
  "key12": "k6kjCH7uufT8JXZg6wKEHqHqXssPwPZPgYu6WsUBP6VEHPXvNo5sYa9PMLjRpiRyJHrYtqg3wJQwWFx6UeUsYiE",
  "key13": "2wFQbwxD69nVEtPFV6SkrLfFYGDyMDjGv2ARHpCdG85iSVjf3PHJnJZmXHBYnaHH1MVh9VD4MFvaRNiP7wpzhLe4",
  "key14": "3sWcTbjQVsU6iUHf4ayYeuHsAW2LGRP7ryDCYCZmxaDCEjTSqqPypa1CQzfvbrd1Bu1obmQAZkQtFW9WCadHhYwG",
  "key15": "39T3SFnNZBFHsk9EqhyD8SuFiWpN3beifwkdp3tWhUwsxThbHvwZpgpfb6MgCAwgKjr7wutt7z8rr1Q1efzhqDZz",
  "key16": "6Lg6R2AkGGyXrgc5s2C3LDLQ1XibrMyfVa9KUX3SXCZ99Xjuh3XzXnSV4WKMs4KSxa76tHrP2ubX4ZnQMaDrGJ4",
  "key17": "eHsyixwH6spJChGCCVJWkCB5k6csyEMK84FfAiovxVf3uvDJCzz2GZFdX1u6qDfSo4ckCaoTYLtZGFjQsUjTbr6",
  "key18": "5RvVfD1N5qxmdYZXDzxYYTZiVTf3iuoY7BeFDopPnAVDiwh7hEsED9jFiihw7DdBER6qxADrKBRgbEBLL69cSdb1",
  "key19": "4QBm9zJmC9q2guVc5QqpRvgTz6Bgh1wziSqzjWaTVZADUPYoFVvc7QK5p8dYCa3udv89C8RhYzvBjiHKMwZvYjFW",
  "key20": "3fVyDYcRUU8WcdeBL7zcNpjhjPDT6v3cEBfH3dKbMqDCP1ZXs66oKdLW3GwzoMZRPBUyY5HpWxgDTWHbNB9X9Xmy",
  "key21": "hYVgEneADVjtUXKrDSVZpA8uisyvGb8ss1zHDFgxqoiE6kKA9iJ8XafJftHkq3nwgfLioYRAEviGEhYfqtHBZdr",
  "key22": "3J8BBMy2MuRJ9JoaApThM7r836KWFdPXXvBQbZ653PBjgi57CQKsy9eJeRcJJsiupqw7YUesNAWXDkZMwqFAEqme",
  "key23": "4bzruTUF2ELKENNwga1S6Ad5BnFZRQEAFwVu12cKjjiVaeyndw7t7pTURV8STVMzCnMzkYDhvFiUqT64zY2XBVt8",
  "key24": "wqAKBGCqNfw8dR2iF9BLppcyUr6jCSuiUD9g4mREZMQ63iog5ykHccmkEX7HHUEs1xahgrr1cWzdE4y72eo4kf7",
  "key25": "3Qf8vhNp8kGUr2Fr6Z25FJ3qY6tpFwNvAuBCcGWeVSk7F1jZd9BDZdqjh1VZbEJjGZeySa4sS8HJx4e8sBr7SVjR",
  "key26": "4S4Pf2mgp59TVnVUZp2jnahWQf15gn7nsDgy2etU5BFMxLbTRruAEqBZcJwsyMQfSShheVecFt2cLUFWrGnKWiGT",
  "key27": "3AL5FBPLW8uusockfrbDssVrjGDtyKLvZEwuVxVNDhbfTxSXQB3U7S7LnbSGz1ZfkUYczqNC6sA3AEjvmLy8bApU"
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
