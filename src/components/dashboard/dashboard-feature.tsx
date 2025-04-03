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
    "5mPwbyaLd9ViBDFzuuDgnmtVL2Cu4XBQCMaQ6271F6uijBM9yejHDdRK9rHd4TyY6XHmZH5Q3txCQaVi5eDTELZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DkXT5STk5E725nCp8mLYsUN1FK8V5Y4YvSxi5TT132ztyQWRUMzHXxTQJXbmiPjivpC3qpDuXgv7dpCW8TKjFm9",
  "key1": "8dDoszaMjAztj8CvFNiGvyx4ir92hUDjAXG11bVMbVTiH8oBoXMdjzJbLQyxBy3UVPAB2oCf7UMQsrSVbTiVj8n",
  "key2": "zLTT8D9JBr7cQbCjFnB1zHYJwoCEBL8kz1LhaSsjA57mEvAbEgFvRKUtsMiBe1CNcsWm4obxdwtLFYv3N6knk3x",
  "key3": "5jnMRYKg53iMW4o76zXRJ4QAnQXkL9nw4ycWC45JXWTsCLZXaNLDFsWmyDKRr1oBQtE4voSPWCebr5E5Bkp23JAe",
  "key4": "XJhNvEcVepaKPtJbpk9krngPtoGsWwKzJeXfos3FFXM1GVJqLF9kL4uFKzdvc9tRtmYxExK7CLfY8EKgVNKu2Zu",
  "key5": "2qJ5rFhyRV7ZbyjSV5wYw474ZfAjEDqkwjgMwFL4ncgRUDxgimpQQqAczdjYApk1ifRSCr3j5hqvYahNschngf9j",
  "key6": "2jvKbZ7hawh8RGAsQ9gD5gkW2Ut5KjjVKMst7Jfw69dsmzsVTJPKgQxtrnEynAPC9te8A2bkeNqvwwRcyA1BEfRf",
  "key7": "1BzUExRLFV2MyUGZCTYXgnDJqNFNnu4jdmjSWt9zr2Xk18eTGRpRj12QxUdhYZzjXEL7j55mx5gLMyu7mo5bsYH",
  "key8": "4rzW2UknWQ9gd43m7p6mAbbs1eenHWiNw2N2nsfkrR6GAPmJBBrvG2uBSaHTyrQkdNzrafbV5GnyUpPiaqCFnAUp",
  "key9": "45tvJwDrUmh8R8YBg4yqAbFrEdA7R5XhTQVdjRpLSEkqjnxMrQpwg5ravCsHGqmkUWYmnzfH7vJrUwyMayPqdMKY",
  "key10": "5EERgMNxsPfHDdFSkE31zMjFMMXAX8QAq5njp4G81rQMtD78obaF6P54vfDNCn7JFme6p1gguA11yo8QYteL8cXk",
  "key11": "5cjQbrzHTRRja9wHd17iLEn6PwTbkQYnXF3Za3tfJekGNEeSJEFaMnonsq7H23J6jJb7zF5NDyuFkJRZrsKkFNLY",
  "key12": "T6MRxvwEKEqBLTEkmvnC5oxi7CPk27hVPMTrATS4PxqHkWYFeSkYCTJKfPGBZkWdvffqv47mYFoZy3kBKj9LSCE",
  "key13": "31fad9VyhvhabqCRzDyprt6GT2a91XGmwk9M7k9ccQ76ND1AmFBC4AbRncLkBiu4nRb3oKJiPvoCmR1keduxjbfU",
  "key14": "451X4JRhq2dJnJp7zdG5kRCmnBhCutTjcqPEthHJhfAvTs8V5qR4ZgJwXvSaAStZPdEY8jjLi38MnJAxLs4mRFsj",
  "key15": "2HnUAGHwFzjx1JfdAJ32UJU3ieq3YMdTRsMVKuDoeNVVSmQUEjCstD2nXPTJha5xSf4nd5pTA8d9xq7WaTm9oUAh",
  "key16": "2z6VnQq8trwZiHMbV9F5MwKNLPyEKGpTHarkaAPywiUS8RKctDUUutVbyuqmuvmEdBVC11BHnj8zi5yswNDXfw5n",
  "key17": "3eXwHAjm4z47hkJ1JefqVrj29mscuLiYbJsGTo4iPw7StaGLxMdH6zzUjpQhLD1SvCUg3Z9Cta6F27ZJeimQoJ2s",
  "key18": "3pJzw4MpxWuojQvSp4d6eer8uVtBEJNUXvLWDKNWzF23WczDYgBst7DdkeSDA86khdTQXYfFHBkdHrjs8dHdbq1W",
  "key19": "4M3Tupg2Ada7uDYeR2VXohVAJVParHGPCG2Ej1dWvNpfLNvFK1sE6vzSMnCD7XC7Uevr1TXfTDv7xU6nGqAZxbzV",
  "key20": "E6gsZZ7Df4BVFV7D7bNsNhK8cyxBgnuurzPy9prAVGPsqswADaofZZBxgqPppJNCQKkRXR2V9Nq7s1tXoZTJUA8",
  "key21": "4xYdk1A5skgkzA3XW8VwCjXYtnXMxdgSrD8Y2GPdWGRJKYRyHU95MEFuzkkHUphasWaHjnCnLtnyWCtZn2wkM8Qc",
  "key22": "KQYr7CiXZY5aEHcXFmUPNTE2Z83wHvoyZAN2Hbg3NgKKVbPz1h84PJiFYHZvVQRydkSC1w3sCLQ4iB6k7TwEEnw",
  "key23": "4SFiiamNCV6fa7GZsiZy8hXBLcZ5ox3ZpVy9vLdsnjrZ3E2GfRnvXU2S9KeRBNqr5DtHaeriUigbBonwwtYGcbhF",
  "key24": "65kmnYzX9MTkizBRjAU2YZujKqxQrUTdfzZ8c3S51QAF69UuwBp56K1JTAceF3Vd361FYGjbdtCE6nVxWs31siz1",
  "key25": "5mLNXYZzRqUBkjS9uJhTez3iC5nfP5zGoZLaerNhKDazSCDpfbhPzwE9GvvXM5rL2Nnd2nMKgLbQqNtjhCM6VvvR",
  "key26": "48a9etpRTtpEJbZu1DBZSyitTQxRDXz6hW3uBnPNKLNpmx1U573DKc3ck8upndL9hCCaSG2bTmgfYG3KjTKvJAsR",
  "key27": "cxn1DZBxV6gULomVZbZYrpgsevW9VSUk8P6nhz99dbm6sdYsZQ9dsb5jjQpiUCz1P95HNBbnZXkmHEefeEm8KuC",
  "key28": "5kELbSABR9fBFUTiKJfDwpd5FN8njikhRzuGtpBGPkCRyUGzvpPLK2Gvp3wMZPokU7oLnW2TshVLrcAZ9iyaPuBp",
  "key29": "5sssmij3W51WwQ89esHjMgxGhSo2CQdSV2i5VFfFmwzYV65cvtP4CcYcD6dHFgqt6n57bPYCuKB35kGh5AB7Qvz5",
  "key30": "SYJfi1VfRmGEVyEULUYyTYk1p6yi59S3vB6sF1n7yqTsCjv3mhEjT89JEjcoihJihSQipfCg3t5J6kMAEzirJEw",
  "key31": "vKC7UtgXftJGRaEUGxhKCsshWuFvwnAvVGak3EfMKhHqUafNcyN4B7biqYGRGRcajjGDKjRD8MKi5sp3VHqB6cY",
  "key32": "62QYmRCHsqMWDFeT7oxnXVTU2TaYfqBGVfaV8kXSVy4aK5nHELXEhRTtpj4JcJvuTKLnrZv4M59o1jvGW9VVTwnd",
  "key33": "2eg3beyffS4kyxvq4nVb5ZxWtPzJbQDuSfoaLutQwPhVJqG7bJXaJumSS4WGG6xDfRyfV9rBAPoNzqn8sy3zNvKG",
  "key34": "5mSq9d3S5LnXSqNyNJJn4oBwCgxiEtHvzUbMekkTQUYHSY7qfYTMJNAiqb4CWQnyjGKWgJJaWgdq4xT4ArVTsJGy",
  "key35": "26XAijZ1P5DYvp7nT6qjnTnTZZut7vonr2nzKosp1nw36V2oUV7uUVFFkV4FEyWG3fDBNjNB2EykB1HfVsMAttSR"
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
