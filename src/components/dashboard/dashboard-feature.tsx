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
    "44xhcEtXX3bdyAjgaN7naj75tocZpnNBUdK2ZGk4Sp7mcRE61SdsGMEQD3RPdJTwBCQ5tg8hv5d2GADRssTGa7Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GSEGCgPs3HDPxFd1fGkuDUEz8fRXeGQVpvNQkbf9VBaqMszHKG7gmavj1KeVsRCBPT5TLqmDFRKq6JRyH2Lr4i",
  "key1": "5sAvAhRXXfgVb61AQPVsbQB3cWN83D6RKt1bk1ePXfVT9WrgE9pYHqEyoDi8rT2wB4rpQZzh31vfNCBfJ9Edmyku",
  "key2": "PwCUqLFBmCaVZVoPwm64atEYyKrzmpyboz4F5w3s8iqSNnkUiKaPvMcYVS7E7EwyjNkmDpVxbJRV372kdYEC8pE",
  "key3": "2ZFvSQXaBKQ1fWgFCyUu9y4WvSsfWkhMMTj3F1u4zGUCxZMZ1JSf8uxTJraap3VR2xMUmjypTnT7CGYbfoEEYPTM",
  "key4": "41NseMzZQL2PQNuQrdJWdgMgmGHtZCTyA9bTzbCw5x6PJqV8CD89DXw2yzA7FF5pPcuEgRdFdFCSPzyQrCMkYXZ4",
  "key5": "4aN6iw1GBDr3E56euKnc1WPD2iFkGKfk9TtcAYsbXJtiRKruAcKTWmxYgPRcoh37Dp3UJ15pyJxnsZxF2cXLwgbA",
  "key6": "3MpBVk613tAUYetfbL5WdGNznYufFn9TSGrh7GPSWfYvsSFYwNYxKb9mV1jbocgzVAXD14yB6eJNVQabBSoMW7z",
  "key7": "4ZKHw2dz6cbTScGGMCHBtkHF7d6soS5veLkssp9TZqdCopoVmgcapvM3Kzz13rAfkCkx8L38fwP8pmSa9kDCZUyY",
  "key8": "HEvLSyEou4B6nwEcNNo6W28QW3CwDgUP4rMWAXL5oJMuxiBczxkdGcSGWdfWUSjduAjAyGbpeRaqeNmFeiH2gtu",
  "key9": "4ziMSaXenGKXgYM5h4wGpD4rdsHXEa2QLVZE8vGMLUAMa93aArfy5A1N5R8ce7K3Q5mJaFR6w5FErqAAmxPReScs",
  "key10": "46ogFyRf4p5WgcyVmwvRuvi7J8c9iXDK3sRQBKmgHW7orJnhm3rzSovxFqLBfRLdPLtCfyuaD2nmtuMTFCTTZ9TR",
  "key11": "2yKJXHmJ1Tbt58fcFUVczYX98wjyQRyjBgyBFg2KosCxwEDzVb6RbuDSAiPmcs4LvoasgoNEFMAH32f6LD3z33oW",
  "key12": "WCeF1kK8tHG8H15SsRQbX8vTmhTJB5A1HRmSpxAbKdbf2D7pw1L2E8FiBzLjFCsKSFva9W8trXfQWwMUo4HWzFh",
  "key13": "5ErsuBjg29qkVuTW8yEF29q11KNxtU3L5BJxqmBK2GTU5cGakjtYsFt4ivim37CnsAgBKqwodmnTTaqCComP7j3e",
  "key14": "3XbumGUGjWVXx6pkry7avegV4ixxmKPwfbFxA2CWCUP2uYHNtsPentSLzqLwN3Rf2Pec7hqgsdgbmPpjBeCfT14A",
  "key15": "38AN8a3FR7QyHmJiY6aMt88oRnkywqKhRYk6Ps2H2yFEnW49ZSojPNVVpa7LvTW1cshP7oeDug52jFScU9s27koT",
  "key16": "4RsPmohXHhP1AFvBGXCgCPgH53X7cHyeoeFj9V6tXBfsqcjzwK2UWrHTH2wL1YvJ6dg459f1s8hENm6bAbAsAr2V",
  "key17": "2qKvhy7Lf2YDNG1LeBQnf4QqEomWv2rYkG3kCLwehzL6mGpvVQQbrhnWWpkBYn71z12LVdjtzp79XCg1mDunJRhF",
  "key18": "5vM5UFhGAvEP6PSzT5AUzuKquydbSPSzRRy5kX9STZfcjbpWaQzHDV3G8roH1YteBHpb1P9jUJPJcSv6UTt3tFaM",
  "key19": "5RKxjP56YKsQ9j7VHyooZf6mrudAPK3RDD1QEz2BTkWmhSi2V2MJfrmAS2eSGpTHVbm1v2JkdcxdQRQF7xHaDH7k",
  "key20": "ZvZbKnbKPi3kio9pF8f4mJyA2HiCUkL1pw6An233sKtb9TnQ4fxHHELdhS1YvijWnJUnX55VzRjv5EjqY5u6zd6",
  "key21": "5gL37PvYi3sP5dLM8rQPAMKwxeQwmr77BMVTVb6z3cM95ZBriPdeJ1uQUkrrqVViL2e5UHHSTLkP25xD6p2zBMHv",
  "key22": "Xd3z2stjqPRUNSYN6gPDZT1FVjmnoZqfjkqgWbRYZjAZDF9KFJWnbK5gbCRBsHunmkPVfm7eRfaUQoeAVubujEz",
  "key23": "4tMtbjC46Q5skCbpNJNoWeYz4dLseLByQriuQmfSGtp8nDzy8siNjq6FG7MjnEvpcEqPNJ64TDu5PyPEXiMazpbt",
  "key24": "31hM7JzoeD7YZCJVzmrMAf5z2hTfQWGu8CL8Gii6K61nW84vrDGpgDYJq1EHAeaKCCtDiEsyqeoQwBbseousy1rC",
  "key25": "6S56w1ekUmSWbyBoHze9hrKLMawyAqBH3TSgUUPnu5JGdsDoDXuPgkzFPaSqRtQtPVUqvqpFG9iYZFoAZKTUs5S",
  "key26": "2KjUL8WbuFfVeknmLrRtLBAn6akskBpMJj7nKKCfSE2CnbZzTRTGJnosx7NCyywv4B411TW21v14cDEJy9LNfUGF",
  "key27": "5P5JDBbNAawyYHAKsVP4voU4qEmf3bxU88Dk3xxp9tQ3ptUXJFEjMvexeDjiwJU756PQibfMtvx9r2dxthQCyH81",
  "key28": "CmpRnL4ZdgnfPhhR6CNJV1NabhvhyhEu3uHgVckcaH7tVp8gQ5xSW3WYjswi7D7fNZqcveBHaaf4admvvdXTHVr",
  "key29": "eXEY4PgX7CAbc4vuDctEqo2BFi7r7m9Pe9z8snEhpt2JbBiexo6wGS92taVu1Pvr68etQhj5Uyic7gSjpvSue89",
  "key30": "54ydqVp9dErmXvtPj5mjm5Pz1ztdudpyNoSw63YJVK1nju7No4vmXJJxWHkKRjJ98no9qpzs4SNzAnZbJxgaMt1j",
  "key31": "4zVuHxjjKMXdyfoneQu8hULQ2mywEnf3WLwRNADKCr4XhTeY3PPNkweMW8EkzucNHX8JrnSYPAQfmYsuvqtKKkeX",
  "key32": "24vFCCZjRDCSyrDTuZrMd3K9FEpc2gRjnp8kPmsXYRzcpKW1Wv8JcoJo1Riymaiac7gShf6ZUoXFQTNdRH8ettkZ",
  "key33": "31PoCNoqeC9seQmjYqjjEdZ11U9ycwirBhYCHARBWN4t9rP8LCkzmfgKBD343agvoRjmYja6ijGHXZ9yVLV6QTdW",
  "key34": "cdhYyGBsKhkmX6Mo8hv8ZaYVXYSdpbb1UKqVfUc4pLbdR9w4GppFfZELvvhJ2fb2GhFW95WUyq8zzbKJa4ZoXqM",
  "key35": "4FT4Y3sGAcwTiu2tZBNezQS4Xe4g53MeibcrPo21TiUoQPvQ8rg9jB3Dsi8sbgXjSdapaWPa9WRE6RtNzyfrZa6Y",
  "key36": "5SkHqJNP5cHEqEV373EPWKT7h1hypbDpVBAbPYScFfXeAeBuDU3waMYkqwpeGJx9MtetXBMhkgd77EUvtFJnKvsf",
  "key37": "4mM8PyYVR3cNosSsRjK9XRYTK1xSodpFFTJQ6e8GwWDUkkcydZd2rDDAmG12SqXN9sHdBSGBJAmLhwGgLffYUUDh",
  "key38": "2FAysHDBCK1JLa6qyio8W4pXcmQwTKFsPJ48gNxFAULBcQNF95vxXQJbbnrkv8CqDBw9oSRiLUG6ripzpascPK7g",
  "key39": "56XeYd2Pn6wiXCJN81FJfPkkb7fKoPYDGce5Q48QhBfQFwC9K6FfpMsfqTMB6yVnS9ZbeHNGTfmWPLKUVyZvyE3u",
  "key40": "2KyMQpucqx4E8Pt2Y67BDdWaAtzbZ728K9Lv8CZFaF1WUYJpuBzHhKLzZd7rqRBwu9LmyLfGA8zfJr8EFhmsPKBC",
  "key41": "oZ6HjQnwwcgAvyTwJDPMQUwUCZy2wKmF4Hzyryh6cDR4qiBYs3veBi4acsePBDEfr23MNBquPUcx1zy5msnxti4",
  "key42": "5BJwFFp8dmhbQn9QxSEyzLnRRUdo9wdggT1SZ7BxpNbrMqTg57U46rKM9paDksjR5WWReRrEyh3EUq9yg27XEsvd",
  "key43": "Rji9Y9LbnjUoFx6Wh5HjqzCdFGFvHN5uqUfqmZfgMreCHV5q8mUQ2wQ5wc5FStjcz6inywjfmoaApuLBDdL63GL"
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
