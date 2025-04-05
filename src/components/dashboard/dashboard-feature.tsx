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
    "32pMgCmwWzjshMQ7PD5z486HyBqUNHUDRSeKtG4tAtYV3KMKyu6hp4wiVbH8kgec6MwgjwUEJf31ityoTNSf9JdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJQ6GhzswU2UVmH7h3jSSnKFUx6P7uhPJcto94kvXfyCrWQvq7kFfvpDiNA6cg8u5Hsm3jc21x6coz6ZNwu2w5s",
  "key1": "4at7ekUKxLs3QWMLr7CHBAPaJ2KygJTzbxjPi5inZ1xadx1QFHNBWRN8v2XBbXuT1y9hBarB5Kmmy8eipWgMt79J",
  "key2": "2Fmw8xgERZBpb5yo857feoXfbFSUEXF1UF4oDgwyTYce7J1V9YRHEFS6GAPzLBRSfxxzLQVAXMLE3qaJPkRzMnqc",
  "key3": "4itL6TgfKmBkawCBwPsmS2CZFWXLEUZCLvNy3AKS4M9wNkDnYaoLvcogLDHG8BZLARabjDbZyFqkCzcPyj3XAaN1",
  "key4": "5ajWHqghKFkcgWFDTje8Dx1jcUQ11nMWkTfhFWuBbM75vj4JSxiZ3TiyF7xmDoFpCeqCCNjdFUmM813bvXPtjiAg",
  "key5": "2MKe9wEaJs7Xenye1L5RtrYUJai6GibGpK9RSjokNauM8wRwnFwFe9CgLMiaVdeijBjXNPAdFod1XMvQhxr6BKG3",
  "key6": "3YRZkL1C6HTKiPA6qxQ3sHZkDKi1VH5YLLze1yRsSujJNY3WgGG3rbiADCJTpR9Fs8tXjDR8uBigRAMvcnSp3MhX",
  "key7": "4SzeqPERb6RpSjvqCy6wjcdGdRtWsbRpryhUiTMWAaTJjc2F2EYef8Dd63HbjuzPYyoY6kj9nkh1pRqZJoRdGx9C",
  "key8": "4eF9EMsWRetKzkns6Q7yLBD7mdRx7EsYNYiBy8ma6iGk8jFGusve6eJ9UKdomvnedskMywmW7n8bxKZXzMgspK5o",
  "key9": "igHQXkTqCUYsCzCHgVXMkUWy1pE3qp8sgjwqBTN53G6767fhDLbx7cpvnp8Htp4WTaf2FtvhDAm6LaeSaa9cH94",
  "key10": "4gcy6MiLNuApbyZWCcTmnDdsGWyvrfgcvYx4xsRKkowR5XXyMWWKv5ffsdEuGm7QuQCcYTC7sv7nx8zgGxo6TJVa",
  "key11": "2obszzgkkGkYUEZqyKtxmdTWuEf5exctppbgFsPqYCxDPCH8foYYtxDrEA6mBRHUmgusn4u9iarDtdpb9ZcLCEgw",
  "key12": "5N2UHPuN4YTnz4632m4oMFebVCPd6Ja1uHL3PS3BNkb13B9CZoTF2orDiot7riASRNFiNuDCcMEJwnBZL2Zb7Phg",
  "key13": "p3ZsmMYiAZNQmm3FmtggJNkSs6iLUnzgbFf2shjtemCaPoav2z6HXmAkn2z4j4VLS9AKCeYjAvYRz75Tuk8SDje",
  "key14": "4ufpvHgHHBt466yaTFyygWQhM6FKADkcMUavi1mNZrepCFzUa6Xr9yDSiL2aCbz8fH6NR16Hh4PAT9hkPYosEWsB",
  "key15": "51NmkNaiEVMbw6RGbjGKHkaUv5RFuCjrx4V4G6WqZAMhYuko1G79HNPegFbNL9ix5WSirnKi5xKXzs75qtWMvrvc",
  "key16": "3ouXDGTnZhnWH99YJR3YZV6bPz5saUSvhDv7U8kujurc3YfHKFJwoH9wAz4NMseGvf51QkeGS1s1KR97borBduq7",
  "key17": "66nWrGCrcFBkoW8zVR8z1hSbFg7qbaTAzroTyak2thsMsvZc3pDLfg5TmYqe71JfKWqueVPLuBVH7vGemcdjkVHj",
  "key18": "3XsUfHShkzMWMRnPYV8pv8oUASKN88t5cbzAWzGdPEq9Egkhr58MLoUgnysCfBrxzgH9dmsC6nazq61PB4kBTiM8",
  "key19": "29UDJr8o6DyWrGQKoqdzLXFANRk2krpGfkXaECLHHi3P3ifKX3zL6KJApgxNoeXuZuEd1LHbX4SuPfE8ytSm2eHi",
  "key20": "VtDucRWa12cvY7XB2zwAqcxQYN3kTBU4yjfe5xb4xyQNXGEJQ9L1AJsfmLzcY8KjKrMAwHUNeqrkvC3L23YRikL",
  "key21": "2iY4BU9YCAeCSTbW98De3wZg5hfLqDKHGpHXuSCoHFN6S4DeNKdR42Mn5YSENWnGc4CqjfdDGehoqYJr7XJznkch",
  "key22": "ABRDGMwMMpiqDUjkKuCHMByQD4BMFJPfqpvMyMDDi3zcJWuX3NbDRSkaD7aSga9DsR6A7ZroSKFC562e6DzatLS",
  "key23": "5MDAdXePDsddgsnQE5wKswQN5VB9n61V9z43Z9Dqg47oesCKNVrsKi91eafkzbme5XhKo5pBe7EEvuHEWLetqKfh",
  "key24": "26ovziXy9nAjwbUBkY5bxxynbhyk9WGkmN3k4kUoabnRxcBYtrJh87ZAztVnp3gWjbtNF39Uwc78upTJRYBEevYJ",
  "key25": "zYtwjFH8NtbSni16CKFNmmiXwHFnpi7zty5DV7JW6Up4UJ7tsLbisZHPZLvAum1UXT5rEsioYzn65wg7yeYRSaX",
  "key26": "ApqaMHuuvr9Zh8tAeVDTTv97iysk6TSV5LqjCgdi4YD1S1HWG2HjaYraAkibVfcrwLpXXhbZkvdvneQWMDL1Yxa",
  "key27": "3PmMvpmjJKXDU6d7cdgut7ntjDrh8cxzTkcjg9dpYYYnhErvR8kt1Kq8ssDkM6USVLPCN4EqhFS2a96G43u8br8H",
  "key28": "37ZjxHAqQSX9CuJJstoAUb4z3zhjJZ5SLJtXWZUEPAFL6dP2wsgdbAXnAbtW54upyzuVjxddPTxmetsQ5L3t5Lz8",
  "key29": "2y6p77845BNxKWoqAcwcMwEFdNY256fyLa2NYhbgjofs2CFxAMphHvxkVvJaLqqQvxsNC9tT17ikjd8VnLUZ6WVT",
  "key30": "3ovTbcEM1XVCGiH4yB2JeDsDXwS9iYyLUQ6Y53vtsjAAYXkN7arKyHzMbXy89sysNFcHPhZzQiDNsgwf3UR4Tfs3",
  "key31": "4YrmLFvNi7uHcr5zMf1Vi9bgaqH71YR5cBq5Y4nPAawNrxdPjTA3s42k2P7QDyUqinws8bh9FWnPcDFcJSTgNzMw",
  "key32": "PLVhh9MtqbMmxi9WeiBhMiNUESXQy1jeWeuRHjL34JeHfnYKBqyzpXBxuDFd8hE6y2ZNioUwEP477ook8xyN3uu",
  "key33": "2ALbvCrGTRNt1mrtT3j4LKxpYDfB1T9yETeXxfuAZbJTGEoH6uhg2iqzJ1Te75z6SSJX947UyTbVNborbULtkPrf",
  "key34": "31dXZwJS9Lkjco6gCc4NPQNfjEuQvW4AutSv82gVtcnMSzSJfe5K1S5W1PGLXnq2H8LGFmTNnJCfGSzx3XSfBSjj",
  "key35": "2WWjD2ZDo9MuLF3u3T7Nn7qMs5SeisYgykUqRtMA7TqYXKLJ7cLWrjroL7KjaA21PsFa76zcMFjvVGaYsy8v9ckJ",
  "key36": "G8L6JTtv8FXtjBG6vG2xd4CBGZeahvXWKeWPLvDoVE1q4DDZkedybbXfNLc5Y3j1meqQxzWWssGLcV5dtdun2ns",
  "key37": "55m4KZHWa2GozTUkBZqn1Dq21FD7k1jew67kxX2JkHdEZrBX5K8MaVbPLhNCzZiWxW77T8d5Q1kccBjY1pBxhMgB",
  "key38": "3fTFv8y4VnSM6xfzNq9A8ubG4Fv3Pe74EqfsrEb6uL9mJjn7pSErWFFipDptacFar7yFco2oWFoM532mWiEtmQ2K",
  "key39": "5nDXd754sdWAh7orbGmKuER5R46vrFs9KyzEoKjrCGyEUUz7XFDKkvtrvV7rFDPzJRKzg6KY6BQ3R2qAQw2GgpEE",
  "key40": "KVAhWLh8Ahcvi7NnCKthfvo6SsqHT22YCmArBB8vNDEdHJEtTHfCnEjAHYM1itLUpBCv1T1KNZvAiNFGHh1aqVc",
  "key41": "5qTrUUSy62gNCNGEabUivihe9dz5z8UtfcjqVj8TuCBc7rbqnS7jk8RbVCCZMMjmvn72QishMvnzTpWSU7axuDMG",
  "key42": "47JgskKsAsr7amArAXC2FdAzuLPcfESvWaZ4MWVaQ3tTHBx4jfMnPa6HQHSfoGCHiPJrVP18YvfioPiLLYwuWoKK",
  "key43": "2K7b7VSNTs7LSUvr9dGXLg5ukse6x6h3wFEieaq5ocFpaWioanXUnA7VQE3wumWfidjyQs3ujb5jm8u5ESXN15Zf",
  "key44": "3pjVk5uXntaiNArELmp4596gc6UKChfc6FbzRzhQqobTsRmsLaNVtXz5MQ3g7mzkceMEVAw6FXF1mP9AEoK5wHCG",
  "key45": "3Zko1pYusrMCM2SmgzFWHLDfKnTSrFQJWvNV8KnmyMpZ2AKBz3qGwdG1apHqRy83K9zTrCGk8giadRktKc1apVHt"
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
