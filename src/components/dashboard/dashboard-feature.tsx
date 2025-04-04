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
    "4JkETRJfYogmaz9S5zCwSdZ5j6RG6fDYUKzLfKV9BqL9He6vn77o5dQS4gMHHAe9afWJCaMcWpNRFNrZCzffxrUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMb41GSNq1b8awXBSbSRZbW29RZYHMejoqZqfVZ2EJiqiVKhWzYipKz8VivxYS13jLWuFwuEq3vMgh8K2F5LDnc",
  "key1": "4bwNyK2725hu7qqA6XEyvrMpd4jxqahy7WRkKmDYu91gK3g43f8owfhcCvCJhfY4WcVU6S867DKJUrjcbbUTxpgG",
  "key2": "5ANHXprFknDJcECZnrxC4m9VdFS3NnnVqLg5rdVi2MUDqjB8NSEuMKxxs426Qq1aou3PF6BEGArbd2fCUfdiyFsX",
  "key3": "55NcnM12DemrzT7mzLE7Tf5HxZMve2ZStAKeR4As8EcoWPAFsJpa6LVj3XEByvBR6RjtpKrQqMYmQ6rJgbHQXJxu",
  "key4": "xhw58yHfB6X4wk4K9QGBGTb6YRsvB8zEET6TEFFWBamKMCCZJMcZu4LpktFp3YReHhLpn4DC8xqAGwCyHtoDrSU",
  "key5": "5x6ACWcH91MQqksKksvpCfjFuiZhrX9FM3XgGzA6T68sHHZXfDiaWj1zdPjYkUoQyXELFpLBEqgqBuruC1mFa76",
  "key6": "5QJnMAr3N8rnSm7DH8AZ4TSjZ3BNVHgnjNaznzpmS8U7giXgDSjp6AP2DTv2vehvu8RUDeJdswAU8MepsbUajZcX",
  "key7": "5L3CP9LuRhycXhwMdAeYVb6nV86fwjVeT13Ta65hibPg4Y8AyurEWisNqP4Z1dhr2m6vJk1hjfq5C87koMUvHZeU",
  "key8": "3mmoextKmxuuJitoGNEtCKTV7B5G1sGcoPgMNeKNLjHpLr8559FXk44vjqpFPJcJ5NmYNggGs6HSPBN3okYdPHqh",
  "key9": "4BY683uXcBDEJFzbm2aVHQ2mGTyWPfkkmqkzx6ZtDr9TVCx1YLXkDd89AdoY36An1qPSeXRFJET5wXtmy6UkYqeo",
  "key10": "tS6WvHh7yzJA4ptWNNopnu7iCnKiqE3zCeNPqjBFZsSr3Nhj7bFKx5YWQ3dGFMhyHXCMnJrtTwgCkjm2eJFUyss",
  "key11": "4iyBWeLnqzs9k2yAbZbNXSmYPCDfFkgtPVBFP2MFpUC3EQGNN16HXEHeXgvH3KLdwA7DEFKcLDij2V1nLrqaQPN",
  "key12": "5MRp88oAmTpcYrVz4K3zWSzdyC3GFfpyBZxTqGEDKsA1jEHq3B7qfHmhzGkJUMPdYv2s8dBcnwc9EaQDnYkuj1qH",
  "key13": "3zsRgahEwXsKsjmHA1de7nb6kULHxKh9CsubMqBGmyComsm9457qLX6wffLrcd2uTYHCrZNYhfp8XiqLy28UTFQ2",
  "key14": "8PJn7JiHWMeDdFBquyGtoGjF5Vk87ULu3UVAWvf1wwJ6bkHk6wxaCt8kDeFFmp3fo8oUTK6y5To4yTG7YdQwW91",
  "key15": "4UetNaPTxa7Zpom1rnMaGvqxAXjGqodkYy5iCsALUAciYLCa3JaEdbnsSfdvx7xURqSyrV4o7rKguEoTVc2daNyb",
  "key16": "CzeW2krxAwcTGrUU8mWtJquhkAqpAovCLU1RzccqhzgRg2qQEFDV1kwYcDCwCkJ4LRTgf6RiHyU9TZBH9R9Tnx8",
  "key17": "5V9DhaFZMipPEDcZJMxtbjaxHDAnepXDk1dmmtr9T193AnKar6MNFY768n8ipYTRSKEpEHnr1XQt8P5cG18vyjPD",
  "key18": "ixZ92k8pw9bt7BUMrfQcAZroSL8jeiZpoGrdvk2cRdUga7fzZFuDRd7rquWh3ebbsLP17xgcrrvXNvfsX9kXQWD",
  "key19": "3ZNWwXe7zCFxZBLJGx8xNzvuYNqzQLEbeu92M9XLFSKmgk9tKLxw9ck7uvnTbqriBsAsArgm8E4UMGqeRkmB5gFA",
  "key20": "5by9e2AhabotsNWseRpLmvnuQ8VpQ7nQsqLtqFs5LWNYtiLH2gN3P1n59JcgpUwN6R9bC2aS333EzNd4fp61zyxW",
  "key21": "5h7KMqzkVFBcEE8dZyEZ9aGNjE5YrYg77YnjRAJRGRnqqwzztChgYdjaYPpLbFXnu3yT5tQxJUQziKxvA3ggadYh",
  "key22": "4dJGGma3yWvmVwzHe3BRw8UJnvGPkU2LU6xicnp8gffXTqFvishkTUAt57s4WTgZK5tFurM1583NzAfg6F56Dmu8",
  "key23": "2ZA2weQCNyrbBuZQrPwJLh76MikgMTsdbwu1DQXet1CeqVzAodqop4YnYHw4XLWmYpGbz9bh7LYbdCxjEv31B5mR",
  "key24": "2A7pZ8yMozVK3X3RUvsUeVXm29i6xLVBpLNLxWMCRS3MXKS9Lx7dk4xpRF4WG7H4ZvnmC3uFjmByUZgSounVdCa1",
  "key25": "5kTBhCsgpcezed3CPZetiyeKTLmeRywJpZbGrHCP2JXdyCNHzu8u4xt4byFpZt6BS6SNejiSgzs9eFUyVRAvPzUk",
  "key26": "3jhXFE84GgYaq4gqbgX1GhVWDu5qemGaRUawty3pDopj93b5umfef5NmuMFJ5yog9R5Y9pUq9pgpihJcmQJqADWh",
  "key27": "214QvcQDVE8ueTze9XxeJKfYVYkNpSky3A6FoV9AjWWjEKK9QWyX9pnp456Nv7oA5yVUEQc8eTLKmGtYdeCJQBZs",
  "key28": "2YUrfC941PumuSacP5mmt8guzzzDZpkbRSasERZqQUS1nPY9dVkrcdde6kdXZEeALgaW94cWnJ6RQUveYDZtwRpc",
  "key29": "4yiajnzYuuMPhRUwxoPKXGgR2GK5bzy3S5TYSU9LPZW4Q382HXLMtHaoXkSZ7Ggg3Jj39XfxTyjXAJmxZUAqACTS",
  "key30": "59MwkLkVCpUSt6tGNEj6YM9CeCoyzaPh8vTv8p6GHBEozSzxXNCqzXg4TxGLefUqVaF2HWMwyUxjCgSpCic1u7Xr",
  "key31": "wxqbyJ62WaGzB5f41VeRLgTsPm1oLQWkfUiE2nRS2rP1T6tTbGd6avnn5mZnw9eywPW4qmJL7T3d6naSsGG1oAu",
  "key32": "45j3xZtipX9eGtwU53kYmoUXVphHxxoNywm1T8BKZkDtzJUz2HXyCWFBvUN83CVq5Kh38Pp6rwmE5oHsmrVszdMm",
  "key33": "4nsT7JiBqL2bT1vr9DgbCGe6iweGnvjXQVVqqXCZ6X2CPxRmSqK7LLdewro33oUgg6BVWCXXnpsUvis2bZ9FaLG9",
  "key34": "2ZZYeGaqMGFGWttLheaXYS6s2Te2F72v5AScsZoxXgbJD7jcGY5cwqUstaJyggSGN1mtNaBwtNi5fBskBZSwZoSc",
  "key35": "5JZwRvs4Nehgt2WnLtpBFVJmCMoBDXhoTaNQdSpKDHeQHM85CGji6CARrSJj7eZ7qeji1gejFKBYdMiFXrqiiQgC",
  "key36": "XBmdiYwZg5o65LQTNKxXd2BqKJ3F2JjkBgzL6YztUNwkvcZcqjh7yAtnCvdMk9y5bgwe6FuJRYTg6Dm5EjfMi2z",
  "key37": "5TRFbw9bRY1mVGAJuF2t9NLJXA5P88CySWYwBraHUwbWSdHEzLqevbRcKyPHTFYyo1p8coM2CnaXJk6s8vYNmnbq",
  "key38": "4QxK97Sd4J2fTefoGRC3sTZfqQzs9VmDi2f2ZVRoJqmAD4CpxXdEUoDHhzKx2wSLhr9i5gHTLk62AniCm1q49Gvc",
  "key39": "45Saeeu3tUL8qoAQQDQYALGpf7VkA7Ra7zFNNHWsnxmpeh9FgWHrcvzRUPP5jNNo8Z9SQhsQm4jG5ghNqhDZXRrV",
  "key40": "5Z5FSv9VQEPhDAnuGeSoNAE1PzuHXSPLjrqsRtMBk58mruMfpyBXAh3tzBng47DgFdEz93p93EUNFeagE6zqLAMF",
  "key41": "3LK1Y4a98fMzzLtxVPrcbt3WgtWhrhi7zAAuWVrJSKkdHSg7exXBNMZtXo2SUxpionqE7Hrpky3U6ALrP1VTiSvb",
  "key42": "4Fom9hsj6MgswdyBoxysw6uaQes9jQv9xUW8oUgE6oFkv2UudgKvHqhakapYfAdmojLN3VQPM9JuH8nEgHox5G6i",
  "key43": "3ZvQngpbQexhSHxi1yZw5iRzSBN6bMdW5nqUJ31SNBD2uhRC9869dUGvyGhq9Nmfs9SwSbSYbRy76PZyzJMZ8gKS",
  "key44": "2FwkefqxBzUSdq8meVGAXggTNAAM2dhaB86AUScjg5aiBrp5qXGA9xT5ewPfHiBxMYuq3h21vz8rstJTXSckk19L"
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
