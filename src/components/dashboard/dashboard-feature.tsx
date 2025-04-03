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
    "23NDrhdxP3BwrPDfzbPDWtuVDCyxDn3v9zvRgjnq7dqe3pGAo9zachEw9EVm7gaJrUyva2xiCKczGKpxU1pjj7z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53xFor99Nr4nsUCPmN5HEhrMGQPo5GQQh4zpev1hQ4KH3XCnqYfvHT2gSto1EGnMhsmct18REK6Vx8r4HmnBVKT7",
  "key1": "5e9XoybNSYBMpMviULec8Pqb3eML3YGQtQfqCzETweEAmaawLYjNbQ8NKXu9ns2WCFDmx8qYLzcW8LXEHonVjc4C",
  "key2": "7r199sT8Wo9ApioPcp44CemgUSTNkESamCfewDadPCx7KDTMTynhiYHg2KjxTD2E3jL5ykF9Ac53bGj4SEUiBXQ",
  "key3": "3UwQNF6Mc3EsYW7RgcyrhCo4fQCgcsgn5VYn3EzEXg6Hj9oYykBfovS29egKiD8QTb7UtBNeZ7QkXk5GXr4RCgAs",
  "key4": "huZosWMpdpMWDkCRdMxSchmqgKvpHf7gX8o4ZdCYqj4e4YQFNybgFEPjEesM8Xq8EVceT7gdp9oCuCmvxgZvBST",
  "key5": "2NbKW7UKhdftdFp6uVnJgvGEpv9XH6JKf6EujNyEnSPQXi2x6kM5jaT5h4wpKbk4bgHSsLmgzD83Nv7yJz8rCZKP",
  "key6": "3fj2aznrVitREjndKnhybG1UrLZeRJNxEQMtRSpotxL5da3JynvfiHF6hTug72HiBDA4qdeKcAv3dZSQdnwXCBka",
  "key7": "4UEnRRG5aupKMqmEdnXcLF6Db6QkuPNtzNmzDbQZkuab6n16Lpr1zJCqyAxQAsgwcU79XX93BFYp5KirbrxvAFvG",
  "key8": "4eSfyFH4tLagbXUryCXAW9WuJ987mE2qR4mCCwjnvegiWoimhtPyVBoXtsH4Jz3KMv5bx7Jms5cuiJC9kMrYXDBM",
  "key9": "4ajPwjrK6RKGUq4DhLvnBxaKG4w3hy6G3rq5mBkdFH19dveBDxmB1odUDXXYDPh1CdsM29i9zN5PVaYQHYALAqyy",
  "key10": "3BLoxo8BEAWAsK3QstUwtFYdSBNUVmD9DVFvPP9wj6hJwBgXXHGw7rNRCC1o6CCJdigTj3FBgBDNG9fTeCfBZYPt",
  "key11": "hvL9tZUUG4Bnc1jY1FeXjWHghWMCWumQN35CqnvELwtTpxaYvQ5spzN4hhASYwuNrKh7RMuC9HDxD2CNm118V3U",
  "key12": "3bRXxGQuCip66uYLKfyTRquWv9TroxaABuo3Z7e5XByzw1Ke5N5ekciZHXyLpEgThT2XgC1XZVtxXoXQGLGCxpKB",
  "key13": "3gptgfDmSEGu7p5qtAhpby6P64K1s75Wyux5FYjLxKDb79FEZq1z8Tw9ep7HEfEjtFJpEdF1xHUWn2cbqUuEfgF2",
  "key14": "vWFCk69cng5rCJnZXs2D2NBNoBqsb3UabuafRF1k75pg9sYZsXAMXFVYArvi86kUf2zGD3bJ1gVaDtsnQfTEDSN",
  "key15": "5rdwjktj9waS5QRNHFEmnc5b2rgH1qshjrTfzLCAHMbvfHrZnhm8dQ86gBVF6KsDGEbdUYmThjqCYuTwBZdFMx9r",
  "key16": "5HYPK2vbWobCGrtPURFjWSR2nY6dvfC5UTbtVeydDhsnLNZ9AoFUVHQNDk9JnnSwo1C2PWG1jDJqyjZ4E4w4TsRP",
  "key17": "4GZdijQAjKLDmegFCRtPhCEfxHJWBWvyerjVEtcgZMwGx6o5Xdpkr8LERqBmaisFUytNVanvZm4cF1ScLRZ96HLt",
  "key18": "4XkeBWgZMbWfphPtuzCepi13mZZwwsPwVYqWc2tjKkwq5UtKcPcs47i7FRCvw46MvbtRfXGUYkgCQRAChk3sfYRU",
  "key19": "MCTFxEhms6jniqRemxqea8hAkZaBF6vP75w3hG9ZEof5uWzoV94DozempGbeJD2fzpZgErbQK3cBLstYu7GRsrH",
  "key20": "243omYp9yyyfNh9eUyqwAjeEQBz8wgSzoggzgfC2cHrU5NSPdqQALXk8GT9Q96DSKaA6wBfzJQjnpG1oFaKkB1ga",
  "key21": "3H9US3H8etWuNQP1sf3fk9kiUvn8d3zpxZ8KU6e1Qp1MmNbpvN3vtYKcUhYU1PQ6f25ynrpevixycPZEn2d4cScn",
  "key22": "2zuNGX8tntr7eXto4jM87gmDqjigJttXD8RXgTJqSyDwQrhD2uVaPGowbPehotNkHntF9DT4waXXzHbRV1XYotvW",
  "key23": "2MC2q7hKMv1nsDSVQ4iJmA3VZsQ5UuL2hNi1Wg6jiXgFtXp7gbaBFYnDAE53vBAoCHxLSKVZ933bxmFVEprteeXS",
  "key24": "E62C7Mruanvm3zcbWigF2ZaqgQ8FeJj8YnqQn7ZcNftwx3LuVbBrWPZUjHxLqqy9WyLeDBnfuzptehPZg6xsDfd",
  "key25": "3fDAzX4pr4mw5L2cSjQa24g9egV4uaJawqVc1ewvVzCB9PoZyE8V1dtteQY1FVvzjsRZvVNDA4rFjBN9xbvdT4w6",
  "key26": "2B8gkNSprxfZpa4ApBUnqeoneaTdCnQoubRa5buoX56WyT5h1nYm6prW4nregk5jMknGH71BEa93nkq91t1n69kt",
  "key27": "aVPURwxgWbv6TRhELugKEEtsjznEQqbrtjW42zTcTjkgWYRNhrAp8ZDPnsvUM3APBbkJXCEe5DsqTArmjZbaerm",
  "key28": "3PLBg73NxvCDrU8MKBWgaVfVm5PY6QNSpAvrnhegBCBB4KsxQemkbghNN4rE6U1b8hL8Mwpsxgig2nu4CYM4rW6t",
  "key29": "4cNgMfapxe2RQhuX9if2gmu39gmnLFkUEMocvgb9Gb1Kp5kEZsapuNsjP4YoFetsmrvtA1TQKex9V7eAGqENEan8",
  "key30": "51yH6iK2KC4Frr4wrGFfFzuqdRGwY5wP5aU2XpBrGbCCinVR4NdLU9tdrrAe8KNNKUkqWFifqeHnQzDxkAUwNmQ7",
  "key31": "5RSSsQF6SY3sPsjFZViaae5H3YyqY811itrCfhDur19fYpe3LNoSViR5zvPkBB1zv3tspwy3vDCGLLsNifBQzmni",
  "key32": "3PaQNkgEYfLE2XsDRRUzDbZoeX3HusFZKCnuZkHfjPnyGqEaNpnh6mSt3zHavzxqFQr3kkGoyUS8i1j6rSVU4W1K",
  "key33": "5w5Bdjcz4qLhvhp2fxQzuWwMuWu848UBgSytSANUCZ1eoZjXY6aoakpe83FVeNjPQyhwrUcKoz4cB85qUmVfAXms",
  "key34": "3NJUJoQDTK9koVmLrxbWjSEYVhavYFtAeYeHTq9PU9QQqsxnEnY4eJ1SY7osXUdPfihGgYsp5EMdSLNJkxR7r5sV",
  "key35": "36BpjQeU21RxdxhhDi39gydwXEcmhsmZbmAkdNaZBtgTBFvkc3wfaCUFDZ1TQMyLQyLVR2YEkyqh9fSZCNVLrfuF",
  "key36": "2p5ay6c8vbuE3Z1dL3m8UpxUyvyqqWiE72kvwDim1FfAycPKjcspcMK59Ngg8hJHV1NRNnxsabJfmT9dxcWvZky8"
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
