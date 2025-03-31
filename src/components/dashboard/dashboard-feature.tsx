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
    "417bqpBqvyzw7EnryJWAg8TBgnuXLKnYvgy2NHZAgcNJqo5ftzkWZHbVbCuNvycPVpk8nkfByQVWH79LWMhoJubV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PibaBxjc4W3RVfLKGab4f3RQnqMqtETxssCyhnfhRwijEpn4szGkSwRFR7FVXyw7jpkwXKiU3x6ZYRHuYeRLA2m",
  "key1": "44HzF2tMSfijEi3q66b6gQYar1e7TF3RnY5jgJkZCbkJ6bHWj8LzDgPfwsHTxnGTKhpQqkYBf1JvAhyWqE72Buvb",
  "key2": "56FrdbqqpEHrGVTqWL3iQP71n2YwsyXkQ2eCGJAHmAt3b6ybEoZjkEoxXrKNkEqhYrcLqdYN7DFMhLfqRkaFaHWB",
  "key3": "5vHQ4tq4HDcMrED3xHrVLTDJVzeg6SKL66qs24dPNwvqXjjzdZU1SDp8Umhq866zhqVrV9vp9cnQ4j3111XUt5wc",
  "key4": "5wwMUdek1hTV8Fnqsy1gCCbzesZxTVKxtRQ7Ch4EucUoYxJMKtfUDho4J55Gi4Dg8wp15AM1YBawgeyjCXi4PHRT",
  "key5": "5aXvTh19uufdLJJEQYyS5P5JKhs7ckC5Eicy8NXCA853UDkmzHvxGFfe4wJX8qyoGJNf5Rp5qSFjVhgTyBPCX7VR",
  "key6": "EKTr12scPjyS7nzW5FdHx5RP1ixLrCxKHTfWRUAnCJXqEpxo1TXP2JiTYkDESQf38F6JFLtkWss8CuVUEJtViLM",
  "key7": "VQgtytbvfYxXqkF2UdYwkYGRcvKjg8GPShGbB95SmJNixfXzzMkabWNvKovswj5bddxVVpD2KXZAqdqujrGP7Sf",
  "key8": "ivkrFcAM2yR4ThyM1FPBAFoa58HbhuxRvtHxaMeitA5drXkeHCXiHNWJ58aX7R1iuozFeg7xWPMHM8KdeSaverS",
  "key9": "7bjctmkPAxyGtN8mKsvgBYR6nv5LuWZHGBBMy2DLdv4HjhuczP13TsYSJeaoKLR6dyAhDwZAXL5X81sCHygTpaZ",
  "key10": "5813bWF1eDkESFRUCkV47Dfinugq9djQfj7S4wuDcnHhTzCA5YbkQNn5u2haPNqsQDg5rE4HPchGLV3SkV22v1o2",
  "key11": "5m666UHET4Cn52LvSwmvEp9Gyt4phZR5vzqaW7jH9Z32g4jV6DF6gmvfPdLeBmXjLGJjK7sXvspa9ekQKWRLaecT",
  "key12": "2sgiyWUr7Bit3GVtajRsxg7SjpTx5Q5yRpovHEwGrcuHnCdqKTgTNrCHyXk25ACV4ckx9sHgS5pj3yLxYF9DouhW",
  "key13": "4PBaY7CYVcLxcGj72AwXF6sTJmG9q4TusY9qjNsQXWY9UdaNefStTeWZbQ3K4QQnX7xoJ5MBujASHkTQZMcGyGou",
  "key14": "3SZZLpwxPSrtSAQi5aAjrvtGzQKGwBfyNLgZz6z4wFaND33sCdx5yBD3GMpw9kS4jsVYZY2C1juQnT1quGg3oEeD",
  "key15": "5sUtdrzCUwVi4DwdzNZgDgCPqehsSyEDjgphf7naahB3dEhUuGpgUD3sjewVYsh7gi5qPMuz9Vcj4T9HoN8n2Uo1",
  "key16": "5MVFo8hezhBuoyVtek6o9gopRSq3ETPJzccSfJuHQ5tr9p5jrg3WWE2jAhKRAJaCKo1FpJK1L8qZNUHcQRGVUgrq",
  "key17": "5D7SkpUZw5SyBeHiEovVs3mzTxJzcZCJuddHq29WtUddriuLjxNmkV9qXn8PLcCU5ULmfLBd8TAMuqaHzrK3tF34",
  "key18": "3uLU1yBRkrcR889q2a3FUyhNE4ywQu6iJk8wBBXVQKGqdoFUYpnfgFqAN5x11mmkZtNA7oNrBtcDXpHWnBv9yd1S",
  "key19": "3po2hhcWDi3PSS65eP8c9STZcP5WtDK4GGhpnmfRxiANBvC1Xt8iLtoa94NryigeXwbxqqGaagtms8enMYcYvrTQ",
  "key20": "498f3Ac87DVkZXdfbcTWGrYB7zZyXfQzTEPac2x5yiaQ9roJrK71TqTui4NQCnEmwLkzs6btZyfANgvgWQAYY433",
  "key21": "5RDZ11kopYPYXJi988nEet8DgHdzZwdfhZzHYbQ5NJQZVixYvcNiT3zhRuNnX4CppLGzsJn8Q4G5BffSUB8WRHB5",
  "key22": "5Ain5PCiZ3UVT2nobkBo6tmVGXVbE6XWzcJnFdZjEV67k2pmNK7Dz3xrw2kfpHvTKryj18qUGzMTA9psNyRDp2pR",
  "key23": "27XGpCk1zB5429KDnyXcxiD5ptr8M4rQkbc3c6VREz1dLeyCH1a9y97J9tTiMnhrhz88xyj2BE9emMHkajpbjDV5",
  "key24": "2mxME5y6LR3RepVkuHk7uShp1XDtjWuLWrUdqm7CWrbNMQsa4FAjkLxEP4emDLqSA1K1UgJqfyHGqnm6eFpmtqqy",
  "key25": "4aPaBP3eKWyt12XHGAWHAyJtX4Mx6Z814JLEJm1cTShi5z4TAEqWdDTNUoSUHmzmvvjZ327A8FyaGNkZhDznN77Q",
  "key26": "4DQyNH41FWkpHv2bqezepi8DtR29UMuXGoT75En82eZLmqQhYNVxSxSaBePswoy838dHE7m7XaY4FkBbgtS7j17c",
  "key27": "ZovxEQbjgXuRExHv4tSbuMunFqQCSrNzmK7wMEznFKnfurUYq2rHkVMWCHoVLhMA8B3AuLQN9KJcBR9kNi4w4xH",
  "key28": "jDTgNGe6Jdw4tdauV1cjtARfs45c8kjaSvn2Jj4vGTd4bz9Kd2BdV3kiAQT8d4sc8N2drRxMQS7Kg7UYFfdXRn2",
  "key29": "56zR7DLacxsLmxvcwBbgrWQMkCHtEHSuEtAoCoh75aBYGEVCjFKVUFxuJ2MiNoapWAiGEQZaxgzu11csuZWWkkMC",
  "key30": "3fperRWxuNMUNWNEe48VAdEjfqe7R1v8EPH6UfUUpaLysVmqBbCCXeGGigvU6Yr2VMABPPWTXbUnxKbD5bh3r4dH"
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
