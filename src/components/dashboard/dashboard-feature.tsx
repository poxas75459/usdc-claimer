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
    "4dHq3kXW4WnCiym94cp6T7TrCU7N2NRgLSZKVmaMSE7FLeaeuVoBLViJxVtvLqyfRKfkA6Fv9eq4U1h55h7pyKJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SZk2mevpooQQKLjEBekYLntLskLt9LR7nC77N2yNRoWjtXNdTYu26QfdEFnqmo7ZQYvY7HuZGJ8yYFHtnzFXS5K",
  "key1": "3riZvqUVBvKvKwanSB1LQjtkNXXGSpew8ycjE665Q5XZMdw82e9ysGRnAUCmWtcezdMhQr6CCrRNvRJayBJuFw7z",
  "key2": "Hn5JHPsutQBaQSyFk4jNtyBq9awUgywAJBcJwx1pDGdeuJSNekomdNK8th5mmBVoV7ZcqzjH8ajLATBwbkYYxY2",
  "key3": "3YL3PAbEjpNyTP1HsYkgJYYm1WXReviivJMeHyc958XGgx5sS73PDpDkAbdkxar8igYXAQdxUEEp9e8CBAYRCHjp",
  "key4": "5mPo1kJFcagVg17Fuv18wzxQ9q1YiM4CARPHpuuxdnABbLGgWYz1L99FbiXpjbGmJiAFQotc83n8cAqJJARCYc5M",
  "key5": "2XDnSbaEVLCghdMo3TgaiEeRp26tcvtNFVz5dz7EYCi5Zq8gudDsreXodz8EAdqo2PifZiSLy4LWA6qCC68ZUjfv",
  "key6": "3N5s9cBKqpLZVifE7BgTDWG3qgGMQbkqBSuARbFjZ95YuLhp1iiapmUuY38U67yDKYTCYcB76G1GjFdGm75nG3Lo",
  "key7": "5Qxik5qqW2G4LJ58ZuQkHMK8o3m1MRR2FN7hK36Gt2RTXnP7dL2ntesX4pvQnG5Lhbv1nko4rnvTM7ejfzkMNqtP",
  "key8": "3MoPmD6xJCMPwoVxQkuqsYGawisExQ4dqheVA8d3MdwhbrJJQzzd717WL4NnJZRXP3DSNECCFTBTHByjh7z63VRw",
  "key9": "53sFcWELhgReuMsPchEYv9PakdD3VAptWsAqztUZmGpZyipGZZDq3Tm6iX53LeypKLhxhC42haYcmPF3jHMjFzYF",
  "key10": "3D4R5TAA2WnXTw8MBK7K9EYFihma9qF3MPsxyP6j5JtybjQcw614wwAaurcu53GsaGyueRnMbBuc7viJpjofT74q",
  "key11": "pT8y8mpEFZumAfa2fspJdAridBNd9ENdk17uLTmhTrAwHiyv51endHW1XiC3fmCwPan1h4579uo2NWGhWriVAFQ",
  "key12": "3ZU6hiJPSgky7J51VaMFF9wynjBcYaNoYcefFtJAJAjcNuwMix2vpZPfrpNW6yionopSxhp1YZj9mFBf5v25HYdq",
  "key13": "4mmiRjhpuepBHkqEYWVaXCpfx9pZFkbKE8goFarvQyPH8b7zeng87et9FjiFZoUYPrDukEiDszGPAACv54RwE14P",
  "key14": "4LCmbC4CZUayPib7mkRuRY63U6KqvTBSNKDgEhR288SMXBKRBztu7Cip4i5ZuDqvrwQiRnbtPH3Runr7S7iPZwKc",
  "key15": "2b4kbgBiMyrH8QTLQwwkrRCtwa33H4BzAB6CBYqdPHna4wUUCM4RnqLG4gYtA3hG1TekNDuABtSEkfYT3ZrDyqCL",
  "key16": "2x9FEWiZ5Mbu516NnchTm5R8ZoWV5BfK1mmbAp2G9ajrz4NQjhAVfsM34c7B1Fc45cRBVFW1bWQesorz3EbcvpbA",
  "key17": "3fAMu4MQjzbneJFsVCRoCB7uqrKQvTfdXVMereHaBLYtmSKnQg5potsn97EEV3QV6Bkhm3d9sJuQko6G8QyJeTnb",
  "key18": "2awzpLfc6s9TCK2EJXKigQ8xhn9xsQcgsVkhy6kGBx9kSso1p9hmgbeSbCPRHUFC8aWXUhYtXh9ooVW32sfG73pM",
  "key19": "64id1F8E6FkmYQUb3fKq18Aw2LZAkDy5abbCWbXuR9R1iaE8kp5GvXQeqGiauemoYsdd1PffapE4eMQnnj16Dnct",
  "key20": "5YRJ1nM8SvQ16yH6EFyZMQR6Xvwz2tTNSvxXM57stXpwBzt85djYzwHtTQmC5xeZKYBjGi8JtYK7AJRDgwLM5FaR",
  "key21": "3fNU1rViWPxNNohCPLLYD8GnKkjBuRis9ZZKdYZb9jeDRXBeMKwE4UAhBve3XVSALDDxZQpU1EjdiMhT8KjLxQ9p",
  "key22": "5UfTMi1R6TrDeSLErJ1EkTgpGcA3gTHaFTREoZTAEUMvumR76miCnbk9fwWzJUeMYyeZ9TVAZeYnFRWYd8M4G2Yn",
  "key23": "3UnfYmZGiLy4nN9KuoW3YTfBm4R9MRLGPTMmuAcdX54mBou4SyEahwJPAafXiqrYAdtvk8uGyRrk8ugNM5wM7ZJR",
  "key24": "4ncwrV2mADX5VBkuv6QUJ6sdXMzjLdYhR4WHcPuTw34GAoNL5D2CqP69ZmBbYUcyvHzoKBDGTUm8D8Nca689Mj6n",
  "key25": "4To4LuocPMpSfJ5k6JtHuEHjHEMv5zKprTpHxZk5pxPuxrqMqueJb3w6x7iZDSAimiuiAWec1vwVTM5YfePeWiMj",
  "key26": "4K49U5iDh6LFEV8Hhwti16Tjnc39iDiGdHsiofohfuzxynP7JrW6XaMXzgcnEoZeJsf2tyQbKzknhrgzff8P5rPi",
  "key27": "65JHa1fUanUttRW1NjKVe7rvBbM6TurLPT9qL5vNahH3jPyyAaj7u7E5RggXMRCt4xwbFEqisD1aHC8vzxE3W5KC",
  "key28": "3cX9sf1iFVwD6kxZWdyUzAEtfnR7ignWGw78iqbJ4CDQqXx8cNbZ7hLPAcieDvFwJCGwzkHjNLgqzNfp5vzxz5z3",
  "key29": "54jAje1z1seXEwABycAVWq2NKFqL14qYgboPCaYNKRHxjFWDCHW1zKS6s1NTp6SBSh91cS2Vg9FS89FVVW8VFQfb",
  "key30": "4aeKTcsKngfH1BT7WnzzU5gN1UWcCjBpt67Ujpq9zT8cfywNBam3GZStksqpbnUpWKQjdnqy1K8qned3PqZQRZov",
  "key31": "uTEd15NJxM7SvgR46uVqRorufwkfbY7T8LcqEGkqCMFVGV9XTHeh6BJAvt19s2xjnqC5rCF5tU5ubDLX7X2eW7C",
  "key32": "4VVbfjequZVWi3QLcSGwWeAGEbVeZ1jEZDvScAu1bZXUCVVJvm2CMuxtLCCftRNMDwS4NErYvFxKAEfe2mQT54vW",
  "key33": "ZP7QoR5RFDPUba6MQHxvLFtNfaF9vvmyeqcqnPo7Li8S7TyeSWum4jGHYx22EsBEMeST93Tmm48Ua4x4mSzszRP",
  "key34": "4XSzZwCJiTQsTSjtydmm7bdg1yRt1XG7utNLfSdog7ugfTpk7jqhthNUmNaCQedM2GHkkJZmjYBw213FyakymSaP",
  "key35": "2TtUfNWFMdxuBwjjQE1v7nQGoMVtopvfGzgEQHXpt88WH2vfrGtNeyZkBqHCAF6ouACvTkwzpVim3ay2nZb1pQ3U",
  "key36": "5Sc2ekr62xLSUmsJpft2rwBThKBrai5fhiEYaH4HPm6wndt3qDJ7iB2sWWoDnvE2KzNeNeLRQk5pXvB8MBXFSmVL",
  "key37": "2bv4NWdsZ3cLTM5pwJoZNjW1UjfqPmpWvYxjM21PS4Pbf5Mxdaam21ZBtPQ3dzowB2RmJRJgWWwVEk7vNRHCamEt"
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
