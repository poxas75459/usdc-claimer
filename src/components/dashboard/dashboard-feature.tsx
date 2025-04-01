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
    "3PRgBmbgTZ2a5hZZ7xvVHGbvJsY2YxByZWRHg3itkBmj7ss9wbYz17sPbRGGJqg1hZXXcRMYuxUD3apq9zKdEtHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acpmgLKY75XH1AY2MmBLWnjB4opfCYPREVzVj4Fn9Ti1wSusRKNA66FjRjehojbLxpyPjXp5R1HqhEteDPUtE8S",
  "key1": "kr5oCjfWpqUgZ18Sx6Et2FQf7boJFxpuB8GcLLDsAeLjRyjsqxLD3ocTsCCebPy4YpeqWGtjCeUzzAYiYEaLLyJ",
  "key2": "3MzdXHSDbjrcGt9HyC5Fc3j15zDLDdNUo1d4dkZ2KEKQDp95brbWoYbSsV1Y15UN2kv6h3accgtQAir8jCvSbRrL",
  "key3": "2tL6DqqFs1k6aZTEcRCqqzCkX64TGp6M5uPEoqur35PnuhgCefm8xpZLVgHk3yirPT37jrcxZascSbXb2g6uGnBW",
  "key4": "4xh8fgwaL1VUeonbZ3csypBNMXKq7cjyBgfgRAwaNEFnqCfspkVotdCEYQN9FdXczcdnsNiXKpCP3SW5FYoVVEFW",
  "key5": "5RYe5LnTEGe4AKbhccdon7MaC8a82pieAAy5JigbBHf5bLeYcSrSUchFh3JPggn8WknMM2NZ1BHxHWEP31Z4i8s4",
  "key6": "54mBrnpG3nxQspZGoBSS8FPouuyJdopW2kMN8dV3oKnjagv652pKEPxKSU9zizuG7rjYfygoZD2TVhBCvXMYNfp3",
  "key7": "3WDaa7Fr9cPLqbJW5JvBndp5WwqpaGTobkRafzJbU24FiMfnehaLZxk484KewdzCXPrSKYEXE6kKm3Wg5PmV1FEc",
  "key8": "MquRP5ct6u7wCknPGE4qsjEyhV4cuQmjBboZQ33XaQqHuBnGCq1TfPP1N6YfUNgYBEZBL9rZBP2pGqfQSDPM8z6",
  "key9": "54y7nm3aMj3e9xhgc8UwrJ6ANwcUr8qSk3vxNenezVeS4F5LUz4nKJvgYSgd2v5yYhC4r4DiQ6aZ1CtgUjgvodkD",
  "key10": "4BmpeQsiDuYvadNVuYsFUnnsT99eUdU2tnoXo1E3hn1tiYc4FWiQ3r9WrZSgoitLYLZs8nqwCEtJP1hx2wu8VL5x",
  "key11": "taVSHdgzwr8owf3Pb5PmdkcGowJfMYrX6wycndephQQDZ6q22Yh9z89izaKmTQgvDzTtQhQFWF3KEUcgx1t4ko5",
  "key12": "qg9fXvgMWhXgRksevR7mVce7WsGVUSd81mdB2NwiBWCdTDJ6RzRNvNMBUsPn5dz2UcqGFkYfptEtn1zr6QwRPme",
  "key13": "4bwsL11GsFnRDMrjN2bmXdYEzsUPYjyKPMgTXVe2Njo7HvywuFqBhgin2wMcGxZAQZ642iLbC7h2rX1RcYgHJzKk",
  "key14": "c1L8ZgEiqSh8Y4yypR7jAvuKo9sDNrqmBz19untWsXtnpNQF9t6HsM5NzoPpZ4AvVRbBzgz2kGFLpv6jX9jeqGe",
  "key15": "42YpvkLiDrdHTF37jYPVE24WwZzJwYtJDkZjnKHN5c7Ba29KGyPjUZAkci9ypfq7Nv8FVBLBDxZsA935KjwFztUz",
  "key16": "41UCFj32XcfPwqdvxkG2DDzCAQWLDUTPvaUx5FMQw44uFVnexsgMyxB4GMKfsTbZCDM2qXbZWT64ipAQYGPBQV5b",
  "key17": "5xBH8edHSHVEo2gsDD3UnEVenj63cEUNexfeM3tuNJb5V9J7bb4bZTgqqLB9PjPvq3VRD9iov66tXPA3KFzdHfBV",
  "key18": "3E24xQvbxxmXuF69c1chghnsEVJJNQP1fufBWT9B24WwAp76s1nE44AQbUNsqBjwRd51brLUzA6nq4p2iMT8GVQy",
  "key19": "4JYzWXSPSyiouDtgHQCAHzEVwnvWZBjrVGTsmxJ1gMK6rz157ranHRe5E7ZS169sqDuZ6zWy3qPHxsGZgn9fP4C",
  "key20": "3Cp1pbEyakJSvNQzvCvFnzs8HEUv1Esr9i5eCYcF88PsvkULgEwohS4o9x4a3GhbioVRcz4h2oga94Vs478jJAmH",
  "key21": "C4dVNoh7uooFc5kqmzmncTJGx1h9vQegoy8DbFrGKpymm4XjKDCAMJuqszKEsyhKQJUZFqZyqv46zjDBp63vCwz",
  "key22": "5F82P7iaVfYwX9xaPXsT8GCv5Hg8ZDNV1soakMkHkxAcJSjuuDv4MhHD3VTuJafeB7aChMUASrCrfNBKnsFPec1e",
  "key23": "2fzZ5k127zCCAbfaSiACWEEi5QGoWfVuSe954AsX8Jr92Y5rkjNJB3Vw82J3F7GE6CSjniMZQYeY5kLdsw1ZMHho",
  "key24": "hVAowCodPnZkgQ6SnPyye1BFn3B61onc3Uyamvd8WmhTg9BvA9SVYD7Kqxocqi6iwjumBX3dW5mCvt4ZMvt7tou",
  "key25": "5pveFiUdiu9RbmKFs6jAkqDsScE1EBHEevtpXC9dfcDMCbYYfwYtu4U8jR6B1SrvUw4hSK3n8aZTVMCvZmdXrnX",
  "key26": "2imZ3HL3Vo2NQNUaqk8QJoudGVWQKwkBxg9pC65rH8z2kPVDj8J9Z7tmniZrUZYKSC8AiZY8yhgBCqcrRNATkUEs",
  "key27": "3pCxph8xu9KMiF36XSUe9UejtNHehhSc8osRW5LjFPyJFcoM4NB7sh7sie3Fb4ATZvirEjGcDGvkmxqu6jHei1Qu",
  "key28": "59vYcuBaFcL5iHK6q1zHVM7ZySw594AXoYfTMPnC6k45RWQ1nUfdoNWWrfZFpGBBLh1p9XK12TPvXeEH5g1D35LU",
  "key29": "5W2tkp7UU2G7WiUPtZty4DLUHrBheU2pZURYcCynpx5PvDzgWipEhJZCz31VhecDizxHAqkW4V5RgF3GPnoqke8L",
  "key30": "4UDnLytunYhn6YTApgCoiZqjZZZSejVgVXBuPEJo55QFkhwBea19pqWgSb2bZWukRZs6wTn6tM98hrDio9iqaSui",
  "key31": "2V3LZRCvu2NrGtMuhKjHHnFhuycrGwPaCV7fxRyqbumhnW2dW5smMKF5B1ppft4ZCka1T4NudbhxpEtMLbTVxigQ",
  "key32": "4EmEYGtAiUGo4oF3KnpGHJbfyM5xjgP37Lma9tHufPvMyBbwfnBbGUetHqWqMqMiKbWJbUdhL9oRTHPS48q2MTVA",
  "key33": "3Dyrz1buPpyqiUMydX1hHfYCi242poWjfYT8NrALzTDjX6aqBe3ZxXuCu48HSezN2R5PeZCoxMobhsRRGyJdi7mn",
  "key34": "2X7NwTwBrwVnbtUFvsWkuGRok6F4Phg1tnwjrtGLbSMtZ99wn3d2qx9iyEYhSEYXVZDRUyUG5jie8ouAZH7K9wqH",
  "key35": "3sLCjtChokeFUr64FMi3WDvmfsVMQ4rkgvXLApZUq3SozaSW6TApHfgMvkSKZdety55bdHfGW5GXejszJRomPJqo",
  "key36": "4voxbqh5f3kq6i2NHxuXth3SsqRNgRDCPXAdb222PXzpG2NGoEM3r6NixBFnw6aQEHG8rJXEFDNTiZZMQ6FrZyiH",
  "key37": "2d2vCQAZ2ew69MufiD9KmGvGsPYfZbemscN1P3M6gAsY4spzePRmCSRFB6fwFmuLKzW1UXT6t4rCFCxbjZWojAVY"
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
