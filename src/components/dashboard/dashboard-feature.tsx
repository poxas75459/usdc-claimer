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
    "RNyRGedTwjpDAvVE4JT8KCpfbsQtATRatwQ33Xnhoy5DTvKGggLGNzotcMj9BwuBKKbW1ER46GrzJrtG478V6py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qqv9mqQKrKdPGEjPX7pFUF5ceqK9jSddKU6D2LyEZscJ2o6UH8prRk2KApao6nXQmtt8mJZM5D4fgXoJiSBVTFx",
  "key1": "44Y5qWtxEAUAHfk8HSv7GM9CF9LzAd4PvMQEKKwMiM8iqjWLzKGwsp1sBqFscsBBiGNCqPy7pdvWMRM9XX9zicPW",
  "key2": "5G8wZwPkMhxUPBwRHAVGiG82FZ7YhcJKwpdBZvNRb1971enAhiKiu4gGVyEVMLYwS3pmKTayRH1ESzm8JKfd2MdF",
  "key3": "5dQxxW443B2TGqEP2gFfpvAp7WwTqJbTkLv2vQQ3iYRm2y7tcBJiti2oa9DqvetxuhnmE8jvzpGxMpxCZpBTfnDU",
  "key4": "26wFQaVseeFWhDi2Cmmymr9t5yUp6EG2RCfLDjU3gmcqu3rrEpeTunPXYQL2rUeXoPGYK1LaeKKaXCxP7UPxuMFg",
  "key5": "3vjpra2mPsmiKdYnWw5iSNAsAsQf6rZMMgeDZF9q6mkyC1xggcfVapmJgtiVFueCMQuqFVSLCiwYretH7hNQgSPC",
  "key6": "5DzAHt7d8PdCe9PScHU81k8TH6xAQTGh6wVtaWAroLK94VKnv4i5G31CVLaJFHb2BW9ugbZeF2K7FQNro4HTzHFd",
  "key7": "hcBHh6CKTwKCoxZepEUNcA1wmdQCUJe2VC8RX7sfpWNUrkjhvB2dSoCT2XQWbZrEa1rgAKoR16eN1N8dHCafvpK",
  "key8": "J95kKW7B32i7v1jjQZY5ms7RweVktwM92dbyyn4Lg6prdyoZFoELH2rxb7axBxJH4KyiyYsbQfNBCoZTDTWucX7",
  "key9": "5FqzwQ6mCWibcRnJCtA7LSqkAJpeCgcGii2DJVbrpxWwT79oGQZmtxp4nkuP7R335VuxqWvVzCvYxsQBfCFPR9g3",
  "key10": "5FUAfB9dWnaFnLp1iBU7d35LqeFcXaz873RDe4jKE4ZMUWoA9SiYZVBrZ1YtJGRp5VS5kGu6TW7wjBzbJL9hdnyr",
  "key11": "5cayagVJdzvdBh1X1NgKwu2RLatZPFSSRofXdydmXocgfq9mtKar2dF5mxEG8b1AkVVUj1J8F6dKJ6SWpYobp9rv",
  "key12": "F4vFMDdnyg66Lyy3hmjdhtVfpHWx2gLtAKmqRzLqUGHzYRmK2F51uddcRS2W41eFykMpgcTYsB5krS9mNEKjh85",
  "key13": "4K2wBM4F7wePXkoYcfQhhvqxn3q89ipMzLVd1em2eKRTMPcszaWotByfRbw4HDy5ZgU1rWmohmcrqeed9xVxxX3k",
  "key14": "ErNKsmYbHdB4aPimTPmzrdYAFo893ycLFeeRyVG31JdvzSWtnKjdoQcakWyHjCrx9hLb71BL7eV3ZydGba6GhP4",
  "key15": "3zB6U2FHTJLQrgd74SmweRPULcerCTHFpd12j79ZxBxzSD8VyFm5gCVvzFJEN4euhBGvCr4qqS5vxr6ecyuALnpR",
  "key16": "3JpjYKau8mGxo6swmFZdv2gGnFF3jJ5P2vDrVaHBA1WskrtZCzoyCFFbpguni7uCkNVT22CHti74p7zuc5S5FdnU",
  "key17": "J7pdtWhjRui3dz88MfNgHCPVGC2NWQmeanGtLEZF7kTf5JzJrymSXhib3gMR3N6ZLC1YGgc7G76WBV6veG5CX3B",
  "key18": "5hGeszQwSFWYcqPdFJd5tdn6C8PSrpHD4AwERqMDt8J1CZBatxJArvtazsh1EoAGMa8vnCgYkWg1RMyBowH5eBZV",
  "key19": "2iJX2yMDG4eqVYAHT41jrQQXXy4fA7dagP57gnvUQnVVDjwfM5XfYva9GFTmSihWA61NtcffQowaxu8NewiDLHWr",
  "key20": "2DMm5qj4fL3k4Vdkak6VJiiECewRedeoNp9MtoYrHy9xgUDknYCHPzDqkUAsZicDzybQ1uJMPyqTHKYG2Mw77hjv",
  "key21": "4LJesKGnumh7MEcBxwtczzMT6TNfgYxbBE4VKrR1yHnm5QK9WWBY4cdhK8fBvemy6MzeCGQV1CTYsiheVBkj53zs",
  "key22": "33LHXLofyoYtnruAyPS6sfTQgHft8pe4wgxCuMM54taLgoJjbK2oszKt3oyybmQj2eZdSaGXUKtBnViunvA9A9MG",
  "key23": "RqmPqjicDSyXUntnZDpt8w7owM2NW621ixxbbhdLnKBxo1VGpNEjTELyKF5q7Y294fjtNfS3bLg8tkhUeAGdVki",
  "key24": "2uyfCfAvZg1xKmzoCNgpVEToURheTwfqLe3TF9pt83pGLXrrkTiUz7rpZYw1UGSMDhUNHw4jxW6e1ULFUUXiuR95",
  "key25": "2HJ6Vh67WNHJFvy1NfNrHEXQsG7dD4CgJvNU8HQsEZ3QZcUak6prrukTmaoQW8VdtetyyRThLCcqtthz9sAa77Yn",
  "key26": "43pkpz9EkkfeNvJ6bwaA51P2bjo9dsewpEJ4MzyVxPe7xZjcSfD85jao1axFaUESHBvzLvsmJXZHMWsTXedU7zms",
  "key27": "4gQLB9jVC3fQqn4vNRnz5bqATiuggSC1hqeRv5a4KfzyuQdFypxymc4rCekiaavrwJSTmhH6L5thMcsLHPPd6sQk",
  "key28": "5j1cmU5NC6Pa8cZWm1jZnJAYJ4XWCz6iZQXDo8QjWuqA7LTH4bvZLAwXxznhWVHAQNoWFcgT4qMb7rxbZqFZV6dp",
  "key29": "4tJgoa24X7VL7v9QZmjkpUj7EJwBCDTeLN85RyyT1GxwuFBMATh9jLmVDMbuwTtuS9d98Z67tznASS8hRrXKbF9g",
  "key30": "ju8xo2JFYz8J42ezrYZusxJR5SbBLcQyNcu2VqeHDZ51Xn9gw6rZ8Z3ncb66uV7jRuyAraHwPnyqj9DndVYPZy5",
  "key31": "3Qmiq9M48cJ7CeR4kretBkx92PEcL7ngc6AVaEetRgxLtNcDEfeyBsiU3sdY3FeWPbLY4YndXBv5ZVishqnsWbZC"
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
