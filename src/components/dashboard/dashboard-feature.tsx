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
    "3gXRsCVhxecZdfoSv7ydDh6GuXqzUoUuhk8jjaSZU4eFN3rzQsN5rFiRjBGcdgzQvSSsXx87RrkP3g7ptmBXAxpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWy1N5yDuUyXZjy76uiyTLgW7ap3sqnVwCysZUiMj3CYneD11DTkotLDbEkLHcccDN6V876PgJk9zQheTEnTP7",
  "key1": "3ATS5YGuTGWVYiJdCTKiyaRyJyc1JRxv9baosMfUFPryNj12CSVkAcQNRFRF8MRvPK7k3dCRjAuQn8KqkXanjMSg",
  "key2": "6679q71LbBnNNA5DYL4uHW1nhYESsecYryApTYDVynRKxBxKCeAUPUF8UfZtLu54v8udDvtQoic3ENzLY1QkovDV",
  "key3": "4SfjJPmNdzL6gZBk2q9oJHhiRBxQu1Z4U2vqP1CzsTkhghocaWrEhxtExGSFyA3c4JXmUiezW1RugEUjaeDyiqGx",
  "key4": "5LuxGYRHuE2tYViENM7yskrUotGSXvoviVTNR8B4i8SP3WtKSDTGoGFbXpo4hSGcK4491zmJdjGvpFiUST7KZLXA",
  "key5": "2XmXyTRQBi4KaMM7m3NmeTeUJiryFKGBSyMVCLubAaLaqcfCupUUuNicun8FfbkVbbBHAuRbGF5oMB5zLjrHhEQK",
  "key6": "5a4Tr447NRcfyQfQpNXMHXkhNMBKQXchuiKoq5qDzwf7F62t5CNzqwmNq8boURVb5ntnWmFVqA57xrrYx3bgnj6V",
  "key7": "2BRcMwpDQwhDUpb2p8bj3ufAavhGgHDdn8giMjAipgsK3ADagy9mEeTehFiZBkRmVeUS5ecjKQdtm3JQcdQVE7ZD",
  "key8": "5fjq5gdYyfKYXtr9dBCzRA2vqrqRkvWSLHmrBQ7ViG86aqsf8pREPFfigUgjks8te9LBEMhnUxPeY3Ew1yyo1dAX",
  "key9": "34py1CLpRrrqaWvzuU2RRJidwNpC2YRAUXsBtgCCVUBo2jgSHmKXTeNvegtp3DEbNh6XN9QtptxYECqXA4xDwZjL",
  "key10": "5KbtMunTxJF6GCvpChj5pXZQgjueLx8u435SewDpGr4ZA5vGnXPReZV5GPDpv6mENtr8QXmKvsFiCPf8qcUR9LYe",
  "key11": "2i193uhSHRBiXzrdcZSiu2u57zzL4S93pqZnSw4u9dQqxVMM9xhtnApNAvigd9ZgV3yyASFYMifGrVavqp6ycDo4",
  "key12": "29a9yRe9szCgd23KPbig77FWEo3c8j6t8JRwQQ5cYTubDXm6KmEyJFTrtnWUBFYtJPqyU48udsu63eB8wEzMnttZ",
  "key13": "4p6Kmh5pmJ3zRm3gN9zoL3GCRuyNBK4Jp4ssETqGGs7WY4mKzANtrfBBTLa3kXmpQaxksx9dwbuYB8v2NFRkhgo5",
  "key14": "2EyohGhEVfHCnRMFZup1i9f3oXVA3wzaH87vXkgsXEjvJm2A1G2tZx9rZEdaTYkwzMUwx6tRQ9Bfv1Wadwo6EkWo",
  "key15": "4jQUBiWXYukd5zbVYnGWdfnSPC3zGcUGnasQXxi5b99N4CCSsAzYUjzA1rK6Pafzp1yuLeYrmoBM8V8xtkUtT3DE",
  "key16": "2Jhqk4NqNQPYMNn4MyKJubJW3FgrrgVRfMzhhwDsm742xpAen72sbWmv7CXRZASEQScBWiQhXu4bGYW7QzDiZi67",
  "key17": "2BCEwebszoF38qcUGtkTjxpVohXjpwFmWcisFQdEtsjGJj647NG36QkCiaoiCfNawCK8JSjMFoNTsd1trA8feKrC",
  "key18": "SWxE1FpQXnibydahouek3HX1RFk7LpqRzAcYoRzRonmem3rxX9xyUCqTXSqWrYhLLfuEK3WkTjQBgNVndhzqhVP",
  "key19": "53qBN5GPPW6TefU2rYUPn42FNHSY6VuWHyWLH49JHB1jipNyZG3Go42ZDs4Gn5AYjeQoSsj7nuxqQ9uT2zsk2Qva",
  "key20": "5bK6F7tHB5nuMfR5kzbFDa6Ge5dPftJRBWUyBSqQMT2LPk7GzjPaco86WfERTYEPukhiVkgb1MxCJaF8KrTECWJ9",
  "key21": "xBXUCGbMQUzRCbiRii56LmyymEN1qWik393VurbH1p5mLhNp2hGcvMCrd59Mkthi97yK5t7FV9iMMmRiG9mwdXT",
  "key22": "2R6Wk1WkxwJtLZFNH5fxwLdBrtqdcdEXRMwunyskcuLPCiZSwzS9esPK9zKRtH7GQtxSffY3wE47QxJrApPWcCkH",
  "key23": "4kLwi6fvDrpbd3jCSxdunYpFjZ3XXDD7Qv75zXSbxMyP5kbsnekBHBshpQwe9R8a82J1jywRo1KxXvzkdcjewPgk",
  "key24": "2haWYJjzeqWFdudkibcYSEokLk7ETFocdfTssRsQn89pqSXcgv8sfdFRXBuDmkAzZTAcMhqS2adbwL5MwfNjrsde",
  "key25": "39RMfRcPC1bPPqJSaGsEYFCZwfvjUKwhm5i7XWGQcdmwGJvncDzYQz6rs5cpmu6Q8JnptzxDSDoZHpYXHBZd1JPY",
  "key26": "5bmhd8AZeR1a1aPmEMjn5hn9XxwrjG3uzvsSwazhfR4zSzUhM2cWQFZzSJQUPfxonz6YxqiAR9KwQ2Zo3JxQvGSi",
  "key27": "25xM1GnyfyQjW4kWLwFadfQW1fMjgEpfVcvDKMuzaBsw41jvL3XbRPwFVcToQXoPiJKHuEw4txXqVqeq9kXz8Hk9",
  "key28": "2QY5kwb9cqVVRXreqaXEp6auBgPNaiNX8Yf6tAN3qvmsvthBub8UrLmcCwArtQwpjaMiY8erR2roRbn9CtqZVcBo",
  "key29": "2opknoQ8UNM8LbSZ8fbGCBHnXzv5rz9nK8m36874RuVRWYWCXRTSWyZJYSaCNwsUqjaUrpkGKQndN9hmXoHKKMS1",
  "key30": "46BfjFjK5BDtPgomwp2CcczMmu4x7gEJqeVQHDjea9UKj8HRHiHh3n2xjweai6Q3t8CTXKkJb634AuFejrndNHk2",
  "key31": "3SWKiJpWyfmhHXxMcPumM1NA2a4o8MUEo4BYPa9VwsZw5vYbsRPLhbbNhqhuJgh1brz8JbN3AazmFpNwsmvu1EbH",
  "key32": "DktvvY2EyKBD2gEqXoYFb1FSybxZHtvG6gL22To5hqfkCHivcFTFPr1iWWxUTYQBoHQ2NaUvQ5RyC3fun4kaZT3",
  "key33": "3nBuo5us5oL4fZesRNeTdCjXorAHxModP8BZRvF7dhGyDPgdFuc2svWedoxhLXuKu1K3RBP3pKcuyLgs1nG7n3Co",
  "key34": "2c6LGRzbUyj9UpVg7cmDY6mvRrYULeF1nyJuJoFH9tVYv4AiXLL195GMANj1LNEySnGa33UR8Chq9c5YkMYphEiH",
  "key35": "4XvDUMeSyn8jrgokpNBofvYbQKULq5suvNyUiokuDCVPGKiqjyGpmqygHZsCUZvoTRC8uCLATcxGkfqwY6WCUhN7",
  "key36": "5EJ4UTjdhHngtt2Ey2nn4BMKBGE6NGS4Ei9awpYgWjkpzrgit6fp2kXY7JEKM8xwLduK8AXZZyiznt2wM3wz2ByU",
  "key37": "4Xbi2UbyPoWcuTHrzEJpZdYJXW6oFCQrJNSwL6hmkrYfuqVVFcFLhju8xMg7QC5xYtZw6BSPKwZPrNh8iWEmqiLi",
  "key38": "4rFbFdK1qAhcr5SdjdYMod7gqRiUeposWqfqPpCPUDZa1yGGd8UeCN9CVhFtwTyjDdCKwEhtmLTkdY2jdFJFf1mC",
  "key39": "3rHFkqxPkZ4ptNPztnHBZw8Xuq3aX4ZjwyVVs7zdrDmRKuXKHkQd31JxR6K4c8f1wUuNPGNxsSLQvEe6Ncs5Q2KP",
  "key40": "5deEZYNkKfanL7fSUBLqtyHjHPjFUwy6ra8uJCu5ER6sas1v8d1tMJSVzyuSVZaJrXPM6ae1c2nfoBcRRNLwVP6b",
  "key41": "nBY47uT9RxbwXJMcRLwuQXFxpNzbPgp2Kg2zjEo3mKgBQT5n4oxyLAoBRX1RboemLXFWWH55fDDFijSMXkT8H46",
  "key42": "5WGR35LXCyLLUxtAi6Gy7sZ92LKtVBPEB4tQP2mBZiWEpovtB799TcxgrKS4n269Y7aTUN8KgJpmmMnJa7EBQfkz",
  "key43": "pBX5dJCwErqyepHMhhbvMYsN4uFRJrXuR4Tji4t5pSYmLouQ8M4QUp1udkuzvvbdA1TdEhdVVRDCjiNEhmx8AgC",
  "key44": "2q4pV1ecq8eLv43mZj2kT74xZMCQbFaiwANfKwuyeMJqgUdfZ1EPU9xW55FrtRi7zByuoVzoNdEqNB2LFjrcQiJN"
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
