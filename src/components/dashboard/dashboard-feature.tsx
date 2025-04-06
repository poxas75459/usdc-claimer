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
    "2ZECYVsG4rmWih1xVtsR1dXFCdsdkykGfhoxqRmsyLdRp5XwwyfXCaQFtPwUuqktJSjcyAvywepgH1SNBvEeyzfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "but93PNN9hWeShJKGzH4a65FCbUM4WLVDPJXRQSGoputm56WPyqXsXatuxs1Hg1gruzFrD2CMFMdX76sfzwq3tP",
  "key1": "cE2Tv3StXK69mBa2PpuaqJ2HqmX4i2xRrK54A5WwW4daNSg1FYYuB2xh8uaKw84uZfPRzsUsghsNfaAusPg2rtD",
  "key2": "3Ao6UXfyuFc2BRcDrCJ6tTiuUMmjkaPsRu8vErxtPbBECwgSVRMbtHV2JXVYUgR9AD3mCPQKp66KR6VuAzySexjF",
  "key3": "2gpYWmrCoVkazfKvuPqXVvxBF81FRyWMuHV69ymJFAHX2cQWnBzSJfebaGF8nG6mY83Gug8SmaJf87WfAW326YYx",
  "key4": "3tkQFJJJUHbn2AxR5jXxzWaCsmNdi8SAR3W8RAF1Couvjm8x5Wbo1f7VNz4mwLi8tZYV9Nwp7U3vbAjd3mF8DtSe",
  "key5": "2XdXMDFEB35qYFS6yTk3xAethhVM2cTk19nCxbpcVSjWmtWFAbVdX3HAzgydXZYFbf2Uxh2WJSDKkxH23VmRCGwy",
  "key6": "94HkitSzmdykQdU7J29t3AXkuoj7NsFqvKVMB9YxkcdEoSaFbPN2ixLwmXchWK5WTMu2xJdSjrByB3f77NsAb3v",
  "key7": "3BbvKLESx3tpGVwMEZKTreA1dz1AT9Dt9jajhMKNXitxDCQe3mtTaKFz2jB6pHf3sPcc31B34uZFuqn29d6NJ7jb",
  "key8": "3NPjCf5zgWJ5mHtL3p1kYtaaAfCATLJevtKvANNAQKDTTeQigbA2XbER1qXWkT8FmZLNk6ATpgHnCpUmemTANGaG",
  "key9": "3UvokTptBZNPbdShtotK67w3tdhGfFd4fivmvnSSjRxhY1domott7BeCYg7qQo7S2sTPgZVyWoFa2yB5JB3ndnc",
  "key10": "w9Sa2dRRthf6S7rr1bvwYvaNAYxDN5QC5ep1fRU7iRV2ZduXj34eUV2hjPC44wF6588R7BkN5S8npyLdmodvxFA",
  "key11": "5FTaY59mWmWf8cTapXEizmHMdnAveFxF7vAQeD3bzLNgzkhBBeESM6woUHSbLgbdiMLa9srvq67Mf1FE1Udi7AHG",
  "key12": "3FzEnrYiJjtcDnFBLCskUFeA3ZSUbccFqHCJvc58Lmug8PfcpkVkSEy5dH3kG38R6Ya7egdwzZC8TLZSVAe4JUNc",
  "key13": "4pQTaRmynxpUP5giWDMLrUgphFZEWib5hLkDgqce2QLGV3qzP4itfRcG431miZdQNXfXAbS5ofpbDau7ST7iL1ZC",
  "key14": "5rshd83Ku3Ln3Cf2cU8XbKGHqrRATzhsc9y5RAgR1EByWg2ih6AdbyMGHcwaaHfev2NMRGEf6L6fUr4Yhbxd5y9m",
  "key15": "46yiid7s8A4KC1tAVzp9qE8QcvkBGEX9p4P8aJ9AiucgortSqZHMQheej2ntRGmR69rZT1AyUe2AScR7rptSpVZs",
  "key16": "5RiAbx54pje8yKbrfPU2ceq5EFXqGNEkSnJtJ2QRb3AjDa8AEQKL51gypCXjxxH3qcYnxRHqgj7KhqLG4r9HxNz",
  "key17": "21x4jX38xUdwiFYCrJasfDg28wAzkx7tHLXGEdSz2m1oLkaZfRJvPXWMNzBRzc9HRe71UUFzcqFhBQz2WpSwJx5T",
  "key18": "vsgksDSqMJvjevXSmqFZdG76T77jw2MMZLVBoxbbzj6YbjbFn2iBzQgEQJQrSQqz46YkiQBiQ5unpWRBmU3mTX2",
  "key19": "rAgvwgoKVeBaU5VygnURE4c8vBzR9qNZuvDRJsXCzmooEEv13BdvBMnzWFNpeBzkECRJxLpQ7xE1VgntNUpN79S",
  "key20": "45V2oJzn2YS7WKg1DnDa2xzaTysgnKZt5X9ZgYQA57uaXc6L1vsVCgmiEaks1XykNkHpM5g3VBcQaJco5PWt3VGk",
  "key21": "5YuvZe6U61KGckZi1TYvFh5dCR5d65zix8WJJGjJk36bYi4MvT9cMw9WRMFTcQtHx7oyX2tpey5RVg3FenYaXfc2",
  "key22": "3iwrFYa1u4AXKyARsMbYRHqCJK7Bexg7UDitPGoFbxQgGi5wqcGgEB2g36JmeWcDfr9KCLfK2oEJAN2eM5eA6116",
  "key23": "3JCiDSsucud1x5cPRtUnSXdBHGa3z67gmjSzeHH4hRQGQ3ivvKtRgnfXAxcMVRyQzGxQ9YZj5py4VudYVG6hpHTG",
  "key24": "3rJSN9nuQkLWbFaLw4x5B2RmjqRhMjQhpTL9ZZuaK84j3B1oHWiF2g1YLC4gqfhRSUdzZCYWWjGmgc89iPNrYGto",
  "key25": "SUTGzfatmboj8mpAGvqtJdQoLFjGAt7xrq94enZjZmLsgBeVYEPSMpzh3M184jkmfqF3G5XHMHq5BdWfXLTSerc",
  "key26": "4hnpRL436z5fsg86dAbfSiPUtYkcM7am8REK9RH4ZtfwMfZZ528kcmPKVP1tKv7YkMo1U6JsqEMN41VTwZdyTSuB",
  "key27": "2Gd21XEmYKBNDf41dtz8U1PdkPxdibgcnydVbUbC5QfExsF7dnz19z18cE6LH7Cs3tUodJ4yo9VELAmJymr5TpQB",
  "key28": "3uZ7KiM312Y83RTYwZT76KiNedGuZK8duergJaX4CcK4BNDRcULeyk85Jha4EDcRpwyrrAzx4XuVkeWbQTm2fwSe",
  "key29": "3LMeJyiCX3BEU7FCkXwcFeBz3TaUdQcfePhxZCLWhgTcvcApQV2B3Q4EbHqk2q7jGeRKWuVu4boM3hZkR5zsXYDt",
  "key30": "3weQh8YjDZamAZV3hWeEQ7Kg9UJhXHtocVGYCaeVwUaEAuH1quLAionfaTVDtMr8x9ddyMPke7sWbWtumpuCfrtN",
  "key31": "3oC7SVmjKdsLYhYhBy9hZhn2mLbqRxpfMCJTsgfRpN9Z1uVC81noLym1SJGgwAuLPuzjEpTwaq1tktL9h7U9wMzh",
  "key32": "ysrZCNh9JdGphQjpTXEJixLy5xdEuEApuGVnzzz19g3CEzr48rHhHsG8r38YfLoTs5ui6p3jGKxK8Ryc5GXsojN",
  "key33": "4cRkipv267CiDXViXFnur5VskePCgkSPXF21vBcS2xFiYbWFzRHprChNvH5YciJr1cuUfV4RvM9u9k4dZvtcEiFA",
  "key34": "3Cxzbcv4bYUgzoqtjUnQyEHvp9rNtZi8UnzYcQQ4B2xLeosTUhEWXn21MhELDttSQb4bUn2CkF2ScGtHkdbwciBi",
  "key35": "2w4Q1cHL4fT2fR46LenX1RGj4mL9V17utTbkBm4t96dXdnsHEuy6osCo8rJSq1KLT9j6J5v7sUx6h184tj77FV65",
  "key36": "qagwf92N78fHH1TRfnaZegFDBSBnroBUF6uMVVqwaBWhJCZuXBnGVTzmVc2UHNKc1pumHCqrQ5yg1PWdJ8vFLrK",
  "key37": "3hdMw9dapktveVTSUPHc4USVF92QB8PDCq2BddehVrcrtQju3SrMaaXPTCdhBcf25X6P6fPdeBiGbiMuN8B2GAKb",
  "key38": "223y473NNHLpwUGYutEV5rJdiBXe98XHgz83pof1mcaKH9WUsXYnQMiHJMoX44KgwB4mXShds62SbYsq9GF8zKgG",
  "key39": "5xaGY1B76czUs6u1VQ5RtV4HkLoctfAhcrdEM63QerijPYnjCbYVhTELCfFk1vBrTfKVPnN2Nb3VwXTxYsR8cyk5"
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
