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
    "2fnPQKuhdzud2emUwzgPZ96tjevDTuuttpaUd9D1JTchWSkbhcNsfnx2veopXvWLkD94NaS3PjwCi5xeVaz5Mgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqKnopME4poXTqJH1K819iJxktXtDL2K9XdhWqiPTzhC7zvdTmq8n9MEoDrMqdYLz4FiMELMsKBNhiJsgtfVD4M",
  "key1": "RWJmSrBR7KeYnREjpQ8STMgWPL1rEAJbSyrUUVXh1YgbxrqdpgdkUvb7EAuyH2Jmy632vQhA6zd37ZHwmzHnRK9",
  "key2": "4NQFc5EWMvVEiBb7ygi3oiz6RaN9o8Mt9iTQxMwL1e3CnFSwGsCuiqyJt8TSeYvDP8imCjNdpFrZs7fWfW4vwsD1",
  "key3": "5rU6oGRXUUbGwHazghJ7VZMbszURGBkhE5kuyunnippgnZjdogQGx4pWuzx9wZ3VW3ZfmJrVJ573x96yKcFPoK1E",
  "key4": "8UNMoHQcB4aSjJvFP4opzca7wHRTUz3Lz8xyuuQok354Ap4DYyS7KxDtQDCqxmLb451rWPsjhLf89Li7Kybg7fR",
  "key5": "3CYpMcLtmyxBMmTqdsbm6VhEnQ7fb5nXWw8YRr7Afk8qLykdcGKun5GGy7yAPzxi1rSQZ2x7AMa8H3JJbh3f4GHF",
  "key6": "5fteFMeP2yKEQ6drrg8bbkMQLjdG4V7M2JcYP4yAGxMgjH4LgVnD2RPtUbuZKdysrPvYwKSVYJ74pMja2gJGcx86",
  "key7": "64VEHvmBkoTRH9PKdnrNnFEQsQy1Q5GFeX65GsnZNHyMcPtXJk4Xd9hrXDwMunDEUM4G16ia3uVc7h1uDRrVbcir",
  "key8": "3AkL3ntPgU6g7a3Aih9r62VpBcTE4A2L2juYYB8uJojGeq2SbMYZ5c88yHsnTrrzDxdWSeCsntXXgsoq9oHAwfNX",
  "key9": "41em5LkQopxBVG7Mb6dzzWXF7dV2sLzGg8WPiBE1hcrpfvoEwJuaqSUUHBMzM7NNTjvTJW9mvaNwYEJ4JyZTFjtw",
  "key10": "4yYk6qJWpMQHvHnpvnkNYdwHkSTPYmLJcrGMyRRRjAuCaWJAtytW6XYoWUDmGP6uw8cXk7AnJAco8qZZnUfCBb4p",
  "key11": "3czSrTYTxpQw6RV6qDdwJdpPCvNGkX56uokDWtw64PF2Zf2P1B7bdGpiv4vrVC8MBKtxCjeWHHrvMjYuDqb3PHBj",
  "key12": "65hrXAf9V8RGo4GhgrPzLKaYKCKZa6Fmk5EXqdgDoUHEjsbty5JjLPG1AzPoPD91UUcpS3y1qTUCTrGG8FJZHdxW",
  "key13": "3eaCeEg7MHXTmzyLk8gGLoaMi3N4ZqhsLw1CR8UHLKLbxUXzcRfFcnpSV7gCKdDBnEKbqqUQ6ASDi8pqarCwXCNB",
  "key14": "3dYKgwAd8cYJBwoxC3MxrBTrnutXyjE6YNK58AVicdj31Tzkbics1D65SuaX83dEbduxZoSHJADiheKswndAYSv4",
  "key15": "nrgsQZWmKMdpbMYaNVjNKtDqvzGpHaKgpMN2qqViK5jRrHQ2sf9BosXJ1qUmQDCu59rT9BmZpQiEJ7vDMLYYogo",
  "key16": "5hhRbawdrrVUK4UxZ1vJcNAuAoD4PPLspKasjjU76b2wBEkoYkxntvkodEJaCg4JDQ2zNXFtx1Wc12r7z2ALinV8",
  "key17": "4beunucWCMZoiYNTYqgMzg8Et2NJ8wxo2zj4DSHeTnn3N9wia91UtGgWPKGUr5xuZHVVNPiSaJ8TyXEAQ3oRgD7d",
  "key18": "4K6ETAypvn59J97L7KRtnumq8Bp9x8rMP3NFW5LW8HUcLpWtSPdqok825WqVwvhD6FrdypNUKsgbxCp6BkgNkXTb",
  "key19": "38YdBnr2no5hR1dU1n21FgjztFEJ8w5omzpWGpDdJ55zeNzv8VVPFS4ZKSfdyvX5YLfvAQonom2Gy9aWdN7FSr3t",
  "key20": "znGv94EjfaZogM5fQP9pqPpq4v57LFrykxoTm6uRXTK5m2MoLDq61Scg6UC6xRRVySHpecZGmgJ5xqyWrsMVHup",
  "key21": "4rsf6E3zewdWT8JZ9czfaHxH6tYLFcXXg17nsFEXG2E2HiDY8pv9KCdfWJZkHoRAvmL6SLaUj1TBotb4ub9zrodN",
  "key22": "2CVfF2xSv6TaECwvCv1cnyEHxnRBDu2jGZRZhe1gWwMsK18hBvGc4pm2vG7uzsN1iXXJ57kKwHE1Xj9jDy54HsRC",
  "key23": "3RAMDhuM8deSxc7Lt1RTJ1KugmN77zUd2DYrkeyFDs9g6mcqzPkz5ufSxAjpxNRX3ajpubQxFmfUpf34bVfG6m6U",
  "key24": "5wYxZKfzccEt1SVMSZL2NQq8SULayVqMvevXoZ78N75BDNnbWCjJFWtT57296rGG2JuPVA5E1x8wgwvTSxFGpYnm",
  "key25": "2nEBHBg3kN2EqsP8GAsz3sWheL434in4pJQC1WNsFJkZaeKPKZmaxR8WEHfRMRLuddmaB8gaGYJ9grYHndRvCLvz",
  "key26": "3LHTRxD8SSaM4pGkMEn5dyDQh3doZ7SK6xhqVsW1ik6BvMVV9Wsr21aerKrXe892X2iThSWM2gt1YXydZgT8736x",
  "key27": "472XGxvgUCMPqiMvWnvZfR3yd3pNcq6RuwPivZX93dfDActwhp3CmeYMb2BUXDpxDxVpSSeB3dBDi1Jz7v7oGRz4",
  "key28": "4sVKe3NJTekRzgwWBw1kXgdMAsobsuQPZ6eaqtYB2PZB5wfTuUsEZJtbDXUraKsEwYfs4pDztyZpQyDqwTqyyXhJ",
  "key29": "22kvgAFMckSqPPEwyrCF1KWmvv6fhYpRbQu2g5Rh1PGBVZf3ZtiEnz5rLbiSyBu74msoydpfhod7vqQDAvh6z6cp",
  "key30": "56RVn3abAcPZkZu1DqBAyMBYqYgLQrq7h9FdRZpNaCm4PmPf17DQk2AZsnnUkB2U5p9HUbJpYqLjzr8unXVJurSE",
  "key31": "3FMeADtLH6B6q9WYkfj173kdbiHgmQmgHASE7pCLYqqgtnx1hPfbEPLGTLC2CPNwYq5d5HzGuhgwfTUJNAnNRLsP",
  "key32": "5yH3J6QrnhpFpAbF6B4pcSGXNbFcdyanPjCKq2NrManJPYzViZ8WkNHsCx5RRGr6Qd1ibq6KfQ9VsqmjKZrgx9ku",
  "key33": "3ZE3aVyYKAnwjL6cZiZdUSUJfP29Pybww92owHic32N6yBMRnJ9zG4NjVzTb1qHJYRtSaewXwaUuHhZBdoTPs6Lv",
  "key34": "NnAKWHm9ocePEmWtYoyykvmYpkYMy5UBmEhR3Ppqibme3yidJjEL2JT2oe7pSdbAPw2bFqhAAPHcErocVrJEgeM",
  "key35": "K55bMSGNbPddzkkXsYeLjZzt6VeHNQZuZuUKGsuABgw2GtziAmSfgUo5swHDEz7YENofJBVU77SwQBiAF5pg5bS",
  "key36": "2t444VLSBhM7L8KMq7jbZAS3YTaAAzkT4ZgBUzzEjzFA5kn66eu57QifnEVN7hPNK8NCAvirSbTLyXCeDKQXMfgF",
  "key37": "Bw6z9UryAE1dZcC5i8stx7QBhLtFw1bU9HAa4vL1sXgrW6oAdxvE7r1M93WpUMRkJSx9KqBVUmFULVQqsWYE6ie",
  "key38": "32Myddn3kouPRHrYR1UnEf7nJSTd7Xz8MYgP6a5Cd7Kjc6hHRaLSn4Qw5nQQVSv4VHXWREm7AqyDJQ2TtpPa9H1f",
  "key39": "3cDsRHVBSdbN94Ff5d2ciFyR13piPCSkfhSWNPXxq1k6ixuSatVXqLeJFk9SCrTk9xqh3CeWERc8MLdMPuzTy1P3",
  "key40": "558erCJfdS9FpAMuyQ6z8FqpNgXnotz5S5pztqdeAs7GatAoP6qqMrZW3QL3w5cRhA9SkVaP432MTRg3SHkd9uv3",
  "key41": "vZ8weoxsiub9TPP5CeEt1N2aXtd2rJVxYBSmyG7b7RqK7Mq9jfkvMpy7nMZ7sbi6AK2U5zBp7hh2fduJj7PQEtW",
  "key42": "2iQso8fztxZeHT98ERgQ6KFG1b9ZnBiniFDMEUAtBXSG6gRJLk41oq9FyLBH1u6VQEHVU98kA8a864V45fMxbQ3r",
  "key43": "2TZxeHMCMAU9gmaRUTPfr7qiHcn7i9WL6XrMP2F8Nycs16FnnAMw6hag278NdJp1akHosb6UtZyoG3hLHTG8i5S8",
  "key44": "3GrV5ZXm2iTCgV9MuAqTB8EGwjnhf5kKKmyqcoRgZPtkGBiHR5DEGKh7xkxfeDE3Eas9FpRMGTJvchJPWwyFB5hr",
  "key45": "fedbhNAvNdf7WYbrj8NvwbY6vdKR5LzPfewiBVi2fVx9itueDU4UuYcvs76r1KMwMCQrGczdZf8g8SEnRpm1qy8",
  "key46": "2rTWfER8HUQ8kotFvrdLbHsuqtdkLEcEuFq6tdmDYbyCmBk9VwZasGpe3J2S9p7JpcdnVA7WWwDWDm9985ZWhn4s"
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
