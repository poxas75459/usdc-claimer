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
    "4BTNrreajc9dgY4uc4gNPSHjwLqstjdWbfrMV4H6PCGz52N595pNbiM3QhcPU3feUoL8tfEV4EqC91gvDnK4wzG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RLVQLUBse1JaUqkXo2KMUZovz9pZxa4qissUWswxmfBu7vK7BmvdzVeoDYgYteW7ZDFdTEwjgGBjnNX253YiNZn",
  "key1": "54GApWHc15Wq8Jdg1piw8XktHMCn2kZ8yn43MTrYG4bAE4dX8LfngB5fepSGHc4UofTmeEr3kn2si9piaa9yBSow",
  "key2": "2z6h2dF6pFBvwFbrK7LECkTgHjMopuv2iRRwxbB3V3N1pG3okBfrDsRQptyU9xbhg8Nmx5UTKuPKTHA9btZWmLf3",
  "key3": "udSibTFgYavAaxG6GAzHvMoyMTZE1cX7Grs3w9qWBm3A3UJYbqiVmPJdjM5yLNefzUHrjCnReAYGoSc4zxu2m4b",
  "key4": "44gADTvrXJDou1awackgxmy5fWcWWRwaTPbM8F4tYGETocSRv7VpE6mxj4c34yXMzxZ7guEZFDKxaXpfFaV5YR6X",
  "key5": "2sCv4twrXiWpWhZ25ZJj1FLazgCzrDbFZZ84v62Zqv19jMsCZhHA86nnzRLveViqox9itdJguGKSRmkeCNo8TNGJ",
  "key6": "qTduWp22EJo6ESi4r4UjWvVFFQHwHzyRQckq1fPQD3soTRnDj2LZdEA4FoAeBJ1sW4iSs68s3D4ojw8XcPVhg2k",
  "key7": "tbquRgaa61vCtNsdKsv4nqHhmVrt95Gz6S23u7ZHDJmaKMvMSV8z6ZGLt3ikYmwgLyF8SQWuwxaKsN4GyYyoVFr",
  "key8": "RCtMpYTb62ey8m8nc9EVjqp3tui15ESEmnx1YysoQbpgJi8TxcH7N32wp2k8Pm1ax2y54kULuEePGfA9Ke6TR8u",
  "key9": "2qaChin39j4YiVVjeaERqy1hm2F6PRKytbH1kEgHF6KUfTcEBkuCmYdq396W5VskqDsBKypHXkdt21mPg2gsXFPb",
  "key10": "2Ni2ijm5Up3o5kaynYiMX9TjKWH8PEmgVi8HNUhovbHkdbPfvkjnMjUtvqkywLkYchT1inYoAPTkDNFqyebYziCG",
  "key11": "4nULG1c9KDo84gwP4P9BhuDMZtQ1bkCnn38ci3bU7BDF4Lh5XBzza4DNjAqHphGtQN49Y2Pzy1aYsTjwrA3gviNQ",
  "key12": "5SmXCVjZJ5hcYxT5dky5R9FP3wpwA6j5vzgrwEhZcWpn5GVX7LQuySKrWxNKi4GfmtXyKqPeWCz235CMjCQG3t1V",
  "key13": "4rKXeV9T3axaCrSAuz3aZVSUxEPJbuFKmd5WevPw3FjhLkQozW3wCm9QGA5b9tNA4yrHuPU9QLvMpxqdAYFd6nYK",
  "key14": "3GMN2kpZbswpDMtokiaBM1MD9p4LYfVuvii69dX77tKV5dZL9FDJwrwa6KStPPr1ZFjHxnRpquwFHGhAhKHmBfYC",
  "key15": "2rEiBkd3ebsbSEEN7jnaEXfpXzf9YXwdLBx5Ti3pip44VyKq2JZAMTEDw8t3Ap549dJnJkmGtyPHQuFmDLgX97z6",
  "key16": "EDdycy3qpKdw4PBRgHvbkW3PQgDWRuf6mWzTzMhxJaimC4ooKC7VRWGG63hoY7ikbpwAL7KBDLKfmjEv5kTjAmZ",
  "key17": "GAhDmEtgfEEeNJWtRYdi2eF54E2ANwir7TtoMGhvteer9PAgGn9s41NJnN5nKQSwgebdhQpLPjnWPAMQsXoda4Y",
  "key18": "4xGzBBuwaDpbQfvDG4N4otx5PspE6Akj3nn6VFzt4jAaGsHzQe5yYUBZ3HdYYM2aeDohtvC22SxNwA4tRwW1rXru",
  "key19": "332b4rpm9ATX8ZiXLhE8pDffuo5TqfZhYsehpC7rp1kNj2MdGQBVkMrjLh5ZWd8EteymZSG1nhUCYGwp8o2zHML3",
  "key20": "4bEZ3LpSkUVXPxapNBhgKdFcX1LNrzDF6AEg8hneocZ3DWuwo11XFpY7T44LKCboEc6ssVYSPN8ujHMuZi5ZTuRt",
  "key21": "5XXHQWgBvGJqatrZV3sPkoffmfqvU2jbegFXC7cjdZaWVqHf1baq5PSMt7DhFv8wWKXq3YVog62hLXNDT72S5i4w",
  "key22": "2RkQF45CkyeVfR1iXgqygw35K3KVEc9ebfv3LffpKeeag9QucUKVKnqn35Zmy19hjnrbweD3iwUZP8rkFxe35HVD",
  "key23": "4MPjSh9rvHVWEkikSdir3RAzhN7RKqaAmQLnmxSKuYS1qYw7PN8gERNaKbEJRNEotFMRo823DXK6oLUeE88djZwn",
  "key24": "cerUP8yEEdXaxs1rXmhxM8P71uPqYqGDUkb74ZJfL3gkpiCxG2GTJSWXAMrpDgSgaCJzBEhp2hYJTG9LsERiGB3",
  "key25": "4MaPLxcqgAQ4R4T3NEqVdd5KS6kAMHfLxkQGHi2vPeJkscWGcsaNNo72WKssbMbGMPR17zjiqyKLmFArUEmcdoco",
  "key26": "62pNWuAGAkQ1b6rN6DPyYHmvj3TVPPogZXFaZY2rxvwtve8meUnQH4P2MmBCH66yPfVJQusgaWvAT1TPAt6fhYXg",
  "key27": "5xMfSjMF3j4H2BhTojGqqoMgBr2h33NEu95HzrptGxYFgD2kMx6od8L6KhAZujd4xtDXSCXwZmPLp7pkzS2rcpBu",
  "key28": "2NMpLd2TMrfz7hNr4C8P8HL3V6r6m4UC9RvHoCnhq9XjWY4gGTh1wq3tRvUMVJs4TQxqiPEdJDrkUtkCvnWBWVAs",
  "key29": "3kCtYVURib1Y67vJHrNnGxA9YCt5MTbgnYAPG5TCQ3rAN6EBSazSUWFwzYuYSY3pjvfVio7MnajAuip64tCHzgLU",
  "key30": "2yByAdmme66h1Q9KFUpYG9vZFzabJpbLeFDqy5iqCkPVJ7TFPXr8zyrcsoSU3foan953AxxzrNWiP56a9JQxSrUS",
  "key31": "5KEMsnxLhvjWiAArWfHZQC2BooDPbch4hCroHSNa9wRDa9gVqW8Cuzqsv4gvysNxovF96Rv9ZtQzG8av8sZd5bqt",
  "key32": "354vEm3LnBcxjk6YMLo9a15RbxM6dXdxKD9pMjYt9p1aM9dePYDyLovRFmT4RQo8JYRUa1fYi6vhG3Zvn6cPNQop",
  "key33": "AYgfszVEm1d6zZbSNkRUWcUYeKyBrsa2mme5e7aacJ7LjfzD4cAKR3kwoD4PeiyXA1szWA31AukNcSkDZhFA9wN",
  "key34": "bQNmxewDtazF9oE7BigsSA7aJee2zgcM95NsXWnmfLyNK4Xzc4ie9wAtNPXANRxKuGRS7oekWCRJC2Ji2EbUi58",
  "key35": "57fZY7WX34CdqhsiHTXxP7xG149U3pYuyJ2HWmFDaeNJSmxWBqVMdAfSB5UZZ3R2Z3f9M7H1n8SQJDrtKDV4X1Cr",
  "key36": "3eiviLMk1tNXtiNzmyQRo9j2ma8uyQW7YiFmVZfCnRkAee6SWd4WUiqiGeJjtQdK3ZB32gJvjpuiFf4q1EK3eSik",
  "key37": "36WRU9yPmmhCPiNSztR5CTLNQz5NDjjcsRJy8UqJ7RXsVJKUrCLoCZrCJQjiV8dkoWoCYGtAhsxrKByG9t4MWAt5",
  "key38": "25255jY3283CKWRiQcKNZwjFeK8wpvAuUhb8ysxSN2RL5bLhoc5wrmSjVVuC5QQB7f5Rmm7FR1GKrdZuLQr73LKq",
  "key39": "4T4hRqx9ib4o9diFQcn1Ce15SXSsYBjHj7B2aTp2uDcrgrAStYDGdNSsfyHCDxZuT58xH4696jgUHbyvaqvrYgWy",
  "key40": "4ndkmX2K8W4ZP6kk9YXdm9UVCpounpVuJwWxXxNkUoHBi5AQF67AgFSVLmsZDQCQ9zCPfPxdBxyjPERdcjsb3VJK",
  "key41": "5Q9ubwC1Lrmu1fWn22UiLrnwqgYRepCP6FhedUZNALhgm3NGWZGucQF4cEP6sibXqLbLg2vcA4L4YXtzarUd2AtQ",
  "key42": "2SVV7ct8bLAUNXbSqGMAtDfa9zzqSMLTAV8sBSXBKNKsCEQh3kiVWgpDxHoNyvUcH9EgopZg4L3jK43DQwGyAMaY",
  "key43": "2FATMCphPBrqxPznLCxEZaimDCFKcUbos2D9gVUxRmRoZcBsdknMxaKmHrd7UktBkt2BucqCxafKhTkHTfKWtdSd"
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
