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
    "3wrSaY5n3RGZSL97QSUXF7yZmiK4bkH5tEZkpJ9kqUvazxH7h81SF96FS6dtn1SZic4RYKwYZKZtnvVFPpMMjD8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkCew6FMbMGywHr2criEjxC1A8NARy79WBk4bcMrNWBNYd2ncH6WPS89UmQi1jr8AztUXYhGVLQmFboCudBuzUh",
  "key1": "3AAF7DXAz9SWkDD1fHphabtdXcqvjB9ikGz8TVuU9dQ9x7aqRaP3PagQD5g3f4V6S87ADRbssdbHRGsHuyDsDUfF",
  "key2": "4W2QE9Lg9mgBpz99xwths6AE4DNqCUz7KneaFKBEHg5aW2JggtcLQ7D9mK63px9bWdhdxakGmSY81xRxTQpFBNei",
  "key3": "21pqTZGzYzqE1G5y54qQrmyxmdHZqT9EhApTzHkJSJsSzT2pPP4Ef6sqh4hCxXtQWMr4fBwriiLcepiDKnY1W3rC",
  "key4": "mgq3RAp5H4eqettoxZhEwFpPCZB6Qdb4AATjTTVn2YSpChMYHYwHDWypr18EUwQvsMQbCGR6YDV7Pcg6Z4WS7Ad",
  "key5": "4Uc9fGGAWbtCauHD6TwSLdsA8BBPpb4918tHjXZEdusjpmtd7LsMR93BzUwQamj3xAgqerEGvejV7qay41RbPj8t",
  "key6": "3E4i588KrKELX9wPfmrrNc9mATPoc2QfAbrRmib7z1NXPPpJjNgCkLXACSchz5PDHBkfz3j7xQqyEx6GZvRdy3Mp",
  "key7": "CXLiegHmxm2PM7kvZwNxQZdP2bJ8tiwyU6UNXdjWNxGhLhf2pDTGREte5Ted9bW1kJWLX6aXPYA43s3Anj65eTN",
  "key8": "5hHgRq8bHd43uthCW4F95wS37ocKY8TJoXXPNbb3QKLwfugZ5PY9QvHriLZkXr1NztiACFgPvkMH4NQuuM3rpjDR",
  "key9": "DHv87UniHnxEPNZsXpyqPvmHekhmrFpmtbbXtdsKLvDq6E7GkhYHjecJGCuUBbTQv4DYLoM86pYuDcTk883qD98",
  "key10": "4weeyJZTfpvRpXQAGXtEiJytSWSGoQQwuVYv9whWfF3W3sPSJDTtzoB5a4RchBbLxvsT5ZBKA4JE2jQmFDsJGmNd",
  "key11": "4VDtbRiXMpaV6zjVEfzpyNwEo8NARhFXZXVvGcADHk5EwxjCmiCPZHxmFZhxkUEuc385sNkkXfFgTxJanEd2towE",
  "key12": "2TPLskiibthfrXSwXuZtRReTAT5hkTkUvKbNyWwHbm1Fs2y2Z6QCydthb4geSxUhsgmqGrFK9BvgiCLL2gwyCTPv",
  "key13": "5KAk9mZhRUs1e1woDT6BomQeQpsG3Cc1awcksdLjhp1AnKixN5Lu45MZu8SfRQu3quw6HznUf4cPAUpHpuZ3CmMM",
  "key14": "4NWg4ZHmxmnd2NTiGQsjiJU9qcg9UsqN2VHBfL5uvNRtzNEDUXxWAYM7YJPyh3RM6G7WrgtBeHPqBeXq3Z97T6C8",
  "key15": "3pVKHpjfdQnPJyR1MCvftvLx7mQyaYNunKiLgG3en8Mm69oj8G9bqgZWK5pFDzbUfP26TrjKfrvHcMmTNhsDf7ir",
  "key16": "tamE5Q36wayFZZvxsqJNc4pj84dTu74Z1QhmQs8hhcvkAmYFh8nhWxGZPUW5WWg2LqdbK6Y2as3S5pNcA8iVEVu",
  "key17": "5j3R1jZKmjTaYGcyHJxuXGN38BqoZobQUmyTYmg6YMhLbNmn61T11h8VoegD7MrzWKLQtX3STm7L2DtHecx3Z1Qu",
  "key18": "gqep1mC9E3rybWUpi2s4S6pW47Qup4p8TrwD2hiTHtgnTzotNP5LP4kjb5zt4NAvir5H63bsseKXYBqVRXfoJrV",
  "key19": "3AUa3hiNLNHkapzfyfskLYSmoXDZD9TnCct66KbrVD8MFquJydG94FEMU558r1AY7hMKZuG1w8uPhqx262fKu5Rc",
  "key20": "5rHsRNimroR1vYEq1gmMr3Krun4Rza198Qy7hZ7weFPXvfQs8DgiGjPyKYevvNv6usbSQmbQBT7BT5LnNbghNukK",
  "key21": "54GFneCA5sgKXf3586hPU7F8g7cRpPLYBWwNKiaQf2NJuNdsaaykdkGiXDNjb1MeuwSu7QAMuKgJ4YSC3HRcUCTr",
  "key22": "5tfdgSZq3coprnkrGuH8LVkTrqdLnBiYTozb1xnXqYiZuRFTn3yHSbPgAnAwR7RrKTyBTrfCsCHmt5CEVCzM3nJN",
  "key23": "iu1bFxaVopazQXoCfpXgHqQ6pJR4SKCkzajN6yVnrjGhCDnp4qaQph8hCLGp5e1Aj2mKsC1qfom9trVdBfL2zGv",
  "key24": "2FowEZpS77LufH1fNNEL5cihAAyQqZw2HBjpv89uPDMV7zzwneFP6KC9uzvZnbUtH5gkiN69xnXZWiYVNJHfUAb1",
  "key25": "3CRsc8Q8a6Yk8K7VnxkEV2AQbCncYnrGAakfh37fckPT2ZGDM2uf1XbcWsGPtM1YMZXyJDTLRhatLh9Mq7o237Cx",
  "key26": "5YSfoKDtxyazaBXrPCRz7vPS4JKWXFQWPX1D1GbYrtgNNpwcPxw1wync3zut7mjHjFebBR9yQ7o8eChzCGo3dPVN",
  "key27": "JuVYqCcBat7UJeypYYfNb2y7P7whJi8Efgh1v5sDUhma5NcvG5nRXxp3xdECPDi7HHBVofPkv1B3ccrZMPi6ToT",
  "key28": "2Tb9NVfPyUYPzGsKidXByxDQVXn3ezHKr5rBE1jYsQNjn83jhwsmFfbT6PrFGvBGQUH84xadCAj2HtSZWjy7QY1w",
  "key29": "4xFRgWW7XR3LSWbaUminRTmgDVv6VvcryH4hsTBaraHFYBQwUN35oYVeDVu1PAPsJ2hs97nMqxkY5xt4Q1VwEKdF",
  "key30": "cYFt1zSEcMRgXZerPou8bL2wp3zE4baFTY5dWg3px7o21cbT96Vp18kGzEnrHewusdH7cuM2wMFfsA2FTZN8ywd",
  "key31": "4akax4MnWsiuFCbFai9tMiFqh6a4nqN6Bex7uecX2nmPm54x7c2z8JsEmjSRGfwyen9rcZpUKSb4KbwpoyTVnQjf",
  "key32": "5PifkxGtncuLbFCnAkmXpfdZYirM9EJBjYnkfWCasALHeiHaspkb9QYkTuekrKjJFr449yR5TgW1Np9MTfvdg5Lg",
  "key33": "35ezrqSF4csZS7GZq2hPQ41TXFLrmWRKyptp9qJPPTzNU27JCVfWzDDJitKe4h38Joav2T8DUEDxrSzZVBfiJMn6",
  "key34": "4d8XYG8KN2TMjCKdS6beQqj1VSpiUXf54Wz5ZHTcgUQqG1SjGQ96CsuWW9vUKUGeAXjDcJTTZbQtsZG8FSXCEjNM"
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
