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
    "3sXR4Fw6G4Q29EAF1nkfuBwCwgGNmiNn5jdgrvTKbTKqeSStpZSij5p2aNyj8BzXuJ1kL5yVEmEq3qLozyZaCt3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBKh3vS793kzypycEpcjbaAfhmRueyEvCFsQQ5GrhstMJ7uMKVxMTMh3uVWMbvaBzbrs8nsWLinJS3GPs151crJ",
  "key1": "4krmkrYyoNFFKG7sqjNJhSqd1xoqseeMMd3ZG2xMAR617o2oueFd2Yk4hVCW5Xtxfnw6ovL4AxtfhfBHrzBd6LSq",
  "key2": "4mabJ5SA8rdUxp7qfoLVQjLRirZK9PVWbRozyuDtoxLqj8KvGJZ5479CPE9QNSHuEQQJo2FguwwfWxY3LqVnBYWq",
  "key3": "2sXrRw56eoc1n1SncfiUd5QuY9JfgQGSaqYAitRzrsguSQ2TYMHesntvithjTqyjdmmby3LNXyNxAW4TwiPmx3Sh",
  "key4": "4kBJSEpfzV1poA8xRremF7EmnGGjGwfj3mLHbcjSMB2UZc9tZF4STtRVw1mnRRXDsWhvskBRyLLAXzYqgBrT3V3R",
  "key5": "4g6wCUvaP9nhz1pq5vxdSnwS6Gpc2gDPGCCG3v6yzwYv65Qy3L333by36J4TmMK8LftSruJZQ9446e23ChPy4LJK",
  "key6": "4WXjDxvBk9csSzqzu8Qtq1FMLEzdxZV48BErhPhtVE9cmjiFeaXCV5N2qRVcPqgNpe9zMSX7JvB6BQ5CyTPt88Js",
  "key7": "2cdoSgGwPGKwkJ4iG7YyqJE8Hj2qWngs28npnJBz6eBSx2CeAPJuSg3rMmGzBr6y3kVcLWSukAvwbk6TwHJYViY9",
  "key8": "2s4JRRXJyNP3VAGELiZbUL1PPSQphYjViKnX8M6dn8W5BtEYjCAaGfqPv6m5JLhKsUtEcCZwdr3Wm6nbo3dZ13yR",
  "key9": "5c52uR1An7ZBqx3oB6JjWurwBL4MDV535j8MmombdscW87vktyGwB9iaC8y73A6Y4BrSN2NmtjJ1fMh1uHgpnzvx",
  "key10": "37xoJTfYDqWzkRLDaT6bsR8wGfSzygMHWJpoLBigyvDiMdLU6f2WgXykfyCUeQMdfBEoh9DBvzK7VRGVtECPkdM4",
  "key11": "53j6QJADBwun35Th1iJHQwbuia4haUcdqCxGPiXtXq6jNXa5NTPXgj1aoQRQV8u9d4KLyqHgh4cbMMgFUpYqNZ5t",
  "key12": "vQC9kx43GZF333TybFdo8NGnCETWXZ8XBvkEo5RkTMBdUL2i4yZ8UJPjeDG6UQ8k8B7A8Rk9w6PCY8gs7eSrtSY",
  "key13": "2Z9zattRoSSgMT1ssKzo3AG75Ji6tjMpKDCgaCiH1k31viHvwiKzWnXySPxdSqknaMsjEeJx5rVVjQLxZtZwQ1zk",
  "key14": "4oCrNb5LSGrBnZ2VvehUvoEG8NwYfRHnJ7rrSv2vTB1fRKyaQSse9d7WFXx22nZjWLwNrA4Ra7VEKuEpKMrKmzY6",
  "key15": "5w8YvBdnM3iqkFyJqc2CgVHyDsLTY3q9QkBUdvt4cyVQ8Rm7ScuSi6WnPJyb1y4J1mZDeKgkMcNyAXdJv2UyUG2c",
  "key16": "3EvKBgtXehBaUYPhTgmgRUGRiiTBMUsduv1JmNW6tBqxRDsXVqqrj1CxqVpWzZCmi8YKFZCeFY3YQ9x5y14Y4HEf",
  "key17": "3mWEwThiJ9M43UZ8sURGwwgrXmgiWeErhiLeR8haXsiDWvXCmfChy3GUnTwva5Dz8dxjL8yY4PWozS2uRrpN6UgJ",
  "key18": "4Uy8DueppxgyEztxZrejnUAYEJSCp7H2hJGjh37eCHbBFfNW1Arg4oHjKgmhhNYT1G4478xT3DJLdhELh8h326mn",
  "key19": "34oG7VK9NJy5Y4jZNQbzuQj5hCE4Cqd2vv9hgnSbjrbAceUYwZE1GSVJxFKezkjBiaFGdYGArT6YVD1rP9RjudXj",
  "key20": "5LPXhdpnKQffknhgmcYbSZjYiffTDeGcCnC1JnVPysXAchDzLUJJxiH496cCq9vLJ1JUtDVdaWmRw5d3N3QNcegi",
  "key21": "4MjbVZMHySsbkRLLoMNHcghHM6efmz6MjaNHAcAzrYiz6H8vvqbMfcyej2PJquwVHe93mp7RhffQN4xiSrBFxEaB",
  "key22": "UposDhjWk43VGtm5kbRZSovgJGtgkBvny56mLosXaymZkddtX7AwaLXUW2RpTvc8oTkiTTdbKcFFp3JbdDFhAnX",
  "key23": "3z7iuXDSj3Wb1iYzzHXMuurDybm1NmnjyuyxvhSDAKJ6AjmWjGVUhpZtQSotArCfVMViman8pydR7P3oFGfjmPQx",
  "key24": "US31fQKdZDZhL8zcfuE8tuVsXhrCqQZnD1321Ah1Ypym1Qnnarvdb6svGcdUPbXDCvsyVyF57aYvQ9Y5wBnTQRR",
  "key25": "bo6wYccjdXqofmrZThoJ935Fwo4nkk3Q1GsBUbsy3W3yQQmWC928RN9mwV3Q1452aKzQic6bDHfbZwUV2aH1fvS",
  "key26": "dtwjFzmymzHsxb8HvURVfMk8G8hwvejrfkvubSmd2zfM9oN4yN1p9LtcTQPLzmi8ZNQViEiqHffaRZ69x1YEggj",
  "key27": "2xpdbmP8fjPHfDVo7Asoc1K2ggoBqK2NEb54J97dxSm9ToJQdE6qzBae7Si2yLQqwSKpfDyENuYk5td6cbXLsguR",
  "key28": "2dLP3LYUqabAfMSon6y2y3ksKcBJdvn8uPah1SMcqL8HSvRRtBRbFxU9gQuDqatC7qZr8cCdFXGCRA5ijtaE7DAh",
  "key29": "5iBnVLhfThJmxNcQYiMQ6tzErYVNis4L9M53avPnRGswdjoZ7miGgbqcMWfccLq71rRuhkyXnVoJfDuiNK3bSyMU",
  "key30": "3GxTHRhrp64bpVHWZ18LtHavQbe3tLihnb7UzgqwCfqjsZ6YpN9933vD3RHXzFJAQmwRn4oPXBYnXCCnJb25okDT",
  "key31": "edpXSzrPvRuEEFKT66DYoe1yMkuo5CQNNredmS1qCP178VytExoCkWagL7qVrP4u5mCUNup4fcBiKwfD7wZuYcP",
  "key32": "3Ts69H3LbeAZJEiCLMMfoBD9cgoD7FSJzpcR6EVUxahHAYiyShaWE5xbU4XK1JVmgPGEdKuf1UobigySQ4W6EtHv",
  "key33": "56YMx5EE9ujwqACbz7eyEJMUV73G5q5r3WxwgGC1TbSQqAoLbyagkuv9HgLBdBccKM3BFyCxcWkiginA6K8fF4rJ",
  "key34": "f5Z8yNvTYrHj3DkUmY92dKvmqLbUevDtZvhLQfuS5mi1vbxW5tJNJgf7QPZVAckENPD74HjwV4xE3DYp4oLcQTN",
  "key35": "2PX8GdPp7oZf85cJWp8GKjKKR7RWAqzrwQaPa1BA3hGgBRJB7yy3BqWWkrwUwUbNfcdg6oxh6YvT7VE8QGVHHVUY",
  "key36": "2rHtXLFAJwhiaDMg4gArfGSEwBh8o8x2rgb1SoEY1B9gMKYr7i86JJuHECo7r5mhFb32zdEoSHh6vhrRJetFY1cW",
  "key37": "xMFV9zHAhFmWNNB3LEiUrNPy33r1uzPzVGHPzkhV7uVwoQyUHwZok3AZMC2xTfLorWda6EcWoS5EsZTAUUFJNEQ",
  "key38": "2NziyHsxgjXYFsQvkZrtWfAF65k1xvqq6Ti7PKTkRG8upqcidsXRKMy3EZau5juuPqHRWXCcbcZvwmdeEUzZmKyr",
  "key39": "2HgzthNmpwfNbGjTeAo8gdAePz9AZ6S4GiTEv2YGfLNhLzKaJ4B79eJUuYZ6J7acz4Te74nAkmPeQrvMXzujYJXu",
  "key40": "4csd9ARZFF783oBQgngWAmAxAQBgR7fbhiWddPe1yBuy1jCgxPskVMM5cQ3VAGctpYeJeTfm9fNjjh3qeqFQumnr",
  "key41": "4pRWWVU2ZZ92uciUeJde2kbaHnSFaZubxPbgfTPgj33g1krM2gTmrVS7ym5FstC7DMdao23r43Mo9PuotokTmoHg",
  "key42": "54xmcehufQiY65TYwixFyZS5CoQYhCpwHb4Xmog3xJ9E2f2vkxUdpnoFWHBTepnAqMZUBQt7nThtKTW1r3foYp3",
  "key43": "44ELx4i7PvsTJeSqLeREreChCfUHwupzuMjFhsv9E7r5DutGNj6DhXeGZvqsWJj4QCYroKPravQjeKedcSRVeGxr"
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
