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
    "64DeFrmfWTzuYZEhkroJrY3Gcq1dPReSQ1oimUZk3hPbrrd5MS2GH3FK6KKKFqFx3Uvko1ErkKXxqY7PguRqrcrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J9aTLCKEEGmi5kDMQ4AkhoC3VsDvsA56N5ZgDhQLfduRjrqwgq8LSL1CdEwVNznA2KnKeEjZTRuZTgf7aeUasmR",
  "key1": "3CqBgUFfpLwFZ82kYhYdd8eJQhf4b6fPCvHedeYaEWSPz8d3HqmJP7GmqWoqNBp3MsFvM81raS9oZnX4Fe6aLPCH",
  "key2": "5NKxUc4DmgKuJWrsUkZQTZ6VHMvw4foJkbrcfd2Bs26dd3e8FsyZQ6UZCc9etJGpuVaS3mqG152PaGj6kSC1fQQk",
  "key3": "45kvbgEY2DX5LhjMK8WfTiibhJCwV696kZUmDbb1rjLVZoWNtG1kDZUCRLm2vnLNsN2Jgf4ACvCBTcXjzesUhaUS",
  "key4": "2YsPBKxjs964pmSbSqUWjH2Fdys4XmdQgLYhKk1QRcqJXYyL8Yp4noHPEqxs7N1pFX3CBFnxeDJKCP9ZMTpw1zqb",
  "key5": "39o74GMFwGLTBHbzpoisaG1FZWPR7EK2X6GMdDZDd3if2xc3CSjsECYXw719Muj2VF9jb24J8GG1GVA86vJVYKrx",
  "key6": "41UHRyD8gC95A8XnFYY7Zvkk2bRTiMSpQdTXurpcyFj74rff2UxZ6isQC5QmUKMUueZa9EDqJt7Cs1o1iJRrNzsQ",
  "key7": "4mGYhcauHCryiupoafG3wzrThwxqbSQc6DvubdzZhGu2exnY8d2CdPuUATYvssgDYEpxHzxHS7dHwSzeHMVGAB4K",
  "key8": "3s5eAmcDNocYbi6U5sJxNJ7GcaqqJVLNBbkmRA46XhFc3VZZZcGj6zRYFYHjnGcz3tfHg4UBeW1yCkcsFsHnP5YA",
  "key9": "5eHvvx5JxgJWds8yTeHpBBRuZ74k5kGvdWcgujm8VXS7qfSmmMeBz6mqeQGiQjovThACL2e8PzfXwMxZEYKJ2Lmb",
  "key10": "4RWsXS4BrhzmQKVftq4KSk66bS3fg5i5dEy9DMP29ci2qDtSNFymeeeRyzY1MxmiJhYvU9RzdvhNMfw4wzQ5axbm",
  "key11": "4n98arYtHKG3u1HXjVfC46F2QDnScdaMR3VPQwpDGC92X77r9z6GJriPrvS7uPov7fUEyGStcfVdrRq2n6BZi6Ch",
  "key12": "3DFNbVe9t2Zsn6GbTRajr6a3L57WkS7P99uXdapVhYt85dtUJUKiADBujDs671FwT2XTyQSGJhPRdgLCtr2Lnkx6",
  "key13": "2FYJWs3EDBNm8cF1WqGMM8dMpZNr18BXDKGiy9KzSAQfYYbnpgPYgghAu8BzuGzBuV5hw1cjtmhVf18qXMd5y5GR",
  "key14": "3CsmKAXamTdqxvCdvFJ1tWoJHkx9PTAiaRrGmfMC398YSNWL1QMNdZpj6nnjaUA48LB8KAm2fMmZPm5ewCb2S7Ln",
  "key15": "5VbwHhKXyEJhS93GHsDeXdYpHL8n862UyoBsM7PqhUPmZuLzQnQWcKcirFVMDPw9YVaw3Ki6wFCi1eJiwi8Wd3au",
  "key16": "4Q1K2GhWGXhcqvwTfHKfkQBfm5j9knNNG9x4cCCXYdr3ckQCoQNVifzdetngbwzw3Kjh1dBqD1FdGofhcGePiMx7",
  "key17": "5Ykoxi5X4hwqPh4d11fW6aUm5XF7VRfnn4uVoZWxEVx8yKifXFYNFrzAGcwexrm3W6S46ekcxKGavd7xcRXe8Jdg",
  "key18": "2SyrMf3eVgb6Z5oruqVpetXUxJBa1NhBAwBxKWkDZ5VBUZNRYSgpgN61FKVGpiWnHtKHuCXC6SrZpaCpXJMetAN6",
  "key19": "SW99R9hups48rHYoKhgRtzqSeCdD5LcDQ1ufrLKpgcwXwKJo4w3APNsScyYbQrx3QyT5moNHSeQ4eRw2oFvWiNv",
  "key20": "31M36KL7qswLuu3m3WHCXHWS4Twe5N5CxD8i87KpjkYxtDA5m8vG8nU78gvtY1a9jkxZ1E3T5bzL8fYGfhihsmb9",
  "key21": "5euDieTuNQRTkninrvi1Ew1TDQKWSWBibsmfQKb9GQwxUpokuZWVpx4NjZwuyQELNCPAN2zvq9W13pUSq3R9JBa8",
  "key22": "2uUXRsUon2FcmsFJskzw7RJ2CqbebDjrxgyJhc6UUmvMR5QRnUquNFJbmAhMwWcvnmibtdQWCL1P7zis9MGv5p4b",
  "key23": "j2f5QZbhZQMcQE4AReCtpkFeCx11M5qHaz1ZxK5kLjwojrxLNRuysWfe6XKzWqK37DEm1zQezF2bgv4xwGDMugH",
  "key24": "4mEXBiZFecXoVgCgjafimj2v5YB9mVpa3qJ7QhDniZDBAGA2EM8jdJt1MUWaPV6yABwxCwY9kG5nKmykjFB9wB26",
  "key25": "3vzoRwEPoJptSvsMUDjH53jGvTfHYvqnCitAY6g9sE5NxyyRojwKrMXp2hXfZZqhZAbox5731MWR2orp9xDgtC42",
  "key26": "3GuRTK7TkYZprMbszxbmDEXiBRCmtpSWeTqVCqEz5TLD5AmSXLrFEYawc5N9hpfoFjdE31mh7PBjEaYKQ9iPn8kK",
  "key27": "5nMLb7M7zcWugYrtJp3WisxGXQTwL46nzcHNg9n8oRuEHXXDQDQzkudJ51u6wTmyZfwaVonRk7Ls1DTRW3SyE7tV",
  "key28": "2s76Tr2hFQew6ucBFLDYS7H5DfFkaxrGz7gszNrEGt8tjjjWypx8qFwyE9joCu9wX89Fp19h5PXrvg8c8jguHcaU",
  "key29": "2RGWM8TbWbqvqY5EXkbTTyW5uGjwMGwdJ5bZJw4yNJCjxCnn7KCSjj7zuL7zQBQyxhHNQemk99DHwkawKTZNPzCt",
  "key30": "2ejwpu1XtuSrXpSEr3CfedFks8oD9HGUSuD4YHC4JdCURby1uMPjshbY15u8kz96Et8sj8X2ccGZ9QQFXK72v9ZS",
  "key31": "4B7hDK3TscBQXPQw8GTMLiW8XxYqANamWjrW22XYViHBmciPrUJeENfzLuQFA4VuwPTcEpcpdMxhWrVRC3tLxk6D",
  "key32": "4Bt92UmZNhtErnuLdybB1REdG126frKr7TEJFzbokVFHf5PKhQJJo7oMtCW6HUZPAdUyQbYwvEvAMqu4o83GKSWq",
  "key33": "83KzjJuMz7mX4eMoK49hCAroYepWXEudtksJ4y1H81gL3xKTzrPtpQ5ymvZHbQN6CfxpAajkf4MwGynGdB9skdf",
  "key34": "3RHw1MzNmKKgGd5whxcL2PgPpBDAUJqtaqApaSG1p2okZYZuWwC92BVPhRqyxBCdAMs5mxp6u4D3yVqyJhppNaG6",
  "key35": "4GP5N1k7oHGzeGtD8BaVBzptRTzZ9uqfGdmfHYYeqcmtfbJr5AD6wxErEV9xz8HGiMJYYu5NtUrCV1xgvxGpVSU3",
  "key36": "5rSvkt4wDb8M3rJwEc1o9aeDB3L6wwFpwTAkMkMa47U34apZjeNwdtqr72WzZb2SdZSMYvksDTjEDzvDBpvzwkNG",
  "key37": "2VPRui7UiYXx5nCrrhenskVwfYtr6yoWTafHrR46NgEf1CYihcJ9XzdYDiTN1jB62cvuGGRXsuRH22a2vRRnZeMZ",
  "key38": "5812u5t6tQF91UgvFPzbcMt8EsakT7Af3TYzYPpHsJvMjMUpoKfQHka6qXsveLjG8YDgMfFjQB2a9WmPdLYQEFaC",
  "key39": "yEaYzHbe4TEX5W8sLyDSJ6YyVpqeNGCbJZfqz1Boboh94PzxJ4adSLFdB85YkGtkTEW5Rr1JemW8Qnps7t42wQM",
  "key40": "27XxBDFakChPJ3JKvwXyVeBfqiA3n9CqGGm3T6nUjDTWUgBK8i892dZFkWzJa73B4PwwaiCFpWdyb9eTWz4Y8vk5"
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
