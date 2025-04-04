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
    "5sYZFa3vQYew8bByut5ynRi6AeKCodSdfQMh2ePgdJazBdwH9p24qmctZcfzmtAYQ2KAFK77SkVVTG7Wx3BXBep2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327jbycWoPx1xQEkQBD1s1Cmu31Fzk55YxjBncVk82m4uExVi8ruZCEWCQbsDnLqbnkyuXDXQdsW8zHXsVKtCBhd",
  "key1": "2t9948zp25xJ1jYRiSoii9krcgX8AzGeuULXKuJRTCBAN3F93dwDZcWTDXQrjEZc2mxioAX3JyhputgXJWMpz1ah",
  "key2": "4an7kDgwBsfwf97vrUEonMQZqX6B6vivNjCjvfQjV3DVh6KKJ7qCvAYx5MizBuu1Y93FUPtS2Bm5aKyqBJD76JdN",
  "key3": "4imMufQ2w2StnaXnNPXjoYjVtrTeFUwSGvryDZij8oeQdEJASXRCbhUE7V7mg5Q9GvQDWVUgSZH6CKsyuu3JagE3",
  "key4": "3JjxUKzAxW7Tw4Nr7bbTJq2BZeV3iqWyQFE1obZC1UfpAKKF55yEnUt7142ojeR1mqAgoTSMN1731rcZ1RKSeAtw",
  "key5": "2iNXmzyDqzdFfRxJ81bn45SBfvMhGCQbXT9RaeeXsH28uPpSMod5UceZGiTA8S6SZkD51i6ASwCYKwY1tiYusr7U",
  "key6": "2tLR2fKrw5eFBEXeUsvLJvfizJ9tYshJbDYKedmynQrRFfiFTRsPCsw421nJneJcUpJZdd88uGSNyaainU8dWAND",
  "key7": "4meHW4DFZjaip9cQTdS3HfwjcePFYwJbAbLeWdAegXDfsELjFqXgiVyQm8bvkkuRJQzNt3ZTtieHZdfARMJNxeg6",
  "key8": "3jRFrg6iwd6fDCVFxqkmqu1KK21nbL2ibyjMj6SCsneWcCNgvouSdWT3efEb1kNvUG2HoECepX8PP9xM6o64KY9f",
  "key9": "21arTaC6iunRE1V5VX3pJ1Paieb4QJRxfaMyYBY2Nak8CsCinvYZNi68DcukGmYqdTVQWGvSby2H6JfBFc9Mxr8k",
  "key10": "4GwcEgWDsbG6oNwLbRcyjSAgSGnzyopNdAvv3onEjzaQuPj4mtdmtYPrdxVxMwRhCnv3j9fb7VyhcXyTsfKsRiy7",
  "key11": "5j665T1cZkNq58KdyGekzaequYoaSoT1DjYqexxGE4JY1GM41ioEVJR65iY3DkjXXNKcNJxpJyC5yE6jBdHicGvC",
  "key12": "4jVTTJGouBqeBy3fA76NKyRsEXzxzpth69N2yLiWxbWPZ4f83SsnXZtB6R9DLnuSwyn7oh5SpByKTstWBpQWArWE",
  "key13": "NZ3DhHQN8etgcH1H9XyeMWcqsFi8SPJssBijpB5Q4bjwiCmSUNywtkUgE84sYKAQGbu6ifDTX6jmJhtfABxXZRB",
  "key14": "5KeAKW9QhP9BU9rX4KccTiaxr45Lv9zzW26mhGhAhg4gNBdwvmm2SQ6XZeYf1ykHtamckMivSNRAQxhiC1rTFi5m",
  "key15": "2Fxao6pjzDB7SKXjhuKe5auQraH9T7tkEPb6YwLn9FmvfrdikXuJG9YVqqE4zuLXXfLEmhGer7WcspJqBoFo3tN3",
  "key16": "4Hu8NNvXLv6fG9fipuHZy5sVyGAchNNUXj9Tuh7n9a9xo6BW5bFbjMztJei16gBzJXoNj23QkvwNxsCyatWrZ2Tf",
  "key17": "4JsJuT7t9Xk9NSYMGNt9mz9K5tZxMoGoXoBpPJ5ej9iuN8Gi9fCZyJCUGwzH2CNW92yddNrQcYR9ipvBBjyP3f5x",
  "key18": "3wPa2SwpxSMGNhVEGVbRySoVejK5AkTugEBBcTiV37smFcx5EWo5wTzsBR6TVH5PQGFfZwGQDXdsFUMa7yzUcEuU",
  "key19": "5yppqUEaY8jUEZUQ6DZgYxFXb9vNAWzMUoD2uBoKJ8SoCz7pjCgeA8c3sdU3fenYLaqFXV49RsvvAE1DGCs3Wmzq",
  "key20": "56txPAgGw5fyX5bTFyKWN5MkseTsZTyCaPvtHXKqfxxRc82m8pXdA3xSLpX5H5g2KEPHVnE2rhxhVJgVdvC6ociB",
  "key21": "2TauG1fXo4wCZQ7VHUY72WUuLyj8dFdhYwJeHWfwF8h8BvaKowCDV8H1tgk3xunLH5kSbaADWpkTeo3J4TrHJ7oi",
  "key22": "3ZH6MgEL8xZdW4HRUtabZbUmN2sEn1idZGaLxs6R6hpdaZGbViRYSmP5JWVnGwJg66qtbUKPwFebf2RSUgQu39FX",
  "key23": "4qutZigvQAK74RoTVeeFZSRco1ZjuncZZGfwsdzoonGiVnWFFFyJU4v9GHw1LrorpoDFMcp2maKQj2JkUs8m8mCm",
  "key24": "xVQkS3K1gio9VDaUQUTwmgbLfGdnNuG9gQDGjCCjMQ4nX6VchNoyFbe8ZybZPmQXmcpoY1GWSLBicKHtgGs3V5q",
  "key25": "5Z1gu8z9fQrXGQwQ2qfY9hg1Tqx7hvcuKKtrGoFj5LmvLyGDfVhG1ocrz7Ynsovo6jUeb3LKTfdJnvLYBgY6X5Ps",
  "key26": "KcmkZPE4srj1WDZjaYh7iqDFhkzZuye84nPEzTYHgzDi8MxWko5bmK954nPzxhPB3MP3kcMcCszC7oHtCmm9GMY",
  "key27": "4qRj2dzwCwfeXTp1789vquAcgp3fJojh4ag6cDsj9b7HCVwyKpw7RG9DZeFtu8jxW4zQeug11TZcVqfHcrqiy3aa",
  "key28": "4tVUeSCpG527RGVEivrjCAjK9X1x3nWvU26T5bBXHc7kcEJGaeui9H5RzSRHBiJX91FpTSX9nGpeVu5P5dKzynFb",
  "key29": "18aiz3AAJehcv2c7SWVm1wr5ncrQDCLrP52Wzic5DD1QhXAdjeiRDeskU1j7hbAR9W5LFLAKp5MVaRkAVZwADNP",
  "key30": "3MUctAAe6aWQkEYtbuQYqcdicUKBXt17GPXm6uHRnWvMKZLcYLnPLFHcnrKdMYQiqm2GGckxrxBmpAztBw6cxMs4",
  "key31": "5WsodMTYghyQnXaCoTYsoNEnLEJ6yn2mxPhZyb4rAnXJd2wg6utUxTi5of2MAk8d9WiueUAY5iAAxfaJbDmkwSjf",
  "key32": "3EQqBy9b3S3ycx5eU6uAQiXyWUWkwCkGWstC4fYWdUJ3e1ZdFqeAtGZZFDdpve6tZ2tVxBvsiUpnwRtdcYhtA2S9",
  "key33": "EoF9QbxXuUMfaWMzFa8VnF4tosyoeR4hYwASGj6G7v5qdCBfkEegPFQVi5f7RfDqn5DLxMR79BwKUyWAJBDz2K4",
  "key34": "FXzt1txDSBCqhESSR6kPUUpWQ916SUphgnCtyrXGoLL1xmNve7mhapSVZGvJz8ELKXDnZKycXNreaQkRcGkpUjY",
  "key35": "5BBmiwPMrDnbS8Rgg3pQaDohhUcpEniJvuyaA3DPTSG9vu13Q5MnmsyNiqTBDrXBh37wVAzeS67uVhrFfrn8nv4k",
  "key36": "4Hyo156DYS7v3EgbpWzyaMZKswqSgfe9fL4kf1PGHoaMQy1YMysEHm2v2RY1bqoX1bk33eFY7SL51HaAsDMYNQ1e",
  "key37": "4dLNwbcDibWKGHkZ9zBDe3i7GPSyLjB7SbVKjC1RNXUH89vrGu8urRobfGAwTZzv5bLb8tz78Eq74c1xzjMU1b61",
  "key38": "3r4cvr681Wx2QzoaEmedxTfrov8Qf9As8cdcqQwtcEBLKfeXdgiosG6k5hgujAugDQQNY12KVGxpj25gfUuuEW6y",
  "key39": "3cM4taCc4WAA8Feo22e7Jb8w8NiDGwGQifTfnbhbGpBd9adPWmV8xeaHL9VS1tWYV9sRbzCKQj1VRw7w4QeGog4T",
  "key40": "5Sh9zGLdXYYoKVz6d2NE9P1c11aXprJBQF6jGK5sPxHQE8kHKKWB1d91aMfbkcnf748eMkmRDpGADuZA8JbKhATD",
  "key41": "5yZ3oQqzNv196XEJvWZrHHUiTtZ4gs7ZD4NqjocLcUrtnF8NacCVUJxGiuvQQ1QKkeAmkSDpZ64nEF2ZEUcyP6k3",
  "key42": "2rnHb3Y9LDcAoXNfyfgJAM4tBy6EkSurqgUQgaajKD1HD1HZtgA6uz5CeVd1T41oSW2T2K1YZbSz65k1SsAQWCYa",
  "key43": "3jyXx4uYS6Ro4nVHGmrMrDFDiYUYeminUUmAuMEZhuAR9NhJGB3dry67DS18e3cGvArV2sSm2N5HgrgfMMqtt9nr",
  "key44": "3iNRqDNVbT3Kwnc3FGUitdFwcFskn8oKDtzDXVPUus6ecWdmuhboRwGHNxFCYioY5k7eB1JT575csEyWpcyPibzN",
  "key45": "5i6b5fhArDmmeEguNPxrteaYYFg4FLX8o3h8Ly3PwqFp5g6EH3FfZmFzLawA2fj5RhFyUqCkogr2tmKCDZKRT94s",
  "key46": "QT2ZWsYgtn1gV4gQseDvG54XvBUFaTr8SGFEoBjA9YP9FBnVNcFegkYongE9n5FnZvobgFc9Lx2UboSYSWMURqp",
  "key47": "2X2gjKY3ppnszm8NYzfa9SyUUfsepDiHJ4eF9QM9sH4wk5arizEJWnRNRFhfbCVzd3J2BzrZ8ho5FLmgUhNm6NJd",
  "key48": "aDAA1KsojSsCRVkZC5EkJvHn6BLdaaNwgy9528f883Q3pVTYL6L6utLVQKNuMRzHwbzcCPwSQ6GCw1pwaQQGJSX"
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
