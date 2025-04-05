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
    "8U1ofs93XZXoAQNA9SqHKfNggvRU4MPKm3d5PKoK5qZYGXeVCYvUQoMhqfa7fZinPMGaRNDMTRpFecwZQojfahC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WJhJ4qG8uQe59ZMQFQwZsxQt5PQd6MxegaG9qTBJuimZBufTyv3iD8gPCkG5PbZzku2fwxjjqyXx7FQ1XdCUrP",
  "key1": "62bTNEcphLA9ihXrnVfsuhaMGFqKkQjZxu58LJUH2vomHxihCvAV6giPKhJN68hV1EAJqQrMAQKmbWskbzjFs7ep",
  "key2": "5f4XsGvHouVD3S8penMQtwwjtDRGHfwpWXUGRAvhNPmzbSujHKDDU9YzQo351kuiJc8vkgaUcfvmX2ABiiS7JBfL",
  "key3": "utDfSYfdfEig4YXDapDU6wix9EYFtWqTcgt65dK2LaicPAdUfDUQh3JUcVuDFHDYpoE8Q53qraYkB5gWQMZdWDR",
  "key4": "4MQhD6xaUg6Xw5TQziQKsF8sQn41oLJtw8NySweaNd7pvSgjgPTQ6aepTWyNdKYsTEyrECXdHAGHGSGwriAcM3Tf",
  "key5": "5M25YhwoMz1mM2ttxiWLdAg9v5GpuL7P92LdS4TYeC7n7tuZwdPnDnTBbRY12iq7HWhg47TseaEwYubybiAQceCR",
  "key6": "3wVb1miZsYDRf5MZPLBzw296QBs9efMRTHfCX7UXxLqKSKSDt8eUCgLeboXLSy4aZ4G8gRAHtAkunXm9hT9xg8B8",
  "key7": "5VN38RW1fUY5jRnbj9ENp1Xyh2sUVyh7PYQwCL1RLiic2f2q1UAVo7eXuaeSCgPMs6PZpAH9UpDJEsh2kyLojDer",
  "key8": "63dHows4cFjGs73W9XY7bzooL5cqtW8qc75tpnwyGFYU66Pqe9nMBJLes4nE8N9QMkb7ZESKNJC9ueLAR6zFjsij",
  "key9": "5QKqqASJmJqgzJArXbBo976CkLKVCNgeHF56g3nfju5y7WK8AVwoP81yxiQzE9BeG99zkc9StN4miCmQSCFSBNzn",
  "key10": "5usthfSAXinUuqXaHHPTvjMFgSgsz8HD4FyLRQrjwJae7pNF5MmgmFVHcehBVaAq6HTAeztqAQdTc6a2qJzjCRoR",
  "key11": "5quf9wNAEDbukW6w8amhet5m6QvX7Tv4sR6nir9hpD7avPxeBvpde1FCRoSW2BMiUAKCWc1a1UDKzqv1rabBhwjT",
  "key12": "3ttxV1dbAuPHNV6nybyiXQJWHespbM1tXhUiat8dRzn6ReAGqWu6m7GVgRcZntDvZTtBj14JBSmW1x22a3Joa5JC",
  "key13": "4YXHSywfDwAvVXEiVEojpjBhF8ug93WxeqZiSpBpGE25yL5Gno8MhzTrsqAYsC6SjZ2H2W9VsKZcEaeHZ7Thw2DW",
  "key14": "KY8cPjavDQP3C6ovD5qQtiL8nHnGiET72aQcXFxUj6aXLjTGwk4PBQW8BFo9RkrHuk5XRC5sECM9fDpc4nQeDUT",
  "key15": "hNbuxuV2LCUMmmYiLPzAty8ttpKME4emoeEbZnJa8nR5ippnmVJjXdGN6jDbuGBKDdiLvA6a5pnXF29TYsghknz",
  "key16": "4L7ctAs4GPKSDdoM1a6p6LJ5xZFzGgwzsLWfcRp45pjt9bJ43zH5TQfwtpBb5qQGAjS9DcyaHv18XJB7VhrPBdo4",
  "key17": "4XvTJUy5bs4rubEm8gdPqrd8ee8ieug5rAgJkq3Zn1qwKNXqgsjqVEC8YkzsinjjvXjYgUtLwAjQeZYMyiRbTMkV",
  "key18": "5vArxEdAs1xvYrLfFZpxNUuWGmuNo7vnbNy9ZwnFLXgPyv69Sy47463UhmcSfUKi4j1yFQTa8kSqrHRKZsmvbpMD",
  "key19": "66oL839yKS1WY4QoHfgoWiSiiqWHcrqu15C4SdzYysLhFVfppCvosmXt8d7ue93yW97zESzCZUjAmKdCw8ZCx7rP",
  "key20": "4o1hDPmh7584XjDoVHyxyLVSh9e57pnBhXmG47JogjjNW71kLJZMCqULDJ6mbJUKzVfqEjHSQPQVKTBLoczJYYJc",
  "key21": "44Mnn5tCyiNBeLpww5FbEpsTMi4vY4CsrZWiAiGk1z9GrdqVAtm6ivheCQnBgg4E5uasTRV4FZVzDawJGW4hbFJV",
  "key22": "5GXSSL1uwok7JAEyZrK7mAUauXDrgGbVpURkb8HW9R4z48jyGZghFaNQLCNYGgdYQtGEMmQrbhsGqZsSwh9Y6U2u",
  "key23": "3Z8cZcpZYgRzmQR4Di73PFufGEvphcqkPrVZjbD1XENM8RxN6GGGQu2Tavjx3RATBBgiJWXQB5v4368i6qUxLUNM",
  "key24": "34fJ613HeCFgaATE9ZwS8A2JR3295AndYUBgYYXCK3tgrhik7qAhKgTn8masp9rMqL9GXY5wXYMMRkDwhGFjWbSf",
  "key25": "3jhmAxydF5y5TABnYuYhMdvf1qCTWtcicFQfHppw1gi6WAb8UyYqvnLabwhjAqLzD58zNGy8N2UqYpqLC59Jt4tB",
  "key26": "4AutHkQP9ta6h1iwpGRTBEaEXWH7XR5guWvhpQbVdb8phaZR75fHyGoQqXzyL69Kpepik1wyZbcGmTGn51kikYZV",
  "key27": "2nQQvbSEnqadAEJ52Fz9GxTASsmZSEk4gMPDrKERFft1FqErCXaAPFJcZDnX8zGCxboAtuCea4mRNmXPNnMUzD5H",
  "key28": "4BQit7dMNYhxAGwcb1FwuqEcLHmWnzF5HcWZ1XDkobywe9q7TNmLAYQEEt6AUBN5WNvyW2CGHXyeCpTrZ3DcWcX8",
  "key29": "5JLY51tNN1HPmd7eP7qaeVqPq2kbSJGD3gpZJZCQ5MMyLPRJFFdYrZmJ4nB38ryd2WZYLWKcD1AUbgy75JVoTPuL",
  "key30": "QbR1V47yQ6nEwJFcHXgPttipJwuumRcAx5wqzXC4R51PF74EA3PPTRJMRwf9VKHkCSoCfwLNmCd31R9zVMM92kG",
  "key31": "5cZFF81oM81zi4k3w7tPAvDi4FLUKeXZx8tPoAKZTAMPvnFoWpMoBET5RnNhUot4UsCLWmfvFaV8uHfqHLEydWPw",
  "key32": "4Lm1dSyfkgGRaXZpFV3nri5W1zd29hcB7ZruMBvdYsEodwVm2FffohXDd3aBTnRnwGWnX7MDLysPQ6Hgawf9QDrE",
  "key33": "5dJFqXD8HxFU634hvSEwxdXvb6UTmN13ri5mLNUykmomgpmpKPTEFDMDjSHru7whuoG31ewP8P6aRigHwFQrdXpT",
  "key34": "3frNmL5uuRBzAasQQeHzh5zgh3rWTKHYnqo7i2yTMJTLia9aS4bDGTzr4VU129DztnHDFAh5SLQdmW96zobQqHtk",
  "key35": "5gw38cq7Vs5ra7cbM7pd3nJQxQ5vmfVETkLUp5XJFhN3FX4nq4qPkdoBLaVWBPzzxfcyAEdbFwroSedNK3zriAB",
  "key36": "1Ubthtt6VyJSipA9jxvJdVgePqVgSp4aJXWuXjDCqwaFk6ApWakGgor4qRVGoFaoZRrQrLh417r8Wf5mhThPywF",
  "key37": "6buqrqwEgXPCQa37EK4Yhojkwx5sJtwFCkzk4ZKFodmRgfwXPZnhabdEL9NFoG7CwUWHdXQrTyvzXnWXP7iDEJi",
  "key38": "boQ5kjVsuYc4hPnrwK8dN1hE5LYnMxgSXrNZr7SYRiZoVx8mAeM29vLcWxkp6EVsAkRC9UiSVDDU2i7aDJm3krB",
  "key39": "2meKAFEcFNn89cH6npyVsGhDcke6EANRGJZ8VYB2uXP5TPEqe2Z1w1o2UYh7NKjxBTbDNErBWVs9nSMTSYCUCQ4W",
  "key40": "59wfLafK7uD1mNwfzceoDRwFopgcAR6NoChfJg15oSGvdVvDNGfAZ9nc48obSUCqShQ7LCEe7Jt87oJ4p5tw3s9X",
  "key41": "2qpS3GWsxcoRGz1ZCL1KXDNC46axrgZarhAybKNm3TWrp6tjTNwyxGy4wTcGfbbPggNY5mxRy1EjcuA2QK5j4xLQ",
  "key42": "qy29XTyqoKHT2eWmv5X7cRqbZoBk2EnFdAot7Et7sVEHR6oaR6F5tMm6Y8g1WYvLSp82efgf2v8UcNcWWGXmcCD",
  "key43": "JLhDx1h8AiZWMuoW98ghkCDQ7d3uPGnHHu21GAb5jjJg1XaCBsp5o6p2ngAbRCBnFNu7GWGcWXMBRviBzZnpEob",
  "key44": "62d74LRNeDf4o4TXbTikUxbKFMokAsMXx2AWW3ZzEfEJug2ehmQUMcycN4RC7g5yayTbjCmfWAMGvPiV2SjoXfAc",
  "key45": "HG2PyAvCdmGS5mRstdEvqY4HPisSwib26RYZ2HDKE6rRxNGvTjpSuCJvi1Z2hqTSrPdp2x3E7AND1Q8AZCozZnK",
  "key46": "5BmvyZwJeWUCAXjnaKgYZjTReJkccdD2KdcSNHXyQX3YgTZjbfrWWD1wp9weiAd3QhJ3RdKL7HQhYcW8YGsTz3Lq"
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
