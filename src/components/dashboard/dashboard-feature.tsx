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
    "5rJ8PZAggchUQyjtgiCvhKLeXjBFSa4uwbGdffXYssjhExVBqRVj8P9A8zzpNhG7p2SautrieCBdREdVgCkH2FDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyAcQgoPmbXbbxMbk3jUnVHn5yrVxPQFczqVBcdWvWTW6naPwu1p5j1A5Q3VaWCxfA3o39XP6d1tBBBeknLYcjX",
  "key1": "3pCqqsYgSZSNo1jPMEabHQPdfL8D2N6H5KaZr29X3mVZYC6UPuSSNn37c88m2gd3SbCs77e5n2yjg6YGCNVT4SUB",
  "key2": "2UWEVfbYPdQ2XVEo4Cdc3fcTHBVkmocXKzYTjN11pFn72pPuJVjhSGrhXmvLsqWmbaaakk7Q6hCHaSDarWB68XRA",
  "key3": "2gygWqrQo61cazer9f8vV3t4M7sDcQ5QoP6Q5vq1w6sqXMrfAQypbm896mFyby3aWqC4giL3Axqyi6KFFKWyV9q8",
  "key4": "2yinPLvSF2rR8aGg5KjT6ZaUT5CheUs9RKQ28eY6V4NC8Xnwiu8WNLzzPuXqaVKtGXRzbMNvA8GSGnTeu3CDGtaP",
  "key5": "4rk8VNR5WjSuEGq2kvHm1hEXbsz3kk2BHASwAomJqi6dws1sv811oNjwyUgiSBrhyWoRiYq7xtAELsrLv6RJJmDv",
  "key6": "2RWXmRiHNB1WSjSHzahywqvFraABGMjYvLaF42g51QcVcXjqyqLW2RyJCb8N3VtUopQiXj3gd4422iPgpy7PQkxR",
  "key7": "4ybz2z6U5CSceSc4HLJdyQBg845Wt2mGumaQJ4C3yeEdkdtwRfttZUTfLEF11j7QVJCCx94kQGpPJTMFg4UmuCGa",
  "key8": "5GZRpyXU9zWwUE6GpT9PYvJ1q82zpvtoLZ9ru3yTpmRuJQpLTPnxmjYqhaMQ494mWpV5DVyxKMcPGYrDYp8AdXvR",
  "key9": "4Eo1RDaACWYab6Xh8u3yJ2HXjkSSTKv2ovrjWvXS7kzpABc365fKXYf7dUU15W28j2Ha5PvacM1PSC4Py4cFYS96",
  "key10": "5rSTgTm7d9QnNGSp5mMkugyrnTSmEtxiyYnnaT3BNf4of2pLYTEaJyP3eqotKZp4x1gxP1ZE6m3C7P6vnVqKwwyT",
  "key11": "5T5rhKaqMtfsf4SJwX8j3zjM6dBNwhU4EjAiQH7ZKhfvHLEn9wiJSC1XATRKtpgbxm762iX5skNDLW6GjHWZYKDd",
  "key12": "4x9xZzLLX5pPnW1VxRzN4NUK2CYe87dmp9wFNMHmPKgP4C3C4m61GDVX3pTQPq2vE3PNfyriHYwBz349jZQxwLBV",
  "key13": "4URmn5cCA5sJVxhSEVxgeNohBG5rv5H3aat8ifpLjMrjZPkJ7WNYChSi8isaYgvcjNVCtH1NgDJBeaPy2mGMRZYY",
  "key14": "3mnroYtxeHBZQf8us7tvWLVt6Xiy8eGJ3iqU56E8F1k5NwBMQNwv9ZpYJmQt3KLVKcn9WohtxWN3kPqM2jMJU9oB",
  "key15": "3fJuNfLG8B2njiwYStXKvcdHqXHCCzc8FFSCgyqL9RHj7mPniNghkdRbyq68txSQSN9g7gWCRSWZV1kjmjFq7BNu",
  "key16": "BuLk9ykCJxW4QbsxZoNp52bhBxB91PDPq4YggeiKpi3Lck89HWVWQm1cPdtRPRXxssFFKjj37XPCcTx7RBmk8cA",
  "key17": "42SAqEjcGqKWVfUtBwBVwVtGg3zbmYH8m8FccpZvW9UMV6URe3d6LCMNtkwHLvmZhkEGBxYcQS4443wTNh6Qnd7h",
  "key18": "52NxqLwhC7AHEawoA328cnfLTBKa8wxiKfCT7cHvBRzGzGVfjrdkyckZLRuwkjns9VGsgYtorhHWXL2mthGiwFXz",
  "key19": "yAcQScxSU4edLVdA6tKE1nAcgcVrErwwCqp7hBFeN6cgMKMkxTa3d2VLQHiNr5wVPvSiDLoxjwaaKFjwo6o9FUF",
  "key20": "mcjhq3MgXnyDqiyw2bvFrHYCbo55aYkguXagyySkdiH8SpYRdmyyrFvLyEeh3xjhsviy7fd89aW62NhNNeE6Yde",
  "key21": "45w5pk8bNSREjssVoYFrJMifs8HuAQAmjNXDYLZcYFsWRbT8CcdLL5ZZk86UciaAixVs2pf4L21Z4YvGRfLGNKvM",
  "key22": "43bcotRBMMn1a3jSccYQzaMssBmCXBoestJxQXghCVsB3BZhfVc1EJz8eosWd14JVypLfpYjuzPT6SP84YjNUJPr",
  "key23": "3AaYG9HGNdEsNkWLYKGaN7ZyGJof3AU7KxgvNDGKHdw9hWpUnncthfXghnh1iYLMF9jhu7Kwbd4AnLnWHVNrTsW9",
  "key24": "61MW8gaGo5ezibJqtTyzA4jYSYKeacWPoAfFhc2hFpXJh3XkqQDUBJGCy1X3bp4qVLmJb98i8BeL2iwUY1nDcnKh",
  "key25": "eZayP2t74HMirF2DUk1REfYGMk3sfHcBqqKFCTAR6h6vgbvmaSFyVHHfRKsfLKkKZahqJY3ukx8yqcNF1JtTyP7",
  "key26": "4MkVazWr9DSYouUyrhEjXBSZMpRwxhyDeavt21rNJcnmY6dMQ55bRj215UKUrgoZW9PBizHwWnos5umrUGUZr1zb",
  "key27": "MZZxaodoE9w5XNZy2TFGr5U6fBCrC7FFLbGsTwGFFEKjDqTYryvWcN4VnoRdaFQN1YUAg5ShsDmiiR9qHLeRAFy",
  "key28": "nJBHUwXSdsgYQBgpvxTLKzLMmz5NPn6LyBzauSv58uKm9p8StXkcJpHwdBTuoBTcDegbhnsQqupNiHkbGQeLD8r",
  "key29": "64UtrdYXJjKvqAL6hMYQCwCF1aXbwXJzVpxkminmHyJoSwrTgUFFijoo6Hd4fkgHcPWMbcFyz8SPbNX9AXeUXtw8",
  "key30": "vajLmmvuJBBne1QT7jRLkrept7mRW9V4hgzkLWryVg8dHaeeM4YfSiboCXwvGvpgkSoHNkKUegG2GNHN2h7kLrQ",
  "key31": "4Xt9AuLfvSvGymJY21hqAto7bswxRFTETNQEu2Ne3rF8HSbeMRUp2c4EET546azH952Czc7fuVaTxxt2ckRe7gT2",
  "key32": "32QXqNFNfjkKo19oo7GDmAHkJXVgb2bFfcr2G4haeVKcexxbtzeWhf55WpoCwmP3vvRD8URZuwzZKSZSm1WTpC4v",
  "key33": "2ngrRAeXGcWHi4agcfxavPkUEbhUk6pGXAYEWdtTfUg9KDFcWHiwizum2aZVZ4g9rU3kZGexpvXGQ5K2x6VBkj4U",
  "key34": "45bmGsbrtUGSJwq3QUY7Wn3cyvDecH4ry7sguRfrrxUFNc9UovqHpC4oWTeoCFdHLj9c2eAj793cHoXKZVKBFmCT"
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
