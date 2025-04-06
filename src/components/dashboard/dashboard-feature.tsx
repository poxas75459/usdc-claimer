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
    "5VVZfh7hiJk8AYzBDMXmuEvnh5VCkLCwEng9dyQfz3bTWBANk777J1cJsuvZnffjYpyB7doZkexcEMuVbnGdhWAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Je6cAvfWXpNufZ61Ds8d9WdgH5yWgGD2WssjF4hCpkX4KnVfAKk1SaJC863PyL5tUBhrYA9PPTmDjvWczpEtA2g",
  "key1": "66e8284oxbL3Q72QaHBftNERUARcwbtyYtZ33x2ds2HEBzZ57LAWA7QQPuiHWpij8VFFRimYxajXcZHnTjeGCzkr",
  "key2": "3QXT2i3cwWe1oqj9Ec1QMqrrkupGdVphmKXs11wA2qaBSHvuXBjRXytTNZmWiV3ugJExnwLpzucn2NizQGJjCFpU",
  "key3": "4hQtuwnW4VqugbxapAYMwXceRxQ3kFg6ZNhr3KFFun3Ro6C4s59eE7dMieWDW8a6kayFA4WPBVTnfjHnn3RncxFf",
  "key4": "46rkhXuuXore3jAvnASNizWqmc4SUQsq1cLfdiPbtvaZLnGAy32UfKBmVFh6UPeBti9oabPD6siWhPHkTPNUV7Fp",
  "key5": "4BASv93rwvNewqFH19KFjcGprx1gK2vpn2TRr12neSQk38jBjsQ5WUSgf7SFZ8DaZo21LQfR9H89GLFJNLvQoTve",
  "key6": "5ZE6ifS31zj5tjRD31ggPs2jK9JPD7GK9T6q5jXxgs8HqsJ4QEFhZAorDWdxmtwKbmiMLXfGfTmdweRBjvzhNDwE",
  "key7": "3vcUbRNR4tc98SaurGPScYkfzYYXmq8Wjv5258j4vYcN5ifXB6TPx8i9RQL18UvwRy1scd2V4rr4EimwqF1rNPzu",
  "key8": "iqfSCxdJBZDZvpD2xvabczpXFsmC9cTJrkopVZPWYg8HWZD1WnLfRZy5w91Sycf44nSyyFc5qBTCPdKgM9GqCP9",
  "key9": "rws9PWUVH1EjhqGgmkJH27gySqxG57cYYcJfESqSQZtChN3RijtpeVgMZGVHpWeiVmYHe3txxsfPMDfU1DJTjec",
  "key10": "3Hhg34YnzpJNVvUEnjVmRfHNF96psBUCCSX9Cj1EiNPP82jsn9ekwqqMW6B6wzgYdRdvBbBBr25of3nQGu4Ns7wk",
  "key11": "1ocNrp1nCjwt8dwLv53ELX8HPp4vTvJSWEtWY4XQ7j7rMmui8zMXdPwegrnQKAFj3UGKikZLzgFNb4E3SQpLLRc",
  "key12": "26Cv87VLhCmdmq4NxqDSrP2fWQCHiz7xXMfDszooHu48xg9ZvakPjwhGcWvN6WBFJb2ftKq6xR1LXMUcpHRCbkAj",
  "key13": "6TkCfMjsyLq85u5TdHzbeNdLq8GUiPMqiQo5KUiXnJfdAZqHqxkA8dcQeZpbbAv9rmWVL7RMubTbotWutc1Lsxa",
  "key14": "5dEmV3tuMMVLxoVguuySkT8RkERpk7fJrMkuwZvYT2HRFxpVP74xSZtjRY4Sc6esLhNGwkKyawzx76VZporVdkCt",
  "key15": "225CJpw9A86fgeJFuhbb8ZPcaa3ySfHFBVEm7owdBQtnydmCX22d1EhyYDbBhK1GJWfUgjnWCDZN5SaQADt1ELR3",
  "key16": "cm4caecnv9t3U279dfSZxiiucUG4rFretsh4LmTVJXXHwsucmXMNCqhqRnRg9Kkuryp2wuCm5oo9hXChYZkWKyv",
  "key17": "3fXXJSNw7xcgxmgdH6JrNxNrPPEfRRJGw2N7eY81tFjmfnpbGxPwVCS66UfQq6N3QcW3YHJuKNNrdPNxWt6cDKpE",
  "key18": "5z9KXU35KS34UmCVjE8ttjBSqMQ1ADzT9Zt8QM9k4dET7ixFgzD6Xo1nCU78GywxvXbv5paybnDsvg5ecaep8xR4",
  "key19": "jwaeRDrH2TAtBX2NPniRxiWBt9Ck9i9ScAfw9vEb1t6b3zZpTBVjVyR9dwcuFPzh2WTXYrWQ6LyxsAd8LYJEqat",
  "key20": "63UTBCGG8rK31YPR4vmPEB3UqrZoMufMxT7moxHk8BxGGRBxF6M3TTnqpRfSPbiJF5S3iQjqz5jiEqKNsz2kZrp8",
  "key21": "E45ejAyiLmHJ9DnXUERLJB9YfLXPL8cx9pt5cPReYFgHvrDeETJy3qg72vDWyAFG798bKHAjsuRgVVzPaEcNdU6",
  "key22": "4nMmXehUZpvMA3RrAbNBKNp3JiHMkJpQm28ov2vD2hUg7dq4phZq24mAvjEkuUGFmHeudQe91mMTMiZY3a6DYUfc",
  "key23": "3P81FQ8o2wagq9MXGvegV1YnQrPj4mAxPasPASKRMSi61n46f3KZiqV3S4nvfbmZAudjeyuTXtWYimGwveNqqkra",
  "key24": "4gFZ38R7xkDG4VWNQbYhNNuA65Fd4NKRAxt7nJTi1Q136GEnMV6aGTLufi1smRUU8dkKndkVEGH9J4T4FrJ7UPNF",
  "key25": "39vxEvypcRTw6KDZEU1LK4QY1eppTdcwHXoWB8ASUcf6Apcd1zVVvESVrr1Nmud4TBGx3oQmkLSoqZ968BE42MMf",
  "key26": "4LL4N2CyJypHz4Gih2xSh88jHivnav9ijYu2dBEn6aUW1A5xfUnWTpuhfRRSuWsteDQqQFmwQrCfcGs8FjTG4ZWm",
  "key27": "LxQziEzBwzPfHTUKZ7taFM6KLpLYtJQ5cUteLiTW6Mn8Q3Rx79jCZCyPPSVSdRsELbwKLdk3N7cdf2VBd7abh8e",
  "key28": "5JYgmudq39TrHXyrrr2Cr9L7cLBxBABkP1rRLHJFHLZadSZPsztW9JKJCczgcRUkfhNKaWCnweFteBEnqfyxJYk3",
  "key29": "5mViMbay69trwhLLhptHWWhrxzqmVN964MiF5gh7u7BXKkTFNwxykwk3aYLi8yfjbWpR2audFdMXob9x9MKvbgvw",
  "key30": "VjVX3zh6sz9bY54YUFpokQ4JYeC9PaEEfZhcwA1aMuD9ZEMBNi5Btm7gKJdzhzUY9js239N3vi5mTeqjaFtxuuf",
  "key31": "3gmDwKUm8iijyj5FXmRV1EDrjPp7xLAxhoac2aCyKVwzVkgx6cU92V8agvaHe4pMQ2jeVQTNigUSn2AdXsfjnBt5",
  "key32": "2V8Vsi1ShUeu9uB8SU9tYMqq8eRRbw1iLsWRygJ4fTg3934UEpMtDtboXUgGnBupBS4EFJyMAfU1wDzyoLHGeCzG",
  "key33": "5HtFzCB7JTPsZh41bgjW4NdMttygviQbF4sA77XBKdFgZ5hTFnthQgS7CNCWYmWQLgQnxGxGU1fMiQnxNyPo1ymF",
  "key34": "3kBftcroBiTLxnyzDFwb8GrWtF5WbVFTrEgjTy7MMEqr1NYhWBQDMnbuKtS1XMTW1JA548s3q33cKQwMuGu8Df2t",
  "key35": "3q2xPVszUtfkGuzgQ3hQMAHf6FMqcd3fg79GRe1KFCoQVuSBrns2AetuGhtUNNJFxnzzxzfakpYgLrwb9So9hs4x",
  "key36": "61nSLyqJxogHHcnndrbnMUYNfgMPZX7rA6hjUbN4QVyibnctjqEKEbtyoUhkttGdiR6KTEWk6m2aM2C6939BP2aC",
  "key37": "4y9bonDpFM3A7PwCx7nzrNXipGqaXkpY9CN3Z1pRxdErYKXE7SFYwhmFR1pgKRwoYYS8czdRVvFERYq6nSFbkDSi",
  "key38": "5sHwyRphmZuTxmM6SfiMcT5xSor9CD9euDque1EaRcxS1sEtTwXPy7AAmX3SmeMefP5usoLaM3CEtoa1AiQWdjco",
  "key39": "WyQHovEQL3dxX84Gi5VPvJCGyefCq8wtwfXv42TUuiRELfsecjUqNQTjX6qzkRpCDfFF4wFMDvYho75H8cqTWXT",
  "key40": "498GN3CYSPu3G3jj4F53DkynhgXG2faxpashJ49CmbN62qr3RaBhV4erDWV2nXp3tmB4dFEx4SZ3DERK5tEHoUg"
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
