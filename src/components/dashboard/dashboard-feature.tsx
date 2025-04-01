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
    "5GsxecdUpxMmk6zmiVmJXXDoduLzf5mYwq685ChbKXwzNZ8JMsKf9mVj4U9YabuQrmudMVbqDsLMtr2xnQ7GzcsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRhaWXvV4vh3aq4d9Zoo6V17Fe4YTRPfg9GpvBssBLeofAC3bVmrNKqpju1TE3TYMXrrJSeYM5UUsgxCABGLfpq",
  "key1": "5D9hGDUGAEbvzSgshomkwz6anNGWb28nGmZbVHFecFttrCJqpSxCX1KbCEK7rgvU8UfGVdnwTvSK5cLkughAksdi",
  "key2": "45mBdtySMLt9MqrZRR79TvahSag6VmMBpGCZ1QVKPaidYEuqNBEDU9aKeZcWnCGK97WG7f43RZsgDRXttn6Ue2gZ",
  "key3": "3TuA3f6Fn3Nnwtyq5XP67SthKW1UA98XDJBS8XbLasJGtgeuBRzrf5RzUkzamteaCTMZD7hiXN25CkAok2hb6QXq",
  "key4": "GbRxD3EDDRLspRqnTWcKkrHMoP7u117vTjTRWxfxchoBpC14PHjabxBvQc8v9auSMt9HxryuSjyQ6grcuFNxbNo",
  "key5": "2zxbswd7E9fkoVK55WXeoSzKqWvAVAX38skWZeDL7CAp2vDMadrKzcBbo5UyRF9QNJ9KZT9WsGCXPZdSMVFzZd3J",
  "key6": "2VVYyLdCUPr17Ld4GEJoZ6GFTE2NgMYQxAw759M7W28Dg7TU1TYN4JRWfhLRukJrAVrmh3Bihou7bp8MBCpMn8Kb",
  "key7": "EWenhsXQNdKbhPXWMBUkYS8wZYbvEr3Z8GdN63Z53NYa6AtJ7eWGHGXfJsBq8Qz3kL8V8EEddZMNBPKE5rBTf6M",
  "key8": "33cmGC3GE2td8mPdBgkNyasDMNZSxkvbTzRLsWHfEiXofwiJVSQ3vp2kBycdozp3mrAPGaH5qw7GhyxEiTVb1G3b",
  "key9": "4LGFp3ohbSgfmtA1sAe5BtXGMJdvZPoj3PNNYNZgEarHqZHvcj2W6KXnxM1EDy5YfWVyVehBVqCP8qH8RcDCjYQh",
  "key10": "4ywVaeRFwQdRU3XFwAagM66GyBWy6sJHphbo5zaoKZS1M2aP5UAR2H9MHTHFHyKvJSSasFTxD9yFWKPGPLbAuH72",
  "key11": "2ogE4bALHcydBMKHqb3mAkjh9Y8ekxKV8NmdUZS4kmneonLX2SmaLC1bHnze1GVR8iWK7p9ZPmLJxv2843aYJRQF",
  "key12": "j4pwU4oSiuHuQ6voDfnwfMiDnsbnDo8Bz6LqxEPPsa4UDbRLoBpbRSeoa18yHV5GYbGYZVdD8esokdvWHLmbH6P",
  "key13": "4Da51VBLaf11Ne2npBpwENakWM46AGFxM9UBhihNKCARquhtuWmvjassYNP93nuBXSjWDgUshXUMMp3JZjMQ2pGs",
  "key14": "vtXnNG8cxpYcH3xG48mhZNk7WQY69UECn5P448QqbDxuzgFibBTZaWuYA3whbkFTZLAAcjuT93kFvMMzKd52b5D",
  "key15": "E71LnrhKeng5bFQDW36z5kjQSBMnPRLvCqBJLC9X1PfjDR8GK5TncC3HDbZjRiJ8GXD8UneGyjUibpjpLgNjN5W",
  "key16": "46o4wexWu9PWAPLV6JKC5K9uroRcyEapErHRBaY4K46CZM6qCuPCD8qQX2Y7FnLV9rXG8koTdMZE5oTA5VB1ibhF",
  "key17": "3pjiMfoabG7BRzjXX2k1pjHwFQMr892yBETe495fGNcogkaSc39UKJCxtj1pgaYFRKqRBKTaC23w4G3y7uoyCA6Z",
  "key18": "2XWPMr91SGxsPzFhg6TTA5vzhEzgfKTqbWZBcWByLZABmQdWLipQ8qSxouyUzPrgWeKLxWnHouaBpnx1eAURQiJ5",
  "key19": "3Jj27cvxjpSjAQxsjBC4rq5i3dqb16K2gr6iVbL1YuoqT1fXz7FLGGUDxryUojuHorXRaQgP2zcN2uR8gV5DNazJ",
  "key20": "2AFp1qsJ9xrR2Qvb3aeN9rNRbyKu9YPPMQ3uEyCFoXpZ2JqBXSPZ5RG8qvXu9YDWzeTxaQw4zo4tFEv9mAXZuj7E",
  "key21": "5Rhtfe5geJfzijqttp88DiVpiUds93AbWBgkUXzFVc4VHZZGCHQisEBpMPkW4Tk2mhPha4J3zGCyxvfuUFiZToKy",
  "key22": "52KPsxV3i34dwCz7dQg8FiCFm5Hb1nn3ywH8kMoD9kDeQ9usJSdw9zCLunVVFM3hjte68pE3fkv3pgw2dgnaWPrf",
  "key23": "5Z6ar8mUGnPfqzPHrmsE6f5to31nhtE6BVXBcy9cBxQcTovWAAqbLp4BiZ2zPQPKmKf2YXPqpHBHi6mnifeeJsKu",
  "key24": "3H9bGukPK7RgfcPtDc3RzhVb1m4GwuXzechHhyc2YJymEyvXnKsp14JcYyN8YNqLYVgKTi6c9dPc8MFKbFBcaNxo",
  "key25": "4dDmeZtTNGgPjvz2VT4w6X3guGs9pwJ96SAfsGTv9J3DEJTrbYdztZNA5YS6LWtfweH8c5nUhBBt4WjQDcFo862f",
  "key26": "2gUUcfTBjq8oLEmx5BEZF84u4KaarFhqNb6iLzAfHVb2nu8SR2UxbcVpQcXuJWGq7NH9zmYom9NZjv8DhPGYpAD3",
  "key27": "2JvTnBaU6NpHFc1e4FnWwnGWPgYVUDwbwaAu1y4r72PhVt2e2SbabLqoY4ypQf4sYKovzdw852xpvxLCpkJvHktc",
  "key28": "3hZgmz7znyPCjvUSzCzCpXhsnM9s1fSiAYcLps7EUHw9f4ABSTVi7Ecd8MaQnAUatqqUYBJxD7Uq4i8ueg7pucGd",
  "key29": "tgQJYb3YbuX3qncbekP2EcUf4wCa7Do5N6Ym98DygJFdpQASaHUreXfn7Cbd1MCRUcdiypt6fBVzb649eBMaWmS",
  "key30": "2z2ceW1BB9dV4sXmfZQiJ7vf1BGW6yBhLberV7VmjF97qZurQ6uCnaVJvTfMcmygejeDH1RijtxHYK4q2pX7tU4F",
  "key31": "61Ep3P5RPKLiQq3qFDpJev1PMmgqQENQ9AM4kkt5tFjLZBjyGFBgAkrVxMVHSJVWPn37AJdPMPJpu8ZenhcTTMdd",
  "key32": "4xAjUT4dq54DJUmjm2A5PMV4SBTVuywsFEaCyWHg7ZZmt2WXfwA9WsJHEDyg8Un4vkdnj1W5irH5H8hUfgxLierV",
  "key33": "5rxaqiweqv2UzRAr94aCHzScbEv62FVDrzehKHMwBpPCEx8F2U2qP3eUjFvCSbD6iQBCVV5DTfdGpXbdKpViHdbe",
  "key34": "5WPtotE2igjAY6j2LzfdAYV5F1w8ryKwVWNN1wzPw4iEu8CANDngxTpevLEq1TWPa6XZb5Q3dMzhPNVKb96H9qqt",
  "key35": "5m7dXfwxcz7NNjgy9Dy58oDUVLZ6uHTkezdcMV8gkQRmQkbS8BDfQUeML9zzMhia4jxeNHDc3A8gffVYXx9DiAFh",
  "key36": "4WhAdivJzkYYEgELd6GGEgCusKjGNPpkcLCqQrXjzAvEu77JUXAtkxTMV1UQaBFs2aR1EZyxJH73xeotZsRz7BtB"
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
