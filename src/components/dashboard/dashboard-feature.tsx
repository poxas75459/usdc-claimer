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
    "GZMHJpBYqAajnP7pxYLgLQ8sy8ZxhBWVZueSTNEbgHTvELBjDVc62Tk1NViTyjctPAL7hNPHGAmqxAx8ypesepw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e89JXJNn6JDxgZFSk2hEr1H4pvBc8kErLacdK1NXEj4k2KPR4Gzvo3e5TP1ZEiYFTL4kqambY9ocpzzxdXZJgFS",
  "key1": "3zmdg7PEMDYa9k317xNBmsLtiJtJqYLFVZcoPHb16ZntjaN8Msptwz5PWHwa98WTESf3BpKJ1tS3Apakm1ERHsxs",
  "key2": "33LmM5S9nzFWarKnM2GFGpufR1EMnHjWkLW6esyCSUZVGKJ4TFMshVEd6GuZf22Nq2TFTcZj3Q7gfbRoPQwQq7cf",
  "key3": "51uTYVE4WUCgAwLouhj3E7p6TAk4H3axgHLrLbPNxsELmAsjdxj4UP3mSCaMJQAu5K49xLBhMtL8qET8h7KWsGna",
  "key4": "2XDY6hKP7dViSrjBP2esUGoFkB5qMgtHtnHYDK9TCEmC59N9kDU9eht8SG3KDLs7a1sM5r5MyZrJqFYjU2N21iS5",
  "key5": "TkbZKKZQVfF636jAywBCXYyumwnqxXn2D35equCDEP79KFB34bS8hsYB4hSa18t1iz7pFihtnCv7UGG3hZ3UAa6",
  "key6": "2ibJTGeaNWyJpQLN3eKpQywiMEBqrKoCgfHodH1GErsBiGULTPFxTGN5C9zWbEN9KDyf3PwHDbrsbaRqfmrEs72o",
  "key7": "66hHJa1SgcWHKbSpsSNDvnsGuucfkBJGSDopUFtwYTRopVpcMmdisbTbDTMqPFWQEXLA1dGFpyajhwkkf3VEujC5",
  "key8": "frRxPSxNzSyny3WtbMR7bTPSAkgTT8Zg7gNd2kWDZtVMnHhzYxr5gKzgnXpzoovh9g72ofqeR9bq8P3bFVhHatG",
  "key9": "N3Qab4qszE68m5Wtv42aa23LXFxordRP2YkCuVyWGnwLmWCZz1NoNGC3ygfiKiagt3EdngBZQHKKHtZy9qaV5pw",
  "key10": "631E6ibuJBdn818KU8QcSBmKf6Lx6jZeFKUF1bDztpknHgskKdYmSn4gcTf3jLA3iLyyJo6VYtsmDZHubkMtjaV3",
  "key11": "5d6tdeEfhkNiCuxVHNpHHridk9M8qJPVtJQqqirJZjt2vbNjEnZuYD5zuoqES6ySH8JGXE8op5hAwgh2QEsoo89u",
  "key12": "4QnUfJ5xtd7KWkE17ym4RBQAzPK9mfYuuSxFWN2yqr5f6G7epxwfJVMhYsdFByg9Dy3icMDzm1bj99yYrxUyCdiR",
  "key13": "4bASTh2gvLonC98bkGGMnpTrH7U9RBeB64FHvrkfyFfberGiiRf96BaATivFtUdPqRyMt7ztNSscNBHAT1euqC7i",
  "key14": "doXz84mPQth3d8XBHWMqguFLjmPU2vyuHC3uRy2upZsKQMWP8VqEN5tdWVfSAH7Y97uEabhjxnsME3w1PapcDZW",
  "key15": "3KcRzBSMynuShWfyQt5WbJMQfg8FDgKB8Z4RfacQCHT4BQAJys2bcmbmXGCbtft6fBwECryKLawYUkcTAfhF1pKK",
  "key16": "2h9xQuj8pssjP2cRkn2uAf4YJVTbp6iJHJDETqmDG85ymxrDFMx37ZdKLnQTKC1Mrrk6iYXp4HEdHRHG8pZ8dNM2",
  "key17": "43fWDNRACz74Q98WfYwHaZyVVfXzpTbZ63dSevdz7F2RAnXpbsH6vVeKmpFFWq89ttidghovGUd6bKdtVNQkspJa",
  "key18": "2oKr4kxk3FAiUR1krTA7rDiYakHBhxWoQJDqZ1i7EJE2qmgKtiHVzbot9suWyeYjSr3Z8DYPmynixuZB1DnhNVvM",
  "key19": "5Jao7dKbT1whQYENdhH9tor6aKRgueSbe4i3ogpedZpf2Ux9WKQzjAUQ7XuCVVF8whjYFpKFQcMyMGg7Bj11saHP",
  "key20": "35g727tcLGaGFfWssePs17tRTdAdf18aWCEj1tHivYfR1AXGbSUT4t5b4XNxSMtJJar69aeKWZJj296Qx2uvfWac",
  "key21": "3BTMPWSEhRjseFRHLGjZatsoi57JyvZcVaLu3UX4g8zZxnywSWeZmGh8KCavLREQNXEyjDemCMJwy6RNxePXusSP",
  "key22": "38bSNSKwdVektHZBCAJXi9TgaHihWshb26voVSFRMXyvKJCoVZxjQEoHR4ar8B62hkgHNh7DruGAvu8wqsQbTqM1",
  "key23": "2fZMHumHKV4JsYS7mDzrBVavK7uoApNEZdqWWLkKtBdhxptzMDL9ZjZFqSvsuvZ6xCNosHaG1gQQXttgJePwX2c",
  "key24": "nt3puRU1V83HMs9s9SecVZU7rWd1eKZDAchHasZbpowSKvS2KE4MHYKwhAo5C1wuSF9yuJV1sL9kt11fH7rXpv6",
  "key25": "3zus6Cubir4sDR2hRFCRZe4eWLUggCi5oD4dVaYKqMVNarSF2j2ztaMN17DZFnK78aw46HAwzc1mh8MskckLKS4d",
  "key26": "okgsaTcg964yQJgXf62px6hG7WZRqNT5SrWBokJyriW21EZYgkgpCgfK1cxnTfMsNJ4kRvkqPV94j6QZZZYc7ko",
  "key27": "3ZMezqpi6aqmnuqvN637jHZRtvnySxBFGPRuW8PCzynrupAMw7emE6eYpCqpc35qnm4Q8LVqSpvG56t3JYouZv27",
  "key28": "5yt7j5cCAVcSZciRWAwwFmCqGBiNYRLyuKv2XtkMagCsY25vEVX6fXU2eFsn2F3YMggrUyYC8LfWrWbVccv77hv2",
  "key29": "3JiaoMbNFSMmyLkxvU1Rp5Gh22ajB2V9Egt4xvVQfu1BHBZMcWPD5GWRJMa3b5fNM6zFbX4RGaQGsFQWhGJY9UFV",
  "key30": "5yHqbVkosjWtXY7VvJCugFXcLX3gjjgjyWv79LpZ7nvRCmCxXkqQFF1JdpqrWb62w6SEgVbapt2we75TMrEwC5No",
  "key31": "3HYEKe1Woomw1ydtfCzCrXEGj9wLo6SyHexv2vEw6WPsekhx7xyMNEwtJorZ64kPamrvDHVnzAphSkiqg3S17VgQ",
  "key32": "64NdVqdVhrdxZoVA8Nu8NPFcD1mVNLggMT48EfzNaaYTWBEGE7t39iLiWpHYnaC6wzEiRRi13NvXJ28BUaYTbJtQ",
  "key33": "2NVknnPefF4vPvKXNYsM5X6oDbH4rk4zxwL4ntKweqcvkjgh65KfAyHi7koDXHGfYUmzV1rDyd73gwwy4doVUgqj",
  "key34": "2EfkLVizWb2dcoYyTS4BDYKwYvSMnp2HgsAAciBDRsspqCiJVYaDWCUy9ykSDaFuKcQD8vrkLsX41d47fqoYJhLb"
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
