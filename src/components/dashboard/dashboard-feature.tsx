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
    "2BfKn4Ep1rxn5wWqQ4uUMqX2A76UVFKQs4HB9FcdZC3PjANqqaWEGgAVKmTgAsTbWRT6kGQKbJu2AcK8hfcj2ZGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DADcaUChy4WhExDrw892rjKtd29CHhEFA1oFsrsEAXkr1frerN33MsYkikdZRagrpufQpcchRZaRLjSfxDH4n3N",
  "key1": "5ta2GpuhmFV4u31bWXrraYaqTk8d8RyvHmsnFwgv8hpHqBMZNjmxPzbkEi87mnohziEUpEMnTQLESqWFrRYHtJ6R",
  "key2": "UWZzGoyk7VLUHHpZf5oPGRLUcJgLy3n5i2yvR2q47nd5UDH4YaNyAzo48JRFQ8NPnYTrWjkmDiFv5iyA73dNikJ",
  "key3": "bC5FKLQ1pKaLtjU4bbqcnGaAmXqAnJ7Thh8AH2BdxvfixAXw1bkAo5jRZ8fpLihkjhnovZK3eSxTVsjVnQoDYsF",
  "key4": "559fr2RbbFzc72JFdgT2kJsxJyrcjPs3FUpQyGD6t8DSat9Z6xt2oibpHxQR7nGZRQjuq2HERRkgWw3U48FaFXF2",
  "key5": "ev79WPpro7rYCCRUFNhnGSRCHb8UFe2X8CpydxTDk6nZptFp73CWiUXTB1Tr15TuqgD6aGtr3SVrHrdLkcjxnZM",
  "key6": "WmGkd4NECVPk9g3kQ97zt53sTneQWkMZMCRa1EumoT3dnNEg3YAuuALoaZYD9etXB6bzmJj56Efcr2Psfs1CbL4",
  "key7": "5bqGp1p8GfwhRp2QfNKMiaHe8S2Qy9buvkqxeMpxDAn3vZAB9Tad4B4paYfWm9mdUajh6wL4n8WA5mmzxN2fDxdg",
  "key8": "3U1YXXFstfA3h1jRhXC7ZLcLGsiWAPBWWU2YXvJLMfMTqChXRppY9CY7ViMs8RKYXKgUCwhLHHtJwKPUyQDNZVEB",
  "key9": "3x88CF1rHFAsY2oHYoEJom6XS7o1Mz5aVhYis4E9cG1TRzvAegU6EtA2AVac3LvykQFBHGnaC84zZs5ZJKHJVJ5F",
  "key10": "56u6VRCPZxg7isfjTaoYjB9yCctiycBpnc5DcTrNWzSi2c3uQRqtq2bGXyJiY1ji4FgjpqmnfBqC6do9AXaDjXY2",
  "key11": "2gu4jv6hZRgQG9sLZr41NZGbxu5uCbGdYSqj1a4aZJeLZXft7rDPB7M74oT8tL6HMVxQNUPV71uAFaYRrB6cA2PK",
  "key12": "hLw2KDonEQfbj6NFNsmBcSFcH3XPAytPW6gdH14GXPWvvorVA4eQH124yvt77nsKJHzFTfuKYbux4b58gj1RGfj",
  "key13": "5WUYahWRsNMnBkggEdBFzZ7wH2ximFpWMPqAWkrbGobgoFnM9Q6ZU4nSN8XV6zGkxpAdCSsbmchRPfSx949rELvr",
  "key14": "MUtBFoKJSfKUPSo7QdeB8BWiJgQKgD6GNydnX9ySr9jGdcS4fhKRrWWVNUgL71gjK9SyVQNAXzbj9bes2jQyANB",
  "key15": "2fkCvrFSmsXn6wg2ppFmG7omrNXsAPJyU9AjAJsR1tNXt3gsN4AJmrG7sxXGfhfKZsrFUHgVFr3GH2sEch9CM5Vi",
  "key16": "Nk1c3FBESgawad93bMoXSmp8QTcLgLpsqnfSfTMRPxz3aBoi8jiFPL8vto66mPm98E3fqpWkYqzn3VwQWuTYXAL",
  "key17": "2MqS1QX5oUMwiwYXUnr7QwLHF7se1AtxP2SfeUrB4o8vzS6C1jqUM2zEPmUpM3jEwEve1T2TaS9UskwZckRhyubV",
  "key18": "4ib97LEhBYLWyaHSDELse81NWkdpP5K3mQfGaxYfUFp3dHyQYEVccMYnhhCRdRdyL5vC3YabrHud3Sfd5Y7H8NcR",
  "key19": "2EnVtVvCLjxhZyT7FmEM2XzhjcCBV23byTrVQHJPQ1soZwqxV6aufjTpbN5g8bC6jqtWkUb7TNVmaAByL1RXvjqo",
  "key20": "2dcM6XKJEmTUJEZm5ojUwVcG3wmXTB62LfwvavTtEwF4wNqfSypYB1MBLc6w6x8AU69wo3paULNZNGbT7XBQ1KQ7",
  "key21": "2Cs17Rczjzw5uCG1mgFTZdzRbCRQcoxzHuGvTeJf7DfWRMtcQ4LFVEtdnaiT9HhpKfJx7E1BrJTGeR6MZFphLDPj",
  "key22": "4cCz5JYD7xBXASxJkb1bXVCsGLsKcv9Kbj9mWzmHDWuTQQoa6sjsKkkzg2Qz3NPRxErEdYUmWKWY8Bzb29djmgHX",
  "key23": "23q1KXLFP6EhcKKfi9sQtsJqEfXWdaKMMYNZKoRSkPhKhHadibCB2CzRNpyvhxnsmE8koD4jM9pFr5uTP6e7YTbB",
  "key24": "4eAtcEfbag5fPhE2NcDJcKYnHg8rDovRvit8b3s2PdjRdFrP8Wxuszn8BKnk957feuH3jE5t6R9aGUYk8VkfB7m2",
  "key25": "5GJQk46tgXwZTn3iinuvUMY9sZX3SWdaRPv9sc71Z7ickji9zP9sfqBU51wRe3hcqEEgNQrmxKCaw63qLeFn2kJ8",
  "key26": "587tcCLsz9r7Cv4SaZazb1xdqqjxdSTqYtTogRFUJxWo6YaseQbxd2XipuNajfQrFaGy9SvN6d7V6EtMZnvVYubF",
  "key27": "2XjcUwgSAUehQ8oFmqj68G3fKdnynU8L2Y4LMdWrubyeP4FjjvQCDDi4YgQkfFVjxRr1sr83LVTrVQd7m9vAXG1T",
  "key28": "LugCjVmPGULX7R9x94qznwpR5eFvGvMUK1nxLTJLhohLdKGMUrPQpsrbPnFJeiGAG9FQiWsvgGhuUWtroRAzjy7"
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
