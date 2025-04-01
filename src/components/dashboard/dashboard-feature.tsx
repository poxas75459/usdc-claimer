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
    "4QpEMHdm42L2nhYGSu3dDsAYVcwZ4Jvk2A8YZeWzH4KhqEXBVgT5AGiFUai12G71T8UVP55X4sgrJXJ2n1vNWPMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46m1JniS5VNxMkn1WfXNwzWJ2fz1fPfQH67HSW68AJSY7icMS6cD2PQ98S8CKsTau9H6ePKcYyHddyrc8YCNqPjr",
  "key1": "BNe5a2NnaLwfCcxMyxGBdEdfJmkNe78WSkTBb6q45W9VTw2qr3B1FkbnVwneAa8KARKeiP87qnciwjgWYHpZf4k",
  "key2": "4SS5UWaamzCpXBGMA4SA7EyvpMXyhyGsvrmRPhRRjynMPmuwTaZdaBA2pSqebsJnaeRK2mkYAjDC4qxa4eLuJ9m4",
  "key3": "2RTMbprjyHXLYT5phF3rkTmguC6dhonNMV7rJHFbSrTpCM5EqQmbXX1K4ZjPLbD4DVPtsV4nUHYbRRDcyxsNAaD",
  "key4": "55n9xSbEW3paNykHB6ZQpwm3Re4QoZrL7W89o9C42pgemThAayr6x4M2p7WuCT8StBVsWqMxzPzTXX63bd1yzTH9",
  "key5": "3AknPK5gobeZ1CEXYdXDxtYu2baDCm8Fri96KR9WNFvMKBWDhvSd1nbr4qf5JrTbufoKk6NwUBmzim6Ds2phiCgF",
  "key6": "4zu3SwC56841xjgTrrKosLLCrpHbLuddvJ6mrFsLZc1a4A3ZCjNmDWup2at67zkiW36xjJCqmDiLeoiYkiJXm1K",
  "key7": "2BNDvE45qMd1NeLHTPX1wVhGQ52YduM2xLXGrG1TWP2vLuAfjyV6H9fGiaR8CoaNnDg37Sr5fRnQ4koHxq5dKDH7",
  "key8": "SJAamsGH3YyAa3VueyzCbRtsxvMbUJXcvDdXLPg6PCx2F42SyNwh4Y6RLWk5saD1LT1KCqnAz4eS6jqa8yj9ASp",
  "key9": "rt6udHZTg8GRAHq5XBvMHsRJhUgLcK9cBF6Pgnt1gqkngkYYYqMp4bLfNe34WcZRngFgNTjjWVDRErYk1KDa8Ao",
  "key10": "QSA1pPbpjpacrsTxAjt5TFbr2VtAPyoBzhp61GK6CYRDvdxz3MR5p6MpWu72RUdHfSTp6wTRbXBNaHMBBHGsoBx",
  "key11": "3YbStVbvJXUJ3QvCh3iEbwGTPuESN9pVnFMGdXonxyt8TpgqnDce9MiqRzebXvMjqALVQEbiHriW9sdAvdbjuPmr",
  "key12": "4vMDd69yxX5p3UGBeyKJjQ7jzxCxLiHpCFxga7gCevgzRcF2SusN3upkYrF2bpqKzBGsfnCGjU8ybF15HNXpGnZS",
  "key13": "4JrzeEHQiAt8vMDqyfRmQEA8jEw1Xk1gyKDgXtGBtXiwk5zRxyHzoYJiJH2Ezf28xhh8SXCjZ6DGLeo6ENPavip7",
  "key14": "3irrhtMNPeXzEBVpSKbasXyMkm345fs4ja9f9eByoumb4jsFgGVr7BSYcCbbtGhgbaA74wocadzUWfpKbG2T7MAC",
  "key15": "3koBpzUeGxLziCikEZg1rgAt716r8dzA5SVGwGa541w2j4ADpejygXkfZNnwxuzYVHqDd5so2w7dnq1nvzm7dTdD",
  "key16": "2j3vtLSH2WoCaedE3poE4j6sir4YKumdHuH1dpZLh3kCQRUReJMo94kUyf9838bHWAwoXVFifzBDMRAaqY22oGx6",
  "key17": "AwN4nbYEBXLjSfw5BRtSws2mbuhVgZ752BNgzomSVugf4DSkAzKxdiWzKwnPHXhMnyd9CkbKKv4opbozLcWzjhj",
  "key18": "2H4qGUm6QY1ViHsSVu8AezPHNoTBmWq2WYsji9TPark7tw7TdMZDSk99z4dDrvjMxQWEk4i7ApwFmGW1pu7H7tU3",
  "key19": "2sYRxHFcPhTHiRLbokMy9iowzNGtWp8VH8Jw6B6e1XdALGs6vxuCHo6ycEjUCC8Ve8RWoaus4gBRN36xDaV2qVMq",
  "key20": "4ebLcVUtT9nkLD1N1vdt6v4MU6VzqKK7yBd4jphYYa4JRk7BuW9zNnXGexBS2FyFNNEPedbodZu69rg2bLMbJn2t",
  "key21": "2TzUpcmCNvgWvtN3TfQYxmpMarEaYgwK4AkhCvNc4HdRnfpYzTaMTCX22trSaivpuDZHNTmxAp5Hm7WkbcoykKSK",
  "key22": "GXxmQfe7f2WhxYdB7biesk7Lua27ydA1xmxeagm8JpPYGbw4b9ro2zQ1iQMS8XnypYK33yw43MrndPJJhAaSBzc",
  "key23": "5pw2Hk2GntEHfegm5FMWDWmHXDTuRJpMxdCRpDAu5GhZ3JyjEjyFtE6rd5jJEc2gBp4LqYLcDNxVrfuQ6Pku7UsB",
  "key24": "4MeNGuz8QRNrbuL74aKmsbYvQJcPK5bPpLHgwYmTc6vE35ATerBnhZai4m6N2q91uh8uxxf7ame1EgueS6mveVCG",
  "key25": "4kKv74r1XMW58cdxj7aX97bZLkCEJoEvecJuBSu4P4YotEPqKNcr7JAUCqypXErMQ8UmUZosSSkaVyp84CdfhdT1",
  "key26": "53RUm5vx1uZbM1rweYirZ1mwQRL2RZzpyu61ehpD84JTD1An6jTwvFVd9YyZNv3KULX6HrVDdMfjueprdpQRXz3c",
  "key27": "5P1JAzqZio5EjzrV9sRP3CTkGFVxFNSug1wMu4toBqs9NGW5kGM6aVE4RhjofWeUZHm1EvuTnZLchEpGmpBWDTX9",
  "key28": "4KPtjf476fkk78PaS27BVvTjsphsVMFGopeTcEyTkdDZx5xw9FSVVNGS2RiBTdQAZGnTYuFhhTrfzrUP7VWmCSwH",
  "key29": "35PAHv3ypwE2jirADBHywTjeiS6wToXxvRJQpRW75kQBmKjjvosahDuzXvsf2736RdUd2NyXdRWPzNfx6fr7bcER",
  "key30": "56Yyp7uPCbdz978UJTydY1E91MTZmVF3JvdkY6znqYWGyfDEVdEL11RhGrDvgSFSNA3vcUCDpgVQNqFfaZ1CueTs",
  "key31": "2LgFNgdt6XvTQ1AfMtFhAuoB9GavQfrQrohLhjP9Xn5GBoC3XqTqnVXnmSeX9QBnAqUamVoXTEQLcR8LpzcCtuHw",
  "key32": "3Un9TjKJDg1cdGaCWe4NvPrLm6PfTfcLGym7hodG34JMJ4SzHte9xdVU2Gzna2EFcercHqrMmSAd4QWkWDPSGcqq",
  "key33": "46pyWMRq6a2BujcJjzHFngtSufDVxbbByCybWHgngcP2LWpWyzKqntzUXBrqjTJcZNqPe8w37TjPqLRHLFpoMLkK",
  "key34": "3a52ncRNBm2hWNCSTJX4UFvv3p1YC99MpemnAMVqT8GQ8vVGgSqoremazmbn3xoC3cnDUpDMz1xRedQKgCAVZxZJ",
  "key35": "2D7z2oaPpTi8svFqn5q4AyeqBvx2nUcAJmBf5asP9aE3f2N8RR3mKyuPZGALWgAFHeCCzcTgUeMq68Pj6xo6jWgJ",
  "key36": "3ja8abHDrvfu9mFHanLSwuhnECBYNr45jM7igUXxiTWy862EeSAMWR4FCDWozfA7ew744f7DmnLGDGfduKnJEyBf",
  "key37": "LBrfj1VUVF6bTj9QSdoDW8sWEjwN6U8LYHsmJq3fzQz8yYk2ajpyffGzLj75YJkoq9bqSF4M5DcadypwmJVFNd1",
  "key38": "ysCPSXnXbpnMrUNxka2R2frj1STF6rHavdk2Ro4ry5939bapqafY5as8bZ2gVoMCpMcvGbz64q61tNDwYNP1E8o",
  "key39": "6sWHPrmeaHjTcZmrL5tYwumKYrAuC2izmS8wD6erFQXQ9mMaKoz6JkpRKQRxPTnD3K4Cm3YVazDxkhqjbhYsuvK",
  "key40": "33z5n5AKv9vUCXo8MJPJUuFfTouyyPng9tKHdhvucccQE3ZB1XXk73UTRsjYS97PPdKRPeVa2FanvUpoZA78JM4U",
  "key41": "37qi27hE3xLQJzRsQ4goG5CHkzGfvoow2PkuL4euGBdXNAb3QXp38JWJUAYpY8K7fXVcKKpB8h8LS8FLiDrQXpbc",
  "key42": "n7f5v7utLNreC1ob12Z4NWqMb24BppNwkZGVNuxEXAC18iF6u184bUydReR2yH3aZ8AwGc1sGjaEWGonh8BKG7o",
  "key43": "52D95ZihJ8ThNQLJ5QXwnuWb88wAX2x2E4EMkwZDxnQex4LuwiBDA6WJej1BFzF9yQP7wBkgE9gHt13TF3UHBvcL"
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
