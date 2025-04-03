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
    "tQJvQasx7FSNa1tvoiCGRPJDqiN7tD2iRhjpmfrQkkNsnrGZje12HDBde6r8MiS4bPCcaiHrfPPCEKugTGPS2Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1zdECSM2oHG7nCSPtB21km8u8Jvow2r1CnZixKRwUdkoPc9DSy1bk3v3G8QsCQLbz8tFC4AEn7VmiALujGwp7V",
  "key1": "584pF4M3rTQ3sWdjPbLkjqBbcJ7vcCys1HhKyBcUhZSZZQCGizLVdor3bonNnPhroJ8uXDVt9obr5vT7rjPCw9KG",
  "key2": "5yzEH6bYrE5nRZg8uZ72WcMoGsaK9E13A87d1rmssUWk9NsRBqeptk3Cs3tX697o1jEfV8jRHtW8fn25eGNSCFYF",
  "key3": "J1zNa2NQhnfBGwmC62D6dw7viYwT3AgfSL1Vmw4VSwN5yPSsthdiHTwgAv23Lw7JaTSL9sbcmquJ9qzXG5SVVE1",
  "key4": "2ei48QuoohraGJkAgnv4RgKXBEBCJBVMBHZb8s3MS4nGira4mYPWkNcrW1maDTzP2MpEGyVZMzJshQaQRUuiQG5i",
  "key5": "3A86JnY7tSBPtKS9dDYBeQef5TQRzXG7penDeMxkwMQdFKK9CMeYEohAfpeEo9MjnyQBEXU1cyLCLoAbhpFsBG3o",
  "key6": "5urKHhqaVHZUSnodmJUABSXs2ejc5h4AMdj5VArRePfbDLbL9zJxRfTDFuKjpJLdaYom61vqUdMdhhRoZQr6Mugc",
  "key7": "2gRQs4y2LCJmsHBqt6CohfnCbH8yt3oc8xHTqVdQR91wr2PJkiiFHRfh1bPyzznDTtCXwvps7gQiPHgxApkxcb9h",
  "key8": "3MiRNR6snUGbWztkz1W38iAhF6jYmBfCWjCSEkFMwcLCTk9m9ToedyD8V6ekVjdyzX7Q5zZDDMx2asmwsvV7D4r8",
  "key9": "SM2TNkXEGaHhp52GnFvsME8cCGgHdAfG6Ec8PTHLVzEVBMyj3V7wKjFkupC92b8NjPLtEPFzQ1vRpbREMzwaT4Z",
  "key10": "2kmFBa8zPnkrLBGRQsR7ZLDHk8RbQtA3wAA1Wboe225vKj1m9qkpeigeDeTsqVfYHKFyYqZrHifrwFDctKqWNf7F",
  "key11": "ppPEy7k4vuNFt6GipzNFgHwbMwvhas18e44VBiBJA7QsDALCULDDjNYDJkfi8skEz7PZm4CtBnwr4ApB1xbvMDa",
  "key12": "2MJxDRJdnFMBRRZDQfRr2uM3F8uhBr9DJAnf5pRZ7EPiXnhu67Z4yj38fE73Nk9cJ3hX9Fup3rrj9fuQKs2KmABQ",
  "key13": "37z2Fz5oQPWh3mLwwTchqivFkEsc3H4qN7bgoBsHD7ziiY4TVuvo192h1BRvdvDbYUkNzAk8d4i7gujXCPyVVoif",
  "key14": "2anDLhErScvwT8GjZz9CCL8wDSRCrVJLqiJD95fFgCRhJPd5i7BdM348rrRvuKhHfBZTcM1EKExjGchtZbekUp3T",
  "key15": "2xkMHTnGw3Vv4zpA1HCUV9yHex17MGi16QQLngnYHpXuHGbqGDmXCReopEZ6LjGEmM92WvXw7xtSr2ST5oWUkQzY",
  "key16": "3Y8QvTVM23PZUikLzUEDAviwzZE2ufrKC5MwgQGfjinM7P8SocA2r3Cw8Qnm3hrNXaXE9kkMKM7W5J4yEsB2iVtr",
  "key17": "2cktpv3MDX3jSs5WPNfggB8kgVMPL3dhaSbw5dePBCiqoAKQ8LN1SdfqdF5sSvhWNgkfetFGmNp567yDwdgtJ6pR",
  "key18": "4FSSAcnA6kniCzxZCnpV1BrNkneF9JUr9uDSJ2vF7DGPAJcoETwXV5kXjJRuhM6YTKrAZu5ru2jG8n4uGWXWbYp8",
  "key19": "4TBmW5pKSztkPWiH2SiV5Wgu66MMDcWiggRDutv2d7Cpptt4F1T7aud6Yt5y6kbqVRR2VFWS9KCMbsDdzMPtg4rM",
  "key20": "3B8YkGjCdzox6i4Fx9cQMa5D2knQ6Cjob2hEswTWsERL54MmwyBCSaBczcuVrQnbXvwVLPbuFKFwe1T89Z5nZRJM",
  "key21": "4LEHcLWkjHP6tkqCRdcU8u7HJNs3RtCPXckFgabGFzRmnG5YtCmU6a6zxcV17emycQzvya5JP2ZVVn6nhaudsVeP",
  "key22": "jN8wfFCkfcS2cRmPV95QM1zpfyic4gbJzqkzNmrtibGCoDvugQE2C82cdxvHUZcPV59YainFwgMyCAX9TmcA9GB",
  "key23": "2XtRckTG8LWLCfer1zbMWA4pyiMKGZkbqAXA6qtnPkEn6jnTox9sCNmfsmc2gc5sjpUtqHhTP4RxohpbLsSuiqHG",
  "key24": "3YrU8e2VsPjmWvu7dnvXGPuR16gz4TgUW6hMEqNkho5DFn9EKZEEa3RvqRrVg7fCutZLmfPa7T2ehGxNu9Qoaki6",
  "key25": "5rdb6TXqkU3GwaDkcGA64hAviDc3yghjKDUjEX2PJgkKCkCicr76zoAKiNz6vUGNppAkg7Wf7Tj7SLvEKycKcqgs",
  "key26": "5bGww6S59WkACnA4xzBQfqbGYGCmvTnnGwyeaFgH7RL7JF1ZM4bx2dxdvEG6QscihkdzJpXrtz6skXCU4wHLJMAy",
  "key27": "5pBAhQwcfoJQpLefSsFofusHJw51TbkC2nADCsWoqPHacvz7MQUpyx4cALzPSUudg2qsQbGJFcReXgeMqnunbGgG",
  "key28": "VPvfZh918tXD68GJJpK12aGgjMuCee18oUznH2K2MHKZQB3LKeou292u6ZnnHUNGTgs3SQmb2qr49BV8zwRMrUQ",
  "key29": "2VgVwT12SMWnBReavBjBRrJ3rcdMUL9HGv1R75Yk2bq1W7nPw9sU847PC6ySBHQzECdo6TfHbvCw39yLPbLxUPdx",
  "key30": "5q5KV4zBssm9MuDxcr9u1wqtKeBNFMNFYXajnzDNUXNkghLq7RHPxg5E1StnE5VhYdkLbwMPoUtF1PSjwWHNAgHo",
  "key31": "5xTVLjDgWyspCt9CdpZ8MWZoqU5hrkrE2xCD5i5rYqCyq7G8rGtQsBhgUvvu9kF4XxNfLNcwCYiqcjZsfXAKL4FF",
  "key32": "5kaftN4jk54y4HAc5B6Uy6Bg6ikinFDGinLkMMgq1dPQzQrq9Vy7xXXoKHVAL393W9nMqW3BdQgk92LRVAaUz8ru",
  "key33": "4nyDv5vkV7sZwYEhyiompyJis53GHVp4eMV24rMcuJoTDbZrPEoigpgUou3ACGiwKarqdD8nDPJuu26B6hqwpzxH",
  "key34": "4D4GfkH98Y3GXbj4EcHigdgXZ6bPLzZTnXhsuTU9JkDmeDukZtZKHFbbFtfx8r2pAc2rWVKKt796wn1VtXCVu4Cr",
  "key35": "4q87fnpx4dp6ZBXXTZQd3rSBhDdZtt2FPhLLaKZtcxU5LEjYF5t5Htt1pG8ngGb1xbXSbgRrG6D4vRxtgE41eZTT",
  "key36": "36wXzZFFD77kBqk5NNGi9N9aVCBkGXMLnH2uTk1Tz4SLsh947z21A2WoGqzCucU9NPfxJgfzgpmed6Z1o3mHHiuF",
  "key37": "SYXWXZJyWF6dTArtDNrWtAE1NBjtJrcMJ5H2zAsweFzYST7UQSJgxKxbnYja82xQAF4u5znrz4iNJ6u1fFRNGsT",
  "key38": "EUscAYCRRyweFqGNVUyNYjAi4n1qKwhGwkeXbZvgv2tpFuSJd8QrRcLrYziBTPoGLicp624xLi2yHCh9hA48LLp",
  "key39": "29hGY7aq3ZuzvA315yLKgz3fqqT5PvQyyXQe1iBHRUKUAbUr7ARAVwbEjybXHFfD8XTLcvoEn54u5HordcHAznPN",
  "key40": "5UzoP5zfGLZEH4d1kJbQPLEd2oYthQeAQuxtd8SNBNoDiHMxR28RRv2QBXmoWW1tuEZHZRrdzMYNeo6n4FgDaGAG"
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
