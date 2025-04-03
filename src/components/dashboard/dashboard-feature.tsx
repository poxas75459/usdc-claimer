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
    "4GrV3DtRitMCjRS9umuW1vQ6xMKjmed41UnaiPZJm8TuwgpQ3WjTUSGg64EiUgBeSR3AZqFoo7EE23gN3a9wqCsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kB8Nj9gftnQ1Zrtjrx5ASLdnmmvFZhw7ygYABXun4AN54AG4y5W9DdpxptgwWgjBNi6k1MjdDcpXxCWE9dYyeb9",
  "key1": "47ZfzrU1tJi8NRa1E1RniX2Dx6RtSBiiWTUfdjZhb7YmNHcMEMEamoGaH9RLjWCHT9AdZ76seKz8QqVzJ3rvGCbY",
  "key2": "5U7dR7SF5rrRQTTfuMb37SEtfJN43VQ1GMBpkNcgPjsvLndH7YXo9JYzdLpu8aiB2c4gd7szv77yNdmo2n5TADkC",
  "key3": "2UFmx2oXN1C6UbmLfR96mfSR4yXgRV9mAhGU5PfATp5HyegdAeKpA26kMQG1P1DXMAUWb2fJNXUEnYqgYDUekoYW",
  "key4": "JvRfULtsPLgAcpSroEkxfdobxgNGeGtYdMXJHwT5FKgyQABNQjGzy6xQ5Ze4yVNDF2iKhTUNesaooszC3FuGbMf",
  "key5": "27YQ2t8BficAFZ8xpgRA8B8AhSPDfFnbosFUrT7uDXMFNrzwMn7eivxh9nw93PWo5K4e6iJrecxaD9meMh2b7xi7",
  "key6": "5XT6swGuBxLr9wtB2HHj44uAYmSMN5AHd4asXWjEUpAaKNrhsdqQ8WsRcoUR2n968SPFE8WjcVG45Lz9D45T36A2",
  "key7": "5NdxYMcU8tEy6AqZzG91bgEf2goqASsQXp9HVREkQiqQxUZDFVBqZHC3bV3e36bBuRPRBk8myw7A2yTzqDYDq4Y",
  "key8": "3jzWJ4euS5tddsCsukucf3CQvggQ7FsN4Y4JWotmoB5A3ekcNr7nPDi1uwiK9Pjdhm1o3R4yX2frEGPNt2aPvx2P",
  "key9": "57JVbeFgYRZ8DGHFxZkk5WLhcqtrvPGkZb8nXy6kuFSTX7qNVUo8hthbgmF91UrtzN27D9J2xuTb2uVoptt6Mpm4",
  "key10": "4LrTTHt15TDQueApNMcvGagfnCHXAy9M9Ldzf2E6r34AA94PLZkEHg1WE7EisuKXP9M98ccq1H7Rjvw7T7j2EeSi",
  "key11": "4TfncqoWGFvpyyjdAtutnpZbHm2ZvkbvFKGAwdZjhP99fqBVfazpNFPATjkpW1xD3v9TnqJAuBMaCK6PwwLgeXb6",
  "key12": "3LCWHsHUAgezbqKjsF7P2Wv5Thc8Vms42G38HSSi1ULoPyUryxTAc5uQJA2osQcCoKKDJpKPu9xbejWYqacbYFfB",
  "key13": "4MoD3PrDd8yktu5E4DnoFPjn9XAVsZL5cKiceDFBbGM8qmNyvLzwDaPwwUDeYmLRYsZtkSeuqFSpMvyzvSZwaKjQ",
  "key14": "53GWtRxLuWbVV3FvQDwYXGLkaLqncvkR2JjB1hbogMUA3AYyuWAhNJerso6TgYvihzSmRqm2NTVYsLXvqHx9T21t",
  "key15": "2VjzLScozPNgrNnn21j4uFEvLghWZnyJ272PWXaKkUvToFpo2cAcCNtBjPbtPpGWet4Sun6VCZrKRtiZCQ1e4HsM",
  "key16": "2oDSAAJfLCeuwA6SvaKrNNFZXo9Tg5GZafzwSESheRK5WQvgLVAQrTuiQ5awZTKYESoLrcsFYk1iXtRRQUfqC572",
  "key17": "4s1h1f1MBf6aCBf17tgFrb5WgqBYitfY64FhRS9JZSv8iRaSiWEgXF3vJD6kWnbopFmauuwkZKbsiFDM3HUkPHpx",
  "key18": "4LvmUDPgUwA2YFCEHkpUpCZyZpzoTBQQPX6Nn2u9eDqxgkrzpErHuSM1HcVFVatVomsj7wkjbaVRBEyA5efmWqVs",
  "key19": "4SymR1CxMymCrG7GReZ9CtcfaGcn8aKGq1NZK6oQAkCEaNvDpk9EMKhzDNA2bfqYCS6RccAdtYvHdkZ45SEPqwHb",
  "key20": "2toFpwr7rra2o7ESLhBA9gnTgfHWh5bpXUJjeFAvrn1rmVCGN86J8bbVfiqHZE1CEL93y725EaX1WQJHsoaBAN2i",
  "key21": "J7cq3kbabk8NSwXL2za8RMU3LnvYzew9y62Pvss2nzXAWuagzuvGr24gZbWiM6NwFUHgb28CoUjBNQ1beJfLQ6c",
  "key22": "5Q2TsNZm87xxbd28FjcthAA7oqkZQMc5rtz7mkJ2Lscy6WbMWkkuZcSRsk5BTUxLY7ac3xNKGq7YSY35hi98UenQ",
  "key23": "3GckuBQUyFE7Qr7oj6tsZVpqvTCVaCRrmVcKrcauf3UmG3ehf5dCQHMBNvvBXHKp7gMcjr5LCqXLYzFhaFdubuw3",
  "key24": "54cxVbm1jgWPNJEWwMLCWWvEyJ7AUGR7WdYmhpPs76JSHPLPGhCrJPPvuEVksEFxNieSX7NbPHxQVTYhUhbavgN8",
  "key25": "67eF6BZFAYsgjFjPAQbaZfoLEXKwuZDTayaEKDapDaQv3XW5Ak5a2QjTxEUkuZNrh2FQtrpLA3MxobURnAT6iusy"
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
