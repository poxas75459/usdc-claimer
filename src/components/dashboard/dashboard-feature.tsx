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
    "5LueM5tTmHTWiSgNFWVy2BGzBvGGLbsa4S6nFEHUcnt3CPwtG2AMHKL5p4qfZHMC8iamPa3w9WeYNfBpuQvF3KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFRGD7Q4xaf9D9UmTzFzsWM5Mfov4rerCF88StqsEX9bYEJhR83zcAf31S3VrySvaeydHSsLSoFBru5PGdrE6s5",
  "key1": "4rm64M7e4Eh8X41FVViSPYkCUsSYRMZhJCFMnfvbNjUgfGr1JWYzaVVt8qW9VF9qdH1uteeHrLeVKP6Lzr5VRhJ3",
  "key2": "w22hpeVeyDyD9vSBsY63pa3dUN3TdgRFvkDsoB8hCKsBWeKdvsDZjrpdS2ydhpDzmbahM9gdis24GXLx7xnzVbs",
  "key3": "3BTsrZfpuoiaZ3wgnwA5Heoby5Xx9WiPpLRQ1RqraD4nBJqGnrSSr2fd5gbYQ3MKsREyo9C5fKMSn7mq2tJM7SiE",
  "key4": "4Fqtazt2qRKn9B5PZqoErnKr39rh8ZqBCGUNzeLYAfe2Gyj3kUn7nNZgUsMm3osKQMLtV7u8Ld1U3i8QRSfKSB6o",
  "key5": "4vmf5M6WWVsLqTTc43pKipfSUYcSmXDx2iu4G7LBiZtLeviFVdh8NaKwekBzsrn2RgtRZmat4d4hP4oAc7Siub7x",
  "key6": "2rU4f7fxkLVFcPs3nh2zNUERueC7UzMHNirDp4J9L54Wpdm3w4GWrQvzB4XmXWZauN4gsgMujfghKKLVpMLb5HRB",
  "key7": "66T9dN9e4zw9qPvGvvFab2F6VbbnxhiKh6Wpa6iTMC2q9WapAZYVBbcoMqVSaXWrAP31YSgUsF4bXZJ28wbfnSTH",
  "key8": "5KWTBWPV3yVA2huAzCCbed8DTZ35tA9QpGazpm3LaXTsa52wVxW1yWBM24AwmxAapQ3cgxgwX6hc3wZHYsbcMrA6",
  "key9": "4gs3gu5wfs4hFppwThYYfrMi3Z2r2vMmBGgGcmt9TWuTAJTJLc6CUom5dU1roqbB66jmb95Js65ZCCc9JbxPogMi",
  "key10": "36nrdRPjz7Ms2VQPqCMa2ZkwNrbxFzuR9aM6gFBFQhG3LEbnvRKro69MGsqt4si73EToHZoPHh33MS39PidtH9Mv",
  "key11": "4dFbH1MrnuXKVpAh2xemk46NHLAfh7rTqWGSUGyLgErDB5k7fskFLKXvhzWCCVody7ciUrKMMebmAmZi5DEoZehn",
  "key12": "2cNEoaM2AXjUyv4aeX4BgCcfw9pGnvKgeztvd2TR6P4TzPGrndJEdP6HHP2W1xzKx1ndpeMqLX5QQPH5VxS1fRJf",
  "key13": "66i6J64mroEd6WoDtULPmQaVDcmJCUydUcsXvQ3akgdUrcSWJhaz7Rh8U2oeUi814aqXdXKNgDjBDrJBW4XnZTLr",
  "key14": "hNBX4rGCH4eSBq6tU6KSU2AAFMtBadbe1FZ3WAMKbSnac9DEmtnX5yN1uYebSWdRXn5o8d8cFMxyZbuMqBtxsKK",
  "key15": "5nSM8vsyFL9AGfJaCS1zUuV4GVrahctDLACWgoXsFxpUdueBWbTXiBhHfJ5cmm7ZsCLDbddU9DL64buW7L84D13a",
  "key16": "4zX1gWSbJY1788cjxEn8oiBmmJRCdNZuA1XoYELLJ8nda9F3Fkgr6DEhfpEniQLahDBQo9BXJCaTNbNsKZTi7Yyt",
  "key17": "52NVREEgGZPqCKaKLu65Lm82mMQjbtjUDf7ccpSEFm8X4YJvQctNXuj8NJ735M3rjsAovuGYTiDztLbdZ67TEHX2",
  "key18": "52WwpoEZrETSruanPUoTYW2LPZohJYKurM77YC1QoFYCxkH1sisxkvP1w3MCsCPmX5Wr9pujUPGiRhoThqFEGxpj",
  "key19": "3bcdBu8PHqKD25rWqH4gEeL6JS5tBmeHYDXQNaeQGJXKDCmzZ2HYY3FCpBmHiKiZt4LmNiSBCgbMBXBrZDv61qwr",
  "key20": "2qLQWoRUCVB8ePZ4hK6ujFL5vfcLq3iyCtJu86SuHaZBDmS2xGuSyAUxfi4NXYNsV1JVx1xo3jr8dxFE96Nx8QbV",
  "key21": "4tWgv1XvwnE3zxJak4U9DrTLEiguK8Ri72SgsR2JSUe6PpojA5RctRZ3itwydDJkvS6pwtxJ7wM4bmYMvTesWv4x",
  "key22": "3wzMhqkjhFcf5fXWJmLNapdCk2iCK6pwXX4PnoMqhEfav3yZZ6xMyyBzUcMpkKieDjmu4n8wfKqmLQFT5bFDyT4y",
  "key23": "3MgkiBnqbg8WUg7rUhBcACk4ixQ7UM6WzLWUWnwfXuW6ZF5WjAJUEn4iDy7hxA3QG2BxJDYFPjEbdP9MpGFaAMdW",
  "key24": "2LwYbF2KWWrZM47sBBsq7UDjAA8CY5THNtRWtVgt4w1iMYxPCCtjaXMaZehrfQp21KJQTrG9zGwMiiPcayp6fEhw",
  "key25": "47dg3qqJsuRJcgrakKSkve2zUVJnU4uJARoJHjMvA2WARAAPE9xJkCUHux29gWw2jhJs1zsXosqKpXLJ3ceGwWfA",
  "key26": "2CG1cdcNULKLhUNXqTkGmzMCUrgmdBo23oz89BadyiaMPNffjxSUXtaXkh5NRnXeqfwVG5sfBZgGwBsaAvU8k1yH",
  "key27": "58bgX5TxyEJow2Hje5dVnLDMr54PiY8oxXQALw8RdxU4MFxN7Nh9e2B8VqAynvvUP1cqEVFLd8dZiGaX5JFjbQpw",
  "key28": "333fhZcTkucfCmttnEnevBVYtvwc2ypfT1469Z7XfBXmpiFxH59APRVmps8PAVbqLJWbv63Cunz6F6o7hVMC39LW",
  "key29": "29q7JsjkV7ezkGHW4ztvvSMP3Gg43V9o7SQPugNHREy4xLBpTZVaVZ6jcNmzWRvfkG15BdCME1SL6Um5EKyjwbT6",
  "key30": "3KsyGXR2zF2xrnzK8fK6uC5BJ95ht5gerz1r3Ep4kqk3zYcvjCtS2TXceAfkmDRUVFXpZamGzryxhvBhG6wDyfKq",
  "key31": "22XKmwRYF7bWT6voR46NkhHbBqqXa6jtgpF8cJkmtUhVR9vA6DX8ukK6JCt4NvPPi5DpARWMKXVUNoFPrhsRDY8t",
  "key32": "t13qoHGgBaJ5rSHTB8yJeeaHK8o4qNYXc5hgBrogAycn9ucHjsW2hKNZFpSVJweSVU8qbtbKXRGM5cu4jtL3Kzm",
  "key33": "3xJ9k8roXrGc2BWw4aMNWEonvXnwk3ctEp1PotMETKT6HS8BUcVnM5edQkhFe4ccAeZ5ReYf2pSow8L8qR9kqy33",
  "key34": "52xPbK8temob2mnXhwUVTo9p6kSPbGhtNS2ULp3exdUnQiWC7sKNScuyR4wW7HBiGEdNHZjM3Ra59bXGGv8SYrjU",
  "key35": "3R2Q7ydbwuZjfdCVuwaXzi61xMgNwYn4NkUSdMQRoRR2z1DLFVyrNjGGS8abyvMPyD7kPSXHK1m5UZ9LMd1PQKDi",
  "key36": "gaSTwj3SmMj2qAMapjz7YhusqhWawiChYZbUaaBqhMpaRrXbRnpuAr1bGw3su8PABL5hCuULGTaxADfh5RNHxoq",
  "key37": "3KU2mPTmvHKUpw6Y8jrnENtymuFBzTgJLRdpSsPkT3Hjye1wcyEEssscgwmfwgMVueXVfKG7SYf2iR2eAsCgwoDs",
  "key38": "FT8Z7GqYFWLf71hYzH25zX6bvSRVGNtLoYBvMVqsrWFRPr6N8kdtjqaKus83ChDuoHRtUqWD2SgZ38eNDqJwZqJ",
  "key39": "32zsT5aDoLkkSTynvmdWeFS7D6wSoVygKNjvacSEvh1SLhJcZdsmT8swAXxapceiMDM2uvMEWsjyxYkzXbVXSfRA",
  "key40": "2tEiTQp4CSL96icXPnFvojAoiTX2LQ4Efp6tc2Wefiyd39UVafUa5um8DCbqxCEzjbZqvG16QxipQorZuZYLV9Uz",
  "key41": "35KykqFwRcLZUuYu2QXqNB8SSiPLzVck78eNRik9ope8Lpv6TVvXABM3jmGrioCw1LWAyiwNRFwQmjW2R4nYGB2B",
  "key42": "5gr74qytph5mWqh4ifZpe7PjGKJ6RsXsxGQrg3o2h7r3mv8YJSjXDgWybBg6gsNVQUotowst9q4436RSEzt2paw",
  "key43": "39t7EGXRCVGwRDPh6ikJy69LxBjX7rcXo5UYbmuKbWHQhMK7vsptpcsYZ3JVBwHCnihdtADGqsFnu5prZmXEbfEz",
  "key44": "47BSbP8gSjPngyuKQ6QdhrSGc9tukfJMY9GoBQ67LmdBKEdNgzJzrqr95f7J3jp6U5eTAiHjRmcGUdCctU8kWxJK",
  "key45": "4eHbnKC2WPQd4Vguc5tYo5Y2XGcuFWzTuJhJpSB1EhoaUCUdebRB5Z4e7rXkFyZ3nKSQUSVrLxMzP7NaY5e5Ezw7",
  "key46": "2AiLisQTN3RMJLRZPuien9ahBD48HjuPTtGiwmHFzL2MCw4AgbJQGU7Q7UMZR3DiBo9n7a8o4pdyTtmLVjJF9YXP",
  "key47": "53dES8n5Hws8LsKAB2vSwBidKvfuLqKNYnWmRPykfzFgbSQr1Sk5DNmWZ47g9URWT2FuH7ZHsEmKPtV29Qd7qwdp"
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
