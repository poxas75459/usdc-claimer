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
    "3o4WoewS1orBb278TpzmDyi8WBqxVejUFa1MXwMR2wUc5MYDEmEzp3htD7PgQbk1cDVPtFjp8psvUN6mcF8Y631i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8prHSXksakKAyMqiqSZ7zJ46nfg6rNduTL2X6iMEjNvA54KgH43tr7HsckM2V4mLru4Xsw4Q7igtHVySVV2yin",
  "key1": "Q63fPvYxNswxPVVwzSFMgZmsZ1B4frYeucdvamjFVmEcU4syZvdStnoTVF8qaaNW8gVEowDQgXHBYUCGLFwKNep",
  "key2": "2HBzNmaHr5jXcLLv3PTrBQFD8i4U7HY4MKaeRkTCfjkqf1xHDtDk26eZCjMFzjgTy8EVCkmiu5BZ1dHtRV1iZJtC",
  "key3": "53pK1ivZnGV6YSUJGEfmhyqrcB65fCG2hjJ41YTZa1n7qoGJebsKZjSrohiTnQ1uoEqddspLuruVN7YF9WqbcB5G",
  "key4": "4pLwiqaXZkwzLycXPXfD4fCwynY7ZeS4hnY9UncSkaMrXgpKoGQH11fDpaJJomoTnya8S8BZiacUYGEuYsE1tac8",
  "key5": "5hWrVCWjrX4fW7X6AKxjtJxuFQhxrfmn4CMG17UzQbALiBBNckQk1LahCtx1oYGS1VKSjo8qufBaioUYexAix33H",
  "key6": "1293c3SqTpYguhqwyG5tYkCifN7CFob2Xy9AN6G8doh81J96cKYpit6myzB9GLoj7kxsne7sRqPpm8XTNmud89Pj",
  "key7": "3yShosL9vJgQprnQL3X5UUPAo78LEtBTq68x8f8CpAbPAnrstMNRVqkCxUXg2wJYfme4PwZ3yjJHWh5EQw3BMt1p",
  "key8": "64vXuUHtdPdW7B4dDC4HcUwCT3KM9CiyPu7fuu1zoHCREJ2jUz7Hd1sgP9ELi7rSE3SbHzzNNdA87p6DgXBt19pM",
  "key9": "7116rqpyAZ4W1rTzSYnzhvckM4jebMRCE3x9H1hg5Ty3BwMrVfQv31xonoPJmKLeAXukiF9BfbervzokqCVZus4",
  "key10": "4QmsUEgB5T8q67uTSdJHYB7ocv2YiY4qh81iVCoaPFq3DkQ6pYu6hqhVrv6aSyW1SA611hvr87EsrHbDFLr15QQ9",
  "key11": "BjT9NawGHhwhFqvYzL3emUZ7RQS2AEfwuDnyxXd1t9VsLN3RPwBQUEuYi5HpAGDx6zuiZg3CXc7ndNuh2QdRYQd",
  "key12": "4pz97FnHqbkeAqhrjPQdwso6qeS8bfQKffaffNJdvzqDkLFY2YLFJNq1k3u3fTZa4NefDZRP5afmZAbsXNRb8krU",
  "key13": "5tdi7KgBb9GpbJXXXwKHunPVgAWPNLTUbND4hjUaHmNLE5ebZ4gMkRcbQeB1gAuqj4Tkfn4P3fbFVJvqMWWowHfG",
  "key14": "Eg2gCr9eE1qAJRurNVfLGVvaXbdgzS4CXpU4DGy8d3PAGxpdqTQJ3X66kmHygupTQHXsZmCGgi7uGHiZ7S1M9b4",
  "key15": "3sWAk1Mh8f5uL6P9sju5YtQ9M72BDpMmrSFBsPP7ghANNrCcEWaMgXdoR1rJ3t4p9h5DNeG71bEQ8ci4dp7VBjYw",
  "key16": "3dYeRPR4KH244wVPdbbBAxu6mGTVAu43L6xAYbEHSZFaHQGSLZnHWkriBScqKZzkz4SH8e41bZMXciEkHqDaUzMA",
  "key17": "4891sGjVnSvAPmYU1dLKTDfGsP5dDy5sUa74KBKeZ9bh9jFSbqjTdAu7V9onmtTZqMPoho27eAG14fHSzhcKewFS",
  "key18": "3ZSnchvzQNww9g9HcaQA6MTb5CJ4kQK2RyRBzsuNNykFyHBWySaogdrYXHWRpFNpBsFyWJd53YZXnFvBpqRScjTP",
  "key19": "LJfAttxZo5D9pEL6KwiDBgvhskQaVN3jG7hVhJGh4E3ANE94afkNam68XKsut7mjgzExBfdRqPWM7eXGk98uyrP",
  "key20": "5Bj3FRM8rH7HpzE4KVt9uHr4zgFRh926VuhYdcKdmnWiKGa3bgcfUoxNhAGZMGA4FYxNze5QUNoMd5Vg7DC48bp9",
  "key21": "4KV51VtrEK1rh1STwJTmXBBqBcttbcovzT1U1PwiAnsLKTsXwV86EgYQ5YrEvp5Hqpa6CcETFb1bprdRGquLxtgB",
  "key22": "4SMUMRL5QHBojwZu269NsQwtDknudd6UeRQ5Ya21iB4Bzh1oPP4uJ3pPCKBpWxZhGdx9R1i75YPsAVT9Uvd3HNmu",
  "key23": "MRHui1THFfuaVDaSSKrW6B6tirXm2PQxT6Rswy7UbAK1oTvzH2GFN7KAX822oeekJyjTgBApiC1T2Czs2VEhWu8",
  "key24": "5ks6QrfT3Hrcra7KcSrbZNFk4r5dEiqx5Q3jASDd7movnLQszraSCNeMGDwFW47XUyxXLcv1hTdzRMRH46ZCSzVo",
  "key25": "2P4Gfr8kDhtfRgD7jgafHq9KL8kzE6UmdHpnJ3NgYP2WPeAuzW4NstjkPqN7abUAWEeREKUUmEfzF1yYqhKhH9nX",
  "key26": "3k2exVQqVyyCPGQhArLpHT4CHmCFS7pXauZ27drXhTqT8NGb2gL9745DiUip7qfhNLyCX5kE4dCdLZRDS9B3HVQG",
  "key27": "5BHuyoGr7JE7xjpaCQJ7BVuQ9nDcoUSrJjwXH5nqCELC1em6A48xJHkVpV34FZ4sUCFDgUbVqUEkkTTdNnR9Cf5d",
  "key28": "3xw5GHFopBZwbZ8iyrnaXuJspG7uSWn35CPMtan7MY6XBL3Nifgeo4ejs5GoXRSaQhUF7Mk1oDhZDCBD43qatfTX",
  "key29": "23nu15HeHe19xmVoHagn9bag8ohxRUuPexm4yJg2yNQWd9YVWkYTGTidcFSkfU6RFtGRBjwGRLfq3LoLToL19keL",
  "key30": "qnNhFSshn2sk2GeAv5k6713Lo35oTktTrFJAzCgiBbFjBc2n5a6NwoimbqMyHRpdCvVjEHDV4TXATjPen4zEcJD",
  "key31": "FDYoR7Tx33WEZt6vV2G1uXYQzZ1UADCic26qpSvtXN32Cn4epw3tdV46jbDxuyioQRqCsWtvwwZ5h9fyrNKKpdc",
  "key32": "5HrBnEq3eyqN8Nz7cLvJr7ZFWaVkErFTvD3syMnWJ6X28pVSKT8DHMFbgCpGFbmXnhHzdiSPDh2CWokYHAiSka7H",
  "key33": "3igSsTzHLqTgYjWkE33xXyu5aRNzta2shRHYpWc5PsKY6Q4SNWY9x94KUM6WYuHQoRnPZHRuP2vEhqukGVe9YKvk",
  "key34": "247Aonodn4Hg9Q7SnFPjJ3Zi752Z66W1QXv98QB51NyLJzBTz3Ub4FWiiTMB3AS3xnuQ3k7HXLp1w6svJRxn3U85",
  "key35": "4Xq98xhHdYocWfQ8dudrtsNAnqzw5K3ogcukwMZC79P7jdfrNUCU27CigRoS3HPQ97MEnuWKKfWwx32MveAtU5Wo",
  "key36": "4Svo4Y9Bd5LgpWQEC6BHHKNuHUKJfH4nhsDZnHhWxSive81amaGpuy6gW7SVNEGJyaKm4AgzzLa3RMgtKphjUkCu",
  "key37": "Fx64HhSXYpFTPZR5JntSHbyPTiwAqqqci4UCmBZQHhMwaYpPKmY1PQZqoUN847QuBYBx2Dp4QERenAUfGZbNnS6",
  "key38": "3ZZMtbKDzHB8dU2EfXDY2wzgejFW8i8UAZ9wMnPGpFcaHdKqF8btCCtTRerciuc7X45TGJUM9kdimnUxQJjniBNW",
  "key39": "2dgYqT6gw2dAjH5XajDw7KBGM9ZoAKZAv9M7QMgFUvDFDztMerYC42Zv8g57vSq8nc4ADUudQQ9T9re2gr4xmnLR",
  "key40": "4jYxFUBVgTyutyFoiLBDSHjWhUyPhZeK6rUzhhcTaAXgHDhHBBEM3bbkXLr9qi99oSZPkjsKfnWLsQH7fUTSjtiq",
  "key41": "CCRhiigefi1nbRtGoE9KwtnDF6hTgPTWZTQj6duKq6tsTCzCc4dtyy7NPpuuU6EWGatn4qbd5RvDQ2HxXNfYk1x",
  "key42": "2EPuBDuwjmdTV9B3jaasqqYgrt51WicePFahYWoeMDu4gi787kuhZvxda6dPvMrgQc2ZbRcgBFKv1e9wdJCA8qSz",
  "key43": "3bXhvV8X1FvbQxLWSFdXtpTF9rbaLv7p1Kyc4KBqNyk61v3oSuvNd8oQ2soiqJRMEa9mgG1PcnBaAPdrU6EhJe4t",
  "key44": "4q3bxgJHysAsGLYxMfptJLZnjUnRc4e6S7aqiLMUadX5wVCwMzua6jVN4BZkmQq5PrWc42P7WRrprpGFEJRiTXE7",
  "key45": "2Xj7ok6CLiFKRgTVC3bj7JmkSF2t7JKRGhzERvwFBXwpJdzP67wAo6T1Fy4bJM4Yr91HZGv4662W9hGt14F13mWZ",
  "key46": "2Adp1jvVQ2rE6oyfgbgTUfv7od5iXztZRAwB8w3F37QVo3gkUcZMMc74K6jCfmH19PhL2wVm9tAJSyttZ6ym8wMp",
  "key47": "uoareJM53b2tpxxQP4i2btMrgePLZ1vbeqDs46gE6nq5do3RUAYomtTavr14kNdZ7pi757Tcd3tuKPGUfUoFa1u",
  "key48": "GKcmDRtUL3qozmDTBdTaNWPZKzrDwo3qFrNyJQcNguqtPCHyF4i6kM5GHkGx3vsCxTmtCwjhYoD6xwmxuGqmCnK"
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
