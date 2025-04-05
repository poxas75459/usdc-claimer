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
    "4wSVEHdvMqGTa6tYJFzwp8CNqQLMNejHUXTsK4MnuC4tKRng1rDX81Y9KtiTPKEXuTJYp9fjDa74aopgqLfhFcV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zf24G5NB79vqmZhf5z8rkPwNhPFvzkVCsccUSn1FBzsckrSVuTEicAeDXwPwZCi9y5MgMvxhb5boZqTjvMqBUP2",
  "key1": "5aAPtYm3wKb2wJZvsqoevDEdrsowf5RHRAFFU6rt9oQ2NQtygF9xQS8UJpXtzRNhZWYT6d7woY3N7GZNJJ23QyVC",
  "key2": "545mUEPyDLDRvtL5NKPBTcMBA7iY8synwbY5AjQgVnMPYGUggDx8QoFbJe4S11WgDAxsS5AFDPwSy55QaUJjGbu9",
  "key3": "39e2xZ5MayECXBtaL57jvM3UeUXsoysVr2pUykCQUtSHKVL4ppEJ14eZJRPmiSE85JASmmgNFMzFvuPq8YUoGrnt",
  "key4": "4YiRNCgxUisWBo6V4FzvxhYygXJwatj9CpacvRaSMBSjkXdR6evdmQAJwwHrCfFaD4H1yaeSEMu2dbj7bCkPzvs2",
  "key5": "25j2o6gToV16hVWfD1S3PVkWi83bvUG1e7wpo5iyuNMhF3Uo6fcik2NcdEBv49f9R4WF9ZVP4KgvRrmfUYxF61Dp",
  "key6": "MmKctxu6kJ3dGScijW2h2PE9KzPpYMSDYS2hNzWRFjumiaVt17NqZCHdZz8fFCsvjFLQeadFWGKsseUPiQwLb3b",
  "key7": "2UJDkbjcHzRyLXzxRiV7cPK7mHsioKekkTi73cFvpdUcbSoRnJoMNK3smdKswTqtJiC1FVYKt9qRY6CTYwEdvFPi",
  "key8": "5uS87fgFyh1U3bXdZfWRMuCCpf6LYe76CssHeR8NDUcXSvZekK56NC3xxh6MihHcSzQAcCUxMCK37xPT2FZm7izB",
  "key9": "3pucDdrv4U1b3QvBeJpajsLQFSTqa8c8ZENy9sd9X27VTaH7bsoLnzomn1uaG2MzXEPnbSsC4YnAoXESz9FypZff",
  "key10": "3GhhdcApKJvghckcsC3stVRengu7qEQCfgW2gC2Zhbi26DWMQTtUokAPq3yE6vGKtSptMWLh1nP4qPTfyAHEYsoF",
  "key11": "4YncAREzXCdewY7jmmmKGN8LHkGFMQHBLRtMsuwysWpfey2Ryg9BGsmvQYyre9aKXhDEEURu9pcGD7aYoAyXQGrb",
  "key12": "45Ezga1DzVkvscUteJavaPwamM3M8JMVyTQTXcvobgFr6Pq3auXV2KDi4dforLCXXL6VdcRudd7fC4GABX4C8QRB",
  "key13": "3z1P4QqdSrKZDDBRdgaDPD4vGYiPG7NWfi4VDAN5nZ5EzC6gdAqA3WZxjwrfR28duUHArhm34ipN7XwK4npf8VqX",
  "key14": "33mxVkUYtWSb68KGG5QB4qmfHqeq5rpdXMCzLACMr7vHm4yK4W28Qubd86Hm2E4NPVkAsHgmFCNjdfG3S7o6hUN2",
  "key15": "3Y8q5ivwTadqRdbMAPUFvkwn57zVZw2qqkyise3ea5juoZbonGAmL4pBQCAyjzCKqbEFYudAnPFZmRVJhvWmPibv",
  "key16": "31tAexpgHuKrgZQPWS9ZZoD8Lmaqgt3xwaxkYbjtZJcuTkUrFLvdCifXUbS4Y5dR6XNQACcVCisHfCp97vUAZELW",
  "key17": "4mj34WhQ4EwiJHEcCK13fK2EyRdnoMczhcEnzfz7V8zsAnfALVJxfxsbT1sZHoictjMqyzBb8AU7r7nELHevdw4C",
  "key18": "32CjTAXDFtVUJyuPsJqg1ENDbmheB4JctCPqL271HDa58amBSJxEMWhrVVRgMf5y6NKjmXknpqAGuZyC6VFj57Ss",
  "key19": "3DZgW3YBk7suFRePkSqBhc3DdoKL2n4uAsCVLFdpzh5LBAB9sEuitxB6D71VcQro8VZWa6EBii9zcWkWnTmLw5CE",
  "key20": "2UJvPCGm5Co1ZWUUGJVjZLaj8ZRinuyia1KxhYmnZxUp1KvrgobrmxTqpj91B4oHVj1RwNV9P7PpUvfKEGcMdRRW",
  "key21": "4YgqxT7UB7n1ygQRE4yd8i36UZkrwiv7uqAGRUjindJyxdYqkQsHVz5VoKYJ8ziNJZmmqWHgbwj5peVbjm6MAEoy",
  "key22": "YGRk3UZz1Vzo4mYZYM8K4A3wmcDnpsriLmj1TaA9yGh3adkXdTqpDgQE4gveY2i2MxbAN7gMWD5wFtUjAgZu6Te",
  "key23": "123rDDpbJBh7mbUyFoifJEDMEbUakXE1tPAoabvKHmXGPPxmU6kzbjANkqbNq5zBowtqFsTEetyH7ES8hmDx3FuC",
  "key24": "4FjWKnNXRSGQfoJa1EaDkGxyp878FzXj2ZXxkqKd3yB84ShKfWXLmBkZuRYR7u3TytLAigGo9AWbCNWdaWxaUp2M",
  "key25": "e3FiCan5j1NGgSvDdpRo8HYtwajejDEbrYLKSiGXVu9wAAQhgVr2QdJa2TQVZyLUe1LxRtGjGnqRAvAT8dMZzct",
  "key26": "5Zarotd6VpMi1iF9heBKX1WxM1PfUsZsGXaZ5esChVpwgRjjBAGQ3n9aiWny2xtKdJaSYYA4qdWF5YLYrJuzL2aL",
  "key27": "vEcAryA5crv3AGZs2fdaT6xVkD5PdU4DxqhFUF2yg4UT7uf5SQpof5eZmndytdHSuf7hhEMbFbKCsYNaNY5iwQd",
  "key28": "52Df3dNVSXtTBw5WgmCh3CXu7W66nvoGn9ohHyPMJkNbKmUcHb4Zmh2KybTpRuDJvSu4xxUTWEAcq6bqaNf5NbUC",
  "key29": "2p5XegrbZtyUXChfBezWqY6sad2SmgkYLudezUmftW73Cz1vQyLMoLz7iGQXidjWTerjtuHzSYzb1hVpnbaL2PLU",
  "key30": "5uEoV6i2KSDCgbPcJpPBE4RDGzfJpbEjRzDoMD2xvZ9MM4Hfu9PrwzCXWM3drENGMfxGZDkid8JXhyrRA3EK99PY",
  "key31": "2VLoDDcsvdZ3tBib6GD7a2997xKy9e9uXk2pj74v32bbhqzBWCbzgPj3VWM5w376VoaZJgpZCDVNnBWq2vSyBExW",
  "key32": "5Prd4SUSoBbJJ6gqdoWfBc321aSKfjgkj1WyW4SN1chuapZUNMWMP272SbhGTx9FdHEeGG9PfYQKkU98MsW2FbC6",
  "key33": "4HmfGCm58VCgMCWzdZFnd11VAYAwkChkYW2fXu2mJ39YiwX3uvzbqHC7YWkaAWPHKkUb8Gd7oyRL2nqNWUGCFvRa",
  "key34": "5gmeHWG9urzmCsCUjxSGYt5P7m2ivqp8oFNgzdVchuKoUqbBPV1gTvnvASFWbpLLC6aizFCNX1ntbMQQ8SmX75RU",
  "key35": "2YJ2UZsXzaXc1WBY8xQnYUBMmFzF17nLdcKLo3Dr4LkDCyZm8F7iNhVBmkpLeQ9euTpydfoU5gKUSCPtuHPvfmzL",
  "key36": "372pmW54eRP82xDfh6wTAXg9sXrezzNJNn24c8UMXtt1FLMq6tJ7mvXGFFUQVZx6mpvHDTXbK9AXrGcLxdbxaZUs",
  "key37": "5pv5kqztnYRrWSEcyFB4jtRDWdeNnpfCqyaRbKow3FwzUkvgMkPaWz7ttSR9qk23Kjiu9be8rC9i9zpKNijc6CLs",
  "key38": "7nDnpF3QXYPgABcEf6ER4BBaZtro93Dd11G1j3sE3wQJCtuktVCGPD35UeVzv2nD9t2F46UNAv2oBqCgPW3CA4H",
  "key39": "4sRTRF2Kio6me7PXEPvJyS3sreMtH2nuXxqmcVr1zkD36gkt4J4JYk2aLtJevnLwSJMk1GYeYY1abYYKE9VR4sWT",
  "key40": "3AQj6Vtf3z5Pk6UiSv4nENVuMLvWrsJYoQFiZiH7DPnqWUnJ9yNkznBLZ4vCJSPkQh1iHHDSaNXr1YUrcB2rAWR8",
  "key41": "WinPYk64Qq1HAX2SMSTF7zg4WZHg5MPn2HszfsHPLSn2GwDbkBNZG8cYHUEq9Hr7hmB9d5tooc2DNoRs95N9jHb",
  "key42": "2P1MLDhPepWpGP8t4izRkPdEx8ZkHzd4wBCerxcuYAN5QzkxNPmRco1ZYPYR5PUxCT7XV7UMZowmo5jq9xgbJno7",
  "key43": "5KXy4wM85LAWnQBgfzCv2t2GxBTfWGE3WP5j65xHDZSaTjFK45mnYhEWA5E7JRy3QMEwyUaJnBGRbUPXngtJCY6C",
  "key44": "4i1Eh15DeRJEZ5WJWryyy2Qt4soRCLTTUsXYbVrwXeGTRAyqHSMrw6gvh8df2YBirU9fPFQR9rgzSnbY45Mpkppj",
  "key45": "7LAw5jnLoU5DLW48eCAaxtmkarz6EnYbAc5yXirzyUAjGPeLz2ZQpDNyfjbvHgoKsFEFDBq52cGnMKLgcDXg87y",
  "key46": "5kFC1yiFN55Kk2ZuXmP7TUpoqajvXkJ4NxA4rKJdTqsZYUb29HUVFgZXu82SPybWkHHRKkXsG7F2ReMopU184ner",
  "key47": "2pcDiR7pExfchZGT7ndFgCqU6Z424c6ezKMcXCLjJnoFZkQfzJqXYFxj9aJi8p453Qc9wD6NGmPvddzaqacwxkCs",
  "key48": "38oS5vaF1su4TyptG9rqv2JCfoi2pgrGZcCs8bd8Pmh4LQJp5PkHvnAUzD6Aucxox1oWcLTxQwZpqVydtZvhn64x"
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
