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
    "KUfsRefvQJHsHtHuCL5nF2aMZRmpiCEH4uPnwjtZLiqjxHQLYnTg2fudpDbytSw2JDNTnswPhzbTN28nvj6rzi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWWXJmSc58FiitrW7isff9bGJ1R2hp72vuL8TMHT8x9PsN1drFAvEHkiuXXkKz7cdaGxgumTzArPvxyugMYsRRF",
  "key1": "4srrTRfM8FPVqSZmR7aPJnAYfK6jcHdbPZEU5mPb4mMR6Q6tUrrDrzJaeKJ69tejTspquey8N1dMArXDhfmPi21f",
  "key2": "5qKjQUe1p6k6LxVfotiEC7M3Z9wZXYxdccGLbNMwjFZLPXdyqKcWYjsbM4AfVSTeH5Y3xT1nutb4rVPDC7xXauAu",
  "key3": "ChKs3pZ3NwAxgDGuEh3Gxb2tvxtp13jdzgh1kUMT9jtobuxiwwf1UWp37ju3583QaBgvqFBU3Cr8W9Xg4CHxSUE",
  "key4": "5oMAeQqUP6GcgrfgouCwgAwbwofSwSm7Ss5c66mxaRWTnUnf7JhtpVHtPibAkda8xQuqC4tkz4x1Sx7DsmcLPhhh",
  "key5": "nybJdCW1hQ8EVeS1cwVaADJ6pcxMBLJgAfvahCArzCDtCTDvJDeCaV8Qvqu3DSjJWPNe3BDcmqyoJGNZx9qBNoW",
  "key6": "5sXRAxVPdvQcSMqb5FxSeQMMnMtf3HFXbpn1HZYFZKUYqHXGQu1npgTRSNwzwW15HZDMHMNBiJg6Xfous6nJn9C9",
  "key7": "38Hk5ReLUsxbgd9Ut3rDRwAoW54bW2g1ejLcLH5A1o919dQd1j5ysnZRjwcxmJ2wXcuTRQ9Hh6W7Kcdftk3PoUWS",
  "key8": "3Kv3WafUQ2cYzogS45V4SJPyUgKKHLmK694jCMg9DpHeWBfQNRTZStpFLGdJksd4k4eXrLJB9AjJcXkUkwNfFdL2",
  "key9": "5xaVWzerP9fBhPr1Ag5aFY8wAp5cwnwJQawMM8x7yTYFvA5D5YkKxKK458G8a82xRYgyQkbJUqvu8A7XYoTH9ibC",
  "key10": "5YghL1bYDKYKbfj1ZiyotbfimVgHsuRoboDqZUNeM9PbdnA26d2qgwvHpTaLfBbTnu8xL5oQBhKoyTzsmKsniApr",
  "key11": "2MsbF9dWo7Nf8AxfnYDD6Ma9LmwA7TuD6CnepZwaWTUaz4mZXXc5tRzu4gZevJB51wkXyW4xTGYo7TTfrpHMg2D3",
  "key12": "5ScXtNjz3b7GCA1KAHrFigEVGrGrhdqLMFErL2Uxbsmd5HVmegLfKkdySh37W3Cxo1cNaYbBmFfjrjgp6oHChJCU",
  "key13": "SKDQn9sEDEZv2nfArYAB6RuqHB2wSc1RzPKHAoSN3fnELnz2MQHcjLJnk2VTzXC5MV5TRkZxesD3XuKioDLosVq",
  "key14": "2sGXnRSC5UiZTA2eLuvN1xExEcf8cWyaLCXF5kvQZ8Q6TRGgsxFG381kk2497KJiWKWvgpyZbm4kMEpwaQvK176b",
  "key15": "rHfyPLhjoYgYWheXUGuzz3HGG8J2nyH5YzkE1WLBcU1qHWTSJ8oeQ9Jt475UtMCQ7QwcbTNu2mEGQakHJDNrfbx",
  "key16": "uQQk5gXki7LSf84fqS2482hrRC1BYTyvHFswsttwBeaFSrn4hCa5yitDy5yL1j26HqQiwyVJbF7t3ER4Q51Ah4Q",
  "key17": "4k4qBb1etc5huC7CVyUB7Q7w3a9RKKi99gp5yRj8VcbgyYYMFdsUVSY8C4YgbD6sPadNtMdx1uyk7zEUet72yHoG",
  "key18": "53jHKNeQLKyZS8UfVZvy3JVtY4Ru3GD56rMVQc9HcC3CMyZ8hogP9fyYAPkpzHTcXsPsQPgFjd4vYhePuZCwfiGC",
  "key19": "4jChQUyiuXe1K7nzottawTHnqUZ8Gup76RZaeCcf2phuSWf6anZKjhP15Gtu7eejYtFZ9V7xEcyjkk5z3g28WGJ2",
  "key20": "3zG4R2yHufJUPfRL6Tfwm85NVtGyVBQ7gRiyZBqaio6zkEC5QhLnPiVBcjzjqtwJ76BvKD1tiNkgv8SUZoe1oDtR",
  "key21": "4YkbdTM75MAsZWeK8ze14Fo84sRNHKZsUxUrvg7JSmu9rxEjjMWKELqMRvtPEjhSFhaJCwBEkmAN9GE73bv5CLbG",
  "key22": "2CmVK9dAWz1dANaBfdLAwWbXKqmE567MbjoCbrzQvfEN6y2dK9QURksUJA85kranCzCFAvjNnPxoADKEHHDnoyu8",
  "key23": "4VqeLgemgMCHrUjWP1iv5rHQKpUXkMqyJjZ9M5zztCFuxUEVcweJ918eQUFw8ACxaPqruSnbuQmjDy9XohzX2DHX",
  "key24": "5CiE9t1wbMwCD5EE6D6G96LnM8VCkM9h8aNKHATi1koyoRiZrphMiWzQctF6VpQS9ordVa3G4tJBAoDwupxqKW6n",
  "key25": "cWhRHzEh4ADPdNmCG4YzqoVcUARGmh4zYRmoEALybf2SwvPdKehKbBYZazR2UprSHo2VfbJEfSpvi1euJgFqSu1",
  "key26": "34wGfb1vKcawbJRbQbx4vwdPvYhzPDtAbDYqcJfaqgkZpvbHbBSUYRDaHUxoP2mnBXdsZ96Z3HpVCicZkaKkps5y",
  "key27": "5bn6spDDJe6uCQBAXUdyp3SwrNVJZqvCNEBLkQ5W2yvg35wCqyP32zUgXWCgZpfEekrfngArJvsWrBeavPbaR1bG",
  "key28": "5AfD47tZxxVJMZbn8MoWcZg955CNRdj3Ed4xwpxawR2Cn74pDtknmiKez43xbjQAE1hRyQ8DshUyM1z8qo91mYM1",
  "key29": "oA26e17Vp2vPtEworGaakRdt8V4LPRV7X4opmicwybS6UxCsYkTaQJ7NLhwzf8RBjSJaYpjXUPRLTjwsbCoLr38",
  "key30": "44HHp5rjQ7shcSBJYXMx5j3Q4R2i7jRG5YvUwL6ru8QBNcTNhCfijknESsGPneypMPqv3EFxj9GJWGbUNfSRvHkq",
  "key31": "4Km7LutF81xtkvrg8HVpA6K4vVGxT8WR49LNaBswkwvuJSt9LN9ZJ9MZjeBuS5faBz632NLhRv7yuVwQBoZTGgwP",
  "key32": "UqdcLbt5dYHBL3L9T5Hqw6hmDhN3ZUs9qTkfnyn28Ag2Mk8apdCjKcbbXmVX5FjH2CsHLj9TQog2jcHHW39PBju",
  "key33": "35N7KzrAtQa7QSykHSZSZSZfQ11qW1VPwdZu34oeTkAyq8NgqW5N8wraJgKCYYQoLSJ7CKwMXrEYw2th3HTPiuq8",
  "key34": "5dPsBTEEn5y2rYsPf6epb4TuLTCgRd9b2qd2uJSYy5hvtwUHUbAUJDK4PZkQCJQJh9yLXnRCaaKcc79tWr4LRwqd",
  "key35": "2W9RUnrG6PZWJzjZaTJj2UVnVKMrDTySjSWso6YPzjUwmXArUAiW3BLQrhSYeRyKXqT5ywQ3aaNe6SPfxYRnWsvk",
  "key36": "37vYsjdTQ92tPeHihDYGunbNBzQx1tG4k9fbmT6rzfXui67pev3uC19Awn2id5NGz7nHiSG3oem1ygyysU99AGjs",
  "key37": "2LppqV3ncuKQATWC1hoDB6PutSusT6eBD7xKHruSynKSXivh8vJBVVXoxg53kmk6v9rmUyA3Mc3NJmvYPUEE2nzv",
  "key38": "45zmByAGXuZG4NtEu5yKA8ngnd8FhcQXrH3HGxxwEVNz3FPJCpP9dbX434CMaybRx1C8e1VWe1b72VFCyEpZmJHD",
  "key39": "pti5UtcZRaq2DN1DqzW1bcS7i43Kbkv25Nrkqotu17vz59rnMsh2Cuzjvg6DET27hzGvkWAricNUkH3SfTkhQW3"
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
