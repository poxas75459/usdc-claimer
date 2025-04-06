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
    "2PTAKisaMxEPLPMTSmHMdG28RMmpDgLqfXnYyQMtRYLVUXMPwJoHNURx6t6UAWatpWt6mJcxPPb9AeT14uwyhzFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgmLDiVDPiSnZ4t9TUGoittmUjM25NjZVF2BjQ5XZrtKJjmnHBrqXeL1jrH7PyM5q3rHUR6xqZBk4Dd4E7bvoEM",
  "key1": "3xcoWNmfN9o9P1k1Gqffc6Md821uQRRrmHupDorNLBkxMWr1m5ZSTpG1g2SMYemPf27Cwa2R2nKp9xvqvRjKZwT7",
  "key2": "2hiTs7npvSfbMAK8PYJqES8reFKSqmgNymp3FJdBUkmy9KsSGJEDhLgEA5ajvs783sjsaUwNqFzaeMTC1WXpyESb",
  "key3": "3qPZxvbPi4ADWHfaZ5ZmcvzgKbsRaE5rj1sbnT3TMysco2cTHvchXFrXruGy2X8NyUxabVn28uv9uH7xRE2PJL6C",
  "key4": "5iKamM32F6x9r4h1cQtRJtXcPLZZ7SQHsM57LTheQnuf9ZVRRAzDjuStBNbeG4eeQiLcmFAaMuJqcrX936SsBrZb",
  "key5": "5A5DGqxSSmQHNCMvFiVTvzGft8gHf4DeB8BdThDEeJBY3qfydLvroQN6ZNkuKXyGbYySAT2rntAUHZvk49B4rh4K",
  "key6": "28NZLm4Mijb91a79H2378TCbrRtYnvpWjyJ7rPAW9hgt1eE9HaBo6cgZ36LZMv9MYpgtwtGu1WGoQ5CMinahNAcz",
  "key7": "Koe3RnvPhDLEPctBCkt9sMQUoGhZjjy6MwKz12q1HYmjpMo2qU3TvhsaPBktjNx4WFWCPHNipqnfqAGVupqZ5U2",
  "key8": "MM7FQEggrawETgavbAkhhiSJGrDqWD4d3u9YvdGVzV8rJrzWi8BLxXUm14X3kkiGdrszwdXPZ9s33tMFG4ZGTsq",
  "key9": "2n3R1PRNQ1kDwNt7qTgJh1LmhY2rw1PTjxURrfb3uSAmzcW33wgwm3UbMZyz4DsLJQzNYVYaWFNp1MHkDaHsd3dc",
  "key10": "2rH2Wpd5x3JubGKbFzcWhR355NeamFo9MWp8vBMRA2MUvCQx1pGETQvnvFJZvMv7Fh9js7AaZ4eyhK2YamA5q3yn",
  "key11": "5DbXpZo47SzrXuaVnu7W2w7gXQbensDbefQowYA1LMHGSWQ7eHre3UeHQTSt6FwcMP42KMJrryDFYLW1KZ4SoFLd",
  "key12": "2TzyDUYv1RKqLgKh3NDJkYe9p8a3fQcnSH8HBKdfEYEZeutTRMfgh1maEh38KnpPeSEaFQPw6uQgqcxCTxFVeN7R",
  "key13": "LnKbetS2Mb768t7vfD9VFAzC1RncF2qXq175RFpPEHWxVetTbV6s7g12QLemGYLukxGWeEyExCC6qPgu5ytNTV2",
  "key14": "2A45JHfBqkeBDYeKxvmYCU1wicorw81PRBoTcinCRuv6GtQwAL8NexFoN9V8kQNQZL6t27erHM6iToh8TpXXgjJ8",
  "key15": "2UMbUvZHBhpCgn7WLqYH6KVLUFrfFs7ha9YY6obSqLAY3vexGzpGod5LqZaiEh7uCU2efwgdGBLp8NLBGUGwPFcx",
  "key16": "22R6idTMmKar2JMer1guikVCU7sGeD4f5dR3DEwJUduxPxqPzbKfNU1M7ziJp9osEU1c82SxjW1AWaunTJQ2rN5q",
  "key17": "HcBsnxfj72YBu7vfQmKcQPnUGct9Lp1JfRQuP4ZkjvG8zmKQFsp6Cf52RhAC5dstkCWkN1mBmdRgazDrhyahuCL",
  "key18": "2XxUfoCZXaCxt4XJVQrzeSY4kupMSQhJrr7vXFFwieuEfLu6rSpJfwwGikoB6t6dqnHUUQkW4fNGv1TwYToZ9uUu",
  "key19": "338VSERbnDHeofC1TZdowrgUP7CDKosWmqxm3cWDUxBLUP14RTVGFDdmsRBceKKkuvydMZtXnFneLR7RegHNogCG",
  "key20": "4d8nySTyTy4VdL2v8vnXYFyrZqUiV7bvUfv46ZLU2YRnjyBU3wxsHBf6PJcYpevkccr9twc5EPMtodGnjP2pU3LR",
  "key21": "C2VoZUsEqVaKkAoGYtJ6eCHWwgtPbh1TwfnmfWhdrgwoXsVm5zBrbivJ3sqR3sCAfNocZi6k7YbnMJb3idNWWgn",
  "key22": "3uBFc2PBkots7EJuGDmyTex1Dm1uAZV9ZJQRLx8DPsEEhcrjXQqtXJ7KpWxpn2XZDaiLqF8xw5ikGB3Dt4V6BbDh",
  "key23": "29xt3b9zm334HXWuDxfnYciWgDkSQ95VRYavx1EXAuPQS6hXWddSnuT3iLFsAvWo1hjA5hyK4t4ETLbr8gPNxdN7",
  "key24": "tNoBnjHsj8sXuat9BHszKQrc7Mw4jfT56xwYvRxVw4uQAk2f1a3xaBkeXYrcLrTyoJYaytuGLnQvU85eEjAwow5",
  "key25": "4PWKW1niLEHAP9xRG5KKpLq8AbWkH7NwVwWPaay1n2E8eHzLyjvMaX2d3ASHZkY3WShgFLzPYZuMddCsKg88Mkb6",
  "key26": "FP6uFu2feS4D99fr5zR1pXjQRn8dEcsviY7RqmNkBHSn9TgBZ783wxrqNBkqKX4CEQE2235YqK2GCFdD4cmpSYF",
  "key27": "5LSHsBWbYa13S5dH8g5gQYg1EewRF6u3VJeVZs2eiWVUePum3KGX5MPYQXPr1WEcrSDXEjMxaBB1hgeRBLTgBLu5",
  "key28": "436qnCCnHSMMJDcHJdHR7huPoEeTLawAuc11T13F6NtZy8RxpETNdHAxA7MetXa6viaDmqmq8uW2gnBeZbPVt3hx",
  "key29": "TSjkrjiheAd9gDzKL6sniUJ3EGQDv4uZvLtQ4VtYErCFkd9gJQAiLeNMCLXrf7XYc1HAA4sNnfDZhXxPnBy39ta",
  "key30": "4BncNWjo2PJeTfnMzBytidtVcLAaTZp861ZENo45KxDTMhUoHzXnrj7DWwDNYiiufrinyzK7sY5PgJgiqxFPBL29",
  "key31": "5secHSL7SNVbqYnnXSVZgUQG6bSfC6BV5CAvrHsS4C1iJRzfakk7ueCQu4Rp9t8wNWhMgrx28hurTy2wCLnMeRS6",
  "key32": "2bvs7hUaCsxyeJ8tz2gCXPGY6pimFHc872F42Trf1QQaKMmS6q2jKwxE43PmqzF9xMbb7XTKJqXE7sh3ZBV1aCEo",
  "key33": "UQPwUTqYEU671NEQXHz9YdEp4KDtompwpYGQtv417RT9FUQPiyyTsS6qYjoqT2TYTPFEZM74kfT5oEpGwirzfwq",
  "key34": "2mzPUCWRAeDVJB1pSoDjpnthPUecGFCPSkykchkR4FLPSBaxAPKQ4gPgf2TnK9JaC9AvZa8EouyBkamQCaCh7HWc",
  "key35": "FTtj2HLnFVsNpyCNtaDRDsMgvx9VuGWpd1eoHAmsbB9y7YHoqMigW7Ym9RXjTv3JR8eWJqyc1sA7A9yDKb5dEFe",
  "key36": "4qy1oT8hrwEzeonU1ZQ6AUfbhdAYNrUYUXoQyq837wcLLx7sbgNHuREveejpY6eU1AddiGTHJGnpFRKSABiryVDc",
  "key37": "9LHG4wcRVDk4cwg672rj2xk46qrpBcJotbdmRGNnoJRgdAAt1wc5hAiYDFgcwH9XLhRNrCw8R8uXtHVbZjT2XnX",
  "key38": "3Kp7PgeKyFKX2sqnXVUEsfcB4gyLeyh4aKgDKv5koCeVNpjK1CKLfTRrvW5EYRTZSXQEB9nBzk7yVbyVpanxLg5R",
  "key39": "2th2c5JmGk9exTW1xwhtodSXdAHs9VBATLn4DwsmRUdSSm58EkDHngRLvfhd5oHFg3ntECc6NHMeSeoWSqmDr2gq",
  "key40": "4USB89iWTmhCRe3LzQfAyBkx69fzwH9zXYtvD51n8qRSupwvS83AkcXo1ZKNeZVJcubqpQrc5Gphm6DpR6hkKY4s",
  "key41": "3FtPLFmq3BA8tYJW1tDCVDXWA5NE2RTsLXr61Tfb2Go8RqrVgwpMHUGrny3Z8BUwxGizyBXVc1kDwFuVisBk7KQJ",
  "key42": "2tVb5X31m6LyLB5PknQxekvnKLsCe38cJcfXdTRUyW4445vz7nAabNLfQK3RqUkNhumwWr3zTbvRiipz7e6m76rU",
  "key43": "3sSVB6SwMW7N3APmQWkrgHiFNNE1r2NCCm1Pt4mkx8PbGWHRLaCmVWPxHBJHRa6YLneKqcxx5Htaca9qVdVaf9dE"
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
