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
    "4qtgj3abTvyucNJ9aHb6V8sWJt62bZYbV5hJv6fEYLNRKi9w9CKxKnhr3xWmU6iW2Dng9tbX4Q7Gn5VXWdzENv9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVmKaWXVRT6BZQ99QoTnvvHEk5yZHFS6h8iSpA7Ydoi2gbRGcHHYL9ZVA6hRW45zv5PuLyfkzC21e6GA6mxFhWq",
  "key1": "4AQjF8n8HApmeZXkvfTGLekswihc16w8JgBbYG9A8mgdo1KyvULhXtGuVZr3JDJbdnsF8AH6z4z4HCkG7SWzPQ84",
  "key2": "38shprc8a9EhRPMLV2TfDvjPvWdGvRF8epXsLGS3fATsyD7aRaf22zSCktC4sppHPxREG9Cdz8caZXYpr58YPS8Z",
  "key3": "3AaJD7Zaoe1tmW5AeFCtFef23gADkrUHLfFHAARwFXXgHBXZdMvLKF1yngN73u8T3bXUoEa2wRr2Rt1kqsk3K3Ye",
  "key4": "54Nh4EAKKL3a7U57qCwUg4dLzmweMmTAYtrH9vrmzAEGLqMumPKLf9WazBGqe4vUcKxVh6vjf6LEb9CbHrXjZ7Gs",
  "key5": "2hMF5s93VBEijzK1PJnn8gvquQTKuAaEyYQ4xovwfYbKnWb3W88EyumE63Li2S2skWS5MoXXhqCP7LNgGf15VKRQ",
  "key6": "3Cwrqctp77gH9UcV2hiBWsiXGvz8UuHuLWEEGKjtVDG4NMsCqYWMCDxw1LUjqguhutJY6UijXZ8ncSrBLWg9ye4b",
  "key7": "4rs3xt724Nz83Vv5zAn5GdDK6fNTmodsNrMBtmsqiVbnsbASTDosiRrGeW88gnK4T61jd6JcfDs1hTrbCyA76zeL",
  "key8": "5qsZ3CSu1Q3t9cNPuoJKG9JPPS44KDpKUvfD9SYUNkY6hYArqEvagMwoxhonP8PGKGGzfBHvDHEa7PW6bupBFvLW",
  "key9": "2rSb9KWsbVJ9Y5nTfBHYy9P4XtZMrFc5YfKQyXQazE9w4aQbATD7JPeJGZqCEzcNnXwoU2yo99yB7rfWcoSjx7Xi",
  "key10": "4UaXHYyk99pjMDYfPD3aZEXGdF4tUiwPtbYzDEW6zcX9t4DY1dUyLiDMmZc17wXAir1D2qyfxRySjgSeuA1fGQmW",
  "key11": "4UhB5oPm2XMZ242RyUGbrQrwanfJShEPKZAYnr7qvzLUuJ6Y5L5civCx6Lx2MMP4fDzATNg7utNGpDNquXYmnQCb",
  "key12": "ifVbArR2kCF3Z7dkyJmK31vxWARNrHVGpjqG7oBfMyrCCxmPnog5zgNZ8fa9WUxvU6DupKpEr7rREEgVLnDyC2W",
  "key13": "2d6oFRKPGs7jfViKkPZRrE1wJXDjLGyW1i7bjgUDZYByjoWHRqHdsRDsYP5Mua8WeJrWGqhUYj6WeZPv19cmakLy",
  "key14": "CCKjV3KaaiYzW85GD8zvF2THqe66teQ8ZrWc3FSBYbFsRq7yS6ncfcMQQJhppFPwewZNFQwN3kZwx3DVyJytYbj",
  "key15": "4cUEJ1naLUyLibdv5mcc7kVMRLqy7Pde2mpFcuYe7oBUJw5rLejJBc2kAH4N6rv3xwMFpXn5hGu9TK6y7hoCzNsG",
  "key16": "2WV66aRwqP6zSvjrAoNSrEMxFvHocPRWyfxD6utLs4muX4rKrFTfdYg7V2QFA8qP1iNj4TAgZwSKnRu4GWV1ZXuU",
  "key17": "4JCYAYiNuwiXmSJcc2tHjBCepBBkW2r6x5VXw7gze3JMrExfaNbWdxqswY7rjeMvsyBtZ7WocHU5UTBzzPmrcbyb",
  "key18": "kprfcV3u1tqeDehNpBaF2EHDzwKjeWGwxQoQnp8dAfj7xiEMHdhvMcSnQ1kinzwwACKAFxCDfmwj4Dbq1eb9nj6",
  "key19": "3ULCh2bUTcr7Z414YfCqao6NfeyqBPB2a5sGLyByVjFjctwPWCWWY9Hg7WrZgqFfYhA7DUGx6F7oRDeWTvQNaD5A",
  "key20": "f7wCYcfR85bW2CEWCCStsmvCQCxfAgjCRyUGymcz8VupCdHVyo1sNtuQ2zMU2zAswLoSa37RnJaYfYFc5FzySmC",
  "key21": "saoLCAvHqrPnbbuaw2VPAuPqQKom63X1e7CFX3mujRWvKupHf87bUtvrXeKx7wUkFgbxSW6mEDtpA7CYfcNBzbj",
  "key22": "3SmHuhN9Sf7gmyxYQFBG7rj3egVc2F2aNLdKtvAaVyLQDxmMYCQSr7Z2DwQWcdHv3aZCKQ1qwGKW6f34Vm6LtR3M",
  "key23": "3aQbVZwmyedYvqJcy45KM8VGvn2CsbDTKrMHpx4ShmcvpcxQPom5v3Ky5iMYLdD1v1wtyUNbFLYDPx2Xny5H4Vnr",
  "key24": "RtAf3vsh7gZTLUG9fqUjxFaiEGc1EhPfgoHWkuzeisatezYNg1ktdaN6Ct7j9WceYW5mJhQqZCRbKisyYA9pM1m",
  "key25": "51MEgSKcdjyafWsQdnJT8T6UUvNYbd3Ym4fBWSgGGJLp3e5Wyym4vq3hHWMmXTAH1yqDfVWcdBGfVovJr95UzdX9",
  "key26": "2wLb88FHb1oLEdqavEQqyiYKWFBHYgvG73dxMMaEZTvQrMx9yb8Br6ivxCH5b2gtqSqXMWcAfm1i5K7QcFLZCKmp",
  "key27": "5f3rbUWedKc7Tp3ApByY4jDiEs7BW4i8HVdp1diLBk4RKagHbMgkPjcxkeYUfxEgVrdx3Sbcj61RjtWWL8xWExUR",
  "key28": "66a6MeLWa1kBUSKbNWEx9oxPYk8YeQ42tvm4b32yCVG8XVLKdm7aTBYZfQYvSa1JdmzGm1ZMYftbjXfYKYSQDYe6",
  "key29": "NvLRgx8kT7qpXUanECndZh1xPovtzZEta6xCgr3mBAnWtV9S4zb7SvWSDMPmBnhrSdrycQabX3RbqgFLKhCxqbP",
  "key30": "2iPp41EQukct27BMWTyheCvGcAXZAS9LwNhZy6A3Lh7XJ4ZpWDnz589dMvbP4zVn4w2QGTSTWrR9fxN9ViPE9cFG"
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
