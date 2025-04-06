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
    "5zp7ykN63KXGgredc5vryJAPsdSsWyqrxUsDM1Y1m5WZKxRpBHNYCXLQ1NUDQ972MnB4fzmiaqD5dRduGmuu8yPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSTi4QPCpx283VMjioe3ni8TsSeesi14AFijQF6qSbbvqXX6zHd6zeDAddBc39PWtg3FYGf5LVs7rgT6yVT8nMp",
  "key1": "3LMUHGFgKYSGPpBHypbWjeCnsKKopue1s2biKFe45cC1AoJab6WSTmVxcxGgTkztbWjHJtAp51YjMPjyDHfjcJs8",
  "key2": "3NmrsfyufFNgEKEv9EN6pAG2ZkAnM9wtHyPGXrb2WcDcwkQkNMraX7ca7YvX1bGThbedRWuenZ9Rnvg4u6BNcd4W",
  "key3": "nxyikdK6J5vbTpL9CrNduNRvhnXgtXwdVDVpnTgsx7Crrqi4xSzthJtd1Fm3S6GjtkLCrGaHcTSbmTQ7h3LcmQi",
  "key4": "A1JqmsbyWqnBdcxhCzqFfGm5Ps3YF7oVA7iCBhvoLaaczkXVx11ajAbpRT9zqHhHuLbnatcWKXYgHRDDPZTq9D7",
  "key5": "EWjWDUcNStKJHFx6hfnyvjD85p43xRRdNG2L64CA3rqkUCQ6ygKFsMRd1ZGMB2mgL8fcVPLZ24PFyRuYSSMnbe6",
  "key6": "4BWUaLs3Pmyo4i58szwzBWqqrRiB55arUeA4vQ7WaUGpn9wtnoPqovwFRUGVbXhSSuAWC3WLiYkDRR4NA1QTcGzZ",
  "key7": "2yr1Xu9ZTb2eZaLWyA1tbrvH3e2j5U38XmUKm34CVaeTwYBvV7TUpMtrGHCDeRL7t4Mzdt6uwcYKorK86Qtd1Qha",
  "key8": "Gs8Z4cGnjysNs1B6UAwk5x6DVmWJv2KMKTo42ig44e5JxaCrKndF9EJJWgG6D4Vkp2CFR1uq81q1sSEEXXFtBp5",
  "key9": "5v3Ha33yAF3SXjPniRPKCdzUgvzSrSwEFpLdQpryWp26Brbpj2GejsvGLdvHRfrNianRkXHkpQEqm3j9UhN41qoU",
  "key10": "4uDFzEYhJjrD2FFprArkEdNBbZLZDk8X4yoxBCDPCDNT3LJvU7mcdQbKPPvZVZTAA7ba1QoLWapVXX9vgRbMGxbq",
  "key11": "41aNizgWRSV5KvWZ76z4cwedqxkH8uZECQJfmYRUn73NDg5C6bJHJmw3yJtmTxNAVv5ktmEkN9zTkKpQEAXJsjkh",
  "key12": "5QD4ppGmrws6wg7Hkj6auDcjzvg5uVrkEgBXkmp5YLZAkZB5Gd6ehDpm5tQ4mcHwT1g1qspETqBbBum75Un3Tody",
  "key13": "4r8PwmpXGVbpJBScJ31hakzJJ6bPuviazriKFxVmKeVL3G9fdFWCCttLw9EoqNE56ToYPxdXHCwEiAT1ksEUnGTD",
  "key14": "3N1pXg7tY8u5nJurZs4FY1PukcBeQMQen9StA19sPjh63eHMKtteokPhMwizYJXdJee4qQ17JQLjrbwcUiLJpqDC",
  "key15": "2xXA7Rd8C13vvs91c8epsiUHUe9m9Wm9y1Kz2kSwQ15Ev1YSUG4f2PmDRAfwEdjAQ1Hc8qCnRSveTSjZWtjYgvY3",
  "key16": "3s3cSGJSMYYNH9hnCV8gAB7ia5becXyMMQ1aPdzo4PpjZLgGuo8mSDufsMgLvd9KaPqAmXCTqgcpWx16ExzS7Yo3",
  "key17": "BFGhy8FuB1AxbF1w7mj6Nevv5HPwas6Vw75jCNskW8b1sbYxSWnmd1zwPE6HiNNE1YFfG3CRSdBpiDmPLSjSsZr",
  "key18": "4WnsnQFdkJSJ21Mc4QoHb2zPRSj3HPrJCwWrAJAjXLWeXc7mHgipHHRRGiv7MEgkzpZDpiSe3uC5ALVuVurdNwXJ",
  "key19": "2e5N3NhgW24D7pHFfp4q6GCULXGPxH1H6mnzWv6uQz2mjpadqDsVZnj8HpRHtanZ9vKT2RWF19LwDDmj7cKKEfRg",
  "key20": "3HSn7UdX3ZjEAkrx65j6g6yjsbFdYQjY4BRYWomnwpAnR8NBKkJWLas3WdDq84ZmXwzirt8VX8bvRJoCkSkoVvzo",
  "key21": "4osXT8SQbdGDYhsJeD2hbBachK3FDc2J9qGgov2QoR3Ci7yhSGvbeJAtZzF4SLKNdoUzc84jYRKsggxuMfvgyaEF",
  "key22": "4BiHeZz3uWVLXUEKVzcXBGPECWTShCi2HH4feKnid87ZB4LfxuQoFih7oaw7fnJWcc4ebarLjcDY6VEinkQQRFXV",
  "key23": "5V3NpxUjFYzVux1HgeqZp7pVtTcv8MnZrA3rPtQdTpLYd9NZ1ZihadZ8bWrkoxi8Nnt4iNFdUcRbLhZC9LoGAZaP",
  "key24": "iwajdFKtzvF22ePWewBsFbkDKVed4ZBtbuUZ9F8vAtKkqpmM9utZKCpbHkpyFzSy7oQ4hKd6D2pQEaEDTTUGCCg",
  "key25": "tRzHVoQDACJF1z2JTAZmW9nBAyKRWb2FPjMbrx6hh26Qz7baLML3GxsFSoUU7wNeEysZdp8KdLguYmWrxcGbBFJ",
  "key26": "5gUz5DmKP59XBm4t14Eib9JmdBGSzfDsxB5YgLwnwX1Hwf3mVPktHbuQ481Pn7JjozJWRQzDZMMgBsCKxC8hhqNY",
  "key27": "F4d46tPVvZfF22nbPSTUqTEoanaAK13ETvR9LHZuRFrK2xfMM9AWgShmpdGin8oXruXpYFT6hNzg9mMD3mpwyka",
  "key28": "3Eo7pmCyWK5PgdES4Dfr8uTEF1u62zsZrKwcsTz4zhqHidfDYzxAFgU6kqonBjJzJjLDhXdsvoVG1w8ctgyqwrM6",
  "key29": "3CrfyBEjgZNMRQFtcVP66DdnbeeNjpKPbCNjDLU7WSa8v5MTQRCUS7pdeuNTyiPst2nvKWpFxvLAiPgcnqLX6BXP",
  "key30": "5PiR6DgA646ftBKgQyipBBcQTFEoZG7rEsKmyzPPLTBZLekA7JDVnuASKwC8Z6AJRdvWPS2AsL3sQUq6o5eYrPsE",
  "key31": "4dHViV8eQshzUVHDk9UtwziCuCfE2GzrxaVhpRWBCozyvQ6h7BXRVQCtkFoBNbDb37rGSkkhKEogGTWUDnEDynNr",
  "key32": "42tiVmqDCokbnXTtaYcT1NUNpDKuBe8MY9kKULybBAg8WZ8eSfTc2mQVnsXxr9v3YTaH6NUb9VKR7eomR2qM949H",
  "key33": "MJoi8J34mUeku2CnnLdyDtbKwH8oaXYGqu2ZMe3udr6LLuVGLDazykUpB7rCnnQP9SuGPkjrMmu4wBP1nkNTb4L",
  "key34": "2jMnCDkrR3scSwnaN5fCqtTKzEGCRD5dyzkDg8GKMEdYyLweyWah6PGVwZ6uZ7fSs7mKWSziwLmHjnKWaMjytpdi",
  "key35": "5Nx3N92mqN6A2C1aV948waryh2FmdCDBCyeS449k2i2gtJARuo8ucKGSPkZrAjEEDVmUSircohwMDF1qFDHbWYXG",
  "key36": "26QP1k72RD4MCD2f3QPUAfWDnY8zLnHpLXMkvxUz4NUQJHoR2sxaXAgx4JDqagframpJnt8ZYSgdK972qu8aWFTy",
  "key37": "4UqgLrvijVnxsBBuaUSbUkBe7gdEcnNst9Nc2Cvx5YHj91GdVVbs3kkV1K3qBMAAT8VYgtJA9v7nfPyeMsSs3bBR",
  "key38": "49kExXGy3CZuDKeR3Nzcy7kqRxkfBm4EfF3QmFXxNsnQsVobayhzjjAESLkZpPgMnztDmrqyw4CBGDbFgqSDPxVu",
  "key39": "5GMtyK465jWcjWHqYfedAGM5T7BoL9rEaurCsrZUsCgHicN7GK5UwG6kRDa8Kp7xmsyZ8H9wYQz6h4cZUHHRYjV2",
  "key40": "5Ex4TBjW4C95wPZtWRDem4HNsWup5ifkrFb5XqeNmPgz87p69ixjzAjykFEDRsFGwod8U1VmyuH6zDMF5Qh6NeKh",
  "key41": "3ckdqwHN1yb2mpesu1Xt7pWLuFzaSrfDKC5FisDUfni5UQKguWd27BLTvfCrEeBAn9oS6DM78JPo7p6Erm8s9Ksw",
  "key42": "5NUg463t8NXfVX1b3ife9M8UXLKJExU4X1fUN1PAdfxtm7KpzMeeVoGS5Qm3x1pr9qeTAZxMRfXb9SMMp1d2A1Yw",
  "key43": "2Wd8BVNDkcxdJDKNVoWyUezTxZPCUboeQC8F4QAMgaw9U2BRqdA34QRkFKga6zg4x9Jodk1gaoHvzootcsVgF9zp",
  "key44": "VrxDUaZNfxiTxMaJQoQi5UZv2dwcqNPFTR5sxQvWDFkAXgJjK8atCrB77mw56GS3CF69xdYt3dxDd4d4fQiGKqt",
  "key45": "2dh4p8UQ5ndgUWmars7Xfkqy6EeCzhvcyMYdRjwN8TSNAPae5NXRN9PkJ4h14qvtr9kJLuZct4zpSafFiDdHQaoE",
  "key46": "5Fmzk75VqjoAtYihU4MVtfXwu164B8YG5nskq8hi6sMx8eidaSQ3mMDGFVdoqorC6RW16RjeEMXihoWABF8EpJFk",
  "key47": "evdzR14Kf8Q1Uk8fEvWCHByRmHXPwuikf5DZ7dUjPug8DWZ1EQMpm72QHdkz5rA214EMWfSZT1cubJAVLfKoaVw",
  "key48": "3NsKic4tfat4w2T2XSmnbT2eWLmXRHUdtoGhEpePAnL3gftA36gPoeNuMZRpeaGpkWKrFnocurdnZrCEB5YGJr2n",
  "key49": "4LJ2E7RHUbn6bzqMywZXGQvPZ9gz8SkcTSxcsw9xRUy5KLTWXJcWvcV8SweRYjgwr6EbFME4iogdDj5rCeoyS72f"
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
