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
    "2BCwoQP5jwELvsEf9fQAWFtFWVhirDqZjDWAMj3dgEX2faNm7vQ1Rx8ePjh6XwTEahny75QLwHyv7io5EFuaHBFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmWCv2ULF1sEvUXPCShaFCGqnsLctELpKfqvMVtpsd2P43ituBKXEmZYTeQbuLb3EVuVR4qbwARsdRkGacTwV8Y",
  "key1": "5NswKCG4u7Zjviyqy4XKM8izbNcEVZ72Z3VX5FqkMthDzWTMbbaG236UcN1r9LLcT7xgbH9PqaPgME4aVmX7iXbg",
  "key2": "3THz5WkXW94YU1yz6KRPgHDZeN3NmUyC1YqfsnH8qZSW9juA1bF8vzkpstVrCjG8iWWBH7PeKdDv8CsSabtdTBqa",
  "key3": "5ntvUzDFs6CgDWTWJN3NYicYrRzA3LMhNodm92y5YAGD88LvwU2HV2GvDH1cRYwkVHeygc9idHCF9bFLWFM2zTZn",
  "key4": "54UwkwH3R8yJV2YcjvaPE7JC5MFbQZaaU4GU3uAZZAXKYXEudn1c9ZmxzqhuCXSZtPS2mpb5T7yLciHVgk6AT9h6",
  "key5": "3sDnk7HcTh5GGFKJRcWMrsWg2cEmsCqbjat3urVqCaGBHD1Q88BiwFspuHwa9ns21LexhfHbySBAA15BPdUUJCt7",
  "key6": "3ijM1mZ4S1gcnHMi129Ei1WW56PxKUMzfpGSNy3iGjVuC8S9jycU6YXva5XmnbyQzR4dT1pWAi5ikySveHbkwE3J",
  "key7": "3xceCxMzsDoS37DpKvWfNiMAvEZEgTrhE5X8crPqsyzA1Y6XpNKtJ72z28Gv6bXz3H5Hdqz1rvWrUhhj6fvU9aHX",
  "key8": "2vyTNHujoYNh32NnJnwQAkBgPP7bXBnS3BQJy8kxAUZRL8H6b5VxMaxa2iHxr8vVYXL2BtKT9YzbfhFQUjZz7N4Q",
  "key9": "3pxmudEuZrZUwdWVuoWQFaGWd8UmdHbskD1jYat3s8osA4t39VNHTu1bbmuw9jwkJQhvCVEXNcWaRNwD5xUi1CLL",
  "key10": "8emytUU2DuZb3XVHoJTAcP999QF34LyqG6JeESmoiWVST3BJcNtea1H7pZKY3T2BgKzjHFecCgNADjx92JHgP4E",
  "key11": "3BV3gokumEyLdCL7qfLqVGhxgqabuXMjbbXP4w97BhWCGpo2aNdJTXpxo7rcKwsoyqLoSeXY2mq2KZd5TvM23vE1",
  "key12": "3H516nQsfsUxEXbenvTsXuE7VxyebBFPf9wWfaQbWEeF2ijvzkZ1FGst8euApNHdUbMswrKGWj3jfyDCgK4HqMdf",
  "key13": "4GzkfchvX3PGEiB8K6umMRHzn4TvzzP1xkorozrukdGdTCk9v7z1dq8soMWaVE2Ck75rCo9WMTdvKHu24GwUDHee",
  "key14": "2QavdqDL6povCMdhY6HJZWXjkbQhx7Nebvf2kvWqbwJApKYK6boST3G51tJ3gZYFfmX8LRe1KS8k2radzYoZFF26",
  "key15": "5PSjwwvesAXRPX8VSVAA16sxSbZs6yHXwMUFdPs86ih5cn5ZeFYobXSbmEgbfHAZap3XPSuFBEheX5XvnhJZNhtT",
  "key16": "48fwcqQoRw9ZEXGTuMJgfAgAsuyz6LVU6kzAarzyYe7tBMmSqtuN3SqYJBcKNqBS5FNzW71XfTaQ7gKQfH42nefJ",
  "key17": "5SY3srpHgnm1doAHFwkKezCWhpxzyo2o5KnRAd1fmymxd8KoxT17sixfdvkiAPZ4bua7keDN6XMxHvkGjRmEzoGM",
  "key18": "4haUL3N7F9joPKwYuPx3rpkqbazDCvxoe2hNU2udGS5Dsst43frRweDWGZV1PHHXXEguhFPfUKVAcJ5nZbVnhcPx",
  "key19": "26cwVaUo6TSazoH94vJBCTuTDF2x36n7qRgrD4uQWkFw8KNCco3VaAVpodvQ773aZ9LvfpkbC8GNSUF4kH1C7AUX",
  "key20": "4FpURrHAB4XCTaSibxk38zTAxojMWNd678sn15XS8Ym84fH9ejmvwvA7MfRi9Fbo65kqhCrKYjmP411kcRQibCvy",
  "key21": "2vDQessFeD9mMsU4J1veX9zq8PBNkEMHwdVANfgMac6fWMSUPZY9djhFu9RE2dmazu8Fkb5GJnz1gLvQcnGPALvH",
  "key22": "5PSG52p9Y35V2HXfrMwLrg5NF8ZXHb76F9aZTPKRZtcNs2aw4uUGxzHanvnuStMtSrTUszqsHwNRKvASY9jAb4LG",
  "key23": "SYBFfhkXBPmJWK1SaRSwJuCSGHwyhtowVqnpW4RTFi9UPiTeFt35TKYsfrcXBo4EQAPuSnbP336rVUeJadiPk5v",
  "key24": "4jV9wdzPMHdx1kmv1VHoV4BTCcKraoQoWy98WVubQ48vV143QaHQt5fa8pf2sJQWrboAQAwE9ZPtkkKcEGqvy8qF",
  "key25": "5SJioSXrDwg5Y6uDooxSUVFNt27DFZK3i8KsQtMv93J9yK82U1mrUnFMCrnFKTGb788irsqhxW7tcLcyAgya8WD7",
  "key26": "maB98m2YETAUSpcpTvD8xDHTK5FJzi4vMmEgRdkVLm9rW8VMttKXHokgRgqFMu6eGpXeZA7dk8txNxnzj3G75Bp",
  "key27": "2uZH7SeEV5tGS7LfPwrZVdjVrD94Sg8H5LWeZQBrbLugZGV35rfivPVs791HJnvp2hdijC988Pf7jTB5AkUD9Hzt",
  "key28": "RZo76hNHeYefKaWb8iNTPRaM5pggpkcGha6xSaZSfMEgFKCrjFgE2qBAEKUL2hg29MNEaNGZ1pcoYgZQXXH53Fs",
  "key29": "3YS9bW5mYuDv2FwkRyy43nebYa7txRdMmTDgFeDDoWC9uKzyvszr7PTrBi6uvPaagkebg5tRsvqRtxeexErsJHJY",
  "key30": "5BeU1DzN6PJLQu93AAS4TNyceF1SbkwiAxYVAGULKw7B8FNLbQyoFJgiWtHBEnwRtXJVYVhyFnn7KaVrNbWvwLKv",
  "key31": "42dPVxBYcXV3mjKTm9cNJDW2VMyyafBftN1xuDp2ZUqJYQS8V1XkuHJGQZ3QrjFgq4Tyqq8jj6HNk4JiwQRXiZzK",
  "key32": "57dtBvSUh3pdZLkAzKGSbgUktjnsq9bq4AoNTywu7raxVx8THnvGcEanXiSG8TDn37eGGMei8NonWmcbTgQD4KjE",
  "key33": "xKccR3L7re6vjC9CWwYATt7hXYDaPTLBeWTrn6jUJYB38cYPRrATkHvwC6pdu8yuyCs98natAtJQj2xGmsk78Z4",
  "key34": "5NvcRyqB2jbFSci2KSaY1Lbzwb9LjVPZ6S99HECQMd9E5D1Xtpyh5VyGcPLbasxpSMq6sFA7oQhWpg5b9oGm22EC",
  "key35": "no5aPjujV752aakJv46wWdBNgNTQGy6v6vmGuKHHsazLbj9yJdZe2aHkUNQmik5LtnzGuN3jPbnyh2kEiThhHpK",
  "key36": "53NqSZqgYYi1ptXrY1z2EKMH28nXpdsNEgznnX9bSKtjbnjVhq5otQtWNWRva8FHTkuAVWywbXr5euKyJnpxmQir",
  "key37": "dhwKFYfztuYqXxTuaQix5GzvRj9BV2gVT9EKvmGiRGEnXcSkNgowsUJUhYrJ54M1UeJ9AxGUrspqebW3jgoUcef",
  "key38": "2vNsZu7yHHL3mJyvAo2tUPcEcM1u8RCtsAEbY5KAzQip7wgFhhseUhBu55JociYpfbdNkhxFDaeMQRmJJk8M26op",
  "key39": "2TJzitKTCEV5sm2PPS4AH8WfnEZKRp7B8A32B7kTvZRUHEfdHEvoEG6Ww6ZrSraoDiQTvi85ww8rBYNGjo36iB6W",
  "key40": "3JsXzGi3GDuxtdwnQ6VJvTZVJsRyJeVz8CkXKjBezoPjmB2ZoYwYNi42VGMM8VzFww92RPoCJVDiNEu9L9VZN9NT",
  "key41": "4q4qoHSgho1Hho9JU7JjEYcV5mmELsamtGsAuuESGa6a35rpSnxKCYqGd51FKU5uFEA2VJjNXRC8SPzmqQCschub",
  "key42": "urVW7Jn1geHsMmM6NcNLYxYtGey5Svg3DD1DAaafqBk6a69nxYCEnErdwZ3ybK1LCNH3ysC2wGU61hGMFdaYZA9",
  "key43": "CUwsjUqkK7cv1uQfb356Wyjdrb6gLaE2ZHrNhRWiZVC9BvKPSu7vE6Tz9cefuomLj5MrgerLGeQnPYqkYJ1jR1Z",
  "key44": "24uCLNnntS9qLFD63RNcEHRu6DRtUqaeMrzjPejs3Kg74JNRFihU9kxgBUrX2iYBsA6HjC6zv4BME22mgta4ND1g",
  "key45": "4XTNrRXr2gdyEWxu64L52mXvEzUp8zANfWk8aEzjjDsuYAFZFzTDwJSqB3mLsBUQrfwo25wisddGKt9zt1y2LvQy",
  "key46": "3SQkLNnMT9mBCPgf56Bf2GxHcY2wb1qo3KherK1GiarNzT28zf8wEhaNH59ZQ7HrPexeY6L3Jreddf8ubZDhfPPE"
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
