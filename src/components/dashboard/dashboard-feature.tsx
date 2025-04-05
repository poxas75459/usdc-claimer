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
    "5QeofdQ23CgRsLFd4xBqhGqc7gEcQ2P8yz4twEiRhsaX6mqRxniSXTXZBK51j8saKQ2z2sv15HJ2KHFRPdeidCLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXetUF8Ba6F5XNeoDwrqX1twTy5VeNRfGSLDyMgHRsfyBtepR1stCG9cdwz3d7MozpsgXyeLNVRocuiMqqbrDSU",
  "key1": "45iFQFgyQ7fNnABDY15zi9JVvG4gBifwWhNDgYkJkw5jUAhrkGiVvapXNMkfB69JJtFFhFzcv9iP8maRRNFojBBP",
  "key2": "4UERzpTb46XFLENxzmxQLrr9nfiYNUHSZoS4kApm7ruibLLLez4Y92RaNkXtryZZXAj8mYizxbyDDm8DAJzYMFDW",
  "key3": "5xW5PxhuP1mFG9UPLJtzERdRPnNXTdPKRmLdRVC75GzBfebnYM3tnum5tXaVZ5gUbogL9hJGQ1phTSdVmraRooHF",
  "key4": "mkGDeNJec3LwYw7Zqy4N54VzgZkbc3BjDFs2D8vWSMpxbU2bFRUoY8Hp2pyBY8xdTXYoatn2koAxZNKiaLVztLs",
  "key5": "Rz86qxpBjH1pb8gwhnYqig2zC2cW2h7oK6tXocaN3ASeR2kiDfyYJoNJE2Fa163FAc39aDWJnEqL5rTToKv4r6X",
  "key6": "2YPHFpZn27vWtwry9rerUizP1VGwwXPCi1WqeKyv3evu1puJMY6LKWSCdPZQL2FKk5Po4Sgb4P1Kb1JKz1sDUioE",
  "key7": "5GQLtwKWHAJHNdxyi5HHVkrGveM1LwjskE8JyPuzMmoix1UyQZHmsSJcsLDQvEUUqvY23VVoENKTMGPcsF16d6au",
  "key8": "3CMMiikAbRNCU9zmfvaJH6HokHUVYwXWngXeWP6ZnjADgF6fsv9UcJm9JvVqdi8XFfjCWQie7jgqzdp1cgQ8e6XZ",
  "key9": "4pdNcwjJnkGdqtx5WqPghS54B2YUVXFvh1m2NSJK2wx9Hjjm3aWmLcaskK6BYgwvtxoyqt7x7Gc8aqqRH4ccQita",
  "key10": "3YpGpbuSEybZQakEWf6EmXhxoPNyaGRbJDa5webjdFGM8MFGHTNUFuBU6a85N9i2ABfxfNQMXXLkJqaf4Vtk2iYw",
  "key11": "hTDCeSKiDnsvmyiRpRB9MPTRoUxg7vrcLEs5sdqbHKBNwrrrY1HoaqXTgzMqV6E9Gw9fNeQn26fM6B25vJ5UUki",
  "key12": "3xWVWUvemdTTio24tW5q84RFE917oKuN3vHDmBx1ibVeHhVmQNkiKb8G4QbZznro4FHao7YYKVzLu4aKZ7V2i5Js",
  "key13": "62tWieh65956Nx1pfDLf4RwFkYVC5JU6YCjLvSpWZH7SacnRb1W5cgAaQo99F4e8q6ct3bBiiAvJFZ6tPZwomyJi",
  "key14": "5c1iCyTiGhMHLUN6SzPjd7VKHjQTAcGGLiQVu7ubmzbNL8CyzkcPRGrB84LfHua3Nm6dTHQVT6C8SFpo9EZgPdWW",
  "key15": "5y5VYe2qawRUJzi36ZrUNiVWGcN1nKwGdvLeC4mUnuTx5U1LK19q6qt7nee6kGyrFG9pDS7hGp6KKaCwxT52t8YL",
  "key16": "5S1kijKWDGyMwB3bvRGMPNG7aJCLKbDDoZCcHixfJdqSeFX5RKM7eA5LPb6rg4ceaiPkGBiGRYGh9v4w3GFwUxso",
  "key17": "FQmHFgV75huDkZnok4hRgk3sEsQCkuGfH9S8LcAk6QvCnctVQykjGWw631Qu91gjnJQs4kUDUwtL2CUi6xLh1xs",
  "key18": "5DJHaZRJ1Ngvg3BMAtQMQD6oLojw9LTFtX8vdnCJtxeHsRVDAZFNWgBPLe72BqwFTP7GEA4SHqEXjghR41kyh8T7",
  "key19": "w5hqKgBcXc4Ne5sA6iLKj9PgmBjEgHywwqceSQzQsWmpJVekZQkC7qiSPcJ2KSrKbtG1QAuxbAdoZsdW46cjX5p",
  "key20": "2v8gMJeeyoGxnPiXt9qabQZh8zZN5nTyDPcjttXgtz2sxDJsD2ZSjVUbCZUiD4StmF81r6PbEiiJgVq8hSpewVJn",
  "key21": "28bGEzRH2DQmKnqbHMrubspKgYARVSqLYhjds4BhteRk14Eu5QKPsqtpeezDy3X6rn4ggVRJkWHW61Rj9oQdRku1",
  "key22": "2kGzdquxog7tj9EooXmyd8cZUyAsJE3NpsvwBnjd1Sp72oH7QvCU9dEEe6pvyPoi2y5P9bWYScw4PpZNJHBf6coL",
  "key23": "3SqeTVzRiqdQQQqCXD16V1r4NAaFruxDVGRV1MtFw9Gk2dKeg6sH1JvUW2dVzEs5he8472cZRxpFNPfFiGzwjPsJ",
  "key24": "2wvVbjwMYmkc4jRKYykbziSPeytGT7DS5EVuAikLq6vbtWha4PBc9ZcETXycekQqSVbW1PRXjC6khaeGfij34cM3",
  "key25": "3m3thAKQDpyDkFtuJLAnMZgWStj7j9TU4XNsCdRw3cJzJHvn8ZuZSauiTRTLELuDr9PCxjetHUife6VHfNn2rXzZ",
  "key26": "2iycRGAKg4ADTAEdKgBXLtDZowrDHVTysZ2T4iCRHj4c2iC4sFgvr2GinwtmgbicviU1oyPMgCgx8jn8879DQszB",
  "key27": "2wJUcuhv7ua1ZovS48YuWYxCgWswJh1SWLfZ6bp7pC3ijDAaXvXfiybdTWuTjgeucYnSBLh7U5CdYd7He23pHZpD",
  "key28": "2dwo5mA58v1PRtmF2FJmeXkKqzgcYmqNcUyhoWuFV9AMVTsTbUugcupeDkRfXDQ9VcpXMTo6d5Vpkc6ByYqUTgDT",
  "key29": "4iBD3J2YoBg7Lx7ixcw1NAHnrEKvgQCmgCFToqCXX53a6hHdnivxoNBR9mwEkLPCKNCU3Y1XwCJHmBReBLXjYBXn",
  "key30": "4o1zLzDVR6f6x8n4rgaR24UoC5K5pjAfDaCD1p6mdDHUkym9rNSsUFqsE4YTXYrLR7V5FZXx9PtLCeZCNmDv6WiG",
  "key31": "4UFHJQuXD7sWrNAn18ejaQLXMeGpsAj4jHpKJLtrTWZXuwvdNRJ7Pf7ZiwgumTy8oaLwAdseZ3jJ5MvkR5NpjFqT",
  "key32": "58bcQLqhZkefnLUDTwaD6UMyeEtREiAgds4QSVR51V9XfCCfWtK5qMeBMvxQNuJVWmY2GxGXQoqecyS79BgwVFMn",
  "key33": "26iM45UJK1BMKggYSztVeAkWNAuRPeu1qK1pawxCATMiPujRqD4qAzeGmpsMgjEEarRQu4FjJK7ovxgonNpVkxPC",
  "key34": "3VN6vafMbYbMsoAfkcHU26ytojqJ4eD72xpRHQ3RGQ5msnGL8qRkNDSjarUvWigXCrEpFg6YnxgvpdT8f94ex8Yi",
  "key35": "5dpAjj9Fk4qgXk2W1Qt5jyABwcnZdCquZ9KBaxeU3C21xW7ajWfjVMNnkAMW6DqFHZrg1PWQgkyzbz2dWDUsDuPd",
  "key36": "2B2y9dAg5gwTxDWfa8MoGWB4DzGQXCfobkRDxhvJ2XXyeEXVogrt4AeqLwWjFb8aHWT5eUnJueWnvj2zoWz7HKyW",
  "key37": "2eYUCKYo8G8oJgvB5NbKYgVxS9PmWGLUSzF3f1cLBuFdQLHBQ65ngZFZFVNHAo84rgfgLAPgD5HzEkB17beYAXV5",
  "key38": "2YbWkJQ1Yv6AWfY6f2hEXx3KJNG8zdYjQLBtoHdJMxJbFZK9Y11Z8eYVWDmxDbHMXt4VFPVpsWn1mzr2gSJGDT5K",
  "key39": "2izCJ7BRZCt92LgP3k4ToU6bPd7H4T9o3RQrctq5ttN5ABfjWTrwJZduqgRsgJx5BxE2L9EDQNGaDe9WMgn8ZUQn",
  "key40": "391mkiC9e52PVFnzMcTN4gAUe76MftQyvgCjfnsBK3NdibRH6KzmXBx1WebFZRYuekZTUnsiutcUsCCENZr5EXdS",
  "key41": "2i9Fb8zoGjjCpq3MQKZLsGYwG4ePeeArwXWcVb7FxVBWb6m5VsKETDLGuQgfVDm1q272mWLp8kkrscK2dpVCLv9q",
  "key42": "489BsGiwfRdE4NAxQB1drtjUy11xnWqdZ93euY7PBh9PtFMzANdRfabqsAcoALtmEyxJUUxfjc7mmYTonQ3xmRur",
  "key43": "39AN1mgGHmLEC8RrdaNMTBf4srd3vZURGhVmDfDV8kdXxMPryJTCqgXgPsQjwsqHpAoS5KTxUBLXAF4x7nBz6mxk",
  "key44": "24EMcBW8RLqvG7gbUsSQVXFz2Pc8Z8j3VHo3mtmkoabTcoacHBhcBmppPg5HCWQshyZUQFsCUqHRHAPoBZ1fBhAj",
  "key45": "3iRTwwCvGXxGwbw5anc4RFsHhroMqGgezdQEtXBYkV12DAnag5spxHekWvSmqr32THUzgNgzNMK4VLRJ9HPYLNLW",
  "key46": "34RYu9Ltgeep4pdPbiaahK4PD3MfDAZHPjq4smC1ZZNm2yYdZi1hBQWfdGF2TbcH1haVJnksawXcjT62JvmhPrXq"
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
