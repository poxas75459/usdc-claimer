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
    "4oH3AjFncF7kz5cRykGb8ZmuVxoDFf5BBft9p1hQ3oB9QdaK7LJxJKS2CNQSuJCD8cFPfNzy5ZDpofwt8bYq1j9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHudm6YzxBCi1e4pYHya8xwTYauqHmJ7wujrec5JRuB58rGZX6dPiU1mAF4fAsyBx1wyNd2GYRyzgu1xXgKU5gS",
  "key1": "57kcx2M9vvHSmZQLUtuZzjyw6rq9JMe7bqXTfCV8TRAFHQhXujFBhEfeGkbeRi9jEKAfh7HSZuXczV7Laz9ezW7d",
  "key2": "5pv6hRptkoafXvJtrMbHjTqr6hLKgRaTu5QpPYZ7cBEffTD7QXxJk6z1SqLBtoit4nF6D2zJzryd8DGssRMdg3AK",
  "key3": "23rvVKqRBocYi4jmb4v89298f3sScAnxyHVVGd57EzJbjqusa3VUBMt3n8QVF6ceAtvgwzLk548wHtArnWFFDVTN",
  "key4": "5W9w1kvUgTzCRJW7a9zjwXBnn1S4W3rMaWrivpjnfTabDN8jvoohhsTdfoUhW5PYR1BS17EwLsQcmRNHu2nVTfko",
  "key5": "28QstdP6wfJAg5tidxnmpxZWHHpFgSQhSvDfPvNNwTNur8KurTm9r2gfFcFp4Ksm7fEBi18RiE2RLqMRZUzB7QRg",
  "key6": "4AdNWXcBLnjfym5j7PLXsi7gBcJnsGXwx7b9rkjhb5LHVpiubi4PhSaC6H6A1MhVWwjzSL8SP2MnT8vj57SjuBft",
  "key7": "SUb5WdyYRaC4inhTm91dd6dA9uYuULdiDrwFfvHTkyUfa9kWw2obWfbg34ozBRN2spAhgNRixzpErzFQqTJeQ3d",
  "key8": "5a8UdrP8eqHTPoBpei9pELDdnABUkzfcks5jWEQv6TZC98mHsAnZam2sMwCaUUs9BfNJEdoEDhNMGNuu1bGg18nU",
  "key9": "rX7w3Wx8UFaL93cXk75msZ9eDcEEUBTE3anBSyc3A1hRJBvqiVnoU8Q37BUm77Ge2hca6zYnbPng4oVFX7kvGYU",
  "key10": "1dwq1eYAZ1h6DLLjzHGqbPVjasSwSeQvhdECmQEpMsni8zqPLLWacsePD1Uk8nWvRXuwp7nzepYz5ZVX4kq2waQ",
  "key11": "3C94LAi4G5nFah3wNdhdAPFvaNPRQWjw4k5NjJNWvKD6yc2DjcnetnRzpCWMGCyFs2q9dj1xRD7yp4LuYw4KyXVc",
  "key12": "5ekgWbFGbxobe6QBkWnzrhJVci3GuhySk8MpaTVj8gqiBBG8Q8U67PRyVup7u5aysNV9dKkQpD2ePPFg9HaEF9Rk",
  "key13": "2sKXsqCTjtSHdPCCXruwd8EHcYQz9gWGsvjuiEXFVxJRoC1F1QGEtD4FQkmhBQXMCXMYCzev1RYEBFeXNgb758dZ",
  "key14": "4PRFHW5Cvb9TzTKsdn4RJQ8N1uVjyVvGTT1FdFdgGYrsHeQEuExY15cPRzcFMRnuJe2RwZdp2oLchyPJwcGx6VVa",
  "key15": "4VePoYnytxgAyEKonTL5UVhnkLpyV6guKEvHYzg29ho9ALc5uzx2Cmu3AtnipMerxr4atNDeZ5m36P8ZPpxt4HQF",
  "key16": "2tjht23cmVjswKs7Uvmeyy4S9AjjvCEjYYXU8ffb3xwBtGCPtoTkbyhdNVWrUr7psczcdjehxUeyTmFHrTCYwqXa",
  "key17": "4bqhBYA8LCAJuFFizQNC7S4qchke69Kk52UwECtqJ3UP1xqWMeRmk88YZiNyo5vTxRNJzTi2XMjNWYfUG19eWqYm",
  "key18": "3ueJa4k42bz7Ntyquagy4PyLJYxk99ppPkh98khZeevngm79tebH1xJzzhboeCtUxLef34YJCY5nTyuLVNukaJjm",
  "key19": "A7rmgt1x7tJwF1qPABqqptP7ukzHGWm2EpSumaUBTDkhENBNPJ43sAUxRQB2JwQN3NVDp7wcVqkJJzqsu4wkmkT",
  "key20": "S2o989VJn5AuhtsUqXhjtuwD5VSh2XQWZqTstTEwbj1kbwqV1Z3QEFv7v63XYiuFYFYXWSNEp8EJFrH96nJyTdN",
  "key21": "5rrcft1ak4GFJYj5MGqqb3wwxKbYStFM7s6LsXJKRqvsda7BkL7PnBzgRcosqPmq2YcqPsquo6XSCVwEHNfpf826",
  "key22": "CidPhhyRGzXMjFiQZxhXxuF9P5nssVFLRGTpLSZvXwkTQwStQ8CdL2Exs74xXKokckMcgi1DLhGjfPtx7QoCfxg",
  "key23": "3SsAXhUbC6Ryqy8X1SqqNcRihm8WEmDPi7KikRd3dseLqBmp8mCtDhi3LGF5K5KQ8zCxojbypyiAzuujTdnY3p94",
  "key24": "3hitgBXcawEeLhreoCAQe9F914Vrz9md2XikcXbThjhAfGZxLFYLEuGtRANnWLSRoJda6tbiqS75iBPzvnvDBVai",
  "key25": "3UQVHr6PxrfHp9FYvT2CQmwq3EP6MabohgGjVn45m2yyncd8gghGRWTjqhFy3A6DCGnNFjDYnGRguWCGGxYZjJaU",
  "key26": "34uXN5mZ69opnDVUVxDf9QoYhh6oB4nuDgzmg29yRSLUJ8y7jZZ9Mi11eVsoA4tWQqepw9PtRLuhpN7BDgJUDf1F",
  "key27": "5YejwVCQNLn7rZNNQis4rMYhcbxeNkokeXNMu8WtZX32SeUuDqn9ijwpJMiATKUFSc3RERFzc5RjATc4H63xrJC2",
  "key28": "4KnjZT8iTgGajDZvEvn4JMpe2uCDLbheA7p5f5LdqYMJw6qJgnGRNVY7iVE2qg92qgxMWevY3PJMS33sf94jLDs2",
  "key29": "9E52ag7jmUJ4WsJzcYtc4zX1iKE25ingEUA8MPqrmtFRhhKPA5ufDsmCPDsa6k3P1jry3QtNEPWUZdzMRrgGNqd",
  "key30": "5cBAfyNqvnsFeqT6Bqod4X6Xe2ogceLDyY1yZdLZsvFkpB6EoQiLmy2oMSSGZP463dCQBNQMjsbBNxmoiH5VnfhJ",
  "key31": "4A55assRMqTnvNeuMqPgBxGUcAtqKQguUYRCTNkGUC5sizx2XcDmNmyRqraef3YtAc4uRn5qcdGeACGtVrtWNXuz",
  "key32": "4ESKR7XZh3BSRXoWu1aJfD6GUzJXnAunZUjRoLS2ByMX5QaXaiVBzfGsAdnhAkCmHmUEFS61Ugg7zMoDcnqPPnqK",
  "key33": "NepWhn9xdRsMhAtAghHSK5FozavjsXpjo6ijZFeircgPytQyvPBgcFRyFcmCRWNz7Ldyv5cjHp9fYuE1Lhw5Zou",
  "key34": "2VahuEzFV5CKneia1C9h7AtGTaA9NmooT7EdU8MMvn655YcsgDQAK6GyyG8xRJfMqUSPjoQtn7uNuqUpF1aMGLxb",
  "key35": "4Lfwyx5HXTpuWbQvNEuLJJ1L9HogVtyc5mNT7VgCjN4m2R2hs6N53Hawvqb2XjCqVwakhmnxPaXYbmFw7Nc6vMYc",
  "key36": "2NLaxu4Gxwb3Z84H3eaxHCXUoHu3rCGBiFo46itv4fBQ7RiALQogSNqsbjUxP268zZUudNYbSgnDDDVE7xwRu9fu",
  "key37": "xbg3EqCbNa8ZGp5tWSweMwzoWk6o6LSbqYJ7bNPQygSvSgQZXLB2Hnc5jAbaQpXfmrwxnkvgocXVRd4V2snA54U",
  "key38": "4RA3fwtEEkDbzMsohDfCzo2mhJE9tnz2Qji8TuQVDP1dtPJzv595VYXebB3XQUdFzCmy5Ey95RK5EdcVcKsK5x88",
  "key39": "CkifD4crt78aMjumkNPEb4phzeUfeFffZCgrEx53FMXDN56gNd2BgSTtLd4tPthSUa3i9pNxowAwzyxSMGef26x",
  "key40": "knVJrNWcmuRra2PnQMn54AhWW3HqQMPvq61WnbiTag3FRwicbLniPTTz6WQopHeKw3UDK7MetHHM2ZUzJSgjgxR",
  "key41": "2nMwkoLK29uFG9ZRVNS1qK1ChRuFMcF1hC3eD5nZyfeto9ruXC2cUh3sKSwEQAYoo1ZZTKPzGZtG6p344mUgbJ2n",
  "key42": "R3w7y6sK442J83vaD4kLmMEqeGnrNEd5gmmqh5KPtWge2ZtAHYwdiF2VYyL1BeEUz7SKnAEDsS6uBquTCki6K8J",
  "key43": "3vtf3qou5TUx69rnRSEWcqM5epjpbUE1AVoSUqFLL41vKGGD4QucRnT3Q1E7aq799ahsee8riHhVWudQByPpaqg1",
  "key44": "5RmwmJEqUjiM8Nza2w5FuDKZgvL7LBzAUvbt3okCXRvZJqo8EjqdrufhhaUUoxNW4A9tuWBePzKh1bKzM8NE6kZc",
  "key45": "ApnUzWDbdL7a1MNMeyvu1fdLrX6Dn2hQLpc2rk5dRwvQ4DCBLH8doA5kJbmkraG7FCd3wqdCKzeDhQJK8XZBy5s",
  "key46": "2dmRDuxwVwor6gtuKX7AyE6VxBxYn4gSNrmhTSbRdA6kcdEouQRWQQYxHDZ87Fa7wyq2dNnjz2RQawVT7idjjob9",
  "key47": "3vDVTAdyTN7acxSmqaEhSZVMFoMiJAAxBn89tn7rRTUfETgYUgdcthQvgxPEU1WVL9o2K29dnSrUUmpUPXwR1sH6",
  "key48": "3DfXQVLEbZJtw3cBmEHCjwf3Bod3c2Vc3Lfo7jPpSNkQ8ftE31dtR5mKoaJYCSMrz9sqK8A8M8hKmCZPEUyAQxFg",
  "key49": "22pt7pn2CvrCd9ubspG1yomaq1gJqXRrrsiBMFFWSY4FMHVPtqpVcyiWRyAFfjXRPJNmeFcTNZdZ3nQNgCknYep2"
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
