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
    "3apGQZUgzncPzLP55ZMtzZ8hgfGxaYUy8vxyPVn9HCrSWCKquA3HjMsJJPxSPhUszYdgrWos5ndyvPKeZ4Qypwe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HjSJ8pBSjtvQCpJx7jLurqhtht6TUxbDt2kydfbmLbLpjCEvJQm7665PPQ5KbT8dV4aAgzZsq9xoXPvX6Xv6HVo",
  "key1": "5EU58hW7nkvZ1DsUvWZVjJeUt8PUkEWFjz4NUGdJuqru5nFVacS9fSuusoE8jg6k4bCuj2o5Zrw59WymbJ1Kvnde",
  "key2": "33B19HXhSjUvTE65wCko4TT4xjr6yESuKNBvUUDo9ojw4rgEd7kxQ9XjQqRZMLojCxkh1W5SjFqHZK95BAqzs9zE",
  "key3": "wFvmDRk1HuM9yZPmzWktuLx3Gkm5hZ2AWiqsd1eAmucfK9dp1oVXwPvsHNdKfiR7kGWagjHB4qFtrsSfaHxhaAN",
  "key4": "2JxHiPCMmPS6AusRyYbAwtcH66TL71hMBSuAvj3ETPaJZgb6WW9rgQUP637pKLq6WtK5QThs5MALkwaBX5Mh7LYH",
  "key5": "3MzSRNjaetb6tDhACP5NrBtMg39MrwNDEBhTEByL23f17wVzZLQP6QSG1j3UENJ15Y3jSqC2oDVHx596FBoTyEhY",
  "key6": "5ux8StJebW5t696VZA6hCkBYr1YcyTKntKNEwVpkoyqVkqwd9zzmopQsRUyv1hPuFGZZ5QkNTKPPFf1AU6GkgqR7",
  "key7": "4wF6SncQFHkUjU2pqSRZ86HdYqa2yvbrbas6T4aG9fAQbfVNu5pkTHCwSTnTQKcyqxQiVvGvW8pg5B226NsmpaUx",
  "key8": "3Ad3b6LKL4bRmu1NcBHwwQ6Y7gzx1DCR69zCVkePeyHzfTSkTyVaEi9xN6tdFy6LSsgyCXaaiY3tLwbuTZ1LPGAY",
  "key9": "5BqNHp9GFjgX4YFgWXCZomS8PjBGCHDvP1hnFNHDMv4Ze42fNNNTCL1k4KxQjULWUTWdCP3EcYrp67W3h66zxwBK",
  "key10": "5da2SpMoydVGmokfVNNAcyU4gocePnmiEqDk82dfLqic6e4nV2uoUp8am2kRbYWjTbuwTp49GFPoNsfHX8oMWzcK",
  "key11": "314df2fxjKnavGAgvJm5bMnRaDJT8wuoBGEDs3zRkM2KKs7i2jCva9yFkegQnBww6yASw2oTS4RyWNdwe8kdBHML",
  "key12": "4kWjx55odKHYtyU5vYRL3gbB6Cu7qzJNrwpdMNPgj9TVxjFqSLJ9zQoE9JGzRWYXkmNGJdJoqo5mqLTELhTvuFPu",
  "key13": "4D9RZPdY1zhDdQQruDzHqv36pb2NpYteGLJ5czydETu4NYaPyxacSoq2NrgKCDwSQ9MoKuP8Qct7Vj2BubCYqMmf",
  "key14": "2bEBcs1jSL8gBcTtN4aTJtp5GnG2Dzny22SiWeM9U6cbe5Rrf8ZQ9FdCRQtTS827ZzsbiwBoWb7Fb5n8Jwp3o163",
  "key15": "4stHhrGN8t3GQMt2RqqNbaeSJtEwX1Cwtr19rMpCfgnv7C2DnMXPouaJ6HS4G2Qkggw8T78HTUastBxkQcvzYK7j",
  "key16": "4qa7rPC4YzYSttfawhteDfbzhrjCrLZkmhj92y4kmvbuU3LM8LddeKMobPwCxzowKvmi7YBKMet9814xkMXeTnr1",
  "key17": "2EinxWHSrdqKpTyvTPfWwUSDpjLK1ThHA2ufYD77nSXL9jS7A2zTxkrS3GtQ9ZJK6FJApobdNoxPkhYtzxzGjYLB",
  "key18": "LwCZ2eqRj7k1UjPp9k1BEJWCU7HAAFt6HQGCDJVVuLe3jBwXJgX5qfHJ1S2K5Ykb5ZGt2RuZjmRdvmiMpXrP76q",
  "key19": "5ptr9PsyUdfokrxvDuYt4QVf8Z2hvHL89Zz5DZWAfARnwzVeA7jyWYpFiAt9oyo3x2RteqvM9yzeiXCBvp9rTas5",
  "key20": "3JC1XRuioodeCRS22P11mgYsGXJR26WUqjczC9z28rHxPSv4ej3vBSkyFPEtHEkkzscPs4twwJQJrK4uB7kKWc2K",
  "key21": "5WczN4BNKVvM2WtNHTzSc6bn6Cwd1Go3efEiVNGRj4VJTGQKSXC9KFtb3Mv6WG2gDkktB89gGpJqAKnxu57udBCR",
  "key22": "29bXk5URVrKWV6aM1BCyh87dt21Vvp3t49UWohxYu7umGkSrs4C9dREYmBi6pGvSzCoS6dehbjzu2tBtjMdTe3dU",
  "key23": "4mv6CWJVr4hBcRGm2p1ex9SFYoQfLugUh9dfNSsduZcKzFSt3fCiEWYxn9aVn9wPAtwrdLHbDW1VjEQ5ZMD9dqet",
  "key24": "4AW9Ta9RqUMQoZ4GR4PxoeHZ2K2i61K73vMd2pXZymBpSPyW65kmGWkfhYAiAq4LnP2d3GdaGVt9vwh3b3AnjheH",
  "key25": "T7UvyoV1Zv9CyHEQ7o1Qv1ym6uXSC4hr7hZhpXo6XXDegdMWrHTDgPtvCPXcg5mvQJKMthZxQifhp12g3ZefvK6",
  "key26": "eQrXgdPK1NtzPxLj3PCfzusYTks8FFr5rrvnzC3Gz4ig6VZSuZFedEN9k1jZnVLCrvbQBUYcTiZA4LbrdHhMUeB",
  "key27": "64xtYrSWHeGG433WMXEugiDCZtzXmD4yPpMPi46zpFsboHcYCw4sJXz8FUUvync3jYCoAtgHkp9DyRUd3Jq3bZjF",
  "key28": "vtwQBKWcjHs6zEuyeByi7oQg6bMZr6viui3eTjSqdZULG7RSCi39QjYRN94v58vvxouhK6DGLDoTE9KasEotMbJ",
  "key29": "4LmPj9xwAyL1uph42BETG7tsB4HGb4bRAChreg3QULJRVVqHA4AhzKGXeLSJtuLMmUnxEXMuGTpXcHMLRqHM2dTH",
  "key30": "41Mi5cyGiiZ14v4Q3wt4G4iQ62756dm4KdyY4vrCz2v7WoQ5M1mfdjwwstbRzvVEH5HUUhHhrmMxwjFZriw7d1RZ",
  "key31": "3KReaiZq2ENUBZqSvzE76YAkVwUQnR4uHJkG3G5zv7oVrYeK98JgB9nBW99KrEe1G3i1yuZJvhk7j5M54a6xzhKD",
  "key32": "2znTPemkTDAcyyMoLi5JnXrEVrzoixzVodbDFsdhEBsW8n3PxUBvJLKgRvx3HruqvJD2cyAawF7JwrQs2SgjVYFL",
  "key33": "4uGoGVwfJGB1hkZvv5iWmcgazqFZBFrkwbq4ZoLU5B1BJJjwLEnFneE61Na9f43TR3sbB5GDz4vLHiM7rvQgY4mh",
  "key34": "271whq7565SuYKEP5P1vVDvVi5enLjBbV2oVqf5FxzdSwUb11E6LSDAe1b9tVEbTcHY2DNifYa9zM6Q96X5rSTw1",
  "key35": "3X5UWouvuXNT2Xkcodg3BHF1bRydqmPUzZ5JABYBvh3wQLbC5EQEJhW3j99J3vbvwrvJQihRCQcKfP6mksrvhAE2",
  "key36": "46xDHouzVs4DhKCFq7baMVomvB19PBLpyynUbcNyCjFp9scpoUXabmC6rkChgzrgB1LYJYvv6WyGgARjezPtE6HD"
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
