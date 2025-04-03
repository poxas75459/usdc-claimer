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
    "63j9ahvSyjrLxxLB4p7BxLrAh7iXpd6qidLqEJiCTQKbZNGDJwAiExGgut6ojKPyARAE4tDo9Yg4zTqxKrRer6KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253a69mQnToXNH2Jv8T5PXyQfhBvqk4G6DTSuW9vfXvWkLrNqSHgobt52TfUjFo7NeMu5RYLJVzCJkDChWRVhiwj",
  "key1": "f28SM2p4aa4S68BY21A2VDTB3LFDDhSxcuisEjRyMioj3tVvQnfna7dmv5mLkB1m1aPsvyRdqNchiQE3GTRuJiw",
  "key2": "3CKSC5rnADff1cpfBuQy2a5o5DeMqCaLVydZvR8TiQWS6dXjZfrVVu8ji4Es9Qhk49GpQRLKVgMrt2rpkXsKqoMD",
  "key3": "UnmuH8vsy25uXBHUx3LwDgVsX5SNFFk3QoabCD9yPJ6abbMdxRtM1TTGGV3SNwrN6dC78G3Cd7gaAYBiCazhDwx",
  "key4": "3w1B6tLP98z69Cp5X1mAUZfsZcLBDVno6SrSpFhEWvF9y4vNXJYjmpqRGh5WQBof8JidCJSeuUmabpQMcWNMnUBy",
  "key5": "3GtEuAhNuQKdbaXhgdNnZGLzFt4nrdZ3peGS2FfLJ5T6bzsf8gtuH74u8xD3cHfaruhUdiidi6oD4a1KSrMRmtG6",
  "key6": "3qSRKtC2fyKVjw2h4SRHxArEucqv1E62dDU8BKy7h1kJ8pxZWZfg9hLL3fv3ExdzCAhedcMbRWrNSjzrX99e283s",
  "key7": "2RhCf5TsbCi9ycveDrLDdcQF7Jbb137xBwkPkG1ie1Q9wGEmTqFH16r5Tk1AqyEWCSvLaWJb8WvS5jNCNgGPmHLC",
  "key8": "3C9PavoEQDCQLViRD81yS1cLL3bPutNd8pgqCd3FELgmozbMVqMXEyve5cVW4WcAd2ur5xyyUx18krnXbuBr3DqX",
  "key9": "2uY6wXDqY52yKYzNKxuEfUwHLngWuaB9egmz8WkRegcJmShQ9EptjdkuPxCisiJvNXYATYgQzWG5exohp1q18vcU",
  "key10": "4Z4SxZyoM5Y3d5r6RyGwDmMrTQAXkEmPtfiMmm6GjbpSQR5WpRKteczMyeWuJQKwyxaWNV2vsEpqjay3stvcEqvu",
  "key11": "4ZZusBSF4f7kF681TjXx2zSX4pmJtVs6YqpFAt6TnftmfAL7oiHxP6pqjTLRFGc5poUXakbix69PcNbd4Hopnn7d",
  "key12": "2TrJx3PxdwQKFoFVxNHmEr116BZ7YkbAKn6iQPLcEBJaLCRqge99hzmSTbrDxtHukMi7XnDWA1vDpmju2tCY6Fji",
  "key13": "r9itiP2nq5BMZHVNvAihadrbLZT5tUNTwHrQ3tHoXHM2TEbSg5bYuMno9mvkUyxD4E759dFZoVAwPdL1CHtCf5x",
  "key14": "3MGUqnZp7zqexr4maNourFvUeJbcvKPxMLsPAozkrBxNNKRhiqwsiTXKvMhdcry12EJsZN8L4dfnTWtnztV6EVU9",
  "key15": "5GqwstNY7wXpESLkfegFSW2w18tkr1wU2DtJpLmi5EBkmfyV6wz5PYsDMtrtkAxPjU8Z92sJQYuRDjv99Wxq6X5N",
  "key16": "2WAAs3dgfoV6BizhQJj7pnReSyU3ZrHNawRweDcZe1XvcYQaPedk83RHDSXxHJcfGN8B5zFE2jjXn3aKLZ6LtcTY",
  "key17": "UHDWxYpT5f8LxzUz4WrqezfRmSns7oMbdKCU5S7JctiRZHVaPQGbzo5apgQ43tUhgqMbVsXUkaHSE39Bc7ZS1Qu",
  "key18": "4aDKbXxcNmU8CdQJRhgDhYQTycJBTzCbAoSk6b83n234V8mpNJBuf53Kf3c3SkBpBE6JiuBR4bDiw4VRr1tHQcQ6",
  "key19": "2H6khse9PcGdrNfE3jgY94N3GDNL5kGFZ997fuZ3xA8Hr5bsmZZ6271rzoe5oK92sXz4sBFi8jFP3AA9a7YtU5p2",
  "key20": "3SbxbopbuPTB7mVbY5rfB1kDwqEKaSoYPFrGcQGsk6eNq1nC6w7qkkAqLeX1N2nxcjwcikZkGsSRfisjkT8pewVr",
  "key21": "3i233mKQ3mnuYKboFEWfLMAbvYucxiWSMTYzq9ZxkuL3JwvwoN7DWy8i6YexgapPzjLZ9CdhfrzpDotrUDiVs7WF",
  "key22": "pS2WEop2pVLtzJ11gJurpdggtJoSEgNv6DPGwVEqeGAWeXLXHcKtTs6giDybEe3dXBedAHShMRYnJ7FbomGyKXL",
  "key23": "5XK6ktp8c2P6hctVkXkM7Fb3BMo5LLXMC3stH7yk8hsTFZZgRjxpa4VfzGCTcBVgThuGLggMYxW7omFLriuu5ev2",
  "key24": "5tyeAZNc9oev7ce3kRMgFuNKanSmhBRvYpMo3stSrEspiLrq2fhp2chsMvvJgDYwqWpufSYBKfHYGVAv27yqVuxD",
  "key25": "44LnJ4UpWiy3RQwbUVTh5TLW5mBDUrgETQprtaZrhxkvN2XmombHPB5U5sFVA5pz4UY2kmZoeD5geSChao5W7ngh",
  "key26": "aNhVGkwbvLBevkCYdS4t7JfQjg2yeRXugQJGvwFkkruS4gfmUiDgSFWa4KNQiaNcYZt4KVXQHmyqKXA8svj2g2Z",
  "key27": "3dAdYfuAS5EtFKXard9vMFrNjW1XPFH3x2EBMNqUZRfDVue8dGSxb6mDZgBydnTcdG16qFmRjxxJttww8RGqxDCq",
  "key28": "244WW6wonPQb8FDcZ75jP2hTr73ReSW555QKeyQ5NHCYgw8dQ6HcfvxRCKMHm474RnhjJ878rkxAiPJ7EcJAUHE8",
  "key29": "5UW3FKzcYinmePQXtgX5uwxSBBhuuVq2pNXrJ58efeVZw7dyZtPbDZ7k7oNc9HtSQBLfVWiTR9AG46A8MAiv3ud1",
  "key30": "37cz6WFseWzyj6mCfRuNMqLWFHp8UEMbjAURbpE18pczxGPoNDo6XoxkWsXQU5YDgKv1uFuTyXeHevo2qM6a7SQV",
  "key31": "3tVirQohw2LTRJ4SLxjCYi5gZeMtbEjKB6zvy6JrBLNR2ZQHhHUzSichQMwtSeRCHjsUSfS44LdZXMm2vc7ryuVn",
  "key32": "41wkv3rrv16EWyGAT6hDot3dYuqYTeLaHwESKVZ7NPNhi8Kn1hrB1jkYXYBxojdFn4FuL4xTzNfhVZDUvNxLwQcH",
  "key33": "3wuf8m2rSF7J2Vx7APVMXSnMXVj2A1p5YxMsuDYbfJHaEED9By4w2hxBVgKFtgCNXLJFriWumLgkF9ZtUCEL3cqj",
  "key34": "24x7Y4TJu8XZTAadjUcUR1TGKXpZfgR3ix7U7Ap5Py2sgKp6u5wZKcQKAExr4n3nysDf3Muc5WNstnK1eWn5drrP",
  "key35": "QorAeNzmUD7GWxdX2TGHajrLpyZ5XhW8mgNr4uAPQWc7JQqGf3sFRkpLpNDLZhbmsWGWjvFXyj1PgnqXfQhVJsf",
  "key36": "2cRZk2AJUTab5yaAYnQv6csdnj3L2YUcfzyXT72ghU4pGLRCUgTN1fRciMVFJGSty3P7EmjLR9ncJtP6GBoGnGw8",
  "key37": "3CZHDdSpbYPLxSANjBXcJBRbTGk3AaTiqmC8BaLrmdmrDC9hxKvJj6yS38Wqv6vtuJX1EG62CUkfv9ZeHuDqjFNZ",
  "key38": "2pbkpp63VtBJjMkWqDv4ypCrJXGT8jmrCDh1tKP2uZcwAQja9YqJTjfPeYRCVjpz8TXNcuMFNfTKqU162DiC1oLW",
  "key39": "CdjgQpC176GCGNAD3Q8AVU8iq9GoH9VqmYYvTNSGn5vpuxXV86GGJCWCXFKVDWdoiDHncCr4kucH5YCx3MtThYk",
  "key40": "3TQv2Xq9xzfgTN62fkFnFHgaTnVxGuMv7gRqZLjTeNgGvHGUXmPH2FdSwUPVz2wBVdhMDzkuNzn45VUKzHtHEkp6"
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
