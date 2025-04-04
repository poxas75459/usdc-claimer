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
    "3U8pgc7cDqSYas2cSYmFb98A3rBPqkDY8sagJD1RXv1mBBc76P5dvzDuZ83Um4Xnwywn8SxHExF6cwr7XNJWggCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SBftzwVmyviYucEgR8eyKNnx39yb3Tj3bT9pPskaKvZ8WGzuDeQzcsKSd7jMadrXy7MRBzCGCR6CiFsgc9viTf",
  "key1": "2cwq3MokYv9gFC3WqocZTy982xRehSxDxD6wD5kcKFwkYFkhS22m4BTuDWSEk6nuptTJAQFXihHXsFEXqcaBBm82",
  "key2": "2FpdS8kQWrt573ugCF9KJYenDc8bSzwUgkUR3KNzNVbcDwxEG2fNnCNXLhziCdBjJMV2g3G5fqxuKAGr8sU2VhPF",
  "key3": "3eQ5KanbWgc8y5oJxdEGTNAwkoPatRrLk1PVKfhCLamJYYDLaZG1bQp7kwvX1YrAGV5uop2VVzQs4XMjneFPf5ho",
  "key4": "4xCk7ME6RyLBJap3QiBqgJZnEf3XVr1vX73qwokMvpK7MzEk4ftkFVSgD91DV9FgChL2D86gK3geEUMAgvzztS71",
  "key5": "4CmiZgq9SAnMyVvkEVKntv9rkAE6NaMwNB1npdTkJ7q3WiYC7qvHDe5w5hps37LkoHBwFKz95nYf7svkMeLGaQrS",
  "key6": "chGyyKGXa3wJVmekv6uuf2hn1YeQvRu4hupokVksRYzMZ6m5u2H1YjwgVN6xKF7oLwUqEPRG9jyYKow4n4ecpAE",
  "key7": "38L6Er62VLoM1SXGzpSWrdwKLas7aVpnuMsn75hVNaMWJ5HpFuJ7GhWgyAtfuCYYqXqbAhF4QvSDxQ3w6zC9rRNh",
  "key8": "5F7FFD8G2rVUPcsFHhfTKdpecdKsnCniSiBidDX31B3PpYj1CEAXbUNbSgjun2F6MT9KCEdT6naXYFEfMCAwnHmX",
  "key9": "2YPzzX2rgE5G5aQKhpLzeuPxp9UJyMxjVxuHXHNybraG6NcXvPxw3GZrKcfmSkSpo3ij1WnxYwxkMyBSdLLut3b9",
  "key10": "mRqGgYLBjrpfTSVjCrShqj6Y3NLHXvCMfJtEyDkuvKHz1kYB1brb6rRAuYwZHRp41jTAEmacRAKTb2efLfrsu2J",
  "key11": "x8X4oyFw34XxEXgxsqZqmszzchVhkmm8QCfBWuywk6X2ggsBRR77Taxja6zbUbssENVvAYLv16HZafp6SEx4aps",
  "key12": "35DMdPoYDo62gV5GZJmEwnQZkGy1MsZCXEJowFvR5TGoeQqpDpQ6FdX1jwUoqH5sHLExKZrq8r63GLinse9zoF4p",
  "key13": "aBUzrdBiNANsLojjqVn8BEkM5M9NedB6bpU8pkeh1pbJqCZJVTiJw3wxkyBP3e5F7C69XCCZLa3TGV9sBaEPW2V",
  "key14": "3dkR3abUcHZEoALQ9nVVWRAhhgh8xHbgt9MAiU1mFqLnkQviDc3dyUFqjp1Lgh43x2YD2oaVXZxS5sjafNQZVtbT",
  "key15": "4F9RGoVtBgtJnNFLSjTahxrCYFkzTZnakmK6rCxRgB5489sBSA9yDvoj8i5gnGUSnPbZMsb9S4ZtMMuzJnExWouu",
  "key16": "2rZYcJguvYrtn89rnTg3sdkAU8tFPqsRuLuG1HSmmJbEPEcey8eW71oy2Motabp9tYxUJiqpRJa9kXKaJKyzeYE4",
  "key17": "4kNK3R3NAdgrWmQhLwYJmWgGLHAD9UZ5t4wfPXpY1Z5hQQnsDb8DLeo7ZjyjyWesGpdZkagWXN4NvE3Kwq9A9WXi",
  "key18": "wzoXEai2h8KGGV7k8JPZJGnrwGJGHUu2d4tZFrd4YSyxSdejEMGPyqMt4PCrFpvr3e2f7xqmSASrmmJgMmovrsD",
  "key19": "3xpbLqpHS4AyHD2JYh2QhcQjEEUi2g7CXyBf7rtfWsoj5JjCJoDXpwg7ix6Vs99cEe5ke9vqxrx2yVo4Dro6WiFu",
  "key20": "47FHWv4mc2hhFcRyLDE9oprjdBk9y2BcTiT21zoGtNYBkQAbPYHdcqT75XF8AgSqRWA8j7UrNutHeUCVBhbqLNi6",
  "key21": "4JyCUPgyavL49iZv8GCoaFWxJabkMpQyDDQAT7RKM2jPk5xX1BUs1FCK2cvjn4oQx7kuyXQpPAHAwzBpvShfDBd6",
  "key22": "58UT3P1VJUqxH7XDQhBB1FWnf6N5qwrBEyW6CrhD5uHELhwo7TmVe5e2R4W6zdv2dcTwD4d9a9wQgpsJdtKvgcAF",
  "key23": "2RPwtq6bczMPZ7hjejMHvz1gsp9rmPx5sTzfzMiLG1YVmFR81Bckxtbs3PutZJ8MQQdoF7eFWc8whsSQWdm3oE6U",
  "key24": "ci5axVoc3syfi4j5spyD1Jm5rrKXngoHrmiq1kUFREEJVdBzFCaiAa4UJ71DrzhCKy39CqCU2obaKZJy16wM4EV",
  "key25": "2pfPmWJfjYf2iKeZmZR63rmmZceMK51prtzTeLTRiXmzzpJETSLNXmYc7F1mWEjiZ8JVjqbNkMPK6LFSCR3Qizaq",
  "key26": "4NN5fyHRCwzn4yccJZbWKTPCwsgemTmYBgUq7hoe2NUDdRSvWPLAjs4i2dFm5KdrRy2zxJ3eD2qzwedUvkdJKysp",
  "key27": "tXzgTXMAVSE1wPnoTZFrnr2BPfHvJz2ARf6AdiudQ2fQgiivJidSVAe9pzJm8hCaDtiLrPrx49pmqmegbr4A4W7",
  "key28": "2JybTvmChUcao4YmL7EyPuBjJdsspxqTZyDSQDxNfUeV3sFsYcCyAYcYZqdsjXhvvyJzcgv3RxQaCfETXCHf4mAq",
  "key29": "Zic5RD9gAVUpydEjpQj4b1FtmMgy2T8k4gVj7Gfq8Tr6qGv4SaQyNm6Cf9dKEGxUizPWQbpzZhLPMwoMUkg3yNy",
  "key30": "5rkt5JCsjui8sisnUXdBZeqE1EES4epzZQu3etye2gb65CwXaAUUhK93zheFJWdFdsNsrk6bNd5epXyNGgTEqTMh",
  "key31": "5K3sh2aqszdxC9ckcY9wWFfEUrrLM9vpYgYzPcmQ5HrGkgAS1ccaZ2aLHpHMAzVwhs1q8owzyDziFXQsdSnkB5aM",
  "key32": "3fJ5G3djdBZXDvrvfh9uYWbTWgrvMvW7cgZQ5DBfvP1kq3T8f6FV95yizSKZSgMP6xVvkUUM6C2tzJzZDYopjAg7",
  "key33": "58C9NyMr84oHnWjygejACxkNe3613jHBbgLzhaknrua4obEipMgJENgr8s5YWr3iGWDaS2bqPRwFZaY5Qb5cZA1r",
  "key34": "aMr1i1B2DMuKEiDjQkSPN9ibMhHaRjRFM25Ej9Tt3Z8NCJ2svVTrUcg4HjBZDgvVdNL7QBjcL4sxNKFjae1wHet",
  "key35": "j3yhLZB1oyPQ4BQTwfbLr42xucddLo1VJNq7RXoHmBGJ4fB6c4UK1pr52Ysp1YGJATh5e9oMmoMgzdSxp8ATg1E",
  "key36": "5QKEL219Ms3cqDrjF7rCGWATUVqU7q9Cj8DYzhfqJtXZSmRY31ad67N5EHGYrUaR2yN3tDCNzhpNxRmZZGfuJjoY",
  "key37": "3TiyyrkcAjMAKQfjACRSWoGo4YfAMp7soTudYv9vBfsjQ3DmepTw9jVGezZ4BfMKx1q8sJu5nMXFTadeTrBmnVCw",
  "key38": "4tHtrtauXJmJWVtQADzB4iWZU491FUxofxyWCH5aGRTVLCWkKaT7EbwJBTE1KDZ37wxMRy22uEcTgDWe18EzmXSa",
  "key39": "44GZBGXkdDiiRQSqCkcvRVLBJ6k8D7z3UdFMPCZ1Q4P665AaWGrLBQMLp4SrLEe4AjwV8btmdWr43K1tTvX6mGQR",
  "key40": "2WtB81osGU1urc5dH99KK15xoXuE9m6TRKBEfdcNyvqWqs49bvVQyyDELZ8wtDWjdrvJ7he3XgU8o2BXxs9cK1D8",
  "key41": "3w15eQKFe1b92BbCSfG9SkKVc7z5bjkQJPmLkmC8rpQVi7emYGLic6zPDMCyoPmGSdim4jAjzXoH4VhSpfphb14L",
  "key42": "ZxSNLnPoih6ZzSVjPeunsjCQp3uJPgiTtVAyj6hqsbYRJsuF7fZcHF88DJTR1FtL3KLRx9evoBZJkgms5wCiuoj",
  "key43": "5aeaovSGnYrwrLdX4XWpi1v69CYXVTqNzncPbByWT1YryEHmNicbyWTpErjJZiPg2EzS2KGvH1x8xFKjApJCvXHF",
  "key44": "J3V7qvoHWgZPeAJSJH3TqYQYRh21iUYkFpdEkeuEzSHpmgzsvmAdJgu8y6YHyn6kW5BGsBKV2AqfzfSYLnPiYEW"
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
