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
    "hNGerFR6oPz9DimC2LgR7LBz5GHRcCAcKmu1AAUBH2AiDdPSTE54xjn2eN2J2gfLfTuL1E1KN1MSpNkZdKet9YU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFseybwxLsXS7SS4kjbcG9QGa7M2BeA4UhSoKTe9uVSWppABdWsgGSg6YxGWxyNbBnt4K4CvMPn9ZMT8q2i2D7P",
  "key1": "5Bfghj9qJmKrtfJmaHfcamK8Y2FQ1ijKTLfT3wPSz9E69EFBvc2mjy9gU5zBUF8cRJgmxdum3ejRH3AmWrww9V94",
  "key2": "WWF8wz1mUjfpcRMK1uVP3zqoVYdeVrqhrK9PVVjDq3cRhfG7yJdRaKoNsAZrsSCShiAd4Ex6vQPWtJTtinsdXL5",
  "key3": "4u5mvP3HZVMiwAv9f6aDSEufNviCxY5J8zQe1Ed5yLfEJP3WkaniFqTXaZw1ZJPzuh4tnzKtdng274KTu6gSNmeQ",
  "key4": "2ndDn6efp231ns1iQUQGcYsnPyKVsyLUNX4RfpnHZ7kjektu7EQNVpJdEAwKp1r9mMy6mpHqyVqxsT8jBWRreCT2",
  "key5": "cLr6uMHLCqKYwMP37AzcLubSYQQNmpx9HYp1y3WK46DJ3PLJtGB2p2PaSJSzLjjiCN89VMgFc9gEpPVrrDWAvTu",
  "key6": "37hYxqWhynKp72ZD4CxwkWtXbvMegHz1PoMMcfaYMSTG144ks5uArxyZZ9X8843LxthjA9of9okpvKEfxSYkUcGT",
  "key7": "4Hr3Jf8rqsVZx6L2CZWiKiEV28MyD6cUZBewiB5qVrEeQ3XFfaY7oRqwaJhdrwmEr7f2cx8UqhNdTU1gKdL8HbVY",
  "key8": "35Z9D6mKVm2F5YyteVoD6bkrBb7tRy4Re5Fu1im4JGsGHrVG5QeQqibreHZDtV9DLrvQ4gw2uV19Zf4KcTQwciBT",
  "key9": "3PG6mQwqize5Mdw5WeAz6KFKHwgR8kPHrfDqSaT8efmSpy7enicthjjuJtXtrJ22Z3mmK8fmDwMgzPwQK1P9kCBm",
  "key10": "36KxVpuYtV8htyY6KMby7b4EqweVDcYmUWwcBQxLAYHU95PeGNguNG2rSB4crEejaDRfXyH277NomnwpM9etvkG3",
  "key11": "2YV1wx8ot48BgxSUBQFkvmwVoRML1Qv5oR1ohM6crAC4hzUxnb4qijaDUpvdqLdfLzsuGwTaDmHZtr2GKQPxfSUn",
  "key12": "22X8YB8Fwf1TT5Myvp83ZBZaqmpsRt3HkkxiDV1hRpPgAnmZbPw6YazBhQquT2HBTL7u4E9kM58Td8n3xgWPe8fr",
  "key13": "2Z2JSp6y7PHuht9kZk33uTqYTaSYXwuu1uvC4bdMy3V9m9aMwrw2gH6gAUe3NwQJ6o8DRFGHtCzEnKrGPh6wcpiJ",
  "key14": "ctvzd7ZUD1JXfrweoDDLYcBSyAy5DSZxgEGaomApvc2YMU5t6Fcr4paXditRn9GLngUgcGuNKXgeggLiy1CW1i7",
  "key15": "4srG6iybRHtXjMT9s1pKeViTGxWtifpNTLkQ57j928xkWbRgQWXhpF1vEMGjgRjHJcNaW8eGNZ1CpDRtUPPZQCB1",
  "key16": "3X6VsatcxoLNqSJccsP4c8GESyuKmjwEKLBMQHQEZseC4Lw5HDV7iUteub3sa5yKnnQeTmeUX6gp7zjQY3qV7zkw",
  "key17": "4mMtQZ27hqVFLgcHWLPGMjrVwjrgUvpmhF4HES4ykVY1c1hXYQQVewmVwUhnLqVdgHnC3S24Jvg7rtq5a5sYdSrE",
  "key18": "2mtm9YawtgfJBGQwthv3bhondFPuS6dbEQn5yKjm8z5aZFxYJhfm4RbKErZZxctEpunVnTZJ8XyWE1qLs1zBGhT6",
  "key19": "5rULjGfe9gRFtLyHS46vqyJHhnMPgaEahHEnakJ5AjjG2khgR7PHsNQpRw7NDNYhn8J8Kk4xZMdnKxrmyeFak9By",
  "key20": "3a7e4dmScrMtcNPtmpk1AeLwGJuf2BaAireMuTEAYwHUCZA8sN7ihQxjyJFzDHJ64EUojdTX9BwJgZJ3c9E7rw7b",
  "key21": "3eRxFs1mHFtVGF39jE9wgvtwUtbnhbZD1WcGXvvxd6L9K5P3fbqJ2B2TTmHzVbVDBAdnmJpbQzQvSB4ziDUSZfqq",
  "key22": "5wM4pX3kyyNgc1GzGYfTfhwhE5Amyy8AK8GmGhrWTxTsWn4bhvAvMgnZEJaq18QguaTVzGMgLDWjLxiFDMsfpBMC",
  "key23": "kpc7J9b8SypgZLd57EQPmyhrvaCM7CFUTwKy87diwJCwe6mN6kytqoT6S4JRKpvWQLCLK3RTtUi2T8ZqbuiY9dM",
  "key24": "3wjCGZHk7Ju1Qg1pUDoeVzmHgobdQH4f2FV8Nz5Wt1RuHFYXVtqdu8QfXLUcm6sawAEKnKhp83H8Zqu4np1xjrVS",
  "key25": "4N5ZMrjp8iKeBxkFQ6wrPn2sAYMuBfSaZnQ7yhWkYxxNTSrCxBxXRyy5KEk75V2EUBNozhvc4vFZv9FwruhXyrFD",
  "key26": "2ZDsBgUsDPuGkd1wp3zCtKZf9pmCd6KY7QLPmSynmY52xEwMwJ2o8LbesfGiQKj7Uc1EbVxQRFtr1PPoXYG1FyCV",
  "key27": "3dTZcGMuoSoDRfswbCtBgLezmSG4AWUtVPuFSeU8BrhVSgVp7YcJjM1TsqDhgqEtFCzoNgb2WkGnbCVx4NMbCc7",
  "key28": "4cd1K1EQqXvVASnKHKpGC89SPFwxkRrfHJi7EUjXbkjCLErwpDeshU6BochF29fzzbCRb6YG8rrkHFFfJF4zGabH",
  "key29": "5kkK2aEBrejjzP9fbBgbs59dT1utQmmbSLJV6nZm1i9okvZqSwPDvDhvKZDqGUTfZMfWCEVPDxkKF7bVxotT5x1C",
  "key30": "2nYwWpsaV3bwxYPrJaLA2zTprPBupPaA7BEpAaLncy8YSeqBV6yQmiY35HjmWx5W5UK2SEPh35JiTgKgBuajgTgA",
  "key31": "2GY7QBMC2jnLZ8LV5VwziqVNoCZAuRJ8AY2dD9BXfvN1gVVatZ7Eso77evkNT98xQ3uKwhe6Sw4AEk2iAP6NoF8i",
  "key32": "2EgCQftGUGjQXnr8nEQt3gDPHjqbedC892qA5XfxEMwh5qwGP93Jtg8uxZ6gbEyE15mXQTAFN1jCKhoXgjzAG5cG",
  "key33": "5vVka8SRudQFUdTXQFs2JqRU4QJzY7ALJmtuK1EcbGXmSfo2Y76NngUikCmdCn5FaBmvdFiWQH94KP9W2i4vNLHN",
  "key34": "4EcPoHcnCBghBpkbo84Gb1hi4C9EMENfwtsq1iRWssNMXHJMVDqN5FbYXxtwAnCfJmKVoedJuZqZZVEGWZZ2LqWN",
  "key35": "E5iMrQQjKFm9EzBySCB2xSSMaorHDjEz8Zugxb5abHrudMq7xActUcHdYBUU6Kk3TKB4DC9H8959TFmMAoor1rm",
  "key36": "2ykkSEsUc7vBeTqx5n6jJU2cARtt4UctDjoQU4hGHgjtPzSCpnfmNnWEKuP1GctFGciqfMSzfyVVikeyJquixSuA",
  "key37": "3sMY9ydZ56rgLVr6Bp2d1GxJmtWwYT1cj5uTqi7W3m2rCcXcjRvGM95GeWjPHnbC7izsCrqGskuMEYJxj4EjVaAM",
  "key38": "2aquYPzFPFNLduemeWkfCv5oTuchDABKT5uo2sthfskHXxYMJWBohi6uJyYmXA9w2Nmk7WGVgNBsVuQrCjDcGF4i",
  "key39": "rNnnM3brMeNj8xQa4aM1k29jzDBhVb12zzbtw7NCKvGT1nq8BYH32SNmBsW4gsoELWUPg4ZMtt4yJYokRMTTuVg",
  "key40": "4UhbFY8YGhjtfx4n91pdRGH2nvhdyK1at6CKXKBMum6T2La7npZqx2knwjGPFSDoA2fXqJxZhG3YHoKyMKpYieos",
  "key41": "3cMAFHr9kuiQCRKWY3obHRTwmDKeuKdgtRtKvb8NgkrMtwYaj68bK2MDuuYk9vSyEtDzDtWZ5XmHSpfxfsjTNZsa",
  "key42": "4jWLtQyUbS9DUPQnKuU4cVq6y3sUHdiCHs6iTSrexbpxqy3oWFAbtzg8iuhY3eA9fAKqot7RiRUWPW52N1fVZme9",
  "key43": "u4QgMgxoN5ATxuEnY4q4BLL6czhJc3pCY9ibmkQx8DxwKL9h94iWnv1CaFJ2djbBaAkgNWaQ2kwCg6fAutfcL2d",
  "key44": "2EpqBGpphgmohkkEY3CQ2Cwq7XvDYUjVCcZ8Ph3FNrQcdFkBMgPvKwymhoqRq7t4A256tZ22G4Ekvz46MK9Nvvi1",
  "key45": "35S5rQMxq1zTWy2DfJvLQMNgh4KzYgjosUAx1G8iFDX3G8ntBi6QLepxQRZbsmde8yJpdUcNt91caru1q32zCqTG",
  "key46": "2tttkFA52n1ccrZq5squyaXdTukoSCdt4bLSwBXmKfsQqPri1Yhar5nBrYy8VnV22ydFiKdWKYB2goc4WMzJb7uB",
  "key47": "5E1m1igTesVzm1gWHo2Usaj4Xq8moQ1bLLv48Eqp4386Y3Adqkps9gh1idsNJ7bVi9Wy4zzTjTWouMH5mR8jy2E5",
  "key48": "eUhwtfQhH4iKCzoSvXWjQkUTC1NVDCbXgzTquv4a2ysjhVKwQ43wNF8KSDPN1yU6WwBPpSam5erDHz1gFccypkc"
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
