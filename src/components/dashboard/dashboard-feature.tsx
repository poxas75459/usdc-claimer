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
    "2UsoFKLEddt2BuhPtECgPGZWZjS6BWHPRaMYiyBjaqrvMQmsFfxQXiLRncvR8oHSf4WC7WNrsxErASRX4KBHpoZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PaZHy3oD7SVrPyytN9xLd5TKvxQtu6Yduo1uVFNDCVetGqf9GEFThNb6mXPbz9aBcGaQS6PXCghez66k4Uditkq",
  "key1": "5CkgRnhHui5HW1dA9VdoLixFjttGCjNotknabNmMSNpcXcbHGdeeNKSZgb8mxEbagopwcCSij8zudVzWKMs1Yorc",
  "key2": "2YyvAxibshsP2NvHVw9LKNNdAGkSSPtSu3o9KuQ7vN1zXhgcLavmET68xEajfCSSMmYQcMuLNqyiyF9VUGrTuGuw",
  "key3": "3cU5Hjy9XhePeCFjmqCE356GM7cBgwarTkHbfuETaCtGJ7FfXbfXwFSzmqtoC4M4hpPdbEi2fux6EnEFeXcEGdzR",
  "key4": "3Z2pkepvBrAm7sqP2EWzMXweUwknNArTvHkB1Dp4VneStQrMoiUeXXf6eEEY7uvy5eVWDfxgyFE7gp85MxPPTTSv",
  "key5": "21RGqK58nXzuUjPoFqUbKiZYWAcnnj7hP5QxLxcPw1gvGaovCySJLnnCAJtkfMHoM2B1PtAqtkB7w12XYSvwJE1S",
  "key6": "ME9bgQa7PGkp6w8znhNQeWcgT8VzjYFGejLZGves9kX6FnMR4nyJGjSGbW2UVzaatNGYPGoUM8CsEX5CqnBB5VU",
  "key7": "SVpQTaL8irFcqMstYHmrcAXfvcBzUXSRk9XjA6E6q2XSLG8NWTxDxN7geCKfquSJAu8WHnSSkaxWx1sNVXQKpkQ",
  "key8": "3dqFoYZdSm64U3T4aPwNApoEajr6HY2PMejYDhBXJV9AaxDaDGSyjNNKdg5D1yFiPmVQGHLquneoTP9t84UuNraF",
  "key9": "3qr3hKNr8hKfAZFLSKEHidNHtzsoKQhXpTwUAQPW6AFTXGTHsG82Jr9KTcHxnzVRmTic6j4tJFX5gMAqWoAomMZC",
  "key10": "416j2aVxx6MZPJGWubCKhHCm3MFj2uJJ12TAx7Yg8XuF7pdyUBCR441PkQJvZpFsbhz7omB6tCYxxue5947gAjjx",
  "key11": "XpTeqCRBNgQhZGM1HopKmmcjjWBzihkWhAEH1ZvixUgQaUvyRbdRxDKsB4Z8V1d2U3FnVnv11x6WPj382iMtjmQ",
  "key12": "hJVusEeyhDBkPuM9BfJCJNurvwY2yTXTg2Y7DoxfXGHSbg85T5Y5Wk2e35mh8VZSa5JyfDC65rBwWF5ewHQQFRU",
  "key13": "22X5D1uZQm78UfpU4wyBFxrEUvtSigDm8QeDKHezLK3rhVN7s1xNeHmcCdRJY3MfAgnZvSWkp6SppszRXxauzNBM",
  "key14": "63JWDtU5966dHt9hBbcYGBTtmwpZMuFD9pNyQuMqUNtRp9EmQ6KQsgiQzDRNBzfmN55esyai9UgimEFefBXagrmF",
  "key15": "hQQdwuNsCY2Cms8fToHqKzS27WaBVAkeeewpEunNNxiqcLkze8aE1dNMvayW2PBogUTk69xYenX2DYEifCVBHxB",
  "key16": "4dy1VwiLz7utfhTqc38xvsJ6akPZYAoxhy8oqbaXLYFxKAufi8ikHF34NF2RhFY6f43URJrhVqfvWYABxCuC4YYF",
  "key17": "66Cv3J1aif15Zm5FxQqTkFFcLobHvSuWM57t7AdiSQcpVyiYCRjWunQ9MwjdKMs1LksCNGDQeiz44rQ35DNm2WvC",
  "key18": "42LiGPfD8DwpEpkSCcbbLv4N2Vg7U68Rq2qraF85vDYEiUVHmHQfaTmjh8Cc2Adbc2r5ZT8Y1Z3VfxaCQhBHYgno",
  "key19": "4xSrm8smWmwVd181NfPm2FQQwivfzQP2EFx1zySMSffPBYi2DZkKKFgPyKrnaYDva2SGrW81SGAyzjhDRpZAQKRo",
  "key20": "4Mw8L2fd6w8w5rambVpzpkFdCHQVehqXir9pU4C1XyP3puZwXmpYLQatVWRvuMmGpUt72Werv77BpsXFeMDo4cmT",
  "key21": "4J3WDAJutgunYSsZy36z4VMN6A6rT8F6eMfxfmqXb5Nkyop89TywsZzaJEHQVzLM4zaC4rkUUtgNdVZHJoR9jcxZ",
  "key22": "49DYD31efeSVEk9qQwEAYbVu8UDh4ZWJt6tbihoBNB6JjNNKnTQfeqs9JpjzwiniXo7dk12fZ5Eb9SNSecjHfbSK",
  "key23": "dEjHm7j7dfYpDxm3tbQ96A3GHBeanMVzPsQreBPT62Ayj1LxnxSmWuhrZt28s84WP5kgfdwiUU5MLnM43rX8rht",
  "key24": "4nob9o8JyHoC7a2gxEDCq3PbPUmLaK15s7m1QmowMMcA4LT5qNUn3wx2hQF6JAwHCRCSUYXwfM79tdHqymUUR4yL",
  "key25": "2xGvugS7sJLM6PDop681cxKKaVbxPZqySmZLjW1tZZeDBvb9Jt5aBZXyPFHJAwrwhkhChYCzjtjGjoitXqFwSkRp",
  "key26": "5wzrSjr6RDUFHrb6Zb7yqfXcaH4QjJTqDwHLtcRfyjizDJTDYVA6JhY5Wnn2aa41jWuhfrC9g7Pbu3kPZFzfJPk5",
  "key27": "33XBeX1ER2DnFadUqLEEaWjtcFELi5hGz9zZpnD8Tu84TJYjddXJyrBZH49nLb8ZrhzmUoPj3Kd6iBodHmVVeeUL",
  "key28": "2VnRmS2UKvSs4eHDbJNdCVcfE1X2trGT2eEv1DLQPwaKFSwvQ69VhQkf8rmh4zMvt9nthryiXoa5hLVmBX74nu4j",
  "key29": "4iXezepVSaW5JeLbHjZbteaK5NXReZKRwH4ANouM9dhLTSTGuj82bH3CTeqA42TGK7BZTjptHNRwx8Nj4fVWYGxg",
  "key30": "5jJDAb18SKFCoEyHzf4ThUEYUkQXfuCcH64U4C4g7quqCiVuktxH9kJBcq9WUsJv8r7QgXwFeHYY4TkXHtHDTn13",
  "key31": "2hTVNCX7G6KxuxwCgRvuumTdFiZwX55FPida8dDKT8unUTCRqmNsBpwSVWCVPDo8h99indurimTfx1GR2yL5gf3z",
  "key32": "2UnpLHbGZ1Kd2oYnYfzPP5jLonS5rodhxTkG8jEA6oqLZDXaGJMrMfacCquLD9YBG2JWaz5G89qzcoMkdBkjDnzh",
  "key33": "3wuLmZpt1VQuSqB7tdHKyBcJX7B877jtyNnVpgusF4yd45PEfwZWQMrfSR72fcmJZFAoUmWBg4jPoTPgPZgtzS2V",
  "key34": "5otFEJDZDH1t6Si9pYp7zCEFkNMNsP9JTY76y5wtRxFQfJF9zUQMHrcEERb5BFy1LfpnBfXxLHYfJcFipNmNjj4g",
  "key35": "4QFSfUPmXaGYJR2HQYkLed3y7sC4RsA2PjpSVNC8LvDfZAGmVZ94mgx3pZeT3BgxqhTDiFTtGtC77jHkBmmoDkyD",
  "key36": "soHujjsgkK77jghm4igCzSFBpjvXJBrJCso6CWiNxVm7szfHmTHoNjuAN2684Qa8KGRzpRSoViJSqc7gu1qjEaT",
  "key37": "4EDFyHHryGvf2nmohWzZX9zWT1jjwAneh4absVomwmtr6WXEXXGe3pwWqVNXz8nWceBFKeYjyyzVjG2a8d2o6o8E",
  "key38": "4mPtULUQsHnKB7VSvq1jBdLmzAFz7eGKR6bzkw5pCkej2Gqqqyaz9UXUjpYLvC4vinj7qX48BJZdz2YCz5vMGYNe",
  "key39": "5TVX6Jr88YjHmKTS1aYSeD5Wq4umBn9CAvoHJ53GmSypPtMrJ66rtqymBVb9oDw2dk9ZVcVtX2MbdEdNeQbXhjku",
  "key40": "249CD1aNnTPgjAC7Rj3tWXJs1wAKMFNxHWkSn35SAEaHdwdDfpeRHuVp9kZy75nDyEC25F3pv616rkveLw86eita",
  "key41": "5NCvGcSdzgdgtvqtPryoXXav5kaxcgCkL11yE9tg2AjBjq6Twj8rTXt5Bb98hbse7r3CZhiDYm3wa64RrVTSNbPS",
  "key42": "4BTeohdDutFgBREzBMLgxdwEd8wtSMmXvbXnizqT4yjztJQRntZuBpumFfSEvjQwJ2pEo95TU3o8XwWx9XLv5rgR",
  "key43": "nFeeSvoZZ2ebavCLEpqBdnntz73BEtkXgMsFkTXLbV9dXkZ42BcZrJBduRBRMveULMDJFfhtadSuE3w1iKRiGsC",
  "key44": "R8434UK9HaQUM82iGaLdAiraBEcicUN4RKDsgzZhYze6sXnUS2RtMYMc15EWy89srJ4NvSfADTrK81q1fLC25Nv",
  "key45": "3NMpeemMs4QqoW2WBDNUfdxvTY46VKJNES59UvcA234mUdbQq2LG4Ki3GV3D6s37nJQ2mvDyt7onT2BjQ8u8kCmH",
  "key46": "XTfayYDMhEYVxLsA5CGYLn5qnfVpY1ZEVifCEZDiuxaxHn5Gc8F6ZSGguKeiofDiB969W91396Mq28w92gnGRa6",
  "key47": "4QSBfQVEWF1QuoDjFUM6M7znHBgm7YUB8ZZy2C9JeDGwkAwenogYnNo6qxSrY1Hibki45wnjqcdRzjUyEmfVjEX9"
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
