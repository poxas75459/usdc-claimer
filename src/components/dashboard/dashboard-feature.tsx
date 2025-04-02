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
    "5W3nZRRPDbpX7Xfqy43819ct494HAgj3EuAfPXrtAWQsssTnWUDNNfYZRNhS9R2ySMkrEDKXEZh4HRergbXkN4GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNbKszbzxBn2SoAnoUDXYPLevabzCeuMT3jxDBjWoYsCnreuA7KEut3ubdDvkLm9wAoKfGttS3CTdX7FKzkFxym",
  "key1": "3k6DpzSKM4cvnbihApBqUUC82uCQL3MUuGTzTT42iqNMnaeRvdCc3UDueE4ibi7yA3soDprT6SuvFU3tcFvZ2FrA",
  "key2": "2jZyg7fr3DrGcsMviH6QtYY3fy9i7mkGfKht6GpetFbbBxcAiFVr6RxiHhR7Bg3yLNoHA2YcYM5rMYTcBTxiQBKA",
  "key3": "5u6MRxGqY331d7SNYZ7vY24jf4ADq76MyHWku6HNTq6wVB6YzKroppy1RQcZmQRchmWgJtLJmykSG2cKL2KXzHdq",
  "key4": "3SzPgT9cyS99W6dYVqTCHv4KtikMcXtntPrASHVL2kZZhFRfs8NuMhu3MSKe2SFHv7hi6ZMg3q5gFad5N1StfX58",
  "key5": "3MV6SdBiDr52SjG8k9Gpjb4chB6YdXZGT5vcxUpVvSkLo6XKPbWSf3bM75bv4vCN5cr3b6QSHWNswtdwGFTnPS9j",
  "key6": "2Co8W5Rny3dFdidaNr8uu7PcqY8VRRQefeieo24Ay1e3qH36e2sBwa6nir38ozWwAuEPvwt28oSYWsvDJ6iYbsG4",
  "key7": "2ccJk2h8ynSLatdFZejdtyH9hsFm44X7CyGAg1txJQ3DzQbG3T848ssSRrfjbsrA4Kgp5GFwnW3bSMCWQSdgTHuT",
  "key8": "aMth6RPXSwVq2vza1eWNEFdrbM95xLYwm62cugwEDnZoXkrX3NaVJPhAf7cGm6B7kgFd2chTRnhUzVxPALMzoS1",
  "key9": "4QfStSy9GAw3Ey8zpxPbiphYEZMYkv5bWLeX83ALEBXCyJXVqR9mwwpEHmJJN8vVUkcbnWXHhgEiwnsH5ygQorpS",
  "key10": "4m5iJzWdKBsQ86CrUAc11J4TQrotDpMtzcDFmZrXJg6j9AW5wSoG2sfQ89Ejhp7MA4TGedBTJqEY5xFGGZmWEUAP",
  "key11": "1tJSGqh2XqenP4AmuE7pPDm4WPCjYpgxJ9Xj2FhYpdVH1ryLfuKTrmj8cDhoUHnHnsAd8VLdzbzy4aQ2LoR1LEP",
  "key12": "2A93a4r9mRsgHASqyrPWNBdJu7v4CgLiRtBFW3UZXBshtUfeCBsh28PGccn5v7yJpws2TGRYJPhGuKNrRK7K3GT2",
  "key13": "4SYsxD2ngmv2gq85CJpGaQD4NHqic1GBfhVBRY5cfMzaK1pZ24gnNhsff8xr9gNi6EfRmsUgYUAJe2UqgMpB3Z88",
  "key14": "54aYLP3VFtPjznxKFriRyzRgkkgu7ud5xKy2BrUUSTVEiuRpjeHfFvQ8mLrAZLPwfME1ggvZSX4ozbPzsFw32QHZ",
  "key15": "3TDgUKBsk2SGfD9qgG43H9A8diA6qz2hCDg4fV8Ge8F7Nnseuv2rSoBpKJtmXq9u2uSmW1fWBtPaXLTcj8jCKPEv",
  "key16": "4aS7FDniQmERsZu1zcgW96gau8WcmeGHFRMZ2dH7GnC4UvfCTqt25v2M6FgWEKJp8Jr4bm3Na4Qqt3XeJscZLWWv",
  "key17": "2GS87okkPkVKpdsY9nSV2VJSoPdAEGrX5gsQWQtHWxf7z94dLkpJqAT3HvY1WCWPxeFvbpYm34G8fNngcfbSbMXa",
  "key18": "5D7c5v8CgKHJbWLSg61dZLnDbhWfNRxGfrHDRu4NXH2U5S95U71f83BUedZSYQEgdrKthjz7anHb5DktaPQcJ57E",
  "key19": "2HkVfm4eucVGtAuWayw6m1ign5oPxTrXAU6B4MfA3FR5TnmacsrHN1uyuZvQCxrsA8CKRJj4vuSC5mTtP5QKMsCQ",
  "key20": "5uRu75yo5tuvjkFbEJ4Kc5jPDyxuVoWBGdUPyoqyuZChYoJqBP1AyJYdeccmzGMKww9w8xPS9Cyvq6SaHJkDF3Ws",
  "key21": "4YfkkzifoDxhFxywmwXmtkjkWsjyQ5g9tkfBu5F9sw2UFcU6FG1QG2Bz48Zz7oa2T3YQokPYygGBqPFBsJsCLpCR",
  "key22": "4yqbv7ZRuCeFnUsfToiQacSMn9p6AtdmsN4qDJ6qPjtBaGXsbDCZBNjFBug27mBPzQkdUfjw78PirN8c3ZPXuFzJ",
  "key23": "2Qj9iMYmVg171uLkF1cmhurwWoQvNdVac8FCyyKQ4oRYxoGneDCx2FKRdwXjzngfAZkfG6AeK1tEh7hkw1f3TgYs",
  "key24": "2aXfjGGfDkkn6VthtiiZgAwn7EHUBTM4kQLQ7xC5D9Ykyc79d1osriQpG6XdtS5MrDk1kauKjVFU76u4dqFhst6f",
  "key25": "2QRXkiyQEavg4VtzCq59HAqZc763Etkocv1W74yuGmQdNZ47rBPDcwK18VY4RwkG7WvxqNqzp1v1aRBzqjPVJ2Vw",
  "key26": "31AHEn1vW3zwK8zsbbruZjQvNLrxYXyU5fQ6mb59u7C9xfa22ZSgLNTFB91epqsqj7T8VYmwUCsEi6WuMSVK5gfr",
  "key27": "2edQh2orWWJJK9zeRFLt6avdUHYEfcGb2w7PJFtSLR1o7oaadT7X9Y5dcZaDVsF3YfvRqvRUUN7AJBpmGME5S9To",
  "key28": "3B1B5DcWaLmdoquk5BhWqXXdBnbcp8LWnWXQw56W19amfM3AQC8miwyQFsXfvFt8mg1fgGvapkmLFL5fh4sQmWbQ",
  "key29": "5fC4S6iXmGFQf7JcXNQr4N79Y8qj3X17hCfpziK3HuVm4w7ggyEJEwkV3dmexTaPMdbxsWasfS7RL2vege3Zk278",
  "key30": "4ico41b4V5chdiwjJo4RjNigHsb2kubfp8CqjWhs3nz9xGqzFhdbWCp4PzHWcSCwLwpwCKXmxkn8RKWmuZETTyXf",
  "key31": "5vpmpjUkfMvYaTYeGac5ySWkrnAyvJrSyJZ8UvSHnVS3gZL8y3GApAZuiGTyjSKdd7xt75tJjLSJyvrXJqix28Dc",
  "key32": "4uzLCRzSXQU5zNXvgmw6LiP2rZyHJh5eqeBfNsx2th5uABvJdcMQCoBaEAqEYUVkhcb3UVDfRU2fXunBK5m6NhFj",
  "key33": "35YogZAk6Be7C1RZKS8PyVLRPn6Tbzeb3iJaiR4HiZCW5HYcYSARAZ1kXvgqZqeKEo5FaL3FsJTPCjsZVkVhhYTX",
  "key34": "3MX1dUaMrA2a8UCpFtGXreXjYXNULbLNWHXtNGdgWKupzqpjm66E6gD3vMaGGkhpYUjY51ehtiwveLJoksgocSTk",
  "key35": "5cTC6Xn1ns346vJLuysbp1vqkPt1dkvRfhuPU4aMHJyMTHdtxN7gu5gM57YsbauSShGXL9XNHGsZmADsxaHqDFBB"
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
