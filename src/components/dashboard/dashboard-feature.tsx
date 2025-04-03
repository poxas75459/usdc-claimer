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
    "WwUG4yDntvmNEwW4GpRawRcycunJsQaYWdbrASE5EuYPQgocW7jTRckjkQkBF93B7UExsWxc8tkkVHp1kxuiBf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26S6HnPy43Voj8GUbVnAuSiaczraKrAAakZT8EPhP8pia5nMaBkEjDfCymcmzJjg4NRyLKVRdWSADBd7YSFjpbEb",
  "key1": "3jxfVmvetE3ypmy8pLBMYJ7kAmc5fYnZ4JGeArosBiKx7UryLDMnu63F1ZVKKRDpj875f2S51eVCki4CsZfYnJw4",
  "key2": "48JgAS7cNQ5szKCVFphZjSMsdZYzvhFfyNVjoWBA5fd46Vi6kH8Rkb1bdDzYDUgAC63GhQUrBi23ckssgqcnDD7f",
  "key3": "4adZ7cEJdGSSbcMBNhANh8CNir57C9ZB2eAbnmf6mzptyJXEBhMHF8a1v8ZBpG8LJkwE8bakqscxmWi4v8nvcvaC",
  "key4": "3TwASbZo1KCkHc7xwPDHbu8aF1gv8zGG82AW6diiU6zBDwjU31MyMxHHh7rFejfVCkXqPFbxHabtyCh1aXk4PDKD",
  "key5": "4qDbA8kfzjiPQTV4L6T8nRxuEbCUyAVj8ymVD1ADMjPyURuqLB3AWCYyqTDu4j2UUQhhb89kQ9s2ydwVVDjUHPAd",
  "key6": "L4zpuFR5uB1tnTCCgcT42XPz9JckyT3fxtxQb7pdPFnss6QxcCkMpMAYeVC6dDyELkdostz2GqXhqEXtn5iNAbK",
  "key7": "8beMrr2Bpr61XMiT8ugZC1REqXgM5aQniogsTcGb8YoSibocrq5DyMbR8zxG3WApcc8jW7Dym3JxfvorKWeKCXe",
  "key8": "2VsDjJRQ8XZo2j2GBzoJAoZAggMq4dLPKq3uqmijeWur95jLsKtv59SoTUUc7JCqq2K55B5NPM1gAxE98dcQBXuo",
  "key9": "5pbGaQku7fiSMn4kSMKDc9roXYnvE9UAmFsQZNAhUKAuLaWH3p5tApFrPhsJBmsFUrYtUSbQxiTNSEXpetNM1jh8",
  "key10": "41ndVXWi8mYWeAimwjZD1fSiden1jcFD9tFaMsVNnRhVXD7XDYquPfv3CqqymPmxLF6hp1kRsgrRhoRDN5WevmkZ",
  "key11": "4tBVkLZr6f7qhhkAaKtDuB4FXaoE9w6FU4YR4PDdh3nF2GUWpQaeUUqMpNZSKB5rWwcXmRHsN6Gk4LydxFFoCNDu",
  "key12": "41kcHncEidi86ZW5r7TwhMGnqt2sjvRY4PBhCqAkG59upiYfsoMXLFDQYqu3NqHa1qyenKskmVZHgaQQVsEKLPZF",
  "key13": "2JeS3PKmUM9HWBVL6au67CNVLeN8xe2YPTTw4kwb2C7N4s1arn5uprRcVcrEjrbELBxQfnQJnDKB1SztNj9q3rrL",
  "key14": "4JndW9kgJFubAwWjC7ac8T4nEaZb5vSpcsdjrSRCs4Wgp4K3Ak1jDJ53sDrNpzygRaKTqYa9ifk5T1fKghxmQ6HJ",
  "key15": "5rDREY2ZdJdWnJ78U7Jhcaq7Nr2rFbNnvAwsUmXx1DqZ9SwUPrVLzf2gMMAWwP31adWDK7kxLndJyZtzWaKY4NWW",
  "key16": "4J6x987j5ETmMHyxVThEBuygd548P7DqmrKUhVRHbsp3NcLWBwHv7ZxGcmJpncSzQdm6f3kgqDAQqZPui6upgNZx",
  "key17": "3mKhcmmHvigdQBqFE8Z8YCnUKQw6EndBppYvBZpvZ19VvvKA79BGT78ns63w6UQTnsC5wXSbkTwEVaKYtvg5xfup",
  "key18": "Q3qpVzakBffu7G7LjefLqvajak4wxUfkr5nZcmcRFPo8tfaL3xXdPHKZ4dq6jhdqJEGteyB6ukTYvLy9DHJ4BE4",
  "key19": "5Eb3y1tq3iLZgvU9QqQ6wzARLC7PPDA3MR2YNHLzk7WHm4vsEWTjTZUkKGGXMmWWRhxGfg7teeeXHRNs9WqXTYEt",
  "key20": "2AFvy68GMg8XBu7NyhyvJKXzoozgoAtoeUDe6Ns3cuhYjEa1PS6nuCuF8cxTfUqWFsH97gGbFSB2hGagZ53RSsEC",
  "key21": "Rzt7yyKtKxb77pqAZpi3a4A1xkUSM1H5qg63kcymo1vjEYgTwLkqUgxVzjig5EiAzzLpEiwdwbKVEvjfBejXVUH",
  "key22": "37Dk29ejCvvPvF2C55jMjJfaW4ZUL6gmP9JAbe1Sw9nQAZmWRfazoBbcJsdj6c6WpfErcEMpYoQEHxqaDtWVHtUU",
  "key23": "2FEbLWjkfqWbP2UKtAdLPRQtjgT8y4p4sVFjwHs8S3b8YCVVenQSwZ3RXtwGuxnrFQB2fPffqMCHWqFNFDoKsf2f",
  "key24": "2XSX7VC61dAitGDjJ6Y5mLRBR57yKwMLfdDSy6zeAvvZvbhHNqDRxexJE371y8nJ41e6guSsNaT4TgN8pp3Kb5Zx",
  "key25": "2fRWwCmiUxwRi7qhUpTFu4iuSBxtgGM4cPhTxpwrFBx9WDiSnv68QNSQNGr6qnSSeRYwKGGcGB73WGmmKZT6mjhp"
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
