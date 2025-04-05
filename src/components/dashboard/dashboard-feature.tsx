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
    "3Di71tMUc4dHVp9sEEwQpRzM8RmNbhyQzLqFE5SGSuwvFF4ihJ3obEmwq3W7eDj7uvjoUeeLto69iuqCaWYZM43u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbiToxV1BwanAuHST6sPbLU5WxdAekQXfRtUjtLi53UTmiH99CshiiU42wo8gBLzQcmLXPNJnvZtAYZkLhjatT8",
  "key1": "4cYmjk7viVkvyhJ3qKAK9B5q2dCG1K8mcS6wgLbtDoMMGEiQnPn8ZCxyndiAt7Liycet54kPwpHtkDybZ1yoDKYa",
  "key2": "4TX9AupFPAeRqkcBnVq8GmPpBeWkfEH9jCJreNsifhuGWZnnCE1rwUsRqY5iKoGz1dnBHBh8R5rrZ8uCK8RyrFz1",
  "key3": "5egvdoDYRtieAZ4xsiHRrp5iykC67iamApxYDqYkS2xXvoSsGGpmot5TqhPV5EsMXtP2MZrYDvoPWev56cuv8Hu1",
  "key4": "5Jk33ckYHQXu1zPKBoF4CHqikDj75aAApYzRXBuCkjpkeUcTijzdEtv6pdwgQ2zQo7zMo3jmtxG9ETJG9fRWAvZ9",
  "key5": "4tmE1R4y664GyLFyDqibGZ5VKRWAsjcaTFd2onbrGLAonFrjUdJpBjXCofvkmi1VxJSgPTSGZob9wkdfzP4WtLSc",
  "key6": "2qSE3GVCQPkypF5KSEt6jpKhBNnbYoT5Uc4SHe1dW1pm4ds7w8QPmDsAUhC4ExeTj47i4GAenWtTdxLZLBX9AUS6",
  "key7": "5KWrMY5FscqsmdUCYiDokvCv8epnjqwvJn18oQ7DvMcPGoa129tx53DTtCk1mQTkw6yRB9aT39NJwUsACSd3U3Bk",
  "key8": "4GqnaHVf6zsCQekaZfd6T76mT4SkTiYkBuVw2vabzNqdM9miwwGLs7cWVsA3sCBzuKzkpWVNXaYdsn5zUWo3gaMN",
  "key9": "4xnyJvRbquQCP39j5TyCkQEAgT8SedrDLfPC6tDBBbKyYqmshLCAQkKgMaWPWw6S77HixiR6nsxSSeyYbgMFM3pX",
  "key10": "5bysTW5CZo9eppTvkS6VPTBMfQJX1vmYbBhJAGhHoyLREs1kccXuh7LBJ97E94fvFm2MKRAmCQCAevxJjrire8xu",
  "key11": "2GzPjXFoXNK4aT8fvbwYsw2BmvUgSAFTgEgyHGX7e44WDeQrfvqBg5qqwi6DFPeLsiy2rFBAV9rssZqptqjcsV6a",
  "key12": "2h47kWqNMt4KDZsBLNKEsiw5rp9KJHvn2hbWuuuT1sW1f3WzUZkCu1h8RUQ3QkQNCCUoA4eGivstS2wxsWqFhVyq",
  "key13": "5T4Y6a2vUAAu4fh5rAVq2s654rcijch79GGpMMVptqjEvE2uEcfjgQQFtTHizASkGbufu6mTja5siL6GHShybXoD",
  "key14": "3XewgtAcZR5ajhygnAmQX2D7ipcM2CWSAZnogkuYPJiBo9XPpFMPm6EnTRY3MYF3Hp5HikPJWgc4m9ptMxwUZTr4",
  "key15": "2UQG1nG7CTUaa6yLT8pLVfR3NL6ZbUmhuyaWdiH4myPwR75vLMMJU4o1hoAi7Qt4ByGCzF7PP9NVLAy9gNSb7AUL",
  "key16": "64WMARUByi8RVvzLCCZRXj5DVny667WMgLnf1KXJ2qq8ZwFeVrJv2dYNyawxksmJDs8o1qkGaY8UkVFW3CxsgJ1J",
  "key17": "4S4gKcfAUXMBwKz8iZqqxgDigWnDUgRom1kqgUQcvVZjP3RJMYt9Pd1bjQMTbrevTWLjiAhkytu8FhaGUSFePCXn",
  "key18": "23GbaeJ1guH8XWZQF3aGw8Noc1ogcfAz8r4QEZFjrfHnDi2aSjS9Tf5kz6VhGr3i5pN7miqX7Vy5kq6VdrQsrbh5",
  "key19": "cJVpRi8sdcT5uzZtm3gHNAECZBUEh8Y7WRDN7ZCCYHW4k5RkoTh168CZq8SesqeQwLnjMvc63ss7GgQ3zRaDGZp",
  "key20": "2891WpZjowLBdfDXJ3NJWaRehUkx8BoM6Ah79MqhtAPg6SXYprZ4u98iyt1qw6p9FJbji33XFtPuEFMEZgrqm1vW",
  "key21": "32ukg4UThPNky7jfJHyurk9udqL79yihoQVRfingiY9UUd1Swun5eg5tggMiHQUnmejxrXNtV6E1iBg3r3eTW5Tj",
  "key22": "5kG8KDn9av4nYfeJ41QVyqShUMSJ2m8yBiCDzqQCW6qj5WrLnaVqMw1D9Fvb1U4JUsKNKxXjQRUqSxKjc9r7QeZV",
  "key23": "siVLM3h1wDFrjFnLT7hsjFMFJw4stu5Hm6rPPQfBghvwRc26EBuSVu6yP9Mqk6bQ27BcAPXHh21kPeFHKe7jBbS",
  "key24": "3CxgLd18iMhKnYLkiWCaXm9vyLVoA6fC6FPZGppKd4riYVi7vSqPcJr6jinh6Sw7kJjJApBvUcAgQCHFDpGkBkeg",
  "key25": "3i8GypTpu3T2TEz8Wv72eU2BywaTGPpF8AcS8yVT6bZ9hM1mKp1uEcguHQzD24ZjsnMDHLBTvGiQfQNpxCAWcEnK",
  "key26": "4JPaBHcZP6d35Yuazwa5p5YyGQu6QnXvRHwyKVax92ckWpm3a2Q6HQLWf1KiemoRVX1wLDVBUXh3nirErWRjY7i8",
  "key27": "5MghVqpgdLohScnzJUFqnnDTSSAkGCG5WnCKTFpexh3rgHfdRKHWrnUgZHQHr6fMRTbJNfFL228K4Qc9EwrHxxhb",
  "key28": "2FSwePi3fe7PDXi9hVT5gYDQo7TWUYryVrWk2ndSSS5JHxPYCWZByb9ZqETC77VCd1SMFvwxznL6xtsBhHjqMYBY",
  "key29": "4x6Qidq5uHbKVNsF2QKNuc47ZN4B3YEMvvSUA7cz3zbWaBmC8b9FdWNeeB66wCoBdvX16dxUQ6LtzqvgQ8yEstgL",
  "key30": "5GefftPF1MeoiBLRTVkmaLMPvJKB1BcRz6sjqQGCnmJopEUjcsMvAGU2kbGoZysFDCXtLR6iUbQbXNAF7MTHZuPb",
  "key31": "5CtXRZ5eKouiQXWbrvb7vYgPJJ2xKYvi5hp7fkSegfsBm2N5gWjgYPxA85X4GPoL8XHuZFPW7qLbN5YZBfY9XdNo"
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
