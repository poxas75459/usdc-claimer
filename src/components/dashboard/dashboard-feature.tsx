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
    "4W4CbEK68H6K62z86ESU8MMA2FBTKy5FN2F6q3NDX4sdVGE8dJJpePenTzEHMKefTwB4JgVaVM4ibmV25aJZBKXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FRQKS68Aby4ssTMyxPpueJhWjk3PhCvAXTtmUkWvRJsTp87SunJJE6EHMJZrPTkeoU9NqgjVEkApT8JgWVU6SER",
  "key1": "43NQYWk9V61Ny4mjVuEurCkd1jejWoXFGaKc9HGir3GaCeEXQ77H9r1JYoYuwGnk2uwbVvTViGmfS5EHcrZERmqL",
  "key2": "89ePpqUx3qzY27422vDUT72wEfJR2ZfstVr7VQmZaYyo472QXJS1ok9LqW87T7hcLvoob2xJUisStmWRRkhXWRA",
  "key3": "5ZHi5oE8TebF8awQGtb82DLyxDvXBEagtsqHqU2UkcrrV34JXG61JCGckivJMuMLoKT46YLbbT2mdzfSdqo2wrEU",
  "key4": "5U5bvUdnr3kqAbK1vKgiW5PHkReWqfxgyAGVqoQryAUvhgyr8ya4DkVbyVHnab9doQoKpf64QaFePT9izUxudGX8",
  "key5": "jxDYFtkkaCkNu96fNWtcbtR6neBzHVSV8J4oaYyLChDxhhCA9FykXZL5oHCpCUCFowcfL6JoKBqZdc9ca1okwtn",
  "key6": "rkGDFkgj1djAewY6yxUo5c8nFJzeHkRjaJiyA6tdbLBk9CtXv9EQuzgPNhjzhtbKnGJ5PnoR632mivYYKR3299e",
  "key7": "5j2NV2fBXpeMfKttprMJ6iC6j4dimv1nLbq5FAdme68sxPNcqDcTcnoQQmuTjtLcsiuduSGNLXpVdBw6RgM1w1HR",
  "key8": "4UVTvJmWK6pdbQmAKS8VkJnMdDNPkkJUiXj6bYc7h4qNd7r7VSnXafaf1xogAp7uHqjEPKXx9R8EXJTz7VXQRa2k",
  "key9": "4bypVEvFYjEgF9sTZPPNHfP1RRseetn5FY5gUEi6ejjyAbiYDSCxbb4qaSuMd6v1wfE8GZc8VenRZQ8YJ395FYam",
  "key10": "24FKqqhVWdS9XtKxzE9Spggm1828dqjsKUFcYq7aF9tBgRrXuGeaXQpoLZVYe3oacMPUb58LoqC7xnHzH8qeU25u",
  "key11": "5gorFA52oG8dJijASQwwjxpakMmaF4cDwucbtGwzUg5rKNFBKeSigwH5ebPyE6wubeDTXMZq3Cs5Me36ZcEJcBog",
  "key12": "21jNsTHG6vZarsy9NVpwGhuBj3Dwan3XFk4idfTb4Twdsk3wvCVxxN3McwAFWGR4rkL9w5zTweYLfjTPsho1W3hT",
  "key13": "5UAkmufnHUwtxSqm6RvyQguJbexVbpxg8aZR3W6px8NYyqvYDJQZ14r91sdw5P6CXJLaKxo1XfSEnzJnuefrDwoL",
  "key14": "2SZWCwYv9hXqRya2Gi3sT3sfw71CpGFcU1byt5YFEADszCAXogWy49QuWPcXvjinfxp58E4aSUYLDT74xaqDhjds",
  "key15": "5jruHxqBXPVaLhA7Q3cevuwKhStbn2fgiHVcSp8D2ToTLjEHVz4bHhsWmnh4Ru6yahmPzFmB885W1X68Zf4nmLiS",
  "key16": "3BRf7zMX8N2mAHYhuQvDKQNbguJh1YzunHEGEMwrevNc7ivMEQ3eYiyLMEcVTAEzZx8X9PuteaCUGHedUF5We222",
  "key17": "679YduDSBDXhV4QryHSoUJQCkLA9yJiqdYxL8bmwvqi5mucm5iGGbWCX5zktFxfwhYEpbZGtY1N2NFsVkoxJrV3J",
  "key18": "2gqL19DRnaKjod5XegiWC1Ucb6DjoyAiVKvuaD45uXcdeKck3yA3NHcKPudF49Xk81ByJA66q73mcRWoYc264NeJ",
  "key19": "2WqaVUKRmA1ihguHhSsezHahP4r3fmoHDpW2Gki5qDfqD3CEDsES8vYU3QEojUQLgFTjaRoowqPpTxdgJ1Ngixqg",
  "key20": "XwyYe1RiERs38pgrx2dvvM5M6UtnxkM7J4GLP3LYWfjhNrqrSdH63hpqcYkjwo3b6RWHBntHtXNJm6U25U3AaVA",
  "key21": "4c4X9vTdCUJaqcQSagJu5EGFWQjQKTH7vfosM1wZpyo32nJFpTRiGzKhVEfxR7GaEf2yi5PbM7z4Nqe9b1tJYStP",
  "key22": "3wFVwxsD9rp1S8hdQTPWePvEAAj5ZNr5RVj7eiFeG6F4iassZpiQGp8AEoVsthDFAZ6QYmdHMucW5NwDBZHcWmsp",
  "key23": "4txzGArHHCeWF41kHyJVY5GV28fVxsvUTcNHNo7Pf2vVzTTYXTFK7QTohYofq7pXT5WsAQeT3TQPvnAxE5XsaeFZ",
  "key24": "2ECjCJsD7mYhenBMZGXjweGNnmHqxdH9z8ptic7qMZQgmU4FdZjKpLRYiBYK9kHtWWzfYLVFrKfotmf2uCr4AFyQ",
  "key25": "59HCBiuvPTVkTxyH1CrfmbJzGGYD1wJDKjYGDLExiMm6vZDGGYYMQVEsz7ywm71GV7dA9QTE7PAWvBKJsnFSt1V2",
  "key26": "3DDWuSKqpavATsFyTvwozhNiocYDjmxzyiaCvtrztPSDDEKdZsGJZMvrFJXEitnQ6BwMjnRAY1yr2kziAfhk5X7o",
  "key27": "5Awu4MFLW2BM6UzMvmRw2bt5tA4GQbTLaCbJY2Cj95tSPgvMsL113DfUcGEZdY6Qr4nY8mHJjuwc8X5o9MV3kA6S",
  "key28": "2TTx8QjEqaYD2i8BYQca9eCQyBaryVLtJ9o5i3UHrGV9f1eUcnccgFLayQp7scwxZG3WQXqQBb4qFWkZirDDNo4f",
  "key29": "2MNDChDY7goZS5BtyyQtEArZXbEoTiYvzdbZzoGR1hs1XqoeBgdGETHNUvVKbMEmNLWEK5fjVr1AvMR9Db5uZYPg",
  "key30": "4VhrTguemhgqSq65961317BMytRKKiWJyLg6HXh9rmmjiF32sh8AC3qxrGZedNnrq4RUQFewdPioadsaekkdPQse",
  "key31": "ph7ND7Dnsnt74uR1zBFPd8rndZAjD1VxKMoWi5JhiaogVVaVkACdGjew22FhsxLjGADrdrdEPUwhWJq1LG7mcCC",
  "key32": "5WWqg5E7qpkSJALtZ6sfaYSKuq8Wa24FZAXvMNV5z3byhLapQLR42KWmXnC4zVr7R6ppMAdZLeid7RA3ZuNczbDz",
  "key33": "2Y2ghKw4K7cBfXsrZEsCvQJf1R3txbxnjbL6aqozs8DhYpbkPrac8f6cbP3nj6LbRcz39PQ7Xq8M4aV1K2FehRFd",
  "key34": "5uJoVK4W5K6S1gYos299DfYVNaH15cNmvGwoLThQXjYi2faoKH9MLRZ5yNUxst4uoCcYeAto9BS5h1WHVGS7W2oe",
  "key35": "By212rm2f8Uy6BzDhqfSMpSAjaer7PyCN7Ldh4qDaXvKgCurZhKjnAkRS1jLj46g4x4BjxurdNVh3ixd6D8XdhJ",
  "key36": "4odpZKcCxt88Sg3ciV6sU68tx1Jj1BnXHFuWq2YZPiqJEojDSmM7cBh4GiZqHfFt7rMKRmMsN7SBsaAwbazz2c4u",
  "key37": "8XfhAEMhCnJuk8iPjfZu4aq96S7gV27CZcLyisbeXMaiX6RuyMvTuf5187quHLZYk3XT54HtDDVcj1HzF8LYMMm",
  "key38": "2BBpwDTtBCpyWR3TmSn8bZAsxpxtvRHU3n83XS9hq1Hg78VYEcZN1CHG5v4yKxBjM2WFNkg12GgC97EH58BXFZwb",
  "key39": "25WMpayEm7BpK7Hkn5kUxJ8DaSKC1r4BZXxLNKtsWeSEsmDw2drb1xS7QQmkDxtFXu2cffTGzWZzD4BXxfG9eHD4",
  "key40": "ZNZyJSPoiD9FBqHo5YV92VSUUzEnpX3qvbs85Xjf6MPjcLAnktBUn8tbSz7NsYh3EtqcAxA1vrDxNyCK8BXaxVR",
  "key41": "YwV65JYhuf7V9qQEeDf4o2aiJTrfp9dVoYpAdkqbMkdEtrYw3xh9FdHBE2V3bMqNWWsPhx5tSmj6QhNBz4rW87d",
  "key42": "2ThnHk3CJHahkCd8Trc4d5yhg3xadWjG1ZReQabCmhTKP4Tkhnc2uUbu5CDFWJsBFa7td3cMQB99LS4f8BJoUWR4",
  "key43": "3cdu2o1AHbAkchFSkrMxfQqe4krJ6A19d94mic4mooAyPJbfG4HE5uxdynYqCgkDj5eFWmBuTXokvriYwfvQD73n",
  "key44": "3rx33NrcUPZjyr2uKGJjJ4fTD6bnFVks4WZHmkG4QnDWHM9jhJVXHVy7smMqH94L3tdTveWCoxxKkgtZTr2EJiZe",
  "key45": "DDnoJ3KLirJfDzXTTWMBGpFqu2syETSBabKggw6D98kPT9j2rev27KtD5a6E6qqDu4EgSYRZPucTb92pzSvUg82",
  "key46": "5pcNroWzmWCopbgiBM7SQobPBDcHLowuXsqqNe878HMhkryWksG8MQmy2HvCAEL3Rk3SRhaHAqseHkDhQb6MR4TQ",
  "key47": "3frNcZenM2BS1skaxE9xGJBSTpyPDVV29Wu2heR4LXdjPLMzr7v7MSXSu3XrwxKyrdnV419LcQHHu5UKR5UMVaMh",
  "key48": "5nyZc4y4qaTbqAbnL6rM4xtz2Xc7b2TSi1ssdJRqfQLCSALEW1iDH8ZLXJaQzvRPWEh5yJUMeoxFj1ekNnUzGeDZ",
  "key49": "5UiFuNGJMqaEd5mkb7ysaDFFNauz8UWy9QqXeKENDmXXdz7HFDr7zm8v1NXwtATBKrorbNDBDRd1v13vj1mRDdac"
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
