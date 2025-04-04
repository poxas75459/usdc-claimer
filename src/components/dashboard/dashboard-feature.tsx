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
    "5VZTGnp1kd4fTtw3reACw63LqnHVxcgQogwZz1U8NgZQEXDEkCbjTgqJYGkdVa6QpAc4dc5uHDuknCBrPMbCJqAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tx56YBUUqtABHWQNiL192TGNtrty2LmuDnZh9evhunyRrL2wt1VfA9aWfs3MGDuQmN6okfCqmhRBh6cRe8i7MPK",
  "key1": "4MDfcciQ6tNPcHbjAfzT18JjRCPZmiza2a3Es1aovopNcVRqKiQ5SMuddcJXauxmrPHSFfPrVqGcJ689m7AQ7To2",
  "key2": "3ANER3AhT53JKyNYeXSqN62UrsGu2PbPm7p34DdyE2V79sdGjg93hziRHqx56fwqvuFfyvruUeQfwA36BSc7oCeL",
  "key3": "25Qb5hK9niM5BMxXUedErHcJW9T6Ci9cHrWWVDwUmFtCKVnEhG5U8Ugv8khfNyGh85NtKMrpZTmEeGSg2Twefd58",
  "key4": "TFeoCZJiunbvGosVbtVtXJ6xDpEtcgSKtv3FBtDUZGQEeY4Aj4vQP1kahDxcoKuvPf8DT8eZcE6Gt5mf93zH9Rv",
  "key5": "3vqGieHqvArpkQiyCPoRrvUBNoLND88e2zQkhr6yoBcWbbBQNqEKpqVn2Jo4bxbXGHjSgjcZjDNfWGqeLn3Z3Lq1",
  "key6": "B1spkvvNeRHPJt6cr9Jo7gx6wbFEw8VmvU3tnnrNQ9qk6DeMNHxF83YDz2Y2cJJB5urnUuTH38DEp2znPBfJiXu",
  "key7": "FmKUWMjFV49m387zvujMcsJKv2fvzCTHYHPhBibdSrEAtaazbsWsM1wW4KovBP6WAk2A5xPFegP4doLGjqrXsj6",
  "key8": "5Y1caJ9yqSswtAgrE2tBNEwDH5G5ebAdzdiv97HHu4wa3m6tGzREfYPSgpzcqePAGdiuYAW9kyCvKX3Woo56RDjy",
  "key9": "4KiYTQCzucTUttrrtCoRcwExGuuLaknaZZLXq3VX2xPxgwTjm8ujGv7CuBKNUW35rxHpHLCXPL2yboouQbcZZoAs",
  "key10": "4RVwZ7xKgU2A9b8Ws5ceeKzAQAFuaM8PJeor35nXtPUETcko8Xn2A45DJEsUPweetJraYjdbfo5BiWnNPPB4VYfz",
  "key11": "ubC4YmJZibMpfaG7BMVu1YS5xKqsspQ4yuXSnsbjCvZ1hJzHnoF2BE9HjGBhBNTS8WiqKfSHc8sSbAZZXPRzMkZ",
  "key12": "5qvyZXdoJ1rQ7MAARBSGguWrk4nVNJTUCpjPTRk6Lrc77k59vbA9qcXHPF9XQ14HbhUGbeZWuc4sPEmRtPkJLNNK",
  "key13": "4icuzeVkWrr6eHGiEovFaymURuEZgfqDcgQC6bAR2X79yJhdmvuqbRhpDDyRnVCQZUkiruws8oeNmXisD3t2QWuz",
  "key14": "LiczxManznEM1UfZvz8nL25BJmCo969rH739JkyovMXsf3F44REHKqRTZPxw2HznYZWjJLNDRCDKBQwMArKoRrC",
  "key15": "4jGKZFM8Kf4Sj2RCupLXGnr9uTMaRfjeGbG2JcNTF5wgHCTpmJNiSPx8TMwuTpbYAiTjBgQ97nNoDgQTNoma4qjJ",
  "key16": "3udCjgzQKaRZEENsqmFJcDjHuyAKZSCuCutE733Ma7nt1Aiyk9Jrro4LLLfeAHhX73KTZzsAdeLY6b8JyV1j5bRE",
  "key17": "UyEBKWgM7P1EqxptsnvC6Wv4j9EKVjWzB5fvoBoMmh5JdFRcLCcWg9JT4ymD6GzkVK3QLKCQmLCjk2wcicJkEvd",
  "key18": "AkqVnVbdCsuSvenpP4zboLi75XF4DDZrR6uT1EuQwphSDbgei437pr8xFFVfmBq844BRxM7uYU5jaQA4q2h25wy",
  "key19": "yg3xV8VdLueLB69p8m763H689WkUWdPjF9bvB5jZr2ZB6FP7TzoNuE2gBtzdcgSg5uxSfvX3yQYfhqWpH8T9ztc",
  "key20": "4Ms5Wj3iq4BDLj7T97UmUZuojzjvLv8ExP7U5K3c5qj3SMq2RHHyuDS7Vi28ceth88Hnm7XcC6fc9xxYKpAP9Qj2",
  "key21": "5L4k7SrBfRaRzHWM7FBT6kaRXQFQUoqQpsCqGL1fs4EU87PVganMuoQQGYSt6jUZiMGgwVvJwDYsL2vQw1hG8Ppv",
  "key22": "52qEjhAsLR1soNn1dAGRrGw9CbefAsw7zTXr5P6kVWMTrVyK1xuoeuJQgzDpndb9HMG1NsKDyqnGMoiYMnn1do9c",
  "key23": "5996sVk12YMDhEF6QZYaa3bUdWSd7qs74Ds9wC4HGEygBaDwmYMcgA4HPUGacFXybhZ6bfbkRr1PKj94NhoFFX3c",
  "key24": "5wK2tppdXWFnzTTVok8m9AgjW19jUW81k9hiCECyNLALzsmHAX998MJVUUoQDUoxQj1kJ9ahAP3gH7S6NzTEstsu",
  "key25": "2Mvr1JRGBZU2JqY48XJgjnhYKp8w6BLac1nkhf8UdvtJZYkTYjPdtP3nV5rext3YdvHJL68Wkg5dHxSFQ2EjLK1N",
  "key26": "wfvVzVKFqAJwrYUbRAi9zYYK6ycVeRL82E4RzcKZTn2QHjBfyo8M8dSaaWe7x1p8G5be73N38nqCroKyvHqQdeT",
  "key27": "23APWDY51gFKgWg3eRYLoE3C2sQxej635VfLv3Knr1zxxJyDMTQs3SubsiePNJsDCmu2sN8bYqUY3NzmvBvYpSX7",
  "key28": "3VtZoq9Q8z3oHfV5PJWnSLP7wJiybXCB7FK7nafa3T89YkCV754GNLwp9ZobgXa7JcUwE4rbNS2kaeF3DqAvLhLK",
  "key29": "2KL4kH6qdbg5ZYNHiLz7azqcWrHESWdZHJqQKLeF8XxuFuTA2BXM9xZkvv72hPAkRiJS6HPNj3kiFrMCvEXqTTMf",
  "key30": "4nNzffmvS1mfHGuRwCePefA6mCTwFmggHVwp3YoeuKWvyFm6jm4L51TVssyv2A2G8dhkirQFJotM5WY49yMceNHL",
  "key31": "S96vJevpvqS2nM9PnjWSyxM21GUivkKGk9UgsVJgwecgaLh55PNA19r8PdPiSKcn23dSdayLgdZmXW6Stxduo9y",
  "key32": "2aNYrwDHVw8ooUGosU7drMvmjbWTN2WnAqURsHCP2QytdvGwmPaNAWK3TWuymoNhTfaPtRbuMhB7eBSbxstK8XYP",
  "key33": "5Ym5drVsqxMCXS83PSUn7atM1MiFvt1Z2XJ4MTw1Kcks65Y6z2NtKTiXTjgSjvgKDjHAhDCzz8gJzbjB2uMyrVAi",
  "key34": "5zQNNgctXvw21yR4qtVMxH4EhxEzCtoZGwzwMyjQfKy8B3PgkvtUERcorwXcqjxyvuHh7WHCku9S9oyWF4S5wtb1",
  "key35": "3xsjNHNqo7ykTes2vQk6AyQgLWUnEAmfM5h1KAB1qEf45vbCNWbQyfW3gMtVRyaSVE2vZqpUy3U1GoqLJKbnwN2F",
  "key36": "5LuXSceE9y3ULg8RHqhcNWnxbcme9yPfCpESZ4oujTMwxKzG5oMGacsyp9gEe642pCarCsKNcWWHfp6aWnZBS3Ck",
  "key37": "4Vf9MSXRnUTFGznqB6nZu1Pue3rKpfrk9T99H6WfBBXPRAGsXaktY4q13Rjpcmzorf3da2j4wjfmMNWjvNN5io4c"
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
