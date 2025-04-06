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
    "ACdAQcuMpgQEXt5FZKiPqAWbuEhbLJdmHSTyt83jTD93xspHhoLkc6VpjocaxqWmn5vcv31APeaytnjC2EL8TEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THAthLsQb6VvTQg6NsvuJG2GvJvq8d5dbWrpYMZ6xiuXzw12FEgQxJS6jNZk4cgWbB8AHb1BdfwhDNeTLQ2z4dX",
  "key1": "3KmzN7fpTj7h6eTZDiZtGfhBb7amWKWGFEngA8Zw83T6TEoPGCwVo4XTPPBvVE2ubSv6ogLURx33gZRFhw6McuTP",
  "key2": "49s4c7x8h4wkwoy3KBBSBCjDNQc4KoVmkXcJapA8sUzVCRTvXPxGtQgEmyBUKht2uMB4m42rSWfAesFP3WXqoCVg",
  "key3": "2Xu5SzujzAiCCm5W1J6xK77Wbxh67aJaTBrUJUsjVAnCtBED8cXiLTpXt4mXHkG9LA1ZX2H7R6XmjVXBCnhr4Kvk",
  "key4": "26Ex3zwJRcjFyKZUMjKfYAktYZoh5vo8YjzrC32zwGYVK2EVwdrnDCXyv2WSszJFngQg3Bez4mQZJLJ97mBMq5e9",
  "key5": "5ZLoicsZ34Y7erQPhjXHP4weRW6WoKnooadQm8hG5P7qCFvUa8xTpfUA4TH4c4zAFfkGgQQrf9uKdrNnXZvA4XFh",
  "key6": "3EATWbVF5fk8zC8uStDs49Fai99Yp9FraimZAovCsLwngekZcTCZEvtewwSyh2BJ6GqhhhdWVoMTSpQb9A5j3q1f",
  "key7": "R2tsMujzJcwmxxjmcVHWVAPHEqhcuL7sNhXcjAXAENeoQumRCbw182AvN74EKUGqrVkMxXYsbdQqBZCHiWxHwMy",
  "key8": "3PGYxpXHoMuPT6k3LinHnH4mYkMKAtxQ9SeFG2ko8aZ56pQAVnXBVwr4nRzh6fva8F4vqzVv97f3PxwPdEQ3CXUN",
  "key9": "3qk2xDHrt9vbQ8gxByqgzMwow17n6oUr9Kbo4AKGLegyUWT1ADm2Z2HPm28RxS8gRNvvqsBc2Ba2nRYu4SbNvDTY",
  "key10": "MEvFp4mCiGpKzuU8bz8fZHw2rwRSGmNBL14bA29ijVGnCMvJSjgbNkuu126woDp6dKyHvbtxP7fWfX1RUVtYtRp",
  "key11": "4hzwKduFM8dHNrmVQYDmSTK5ySkW8jzSaRj9HjNDMSThoZvQH3arQL6o5hkoLxPExu6N5139frZzZfRPfzcHK7y5",
  "key12": "DW86J1oZayXvSk41eFuZS8iS4ca3GF9C7hCRixZ2mrQk7oAUtFDNbWwGDfYUqfHpJwoyCk9dUfN9CpKkRhSK9Gg",
  "key13": "4Q8NDrU8my62NfhagPrAXzEuKCQtURPYVBKUQ8NP5BHQDKPHUfuhvomoQJcHXasRXk2hYLpRHRkiPu2QxmMeMcjj",
  "key14": "36nnN6rhSqnn6pEcCpAFpYCVZH1xueidEificxsgZwi7CpXb5PW2am6HQ7Kv6nuz2Uo7qs9zHVyZyuXK5dUCRagv",
  "key15": "3jSmhmbu3uN6srMgBwYxqDSf67DPUd8VUBV6fD7nymL2uY7pzP9BmCQcyj9yKSxTfPEK896N1Ef14RzJRoUhC2XR",
  "key16": "4j6F2w9uNsFCAXrDbpy5KWbH8aMdVe3qHs4VNr4zoYd9NTUZKdjErKeSWqqu7fH4NtvMtRTJ5BtQeXSxmThA5CgP",
  "key17": "4qMgC9GWEvoC1HhaWexcaxcm6LtVE9xG7ZwA6MHXmYbhxdGY4HYqXbnUuymNv4XDqCaoKi9BJamaMo5icS1jLJfT",
  "key18": "2PvCH4ruYS4BFzkg89be5ra3gvEAmK1oKgQwLy7y68SXworCU3oD1U61DuHrqnn1rpjtgDTrsw2Bd6QcnRS7HheD",
  "key19": "3upSWXezPBwk3x4UKQ5fDcsMJKX1x3RUWup1bNncQe7CWJESFaWno3NjVrARq2UrtbED4457JBR6bqHiqi43nZU3",
  "key20": "31ZcfF39tw4uUtFAawKMKPxMFUa5KfQ7pZ4icN7aVu7sWiu4DKMoCgprbn3gYZGzb2ZZ2UunzZYiobJSn7qCSP1r",
  "key21": "3xbKu7mP3zxpbnRFuf7RVM9bTfQ9QqEZYUwdfCUPPf4TGd9B1cssKDZ5PZVRmpQkapuqvYKCp4UP7HhMa9KS8cDJ",
  "key22": "3zv1bP6WtT5W4T5MpZyHcxfYPuHwih4f6uxD6T29Q78XmDxo7KS1oqKwFFa4RxuyhxdZSewU57jTVD6R6wgoES9R",
  "key23": "PrUVeJmWrvHgqYoUyNhW4h8oYEYAkz4kqtLKG2c1V8yt1XFwkQYEfUh6BYEgBjv2FdCLrttPBcRF9MKHNLXjaoT",
  "key24": "2x7CPyfAiJZjpUJnuUbNM8f8T9NDtLwNb8g14P1DHv9V4r8b4Kp2HedmNCQzYxQda5afwEmp8nJkLjRLVScJoSKT",
  "key25": "3r3sASBJ887xnVRh5vobb5fxqNe5frQc4hFQLthk7PYFjfP7nSdjGuW5noJxj16Hw6v6JsuD6jTDLxi3KGPoFqvv",
  "key26": "4RY2SHgesjwsc7FgyjpAPk1bi9AbAkK1QuzU5cbA3BJLQNxE7ksPEK8E1cd1PLazGiESNerzSWo3FwJvuW8QWP9T",
  "key27": "3KtDNPKzpVshipD35eV9foYzupG9m2dqySDktpjezmHU1yrFjmUwrzRqHzKWtLBuCZQFnWqQD7B1zfuENJKB1TUZ",
  "key28": "62Bev7gKx9Am3Gsa1RYa9VrcWQyh4bLK8Ci69aV1CcxuVVEcdRhDzU3Az2dV3jaWMbDU7Lu4biKCXCubutakZVLA",
  "key29": "4jvJGXWcnXuYC7uPY9J4oEkPNqULXBBEUYpjMYPDhoSoiWRmRLzxVcy7pJYCNhzgpPrYr1VVcMEcxYn6oCqGiADR",
  "key30": "4JyfesNP8mWQh6LAUfKgLFxM5ozmvCvjJiKxgKMaHk72YQFm1Kq7Dc5WtsS2kTDCN6kEs6X5L7kUXNGDfqA94Svw",
  "key31": "4qZs7vEXxbPEAnHNqbgtma3eT3Qr8PiGXiTEBnHmEuGfw8Eq4aZoVKSTBiGte6ZQDLJwd36AMP5fHQv4S2KUxMcN",
  "key32": "3pauH8JvxQ11sQbwxmkybAtpHcuLT7ZZPctmEEGG2jL8WnnRzaebKvrwHFY9iEB5TxzdYadK9ao8kw8VH4okV5e9",
  "key33": "5rLjrStMcfFbfwFQ9rxYZzFZ6XjXMXgAfLRkuxhpzDo6H8ZJBGUAZmCvNs29gZgqqGBkFPKJ15LnM17FLWxHenLo",
  "key34": "3vnZNRySgacE5tXtJm13AdgDFbscQVWFztRcXLLn4voNpdWJE4wifkqVT1w2JKmm2LyRnhJXLRH2an7436paoNCS",
  "key35": "3RMNMmGv59srdx29sgqjmyaLXyecwwnjg8i56nTCfuYMPaP4ww9EVGjgRN68svkh57EjJenLyFGYfkRnG1rpVpas",
  "key36": "5AZ17ZKe7jB753djyvBJD1fcVCjMWPo8ETx7nVmuRdAz2MsN5g5J6rtcEhsXNS3CywabDdKkLBhX5AnSYNTuZRDo"
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
