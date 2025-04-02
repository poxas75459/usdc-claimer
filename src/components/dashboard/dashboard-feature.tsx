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
    "5gWj7PQM5HCuLDQUNGJq5xprkKBvivm2Sx7KMp2G41gne5jTmDLdRVQkaTKHuVJ9yhVAkVkDnRgcmVBoi4gCRYw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDWpoYd8EPJjp7UugFUCy77dtNQgcSMdFriaRnWnjk152N7Ee77KPyDCaAfnVSoy7AkhPjwFEuagY1WtTFLQeJo",
  "key1": "Ch2sPLgycAfzLvKGRKj6wLg6kAt5t4UGHYgBkToKYeQRUGsAbqnArJ6aK7KM42WkNZ51YAbedS8UYaxnmQHZJtL",
  "key2": "24j8ZVqGphB1HVffTBLKpotKn5zYp2LpjnM7Z2uyjVAi6baKzeUR92bdmcGoPmEv73vJJGTh2yirC82P5fiZ5HkH",
  "key3": "4M8WYVe2v7bUyKUNdK32HcoHavy6GNxmE33LGz3Eq43abt5uPLcVx3ND456ApcRM3f2qvu4u81viNymBHpA7cmdg",
  "key4": "3tc6xephqPLE737Tf5wt6JyzA7qrcAMcTgg8YXznKo2TjgtSPrzSNc5dz8CABm4z1b8Q6oMQA6EoVaFnC5rWG916",
  "key5": "27XqXWjrq1iGTs4kSTq9za8KZYfPZDyiwr9uZKdzNW78pSJxbUQuPJRUQG86qgNBd6T5ZshN19Zc2uF2SR1HABkq",
  "key6": "5T7ExyT76D6hAQgxNoZe1hPgdMRf5QwjQXcBHxcmjP7cquQzJtjMPNGrEDhNVidTUKmHvWgQyrfXwvEY8s7t2efY",
  "key7": "PutBxzaygG38t5sR7SFjhxfihbP4amfot7eSyghzhZSLNsnPqemDTuw1gXmYB3XDxrhj8T6Kbna8EHKHsBu8sY7",
  "key8": "5p7ZFo6LP8f1zrJSEZx2S9jzctMFAijh5ByXZHWjz3h48hCvMuT3TwpdUM4TxZp6pZfCRDbBviShnY7K5K2USr9s",
  "key9": "3jT56bq5Xdxq8VF5t6dK84i9Q9hYiSRyUg4U4cszVZSYSP7VDmx8o2QfUhnCJSXTPb23PuUrRVsLBryAwDWZKSjH",
  "key10": "4JD9gAmaU2ah4R5jr3fsAqf6yfTYYzChFCrqTGoiwDPzZWzoHpLGWbKN9Pj9JuXzfja6pP2E3hha7keRwid6wph5",
  "key11": "4UfHypcrQCmPM6oRHAuHZEQ1DEjr9JwWurNyYDL6pmGcrPXvZhBK83bpwQ2XF4dy3b5VZHciXpmLadhw8cZytPjT",
  "key12": "4DgpReeudNCHrRUGaQR1q6tZFgoFvVhnXvGLejj2zzoBQh7ch9b4H2FEiz4tzD12oEMGz5MjVrDKoc2D7Kc3sTEL",
  "key13": "KcUW5zh24HrXiDPruC5atGUyAhs6PVc9WLnj1zNvBHmVibAiyuBe8iGj5SdG886rcKxp7dqeSGbvB4fX3chysvz",
  "key14": "24qzABzy6jRYZaQ5ouQ11vo42rir2KP5Dv4dmCejR7x3GEug3iqNieaG9kRWNwNBcaXiUBMzRsH7eyfDejq7vvqm",
  "key15": "2B6WyfmNgHQ1Ee1dkFBiybjQmtP2ExzDF8NNway2Nj4FZdUsfPnkwjEkJDbd3h33Xc94CZxd1ME1p3N79aoujDpT",
  "key16": "2jFkGKoEdDEG3YwRyPryFgD3jVygnnANvS92hPBoKcE3wNJ5GDASHCkz85dj31nuBBQsk7PuEMu9Wz8ejq55ujNF",
  "key17": "125iJjYGH1gEBr1DDaNr2jCDjiwjWPF4sNRyaCTpRPoAJ4ecsZJmKi2t1qV6rCCF35uGFvNPoJ7LpsWAjdyPB1BF",
  "key18": "2u1uZGqmJ8yhtGe3eXsGY1cfdBZXS3n5nAKTrrL53WppVtPE4jSvYXm6dooH5DPXkcYREoLzFRts7Yw66hhHNv5F",
  "key19": "SBbUCuaoMLmQYS4mJKK7Zw8zq84MbS5QSWUzojjPAp53qaQSrxjF9RMgHXXNuZbPnb2Tt8TTpUAegrJWADdYBE5",
  "key20": "3DXcMepiEWnuzvDV5P7D6sTbxx5DDfxtCrkJA8n6zqX6kqkX5EAQ2bcvpqtJVAxG6p8xHoEbiCSGZQm2BbWC1p8Y",
  "key21": "3bJGUBxpFtHMz4CrKPyMDqLtVBzvntrLDwpsoVBwGYgNws9qU4pj6tcuCwwzkNvsHKFGSAhvrxnrG2ifeihcLtdu",
  "key22": "5NEykCaFSu7bUkAFoQrvoDyDZ7Aw1AjcaiMiGxeWrQ87J8ddPqmW72zNdP9iDJfjP5euF82cd9rf1GokPD87bYfe",
  "key23": "2vyEGoUPLpfKZJRWjnrXfKw2HWKD6E58aNF81eKTLSdCX2sND3zBQPiMRgeup8NZyhE61pLai6rGs6euRmGta3he",
  "key24": "K1HAFFhm9MAkgKmHtzMESEiQxDFPsxZmwrHeUaHrrrzdb9TSKe5nx38CYs9WRYM9zwk4b4X5sPeZQ1LUygB3duC",
  "key25": "iKvPY9grgo13x41feP8xEjhRgupy4yWYo8Qdpiczk2FHRQKBGFZ5KytaAVo6ce5Ty9NhcxM2Ji7VPhH5QTF8bvE",
  "key26": "5CT1jzFEPQXMiuxT4VyQjUg6i7WXWqurGkv9FP8cy5M5sMGp2TaWtvhE1KjL8cKJAaQV1bSpXpdPVaPqrY92oj9v",
  "key27": "3uZjh5JJXghv1KEkwqEitvPmXPTsTy2rMPq6ZKUmR6VYNEhJw5NdgA4wjhGhiir5qzNDYD9nJD1JniuCrrpy66ts",
  "key28": "3gbjyrvZqgn5Uzp3sTdQ9ZmmnUi8V8RDD85VAYNsq1aS3Geis5xiZjUUoXdTpiGeSEPH8KdDeodatBSxbxp4QsSH",
  "key29": "2cy8nBY82VqQfrB2yJQ4rWkJ3fiVpD1LaruDdWihSeSMZSiJiWfuT8gJD6TJ9DZVVupZMMRXDeNKQf7MqtLErVc9",
  "key30": "2D7akNhsnAMTv6DbiSydxuhtWuRjWXbeCu9MSVtEt4SCtp2qXTinipCGuoqDaA4zpu8vrssxjEnHHMP64efsmCuM",
  "key31": "4ee7JUbJH6KxqZzkVeByeUpP2dc7LSnp5MRxiZWEeBvZCWxr2squNQ7zvfbsLbdddNbe3VzEQCQCpihqPf4WEo5",
  "key32": "KsBmxamKf2sB4dNZVZQSxQxUD2aTqC7ruXoToAtdJQFsgJVAXud5QoTd2Tm6XqrsE17SdaSaoPA1htanuD4h3U4",
  "key33": "5vBLD8E9BX7dK745p1u4E1gtXYDXZc6BhJjM7TXWKrub7tVcHhb6BrqBu4yGLnrUw4wqqUvSkFNFoNMcBHKZjccz",
  "key34": "5wZWEeemDnUAdfx5DLE8bgdBmV6rEaB8L6Q6brpxiFU7bWKmfFf3FTwBfVgEJcyf1n6bT1FZfsfxot9rCKpKHnv",
  "key35": "XixjfXmAmFBsFfMvc2ijPpa264cFndmtQKUH2KXwRLPA8kxQPxuUqXxma634C3FZCDyKZHiZUFnwpChx13YxBa9",
  "key36": "43DNvUHSdZ7LThi8koWe9ENh1SUuCXz1dJcA62sfsJLxH6LGVDAMYF47sK21MEzBF3oNoXMBKLK8HA4LoP42rKFf",
  "key37": "4yjv97DeNTyqXUkcZxDDna8zfaM1kuDYEmWSa8AX9oiH7CjFhGWJZBSPKAA5NiaVAD2nZqJpCgTopJuHjLWo1nvs",
  "key38": "A1Taz7ptypntFtQwLNtj2PDtJkK8k8LJwo837Nz6tKBQjdkV1HwSfpws8jF8HEuXC2XySySzaqtf6um9vrADCrt",
  "key39": "2uU97c4cWKqUytFh3v9pk1rRM2M9LNdpY9L7yE41etSke8d4a3AsnEcFfFE4KTCKgmJgGfjNDMse4YFgjn7g7JE9"
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
