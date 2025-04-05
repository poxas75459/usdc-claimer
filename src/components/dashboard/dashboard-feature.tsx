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
    "5zhLE3AAVBAko6AXa3qdJ7F2SrdWWfTSFNRNRTYRa4MV2iR41TPLHn89dPJ6FEjopLvx3ecaQPpHmYNENNfTQdD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTiAd7yfCnoH8ncFgsfDaZbpCVYT2nA41y9yhwUZKYXcimFtE6fgVMCaL9W8QkyAnuDFVJiScPwiHjAy2wMmnWB",
  "key1": "2iFYCKoz2x5geVv1f7LtCGNTSAbwGUjdmX3EhgFoRNPLotBHYUnxfqXa7aV8uPUY8PqEs5fX2ZF4dnHHkkvK8Hmx",
  "key2": "5Zj74PsY63rKHnjBskbsr5n9xfq32JcnnmNgUY51WwVKzmg1vVMqXcZH5FpJVMXmFJZwxgwpJtEtq9oNZGEMB1H3",
  "key3": "23aH9QcdK52dyV3HUnGtp75WkJkSW65sTtPWSh544BcCN4H9opDAKW6UoyiLroehhHdgLG73QVPDrCz4sug53H8N",
  "key4": "5q3PL3MAwc29bSaiGK4KZ5SjeDNGq3SCiDUFkyBq945NSDBdEA1g15HTG8ZyvERntucPTamhNX12oqzk5Gazpbwj",
  "key5": "4st37gq7oLi3DujTxBXNdBQW7akUELCrWxbhX9BpAitLcvf5AchNtKp1fSm42W7S4V8yMSsK89XxoPtenAwKPpaV",
  "key6": "egzETZZ6YeTfYCg6SiVWmvweymfUoXcCdBuMtHUcKxrkaVo2AaQHjNq71DNELgvqXPwd2WbtAtkjVS3MEpf3n1r",
  "key7": "Q8ozZqAoY5TUp8AZ7MgktYuVo14974QjqKyfqKDvifMVoNX9jeGiqda1hcxMWNoRhU6jPwFi8ne1ASj72MGi5YC",
  "key8": "3onH7KkgPWmQh1YEY79SozpeToVYjTrnZ2Ktw2Rcbat3kXoZezz9Dpa1NCVNxGTYZ5YZmHcCLbFs3hzo3f5GSvDM",
  "key9": "52Tyn1PYzesFM72hUkmWZG2VtcejYaJFzXRtrPGPrxErLsTNtnfyaf8hXLHk9PDcFnwjfhSccLQLu9dMb5kT6jEh",
  "key10": "5a51rMk4xYxLxx2Xc4CCDRLkn6TxbWvBANXisDTBm94sLtt37dxjmKeTgRvYZ6W1GC7zQLinbZnzYVkMgSqPTZQ7",
  "key11": "hGFMuGtVumouBHcNoHHLcF36tpBojafcfEUo8XUjTDmZYmt8H2jFt9QTgPCXMV9HmUpd32ZDR7uGpsyvymKu4Vy",
  "key12": "2Ua6hV4aj4AnKo1SSskPd21Sb4E4g3Gd4LHFe3Jmmkt8vSL5Vfw78VGPHkp1q7nuTDkcrKi3qj4RBuWKhD9eqA9q",
  "key13": "2emURp7ToCdFvuBxrtta5F9chnFkFsKCVeKLSH4v3Nuub9CPqKkYWcfJEFtU9cqs7jqRUb9ccGWdzGhjd7nnweJt",
  "key14": "3CnMHqBtVdqxZRuhSz5HYNTtifrhbuedzqWRezpr7iDhJvz1gk8f7cyPmyFe6cYqqJ15oVfBfCYSoV32ubr5kR51",
  "key15": "wAJLHJieosjubwEpmk9KkvxeGXfWkUSE1rWrcq4ZN6KtGFJab6YEQYnKNvjw4t7t5qftG6CTzBhn4QjB1JteSEo",
  "key16": "5m8XUYbXrw3H864ohupguY411SCcnvy2NCBfqv1chUq9oYrsPbCFXu6TYcHSYdyawYmVGTXpKvaT9BnbsvDDjeMo",
  "key17": "5rqmmfaWkCYZZzbSE69YZsuUgz2yZdagqUUCPGFwHJcywwizyAShNnjhKDbVSNGV219QsX6fbqoHoBH284hpqBna",
  "key18": "2F1UHXviYrVjBCm7cPFWe5bcnCFiAjfUdyjDarGzvr8JAexG5DuTu7XmZZFTL6JmQGWdpQpktwGH5Y4KJqFb3s6q",
  "key19": "5pV8spwbStxeZAoenyyv8xZkV1vsGMtkdK3KEERHqeUyyfwLmhDBAhpsnWuW1mmu6ozLUN4ZtLSz9YbTTpVwMtqj",
  "key20": "TcuJbMNHsRWeFRtquUz3uC8j83TP9QnNedkc836xTPzR7tQ4tUQ48pFzaw6k9gnqh32ioeSU8tj9eW91fzYHff9",
  "key21": "5jE6qMFuEUY9tbvuLxvbKwYYvMwNyoDVbS4gsF3Ntzkwy65WwVSXkHQ6oMB2KypvNrkDRvgB5sdb3DdBDX6Hbh2a",
  "key22": "4f56ezovS6rMuBm8mNHr7e7aHQZNsG3qDWV3eW2ppiwW7oFy9ZjkyHZK7D3KoiJH3vkJpkNd1fnSqmxeVxTtYzbS",
  "key23": "3mFd9JAinKbKJKocgep3FqZi8aSAnJjeMrNUyJVdvmR7WAroH4GPKF6Bfv2GJqx3qWcPQAvLTL8iZNqCDLo1nP7v",
  "key24": "2WBzegkdaUBiXiF2ryAZ1m55oCRbHyCyuzPPUS9PBg6cgh1mAxwUipxs66Hgi9pZbFwxEesoN2Vhhc5zyAD3ME6m",
  "key25": "5JbDkNStbGZJKJXLTSZTTJpGScAyWuLBxyS8YgFhNJqExn3Ue6B64gTu7rWabhG1LmF1FtYrDHz1ns6tUAcDtuiF",
  "key26": "43MjTbwK5te1UiNhvEwgAw8m7cs5GRS4UHPujScTK4ryaBSQfYAxEMzS81UcQ8poWEjyGNb8mzZ9VsWK6PJPTEmG",
  "key27": "2777dt6ZpA7Fg17uYPGQRSQgQXYmsHRnvWwp6fSphHFCdcVKqwKPytCmEFAa3VhbgBfQdvPLE37xDKobtE6Wvov4",
  "key28": "5jpAD8aYUhopvvNVWwBY3wB2qF5ChkJC4Hnyfkpa6H5vBvpmCzCHeRzQ5o6rRzHFPyADg4Azgbak3hEo35af8Jpk",
  "key29": "3MHRuxUhuc4iVpYf4DhHmMP68NjDT66PzASgm6pW5Rau3oW5Fye5AeSat6a3MQsPVCV8tZaoxEiDXZ2ihg4AHXHH",
  "key30": "4729xisQQmWPZLGWtyJSi5Xwh2WqxDqFjzVcWrsSGi8kR7VEToP7nKN4dGLqHgQtLozpQTbhdmjVYfo9efq8tAbd",
  "key31": "36RrjHnkquoSYdpRSjXJjr8uMz6Qtu6TojgAAxEduLMyigMq7NKZNsZXvQWCYqTn8fCVRMHJcCzchVtQEWzLV3Ye",
  "key32": "5hDmBSADFB9uQv625JyxeqzUsff4y5Z9vAy9D6YMd44GvWo3H4i6squnvmCEJe9dkk2biXbjHXqzqDY8mEucXYVk",
  "key33": "4d2VPUs7uJMkG37AvDuEAkTwNgTbbrz1hnEieba523YT2CexGzUArJxqPWY8Mn8xQuZcCMfUZBNXHfC6tE1FZtww",
  "key34": "5dBKPNii9YbHmzZaRqoBJfMy5fdzjVXqQ59cZv6edZxAsnkgLHhmTm1DGNvSDP1ANqQwd1mTcFWkkSJU6Lwqi1xC",
  "key35": "65Cisi6ZkobupayCGn1tKvJrD6RDqzRKK1MP78CMtmC657nqagMbRYfhC7zfQzMH3pQMCmwLA4tysyCwTQvrig5b",
  "key36": "7Emsd99atdAPGEHcKzcLSr6a3PKKHQnTJRA5QTS4aZgWoHQp2YPYgHDkjE9W1m266KJYEwNJ2ywTaqWyvjUTg63",
  "key37": "4kUyQ9rb47aWbdFbzjRdVZ6ZzYpxefjD9Ubt2VUGSV1uhd5Xe5rHk3vmmhzRabJU9RZpKe3JVSJgzRiTUYPNegxU",
  "key38": "K6xUBJi3rgr8U9gtjwP8oh32jfNsgpgV8pGubrSWX52WJBu6pGcndDjPXNuWWXYC8X6YAUufogXRkZ8bpNK2L6R",
  "key39": "QWnHLh3WYytXqNqvNqtzRQLMGpXNVekaTSfnEmiLn5APh5iXFwn1kUFjtZ9TEp8b4fmFiC4nn5xfMRAsETLGMqn",
  "key40": "3xwAU1YQrhGZHawQwfeNrYjR2i3M9uB59cbGbgbRja49Rjw5hgBzqsSHyTTbcLaFpe9WXqb3hKsh8QSmeYhCdmmK",
  "key41": "3PALNu67WUP4ka5c7pBv2JM8kv97GT6kvBxRmpNpewqYumMvNuonYxQht5U53C8K5rSKAZ7pjG2yyqTsVoxMR4q8",
  "key42": "38vm3aSo9G9f8DRs1sEVy29j5MNodsBr4HzEA98uupQTpatW1ESsj5bLgZGVcYKkdENYKFwxMf8QBXYheTRUyFsx"
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
