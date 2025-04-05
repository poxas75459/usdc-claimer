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
    "i3riqGjuB4cUq6igKt3cWFt2C4aSpqMWsNNFP4EtkxXrVmZ1QCQE3DfDeq2C6xyfVpMbbdLwwo6eGNSb2XSpxqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EY3BnKoYCPCLUJ2D2etoba3jofwnNatsB26LAGbNNh2GKj2qn9yqtUohGJX1QC5HepAWsEEQRQ7Y3wZNY7goUY",
  "key1": "iMhmEJR5LR5F7oB7MfwT2ZsXx7LRoiwanwH74pcqEmeT3wz7mmv6XWggBH9epgNNkbKkQPSwmMcR1rJKouVhLmn",
  "key2": "3o5noDH7d5qShURRc5YLLoX7aSruAKesAtQFJJwhYRhcGd6r623auPnAduk2FiTUgShtx3rLWQ4vLV3G8fwpVkTD",
  "key3": "3FM8HDQv11GkAMDKAZzeq5ctyKNpjEcBkSwbYzJC6Z5Gm2pGVY1TzD51gWqSjvV5VEBmbEbBiQmi6sWe3mm74qwW",
  "key4": "7P1WAcf2yi7duSj5sGr6vXGTx2UjLjMHvphpGxpUS1eqDkPKwbbqeWqZafUw3nNKDyp9LczC6352DrxNre9bS9Y",
  "key5": "Eh465kZjQVfUmzZqA9A1ENPNkDuz9JdUpwHL7a4dNhhd8o9mBia5Fa8bYBGqwRJdAJaW16VrNoNhXsSDorufHaG",
  "key6": "2KQJU2QhNfqcfYrkpKYVytyB3mzHdu1pWcVr8a3JqydZt6h4eMqfhmeF6P3LmmVCuUeG8DdLFFJ6brBUJSjLrqyT",
  "key7": "5hcRQphG93zeu6HUFGNzVtLjP1L8Y82jyAJc49PdkTwNnT2sZWFuMEymMCenxasEvDxLd2yg1Fr1uMaTHExaPr6J",
  "key8": "2naLnzZBzf7iDThb6Mpey1RTVwmXk3GPDSjF7jdarYmtwue5fakiBbGhXHhguWc3nj8tQ4HV9pVKuPfDT7oSxqMa",
  "key9": "3makkYXaEyTNcdPGZ2CUeMKykXzzs7zTF3Jsiybe7LTXLwSZAwrKDcJWy81ZAX5ZTRCV3bWCyLgdDgdmphjqp7c3",
  "key10": "2XjeVrMLy4QG5uMziUbuwMMxGWUY73HPYJYyj92m2tG9mdRBVgVByrTeRadQf2uuMfjJ2nVNYM3f6n5dT2XoxTTQ",
  "key11": "4wk56zQL3FHihqyQf4n565v2gGVZP6MxBRt3BfmwKWbeDgdNXNL7CE8fhvth6WJ2jJx3WiPrkFbCjjZiWpekZd1i",
  "key12": "4iU67bRL91nz6WaVi6iyL3jKAv9Av9sCeyhVEUvYf4Gqep6HaqTu8yjrUL75y7RJ3eQb4VG9ZukYtYEDGS9f12VT",
  "key13": "21L6LZsDjYEb867temW3Pqvq766CVvo94bx8UxhXrL1b2QXueFx9iRoXYA8RTfxxAYfEcebruCUyqmZDfZfbuMRu",
  "key14": "2UqWX6Pdgnwn7jzEA9ZhcH3jegRDNhGpgmYFFEBYFD1jGzChNKKDxK29QnX99QzifYGR44pAGmyyhgV8pmvBGbmk",
  "key15": "3Y7C92tDrkbv6ht2UDUFBUkmiWCauYPcpRU5umSBqmiN9ynhRvmtSzPj84SB66otxCuVNUzFHtenkwvZh8JwLMVX",
  "key16": "3PVQ5jW8Xy5QT1qSTo3caD2C8PJ8Cz3QcLjfpdDrA1pHvPxh1y7m8Ea3NhYhytNRp9NS3AyBmnBwFPmBnb51GcLX",
  "key17": "2TnF39AWjesH7RfutT39J29TtNogSeXTVkA69YjuDYPRik7uYnRCNKKUTWsiaiHjZx984w7pxwBjPTyzWCwQjZDR",
  "key18": "25ZEMquhj7LddnQmmjpqXf1Z9YbhM1YE282u3ePzvBP1wuAYWwTM6T4KzPMA7XAinQ2cmB2H36B17xNi4V7GZtbZ",
  "key19": "3khMu6HcAg3UVQNdqxn7ms3v58769p9Pm2ZLJ5i7Fw151i4ZgzkgvricVsk1dJNdt4fRsTfxytdCozkEkzTVrTTp",
  "key20": "upEfVY5mjJpQFBfwST3xp9SxCbUZ22kBctPDnYf2gcLawMM2cVy4mTTR8JTgyjdEDXbvAwWGztur6etpa2Ev97p",
  "key21": "5DUTwerdh1G6VEfcpjyXRdYtmbvxeHSpyGRDBv3Bacawxk3kBMknSpEikK6eVvVbdpwgHy3s2kmA2UeuaNKgbkDs",
  "key22": "5Pr2uqb9FXqVsvk21S8djNqpaZwhKNp47Zr6iEPFRgWB2ccqSqiJkdXB8VJGKAhr92PjVf7N1FRamU8HfRJANa5U",
  "key23": "3rfVxCzazX7T8HRUiMbTZkxrabCoSphtDfQnu9K27XV26d7wt2xVfWtN9LA5DwZwpsdaVhjPerCFA3LzbKBjCoVV",
  "key24": "312wwiqVRn2okZFnUSM3rNgsynQPpSdA4UZ6ZGtQJk2s4B1vurJNFgRo1wuHhve74dPUsudbxi9ZqfYApwJbmrV2",
  "key25": "3N4LG8fEFJFP3kaj6784gwxLwg6GFuvGng8883ougvxLsqgmnEa9j1qu45MKaeJE9DKCD3nhyQyCzd8HQdJZvoub"
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
