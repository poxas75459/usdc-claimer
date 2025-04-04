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
    "3KALGhjHJTJhV3BwgxGHyt6BbArcXKVBmk8SLgxRFHGn7fAfYAsARzeuF7BzVAEZZoTDGWz1wCyJ5Vj5h8iDdjWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xm6CZRLwJSJTSqxTH4vxQLFoXEb31TydGL9TtFjwYWV5rntZFsW4VHAwXvgMtApX4MV5Vs4ke5k2i1FDb2rQhBW",
  "key1": "GmY4TkSjfXEUzgsbQ7uoL5BwBpL6PVwHrqX3v1ASRTT4vKCqawGa3U7gZxcbJPtigxFNDpeWkt5ZsPwDJm7eNHF",
  "key2": "2VFpLz1fY2XD8ARg5PJA2fLHwhQyLTLYo6sR9yDxUGG7Yryp624UAPu5HWUenrq3zTt89AaJ3ZBvyASQtRxsZoEb",
  "key3": "cftHXNFAsEa6DdtAX7fS6vT9uGcno8WKwyqK5cek6nAfE1RTHE9tSA8BeS2e7LG8vHtQMzK6kahDEFq2qYD1XBW",
  "key4": "2rxxgGD7B6MKgAJU35ZbsR8yaBXb6g99Gbtstysfv6LAoc8Zt6RcHQUNL6HUZgEr8T5tyAae42vsf9bN7HijEgSq",
  "key5": "3DWh8azG9RvS87ebvhu7PNFzQxbUnMPQ2D4SkkSgCkExQUMw7uUVY4ChvGwkvYxjkr2PyekjTLgeHFMZifw3KZZF",
  "key6": "3KhcCN6HVuGGjZrC7YUXGEn1mFX5BRAyjUVJYDji54qXg4TCwXsWKMqRZok7WN49M55fH3nxM2Kh1rxtMsZqBeNB",
  "key7": "5oVvRpTtvydZKHpRYXDkLPFa1T1zzZdWDTqsQkaA3J2dFzULfCccWormhAebWrfnFYwhU3X21YB4HLmGhaZEXK3t",
  "key8": "5uFvoaGocKMhj8fRBzur7yewmEP1M3dozakg9UNn5o6nH8fzQuEBB62798kSXERLbZe5fa2UpEm2u2mrYnZPfiSL",
  "key9": "5FtE3iY9qbuon2t9UkMwtZUDSxpraXms7tSYkBTuMjyn47dzVQ8VjdUHRq2oKwHNfpffqwJ5xsSy6KXrNUsTkrq1",
  "key10": "21oKxnVBCGjihjxX7xGNuEmAEs3DGmo6PeNT5icKDG5SLfiniHV3nyeBhP3S4KQjp6B6qVKvb9Phvze788knfgNs",
  "key11": "53RbrWR3E2j1hDjoyiUUz9rk6n6U5gvWcb6MJKdVDhK73NShfebqGRFyjUdFNwBhpBgbJuHpWTNcsfThcRbWdTHt",
  "key12": "2EGLFWkzZRdLX1sRas6wCuvLsmMUsDwksaXvx6GXr9UZaM4iG3xaYvb7De55MRh52zYPxNytrYAkFrNqVGU3tjC2",
  "key13": "6UTiWP1TBmwqgFvFdgeSJqiughEurZz2sGeHpKPjvX2HjaCvJMhHJDDJk2coPeoMjzLeMKGvwazctMHkZfYf8Lr",
  "key14": "4gXi55EAr9ywRWhFGo9RfAWbM4hsgLnqWRFVeehLdaEuLCNamZf5pghGpygZ1CfCJbbsdFVVFhHqh2xJHDWXSPCL",
  "key15": "3H21AwAroSj4Afb37npgYRUiDyhxN2PBzVoaPso57afJhESEFMjBDXipCLLqp9JEwWqcXc3GRbXm3iN4ZK3zmj7m",
  "key16": "23uS9vw9uVHHobcjhHu6QWyzpE8ayiieMw8GHaaSD3foK2dU9neAASmPTXneStUaHp5gS8bAK6rZsjBFS4GzUmgS",
  "key17": "5w1FJVhnsE9F9Qwm9PtVy94aGh4ukZQyNyhj1ivuRZYmqwH9yJyvZ25nsWW58VBAiwh4THYgTjX3QUJotqXQn8pv",
  "key18": "XX7LnkQ1Abywey8e9o7T87V8Xzk9MNNpN6YPk9TTSsPoTFbNxVu4X6iG3sDFSngrF2ETUv6ce5h168Zw4RN91E2",
  "key19": "ruzcoaEhLi8H5MoH7wrWzRmgE5q8gESc36Akrz668GJsN2zgP4nrvDMLzmkJTu4tAvg1RG6qC7EUyZ4JcEoozrd",
  "key20": "2J2AmytuqFpej7RrrKSgfpYvLCqXB9gQc4ZZ7XDek1nxYVyyWZBLhCwCWgHW1RDsB8P956vQa2t7QxqSbokE8gWL",
  "key21": "xcBmQE4r8b4xdwcW7sjpu4zfNF8sQVyjRfJTayiMBm9TCNCrPLdyYy6FmQoT93PdSCiiA5Livb8gJDA84UinXxZ",
  "key22": "5NXZ1pTZGeev6vY662TJ7kfHu3EKm47ZjpDWkBAYwErduTk8HEHNgSzEwQzLgn2Mk6XifcubhSLNANWckBerski3",
  "key23": "2ezNG6X1BErHkDaYLFnhjhvyH2yUrU8UoBmuQqoe3dPtykUzjLqKx8pcKjmp5GWT7rNu8D7u2Z2p2dMKXt2hHWPf",
  "key24": "6ixkHLog72BJ57V6FssBFVrjLNvKPn7DxbyCAi45XjK2DjDCe46Lsx5JfoebAqfb4xtXrWaUsqjHdhiXPGZ8nCs",
  "key25": "5PLENNn8xGbexnzjMdHwV23z9gLbJAWLHmotj55DTd7GjhAiUuPVEC69KCvc8Vuf65YuVtVfcSAWHCssTK8KZ1xp",
  "key26": "QKQAz2CgK2qg3pnQJG22dUoUMZ6WvYSUfG5xsvVNT4obSh6kWzk9UfYP3AraAnhBDZw7uufSpEwouM8qyf8Hbyg",
  "key27": "2GNWBMMy8c7RoC9WjjerfwpegsQhqeR7ZArCvA4PBNk56FYzxMJH12adq57MbUTUCYvkyABpsTzzU7xqBysncyx7",
  "key28": "uikaujJDfTmHHcnCnUnYWrHGVn9jRHBmATqPuToH2mDtvtLspgNNG4KqwGLnLrqvvgDFLqB7oc3GCM5z9F7WSs6",
  "key29": "4AM2dTzDHT6WVDEpK8R1UxcTd3RYTm9RtiFosE43FqsXnnEVJvSyW1xHMxunnTQD1gkqFpAaaCgdHQdJnXHfYm9Z",
  "key30": "5uk6QyAQ7ssgxrnpJ31DJG7iXqAmApNgaHHyxXE9kmhxhd6jAz8EpxiJygqAZ7FWpYPDgZ4zKRjyVR94TmhkZa8X",
  "key31": "23tp8ka9Rj99G5yMie44WTXMkV4Jjp93hwj3F1Lr5AJoHQ8WHxVBf9Vazin4uJaib4gm4iDSPmtz5YrghZUBpL9U",
  "key32": "5Mjm4Zi1wTh5a8Hj5bTuf5jSTscUv4vGQLpZ1tDXsdihmtLdCxvj64dEj7taNgdFfbWjHfnBoMw6qTafGbo4sErK",
  "key33": "4poW7kofkRxTeYq8QXcdgLwdCNzpiBoubgWBwc3SmnBNVQCpjZCMZMvWbadJ9vPoHrSbL2PYvmUPubSoTDP6wgcd",
  "key34": "Nz2zDgfyFrrqdAsojGztDK41qMKTPcVq2SwhPUgPHrtXgd6wzujJhC6tzwLV9wR7EhnZ85Zq6nBDYrEFN4Vrr1h"
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
