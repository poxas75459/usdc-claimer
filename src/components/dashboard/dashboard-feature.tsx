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
    "4QdvVfMGaSUJ7zTCY4zfHTX2JSFc4szMfzBPT3UUQDN4jnX8UguNPKUG5tZ5EZWMXhCcwvbbwMYeuXVX94REWbwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dALhgoThscy8aM9cx8MpVwkUkQjGPkJ1h6wcoSjLyQ9PB9DiQMENqWamU9M5hh9iGjmf97govzURE62nJYH8UAg",
  "key1": "2hprqeng6eKmyCLC5JyiktcfVZaRcSMoSpUHzYf6yTkDEBBHGbgaZfmdNLr5Pps8JWCcQbsiKknket3HHBqwsZd2",
  "key2": "4CvSb5KxtURSNtZfdLPM8CZVYD6Q6HQipzd4FtKWikQfYSeTVC2Ft9y8QJ7z5UHS5v18siyS6B2iwHPdXYjcfLFb",
  "key3": "3Q6oCt2F7rKEMMqjFKFePRyr6qXgPeCTKvM1bNvzNSAYaaJ4PbSVG6BweDWja2y6Du5boXNxWkV6opAko7Kxo9Hw",
  "key4": "5J5egVtXrLPyySxLRJTAUrX4sfgKC7FZ7GDuomdYxNPqbrUbUFdubJMr3wWrMaFVqDER6LkS98TWa38jkHk3KCw",
  "key5": "tMx8npUfpuB8GBQkyKKT9BxvbjJm33g6MNBkEdaRRZM6sANWx5PBdeehXJDkt37UtErTKZUezm3owgDwFqiuzK4",
  "key6": "5L3vYTuzhDEsHbavDnNE4U8zYAtbtqN3BGpDGfqKSbKgau2C9GEeYQxD1jEwcwBJjxekaakYWBwX8h71bQFxv51c",
  "key7": "5pvNkFR1PL9xzBeb159bgrHh9zNHpbqcSdM6G2DPbcqjEqpNMfBWhDacHyeyko7jPPcxPmWWgmajf8zxSr13iSZL",
  "key8": "3CNr5BZpKwv6CVxYzKPcsmpSsnrrUjr1aWghPsgwysKLmAXY4wxXgyM4zeohppaV4S9zk1wdx8f92nRbJANi5e33",
  "key9": "4NVE2A5J9wUKAHhmqNZZjEFjUz381ctKw3aQdpiGiqXfgPuxrhb6eothJnVHaKmAZ4s87Y2QZJipjJgwAZctbFGF",
  "key10": "4BNRUV56FbrK9jGa4F7nV5sy9RZvha3teS2PVpqGVdMxhRndU3jqQTgatj6LEeEcj8osrS4qn9sX6tqNt9C84AXL",
  "key11": "G5EtZHLxxqkPEwFni4Qp6wKW89hUnEqdM8dPhHxzFFh2M82EsPCEExDy84wGvimH2CKTNbRi8SFjtMpX4QMJ6NB",
  "key12": "4XnnSRQG3iHvBxGoNTtjBKPQWxLWWKftjHYvCWP2vuHjW694tPWAMaLX5Bi1RJmM1U6qDfyj5JhDxMC57YsPaUxH",
  "key13": "2LXTUoJjYmoNhf33xfHSiiioiYW4qWpTVJofxgEcdjH8K5DLQc3GDQKz3UqpTnnJntFUhSQHcmTBpetJdytt3h9C",
  "key14": "5P52YZNKR9Wqk9sySbvt8z8eFxRkpfEzqrLgB43FYbZj4nWX8m49VvFpDG59dEh33D7EbrAUNKzZx3zdvBrxDPho",
  "key15": "7oUYzr73taq1QshRG5foPJ4KFko6r9g8q1gzSDgCQMpqZRwDWexeY7cY8XUBAVLvesVEppp6zdURL9vJzdhGBB7",
  "key16": "4V2JLMiSmdMq8CrjSKLt2JuUfzFAjcgYCWBcGNcoKpLrnLFuRTqd9W5pfNWd3uZ9GGCK7Q1eN1qHxYa6B2Sjzmdc",
  "key17": "4YKXETcVP1AaH9cJChzKCXHqFny7FMmd4Jzk8sGWkvRc4Pmnxq3qi2qnTiuUxdjs4LefstxjZeYgTPc9qUbE84bG",
  "key18": "2xbkVbnEgvXxLNaRQVC1oRssLxeSZrQrkfcVrFvNXkie8CopWphNaUbjWjwhiUitdDWZ9J8tzXKyRtuJF8hQzXeY",
  "key19": "5hagsAacDk8edxo8HRb7oBrTmP8pZnHeeSRTHJvHDNBgQZuS5NaRyNgmE7wuAc1zdJKzPHZ3TR4Qjz2Y5vDqVzKf",
  "key20": "Yv7rAFagx2meTyidLW2oRHBwWoYhg3rJEAm8scsxvshhHnURABLABc3ZkmERyXfxgWwgZkC7rmK93vvm1ndzCJ3",
  "key21": "3w856WY2Xtd1vQGq5R3jAobSFRP36FBYHyJfhnagZVwpsAkPB3zeniK4hHQ8AdjTC7X63yoB9odRKwKajEdJ9cVb",
  "key22": "sek8ivP8t5CKbMaP5Cj3frZaUqahXpyXjTA2nQSgvUhbFZHbgyJjc1EwaeMNm3y1gQB8ndXS61YhG3qkCkdGaRf",
  "key23": "4sW7DJAWAF7UhVcN5ZCFiAckHNDsr5wjAYsN7zw9RXMgpGNp3Vhf4vkyw3iYk6EFnNNrqgjJUHma1ErVrYvkYeog",
  "key24": "muPM4wzo9eECbxsaMvesm3fZPtztZ1FLkAJuQ3FXGtgtrXkXyac54Ts4sRNgNfNTkoFXEXv6xXVKgsExm45hQQU",
  "key25": "4U5Cu2jFc4yGpWPx42qKiWaZspZgfqHfb33qER7A6XnBnbtatokUD5w6ruEVRjisyaECeUdY7iMJQmA4ZBvxqWef",
  "key26": "5zN69groKKidFzbJYKkLj4gPUjBNVahybUywCEVdghAru7FgWSAfRkRDTg5pCX7GZ4WTortogvSRoYuHyyJM2zia",
  "key27": "5ZA92qfcY1jbZP2UJVzAS53UjMSXQDokCDg8CunWKqD25Dh1H3fAyJaBHfMTFK7r3RvceLeCJ6RrFQ9iwdAc6ta9",
  "key28": "2BMRyCa84JS2LoN63WrvL4yNp9QTgs91d6FS9fb2AoE4fQMHzp78Sxa2WZ8i71HuiGKY1V9i4funjPbNggQHF4fF",
  "key29": "5dBokWPhhJKkbQi6PQZDnQ1if7w17EgaRC6BUPwZfwanxLZuD5fmZtrJH8xJWu12BfUPNgiiWYTaRvgSqgPwvr6N",
  "key30": "42rwyBdq55zQ21miAABGqYshn3cfF9WML9Nm2vV2muENSFCQdjTxvWqNvvQqjatwgXDmCa23LMbbizYfZQHRNcHA",
  "key31": "PRGkCZcyEGyCG8FoNQS3Xi6GENzhxyxvg3cYmGHfDRAh62GeLzxYqHduNcU8b2MoqTABFyKSRz3WqP6uFQjBw4j",
  "key32": "3Xt4q698ZPNJbeyAk88tVoKb4Qo6E5kPgBtEpFFYNrobHmhKUdA5fZ57sK6AiiHhcDzLKzA62mv1T5j6GuauQFvP",
  "key33": "29xwAfEEUvMLbBaSa2mBHNuumpwvHB4SRGGTjuSZnxMe6tPUCVAd2Ut2Zhv3k1EW6KFNy81aPSSrirHH7XgJ8UHs",
  "key34": "2uQBPmwKVwmzBYkVCpcDScrZNsprqApH4hP9pWM9WdaDT27syhawozz1ZJZkJz5aMELhmQcW5M2u1syzgWhKrLb6",
  "key35": "4itF4HWwgQLc3vQBpdsdhRQT9qhnv4tFNyBQFMatqAm9mg4hWfwLFeXFX5ocAwunYZJFxx5s5QJdGSXyLey1uhqP",
  "key36": "5f74egy9nLncbpcXcQkSfy9NzyhzhywcpPxLbuZ6VPn8hkksc28JzMobe25gyvAwArhV7tdx7mKEknGgAjNTmPk4",
  "key37": "4hPZiCG3UAR9h1B8dDrD97xKieRtisR6FVM6U1CWye6N2naMzeoQidbjh5wygqJd9VXDuXti6FvcrVmJrnwDoAow",
  "key38": "5BrDL831Tkk8CSzT3MoQct8u3DbyvvDuR2bUhZs9VtBJg23dHiTsVJjgQZMQD1G1f7Vf8fuTzUM3KB8HbHzFKbVB",
  "key39": "4981TNdoiMfpttCpkUhrgkGhaUtsKkcstoseGn3N4xcJd6mgjBP2Dh2LXL7di6wicf2QyW95uhdqqPTkXe7dJGLP",
  "key40": "5baVt9PsFbRS89PhSMJ3UkTJUBmofHa6hnWFRebvgPE4zQjFYUK5RZVCh3jWov3cUTAA4x9Zevh7D3XxcNk7KnBP",
  "key41": "HK4Si9vHC3TEkXYxY48o5Kve9EzhH93y6Gv8jaYJcyA2p2iAx1Was75gfZcn8f7viCSeEehe8iizcomiqMEYxQe",
  "key42": "65GdUoLDcJgrz9P9P67EBxpD8aqP9trFaYhY3ByA9Xg8Gywenip8BMWKuf1cg33s7mx7Pyy1pT4vXf5cA1Dq1Ksi",
  "key43": "BKgnUtdTLc53fi1FewjzTct81WutySngBckF2qcsknK1xxhJEnJaQhUfjXZNa1N95ea3QaY384F5DCSNHj1PRYd",
  "key44": "4xqr6Vn6dog35nswxTtpREURRx5rR9mWECMtdHTZH6QVGhXgRDuAnDbKdSRLMTXKNPz2R2Cq7kZS2WtL4ousYVwr",
  "key45": "ureSMRUi3WiNin74C3dYqFAqh3xxc8ffPzkV2ywGbiU6cbx2D1DaC1tEYkf1i8RtEPKJXHkcjqJ3ATy5TvPbbMR",
  "key46": "4ZgSzeDNSZEpmescxmhJbtNRupD7AGQAy2oMbpjgkh3aaX4xhv9Sc9878ysENWacQgoQsdZtTxkuxGjmsm8GogUf"
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
