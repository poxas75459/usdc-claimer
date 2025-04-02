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
    "2VkhD5v7QSKdbPPrWeemyH9y9SnHDSxnrWJhLTqCqySC7ZXgkYd6Q964GjSbLMM8WXG6YSK8semUvLFSbDYNFtpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXgWyAq1ZZhqUKsRUWaYGEPUskEoSdkHJDLbCVxztBpHKqMb9HwiGDWYhD5JZ1xGpy7E4ywdTeRjLywM6CZawep",
  "key1": "2UdeZ7kwBaWq7361d6k7mmUjd54ztqD33v7m3XYy2Z9hDHJjbGoWiHn9WB4pPZKC8TSf2uBcyWEdeq1NPaj7edAQ",
  "key2": "4ue2HMrLQL82C1JmEMHKBWi6CUCsV8w3tfnMCRbsXmEE5UxbtbL9SiRUeTPoCfbmjBGqPpg1KTL4RZnUZecUizwV",
  "key3": "4w3C8WRyPTZxnUEdzq2egtESo9e9k818yVsJMiP5SE5xBfbrbLSSPyn7nL2D1BcTtbbQCurKvkdNdMGJBcmgZHB",
  "key4": "5d5vVKeJAzvYTjbUsiWK25duebXaBRbYoWqVq68EMDJXMytPLm2RjDxzXTf1vwUGyT4nuy3nX8eczMQbqR3EBxBe",
  "key5": "568UdYwwwA3ixndmaiSqhxdSrHT8DQJbVJCHxgjBLWEv3YSxkZnF3wQQJSLxtmYSZaCdWLUfd1R1RvKKhMnTYdnk",
  "key6": "65wjz8YKd2kjnhUXTQxtc4dyb8n5WTphfKMSAwiFtPeCDmfRy7SdZeZ7kyZ7R9QvdpyfC9gSkcqMxsVUErnSzonX",
  "key7": "2Xa5AYJBLN99xHbe6ou6jTBWsyFoUZYEU2ow4jqWpow9gkmpE9pGrnLG8nnSKYUf5mhq5gwgGvC7HZrgRq9NCqeJ",
  "key8": "7rZ67dofdKSvndm7gc4cmsg88RMEAoXNDyrBqZZh717DDkzxQYcrXDyDS26cD71Cs9TvQrxaLztSx9VFm8bPu8u",
  "key9": "4VLpuTZsMr1aMoThLpSjkAQ6M5zTPCw3dt9jfTWXwTYxwojGS69xu5MTBuijQ6AX4YDXmRPCJSWd5nd2JRwBFhzJ",
  "key10": "VMi3agoA3Mp4SAnkZJiHcqa34hL8EH44BhuXuRYdKvaMgtzCzqEjDA7kQthTjDCh4favQzTyTCNXf374NWR5H8a",
  "key11": "3KXVeEGScLg5tNsKtNLo67rjzD9YQ9mhcXvRwfrtvorhU5gADEBiUXMRbNjg9ywvZY1mZgJM5XtBabFmTDWbhUKS",
  "key12": "4bg26Bseqgvuz9gLUCHSHDPyzEzDxsUxFLPvAA3Whf3vE1u2d9xdb63cb3r9DXA14X1xU3hHYjBctTY89GpZu81e",
  "key13": "3hSrYhcdgbashuDKStfEsfLgwRfFE3SfBGx14GNfaK9RGCeVx7cUoY6spyvn8zUd5eihYDQqTKBN4id2LQTADikG",
  "key14": "TttxSeyecoL9EC6pgcD8MKfM8yYTxeWg5HaW7EKB5QxmZLUbtcWJx7baxXqu2jtgmSfHCdb2V4L1FU8v8horyzF",
  "key15": "3df2S5rsvBA3LR5oQdJxnuRJthpisqpN9iFM4Ef4qZqdKZ9RNnvjapw5PZTXDuAPUKXQdXTE54tPBNhBRBdvtWd5",
  "key16": "5UfzJ3GKfbQ1JNpMEMQDocyK7YRhjrk38PRuXmRNTRwYJiyf4voo6vWhwUSRGQwcwygEcRATGBEfDoWjCeaDhc1D",
  "key17": "nQ5HELYKBT872cYtrFnAkDA13Nmz31roKxanaAdKpcizVaN4SZAKcyp7TcNVp245QUAxsHBUzDDoUHqsmn7Be1L",
  "key18": "2njFQzjtaj3fZ4pr4zeVyqqR9WqMzKLPyLTFhk4AyR5tcxdmEDaqiPSZE7K66oj8WK14w6zwSkqPXSHmhNrVyQG9",
  "key19": "4jKuR4xUwd4dJGUdvWmw4BRrYW25WT9A9L8mrwiyzPtfWaxyaCw8SR8gRahv85izGTkpsxSQkwnCDALaN2ZccuCt",
  "key20": "2t6oqvgJw3Jm5TNVr95BbW7V9wLVnsNQxhhZ52aqT3oEJ8uvQcNMR9wVTNssY3yeCh89WQUaD8gJD1DiLvbCa8QA",
  "key21": "ZaLHMihH5uy3AC3B5o8QkwXjAqf4zGALxuBuEyBKZvaGN1PUq1uQpPFF5rWe5uajd6n7YsX8RVsCjyyN8TG6jvi",
  "key22": "3W8qViAR7BMJifHvVrYXLt9Y8cs8852S4U15NM1PKqdcX3mcdbSqjnhjajpmhdedqCgoSSL7VwHvZZfdLnBR3zcr",
  "key23": "61inSQ1GanqXg7Rewb79BdKPkAiRqCADVYDah7fL4vHSMjA9avq2re7wH9x1cX2cArUS9ne11tL6apRshk7Usmkc",
  "key24": "5hhk4nYYTeLJxR5Qb9Yx2X76nGd11cRnJwF9PbgP5jVC6YPnBhyScVUXYDh2m1tvrxQ3VuFnsgty21brtL2wNsKh",
  "key25": "a1ytCgaHve1PdXWwfHWNgQivdzyJbkkiAJMnJ8TXXnn7MSMX2XqYMrVjAGwMS9vnnS1oViMeBTSZKKvFuP5SQMQ",
  "key26": "5AgVKpXr3iGrkV756JEL4QJizRQ2gZv3ePoAVQkx9BGmZxBG8WA9QY8EtxCHNC2Z2UPsqedsjaGcgFpJrEMoQUPA",
  "key27": "xcBhJBCwNT1DwLBHBHPDbQLCz7bbypM8UrqHRveYuEyFuxEMdVeAkZaRV6Tx1kGBvqgRinFbcJTnoRsrGErdrRD",
  "key28": "3t3mtU2vAUsJRqCJQUKp3oShmjV93ZnVZvjkoYknd9BYdoQtGKrKeDVTAdUHbCcDUgMh2AAPpxYGcwFgMSrHT4wm",
  "key29": "4V1bYhozduuPZpZbtMqQAzN3LaNir5LHKcJNggMDW5yQa8zPhvYSrfcTfJjVbj62J73UhBXvW8TnLP9C6ckFStpw",
  "key30": "S68sTrUbhTEUbuDo2TiGD8CrfZaoYE9GzwcjMmohzDpY5cTqKYtRyVNrFX1iSApq4VqddZFqarxLS3QJz7mTtLA",
  "key31": "44DCRqNYrDassbACURmfjdkAjuE8P29BhKh7tG1g8GDZd2Dxv5e5yMCE2VGTgDLMmTVRHCrTf81ntkgHaTJU6kXH",
  "key32": "36g4taYEP48jRtfa9oUoeVsDvR2s6tG4nic5yTYddy15naDHgzreLqcGH3b9wwzSb8L6HZsxxr6RGYmV3NWkVHWn",
  "key33": "2bSNarDmNqXCk4uYpLeSwtnQhzrJ68bXgAqjhMdLNGdo5FaJzEc49FjUKYJtvthD3hBmPJ3UJgAyKSzKHNKfcCfw",
  "key34": "66tevFDL47ofUZogcSwJLupYsRbEmdfvXcVjGDRa4TJtV6p8P9Ae4RQ6dnrLiGHu9A5CjGgMCJk3iZNVctbaQRCQ",
  "key35": "UQHgjUCWe14uTt9BqgVtzPfk6kUejBx17yEJXp2J6AiD7AGvUXrt8cWHxqQaZqejo35zPYnxuCbhTuP5CNoRXMH",
  "key36": "47UVQ2NkpDTAzyexWF3FPedaL6gRwGkUPL77SEDHXfdou1fKw18ANLgedrjrMLMbQ4xLWsRQH6JFWhiPsxHXcqc6",
  "key37": "3FGYe7a4JwhFycecJPLi2Gae8QzHrJZrmxG6PGDshu5VHihUwzYis9gjQ6G9dpQn2eqgcw5K8Kdg7JUGFigXQ1He",
  "key38": "2tMKroXopynyRZAYGr15u7sD3KV1ZsjGgiWSxbuqQsgK2YDtCDXoVP5Vx9DFwANqNphWxxsq2R6GbHzA89YWD5sG",
  "key39": "8sYcbwnRPXTpKGpnhLn8q6eFAQBf4CVJV5KWXvgsAVi3QZpU5At7ptR4cGf3KxJYY1rupRUYDbHycYGi7pWKLst",
  "key40": "4pjQSQoWHRMDXechk1E9rkgnTdDTU6pzXx3K6sbu9N9YwwzsHno6odZQgzvuCg29MjGH8NT423ZpEDU2b4BwjWNo",
  "key41": "3YVu9R3bpu6gnZkgjD3NoqKC2xacpyRTkumEaRGZi5wXLR4eqzDTLGz7W6Tv3ikftrvF22txhV8ATLxbWeqVKr1U",
  "key42": "58vEMqNkanxWv5zAPJYrTjMjJ4GZ5TP8ghJjfPEVUaw3YXJmexAexToxwQeHKjMU5pgFcUkifT9yenvWNeiciwTu",
  "key43": "FNZTB7wpMSxTgwvb2JTt4SnHtZhfDQMm22XkEnizowRmsCRKaSFzUCYReK8Xsq2exKUUTMjKL57dXbVhJ2d7mVo",
  "key44": "2QwM547gFkYctLB1zEjREY9ShKiotkUhehmRuJYuXEF97yEyR9w2oL54qUjrNErspWBoz8NgtmDSwYSHNoSVFwsz",
  "key45": "4C8teoSJLa1NbHAXuJsGiphRmWS5NT32miisMx8QDEDnMvXot9BGgCdapPB54F6EK2yrmbwruPwLGE9s9mvspkMw",
  "key46": "5atFrFVe3HSef9c1ZshHn6Nxm39XiP5QP94fYZdq56uyQTZEMamHvqn9LRwWsiFHV5h9X9LYRF7Re9C4mDKdCsGB",
  "key47": "evhNvouisCnXLBWVB9VvjjsDufSWHkgHVvL4HQw1NaCnNrmQ8Z56oogpqiDxoGdrN5kvzG7MfrFBNVjnWwg9v5E",
  "key48": "c6ciBXxPG8QSvPzRJaRWL29VpptTWapmSNtHpyhw9jsRmKGvZHVe6aTxjEdpyvxDaQBSyKDUZx16es5RF599EmJ"
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
