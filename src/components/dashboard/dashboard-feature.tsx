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
    "4E45z5HLUwfxMjkQYpXJWDfS1SePBuotTZJBu49e1RnxtEMCgK8pkDwStMr4aqvQRz2GrApaJmUbnkMdZsa76u8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KAQ4RpLn78CvBPfjk2iY1aNDZCYzmz4WFafvAnsbeGotRvCD9BaXGhQoBf91q6KwYFxUw3NYBijVvnaEb6Ep4o9",
  "key1": "3MLXpZ8efchZ8Kxuntp8gQVPkLfgWtsBXfoTWqL4mGvm6eHPqMTGnMA5j75qNDaRD7eXyJoSLfuvUwDnXp9ZEqH3",
  "key2": "5Hofneak1WmHBb7Ctcu4DbFW96vD12p9j4hsmEVZi5kYN912EAyG1a7M1iejFbu75s8gpocsVsNWgiyqYXsndGEe",
  "key3": "23GqJDBuJ9H2WMvmJ9wqgRLijFBkhLjG8KJnu6yfSXyvzjHQvxGFxMJzRVtweV2wB1wHh6ULuWYRznRuecfV33c1",
  "key4": "3m5NTdKzo1FNv3Lk4mcEujdt7GBr1E4Yotr2UFsiCyh9yBSLChqR5YJktqBe1jWMdrqAWKZZczKW4WY3UXw8vAxa",
  "key5": "3FwrfXP96YeRX4DYyh8crw3w82TS67bh3esu6futGzH32XD1FkQLKsuFpVWcL83ShXkUCLqtffKmynzAYAuCLk5P",
  "key6": "2HhkJCebcVhNKSZNPqvn4tn1inepsDBJuLXzckhTfhijvAdknc2n5w4ZYGjLBRdrmXmMTJvkNw7Q7eur7TwEBVbs",
  "key7": "3vreXjwSWh3vV1PtNr8Tv9RxjogdMMBWoWD8Jc8ioYcM8tGUZQEfqayW3AkMpt2FT1wkHkWFCpvEqYV7oRMD43x3",
  "key8": "2kUd5n7714fzWKbgsrKM7bX1YwzmVwuitNBLjaiBDGpioYPQ8pHGaBsN1JskGodTX3715zm8vBYEvDmCdySLtpam",
  "key9": "55S84kxXmwNdMnLQVLwugt39c21TMzuNyHVxNMxL41Xg48ZEGxLXEGHynBTr2mpihAmjLiDM4dMphgZgfuEDS6Dk",
  "key10": "iALFyXy7oFBZJWUu6TQ5F76NEZyFVma8b8vJqHRU6Ce8avYn6HBiT2G1MQqYA5x6LGYaLy5GDD3wM6f98Lv3x1K",
  "key11": "5iSDEEAYsLf68gzeC9ftZ3fZ5HUfa9MJUZraKGDbirRdEH5mYgs1uEm9pgrpjcu27CC1qcb6TWEbVt71Ebwk2KoM",
  "key12": "35kBXTLiknJYhUey24dCLDEiSgwkdMj7ZYGN9fpoKQ8FqR4DRxCWbCB6q5SfpJ6NqixC7LyaLYYYbbf24qFXRwFn",
  "key13": "5Ztm2o2ah8BnRfsAp2sLcB24g1M1SySM4KcbVxZBxWpex2rxbbiV3Y5gou7Z5p8sAVgPYmqVTJWqaPo5KoLDwcgW",
  "key14": "6utAVzoQnuvdkkYzNJYCkKeycs2fCMXuhdadjusJwaEpEjAnthvbNyTjLbum9ysjnyRd1J4mASa24r28ZSEpDko",
  "key15": "42ZD3WoaDScu7t49egmPYPQD8jR5pwf3T35Co2PeJWxKkj4yaMTLgYGJCCU6NZxVLUPE9DD3hZzZYgfGrqo6PiTM",
  "key16": "SGus3YNi1DpFtw7totLqd5LCAJTqFwQR73rb7mvaZfVBFjyzvMSHbhWepFYsqc3Ttzhgs7D7AnZ6XPgkRLR92Uu",
  "key17": "42sb9M6n1YuEHQgi1VCmaEEakxMHwe4HoLE5Aa6fPQ1D9RbbNL9nhzMREY83SBkkEkPYNPyUEizqQFvjhHsqjxgr",
  "key18": "2f9NttXHxn6PnytQXkHJKS8okXrRbsoh9XzLqjzU3Nm2usbmFK7iKcJbf7aVhiazW4n8NgHmiaHWv9WowWq7sPZm",
  "key19": "57De8vFbxFgxygi5UTBqmwFqbvrgbf5uczoeWj2Ymz4REruSvghksaUmuv9gXKu2y9Sg626hRXmokFF2v8JZmRgB",
  "key20": "4s6fhcAso9BQUjDonfz9v4VzBeFtJUHWoZJqu4mhortFbqNZxAnouura7F2UV4Mr8BsvgwPtpeqRd18WKDn2w3iw",
  "key21": "2whLXPMUyHwZA9hKGMsydzcz2iyRkMmRazpXJHmmVimqh7Uk8njXLtqLRC9wEx4VD9pvUSpvhYbVadLRUuwC5Ndr",
  "key22": "3o5QWi5iFqEcikCZab4i41f7iWBFNz8r4W7XVGB8g6gGeFsdoZueahR6XVaPL1KpPpBrCxafPcHsceC3Z8tX8XwR",
  "key23": "2JZXjNadBcsyL6iiemziEqP8uGQLX3cPoGAiEX4Z9NMbuoWgDamoVN6BEbXKGRpjQ8nySrPQdTZ63TpEm4jXAaQg",
  "key24": "3qD5VS8ayfADdckxocBn8g1nm7Trzje6wz3qqaB39YGxbJ79f5q11cu9PRi1Kon3A72DXfdxRrFBmRxoGBxHyMJ7",
  "key25": "2PrkmqgyoEJR5eU23zibDoWz8i8CoGw2DW6EK9gpBPAevb1hcAgjhPqsMEURmpfRcTzVu6wTGUZPS5EtCeWvaat6",
  "key26": "4WxibigPphmZKM4Y6aGw7EpfM7nE95s42d2BtbdWeLxzrddhuACzDPB4DpLbsr4Voe9SXQodKLNNGg9vrBL6SUv8",
  "key27": "5U3G2TGSCJ81C42FhoEGLANz2gzJU1rydXouKoJSE9K5mcZaFKLms9Gbx6fHiCiERkDxhU7bi7RX4JVFZyDSLGQs",
  "key28": "2HWePapyXhHeCsopaPTN7oM3BvHU2JQsLkjbYdkgdhd6FS7PxmKHP3FRootmTx6JrccqF6je3gUXaWAo4912Gt6N",
  "key29": "5tdkT4geoDgqgXJSmutuB7pQHH11A7kKskvaBmGqkPq1SE4FdPyXcagHdto1TtsBeY8K7BEJUTqxntb1GbNt8Yzd",
  "key30": "bnpBipCWTvaMBFnyMpjfmEnp28fSPHsWb2g5Abf95JY5DRpPmgiX3mqLXhwarjvVJMBYbogHKkXHaX817vKKVNr",
  "key31": "2ExrmPvPWYJSdTqMybKUriz4t3jFiup6m6kX2kgxRRQjgtVdYc1gv1CSnFePMHWBwpWqyGDVHQZxEAL8L3FGxmCR",
  "key32": "5aCc7hwtfvaF75syZT6BXJdhCxGtPRjePGDSYic1rcm4xRPWTCgSnvCdJu3sC19cxYSsSxMcgHEQWU3pUrnT4AWX",
  "key33": "3KDFXJjQapb3Luyy42iWZxE7ZxF8PDw3HfrEGXrjU4XtxPwCXSxGEpgZMsVDjc5B7zwzUXmTexNsPvthqUCCQed5",
  "key34": "2MX56NmHnK3LWBhaZCfCGWYqzEtdavTYNK6upG4JjQUc5VMBotYrZHHme7tgD2w5jypbRZ7BPReEy8D5acZsDfsi",
  "key35": "5p5XyY8aRaHH5JT9PTKWuCCEDoRBC1UwLRUggMnBfn5PD8m569otuR2xDpetnGhZrL9Gcqw41uRcPABQDy2SCTb2",
  "key36": "3reAth6W7QzUFpREgesmtumYLfNEDRaqBpS1YMLQELFV2KqWGBn8NEHCcJ29PGp3BErZUddMnyiifjiEZ4wAd64v",
  "key37": "2PtYYfQHhv56ciFwXR3ihFdQYfpajQGQwHf2unWfDaNT1NTTFrACn7oCfZcTkocTJbjyVkPXeAXG7zDGBsza4E8x",
  "key38": "SA51a4rDT9nN1izqmPeEwxMvP9ZXMvR4ZW3F5CGjPK2Ge47eMUs8uZwBVtQaLY4XKJ8YAcGRh818He9VXJJwRCP",
  "key39": "43TYo1RpxGu45H1T3D1XZzUUm294CbFNHQpnHEsV6vFHGEWKGKWsbRyRLB4HZLKBqiCjkDv4jAAvJizo4qaBxbdi",
  "key40": "3oep1cytxc1JgneuHdk5H6t5DKg6nuBFyPPgL42X95AM3bqW4N5ArMyXEEPW9qA2ctQUehLit3qbVwC94XUp2PcT",
  "key41": "2r6oEM2gncTU5bvv99dADKYQbRY1UvAgDdjAP3JCv2xPf6c8hWbQ54rmcqhrBwMS1SJhnFzpbvUZuG5g1D7Wg75P",
  "key42": "4cTGNS3fUbLmZT2SARHgEunKUrNgKTCRnz1rXWPSgXHfWRJ3Zzq2u9z5AGb4yJCLmKWY6JXG8Y511eBq4F9bBesa",
  "key43": "2LvtSVGyhkLuV3W8rQ4X94cNFGvfEc3Ra6wvKYKHx95X9qRoGJFMNjJ4swx8g2fassKyySu7zLxjtgDXVFVDfVFs",
  "key44": "YYFUbdNgKVzcsmuYbUZvqLfZjYb5ZoJDSyWkG1FdVF75ESuw11JA4u7wufq9owJwKTFRGUSNdpeEG2CK34qEf46"
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
