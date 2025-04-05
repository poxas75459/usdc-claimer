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
    "tBK8R6PiUP7u5X7T9qxaKrYXrkbEyG5iuSH8AsrpmqCikeb3QWq2Hcn8qUm4tyywavXrkEcXEwCX2UGhcTRC75p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qB1MWZgDUDisP1SGGkjQdRZJ2o15cSBiCEfjeD8jQnxsjGcbjJ36mhjneft5dR6iEuiEMPxbYWhrJJW9A6BihLe",
  "key1": "3qPVgaRY3Wdk2xF27LiyYygenzKBez4yjPvDqXJZhFWu8ndyW3jRueY8H7rhaGzLj8JS8hes6cFBic5HyR3c3QFR",
  "key2": "MWhNbZTG4PGj8QMVxLA8QUjFQs33YZv6CcXejHyywNxtUL9saatp55QdP8z3kgeNc2RZ9GmwuaSA4KnmRdNZD8w",
  "key3": "4g39zFGnRAzaSsH4it99RxjjCVhR7RM6furBy7X2qCdnfwwjXBVGpM3NKsX7bL12urbfaJeqrrFFqiEzXyWJXghT",
  "key4": "47CfHLwgfDPp3fmsMiFXmkLHPyBhRUqX9yKXQzt4cMG5qRM9jhao2bhAcuuaS8iXSe33qqt9CuzjtTEr35Hq6SNa",
  "key5": "5mVGpGbGGG4P3JhsgZd2vJMn4L7uv7QbyAGprpB4j3RNHUSm5wPwNURFLQjMXfLJQcP4eQJ4SopBqpxGeYs6jycB",
  "key6": "3riWg1VuQtzDBujRvXr3WwtMieJEhrEWbrEdDomfSJR34BAgtDfdff3viFSwD5d8c4KsqmH3d2knMZQfoBNuzRc7",
  "key7": "2ifMh21JvrTCesUJkHQMXdKQxpJAvgi9cWHYUg2jJF5f6qkWF29PY8MFQ6JmnPHL6ip76AMw7DtDcKAaz75jQvYK",
  "key8": "32pjX1asKpDYL5b7p79Nd2iNQUCmQbYoJbXtL1zrB3zKmgBcrptai2kotqooca6FsKZ4V8DtBLruF5RsX4hd7sjX",
  "key9": "38Tx5EXiWz28C1ozjnwmmuKKd8YUiQSxdW4jFqk59WGheJJoPRWMCnRw4JvbBEZ9FR85bh1KGBxLoBvRNjPR8RbG",
  "key10": "2fFGX2erroAETPDseidKnMkZc3dQ6RorkXEvcgUh97aThWQwrWkFJb7ujbySdCWK2FBFQJf6cyD5L3iHzoqkhTCu",
  "key11": "2mK4bs6xWU2DmU3xpamuMq5ZyLPCkRkxtYi4X9LyzCMN4otzicGzvJLCSW677hqUH3zYH5LppLKCzT1nqUJxY5Yr",
  "key12": "2iK52gTGsTafAhxhQduL1nKVkdRzHzMkvuyEM3AvZdM8UqJg86RXST2Y2YXeAC7eDmy4s25Gtrq59q3HmnopLudj",
  "key13": "5eD6tDHB2Ysgm5oPKHuJ68AuADHARzws3A8pdTYtAoWffGVkJEHybJu83uBMJTfEmS1EHFXP7tpJLgHZi1bHjbJN",
  "key14": "61aJ2wGid4zd468PLiZKSrDVfn1wseuNDfuPgr4r5LvkC71BtHq3ekqrzyzphuRm4MgSxNypCGNQevUTXGVv2Cvr",
  "key15": "N1ixHrc9b5Qog5UNvp9jM6WKFhEdvhLdAnDw9vvmzQi5Pv8eeESwXkD4wXp4GLL3K2QhfX9u9eWnBF2UPMGFzfp",
  "key16": "3HBQ99hUJr8EPN4HpHavryF2QERBTPEUcUfjJb7favqeFoayUbu8Jkrp4sqBEbgvFASNK86FmSFy6hKfzMNdB7SE",
  "key17": "4ZjyyuJFXwCERYqL9yJ6TAsLj2WBLcF4Brpbjt429QpbvL89neCg4H6QYouKrTkGAFDavWL6WPibbgCWDcQfTdYC",
  "key18": "5Vz9nTvzpKVkYS1dDS8xayFhKE3r9Tis5dxoUp29ziJ34Lob4sRvobotABje9PnXn7k8QMQt9ccozLr5jLCtm9A4",
  "key19": "TNhYqddZAUf3LQxpPytezmdQKmnK4hRu6PnFYChJYSNeLDgMu8gSVeqbdyCFoQKDCho6zNt36CJKCETyScM1u21",
  "key20": "2TV6YpBK3wy6dhWSXK2aC5HXocX4M4wGjweKWYtDeCGN3Y2ASmRWc7fu4RmnhrUb6dEnVDda789EzYm9RPfQ6aQn",
  "key21": "ZE3vMFfxBqeqnLAtCzVQtXGcFbztyuSfV2h8Uk1WqekZX2D7ebruGmGZ5eoiGsQSGwLEnKso1LbUWtQR9YcTXQk",
  "key22": "3yXD4dSq6HFY5btGbXGd3smVAYBzDTcQRAV9m3xJLKGYtfzg1vjxbN7ZUxboiev9efwecnbzYbNmYR9sS1RYF7yL",
  "key23": "2MQe76GyrMVVYq878eZGnMUWUkVePrYBK78RvGCFVVLvv73dR7H9x9C3cRXkUiKLZeATAXXKcBSFVeCPSC7NuzsY",
  "key24": "4XW2mSKRj5PjvxswVnv87RpFUkLNnAFNWi4pQBxbjnVLLSDjGTw5YV4JRqSSPRHwyJgfYCZpV1ixh8AjWanEeX9D",
  "key25": "65r8J1PUrZBJaHwqCP9RiYvDeHg2SFcLW3f8bTmzsW5SPfmmCGoe5jU1zwjefo6qCjSzQHwvZPxirN3CnPX3LZMX",
  "key26": "38V3mTmmxKHnGXgZn7wcfhmKervkuhks1RcEW8X3icpe9ayVyMAkT2hweR2WXj7uQFWRNVwFsCcSsRVHsos2t4rv",
  "key27": "5JKRc5qx3umAwxiHsjNDFWowcZspSJypmv5M3RbFcZcMqnYu9jA4u3tz6Ystaxy2jQ7AzYekK6wqyeyu1JBtcrCo",
  "key28": "39eWx62dwyHB5cvKUsQwKKH8MUEnC3awSL3rxvYsheVYGxChEgDUEj2xMu6YxKMnwzp1bTpDUm7MNsP7eJQytLrU",
  "key29": "yvFZu3zPYWqtfpKQn9EMN7EVY6QQV2tUV9NBr2mHpvnPEV5AY3qwW8fhJR5agMsw5CXG5jps5vkRXenxdSxj8my",
  "key30": "4MaSR1GaCyub4xsNWoasBqHM3zKBPFe9qzYU6BuBf82VSJDiAZB5qjrNtqdpvocVLug7nWGig9DWjLsF7rGqdKSH",
  "key31": "KpHCAVrrufFnKEX39fkFCNSnsDbbCqGX7XbbPS6A1a9FHVd5e1XVRsSkKLsxdaSu1Ka96sVJcw8KkzxSDecZEwG",
  "key32": "G38YPnxRteU4pACsnDAqXSqPhDuq74FB9wmLLRprSL8outVgHrLHyhu8x1JSsFvrPDt2oh7bxAWPorEg7iy8cEE",
  "key33": "4NFGnG2rmdNRN6gRbquwGLM7ZWK7dZ9KfKMJeQDzYLVaZ5PkXpm96QcJoJtBwxmgFp7y7zs2KaHEBS14HyaFERsM",
  "key34": "3qx23oDy5shFEGp2W7wPEAMc9DL52FUhbU8M6FwbHQxnuyN2X4dsWwaYZsZF26VVJsFExZ1KRER5gAf4UWmwKMEG",
  "key35": "LExJHeRnjpyQEe5kjLxucK7p3U1atJ5XSDiHijehjnnwSADk5LULJeGSYEXL4XZjKUfAVd5D2Yq5DmpC767ie2L",
  "key36": "4orLJQM3c1rPCTJtzur5YZa872dvgZhdN5p9Xn6s8F2THUHBM6cXLp3N8bVcvw49XwhQt85UoX977bmiatd36v54",
  "key37": "5B7SZfdgNH1z1kMmAfd3VJEmpgch1VSToJS2mCP67ivyN3nFLbkmuGGzvjMQQbSquDG65zrk3aeQVQjbrgtzLv6S",
  "key38": "37VZAbGtXazGN1cbZmsNntEFu4phDmexTMsDyN7tpg6njCPTKf5jYC3usaqM3QKjyE6f8c6uQNSu46ujKgtDVhFG",
  "key39": "39u7SuuNivT2Rz5BfUQwhy1ekUGxzLVANkR53nFBzrm5ctynhP2sVZHtmw44khVkivjUqj3EfJRuTsKK4eBA2u1k",
  "key40": "3B1UeQvhGNyMi3wkJ8NxemX5Jeuj3w3REnKCp5B6EBPkGYWggREFXCT7z37Z5Fu5qMUWYDtKWKrkBDkTPYpL7X7",
  "key41": "3ooXBB4Z3tKV9QHRfnvRHNYpKjyPREcPAwKAyyXD7kQg3SViz19qrn5R73qPM27zNd3t4F1JRx8iHgDmThrWj4Y5"
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
