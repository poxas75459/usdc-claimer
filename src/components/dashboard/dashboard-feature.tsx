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
    "bw7N8XnC2vGULPPSqWmjqxaxrZdx1drxo3cJ5tg3xhMXh9rBDbbCT7FbNmgLGjv8B4TfuEeCcFJbJtqgraQRL7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5389vfv8bJMnat92Q67PEhwcxVfE7GGT86qbmdnyZBhBdR79XxWbAD6MiVY6gHx1CsgsXAWDuwGrhrajAFEJmNey",
  "key1": "iZVwaX6HJiqoU4ZXiQpTV3ZmwEU3WByUZ37hsoqxYJXGDY4SDcY57MZUqQxwWduXwM5VLBExyNyGjqjmtHLhv4A",
  "key2": "2P9wgBupApMxVNF8jAf2sHtvA5HpkVcXuv3ZoZT9NMzQftCsjuniCeebq9VFxr1rBiTfZLWLLwBE1apmvAChnCBn",
  "key3": "rRbLwyv4ZY5MMogpzztDGoX8CBgbJQkFhx5BztMZ5Fk8YAGrdtd76Lk1qtL64zinaBGP1nc7ko4cZcKLYsomxk4",
  "key4": "3DV2ZUnojLdUL8kVYvXXeyn8o43oAN5VFZizDhGcu17NmuZehG3dahaq1GtN84rvAhCdwH8gkku5RxdAsv2iXbkS",
  "key5": "3gFmH8rssAE8swdKP5xFFS51ThYzgzj2wva5WNK3xqyPRQmhh3xKCA66wASVo6qUFtPXURP1XM8j7eBqNdeCsLPc",
  "key6": "5BV7ErF6wr4oaZMjzchmtU52vLFB5pmKbTFVaopFJvaWtLroo3ZLMCprBAH9Gmknu6Hb9yPDJjQUuT2sDD8hu6px",
  "key7": "5dvaB9dHfQLxQHh73pbjnLQVzouKuTTe1q8JQ39M8qu6LSm63bK38yEGBeuaT6hCQboro45RGQPS4aEQvkQcv6G5",
  "key8": "5wsqbQW5XTeyDpjsxdTDRL4JMHSQiX5NkC3QjkmVGUDhHQLaqSot38ag5fm8UZMDj2qJXtHFuRCRgfVsw3SH5sxD",
  "key9": "TU6dZxEySHrywxep5o55UcvtFH3pQENNB98LGQRHcTRWnzj3Po8MrezQfUcy1VyYK69o761Vj6WGC7KrhmUDx2d",
  "key10": "onEFkRBgURke6fPk3pCtXM9d9oGg2jZV9ydUnTF3pJQBjYEz6bYZ27TE9di14VfEQPV2QXvbRBFvafDFBgBBHsT",
  "key11": "2UBVAGnaLBsW1PWuBXDK9Wp8RMsqaANbNh5BQrnezc9RD2eXNsfMHrs4nf1P5TxmzK4WGwL728rX1VdXgyMhb2ym",
  "key12": "3F9fwnbpH47nNXeRBNkJoRDrnreANWjmxmHUNtZ9iPNx6DQ8t8kGXiGYGg3A29hZzmGk3QGUnU3r3dRzxMrgzihL",
  "key13": "2YZrQbp2ApZ4LAbHSLeunaS2JohUGrTNckkfAPzA1xHrBxVAM7kGN2bHbGYPGsFemixXHNXaaGQav2RSvxsm2vW6",
  "key14": "5gbUN9zn9NosGgviAh3xSSRNa5G6aWJfgzdZZY4f4ts4kCBhCHKU66jneM1bZoS91qJqADEDn4nsycSZJPwFrtwh",
  "key15": "4RNdV9rfPwN8Pk5QAwKvJhJDp7avoY8rhcREEJ793N9gR4yK4W175kz2bLxztNktAWG2r7bM45wH1XQ7HKUZt48e",
  "key16": "2wQec899gvERk5Vc6eQrJERoHNuujwpYrr6vsFr5r59kUGy2FptY9dXFHKWB4V9i5CfFPmv8eqrchsGF8ZmuP4o6",
  "key17": "5S6NQ23hGy8EQ4EvvGARLhgd6GyxgFpSCMgyF8VtHTuB4NZxGTkqHHbJ3oAw8FyRq14me3WBg6iz7gWcxoDCKjrw",
  "key18": "53gayMkBxBRM3Cusz7jsPG5t1qfQfSJHNdWq3VnfqYd7Eu6tMGUjSrG63hTEgPEdr49865tD7rFkPRN3FxpbdvUi",
  "key19": "2z4B6Y1rKgkTRYwip3QDX9PNdUSSsRS1sYqXpPLAupuMX2zsJz5KLrJt4gR8tvaJgNTb6egKqFWPx3HtL9g7QcyM",
  "key20": "4om1KiBHPMWjL1DZSdUNUXEtDTRmopb52fFVicCGzmCY8WUXiByHxTJ9aXTXnYuJPbCwbKoGE3neYUHrZHT52aPj",
  "key21": "4yjvBuvNeCpxyWQB3TL4hvB7EQDzub8dZMAyveq1EEarAArPpD7SVwraK59PwfUcEWwQEu8BPkic1zG1aJMXYBbx",
  "key22": "53GsDxG67XSNVeXdtdmLWeXg3vnwUDoZCt2Mz54rYpJSErfcfukmyVTt4KJDgei9yiCnzfGfNbZjFFoQtHTEiaGQ",
  "key23": "5dDKHUAXnowiGt8zt4hVv6aAYKQgnDHPkzW5mtUXSeETAR5Lg5eXzJV6AwtEgmzSbpqNmGAX5V26rACuhVcGoDpU",
  "key24": "3Z4SDRKsZd8nRGjMkWangPybxv8xSsRjA4HFpeUqc3TCNGjXf6PHJSLH68cGzmZq5uJE62haeM2VFJCbVLTQSHTY",
  "key25": "2FfU4iPWmMaC34hx8kKJtvHyQNQWa2RmeE2YHKktQz4C4eqGfVpJTXL48SomuAfsjy4JnYEMe9bYB3NEGzzEwbhr",
  "key26": "5CmAfujQcBPmnoJnrxTPn4a8T1bbqEniLVjgCPZ9CWrHzkxuTenQxuBH9L1JQc3wfGTnQgABoM1qkggEPpS364NN",
  "key27": "51jGinvAHCfjvK7mRU9h1vy61dLHjPkDsCsQBT9pf8nE5N1mv6KBah6xBNwdXU45dPzFek27z7dbXdY3SnNGwctB",
  "key28": "28Ff9BSEvni21xeiWpjmS76fuoK7h4DBmsPwKhm3H1TUde8hn6k6XyiQy37192o8myLHLne6ogmVrXEJBXN7WsgX",
  "key29": "kryZnRb1g3MkYKWDGnAKjErqDC28Daaqx1adEWpQEbMeTLqNqXZc9mST3shQ23WGCVXhEzv8CzofTUA65WoLyT2",
  "key30": "2TCE17VyDcGwHLMzdNPJaJazCH2f3LAAmqNtayt1bN5RXryewA2PWgtLqDy6xeVSpMopTeGPTtNfqhmoEgtqeiwL"
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
