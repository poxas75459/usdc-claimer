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
    "54XmwMQj9YqK2Bpaoda8ruAd2cyzMAVf8265FYFK8ad1qJjBgzZGJmv3eHDZyj2jr8WyNiDVvj7eYRNRLcWcCum7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1mT86Lac2p8kZw2iAU3MHCD7ZiSpRBYfCFuipwHiYrRmzWtThxdj5tMZcVcZpbqaTxNXgWu19aMT9TZvjDmbpB",
  "key1": "4LnPFX6EQMMHQdKMqNefo9iTqDdDd4wga5QaBg9YdWuGZr8LGWW2ZPRCAthMC1wikNCGQMH31Y18jK5zVMv1PwYn",
  "key2": "2CKyP5qaX42eCToDRA1a6eNyYqeRNwWgBHQembKLxhPs7Bwe15SiqdBM1xT4ZoY95NTEo99gBRXwcoGvKLnjVsZQ",
  "key3": "4z5KvkWmkPu7hpcaXJqq9nDCcYMhLxYsGgiJimxnEG1aVAHQVCsFYNSAWxhqYfPDviY6a9MTY5ob5qURETbaPhzH",
  "key4": "aTQxvdAYk8jyYY9vXiYTRk7uR1jD52ETAGHnsqaKGg3sxJhappfW1SqYrVuU9wwVrGFF3NbMN6wrLjJrHREU71b",
  "key5": "4QJ88xJuiLV3t955FxXvQPJURD7PNrSKke76iC4i9BLKiLpYFR4SrH3wdHUF2VTxNfMpvEJoCbpoehVmG9pvBiUj",
  "key6": "uxPSSx3RiJpdFH284srQynoh2a7FdkrBAkGpoBwKa8w2XJTXW2HW3DeMsSBGWdrYFWkQ4v56M3rJis4aALdoM4y",
  "key7": "2hRr5T76eW85ZeCe5zvSaQMseSouD3TMASpcfHdpZiGc3FFftEC5C9rcf4UqXbT2NFbg6eGw9BT697twjYFZz6Cf",
  "key8": "4d64C7NLUvqeAjek5uVQ5Wu5JpepKZZXrsAH91K5KBf9V4p6tW1v4b56FRw4aLXvGTpoiteTmG9Ld3B3yMJKiupn",
  "key9": "5HuAYoJxP2e6EdHdkh3icU6NTrTJE8vD3cemQbDfihw3shV1ZrGgpPL5Xw8WaomtWKnD4EwDdPGi32osMRYD9QsK",
  "key10": "42SJgrSwGftyWwuQXvpyNny9bNTU3i56xcUmf7v1xEXfXULmZXsLkAkgeqU3H2VXqWjc3ktQatzqGqF6EwPyhF92",
  "key11": "X6qEPE4bbHQGpUw7JmyCsERNGGkRJcJZi4PoYdKYTAqcK84ooGgjKMfsScncuUtMZTr2sQb1xq73cRHZq6eWEqE",
  "key12": "3ioYoZvXWA8CTjkWXib7xrHtbLADnwngd2NKdEJcvehFzzyxVjif8yrobERy5N6twT8RB3BHN4eZ7S73ibHweknj",
  "key13": "BVjXVVUh3ZGvPYUgjrm7LFnv74pscH2rhaFHXfWdurrHeLJF6L7uBpyE9qPdtajfSuhEk4ymg7kNAuqN7RN29wN",
  "key14": "35TBuPpTfJZakcrnWRmtSNKvLrHK6tWheFZV4ANk7XHz7hkhMqX2ps9Kp7Pp5yCDxwA8LVGBjSqye9W99H3A4vdf",
  "key15": "2fvwN6dvMKHmFjSgzXauxDgVqYQqZZocvuH88zRci4fgrbXPJNAK3zRcWtfE1ekZj8pGvSDN6bPUgQZEi4FTVLhA",
  "key16": "53pexuKd6zPRQ1Gqn3ciNWboF2sMZHtkD6ZDvEgT6ZrSbPArmq7yVioWJ9ksaAj5kLWBTszearjnKB9eJ8uHaT1t",
  "key17": "4SgZEqqKByA3jByHTHwS7ew3WdCecLdzFP8k8LqozY1R7WPRg2PZ8d4f3LtCdNE571NmxGUMPgPP54wp8RagCLXB",
  "key18": "3B1idiSoHXtqwXSu4B9e3dfyiNbJDQJuwwXWEQCnBvsYRFprvYtoJxtmy5J6MrQJnnA7Km4jk6gtKM8m7HUCLGXC",
  "key19": "4BkuGNvpeBva1RBru4rfh1YmVJjBEjWhxJasvLcmtZzo3xbgJhaKMrG3gxhdkMVTcNrJkAHBakuuiScLnG1mMm55",
  "key20": "CLZP3QdyGoSMKG58RJENX7fxFmAhNbfoiAe6iQpGRM5j7GoH4N2niidKmJj19SkgmoPpYPrMVTBPPVL5Q6tQnYA",
  "key21": "4KnjaRLTCbePYWLrYYtn5gMigkzvXPkZGsMdFpS7iZbxouVVdxoDffxnkQ7xfHM8cd1j13vLyHHBTL18STFk4a1P",
  "key22": "64E2gdK6fehSgC45nnDs6rgxYTrDHWmsZPc8rfjV5fvBLWqegXG5yu7h75AJt8XbM7Hk4NjkyA1eF8YQkKVe8V2q",
  "key23": "TV2LrdodTmR8NocnrzywvYg9mg7y4L11sHfRFRUmkP7t5XwToBNF37TjiDKfKHRqzYLHML7PWxvco8Dhjch8D4h",
  "key24": "5cSQ7LUdwWA6ZrLrBcthMmcorfDEWvX8F16PNwfakByyYp8Bc1RCxcwXvk7Aj4CzqcPQdo1Mracwn7LpZcYv7gjM",
  "key25": "4djMRxkDiXeUCwyZKPSVNMYCqMmBW2zKCUCK8sVYekxEpCSPWkEyzSyvYAG5XK7omJUArCmSTVYReK6jyLN9tdbK",
  "key26": "J9xJdERnC1wpFMCNqJMeVwwVfmt55Btt4UiDLCSFYRcDVS7xxtAeP6zSEo8XYfMfhmAqX5Xy4sYgjQqHXeThwVz",
  "key27": "3MvZHdDrVTAa39j5CxKMo9XpwQNpa6hUz1VE23vdsxPp2zYofq18BzdWeudj7HTkTqddebQtLew5rauw9NySSjeQ",
  "key28": "26YQSkFFhmiTzE1ourQHUzrzv6p9huu7Nt42rzu2nZ2v9M23kMJ5gfTMFJgYzRe2o4mjvcam2GYLB6WeJtbwiPxT",
  "key29": "2D8SHA1CydZtaWViJbQU63EW2UJc7msuNUNdQujfW5UuUkRRUJeQPsva5L2djf52ddodi93i8Q3K9sJxMn4yzQb4",
  "key30": "5K2Fi2SZUMFARrfaW2EC6QwgnEE9yTXaJbeb1Tdrs6Hm6wXjE22XMwvVyKT1UR1xtaiJTboeDDoSsSQt7UZDTNRB",
  "key31": "VwJpuujm4dZQAHfJAx61vRvQ3PV2KDXZbheHiZUifhGu5JHmE3KuNH7u9AEuomPi5DwB14d2EEEqmxxdj6b8xF8",
  "key32": "4vxYoBjLk9ZS2D93RHecpKj9T893APxLDfD2FFBFVZ71aXKCAuzLsdSnXghXfFvk9mfPF9mUf8eqiZwYSkS9mMc9",
  "key33": "26eyAKyy6Z6KtrgfyJxQZmFs4Z1UrUsNBE8T6AtSBzrC5y4ba9npvn7aHwKgv5mcJAea1e9Zijt1Kfjj29zY3Bxz",
  "key34": "2J7t2PPxQrNb5fm46pF5UmGErnZNrv3SXeN7moJLnMQ4iG3rDgS15QD25V8yQfoZhuzXicWUr4qjyF9VMTjXc5XR",
  "key35": "5fb7A3QEgRtfyf4FDVFJpYQb5jCajfq2eGvehjbEWxvnu8eGVSAP2hCEtjTXyoFFmPGdTvwjDMT9ByLvcYvcPb5E",
  "key36": "3zM3pzgB4SJsh4v8pKdJiCNQLECiKYZb5ozvgDUWBuXztgsBXwSddbbZc2c5we1vtKL5M5F1BoKL9DCEsgFfxL4F",
  "key37": "3WzbKE2d3fQg5dy2RoNg5eH8NvxEjZQPLRwcwAN8aFeQTCoExZAKyDotu2DngQ2w7bJ57jSW1wDy6Cd5Pr8tTAwN",
  "key38": "4d1PrrRbec1sBqHUqoi1XVNuA93swcRgvHgYWd8p6oAS2kCup7KFkcFw9wRKpRJ9Z8nJrksZpobsBjFoYNqhAHsZ"
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
