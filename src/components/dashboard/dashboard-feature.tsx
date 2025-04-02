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
    "4kdQi4C39Q31H2uzisYsuKyLLfBXDjyER2FR7h19qsKEvhJH2YmyLoqozUdVVJMnRzJAJJeASQxHoRAgPuWQDvjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpgRijBd57RTRvycEu1Pizmu3Da12usUB1QQio6LMVR6gdpyNkTSuFApWsXnJrcoCvsWFa6Zz2CB57usvCMiJCs",
  "key1": "Ww8yTTxS9upUMDBAhrwoydTVwg9LgxSWkKDSbGbfY48HvuXgsrZ1joK8kPawQxzbCaqAMX88ZNhfK1BxkdjR3rh",
  "key2": "4Mv1t6EARg3P6MWKvPXT5AzV3xP7oRyuEkH9KDSyQ2Q3FA93CX7zXHNyf7KwAjtN78PCdsnBBLH1Wz9oG2WgKCs3",
  "key3": "2BexxEb3B4BjPMnMBEyph9UpJSTPmgaugUocX1TE3vM7adXsktTA3gjjbtsMLTs3EcLEGYssX5Lom4EZxsdfnTMS",
  "key4": "4TDqiSFbA5r1sq2HPjd9DDAEhgAiCCawMMZeueQhb2aGZaTQfK7envtSv1gLzxoheDhR1kKAu7HhhzXvNRqRsnhQ",
  "key5": "2wNNyn6ZgmXk58Jt4Y2yNu5kY9ojyXW8LiCVDECyvbSVQjtBHxKbtwysHWwph2VZrmEUEQqLFjtq21ZtFXCvJWDc",
  "key6": "5eF2mxxCJKKuwLyyGfNsSuTX3izG4ktVFDN6QKwVbAEJW2Brd9yMcfHKgXLuviHHZUzZy1BVYJyB57sNs46fhAcu",
  "key7": "4seare5gSLe9Wuc3uN6WtijkvUDZCB9LuxUGavbRRkiHqpZ3912bWC4UMoLQHcirxNc8f9BqMR3dt8ei8UKifa25",
  "key8": "3Xqe5wGFnc9Qi9DueFbBG9esGzFouBKLb9QNsxk8iUw1hQk2jinN3vnKgsR6n5mbUi4cbL9TDdCAMVMSj8b1gLpe",
  "key9": "5czaaohPJPXuCUiFDWG243SLhvzG1P5AW12BscjrrvuFG8rdVQ3DYqREJ4fAe4MhhJu4A1e9959zUmEtC9ks9gKu",
  "key10": "46Cm1fDhoh5V4Ky6vjE9x1M5XifpXUADLRpDGtHAsWJFifsL8ddfEooqsAQC4wxbYZMfgSGabGcPBErfvkKjsuhY",
  "key11": "4yZzEcnCMtUs3H63nSWWnGm4jcL4jmpKq8B6GxQLaBTwQ2BCQYZu5357AAqYkeAx9cyF5RgSkxS4YA8cQF19FJtd",
  "key12": "3yFMMUgnEzbBp4JfUxC42JvD7vb8ftY264bz6yR4WryHn8mRBZ7PnVLxBh6zZsQkQT8JTy4Dfzox9JPC2wP6t4rE",
  "key13": "5ko6ekDnR33VSejgyEK4gcPXpomqeBHhLZswHEBvPL9WyszNUaExPWxiKfRn7Nu12MNkHeUGTf6QPtQ4LAeyXTBW",
  "key14": "5nQamznfD5Be2gmzgLxvs91N27hRdEqymGjwnH79ENh6sbFou6mbTk95c87XNVPbbShnasPJDuYajZEfRRkyvNfu",
  "key15": "55a6JQzL4hgGv8naBx7RrREXqwSWAmSSgbsvUYpy54XNcyaVy7miHbfQWggPK6qX5fjcE93QJLLkTxXSXzmudMXa",
  "key16": "2YqGNnQjo6SGug8emDaTTSSM2cN1nc9xPbqNBnCuuweaDAByZWMEF9TZTZC284wCckCVEZgg5HsBdtbR9bAo192R",
  "key17": "4gEnQHQRcNCu2SEwb5UPxGiqTGcjy6odfrpVrHRB6tuTNWt8MtUNBS6mq2F6ZJnf3mS8mLr97ZLVRG6LqaX2hzFv",
  "key18": "26Hz84EjtQvxUhULFcoWGW5bYmVwvgfxhqZeNkGN64ck82dsvAbHmZXyLDXp4zdQbLX6xAqPUbtEMZAriF7G4EF5",
  "key19": "NJiqJevNtqhvomCv8Jjf1o6HAfQdd62e3QJJeEiZQAvHM1WWRAb37sTtiuVpEgqU5jGit14vmd2jJ4uwMc1tW9g",
  "key20": "2yZi33Dd5MHKJSfuqcHhdMDLnRcosVPnm8sziE7YNTf4gNC8R5MzCikkxLVzpaj7adWH4Vh1CLuF9FgXW6SefV9H",
  "key21": "2kJ5TBCScQFBmVUQAZCv9BmZ6qHqrYnQaLNPmtjmyRg698b9biYVidUfd8z9h5ynjRpuLafeU3SveczAYwHBdNkQ",
  "key22": "4JXE97muThQ8CopjqJbqirJz6WgwmScAcvNHapGvsgDgreZ5hWR5JWzRWAp3s5NdzX3t3AY9GvNaav9D4BcubzP3",
  "key23": "4hRcK4CiZCCpDtJT2QLdJVNEe2RgSJCjKevCpKkXxDA2eXVP1g9hwmtUwLQtjeB9Z4LMGWHBhWxYNVSs81GgCSN8",
  "key24": "2dF6nmwJ43VT1kaNmVfVw68grRSXh9Lx5xQ3VW1WvBK9Ke7tyHUrA2GUSxFUd4PCCMA8pn7cvg5vzHiNa83xjHXH",
  "key25": "D7zsugP5kRAL2m9SNtqqLTiUGj4rR3EM7A21w8Zzur7zJammeRwoVWm5t9fq4MwbyJVMKpCjj5w3KAiaQaUAwcp",
  "key26": "4di1b31Kf7KyFB3uVGKQK4tEGGwHXDCxdTsJQY9r4TYj1sw9hHjSsnPxyWs7RyQSpwx6qYN6YfLUsfiYjSTDoPXS",
  "key27": "HbKqjB5MVxSh2XJAidvuSQrLfcp4UCBWqWLrhWbdj4o18ojeEChwj7rPpYoyqxgLMkjcayMgH6RzXJForDD2q9n",
  "key28": "4QvyRg7bhrEefE6HTwZgCuWAWkj3npjBGjs9bSs6WXRCAefuvD5A8vecbHe7XveWZ4x5F1rtBfA7VpVtpdFhMyw4",
  "key29": "Yedbf7o3YeYYYxjPWLMgRUk7zgjEhKbGjQCp4bH3CvdFmhmNivFH7qEAPWRBZQ74XvtXurBzx4yUPQ9xSBzUP1C",
  "key30": "2XRjJBxpCrUiC7ckQbBHTmKF5xWrovh8bLFTGqx4U3GkJ63moJPeiiHXhMsuoVVsumTB4DkFThekkE6hV4J18QeC",
  "key31": "4P1th75Mp21rARbZz7cbg19ZKiyR6b2Pn7isDRMYoGL4envUSf4xKSYBtK3Xqo6LyZ9y3FcbVceghdSan9yhohbt",
  "key32": "66RphfKvpCVEr3bLfuvfjExPzRDRoVLJm6AVJNDZWFq3frdhK7h8jPNhFw7KNtS98kU78CrwWreoyNpXkFrPzYyJ",
  "key33": "3oR9iNdRciyraL4r11XqRgxk9r6ApJwuuYoXj2ukWqQfXGExa9pehr2rYZtBGvbtAJysLVd5sPa8AKYG2ctadL7o",
  "key34": "61xXExRPdNzGF1183QR48W5iX92BF3Q2apXw5KfzaijwfXjRMaT39QeyUsSuNFHt86taqRqhTv62dzSK3bXpY1Gu",
  "key35": "TzE429QtYQihFi7UBVgZj5T8oZmTwHbPppAMEKnEEk9aJmmH9DN15omhDb8fRxK4JaRys6BPkevG2z6HCYmybUH",
  "key36": "37y4wg3QFWXxJy6npSwPSuFeSQQQnpYjaUrMxqZ6oVsHijJSNEjZTRtJL5JkSkR3eqLQACCwRk9P5NYwE8gpztLa",
  "key37": "5jskbREYKXVtrKkSXRRDfEQkDgudAtae6tzhxYwxvHMfobutWgdRFJhW3jAgFZ8gce6bTjPUA12G63v8FjxcBAWr",
  "key38": "exBQSpqoAZA43LVvEiyxAmA8u2DmSwDNSbXEDEvUR4biwS4ns2cDfp7gA5JpfQLH37ZUw8wmmibkFND15XZtZup",
  "key39": "2uDA6BgED2Xmp1698eM6ZV1b6ZG9GJkYQH7475m34xmDDGAU3etHaijwxuh8YW45ZbV2QnbzmZcSWrVPVe26K9vL",
  "key40": "yFgz9zrajnDroFoQ7VU9DC1H5GR4tvnYbyT6uywvLCn32znfvdh9rGUDTk4DUcATmXt1vMqix8Um3XVskegvUWU",
  "key41": "5T2dbZMs52bCFEywwMYL3AyfteauaYPV2V9ougMQgGkTwpGcgoky2un6AxwdogAjC3u6Rsq7uMWnX7gW8KTNFhXe",
  "key42": "494Dy5BwC3YLkfcWcFsZwbP6RtQKcQHePEGEspxBfoZzGV3Eygm1UuwM5yWWVpXQSo4LKbNXrxUU25N4QEfc555d",
  "key43": "5fhnsBP6aye2tyCWhebA3ZH5XERpm2eGAq1oZXN9JCz6NGNSY8EvdLGNpp4Pzt69iC81nqwadCWVW2ZmQ6SNye3U",
  "key44": "JXKhJzuP7Am3GBA6h9PGHA9PdqsMpts7iovPt3diBwtYxV3B1dxQd16maQ1UvGhFh4ZGkGJu5eXripvm5mDo37V",
  "key45": "41nmJULmqq7eBumJLyCbb9uE4MC5oF3YCavmaL4uLtCXbyz4nSshXZQ9XiaBn96ZWMugXyCESp9RRU5WuTFjmAHZ"
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
