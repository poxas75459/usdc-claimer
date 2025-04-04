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
    "VzFdo8Aww2KEV3QdGNnMxTPc7eYrGdFQJjx5XMWd68e7KosiW8YdX5kTm1t16RdTJmHNNsPrgvZpjw4KikcNs6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AM5ZhBLsma8ip49hKDiqe1PJNaKTBSBFGDWYYC26tBe9JeVkPNf492rHqdffNMezcM2UdLnSiqxCX2hiARFUU52",
  "key1": "3vTXn1PdAbjRoQsP1yKBF4hFKo6SDQgDioNX2J86yDun3awws6qAn72PVgTBdNUaZcrkchcjHaTuZ7oevmAR8Kht",
  "key2": "3TnxPmiaJj27kauhex3AYjUVaQD1YsTGm5C1PEsyfjzGuZTkWzifNq1uDLXXLDMq2uEje15z62SYWece1Z1c1HAu",
  "key3": "3U1nFCHLuusQPnqrdLT29xJimEKQE9cxNUTbq35mUrqWqdnSfupyHQz4LsQxi8M9fJMsqpptBcTZHhdwK2V3wzsK",
  "key4": "2ejGn2FhLEHHosvnrCJbGQpiUrKodRgv8FvHaJWt6azzP9Y9gf84S4dPpEWw8p4r7kjxkD7YF2jAScMvtaGYTEDf",
  "key5": "3fh4CYZRNXocMHwNc9oBFUywMbLyHA3rnvuJjPpKXuF4mdYm7vmWAPNigAtq1zo1LAcrT9X8RPGivoJHcQ95w7Pt",
  "key6": "2ref2hSzMguycLegRdrejHrnRmqCMARgAg6U77Jp2kbnGFByaERP8FPtUyi1CzsJDWetCtqfgf4rybtryeHVaWTf",
  "key7": "2jZGf3DGH4ty47CeVPweZKrhcwjwSKH4q92bDg8egPBtmUyPDiQcaFXKdUqBKZv3BXVsFJgiVxXVD2fkz5gW83Rs",
  "key8": "5ro3gLVWqCP2MgZ1iM7Unn77ES9YtJ7HyFS7mEjHxaJyzbyuGoe2Q8Du1MWXdivDjNma6oth5eW6Nn7qSeZNB8w2",
  "key9": "35GQQaA2eVXu9e8JWztx1CXDJHHoY1s5WuxBH3L5Y5tEMwcCEZmvgb9ibMqcY6Crb13nRg9SjwwYbQDQTTXZA3R1",
  "key10": "41Axai3KcwxQLW9ses1KnDfeuLf1wBdup5iEMR2d5EYZFfoWPB9xM7DtdBZqwgPvpjuJFDCoYUPPeLreWEtAE6Jq",
  "key11": "5L2Xz5HGKJWQN58TxEjobPxAvsWADfqicspRtdCoLQjXG7wCcwL84dPzahYnpHgP2zpFPVMFTep94xdb9JotH5cW",
  "key12": "5JN3qmw1ScAGUDVqhiTPfDmYESLzRkevx5GLicLh5Cwi5ZJwGi8kAAwEP1eXKTCR1mDmkDKf5T6AGzaL1QRkvcGL",
  "key13": "G2QsiKKy6gdug5DkwP44BB3hcTnvD5HgUWeyaaJ6FKeefjsVokLMj2CcaVvZD4VSknq8HaLyFgSmfDhvN4SKgbq",
  "key14": "3ptoqCb4KMGJUgVLhKEQKDDgzo9AoXR84qvZfHqXwXDSZFkLA1S3NzkmTTB2LEtNpoeBRRrNTpuQht1KNxWCpYzY",
  "key15": "2PuofUqdaQZXoDNXQAfCP1PgshbV6KC1GjybLTLAw4tmP8CGLYsHNW2w7qzFWSJRWfu7jsLnjzygMENTRy7Lss1e",
  "key16": "5TjsoFXsv75kKWWgDntYBNVkM6o5QwagVzb9vYyoyx25H1JPSynY6VpbyJFn568RCiHYxVeZ2TGyiLGtfkbnZVNf",
  "key17": "2yPSbvSQo8BNsThSjUkNhrfGyFx5hTSPmFyZ7GGnWs6jCGGjQN9nvBgGUEev46eLRp9f3WEdV5fjtRmh4GWapRTG",
  "key18": "556YA71znkPsmw3izczdeVJvteoyy7hUe9xFUbMTdr3oa33chLx62C7FphszrjuBZ92GGvSKkJJoJDdRKdrgUJeH",
  "key19": "5qNAZmn3WxxtpKHsZWJc9VLXXb5NFoP2UUcogQAiz68CcZe4FqADPJ7V8EHvYjUZpjuYd6FD9MUPDCKqAqWFzjuH",
  "key20": "2FL8MruBf1cdLSgrp3xpV65CQxz5Ha168Ukii3K3zSw2NyWST3LJBziFLwcu5ujDnoMayhtCGHitspHy9BVHgYHR",
  "key21": "5pSsf2D7H5F2racJ9aDHwnzUxrugobSY8tQW8xD1Ywd42UZJMK7KwxLkNaP7roGxaHUuG6y8LY4Hqi8yFxvZ5cia",
  "key22": "4dhUNL17CBNmb8q5u6QZfkgpVoooaxNLkKpaRh6fvxPSm7nFsaW525tDnSqTdr5rpGa2TXiswjzdX3DFLmuXvhej",
  "key23": "LjzDpwZXWABsV21GZ75WeTfEBCq2GGdsLHuWnrHB4xTRvzVjGMemVqc2XgmrtpzPt4X5LwgXvrnBfbse9oMp5zy",
  "key24": "3KaD58PWFJo54NxNYqPND9AynuV9otCikASvQnmUWB6KyZs13JWSRiRid5WgnQMhG1EVGH16uufSrviL5Li9kTv8",
  "key25": "2gK3oGBGr7FBvbREvzz2beNZ21iNyzqWA4UZaJSBh5ZN2ygFgVEMUxRBQs3TpFocgTHgfHqEKJzKDvueR4ST2Vim",
  "key26": "3b3S71ebaAnXnwocCU4SF7LWB9gVFwgWy4WWxwsouP9tRf8H7LX2i9oRd5Gu7VWHE5XyRRUAe38zpk9CjnbkHJq7",
  "key27": "2o65vsUVtDx3T3zysLFqc3zCy9DWRsvrChThuQ7sEPZqRAhzhJmqcqLG9aXapzuqUxQWAJHzn5kN51Zgpc9Axawy",
  "key28": "2YvdFpuSxfKaQcLT8H1aCZTi7CpuYAgv6hwHjEyBu8gMFxSXt7z11kpK3oh69reoJEfUfXkuCcapRWNrrhTy1ZfD",
  "key29": "AUiG7EDmAnNwobUGFibVzLVgqe4Fdo5mV2Nc1KGAdubBPPvCWREh7K6FjE3fzJixoqL8Eb4DepSha2Lqot2sNWF",
  "key30": "5cwWnBXa3q3XjCRqjixD9UAhcgN8iRAnHZq6bskDNLDfkL78tQD4aK7jwfn7CHg65jvNH7xudRkuh3Gxi3RFxai1",
  "key31": "BrowKF6syuwaHXadEWyNo3P4ASvp8fBZzTi98DBsexDohDpK4Ug7eKMSSausPjEJoo2Pv8xHwmjAaGxedcLEoKC",
  "key32": "57YBVWoSAQ4DasLs5R33A49T8idfiH2tL6tSEghH4HGsJQXE8SRb1Kc2dQn3H1eN8rp1ExKHaHjrX4iWCnrwQ8R7",
  "key33": "3S4Ak7qCFVfCzo9mmxvjRWkNpNKg3VqviLrCsuuuMGJguiyafKsetjxBkEtvczgLvc2D9nUFstQHYg3idZyB7rp9",
  "key34": "8Ma9xMDuH97qziHW86RWGP9tFTLiEP1VTuipMEnBAU77dzC6E6LqKiLBFqBm8rUTdvA5YpbN8eHtHLicrcc6qmn",
  "key35": "5Vus81vv1NYsAke4kRY1w6yJzaUqeLqZQhnC6C6QQrCtroXq5pQg5FTYHihYHqM2bBK94CUnkCQXZ3Mt2QdJ7D29",
  "key36": "2fbCCHpS8GuhGv2ewSJVBdW9VC9WDFRn2yBQVh7FE37pP97rV9gajnThuQ6iWcqmjeTf3pndpR99EsXR8fyGiAxN",
  "key37": "3Jh5UyfAPUBXUPDA6pQUKZ47rvnsfE5Mk41zgkak8aFUEgXHhppF9QExDDKspxWCZJEPT7ffvrgYLTwhvEW47kf",
  "key38": "33pPJ9SVrdvyTzAznKaoHK8az63Dtsn2vuAQi4Bxzg7ZA8KEmexDQyw4dtMggkFNougFAU1nmkXASf7JuPuM846p",
  "key39": "38K3pjUu5fKKZhM4WwBSRuSGX7NgWMByAv4iij8fxPqkTyDAKjqL4rmKChDPtQYEWLpWvYXLBLm4azZRSD5aL24k",
  "key40": "3rJ3cmJ5NKGSTfpFia7BLEAZ6HWj1iXEg6Na1BhMaRUMotbVJQKvYg74nVcMB9okWrz7iWwJjte7jEqwuWYZqTZY",
  "key41": "5rDkVLzKAjMJL3AJb2Gt7wkxysGyYa6CQmtUNBQH8NdHt7Mt7gYLSJkS1tqKgyq1VAshtXyvzJPPDeYioxuKMbF7",
  "key42": "2Rgu2GGP2DrtZTKzdbCWTP8ZAcFNLPFcxojSaLgcVSWef2ni7o1pxG76FjwUwWs13QZzyrsUJDq7wHwj83XyEukw",
  "key43": "4DurfpznsWsDmoRtHaCKkDK4Xbpz9GnkTwJULqsumyxwSHqTdXwaHtUZ7exSpKu1dqaTU35S2cRxwm6RNb8oydWJ",
  "key44": "5USdywTUyB8mk56VNNov4KnLsbQvUNbuhk9eJsGu9MyZH7MwS1oZP96UKMjWjXTvMHX3n7XizJYaHXo6o2Mqm9oU",
  "key45": "3fyS8DzEe3WkHM5y4CfG5sKedmvRtzX6omb8yY5Qhj7ziRdtLzaQf52Npe47mjv3GYNqRPxZ46exLu5oXNtD8thW",
  "key46": "2XvqZDwixvMJK7sJoX2sG1iZjUvPJQoXMXa7XDFbGmzUNmVRsKgDy7Z8WKooyRdoob57wzJNB9eAQoWFYPhBofsv",
  "key47": "26FkX8MLfFFLSFPfW7cNDinhcJhv8YTAoRR1WNXXBVwcVQLBDnoAPh7YijmRAPw3iqny18zrJyv3McYHeDVSuskb",
  "key48": "5z2KMWZfxQQrXQNXuY9TWFLevpiZJGgzphnH5TdDApaR3UuPbaAZ7gAAgzeNy8JFr32oyEvPqm3uaboRzghzXudX",
  "key49": "5bCrej5iNFS9334KyFLTseuB3rJTZXSWkfiZZybkiVXtg7AkQ6LeagYx72NzQdA6WMAvdA9wNY1GejQQfKwM2HeT"
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
