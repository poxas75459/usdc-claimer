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
    "2BD9TPTbVzdCX8BANqJCki3rkVXbUXtUpucYtGugswxqSYuAwpWNYgCj1KMbKC4TUbBJYs8srjffhE5U28tkpE2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3amrvYRWY3xNmpRTHzu9Y4y1awJ2h1n1eVWqoqyutH5a3uombYpaqhbwNamcy65iNiTBRtfWr5YaysvDXbgvDmtQ",
  "key1": "49Q5f3cngSNmxuv9fwrbE73EQo8N285BxqbJRs8wdefKsCNKw1G33BrWFbKKnirhSrNMeXJtqtyTGr3JPrJ41dKU",
  "key2": "48ZwybB67G4gbbQqUiTQfu3TgojU7txWTbwKpcNZyKSM5yGmji4h1rdYgXhuQB1THhuMXaKTJv1EJFvVmrcLvYGd",
  "key3": "2iYDwNV47UfkuAYwkYmML27xrpLd3uCNNNcf8R9u5919TjDQ76dPr9RYTutAdUbmmBDNT14WAnN89QcCryjsEsf",
  "key4": "3KVK3LKpc9MbNHDGorZKhZVEqx3XEpAMNxSLv3DKnJd3KqnDy1jYr8sEenfww2J7SPeCDLgR1qCnYELxUJyeARji",
  "key5": "3x5CErfTVpk1ATshnRcccd3j6HaQpaTjDwm76pjAaMNgTrP1EdhVRBTCd4JBsBcyVgqiKmAQ1tYamxq54GxJ765T",
  "key6": "3Ygd5ek5rrWFfYoVv7tSFzo5VQBUc7mqt4czJ2RszHizJ99ZVzbMbfxcA3akKTHwXrES5dBdT1RMs25HaCV5U3bE",
  "key7": "2iS6Ai98McBvG4j8zskGFGvNsdwCCdqJ8XgNCsCh3PuEZDhx5ZvD3vJGYgFVCjt2vrfxQZASvHLaGMeXuQDKZBFr",
  "key8": "5RsHNFotowi4BSmGkHwVKSSJU49m6oVhtCKQrE7odrfqe2KQcWLc2R76ExYRuyZDgL3KfQdwRaNWpsVdjuj8voUp",
  "key9": "gxarahSsgmWkVbBsxw2fZv3eGvtdnEwDUTLYu2gm29hzXgConwSt7nsLfeeKhxXwLiMSvoWkvM8pcqN2BEFbfw1",
  "key10": "4DGnCnLEVfrhkwHNWLMMU1D2SPs3ByVxXenKkmf3c1QLgQbUdUwWTjS1jLpwDjqiUWNdymREe8ws7BifgKLqzPJm",
  "key11": "mRKRoCBfVHAu5EHGmUF1UqDqZfJtcMP2GSpHAZp8HXmKJ5eb5Ukn9nc2vR1UDE1yStAsC5pYvF3jw66SVaxxpaV",
  "key12": "3w2f6yK1k8tYFWoRb8uBPb3P4eF6iTueZvghnUwc7YTDD1L3J8EbNexCccqLGqZPkxVUoLmhr1cFsQ4dC8yRC9gx",
  "key13": "32iKtiUfuBTMcKyEVh3yXpqpYQ73aC1rGjaE3N5FG8KjbsL13Cd8NLqgP2eYbx8Gv2bQ3HPRv187qT1zVoTR2hLG",
  "key14": "5tJiFAeSJTQFWemGiRZCuTG8S85GPc1dL9B13bfNAEJ7jnLNRLYrdEhDr992PEEX5GfPRzsnA6iZfNeAeKxA8MEW",
  "key15": "3cUv7H3LMaqnPJ1YDSFAsn9pc38QSo7WaCVmKqfkTTMT88aj2FsXkwoDzX9cMZmFJ1ciWia3Rbf8XVQuAPGhX7sK",
  "key16": "2JrhkWMkASqhs3bbn3eenMxdB8n9Sm4uEveoGc2776eRFqsWK9XDSchwdFQobadLBhJ3uxss4N2nBPYvyuJTckeE",
  "key17": "EGqonwgBSPdqqdVD1rrcFp77Ts3TmyU4h5HVDpvdr6GN6UWwBGEpuqtGo22yCZrFgcRoEYCLtFFcFmnEqskywMQ",
  "key18": "5vATfKUj3DFSs2aJri5CS9myx13gSdqyhDuKcsyTNWUSGtdwXpKWEsxwnWwisBt3Gk2NSgjqSHLiiV3HqHB6R9HQ",
  "key19": "2mRj6SJanM4XszJtVDd8KjBiGytQGk7rZMfVPgLbATEYEkMrMGMp9BUbHrMo8mwhhVC6oeHYfcdUbECZsFwm5vNK",
  "key20": "3FVDqGzXjmwwcVTxJSND7CXy75BSttXdreaT3W3qQBNFbTSyBobbtxBwzUb9NbVoZXUQ9UGA4v5UiQsR9hrbdKCS",
  "key21": "5Am5SxyDfWLMUWxAtAf18iMbwxohDvquenAu1gQyWiLD5iysC6pTbcyMTdPswBL2thkjE1kY4Mev37iMKptXfvCd",
  "key22": "5VhJ7EyikU52evTcLi3QjGbxvwVHFZUqe6tuS9ZwF6XaKoB1krvvDJ4bcBCgiFmvSuoDzPwU3poAWsqGwJqdZmF2",
  "key23": "ryABxJW18jGLYWZQaRmzmyVr1R9GidV5Y9pLRKnTyNJ8Pv77pQiDMt7Xw5HDcj2TrqYchCL5FeJkDBUJvQy6Dhd",
  "key24": "2isbZmsBrbZsQ9KoxFGi25H2fT9Wn5Zv117XJ4Q7VUevzbCVZt7mwYnFRMVLN9a4PDEgPrGWkehnSbr1ZWPM6bv",
  "key25": "7ERrNC6u7pzWxahxY1QoEjLK97C3rS2qKeMU418Z3bbwEGcvXTmP4zLQNfADQkZyujduDNNWLfCnrLcvrSh36Q8",
  "key26": "2VdxMGYZyQsr8eSMjDzMz1c3G47W4CSZyH5mpapoaLH2pqK1FNv4UbTsYrCRcrCgeG8HUrpLRLCYjmxM91aMnXmg",
  "key27": "4ES9TCAe9UFeHakWdrFuvsMcDBM5Xn9nhkiQLqPmzQYBg5wS4DpjHpGN5aD4ZpLAr46LTPyeyMXqzkEoYQAaivio",
  "key28": "2c45hB9TvWwcvHHk3tYMKWRqHZJwpvCLE4rDnYXYq1PACHm9VAgnaTj4cw7d5CYDxfJ94n8EiZhDBVCgdSF8tuJ6",
  "key29": "RmuiCNNQ1RaG3UHm5Q978TjqyaYfxaRZuQPUenHiSEQpshuZP93wifC49fn2gxcjS7M41pXzXgevqfVkPcMM6dE",
  "key30": "2Wremoj4Rkf5DDNd3yZ5PQ5psT1ZVgeaBAwpmVdPDMSHeAW9XzFgR2hYfkdo7td5fqC6VLy7BhVyn5VKhcLsfhbs",
  "key31": "3uRxm357YGCRoc4YeTNgegGE9SvhxbzwoQFxKfNrTPoryH646zmR3h1fuKvjTv6AscDQ97vjXJwB5ynjUdcQ4yFJ",
  "key32": "2UuD3UQ24Dq6uZe79Jc8FouDSEjD6StZGxc2Q9SuuTY5JnnDfwLzjBPmCNE9LzdARAd2rLE2PDDXCZjzXNgmbUUP",
  "key33": "2VtChk2t23ERqRN87Q5VatEWGPXdgkc4qhgEFeVGxzVdfcC2NZAJsejhko1PCKb3ucHnmbRBR8m54gRXydrAZABW",
  "key34": "HHkwwJvuoT5FpwR65ZoUKvxEfWeedwHUuQQ8bvh2zhqdwvvtbbojthbTVyWf9PBXVMbxMLGLPrXmhzQEYHdS3xE",
  "key35": "2tKUgrCN2qTsFwgJ1eqnSx3bdXKHQF9wUgkPeGssZezVbM2ZYKkLT44hrhsT6sKKgmFzGZNZWxq4X6vbnoM3grDE",
  "key36": "5ajZuC8tSLgrqmGnLKReU5b9BAiQ3sYSvWiExt6x8hpSQoCcjRyh9xjbFTn7icaq3b6UuL4bmkQ4SGSs5kS58gYd",
  "key37": "48r458TZf1SuJ181xxhazmK8Hk3L9C2Vsh1SCpbQtEdCERpe1Zb4Es6n2D4v6Yxk2d3mh1eJqyyAkTjx8cwbQo8g",
  "key38": "4MMgAug5D5Uj2Vdw7ErMwJYaW9925TfNvXsGdiTEYGHRm4HS5UuWFj7HiWTfCBe3eKW3jT1BW2umqbd125d8qHMp",
  "key39": "2nx4Zq7u56MMaQxoxsKJYKBVPVztBJsHGKfT7GreKbPStXgE7Pdtf9s5Mwd6aLR2gW6dJYL3EbTJdZxUHcA1WANs",
  "key40": "4NYHCYfpVaSniFKmabQFjudjy8XPdkp9qc8Zgcp2foCGrzf4jXZZe3J8fiM1WKVz1pXHSdZVD32rESd8KmtKrPaM",
  "key41": "4v9eDqcYm4G4VpbfaNznLvLeaduVmfzn2dtn82Yjyn3VUxuavySQW4NDKDZCZjXPZ6dkYMFkhFdyzGu8sN2BJ4GB",
  "key42": "vB7V68as2YepXaWEaodTz61LvGZQ5rcV3aLvcnAC94yR59bmrDmRbR7H1CveZKs7v13MS52SE4AZHDCsQNxiArt",
  "key43": "3gtbrmsws8JbhMYS5mE7UtAYH7yaf1a69MimhSr7ELhHA9hwGcwCMEeXtCvnPtsxDkrHG58R1hMxGwiA1E7V3F6J",
  "key44": "ZnrDG88ubUFo6UUezS8zVFkFPe4NXeE3TCxAD1M3y4hS8ZM4fPoe26BuK19CM6Ji5uEokZvQsA2afPRmwPnt5Ck"
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
