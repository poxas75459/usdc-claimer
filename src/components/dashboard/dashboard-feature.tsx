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
    "4trRwd74Tt4KH36gHofLEq19VMhH3RLfCd1gW8KkKdGXkTyVKc2m9MAStMuehieSrUg4ebZZZTz9CoWYqTNuBTqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMQAdGR6PEmcrHQ4e8KPi9j9nnPcCBqHTwnVrAQ5Bjtb7cSy1aqVdZDDdU6oyRfi9j7qzkY2Z2iQLqd7vh4mjzE",
  "key1": "3D1tgknLXc9Qe98AznE2X5McMfwPNyEpHsGP1VqjkJP8nnyxp57NENFXyjusF2PP8P3Y28ViH9yF7EyYQF73p5Xc",
  "key2": "5JZ3apm7nBFN73icykxKbMVLimBx9XSD5p4xkbaFXtD6mkiJcymzxthV8c2SHSMLGapEKJt3Ah3UZVw5gpgx5zmC",
  "key3": "67ZtJ7DcAeeA8fw42WVN8g6pjNBtVERa8sbbWvHnPksaSFAkn3RiWXpVbKUNb6FoBu9aSersd9JVc9Gj9J3w3AVD",
  "key4": "6318gxaX4ttL4wdsctzPsjbjzFEcD8iTFh9xjjXE4HmeRGoEk9SpeyS4zp2LYBFAkkN4CJ6F63qWCxjxr9CqENWZ",
  "key5": "5npg4TxuT2qakw4WgpKwtLdhh7sbxbNpYXDaZbDPeZB6chBsGjPb347GWFrVv79oDkXAbf7LSngUDuCXffvhc9Jn",
  "key6": "2GjwJziZcbHuGuFpk4z4WPB4d9FkZDB7yvkwzT5awEe8iSJupmaxWiw59xCKjJ6gGRhVvRmYeW2Mw8S59jJZq4RA",
  "key7": "2JLC2AFNsKbyk6TNH36VfAyq7BMxLSUBJeL8DjF1wpgEnkaPyHq2zSJM9Vv7z7Fui65VNDzWGSeNQvxtvbxpCTDX",
  "key8": "bjQGXPJD3qBScbUa48f7wKb3bks8SWqKxNhWhf2fSL7yF8HKNvvnLgtXC3n9M6nZ2PGLGTcwkogowXhdzvv9AEx",
  "key9": "5vnEqT97FHhtbvbWVyez7soakCkGt1tV9YC1BXZKD96n5SyKWQgtfhp79XvEJUcJoaX9scLKknXRqosUPmRn3qDK",
  "key10": "4PGEoH1BYQykRefsJyuvAczn4DPDPPGAVHRAxtvTx3EnbusjjAYbotvru33955jQE59qD8vaS9WYs8x8GoCf3eGN",
  "key11": "5gVDWvmG1FsVyqXE5ZHswkuuDw7qu6WxhqrLLeffoAbm7it5vbNEeTf8eUzKo8k21aYM12MuiPc6xJcmiJ8FP1LA",
  "key12": "5wxEurcyg36Ug6H38kpxFWUXLNbmCSZZhG8hrcpZ1FA7Armi7DYoR7x3YhkPUqKw7QHGxKrsnmoAVh7ofWY8YiRb",
  "key13": "4td6uRAw2eWUBfuD5bys5Hzq7HqMFmBF2c8fjbYChA6VHmCBfTs5fq1FjtEwojgWoijUmwgkKrbHBz8VA1YA5Yaz",
  "key14": "9FjCxAvJL4SKCxwn4nMzjAQx1JFrqDXDPX4YLup69ACiU7ks7Lxc8Dc2yH2jgQAwkqskjnfRjqjJPrhCsWrJyK6",
  "key15": "3tY3DfWGpug8TP7YYrz1J71DahYVjcC7JQnhkL2P7zzLPSU5rpNw9s6NPZPkxKBUGqdf2pWsHpcCZjTh23TdxPVR",
  "key16": "5xUsmzg795hhiDmijrFiuqnw3pGTav1dXG6Qhe8hPpSipUYy8uiepoWLZ3wopo7akHQALu2kaUCiBZFvhVeASj2Y",
  "key17": "3EmmcxqTtxDFgjR2XDuHdcxQa1aBatJfUd9kqg7nDjTma48qBrNCx1Rwbi58tuTRwg6ZG5CHPoTXn4W9Cj5NgwFo",
  "key18": "4ANCraQVDsbVvCr48w8sD4mYvDeSQyTqS1Zog1Vyja4bY4Ynyy4MMaucfQ6eN7gn6kQNcTm6euXvsSCUvNG2Rvx",
  "key19": "4MoBr2zqvY7UsfVVrnr67PH7XYhbsuaYU5vSStCBBHGPBQB7HHSo6ymYBztfEAatMH3YX9R9dRJkVmw3pDqewLaC",
  "key20": "2zZmbnJzPMgcqDVPHV3fTCkCYiP5sTiJofsCPYGmT6ahHNrdqsziHSRdJwqJ1jLDJRdwH1LKHm8asQZsfBWyDrrg",
  "key21": "26XXNx4bNusephrKEFwNe1WfqKZ5xmJF5dWEr5kyasf6YqRoFS4ZCCAWzVRnbMjzHBtmPhhL6RvKUTAeePuj2UHy",
  "key22": "5e5oWR9c8MiewbCngSrwBNTfBJoXT8hXyw118RzKNSuAKzNSsMVBowrz2mdcZQGWkkP2KtfN9wHRpa5Tbn9D2YkB",
  "key23": "4EobfrRGVRRsYKcDDLwUDVi9SbrLe4cdg28axVYqAHXvMQVgRGkLR7NQ9cTWkFLRRtRUKQMfyvgCV4qjm5qA6yfB",
  "key24": "2jaeapEqrP3zFucQK1qoTMbbDWtVhhWVieHmdc3asWS7qfbKu6QZzUTNbPGnfZeSyxE6sCK1fQ4dxBnAc2A5zuoM",
  "key25": "5J9CksjH7PgJvFX1e36nU7mUteGX2fcABcNBzT4UnFde7frZUroX8tGkHP5rszKRS36MPd2UH7NaEq3pQqjZn7n",
  "key26": "2onJQR5hffCHj7Ri4W9nD3NFzY7jQB42VJdhxrNpxcwsYy3Q2AB4U1e9tBmmxfWPfojNNMvgCTGWY3Ym7ZNw1mr",
  "key27": "4i5zXSuD9GUF7Cf25rLBsuR8Ycf1wUXFqnDADUEev9EhBJZPnZ34mLntqw1qNHKgaRAsLGK2MrDwtjq6a9fxpBnm",
  "key28": "hKFh4FuzD9V7V1scRU6YEWXD18tfBeDWqivgGZJiqeeaZXttRqhKVdKjfgHN3QdWgsaSu7KWG5iWue6N3Y4zs1r",
  "key29": "5SxdNsXgV5Nnu6y7tW9Uh2BjV34TxPYCKvxykarWGAX1qapkLNnEFQD2N9kgVd1vs6WbUWmv1fLJGFvJrrqMgV5S",
  "key30": "4k8WVcVxLZz6Qyh7pKCgpnti3SftXBgg99qLvAJgF4c8afC6FLRs7QMrS9pBoC3J4Esg8wN8oDtLCphGSSQoXTfV",
  "key31": "42fKMFCPmwkerDGqo1xgk2DRqNXrrWPTmnyR69tuXAMPBH1zU5eneP3zCszQtomtLNnZQdqzGdRw7tq4k524anjN",
  "key32": "RSjbsFwPLqotV8MoNovGpDSFg2iVr5K3KNP8RKWzdi5c1aiGJry1KP73a1jPUwWMQghoqBLY5HqovXtJA7T57AK",
  "key33": "4BCwz646mD3DePVi1pDs5WPTzfj18bcjLom2E6VgFM93en2edeSAppq2ACHVgCVfcqVk4BVuKPfJDoXJc9KD65Um",
  "key34": "TsrFQ7MB1tsCkBU2v1sWQfbKjNV8Tq8TLs8N9cWWXj1kQfUyoTid9xP1P7WDWsdJLnM4ZQy2Z3AXknXvge3mUkt",
  "key35": "Gfscei4qpmw9fXbVDhtFT1WuLovhLvQYZVGHDyFccGjrpRzpNZ9Ftne58fxFbUorByisTEWsQnmjeRv6JfnMCvC",
  "key36": "2KqvZRxAnXZ2aYHz9ik92rnm1eYwTVChKrfwiYfDhRJdsY4M98qgGkTMKk9pqjJo5YJpMKiVAWos3wrpoFUuuaqL",
  "key37": "2qw5z2YA5JakaAE9rSFw5LsZoYZHs66n3BuANngQc8X8iyku6sSyrccY5vCgARnXq8g7Ms29SPjWsc8ze6qMM4By",
  "key38": "YCWyhG9CHYZ2joY9pgWceSPkEUxRWdrCQ8mVaz1Cvq2x3kJiuCoTumHoUnPgDbyQBUfiK5v5rcHNBQGzqiMYZZo",
  "key39": "36YoddAZXcwNqCHhRcYpSFQxHPY5QY9D53upsqpEavQWGKVjVs3vrvgf9fgmNfserwijhqdcKPPfj8byizvSyu9S",
  "key40": "qH2nuubaFWxUT9i9YYVZV2HEvRNLpqMxtYbXUMvGeVX92JvwDjzVFoVUnE5PtiSjHDZUbqQDGvF74wZbyWg4e3D",
  "key41": "4jq4kEMaifpF5wtDe5BquPMDBYXQKe9jvjvk4mx3vjUAxrsxSLRegoWhCMRBjWnti5tZzn3XyC7G7vZqpsYQTCRz",
  "key42": "241LkbL1pJthqPyecfXr5TvN64M1n1WfTT12a8CsuD3fJkeaVVojuhXa27iq2FujjM415jtbBW6WTb9rV1DFqyKN",
  "key43": "JEF1xzp2GjrnhiPWeoYCP6KZiE719VmmydvWkansfS4xPovsu6XFYmnp6uzQytr7Dr1KvhqK6HwHoVHFF1fMkzV",
  "key44": "3dHQjTWR9YToLi7tdqenHQ1VhgHCKBvTy9MNSkFjUXHw8y24iXkB59VqSwGjCacUzK6CSz3mrDXdVjos5agLYhQx",
  "key45": "2mkeei2fw4Fd5wVMaF5fn71rBf3ttNv1QJKJdTfLxt9Yx1zpA52y1ucwHzewTGMxMgmoajpyuhRaQ81LKQLTbHLt"
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
