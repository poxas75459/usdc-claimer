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
    "23jS9Y4HEAzunvEntBwzPKfc22SmS4yCG792wAbbgLGHmPzz4Zh7gPjrVYugUA9MJ8djsp8VzR6ktUqWSwKFzmZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7CTSYXa6EdDVZf18i6ysk6tyDMTE1rcUZJgAeE8XDHi35d6cwavsP6LYRRJ6ooT62M7mTfpGKgGYPxyDntMc5G",
  "key1": "3wXwDHDn81a8nKZphsx6RQimEBUgEv6b6tn8wcPfre9PmAWeCEf59jgFVUrqHy7Ez7Ex9YNredvmj3LtwM6fAPWz",
  "key2": "5724fLKWsa9fBQA8a4RjCkRgf88PpKGBF7CFg46x9K2PUPEGNK3QNJQh3B3Ug3mVPPf5f5L9zN9zhCdwppCrHGah",
  "key3": "4QfDQqKz2FUVLE4nJxQbbt8GB18gxqmCLvmj2ivaqqd9tEkGmUFaQPgaKpJtBFnVNnHPiuvfxhhtBjj9MvT2UBap",
  "key4": "3rni7Bdij42fddsmuxgt9vpJ7SQFuXZomUZModktZ1G4RxCiLsyyvuSLufADu5jE9iZD51Au8VxaL17MxZhec2dS",
  "key5": "F5m3ky7yoSdR2sTzy3LY1hdgtHZekrc4Vvcn6RbQzB4raz2r1wErTgkuLfweLNgKhxzN2epVXSGFzhTVwCtiAJH",
  "key6": "58vUT5KAseo1KG9z8BoMBhkfauh4bgCzk1VstTbsLKi9vjwB8pLf1P3XJYtmDbNuva79PiMSxvUKFaMVaQkQLgA",
  "key7": "4bWwLn9GCyqwDXyWSYc7G2w1pTKgXVWvieeLzLZYvRa4rbvWLFGmSdaACnwmFRciAGn94gVNESXSNwSPTmxT8J8j",
  "key8": "33XrWHZt1YVBCvzgK6dbwK4DzYGffqHhQUTfdkJiZqBhFgd3taaix9TduL2e9gxMhaAhNSwmRwaVfowbu83ak6Jx",
  "key9": "3i5tvmTkARfNVHiT6ALB9QuAx6K3v4rmT63EZ452zzoSMRCvALvh4jFjmfu3YJj7YSG47e5d417veQ2K5fviHiGm",
  "key10": "28NwyVNHDr13g5agocdLtMHEyLj7rihxTKFysmRorp1NSf1ppQ4xGCZ4tRTVwY39oxCWZwBap6UibCYxdmhmxR43",
  "key11": "2EfxkcF7HZ63gFLCp76C1xNP4tT3cQuAUQLW5paNTM42BX2WP2akbxNCM5iZ47EDsroqwZqVKcbWCVb4JMFSqKjT",
  "key12": "3hJgbkyWR8TxJW1E3zBzqjFFUfn87KnXe6TxMqHmrvm5jBPkk8Y64To1pAz4q88pyCmMCNfDtCZH2KN7QFo8js4V",
  "key13": "SaxSVKYLwH2wrBnFCFzhq63qfC3NWKyTE3Qj5XATU5yZ3K3Pp6BZqEoGudhEmJA2DjecAoiXcsbKRNh8CDmVQQr",
  "key14": "2AAaymjteUyiDgjBGrNTo5QRgdH5tH2XbTEZmmJ2jgryuEmtjwWoTEa8yGoU5bxzLcWQYA91G1xx61FeRRLVNyjD",
  "key15": "J5NhwCEi3Z3r51SAGxL4bPeMgR5jm2pf9WaZsGsbEd49NoBfcC9eYMSwgdVVFFc9wq5vs9QzB2qkbunuxHiKEit",
  "key16": "5m21T5QdBpy36iXaXwuNAb7nsx2QWCCoFX5CDdPAibtJUdCu5KGqHnnhRCLdUTm6vtTW5Z6jvQAVNJBGG6oLFfh9",
  "key17": "5HMvoUYdeCTyYqvFJYy8xKrBSe6tchHEA7AT1C3sjqnWAsZcqWXbngeUdRy68xeTajSrDXArM3dxVppYyDcBHXsR",
  "key18": "4m7ie1EcdktPfdpjxBqLywmhyJom4G56t7fnEvgvn2LjBytSVgDp15uwyqSitQnEFAStAWhM4z92gnpGv4SzJmCX",
  "key19": "59nrsr5WKPGCY6tQe4Fr9roL44KTVwY8jNABdCVJQqDEVKe1MnJr8poSteYWuKQx5GZBjLTNq5kNWtshk8DVJT92",
  "key20": "4jon9ymCsjsQD6dEHygtL64bUcajP7zwG6hXGHxVscTYVWaFNMpFzKyTKV44raM6QXDMUZRChunt1E6XtBnYuriN",
  "key21": "4Wzbza7y7qsQaNkVppnxnhQJ4Yww1Aq3NJda9AFzXQnppfErKuQy8ig7PGdmUdTAqSH4ouFY3JgwFpVn93DHKKrY",
  "key22": "5pUubyhpDC4Cw5Gmbmk3RTuDkYxAQQRpgfQNG8rXdqDxa6HCsHU7ER4GRq1bc1RPZK8BLGfeLzbT4GCYRjuM3PTC",
  "key23": "3MyyLYEwFxeFeKC5Pc2Si7eDKoKxEfJePsuVtZ4yS7uofqofQqJApZozytgTAoxhwvw6r2xoygAHVPuankkqEkcH",
  "key24": "3zc94FbYYvx7P46FEKtFghpHPbrkPL1qTghvpDddyjhKYh19YKRQDtzZtfDfjxVYAYJXKQ4Ta4fabcWw7wNMomD3",
  "key25": "CvHbG38FCqjmTVh12tzz8G8pYtYZh6r7wMyKeJdx2nPeCFZMMizDMT28ihxmxiLbNKcQkuMFSY7CWacsMqYjGoe",
  "key26": "25QfPEiHatkeAXhXHeTAwuDqSkTBEyNJ8kG28eQqcrvvb59TzA28qDf4id5KTEqxtq8zGPJGPvMimYyWfr8FeeS8",
  "key27": "1GR4NM6mxbLBge8pajgmqmZoDttTHSa5i1vph6haTsARbKgWUgyX83sU9nK2ethcdkviJYSjj8BrwpXxDAm2oer",
  "key28": "5AArL5t8Q33zw3556mCC4PjLopjidcVS3JhoWMsm4vDJLm3i85iHUsRGoZi2WxHunmc7fXazhypE3KE4CZwA7toj",
  "key29": "4wKKKGqZhCwrjnBuX1N7aizN5qqY67EjHKAU2c8ZaBxomgidDEuhXYkKPy6b5UaKqoqH8KHxX56u7qaCPMUUdfTp",
  "key30": "4f1QHaEqdywiNyVxKD96Q1exMQFkt5AjGXHxmgNJfCTpg81qoGmVNh62g5wZSvQs4wQRmxC2kYGbVHC8Xj6SV49s",
  "key31": "4Q8byJtgYbzrZcMphHuW98oQrf6MPXotKUXWbT7h22gEvJMcfMnVUrz2wDX53SYSQD3xmoaASV4VJjurji1xdt6m",
  "key32": "4s5tyoDNSJUJ3T1W8fqu7aKFt2br13Zm1c35oovmibnFoMTf5znGnCHUQW8K95fSfophgUvwfRvb7xuSTL69PXWE",
  "key33": "5NdcWkwgiiHq6SWmV9nnomNF5pVwt9KBF6bCqv7KQoNiUAnGY6Vg8o8oVvV9AXQDQA9jsQ6RgCxbprhmxjHKgWJg"
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
