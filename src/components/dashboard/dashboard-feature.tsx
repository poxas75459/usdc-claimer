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
    "3jd1EYCNc44i7PsKzN3zLQ8zLN46nMY7B7GA982gTemw9CBQEtV8CRAoMBkoKt7a87RWP8qy8mteGJr6dJsEUWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGVVudsntP2NXqDpndpoqtKc6pgYLmHS1TCYqVgeWjnRdsUPnxvNRc9CeruXry2CK3iqEuxvkojtZyBK17BAH4d",
  "key1": "2zB3n5K1waW5dzJbEGoNJWE7xiKjL2rvX3ELgBAYMmTB3JbwqDrJQACnaCiPrz9jnnYRHPT1CtZLKHiyfaeWdUgj",
  "key2": "4Dq4jGMFnhT9mETebJsXPhwrLCS4QY1gq7TskBeLovzE4A5sUfGAVziHnb6sC9beLkMXXaa2vpDYv4FKJwKmHenc",
  "key3": "9QKXH3bjcmWpHbjqVezNUEe4iS4vgJbx5WeFd7bzQLmXbTeiCpskcFose3TtewXF6dD2e55PgUEAnBnSubWVFFr",
  "key4": "4vCipcEvMPBTKJ1ZaCPWzm3i71KPXwGDgvPV3sbxWU8K7sXnJcPSadJdfiNy8Ufj32jL7BhL6EA8LWLmt9niQ6qU",
  "key5": "58HuJ5JGUUag4MLPetMA9vuRgE72cmBzsDLxb5NWBH7vCQfefdMEjsWuBBiATKYQZVXXaukswNkoPmiSaC6Ab6ga",
  "key6": "4uJeTbuWDEi7pPgmm7h9PH3SdVGtcQhVGxKkD81FL6Tdf8d3Ub83PBhBsAgUtkonPAynjXQfQj4bWqFgLMd6bsi",
  "key7": "2w9rj1HkA9BWYFSBTvUWHBmCQVL1MBYL79pppMLqHHuTJgbRuP2vN8cmLSpRei4kRSUMdzvJqHBrP7iRhugT86Sj",
  "key8": "67oVwisMcbwroGnow7o6haSuwWmiTG39j7pGD88HfUhWkLhbmYfmJSspFozb2vNc5HTaKwrZNNHJTXDt2Mqp6oPA",
  "key9": "56xp9AduTmvrXtUsdzPBCQo4JpJAys2zK6cVhnzPmeXWVCedFtXKYh2EPfaJa5REbEES7AZWdPewJJg5N2DMw8DJ",
  "key10": "Y5DcYNw9jD5bsYXHDNHdkcp8QUYZbUpZhXLsA7beYgWAsSU41ihGYQJjWS6Uba4Q9niQ2B1fotRupJT8Re6csxn",
  "key11": "pxpNxA4iUyY4d639T6sKJgRbvt8PMegVebpnCGKYHkyATbLmRAKkhAwLHhmAPRsvHv2J447Z4oFsELJdmELrRQE",
  "key12": "5c65quaeEVK3wsQTHUhhZQ1UagAGZRuzBJri3vLuiqkqhBcYdspQhUKqHZTNLmDWMMgwoiD8M352aQ98ozZ5Lezf",
  "key13": "28asmKLguMGkFbVaQVQcobQSV7C3ARviXncKeavWyMkzZgB368AAVEgsFWa1PnKsyaYxZzSBefZtuCmjBX7u56bi",
  "key14": "2oeC5G6FBCKRsAcMuvzk4cKVwRfeJ6DSdFXr5g7pqjdpQM9BEnvDuBvaNPSj6cKHAUrFsQoR4xvyskXJC9twXfj2",
  "key15": "3uzUTYYp6Be6JDxdegiw57dvHjScq7CBE4r55fKx7jTJBQNoJjTSUCHMs3DBe5fuVgawJZ3aWb4qAdNUa9t3Wgtx",
  "key16": "6JWo44rAoEuQodfRDE1U7NdgvPhVKt9gUKL7CYgyp9ismoxBYVvj2wacL3w1dMoooknLznspDGRjqcJ9zdQsy8w",
  "key17": "4eycAUEuB61tUG3DeWFmpmdUPtUSTgfjoA92cinYjUfRDjq15sujHGCoymCUhkGL4ueQTrKkfVqG6G7po2tEQXsU",
  "key18": "3QzAJzEA2BCKz8xNseb2xhPzD5PRwtuqTxypFu3VGxRq5aMnXaKxbNkG7m3STWJfaxJKT9TVZqRYSa3aDhm542a5",
  "key19": "238FdKqJBBqquSck6BnQScTWoGABMa1C8mJ2pcxJFxzirufmj9JQF2Dd5Td31NAHwsYhqmF66MWu13it9WDaJfsC",
  "key20": "4GgLehReA2QUwqGSD6onBvRs3aj1VRj5ujPmnd91AaNfQ63sh364ztX7Y4JYMKvwx6XtRq2k1H3VaHJuEmMhrJpG",
  "key21": "3r7ZzsLvDPRxMhSdE8GaCQgYws51MNdaHgPZKuuFVRrh1QWvsKpQSi2QMwU5trhLSRhfenJiWshC9UsDPK9wwoHD",
  "key22": "4SFpFwnNYWWiQL55r36VejVTKNXk53zDx36zZhZZbKrajDPzP1CR2LtCz85dYvexo22Y8oBZN9WGPj98idNGpXp6",
  "key23": "2GqiZeaVyz6rGP4Fq289dfRErg4nYWMbATHM65a4oHR6T3UFW5p6qN6cT5MwZ854RWVsLEn2VnuKQpeNiNAJd5RS",
  "key24": "2tSxV4ogc5VawjfGs9RuWk8J8RyAhCib57EZpQRYbw6ZZJahHcYM265N4zVMiskMFJUSCghuy5n7GAwhm7sFS424",
  "key25": "5QKJvEbuCpLvYmtrv3r1uWGdjkWKrFAoJJuXDneYk24ZVSYmLr8M6tWZpVrGWNb3YCp4nbjKnLaonnBjwmQYeDRL",
  "key26": "2e6vPgpboLo9gKxgGmaKWMr4XGoSsW4UHUaDbcH7aJvQkW1BAd8SdWVCaftwCc1wTgcbeAWJiS4JsQLdhvKo9Y1x",
  "key27": "2fpNgnCesCqrBd31ASJVFUJk8PP7594AkzfFqW6mjU3eCifkXijyPZkYjQophzYAu4JbzZAiLuxXfMTQVjm53m8f",
  "key28": "3iidTNGCdkUCywBAyaPQJwibJe1P1zK7dwuEmqSWvANeNeXWEFtRvLawLAMRRDRMSUsPhMMCqW9RxqeEaZBpn1h4",
  "key29": "33ASkZsh1xpmjPV4LfgDnrnURF8srjDTmrdkMBzcGmK5XSGAm6uGkAew4w27kgwT2keM1f26LXY7qbQB6j2rsM24",
  "key30": "4NDHiJT5AQpKh3wREnihNkrKJzFeU2SVvpHiia4zNVwgs2A7Lf8xFZowpnxubNFu1EZbDEzgCaVyh4ksBwuvN7sR",
  "key31": "2SMDoqG24wM5FJj6Q9iPWkyHbTXdy6EtSi4evnumBQLkfm6cHATZVnP5j6xzkCfVcvmsnFbr2pnsKkvzqhXAvXSH",
  "key32": "24geauCqsnVevW1x3xzhYzvgtArvpFM2QBZXyLVHy7xmoM47si82RMSd6Ztyv1zHzTEN7BryKY8hkmDDrUFKx19i",
  "key33": "35iUdxhMTCmQVtCL2FezQZE4FupfQS74FVV9VudqK4m5BYgufTjZsm9fco46vZudBaUNmmAu5tnkjKmwsZ4vdwfh",
  "key34": "4yzFTg4DbmPFoAeBqcPY2x8wkk823g8zHkzE2zpsXj4ZtLCAavofYFXKdwjxNzFr1eJ5K3wkzFCBbigYtbwKY6Qd",
  "key35": "4FmHnX2cumMTWxu3AyR9Hs9TrhAsNStx2w2ULFeFr7PTodfmCvBfmGk5GqGxaeJ87VmjqvCCJ9GqUwjJN2LwyS7t",
  "key36": "5vbjAoogtRHTGtLGcCSNb1dsst3WaweUod1W4cNA91n6ysVduhvN8vNkGFvbqRELav9AVLFrcScn1fBE2YedLouj",
  "key37": "5QFPR7xHfCW5gHq6VQdzq3jw57QUgL2qTwTHYyAtV1n6EsSMQBwjUJsSwPy6RSALH8Pmb927YZ3u67xiC3d7Tzcp",
  "key38": "3vwMdPxnwQNd25mU9BNLkH8Kv6Hm9wwJPvunX4oByDiZX1knFQfwUXmGeqPPurCfzy1UjPe6DzBsyvZcPfKqYKdB",
  "key39": "23aXPUH6edP5n8pGdVf6GDQtsRGhQ83dfJ6qGpowJoZnGod5ySHpCB5kaSiqZVy2YAEKrR6iyrm6ZqZGUsTkTdKE",
  "key40": "TbyhMFyPaiUUGHRrZnzwggfjq3QjriVR6ieAkbQcSAumTzYDykVKVUkVp3hAL4uxjzgwHv62CFhUvrRaiAKYqAo",
  "key41": "3TUPbu13CN5VJHG9xMHxatD4HiVmXpnVadfhYMWie72nNcDkc2awEJSyn2ezZVBAjE3gA12NsrWZ8y2KjzPWyCR",
  "key42": "4PJeib24uiTKZoywyV7MnpVGBWbWaanoPN4Sa8Kb2Rc8H3isizibJzEe5vNTRQzGN1Jmr3PtPUXtqDwzm8v7sBDo",
  "key43": "2q5winHnvykhot82jJUR5jFrM6YA61t5X7yRSasJutwWkvgNd5i6VqnaReYwuRh7c29XZxzry2tYpwqfCaFWXiom"
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
