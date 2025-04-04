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
    "3ePeGcEtQSCYEAqXfeqWckc4kR2KS4mUyLuGfPaWWFV2Q4VfZtaemkqDWT6jM2haQdYGC4jZHezYjHDyTqAAEYLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYrcDZ6V816AgakjzGvkapJmMUNqaDPYy9n68c5zHAUdq5QYB5fMwc88m78MnuperfH4SDDqBfBSJyRzfntKsx4",
  "key1": "5Jj3fvErwMvysQdDkBvw3zbeWWypuR5YUU4ct3Ks4Buem7MAXDb65PvXh1ALjtBWCtZq1xX8evL8E9ahBWSMJyvR",
  "key2": "5J9Ko68tP15FtMmFnm4Xk5jHAwHTd2cJTn6b28DST6nLNtYPtA4zWQjPkUZKuJUCEEV9vHEHRKdc2znkxbYyYTn7",
  "key3": "4tB4QBDmJaL4dS1ztoxVKAvnG7ZaRW4613R3bVjDF8Um6q7sNqd1MQEmaio55HjXwTW5zH7epWgMMAUgiuavPvhU",
  "key4": "2ThihQdE3xWFiUi5AqnUtSfGTmbE3PoiAUYHYTYF3kFaUj7Qpnp8VMAaTfba9WZVFiHeBQQHjTRzP8L7z6agYEak",
  "key5": "63gE1s7nJc67xQt9BvSDuXnv8UzwUEdbRgXubYAw7KtAik86m3Ez7hMHGyCWNoS3KNmWiJmnyeQ61iZqi4DKKyWe",
  "key6": "HhkN2tvAUc6W4w4GHr5s2nnHq2pHXgdzR79WqNaDER9kVbJMg6a6CVHVSdTPEpTKtF1hh5PheCo7iMJDaMSd3W9",
  "key7": "4zZ89BinFsRQCZbeW4WJkLogGJX9iaFaGcUPGSVetyYxwRpkaifhNjQsY7iuisVKgVvcDdbPZZoMzGnj9R9DoH6k",
  "key8": "45i35ZL8kYmhV8CZ97aNRugDFYHzZQGvrdpgMVJTY9jCJiJjmidbqp3QAavn3Snfy2BCNB7wmMeQUnDg8YyztFSW",
  "key9": "4XAV9ECuQAM4VzH4pZboY4f4TvrDnEQf1WNpF6sVhySzvWv6hQWAoktR7wjDeM4sdJSqJmx5F8bJDECDeW4gtG8v",
  "key10": "4cUa4HbboqzLubYg8zWbzVGuRZtz9gGikjNpokHNDXV9y8vetYAyUGCsoTADd5NaLNxD4wBPRNJxNDTz9uGUVuyT",
  "key11": "59MVbmtiPdsV8Dg9GVKJF54zoTPnUXCozdLThpnWqN1WXgUstaMcZun9UmbdGC3pNS1AwR8rWNRpgAGwSLkJWPQM",
  "key12": "3etpL2iq5GUuqmVmhHdw66n8H8Y6W7waKuH4TepS4qU8h3L3bqaRhB96WADMu6gRZicpZybdE9wbq2URUjLVkbjT",
  "key13": "3K6LUiS8xNd8s2TkLfcHFuEoeynWHqGxyqT9ykrmLgVBfJUsc8cYzG9nSmHTazhYbtdemXm9PoDgbm4phtk5C94E",
  "key14": "63u1B1zHxdcLU8fjzuzVA7MC9mcQCskzFcyBjTE6i93V1WcRsPdMwxCDBJYZNBMwkdNw4oPL5WmFJocLDmu4abVS",
  "key15": "i1hk3D6gtcejp47XghFYfLyNdcqeg39mq2abgCvtEduoe7adoaCHh6TJDEMsp9XfSJWcfQCp6CRzZTmuJnJdPHx",
  "key16": "2eZuuicto4hersKJx9xomekCZvbcpi6WZVUjkpCyH2pC2sUDMibE9v4NYRBD99qAwxH5Sxzy9Q65EJE1Zyzkbuyu",
  "key17": "5PdUmCXhNT2GX6YFgUBBkKxqQScCooNQ6RbrHiZPV4aaLhsahiH7TFHLpWwszWwZF8BCytFFMWu7qhjS9X7aKZqM",
  "key18": "5wjc2ZDukAz61caaWEWsFi8obRf4WW16aQocsPigBZq4xs6m9LXn4tMssPgvjFybAd1MqayTAGrWiJ6jvrNgei8p",
  "key19": "4zPLfeBFH2gnx688ta3FSZcB3qVwua9CppNbYVuTDPbEUNVhCiyRTKSAic2mEiccDHSg2GyR1mbARmDsQhDXFmRe",
  "key20": "zRhM8X8mdVofFjjM5cNQe6k1RUcYHLC9cjm7Agkxvg45P7UBdpTuK3e9AHKYiWk5Nx8xqwT2gYdcpL4iJ6YotK3",
  "key21": "54iZNpmcg6bcsm7QYg2ntejHfTTy8J2hiY66B949WEA1ZyQhVuStjkPjhTivU1isLMxVAnqKMMUgJVBBYFFgALb1",
  "key22": "5cBJTuVPHatCSHczmSY4UkzkLo34rgbkYiTtWFVRKr2Hdgfg5itnQ4FX9uifXkztjNfKykV9RuKd9CTGmJURGJ1Y",
  "key23": "2naNL835V6fiQUyaurknCzCkGV2fHFoGZ7odRbWQ61p2CG7FMFsC32fk88L5jGtr9WXXW3DhNBFPYvuEy3pX26nV",
  "key24": "2Bw1rJxaXcpAy7XmgvS2GN4b3NRDkAV8aT3WQJ4gkYJXp5CU4iPTtFk755jmpK164nzFRicfKbk6HpQqBcsoUMHa",
  "key25": "4XBsBaTfbdkdvXTeZiKvoXJFH1FWB5wponH2SYn1vCo2Mm943rV2qbYGR57CUUzYPmbfM6Nx7hqCQRscDvaU1N34",
  "key26": "NzCKmUcJx2KwfZStJJozscg9ZsGscYvK2G9ur38MHTNeRVYue6ZeUDmnQifVYgmHL6CnPJbmR8zJn5mbAghypGV",
  "key27": "3Prin93gZJSBnt1uvvsTuBgDM1nV1hJyncR1tNgWczd6UKk4FFjUzi8JdyeJsbBSYPEjMSqpLG8FKXoMosTaESdN",
  "key28": "4kbg8eiccTyDYebKtQx63dKqjA59WKkiKmf4Uur2DdJYqQm8o5ZF3Hdeb7JyLnxysKjhHqXPENb22kngyGFdFBzd",
  "key29": "4CnT35rK7D9VU4fxdnfMhgHgFVury3n45pHQXibB6ehcq1kdpdfZiRSaMQHPerkRkUuBU3e2E45zYWAoNWoEuKiL",
  "key30": "3W7q3GJd7oYsdJZzobDtB5JFZMEX3qdd1uTbQWdsQKTN5i1wsg3k2NupGVEHmHZGuPR9ozow1uCd7uiXw2qWeBB",
  "key31": "2boHPU3zkqQUZnFyTHjTzwAq1x4BvN7yJEV9pfdoMpmJV1qgcptTU7gR8ecK5QJz2wUNL3dLGPSZfusvuGGa4wEB",
  "key32": "GnxNpou1ed5WD8dA9muD3XfZLbNFRwGkBZrm6dm39ai2LyiTD5T7NDVbrEb1aNJK9ocqC5o7LQ6s9b1rXrHaATP",
  "key33": "2YudcPLEFfNpVtgTp9dsBt2pvhXCWX1gQABFT9NUQTqN9aqK3FxF8ftMVdiFfVhaY9To2waJfHp85AEhD7XdGBdU",
  "key34": "2tYYGXosQovzxJvzgUyhKk84sjSvhnvNnCPm3DdbACoBw7cEA9vZSSRmGqRGVdaEQwArvaUYQceZtwcZgxq12i7D",
  "key35": "5fATG5oVbxtSGa61ZshaqgyTauwJ52uzUyKhhT2PCzg6dwTfhMJsquJrmxxA9BQtkZ96h5ySCdU5Udk3hRPpU32J",
  "key36": "5whCUTQgQ3ZcBFatMKnMFPWqz65LtafJccqv8WafZ9r7Yp8GsRdaWHcPLabqrmuTL78RhvtmukS3RCkc1VAJBdEo",
  "key37": "3hmfgh3SDnTMDwm7eUxTjhDT1g2cP5p3Q3YsA9JQGDkAqnjdpNTdUJF7ncNnwXQY38FKdTZvUjdcFXSFJ9qRLbjH",
  "key38": "4wgL5CLWznn2XR2WJ1RpifBB77uoZaV7LCK3nBN8qSKCFUcwfawG3fVebxYfkki5vX9L6j4jwfe8uiELTrYotZ8X",
  "key39": "47oZ6WHubpNGQgQ8ARecvfQ2ECQNKptJhr5mDrKr4s527D1VKmJQ2xisRwXCqrK1CzRUvuzEL5iiyE14Cuak5J9G",
  "key40": "5gQpvs8SSCsGjBaP9jT89DtqSG7AtbMLfx5jhcPNE65CBL76829UjvWweuEocJk4DnXowWJ5CMp3mCFgJm1vkHvq",
  "key41": "5xYoGgtW8Vwod1Czyiryi9wbD9iVhpH8ZVH52LuRdXq5SN8MmWB2mykBucu2zHvj5pxr1MDRvLQ47BCAdgwcohCu",
  "key42": "39j9Wb5Etd6u15JELWvP1MBukw4CPQp4wcCiYMKiJAULxmg9nXjpz84NCEgJGhRxg1Ts4NB33af7En8a4PrFcsvw",
  "key43": "NYaJDW3bgPYNoZKhppExHyEJstCXKVvKX7PABUSL3A64b1rmWMzRyzmmuCKiJSzSQfCH7bZRpijVhtd2Rv7RsFt",
  "key44": "31oyDbcZH14L4ht7CEHti85w83wk92hy6jdwQ82CoSbPb12TNKe8dbkBQqKUrGE2mJfA84a9873QQ49epPUag2uS",
  "key45": "2bXPNo8JzU7pmsxwKX4ftMaUp7JR9P5W51fFaZddy61rnviFVpzwXCgHJWK4DzxUpamZcSdEr8r6w1gBf3tGr7qQ",
  "key46": "427JZj1dVLUhpvtcwnVVYe3nhEVpSh4MieV5DGfGSseHRGFEBYaVzCinHU8vF3JpSbxBqCUQWQg3JqeRXvfcghCm"
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
