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
    "3AHT8iNxmrXLanYhsLhveLqp63KsmvWJnYv9mXYfceBoPS24TA1CxVhnbVBCb56RFGEisEGhtwQvSkspXjpyae3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fXHw4uKVnbQH7NwqiimYoFudsTEnijFWmUxdwpyaN9P859742bM3suttk6gggVnEqs2MZ1utXBA7FDXr1vLoPQ",
  "key1": "2afLwtZPLGzCVHbyuvTLtQroaDUhAxvPE2nKzVM4drv7fNxHrV2v63czXVRTYQm1JWmcbzLuHWc3eTHTx9KNB9W8",
  "key2": "TtD5dj1seTfZHNBu3kTQoUBS9ds4xPpzaJCAaMvzZGd54LG8SPquYs8HZ5QcstL1ftodKQv9iBgBZtFK4J2AtLc",
  "key3": "5xCfi7b15ka1YujFsBMTvjcpfpZJWQBnDyoEmEDyiFA4WYcQyo6ACGUc5BTzZYQe3AXM35CJWtWnET2XNrikzNR7",
  "key4": "zu6yvS3HRt8bLWpN964rBvc43AFAR2jJi8zCYrcAT46ysGYLQjn97AR85GQ5e9djTgFrRS2ZcKNQoPQQS367MCk",
  "key5": "4HYahCnCSwGpMii2cMkUH3Cf7uBa2JjGJ7HVub7iSAGycirLaq6WTuvevJUaMUcFDQ2TEWHZnG3AfziY5rV83RWX",
  "key6": "5k69Wg64hVUgzE1P3ZWx4NRpV3RRe8WgvjUMfrRen5eNDnHu8ykp3VfWHVRfg2QjDiAiS5aoj64rTF9L48bf7M6m",
  "key7": "2JC9zyoXqYwqUfPHQVP57KisDx986KqUAEGWMbfn9TEE2Fs1oavYyq9DYrm3iD6uma2Ruvs7WMvxXzEsALdJibyQ",
  "key8": "61c1DHnkaXV7Ybm8LEwhbJha5rXHX2RTvPWDtYLnmNwEwvxqdDfWFL2uS42nNdATPDyoyG2sGTueRCZKXZxN2aBT",
  "key9": "5Pak4NWuzhXx1QZF7S7ARi2W3G5pnA7fRiFNtvpuPP2WNV1Fu6Ut9QcuL2zheoV6DG3z5tVtWvewE5buMEVvxZj2",
  "key10": "3MGD1jdWqZj9EoFFp9aGGiQKzfV5a2G9ykxP4Tti1QTm8WEN3JXtiz5CoHkw7WQyq8JBPU3Gpax815dZDkF6yAeD",
  "key11": "4aMU5oAkEp8dX1kG5BmpA8n554KDRAowH4JfLRHis6Ti5TuFnQTKLCEnAJaa5tpzQi58C2BDenE4iTWP6cLDx9jo",
  "key12": "4tDNjbB2kEnLTCPJdtg5sSk1HoXRwQD4bUPuHp51xbkLm9SxpG1fJ3LisDjuLfBkhJV7mjCQMc8q5XHRKo67yhJP",
  "key13": "5316B2mLUbS6DVsh4xWKXQRtChwZaSSmGwio5fa6yuevm91h1QQ88s9Tz5einr1EdUVnHNpzj4N62pYVYQYDAaHE",
  "key14": "4McDgFE18zNhtCPPzmfZtiqaYUJmHJ2KnhZqbwVrmp6gNW3SDUigSVazdGnaXLZB5tPdZ3QCk9gs7Fjfvg1wBETA",
  "key15": "4F9KXKSEHwTzVVUKTUz2jmHgHFftNHz63ghAmXzZ6SVu7SizXcJR69BzsfKzSE2RcyfDpuTssVyU3DuNbNVfHfsf",
  "key16": "48BKm84DjVYE2QtqWRbCNwH9BXm87UHYfU39MJrPZgqeGBVGTCCnLAjccFXboRZZmaGDYDsQsS1d1i93ZrZf5pu6",
  "key17": "JcozghY7oge2zuG64nEuBTAba16D2dPgj5isZRfAK9U9BZXmiLD6BRZ9nL1pw6qigFmJtRuqvTRSwvvmWnYzefF",
  "key18": "5mMWH38w3bY5pNAkG1a9sTKp9iNCdvXa48b75Ls2YLmLUQwpZWPLw3JSzmzVdqNLtuzmZKAx1o1xU3rHiHTWY1Ex",
  "key19": "2UJvhKv7Q6cKRcz3qyoyfvANPJruRbnCMyc3pQpy2aUYTRcTCsWGhGBJZ25ZLXc84AHDDyJGUAGSuLSQCJQnQaKJ",
  "key20": "5Bxdxx8ss1VxURvV5hGgecBTzh1VxDnepFMA27B29X98SmD8EPEqFUfbHKjDuqqvYZjpCRFhmabGKpAkNP86FMVR",
  "key21": "3vas35HqLu2fhZ5Lo8Xzkt32Jb8qKT57JyZxpp2LKEY3KME2o2ffhFFU3gZrDnFLgzV9XNRmo8eyQ2ASiSQXH93Y",
  "key22": "5AbQr19AANubCnKpfxknu9qkvz9vYWx3mBbEqa95BvH4iCZL9Lx72qZA8RHiWPRGADoZ26aZzmQi3K4BCwJhwqTE",
  "key23": "2mjfpUtHsvrrFktRAdNLYzAk8f8XRFJZ2q5vX1Bt2YT35K8XcVU6rF1iYSk4d3WCwr5uzF6toyruLVxTdZrxMAD8",
  "key24": "5yQoEqgu6aG3mcvRkNavbY2CrqFqY4vwxKcSVBsmG6QwiocHJTu9pyHQr4VYUhsY4WT8LkTgTCTwU51QXfsuCvfb",
  "key25": "NFxWDFASrGfyC53mxz1XqPoZK8XKLXAcGpgPfoZAkR4U49Vx9n2wq24PwrtbHbXX6Fn9CYX3K53vYqveEvpifHh",
  "key26": "5TQ6Qb6Fd17bzJYVMTqh9mLbRujxcFq1WmGC7TnNRjU5uZDDzzhxx14ywqhA4NTaw4okz4QeShz1o2uE99LycNag",
  "key27": "3NeU1WUnZ9z6pEwsVnQjHmyUnnwU9jJR5k4XUF4U3Uj5CaY3X2yGogbUqEGR7pYieYTa9oXhS75Wa9PTY2ZyjyKN",
  "key28": "ywiz8aXV8cCA5WWz6t9X8uc2xgjCcgbrbtSa1PxJt6e47ppRZJWXtKigFNZh8B5w4rwdcQcooVNtpL5Wp3mXesv",
  "key29": "3QiZRpUrXhX8HJ9dgwBqTSuVL5uXDParYoJn873BUWZsx9N9VYLKrUMi7TPg5QY8LXzSWKt7tbA4iiGBCZ2NpSzY",
  "key30": "5MSvqCdBceSnnKZvzYvgiU9g4Vndj82JJopvsD6RBDtXJ81BEEv2SKqkd2DxUzjByrMoPXYX2MUitj3qFbqYHu1r",
  "key31": "4yfDM5HhqGxCk4aU2CWdN2LnpPwcEHJZPpjQLRbGDybVV2QR5h9Qcj3hp4xfzxvSqkuzt2NCdoYZwZN9NKB4V54u",
  "key32": "5auLdxH7tgDpNxxKoT2Qtz4c9L2mF6yqFeynuFLSH4Wxc6sJeXQab3TLrE6azHkC8hyNSR16Ewi6Xmh4bv4agr3z",
  "key33": "3Gsu8xTUPVDptbBtDne3HjjByp9eJ8rzDHHS6or4nkSM7kvE7gsNKtkQzAPD3aoSwmd4yBkEEXB6A8xwtQyoJsf8",
  "key34": "4xFotTo1tCpp34CgsMj3JwH7ps3PNxJ7QMTr9gVULFiK9j6odotcUtFYkyj6FyXsyWiMSpUtAhyz4ga2Hs4VMndj",
  "key35": "5cpJiGAbKBNy5jxG8sirCaSNUCFAkyG2ianPTrzP96rG5Kj14LDHw2tkg6BUjgMb1pCFSWnZZeKvStd2LiMS5UKG",
  "key36": "2AD35aSSowzvKZW78DFGJATMFwFasydp4SjByykuq4b1dKzBN8wPu5QZANNKamLmxDU6ZJf8ES3SsUh58TBym6Yf"
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
