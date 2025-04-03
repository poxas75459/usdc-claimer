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
    "5S7bQ8U14EGrJuSKWxYj4Gt4ugMsaqhvb1tiLC6oUJzxeuf64rAKzT35AYSBdHr83gVrcjkARuiGWQoddMZcZBfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSkp1CNJCdJZeT9BSz5dWY8Tdc2iP3mPEUjFTiVE7o35DU9LtbdGgFkhvkQkhBjzHxtbXNLPUMq5rYtcTuDLjzL",
  "key1": "3eMB3kvJMjs9sjggkPzS6RArMgmbcBV1HnKnYGGgeBLTRzSSTrWmcq1HXpEC357LYZPc2MYeApFL1RHGPe7KkQjm",
  "key2": "4mEKZCjxFPB8jnsC73iU1kthdmZpyh1W36PbZjJXbEjdpoeQ3n5M4Vqvqg55wT2A9jeRT8rMmK9mq1PWzgEi5txc",
  "key3": "3qkaqiidZXhZkQ6Jgk7w1PmHQxPoNY27zv4uJPR8bhcfRpXT8fWdsXNU1GWiJEgcjj5CFgmESgGMFJGfoSURAzzT",
  "key4": "xqmkUcPdpLP1BCtUbPfQT2tGNgBy2KSktcGr7B1FfMLkjXUYrWyjNLxntTRKyNySNLcRJiqoQBYVW8jwU7SANBy",
  "key5": "3PFMLg3BKnPwvqyUm5Dk3JbMUDJeFLmyvN149sriTcG56YxhDF8ojyPAx7xiAXBBRRjbh9rZAp22Z2jWsA1UDB4R",
  "key6": "5WYEE389Pd8bLJJJ7v8FJWSAYfeEN8FSeVeRqvUFDHM7kAJAfQ5ryGrRzsjHFWqjjyXZ2B7hhoxXq27QNPPz7P1U",
  "key7": "2QFjCU5T4B7VxFaJXRD6r7UtQFkD8iKQMwTLmkkxNb9eFTi9eL37rStqKZhF9GcgPeUEAfXZrcLWxtf8d1gMWW1Y",
  "key8": "2VMTBBazzi8zttYmHQxxx7Ye7iHSQBtPr25QQW7SSYgVuYZCffDCuvyd61pWyfBRK2AxSN6hem37UgX7StTTTo68",
  "key9": "2k15z7xo423jRxZSZXb6Xo2PPhXqcMyGBamzH7N7jtkq14AgPdD4UVNYHFXku7D5kFg3p9U6NQRWL1q4oRVG7xtH",
  "key10": "5a8dFhzACgJJC7XcUZx69d1cG7DVbSbqdsyCDXRbEzjGGPZzPpV7LJgDSa7rqnYg6f24mVChByNTwvW1LYHMo4Gc",
  "key11": "5PxkSb7tLpKVE6r6w7RJNqAabBbh9gEFCtG5dnW8GXjyJ3nbnacFS4AY1Je6RT2v2NNohGQ68tr9d7hLzsL2PShj",
  "key12": "4B7AUk9hxVPpVHvELL4q2yQ5GdBrKAjFHL4ZEjQ8vhyjUVJn4toyyjhRmpAuyUSz6SSNjWFL6qa1JSuRPdacnCNn",
  "key13": "4acvxtK9JGnSbHBFXterYwwB3HMLx8YDdUHhCm8Li1QywnCUaQpoSfs5TBaDmEfNyXG1y4NXqtdt5sr8Pq3Ks3Zp",
  "key14": "4o56K7SXyrYhfHhXxRLi1QrwhScKzah4enhHDvneD5YKvhGQBRVQUXHZwLyetrcVUZZr5ysPJepp1EWbT3dHSavw",
  "key15": "38EnvrWnQ7ar5aJNPp1VWMWa78J2JfeDC3Ws1i1teqvsXLkxinAG8jawAFBzY5yaDMCxt6XkD4DX2yoYPvwtVc5V",
  "key16": "2UPnEhB4k1Ep78rZ3xkbjSNgzuCDUF7RiDfGW1tQhy7tbJtX1JxNnwLixDE6xKt6mzkXigBikHAXCnWi4K8B3RFd",
  "key17": "2Ckxz8WXVcfWtMaMuY4TKM65gtVaNoyK6HxbzEcYBQEUa1S64RqWSQBaoVq6TTo2YJJK6iZ3JYNf2yKXhRmJrhGA",
  "key18": "62kQYo2ARrQRACieg6vXMnWKp4MseC86r7dg5GtVBXmGWv6D6VQANUYD9NM5MmEa8uVKschnm2TjVZbk8s7HASBZ",
  "key19": "4iw8Ag9C5rkPb2rd6KYF34N39CodZoioUuhmMYH6MapTtfdqq1EaxXSjWP8zvXA4NUkLZnDMDSkDnK4DCUm7asrP",
  "key20": "4dkaSPPr18SsgywLHMk4sTV29UHQN4W8vKxYXN2TwL2ipbiPfFRsPRHTsNe8nzZ4YFwKboJYLESHuPLju5izRXGE",
  "key21": "274CsqcpFFBxsQYEgdiXoVxJHsGtZXvq8rLk2YQ2QXgmY4i6dZAUGzj2WQhdErM1HyN2WN3BeqGXPA8SDyYdTZ21",
  "key22": "5feenACbProj7DvCM87KwcfQ5LMSiCShFxKapS5kH22W29EjMm8YzkF5t4viHpFkeJ7wLhu9s21RmgZXw78zW5H5",
  "key23": "4eyAxJSkgmpZVYpw9amJF1D3shYXH4uZ9hZNvykTjxPM1SDA8Q5kjukmYhsowLX3t1HnC9r5uUidYRxNRrM4DPQd",
  "key24": "2rAWYPZBS8LndCesv27n7v34HtxQ9xVHMPFVqigEB2DxFrz2UpKw2Rz6B7f5yD1UPjE6WqsFkTimL5TpbnniLqbn",
  "key25": "5yfbG6QAZ6VnDK4V2Hu7tDYEMqfhGHCEjCuuqjhhfkeMwBJBgszSPuknJoPxTZSPNL5iYEnLTJ7TFW8SL2dLmEi8",
  "key26": "5sekpZeu7mBgEc3ijUjRfrScyEC9PmmLQYP89o6iVpVkDAtCenxic2zSr4cvVLWDo9ahbn3KKpANDAVgCP1A79uB",
  "key27": "3YzF9ZV3dDvr31rAryk9Ea1rTnghLCnL2oT92zZNpq4RE8iJxbNAteXf5JwkL3YGmAwWZMaoL2reEVFYv3LZvoZm",
  "key28": "4dkAXwHmk3WpaabsQsbz3z85TZbkp7uzfpRFN9keMqxnMjgphb4mPZ97PDguatRwhRnQECtiJLJSZPvgkn8pj8Yn",
  "key29": "5iXC8cFiMHFHkdhx8p6UwV2rt8DYV3ZCWqHmNVVVJsTS3bmjg75Am1MG8riyfn4p4TQ5x4gPU7NEHTpMXkgQ5gut",
  "key30": "4Tq35efUwHtBozbtvN9DUQko78AppzxHJuWa4QcwUS3mQJto7ZPSC5NaAz7eVvKDRwGGHS6F4nog47zrS6PquZbE",
  "key31": "3h6aCejMP5XAMYupn91MWzEjYyyy296LgejzHqBstNHqZhURAgrzcNp2QbEbo7o2hL7QAbujym11ckteg91UiBy",
  "key32": "2CbJaaAQ8BjioH7iwFgAUGys9y754LPfSmxweToPqR8sxHoLvwqqSrNkzwaNaajzpFYQjYhjFqkZxDQMX3n5VSQM",
  "key33": "4VbUXkYhqwHKH4MSUf28dPk69QJe9GoxvhYudAnSJzWkE6wVCPajo1wQG4ULvqmxhxKGwtfDdZeuMKdaSgc5mXuV",
  "key34": "64f7tFCWoZ8DbuhgF9b8et7rzXQJn9odAymMFDwWny2BgcrsSukq62T94dQ4RvN6YDutbdtbg7f8MewJwS5KNGqJ",
  "key35": "55iXav3aewx31zAf5dZLwkVHXgDmphYvj9j63HZXu8WQGmQmNC8zVEJLJT8efTGquXfoq1HPReJBYoLaCPgazHB1",
  "key36": "4T3tR2SDGaLABU163ptfZBfTYXTpD7Fxfmf6zdvBXMrQZ1ngJ8ck3fXyB8ULkmp1cey2x4ojeAaY4ZLNJqVqcVHP",
  "key37": "2HM8SWCpx5GYgbN18mfFYRiAyEAWt12iJtEUthXpUGeXFmpUAEx2Yg2wVNMWFFTFHxS6DKRA2B8cCEXo7N21bBKL",
  "key38": "49znmd6MnHymGznnrkcxN3rLQGEWUqsoqK4WmAmbRrbHLsxjsuLHN8Wa8sKmb5fuM7w6H45vkZpQnHToCg6AfSm3",
  "key39": "2c8zvt8guCKapTvkpF1k4BoJZdySvGbEXnMLoptDyeFueG8uwejhnCVAgtyThfoJzwyPXVxw5arMbDwK2cRTDELS",
  "key40": "37SX3UesyR5zc4rtaS4SyefS3fiMUMjCcBoMUjmbBjvf73BJP7SKgTuVVnj87y1yPn3wjB9BFZYMWvUqtRoTvDNW",
  "key41": "2f2EYGUgC4fiaAKH5cTeawPzbCtvJpEgWMXXP8TVPzZor1XA6hsiwPoZCpbmF4RNp7WW6ocLqAzxTycLNKBEFswC",
  "key42": "5osGXuYAgy99FqXPSo4hZM1qcP7a33SKfG8kpFhTP16h5h51RCfQ4UU6iAwNMwy6PaLoLYhqCYL1eJu9qZsGTqSe",
  "key43": "4CQnjxC1skpNnTwwo2DdU4LXoZ1AyAiuwwvt12gUVaNSrv38U4v3C93N4S3Vmn74ewN7CSRLUZeAypMjZKGpZH5R",
  "key44": "5SCt1Dg2MKk9yxDJA3kbM3DH5dsZQMYnwQskjUUfWFgcYuTjoxpLPt6xsFfi3HvKXigXSAjPd2qNLizUmDAM9Evh",
  "key45": "3m9z7Ly5ycFpbNhr8eW926fbsnA1mWU68dQt6SrjusQF8UersrcKqYVGY1YbdouLKyU8fHt2aTH1PBBHCzMsPW93",
  "key46": "3zgwvE6pGbmi3LYQG4eMjahCb4uUfzMuZveK7nG6H15xj4FcZw1zVisEY5QdaELzsjizXrhiiDodrB4yvewzxTa6",
  "key47": "42JbVx1DYQ3noUdPmJ96m8XyogVNeru2nkXsWSRHJCy6qkihoNKa5XNWBUPbNxanZipnNRKjYcHfXhFDhFVpVZGL",
  "key48": "4w8x9JuKnBS2XJVWs35SToP8LFpKxAX8RzSJv9RSRrcXXcmq6VbbiU6QysrGQUbSVHzmuXWSD9VhBAyqWsAS9pJQ"
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
