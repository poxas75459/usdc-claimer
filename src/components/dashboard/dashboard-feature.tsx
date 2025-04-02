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
    "5LDBUUy4YZwyh1vcPQQqDvUxyaF3LtNACeUsgL7qctGDsLNifoFvGYsERwVtvT2EGg15eJnFHdMoYYF2gTnYzkHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZP4Ve6wpdAx726kuFaMRcZRzqUREEapZVC7yGeqcrryqtBjmvVGWnqniHjd1XLuLiv3f1fGNaJPfozSS7LKsvL",
  "key1": "2vYPvL4BJWtWtDchLGLw23t3jYDPfrLCjW3te8LgPjfCqEjzQPQPv9Fu8jJiUdQwZm1Y6DvFr3tbiuK15WsRFfWf",
  "key2": "51jWmgtjqeqMpJy8jYLQXJe69Q61na1AHkwpLWtq5oRi3jRDJZJMFjuoQzhTFakBCFrrHsgZKr8AvkacLooxFxUd",
  "key3": "56H9b73SU23iv6mWf6py64et9rT3z4Sx8C8Cety5S781S1xuGxF4MWLdosqBSDwJP7RVa9b3YBBeEK8GzsJNTA48",
  "key4": "3FFU3ueHHuGE399AMLfFR973WkuAbSHPyi4CXAewQUZ5j7w5nQohAXxrbMC6dR9LfjQq7TaZBWgi6vvJj6CKw77z",
  "key5": "5SnvDjw65QS5FMis773RuwmDFKsxGwJjYbgGQGStRhvZKUEHfsLSKre6ZXmpu5FQ6XA3kzAn38K6GRRECbAj1KvC",
  "key6": "ZVvmTVtBLNiew4pW1UzUfKWzRXBwjkBTuLXxgb5fUHJ6WL8PT8HmhCoQi4HgdEvTpBStuzmc9Bcw5pBpZzVa67g",
  "key7": "2tqvqnuJYtcwcKCe2daPQ6745XNrKujpSm6M4KoEWPHHnA7ZQddAHfK4HyhdwJsg6o675PVkKG1L6qXhNi9wPjWG",
  "key8": "59qBMuQCTQy2h3VUFUh4rr8mPbCuTn2Rp8ecDjAqJSK7Thi6Gd9EmNsnbDEJxrZY6apN76drymCE3TZPmfcL3z8c",
  "key9": "3WFNKR4iFNwqqTytSmMVrnVdsK6QDT1tu4L1ng45ENmEc7K6xfa1pUE47q3MDh5B3dpTo3Y4sFtyU87zNsigKjAD",
  "key10": "636tbRovSLxsxuyF46qz2GtDBbXGhbn9nsxQkw8psbkjarVkVZ8dngVtFUZri7PGajJAyTpm3zXqAqvL9dDRvpJB",
  "key11": "qWZvpN8gfY1CurTFq14MsjFapB5swGpk37qvD1pPuembzUJkCH4z8ReXtpeYYoVu8JAFpqFyYtKkXTKButvBMgP",
  "key12": "47541npYgggoFZsgQorZhGgSw13bkQiWf6kP5sbq7Gwy13brZhVG4HYooYUpFPaow878GgpHHKwR43haELV2mPG7",
  "key13": "64KSLxMaX4Gx3jpAEs7yTRzvVsGtix8tXeAAhL3G9eQAwAmpYSBjHemqMY4jyc9RXkcjBVUkg6SQuQdgDQXTBkYL",
  "key14": "4AXcnR9taqMtGYreHXGLu4AmqG1AEZdCyN5M13eDkY468gZSvmwiMAZYPSGbZuHQzpajZBPKMZrj2dNR3m6ULpCb",
  "key15": "2C9n85NbthQsqmH7U2QSDbJZ9Yc2Fx4xAzouzRkvWf3QRmRMja9n5USaPpzuZ6EXiEirU8sCGDKZ8NwzL12LbGwx",
  "key16": "2GC4tAvezESnbVQrBLmfgmTVgSof5Nuw2yXXuzHFMnZLaRoHSm5cXTp32HAqXsTd8cUvL5wiE3jWC4RoXRaE9LuB",
  "key17": "3QL1QdgjAE9NmhDaDUSkd9qXf8mTJfz2b8o6gkhbUwNncMrsY9FiaAKaaHXRdz2daYamrSCz8gQLsjvxRtDK51VE",
  "key18": "3e5i9XQFuyvMSU3GcPUDq6157abo9mMNQAikHX8cm5JE7TJLi7njqd8GWhvyNuxfZ89fKHyeBQ7HaB8EeVWxWP3g",
  "key19": "2WHKBx9jxqs1zWHX29kA19AHkMiSkcm1vr747gcQjZwQmaD5HwK7n6aBWYXm6yUvjjFcb4Q8Xktfa1Wk1kq1aZjJ",
  "key20": "4qS53BTvjKrL3Xehd2esZjs7nB7RckKQpTvxsiDqqLiQjJgy7fajgB2twa9XxwMEa8yKE1gpwJEMHGpRUvQ36PhW",
  "key21": "2TbFLKGGinjZVShuAqq4tGJyeyVWdATHuyFWUbSXUtxFv77qZBTETcPoMhY8bJURRqvTGgiymoNMhTLJPByPSCNY",
  "key22": "4KrGhUefWPtnLtEgT3cgAPAJanAFLtbAnQgk8bHTDVVPRAbFQY5hXZywPMrCM2yht9b36jeWK4Dehd3mALN7uYTC",
  "key23": "4tKFSMPYdBa2ivHkMS4qKbwnacBRkoYX6mqceGC7dUx3xxwaKqC1LJkBfY8VpX2BGsznt7fD3WQm7thV5fe6mWrD",
  "key24": "2SwqCZ9zrJULpXKHgHMx56XVMMKYBdKr3nxiV1taS5hjKeG3jHZpJbxcqEiXoXrGuoVKXTajcPqQ4VzoEpk3r2mb",
  "key25": "d8wqTkoPARvJgZX88Kiknoi4tbdS6tvHVd1xv9zyWHwazr75HdjmxWF8bj6fvLgwmjjSo2ByhJ1ASz88Skt6DTy",
  "key26": "5uHbrgL5zGEp2BtqS5ZQ3qGBj387JAs3WozEM8zUHm71ugDmZCtPz3Eg3PHBAYs3JQmLsp3aNyztwqdpZLsYT53t",
  "key27": "2nxRkVogLEqHyySiUoaJoDLGnuMQv6GfqhLZ887J8dcVKCndyU3hS9BmDndaboJP1hzRKuQuJ7B2eNdW6ENp4Qxn",
  "key28": "5ApZJ7dWxj1cbW9HYnmfVDg5LD9gkZp4yYht3wPPF53ucvPaust14wz8gStJkfurow6pe7aqXbN9v4nPeURghB86",
  "key29": "3gVvsXCvsrsyWzbvUFoZGeWqN2aVb96UK4LDdBdGUb23sjw6bFUjEJDJYsq1SHvN5VHf2GJajMApkkbyaFucENaK",
  "key30": "3i8Ysa4rPk2xYTDE7JywAsEUJRTFakud4XPP1JxUjMSTkWYfXS5wx9ZxgkJX7Y3QdJ8fYiq1LFjNPw7wA37uz1G1",
  "key31": "BxRX2Kw8WhUTwmKuJTJ7MJaXGakDYPSbcvw62aiWsNRagcJ1q9ivDMuKQyP1fwej1AdVQygaVJbyS1KWXEHESiu",
  "key32": "3F6dYNL9v2Q71rfWHecEnEaezxGAMfwxqctcQeofu64VCojvMLzjToXioHhKvhQt5RTRAcEC9Rq54X3yWojkjyNF",
  "key33": "2sCGhfDRM7muCuSQoai4381wqwUHsn8ExDSAyM921EHhFtEspCHikJFURNSp3cQ9pxcjEXG3oj4zUbFxjJWzekhe",
  "key34": "2aKoqqNHdjVGtqKFe9JWhH9nX82re7fBr5F2vDYVCPhwNSkv5LyzxPtxqPtHh87em1D9j8QUqQzNWynQYTgE5WWM",
  "key35": "QNFXCUuu4iuvhvciwqcZZvQ4aEHPYSyyTHze62Sgf15oFHmMPFsxAsr3HmKiA59LGkgLuXms8uFVSHhadb8C9QC"
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
