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
    "23zV6rQ6R4VxS1RAFGFJxmw3Mt9apPTC9Y2R7FoesbSvHBprVWgaMqnonkoGub1Q1SwnjJszuifbgYDn9ZBQsSSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38B5Au4vt5f4d7yydeLJq3xg5WKf1BFqnr5k1bdzA6V6D4BJ3ay6SYJBCysELL3kNB9Gm3nTmZnKigzKJqP8qbNZ",
  "key1": "52Ne7R8XmKgAVsrvRduTEEPTk16MHMw4L9ArUSEBqKbJtYYFAdnKcZcrTpdnzyTe3gW626wHubLQuYrnfs6CMQM7",
  "key2": "2AEYicdYkPSKdJfoXeND4LLhX4xub9xby6mnefQhsuVgeWvDSK7STLAUFFhQ8g9iitebTBsZXtWk9HFdoNvfn4V8",
  "key3": "3uK2fh1YU6iygPGKYqDWE9nDwxFEUTq4yJiA6BqLv1euoF5JEjEEvABV5yZkKbeHnjMnA1u481nxC4ogHqJWRriP",
  "key4": "3EYeYHddHGbkqdFUUhdqQoLwzG9m6y8am2gEkr8uEs3FMVBW2oEDvaWNFHCM8wCrT2RDL3mx1b1DVkCVBNWYM2cq",
  "key5": "D9MCm8TPW5UnZrRQzwzm8ie49XvVoGD96S51W9jaf8eYJ7kZ7pvJwdiSjT6Pd67YYzCSd7FvTFg3qrjHX1hqnB2",
  "key6": "4EYGLe31tHqVc8Zz99d9UewgBJJ6kKcaqTLQozdXr37A3uxorxTytXwU9bkwn7YuUbdm3f6veP2aoCK1NFo175WN",
  "key7": "2ZDFUrkPEjEuuW8tsDDwwmhCgh8f1ZQEAxPV1Aog4QcmwipjQu4V8R5b2icpQy5CBLq4tF7s6RKeJrR2EdwDMM7w",
  "key8": "4h2dF6qXttuhnh5J3f8kUczatQB7GKt8U3YxuSFooQofPoQR8DqsSjyNfAmGrMinLzC5Ssmbghu1jvprTiLADxgv",
  "key9": "2pc8CKXTkmKHH8EeXzuzHmnveT2NWdweVUwUtDvduw6Pkvcdt81Zc6ZVAGuMM4buEf4UGBedBPBqidyYNMtUxG42",
  "key10": "3z4rH1PbvbLED6SGx4Jc8rkDYRXVA85yPnVfvuZVeYDRrRUCHUN42mzrvh4Jkh3odDxZoHoTxMV49b5mb1fJFoF5",
  "key11": "3AP1xHCETAhDB3NAnbKF8FwonF4oEcTDcLvAE2pBNvg5DtgHFTUQ2mEUFdokMi2cQfiMdYn9eZgQ5R3uKXDGyKMg",
  "key12": "TRq7mAvBtyVYp2fhfVA1VXXor5eMCqZsMir5DqqVnCvgopnPX888Zk81p1KqtXEf8Vw96HZU1De5qGgs4S3kSWG",
  "key13": "5tZXcY87WXaU4rePNvdiAqXZSjNfUa1UFwk1v8qztV1iewhwu4MFPAKx3SqN8KdjJbAsxJeTbQJA3NGmkhgZrK8D",
  "key14": "4N2yPkxj4HgbKM4ZXcHQewRofsaBq7bR6q2QritCkwFwmU4R1tUfmD7DzCryZ1UNq6WkYsoX74K7MMMXmLrmvVo8",
  "key15": "64sE1nN8G1ABGh9aCAFcvqgk9Vzqy3nEJsv7SDaD4KphzJd6rHGpJEm7mmLEAmZxSPKpf34Swf3JSHVxFsR8uB1e",
  "key16": "5WVYsaCyoHjer6u6A18AYvC1VK3vi7pX9KWBfWQwL1mBwPrUofrLEyKbe74A2Ti4gTjhwR4BbncXdiR4Ht2pGERo",
  "key17": "4gnowwvEhY6YN1VfHndcT7BEo966xU2ybMK8Prn8sxtsDthfazyA5TFhfN9AbP2r5T73AFVVKdKqtuzMtpfLqwjM",
  "key18": "2QyqkQ4r6JMdM454k6uBfNhjihwU7ywnw3x78Kpn9mKT2YHxSGnZ8u1Ls2QS3Efdt8EfRYPhbxqfVRZzNrHAGV4A",
  "key19": "3H3DGiJgyrH4eqakByZ92guYajvzQFNaxWQdi5G8EA9ZmPPQaWQ8jivFnwGoQULhiQEDFLYyk9FtqWZ1fsjZ7ySm",
  "key20": "2DgmqNZKgH7fvz8q2BoYfFcXB2BDZpj1uPaGGogmPEAamPXw1D3H6DDYDuwqJRRxokQdzgad29kSBG32oJeuyPX",
  "key21": "624bApzzoCMzDFi1BmceQ6GYuvSxWQvxHfDoH5hXMacBgEdMD8bdvmjPNnT1SfC2Wgq7T5XiNh3wDeWEUzcRFd9o",
  "key22": "44mJCY71BJ7TC5eVHP6NaNYtun8CDTnFAXnZz1SFzHsct5r5fW5XLtFiWxLsZ8297ZXXSz1RZJbESQGkhZCYJiHC",
  "key23": "Nw515VSHeo3YQGccGts8btHd62cPa6ZC6JN3GzSA3bT2scFHXsdou93GCKkmermTJPNTqx1YoqezDtXS2mDfqZG",
  "key24": "37CcngBimY4SiGeLCpKSmx3V7qRUjRaBHQmQAapnqqfVkxdcQ9Wk2kBotnoWgw2Ckm7VB6pa529QiWhJB2nzj253",
  "key25": "4yJvisWrewox5JyqzEN919iBxRhDF5f1huCfzRWe4p9Rt9yrkNzu1DwkHmvhbnKDjogHXP9xP5Vq1ywyfUgFLNnv",
  "key26": "59bYzQU3r7ZZ7rVPBuVsJXnpwRvCq6cfsHDt9tTtXLghFT4xLjKmWVp6uVRrrNBH77cnqmwqbMw3VEVVFLHbksi5",
  "key27": "2zxzhy8gVNj5qvZJ11xHUbpocZofFcz4kE5oKq1jvxikBmZrGWKdtAdZHVgQ6ZjeB3uUuGwfZCcGWJty2NUhRBL3",
  "key28": "2s1vZPGp6F4qc1MCtCJWu7mfU9KqseTtGbX5VSU6kPSjEivdZqctd7kaCt3hFYk9ad1faQkR6HNiBn6ahJd4ddoY",
  "key29": "3j2njZ7outLqd87CToaATRcHbsi8KBVhVz2iR2AmbkGgAWshomcKgTU7QUcTxTMTJB6xFeNGFQ9vtpWQsmbJgkyZ",
  "key30": "36JCpTZDqs6Q6KDYxQJXEcZttViEDMSiAbWJrTZC51bbPRrBKAUE7J4TDLRgNug86DGcMzZpuZSDoXZFit4JCtPU",
  "key31": "4ueN5jJkzTzZFKhwdiznDbefbFFUbB66p2fpay53ipBTGyG6ubV4zNCZ1Q8hrDpi9P1GKg97TPGqs6XWgWyytkjA",
  "key32": "4U8WxExk7JDHj7SML5mAjjU2qwTrbGWkS8gKtS7iBmPGofm8qD6ssNnB8FRUS5E7ssXW9r2RNcku9nVnfieDM3Bq",
  "key33": "4En34JCRndQBkMc2pezo9MySzk4M4a1E6zdC4hkuPR6nnjwThvBEcSe7MS6WgFrrTjXNpNsjHdMsbsY4kfAsu6NH",
  "key34": "3c9dR32XFScoYHJvaFnRSwCGyLMAT2Q3sJsdhQBhQx6PH78oTEbXMbNk4Rk4foBDa98jQABcr7Cg5vQiRiUsp8ME",
  "key35": "2uHmxyAPoM5x1tY4HY316Ppc9wa8MpPrWVo8pCp7MbhfucN4WZiukihwf2pAkGwqbaaHrjzaT2eGzrUahtqyFxRW",
  "key36": "3Ucm1WjR6xiogceWBdKGdPjE5hGFq285EQ1J496ezq8rAx4qjQvzAxjd3kVwRLmT3kHwK3SvvVrXUEvyhhRr84f1",
  "key37": "XmyEn13R81mTmGk6Jk2jwkLpQTwwnyCkfzpMd8bgXiAPHH4mK1VKyHXaukwVX1J4bMMfcaSYhPYyRDQhaLs5Xjo",
  "key38": "3Zoa4tj7MykcTXkYToMTnuBSx86Wh6BPZnDx7UiLcaJKXfnNU6e7xpFof9exr38m2BEbTCCGoYbXMqHRhW7Ntpju",
  "key39": "QR1dNpHjxNDN8ZMrs7TLv49pSHWtZTHsA6iHBBj58sYiTHxseeToK5Z8G9XX3VeveiwBR9byvx9gob7g8aHXVTW",
  "key40": "2fENdKQT2iTQUGZwrgBWD5cdpkjZsCyws5bXV3AfLtPdPm8q5LMHYHqzsaEsijtJJ1GzZnQViDngM7sCyuqtLLd",
  "key41": "4fUnMTrvdYvRXu79trrgu9ChfcQkHusJPXMWvbaxG3nQNySEnzTSy8ANwPV6cS4DKCsKibY9Kivzg2ARKRd1Lzqs"
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
