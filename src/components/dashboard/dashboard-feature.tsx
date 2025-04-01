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
    "4i8Dt94i9X1JUjASRrhY9uU69Fq96ZBvegVe7Xj2TB1iF8v9wxbbSsvNmxAT1rLwMwJgk1oX68SYLQLewv8LRAxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uok1c51jgvrxa6krkoU6XV91tnEUyYQvY1cBGbjU5BcdxM7aNTz6FdF1MCyAZv4SMj82gH3YwoTew9bP2Zz5FsC",
  "key1": "67ebxTwMFmj9aSaF3TVzmc9pTn57Mz75UVzEaqe8tWhXvdKxjEsxrqRu17v3GfTmEkUvCMSkm2wa1Ya7S9HpU3xm",
  "key2": "2q9r9xZCyYUKrakHbd1QJHuSffnpxhBYVkLRqWxd1kQpi9nbBPBX1bognFhfVuki4pmwCgh1rumhjcuBj5XvmRnM",
  "key3": "1nYVtBc4WvCh1UAyX15uMUvcjjtQmW5ddJTYYTjatmhhjor4Ww5j4eeYeyTcuvA1oiot7mVVfHwAKrsNuzJNwKS",
  "key4": "jh6uDKGbdu5xqDkBHih7GaoMu8mtwEuTUq3kJB5u3kLXurXcugswfxgtUcxQKCtZvZTuhfALSDXR2H6oXCYHfBc",
  "key5": "3tRqwFqa93vxw3BjcCfrUqqgDkQycZd4Vd1sfr7NpfpFhkmV1eb4iQay7sEpWnZvaNP7F3iyZsGPMySWLoEoSZ4s",
  "key6": "4BGGhb9zCRZ4mCBUAngNFNwS3FeZjrcXcxgfW4HtXPWcoHgQYFnFgJppgnrUsJcVRzYNuRVzbgWVVaCGdbMz4WVk",
  "key7": "3n7dts5MgUxfGNcV9h3jhP6j22dnKtep13fsWdwCAAhcv9Yoojot9fJh81C6ht17hFwCjiaf7puYBtXcf3zo3wv9",
  "key8": "5ZgEVQ3f3XjFSyJMbboQmftHuymz1xhxywVdMiQk1U24mVx8mhJiENhw4hXkjRFrbyJoqoiR413L7s1s7YyCwL4R",
  "key9": "4ivkd3JStNCMbBivXp9ebmdJrSNgMnhTuDnXTqNCpzDnRMyFMiG8cwzUM1jGrRX8MjbNfCDcDmzhypv46wB3WEP8",
  "key10": "3ztrhwy8RskaCxNKzQrg5eqEPhR9uA8wedgRb228ZwKvRQyBYEhUKyxW2UC6CV9Hc9QNRDGrhn3Ae96zUfwbUxos",
  "key11": "3EMUnonUPxLTuTVJ2sXALQSx6cqT2DZJP38kX24TgVTQs84Zhv7QUQpWdQUd9WDBSMUfEjXZL3SMxhZ9exivvTy",
  "key12": "5MJ8YPy4qx7PG4o6phJ5zSw2tS3Yor9rcKyRdBt4LBMsAhgELoxHmUfvMwwgJGMtEVZ65UVYbVcyoR9THwn3gFAz",
  "key13": "5Eur2QCruu1Lwh33pLqmvwchCv5pRGrDi4Poe87cPqpGkzJw4n6MxsvV14RZN6Uk7oSokESLdgygi2HgTtidsCoi",
  "key14": "4ZsxAdCsS9J5HkA8fV5AQYUXem6weg5VzEdcwNQxwrzXxHBkjCqHhqFdPCoJ9uqTmSzDyiDarrrp2VbkUuK29Qnp",
  "key15": "311ddQL2UAmAwEwGgAYgKkXkNc2v2DWhZgRPkRUMKf9EoBEownErNdtkt5ZoyH6r5bNtjbUfHWVciGMnGvwqixQx",
  "key16": "29riNkYfBGqyY45iqifJFjgpcyUEmCU6PREsa7sU7yBBgX3FgMAYMVKW8mPjyJxGFhtvoCyuuBEE942UH834zLfv",
  "key17": "4bBf2Spx9tuB5qURkae9ftR6vUajSDhi9P11AtNqAsM3FwutMeMmneCHVjMM8jtBf29VgdbhK1eLECsRbyW2147e",
  "key18": "4qwCdijJGW58r8xLEnqaDY41QBfENMqjrRZYUEUCdgyQk3HqAecRJgcGcw8EotDRg3fYSJQL5zfyQk1rb71RCTTY",
  "key19": "482RgL2fZ4sGsoMbezVCzQQFzsEwjva2GmKcYNs3oi7qcmzUVW2e3aEtAwDe9PFD8AqxvV8roAp7zMkgn32b9pH7",
  "key20": "B8Pq5eCiWDy3uL3iZUF4fmNbdwC4TNRCzDLqvsX2zPT7dCN7RxhsQ74dF2Dx18jrvjSUJjtKPHHouU7STPHHBhf",
  "key21": "3iopkt7GxwRsiPi1swjuo6EQft1phLuZDsUSXK8VveLacisEWJcp7X5H3ppHw3gby4YxnvzdFiK1srPP3tNWfEPv",
  "key22": "2jpJ7SjLLtCK8LYboLP8meUFeznZqz3794h16DUws1H8AzUnxxngGPt36fczdrZdCjryjzRmfHVD93cgh1RZCqPc",
  "key23": "5aA6EwAwd9odo2QbZzRPz1mZjpCoxjJxsVwQXKC48A4Ppjbq3P9SN6piqpJTX2UrG8BavcSTkpQscAUvgPU3sNN9",
  "key24": "2P1aVkZEydrehn9rct5iDsnU45moGuj2hNtWjAGcta5pHVF74TprkrcNHEQxs2SKwp75PoDzANwYpCcnjyXsDhXL",
  "key25": "64stptyHS6jQuNd93FA5Mp718nRhmiKc37Gh8W5g6D4uE4c6JpwRmYShg7EzLrVgfG11KFCT2EKZZahuzm7NGXM",
  "key26": "2NcZFbHa5ruzCWpN8qQKpF85VKgD8YgwVtRExpkxVShWqNsEmePm9d9Uo7AuCYLJqf4TVP6DL4cBrjtQJRYKLycy",
  "key27": "2dFuwA4hKi4xin5gXU8LzJPTDsVcXe42dc4nVUrJab7BG7D9XVrHjismQnYfSPnFxhhjhBWT5YMLDdZLvv3zc2Qj",
  "key28": "5awaQFz7oni1QzSactxzt3aXaog5o9mvJ5Fg21B12Q4xGF4unAdsXe7Q1dzxWXvegbFqCH3ZhXYrVXnYf9Vdcxz6",
  "key29": "tpnUCSLYHqb2LzpVDZTi96NHWq5sbJjaAyaWad6XPeZE5ZWXriXjVFPNiinikV8M3jeCpSe5eyTHUBSuyZfY6bC",
  "key30": "4AjmQviMdtx3a98hyveBMPbkBQKhD1YirT2wrPS4N9mXnXjWUzPFV19m3YHPiReMazLQeXTWLxwFNu3JBoeb2Wa9",
  "key31": "3Ck9X9WgaUxrqF3ZizU35Z8yFGyuf9ipkBCULnrGvcjnS2iVDKhyRqFuJkTAH8GGFQ8iC3YNjZVQZVhB1QCv5LdL",
  "key32": "dSXQG51NdXQWsa3AA8LSDtDzUAyF7wbzfrCj1qYXcX7zrzBv1SLqFe4NxNWAon2krGND3f2wVTUStBGDaMAKzXL",
  "key33": "3tKmwEXVJ8FXZjJczs5PTHNa9hfpGE2GJkeGe11bFZYKZFSEKXSgF5a9Mo8dzsHvdoWatXARRDQTeLJTShmTQnH9",
  "key34": "59Vwzv98qW6J1VBUZV4XVvUqxx1T7Myj3SFadfnD1a7o99MnDhbLAUsZxnG8c8xmnKaaMiwyNvTkjhoifUomo4gT",
  "key35": "4cWWPtpryVi2tZbhJy8QrL4mAiv1m1zpWH5THvsPx87gRHJwk8PAe1mmSvtWD7MwzjeRWjgRecAG4GKwTCBEVXiX",
  "key36": "3jQXeg1A3DjdcyPZ63Dg71TfWLxPrWT9uXPhv7mnGZoZ6YBJeevPHZiWTotPwmorbR1hfYo5BwMQgBuEoGrP2Nwk",
  "key37": "te5BVFSAqmbsca2XfbUFPDaVKJWbHPqrF56M8fZMzkdTqcx9gVVhL4PRT7pCkgYsukQpE1cVHfopMx9TXbVKjHA",
  "key38": "2JY6QAFcVejZWMvggUR2MsTqC39GfGkHCmw9raDrMezXo1QYUk7ZKsK1gaUAwea8fMmgRShJ49Psc8zZU2sh4wkD",
  "key39": "5MGgRpV8vr7wQ7dJzTr6E6Whp6QTUWaLMAYRGAFqjSqpR4saEqC5NEaJhZfcLMXed8g6Ra7kGTf7bGni1n9K9gPy",
  "key40": "4dxw77fmuvJp947mo614s2JUvx6nZapLLAhp3Ybx6d5aPbfNBHkedz9fWT2bkBz9FuoiG6g1ut3De6EYgQoEVtjz",
  "key41": "3r5JBFHcMRSA7B9bCCaT9HvGtAuphZPB59sBp32u9HsmcJJLGZ1qwoJQ9wvy3TEf8LwN6t6doJ9nEKgMN8x4o9Fn"
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
