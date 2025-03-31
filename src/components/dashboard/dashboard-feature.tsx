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
    "SziF4dbnhCxYgZk2DXwEZ3UYFuux39o2VjpWL9m2MCrTSTTXzf6GDpxZ2g2Ze7uiwQnXDY6csQPnbGsaHoGqAqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AkLsc6eyjVoR4DgN2jbYCy3NtDR9UQGHbPvdFWzzbewuJL6gDF9fT1fgY35AoGACiVXyx8PpfyUKCZWFFT6XPrw",
  "key1": "4frsp5xBpN978GrCrw1kzFckHc8DYAhayaUhK1h6cHNg95gSu8TGSkrJP5KaekGc1kxSYCxehKCiKwVzUR6eiPC9",
  "key2": "5puQBeEbg1zYpJPAgzofpdLAgTjYDF6oUMaKiyah6V8cuHetVSU3BtidgQ873sz4HdPasiSiMG3mG9zgjLApecYa",
  "key3": "JG5phfwmSxXfpvPJMgMS7z4UgySgNjktRRhEXf3f3zG8exaBhPXEWLxh1S86EsFWHh6nG6fBg5t4kTkqyn84ELS",
  "key4": "ZtAmfpFC7vbchmctfQFw9Ue9atY6zsm12z8ExhUpKZXsHSh86bgxvGCdKicEHMMHjADnCJHLpe9dw5R8tpSnzRQ",
  "key5": "4PscUtp6PRyK6pzPUAjdfE6Mxdnjjv86vKyUyT2UGJzp2W2n3TdUqSSMmNVJyJ4oGNmTn7ALdhL1qTFNB632NvBg",
  "key6": "n2GhS8xQTHk4tQjZMfkEcJRFyV4E1Aa2KeRLyMK5NFXaddbSRCD6KBjmMxmu3XUkGCxJ57gpZPdwqQTJG3jxTy7",
  "key7": "2KEYCCYLkowLCP2wAAvNhTrVNVzzwrrrACfCV35tdsRoTxLFqo2TKQRNzGvQHaLsgmvix4GBrjksX98YiMS2bJWS",
  "key8": "5FYNXdS9UwqeYDw7ar4k5zzxN3E1fXfDUYzcC37LqR529tiN838yFbSiXLBSRRE8pWqunKvZiiy4C6tC8UXuk38d",
  "key9": "3N7DAVYwbfxyPDx6Cr7s7ZqPwhqm8H44AUCejzr5KLSjrVxSAHn3euxQwJFnhxjzynUSeh2aYgtpA4T37Fzp1X6y",
  "key10": "4Qwfd38fRYcqozTMA4uLUTcYmfmhih4aXNKmqS1nSBm9cLsqBt4tZpGwfkb6tF2pFaVZEfVA6Bs65qLwn4oWqaYw",
  "key11": "2Vb2NDjkbsWQsaHnuQ1xe9e5NV1qs1d93XjS89PkTCjqM1bYkfWavCVqcqn7QivETUwoDxAyLzAvDJkTw6qvPxkX",
  "key12": "3yq5TGs7pSKm2S3CNXiD8w3N3QuwWQ8oEyHrSZayPxDsUrxGpEoSc9AfNfz8yJ2XAzccb4pbydQYmbsLvwAPKJ6K",
  "key13": "2DCpfEhAuaGbtzKjwE1bC4BULdUsSJrZz5GLQSxXm6igsLPbxV2h2ojYvYBoT31iGXwZLCyvdbrEF58bfQpZHL46",
  "key14": "qEM9TTNavZWTAtJ5rddj2Xq1ivinVA69hWGnwafWJQ3Sr9xoM5rzSZyfaa7NLG4bntvMBC1AunT6Nsh7nVsb4ZF",
  "key15": "5DWq7PqEBJtryy8tZDxshWotUJwJF9Z1XRkiS6FLj9RmiLpULpixRSKpVzMftjkz7YUrk1iCJ8rvcuHmYRrbei8w",
  "key16": "LCJnR2hYoaiE7YLiHjU5QkTufEsAjjWTh9B7jrPtmFahrgwA6jFVNb2aiDVedicEtToZCAuPLMjvXNY3hbbRA9V",
  "key17": "4azL2oq21WyYWnHuBErhU9MJTGE3QqVLzdCokad4Wjq8kLPAPX8Bx3SkEgPpTYE9pzJ6YA9ra1zzP1bZ5SLsX2KP",
  "key18": "4nALfSzmUS4C2nVVhpQ39Z5kNbxxTgaEsMjWhgQ9bhWehjaLV1x5dqZ52ButFeGgi5RMnukJXsgTqxVaPHbtVvAQ",
  "key19": "2APy99TydUy5GwSkh4FUYP1tEcRFZTAJNyLTTCd9vpFvUp7Kd7d5XY85KJhURBCjZTuLRYKyudjLS3C8psPzHpZt",
  "key20": "orj3hGa8AZjpyCYiAW5TL8MDD28j6xk5vhBC4HNrNP9NSK4mVP9obYZo5tdD3FzrynMZ38BJd9UwygBcrYQScvB",
  "key21": "2axCCxVTDJvz4X2dWUhmYps4SjRgN6nvqyvEjspQybSP3EA9MGroB4aB6XUpoTfTPucrJ8WfCLHJ2g94mvypQmfi",
  "key22": "59kg8qsAexEUa49JuwZA8Sq3ayV1mDDCZHWLFYAb71LU81HjXGBdHXy2kN3nvdkhdWsfmfCiPed1Go2NyqzdwTwg",
  "key23": "2hyYKshW13Qe87cp9XSpiwTd3gytkoHcGGXV3GMqywVH2H5BdWQjQ4tLsJZuYbqEZ5uwP9pdNtM6kbgfwZDrJeun",
  "key24": "2chpoijVUvmbBikshxNFw24H6CHg2ztuYc3AeTVwz7vdLcnE1vXiH6cUWqoWABSC9svvNwDZ7YopS1DxaotrhLBY",
  "key25": "48MQ9oBGfhyLNb1sSTQEKPnNazbJ1jLPj2Mmiy371bq48mDdVwAUDAaN5gLk8oauSQK1SvngTXVeJVyNwLwzjHHJ",
  "key26": "xTTTpg8beBSf3cmZoKmhLf5CtxvrcFSENBHLuthMJkQY5vYXzkCy1x8Even1hgcvSbFLCFKxgpmU3db6yJn4T6N",
  "key27": "4u91c1svFPhmc21CUKdAr6dSo53EHPE94cTaU9MWDyW7nJ9W7Ju2Dk8S2HuRRBDyxAc9or4fEMat81DnDMNggmer",
  "key28": "oK3ncz4Gy495EkH7p2yoE8GF1XtTVtLUszmejGFZgU5inLKNke1jGwCMBGVa3j9bpmrGXVqPHcRDjbBV4ddnYTW",
  "key29": "57brzDBwDFyiVF7nFMPg5a9Ej5FfMn3SfGG57mYEHXeQ6YQQQcQV4FJbaLjR4RmGsW7mDENvkqencrAHSdURXz3",
  "key30": "2Z8gHncq6ez6u26JTgJAUkv2PLxayymVJifBsfFAKgXgaeyJpEoT46FRgE93MYHkXrLRAobfaNc1JAyuZNexU4PM",
  "key31": "3mVdHZkSBGLcauUBqkqAYRJtEpFWNMDxaayvxLE2ARBrDXwGjk1jzDpG4sQw5vEQQDRMeQiVb2i8a5qTNof87xiC",
  "key32": "dsHprP2VqBvLRkEFsF2bnzUmf7ombUNRdveEX2FAb8U4tzpgu32UCYX7gVVGG3dQ9bvVcfdUxc3CJTWWQ1Zrpe2",
  "key33": "5qUoBKNGPKtcDaa2Zfz5E8HXTyDgt9bTbbFKe9fvhqrWTp7mv7gDafc7zHT3eMxCNQi4jahz4H6CGURSXpxoKWjk",
  "key34": "33HoY9BbWBFQhKnjZ9SPc2F9ZBHanWTEGugGELk3E2MNcB3vdqDkvJeem8rkgYuAGYQvhLhum682SSg1CizxRnoN",
  "key35": "GTpmcRqiTTfLfYrLrhYq7RFn1CrX98yJUSuXjo1SsiYYnGuHqvbfjSh2ZQKCYGzhqxRLLGbA4Pq4JoqiHPS4FKk",
  "key36": "33capgcyUA8nGe1nejdXjhGoGixJk3vTmxnNtHwFim5fD7REbZB4XhboG1RFV3ixS2tUKXF4NKhgxqyLmCkgrqHp",
  "key37": "5UBm9XAF9MMiPJve2nxUpSUxwLNF6wwsxNpWT8WRpqDTsxVAq6dm5zm24BYvWFme86nREPGmqwhFp22KLXysw1S6",
  "key38": "2JVwLbgj3Fk8nZuZX3Z6hHh1jr4fZ6sgo5PPveipMbLV48R7uiYfYu34C4NBqDQqbnMU8P5aUcuM4VKHKPNPJVLr",
  "key39": "4k19L2hYQb1uXVUHcTSsZygwRyKbBUiLFeKhofE9Z2MXc1ovbGMkhkzGUSenubMhhegh6bnzBhpXuReBsK7GmXb8",
  "key40": "kEwEA9Vi341YFzAXHoJWaJdbmcX6kvf2yCHiTXJUmHmgfJgM1jjDmeScTYTvaoc4CoUpHyXpL1qufSoLTgbgRrY",
  "key41": "3TH5NnwZdianu94z92Xb31jEA1SdD6yzRmfRQPKSK4T2Q8RwxWuNHsfixvwEgTXZKARrzjSr3oKAqT9BkDrNSSdf",
  "key42": "3THhhMrEDaXtD64fzmmXw84Uxb6XpMRHHranNV5LnPtCQtqbPM1cAaPubJhKK1uFY4rJoTYXNvBoxtHq7QseiNno",
  "key43": "562nKFj7ajvHh1DR7v2M89Y5kRtBtEphwuGvFNMNGQqFDAsTuWxW6SBEstRQw4Lv8GYZLswUmrZqPiECWtfCSyf7",
  "key44": "5ZnDUMaRNSxW4mF6G2P25QNWhemUVtvZoagDqf6o1FgRELcDtiaARoKwoKTt9xZYTsHEoQMKNaMuVNfCVz3hpJFV"
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
