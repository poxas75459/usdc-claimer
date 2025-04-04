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
    "4AAeQ1XNeyXhbTS8vyQovqPCt2iFhFYHTHKB2G1YjXK1EP2txXQHQdCsuVPKgsMpjZXvWzUYG6W9w7hwCLV5EEYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WNmnXTvRcvR1MAP17pqoE2jCdMfaeG5poGsQHAvHaSD2mGVBK3v3ovcE9AVrVoiU9mKkjN9PzX7XWRmiuyCec2",
  "key1": "4NwvrFN9jiqZuzNUQ2ydrPyHTTUJuW6D7gPd2nCM4JWgogWY3U9UA5YhNQS4E3563YWSgiFLgC823tB49AQCRjDX",
  "key2": "qdqRgG15gqonEDE2YoFDUEG381gx9qpVdJBdCVLPXro9pcYq9iJcqshFfJn6fr26DkUfvWP5B66RTGx1T5GpxYq",
  "key3": "28YDFiyE5MgXgzV6Cz1h8FX2sZBSzuuh6DPHnNwQ2rjf6ZsccQhnpF61vxsRWfKfuXv2kq3t7jrFSBi8YuxKRF6z",
  "key4": "4tTbJfVrT5ttBKBScxuXKT5gTP6Ng7yfJYVN3EYnSCxKAFhp5KDB4gWhoJp5iinwaRKSs7YgvPrZvhPCpdsPWUYX",
  "key5": "4Y4PGDfk6yZJwedaXcwfK38dPsKJHnFsMpg1rdkJwyXmffGzjNK3bcZi7BGnRnzoY5dH5EaAcqtiCpXmvt8jwFLm",
  "key6": "36hw5tatUmC4TyTvWdQCSXcEkDGRyjRq2JW7bQM7LTBpbK4NQAHs5nv1LEJVozvSQG1DUUZUTvntQX4U3bWU3EMC",
  "key7": "MmtZGE6Az4a4aXVmr2xKHWNVbHdyodHG4sEfiVJRDzUedHCFRyikMTYYdvG8fgbfY4cZf8wXfhe6kJUjQuVAmjy",
  "key8": "4xGGDfbYTBnQmhtCVYC4Hmh2b1C1oK3KVR4mvCn8EMvTU98m9zMhiWNpWUwdFMEFa3SioJwMbMkJSbfXNBFXPytm",
  "key9": "5hg4ri5TnSyDPxfycWpy3fkWBuJtAkAAfN8m6TAqvM7r5eJpSif1i71jMJUbZDH6pQiNX8SbbtnPp6Kij78vC2Dm",
  "key10": "8fRnXndkGFbci7bkYna4gRjhZSGoy2pVfvkkEMMNG6umha8PkU6TBC5ThVtyHLR5G8Jrphwwmd7ihXX75pEn6P2",
  "key11": "4CYHb2E5WabEdy59zsbtxnkF73dFwCPp6jXqR9Sj1LiTNveJ7EvNjyH3pSpKg2z4eKXwRFgz21SYb8gxDUmVq5N3",
  "key12": "4GGhWc8ohLkANtrSFnmzAQB99dVyNrGan64TwcQqouD3RwDtW7jnFCts5PMCE93jRYMjqGHNFxGsiGk2dHodYnLi",
  "key13": "4uHVf13B4H7nWkfVtah541NM3HcV5tPf2q2RtF7yT5gb7Wfij6zeWTh6HCPiVXiDPHzW5NKoVtAtcAhL7iRbcpSj",
  "key14": "SpbcaHNPF5pR3w1Sia6sePuiBC4HFaPgQUi7TUPrAMu2QnrGH2EtQnqvFaNARftV7EDCyuLiBd7QsGk977NPY3o",
  "key15": "5ZjzjVWZDCUnM6MivUAoEPcy7HXv3ok3WkQw18ZwuCPqQK2WTHwszxusZmbqPBQM8qsNLnStgVQqb1MyVDqgmrFJ",
  "key16": "3UETPFcQcxs27p9VcywUS7peNzKApBZZ57mFg4BkUhRPRbHoXvGzspb8TSBfxfgjWFuxJuChh5JpDz44ZQhKt1K4",
  "key17": "4GKHmW16RKKd14nbDe8Pdg9YxAQCutLAPixnzrKmefk46WvB3PBtBiWZxona841wGYGqkeJbXozoYVRKbCEHHXKs",
  "key18": "2pYVzGFtexPi8sgeCiPksRvZGsin6LKc79XmKbYrHbdo9ejvxxDXFQ84fcaNuwTokvaCorBTap5LbVPGfwUJUix1",
  "key19": "3zHE1KQEcgq7jmWV9FCzRyyQsrvKzgNHXUSCJgoiDebXhmYMAPmzHAR2NVugEsn8E3kgmjQbrinLF178JbJhudfc",
  "key20": "bkfCkRsrKQAMFjBsHtA3Sid38d7pugLxoXek41zxcttbZRMo6vd97cxuYKZMswGh71JyEjH2fH2nUoDxMNSMSWM",
  "key21": "3m88Pzn29T33ogcfcx4PrXQGEJB917WgAzeEJD5oofAGdZa95DFJ9GZYmPhG3JMXjxEbzPtkZeznqZS5Lnk37YvM",
  "key22": "4qpt8Er86Uak4cqjgMWWkvzkK7wFtArF9DfAWWgNY2X6g58XG4kde16JZeMKSxg8828bnkQurZSZhGqHqCcP2eSD",
  "key23": "4S8UAVsDZY2YVFcbC5Zz5vfLekibQ2rBvEa9cxFhVeXReqDjtctxLKHdN9qA4CGCVuBc3Qj9dDaVTfqMcDnnNGKC",
  "key24": "32g5NFhzewtMXc2GMiLxmFGPtL8iweUcpqX79KEeUzpoDcHNps9fBXiZKqe39ewjMPTvy81pGQM3jTwwYD6RJ9RM",
  "key25": "LXVXJL1QHRtSJc9fxDmcfyZUG61RKeAm1xkEigsALxcaQiy1fpbnyTJK4JKnaxKffe9nYApo7wGaJc61AikiHE6",
  "key26": "53oqNFFZqr5BZmVMx2K3Tz6dZYwKeivsAphzrkaitst8wDnEgiPPFQM4giSH29eHnnAsu6akFdPdzrNC5Ut7Tebg",
  "key27": "2YEjPpNma7KFVg2994z62xgDsa1chwTnZeAVkK1RrVuKrmTSqWurXnHEymgo6QXDHJkcN2mghNR5q2UHuwxrRDzT",
  "key28": "5VMb1LFAnrfKPEfvRcsJHQbJvtGdtPwPV46BiwALMB3CJKSCTr1DephNHqXpNot8YK4EWJnaZsrYrnG3yWJ9YkJJ",
  "key29": "JVb6t6E35fJJgEJjNk6YPUy8v99amPVBsFcmhuhXojU2cu9M9rvASSQMcmZQ1yqMAg7kFZLThC52AcHxc4AarGk",
  "key30": "5kcG5bwZPYJTgexBp3vZG5oKZEBCVjUMjRa6BvyQPeReWBVsk4Ga3d2DxsGC3tPvpzdi3wNiDNKodif7UCHkbXdA",
  "key31": "4y3jXFnoB19bj3EJt1ccQhZAptzpuvnNVPG8TGJc4XnvNbkJDvLp3Qr6UaVQ85UDKHfmmH5epBM66Dv997uWGadx",
  "key32": "5M6v9WZQC3pUaZRh7vvGTid1xsYiLeLk9QiYB4t7HVChJgBxqhhLyV29CikwE99E5XnzJdmzcRtY5gJ7reiwxgsh",
  "key33": "2s2Yv88wCVBhRSiQT2Mn2uCnLp8DiV5buUCm39S3jv2edYw8MXT1HAvhMNgQ4CDJ85yvbVujZnpyuBx3Ufzu4Lwm",
  "key34": "KBo1hwpUabRHyy23Q6LeiuRdQa1biy4kQSFX4b3s59QS8pgHezFU3HaPinPbRNAChrav1tUt6zsbjPSJcBxVU2R",
  "key35": "pr66RP3nWTCJdYtqdS6XfHfXA7rmXGLFPSbdYaAxZ6YdUfQVdAhSk9sjnTkWbLDCWFV6WHiHFbX9gNc6dGDoijS",
  "key36": "Sh1m3c2QXinELBKNYqiEE6CrfyMWLNtLjnA9zdMySwYn33hv31STPr6DV3qnAiapwjXWBbGMFcnjjjGvoUGM7qB",
  "key37": "248h6bTgRtqvZqGuj81n8fARMA8nh7JACmwYu8grLjTYmzkh44cAtxsjouCAZGb3UvdsyD3uvugPVird9aWYDLkR",
  "key38": "5dv3jddAd8i93SnRj9hKVRhcY2UEvQj5JnTVGL3WFY6qx5JWYsF5TYYfYyVmCK5qL9pEzD4U2Zkxp1PMBypg6ZSR",
  "key39": "xda2cZZYrW1r45afKNuR3Edz931xN8BPw3GuuToo1wkk6QHKBJhTBDoWDuJLzSi6xupSd5ab9aiSSGhvN1weFsJ",
  "key40": "513ExbRmfpyeFFjbAnikkAUiTeiZrSh2FGZtgGVEmAJP4rjtNo1r5MAsZhbcH4WZjLK8PZ8LDvJgxFKRAZt3fYpj",
  "key41": "5CQAciUGXzP6h41PVcLHYk9UfgpQiNPM4dkQboG3Zw31ZNoYrF3LdMnirewzQMa6Ju2u5S2m9j1jZAMpM9uudCLD",
  "key42": "4MfoRBfrhjFjCqEajyh1PrUwZFjeYASZx2sWHAV6BBW8mS7nJjAULfoYLSnBKzupT7UaqBQvLUJr8hQJAUmnmxT2",
  "key43": "5D8VB9pMLc1H4sLbFHN45PzaMKnnFsvAFgdrAsgEdKZAKdQUZfq17XuENbjUSNEa93Hcjdfgi3DGNjTPpTRhPHH5"
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
