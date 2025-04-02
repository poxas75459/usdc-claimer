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
    "5Dtcetm5hiSenJrJvBLw8zJUL8jzb21uXBDTXq8uTa8QZKsEemg4TFK6AJZd9Ttidw6RHBXb5caLfDYX7Y78KoLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4saunZV8Ec9qiceiiTUyRFLagJioSuCjwq2WUxcGBHiuth334o7EbDHRtheNy3wjogP8B5WhntZjzyguHyaorn",
  "key1": "nfvTki3mpPCkm97euJuArdYw2RLiwPDRXkWb51MhGGGbBvkyvQVtKg1zy6Mne9HE7ok69FG21tW5WCDePGPbA4w",
  "key2": "3JRi9hQ3YkDwVm2n27GUkPD8M6bfGW7Xum4bWxrtgkUQvGAT3116w4jQzzxB2pepsBoiz56xH6qgQ3ku5oWWqZ1C",
  "key3": "8pzNtWN3qvbJyvzUb5Ud81rxWAix7Xn5HcjUN3U7wh4h1jMBgVTpK3EsbveA2wf1PoUy6cdhL5bbrx8eANkCnKW",
  "key4": "PMrsMBWuJvSE9Nfd4iakCQ6AcobQBrFxp1KRJws4hvwhutpSQz7RQfwyrfKSbt2MXE3SiCyiauQ78nWetYdJDqt",
  "key5": "5qaG8YrJCKQW6VhhLFEyAfJrESSZPFEmfSiHer9Vnh6fFExPSwbUdZUWK2Aw6iLqtFm95e4n42WvZQAAGkfXVELY",
  "key6": "2AfzUdDNKL2yWP7YPPUQTcqMtxVFFut8TDQJS3nAaPdLVJwmGxFYtrzZE9QrFz1mTAxiUUCBqXtvsjmJL3UjdWfx",
  "key7": "3kYTH497iA8GVYYPbBCaPihefQJXkVvTsy1tGxoqcEre89vnqDxkTiwsMqFag854EwsKTf4czgqvHnC4JM2Lzwf6",
  "key8": "3wXZfQS9AYNgXVwxgHDPXZiVoUh6vGkuTWkX4npqxBYBT3VDaiwnWeuCnEeNXREizViqXjVjYEHttQLCu44gfdUS",
  "key9": "39mY81uQgwf1HTJHSuKKqBKgD4zhUR7WQtHczi43YyYpy1W9q4aGTH6woDUoXvbPLW8P1dQJ2DZXhgqdQ7h7h35A",
  "key10": "4AKRBMg4tdrGMwcKMrXBao6kP7EdZvCWysg7qqDJxQjvkdpL7yDJE3hRJDWPXKQtbJJW4Q1veB7ygfwY4u3Mpkd1",
  "key11": "4v6XeHCG1HzzT2touJpC7L8r9LwkmRpzdfsWYjvoH5wtMwXFtmkuNx7VLRL9AHgQjvoX1rm7FRQoRk3CgDya8AUB",
  "key12": "2sG22tr1ExdNurQ55hLGhJaP53FBWQpjWF8eYs5NaKthYHFbr5yknVavwi3x7QTqVJA5rHd9TXDwhPg8sG8poVrQ",
  "key13": "5AYBCbTgceiF7ko4R39gYwmpbjvj9Am2RJLiZDdiBeTK5wy4VpYytjZtuf6kJz1R1z6n49szkkK1dqjwvGAvvXe2",
  "key14": "31mdyLjZz45jyr5Ngux5DUKBYHq9vnduZTFb6d4qmkmzFsEZrg1qrjjCvadU53d9YeqGTGBZMegz5BvisdSCZnw9",
  "key15": "4UNE3rVtKdES3F1vr5KkegSCbvpTKELKT4MERqAb83vzg3N94McijHfTx57gTSmdCuoZSwExj4n5y6fYKm4rF8if",
  "key16": "5RvDbq13otnjEUHwE41Rg9QrS7vdpHhY2pWc2GSoH766krmquCbTYwdz9iosZ9yvHivQNGuUubbHqAApma46zu8p",
  "key17": "43y6ZEEXD8hbNWfhE2SVnyY8A5NJwcxCotYPR6tuyuCRcq6H2pBPCPEsYZ8wcKo75zPpLHtHLKBufJqe4AQRc333",
  "key18": "CMSnmjHpXSxgDRuxSW7dFzfZvNMN5fddSBWdaNyVstfCb23KZMSdfczfJQEYuNj1DcGFW1A4fZvwCMXTWvuGjrR",
  "key19": "2SiYU6mz8RdZVJBSrEzzU1aiFfAETVxvA9pmsJhSp1KpbaJimFRPNtS1o1iQTheXusoNMTBGd5XiNziwmMJn4gx4",
  "key20": "42zrwTfvGx79whYvBVnYfAPxo6zBKU6ggsRxQLjrjdopdXFcYyMSiPZuosPsL9QTR5DksiZqNrULt3AR99spHcug",
  "key21": "558dCmdcUxfLLz48T16T2DnMaMQYjnp1X11yTpbQe1DNLnjnWCTYtUkxvnFuwWSQzwpHVtF3CFbRi2y6yVCWZe5N",
  "key22": "5KyX5aA4ACiCMx1tYYACXASh9zubTiWggXCovQvo2YPkg2HwsQc5FeWfYuwBVUkVWTLatkk243tLJHQqB4S7sBzx",
  "key23": "63JUKLAgLuYjZDNqMV6YN92nHFEGh53b3VhoKgaZL4i7E1bsSFGiB4Yq4Qu7t9jPgFqKpMWj6N5aqNS4vdQp6pYb",
  "key24": "5AWM7PvcZe3ZRkNUM8CTbLyktivNkjqGgKfeE51NBGv3gGJi7PBrm7sUiZusMXYc4HCASreFAuvFUtBkuHojFAoe",
  "key25": "3UgHkAnNRTbjEuXbcwCLvSHbKnWFHMe4HfcPcnNufSwWFnwSea1hgj6i3jTjT9Y26WQPC6jgPUsb1jDB3oWA3qYP",
  "key26": "7N4ru3bhzNd1ahT3rkEJQXBrFvgRDgVaK5Wp8AZdEakzGNqjLQK73AYEqhWwUE77R62TgRKPHWX5U9kcQ2WpNiT",
  "key27": "2bN3Zj6R9AUF3G8Bm9mJC2HL5RS147YmoBQUS9KiWyHYw1zq6W2euFKvWpBZsPvptMisPe62RbAPv6fukWaF3vot",
  "key28": "3nCiJX39SGWtbSAxAUwX8s6VqsXRmvAAbXgzyCrDHg1eYD2ZCt2KdjdEYLDebrhEDzpv7Cr6f3wi5s2n3XEMGDua"
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
