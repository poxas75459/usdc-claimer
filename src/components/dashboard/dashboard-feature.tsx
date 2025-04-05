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
    "2f9n7CrD4oMGnXXTkTJSkgQqus3nTTijs4PaD5XZTrm9yy4BVkJC1DTKyBB3Zy4pDaWBJ75y5w839XzPpHCq8eYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqSbSKXvSKsnUVCHWuGNzquvcUAYwMuJmdpGhN8XN5WNd345hVNvM4v2W4zctSuth5tmjbJD3SL8pBFDDyE7oTR",
  "key1": "LbVm1xhZeES6Cog39wA5XYiJRnhKSfV2VK6XVurgXwfLW4afwrYnUB2tWA4uDCRydWG2fos8p4hYCNBVjJJxHsQ",
  "key2": "2bVgr9arMgmKjSo6wuuWeF5q1GBKb1hgeixPJzwLJXygdDrhHkbznHk2sa5CyMCgTT2u5wu2DaEaNC2tpsGHagKN",
  "key3": "4Ed1kiUKajtjxwdw47Kphz2inyepiG9uzVkhQ7DVyQ92GWmEsVecb2ApxhGmDwNspg6u4cSb4Q9QmSCHcFNCTTLJ",
  "key4": "4S5sGwceCmFvzWGqwGEMbW2hfbHr7cDCtJqcpJWzaGbNT1sxeYbBScd1VAdKPpKT6RcJQomYnJcn8Pnpw4FPizxx",
  "key5": "4duuRj9e51WLBsx6A79avT8Vbae5RVKedSN7BzVkkuJEBTzWTd1eNkAFx5LCaqWSjPmM5uoSaSveAa3Xr81iDhtY",
  "key6": "4kHK9XXDfnh8aiv1YLH8t9yxJBie8yw5sXkZ4NqtTBtHFZMZRfzJep7eiBbSdeY73yWFfcWGvrfjNtVJWje33A6R",
  "key7": "22dWquc3h3jUYnUyHtvHKd3JBSRGZSsfgWqCJ4Li1fEsvfKwoyxFvEyeB1GyiS52gv2od6k4dh9McQosgrYRW8TU",
  "key8": "FLd1Ja2S6EExt68ZyoeDMbBN7KhgAZuk9H66vmmL7BfUPmmTgHrrdqk5G5ecXPVFj9eyqW8A2vhCWkSmBvgwXVs",
  "key9": "5BNWKQskme9E2FUsLUTuQWM2R5C1sgQe8bXA5SQMNtnDAX93iofnjR5bTnqrCh1sRazQS4t7dMqf52wGePgWV3ee",
  "key10": "3bj8Zjr5rsN4t1cfyqinj4Hj4Mkr7sDqB2uaMg4yEs2N7buL6vSoMx1fghTFwAg2eVRcaXJ9qEbNRkBwtHPRuQgq",
  "key11": "2A3kf9347BuJxgcNUKfvtLM7TqxqnkukvTSnjzxhzHsn1Fx2W8nn3s2TrNgv5R122ky1rgNi9HcDXrD99zXQq2c2",
  "key12": "4BC1QXTaWvQpry4pZGux1FSh5gM96S4J8xqqrA6ZMcBZLipsvmJ1F18cCkpAMgDfzj9jyLNJc6vcFL7QucPUB8EV",
  "key13": "3cevTn3WzzaXAXGsbos6puuuAGXRVdLvwCuBR8F2TG5GdJbkCLGFN3Qz4mGb4XFpu5g62VLc5AHxVzszUbnhBmPc",
  "key14": "5PyfJLtCvpiub3Vsq1KgGGYQmhWqXQZZJbqX8p2PVxkQJc5jNvko8a5gMDVXW7WTp7wHgx6aBya8oPK3qCcoMqEX",
  "key15": "aQAKnE7Er2CzLuocWsaQjdy2t57pWdXM8rccCGoYMssZCQNWgbxwTokvUDpruSkvuXS4DdhjVpyhmsbXLV6wtXH",
  "key16": "4tVvxq8Dv8kMHuAABch2razvAmaCUxKv2hbR2s4APVMXA2B8rdnEvABRAoAgTgDAmwjNapzVEn8BWuehmkFZtGZQ",
  "key17": "2PtHLNgtwqJMG5TNuq7U7Uz6ZyB2FFxxYYveBH9TgUfW3fJhkwzAXqLHAxKCD3rY2wwbCeHHTz3BwFvkAzgEuua3",
  "key18": "5DK7w4MdmcdcVa1zr9LaZy6H68JY53Lk1WjFmK8JTQC9dYR8stXRQ6vfswHX1Dfwk8YSECwcfSpkw2hEUjAZJaGc",
  "key19": "2uorWyjFTfUiJopCUDMQiDKx3SKPqFZNhAXaSoJThQL4rk4FefUr8RHGkptibtKQsbEJQmAA3waFupoEVcGf6Cnk",
  "key20": "5iSbFB71b2Q4d3PUsiWhRk9kLLb1cJTzFuZUxxQasX9wCBbzsbfc2RvDy2PVyiabBCu18Mh2ywvALNkd7MR3q22G",
  "key21": "4UkA9mjZTBa8QuTHG8ZbUQt8QuYPmZUrTV9QHVfDdutQdJiYezpYafiSmjcxAcrsWcKB6Woavhh5TF4M92f58oG8",
  "key22": "5ZxJUwfRuYTDo4RqYnsFTE4tesAuBQZ2U2rabeGPsabGXyWpLgEjheEhNLaVFaA8z3kYnhhvstVK3hJk5JLFr8Rw",
  "key23": "466grUAxJ9c1xqsCiQXXLfoboTD2ZgQ2ARYUsyx8zcEXGeiagEU5RbWbCUkPxEk6a1HfvyKmCKetUSk4W2YpZ8Qo",
  "key24": "679JjGss5f3c3CByBrRd77KdHV5GmGiAuAnh6sdBdiXyUj2V2RMw1TpnveNkJEMUAZa9g1q46Q8r6Y7vjBE8kFeJ",
  "key25": "4amJ9H1odhNa1iUhwk4TaJCAAgRGoEwgdA2W491Vo7Kjg7wE4odiNGwynbmM7e6YCR5u4UMngHSQEGP6hLj8vQ7v",
  "key26": "2UeN7DCKd7kRTheMcDA7iekQtb1fNTUsDx1PGgXq1skqF6P7neWCLjPUa6pjyjkzP8G4ZqUSXrmeMpUwArmNHPi4",
  "key27": "qFjt8UVPhiJzucp9tvqg6PdUeTcb64BpHnjmcWEwGhgVX74xAdMCofWnPTjRheueNGoHK1Pagk1xTdhHDs6uo5E",
  "key28": "jTrFoBRehmZbntpbybzvfpmRXr4iF3TxLt38LiRoSJXqTAb1Mrnrhp3UcyKjgB4oqnNAc52UoQ3DbSKKqKKtvw9",
  "key29": "2hH6Jqq6G7qTX6TtQvXHG14FKcvygbzEqeEja1UvisU8zSSipahK2yMqLBGJKpPwNLKYmWJS1kFtRrWrbeeu419H",
  "key30": "57vkDuqLnYkUHsrBmQ7LNLr26RXZcNNMSaeBszHZxwqP4kdjMtVYesNaMKxvJHFKJK7JzyjnY1zNW75hSoeTE15k",
  "key31": "3PpPHwNd6CDpP1LaakzH59Wy3fsso5PuMGExouCFHMQhxyiW2CXm2CwULBPaCcrTZhJfHJ8SEsRodRqFWbh32ugJ",
  "key32": "3E167KDm9GUD2Cke74deh5wCf8Cmr8Fm7uMeRpBGgTKcL6qiG7oNgtQ5udfqeUkp438WzEGTgw7rE17tnTn4tZwJ",
  "key33": "4pcK1cP2pdei8cXr1g26P3YSLQgrUaqz53rcWQd2wkdnFzpo4ad2bajUEDNs6gJFcC6zgoj4Nt9EtvySr8L8HeSP",
  "key34": "2nRQWw9udqeS4Ms8MEbYwHVzTpteND3mS8hWziF9Q3to9vinDngcgEpqcczvYKUXpnkJ6A3XHzj6efgMpXDwdYTH",
  "key35": "47K8PSHxiXVckaRSe5GzJ4p4JL8FUKLKmNZTnbcPpaANkRFVmDw28LJ5b6DnQCdrR4dWYP9XDJPKFGryE4axUocr",
  "key36": "3Q8czHNUFt4YGVxemtd1W9apH6L9jmu6jCquUqhWjbCMT6HYuQVPtswjGPkPwvAVZookzVCMJw7Fxj2fRnPzHyCV",
  "key37": "cw85FCM3LU3gfMDKmF9R1MQHedyZrtLjMhzz2MSsoqP7mdChtTgLQyQU7dsvApnCYXHFKBdD4e1S3w1c3AHL4cD",
  "key38": "3yNh7BgsSQe7s9EoHCK3orW7ac9o2ZpFjTaD9NfJYpi8HzVZ8Mn3yNdPQaKVUPeVx6MqELESKfhnrtwTgHwpSaf5",
  "key39": "3YLMfn3M5et9uHwJqZZLsMZNaZgf9GkAmnMY9kv1wLVYaqVYtEcxmZERVZKLHQ9yPU2n5DdeVr15mtKvcPXCBKC3",
  "key40": "5svF8p2oYmHk34sRK4K1whB3az5JGXNPD4qb1GRavvqBh9L4MsANiHB7zdqQTs9assHxJjgQcE2EoCu2xChM1UDS",
  "key41": "CL6Y98XD1miZxdzJYPsZxjsxnF7F88EqbiVLWKVSJLUTUSaZk25FcWJJdThxQ5jSW9Wv3WdNWaG3fhJ9Q9QDyCb",
  "key42": "3Q5qEx38wPyqknHQwcpJs9xTe9x8UTR4J76EXGwAkLp7tgp78Bkn28w4Q4LXXHTpgf9Btq9KfT13i4okHmf5S5fG",
  "key43": "3bu97HXzSGWpmTn4rtAxhPc3zeVbGeu3QutV649kBSJsh31epUPbswsdKsspkAEiCTmnjTQy7MyoGeMerdYFbAHp",
  "key44": "2HfrvgSY3F5iyJy8xrJKdNoVrU33yXRQPe7SHnSDCtJBdxxEDJNhcGFjyBrZeS3YoXC9qmvq3iG8MBAUYr4NfwJ6",
  "key45": "gqbmJcs1aCusxzdNEViPn2UEjEfph6hHKuXksYvbNxuwgJxAnfzoYprL3QALzf1AipSYRBuCf2xyBnte2DD3scJ"
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
