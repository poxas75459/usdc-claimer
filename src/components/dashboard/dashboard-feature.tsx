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
    "4YHiieuC3WNuWUPbrumZzyrihiuZHpNxiQ8TWAnNPsDbVs3vHprT1bTCwMxwUTBwaouaSRDfAWaAeB7Jmgbiyvtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMeP75rbP616fUsqb2MTCxZERo6Hkpv6YcydKtV5HdS99vPmPXgqeMnd855ru5g66jw5qg2yFVRQcC9Lfwbrhj8",
  "key1": "29S5XGdYGvvSR7jFwAYvwcjci1EhxcrpQWaj3pPm9g1rkDaJBTW7Ft6FgNhZvPTAnH7vatC3H4L9yFvMxbJLuWaf",
  "key2": "4A24f2J5uTrJS8B8PFVc6z3zPgDWDMGUFgV8vM5fr8kmAr5jAMw3Pp9gd7S5A38dKtHtviLRj9HFZpThbmXSCLma",
  "key3": "4jEaPNMs4qME86E7eKw9TUatAfBNxik2yTkkFfvR1ed6eFbUUrQ3sumA14BST2PyzV6DjruP6YRX9Vwt34idTFfc",
  "key4": "T3oDD8yEKJQNNngo8aQVoMh8eYJ3ZW4Sf9Xa16UtFfB7gi8RBJYRd6wbJcxb4PaNqNpV71itbXTqYAc4nL3KrSW",
  "key5": "2iTYGzUuTB3Kyb2QbVNzzo1ahcea7rRaNL3iiYy2zUQYrv5emtzqGS2BMNbpzxNnMzKLnaPJMmVuwrUwcqYXgzvo",
  "key6": "uitqCYtRasCuCchwJVSUTrnrdDnXNS2d92gLHeYutofPdUWNHrWvsAUTaN7Yydmut6BaZpQMuBba4mRhosUWRFy",
  "key7": "3FxvpVthLaaozhMtttnRfrqnNoh1WaDRrGn8GfHfvqSrzVtEyua48hzAHyQ4iG2hF1bmhsNNddUYdLTufdKDdGRQ",
  "key8": "4uaTtdgv4jy42QgZkNJ4B98j6bprTDHkC74ycc8LcNsQjZM5ahrfhj4fwrrYcc4Syey1a5fYebSSkbgVaS5iruXo",
  "key9": "3PaMotSqv2stbhRoBCYqDbnqaWxhCiJrq4Ewk4BAxMJfwgTbfnuzigAHy3bB4uBAxeGNPkHtwuGnTetfuHcp2H5y",
  "key10": "piggHE8HxnGCvdr2Wf6ZyhpAyAYUemVyPFfBX3gfSdUmhgyabV5zwoUswqKZ24Yvdkd4M7mecPAWtDYBHRhxnnD",
  "key11": "5KXpiUAino5CJJcYvcApQsJXdgL1QgRdm3Jempvduzo9on5VZTJUAbEpdiu13rJPALmikJbrTm7ZfvueoLY8TjC9",
  "key12": "2rAUfBCnEb8zovhuBKrApBnBuCDQ1AncPcYRgryCWoPfuEzX5zGniB1FrXnwkPEKr1C8BZ51WnyqAK4HZt1vChys",
  "key13": "2eVFcfZkjqxAofg5RLf1FgRujksteCDoQGJSwYkxYgaL2qoFaMwq9PhXPXi1nA73AuYvGRyJoSWLm772DakqVDeo",
  "key14": "2eKGdcFoZfhQwo5jU4eWapvZ2Zu4fFoDHEXsCEuJnRPaoE2gLdqitbDEvqgEuijBJskJDpAAzj6cxogX2NmQAmrk",
  "key15": "JNPxdN497BydvNQWeQey61dZo6VEGh16HZfnLJdXRNMQxrdAHVsJ7fpqkydzhUBVYg5F8f9c24G1Hp3KMrtpcRg",
  "key16": "4eJ98fxUncZF72dHukAzkGRarni2G2YmGqydLQNFc4aLcwigoe1RkYbKyQxhm1TMqV6ii6KE65upN76Jg1QzqsBA",
  "key17": "2L9n4LrBMeVfp7Kyy7jaNvYDWxRkZzfCEZwiw6r5SWTRatuLC5fojeAdY1zbkxpJGPHVNUL3NFjrcBZk27dVBaJe",
  "key18": "Mm8kbVZ5hJuSFsksoxPkdY71Zo2RYypb5W1Vub4wKbWs2Fi9eBTu17X2qRfdGkVtKucWRkhohw3gPgkekLcua3r",
  "key19": "128v4hn3jQ8VKGA7vaFCuvnxK96VVLYXY4dXVGqxiMXCQ72NVccKatfqhYnRjcv6dEAVd2CjT2JnWuBVvwuD8cbh",
  "key20": "58rQnXFgLrf22CKVpgUf1CSdZE3NVGsoj4yLQEvicxYAhUtgrt1HeKUkfJkWEcY5bVwouAif4DXnCo18KuY76Xxb",
  "key21": "634ASVY6wmDTJ41vYXjg3zw9Bwsopmbnhr6ZAHrDne8uHjNtQSLAd9q2njVCbFttBjLMsD3NtFi1yJyzUE6R4NLe",
  "key22": "55MtwfxVqjM6R4FSFUdvTutSpGs9kPXCD1L4FR9WjgJRaNcA5dKGsamkLcj7oZYTUg6Doe3khFguwTTWHXoXnQSe",
  "key23": "2seTCnWT4Ex1RBiRJ7qKhRoZSCmghpVXvYkXmttfDfn6Co6SdDVp1Z9ib9pPLennTK8TmqicTCvdmUE8hG43v2VM",
  "key24": "5d8mjXMhR74EV37v7hg3pEVb7kQTEk5QgEBp4bhwXnXzgZHzk5QbEviiqbDxhAz8GzfeDyuRWWiKuB65Aqp5WuqQ",
  "key25": "23sj5LoxnGDs7iwSPiTimCNDrdnxPcbwBobc4KWLdETBKrxhaGA2Bb2czBArseTG9iJ8vzi46ch73T3sy8Etkzn2",
  "key26": "5LLDrtmTaNQ1tPTMqdV1gu6BzRkq8Xmr6QKrqKkV6JWCccMDyPiX1WyYYYAiaajXzMp5vP67oXqHiTRTUwK4HHAD",
  "key27": "wmgMMWUAWWwHqGjbf7Tp83XuVLL1TvzKJV4p8PpAX5uAYFxJueLoBocGzb1fzvxzvuMy2UTdRPfaTkUicnwMGPK",
  "key28": "5QnAwH5mQtof9WwZ5rbM1HbD51J4PmatN7gfoXi7ubDFS9zkqrRkFYbkjw8v5xbcmAdiA4CbSLEagkZR1WVzD4kQ",
  "key29": "2Ey5thTrPUM7gxgVkXpAovRDvxf9UGsitBVqJ6dwQeBD8qUhicFW4phe5yfK3XfQphjB2PpN2mwRRMparA6ezP1f",
  "key30": "4DvfCuCgf2UBaR39s61TWaFaZTsBQjG2H4597uoCSmjH12H4RJ3EiFgEEhHnF6ynCpaCmLeNjjrRC36ibRT6mKjC",
  "key31": "5GagUNG74gChh1FcEdegMN611aEbaEqLXchSosCTLXtoxZApgNWgkW6EhFMsTHLzojqYk3PHRQxfHdKzTvVrPZZ1",
  "key32": "4nU69XhCDh4wHMqTTqZEdXc8RpacEt4WyV4EBdq5GSH6DGNMpmG9jK7mdPPgVYsDDiMzwMQuFkw5HdhPKtcLDXVp",
  "key33": "3cbiTVneqw8kJtCmrnPxDsUwzpPYg8KuWb129pPbRFaxaQhiNaC33RYWknashefRifjTk2AvhaBThdZmKjdeyuxy",
  "key34": "4x7xT7yVoX2HvF9hjUDE31Mqw5WomCJe37YkNXjS1UH7UzgoSPsdBv8EjB1XxNGSWoqvP3jZp7ZhFsMjqiwiy999"
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
