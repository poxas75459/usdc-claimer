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
    "38ATmu5R6FBVQx6mx1epqrCGdU3Ks4hS1ZJAh4oENtJdv5EatjtdPmevGE3ZGDKMuJiwpRxcNajZn4GizKdVoUmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3pN9Mp5ZQjB91Eja7gzNj1NxTP7bKEBuhNNET43ZtiafFbJF6bbxzSiiz9LBSdrUp1VYBwC14wqeD9KGTVENmt",
  "key1": "2zhA7j7MQcAQSNdnUb9XgeNaiMuAykFd9g19bm14MbtNsF5B2yJ7o25nUjTjfQ8Ps7okw78ht2X4DFty8ZBhkgT7",
  "key2": "46w2F3huqoUhTeGAjGXBiRzLzjdM9fKhrC7GGMjusvhcvaFMM1sLkMEATAnwEvJxJucLb57dyQge9hMmTjjDsKdE",
  "key3": "yCuY6gjyfdxScasVES4HKNxBgrU23kuN22hSvTWUV3wJL2K3uJdSrbcBBt1ZoU5KRoWDUKEGPcqUizPUEwjMifA",
  "key4": "bvxeqKDniro5LEAg47vGsQSxwrRWvYr9BZNaXjxFMVfS9LNbM66f2MXcYT3fLoiqJ5S1ngrEezia3unwYQ17mP6",
  "key5": "3V9ZX2JJ8hmwkCJ8FB16aS8wYyCTWAKhKdgmqUpkJNMsqgjZJjcV1Gx7KaZdJcNnzacj2XSd4rxAGHXUwQdBdCSC",
  "key6": "35xNAQkn733zeq8oUUFaTfNktikb2WPJrZQibr1bbSVJCe82W9jaUjZ7XuHJLygp8PVk9v8UH1tM78egEU5tYo2F",
  "key7": "X3T3JEuycrnsFUGJm8wXco3EziGJy7yAbhfviUftJRymZncYp6RMWKVni9VG7XxCV1MXcQP6fJjguqsqmbEbCoJ",
  "key8": "v6RiTJ8BTNFnfcXikwrLZswV2MAH33tjzzx9ifF52qwUndTivqvYYt9VNYUgWGUV1gkP3XV57yZBtreqhHFHZf4",
  "key9": "4n6SXs71Vvv1nXVpBBFTSodWifRLHTbVTpVuRayHSoLpjTCLu4nSSi4SVgCU29PEpFtZCRagGNxmCgSbV41md9nm",
  "key10": "3Ye9aiaGKMoFuNiDeLtSkjTcoxHucVLM9AHvuJhA6xSYzGnQbzTjkG9ucHLQiEzRKnj52u63NPbvtGgzrN8TsYWM",
  "key11": "2kkXPWYpJvy89a6gfxMLTHoosr9wetHGADqctHHPcxniUCAyuHCUyfyB9xysqJxy34pznZ3pvhjW77fg46NLzWrv",
  "key12": "474McgH5AuqLfeKGbDDEAf5dhVD5Ez5Wj2NB6A6P5fE9g4CTJsy9UoMhJgz3Dai7BnWCk7mRa5AoF3jtr9phXZ3v",
  "key13": "3VZz8jV1ShFyJxgoR1b26pt3fjW3s6Vg952FNsU4A8jBTk2WESwTDgHarpjfvoLQWBNeu6Ff2GutNH32usbP6YBQ",
  "key14": "63RNaqR49TAKPwc9SfnFGqiZVm6uXmkDkvUUFCogkGArajYdxhJaRnPdbkDPST8SZgJZnL2N4YdA1iJZ26cZVd5D",
  "key15": "2zXJxebqKYQsVb87fh69LHMTibjhUyibZM3b49QrAvxMmn3Fo7zrxeCBTPoKVuQpH3zvHJHUT9AbQWeeGaNFicAd",
  "key16": "5wnemmULN58CAU9Mvdtf2G5uJWWEFZVQbFbY4Ur8WDTGiYWrqJMgtfRwCVrU4Xis2NwVdH6kJpU9o4BMA1ZHm3W9",
  "key17": "31HisGHuBR9yPFvCcS4E27VuTqgZ7R6xcrBsXZHVHGRDuQqsSMvujFokKZ6nebQL8nyHKCqRRm4LB9SNjm5NYteU",
  "key18": "3eWTK32YmMHBu15R7Q6mPGzsfFyRj3VqVbiJwELn7vncgfWXbaBsfdLtPWiU6HiFG5vn2GpBMpivtfe2kgAp6qay",
  "key19": "pRPBGmfD7vZZPBWuknyqmwDZz885M8iX6upJ3RjCb24aZUPDVriWDghyLkbk9tiwevN9DJoitWypkqxX95rTeuG",
  "key20": "THNYqSrbrSU8Z8XTvLoDh1cj8mVfeBvcS3jywEb8Tf1N8Jca3MiKCPnwkZapgth1PV2kznWndKvmrdvd78gvfaz",
  "key21": "5hQ8QFxAYyM17zyNFsya17Dfi5i5D85dT5WZjPhMFohSsAGVmBLg1eW4rnH6ukoRXEACNVxZL7P2mVr2Zcsp1a1B",
  "key22": "jb6yggr7sM5Dz6KUmM8PXhdFiqnvSN2Khbmkks2kx2Jgo8AG4HtwxhfRrRSGYbozW2Ji8jdkt5q3NxcnscXvxyh",
  "key23": "3Gq5jVE7ts7JMQGDXresNKuLc8KkrAsPHDoruBQX8Nzy529b4gSFSuXi5aZ1auPC9pttnKcEzLSbZA6bLhdTwKQT",
  "key24": "4sLYymg7DQAd62Sqig8dwUNGVqbwTnS94kecGLhs6Eu2B4Ma7JmDbRh43ZiEwjztUwEaC8UtEEKQYxjWcW8XqZAK",
  "key25": "4hpHn23XMuxbPajKnVRobYr3fs8sF97Ke7tq9drcTKnnzunBUZUUAockBYSFUpodfPSfpRXp9ogHMuiRZJNGTSSK",
  "key26": "4wj39FdMGfWne8ZgeJPB2gLwv3Qt39qfW7HADKFkxZokN7biscNW73kkn5C59AT4Gha87APAkcmtjAhUkrbDVbvR",
  "key27": "4gN6jgMQJKSUzCUYxkb7mughg4mq8h7VYi5RqnhUix52v5YQXuXtzCTua5J6EYadUgDv1grwaNyQLzescS74tduQ",
  "key28": "33tnVyPY4WEEDQTwDfFjEndknzv8HYQJNQf1EhXLaWH8aDZ2tyCr3YWpKQ7JXjfJwS9dYPFmVW7pQBpMweZW2RfL",
  "key29": "CHpzc1P2TMnPVkNFiNUWkcHYuGEGb33X2xoQ7Pt34ukesRwyUiiLm3qgqXCACgvZt98Z84fJ8F1wjG24Cnpn1WW",
  "key30": "5LhdfcRKMwbkadKHSpzGvzg4i8w2A1jKbqo1ViVgqcCwm3q2ntftZ6AbX29j9kXLJqAxdRVXk18HdQVVjsgXPeUJ",
  "key31": "5isxbRhFkNQZfgdMfccVYnQUoRWNV9Ax3faP55XR1RGqf3cEs7ie9p3FPtmkfZgr8P7fXiyLHHDK2aYx2E1NYgvD"
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
