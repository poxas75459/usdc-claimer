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
    "2mz7DVRFUXQps6ucTMVpDTc8usdPmaYkwSYXVuGqHnubzmFDHK5tP2awXsDcSYWoyxjiAEy3H7RjQvd7nnY6h16x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tRTDEU5Mw87QmtYmHog3ppZx8WRMLz2dioAftZazGv8tya42HX2xfnjiHcRuMY613yUA32kSy9DokVS5VpPCJs",
  "key1": "2iZtVsfKNzYrcmPB41sFFSSRACtsBQQbe2tUAattZAiGLUZP1cAcrr7EeVn4qEBESRRzsu2f8AgzoJQkiqg9UYZB",
  "key2": "3jRdpAZ3ky4cS3iEFAc3KiZAGJrXVsgY5CGaToXJedqory9uNaSLZ5rWcFe8SkeRfGSTnyLFhyssHpkzjmbv2S56",
  "key3": "2avaYGu7pFxoQdsBegqgxVTmNAWMtXCksdeJrcMrmxM34VZjEGY6JyhoPhTYMR3kE82XxpNwE2woUGmnmEYP3S9S",
  "key4": "4xLLxnWEnfp4sFNABcqMfKv48uiemMeoqsU1zo4fY2mRReuBLZs6MLYhNHfZQQQNdu2JuQF41GHnWXpxfKSRDKfM",
  "key5": "uF4ts4b8km9FHMcnWn5rwgu77H8wtzNb6UPxteFeoKMy8kGiu1Ew7hasRBMmm5W7dwBa5QwckAq7YUj5MfLwtsa",
  "key6": "2iL4FNjc66dGqvkUfmeJySUWwbGUe6AxPqJS8SDaDsZ8D3F9KgQgBVFhb24MfEz5XqbJsXGjLb8eLrKcpbjETSVR",
  "key7": "5n6z1UcAUWR1cACLeCtsBjGipzcBL8MZeyHpngMLFToX4JXut38uFHRZ8o6HTD6RpZBJ2b5EaX9CooVfuaEBzFzr",
  "key8": "3caL2efKARmRJL6w4EtbcGVNMoQPPjdwVxVtd1LnP9fiHg4mRd76qK55GCFQPbUhpxFP5u6bVm1uASvaPnXMw2yC",
  "key9": "2H3E5hAC8stEJuL7B13YrgZopVeY9PU18ThK5588PWjz2KrokUJDQ8GNffo5V3xoNtpr4MyCFgszqpLpPNHANkh9",
  "key10": "22ZmJa7jfWyHvgCym9ATWy5oeD3ccFA7SD3eesdPqrqJ77HdJW4VyrLHk4QDxuAeaeRSjG9MqkDE6Y1mHNZhxTas",
  "key11": "3mmbbPEPdkCQrb7AB23d7uDQGb6jmfb3DmouSDxvgmrFmymffzq1UkK6qGMh1uBCW1bt3v4rkYhnddJRcLtrP8uF",
  "key12": "38JENAAsPGNfaVrEgW6sKuW32ipRJ9X9Loji426NabSXiGtvM4rVxzSSk3W9dQRLP1tP9GPHstAYnnbQcqchqupB",
  "key13": "ZCvSF59383Zcciyg6NtQ9CLBNojDkQeyrvZUuMpiWNf7XGggdXPLGUSPxVqiZKBM46HaURCJNJFwwz4cWSPbW7F",
  "key14": "3qA5LmdbHB7C2ztGrBHibtBe9Xky4abQqTCiXvP77mAPsvE7eVnHa72c2hE4ua33gGVGiwZguCTDRY5Fo2Br4dG2",
  "key15": "5B3mzWvUidFDFX4xPRX3tS8D133sJ2qBJHY7WKNTXnTydht1W8c2xgMPTVUkT3yBqQFhtuBYeDpvBSWtwPrPBrqk",
  "key16": "4TQ3xFHYbpQNFVUBdyeUU4BPtJWMUmoW1vovP8CxjzaJfeRzmxcijv2weHDzDGddDbJruS432i2bSEaBvAZi8xvt",
  "key17": "65H3Ey83SpUL58RhJtFnhFjHcU9FbmwrxRCjrqzDjxxNpnqrAehDbdmYRTnqL6Y1CwUz16fUTM9LkLgZH8vW4WVe",
  "key18": "263AdqgiffiQe6ifsvyvAoaRfJTRNk2vyEFkwRKhdZ4vCAQ3kdvPXryoZct7PRQDRwBJxQhRGFBDDHKcR57VGXkc",
  "key19": "5HgzdzECj6uxghkAnvpaULirkFPBzRZ13dqw6mS8dZzfnewhY7WcRJgZiL31AUcmd9YFdyQTa2RH2brWDRXLtZcJ",
  "key20": "wim52U8jDF11AdkbwLtyUCLQ8RqAeuFz8GXn1mCqieT2SnkYPJg7CJ6jp2EXz3VsBrGLQDymKLmqCdJmDHypd8L",
  "key21": "32B5egvZQKrrBJdgMhGRhRUh7aCVPbLkXvbsDvqdAjkCL3wzgHSghmgtNCYhjXgJ3ryrauU5QqDPSANwDdiCrLPP",
  "key22": "5t1cBNvfQ9VUpsSsHScnSprcLagZ94sU5unpRwBQcQSVoKZJPdF6EF9LGNiVTgfHbg6CBfvnMcZ6HvHrP1tkmJWU",
  "key23": "4FtuCFTnU7fXJGi1TmmumMmYewAWjrh9SJFMoeoHauBKggXiNytTqftcUvU4vz48m5URkUKwwkaBU12rKvGRFC6T",
  "key24": "2D34QniK1aiYFNzL8EEAhDzksc7ov8BaisYi9sR29Kj9aGxtrmQPCKYksfqXqHjeQCtxCetFRCni1pubJjddeK7K",
  "key25": "5cbW72oYCm9K2VoRjYfN8kLdz9KiXnkPGK5ReDSbvt8JUMjXtcvahAs9ueFGfbUf4Z48XZrU4bLWBuz87sudZ43t",
  "key26": "28QN7QGSvZzwsAzi3Rnf35JEwKfi2bcBrDPtMxE2MiLyeXc2SgLzUfEhVQC7cpCgf3XSWmt6uWcr931pAJxKsubv",
  "key27": "3rM8coRQmjWN5H6sNGSTtsGdxwrajYjHV2Dg4MpVuKhnu1ELMfFD7v4EJFEHoQaquqVdyebgVUFQSfm4jHpxSki4",
  "key28": "62SMDzbS7LFpZmUQU1yGa51zz3RsZMj4GN1VB958ydTuSwY4phyYkxWx8kTMKzmnVAei3Nzg2r8aTKuDTVj7Xzc4",
  "key29": "5t18tqEn3wCiL7azTA3f7HiPsr4tmB7WeZb992GDoUS3gUQ45v9eTXy2NBnXexnYufwkd2yTyNSaUuWku7Vgn9FT",
  "key30": "66PBRUGDoqcvUk1tQHjEsDRfzPRGxEsoZwWc2iGTJ2BrfFLEWnz6MKnPAc3jVyPvY3cxeBJGk5pkKMiHdrNqvDha",
  "key31": "3iZ6ZvbPPb4vsRjRduvoNrxkdjpTn5vQsJS1Q6kuDjaB2MAYWWR1Kku6cw1s7o4fQV7VcGxY5Mj4WU6iYZEB5Dth",
  "key32": "38vd42cVjUuFicn4z9YDEX693xHWvetn66V71q4XN5g3TBSViyJ3Adki72yR7CnVsntQTd2f6LEDHoFcDMbvzrNG",
  "key33": "3VwDDkaNUDfdxuHag3Jj1NieudAoz4uuhCBLB1kPM1JKorU9V7aBDSfSNdhGKpm52quPC5PjQ6nvC3udJsZEB5dV",
  "key34": "4n3exfXybohmBschN5vcuX7vmo6V7tZxU6MaDM61WvkzvyKBhVXn11FAbaT6Dn2R27hxb7AkWaJUmA87HSpchhD4",
  "key35": "3aEfzy8TC2Msy8Kzqw2ceNimnYJFRyixV57UP1tysjDEUakLcMnJ5e2eXFhGkgusrervyUSfarcDiHQXDAfieQ1d",
  "key36": "Hdyvjgv5BJmqsqPBV8CH5cwSizzztsYGTNbybvW7a6iQdrmP3MbURU9NqDF4er4WyTaNZkBQACe3ra1AwAMBdhd",
  "key37": "4cmzaMhxSkqoXyoX5VZSp4bSnMJTrg7XukTRcpMrUnjny4rpUeKSNFAjJgJ9AV9ATvY5op4RA6hDqqFSeSw94Zuk",
  "key38": "2ujr1UqnsKR9ZRWH7a8STFgK1iyRCV8rpkzKwzW2ih81GegSkBLqTQjW94cBsLUP8zEGj6wb2pryiapvkET9p3Et",
  "key39": "4HD2SYqRwv7pqEz8r4AEKxYQ3tYDgXdRRmUE763NjBTpdVRxhw4SxyBkaJiT3DgkMcypfS5sEcVUuvHDQ2fCp24j",
  "key40": "2fhGhU1oVtiGmj4yjZGgaTfJDqA7bLbeW5gHoQGfDYiow8vQPiJyoBgNnFsarmGiDhoKqnRvcvrCMnyFoQp6gU4Y",
  "key41": "5pYeAfhoehh8zZMLAGGzNqWKxQaKDJUqR9DavUqCNHcDCCMqABRcyUhv6hCzSjGWdRtk4v1LLmVWXqwG3brs4DBN",
  "key42": "2nEzEnC8XD2dco3Gs3N3HAnutpFN7HFJSZfYGN8gMx8tVgUFbHMBXXzEwQ4eJ6b18rtJH1Kahngr97cpyb37xGcr",
  "key43": "AsP7yTzx9un4rENTHXqNq8ZdURz2z2Ma5Qso73tE8Ac4J1kLBQhY87Lw1PfERfQru2aeBCCrhBc6XHv1ZtCzMcL",
  "key44": "tZGQ3fCbMLQ6CFGkdDZq5YFZY2jGd8Yy7kxtmNUXPnM1WgwL8UhVMcFqfawQAHAd2KayAZ2NsWu2Zb7Djhgxpqd",
  "key45": "34omdhRV831smX4wesZALMCmwocrJr4dsd83P6yZP96cqQtMxVcDouZBGQVoGzRzmcS5zLDUnBqNgJ49QPUrBYCL",
  "key46": "5pCQF6ij2FE8cRVVPBgZvPKiTmJJDrXdZ6EtC82EcLoy5Dra1624q3m7taVT9aT3HFK8GynujKgHwXJdjm2xQg1k",
  "key47": "4k8SY9R3Xm3khk5PnbSJhHnYHEjQBzaAD6i9UMMKbCxo4Hzxz4gm5FKDYBp8XUBw96bzivHQvdwFMPhub95UyimX",
  "key48": "24FyEPP41d9P33dmfFaYurvTLSnoyjvZu9KyGgpS97bbzXRdySX8d229hTdbPNfYtULUYaZh46u6Nour7RdsXEsm",
  "key49": "U5KD1nbK5Yjc97VmuMDMzWjr3dBTRmY69ajZzVSUqhZwQdNrGALA9BDCZb2EKvnA8RsXgJ7EHegs4SfUGTExVqk"
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
