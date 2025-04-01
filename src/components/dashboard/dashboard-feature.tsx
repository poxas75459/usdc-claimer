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
    "2peH9b4QvTAx6G3sonwddStRMLm8KLRpygttc5AJVF5vmzhYjHbKq6qmCStao33hAwnsgSdPwdVRiK5FVdRrJtLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ex84DxBjUxV75GUW3CygMkRqbTtQc8hdxNeGbX4ddGSERnrZBEQwZ8rSKVyj8S4nPojNC8qnpq3hwwAqUo1Ka7H",
  "key1": "46zGXdtYshMLQDnNJhsDU9gxHKWZn5meS77RPwLpMcraMKs6tPdHLkH5w41YkfqH2WsEkxg6LUSCD9ySQeg7HN13",
  "key2": "3oYj64e396HgpvNjFYAiW38SXdcPqQy8kAeND6QD3J2dvN5evevUuwSFxXUEKE9RTw3ym2LTJyoERAqbGa8UTPMV",
  "key3": "5as2YbmivzeZ4uTtPeyuZbuWkCdNvVeYE1YbD72EyDVgNbYT1TmfJxQP8JhhCxjiemWZnUEL5nLVYJsfzX2ZzctL",
  "key4": "3Y4hgzZ6o1wTMXNFadoqzprS9MVGR6vvYBpBt1H6oLh9cVfmQCUCZPX6ezbuhCUYpjHC2q9NsY8Tcoor7ia92KTt",
  "key5": "hbTH6yVoBgiNxwwSgMH1BdjxVRWyVAZs1fDULtzkvtS8EQ4J1wFQFM6Tgor8i33xWDSzgp3o86gBBDvEuPdnyYm",
  "key6": "4tUmBCgyVsJtSt7BhScvVdZqUJt2yyvBZ4pg4kgneYb8dXmjkeKB3pf3MMs5Psy8h2oagLAJYDgfBtBzK4GEDFca",
  "key7": "HeRokFYzXeQAUbcXs1iCxfNZ3EBS1MrsiZHA6wbLQFUZ496HUPStghSr21DqqoufWDoKZBxV9EJxTJH986xPxMS",
  "key8": "5BdvLY5nJzX17uFpz1T26uCbnnAURaUrYpHJ4efqndLy4eWZL1DpZLbnsfzZq9De7NodJG7CtjFPVT515n4VH79Y",
  "key9": "5hinCvy6j963wrsmxWnPS9rpm5unghKsQVr2dL5UfYPasEiG8NLsuKHyq83FY7jFgA9AfNanTfdAPCnXG185xiFc",
  "key10": "3EBYTwKGLHvTYdX1rHe3gu4UxgDMHKNRdqNpeEdSyKzTfKayN4784RFTQBWhGM1q6THxMzMLm1jmjAKWQtDYZSDd",
  "key11": "5pAaiaej7JrBBNAT26h8eq6vE8vpHZpA5g8E9UgtV8Dzi74cDFMt84z3hrCX5EyiK273ntt5Fu6Q8Z7Q3Htqgv6c",
  "key12": "4APvH6EGoXXiegGYocZzH35t89JZkVyjw6ZfbXpPQU4WzjtERkiAkPh7wmfMVydeNyKk5ePk3ZLACwNgm9Ln7bNg",
  "key13": "5erP8N4kjzCKfPrWkdJWrzpP5xhpJfCCuz1F4rJWmz7JCEDDYFeADicr9hcR73j7FnBAfQuBSMRxNe5qeaozhumD",
  "key14": "2Q2ZFxgLsoj1QgubQXDGmt1Rj8jeX893ASvnPMbfLPmAExD3TqyBcQxWBE4q3RyMZCtPDFSKMcjeuaEAmrYo8psP",
  "key15": "5oT7eJNkGNksBv4Mcv7PxsaXXGQrVAnm3wzQHMCKbmHZHkndk5adKMtVRCybXHNqXEannBVH4ydzLWtKH2EgbZvM",
  "key16": "3NAPkRyjuWYCnzyy1piFCwi3SSFe2rzo4wmSWAmSManHaEun9kcnjFxATp9sRe2tGQ9TE8eJ6uaXyznGzcJj3upS",
  "key17": "4gR5PKZ1AuoVNLx3uLSuzpTy4jnUwwZoxNwPkC4pNzJQGnbaGh81ip6xRZsJo26TCqDnQpoWDwoUinewQamXWQg4",
  "key18": "64jSbRhXmNfQefWitme1CURRepbjdRHR7busQ9Fvr3ZWHbhDr4mXbDVePztgDBPZnt9YCnaEhYabPEYccsZQJmBR",
  "key19": "437QHi26m3Zs2VkqLTin8rEEDKQWyLTayRQxvfjrXQDq4fqsP7fX5AwoYEsBSXfRvqGzxNKVgufNdibej22JeDP7",
  "key20": "4jv5LHt1z4Ukn4uPKAEtNDJeCyB11CAD5Tq9mx1MrQHPdiSsqsURgGuUJNs1GbN1YVkHvkfDq3DqaYKYXN8rEsvL",
  "key21": "3FgEx2zcFafkAk4RVrZfZzjqSuRmLAXcHVX1sr7D5hPEy9W7K2ajKCcHj2sPcEEBkB4r5GMWojHCDHPRB18TugVA",
  "key22": "Lekih2rbVET8TJYEb9JLysh2PdS587qHY6NUWT2wUwHLYrSM87LAxBzXTVCNeUZgskhJb6mREmNaKVqUHV1Wqou",
  "key23": "26iqD1cMYx33cJynQt6GCmRMHzQf4S6zH9vYEX8u1328kWFRCziWNU8HLxZX1v4DHhc7DEqj4D6dCTZetE3vAnrg",
  "key24": "3Ewn1uqCqEkJnD2fFu6QsrwvvaAeoxRMcCJVfWE43Yt7rRg4K8uuJiHihLwvG7MWjf5YJMswZDjMtPkp7foBFzMg",
  "key25": "2MXmWdGyLj8eymKfhZBSXXvd13P1p9sbtssvjUAe7NJHiTyU6V3QAzpgNki4Hzhz4BQEtwXjQ3Z4sKNmZjbt8VQy",
  "key26": "5pKB7mMKemzrUJgefKL6wXTSZR6HwrkogvMdAECFWy1scT358sNVbcUWbFgETjKwRFQnKMfXxj1Vb4rShYjZ2TKC",
  "key27": "4aygMLKwK1UjMWsDiYkG1WvCWuUCvMAW4VXAzxAiDQfW3tN3V1ksQkBsDekx35xQyf7PzrKRLRNgaw1kYCPPvKje",
  "key28": "4Y3FJWUPHqdguanpzeF76PsmVH31go1ShatwDUfiVCivqP9m7HVwzuQqiPsuY2DQPFEdqHiELa8PFKfGAKs17eaP",
  "key29": "5AXpYquppr52xkSRRJz9SsMvkJQK93YqN4zpjLXGvcrkG8aSGwJEZEWCejaEHxpF8KM4LkVXrjuyiXeteYLjYNFu",
  "key30": "2SimsHxREYFYA2MNZk2DVfuFLHd4Z8aaUgATsgUYCCvYwou3jNputkSb3z2WmdYge4SGCPcFTsApWbRu8ebRZLGk",
  "key31": "4zzrvC3ge8DwKTr8o2wEsjtgPconMafQTk5jhtUQHo6H87g41cETj943mCTjFQh3h4XRK4qsqaj9d1iBuMWosc35",
  "key32": "5NdQNRQkX2ZmxDtm5Le7bpnU6EPqysyWEHsoXaMzqU4DioQW8Vvn3KDGcgsUBRCpnhCz6jpjx5wH8dprJyxoDGku",
  "key33": "4J1rLHq4ahD8haHUA4JaTpLkoDAR8qVm1EWoJa145L5A1vxJRNSymna23RRRtCpLQH7ZiPgYfYN5TchNrqiDiwMq",
  "key34": "2kwva1SYLzNRFVZmZWMdmH6f3kCTkLgde1evugBT6N1gnKjhimxA2zs4z25DGLp5vMtgSVG5S5JJXJ6wvibnXrEX",
  "key35": "4NC3bxC4jJxYap27p8yTcQP5ttPeaVJU94jLuJRu2yC2cYvRjZ9vQLDjPLszbyfbiXwj7oCSDsGuJLQbfFT9nU21",
  "key36": "u4rB7K84TwopjUTYCgrwXhLfB3WqYg27LGqWZga83zLQPv3Sbb9UK6xa9Ud6bzTdU5BGzUFwzwNT4KXz5yJsPgm",
  "key37": "2qWq7dackjD7EiBCB8nfDPsDN7m4V9XuhGidGehbRE7PGMeG3m5nVfDn29qgJHdR7UTEst4EUR3EZPeQ1uUiyh12",
  "key38": "57gRhi9cu5vLXZUcRNGAbWjL1fJAsWLBQBokjooCgdFEzAAK27rmwto8BWcSiJZ65ZCibceEq8rQkUes6yAEt7t2",
  "key39": "65F2VMsvDet3mDhwAXnaznJcYZr7To6J4D1Xy1SJkbmeQFoogUQrnza7NRUiuSWie2no2L6BGGTtF2ymupbLCKmh",
  "key40": "25At3jxkKregrcJdJLGaEhTRYJeqMR9zwZEVBfpWyyxbW4GJ4BWrYwEhN8BRH7nRet4fBVZsJD8NUZpwdNkKWjJf",
  "key41": "3EsZteWNe8mMRGpUmz2N7MfDbZSnsG2UKZAPjzmCKB3VBzDZV4ary5wQD7uzois9pyGaAvP49y7EYzjWRFw8PrHV",
  "key42": "42movH3oYQWsWqKGAGtwKhrVqzu5cR9VqJax9MKGtj8VvPidogSaoKgJWnEeuesprLjepc9zC9fD1uikGhAi39JN",
  "key43": "3MtvBW8RhcyoJKDx1C27f47teAhe5gXcxzv9QKMVvakmorbqLonYKcq8gvZrMsjdnRBJf5oftud21HX6A3fvSuR6",
  "key44": "3hnsos5kPVPGvE7wgHEFshvQ4gYT8dQi5xHif65pqDbCY8z93Eiaf8d5vv9aXGvWwsdUmxwyb4MqZ4jJqBFKWDX",
  "key45": "4N9FBNnUJUuVgJTrPGGngEw9RHjmNwYQFWzpy81sMh8643kvWeq1P6B2iFHoz5qktN5SxQSWATHdD9P1dZGeSV5d",
  "key46": "2NcrXZC7KLPEx3SMvTRTDYjG7Z7Dqd1xdPCHECgNj1VXytrGy2HLRixApiPLVC7dRXiwnjKcRHe3z8EVEFf1LvZ2",
  "key47": "3sJjnsbdNREsTesDgFZMxGLhFzMZ1PKJN1nqhekVntUbj9jXp6xG7fSPf6qdRDeddwTfic5MYTJfDGLwHka4BqW5"
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
