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
    "3itkw941U1M93ZYUgbYDkf9G7R4JEMzvu2PtHnbeSyiYB9hShyo1v1UYY4XAaAmdSJSoYinheqkepF1ma2cWisU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHU9yXpgWUn5M9cLcwjjU8izw7GmhB7vYVD7tvZhRfzsSh7fVkfE31U8oT724X4SF3qDbQPPWKBv3akgtXJQW6D",
  "key1": "5XFcouGDhq7A5oW2TpunSCGL58HMuW8LPowV5DKuASn95P4jSUztADaeaBP8we4S91JZsz3Svp6t8EKKwG7o4SNt",
  "key2": "2habXvbjBEiL5KUSZ74rhPxj7aq4aiymCCbyfZRg6Z4YCkovTrsatTgk7CTUugUf47Va9GdiuoL5vxT7cuQnS6VH",
  "key3": "4P8sDoEHt155pN9uURQ6PzSPtSAgcdsfGWYoTiw2bS3MygY1hMySaykxthYuQy15qbgZZkdj7kpFXNvaTTLvEhMN",
  "key4": "25TcqW9dRiM1ff5uk3eF9QsBxd3sAGGySNy1C8Jh4Je5F1eWGXm27Yb5bdrQth35doVQqR3TmBLzweP1WCjM5fxU",
  "key5": "oe59dasNAyAVimWcFNUn9D5yE7ChkmZAU6pevHFPC6WoBCFHqf7ZomZKfyBCETCoVuqqvqDco3Atd1dBtCFaQbc",
  "key6": "3wiYU5i5ynrSnyjr1qtn7MQpPg6DXBHesfh53A4XbLagf9bvoFTnsPZPVrR5wETX2E5oVfjfh12oMQV1tQfpKzEG",
  "key7": "3ci3vobFKQpF1mgx8FRkwM4fitWEKL4ey27mGRXmPJsL3tTTMmG91Pxn2gKi3RJsaAEUvByLhSE1db1mrhgszKV2",
  "key8": "4g9GRhmP1WKzrJYw8LfATKwcR2qMj3jxA2S7rDmVa8VANRSnenBmhnHVuB6vK7AeMTpXXDPb56ATEqmueRx8Wh1U",
  "key9": "2JEQMgnYjyexp7uTj2pEs5YSA3jrYuhiApxoXwBzai4Ww69dXYwMuzV6yvTwHYsfD8ejVjtpQVmybUX6GVGJaiZs",
  "key10": "hKppmkGx4buHcgKVNrLWfAmP87Hmz9Y7AvUz4jhYDmoWdTPtmMNGvM72k6a4mSGsrWo88eNL6Yi7A1Jyv6jow9F",
  "key11": "2Au6MrUPb256fJGmSk7Zr6trhKv1s8VLpMGtsTdmgFetWX9vP74gtG7amdGrVAKehztcp1nZyhv2JqkZE31qEDuf",
  "key12": "RABwryqAkp9muM3fjeozCKvLsHKTM68zPavCaZxRjWf6YbxkeNUH5TH9GRayanzhG5FmX9PiNXhuoWX35srUzh1",
  "key13": "yGJm9iPCrm1o5qLju5akQG1JvGbzV88uwyMmHkeh8eFZGRfaXBXRMLskort255hf63Dw1Ho7gacMEpFdsGs1ym6",
  "key14": "3533ym8UaDt6m2cTZhEoi4ErRoYJ8umJNNgawL6tBDVArKJB3ZsXPLB9m5EysZ8sotbVsaEWAJ1AKPMq6FShKgwu",
  "key15": "KsR2ibwah18BqYTpDmsADWR3yP7JBXTnLMWbjcEfLangmWK194ido7WBQJthxAez9jQB4fRjVJXJym2CHZwgE3F",
  "key16": "RnFPasqcZroEdCrgqdsNKGc8PpzxFxQmhkNAuToL5cPRZRkk4tRCssKiHjExqX9Rfbfq5BrEb2J9P95NyoA32a3",
  "key17": "2AU7tieht8GaVEZyTdRjyAosoh7ssS4rto37eragBsWc4ReRzhG4h8o6uvqpHmhC629izgC9m76sco9T5ddXdGTT",
  "key18": "5W3cnPNLKZrEfyLjStnLgFhEx75Mc65pkDzP7j2ciyVxvTKYxfSnpw3U8zrMNHv84kMpn62XsdheqteybLgZPaUy",
  "key19": "3SKfUemyQdDQ1vCrv2BUrcNRcit8AtpHa4b5z235Lp3x48kymi99zmCL2EQiXHYeiJ9TuhfBMhxUa7MrQSZ8eUNk",
  "key20": "39nt5nSesQLsjyhPV7cfR4dTN8hEuhzRsuMrB2NDh5kRsJaKsra4xLRqGmVd7SoZKjCXhJUUxp7V3hoixjSy64sd",
  "key21": "Sj2qyjUmrCokB2TWmzEkn3VaKU2hNstvwvDjHNQrFDEQFmFsX41ycBDKerwpXrPFfNpUFHjC8wB7z8aQWfmvrjx",
  "key22": "3UysYuKtMhj5GXD2S5T7yfusfavBL52uKm963NeLuvbbBFiTGhvw9FRcATyG68AWBF1be396JwMhsD5XtzSqVuqU",
  "key23": "3kXpqGYiHzFYnZCZi8Ep2LyR1hcL2CEGf3DMoxHHU8HaLPQRVg1wRMdxvTnhJWUc14arS5bMLmdGNxYUMc7vVnt5",
  "key24": "4Ws5D5aJj2Yiy6j9iRmRnhZP5vuDXa5MG3ZqLFGzbepFvi6PfPyTTPcmtHtRxzLGczkSgWpnYo9ycZCsocQdFK97",
  "key25": "5pgjzSC2PwjtL7ovLV79Me6e6ZxcR5GjayvDYvaM1xL5jdXm6us56Eu8fix8kaP4NTVoS5oS1JeGq7SERfajaNnn",
  "key26": "3fLksc29qc6sRw9TheSko4c6LKMrojuNFsafih8KBjut3jQfFYAuw5vXdgXXb13DAskVoefG2CKeYYhiiCAvtoQp",
  "key27": "cThyv5UgXmkd7eFJxnSDZt9XpZw7xPdph68SNQJ2kuCg75ugULnRCEqsJVg2uea5Vm5jzg65s6Yr4jZRPdNEGsa",
  "key28": "42bntURint2Y1Lhs3Hr9CgVoLcviADhxXH31X5ft49dg88vNqoRrHb7ZynRGxq2HVn3HtjihxGfVHgkk29PVGJcD",
  "key29": "2LDuRNjP1V2dY85Yu1edq7NPAQAAPNW2pwqNLABMyaQuuBc5xqmM6Ci9etWHiTBugBd5bnTb26J4vDpG7W3iVCaa",
  "key30": "2biqRucK5JTMq5WMFabY8YvcxnFo9tycbixJ8dj6W2amxDmMaMPuf621RsY446JK7KNTGucghot4UJEAygm6pm6a",
  "key31": "8uLoqbtWpZPqwhoqzz7FYjNdHNTG9itzmoKDX4dEzaaHF12dtFamK8Tu8mRedMBJvtzJjJ9S4BPZDnCbcpfHbLZ",
  "key32": "w23EJfBmq1289ucBGhc5HnkisCKRgach3iv63TAq912uhSnzMGc5k5oucy5LogbUAkAvmGhWSc8s28uHZEcrjEf",
  "key33": "5wvLwc5WFuY6mbkqJLbphhjMtiERAbc8XsVrn3qbBRyxfi4RRVwF5MLA9TELMxyiRB9zzGHopAGrwAtthKSWAMTP",
  "key34": "2ArhT9CZcoJqPDByDAiUGXjvMF6P5m3r4BqJupaDb1LGN7YAvWCkWaVjQradZgvChJBtiw8iQS8FeRHBZSBV3vqC",
  "key35": "3ssfJdKNZinB43LgZTo24uXvrMKcQekm3sy5Ba7K9NWtFqdAgbGNspJeMYkwvqK32ySsRLQqBqGoZr38HcNZ2Noq",
  "key36": "34LMuLtZdJ1RH1jm2BHeeqDP74mpfryTbFfqZ98zbAino8U5oqw5KC8iu4Aad1BuuSgk6snTQzBWTqZfM5iLWUQp",
  "key37": "4z1j3UkVMiptksSAmfnhvxm7u2wJSiMaiQ1NnTvB5ioUaswYvTvsufCFkWstfpgfsvutLm4M7czXPtBDdmfrbdnL",
  "key38": "5bHSNwZKDQJYmRtcnUTWmtWqdYkb5Xks7GENAa5CvFnv8srM7XNwGhPhQamGyM9xWYoP5zTUpn5aNE13KbJ4FHWq",
  "key39": "38yRmcZWrPhCTMBYXHtUKPhTtcdnjfTv9Vsxs6FLzJRNR76jzMFZhYvEqmwFmt6irDByGbzEmJCoGXofSAzzk6kN",
  "key40": "4qX2KhmbCytZQrRyFdTNfPPmdHUBhfzzNKccvtvYAg2RQBB4A56cAdCzYcFjNVWB3gKJ4hqYhwtqVoJWwU5JSD28",
  "key41": "xRCB6vfWosg5u7TPrwUw16oGHcd88KvFtc3M1Q2h3cJt6DyxKJPtjzU5ZnJkiddrwi8DLSe7VaLFRo4Cp29QJUu",
  "key42": "5QqJAgr9FsnskaQXvBAe6iKw31URLDsZs58GgPNyUz9pXJ518jEXtAzSCBuakTnmwjmku3LGQ68hJ3Ymduk7LiVq",
  "key43": "4HNEJiG2o3QMB1EHWNP1AYpw3gDpCZjsAr59zJ9ot7KmBJDCcWzHX2sUnZS43mgCUe4itYmxh197wmWNFaw6CVEL"
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
