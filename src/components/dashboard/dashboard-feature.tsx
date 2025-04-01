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
    "655mAGc5FZZojKca8oCC2j1G3vyi9xqKXh8K5kfTMSLse9AhBfx5uEwQW745Cn7DK9qCfMypkpsZxjLtvmY3hsnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtVP9xYZ5JHfGB1S6SUVTpeBaewzsc2sKnEAWmLYXFSWsZTBGZp5vs8GCnYWh2rw4USwS7iaMUcEaUWe1zLVZMs",
  "key1": "2UJqM7uEQLH5XmGidMjuUSFmjnoiS79jJV67KpZpfSGMq6ApQ1kgDh6pRX6tC75JCwQydLxXjViJGq4YgfKiYu7r",
  "key2": "2EVWaiLvpQuws8eiSngxqBQeQpEtcdxpEfYWMd23KM7fifYkkFwR2r9MLGfKzfJbuaPTeLXCpBNR2vBAudMWNym4",
  "key3": "KGtvpjtYBd2BaMxnZQz21oKRAQkHHaePrkpBS1CDnsVgiwACtoHUKoamHMdM14baDLeMV5wH6GFaEV4NnnTyPQb",
  "key4": "RQRgAMD1YmE9q4UYUa7iMNQ5oJLVo22EkSD1SAvfU1wrQjPKTZvKxkbQBCXr3UUCVB3JDvgkGJrrStR6zf3jX9z",
  "key5": "2PiGVe7SdJPTyFg74brcGvEiPW9LjWRw9uX9DKNiu6A7uB5tRsV66HyZwm3hZzeg61MNnz4v45pisaqdZfC8fP1F",
  "key6": "3bJyBjpzMWU9hJRMeFEfWb5r3bQJ9ssxSqftM9LBKYpVJVuLDASx6cCE8DWA51Cn1Eu9RtoQA5PuzdpQzfqsRhU5",
  "key7": "feWdUpmLV7LnVQs7hpZN7K1vJ84UT7j3pozNgWNKdaKkiRzMGeCmxmJ6BJt7fCHnjgrsYzKX4axTV5t4QcRzpuq",
  "key8": "386EG5cwxmSvsuXbcG8ZZmHUn824m6uGdpe6YRB1FqzSi8sJBoCNdVGnE1brmD635kLp7g5onLj3djqxDUyMiWxW",
  "key9": "5GFXu3JjJctTv738WVTSQUxmrEByfoHRP9ZTXW2hscKaJUPLEGJZsPTeva9G16YSJJSV73RJQYiuFQ6QR4Eckgbq",
  "key10": "2kUgmtKLdDafZ82MjPqhc7oUnanPFd61e4aCAzj531avbGTN8TrXJi37VTiuSrcc22yN7mJ5dWWHBmEdLhhFs7Pa",
  "key11": "4rEuQfqcdhd8djGrMVM5tHwybEVAQkA6ZzBsxumyuzykfj5EVZkxyNE1tbaVvxusxSGc1C5shQbJt1p1dcuoh7pG",
  "key12": "2ThsMeJtrF2kDYGeQkdp2WsZYDXcjg84H4hV1QseGiWmcfKDV6rPQscrUoKkGrTKYpFpPHtKHXHTG7h8uSLm49dU",
  "key13": "56PVnGjXn719NffyYtSiWfQWEg2rkvEzesgfxeqezwVUZLHQsizcG5ak4S1nNyrLjhUt6XRghpsZ4NAZ62XrjZ5D",
  "key14": "41wYGtrap4UT9AjB5w7HwJ5frygLoStmmd9xgF1QpgBt9BGKxWavWu41ktVTgpqsHbkPgKSGhd4CapRUjbV2YLNk",
  "key15": "2NpB4aEyTeEMCFChuxSp8PShxE57ruFKMfDE8bexSz9NPn9TuG9kn8zPtWDRHBqmhyRcnX4HfX7kWLHvrj2xuy9W",
  "key16": "2UwqgHPYbq9uTGDJwjo4zk38TGMLbDhMf1UZSygQGuytsfuu7rtAQfRN6jmqZiwYdoB5X7T9ULNGgAUS4827H8k2",
  "key17": "5mZnDMLT9EsEL6aESg1KwdvodisjWyxA94USfZ6JudRsQdrQfSSJPn5awyMSzmMKP7C91Z3yPgcBXKQi7S8YrAE5",
  "key18": "3JFkjH9jJut8nNqYcb3PnTnv1yvRZeFwDT5hP7eacig1Fu7rMZY1ywLTQsLCqgD9zH8a1AgMNJgBRvWB12kF3Bhz",
  "key19": "3igzqddX17vRF6qUSZbfAjzwc2Au4KgHRAEXjZDdrFCNXSQp37hLXXixegY5ETDPLZGmJJKtygmaFSzYK9eTSEDv",
  "key20": "3XMDh7TFtK27QnZ3fpiNxnYcg4AYJHLkrhg23mbCqCrtVpBAeka6AVjAMqhtWd8vTxKzy8pmftH9vfZd7Q9VFDNe",
  "key21": "3fhz1PERZ5QegpQAMMnGJWk4QyFSSeAwcAPt9Ys7MZL8j1KYQmt2BEgT5KRgs7ug7sYFNEQkRhvxyJTGab3KDihC",
  "key22": "4vc9czt5ZpgYXgPdyHsGZUmu1mb39TkLcqHzoM4DxAe4oLs4FhWBC3An6xmo3EEL5GPPE1pjWMRSrB5EQMxf4wJy",
  "key23": "oVFfndxu1Lfv6C3nbindUSJhwJQ6PfDMBoHT33cF2NSBs5tpsatiiYvtWGyaibZfQyBJXTo7TCYzC5kShk2mamZ",
  "key24": "4o3Ca1dLj2eJ2uqXsiFURLij11HBdGWFKK688befWsAYwX4UH2dqG68jRouw5rJGxooG3utKVPY5YQw1n56UAua4",
  "key25": "3BfJpsPYnDkW1tLvmCzb9PyywNxBM6VNCLctGwx79qoBroBTWvtoRAdtTZNfXs4fYU4QnhRtzvRHu1WHw4tse8qk",
  "key26": "31CrnJeuzc2b45ULKRtuCMWzacH3tocmFvk9uqP63Q3SVMyikeghDWBxFvkBXzxN5vLCrHX3os6FSQbCYvuT4UJQ",
  "key27": "37AxibChLJ5kWpYn4YkfMG7RDUNFarukruGSdj5fAhAkK4aU3nbv8zJtZYVs73me8hRzXdAxiNWBWm3siPCnxNwF",
  "key28": "3GCgqfpTyRqDfsQcT4odEjAZnMb8X9kn6gFaQDXSSQSMyqNEiNqVcckjYS1jfGn5qFqUQJoKSc3bWMUh9nVrQzy3",
  "key29": "5v7qcJRYtMgYTnFcBQWqSn49q99RSTtFFCE33qxemL3aPsU2uBWECyLchrAVzvss8cUJ31n2woyRbpqMgrUUVKMw",
  "key30": "wb5UAUyeQ8kk16uAgWtDd3pd6xW5keowzQ7bTMEXec62B9wGMnXYw3eUFMmBGUHA6uZphVg5J33mQQWfekzhrtr",
  "key31": "2AcG6Yt3vHBRqwYfrrUYQ79u4bXxALFPe9ZHQUym7fJrGfEP6H9paMSBJkmZSK6KAHs88TuEiivhwCvBSUR9L93C",
  "key32": "3dz4x6udKVJCaSQTw9CKcYqHRFF45Xt7mERrRgqV97vMmEz3WtU4LUUK2WxEvyisymQeLkPaPWuMfQjAfRkkq4NP",
  "key33": "2tWwXxwd3yanXCgm4JvZy26FePQM91zZQPvQYwZsJNnJL8eEfathZwdBY14KvwafxUyCQa9xxPn8crf3W375vk8u",
  "key34": "AsJzJfmTr8SV1uoEdtMhaL9ZNKW8waLSaPogbQKRj9ddNC3ZhKVcDzHJSrWuRCMk8nCnzu5u9fuSWnffDm9WbkJ",
  "key35": "GgQj19z3GdRQVAdfVwtcDPwbN1mNnhSRQqut941igcq5XE5uL3we3wE8dY8vdJk7vUj6VLoBmRw4637Gk44TVSg",
  "key36": "3vCrLR4DSqFVERC2me5AG3aABGBj5pKNw2JT4qgmSfTCUiDx2cuaoRuydV5AjAyAo5XWQv5mnHt1vATUyN7bXhQx",
  "key37": "5ncK8dT8xJFHG7rYCWsqT65w738FHBze7P5fsr2xJ85cn9S2e11Tyk6H32dyp45tfZTrBsHsSQSAMDEnwtuWtAWZ",
  "key38": "4yvRKQv8uGG3zB6VTcMB9NHVsqWpbMLQcLKjk8Ex588wo4JEsu48mayKTXDoKdSuqVgsHFkAKBUCvnTrCtKk9PBj",
  "key39": "EBNCobWcKYK87jQFGeQCNsYMjwe63s6LAwhjvFQoHF1f6XsnV8iYLE4MjAwmLYPYthcauhuQkPj7xfN4UmkHkWw",
  "key40": "5759X15991Hf6B2BZ7zMhDtpR4Y7J7KnP9eZo1XhBoeneDjD4XQTkiUFDUVNMuMf3Y3FFabMHrUASHXaw9yLSPSz",
  "key41": "4WujcMSCNqHCGELYv3GBBDoqkh3D4djBBKB8JUygXMGJ6PMuVnWc8Rw7SnmmfBLBCB8GAiqCMrP9tAtpe59zs4YW",
  "key42": "5wN7EGWL4vboypYd1xkTK1yHtcCACFuozH3JxL3neM4FszDshjVDGK6ibMjcDwnSbQ4uS2VXVgE8YPBLDhuCcSBJ",
  "key43": "54UdcdtDNUTzmTEtfY3vy63T3mE1n6N6adTAA5cxijxUEdWdjYtrAPCbEBhQFSjLNywxNfpeYWmeBjPWZfrnKQtm",
  "key44": "29kAwzSPavmKkm9pSfToKX8sy4e21FyJa9hLxXJK2TjBKpH9HueFRGZxps9ZSGxM3dvwciuX4JXdBTrBTyNwV7KM",
  "key45": "pZsgDz9o9ecrtpKtYtfV5RJvu8QSnfM7vtyqU4hDHM8kPjf2rB7fq4XVYEqPVddmE91WaBN7zewwe8PNu5ZEAaa",
  "key46": "3rippPUvHNzwCjLRjcamWsVpzC9p8Z2eb968PYH1jhnEJDi86wR9TxZdfuvE9b5RRdwLWTvZW3uiD9HAqtWxMqsY",
  "key47": "5SfNwLACHmSAV8BkU9cpsczScf4875V6B2aXQ6CgPLQhUH9T4bXW6FZrNz4ua1fLf3DJmwYNcSXPpg5beyybNCsh"
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
