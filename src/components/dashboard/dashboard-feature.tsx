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
    "5LJNdWoNUPgCzg76RJ1HwxvqnGkXD3VVxeV4iqQyoeP1SNHuDm2GcD38U2wCgarNcdkpi5HFPDELiBWDtTNiUfWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bX2CkT3xMEq7W5ajANCME9d6VZT56k8GizBKidsNmkwCLaJFfob4ezfqTUsARpmv47JqMdvCHEfg3mMPPnWF11G",
  "key1": "4UA3tbuVX6XGqjKUS7Si8kk2GFr49Yd4q8YUqMudQzxNF9bpWp9fCGi4hHEmhX1uLNtYCR4o9Lqw6RZYhcZKQ3QL",
  "key2": "4TQeQzHBHMfb9GqzNZnFCouxrRMgzLEXdH5EaCh7DgxmhyfxPgyDMxoqXKAAgxy83uWhG1BWxi1xDSk8v7Y7RbTX",
  "key3": "q479uZP2hRNmAYAxqnyXwbPTM5zd215a1sBodTchMpq4bnQMWKfwVUyegFuiN8u5dUv7F4Fkphhm8nq3r6zuVQN",
  "key4": "hBF89pfetNcUoSQYnuwVsDbctgNKFFgW75HKL87f8SBSMgk5wbNn42MC7cJdKEYRDwLfMCzXZoMX2YnQwiQq7oM",
  "key5": "3SJsHPj5d3r3kzvCYV59QGUd91kSxybJnEeckTVhYE98Jh5AbsZ3VSkz6EScJs3G9MvfdKnJRtvRg6fzjXCj1B94",
  "key6": "3G5MroNJL3yMA8GGvzMQUjBwFR7ubYvaDmPygcywfu6RYnMpDF4ot48KaCWXui2oD5y2XLZZKV5Y52xiz18aShdw",
  "key7": "65MDWgvJTqYEavRJiaxRoSRuvyHfzJpaYwwLSvVGMEgADE3NiWp78yVZuTpfvtZ4Quogm4UvpuAemFo1o9SpeNFL",
  "key8": "3eeeMYg5HJ6xCi2zUdAvyTcD6QsEVMbQDumvpzAe3rSqi7ScHhekR6sMY1RKWSSQ5n8k1RRU8k49YfqtwXfLTwea",
  "key9": "v5GKfFDaxgtGhLTtBqxeZBjgr4wxjzuMEWQF4spximP7MgeN7h1b8hXumGNC5HW9w3J87c4Ew3QCNu6eYZsv4M2",
  "key10": "5SefthpHJfyTpCLbBiwXaPjCJ6u4jmqdvvj4E1b2ZC7n9RiNxYcC2bHVkc4xxNxkn8G6J829QEpmqpSUbr5x4g63",
  "key11": "5FKmNGUFoxaaZwUNNdTE3isRBSHYyz3kpTUftWsAtpEQVcuM5GTS6S2jzefhphourAkoou57yU6PESY1mupnjdMx",
  "key12": "4NfEFhuffPhLgBy1uLuF6X9PjA5VvCgLiE3SiXLrjPwnCWqh7zNcBh9orE7zfBohzjHmj96Z57PWzLk737Dcgua9",
  "key13": "2P8NSUaDPnfcvLyvEfcyWuRnw4H6mbkRqSHVM8WcdVTYv8b2HQ5gLkHnHRyR3ssB7TQoN8gxRdjfodmmkai1T2Yo",
  "key14": "PGV5UJJCjNT2DXshgq8yhGPA3qyKscZSPoVzDSK8ZbiwMsk87pbdqPfjcNfAFVwgDp7EGSUvdSuwip1RM4Po7bo",
  "key15": "29HMg3s5C1DkQ4qo9msQV8wYwY4D9CQq2AFHLjUXMwTqpfAKqH4sYz5Qn4RazJjZZd69cLfvBbWYRvDwFC1fkdzb",
  "key16": "2xGWNReBhWhyjf7q7gGeaC8p61HVKd7itFSrDxiQ8dxifXGd5e2F4bdT8aim7ks15bQ5KmBEyUNem6GVtiyQF8r4",
  "key17": "3MerMTLvqdMTVkcnRgSY4T1Y2UPNm9iYvpTekSdVqdqN9ak8P77S5ExNELUtAdEvf4KagsG1NVjgN4dQ6iVmruv1",
  "key18": "2yZCXAsVsxEAwGYvqvizryEgAeD3vFZgCRTYwL7YJ48aijYvtMYjbHu4QvThUnp6vwG34j2CzjEEisJArMGZyXbe",
  "key19": "31ZS3ZhCM2eXBQihuBYpHmMo4gPSBmViPp2HTLVAzXtwoNMCrN7qFvZAPBjrfZnhhX7wtNMgR61GSbhvFcAG8C89",
  "key20": "EXm42g62gZH48pDxuLHU5c3tasSnnxLaocjYEzcrpcRx4DhjnaAHjPL6QpLoth6BRUoC5FY4YbMRbHh3azh2AYN",
  "key21": "3Pwo3Co2n6azukuTaJ3m8T59NQhDVqr2dYdp6RLM7pi9MVrJDd2cCG1Wp5LrZQPRsnxJq2JjuhhodALYTDjmVzcX",
  "key22": "4QCvomJfs4umeWgnCej52LkGqFHVnHFaA6tQDr3A7FNN4H57nh2rMjyXwCJPSGEMzCy4Aw6VHfzZDhLku3E82yYR",
  "key23": "2CmxGafMR5WCPtmxL2vnknMzQLezy3gGVGZni3XWiuz2QpsrS3u536hLCkYrMsAArV9Py5thLhkY8SFurdfeFCK1",
  "key24": "3wjNwGhKo4gEnAcz9Ti1rkmpj8bjacrTSAz17w7myoX6ycxr576hjvUa2He33YUxQ7qDcBnovAuu2RMFUnE5V9tS",
  "key25": "2SGUWHTUtQzncUMCqrk7qveLD84VH3J6SSnAMPjkSm5cprPr1oUnotDZ9uQRyWbwwU147bC6qRae7fAYsQKJVc1n",
  "key26": "z5hz1iamihtzAyzjut6VAVH49FKaubf5wzC5eCWZ2dkpzSZuUqdk7Xo9U1PywfTTa42id2YvAVKi1PxnuPS3qNN",
  "key27": "2gXkdL17XQ6Hx1Ntf3rNERCBKqLwRWszaxxTd8geXueeJ4rpmbPpXwVK4DJC2BM9r4Moy1ZBMr3Upn7jAX2PAES1",
  "key28": "3ZWxVX5uj93nPyChJ6E9n3e15m2aSTy71iVouUupRBt6Rv3AvoCHZL1whZvkyDutDMnyALKmwnJUF1X8PhE1bR7F",
  "key29": "3Z3q8sMQejWRWBfXHhZ4EusskNKeMM8iCiu3Mm65n9eNdjaSHZ5D83s2qVKrsnCTdBoXJSUCfcFLhm3giP5ucUMg",
  "key30": "5Uwfjs7hR8UzyhwVHvCnxXgcnpvw6WbRGmunRd72mb8ajo5ehA4gqpr8iD47oT9dtou1Rq2mFWrKV9bmGWRNYZ1t",
  "key31": "WkcjvSoSjyNWMp2ihqWJESA9aY7amxtGM1X8nqQog91tM5AR2ZPWTHr8AnPwjyjcX8XfPXTYSu2cUCZmRb8KG4A",
  "key32": "2dkJ65ZvH2yycpPFEkujUYxfs8YbnzNT9rq6YG1vC19ckFz3EeEfHyYXiC2LYHXgceNZTrk4wsPzmkE8oHwoMNeM",
  "key33": "62oHjYvLFgA3i8UiGJWLRFv9zBK72Zy9vUcdbPaCXXTP1V85vVnLB8WntfHJR936KGxNuK4r9tWWm9ctWieh9nd6",
  "key34": "2iNJKCBNo4qdobpYc1xiYhkTmCS4pQQnULp4119wSUR7T2JscfKmtVwQCFb5E2PuLeVQy3FoeLuAx1wZCePVHQn6",
  "key35": "5cV171bRuum4azSGv9EC7LcwHejeHvQ56enZvkAgARmLML9MBk6mbWGgxH5Aq9mX7JoXqdccF4adXaezMAo5T41p",
  "key36": "2mJYYzdwr8wgX7AsMwFzki2Rf3p5sxuzKxf2sNphW6RjY36Az8XxSNdiLyi6yZART6VLRGV44XH4n2MaygVPkyrB",
  "key37": "5peXd3825N8ZCmBTKrHfRY91ydthYt6hq8QYVfSfEDUSDdcwmg9qVGNSf7ZiyZ9WwWsv8GkruL9Pfkj1Lr9nykMh",
  "key38": "4aQPKNZUUrH12ny5SymuySpCvqKWNTWwPBQoUFPnpzc6JjkagNQmerMe7n92mA3FEjmzw8RUxMhi89SDum79hj3t",
  "key39": "5yDSigcnebq3iV1B34FWQEKvBaiQaAhfmDRvAzEp6oGpBpdD4t1KEKywFYGb14ZvkNRam2Rid6L1LKEAdtsvtEZZ",
  "key40": "53NvyVewW13gjGgRyukaJnQforWxt8HUYAz9gmVCr8jhdbttF5LCowGTVdyAQsZBpggLEvP5derojsX6Tnfcummr",
  "key41": "4wxztHBijPSzbgEd42sMhx9qBEbMVdxeCJCTKULG3aFkHdQJfAjF6QomavF26nTBEoJWUqRsYhs25gAv7stE35hN",
  "key42": "us5Nrd2n9kZT6pMLSCno3NGHWDfyfY6qLvfvM4Mfy2H2UeaSAh2eup8aX94UjuzpLrwLfYy4YdSrUmNBcX4bfM4"
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
