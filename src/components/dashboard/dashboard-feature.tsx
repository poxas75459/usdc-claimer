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
    "wQizNZngQdguqwuDiUi4hKiYhZvQnuw73kcTucn6WP2G75FHsFzKw99NtLsU8rDYQJp8NsRBJhGtunY56gtjQLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrpPTu5JCwfZvk1nDhpLPCR3x9z3NUPv3wETrEpKxrtgfbwgVnRPgxz9G7FpfRTsLEZ7G4xXoWeqkGKhgPrmNSL",
  "key1": "2tA6VkM2NVoLkDnNwS7xTLkJvNnb2yGT4WCx5CXF2eBaDrovhMnhSN6vtUULMqSQVEpcsJNQP6bme5BmR413LS9z",
  "key2": "3beS4zuZ9wmX2dHKqwHpWVUBhcuL5GttAPQWTFiizxjLGSho2iy7AjJFR86pUAzqTjLqwAi9veYb3BpUejvvS5ph",
  "key3": "3KVZTecDS65gTvUp7RueEjgN2hF9UkMzZMjiSLtfcJW6Qb1L81CzK7JrT2EzoPLYqz76tUweuMTRq9kzfrqBxk3g",
  "key4": "5NW2th1ua71pfqg5EpRm6PtqatrnqpLhxurAK9hek5nzdzb2s41gHr5iKVniVW8ryhDDTkKw1CpCZrYssByJnriY",
  "key5": "4z5PA5PAU8BSQHjRHVRhtWjmK2hSde9dxcCzvtgH6z9776zNwobbwEjJcAeLwvD7WwDS8exuXjdazAqLEPQyL3DV",
  "key6": "3hepmqziBb9S1547FeCArohZS6MmG9pDF3PNBsvAYBKTMxeopvx4rdSH2pd8RzUtGXiABzD2CmRA2eU2qNWph3Ap",
  "key7": "2g8gXJEkwv4SvLCuydiHSnWBqaTxcuJCg4nrF61MzthpBC33VKvAxP8yegVexPZazVD27kzTzRHgFJjYSc6Vumes",
  "key8": "2UBobRyQTtXWjR7CDfmfjCR7TZSfRwn3KTGcsNssfE5k9XhPgnGvfyjJi5YVHhZdALo9cgRJsoLpjfLYqftUa8H5",
  "key9": "42vQeRRK4TWXMnzLisTMM719UdeLGpVNWQkhHwJiwWitejCxme34KnVmr6C5geArXG6Fjbxp3FgQSG9U3AbseXYA",
  "key10": "3Qwbmk8GHux8yTQFqUDznUq14Nsi2yrR4ZPdRG9RcXznBqEczzDLMZLwRzMgibE8RiHknWqJB5aADu6eJXRmGkca",
  "key11": "3tdXNC6Q1CiV4sNJz4Fpw4D5qW6erJZ7cn5Zk7A7xeg367fYwduDn44eioWcPjAq9pWq8PsKDut7Hjc2X8HhT1XX",
  "key12": "4rzGzq9QbsvogKsvPqeZxx6skS65a2ZWJVgRqks8yTvZmhmrWyiGExjiS4F4Wyd1JYuuYBiZpLCmwr9f49AC8qtL",
  "key13": "26iiur4hjHPSac72dJ8Pve7Pd6AbrD6UXnEV81PWLhNqDsHnsQRyy1Y4vAxadJMkAZkYcpsV5pshxDRUscHsASqd",
  "key14": "3WqKwVSeyh8Dm36Z3xBFB63hyJxRsyb3NHPb1UuvZH3hKRZzBVTAnUHAwBv5SCYA6ypZQV2WLaWHkcEFJHafvwye",
  "key15": "27K4L5SS7GmY1uwZtkUCvcFgzr94QZ9eSwGu4xwXZ49mU9pwAU9tR3k3RjHKUvVCDFCuugonFLaTbLu1wSxjKDfW",
  "key16": "5Sq2H7Btk8FCSM3SbZ4K7HUehbtj9xA4z8SLfr2hhW7kvAVqy4MiYs8S4nP6Jkq64avoKgV1GV54wAXpV9Lrz7xT",
  "key17": "45daPbAdVV8LXgfBxGmqbdFLiM9Gg35BWwH3ASDZaDE7n9WpYbzQWNLtjES8PcsWPVNcP2z6s9X4hdbyQwCft21p",
  "key18": "36jbNvAoXf8Y4hpQ7yaVohsaPWvjkyjkRfxZMXZsvQ28CxciSqn4sbEosemofxJ2AXHDebz7Atminc2uTAhsjddK",
  "key19": "TtapdJFNmAsd7RVhN834XS9GFvxEZK2TtiouYD1MgA5TQjtmCwkH62pc67Pr8Gx9wiG7HP2LbBY9BvgdPsau9Kt",
  "key20": "MjjSCTczEdyn5LQx9u5rxwT2uNeLTWFgACAyzVomprXWWQJxJUfN7RSBbfe9gVp7fvsYV8cVVgXYdXWF3QrkGq7",
  "key21": "3ANQCe4MoknwW6wYvwcbvt3XNszxRGWGz3p4B7Y8kNNZ1rD143VNLUzk8yaLaor1Rd5hoiezn6eWGYaCREarogCi",
  "key22": "54AWsqsij71ad2a7AKP4fZh7CFg2DEQdBbbid21pSa7kK8MiAsLVoBGX5NyKeXmPqvsxkP7T9gwf5ktYoqRQbnXG",
  "key23": "4LiUgv3f1sfVdkDbnXfmrBdMzdkEwB3g1xgLJ29qmj9RQKUamJgLqQspuFosSLpRnSrYaXgzysbj8jwPVxhfxoEY",
  "key24": "4NMtTAAZnTgJDiovwxfELPdR2yVzYDiWPFfMDFz4x3Pv9DTpsUUn2AuNdqqXCxvSYv298kcfevVU1JFz5Jh43cMx",
  "key25": "i7jTkrXfAGprNwqpoAXUv6TDNZVefpZDtRq1kkX8hr4zk5NDDbnxbK4k7XzUbxZrvodr8L3iUYRn2YHN5yoqDGF",
  "key26": "286xFUzpKnFQmC1GdaEpZuWRdBo3X5pTftWef3b3WQV8upxLKVpGtnh4TVWpCVEmobE2DjzATxvHpKbupPka1y8W",
  "key27": "5wDATz7YRHrzwxHxnYEyHE5qZGb1rfGfiQbgrLNBiHkJ1K4BggCqhVxeNXiABudjZtYRNL7gVCgVqRkjqQtit1LV",
  "key28": "3B4tYYaLDC35cvvMiNexgKHeGdZ1i9PwqCsYqevd7L9BouZ55kXpnwF3buqiuDY5jrhHyGXBFzDkyEYCbhPzXDMF",
  "key29": "sP9GwE44GcAMq6E1yBp8s1fTvwk7PWTmbp8KYpHJvy838ZrkGW36d48SK7CxbRvxZCgEngHgb7TKYqVWkfNH3x3",
  "key30": "5v8WAXyX1jmDuyh987EvRqe5dYbMSCnAkTFagB1sAyCiwCdH1s2vLNk9B4c94mUiXbzsJQrHmgMXACok5vXCK7VM",
  "key31": "4udw1urWRCw9dMP1QmZkyVDyqrYzF6bMuU6MEKNd6ngMQsBdpNfao3ZNcCGWvau3Qy2EEMFseyDQ6EHAnDBAe4tA",
  "key32": "4LVhpaKc2jZkxbAYHenyNCvDvn9JzQ7qErQuuoQtyjCbH21LkyxmZFwWKuVTWoDztw9ZLgpmtD7f4E16Nom3UPQq",
  "key33": "TETM7w6xPVQ8oXjn1UQSUEA4xpz3yB4ZMi7oJtoTL8438665HLQt2FcujD78dPzCLEf4z35xc8nf5rMoBjnTBYw",
  "key34": "tabnKwre5HYRZQZi8NYAEum8fwToJFQDF5xdJoYb5kCNnE5irPQ9qRXyErajCQHWDVv9QkA1Ho7Hnwv3tmxDKWm",
  "key35": "5zog6Ryb1UQxGvTdYqnJj5aCZAXEyCF6XuRrf57DyVUXxjN3Tj5TcuXNSegatuKS8bv7vjgavr4NCKWrvMJ2puQH",
  "key36": "3wbDpHYt73SJNvcYkA9sg9f3HAJPHg53W9Reo6Qhr65yYQFBWssCPja8ft2YLoWqwuxgW2oP3dZ57RJgh9aQLqDP",
  "key37": "5SDeEoU93HhoPmuCYLwMThNF95kE6U69iA34jFVyJM12FU47U6mPMUmniy1XoRGxD57q5iiwzmzKUGdNzmTKrbX9",
  "key38": "4wFbcKPPgHJbDJMS1S3MaTTaNsD6u4ArpxN2fmfVtbaoDunHCKRxqiSgzHb6ra3eK6A5xRrQMYytC9ZQ5N2eAWN8",
  "key39": "PFfYniRdGhZtD2egLx4ZwUStoW82HwWxLH2Q3kZWLqK7NwYEVTV85ZEt5JTX7vtwZMzxVgVNQhLGCvRcbashn9r",
  "key40": "2gcvwSFrvjr3p3MdVp93HBM92cRWcEB89wEwpCHAoVUk2b89Z5eqNKwHsHTGDHuRVGSPmdQwM1X9VX4oprGh5Ad1",
  "key41": "3RaVBZ2AMMktgQJ6Fn2vL7Zzyd1y1GbgYt4Ym9LhQPhgLP2w2CW7ef7EExiWyUAVh4gLnBGRomvuCngYv7m3kuYi",
  "key42": "4p3HxypYzLb8NQsDnKyCrrCYgCqVHDDAdLoYyxTA9VTUqTBcEkyURBQZ3616PtTHPzucTPW5Pe31vT9nsUQPdmba",
  "key43": "2MNiLbDG1fbkjA8BVc55peXU6Smj1feuXxagxMakbpqprGfjiiJdmrCdz8nG17qNMyxQaqncZDaaWngvgiFYCpuR",
  "key44": "3if6CxgDHxF6RPtc3fAyrnSyP89JQzayDngqCAzRkQWeNSp1LBJeXVEPYHCeDQibaXekyQ78WL3i94yYroPrdMgV",
  "key45": "ZcrZJXoiCjxaZQM883x4qRthcV12biE3ZiuxBH4UZofrjdEr1dBHMzhvxEgRj4jLSAQx6qK9WEsjKtbsCgi7WSa"
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
