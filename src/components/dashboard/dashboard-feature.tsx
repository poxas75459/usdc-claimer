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
    "5W9rQ7pkyJce5UDA6DtGTD7eGBv645x3smtMpDG4dsrhUHxwxu49V8QGZaebXvR4brdS4JgZMNtuXzNdgHDaUcf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziBwdJYNmTP1eyKoaz4tZ3CN9GxPif47uAcbzURSY7uFriHExtjZmhvYc1HV1oKFJxVcLqtAGRLcQ4fYzMdZXW4",
  "key1": "4aPRAFFMCueKD78aW9RD7jXyeZi69n5CNn9vX2aeEkUQ3FnKV5os4eMJPNEskW7V16qTFSHQYd43DfFr8qX8ctPb",
  "key2": "2FWr4iQGSCzqw1uuWakkLDeXQ2arGsK5YtrQ6VSthaHNtbJScoHGaabZAJM1Vp7hBWhhqPFMvPE6DXU3TcrUsNvA",
  "key3": "1AbfeM3ScihEmVefP5QP7n6D3EqufKC3aiX3m5TKqaEimpmt4JVuSX2RdH2bkMErK4DpHTkqUcQqgz3zdJYEhZE",
  "key4": "MqhUVVWajygHvtiigbdAaQp3Vx4DrDmnDV9JNjphmXNsqiFQ8hp5BiUL1EDMW46WpjUsP9TowD1TPqca6ckeBYr",
  "key5": "4dC4A6hmpBQMwQq6Yxe335eyUtadKfx14FYDgg9CRugfaQEJ9iR8R83M2skAHQffw7zwW2ZNk8MgGXuAbG2JTo84",
  "key6": "4CoRxygJF1WnxTjSPWfpB2Gd7nRqY64ogSao5ZCtgR7FoQHh1zuxWatmL3aopBsmqy4tqrCpwEfjheudBGUf39JN",
  "key7": "Z57E5eiVPv1gT22V6keZ5G8j2iMVHxSFzcXBFqJbxJhQSzCoWQM9enab8nRKZm9KBBZbhhKsgxPQV8h5Qro5aJL",
  "key8": "59nFmaLew8ZgDW8MJsnYRry4vX9TMsrcrqbwHZJEYjTvRbjWejwRbxHejMrU2nqrRqfonPoRMEfaCjwDtWn84YJW",
  "key9": "5SnbYk148wrN8mvHarkDeD7CPQTvePoGC4ngSq7XAXsKSmJaDbTWfsrgEo6s7RtSJNTXcTJ91f6zDjp178SqCFnP",
  "key10": "2PKfmDfNdC6xxqzSvNP7WnMaQBwxotstUsD77YwwhfB7oLtHrCKCy6RQ1aQa7KUyLWUviRFwRjABtXjCzeuipv2p",
  "key11": "3dAUw4bwHXGXyZk5V4t3c5TTjx4yzmSCHSbpr8Fuw3dWqD4Q3CvfpDtW5gXa9gMX2sCyqfqWTxzhtNDpLBNLdHHE",
  "key12": "4PLHiYdMMefxkPC13cjA756Cr7XVyCjt2crHFG4XjQwZi2bhHLXR4eoAfSPfMbS25PcSy4akEe4BjtYRVfH3EcGu",
  "key13": "2xm24ZmCic7SGLf9BpuchZBg9Sh1WjtDvar9KZhcvbcpaDcyUAgUMv5op3JbrrwUt1NczAbgb5WoKAoUAbE4H6oV",
  "key14": "56HjH4YhFVpNgMQY2yqV5JuSyxRV3WeZayaNapfNbWzsNf1pcTSpLqkFPMTuzNHT9N14L5zDYFRqK1epbGg5VzLF",
  "key15": "57eXVRDwKpGRvr2DT5CUa3tg2BP7JzZmM3WfbrYnTCpgMvbaUFZbP4Lqps4Yqv2erKwq7NF5PeUEdc2AMbvnZKr8",
  "key16": "5KLoQkcXueJ5vzG7SRuLFdRiDuAz97VHb9KDv3ifRiMDcig7UhJ2sCtYhUy5p24yoh6mtSp5bTwnHQAAw6xSGozj",
  "key17": "3khmfU9aqPwZfBPsGGTK1d5rBnKR69WRKm6xG5KcUiAWrZwg1m7PTLPZLs91TMtUdQcAnLqwgPMuK54XJRsbkfyB",
  "key18": "2kdxMJcdd2Z1vg5prnV17QqCLXhp4g8BLckPRccHRt17YnpeR3bfRDCTvgXpWLfTsKvzdQ18y39mPgettvb2278p",
  "key19": "3irwb7goPy8y4F4N7Hyp8DDujCCxZqi6fgMtJXyHdESuLmFDhrGX8uW76AtEBr4xhhx7ftjJHyuhbhnSLTT85QKK",
  "key20": "51JBFE6bLyddtZxb7Q7pBoPrVwFuALmMmd6sgJmayLm7Yi92GZFaZfEP87o61KQWMYV5WWzveK58n6BvZmngfSmB",
  "key21": "5uGfQZtsjW7YwotHL4hhfyaHaNZgCjgi14eifnZai8WCSUqMxnqLDzYuCs66JVmWZkuye8J5qD6WkynKeREMUgxU",
  "key22": "GXkztqzdscWw5WzqSHVoLFdRWW3bniPpNF3S4wfHPKLsYWQoWf8NieorFAW6MSLzjLj3uUroU6S6HSqf4YZFMN8",
  "key23": "2N3Fx3bEZZNsoJjq7TZrirq9wHNtP5ifCytqhwKUjbRST3h81ABhBy12vPgM1PYAcTBcudF397rrUx3gfvHuGnns",
  "key24": "R1V7TfTa18GM72eB3WHAR7RrAvWqXkMdrQrEfgJFekPbhHfyorsgNdHRnphQzi5e6q97ssKYvEQCL3CrPTAcu86",
  "key25": "5dDdKuSCtMZvqj8hGtF9T5stx6CUYRnQtRqdcUmtWZiVAfuAyvsecpujkFjN19maehfgMMbtbk5at6Yp2J2mXbEk",
  "key26": "4AhuPH2mkotUD7gUZQiQ6T533eNHDZcV4kjNhGwTYEZreKyZ8ro9hvi7DJGFwRhs87gRpuE65CzHqxKh31cHQfr3",
  "key27": "2SHzkx2FUHe1EqKzEkPrZCdWJYRRa4AKtffeY7kb4mDmVyhS7qxZuSfxzsuuvZno8dHFFktVv3SAEkz3vpHFRXaq",
  "key28": "4wQxLgXyBnTvUVCEuDZE7NSzsxDLJ91RrTjZkV4QwHWqCdqWszhuwrjTSGNTsAf3NqG3DBZRugA542fBaYXQjkBY",
  "key29": "xqHcD93X3mHDe5DVzTf2P662c9GZ8FoDtGfcrBfUgdXURBMcKC9wjeWuECpn4CUCEs4HWrDEXGyaMWE5qNWX6ey",
  "key30": "5bncqPKVsmHGiFG2UQfxQoqUmhFmjS8UzZPbveSih8c8qg6F7sND5NPkuvdv46rr4c6SwyX8Y1DpN8N3cBzP9eDd",
  "key31": "4gQrxsngpnFJLAZe9qe4W3ChmprRCmUiXAKNNrb1wQaQ8VKDKU1MWjQNdak9o1M84aRUFCMrMKViogs5QAExgFBW",
  "key32": "2tcWy3gEMqortQvPKFaiNmRiC9Co8zfTmXRC9cCQ85QTnaMZ2BEJ5c6D2PT2Ky6iPNCZ7eNA3zz1GFNawz7NbnQ1",
  "key33": "4T3xteHf1R9AmCVvNjfFzYqmXcAYbfVDLvM6gtFfpyHDDyBdnMiFerhuFtjty4fZ5FvKQXdnGSv8dNQ5XU5t7MMW",
  "key34": "2ESaaWYvEwkdi6LWiUyEinhV4V2mFKVrRUdvWgjTHhuzmswdkkUZNuVPm9DS5uJYnggeHHQW6YAzh9woa5c8cu7j",
  "key35": "2hpnV2RHKJ4gL4V9gv5ybAGfTqTaHwTt1wV1c1RAbay3R1ph8sGU7FKfrKzNM623RYUCoJt85QxjNU5rW33bA2dj",
  "key36": "5WyHmJoGyjoc6XUUKcuPdo9VmrxGpBfFueBgCEq87QpqjK43eSjcBtotKicZyucCeoq4TAT1496gNd6SMtTKXyD6",
  "key37": "5cyw822P7Y7ptWFxMMe5KyYdcDX8N21LjAiQyutnVE1YWkhNx8BnfYcBF89VTcKwP65JYbDz3mwpVCuSJdd5BHyJ",
  "key38": "cYLBStotxdRt5HBCwX1nAiKH4B5ySzAjsWCm7dFmuLv7fVZp4PPKRJMEtJB5NSZ377vgVhE4NzCFRo2Fo2kkas5",
  "key39": "5HqYj6NPGwy2jGw1FY9txE3Y43UUHSErRTjzm4m1rQ13Ka5vRCmusLWyWBSH3eZ35NpKdPLJqMSbUR8mXauFiki7",
  "key40": "539MeEAX1YKFKSc1PDtNwpqdEhhFDi13wBuYGgzL3dD9z2ip6oPuaCrmfdEjnRV2nzYTWXcWSuLN1eQ8Jis4Q9oz",
  "key41": "2MuafC1WCBqCuT3q4K3d7ST8qbTMssh5NdDsiEFjfU6jWfhQygp6QMof7kayV1p4zBKgzfGrTR3uu5Z4NoZP92Ds",
  "key42": "2bqXqtxhYBwQM7LSwXuUSH97u8Pv3toExUWRu6FwdWVih7hDq8EV4Hgwo85YzExc6BkH7DPp6RKkczGwpoW5bbpg",
  "key43": "2NCduXiSnuHnhVuUgDkq4bjwrb9Q1T1GX6veGr8EvC7nLwggUEzsTTve9CzUjKVqAz3Z9X1gAR5JH6jb4KfhNw4m",
  "key44": "2fzboNu4FuGz5gazg6TDTqWJmfsF3cPXkPm6hsX98HjtDGevxfYpACTtFmuD279xNL3ZLr8kL6ZcB14W6n4vhWTK",
  "key45": "5GxbKAVHMeoPhDB59LNBTsuKBhqEX2witibHAYfKKz3g8bmBm7wCBLuCQtpXrVcaycr1SFBGP87V2iHU9aEdhpKT",
  "key46": "23E8fp5ea3sRzNEYTUoMCFXERSbc49ynwnJGQvjy4bMrXjSdhCwYqB3ody85wTyE1SVjpxERYM4PfHyHEVFYXZxa",
  "key47": "2qbfHCnWkVAkAUgjgGMWpMRjDSfYodJtBeGRRLuQzHi21BbBvDWmiiF1kXVfEgrokx5mgPnJEBwkoVN4DFHkn7rn"
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
