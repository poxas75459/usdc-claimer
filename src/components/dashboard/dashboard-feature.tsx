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
    "3FgqoRChmMXufTNXaKig4tGBzCxhZype18cn4ickmreho7o5Hg6YRkoCkiXDnc5dUw5auRA7cMaFwHQP7Z2aTPmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DftkFRBjb2RGuwzaVsYNMei3e2j2PN9YYxcjB2g19nKkki38sxjCGrrKDwGk4PibEvwLWzshYFzQeYrpqV13SBq",
  "key1": "5GeCXyR9QrTrLo8h1YNYh6d7wApCaZn7DQJQpckgJdqKL4zNXgMz1eN9EzanDCAxju2pzeLemrYgnKJc3FtnqyGm",
  "key2": "FpVZpC2fXRicpxat22PGCtNenjsLQSSvbTPp13xZXHinRYZkKPcSqjJ9ryEGGxVSvS7oiN4cDJigGPbuqC3Yijh",
  "key3": "3uh4Dfz7FTUyDAquT3MdTkr7Th7RNmFLAdL3BewfYJWNLVEAWwUtYmJoS4JFXnBGttdPEQsPNjWNq4KxHtXpB9W2",
  "key4": "2aM2aqVWhRB8jqTvhRhcNqzN4hvn7ZaPMu1PBvdJjsUheSqrH4GkDHpSJHPKSZ3aJYtyfWCB8YvQ5tNTFn1VEmoz",
  "key5": "5r1TQubwiBoYN5AEk19YgcZnXwwkXPkyAXrH3ycFs3vqkWVdrNPKFAHhJxrdGhe1VNL3UagPzWB5HsrjDCm9rjYw",
  "key6": "5ixAsXeQXN99iunWXdf4mJaJ3wrtWVipw2CBGqHSrHXyCsYwPrFBTKFNEoBaLSuXbj5W6B3Nc9Awf2ixweCM5MbT",
  "key7": "4JwqqnBWREAn3rVpukwgr7qSSmSYmTMKE4iQxSaEcNPz5TTxpupq43JnYpreNgstek23WZD3U4LRdS5FtJNp3ZaY",
  "key8": "LaccytjXzLiH33aESBxk5FmGwBYk2xsXBmXexerzFazApd9VPUE8Xi9KazTZqDFciJpNZ3LvQhssJ4797oip9RA",
  "key9": "2dMT3ps2Xf4LZBrcYLVb8ck7uzSMM4RS9owt1AAJ7C4XV4NQhFWMJPCdLmTZV1fHU9MRcFuiTkxbsu8gipKWH6uD",
  "key10": "4QNjiwS3wF2LetWD2wBWATHSGu6eUHavM9pS5NBwZWzEoFQosLiSUV9xSdZJ1K77XXYqHgskZRr92RCx8WQa66EN",
  "key11": "3GHY5trpGQqwaWUVs2GRXCkdZiRwZQfbbsV78Qgy9KE1KFjdKwYtvvVcZvM5BwQADkqaFf1T1HHnT9zNivawq8du",
  "key12": "5UALMCNhYWySJDnhh6gmXtPPJSorkhqVUh6PKNx4TwLAcw2s8xg8UA6kqt851cFDiXqoJyfa7NGjKF1pSiUC1Wd",
  "key13": "5dnoxbkdhQmGENzBfFqUpQnsmyJaKWFHDmyT5daQuLsKaG59M28kDPLhvgi8e7XgVX9AWFDwdfpKfimbCVC4b3oi",
  "key14": "5jEKRBMeeQP3LyoRbMjyFs4NvsDudTFvEz7La6x7WbB5EG4K4uui9TexaxcbXsqGRnbAdkw593rRUtP7n4XExXC9",
  "key15": "4B8CCWxJtjY53vFxjs2ZNVXiEHWkPs8BwBbMC9RMY4CX3zvM6LC36FXh61jDkgApEMLqp4GuAghSLyGh4dtVyBou",
  "key16": "xApdUBdKti2isXRvE3dUZTH16keXWdp1dhU9trFwJK7vef4oY4FPPWi1d95rBedQRfjCoC6bQzAnMtj7iWYyZPA",
  "key17": "47DvBUZuzCP6od4q9PWAPiC2qF7TNxaUYWiQLtJB4BiciEExLdLayq9UVwvBaGx7hxPqYWvFnLdqdYg2hJ2gbJXX",
  "key18": "TQWGa9ksjj3KAmTE2ParcXqeW8vR1QqaqD1TC6xD6ekV9LE25Mn5rhGoU4J7TamAV7fRHETPbx2dCRCWHhFfx8s",
  "key19": "5UgmBdrS4Z4E8TPybEYeF18TyZBjHKJe1GUdD5NATd95DgrbpUyaFLdwToK61ZBKrnyGKTtawaMbadUhruwCMppr",
  "key20": "4JgdjJDaNko5tz1AyW1s5pQbbCBQmYw3ZxCLSGdb4FA2GtWKcXFveboysEdzB9gR1pMmkeEg4iFXqVmypWjuG3vg",
  "key21": "3cXWbVqpm9U9dKLAmRAmQjj9j9mcBPKRNdTsGe5uq9cEQ7MbnJvWhoWjdcrimsfeKALBMBx3cc89y2H3zTwyPtMB",
  "key22": "C4gVTTxnYiKyG1uKgsD929MF5zYZHQZoCPs3Ne5j8YpKgESQkgggK3KA98hNjQkWnaQATQNeT1QBVWDAAVGsSd5",
  "key23": "5L71xGvFmixLBDLeF6XsfqNVNj2bE4BKcby1ftJwdnsFt6Yzwhy8cVyxuhCqgSC5jKZR97cuN7yXwfSRnhdzQvne",
  "key24": "4yDG4wHxXnQ5eNFeEo73SncEDuJzkcDmnP6C5DThCFGhBFfdvg9fkAkc4EQETC1zgepsuGjh1snnng9GA3GdXJrm",
  "key25": "WogR62q1u5ABmk27ba27tDdUF8ZyB8bzbpN9CbcLyc3w9tP7EdAVYMqJB3T7XtEQ7x2zS1SiXWTchRbU8PuMyv4",
  "key26": "2duM35UWReUTSWnjtXFU3mmuiYNDGk5HhuHZKphzTcMWfs1JgFmWHKR1Hjo17wZTkJz3n1zhtqXujCGzYj7mqaXn",
  "key27": "Pp7xAqPTSXK8ser3o2v8e27m83YfNw1LNU4x7YRQ4RGiC4ECxdgzZQV1n8GiVdRuR2rchuFNwPR2PN38SnUwvSx",
  "key28": "628PQqmPSL8qYv8mBNaqHVioRP2tQWwGNyJuDPbwk5hGdu6Ucrrqyfr75jPS41kXWzywBgESbs1YgVvaVGn4iF26",
  "key29": "DfHoNt2opB5MoZxgwNsNDZFernLNcbfsWhjBUiTEvaQgjCD3PXeJCnxb2TwbPRJwwpebb5ftsXLDQZxd8RGvk8U",
  "key30": "5UFsAfiTMP38YKRKr2FRYboEuq1e386yombLXdX6wPD6F5ow6BfbDwiwbKtqk6seBBdwoXzcCigGvruX2ox9txxs",
  "key31": "3t64HonDxpyR8nL59otSbBJ9o4cRx5nEEVb62vBTaDC7PPrxQpXQFZRZw5vr5tDcgZKEqjySmWP2a2ro2vjWNcNZ",
  "key32": "4MVrVtiAhREG7xZEDwmx4aaC8J4sXfyatiq3sAiRjYYxrMqqzBqxDdZWmxi38V9cZ6Cmc5uYB5t8iJw42TSjku3M",
  "key33": "5Bb72Ngs2rpMY1VNVwdwHiQsRBtZkVxVTUJojQQvRwrJDYMDR6imy9cSUqsvEAqrwBEeAuWWnjbQvkxWQY6eHJtf",
  "key34": "4UqEE21HxKfyz8PfYj3bxMbPxSmT3wnogKCc3DYCMPWxAua72MmXKMvGCZ4C6B36jysfnoVSoBUwzqeFz1QGXSww",
  "key35": "2dUtjmsSwy3iXjw2QXJMjhaWcxVUa96RvScnxYkxqQwZEpbMLYgDcv5KPUQoECBmfh7j5AYZPuyE2y9up6Gdtn84",
  "key36": "5Jef86kE9uvfugm6uwHWeJNT3T4r6Hb1yBZyhooJ3sxQYcBMhS1HiQ54NqBPmLigr2D8byuRx2KofGjffogw1WPE",
  "key37": "2yvF8RoPu5odUn9dQr2XKXB1bejMpyjnM7ca6Wrdiehx4GzYKergsuprvaN6Ki6CHJpKJqeveT3dfoYnXnb7q22i",
  "key38": "ybvDU3266mRqpsQYBiFYd6yqraLDYtWi6UhS73Ua4DSHUBKx9HetxeJWwSg3TfCfgnDph3ZbQ2Jib7urjdcx8iu"
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
