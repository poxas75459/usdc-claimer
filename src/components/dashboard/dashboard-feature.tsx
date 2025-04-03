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
    "38V5AKB3ozoq3bi7U7esYgXw17GYqSagj6CiQrupt8Rt6WiAd1rL4WsQcLXpR4H4GqQ4F1gF45TTeAAvz3vHB5ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mpb8HTXJZSn7LRAHd95ASaaQst7GkztDyXHRF8YwifC3yZmYeXc1bz4epvUwtmZ2syepB9kqDhgBG6VVhY5BLdy",
  "key1": "5BNYv2WutSv45BTkGyPGDwjwAAWxJnF8AQ3gfLi14VMMARgcfWuBb4mQf3zSKyiiE9KmUUWv8CoP5aoVVs71QLeo",
  "key2": "2zH42pVooCKKoukdarHk3UESptqVxRhuRX8uU97MdfjxGMmA7mcUrjRfML3mKH5uFMRrQBDBnumv2hy651Xsi1qS",
  "key3": "473JxKh3LmPp22KrmuA7hxdzXnPyFvqQvM4PCJrxYLD6Mvi39i9S9uYRteaqCXjeiTFtCBkhrKGDj9dcCd5jgrck",
  "key4": "4dYzWz9N9RvtxdhYPmo1CHkKBKFkfLm6JpKbfb2KRwtWvp4CfkDGqo6NSysLidi5TjejGFmnBQtfsgP9ZHt3sLa2",
  "key5": "5jpJWE5MXKXX93N5R63rXiu6zzEP49aRpxigQBWNACzNtuBTx7fxL8YDb5gsNQ26ySzvoktJUNYjxTQibfzzMT5v",
  "key6": "4XH8YBhuj9Dhk22DNewj6bbSg4EQckGcxN6XoecHmHQyf7D2oYVLTshdcTi3brRJ2u4UNeHdt5QzbpjNHibRCMMk",
  "key7": "4JJofkuZroQUhvGCFEBmnJijhbCwER5NeTEZ7RAD5dX8tMqf1xMTfYwMdbGSTCMthkzDNZhDSQqm4rDyHJqW2D4G",
  "key8": "4bPaXHjTyjq1nEeEwf71PDrexGFXf1ruR7HmGhUsJHZrsVMC33Qj978y8b8JLi7tZBBoUcprHobqT73gSDWPNkR2",
  "key9": "5yHA2yY7he963siDMSTGWqxQbhJ3CERzsfiTBcCxw3683qC6YYkLSpYh8wQto5PHkYFwquRUW5Tb83NReAWNtMPf",
  "key10": "2mefnM4tcRLJYf2YhRXXy9YcWB64JtEuCg58i912rFFZRNJ7WzRzqcxtUo6vw8GXM9Db6P9AE5M5vdzaJcY8ncvF",
  "key11": "5K8H63FdymHmKcTWfwNNEUXVjgVLYuq1vS6XYob3yxsoKAb5ftbzqinWVf7iRuAwaAyiD6rNmB1FCT2w6SLFPG3V",
  "key12": "3UsgBgKwJvZhCsZ3Sxk3oHAUnqdyNxyeJZhhgpdZX7YZPfZraFrBtKv8hVKzmdqWz85ARbR72Vf7QCSDkKNxtChQ",
  "key13": "32eiWFns5NQ9CNkfiCz5ftJZMwRFkRWjeLWBM7RZ45NzoqNnEXvJeLKjCkWwei6GiToX1fUxfrjdWNch4prsbgL8",
  "key14": "4kXT3TfRokzT2n45m9vmwziRRtD7aiMiyHzMeZdvT3Tm9rZEmy76wwLxmY9hFVFChienNrt6jXyUocjf8eweN5Yt",
  "key15": "3ryQreezD1FfoxdNP3Mx6bKfWC3SPh8sakdtJciL5DXESgutQBGPZhe5ajSV8gkQo2Uxjd6Y3CrunSEUFHw1ufvq",
  "key16": "5oFTmVeJiiLoQQzGfy7DwuqAN4V4ryZYWd5Vt1enkExjjZoBtPV3c1bzeBn2EHSrUW7MrR5AfgBXLjTcKca64Y3",
  "key17": "2XV2TmY8aLq3652gk2yPJV64fW5gB3Z8Z2g7QjmHi1ZThYC2pbAybRuhovXQ6aXkuaEWi9rsGrRuxViF6NWLLSXh",
  "key18": "2z6tTWioq2Yhx5RazDxCz35wEr7DihotAwZpqNirxZh5aizKJ3BcBLUZjwme9YhYEBCfvxSZsFV79rK2xVQUsFth",
  "key19": "6cYAqRAuSrJWgcm1qU9huuXXK8E5W5d2P7m5bGAjXUKMhJDRp4YoYe5xaDpYpgTW4Koc5qGA6NrWyVtghD9DMTA",
  "key20": "4zUr5sAAexfv5BSKM6s8mxroix9QoXZMpUKz7ozkveFXG2a69MWQTR8pEiNt2jcekM8JMt88Lw8encoP9Fx1MDFu",
  "key21": "411w889Fwyqx579tPwkb8bJcjUsMEzFijbpDqFAmG7KZiGxNKyytN8BackZTnLrP8eC19ZSEpapP9X4aWrDjuQmM",
  "key22": "3M15YmCttXrECa1qWtUHKbeG24skbC2C4i5XDeymnuSg2tPxPyuEoDaoMbX6wkBKUF1oCneeZC7W53E5uL4nRvPA",
  "key23": "2Tjd7KJEyKSe2U7Nh1dhTtXg8ConqpUfZsjFpPGmL2SXWfSvjh7fTSL2MnS9ggX8TvPVVyL2DYuqYEyqhC1wP4et",
  "key24": "d3A6sarJegPEVmFTfNizHa32x4yqobMQd6x34quQL5o5kvincgC1xh9ci9tqubBeU13eQt789QjwxFtmQicYEWR",
  "key25": "dxHAeCDfyyzcV7yVn7Sxu6sPTi8Kv99LJhVzUKiD3ozYcKHVS9x66KVA3tdbHimNgBD2ry47sRkgVyDFR2quwnV",
  "key26": "5YWMqY5zpqPjtw2tnGdokC8Y5pnewjoNf7o8MN6GS2UqMtDh1zxBA9ghKKbhuVKRYZA1n5HmrLDRKfyQMGzQLXVR",
  "key27": "3173KjKWgj5VmPCasGwsLGhbjX8SWFpWtvpC2WqF7KT1HhevCBozrfzzUGXuwvMb6wrNb7VPTSYFChBPpboUXAGz",
  "key28": "5DRMpTU2kryb6PHwuA7ZyGvLUDHPVw8jJbSUpSNkXug3HqpUcVuMnWs8pAeBWWVjtdrUGVLN9eCSFaJtzr7pS7dQ",
  "key29": "2AH6Wz2NgpQMYZpmgQGnUut5q2szEng1iGLxzbwQ7rNczuCVUgqf1ka2XLXYyjV1vRSt4EbtrZvyuajc8Cf5wm1X",
  "key30": "5iYv1EM1wSEnyRF9WMBwuobd8QPKdkvuMLVUxBse4XmCTvw3spi73HE5XuqutYVTezX6TD9VzkFfkbnohG8UZo37",
  "key31": "5Aneuvj6s6Hz2mArmF3Z1fRHYwuT3R4a1N1FGsKQDPTDSrM147g6sJy4LjnKoHmWZH74mKnLLd9URWbYsTqCxZQw",
  "key32": "3VTKNfnf9aAvCccr3VPEbtH8JVqqV6ku8cidXFYNGPW8V5d59aXm3CGTfqdma752LPtZgaZ6ZKPLthzBZC8NT92",
  "key33": "5cUNrJuvjsHwZLRY3NWRhH4wyFocsC9dMxVWSuGWRXQCMB1YTby7nf491HhsVnmm25bATqbUBM9eE4Qeb9acYyCr",
  "key34": "32tPh7m6hUwD1krssAFcDW3NUejHdrZCPgcD1d77o5b9m3T2nVMyaetYs8CJLmHS1j4nTyJ4S9mNwuxWcvqSTU2J",
  "key35": "2JEQa9knnZrHdfiZWxJ9fRJv9nKcNtWDdGf1NrsjV5cCDSpDnhCkyXixhGTPub9yd1r6RLxA6hjvcDTgDycLbFRh",
  "key36": "rhTdjkycunwWeAxxGhecaRsTotbboz9dtMMggzNVye3LziEQdE4hoJW88BdDgezrn2iH3Gte3m6QiSuFJh8L5oD",
  "key37": "4uNwTxV7AEtvbMZmuGZAisG5jUPgy9gF5zSb4NbC517sAaCkPSx7yhVMU36e6cHtTDN6qjerpXGZ5zohxJ7nB4h",
  "key38": "R7oTjLZUakNDewCPqqB71HxHDiXYbSd8ehCkWi8p44Jgj9rS4PCsw6MQw6tGjr4sD48Bk982SiAn64MKCxsEcSv",
  "key39": "SyXUpgpfHmca5AzvVNuSYpe7QpgzNZkd25uXssTpvC4Xn7mcWkK2F1tZbUZcVxDnxqSvSTBqf55kT5SMVPgxpFf",
  "key40": "3Spm9MBjUKNZnk1fhm3M1TN6EpzsdndJd6xKz8FokaQdMrMeHEq66hbjEuXTp194sKBy7pavkdVrBULn4V1sefKt",
  "key41": "347CsbgCKYuyDTA95htXLeWWKiLTQ22Pit4Wi671RMnoCkDus93YgrtCdaNNyzn4cmKeb4GLR3rePzkwUapb4HKW"
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
