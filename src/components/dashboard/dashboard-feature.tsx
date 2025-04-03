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
    "2mWdS3BVV9kBR7uAbWzZFL2J1u8TezPi6uktzzjPgscX3NKxAkkp575mvZE2xjUuQkMcFTBCqNdhuvUQVuujuw69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZA4TaKAQR7Q29bPV3y8LuUc6Y8kDNQqZqE6SASht4Www7p9X1rx5f33ALhmzPCN5oAbfwL7z8uCgGNyV2ARtwK6",
  "key1": "wPm4HJ8D3m8JBufP1vxfu8NdHVsUZ37nGjGgs2p3ijYMrZiCANs2SRnTASpXPH1KTE9njDsxboMfDJJ1ntvSttD",
  "key2": "4e4Zme5zGTD56sB8jmhJFJBTk8cCjtfu3ajkXq9Vc7JCgmGnxTVxpmoTEUKhJrqhyUhVvsEweeu19kmi7gZzETxd",
  "key3": "5JVtzzXCie7Z5xwNc1g7JtjyxzcDSxh1dQTSztNduBQv21v6u24F9c3nekUNLMVyt9n7dWEv2cFZVGmWaDGRCEMX",
  "key4": "4gw9K1M4Zc6tTkHnyNb9UM6mGcgQerqvPAGxSjemAJWewaAVu7wZtug1RkqZrR9QKLLrFKvypuZsdWEZ2dc6WshT",
  "key5": "3q8vyLQtbyZEnP7dm8Cvfx786Evu76QTQctLUJnzZsfzCw6KgC4eKrNnYEArq7Cku3sko69AanNpUvwWpLqSUPAE",
  "key6": "2F4BcZLmJw5t76AWnf1t5X3xRdqTrDkFujotiTMgGVkfAMDf4YqcCobKfhfucvzLz6bRWbdNWsCBwdLCQa2Exus5",
  "key7": "3E8EWGjku24YbzV6YNWYHip2tRYxSzD2qX64RAMh4CjfuuoMebZ447dq7mrq7swUq2qfxxuUfdAyUGz1eHe7gHGo",
  "key8": "4mgYeGEZpL7ryhmApLuMKyqcyaG4vEJxfJjUeMDtDShh5EQ83cSHdctpo9BZM6SgU1sHKvTqpBZ6Aub1EL1P7nfo",
  "key9": "65bhA5Q85C9KfPzRLTizxJPoRWedemEp5HC7a4oZkKZobVbXRyd6dbF4YgANDCE9dXDH1kZkyzPR11mdDD1Ly2PM",
  "key10": "4esgy8axHsrmXryHjyVpthy93dAzCbUkJ8ZpDj5DJ1gjXzcPjqqGNZCC6t3Z8XURsb6fF1hZmPqsWXVdznn94bk5",
  "key11": "4mnv78fmiPq9zvQzpdBBBduXNBNh9cr433Se2JcFKoDNKiE98xbZfb6q3J1phx1W5cERdmvUeFbcUAWGBGeYiNhY",
  "key12": "rB25u3w2qmaytCtX7vCiW3eNcC5W6Pvi7NxAYuCDj5yXHs9nvzeg9nNp9uSWmMKUmg66TkMSwjpidvDVi1Wa2km",
  "key13": "3ELSnaEYDDBC2BfWCfPis5rGfKKux74B3kHEnyrVQrntbRXM6uz5omxjkJbZBwqAjbmp22Yu2fBXUwH7YbxVmy4y",
  "key14": "tR4H7QjzhEiFrohaVrypQU9K5uzsPTmJvNCiAB4tEdrZWemKo3VotcDRtKGQySNfrvG8S7z9AGG3F2vKpJSStxS",
  "key15": "6NPgYWrwKsb8GVGu7GSByyNkEsibtAB9mniC4UoYDvRB1fyZ1MexeRH68oQNMjz8vAyfn4e17BsCycFRpUTKxRh",
  "key16": "3w6Vp4LnfNVi1Fcd8LVKAJJ2ts5Lkx3k4xhgeJ8X3T1Zu1Re2MF1gwpZz7J4ggpqJHsLHaKbjCcKYhTnEwWUG3h6",
  "key17": "2dcxyS5sUMCc8ATxa45TFBrfryZz2ajbfh2DCpXZnaY9vKfDxfVuKZYTzn2XMNpyWEKA7uLGsypc7BxSPC5bRgZa",
  "key18": "3JwN3w8v65KHcnY7WcENzh71pTGpFtCpFsk9frbMZ2puiFA3UNY381iphB7Q1iJWSn9RF7MiH4GGCmoCxixLArvV",
  "key19": "63tuNyG5xbcCmCr7BTRKa2BKtAGD4w1DVSMFZUz8kPdmmwz2KDtcZy5YVD2SknYQcrnXqaHFmBM79DamQPkAzGTQ",
  "key20": "vQ2ogyHUEDkdNf39Vs5tXrxsW8bboTgpmtPxvt31XtLsVdMyXeHbLcEoTENbWESPibkHZwRhuEFJa57M5kWwKnq",
  "key21": "21FdDxXmuCXgGEHmqH7nEQ5LM4DBYJQMAKjc2nqHQFGCqjhoaPrPYtoGX17e7TmL4dJuobYTTufikp9pa2Ui8eog",
  "key22": "51ixQ4XoDELRRzHGtkQPba6zD5JnJogxjuRUqgJbs821zmVEEaF3nU1zS5GqTNXDTjW3eTL6o9YNz2Q3pZ42Y78b",
  "key23": "5o7hGdyJrLJvCs5Z1GKa3M3eK7PhKzN2DpagMUioSfxqXuGbUgh5Fgzg2Pn2sr7dLKX3dhjXoRFC9qA2NgvT6cJC",
  "key24": "5DCAxmk9smaLYHXidTCepPjDnpsEenRVZWXW4CifjtjKcmNKr8x1PpyD4wZwedhzLyxsSwpfWnCEXg8yUMZQPEYf",
  "key25": "2qtzhsorJhiiq387caeEmw5FztX9TKBtXiNRLu26aFBjKYizXMjbkTCYwszvrUHF5zvDRwAv5tZQk5htPojwneBQ",
  "key26": "LZ32EbZPopihT3HXP4bFmJLdpu7XneHxtDCLxsi5ayC6kUPSyRGUAbZpacfCWit1tTPgnkq5QptW8J9T3fhbVXe",
  "key27": "42vjymugpJHW45SEyroiXyMF6oDv8DpGg5GJJvAaP3qj9ghwB48CEFryvnMdPHtWNz9ZtCdedZ4h8u8nGxK6eNte"
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
