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
    "4YNBwx8aVq7mGfrPVwXNsmGWmhgt9UnYd4BdreHFDz3JSysY1zDMrPnWi8UQj9T7k2UPAQMMYpvLzfnVwSmtE35Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bW9XScKTVC7zqpEfPPDiRfKEyBYhYbZYbHfdWMEpGvXTfxfPuWoPp3DgoQgdYNCikqG8qG4D5Wh8gmG3mGT5RWN",
  "key1": "4nLveaGBRzAuLYG1WPVDYEm4MgcXms2usmTaCpUZtSh66HNbDwRqBTmiWcaBrwgc8HqqiqU3xiRYA85rLTNobNFe",
  "key2": "DgE7Dn8HuqpYy3DdyHNnzeQ3bT2ruFBFKbjjsT3i5DN5H9yGtSdUCAYRW5BVcXHqBeLYoDPNroce8mAuraNe7ZA",
  "key3": "5TEed1QF2X3L29Lqv4tS2U3dM8G8UVAqCPnMNuJY8TM627bdd6G3r1BzCYHi52LZf5XLr5jZUhyeP166GTe4Tn9",
  "key4": "37ettwUDgbvwd4FQhGHsBU8SbF2Zj4WFNS4HTUVJVQXAeCxGWaS38h8B9QeqsGTRciPYoYYV5wPL57NanBgsUAq1",
  "key5": "3SFLJbtdtQGr4RYdUb2ddvAHu1frtFgxbXASXspbJ3MouXobiQguSQDKrJeNWU4iBuJ6r93dV6Gzjko1TfneNnUq",
  "key6": "3V5yBwQBiXPANen1utC3WdG85jo7jXNsqzPvTjvXowzTNPoFyug4icMXGD5Uy4kwJB3WPPDQdEbqzbEReJPQG3m1",
  "key7": "34so1WCfSCTXNTvaPqXMxwsK7kx16uxC1Fs6WNKY3JVFBBcWKmh6PnxsdMdJEyA2vEMGkVR7B561A2KMp92NiB3d",
  "key8": "5LgQd84SKHJjADBXT3u3TYRE7Scz9fCohkZKjDacyjinmfUSw4vfnGmmD1XacejvJvhKmwamnvN9KTdstNab615g",
  "key9": "67HnqiAMVgTCP3uepgKbYnc6Xnm2Mr8gn3zr8mCUf2yG8xKFKC65N1vzzYhXwm5NgeDKjbUvJjevMCm3JRu3Nu5d",
  "key10": "2vPJSrUZPuBj338nZbt5u4AagLf2q2f1pJ83LPoPQZAiZVgXSB3ruSenJuJorAAvQj3h1jwCpBZnc7qTCSpBxmoZ",
  "key11": "64GMxJatc1DrLTGYCdwNYvuT9byrWNgGYA7GssDvFFj2KmjPrjRMdNrHdM7kfTqReNfFnvMe4rpchZ1KhQtUQ67C",
  "key12": "3E9kSx6SmMqg8dMnjzN5FhGLWQg4KXm9hE27XLcKMRqR4Z1XnSu1WWymviiq3VWsi2miWWyZYHouBdbLsaeJVgrj",
  "key13": "47rJ69GeHDZCqyK66k4H9uGqKY84AtX3FSTTAuSXoqgxzgaW9xkRN9nAxcK142USpNdHTDvnLcGcquQ7RvgstRgC",
  "key14": "4gpDAFQoHS87mNbXTmCEHrjRaBLbJ27v6jXieHdDTH6GV7tdGXXeN9sLJ5GSf5mpYXA34khHJgfoTX37vDxpfVh8",
  "key15": "5NZziG79stoQGZeA7VVCHG8JBTshKq2sNKbpwske8Yd5JrJSjnuJurW8fbYpptTZn7HHrDfxvfddPRv8AfdsAVKm",
  "key16": "2h3qE1DAHXrQaE6sUKsG3F5h4azD2iW46EwV9V64M61LRKefQwbRGXqPt1sYyBeEVooiRaujp42ULq7TEg8zqpUU",
  "key17": "2VqNDwAgtwq6zy1aAbvuh5EsgMbsMDEaD7D4JvA2pavSVGxK2rnJAJm5n8P4SFbAtwUUs9Sn2cYG63iFKMAwNgWb",
  "key18": "vkxLy39TifXHMy7nh5Et46DiNcVwEpPR5yPFMibW7x5TZzEs6rgjoS4gS6q7nMdKE9hxB6HDCwuVZHwHL2jHt3j",
  "key19": "gZtMkqR8SiTWLnZDaSjEo5Ys3McKCofuwGUyA39G9PLix2Qg7zK1NibVwvVo9fDbPGs3QtMYcAkN4F1q7pFwHCa",
  "key20": "57Cz4kgyrC7dM5knNXa6488TnXH3BAhVucPoPojnbvfPqZojnE7FmQjeCsjBuJ9HgyCib7WYjDq4XqAajcxUkQxd",
  "key21": "46NB4yFW88HewV4HHVRwbjGXSeU5jpFqMRGboafSuoUjNzxqUk2hCUJ4z9RzKLNoZQ9SFEd15us7Gdom9x2TGw41",
  "key22": "3caUUYsfEANzgaqdYb7AnRK1EZMrBnDbxtrj7AZvV8mcfru8YbzLEwGw5LEjxUArpHQfmN7tF7AbFwthdDf6pmuR",
  "key23": "2xbbrQgu28M59N2k3CZSkZBwwfbhY8hv6FRbzXcA71VcgVakftMeox6WAeRQcj33xhyKkCjKPEwbaa1FMXmKFabP",
  "key24": "PSXfvYFJGxc8CEVMMLLbjaELXSZsUKvgb92yoxsqSnsV9uGu1AHPap9uPpsgi1Asw59s8uoSHVDRKcdkCu6qmmc",
  "key25": "36y1CCXe5TmUT839p4GQd5EoXarZqBpYmtiD1bm4eKUM4GRPtf4AWDPjMnVtiwTYNGexaYsuwNN18UrtakM4YoLQ",
  "key26": "qEXgDW1ND5qR6oabyiLjBgbZdU4Qh2mk7c4ehS2eqkuXCAaNYaavk1MR3WVvM8jBEsdbr24YyDKRZtX7KXHXKxR",
  "key27": "2isRABBwEVjDesfKn7n4kT2jpSNxjH7xKEsYwuJviiAnfNqckV6xUwNTSa4ztH6SS6YmT3VuS5uJFW1MEhKytBdH",
  "key28": "5ExBx6NnzBPqDL4mdRJa5YoEBvJ6EY9eJmWAHhGCNoqN3MnqNKdg8QQj4skNKwRzKTy5SJ2gcd1k5RAZgcJimYpi",
  "key29": "5eGWJTNjit2AHY5yYKkSuENLsHAB1eEs5tXdsamuhFsAWxm4F4kiWyP7ce9QiFUM9AuNLZsik3nX9jn8cfGuFQzj",
  "key30": "2ftCu7PFnZVXsTYBnZgpVkaHxnJzwTGZFaXkhJcLMgAgABWEEJ7hB3Hob8z696ZyaCYt6t54V1xqsS3qsrds2Efy",
  "key31": "44p5f4Uc7w7hHJ3FC3MwQznQDTzbhwdTJCL8TW32bV5kcAzSm8ZgaJmG838JMSpXgWnTfF7AiMDbbj1YSDJ6NWQL",
  "key32": "3uG66iPHoSzib8g8wBcqn6Y4ewgYs14UhzBw7RdZAhLwVsSLWs22WZmD8MPAtJZoTf4eYpGqUGugQk2BS5a2WPZJ",
  "key33": "4T7Rk8kNbqWoxnvgdKtYPrpQDWj4DR1aGzLS146aa3FH4cgDMZzaF3xgAmQ5N95M5wsd6PgxLsPbeBjftP2macDF",
  "key34": "3C7Biec1JfFgTRJL76VRDAFCQPxNHJzVybJqY59PcndixE66oxqazgnbYXwUMa5yMHqEBcQdtGjJKEKrsGAnMfYM",
  "key35": "2CJjWqezijaj5QyHxF1cH3MDpJ5V7KARsjQT2cgGJYZzZZbA576Ax186u8S1YULn65eUGUUi3oLTX9Z3T8t73tau",
  "key36": "5D9FFSogbk6YnXUNKq5dRne6M86wU7RBVcQEM9K9QTrEC1akUrN8s3W2v5rWqh2jLtrRrMok6AboY9wj1GrXPBFi",
  "key37": "51LXgXRobysXf5tu4zZ5mFha2WvxUdTYoranMeJJ2GyHfW7U9q6okF8a6EN1A7Qw4RiUdC5YKfaCZ1kka6SjZmFx",
  "key38": "4T1TLdhUTAfdNL556eb6FAYbMcQAx7LgaWR7CaPYWBXBJhA36aMbZQGRnjYhLfFafupaQ2GPsfbcKcqmNMW5iN84",
  "key39": "3Chw2ACgGFw727YnAfDAzxmufJniLX7HoH7RmowdHgiRTPzT3ET5V5ZLcaGFtTgR223zzLJ4UpJTqt9vqXoxmm3t",
  "key40": "23dhVfKVYUnhV5tW823AprhsfjAWYt6Vk21dTdSLvovV7Anh7EcEFWv8fBH5D3w9SQu2UJHdp9QmUTxsFeZq9Mcn",
  "key41": "3MPon2Gp1UJJj8twc5TcHVHEqZHQEf1gmbb2ebPjbvwpo2WPFGhrfq3PY4F4Xs6vVLWR8uNBwBqJsX46kFangx98"
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
