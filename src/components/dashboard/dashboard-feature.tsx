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
    "5dsoe7pvNq5QoERWnbn7muRwN9vj8Cuygy3qNjXjzx72LHsifVSuooXWvvRZ6M1RELmTqEFrZ7EBEoCbx6hfcQej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWPFK2Tbe22CnSyT2AGds6eHTY6FhPtm4UW69m6grQNeQ3NfBGMhZanUkjByMyKD9nWEptGZmhzc3DVA6Fk9pFZ",
  "key1": "LLx6arMh9yTueKutdYmVv9i5gUpHRyhTNM6XUEG6TLewfNsNJ1rjfeeKCAmpyLarPR1LNwQBX79oKtyRpihDNjm",
  "key2": "43XXPLKcbNWLv2tTWcmLcpLGCLKwEvY1CBK68b9XBCwcz8TUsL7W6C4umRgjfzihAqRNa5vU38XAKa21qu3YU9xq",
  "key3": "2swyCACugL4WQX7wphvstyfEKYX8pC35KAA38bwcocZeDui3XrthazbvApkQ83SXCAe7h8JeTsLsP5yBPgLYqM6s",
  "key4": "2c4NSSjRqhKfXQNyR47zFjgUPqTyt1nUaHxzLFFDhcc6hoSqnB4NVcTWf3JfKudrUVWmb1BZY69NFwmb8eWD7hgc",
  "key5": "2PRbBGsSr7KodbfZH9Rt8SWwDC2C4zPiXqwUqtxKdyeb5R1NFSJhzTfR3WNMymatFRkzTxhxDm81sGoG48jcRcUX",
  "key6": "3dybE28URNXJGvo7WDChs1aYfZRVSkNMAW8bTkUksNzybKs8pmATfpkVwvhGNkCS4fau8EjyzAXVdqmxmh1NVFdX",
  "key7": "3ZXWPPhTzRb213jMcPgXG1GxBf5c49NueahXk4RVomPDGXd4BM1E5Wwrm3AFwos8R9YXxP6A7hcKe1kEmmBc7heX",
  "key8": "4wwYhboRBxe921kj1rZymFm7rnU7oWhxeyF2oY9G4ZFzkSyAU4rLxvJT3ZhPc5hrHw2wnsbauweskCXqiY6Er3if",
  "key9": "2Bm6DEQsW4643KC184hq5QWBuLq2fcBcAqkuBJiLexD7WMtnpEU37GzgKfc9jysH2jTLBheGNo5mVnu2GyPaPBj8",
  "key10": "dKWVx3nXDaU4hNezSeHscTsXE8g9rojS2seNT9kiong8scxqFADofZMgvPumthhbB3BAGWQEoQyZLdoWeBhD4oK",
  "key11": "2crSKDmfU5BiiTFjP2Jk4gxL6SKc2a1kVrHhmEJJxpV1jq85phjTtXz47pMcvrAMX9q4fhssnNMGuNDNehWjoMhD",
  "key12": "2B4yZg6Ge9F5PzhU6N5VsbdwyNQzcDLn5ymFZpJe1gbaLvkqUonyBs15k4Hkq88WGu7MtjdYor9Yko2V4tyz3u4g",
  "key13": "VCuhKdu9xR1inAABU9wmwQs6wnc8EWTt9EqrwYXVwqf3rYJSbgZXC5WgUiQ8PZUP1m7cyRn5E79tTJZBXefJFtS",
  "key14": "35PzazjRXrhRthynDANC1YF29JhCfMhmASEhco677uXLQ1Jnf9qCkZT9gk3TxWqtUfYbbK2rAXqHcDBgfDw7pGtz",
  "key15": "3j4MxQNDzatNtzJHWiTtT2e7ShBa1X5y4afQ72Y7j2wFqt5D7smYoUcN3bYFadbWa4nXu1PkUCDrHEVYGsLZwBJ9",
  "key16": "pTrzvXRiQEgDGwe3tuUjnugRb7RbyjY8dqxDKbPrYgxgaGtQcrVCdodPx18w7TR56YGrxaADfoJoyRYyGYynv4i",
  "key17": "3XSs4DX1knmuoVTTatBigHL76bnpZgq2b7fAQyCoDUnF6Fzgr94yGrPxYeo1xVbPW7FBu46aZgHVvPKPm88r77H4",
  "key18": "3ExJFSn7KoyWfChjZwDVhSyqNaJNMy3pZXii1sPhTmPNGDdmmKuuPj8xLBuXALTEE61ChEvDRjmvmD9Edj1ebyWx",
  "key19": "4DNeKeU5TcquQo2EJuHZRZ5S4VcPFHUzRsfi6LXr8XFP3bWBK2TTgFBJv8iDwQ6nN41CYzPCfWvan3TnrUYj1cED",
  "key20": "3usHRC2WFZU9hcEnFJTq4XxPm6r6Rs4mBESmfAgXuy6TDCeCHdq5aiimVKuCAdejoXAB1Fm8xhR1JbCcynLN5jvF",
  "key21": "5z6G27UaeRQE2p8n3vu7vrDAMHXwzeb5EGCxXAaTD3XX6qh8jbkfMBvKHSFFS1ZnSc1uQuaQxstGvi4JvPwPeMTX",
  "key22": "4b3fMFRd7ZWN5erZac4oU5SEUEkqbnXQkU5aCgQgEXKWNreavcViYAMagiHx3hgDYBZ9G2Ax5fouQdJQCJABS51y",
  "key23": "3R4aX5bzQRMuov6GXjS9kfCbLoBiXvxVTpWQPoW785xJP6fWrBaimvNe9MFDmh2GJfuy4fh2dA9msGHEQzLZuoyW",
  "key24": "hT6RVB7UBNERPa2VS8fxbY827wmhrApD1rZvXfZqdpNiiBzxXTKNYjevKDYkbYD6vvPsacPNzzCfjC3ev4qMg18",
  "key25": "5CWF4cwubBvMuFxB1AWfb8KAjnwPKEHyNJTF9XFCzbVWTtd1cSaEMs3tvrm58LKrvDhWyZG6PvdQfhbDLPuCgxgg",
  "key26": "3rBZ527nWGraNTi9XtkdqtFUpWTfRFitN75PZLnPFwqwWzD4eMU94t6GXB7Pi2yjwE7RJGf26fCZYqCU43vfsnSe",
  "key27": "2kNXisBpos4uKBVPxTVg3kDvcHqsSsVEYtnE9WGhtTFDMyguwLhqLRigh7LVWFrobGECcqRX5XzgS4jMGuadmg1j",
  "key28": "ZPU8MTY9ddK33d7C242GBPmZGhuboZb832NFnkH4fm28qRnZsZgYPsAdvPE18Y6xSh15GBr2RBy4fABjCeUqeUB",
  "key29": "38Tyi9rkq8YcDkHmi1FjBT6oZbjs3nwPYJE7CMABWJBS4NFot7hbPqwnPrjsrTewEsxBfHc9YNfnKjUmRHgfdbah",
  "key30": "24uWUbeT48bjr53YCgvWnV2ERv1eC9zZ59HA3a2tCRVAmX1MfDYHE2irvs8iHukdin53XY4arbR9qoqMvqEGeLHv",
  "key31": "2VUtaM6XaUY52BHFSWdko3wQiJVbQVGww6bD5zNvqEU6eJsQFTC8sn1wbb53xbBKmXHTGVoFokWqUKKTrxh2nAa",
  "key32": "524PSnBMZyviHZKyQ63J4NNvDjFYDJ9bMyGbFVnaLVzRugWT1snYwXH47QXBTFQm2D5CSFkhLAPp9v8YuzBXu3KG",
  "key33": "3ucv21uf4cjZctRARkXYp44fdgsCromEoZCX2r3WhRcxsW47jizqDgnXpr4VjcTRbA4ZzAiUctxQMuwUCqnEyj8V",
  "key34": "5kmuu93jWvgDMHuAVBvscDVStW4km3xHnf6xdbD4vqnMovkd7BJFvV3PC8nxS3oVHrzsyRjXbzxucS5ZkQ2gU5yT",
  "key35": "HDeD4dsm2uP7PMMzz8yo1EhkD8XkJ7yzwQFJ1tyDHcm46tbs4YiAXLW5CXNTpzJ5uL4sRENmkd4nxjWvGqhSpjX",
  "key36": "u1HZCE1kE24hHEQKJpR45RMoP3yxLLwvGAd5oVPAe49rAfCZ2JUBPkSeL3DfGUGQRwZW5Ynu8j8WWGNRAqS457Y",
  "key37": "53jDjLJf5nKWMVTy4zvUmEePXTZ5zRSXzbGfzXqurdEsNsu3oduAFxHRo58JmBYRpDu5hTbhUG2B56A6QS6yQ99n",
  "key38": "4dm8iP3qrMuwk41wuUueh5hkYDdh9tnYAAMQUauT4TcWs6c6eyGAaAfufEFAzJ5JDT6PJ5dQSNmZ6LxEjMPRfoXz",
  "key39": "2NHM3a4eyFZgE1BjRFyJQQVKWajpGQ2zX1LocsRdSHBDDtghAvSAr5Bi2bD4JcAzvNJvETmK6wkcfLabAuZ3sAyK",
  "key40": "3NNEVzfM7BYrhwr6jimVn4cDAnCV4fJNrSzDucPMAXgpCHPw5UdZa3JyxX2SVPUTySe23CA1o7RKQYAC6LrLnF7J",
  "key41": "2zgZ1GfjzcZ48WNSoa4pM8PrzhwQxjw4bZWys8u58WBGUoyEP2Xb5FUyNUEGv1vCNoZ5dkpPE2Aum9ofF2ziM1Cw",
  "key42": "5VA93spmLrHHFsxUTq5HgZuBmZdc3xj4WXv5Hhyw4mb4ve2hCu5iqPMemDWZfzhG5ciyN1qKkijt9zF7weHVMY6w",
  "key43": "ejXeRJCGkkwbvsDBPeWAWJwxV1rtVTm284RkY5QL3bsvoQWQei7pTDafqtFLKKgRC1giUymy2HgM4finxn6QsCn",
  "key44": "2xkzp8A1yZJzwetSjGPWFADy8tZk9YggLSWEqYrqqyhbxeFLWXmNiUbiEqhNehjvHEQaM74vdQ1A7GPe3o1HTT3",
  "key45": "526H6NiYvnthTT2XiWCpD3LUa9Uuoc2PB9pZcVuso68kTqAe2WsEnWsntVRYiBVwnfmS2niqUwanAgSgryfdnBp9",
  "key46": "tEYAzzwiQg5oGikK82HgVvoRM9RvNkQG1PuGiSkYtstYXYHtrC1WAhyz9QYKSSp3yaGFM93A23F2h8z1FUYAzvr",
  "key47": "2f2uEv2zH8GJSGet4CT6VARizxvkcodXfT7mDwNewHxBfYhK2xnVZBNi2xRvizyjG9SWwosCMwgJrfShHQKVU9tr",
  "key48": "Uc3YPV1LKYyBb8buJ4f9AD3CLhjddRs65UP8bUv53FxFsxiCRFZXz9eQgH3PCgDXzpHULJ2f4LRWMF8UwkGnbBo",
  "key49": "2zhuxhrVGf6DJZBqVmqZ7Vas12s49bKxH1d5APvPsZJ4sVBtU9aM9K8M45q8xXUEmLtTLWDJa7rssAEk88B44KDF"
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
