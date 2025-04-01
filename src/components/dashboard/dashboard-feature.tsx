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
    "Q3ZnDHorcD6hXan1GSfJFin5rpGyUZL4cdQibYNittirWbxiCN3AGKQWLGwKevCoXKGuLdW6WdvYtx8W26Zopcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7X3oNwSeCEU1jENLybqhbarktvndEihg8UBsxnjc3BeJHH9R39nYhmAewvvRXbBQDWYdgDSFxhgemQE93L4qV4",
  "key1": "4iWYAeryzMGRjsChmNr2pEmDAUwTe3CbrZDMFfdopUMUW2Pwp5MtGHfEJ62DkpmTujfPYR5Jzmti683vzFYSBdh5",
  "key2": "5SyBiah7BQtAYKahRe8V1JTdG4arUxbKwgujiPu3j4omGNa4hWp4ecKw5u6UsHw7wurjY3ePVadQdd7w6w6EwAeQ",
  "key3": "5hUjyFXXkMECd99U9fF2vPSKJrJ2M24L2Q3Pt3StazYsyDjhfXy1egrAhi7KVGVQ1Gd3Jq3dm5WByGPSym7mmKnu",
  "key4": "5qKnpnqHbw4reSSxeuVS1LvrZ3RnwPGoKrhZEddJekgcPm4V7JYmg9eyR6SXuunmEWauinHdu9cnHbZEFpxgPdQH",
  "key5": "54C6P3LboQEi6R4HyDgwVi6RJmoySXhUpTrZFgs5LYQBhWXsLjTDsfQnAL677vKh7srjqGRME3bKNqYeLBKDU7GQ",
  "key6": "5Wif2kntffRP6EgJxUMNqF9fjfdix48tqHC284pGSob3potbc2bdwqvpKS3iyRfc3iZTFUSpzSNU7YVSZvRcHkM3",
  "key7": "4CHy71Yif4LQHs6A23TqnRoSFYgvc4gDiBvugowpoBqDCmQurA1pGvgUaAJQa6UN2p4YkSujGNNCvUfeR4UCY9vZ",
  "key8": "3FM2Q3TjNZvFD5cHnFN4q9yuddhxBMFw4VRJWrkbJqQKe1mYUKHvi7io6pK1k1MYQkYD3n6unxT5E1hjU8mPjJaN",
  "key9": "5YCAgJy8bKERoqdmJHmaAF4VDcn1HGETMwVpYbdPrT5GW1xtD8ASFSH5aYwyrEXqBzLuEcT8typWbvGEneZdMEqZ",
  "key10": "66QwDff5Cv6RQuUQGBMz1F2sP75FAWALFx5d7ERCkLyuSacKZxYT1xJYrmr9HN1PurZ546gQmG31SkXY8yZ6mbtw",
  "key11": "2wKxzXQnngevp5dMYmEH4xBj1gL8HjLnGQKhZ9b6Qz2pUCMWzyXPzdXMuVTTPKUF1Sv4EuTdTYHkxwp6s5YU1zk2",
  "key12": "63KV3D75AvsXfL32tyhhCKhLis3NH11Nh4q5B6KeJJhwbzitA68eJgbtfLcRtF52V41oPC8ghHgthLu4Jkqpnqoh",
  "key13": "2ArpBwJb4jUtJZ3B5R9qcXDkdYhD1WHEe1byUqXRyJF93uicozgkrkw6YNDqr65Q8hvfSr7cvqXECtsGXh8YAeCV",
  "key14": "2AMLLYpUEw1tAowci56RNJ21goEURYkg5VD46sGeEUj3jXj4Ar4yobYjRpBj82wZEE8MqSp9ehYWvEi3dZn8muaD",
  "key15": "XEopJR4rLP7f2MvGkv2xrXQb9qreh2CyhYHWtkVpkuVZG53EPKpL6vW9NLiNkXPo7arDb4T2Ua4mBqJeCu8KuD8",
  "key16": "3bVRcRqY2661R6Pj188MGAV93piAvpVHuV2vqAGPP2CL7i7tdbNwxvKUYpvkXx2D9Lt7VRw97hwmCiYn9AzHkT2E",
  "key17": "4qkyxD68ztjzYMT13QFp9A3hwSHZLFF3EFKzNm6LvevsPmq42RLXAuop3VDDzVj4kEz9iLzdCYR3SMJr3jycCQn4",
  "key18": "4eRzKbBcTzK7o2f5oJWYPi2MQEkjNZubZo3fUcLeqqeXJ21Hett7FoNJN44LZ3J1kbxg8J2jn7uTqEwsaUk3Esh5",
  "key19": "35ERbBEtdMCxejLwyqF9A9GfbB1mwJnqj21s3pN4KyLj8rxKeXQafAsgjuPj9V4nHRjtwBPcLbHns8U1iewSMC9Y",
  "key20": "2Pg9Tn1d2G7P2kHTCMCTZSeotdSRe23tprUooqjo4gGKZQt7XYFRSZw9Lusu2C2Ku4L5TgEbNHm97q9vF8GbgU2n",
  "key21": "4UQApLbsfUSprZTHknmCoe6AbTBfqZTWKWhonzic6ccwXAjucXUQcBrz8g9H3rs4jVRRFV5f1JHuLNaoZHkV99yL",
  "key22": "5ZN3cqC9siMPrBy9CFdwHywoiiHzn427oFsGU5t5FKPRSDG47QNkmKrLEGrbhqhANPytMiZ5BB1ypWTueCT1B12c",
  "key23": "31sfnoWrvkugxPPfDHyyHG4oPqMyLDmwJM2WwbXQ2Ni6zbqKm95tHqurrRS97CZpbEmRFYifDZS33hgsaKVF3iRJ",
  "key24": "46XRp4ixBLLNYB4DoAp6jQg3WoF4cfkN2HVdAJk6rHgPSStnUvYC6EqwgsmcFSiytpu8jRBjdewwx8knJ8yHigf2",
  "key25": "2jiHqC4mpzr3FWpFkLbsTDxkvx8QpxuVW5HEHX58DAQZdwFpCuXuBWKyBqrgH7FP6emHtsq69fUwKeMZXybUjHF9",
  "key26": "2ViGZ2UyTVaxNQeCBZzbb3bCsYQGkHqbKnGLaSKA5d4H64hQUkKWFVFKVgvq6wEz69H7ippXLXBZGicXrRoRHosm",
  "key27": "zDhQkapTE8vtHyezthQnvHmhWnEfBD1f2aoUoETPhdXfKUxLHJozWBE2ME1zZzaarStYDBk8rthoceHvTVHXkdp",
  "key28": "27q4K1AiSZBTBn2Rp7f9HufTuVr3fU7JpaVGbDGRMKfqJPwhtmRus8eMs8TsHZkA6Q2gRiQgXBdSjRBfvkHCby7e",
  "key29": "3sAMrB1evXZuPCjtoenBsFFsBgMrxTmx6pfe55SSMRSnrEMeQdcJgFggf4XpCMnZGDtbUFNCD5dANUFgsw3UbXrs",
  "key30": "2Rb1ex1AzY4oKMXDnkpZjVLHvgvCM6rELQzCyP5eKvkJfYA5LPBu4jTRmkq8Pa1BDhS7Uxd8YhBuwGPFnSGRoqnZ",
  "key31": "276wUKZKrPiRdaHoaZMCmFZQYjvZkqzPtEWETFzPSTWtkwGokvHFFzVEjPnP3YS8N4KrA6hvX7TqSEgxfxnfp9N7",
  "key32": "2NJcpsWEHXyDcvZDTztkX5ETfjFK2GpWxw937BTJNa8tcCUngfHjDEGx3z5Aae5zG1Ey7o6kWNZqtFDCM1ExwGer"
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
