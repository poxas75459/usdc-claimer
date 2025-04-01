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
    "3cWmNthCWyt5KJ9MmTK6KiqNncM8hxL7oSv8uKQhMj2HwHfGwixbo45fsPMiiE85dygFvp8pzsL2qxk3JrqPH3oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uR8c8mzuRgGpvx7UQbnx3iBvGLPfUz83A9trQjHYAQxnysZRu4T34Eh2KtTfVU6Hm9Zwwv5mQfCwH17Ytqab5yL",
  "key1": "49FdJBUAJaorYhJdy6kmPHPLYkZuQBTdszC2XyYXJFQdKeoqSBoooPs4DZqLBMta3vExsy9CWqaEqPw6M7gL9CNg",
  "key2": "nGcR3KrXixc5QQ2BTP2eog8NWnfbwGxmHUSom53obWXCeq1QCpfieG1uGXWq7pJQmCCH9LbbS11XZWe9UvdSHLT",
  "key3": "csuH2YzbvZ7BkMARNCqK12c1RrP6xEWKQGEKEei6jme7PacCtgvnEYJHcLrLd1VgDSZowfM3U6dbUwTSDGQdgQt",
  "key4": "2bwd8W8jPUucYaJKzafvmwR44FPTMQtZ2hiXGtFwNKPGnYsYXiVkYNFWoMPHk7j7sFi98VFV1zmEGdyS9qPi25f3",
  "key5": "3N3ccW3WxH8DTGSZKdETjPLVDZRtdEnRzRvm4tN3Mgyn47p5pr1gM7YxKYkSUJ1CPeYp2EnNRqTqwUxB3SwsbZJz",
  "key6": "61N3pfLMzRSAVrj2cWHrtjT55JTS3Lh7h3DM8NEyERNWszUkgTBqTobuKgwMb1j7q8JaoP2khnu3Cy74d29TegnE",
  "key7": "5RiMZbrBaNkM6KPJuSoSrRYALndWgm9SBY5zQAPHW8DoeorjvFkyWzSRz1wtiM38GbMZgWG7xsXfy4Xq7UF3wGPV",
  "key8": "QcQGuPCUD5N5nyAu5p1kShtSXVpqekJPyjeSfxNainRT3HJq7owCWrSemAR8biHiEvKRQ7pHeNi2Qt2cq8owhpe",
  "key9": "5R3ctRUCmhYGoFSgnA6EytSePe3h538Nrd7u2WtHtDk1kQ56oq6DzcsZ4CHcrcMNZ8VUNAuNXT4oqRszmiRwhsXQ",
  "key10": "5LHvdBnVzBjrxNtoL6gDL1m7ABmrUD4jovzAJuCsKnMbNRgV8sazJHYN36FvyZVJzM4GTF3ZUdrm1TWiqjoPFCTq",
  "key11": "5gCvqitGrkkjTtUoY3HW4qsoSnBy1fiv8hTusXbyCRF3tXRd8EgyeLbq2ht4wP8Z1QG94NHBw7zfY5dxVsSe7oBU",
  "key12": "4BPaC4Ev7TZYgN74oNqccY3HbfU8daaLf9cPEvkmXsaTFnBeBWWa3Cz7sGZkDgeCrNQWfXiHPXDEsnf1vzaK1cJi",
  "key13": "AjAGvytHurfokhGLaTc4AtFEygjDMKMsTQV7pBU42JKzUovQq68SwrJ7SAhNFjaiPwx3T7mnWepdFpCsqLmXj5J",
  "key14": "4THzhrUzLYk1ci79m5RJMaYqt31JRE9py5bnjo3JquUssvAKyw6QhT68g7ezHLeRDBTc1SBeRv5gvR5jFsmtvawL",
  "key15": "2wSxKUynCnPguTSfDHBsr9SyVk7WrBPDg2McrWNvdArUenaAjLty94yPcdUzvRDsZsTGYPwpZGPfaQsZ3qpNETwG",
  "key16": "3j1BbTm6PAhRYXWpDrdavtgBvrVJi2UCTjah5HTNNKMzCnNm3jogR1rNggrijou3BoEmBtn5S3gCivWZPJtdyhhx",
  "key17": "1wj9esstt4viaLAa5VG4AUqkePsVLdA7PA8U88TebYBcdmrmE5h1QLvJ9fs5T4PPLAjwK5Um5N48m3rtxQBdxbE",
  "key18": "63Yt3XdBCmt1jbwCPSTRsRfnZWBpEqKcwPBCwMKxQUEfgqZwEA6P6fBG4mFA6WXP8dV7GkDrSuHUMXbYiJe7KQ7q",
  "key19": "2xsZVqjEZP3Xc7vnhWTG1jF9gxnse8dXJ3BiEbZxNhGvnkzPGfkriHaecxYTGRK4jkhEyu8bwFNsVH31LSPgCigF",
  "key20": "gHH2rFiX5xm1hDudJYqjSBK8b8L82KeBwiQ1dqxseKpfvuoEYzC29E2M2S9bCxUepJDgW3YEJvn9mo3q1ZzEz7N",
  "key21": "7vM66q2nd64A9d8tu7gzAJBdLVkp39C3dqYFkG5RBK7nBn29gNjAr1rFqqJZkdpLCgAgvWZPrXSkCyGeczxP4tz",
  "key22": "64UKYzPxeg966oGuux6r9jSYMqEAqK71TFEQ55wYxqDm8hg7AhGF3MWgGqwRHCsYWVisR9y423E6XF38eJcdjPR1",
  "key23": "afVw9XRM5Lkuwxygkuv9mVtk23SLBp2EUYCxL563oXx7ZDbst8AZTUtBmqJjAuz1cL9Qo1TSjVupx5gPKAvDaFg",
  "key24": "3BWyfh8ofag1hLb1uacMG3WsCdCRTrDcTqHDAA2pZga3WAMWLCShHzx179hrCbWEGzyQv6wGrWUPfJKwHkVkXmca",
  "key25": "5RxN5wrWBqtZQuL46hPbjGyARktBvp5kqX9Kj7RPaM6fUoEcJmC7pAgD4Lrfjz8YpXQt4q8Hdz2JGvGjs44MoboU",
  "key26": "3vsage4LxvjK2ueMA2JwemeopGiWDFDCKpm5YbsVP5jJGHXPRZCJ12wR3sgPpbp64keyzhj5LS9dZ6aphPUwz4sm",
  "key27": "3jPpB6XyJSJpnRXFsebw2Kva7mEEAtk2gDARvLBr3mv3kGJbX6UqCPWEe48e6qyCy3HEKFGPtwZXcgQrcuoRzeac",
  "key28": "3bmidYpg5epfSLFtpy4Ph9oNsHJAQnHf4KxxTBb7GHtYSnjRy876hoypYfoweAitMYeFyvxQDiAN2QnrhZGzTo5U",
  "key29": "2TB23wzdwhuEyWNJykM66fKx3eGe9wjmPLsyeEiN4XHjC3fQBQnCczk9Q34FYKyYfF4Q19PjYG3RhVhuEJPsJrU",
  "key30": "2dq3bZwgdP1HhNt21vX82Vrsmot1uXEm7WQ67h7DJmtdvT75461KkaFhkecK372ujfSSGawwMkFMxVx2rhxhDA4G",
  "key31": "3VM4vpMcv8Jq3PnXppCjC6jx3zyh8kbRZEmatuEKZQ63jXyLWjQm1GJy1KAE2iWANnfCBEMhffCLHbEXVi9GnwUt",
  "key32": "4awr5DVqBUkBkYQi1gHyu6LL9gwVuiftsenR5chY8dFthpvXEJiDxzGAfru6qhSRdMgJQceDfpwazvhq4hBd154P",
  "key33": "3mbkQrMmWrGU4J3Udn3k4fX8vWKDqrALcMEa73gCFzZrUfedUFz4e3ywtQztZqTXv51G3FvvZ3goS7VR7GdR9R5g",
  "key34": "2jKcwwfiQiQhGcoShCWppLo7FWuwueH9UojeUu69W5w96WgnbT9hh1cxC3xhBUriETzeum5AYv5hccyW2i36zGVB",
  "key35": "3CY8WrReBB6J8S5FS5bUrvegPJLgwJEtxQeJZHwBQTuG5LNR56S8ewRi4Az3KZ1aZM2GbhzFW8FBaRDEAQRD9xvt",
  "key36": "5crpW8Rh5cGPW14UjP55V2KjiKugjeju44QvKd1M42z6pCE8qNQRoHkWRU2YX5J97rQk4tuvueECc1rEmqDknedf",
  "key37": "4dSP6GhbeibZHWniiEDPC7k1PPXvgaNAyYqprTQWXkX54AByakZDyuguwnYrsTQ2P6ML9VucxofUZXnLh2ESB7sA",
  "key38": "3wMkfLL1EPTVEgwkBHV2GyPHKHRzGm4uVRLFPTBW4emUaj2wqu5tpn5W6hCkQVsQfkQn3RUauvavnmTu4X4nzcyt",
  "key39": "5zMZ7fHPZUPLN7xTaeYnYo5nmYFJCZu4VrNvmqJyNPb2XyumJGPHZ31VS6xLj1w99LZ77Wxfd1BLdYFFsUHBqhkK",
  "key40": "4fL1VW5C8qb1rcuctNLHuHaGXtw62AqtSrg7QdcpRB7TtnVPDEp7wePPsDRJ9H6QqtokKsNgz6UivLQ2cQ98pqSi",
  "key41": "4QfjPViT7SKRTq2UThhP8Djm1v8t2GoGWmm8uxBzvjnL6PrzPSUoTa6eX3MQ1uMvLX7EBKzU7pbVRpfKEowmU6oJ",
  "key42": "3SbMZCusjUtBftbmbxuRdN1aSZXiSgbKoHrjeNCo2fX5EWu2KqbxVZT6tjZYkdWj8MtxZdw6D3E39y5Hxwjiy5En",
  "key43": "2Qn6xxrHsc3smjpAjaiPP5byHTpVYRK1CsTYcrjcVX5ds6bmRKLVVCt8ZGiHjrSdZSJ6YSM8gwoeuWZxmYo3wxzu",
  "key44": "ZG54QQzUDyDVHaBaz6zme4e9NpbN3XpyQpJfJHNZvchXveM5khP27m35HTXb3rsq6ombkr675eVQmsKpXwFok46",
  "key45": "3181RdHQ7Uke4TdrxLvXzYFefHhmJLr3JPAMzLeZ8ui46cLXANSoofF9gFW5eQzQGeSk3oRwhnaXoEsLtpKPPm9P",
  "key46": "xaM5XMuvNTKFA736vQq5d8AEixqCsKV5wnjLcC2YwkGjGQoZFXmwwtBKU1YGtdhaYLd7iRdHurdUMrUCWFAU5DC",
  "key47": "5SUEKNGKfpHAxZm7HDWeEdCwQwz1QHzUNoQWp3uAyXjGyJqK1yTcmjdd3dakPjFQSH3D1mEcWCy2fPcS1drxusJm",
  "key48": "EsA4LVEwVfTi7jKLxmV1V47vZtxbS2UN2bs6nDiGxtpTeMXtkqE1pWahyqJm8FR8n4TrWm9ZhWumvPr7D4EdZ4s",
  "key49": "518caX77dnChpjjULHeEUYjUv4JFgDiypRzPbSoaEhyyeiM8WHWvDWmkqSQzVfcx4VBiDAweU5TMXDouFQjeF2PY"
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
