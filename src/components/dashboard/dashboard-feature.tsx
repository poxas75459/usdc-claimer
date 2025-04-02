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
    "XnMxGhRpEueovsBGS5eb7GSxqHgHmfo2Ei1Xh4QqDVManAQT6E7A36FBzteBmzCrBazXzpcXU6JsdN32Mfd2QaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFCNPaVS6JABNKPdNYpy5cybbDz5h3sQQz3nAZqSKDN62CAxmwrxCPtFFxG8hWxfCyHZkUb7rYdyXtbJwupMrEY",
  "key1": "39oET3ATPNzMaJCzGU32ZmvDTqRgQumN6cvM9863aRLY4uf1q7gXF8zn56DG5DJwjrNQdaUDTPfpPHXhmSq7nwry",
  "key2": "5RoqFEp3enzsTUZbD34gvpJbtb9c5vLPLHvhLVcbv6gKPdeyAkJGXVTugNe1bU5vXVe8CCjEW6GC5GqPFzJmV3qf",
  "key3": "4yrKCcmKqQ7Kn5ifgPAjTGo6EGLKke4BKB59XfhWHK3iuKCmGyt2HRgdCwJyEAoy3yhLqffnRrEMR5CgWgjQGr84",
  "key4": "5x8Kb4nXsGaQBgmAAKmsEAg5bw5wYMXTw1sLrv8t39jr9pwJs84avvTpHDaVi43ar6SzEozk6bpvx3LNBji3Ei7P",
  "key5": "4SYPUUcRhCvcERRKhFXF26428E5Pjem1VvE13ArM16PeiQJYqmjQesCMKb5Sx68V9taqbtwSQDmhcmgGWkxmfXSh",
  "key6": "3Wia4Sme9gFEcbFdeaWHxRaa2PZ8WQEWaZuCXv8w1x41TH9XysGhiyvXZ1fwi5Sj5FFe1JZw2t8ExiX7AsMcwFb5",
  "key7": "YNBi27grVZcGwims12JEkapxMV2euw8utPYBWiyNSrxCV7q3Bfw5L7e83BiWhL1JvjqEQppazAPSMaadAo3KB5a",
  "key8": "5TvQSafQMHoRHuRfeZuucwc5V1qvkkTFbLMQT5bh4Wj9gUqWdwxzV7VojHgWjADdi7ibdGARE1jEZwwjTNt8FuQZ",
  "key9": "35x95DekVYpFCFtdFUYtGDfxbJxfVvxxCjXKSd5uRov1fAmPW1dLpYhq6W5GCgyCnWPCxh49DJnKUkdeZvJUopcc",
  "key10": "4ETHPG82FS3ALiGdaiViAxzt4WSZW9FVCrbitKh6gqmZuD7tfAgSLtr8nq4RBGQJdpgX7k6PLMgqDrQyVKptNqeG",
  "key11": "5Nsbvb2WxSXyV9ixwTNjpuMGpvdKFGYMbQQvM82VW9U32MVYde2SgJG6Zf1krY3JQVojh1sHJEMAZ8Qr3vhkgoUk",
  "key12": "XT5Z97eerXiCM7BGadAaaoSENnZXav6vFK8LRoHaL39yVRW8vHCC6DZbFE8MjvZVUbUdjJqH8xjsf2rHSZT7SKc",
  "key13": "5YsifKcE1Ja9hdpbrKTAZDDtxNxDFRPusKUW6wQ858uKRcdd7VHmY8JvVqPPwH4AWtg3CWBioUmJPPtGfoLCJKab",
  "key14": "61bpj1BHRUnwkxAoP5bKNXBSEVFNZQvyXdEbRc6UsGmcJ8RTTVrzELi82awU5Ze2bkcc9WVnnqyX9ugxNivJNtRD",
  "key15": "4gofqft4QnvjuVfNLWjZbYeTLvTVmQM9G7XQyqPgkMJ1bX2dUMXx3CZgWcBfuh3oDJAJt6FgpKoiRnzNTqLPeCTS",
  "key16": "3KuqdfJ44msnd2133J6AQpsJGXXBNU5ciK3sxvJSULRhQsnACexPoxzLDPGYHW9Ck5LTapiwTdDaSD4bt3WUTkUb",
  "key17": "4BiR7cmPGcpHk5HfYh18kQmx42h1bqcR8oxghZA5SGKumkr58F4H6ey1McyfV67nHbKZrZUqXL8PC9yTstQxQs1p",
  "key18": "3WY63Xi1Uka7gxVvfxFD1QDsimqSkwzAr3U1QM8abXSFFFWSRcnSqeDwaGwerUjtZgBhr2TLkF6kxghhkC9YGmDw",
  "key19": "5Aw2fUaYijawmJNWykieMWPBYzv5C9HfxghYdPC32rnMDy3AHwsAnpDUAJxjLcgRrEmPjcxcQR2h1Syb53n37etL",
  "key20": "37RUZ3jTiL3VUycm1iiKyjyh7isKj3ytkZ7aeoNumvsuLKugRHAbr9iqQERgLU6tP276MupWJEpTRMS82PxTq81e",
  "key21": "2kt64XdrmMNnWiEXgiptFFhuJjekcopAKNeRivy7bq9XBQkHUVArNregW16tkqaGt7MUYtZqbUHCoWGqQMXPVSUK",
  "key22": "5gJvHw7uUo1onSQzYggkeFdMCzpx5VG3aPzyb68ffE9WuUW6QAL7j4DH4mQAMKjGX7fUvDWxhnPnTzQrwfALWAXG",
  "key23": "2rFQX5WWeWZzXhQcbH7xukwKRGPuf1MRWdWhvpLR3TbtenecKvZorAEPpSV3KCZ9BxW3tBjnnVPmVr2HyZ6Esv6p",
  "key24": "5fXBDNc3vgZyZixpJyxvhk4CtXqmXN79w9BatntzDw8fo89eX3Xu1gb9fzHAQuZjq3fmZJfTCXmtyPAzAMz8VCkk",
  "key25": "2DzPBstNbgMd2pdXWCdFKPeYFyC5NyRXAbUxkRKAe9JDPmVPpJ3RG9dghZDXef2HaXxuFRitVR2KYbZvgKHzL84s",
  "key26": "5y8XVMFHocxcwaSMwYHR7uuk4qUbXEpRVdT51CmSG5dYgJdGD3bTQye5KwGLUmucdnsT22aPryftCWTVx78xRai7",
  "key27": "5QwFYtNbec85W24birePHZGy4eGQ1gjqUrYfhTTEVtH6VT8kNNVgSKeonSsEERfZMjq6dykJHsRHYMWrSjQeac4S",
  "key28": "28Qhq2gWQU7ToyuJG9LJfr95dT4jVyDuDxTFBAJDyouVvgAxvwTjhVp5vmTg7KBUZambGhoJ96dfn4h8b8AnCfb2",
  "key29": "m3twc1ioxuwH6gj3HJG95risuryLu6GE7HGDHu1gPXjYL3FfxWXx69sqfbLDrwWuRJ3SPi6CmrsLoSRaptyRize",
  "key30": "3wYsF4caQwmnjorLMthfXVGryuVLYvwKXyCJbYbjvfZ3eTMvue4ZHXjrTbnuEycdkcyTUo7EaY3bie7tK2zFqaAX",
  "key31": "2XywUsSGYakP9XKtAJbhu7qVZK5W3cou8NJ1QKWR4U5TKNy3deoSF5XeidSVByKu5qqvmtBMdss9quxdoXGA4fC9"
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
