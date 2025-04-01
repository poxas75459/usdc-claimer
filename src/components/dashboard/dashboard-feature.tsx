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
    "65eKCFDaAwshKADbFHCy3HcGRPgVMnophQEuBS23qeTkxTRex756stXbza2myWHaURFbbmCHY1wBocsr3vt5e1WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4VacQrzELeS9EHgrixiD3QpmBYJUvPLg8LUXKp8TcB4jdhTV4deTi37yoogT2reXEes2RiJGXy7nEDdmER2yZ7",
  "key1": "46BfbELv721mkBif7YZmEGeC3673ERjXreCrEBe8FWrWX5bTC9LSWCvvxHPvXG9gLDbJewvfcJEBurT49XhHKN59",
  "key2": "5szu6HhEz2fdCy8BgjYf8FDRd74MjdHZQV7KGGWQS7py8GmdUVyaDa1STAv1gBrKXN8hsi2XsAF5xUPVzix712NT",
  "key3": "Xn7qN2P1oJpDxjXaBwftaJ3eauhKUm67APDfYvfmhY4F38thH3rh9gPX6psVyeYXFLfuf9mNdrdQ1ZEH3uMAk9S",
  "key4": "3eFUuUKyHVnMDoJY77fw5GRgUdmsGVtkTtCnvT4frh9EUxjeeRWtLoq8sUzyhWk1nqHpJKy3RdvyxpLbAAXzfNjb",
  "key5": "DX8tH2HmCcpwEPqhLmsjPvDiq54W6BD81QaFPpF3up5bbWL2cwiQzc8eHhXFEiMsswz58vrus4RaFd8SmtiuofL",
  "key6": "2QMmdyGQom3Nm6ujdVVWjff23fuNYxxDkkrL1Tq3B1uy7cE5zipRdhjQKAwV7RdZmWkmcRLyLE4hpCGbRMFtLx8w",
  "key7": "4WEtH2UEUX7kiDp4SQGFSBS2WmLtn7kjzWmtFTBLHqiHfNKUcMH5Y8axCenrgvnHRsUV5r2qF42Q4vVMayJsvcaR",
  "key8": "2tdQ4BfiV8snfvfAmKSGRuJwVdybvCrMWZWPvJpvPmqcB49WJcHQHtACM13r5UzXYPqgWkKUqJpcZHcgc5AJneHi",
  "key9": "4GgAQ5j1tiNWd8yfDXsjKjrZnvgUxDc8x9KxohFpF6v33EtbQgvYHNgKWyvLMAwpTvvgK4cVJSRweSkgoy3AaAj6",
  "key10": "5eJJq1yiVwbwEimka6aQPGDsSshmcBULEABFbB88AnkNoKuC3uiSckfUF2B2rMUUqZMBjGVD6FE78PYa5CdpCiBY",
  "key11": "3s3JmCNPoWSTRnzgE2UM6T1RzHZhpcB8tiWtbyPaRGBZasHitpcX5FuKJxBqcWQxFPFn5qZpSYfsuEvYHxQHKsWt",
  "key12": "4iCFZwqMkXfs2zpERyR7JiLzu42cWWd9Qxf48ABphJbgWbjNR6MoonA2Gyz16RGvRMoYWscirVTBpSAVn4T6M9rW",
  "key13": "5m5Z8gMFeynXUw9oj55gdv35HzkBrSDuLWiGBe7MrRbRDuEUtXPwqtqynKYn27DfvwsSjY5fzX9unhv1wjcCU6x",
  "key14": "2LTXLdgg8KtXML2PvQPcH6gVVnitU81Wf4KTYtc1CWp2kD48XfbWJeSDDHbdwPwaTPgU8CLKSz1DQJ89CJ24yyQH",
  "key15": "4AkWc8NARrNXmp3nQfhFFGNycCodNCaEYYVPfMUqsrp1qLG3v2wshJfPenv65su7XcS1GB7HZ11WUEhme4r989Wf",
  "key16": "5Nq5KfnoeySqAoYHw74ViKDonvTHmAbXeUsDRDu63RQUuMq2qJddQtaaaNK5ogdNnpWoKHwkgQ1asnyN84KDWp8f",
  "key17": "5W334mFWWg5kMyMLDwhUbsf7aC1BKmLvwn7hAdNjYraVaPJmSUsSgrr76N4o6WxQdwC8KEzz7XxJQykgz6JS3DZG",
  "key18": "4NEBv3ELuf3oNNt1Pqtpcu8iM7yYkDTWWum4xyDs9y4sJGV15wVQ21XGXGzn9Sc5CAvhxnMDcM7EkfHS5CTa3a8S",
  "key19": "4fY33vFDxv2FV61ER41XVFRZ2zzLtPgPG1pBN9nqQAVr6VebC59tMgETh8nsnNdMxXCGCz4Bx6KrumwuvPzXouZf",
  "key20": "2hpiZnccwR2DE1y9hJXjsYLCFidKx2o3D98UMQYRUMTgQXgvdBvaSGqdWiSFUa3c8go3mUG7JiPdeFjVUQCm3yS5",
  "key21": "3djmPyue4zP8JdRfKdYm9ATXdi2513dKZkTomyVzqPsqnmH14oPPk9T9Pi3u6E6x4WBWzmZbQmgRZyLnKCap27QE",
  "key22": "5CykE93MyEW7j55j9hj6vNBdZRjKLwSQpk9zjEeJBDZm3SANEfNGKtuXxQqdVSpsGLcFasVXkpEsxiUv9GLyMW6g",
  "key23": "jiabm6JAzHtpKZw3aSMY4QzsZ4BsbjscfENJWrha5GJhWTQHAybmBvyEX7dGmE4o9zawreSunGwoppc7WxE9KRK",
  "key24": "4iKt2eD9nXFbP8Qv89n11pbkcNyGMfoD8DjSTWFs4o2ymmboQ9X86HEFHzJYCWbG1XrSVhD5rQCvBEi475DmY1G9",
  "key25": "3P7MKs5PRvpZ7Pw4tZqJpxoSdmX21TCooVMvQmQvWXaddqr3WrguEUBQ1Kmgh2TeUpB6q8MdcMheHT9kLan6EBRE",
  "key26": "46CCqMniKLQxaVDxMTCeXnxXZqk62tSBb3ukvBZ682p9ehpY35SVxcmRM3QUdU3dLzmaM3vRgmZ8dpzyT7tNBKZ3",
  "key27": "3TqUc2wt7b6JXsncX6KoJeZ4Npm4GajQNYSLXWB7TRobHsNfG6vSrwguBj6Ub18Bv4tnvsNtzoWy4mUczwyFQBCr",
  "key28": "9aNZz9LQBUbbAL8vPUP5jGwggz8cMQY5Z2vzZ233BxLGyrCiekFoKenhAKPerbYJknoB3aqAZNHnC2t9DeJiw9k",
  "key29": "58vT5Vnxtk7ab88Z3HhJPhyeEUdw319UWk8ne31dRqVW3yB7F93GeUT4V1a3PR2ppMpfq4Wk5mPFca3zqd5eydYR",
  "key30": "28jvNjTyMxVb96xHvvQVxkEb8U2SM51eZNkfxwrNqRsi1XkNxCTrAdXFKCCn2J7V7BtvqbjQjjdwAnaxLfWWCpyy",
  "key31": "3ATk3Tvq2wF3X431N9jgmN2i6gBGo4U4up9KomUMAsaYAAEfWRwnqbftRQUBrWd4H7AMTULGMNfieXTZZwdHh1S",
  "key32": "DvDAZxGBeJapJ5tb2bnWGBKQeHXBdckRLkGms9eDX4YzQunwbYMiuw98UkrCp4aiYKdGLUKHBn6Jro7AR4bWnoF",
  "key33": "47yw8DzErV9c3RGUiRcA6auB2hgBGL8kUj31WqntpAzMKWJH7SLUCfdB3Kyw9TkBvFMsP7ZEqZnZHVZjDvATMvVK",
  "key34": "2uQHvgwLW4P1ve12mLG1GPnSYCRQ9LhD86LCv7n6MCFLj43PceQ9CmtweinM37yFXFEk91eh2kTHZtF1GA7Dc2Wp",
  "key35": "4oF11B8qoqYq5Piy51BmnZsCKNbYfCJrc2XJT51uzfmEXndsVzoHG8aw7xBaHgRbg7KdQPQLLGSScUNTxmzxsRAd",
  "key36": "58FMJfyJLewyrdLM3uSyYHJqGHRRihrCpamF8uf9aPZkAn1yDiKsDgqmFinVoMC7Nkm8rsbXzLnf3bJ4B2x5DjzG",
  "key37": "5iLWY9VBmbYNGfdgtyGxvLB7rNGK2JF51HgtEyRgEYDEtRMHxUqUzqdedMySDam6CsUKcyTKGAnPa7pX3RXoGd2u"
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
