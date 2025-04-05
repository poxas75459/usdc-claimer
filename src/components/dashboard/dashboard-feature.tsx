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
    "NXDPRJL5UL1gaEiAe8EcA7Hf37kaaFk5mZ5R2pX7jN8MJ8Kf922UEQqov4C4CuCrvGuQHYq5AYtmGS4eQQUmR8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HUDQQSf3d9bBHCQNF3vDGCxNwKBk3rFuQH353PswA2BbywftpQvkVpKpPizCucHhkWm3kLyj459Ca7VLMCfh7tP",
  "key1": "5T7PHy19HgmYBZMtEoEvAPChEPhs5Y5j7WNsiggPq3H2mn3fM5Rd5Z4hwVd2Lx9ZTUEHDbzGp4RSvN9oc4aeAPBM",
  "key2": "3jwEKPv2HZmBS3K36gLntwrsWFQ98NfcuTYbKqiYYhyY9cA4SaVDgsiHnQMokQj2cNrRDxKtVjfbKUiZKin2CotH",
  "key3": "2ZFMNiLfrofYpzpp4u5Yep3hcSBmnUPs3ZNDKNvnRVNnnNFPeVVKzq6JtLB565tk7kewG681SBJJTYkBLMKQPGyd",
  "key4": "2GKpgZFtCrnm47SMzL3MEuFmjgpDCho8VvxuskV5Wqp7jWW1tjC1RWeZ5L9AGMeKUWLjQQz1ewt8KgaMp9CmE6Cf",
  "key5": "5bbRWXPEjkCgHpgd4rBXwpQNKW8UY4vgHXiguMC8FDgL9JgH6m7oAieRtfXuDYepBxrN9KkhijxpPGfnC98Dxncr",
  "key6": "2q7UTmMBK5o8eFG4h6sFHgUFATxKasTc6VJdECuz9P9Kmtek71aE84hmwwZMkFw2mxJW3HAPYLG2Kk5jCErFsMWR",
  "key7": "2ncZuvmP9oZY91uZZyKcBreGGGckdh72uLq1iLi2TScBsqEiCMXL43YUXceGssp2HPfz2mUFGV2qzaRxxYA3qYwW",
  "key8": "4GXf7adW21GVg8yo3Fsaex6BeoUcZVW5AgPpvKC9CsHogPAoNELGvrNUSFUwRDeqDkUnT3hjuEedUBfR6UyrsPFq",
  "key9": "QC5Y2uRbUig84ZNE6jEC3BgSRuLPWWu1EnHauZ7iwJ1MyK7PB5vYxwrmD3xHtq4EWc3zj7yjUDFW47bcfW4C4jh",
  "key10": "4zdDDRPPGK1GH7yNW24aQkGrG5DsiZuv3qE5aiG4xG8NrMQnxjtesZhzkKJbwbneAMKMoBjVTG8k7Ag95scvPPH2",
  "key11": "5Tfj9sdj9sqsL4mm7Xq19StFasXwUZzCFRUfFCwnQuMu5Eiph3xkpthzH68tAgWtXgins4ujh4Dj6swNBj4c2CWd",
  "key12": "N7ERKvyA2xdUTPFbv4Mw8BZqmkJwDuNCyzEuRh8zq7RCwEXXd3zaBbLFmMxnjMiJN7HF1ikpD9TCZAxfkfsWD4e",
  "key13": "4hxrudH4GSTYhKhtSeS8z8fuRb7PDGe7gcJ8XyJS5bzPf5ZYVMrbQpQqWhZQd8DRUdcpiNQLmBN2ZDGjdfqovJpQ",
  "key14": "5weDhSajRezZ5z8wvY9CXfwZcUMTAwQdtiabPYLgdq8sa7kZcqePSYimjLpwSa4RmVFJt9BPFtWVa6cuvLKgNFGP",
  "key15": "2Eph9NYzNsCyLQZ3mh2ApXtgHA2Ry9onmADrgXpoonyQ9hCaV6BNRpN2wt4ZHCkva7QSz6ieRiEYWB1YCJBqit4L",
  "key16": "36eLv8XpUGkdAkf3TZSvWX4UEKBZxrL9R3VgT4ryRgs9zd6YPUEVMJohFfn1g3pXkxPZztJLqtNjqkMgTfEQiKC3",
  "key17": "3wgw11wLvFGAGJCywgSgD295aEBJMXakpLuGw95tKFcN6DzkSWJjQq1eavDnXSDG6BjsvmAn7nLCpJ1ALdLGoSiw",
  "key18": "knhWG6ZXnm7NVzXJm7Nv7hggQwzxwgtr8ZmxWg6uyt9179qU1tMX4BDYxBmQS1S8JwsK7wt4Y3NguEfWJzTAYM3",
  "key19": "43yPnScKoGfAPKytQAWrgBQxuaJpkkUE9WpARNj65cJnc2hsdVXDFcsGDqHiya44Cozi94WTGRe1zK1S2kXYsuiV",
  "key20": "2GU8nBMarEVZtHGx3LeSQU4Dan2wZq8RALMtbkiRUdS7YboU4E66tvf7r4zcEKbMFPFGa7kPerM7n5nwah1hArmt",
  "key21": "2Qt7nEebFguA6WFYik9ftAvRvM9g79P3BeqkUUgG6ucm3Vv7VPYxyxyZXbt4atjgsQb5wVeK1rbdUF8CwuXkWsjK",
  "key22": "23nkRjeow53Gq5KxrC6RSaRjPWgjkPEDND7J9QKCWKmx79W4vS7n7BmBqAUCYQc1mZpjdSfX8siLLhx3qxenzKZF",
  "key23": "3EjGrdjXGg1Q7LVso32QbHJPB5D8T4YfCY2Vgyrh7uKaNcH7TMaWdBoPG93GLzCK8tXA3FHTEHu88hhPRJThKfUn",
  "key24": "3GaokABPGC25MBJtcUrBxNY6vcWbmHoRfrqUNeB95E3Sk5TZR5A7UcAZSjm8devJPjKFEGRnYVvkppvZ8XTvg9Tx",
  "key25": "5MN9wwCE8xrCt7C9RvRcg4a3zDacHaAwui7pxtdk9h4uHnHTyyvhFh8id7heAzawz9wcyLnPEETsqmysuZwe4RAT",
  "key26": "baXFzbifURQcxiBohD3ZggN5J612ZjFWpgXcM9k2uV1viZLMKBGVQR6v2Yf4ZMSQiPCaEFxqHgjouzoPjYtgh6z",
  "key27": "5C3Y6oes491YUBbuysyuBC7DDN26Q95T3GuS49d2ivVZziKT5xJAxvRYjRBLJGLiHLEK3hDVeA9ouWZzaGNRrrZm",
  "key28": "32iLL5PKsixYfMer58NMgHn8T4eUeUZfEdD1idYzbnmEaVt2U29S1v4dM866fWYGttUsmFJQspyafQk59E67UBJp",
  "key29": "brtmvoLYjVRDzseP6bysnMzpTRZVpQCXQQiCSvpzbEFQUDx8yZajfCxeX7WpyPNnbb3vSi2qrQ2i6gJ3YD2C7bV",
  "key30": "3KCnQLwJo7nhReQ52xacf1dCaNrDwYnboyXDadHbUCDWciJ96AAmnPnnfPDh5Gsxd2TPqDzTodfZvsLKHH6kKuCx",
  "key31": "3oxcihYuQq4XULzjPyjSdFYjNwRDJUBSGDsuzywB8LKKyrHZyeQHZ1ewAyTeia4PzeuXQgdNZGH2bCSw9TQJr95t",
  "key32": "5C6uJKvyKHQWJbe3TUZej9wXy3iVrK9dCPnJxJSWkAdzewcPKXP2GGY3FSWJtDKGD6rHcqkzD45g89DqvVDp3cA3",
  "key33": "39ryzvpZL7y6zfHJhs25CysnwZA4DtcZ1E9XcfzNZhNxrPWm2D9WBK4w8drAVuVv3yDfFkc5e6sG78ZEH7Htpgqx",
  "key34": "5fRwLQrAoEJWfCZvQghN2rgH5FMmhAvE74ig18eZQ5VtwXmZEcAdVkzjSz1hoJBQRDwzutHUYikEY4fecNdEhiAQ",
  "key35": "oa9Vj35JuTyT6vBrsqGwKtyGtNiuLoGAusZ6AbSgd7H9CjNkNjQ9HF75PfvsvUtAsFBbXeeU7GfpamYpqK4HKxK",
  "key36": "2aAxD38xmTpo3zTHbsvbpDz2zxDxbDeDknuWhUDzMKsWT2iZtx66WKDww8ofwLQVd3x6YEDGG4TTyWvWGSUVEZLk"
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
