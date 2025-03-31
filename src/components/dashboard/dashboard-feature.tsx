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
    "34NvbXPNRQPGYmJWnZoJPTBgUyWXFZVXKqEcHgN8cUAgXbqfx6B8SKMfazfG7NtALGNcwWFwMATtF17MZCtQY5nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zi72UQCXgNsoXpywxiiYU2xCRPF9L6dGxyVe3Tp2RSHd5vD21ayJuW2jZyrJeLRh3et68rqKNR9DTXMBqHRJ85t",
  "key1": "h9tEWYp1C7VmFtMLAyVS5u1PJt5Gv97c9LGra7aWxwK9KxsuXTUjzq3iaSyV5Uc7D3SBhB2QwotpEqPjX1aM1V5",
  "key2": "58YmpPTsjarjNnxtyaHcdyr9DoR861hjMwV9tLfsjR259tJqi1MVjes85RFR3dfZMzoagYTugK4b8XjniVXvRk8Y",
  "key3": "4H8HiJZCha8SPcFk81HuGBymeXKfwUGPAjX93eJyfAT5UoxjUQ17FMD2rHPzX1xHNH1iUfFCh59F3kxs7e6yJGRD",
  "key4": "5DQHnJLrsiyvycYX88ygw2KH75aMBP3F8QPmp1TWLGeXGWS1BUApvYrNsoeciQqAqqo9F2nNNB1EJpVX8bDo2Kao",
  "key5": "4FSSRj8v7jyYqPPSGFAn1ZXwMds4gNGoAcxfcKsUYt4vvsUeRDYZ6kJXE2BouvcMM6Q2GK6AmAArjpq2qvqtn217",
  "key6": "3LdSsYWXi7ccXNdiZCVMBkSDVy862ez2AS7REVN2Gbd94UHZEtjp9AVkDNNwevdU2x47kVkGviGCeKnkEcpuz5pR",
  "key7": "3AjE8cjGmwmkPhXRDxXHTBwwkTHq8N491gbMkuUFFvmFPtf9zUxSqcYg6zfBNACLNS139t8HduE7ftram3ZJuvue",
  "key8": "5rtA3TBzFuhNuBXh3t1jZf9hc9G7Y3ZqvB7gxTfVuKkMCaGowNYeVJFwN9vWvbv8aL4yqySKE8qqzLyZS9Bzhgzs",
  "key9": "kxc2queRKfipssbRHYEbNYozU1XWLNNSyoGVEf2WSKeaJd9RTayJuMnH2tLLsADveEBiTeni3P2W6FiU8urWKQr",
  "key10": "EjqyzkeBQrHMdA3KMKn7H6fZATvgrb8h8kQpuhzZzWojVh7oUTz4PCrrnjPyiy7VbRHidbcAUSNVEss989arMZh",
  "key11": "2onnrGbAYuhoN5DDi1K2Q6JGkcs3mHrC6ByBgfiou3poUqbAE9UEq7sd63uPNZLhn2RGx7Mqp7VJeadunNP2uaha",
  "key12": "4g3mDPFmxzdqH99Xwii9VV84xNtugmZASKDTgx1S6HAYe14pVonPbWwSf9kWCfC9T8KzzCDMymbmSn2ULeaULA6w",
  "key13": "VnUbbuT1zE1ZTq4BN6GWH4vnMMQLQcrQd591rN7xa2sYLHudHx5rJFHANp5K35f3WSuANBa97tLDx9uaFVGB1k1",
  "key14": "4YBCgfhfLAGQmH3en8HHSBJ3Tbj86WuLkFw5xF2EBtjs8jdFb9PWdEGj3iAAotmoVuphM5kSwGMiXPfKk9ENg6JR",
  "key15": "3HDBtTuAqonhQgtwBRGxuW2Bgeew1PpUFgUJvhnYoF3t36kABTPcwQBUDfZTtuSM9u9gnA7H7yEMoFoFF9K8TB6N",
  "key16": "3EHXWLtQD9tJeKNzCf9Evf6SDymWETv36h2sC1yX6kbADWjCUB2642NbjNYVVLXQgrPXY5rAubExMc1jTU4zCgjS",
  "key17": "4aRZzVv7MFw28WC4F3p7mTGXi3UN6PdCErigFztFBU6hqWQLCjky2QsBrrN48RPh54MwTyYJjYZjgzCLGzyK2mt1",
  "key18": "AjBLCe5L5qwJCiNzpC5K66zsrnYyTmkX415o7sdV1UgxkXDLGhCXQwkxkv6cwAAGPmxxGCEQUhVrTSkaEDDRRfA",
  "key19": "AQ4NY4hoVavHA8YqmEE49SqUTq4P9k63HVErrhD5TVHCG8QqT8MU4LxoZ4MrSihqz6GnheGkMmvFC5oG1nmnE6J",
  "key20": "41BjpjZe5vkaWXtK9m5HUcSCUrUAd76gS4Kt2WTb3GuvBTrb6jdzprY97cZXrFHbcxpmZF2vjHtErLpU3pGyhcQZ",
  "key21": "4gowjtQvdSGF6sDYxZ6tQmTmHNiZ4PTouMXG7JmevYMtakfoXkzovGt8y8rmh2ukoQMxE5SmcUyG2EWqEaodTLSo",
  "key22": "854Jw3TN3N7QdjFWfBmd7Cr1B1dewcunnnHUhrhEnM7xzTLpYtpWnjCgbzc4fPJQG2HFA9h2rH6oy4v9ER8eqYj",
  "key23": "9q42XbNVjhHi6UYapWvXP7Rrzc7Ftsi1AuWs2camGRGReaq5rwwthWSPxT2FS1zYa17CNJcjQewnXwZgjvkg6xp",
  "key24": "4Ah2hu918ANRSHFdfgB8n9nikaoia3o5CL397aCE3Xi2VUtREwNqeAT6qe5EAUrqtL4uvTftbKKK2A3XuPqSum9E",
  "key25": "2ru1FokRASrEurhDUw91eKuf3RbvK7ihQkZhCKnLYaXnS2oVxZVnfkcUBG7Ax7D69qAP8urwyKXkf24mpACBztUc",
  "key26": "kY1XHKw7waYnXxvHTaS6jMAT3m9dNSh2LDgMVyAtzuQoU5U4Lr8wkeP1xArBDgCUi7xBRAcGzeP7p4VvggzbP7c",
  "key27": "352jLHG43ZTwFMBmM3aD4Y3hBrdJPBaqvv17V3YQnfkNYEmrHWThJeM6GQSeU3w5JCxcYS6djn4qTqqMB6offJW4",
  "key28": "4Xj3c6AcZjbUQuyia5tu8uNVv1FhqW5kQJWuSqwwXueYceXgLQzRzri4LFLGR9RSdvrePSumJSKZuBAgZfGvkYka",
  "key29": "5ZQy5eiY9G3rcpSvVtg7Gvj7i6p8jMVbZFAVqEZyXEnEdMdCkNeMmhqaFzxrQHmi7t24qAZhtp3RuaMocRA5wr88"
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
