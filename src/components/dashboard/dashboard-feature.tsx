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
    "2bKd8i4YYZ5pH6ZxsgAG3D8GwYN56YtEPuwLxtt9dPZeRcJnWSuCbXqh3ztHqMiuLJK9thjkGcLfi8DUwcwVNjr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Am45r7cHpi8ZXpibPdhnFhcK9LjGgVKMyYERE4vz2gyd7htL5TJg79vKEN7mz33JCdCDpWaCyYbCMBqU4b6wvQ4",
  "key1": "5nfFuEHJSjhZrnYRijxP6ePBRzA4i9QEMUBGLRe6tjy8SygN3Gf1MphTmrtLqJNJdxL3V2ndoYxrq88MeL7iKXCX",
  "key2": "3kgQhGEsBqjBDtGgDhzuvRo1GoKBsj3YN1SMFLmaSqGjmuB5wYv3DoXW898RWcuKHC9ehPpk88jE4VrXEdTwaoFX",
  "key3": "2yYjTQBaSgE4nfzB3eTbC72zhVFMVFEbsaHrS99baQtYSBDp8GJyeaWcPz76yoWwHHpvzBS58p7r4yNgoCUYJntV",
  "key4": "23aa8FULtJ1AQi8VrMPjivxn3bmWhnbGtku3zAkh7ufw9nZsyxYcjdS7kqBaagUg94p1inCaiGG5fDb54arzqdmi",
  "key5": "4SFuYDqzpGTFGseDxghuvrHJmXN3TopgEbgRBTETEiZfoEyfq64k8k7bw7CM8nNQ2R2sEyYomdhcwgW5PpbDqz6h",
  "key6": "4QuL4k6ccwyNJb7qNY1ukqamZgtfSRmyV33iGGbGRFaZwprCLECgQ6EQPm4qh9cjz2puwbXuHXJrSXV71QVpHHGp",
  "key7": "3byxT97QhEnr9okx5jLn3QWdYNHGJj7if9Eh61vWSFjewVXSgML35u4F6m4t8NQFn3c3kp9dwqkLFeghy1Nw7m5U",
  "key8": "3qX61MZiB7Dr1ZPcfM8qASwCp1X6rKPMscDKZU5RMQLmY3E58R71FoDsTjwsgT7pgxnPgwy4ihqVSdTAVb6he4XK",
  "key9": "dfKwd24dVHzUs75zzZjSC1qaErHQou198yxibQou5gPeADU2zdMSYVSPdV9kMyrQqCtVF85v2t67W4vLFmwAGm9",
  "key10": "4rNKt536XoDT4szVXF1rz5v7XvCfhnJN96VKfMQaCcqQxCRW5XjVgzvGcubZntBz64QtqggU1Goo1maAXk2JC2ea",
  "key11": "3Hq49QXdyUiKpoyVCUfqhVQuNTKP3ZFZaKWvPjaqPjhvrQ1Rikqi78JdFN8UQPXfLqY5JmXcpKyYXhjCMU7ofnNN",
  "key12": "5c5nrbNSj8X1pvgeGbweTT6rU1ntqrCEDqHpFg4MWw8KTm4g3aqip6ojNiJ3zQUEB2KxxScLUNcUn2k3DKcbAm45",
  "key13": "4WPDCestkn4m8YkQgda9QyXwETiPePdVKYUgscX79ozLJWtYoLw58ckSek2LPBjZacFaNjZVB57ym4x2wkbygxRV",
  "key14": "2Y6trbWUUnqXNkjj41iSBAKERq1HXCUxozvbQ2H1kFkpyyzijkwErcAr7WxdjWSaH6dqasD67JbzZ4tBbY7j1JXy",
  "key15": "2SxAdEMbBWCPQ6njdXQMfKRaiDB4sBTmd6xD6yEwrGdNxyS5E8xtuETa7EDyJrxf5V4FGFZeoKxm9pK8VHGYVKD3",
  "key16": "244DAiDnkW71K7DDedQWKuuxC4vTW85tnJXrrgk3stpjyqbsLz5xnmumqAj7fec8kAQPjWrNzKvtjQRVEJNsRgxZ",
  "key17": "3c8pePF6AQeqmxXBn36ZMQQDFfKmtSQZXw8ftSy4FhWZ2Nu6DF6J65reH8p99nFo7VuZvFXF4HKeLQ3FNs4Ec2vt",
  "key18": "3Df2hfUcSUeUJNdiMigPKtegdrfQtpCfWD5zhubqL7JsVn9AKYiAQULvdBb7hL73uncyAgpDMGKe918NpLhc1ZXZ",
  "key19": "27AeeEVq2kNsMdCSFt27t9JsHbg2VGLatuHtvakx1vF3DLCLz1RSBcxj1UG9rZkmLMwDzxEcWXLCzPjrTw8sYSMY",
  "key20": "2CiBMf3oFad4Pyc6VgsH41xgL2DLD5wqADCUoGdn5mJ4hG3wP4JJwoxjxnT6m4TkHZ5De3fjtcY67r4qMdGCHugP",
  "key21": "28x7c6nNaE2RKUvs9gs115ZwnqSZKcN4gVBkHNiEdv5EHNJfbNQozJShV9RXjQHsEcPUAVvQW37GSiS4x61YkCJh",
  "key22": "4xeJ4KKgqQwuaf64worDfW6GLn8PXc2oEBZqdkBrpxy8D5jyCj12ghsou3gHhwchuEr8BYxdeBZJ24PmKQZne2X2",
  "key23": "4PUkFyQ3tkBAG6q1Tdtj6LuViJt2UR61brKNQSvJKn8ShydRZkdwvguCnVpCzWozKygARD8jfwPvxqaHASFBTvr7",
  "key24": "231PtPHDgVFtH3hwHTA2QWdCJR6rPNvQiE3H1Gpddk59TUF3tfRvyfUm7Nx7x58fCwZGEiqbAWDXT9M9LrbxQd56",
  "key25": "3CuE1Q6ZB9vJ9xtTbFYFCDuQFN6zJf36uzWz4aPFRXUjv5VqVGWTSZL8UwfL6NBQyvXzrFuEjygMTVaeZiemsTv3",
  "key26": "TFwsW8WRaL2aDCF9vhu9PBpx5vnhGL7HKfoWPiysbUsuemKQZXxNym6YmzKBNgSp21dEs6xvkRheSjSPYcctRqg",
  "key27": "4RrJxnhRceWgwDJLUebXKpx45BtAQeFB3SARNhbCegvbTWahKSSvwUoktVMu2uLhFo4sGgp6GiPS6H65aCpuAk6U",
  "key28": "2HxNG99A49YiLRtWzGVNbkyABDEsuw6AN7Uaq9wunSaMPQGpihUVkWpup448AF2fJeiZuzW4z6T2XdMHZBrLvEsE",
  "key29": "5U5LCaFSzS3vAD4HVN4Ur4he5SVctbj1C1da3iDyqXmnpM6smZAmqvvoBvKrh9GBjotACn2ftGzbVz9GrRDCtKuA",
  "key30": "5jSc8GCFg5iLci87edqgXkdrGue69heZty8T5xpeYJQowrk9bE2c1Kj9eoVQ6Tbb1fiNCMdguKWZXno9LCEGTaZp",
  "key31": "2hPP8fRBpRkWN71Sjdn8EWgJy7z8xuf5n5ZAFRXdgJ3RSuSdoU5bGnHc8DUvubjczouRaqXFVEQ6j2Je1fdpyJ9s",
  "key32": "HgGVKNNtvJyXGXBVNc8JF12SWV9CVEM57RMuuw6ihwJXApJRMeiF4JZu61otB6U8cNsBmKKkT51a6PquTwLdPqU",
  "key33": "4Q4z9k8RBcFj9t3bfe2Hfb2QqjDGtnvnwki6XKcF4QGQcVYoNiyUq4ZfCX68zM6oDxMSmSkyTcUqAvwTSnPLkp8s",
  "key34": "5XCWRQ6E29iK4JfETsh2yHkzTQTDyDbjX7hW9bgxq8MABkwzMbMrUWYbr5Qq88eN9n3D2oHvADw9Mn1YZ9uYafzE",
  "key35": "4EJccpjT3Qwi2qvF7QVbuRdsbpTyBUjitR2jo96RywRyarNbwMiHfwDavwqo75ZsnyNQFe1q2yqwN9cHxfBC292v",
  "key36": "58Gou3bEnwSJAgrP6TP8ocWLSPvBLtjjP7L241joLkxpXXY8Z6gAmsJAsFM3t9hn8aM8RgmDVWpAUSSmyaZpdBG"
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
