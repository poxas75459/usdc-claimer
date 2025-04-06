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
    "4gt3XohKf8B2dmGZCWQSfu8pnB718weRcDzewt3AWNFfBsvcfZDciyE8RAKPMyFvX5BQVs5KHMqNmKtZQjTEnHzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48zpJNuFeX1bzMqD7YBXy4UKc2rm5xr6JPjw7LjnDzDmKSigxxNn6WzLMNzvKVHRwCtEHT7NaKDsCZ73oFkPtEY6",
  "key1": "da7BzhneMYV41DoYBpLHgTxUYMFYNe6KhnB9run9LUaWeF16YdD1HtrxNrq67qb7YCm2Qo3v4KEi8sFRF2WFVKg",
  "key2": "2mB9iVPFFDTVS94rWBjTfGbTNp4TUpmNmshzKmuPRR2NYRzEojuKAsG7JsUGU6tqWWS5EMJ8W8MivsN4xpYY4nfk",
  "key3": "WxmpxUmNrim4vavmY1eA6pFUsk3FUjtk46KBvAgxuTB52Q4QfYTdihZGn2coNJaaMLfYqkwVcSJZGLXxpBLy1qu",
  "key4": "2RkQCSD8xVehTVZ9HzbEdSXF42jvAJhEYA3haRaVpWB8svGLYvHcWWBH41qMjRiwggqzFnz2ZYX9DKkikdvLXoiT",
  "key5": "2xb2BpAwbNt1aJqQ5Z8GQ7M8BpYkMpCcpWaZhQBsy3V9HL4tXvJXSw1ooXSfBMm1zbpLbj4hGYHYpneAC16xc9JA",
  "key6": "oL34stysYaytvoU75D8DmgdX6E5hmv37YYXS6yfHwSxMrGv568U4fYBjCcAUWpQ83kXekNcTHDhaBqJnHGEzev3",
  "key7": "29nAFQy377RpzPePp6W3YdsRuLkQZnS9XHk5JW6QCEd4meTnd21Y29f7owGbFjRunLyaB55hQLYr6uQSmLYFg9L7",
  "key8": "5gyMiEbmgC9w37BzhksSkPBKn2kori1aZBM8Rb8idUWLtva64883h6D5fU9J1THLNrffpuH8hogD9cnrrCTzcLw9",
  "key9": "49FjvvTEi5tWa4k38kahirdaChD7CvV4TvYvihoEkPzn4CWCpLTxwGE1YNDmUxx6cJuaLUBQFGUWG7tpFJvkSe6C",
  "key10": "XpYJnHFmfskV7YKbRg2zCa7ic9N8SPugeYZzDL6quKmFT4hc1SjbxWB36xRLnkypi1Z4Hb1iS3kCrPjwXyZLgqd",
  "key11": "3r1vMohsjPkZeqtSpNMUUN64wRDZtrGRyeQrNRBmP6zkXEyHX3a8b9UZETtKdTFzaRZgPgSyq7e3cmfHfz1Ci2Wn",
  "key12": "2gg4L4xX7c4BKUp6un6urrEaoEjHKi5nQBppCyC6inxZgngbgD8oPDbyaQm4Nvnf5rmQ3CUbSBMhgWVpYVk7vsY4",
  "key13": "DRxeV3tyYXsPCUXKLHHGF8PfJgwU3Tpux8M6hQhRgqLDRNwXwb3GUdShqspQae6nm21Yxh1kpMTffDj1f7D95gx",
  "key14": "3YQtbg2WB1nfnj3vM9rdk52asyoPxiRiYeg5wE2zaRdtpsc73hWPR5k4nBxcyfExvYFrNQikXQpvpxQPhZ2Siqbs",
  "key15": "hbajWYEpg7wfsnk2JxL81ef95wLauqaPjBUzyi4St1r4dV6BUh23hX2Vbd1kxar2KQZSz2gn6BVuJZvtZPXAVQD",
  "key16": "TTQwKNdHpXb33WeDbwouWNce5zTEX2Hk6QmctoqnfqtrnTveajEhZNZ6sJGoHWt4rF9VjMExVLGpjnSAbFoax7u",
  "key17": "4j5aVPjraijzzWVUbd4hvvZWVCa5dbihBqcb3vcDdopowhKXzw7AEVu3VNfgyNkExXGE9ZK4kgGwCovXTpiVvtEG",
  "key18": "4XXUQeKUEvKbymQG7Bj5tdD8qbc6EQmZrtZtcVcqreanoX81jDYrcyqBfm6ZsREqfJRGafYQun1n5GvZgn69cayA",
  "key19": "5kW1u7cgUcT4NZqyfb3NUo7C8C4749ajhnP4HVhBBfphyQ3jsWs9FTHrEJj1NJ5QttBGGdPvsmK6xspLqbeCq4Fg",
  "key20": "5CRGtzcwnKHzx2K6pdGDF4XjQTjCBeAeRsU179caKafFKPS2LAjSbVKm48uMadX6wa2qfH178LRrqbuZsL7xNuLf",
  "key21": "5JLPfanXS9QbahBkJwhvRpyRRU1tGWYkAqDvZNNzRVwJTAYjZHKrJHDtBSjffgQV2xCgDeScDPtkpvGqG3LyE1M3",
  "key22": "4xS1er6TkQ4jRzBYSwXTiEhH3XV44CUyz7xjx5NCYVvPDDuVY1JpL1D4QiXpdrFBQpBaQsZrUrMMRR8kYFhXERoP",
  "key23": "jw5o8zMhccsbNc7yUSD7zUut93SJ58Xb2VxHE1gDsKfqL3F2Dtw63m27LtoDh4uZjegHz5R1RpWNibX56RU4xzE",
  "key24": "67AhFsb74SEZMRDBmetBAKC4Q9rnMqVD3BSc69VWriNcSNizWViQih732E3mFdaT365ceysw1TPYZESoAQBypBoj",
  "key25": "37NvA9A77FTnaWPdNmZecsvodLLWNCFphv1BB1QL1KceU71L2rF4UvXvi3nthtwq2vKq74Hxz9BwLM4HcUzbt1KE",
  "key26": "cQPpAaAxNRpi6B6bhjJ9sML15pwCLCowmy7rKkSxmiHuyVDbz6A2vm5UpbnREjSfPjkJPw77QLDKaDYBvY1cVjx",
  "key27": "2FV9ofM87JrFsWr8MzyJgnvf2CMzrgAVv5TuPEsXTK9onAiUKK6kZ2tkw5GBpc2wwx1fFZisUmDfTGpmh85t9VDK",
  "key28": "5QgwQ1qMFWZdksTroSSeKqjzpaJaUtBXEZ65kyXkDiw3mjjWBjL7xktdm9YC8c5emfibogWnZvNztMKddSZ3BCiz",
  "key29": "5aSky72byPtkcNwsAb6Bvk11sN8gksrNdZKYaXUKRiwHHVFYJrM91uuZDfJQaCVp2CevPH28dkmjdPFsjwn1x3yX",
  "key30": "24Z18LTBF17KuRyhxgGKfsZE88AnZmZCjVz4ix2SnQhRCYqzRMZcrfDbwcdfBefu6WWHzr5BWqAUu3FnRRRYpEbP",
  "key31": "4cCMkwWfPB1NQaZcsjzT5JY2p5eQDCLtkKdprrtMbHFAqbBfJTCZidvmji1rfQ71NUjamDh4Z5Gm89CWF6iRVhvQ",
  "key32": "3r4uohCSpivD8NuoVh8zXGMAuaDSQpqaGWsdbPvtcMKnBvuVFQVCAbV37BeLNRGkQdTZqaCCZVqM1WZwLCyrnLN9",
  "key33": "5dh4GzU9DBet1rMZEFKZSHgXBmiP9ngK9TxZtwczxN42niYfEy8ERnv2URvNiKvyWHdWPd7SkzPxzM8ZdLuxGAWR",
  "key34": "2fM6SJf4vEBp3umeuEsXgheqMi8qyfpQRAuC2juAasUR4Bk4faKwgnrmqabjts5HKhKNL6dV4pRfTzYUT9XWCV3w",
  "key35": "24amH15QwX72bva9UUpXBhTD2M4DQsjtCXzV48wWhmUDuqycsDZxJ9Q7aTzeTA7W9czyQezDFAxVGt9xyqo18Bnc",
  "key36": "5YJXjNy5axT8ZHdxovLpjd4BmteGDb6WPaRKXev5X3tKcnqjy5duJWhfFGgWT7EFdbkVLrNV3MyD4YLdn6gPxe6Z",
  "key37": "4rMidEjMRAaxNBpXNyz9ReCeVQ8SiXXAcU9UGzmwqaPiGbpuDrRR8bJhHPW6nZpyVx7gsmAswvoR4WYioyNzmb5n",
  "key38": "3AvvHQhE8KDgaxCU6ANPofJBFuAM6FgJrkN3Tm6DQnb4jLGmxZCgPSCwbAZS8WByPwbQ7i744x4c5NgDtdkJBS8G",
  "key39": "2rxBHQFV8f9yN6rJGrYDEWviyJufeGx3T9bHFCYdtNEupzM8HbwFgnBTpDGgGU6dmJ9Zw1KGd8RC7ZTKQjMTib56",
  "key40": "5WMhi84eQLvhe2Tn4SNoYGQrsgD9iHL86p41EkEUjDJ7wHu9CdmJqyckLJvHRMsfcG9sPvkQvMMNzgJpRg1D2Yuj",
  "key41": "4aH8YPbTiRLPJj67WZmcagmt2KCwHXPNxrGLb941epLhakAcfk8Cy9gxLqhMU6GdVWKyrbRzHfk9d9Z1C7UG19fx",
  "key42": "5botAP5N5LLuDVBvhRDc6VxPbF4puSm6BgLxD2HYYxDanp9FkLbbMawLnjrpo1EszqvCFSJtAPybNasZoHC9qFLH",
  "key43": "38A3KYp7CfF8fiUAiFnAz4YMSNQohGJkiySgisj5sgPhjR2qyRTH5btVpYPS4FJLpqQy4Hh4LqpQ41qZmpidXfpc",
  "key44": "4s1du6fyJLsiegMLdkutuJANhFMvEvYidm3vcpkFJdUpSVjkRGZzehJVumKGkXxJ8srgZTX6S3MBZLHAEDZJVqss",
  "key45": "YDBgD3qxsmZYjePbKFjbMWuN81q3wPnvhJ1asPc19hEb4jzpohQKeEPPARcUKAipNrFHpEKUs2TfgRXFEayYsfj",
  "key46": "36Gyu8WdVxHeFTn76qfi7XaG6Vh9zVWHrc1JHnZtwfkB9BSD1AaVZk5Zt75pDwyTz3EXLnPMjmzF8wcta3e2uorv",
  "key47": "2vKfETSV3okynUv1E6ZVfhmt2f2V222LBk7xW97coj1Z1gbRtqgtHMM6sXanbEe4frtoyBex28NsqN3aBjLcYe7Q"
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
