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
    "2e7w2YDLUwTJ2aGZ6j7AmKsayRhYpB7K73r849dZ3cGf2gsRTPZCzBaPoTs1oWg4TKJ9RnjbHZ673MjnVgQT8D7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9hNMDUbsCoPfmT1kC621Dd27uzmvUrKGXE5uu6af4jSyu1jqn4ouh5uUHM4ekj878HmkPwk6t8Rt2aqtYFBL7q",
  "key1": "5ZiPXbC3qPSxmqeSJ3Xk8Y7QxR8mPtAfskc2thTha3Du3ncdLe3YNwXJrLswknETPJ6WKv3scM5XmAWRvitHmRvi",
  "key2": "2bpyKKUKBjyJCmMvrGo2vYA91xCGUN9md5Haipbeuzww5TXmqvjTZC6NMrkngnjBHDTR89P4hFdknjE9ujts6pKm",
  "key3": "4rMhdrh14nbuSFGjJvnuBE2oMif6i7EL1jid4R5f16myfN9otGRuqA4NWFN7hea1ysc8te5L4uTf6arvf2YYw7tA",
  "key4": "4cPwhrZMRmSvyDV8BTVgWGStCWPtWHufBk3qpbbpm4dcKWUqpioFTesECG2DJZHu2T3N1ZeKWhroYNUsCyFdp3Q5",
  "key5": "5iTJhMCMCo8sGHVjdbtpPfKqPtyQnd57PB3TAJ65YNxvFSgFkHf1UEgX2VHyTML5PTEcfQD8iztNQW355ykvFdEj",
  "key6": "JY56X1jkX4DFsEEQZMg8kkK42SbgzF6vfB9whRig5PEJwwaaYG6q8FPVFPKDw1Mz5Lsz8NBdnxozwcjGc6KzmeP",
  "key7": "3hGogQS7JD6gKGePzs2XerikpFmJ8AFYdD2K1Q6GpahLJkSUVTXJPzqKmbDGyVM6pxYu7uPC9ywgxAVXRiHXZf6D",
  "key8": "25NSR5LHSny28Jr1UDszNbNxVPthEZFdq2SXbJoyuSV3L1LkNQkeVtSAYEjfDpEsr6bfRLNpFijJENWVgEpmi4Gc",
  "key9": "8DGqnjwKR6TWh9Bg14aTdKZGv6dJkJCQSRQPP1J4QCCWudwz87TKRCSo9jiv7r5stfMR5X3v1JAVWSQwjSPgPQ4",
  "key10": "53VMvG2PSQ5VrjjFpx5gfFGAGuNxpkoGpBdBRyvovTtWmBvSapn95zNCshpXRsgfZMxYFbnkdcQ6hHSmGFYfDEE2",
  "key11": "31AVX2KijHppxa17f1K978VVmY1tziy4xZEkUudhe1yqbvr5S3RqtwhE93zsEwSzhYapugSUbpY3ecfLLFLGS9ZJ",
  "key12": "41AaqEcwvGBJZ7Mm78X8VuMiVvLp8FrSvo5paWNqdxraQ2pcBVTt5STe9wWPccc85ugqCZBZFC4PMNWnoQyQDfHz",
  "key13": "5DoLFCEAEDxvLEv8bXjHCDPDbDVUEF3wXzJv9fr88EPPKeoHDtxxSUDU7CPHJmYr5oyCvFk7MGstuMpmxE4ZEtmX",
  "key14": "386skzRJf1q8J6tnPzdec8JS1gDZEVEgHN3ZE9dGXpwaSJh7d9DFK1i9Tytf26Dvek9qunF8ZPZyRXy8J7TbPtPW",
  "key15": "2adhArvjrzksEbYEYJtLr9JtzA7FNVyyzSDuKQtGXmT75Yw7agemmhSGru1EJ86HGtArdcp1HyYhERh5ZWSg4Cjx",
  "key16": "4cFd2T3iCVX9dTtLsyZj9LiUbc8iWHG7EHiounbBgRjL9bAfc9aT477NC1tvCFnnFNoAnLbafEbebcmt3immcQRo",
  "key17": "n3vsiu1GKXT3ZQyKHphRX1foYvUHAvWzF8FMXxYvnxXQrPvFPbu5juGnYffyj8uaf1N5n7Paojmfxc79mvqLjPe",
  "key18": "2pWiA7RfNKQMw15Dma3obyky13ox7o76YvHmP2spD3FiDDGkKQq6SLXmrdYdPGns1FvpvEX2VEZPn2nGMq4foMJM",
  "key19": "5R4DRDZbjoWFwgcrqJVoJk3nZFiiTiqAToUhK3oPWRLxvbZhwVbJSTWz63m9dWr9fA2YNTeaTAUCGWgTfnVm1bAa",
  "key20": "4Qazm7Fbs8pbLk6CVEg4RKYgV1XG3fwMnxP4ytjen4AHS5Jq6GGzTkhNbXzaZVQLbFdkDyknjBHrSXcoG763mkcu",
  "key21": "3MBDsBTgoAoWiqyu6eqJRDAjX6v7g1fRRdGnfHd4mqkxU9mPQL1g5pS3KYtdP6vz7vZYrYF23LFkVCi4uY1oH8Ps",
  "key22": "2P4fBtwh5rz3ZbYydk9ytzPvCdPMKXnhBeS7SA296fNf7awVCSw4gaakqNAUGaVX9p552X5ycup1ZVn6RWWMD3QH",
  "key23": "5LDPovhgvquxWphDSkzC7jcDQJ3tkm2Yq5yn2yz38bkTAcbc5rqT7LZYLAr9V5x6uduWTSntEd6v3y8vQakYDWyB",
  "key24": "3VZeDcyCcoRtN4Z2PsYTWkkJCd6quP8yq5aj7BNdDwBny6VUE1T3T9EFzFkEykaRZbBzMUjoWcEadG5LsTnkWwN7",
  "key25": "2Q4XYbCZv9ajbScP4L2hpTgCnh54wpgxPBPv32Uf4tBrpVWewoggp2P9T297Ff84rghmyjAUp1zmhD2xjfBczhGE",
  "key26": "2r6vDuDYtEozxjUg2ThDv1TGbVACWyWbycMgNn9oprzokUonYkaffS3QZ2VSsZ7RriY8tVgLtSmfzfNMgTfuRPWR",
  "key27": "45VW3m2AiXjMdEgNPQRjeeAmJWTEtRcQzfC7wT345SyB6EGEZHdFMB7tcXnJxmTrUEVjbGwv7kpxpqJMWxd6iRbK",
  "key28": "5zLT4AVz5j3p8StpQ1gYVgG9tLzZJHZeEC7tH2rCBHhSnHUCarTYJiNYK53rFAPXxJttDfPMRGrci7tZemSp8iRi",
  "key29": "54NR97F6X1aGX1ABa3zvAdiW9S4VrsBkqnW76x8DtWkEqCN5oAcu62tLYFHvpeGRht7GyrWE2u6iptNUHk3pLtgW",
  "key30": "3ytwNCE1dfSM2Aa1aTtGMzEUfkADG3xnM26UitRepkgDkVTttkvAyhgAFGHqY3ZKsippH9x4tJ7rePXLm6k5EgE6",
  "key31": "61A4pMwMYx97dGybkR7X3QvbZu1BmDeBQMFvhVXSotrF2XferFJbDuJA3qqbiXRHEFSoaV4kbaHTzRD1xVrwU5Dw",
  "key32": "3Y6CSHEfqHT63fs81BxKF7r8cYN31YEA7cn5LMpkWFWq9ueiuDWLVQerxTniv2rHXhuSnVBgaYWHtLBKRrH7wKuf"
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
