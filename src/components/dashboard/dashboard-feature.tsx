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
    "5q7qMGPiNTgjN1du5LyzXPs5VFrc5ZHUM23VFnoJ69FfXr8xt3Zh5DBUQVQkUDMMPUSaHgCt2geip14hDXYeaBXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BuWSXFTA7D4sP3UP9U6RDL4WRfwAdtYi59q4YNBuivGZAzgsbdxq8hyVfpW5VmaU2pbyhV6Hw8WdUDraJ6sUijK",
  "key1": "27QrL67sYhmwjxocUU9m1ysQdXx8RddTPZCGCLPqE66umYvPuebqdt8aftScBQuGGKAA89ZUVX76Xm3mRLiHjKxC",
  "key2": "5Wsk2SEtoJn2nQivKKwZDTGkaPHQPrbvJ4qspjvHWZHuWNnUtXcu25NVuBR1mmBf8EQ63YFcgbCHqzyzZXeHYzo8",
  "key3": "Rvi6qpK8YtiianJVmhfdL88S7EYaVYCMYQGFWwKAxbHyx2o7e4Fzox7isQrsD6nRacUwKvbKRE9jZ4F22JjU6Ed",
  "key4": "2Wjvq6FGyWPMPv3poXjsoKuxPp5RPaaegkM3EiYsovduXm3E14VGR1VajXQZ4f6ys5tSWYGmMsNEmTgpwiXQh8Z2",
  "key5": "2n6BoPWEdXhpkwesKEKHpkDhwaTi2y5CtSRB44578c67yoni9kNcbMAQVPTFVokuRUkWcPypygurkVBPwUEYY4CS",
  "key6": "622gyKaxKR4p8sBNXN87RncwiPrXyTFeeUT4xRZMbPRrdQd3w8fbnR26pWXo9mM33w15FDogLLa3PkEoHZu2vRtC",
  "key7": "4Xb6aLWzJkndW7XcVFcNNdfdUFmNhG8eQhWovfeBxfVzHjSWefuZkhsoMe1jLkbsG2zzGra1yHpBmwUUzJLkTh2z",
  "key8": "4sDezW2TLGT64Ldcskvm9y5tpsp57gXQdg3ys7JEuESg9DeoP3wETVwJk3G74fx4HxvJ24tyWVDGwAkpLn2VpUyJ",
  "key9": "3VAUdv3Xxe4WLQPqPwNSmiUpZF5fSThVR8WgMBCjjE3LFUELmKSVcU1Gy2Bt6LXAjEM6ddizXfB2aLPqXctyzX8c",
  "key10": "41MovUX21taP1j1y1TxGKhdKWQ4GdbN225naUzQ95yUNrgV1kyNGpMmzyVwjLywprqYCJoZCufJujMZAcervBWuG",
  "key11": "51SMrNqBvedePF9rUe4DJyUN2xy5s9BxeN3fdjujoY7hrcRK4BjgnDyx5oCPRFzH9eLswnZmKjHpUTeFWBi86QWe",
  "key12": "3RnGTWBK91JHGs1b3G4GCj9gbTkWnEZc9a93ZyMyvn77avdvQjpyArEkSZuW1gLf4AdVXATLjPPYGPF4pf1y4hKh",
  "key13": "3JkF55mtXq4tYchn78Yxezj5KVjeZWWm6zvg5DANNi65oh4MjS5XBuDxSn4cKxuiVzD9nwcSaESaDZLM6U1se7fH",
  "key14": "3kvKjwLBF8R534F6iKqhxsdQJr75LwnDN8QEYB5Mh5iqiTrjYD8FcPADitJnaSiPtFJ11P6QGzKZHhn6zd4UNtHi",
  "key15": "QuNgHe6q6wzEvsZ9TYH8K5QdAeKErCCB7S7inpy4P7zCQSZbUdSFGw1E7bjFV97nb2vqSxW7Tvc4LQTdgs6T2ui",
  "key16": "2jSBayX225d4SG959GRrPzQa2LZftzFKWkG48ajnVvZSeK5SC4JjTRHJFb9Xdsi9xpMV6cqGjoTeUng5pdf9qD4q",
  "key17": "3Lbd1Nurxi7JDhbXAqmAG88TrnUojSQ8g8Mx2GcFuDnvPT3Z9ph6uPuYUKr4mPxXryHE84tgHN5Qhv7AA5gB2fJx",
  "key18": "3rEBgLbm68qW3BexXboh1rymzvDWZPwMYjfAgPhFdeYSbiTn29ph7ud8pcYSyGLrLqASUNct8KoywPmEkbMFRR7U",
  "key19": "3N28sgQxkNVG9zcvRsN4GfzX4LUyKpoWTy1naYCA19kmhrtm6cpD9h3dvqGa3SYPSN6CuwdNyZ6FSa8uSx2M7Adv",
  "key20": "2qgWsJ6pQeFWRogvEkqgxRMdoPt6fZyBpHuQ1LpAfxpGdiaBegcm4fuTNjGNDY1sbBonpfa3b5ehTmvFfbjk69Xi",
  "key21": "zjiG1dLNnjKh1R4zYMrMVUvQotR23LZCC3CjEZx7JYqqAzLWrxqUnhLtvJJ58yuUpvjJa2BcmRipayz1TH8arEV",
  "key22": "2dJruDq3WMuVPUkNu1XKXgkwJmLoz2QiYjXTH4CdHDuGawCzAmqtJmmQHky4b1L8JZrzrWdJwSoPfRU6Fx2dHR37",
  "key23": "59muFiDBM2WxQA5ZeYgnuvFgeorx2DDbgwgp9Ekcsreex5Z9HDmYce7KG4hubm36VczPW9nUM8ycdxbxbuLrPRt8",
  "key24": "47q7sS3mQVYA6tyCrxzaVPkePJ9C7qLWkydA6dVV4c6biXvYXD2ofWzbzCxaAy61d9vjEEjiXnRYi6aJpQVuzmi2",
  "key25": "2gcv3SWG2HokALnmtyMQszQJQzYoQ8iHwe9BEFpLNNsT3ibMDr7Gf3BsV2cgshQP6jXj3ak36tFReLT8ZhmJ6F2B",
  "key26": "2NuGbKQHg2NiHV7aDhG6aE2zR93nzzRot7P28xoRk3pkXP2LAhcM6eds3L5HzRwLBiUNfCc7ubrJ3K7vEp4ksseB",
  "key27": "3vzx9PnySw7S49TtKktxpeSgZq9mS5aF9fJ7R5NrEBynxqXorjQJy2tuYN7d7gziBfrQeukYLGi5n558fukeCsyR",
  "key28": "54CYPKD1N3kNh8mb6f2kB6XkSQk5q4RaiBWYVictCPPjNF6TEwLRoVL5PVbrjLTsCEEqdkbo2cPaLWRYBaXgpyk5",
  "key29": "27pbeTQ3d3ehVB1HEHVuSHQP3UszMQy8LM5c548FP4jFnzZhpiwPJ3mKabwC6ajSBTfvJZXUWGZWypcRPGeTvLTf",
  "key30": "vPtcqN5iFDvFbAtY2RULmLd6vPY4mcfVr398Qfw2PNwcPx1tz9CoxCRyAH25H21a8WgrBtz7ewfQ8kStn1qUMRE",
  "key31": "56ZyhjoQUnpRBWJV54gYk1oBQGrsvdLKj1HXmKQhg3Ht3fqrcpcrTB7C3wW9cV24VLwgbocGsAPWRZfYzyEvzyos",
  "key32": "yArD8WWai5vgbwbCuQY2DuirmzQ3WvYLJRcGJ8Hrmj5N9oH87pYvi6APRBdowZmJ4EzqV3crHLgXfYX3rirQ8YU",
  "key33": "3TrpeNA2d1FqfydvLk22NJbsthWFmeDvLT6ctNyUxiYijUrfzR4sZmm4eyqRGEHKpBH5L5zN6fAbVo9wUWnnU8vJ",
  "key34": "4GALYSakgcNTHNw119wkjRn7MCHZmSz6FiyhJUfZQeBnY8nngSNPKfDnXYZJynt4AgVgDHZiNx7VK3S76X4rc6RG",
  "key35": "dSHAVp7DA2UMDsjB1X88xboueRsziL83QcE7F5ZUdNQUof5qx2ARdeZzZ6AvEHu9rJJpjqF7kLWBXuGx7GBjrg3",
  "key36": "3jzd8jTqLfzYYTZv1hbEXW7M9GiaGLwLcWAZwACKGP7SQG2vwpHH9ha96HGiAQfwm5teoBde7KphVy54wRjDNjsV",
  "key37": "t6bPfoBGBi34rPCw1tPszPM5W4t5vfTH2TXUBYkzpn3WNmhCHgXfRLEKriWdtQYJJCbdfoGWESgqRJ6b7exa4Qw",
  "key38": "4jSEiBacjzYUMATpuPogaeWJbAe6edtVzYSKfusBGQAWNfF9M3zaFumCUQzgj1gHBQ3Ug6ZWPEam85PeKwCPv96a",
  "key39": "2kSHBv8yueSKCguo1KZBhTGzcKThdHatLheatjUitCapAtfnxe8Gvd3Y8sfESFc8EPqvUGKPYz8iLysmdbzuTD1t",
  "key40": "3AFwZSmHtzNtxjz6NSzRYNi4cc9uzsAHHX7KQNYUuS2zGHBX3C4thqAJuCg6aR9GAdiS45sDZpx2GtX7hpCYE6QG",
  "key41": "3Wp1BghUNhm5ypDwHSMrHxtiLBpkK3JQu9AUmcAXTSSwNRgZhnZnWuRTDPc3sadFU1Biditpj7Z1x3mcxF8GFFRF",
  "key42": "3PQLuV2Nas5GxPpt9xVjLyfK7J6h4ozup5h89bMVX1csAx1gkq64u5eqQsJ28P2qk2Vney2VNgF9RuZwkwDKiHZk",
  "key43": "QZyTrS7MirpTSq6iLpo535FzzjCqwLoCCHVvz8rvLBJHPBD6ygEBDbPyTRnndHt73NjiV2aSaLc62Fxyrk8Vwtt",
  "key44": "2t4D9USTrstEuz8a31HH32v6gKWdq5AFKB6YKdJPjdnrtACk9hZqPQ6jPRnMNMmc2ND1Jyzp4184HxKLYMg6Ckst",
  "key45": "5KBN2zGqvKDGWmW13EyGPgePjj2Sd7EtnMs5DfncpWqzH4qXU5rhD49E4VGYbc2Yo3T5R1iw2V6yMu1jyesqdS9X"
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
