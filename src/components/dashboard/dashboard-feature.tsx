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
    "285UqSfvd6zQND1yNr5MkKf7LjbS7uU5jTsCgBP3vmSKeu4RturKHbEJPQo7ZAsie4ghskUhQAng4xXFyQzcPP6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQcQqTinJ24hUWtqqCXUEXhJPWWxe1WHHQFC2oMgwLi1VcH9VTPtfH75bZ4gaEdhy1HX3KtnjStCbgQjLcUu2oE",
  "key1": "219KdxVZwbdxu6YhNf5SYPrTcvSF49DhJY8YzStEh1wV41yLNrZqkhpdWYEg2eCmQXWWCANRD6EDHC166EyckLaT",
  "key2": "4KGux4PbdCtY6z4K3oeUrNWfERAJGxw1L79bpTjsuAm2475yBQfnakAexDFmMZSynDGgNEQJYLHUXTKRoxUxocZR",
  "key3": "2EPADQU2vYGaEFPtZBfV6FyYoVRsW6Ykn9RXjWuuu6QW6y5VHxqeFrB5iE5Pf6ub9RYk4XVYunYcY8hoDARNmXSf",
  "key4": "2Rg4ypahR1XRAWBEQ1Po5TCExoViUNzEv8z4P7Kiyn5uYZH9o1DNBdYnsq2hjWHKvZrkxRRqdFm6kZbL3jMy5v5N",
  "key5": "4JvU9Xx9TDtkt6Wy5GTHvz5Wmt7VeVbxjx7yPkT1LZ3j2qso5kYzpqvhSqsY9FZF63VQe8dNZpN4iJmNQwHhr3sh",
  "key6": "5efrFg47ThB42DiPZWUTkiUrHrK2tbzhei98kVZseAsSC4JP6zqH1UqsUgk71wzcKbgtw51Xgq25LXt5uPWtcd1z",
  "key7": "3HHbv2qVx4PdVzE349LA6mao6vq7anx1WVnPQYBVS2CWrUwQiqaaqqTNnjrG2igxwkcWmFwZcZDDzFTFkEjsphoH",
  "key8": "1HPn71PJtjUWYYMQgmB6ghVRJk4roqkQY9ZG5K1kLACEp3EFQUQyZUrNhTq3uGB94Udtmx1fBY3VcomNLQKrbyw",
  "key9": "5vZZSs4qzd3coAJq9suBj9jYjjTS4V9wUk2eEMXjxqoGNFSues6rPm6tK7QyJteBMFQYe3SFJtzsgVxYN3hMYMnM",
  "key10": "3QCxmevkTxpjYU7rRzvpfEYmbqdGpTJTvpzPSoiaXC7JL6BisDuKDo4B2pXgp1Uk2JmfqA6EeJxrm7pUmSocD7t3",
  "key11": "4qzBVWh5cJKtML5bQVjQcy2pCGWYwiehwAKSQCgY822sRnvkK6Xh3VqHNcXswZRL46N1NCyBJf69r9jKbMBhevrE",
  "key12": "fZbEJzkzasS6GPNbdU3w5RUEARdAYmNSM4wui8ZrX3LJ3HuTiGLjHn5iCMpyPBJDeCMHpNRUanSbmqEAz932uTW",
  "key13": "2DgXbFXwKMxHFUGHtzdBgjFTD7qQrUKjqBNSmKVDdhduQ9Db5bpq4d99CuZXTC8imA9VpEKgZi5mX4javCga3yQ6",
  "key14": "UpapJsN7Y6wjPjy8Qjhsqms7jJp8h7gQDHJ3DahtPMrhYv2RzGnQDkXMxByg9uS4zZz36Wuna4s1SwKMLmuE5y6",
  "key15": "5HKyYLo24jRR13NWvwB6mub1oi8LdJKFNvRUrrvFR3zvKmnsWpUNCqcUp7Z5DJpAwe6FxTDUwVbdMsoR26asUkAX",
  "key16": "5kD8Q3kvfiXjvtbx1tZLibAe4m2uBqBPiXSyXEJ4XbjXEG4yUZQGENDAeJdHJfkmcRc6PYd8e11PnPpTt9VGTZvc",
  "key17": "655M4ikN5kK4gawo5R1UFxp3HySpEGfcWVSN3KnLdSo9iKHsUQbyXsKgAfBCWCfhxH1LizwBqdJiNShcmSqTxjze",
  "key18": "2gFVWWnNmTcBws3xKbVCx3bjipFeAiHX2oNdPJoqChgTFDdYCYcb97rjiitgqaUV9Jghy3ankb2Jq2isFgGWwp3A",
  "key19": "52AthrxTNjFZFdZfQGkr9q5sMHST4Q65rha9PqPKxc5F9UfmkbhPRHsZr86eXEEXDgWEyh7Rf898zpgW5aGG6kBE",
  "key20": "433uUMXQYqdTayX1PFX4GBnz8WV95cFEr1QuaHNqqKx6nGGAfABjrcEAKit5ay1VcpT1UdkEZk58RPJ8BXF9Qhd8",
  "key21": "4R4E3FMzvCnLajCouJ7bvtxUtnYee3g89rZvn4jcdoZGy2QexBim4Ap2yVT9Wqy89MgMcEG2oJKNc3Y4ThSoL38i",
  "key22": "25aaaEHZAzTfXg5b44AqwyML3eB8CoXG9HoyuuDExsAQkQJaaeeQMh4kXposqXL8ZnNMpYvuDe8hC8xhc2X5hgYU",
  "key23": "4ExYZuSDwLa9cWSdPzHMCi8GpHUfkeokSfn9Fg7ij1KHGbf8JgKGaafv7L8iMCMjC8ofAva9hbNigR25MBjJzor1",
  "key24": "4t7q7Ck4Tua1rCRCehTHoAC3bCQbDy61Frph9CA7yYK8iSTDsP8aUedTHpXuVvc7eDu3KgrKAADVD2FnNB8Ewmar",
  "key25": "2JMfj4hnk2JqzJTccjt1AqpNdstdkmDhabCSxxXkk4VFSL8mqzZDpt2eerZayLd4qPCKrkdKN8GdfUZa8oGvmxi7",
  "key26": "3UnYb4jybYLCqjdWa2h4HwarUt2HhdZTdGx4cTyt7Sk3SpCkWXpEmjqd7UMbin3V1w86kLN2N7Z16zYwP8GGSWz4",
  "key27": "3QcKrzryc5Pi7um1nJd484L5z1sTk4Y4fmZBKFX927ijaVWNJEAFwUPfANi178Sx89PURffcnAn9vDcoLMKikFib",
  "key28": "5yuYstb6vhVCMAaAKfWdvZFfwyJtB8zeZpjorYtmM8fyovtgfGZDTWqL8ckPRCPvUyLs1Ntv2fmY62wVPorMpcHE",
  "key29": "5WbK7vs2ZmojXnAuiNjgePks7pgFagkEr8qXDF3oXMLaEZFbz7pgq1PYioAYWZZ87DKHQK557xRW8PxktPa3ihkY",
  "key30": "2zfK3V1fZYZ9bMEm8YduU8twLH7kY9R1Vzsdm5A61jhqJ1CyrUMj1Q1oheYN2T6MuB9W85LEphkWEGzYpPn4rAMb",
  "key31": "1qh5YRuPkYFQxAZsL8fh87PR2ZXbPaXzke6hWmq3pqB3gThGNeqy1JuR2Vtwhbsqa86HDDq9ASRTwwqKJgiNVEN",
  "key32": "WQ47UR4H4rQcx9g9NJwwXviS8gsBxSpkppTqARvNLfK7VA4JUgp4dB3VQUXUb3QWNEZShDXoTeAW6NQbes4GmVn"
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
