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
    "5TSXm8ZGqgaE8ifKyPSCCmBBERhqKBr1BMS3fEk4f1YkV1mSA1wdsLsj3FVWxSdJTXv5x3VReQnK9xyhaQyMR7hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS4DWdJbskkfdz25LqU6hfKMesnNxEBWCgTK8rB8GYdRH8C7cETVukBnoKxZBZC7ApjcoHWqrgs9QMriZQR4MfU",
  "key1": "5wWgkBmXGbB1k12KUAjsNzm7JwhaAjpPEbFtQV9LQqAA3Rn5C9uduxkpwt1TNRqv46w7vfUs3xhf2CykqMfpcokf",
  "key2": "5yncEW5G6cX5DM9neB8vekTM2evS5xQPG4Vr7RpRfQBjX9VpgDRkBH284cYYpDq4sjLWJCRKH4UPqfJ9WaFNe2C2",
  "key3": "A1rwDnonjkA4USm6TqJoabRj8kNfPxuTQsyzCCFtRh71qtZmAakR2ro8wBxr9tajBdr8pS8EkojUzr7HgDujXmt",
  "key4": "3s9EsQQjsHVfSYorDL4L4pWzxQDwa32LEeDHXQjfptf6mECUyFvw4v1yWe1QYWzbX2WfsfC8ghrYRJg3BY4w9Um1",
  "key5": "5Hc1SZULHcKefjszV1PCN1dnEjPhGtoYBybitVPTcrgykhkmJ6ZowjNruZDYA6axW9DgC2oxnGmyvKeCVjKgvnH6",
  "key6": "2g38tdnf9NxZDZ2E317WddxXJu4k2YgXfsiw2WwjugoWc9zAarsATFT452CdKRapsTHnAwNs6vX7a8q26eGJ3zcH",
  "key7": "2wn58Yo5cJJZJ6tPh7npjsE8kBRrfMUtMj9Ebz9rW25d1VsorRe5J4WMuiPvewdujNxb6SxsmYFDwJjGsBiZfjcS",
  "key8": "Cz1wSUDZaajB4sVvgfgxWJ2Yy5onoViSseThogHy5nWyVw9ZJFqNYr11NZqA1e2S1fjhM83p1fTUa2YjvKjUEoj",
  "key9": "4bGkGhrVzQzgEzuygGdPi9jcz9nysyVdpFge2HNQsuVyMJVchNz7Fn1V5vwnCU9YbxwiXFsdJ9ScUdu7DQn8JDNx",
  "key10": "33pSb24Ta4bV7ePRi9FES51rRt9dAANKSLqmKor4r1wLMCNiP1A4WUQJgdazo6nJSYnbecQQPFJF8vbZBeu1h2kU",
  "key11": "44AdMgTnNjwyXnA3Ly3csWbboCs1u5cQizMjwPEorFDxybNBzZmJXtsHrJv6LKcnMtZMsFHVDyHjd1XAKF5rbMZe",
  "key12": "3bx65C3tenPz9wcNJMtrwLPC9QRSr9iJCAf6Urz5whf9TJtCqCtzXhMyuUcekeKpCmaQfKrfqxzmbwjQ2M97BPcx",
  "key13": "4Ss39BptZvxgBkNVBcWGarQbus7RVRdP34Eq9keCbm2MqRjSc9woxgABjF1JX4V4ahLgBynvzoNMCvrjwUFEdF3X",
  "key14": "4314qfiN1VrMLq4chmQ4A4FpiDKMd7TXojEtgR833PVWVuxBDqAwbtRdHnL34j9isAooJHeL3wD6GxAzJkfoAcYW",
  "key15": "ZVKUjUYxZd9Fb61tg2abnzfkssHw8Cxp9EeVir8ZvSMig1NfaBvyRo4PdxcFVP6pUHvWpGtwyV8e5RgQd22R9BR",
  "key16": "3JkKvoK249ifwrWxGraKq8X83rJizDjeo5WciMCQYbEJe4z98acAAL4h4sUVQiFu7GbSDgDjK89dFxevY6LsjPFs",
  "key17": "31FnxSwurTAoCcjHKP8apGDSA1nPPHYNkzCL9yBBkBFvx9SbuwGLuhmhhhbGreaJefh8afvQzijaXbhDWmcTFhHD",
  "key18": "3UC2Lq7KdtscCJrMJ5LF1vZRHqDzsQU5yuLQtcfY3L2Wu3fg5aViMDeopZoF3Af9BZA1Ljz9iFFEk5gn8Y6QUM44",
  "key19": "5ScxgX4xCC3Eoqr1pLNaJyU5Vda575RaZz97EwFVZvZCvWuKdUcVqLftbNkER3tRkQrddZLVFeJoc8xotBj14D93",
  "key20": "5KNoZmKvrTQr9yTvF4Tu6wEuoGA7QXqT3X4doA3FHM3fNk2kZAE1nNkxy2ezNjSouJmUQt3CWoWaXKB1cCNkhXz5",
  "key21": "5LA1UYUiPtuPe1R8fo8hsrkNNwSt2dqFcDu4YxoraAcbRU2FJcs4QLjGLiZ1SBcKfQjsjQ1edMfNAhSfcLARh3s6",
  "key22": "4qZnJ71ab8NN7DnmESHxZBDgLeZpA4iYvYTqfdmBFmaBxaNNcrDj7UcNdm66KyurGhU1PNpfmB9KnpxUH2k6nVci",
  "key23": "gBQcxLu4SgQyNo5fK8vLJzHuEDAbS736qNga7NMxBWUFxDEGwyuM8buAkBfrWUNDRZED86kfxtAfaVpK8rryZgw",
  "key24": "2YmMnpwJ6kj9t454FdMaBGD5SFqnCNCCQFB71FCkuDoYVKyH5fTBMYbAKi89XyooSY6hvNbGRe1PdBTmRbnbarsR",
  "key25": "46Np9gk58x7P3Y2RVsDUFqGkEbDkfVozUchVegEz2J6D9DkUKndioTuydN6E7AkQA6DqHsYiMvEHBWfFWKzfEbgG",
  "key26": "4GWmVZdRu5b2zVba3g1W2e5TMS2qJ8km674zWNAyW3LN1KTpGvfXt3TQdkk2GiK8t2dt7kZQofBA1zevQH5TQorD",
  "key27": "4U48viDc8B7xGxgS8GSmzF6eatJ4eAvJzR2SkReZWYauhqECbKhPyfKnJKrCWk2MUwooKAew5kCaQ97kdzySTXA3",
  "key28": "2TJQRgQ7JjTLsran9sBL8kNdPReAXm796cWqfQcrT9XwCrM6XVi7Hn3tgqFGCDLCzqr5qYDRr49eaAMX7Vur7zvg",
  "key29": "97Gv3fxEG9dzvCXjPSRTy13KcKRwycYRTMCZVQ6fEUudSQvSXv8bwq5C8ZsDaBfXUPqyWGVsaF87Ljb3fkQ33yU",
  "key30": "2njU2wU5YuLYskLcYNJAK8Xp6PVfNJ89FdN1dgjRKwHrZwyRzfi7kqcdc4maAGkfkHiE2qBQ6QBub17dmpgMktyN",
  "key31": "4tcnFN96VwTz5EjHqGiPWETDfALR2NEgQj5NKmKLA8vGfuNuu5fPgQrJE47L3nDnshLY76SwVCpWvQC7H1GkrcgK",
  "key32": "41nHpKbZZsmicgKrNvfkE39PFDpVHa7G8EznvZzmaWdvK8jQmRvinm3PtsVivBmexXgcvZQD3iHj67ktUP4359MV",
  "key33": "23H3u8xGzNKzSZPvPL7od28Dbc1nVyS5YajbQfvpj8TfNv7mpGMFjet82mqX668qBLt6jVLGAS6XXuughoKKGGB2",
  "key34": "yT69vWYta86H9fY4WxDbA1GgfLMYDAy26z8ky9svh9XDUGjdHNWHNynYYupTUF9mFkrqxNfpV4KjnKQiv1Ydjfa",
  "key35": "2ysi1b8st2Asqanfj2KWYgpZu43DcgviXz3VhBuUeVsp1EMzMy8KvGPpCXYHYUaP2RJY5VRvAfuGvrgBtLQperbZ",
  "key36": "3jKFUzaQaEeitGNx2wxB8YtAo5zjaeC6bku97UAyzrZNqGrhizXhCG5eBkwxJtDvbavKveNhKwk5x4LoL1t5xvUm",
  "key37": "HUspXcUgTFmWHLbrijNqDjuMryHx2AU1n8wSsbJvTksHnNVRfYUb3NWJLiPuHSxeFUPRprTtKKd1xyAoTKW6pJD",
  "key38": "5eZDRJ2yKxoXPejXz4eT2GTb7Mo1FaASgoVCU73Sps1qC9M7jt8FwZVNfJevSduVqu9kqhajT7Geutb67d4kM5fH",
  "key39": "67iFstWrxMTbogms8Yo31zggifBWnyiXXHo21q6uytZxCoUGn7Ae7wUZbvy64QQhDW9Tp9xgogvffQzaiYapTuvF",
  "key40": "5oFhyR8sQtTKhoAwsUWfwJ9W88QCRvXnhRmw9nsHZnKDAsFgq3AqNUcCRPA9NEZK5E5xgPgrKDA7tJyp9c5KyVVH",
  "key41": "2HbWpK9jEWSSbiRSAB3kX6hYidf6hXzcLjZJppCPvuEjcePK9urBEgCKhpcXKD4GbLnEBvXv3n3RXA7QGeph7Uet",
  "key42": "2tPMyWGsPuLZATe3gqqdVRUfa4gdC3J8sWqqqFjoYDRpGaGZtSUfQVEks4GpniKFFgrVnUWzeCtepjYJgnxArtJh"
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
