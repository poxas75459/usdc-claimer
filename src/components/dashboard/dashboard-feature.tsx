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
    "5p55a7PFasY3AoQ6nMfPAfkHXw5WAUNksDYyLneH52h88xPC5GETHBecaSDQYxbNSwuXiUPAqS7FgSeXxpAov6ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKe7JLQSMVE6sw3Skyrw1mcwSWVBbapatNniNymax37XDg1vXAmX6BLfLe8Vr1mzyZWfrc62iPHm65oznb4NfML",
  "key1": "3oBrLRTMTRLPg33MkPf8tc4DZbUxEhdpUBySy6s6y51MJ4RjU5QSd2K1nMkoUG6hDzjotDh7gvBFFUakuMmKhshq",
  "key2": "5XCvtBLVBs2U9YTCcZJam6CbAULufVt9acENGVGXNYWayMNUDfwv48HHbr75mE1Wtz6zRFqx4U4LkdqZnoUswQm",
  "key3": "nTTLWNWwmhDs9H2pqbPkhC7nUw8DvSUB88kbQgVs1fygin1m6qJYCXdAKrH1yr6QQredAYwUWydCqpfv1QVz3h3",
  "key4": "4rFvNGadsMVahKr9UAybMZU5LCXsMRidLum9UA6itrFwtVX4QS5pPFUyDwncFMxqNh4yzps2uFAfrKmcmBDnwkDu",
  "key5": "4x1BZD9xF3iNUEz1RVSdbpRNsMtASjzBcCym7gJ2CmXh9u9vTGEBY7VGHk8u5MXXdRvKdQGQyQu1mUvCwBM46uuW",
  "key6": "4hV7RE6tF93BoM7wxsQ8DYvyBKHQA3dkUgpApEec3PSStgPJwcBSpEZoA2dn6oZe7CsypzJEzB7XRKfQ89pSkpBd",
  "key7": "xN13nniiejLfK67aU1AvFpEDPtrrvcZEKxaTzWEH77ph3LsGrg3UcuW7w2nkcACn7K1aHmErUCUtiVkkb2XXkVF",
  "key8": "4jZEBaTTb4nAk4DPSCnCciETG6AUjBzrV5FANJdDNqw6KX18TnmGzM3kChV36XQyobDQfmKe58KNatnGy7FmGNY1",
  "key9": "5eabZX38AWaVyUp1cqf9Dq1bu1NsCiTszeZmYhmJ6vFaKsD74HcmZ8DyHv7kb8zyJnfdwgKHMwMMDSGKsT5J2wsh",
  "key10": "3snbVf3jsf122v2LX8RcBHZEBaDe9iLxp8H5DsBxWsYBnd1FCEWbzxMVPb5x9LMAdSiuR6dR3J9k7vNSkGGMTzRP",
  "key11": "2JX8kVG4WqtLqHU4DV28nsHAXNQPzUfmCbA4AahPdsTJjqdWayx3AZhDnCnxjkfn88XFjQriZ8tMYVbLbmJNmhiC",
  "key12": "33hmn44p8r3TJY3e8qyrpbj5gCgWwyV3SRk8CxNaX7JmFNF5cKha4vioLNtk1o3R13iojcp6uGbPRXtgNQgqXyqh",
  "key13": "5R5f8ju9LrrbaCrxHZReR1WTJxHoGsQEABXF5gtmGh7keBKi849VHjPzHkRaCFZ8oJD6TQJq7dQiB1N8JEW4VTQV",
  "key14": "2SSTGXPKm9ZZAnZ81td2RPNym5YkUhryF3kzy9hJzwXZnrTva38jiocuCfeHRXhVwcg9kqbgs2cx3zNdWwnH4oSv",
  "key15": "3YDTaLWaAbyKDU5D99j4vsEfg69ddVGfGH57vsyhVqEb3tjHEJtBb2dnW7Q5P6xxQeTLqpPY8MHTXh5MncbyugMf",
  "key16": "6676NGsKNLW6V5Fz7wvFfiT1PpTeG14v25QzQio58s4MXtW1BjbDZRMdrXQKMDQj5okggga7AsdPvw8cadfjpX3x",
  "key17": "4YnU3mfpwBbNTkmMWqUYLcQHMDCRAjYAqy5hs9skn6kjKDsViY1wgQycogWS667Rn9vb6NepKV66Uux8yZMh8ceE",
  "key18": "23my5Fx2822fgmvRSY8PjBHiMjGZB6vYSJmXYXGtiurEaoRsX26miNhRkYrprRcygr8ZJvzf5HPYBuFuiZF4cLks",
  "key19": "5P25uM1SEhGRZxPU9G5Ax7TGMSzZFRMQyiV9XDFixRwJ3VUFJ6eSfWwg8PgE66UAA9XTMPYGcWrfdehtokw8sTgD",
  "key20": "25ijWNkYm6nFTyGeh595isfVLoCBySDV3E21yJ8uFh1wo9TP6gFSc6L1S3ARDbfN4SRkyzo5aJruj8FHsGT2M8A9",
  "key21": "2af8FJmVHgVPFdbvCmZw5Krkipo6GR7Tf9rHLvte3DwSayRiJjHNdZ4eZSmoV4L29MwmXtq1EcW5E8h4zfS68Rp6",
  "key22": "5XpdWwjyPohgHjkRYwRbdHD6c6UiszLs6Egztb4TnVtTNuoGqBdxLUPnorCzLa4QbJkSTdgeVhgCnRjxsCGZxdTh",
  "key23": "t7Upa3idRetNdMEMbr8pBvUbHsNAeqn3EQEnY78kRKExoGr9mFxCK8wMEJmYu77TLgU5jrT3pv6nQW3kJJPRo2W",
  "key24": "4gqRt9txAePb6D4w8Y5au9s4qTfkXHKZoAWERkwqP8o8bNPaERZ6BDuDWApWpkLF4EwJp7dBbrc93tWiGJ8U5nhk",
  "key25": "3zruEuwMTrvQtTsQLVvzccxfjLZNNXYiHcMxMbhBEjzAnZcJ3fFqSfSFj9tWS13V5T8mCKBVRUw9sx58Mt6hnUSS",
  "key26": "3bxdcDqyrofCWgchdwfQYZG4up1Umwqwzx1gg4Pp7c1RSK79bqcQb9zQCFJuFV9MCqZCk1TKfHr44CVujAKdCbYB",
  "key27": "4Wvpt5Jtd77nWBExFACBJZJhFRBZSf6y1ne7LLsyeGW1jE7G5qvnxaCvExNgWDTfxBNnVWWsYhSTmhisCr8hzbgy",
  "key28": "xJmdssoqATqM5HivVk7yExVvNCy8F8v8k6GoZcTBjfCEjXfUxzJqThr7TtLs5Jvrqga3MpsMC7Hsc4ZMuFKamRN",
  "key29": "34pRtUaf7vxc8hVRVMSDjv17S6dNwBEotm2cQ2N44m6qvkGWYgmX2XQnqWE9paeonUaHTpn58CYs4T55M5xwJnD4",
  "key30": "9DRAYXqu9CfcjVAeYusdK95V7St6PEarP8AxoCQKkRwmoBZkJqgJwN197FS3AS95a4KKbLr5qZjNXYLRyECzr7H",
  "key31": "5YauJ2KC2krJZ38b7eaRSSob23HmX9N1dtkAXSFwJDnECDJ6A6aPgwUvUUpNJhtcBWnTmp2TZ56fLoHQgQAXhTK2",
  "key32": "4NXPW7avQ7q1L6MGU98ByojPSE1qBiwubZ1imZSVf5QL3rUzHSKGQj7Y1KsEZRpHVv5FaH1GmpsX5q7MQyVeSSTd",
  "key33": "3X6RmVMMUEocuALxT3EE1vBV83iYa1UvmGCqTwsosCPCGpq4a3art3u8x6C8Qs6wTpnqgWJA8bjNnbPPXKFv1gQh",
  "key34": "hSwi6ons72syCCr5GbAPWE9cchtyqrpraXFmGsgwDLFYvNr2xVakQkGnM2RHcfUgEFyPosVF98RgdeBbXVsmd91",
  "key35": "R3bwwAfPC9voicivQ5VVNEipHKqmudxkgLd5fAouaru5CR7mHzkatzAhWdG95N9b2BnsxtfEj4rmBBoCJLng9cP",
  "key36": "4eJovTmx2maEHvtLujh1mnQiZdSr2fNZtU4h4YnVGkt4nRXKos9FJREbwXvYJWan7jz2RGGKSUDRbDPmP7fmG7HF",
  "key37": "3pN9qmhxy4mEVsBy2SZGCArxCwu4LAghLegukN77vCMpEC7vU75M53pnSWbs4QLDVeiWZXgenGooPWspThANuMDu",
  "key38": "w6bYod8rXRt9DrkgqHNSWXhuY4sejbUyHtqFaZia7xRvetZzzCFG2AnsJhXsAjYaQgP2GB9gN6ckkV5F2E7GbM2",
  "key39": "5DkgPUhhSLHsY1srE1oYYGgsvVK4hEDpvJDE4KdnrAvfYVYDPB8iFx8RG7HpD8oNJJtvM1EqzyMoouinGTeSx2Kv",
  "key40": "5vCHsEKFZrsmdaiM8k226nkgorVcGmnx51MJJJn2qXF6pftUuJ7UgYAVBVEYkVsKdUkcJYXWm3JMTGuEEkWGeiyA",
  "key41": "55BnxM3dCt9XuK3pgbovsxCZMtubbQzijCqm7TBsJnxPw2a3aCwR819iujy4pc77y5zSnjdjdTWbf3RCWKkvssyE",
  "key42": "5wZCeMggqwfGRLGZ6fKZhBgWoCG5rHnUPXv7K5cFJY7VY4uWj1raVKo7eYauhDrWQTVfdFz29XkDWXSWEDgyibp5",
  "key43": "rTJaJ2UqyrjwzLQy7J8vZZBd2QbDQkAHLHbJWDbsiq6suqTaJdxnqAmK2Y4gzAKr7Ai3SfPrPndmPZBZCYJXw8u",
  "key44": "3NTHix3ajnxpvyVpB2SkbS3RZVgPC7Qu6hUMqDKqnyZCPwmxCf5j6kNCvFbShDK93BxbfyUGZrg11fqpt5xch8Ch",
  "key45": "xkcrqnJcC2RAVrEC5tdwcFXn4pFGvosJVaNGLVsYkTosEFRGA5tp6rai3C5gqrasoQZFug2AZGbXwd5gyqGUn26",
  "key46": "47bYWLKqdXbovhN6apwnqugERR3Hq3brMnY16fWNnZ8uNWiXXnfLxcT7FcQbdDq1xRj3stMDhSWeYsBopq1pLGBC"
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
