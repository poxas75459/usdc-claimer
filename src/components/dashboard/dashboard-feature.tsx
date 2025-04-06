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
    "hrLv1eYuJrzpJ7NEjVrAi1p35UHqvDMS1v2w8AWiTFcpVisiEUed43AAUTsTaJPpayeU2d6oJ8HAVAb867vJ1rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y4nRKaaXLK7MdWyJGqfxge84Uy3ZTXz3Fv7mg2pTijCwQmM6C5w1cFxe6m6NVEK8PvLCwpJrzV8CZacuuatdBzG",
  "key1": "2pBZSHDJYDup51fGqmzjecZLBauT3mYjCcWbD288KbBswApW8Maobi36i6c9JSpdiERF3KQEyBXv631kGrjFP4wx",
  "key2": "3oKgVqVK6eLXB962tnJZCNymvcT9F3QeuK1nihXUmTG9etF89tqKqa3jzq9rWMX6TuKtunY4JxHwCVKqdvFapWEc",
  "key3": "65hyL1TZ3rwbS5HGqeABPpcZA8E9RRjVr2fJqcYgy4AugACxo5AoLj9ubQ2wNXUVAD2zYeuA7FD5yuUC2kAyR6Ro",
  "key4": "3sgS1Ssv3VyKAFuTdrwWA2mbF3WpubF5bUcbJMWFQ4FndyWKcgLLQxaQtGnSWzcahhkDTU6ZCfzdXknTw7TDQwnr",
  "key5": "3bfUJPh3rJwJwgrnNdqx52WkrGQ9tYwdqHYjXgwmxQREgMdKHoKJePGL4zpvc7rKyqr6ewa3sodRPYymMzz8KfJW",
  "key6": "2QkCt8oDXsfrASqoHA5cdH8AfVCSMdM27UgFq4MKbRhpfSTnLuwypuymPCLiycGHPiCurXbLi5bSDXcJsZ7CgqEt",
  "key7": "LnAEHwv3MGmnSWJDxPzCMud61k8UJki5EoMKQL7wmTDfYmcgejcSZdK3mgHCsvPXLuX55eraxYH3XmQcu3nwhZE",
  "key8": "KaKKKgMCZVVfZZJbbovLTgA9rVEcCg6cFMEj9fgL3z3nhtEhFGfSmY6vPNeWJTxYvTFUq1JmuPartdBF7kvama6",
  "key9": "5FqcotkLzxGhPLLrdqWLWEKCHgNJgd3KpQXNnzqT46ckAWb1qdJzPtVBpAYx57h5v5mo1NL8e4PZ1yAwPTNKCT4n",
  "key10": "56cQio3sRVn9wpKNWhXUKb4Q9apbev6FnLUdhifmsKMdwvoCTfyoU6ffXBTK1CUejmGYx8ZEnkvYnn4ymoh1eCxd",
  "key11": "36TaiwfSicEGoAn9UwbeEHMTUNkowc3T6g3wXM9vV35gCRWdwExTDnPvtsP7SZXLYhibbdC639g7XqpERdrdGAM2",
  "key12": "3E9S8xMyaAxtchKJcSpWaU78C88oJ32U1MVvuwfceiHxwwZrm8Zxm2SxzQwPdeV9RJCmvPvaALRxATR1pbdNfmkt",
  "key13": "4YDKcUEG1yhUQ9C5DdLBurZZdBSKybpPScWYcxUYeC5hSa7GAdKBFh4dHc7Xojv1CA52mY4QY5F7GDjMncEbWaRR",
  "key14": "3CvVHmf4gkeUupj6K28JwvYHiSFjaNSEwaPVsXoZXyN9rP3wZDT28xLGrgkeo3tVis3tzRwCSE4yihcfVoTWjC81",
  "key15": "49ygn9Lngya6gTmkNBFYFvdBiLqvuwmXSmPEW8sLPQUwoXhRSfxnCNtMjQYhNV39jrRBT7c1BbZyC9wGKwWXV5ev",
  "key16": "2EsDgd67uvRUEGfY5c54mPbY1RyENxkUA6bMoEUMdKM9Rvp32yr1m1jFz8xXeuhMYG4xFEcvoUAjCBojthjhCZMk",
  "key17": "4fG8iZao2CozEhxDQc54a3V1DPgMW4jjrUigygkDMz8YxV8AD6yvmVrMLeNZ76kDVAYAtLDpbN11GPEzFixJBiXK",
  "key18": "2WFjTVdcxNis7Zg6VfHcL5szeus91QiYFzsxrvMmVTHjD8gTJnRnWMEF7NxxzkmsDWmoNxVF4cwyxzKw8w7jsu5Z",
  "key19": "3mSmZd4ebM9ftMTPx626ENRtePo9pafuABAV3JwUW3RG4PnF81UKYq9DXQqnRJyWmyt21CSwyy67tVv7VviJaXmJ",
  "key20": "3M3S6FLuzisRqyaFeZEhsmphDGGC7Qwry9fbUPEkp6b9pu73a2pyhf3fU6TtRWth3YxrQn9MQZRWBwbvdYUUT4PE",
  "key21": "5HuRPX8EKQKfMBNi5BHp4xAWnybjhHrohMzS13pbYS37EhufeUwVETopaWyfuDBH8o2dMJqmaGXkDY7LGcDQ25yv",
  "key22": "4KViJtn9coGd4aBn5iREWN74Yb8zGcn6KqjDa7h22mzfyhEvS72yHo59qCxfMQPh9tLwB4qR7UWBkTRKUjYfuQLs",
  "key23": "jaYByR4MB97NmT4PbYqcLwCH6eaSf3vjSZJooXFkUyppi7tz2G9ikr9avZ5ZJU9mauZ2kqcJCir45zCDFBxB6oD",
  "key24": "2dMek9edQUJ9PQ38Z7gzoVrRay2BNVwEQPG9m78b2ubuPyCK6modi5NW58BLZREsuL9iri22uHBdn1KfPSoktc8p",
  "key25": "4so1YvKEviMiPozjNjWBUa8rpj8s9QKmFkPtCNktPaHGmkiK32P7sQSZvXcxG8e6SXGyqC4iTdGFti5JZFZEpRMi",
  "key26": "aPtXZc32Xa1LACSEuRJhsNoQ1QprAaCbhtZbd1kaPEArwL17g5NaNW1NxdRjpGFhH9EAFAcHwAaWCUCnvbVcbgz",
  "key27": "45CFer9PaHHod3pMuNUT8fPX5y8R2GNpDGrSFpgZbBs7b5uzhsBPeXrMS2xizW91URyqoCHJ4MrgnXi5Jdn5Tkyz",
  "key28": "2A4CPYjMd6hHsfvTkG2zQg7WEyazM7AGvfAMGaDQxFdTwrEkbZb88V37dWPihPvJsqCggZcihdJQi7EAxJMQ76SV",
  "key29": "5QQctfJ5H1GzqqkErY2pCh8CWNXtq3k8sXk5ieK16L7ZUU7dTfFmLjfzLbLphbRE1s7MzSW3Wc1sXp7R5ZTJCAho",
  "key30": "5ee1yJtowmAcrS9sqkBMoY6P6DcyL8inL18DUJjkNGdrTGM3jMRDLW9k7hP4e3pXgSi63KMnaBXs6GQD6tA6kMBG",
  "key31": "67MZjLX24DKuAVTEBJKb9DvA18HiugwFdVQBaDaADoA2JWPuJMSD3P1BFhAf5nkbhSQEF9qW4uiY7F149sgwZ8T9",
  "key32": "63kirjoyzjDdckC5fti7AxgLit9FURFPmTKecUmfzcmaBdAS8rpbgo6dNdgL1QHiQwkNdQVfHCL8eP7xdJqr2aaX",
  "key33": "3zQ3GWZegxR3RBjpRFF9c9chjxaMSgw6Z3uf3Q48RLnsPHAX59THcvNxCBjEDvdwa9zW4AqhhrT2SWZNQawgdJJG",
  "key34": "4BG3qLDWFhUZrh4t6fnUnzYAVZmQBfqBojdZRHrM9uU2Dftpp5vexh8FwMEjSBo7EZ53bZGhdu9HBYvjTSWTcxDy",
  "key35": "3rKsVx5rLgP6LWUfMDyV4XWLBajomwNaAZdfYKg68ZYEfjM1EmS6sxXEWsDxTZLuUaRNqNwTvWmmkc1EGa22fw7L",
  "key36": "ehMbHUy43QfWM8P7kVRr4DZ8UnkHUHLu3whbfo4qV7TaQoJMX8GSd6FSUq3yT8qonXaZihzUBTDXKznAS6mg29T",
  "key37": "2jYt9abeMtiLc1yx6mP6PvzTrAe994VmWpY69rX9J4BpjjheBrPYmyTTHqXs6r4dUvbCEiBS78t5ME6WCkHVsPfr",
  "key38": "29npgMQEJLdbbwmCNBrWEbVmm7XakPKg3wYzdCcX5okWNE4WGwrkPAEax2okdHGNu92UD3MVXX7L2tkp2zM1vFuH",
  "key39": "51ZvgEKczmMVs8BLojtMc8mwSp64UaHnEokfsQJW4d5TsCK4P5hycZsysqMw8JwbpQHKuBkFYjNbFrpYniiTjSC",
  "key40": "m9eZ8CNGoEyLmQdsuSnFfgVuJpgxKUnj7L4932j9UhBQfJsg881gfk4KuDQLD3sUnNcTgfFrD8C6ciPAwGfYtGn",
  "key41": "5UBkDLFnd9FXix8HZZmK5LSJ9aCaGcdLEESgzn6v32GV54zLws1mnzjBuQ8WHWJEmkkXnrMMnLyAg19EUtvv7Qo7",
  "key42": "3TayXMCpBtVnVZRhFpU8c3DVt9ZuBkNSWWtLJEKACpaBAb8fw26fRuXuZT5Qno91s4cmY7kLibdcotbeTUcCmdK3",
  "key43": "5vTFipt9V5P1Zvktexfmgq2MimjxLmSoQoNgDaEVEQ5wDf9armx9jQsSDTbXcfJD28QSECYg6aNJ5spHfFeiHEP6",
  "key44": "pivUphEUwEuwLtEczTpRYk3XLAHAw7UUGGxX1z3W7hq8c4MroqzpfQUhwFMQuuadPUQf696euaHN6WCrK8S2Zvw",
  "key45": "QknM7GcoRaKx2GDLzntv8ETaJgMT6aVPRgpG66CJpYfay6sKdqkKxhZLSuYSaKbV6WFRV1ccUPymaqFfT6vnjeo",
  "key46": "5FRuqXPfkyPkMMoMDnP3EpNCjAMtRdv2k69TNhEw8YiBc24Xb5iNWiy533fgtv1d1GKeiZhRwMTjJuJPRztvL62f",
  "key47": "2DxkHVoHDMcL4Uve8RGySPbL2UG8woGAihNk8V2DwUcgiiL7JeYGqWTpCPngSPnTDtpdVvK5Lnm9MJLM9mh7AxRp",
  "key48": "2ivJ1tur7cKp86fAQvZf3Kjt6do2zih5CjnZELAokLeiJRBH7EuUFt1P3Q45c8cWW1kBHX8cAW89BnqhaSGw5rjt"
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
