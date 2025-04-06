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
    "3a6joF5UdFqw4vc4n7hHzjuewiu51q4oLcenPt7NaVLYJG5FZbFipTVV913XgnPThivisVjdnjN8JHPAudGbWpYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyjr9o9SpEGwjFaY8zL5nkKFqUsYFPdN2uHr1AjsaWarZBnMnstyi9ao2fXawdRnKXVCLZBsPuYt2ZzNsZ49Gdv",
  "key1": "24PCjzJFAXVrAgKUJHVnEYAK2JjtMudPzfmbn63guiDZKRtcbuBtJfv6xLrgnzdAUsCfB7JQjW75dFa7CFq8MayX",
  "key2": "5kirS9rfmX8Tjcuw7QbctDFSqupg5F8oJHsLT5bh4FngGYyU2kVcpico9auC5jH7sBhryZfhN854RLK9VHqeQ93Q",
  "key3": "YKVfdQ9TCmfbZnj9CATjrXeqzrkC4UKTvRHned7Veeiub4TfQaX51dzghJVFHLbqJXJZUbGUcxeyhgniTcPuCzR",
  "key4": "24Zsow7W8QX9UJhBxzsyVj6SKtaMjdC92GNcYhhQyoyhdgCgKXuz7aUdsVXDre3zEBHkRTdBvm5GPKFK4E8DzJVS",
  "key5": "ZPiP9pR6n8BTNCdL2dfXjt1yFscoBzfhJpGV4cqMVF4fSeixMtayCpiHArKwvM4PfEax5v4y9SK1tA59c1hoeby",
  "key6": "38SgFzqitnziQc3Rizkmw1tVMDHzLYdcTBJzFbUJn8QivZFZYR2PtewCzLcpsLXDbYmZVQ5FXQTvhbY69uk73Zz2",
  "key7": "3vkvrALzaeTA5mgyE75H8EutkqQ1k1MBB4z8WeJAcrPU62Q7zHZR8rTPPe6uU1nFekSS57dhYECsnwZ3NewWwELD",
  "key8": "2hb8WccN7VERH9i259rAhXQQwMcEFZ2TZJFk4xouYZaMBorFZCABvuqjU2jDJvQX6XtsdoZFDmNbqMZKXwL9x65L",
  "key9": "4c6vJ3PedpdmtTHpBJWTWJBFndDbWXXp5QX1hy59G3Rt6oSjDncZAvyTMPxFosaJYs4AFRmWcr3hPtfwhMwHBN82",
  "key10": "dx18VqVykhuRB5BX6kWMvEDCYyRgAX4RTHBKKkbNU44Jy1Wy2mkUJykZeFDfdJYGC1rMcBxQ7RfHEM82DYN8e86",
  "key11": "37SRrNmJP9RHzE2WXF5nXZuZyacmuQVGKN2174g5pcS7FyMsGmQdx2bppgRnYQ7Da1jxn2WNJt8AzzHovPXnuYbC",
  "key12": "2yfdqzhYbAWbSRGnCMz5nh3qUDsqwBPe5JSxHLvr6BFhoBntwvyzW1VYJ9S2QapmwSmK2ibx7qEsGagFseyYars6",
  "key13": "5yG9DNcoxaMUBgA9FAuTieukYMhcFmC6mq1NxvN4MTuVFwqYgroLuVHwUZVhUVyP4CjZvDMBLLprpQ3W3PV4C379",
  "key14": "2EKP2oepWKGC1c4HxYQ4n9CitddHm1wtuaQUrxcMDVyCX8zo8M2rmoXgDPtCD5pNu3mBxFQMEAysAnQtL3K93HZM",
  "key15": "2oBYA2paTHEZtz7q6RJVa2mBfyK4Md4EWRkTX3ZAn1kEruDrdKftTVpwyC3r4bxsjZ3fiE5omqRknr35TpKbCUPW",
  "key16": "4jqQUAZcVnBLmgjZr9FnTuNksQoNZv81nzzj7Bo9HnVvjAJNKSxcned6FEjvQ4qL7GBAmsBTvKYnrz3sR6Ypq4aF",
  "key17": "5PLs4r5VKQpyuckeHec8p19kFaxtZKGDEmgjkLTiwK6Lvdx8oJfad5izwvHe6QrFw4op2NR9ySEKvx7DYBatwVyC",
  "key18": "38LpDDTLsQK5JrQ9g3vj6qnkAderoRVj64RUWgvkoXctonTSVhTM7Xk4TLS19GCTpdYPS8EYoAqBTGLUv7N6J3PH",
  "key19": "65MzBACWjE7WzN1Jtk7FQZ4Mwv9jnctAFYgmP9xZr42C3crJygfmgjuriGUThWnYdXSiDw9U7QYFaiP8Atjte1HD",
  "key20": "2eTdUEazqiWrvkZpWr5shd8gyUuCZvjojyTFEB7XgFErKxzWUMqrB76bMpU5JpzbkhgYvrXcSdurmZMdU9MiESZg",
  "key21": "3td8whj2pDh2nWCttEsJN3rNgPcnxgGCNAgsowA8bvk5NfhUVDUtNJDsnTW4j5GWNv9jJ6nyb4M3YtyzV9ucGsTz",
  "key22": "5a85w1CtBS1tg3Xsb33mebnYW63BBGkeYMNH8ZsgR3AUWDuTd3J9GEYuG2g9xU6Juw4CZPUniyUyxALy6ND7dwqf",
  "key23": "pjp9aaP28ynxwBSNz75zn2V9w3pq5YNn59X5cPRPAJ7ApH1Cbk6r5m2L4iciB1qfZ136XBUsMwohc1gRt7TsRqE",
  "key24": "55sgn4msj7VPtmxAcXrJWNcrXrMnyUZCJnPfJYJaQvY3c6beS6x7bEgXmJkVJ85QJvZQ1PrGRcqVCn4SUK6TGjmC",
  "key25": "3CypJjZRxXYnL7WcFY8HuuuSPmaXk7Q7VZEvF93vgKKoomANv7pL5guYCK1h7HKpShXqa8ayhyfJDj5XNccYp544",
  "key26": "3KQJWSoEeMTdZ8kL4Sjj6W1gwhv1EQ4eNAX3B571RCkXqCf3SUqM7fv2QXLzJzqiC71gcm9idFMoqRW4FKGXNa3c",
  "key27": "3UeiuzKzwfAEuKAj4m4QDEr1frMpNhVQDfga2gRfDivECmrNo74ETXzbW5bHa5UcquHP1x6oyYTaLtgqSEB57t1n",
  "key28": "23fydfPE2HHWSCRsgvCUvmvoX8xK6jDLuHuzB12wo3znVQ32ytx2rJpotXmjCfzvYZu6ALcEofBRDY9Cq2SkTdJs",
  "key29": "R8sbmGkPuP2oE5kYS3VWPBq3k194pRxB414w8uehEw5mgShG8Ro8AgbbrrknQjic2ZXQH9PqLpjdyRjdjqFSjz2",
  "key30": "3BbLaxzT9WpmGhpjxxr5W9KuUzTuxasbYsikFkGi4VEvbY2f57XS7b9Qp1fqq9LHtRoU82yefqY9xztxJC8Qvvna",
  "key31": "2r3LuWxwqrLs4EASa9ieEvA3xrmgMQM8vL2bhrNq2Xrgjs1XiHRh7FvumrWAQF9nCfrwBqgQHY7XcKQ7deEHZYWD",
  "key32": "42VgC4sFYnRU2vEJTQ19p5nmgCqvsFpyYZBcxYEo9kTC5cAZeQGigud98UDyEcjJFVi94eC9EWJk5Mdgz6nE1RhR",
  "key33": "2ACeazrMBW5ADZ3JPfrZHP6GyfyrhiR8LJgYTanZsvCNuKupCN6zwxBwPBnTdWtWpN5HJhwp5nmqikDKc9zQL5RQ",
  "key34": "21NhcHXMXrZ96MJZtxmVwQfyrRDWwa5qfGpmkEdakViu63nsceUjLcSNP4ZgQiaQJsdrUWCaYrVoK8tr1UcG98Wo",
  "key35": "3h7tsth9zLMtStkw7YwPCbB4ZQf4j6x7G2j5nMpMmxV8vR2ADFQCvMz4dJMx3KDhrKBzGJ8tsG2VrDag8GuWUcYE",
  "key36": "jmuPpWbZSwQLjqopDttGbfXTLNRB6mg7B8zTabHThaoviaq23EcQHuxr6tkvQMjBKfLWd8F6iYNTcgVuZkhWmp1",
  "key37": "2RUL7B3Nj7JNMNmyWK63udeQfBHtubKxYs1UqsX1AwTfnngqHQu2fP4jSxV6zR4YdP36P6LYhUkLS8k9jNW95zTi",
  "key38": "2a1XPftJzjefSCKUCD19FF3jF18VeGnVTzPm9Wu1yxNEEimUn2j93TYqBfnHa6nkJZhqCHTU58cJpRBJn7GrfkCq",
  "key39": "3k5Qa5T5xY8uxQwstUowUpeMACmfjyaQ7M3517GtuGjMf2SuQquS56WNE5Q6BibEEuf73E9WxjdoZAQpgJnhHu7v",
  "key40": "TboBdRkvmqbYJc19TNiNr4qxmpbNvU7jiDqFrgNFYeq1qitVadx2z8hWHp7x6oKjrvQxEbyDanTaQTrCZHeVfgw",
  "key41": "5YJJPkrjaE7XD2dRDGn9oS3QZQNhs7MKQ592Y9Jt13M4JKLAo1EguG4drAZrjBLUpiYciui45GKyL4QEwARp4gGi"
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
