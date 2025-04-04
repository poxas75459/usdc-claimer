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
    "s7NHmGAwq7FegXBVYQgsKRbzY4nwJQcdiJeWaervNf73fv3Tu34SXU6teW2LbpvTQT51tsWMX79K2jgFEnkNbtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDQbsFF5Ug6zstW7HKsrtQjDaa1m3D9KP1bgEqB5zTc3mc8cfF8a3yuaWnsBEJP5Cfhjd9s3KEseuEThR675uuJ",
  "key1": "EMb8ttgYPAgBEt5mphCskM8tyTTuv5NRyqQV6bAhBQ2mTYCsH1W47YfYV5dUQsreaxCVRZXqqa8K49o4C1rMXRj",
  "key2": "5RkfEaR1KBZTazC2Q7YDx2JDMd2dTGXvSs8eJNpQprj7yMmLokeB6bvcurzbMXHaKij5uYrRpGHk2JYew77Te9bp",
  "key3": "smh6DvRYyvfmqJFXDad6uEA38K2oMiYMyC5XCizvJw1s9e6HV7x3RnCnCw3Uf46U1N53YR53HJfpzqkKPsQ6Xbr",
  "key4": "2mMvF8RBNfrSbeA3Yr8SEL9AQ2PrbTdekX5RGmL4jtMnHJZPeJnoN1m5K2b9PBive9TiNdZJmCcH1BH319tQZvaV",
  "key5": "jwyPCtvE8FmJhL8BDNStZjkiiNZdyWVw9EoBUv5yXwZaVVpW8dKNA8BytpY2mXxyqdCpjDH1DdMz1UgLeBKyJ7c",
  "key6": "3DSE9FQdukuL7bAJue4b3MeEagT42pTBFyuCTuPXB4Vixg9UCmgGywWh9wFAu5QmLcpjxWF3o6hCjKozNy6BdFR5",
  "key7": "2Xg3X3aLbLMao29xATErgNJiZR7czxxyrD2EatBKA8WiLoQb5CgkeneaG3SYtaVW2ndYxrM4UFyi5KzxAqprGQ5H",
  "key8": "24FvxojCaBqvnq3VwojwnPEpbvYDqVYxxjsF2NUtYAttPpASMF56BFdyki5pHFajZMXLJGBAPf4nM2H4xQJDgkDP",
  "key9": "3MTyG8zqJKYEZBtGiMWZAcR34935J2MfwwaJt7kBLYmE11S64uHVGMhM2nZfYA41EyDgDJ12ny8dHKZxdwRBcs2d",
  "key10": "2DfYk5iiwTQigw2FwUCiQup1kEJyZQN2dfrGi2kvULCn4z2M2USHNtE6t7KqUhWZnLbJnmWa2BsoesJh1eq4ZWxG",
  "key11": "5dUKuj7nfDgkJGcDqmqYAhSMguR2fD33cyV7kpFX6Z9XAcS2Np1fAbX3AAiezNNB5M5FHLMkyK7Pvux1ySqr7DBw",
  "key12": "2s4Q7fhpXTVzZj11n6g3i5YSCmQ6byVErQPv7VwqyXzFpFtVcy8io1CdT9vzHEm1H8PVtJQ5KNR6awSLuNnyQEAJ",
  "key13": "2JpyRpKwRezTYJdwb8gtRyMHPdY7rRmn8JHEiXk4MkRDeHcy5ZvCt5paMxbC1UhxLH26seJESxbfDAMdW1a1f7YU",
  "key14": "4GPTjCCDygc5cvQn8mDgzUqUkYqZy4GkQpgy185j9JEJCwBPPRCbXTC8yaEa5xP5b6wEjsCjvA2bhSgsn89eM5vK",
  "key15": "3757aPC9ceoTLrBK4V278vvS7R6Zczdw48vNeXRdaWFzJsbvaLrAz92hsfzF3DZEjD72yyovNSeGd6M1n8nHEnyp",
  "key16": "5F8wHB3xMC4jFQJ7sjLgC5ohK7osYC33pEXtu1TPJkr38i7oqPdfKCtQhHzbJBh9kDAermSnUDpnXnqsBxu36F91",
  "key17": "2yPSVFvhsB4YCAwiYRFiRtQ1bS4q1t2LMxRKgJHMsnvbwkcrhQgA5gY4mspjEpCSBLwCmC7sghefe3dZNC1j8vyi",
  "key18": "5xJcdLZbwojbiycStbeR6y4U8D6ApP7CyJGdF7MU2DhHh2nfxRfS8q8hnUKxau3jbmPrr9YXywXwdYi3h1DjeeCq",
  "key19": "5cvNGnXrGmnHv9EA2zrowb88aZ17ffhpVrA1PFks8eVEuBgr5jpPXjBK5ci2HS9zNUNT7RhTzXjEpL73FDkLqr9b",
  "key20": "5Y57UbCyd63WgYoWPjyeNBCsjzgEhNvYiYjZJwo11D9H1iYevVQFuoJXdqgKhyAYBXd8MQs4S2Lgvq9JkUA4UZq6",
  "key21": "3XJn15GJswtTen8kySKBZuYJyQdwHLW52a2XWwJ472sgcMWhh9nKnSi6zjy9H6bzJJypf2tHpYcC5SJe6LehTwEa",
  "key22": "4376yCmdtSem595uZ3AAi9spmMc3saFV2jNQtJYcS6E21moFJYjF7emXQXmJNMk82hnXRDAoUXdmswv1t5RL43vU",
  "key23": "5tqK4yagjLwWAXzY7gRz2HdCfEVDhmD9zHG8d4LETCC2X5aMqWU2fveSPW3BHpNVj3vpCmQaHQfrk3jnrqMeBFeh",
  "key24": "U74h3zWcKg7p1M5mWAjpPfmjG5K62JART6RRHxJDEbxUjfTSkt933Sp4TiQmXYAnUnocGLcHfTfmXhPwvJSdKCQ",
  "key25": "z2cw9kwhP2n2ZDqUzyCFmyHJZdPkfnZeVP5omkywVXjicprTz1XRoey25vsUxg3bmSYnDPwDJWz3QDLCa5v49rC",
  "key26": "4Sbvm8dNLuCgs8epvNYzgQxL1g6PjQp6SsACnRWGi51iXSprnqxyzRBGpjviXmf43LeS7nA5frbwQZxNKD1j3ja2",
  "key27": "45XUiRahY9QQCYX64e9MurATJcZ6v7G2bN3ucBGr2HeYXXSnyys7ygZYFL6MCR6YZJyH2Vm2KopHtp8zXmyfSzX2",
  "key28": "3GmVvUoMLPa2ogLwZGGUP962K1GkbJYtX18DX8k26dKjL3Xerax55pP8P8LKR9L5EvY9f685gikv7Jvz1eS4juX",
  "key29": "kdRdCg9Y7qjdRDNREMcikRFLmSMbDYEUbRpBEoUGFY5DDjwnDqCfPjxv2nURhpeDhbJ57gqQfunPygsT7MjPsN6",
  "key30": "21mjuiWXJFGDpptpxqHYUXb7csaBNLMxrijxD117LD2rnUJF8jwE5tUjQ4VAXiE1UFdPDQDCxKyufRUshTf1fC1M",
  "key31": "5ijUjmrwcXQLeqiz9XEKH9sCN1YC8MDuRvegUhLSayDzLxTpVuoGqn7yqquNnRN51hCUw58i5x8r9c2zd9dwSzst",
  "key32": "37SNneMWceZ6aUpYsR9ARC8knGtStts15PfY8RsprMhWFq23ERczWx8SxsEC98Mho24VyrXcsrbxosEqKHD9W7jY",
  "key33": "5aDkCg1E9Fve8aNUVJzQbYwcxNnHDC3Xxp3waM27pswj6FcfJ7pG3NcqTgvyiGiv58q8351FRavnY1iqbQfuxh1e",
  "key34": "2C6FT66ZBx2usbgEJ4MGUugmDKPnqwAZtaTSR2Sw5SGALLrYctekQo6TpAicEgrD8nJmv5o9qQQUHN1qcoWuXv6U",
  "key35": "YwBUqYEwSywYtC8YYEvvBa89caSkRrNpkCpZcbXWA21v7kJDZEoiuLMdGVKkD8xV3soRHUQn8Bwzb6Bv822stAM",
  "key36": "2dhRwGJg5VLaeaFRY8Qy4yULkkUHSHoNcTHpFhR6zY7yPfpcXiS5y47mgMS2VhhhUYGMFf5a4HbWhzfeHj2hAeM",
  "key37": "2jyXY1KtcT7GjheD8mbxpzaUUw6Gdv54kLA1Z4PHGYiq5Cbyv471kK3LhGRUrihE5gzKt9n329bs3i5QUraGH1JP",
  "key38": "4DjNCazM5HGKmMZG3LwWnuepXcG388s3EDR3ctxgSeKWjCVev6Vz7ex89Xb3MkCshAruMXAnThykMtVeSnCYCN73",
  "key39": "cyvA8LLmhttjsPMQCxMrYZ6Ji3qLX6AFJHJpX2QNycvpbmeXMfZ3VfXiJvCcgK8x61rjMdYQiw8RFxCJ87iGCsh",
  "key40": "2MTKPwRJLyybaCXRJyC6SK2L9X8DZ74PKWF17T3YZ1Ece5erhS2tVyN2A75cCqcAdbE8kL1p1RBCoXKSTcbfsg8i",
  "key41": "4b7yAywYbdTTEMehCkLuvywsQiwUSi71JAaR4ahaFS2MCC9jEv9P4tA5jhUwhTPTa4uzyuRuPD5oFc9LLoB1YKi2",
  "key42": "3f6znvpDVXSAYhVzaQyiCR9deQo9pAqA9zjwViyWpCPHgJJA4uvwxwgdQcHwbhdFZ1PdVz6Atz2yig9PzdtG9Yan",
  "key43": "5thGPwgJp22jX872PqSR42XLdX8MJJ9hU1cV8UBtKeWFfvxyBK9RAaAUELpZ9V7YAWzQbAZTwXLQ6b9SyLQYvYCo",
  "key44": "3QjGZ4Fz3vanxF1h7q9NCu9hvezj8RYL1zwcXJE4zbXRsiLNBRnFqXmbcZ1WhHKUcxu8oXiwyEs1T1sX3Gp52T7M"
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
