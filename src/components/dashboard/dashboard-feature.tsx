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
    "3tmG9BHo7zfTEyT1uNjzVtwpAnpBGuiXSuvHUSayrmZPBCCWgVMXBdsQLBDB32L1SHwzZBV36KHmz4TPGQSA1NmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iK6wLzv36pNhhTwVNBvsYcv7wvNMuTcyDit1FaARsFTQaZNgkQwUyr186qhpFyMCQYEgixrgqr3EPmrMhuFn1QM",
  "key1": "3wF7VG6wFayNP2qcrxYqWfbLAL854xM4Nvf6koe4YU9JiFyHqMsHhA13qvRJeuwT8i8unnVDP3P2JxToVFqh6FvQ",
  "key2": "4LE5LGiKXX824HJoaV5rkPPSc2XR44fBNY8oxuzphTWd3dvaoe5n1X1hVj9jtMC8mNuHAEuGAhaaujExMAoLJf1q",
  "key3": "2qVxSTPbtfvEbhASjHEPZrD3xnLpgXKzrHeAysRkDBHRyAMdSAdvDE7FxJVnv1dqdFbzosEbmu9W1agBNy9fGLEc",
  "key4": "2cppUh8xsTUSKkfHDJpftgqD4XiwnxeErqDpvoX8mgPjZdeXJrao5HhcTUqTgFRmeB8qkghJ4vspsEa3J96MzydN",
  "key5": "5nUYhBstQf2znErTEhjA8ieJxFznE7n64MZoNWR94nD7Zvnj8hSo6F1qUK4pxyW7YdJcKQaeggjwmuewmnfjCaLG",
  "key6": "32xyp7fAp2i2PFnfPWP2LMAu3k2qe7MnzfmttCivqTg5yTiL1TiqbUFmUoXy43QDYPx1gyGz28uXUZ2f6ZpT1MiZ",
  "key7": "3zFHdRN1gW3d4SipppybnMSxvSr66SgbuPYQKLWx9JadKkX4spajdE2qNJsAcSdsJWrQG2AU5wL9EYKVoQ73jUPE",
  "key8": "sEfFgfULFRM1KspuxhMQgu7nZmW9mrYJMhXS4G93BQpV5cAVx3huB7uq9fu6DXFrWMXw6u296wUhaPrigPxsz3q",
  "key9": "2MefqQEPvSrUKnYWJWRQsM2L7v6hZ4fSw8xGJEE7BQjYseXPwy5UW3sGZNZPpSFjL9vPaT4HBmhFckquqjdZNXKA",
  "key10": "5rK1xjXCsUjAjyXmjoSyRdaPaYGjKbjnLMPhbtSSPUr8GTcUk9eqtgiJVKu3bJrkGo1t2GDWmfaW2HzLaDR8SRwE",
  "key11": "4p34TSHevrwnquvCXnt6HxdC2AzC55vom8jxe3H47Fv7nUKLu5X2fNv2AE5mmtm19MW9LMAmuj2mhbMuEAuqBfWq",
  "key12": "4nRQ5evcDYUzya67gmXaiZsDgyjD5WBFhp4LKH7YjSaXgaJHyuLvWFuV8DWyLNgJKqxEP6xCh5VjhtDqNuD57yUY",
  "key13": "51jxrvkVU3vaspzSQ5G5zanF2jMjpJ3H3Xuei3JgqAs5Gb5vjmrPeCYr39kdjiDAuog9w2pncKcqyW6vqirqasjA",
  "key14": "62QhdUcZqwnZduHkXzc1gHNxUqhDdXspSixfYLfWYDKhEfMfc8iQgohktRWCjkFNfBL9sj9XGCXuQJnRzmGU5rpZ",
  "key15": "51CSCediBo7EoNhAXzJPNFfPRQCzaZCxowTZqp61Q2eedmHbtRw4dHhjBWjAjN3EojRiWR3aCe56dTA7PYM3Rd8D",
  "key16": "iwYBXnpL553YkXHjbS6o964FqhtP5Fbz6csBm2gmEA8R9w9R6J71BuzDhvgkcvhTxdV1U59LnKViDTFEdggWfWL",
  "key17": "3HCqYjmJZeqKALGYh7RdVBooC6tzUdfAa9gqDAPrHc4Vokr3ephcwpXrPS26Y12XwBjcbJKthWb1qJrFSB1KKzm6",
  "key18": "253kNc7W1MR2oa55E5nP2Q12GNcupKFitHvbYciuxiHh9MsbWpRiG7iTrMy1Y1vCzdoBFFDBCmNeNtKEGJpL5Gd3",
  "key19": "67PuMx7NHmLSq6tuVbdUMGP285FPmpJTN5tkWJdY5uQMyFHKU6Td3bbWjAdrSLiUREwBebd3FmDg3MpZMMgLAgha",
  "key20": "3fSRCfbc6x1F84jGFiLEFLvFU99eJgsTosKBHDWUdMakUbJownodiCjkvQcMT8C8HoNgNag1ZAgj6oLAS4VWaqZi",
  "key21": "4BTSncHroyR7wXV7yQct6DPznMnxZnAPCnfGqqgeLYAQc9dXo7oaRyDzZPy1gaqnvzuYQtXYJrBYsS3m72GPiono",
  "key22": "2NXEV3RRvBTDhF8sKiYuRCn2dg21BEonDXVJop2NjUthpJfXH2EMTVuk5Kda2jHH68XMreUm7rDM4ezyYp35Hbu3",
  "key23": "5CuGHga2fcT3khwSwYWTockJzAoKWbwmz2x3uAwwtG2g8LhVdZ5QCroLAaJmi4fy4W6CeqKBJJYQ7tY8JpssabxG",
  "key24": "3ecNbe6Jm4Vs8oZwBareDpB6XoAnaioAnhF9cA6fjNs4fUPzWgXMsWaEgES7K2JcSzT3q6T6d9ZziuKa7SvNyaqF",
  "key25": "2jbADUAvTRi6jNLDwGLx6AffpdGe71S8D4G7axm39n9GRVKhTeYV9BgDr7c9VUdKB4CmhM8SGmAYFtUBcVdPutL4",
  "key26": "2A9erVTnk6wJJsT9zhNUYjtzzkUi1BZTNwRwM2PAn9USP4q8fTLFkCC2Ft1CPkw53CS1ssY5e3BVeu7NNjRnVbn3",
  "key27": "3TLnWPDC9QBxTAAfZyo9ZDNhSTxREZLs4WxS6mJEYP7C3b2oBJuZtJMwFYGr2ckvi5J5HEgQhbuto2YpEcrF8kE8",
  "key28": "3qUD5KgidXKaG2esNcNVVtY1mGhETMbff4xHWfAh6spJmnw99hWbwvx14ToxAfnM7VHK8uPtxoHgzhsJWsidPNWB",
  "key29": "5NPXz7Z2zEYntenVkzYZAxwT3J5Jhggyz8WWFkgKraWrEF487TYgS78deV8p2e9AXDYmyvfRJ4MxxEyxeiT17r3m",
  "key30": "42HpnRaP7Ez8wUcZyJrqn8BunaDcvZ1uPza5CyeGG7aM2YisEndgcTPoNJqSUuXCc93aTyYboFg6NtHsqMb5m1z7",
  "key31": "594p7YRRQHLXTmKr5UTkMYMmt8RR6rdjExXCPf55JDoCc8xG8yC4wYUD9Bcwq6GB2qXzS59VeGDkRhM61n8adFQb",
  "key32": "4gAUP8W279Aas8kr85fgQn4Ucz9yNzq3HeFQdUh4FSr5sXu6PChQ7apVdbz7a3rinN6ubozf4GdUusayrHp7bj7j",
  "key33": "5k9yji7PjNGgcE6NdXFbxTRE39gFCGe7Yg95Xc3Lj2XEQLQ4dUwDuehbdjyJnnizwRJNDPwHKE1fBx8RY6XPvz7C",
  "key34": "4MqQPSES8Kn4sQwTRMAp5uXE1HsfVqgLt1sRs6icG9AQPkgLi74S35sXkNWWWGFvHmGJ5BFcUKFod91K2kguD85H",
  "key35": "2mRZh8bTW9Uw2FuVW81tW5mMZgQZCQs2EwyF4bzijR2k4D8HL5qTLQpo6eVHNyUNNeczpM26xqvKcRgYdVSMvpir",
  "key36": "puhfE5JPvt8C7DAvZExpqWHFNT8Ye6EKkHKHdCrZX6azCFJE63rueTLArcAzzK1ZXr9nRaJwyn5yUKpZ5MNZiUQ",
  "key37": "e9YWzrAJnM4eMbnSDWVkfzjHJ7tAHy2BD3qJvPg2UR22K2RuJjmNwQue39sLQi6RYnDb1T4R295jNZAkem9DeyJ",
  "key38": "4bnzy2A6GaqxXAttaFcALVa53kNWSrrTHBs7Sh5cqEPtX7DCAYEmU3rX1gP2fFVwVs3m464RBRPst9SazqQ2NqaS"
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
