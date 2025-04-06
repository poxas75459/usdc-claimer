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
    "2mGniWkjY7xGq4odHRKfA5EVQTgWepthghoZZb1H3rj3tssVpDUshFCsCp3X528Bxj5ppXemv4YrU3whALC8d8yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8uCzvNJFoubYZFbDvxjbCy8Q555VpsgfQQxkT9eWdVdUmaJGP9MCxuFc9RNDGqVyMd8EmKMuyTFroyHCS6RNPx",
  "key1": "54VsqwwyiUZ2kKtn6WEeNmcnfxLrP8xTXwZX5nP6Me1iZGbEunwGBfWXKJfNC3v6QdfNoKXwCekpAgNFTCznvukj",
  "key2": "28gWZ473GLDRLY3YW4KNdq2ENz97if6dizFopUxCMBWxL6cajroJxR3qdhboXr9NxQyTGNhxekQmU8yv8eKAviDr",
  "key3": "4wvfGU6ZN2w1JoSP29x3UwRJ1hZRiRJvEH9B37dXEeG7QDy345VJozfF3xwuvpNNC5ubr8ryPkuHcgQyCa1jtcCz",
  "key4": "Ywb4TiFESnsUjTiTCAWGKJdi5k5EgnCtNk4TXC4kX63hEZg1YGFqQcVaLxDca9yLWZfQCFT5MogeBLevwm487EC",
  "key5": "4YiBkCy2cgpMmeLoJMM2ABiATuGJcYCjR7Y9v17usKUsKpk63hLaVGn33QAERbVCz9oo9eUvapbf9uJHD6qKUwdt",
  "key6": "saKmkHzUC6RnK1Gt676WEmwE6RHMkPYPn1tPmzWWoVV7fXGYdYcJ7ytARADDZEMG68PyFCy2DCRaMGQfyVaMdJe",
  "key7": "kBqNkcWJDH5jxrTPT35jexpfVj8wGxL3gAswgZw6CTuSEukcVh1GtLsRJL6c9A7JZQ14U7M4aaPbBwdYT4H1Fax",
  "key8": "3VUZhQgrBuNyrFTzPGiWAjQPeDmAehKsrbGdrr3EgJY16GYfJ122GTSYnCyGmU9BKHrptchSmhga6kv6NJW8EdMo",
  "key9": "5YU11bpQBpbnCTSpShc1KpgbEYFtTECSwj3wfzwFGzY9iMv7t3QUYz43de4h3bViX28F5o9NGp3PNLY9jjsLuhW",
  "key10": "ugiK3gCZ8NwGgyPEJQb74MUCxPbBpdoAtNyRsxX3Dgi8hBPjpS8n752yGX8U4XMy3c4nNSXX8ng8GWPJCZjF3Md",
  "key11": "K4it1tut5XhdtYeBof3xEYPEbYo7oCErr2y7iCLo48ycFzsJr49ZGGuEQe3kLiRVksCE8kdy29SENpLHJgTZQb3",
  "key12": "65LJvcUjyWPsYrLE7q2VDmmDPjFjD5jFKuPmvCRKphmWxDnQvjAjHVgM3AYqgy1sH1vPerKY4LC1GSuLUJu1WsyA",
  "key13": "2WJT6pBXtu3kqTCLY8xxnMjkRqHBrjSVkyiG7BxQ95xJz1mWXxBHnKxtrXBhCCySghu7LnNWR6NzaKTYBjuZwK5w",
  "key14": "4y1LtfD2wEpsE8T5NCcab1QP26p89xuvDgQGTLt6fBdub9cE2mr6TLQQ8ePPeXwsZjpCD6927xv3MQEuwhdTZS59",
  "key15": "3C4XTL9NGwfBkg9o8VjfVeehD5wWo7cRmpx7QtMEvqRh8houEnXxb2Hwvb9HynqqYXvjzTzo4YBBK3hwVTComw9U",
  "key16": "24PJX2RtE6QvqkzQxDVQUt2Lyz6UzWnQrMzz1y59Zj6sTUnCtCe7ipfBXBvEhYLXfpRANRCGMWj6dvkQ97Qq9mKP",
  "key17": "5a771RdyTGMxG8e5VntVK7XwMCoEWkt3XUksbbKqGkGmzReT6jcpA3xqNDFDZramaRLPbBeCYGsEZwc6HwMvr673",
  "key18": "4PyTjY5LZoMs75WLse2xQD7FjqyEMD7LmZFxfCEb7HMeBE3hmy5KUK9BKwPvK1rgq29bprx3XaYrAyf9sgupbvv3",
  "key19": "tmoxEd4stz4XK5s4bPaxmwGAyQWz8pk8VvfsmcmTq2zxKrj8dDnhS6WUoNxUJKuugCWw1VpuBTdrGGBGAKNfB4c",
  "key20": "L8CFXDSH5R3vTNE8RKAoQPfpzKvjSDh7srsCp3uxtvgyHfm51HzCdvg1Sd19XsdFUTWRccp1AGPj9uow6Cfpcdh",
  "key21": "55Fm3UU7ykby1u9PaQ4Lj4BW6BnQ3otNQSqUEggWcDHLusUBTVFvhByAK1kG6AKJyZDsJxT9MUSaXyzAETcgWVQJ",
  "key22": "64M2iA7xVkpCNA8iLfZpFa2tbeKfvZChU88BSHsh6kdtPt7FwXtDWLRQm6wF2fVMgeQLwXUq9WR1QkYdZA8pQnYs",
  "key23": "2BxPwqWpxKGQqWxL9NLsm986oRuCEkU2skHMeVog8aavFXLeUX9MJoyLpFHXX3RkkX1JnnrFCB4pawnnMnVCsJnF",
  "key24": "3bXbjd7CB5G6zr52q7Ry9fMeiJuugHoS2JNuffpj2P52aTU2sBJRLiztu8DGrN72X8uLqrzBnSxFBT9K7j9u4VQv",
  "key25": "a8XM7vLKQgWsYbvt9CejyRJnzvLQUF5nuCc5n6VSUz4sqRGbTCAW1KrCoMvQoFrxyKKX1jdSFSrJVaBHZ1y9v63",
  "key26": "4YEaJPqWWU4QqZK7eZCjczG9iwgyJNrLHtQ2XuJUJM87K45fTZXeEawuyC6TnihPs4Qid3YEodZZhsJidrqDXRA3",
  "key27": "4jmSM1qhsZsHu9uwnDN6AsFnhiYQHGzdYvJHJR1Ad4jSphspA7yUcPvWNsUqxGZ85uqDn4rmn186DG3T9oY48ssL",
  "key28": "HszGY4PK6SszDE4P7MM4ehgDQse5by1Er9CahF4d5tyCqMLLdybM33dDRJKAZrCC7weNoV19dQi2f9qjGNtjPy8",
  "key29": "gRpDzh6wRG7psbt64Bu3jbjuNQtCZp5up8gawfy88cEnXjADi1BHH2uyCivXapHVus4WaGCG7WnN2SdqRmLhVDP",
  "key30": "2CtGuWrsJ7tCCcbXzgtbxKp6LSQtXngVAfajxYaVHZFs1y8sZzJKm8hF6kj4mhKW9FPc6r5GRvYxfC9aAFCadq3a",
  "key31": "4S8dsWBNzMnUknodDUkDvq1eXxkbaoxCo2KUQZWzVrmRdmu9UWVqDwLgw3tEieQXZFaPc2YCzN4Q3S8FRj6r9mKi",
  "key32": "33W8qKfYjeHeqirY6ZHopivKQ5exNzVeGeLKr2PTrfcKcoSt3DFQKiyrJCjeA1BP5UaBBRnnKZXuFFomvKFyU9yq",
  "key33": "p62rzhAJwpnMQfkAQiJwfqsCq19bLQswoLhWHajitbweBogshzuay2Q6bo7mrQCLgmN9YQTzE1xeFkU6QWHkrVz",
  "key34": "58RhYtH2zHzAcaqYkbwbCpeKGH4TfsVQ8hCZtVfFZR1rV4WZiK6utZGKx3Z4RsMpK2UfqS2HhpD7b26YSqZWbuQz",
  "key35": "3fo5XKBq6CdbB82rhUFLPRsdoYRZG1EQFCqb849TZZrNxqShaouLGSqtZvoCvZBirZVCX67uxP9Tu52tSiB6nvWm",
  "key36": "35EkxpBg6PxuLh4BQF9zQqCkoETiC8MEFmNVMbrv4QR9tPVoGFzffBbEQvj2ZDGnte7kAGRrBex8rqF5UH5Y23H1",
  "key37": "Lq3gp6WreD2qiD5zwT2Wki9b5podxmQSJWx1z1trUhpnc38J6wRBpWjrdZTYLNkdQrQ4f3mSYEmtuBVFcTDi1fo",
  "key38": "57gduEfRsDzLtpyfm9gooECiTmZQ2xMREgm1DAHe7Rw6eiXJkJAopAEE5gy2Dfr8PeJSoauP1CsWg54sppDZHmQ3",
  "key39": "2VPLS8wkTqvXw3sdxKABnD45mor1bG2WoV26EJG46nn2zHsVi1DbycDdjWXGcGJ1TeEa1YXg6FPixoM95wMTA1mJ",
  "key40": "2X12LHYQgi1Cb4BPVxW1Anf6QLUfsWjPhePzUyW5osBThCf4eN83bKkzZceLSLLSSgR8Wudww7XEptVc6waQhQZr",
  "key41": "81AhyAuzhmiMXYpbWhAMxmbccHR1vRD1DfdbgaY3QEqAAbsEAFE2NnKcVkyjxkJJubvBvbjrdVjA8yyXLhFKh1a",
  "key42": "NaeWnh44axdcr9nmrzTTCTxYRdbuY8JiVWaF7gmP1Adr1MjtWcSxPeehP9aHFMFGGJR7JZtZKLeaoGuwpdNQFoK",
  "key43": "btzgLjsb7H9AfTFMvXAD6w55FncUAhDnE3Dc9Gi4gtiTZAeL6xSMW65fV4iXrWKgHh3dDxHUYCyGLHMvf7FL1Ps",
  "key44": "5Aph6HmhqKLDyE4faWuwunc3w4WfNY2cN5jb5p1aRiBPQp6NpbzLTK3rRb7jjwxtYo7ckJwqQ29RX2A18X6zXony",
  "key45": "547YGgBkbcZjBVLYWNPdWFLJucosb2y1JvBo6Z9wcPaAR3LRHMQ1xZpxNF58qPmnKfGnvuBy7DS2awBow6QhgDpD",
  "key46": "2XzRpsfV9dGFjDrS51WAfr5L7NqiFz77amAvoimKjnaHVbWNR6EhgS6utCLsYgB5bzrSrjZc11uJGa7CUhNjXL7a",
  "key47": "437pyVUrSK2jUkxWqLDF7r43Zq6YUaHT5oZJu1rZL1cDidAbuzmc4AGBqeDXP5RKRku9LwgXG88VM2sp7vLgnp92",
  "key48": "3xjMLrshZsSasFixuFXmqK3AoXohgGF9sjaHt7M6zb9CG9w8xR24pgZSyRGVFwyzdfnCEdvjmidRGr8UYeMCcPkZ",
  "key49": "xizUqheUW2Qbpup5dqR9GgpqYZfv9Njv3gLKL97JQPSpJ5BrfB855sGnm1CmXfj1p3sggy2d6N8n5eLyS2GhpVf"
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
