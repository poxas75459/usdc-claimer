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
    "5RtAZ7bUGyrRnQ5y6nCfpejrCf3K5CGKkhAMhZz6LFffihKY6bnVK8T4wRFyGM59mtzZM5DdwzmYYfXYurDm5jXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLKyXMAX4KgnV75m3MGZpd8MY4XBos3GpDg71xoNoKvteXjUWC6D36kaH6LuEJyws74ngdYmoDMjDQfTAN9d6vF",
  "key1": "4kL6JsnccE3ULELMHy4U7Pi433QRyc61xQCPMo5628Wyv5rSfate7mfK2md9ESzcKba6GyutuY7vFrQN9jrFoCb2",
  "key2": "2VxNvLrFVPzrHXb8er7aK5ZknhrNgzLJ9Ca3S6KBmUSgvLaWZVeKyupqzKdcNwzmqH2rAPHuTua8idefMGkzvfPy",
  "key3": "4VxzMKrodBh3Uad5VFxuiLpVtdSj9BSxrqAteFCnV5A47yVuqQUyyKRzhPQfY9XQpWfyZi9Wyv1ga5KLJq2NKj3A",
  "key4": "5snnk9cwvyNVuV19yWAytVd38xyxzhNSsbUDaJzaeGc5bLLVDMbH8w7aYELCu12eQkn5qeCyjc3F81nyGZVAP32g",
  "key5": "ovhB7uSnB9drwpYLhXnxZyKq2HwC7jtv5gj3eYxAhG3A9op5QXofnXpbVctUQwg31RERMnUdR6Wkxw6eTqEu7fc",
  "key6": "4BtLT22HkZag8au3FwCnB5x54k2sMT1omBLneBTBLNnLFqWdc1vDqV8957mrPQNb6BuQaNDkBLGqortbZA2AKPzh",
  "key7": "4siALUtCnpreWU1dqpqK2JfEhNZZmJrSRbGnrGxoaExdEtVc3KLFvdw8vUDxnRXrWwoxrzzy8939Ef5dr32ei921",
  "key8": "3uPgfWoMENSswgxSg7g5gj2u2cJfk5bAjaKHFyGsWYcakZt8xWsBsXdd3EevRi5X4BvzyHXp3scHT8b7vLTZW5vs",
  "key9": "yNCaNQn13HsciXn3xUPKrNVJiju4Hz71uccXotb6kEBqsv6v9kLd4GGqPCXMCGSsGcRqk7qtArsJBa4mYBjYdAV",
  "key10": "2b1wR8ZTiTdKX26ABBigY8Kxzcj6Bo9i9wvYFLfjNe58rRX5o37HSXRdr5F4ekq8cbM8jokbe4L9exE8RdAsusCK",
  "key11": "NyzHdrGugXJF1tvrevLCMbbKwNqPjz2S3BbNeAJLyNygtg6JFoNBusWh7HRSRcVa19qCK1NtyAjsVA1aHMkUTfJ",
  "key12": "2G5KVUn6xvNpwaCGRPn4aSq3Cf2RUAKbaHGHJ6ERseo47qwigkiLVoRsLSPPtRQxtwXuR9KahUd1csRfnwKiES6y",
  "key13": "2Qo3YHaazypB7MBBqL7GANm7wEbfpTRS56TsiBj5oEEjARrWeAFg7o7NRwdC1puQKmzpTcfftqDxPVPAj86hVeHc",
  "key14": "2uH9iaN2Mi7r73DgKJBMVVdmtjxBQqBdGQsCM7cK8wDhXbTnmZMtohzwdMhSzruLtKwWRu8wUFGLmR89JagPP1oA",
  "key15": "4WyRvwMRA5kSVZb8Xi43sXPC4NhtcM8kQgr8KdTayQgzwyMwoW3kb8bqjXC5p4jFrSAVNL8QUWspb4vtHPCTGhBQ",
  "key16": "4w6fxBBixGdpEc6pvWdqWmWu58GFddcSmsAYN3n88U89fo28ShiBqsAGSaoSaYH2WqGAUxN9FUwyShbFGvhSVXn8",
  "key17": "39WYTMU2qMqK7grvp2VF3Yxzq4xKUi9uogzUedck6KRhkogb3NX6SVyoqJMx3t3QtVCR8RKQGE15BmZALUE2CVRK",
  "key18": "4NwTSQgKm8iCjg4u9b8AkNDVDZPb8yx4Gt48FTZAAT97h2zmMZnt8p6FCiFAYjERYESjwhPk8gtbKMzTaTiBD6Qt",
  "key19": "5HvFg8J9sKL53gC8DNGRRCf5pWXcgrKCVS9dutQMf3CQ93jzGdpaMZH7LEwzUBjFNLgH3iLo1FY11FG7XFQeWLPi",
  "key20": "4ob4YvXNZJvCAdmGgktZwWPjZJCjwCJMN8rUbnTz8qhFq7Qd5rThnxn7Y9qxAigMyw65T9bG82PnfABPmkvKafEP",
  "key21": "63FDmsNyHhwaiebReLLsUQUZQmWBBYEUXzLAGYhaR1mMaGyke5ZkzfGyXU7gFK2iHGB3ocY4Kb8Tnq8Wp9uMaeT2",
  "key22": "3z1R3gCiSbSYiZWYE94BSV2FpUvXhvEDv7CNW5xsRicQg2eVzuUgxgnsfdZ9Tx2UTfDYEX198pJS2ovJDmhbwwC2",
  "key23": "64UUnyyZZD2dHFjKzCCgkkibFwx8BCkQWiTR8tZNM1NiNJjpYkfYDTHNgaNAKvMJqsvgTo6kjJGPTxuo7mSrHjQg",
  "key24": "3Q9knCDdpx3rALU3ewRbAmUsZfNZ76mKTV2F4Kvv93iDWuFqHy7bkDX1z2iTqXBrxLB9zgtr9U9HsxYidUhMkr3m",
  "key25": "29QJLbFkMrUMwHKMYzrFhR7k8nhdiGfTo8Ls9smtPLB8pDAHLkt7s7B1yXkv1meMV3tTB1czWfoF1o8B9zMc1RyR",
  "key26": "4VMb9Q7PhMTtELikDEmb26EztME4pYSsv9yJwZP7bBVNnkQPuQcd4cpruXk328YK5djvwyyyJga3KNZzXUbXEdta",
  "key27": "ioMxnb7bt5pZc3VYTysJVUCxCoiyfnZvQ8uE3WbQFh7WNFRd5HQjWkHMNkSxbBsydnLgLVVLMy1VEAoZPHTbx6L",
  "key28": "4CNdKYcy6aBnmodqNddA8J3GeBmBmnnG2XRmpDa8xMxfkct3YwFZRqY9x2DR17rn3QFCSz7wB8vfkeVEC3R9MY2Y",
  "key29": "59kvHoNqRfHMwfoaqBKcqPB5bu9Kf4iABiNMoPgXCmq3JM3CeYex1JWSMqdMeuGwQ4fVkfJw3o3dKP3WHUh9EAQA",
  "key30": "5Q2ZUnbmcKERPQx3mktQHERr6eTRwLFJqLJ5FB2C6XyK8T2sQKKiX3WuPiv6ngoUjNeZuFDFdVsxXSGevvm7cx3s"
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
