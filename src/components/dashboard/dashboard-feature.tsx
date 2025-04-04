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
    "35C1yTZ5F2mZ5jgywJrnP4nubqUV4QTbb2x7qL44fvDXgmhSMjysbkSFa9Vycq3NL6uLVE6oSfKMgqydQxknX7x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isLHjjvcb2ShUQBV9FX6RWNQ3sa1S7dQWx2fksU3DA92gAgYmy3tdrnmsJnB2XVeoz9kt7iLcDNonCeAxwPBNZ7",
  "key1": "3SBcM9SzGGHW4D2gNiMNnMURxeYX5mBszzzt1mT9qGTmeQ48eUGWS1JPvYPDd3vc1mwzgDvCfN7NMVthoKv87QWK",
  "key2": "3aBwUxLqTcLshNAZvrhYAEwAxAvJQaSe7BLRzpagoqyGC911njjhQmhSsZ32H1ce2eCbY2cGE14Dr8wfexB311uB",
  "key3": "FNzmScZdcUc9Xnhg4Hoy5xzNW1rd34a2r5Uie3jahGD7TLq7kNYCCRdeT1hVf7iS9KoHChwuRxx1CAjaxTWF6WW",
  "key4": "3hxZ56oVGAFv1zv5HV4yibwh7CB8UFZ1QxBQLmYN85ByeKWHpYZYASBhKNEPUnfpCKiQGeXQRgv8ArPKTmQfbQSC",
  "key5": "3aatRJQDqWZsWZbGqTpzoQUT3N8KYkaYgqgesSQmKKoC5o19VRn7AYrGTnFoTzSAmgAML9ppHgbJWHBgwYpTsH3V",
  "key6": "4LFoEP8vYDMVVJYRSquackj2XR4cqhBouBC5ZrYRwb3ag3nAgDUYf2EEZib7qhtV9mSmtQS2A9RGffjw3zEzXHQ",
  "key7": "3npdkPPfD1UuQwPKz5wnBBodDbHrBxyuZqKcorghQTmvwgKXkHqwj17J39AScteydRRMZ7FUXkefgsjxUbdGzFvG",
  "key8": "2WHC9FEK396LowrrvbgWFs4x42XPKNWMdSEcCZeeqkMm14cHMM6nreW9HTkwHQQwk5jFfhzQT7ZHukwNuaAKh1ht",
  "key9": "5kpKfqVuHWBUw5sLrFjzPhYPyD2h4PBS29uTY42mEZm8zwMzP8va4g7NXsqSaSHosB1NHQjPdsYgvnVfRuhCUbB2",
  "key10": "5UnmKrKe7TDjTQNLzNfuGVBeDa9BTWN8yk5yTeWhdv3ykiL8Px21yL8rfx8afVMW1oWvap71semFFeaqt2dQnvNd",
  "key11": "3CGeqjvHVzjBQaGtBCCRJcQEXWF6DptyNBgCVfJVKDcgyH4dD9CE3CpSLRwg1pdzJeRk3FRjTLJVK7WLYswsZgTQ",
  "key12": "2tk3ehwcGgfvXu9ESypGwNJYrFRy3oTm1eGifMpzimZvEbK8h5YoauaYGJ36tfCcsNafjzMifWdTeGmQ3BcNNXYt",
  "key13": "5bzTQhWGiX3783526buu1dkQSipo7wFMAhiDagnvcGSByGjwzSaApPADX6XeGwCsJ6r8g8nUZy5Xe1vMeKNYb8ZJ",
  "key14": "37NayPN1YvoaWWMZgU5bMVebXFHkF7UBgfyaPbRsimq265qSRTraErje889P5WE7jYJd9w7bugUmhdZYkMMxyHKs",
  "key15": "Dt1a5YxnPUQA3rGXtcbJFig6bA1oqjn9MiHA2ptGYcZTpWWWv9atmTYLKKdfmj9yMkJg85BcnqEDGZLvTXcw5sn",
  "key16": "2EHEgWCp39P8tF9LbhgELzTwErXbqxQNN1uom6SZZHRqJMxvP3fXzJ1k6QPeiqTyhowVjw5NY9p9GdmoDJ6vswPV",
  "key17": "4uqum9LwcQimCSYDTeNYWEPGL3hX2qG4qnLD8gGcRzCEiE2BUL1MaAtscgMKHCqcqe28JZbZbb7TuoqkCGq6rskT",
  "key18": "5jeUZd7n4R1NSUt3G57NytVjK1Ndip3Vcasr6C7FVZPBkV4SQWmyZ8piry93jbcW6WhAYJDFMY2r25LWkoTbE6V8",
  "key19": "5Fg6KVwtKzXg4PxNnmF1XqBX2y3f2a6Lt8YVzqZdUb4prmts1j5ksJem467LUAb3RZELQgjB89S3vE96kFSuqYr6",
  "key20": "5hMhsYVPE9oBTt9xmoLh2E5L9g3riATHj2xK65GQBG2KLdPKyAWSKvkndHE3rGUhposU9q4tu17JkiRMSCQTckKm",
  "key21": "4nJCSAGaZaZHLk6Sr3F1Rwuv7ejThASKq3Y7KrUBprDSBh6456KFgP25AouUeDSTMam3pGY1vEQw4jpwyVeBU9iB",
  "key22": "Q7SXPzBH9bXfFdjRXp6MjnAqAcnvqdgeAbJFn3aiLHtYoS6RVNYggQXLmA6pKvqGkSzMbAatCMd1BnwkSokVx6V",
  "key23": "2yqb4DemNRvF1AMdj2MQaA8AfVaA1PatrCxdLQUwf8uHWbi5kaJydBHJPXoYsKUPJE6AtZgyM2GJ8eX6iLzbavde",
  "key24": "4QRumJaDXFRyWE4yioLM4sbAKHscwrm5FTptaUdnNAeW8kzYW5Wyjx78UKaMBa7DS1HsuiMKhhQXM6jBz4EVf1T9",
  "key25": "2GhbuSU3QX4di2HR7QWoPZJkXVqEH4eB1FmfqnpEtkbmnqfdDnvBTxwGdABCgetFsxQgpnNPQoEJ6snTMUzx5o93",
  "key26": "2SFPipGaAbeU9JE1hbHZW9vC7ALiJfbNde4rQTsnP44aA8tRMWDu9QrSiAvdBzRAXARgnis94ReUR1kYVYjQsoD8"
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
