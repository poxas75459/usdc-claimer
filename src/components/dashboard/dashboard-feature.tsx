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
    "53Sh2KBc4ug1HQnMziAySTf9u5AsMBTsG1LzcTpvUS1SGFZ9wf5MzW7xscz6ayxP9avdnSkdikhyTkUaRB9fd6Re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNgpxm2bdK72JsichLeqogUVHTiLDeBomNtfzYxZ4YUXsdxTK4wPuZ3Xge73utwgRwVskfFcQJZLbYLaApFddsa",
  "key1": "5n4oCnPaMNM3QaQKgbeh5UkhuW8SguwM1JKfQexwzkmKGX1SQG2nfKMxRdPnnYdGtezBkUk2gGPFLKaQTgCPCrsN",
  "key2": "53c7CesnZBoWNswGKXyxdAjioBgsG7PX79grASaAy4c5GDBPBY19N1AwPRTmXESg4uCHbaGMKdwAGR5in11sziE8",
  "key3": "47RfjGP1XiAmk15PwF2nDjtd7w36GC1HfzuCiWipjRdgs8AnqSjHftS6gXf7dRU7FjcYAp2gug8WtrKU6e4B8Ut9",
  "key4": "3L1MHUfKLVD4vEL1JXtDX9WLjaPAm8kTdVk4rUqirpKyLrmaX7LM4t4bS945NHGFSxZ5CEoHiyFmsubnzMYzvqgj",
  "key5": "5HECvz1g5hWQnCCdq37zwPmmoqhLZN4jK9Xrs9QC7ciPjkL2g5EFnbB4fVXBJnfy5uihxLQz6uEaH8tVKFCZWaRG",
  "key6": "2TpkT68XRXhaD5VzN3M2ni9uZx5P2TBggZxp2fsPHM3BTn6vxPDYgMdkAqMzE2xFqMjHXBS9QaevZfMJpyrTdpHb",
  "key7": "2rZPVMTTtYeLB8ZXa8FLAaFeN8YdWoxwr4U7QsktuLQ3QPAuXtBCdRurLSUEpkcfrcdRPYqSrARmTwDWxi9zjaCA",
  "key8": "52DTpa2ZBS3HnpZA7W9xmnFfcsbbsU37yZEwz5psubfBgHrhvktaUmJD37z9F1ngfoMi2BUsNsdVZBhqcL95vuZY",
  "key9": "4YA2qwBQ1vot4UoBEbfr8oKFAYaCqtpfXF6YtK3kGKnqWfgUAgdriC99axpcxfJYgXCyXmDzams6W24hjE1qc6Mj",
  "key10": "3B1vx3rAbZurZTzXXS9SKZLEDv4ee67T7eDDS4gN3JBG8nyg4D163w4j5oMsd336mr4BBhiJPRTB2MWSJWY7i41G",
  "key11": "4BpurVa14nCbTtDhFWLUNLqmMq6LRhAK8HtPfF5K5knaqrmX1etzZC4ZZqQZgJZYhrxZ1nCPrKQxaSbeLHxGH1H6",
  "key12": "ZbhPqDtcesEKSYFQomE5UMX5Ri1JNEWnsfvKhgRkFcSjr8MzdpYe1CBX3bBKoKAgeMfsSCJ8tzyjD8aKDwDbvk3",
  "key13": "PHD4jfUDWVkKx2XZYtYd3hyBsedktErf49invDHM3QW8XLcZejAzEtfuqn1N4vFbgpx6rLRd6RDk7Ks42C1qryZ",
  "key14": "2MyBXvShP3T621otfeYJAmvNdPRt5KiSoyuKZcENo6vUQPNM5ab5ebZ3AF4KdqkBmxSvnxqoosPNZpcRacSmiic2",
  "key15": "4csq9Uh9EgJtJmajhPZsdTwtUc7aKqLShAQAGEexqQ3F7etdSWRnQ9kohUS6kZ4TNZz5jGkNNeu7cuNb6LQGeCJa",
  "key16": "1ohcKSoz7tjksCdfQdfcjmj6WYAfkVVSPahxQLRNe5iikmQHyExNDvzL8p8wbzCgPkDMFDGEbi6RbRVeGC2Ya6u",
  "key17": "5DmHW9qG6BuyQpkTAZZMeaZyusZZy4MuVfKLq69foUCRza5315yS8wWpRQafDAmXx6zV3aLW8VGBRRW1e9SpmAjG",
  "key18": "66CA8L6vcXH9pF7HxquGWF5b5S3nnTApDYUqoYptnk1Mufnbc5TvkYDVWxAp3uPBQ9rwKGHjpgNnD4U5pYYvWGJ5",
  "key19": "3ZemtRBaL6CZrbuczc1DxHg8khnWBLvrFbwmwdBvE4Atsh4d5RtWBkCUcAXfGd3qJmsKTm5GkQeA1Lub4igjhLE5",
  "key20": "5X1m27FhWipoDdRvCtDUcogdrvP89cVRnyQDQzzn7FZdsNhxPhy4vS4C4XXwSvuN3jmpmhMDyHqqjfvkVFrqoE2J",
  "key21": "2tmrriWjtt1rr1i25GHDa231gYwFhCM7oqQV9wZDhVX8k7v1LhFhJLHN6ajJCerSfeqMHqv3Ks7bpxM5UR1LnvXS",
  "key22": "4QaLdGJJ91FtztgcHASd7TjLX7Td4F3bnQdu1g5dYqEHxqCAUHvrVAUzjo3WWZc2osBbZxHrypKT9wUy8fZ4GQDe",
  "key23": "3MrCWQvVQMkzzVyYwkEQ8cvh6foHsPUtjEv1XKeWAXdvh2Mit8hSoCb7G56hCqYQUSXQLvpEAhW7u78haaVZbqDS",
  "key24": "3xi33uVkVbCqV8q8PTdEVG7a9S4pW6XNjbzepgZzu9o7r7xqavjSUGkaDB58j9xFqpFi4yeGWMqVNcxggHH6Ck2n",
  "key25": "3atTpUQWpuavYrY8y7XpgTeceEmVmn7RkrZ2bigqi7hR2Vvt1JRaKhYV1YAyT61KxrZtf9eaY4TwFKbxFGDuRzpb",
  "key26": "JSzxNGv3z6vhFUzKYyWGxQj99hYp1rFrAKQjWwPFsCsXj2BiLqhL5ofrpReE6GT5vE4DqW1GzphPbFdCg1QNMnY",
  "key27": "4nr6ZyjhS7tfAx2jcCF5ui1sXSCm689NbXcXBbQq6BMm61aYP85n9D3uxPaMdaLJt61VvBw7AuEyz6fuphwhak92",
  "key28": "2rxsU4oedz3A9GQZSuGEwoB62Fau8XqXeSD6gLd8VPjx5dVn2Yij84z7iMPt5hisQnGZbFNnNZkBbTco9uw3M59H",
  "key29": "3vLvazmAzKjBmfbps5kSdt1gxnMHPY4s2Qrv54wnyiAPvbs565MjhbwwVfVm9bC2hzLsxNPAxZzrRzmwCoF75QLi",
  "key30": "3Z8xsPPPNVFXbCA6m315A7kUToPmKK7X143o157iyB4dWbPBzNDBns5Hyr6Xm9YcqLCM4BFbLcivb4MXyu5jrxPM",
  "key31": "3nbwQr6i5k6gY5kRQuMKWcD7vQNNdziTnc8eXzVWVU3WdhWVrVZe83Y68uK79BSG7sECXukpunpG9SmADpVV84QB",
  "key32": "2Q3R562yo3PNNNS4qSxasSsG9saVR9NJCiXTuRhuwG5XFhMFnQE5Fpx1P6fYq3Bvwaw9vR6XTBwyak9xpXvvYsQN",
  "key33": "2VXACj1A8FpwLWMKBvAZMGVMsLjkjTn71P2bNPaizCMK6AZEpmkVsRgWXtJyLEe6gV5zGYEraa7fZ1k4CWcgHEwD",
  "key34": "2VgfRv3ZbuYnMG6Pfszh6wPVBAzsf2im9bptxHxPtCNpEmLPGZmnhpcdRGuXv7oXCPt2Je6wsHTx72cRTSt5qAaY",
  "key35": "2QPyH5FuNyXfaWs6cHPX2S3c6c1ibDT1VKpzxriJdPyFRahovzBngs5c4m2LzeEnhperazpfPgvg7xi3Bm7bcFNd",
  "key36": "Ht7woisoPpeuShTCYNhESBu7HjTxivH4bXcErdRQuQCvtgntvcdiMqMfwJN7nXe7hUTSC1haKW246GfhsHVfCJN",
  "key37": "55xRfbVZ1rN9r4iUVNsFmnzRYDQqq5HA1tKLYETiX31io4rR7Ub93A6CpcLdupHmSDoVJukreSGnZmbD5k3qQR9q",
  "key38": "2RcehQCLzgUFT8EyyyZSPCppWasop6nMJh2CnpKudMLGAityvUReSTV7VNqCCCrwBRh2zVNB3iQ7SVAnLbi8LDpD",
  "key39": "4BxJvpoJN2DXBjsHDeoEicjburv9pHzePSQ8rxVJk4o2E6MqPmA9pEYtXaYoFj1wHNk8LixyYhJssxiVqkdhhHDY",
  "key40": "5fkXyGXBRa3kYi7ysfaM1yKBRLwKWMikjar5t3J4n8ywaaaCHJRcaxE6xv8ULzZrvKmXKWNuJmqLqac7badh8xaW",
  "key41": "kJ699AGmrLLzL2inThNXtb1CsySs6avcsBQPVQvYNGGVReKsZLBCQ1eW44axajf9ndSxJQ6nbMoJgoHozcuq5T7",
  "key42": "4Ux6PBnqPnEehQ3xDxpHJZACzsLN5qnsxrFAGdDfCpm5kte4NFgSW1eXtNMtc1MYp8TJTT9xLQ8JrEi9B628b33V",
  "key43": "4LucKQxHDzHbE3XnHJb8aKgv68sBaYTX1EnidTEX98TAZc7CLFwH9YkNqnoiS82LG6Je8HSvudq33Cm3Nj9JkNAn",
  "key44": "3tJQ6nuaLKkUWj2MedCofCf5QA8dymwtLhxHq8pF8R6oP9uBi236rHTGLbzLVsyMbmtEWP1TNuva3FJWECs6B7Rw",
  "key45": "43VytFazxMm3cX939UBeoAFcLDZ8rLeFdwvAV2S7KP9ZLGiBEGr5NKiU7YF8Cin5AuS9td2ij6KgKvxDk2mFvhdp",
  "key46": "2oxizDNyEP9S7MLt1zvWTnKNLSaxMcLEaPqdYzciTkNP9cR2qZyaY9g3rwfuNcCwEyP1zBn7sAk5GezPQ12rngpN"
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
