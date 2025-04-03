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
    "4D5yZESh1t2QwEAGFzo3NT184Un34vVKbYDTScESTeGfj6BG43bL3ujxZoQJZEpryVuuyiyTXBNxtg265CF7otfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjTSV3XRZcaxMN89rcNT45PbBJP7aBRd67U7b88ZccGZL8RgXdM2nBHXG5k4qSHmyAZBss2ty1q2wE9qfNjQCtg",
  "key1": "2Lz36AiUAZ7K9i3fWomwGoXxDa94Gz7MWVtfHBerhzWwWetNQRYVoWrhEJQdMBN8HCPzvjHaFhvmrHhNbHcSFxsh",
  "key2": "2L4KdgiUE6ADEvz6nXpUb7NFRzGy55nHAEadEwmpdHrrz8cewPSFWtcExo66cXdVHmaLd1hHJugBFD5q1FChsSnt",
  "key3": "yMuBbamPLaXBLFxYQ62kGALNFc1o1agNHDaFhk8UYMKPCkCjjUbRFK991C4cE4gpA5PuC4JSFNGGCXkaU3VyGHZ",
  "key4": "5Vp7Py3fasYznB7L4ofPBNXzfFhCYoJVFkhYLFgBZCxq6uGNMzjj7h1A95R9vcrPL6M5F35rw9nxK7emADqJzRHW",
  "key5": "5LRNWCvMXYzBurejT8VqUN7C8UpHZGkVWD68KyVxPuD3uAaVNq3Lc1gPzUV1hAj1VjG1WAChZH6kmghgAW4GJsaZ",
  "key6": "3v19LAvBjsijT3k2evN8yjhb74QwQ7fcfs25zpPnkJaQ94CKxdzKkk7xAYM6Z21Vn9AJPLSxz42Fyc2iPwebSPvx",
  "key7": "2Bc7rS1hKWUe3Zb1PSuiCtDDDdjKwdm6sUwps2Kvke857efPckMwdBjeokySigpbdiDmhHABqHRtpQHqRuZETFPT",
  "key8": "4EjCmZggoosnD88xZ7JUiBNeJDTwx8C85UZW4xmBNthGts1f926fv9K5kdof8NSnQUekvXhqD5KNhXMDEyuxCFxN",
  "key9": "2XWER1NhVnGYCEEKwLpTWsjdXDJKZC38yCFSxMnDHc2iwABwsfX5paTRGF3Sp4FNK31LhQ7sfQ4BARZE1YfJcw7u",
  "key10": "5EVBmUs22FL8nVgxs7UfBKNqEdHGESBeu6kWegmW6R8RhUKw5mYYvYeQQ3cnQSjVWDo9Y1e6Yqus6TDMGLFZtUsd",
  "key11": "3RP8FdbpsDVbQPNraN1VKYtV42pfyzVqngUxAwC1cBPsj8LLqvGEZ9xHvboQi9g1L2GqeUzqyatrbrkXFd3TnMmG",
  "key12": "5HFR3c8T2LNgV3yZovrJDT6EF7kSgwiq7oMCZUEC2k97biA2EKJ4ubZPLRSYCbwhnnLjof18bxg3rx9WPMMLgAoS",
  "key13": "9woYyaAA9kaMCzdyt9RfVBzcH1z4mK47KgyVS1mzsbgkNxPPwCRmC6JQrmonYDXKAVd4mbPNwXduebhRpW2fiXx",
  "key14": "4bButCtMmZjpbNaAokHdpgso3iG8wNA593GJ3oCaqxfLGC7JCZXmCCdzXbf4orRo4kTkraYauNJwDkWkXJopsb6S",
  "key15": "3E71ccv2Kz716oL5bDSJco9egdAk3nRd2NQBNbzCKEc3fTvMXxK8wKNQ8BxvyBctsSQ3VHpHbh2twr36qMGKX5KS",
  "key16": "66QdEVXob7BroNsGbef7y3YeRuNtaH9F35PBWQD8RJTmgGcbBsRPHw9LHge4guRzEixts9JW3aRsCoqS2CjCUkTo",
  "key17": "5HtBJQwMLSNfsCZWMoCidaSZPkPifGeVSB5p3BwcXBpFm4kWm7uD7YT9KweFJCizK8wyxPEx8RRBDP25jMNGJdCe",
  "key18": "34zxP64BGYej9DK9sr2YryYxcwi9v6JzAkupecUJhRHGjE6yZ1MkMFMK96jbGh9aRY6PPu1azWZoPYbXHLCcVzGn",
  "key19": "3uBpzAFRjwdy1CpTmELmkbKSYRF5snkrEcHmnCJyPVUuzYQYPSZoAnJ1ivfVVmBHkAHBAPT9RTVvogrLF32T5FkV",
  "key20": "2KH5x8zDh3MMKGmdEmCbwkWBXHWRprzf4VYjzukfDZ7zWHZvaFa4nWxnYWmRWSAVGS1yghxNgGkNzsu4PvUA8Mmc",
  "key21": "5tQRm67n4fUJgorCmxJxFZwVdAGw1Q42S4Z5d5EMabk8RQtTbUqz3pbo4vF986qSc9PXPbB31EW2LUwDAJUeXCxj",
  "key22": "3AhCktcEMJE4AaRHhrS41fs57KQfshhdV4x2C357u5vLu3TBzrYihxedu9gaU4zpyRWqEbrhxQY5m6JGxuXy6sQg",
  "key23": "ShprGukxC9sELdC3L2Q6u6QmpWBz5RdXaDifeNMs7Rtzwo4hG7Pgm9qerehbCvf3sF9XY1AbGTdZPrQQqAAUcfn",
  "key24": "3AQwvcAK96TC4vA5Shzi71F7KHtEsk9YFUNLRszK5erk8rM3oW9TZNXjPUfL3rm9MVhALKxFmrnkeMST71LAmwks",
  "key25": "2Zt56J6iKRHC8FGGCsXqAP82iitFwgrgBMSr6vE1yTZ6nE8BctUAUzRMTwKCTv89PdyFnStvjwTFrKKiUP7Efijw",
  "key26": "nPzkowBFZNTGiJvoYycPDU325waGUXp782RmBZh2ktNoab9VvXsA4zU5TK887835jWM7vFv7EzNWv8vvHe1Azto",
  "key27": "3DdbpaccSAkAs7ny94BMy1PkAxWdLT2vWwtLXCRE72gtxw9UAGwajtrLkJk7yLQaJYscDpDBNDgBryex69bnwUzQ",
  "key28": "3JitH4FXNJvMBYXHg7rux2bQdosYQqGia4sqKPEs4HhYhDebKyTUc9EuzsfnaPc2yvVLi2cw3qiVJDkf9g7Uzje6",
  "key29": "u93aNRyzL9bVmsgTk3PxkptpeZU7e3ALDLLyUywWcMz7wfkJhDrMjcxBVJqkNSY41Un2Tq9RsgSb9qAXoWHLWa5",
  "key30": "nHorrjg6UGrLCXmMbTEJGoXovVKGgguXn1BbDnGnPmRuTye72iCRFM7cC3abVaarkznGGvbxShvpxzRHaxnHsbF",
  "key31": "57MzsczMSbVL7fqXz67k8S3zGKy75NRsTJVYknwW3pvTmfiKwgorCM828f43rjzz2Zf8YzwBDfZBXs9PBXsArxRx",
  "key32": "2rj5WCXffvCifq1RU1cZjEZjEBgofSqFtp5cJ4yNDKDyEZLa6uMSZU1crCRVEi7urVmNBzbaWAKGER7ne2Rb7EcV",
  "key33": "3d3SFqLpbNqq5XSBYkYFfaogg9aeU4iQd38ku8odScXWqEdTb8H6jWMeWdj8Vs3MPd61QpPeS9ya1TZGfoRAp4rQ",
  "key34": "4vToPRWfTrCsD48NM5di6zCS1doME4rEJWMxSvNAPFdbheXGsXfiL7rdZ46oqLMd4jhttmcQEJZg8KgGr1AwicUf",
  "key35": "1kG8G1ZLAi41nrXvUJ99iiVuKiaMYZJReUBhsp9iabzrdTAxLq4Acej6WqTjTXx5Z6NdF5hSCiCX7MkXdvNNUoK",
  "key36": "5VVQb6us3go7UwAE45DJUCGvfsMWmat3ZZVzFMZYefwDReq8yDXFC3oa3QmjCphyaujNZryUMUvB4mHDbaNa3sJh",
  "key37": "5VKmR7ZWZKs68Gd9tbNPvJGDeyx7ARnmdN6YTYt8hndkeBQihJaLjhE3vBzDLNNjQxVzhPcYcn3L7QrJ9YcLKRLx",
  "key38": "z2F4fQ692x9YrStCJKnpqqatQfHdAp9vvqKsgadnb3r57kBGWA3pe9QwuwVcthicrGaFiU5vwL5PJQkvuvjwQ57",
  "key39": "4DHYYoFWKLa6z872hhEczV64hm8jXTrvdTrbkRWi6SY49Cg6iE5notgDNucBcDjYR2yVZ1HKdQzJTT6VTu6NTgbj",
  "key40": "65EQgeXujVkWcSW3TPvyRBu7mHg2vkBMevEwhbrHYH5Kk1fkgeiugNSkdBzonwTBgU6Y1HSBNpA3jiQ3ixzGFTV",
  "key41": "4cgn7YCHWdJBcx2C3dPJyZxFYLgfsv2E2fLNTDzgBn2UTZwrJ47ZogHLscBmenQen1Pnws5R5sJeagbBdSzQqsAU"
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
