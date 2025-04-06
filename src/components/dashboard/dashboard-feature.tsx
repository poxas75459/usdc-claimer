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
    "5keDSLDswyPC26RUy9E8Kr8VjDb2dmn76rMV4HMmtvcuJjtRCdQVsz8aWY1mmXKZnackGYb8otELU39AqG77tRPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksfgLNZKsR13C3vP9BysAAP2UrKV396QzLoXbG3uy1eXmharqYXzUhhprLLJhYVdHRj7ZqRRPqE65FReLKryZAh",
  "key1": "5SyFjj6VWDSXsL6iWUjwSRk7ipZkAk3cxhi4qdNFVEZA6EqvEyu2nfydr2mtukDBB1b9uqYzCvQigE9kmnAQEGNG",
  "key2": "44r8iXwRe1UxLac6TAwULDVfZrWJTcudv9x9ZmJbNxFP5qmnYxqHXT5XwxiCCt3pcQmZ3ojrkibmpNcHLxJvFUtz",
  "key3": "46ZdHaC7xtSpjZ6S7GbDP2MW3zyzoi9KnGwgvVxjyE999WUNRhTHtkpZ414ZvhDEJ32kiSwfJMvh9KzuH8wRRt7E",
  "key4": "3WedwhQG22Nw5i87bpvNHvP8MzS3gmS46ew8QVpwMfpSPmiU4JAC1Qz4Qy1LJ4L9bK9SBhWjH16HkfAHVZRHPsQV",
  "key5": "4EzC6ratBgtYKoh75DwNbfYAZmbS1xxZKLK5ZfQw3y1F57KHCJBLjgqNvpvHGkt8SZV1rhfZ6EwhiBvixgaA82Ui",
  "key6": "2TGVDNFUNthgcRtLZbGfxyEwZxpEd6AYSfy3YVfLWx6WtSNtjWT1zw2NUFLN34LF6aAuE8j7YXGc9XDzx3wVwwdu",
  "key7": "2oj6eTkt74yGzKvubUd4jMXAHBdMafuksDwVcoVovfen8ET389MujMNL14cURfWntBWdaQKT5RV3EY3sC2shkJ9h",
  "key8": "3nEp9939YsQPaY5eyhCi4HB6VAJ3oqHKzsYBKDaDvGRSC6jVksABzc9Zsig88thEEfp8G8aZP3Wig1B6oJuHtaqG",
  "key9": "23KYo9AejyHTF2rxEP46qTunrYKUHTjz5rkV2oiPLzhjtHkc2VFcDSAaikJM15qAZV6CMe8DC5a4moK2PQk96ShS",
  "key10": "5Nu3fKbzNeZG1FYzakNW56fFyXvEVV34r2d23KADGg79dyRc1xhGFVdrk4JXyBspXFqKf79gjx1YGMsmRtLUKe6x",
  "key11": "57f6iWUJx2MHLW2z9JwKxWZyv6Spj4JULpGm22rXdkM11bfZsjWbMkK4JknPvG5gLwbzuaoCY1KRbjSEXrEQHkXR",
  "key12": "yfNc4foppRe7zrVEYrPGnTwhPBx9oK42AwXC2Aew1AtRUuycdDnorkvxJVq5Dm7DYe9xp8tPHPSob34wpbuyEoY",
  "key13": "2feQxr56aV9u2BkHjsqNvZbZ6XAC7BQxzEuyKZ56fVFdP2geQynS3eeW2QEzGSjwq92tGnTJph7DXseXaAi7B9Qq",
  "key14": "5G2Y8DUQHPRg6Xkg3SkvUeCLC8TtZiFKDPvDoKME33EmarEKWr5a492PR6YJ9NF6o3TkKKN7tc4ocDxhMNeA3Yf5",
  "key15": "4jaFwBjn471QqAELBCCpMXHkVgcAK3HXd6Yrbx7nJABfAmgMKqj94JpWi6Z5AaA4DyRjPka3UJTzG81fqB4PGCaK",
  "key16": "5ugpo6ZwwACVa99WNQDUBDsb1zEZUyZYebhjxxYqYWpCG1CtXGE2m9EzQZkdCBfD1cXCYDgmepxbVEi15jiUeFoy",
  "key17": "5RREge8BNGPeiNXVWGbsGm4zEjjfJeheMBUHTSDQ7KMwCqUT4HVy7JEBMHAEFeQvBBnB19SCG11hfPKg8TPMCXoD",
  "key18": "5mF1GZKDWVvx33uEpRrFVaruSATJjweV68RDnWekyEXoR5HKGmGYCdZXqxHnWwuTt7r14AKxpKttJyKqTVUDYXDY",
  "key19": "d232aiXH4k2HDt5z3vYMJRN1jQcPnFoWrqnghyWQbnkZNmLGdWxb3NQdTAnQ5QpWEuhj9qp1VsAwC37w1xvVwoP",
  "key20": "3AQM4erzenbTHMnsrF3Lnfbct9gN7NBhotCi6vsRocJQyJB6avqXU8RbTsMvqt21u1xtppeWgSRwSW73dYqXB2CR",
  "key21": "2Wn5DjAkZvic8nXFoyhWyZgzAsucbQLc57Kfn76MKoDyBmaXanpnX1QxKTZyVi3PYkNAYoRZFA1piyRh7LuiJd29",
  "key22": "3D2PwX9Ka6oXwYoWjJ6XZam7zwTgeznU3LQq2nsPqQddDLebegjF5wpuEvRfAWhTD9n96s4bv59ihxYkRyngh6wC",
  "key23": "3RsAPnfYPx4FYrCdupxqfP9M6eHAPDEy6kfDUjc1e7NYaBSR4hep6KinhLTUy8s7eqd7orftuATsUGDJDZxWkKzM",
  "key24": "64dAZKDtKgS9ekH27m3atfDeZkBVzNncutvpgJCJRDR7QSHzmPmLGRXA81eW25QeELuHnJYuPwhHNHQJrE58j9pZ",
  "key25": "4KJiMQAhwZAyTKEHcFZrnNR3dnAcviV5uNqseLj3eD7bzaRjis4Nu1ZykWjVVKofXdUytkMuKUQF6Z5GHDC9f8BH",
  "key26": "2tMrTDRCPvvxSUpz6AMSf8bLVeJZkAnHDfqgMcM733t3kFcqNrnkaX8nc5gKPDJBMASVwVvqSWs3tJTKt8mfy1ex",
  "key27": "EDQNyZHMeYUQkbcc92RvRxA4GmryostHdwWUbxcfJiFJiXh495iZpTc88SBVhRauU8Et7tgr2XwQ2vLBK8iWY8j",
  "key28": "2kQLkCWjEEgQafemjppmzv66oj7gNWM17PUnbYu4UzcCrVVVAVRya9amgoQSW3Rr94cJpE6j4M6SBAFFyyGmCTmr",
  "key29": "27DUvr77mtKjGUp8uRtABpgQRDE7yRivb1DdfNZ2z2dLanvS2uNmKpQQqtUx4fDVDfLJDanMXoGkYfPMMB6nQMtY",
  "key30": "4kZYd5G4Gce8zV4U9qoDsa3tEgkn6jEKwJebWVPUu5uESKcADtRS4DBnxcSoQGvvntnvU8evRueW2TuvTKAFHeMs",
  "key31": "AZ48hzNgHuUK52L44XPEShmnqRsBxkFR2gEbrXevbbCzwn3P5RhHJ47TAx3REVSGC9baGJE3M4xmuf2UGYUTrjj",
  "key32": "1JU6R5ZzsRZre8ZLDsWi6AaApTCdeDimaYDjoJcKsMrJ5E9Ck5C1FSRrw3Pm6kAfjmkTax51m2QctcCQq9CaFtp",
  "key33": "WK34m4FPBqVPL1tbjS98rq1jKEsChZAKN4CN2Dx18Bp78R7zWfVZ7cATZXsrxaEArdapfTv13QWagbvHMkwbuvY"
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
