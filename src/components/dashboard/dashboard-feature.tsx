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
    "2pcTqPWayrCiGA1EiP2UBYqYWSe9PHtHp4D6YvBAAP9yyU5kT4nZFevjw8YcsNLZz31FR39pmuyczQzmNyEsjBQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WB1g6y4Pc2NCn8dwM8uS37FPBnht9QLiEqg1k7qwMWXhJkvs4xPngNTcyjRkQxjWFJkNz7b3bn8r833tbGue8Lx",
  "key1": "2UVbjWToMgAUiTKW5Z24rzQNwcM8XZqtFVwuGPUJBxv2nnkXGGFqphDt3V56bduxc53AE3qUL2ktxzokDV4w7aHj",
  "key2": "395gQjYzpexxNgg837aQRcfFThKBeTyHnTnWvucXGV9H9V5dNvwNspKtU4HMcRfVxTuwqQXMoQAuEfaUfk5n9afk",
  "key3": "53kxEWyxXTS9vwsqYWWDMDYkKiY9eN8tZTV6NKMEM5kCkp6jMUU53wi1MBxPeni8bECr2bVpejfJaye58JcRthUB",
  "key4": "46BwPVsyqgRxxrFRw3FcB7J7pY3D2QwmChRD1U75tNDDutVsK7ock7VARmMC7QAheW6H6uXTMjokpeLy7Dr1xodC",
  "key5": "27BDf2ovxdqKGBKWSP6xn6meCdYYPmqSdiiJe9yyFnunZLFmdyjVY2fBKt9bVp8LnyTrJnnTVckS3hXBqYVAajNA",
  "key6": "4t9ed4hNk7HjRUgggUgthRVehTsTaDRm5gDXzBNBB5jPg421n1iwwN2uopAK1R3CroV7arVt2VuiFQyZPs98TuY1",
  "key7": "8Qt21f8kne1EiJbwHVCpbxgd4kkHBqJ8si6V2LbuMd51mR3uPTijb6wcmAAaqBsRpHiRPpv7Kj2pPhLyzEuitnu",
  "key8": "5YjRWa1ax7gbpcytbfSdtUCKEXTghpBjPEshZdRjoBGTgE6DNci86asG3UbzGyCutRCouA7Yo4jzbxTAJqM9pmih",
  "key9": "3YV4Pjzi1hmBSvwbSamCcNJqe5jCrAfF1FVsdHqFNXBNvKHGj5JV4MQBr5K3Tv3XpEs1R7mohjd8UGcCq6aiGhZ7",
  "key10": "34Tvo4G6GMNUuxbkY9YN8s5Wo3b1Ekh5RqNhW7B126MNHnSXEcUDrfmVb7Z9fRnBP4zWFD7FJhJteqF1RUz9YQVj",
  "key11": "53eNLdVJxubdL4SKkWm7DPn382ZGWA4YAmeyZAoc24phhBebUmkU4bt28detDModEnHHJCDCirwt4FKSJBBzv5xm",
  "key12": "2TdJs4wqmshAycPvbemKVDYdVFf1HKLC9rF3QLN7PsXms6uaMVka61rUQejfrA5CjFtZuUqvp5zFKUckjBH5thCN",
  "key13": "4L12wHhXKdN5DcDpiETLSf5nF6BxEm1aY8MX6huayTU5byQspTU7CAoLbzn4oBagh6uPc2siEv5HBSqRpN4hxHFR",
  "key14": "2HHeKdSJTo5B3qM7kfnwKdJDS7ZSHtXTJtA3EN4p4sGwD77C7hdrg72j3WxW7ENHGui9sE62bm8oC9hfz98AiC7w",
  "key15": "2BqZivXVrHQPvkeBf5CsrHfFdD4TTrKi6eKYVMG1bmhCKahASwiPTaUvHiDDBXJRaQPWzqvvXmEXJCmiFUj2TebM",
  "key16": "EPy18NFTR7J3PXWArXQqNx1esH5etrNPJjBcTBmLM4PiYXuFGbXVEocaecER41kG6q9UazA4T6ZfbbdRHSoTM87",
  "key17": "4eqhQB6n7uoAGPYYXt2qHKBv4Tj41kpdfVrnn7ox6kFYKQqq375DBEw4M2h82LiqWMaGpcKMdQByVis6kn67o5pc",
  "key18": "Ww97Aaj3qrfZmVHwkG6P7CN2FhHqpTFTXq4ZiUfjLrFgCmZfYVUGE1b6aXh7CVHQvDGH2ihyQ3C3W4MrWY8Ueps",
  "key19": "3RaE5sUUMkFm2feXuBsNC7KnsacoT7BDqRH5CQVXj7vJ2e4GeTDkDN7UmghetZSJMgSsVuVefEJdGvCVuGytg95b",
  "key20": "QxRLHV7am5MGBraFpdQBTJybMZcuYpuLFLUpg2Gh8inYPJY7uHKbCRxpQWV5hxP2kjAZqUMGbnR5oEpca3FiuFs",
  "key21": "419wo8LBWm6s9nbN4mKNqspoK8GJhXhMCLMcywJe62qRfLkV2uqifMvDBDTn1vr5Az2XizVtT6nDEXwJRpBcGmAX",
  "key22": "315Jj1wPNYD8hBTTt6udzSjqrHd2EzVfzEyRMihGMmwJeJ8cKswR4mPDq9kwYvuPRHp9dEGxmTZi7QXJDUpBfivi",
  "key23": "KAmRqgUwe9V8DTXvehrHadC2YMcPUBtVqXvPEeau1e2F2Epa9ynqWBB8rRqXc7NkEAufbwEhcadP2W3u9ejgdX5",
  "key24": "egZYXChyo1PFjBPe1GfGJdVi2B3khUJtXuM5TuYBdmEKDuUAbej9qP8fVZp4N4hkr3EZwKzRfv1XfjfrvW8TTHs",
  "key25": "2PrxDMVX7VW42uqGSq3mGhh6oMTG19WpVinXnAEwC4wrs2BJv4XD5xVWw2NLQSkfEEUmktAAkhf5NM4BQKvUHYUB",
  "key26": "2K2q3guZg7kiG3XBBVJYaaN441tB3cLpdDfrqTDTEpyxwZgESvJPixYLPmYLmRQSEhaaMdmRUXzBzfmEy68rc82w",
  "key27": "p4ysroHajLmWBre24prj1hf9uV76Xp5RNRxxJP2ZbtSaPme1co3UzTygNv7E2bqX2bgugXKLVqxGBTuHZDcYMs6",
  "key28": "3owY8ryikEuCf3PZLxKKJV4VBor8Br6aBGQbgCpnPShuHdDLS9Yb4ViHwkZWiq8ypmnCVajTo6fnPXZUtbzvpy54",
  "key29": "5tcWmEVVAvruBddL3o5s7MD2LHdma8Gp9urFv2SHd8ATz7bFzdECEJZKBCn9r9WHfcRtTkRgLBbeKVRkWYNMdJRo",
  "key30": "599bH35CrpNxy2gyLHXk1XMJhyGFdFRxmDerA63qqg3nPjRT8fFke3isc9yNYQ8qhi7rdUUwVBAY6mVq2jBFdeY3",
  "key31": "2H3yenMHNECD6Sjtaf1gxhwsWhmvfctuSCJsWU4LcfNLrwsErnffSKJiqUYQQqDW75mcHCxg1euzAbKETXPpVbAX",
  "key32": "2h7bZu48w8Gi3aqNnaafN1JZ7xC8LLp3hdqEQDWe6qoJJoYnvsbPfRhSJCYMdBf7aLVzfnGUVT4qaoj9FvmdeziZ",
  "key33": "51stB54soaAc1ABPWZ5zYx7uqrFPReSWEe68s9VzdSCiFTYPhZGHdvf5cZshW7FHoCw6UoYE8zCf2VEA2nBCr88m",
  "key34": "3UVkQecY5RwZLcPt9k56ZhUbCA1oUf7dDoLWNqqeauWWRXNUmADFB1vyictUEFW9CPpqQg2VZnnvqpGWkeu5xN6Y",
  "key35": "2zuUPJzFnLmzpUyJfjVxcsZQEk6WXB5B6DoxC9F82gPChT496582Lw4cWErX927cXGor4k7fmkWKC9zR5JEqPFRX",
  "key36": "3vwBYKErp9uyECGGNE7JFjTFrYKuVGLyJqRf6e39yZXUEo9MWSF2eJYzUcyxCkAabTTy3UYWxDMy2ntP8fZzoqVV",
  "key37": "2QvZb35gL9LmAph1tSH2M1xvsogXzrEMr8TJyUtnEFxzewEiLhfcPfe1C6XuFpBNxpWyeueLXZaZRyVriSd5diZD",
  "key38": "53Qq3pcfhRrRD4uw2KvBsRfZ4q2fvFPtej75G8iqu84ooaULxE2Eund6TJKqpf5bpTksu835oBQeL5tTqBbxWa9Z",
  "key39": "4MaXX7YGpBo65EX2RJ2jNAgpd83ph2DnEY81RF6DMjN9A5xhZFKFucn8u3uB9Mmb3aTv2mdipfmjxv4mgMmCMk4",
  "key40": "2TaC7gc27AfHvt3R4JFFRfyB1zYS894zxpGU7eku1armtRaYb7XerMm47uQXjY7rVUGnjjvBWEzgDXN9rcQQqqH6",
  "key41": "5yKJ2r7jtRRAihPqnL3JK4oxMJa8ittJHJrZD51BdwdAD8GJqagN7GdKrTrJtqA9nomWtRYty5C7Feo6oVwG6wy4",
  "key42": "4nVjRyPnjAguDmsaXRjx4j2ZirSrfwzRT9GE68Kd8V4CHhZJQGDjRd1DwHiLvPPfqiEg5mbFokt6JNJdf3KZ91C6",
  "key43": "RYCMrQAqb367p6iBEnDF4xzrsgyXbD6kMXB2UztYq6xrNNDvRGdqh4xkQjZgPwNk5jD8vo26ZtzytZezDtpTwXU"
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
