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
    "53qkGGDeT7xtMLQ4BFts5sohBgMSjJJv64tkJmrSJ2RmbyN8WqWcRySABFrnTg7kakfuQTHKzHpJtW5vTvi6sog3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2stHz93phGAZbP2XNo4THy1eNxT3FmfbNaikiTvqpzuz3vXms96kToAL4xodhF4JFKSuD7dntaoPSzb9zUZKqL8U",
  "key1": "5Jt1qiNSAuYJsMskcRuCyhJPYkSD5vdGi4kPqkkvRa9Jd2ECKRTPVWUCgSs4bLe3KQnExB9zKbwHe8TWeBUtQdKz",
  "key2": "8cSrF9cfW7giDeRV3jWR6Lurk7veEnCBVrwCdqSZXSuMduM7DnRvGbrcCMsz7fDkAxn7DprqYqFBGX2yjvaDSMj",
  "key3": "2BMbbwhVZeuCHMRrUj4i6k3qNEmLhbPyDujD6GyXq1h73GFUMz22wCkSM214C6nav1g4bhLHXKo1mpvtPi8nVvy5",
  "key4": "Ed3zLbz72mNfQ1w3zuVntkxg4D5zqZEeX3NNzRgawRj2HNmRhdCDBUUivM7Ef1iB2CWP2afpCHERSzvLj844QFa",
  "key5": "45Z9iVXmkjFhnVG97A6jbHNFMned6ASChY3AYXG7xD1tPd4d6P9SD2ZChq6yFZp3YLmEtRdoJC5N8qeuWgMB84op",
  "key6": "3gRu9kWawv4XRp3g94HoA6G5tMGVgMrhbTVs8SQbL7AJMov5SjyoqNd2xzVkbJEm7GYJcxHxeRBP1vXC3ByfaFuJ",
  "key7": "6vvE8nQtyAyYnuGm35zpzxTiqp1h33ekTdELdyR1EKQ5YeneaBep8geMAtcL5WYwPuB6Se6WNSo5iCdYtNciZam",
  "key8": "3QEBu3u3jRxForfGUkmP8w8vZpXc9xpJ4PS9LQGVqfVX2RbZ2aTEGqGVpc5xuPn42K23Coymx9N7K6nLUisHv2To",
  "key9": "53PoSC8dC1Ea4ejYXuXCiWYgAm6WDKSTzFKC87TBGyUmmsuoSNHVYq7H8PUJBJuKoW1woQ3JFAQGVkpDVA69MPh7",
  "key10": "2ovhLWeBphYnnPvYokQcBmqMBSxrNo6PR9viHQ2bVeEhSrgrdCsnhXZNwZkHYqL6E9AeLGzm2Was3PsjpWJxXwoE",
  "key11": "3UuhCHiwMEBGP4pgaWgycrDtV33hMDgbccy5xreY4mWpBgnjSHbh4i5ueKdDZN7j6VV2bnEBik9efeuqbTY3V3As",
  "key12": "34a66Sk3AcBKaL6nrrGQq3U8s8gczfbKpeN6bd99ra4o7Z1Dgw1GhkS3BZJ11Bxhwr6qVBnddzNDQdqgKmk4NYJb",
  "key13": "3nLLihHKqj2VaJr1w8xyi38MGPNeXff6SXamRxXvgd9jBb5K3NshQHceixrdBACb82fXk1bJhgEAAJxc8seKD6Uv",
  "key14": "4zaqSd6Hmat3Gcqq1VdupMzYn2FT2GzXnvRTSv4oRwKH9LBLJeiJjAuMd19pcZY9X1rJ6N3xqcek6xMUfm86oXH",
  "key15": "3HHLz8K5cQjV8K21oR4U4tMCADy9gMdQmFZcdCNWhD6GJJEbwi6JRPSYhCb7t7efNKcb3EkJhYcbzkZ2FFABTzqL",
  "key16": "3LfTk5ANiomSq2TtSYtSRps41dEjSQ4CLo6EaXxHJZTPa3wwhweouoX8GLMEfCQg3pzkuKSsu8dvGo6W8J1nhmLh",
  "key17": "3m4NUf595uBUGeaivCTFFvtvNGmC4Equ8NoLg1tPbRkXer3ANFTNShwwUXEVHW6VDHEJNq1tsttC3hyduMtviLo",
  "key18": "27tPEWgPTxSFUPquiPYpZEUY2baUMwidpFb98ngkoZPT27kaSUEftcB46on8Yzjh23gRdZN85gYaErATjQJxhHf4",
  "key19": "4LSMDWP8T5bvQvuaWn5Qa8w8GwbU4kDnWcdJcEMkFQ3SGhtve7HLG3EXic62SJ6denL5PAanFVq16u544VhSvqzc",
  "key20": "5gNZrE2FmNXBJFCY1gVdgTsxSNccRqvvRqj8Vs5GTpRFFtVs87gcyPiXCyWPuzSN4gJxwQw8xgkLSxq2GzQtcJqu",
  "key21": "5pv2Kn4DcAkQy98fWCveUmYs9pvfudpRfJmvWchca3C3ExL4bS7AuAdKNr3y99rRE4WUAcDxjqSw6noJbgEF9mAz",
  "key22": "2ikNZQxHsQQkpoQVZP36oKVD7HrCjTJ6JcqxXq8r6dHKWr6Yx6Kp1iKjXVWDfF9ACivDJ94VkMpdAtonRjFkoZ9Z",
  "key23": "FnQt66ycRRDGZqUunACbktiBstAyn3zpmhWX9vmhtwrCKiL5WRKM9CfmRkmAexbmLk4VnyzSYmuN1fTsjiFykya",
  "key24": "2qhqGBjpwVFEAARkN15hLCq5W7dtE7ytqqqeKqDRQXXcTFHVXrvydq14w75EufNwzgstCo68h162fWXs185U7x4q",
  "key25": "39GNLU7U4HiJAcSkCeiM2eXT7SxZM1eJFq8n3z6bsCfgx59UY8FZvuAxYeToYqPLLjTxrVE2oEFsUqYBdChEVBfD",
  "key26": "2BT4Q64UMpukNEAsHwtqtJsxeE6BGzRfvQ2oq6Se3iRR4WxcgqArnr8GGJzLAKgi5URVNPmHc5MwhbC5AHCUXXYT",
  "key27": "2wWa8CctYhaXeQuQ4fpUynq78r1uLwPf7Ym5T3bmCeDu9LUtCX9r8MzAJMNNc9zjTLkyfTJF2GEUPKaBPym8fvQn",
  "key28": "RdrE8gnoQp5kY1gMDHem3JMe9yozggiToGaJCNbufPXtFHyyDFjHFPC56MygW852iHaUfssBe5fzk8UrP86oYUu",
  "key29": "3asnxaRtKeMvmhV2TCNsLbd1nirAdsNWLED9FHhUfCLNLGjnbkxRB1qLZ7swdAHz4M2gqM8pcuSgG1TLeroDCDvJ",
  "key30": "3G4ica6J4Qkmgo1E3y1LcTPxymygiwj26EKJZjRgZQGKgXGami8HsksZodYZeSFfkft3qjeAXsqo3PNjkeT6ecYx",
  "key31": "iJEXZcpFKKEa66JdcymqV4TGt2nUf8cya4refxHaPJfGz8kP3zCoME1ZNxfKB8tupVPHY1pg6bLhbvdSpZuSXqv",
  "key32": "314a5zv8cf5icWBv5Umdg11FBu4i9dn7k3NNYwdBrfYDtz96f4mWoqdM9bj4s5drcKsgoiuSXyc7odax8Rs1mbPR",
  "key33": "5qzDKsEo1K6JQWDYnZMx7wxZupxnJMeW2kbgHMcaNnZS8yaYAZfrdLNqkrsWj7FHrHfdHcaQf1p15ho7u8bPZriy",
  "key34": "51kswEnXxM3eLHgCS6ZstXyULZnt9tzeEKcpXhvC2UFYjRGzoPfgo79hvCXoydEZW9ShrrdBMg7oXzju5Hw5uhcS",
  "key35": "25t9w6ecQpVeDf3pfWqvgHRSn7TL6DU2U2YmepKYJE6cdQpv5Kahx3nk86TrBx6jdKcxxvYjgmtJEJRAcBDY6tRi",
  "key36": "4Nd4N9MyjnwaptmVPXGWeajMbFL38LoE5HC91WRJzmvHpLnsAGYKVfrApCoBzy4pvVemN5Tp3UNDdFaouviL5JhW",
  "key37": "2VMi8DsAj7HRagV2YrKUam2Lfpm227GMH9qXqVieSuTGBtEPqQXjqmTUtKf93Ana5sbGogJSSB5vsCsLrNhjhqWb"
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
