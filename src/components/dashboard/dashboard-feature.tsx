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
    "4wzyeFXw7iaCxLyANTrJbvStLHEtAMAL8s4g5dbTcoBrWXqFWZSdpzWyhw3dPXRk2WinWnsD45MgHe2LaontSE1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcUHCjUqVEAWyy7zuftEoRtNcdfMGuAoUhh6b7bL1eMVhzV8sHzA9v2kqvbY8dcFyHxNCNE77K7LP3sxVzGRPXb",
  "key1": "4cbC2D6ZoCtfK2Ge5js6Tz5qNtRo4YizWaYA98CQn4rm8v3oDC4JvnGphUJBo6syr2WC9jZvs2pGWKnGQQhvrxDY",
  "key2": "31ytG4PBLs7H6VGQhaHDGf58fwPy5PgAJvPfgL8ZVH9q6ZKFYzJcMdagndEp6ai4Z5h1zUZQvVT5W2KjnaLTAg7e",
  "key3": "3kgAXJ5xSdP6iwy5vdkZsPqqMqndVT7Qu5SHPXesV769KkRqDorAemBVAYS5Mp9tECpmhz3kqJ4S5urWxZw3n8Vd",
  "key4": "4XugVpshQZGVDxyxbJ98cv66NV98hQoLYZNC2NpFFAuvQ4ShSiw3Sgm59pAr72pdSo4HmgcMK7NGBTWtugh35bEp",
  "key5": "4zTBSXVb7f7qPNRS5cEmJUSHisx5EfJ4Xn5hZ6axtGGXbodRANQTf5NUd9wty6sv8nbwybk4i1TRCXvXucbykbuK",
  "key6": "3ig9VJ6Z64qMiPCUU5Ymbs3oZjC1xo2daz4iRwh7PafLMNFifYKd1cRTJrwsDRSm9UgJPPVHyFJpmSFyVST4m9aX",
  "key7": "5Z7s2MM19JFNejRSovvBck7fG2BUQPtZrGZza7RR1WRXCWSoBy3vruevkDx7npvMag27m4TzAFtfxEqkzDwuL6kg",
  "key8": "2XuWXSKbvAieZhcXrov4hjCPVcy4C7gRjtsUvb1LuGTYyt3YAu8oQJ5deMZ37jcMZokPrtkqUN7rsnSeCEhXJBNg",
  "key9": "xBDvEKrKcTXHHHUkMEW2PUA4cosTJH5TrVBDio7wfWpgpBXAHyaAB83enM72Aw11ciLFZnheLHyoj3dcSRiC7Sx",
  "key10": "4GTP9NFchL2rPNPukFS2rvUURp5ws3s4ouW9wYJZAvk5K6JHkb4QdmB1nczhF9qMRZ3hERVzuEhfFidNqAwBqDmG",
  "key11": "5ppPqpCWvJKi5XEZ5BcyA4qHSeZPFvKuzgwwyiCxxggBSgF1gAbGvh4U3AMURRSFn1XLfSrWrtmZeAxBSRMaeXQJ",
  "key12": "4upKkV7pfAegzuA7jhVz4aeKTLtF7v5FGJkkQFVghLoG7Fxjns8rAAcvDcN9u9jwqoJxaeraKAevdKKptiTjnwAX",
  "key13": "tzLnN1scF2DMqcAJNEJyf1xYJ4okhWEFUAd8toCMQhhBw7PtUt8CcSq7LCtWZPibQdPdqCfwKMYJkLAs52XGDH3",
  "key14": "5VNnXrC9GpB1hQbTYJQNXJNCf6kkjRkNZSfz2X2jKbBzhRXL8HjnUoqkzYG5z6pgzghJrGGn4bpVfke61poRq4r3",
  "key15": "4vTpiLc5spwcMMxY9ES7WdXScBKUqnYvnBmentJey9bwCuBgmcXPCvw278ytCYq1qWhZ7BYPsbpqSYwwgFSNGygC",
  "key16": "36PwAUZWeo1r36VPfGRba391sibfWU8Nb8ZsAiG7VUPzLhKMseVqdQTttpk4qhjiWPiZKDwCzZbZ8joJxawJfFSm",
  "key17": "u7VHbJoemp3EC2WspaygK5WpbYWdMhtdxyxE42AB8GXYM84kHNwythngDRcJqs3dYUd2m7taMEW3WENZAL1gZAU",
  "key18": "gXZhpEFiu77HgcujdXN7WqQjhwJM1f3kt3D4Qfj6VvWhmU1CTSvPd2LE5Got6PCxHjz2nLZs5EbyD3hrHXFZKFa",
  "key19": "yrbzeyNhDTtHZaBRVeh2jgiU2r4GjP3eroWNADDCMG4w9fKAXYV8oMTvDjNHDj7Dn7vv6XFQPhy5Y4rGr2iD9yo",
  "key20": "3Li9Lg8Pvz2q4bnMmcDNmj43ay7DfMcQswvPyAMFjQBjyTMb1YUFSGMvTKTEU9qUgyWvU4uuV8jNfHbcLWfCjpn1",
  "key21": "4TDZ4wASf2QRuEEZNSyDueorCispGXYzBtU18ULBj6DvKDFsdWLpi2iaXgwhgfRkaJqiAVXiBVZRiYx6i1tb1LHz",
  "key22": "5uvAbSeHHHbXYNZRBGmVAT6XcXkYFuG56dJXR2xFFr9bCNKwkPwVuVPdXM1NHo9iyex8QqACrvJjHQg7DWC2sqoV",
  "key23": "54xVawaC9mNrtNukCPU7e1rkn2eUBiWn5hQfgb6LSzaXvBA6e9z47uj1Wmbk3XLSGM1NnoSQiixsk6rB2VbZJxn",
  "key24": "3WCui8A77nQZqGmvJSQWtiywWq63wojf6mhUoV3354Zf9yDPA5SRK4FcufKrk7azCg3EhC75QBLDBfFRMcbMSXq8",
  "key25": "5YvmdiBhQjqL5WeDAxJG2GLj5Motp5PeKNfmRmpbirqckgGUDexN39a7rCnion5nrgRzsUjnkGPtdX53EYSGp4ef",
  "key26": "4Erhehjr6EGM6ZgFsPccB3BDKMYzbMzdYtyBwgggxZHfLxAZ2b1mTMEUvCQxx1o8V9f6vUUbMZ839LCJEbkTHwtn",
  "key27": "4oNPsQaggFLa7o3WeuVoZGQM6Mx5aGwvZqEsCSyKn44gQqwYiDuAuzYYJp6YPy3r1thugpxC6hvpmnrjv9zxUxrC",
  "key28": "3H7C8fTPuiJCwhhg7ReZMrqr7yruc1kqKBy8xxu7aLF14ofaNrGTNhdWodKMBkAx5oHF9ExPQhxPHVzLSQh9wuxx",
  "key29": "5Wcx4BAVMRT2x34JyEYNYKtx54SJJ6XEEGACjrLdR7x8VtatixWPrXZDFNN12qUt5QQUTTQK8k3mrY7bUZumpZrm",
  "key30": "4mvQ8KxkJ2S4yxkRC7YnyPphqzZAoEugdMmcp8fyGVzqquxrwAsu67TQ5cVbCAh65CZDb1gxNYQ9Xf9DRo9QnLpS",
  "key31": "sHKVChuLwEb4JFhtjSrfoymXeDpnirQfD4FJCrCrRkT7hc4Auwdm8x2pdVW9wejZhpg21RLXnj4BpVBYQcfJx7h",
  "key32": "6Qj7vL5sCFX7f1RZbcsA8GmiYrRr7yQX7Dtm2Q5cjRQyP682dNmjaFihFmf2NaB5XY6xteg7GCfrNBAMbD9kKpQ",
  "key33": "59yDkKqTJ8Xg1Frp44uWPMMkmABMmF5dEztSawxbZt9rLo2ygHPCoArvVqQFcjrftxQzzECkHUwjxBwTPHth5bi1",
  "key34": "3oUe8AcnNvEStD5mjuyFwqjbwqVMYgkjHLqbLP9cRWhdoBytqqQnKco1q4gkAG6HhLr42QFFLN2S6vxbsy8qBfVV",
  "key35": "2rRDxCz9D2NewBCSzEjEUBEiFddamwLfEHQfPDA1r79vTqWvaDvsTpchyWhyq8DzXDamwnc9PYsMAqnw53X9MjYr",
  "key36": "4uAemhTs1KZxgmhxjdkahsjngCoaimYmLvg2h81Ho2qmPSwdEw8E19ZmSEYMekMgMSvBjbcBJre6cQjBTGF7c5Pu",
  "key37": "3kBTNi54hdrwmUEh6V13cmw4DaQyhBngZDVzA78Y7PyN3dh1w6A2ywR4AJseaVTuWtLkZ8o2GpR88f4f1mMSdjMD",
  "key38": "rnoM6Gumkp5vd88AujQroLX427PpLQz67ipcTyXse6S1asmX7SMzXSepXSAkxe6mRFFfeqCuMAHP95UXpE4x7CK",
  "key39": "5QPesF4K3SfycrHjBVypptPeSgHCjbzGEv2uQmN4W9N1uFWxP1wFpA82mDJ5cM8DWA949fszYtaQmH4C6yDkUTxd"
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
