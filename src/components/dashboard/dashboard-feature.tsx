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
    "3R2Cycsyk7qU5rdRyUEecNMP5nNJUsL5H5J9F65QvKm6be8FnLJM4gfwFU9QJFEbPWz5XfxAsCtnAipxiX8muERw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJR7U9HgKwYRras75MrZShjhhHtiCQCqjeJBcnSfCS8b1ckACXReQVn1QoyBi9KecFCCt8B4884qhCNyTMVioCQ",
  "key1": "2C2DMaNa66KYdY9s7SZGqoaNUYEtYE9nY1oKkvQPQRqJvinh8bRi4YKMM7DWQxQs17TRS5TxXWU1K1RBXFHxDQ3Y",
  "key2": "56P7Vys3hXuD3PDn6Tj7mQi5B5x9tCCDT3Ye3EffXrBcMJDgcbRfmLzEANQRG7TFDdnEWVA3xS29TjmxiERVpYcT",
  "key3": "4MxSLP3UX1iRCaYQhyFAtPacd9YmJDLkLijM2Hr4xuspE6sKUEziLhMdBhUXmUNZtpZE3psi7x31q8Rz747V5apy",
  "key4": "emLRLLQYcXtpnSi9hYp2Dxz6CdajZZWDwFuuf3R3t9nV9xNT8WESUawXVw7K65MCUVtt7LNLLMvxZ5546D83FQF",
  "key5": "5iHfdFyHAtYNFphu9x6yovUqv1HhGVGZntxGbCCJ7FMry9FicSkiNLuZQy6LrkPL4yugh5Fx9Ms3suj7LQh9Nn65",
  "key6": "aigY4feYjPd4rGDG7EVbPvBotNjruyKgkJAoj77ChBwAN5HwTbsJZtkoiLpV8KFa9xHnsdAH3PLBKydqCZa4hGN",
  "key7": "596sTgqvkpAXtb7yULcP1UU1ABScU51Uezw3HN1LHj3AbDkXTvSk3Jg2EPrqn6ZrJ5NBumZU5fEwdJhZ7d7cZbeK",
  "key8": "24uTk3cBVziSKF4wJ5zou28swzMvJJicSNo27eH4tMmxhAXRzXAMous6vopawX6BugoP22opsZHhuS6HG8hCr4Ht",
  "key9": "3PGToryD3N4DhQ2nvhBTsmENGuLnx94w8f8ApPe2USTm5QKpKBQ319CRZa3oZhShxB869Wru8C93mkTf6gxygcrt",
  "key10": "5mYph2xJ58Cspa1FJwVd2jWCtvTu7Z4kbjUC8MLWAQaengZeq3TFHdAq2Lu1VQPEchpqYSnEM6bW7KsnmzMzUBZm",
  "key11": "5oNGUjkYe2pJrMotPiTASZKvM9N3mK4wYu9ajQw3VvuvoaXTyzuyLGhYyCAXtrf8skAMTgoLiJ5DbNex52sELsXo",
  "key12": "oyYRxfksHMs6Z9MjDHXn74WmjjicjwqNYAjNqondNv3RyQ8bBVdQ7dNt69v1RjWZUgbRvEV3BLopnXEn3rQFa5V",
  "key13": "379aBbyKmmsa4eioXTU5XRfSUAv6KFDAhux4LKf6nCDvLYdWEXSF7bqs9wzW3ZzjVNaUqTjLhTs7wcuCmmDrMMaV",
  "key14": "5zuuPR7Tc9CKGPutnXvxX7krNKnNpYPaCHH3QZYkaHKzY3hEqpgHW6ywfjMrEADvdg6iKtWFKu3GdEgeuHFGKfi6",
  "key15": "2hwA3pzz5DjiAoncTsAfht6ruu1p7Gr5tDo7TUWKuMRprG9ymGk6qUZkAq7EBaoqrKWX9u3UMTPQaYr5SB2SH672",
  "key16": "3xwbtWzFUDEeMAmHBg56VUQbrcJ9eb8osyLpoN76rvE8HxnpCKp4Kn7q4p7bikXEGj7qy6RqmKrggYUEMcaWCAot",
  "key17": "45vwZ8UDhxMct2HxjidS6AEaMwahvLqrHapxm1ezMELuCNWhbWXzj6A5hgaMonmnfd39Gx4dQXqJoX5roQFLYsWP",
  "key18": "3A33p7uD3E3JhN3m8vcV3Rv8s2uNJD2nZaEGS2owC1y1wSowJmwzwNjUy22n3KMn1X5ozxJeaeimWeosfAf7VX5b",
  "key19": "5zjX2MxuC8CNqtT7zbpRsE2hdxy2cdCws7AQWmcDmGUkjAr1aNrqMBx56744vauKjTsH55z6dHXBu6PwniFNRr1s",
  "key20": "3SnoCYPeUmBbPxhfJTnAFFjxHuo4YdsBjdM6jsM1w6naSrrv7sStDEjqt5vDGe8Lx2bwDtfz2H9h7tZpyVQihidx",
  "key21": "2YoMZdp8B7sRe16eHLJKwr4RfvMt48wX3cxtwb12sSEf5ZCWGnjEeX4h3sWeM7L3yxXTAwYHmneTCmhHSrCACEZA",
  "key22": "5XYihmj9sKQU9eV62k9EQ9AGaPy3dfsp5CMi6i9RXjH4q218pceU9i6mTUbGtgN7Bw9VHQwbcPuh9x64Kzam795r",
  "key23": "3FH9TQLbqsS7aJr9iCb7ftTMhNejs2wMQVcK9mFwsgkhtqYvZCBVDqPkEUi2RDkyeH2i4yZcCCH1vRVZhZJkv2ED",
  "key24": "ps1vG5fyjzmyH1mE7fkbzdyncTBdzBtK7M6TWYJUQXvoqMB3XgtGDTU1w4bC516EJurHGCZ31GTz6GrAsYxxv8p",
  "key25": "y2Xq3WJgip5o8AQtnbk2vqmErWivUGRNpNi8FX3i5JWHLy3oe7xckoFh8WU67rXvA2EyK6fWR8Xe3GaeViZWXth",
  "key26": "2fNLKfjFdN7hQNDU6ApEWdqae87gBykJNyP9mHMvmF9fxKcbuEk2GM3CCSzHqC6wJB4y7796hBwLwDdU3YV1rRY2",
  "key27": "FeRsqLcCVWVcDf7tCTtNSW5SjXNZawE7zehnxHE6HyHnqQW4hKDoQXRptsN7kF9tymqwLG8ytKGCjJwXKUyHJ4U",
  "key28": "51PMvypNdVVGSfuCJAVuVsgDUas225Z5XC35D46b8toRf6YLoP3kztQrxGx6xcynTNxBujSKo3gF9je3HUuMb1a7",
  "key29": "5bKW92NZQg6prmAUECpF2ZSGS9aXZUQR4AHk5WccwCdNccyPzcy7PLzkmV88PbXVWidxutJGMEXD17Lh4MbTKzbc",
  "key30": "tAEjxQgyfak2beWtVRLdeicwzGb2MbqpsJza6AaixZnWS5SKSVKAdP2jrwyAyWNSW11gtiG96Zd38FMEB2kQw5E",
  "key31": "23WjBye7z7bxFivprGpRrzqKqLGqXEfrwbmMxpvQp5eUSrCwUcERqAmXz7iwWqgpD3oQN7ZtUGsDgA68E8vGTQTq",
  "key32": "4tKsMYqkphg5exjQFH1f23hpRjvCTQm9E8cQqfwMPtQZGZa1Wkot2yKV5i3NASmDVkJiMtVfWnRyKAAoRuHS9c5c",
  "key33": "5bVqZgaRAKNUWePmHkZy72re5rVBBDTHiNt2EeXQQRuRFfgRMTbgfonaDtLYKLQAK8Mpb7Szxp6oqJzN4mDXsQ4Y",
  "key34": "4CGnaWjTNTTg2KuyZCeYAckTVKrFxGBMRqomPp7sRJaDkJC6U6o15djJyU1jEz9Sz91LvTP2wBQRaXTFb8eK3q8D",
  "key35": "2QsnXmYe8mhZzjFhMZqsfCS5QrRtA5yHfK4RnpFFcehGxCs3tYBNkNoGarLrsRyhLgP1fHh7CizftDQyZi2G4TRr",
  "key36": "2oCZjqtYzmdJECR7C5vZYjDFehoDGRDUxMcFhhTaebjkTQ3y3FcN8BH5MHonyidRKhVKmt2sf57RrnvUV6gS6ecK",
  "key37": "5wvR4HYHLDSDnY5UYifFr1fJ6qZLeNAfyXbh1PmvHXHxWvqotSGnKMMd2JLEeQ1FPjbhuFQoYU7QfbJwG3gUtR8r"
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
