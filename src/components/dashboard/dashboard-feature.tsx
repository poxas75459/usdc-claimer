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
    "57pP3TsQq4yLwxZSCZ7p1aykTbuALgQvd1DgMR6eCrNRwnGwzrXQxtJZaGx3xb6MiHqCnQX8sHinbT8ngCyMxgav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xEn2WEqeDSnMmYogJbEaP4NTnU3VPdmyHpmdQBmf2aW8AnGaXbRwZyT3R2ScwCYNqR45cwwrbVRWyGFf1CP6LxS",
  "key1": "4GLZGaGStcBNznJAd14xqAiTEhww5s7oEaQ8wQu6zdrbQonM4VfiStZ4RNwiEjqGJdBMm4ndNjRcjpgBhkshy6qN",
  "key2": "3gRgHfNDpXqX6TpVGZuK2TdmyM1aAiXBYJ1bRzFQqX1yhvKoUQiEyDfH7wL3hEa83fptm4sdYHNWUgg21pSGu3vo",
  "key3": "4Bhrw6M1jA2w3ZjhjhXKBRQB6QSSgMC5XNgK8wVDoGqfdmYMxUY3GziowuxdSZKYGxCiRhRkwHLnqHFXVrw6MuVS",
  "key4": "5jHJjtFgXVqYscPqT619GaDR7MqqZVfyCMKnr6J55rrow7u8ZJLqwnAE1eDXeQxQemeYsTHkskFF7vyHRWPoDfFb",
  "key5": "39pSnmyuiaaJCs7FZyUy5KAxKtbHapXPrrubk7JzrgVP8ZDoUxa1wSAscAvdxh8ExqQ4JsdsDNX9SCKJjRwxv5fx",
  "key6": "2P8Y7Ube43cuoZgmydh52du9emp3CZ6etSwcHvKJaLQPd8h229LioQWRFqih8vy6YQsHPs1WGWpeL36iKvrUQWgQ",
  "key7": "4GetHQzvFsJLmKcZLABMyAttTSP4LQTsN6shnzSmRTJ8mb3BBi2AKcfxgoKeqicdEsuwBP5rTAYm8vJuZN6kFVug",
  "key8": "24VN9SuG9ANGE1QPHiaaYRpLmE29HUT9Wte7jdZ8VafdovHRyX93dvRBbBhCRmSP11zyHQo9CEbMq1caVbwapWkk",
  "key9": "23UuZ4paxEZnrppZnLXmuHhFe5HQmTZh4Tr57FuCurAjXBnphdzpSyA4nZ51eidL8AJ1Ek6HmKsB9xjJ5XgsiFW2",
  "key10": "dBvPJjT2FgxMeZqdFVuUojMn7ndJo9EuDsCD2Ei544zEnZUvcdtWe7wCrXzDo7vuQgrjTS8ELSeRpaUQpqz6J96",
  "key11": "3mQxThfrorNFn6iiVYNCoKH8nstqvxtxJzaBXJ3Rm397zezRzkTG9wfQvZfXCM91CJbwUep2rDrH9YWtRP44kutt",
  "key12": "63iDjDBDJkdeeDrhRwGvUxseoTa683YHjSsGA6jzjbE46p166JmHgGc5QsqrzPxygeci8RMgbLBSgy7uPmEeKSQY",
  "key13": "4CpxopBTn31fdTCqCPgHGRJDokeVTWGHpmcTrpixy6bvcfK7pKDPWNFSkUQg9Yce9KJhLtFJEhhNVDnGR38vV7V5",
  "key14": "4bgn9HwQkxqqp8MNrbLEZbXg22SLA4XSZbt1FdnBJNzZLwdTPjuKtie7wjY24ysf36bEtNV3GpmzChdKtRCCMFLY",
  "key15": "gWUTmAitg86XZKBNh1VmiHsAWc3nkwH9baMWnhN8kCEnxHgykyYZ3mhXKt33PKhuJRq1x71xrK5ZvvMu6UdiaRA",
  "key16": "2BWykLWQAg76KFAYHjf2UA1nvgUjvT8aMLBMttaPTT85EX7JW9xcoN1EzjkF8az5PaePFvGDkf68YfdDrdupUbrT",
  "key17": "4kuTEkzDEEyKN7qeourqS76KBHwdSaXojQ3w2PQrakgKFZakvWWLUj2z8WMDMnBMMDtqG7PL9zueQ21RqYGzBvTa",
  "key18": "zX7DdrqQftoa2UNDt6eSkwfvavZHKyrU2872NTjUsX1zj1Hh2ds9x5nuRN5FqRM9YbNi7WZJB7A3bJrJuXnGbpV",
  "key19": "5SpTAyCBMCQM72D2uQAM1HYJ26LNzCAMYvTbonWNUkywWF9byWkWWX9j5x4AuT3HbL8BMoi3qqox5PNfekLbM2Ne",
  "key20": "2YhQkXq1h1iZcUzZbwTUsgdMXLKCeudY3Qxx1k46FG6dDZVQi9BY4A2unhLMCEUQKs9P4nBmuXD92oXNG8dF5fS9",
  "key21": "4BQPvv5npBtFhopeVjnXHjMcDPbUWAbggLchqwuxGS4dJ4MEdJz5u9NE83kJZ9UAQmH3uXY143NNpMXthFA1uwNP",
  "key22": "56xtRs58RtUxjypJTiCnjVymoPkm3YRdv1gWpfthSVAcxsrjTvaybiE2NiMtjsgjLKE52w25PoY5AJCcEXCRwqFS",
  "key23": "4igt3j5PyhVRf4X2UZGs6gJR3mdJV2anoVJcVKrjrEEWavY8DJyJJt87tQy1YP2pbdW2Rps4QdwFWtGZGivzdmhi",
  "key24": "5UL1WGaJVzpxZ3c6wiGdWvEfBBJrK3GeySUKjjSBAwvBX1FpLFsdEV2gzKqtHtFGCfyAJnAUyjyA4dw5puikVWGh",
  "key25": "3ADsmQjf4R7nKenPbn8jPJUm5tcCM3qYn9QXVy3DrJDW1Qxdzo5Mp2q4kBuLcaHtt6ZDzUFSgDFLimYvH2MwMkzW",
  "key26": "5iQoDhCD9t2UmtGSiZiscb3MLvs7CdGciYUxB7HjyWaniv7quhQouAmphsYdtBbuPULUyQwEoWD7eSeDcbJoN3ZX",
  "key27": "x3Mxz3pSF5v63q4ALknWgAyJZTfhWn6UxbjBsEQZU9weHZL8vgitWRmhyd3gtZ45GhoQif78xQjTwCNZhxPBpFU"
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
