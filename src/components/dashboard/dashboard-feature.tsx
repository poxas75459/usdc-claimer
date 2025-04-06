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
    "3X8Hoe2VWvgtpYEjot7BKwWUZKUyoy41B79tpvH4oGptxq9WSVgY7oCaFZbMo3CZZ7GHmxY2p22QUr85FR1asPrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5UMurydwnCpDSLzYDSy3usT7AerZPKHeUhSj1dWEmx7QHQe6Di8tvagt5R6PWLbtEf8rxz2GWayZA7wNrrpFhV",
  "key1": "4AT6f7X3KNm3WtGgRpmrs613Rfg6REm59QEPY84hY9XXJrgL7gVVhqmRK6EuF5qjZScquNvC4qGoTXBTacK4vK71",
  "key2": "3nQuq5rEg6cKiMVPApN8ZbqD4Ut81qQ62kDjvBBwf22oMD8EYPh8ViKntnUDdXF4RPw8FwGwzyqqLK1hgGHj9cxG",
  "key3": "HDKyZCJnRKFwb65DLXp8WWA6xcqQJwfmf621TqWrU53oBwhQQanRExApiqfbyNLeFC25L5XLtiSaq54t7FVxhTr",
  "key4": "4wLD4LxAJk2bmnTchaA4rsfbPtYwiDmExxeUjxv9UbqMyr8Huv2jQZn4XDTTFGjycxZ2wvvd6urXvFipS2uSkDTb",
  "key5": "5TWtUuwTzRPser9ynVw4Y3GHwPinnY3txzpyQC4VoiEBtxHjVT5qE5uj734jMFuKLiFuSudPNLR9Pfp8A1U4R1p2",
  "key6": "5cdbVdERtf7pnygaYcFsRCrUhgd2oPLSh53DHSxiaRzWfo4w58pSqJpGXL8og9wvqPPGYDyy55rhhhZwrQPYFPYh",
  "key7": "2Uvo4gvFgg8BMNiSgXts5fV6KoALorDQ1ggLSyWdz2L1ma1i59Cq18VoaqatgfQGryigCAxJomTgWPsYzSGjrUSN",
  "key8": "3zQhj8v5uwLpBFybTQvggt4ca6cGfWmEvynvG9Umbke8AkaiQ9BxUH6AA73tSj15JnnqBddScdHDhwYtiQhGjCd4",
  "key9": "5dURjRDRFHHiZbeYSCeTPRQLbhLCd1kaxXMJVvzN417uMuzySwjj6qYtaMU8yXZPmFEetPVjy3EgMnUqxKFJcXS3",
  "key10": "2cKxVDuVWi5AjzG6YxLQF6g3Q2G6ZwYrEqHhEFXhvPGURhxx2ThXYR8X5bnSrcWQrWkBfQxmfEYibMLa84a97oeY",
  "key11": "5zPcML5HsPt52ywwMMhP6TFfkbjJcYXwfgbm6Xoca1B23uuh4aMS9fBVntFbZ8tJyWKEZZaPcSAnMDFKYVshE7vt",
  "key12": "C2gNEioDyNryJqSASJCv4bWZL4YuqvQf73tXUTLk3nHYojnau7JKHzKmjjK8Uhbc45xk9JqM1JGtLXzhCeVg75Y",
  "key13": "ZDCjs1N5DJgpQW6e5U94KMnbsnVKqt8fQXbfJFc4TBPeZnNUpQ4eFVP3rYdMt6QcNSX7SXsutSKRKEPHqusnhi6",
  "key14": "4vwphWNggy32iyQN72YgsGXHCHoM6xbUgnHDxYHukXFTJhDEaYYDvYAv5btW1q13yK7qXQZHAnPH8BBReQ5wKrGS",
  "key15": "tS6Va1ZdbbYMvLBhLACPDCNtUKBNkMMk6k2azh3UiGEz4iGaC9MkYtYtq73eb8q3xkqdmJGSfb8o6ZKBxbTqove",
  "key16": "4eSNNj2MGmH1q8yjdczQEdTrz1GoWbEJMCGwwgtML37Fq26USp3bG4MbryE3Z27d7i9jLe1BaaunNkVgEb3HTtMS",
  "key17": "LjADnXhw8E81cAkc7wMgg7y5iNddkHtrX45ESThKpYhSVnqHKXUXNiovxARh48pJH6gsmeNdLzyHyoWR2Bq39yc",
  "key18": "3S6seUTvCbfc1JBV6N1PGdbjJA5E2uC8bm9PRp41XtnKSsHS23xrbgXVmy1J56TU4su9mAATkiMn9uzQHzRkwatG",
  "key19": "4UuzmJbAZDTfTeKRRP7c9ht3jFxw5LFRBgeSdbktFjXJKLstYGvYLJScAMciQxyt79tkQYK3nCdBUvwmKoxbzXDv",
  "key20": "5aya3RcknY92USJApV36Q6irKZVyN7rdSLxZnEUPB4gQyrQ1SJGf7Dq7qbVsEwojET9LuQerqnesqfLZnmewYX17",
  "key21": "5bpJtfpb6hChBuRqamdzthZgEHLRDgrGxvpNTmUZEoRdBypfEmibgNABxGu9TF7SKzH552BQENWBnS56n9THVE1D",
  "key22": "2tSEZutLPwhHsTjE72hibPJ2PJUZ5Uj9E9FfhHiQL34QNyFGc9NXQLX79X7ATizzfxDvQqnutHroP739xRfx3foG",
  "key23": "56auZa3GgtTbKi165QUgzpC51TGMbW7A6V991veS8YiNTxfVhidtZeSnKgcwdk7NTggFkVtCnRu956VxYVcCRaQo",
  "key24": "2xMBsjNcv5eVeo8W6339zVQ4azomWJMLSSBQFtBuG3iA8abEBS16LJv92irWo2qFarDjsmExLZzcA5LxURrT1Kzg",
  "key25": "3HeB8zAQzewC7UbiDVzspEDoFEDndGmdBpB6ufg75wUiwSgPwLmTwczmThjz265HK7ftwaQ1SS4qQyUtrxRv8WEQ",
  "key26": "pex1GFebxZhWCtapRkEPC62pLXHEAbd3NgHaG21hQEovHhYkKBGBnqmubGEBtCALoF9SSuVCDFoLQkEkbZEn3tH",
  "key27": "3XreSiAgEmRUjKwG4JyzCzpWSNTpbvMue58axc8yJ3ggesEdkkHsMmPQxJAs7gmt58hvBb6tCn66BH8NX2vBzJX",
  "key28": "kCdPV94AQyhs7YCK8qVDc4TPowy5nrgpWR7Hmupo8tTwzTfcq36sDtV8oNq9u2EFPVJK4rQXmWq3bX53XD8QhHw",
  "key29": "R141bU96EgZGjonquDenexPP4gNk3oJzq4B1qZziBV8Xu7xcAvHojzkSDYCDWDAKDPnAq2TrUAzRMf4zdxLQWAA",
  "key30": "zZvtrnJNAZfPWSTKPs8WX6iiek3kqPcbtdefoUJqP9LuuyAkSfgsMTER7rbkm6W7DDHxrG8S993WmE3mSvq93DV",
  "key31": "2epaNiGSxLB3ZNs71Hvnu5d1R5YbDfyUaAT9ApSSPCcUmSVdxCJc3Ksw6eMxugiqga5TzprXF5hMkrPMzpYKHfWf",
  "key32": "4i2ZSNrkmeSrKxiVLGKwZcnjFYe1h4CGQrnwDAMuycNuas1gqVyAZMC7LpKoJUmhmBFfxAatsBwT6JKTHBY737yD",
  "key33": "cqB174jSEfRwJFgrFowzrLyUXZawgR66XyK5kRUGCtC7zY9peXmt7my8Q5SqS9MXKeUt8s96p9cQnJhSf3DVMyj",
  "key34": "3YGW669n85Y4yZpY1xJty1VDCx3kmJxEvhtH2r5RGG2EP1n1ScKifgrGCikzzFanD5Ee7E2ejZpLXj8U61dfxhKv",
  "key35": "3X8PPVrf4q4MbUDgA2KnCnaXHEQdF6CnX4M3YTHmJbsskLKxNMqwB843Km9LXwbTmUatyBKLamRJCyjhuEV1o6c",
  "key36": "5qZDo6sfhYK3DotFNGNbiYDosBsSMPF6TUy1epjH7c8R9usTbBbyVSQtRvWkd1BHn4be8krcwVWUTBBdobcEgRPi",
  "key37": "2r8RmWNUZZcbFC9hzHUCuwxFuPWPxTd976YaWNhKvYHiLBmD8yMCU1ZUnYD8MdMVTh3mWjqDrEqeJwsoexpkNhsf",
  "key38": "3UJsCoKE5hRPP4h7SCAREQtuaZokvkC9Yp2n8xpfDwHPrsNHQcyKUd4p3EXbU7mSjnNXjc7YeqxGwzUvA15bE1ch",
  "key39": "66UPSG2PhdZ1mGX7GrvDxyvJRSzZnKJYMeT9ghKgeJsZn7YfRTntHjRfbgyws8LxhzB5DwqYkFbDgj1pMRdKCFDt",
  "key40": "2GPsBMVyHwhpCLVoCSVK3JAsTG5qvDtwPLWbGVPmyEQyMRsV7Ne8VynGqWBg7DDBDPqjai4HzKuij6gux4qLUppY",
  "key41": "4NJPtw8DdhmWfKA4KMi5NfTZLVCgGd4Q7WHWQ8jJpkpNRBWt9kNbUjncR31ghK3TSdukdhSzRWpfEPUWjtVRZi17",
  "key42": "3s9SWgjZFNsqYcwFSGoykgo66xrPv6KcMcuVsWpHMtLWMcoq56swPt1PqSDpLMkRgCok6iRga3QyTj3NdDpD7na7",
  "key43": "2m9PB986VY9AGfN4CdG4RPeDeRFL3nxs3a835rH7wwmpdXqY2cjLz45Np8VrE34VpdxChhMRNfo8J2BheYJY4G9Y",
  "key44": "2ZiiypFYD5RnfHD7sYRQH14iS4C5eqMsxvRurqYA96MYKr4TCa8scLLcvyuZHBuTVx8ggQEbWWLmWWuBkKqPqbXd",
  "key45": "2qGN1Mm49ZAAq7DP4oXVbJVXVtpLLaG718MzuBVeu7stoN4q7nb6xXeRh3r34siBigebRJuUpR5ePJJXcRuEzTdn",
  "key46": "3HnYhkQ75mW6Qed8QXUd1dtqLqVdFzM1xzqcW8nbq1ebfzUvYLTWtseQJWAJwyB1RKKETA2FzAnkQ6kahc5znJqv"
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
