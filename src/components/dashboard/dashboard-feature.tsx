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
    "2ekrRGBw45NqbAGfQ8X5EUxWtbsavVYgG2rjVbWmEgJXbaZkXWquBdoBLUfqQQkrStFaSjaYQZErpQ2hNxdsjBAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFsx47pbF69uwYPcugv9vcGUTLHEyQnZN6iEanjXGQHhQCUc5MCanwWNmTkXYFXWUMewh71svfmAvqZW2MZRzhS",
  "key1": "4eg2bRLsLQqo6uq5iBnakNq7ovj8gdhvwLJ7WHhwZyDTkx13TZkhVYcwwaE7w4w9nDTNDcXz2EQYg6QpJ8hTgyCx",
  "key2": "3ZM2BqTVFzfsPjLDDcGFWNFiidybtvYG8i8cH5QxDYtaMPSBTu6sBtqc4eqW3wnT83vtbj2FRxXGwZ5jmZmtf3fe",
  "key3": "5D2MXmCpfeE4WK2CerfQxjrJXEE4NeuMHTR7ko2Ktz3HeqsmV1kBR1Ui7EhW9YMyU9u592oBKFMcZe7y2qmotn1Q",
  "key4": "2ycpLgAKSG5coAZKPyNomMPvK3eVb441FCy4NQDe9an8RicRbGEwETgdninbBzECwYNgt6ftXvBcCa5VVsKVXHR3",
  "key5": "wnsJyDF9Gpiz4JzudtRnQAEKyAWSg8BWjBCJJtfiWZF2ihozcH3vApnccEzhXuq7379k9qqpq9K8LuaxMt9vhxS",
  "key6": "4XYUAY7YQa2n95Vn8mGim3yuxsePVPqqLH1HLeauBzCjXJtUq3MamzhJxaX2iBn1cXLNrCf6YfzfMqP1A5oKtEcU",
  "key7": "2UxTnteFsEWkSNY7KtVLbeiRoP1XrXPUuMvrP9LLvWpg7ejtigaNDB4zmMdbWf7oEsSu9ZiAcsqLg3VjeBLhZN68",
  "key8": "bKgSU77vmTZHc14taTSMnedNhxqA7JPYABiu7BZvLBhRaW8DABp8md14DfDUDTZAaghAy6M8ge6yYmrgLuwdrzD",
  "key9": "pFkyPYGN3NQSztgwhSVPP71ho8rpCjWyj4im5rszB1hitHbGwaS7m4quCK26USnVm9wPSzKRLkGfLWtoaZ1LJQp",
  "key10": "4MsyBDHPFgdpENpkkKhLArJDEiJyxFrSqaYLkShV1kRmanCbUHJSm6Ao2oEgG6ne34fyccypLzDKsW3Vc3ztUJPz",
  "key11": "2mjQRzoi613KHo9wcZrhv5e4f1pqCtgUUSdXKpUdQrkA41iB4ZFTfWnR6qkHvVvPwPZtavUFF27gWaDLHEcjzwTg",
  "key12": "4f54DV3C9PU41QgacVJnz2fykRNveDrKs2QHQftvaf8EQt1AmRw8M9vNZ7W8v6ymN9D1ws9hYh6pKs5e1d6EJUxj",
  "key13": "3VcLgtWiW2FUD7Rg8CFDuko8QMGo31HHaDkRNqJLxAM7FL8AbdzgSWwA2z2sAKGejQsRgYZheqJJGkzxtTGrMwp4",
  "key14": "4ehEnQfNt4DNvD7muC54XXBp2gXFYyhASe5KPboPdqs4X7rmxGvfHcJdMqdRpeRdpuYXB6LxsdqcHZyNknKbecW",
  "key15": "5NGYn9SsgUQB3qb2oN7c633Hi9R8963d9T49DDMKccwUaZcLn9LvTb9ynYSJV9nZzUC5hPGsPpmgSH4HinLw5Bb5",
  "key16": "4UL5SiGtvxsyRYUz9UNAtcLcXq5C83jkTy4YW1gCoDK556Hw7Jg6dWD6TMrQwMRgLofcYZ8aj2YErg1cKUY3dzos",
  "key17": "5wfsiNZYqQbEbenboRCGRgWBtac2dbt7T4M8VSY96r5V7DkTsdV9bBLjEsRJSembfStfb6xeNXXM5BoxUk8GSYVz",
  "key18": "4iigD8LHW5ECE4aUxoqjFpJ94hBxbGtgB7G6GcyaZP5nGruvJSncunCJ7myQAoTtoTeLNNmSeFitJDhvmfpmAT4Q",
  "key19": "5BUru1EyoWCZLcWHXPAijdUABox7MGa7vKxc9DXeBG4GsiTVnpieMpndCNQD1K8n2h4b1Sgwmc2hfu6pZbY3CfeB",
  "key20": "2cctpkLA8AvfTkAsTUkcPGJkemhTJ8vwr13P9weEER2PEJGBPD6WQae5pzSDnN3ngbGbCeUf4WFgUgq14uym3Ayo",
  "key21": "5i4U6F8ZiFg6y8pfRsp6VYM9ShxAvdXAce4EJD2TXJf6mUHuXA4EZZpR5QNFfRJnXExXbgMH41wE8rbWu5APM7yJ",
  "key22": "345dWah7BfQd45DLNKXM88hW5nqZ6yCTEevjJndmQprbFTHNfbR39a5w9ghK8Soeg1oBtsN8vqXauSzqaaepnknM",
  "key23": "5jJAehvJqQ9U3KspMQcEMnWr433CgM34v1UzGXRH7kSmRjdRcpXkpWYZBToJGazzwRZfqZ7eHtFB3B2Za4U7nq5M",
  "key24": "24xDXP31seoEo5YGCRjLFLfWFgcvd5k43fumPdPbppd7uVvqBrpAWTMnQmhFfdhhQdVeB4iZnYiuw6b6C1sA7fiu",
  "key25": "AZzkAskT9VWpqzmchbyy2vEZTDiPE9HyAopGb58pL9SeAdRMpkigDW1P65HFaxf67MmtnTHuhLnizwbmoHdFqMv",
  "key26": "2EHApHzxVyTt9MKwa2SsPdbitjjjLSs6Rr8T4MqiBmAUbxET1XpHToiYKgC7sS5GwyzYRhi1pYhwQUrYJzXhgfCN",
  "key27": "5wxUTsfvpDVAQHaXXLYqkCzQ1JSPPEMng327hSBufW3ydGnUYRX4ZHsh63z1AGGHJNqibfTSZms2JgGx7sVRbEk9",
  "key28": "4MAPQo3M8435fUHFadh2wTYWWxYskxtyPoGqMnm9dxqgTUxC6SEkvbMdGjc3S9zvPQTvJxCrz2rpxvFRdSq7Av7o",
  "key29": "4GJpju8R3sF8N4sRv6qaroJh2h7XW3qyMJtwP2ECCgf8uSRAomwjd4RpRx9H72BibMMSTzgtQLCBdaa8mwvHxsqV"
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
