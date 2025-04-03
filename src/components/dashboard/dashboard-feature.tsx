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
    "43Zvagrjf4QRJJvezwTuRBBTm2aX5SwBkR7M3mViTzYG4ZFikGDQK368jV9dYMExCe8eQcq3NBArWM27agWEeWjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZWq25yyeeJBxApcdUHw6P72ySjRNbb517EBgMAfNgzM2MKCeFzM72a3hzfsfeBWT6Q3ENRYwagaX5tb9FRe7Tx",
  "key1": "3DfjqPp1ed8tpQAQEfNkcVcYdmryhN9cF4amyxZ731bZNVz6dyxNcCRVF5FQp8FWSzDyeFXGNsXgYnz9HwhPUoim",
  "key2": "3RcUASKnizijawTzManYPhnXXb5LmPDLNtc6SczwcMV15TLk4PPmCjWq2Y9xha8MfYPwvskRuPJPT7BA83DSB7qv",
  "key3": "2ztPSXUN4fN71KZ7fHMu6WcwLNvk6HcJhMN7HfMfZqmY79grEcKaY9dSNZRhE7WWhrbp17uT9MWFW6DjaCASVawB",
  "key4": "56jaqKqSuSj8jqgy5si3XNL2PUmes6pH5xbWPbXBwEpPni2siUjsuDBBafN9pgv4AkKd4oKtoE7ksGWVgwD2TXNH",
  "key5": "1jePKgyLFcExyjR1NUNeKUsX4DeAQQ92kyhV9B75fGJJcHgeosnCsCKt2STKJahhgi4oVMxx7bkKGx3tc1nhN9n",
  "key6": "z4H3kKR4iRtmFL51FjUKfrvX9MtNzvS823vtKtwYZRinaf6NajsZ1N29PniJPwZHjg2UdHdi3QC7rA5E9r7GsvP",
  "key7": "5tGpseT9PTj74mGShih2LktM3WKhwU3nQWYSFamopnubdn7cZwtZDWop9B1j6bmGEpFkDjgEQdYQNVa2ea7BXU3z",
  "key8": "47iRyRjt7P4ZCjGaG7EBDveuVqygLiVjMCaRHUGuEqjUPGCBfFN9upXRizxRmZWzmqsCs48Lr4SfWLyc71uWzdRA",
  "key9": "2MjzEUdWfKiR4E9umEceB2cGykFwtmPEdYuRMVzFWuE8Li1UuaDzo4eHUEJJ6sKhwjBqoXGBxLCxw7c8MxH7S7M2",
  "key10": "3uFYBvYLFQK4jLnfrmx35uBPSRXVRhKv2U4wLzdvfNaTALWwxTwbd8itQebyoyvTVX17wHTt9fP24KQqZwGXnpr6",
  "key11": "5xGsY8mmmY3TphB5gCBa3XkCR48R13LYNzxdgYNV82sh2ArKX7PyFnEyvVzFkaz9RVuKXDeRfSBsEBTvxxARqw6",
  "key12": "4jaNKzrqxbJGytJ5dL1XRMUbms5JP36jeTgYmYW4Yaqib4EzKJ44yXXCH7DAYo9Fa4nDErUcrXJHUNvB68VuLjBV",
  "key13": "MM9g9VRfaGwRMsfctrxbX1uNzwgfyJo96xdPz5Rkcs2dQxEbvq1p6puZXKq8PUkVyVdZxSjAm65YrybYtLNCA96",
  "key14": "822wrcMnQfKMT8nNTJ3uvnpyvZM2EGTqEKFvVJ4fZgWP9owrGQECsMp69Kv7S5eF3ykKnViKp6v5EqiTVBXKzxX",
  "key15": "63hSYGbhmCRaEVmL1uVtusX8wM6NXoSfQbq3e3YNHqaDoVYKYHpyDoJEC6RhGGovnxSTND9EGVL6KJ8se9b1N9KE",
  "key16": "5RJnYrEVqQfHzpcaxMFqqnhbZbzpuwiBintKtZkemAsCEbhrZCHKHZAKyEu512VUaZXbpfcWydbTQHi1aCZmbvmD",
  "key17": "2rty1ghXnSgoSHWKN2WdgrK6Hbwto4iGFzD7o1TJs2yts8D1h48WeRovMX1gYRiWodm3HtiDQw9LfMY7Zwx2JKn",
  "key18": "5mhwZZLwowNZvR9PPWoQLHJa7NiiZUeC3gJtbucNNLc3CqHTA9x79Utv8z4SKXSRKesHcqDdbJyxdsWUdfnzN2n",
  "key19": "4oW56WMTx5hHzHYuFM46kXwpqnFKXRsuhN79vrSptJgmp2KT7KXKBMMDeDUbUuxAH5pT7KNUiyn7tXBe9U7yB5zz",
  "key20": "4G4Pa3J3LMAvRHpkyh5fUWHUyCyzAaMxHqBdkYpUznPbPbAFndyQF2fELZwsjSc7mJ3BLi7Tou6weGKjZJ1dwbQK",
  "key21": "24H1FX2nZJoeWpcPpeM5cWUHYPVHmWVS1mr88e7mdXKECD4RbrGNKEQ3MbKbXMPm4nQcvRmSLXmbbRsbNzYYCFzP",
  "key22": "3YRgtMpjLkuouvRQjMVhxpAVmJDp1TySVyw11EniGZ9c4N5dg6yTqwFhfGLQgHCG5QZHU8a4C8NB3AVxuFfkaXTP",
  "key23": "GWNiKdd9HLSMD2Z2otn6XQY6APQrZnKmuNXPqtLRadHtSAe3bw4kgNQsr1aCCUAxb3DTtQk8AU6mW9qaPePAcrS",
  "key24": "37GhCALeuLGkkmuoKwkAZodEJ831cKca39La9SeSVqngRgg2JqWKn4jdwnXxetZU1K7NshgkJehEA1AGf13nXxdP",
  "key25": "668PUZ2qHjxa9J4pKvgPp1PpYq9XipvNr5RMFg5Zb1TNpCwiGYng75zs6shQEBsFeT7cUFi12He3LQNXm8Hh9Sa4",
  "key26": "4WkM2uDHrpRr86tsErX3SRt99NXvnZx9NqmVmN5GCddTWvBvXgNKqT7tuLdRKMeA473DinBG3ZErEXFvWgm1MNZp",
  "key27": "64pSuZeNZV2g5rmN876xz9V6hPrA8JHi9FtHAH3UTMFDty8NNHneoRLXLNKHPxhDngXx1E2d19zeYbLhf51UtWCS",
  "key28": "QPvAiXqmtVBoBhY4KPiCu7iybWmbNK9SE41tAohHk4qM1Lvi6MZG4nCvABLVQMKmm4i83FGJ8Btxzg2N8M3mpG9",
  "key29": "3AeBdZpEYnLcMHmqTDUSLMjiZ9BNLsMt4pymNNkkufsyxanCnKDmyfjC47ZT1cJvBXgXeKdwDamB3eXsf5T1HgDa",
  "key30": "4mshH5MSjaVFUtfSJtcmzvTbG8PmhwB1AAB3Ak9z9Xe62ar4jh3nsybfeThK7DMUU1mqDJDFEme6PK8gyAafN55N"
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
