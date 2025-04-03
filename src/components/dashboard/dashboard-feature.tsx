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
    "5gyW9iBHMUW4SX18eaRo75raToPknyxYKxCEfAobSBdEvT1ueDApRAqtE9moLvgAUKsT3UjHH8K5g94w3z5y9Qet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggvDLogU8bndcCFaeCLutrYRqx4ie58XHReTEdtkvnaNGaFS9ZzBUWLgzCn4kU4jCkSkKDYindiA7CYZ2NQBWQn",
  "key1": "3JGfuwRdzGmFCKzZuZWieKKuiUG6aRsMXMm6ZmA3FgY7EVkwKgjdNQfDEJePHSmJyw3uPVyGKdEyeWw8KVCyH1JR",
  "key2": "4RUhA2fRUXCVsvUPQQD3twB7MEVt4tTUSKtAHU8jhTpPLQTHcc7f5PqjRNyvNZU2vysuYDCDpAXHHfgUtd5k3t64",
  "key3": "594zn4q3DbE9W6BQT292BgKuZLCpt1ApXTDbwEUWyRQtm1V628FxGYa8Nk2zF4totoWg1cjEtYFTiqvpVqMi315C",
  "key4": "3hsAXCnq8jMLejvCYJswWiLcdSfQE8ziSGF818EZudeveqAKrptpS8UvTD4VRw6J3CrTzCdsFF3mXaqNDyXEvvzn",
  "key5": "2hBd3TNxMHr4AuUzek6qkVjnPCT7kS7jAosissrvrNnSS31X28SbA7ffR5UsPYXUYgx2cXNyZTQNyiYiEDnQsayC",
  "key6": "5EFfzn7VTBnmJLtHug6xdZqQyY4UTKJ6JTMwZZesPsLfF7Dyk3LVCbmYKsxwLhkPqvSpXpaFF68ycLcCUoZuhczN",
  "key7": "3TWXZntBdKB1GUZQijKXtwLo2bMsee6pJWjZxQqt5yY9w127zvy3MynAkFRHhdWhZ5tJJSuzPZKtnopSszGV8cp5",
  "key8": "4FctcYnvrJVFyhe9EACJNavbDh8mNWg7E7Vo7AVQuz9MF3W9FdHxoEx4MFAhajtsxRLpQ6c9ZGYWyYfv8iKwgeT1",
  "key9": "3f41ePHJwb8GQ5UTvsqYYh5rW6XUJjWpMmEvJfEnKRHGksP2fiTndiJQu5Z9pESPdVAnjsKdvfbcasS5usSeHumr",
  "key10": "HefGJ3K8L3KJHPZmX8DQc6q7ovngFEthYtv6yZxfCGL22zM35uvu1s7wbwHNQpJ6cG9PTd97rVZ9jF2mczmXcKi",
  "key11": "29bMP9W6gFhxzD6JCnna2TJKTdpiZfpxEcPceooofrMtFv2fsz5N2AWdLzYoiAJuXvbgaGvHpsEsbEDva8a43cDG",
  "key12": "5wBEmarth5NvbLrE4tcW2i1zELziqnu5RqEfb5osZG1Ncn933io8eXCFB28moUCbUSaQPw9FJFTiYLMYgAUEVw7u",
  "key13": "4EaCWVf17eoaqfCL1GwHTJ7fdKdpCf798knFZcxqXyGKzqochY8cfNt7Wfm2gCcQSnqF1tkW6jqWJpgRw4ZnwtyR",
  "key14": "48VXP3UatPVGWcjrs2uBStRnLif6LEbgJ2veB1umEMBrgEcn6Et7HzDS4gzRdX1DRtNiZQuRwmNTPqCKoaHd7wb",
  "key15": "tzZAcxp1GWz72foTXMsdVFgdo3XE1mRcUUEqRfSDMFZoufhcKpiSK4AVqnrEeRXACNVNqyyB1CtdWc8BYUowho9",
  "key16": "hnstscstNW7K1KDhWJajKEn8RE6624y4AqCVqAFJ6Dnzt2iHt2evZMNRvA5yHfVUxSWapj3nLn4J3W1wAHxBK4t",
  "key17": "5ZoJyTz59JYwvmjKiGAQWhBS8nitf6n6ZD66khtPrgA45rab2nDEKoCqviCvJfKupGh2Y7PbaSriuMLN7JvouLEH",
  "key18": "V27y2SJG55hRB9Bj9EJgkKJtqbreB7VUFJoXUYcP6poA7E2wwNet1m65V2gmGJcYVHbUUsD8Sv2378KHZBxXa6a",
  "key19": "2CHmNsdNqL8R8m8jCX9CJbtG3aUBG1CmhE4B3j18NoJnsrhF4B2tWbhdJwYcZQPCedZ1Z4wvneGuNp7EXueP9dan",
  "key20": "3h7CZxoB1MAWX964KSyaA9UzEhx7hYz7aYxk8u9YJ55PV6jSEapXZa6dCWujmNFPbPo9DuebZEVkZDsdsqUyFY9e",
  "key21": "66bNqsy2hBZPu7eJpeWRsXUSUDNqbjBufanTQySgJRchNZBQyQmSesbmkoPe8fJRQThtDkbgdpKXmomSTTHbtXjR",
  "key22": "5rKgq7pvf3ZPMkSKcUa1xxLMNxQv7omkR2pYMCfbqPKju7WUujvEh2LsNYT43EnTT5poZPxGi2CLux97pr5AuaGh",
  "key23": "51WCnZzjocDEaEpYRm3VsHrLArdbRAduzsQtxK9yAc2pcjp7dc1CTaLfKZsKuAhUnugcdz5JHks4jsjvqqBSjbDf",
  "key24": "54dw6APbr5og8CvbJNBKFUALYU8ijnmUCZh7MAdhr2mnspbCxtQrqT49mjpPfTRHd384fFaEPk2tGe4xoC2WNQLv",
  "key25": "Lnrv1vjaiBqWtG7Vg5KUZZHsQcgGwZDuZvM35yPdcnWKQFS3DPeaVu1c3g1W4eyHg4ubWWgViexuUowqGcLfDv6",
  "key26": "5qJJvibg3ZhYujnHBAtyzKcAEAdFKdY2DcwTyjL9qhzzrxXnwHZ2U7zp8h3bhnK32eiwb8J5MZm7qgd1DfKLCyYw",
  "key27": "5CY2UHRmaGp2j2Cif167wkZx5Mbu21xPfhy7291njKYd2Dcsoq85vtAF5yL1RvDENBmZwUqphUVeG1uU8wsA7Nfx",
  "key28": "2dTs7qu6SxhTGHBgQBoNygtoBKyZhjTXwSxMZLEMLsufsjXgZ1zAhQV3qJoh4RNi5gUQCdJUirRvdq4AGGt6xGzg",
  "key29": "62DHSLLfEsPy8hQST6G2bR6d1qyN4uB4dkzGqN3U8WMwcUrK7cmBn44Pn7ZDuhqEEND1XzrfhGYQB581KLex1vBu",
  "key30": "3rKPkMee8k2s79vHKTjxFvw4mBj3W8Q3ju3vXmAA6MUp7HxWKfjoB99WScwZTwCXdx3XBr3KgooyArTwosW6eaUc",
  "key31": "2gjkMWV4DrEriu1uDX2zwDYTsvi442pHekm8g5c5KV6TyHqMxru1dnYbqZxQBGyAjUNVmAiPudJwpXVtjJyfHPZm",
  "key32": "438UMgHgsfeSS1CzWDUQZVj9Yt9ho58aTMH9mAYmrvxx1i7VZqBpdBFwsVRs9cNZBNTBQqm8EXeWeAELMk4k8Apa",
  "key33": "4oir1d4uFgToo1By7VuwBZ2yRzWhJ8spKrUC4a8ridbR7SmGSvKxBAUAupHunURRdfjkaA8wmVaXCyB5JoZJemWj",
  "key34": "3HevtbrmaLNBkimx6u24Ek9wtvEgSiydJ6UNdPLvBC4uNYTnLmqtLpkJxFZhNm8owFrP9rGYSKYSXk8R9UGpLVeL",
  "key35": "WxMiGcEnMpQ1SSi3uBGQ2463VZSYfV4EyvX26mVFvhkzmKGDBrmZDAUqP8GTmmdTmkELDreHKHTSacchNahpiLW",
  "key36": "3nSFHPwV6UAKzu38XoqHmvcsX313rmwtFA5H4BNMfai9nVhTvM8EbiFEtXEedHRWpKX6eNbkwB6YpsqVDUx5QumS",
  "key37": "4a723jcCCGSAds6amtoGp5wkDwrurzHQ7ofL2ukurBawr4rihhRDcXzufcKPqNbmsS9GBWJ8xtcpA7xfgDiE1hy3",
  "key38": "2sJtQQiafQt2tXRGe6WShaZcwysadtv1o6zh7to7LWDa4uxjUfoGUGushy9Wu5zSCi7Q2GijkuYEV2svfKx1jhdb",
  "key39": "3m1mj28w3aDH5XtyPEFSM21VFCM2xfVURoSDpX43JMXgjA2Lxbehn44Yxyy9qaCKGTw9iG2ttmoK4zmGchoD18qm",
  "key40": "4wt4sxSZ5TTQzaszcicp5jCaTYXaTf1abqQmseDWTeHmh6nvoKTbysjGLp2uwFHv2NF4NmhqWLQbJKDXp2sRoG5T",
  "key41": "XR1nRwMfT7uSX3A59VT64iCq1DjJgfpS9e9TN3aXxFdFgMKsdqTqpu6tASrWEUwszULGMkh5wHL6DiC2eAdD4T3",
  "key42": "3YaVS6MZhM26DVsgfLaLMNeu9QuAt86pgJjY4KuvBM8R6kWSSEqT9jyodckcbDY1wydHtT3AQA12s6a8tmHE1RB9",
  "key43": "LjXyjrKpk2oKYm33z6GEZ5gYfXq5eN8iWNg6HFhDRTABia9Z3HBEzCC2Sh6bVRnpj6cNd7Ej6HQwRhCgRcxt53n"
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
