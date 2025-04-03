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
    "35N3HqDapLwbof5rsAy6Rcfqu6rhBfgYhNtHczfoS7imdnoAFK2QAkXJfiCpouwCwf2zn94fA5bU8nNxocbCjgLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhpubaRXPvpoWntxaef95YL4yzkUEYNW4xz4fFbWHZoanhFExXNufYkrW4bDhfUAYyyQK8WWuToovzQy3fkZghG",
  "key1": "2rvQ6WUPVE8UWa752rav1EJue2cj4Zanc1PjyFvp8WwGmbBnNvbe6Do3AQdh37THsVSMHwtDLPB8gZ69YnX7B7wc",
  "key2": "2zQqogTAn8TPpytTtcgcQ9YB9xemEykZ36ShQFMFZUsVwMjkaUws5uQt3rgLvKG39ap58Y3GG24zMbW1r22eaVGm",
  "key3": "3bJYuo6GHbLSq5RQjQZG7LHE3GPeZy3iftQ2qKeRbyJ3nLhdhK6z7cTHN8gc7p9a14eoswbW9Lt23h6eZWyz7Ted",
  "key4": "5LtzmfPf6bLBssj3z9fHfruhGHzv7EE7SZgiyfjL5NHLqKCv8DTRxQr9P4t8yZk8mgwMG7bzcmi5Q7cdPMMsiFQd",
  "key5": "5nNGR2SMhiFX21hVmzrrLB1oG2xCxzQGCBD3eFktCGpxHDRjaQwUKL2oEMVAwDcYsQraBn1koNzsJuupCYZpw7yC",
  "key6": "4jAmW2yXUTpN5aKV4o5iqKpLdDjqSCL6G6Cp6LGF7yjUTjj726xiDsrnTCnAXsTTEyZykwDycQDGKb2w4pxX7f37",
  "key7": "uC3nZe4VJjAvBMporzWYMx4xJ7heCryicusu9EXyGndfFxfmyq5hac4b3m918v88Wxhmie2JkJL4BERK1VHqVWy",
  "key8": "3C2iWaYEeAz8KTtCdTB3xVmVPwhZCKwb9qtPT3JkLff96enDb8AECSZuCLeQi6tcWBhKz96LD2BQgurLaKWdUyLH",
  "key9": "4y4BFnWxGsJfDBGwY7rPLSDo1FuWnKxmaM9twsNFWM75NRpkPEu8joQQT5sQVR5a94KQoR7U1dnJNMUwzGWkGrBy",
  "key10": "4bu9gaPkzv2T7rpZq4Z2wx69g6M87QBkjMqWQRA8sHTfm19C1M18uoo2ZeEZXoqSMvYL7PErEBEt1WhAgWCTXBAB",
  "key11": "tmuGT4f8wNrh6nzM7j5uGmtQiGxJvnTx4NnTa4HTw5ZZamc3NcYgQLVcJBvfhXM4w4AQ2XWy84XbLcTfGAskBi9",
  "key12": "2KZz5zMrFhzXypnp4C3fmcQHpJ6eKTY1RVuXE9C4QcCqQjJdCpRVuKmP3fjgeJ8m7Vc56tKnzKSEpbXFcSEhKLJz",
  "key13": "2rRiyzQZXmK1YhKRxkZcG7WfrfyizRFLAa7xizKzaj1BBKefERd59uNFfuMrFCZXf5qg2oyvSRgGin4UWkTjLASZ",
  "key14": "2wTZUvoJEHJUTXjKwZsr7Rt5ZWPqnpADUwuqbH28ACReSfBFKXWNwALf1KvdHUaz7sHSE3kjsw6S2a7McvhL5dJP",
  "key15": "5VjzNFE9MFeKN3ppsKzX66Qo19gMpdJSrAFDt398bhtzgcR7mqWU1KxRJ6MWmWBvV7To3QHBm2Mo9szCX2BSVgoC",
  "key16": "3kXFhChySycwcxFiw38eHPte8QkFDeEKUZVbMvuiDwFTZ8bdjtRsRQWjCTTa8WuLduj1d8Av815yG1r7NYoTFxzd",
  "key17": "3gekb2Kh8FGGzFKjgLBk3NhuYkquFzFesa95in3Tn8HyqmNXhVThykS4soEGiPw4WK3rvd94FoZzMfD9vBXfnySG",
  "key18": "5eGcusEdbT6ZxQ5NzY5XpneXrE85bQZbmpb4EcZDmZTJRZoEpjXDXxiznvLtCa4Q4aach1EXbhvHVPnRVsro66D3",
  "key19": "3pcmmZmTzhzAjT56cE4x9tNZzo1MXm1MiWbbpGYe1zUHeVnyjYuRebSwRvc2HyvRpBnF8rFZSw51BZx8zccCyLCU",
  "key20": "2RggUQvQE9FQQYzRiABkf6rYm5GAm5A7rgPdubdoTvdLrKKVFucsPiQ9m8oyrs4B14AyXhSmj641gUkzeQhQ3TVE",
  "key21": "5VnkVYYYc5rAzrhtnuKDmCZvRkSmndv3AMoSeXtACYy3hq5ApEKHB521jfVHMX5JAjXFvexnQ6bQ777rmZzhziCB",
  "key22": "5AHgzhRg1zrRqjSXbEeD1vkBexfVhnn3cLfeBaQe3oxdjBKrdtxpDGu2HEkLKBQDgZKq8HyEz36nL4d4bXuN4Bsi",
  "key23": "3ZL2NsGKGctV74dx9qLzQw2qqj6U2F4WxhTVPEokzDcG9Yy6gmGDZFyRNPVQXorG6RM2hGe1ur4ZfecJtBoMZF7A",
  "key24": "5efs2q8BqTmcWcxrcz1E2eW6qziLTYwRwbHj1jx3FZxyKipPKV1QCQuABrbQtzmfKiDaFp1kRs9ekFHYAwnQpCoa",
  "key25": "63fbPZNKVH78uVu3ozTCxoet5k4kp4xjTTWXoDRY46PXTqToMhsJWT9BrwDRR7g61pRYt1SyXSFXqXiSgJA3YRYm",
  "key26": "3keVGX194fWuNMqjSikFSbybnc2fy5eT7Ycr6iYaS4Ufd7HoaUf37KFGCEa7Tmoyvj4qqL5uLQsSUboz8y8Bi9AA",
  "key27": "4tb7V3QyRJEQK2dYoRwpsL2cNFrRkPHkhd2MJHDhHnF2v53w97aMV8wi9fMGrB4U9FgBSEjxEPVhZvBqKvtTA6dt",
  "key28": "2wG6FLtTwYkqBE1aev8q9hEHKcKVvEZhDSgwgFkEceyZsuhapATaZfTVnkZjbYrMyV2s8vvvpvt6WJK8o3Z1sn6L",
  "key29": "29XkNqwQq5WRZqC8qggXYD8Ng7HxkjWHLKPt6BiADmU8Zzibem78iBNJYD5XEq3PumjVwwuJZRGgAHnoknDzVa49",
  "key30": "5vvBgjxTheTAxKDMmqDoPy79gaj16k67PNmTidDSzB8HQQzgU4ckuebEhMLkNk3RT6SLGqKiBAJaK5wPNVbJBEcz",
  "key31": "4gZm9S8mkuCoN4FiRLzmCzsHbv1zdgsLUkmoH1WBJru49Ee29pgX38M8n3iNmDSUCmHCqoReexHgyzxfJozR9ekY",
  "key32": "5z6WaMRvQSLfPjJSxYXwqEsJJKnLQUNEfuWyemir99D5HCe7aaUsm5swmdgcoMWimkFSYH4dMooj2vGtCdTwipiW",
  "key33": "2NKyi3foBbQtSJg9xayA1M2Rxz7h98Qb3N6ffFAwnSqt1533Bk7n3e9LwqXcrLXdL9ZEdk3ZMvF3TKLTDnNJQ4vz",
  "key34": "Y8sm48iL5uGnq6rdhSizNnvAHaEp4yC4vV46VbH1mAsswB1g4QSxRyDq9Ut4EKXDCMqJWqsKY5oxPgQCzD9oXts",
  "key35": "4JTNKW4PMGH25e5EqztGH6DEBJXcUrUD47Zza7oW1QwUaccraXVZzKDQ3AtT5uDBpsSh7mVYtoUwRykeEUxcP6BK",
  "key36": "33v5DN9Yj47wQ6oaN9yVANZyVMtpYdwTQSBfcyzLBPvvwd4itZ5C5A5gv2z6q9PYYJurJNc46eT15M8a1axtCwTq",
  "key37": "51i6wJsYCYdJRvYPnmQbhsPptST1uG9yEJNLHHCjzTzGKKwrsNeUzrWK6gVzKP3ZczBakDZRYmDQ5uSXWjDuNmvA",
  "key38": "aeB215Zp7DFLqyw7G68iQWw3sRDkSJ8jgwkV8eiaCi39o3WfAhKhmAnDJ7TD6qXzYq6SHUT7JhzjYFAAYos6Zs3",
  "key39": "3gMRBZi7k9a9c5ZpvQeVJtdonh3dJvUu2dkmFsi3nFxd5THqrr9HPzF7uwTswJorgArS52vCxxkqR4Mfv6m7aJN1",
  "key40": "5jjDNj4hV9Yw9QLNocDhKAuPzbrR6AQRVFNt8y2588cH4iLprA4nZnGqp5LYmDUW37SpKUhiknT6E5VForYjAwXh",
  "key41": "5P5EmXV1AtGAL1uWRXVesd7vTywaDDjM9vm9coNbjCo6MqQ1afnXaS3oFAuJXz5NtTDN8XS8yxSb3fqNnKciNzuV",
  "key42": "5XE2q6UTi5dAPyiwYczCvaQmxPfkjRoakcseGzwyYEFr812ahKiFzEZ6JvADoSqJixgH4WLQyk35t9x8LvhSm8fT",
  "key43": "5uKzuC6JGC1poicjdUqnXKR7E9LLEURDcgx4KnFrEAGLGS4SHCBX96MDe9rqRRgWttaJSkd8oMpFuAXnRRhKUa9V",
  "key44": "2aNcQ46csUuDD54NEpoLmULvkVmnGGoV2ES5JkFtWvTqXQw9nmwE9w9CDgDRHNy2sMYCqRnDdwcMeBjfoJ4H3fSm",
  "key45": "5v8N8T9JzpjQMj98yCmeZwKqYfzDNvdaAZAGgsQAWNjh7SugE8gpJSNeF52hmMAtLyVgWwJSL2z1zSah8PGXiNd4",
  "key46": "57UoFs37SnHBvciEdCjpgGiqFXtNoYnREedpDmWDXerq9QiVVVrnaAuXuHxyZMsjasSXBqVmY6cNT4wyPDDacV2d",
  "key47": "58Rtni5xfsNrS7De1q5v4oUaMS43Xa986aBsqR8HcRQvav7TfbeUwmfmJEtQBA94hBF2Hb9vnKCCbQ2f38svAofT",
  "key48": "62JGJaeoXGKGQmqaB7vCPTSmF9DZy6V4HLvGgpGDm4o5EViNfLdLH38HZu4RwjZAfTGimefiVK1PxSLsW1xSg6hw",
  "key49": "4xvzhBVjGLw7kVacnKJ8YptxW3QS3nGn4qTCt8QpRpfGHyL697Lku4rDqEXYgrMNo6N4JbZeuDyMSEutgt2XXnaX"
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
