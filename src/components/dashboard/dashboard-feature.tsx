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
    "3ZcRbrpPNge6fSxLufqCfRik7DHKgFBfyYAE3cuLJKriPwcWYWnMwexvmN1EBcxE3JGWDpV6TdHY2Gaj1YAeZBWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2foJDhApmrkeJ5Quw8dc2NV1Uq8EgvRfJvpGdsEFrLCVrEyEbdSbV7PmmFKe6ezpoeppNZQea1Q1ofZGYwqFtjA1",
  "key1": "qmD5jVyXpzFoFU1xbkEwbSoX6YEFF4EUnJWXD6kQiLhR1tjTaHq2mN3G1x9oyw1HBkZABqo2iAjTjAKnBv6PYqh",
  "key2": "4qnnbbVBvHuh8KkEtdr82CYkYaEwZXSKCLceCP7qQ88YNpMcX8D57QyV63BxsH3QGRprarwRLoRhhNho14RhoRrS",
  "key3": "d6NMAULwBGCbFPxXsihwZFH9mNXtev4M2SmpUdbuxe3aK7Qe8JcmSqR3HKm7zPaWuQsDQ7ezkg6rk49zKucsLdx",
  "key4": "316KPZGbG2v41NXiSHBTuVD1GPdw4yRHQP84ZMzyfgo6LPCxLwpcsGQpyFwbQB7T5E58dWpD2Bj6ZkDiRSUavRQv",
  "key5": "4BmrJVnb2BmGSX72oHcj1LTgifULsKVZBTxLwB2xUwFb6LUCzEEDnHTohVjBHjsZdyd8bXT13T4xJh3hEGM9h6kj",
  "key6": "42MTsYepJGGRFZnTpB7x6jsGhWoqf7rSi8SZcMS4XBQSLkGW1Qz8zSe53zpmBsWD43TyBAJhhLmiaWbLNNH2KwbQ",
  "key7": "3zW1jcCBYEGCx9GrHG9y4yKZ3pFjZeLUFkwwqtE728LQafL194tkRNxsJjUE2vwcVcvaYaoyAv89yota4Vna3ont",
  "key8": "5CdrbarL1ypsCRWrVChTDnH57HkyycL9sPFrwY4iq4gubBTeRXVupLCgbfeAheo8zn6rp84mjAemXUy8MdMM5dEa",
  "key9": "2Xuqx6YMwJ4P8Evgum9tLPDnxW95xUjEg9ioSoJsQuuUk3ogKtQBdH5A9xPgPNWZ3YD7okYN5jV9buLrt8MLB2L",
  "key10": "3B5bTFP6UoS13Eyb5gNUkEQFEEWja7oQBXfRuuP5gzCAV55Yh7Jjdow6A5wVXu1HaqiYx5ZxUuK7dY1CrqosfnYy",
  "key11": "3nLNFnxHdcGxHVbSS7fsaJUdkLEv2NzBksiDYxSkqqDZxnEAfgcunu6rwais3Qn17jo4tTpVatdTkFfEmmkrgv7v",
  "key12": "d31zJ7WP83PbzecZbNR3wDTijgRvU6N5hQfzuGtYz9eBKux6GVYf3Fk1QRrNX4NF8c8HhW5EnCdsPyhYtaqXXq8",
  "key13": "4AbsZNM4XgDvWeYp5n9U1wPSxE4TbbYs9Lk1bJMVYsmCJoHaacZbHVnm74i1GUXvqjAM6KP1zPZpwCLnGip5pgdY",
  "key14": "3mZwweYqkcXTUycdmDLRYHKhWpjJ8RWmadcs9fmBbs3gSKj7gU7DLgQgAta6q64QnJjbqixNiNuq5mkxku5A2Vt7",
  "key15": "2t5DnwSbNrcpeyv8n9cGoafKrNA1LcJSphhHPmqf1o5MNKhQURtwhdnZgALK8AZv6cbjQD9YRv8PTGzvyXXkKysN",
  "key16": "VpRkHn52BCegCfjafpaQMaJhNoVKA9PKpzkmnnkvRvTrRFq9BaRR1yuq9kLqDQzFtkjxX9dmqPJgQRcaeTjcG6v",
  "key17": "5fPVbRcE1TpsPz6aJKbCcWWw3boyXFUexxMrMTi5iADFHMM8Nuf1yrcsuJdxanBTQSTiwEHJdJAzBn91fN5FsZnP",
  "key18": "4sn5nrbsaVg8KSjc1JUn62humXAGwTRGEcRahpLXKZDDRzqy1WR51rPbkToy2uqTKG2jL3pfyiDouQSQwAZHwWhV",
  "key19": "2oqbDEH37uvBiis6bMY15GwVyjDPtRMPpPtdm7SUJkT1Jn4bUvFVGTGf7CtMidW2TzDgvhooUSQHkShJjZgE582D",
  "key20": "2LnUtk1jyQDfQt2tUjGZm1gib1AsEwkSmckGEBMFefcseAYAupa9tZ6vhgU7EV53GDSLUypM8cCGkPcT9c7gt9dN",
  "key21": "3R6rTyCHnauDvbx9LUAoUSbL5L86zNjgUjLZjqaKDLCYds4kiycBoKafuhTydDFbKTocZd4KAhrP7ioG85cYHijo",
  "key22": "5k9FjWuKZKwGjNxnnKJujhNAhTcrHsn1RVZNf7nu3pJBMsU6CA65irXcNxtwbCRPZU9o9uyuu4HBsuwpdya13uhp",
  "key23": "31SRPYvGXkhrGTWKzbB3TLEAeAzXHQ4Sw9pCoVCQYcnwJJT7gHkWX8X9h2gms6FL9pFmDRFchJWbe339hBf5F578",
  "key24": "3Qe4fnobS5A49HZnuUcbc6BsxcUxZaW4kX5ktuVn6LJqQpC8yUUCCNjzhhcjzHJvV8rD2XFK3pPPvGmQCY7276fd",
  "key25": "3Zwqj31ZLZiMwdi6h75mzaJpZUbPXYsRBnaMX4BFPdL27j4xrMfLPCw6e9vyrDf4b9eEKeTSTXWfa1LJhq6f4jUT",
  "key26": "4cPmdR7NA98UDje6J25D7JJ7S538futnHpZT73YkrwwP1xgTfbmTz6FzqBn3izvLfroEaqHULecd8BRahbWekUUj",
  "key27": "5ehXGSAKSCrKgdMm9kWvrm2W3kEPpsj7UczgvMV72btL8TrzJeMhJW6tp1FYxE1UTKR7bFpv7MSK7xSztt5LNrWB",
  "key28": "4GSPQEwR69GRjgkuDkge3zEfnuvFhAD1kzM6YL7GvPuDbGrMJiTh3HM8pJLqyCvowzE4Bam9tM2PDjJVrQsRwPYv",
  "key29": "25xpCX5jjL2K3ZvUo9t3DA8FLdFrzcW9r84t9987ooNYA6zFcFw1Qv8uANLHX73r3p8JVkHHPGPWX6yLnmTzZFBy",
  "key30": "2EHThe6UdqiP3W1QabqSbMZXFXvzhQpaB75YQzL9RLnzqpTjc92QYnwcVueRE1ocs4tfyusKT6T6Vr4JAJPvLSRg"
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
