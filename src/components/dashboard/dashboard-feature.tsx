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
    "3XksG5KWi3ts2GfeC8J9mr71s2Kzso46uy9aRozAvFYdEGfuo6Tr35tDyLR2yTZtp5Hj2RqsyRHJNgGPM1GwWysD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKB84DbBNt83tgrxigEsYUMHDo53m9VQWjfVstZ8Unip4DBJFtLoUegiEXzhrjU9uTfevFnS2fVgKtQnKKu55Zh",
  "key1": "3MaGryifmRwG8G4LQAJ6ETcYH4emYsZWEb1jjDL523j6rRs7FTRLrD9c2PHgRLMfSW5jxQHbQrT5i2uUckUby6nh",
  "key2": "4i5bzgobC1ASfdDHvTDQjLHAxQXYiWpfd5TivK8LVqCAdN8HFPw4RiqpthXEfjqiKTnUJXVEvBfxtn9uJqmbQBDi",
  "key3": "3wj65C9AAdv9atbypum9bzbLdMEPiaCZoe6D1Mw43tm8jEKBgjv7u7j1pkPjAJfncNzH1sLfFXqcCsgtJariupwx",
  "key4": "3vfuDBHqeeAt52s1psMkJLRX48KvmnZc2UHGGFZEmToVdLuvscRdqXg9ZG2UWTpMvBnnUVR4UXxNhmQkCaNwZsbB",
  "key5": "39YDbda6uKHCCHx3xCTEGAWfG17A3fyYQaZZruAf3szVHCNc4KfzstTxn23VFLj6WwchHvNT22scCDUjxrEXue72",
  "key6": "2MNPyvMDT3EZTxUqv5KinrGC7nZ2UcSXQMaUGkoQPESpaomtX7tp4EXumrDg3y3ut69ixkqciuFkrWCoAa4Y8Gwe",
  "key7": "5AhJ9etxRZBXMWM18GyMucWs8kNZQoLp2zujvCAWt8B3GcimqZpmNes93whyXyuNGeiogMirveLS69L4ThskAe7B",
  "key8": "FQgCFoCBSa3WsukwnFJA84KrkmsVxYfC5zqRRb5Tvtz8ebqarwEEsd1bVXU8JtNBZAinxTcx8NUCKzi8Q9YcBKD",
  "key9": "64KsEQx18kivcXqCJS39NR1KtTLo4nnP9BKZUZfJWxbfMutKBwbDZboeUDARwNNkTAjzKeJUM4k6MntmkFqzZufx",
  "key10": "dCJAmBiFGtrdtygz5T2GrTusW2z3Dyp9rTcVt64CMcZCZLrHtGJbYziJBNT5xdxGwP3UbJ8MzYkJiH8rDngC17x",
  "key11": "3PnMVCcN2CrLAPbPzGUHZuwk3u6dWKi9tQAGzdAGRH2sivBWQ3jhD2bahywjY9hA5VTj4JweQ352gcqRpu67pS6E",
  "key12": "2h79sCUkHofc91VRxR258uv4DVVWZAvRbiebj6EjG2cAksHogn1a8WUPV1aosutuBPkxJaSTmcnJp67RSkUK3csE",
  "key13": "5CvdCsyanS7uueWpR3HKWvMGcCGjSU1xy9kNtwBwnXLMrXKeTBNYZRYbUgR1VXH69Pn7xmgJ2CJnBUpmJs7FPu9",
  "key14": "2wqJJXxJwCX91pA5PDdAxKtknEubmgzUPXpxCjNtgKTf4xwJh6b9TKQZRFkDC45r4MY9ctqs9vwejvgnXDUqtgFh",
  "key15": "3DaqX3cE3pW2R7BYeL199YeineG3SSErvRQHYqdQzsvoMaCJoPhwkvKzHf938iYwbU4NtrRkYvhkdgfqogxpSN1B",
  "key16": "3bVito29wGqoQhJqw9BacfgLg6xw4FDqzGwRhBAmnsqj4ig1hpBtt3Momdu2eqRyCnFgqHQCPZiPQgtHW898c6hG",
  "key17": "2Y46Wuy2a5QC5wY6WXqTMyWi3k2LK8aYkYRB394bYHU87S1S5XQCYJJ1uns1YEDuCqCXh88Vf6w8oFy2u44qWHTx",
  "key18": "2akbDPWNpvzRWR6ggPVuPWiDNEEx4hywYcTemUuqBBy7SoRpH6FUC3QPUZSPzs8FDLGjoBF8PkkmSwM5R4eVRL1q",
  "key19": "3rySTDqNSGZzmSs9Z1LqCU7zHohYrHuBnGMaPBWTutUsfYjheZcD7yPntrvQyZMGKMVrzi9HuioxqTqmz49E1VmD",
  "key20": "4k8DxN3mVcKuUzUjPwHEstC7KNffFuYHfaErFqKgyp6DE5ER3T7pQKeK94CtALmigFcAefRwokHFJ7p1iaaKk6xA",
  "key21": "2YG81XFoKGBuyziWhTgEV5M3z6qQTZCVDZWFnDUCpNj6XHi2hNbQVZYHuhHZM2QWDf4sb3o52TZhHiBb6cZLCa9x",
  "key22": "4oLMnrxn4FgFZsiJVgCELXgm7MN45s1L6kjvwVg4dXHzKky3qBLfxfTF8AiURDkT49pZzG5fDzeQc6oMi4FeAHz3",
  "key23": "4HK4rvGoaPqRb8u3z6Q55Q7ZKmVwNa38bGYdGvw9tm4s1URbNPcC6qLJhksApRQH9Ero8HuejEnkk6CCkkqcdpgQ",
  "key24": "4Zko5y7vdYdiRMejMYCec9bqsBQNrdqcShrsxRT57SVGRxySmviEHPxeZrZwoboFseBHriZaeRZxsGvgL9zhqZrK",
  "key25": "4T1UkvzCB9ddRyPkAH7LQ5hak1yNxbyYTpCKMFvDThiQmfCHQvBoKTJhcUUrAZ26tBX94Tiw6kFsYp81NVKo2YaW",
  "key26": "3oN6Z8c5mkvmSH7gsG2bUZ5NWckWhNWGUsViud183vSGuh24BA3PyFk4x5hZf55nqenC84oa13Z9eWcePHvU2fJR",
  "key27": "37a1DsH9DNwgsEeb54poYT2DMQPipbVaJzJsKboKoW7PqVHL8d8XjSDKibqhqyjf8g1baYejetwYFpQ9FjJWFmD8",
  "key28": "4H8wfyJsv6UfwB5pgefo4q31As4nkZi868h5ReEJMKcPUkSpw3PFKy4tEVSoKr137zFCrEMH3ZomXoFhm7GL4r6Y",
  "key29": "3hwjGcokctSgrp9Ae3xrV8AtX8zx1JyonEEuKu1K8LHYMn4jqnYDXJyUPvBhsbs7AWYrd6xm2rmkGd2AGphQQeJS"
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
