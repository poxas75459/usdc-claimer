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
    "5gBkYA9AsvFSEHa5K7hgPLSbD4rzcfMb9B9eSCzh7wbsvQzu2zLwaydzNxkLELZ95PHc1vNLDwopre7eDSmE4EeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSokNZPko8WqTowWFzb8kN1aQPbqxCYDsrg6rCJketbTVV9XTRoZXzCKcPmQpGMU12CVj9fiGL3Kf3i2fHniQit",
  "key1": "4wheiGcsFS4oJXuPm7R4Yr6t3ZjAf4dkkVEnVmwYZ5vbUH65pcVRpLgbN4Ahtq2aGjmkUzgL4ZYFGgX3E8Au4bUN",
  "key2": "vFfSgTrMdzChSXqN78ZuzxapkzfGubqfAw53ap96pYrxicYdwu7RzctG8X8vtoTDi48SBH3pV5m5oKMkHX4FHfk",
  "key3": "3PvS4Gyhb1kiDA36K2qPujBNwYHqmHbXjjQTaCpvFgiXtYwznmTR2ywWq7w4tKu4kYbhm7jpAfwZDfrF7tjETemx",
  "key4": "jhmaRRQJ4kL9UqLkJ291PwKgfz52CM4JxChmz9fEeQWYsT7DFjm7TcrY4y6LfKXTGZ4KB7CQiZu3GbkoouZRZia",
  "key5": "4fqp8AxzdTLSt96zVfBYAdVGGTVU3qgNVgUMr6VDaGr4131AZSMo63jvEk5YoLRvKGVwHEGYphpDAmH9uPVEfkJs",
  "key6": "4QAokeQA5Mg6AfQumAezXKubnGBmzhuVeAnKdAskVAkXbJ6QKkS5jYJyBMceTcYmFyLjLuqCY7TNz8sMBqTiEyGK",
  "key7": "4a3XN47dPCAnarLBJHVKoNsSAUH7vaVHa2aM6jt5MH6dUAz6ZXdgbwwJtiseUa4b5wxeoyHijrHSpTbnHPMTX6zJ",
  "key8": "3uiaLWi79hcBGHEFd1wb3qdSArKEQCp8ZqojN9B1ZgEX8cz1iDJs3AjvbzGZv7xiQhLKARMEuU5AFssrMJBq4mLA",
  "key9": "2a1XGus4ayXXCJDPdoan5BteS72LHMMgv4zefJbuzMgmgQSx7ZdeboBeuUN9fN9AaCyPNaHFDbA2uSHxeiLN7uTz",
  "key10": "4eTgWXMQdYjjyDJ73yeuB8ZVhPo8Mv3B166UKGaNmAY2V3YmaaYdjynuTXQHF1A8aoA5aFUNxBbdn2y3kG8BfVfw",
  "key11": "2BrGTF4r3Kau3QSsePhkuR4M6Ykj2d9R8fvUridasUUNZ1fUAzstpqf5J9wub8e3VEWjA66TQjQZEi59Rk3X2tsp",
  "key12": "4QU4nVh4igBaNEwD88mqPFygQniXdJGGsdo5MH9LpiBg6MpdT2peQhNzCL9t555dTGf3MMDFzkdP7eo9cCiExPnZ",
  "key13": "3edx5Z3pR29Vue1Vw8L7948bnMFf1rQtpYxXPJfd7xf3K7NfeNUUfYYxjVUWADWhwqs2dbVCMnW6LdfBhS3zcxWP",
  "key14": "Meznjy2XeF373b9YeVHi5fcYBbBYLaApy5kdrrby7Mqh5UVCKKb4uKKfVwvzGWzNoV12sgy4RrrnjUkdc2wDXxq",
  "key15": "35SphmA1zXa1jwoRu4u8qdzS8oDY7MhzVMbApky7RbetTUhaLUvX6VnCP5FnvmpbMdqUinQyjYJzeAoN1ubQCdvr",
  "key16": "5JBVDDUCcjCvHcSdZ7Vd3W9t8Ce8UcTPQpF9sVequHNCZxvifrVjpkTQFWsXDkj44HGAviEN7xAd7P5BEhrA8nr5",
  "key17": "2bvNSE83sh5DhA2pwGciCCtkrZkMFgSJGZvCaFM4zKfmrNDkxuujNW3CxzL8KeBCekuuX4fJjVFuJKfrn5xKECz5",
  "key18": "MGwi63szjtn1pHE4RUcmGE8h3HdvyVQbiUK85SNfa6vGi7vJL488b4xJeGtegYBTHRYeBXY4ZejLMfCm6oAbdpE",
  "key19": "2LC1MPUjnEh3SY1e18YZd1q9CrKUtWBgyPbsRhCw6fXn4S5N91fCMn6TLLnmj1wz8V37cYhK9PJ2SuC8F5HoXG8v",
  "key20": "4a4E3Hm4VFgYd5bPaugRMYt5DJ4P4eDwcaXXRV8m3c9R3fhzX2JLqXPBqtBYbYzvAshctc2hAdrfRYSf4vmN24y1",
  "key21": "4akGBoaB3WizxK5rCbdZJzitesb6DUNTqpfRvjjPb8TM6AZdEjRD1fNMxuED2SiG8cjNDwvYqTVAKsQQwotNTdKw",
  "key22": "5hNE5nACdpTUHNRSWefEtNtzrAVjfK3jkdzonXTGhvN4poQtTdvU3JwkKoSHgPMbwEfUE3LuKc3M5RFYDumuA4rd",
  "key23": "5ATAqVxFgJAwmoPYUEtndieQvzXPhdPHRs4DnrUfxqGaPpWsvHfowmoBYv4ZAzKjmN4X8ev7syjNZnC9YMt57YkG",
  "key24": "5vBvUBXfEsNjwGGVG2j4WMhvCESqydf4PGq8RsMqEfWLcJsaj8T1tXyHFQhWZRdkXQ7ZZb4Bitfwm2yTc8ioJ1L1",
  "key25": "2wieDRrKMaQDPS6hAJJUAY1LfkyHkBADErQX4t8feUMWiLsb4idb2tJLpWBgdLjbK8ShvDH7nD3gTUJsaW6jwPra",
  "key26": "QJcJNr5Z9zNwvVTZ2HfRPFbSDK9VExCt8rAxH14TXsoyddARqCwNAczxQARH7NJ1xtp2yvtoKRsqqTNf5FxZb4C",
  "key27": "4kxGr9kpbuNN4B7ny4E6hdN9R1APRkdv51FHkXuzqPym4C3czZ3bYTtHsdfSVZ3DPDzV7mqwoZu8a8B16fw8Rk15",
  "key28": "3oupgHVnGB1qVi1MdJyaNoX66mP7TeotPN972RD1ZD8WLB8i98JhA9rGqse33pur4gKoqEoRvQCKrBrEbEJ5rcQB",
  "key29": "DnDxn5JjDKcpQzJRVomRty1cnyYmbdBNDCPbsLMEdoqGmqvVs6WhGR4Xjdde41akjzwujLgPzYeAw2VPMRddjRY",
  "key30": "2bNGxSxmevd77Nv2LeZHwg32YqzcH5uPQnV5bBTZeera5AMKWQDdtm6FGig7KW3j9dGyF7N1pgtzMMBC5r3MF8hZ",
  "key31": "25yUYGUD92WZwaEAFP4rNsWRagvY4pVvjdrHvEfkhPmVgpkAf45i2NwaMhFxDfZgcy5HaBTgnM53LnduNqiXT4ac",
  "key32": "3FH36HfEv6yyhWTF28YifjY3j6uWPUx1cTyiVhtL8ya6YYakpJjSsa19hxKGBigh8bHD1zD97KgLPf6PWPgd695R",
  "key33": "MbaqUW9rjPC7DkTVqNRGyF2Lvzxo45N5nVnTPkXbmxSZUvw3oaXxkMukkN2T47pNyzXg2JaUA81FP4F84TEL8qN",
  "key34": "5zyuKpcwLeM8it7pKQbUN6CpPvh75EqPhbbrXzmhtTdyjG3BYaxWBQm8rXhxGYGnCvfQX3Qjx3H5HsEUrh9KEYqm",
  "key35": "2tB6TUxM7U4iwToFE545tDveaQrYNW2eZEBZFagi7Kmqxa5afpYq3bdD4EAnCmGYxpiLDsraRDJDJcD9f4gigZii",
  "key36": "5SAEaJpdXKacD8QZHnq7gv7FwCLUUEMnuWuyZ3NFfNaFj4om6KLdJjwS6ErV2jVVNTc88aQkAagn6YqZfC4gSjk3",
  "key37": "2VDpXnW2xi8eJCooJgXB9DNtQFLHrMEjgg91r9S7LXQSnm9TWF2fBxjnF8gWWUoDc69mtMedbJ3fGin3KvqiuKVn",
  "key38": "3xjacpv1EYpemZ55i4a46arZULmz1uqcroMm1cSABXmoW92i9UqnbULdwqFvrdvHPbrnM3eL81JYWAghKjs3vFHu",
  "key39": "58VGmfmq5PrpB413jss1fFVA17eVQaAEf9kKYkB2bDSAAcVr485ZfzosxykhASC8a7K7Y3rmvtBkff7DoKUT4SZx",
  "key40": "5ksasWd9ncLo9xtxFPChcYR2gLGJ7eesG6Q8CB2RDtaGY39tFcFXyRjufreDLNZU795Lb7bqVdjUGwcX5X4Q9BdC",
  "key41": "55pT4kCkfnWHECrX2KyGcmCdkeW6E8xsywtb7M2R6nXThu7GtxDJ7YMD6HriL58K2P8UhmkFUKqD4FczLoGeRNye",
  "key42": "4bqR1qEpqEze5B6Yxphhuo2AuLccnQMQ6jWhGSPWiT5oTkmWuBU41CpQ285Mz2PrTnjZQBCXm6hZzpfMXweSAYfW",
  "key43": "3pYR7EFCNQpnz5SjEkMkeuvKvDMfwXQBFBAXcoBokUzRT153jejsAPo5VDvXKM7FVacdri8tm7ejDdz4ENwkxZpa",
  "key44": "3U811QNiothEmDcfHFgaHGRLApAw4Mtp22n5cgqvaDgaxNVmnzFg1K5HJbNiZxUzSyfUruZkgASWZB5QX6fkkXsK",
  "key45": "3efphm3FEg53VMGxGV9cnQoLXU3rZNukya8zVoQWXN5L9pTwZNPD1jqwSMJCb6NqR1tzEDgNxvhBx35gMkJ8yoia",
  "key46": "455xx2kfRaUmUg7LGm4PzmbQ7UahHB7p2Bi927ad2mHX1GTbvWkqAkRKPJUhYuZjYGsmGyXt6wMcpzaVLYsaRBGE",
  "key47": "2TVw3GjWSrH49WXqK25yKZLjc7tRTpqygC7NUjeuAfxC4Hin6cdsc8sEKxHMKotYvUWKdNCQSD65hWRnnwSGVavL",
  "key48": "5MerpsUdxR6EuU6M88dbruwLR13Rz5yXSpcdX42eHgSYjmmx7HGBxJCt4SUNBj9urkVNwZTUCdnqvo2iwqDXcpMU",
  "key49": "QndMcHj4YtPvLmrV3uZgvqYRwJLjoWDKNAoSd4ZsrbohF8mwTHvsVhyRqAjxfqaR3ve8iKjsSLtAdLcz3CCpPnL"
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
