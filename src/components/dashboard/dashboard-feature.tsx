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
    "5v8K7Q6XC4yTQPHuCsc5HP6aUy4SsAfemAQ4beGhnHTXSqbJfNLktD1JeHnmRY3qwn79QXRwMLDZKoa31rLgGvnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMpjZK6GJWEbuWGM3P5hUAyxTDixUg2GHpJCNJVeC3rRtRuWfyndL3eMrjrVp7G19GyWydkDa2pxUineWEWWbRc",
  "key1": "2FBRWxagsL6ScVpTU6b56uUmUYnhjqqm8ZCchnjKiXWbmaHsAP4uBx4cC8nnkJERooWZi3siarE6SUsztUk7q9MB",
  "key2": "6xUp4pk1S3xe9pdKTsQmNz3GMxUJiG5d7W4dgrofNUtXu18BvT4K9qz86n1f8xQSC7LKepVSzRGGhWqdQabofWU",
  "key3": "3cN5sKjcmniMATwWCzqraMk5VYLfV2hvBqFGfSckjRqCrHPb8Ucshhx3kQpqPwhcANVRJAJgEK47wtKziybEvk7X",
  "key4": "5kWBQkak89Dhp8fCifHApNzSaUdHh6f9sKy2Va56oTUoLAi1zzF4NCaCtTK489nG1cEL4Tz2nMkoM8RnKyaZKRdX",
  "key5": "2GLB2kjAxSjN41yF6aLfnQJZFWAMivdDjJ4ahiyt5dP7TeZGRonVYTDvw6aKBq5VWxbcxfxNWKhuTGDmreLkjQuF",
  "key6": "3sxQh89UEXnqdexug1TAoN43rGBxYDqjNTcSHiwbXFdYS3vzBHHWcQp66s4oPX8tadRhSFiKc1iAMdUofZz6Bai",
  "key7": "cBHVk9gfFWBbAZ1hpEkPM7rTkPEKwpWNNPnSmvtoMKHWmH7DWGjug5XBkeE9qHymgHMUqBZXqsyAuuWzgMAaeB8",
  "key8": "5TGePzFTCatYSYi7UcGPQLCxK3r8JDeuEekmGK1kQMYH4n9299zEhTSoMSUNye2H81fCMJcCZMhDei64CLGtdoYo",
  "key9": "DyeFs867U46wnfvsi5LyYPZEtNH2EbFzBuzfA6MUJEv7qdaisJHKukdDT3vRPwUrfq7mVk9h8jW6mT84meYuFhq",
  "key10": "SncnZVxKttmLaEzCuGcmBeS9wqo366iVPdwQp2JSnnoVcGSnqGyQBSzVrLkeVqd1AbMsFuwLp843vM11E2W6Pxm",
  "key11": "2nqxghCUYvxoC5NdP9rPfqknv5qG6635ZCi2dQFRrt9qWAKyFo1jz8r1bo22rRMSGACDeSwoV5dhwVYawq8wPoMj",
  "key12": "2XpS2snwdc19TpRu6KDXSVWSbFxzywYNTT9cNeidRjAhSnHNPizP8uiBjxKSJXWaU92s4EbubCfgH6oQZSM1Hpy4",
  "key13": "Hg8EvFCVVNXN6DAE5SbWrVokmXs6UiaWNY2zbNmiWwaZtvGEBz55agBkE142aRCB2XeZ9mKz4NUKH89Adpxe2Qd",
  "key14": "2c3ZRvg7bGVfRSdkLVzpHLXnsmw6qxsNzp7y8JujdLrMVcAC6u7kCCcwscb9RSjeSgiNBcgsWNcJj2VMcxq4TKEL",
  "key15": "3phLDwygbFSb97avxDutKFMb5MW1tGLiXkx5C8XHK2SirUqXrKLBMpEStgZofAzXjdBk4Eg5YNP9D9EMeTjqs5zB",
  "key16": "5AT8v1kB249JQAhyAcXq32TzJu6mDkQPywPbfF2Ps7bDF73vHx5FkUShBGaENrnaKz8fNU2WjLnePQQ2FrzJPRff",
  "key17": "2acNzTkcugjhMo5ZHHwHzymEJTHoMZSobUdHerf93uj8sShJiiNiyZEzM1HGE8LtQ2YYpL3EwRF1qchcxAhFmSde",
  "key18": "JRFy94xoKeR2f5uK21P5yQJUzzRpToxGtSzxhxjWK6MFb4NQQqY6DT8T3MiLcVwF1BQRABFPSoS2zcWJZpsizMC",
  "key19": "5XmJWBGRCSN5MC9Wbkf2YvxZENvpHCocqRSYH9f8Xs41yGBt9pH8ADzEZRxTkSa6WbHmeLRwTnbKwp4sdNwsv4Rt",
  "key20": "5uBPV4Sm8xtmn72SNDzt3LyhSrUQcsY1NnW7Xa9QSF7aS7DmqHUp4kevs2DKvy7Jt9jnLgSK1NgreAZy9fPxF59V",
  "key21": "3cXHVwENu1Zf2DRGXqrPNw3nbWbugYhUD3TyenufeKvCZUUmsQeZUU4bkJ9U7YZGtiUtxNyWVJtv4jMsdnTF3zWB",
  "key22": "5sgdnrdVwQVs7YCRwb5AkmM2vw61gJ5ViggZVs9ZZZ8EiBTPAs41gdAyyTFEE4DSg4SJyGwF5Y7AJ18L8MLtZu1r",
  "key23": "3bZNiV5sfRp6oF5Fkfnw7Bjqaazft3P11cDnoMTwuS9seMVR3UM3S9P3UbgZYgYJiCeBRSZwjcH7J3Jox4KFt9Yu",
  "key24": "5urE5U1cE5DGxvQzR2hquEQDvC7vCJtrPC6b5GGJpQpU8xktQTYMXMkRQCKR4VrYjy3zkyibAWyabNKKN737qCmD",
  "key25": "PcN5QmV9v8ejKEG5AzYKsyQpwtx2ztPWDxQqeiV27JGU7WVdS4k691sn8ZXXiPUyM32jAUGPiAnTaHzAEzguaFb",
  "key26": "5iVRUuXo6Ubv991mBHRYpVsip82BmNMuLHxAkrFyczZNXPzv2bopaTgvEucwfeg5xtVkNGXHxmM5kZ4rxriMtQu3",
  "key27": "2FqwTTKbtcgYszg5qJb4JtB9xwnFyznPiUwRRXPWt8JPKfpnFc7bCzmoiNaxJrtH3i5HJ4HJDZXSqLdahaKuSyq1",
  "key28": "5ezrnrN3wg4KXkdxhUGLAb4arTdwhuLWdu5kbmuweJVE9eFxQZFgSLtGyM1KgsvpSvugvAZqRTNAJnYAqCrKuJ8i",
  "key29": "5Xg5y2tsLF7fVSWZ4Nva99Lkdn2N2AMW383onEEVHLeoPCffFEZqy7s7akXjRgkKUh6gKJhjY3eq3nF2UJpBbmya",
  "key30": "2AVQeWq26CkDAdaFxb8tU7GDzNGNJ7SGQXD6VZpiAubb8cb76JTjcLrK6ZsNqp2u5Aw8EN16j85eZdq1hQUe17mv",
  "key31": "5zY3cBWLcMz3XLS6CZhW7R2HvssqgiUAMqD146VhmEHFtbBxKWV7pGyfq9BPcxHn21QQYLKywWseS88wmsQzJwhN",
  "key32": "3vik1zuD8P83KbgLdq1wBN1Guy9QLzqHmb7SQJyv7au3eYmU6hmnjKKYsqcbPRdNmH9jp5QriBwEoiXRqr91g4fJ",
  "key33": "M1KoMYDb42qThse9BEzCbPoffbufr5xojjURZyRHH3ujECFCE52FDdQZzaf9sYNuUV2Zbcmevq785xCteSKYR3a",
  "key34": "4hLTuz1sGvdE1caz9G6sfCgiQ7rAkV1X2b1rCUCFybDHBV7QRQpeignj3EgbpfBhn5x6YcpqQWc1wJZ2w2dcTkVX",
  "key35": "3m2bTpjZmdh1Um2Dw2zecfhQ1dZeWqwStrZs6FWwEhRGHXWHxZNANMBM2bHXEvVTATpyPxAS5Xdgucj4gSpmKEyR",
  "key36": "62L5s8sMHevyWES6QksfegcAAF4v2UnrvzRZDkLR9cfu1HgjiJrrVPksfmp91CsMi97zUAYxmsSXc7BQJUZ3BJ1Q",
  "key37": "5Zh1z6AJF5ECKiY44G9cPgi885fbfF9aXqPJxAA6G771qdpbNaFAnoTero9uguzNjTVaLsMgmH4tCNYwJnVMRxHG",
  "key38": "GUQKCk42FSuz1jjQUt7TyoSdRXnuVWs37gCN991JcqqQPetSq5zHcMNKDjT9nXVh2nkuQAQEdpmgMAno8YK7sfr",
  "key39": "2VG6iHtjbUa5xEfqpwzC7i4qkKv3mEt8UAbeMu85YLJWcg1aCqB5xWKViMxXABgRcpjYgHSQST9Tmhr6bYRQGJaY",
  "key40": "4EzfR3Wu7WdRL4kppmhXypjbSWrsYYTr8AN3LRAmqdtUi4Qix6kqzbu93r1n9zt9kpe81LGYanka4h8oNwi4sYk4",
  "key41": "2EyGVK8wJqcXXAdguYk8UEitJ4j9Kf6qDAEXiLirhCnqAmsFp3iYx6W2LFTogXE9vjmVgJaNoEyHRe5QhDE4VBW4",
  "key42": "3QxdojddRJKM8JUu5vLzR6wCbaSGPuUVMELmxQBTc3c8nZ8haXMv5LbmjESSJ3FKsC6ZL5jywdPRs4rZuvddNNfb",
  "key43": "4Hd6x4cUfUfPxaY9bRSsEfVXijtEjnQTXzHRGnbHkYMAeyakcKYE5GBj9eMZ5n3CQNBs4HqDP6wkucjkF7MTTCE2",
  "key44": "BiZavC26jH9fvMrhLa2T5Q3ND8eUn1qNkcz8kZV7P6P3vGYTCb9eMwserznDhbsuwf3KrtFYBMKaxdQF2YDzrAV",
  "key45": "yUaPxhSqjHtr8MR5GDoUkecG3tvNcSTmMLqRio8vryGYeWhkXFhY9MvD9N8uQXW7JVhTW2tbSkoPa4G6np6Zz9Q",
  "key46": "21qUkWmcvZzpUNc7jMAf1gxTqm8VnxnromFcsixKaGnUu1U6xpMLLHKDmnpNehMdWVyKzshsxMbSLV7vJGBbSFxq",
  "key47": "5yLivFBVt83TRHc4ijbABExFVzm9sDZmE71fT3mkc2FEoQWNQEK5oZTXK2esZzZNZde1cK9VMJRmPQ3av9Bvo7FH",
  "key48": "kwiEAFhhtt53oxfjkazk97DRn5B98UnCcdra4eJ8dnXf6GeYAQcbgohgpzXkyDne7wp9iPEbD5ErvRyZtpkEnuf",
  "key49": "4mNEYkzhdFMp68WTBkQ7tQR5btzMDmVqk55TyMiQeBz8HPZLzsmqczLcWjUxWyNKmXE3hZDepVRz1YKrWG2DzVjH"
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
