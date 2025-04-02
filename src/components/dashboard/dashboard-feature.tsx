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
    "4XscyUo9rxx5TK68CaEqJfprUa96APfa7BNjDrsK8HFiD5T8gknQxMxNeat8XWU2QyAvz1Lyju1LkV26HokbVuFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckBwRtksUH2r818i4eL59vZg2t3EWEa6Wf2Ar5h5TmNZpZ286vnSmx3svvXXxrh9DvgaE3ZXgZWNidYnbGpGtHQ",
  "key1": "55FeMsVKhCqnu1FpNjYL6N2iR4UuCB9qqR1uApyRm6tJmJzAGxTrETc8eXdThcRHynEYs6geaxZ9uWybZ1XTZBCR",
  "key2": "5rNM23Hc2fGvSvKKHej8uTDeoGkw64Uw5rujQonUJsfSZgD5k4is1zA9pwiWKHceD46T4fiptvi69mNxkCSiAn2r",
  "key3": "LgrqqQfRZrto24T2sufRrVwk8uMU84Exur6LfUq8Urh4sT1k4kprBwzhDjuY1ZTEzpsRmLo2Qe9hNJ6h1bvyV1D",
  "key4": "3u8cpDzBodNsevp8H5NFnXMsu5AAXCcY46qYMoFWiMiQkPtBtQP2Sr7eENL89z7JkTNoApNxQH2nMpmZiCouHjn8",
  "key5": "5ta24ay7biuBNDE3E8SvHUB64vf5vU8MoKZ4wHocsKGNHZAaNyX7DUR86YdwSTZmvuFkNVg38QGM5pngZqe2NgVt",
  "key6": "5xxrM7JFiUxtcR17sGLk4nsqExkPUAoW9EA8gSGtjpt7Es9p6RVrRVVJjtK6boMF7PFa3pWHb4x1dxFDGQHtFoNX",
  "key7": "2SYf9ebdtiaVGCs85cQPRLXTC19t4WCzqArs6n3cHGnCvg1WX66ZAHcTsdYNdvVK4WDCFCSmvEAU4NsmUUFD71zP",
  "key8": "499Hs9BbEcC7adJEeqdSj4eX5aWchwVLbrQtV9Hy37CTimEdmKPc1oxamVxyDnQjSRcDNULrJ4g1sKgP7CcghA7B",
  "key9": "5kVgXFaB49n9Bf9WD45KfLeq9PAk6y3e2gEp1U1CnjaSqSR1LRvWrPoeAKaKGDLXhpMKnpKcghXg55Dd3EE6gq9Q",
  "key10": "DUeKssWKyvCC9MQZAjotuTWJA1vqNu7YeP2gpLmhWge6GfVq78WM4hNGBgfq7sBpBy4GadXEfKUeDnGThXnBnWS",
  "key11": "5we4vEPjZvbeegDuvNbR3Q1fYa6Xzr7hDLB8etyTEu6SeGcBW3wXMCWSJre7bt34HHWgJauiVafP5fuWWZyAxjLm",
  "key12": "3abrxcGLPoiXV18EoVWF8Aim23pbkvZdRnGvtFVknDCAurJQ9koDpXXCfMCHddUSJqHgK6RDhQuwRDD2z2HQgeUK",
  "key13": "4j7eTsw27kcNXTiWmWdyNRP2TzieTxPmdaB7Wv9p2Zgg3NTop5y1bWTN1A6bRHxgeLJG8dixwLAZsgVQDJsLiu3o",
  "key14": "4AjMAYFEjPQ24sUVBQ6WJQ3CJwovWA9JTrfvDvFFjzzpV5i3BxdT39BZtuubm974BQ16jDi2ayysVkjD4hUb12bz",
  "key15": "3m9gFyu4ecZX4iAvi4LFArQnRctsiG2EamqRe2fJempHB9G4URhmbfwNv8MCHyTwoKHT14YNNBWGxSxaWNWvCCdJ",
  "key16": "4ha1WVqvn5D7tZzSavSUZnXeJ2fV7FA5axSwPxLCMSgxQkRRqbMy2Zo2DgMNNaLy45atR3BM2va89eKf9iE4KsUg",
  "key17": "65SCdXwrNU28L9aXJVq2gt9BxfDhYsebWGcFKn7me9UX366MMRBpDp6yCez5rwo5HGfEFWAvodrSkFvQyxc3cBoG",
  "key18": "3c2s8P9AA4KpPrYke2AuUJwXyty63cW8yv7ZvVdcbUyR9LTQEbt5qawX6YPMwiVQQZXHacfBMzhbxJWWdiGH3zPB",
  "key19": "4tTV18aspzVa1LFPnWWCdbWaJTo1RC5qq1zaFrVcGbdpCuoMRstqxicDnHURo4cbAdnXy3kwQYtgGQ16UsVvrJRg",
  "key20": "TvdHNoCx3HuNTtBf3sQv19p5df7hGQhb8XEmQo1Cw733YV94fHLJ9Zi1yfCaN5Gr2kigpWChMAmy8fZrow8Mrpd",
  "key21": "5cuiDDhtbvmRUouxd6ivP6gaTgq35qYpwyUnP2ExMFyK8EuNHj2EWvVpE8QQsNaKbT5UA8wCEM1PkC9tuQmfSogv",
  "key22": "3Cmc4Mrm4kD9wuQTzFNHvobid3P2aicBbMg4g7xrcby5eUzS4eg5Ra519Gat4m7uBPZHDoWH9D7WCMWH9mCWMT2s",
  "key23": "5vcTkbP7EUpdcvCCpRA6ZDpH8cZt8SnerZMcEucScDXUmGJKyiYL696CqBKQMfX5Abfou5vjABVw35oJ9t3HmSDi",
  "key24": "66GPMxf4uq8aExDK92sP7UAXEbeW26PHavJV2wPbncB9LFfun6kDwNwpsF62BZRHWafERHH9z72Th6B38aKZ1jxE",
  "key25": "2ffnQq1gxNiSHMWL6F55Nvx4bcyYfrxGpe4kAspz6AA2D8kiJfMLmQ9jTPxhbKs2v44PV6UGaS1ZiJ9PQ3Vij5R5",
  "key26": "397a5TxNy4pviCmGo4cYTSmQGtuAFrKxr3GP7HS1sZsmopdrLsFbG1A6CUNxSav7uijW1YTtq3Uvmgzx5Qt9DymN",
  "key27": "2SFi1vJpeVQg38SBw9wKKTvBJXsVFxG2jc1kWBwcf5ZyQdVpwvfKuc7hohKvyjnxuX5WMj5DLZda2HhbQaKmeL58",
  "key28": "2NnwFyg1CM5hpW3ZUfgSXjYhTUEFfnqMq1kyUaBjji3fZvmikNqwcBZLyZ2jQrt5ZFbY2vT5wmq3znCn1UCcJmdu",
  "key29": "4zb3Gpq9BsBDSGAdiMgacFptyFuHuNcrKP9ZyNJjDyqRkKVxzZNdUU2poxb9RnxXxBqiP7d4tUfMXkHn7g3YBU5J",
  "key30": "5rmeQ6febPWehVAGMrzqup6W5G2biN9DurGaGWsuZ1CgSJPywQYdu4QPHfN4TygDcFcvMw28tbTeWMuB3E2h4Y88",
  "key31": "tx3JRj3bEFbUt5aF7mwHjXM5kkAdVHxSpjX5gnibBxv2QetEZLdrsoMZu5SJqyaAPjFLkDEb5YrFahRm4SmShm8",
  "key32": "4HyjWyrEdpXWwR8aUMkKbsJwysBquMb9BSLsyFZYTxLD85dcYtwazFabR1BJ5rgE8xFmmMGzQS4h9WwqTqGBT1St",
  "key33": "2C4WYHMHnuV3iXWSL3fMEfjkFs4NofFRDH2EbukedWGYBg7E9ZK1hbHDhrKzzPNMFCekBucgXC61TZnYrhpbVdqo",
  "key34": "5vhtgkRPe5A55sjAqbFzQpL9eQ7ywmWZYSsrMdZH2rH428P7f3rQDfukcw2Zc8bybKtkfjCp3j1cYzec8FoT3oJv",
  "key35": "5rcDCd1b89rxXaDvrKdKW8XU3dz9QQzgBk4286tbJwezXMQKiP59c17i3d9d59YB9T9c9kfVz3HqpcfoaDc1r1E3"
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
