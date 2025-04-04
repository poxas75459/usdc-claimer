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
    "3oiTZbe4xYLrqwqCG3hfYTgW1BBfEXZaqyWVCbJpzLw9YzWbDNh8e2XfnfRo5fPZHgWJYQ5h2Tv5y6U5mXCL8J1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M2EKduzEzjEFGsQwh8jqSSc57xQ33fJwE7B3zPKGwTCFgEU6juf1XLLgMQ4jKFBtpBxwm3om1zUfE8nYG6XShhd",
  "key1": "2xeew8FN8r5mhEVMkdXMfo6p93r7kGhZ1sxHtHhUBQ7u6ecUcaaShFf51LVHtx1hB3Z2WQ4gwXWrzSaY8jtJDTwX",
  "key2": "4dQKYpfy6DVHSinokU2ToPe3Fireroy7AgHuFZMCtjxVCniP2ZCQFAjUAzvbSMyWEoXkqmv79iuKVCoQcKAFgr6o",
  "key3": "3Avuwswj8VevzXgZsUmn1CwYwSY2733WtESWpDb9H7d1XFgE9dwwS4w6sDV8JN7ghWuqFRSeWs5CjYWkBQXEzjdd",
  "key4": "3LdLi5wpuyZVTKhmgvZ3mW68oJ1b4ELVu9KiTzJF1mwMcA6tBz2BoX2osMELEnsn9qFjkbPDh9GGpbA8BuNWKzTP",
  "key5": "5f31brTGQwDe743YxefRK1q47fXZujN6kYfRpe82XenBsta27qa3sdjmhF5sPfXAhSPS5e9NqmCMSUAhFf7SjPHq",
  "key6": "4eYb1RgWjnckJHB5neabu9ZVMu2JpdfzRv6ErnmUmhy7d9Pkk6HPaP1e2787mpmQiid5FHH7NRHemfQgdybxeFZg",
  "key7": "3vj2D5FntpfSS48ZS5yrayZgRFZwuXrc4UTC3EFSgrYo8w8Ndm4WqgpZGHAYrom5JJNhhkaueFfkLUNQ1VgB5Tcn",
  "key8": "5p77UgRnmApBQR3Ee22fcjKUabDuDeghSxda7G9mTZo4gPMdgEwp8BpnfN88Lcuj9wCKQujh3FoDWLwve9LWpf1c",
  "key9": "4SSCUoJVqQ5TVAhy2Wp39LDnywTnh9AT7MeBeEfjzfTZWDdvYUMGny4tjd5CmjiW21F2ADLQxx6ETCLUdCAVSSzJ",
  "key10": "mb6XBtphqdfUSmRyKA7ezJNUZ8tS9UoF7ULLi9bRfWTPSC8bFG5t8kv1JgKvQfNro5Pxa9ipx15BUg9K8H2VVSR",
  "key11": "KwYvptGaH3fmp8eRCBKhmNE68pNB75TM6VsbSqYy3peaet3hhmDY8VfWe1L1psE4YRRj9P4VcB4qVhrAyGPMCdX",
  "key12": "5oKM6h9ksqY57nZVB6aYi3iCG61AmH7LyUBmjn5zFFk8nPKQro2PG4CcJdV7ugbuNfBNCVwJmSYKhgC98vbjY9qm",
  "key13": "5icZRYZJhijuY4zMhQR7toebhc6EKR8jgzt1whWSSwQAM7XpKk75aRVLpSh31a5yshH9CpxtnWiPsL2AN3HMGq5d",
  "key14": "3uaHwfd5KXsNMmrtZgxXYXAL4ktv13GB9bydQ1UBh3PeC9MjQUYgyB1h5Tk1GDXtdXypNs2MhP5BfKqKZ2hf7F1z",
  "key15": "4B2qrUBXhJRyTjsswhyH7EbJJkL2wFXNLBj6CaRALnfYdmeLKEmL1LrNk1XgJXo7phzhKaKWScG8WMYnpdwo65h",
  "key16": "6tqMJ3MCiGvr81MLvmY8yc4kWMMGXZB1kLSUXnHhpj5VGYQEvpqFYDMbp9vDdwTagE91HPrgFp5ski2YFo9bYHw",
  "key17": "4kRDZtT9PBZnuZ9rkNWCQiRAj2HZBmTjPM8wo3A2VwhNcemptZCzVWPks6aFaHC1BfZ6KUpSsTj4xN9EiGBduB6r",
  "key18": "4Cv6dWEpr2z9VYXSasxwzt7TJmLGqCXC1TTMF5T2PyKj1thh4H3MTwi86xzormhLNstgSrpKBgaabycZReegjLLD",
  "key19": "2LgeJ3UeUVB8geiWcNPyfmym4wUWyLeGQYdbNex6y1V4a8mvKfp7sdqHhp549LQh2Pez1RySMX5sNEJ8zAic389o",
  "key20": "4A5B1oDfZyDLdXQo5vJgXtSE3ceC72kTwjEKSboZQwArc4LocuDuA4eqtkFXVWcF4wo9rJVyCF7JZXAkoXiEvKJ8",
  "key21": "2mG13EXX8amMwRemLb1pv4tp2hKW6LjBQ5Zr16CYxvNYT28cVwZPz4qwuBaaRUxsVLiQW8CSoqCBAePcTP7SJRzZ",
  "key22": "3vHh3vZncyuHXiG4hmZdoZ5mcRFyjuDmQBzYVmmNV7BnMyacE9ZJPXvBjFoKEuH6pfAPmmHErFPiaAQAepbXiK54",
  "key23": "3q3LM93HisgjczHKUrxr9CvxiuTJQSra1Z2Gp5FPsTMc2Mi7nRnsKpTHkXWids3txL6wfkgP17mWrEK8MUUWBaW1",
  "key24": "2RGBvFbJBze16Yt9FUdYs8NgoqhssAqmbvpksLzvBkfna33EB2AHw6H3HhdFSAn8pz41WSnfpqKeiJdPY1fKNPkX",
  "key25": "3h2okgUKth7mEdyz1APT9UVXMkttNDm9DWzkMtPQH8YahcwcdnSFvgvL9LcytYs6dvWWuCpPawanmwwo2TFmveN7",
  "key26": "3CGnwohbXpa6oibBDCefsK39xswnKMFDSiq7eExezxUAa4vXnC1ypPrLtFB5LjQDBFu3kfJWpVSArU1BkdVAz3Ee",
  "key27": "wrbmqjbND94LR6nBdskRCWcjG2PuB69sBpStx84PN2n8Ndu7AxB1UgeDq9n82JugaUsVbjp3ea7T4CbQFLD9QV6",
  "key28": "2qNMeipJBfPEczqQomGpiYhVP4V7H9YDfxsYTcdtbqiv5uStGZ1WAyVBcsiSDwEV6kzHTpmzX7oahmb8xpS6e3UQ",
  "key29": "2zRNAtTwxnK8nV3GSuVGL5owWZawsjqnaY8SSKkRPGArLtHUscr5UwYXKwbdBb6gJtG2HwAjdHtNDJyxtTKjLGr",
  "key30": "5MarEHSr1BFdYZHFFYFsHXBwqRpWLN5UJwpHfkCUJNHWhiaQU12PLsZniP9Ut5UVxMbiKDcsKPXjHv88cemwtTHR",
  "key31": "5JDxqHhXEyufmLTQ5wHNnZYtpsonmt5LB9MsmYZTd4TEmegxzDBfZHmC7GKztYqPQ7bTJ272nYSt7q6iqNmFSEAs",
  "key32": "5c3HuzuQCjhzZQ6xpygQetntT1Dtzsb4QdXZ4dTtXBkk8qp77BbAWQaZSNRGDWuK8wYb1Wc9ZjevM97hvJ8Y83Tq",
  "key33": "3qRTS8QcQf9v2Dt97yoM5i8vbnUPE8ojkngedtixDsSykyVMcWxRyEc8YNopKmNzHMPeZHZ7doEgNxV4g1JyEc7s",
  "key34": "sTJJkbgoLiG5jA3E4GGf1PyYwty5m1XA77E3gzziZf3CGLHd8ShWcPc8iM27oy4Fnghy6857ttmbT1kysebCsk8",
  "key35": "31W1cdksFSBhh3HbDE1Z1yyL8JvG81nGd9VeAR3W8wtSYScE1qsYvPF6QnXvAwwqsn6WZYyx6BvUPicNHvXEyseF",
  "key36": "49Pt8DFPcc89MmrKG4z6G4T4HoNZi3WC9K8Co6eghFKm7NZkvjvs1pTbXXjyGqU6cd7mXC82ZDzydHfdecRtRkdC",
  "key37": "2NFpVFxNA8bbhBpVPa9dxyD1hKH75GuHDmL2uef8c1VAzgFbBhiwQ1Gy22k1tKh3gx8iD6Wyj8CLEPQDNv4HHsbv",
  "key38": "fje415trQ9HzKkNSJ7ex6YafomQkTHsCaw2p2efmK96TXeWnGaJJvLDwhTPMiGHM133Qp8zQn7jRTh6KzvX7XSb",
  "key39": "2sabqRXzkDE3VrsmhqT1xWy7SJRRY9LKtCbXAazXDPzsL3YgeeZsQRfjckMBvkRpiRdyDq32t82DU1TLy8Ej2wDq",
  "key40": "zqZ94DLKFdDmv4Yu5mJP2UfSjp5u2XJ9XMyq9RM5eL4Ae2GgsoWKtuGYWDVqJSJoS98Vfsyu1qGANhXaP3nnfNK",
  "key41": "2nYB8fufVhLTXEhcmMNdGpia4iPDQBKh6HvGXZ49a7Yf6pVCQhyfxxGbxAnH5QPnQDi4KJoBum5rYSGYoFnVJTDz",
  "key42": "3jttQcWjqEFUdoxoMQ4T3hGXJhaRDBfmtfzpwpHuxqRfY4yTBxrTVX39i4v5c6vaWkHx9oTUfnUWvAtueDh4R72k",
  "key43": "YyTgPK2GsMpYZGACDhJcW1j9rZjmpHf861FZRuCPZFYvmzNQRZzJ9XcaJMZKJTs2hZieLADzRkfpj3yrD1C2hLW"
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
