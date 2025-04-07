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
    "4Wp63zqxFBhQ3vSogVeq7FcfAm7LcHGFSFz3hgGZHi8jknLNBLi1eRZ1hcGYNJfH8orTmLsMvo7THFEhw9T4AW8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJazC1bML8kkxPC2kQ5rbSGFcqeJZrMwuwPGXKaLwZyuRjGpmBLp5kUk3X8DS3e2cHMf5rDovvHjRzhQccHgL6x",
  "key1": "38tCt6RTh3ZJiGyVtq1RiteMXCCj3Ecg8VzVyEwSYoULVfcKX1fkm1VbZVebxFk4iV14SNW6dss4dUDLJY1HXiJy",
  "key2": "yUdy2qUDAiL9JzDMhRKSHE5emxBUxKu9fiPsScN8Yew5u7W2kKhR6kYy97nwRGgYr4htRQqRHXiSkkDVvfwsCvn",
  "key3": "2UzkoA5gmprXcMxxt9MVRpqDwXGKBawHy7htR4BLAvu1rh8tPTPnteS82MRDDxX2ev7SRMc99WHSYjh4RcHbj9Vg",
  "key4": "67ERotv3mVCQpz1qNMrFWjNJzweVumnfGXKRfuhwH292Pe1i7CSTb3ffyMaCdCyfikRxMRpyrLEhPsyRgpGpod6g",
  "key5": "4bMr4RUZBbaDmQ6Dy6sHUcQ7dCLowyAdDP2iyXXdR75fkTBsf5gzAAfvxsU8J8BewphTXrg8Eb8tnBVDMDr4UYfr",
  "key6": "tLRR5ZZKKqAXH79PBRQhMCX6PhFJGx61pW7CPD9LBU6PL5XGJEHwZ9xFSqQLLb1HLUZLhUmFELGYXqMuqA5QN1S",
  "key7": "rZTCB4yo4aHg3gyPvdmkqNvSufgCnAgPK37bCbwhjJXRwa8bke8UM2wgjm5fpdXXZrjNhh7hMGuTzXQ9CxW9mXa",
  "key8": "5e5SaHkBxFSs2pVdMtyDv9NxZLf4QZ8RNKqskuGLsUen2Je14eGVLLBzkkU5ePZHAxttbbahDvB8gFqX2GQwT4wv",
  "key9": "4CRAyrf1eUBL6Uq11VFU5Y9b1naSQpcX4KBfjZnpC5TjWorebU1NNxPvzUVXXLGKek4Fc2nJQGju7HTLA3KQcc5W",
  "key10": "25hrMrwQQXufLftQdB9V13RTxB1CEJ4gDJ1xS1UxtRgHqmmZdrdTSGBdy9A13PoWCqG1GsWPFpMALuJ47N4Duhd4",
  "key11": "278T579mhpMsqY9xrkxVdtNfaRQwT9M6kFpR7NVP3uve6VB8cFRk9y4zBuvbV2TfeWpo21BQhx7d61erEALN6ghx",
  "key12": "5mcBW38hDynmsU7ZWUrnXJqsgqR47TNXp14SnzuWSSNWDWb8sTAGSW3hJyEREhSv3x9nkHPxkgKMddC3JQdAYdik",
  "key13": "4SouymwZHzjY8StFTg6s7mxgrX6f56XwJrPFNxj1Kc9H6oZvtrSRuK6wH74DBnLauwCTgTUhFZjuENjaG91ctQ8T",
  "key14": "2Bx9uDriBFUv11Lz43YEcpBqDvqBteutR4zoRGLGRyhdfA9F9q7sJ1bnWokfzhnMAnjQThKiPaPtKNz1DNEhUoSj",
  "key15": "4RcrkmwLbk1sSJZNEAiKdcHz8Zs7tFc9pbNvPebmt9r2LELxigbWae1WriePpJ3cY18n6McAqVtgCCXZhKKeziTj",
  "key16": "4Uoyd2DeoRdKdkaCLN8jNmHJUgdSMTFFGdyycrwQoWY3Hr6MHyiZyJWdT5Kz8M95fia1jmuH3wmNHWuyVUtUPKYs",
  "key17": "4L5pQSFNGTEQYovpuJfQon746phwxqu1Sppj4ZvS4ZpJz3jpBUfLCVUoas8oiVvcrBGDU9dvAYRSEUGnEC4YhTe1",
  "key18": "5hYqHtpWFTqzqsEZk3NFLnycSu3JmjTBWsqffFNTp1vWP6HUgCqGy79MkCqr1wc3r14nHarKZGq4FXTCgc15LHYB",
  "key19": "sdpzAM2qNsvgq9TE9BJGx3cMirPMMKdG5yj8DfXsuH947azy2hbduMiFqmZvv2uBCMkrULTEbyvZfaU8W9J4ycB",
  "key20": "2G8zjGz91aZgwA888Kh5ixtQ6uynUoHB3thSeiVGwVbBEvm46xor5isa3okDP2KoAkLJ44WrdY7xkJkPHii6Ujr3",
  "key21": "5dB5d5m8UvPuPgYuT98axooPyuYH88GFF9kctoraHUGURKneDz94SNvF3s6WcVRFXhtdFrgkbdmwXp1SHDZaRrdL",
  "key22": "49vtP1Ve8U1s2d8pEaRoPmr7nEukK8ewvXSjZee3pbL8gPcdMCM6ZW2CNsg13QLsieNTP76UTw9BGCpRENsK4eA2",
  "key23": "X5tMobwCEzotS6Jv287tYKHTvPdPb5BMSiYTB1fFoJDyYJkpxtcxsNTW5bSMBSE7eicxUCvdknVRoxr1smxJQFV",
  "key24": "5VwYHg2E3xB3JQJAecSxPECXGhpsTbeahaFAXqsbbHFr3pNijQiXw1MjhvJaN6mmv543QWWAcAdEtohR34erKi82",
  "key25": "FUcVgN9iY3YdJ9GdQzwYQDNhDDcKMfwEbGgK8Bd6FNgJXrkgXRRKNgEeuRAGYZu2Riey3oJbs3AgLnSWEu84LqD",
  "key26": "5py6taXLvQHcr59FqFWNktk8hm65VWsWhZQMtt6i6CdjBVwocTfk4XKNzd5dB1piM1E9h4sHnxVmy6k5VLT7Ucjr",
  "key27": "5TwMDY6YF9gbYAnnvc5YQLULKVqc9E2eoQYddheFFN6Kj1sUdAFVBKXrZ4kRfe96UvHLg3NXhnxdd6JLUfz4LUeX",
  "key28": "2JDhsPaLnGA5u6rAPPEkiDwDbobzw2K4GPARsTwweoZ3yW5wHEsbpubYe5E9CCjV5r45oXfS7KnyWvfLk95cMN8T",
  "key29": "45aDgYFzFKXcpbDBLuDYQCpa3vJ3BE5VwVyDr1yi522WRZEDiaLqeX2ijGT7usSukw2TAkYKK5tcQMLxTGV8a87D",
  "key30": "5Jj9NKAGtRf2sa88BNeS9nq7TYxtNaZDSDttJjgd4L29D8Lh3Fc1ZqdjkvuQv8zdjqHLt9LJMZmnc4wUR8WCAB3F",
  "key31": "3oFAxEXzKUumqhYCecWm6ChfvTdDu7beB4ef8jLKKKX35UAh9SgYXUvYhMNj4fA3trsQWjRPqUoJjJw3dkzT7ngT",
  "key32": "5UFQeE2g9bCkTyA8kSgzpY7sS2GicgzddM5AaCsoN8EMxHR1pjSg1QjN6VAxtfzfy8Y7tghjsSm745j7jQRKyvYZ",
  "key33": "2XdbQx4ZeuwiJ1XmiSs6cEfaEEMZZDf3nCeNo79pNqwoxPTgJRXbNMTeRHhqttSFcqRQxu2wU4ZUJXojsibmyBL9",
  "key34": "LyH3xruETRj1XyvAVhwmzHcoBU6urVJdPxmxNQ3ReZ9oRQPvXAzt3dB5Qdgma72GYLLV4DJ2QzHfVAnzeNwM2eD",
  "key35": "2wRXTu8aUJ4C8kW4ndc1JXkLVfSgbFhvd8cSVzwzjfhWQGdE4kyqBkUFcHC4P8bJMw256iNvzaf42vcskY3eyjGE"
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
