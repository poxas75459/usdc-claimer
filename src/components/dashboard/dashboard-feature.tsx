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
    "4Eht4tWW9LemFEiQujG574YNWDEoMPJ8j7CKYhpvL2kCWyG1LSoVFEnihN9JkJw2yuc8KVKRYSn4PBgHJ9ARQJod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JsjCrHJERqfZMmdxqaWJGpqjVnv5jeHxhLByvr3TqDKzE9Bc9PysyAWGtjsMigDJcKaV9VomAsHgDsaemGP1gU",
  "key1": "54QsJK9a9EjsVtoZqHJaLoF69K466MyCF9mGJtxtdzBVadjZqSsGaGt6gZq8NHbcUVYArSCYUXcUcaiyCY66WXaG",
  "key2": "43xUTwfGKrfEujvYysrt5hbzbobA9uWuJc6bEMxy3FphNf2LPSProsAyxqUH2wEGbA1N1CPFcSK23C6X4gFLu3bX",
  "key3": "5biwtioWv5Tp4Nk1cmgfruxDUaQWMrYUbNy5CxxV1azHsYTXMbfiQw9K9Ksu7PQtrcyVRDPpBNmnYHwFsP1QLem6",
  "key4": "qrkfmXaLUnssMtmRGkyHCzVnz6xaWZCPhetz5g5nmePfCKdXzQDF5QTw23CdKbfMCkpSqmw4PWh9QpiHdFqQSzY",
  "key5": "3Jz62X9eXhz15zr1sZvbHGb78TBD4d5CKXGL9X23qEwndE5s9wDgUwgejW8ySQECvhuQzECnYWds5XjVN6TckTzU",
  "key6": "3wX3DQreUxGaxLJqNJvNiod3q8jEpM3csLo8yEPAf2pewUFqtLEX6STmt4nBVGmQAZMKC5mSsDvDrmiQyzazN3d4",
  "key7": "5vizZ7jfH2ujdYMJeXsU2m82xAzNxgVj4qfS8UGCbk727NBcqdxomcZ4FvEhnyuzcqgQpoJFviFPKuKseMa6Eix7",
  "key8": "57zht52mZcmx7zdp7io3bzeeoDgqzeTQyyxAwDKk74EFLwRvnsfsCrzCw2khANJGtHqVTX5z1TRNWi8ZuxhvQJ2B",
  "key9": "2WBdBoBDrMu9wJFA9ejTyaubJczYakWeKDSNgAXzjG47w3HQ3cFaPdqQ3aEKJcyFWx58VaSEYUME8r9JeNQLLjtx",
  "key10": "2abyYYntkiBGVJBvZtavo1B9NKTiomLc1ZyJpvp7pJFN8TU2BG3zrNg7oKZsKf1gG9P2fPyViw5FFmQrbcD7h2Cn",
  "key11": "4mwtEThH5LcrFzt29NoBnamLrCx7KYCjUfLFnUu8eEAACN5pV3TCRUV8qY9MHxStaokVY5yESLod9FH1SnbEJcmX",
  "key12": "vLeFJSNrFd8Uh9H5Yc9BbPpNYwa5GnMFhXnjTNco1SHhZYzTAdWeR68DjjYz4gtsdabcsJSSc9hNcwYBPCtkkNT",
  "key13": "2Mx9gkgJTd3PwqpVU4D2a94ULXgkn3Dn16yAjYMjupcFLrQw52EBZGpvHqTDcJ4d6SSKJZyCrktFhk2nVdw42MJh",
  "key14": "43oA3AJbkp698Dy5CgMBYspB7maz5w7ah8kybzQ516FJLJsuPdiWTKqemSZrEMBECZgjrRSd2wXi8pnBDceGKqXD",
  "key15": "2Ccos5LzE4d9Eq26cMQ1ZxoeTJ9HwW9YhhNoEmQpiaDA344DKj8jMphA8sq5AiuKnCJbsxdemEykWadRu28EJWcN",
  "key16": "46yVPFY9FbuKVFgnKTd1GyUeNZaR4tu5vd3tHR9n4wdVuXws6Eu6d372JZMzhJCsmNzQR5KRnm7nwvRHKwd1aiGz",
  "key17": "3vYjCw4bfdzaQ4AMXnKk7y4ZFW3kS4fLfQ67zJfASCMjN2phLP8hdvHCD7bsaTarmj2Famif4x2t5v7GkkGWzucJ",
  "key18": "5ZL6xjtER74iPuiqBhLMeJhJ3e1aGLW69thw1aXeZMSEpB7Y3hkRm2eHS7ELGYk34Ze3QFAXYMHSg8mJ4ZZQy6sD",
  "key19": "4LM7SrvB2kUjQQ1QAvs2kUzUk9qG7tG5PSr4Ca3wADw2Y5MtCyupFgeatjVq83su46HxgWKw6qQp5UC5fJHuVftk",
  "key20": "3sky2nj4iZRTRac2ZfVft2JemT19JcG3tV8bSv94MDkG9nQLqCEgwX3nZXnKEHryBPJkTwCxG7wZxVzvqHYwUXQh",
  "key21": "ASU4ung3L9Lm1PxdzfNP7SDU36uwuxz2VHe3HochzjLbtTCA4mZm6L2B7d3XrHQHn7ifoYGDH4dphZYCuv6hmyn",
  "key22": "tM4cxp5cmPW5TvGW6D3cMZXA8Fmq1ZPvnqG7FHUPQYMjH98fuDWUFXHvTFXBahTR1fWrr5SQDY4BwAKAjBkSeTZ",
  "key23": "5DdyYYNanuFLssraXhb2qC7SxVXGNnMDBccxA89M2pBa7cNxtMjsUeKKuzdi22nMKReeAibwKaQNhq4qrjYTj7PY",
  "key24": "2mjJixHe7sqBRp7qkbGK5hmcrejS8KB2hozhKVAJ3qGLSWXFumLKK83fQvmeJfkup3S4xBPMMRDtbygjFxt2MMtW",
  "key25": "71QCFchMponv31Eprhnm82cBLuvAqB32wQ1WUsT5FvcXuc4LDMnQVrnUhivTmMgVMaS8GD8DK3wakSgTNPgtpeW",
  "key26": "5UAa9jwV1j59GRxrxrmub5MU5zkw5Gfu4jg3ynWMTNHEj8ps5yMwVRsWcgXFE66bfgtqCbpozQ3NDFugDSHpUgJ7",
  "key27": "5u1Z86ZdAVp5wunehxYgRRmx6dejnV4F9XdA8eWTVuHeoq4o8FwhQ9fkUaamjbNsWht8g1yFCvcnmeBRo3jaZEwD",
  "key28": "fn3ZNALg5ar9EcMNxEAa8SJyZjwHLUG1Sr67QUQNx35q7DVcDTLF66rYvJ8cqXpuerEg2jcxN96vTDfjGUdDNuy",
  "key29": "45CufZUEWGzfqZVVXbmzA2wKkQ1PVHKZALYuhhZdUMLvTrXWGmZUFL7qzCmjm1NcmsXNGGPH9EgigPYqVGi26KXM",
  "key30": "5atQPuhNPsjw8AfkDBWxdu6NXgiifB6kAkRpUM6srpuSwk8eu35TDid51T64iUnunDGFVDbZEvuqQELBEaWDDz1j",
  "key31": "2WyYFgSJkD7z5NiP1KGKH9hqtZF4Fbz17jxkPKzfHS5Ns7D3F4B81AmRDKj2fvFfd7aQJh6YAkqhAZFqpFrs3TAX",
  "key32": "3YGNyCqpZRHfftag45EmNrvDNJhGJjZvLFSKoXqjGMAbytdPf98wzp8Fc8TTagCW2zhJB4eBsSuHwxmR2jwh9SVJ",
  "key33": "285dNmEquMcfKvKEeMotSRDFwhFHEdEbmgSiQKzwTKd2Tj6V5AiWS7SWtC19CNiz5QsNe8faYHi8nZLHSgdn7ooV",
  "key34": "3txeCQBEvLfbH7LyzTMdQgz62CjKtxxo1U8vmKi9s5F899iruuHenbESrBRiyUQyrhCBcarXyE9x2a71jsEupf9f",
  "key35": "3MMQS9UAfCxAhnVqCZWQvc3Zs25PDzwNV44BgYBzxFnSLLQ8zhGZG5YQ9KBtmZ1TDBH3VDFjhHTZoyzZ7DZ9qqzG"
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
