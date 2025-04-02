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
    "3FyQ22YUH8VKXcxiycDUfArDmUq63DwsgbwWGP4yNFhKY6unL5hu9A8SbX4zv3aCKT3iiFrEd6dqGkLJntwYPmhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paMLSZ8Heb2umn4JascKiBcx9qs6QHgLVDyBVr2DBmWRpng4tRanzAuVLceMc4eTdmAxqJRKkjRbaTyoJGWpDjh",
  "key1": "3bKbDdYQRaEDEU3TG8kzvy5EfNg335RiwuCdQ8bcXcBZz6HhsTsRFtttwTr74pFwWoWyLYkiPFzWVcUnnnzEtVFK",
  "key2": "4JH4JzMR4kVRTvipfez5d1jkbwCEHVCJP3EUWsY5RgA77fM2b5FAgUb49UzDmXdtJVMgpuUyJDDenib33dLpK1wd",
  "key3": "4gNZXPnj1DdJTNnQZ7CNkygn39wdauoe4t8F8Dw9kd91kD3dyn5CPuvnZFqgt3Z81uZnB3DRQbZ6cTuybvdj8Pia",
  "key4": "4mrWcwzK4YhchDjtXnT37cE1Bi5V35KUNEFKK8qUSLSmMPJSR5aL2bmYw7isW8Uefe85AEkU81oxUAxWrEaPZTMd",
  "key5": "2pEMS5gz2RTgBz7a6qMnPRkERMfraD6u8imZCR1w32cpxh6AH6FHoYfAx5TMXamTSYmabmpKL6L3btHRQLL7eXMT",
  "key6": "26UQTot5c1LseXKcNxAz7vfh6VAQJNcUxhBABYT2p2UcbeYPbbPsW79eNSBm1DGybPkfFoPLejRg2qLi3yzfgDdT",
  "key7": "2aEangCpXxWTauoCvWybMZxSP9u7UFzM5o7jGbkBYsrnCKjECieCRavqpLSq7bFwdHaESaFuqtRGd8pjygCxdJxj",
  "key8": "5JvRnqxEGa6eKNf2jkvi3zAA12XdK5CQt9RD9y6GPq6Yv64M4odgknnWgiWZdN1AGUQ82zfJpoprNVh2zj8HeLvr",
  "key9": "2SSAQhbYuXp2Hch6yVoDpepjZmAmEty5iKqsTD4TSMRfw9tmvmJ9J6EPDDrH3uxZyLPipT8vRagibi535FRvai7u",
  "key10": "5NoFEMoZ5t75YwfRWsY2ztJzTHqaqj2yoLvxeamJBUHikeFVV5JU9auK7dicR49WiW9Nu9AkjBhyp1Ty9QxLEDfn",
  "key11": "63kf4Qtj3vShRBbfT3paXTsLhWLxfrt8BVJVVef8Giw7oYGXG2kn996PkAhQW13JXZX44CSzsPG7FYwaK1M27GKj",
  "key12": "CPwXprozFJtqsMkUU9ssK5A4y33asyfAnQRtpATC6GZvKPZozNRndYXU9nVhx3EGUybi9FfFfMLCMuTWUq5ij2F",
  "key13": "36iGPVpcrAg6tQSkFXm6e7o9FusZuC3zS7N8E2Rpozd979j9wUNvJGFSt6DuMaayp3djQdpr9N5mn5MmDDYnDVry",
  "key14": "4rjm98yasMQoGUrBB6kY8GYqEq877jGc2g8Y1TjqPjAfBENgSoewXqmywsY7npDDy8FD48Ujn7dvekv5nVLEbCQY",
  "key15": "GPT95p51nMBSQEv5phHiEcCS7upBd7foZKuw4WNzcCKTsfb3t5R6ky3yWo2gZH94DPLncAjW6wZJvbygi69jjyH",
  "key16": "4wvhmPNqhFegrgNcb8mXUhvVPYQ6vhfn8Hwke29ZhyKwsJ1A5gaBKbxduo7HfED5yVoXee8u7dTScRk6U6d9R8UZ",
  "key17": "49EJAoi27z7PJs6AScFp8YGig7tzuqCM1ZwHRWwgTSwbsBsxNiW8tZckC5jpdyuBdQ7hxTsHqiUPeRi6WMicBH5M",
  "key18": "51JHSg5kGrQ6XbHPFswGKaBgCUQZGENu1oobSYbMEBLUXAaWrFQbC7q88Vdv1hywignX1K2XaSrn56Vv8MiHa49w",
  "key19": "9EFt2XSvnEcbxSz4mhYPEngj6nHdQ2osgb9G1cdYVzE7cSB96nBeozr11ZGNbVedDYMCmoHP7yjGAbPN9fGE9TA",
  "key20": "5MyY37cQr1YTad7jYJjUCJVfouEQVseuRfxBUz6zLgEAAwh2bvq4paHpetnaoWBcN47jsmY4tGZgyg6cWXgADdGp",
  "key21": "3g8p324dBBGsnjtBWLAm3VMedNmV6WLV5tLwnExPBhaS2aS3eWqmd764NH8d5UpsLfuoreujgfsEGvsaRTP4LDBG",
  "key22": "3B86JSNkJ1iZb2qimQdBc8dLXsamq66iPjQHddcruw1swnJEXwRMxM7HZYY8jP9NZ8huf5y1gbK9R3amZQSnsvjs",
  "key23": "4sf9Ggrv1p3oYvemmUwhaxeJxKKg76zHWT1hKDWo3sse8ZHGypz5Rz4iB2EEWLQW7kkEa925AHRpYr1fwCLwuNwG",
  "key24": "3RWksMEZA5BQ9jAGQ6ZpqWSPxnM2orEbMc9unL7zRrir1rNVoePNHGJTiuQSw95eys1Yt92JxNS4v5M2CueT9L3o",
  "key25": "51fo7w2ujjwQTwDQyniywF8ox5JDs2Y2s2N8T8SZweuU1Hju9rADC9iV9AuVANCRbon7GhUkTSN4s8kCumMeSsAq",
  "key26": "YdzW2UVqT5e4zSjWLFQQmxq3FDVS6LTM6TAx2Mapu8xVm2za9AXXT9UVxec3sSJCg4yCpNvA8rifQVcg9fYqw8V",
  "key27": "3pAo3ofvMDgKP3d3Ehh7wtPeJYsUj41WKyofJHbq7GaCdAvfQGbmwm5EHVXHWoQYhuf6ETmLdENpGhF36Dbb1TAs",
  "key28": "4z7vy3ZK97gZY9isspoFMpiHpddtF63o7JqCAQhy2aDmq16qQpxu7y1LdXfyrb5pWM9Kohunic3cjK4SsRncaF5N",
  "key29": "3KZfde7jPw9oYzwdqU4LTaCJ5mTCTLGnyiev3tbPc1S76Xrp6SjdMFTzRbgvNr72zwjZME7S8WDhtrLcLCQxnbDm",
  "key30": "2p8TKRZL9GCmfF4ATxUUu5HcDVzRx76nBsXeaiSngF7bz3NBdfhjfSyaN9yqphmRZQhUgYpt9BHhk3XbUVmrhtuf",
  "key31": "4Mdntes1PYKm2TyPEs2wUciELscEQm3JLHVrUCQT77LJvW9pNx53zhftnX5CAYBHVTAdwZHD7utA8XkuSsgGyX2r",
  "key32": "2BVggjY4Ye41Y767iQ651a6DacvkAUqpx7FEqbshcWs5AzAeNj76gnvZB6dGj2MkVxJU2qPTt48Z1gWXZuoqsBix",
  "key33": "1oNJvEpsDrXE52QJcq71gXBmaD3gne8BVjK1CMBWdEH8ZS5FFEFCGCijLoxjuzNiNSjdPRFyquRGjS5qm7GviVh",
  "key34": "43pYqrbbZHqVYmRy43tmcLzG3mo1RzS9dRXdvKP4qXuVeWhZArPCnYy2ykpQgwHNur94jPLhRHbTqa2gkn9pwQkF",
  "key35": "2ciMLgWDmJvbV9dW7vt2z5GLeHB2AqFgaSY9dXy4ETrKbCf6EgRxGrgu5txeei5DNdh8V9sgaWA6pPYbwj9htuCG",
  "key36": "2F3MuMAUje3kbLJW5kGgiWmCi2gCdKcxzywz7LDUCedHWhWQkXkCTmrBfgBLmt33juVtx1CKKoX4NcCvYs3LzeHJ",
  "key37": "2ZJu5WBpdr21Zt7LsXeMTaDRZwbh2e4bn6HttduWqZQXtaqQBVrsxqpqsTD365g38FavnpD5z7jK6fDmtt9t9hQw",
  "key38": "235ost87orQvACKMcqgJ79GJQU82rtUFicvg4Vxi2zFxfKw2X2nUUWraWtVSXK5pdesvGUm7NExvPSUboV4uJUgR",
  "key39": "SQQQoDxTR3aVzKfotMUTwZpEsfuYmSgHE9Q7ZWdtjyoFr75cnN4GK6v3XbcuB3r7ydgb1eVWDdZuB9cVoJjYLZ6",
  "key40": "5kwLjvc7mfFpdFSijZ2XhqfeqakZ6k6NdCHVoehaGtByKQuiy4S9mmpLBdrV7R2ekFPEEfh4esDyq9i9HGeseXRJ",
  "key41": "2SaCLqgHbtkgbNTFewotDRK6pdSaE7guFr5V8xJXP9AdVGvzrJNetEkRJTUXvrJmGDLuPatfXsLfWrkRoZLN8P9k",
  "key42": "3k5pdew4wzxj5Um8KmmNS44HUQKbASkRhh4hGk5MEjdpDtdVCXLb1GNjRUGsFeDkkbUYzLWSTFmNsZQTyzQqrBGh",
  "key43": "H9vSUfWu5kVpuk1TCWFK5DbmyknoqGbk1r1NYm91nDUWsdPV8kETy5HvK8fDvK6mNBFwUyhL9DjA1jFeWkkm9HU",
  "key44": "o4bWwU4mUaMg4Apf39oxnfhk7zaQ6ivUbEC7iStXr1Nwvdqo8r8M6RJuNFGhoLZKyxVWdVQ7upFTmrJ6xbAEmyT",
  "key45": "4hiqZ4W7v9gCbNNN3XVQp5Ga3uqaHnG9hYozUARtMSJBB3YAaoWfK3T5aTwdEX1Q6HEsv3YYoWWkGXQkrkiZHr29"
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
