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
    "2k6ovyBnNUFwHRCaQNk8kgACptpTbW7FHPF3vhU8WjGX8RJjGrhqtFPLyxdoE4Kb2KqczBDaBS2EL1HCBva2uwg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGUqooZ9zMWNY3jWtcrY19DGZscQ9ZqfRbCMcJeaPATFLBqzoVaGKQsqAUckqpnNMCfNrvtR8BtoMWzNYJB2PFb",
  "key1": "E6HY85w7iRD1cCRBsZJq2tQiBeocAnsgtSiAzfkCHs8jMkBTuypRm4vrrwQz24NE7zr5sfWAUaRbKuyfX9Vg6ER",
  "key2": "37MNntKWL8gUYdNtEe523etjiNE72jBV2jjDLmiUHktHDYpC73KiAn51X6JonqggsxuXE9JRodasnrwz9QQqfQUC",
  "key3": "4tmrS8JWvNsJRkfqGQqEbXdcmzpCSXuc8s5GpwrUh35qYgWvnpoWCHxvHmNRnhB8EwogkUDS2Ju9Nfb7ixZcXBkr",
  "key4": "4LefgQTWUXSBF4UPrRnhA2Sk8nF5YBKin3nVteizJRcLufwL9HQkQvHzUQYamsZMRqEdziojWasmkiyn8puUgmsg",
  "key5": "3iYgCF4Dr7WgnqgRzmfdK3C9gEJPEiouxFk7tpiZkxq1pgjwBz8dRTHqtmzGMHTtuBmPFCMiymCqodghL8DKTBqF",
  "key6": "5c5MFWpfyMYmvpnNDZUn9R4d3KMG3s867gA8RVoZwWAeBHTpG3Fn7YgSrGVhuvz8tNuimH5QuzggjEKeAVqrKe46",
  "key7": "3VeZow3xzA28fwGtembfsvcvwsZyQKJVeyxZEuYWfGruChpiEfAwU3zMkUspyW1Kfd5yZqKw6RQSuefshyEg943E",
  "key8": "ELix2VGEzG2hNuHgbj4yhPQ13dxZzFSNG1Ecb8bFsq1WvJpuKYAgjszaC6d9WLL3mjZArByZwJ8L8Xp5EysQ6Mh",
  "key9": "3rbZhkXKJbhZH7mHTawTGZV5GkwpYatJn127B3sNVPtXV9GTrRP4TgCgWLNiTt1sCt2BKaY7cv3pr6rPuZgpYHgB",
  "key10": "5WBn8eBrDfFPNZnLRnHxbqzV2A7UmQeGu4jHjDAG1wE3SRUUYCWLLSUDiUqsBeaWXVjqVtxgbqSYfPaNE9t875jM",
  "key11": "2xj32eJmcgNGv4VMz8cprRLBDc2NnG6zzbYX3eVgg7GHc1cuuuQbUiR2tRSPFG2bpMKModGgm3uBVjiYecmdt5z3",
  "key12": "5WKFGsHDRnSTTVsGWFGLHuH9XiQp8KHSXTkktEJXguEZiC9aFmSXjR6vRmnpGTx8TiPmGD6G3BuZpD8GE4Y8KhDq",
  "key13": "5URy4LJ6Bn5ctnHWtSuzgYesznuBBEB2f5TFs5BocPqKxSoxndjto6gq78fc9jp3cfe6fTpkzEgxR6w9NWBfUTSC",
  "key14": "2CbPpyLwgeUkWnimRCwi9xtb8kqnyzVM3jA22EqFCo11B1BovcvLH4TTUGdA9uQ1wAMpoUm1efywi5ybH88aWUAT",
  "key15": "J1qqRie7vWfSe3VNsvP9ykvsec6w18NjBoQgXRkUCbSf55eyZq4dapVd12ryFMzGqw2R2VtBZPRxgftiEW1aTwV",
  "key16": "2GMVXmDiHbBo6WXjKoANjYboBVx1NQGeGAVUtc771LWd93MettbJRELbyzayhbVWQxR6VW6kJWWY8cur1Tv1v35S",
  "key17": "3Wd8Mb8FjRFZf6bGqvxqvyDkGmwwsw1YTQrngV7tTuum2z4s5JwKT4tfHUv6PEXMgboT6YtDGUxQcXeuSCXLCrQa",
  "key18": "uXv3T8PprvHvUJszr5dH34sqApLqFPEz5mk297br6fwemjpKSnSq5wNAzdkhs9faNiUXjsX925ZLa1R8MVZMSW4",
  "key19": "GR9Zn7a9iaR4rjCre6JfkdgQE3JmmEiomkVhLVncSszVtKbCLTxxSZUxZx5BfKbzkjKCc2Dx36SCHRCXAnkmgQS",
  "key20": "5qDoFch9ZacK9wSSr6FdqSstcPz1mLSQM8Pyuoqk1pqUQ34UFuE7QbnhbMmBEgj4tKhXd2UKGeVuYJu3f3eanaQx",
  "key21": "3YY9hSKqH7HKyj5mkf4mK13w3SfiD5K81NUsWzurcnGTXAbSKHP3GZmoUcd82Qkui99cqEMxV5sDvtbBirQ2s9ME",
  "key22": "5i3QmcJ6TtY1D6tDR4o8qaHjEG7BA67FRYmmEHfVwQmjXcx2tsYPvkhUtD1cUfASiiUok4zS1r8qn7fwTMQJzzdj",
  "key23": "3HxLpPDzqJ1JgpvUvA9hjMofvWgCQ6cP2bxLjcM43bU6VWDeWF7cphbUBHftDiVGb1wWYRZtEciPaKAXReBS97gs",
  "key24": "Bxr4yQreQ6KTfDDScme1TgAB5cziV8Wv7PJEs9D1fGBPiJh3raGLCQh7mAMLpmhTRUhENzFitZQKB9Q33tN3hYo",
  "key25": "2h8B116unDY1f8qXLp9H8EJq8x8chd7CUcdeAtCMVKc1PXFbPhFEpViZ9W36xnPjn5X43g5uk4yh89qTZjiQntDU",
  "key26": "joMXnEQcQ3C9HEtq1oQ5SE3WQ6Qgdz7eBw4cNvTPP1h3pV4mcrpw6cXrZe6QULHmr6wVagA75bpXNTj75TTffij",
  "key27": "55oQZpmr6pmaypUpxiaP8mLRa8ez7SFDE3gfxSDUorKNFvBe3u5LyXJUQNfmfMQXhZ2Ha5DH5X8ufqxmFLJ6Qy5b",
  "key28": "zrMBsD9Gjr3wMGHBH1pGWJ6EBisBCSffVKUFYJJj96DVXKJRNzTfWCFuCdiwxWDASUy2gZMN8qpMg9eL96jdrai",
  "key29": "Vvm7XKvkZCxB8qRu1SdVEV6BDmqXhNjH4YuPyqr17y3dQH8TgdzaPY4LixkK7kGkFgvuX5GAvrCbUazrtJhQin6",
  "key30": "4p59JDyHHijNfWpKEyJQnrpok7Ve5UcktSmhaxtCTBCNN6VzeLnXHszVgH5XUG7uFBvKmCNY9EyycQnAoA7mezfb",
  "key31": "4JNTDTGNChmAFts9o831f4pdcGMSxPA8LnKpNas466ZKBV4r5tYHyzCmU11UBqJCYYnQkadVvuh2ztMzanDaBwQV",
  "key32": "NqZQDxK6MJUDiyF1ZWmjVoYD9zs4HXsF2e4Q2Xix9Z3P8LDZyqDNuLowzAqo6PdqZE7vDkxnNLFPerASAzr7JGh",
  "key33": "2fEfN1pHF3PAtbtyKjeYvHPe7vfUbmPZKGipsJH3btd8s5Jts3QW9TzHPtstgWdoZFk6nKQ4rdAtRji1EZ9nizKs",
  "key34": "8rHqe8JChTJZxkf9SAQdfSVWRUBQJGcdsMFPm6HAqBRA3LTtdt13zmEKcgwgZ7ZmBxhsBiFzDGBPzE5WwpPou68",
  "key35": "2v4AokcnyVkehVyV535KBe2q5UfRgmFMvk8H6cm9iUSo2UZm6negvxsSxHjKhoPSgRBkTAZDktogqfKvR6zLGg1z",
  "key36": "knUTRuHhb4jD6hXurcGWdUvdN2cg34L9bW3kx78uzMJEwSUjirFsTBKySgktT8B8zBzus68Q2sjv3PutaBG27HB",
  "key37": "2KyN8XgASVVZCC48wQG4htxJtUhh49wJuwKuFgy6ZcApatqNEgfh1NvPUH3VxW6oocxmjHk7y33EeDtVk6KaPwE1",
  "key38": "2W7MXiNFZq5P7c7a6bABmaLkmQq4jUQFCSMKmTgSTEjz56H6KnXyaDQxzpXkGq4pniJitgkvQZR4SYP8sf4g6pRv"
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
