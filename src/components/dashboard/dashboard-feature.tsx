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
    "5NAvAE37HYjdpgakmKYJwDF4RYRgwTRQKjRnPgUG9d9DjxwTDx81A6ZWKDvvH1emNzd4MzpGStc32zTaexZXm2CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbmCWSG6MTdKUt6HEbQUBkvrJPa1QzqLWfc3ZyMWGBzEor8jYSAsjvQw2ngStDEPvpsSfPAdsZDpWmf8m1mv3yZ",
  "key1": "3vkVNHeA8Bn6rVQzFbgYzpNgpSTxRWWXprJj2TaeQfWmCv9i1Jtm2RSi4BspdwdcDLYQgypHCTgTyUyxTkt8cpRE",
  "key2": "2XT64zzniqLQzNqeU5PjkXyeCVqYr1wVzxJPdgGgTNuaC4tnYjipsMXisk7ZXXWUdKYTZFUqKiYKQGc1otdyrFCU",
  "key3": "66QqsukcSbaRMsSao33N2cjP3rGZ11i5ZstDf1jWQTcFgRQL368kewE2VmkzcTiw8qc5S7xXoiBzGxYFUN3wsG2q",
  "key4": "EpzQGQ3LumR4BP8NVqqDfdYC54s1fx3MFbCD6vEm7PqVKT5XRugBkhCTnF5JZb3FhgKZQ2u414rpwugbMxehckP",
  "key5": "2P5HAMG9cWjd71AAjSrZjhNMsQjkfutPkngtcsJuEGB9DfstMwuWxW2j75UerAQvW1s4tv6AzZMJoBjL5eoRVH3k",
  "key6": "NL9JFK3WTZBs73Zkai1UQSsPCNmQAoPyh6ncUX58Ew66PbR8aqEBuZKEpk27XCvEH5YExv1Vp6WnwhAd4pAQjdK",
  "key7": "45QF2Ai2RZdNUWsd62L22HV6mJgCXGfGYtVi8W26HtmNZyb9rcqX4jX7QtTzn7mUhhSaspu9dPdh3XVinLA6Js1f",
  "key8": "4dT7XKHLGhQJBmrPgRcQjBDW5qWJDLYiSZDLWejys2efRyejjPHRY63xDJuWfQ3eBjQ2Jxy2rfF8mTL5SFa7A39C",
  "key9": "3LQWznf2hJ3GtxRKc5rEibcCLheXh9zqFPtWzfimJuE7x9tjDdqq5inksfvKb4fYPrJJDAKyvkanHPZxwRDrL5Uf",
  "key10": "SUt4BHx9dDXGJFBt4kfB39zkaNgVa4NVGTqf3EgcfYezUCZ9tBHm8EPcEk6XsPmV52q7FGxgA1CeJejuWABC1hN",
  "key11": "23Zx44agNjDuW2LCgK78sBwt8BRPZD7BgvKJkWMxMYha1fR4MDuwGimcQUFKvjArPnBFJPnDtSzF99ThhZeLQZAN",
  "key12": "5DSwUmajcYQNcWkQpQRxewPixmRi2m8Qt29CtjhtuzjrwjkWfjnVUG8uMyCsqoqd4qeiRNP1bKWvM7UkaK4L186m",
  "key13": "4DHKm82jMVYt5T1REhKAx3fzxbnBeudd2gSraLeqe4eSGp7z7TPziN3zbQasgnSg6gHujava7MEpSu4DL7mwZdjy",
  "key14": "48nX66Tkm9pGiKrR1Vdt5iZhLW3dsMhY3YzpdJfTEzdCrCWqngwC5d32vvevxeGkbz6nu1vqQEQzoT1DyE8dWpV8",
  "key15": "5yrCEYP4CPBoqSE7z6rSVtLQL9AwK8oM8CeaSiY4BffkGDkECAASJAnMaZKNDRZonWSWJ5YjCZ1rdcF3K6zbwmPJ",
  "key16": "5e1CGnqS5ymxTyfA44V9L9AVRU6Eq6oNDLJsFiSYvhjvkkM9s2HyZDEA9Kuge6aTta9FJru7B3Y4SBmcG37HBsAn",
  "key17": "vtaCavbToNZJVsquwJsdnqDrdV6cChJESQfajbGZSSQeJH7eJSb4QJzVEfwB4ThVHtXKuouSP5SWGoBpN9U89b2",
  "key18": "5DVtwUnsxyudFLgkw9pJkdFpYknZV6fD7vhtvN4EUyihX1fH9891U9qVy2HRhJUrDSBSutdHFMcDewDnRsA2keeZ",
  "key19": "CSwpH4vnyrLfoAYW1Y1FSPM4FWchxgUmteoWmgyX6gMV5CPWiBN4PFBAKzGrXbauLJvmjSW7ohW3DLJyPb2sLdH",
  "key20": "5PSF89YLQWnMkqucuNip5kcu5KNMJyARJ4z5zUNS6LgiWkAo7enBS9fqYLDaVquXud72n7sHxXWRZkBkfyMifdCo",
  "key21": "5U34JVDwf9Cd62RXZwQKpF9evoq38AAH21b6d13yAXssSdK4ZsTF7iGJuXnHBjQA7nduMW923aCmeq6BxWhEKcaY",
  "key22": "4brR3wqsUEXzcxWYjMXoVhZLFxhAJ8J5JXMuUpwUnBxcyCi5euu873x8zmTcdqG3PwH56szqUMw5ZwrdJ2MvwcVk",
  "key23": "xXQENFFhGBqrZHkLDt5toRucRR415T1WtyYJC9UySXdvNsSyQ8n8oWafsBaxjBBENYHdpkyhsCSGiP9j9wzF2W1",
  "key24": "kRuCMPJ8My9TdjgjGn7NJ8VKy3ptw1zyTBZTjax8xDzzqaMnHvU3FGHKSVbrJVCHmAtyGnXCPSiX7MEqh4FMBb2",
  "key25": "5kkit3H1Bc3V6QUtKNFRKwm5rJXEzHwkkdtnmZdi7nmXLjyKneRSf877Q3H6knovr151CSWcACQ2hnshWHVj84As",
  "key26": "4HUzEQoNteb8NmXLvNCXYi9UrYBxVpeMEu4awtwYFBcT6AUo9cKjbqrpssinPPBy7p6e9SNwxDFVSM22RTtxsV6",
  "key27": "8JAwEpxqPgBrneELi4AujUqNFhqRgF5QAxnAj7jvAeCqjBN2uqQbxGBK8SDGbWxrdbnB1fFzhpxuPfiFFXWJKTV",
  "key28": "29Am6eAr5B8tH9u46jmwyJTqDJJcVGCrU7iUPEfRigbhe5KFGJtLVhEpQ58D6LVeRcvha8rjd84Dq5kpnUmpJkH3",
  "key29": "TeBQjd1HCqq4FqUq3sgdLYR4gpt6ff14YtTdwojRY3R5ZwCQKXgswxDCBvT1dU5r1gEmeWDTa1G3U4NPFXKdagH",
  "key30": "546pMnAs4mV6hUwahJYCrf2Ckq8jB1vpNw49oQ8X4mmTkVdS5bdXBTkbJJ23p2Y66ZLn9kKXNiK6zeMSJB2E4koH",
  "key31": "5WEBVg5rRJGzCQBZiWePUBdt3J2dCvTVywkgwAyif5tGamVdkF2iX8BpHB6yrjmNVY3BGq8SHVQpMKsf8D4notZ8",
  "key32": "UDEipj37RjnxEkmAsgWAobhoKSZNzym7xcCGCREa8qT2KbtH19Rks5ge7NnRNnCWgXZHo5XjEaRkEKrEAMJjLHu",
  "key33": "2KsEr9bdWGdJe8mG62QrnLJxEtbdgT2tgocZinZE5PHaDGPMT9vBtErLEj5YhctjNN4Fovb6gTFV4fuMQBu1a95T"
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
