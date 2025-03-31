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
    "5siwJ9j3sRF4sAFg9HLffYcJauURwySKLvoyTzsKQCyGkAYJBaVBWPrDP8Adw5CkfqbVbhovDg7VihSKZ1uSjaMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cFM8iBmwWHUNijEpfxyBnk1Kxw5KAeT9799RyZpMt4Sey12KLQAZZhVQQ3kU4hEfbDiA2ENyUwoyxtyfFEfFtAN",
  "key1": "mKcHc1atJ2SfgevY9F5NcHm5xTz6DyaGwcptsZFJS568WQpVB3osEzQCmUhw7HXDDYFyQC2n1rFb1cjgdzjDSyP",
  "key2": "2tJofbcXwbRsFJWVWareU5Rgk6faYCPdMKYU6k9XD5d9VCnBN2cdKFSUJexyTq2BvRQpQprbH22aVxPxQeb7grhL",
  "key3": "2njKtS7s1unm1Q2RcGbXLfHFw2rtZTZqrK4Ekkg83FtoYBo6MyNrmrynhRyy3vLCYjLhzSkzaFsEMK8rxXCkm2N8",
  "key4": "2dTYFsQ9j8MA3TCyYmjbX1MGB4MvSV4Ka4zV7oZDMtHR3ve91zK6CF4ULtA1eZSmneYL9CsVLoQGgvT5MUTbdgC4",
  "key5": "55SAo31kXSD3UJZneapyxzJV1Fj3WTnKEf4SWHCcFCB4qFPLwzfju7nNCSGRnk58bFrwXN5hDJwPZ7A5Zb78zx5L",
  "key6": "61rEvJ8NtgTsokXXTVYs74BLBEaG1XJnL4KJ6WoRgXRwimxTzBuYPX2TVCpRF7GbJQAojFSzX7yoRrhdop95uR5w",
  "key7": "iE3VJTQKttLP2bs9FsvUwZTAfcBa4NAQDdwJTSGs28XLqGfPHwSuYKH7Zrbhp6dzyXtoZFpo4ptXUZar3VknAf4",
  "key8": "4QioZwTfwXzK9wom2HTszr8YEWyx2FMSRnL3SprxytnXEuLSD55spZSt9yzcHCLcggHug3Mr2yWohBiR7ApW1RVR",
  "key9": "3VFPKk8ssdwHNswVoyhyUHV1x8AkZ6gb1DvxGNg1xrbmjrMSeZfuN1y8tAZGoaAxqBRcQSf3TGJV6bEDt3U7oYth",
  "key10": "5GYvZV5smvUbLopcUQbK3q69geC1R9Q8itfR6QFj67cDM3nD4KzcXhS1oSkG4YXyg5nigB222JNpvjKgq18eX3gy",
  "key11": "4L3Mx2D6o4thpSPWjuwYiygQ8xr1stX5gtHdnKYNo3AtWWFQWR5nSeP6T8Eh7qV9gyuHDAxmThG9Ciu3bGNMiH6o",
  "key12": "jXEvbdP4Ub7ZW7d5b4grwNStBTEJxPbJj5CpAmzdW6qGMkdCMgb4NB3CdQDnFK1TvZhcqGWLpZUyLpTzyzk8s1e",
  "key13": "2dx2PLmstkJabCQ3YTshLmRKQhBqx7vy3WgT2HJuspDeEi4SMAFJUtxC4CZS1YMT5HvePEALGKN17mjSBe3NCSK4",
  "key14": "2f6hVVFuvbCpqMfq6WzfuM8AXP1U9YA3F5Xfh8Ze3Xnj5E4WY85aHLKibfzCPfWmEoNgYecWnoKYB36PJ8oSK9hm",
  "key15": "4fYYbRaPMPXKYA3ahoVAtMYHfu2rwaC9k6oM7zwzKuXDeLABrAoHZ4EBrvyNxRajA7e8xvjE5Eimzx52LgwzdJZD",
  "key16": "3FJR3bKd2uHPL1tar7vEE9bjv1YcXYaMCFvYKfcih1H7eeYcDV2xKZ4AfvnuVQnDrW4BPBmEn9vGxGazyuYWJEYt",
  "key17": "KgBosm15NU4sRzgkuvZA2A2fKEfeaEnsXQWFwEDwGXn2DJAzGmUm6igKrvqfVV2Kf2c9tEKSFNN1TFLxiLtXqHv",
  "key18": "4h2vjwo5h1TNP9rvzqw613vUDJHWXWDrQHM7N1hgTxbLZHgh9twdMkZ7DiEXuFfsx6bh53myGANa1KzKvtEuG6Ef",
  "key19": "LFVV6Ed9txHsByrUEePvmrxvfUcV2YKJt8vCXMUJ7NT5jP4fz7msfxST828WnwayveWxAV6rnYvdcM5g5QYbyta",
  "key20": "z2XvzyRs7ZXBLqL5BqtwMCciDhVsLfxfMYMdhLoZwYT2gooKFTUpDgGPLmMzzyccXc3FPy1yCyXoKhAXQtNoiCf",
  "key21": "2fjiLeRFAh8y4b7TK6nqr2UFPVZGutqsX3oA6UNyjvagPv6ygSuQk6WSc6hUhvQh9fsD4ZSTR2si9sEtptf7vp1B",
  "key22": "4AQKZFYughcqRxbgr92pe3ifZRCHXgkHuvBBmvCchbz6iNRVZf2UEmCx52CibU1BDNVfcqtreoh9LJtAcbF1HQMg",
  "key23": "2BFTb4bNTULwZTuWpQ8ipDCSGfgssi7fFxvFE3GHK1UnBTZBDTyFG65R7HpCAnG2DbzNhsssZuwAkrWSF2n3cEF",
  "key24": "49f1m44C3SF5omKR4Q53CVeLJefraWSr6cbN3bt8b3rWu9iTnFWRz8xNyYFBHU7r3RY4b6sRLn7bxZ9WPKiFuFrJ",
  "key25": "3RitqradjLRa2289wzoHQ3mJR1RRDYWrFFw8UiCeBXmVsYXfiX52ypF1MEK64dQrEnpnBvaQwoko8pY8sZMgW1Nv",
  "key26": "4txT9JPrVwGZA1fpKmQn2tigqSUVnY8Qur1UvE4t3fFcC7orVStu4EPAr6AryZojqUsR9zQAHVFB2jWt83X3dQrM",
  "key27": "3dtr8wgRpeYYdAkWSByeSJgKxvJpJ4q6u5ZHz6FRXxXz7cM67hMLnyndJRHpA6jTJFG3fWmYZAJ6d4FYLGJcHduN",
  "key28": "4Yw1GSpLeTUagGBDNEpfXPLYac3YYe8iyevScdVrVRZDXNjTHmsWTVnvPh8BE5fUC1zHcA6VGkUUmTy28cT4ReyG",
  "key29": "4zWgt9vQgVTjHxxvqnGxr69iRM3Qikm4vJHn85t1yF4UL2yEeda4BEbzjopsq9w5QF6sNH13oRBqFL3YyVtabDrq",
  "key30": "5jMHYsfvh7DAowhuEu5qu3iaGRhtjBySgDKPTAMbsR6bnY2gyyU7qXKR7DCZ5sopaNVdc6rimA5AEeqjSscTTE8",
  "key31": "538wrtxTWmkARv57VShT867Y6mC9GLFXUhrH5i6oFNnpgdfs3itkoYdCPaZYLaCk5PsGVYFbYFac9GoRe1eY5HS1",
  "key32": "3XD9iXEK7HbNLAtagx8A8MtAbxsi7dps1HgEsjuRQiqbpYj4HxLPiKfJLFRPyDtMj7zrH93xnWhBPPELXnwerpHg",
  "key33": "2UX3fUcMEyHUBxNG4AZF5kLPWk3eL4ZK1j88WjmTh9Noy3kQLzJEQBU6vkwLMsVeDzDdsZeV3jR2QmaBdYsTcLGW",
  "key34": "5DkXHFqhjwtP4EomCBJ9YmX4xspmTjohGC5XFReo7dQ986VnTQ9RHPcnmwFmuC3kA2i8nr1br7Sn1iYxMrDUtX4s",
  "key35": "4udeVgF7xmaBv1FZgV55YmPUiTbZxMYmQ3fgCJjAEE9DYPzMBVQmc3vfU4vhKR9YjQiUrg6F6Koup8wJijQS6zoy",
  "key36": "5BNmDXzWVyxvv4DM9zAehkVjNUhTP9XsYJuRmozjACu2FWkrbfVFHpsqL4DX3g8mf1zZHZKnEUhzRbZ5anBiFULS",
  "key37": "5DgSfwaXExzGhF5rXDk9A55GgfeLAXYUAxFNzKCwzJ6AkAXC74UvEVy6FvoiyDx5qoiH8U1PXDWx6HEMPzC3QYZt",
  "key38": "EmAo2dkaJq6EdU1vkvqYoJKPV53Rf17BqVjrPCeY9hk5w5tvyTJkfSX2HnkTANYi1wVokyNSoZzSX9xF8Q8EgvB"
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
