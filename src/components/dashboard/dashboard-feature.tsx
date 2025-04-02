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
    "2fkhYYQEcD9DdgXHxnvbAuj8yVEeWpqwD8h3WQQp15ybLiGhwc7SA6XmJ5inJTeryrDXSvgsfWGEgd2JNhJJ7aVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HLQdGbp3yyEysJMHPGmWGd8pWT7LZZ5CZzXLA2oV55mbKngTzVVEwhDrLxn8hnM6cjejsxHAhQJvDUm4Z7EYwzW",
  "key1": "2Vu9UeE51z1VV2ZNsK2nHGQkPNbazo9kYSZJMr5Xn7YyuTe37i5b8m2EiLMrsydNE9AFPQGPAqsEukTF1ptuVWsq",
  "key2": "4ehxJZa1JDwQJ6Z6MjF7zqPjp53S4GvyHKZzeNYeEcZMmPyEtRqaBgAnmiypQLfzEfHCo6QWXbRK4uuXDhoaKNpX",
  "key3": "61jGZh7AQCe1rEsD6uQPMwzZPKzSkT6tGDkWPhewqUWUx473R5pfhTs5YPs3wAyRhTVRA9GuXMH74M6SAwXhDx1Q",
  "key4": "3CLkZ5nuifMkaw9jdo5TAsvN6g11MnaqftmqwMZU1EkFLhuLZbLiNDrjoy8cmnYah9acDghsDPFDwvAX3mgDGNYa",
  "key5": "3P4E4VHRx9fYwztZNSdC82xiJWBEtuPpQsTneNGQvkTVt8iknngRLYL7L4WjfHAfbaFj2tEpUwjQ647sLwwSCpHj",
  "key6": "3T3kzgkRJKS1ZDA2k634aVQivBwWWsQ9JX1gMvr3tbzWcgPL5GJ4dpiGtKELeK1LkJT8uAAyhYfv6KNaza3a3GEp",
  "key7": "5cVrauRsErf1PRw4xtdeSAfz8rc7Bu8YQ6DuZi3YWYJzPGJFqbcnHzv5Ad4g5umG7FrVqbjuCXt5rWcGKQtaSvjD",
  "key8": "2vvLYzNHzGJDFwSi1QxeiQWff1hjrEDK2fbZ9s5E7kGzAd48xPML4D1LPXiyhe2ar95R5dJKyJQCbetzURhiDDdt",
  "key9": "2dxsbSZs1n91AeqC961W74ibyK7xcX1GpDeZi8YW9QG7ow6rxYCVAnPFnG1aTeVM6tUKhNnYtASM54wqGAjJCDjd",
  "key10": "3zMa8TTW3s349Jvye15WqEsr3y5H4ShetAL5E9HWqd5ZmC2GXLRDPSMcJV9yNK8tiewKaAa2arHxyw4JMH7pbw3F",
  "key11": "4M9sFk6n9CXYPUYRuk4tRFT1Q94JigFE2Bft26ENPJQk6dw7agAqKZF3z21pjZugiy1GWYyEJy1ErVHGuqakE4zU",
  "key12": "29P41tHfBMVUDsBTMk6tskACyq8XtRphEPioKwWgpXSF9PysDGuss9bCfhRLFvgzD2Q7Ha9rwSjC4d8WBvVwq7rc",
  "key13": "3R5NFACYWe6t52jb4hW6BSTofc4ZA2Q8XwALgpLvbybuDDLw6YLGAprPicSn3sUqEtUe4nQnSMLivThp1AgS24RL",
  "key14": "3ztQ9RX4k4k5azyAWzpLatp4ceyaYJEpVJEQ89Tu9D6f5XWQm1WN7j4odtb1HZCC2qeorcMjPcBip5hmDvsdQNNA",
  "key15": "24pkGSgYimkkvg5UHKH1BwS2q4XfgBKyAXjjPwhZzFxw9KrBidYnYcR1QywsKyE2vfRS8oc7f7WESVo7BCjmHRFE",
  "key16": "4UKnc29LfDxtHayt8BQc2apKPFiJMv2JeAPoCiLUQg3rmTpFfhffUe595bLxXnfyEc9d5QdmAe3gfHBif5Tmnebh",
  "key17": "5hHVfUM2pXo11jGAZGoG62gWAx13HpybhKEw9R8pRtoxq3t4vQpV6yFgXS1dToaVcPC83Zp4tNXvkjq8A8spPQ9",
  "key18": "iWBvHaCjH9qjBqM2jsiJr5NxoGqDSoP8DgN2y6gBAw4dyRd5oz2g9dzDn4NNx12g5VT2WvyvPkdeeFY3e37grsW",
  "key19": "UHz5YxjTNhkifdPBEUG7teCCyL7jn9Fi6QZ7X8WQXPsNE6o4AzaprQqcizDRrcFVcLFHFcaaUeTffDHsdxbS1ku",
  "key20": "4TjorPwPYdjk43aeMxhhFCjiY4KvqV3NYujUsTrCLyAbTwSQSoiiM5p2W8raHdgcRSxpAeoDUr8pSThLxDW5zjiR",
  "key21": "42uNBLVoTZ1zWnAQRk1VCbPrMv3bc53Ke5cUMDdMETpmqfqa6zt3jiceW1gu4Kwb3YwjkfCVn8cqXoQnrpttNvmo",
  "key22": "58DWtatvYC9XjGPtyWd9WzSPsK4v5ggPvhNHE4FzZz12vEx23UxUAeKyzLymGpaapJShbgY91exhUPZMAyypPV6j",
  "key23": "32NNSAmaRBjBE1K9bdpi2Xs3HFUps3Hfw3q3Y2JzdibPMAJYrmF9Vv4ob5PQg57uScTycguz4Tes3dEz7wH7xSo",
  "key24": "2hbuNgZejDsg7V1ZoSE2Hc1maCNKGYy9wj4W4SrQ5FBQoMnUrvVYHPPn5NXVLmy3EoZhUZBQV89AdojuSVBS4PWM",
  "key25": "4CYTojw7Cd5yeMAmjSsMg86K5bA2YE1piUjQy1dCvdTTrWGsi5zRr38KJLm6kv4RiwuySqzvghDbhYDzmap7mbXm",
  "key26": "4scmg1C7HwnrgH5tDAhmB1j4pGpK7afFfgKERJC6uaAenNWhLbZt56m6mrPZQXMFZSJ3drNjiuFFFAqAkL6ALCNy",
  "key27": "3JHpxgs51XkhFgPhbQ39JbFsABNpje18WZgUYMTT1n2MBjXkkp9YxkS6qciR9Unx8h5bpB1XtdDChBwxhrJD3Yxn",
  "key28": "66dPd8ig486JEoLU84KCgvBVaRjLfWgvGiK2egduhkTCeLJN4Z457b6JsHSRVCxpAp2hgeE8VDhiQy6in9vW32q6",
  "key29": "4g9LY6L4jPsuxNsYeKx23PUbejNwpGfeW4SRBweTSYKBiQyTKtvukHUyRhNKDPnYokr8r3mjFSpPdd19rp5bp6sJ",
  "key30": "3TnnphZiz7wgYw2ShCwPaVrG61nsQtwAeSeGBsbsjYtQTBEV9ZxMqr7MdMMPW9HBfWqiksSkkUhaGhwmDfNzUAcZ",
  "key31": "5QooDaQYgnSnV4u2JAdFvTQ6igtD9DhZtDnj1onR8VyuRVBPFpoEnynQ7doYtJAs6F2M7s9UDZHqgCUw2uL6aLRR",
  "key32": "3qTDPnyzU2gHbaoxJaUZxQJUs1AhLGbwtJFXSZqo4kNW6oUcqSt21KmzoJqcRjrh43cKCGbEXuykStZv1Zya1q35",
  "key33": "4gF5K4zjvFkfCu6sWBWxRim3XF9hqM294Mha818JJme3J72R5h2yQ9fwhtmJrqT1y7UkkJZmNfuZTcUTaFSHZTAz",
  "key34": "52GjYgTExzhWVjYXjfF5dx3V6ooG78JNFuj4F1dkrt4xG1PdFtkH1YgKRtjiMrLKu4Qobx9nGaHP6P9J8cuzYK9R",
  "key35": "48t5Kyi7J5dc6jiBrWKnwBrS5UVsnTYxW7uZfJZy5RjqqW7MdQGjyTPSTdYPLGPJsKvgJQEfUnS2GWEoR8DyETFS",
  "key36": "5nyeU73z3xvvEx7E8sh7fZHwnc2Jj2WpjiDrRZWxJ89qhXfBhFGXkb3feL3vZVGPAzpZ9V4YGS1BnQvNaxfTAsEU",
  "key37": "Jpo8KaiFCWU4nuivQquDfciRQt9vjHsnTcq8PzAzoABwn1jrGHWVZv5betS6q9eMRaFtBAxxgiRMDBuUDJn9FQL",
  "key38": "52uvoCugKwApmcwgXqLFLUTJU7nEDvZUCe1fYxjjHuQMLNLPPRth3bYbE6X7v2cXVPWr95xtMwgzEdRFpUxkDG3y",
  "key39": "6DnXKSL4prTjPDaQuzMYXr5XREmZLhqNiuy2Hzi7amy1YPgvyz6CNke3N4QcCjXNmBFUGt5hmrCXHEtZCx6MeYB",
  "key40": "2EP81eYDidgpSCkyxP26Rv6mksRPpipvPFyLySBtLwaBPnaUvwC1EuGZMfNnKcP7aqeYcYWuKb3Kq9QG5Az4mKX9",
  "key41": "3pyrtr8ju97Ghwui2nMPP1zM4C7Kv4YRr7WoWz59QSWPZMeZpqi25K3WSePGV8tRphRfCE7cEQ9rNwbfgXZEoLa4",
  "key42": "2Ywn9c6Zf51aeVtWYAyFZ2XhUFkiYXaHtRxJdL7nqwe4TrNHEhRTMgT6aeeLH2myDyBrS8qtZiKvK5yVRSgmXDoo",
  "key43": "4RGAHGAUtkNRWYFRVar1FyifHgxQQQrxZVwZ3xmvLtAtgm7PWQ9F8PoaDiyPFjtubYU8FeHaqSsAKrTkysiStSCh",
  "key44": "3yPLzHjdWLaCfY1x9u76Gd4iAkrwVNyjrsUk4bKT2DsMdbG586SdgUYLnF1QkFxvMfmqDzkVP7BqL3RVaWxRDbMo",
  "key45": "5STd3dWM7PJJAbDMYbPsQcigCZj5oQbdm99yCcrrfK6heGjL6HYBCX5k3JHd7pSLRyNZe4iCD1SyVvPd2igPRrZM",
  "key46": "sviEAHPEYqHwrJniSNffJnhdMJp9S1dUHZzAkwjMYTca2aB9atZW36ADm2ooEEgozKAzoFgnpVNHSoxBHQv4Gr3",
  "key47": "5spaReWANGdzrXamMNQwZvtUNkV9o9ateNxxqvSFnM9BbFtFeJZABJBUB2jXDtLUPRwDqh4NL8Us8oKS7GUCCfMp"
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
