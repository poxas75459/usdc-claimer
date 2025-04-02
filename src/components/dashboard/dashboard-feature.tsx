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
    "J6cT7kDDU85g6Ba29PVRSYEJgtnWejQAcDdiJwNk8iZaGKCo7uWiPBpoHKAEi4zkEr9QNNrf97Ki2sWsbziPfzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zua6cMLiwKo1LUKjR8bZsoTjkaXmRpXFR3AyCQeuGY7FJBTvqr4RMxp1oiz3rk7SWifgbz4bLQjXRKvEiDtMwDW",
  "key1": "n6Btp9ZnNcVjJhm7EEqPDVdEDxMPyDX6TsVVNsriYzkMBBobKzmkQ1egFw8tCiiVMTxsCZFRdhgfctbtKXseuua",
  "key2": "4Ff79GnAaZFtHvKQEGW6iKf6D6sCPqQNevtBshCbSaxTPnetf9rrqkidCU3tatDDvs9CMMrgo3fTW3kvPwPtDzQN",
  "key3": "2u32ith5834oSs6atLi4waxA4SoJqpYCJTucsjikkwULbxLAzqUgY8ZUZx6nyS2ReWKQPhHE4dYp25XeLurmCWj1",
  "key4": "3wBQfzd13typyHW8kbXyScWj41x4qL85EYofmoFsHmnqLqfNb4cWb7P3UE5ggVKN5tQxNAZ36VFK19FLEHysRo6Z",
  "key5": "3MtCZaemKAJuiHPJ5pdMBMfwGxBezuPfyWdQ4DyWVT7Ppx84Cceke9rdGw5GYbdqSBKTWtEEk1rfbsD8aa9ihQJo",
  "key6": "7TNb3hkrMySJn1oV3CYGnNp8DtatLVBxx9FurxqCLuqgknNXKVVxstcRRQMoVjHY4nDCZfg8hrSQESu9GW4YcoY",
  "key7": "85NsE9SmitHimTE2rdp9iWoqYL4XQpfUZ9JTF3LpB8EaVRHrgbJBAxNGDPC1pmz4HUdWw2crhP9XjovAHLoDynN",
  "key8": "2DQAmqLH45gHvGXyaQBn5CiuXo1fV6JicWsZiBPiHK8g1mAitRJqqAuXN5fJdd9Sw1tvzBGAB5njspgTSSCAi9WK",
  "key9": "5pHitYBNFsWu7eLqRNrAV2YqpMhJTMHLxnaPZu7Q5MCLzVwhdwMvserjXbDzT6335AUKDbFZx9LJvZFGn8QsykSM",
  "key10": "2nixUyAgmLo4Hsog9mBugxADPrj1QJWjTudDCmwZjfh4r4EUyDgphuEPYq4kBX2te9sUYZUBQZQjcE6tZGA8xv4T",
  "key11": "3XXhqqNjQHonHjFtWbFjJfyrQJYXYaTNTAqovMHcAaUngLRFDX852eprkFNjD6kJRAiHzYxYv4hBp6j3yNLq8GV6",
  "key12": "3e4ifET4Y9JT46JDHttEqM7hN1fpLCDFm5YY2AMHeHhikEKk7CX62WZkbWtwuQr7iVb2kL19FWsCDcAgfW49JmPR",
  "key13": "351ojE9Q6bhQSktwb6ozY21GHELs8CMUSZAb4DhnGtsGtpf2B97VkjRcE8Q1nGyKkzsNTxBPAWjNs7cnwcfiuA5E",
  "key14": "2vU2XCbBCgZGuD6wuE2zeJKCqkZ2MaYCAMhuGrDFehTZCkoWeYnHHoNPiVhg6SboBS7AVoCFBdAzrtW2BvmVVvMA",
  "key15": "48XKdGqTE4G9HY8ejspMZ5BgMtUmzz1rqNUmd3LVX1XQCT7Pfgujv2oBzj5MkztjrxZr1Q3QQPZyRqqkEKJZYAez",
  "key16": "21emF4K2XRSFEttDX6WbiGTycofiG74LZQgLE7F2MgSB1c3n5sa6KQpxaenGBWRWqkeJFyseR8qUrwNuqnrhyogh",
  "key17": "5ZksD7ck2vmN2YxBmYdrCSZK8F9WLnRwh8yWqF4Z1862TBDzZB2DGFJCoURYKr7zGBc8rPidgYMAszkPdLRYoKpc",
  "key18": "3L49vbAGE2eRD9uBJbWdFGsDV8KuSDK155WbQSCV3XN5nkp175wkJghsY5yifJtzy6y5rhoaBcm8Aj9gHqA6mDgr",
  "key19": "58pUm31xJX72xebPTGpxkXJa8Rizvn4s4xVaERzXRZC8Ed2Muq1nggMYQdDqdpWXzjcGnWGn76xctGvY2f3kESTa",
  "key20": "5cjgsYnqaApNAjJJtZgqaDgLR5hC16ezceqWLFRRZxVsBi6TqZ5jcoh8tGFPkVBU9FY1fi1pFEAvNfm3MhdDCRHx",
  "key21": "277Msc8zHHZdTtYtRKfBv7d13d6F9Z8S1aYZwkkD9BC5ej2KJeo53MTaGc6ZnLnwRzS33fA34q8rFxNN9Xzh42E6",
  "key22": "5F6S6YE4ugHjrbXoc6S316Z9mxtXE8mMGLUxzkdPWFiNJyUXFBAeLqfg1N6gtHyYyhEqWr8pSJ3qn2YDitmenoyA",
  "key23": "5DhV8eKEhygi4BahnKc6eMhHxhNf2hCFMr76nFNAM7ZnptXHEH4Q73ivY5nfAPieAwN4SfpEJrRWqRygJPXvPeST",
  "key24": "4XuhJZPhBW6s1qL2BNY6sZsKLSscumCh1u3NBiRANUZPB8pavdSyKRMCA8oSuURWjbQD7dTj58XEoT7M2TtKfYZp",
  "key25": "5ZWcH2vDcMozzHA5udJ4pYZDWSG8rri6uJhjWTQrU9MXyqk3ycafgJFAyYeiXJWZsY5rgpivF5Lv6KLgzsyeRqMo",
  "key26": "5A8WP9fpitp9QZkL1MiNtkAv3SCc5tWvh9QTctrnDVxkJ6VR25ghjfHsFkUpq5kFfAoqbvizyEK2C2Es8bcDG8b",
  "key27": "5DgogbR95ybVXVVfqEKQDmXq6HmyF5Yvomf86gyozgaS1NaFMAkPhBbCEGnuJdyRsrAMzWa6SXssBtxkyAHFYD4M",
  "key28": "2BysHq5UF4jUZNiEjtbZVBUv2uedTLVbugitCB8GHKkpvqrfuPRzZVDkR4THvofujNCkj2EzMZpqQRhRYCVQ6r8Y",
  "key29": "2AGbDMEy2BFSJ3ndiZfGZPE8eTU1WFS7RVWdvxJyD7CTZMaRYxY6bofqomwWEuJTc8m3QnYSTbdwrytPTdph5eHq",
  "key30": "4ydKj87YyMNEeLZLujqZc21VjySGMwu9XKZMctLYPpDigwaCXbSFtSCRFaXGP5dMxzERMVA4Yob4cDq2w3ZFcsLw",
  "key31": "5oianr5j7MkAY91oYyzC5mATZtqpZQmNcNvoxGUsRRW53ZVavwaXTgrMRtPWdiGQAqmp62meXRzjLPmY5rwvZP2U",
  "key32": "hCff6vg5wJ4SP98jtAFNAdPci4Cf1TJtJmGCAptZMVrs9urfpxoSmVpBymG7mAfmkTdgBeF61LYwHYANyuiR8e9",
  "key33": "3qyiZRto7wYRsoHhsV7e9u1gsfai7Yyx65bubNUvgGRuFJ9DZTsVXw1EieHKiccGjDJEmoqCZmcLjHajVRbBp2EX",
  "key34": "nxxpFfNTpS2TfiRyXocj1KHNWJrsdhgRh8RjZDeQuWnfu28n1D2nPLNm1yfTkrGc8SvN1EWkZHPaPRMC4cdEybj",
  "key35": "MnsnG7fv18jjLTjLPjAjfitxqfpW4HhhVGX7rTAmaLrqN1jYzPUh11SMFSAtBCSMjWFZwYioyKQde8Cfhx7K9ri",
  "key36": "5FCbhJyWXNLL33yE7159txNvKfHRg9B1885FEhDCfgiJhXZb82eF5NYNRXmHFJ5wRo7dmggMTGXKoMLyvCq3MiFe",
  "key37": "3uy1gy9HXbA9hwMWAbkEVVvDncEs6adYGwZTtCiedTZdz9Uqv1kt9qJ5kD3yViAtydHp2XTiaoeV124nXpzzE9XA",
  "key38": "4XN3jLKvGL89rcGsQU4x7EqwpFvoePJmj2KHN8TvaJzVMF6DyWVia3EoAxBn4tHYEfjDt63319uasVCetYHfmAiR",
  "key39": "286jcVBp2XuY1i8Mr6cQMr3ZTHccQsR26DgpUkhE4srCrcsHvnC6ehAFyks8e37XRbpV2jE1jzVpRgNYBbYHwLFh",
  "key40": "3ymuf636Lt4kQLEjibqm4QcpSncUXrhtj7ZXs43w4Cv9hBz2Kr2kEnidUshNAmwcSwbPytStkitNS12dkKWFwYLc",
  "key41": "AW7r69e84TDbjM6pDhKyApBUs6Ts9yvDXkH61TuLu9bcRjhNAq3eD9VjZ3YHM8SkbJgjFjYEEg1P3LNoeev3De5",
  "key42": "4uzLdM5fasqpUSmmN2drZwTZTyi9x1MVYS8k14p4cmM4JRPg1ivj19VhbyRrKnGZDu9f4AdjMW8po4uRKmt1QDFW",
  "key43": "5crSxmMZZhpY2URaehiywVfuAyvS8w2cJ99zFadL4saTaXR85SbAL9CdR8S9P3SG5kkgf19wczjp3BBU2CwMqAtf",
  "key44": "sXvTG3wuq53PkkwboRC7H9y9ycbBgRoqmFhspyVVKSfsQxrqbmYmR8poDhvpC5LKRV3ysTDph4YCX64MHL8ixSk",
  "key45": "4MMio3gFstZ3F7eynJBbjpGgxUqMSJugasx1NsGxVVFmLLWUEjEA8wcYuQFiUHB6teNbDDK7kpSTBNT9EKUo7BXu",
  "key46": "2MEifR1sQonbxmTwfzCJF6dJkLdiH5bExx8h9hoHR4KDAyngU8v76yLUjX645tJh21QfGCuvEZxfjpvszS8z3PKX",
  "key47": "5QrMJWa8sUpykGpAguR2sRgsAjT3j9i4eNsTHkEMxgMkgpkZjzp4F4cKaqGjFJyyjgcwjoLRwy5cweD3SMeYfD53"
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
