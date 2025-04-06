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
    "5gbAdBCtuRwA1DB2jp1b2CSBjHLRpTgNiXgNFTUWHTn3Xm8Tc1Qt6FR4gfJBoWTGUvJ7upFrebYF7VvEKN43E9Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UjQDZEdfMr8PrENSp2rcXSkGz77gJCKLCiHEXNzy9fsUzwoH3dRP69MU4uetp4f5YQy7QRtbfjfmBS8sQY9f5Wm",
  "key1": "3yuw496N5XWiyR5MKrtVPLTaewydRHvVgCSBd1X9EaFJSTpE4wuz6QFdsDkhXkRZ2BV5vPzi7FUkkY1Ehr3d1tgg",
  "key2": "3JPwkdzRgdCBU9RujBhaEyV3RHD6PAu7tuPJrMH6C4dWPUvh3MTExZsB47NtEYYj5C2dQy6gtoRURJuDWcixvWEs",
  "key3": "2sws744mz46WhwRUaA2CYdkWTLL3evvTMnQZ3tyvASSEJopTBqC2wkcVQFqKjk32eP2mj49bpgZP7RMp3F6ATqDA",
  "key4": "4SwanrJ9w9JsDBXdMwTW8AGGLiccEzcyB2h7Tjp9t7JWeS1VNDo1wi74hZoB4pibcoNJg172YBi1cmWo1CNeqGbh",
  "key5": "4LXj4kjrPskYNPgwLEMdQCB6966g4d8471x7ahCS9jyzEC1xq6r3v9xj4WFEo4attwe74sPZjpq8JciRTxMoi9Hx",
  "key6": "4n5UymCxnX76rR3CDhWdE3xs8jCJ88u7jYPYawUkJoggX5osBPzbN6HcTxjSLbhGUedWWk3wrUuGpywCvqfwahym",
  "key7": "4RiPEkutMnizeNYWTC9jgfx1gbKjateGdJVHjNGSQobE82J97JSEngu953ypFCVAr8d2hPoiqFP8yBE7pBneydvf",
  "key8": "XLNZohZZ1R8jiqh5jv3TJV33bjjk4MrA8pYr1dXNTw83Yrys6pT6ZZEzauMjqQzXcMm32AcSyLhGzJsMe2FoAK7",
  "key9": "49iUCx99BanVaJiAJTQFWTyworXVRUrzwuqAnCfvaJEie98diqEQ1aebuGVFKMGDyBXB7zKXhTZT1VuQwguUjRpF",
  "key10": "2SnwRqFz2P7UxTiJbgKwJzzkxYc6pJGBrEapAGQt22weuEWnNFg1eR5AdBGbN5X8ERY4Fgad8s3pPTjcCQ2Dc71y",
  "key11": "47xF6h2LPy4LtiVZ8nEXqiJsJ5R3364xLB6fKbwwSQCoQZjQ3CiQZoUsgeMMca52zcMibf4n2DtjApAV3fejdD3F",
  "key12": "4ntVMD1t6xjjUtJzJepcudBPjJYiamBBnPU2sNVNHgdvPpcxcPDUjMJDmexreft6R57HpGVu6xJpKVmcL4qcDXHE",
  "key13": "29V3uSsDMpL1qMtYwCuWW9HT9X3FgNAcELrvqP7K2nafgqk6BGKUNvYqZtKqQsVceGVNzXCZbxUx9G1zKcBx3tq3",
  "key14": "4QCHpXvsaVFTJCYpue4wXYtpL9MHfiMtYyg1jY3t7k3n6obiRBh2vGHHGP9rGfNCv8wYNa2rAw9F2qp7WMjguEEo",
  "key15": "4A7QFQPCSNCLBJQibDv5myPi4pjwV35xwVoMjo3msLuKRKt8XDxaJ5LvVJzLVsXm9QTR6yFspCh7992D5xQsfLZV",
  "key16": "3SxBY1i7AUdyG9q9QNhf34phF8gafsDTJ29dr6KcdrK1uoCBRTAg6hr7hLpxUis53TyBwoTjCzELdB3t55MM9mgt",
  "key17": "1KEmvVCFM1gVhScihDYotJwX8UhpNPRUdtm2PRBdb7PTcjRA6JCKLa9oWn9qJZnnXhYttSUpSPXCDByf9CAsBBy",
  "key18": "2yAcrLyGzJLzyV1HUqApdNTnQ1b4vzqyqQx1irtXchBARTm61qU6aHR7BaThoDTMLAuCoT8Tevmpx9qjq8hUjQuu",
  "key19": "nmaLKqnjushCUeYhhWUi487whoh2pH7eksmcKyqR9WqzFNTGbmhzoxY7VbRbepdGtSY7EYjkv1y9zTXikSxwDJk",
  "key20": "5doCQfWsSuMdW2Xt78CeSk5jEujGcqSRZ79ik7FVK3PoaoCv8wa2adCzdAoPQKBD4wjMYbGzxuDR1VDFtA5tBz2k",
  "key21": "4Lj3gz6miMusvT1zpidPYRnkNN9o8sQMRQramrWFmf4J1fu4mx4bDcdjmV71oPvsa2d2mUb5Yrn7y3JHhXhUJmFM",
  "key22": "ZJcut4DmcjP8hvtyJfy5Q8bzHANb5gjLJBaqJrDfDRJuem2NzN9YDWJJmXA4bMmXpc54Vzx6k84TdKrNswwWTSc",
  "key23": "kMFWE7NsY7124ppae4ZH5HXjNUeKDULg73ou8TLLfQrD9q6Qwkf9317GoCexZcBeuDXckANawwEjcvJvpfbeXhd",
  "key24": "4jTcnyTBU6qsKF8oPq4eef2w54gFMzmXWmG6n5Qs8p2nHJ6GRvo6nZ6Q7BUsFR4PCXDBACXXNfgqMp9Z6iuZdXu",
  "key25": "455hHoc7NjHY9oJ8dovVDfiPa7Mo3sbdipGqoiy4ZV1F9UYmFf3Vp87XC1Ac8b8c6wCF2VPZmYJmhHCxdB1nNRji",
  "key26": "5whhLnqb6HCKLYpFkcsfZg7TTZNbxcC1PRvNu5m1X6esidGkDXzC6ejCDrbWKSHvJWnYR6YqHVJ4XTfxNFu9GZ7c",
  "key27": "sbk2GEDVfQXA9B76FCCf7yCvmKnMxLwrjwLrYmrszQwpi34rsgipJKqgEVZhQTyVoL3h78qyWGY9mpuFLbR4UmM",
  "key28": "4imRjq1neLnyHTfceGyxKwHw1KBhSEE44917SqjTx3GVyxEWnQ3mX4HwrKAycaVtTSq54mjNRZJtfFgRBURtZfoG",
  "key29": "37gntPFNUxTNFUpxoTNBQsyYxkwam1JWq8f2gdjtAd3QBcFv8y5BqEY12ichit6NVLArExhJjKeqpvRjwhcG3Ssz"
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
