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
    "whn1Pr1bEUZvXs8kxtssxuwHcC88Sbs4WZJurkjeuK9sWwaru5n8ou13QNhC4ZL2uSnJR2Qq8sHDNaNgCe15rFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3B4J9sXMzS6265bjFX9k9S1tEwcNAjFPmMSdAtJ6PPoS6ZTKJ5YKGUny5DNiveuSqgDJRf3zt1J2gevEVLj4gh",
  "key1": "zXKdvevZjqoJCcyooKCqXJJRTfattF53cvUHPnKZt45kfJTCbdEjQTwMzNuitrHt3eF2uULJSkxERHCCbfEUKvx",
  "key2": "22HxDvNGocnYw2iqUhTjBpxMdQWsN2cfwvTioHjaEa41QBXH89DffskTpBTYDV4WpB97X61dMQteCHDaBqxnNw4b",
  "key3": "25n4Qd9veC274CE5kMzQWgezatW8b8eLumCjYYK77eJ4EjaoJtNoXKB8hxzFcaGAXTksqEQ6ob6nAwd6ohb4Y71M",
  "key4": "44NyN3d3BnUZNiJfxJTt9E7eCqLaLCQ8m1UP65a9vK32yR37Mhf9Qcf8HHUr37y4ZDecACvLwjx9ETRkdNC1njuQ",
  "key5": "5zZ4hiCgSCHb9arRjvHCvm1kHBvKagdfJdGB8FVxeqByTXuHNXaPqB8afskEuVLQZSHdbSKW6Muqh5UnBgJKsGeF",
  "key6": "QBspoc1UgEdRjedP6nurA6VfcGEAmQRmBR56Jtkj5SSFMLZESZTnW5CmzU9QKoG6ysvGhefn5kd3xWQrV2HwsYD",
  "key7": "2KzGjW6eMSSGHWzRYDFcZ7kzWLn9vHhv6SLzYgG9Cw6TC3aj1b997FLViVUGBdo4F3NZWY2y9YmJd1TsccG1rFoJ",
  "key8": "39sFsVKZMp3sxwCDUM7fLPkUfp8og3pyaNHk15WbJ78HqxVkfGtxHwWy6KZzJWQFLPUvK7g8bmnunrCkdVQN7skN",
  "key9": "2GTU1arsD5HzhfnLLN77673AMERouyPoeqdToLidA2p9yMTah3yu3EEzU7m5e5aE3Bqe7bk4reDDXa4v5GfxvAEE",
  "key10": "CyxYTWiZoL9QEi7DxGxPQT9rXxmMhG6cjGUwKqeHL469mrxE61Gwp14SBiPYSjg2tZH4cfFGRiUHhymWXtnpkq3",
  "key11": "5f33gU6zRjxMznck8anwrZFzYgEGsF7PZEs2qPmVTMiyyterZLGJEoiKtxqaF9MvNzkHVfj4emsWRD5CAYvvrzWh",
  "key12": "5GRSuksbLbZtHN2UECXRUe5FhQSbzJB7R12jxq3GiVT9AJW7QHwqhwireBWEKNcZXVZsgPz2E2eTHpecqeQLZBNY",
  "key13": "32o2xoFJy3GAxExQkTTB1k7KiUEmUSuPYX6XUpev5EqVHQRLtUxZvCnMnNwTGCpQ3ajUmqKn9T8t1C9kjJs8yfCo",
  "key14": "5Mq4ZkszCTyuubf5qKrZrxWa1hSZw7iAzcBT89JwEm2ynYFgxye1pc3RrBrsP7nQBd63nWvXv9ZKiJfuWcE4Pj2J",
  "key15": "2qdJ4cwiDAxZttnxG7o112jAh9VJEibHMrGc6Re9SFyPLg2XLExuKBaBsjpg3ky2WhrAbx3nCWwZ42iYu6So6LUK",
  "key16": "ELfM4K933nJ8PfDKVjqSSGkeoXdVs3Df6Try3zJDtSXTh31cGv2Bcqe7KdsKpw1E67ELzzaPNpuVfBMRwH5tfPM",
  "key17": "4rytH2SvdwutQPpYzoMFge63xs6guVRQa49121cvNBDwZ9b5FZeaJsThvsP4C5oEiC63UXQs1Ycrhhg6k8CogMV5",
  "key18": "3nasKC49SpXgUyPbNA7fv435ravUGfZzjmvYSvs7gZJ2qEFyb8JpVHdM3RR7sPNrmvRPwHd6bwvXuLZQL6y3k3Ue",
  "key19": "2o3jhT3BWumZihEap3LubSsNzrFTyX7xkK5rrdeDQ6qykYF7X1TbptbMGPNd6urdcJTqLA5KLsPDgHxUWeiuNMXA",
  "key20": "2sCDRALKp4QjsBBtVcYn8Vm3AMrKqay5D56UK34RdBDL6zqMBsApfGgaiNAHewJySpyWCvGQJZtDvaXb9vnQ8Epf",
  "key21": "29Jnnh2hR1qRL2RX1rfJxPzjA52rLVaDcScK8L8ZWzzsbSK5c3f6uHEhw1oVkMY261PJ576s9xP3aHmbDPt2z3jY",
  "key22": "YUD3YF5mGXrLLhyzvjRy5Htor6YBSmyLxf28rGMiwUBFXeCZxqCW5ufi16VPxKaDW63Ksz8312orjuf64MJCZBT",
  "key23": "4UCCLuqpZRuZzUSpDg3AfpuPFJSbW2J1Q693oniUag945dXshasZgBN4L3HnC1W7scbDLEwX83gGq5Xgt8Hr3NwU",
  "key24": "3SvbcAbHQJKa6Q7fLAWcPsrCPGEZvznM8idzoNoUL2STy1WLyGm8GFMBs8xpFcihDTFcA8swkLVgVfNZ5ueUjjM4",
  "key25": "3Gdd3YKRUzDuHCcqedcmfj1D4KiarxyKFRGeN3u219BPaHswFopSBaw6P5EfDDjzZqb4JAP2QSCNXGBA67Aq919K",
  "key26": "37o6hs1vWP4d7hLTK5CGMPjooYh2iQfbq4oAwUGhwxt3z7nGKEEvb35J2t2d9CqredjeZmKJXUEuYXEWDD7SaBC9",
  "key27": "3iC7LdeQEkJTGR7FFVmyRTS7W9uvfoXvcz7MrwTH7Pyyoqwkia2vgViME7KbT7gtz1uepED1g7K8gL7dVn6PWsKe",
  "key28": "5PJdAHnzTMsHYc91TH2uD55XJniammdnd5r7NDmeQwG2e8rhGirjooob7ZCJm2bbjtdq3tQnFFAr8QVc8vNBgCus",
  "key29": "4KjNZa86eJtFkAckhBXn7oQKzSi1CvGwxpnVoTjqk4dWxJW2hjw3cXCwvwD2QbhinMQvhNfpex8bbpWTTNenZ2CK",
  "key30": "2LrKeTCrGzvytqybVfR6kCnrNAxkuUxWYqyVME8gQ25VPgoYUyHHMJFx6h1LMDPHP3XHVaS7VXuqwv1cxGyLRXzn",
  "key31": "56dGWrEmNeF2H5xJHucD4p9SLxZG3XhU3jFEB5ezYuq3S8W6t5txtBL79BGFw9xWd9KGfQ7gCjSCJDS7wx5AV45E",
  "key32": "iKwDUzuSFeeocSzTQnmrXeHdyzsaurQhym8TGsKm9v24speF6iEhoiKSpX1PK77ns6SsD1YdAsrkxX2wjERCUB4",
  "key33": "55ipS9E6zv9iCGYw2LHkMbBRRu7oS5Dz96obYkgchD32y3NjwgemHA4dRhXxzch4Fx794i53XNsonN1Y4fjzbDD9",
  "key34": "2GQK3io7iCNtZB9Z4PVefi54sPu3BNbEV6M3GjZb76oc1Gz8DnFvQrTsAa4mPw9kbLCe3VQKBFtYykB5RaHNCFxm",
  "key35": "55FCh98i8BconzDRp4M9dR4DXfNsAB9H7iJvfFtG4NrnGAMq7Pv1xbwToVDd3jUJQsjfDF3MhWhUueZ2jVUwqWmu"
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
