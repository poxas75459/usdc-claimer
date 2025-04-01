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
    "2itSYWf1sgTcJuGfNuUiazpPV82gT5daq39DQwSAvS4KRG2e2CFc5ny9AxSydowKW6WnYCDLea75bR4E9dTs2rvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frhKixLYgcYpYYwJveX4DQNPd6eMWXDTBVMou19FGVDJHfb5qepm7KDfyWeDcrEnwevEynrhyH81EaZsCdi7Mva",
  "key1": "2v4Gbbj4rgpwTHDRVZKfmQEKaxocGkg4vaynVUEqF1FFA5nyPDZSaMF6hZg5Kgkx9pjzA7rAfMGXQ516Dvjn6HBx",
  "key2": "4oaHsibsSejDXjpce7WCiyFQeLJEXzAHHnGo1aKM1Gkq8Nb3NYXNzQWj4VPy1osKZKqJUcNXakjXkn651faRmva9",
  "key3": "piFmxFytZFfDQnfj4jswaJNsvxGhMFhQP6GVxVZqF5GDpr5zZKmyZYiVM3t51fWQ2TnuNBNaeVovWaqTWWBmrzt",
  "key4": "3ew2XWRVcjLcVBtYDTcfB8P5ShG43cwimGqD9qtJJHE3SzkA8fVmvkx55eh2CvYHhFSKrik2GPjhCQ3Fgc7HcSr",
  "key5": "5Pdq8Bxwjw2b3yjA8TxUV6Cdx9WqSnv2LFLAUA7bJabiAPXuD61iBG9kS5XHt8JDFdLUzp1gYyH9NBg9TPnXRrww",
  "key6": "33brHXdpoGUjXupxW7yeY6AkewQA6EX4HVGjFPCYJX4s1QfoPToFVHgUXJKYayUqRtVcAmHisDVk847adfBUoy6W",
  "key7": "uxfUBP5uY9RsW6Kh4pTqxu3mz69qMLdjVkTgQMjBcWN77cUHFVG6R4bkZ8Cfb6sVzeiBbtcxA8JKAvnRk9BLxg9",
  "key8": "LLConojoCMPQ9D3ch4MopF6ZX68jdSaMsFDFh33TGe4iMgcCV8GMbDLhhpgkKaZarGTRNV4r1oY4e93TF1pn2ud",
  "key9": "1eXePtHN5Z11A3uWpoxCe3vmjug9SZSwNY9PZN7un2W4E7PhavncJkQ24U2oFc3weWZVB97m83CdcEcfY45mqC1",
  "key10": "5155vesn9jgL8ScganYJaE3iMP262zxFHBV5ErvV6eCHhitXyNnL4gGTH3oQVQHMyxiKZz5bGjw1GeubQVpxvbqF",
  "key11": "35WaHFRaUiPBaFW85Us7UG9V1hpaj8ghqWPjzEmxm2cudEca677umUfP2WpcN2dfhqjsvz52VsdfPEDcNKbXi1eX",
  "key12": "2rwHNwiohSPq1Dt8aMGE1oJeTLH1EqHoq2PgH74f5PS2LHzuYjGER6a3JN8jgzQPs5NBbUVx1PGyBAMrod2dusyR",
  "key13": "5PKL6Ycrq9gGzvZ37AKwmEfqod4BHdCdkAmJPEqKua1JPwncWtTeeZ5HXxsg6SkCv3PDkv83WBVNEAnygKfGhjrb",
  "key14": "38BYkmememdud9znRArvgs1xQCaP4NRgRXswTWXVoH5cnfBLn6XbkBMmiLzVGtj5fGtuWxGGRiTD1sdpbW5K1GRK",
  "key15": "4dH2zo8wNRZWEfqMvNHRFJ3JnNFYH1TbGXsBokDmhHrhMYzUc5GFLX2LGzGJMkZPicQDC116Z9zPc1kWFcBRcZyu",
  "key16": "5h8MudsT9QCCmJEine1JP3EjCeez6Vn4a51SGLWqJLAizvFQfaGHUt1iybb2SH6UYVmSbdJPTbvAQhoJ3DxPzbxf",
  "key17": "4t64QCRkzskrqRcZsoRtRdirnj8saRjYLSH4viwVL7LqgZQBuS7Q8CfH1ntJDW3yVkdrngyjYvfixwAuK9TRL3Xs",
  "key18": "62Nr911aTa7dXrgYFyU2fMBuSJbXzt1xKHAEyCa2paj29a2A9cxazeY7PdZ17szFijf2aSTHu8PjCWxeMWskyYBv",
  "key19": "2Sv6wt4uqGgV7ag3eFw6PV8eVVCQHCHYbSQPAvF7oCj1BoPwCAaGwrZRLabHBLwgwYguhn9UNGmWs1UyV1Qf8yfE",
  "key20": "3zFuTmkMgckWc6cXohZkRtWwm5VBKz6zHRiy6LrYydBWuEtYa7KotGqnXgQsrhbc4yrz11ToBWzt1YhYrsabAQav",
  "key21": "2hpJqHRUneFAe1JBDm1wd1bJoiP7Z8Ck74tFFKMaXbzQw66BaFoFHkzTZMfdA5B5z7zS7CiMZwQVRbivXTCePnBZ",
  "key22": "5uBNxx1uVA82kotoKux3fswcMqttV5Dh1pmNkTeWzfwJEt7YVmNrm2bck1aEjuVePcYVF7yWt4hnwrvD7yP8rYmy",
  "key23": "5wSPJqn2yH73A97J1uVQzqiZ4wyDQh3yYNywmqcfYLDtBKpdnkibXvNSn4nySaNGvecSCy2oHEiJDidkAhFKrW8q",
  "key24": "4EfyasvB7cgN6w7MpfU2ra8S7gkBJtwMSaFxGT73pcE2cHJqqUCPBmbDvYAAdVWmUHVjfvNG8fVzawAnyAw7xQCW",
  "key25": "ueWPHwJWXMCsL6d43mCEYFp9ieHaJxxCR61V3gi7qkgCm2frgcLc15vJp67T2Er7WQYwzBfKCFCjeTLvxN55qro",
  "key26": "4SKz7snNU8R3hZmuA8c4gZTjq3rheiF8EQ4y9qhr7Hx7DNtCdLSJ1N15x8xVkg18Y729u3RFYHJfd9mpF2bck62H",
  "key27": "4W2MQqTptye5r2uRL5mjAo5P7DJQKuaEtqFRFmZEmtZ3fZNuJhc67tsVn4ceADTmM4xk8fthEGqLfePPvwwrVEtk",
  "key28": "5SMdxcXkCSjEEX9pQoaFVy8hpv6KHJvN5mJDkPpVGAy4XVTuMo7pQNmq27iG135ErEbkLKjvfWiHfNViiBYgJQoh",
  "key29": "4ByX8mWUBzdSHa1mhzPfEGKXWxDVq71T6ghQ7FCaddDYhZdF7ZsmrQwsbpSYkd5sMuv7cFqQtUFm3ykSfkFavqAp",
  "key30": "jX5MCyNBL4im2K4CePjERaaExFrgbRUwznew8tLjjD1xxqq9yDU3wqHFbRe75Q2bH3kcWGs5amTayE8j46Uzexm",
  "key31": "H9ddJqPn68DeMHh8cGtTT9PH9FXECiN4WAkdsMZiFYKZaVB3huTS4hh4rH82UTYzGRTTR4B2x2ow9XGELVbyjQY",
  "key32": "3yd9bpECBGqPpiaoCUc35mqQ7guKxjMxsgzAX47FDoEKE3AVPN1BCjUQfL8aXo2v6CqPjFj8urjceSGuFbKwmUjZ",
  "key33": "2DYqocWAjMgo12S68AvQSrcaFnDYgRZa5f1whTZwjBgLoPvNpHhYstzv7F4NpWdsvDSj5TvbDoGSE3e3Sr54i7zu",
  "key34": "3seScpSypvYVekfAFAeXr7gTy9RzMjYSZztVHSbMAfZ6RuLJhgaDBhaCFyzEBhsL8wFQpatiESomswTBUh4bV2Jq",
  "key35": "5KMy53tTi5NNv41DZjGMK2t5kExDwMYpWHwU81aBgAGfj6fnMTa9rhxb4aRGiwf4XHZEfYAQDnsRGKGik5RWmqLD",
  "key36": "2PcbJC1GqZgTJ9mF4ofdhKimH9bQFRgmGfTcHphxBzURFUifbUxX6LsWY1HXbFXti3UsxoTebHDipaWzZcXQBLey"
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
