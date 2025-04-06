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
    "5J8hTBeDkDtScgjgvEAfj2ukK91tQfm3ZeV2CukbE48PBTyKj6dKSenY8JPu76YuPVvrgTieD8zpgXYY8NhN3o3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iekCVAmRQxmXm5cA6WQ28nytPBFFDct3jcqT2qTEaNDX8cp3ZgZJJ87iohpkJnERw4fFar9E1VDEWZvtcXp6PxF",
  "key1": "2WEdgS96vwg2UjRs3RmvGbaRHz6fPryQkaPquEz6NuKiNvuyxEp1nP9C7c9EEi6ALQ9ELMpFAPfmEfGfGbbbuiph",
  "key2": "5VpLmDGCmAwWoogi19QtcrmnNeM9HDW2kz6QqCHa78P6JYtmV7uRqu1VxJr8123jb65CZmeqCJzXZdjXgQurnmwz",
  "key3": "5828iV7QfcJCxo4F7LtRmghP1jUcRq1Cq9aSz5HotJmCCmzj7hQ5DBBiXNiyrQUu3jhGGNL52yEBBJrNSVd94rJ7",
  "key4": "2mXVzA5N8itzE4B1e3XgEbkhzMWn8uDNHKDqfxWvf5eUpoUeKJJyERVue2u4TX2D5S9rd9WBWCBX1EcEnTHWpf58",
  "key5": "XFiLMeqYoArJnd3WJJshhRMbU3HcDqRBzUGvysKd2TkFaWzsvzW1QbjEeuW1wjPYMfzbcnHJDEb7vyqZL5E9ZJz",
  "key6": "4WgBTh2oXca6rzxpGQpwcuMJfXofECf2R3eSck3rKAd8WSwrAEjUybQTNikSDySJKpJx8J9uQt27M4heMJENjCmV",
  "key7": "s8LhBYtsMs2hBB536uXNK4Nww3MV835fxgEKdrYvThaGZLPsd2WpENegcCjHFb7DWYCQJb8zJqeSsLZ4oUTit59",
  "key8": "3aoNYAJBLBu5hbdzSyx3PuJoh5N5P9YoQrkETuJnTxihDuBf1M4fPBuFdES8HfBN7N4pY1ZyZBsoPVsHfjyXNBYS",
  "key9": "5AQW2pUjp3cQdsPN8k9BEcTw61nxdztiueuNZMTAMNYYRhTiFgW95eaEeFaYRdGiGKkDKnfUYpZxemyBnmVWq37B",
  "key10": "6fQkntwkSYnnMYtjqfzUM7wdubaTy6vSm5t4rHqFd4CMUxHwBRzd7NKFdyRDuegc51GkXxLbmNyEbrP1Yo7Csfr",
  "key11": "2JtGdA8Qzc2HeWaseJu74XkXdDKoJHNBJVwrzhVDoim88ZGyy4BL9zN1rrgKxDUALRGtkspL2q5q8eJZiaC22kWQ",
  "key12": "5if5WSHiJYMbP6Wtn6ifnrLA2tCAdFoSMCKXQuzYPDYsq1Qb3LKLMvUQ1KHv1yrzVdfw5AXJNhstqUkxS9e2wphu",
  "key13": "5nih49m4upoMnPJhFuZ2uhCJj63bQtEM11BCPYienc5YToBXUzijB6KGDEytNzh9Z7Y4nrpYGx16Dk4xqJsgTmKh",
  "key14": "3bcN3yMyA7LsM8uEaWpiPcGorrKjJ8aoDLwMboBLK6EQcXU6Nourj2LRw8HbEhVPkVzwT3FpY3KhNkkjZj1seQtG",
  "key15": "5TJz3DnmCiwnHneHtX2jUWVgxic1zauMHPu8vafiWuUTGBTKQSDrQ5y8WM9dqQbZ8fxzLiD96a8Krvzf3tGrjFdb",
  "key16": "4i6RM7UnHKT3BuK13za7xWfjKj47LhwP2QVc2dEYCbP9VFfDortkg4wi8a7jGjoTK2i522qpFeCvqTDgQR1ZYSEd",
  "key17": "4a2qSNyZaWsY2zjm7a7bxAyivdWauWRLWEMhxFKuqYTXRVFNcvbHH3pmBzfyJVTkcehS6GfbfP11bZgb1BYYaV1C",
  "key18": "XJpWpKaJCNt1cXEqMQAzbQ2sDLzhxp9NiTRaWSc11n8xmoqykryr1dpUzrLyzdUPwjN7FTWNwdTbzwY5ErYLg72",
  "key19": "3F7recpAzAaVF8aPV2tr6aSJutxgTiyiFqp2K5gU4u4EwRbgJtHHqQGYgvd4xMVQU31trj9yNJyocTM7kgRkFRSe",
  "key20": "3zQQLVoUFd36PcvNmS1eDm6ncLHqHxzXdmpBjzP2LKeHswy6c35TRCqxhxp7KDjbn8Ci5x7qdvM1sakWip8JVXLH",
  "key21": "3DAF9ZU3JLGhJdjdx6onos1nWGXczinoJYmsKWDE98FaFW7yMeT54oDpoiXqE9QynrKp1s1Aid8CzqYgGPSPrAXq",
  "key22": "4mv8gXGb3dc2urW6vknAKrCvznkZNM8ib674prEUuq3uMPAyNXUXc946z9nFnL4scVGUeQMgGxcNkRVBXbXxCjqN",
  "key23": "5cDNuzy67UVQVa82v1xaFPAdbTg1UQcJTp8UkUX4e1Liymr5oNicpZwE3bhLHmAfKWDPHzcaAJnrX32Zzeap5sqe",
  "key24": "3cWbVy5e73oomsdVQ6mvCsqUWdSGGCuzhCtVta5JtwUHfKPRWviky6VtSutv4xjoqNmAxKfeEnpDKekSZoy4B5oA",
  "key25": "2hKz8qZk1mCN1VvD9TjcU8MJwrhCgeakffbaBMhtXmuayS65qQUyyp2nNNzf5sVXapmDQZdQBSPtCCb17Kq3TGJU",
  "key26": "2DkPBLVnJAiQ1duez11YhD24oLuQFLWFQJSMfpdjq95iR8jzW2e7iTJ32Sr48NFRNzN5Y2peusK2AwBqtExyxfTL",
  "key27": "4HwB4m2DnnQA5VoF7DTQQvULPUk7JikXEfzJnwDTESAWQpCgykoeUn5sVWmnjqfgD27eU6BLq3sbgM9aNPheqMVf",
  "key28": "2cPx7jGAazdFzfmD6qcJXcd3h2fUK4gpgVnN3Q2x9cpcu8GurCevD8CeDZFcYgN9vx8SnBZix2BF1gwxaG8Rd9uA",
  "key29": "5drvDBNsQfkPkjqq4Z4jSwwVYLSgJnf1RbgoArqP18trHWc7uJ7LCXeUWw5JkD7XRQ7aaLn1y8NcN9QQjzug56ZX",
  "key30": "2Qpiz3gT43p5HX5v8EbAy1JSQpbJxvnAd1mDBmHGVR3LmQMnfXuwLwMnfukb2e3oiyPq177C25gkWbm9fMeho1zs",
  "key31": "ZRqhvcXzajaTbxxVrcMqJ6Ek7YHRJ4gXz17nELweuGv88a1xMhA78GPZH5tZ1iFaYsjNHSM6Z4tyWKY5kkZc6XT",
  "key32": "zwCVxQp2JuufnRpYj257Ci2WmDeA6vs4K7ZF4ppvKouVtzd8h4n3JF7ZXVRDjT16kdu94J2qaQBR6wRLEvDztzd",
  "key33": "V11Rg3mVXnhja9eZpoKsH61LqzRsWd9v71YAnxSUTiynZvDmjZvrtXPQpCP8gdmjMea34KCTAyvHhZP68bzSoyb",
  "key34": "dzEtAH6BtGQh85PK7zmoZiR8Lx9c1QpG16PoB8Sdu5oFSHNZs9KWz7Gof6KUnwyXbSSZPyCtzT3uHbo3ANFdody",
  "key35": "5hk1qpaLS3UBzTKT43qAQDAtbSdGAxv1GQQcPvm5VafRCBXnRtmRoA9VdeAiXfbJgFhCJg982kVQiTgarWF8Rhmm",
  "key36": "2VCousohaHAGSp7GLeyWWCWYaEwu2im8EvsVPgfZ1Xc9KqKdmpN5zYebFMcfUT89wLQcgDSfHXjJahxofJLXboUc",
  "key37": "5cH22o41kJs9oFH8ntQLa7jFPxXqQTHbLrUsHm23GqChgdm9y6PYES6pCbLSNs5sF5FWU6Y1njPtvWEBdQr2zEaN"
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
