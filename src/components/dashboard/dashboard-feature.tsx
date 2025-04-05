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
    "3LBsaRu1UiXw8TbULqp9vZ81EaNkCHUce2Msc7vrNm3sPKSNTK8oGKwpcYkeZ9t3tLcxZxbHQHfj3U86LuqSvsnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Pc5fun6iyqo9GgDYLpaw9EWSCnvsqxLo4JJNeN4mHq3RP2rj3T1CdfZG8gyrqg8sRwWz7oFiGpm2nJxWuGv2U3",
  "key1": "4v7xrxeGa5Rjz3P782SyUEH1HXLuJns4UB6rctdXCBoFi6R5TATi82YEvqbdfwk7tQnvdYe4RzTuMLGWfLLEFtUq",
  "key2": "3U86mAGKjh9diVZFBqcsjbyFrpM9CYMLUCS34idgQoxVd3H3UU5yD1TkNw1kfjCvb4FHGfekVeCrJFNwk292igmc",
  "key3": "4TeXdPkYr6BpHiDcn5fojmCbgFZZfSK2eZmaHdrojBukeWkT6B3HCoHu13ovRwS6SmChbCrX9y5u1BxoVQhmFP3w",
  "key4": "4N4GeeiYJG2AnaeUbiRUBqTRu5MzHqGH517yeYjZq62ydEQR3PbU9h78kyZhE9STAXhdSd2Y6URhR4uychUUuzAs",
  "key5": "5CJasF71acwG2zb6Zbh9tYGDTaekfQ5AtLwhbcS6Pr3yQFvgABcJMzu3rfkQcsLHa2Rxcy1tCTo5ygtTC6V31sVm",
  "key6": "3aPrQtDGgzygWRSSvWXPzvSBrESkcNgZ5CQtQpwCCDLKFfTW73WUcZQ3GZpYFHCwQtqhqjVfNBoszUMVKoSc5HRm",
  "key7": "5RNWPpZDk4FYxLs5eQtmwGYRPc5NmDV6VmazMtFwdLwmJENPhKiHQsiroRF5gnsMZXvWJKRheTCZLgrDyp5WY5v8",
  "key8": "FyCASzBeg1xpSRnZaJHYtmsABjC5bqEavZw9Q8sMxCZARjMMF6ZRm5G9DaeyENjJdXPBZbDMfQFkQmYn7F5FBNG",
  "key9": "5UjB4s6zZdnER4uDzUfteHPcmT71rRKfg98oo5Np3KnqB6q4S2fDCurU4FRH2N3fdQ7KaASJo8JviTauYEftfEda",
  "key10": "5da7oeMW5RMLT9zMiKD4xBKYXkiCyRRZsecmNWxyhd1pNwSwnpoS1uEDmV51VvBxATSDGHKLufG96qTRogCsc286",
  "key11": "4PNzwRBUQ4LSTMRHWuUz7X4M6KTPAKcikzr4a1GAzqmxMctiLLzVkRhc6nfpAL7FNnK5Q1e6cZQSiKRkvonoQ88Y",
  "key12": "3BfEYgK1c4ECQQsELJsk7ZGywrNLiGQ5toJGQdDp1VNziyLNgvdpepuZC2MnEehQZiePvuNQ1sa9uZNJWzeDS1rX",
  "key13": "338wnJuxGC5ELwGk2z1qkSN5WbdRgo22AgpXbwzNnE8uRNa2gRrPCqWncBcBFoWnz39YKe36j7rbCUwYdVQEVYgq",
  "key14": "MVha2KLjQTH1p8FsKDdFbFdhMcvfnKAK5TwL6hyRvubnS1sVZohLF76aZtVGRf925g8cTvYPSKTQzaptJu2fkyK",
  "key15": "5yX3yepVpzro5FmJAnRyaE39zZQGyRHFfwzXvP19KASgNDW9gkAHJxT27dNrqJmGhXds6ndm6qFPhK7gQPFmeGkZ",
  "key16": "22odpJ8RR3Qz2vKCY3bUKvmsTzQX9tnXHR9CDg6aVuBm6iuLifdDBs21fUYvBzKdDGsePcrVeySdaomprot65RG3",
  "key17": "4LZBtMf8h1X4CQEznEGjiPYxYzGjRZn86FqKQVLQdYja2yzTtCUz4sCyAjRNaKq7xQFpMK3Xh8WeZSBtccPsxUCt",
  "key18": "3bSj3dU6TQSjM2jka3dVV8yw2QY5CY95zfoKaTuZeLtgGH7aM4WXBYFJ4QbrWFdZwgyPSDyyYmps3sjq7yChaWfM",
  "key19": "51pRL7Y7spiJjmyFkodEnHuCU9aFUP7EZ2PPSqJGh8H2NtPqFq1NfnfVHhH2SUvzCJvsfUEtpjpruLbPe7xAa3ka",
  "key20": "5wvbeP3Tr184AixkhfEp8jEF2iJBQ8fgAwu2jTAicG65FH8U69ygg83SF5Ucgde4PEWagYKMPGdwRs8XguELpL92",
  "key21": "2xDKQ9EvHW6Fp2svB5DaP6GyhxKLEBcKgSh6GsQ9ckpXbHq4NZ3TCnAVBXxqYuRd3eFHtohpwwgxU9ob3Pn4W2jD",
  "key22": "KiHcRr4tdYx5we3GfHLUa6DqCEcNGjW1U5eqLhNgVri2YVq14w5FQtpoRAETjB92Ufii1ffYx5rceG5DEvFMqV8",
  "key23": "2S4pAXaR5QLdNCSnHBvNkTHDxa35QQUqf7UkxqYxDX5jpnMZPBY7tZpSV9JvRkrVJNtMFpMDazrvVhMV3WQdZiXi",
  "key24": "3xyzVbfGxZ5w2FJWT1iCEKNRpBXixdabVv9sSN2nVRYpsRVy2HvLWCt3L8ZBzPbXNM2wzSVqpqwZPzePfjeLPKvN",
  "key25": "2Z6ngf8BMJuNCbVeNv1jCSQNpLFk6npXhg1McL2rXeBEpF1ic4eEjxa3QEDin5KpUMM2heRVVBoSLcSigWsgnPW8",
  "key26": "47WjJeQKh2Uh16KyHrALr6KQWwoy7YCwr8rF4G1FtcwYGBVnhLHMJ3xXdwMsEr11D5Eg64DTYYEhq4UFb1sKpiQk",
  "key27": "5x5NSGoabMmi5J5UHxMbgCVEXSKqgkDdi2j38U3nHQrfex4AyzBgXm3ZcQZVefD31fCkkv5wDciGephTs5YMsbBK",
  "key28": "3eH4Z1wPveH4ZHs7puBajwPv4ztxmiGWzXfTLo6Tz7DjJE3WTL2rC1vm7BdNjgTaAkYDJAKbJvTf9QKauSBxrkev",
  "key29": "W4mJKNa8P5GGAaTz3dRVRdQthJA4BBNnrNrwjVGRpk7Ukiqueji2Bwm2yWvnJWxyJG3f6bUbsMPkXu7vEn6LAyX",
  "key30": "3XsUd9Eez2qPMAEo1mTs9nJVQPWwWimC2TJaAhphKQyYMNhR7b2hHBWhGXt8Fd29wLSp2u7hqNsaGe61iZQNA8pa",
  "key31": "52P2RhwPEMrRQ94uMq3XusjpSXmLKFggR4Zdwhhykj8Aq2dM9NDFkucCNJrdVtdZ3kctLie5S8dXrP6uSubKSGk4",
  "key32": "3qTaEmfVXAC4F624pqPYxc1M4aYWRSWaaUkvXWBrzBqVFJCfQ8W9DGpSWgaRVgDRNerHcRBLeKhwchPfuScGHc4c",
  "key33": "3c2xpWCUH97zbomC8a8ebjWaEQh9rgFNMB9GzxKqadir6tPSjKvyQeRQkPBDDCxnqMVgzD4NTcLh2DXiLwR1pd7g"
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
