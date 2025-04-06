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
    "5st8uAnbpyrQTh5yJrUpzr6XwPuH3fK3pJegjAWJeLLNokFuSTcGLaEJqmwe1iF32aRWvetyR1wR898JoXJh5iVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEHuyxXZtUMPEAggk73jJsNoZqJUYHxNH2eo33bmVDLQw3S6quhxpcv7FaKPAtaTtQNksJNmhpWBu8TfG8wXMmg",
  "key1": "44VWCzMPu33bThCfNitL27ZkmT7y1dATieUbBMBisYvQTi3Sehw2svgvgvmz1GERT3jeecaJpRBN9z2FeBB7NswR",
  "key2": "5Q9416DJ4JgL1bc5sFK5DMbi3H5JjUbaXgZGh3a8jXjrFwDoRY5oDdxV2ATJo3SHYAAY9b4J6gyHHcBcX7ZoPfJn",
  "key3": "28UFBrJZdBesG7D5HLUX5vCM1cuDVqQFSGdXc6CpWBJDbn2eGUbE9LTZQqE75itWAjVakUvJQe299eDShBfiPfnG",
  "key4": "4tVx9cQgdcYiJtBdiBJLjo6zF7LuBxib3E7fpJvqEc5JNjKxwbZZzv5MfzmfkqtYerCrZA8ivfqdPrKmtcBSta5m",
  "key5": "4ehARQJTuhSstLJrGBiBixvoen6X2zncmjzTXRv6AYhHcJXMUSWyJg5ipUSLnydyoD43MoeSyJBvqUQr9PPCmdFe",
  "key6": "22Qf8bQF2yPo4bnLCWppBejm132vcKLJ3NkJ2SvpD8tcqsr3tHZimq9XBJJZJQGevMVfQp8d5YptXmEiGqunVBbP",
  "key7": "4wbjVasD4S7Z517HpHKxmxiHtQb3MVxXgXVt5MR8honEobp2ajfZAU6cMgnPZvoFngtgPhXVisXDBJD6gsRZSvNG",
  "key8": "5Vj7ZkTEc1yeU78nWtbnpsAqJ2eLsjxSDvm7gbGv5WD8TPYn9TFhQNPPBNydmFsyYBZCdeKBozcRtwgDAEUDi3Wj",
  "key9": "5M9LyZ4m8LhZ6PNQQLjUmV9HUXGvMVVDPe8FfQjPk6VxqvhfrCBgWLmYeFy2Ra2Wchfy6UjErNRKbtUgu7qvX7gp",
  "key10": "3aETBiDWvVtzoGRqeXpLAFkHhCWHJP55Kn7zZw3QGmKSGSrTT52A9P5P36rr73xwgyBayb3xZQmM9G27B4AmbwA9",
  "key11": "3NmXCFLauJThUMjN7mVgn8wtGNH297LcXawWuMtMdGa8yN7ouNcny4ibX47bdQPLJcFBY6k2qU4ycsTDqPCvtBqT",
  "key12": "3QbRGMYRcg7d3smhFGesYm129TxSgLeXEXZt38cFix8XLFK28ibKnRHwHxacRx8yjnqSnuFBKYY5qigPMM3Gn73t",
  "key13": "3uhDbEWvEXPUnUG7f2x83GRTjwcZcnQg8Dib6afa8RxTbaMWdSbsQXTwXcRAYXujRWVceDd5yuRNjgRC8JqcDdRf",
  "key14": "2GR4PY3ezPf9KfbSwyEYvgXnZUyYXVKFBa9sT58kNRk1R9377Fn7LxnymHBArqk5fqv6GXgc9tJGNUBe798SnbsF",
  "key15": "oqucfHEGWmpXzhASU75YQEfPKS1P5EPvaD7ZWbx72SafJsYeeyTgB4L9R8WoMP9seBwCcU8jffZ435W7iDp1ntv",
  "key16": "4x9NrZKgNhNQFTTedL2SX88iy6xuusbCuP5PNUDHQpTY7Jc8ksn3stRCC1FZuu71Q4WTxxDBdqMhTkjNBEVgzsDs",
  "key17": "2xYN58UPaJg7w9XKQ6yaSBF2Y3x1QthJXeMdjW5ypsoJ6GQxeyqaoudWC3hMSJFLBWFBmV3VpzUMo4bEWRfD4ynL",
  "key18": "4Bo9yLLaFMjrgPLJBC5sZpfYk8bPSf48QUs6SLk4wBu1xYPoVycw7cCCZh4dHYoH2CddDGS3aeD77FsdA67d6gnR",
  "key19": "42ZBtiG5UoPpHkus3oyA7t8JJERUQW6q5jrGJv2yWLpvCf3TRe6a9M9ThHoBhJqieLHUh3r2XSRxMPjrJxTM8Joe",
  "key20": "4LMiUWTnet8M2x4bL5PQ2g7bRxrctBKF2Pv8991Zd1zJBRUZKWD8zYLpD5nzLLKSXcivMr4FT2wcgSwqX9ooVd3t",
  "key21": "67CWhb1ADKAdaUhqLck8Tbwo1oWHECBqtaefFQBm17Ekwrui7BjGkH2okkC4UJqxfieWZ9HTxYoD1FnMHnAdNYr4",
  "key22": "xY5KUpqTpae1bpDF73rmak4TryxkeMpfwxmBncYpEfTiSmaYrueXUDBkWLfe5yUao8DbzSYufoUbYBZtkUifGej",
  "key23": "3792ej2Z7z7Uy6hiC6JaQ9BytHtj2cX3iBNPPgGZF78L43qBSvYvmWBD5xmUeeF4Ez1ey5gmN3g6KmYp5eZCfHqb",
  "key24": "5zHgwnbUbSEozLtyc6HQ9wtLDRv9HoErfPTjPfHa6fPZbtC913tFJbAvC2VNFiLY9NbsCmg97LtENpgzUkbkr2Ws",
  "key25": "4mx2ZYsVEeqy4Qo1RAuhmtvSM5id4TamCFZJ9sWW8kyjwzH3EnhiMzse5UoDfckf7GtAfhSeWJqYCCH6K8c6nL6C",
  "key26": "4uSZNiRTE129LoCR5BCxa7ecdMfZM5rnbS3ng75ANQxv16zAuT5XaFC1Z558VB7YdMMuhWtPzt3P2MwD6GZxCfFH",
  "key27": "2sMbiShyvrov5EAoVWtFUnSFHQrD9jBdaC9XbsqyVeJquMmZQcX66NsqfMiteC5NvuVBnUDXRaDsKdnxrHyw9TgJ",
  "key28": "4LPqMZ9wDnsUpHqvAvr9V23gBy4HfghVX9nE9DqaQAKiqyQXG9argkUKchSxYD58q2p5vLP3RUmp25cQUpgDyHTV",
  "key29": "54CBh7gMqJySF5bat1hhU9PNhge6eRr3dC7ApZT16kW4AdZr7WQSZhvxWDnaazWBcg4T9Zo5TcbWeDEuxUFJMBk4",
  "key30": "3A4gJc4wZgG6CWm3MTFAbF68ZFWAV8mLNwaGwYpzuMeUmweeS7C4qvKokxtBvxZhosqgtZJaSdvgKZW2QMdpftVa",
  "key31": "2Vzk9dsDS92JMcbZQye97CksDtVREpLAJMxZVDtsr6oHGVKfeMYz5seHDWKctdvDKpyb6xcZ5PAEDmfHuphiLLfH",
  "key32": "4QtjZjccZNbJipVzodyJJtkncYp7uXALKfgwA7nTuLXU51MAFwinH4qhS395c4MdmZ1UGxtAefjuEDiV9KTjzX6m",
  "key33": "5JDLiTx4dUXLN6YCuEdMworQ9LPeWAzCKyKzzgWy77zVBefmpq7CsN9wcfvBHZy8QpLvXByJVzXURjhfRTR2ssbG",
  "key34": "3rc2KJee2AWTEpXytNJy3z7yJkCgiKwyvVUXFgZoF4JjC17cf76u3zjFjrDectyd9RZ6qMNsYtMH3CQrPpBKkGz9",
  "key35": "3YpJPkZKaTprh7XpnjTB72znZT1iVJX7DerKx73KaUZW1qADaSTN7RE8eatMAMaJL8BzC9bmfz9Y5Bh4jMn2CbGJ",
  "key36": "4utnAeevTvPnQxyaUe8aGXbELb92aKFnEsU3oq8oPw2CkpsrejYhsW11vKVY9KwxQPAsq4THb38q6kMbD1XYVxLy",
  "key37": "2yNuYnGZU9wB69iTpo5maiEqLmfk74iwZp9bmXu32P9nm65h5CrcAVSdv1haFSmxcEXRSy8H7mPJjtcG85whSYot",
  "key38": "3M9TdePYYRy75WPxNzcX2xJ1py8oJdWwSmWMv98VzCrDjrBBFQfvYXW1FWWNLLU1gc8rnRTzVqsCAcFkZwKRjRor",
  "key39": "3mqzn385UX1h1B1JGTmrwGGd27KcbH5R4zXjPZCcQad5DkoE1RRPQvWh1pbZy5SL45rpRAzVhjQ3G3bgkgC2aZCz",
  "key40": "23bA2gPqwsAuBFK31kn6E6KGn49rqJHVBmKgxAsB7V6co3PkSLAaNYeBPtqw7YVpZATYU4s7rnvLZmybPkzGqd32",
  "key41": "2cbyfVFX3prErowxmwdHM5L94HzfjYPaaerVrM2YYkn89B426AuY6jdmoFpavct1oPMb3oSppT9n4FisZCuBtGZK",
  "key42": "4pPegdaEj2NFXtnDR3Ahb9yTvS3LVeDWPeQ5FG46ALC7rTtVyR3Tcprqmt5uP6wVeHU6djCzP7DH6dEob96KoHqd",
  "key43": "EGdUs2v7zLRibV3GaS2tprbPPJrJjSXHfDXSd6LyQLVsEVwhQQxTTGH9ucLpXTquZ5u5sfx94yhesteQqgCD1Wu",
  "key44": "2DmsiwxTC6FH67wzjnc5AXGgX4hHVhWmAFiduPZtxnXwEzQs9468xqvoH4VxSRrYte4Nj4CVD24wUYjntZuwuv6o",
  "key45": "4MYKZ7Kocdiv45NCMXvs52Z42YPaZASVTnHTmnf8gpZWYGHe8QVJA1f16LcWjZ46ApfLGSL6JjJ3Dxp4uojvSLp7",
  "key46": "nPmBRzvJwDWos7HMrNx6WsAuRxqJBsRNQJPDcZSDrbE7jHkYEcCZiAq1ahMpkBri6stM61BfH8ktdGD7RTVM2WA",
  "key47": "5ZPTieytkiBYZ7t82HdkJcKC9qQEdhuomtmUYLAADUucM6Jicuycx2W4K2UUWvEFxFMNbgv6oH1cWoE4TSfkoX7A"
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
