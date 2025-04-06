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
    "21rLirMmf1WGGdqkA1PEzpTSMRUZpE4gCDWBQ1KFQpk28ZWHrdWUTs6qmsRswT65TUqLbKoo1YfnEgYj1ytw6UE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvXRY467w9Gx8vVW8BytPE293VvrPZ4q12VDMSjVXbQR8yMn6Xyd5pihynoyd1gBBr98NAvThdWVUrRzsNnYcTV",
  "key1": "545xyM9QTjqcvKG9upQP7nfXWa7nzXDPPF1qTjECF37jkunx4BzWLgBn8Nnduuw8HM7X98UuD2G3M5k3K4NsYb9R",
  "key2": "5eF6oriFVbgdwPoYKJjyk8Aysy4J1kUQz6pdtP1GfjB79J9ZEYvhGcSwRUcEYDFydqbU8CU2xNVsx8B4oWT7ezpX",
  "key3": "hBJ5mQLfz34tAKyDbAz7exyBi88dBn6VYsKSnUGs6s6sBeQw2r4VoHUAS2SpPFXqTyf6XMowKbpHK4VJwP6ZPuT",
  "key4": "24F6Mjb5jFrH12yUrzZjuaLMwsi6Uruh8KFHm4azdh2JprYQgrMG4tTh2ojGWFq8LEBN4ZMeXmg6FTjJHkvwCF1k",
  "key5": "3nihBe8mvJ9AYSkBDezV96DcRLH3GVg8zVUXwtR9FvNc63U3KMrVzdXThW253q8Whw1QeFeXrT7wQJs84yjmMGxy",
  "key6": "2CHNu6EG2Kaxjnfn93hH8tcXCUivGTCvMSWnBavGZo71aAbbDVFvsPrPKvhHb6Yu7cVVWQiXbpgZautvA24MtJuh",
  "key7": "23fyvABDwyjVi3FMX3gfhdySTvKt2PtCUngdozkbypt7CJMAF24BcWbJ2iidcGD8vsEHg6wyYdEdhRPBqAtFutsv",
  "key8": "JdtQ5KeUFGmZ2waqxBCRSQrDJfd7YryX2YuxXienyeN4GFSb3KGgwM72Eusai6vGvF8b1fwgbS5v8iqGnuwaxek",
  "key9": "57NGZpvxD1T5AuWnDU6GHqcUsxndREY47ehcXYQu94DHyMMX6jFUEvPsmhNKaU9mYyTGtFM13uMAUZQRUoaZCXfA",
  "key10": "3F8xMU94zr3rwqDzQRroUtP3eRM9zo9Vam8poESn7Sz7Nx9m17sRZ4wK4yNuFFH1XoHhPWSxZ9MpYbkJQyVUCgxe",
  "key11": "5cfX5Efp6ZWZERiLgRFpTDFWWdb6XcECFjsUUxTbRNC8Qjfacz4rsfMSoSa85sTtYxkBj4tCEwNHUgApv9WnC1Jh",
  "key12": "4wE2nEoZVEjZULM78UA2GbbX5zCdhfa6J8prXXGzTPjYYRFom6PZoBwP4A7FDkGU6XtzCSR1qPUWAP8X2K6GupkK",
  "key13": "4CxzTYhS4jYMx27XzVghj771jLFiAB5uTtyBYFJG4dJfBLrKdEjFLWfoxf8noDx5MtmdsjwZ8msuzVfJvn2vjxmz",
  "key14": "5hVtFGADy9HwiJvRT39XctH39qiY1cVR7NAmxzRKqeb95u77wHgNSR5w8uWFWtfNGz1dD6KTKiLavjBRdeGmnS9J",
  "key15": "5NHndeb4tZy5jyMYaQogNC3iLvbBSKUDsDo9TU2JaxRUVu1MB3vk1o5EU1rG6PQRGRo5cxb7WK8KoXgEhFQ8LQZf",
  "key16": "3JR2hyWELoMA7GKe4CB4nNB8LUzqJG3oMHsuRLWFKCr9fAiY5DHH1wTtEyHLpCcanB6t4dHtLy8Pc2ne4utqAon4",
  "key17": "4hfkrcjaLqYeuVKb6HuvFqkSvBcLjW9mM4XVVFS1uWDVGHqrVev3oaVgaFE6SaMxd4Kih5ELFGDVqNWk2CWcXjQ5",
  "key18": "2QpHmiKyVaB497rLt1c5m7dtUSdSRXQk2ey3aNq8NyUodi4aFZqYQQ98PSm3xYaS6sstzZmqupELjuPzy9W8HDL4",
  "key19": "2A9ZU97XmiTfvceCi1vaTp4s6wqPtviGxm225DR1WKieU6ReUnYx6vwNm4qx9aHkn19s9ds6Ro12NX29RTES39B4",
  "key20": "fCq2Guh5c2pVi431p5CgJrvDFJ6mEfiu1c8AqKtHxEKbTzffNEMsWmThQ6WZ3ahpUu9J9xvx1HXc1f1KmLaW5ux",
  "key21": "qyhU6WiGk5nK4gsegwMo7pEBC2YcQDbeodcBghbfPfSugpqboeUC1bBdKRtJ7E1pS2bDd5CutmSbzCxe3umUp71",
  "key22": "cfHWGfDtpBMjMbCWGx7bRy9o2m9jqUAYhMQnkNZmK1kkKmzUs6vr17wb1Zphv8CKw4dYK4Nkdgoq4gxLQnkK3rn",
  "key23": "5EZ1LnydPkJNihMhfWd7XnZs5ogWan9CGQz6kdraiQzyPSrNrNDDQqcpXMnWBwitAYyYZgdwMcDimQF8ByNQ9cZa",
  "key24": "34G6Y8stQCx9wr4fDFUw7vBnMYkAC5ctjHL1nyRfmJ24UWDjW98dzjAo9TzsiE3aLGLQbHCbA9R7n92WpzKeVuGL",
  "key25": "4i3zS1rdnrArhXVMba7AeftcSs78N6j3V9eLQRCJA84nJMe56Rzi2KxYCDAFhtFTjnSi4eiDAkjcj1dt9BXMWtGp",
  "key26": "cbueZ6wbGLkkUNWuZEbGKLmefq3oZmUqSLcpNz3xot6Nv9LpJK8s34cbozw8tzvowkoeQdVGrGrvWfyDawh1UWJ",
  "key27": "5frs3qpTujYLHYiwbUzWtLq9b9jjTG7KNVifSW1AcqBiZutaGfrKqcvPSf5sxep7dL2sc9S8XA3BT4wuZofTiYVh",
  "key28": "4bxw4ywMvFdSPbEo8ofQmEwR915hVmLZZTb54cxd8d4mrQdZeU6SLQ6HwoTANybibPvdf47DXYAQPVwdnEejg5XU",
  "key29": "3KKsVJvCeFBNwFTWj32EZizH9uJo6fz6jJVqnmmJ9TNHBM1TkwXMDCQ3Lc9HenbMve5kCsN8z9ASZzChAcmKNpnU",
  "key30": "3cc6Sn5vxBGukGfHpgA5ZNbT7oSkS9tDFpCn912DJHraLSdMsqtmcDtYuDZnRFCJyiHHiPBWfxTXcTeGsaMqsraU",
  "key31": "2vAMHSGVuNQsy1XSBRnQgbY8kVSEqyHnhr6SxzgAQjF3evtvosXnPDcZR5pTHJAEBjC6ezTY4Q64P2fdada64PMg",
  "key32": "DLPeX9RBeA125YG5Zwa4DJUqHxSShh4jJTcW7jNoCf1p85dVS3jcbX3t4psxsfCRireZ6hycCAf6ZjhoEy21fLr",
  "key33": "4D1FMg7qPYyiLPy9f7nZqSTTtyNcdadwXDspfovdazgSZHsHaQQXWAwY3otSJCdFdMz7puqT823mheXSC7FY6DWx",
  "key34": "2S5FbNj8V2BkskucwevYBGN2C4wgpuiQ1tSHMcMab63Pehh8v558YUAGRgbPmLfgzn48B3jvqfhtAJ7aLuCpsndE",
  "key35": "2Zcw7MdPQocgeg5m9vT9PJ33pQZg9VYRK6q8tasJKBHhFVqQkrRSeYWadMFx8VKNvm9JxrJFqiCmUTZMuCWe7sQh",
  "key36": "2y6TVX6bN1s6KoR6WRdoMLrroF6bYKeZBLQkhJe4zUkmhDJ69V5r99SsRTTFYH4ckSG1yg1awR9ZeAwiafaUGb3x",
  "key37": "2TRVUYuP2QQLpcDvqjrSr7XQyHYDGfkHj1JgWHCmHgJafRAzN2rLYEGUyJ9LbxeWEDhMQdVSXTdrQwqeegLfxpuk",
  "key38": "3CCdgbiqq4fsgFMQVkLaBmPJSjThwvfHrUnHmLeN6fvRXkYisrnB4yi54zxnG4gmYZNguDLqRS3mtLPenXGAPB8T",
  "key39": "5uUWhXcgNj3u4T4THLvw5FotC6cfmDQ2wiiSx1465JvWbdpH6JyRsijCyJQMhr4KsPpYPpsb28Jh3PCJYyqHH395",
  "key40": "51e2cxGUqC322q9PmQhUyfBKM4gGvSaWBfmMmrYECp9dRGHHcVmk8nAQbrR56pPgszwb3CgXmUHRt4TiNfzmFHwb",
  "key41": "DskK4nSQ5gmcaJKK7JC5TSUzuthobM7nQvLzEjZ3tVbTeorPfSzvgf1qimBnYV5BxFHhbbEkMoysxvnU9fF3Dv6",
  "key42": "64tWk5rnZBM6JyXdRmMe5DTuPs5deY7hvcNZK1Uyfkv8MtV73ziM7XyQgb6xRhHn4uMM8kh89gS5FMHMScKbDj3g",
  "key43": "3JTHhP2ZvqRefFWhQD4N8oiAYn3JHsVHVKzCTpb3jAC4uxEuDLdRXc2MtLpGngVJtCuLvtZDfHiKAv273rAZWRJC",
  "key44": "4SQsFTan59oom5p6YQNydAEFw53AF8TKtGaCaSTNzFqqpChHgenL3nKu8VgRzPbW18orsp7PTGaQYMcc5mgtos9H"
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
