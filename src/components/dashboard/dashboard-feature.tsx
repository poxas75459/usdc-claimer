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
    "pnTsQQJrKUrJcviZRXNSgiaPfby4jksKrLCVGRPwKb95F6irLj5m6D7KEttJgwdzzreJF1Zx6VMjp3DW9NbaWgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48WLfZESjAC4AWRRLRAnghKh4HH8qrjchHdjxFLzcx4WbKXiGv2JGh3WYsjk383GffMd3ZJiGZTvjcAxvVjM87qh",
  "key1": "4YoudwaudErA3uRAb9SrF9b41qaWoyzeHXMk1hQLNTNsgUjcncX4P47cwFtw1TaKuL1q2QMpv2qAWVWUSy7ed5HH",
  "key2": "KY8PAAfJWPi9mpkaLdnRNmbPzFm7UQkHyfwxrXGNBB2t3wVLnyATrbUYuUzj8GtiJnENBsCukwdGxWmLDfBq2iy",
  "key3": "NXTRchZzeHtocUcQh7RkCU9Fh6Y9coxgt6g5vyvsQAY1FiFjZnSTuSrk1HmChNs51xxbm157W99N8a5da6xcPAu",
  "key4": "62cwqMzQMoJ6fTc7Mu647n9xtvACGp3QjeiSbpqAHjxwuSzdEpoC39nXUwvhDFWxqg8fZAYDnWE9VwVh4EtAkXnU",
  "key5": "2uuZxFs94GJJqGmufeNdsCo1bt3HXJpYMj693G4fCfEgcxLZmm9tZwfn87tryrHF76wrwzVDaQCQNiUdkPC1vpds",
  "key6": "4QpPQQVLsL2hnjK8iJdPMiXvjuv6V8phBVdy5jxbVAVKrtbWEZ4dsVAnmaxmYSZ1oMU117EeX47aWjtUf5QcoQDW",
  "key7": "36NHXUvCm2y8brKdDtTpHMeQDPdxH6xnT5pijZhSZAxQ8ieX21v1NMAsm119nnEsEe3PcuJr9vKLBQfjScKqNNsH",
  "key8": "46eBtRSuE9MiBt679VbQ5FKnCjS7jBgokPKMTt5ozDXhtj5bcQnKoRWQQKkmmxoc1MJXz1E8L1kfESDcEYZgW2SG",
  "key9": "2NuQg6mznwbbb5vWPQLdPyKyd2dSE9jiwYdrdJXotmWP43z8iYWqiRr8spo8WgZPkDaHKvyiM8bZYcNGKcB8wKBm",
  "key10": "42z7KKaWFVGeGkANELNJDuoVJTfH6MidXXFKQjaEtCMg7xete9GLfXcPzcTmKefC5RwqARK7bXbaAeMh2SPboAUG",
  "key11": "3sQdygmCvuQm2CmxpdvCk4HYtY5oLtLSn8p638NAk5avHG4LXnFc6YEfRSckeJjR13UYK3ukfWkuFbokHbu1BXHB",
  "key12": "5j1n1ahssBunoXjxgR1WJrMMqhadkxXLi61KJh5GTiYz51wU7GJMUQZDZQ5KCxBoZyf6ohspNcGd43ismdjARxzE",
  "key13": "3yTtsgt91Ms1yNiCjTgVerxHzqHzALZmihgxn44qKTL7NAZL8B3rGiWxcHZyrpESVfHY7z9YvRJZM5hEuH5YsWyR",
  "key14": "S3zdy9PKPfVPG8RQbvAZwNKcvctPoYpTY3Sgb6W3x4i95fMjVPfaMEXPzkWPMGrwPXHWtpB4LcccsbTXYWFNb5j",
  "key15": "3FjpCJPddNV6424utKFXuyQJJ9G2JJ42TM24RGzrvT1x1dcWRYahc22cTjoa91Bz4sugJcrQ95FjPbi8v3KF7EMi",
  "key16": "4mra4fkuTDqp5W7BGrNNbg4qJoGaB3qgTvkocvwj5dHpp6k8GCLnVUKVNSRFMFvmnZcyTzP4Jun9RaQKRKsebeFc",
  "key17": "ZW92siUcGzP7oRuXm68B4e6fqX2t5uXgqsi9nn55iSgciN9DNhYWrdj8HKx9XN6dWh7RYVrAVozBC3MNFJT3ccf",
  "key18": "3wTXAtWPx2EkgccrXcaedjvMKsuSegNSLj2UPFk2W54sC42dF4wyVu4cHsYKza8PMvjMk4hXUQUZLpXRKuCXSCAZ",
  "key19": "4B5G7cdkFxCWDBAtd9Uacty7ExV8YyvDFJqvQ34Vuask4nKQTnHJMZuo33Sieen7dfsR6iusHFUDRVjHndaW6VPG",
  "key20": "LxfGCNXCYmDwKPyyo49hbkT3zrn2phjKPnLbW2sSv7wmjpLiLzHQwursbVMpadrj4is3Z8XK9qJYfZ4Pr93KpGw",
  "key21": "vzFQGk596kR3LL7EbeST1Fb1mueFmEp1ZcpWxfbHsLTxKBnUQvtYGCZgW2bm1Yuzrk2Ps5eWuoiK24KaempSCiY",
  "key22": "5tR7Nhk7sHy7QfXMfZpcTm6MqhBviEizq2Ce9aGTxCCkxMR5qadXkGfEjWhzXzU54rkBX8qJArAkNn56KT4ojmQr",
  "key23": "HdDKUPjgko27coQsWXdUHhUpb2S4a7gRDZSDjutdhP9WaN2QCaHmk3GjF1zEc4MX4VoAn2Eg5imNbsKCfwUGdob",
  "key24": "yyXvcU4dLCqGPuHWwvheLsKoA6F66Qdbso6Gafd6jQqvK8usfAriYcGcR8fkG4dvE9BCgQgxeJVJuBP3SjogRjP",
  "key25": "3dzjpj5o1peJ4kNwRszK6oD8SKVmrjaqfiVmVkXcv7HdXQxBoB4BKcUdCtGpMwF2XxnSFZcAkAywppFj31TGfL19",
  "key26": "HZxTz7fsupwaDVmfCjtPWvd3Tv8ieLi58jcQLkpeDbUAwgGzWS9jLSpjuCj3jp3mvhXkhWFkgQ6SssZiDsKeTCp",
  "key27": "393q1ec9mDbcNQY8wgCTpum7LfoXCvY76M3isvgz2EoTCqWsYQSGveLaX4C4xkPoEqe6GgpYtZ4BabTD4jFzRNjM",
  "key28": "4v8pZPbnMefXZe5DGcRMYTDN2DBEb7qXb7BPLpgezxtYtAB4oxwJwa8gCRGpuBiQNM8vDKmsxqppTg5YKnZVSCi1",
  "key29": "3fXSt3S7hQmhk4u6WoWhRK9GmFiihDWNJEsBVqY1cLfuNBVXULjVrJZX1NShAKBhDLip1V7DcQNiRu4bUYrgwJqZ",
  "key30": "5iUSrXS63wBvLqhVX6ikuNUx433vfqpN3Brd32EuwrBpJyKS5JtnEKWnQQjxizS1wFh8EWBKbEtyh7wY4t6YCp7Q",
  "key31": "5wwrdrGwnXK9rLH1vULsmwQJjyQFFawqk6XWUE4TrWDZjr6Hvv8Niuj5FT1eYsUkYEKVkqd9BpNTVWiMHUXZP2je",
  "key32": "cauDuVjbWYh5Q4iRR5smAMAZVQYZJm6f4CmXFXWAtj7PYaPYCwZwqJFDM785LCWd71WpwqeFKCokSSjhRokDk9U",
  "key33": "HH7uSncQi7v3wyGLwfhHqYenN4XUNosep35GUrBxVxBU2h6BMi7q38vgAARd3egHk6As6fVzE9uVBeQGgwjqp3R",
  "key34": "4NZeWLNRmdsBHSRAwCHE8iwjvdWJNQN2vubuFCVZ3NcMP6ogSQz9RAgfnPRmWtQQmUDETQkgtqPqa6CgdLMHawYW"
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
