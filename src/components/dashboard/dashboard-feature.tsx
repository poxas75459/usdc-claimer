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
    "22y2sqjyePiXp8istjj6BHGMc4iBPaub9ZNiUNXcYBAJov3QyWzLCWMsmoSHyvCfWYLprieNQvFBjGZxpN34vFs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feTnKrTUmHqae1bY2NSiQ5ssY56hExAzNa7NhCY2pPvLL6nSdLfFKYUW6xYFkERhRkGy8xt77hqb7aoTg9n6kYV",
  "key1": "5F8grzyt68wSWhMHx4nVTLB6qg2DZZUVMTvytdhYr3rJ5vujaL1b4wA5mnsUZWJz1DyPQXToqFCrMeDBQ1KkcZq1",
  "key2": "P8nv5XaLRVmxRzHa619Pu9Bz8g5nb7XN2wmpeGsk7yprjQKRT27iwxnS1T4DSim9XWmrJ5zTh2joZjuVJndQyk3",
  "key3": "62JupsuZ5igkmCXWhPiYHidNDAkak2iGrxJCLNL1jchkbA9LBossjCk5a4kHRE4RXGJwDYeWwhZBDM5mWYLWJu82",
  "key4": "4rNQ1Wmq5MYNQggvPYBfiordYscWTTFJG6USjPH69Tuq61dy7i3mBJD9HiGGfsnfC3sHLEXq28dpkztaFXqrVEjc",
  "key5": "3U5si2ZjzuCWF5sMFmvfcfcmSBvXTMFEnYM3qSACZoLmny4TjcRHjDMeXGBAsz4aUufNvxu2Jq7E3nCiubiZ1Cg7",
  "key6": "5i62B3ZHFaB7dEeQZyieDsAmpJa4HDgKac4uUXQci8vWmUMkEaRQPWbP5i1r8e8ePLZwbWRn2aVpSbYReV2gi4rU",
  "key7": "4KJyaMVhNPig1N3c9EdSZXaiCFBRfC82SBrg294ZnwTw9EXXuY4rn48Z6c3Wh1fCCScqzMNqXbFLgLxzWeoyMa4v",
  "key8": "MDKk3kXSB8MBUBcHBns2GTF6kBvWQ5UQVAx4YA12iTJku3665gFehCmYZhM9jSM6nyXyp39b4akzoUAR9NVG2NP",
  "key9": "5QGLPE96f2Um2CLN4B5Mzwn3J7M5reE5K9Ub73i7eo5QCVJUhToB6tR8LfGWNA2syKQvUnFVJJPciZeFPmWJtCGv",
  "key10": "sofHdzMN24nRPnPbmyTwq3BLS8joqWQ3gz7Gc8tRXM4TiSa7NjYMUWwgW3n2XyRtq44UamEoG4F8e5FAtRD44Yv",
  "key11": "5gAwUCCVnBkZU2hdPBWsCEmUnwtp5AbVj8tQtWSQWowCDBnaGyD5tpnayvUQZmXmbehYpbd1uUQEgZbq9A8XUM8p",
  "key12": "5XWvsM8wpynCyfJmmXNCgkwLqvS6K14obuzk4UKnbeNXGc3rENcuAgjzE2NE82Z7VrNDzM6cUBbeYiFYF2qptfZ6",
  "key13": "5TzZ2fgDhRJGsUW8BSuM5i4nP4Sh14uFaT9BFvnzByrbpFaKo2ovrdFq8r7ncFUbRNVSiivxsEGYHWNqqb1HwJzP",
  "key14": "FTU3LQQm7hqfAGusBsbR49W69wByQPDVxNtScC61cMgL3gqpN2Hys2fWH52SFFtfhG77XD5CbFxo66b9vj4iuoF",
  "key15": "r3GKLhCkye9dg9pqg32EEVVAs8X6rGToj8QqRfGVNhLAG5EE4dCJky11Cm2aEjkzWv3Y8Fhz2jwfzkynJ2fQMcQ",
  "key16": "NFuamoDH3n3acb5325qRVMbkuVeTCrompGyqbzgsFDTrW548824cg8DgLhHsL5NMjXce3Ct7Hj1958ZgrXYRPS3",
  "key17": "3fXaRe9UUxonnq5tFwtUa9YMCUu8FZiKoMGWSpBFnKq8TfG6SXwKvSJhEnJCJ3vmntkAEL64n8pqbiTZKC2DSiyf",
  "key18": "JX1wHRHyZ4c2rAzFwVeni7r3xwpQ9kUXSEEiWMzsML2BwrGoK3CoQawgWrw81WusujR7BCuPCjnwfnfiHSRghD9",
  "key19": "5tPCwgEMFu6zcwQdppjhASfqcYvfR8Pp56zFyhFgxSawUEmag1b9QNBTUYqN45wbBrbGkZ6veHQQwR4V25Zi7JkG",
  "key20": "2XoyEf6VF3R9AxBC9tN2ZmCEhFyKvxRwjYn9YNng2qYrxubpL1yBpdprraNAHYARgVsBQHb9dJjHmq9jGufpaMiN",
  "key21": "37GM18K6QyQTyGiF1HKDQ6MPSgUKHrnXb6H8xr3pmCBV1LbWt8o99dtaKfPW1QgL2Rynph82qzDJV3MeLPFnYjb6",
  "key22": "3JwfMYSUDqGxoAttN6xN4yhoDkRmxD3t9BoQzSJMDayb4mooVPD8WRaRJqtrz3Bdkdq5sVwx5rJEXweyUnKXhUbZ",
  "key23": "2bBJwY4zUnVkiGQwTDMprCigWFvpWbHuNvbCBEnG3JrDgj7Ur6Wec9vy1AX8LXRQeyBji87GA8ncXDAGidh95Dk9",
  "key24": "2AxGwzDFVvGGU55ffPDf3nucmtXrAv1be7W5kMK2icja1ENA8h1kghafRjdxDcPhPwSbQmhwecTgc64cMmxRczoW",
  "key25": "UWWEgz6DA9N89y9SH9YsfcXwiaTB7n1FqQV24zyu8SHcEx2SniMDLeXhP3X6FP1VsVyVg5yDer1e4ohwGdbfcsM",
  "key26": "VAJb2tgGPGpD881L91F6nNVhCtzXxE47dWFKFn5sYwM4A9nmcfdHdJs8gcsFtEU32Pa4D6YXP2ngMySaSazN2Mv",
  "key27": "54KRC77RBNkDpquoW4fMP6vkjgJJLgh68spQ6CbGUmEey7nr5HB1AmWEDZKNaPJnvDsAs1EpXShVLoCzUYnSGXFb",
  "key28": "mviMvzBYzAozwtcBTbpfWGVPKCB5d3R5DHWYz16PU5esghe8HoK3ydokVuvutQQsZtBfLXU7vtnm8H1FEGhcrze",
  "key29": "2aiv8hRFtCtyV5SPkHs8z1p8nuazUP8pxbPN724sycPXt5U4hzPfae5c42HUqFHkRc7qA61g7hYzQC6QSP87eMKP",
  "key30": "3iccTRiXYncKPZQTK19UsHtL7NW637coXfprZ34a5DVVVJ7KjwZ7fh2FNXrETar8nV41t96DKKxDxebqo8qDEJPw",
  "key31": "4QLqwJH671uQbkJ5pcFWx7ry43nqTZJhMG73GtDwW2xR53CYABBLscGW3gcBpbWHEpbAZLE66G7DxBvfpyiXS17Q",
  "key32": "3HNwt6eD7B7VeqpAPweTgGw3K1ZzQPYwwMgtQ3j9kKkVtznqv6td1jPUntSsYBgGMxrQtvGrnwX341t8FqBFmpjY",
  "key33": "4aP3F8yicHgzKH9j5RNXsW5BSTJoCn4yft3uYTk2KCTjr7Pu65qF4VPoqwQp4pgnqivYWMy1jY1Eteps2fqeE19f"
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
