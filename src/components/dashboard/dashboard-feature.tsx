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
    "678rmvn9SkiHPzYbMpDV5Z2BziCRhMuJ4sU927R1FW9xcDRVpJRPQVupko42GbwQXVMWEroY4xKqxhZaiXeFTvf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsijaaJpVdusqipF2jfWbX2XknHrDdsy7pd6urAwYKWgkiTSuMWguM4VyAYwYaXKb6Webg6szBmneQrS2vxz7mY",
  "key1": "3cjDaJijU4mcksB7TkvP9Mp2nfTFqezVNEk3CEJzuGh3tfmuaaNsC6HnxpbErpdXBvyHamn1U89iGA6tX2MoGB7v",
  "key2": "22rw5WNGijxyYbXUKkpokBuZrGUARWzs2oEt5RSyqmoPu77XFJtFyt2RmT4saqoR8SozfobahhDgao2xfCg7ymj7",
  "key3": "4y6xyEpzUSjzUxQ3RUqJR6ro4VueHD1syBQhp7zYwrf4YXpUmZAML6ew1HqoG52rxbV1ySVv76NrKpW4Ehwu5c3r",
  "key4": "3J6jkkT24E1Ggoq6Xo82Vzrkr9u5CjeutZXMsPdBA3tcdmuzpbGMe6wAfcgPxuw5shEQ9LW6akTVg1x7QqjEdNB3",
  "key5": "TYQjRi6Cy8Rxnj19gYtWtuNaBbM75AM1BrsKarNKLsB3kizufuNHpaiT8ER9zjAHNf7aG4PzJjoc61AuDdkHAaq",
  "key6": "3idYLP85on242eF2cMLWi8ptzgjD76sHoM8QE8KhY98Qp1JXB2saQpftWi4n9NKn1uuxna9jJR8eoKjYkFTGvfdB",
  "key7": "4aQozqxRxjNjEGtP4ZUpKq5uLbCkaqrJW6pFxs5k4GYburq9dj6UH23Koxio65iqRmcvSFtfzLYUNy4YhE32ywfu",
  "key8": "2X8bf2b4hqooQPwvki8hjbowvJJ47k8Zjhr3TNT5SEovTCfPovLp5qr6EcVSVh7ysGyJVV6MH1fQ3wen3G3V7Yqt",
  "key9": "5gCkSz6DKmJXfZUttDbjs4u6PR7oryT3ZfGqoC4gEiq7q4ABDWkaRJcVUw6xA3sEihfgzKz5jEchp8PcwBPMuWpA",
  "key10": "3yfEZBoiYwdZc7SbeA4bSD9Dp3KhPK2DuA71rzVn9Mg8RMjBjE4mNpjCodVgmHKTynV5euseADxB4ujuFiqv5Pc2",
  "key11": "QeXiGBp9wsCb2uHyouVQXtUcSeB6SxzHDk9Lxm9jnf6LxreFpQh2PATvZZ9Xt1Tm7KKLatSfviphyiin7PsFtBF",
  "key12": "4YKKfdrzDueH72iQ5tJRcNndu7AHwfXddGPRCFLsVGsd9bTe4J3JzcY4P9wdwziEuvkYsZaug99tMXVfqcKzjcAo",
  "key13": "4iJs8AxwxbcZV7LeCxJobPTBiinikJ2ZUTHLYzgcLAt4FQMN4DTBydTg2qpmiD83vjenQdsbsJLR6vp2GTPbcgKi",
  "key14": "5VMV2QgvH3ARUy7FpyFBH3pFvBPbzSmx11rcrcXhhBAeRJ6XPXEAeMtTpfNrfa5xmPcKigQu7gFiFDekrgPxCkut",
  "key15": "3Mv9hKEftu7FGTVihcMqGQKdD8XsbR5q9tToKXefutYeibmFT9NR7s5wtjh6p6i6C1CzJibpmo1XBJheVPvW4mue",
  "key16": "3yDUbHs3Lujfm1Wir6MGkD3TY8nPncueZ2BQcdErtYhBxFUyHP2bvcd4VptKRreLjT2AkQewAy5BfnMhzqrZioYP",
  "key17": "VSnjo5nRpdQQcH5ok35p3HJvpB4NmNEJMV1RUvekoes4GVJXs8Dw2Pmbgn7i3mArrHzkZam4kXM7u3J7D5b7uSe",
  "key18": "3YHVLgenBJfyAAKX1bmro6h6MTw4UTkEfYUB6zHuRhMwLZL1eRVM3crt7AN8if8sLFtufitR1aaM4vSjRQc2Y1GH",
  "key19": "4XGhj5m4eQmiTR5yAS33nvgotuskMxRsif1Rat63xG1EVBaWzrccNBVYWWnjb1TyQvyNQWGnQAW823zLxEYUpBoN",
  "key20": "5M5JhDEM87cB8ZBmJaQjYQqFQNwGMaicSZXE1hPQopskras8zAbFYoT7oeAbXRDWBQ6EJg87fGo3Lea8Ln1WCkSw",
  "key21": "2q55XFoq29cD7CMTUtrNWZ1oKj3amC2ycaUuPfhwcaBGv8yyHN1VFYhDkySSrv7QsFLMHU3PorbopFhZMrFzm6kc",
  "key22": "2N36ppNERbSCHLKUcAw2nsd8Mmhuz8gThKmXQCaKUmapmESrm3Ripr3QkbU2BZUGGCDfR7F37VctBEwSRVDwiWHo",
  "key23": "65qdBe3HHFR4NyLofsk4MfuvJ8fFjCJkuifCpB8Eyjk9NL1Wp7cfuXJfA4YjBQLqB666m4QWzUz6qRN2zFxRubWC",
  "key24": "4CLS81H6BoZK9EEaotZTZRXQaG47XvVyPt358iLkJzcuMsiWH6WUbfkWCcpvQ85vJ7KffbceaeLcQtmCfGL3B1CV",
  "key25": "2FJ8RxNA9AQMxmutTPE1vFbMRrmgAHzPZcNuXMocKznmaSCsdrpuuj7a7qaWZZTTYekwfRHgzoef5vjEbkdhuLDa",
  "key26": "4gUCZZi2hLGjLrEnoo1i4NGZCkSKtPwtcLd3YSz223Xh3pcXqVBG1yqXS888krXyav5YS6pxAG596xgBrtSfZiRo",
  "key27": "2q7oibawQYkppsffdNSmCgYYX89DjmY3zabMVw3ShnbckYqnnUeJeJRHeD6o6zVGqHJqX6EmFx4pEwB6A1kwtu9b",
  "key28": "jc25BQ2ko2Ep5Yt5ywTV2pyZYSbnnwoKTiJyT5nxxez399NJs8BKRY5QSU2TzuevowSrVfJ1ApQCtZp9VuqcH3u",
  "key29": "zZAtNKWvySn432g29QALgioku7QPxvCptYhNraP8LNew6LLXSRvx3V8xgeno8rzRSShoBB1PtYEADSuoWNZrF3T",
  "key30": "3GBTmb87VKDgYDQrEM8ykymHKoTQvRgDUi8yiqChBMKQLue5xxBMXJV3ngMksWcBmM89Z7hRjoAwvEdHNMGRa7VP",
  "key31": "5k3f2Y2Ap4aQJbiNauoppURAY7eNsPwhbtcy9RXbNQCt9PsmkeCCb9LM251i43xW44iCcjLjK8QvUc5V63aw8Nfb",
  "key32": "3YhjPsVaFqLh2DpfTD7u2X6RhNoCAqLvMYLxF5AXKBLm92p6X8ZYFEyetcZ1ExZBMPjGhZT4CqiUJ5ZKuAzKCw4N",
  "key33": "2BmsL1ssiFcHQYwaFRLyJiSpjB4CozbG4HQ9qGxpSSrNiCdfAgJo8x28H2MqyyD4o18HnR8qAmxT98t6wC9T16wN",
  "key34": "5N79qzn48UCXV2aCP3zWtM2qqds4jo78gHL5weSmoAYsmWKrouj13M3xqNVevmiSTYKq3yGd5vTarwiaaEKfSBjn",
  "key35": "4MLNSceuu7HpXQU5rkCrQ6NtnYQw9HeDX1aBv6m3xQ2Md4okmi9TKc9jfaTycAspsniHfhw5JLf7zu6AkUtsNHLd",
  "key36": "36t9NtAxDZmgfu6UUd6s3tuCtAD4ekouxom4bzisWvrrjGbWZvvHhgygr4kEhVFfvkjwdbdMv8uGjx4atFDKeS1d",
  "key37": "64CtjD8o1puQw5cskrbCQjeN4XYHWpCC7R3Aee2FS7r1Byo6srUgv1m3mV3fuyJjCeLipQFpDt9RMLjC8kALSdU1"
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
