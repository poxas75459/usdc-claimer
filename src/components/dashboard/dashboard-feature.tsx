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
    "iATNCxfhuqYiaQ2yDrdGvzpUmKDPwL5WztfZCVS4keHcayZ1Ep7mnqBbDLpwzGzkFGNxgDsQVhUTajvz3dSubQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1qKDwNXPyVQqyqXeBB9LLBNJmyFhHCcz29tC3zF3951Vyaoq9fgvzzQcjBWeFhideyZGH8N29HKBKvAW3npDom",
  "key1": "3sv8wkmnVeM1CV9qq9uAqa1HStLBG9E7n7etR2Wu3ydt8SM1S5x7CmE7cXXiioJK3kd1nDVYvRoCNaVwUagDXLDh",
  "key2": "2whWhtdRur61qmZ5vTXDca38iQgicoyXNNzuJ4QegG76GyC9hxtZzcw9uu5pu7LZP1HuHrYH8rhqc7x5hD5XkQHm",
  "key3": "2NaxBLfSHXbcjdpDQ3yPdxhgaxbXSY2Yjb1RZ8zCeSnmAvdPCQoz2UPvSVb8tPrSqjPQYZZCkhCRsSBNLvXu5q9n",
  "key4": "ytLbAnZebxbAaMwm6i4jskj2k5kKfsGEutHkeNcChgu4nEkXrfg9AghDenUTc9XqP85MLLuG4EzBkUCryd7XTf6",
  "key5": "c6ERoxEDwzfVtb1yuA2UtTHUT5XC61ndWDT3rnko1PafcpVZWcJromeBKgf8ggRfab4Sw8jYjHHwuwx71Jkt94d",
  "key6": "2CpKW6ZVCeSpvMyJ6PJVp9ab2SxA6A6JSfan1tmohVMnetTqDvWdDoAjKMj6hYTQ1ibD1rRs9ANwQs3iKRxKX85m",
  "key7": "Een2yXschv1YizGpUuwYK4HFQ4XFpquWJfwC7SSQ1dyywMzsoNSKEQbmNdmHdjoGFwyQ1KFAdPP6UYwd5py7sa8",
  "key8": "tceBQerdt3wcFNWbqysLyi3fykSg8DVAveFZu6mcKNwersyZhfKeuQPY3DHGkxvGcFTXdoyo7B6aCfNFj9eQjnM",
  "key9": "2qAakWHqKDdZKzsKWYkV1baRV2Y2DnuDRwX83xQJfqeSuqriRzhY4C3nmqGmrDGw1A8gqovqhzG4vyZn2SBf7m22",
  "key10": "4RathmjkMoTJnRBxTNMXmMAFmi78g9KHqfvK3PVPi29tizMQCYTfTVsXbNSLLTNyr3f5nsBwhNvJVZCLGknSTyT2",
  "key11": "3RPv4VVNJW4pNsXmnaH8oz9KnyCMGQGYMjsYMCuqi42retPGrjZuSx5gHBHEY7owCptGLBosgNQViNi3wfFnabZF",
  "key12": "3R8PqfWqufFgi2mfQUufDydZUx5iVoCxuR9V5crU9AEgphaKwDcQsEw5qTBtFRudizCVwSqeYqEeykB3EdeX9CwV",
  "key13": "4ARcMsosWDfVHqL5dEZ3FXkw4rDwGoawLa4h5vhdz8s7J6KwZKfkDgjzNSHXgVyNQ4DWkM82aJQVRLgvMZVip4h7",
  "key14": "59EQe7G7vB3kC7fTXYbTnkoN9Bg3As1RvPqzZ7DNpiD3qVSRrHWJh5ijxo6ieuUxz3BK9Q8Z3cS4kSqQWfNdq8iH",
  "key15": "2cWrh9uesVveYtxMAGmorTbao6PyztofcPqvKihsxpruUeTnxD4uPeq1gyFW7gu4wQwADhNNhVtGvWMWCE3maH6d",
  "key16": "3jnXk3whQp8mXwrCeo7rCKi3AE6C7B2mgcHHn4do86nRvRkRdDSJU5j9LP5T4Yh7p6Uh42Y66hHr5nUT58Xx8khp",
  "key17": "5TwoSutDGPQgXeWNxLcm4cECFpbUvNbyrFFDFvNioispZe99JMbbG3sCf8rA6ft44NqYiWjniaSdPyhigvk9qBJc",
  "key18": "25hwqFK9sdiCtQKm2gzXWBqCT2tbZrFvH3ju3rLv4fHoyschXPWf8zFQwMGitnFBiSKtoPVzTc99aT3QLScFZzUv",
  "key19": "2kiBAMMErgP6ZH1JUvmsVdTxBpqtoR754aUp9eTGSFn4Prtw37eTngVJe1XP4nqGP1AsbURzXDfwfGuH67dHSowM",
  "key20": "3nhGVZfsiXM7QmSZaJ6RTfphuGLJMPoLkmb4wpr77VMKtjWhRvqArStsCWuKBCcftaXXui2QAmdVkBvw1qEn17na",
  "key21": "5NkGZeDn1BH5QPVHetp3JAPiuGaFh9gB3wQPgZh1PUURDwPPmSAN7MPUFjSZLfzqC64hQFqaSEWp8jexFYWSLb3u",
  "key22": "5DVk2G7sRMZHWwpfeonfhnDWPpX1zfH59aTNYWxR5koE2dAszsajUsiVHpwmxLw6WTjvz4N8Fcs8ZJYQLbLAAMPb",
  "key23": "4ic6tPQoWJMNkg488xfciciV99ZdJqcSfbZAsg28juuzXA274MpDVx4S4BxqbBGGjDWT3J3NWMh8Rfyre1T4puqa",
  "key24": "K31KMdJa8SwamWocVi1sYtdgkyLKdXeDo3YFfNV7Nzqmbu3da2fwkt1TKoHSCbdesrT3v3p8c83q12WTiGqPFmh",
  "key25": "5TwHg5qMhGK5eqopYzhvsHQaVHNyLtKcBHDTF2aEhPhx6a3MrsFibY9Ggp4nepq7RG6UeKbUvE8pA8qzxQxjnRFf",
  "key26": "5FaibcovD8ZSuZfANw2rjQLSCphYn6QjGMfgtqW4PSbz9tcxzaakbPiRWkE4xjvfPWt1gaceEcqovbNybeJbxyT5",
  "key27": "5W7wRNjD4hJCYbX7yVsPZoKqHTN2impbDp9dQM4UMNE4ADD37eg34F2dMF7oVusMFoJRRKxXg8oev3SdUqUmSepr",
  "key28": "eJLQbnE3KDE4WCvqrJurWeMJjaK4kka2TR2FVAGvefA5AxMCht4E19BwQNypFv6Fsnj1HtkM6MqXUSCChD6YbtJ",
  "key29": "PKkHoZ78LtKhPy2FmJ8tf82rgQrEnM7idY7c2F5UU3R1PJVLru8PDnYydvfti5V5kd61fpYunzWykoEb1tstxzb",
  "key30": "3QymyxmkbkhN2X7XwYDonuqT1KzQpsTF1LF3L2XuVvuzSjNEHjZ72WXKhxmBCiQa5MxX5sN5zCZcnrFQX3YJcKCD",
  "key31": "2VC2WosqTTwKFr1cTD4LQDsQuzdSxGxmeUjjSSybYRKGCt3iphfxwZX2HMjodSTRrDGJXMZzpmVq2i2hXeph8X8w",
  "key32": "3H4sdti2wDr62saw4jZmfQ3zobMSvRyjMkBthT9y9k9aqLE4epdJAdwnCwRHfsomryFi5nHdtEjsb8TyqruqTWEH",
  "key33": "2JhtEpxJE88ofvHtQcQyEHuajqQPeyjhA85RAjbpqnEMmdMf9zaStJrT4b6a2Gz1XXhSEJXBQ27XbjKGiFSkfpF4",
  "key34": "SrDTBcvfcgpa4s83bNtzDve2g66gvsVXxw3E9x4rNs3J19zRV2H6oe7cs1ZjAvUYABQHEwG1RwhqM6cX6an5q4P",
  "key35": "4DBY9gG1oYiwD5mysYt4nF8V9TrasQNBLMssMguF8Xee6u9dSt3uNVtBwrMY7MbmbxWgRZNivibuD92w4KUJ1h7Q",
  "key36": "3p9HuEkhaT4YYvo36FvW1c48Ev5mprL76wbtWE8o3SheQpsiYUT9CrHDEungFmoqyLyj1mTvYm2xkBtcQbPUw2EC",
  "key37": "3uNRmspEEBby2CpKgKTmDCVwHwwQHsLMKpzmt3Sd2xkbRYKXPnGmSmmzwv7EJ61cSskpggBJmkjuxmkbXscjrFU9",
  "key38": "22mSLLbGqjtEGYFpGWfHnSjAJaEbSpJUaJ4e6CgXBH5E4gbygjcRc2z2PyS13YU1RXtaLpqXytsMyvGvzsRN3hNk",
  "key39": "34AP8n3jCDTmyPVUjHPt229G7j72W682ZupwGE1KwwSsM2qUxJXco5FtUYfzMrU3sKD2hUTWyPzSzN4NckZWiowU",
  "key40": "5L7qAnBy5u8jPemY9vA5n5ZYgqsxf8sGtimyJCmk66sctou8nDBqwm3Ay3fuMMozi4b4PVBERi8ZEqBcvCRM9xi3",
  "key41": "4pqXCK6GdSCGX4fVPhMR63G8Pa52wbfCTMYYeeFc1FR9NjEgGLzzt4tasiCqdBYUHKQWNgWj6Ci2gXBK1Jyzp9V6",
  "key42": "5Qo3ukJ1Vc1VsLppff2sbvB6idqcaaoMYdZWYDKW2H6F3EmQjYtW9T68HmdtTkeBkzuZNiQ7myCuyGnZwW5gPVTJ",
  "key43": "2EoCVapJmgQcTfgL3bbwBt5byi1iZKvJk2TZePord22oC8iXyjbWvNFSkch3r3ju7sR8o1nkaHo4TjGGEyXps4Z5"
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
