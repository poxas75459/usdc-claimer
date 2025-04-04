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
    "4QLro5VgwpJPCUXfYbtbaeX4TCBRVhRFTM1JUfQXAV1nVo2NztYngbg3YDUCmHSUkJ9PWqCsNKSRjCjgJXS5ARxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zktzXdMzkPWLtmj9wsFUkKH4XrV2RDUJtepBrh9vZyAuk61e3BDuLTrX6Y4xDBPFNmR73GKiSPci4PEjgcgJB1U",
  "key1": "66W5ovwDvo1CSpq78EM6WAqhojuKrwLybKBzVqMZwV4Zs1dTLU5RkNbJ9wYkdgs5GTu4hshyy6FZRVpeuHFLBsby",
  "key2": "4W1eg8Ap7bBxaborN29SjSgXdAcqjhQUGHNpQBHHiVPY2vE3tRxyYBjcFTQ45BG1VHqBU4qHxtNJoELj7at4KCZJ",
  "key3": "3K4fP1Sf62eEP3RdKA69Ew5SXi4ghHTksd8WNqREAhRfuQMrA7mJr73VEgq3UzUJnByZLXVHXPBfF4sEQmu5KXd8",
  "key4": "4TjKp97kijtv9TCvUJcLhFyKrQ2YJJnsXdC31awFxbMDV1vj4XhsE7cP5w6QYB8VwaE9NvAa6PdGftJnzRwnyToN",
  "key5": "4HDFghsjP6fFLTkP8T6FsfQ1LLFt6w7Kw9t8W91igv5LtutXfU3ayi7mTXDnnUq2jLL3eLh1koaCVhD924Yrr8BY",
  "key6": "4SRmdiZnWLyRxAeNKGMjDqurvkbMKvEzjmQ16ZQrarvgDMwe1cJisWPi4uXkfFSrzM8UicSgRa4p1hnABcCpxJ4e",
  "key7": "5nS85cm4xYdg1fkoYaHvrN1ocPoVhBp15MJS3yh71S19mQpYLWusW3k4zdqfUHdv7AHQjMLsVA2dNqF1tSNZaZbt",
  "key8": "mkvEy2EwkeqZspMdnsXwMmR39EbG8qdJSWuA7aak8R2JEW8tmcYD8XWrUL1QQXNp3WJdbiUP9A9afraBcFMSbsi",
  "key9": "5btQKci7PmJohVQdj5Pco4oGHCZEJnHzYXdxPsMcT1pkRskusucT3cn27npXNjJ3sBhRZHkssJnkuo7khF6mJ74Q",
  "key10": "5HqbpMWY6o4tStuSPGWEUGKKvM1NvsB17Lk2L5w6ApsNCgd7ucWWCQm2kd2YNQXjYQfe1dF6VvRspKhEPUrw6ktD",
  "key11": "45KdkxMBskL4CsJTh4zuFWGzYPsEQw3ehtXiEKiHzHKo7QxuWymVHb4sLofeMQnEByFJtVHwL1P6PfwnGzxyezfs",
  "key12": "iH8n7mbKaCmPEgfqR8XoZ7X5y3vQ2BP8fTKVrP9ZtVM4QjbfhJq5zi1GWEBY4DzPsgbTX1VFfoYE8GeLfGxiZwo",
  "key13": "4D1FgdfMP515pEU4KyS8UTjcfYD4kDk3gskQsczCaQZsrzeYcVG7btzCmJt7LheEgHUfdMCSzZwU4fgQobfdrC9u",
  "key14": "3GPyWzDAMX7xhS8K1xU9zv69qFok2F6cg4uyFMDxsEpBJ9AUSoEEsQLEyUjYZk72eNeAxdo9NyUELra6Kv5V1zce",
  "key15": "3321x86DpoNP5Fd4CAdk8XXSYVqTHJsCVqbwFwjDn7MiuPP5JPDdZc5biLhFNxnA7Mb4iQ1vmZhhNWvtfCGWvboK",
  "key16": "4Q6vkGJxCSYs4tV6ux9n31YfHZdEEeUKpKiN2rD2a4UJVHBUXf1SVQAd7pMMfXyxgiigVPoP1mWkHvh8i9fr1UG6",
  "key17": "Ns2fuzsYqw2u6wTTy9ZbNBSifkZSCd5JpPKjg2oZDNSwRQGdzkmwGr5AXoFsZdb7rxj7vGVfW9vtJS54iz7eb1n",
  "key18": "2LdSp4HNpp6aPDVUGVHPhxqc7qUhqoszA7wgVvQeF9AdytnaaKEcRP99u7e9YVTKXrJ5C4PeRPNeMT4DZpxcQabQ",
  "key19": "VQFy8FnPfbGUqBoiDrs31ngTNyFiGMsY9cyXoF6GMDt4H9WWGHycgejxVPnSE31PUohwSp5RAK6eUgpCrCFFwQH",
  "key20": "4eHbUYcui3zUq77X1pNyrxogAEP4YXMnkaE2sW38c2fPndpenqYpJz9ojhVkqQoZPLsf1VUZxEn7XRj8MRG8T1uk",
  "key21": "4obip1uoFsbCsHk2xNrXFTB6artzguy3XhLawhpJfU7VQVgvrty2xXrBQxsnBnpFZr8vYFVXisLytu8pfP4Yr6LX",
  "key22": "vqsfbMx6Y71yutG7ApXjAXDNmwv63W9wVjQCxUNxVb5NkbLy5j13RXBDswBQsdTRCoVjxP35f1J6DxP9i6jaTvh",
  "key23": "2bbtgxqcfyq3JXsxCRi5JEqFUbB22CkJGYqWZesiVfULEnHvbQ2KEKPRsx7T6cYqu8FVWNWuC1NgnzjmetnywRyG",
  "key24": "5UHStKAiVM343MQftuC3tbZboUfWjdUA186h4TP2ZXQcMPVkw6iGPLJFh9E96Vi8moKhFjHxGtLsDbACYhm4usMP"
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
