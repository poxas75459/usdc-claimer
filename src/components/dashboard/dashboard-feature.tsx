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
    "3YatfMSpP2aBgbcoGuUoBPLu12hoLg9HudJkqk7nF2pwFvyz7hTm7gtea3t674iNhT8rGaD9RbA3nek928W1yokJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVcwQzkJypmfRemXiWoQpER81mszq5BXSgxuACMZCWyP9nesmeEYZbZ7HhDkThpKt5NXskG4EzYSQzcVz62PM7r",
  "key1": "PN49wjFXmvsHntiuQmVk7ytGwMBTq5BQkpoxt93XjR345f43qih3npZTWkj1KtzofPNzLJoq77PBUfJUHgtkMka",
  "key2": "43duu6BMg9NAUDiVs5BM5dpXXs4Y5sBUkn4Mknpygvm3uHGpxG9qtjHgpECqe9sYdhfMXLV3nWJKYjs18rDv3dCF",
  "key3": "44pg95sViY1GGWxKnQ3cXkCj17m3LCJs6mtxYboznqsLgHjuZDSFgiQnxA5gfGLc3qDcRzAzCeEtrSsNjheXDeL",
  "key4": "2MASHQD2fTZzYUsXCGBzYNgMVaETaBw6BnNZjMi24E6h2pvFNsctfRnnouKCcX8muPUMSWMW7hiHNcGjBdk1L1wq",
  "key5": "5KzD8Mfyey48F5egbLvb8oytsc3Dwyz2fWwR3pzjujFCa18yebR4kaJPhtiJr6cseR3UCwq7owcHKeZjZeqYqNnC",
  "key6": "CFfzVxqnRSzCMN4s1UZi1WwqTCdp8Ec3JWfyGGBE7iEzrndEFAeBW31ApJ1eKgHVwaY7eLsDQr1R4D1NGsDjPRJ",
  "key7": "6aycgrnYpxKxCnLTzkZ8x3DLbuzL3cW1XpDooSGhmrBm8g6Yfwoc9y8g6vy3PBKmy6d2o75KCYQcHHduSVSbzGo",
  "key8": "4mxZyUHNeKtZ2R1rdUBrmrbg2ZhYQWXgfM8YBCG6LLWAxTTkFFbSB2PBXQ87LoQbwC3VzsbF6P6EiVnk1Lrm2Ct2",
  "key9": "49cgXCLYmaN4ChMmg79cjaDriuFEUSJbCSQeSp7bnKaTqn9mQhQACyv3mdB5zcwCgZ64mKheVN59LvYUystwicFf",
  "key10": "47jCfeA2XRKVqC5fVnzk5URa7AXz1ioCVFKLd3vUqXwRiQnV7EakuoBjAEJFuYNsGcn4H8P5KK157vBkSfsBi6wj",
  "key11": "3aZK1PGcwcmyXn8gaXTZwkoL2FUFgfbe7jhTATED7rv3ANGxvrXG5hdCaw4WgtyZNTdZX5SJeXP1c4znVnxYR9G6",
  "key12": "5EZhVWPFQcDwxdRebcKF8256maxvCsGsnGKWDgs8KmFYa1adJkwLVBh1Y2EosZgXKncFtppMpgkYLi1x5zTaxqJG",
  "key13": "mcxRQZdJ1wshje48bZHnCFc8E7ftveSC5xn86PZqmt4pgc55uuvjdye5ajzZGxGmo5aLZj61XrhGoQTpzM6GN8K",
  "key14": "3seWjBkqYVbdC6HNcRmgUPSZ85t17wMXmHVFLddDCUgJAiw5jDSXMgW55nCEcEZh3dBPyP3u2a5Rq6GvY97Vdc65",
  "key15": "4e2fBSqeSt88MML9AsUDmUAAwqYeU8u1tMqyDBTvbHTsryuSZuTgfjYFuprvYu1hpgFHCNBeSQJzkcmYgFK4X5ai",
  "key16": "5BvijyrQsXDNiecemPxYxwdgHegPHnAPXXDudWomUFGrkssQvDADNfCBMvRVP2kndrSRa2hkjNEPXTAdawN4SHcL",
  "key17": "3XY3BbkVjk9CqtmuBQNTVsboUAWpFEGfNLNzsPQ8mJTzRnV6d8nLRzwpRvkdvVFQNrq8fGUN6tGtixhvypNQnWcn",
  "key18": "2FffajYgQXE8DxkzVc89VWSH3cxweDgE6F9o13dbHvQyvzfSdKcZ9PncD9VUsERicUbBa298mARc6BEFVjiZPJqb",
  "key19": "39QNQ2DZcco8HamzbmjkaxQ3NKYBsrrxvhuWy34VXkTzFNViAKhBE9iGrxs9aVCGufy3wfcZhPEfYP7tRCsAbhs",
  "key20": "2Tkw2tkVbgMdprfN1rBGD1R6PSAfxXLyXSaMXSk7dQrpSDjPxTDG7jQvuLC85h8WfBa2hRSYJwz1xhV8PAwMsCep",
  "key21": "4N4yrsegYZxxc2RVrC1XuVGd31Dg3dddMxmA6RBCfCEj1o4HrQ8boWGtqGxGNsqXJYHZfD5mGgSGEUEN1T8XCkct",
  "key22": "2UqQAvCwx35pbbwZBbyJkGAaLUGS25eyEH78wuhQ2PcssMVJYvLYpo6HJLbA1JnGf5CBLnSKCNdUhczq9ngW8Ccv",
  "key23": "cHXVxBd2WfHtZS8hZwtwZw6H3KeCHoB4kzLyz2HUSBnBfQ2knirHFTXgGcXTy8vhEtxpqvUMn5zszbztJmzNQgb",
  "key24": "3WaouH2YnU4dcmgRM6CX6ubQLMQf853eEE4t29h9g8fsivNHaV863jiQ6iRHyiApdGXR6qEj619BB4XiqSuuFAFY",
  "key25": "4NvZ25Q9RaqeUJckbzKTLTCsouBaSrycWMHtax2gVLZDWjcZodWmWZv788LT8kNZ6cCWDB9XYLGQBVntr7jWeYSx",
  "key26": "6Mp8YXZCYQGXuNhStBSTRjBm8uLED5HUsmZrTLhRq7sZRNNLJD3r8eo5PiSYuGoHrxZX1Q97gxs4mvGH6eKBCMb",
  "key27": "4XoLjzr5DW6wYfFpDF82PoFARA9h7MVzjymMWDizUw8Qo18kh5YBadThi1LjmjLra2SV8inNeMcJmnPi7iYmzK95",
  "key28": "2Qcuaes4vG1514MFTLJUo3Yzn2hyapnJUEmtyC69jbEqNGkvJcqSqmVXrw9Yi1vqykjMxf5uTtLXYWXQrbs1YDjm",
  "key29": "3q4jhYTuPLAyfxfxABZ71gqPyGPc82aAvbLVrhNWykgYU4qkpoxqPF3xZa8GtZkm8EJS8fmGKJrGmK23SA6E52eT",
  "key30": "3qybBLBgffXsYD68afMy2WgnCLWLDPmNxG1KfqsxwN6t6dxANcakLo3g5UZvjXjZeLWhAb8A6eeyhX89u9HKAkmh",
  "key31": "5RdQygj8EuARucrQb5cNXYumraNbooCSgYSLtddw7Yrk88K6FmKn8SrVrJHXZmzUcLm9mMqP3Zw5jb4xyW77CpZ",
  "key32": "YSPd8XUYnTrphedfsG6jGUTATiw4jiL39F44CJHocZ6gzjhCqugiRVqjqB4sqSnB3aUBxhYqDk4qWTErrBaBbWj",
  "key33": "5brmP1PbYm4L4Yczhujphu9ErWNKYH3WGAT9JbdpjSH3iivu34g64HKbyq8YfNiEzGfLiC28LPwt73yTjxVxZ14j",
  "key34": "7bVU2nEAf22AeAkLQnwvXH2TZ9U1bEAR6hfaMzQTL1kMUKmqChPsHnA3Cgp9s6J46HLbCeT77yFsmDWKGy3dJjj",
  "key35": "b1harBseHvbG58CYUZUVjuWpSN7CHK3oHzXKfjkHEnDVP8wznWVzNMsDG431UN3rduz6YwKtjwzXYTy4QJ9y6cw",
  "key36": "5FtjQ5A7hM8gMbpio7rF2wBQFQvfE3zAzr8nHTUzVwEADnmru73efDKibUbw51uTgb2zrqKXy94LJn23rsWR48bG"
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
