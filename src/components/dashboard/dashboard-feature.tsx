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
    "Qh9CDvAZP3nCR5yg9AX1vy6mTPqMo3eXTttVeuDbpVFzmfFhhZxMySP5DVS8xQA2VB3Amya8ENpi8EBnAFxbC1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkNGESxSUGXV7U8dbpPADEcfgRbVy9DCLefQmh1AztYbedh1cZvQD4KPk1UH4gF1mmRH9ktueHA2CVLED3ysFZM",
  "key1": "3fNaSgSss1DVWEWGtANwLuhMNoX4KNeTUgKyTZ5wZ6FfF1GeTTPMrx5Xh7qzdqmdvZk9uojn2PWqomYCWGQGFZNC",
  "key2": "5zUKaxiQUa59aD2eBcHAGvd63mGtnphNdSaBswxALSEmKaezgeW7BxMtz9xDyzUw7CZVJTLDadngHnJQpDj32cmM",
  "key3": "28qBwsX3CbP2jRfEjJuuLRGHpoGYM9cqyihk7U7Wfhb9R9G1edAomTd5ztFLUpwzZPXFzYx3xiQyf21PKHYizL4j",
  "key4": "8CtKwwgRS6byc1zi2SE77Hk2c7maorNwMv5HjpUfWseN3BJMdBddLAPM9ioAVW3NKcmnLzoszs3CD6WUPAp6PBm",
  "key5": "4jXn5RBtkwDhDLuabki7T3KkqNuNEZ9Vg9qkZA9N52uiDpSDJQk66ssQqpSun6SF4NzrtiLHSS5Loe7xsyEQaJuU",
  "key6": "4fL4fcm4Y99BKEcQiNQZywdmRLgKRsf7cgDnLwnYMMSvzwF94TK6hoUQPhredjtJS5o9W8zygBdvg9iKwovvrLJC",
  "key7": "2XSHxtDGmP1jAmzmNVvk2ergQg7He3NnsmNfkHyUxQSsEYYurdX8zAxfWpa91ZGGqqVah9EGW2dSBHKxLezmFtKo",
  "key8": "2kWQrMW5r8yhb81jT5ccKJzMuTkN4FxKMMtgTG3aGAjJW9zRWe3ENudxBqNsj3KaousWkF5f6L4iR433EQNUa2b9",
  "key9": "2fKfV23eKL5LrMr6evwT51Ck4hgvuYPDEkR2yNMoRNvcwd13iYqzVBhJbCwStTsWEyTM9zhiB3fRwrPsMi553u43",
  "key10": "3wLQ2y6i8XQ9g2cFMZRTGe4AUnrx73wB8umyaCK5oHzP2TfchxhccHGfsUzvbbs9GanAo6e4Hw5cjN92G1qHdxPv",
  "key11": "4rxCnFWHbg23KgrHUGd1aUCStQBAwXHwMQ1yjkpUDVNRfby3JBb8Gx9fPB9fa6epo6gp2so8CpSsHmKnJWtjaXgb",
  "key12": "5MaSA6XrKmukdtVvgsdsbNpGnGuczvdQcfiBLqczXUC9v8gLGmXTmrAWMxSjZGmjn5xEma1DXEvPhyCrx9NvbVNR",
  "key13": "2E1MjVv1SJ6FCQeQ3Qpr9vrJjfANf4oxXuFGUVMwm2sJvE8a5S6TnEbGf6xLcwRT1JhvRfzYc2jwATTSNSRfJked",
  "key14": "3Ujk8JkicCbw4qGPLidTfHjyrqgr1wvHyN4KXwNe4mfzGF66g327NcGPncSHJxx4SuxZfZ7GjDG6BhdvhfgiXR1y",
  "key15": "F4xDK8wKPb1EnLb1XUYArp23TqtnvpacjaJPzhiNkkMAUNBhgULrDhps3xGe5jB2QRXcCusnPsFdWS1tohbFZHd",
  "key16": "3ZZD6gkbehdPWEwy6J8ANibusBaRULzmvz1BiVXu1sm4Nfa6KfCnhsjtqZ2kRr9veMujEAyxosJYGrbU9bL4EtG7",
  "key17": "4StSebB2R7UpsCCi517T56rqt4A8kzmY8EXqzLe5UMhGzaGaWTygQ55WtZ5uoSTERNcLP8QFD6Jp4wBNzwb3jJ3z",
  "key18": "3WQR7iU4fUwZPusNe28Mr62FUq8LcEAjtL13Ez2MGEn7atAQvZiQrhAHhQX6fsCfgxfpiSj1t47k1kfinpP8yBsX",
  "key19": "54q4eYR3kAaTzcqvf3YZn3sDd3x3QCXA9zRm7Tvudb2MhjUk8SmY1HY9rim39kcBY1oy9CQ7j6GfK3LZ9yDGE6Xy",
  "key20": "zvPU9oAaJNqAXUF4m746zN7WEKoKD3WR1hg8XQemTmzkTbjmCSdu1yqY5TKar1jewrov86DFTgSU4HXJFybjgro",
  "key21": "4UGBE3DWQRYJFFCNjS6ycsFgB6WZjAQvfRPGL55RS4AfKwdVU4sTWCdGyA4jTMrrKbt6axoxxVhacEXZwkqoTr6Q",
  "key22": "HhJs8Ju7MzGofZKGkUCrti5AwsL5weqzEDZaADUoNkkMSnnCdcCP4EY1z3UNMp14mAn87MxVny3Jh5nnxV9zpwh",
  "key23": "3BTTVJXSEvwrtHgHfdySqBm8ZCWUemGPmwi8s4wmATMifbhoFBYsNT2sBcMw36mn6RtDE2ra4ysd4FHv5EcqjBJp",
  "key24": "2VyQgBBJwdGLsZnbaosHNSc5kgdZ1YY3sbGf9EcGWRwufEshEfGSJD51uKwz8tn1zByTAMVPq14kseJhf7rGDELb",
  "key25": "5d6WMdsnxXaHtmPWMADUrPzcFA7azhzbn5sbhinaAfPdAtV3FGhKv2c5hMMa5zrUTALyhW8dCkLTGuHsYQgoxaMy",
  "key26": "6f9WtwrR1JmqDox6nhdzUuz7AMqdGEiR7YTk48PPxcqoBvG6NdAWBM6coFZYRE46Xg9QSrTVwRpWnx8PhUdvP28",
  "key27": "WAvNcS1NkpUUZpzvBkhMgCZq4YUND1P3gHqqCY9YZC9GQLz1wGGN57buWhSZMn5MpLh59rk4oQiiVgJQp1kSDnd",
  "key28": "4cQw1hq8e6ZrTE1yNzP4vXHF5mszkN9929ibEYETN7cuHp3NDPuLDwC8SjBA6MZdkNikA43en4uuRppXdHrtvoir",
  "key29": "2kynmN41SbM2s8FE6BiCG9826nPmjkx8buBukhWqeZuggbgcTjaXqt8WDhAm2yKdjUfKZ9oLFwQpp2UcSRAC3kJk",
  "key30": "41q6JYJtixJTDjp9U9pnnCQoLodT7YKhybNxwf9Zc51eMo5CVDhXrRbhMx2fzY5M37aaQo3nNRfS7RVsAWoFk8yn",
  "key31": "4YGECThqAMcRMNV5xX4kDSGhnKCSBzi3LgCMjqsMRXc4uLmiHRgbERuBRHnoYEvFVB6opX9aDqeLiA9Epm3KJe2r",
  "key32": "2YasCPjTfcVs6SWQBsc47X9zDNSpxKSdMiVrWMBkrXTVWWug1JqWEdH2wtUZEVg2wNQTPTsSQJtGGSX4bkyKd6fL",
  "key33": "4BwyZS2ouCRY63ZuFvBq6EKYWKFDWHhr9VyT8MPEibAF6YzMuVW7ymRsoQkWiF4Q1kZdq8qe2swEWFyVqqjJV5u2",
  "key34": "5Sg8RJYtkA8JcHAvMqhW7EwJM6WHLyzuBMWzGpe1Rf6XixmgrerVZ2uiT6JcFXSjP1gD7ZAZE1M6mC6JYjYdWGrb",
  "key35": "2BLbD387fVbNtPkiYGZva6SBEBwGFa23tcCW45L2TFSLpK8PZrY8MWVtcwUBgmVBR59r4uTRhxxvoVRAr115Xi7M",
  "key36": "7VGa9CQfBvPkrXZ1kk3nrBFx5ZVg6EnhAgGqHXdThMWqWeWyJsYNMLZDBFG9KyjFrsmhU9cUmurMCVUvDZpPczm",
  "key37": "2eu5KxmFjSix83uxCvQQFKMP8pBqy4RnekeVGdibUWnXJagkJgtDMbG29WfSxV3XZ5VcEVoQpjLffb1izENNRSHn",
  "key38": "31afKtqConSRVmXkanWYbqNtH4adKEN5SjnPwrQAPwneTrfDwLvehLSCwWY2uPhyVLveFG2Ns7kqSYzDB43gN4ZH"
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
