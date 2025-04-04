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
    "5SJ1vXrjHgKF5bGtgRe9VbNhfHQw6MyGWJWihkAW7ji7kkpweNmBVVzgGt52NeDiDddYUuATxHdLvpVaE5hHZUM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DSXMsugzuiB6BUEakR4HswMYvrHNhEzdnbvETJov3wqEj6uwxHn2XA9ZebqHZcLZmSaYissxL6sN2Nq6iPeGgt",
  "key1": "2gYmUam6kLunSB816D3KkDpTtTko53EFYi3ujAwXuRq4gsp4VCBw2jYweLrJoJtnNGjpwEFtr8Ufpkgeo6LJE4yf",
  "key2": "5JXCmLjqwmmTR3kJoTP9UNffBRc2QkoTQsYDsGeoNmEd7Yc8pgv1kaKpaoVkdJHDWYvvxKLTU7AbZFa92zYB3H4u",
  "key3": "f5ACNfNW8pZqNhHVV62V8SHSw7kkrwXuSXADCrWhrmiwZK3usxtBZLeSBWBjYtaq4CpxoGJ54SzT1NXwrD2ANen",
  "key4": "3jH4L8QC5Yqbu9JCa4akRNJsq5m7uuq1wDrqe18tiTAsL3FiGAzQnFnyJPELysKCHecmEczxXXXMgMofn5bAyVCP",
  "key5": "4PSZgakoJPzEzemg61t3EmAKjrzc4Ry9rcf1yg1bPWmM9WLuuNSdJdpt2pbrAFT8PdvT3CnXL6vyjM6eT15gWPN3",
  "key6": "WeuuHw6c6aTfYAbVYy4TDVkP8n1uz9q1ScdZ6Z5Tx9DrGvQiQBGYU2YnWAHzmu8QWEsDGASLbJZmYCo6WvatteU",
  "key7": "424N3eHdGXWwGypJdLBdSCvcKzBCtFwzXtQBpaQPSTZLytsVthTXpjYuCSUVwUWrioEu2cqz2q3xoeMXB1PMYUFc",
  "key8": "52LuHEMcBJYrSn27zttAW1KZYummnkvJmE48HXPuT9kNdDjuDHB69vRsfDN8n58rXo6CsDXBuvdUqsiV6ydfB3bu",
  "key9": "5Reh3uCxDnc81H2J4QJWBcjSckmbkgSuGMu3YBRXmqywMHoLMkyxqwtSPJrgv2k4BM7HhkCVTsBfhaYu5QUbmMWC",
  "key10": "5ZwggFWaA8zKrmcYNtMbQYWwrwhv4a5Lgrpxv2Fs1GYoRcA95ERcGm9ZiV15SLmZAsqiBVY8qeCR9bzqYLhLrqZ4",
  "key11": "5WmVpppe1TT2Vkt8eVEVWrKebKfZEq9na4VWfvj3QeZn28U2EzaktDA2Kt9bVS3PNXcJeBhhrLwZSTjncM1xR3Sv",
  "key12": "4DnZDnYfDxrGJg6gFAFsiwr9G1PcYgzD3mYEg5uocX3seJJEbsbucVe2diNqmhwzUyWEwDppU92WiUD3mTVtTHDV",
  "key13": "fs1LnANHLFLXn76qMPKEXURgV7jUatPR9LaDTUAcsBE9r2iJ5whan5EPq9rSKekhuL1Ks49c9Lh7GoebABfYKsx",
  "key14": "4jKhM87vDj6kEWXBgdD5vUgrJ6eEiSxStf5F5DbJWLiKbmxPNobPcL7ZcxyA8EbDPv14bh3SA2GADAiokMk1GtAU",
  "key15": "2Li3MtsM4gzyZuzDQctth1q1KAaWzKPLRZVnHE5gLej3Ac3SjRkwZUFgNKu1TUPKgd6kAaBsBVm1fBcQELfv3TiM",
  "key16": "DdiioYakmKhFwbbPW1UjKsabYDLEsCACqgBL96PiTUpYKDsbC3Q9VLvQ53raaLi7aam5PvWyL5usomybobMo8DV",
  "key17": "vwKNZNRxC4z8JNHBFokKqa2bqTDmCoVcFZ5DUaykH1ti8eGZnKX53XrbwBrMhMrjNx3hkxWoLaFsWNgYQEC9JfA",
  "key18": "2TUp9Z6bKv7FHg32hfvqXTebNSRzDqkuLWXBg6xSxU95aKUzFfQKhMWTUCso2b9d67tbSY3zmzz7B7TQuAm5Y2zK",
  "key19": "4iytuBbcxCoqFrmTt7e6XV3B1g4z3ERETeJXgvFHuituHw1jXB8TfviN8D2knc5urjBo2ZYoypP8vtE7aRPT9oNd",
  "key20": "5sGT932eYueMgn6exjyDXbDRB6MqgiAKqGzmKckTHWU6Geumhbxe9xmXq5UD4BXoHDnAgq2Ggs4q9qqWiQdDMsqC",
  "key21": "5wU2hC3BNUv3jhApDhSZXWNT9pwCfNPPZX9zrP4pA1xe1f7QYcH1WC7AsW6DDp3uKtWnGovefZWkbYr8NcLaXL8o",
  "key22": "3QcHyUGiXhVQJsWu2i39Tm6hz6LaboiK4KwG9ZhsikopCs44Gb7ZAy9ba1LerrFNBJe4xvfnPjBd2hPGxCEhDG5T",
  "key23": "fJivPXpwtMo4Qibad5JnxPDKQM2YiEfwaYufBjxpiE6M8DfegEG2r3KUFadWdvRRf6AUyFrPMcvwcyxpUKqvgKk",
  "key24": "5DMdZGUL2rxP9v2Zaco1fAFvkFy9szaBbGV6n967Xxaw2jAxxk3CJX3Uu6nS3ASEZ2t1BGnnpuiQ3qDYFX2oFxMW",
  "key25": "22VFuVzQrt4ow7MqgJuXgPuuzuRBR4oarE1a7pWB7gQe7ZDj7H6MocyvZiMP1CibefJ4HrWTqSVzLTdhht25ZSUq",
  "key26": "3Ka4ySFkaTm3C7wzF99fSm7GucbeMG6o77qC9csBtRu43MQtBfFbUwYv47SN5y8dENUAA24CBwfFVrtjnoRMF4Wb",
  "key27": "b3gz4twJEBRJF8FWdRNmHRgUYLUiqNUDUhkBpWiwPnJj5E6GJpirn1ry6adZp4z7JHR7sfjjyxtC5PJ3UUWNhju",
  "key28": "5n9rJcPCJBkQUzjbvEbJiRf3pFUV9RHk6u4AD2Hk6oYmftTzMM2KixqLv5ZCF8Kstsw8Mzviu7tRbsqi3DiBNJr5",
  "key29": "5pjJBfA5hBVARjjLCBmxnbZndt8hEQC97xykSg6xwga76SDQq5pHWEc3QoqcdqTpxvHpymLmheCpaMwAPcgEWdHW",
  "key30": "5pa8m45sMjP5gCJ2PBSUFPtniFurJNHNiBeskXF45wXpzw3TrKqyoKVd2jBBCL1vKn42tn4aMXNWeVZZTUgzX1VS",
  "key31": "4GgCmS8o4bZkxNHDUtFkeb45LPG5gc4evGFSUnWn5qr6XwfozsYAq7jwR81Nzh9TeZRJFm3FSfWbn16AdmbCb1X1",
  "key32": "gNmjuz6EdZ8sGcthS2FmQB27Ww7FneAQ2AgVnrcaoPfyA4hsFEZXCLBW3m9ePgVf4kkhD2YpfBpStk8jEQ1TU97",
  "key33": "3h7jTn4GgTFKvYcdNnd6Spcdu7Du6c7B6i34knt5BnsWtT3aLEGRx88pHKS36EBYc4HRAdyWcCtYk7ycbS31Y7YY",
  "key34": "eAsGC3tHFy9sXa2q55hQDCEDUw3KmfumgZVW1avoDjTwU6xCvM5bcDWjTkQ6BURzjsMLnPCw2wgxSfjGeaFPSyj"
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
