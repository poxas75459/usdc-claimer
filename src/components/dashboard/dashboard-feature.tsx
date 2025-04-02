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
    "2Zn5S1JYS21AGExTFLaFNTXgF2Jckipy35rTfwJLUDxuLeyFfJhnrkCC35n2bGT5j6byFYGoB8zw7Q6Jid64euSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KByiHAxfEqexD9DH6FKkFwNq2AjgDBodGxX7UwuoPPUskKbCAg2P87i5UhBZCTgYYZqE5R576QobSs2j58iKAoi",
  "key1": "51YbKWL2Wq8Vzzzn1e2svJDWukwtvY8qRfYTg6xjR9TqwQx6uXoRDV2ER7ZQuGxyc5SDtdjTdQyTh8e9Vp3iQHQ",
  "key2": "4goGSs8dT4Mbg9xBA1BPdu8nipsi8HuX2p7cpgyFV1BNDkT5KYooDsYsLgtQVxL7orGZkxNRbH4izoCWCDBHMMdb",
  "key3": "2kxaAjMCBhrXLfeyuSf5twkXmjc17weccBcWQL3hd75suPVd9LWvLWS9MU2qNjfTyNNCciYGhpP9m8XE7qqbraMB",
  "key4": "4HnziunDHAQg76jVpin3RnShgaNrUxX25pQKvh5UucYKRUbgdCJktXc3F1g5Ukk2sHG1SLLNiBNjtWCWPFqz1Xma",
  "key5": "5NY744sriExLthBN85gEpnkJtJjBmPJPgPHpf8kGfqncscsLFfojxuuRjUQGiJBw3f8dpyUHd2EL221bTG3wWBh4",
  "key6": "3irW5X6Q1akKaN6jxwd8NKeUh1koQEsy1dRxXfdMt7e8fqsXP94myfwYxmeVXdzgE7SbY2GWhydmxAMFqwx2PDFZ",
  "key7": "5kVuBSvtYD7U4V22noghAiRb5PQr4YU81P2AmM6jsDNtPQATMUnCRymrFvswUcTsQycqgFpzQk5HPDY2bhEko3q3",
  "key8": "4dRkZq3t2GNDvfqCKcqnVu8C7sRtg3zLCG1CD85kHd8mhYEsforhvqcvafE9zuLoj4kisv5c92ebLvgg5ZLm9BCa",
  "key9": "4NiSngm6wN37F7bhUwRzdLYC19VTfKpb6QS96ndLuCkwagZk1g4qS4vYFEACu3Atqk8yEFjggeVomWrA9T5yiVE1",
  "key10": "5xmxchGD1fob2buiDRZYNR9qd2jK5dhCgri1UfL6hDCJ9ZwfXp49RpEGWGP8PZYmz2x4uKJJUrrNtVk7B2N2YffV",
  "key11": "4rzSFxzPHSBpiYRvAmtbe2JpkMgwfDYX8dkvm3JHyi9EwYrJAx5DqUqLJYPXRyuiVGnBKZg5emNAEXmdmjYissNX",
  "key12": "GJBP9PkRPmNetG1GPm5LT2tPWv89EkumJ38ccqiu7EGu6Z7YX6gGyCar9YTeaXACvonta7ZP6i4ADBbuUez78Am",
  "key13": "5FRK5UuoJoBFNnp8qAm6X6S17FU1x1K3EwdfQseTjJpcYzXAUCTPYRwg3ptFmVGW9cfeoZCcgyM174XA224hRTmg",
  "key14": "3jcLCVu6edpXczwy1M9sWwH8ko3sWh3Foh9ZWERXbQQYSXEn5GiJkAtJwF3d5f9PLoXaa3aSFgSvyNd63oH325rU",
  "key15": "jgpej6uBPo3yFJXTmL17gk5mtUJGioB59LvDVfUuQyg7y2dhxCoxav8M7EMhCbGPkxnUkLfLgmfaoHBSUubDaPH",
  "key16": "5LopJ9p8sJd2uCDAtDAJmEzgMZbSoWtugz6yTcXXptwQFxvi3Hjk1BRFJtJkeNBiF9kKm6rjDx3V1ZrQUzWeFAsg",
  "key17": "4TGXkso8AXhZRVActpDstp3wZocNiUMp2KYKupa85zVxEsGb285qCa8aqJmxw7FW4b4nUdZK1UJofBKS3PnkHMLa",
  "key18": "5x7YHpUuZRQSXi4SYGJjdAnxhgGtHUe7tKLWAEGxpags194ez7g21hsgceeyJuxZYLTGY9nLDYnUf61jPXqRBtLU",
  "key19": "5REUcqRWTdxzGyZYogcJNe2nXCvKAd2yiA1YdDP7dhRnK2EtpsDMJBe16a4d1hbUYSsQnX7YJtiFVxTZpQodomPz",
  "key20": "2oKTNehixNjwKWcUgjtFgHzQqmb9HgJXXPSd3xqJbNmRDYGR3E7CmGSxw77fkL6Vqzq1rW1FvX91wrtwui8tW2mG",
  "key21": "42MXVwgeWX3GzoerFooYdaLs8jvu4kbP1eXp7icHwM4vzzDLeJiexUqt7SLy2WtN7Rz9uekaKy6r3Ujg6y4tW9uL",
  "key22": "3Pp2Erx6yvJ7QYyKLPkVrQAWAKKJ4oHmAbN9D9H8tEtZY7vep8aZ3vYiBXZKoWCJK75tu7j76zG5tvxpzeSdgFcK",
  "key23": "3zMpyMcC51ntJGWmSycj7nVkhJi2voz3Qmg98M5azNSzU8uPNRhBHv4p4KxSKiTrtNREwPDwdhzvr2MzsFtFagMr",
  "key24": "VUoD8q9UER4Hi6x9fE39zEwcdpAQgr6tivqLStcNtZ4asJD5JrD5QY7SouQUNBvQd4Dt5bdNakYLbBmGaJdDteS",
  "key25": "5hA8YiWzcwfddkWehhknhZ68GBCbpm22StPd2GY1oPrsmS3v6fYwy8k6dJY3pNWq8GguZ93X8rKnPiaHzSSAdvfq",
  "key26": "4rfe5Z1JVBq7QRkuWaBP9RMe5duSHw8AmMGAhfi9KDkrmRV2CvHBwhfuDymwdxm6DTx8pvn7zAVbWAzmP2hWWtph",
  "key27": "2fuFQugSoyJvM8kdVRGLbAnPrgJpdAa9dRiSTsYjN1ZKjjNsyDAiNXJV5N1gJBjHxQDXh3aZfiApxyXHGVZPmSxn",
  "key28": "3r61T2qLnjGoUuNa9cRfZFW1Qv57eNDj6TQTcuroftXRnAbBJS6D2FuhhTgpxNKbZgYGsBcZYCVuWAiKgfUVkRGp",
  "key29": "fmcWcuuytuNQ5XRY3cBtvtoUhZf4AqV4qRCGb3PCjstu1LVUmDawPMrB6ncCYB6zsxLfwhTHLFZBnpa5QTuUEPf",
  "key30": "3QyNQXtz3buUT5SYmVdGZhnV7WbN5EeeS2ckBSV7Nygd4KcosFLr1xpAqji3prTixG51nkySAWSpGVXo8xACwGD6",
  "key31": "4e6TvWUJKftidagvJTY3cj5f144hSCWeWYeGnpafiPt4qA3e5JAeSy69bmekJvS6hjdoD1zs22Ekyw4WfMEBvT7J",
  "key32": "BECZKYYv82kNnR7JTjQweC4W4z8QDR6wozPFbqm4f1BypXqZfvGzVHeqHrvJvdbiqFew2gtyXdBc9z1rmhb3Lfr",
  "key33": "5gBwkbxxQvTj8ZErgNhfpxayZ4ASRdT3Tg627LaaJtBHmrGoY9StyRxNHsy44NTjuX7sgmGjQGygC9oXZKZ6Hrzk",
  "key34": "4Qb4tQ5SNoPhJHKxqHA1HgCNH8C9LMQsB1yUUR4w3bsSJR6gQJN9RDszFRiLnXeDUyqaCuqaUvexDZwTbBVVQoGQ",
  "key35": "2yAx6n2YR1zR6etPdU55RVc7rdarxzDt9ZyVgZviNNFwj9u2TkpuW91fc1wQsSgb6d4jam9YMkgzHqTBwbfoGNdj"
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
