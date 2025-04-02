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
    "2UvxKr9M9GijncgH2iWs6TMi4DQQsz42s7EYoJf3amcWUEma68zwuQfoHw87wExHQtF4K5RR7vAPyybPfmjfCtwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9w5yCcD6xCm2nTEDj198uhpkf62jpExryDQSqtXPPfVu39siFZeb2ojF8TddqSfXhHQqX91pKiUPqYWHmrV1Ty",
  "key1": "4viraN7AgDVkNitwyb6N2ERFNnzRAufu31w2qBWmob744PtdXJ87EwktnZsvj6vfaQYeWVvXNNzPL5q6EaMdnwkA",
  "key2": "562fYa7ZqcAc9TJ2nAtuPnhmNJjHABcaG2FAsWzjeXSbDWZSB24m1UnStQEdXw46onwnsnsocnee5uPu2FJnk44Q",
  "key3": "29EBJ3spWvCx3m6QUhHi6rWhLrWAeF4uJCxRLmwMkUnVdXVGN5cg23bLxgZvVzDsqnKCjxZd5MfgzJsSsgL68PVF",
  "key4": "8xRSKQt4Quz5XXKxSmpJ7tzQMVoKkEvGjKeoniizFNxUPs4jzF5tvJ3rHSF7toVqupzJCUNbiB5KS5JBw3PQ5Py",
  "key5": "5hQhRLLyBMf6EqUvSAmNn2ThYUnzcaAPQL3PPjALMR3sNdZQZjD6qmzaH8uyagFEfuUB4ej6ai2hWCoLMhR7MgKc",
  "key6": "4mwWz6ZeT6NweYo69K2xCu84D6RTuhDvuXBe2zQ4VwRyXv6irkqRKMpnXUfoxzKxrBEFCZ3UUWAomMse7znSVvVG",
  "key7": "43DYCr3qg7Rwa39aE5Q3oE48KGduw3xE6Amj7fpKGt8nPCAHDCWoXjW2M6oRwdFM1VwCbwPBm1bdfk5YmhzLSi3v",
  "key8": "4w7sXihScTMcHtdFDpw37kfaRYad7moMtXMWLZSe8BatmiRBvQY75peMtYCWgVTd7NrzpJ2kNQLthtDmv5sZF2b3",
  "key9": "2C4FEHyw1Zu4wT73AKqhaY2CEvmHgURUacHqJY8uJjRJemfSAcr5yUeL8V51ja1aEWDxP85pLNiLUiqE15jixG1a",
  "key10": "5q9QKfxb27TbB3ondLscyaMewtNKVAbC9GD2PYUb6DRWtAWuFCHDPA9Dw8AzyXm1kur6NxXtaDiD71ARXdKzZjAt",
  "key11": "3w45sLBBpdCMULnQ6vgkyJtuVNQw33MPd52n3YZ91CsjBkbd68aU71FegcwsGvQ747aKCzUt2RjNiLaf6MJbMwSM",
  "key12": "2kA1XssLZNRSmjDgJwhYPDZt5UKvdKwtxyoXKuqNV3iB8hTVZVDX1b4JNY3UxcutnBwmjeo9N5DdgmERj4DECJaG",
  "key13": "36PLs1DuunbWh53njTmPfBwpt7cr6eGzBq6p71s6NB2HAhbFNKXvtJNi9ZD3BCFfBfCyKtJVJ7mgEmUMcNZQRKUm",
  "key14": "3TZgpSUUWxcXz1FBC3Y2yedaNNjki9wJxf1B4EpyhwM4wNDLSP7samk8AswRFq9GyTrF2pdfmUtecPASRvXDwABy",
  "key15": "EpUwL19ZPffr4Bx6fu3LHqdtPjkeae1KLmP5paSEDeUXHMY47i9zxwqXkWjzjd8BxDxxWeyVGNgkKVwYS7BtCHR",
  "key16": "5pDcxVQFydGvDkE7LTPbpm3eHkSTQP8v9jfLQDQ1bVXa3zh2nLxkzFMjsbaRFxNiQpMZX1Y3kG7HB6xTRHiaEU4x",
  "key17": "sCKCzgKCDMao8KjnH5wqcvRei4XTtJ7yoXhGsw5GmYXsUYAKrSQdRGgxuriysVjQHK8qCWbbupzEGefPxcsgT8H",
  "key18": "3N3FTXFFQZ9ijncxVRhVJgTSDtZwmVoLgX2MYmYn47aenCcF15nGVQv2FTQA82C9GK4CbiF3bR5gh5sibu47NGdr",
  "key19": "2cZvzK3ftJyBbKsdXAszJttsMPwGdowLjKCgWvmHbyn9nE4DGLPzyhEr7YLsYbwgToZF2nPRZR7UJbv2z8i1DHoD",
  "key20": "iyQuH3WYpch1p4RMLKWusUGtQNAiqCjRNunZETWYWDG2ATMfEEkYaFezfqzzPtZ7wecWS8s5Dy8yspLZbZbDcXS",
  "key21": "4f8fcWTjeLLDtVkVff2Da6a1iquuzFGBT4BiWTxEWatehJwGDmM5NseZjPhQAex41mnm1QVJzJd1FR3SKRcnKig5",
  "key22": "4LsivSJKUJuPorzvy4937sBV8CteuNgZKa5zDDbaNxEiVL2iJWCZErpvrzRFjNMf7K5uDbeiE86jD7aVV7PWF4DU",
  "key23": "2D6L6VRUiA9X1FbTvh5Ab9tC2amgDXbZvmHKfvr7sSZNufLhZKz4CubCPupzK6mgcsUj4i5Jdt8S7aLYBuuHAU5h",
  "key24": "52cphk3tBJonuaPgrXPRuLmthDkAP1QheUKgns9HfiycpqjRhXYVMzDC3xvZqi4sAyttdKoQRbzT83bnKJeZCiW8",
  "key25": "3rBrJZCHcRrFYCMHRibcjsxoL6yppAsKKhtMAEVExcT5m8oTKS3SrYvVQHuyDmVJrFwYbGPVzbG8SppfZjYprfVn",
  "key26": "3DFNLuWfzyMKZYKDzvpiGtUU5KMhAsvnhvptF64oamAp2mPHjnH5Nnev9r6NiKn4CkTVzc392FVctdf7Cw7T1e56",
  "key27": "4A1FUgmunh2fg3Tdq1EkcjCvJxSdUFxUoDjhxNfJkPbHA1VqsYNuyJMRgJ9fyJhzxf8iuxXCJHU8ErtbM37tR3A8",
  "key28": "nLTtC64PNgDPPzmeLNvj3fPQ7J6VmT4X25g6hv9xQcSzoDivpSHUJaRJRCxhEFFfLpV9BVyGjrmewnQNN28hyys",
  "key29": "659TBoDUAkyWW3DmwBEyWTNHFbD3R5DybuyAVCubxFGd17sd1nf1EJauAFEGqh9q7BrUdb7QaTG4B9MxwJU9iHRt",
  "key30": "rSLawJUHdB9QcEBMaZ5GRnVWDQwAnxhVeXWeT63AZrd7CsWwVRckfJwXzgqCEJ2Mtqk8Mj7JLxnmSBQnF9V1DYg",
  "key31": "2s8y7GzULpEwhcNcNDZBzqK1r63eCXMEuxUcyoxFTzKL3qQYGNiSHKr2GcuZZrVoyVFT8ydScN9i7PLRiWEjeijS",
  "key32": "3wF1yN8EVeiRb9FE8wKQjrtGgzw78mmc9sYLbpedBSWperat5n4NcDitLbPXJVHXkukFLbti51xGRwfqMs1tRZb9",
  "key33": "5qbVCk9sFFhZ3ddGy1njdtP4fS1FLCw3Zjm6FPFbFsH6UozWHxPbmKtZdNVugqhFvKAgTpAMGmxFTe7hAS9i4gqq",
  "key34": "4nQPywAEafUZPeuVeWRZkWtuvPhcBurBHSZSU6teKNisyTNPZoAAzHUMaJguW24bdotQeBgyepkY7jnPm6sRNd3h",
  "key35": "49inyH6o6hiTF4zfytxGGFNqvErynZomUzXRnD3VkFn5W7me86oe2GyhxhthoGDxFpfMPPDQqccR52jsWnkFiJMs",
  "key36": "2gaVcR7hcvEbJMG3VYDb158Zk3A6K83nkSJ3BLPXDbxcvyucNrDjYVM9H7jHAiaW3HJ7Km2Umqzf57gbBgUK4cU2",
  "key37": "57xqH63YM2VY4VXeaYTjS13eyw7fqvWPkz7FAnQ3CwNaqpwhoQA2oPGszAJ7MobUsS9JS8uk4kcU6cwfmdSrtsaN",
  "key38": "m55b8T2b8fTPzcTVNBY5uirHTJpepNAaBCq5H9utjQ8NjTrEWWuFsJfBspZtLSY6LyEqDTaiQGqsz3BJic4SA72",
  "key39": "sW7xPyprDy9nv33EfvBpyhDKRWziF3XrECwL7x2dugYxoGNMvZ4JvPSrcREhsfxrFZ1ZPEQV9wGkx4RPKp7pX5h",
  "key40": "9jkfjPxTN53HRAohYGZNy6oDaZmH7tg6bUXCZMcBwJaXrYAYVh9gCSdVSMBrGm4e5jXdozBuFrmPGZFxJgxygMS",
  "key41": "kyRsVe9MwzFXTr9YU8YDtUqpbvwUQ3yp7hYVWgbapC7ysqpaEEHrTZyvdgVGR34bw6wX19LqZb5dDK5XL1pNegd"
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
