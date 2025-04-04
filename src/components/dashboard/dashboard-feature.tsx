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
    "MBJY3fKek5qEnH4gwuashc5apA9ekZPVoK29mbwrmdaMumEW5q1sXeAV2wsgLFCzoGRrxeL7U8uN4mfmsztfhGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyJEMeevDeNboQTqLmdTEnmDWtFZVrXrhLXH3Le8GMtkbCLi3riU8gGqn3bf7eZMQoDKeVSbKySqX5K5ZfN2xRh",
  "key1": "5PNdJGQbETkeW7tdGBm3C1kaDDTNK68zWQq5wD8mz59FRCUZo93cFZ6u2k5oybNnTahdwxtSG7GQ1N5RKDjo7Rw8",
  "key2": "3n4MrkFqVuuLuLjL4VEVXDQnDP2toyk3PSFG6YfLYz73Aip3civchtiYdYnjBKM5q1vZUJpTmiLCjnbFb7m3rug1",
  "key3": "55XP9B7AqVbpNyWMQRRci1EUwRyurLz4EzCFj4GA3Kv1KhpbQHCUQDLnxjnu9FNUcgrM6LQZw3znhbiYrgQDc9JE",
  "key4": "2KZhejDsqAUT9yBbFawJcYqernmoNYSeLmNT2DTuRLcuVESsKnWfBookmH7dSzUyftsTm5BqzXpKH6BXrUVn7ry1",
  "key5": "4Cpfwdpjn1tA9JNUaE8NaK8Jjva36FCH1B91axkShLnnvEYsxv1arUP1fDYT28XYeoFGV1arGmRrZQdZXgyMPPTh",
  "key6": "5KQpb5cGjd5gAWUTYe4Lvk5KbvqZQmmrtw2KK8TQeD5hzz83DXyoJbVfx8TfDrJRuhC2vH17iFMhos7GaEbLwtdn",
  "key7": "4TWLeKKmfZGkEzC1nMCdyGSj3iVe5prRu7ynDFTfV8mHbzx2YThswtS6Cogh2Rxj2bX1ic1p1dyEkzCQ4FXBvPYw",
  "key8": "2JKkENXtLv2ewyDtcvrod2dYbLEWVm6LBmDwujwAs4nJ3JH3NaUyErdFLo7xf4WDP7PeSLVzzgxDi3gn5j1ZSnuU",
  "key9": "54Cy2xRP86RiQxcavA3UXeQetM49bvv4DMVRcfQhc83aAuvTMtorX7m2vmtgR3NxaQbSX1JzTheU5NdVWgE4MCBr",
  "key10": "2r1pGkrznjY67ZhrieQKJTWsYL9bmjUxVeyAqVxsu7SxtehxTtw1mCW8BbLYqaQwFdZN6ciVFg3adaJkHNyXzAYf",
  "key11": "4d1QyvkwYaEJN16qAk7DAGxFPjhH9mh6iSBE2e9Wr1rNmWyEgeXjRim4cnPeZNmwXFmuJzBZte7dNfkWzLwpMQau",
  "key12": "iatYoGAvvfuvhJmPbYxi6XXxZRYykjZKV7oaJYP87TMVA6KwAWMZogjocKNRqVuRjhTzdtfe6wUxpEFzEEuhWr4",
  "key13": "4JjSWUqSyW95juULR5C5zeqHt1PrLgP8a5MBtaaq4DLLPk1VQUZurd2mUEos7jxST6seewwum2iL22wHRU1FRKCw",
  "key14": "4y9HBiX5g2NASFwwKcT9Lc8r3wZqzwR7JHsvXFY2R539WvKD1iAVUyw7uzqees5W99yr2YQWLTf6yzhU2oGQNKxS",
  "key15": "45HY5HYjHxQtTVqcSnxDRYiiBQZv3KNXnn4MALLcC3BguthhJTw5Jk5RHbmRbN2BH8QiWsFH5qFwhfyWdJeCn5Ac",
  "key16": "3vLqtRsq1tQ9v7nACkDLJbdABkP3i5qWqbVpbbnU3iazbUJ8B5BdfdvVetttAkeDUnspK6vAstqa6LY6nZTga8Gu",
  "key17": "5gCBgYJ8GWnfi9BduLMQeGYxVyfQLzQdqib6pxVrwA7NF3w2MaWSaEFWzCycYACDE5pP6VECUbwzUymhQy5ADE7N",
  "key18": "2KWLjn7GhNo9rsjmk6JpQK6UCMfGabRdydgJHsa5snygTgbQNEJx5VR77LVuNtJZ8EMhH3BZQSnvqDL2sKgYabpQ",
  "key19": "2sk3y5qHkETEbSwjADjv8515nuwyMxd5L8qFZnu5C12QfLpTmc8wscyij3JhDQqbQXe5HTcJaSnubQLRZ614Gvvm",
  "key20": "3tgmwLaMSMPD5ixCGsR8tX26xMBfxeuZJPanzNqvGrVWmauWiRjGLpmE4geWBGZabTTUDd2WJPYegyp17xMWcWTx",
  "key21": "3u7UKvHD4sCXcYihmKMUjDeir55QQcS463ffAzbVRUTGzLkfNR2bbEYRgLBKRxAjvs4adk4dRwn9SkPkHemVdKUV",
  "key22": "4TB7UP8ywffVDkkEqwsQxpAGYEZgvkZXLCnd2FJRfmu1SkPsUmrvoKvHcgQ25qZY5jr911zVASCEptuGzbtQKEMC",
  "key23": "272oXapDH1yCheUzTXHENUxpYpivbVbSnVcpsioZt4txkxXPifeDh1hVM4PMQeMvGZYa9atPStoCvorMT2WRdmhG",
  "key24": "Rz87MyLCEeP5vTQje5rrpVP3GYHnN41J2Hb3Dfd9o8oteNcDTFQoaypexog7bAMkyeq8yw14chMCJw2yMo35Wos",
  "key25": "5NjdtwCzXRkrigpfzjZENJceMXdBrPC1bweFZGvtpS8CbSF7TFBd5UCX9KywdKpMS9CS6bSW9u9bVSonbvPUm6KR",
  "key26": "3UqXbyRNYJuFbDiYUmwLkpL3umvbVfjP2iq9k9zt9CNaTbr2jTRkEE7BrdhK4qY1y54Y631QyKfCQuneHidaD1Ub",
  "key27": "2KeFTabYbskauCqXwFih4JC3NqexshGBvG4ixmNva4DZEW49YoqqwKFzPzMxpFNViptmq9ZUMFabau9kLnknL53u",
  "key28": "acTwS8J9C2fCSFYGSTq2Cn7q8wSHbG7MUsxAsH9Ac5M3Mgn1rMhMyy2gnNymvnBXgXvuhCgEi6z86cGkFNCPBn3",
  "key29": "4AY2vaUgv4hr7BtYVmge3t9aoieTT62Wz2FC6dbk3eJqV3Dc6yffVqVkSNGcot3ve3Y1aD2yAA5MBi7cpkpFjVci",
  "key30": "ZHdSjm897kMGVEsncrA56S8h4eNW9pCjiMJMf8eho7AsjtG4Q17XQJwM4gf8ojaLQTPQT8G4ENLuYhcxzdpVNhb",
  "key31": "5RyCXM32Cf1LHkwjhDjFYtCmSzoQgKxdD33WrwcjSBJJBf9VjVxA9cwydiz4sHQSipXpfB8iJHQhPzrnobYFWHh4",
  "key32": "5tBLpbayncpdQWnhxc4ENqKWujjxgaQPoeP9AtsbBJxSrJ29DS6x8vfs41KVS8vWrNY2Vt4Lu98Zus1xNmxodz8m",
  "key33": "2izedqMoswh1VEhm8hS8bUdzKn4mx69SojxQSwrjmsP8hjjkgPPKbmuUXjZHEH99o16PYkMiXnSxv7TZ5sQtLXuF",
  "key34": "3ZdZe13BhsevEoasZfdof7Qy4kJLHjxQhgy2P4mjZjUpxPnZ3QQKADygRN5DhtLiLdSFVnLEHLA3aSc9Ut7ZLXRM",
  "key35": "4MM85Q4ZbfRQTuGRAKwWFVc8PsqvXTHK6aF1FK54Xy8CJyHZ1TXAFkpTtx3CBnn2SjyEDKuPCimndtvetW8ke8gq",
  "key36": "rMTNvpQ4rkEBoQqYXQj5kkMcd4hFZxSRwbpB9N6qpvfXLuJ7FWWS9oeN81DLKGiZnBYNasnGbYMch9EdRLmaDpg",
  "key37": "ahEtpXTHwMb85iKoMM5A3WnfV6RAwTqbnBFqprAsZUBTM8sBUF6GQM3rfgPfbQbrM4bZiJ9S8iWdg5a8UXLevP8",
  "key38": "zSQ3UbwG9hzQCy1zyiuMjkXZRyaQCpBeQP2mKfth6wRVMx2uZfYciLh5vL95NEHqRXkQFrPwWqGPN2kvHxct66t"
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
