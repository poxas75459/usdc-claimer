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
    "RhTU6y1KE9VGyLqz9yxmi62rqSMb3QsBB281YwjRwx5eU61egdcGF98FvNn2NA1RRfwM3sdpLs1gnPJ9xjRh2nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFZ5kxi4f8BNa5ujFgaz1WYpFb3D9XJ1VT6hN3xkWFTLJZVF5mRzVqWmAxXvnnsmiyaaCbQuqcBv5ZaseuRw3jw",
  "key1": "oenVMXDVdfQgz3J5mbkN8bBZRcSE18dPPGrtt12ebbV6A22gNHH1GeCAj5FFBVsW7v3nJR3YY7ZMWfYdTNtQKY4",
  "key2": "4BCriwHoQzhvn4E4RA25EQsnn4mS8Nt9cNhf1q5BczHuSd8KBcfRnuFdfUxgtDTiPqeeAkG9p2JT1Y9wMjR9oH3q",
  "key3": "3ZEf6cP1QCWdqRVkV7jYodqyfcVv2CpeMwwuyjZVDMxnrxk44o9q9jbVjf6fm5ms591HqPLSjKDX35iuiZfa3iXW",
  "key4": "5KRnRs8iLFycB7EAkVGJxF9h6rKzMNjpi5TXk3en8xUCQEmDLPbdSFLje6QsFSwT3ES7KEhUEjwgQiuCuyeiVzEX",
  "key5": "fBHjPSLFNr4Q55QnLogx4d9jMbsPaVGsRJLWuWqdWkZcokZ8kNb7W3swPiDdcU3B316VkWwMciZ8MPjW1j75Nxk",
  "key6": "3rTcadXuhr4M4W4SjHDk9SZ2qECeBbGyQqoMcRLQScDPjKxzjj3dCvGPsGtXHuxCRsNLj656uYHfZ76Pd3CKEt2Q",
  "key7": "4LKp5JEHH228a23RFgk1NyovHWSPK9EntESP1sgSwdvjT4EbmV7pFDaF2wRE33mzewwUjbcHEu6BW2x1Q5ArSm3N",
  "key8": "4SyS6ZYgJqQbHKohvgvj9i54p3UtRfqwLFVRurgriYCQXWJhWgoNRVzceSeb6tj5Sbe1pYZbLnsBzp3uCbDBHpSg",
  "key9": "4VTmhtthhJcDFkymcQZKXrngpScaqZ1Sein3DqS4ggR9s2Z366WZuSNkT2MoS7mn8pLDJy9JLYQxjeL7Y4uh7V4H",
  "key10": "4879NBLeWR1YhjkpJh6b5xs2DkfiRhBWvwk2JgCqZhaFeinTg3A6yVnW8bThmcciQRNJCubPPmtqvF74Z2R5jY8J",
  "key11": "2TWmRuoU9o2HmLWUCwsqiW4KZAsWkTSdccN8Z1P9rc5oY74eE1gnyhZEh9oYt4PbtVApexii1EF2jZofznKv9yw9",
  "key12": "4gFS6DS8pk5Z1z3GWEYqLzy6rFfbkoi7bxjG3q7BZSQernoijECqqe7b9rpaDRQuFxtmjAQKAj2JpUVcdFERpNha",
  "key13": "2KpZ9TLZfwV6xqTY3fKRxkXfjkCGXAdo9qqN13WcCYoYhRxs9yYsmQHPcZMXUto2GfRdkKadWj3cyzir49E4AQPp",
  "key14": "55C86y3fyiFCLgK5bTC4m33qn6iYJSbUyGuEtHS6ig6oSbrjsahjHYA4cUMetqMDu4reatsHp59m5yre7NzBNJQ4",
  "key15": "3pPdwNN1DfC8H3ttU7wt6UZdTpvpPSBka9NwCwUKHTHnL7mGpfiozub1uGTPvNpThLjRan7NKeLxfSsdKaaEYjLP",
  "key16": "n56kc2Ap2UR9xJ6udUJmPPobDc1EGvTrpiWTuwaxt3KLoF4TnQERzninLAhPoJuLZYjrvqaLPbtsXjou8XYDg6N",
  "key17": "4WMW4po3A9VwhuzLMpXC6XpKcci5NwX9o7UfPo9g2YNfibYjSFWHuKYQQmJSqDj3ZDAKtHSNx9HcyXt5n3zRiEdy",
  "key18": "3TW2VdVgcMnYJBkBAmk8mtMoKJWWYLGLmxNGGHJwfd3UR7JWMBhK2ZKXfMUYFjrYhfqsNfMhKzfxEvFjR7cAekwz",
  "key19": "2HSymuEeQaRG7rAUSa5P7qseNyDZyRMEiho9uaHYUT64tTRMFfKPwE7TVnZuti3kYCNN72HJoGFpauQMQF1VZSjR",
  "key20": "5Hv5cye1FvVBBhAghwov2n8C1bSCmRLiEy7nCH43z7fjfrnssZQEqXoRVFppZv9re65KKVPGDCgxHt26CTwsj9Su",
  "key21": "4Y3iXxV619nxRtzxkKSLUeEmX9Bhe28dFs7vz5MgpPq8k3wbt7Rq2pvzVifn2D2Wjmk1Ln6e2k3XTLPQSinKekP",
  "key22": "2g5WZfvTuQzjwKYavCyPBGzTiTHtxxRHf3VpypP6qW8GhnyNi9ctn7DD3Gj1a3bYG61gpksPXAU51GcpCHyW2QJh",
  "key23": "4W9UaCBVmtXSi8TgBy19ammqFDkt57GgvKYuAqvDXVJoRjcMrq6DNZHomyaAcBoxMHRNkx5buuQT5xeeEy4BCjeo",
  "key24": "WVJL9EC51KjvgUWDs5kVNJUNM959pgr7SEZbehH8gKJ3WwsALDeu58nPtz97HyFC6ev2eifPtjjue3JpgdEoYkb",
  "key25": "4cfqGV2wYdSsL9UhFsAshC2iN1DSd2VT5SwFhd1uHH9j1NKZpvCS5RtE6x27RkEZYSNi63GS9P5VkmT31a5bb5WK",
  "key26": "3LMB6YiCVHAshWASojPUWVEw7tVemS4QXL3HVt3bJF6bdJvecy64zo3bgiBpHcFHycbcBWX4Hs2mBdt6L7TynZx7",
  "key27": "4gEX6nfrBfxUy2bvHNtowPW1ModGJsrtWbZEX5dBsRQHA6Jqtc2qiufwXD5wqRprcsafSSWJbCoaYNTHB7RJewfm",
  "key28": "5Xm4syuobKvvv6VTk92ZMRPMXrjiB5996BxqfMP8trTDxPtRngwgaBQFVw1zjCeedtoyu4Swn66ooxZaN6i8dmgu",
  "key29": "WNborYGrvDgogM46xUrizAjyHB2TFcpZz1TByE1FXVSej5JMiS5isPszNLKf7pymXYMxkSqERVJuvCAwaTmDAr7",
  "key30": "5hg1M4PKYxSVSACA2yXMzV7T36iJXRzw5sZ8hmpSF8weo11ybru8aNUqDTpP6xWk5uyN69GANKt8phTLsAvb5kcg",
  "key31": "3JbhGb2H3bjGqAogZrCzryfGXJz17n1EVeA2WSG11vicQJrndvbEMXyzNrT3F5F6mWgeUuguC392LrMv8vg1Ffvg",
  "key32": "3ZrCMKndYHVYddXP2FJDcmsbkdeZCXrN8c3J5mn9UKUo46EqszAFkZadBgGMNX1S2UXNYq9DT2fiv9L8taBNNmWY",
  "key33": "mgD7tVSh9oGJqSDTLudFDBE2zy34d7Hwna36jRNxVq9zdvXTk712gbu5Q9sE3Up4Esny1YhPhmTgLc6Kbv5z4pC",
  "key34": "4Ue2EsUccPU5qfHkxqEBp9rYoDQWPvjLr4bHPjgsHPHzAvFBHRHJcQHmq6wkPwh7GWmVUfPqr53YvV6YYzq47rYF",
  "key35": "3oL6erq23J8T6De2AZJ8xEevqn28Q9Ubf6v9d69VFofET2GQQfrXwL45CmEomxtm82r2Af88MrPz7Y1JWYCVC7vn",
  "key36": "5Nutbwru8gYCracEA1Y14fVwxLSG2J3Wik5zZxndwuxvyC2iyYkmopRX9MtQ2J4y7PNDFpiTv8tauBGB54VtWHFF",
  "key37": "4wsz8BQ41wi4GPwU676BZsw7jxFczJSsUV3pesQSTHx5YP5EDZ6xDzL5TFVvzYq7NeTG7RSGDY8RPyyexuweXVNA",
  "key38": "3gct7cCror8qqhnZiK4DiVysAad93ARVeLeKdZwQ88zNXnHSUP4EvA8T2RioUSZcGAesa9x35TSSdUbqYTY6Btiv",
  "key39": "2R3GGTeULjNU81Bqwp4PjXENre5jL8ZmQwKAbJsKSsaHfQ2cpfEMH2BzKLBzbfcSuDohyMBzBDAtaBKQc2uNC9RK",
  "key40": "v4vPU1NdLDhQkNYn4TDyMbcfPTtSy6dwGp5P5WfFGdDVA1iXi1DasUG2RKw4AfxFM2KsaiyzFLDWWSzxoHpwRja",
  "key41": "2Z1FZH6jFtS1H3gcLzL4ZdFCHan63R1CivVrbtmu2PpeKuaRbPXh783SDN5b5SUTqJ4vdQsQu51Auv3UGYcMgsWU",
  "key42": "2YmvMn6RJA9TBQeLLwxmqfVb2RUrNJrxUn3vo9h4Uqaoz2bTcsSJUSYzLW3DFC6dMeBQRBjkfhcQenjGTK1YQC1a",
  "key43": "4xA38PUDAjbXqYq6SxkwxzPwYQqgT6qpCuzVdWsu5LmUPAApYE1dBJZmacvh4aHfXmDssqX5mnMrPFSGcXXyZPm3",
  "key44": "3akfxUtsWZQZnUUsAx75ZDo622eJAsMqKDRfiGB4aKDqnkZ3oWuQyK1DXEaRLWu7Cf92eCi2RPm4E3SKJtbm4uLi",
  "key45": "33Aw6dd68GKNpzUWFgKaRxNWJPnEW1orchseQv2wkVEpBRcc1S23wQyFU7TFkiL4tm1pKWrhyFNYwJ8fDtVCrLNh",
  "key46": "57sdm38kd6C12PTdxevy1RCmB6yBxaZqWd6Xaj1wjFKaMbqWtHnnNMsdkwZ1aiWPUxNAPZnzWQNdoK2geQ6T8KNh",
  "key47": "2aVCjxhuEZfAgttoknuZFmyZLQEpfSdb1RnyX1x7eH2iaroyYukcvbUXH1qbsYtrFxtbs1uKw46AV7JZEwmDHiFA"
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
