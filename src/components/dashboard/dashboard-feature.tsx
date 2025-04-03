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
    "4R7Y1apMwVconmARf91boUpMLfFy8tDKLFeK3Yhw97Zxq8WnsNhEdrP8SHbLZvQdF6d83zyVzpkAA6WpomyTMBTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEv9Fc6nCD18g8dy3i783WsGP4yh4DXKJabFe4HZGwhKENqauBeVTgQ37Uq69PPWeGVT7zSZJqMzVSMrACPW77m",
  "key1": "51nXxS2QbFag837t43EvQGsN9G1c6NCVdsqmiwnbbann4Z56U39JWoBrFChB4w1gK5cenxNDVwJ4sUHu1FiSGe5H",
  "key2": "5TPXyib531BPBAycwoQfLVTcnY3cATKMEHYD4NxtsJA8wfX4CcE7t7KJLDi3P34nFeL5n4LqpvAGhasJepP29M8b",
  "key3": "2CcZ65sHP5xfvN4kCwV1U9JSiw7rKqkRnixrJh8HxMhaSy9gPQe4a6NBfxs1dtsTgruGzBp48EFukgfd1HSxBfgP",
  "key4": "7RPNPZ4E1nTwR53aaP7qj4vYayNpGi7dhh65TYqecAJXWZ4e6xrMcbYXf7uvq7kyKTEAcWbouHRRA3cs71D2qbR",
  "key5": "a4o73ufX1gBef2zCUY5vgGfJkFq87S8ko3e7oReuMrUrKVcQLdxWiYr5CQUN4xWj5zU9imzmWFAhR7435CYvaMx",
  "key6": "3H4p4KZS6KGLtnDsiR9pbtdZvmBo5rYkS3ahTPbmoiPyfB6UucSBHJEH7JLHPBSNePH1WiWruHBvDJ3TDqQDAyYV",
  "key7": "2XYjsTU4nttBaKgm6d7eeo4oLjR5s1cmTs9T4iwqJVsRFWZ4FAgiUHFf6wHEmgwFMu5vKBiimNkCF5L66MbmnwJg",
  "key8": "4qFbgEKW3n5j4ouZJ3XhWmV3kA5DMuHoZU5Xw7mJLsZM7MNPuSPN6dd7y3McwTwZLWKETCV887GbCgJZG2SuWaEb",
  "key9": "49wuA5dC3prthPfnm1FmQNudrq9nSzZv5uAQj9E78HW6T7W3tssA569mV5aCr5o35PWDrJNUQqjmPzv2mV5tvKUw",
  "key10": "3RVJeMCJku3GhsB3bPh8fAbMtEVFFyHWXWkknkZgxrrezGc5pCFwptQwzoW1f8qtW47xAFjpRbiQgDr81VxHrALe",
  "key11": "4CkkSUhWjLoXHLiMVCFamfbY4bPwiWJjs9Uu3Xi6MmqfCm6GaNMNddBXdvbGDeGRVpgyQMzqs7mQGN6nuxo2xfKr",
  "key12": "qriqQecAk4UBFgodDzrLeBJqhe6fzUdFht3kczDbk48ZMWzm1Trumnc4X8herEYe8VFsDHF5q45i6uNwmRmCVaA",
  "key13": "2FrgotUBSgK13Z5XdnwPdF9TWZ3bHMrReGM76SFvg4c74UmtVeCQYB8LM1dufDT6wAzcvDWK7okV3q48xCDzLJWP",
  "key14": "4Vbsz44m61PyQdZ18yz1XMXogCiF8yEoEvynzzV5h5chsj8kZTsiSAVuG4DhU2cdRYmduHQkPYgPWn7y1VBSkZg",
  "key15": "372wRsjWApRwf2eubMUKUKY8viyjTzAkTemMnxgo8NU5MwYgYpzizuaWTjUEvi6AqEKLcxJjEWcYu5waTkagEWCN",
  "key16": "T7bg97dQeMa6v3Vex9LSkE9XgsRHtm2U6VbmGvrBTrQzF2m7Zk5PRWesZKamMNv5Hcgd3dsU4QEXhhGru7X3PZQ",
  "key17": "3czzSQbrXU59F8VdMSE2TV62cdXssYpVj5f8Q5xoecnpDp246LjS56hTYpCfphuUxFQB9YVn2GZnsQ8oVQRcLt4P",
  "key18": "4sV688ZHaUd9PBwrcVsqFPSnzuvXJmQJJp7EhcB8GuY9ksVQXzTN98gXLPGuWGHUwZiPQtB8z5cPt9ZEtR6HzkBm",
  "key19": "66REqq2UDLhGD6FLiCZFMr3FFKkaMzDEz7cWFH1JWzZWMpQ7dhjzaWXke8zTpBmvk2QCRR57LSPLpTFa35BrEu65",
  "key20": "4X6Vi3sr5E9w7xt9gcoSnQ9WbG4UaBvHRSP4xB3EvnZ5k7Va2ctXAg1MUTmhA4xyrYX4W6DcUvieUUh4U4JfwCei",
  "key21": "2PU5G66qMgodHHtNEKax7QXcS4cfdcA3caCXToQJ7gDP5ksUUdR3qLgsw6cj8NCB4ZSBEuGJrsVWLm1EkQDSeZSU",
  "key22": "42ps5iYq86Vxmi1HFV3DwfRtJk4EingoQJrrW3VTjWa23me1ApYsHTWcyP5XcjwQDJ2b7yhMTRUgvfjrAQ5M7x8v",
  "key23": "2LYGCvt7iJArqj4Qg5L3dNq8fGZ92S3LJGLvu6srdPGjrG9ETzvtmzBDkgUvca1nG13crZGzwWsuUEmd3xijysZk",
  "key24": "5BKT857EA26qwyNapXRSNknaaxcjdbfwSpPZrzs7shhaYhzPvktN5V2pbPn5FitcLvRY4sYaHpyuwEt3LfQPLfm",
  "key25": "3RTZ4qfZLNNM9U4vF4LENcrhwWbgpS1M5xxJAjftJ62JMrf4wVW6rfmFe91ti5rwkCSA3WvTfdmZg8DHdyuH1QdN",
  "key26": "MUn4VPdhVnQHkmWLKTyAhor25cXXSC3xnepCe4oEdpyu99JWyfdxqyg2Hnx2NPNqCb3ZNs3XujEUyaMh7iJAeGC",
  "key27": "4e2QW9t2WYUXEdDQYr7LxUQHuk6gLANDUe4sp7poquBGKcaynntdy3gJvU66xCVrSncUH2TMg59ADdP4Pt1FHRuo",
  "key28": "47pRvmqKR52W3idTCKVMHi2BN39BHbsBr4aupoVnWFdhUaijrjsTteqhyWTE5zH9LAnvBD8LQbA4bqmoFVGchwz",
  "key29": "5BHs2fcaqDQTMN3EruqT2wG5UBKDAarGaenGT75XDGm3ZipZcvUk3iZAVHmY4KSPHCE4tTQAmjcyFTo4aCZhWk4d",
  "key30": "5w6HQjjYdvEUmtSbiQCuckFx5uMY4WGFZqQwYjpQDqvRoo4tv1tL6yD8Xn9MZ3jhF5mBaBNVQSV2dNJaYH4JGUjD",
  "key31": "3LtAQJG54NDaKP261MmKhGibE4UsWygseuPUypPUcyhexcNs1cLKwTTdYtNSBVqRXmasmD4tQ6MG1XA34hQrxisd",
  "key32": "3DDL5p2aEVa4JfqjUFhBi4ERtrEsi3wj4AdeATXV6NVKvDmZ4rmGPvwpN9rbLJ27Bz8PYoMUmaTnTbXrEmkCniuk",
  "key33": "2tMRxwLFL6eYQCwiMaWVXEVSoBgPhzFANZf5DkXVGYfQYTRQWjj7XbEgGcLgErH2hCRpNeY7mWKoAZP5urhTW3V7",
  "key34": "26NrB4jzPNuWHTHHbPH2qEes3vUWqKFwnHRH358ibQr13cVxUi1vfu5fHybQTH6erxLhZyV1Hj3Q2PMprZFJEvj8",
  "key35": "4BDYtBN9GqEXfSNxNgfde5yd3ViQd63gN5dqUKzDR47aFcNYnhQKWRrQ6eBVXWvpuLqD2vi2xDsgqu4wu1Fifgqz",
  "key36": "L9wR9LQWQhpTgaCSxWU9CGFVWL3kzLRycHjBMdUmPBzNnMkwsDnmUqwuUSyuwnMDFZcNyUNTfCVAyzvPGbe1dyu",
  "key37": "b6hZD8nj6ZvGvtVugPck5GNJaqPVg15LZ9EtuRbtQfpBidzzpDxTfQD4XJdmT55LDaY14ZoXZps6gydv31qrtcx",
  "key38": "aPZnYppHkFVaREt1pE11Dh6dsddZJRP5DPhnFte7W7meTX1ECYjQrCgwGqHHbqSbztDX9yozdM8HbTL7BVkGLWp",
  "key39": "4Yqc6Yy4efosnZbUoVuDLNEKimTCPnXjFsaufyzH3rTeKjnZ6FatP9SqE5gFEHjETFyphcZ5WSd41WUPmUxPTfxB",
  "key40": "2D6KEBgSDG7bX8MnHKmQJgd8ehHK4k5rTVzyQFUPZLwUZVunQzkBWSKnUR5RpQcBHh8r5SjHAr7vuddKg6Fx4GWv",
  "key41": "2FNYqtqzmHkkQYhZTbJMLfurM4vCcaaFmtcfasrGmheyTJLBiH9f2YhCeuQM6j5LcFT25iosnA9NDeVunLDdHrkK",
  "key42": "3gTcjQvPDMD4pqSdVTu9PyL6HVC3vFp7PPbcegVn9xBmjgMxnerbiNxvrAt1HR12WTfziksXxuS67ZQKgrFE5h4J",
  "key43": "3WSb9SzXr8gJzjqSGKaBcbeVyiQwmsS8bL23ygu4Y17ZabnRtuftU8ZSgVUxPWNC5EdSLiaWyRJudypvomQ6LXuf",
  "key44": "5Z95yZomvM5wxBNUnQUk2Qo2e2NijMYUfptXS3M5qVqg38DSG7YoUnCdrCMjsgCYU6a47HtJuDAE3HnFWduK9Ruw",
  "key45": "4PPdhRZhUoQQ5kJG2ZTQdCjMubeKBqVf3mpU6m8u5i71e91LpxPotgtkdKmP5fVELDmcdR6b8f7R5og5WVXXNphK",
  "key46": "4ZK3NViwNoXKGLEJVMxigTpqeompBnCBC67rW1RKGUy4aWSyjjJfRprfRJ9KFDbKiBhSmLSj4ZgfpCQNFXBd6zWH",
  "key47": "ftdRB9Rp3chpEsbCmaLWxmjMTPrECKDoXskpZqTwhipB626YchfqZ6h66zj92ACUczFtkvvnTgtBdFutFoVfspc"
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
