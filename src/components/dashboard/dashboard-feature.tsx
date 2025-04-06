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
    "2DXfJJAk7ZrCwvXESRcP6UNkUBNRScPJBtXzkU1hyFQGawXBLZoFjUvKEgta7aGLgZpJwHCpdgUbvLmxqD1BrNg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyvQ6k5wzLjb9ctP973ocD5ZBcPJ8SKWb83hEmd3DdYi4hPaiMSWSyCTycY7rfAmu1G4NJyVnvEUYjUNJCmkdfq",
  "key1": "5inRfdhSLZABGkKzYXKPxqdW2Rzu4k5wh5oWgVG8SY6uPQqDtmPPApDKgC1CTFHW16jTgLxbNNvgvMePqV67UVRX",
  "key2": "3of6tXL6YS5DLK87avXXPdD9dVBeddpoTQpe4wxj6uX82Yjr3iMwEgPHyuoRZTAD2GtnLUbgK5cVkfWTuxD5Umwv",
  "key3": "5gcE7t4m5pZyJCycQAhRn4WxqTWPw27fqurMh3LZZTixBgXJ6jF6Kan4SUkdudaZ9j5sVuxaKSz9268TLx47fVQh",
  "key4": "ZykQDBZizMHxWV8vjbYTuBmvKNLJ1ZpjFSQnsimnZbQpPhBbVVDHAhmEWRDMa7Up8SvpTj1DB2i5Z6xoe3tjtfj",
  "key5": "LrLkqd9oWpXck2PjmpstZCTTQaA4e183TsMBAoV7gHFVxaxxAnqpyGL2GhyxSzS8sthnbEpzy7T87uZ5q5dsDN9",
  "key6": "rRoNGf9yumAoommpwKoWBq8Q8GPSdwsrNLsFUcUnZNDe6eSCqX2jEWF4EXLhRtSptPaor9GRQav7hZ4gaoVVTPx",
  "key7": "4qW9SKz3V6o25mdtwLrCZ8TdNuMEvxdohCKekUPaq54otmn2NkG5bAN2YrYhnzenPn1EKVJWp7DUtXvsCw5sbS1M",
  "key8": "mq9KCSScL13jK24tYTKiGq1Ja9oDiQVNaTgyD2ZJCBAmgnYhb3GjRB2dUgxmGqRX2NdsWRgfDfPiegG36q1bAxw",
  "key9": "5GTnN78B9r5JyDhuTkfSqR49CiNvaYoXAZd7H4ZLp3eowkJGb2XxrgGAHj8CrPjvfEuJA43x7FzyNDNjXHEVnowV",
  "key10": "4xR8gkxG62fcBeQNdh6zJPM48v68BdzqoATeWp5AwkYnGrnb7ANbV9zdm5YQjuaBJwf8s8gD1K2Qt6oBHN7VAbto",
  "key11": "4wiWRVfrna7jRySoaobUoane3RWysjKDGcAXYaC6DJ1G49DzGGrdcFAwWxwy4iMxoXNh2jv2ssKhDzsR7Bp1FFYu",
  "key12": "4ts52QKVZyrzePjeTonXJvSTKMxCUS9ZAK5c1ndxPUKkcBYdo6Fcnk7aEqmfigoLyrs9yZCTt56kcEZyce3326nB",
  "key13": "67RMsbToL2Dxyj2MULwKGfUM3QK4Ua7iZNssCJAJ944kgQXSCuDqoRHbjo7mbwQRd3SU6rKu6aAoWsorZzsbZnag",
  "key14": "2K5zPKNVBfSgxCYhaPcycym1vQTVbE29PaDqczUHL1XbTZZDVK4bjCNQU9rLYN38SzY4qgjMe9CtBBkzr686W98z",
  "key15": "5BRedZgrzRMj2heSj6iYgxDLuPTW3qA4oNbai6xYQ6D1tK8xDyhvECMjR13MDU1PcE2ri4QQgoyGu6tEPv865qm4",
  "key16": "tsH5y9iykj8iaJDq9wTXvzY7aVvA6XVt6JPt5fnpHc4hU8Qyd9Mpe3tZY8AZ6AdTWRhanftamaPWUqAgGdBN63A",
  "key17": "2DUjrhHgK6jEP3nM4xPs2X3cF4dqxKLrZj2niQhs5skyZNm9yjRSMiHHELBHKXarQUXhN4XLuyBkmMAGRYsTsZyG",
  "key18": "3eLcXXHe3FqTLztC19xTnKAo1ztCp69CSz4Ni4fNvo9AAXzUHWgknChsd4tJi9TAYfnkAm3uESk25fPrsN3A5jwj",
  "key19": "3iz5e3m7onhQoeo7Jm8dhEe5BYPWenoY3eAfwMQpjoSuuwfS4pPgZ9kkJp27xxZi1ss7hKNVyqor1yGBJQDVfw4V",
  "key20": "4EKNirmir7oiLP3MtDLfpFBe4MhpnYRAfia1E8gfCtN4VopKmMFqpQzQo8HxHLcqM7PaJj6NG3m6KQUB8adxNSv3",
  "key21": "4KFYdJPG6neAEdN7VahbWiCju3bkRpNm9NR3dA162sie6n32QGCGa5YComa2vUinpoqXe3WVBGjBx67bt3K2X4xW",
  "key22": "33rhi9h4Pes4qc2aZktNb7CASXCYT3Lve33KT3KuUW4CFmyLiaVjowwFk5GXjj9hfo3BPhoFmkPGn7TSiS5XpBVt",
  "key23": "3FCJWkbzQoxaJfHULkLQqXCfr74XUkKYbqiEHog31yAbto4nqr1QGKkJ3H83ybKhUv7QpXzwPphhNaNbMWkR3S9F",
  "key24": "5evkzZLiVre6daybjR3oqJStXSJ9ochhNucNhtq7edvskvn8vVbNvkxQLSTsyegzjsEtYHDCWwWB5aZCL8svHpQ6",
  "key25": "3Cm3jCVpinzFshUcfLkqNhc3wHQJSm75VnbLCR4V2URCef21ZtjKRNqZbXcdEoM8M4UJXmhKteeWCrL7B4Sdd5y4",
  "key26": "gF8BFtTcpirb9oUKYhLnqAtmhLdu6emjqCEUZz3NyZYbFEj3k3cKbRE5XFLbkisyTQhhnYwmPWcckCSoDfCLZMz",
  "key27": "278dz1tqhts9iiiCWyERWYkGZjiHKek95NZcR2mjj4jmY73bsHiCkxhWARna6yB4vDaPQuxoByDfCQMHTn6CTehq",
  "key28": "62ptN4YmHYZGj2YpCZGw2RRnuSkQwwavrSJurLmQKWS16ks7zjcWxgm29THPKZjwZfsqd6DHcTjZTx1zyMqkWCTS",
  "key29": "2gT8j9qG2QCUprG7Mf1onskGJ8mLjBiWjV41s7EF7GVGe43atgRzzNpv9TMsAB7XNw8jhNsdcYumapJqAzaesGT9",
  "key30": "55Y9Ao2rQ45atS5BzMHYuBn1VXXXbk6teMHXNiT1z57y5kqpeVUvrfyzHaUV4SqX8TxZ26JQ33RZGRjixTaXt8yj",
  "key31": "4ErbFus63HE6jrQQdM7EmreNrPktV4Wg9zFei4r2U7X4ozUYDd49PD5mytJ5gXZqp1nkzzW1sHGcfXCyshBYDoR4",
  "key32": "tvVg5ruaxYfYWtZtiLME5CTsnXpPKbSayznHTUGajmcyNPQ8apbBEKNKmANLoQKTfaUMWeji9tm3Hfqa32jn6Wz",
  "key33": "3ddqPJcD9LXsS3wbwqhuKU2yR4sc6ry5KvV8nKhda8HqsptF9LifzguvrJdVJJXjrRcXCjx7bPpujVrjzH5AobTJ",
  "key34": "3kZSwbprsFw3bVpwDqipu5fjFRiTwXnmMF8GGR7jPe6yXe9UnhGF3795GyiZNSqnKY3NDMEAvH1AMFkhzzDnMhJQ",
  "key35": "Wd6239q1ojcgm2c7MnL3Lo4CUNP4zTQ8C9r76qz26To7e63Y5LHyw8jhHSSXADvNXVdpPBfjkeE5ysd1kDxHmKY",
  "key36": "4NaWqjfSJmQU4EMr6F3KhP5hbYmwqiK82PB9rF5FU6894fnEsJgenExizEJZLgMWofZ3zsjAvCZqbrYXo6mQPQ2n",
  "key37": "sxqivbqkHX1iF6xVFAuzDVmWd1dEvTuTz94H7TvkM5yTFTot1xsg9KRcvyMvvsALYnnR458V7EqgXGi5ZjHc21n",
  "key38": "2YQFx9FVMru3r8U1Y3K3ujimZz3bA32GHE7qzWMp6kNobdHPd1g1aHwjwoy2yKX6gMV8hxEfNcxn6gMD6tNPtuPx",
  "key39": "5VnrTc3jiuoN9JxZFSXEpHzgVsrJTs6T4PT9A1bpL81scMDgxt1B8724xUigj8kq2vhCxt7rwMdWjQJKyohYakJR",
  "key40": "vZU4Zo6BFpAjaZncr3RiEA13HJvAE8uUWUcZBhK3qx8PycDeyoPHJcb9Xm13rKwaK97nmtZXrZ8UuP6rBiqK3Af",
  "key41": "2Tq8QskrkNbc5vEthkdNaLeiMxA3pjgtQz8wVGHjkxgdNKfkWfhQ3PB2f9k1xRqjVRjxTmWTxRiRePtcPEySktcu",
  "key42": "4VqvDTVBricuDs9WbttomXvY3VCxAvVfwBnkSytDtEA3Jk56ahJxwkFagR2vwZcJrCkKAGuPUzZxQdotT9fz8BvJ",
  "key43": "5APKpZUcArtX64SM9i6PC2Zt5p6o1zDXZNqKnUtBJcrxgyYqYLdsyQ7QgEAPCJnmqPUadCeBHNhkeFV48QaSJzFH",
  "key44": "5wmnmqLt4HUKsuviddFv46fRSz2uTuZ58KppyP4kJB3qvwbE4u3GnZVCxbfHmxN1LSuuHqUJ9Gs6oq7zCNLgeZjK",
  "key45": "5ExsSqsk84nRD7SSf1Pu1Vzcuqa7yNdK9wsgvb3Vsgn3kmJ8ae2bS76TfzDtndAS7x9LgH88SDuGnP4TisoDRUwF",
  "key46": "22RZAgdRgB3iPPuCnN4A9uRQwnysHzA4tGwHXwQ9SnVQ5h7XWY5XFrRdkeVni25q2K9NvLxEQodUjtiXnZEk5w8J",
  "key47": "63WFg9B7xbZo4kUG2H9eMLzZAJUcqXNUzLkxGgTiB3ScJeP8V1aKPqiL9ZULw5whBw3XWGWHiexZS3udqacSp2F",
  "key48": "2yo4A1wqAGESh548ij11wkuwwManbyPajRuF8t2Qpuffs44qoBAgu2iAx9qt4A7ExKHjHi2SJHN7qLjizG9zSg3P"
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
