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
    "5cuif6KXzxKcUiiYWdQi7Towz1QyHzVsiCzbVy5a6Ls7sE3J54MECk9SvA2yu9ztrDxkEjASxsEjVZWFPd9Fta5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nw3SQSiaoVnGLbhqAA9G3jPgeomjnxHoxQTGVwipdNHAW9n3TEe4sTZ3T9PF59eT5Xz5o47JVCLzhRhXbsx2UEY",
  "key1": "5b3DxExqfDPnu3PPT1NwG7bs58qZEd2LiDzKFEA9QQZHNjRu8TBfAxHfPEZkj8F1PpTMeCbo2rd1kgmqTaRdZZu4",
  "key2": "UjpXUJKHoiqGEey8kbjKCX3A1VuLkDE2ijumEZDNqrTc38VwTsTNNiCKo4WBwPZ6HubWhvJvnuSfWD21S6UaUD4",
  "key3": "5VJMFhGjAXNwKdaZ8hGuL1W9ZtvKWfkvFbbsgkCnpbd9b4RJsnxXdtZEetPm9Q2zcdMRkpoC2wXE7HDbHoPqh4JX",
  "key4": "21Z9wm5KtpFHRyQG2z3zh1frex2wb2XZkyx3BhvJMD95RN6zQGuTnyNfdt5DPFXWUDDyY5SPQjFWacg3XqjjqaDL",
  "key5": "67DBsUS4NRtXrrvRYaNUJG8jJLkjfSVtNW1szoLBtL6gFSazN9r8sRao5QeoqUWYRVeaz2PUvcvuayRfETx7e51U",
  "key6": "3zxSn173fpZHSzgeMm2CniKD1LCtCHMSN7av9coE6GzwVgqAvyj6dKcAH5Tn9D9J1sgRevCzzUXXFmFViZCTDRBK",
  "key7": "4vGhfMVnM2rgoLEMpBrhWZiNjEqSiz9yAnzE6WQFV3oRQjFNWsdMpQZV16AHyg6G7RohYo3vkA2B4Ery4ZFC7znL",
  "key8": "26JANZYvEUv1Cy52qynvqe6yZS2obAS31WEioAeMGaH2fZv4P4RuCb8NCiJazwAm2R8K3pzEcM5pwf4p9oPrzxy6",
  "key9": "4z5apmGCwUuXZg7ehCYpk6oe4UmRuHfLTuxJ2V4qMEDwUKsaD6i9wfgSba3wnDiMtH3ZuizVZXv1NvPtfQrXuefj",
  "key10": "4q38cUpWBFm7kDwMEngU7aHGHPoVeC3t6shMBVpVegyjihhNRPnea3i3o4NxQtPzY5eVQ2yFFPipk3Rpc5pN1iMk",
  "key11": "7WEu1FDQcfW2GfAuLr9bJcu3S9gowfZ2s3zQWAg5weVEX6CTfwrG3LDWus857z9nwV6braz97AskjiUkisyADGw",
  "key12": "3MszR51ZV1oSdCkxNR8VNHXFL5Y8J34SkznJhM6WsQEihP99dczN2bhGUQxxGUxDp3V5V7FarBistG6QWD1LDNgH",
  "key13": "3F63gHMRo8psrqSVEadGBbMjb5jkXKMmBpZZP3jwdQcubsauwPSAQzAkz97zvyjVbL2jndubxBZ2XHMcq3iCrjR1",
  "key14": "3VQrQJWxHWQ5RNHz4h74JDaZ77m343syKDfdkStFB5Fybf6To6SZZ32PkWvXBaJbAWdCFSg55P2ZkWkUpvrAuZTb",
  "key15": "4iEQKxw3Lc312RoR1SFgxkNTwdCMrGW5fMWSBTi8SidkMi3a57p4rV3FRmBhgnJEFyRbVJoCwm5LKxtGPBPzZEdu",
  "key16": "2fPK1VKrKGMhXi9H5a9P1mq5y5bazJL2Qe5V2zY4JndREMGsCqVt92AnX4LxqzWhcZWgFQdVM2MtY95NxEQhJiK4",
  "key17": "4xRoMvtbZbiKDp6yzXEmjYmgTi7Dq6Dbu2DBgDoDuFPuLXqR3wUHWaabA6kPAyxsqA6gsNkTDpvEq3w7wE5qdVpg",
  "key18": "6mNsJksLHtVfsEed1eHC4Cw8TUAo3YoJcEmQSJxVKTWPfYtVr3muqGBs92HRBXBV21XTCRunHr55vSWUvyjfvSr",
  "key19": "2K9FsnCa9sALVVfCWzCDruqCKFNYfFkMkbcnnPs6HoHyiwkZdNdEoFJbgmY2ADSUvRerYH7gW1GBwWiYCb2uWQNy",
  "key20": "3ZyTTZwySDu6MbkF2JmLLpuc8XYonKCH1C8e661zA1SZepZMqkub74LYAUw6eprEAgGudaAXjHS4iHsXFJRKDMko",
  "key21": "4S9pQJazWHshBL6tho7Bt55YdKctyLtDMSypDNk5xYCBqDiYfX4rLPo5oy9YS9dtt8JEXVcwE96hY5jX7bpg2M4",
  "key22": "2CzrWYB4kQaC7VUt9s9sQotjHDKjRohSfXTPoeu1mH4HK3AbG4p2YwWSZr4QiNiczeqN7b4LVMQSWxxdrWW2vu7Q",
  "key23": "5TeUiMvi42sobtnNcsUYcARniGJv3wSptADEEdM9VS6F2ecqzbRb1Pr4dFiCLXkZKqiJDTUYbwXvp5RhS5UxwE9s",
  "key24": "JwMTDt5kaFVD9S73LtNDbHtHyYZeUjUjyBHjtP7p9RS5y2n8F8Nc6CGXpoRZrUUhjKxytsisEaDwrznxumWtbCB",
  "key25": "3JJSADUBeEQDsYU93EUdGfNANfjXsAdBcG8SL7gUp1A8TB9VQVPc5CYSHX51BrsNzSPdNvNtpGgR918rxsePfadt",
  "key26": "mrWnF1n1bAULzAyGkiYM32N7BsLawYL98iwu5Ku9QhimDhvo6MFTvLYBGga3HMSN2GkBM2UrDTH2R3eGHGAB9CG",
  "key27": "4tY18ocCkJt8kSvsHAsyxcDQphqBDLe6NBLCvSoG13d1bVzWofF8UXwjgsQaCLVawjry6A67sp2Lysjuo7WFjAkv",
  "key28": "5L2i9jKC5pAMRWNrP9tCQRFwziRrjWyMUExNhWhCSRg4cJApdXkJvdmHGWKKaFLo8P7gXBm2R2WYUqPZ5NyaSrGN",
  "key29": "yhHJWzNnuQUgVEjEzJCK8vr9kpjVaspxuCTu8QdqfcyuhmUjhyeLSb1aSU6UMNf4CvEKwJPEYbNyt8JFyQZfn2t",
  "key30": "2UeYrWjCWpGAgF8Z8yYHPiLnU3ACPrL7DKmRRPEXz6AMSZoekkvpiDw6Cpchb9SqzY8DHBqqRH3GrUfpE5gi8mTY",
  "key31": "3VEqA8wRYKVceLsfAHX3tpmwEX6TEozR6KXLWGFmZJfvpiG2XmrE9Vd2hu9nCSC7RHYdFssViy7WgTTeYHYd868K",
  "key32": "4cqVqR55gLB7dfvUpUxYtTwAtwhU6SxVBFXXUtWRCrtRjzimivTwnEDkaGMTtgvjcvS6ivisd45eAHNn7ibrTn8Y",
  "key33": "3et6vSbFeQj9P2MkWysEwj3MAjfdavDGVfyeunyMMi157JrrmggXyZSZVY8VMbvcJV78qzP6ksmuoCCisMmVSU8H",
  "key34": "51GiwemyxswVimRizTLqnWRUFBBuvXudMK6Km3g76PbBRaydTBHoctZ4zFM3GK6BT1YaNkv9Yx7bVHjLUhCWxZME"
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
