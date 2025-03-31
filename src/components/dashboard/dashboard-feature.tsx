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
    "3giFescwH5QoR2N3AifbdLo1H4gjpjkbE1DuB7f8nhDFdiNp5ADuGmzXaT21bpkXyPcRoLkwiczPTyFZaffjoJ1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjNQWkXHkpDT61zEDTNQxNbeZHXXAf8YWxyJW2fZreNuCtQzPEfawiteKMSWGFdMkAi9mfBdnk7f5RjBbkjVJM1",
  "key1": "3ZaVUWkg8mGpbEgc9BoowgkTz6omaY4fZ9EruCGjS4PRSXPHS7b8afjXqXAnqX613ZoJ5jDRF4J2cjHnPaVuLq66",
  "key2": "4iCXmkybSF7WGSKjh7aDQZfApjPwE7GQne7LjByh6dPBqYQt5Hjyjmf8jFEZWjadDTWcKsh9m9BqTCpXko8e4qBW",
  "key3": "hcVPsoganEyrVDJjsAoaZuSQ5E7Bvr7gacSk9bCv7nVscwLTQja2WX3XSvtqBxWFjno817fznqqaqW6wBmB9bmZ",
  "key4": "2qEtR5Mmb8ih5uK6rnssZ74UJxh5Q6YkWd3fZiA4ipp9URPLnFVPY7PDM6D6J6G5i8tTc6RD4qmagV1gB3GC5hoM",
  "key5": "TwfTHJdpN9mUu9SME3XkuWkMtoyBN9LysCU7yNyHoCJ4TAeAzdmRk4wuHMwrn1jEYcfHCoeFYFVJM4QMm4jkYZw",
  "key6": "49KNU7PWnyvWHoBnrpbp4kyX7mJHpGh2rqNoGBg6VCNskWfhtZx7q9QufFc682W4YfshqMEUwqwbG2o3Dg7AGXuV",
  "key7": "61Pr16BDnpUw2kD9HydriRPhFkhMcpQ6SBxFQvpdp5S1T2QtCpxyaKbXJPdvcdz7FdVnnp1JTHt8n8JguNP2oabV",
  "key8": "jXxARpmZqvaCeuett1PNRenJX4HAWA4qy9jmKhSeEPB2GtjPLwjUZR3katR9KLnzJgcVWoA4k3FZ5ArQZFV8JBm",
  "key9": "5m1WsqWiAS9nv16wjmKwgX7SAiVH9vsbBkL15UpaHq8ncvPJHbfPQyjENxLjJggEMduWqQcWc6JPyE2HPPgD6KmM",
  "key10": "66yDKzPvjXJUGFaZxszzwYRYVDQxvDoEdnebGArX4YeRL7HbmasgKHL8dKH9tfUtDeaGGmxJyUQ23pvZQSfAqVZa",
  "key11": "2BuHxreqPdENDBYve8Tp9t2wPD247iRHw4MiUxFGQYjt2PJ9M8ygQbKQdKPYXfjdRgZPwr7v9Jx5nMGUhfJfCmje",
  "key12": "uY7ADe9NuhSN6hfHKB6MfGg4QmZHJgWKp5x61b8Zp3hStZdiytwgXB9rtMv7U3B6LNkXKXFFr25FPRfy1wR2pWU",
  "key13": "2J72AnHCqVg4WExErHdDXRQzuws6ubyNbvLo9tLjguUTfoLptR6Vmj7oV19u7FrzPwjB9veL1F1LQmmU8NLdyU7U",
  "key14": "5E5tBqFwDn5zv3Vd22HsTfDhFP9VZFYK5juNsCjUaq4cpMFK2UftJy62rzx8C6Y3jsXQN7wuFMCx3jJnLUvL3ukD",
  "key15": "5j6HsbcGy3FAkiLK1gtQM7E2d27jEWHz73Spgz6iQRx42HcMUM1LYLuKVxSmRt2dvERhxuRnewwtaWfyeZswZ6Ac",
  "key16": "4QAJTYTY7nuktjuRTaRZsCFn3xaBdJ8pyHRmWpCafQCFqt9dgmWseB3hWASwHtAEwYUKaqMCWPwfa2aJ6g5HscCa",
  "key17": "ZBqjE5VUqfQeJgkJwrSrYVE3zMGE46p2AaTCs8oMa1XUmXNqYJC29z8S3TKodfNr5XeWJmcvENXDTHYCBRd9sc9",
  "key18": "2RcC1eQkQ369dqRFtDTV2zHmkfE8JBAdWjSJh3pMasK43m4buGYyFQk2YjJR9LqqtGT49KrcBcmdETcVXCZ4ybvn",
  "key19": "5N4e6dfLRKqExQ5ezwe3mhZa7vZ9uG74xpptoqYX7DdDJU6JEiQeWqocCbwyi2KUMWQdoj9TWVcE7bFaFuPsSGYA",
  "key20": "5vUEMRHCySpNeRDz6FW9P9D6APz2xh74KPWnAVBfFUK3rqvn7Tp6715xdBHDaRjKzjJXr1DEF4PQ3tUkVLFTmBPK",
  "key21": "3RT8QtaHQwwMLqLbob9KZsVhQNKxu8nMmkno3vF1fVkcszCSVKMmhf6VqUevjVqA7z1FYAtJmr4NKbiWg6rnpaNJ",
  "key22": "4ZoHsj3Gvd7QvKRjiRj5jaZAZcZYFpxXMwnRqydWbT7JJLhiKQfxwbY81Qyo9hpPuE399aXunj3MpmLxZFqHpzqs",
  "key23": "5TPHExrpyjFEczrWmzmTNfs89zhXmfcuwZSesng1yTskwDTEivtebwkFkaHkscPXMGcfGnVMpFkQoaNg6GwWXmtQ",
  "key24": "35bDYKTpeAFEdmCHb6nv3fY8dbKA8uKEiW4SeEzrZpVSWmut9MshnTUbbLvTtw9AZ5VYsWX69yqH8x1Aji6j9d7z",
  "key25": "4f7CQqe6cNDXSToQaTDoPUfvkMMqQzYg9zFAR2kCwLSXSkQSDcgrDKrLi77KDNHeidNrUi9QGnoVYRp8WR43J4ca"
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
