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
    "FiHCHp1JJuSjvirrwjsVQKvAoDEXQNdGUXXfK9978NqNAFzArNmH33kLJR2KLximqjLfgXatfp7auzC2X3iRBF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HeVpzgCyFohd2WLck4HmLgBBY92wNLqAU5Evd5zLdiBR5XWd2A6bjAC8EdVA3fNAjba8dx8j39ZsUTt3UyQBzDg",
  "key1": "41ETWn2Tc9EnMSQd6pYtS5purrUgT4zProPvd2QVGJw46tiQhZub9a4WyAafM73UDHME4nsb3SopSYvPUPq5E9N2",
  "key2": "596FNaiMToQKxyRnMJkA1zz6yuon4CihdWG7eQjQGrkwZkEZc5DdQ4WBJGH5r5ncDroaFgxrBea6WePFr57gWxD4",
  "key3": "41NT2fhCycC1th6oXN3RZBBBVavnQYGu2Gy344VzNJ6gaUeRW1KDwhzh3jA3YZxszWYSi3VkihYWH5YNvAiJnm41",
  "key4": "4KYKT6WEWjhB7YvEh3iC7CYzsfDXuCG3VpyF9afWrsTtcygXKFZGvPki6qwEXbS2ST6Ua6V7N981XdFbbAW69agj",
  "key5": "2Xii1L4pePgPMd1iRP3gxF9QRzJPCeKKkzsnbM92GW6qkz2AFkUSP5ZdEvrAqHVTUwYGC4nhZdRNEqrMZsoudvFP",
  "key6": "43i8PwkN4enJh4T5qf6Vety5JGLy6LY2Hz8LbgbYnJiCfq4FXMTXhHyw8eEGbvgj7W68VuBBKmZu984g5MR4QsWM",
  "key7": "5M2BkLqqvpBAPStAdU3dVag5qQLzBw29QenymhQeVZ6iy8q5kovUZXeGnsDtqFqVUzrxU2hPG5L3ksWwEVgXeuRm",
  "key8": "3TirwvKubeWnFmAwWRNsP9YgVuRT61Etdnk8pvbb7htQdZYru8DwSZJAyhSAHQqNAChDyvzyzvDh8JgcKnAwZotF",
  "key9": "RmRgmEb2U4gpNCzJf1fRSYijLirdyA2VCn1rBDxSP8kwUTeSEtwzdUBA3jToxLNkj6MaMLr9Rbj3Spkcnwmz92g",
  "key10": "hd3cV5hABnoqfqiERM2n2g1t7Y415EghjFmrDsSnnUYfzxhTVwX3hgeirzMaMHMY9tw4Mu62z2PeGJgQ12cVdVk",
  "key11": "TEsE7G2CWKmza75wGQFqCRo7TfsNYPoSpaakDyrNLRmZFpWRGyy6z1p3fBfTdhMJ22BSpnGzyRGoNMXYYeJ3drz",
  "key12": "4fus6bcv16erhMTGbPELxkJBQyXvhdEBBJvujXuMCFECLJQkPJfwQ7MsmZ6FsB5QDvhU54FKQ38544JLZDGQ2fy4",
  "key13": "5kZEBPrwEa6Ayn9zyxXbbrBZUXeRvk2AQjRBf5iMjESyP7vABd6WYbKpJedABKaG6g28xEqH5VV4MXJ3w8gLeY3f",
  "key14": "57CtTszg7hryThDH9Y6JQLjzHqx1P8eqguGR2qztAyzZug2fLZ9Ddn8eeuZLFsfBHZ2e74wwey7wKHxwNj8KuzZV",
  "key15": "2oFH3FcFEBYcgzcZ5z9wrSc1FMyxjEpwK2yBRt7UvCiheBXrYWAtrXokfNByGA9fthUwKDvC6FPzPMp1pZyDxrSv",
  "key16": "4M2nwtvu6NDe9yE5zvRNzYidZ9ZMEoZvrVic47C5CQpaJTUntUZGVo6ShSCjkYQjThnZE9pmMrwj7pRgz6QNT6wJ",
  "key17": "5Mr5tgQsbTusHt9odbcPBu4Ca6q7qDffDJnXMWsucub9pihRXbDpQMZnL5FzgZrdqU18ZG8gW6FVP9evAR3ybHPZ",
  "key18": "4fNddPf1DSngrZL3J9e2MjcGiQbykSDfKbCNDbSxvp5bgtQjVcWYNhZJ6VA3ZuCJ8V5FsKYpjuV6HEcaasUWgEX",
  "key19": "4uy5w85wJvFpdwS7VfyfWwjzXVWXJ13odyd5PYLiNWtquTB8hMH53KRgUbhPsfgsMUixZXMe448kPrbmP3tHkhZn",
  "key20": "4Dnw9JfwPJKv6Eryr4PzyM1hkzexidDYGYQAYekSZwTMjmc1mLuX78jUuFgJtZgCV4SJd8sq7AvMDDrHru8hkfS7",
  "key21": "4GZzrkgkbA1P7zjwLLJZPDZaamfKTVdDC56X5Vss2Jcf4gz3ojSTRCgWqqGLAuecmifrQbDUv9zEZhtp5YAcp6Bp",
  "key22": "mAKUtR6ZP2AeNQyLNGpujoPFhBEhwgAtFHCZm1zjgbE6YznHsAm5rJP3vDUNYYdWyksgjV9fVpNHBjvtENUusiy",
  "key23": "3pXk2SG6qe7AKqQiuVmc1JBcL3LRonwsYGbGysy4KjsqaZqYUYr3qtsXvo85GQ6ToHkXW7HoyDVb5ncWqQ1NW6JG",
  "key24": "5JsYuJSvJyQMY96uXBCGCPkjkEuLohYcPv3Hyef2dKmGHZv4Pu6St93bkPP2SSYCvWZEsxtzfvBahcFpej3Q9ipR",
  "key25": "4gQL5RLfawiAvn9yvPt81Xdj2JGnqLW38QYboAC26JVydMAXrKaCEQgqNuf4Ey74yCPmJ4zJs6W7VmBCmxgy32hR",
  "key26": "5NsqKbHgL4H5b1QHwXkifysqWaMpSsDNCxgTREfcx5TBwBwRDo5FP4GDkPbtnEoyjixaH3SFt8koYcaatjm17spL",
  "key27": "5V2hYYRKkZpZYKjBY17qTwMtqYWfr9VdXfmFNRxsos4nLg8Zjs8Esh2U2zgjDZ5dstyqVzfAYnbPVU91RfjHf7Cu",
  "key28": "4RZDyxBL1WcwhWEa7fL97ZGDuC6ZK56YDP5cQc5sXae6rDAeRA4YFdUkhytmdgZZ7NS4q1ASc9Xerqs859qSgc1c",
  "key29": "2w5eWNyHmRwNp6yvjKAuveSsQ7ZCeFEjAsmbNwtKpeDDszuveH9jDP4cM2NKvTxkqZ1CxirkmdUUUmkonzgMhDEb",
  "key30": "2DrYJZiYGR84L2VJEVitjxG57MNmTDxYZ4igdPVK65dSh46qn29r61wXf94o7ZiB3Hqds4EoeGNLVhN8oLByNa6F",
  "key31": "5xid5tZYWU6ThngsXZF7NQ3dk4WkQUAhpWCpWaD7wq2Kr18o3DApw3NZUFMuKNwxMe27mTox9VAH4HGDqneNQv2K"
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
