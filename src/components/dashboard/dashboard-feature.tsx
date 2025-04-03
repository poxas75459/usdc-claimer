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
    "5nF24FCHguwxoigYFGftkwqsSZifNaLx7snZzvx8z6WygnMH95BNWWPvnbRjdmoZQSZKSMnvkpw6Lo9muLyJ8TS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5n2aLmVSjDV33HRfHNweXtGRc53fWBeVxeHzSPo4QDKtBSUwV5B3SZhGjwCnPvrssyNbmP6oJG2zGLDd6owSGb",
  "key1": "5CY4DfjrDMbN14TkQCBx6eLBSDoKp2Jb3FUKEr71nGp7bF8mL2Xsh5Nx2RZ2wpjwHPwYJJmBR3be2xPR12FtF4tz",
  "key2": "2zakkMughz1Z5onnmcAYkFGRzVqzZxsXBTNsVBy3oiCyaCGTCHMjCjyWW3ntBocWVkKnPYwyrAb2ztHsjsUn1TBL",
  "key3": "3GisYMd5FsYFuGKXBPxkWK3pAxGh3wYPL8CjUeSiA1KHkB2Tqs6GGsjcy9dmdMdGeiUoHBpk9sVQYtobaZK47yKT",
  "key4": "5aBRnWPRhartLTjFCZYmxn3Mv2Yu9vUp42TpGNvidtXPDoTygb2HxPSW9qivrT3AskJMxDfm8c7K6W5dfMozYs5Z",
  "key5": "4qR6zUGAsX945ApTx7xKRcgEkiCe1REaqUgZLZaa6VTwrftUWShUGK9v49HAB9mb3JHfUcuAUg6HSHLmbszdtnTM",
  "key6": "2LhWbMk5LjXjnovutkcrB7jcRd6EXEhDPc4kSh4kcp2DSsQudWD5fHPKUMz1d75PtGW7FGtUiFcPpVomnb1TdTrY",
  "key7": "61tvb1ku5AvyRaQJh6vuT4jhLrwM2v7k3aBEhWE6VssxjV4nHYmNrwW2UFMSDsggYaBPxPncgHhDvgfWz28xSnDS",
  "key8": "3Pq46xTEn6AomfyScmqbTx8ksKJqq6BQwDz5tihNmzC417cmsGuJxcGLYpXz5seUkh8pgy59w55qLBC2gs4XUp7W",
  "key9": "53Q5cpMRkSjTuSr4bFqjcahExZLpaA9qbqkiLF3GJMamFC2X4MMd5mTaXGgPq4wEuZoEfZ77zwNfySw7QGHAKSAP",
  "key10": "2yMiA5qwbsJGkvYpAdfeoLu3ij3M9SuVyx6fN6kUMskY7ZH3ZxgrRECZ762TDFjReSX6C38VjM181id38E8EvLZz",
  "key11": "3tQNKTC4Hg6DPXxPWafjRpe2WQK2FybTpsiR719ez11d2eTm1KUdgUdRnsX2kdG9FNKgk3mXFaWBdsbxjKLmULzT",
  "key12": "4w8TrP176PBbjJ8LeYJ7oSNrqCoAK6D29JzaoryiL1Q19Ae1VaqckmpFUwurQ3JgyCe5kmsbx44B4VTsYUasYouY",
  "key13": "2gzpJZsWisE5jKMRRvxR1X8JBJZSaGA6yxNYjQnkiiBufu5dSV4p254QtPDSSRQdwYVEk289zo1qWvjNZtEpbGpE",
  "key14": "iTpRgeFUPbc22vg1Xv9xFcMx11BsZs4oM7j3k8M36mRbUNB557FghofU2QV8QLtAbDksH45tdk93STwnZUPgG3r",
  "key15": "4mdqBnxPSLHAvto74y7n22N9qffXZgJgE8S54ZkY4x6fJHPkY9M3xP5uKHzJzm3hBUByrFpW1cFLT7L5rkBSk2rS",
  "key16": "3dBDLdKCh9FEptShCAwo5NBVpNMFy5a9FbpWNH21Q7GeiuwXispc5cEfmon68rbJLLzRgCmE7wVtguze9AZVj28u",
  "key17": "sT38wPhNF65XA5wCb5Tg7g5gK4nVB9BdZzarrvdok4jiVRhEZekTer3okawMzioL5gcta91JATiLVX971sfsiqG",
  "key18": "FS8LVPhYChYuXPsYgTfqU3mhiaAFKbk91RQyiz3XyW2gGHiCZW7EH8pYduzoj6iFuZ87HMwxTih3rMhjbTzMS5P",
  "key19": "52fz9G8EZjEzzwmws5Au5dmY3mBHMZsJEkEsWyogreydfXCup4kLickfaU9pMT1yigqCShymi4fAeztdkGDhVTAs",
  "key20": "2CVUSptvgHwRdZGhjF2FqdRuoq36fVJbk8ZqMzYzdWfWNceE984auDcVd2EE1Txw2ynariGXKFckCS8SsoZ9R9YX",
  "key21": "39CXE45JJtW3p52QPCbcb4xcwcaqiEWrT2yGVMfmEhcXQa6dN4NbubqWyKDAQsP7uKBiVLp9QHo2tXoUEGq5XMD9",
  "key22": "2sGf2z8JJfPG6jxdpuH7ufB3DMeoCUcogEVNJ3vrQBopctnpQEbB1BammkvpqjKAwsjjv7KwzGKEtMKnRqZHLa3c",
  "key23": "3CD9CRqSkXRycFXvG5mzY7ena7rhb2HrBCCAfMpCqC7qGJFE7MbMPxDMu3rwZURWC3bPDa6utdcuri566HjExqqG",
  "key24": "3McrFZSq5x7gW1Dz3asYmF3iKZZuMCWcA6DiVujALXJMVYU4g9ePDcQjMLBtW6awJ4nwcPyU8UyhZr3jaMqATCUQ",
  "key25": "21fWUV3ntCk1QB9sdLMoiiZjr85QRXcDREizDHHwtgMLjuu8GTJDcB63gm5LQAEddmea8cSJc9rCuz1gta3F9EMs",
  "key26": "3sR4JUmednGSxx8371KHCN9kQLbXFDe6FMpCG7GXza6AqZ6sxq6T7yDD4hkmJcZkNPn97JojtrfZRotdvZtCD31W",
  "key27": "3wwsc3qKg8U7fUQHSNeCUi3SzQGdNNVbr3UkmbrsEZ3WFYrrmtJMaxGdsYQAzB1V17GC6wZioN2J1Qk73VTvFzJy",
  "key28": "5sn3MpXfffNkpSZosCNBrS622s6B4dzu9Udviwv74xJTwJzVkdPUYmCnaDvAiwuk8jE3kTApY1zaruqDnTEghygZ",
  "key29": "3QrToSJJUvNpsyJNwwZuW1K4D15fKrdb9Em98ncbVinFnweasCNb19STZu1DEhoUXzHSps6MvxM8GS2PZBi4YFq2",
  "key30": "5GeGUuaSgoy8z9oznrnD2b1BAVVPoWMW29vFniF6oVADDjKAcgvbFH2sCc7r6rdYnfqkwYEtK68eXcw1MD3Q7HUD",
  "key31": "5SrNb3uQ5Rb1RAvnUGpWUAzKVeHhALAqkR2Fi2Pxd7XcT76VZtNjHLj4j2bmJDkxDpBVFpaAHUT4YFmTCHiFSGZ7",
  "key32": "pjP9va5UR6bwTgHqeU1VKLkerCRG4pwY3Nsrb43YJur25T3ZXxZuBWxCb9PZPn6XDefB5RL6gemgdU8NQsmt2nm",
  "key33": "4rfQh6tuwbiVnVb2ZfwPvz3PMV6W81CT4K9KTmdhRCuU916z5fUNGwsKCqUrJcMzuqJmNQTFbDqMqH7ooe8E1KvA",
  "key34": "4TMw6cvJh3JErxMshf2JPdxhCuaG9K1R12RWYnsNynWQEaDxyWPvSWunRPfbWaKNdcqHJiKiSedc3ppibLtLJyG5",
  "key35": "ktC5LhzazsuyDitcUAvFAuAiJVhPy9rqRKy2pXD8WDRtVXAvVDdSfJJCVehdGbLdu4e15t3JMqkadrEniQihMiG",
  "key36": "66ZTuNfoHsMmfp9yGvMdfd5LDsNxivix3eezMpBBuGB6cxiJuD2xNSDsQhtCLkc7KwkNF4JNtUC5MjUuHqq7smZr",
  "key37": "3PsUDdaYZVQeV6YnnqNx6evyyZjmMMtdsUJA8BJBozskquoE7SKAbaXBYVHiHYX3biSrXZxN9Ro765HGwcMGoGtT",
  "key38": "4B3FZVaQUWn91cQcCCU24S9GtnLCpBJCnLf3RCrqUh62KbAGcBF7gMy4Hruzvg36bw9mKGGBtorYaE3MLRt4aczB",
  "key39": "487Ywyyg9gqLX642GXCUnTVDeUS6BpfB4SftKcdGEPhrPhUra2QcejkFCFP2ZLvY1itPvbbs9BDPwkjtXDUiuKaz",
  "key40": "5vJ5Z7qBwnvLEQwVXgWCKhDF4RLfgCEnWhxkADbyraGqoYzV3cfpup4Ev2YfFjhugZv7TDcJPGwz5fomhHMM2Wiu",
  "key41": "aoYYX7zw8VfrMr6vmPakAGvBRCKLzLgWi2zsUNxkL6mWTdXKwsHXmio4H9odXi4DHhrzDkDffc9uFBSxJFXMM7f",
  "key42": "Q6RKGhCxAoFJcW8n815nQDZJjTVf637WVKgQVWMkcn6NbRHpoiEyWLnrQVRkUCaHgmRWNJkFXDh2D4hDp1GBs1c",
  "key43": "mUi6dSmsqzE4sbzoeqvZkgMJiytcRzUDzFN9vXRBbHaBeh3Yf6w7oTmjpbdQ3ZPjoxX35tf1dRKqAYPM2GHRBAJ",
  "key44": "4uQsReWEMoJgt4gzBRywG5hS6GSDLjqfWWdBZtdHgoUqNhd9E1wtHaSANfM6ufsQ1PjgJgX46JnbDJrZQPww14rR",
  "key45": "59gzj3cYZwHmDQjfLrAM3tHSjWA8KNLDnTKxiMub85N5p6p7gkUgYHLjzgGHKpzqwWQfTxxzWEWYt8gQ1LpVxFxH",
  "key46": "tcb9kgG9wbyR3h3baCci6AaSexgqzBNmYTUreb2EkKX4yo9oa3DZHo6KRTYvrZwts8H7cUgMeG4TkoR2DvWP1ka",
  "key47": "QEKhjQtdPorFS4aB2agxGh8kiQoBLVKo2sBjZtxu5BGGFddddkRFZRJRiZbx6xrSQdmaVtdVJdgJJBcNBXXX7Ex",
  "key48": "4mPSjxhGpoQWWdqbvhmmxTg2YZAQf3uyVfjHaDiHwpAm4UPrzjuHoRhV2Zk8Ezje3MZ5JJgaBsErEmbJk31TFCH9",
  "key49": "5Ysk7GPzXe6zD8s7mcnkwephjfzYYt5BhaLCtsRmQ2hxzMw3f8P6GUvuymHr5Nh6mLPxxZEpdyJrrrqYCYXMvBSE"
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
