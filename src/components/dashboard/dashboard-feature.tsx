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
    "cGowKaFhaqKqrgJokHAUNywPeQ4rDU76inaL8YomKckQVanXaTSyjs1gNLfSgGgEsFW1VDM56Lzm3AXWnQScSD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tsa7JCUDn2EambUVBhhEbqonJUW46C6EZpg7YEcaNJb9iLfgCgQUFWcFs2GWL12ZU5gXRani1mg5CnHc5pLoqUF",
  "key1": "3Z4W6N9fg4k7rTSWVZMMDpuQVjmfmcMcGh9Xeutr4xvaGtJtDfTi5F5hWapEMKWyeDEndPhELpLVZYLR6MYcXXjh",
  "key2": "B5cpRWfhd2Koa1v6wPE4Gqs5uv46DwdFhBzHbRmsvDs65RRuP2dipeWfgCKuDKRNrZyDWYf1DY5VTdQA4qPfEZc",
  "key3": "63s88BD66qKPg1fBrzq6uZWe2RfTYgRe1Y8gnTJhaaYQRGjJBhYYBLBfrBCtcQ58tW5aQ6bGYqpeufVYs539t2nP",
  "key4": "4RnjgmJvgpvy91DbUMQndRaJPcswnai7vnXNqhnLy2vn12MGcGDYEcepZViMZwEh1s7Afzv8gLLjtTervB44AQRz",
  "key5": "59MxGziggie3vdYYQBHDBhXNe39TFTeVtma2jQr2eyNc4RkZPy8NuSAUSsYvbzNetFSxfWi1vcAqhGR18o8ELGKy",
  "key6": "46DmVYAqHpusiZhWzkYUCqrS3YE3xvFAVTygGDTaff329AYtAapQXC6HW44TZ9FayiHzEFjyUxGgYTM4717VqNiL",
  "key7": "431iM9Fx2sWbNQqCC7XJPaoADJyMzN7AEFbP6YYtbuXccnRUZc6k52nznsdMYFCRvgV5HRtwPpvykTbmNgGfGQZY",
  "key8": "5SHpkRXXkAcqmzGMeaHBh6maaqHWbd94a64TsByhgjvoYvhpbvYqsB4cpToiWpPGGkYgKbzVNSxbZ3x8M5bJr2hJ",
  "key9": "2KZeb6UPv4kpZoeDash9SBif6N8VHww4pkAf9sK6ipxxa1RYKD1gvAeKS9GQe38TML4CTDBXNQd4fKUeu29vg9WM",
  "key10": "4ymaQckQkiQakNcVD5Hp8BZh8XpGWL6cXQit2YRVW3o2sTydkokotJUTpLBZfSABoTmWYWCkkx94zTbhzd7fHnG",
  "key11": "2HsnByxncqNgpN1kGDNAFU5yY1DicNrrrMj7oA5CgWWLHjxKLT5ZRm1vXYRuo2dhWL7ZuaLvn4AqM2Rhm1H68P8C",
  "key12": "tRVncnoM6AUEcSmqXN9re8cgbBkQmAQ94obkAGL5wKggNzexuJokwhgPYD9vko6VqN3Z2uEpm6Zv1w3M2PaDiRA",
  "key13": "4UPuMJUJ1whBgKqBfsV6dnud3hcRPQ3Knf4w4x3He3n1bg8KjVh58RLnTrQEbE3C5VM7E21kYj39e7Z4VYi1kUiw",
  "key14": "5ZaLTRX2HSuAwM5fYb6jyYGQiy2m78PaGWdyFmZoM3BibXf2ZU2xm23G9vSn6AcqUJNTkJJVFCxua2nXFd4FUune",
  "key15": "2svMek5Gk8MknFiXALi13rUEzzTACeenvZjESXNQjtpxTjtpR7kg2WeyowcDz6RKN7RtPsTXP1oPmNRXicWLHbRg",
  "key16": "2qycu7VFu5XnunEvGtrrUK87aVXwGobgcyS823toyUVw2Fk2f1Rn4F5ZBu98SUd4CjKku1qMdoYtS92CgUX3opQU",
  "key17": "3LabSM7x93dquw9eAQ7WLE79tUiU7bDdGdzYJT2gAbpwAArLSM4v7e4pVPxkuTqududAiUoHQXD9brpaAHYEw16B",
  "key18": "3wZQAEYrKWjR26po9CSKGBaU4buG1NNVAtw542EVrEvtX9jVtorJYXJJVKiAhmnEDyX3PXzoF3ige4rbmy6NYGs8",
  "key19": "3uhEib7AeMXxEKTAfxDveGSLDTPvm2QdwXJ6AmGhscuPjriKubKkMj5GF8Bk3d9ZXJDdkMta3skFwQLeAJWG5MrG",
  "key20": "yzkw76Q94mXPGkH2YfF7gC3gm5M2nXph8KHKKZKQdZdSpsDhXPaXyhVRwFhDNy1n1E3VSPjXPRAg8J9EgRQFA22",
  "key21": "HDRJsBfM4fwVkKaLyuVJtDapdywLCefztajweBvs8w26iuGf12CJrshzF6RBW79pL4oZ6FwZx6YTCvdNqvDV9tL",
  "key22": "2hbvtERM9LDcBLHP5j5gztrmkHDURSvK2CrYNfRL5UbWa3b1WgZovCRW441VwkUm2eqb69AydT2jEfLktmDDSnuv",
  "key23": "3wG1XNeukFU8SLTZsMXT3dSpwn8YSf4pk3AHh2npZ5Ta7bpUKqj4ytrRxM14ssKJB7ZtgKUUDy81hWQpsRCjrtDv",
  "key24": "BCkbVgxcRJFNnSiBcPT1ZLibMKLqkFDGFDRXB63mRHdDiphuj8X3622LLPLGfg2ETVePNAwy7EMGffBVbPkqLoc",
  "key25": "2jdKbw9p8seuFMdjMTPCnrmobqmycwoqZGGkcENFUX2ZQH9s7MVCQ72PWdZFp8qCweBYytpnUVoUhLP7syHTyeR1",
  "key26": "5o3kus5GsK7N4hfjMMkU8UMZJ8QfNq9ru94AT8AiPkeAK4vvWCFuFiauGPJQXPQtZE4JnUYQi8bvEeZjqyLQmS68",
  "key27": "5nT5KMoiTFvvUJSzNgrhdbirQXvDDf9WrxHfY33Zxz8WwSq73wbtD7FPvbw4ngzcKabSdqneqz4AHmhKwgjA1a7v",
  "key28": "2ompvdM5kLq72CsC1mjsFqA7n7fwoDkpbn7qPHcRbzciVopR1Ph8e4oZpBx72kWHyHCSoeqX3tHn8PNwsRT4GXrU",
  "key29": "52dFQkAP6PMjg1DDas6P17tgZrJo4iixZFoPtSdCvufS7ZEVNTmdRPX9U1uCjP1UXZS6fBb7RacoyTKPs7hF6pdz",
  "key30": "BxwaXV3x1jbyVMnFqLw76Gt7eoAdEWJzWUFCXCN4y1beAmR29DszuX3AkfNpQZNBiGZy2bGdfk6AWJJ7AZBkr5z",
  "key31": "3VyQS2Rb9vg2G87Yo1BV3onfxXQGvZgx882q3uav7qggPb1gi2mob1JMCNExCZctK1NgBN3MyqKELczxHqbqf3fj",
  "key32": "5aHuJP2SJDDiU8LTgMP6NoFqMWCqRUrKkWQkFbm8RVh2TUSiERMWPdh4WoDt27BJFUNYXPwvcbEe8Uy1zTPwNmkn",
  "key33": "67ghshyFYh5FRWmkuLGZm1MmFmV2Lz7VcnNM9YqZXMuzCHuxpnyU1dRYsf52Z9zBSR9rxrgjKgMAa5dsYGeNbTpe",
  "key34": "3NXs2v79Nso9nCHGH2Fwom7UxfZhgUNavh7Fr3oAvkcu9jd9CkG29f5kf7MmtvjxazB68GBKQ6s5anjvLCewSCd2",
  "key35": "41ns1gs2QHnFSNBxXGMVgETgis43vvdZhFyWMAAXZ1bX9z6iPfGbGSQt63mer36rhUVDjt4VNXwYmCa6b5hWUFZt"
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
