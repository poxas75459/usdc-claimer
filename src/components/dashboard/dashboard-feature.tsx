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
    "3jCrqKzfmQwZL9Spt3fjcMGtVVrjDyX1pKZgGLmBJsxc2sYd2sT3J1FkKgdCiqPtx7bGLL8X9qTrDMS1NbMRuqqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xws6v37uCe51e3PyAWBvXxC8f9f4VrvcQ8pMW9gXdeJNCF5WHuVxdj4kc9ZdWrEnfHGwASHy1g9vVvjYC7UjFqr",
  "key1": "19pLzXrfEWJGCZ1UmHWtatGVazCshNA6aQCKsiazV94MpwSh5PWncnyEtGfZb3RwyS9GmWTFwESUiTEkqyNY1J5",
  "key2": "2eNwGrpFK25L5Nc4GrVbeCpijStjMs8UCDfEV4ABAYkZeuT5PCRDvBG4Pg3tZL7nppwqb6pPVtLmvAcmYM2U6uae",
  "key3": "PoWiHkFKwWFVDExVu32gAAs6vHjm1385sgwnaViTq1wYYsUxpywu2jnM2mDoB9oczTg22CLK58DqDVpk3XoCbnU",
  "key4": "2zpkX8dUgCRA7LuWuvgpuTDRFNQ4ze5zd3PtHnv4ND1LuzpCtPNcYoLkTN7XcjQEMTEX9RLWchhk787duVK3LrCn",
  "key5": "cUm1L1o8zMkU4Jyub9h8Ym36xSrzcL3k5AUh27fHGjAta61RYfNxcRpotZfRav7e9pvrt8HUE3o9d9bzSWWefRZ",
  "key6": "3PFnNZUDKtYnJKp1MCjUAZAD2NgSaBtGQfq1bFmAdDnt4rGWn34uyw2X5zhnScsQtLEtxxHoKpyp6WDmLQujgVuQ",
  "key7": "2oDDN8PohsqohLppLQ9gdPGFwL4sKE5TN1CpBiRnE6b6Fi18FwYKKcdu7NgwGCNA66ezuDTHNt5aVcXfBDjki8Xn",
  "key8": "2gBWmWbfj9wD4ZH9AYHzHVUqcqXvhdsppZRxmu2GSsPXZvZdkxPtv48mZkKnxmiySqRu7qmyMCNceqx3xXtSa9GQ",
  "key9": "3iPy2L85HSqWLcJzxoAxwpvg8bor2dgQwMdBFrPTe57dDCjhQqeE27A4iYNnYBuFqmJs3Xs7JwuZAKxaZH112sQj",
  "key10": "5NGCb7kVe8kTASWedAZymZ7f4CQcTnLQkUTh8eQtaSbxaCFG1kRAuRoYnmpsVcTE6kYAoevBG4C65ddcKKmeKVmK",
  "key11": "MATz6AVG2f1FLeUHkQzRBSeMu71Xubf69fVaChdsUZiHqSLoDubvVNr853iD3MPDHEbMZpW5PQ5b8rx7NE956W9",
  "key12": "3pR66HyfdXrHJRdjGkm4b2EfTKzADo5wBkZ7Z3pKHuS5qCKHDXQmsBUvp7qC6tS8RA4W1uP6T5JDtd6d3rHjRjp4",
  "key13": "2QmX523XPvxLc4vd6QYESZErMokDfrBDQYLxWRM1Q65ap7w5reGmjXDY7yGkvzEvZXjc8bsdc493HvUQNWwdtjwZ",
  "key14": "3YRt7jeQz8nPaJ3wGRAehujPztJknSoS6bhU4qzyrnQy6B2M3bT66GPU72Qah6vJA2mdpMLWAU8x6gt6tqAhUpbz",
  "key15": "ZWE6d29vYKxA6g3ZNLNjXBkTzAuMZi3qaLAdgjpSKqteAJQg72CA5qKw9ygjz3RqXnDjVTxqWe2jAWkGA343idW",
  "key16": "61JDh6NbLKfrDTF1VLaXEVo2SPKbdkA8RGmPQeVk9Rk11kv2m6uHYpQgxRWXErFBnffq31KjL2xTdzkeqKr6sRvL",
  "key17": "3a3Tf28TQXrhpYH27zRBNa31H75R7XADiuABXgjDY1e8emjmY8y5CGEgtCnN1po8iMLVqpEEmZKWBwnn6jxBCsQB",
  "key18": "2wTiv4Yk3DcTKVwaCWDp1jN5D4zvPEgVTpbjRpCoFMj4DwsFsra1GXhBMJ16ar5DRLRSZcve2keE3oYscbo2SFmj",
  "key19": "5MKYx5AmpeSt9Aij8ruDtpFSVNQuGsP53w2FQi3bnp91kMZo2FzagvFQyvuLwKA4gD4FeHr85C7t1fNHF6gCpuZg",
  "key20": "3zsS5iFTYxHx57xC1uGGcsr9udeV49qx2mJMQUsde3CXKgKioEPzNWy9DTK1RkDZBAWLacaphpgLD1cxR5iTa7Ho",
  "key21": "3PDM7BKXxPVcFZdnVYAUAb8fr8BjigXsvX7H3bL4sToX1vjS4B991xZ3VrEwH41q1hKb8BGJLrNC4gMgtcHW82uA",
  "key22": "4vtmq5Uh7MTzkr7vVeKegJ3SQkSQyMkMJQfCuiM2rpiLKuUDeksMZWVqnMuBmrvwgKmh4XJmEReU71yfs3hhajgG",
  "key23": "33SWboH6odKZgceEqwqWPu1ME6wXuzbndkBTbqmiAepTJKqGVnfk937ePmW868QdozwRefeQhvuiSi9sGcqUjLDd",
  "key24": "2gHaUijg4nSbDZYJoK1TuEt8EABHumyeTYtVskpWzmkp8iFmXtSutKbpsKxMr4SggfyeLnBmaC68ePQbg4YyE8qt",
  "key25": "4TwtcPJMyWiA7RdKJyhQ3CWK4MYhDRqY7jzCrnAqcbDphCHu22xBHCUsyXE8wegzEojLoeKs6bh8kRDKnZM5g7Nj",
  "key26": "ntfGDCYskaJ8M8b6cdxxe8NJdvQt4MpAPp3FB21RNqyRV3JwCNxjaMpCJDKxNXEvU3TZAV7aczTZ8fMxDLndLJ1",
  "key27": "5WKBYFGsufKRnbqvx3GADDF5V3E5nHWwZ8N1vNLWHaS8vfeZC2oteScQPSg81dD3VNmDhooNygqhUt7C4ZgNUbG1",
  "key28": "3Hse6PgMP3GEYMVTwLrcksFgc3KMnWcPgzUiphjf2YRrcCntdUxKi47B5ofobx69DzYwP5nPDye6eEXWkNof32pi",
  "key29": "2tZHNSth9WKLe65BzFCrUeTq5zVsPn4rp8ULvSvidcCQuqCfvdjqHz4kfC1jhaYXS3eSTMZprL1agx4VeNn4Zjpa",
  "key30": "YkiJSfvb2hc6si5v857PYGx7chzmxyaeib6GJxBbjVw4FqD5f1UVYsuozGW28b5U9ENs8pHW7rreK9UhTX55VKt",
  "key31": "EsYuFAiYo7WEVL2fjV8UNnZhgjbaYMPURM2QMpzk9PvpRKfZBVeUaAyjVPg2xAcskgyHVTrHeVwN3wwFJrzhtEW",
  "key32": "5i9V7yr1sKJu1xNKZqAot6P8vYXguoVbCApRhs2WJ1QrY7UKsHXJYZ9SBs5s3vppiW4UqEyh6fupTeVcDMDgApTc",
  "key33": "8LPhCwKycjj1sbjHbiruxt7VC9KMRkCio2bbNsixBueenPWZ1df8MeNqLqD1RNr2rJ5pjKCbhEMEvS9HJEs7t2W",
  "key34": "EHTLtVa4hfdKLNQ6nr7HcijeTBXaDb18ym19AVfzJup1UdtCd829i1ApEMpEwFehbq5vNBo1MdvHjj9wEtv8a5Y",
  "key35": "56d73FNmtyYK8s6SLHFVwPSLKk686UZKw95FjkhT1RzctozBirwiPyztwYFzkN7ZwpCyNwaXeEVntSeovVMNRLF",
  "key36": "3DbqSadzsc4MGT2cPUiDM528ZKaFZpRkiWjhtweBA2DnvicEJxBP8m9SddSHoZNzFvCL8RMaMHeydkp77fYpvov7",
  "key37": "4uZfRo2FG2uewKFo31Bf537k5eHYqB5RjDXVR87Fjp4Fhu7KkGMTXqSBTjkGm1eU7mQyePkjYXKpKxcYjzxGx5jS",
  "key38": "4kR4TUmrLTYi9UxWJqZZduJLcRTn3DW7zbx8JbcsA6u8UtEHxcgSjmZrqCCUqbq5hXdLSGC9jCiuGsqjYwwge1BS",
  "key39": "4zkCTKNUpTp9Do1Uzm57iX1ds441SxsSbbdPKVmnGVyHAWwsX5fMJGWVS7xhZSTCKY83fxHKZhRYepnjZSMMXXF4"
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
