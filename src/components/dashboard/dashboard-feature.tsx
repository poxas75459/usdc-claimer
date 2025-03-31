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
    "5LzuT3QML5yi2tqTj1h6tRaLG4yEE3yViK7qZk913h2ft9DtUbXE1E2x3YD3im4qBoP2inUCCBPU347rAJN6Y5J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7W9yaMyR3uxQsh8u1BsrjdX8kvyt4DHDmFqZdzESFJ2zuBTVERP7ULZsHoBPYUmUfsZRn3sV9ntwJKy1cnBa3Y",
  "key1": "44oCozdfxjtZG9uytKExAhrYzffGNAhsPHbM1JKb56VDpu98WGcxW7nKkcmyQ2nWj1kkjUBtcEmzwNdXtS8FhAk9",
  "key2": "5UtT5yRMsCMnh8XxnzywvUk73C45XmhagK7hGh4bu6A4RPn2MgVTZfVsctsMRLAM8GhUDsrAkLiZuRTq2uwLeGrm",
  "key3": "5j5SR3q17URbZwrxhXzjymJKMU9os8dLpNzQ6jQjNwEvK7GCo1g9eqwaDMdipLXYtT1L8b8WMGyvYZQTEez6AFmD",
  "key4": "32doeCcTSbBbVQY78wD3x7gX3rjajFcBhJKdTMc4XogA653LasrddtiJNMBmbiw7jcqmLBeuA9BGsXthJNgb8ZZA",
  "key5": "63YcvMfLUXAFXQPxEQbnX2NVeduBry7d1XbqmhaaBZbKZRmNmnXmSN9jyVEw4x6Cu788Ko5PSuB5euS8Z11PBheQ",
  "key6": "bEJMq6c3dRFHD8j18RpbnTCY9FU1gLPm5egW48jzAXi3MocXPbtJjJB1STc8KSVDfhqtjM1jJtvodJSFuBwK5qj",
  "key7": "5vMvt7C8mcdVp1U2Pw4FKPkgd3Wp853WpGLhibLN36ATsg6DL4aa9hSrHDj5J4xNjoQeYyFv7naBMwfhbHuVuQAt",
  "key8": "3XVnjsQhAdvsYg7xAKbnWqDAi26MVLFfG1nohCge1CuXgTZ44kMrdxzReZf4Vtm2Cmi2FuVzAPiEe9ZLFtqk9kLb",
  "key9": "5hawk42VZ9o9nDVjetoBnPA2jFrvuPoUDtLD8sELg8BjzZjG3NK51f8t1q9mEmAx45fXYk7xr26rTuuC4zxpE2Bn",
  "key10": "2JnDSNMVc3uF5VRZr1bZQTRtuZ1ATWnc3qVRDm7tb9DSs5ZtL5xdEB3r3tjXomVb9yPPLUPp1Egw7BcuxM2nntja",
  "key11": "2GHf18RQi7wSQMfaVrMKNCYkGPM7JekG1hKSaKzG7xZ8kt2G3BuKc956ybyy8a4SXcLGhmc84WaPXM5sEuHYNvPK",
  "key12": "3HguCqyxtVpgYPKfZ85zJiAUmyvHwfS9U2JbPChELiz7tKRtLpHvF5q8NzqUtLDi86JkQZ78MwoTpACgoHZF7rsx",
  "key13": "2x8NKhJ1RfvTZaXkm7AVdckKGvYo5N9cTwBdW4jMDPntbyBzW37GfaKAwWoDPafpVsJtpUyCurbdiM7wYBVywTJA",
  "key14": "2f8aJVgVfwbn9W9XQqvssTSa764CyHK65eE8YqoAH5rjjcDSSQvVG2CC4QruWsMAmHEgYVztVszatgxygAgLcqpR",
  "key15": "4ZkQZZHJcrk1VFfTXzosTA8Ara64xZgbSYfHFm1jT4249m1aMMm2KEvvWpmnwULK7LbQxbTyFk9iVuRqKnWcvS4b",
  "key16": "45A5WPTnXUZh5yHF5PKc8m8KPDoxSjNaCjaVSrDahPGXktFB4ygd1f7UQXm6afDXYK4f82CpoptTQaqUKt6syA6p",
  "key17": "5EVoKsFboC4XPtvMEmAJdHxH4TiYe1h6RBwWCurHPGx9N3j4ghB5DVFRGfYxZkntG1eUdEnQh25CJYH9GtTBeR8c",
  "key18": "4ydS9KdRGY8tUfYB6Du6mKT4bHkPSii3dtn4TkjHpiaGknzr8gGLzSECJPCLpVjW44nGvqq6XW2arSj86F6qhD1N",
  "key19": "5EgEZ7fD3sxDZ5Qu3bGhXEPcgh3xzMKkZtvhHz8X36wMx6x16Mvx1pLujV9tnCAgscUGnQzv2HrserCzKe3kWw2Q",
  "key20": "3kLkgA6z75Mz6ZCV8qrSVSrb8DkqRsGBwfR18sq6zk5g7fvjkoHgbiUyTFcaz36Bz5Hb1FdMTMuzjdnaRQhCCgfi",
  "key21": "2CaHBjD7Smiy9DJquU2KLFpuvmDDW81oNjs8Z62tES5svrDrWoGj1PcNHEBgiUrSeRY5Wn5HWtST92uo76qDK2gM",
  "key22": "3Ec2XaQcLdGM8XBskBrvhEuPYu6go4TgMRkPtX2uBN4JyeYRH8g5wyQYodSXtGdtYVZW9W2PMwdYnpnAg1A4WiKW",
  "key23": "5PKFXCJtuFEq4S5PUyCc9pRtk5Vg2rhP8tiTYoXRhyUVunmUaqLM7UoKf8dWBNkBSsTwKZhjvYF4CFarbm9K3dT8",
  "key24": "46b2v6aLKuLFULnvxwzkNyB5Laf6HtKL4fWbPsTHMNwihSkpguVZZDAPpP6ugy2PBCcZWV8hGVd3AgyGHrMn1kRw",
  "key25": "4mLRN3c8xbD132wqxnbcNk9YyJUieYDc1htcTD57pDZiAbxHaWSvjNpM1RusGGp1SxZ2N5F1j5wGQDQcfgrBCZVZ",
  "key26": "4B9oDZTrzrQJwnm7mrWnDizmFGA2ZfyHhfj6HF2JZnZPgW85fYXBj4vXJx6bw2pgGzaLWe9VCZZGNasFcXgYSLhB",
  "key27": "2rE6jyPVCDWfi6g6nfFsUpgp5hVFXNf64MxTAWd1zZtAtybivXGKhHd5j8EYRCFfRfhDw1ogVH3bsPRYfbdRGgNS",
  "key28": "qtvRWnsfCSMaYzdoukZcHLoxAjLzjB9Y6Xtx4nmdCttsXGKNZdzfNqs3gYU26jD8JFsqJghrpuJ4bynv9mmjHjR",
  "key29": "27U6AYsto5179VHrMi1QJ6qPgRkRMjdgre67rzR4aHqTV3VyuRwBjRtD2vyotByYMnr2houDSWXXzFpRUyrrVPwV",
  "key30": "4ySCEwh6fBP6nBtKXVwbhaU2PG912cfJ4NgUYFct5CcU9yaP61K5BmhWzbfFx4eWHL683V2canrVD3Dpx6v18DJb",
  "key31": "2FBNAiL3BTYyWzmuEWNy3ZUjHcmiEp4z1gJxk76gazV3398r5DUvQdyUYBBSSCUTwHhqE8f9uN1TZtxx3Ctsvi8p",
  "key32": "31J2d2rDTEu5BFMwHJmRxJi6K7hUFwcuznCQbLnxbjaNF7iC7Td3LkHX5iF8q5J8Fe8bwvBGEzAtdxfAGnYxfNp4",
  "key33": "42bd15A23pvRCPmmW1g9XmUEwoSCNzLTFkUDpsWDieJjxJMuSi9FjDUf8HmueimtGBQnKzyiC87oAd859zGh3QAH",
  "key34": "JX52j4FB3BDS9s3FFkFuqZ6Ywh4LtgUvqv4GnYzFt8AYomjEcf9gr4U19Ko47bFZiN2gBtZYCa56FeSzxKcppKJ",
  "key35": "2J5dvu59z4VFABM4nT9D24tfcY7i7ZAKDtaxnKrHi3CLnRa2grQWTRFEcD5jHNB7mSmygtmNxAxXRvfA5TGnZ7sD",
  "key36": "rQQDpkWtxUYrC8KX9kti5k9ZmTvDNfxRAPAmo6PRrwLx289JPgyYTLAaVMg1m6Ky7pD4zsdCPWskvXeQYaWxFdE",
  "key37": "59LkQzsbYTbYgfRxGvtbSBfXtmu38sRLcgEhoznddUm9AEu5ywGWbpThAhZvYNGXwzRZvZ2UmusKfZgGks5K1bc2",
  "key38": "dqSddBcJw6dhdoFyd1zKfFvKt2jvagLtgmyzRCc1qhCQAEz8oTeFgbwxEvcgQrt7yc6TdQbJ3fenrZGwbRNEdET",
  "key39": "2NvNnHRjTb5vfeuQpftvkrQpXt1rmfHTbuwmsSRZZUdYAtDiDetGoDP7Q6bh64WAYEa8etwQt7TTod8K9zTpJ8oE",
  "key40": "heNWmNKyYgXhJE3MJzv4vVeCnqn9ML4oSdHvJ98sWfzMvrqbVL3dkcfC4bBZun8oukABHJMiuQesbnXBY2eREqT",
  "key41": "hsDa2JZteSyAe9iRAskb5c5Zz6paoq9CrmJBRjTniWpDbVpUnR6NJXJiFwELokVFyTTm3ANNxBzSdVDqCb2y62Y",
  "key42": "2sqZk2VCH2T2FKwuM4EcpcqiZB76R1HAvG3cKuSNfKVJK75FkMYRyQ4CMTjMkrNeUU6RqDN5BVepTKmzreZGEKYW"
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
