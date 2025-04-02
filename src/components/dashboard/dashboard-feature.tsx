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
    "4HV3iXsmSK52JzYjQzuTvniEeX4jzgZYaqJ7Q2BpjzdAkviqWvRbX37KVwkReZfTdXxCwyxwUb84CLwuyr4B6rTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46feV4KS7yiZy3zBJ6VLZo8MvVXhKL51G4TucvV9r4934jwQLcdFyf3FRV3AQXKEcAAt6kQWTsPMJ2gnUrGkhDeM",
  "key1": "QNPwtAddAEa6UjnXx4521ELccGv9HNfxJAY5rdgEBcqDKRrqFSFyJpE1GLgoKU1TTdL3Ezu7RVjWiWNmzK4k68a",
  "key2": "3DLEkJQ2ashmSaXNQvQqMpgnGUbJdPNzvpVgCeFrd3kR6MV1coStrRM2nJrcVWmkufKCKq6gRViLBEX5ipWpSqx5",
  "key3": "4hAKGduboSgnwympEzk9F4FYNaiRRAi2hVnA3uR9TKz64WmxC1AdT7TXBo3fN9pfc32CJM25JQ41kmsJw19vbVEQ",
  "key4": "4XV6RJfqFhy235QQTg8bH4YNPxKCkXR2sbuhoTq6s56pRYtDkv8YnDFFy2Nz4KghPTQsG4XQeqHyZCvtMxidRxvg",
  "key5": "2GQXZqfvGie321DaUkvbgr6zeXw3fiDAZGM9UZZj32x5L8HRfw6Jy2i2txBFD5d3vT8CxZYqQpZ7JL7jF6ZToGmW",
  "key6": "5s2LWkh84R5uLg9iYeBGJsqQEUVB4V74nY9CSasGpKLpVQzC8SnD4h8YD2Ye4mrYgfv9u76JefFB9RjCGwMF86Dp",
  "key7": "3jd3uFhc2U5WxJMx7S63h2FMYEGWe3j3NKPPYvrnPfUn1v6F2kN69zTt3S2cMTJmotG6EWTamnuNjJMGxA2mv8p8",
  "key8": "4MBUVBLFFq7xbavSBVeqCZT5bKBsD5bgP9Ddh6gBEs1x3qTNDCj4xxBR4Xsd5NpTmmCHGTxPvxMD8xhb9LNaoQZv",
  "key9": "5fvoMLWZi5WqmjM1yjXNUwqXx6YnpwWWcY78nLvAQNSQkK1UvToP4ViTZVwVTVZKTX7nbj84dvyBhRLiQ8oPnDvs",
  "key10": "WGmVyfiF7yN8kQMzhAaAVBWcXRnwYhXwQ9yq4bW5hx1QukjiJd9YSADtHddiefwQfUQH4FbP6qsCkRkDz6cd6vm",
  "key11": "bz7QsfocsUphDwt6H5dSsfqtJc511XS6xoERpmQerepCiLufu5TZqwhCT8hHkvHepUhKcMAePAPL1hacuzWhjmq",
  "key12": "UgYP5BBAHd52pg1MBt4XSWjZFcwCwnKZbtDMeu29RyRof51umh75ejpSgw6229E4UXfnmseqdmXdw9rZ5oVzurE",
  "key13": "2VpHVRgHk57qmLFALUL6T4GMewmEjxnAX7kvhzEUeouWjDWgwoqCCGUJCK6ADF39h8PzT6g6QJGeHX5pLEFhhEKh",
  "key14": "39L6oEPo3HdekGARfNVBdJFh9RizQjNvhwCCv2Z3b6kFKaz3AodnbLvEHCq12i2vADruNSn52bT7PkJqmSExmhdV",
  "key15": "3XzavXfUUpa82cFhUUQmnUaJ7TkakkZLWazy3WQ8aJQHj6UB8j6QnYr5QEUeomHU4MaExQK3jKEE2jkee6uH9sc8",
  "key16": "4K842DaGeYun1zWgFYiVgbfxXk6Jkv4HxKxTRprtL6P4F4MVMhRyY5eVKmk5cW2MZWxpz1yL7r9TKm4Cm3ukLFkn",
  "key17": "4VbS9YC8SqNKy7mFxpPyDpNbRgnCzboJXH7oTfrJHTzMz7DkL6UmS8C7Uq5zzcvmCjAfobYNaKZcew3QWFNxAiFW",
  "key18": "2ZPZEUmhxepDMRMjHbYDVqEBEZYu2oLR66hTpzFav3t6wexwB2LcHzJyuioiqbowcixEXeKg32RCDUEs2PhYAoEB",
  "key19": "2Qvs4uVemognMtCychLEdC3xYxSViKGhxqdomVaCW5JjWVMpN42wsAm6Vrc6xHSA9gboruLcbpvq9J188ibmzRqU",
  "key20": "5RT2yPCpzamGCUz6MkYCxedX9tiQWQzSzj8qkFTF7nzFRaoUnjqTuzHS2yh8sAZAtLzd2xtbjC1zX74Z7egkCxx1",
  "key21": "Go6ZsrWuKAYgRUZ3biHk2Hiy4iZEUdpsxMxBktvVpC3Xs5KwuVcoB4BRUaSG5X1iR8x1jCi85ntKQxCo284R6CQ",
  "key22": "3gkaCBy7ra4yvHz4e3kPA67Aw6cC6WzsTdfbLcSHTRqo75ZXUsj2pC53wsgW979z3rWHs9zqBbgRb5oFRCRBVBma",
  "key23": "4uCJunhuwrRi8i8beBPDH2uDtjrqA1FpD8u7rQ3JV9nbhCW3tZof6wbaNaa5rEhTct3CvDTdyqRSz6J8YeDaG9u5",
  "key24": "2VnSC9grMZFtJeQ7Mr3qmupv4zEeKAj9Dh3XYjSQt3v45RRENrHWXqqSW8Mgo5edozdVH7GQJNAjaUyWp3kp58D3",
  "key25": "3cbsdXXXK3PVJjmRdEWNWQeoqF6SoYhg3eQijYzqpe7XW9Xk4t7E5A2486YfUyvS3gzragZn2A1RJNvwL2r7sMfS",
  "key26": "kPeoMTHMkGmXU4y5RiWZ3fJJD2r1q43Y6EzDrrBtV7yTmMHsmooLdVXXfxa8E4Ye7Gr9FSNF5UamCWE8nPJMBjQ",
  "key27": "5j67qB4wvc9b3A2nvp3ZDkbEkAF7e5VxHYGWR5TBRQD4XhFTnhnahCyGCBRzQzC1P61Bb9v4vv6W6fcNqZpM5WLp",
  "key28": "4hEKWi49pEXoPCNSd4b7LE1t7w9ZGvMCKmXsCzWActx6TcTCwTaYBLoG8vNmdcvxuzCkZFZCbpohaCx1YCPStqnC",
  "key29": "2BqPnaDtGADZuR9tz7sP33TsbrN1UVZNuQB4Z7HX1iSsDeZhTZWmKPRyQW563aA2QfLFidRHxzy1ywg8v58U29aM",
  "key30": "2HMLyhFk9yycTHv25UAaDXAw62qzy1YMzGxKP3CncpFzAddxSEMYKzrHpcCXzkGxepHP447kHcgCruumw1rDveZX",
  "key31": "bQ4zeF5VZQ2mGni2Vcd468rqgWHCErp3Nbt7Uj7juiqPf4M8yvPGYRb1MkfMVVmN2BRnLh6Fidxfs2CF3iszqCT",
  "key32": "5wfVBQnuzRgrn51HPhiskz2T4rRBLamc4JzZTRdgotBJgx1cx6NWhLAvQUmjGxpnScdeKdsmCQPEv981cte9pBeD",
  "key33": "MV7hfZxVF4YsRfdk4CbbvazncPWWntLH1XxXwvLHkwu34Ed1enWtxUYFbC6KqYX7hfh3YmD3z4aYJCXQ5cp2Df1",
  "key34": "3MnTNpHytXj5CDiHQJAB3RLU3ShGuchwN9ZYgrxPRE5U84fJYEKXsQ4Lo1161DTuP26uAcGqpRorwbJxZcCriwN",
  "key35": "Qfs3GRTYfLgGJWAMrGWLGLj5gGdAAvVPZDbCKm8nJh566ZA23y1gy7Xu4yNnommKmd9hr4oMVVaMUekMos7nvD7",
  "key36": "3SA1rMD6iiSjQWxRSVrZeG1sb76wgqkxnizbPypXxE9L55i83xdkmGwL4yoAKCBPz8ifYQ73GdSHjHhNvz4qjjT1",
  "key37": "2Ttfmr3kuNhTiLzL2JXg8N3mShXnQmx7JmoeHq2UhfaELk64bi5pthmaP1tAJsXZKMvJAyV7jVFXRodWUtnBmEsi"
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
