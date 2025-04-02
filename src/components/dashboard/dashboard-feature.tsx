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
    "zRH8d6U8e8i3Z4t9YybCuS2hSYJdpqpY3SZUm56ptApXWtz41YKFoF4tQ7pEBQb9wDPpJF94cUUSA3nRU2x4Wnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ye76kh3d7JNZERbzCQooScBuHUefxNARBi2tixPi4Hg7pczawaL72oF5PTVwo6VqsR9kcC1sV8W3ja7wePwTCwJ",
  "key1": "YkJc1HPSXu527EsRSpn7tHKbmomQRjv7X4832ZxWvetQkwVwYRaFWqUZLykZg85vvfAv19AnkgHb5S9R6QB9zfP",
  "key2": "3cAhWZK5gfxPeRepxVDv4SjKFQEtAofFAXeXTkLZjea8rN8mxyWF83rqqW3xM1rrhVypRNkRrRsn9E96JSZFQmwA",
  "key3": "62cSRb2npkXsDZUQxKtfcrRWNxjo2z5z39xdwdW8Lq1TPwi5biWNjstkpRoU45LdzEnTk3ki1EreiCyiPE56iJAn",
  "key4": "3pKziTRJZQHGwzxqTb5LfCBnCasVXHpJ8PhW1dSXeVjXzkLPxtYqV6CTvdR2GL2vVVG5eGVwyQjf42ACpaxMq59M",
  "key5": "2TAYuLoVa9SLEaMmbWm39i2x1pPGCTtoD4ZqvPGbqgekynUYPbirJxVd3Ek39MinSYMFLjLGNU8xNyLhf52HW5ai",
  "key6": "46jrFQRejf7xJFdqrHMUUzepi8wVGZEDF5tKC4u2wryeLkBN6TvZso1xmpCWP4w2N3724jyqprdyEhtkBJn5YcN8",
  "key7": "9YjWiqVyTLvHMy99AgJ6Gb56EJUjhcicBV1PEwHkv4VS3JupCaxCFSThZcqLqKyVpi8Q5zLYY9udJXATQ8r3Fb4",
  "key8": "5KAA3KcuFhMxNGeuT8pyDVuxk5v7Xwnss6jyHxaEUdfwJaUrQC8HWKnbVdwQkhZb1wbKN1zADZHqJrgs1aSGehZi",
  "key9": "2rYnLwNihuCX1sgWMkTheiRJQGK6vE1JGCGS4YfehXAVbVfyHMaCefLWYtWyj1NomWdThsscGEQjTnuuFL6FVwaX",
  "key10": "46igrNpT46HqRePfwSwkVexrGzBZB9qDr9zPk4ZKF8CucmMfrAa3fqHiMLspjBGor1WXLeWk8bcpicrHBMMwVsyR",
  "key11": "2cDWfuiKTgmSYx2iCxCfuKH8DMsNntWYgnfbT1Vbc7b3ufXDVgokSYkQiBx4gvdxc1Y6NeW9mmGux1nfjtqobhNk",
  "key12": "bd59tg4Lf12haEkq9PVpQERriw1nNV7WEHiJNopK3ZiQYEPQxQYGZ67mstYoa7cwBXBNok3SanYzEgXWgJib9Xr",
  "key13": "3RjrRRrR6vYgEbQfvUtKJjuTvPPfLgqoWHg4okaYTFUpxkFfjC4va3hHccKFrFrhAF98u8G9vkv6evA8ALkHF8C8",
  "key14": "46jvZdafuxP8SqvnCVamNq1wAg2cQrFYwirG2vQ5yFcaKWLNkMmqnNhuXpEzya5S6xyu5bqXK6xC9aMJfEAKB19d",
  "key15": "2B47qR8qnFgW3SgP94BoGcv1VttNsiUH3sCqMNHPzJJs81ySEpWqr2Q5RKaCa1DQ2rXBZjcNXQiyNGdZvk3BzM8X",
  "key16": "5vxsDoJkJ9QZqi9epjZGApGQEFRhZ47pnGgDwUpnpcCYHN5Gu219XzsKkwJNrLU7huV14MnQ1V3ZEeKGXxQixnhP",
  "key17": "6w7MjxcX9zctgBVerXB6qiQj8iVyBDpVaVx7gNGdDusEEyZEh7CPLJyrFK8dJtb9TCP7suH6PYUj2khGTstmFpR",
  "key18": "fzY7Ha76Y46vh2dZVVmDf52KDFis6BLNqh52CTJxWgqRDYLTReN2hWh7XkKhXPDoXvbZ4idUtka2REHWMo91yvC",
  "key19": "57dU9cJ9BpEGVGfFUALDDvpFGqjJABada4ogv6g8Myq2TWS68oY5HsDsZxi9bQYddTrMqdY9A5oJdXsmzhXVfX9n",
  "key20": "3uYBzMWgdGV1WSNi3ysLc3ZCJQ7Y8utnpCPwEwNbQ3t4RwH9bmq2R7iPVga2P1wpTkDtyKbDoyHgFPKJJDsEUmv5",
  "key21": "4dM3FGQb1nE4vEty2h1AjNTqUUnbjUvzD1uiQWayQXJPKuuuUZL1C3fV7chEqgva56oQs7NNwC1nRMH8zTbu7Q6G",
  "key22": "66YFa2rxL7StMYcffFqETZhycoSCFSzefjecT9RLkxNMkD7AzZ5htrXiAWbMmJgipY5CtV623kxv1vPkyFHQYdFr",
  "key23": "4bNZPa6Y3bLpQMJwQGnX6GVcEV1EQqp1sVHz6djWzPqHkcPNdgocYJzWfUzzxiC5rPsUePGGUZ6HBjvAUFYq9fTw",
  "key24": "gqrS8dVvdNZziY3N5AifxLsjE895TBQqDmRKbbPnzyKErPoshXYu88uJVMzqNh3oZr8R4Z6BQVFGpfFJbTV1Qa1",
  "key25": "V999WZksx3qUwpggRdt9UjYP2ncAZeMnZYCVL3mbK42HDLKt7sTMktjN716Qb5qKuTayvqVwKn55uWPNgQGRWoB",
  "key26": "4jfDqdvwCC1LWQjCDXsxPov2XXhBye976x6e5tgZeefd4NoiGwiVrGxbC3ANjc15Z7C16ctyZB7GCX7gEZeDHBLy",
  "key27": "3RSdMcAGcFqDpWdDpF37jjb2UWBu56biguENB6G2EPo7wLZEEastXYDHKyVQrjNeHC7QSy9jrgChrKojo1pKN9p6",
  "key28": "3CyRF61VUQ28aWSLgNEJHpuFAYXaVtAiKdah5MqE2j9ULMS37HgSFGh7bNrN53QWNXP3YqiTBLAVHjsYMAh4X7Fn",
  "key29": "3kzRAncPEQ1n8k1175Re9n3YNxFUDUGxdnpfsEfkUMup7R4JkM7oTiXNb1ctBq7frWVSn88Sa5k8LPe8Ff3Y47xv",
  "key30": "2vd2S791LPQB8rmiyiKtS9YsbVAZRErD69kV12K1C6toT3Go63hwg7A4rZMHt2QVVhTANJvG4vS2VcucpEACPWVk",
  "key31": "4KdNuV1DWSNMRPqSrQ7EUuHfwG4kCimqqkcZ3pkMFkNZpSmm24d2LaE5mTDrvBGqoeBPcZz8mWcnV3CbaZmmHUn",
  "key32": "sVoMy5RbFZy9decLi3aR6JbUY5wW61mQUkfdMmVzK9PTJQke8sRwwZhkQM41CZ9FjkkKNQ3e3bw4VhsdfovgYJk",
  "key33": "1U2kSnHRtR7yAyJD6LHpnka6Aiuo5vSLkqyaEcJE7XPaAH6hAhYAidjN57zsgBYiYezYCHdERMY6fu8556NiDxZ",
  "key34": "4Ru2GKPd5ieQ9z42XArxykH9MjXTvZ61oCYdskbQpywsvRzxi8THDphCZe63nwjkU3AedgduS1HefyHqnHWG4tFf",
  "key35": "2L79XVhQckSnMGMxXY8aabTTcNRLeEzN5ZGToWDPrxwdyJniSyWgjQEbFKCuxv5RFS5LmVx8ZP6wM5Da6uJ4jkR4",
  "key36": "5VDRRQbD6FoLtKQ4VMPMD3hvyyW3dndcMacBSx1N1pFxefWDRN8gPMprBLmeBx94TSfkqkRadeFYfqySoRC7ME26",
  "key37": "3HqNoCT9gnj2fBwtre5Ds31ru77geBRXdRvTPp6FqmgJigVBeZFiNF6r7vEeNiMkyKZHpNXkg85TtVXg1HLyzEdy",
  "key38": "2m6qJEBdsnpiQhMGYRcnAT2pFKTrriUTutnfXom6b75rpYs7bhsBt4Y1LUn1KxZnXAjQNxp1cTQyw9moUC2qHvgb",
  "key39": "45xr138WfaQfAQp7CRnRLSKqukcjvJ1PRDoK1r9pVdgkFZ3vdDGWqm2cmi4gVr2vgEEVFJHkpsvhPy8oV9f7SdPh",
  "key40": "UMQUeKVn5LJ6LYFnBcBMRDC4HFEa2MDw9UQMXyhcf6Yu892afZGaQpFVwEQxr8P5DkqoDomXrS5ECVfLNPGnzAA",
  "key41": "2jtduiVzRgXN9aeoyFWitTynCmaYmg5LG94GC87pwHAUQ1uNt7zAtbCyiKgSQjfbWm9WV6eWVVW8cD7NeaDNrc56"
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
