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
    "4qH6kmrqe8L7S697o3HKzVdcY71kTPpGh8jTNQbpQzAoDzyRGJesC6SEWWFeMDWevEHUgx217PaVXitJep1BZ3oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErQJfrLyHJz3LFDmKgbhk4xEvBhBXMjb4bL22JC6iS3aMUqN7YMah4u94MoZK3a2huMHtFJVzy1JVWiKD9CGceF",
  "key1": "66sCFxfYPFyqJThswxh7tJLkswf2snn7BHyfRamFmN19zfdNg1JoEtLfWV7HBaTQeE3rHeLYwGCosoTU3sV1aV5i",
  "key2": "v2Z4XWooWfTWvhdL1jjD3LVBW1aQ3BjkxFNfp2hssJ3yXtBeszT7oBc4ac9BGqQbkxyQ3X7itj8hzVqkQXkGbZB",
  "key3": "41dq47yFFNyn1C3RZEpLjAMf3Y9qhJW3Z56sqtwRfWDZJM9Ab7NfKenMLC7dTyKatNjxQMDxLNCr1CGVtU4zNXZk",
  "key4": "2Zb1ft7g2C3pfiPukwaRk7AUPjGKHhudPQ4dSnLATtZtkwhEvWg8RhxfdLGbKpUtba5inrBfksT4mvafHgehm7e8",
  "key5": "NrccYKtPjCgNzBrZ4P7ZPne439VG92cJ5cV1Bzuk5ehTKZC8L5zEeQXDdPVVHRJsT1nERrVY8RJ5Bv1fRUD41UA",
  "key6": "5VPwQEH3tsVBJnEXZfRZVhUxbdyPTQpxavzgN2UpcbVCjoTZJxxDLSDwA2ziQri9PeuJw27uZnDoJrXgUAzGs4Ed",
  "key7": "5CV8SbtLWuyh8tTN95Urkvdz5xjDKv83Ak2qPbDGqTzWfJ4dpxZepWDM4dA99t3uZKpv2vGViezYu98zbvdvBHBo",
  "key8": "oQaPz5u1G7NaUn5GEzhm9652xvDoQjFPKiACpepPm4ktao3CgtC3G3TzSpPmyGb98ZqpWLCsheh3Tp5xkrQh4ts",
  "key9": "3gf3b2r7Y74nzMk4RpMKinSCiWzDpMUu5oKKNNefcrohSxcqNKRoPqgU6SvjPVf2ZD1gDnwUpCH7V5VJc5rgFLxR",
  "key10": "2nmpm7nKoXyodooa9rwr4kvSPLk9dNVCihwit5NggN8SFZtZqr5a7JSszhz2EvSqz1HQo9dhtCxxsMyLbsW6KLcL",
  "key11": "5guFnE8KVioKyTdBEBhPdbMjXe8SZ7D7ggPCzyQbgoH8xe9X43bzLoG4Up2TwmYehWrgFMQpzpWbU4RLK9YhtkCW",
  "key12": "5neitjDsYLvM3HFVHezmkNa4cZFbPxJtbm9NyJjKMi8S1UU34w6SUgdAhvLG9sEgfE3UQVkCvcvPQUC4JF7jGTzP",
  "key13": "3J8oE7AbWQB1mk9VXUk1bBgwSx8zPQxHaHrJ2gNLytt1KBmgMJStSfzXjVLDWFqCs3NqSMQonVeUzmqKT6rAtqzd",
  "key14": "5FcEQWsAotidwispiCR6Nszhs8qEvzThLTKxVNGKmSSiU2w3vLRHqnhLV9bxjUgE5ZYJx1JvFvcbiizbZdwz3SFT",
  "key15": "51vdaP7aZeKYhoGjFomhofJdpnoSVqYjzjHZGbLCCrhDQowJzBmXB5PvUttgZK8WiJXSWz8AgbXL1rMgXzQx6E4r",
  "key16": "3wtwjRJkXVjHBMDnTmuN39k6fzM6JcsDh8nKoHXk9mUgWqCSXJbiH6pLRrXAsWi7DhNedaRuBDUupp7ywvXBcw86",
  "key17": "5abtX48DKrfn9o86oHkqZkkMoeGLHEXGZg5rmdgYCqcaLkS5mg1nwbTRswUUbBN8gVydqikWUHufifCZaFynjLUF",
  "key18": "m2pgCoipAVZ6dn1gkGY5ZJHMFMLsmfbrkHo78xTg9L42GqTeUyq7fV6kqzv62hwXeWaRQDn9TsMfMk5pmVnkcis",
  "key19": "2tRSi69dBXRNJZui4vRAgbyavvdBnAbLQ6b4EZBmsyNG5M2RQaoY6NLZ5rMPHDqqyseFYXyCZ5euX4hCvp3347Ko",
  "key20": "5AmSogW4e5RgpePnfoVYogVBUd415G3LJisaSfiA51ZqKQ62PYFNu2yDM4h3o3Waw6gD8qNdP9vXrSKWwXwudQyd",
  "key21": "aNKRNZpqPEWu64qVtDrDBpqVXFNJZ6RrENab4DdAibKEhcUJR5QpnQMba24c928PVr6RGnqQS5K6QhMsNudVEgN",
  "key22": "4bN9VKtnHU7CrjoYasE5LZK569mCji3JWeLGiCUNQD49MX8sxxpskcMFYuVewkuEAYDwSndaGC7NgX1ZJB7QwEkN",
  "key23": "4afvujWgYSoq7LDL2cmvWp7oT4kzmXfRxh7j7mQzie4ReJsshn1gHtecaZSkGd68iLcxGjkfPM9RFECvsjsCsnxd",
  "key24": "5nhWnjFEEmzLnhJWs8e92bzKTDSysJHgyy5SpJ7Htm8JUYMDarQDVqrb2HJ1TeknKnTTAPBstb59Xfb3Xx3cSBQT",
  "key25": "3yfGJ3mFuKhCTcfJM2e9GWVvCxRgb4GX4obdtXNMinpiR6ExZVrADW6WHxwQ8U2NDCzH3ydTwnZ8681FcjZy6dFS",
  "key26": "a4HmTeEqUh1Kb5RRAkEQEoJXJupHTRAxSJk6FGj1p9qdmUQNFRts1EpEsLhAYvcotnEp9ufbDERi7e6a7zDJ9ed",
  "key27": "5oqmEdkRSJvRaqcjmXE7T76horh8YVq7Nv4wJn7xdxD2u1gRcEkXB4wHuML3vRqZFejwmggpnmAWJG7vVQfFnJgp",
  "key28": "3EVX2j1Gyc7t96g1KE9QSMUsjHEjC8sGsEpbKjjG3r7a1Wn3TGjErwXcVQZxjbYbrGXzYze6seUioT7gCTR4ELFL",
  "key29": "3FxMtM4puWpy6LX1wTJGUGgUsQwXN9bHHDF31LHHV2JC85zvz5xKcJqm6TZLkCN2a9dWKvQQfLqfy2NDxjvPvTF1",
  "key30": "57QQG6LbemyuyrtkiHNYdTeTWGnUT8y3NVaNz15HYZTFjEGE6mdGgr5Q22yZ9U4Aap85qGtk26fbGpft22N5wWmx",
  "key31": "5ZKtZHKyZ974UsGBy35kncMFtTpLg7xsEuCqRP5NVxZWRBqQNbY8Cm7FWmhWkHZCTannvWNjpq8q9tGjTN3DxrG",
  "key32": "4NWALcBtTZbi33JQT6bqG3MciR8pqVDnaZQRBfbxT7vJjjEtJuRaNXx93BKgnSzxQrUvphX7qL6Cdx2PsiikJGYc",
  "key33": "iQZAMz6P6gmTeJu5dbdYNMMRj3v3koLsEqcaTxpiZQkvxEHi2n5oRVdGKzVU7GFYSNQDmso8Wvr7p78MZRTtQbf",
  "key34": "58THYVDagv2DKwhLLiywJMQQhA1NJi5TF7ZPpcz2uhs7JWas6w8U4LUpJTqD1Tn97HZp2x2mouHoER93RdAVUCUV",
  "key35": "2fLq2vexpnNCsoY4GabFrf7Fn9ukeVZJMbfg9Y2kh6YTn3AcXkxxeGbLbuw9KxDgcDPpSQmA5ePt9YtDG8Upyv12",
  "key36": "VB8xrPAoLrMS1Ptnu23JmAnSPgrbwAPk2qgUg4gzSG9eEw7LXZRxeuArMRZQe5uZYPi4GpaR1uENKrjyBWvz3gP",
  "key37": "yoL1n9Bmm1YHqprgSGJTGHC5ZM23eAroQ8qvYpe4MLYT3AGvo9GvmVRUCRUKoTimaTXs5oXkCebHEfFWybGxTKM",
  "key38": "4UTH5MNzjHLj7z6LmrXBXaSXGWfMvJKqGdazg5gCr9uNH4qCDWcZqgb2MPCS7gFu8zbANNvqQgQr76xfNZu5Tqo8",
  "key39": "47mGZLYKzZXhExNnbgxoNMdvnUQkdKC9rnha3tefVZ76XdHzqZTYWfBGjp26zuM8dKDVWAiiJRGi2ZENM75Vzj7V",
  "key40": "FURXHdGoAAbDEgaG8teYCdLGeoEKdcGaZ8MrAwj7moZTEtLebHp3QowkCfk7gUYgEjJi5WNGviS2tjYa6add5Tt",
  "key41": "HyDGGoEuYQSFnyEWP4MWNkA4FHAwyt3tRzz9Hdg1mqW2pRKhhFuGEAc9KcdbRb5FmwXy4bG2GndhSycBEf2wDso",
  "key42": "4yAmV5bCbnfwqKnBVvUrNhk2ri4hwzt5kfzMHfM5zU3NwRZMBUWwCrJvh2G6zQjyn5m2heik6JmEoFNBJP5gtKPy",
  "key43": "2nqWvNY4tSwggexrHasCCtbuxZnbNvcyrAh152HzJGjGfeqNYdCjye66nNizceRvpXNAzxchLpg7CrGG7pw2r7PN",
  "key44": "25KAtJmMqP8oU9Gb6LfaE9Gy5HxhawsFNi1EqmgiK8ettYffQ7ke4NbjwZ1hb1jVVqLWXwChrqerjpQeerpB8Qrh"
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
