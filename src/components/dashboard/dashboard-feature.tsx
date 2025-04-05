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
    "4gGVRrWWisGQ7X5Un6vnJezzCGNNCQ34NRF8ELCmYTjwFCB4Ct6Vranyg3Ujp9kDLZU5Va72ipC5fttHWpy4zQSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugdRw2pw39MnHG68qPJ2MUhREb7X5DZ7n9vULDu72TmpirEdGUopAa5LqSvZ81ndrpvajnBCHXjcS2UmJmzpPxC",
  "key1": "2JELy2b91KTgZUpmLSsJDnNbLJceFJAQPYGQDS9tFtCA5GKmKLkAw56t8e6qmprYBweby3XZAPsp5LVhnc6Z7mXd",
  "key2": "5EwaZiuWaDWrYYPA4btLacqsUCYUNgwNzc6mixkgraMCRozSyLxgtiGd9j1USZiZAPEvywtjJaQixMTdhwzg4Mud",
  "key3": "2xh6R3tJPoSXFyvrD7STBK6pNcgxX26NU8L4PDMUNdJpVPeXyzjVGw8hZJDbP299AFEeX9ba3vbZRkZUWrzPogG",
  "key4": "3vwKehsSHkE9W865UdnkyMh4q5NdWSmpUg3KqTmAA4UrzurErVP8pCYZTaEBu9zFb7gbXVTbgqbefmbL2uY8j5rJ",
  "key5": "5BPoWxWhsYxFTdi2HP2R2MZsmaAj1DMGbj2AhYgqZnH4xXMjNKB8J2HEknXU31wf8NiSjxZ9H1w9J5fEUVHXWR6",
  "key6": "y1dFvb2aHWFEpHPcgoWiaRjsGcdJm48HnwuAmhhrPT7tMCJYsBufeQmdCammy8mw2HcC728M8bgvvinmW1cK24R",
  "key7": "3gZTiNwPTgHPJReD1swPH9Zmx344Do6BgGfCwJxUpRR2VYuYiGzXCT1uRUmXXjGtE3dYvEWxuTGAiRFsrr44DE5z",
  "key8": "i2Ndtm9tSd4beeJf8axHpssjwSiUmuJUQLpZEV1jAaLy215MAMyafpZNJHg2snSWHWvCikgyodze5uBfQaEAMNJ",
  "key9": "3PfpTWcCpW88LLNhJwEgnqYor3YL4enmjxjojnuB5oZ7uy3GQhkHdnLGskotY9ZkUum5CRqE9sNmbX9ipwQVCLu3",
  "key10": "25GsVzcsWiDUJf2JBNZheeaJpYT6qZSvHHUbZR3xfeveKtXMgtVyEg2A3w9Gf1hYrsR3raHWQytJUW8icJjwTdQM",
  "key11": "5VYxTFdFpDHMjwmhMjwAajLLSN9REaByKwrJwzaYULHwz6iDcGuKsdhEkkageddPguzzeb4cfYN8DP1NRy43RtmC",
  "key12": "61A66MMFirpyu6a4in5zMkZSwBUcBApTaRnQX4cDh2ckbTiR4qYrSZ3CsiF4MuyBQy6oPx2vFBKggL57Da66hmXs",
  "key13": "4gWS3gx4XkWqP1mF8kesqF1FKziTLjughxEc5W2LbVssLqQ8bLFBfs1f3i5W3GFL1b7qxwGg7n1NuQsPD3zVupZG",
  "key14": "2PqV1efEaHGAYwutZTnmm2qAGcKVB3quNuzgahkraTQUZKL65TqemNSSzUhNFwZjx69pB1VJyL3VR4nNS1S8Zfbu",
  "key15": "3Sh11cqqmnrsgf6txhX2CmTFmaRdFFfz8yhFjt3YTJRh1Uz8tdQbTfQ8upN6z9SiZrboDWmdJNiMuWDoB4qC6j6r",
  "key16": "coHDR6Q7s1W9ynvWWhEHK1ojo7RbNUizw5QJzLx7g6w1h9Gsxfvhugo13ntqeZKjnBx7GQwZQq9tw19MdiTZgm6",
  "key17": "RikwAqk68KCa1XpH1N7yTnC4oHDiJ5FTcGVZqprs6Amab6GaMFkHHJRESMSY4o61AUSYHKDrfrYZMoYH8bXVWvM",
  "key18": "3FVA23aFf4kup7SSwzP5HdHvSNB2MUnsKqynotu8Nn1Zx1EWZDemDg9WnmmnwVF6mLvUuu2c52ZXrAVrTWj5A9zH",
  "key19": "5pU17fRyK6ciwfWmGGQi1B6oqGCk4xt7a8ydBugYAdnFCEpthk3eo8J3xq8cpvhYsGQKSfBm2KQKpeT1wvTGjopb",
  "key20": "n5akPxEcgWV18bnXv2f4QwL73NucevmQnKsAQzLsZ2DURqf418WVSojWVbx7N3zMbNqJxAUh6fcBmHob19jrXoJ",
  "key21": "5ErXedk5WTztAkWgfZcqqQRQxd49wWazQiBHQdpdWUvBj5KkWHTkrEfvQNHN5gfwmPZhp3EGUBZw7DMuM2sesfCy",
  "key22": "5epHRiDaNo7fMgfCntWQx2yv4Gn85zpkp8yPXBh21hjqB4qN1Ky3JtkLBNRBBYEAec9tCq9nKmznUPeWWtqmVTds",
  "key23": "3xzSbgPx1AS1u76zdJP8Y8SmrZXeyycQvE3s7vtHP544vXYYSNniQ8PFpVVMjLuXcQDAmrGe5NYf9dNFwNJVbnBG",
  "key24": "61UsfMzx6re6pGVxyUgnbdin16Dm8B134P7BVAQjkApymwjFSQJG1g4JuNPYhhUy67RZ4T3i989YVTphTAhkNcri",
  "key25": "U4KnrFxz6NBy8oYKUNYrVwKLTmFjzwK621pN8LvULaE6XQ1iY1Ts6WMkr3JyUJ7mYy5LLkAymCpckRShFk557hT",
  "key26": "g9ChwbVeNcSQa2aaes1ZHTPXWGYqSBH4rUZackiNJ6zE5bEg8txpacw6NaYdjQexH8fS25Z6QJV41QpUfh6cag2",
  "key27": "25ShVRM4hdvt4w1quQNbrhioVQ26yfcrwLcbEsT1geyGZ1zAGo8dKXYWerVgzbyVvax8KtUobaUBzUKRAxmuB6ES",
  "key28": "4n8nEfQpLwvRM2x1G33EpC1c3GDJDjJod3zfMcfd9FJFmyRGuwNTaBSivLPzDNFhLhCv8RM48ZDzpewcq73hJrU1",
  "key29": "5gnZvnQ8bSQkyj218FTAotHMR3zmGNGnX2HrenXQFyKpYjBuGLbUk58i9NiNNmw28PRo9WNEzLDAoHJp3WxFxAoZ",
  "key30": "2SYnoNSn5PaLnXGzgBuF92vDztcqMGbTrbEKC2W8nt8P4UQNhxRfrVvnm7FPr5gpjnavEXSuSE1YTMPkYeqG86S9"
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
