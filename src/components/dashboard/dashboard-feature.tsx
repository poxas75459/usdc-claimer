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
    "ETmedHBBKYndUMvfFCpuFKitcYQPcRXMehVoM2rukBaQ61jGd6XUyp1Uxxg8E2Ldwxx72rch8JUv3hg3JgojwpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtK3Eu2acencAeCcrCvjpcN7cyVu2at1RwYgkSLHMQc5BjyCnmxMUyDLFTx3DnKHRwDpSzf5LjL5LL7dgRKvjP4",
  "key1": "64EgUxneRs5rSPZnGVNHT7ERFVcZXPsmoZuGYCQ3UgY5DofUBhsEVUYzqzNdbMtzG1kgaCmuSptVjCTQrMoyUMv9",
  "key2": "22Ut9EZfUDW3CSksmdUYQFDrCZLDZoTweiGbZKdvoWXhpfZfdT91Xcoqm2uHtwRFZP624BS8K5hERbQDf91VBLLr",
  "key3": "2FEagdgZeauPxtRYeS5yCNfMjMtrnk1XePiUyonsxHD88EiXQKMdw5x48uDgCNXCmZUaNzBSPoC5Tx5BksPpHbRf",
  "key4": "4nKVYPTx97tXAxiidjWyHYTuHzToShK3f88Xpm27gqxPLhi6y6mj6wci3BVNV9s918Tz3pqB8YF2pyMBmiAes2gT",
  "key5": "3PCFwQXzdzZUc2ADujSr2ArSe4TmzzqKXbUqho8vHV9qCvKSzFw1htPeVwzhY887VnFuaUnUhTaCis26zVFUmDHE",
  "key6": "4yWgoifUUCbxjRTvwGDn4KgeYiw9DsEiCGDjHx7MBusegTxkeLhumwGa3EorSZ5uVPBZCTLvQA7SENvjg9FdXLF9",
  "key7": "245gyNZmCDzAtRbF99yXu3xUKf9BnjqxK9XfhmJjgMPmjXffPP3tbvo5SJqY7vpRfUfRXcF9Twsyxh39F7sa735h",
  "key8": "47HrQV6PXf5z1T8bHppTJB6jj8mWQQXVZPtKMNLgx6Dh4mmWe8bAicgEdNPwfKPfA6VVTqqn1eqYnKxjCCsZMN6F",
  "key9": "ZvJtcZ7aWrB7kAzkeCZM2XxNHchkp7bc9JrQpqAhh7LcyjmeE4PWdS9biVDj8SemAfvHTMjGbv6CXLGdDDgtgow",
  "key10": "5MHNA8FZiv8H9Xf8UFok4MW38Ab6xjCNW312SrWVHadFB8yU2QXhDxKzsTzgvPXHH5kXDi1SpRP4TUek293LiKiy",
  "key11": "3c5wntgFFedQkTcUBJDNXEZm5c9rmkshthskpKi4joUB1TFeZrQ5NFFnQK2JeavgHdPE45gbAjJHLpigaMHBvhv",
  "key12": "26YtAS7VC1R6m5AUxU2AiqYWjLgB2JCJXERPDbUXX8pmNJgzxZhNWyCfdrBAq5ohnJY6wEYncGmrfiamnvht4RxN",
  "key13": "6SLeeHJoFD6dk8sGMPpjuDRJ5xBMX2KwhRizCYrgEnpJZPXUoXpwRX6CjSzX3TaMFwP18CfnChEtWaYqDf29eDt",
  "key14": "3UTQ5iZbktPzfDrE8TVYcULBFr8dojpVwWq1KzChokbNvA3WunAW1PfhT8c21tCxXbrLo4R89M1GKGwbLipmmGTU",
  "key15": "579uNE55AEwQxtQNoXhnVj2tEMytdEx1cDjf6ggaLR8V4TsEukAncLsom9qDTRfQ1yZQE3Bp7r5zEH1iPpP53eJM",
  "key16": "WfymTwYdvYf5Y7Esi3ytdecsxbXQeuPX6j43PnuMupxxnfhyLvGaXi3CoMDUbExCjn6HZfkTeS4NtXej8UDjBDL",
  "key17": "4MkdbVRrS9X3dVvw18mLTaag213cSXQVFi7cWku9Fkpzp5tLW6dWncK4MSrtpW4nrGyT9cLXidViVwwDeDZ2nQiA",
  "key18": "3ZwyDoaqkNkUTN1RfqR8BPACGgvWPontoVoZGdLbnDfD8oEefnmCiuRWDg2xBe9v656cDDzejayQvfm4DQxjFVNU",
  "key19": "2pXCfZ6dwQ6RwRprjtSK1fN1MfxQ7oXbfFZugEYVPBgkvpz2rVdieZpcoC61UKe3zcLfEYiHQnBxTRFUocbjjaFi",
  "key20": "i3a3HnoWLYzcCbSdZtniKX976pkk6X3n5W7LSEV9tr4FkJ3QmdYZz2BiY52F58tZrqQ1M45nnoZu7r1pDMADhkt",
  "key21": "2uN218HAb5pA292S3bkdmc1jH1qsbh4nhVr7obMUuk57EL2CrkTVNw6e7j6bau2RtVMbcjksE9PW7wuifhroivjP",
  "key22": "44KLRC427NFyXTBTCgkjjp4gFAGMERc3ipUMdbW7J3qbQua5vWsHBBxJuVvDQo9P4CK8NromJh2e3uybUHLg2rXR",
  "key23": "cnd19V4UD69doHsZQuzfbRa6WqbTS7kygzeDqjtTNbQ6HfNu86dwauSSuP7omzn4n5Yv5s13EAacJKD6WoDVBhr",
  "key24": "u3rxLdFymR54thn76HqeByFKvJpVbtDyzunRpmhLcySDYtcyGwpUTnCi9B6uqANrq6zeGx9cViVTbUDX4zy2Nrh",
  "key25": "4fv6sfhJiUfkkQkvjyFWbmxUnGjsGwFrM9TXLPBzwBUzTxXEdtitKzD6AregWF4mGasz9XiZacBv9ygJJzyfQYHt",
  "key26": "vVEvdhx8F3m7YZvgjhCPHNLtS9rA6dVoWfc3nJnfurBzTjSGpWuwXnGmUQqMR6jZFtZTF8vpYvtSHebBe8TuEqM",
  "key27": "3daokpDVHcT5UQSmGh1bCbzDfHt8TBT7dPHTA6EcZ24SRCLJfL6katqb825kFBaKvAMq59o9jVgdtA5fHUbdeRzT",
  "key28": "2zwQrVywWkxjZinsx5zoQjCWiNWy2uUQXo4bkuLj788fux2ZTHEsCoognB6H4uaKxXoRhgKs1xXJZjxFRP7dbjLM",
  "key29": "4MBDtg6fz9A6YJRubaJCrwuAMctHfaRgvB9MPTNFv28YSVjqww7j2qmJhbzCfb2MEaSn4c4wNL7xDVPSMBEiniSj",
  "key30": "i7DvBArUDSkxfhphVG6rfaffdwiDwb3UPMdXdZVvRdU6AXXiub5MURSwts3NgzNWUmmQhaRag8bqpxo8LijwzrP",
  "key31": "5JbRz5YckFVbQgY4HoeDK77frgq2jEuFfHi53BWaVciabqq4DyfKxEAAwFYmWTpwnAZxnq3tPHtJoczD19zbhapa",
  "key32": "3unXRTbSwSAzWBKTJ7uaREtXEUE19wbb5S89teaQYZv6y3zUcy4a3DNYB3R8Y9g6nE9394D94JjwmTVwQLriKokG",
  "key33": "2UXM9LsMqXQevQwVGGY4GjjkSPdLMhEyCvgrchjtFt9nrqqUvk8jcwH2eHFC2YT8E7SBG7GgXhG5PcS9peM2zbhA",
  "key34": "LeoDt1utw7SjqyvCQ3DjsJCmbCT7EXfJRntCfkVfWjvZPxoWrzehhKyz1tnbdJA5jMWbPY5P9MLjUXgUkPR4rJy",
  "key35": "2T2y8BbjrxBqvzu2Cecfc5VpHrpDz5y6cWMX92NQFEdudjufLaeaqoFTXyN74M1fKGYkht845Bzt4UvZZ8WRXPqd",
  "key36": "4Zc9P2ek72bzRCpDKr6kVt9p1x6DgTe96BUF2pisNBSW4CdD1kbY31nBWG435G9Yd1ATzqt2UzWq8dqzjkEMdFvN",
  "key37": "3PQ4ncMXGEWZerj2yNKn4aHBd88cRRmokSNfX7x5LMtLwW9GdZpzmQX8iHxmkW2gbmXHV8JN8uKhh74S9421FpMi",
  "key38": "2Y5T4ReMRPViQTNBKbLdpppmx5mZ5vcViJFWSbY6vEEBF4fP1SoVCEhYdCH8sZiwgJi3C52irWyaEYaASvRdXFwG",
  "key39": "34JNe52MiJHGHftKXpNiVZUA5Y6Hf5sU8LUxC6DuBQKMAEML7BwPNQfgFgM3FhgUzFmqFj2LqYE5Ch5iGa5ruXg2",
  "key40": "h19kEtY4xcnvZVEA7sh761NcQPg4RS3vnwSjPYu6YHZwAD35d8a1s5Va1RrtREBax2c3AjD7SScXHkx731F73nF",
  "key41": "4skaraHCA6BQAKCqzrMLmepZdKBeRGqB6ZUHFMdLGPG5vQmQSfZVVGUYEnYdNfHu5P8fbJ2jNwb3S7orztWtRPiJ",
  "key42": "4gGygdRzCEgm3hpupw6fkKhQQSq9w9hjc31vxkkaTQ61vQc5uK6hdkAnsV8qfvxN4BF7uwW3hAkiFZxU3pW9XRJ1",
  "key43": "3P6aqrSMuZVxyRLXHeGBGuYDxfmbYGhD2JpdkNy6iaJkYxzyF19Wb7J4sRPZEPuEMPAGhHV8CbvJgo3bqXUmjQE8",
  "key44": "3rtBXkk4fDRP4zaAR5WxpM3mKvn4Sks1zXJ8EfYAmDuPV9UZjNgrfQb3jLWKKigtReCCUqgpz8rkAX89vZiQ3AuU"
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
