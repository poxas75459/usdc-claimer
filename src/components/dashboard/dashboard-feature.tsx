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
    "5f5koNrzRaxrFF4FPNddCmJXV6rBVcEb4VAQikPtXn9ZsgLNivD9K2jYnguQFUGFkKnJ8FhT7zL66ajAQqcWu7og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxjRSnFNoYNmaniNqcCFsNE8dSizibewSb24NGcdvuiQQmEU9CcBA1CJEQpnEkbZ52coQnGEU7QPeXsYcdn4oK1",
  "key1": "2Tr6UgGSVjSAqgrEXSUBMzPrd9HZQTsC54nhdBF581cmaekWg5QKvUNpeJxR8KtHq5qFE69iA1hScahS531rQHaQ",
  "key2": "4L5w7Ytq5ujXNzBX85bYB4bVYEtcqFfLSd3joo5YZB1dLqiXFBSS2p8zxTUgRSPiUEppxrynMM4BXETS8Ak7RmwB",
  "key3": "2D8mHHUSdqMyVmkTkkysi5c9UVDbUzixGsXkXU8XXTMLGBMhCbzNjySRvFVErGWDbsVLKXEgyZYC42CdsZXZh69q",
  "key4": "4rZdvcxhwrfGzcQeUnBMBSUMgCvcokVCfpd6PUJdvjHhrkUCb24gvMsPFrBCqeRGQoChUsfMp8tMTuW7Gtyr6e9T",
  "key5": "3Am9Hqw3Gdmf4AZdq4TxnKA7sUFqwojkCNC45NmXaBxdELhxXHrcNCQjkGxZV8SyzEePt1aUzYABLv4PsyboKfCa",
  "key6": "5My4gw6JAjj8YLTEbSbY5rWUM7GdHvvVHGGiyPaSAVS1g28bxFhxjf5QQmMg5Mrvmy34Ke9Mz2bqiFmirU6emfVB",
  "key7": "29aSYim4kZbgHPvMfSCiJCjgbewioSnSH8LXeMoLy2NsYS3XNSmL1wsa5UvxnktwkMvbQH3SZoxFv7YnoPZBu4jF",
  "key8": "4Upv8UdZ6163gjnMGaH36gVLB4qU5qpX7jLuDczDNptuNxYN1BvYDjzTatEQDmgEV68SSfjCDSCbDCEWG8Jtf2wX",
  "key9": "2sgbtmTU7BstfoYpYFcNEBrB4fN3SSwTJdF3MroKL61XSZyAsyemCn8VHY98FecZs9Zdgts4EQj2hQjVBapCSvtV",
  "key10": "2qtCRrnUfo7NQPYxB4PMxBsdrrjFtYRu4bEPDTRZDppvx9Xa62rvYgjAmbKR5hfed5Cz3tfubM2CjepyxDcACpr2",
  "key11": "3RX9DPVYmYFSoBkTc1bm3isa7gw1dkVEyMcMYwYensMyAKzBmRTDA6S5oYVLWS2ecc8Fj3ytva137dTPMgPsH2Qr",
  "key12": "4AZDRgvBiGFzQYfyNjJZE241RxwMNYZ6xqhpWEGvo3A5JY7ejFNiTe3RUGsTA3imfbpZ4X9nuPwMAJeWQmBHJ14x",
  "key13": "5p1engubjvUu6q6SYponQbZfjbN5kwNXP8oGTk9DWqB89w2rqwNdW4fQfmswA2JnqU6LYmp3Dd6LcPNQsg7s8TDJ",
  "key14": "2jXJ6oYioPwCH9S31GAQ7pebZnDiNzR2MgEtDWobXiAZDiy2jkDUUqLFd8Vm5HAdasaGSghJfMeFs8kpuAp1vH8x",
  "key15": "8D21ufytxtf4virDRxcAdrrc45NTKNuNdrFejZpD1XRvJmGoHDYfBm9pyDZzmSsdGr577MMhgjaisnPZ56gDxZG",
  "key16": "29UAn4CNMqzTHxKnwtmHCvgxvPqaPkatHu9mxoQJiXXBdF5HJTkPJzXLmXiE42jyWPTdNsMiQ25G7Wvq45VdSRWs",
  "key17": "3wYs6n1g2XkL7yvP9kgRqizAXGz4D5dh4fzSr5NVkC9LJ3qVcAoSzmSLumzZf5pz3QeDTs6cJtoRr9pBiQwyoutg",
  "key18": "4Va9k6HvsFkYZoen3kGmtcFsPC2Ck3nnD1qtdE3ijJZJiUXBA4cDw3RpaxKzV3sp41L5dr7MfvwHCCeVkZ4Vk5PR",
  "key19": "25rgsqVSbuz2xb8wbMYjXCsY84nBnMjcKjnvNLrkDBoFwhtm95PRcoP6d2TsTKLXoWpjwR2mzDE2SAsm9jhWkaeG",
  "key20": "26YWUKgRnHsQ8qP93iLw18wndDJbBN1uzkWtyvpQ6gBUoKA1JyEqCKgVPSpXUWS9EJ8fadgxYvccpH1KYswsCxp7",
  "key21": "xUmzCNzD7SBY1owaERAxirjhKWud1gjvAB54fE2YcB7FTKJHUY9bbnnY6W8xXBMuMskJ8uDdmTU9MaAzk93L4KC",
  "key22": "cBeetawEh8uCq6nKxKXcw3uEfbzuaUcerPZYDHPuf315Lof8eHmqsxm2M1iQpmpJDYvsnibcSY5iWwT2cQEnS9R",
  "key23": "48MWCSjpXWe4K2GwkbDizXezSGVCPPjdaRxHvanqC9NrNKZpQa5xykp7KDJE9qjsHbh6jPPsTTdvWv7foqeSVbvf",
  "key24": "28mteF54cJitvnWnQTNXS5eG71CGnAUrRr9NFcFjnnQbs41tCVwHVQKWHYpNYuoZNGEvX7SZAqFBoYVUBjfr4xGc",
  "key25": "5p7L6WmGxQGbtSG52HUaPmyNDoJ72pQdwmGa9Z8MgUBGXT7aDKECwaJwaDtq9mwX1kPZLT2Fmdevu69M2bkiYe1Q",
  "key26": "3chZmLVG2BFoJUbiHx64AAZcegXAypFBmjGFBWqzUpVM3cFyLp53hrqRRQBXiy1xnc4KUhNkZG4Q3MsBM26FhWZk",
  "key27": "3fRwzZqRBgETEWNRgQY3GpNjzN7ezPLcn95QinGyBreXCFLwbzq87C9qMZwDUNyKAPiXeCCkBB3y7NaDxchkXdD8",
  "key28": "24Z8g74o5jqaQYxnERye4wfxe44MEo2snFRRXky5Zo9iajnSm49Vt6wzaW5pDA76fCHoSYq5Lo12Rw8ATMm4Ruug",
  "key29": "3WYfDNoghDdPJhMy9AeiJhX3eMrPNdABDXbYuqT2W71wtGMsr8GAy5NEyBDV2NxCaWmc4DWk3fGjFCUyPnWU12Yx",
  "key30": "27zh6Tx2YuVux6NYP472PPYiTJkvCgBNtcAZu8pzvEKfGdaHUW6CgsTxfAeTL9e5RiXujeyLGaYHtUunznaBmuL7",
  "key31": "5cDwnwUjGFoKNxnzn3nMmmC1MJxqeFoYidhYhCKa4AE538aoCpZduaxb56bZiCvZEMBy8nRdrBnR2XmeC3cZpSH7",
  "key32": "5ovtMCZcyKrt2pW57TxexN4MiCeGhXANNmdzesZZWboXEeksstPaahNjLyBP5v6FNqf8ujxN6i5ji48ALnxpXbmp",
  "key33": "5N51zk9nn7heRFcF5hMn824ZfGbediBGK34HHyK3dZqWTddEQ4346skdcUFPszpWrVrx7HSdA4cJu9vwHJfsXPnM",
  "key34": "8NuvxyvcdQWtMiZX1TaqwTpxwwaT1QaFgmyX9hbRqphJuzs31tr4DRcFPjQEBfh23n18snoFfjYAwcPNHGerxgF",
  "key35": "2auQE6npKJ8VK9jTQsGHtQSuaDMqAcrPoA2Cq9YoHFE4zH9NjjLqwuqkEf1UK1ZjAp7LjMPEaZuye6GrUQ7DdNBX",
  "key36": "2KLCqYFpq4tGnzGBwKFe4cLPUDf5FvrG4PLa7ge8LWqmffB383yUe7ge6vsKigVwZx5KcFNEkVD8LyTyYh9xUEfi",
  "key37": "3Y95uweub8wSVtFr6LeHaupEBhVRJhtg1Le4LdBsW5N3uPYEcTXedu94c1ZA9ni4UF9NAgizA7gSjQuJbEwhaFjQ",
  "key38": "5maAhtZoXNyoZG3cx5WQUaduEh4qGDX7ynsbnvTVVi8fPsvz52oP9RoA35FSgmTaZyA5fW4GPJqtjuj21w2Qcd9E",
  "key39": "2h3xNV4dQmiwwdWGUACDLLixD7NCmx2vAugb3FDvuAYJA7egvH7ZxBi45uBRQygYQhRi3KcpqiEuG46snEo7q7hJ",
  "key40": "47onsEX21pjarfEUumkzVFqLSgE7jW1AQLzN5vjDs1PFWsYUov5Jp1ehY1vjbE5DuDoW6JYYKXcWW3MPRDgJfCSw",
  "key41": "5LTzydSr44VggNHYdHTNmzVgqXhbnKtLMyxBohisbCvgxg1WbQeXN65VN5BREALRqGr8XEUWmafDGKCwy61pMX41",
  "key42": "ZM9h3NsFsz9vKAPJ2FFX4vwRUWMhcmaekptGDeJJP1fSjaWjJ43WoZ37j8jwREtcosAkGG4V6XiNemHKDmfWduU"
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
