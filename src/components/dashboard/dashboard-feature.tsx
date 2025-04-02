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
    "2c5CBj1TTq8boqKrrmRFN7hDFtCkZFbRTPMy46brtacugyqqP7c1M4vPz3XgMAFsxTtK3JCkZUKCETmrma83DqLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54uEwayVnnQwN34r2HjesWBLnJziTGsp6TCPwPrFbm7EfM6D3Ghs3EeQzefwNQVwKth6Z3CnRzEzmJsHSuwdHEvY",
  "key1": "2GY4WcUFkt7wjCyNDUYPmESNSgHTwyoRQ368vKR83Du7mZ9qSL1EDAtmDiDQfGwaEdWPo9zBwRnQ84TuNHD7JGVY",
  "key2": "42aWcv8FXGV14wepSctk7ufkXMTv6Sb32exoicGPfaNUXDhh9P6D3AWFjp7VjD6wWgUwcbBWuZVhNp7juNcVLeCz",
  "key3": "b8uAugcwnUCEuHs1hbPbSXUuh5RgqkQUwode24NXGcudNbq3VMq38D3miF74EbBqrC3yHsqb9gkyACF7mAoxfbx",
  "key4": "4SDz6f26yquMJWyNJ2cunKizgvZyz2EoX3y4VcYHhWwJsUApfps6uyHRMNsaWuPywzYKvACii38qHPGwAcku44st",
  "key5": "3YH5oLYGS9MRxWeCxwcBBZpqF8xHMB3cyZ28wqvAoDVqAN947R6iXtDKL7zYiLDf88bVSrvvKxJoaaEvyZMTimn4",
  "key6": "r3T14CMmzFVUxSZikANyAeVHX3R3CinonYLH3AXBnnSGm515GX2dKtivmWACAHLeKJDasE8E58inv9fSfNadyF4",
  "key7": "4qunwPo5gJsm3KGDemhgZyXe46STNdd9XrU7VmorKeSa4nYHLJzqTvM5C7N3axLHMrsVNhxiJMsMk3qLFWTMzT7L",
  "key8": "3KSZuJbfdtpVTuRXVK5dyA9ADkfKcZ3MHkTuYWcF5mGnvhKHNXbJY5kcKfRjqLXCGvmzVGmU27nZRP6V5dQgS1t3",
  "key9": "5KCiRUxMxjQhEP55Fhb4RaGqyZ1NG11R4MLZduJ88rFhJ7QSSYiDnowMp2scFUEYbFdcZepQmVA4vU8QQkrDd2sw",
  "key10": "4J8xZbBWjsAHJw1XbTxTQKvCrLvMSNT3LfqKzrD8mwLNn9B7okem7ZLCq5XLid645WTfqa5fW5X2Ydmn3n6vjYUH",
  "key11": "5CwoTN162E1dfvGZSAQZ9eBHGX17PL23gxQ7ojbPzTiBYUETWXUTc4T8cQCwxb31Jzu3qdcTFfEGrasgsh78Patc",
  "key12": "28YAX51ePZHPdWGJtaPvBDZQNMnVTjMWVHZzBV9hjyJsLd6t4ztKpV3XdaWMWvegPnrk6Sj7xttgxkEohSygZPGm",
  "key13": "R7DP1g3mCkuenXtstrPs2Mot9tfX6DDScSyih5nftpXUseHmRWgHSa8w78oY3QcW36LrTB7Zoi3K7mDG4133LEg",
  "key14": "4ybH7EWDYYqj1gdmVWp8Q5u93pyKKhAxvcJuwkXbGQpirX1Jgr2aco1GKg79AqRPNHNUh9ToL69mHAWFrAxqCoSr",
  "key15": "484St9NQDqi5v6TBMNPoypG7J8Ubjj7nyiipTPtykgN8bZhVQTX4LRWAvafnUTbgLTbx6FsSrnC2SckbJpCjBaeu",
  "key16": "4z8fk3ChsxfuwEVgdmrD8ZUcJDGhGnTuNQYVmLjKDsowk9yEPDQDq9AJpbAKvBm6mEg8c3aUycWwD1Q2rG6RcSjy",
  "key17": "3QVUUCHWY7xDC3d9okfNatiMYcZCPn2fDpswjzxHjmt31ZSmTX9FJFB9MHTknzSXi4MbbrSzVQxAFcDC3qATqd8i",
  "key18": "3F2tiJyDUU6qgv6BPKQAAJxhEAb4xAV3tmm9vMKxuUpNzRAk8dgK8MABnPrHPvKEwviaRK8aZaXW4bwKKNKrorj4",
  "key19": "5QPjndDVW5w9AzTTvPauyhnHKvP8zQrmfbMnkghm5Qx2HNKjGGdedmDcuyqDgEZqA3TpXmmR22GKNuUvMbS2Dok5",
  "key20": "5EijwNb3CEKY2NBWSWvsYaEhkNDQQRX9MgdDuqsdFxySs9fpPhTc7dMxUCkNtVvCcwm72AsyQdSTyfNpALkrVZxS",
  "key21": "39EYe5v7tuTg1BwNxsc8i7cYgP9s99C73PyoUV9yQHhcBsYRAK9RJgVx8dQypaHE8GVxspohWbF9MVv84wjdThWw",
  "key22": "5AwFjQMMbusf45G32KMMJC381fNG9nt3QNKk1pkyEqtjGEkfm9YmepAmrsFjp2MzGmNkgJ9gEucKdPY6ipbUT3Ab",
  "key23": "2yveL8cwQq929HsVXrFdw6BKMPxhaScKqAsjPUhVT1BdKEPApfra6FFgBLfS6pJ6MiabaDHfaWRAb86kHDhT4c4i",
  "key24": "5s2jmXZvog4ujASNRwSHW1yytWtXtsmTXs4zzhCXeSXvVuXLdMECsfEsBz77LkmhFJR8voxBfVm21AQ72ggxpMBg",
  "key25": "2CG812TpQPkFsVv7t68qKcSg4ZYFHyAzPQXTWczKtXzmtwAxwMYEtUpvxj4ki7AG4u1KxAF3xzYJEvMitDLNEuJX",
  "key26": "5R38ckWYpMs9pxGx93XVJXq9BnZEdXuoKVJMWzeNr6eqTdGeLbL6entpxyCRLS79w41nHg4YSy834ueYpp62VMyg",
  "key27": "3YK3MBgqopGgoEq9hVJtWTQm4MH7QYnfqwioXV7pDoMVxqM6T67dBrYkx3qCCX5TiimSetMbmPtXUjnj6Yy5rwjD",
  "key28": "5PbrYjaRSR5VccuQMiPSZq3WkUXjBzSBRYcJzU2kYNmZqkJcxFkDEi4ZrijJVBe4GoKwMTohgPkibiPVG2ShAygW",
  "key29": "6865JS73dd8ASpsZbCL4HTbbvTKinmQtB4wCSGnXTDVKoU4JY7GgvNbgR2MrpWMkFpRD33eoAUJ64txYRiG8mJ4",
  "key30": "2aygvqZ5LSRhEj1zwCtv7SNjA2HZnSLVokv8ZLnmCSvwqnm7Cdy6rjyUp4XRgLXui4TsFM2y36rTPzNqTBwqCHb9",
  "key31": "2sUtu75G8v47pRqmieWaX4TxMwEZMYf56urBocUU4Z5EJsGRps5bqsztHurNNdWSVPHeZQVMcpyozpFLs2QsMM2m",
  "key32": "4NECjageV2EWas44Lmw9RRMSJUaEKYBAojxGPDpGrCNui3GxYER6fu9cbYsk4m3hhBkUbHQAWdSrQ7KQxnaUnzgw",
  "key33": "2NDNCtxC8zvtVcUsS5aZmR5bwegy3DVBSSBoaZDJepSbADjYYmJnVy8E9QNd1kSBYJP8cdKFMsEjdfvDPhqeGoP4",
  "key34": "5ENDzta2fFvyUcaNcZtu9kyqNYELXUSJneYAJhwdTD49S7XXC2cSUtVLSSfQv1hxNDR5cwScuV4VNcw6z6etUB2h",
  "key35": "3HH4n5WyxogEFERZcX272xhUyGNEHBcfhWSbt5oApksTz2dscXw3Wx6pkFcuJeSYZp6MUEc7xYE2J9jtKwfnQuhV",
  "key36": "3nRE4GC4Tmynb1ytZeSFGUqZSvTN7GFi8RnvqTxRfriC3sAsnVbMYhqsjzGcZB2MRPyKB977hTCZQdF8kdzR45uu",
  "key37": "2W8YmrMYVYB5J6Z2jeMGxiBd6G7QJd9fGLmozWM4oouT1v7Mc2PYQDTKJaQP6vLKL2D9Y2FbDH3L4y67eTkpLWnn",
  "key38": "2XVyTAVbNHgxTg9XVYucVs9jXKEBdwBXmdsnxYAatwNLtq1YJ6i7R5D879bAAPGTYdfbC7xYqUGPFqej6UZBDAvs",
  "key39": "wS7Ubq5ExSTjREAy2N6uo4n8wBXmhu11v2uGyveRqUeyvpgi4ovDbNENiSeBJjvsDktHvJcrdSJhsSbkqkxWBg3",
  "key40": "38CdkgyJnx9EdH29LwGKE69L4zFc8jWXjPa8WuQA9bCL3ucyytUaiaS1XsEBukhEYjZXbzwCo7EDC1At4U5i77uT",
  "key41": "4XCsD3u2i3Xr9RfKf5gBe7mctYn71Bq952XQNV6zxZ7WoQq8KbwqebruY1uxBRxufFCmHE5W6dbh1Kon8bKNBnhP",
  "key42": "msgsj1uWyo8gcVZeusdcVBYzXRkp6gciB7GZQP19yS4ufLg5tb465uT3toaPosv4AWirCMpM4bmo5NjpefJ6VhG",
  "key43": "5cZb9EmZ64mPRr1mZp3TCgvLTpnUChxmhrR6ktwsDT9BaCYYBBDLcMHEnLK8pkSjRfMAV8QLM5ubQWhSpScrpwcT",
  "key44": "ZqzDmEkBaisd3rSkx8sP4w1vUCjVXAYVvijftgXQToCGWQicNDKdhZKCieXXTvnnExVXJ6n41FoHDCeDkZNjQvv",
  "key45": "2ueKJmurRgdecy1pXYydECmBk7j14ade39fRLs5Bx91JNJeGb6k2GbmnBMY64JB9VUavZVQc3C4QuKDQe879WH4T",
  "key46": "21dhKDLc16HBYG8Zqjs6yM525TshBoNtonLWczNcAbc6NPzWWvfvW1ApNYccbjb94i56wcpHi4Jo7kc8Nc79BaTa"
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
