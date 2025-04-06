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
    "dLcAeBXSeUm9fWyViDJbsPbNACbM6rt8UWnmShMtoAu8XrPukYWhw8KpLpquR47jBAbnmKCuXbUX61HT5PEhjG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vi2hnfh7BiAT6yTZjShUBJVkPuzBBwfCT7sRzumXhnrRT6uK3crjDf8R5Z8T6GvX1CLr2KQvrG3LVKXxXrgx8G8",
  "key1": "5Q3rwH9XfgAMMhFfK2zMDwqHyysTiRBdYpavyZnrXL51ts7qfipMcnDSQ69o7rDPCMtLVw5jNHbMNx9T7z5yKSPk",
  "key2": "3bEbHBxLJ9uj9twrbwLfoK2vkQK8pzxLu6oWnjnvhfWTSy6UmD6saFgrHesZUF5GsmgfUgGWZBnq5wjPcHhtzVbK",
  "key3": "3yXkKBvu1bpWbRFyJgJQV5x2uWaPMaw5yLoL6fCGkdTzyY7LNZinJHgaZFJKNXFAPXcRG7QYRvzi7vwKgzetrrLG",
  "key4": "5H4tV5scQcuNq9zAoZpxJC4TMoHSKvzFpGATzsXaY7MtifvzkcMRk3xiRGwxHzAY8vxK1djyXHYDcu5U6kqZcBep",
  "key5": "5gTPK3ceoSC71EtVdQ6YfuzsmeGK2soL6oYfgvHnrM6qVB7bCYLc3Vwy7ezr8XDEhsq2xfZau3tz826wSnM75Lda",
  "key6": "4McU6i1uT3JWXM5kmJA9iDsbnKmQQjt9CjT7vNJteQTTFLPEx1TCbPx5Yq6UKGR6bD5QcSJfVsup4DjQNgDULcDh",
  "key7": "XjM1uYAsefhUqh2ThxH6JRyo424zuJEpVnvQmdahqhQzTpqqeSsNMtbpRTwNX5Thycd6SSPwUJGkiTPD53giUcY",
  "key8": "45bSGfSqGrk9RDEeAXAyTmF89Ny7RgLsxeSENis8KCygtMVsvFL4kKCX9xam9RAwMzMuRJiUQmisGkhDDPyD3WnQ",
  "key9": "2D6iD8xZS2kNx7VHB6MjYgWXgefbppiySXQaU8qvaZEQNFtrBVU3VhpzDScGeeoQEsktQmd8QngV37Po7Tfh4WDf",
  "key10": "2xTzz2yoLYf66JvX9kDExMGxnMzFvVhjkQEACyPBvcXTuDZZixxy711eT97dnvgnBwR8EwS1AE4hUQaPoE2yCoCW",
  "key11": "48cHJ1TTtm33NMn5r8KJSW6KmNP5yMxtkyaj9gxSKQiNG87LuxPV6qG58eQn7gjxpz4w2vn47Yfjwv1zYwbSQ7QE",
  "key12": "Pc1HMusZrhHojSKLMteZCSChgwcVGTFCCh8JJSSXrh17E9SHFaAYTwKXEaKKFnvqffNzyiq2hdzjdq2rnGFQ7tc",
  "key13": "4BxYpLCtGozivMEB7K47FZe389KNpFG5Fw9VZNSsz2f8YJuscMvtNy6kUzC3bpsXq7Pg5ks8qfM9qWKBov3uPqPT",
  "key14": "4JwsmG8Pu4x7NwcQYac62Nm2eWRkqj262KF2K3qGmyVa5pZFPrvJgQfyf4LnLMnrNExD5QuxTxQ9HbkixMkghJRZ",
  "key15": "55UjCsKs2U3LXhXC4LsCoymbPNvs9w3KY1nFZmdx5ZgQqENYEfxVF48dzsLKMYtn8SLsX6Cw9GVFUN7yWG3ePKsN",
  "key16": "4LbiuhExNbNcsZWNtA8vrUxR3MLpHQ3RkaCXrJropicf6gmvzNstSjhX9Mfw7LipgtVwksUgEPPtparQ78TsetTk",
  "key17": "3eHuugwvmMCYuQa7VUotcNgydGRT4cimqMgDbbTTKxJQpQGdgMATb2rvDGZALsCafEfivKXtSw31hyC11Y5EdRJD",
  "key18": "3pMz7mHmYzcJEaXgkyUhw1KVNYwzJ6z6B9W7wvdb39gbVcewsxGcpocvrHCmdubWSb3vYimd7xu6xB3PiyfXPL7A",
  "key19": "5Q65uvYQaGQegCnxxYBtXsYse8x3TQxhS4NNrN8UDuVMBu55eUyQASwKFPCnag5D8WKUNo78BhysaeUbRDkPANRH",
  "key20": "3qA7WmsaCbiPFeY1ETZq8yjjF7uBSSjt3i9GPsGE95gVbh2fukYv7Lfq9Ncn43YuWLCeodTHRGqJqwCjkbR6VNHf",
  "key21": "2GVJeTNJW7LbBz3zA6hirbeYCAMXA4EEh7mvdKZXkuEnFcm1yZSZXs87Hv891hh1R8SEPw2joSr8PvfGZkzDMv7X",
  "key22": "3KuADpSWjZwTZvUpQyKie85HrRLy33iPPne4C2Vpk2XsYgtjKybF32oRuvrzutHnUEAhcxMroaR785wGQG4igjVC",
  "key23": "38yqySCuAx5EEt6dVjVU7eYdmXuShdTT7acUTcrdJ4TcqZWQWDRgUdSggTecx7V5scxRbZoxzHo2Mc3uzKph2VEX",
  "key24": "3iB6ZogfA429f8kj1K5V7hmHBZSSAk1TJNBTTzPchLvuzmJXpDSwsQBp3aYKbEkB2ZuYoosNoU8rCpTVTm5BMDtL",
  "key25": "55p6gBBG12qbc9UDtQAWMBx14HWUEXh5e3CFe9R72c9PKJGGg33CA9niUbE6utv8H96ymut1H7LWD3yHM5TfNfUM",
  "key26": "4wHAfzJB2A2LpVpVQQRZSFd855zYk54NWJPKTJDCmo9bcSjZaod8GLvad1sCT7Ue1B4Zxtw3gTKUv7JDiXFJMNfW",
  "key27": "3jFwF8kAvoPx3C85Tn38YT4R4MvjP62etGTvzeFysoPEcZFe1HcoSjEvfQPBkQmW2BepPTq3JGenhXCdwEiCFJWi",
  "key28": "3zYy8kLmt9941Y8bthoziDeneP5fxKrnRr5VHaZHXBy4EPJgh4C7165CEfNTpgQLNtxa8wZ7jwrLyhqizbk8pzCS",
  "key29": "3JyRMy7ReNprtiSNwWwAEyc8swsp74jj7GG6Rc62S7JE1prc3QwCS4Bt2jND8G49zKNoeBB58zFkAFQ87aDarZBM",
  "key30": "64pMqDSnEeub259cP8KA2icyezmWR54HEkRFE1H5c7emoVPa989rzsZAH4nXzT7CQ72D36Smq4iXFib1qm71FB8Y",
  "key31": "9Zhv33ioJp2vhe9J8DKrx9Ln1dAm8ts5E5gELtkgyosU8gKxNzyLBasveMxDuL7M4g9H9NkBJ2FiJqRxkqRFmoW",
  "key32": "5fhLLvJMLCZjWJEJzXjZSDSnteARaCt2fKzAs3rnmTsoq6ZtpBggFvhdHKx3Kj5f95C5FipxT23qguNJFtfmFE3i",
  "key33": "32pSTjJ3vtydLMFiUqfazAKMVL4SHoFHqPmkwKmvTXnGH28a1sMg2UQNYUc7ANkgqWrK7q77ZmCYXKnp5kZUPQSR",
  "key34": "2hK5FwvQJLU7wvL8b2ATTqFG21BuvaEPnfgicfFJ2Bi13f4ba5kDhxo5Rw7nRKrtNAcPfubWxLxRJd5narN4Crqe",
  "key35": "4ALzLVNH23g3SkQwdPfCxQDzsW5C1kPEUhEVTTxYENT18MHNRiGah9wF5REZvsWQ1j7hS95XfuoTjLypPgKns98j",
  "key36": "4bs1KjL9hNRSgRh7ezwZJP6REPQFLgvF98x2HBFxeCCLpXQxpetERJDgGtbqZf55MPyHsR6GHWGLHfD3zH4kvrjW",
  "key37": "2aBymBuGUoDZg2Q2geNy84hFSKVyP4fA5PgcRnGLGtQR1JcFUcUSi33fH8phznKV4SZZ25SHmaQK5NLy3y6YyhF6",
  "key38": "61YhJCbPdYR8RWsdh66MQLYhDdZKuPeYGWxP8ECGwkv2hX7ii3wQyRgYC4Eyu8y5cFYrE7m5thUDcyFn36zmvU25",
  "key39": "4WgApPFDYcayEneaFmN77izDYGAAnJrWfvSEigJJRaCdcwCKdKg33RuBaQh2TdC9drfhBm8RjhVJk7soUqRRJdXX",
  "key40": "4p1iLwhUPkXX5EWTCoFqH8LLt9Z918D84TMXc2PbExh143WuVfQXKTaNg2HEwzjMTWLw862pA8HawD3vrprsxKQL",
  "key41": "5n8SZLVaXKSjNY6Z5AXLeAYTvoq2TMSxXxv8MbX2Abb7eknDpb36rzeGXFwv7BnoQp7ibSfXehxJfP8XLoJLDqRT",
  "key42": "2pYYvwSyC4UXkumztzk4Frcz7jdTptiqkxPKZZRsU7n9uiLmVyaceqYEL2D4rhvVpujighaAeqb4RBytsV4mUmtd",
  "key43": "4hLFypNdLrtehNU9B62Pz2CMK1DwiDAmSE75Zt4iWXPygcfEnLJboWGXr3CX7soF9566XYRgG1gsfmjoyVzeizSi",
  "key44": "2vq1CG1p2FE6v6xtkzKkoC4dfHN52xiMnXxmiKPH5n7Jjqha1VefwUg7sc1Q7aG9RcEGvunup2D9Zb9y1WVQ2yiX",
  "key45": "5885hG9YdJDwAD9iRMx9kxMqnNrPaCjMJuKb5mhBwCDLR96UnZFSc5UxUDfguScJStKeoaZCQVyfv12nfqyhbbnV",
  "key46": "3Av9S1TRrX6AzDxfab5Zr34WVA5YpK5Xnf8PcGDXKiv7bYk9Ygxyhnm8T2yeiVBc1ULXt349m3kFsPbkG8kahVQK",
  "key47": "2d19nC5bN2Vrqv5yDfsjGvSc9wHv1p68QsaXWYMZrTC1qqiFyF8PtsxSFVvjDUZkybV2ZPfNwiyC7YGDsAvzrrby"
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
