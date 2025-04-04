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
    "3XduL4QELK58AKKHpKKfYr5CHH3jvzMitHVQKdNPMaAR7KqYAMusAqhnZ5kjbRcRLE7P6nYaGeAikMEejqna4E41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TzvNwdN8Kkrdn39n7bn4s74wybuwiyLzbXvBPnqpehKsBPyyTNip7C89Vfs9VHC4gGK89mp2TwnxMrGBpCrCTP",
  "key1": "HEfj43H9obk77iwjHi1VXTm7bhhfZ1tLd65WQJbV5edxodgCcvGVxmSFATydGjVE9X6URkeP5hAnkY17Cn11GFj",
  "key2": "4mzicLnWBdb8TYU5DwPtWqtuUHVk8AVjkr9j36D8me5LPvEpTm13ixhTbdFG8veGCnwvGJd8dmgwQMSDGPf647FA",
  "key3": "atMf7BzovqpL4QHdkGrPAbFe6PcUcmMjducFBazVTseetyUdTgjH3347ovfgvvdCAZszocBgyoKfMNn1DMy1NkU",
  "key4": "4dxN9FHLXNnTucMV87suPX73KrtqLbUS96GyoEydKDv657CkBxvXod6vozTRfxuX77THeRh3kcA9vsW3LSRrxPtQ",
  "key5": "2j5oqddPd8nZbCHGjJiXJsdrjVvTMDL2g6wGHVcvGbPjVRN1zUdCurkXP1Ve2jNeXLEDhcSJH263rixYEvCvtspn",
  "key6": "Ut3ovh8kdSUbnXmrQo2uWoDXxSVmY5fYxUEmNTMT8pkqtTuti34TuJAFTDj5h6LWoXiyz8U9VuXTd5oZVmjRd9i",
  "key7": "NqGAMoMWEjEP8JtniwXoqqU7E5y7EbfXeNT7SZA11d1w3DeGp6aXqCSsKkgbP38MMvB1yU3YksiTJ13FjyhWmVX",
  "key8": "5hx23q3wNSBLymorjWv3AkbdDcXAMEu3Uzd4pjKm9xAUT9JeNDmNWDkSxwUYedToGFcNCtv1a4wpTnUrNki54bVg",
  "key9": "61FnMg13fPvfuS7Cr554HQ6qweZ59gMCV2onVwioQG2zxj9a8818MwEmvLjStxxn55YE3QULDj2Cjcy7BDHpKvgT",
  "key10": "4UYyJpucYXUAFbzowH3BJ3r8LLoch63gDKnnRmXu7GNScAfyXaEUuLkAY2ASbDJ9KhuzxE9SuS8ctaPwMHGL4Yds",
  "key11": "2nbakDbo15kvLmbtri1Lv1fA3u4W2WffvKfCf8gnVcNzH1172V5bKMkU6Ge3EW4P5VfJ9sEaVNuddxne3KYpshfK",
  "key12": "2ctavsjKrTj7gSZCPaCgK1Dq5Vcmp9v6tXcoWfWFF9toRcfrdbYx9jvppu27AcMmwDuGvmKwDtJPrXmnTHNoJtxW",
  "key13": "59Ra6ngGFB8HUop4pcVFMB4f6LGWuygmxraeQgM5kUgqoxkmzcM99yKZR2qcjwnN8ZzyK1LZaEYQpaYCL67HEMro",
  "key14": "E1wVHg1scnzypjJctW9asWz8jRwNSf52CjdZcrZgGR4cdmYfTF9Jbgaji9iBziVhNsbx4k6J7QXmNFiPaMC1Njb",
  "key15": "52NJzoMmBjyZ8pEz4yM8Tf58F6ZPe7YrQ65fmrvY5eSrY5ZqWkWitza2hWCUB9TmKkAzzYyPiNvAmw6D2d4VLVQQ",
  "key16": "47Eg2MF8WmnjuF7byv7q1hEzVDRno2AwhZFeaMPR3YHq1dVrkyTkiUDL5x7g4oTcUfGqEop8ceXDSXZr9tsShGWY",
  "key17": "5NXNvHb7wU8JRJ1HTX3Lhb9QBE5hfw5dPCASB7J7cRoKVJV93y4MWfokQRH576cuYUfvFk9QukZEwcr2LH5xZQ9p",
  "key18": "3tWnYDTK9tdkMYq3XTXtNfbdVNWc2iqFhJ2hfqH6FzkQpUehpeYZ85Vkix1fK7Zk6KL1UTntDDco5Bm6G2Y4dcN8",
  "key19": "GjdNSxmhwQFJgKKMQRbCCcDZhSVPTpQEgLuK8eU3Qr44tjmTMaUs7cXE8WKUiwakPMwP5c4BzTzN3Jcmn81WcNi",
  "key20": "42qUvvpGQuzpyKtNUs2ziJgXrampPsrSp9NYeP4xF1oFvjHazyeGoUgoMFZtoSFctRKfsMxVtcnjyTN3bexPezoE",
  "key21": "5HmPeUGm5PrquFFLgijhdViyv2AVRfwax3kuqxWnNf7iYt5BefZBQJbEitABUD9C3jNfaEDqvpVLa6hhmGkpGdWS",
  "key22": "4iX1xtFgPoPhCER5yzZyETmxE34VmboQdWbaythP2tpud8bsQxrjcSvzoNoAbZwqcwufiC8kifrF4HaSSWuKeSbQ",
  "key23": "3frBCg64dZdVVquqTcbbxbEmtM4181rXRncsYMSLmUHF1WDZPDB5RKaSHAE5NKA8m1oNZdCfpYVn41NfBkru1Tf4",
  "key24": "66vaLvzcBQ7TiFhUHnGPDQh8CjaPhNqJtq9rCK9UA1h3CqykVU6tweMC6b6VM4krVzX48MPtZM2vyWs1RUsoNU8x",
  "key25": "53q44tK5yxNW16oTwWp9H5yK8zSxMSNQizFRjm724u9REJKqfWgLy5cbqGtuw9E9gif2dH78oP8LtF9FAXywzzM4",
  "key26": "4RxF6mKvVLc4F6yFddwNF4BFDA5dBqQLYxz3ApWBDS9hBN152EPiwc4W9MK8doo4x1Dctk3KHTV8TquBFyE3MkyP",
  "key27": "41wW8SFagMNv5R6jt2qpLpR6V85ohXexZu6T6ZrULqtVytAjrT7Ty5WKsNhVRwEVwE2L35dYWhFiUYGs99jdF5kf",
  "key28": "2hMUzUkPzaeBMki1fGBxpwJEkmbJbhTuz1gj56CrwgBAXkT6cwsbn7AMjb7HvQu58kVbG9ZRHgGUHkxsAMcuia97",
  "key29": "3Zmtki33GLp6Qkoeb2eW7jxVSjdNcBxhkcqiu4HoFPjgdsv7U22wKHU4e2dJtbKUwkchnjf68UEpf1AKN4Dg8Mmn",
  "key30": "5fxSV2u3GTq8mRBjhA2iZ6qKoE3cSHuSacoLPXTbx6tTPtX2tMNxREtTk1hz7ie7dizmWzzjeHvRTJnSV7smfC6S",
  "key31": "c37nnVrg8bqzjHodz3A2Sm2GR7r3Bnq6bzE9Z9c9Yo2qFf1BDasAVAejGG1E5NBuxRDT5G1KHsCzVXa633Ua2np",
  "key32": "21gWQ5MgD62YoCAZxXo34kBceefS8iZGfsoLpVSwbidu7URsM96kLyB2Vjcs747rKZsq4ke5hM92TruxKd9fqPWc",
  "key33": "5JMZAt491T3CLtYrfAfqraiL4TgqoFuCcbSzRFaG7Dzp8yV6vaTuoAwfAMgdWjVK8TJLjWTsEAdRPLKg7Wy6qN9C",
  "key34": "5AqSX2RQ8i7rknZtSXxDqxNfUCTrt5jhxcDAnD9UjvJr5jqnuNBwDAAmJRaN1cHzPAFSRsKHK6bpFWEbzkY424B4",
  "key35": "qy7qfCszYkMqg7QS7cn3z3aoSRbZnJz65wYqSqjELrQ9Ha8Bw1kWA8NY8KGJc92LboPccxoeiZJdeC6ci8aCx7a",
  "key36": "83WTgxkhaMLpaVF7Udptc59jYnRpmPFR5G6x1wyppH7GsPufjPEDPPukHczfUgYf49WeRP3vhpEKRmRAueN5dnW",
  "key37": "gc1cyL1t8f26GMeUUh813yJmL3WMLwMK7xASznjA3uvozkErfmThcST5LsbNk4r5nqHqxTHLXaA9aTKTjLRBni4",
  "key38": "2ceDMjdTCs3vkCDzsuciJsQwWL3oyNuMe8yrwQEbDP7VvUM92qdp3z1k3Np6h6MJnzTV3gp7UshJrYZVaam7pgoZ",
  "key39": "4Yy2WPhrKSco12eUYB2rfMiHnZwq9cArV5NM6EHmu4a6Vu9pGGoPPR51hPjAkVAxpxejw38xTe25NT1xhHNiinen",
  "key40": "3bFn9PZKtozsWa2F2cRudxeJewdJygbMm8VGQZmrACiFrz4QidjabewcVVm7QFxywcEWQVq4egmDYZKeuzLvfYXC",
  "key41": "3boQuCoYw8ehG53Hq65N2wUYYnfdno7eodBcX5ctPfuexBjPfnVToaEsjJ5qSR7jxeNMxje9qyaeJ3T49A324Bo4",
  "key42": "4o9Yv9R7ocSAGWShmV47gvRyAs4JVPdjVs24eERNNw8si5nV6f7ZcNG9DGq628FMoKRpwx74W8W6tTK9yGmeQ6xi",
  "key43": "5CnWZkc2Euadc6DU4SZUwMA6SZKB5Goc23YSBmy6odGLjndNEHBPjgahN8XYYyGC5WCKuFpbm4SuDMDfEuFxDDCy",
  "key44": "3NQChs5rmMXEYk5fkQkZtjutNAUGhDpvETzWrAW6iQapvLS12scxd6P2Et72UkXF8f2ZzBnV55aNWjJbwGRDQA7H",
  "key45": "4AdAExGgYnLBdSa9jTDRjZkRJ66ekVpnQHhW1Fa7d8y2fxhLDRuGie9WWvF3bsFqDmZifHxBfiAM5EPinUoSe6iu",
  "key46": "3xvZmQhSRX1ERzxqvfFcxauoY8SAnixft5F8BwnL1BZWrNqm9TaS1qkUrWRb675x3hyetfzYLk8LKrhE29ZtdYx6",
  "key47": "2eVT35PQeVLrTLHFAcwnoDpbvy4PDnZTdd42tEip4FqYXotuRSXdjJChYFHuBgpWw2Lg2b1MkwPy4Yok18ane622"
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
