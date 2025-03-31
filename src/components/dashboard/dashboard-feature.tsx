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
    "4d2cybyMoC6Nmg3R9foMXycE8bHbiityS9vbdv8jn7oStGFQDqC4EaeU1kzc71vx9AvfTRBRzA49EpNSajQps6KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWnnUCBshgZzPb5kmQ1wFa3yC9CsHuFVhhAo4ZLb2AGMQtGvm8Tva1V7jRdtTeV4xRyuvZMQD1PHDCScX2JpFRQ",
  "key1": "3sny2XfrXsWHMm2Q4NcSpxnhtKCrmvAWwGD7VL6Pt5tKu8MbWHofJLPr6HWxjZs41CZrpmKD6sM6s9TwKi9AxqbU",
  "key2": "5bJoHAoDcAGfKr8YMspramSgXByWhqxcKxTy9QehkFUM6KWxzeKqL8JzYJ32cQLGFb1csRgmJjdgauQRyBndhvxt",
  "key3": "4UP5yYWKDdPvhsNVaNmQC8TeBAZqhGfHZ8k6XfjgttWCzvKZwwM1cHAjHjHTBx4vbehyGWecoR49mpKz53SFiZCZ",
  "key4": "5WmEXn5CPeGbkB5ihLMi6pPEEeKDgfRFWA9EF1kSTatFPeK9MT8KiZQLAKbhcKJuYKPLqWuDMYMeXQFVevLfPXsY",
  "key5": "3n61tvfvn4w8AntFSJpSFKCwPE3b6jDU7dYT2JqpY5Q82qP9No6DF6469YqoafxB198VPz7SGQqTnf8baCEMtXft",
  "key6": "2TWnxpwgDBQ2hkB5NB5PDwb71WHrsN6WFs1psRScnStQYrabRZvDeC7wijU6sK1482exvvK55BVuxxBZwKxVjQfX",
  "key7": "2ptw75x7zaPq7W9zJyoy58PeRrB95cuyRwMAkMGfuV1HpmcG8sCJSqcPkjqaoJJYPWg6xtdjtZqF5FsDe7WWgJ4N",
  "key8": "FXYRUF6i6VmuAEfC9MJifmQp5qBBynG29ijqSRM5SQPbUtif7SqzS1UG24Nk67xxDiUj1TBM2BpBgvHnKQfc1ri",
  "key9": "4Z5bJm3Ze6T6hQNqJ7mHDKaVecwwubYeapQXYn3n54i8rCReFbUT3JPpskCvcAfocmZciz5MPWBm3N6njbtNQ7Bb",
  "key10": "4T3woi6ESbDXEpnAwJuLoGyhVJDqNHdFXmmHpeEZ5FikJZE9yfE7CqdPdcRqXiRXgZs1SaybuwmBSt2UZMTihF2v",
  "key11": "55ZyR2KZF3fYxQyC4feUQMbp9aSXPEkEbmPHZhbZzimHgnE1p61vP3XTkQPYGf6bc5CVE1hoHPcysAX2cTAi31na",
  "key12": "hC314geUfX4eSDNMxabeXwRZqrUuPZbwAAiLdfBnH1PTUvf7VZQasYRk1TdqVsrkStypL6BmKA7gxp6XngM5xeW",
  "key13": "38fwEk6CcVA3gewTyXCkWewiu35wXTXEQkWkTsmmYFpGUzpLzg6HevxWUgHS6A54qFShmb2bC1xQvyjeUv8DAJky",
  "key14": "5PoLvoq17DY6yJPD7i5Z1genrWHSmyKnDRyvzmyhBevrttYykTXxM64gSGpb27eqoB2FHjPEHVmnShUUHMmWXTVp",
  "key15": "RF3KVULyatWkv1x8na8pYmbehaw85paky16rpMfyANpweScFrRBF1GZg19rhGLCgrDNm2v4Np8UvN34Aei8jZGt",
  "key16": "5wMxQaYRAnEqSmSE7BTV1SKeqYL3xLTpGjRVUAtSbX3d17W74DK7MGXKxyFYCWw8uDgjxDZ7buGNpVr5pZZ2EKb5",
  "key17": "5SBzAQnnmLgFDavB6rvXwwtH3MzCBkLTEfVMALtDpbWY4aYabprDZU8ccCsNZYaN3H3BdqNMQKEUu5SryNBAuy8z",
  "key18": "4kQyiuN3sEtSHEJmzfTCQ3KSWQjruUWcnch8WxfQtkfVfdMAdQQcTFR3a4tkCtddaoPVhLRGPQfHqsR3uyu48NSR",
  "key19": "2DoCgivtVk1a8Fx4Mhq55JC7RNJdpoVp8DKnoUWZHKp8gLajeeDzn8eZvxqHoeq8NDxfyVhGExKivV5Yoo8tXBFj",
  "key20": "MhKVHtqBoYQiL56kVMh3xhwkGTq5UJThPmGyTa2pMbLyYmmZfhXmMUeT3nbn1G7AEzozTWDhK8d9eq9i9U7AZM7",
  "key21": "4qwbQz3xHVP1HhyHY46MBAZT7bcyQJUQU2t4DjqaPFPmWs84YiCL8mErQwEhxC6V7HzPP7Dq62a1b5EaUhyeu1rd",
  "key22": "VFYFxo66rihXvQfGdv72Le5qRf5iHSSwx5Ad6WsRp9TNSq6RDDxc2Tw9RoJNy8z2FJu9r8YHgRErqCqLRuYdhoe",
  "key23": "zFa2xahckwM3at1sgEnEfpy7bEizjhSoKLTE22WCw6GE2UvWLN1Tg9SX3ZCbTSoUUV6VWcL4iSi7KfWXBwAsBtY",
  "key24": "2ZDwBhw1CBAYeGUeCm5USL95Ev6TgAwBysb1fqCeY2sjjuLkpDmCXXkQ6B9SXt2XUym2rbWb3w8z5EwqQH8Ps1JS",
  "key25": "3BhNdQ4X7Po4rVP5bD5ny3JUH89VyX3mpqsP3ZRZxM9hQDKJ5r4u26LPrewbciBoypkKw2gu7vEXYnb1uQhXUjS1",
  "key26": "dVZm11CPr2c8r9oVxq5ohepaJdUSE3jPLwUGinM4SjSgbJVLEPCdZurdNDL3QpbZya9s9U3tQaGVyzcYfhKKFDm",
  "key27": "5Bi9aZUyFHG3Xs7BRC6CJJtFP2stSbLEGVdAXFYBfuyA4VX8i3ScRnjz3LFmHPf5nSquWRdSoZLHbnAbhbsAxvpT",
  "key28": "3SrB1fYpKinYZBeu6jbLovstxAaXs5LG9z151JUBCUSkTDDqJyNbLXUZtaBWEXoHydqjhYgCWQojjnUr6JWNuYrX",
  "key29": "2byxM1aFebZDJQerXph1CZTYqqheXWTzpoPcpE8nsTDUUg3eaMfwxZAgdZn6hKVHKuY4xF4jKoh2mY7RcdhYw49B",
  "key30": "3gg9GJ8cJkTG5qxMzyTRouaavp2FFEhgA736HrL9wywh9gpneqcboP2owSaDxd4Vu9RvbmfEMroZ7QPWKw31TALx",
  "key31": "4rXYZFJTzGvd3YSytbRWX8P9m4izFpA4MMXjTEaY3GEEnTgV14zewzcDTFwDijDw1k7RHV95ozPyASaUHP9v72AV",
  "key32": "2ECSmdmhYj8bmwChLBfqR8pkEp7W5vsYMYvtL2tc2zMzmsZXF7mpQBm4T51EbPB9KL17u3bWy4BphVZbmXBNK2be",
  "key33": "3bvw9KXWjp9BgdHT9TtnHxqjjAKJi65C9eno1aVNghhU6NTJLiSmvWQndW4SeJxWRzEnBhfZ28PokkquiraCBjsU",
  "key34": "yoxtNDgAwHR7kvbSFr5CF2MMUqR2izGVQnei9dBEh6R5E2iqawAFvsP57sJTVg2kNNFPxkMmvp1N2dW6Y92tJyD",
  "key35": "2ZjYMqFDcLYEKX3kbebFVoG7hvXNhSMwdqxU64rV6vumSVgC9hocX6gnGzdjy6GQ7HZQMESFkyKNBMii8i8d5z2X",
  "key36": "3PUq3NMCqLHExZmWRCqoy8CegV4zkrXFzent7TgqvYamSN5V8VfGHg7wjwJrttB9jQNwZvqMhXnNr5HNfamwnu7Y",
  "key37": "4ZJDBvbc1k9p5FE29642zziq7HijawTLSBKVjjq87Se2uXxmFWjBKxCH4Jcojnw8xjzUHDHhXPbPRixXd8nnLCz5",
  "key38": "46Yascic34yzMa7epiiJvXeBKnLgEL71J2PyH88WMTnCn6o4CQHKgrWBTfZA4HK1rYjHdoFvggyqY38MevQcEn6Y",
  "key39": "3PgbEpSX8Cwd8m9wdcVTEjt4cyxpM4yLjrDaU2Yp3d5tCuFRdyerJPpLufeVArn2qdRY5MVuVrD7DJyQUnixvAvH",
  "key40": "L6kkRyb2dbfZZW5xaxg1jtj3cc6CLEX1x8h6r1TNpQMUKSDhmKJanAVrJWn7fBGfvjbHn3qYbm6m5Zse233Frd9",
  "key41": "5VUusMCLtCiCV2tesUUjEPNoijdPLcEbjTXPMBqSV6dDT2QVgkJU9hjYyKYHfzp8DhCvd62VVneBGYfgGFvGT7KR",
  "key42": "39C2WmtEetNrGZvGnTWfo2cEeCsx4FxisC7fP5cAfL7GweR8d9rLVUiUFT3oXAvcN5jtWfzGcHJJsGmBfgsSPAb2",
  "key43": "5Kp4KkKiMCwMicxVDNivpnKcCYKMJVwSgJD4jqYxhntpyJR7DMPLzYamT4o6bJopVA3jSo3tWvvb9dhpjCgMD77b",
  "key44": "62khERm4tfkabHmAw6uo9vX7RABwySHdgPqcCgpL8UJYp4yLXJCVDPvCLiDNvjUjn1jTKgtPZttvEKnVbhBkLkPH",
  "key45": "3PKuEVZ8hN8wA9tDuafXpQzVfQHba9x2yc17vi4UxvYT6CmcDjdDHpvZfPNDYMjiAp58aWJtiGmoKWrP5Bv4VXy3",
  "key46": "63GAUap2sZp9Fwum8mLetXoz8TgYWSr32i23Pab2KWbQHNYNj6hruebfeLX2t3gXcWd42Hz8zto3MHbhYgSpKLM7",
  "key47": "5TBM3vYw6oZaAAn5WgPAmgcj9RKP6ex5X6WdSX8gGxrG9Pw2EyRuk2PgyEowZpytznLC9uxPEbpG5DKrMozKcTez"
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
