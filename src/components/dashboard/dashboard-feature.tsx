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
    "2WKaQSMj9BGUJJX81pFPNSAD7Dc7dKBEshLhREyEMEh2mkPw11KPeb878yWYyqgLdRdM9FmK2dBHAvvb9MddemSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iVNjkk2RKddeajJwEBBGpoRxVefzhrzxkWN91sZj7anaY2KqLvqR6wTXTZqL5uStYg6CeKNiNzkFiSeWRFGvU3",
  "key1": "5uGL5FhCxFB315aguYUUCFPvr1d19LvxoSR4poqG1QfifavjGtdwRkrH9h5NU1cAK3mWxpCMEE9RTpNTnqz6EWM9",
  "key2": "fKoMUiXuAamViMxbJBbinrtFgU16Noig6U3SFAUbqLjpsuf5Z2oKcUUnGMx5e7cMwGCCX3uLrfsR3N68TxkDQ9U",
  "key3": "5s3uv8UxdCxFxEMesz4chapYsqAzxwEepnVFYo2fPPFFPV9rYfHbpvUjwyBcaMgCyBKAiiJcC9dZwnkV46T82a6V",
  "key4": "27Xv9EFMqKR7eiYe2JmwFcJpaZuR1ArRmeaMMG2tQva3eArMha7SuQj24fLB1bMUWZrJcAfv6ZmSJiEHhsisK7AM",
  "key5": "5TvDzbiF4DuZQgnEqnHoACxBueWs9jF62MmioiLEfWumXgSnGe8Xdm9Ad6s6FrC3ntJ9TGbL1S3RMoMRBqrD5CGQ",
  "key6": "3VgvDwCxdarEo3yaZkZoQbW3NkqjY1pvaqo12Twn7w5EurtZEbCPZN8NbrvgEEdZaf2wgbGrwKE9WfLcLxRFqZAA",
  "key7": "2JJzquYQwhtXXCXHvnKMAaf8MQGDDrEEKZPxSeFsNPZ2CnZqMvPrvoKsZEeQhn9Kp3MA4TqyGEsCuDPKfvNcxE8H",
  "key8": "272k37vh2hDfsWAEk89hYCdKD4BM5hoGTg4ubpTXdHgPcbNbPUpUkWmripQ3FAN64QWfqA4S5WiqcatJdePbzvui",
  "key9": "qYpdAsBUPrcE4i2f45gAeufFNdqdC5FxWM848FqvmgWrgXJJMWcyd1wPDxiunuym4DK6QdsjYVzi9wAQMNnTtMU",
  "key10": "3UtkUu5U6ojP1f1wRzeeqpS572JDkeETUdWq2DfDLHDuE2BKN8dX4aQnYwxVLvEztQvYbSUuotAeZouFbeFWyf8E",
  "key11": "5xYMJcTPLMGx5WJwQgkqVGKsZU4bYqotePH2ezV9BwnURL98RNXZgRV9S8f7b3PtpSvLQobsphJ1y6cbMf78mXBU",
  "key12": "46eqttsf8WCasBjPnsEH3pH9imEuRLTuS3HKBjF8Nba9rKeKYEBnTeLT2KjK6jb2Y5HbzrfHVHDuhpUcDpoSQQoY",
  "key13": "39q21fzJBJM7jURt2d6MKrydcMGALHyutyFQ1YU1HqiYA38oibFJkRXxxwSoQR9k31eEWj8ziUg2trskm6kYCKpo",
  "key14": "4jLHo2oF2zgKRLcr5aTFcLSARFPZayLjWJMw1LwAxANfStmY8t6AHVfRJxWQF2qKQb3N89CVskXh6HznHAAEeNPc",
  "key15": "2FmXLAvA1wgZbrgYq1PGNscmJoye2aa7fxbvtCVX7MmanckuEP1CDa48Jkpx2Kj79VwMwjbhdB3cEpDwN3XFyzLH",
  "key16": "3e4VddPwanHckhZZD8APJ5qZ8bFan4EUEg5NTLsWtnnb5JzrrcNSimR4HN2MwvEdZ8uVhCNbvNLQF6SXjYNd8FpN",
  "key17": "2cxmWY56fbG53tBTkagFgZutP7VwuzG3JKw3ETYn1saroQrTcQMYx17eTRsNLrMX7bSPwsjgcEzRNVVtf7nUTTiX",
  "key18": "E7PTP6k6Z3kd5m874UgpjQixbCFBsTjcwhYWe83okXvhv8W3vn1PPfmcFNde6GTNEmeZ35xXAetMqEyHy3DzRr2",
  "key19": "57Gm2rPHVZrBQ9BjbkBmu439u6AQQL2qUZnSRghaCGWXgQ4A2B4rU56ww8uVpFMwBHEs3z9oNgw5n9ehVeNKULs7",
  "key20": "uizi95CZLSWvL3sRe1N92u4E3CdEdsnDvVGNAj6Pgr2HEsrTRpWd3J7s19aNYKHMUJpuRkbeSR91GndXo9jVtR6",
  "key21": "589Qwq6q1JWYDCd3DPFVswWK7GmHEzEpbHhE6NiYijKMU9A7otUhHUQomGYfcAAxZxK13Q6sBAGW2TcjXfzzxBca",
  "key22": "28JQ31SB6j2tQGdY9AJ5igbnFNcC2HuiuNuSk72Mx9ZPqLJ5NewJxDZooqq16NjTdYpA6nWYRr7DWgiv7zov6HjQ",
  "key23": "4n8tgdon9B7nVduNLg1rgT9GjzsFusm12KAEcjp8iC6Qsp4mDQ2NdGrDpW3Feo8pEtYTfrSHFLg7iPY4UagXRqUc",
  "key24": "4iZc6NsjCeiduCYNvXkcgCJ34mcUGsuQuvDfad3ksMQjuTPcPAhx8eXZ1rRq7mGq6QVQxu7HxCnkw1KMaqshXKap",
  "key25": "31ePFP42f9HbF2mTeWevghncjR4qCVsv4jF2dPwEeyxsA32DBmcDPyFZyLwavgrAci61gyqLSCtj24ChLPsX7R5W",
  "key26": "2c45hJ1gjfBoffid7JEPugus45tWzoRwNBn265JQSfX69ggammJnJxjQHtuDxmbV1ZcnwztbvE1fRjKDraVKNLF9",
  "key27": "3hSiK9KZh5w2ABgHqCG52R8ZeybkWLQRvbnrQopQiRgFPS4BtouKTX8cyukbAUfe599dc5RB1pA638dNJMUEuAG",
  "key28": "FQRqMD4hG4K1bUhhKmwL6m6jb7oLdPv8zEFP4tUPsgk9qivkJCA95w7k9HESfXP6vyE9PvDFwXgvekdPZbuAwx9",
  "key29": "4jPvewj1p9Kk6zWXRU23qYS6urHdJEvq8HawGWbEY9aM6wF2rdo2q3D2TANpH5gqXbLbS9aizrLPFSGaDVi98iUy",
  "key30": "3WZaQjYxkLmD5hUguybkUk8c6aH1Y8LeDvpzSGXLdUKEsGd3R1BmzrM6kQUcphcHz8ou47Z9YzvmdTLukrVFzumj",
  "key31": "3Fc1WdqSSZjPceAJkpEAdAKgq5YFsqghJxYBxkt1mpWXhWKmHm9ifwiKyevDA2oD6XbGXA1Uv48X46gYK9PMtXA1",
  "key32": "7yY2RkGXPVuD3aVWjzL6hnnW8VEvt7Hkrk2SmPWHG2rGGVEbcj72ecwtamsQtx7S4WbxidiA2LurvP9Zdn64mAH",
  "key33": "5mxnRjuU75W2dRMsf8kKJVevjZUujsi6rc2LpkXtTotqf8qYtP6A5PzqM7rBFeCXKcPmsDxieByeKvnLovK2zDFN",
  "key34": "4yEXc2bANqeBo62z3PEhgckDxYXFGtQVvfWAaseafpAdDUoUmzhRovuP1fWDwuHf7ZyNNDwKUfaxiXqfKRj83aza",
  "key35": "4BC8b5dHRaYVbsgkdfnsgDR2WiEuZVL8Ppg3kZEshqZdUFViWHEvbzDTLPU7YUZPfXv1mAvJotHXfc7MkxfCnd7r",
  "key36": "VRM7VjS1o6Lkh87xnoJUCSRsGB14sj7GnDJS9p3ePTZJXK2utzk6YVQ5ii2eUWJhF8xHuDbzYyYnX9mkmmPjW6W",
  "key37": "2qAA4q26yGFQioqrULq2GjceEAWw7XxYSZLbuFMjN2gZKkUZcCbbpUjCvJpTwouYVgihjY33uZwhkK2LVL18dm4P",
  "key38": "561o3tTqcu3Rs4V66JPmNfKmCtVN1QDM81FH7WPBqMBqHBe3jq7MvhSd5hkmkvgc2yEyNFBkzoij7ivrkB77g4UK",
  "key39": "45xucqg9EtiD2U7UymH2xiFqCzsrCLscUACgY2eyeUj8CgRNYnaz9V5rsGZRFvZJQZ9WtELY2Z3B54XxhXXgdLw4",
  "key40": "L3p7fWo8mMnfBF4xbnvcn4bbo1iArnVauHxXvL14CjRFKbzPHhGREfgrrTvKz84SgwrZT3p5NNm57zTV8dUyZAH",
  "key41": "4iTC3BMdwpD67FWgxASWy2DQaBUiFnz4LNGRze57QLprwT5MdRnPauZuWgBbXLSe3Lwr8PhNNerz1GaXy38DmcdG",
  "key42": "46FfDihEAGtyvCUdwwFYLRUkuv3uV9y5CWd8BSHh5z8FcDHL6Lz1xRQ4UJH1JMLy9DGJZXSyDmTeS3eHzFoXXjTU",
  "key43": "5gbhWum1smztZcC1kaAKHwLL2f1Uao4GRnBbhGwcvXx4fKc6bhZZH3G2KbzpcWm1CcCs1CcsTJSM3hbAqfd5nfeE",
  "key44": "3GEh5ShQfkwru4ziLVQt4rMCUFxEWYJavu4eTS7qsomrk2CA1gjBHVACUgMeQTFgbHRdBUcU5NHhatvGTn1uVbrv"
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
