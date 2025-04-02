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
    "4mPvSxT8G3gKAXX45aGsu4dJrahMb4otULakS6oycqXEjrnaxusgZsc4EDHoZoaw5uU1TgLeJaBBpu3uBaa1bXKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQ7XFPsBDx45SPiGqQFv8mJfwtGqgEjAhwd1s6Ahu349vn7avGQ7msMd318qyTk7uyN3o33154z1mf4U9ir4CBs",
  "key1": "3ayig5bj7FR9dMMxotWkF9urW2KFJnLb2cxk6byQtMFAoUpLR7GQYqXfaaQb1Rqdp2KcFdig7Eo2SszK7s3Lx1tX",
  "key2": "3LkstzmfXn8bC4WhENc8TRhgYWBtv4NxGWD6wuLkq75PvKLzLXXDUjDAdYE3ZoyAkLUBvnDmETgpmrAFiuoiqVA1",
  "key3": "38j7Joi86KDyPqoev64Vhh9UiKM4WZbgcYjUJoaWo4pKJk8xfT5D5TVReHQod9k8eWTYswaysGKQ9SPhDsCtTzxa",
  "key4": "5w6nUX2DVkBHcohoYKmcWLo5aZVi4f9uzZa425Tga4Xtxy1EoN8FwvmF9FxdbHmVUyAsX7A4dBWGeYijcvFKwezD",
  "key5": "5dUtyg9SmptHGPuVanerMu7Va3Sh95gXpa164AqvtpNRKDHCZFiXTS3vDzpVX2q4f8LqAySjUjmeFcxD9od5YGTe",
  "key6": "NAkMGTpcyBonAr7D5H5JTVcyRa3xAvfi3KgtwoDdxNqahuTxNzcygegFiNzXbfKYEw72VS11oHmVDbPQEgjWc1N",
  "key7": "4k7S19NqYek6gXs2JXkYHGA5AUsPZutzAzeh1seANJRzHw9Dvtg5v7bXzAc9Npmf7q7D3AUwKJb7hU4TjB7bFYCH",
  "key8": "21okzysy3m3sUVKyzHihSwoiM1rAo3w63DE2hvSiqjkiePBm7urYJEBMe2rsXSg92nvjso5J1SAApdw1mveLxC8z",
  "key9": "iKDnL1T1wyoiVnH2UeQdrFNcY188W5sKXu8jfPboEknGxYpbKKoB6Zctv86VEq3Fawm2uuRmLhrg5NzBLiKGezF",
  "key10": "26K4SLfCSaiPDQtmJGGx2GfjKzibTgbmEkR9hGD9oEinWTKmg5cS2DyhegNiSemdxy9j8qZs4tVFzmtH5VYTzGY4",
  "key11": "3QZBr99cav1J3QkpeYrenWgLA1VigK7F8m9E7Mkbg6dRqu8ADy8ocjFaUBMgCh2zjCFvJnGE5uhF2XjCvGosZW9f",
  "key12": "4SLmuRD7mGGax4SRiv93Yb5pis6CAPQLxSaMk2PHiq4ag8hxYeyDCPaaNFNpau49mBgxXgBBGG7Fci1TBb5rTpWY",
  "key13": "4KjdZ7m2tJXGF1NsWnq2nqo9KfHCPKoCh2mnPsJx44zH3AQmBcZcyU3SiP3P57j4huUTRxic3UWdc6DQ1vQRzM8K",
  "key14": "5FNof4JButLiarNYJZuMdFsT3KndENs3cjm1Ef7UMuYCvW3YhP1FAvtsirRNNF1rzDEEHie7xtx5BnACCujhV37j",
  "key15": "4uhDL5AUQVhjZLBn6vd3tmhFyeGyNj1MVZB7w7RRQBfyT5wqsC4gjw3xL4GfN9owGbSCmmWPfES4A2GTfkbytTCm",
  "key16": "2BLw3zNwfeuPWaXBFdZBxxcPzvhuMgUi3oXfCyiJ2KD7qrTNpuxgH6LJSGswuVKFHUENTFstjdgcrAPMnazvQB5X",
  "key17": "zPa8NkdwHc2NzuqjteAX2fNiyaqZ9n6VosVuzFjWCPcNiJsK351SJVaKTDzvKaNJrBSLmEeD3ZQP95jUfdn2fgq",
  "key18": "5Cxpz3nKVhiitEPg3VkCtwgdfenVefrpq3A44EsJQYGPEj7MknCycGHbJjswejuAqg7KoyeQkvU4E3RpFb4RaBrc",
  "key19": "Pixkh3JeEewg6SiBjVdQBf9zLUtxk6pbqnzX9htAtq3UAG2ekTJCa6Nm4gsMKEcGt8bp6CmAMQb5aT2U7eGrkRp",
  "key20": "4CfdLNmrLV1NP6gWFEDhF7NCd2e3K6CPGmD2PNHCdmPeGMSmWEAaGKFGk8MaYsy9DxfWmd1aAb1vBDGX3fGU57t6",
  "key21": "3U4RFp9NQ93SQUmrjCctVWbeHu2cbbBG7wxJzoFGGbUrVEUCNvUVWnmsHjLWiJqnaTaVpgE9wuD72Wvm6jwubRLB",
  "key22": "2ou565VubVJZywN1HAScteEnQkpAarbSQLfPDfkHRoVSDA1toLG54e9YigZRFBr4VQqTW1i9R2GRaWj42U2c9TeT",
  "key23": "42HedhL1ZmEaYiLaw7SG9v8rwGzt7VypjqzB4bqTc8TBqDv5AFuxhk7wuB71o3nUN678CWBifR1SYheNMsAWFuXJ",
  "key24": "2ihHZFDgdyNMzPWoEBd4QPQWfSekuAVf4yC5hrtbMaMBkNyK6BJx2HWH91ahqEbojXSEvzyeghrVN5oSbA5cvxVP",
  "key25": "3MZLnkWzdvuXgELLJg2QDdFVoF7uKNA3CLvcsMqKsxhoq8joKGtc9aG5BTY2LGa9BxidzxR6xQcCkvNBzc8ud1a1",
  "key26": "57Nbrx6LQeATZ717WuKitDc6X9aUepDPT8ojSBxprWHh9F5gqBjSD4H5o4cmDe2JFa8mDJJt3WKbCTm8i7HFaEd9",
  "key27": "otFJL2wRuntnZZ92twXieCdYxDQFndbptXhhaPSWsFU3HCs2iBspRCKjyyoZeVap5HSNXyJpjmr5PPsH6kP1zy7",
  "key28": "2hs6ekWXDdEe6LcgBY7jGeCdLmuA7Zh6522opDXmiA8BUCG21CSdkg6drkDQ88E651SH6GEyhu8nzhrzR4v69t53",
  "key29": "4rfiBTF36woo2DTcqa6WUPY42rG6RcR5nXCK1GYJgXLiVW7URKdAwwKNRjSFkpPkzj13VmQtYWpG2W3xH5n4uLdW",
  "key30": "4Rv1EKE9KE6sy6kgbSNj2aYR5XtTGqJLPSs1mPr7XC9VKEF571vbxnGVtqCUTXWFrCHpniBQtZubveTWfT5n9Vs5",
  "key31": "5vnjuuQMquwDJUpvYszcVi7s77uvZNGWgujAWPVk73D6MY3SefLwAmPWZVdftMCR6h1u1y8GLdirDsLjjAirL4BA",
  "key32": "23o7ybpka54aAs5fxwttFGsnW9NG4GdoRCQcW9enwKf9iSiHBQFatf42j2MMqUhiuM518NUraYLEUwJ7SBZc6vPE",
  "key33": "2Aav3wRER9UWmJtxLa7jfTGhS1GjNKYxHeD4C8gd3rWuZ1cp8fefdgyfKDfgapu5ZWRFoMN9L2cKTNb3Gf8dYGRX",
  "key34": "341f5njuA8FqFo2ZD5J1CVvMDHLHfyBAdRPf93su9wR7rzxbygWpbhZSStKyD4BoaVPBNPwhDzzYhP7K6e7zBPKh",
  "key35": "5FMtqXas8zG7Pjwx4tFX99SGoZwvq2VjZrvwJjmiwmvtPBEB64qneZ3ikxoMxHDZoBqNrQhoL2oDBVhT3HfitjQK",
  "key36": "wJg7eCpH6AjQeQVjAspqPBX2R1fB6QcmfQG7fvfaJAKa9bnB46VENntZpMq1UhCRRwudu8c5vLbao9H2V2T2XvM",
  "key37": "52bsm9HEB5kbiJpW7oppWQBBTDZC5ApnupCqj83MoyPjfkRNxKoStnXFJ4a3tso2wN65qW7A183LNaLH6wR4DxrR",
  "key38": "487iUci46Sq3Bq1UVMc7qnRU4k6Et3hT58futC2ZLmWAKWLfkSjp9sKsgMfBY18DLV2qxV2p2cvTcrmPRfp7aFua",
  "key39": "2nKE2CQgP57n59R217eDKd3zyoA8UuXhh1kt3cjouesZT4fHzK5D4S6ogFuA7ZvvPMnDF2X5cLimgaNw6ZqPJCGP"
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
