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
    "3K1eXtxjMxtEod6nQxVmYLN7pFYB9mNddxuYbCDSMwd7c8X5skQfF9QX67TdqWN3WX4NHxbc6DpZe9cdYZhzCTg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKWrEgqavcZ5YjajZ25n4MmvYQ9MD2n6DWVitwfSRdXZE1gnpTrN9MMqGbfy9q5PgT5ZKFdq7FacZ2ZmPwNLU2w",
  "key1": "8tyBKvJviXhieWAbtJ4hNt8bKAiNYg55tzKAN8RCd7odwwhLR6FsNdPKBUD1BU4Va1Q9Vsi1Dwpu97rNaZRjdez",
  "key2": "ouxBNPsfgBLGzJnzqBRbxa5TKURuTuam4CrCraUsD6jygE1tyU9nF6m4a7Mqgf3xUkaGqLEYiUEAJyqLFcKifoM",
  "key3": "27qDNUjYWxwrq4mS6C9XB4ydzAxpEzeuXqj7HMMJQfRtZk8Z9KrkegBR7sabtBKCCkn6Y7bRihQWWFF1wrwJBT5n",
  "key4": "2p12NSHocMWCd7KPrtebpaMrgVETRh5PDt3ZKRnaKZ6jDTRVhq8sviwszQM2PsyKkQwcfA7BS4Zb6gBV3qT5DsKC",
  "key5": "3W7vrfu4VRT7Xx2Yhuugxx5wxtEh3pp8mkWc2XE1QeKGz6vU1HeAfHbzzeY2v8foPtr44biV7PD34Qt19igtQcax",
  "key6": "3FroNrREjvjCpiZjbfFFchgyMVQQeDozz5ydw9gjXtLfALBLbQxZahbSz4xmaaBxw1kHFZmYbVyYjnMA3Uz2QzMG",
  "key7": "3y4sp5xhqK42BFD6e51TJX1yRXkjzukitnjnjN4bzppFKS8Ece1yUrKdPLpT2HeQU4FBGKgRUMK4CgJuvPquMPoB",
  "key8": "2oAcCidSvSh1TVCqtKJUCZ3kK5oTMUqej5wQNZvDSQLwk5VJw1WRaBoDZyF8AVjECkFJYCd3EqRDnZZtqPxTWbJd",
  "key9": "4ZToJdzRLXTRPehQJx9m9nnYcKSV3uxsqrgsfBrMvgA3QWf1tdmkymA2HqG29koATNPe6sc6LZQbTqC9dapdQoYX",
  "key10": "21nXdsppYut5PNBDdiC8zGkXddo4C5gW5gXH7fsXzuM6oEi7EMK1S3LenkK2YCB3CfGwTRrvmYRMpMm8b8414oeR",
  "key11": "3jQkt3MmVU9pzgwn1Y8viz2WYNuoib8FwVEa8iPd5Aks3hLtxhB8yJtvuXjZ72si9mLys6JF8ygefonn83LnLJRd",
  "key12": "3ZW6Z4PSdiqvyNg6dDffZb6zAcZm1Xdz6z1ufxCCjgECkrkc5TrbB4vAyoJcy5RC4VANJVsu11THCp8NB9CoPk7F",
  "key13": "2Ppdc4HnwTqoSpqGsaEZP2Tb1hbZVUkYR7kwWDN8UFZTkUNYC7cUrtt2VG5u8sMPk27ZomiMy8zDjrrvdqTf8oy9",
  "key14": "2hoTRZ5BQGqDGypGKjh24k1LNraHVDf5trLJNgNcF7QNbW41XkTb1kGA1w541msqyZtrEHQaL8YzRJxQSufGqz1a",
  "key15": "3q37Bo6uQ6MTwusUG6t84QA7Eva7CHSpnFQNux7anRRQ4VGxvyBomTt6pbrPNvV7yyb4DarzaVatfHbiJTi98zRZ",
  "key16": "TsoAzTUp8crqznw34BWc6uNPipgVBVVpyVKs95XTeh2LxVLvrR8bDeZmzX22kFDimGrZRwHZSyh2SqeRWM7shrb",
  "key17": "57Ls9P8eF7YRuUWfHqboZa2tqqHEP1HGxseeBHuZDK79fchPQDAj136Wtzb2z53kFksCPiY7CWieRikK2NLS2WtP",
  "key18": "3RoHGB9TffzwyyPWtp9ziNA2tgpdnubrLQkv5gfY656MXDUL6jQKa9EYPZQDZ1UmWhdT88EZj6fQPaMfcNbJ1zDt",
  "key19": "5EhFKz4EHrp4tmmWE1bn5ZKxLH8YSy71WKYJpBdNVGTVu32c7mjvZzQjGmFBS5fhFoLtdVS7sW9pyCgkszZ7Jmt9",
  "key20": "2VYjUhqTnn5j2Hhxwjnhhk3rM1BU7wLJAkwePD5xKiEJX7UY2hX7pvFnNKsdB4Cn3cP4hUNjvs4BorcAkwAC1waJ",
  "key21": "81MQjv1rtx8kqxTZZiNFgEuZyeqMuAHhpA4TxhVDm1mCBS4PpRjTbNaeq8wbfdMWofB9pFBB9qGdt2qVtDchQjP",
  "key22": "4nYdAr34iLGgyG5MsbFN9Bb4CX2UxuYGLJcCE2q6G5nP8n4oULKX5T6kx8WDdnPkc8yUCkaZD8LEZ6s8xqUufRV1",
  "key23": "sYDQbouhUWyybEfoQAicRdLMALt5wFVtrWPJNAiqusSjTffhbmo4emCkoiuUnz8YdnpfzELmDTQr3jTNa1fbkeU",
  "key24": "2jrMg6fdvyBtMaqYLgiFS38ch94xAot9uS72NY1LC3DTpXgjLvQfRygTKmFDFpyJNjs2yMDwvZiMPGtdZepDyW9M",
  "key25": "gBbzpEdiGnso3Wy3U8FJNanHxMz8nx1rcRM412arj6TvXA2ARjzfK59sWyehHTzNAkDcLfekaizg1zJqiPgjABJ",
  "key26": "3jQZ8qTuRuQmwDmi3zSXZ5gcazsM3eeUqUcN6v8TZTQysBeJR5UGZWt37TQgGboYkHkw3AD5N6bk4gr2So2wqZ3z",
  "key27": "2zJYHTmf2Cxc1sbdMRw4F4Lay2wpkfZXYUnryrSLiKxEMwhx5kUU3W8i2osvvtQJT2xcbeXxh6uvMNtyocY4ePMG",
  "key28": "QJNKmLDV5LMJk1q3ramKZ4XqJruGpW5usXkgB8nHbz8mbfwGacLrdp7LBerodsXM7KEA9iahQpjcP4ifvbNm25W",
  "key29": "5ePaoL6Gxucd5UPMSZGTsXeuVzhSGu1GbYb2p1jah5cYuapyvyoGiQqfCYme8BNHefyoBtVPVGuRm2soh5agtqss",
  "key30": "3sCTmCzkS6AXvmvfBK8WvwY83wZrfb9uy6Z1opUJjWXHnvTZcRgifaygaC64UEJW3RegXZtusE8ZLjRtfUf5Mz4T",
  "key31": "5nUcSNYrf8NB6iDJNSjWrzsWkKKWsrLY55oTWRgayCTWjWBzG54NTpU1KVP86NTZWo68hqpHVN7tTB9MwDt6SqYK",
  "key32": "3kLjvgmvsMupvtKtDTEG8h4sWabuQE8eHxmbyab9YzmX7meXJP49S6BFf1BfTeSWb8m6Gcnq5gCeyhmKDr3tuKLn",
  "key33": "2w8sWwLRF5MbqLCjRbBiVTvp9RG7VG8QBXnQPUeo7wc6D7fHZHvHosyHrXcKg13ZPedofqZEmYZcX9524WR7ccpM",
  "key34": "4DJiE7F3tAUe9bDsfwsmcFz9x6QE114jd9rm2wExFG285nQGNyHhB5NjnfGCt6CugUY5qASttMutecYxbdNwhwhP",
  "key35": "2kTqjyxSGEZUZR4n7KywLnSdLazPxZvi96Rvqh643JTeKwaxrkXtKnaxb4L9pFuDLBx7rEvMktumCDi5ewjidKum",
  "key36": "5B8TcKMpruJY2Spz9S4qvkpYJmrHuu9piPrHCc7YsVDwshrKAH9EC43jYPemUaAZmP4oLPeR9uRJzESwdcZpZeop",
  "key37": "3vr53tNDnaT8KyGNxYZVydF6hfENsTbJj5VxjEgpD8scF5c9EvYRpR1Pce3xChxHgBSsJjnMKhVLGPLcnNsXVUu5",
  "key38": "5qrgxutpWFsMVtwvMNY4Vosjf5NJ7D7vsysgt3TnfequD9Fuxy6eCdv2JzcqC8TmViM6K8CGhaJQEuWX7ptuxsJz",
  "key39": "64N3HDF7eF5rkd2tpfeZdVYxLQ6hzEkN4B7YKkLHs2kXuKe5Bi1m6Qv2yhHoWJ8P3tqkmB9rgdo8HAg9D1AfpsSq",
  "key40": "3WM2oMwqQGbDTSjxvtsshBDdQtt8PXHWemXnPteVQoYdSjD5cUhFaNNeVxgPxRNEqKVGWAtqyaNUNf8LejkpPGxa",
  "key41": "21o6V27z9rRhWkCPrnXbDRieZMo9BAMutoKQ2vF7cf3DyDHPAvwqkxdCvL91D4sFTGHAhhCuSAGUgV7XNVvBCpSt",
  "key42": "5nEScPj5LsyWc7voL4Uz7BqA3RKQigLJ9G5tg25kg2rA5wKMskP8g2YN7SBDLCcAxtuH9rWXMntYjEEoaDfMGnAc",
  "key43": "59ofCdPYWrQeUAraUAVTfUn6WvFQeWoNaJSYFdy5ZXSCtGYw5ZabfKbdGnjeWsN8uqHDZukTyYvZ3HZr8pRCfeqH",
  "key44": "26HkVgFQDy5J2ANYvWix1p55hbBC1JWsQTMQjQcZN3F6AxaxXxKWW5nURMNFEUcWuKqxcfUq8SciWG5BLuPXDTKk",
  "key45": "5DrCF5dTHPXa99UbzMArfJ2sDcT5Ym3uo41EKd8h9jpGT96tQRuQWUB41e4Xspp2EdWeDtWEg4m2VC5ywXhF1U3q",
  "key46": "5fqZKJwzEjZArt5DQ2XTGDuJ1cJZyjDYYVyPqrdtGMCKACE2k5PFbsPs65C7rccNNV5HBB4FVKCb6beFcjxLQiRk"
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
