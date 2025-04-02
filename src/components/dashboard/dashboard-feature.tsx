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
    "56ugiJAeKWqaUn1DB2ji1JoV2kJAPtns8zDswAc5KFCyB4aWrep2MebPSFBSLuKwVaYCSTTqziTTLjPkgw45KAGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3jqEDsdgL1QJ8a1CdCD3qtZ1Hd75vkjzVJHCm16EpnCjwnVDfA5Z2YMQYQE45xh5T3Y6Yay2oDBtDvKPHBaRoy",
  "key1": "5GVqqCHhMkAp4Um8vMPhiWd1cmZ8pAkcmZ7MpVYUE6f5uj2vanXkgVBPrNUtAntj8pdx2kKXHT79evZvay4izy1q",
  "key2": "4zrNeq7TQ9shJMJbP8RaXr34MrptYHBDpvXykoKAApYojxtDv7bbqywSyvrxBDPVmN8ChW5oXuqeVte1QcCxnnoe",
  "key3": "63nnrp2grBcT46NtEeENvZNiXhpTtys9JLa3yGMXAcs59fDRbmBAuQyRMQS7thecavBPWkAQH8whaQcVrRscsSM3",
  "key4": "3W28x4zcAE97AD3KCmcpZZr3jGQG1riiP7uSDASo9ReDP8WnGcSCk31qHaAjqnvJS1cwGZRrKSVrRdEyG18kBhzW",
  "key5": "fjEDFZuJEHBsMJA7ReVPgYaJF1MExm15bqf3TcJp2jefBajkXiav7ZG3HsWngJozm7dtwm3GTEivRGmzoMPqX9U",
  "key6": "CmpZsshTYw3Kp6LckmwcpbZ6ZqFPiBsMuRjkPnXHCeUegyUtzP42rZDBfjozpjZNG51qx6Cd2hRMKUCCHd4vgtB",
  "key7": "4JE6vMoAdbTVp5c5geGoMKQZGruuvxqPyGcHZNA8FPoiY8FHaJT6GrHfb12QM6fzXWomTjJVHsKLWEF5LvHivVFg",
  "key8": "51BJx8YVXrQTj179XErG64Ssu8JsvkfKbcveUszRWDBpnmpvssHN372drrHqkiLnLQRXqHupvEnFex6m7kYuAbAM",
  "key9": "641ynrq1Bcdg5B87NH5qoiGUpYpu3jphcAP6npDPetfZ6hFpxPAVwA5m7YZQ4F7y21KB1oCprpentmHGqHk7awj2",
  "key10": "2oC51msBFHxoRPfooKxcJUaRxYZRCofE9nCopSrVsoSV4ee95nBq2HiaLWQhR681ySn8mjMJjbSytiK2LnfMcLAm",
  "key11": "eJh1Vv25sZxtqpriLwe8RfHhKQEuPZLibjCVJhu8pyc9qjfTLsv2vQFhyE1hJPsewMGx4YCitM7eWMoRs9h7Dah",
  "key12": "2zPAeNSFNUfXdJf4x3d6VyM53H3GwrvDuZuWRqq3cwMtcEEgVj4Va87pk7roCqNm42bqDrDY9xoDpfkN2C4ZNJLa",
  "key13": "66Tw7Vgc3fCeGZqdPTsZ5FmD1DVd8xfcEjQaaW5YPUYDqbW86AxX8CmSruugBKZ2DcufGP84ZYAAUWicRSARKVit",
  "key14": "fb4Robwrxj3LMtwr6SNh7GQ2E83RgpM4cktsLP5aFEVA34piGBVLE6a1yq816aJcyD98PVN9vSuKRbJohaVZJwu",
  "key15": "2fRspRMsoom29wjnS8J6fQHWEnhKdS27posAAe42fqGB2ntTouKscwCw83HsKcSi6JtVa9aDqDS2cfE9cXbPmBd7",
  "key16": "8Lit4bUrzwetu7syqjcPt6cv26HVU9cmBUwuvjCTPBKoJD5a8VperJVrqdYdGusdoysr3QF4791bPqvCy1RFRxD",
  "key17": "2DktjKePoKBX8v5hXbpzAx7s6vQsEv1QHZsjFS38a3CkkUiFAsGGD3zX2U8PvnT14R4SQJneYcY57uqSaukEY9BT",
  "key18": "Smq97aYn1eXQxceyRzGDLC68Rud5nhN1gfEQmAHhmaC9GYrGyt6riNAeJfJ5KeMLVF9ANSZNyuosDyfsA3x85wF",
  "key19": "2R6N9mAQdDSqeXQWTXEy3UYup4xMy1XDCQBnpHC649TCRDKb7xP8NXuhAQeUt9SFQbgAwrGgTqAP5vKc6wEXt8t6",
  "key20": "xTzM3UDRpUai4pVPxFQjwjjXBXZZB1hWuK65N6PFx43d6u89HRdwskwhpboRryQDkhH5TGYHATmbkmse5iC825E",
  "key21": "2XTMQ84r98dPEqLaUZ14KCCkTAAy3iihV5rABb554rcGd4CmCwS8YuPefAcJLswWAzsJZQAc6LoewgErzNx6q87r",
  "key22": "3kmtmWHJcM35wQKjsLB5iUbvJwfGJHZJhd4qyrJVNsq5TgFgTNuT1rzLr754bNyPRse8Zy6W88zUgiBZHucSHxR4",
  "key23": "dcRa1FzZQetvaWcZfREwxDitCUHMAghLTauh3EP5WRMvDd2uUW4dncGh8rePjJWZcNqRF2kFsyE6r8rD3dV8ogA",
  "key24": "5eRq1rrswv12GtH1E2HJzxMwwLUgGEFH4vKAD5JuQRakgSSYZWD6Y7kBjTu8JH6XQ4iWrMiTnfBXKdknw1kVJd7b",
  "key25": "2cnePcWK7dVQbopsch2gMEHU7CMmTpskbJ85oC52N1vu5dGu8haR7omaC5oiW19W9bVbNMofYNvVVTTsZxx8P4Ak",
  "key26": "K2nbF5Tff8FTmkj8534mCDpBanNwt5pTb5XFLodeT6C1JrhrL8jmN1hMzRGcgTLAe67Nia7XUE3HQfiJJv1tg9K",
  "key27": "5zDcpi4wJtnG1UEJtDjWyv8hK4Sth83qWamn4YtE3FdcScDpwEfBeMj1BAiJXBFp5L29uZ7Kje1796BgGhK8BYoC",
  "key28": "4xVRaH4fhoXqcCho6jUoyE2FtVRFdxSUWv593zNoqKcDxNGFk8bwkegtYkPdFW5a2cwbEqCo2AfsiYWZvdK7hWUm",
  "key29": "5zEY9f1KnqyoZy8x5cvRyCFdZPPGQivyAqbDzs5v7q8PuetFh2AcszuNG8vfNqcmTcgfutJdeaRgroGbvf8vWier",
  "key30": "KV2CNXCW8iCVyX1G3Y1jZjzHQ6jeGtdpySvzvkiYJqgFg1oM7HkJFFNiXHyWMe9NU46cjhqYxiztsX5AoZ9AByP",
  "key31": "g4KqR3q4NG5VZjbWTVEu5tdPs561x7afQbJYn7t1wBv7XSpjpm96YDinQumLdU6iz1sW57i2tghrqrSydP8eppu",
  "key32": "2mEnLZqbFgZ8DbAuFDiwTU62Grhp9f7uKpYvMtTKNKLsswaMRnYpYLQGdtZFRfzS24iMy5jpj6dgHdESBAJEr6Q",
  "key33": "53TARBHLscCxUzafDLLDW4KEyM8qtyeydKT8rnAVjb9pu2zbfgZ5iWMZV93eRi6QzCmkZuGsWAuvtGNALm7HKei9",
  "key34": "3U4qWb4sipAKDekZQB7fVEwxCDESKTz5ZnbZQ7jH4mCSymWgC4rpA846GuVvK5PsnRN4oJbwp7ZDuv17spNAurCX",
  "key35": "csQ8oigmHHS7z8U5P5xBDWENmtMHps47wRQhefwd5s5SwNoF1sxr4we9Mib6T9iFzNcuDQ8mea5BX8MaJiEinBs",
  "key36": "aWGMtAZRVbcex8kS4vZF4j1txEAEptb65L5Y2HAGrYRaKgtoij6UTB2oAA9gTvMKuajBB4rViE3wMe3G2ARMTZE"
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
