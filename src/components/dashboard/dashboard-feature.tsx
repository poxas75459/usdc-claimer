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
    "4LbaDG2SFoUj4Lo4uor7e9qKWvQXKUc1CYX4T9fqjnFgj52HgC3rEzAoWVF5YRuFFmNkVPCunXVV3h9xd9it2toK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtWfLB4tRZD8Qt2bR68ABJ1oaVYKHzXKqVCL6Z6bntHk2Bk3dECirYLcKD6zXJ9jTcbL5qZNMWQ68JTqdbS9iQv",
  "key1": "5FzkNLHZkjb9TK4qitbeScVxtTC8gLmP2nhBsQDyxqzyNzN1L4iEGswU5YTHH6pg6MbHrdbfAuSAGkvT6TGVLJ7t",
  "key2": "2tHq96jERR6jNhvCT8nUu5jxjYGahnCyFEFLmaQuzJtfv99cKKHmivhkn6w3BWgjjbwQsgEivEf5hBno1yoWy4np",
  "key3": "3R22UAfWLbWepND7yPYjBYxLk9Jj22S5CsA8AZ9WPqcNmtSdkFLrmN34iCNXPbrXwuQzDT1EByWXAZEX116QJMtK",
  "key4": "31ENehUvtNWALTbj9Vah9g9Xy5PjAj9nGcaCtDe8Z9Ccp1FKv6VT1FA3z9ossMKqhu52m5AtVYth8nD8myca2Gnm",
  "key5": "5Ce59ec1fwAFaW9fcksfrZKzLfi6MD9zgxiN5CngLzEp6xsyWdpwS8v55UXURhXXjEbJHJzQgrzzSKhNvMuJX6sH",
  "key6": "5gVksN4fU5B6WJRyVhtjUqiT6jNEKwK1cqa7FB31EsDvDwqz76Cz6CUtcDeKCm5iv1uUYdTgiXxcmhmUCS3CChNV",
  "key7": "5SvDT3sSBb4a17a1nRYYJrrmuCniPesqTFJs8x77fgsTHKfpQZ6Z3BuRdRMfBfQzyL2AVxkeZRPiLB5qtJ2gWnZ1",
  "key8": "3VJKVW3PMDUuwcZKXBfKLTACtFTihJ3MMzTcCfGgZNoSjZXgF4fb4nkrnSadQuYeRXN6SN4bYPg31h8a6FseTGiL",
  "key9": "2Ex594ui59JhA6rSdkCT4vfQzQMEJXYFJq9EvZ62MDJ47J5QAUzQpyxBhqbbvLqmMRVeYg8ADBWSwcHbVtmkSp69",
  "key10": "1tBRLfTwStTLLv5vH7EXM6RK7Mizz2qUbkoh71kNKktCqCTxaov8axnmcaqswwNGFuDQLrVe2Y9cohgVGs3aEiw",
  "key11": "41KGnCRbSGdTVB4ucw9Fzspg5kgogyyh23c2hM4QLo2rxcc4qx7S5nX3ob6zj4AgdhBzeDNcDr6doFFJZgKwULPW",
  "key12": "4EfTyiRAVUyom4PnjHQioycGVFbmSbGoK3UdrEQkEtZV3z2aaSjYYhRVEwwmEc4RGa1kossuUyBdjUT2miBScfNe",
  "key13": "5npSpuJrTDF4mCPRtB9Mc4y9HMWJ6QiU1c6ybMuy8zEiuTK8aGCa46MrPCA3A6YHqVR6MBcWBDZW4YAnTwqKVZb6",
  "key14": "5DMFmh1QQjALtyrabCRN6tbfnA93VqxD6fanjAVkdQx9uCnAREgyNggnoTX4iqjqkWHRF3Z2YJDvRuyGRfm2TKg3",
  "key15": "4yyJLFXV2B46YeYPxXUUpSF3MVNSXing2owmsgyjJQkbBrzJVEUp92MMkNBryQr88CJc2rCv1RXiJeqqJzKSWmxB",
  "key16": "4Hvg71QHbqxGuvz3zj5K8M5ciUKU79hYBKjMNqKHk4ddtvcwKgnRXXrsJkxXxK876S5U28GJncuLzHjE2z9fpjxk",
  "key17": "5M5WEGrddXVroM6p8Gua6oiGuq2AjShebMEgA3rogJDmS5wdfmFjiZuFYL3cxFtXXQWrASCjSTXWhrAwzEABaHjL",
  "key18": "5csuMr3hwq2TeFg5jnLNB56Dk4DKK14LYDhYFm4ckfzrp3QHCpHpTBKfkR2UKbQKjBvqrbRrsu3N6ex3UzjNhRqw",
  "key19": "3BWfZBAAw2GqcpEMfBe7qc526VCsfjB7SkD2SwcVMY969DYs33snjfemAKKc6t2FoZkECmt3VMHNWYf9fQW4ESwR",
  "key20": "2ZHVHJ6JTioLNeGyen9PKYyWyQLaj13SimSEE2b7FXXr4qqaTBJapLbjVEYewuh3gK3qTY2bzBF9ioKAJ89Qq1tj",
  "key21": "21z8pKs8Hzyd8HmWXknNLh5XUPPa4mFJAXWMsdtDjtbZbEi2HNDZQd3brEvvrgDr1EuJx5HvkLDckZ73TttmjrBo",
  "key22": "2ZAAa3oETCv7zYvN5DkXDZ1SpKbSaQEr5W2BDXTXHSXPEaoqzQcXWSNubewaFShCXFkSiBWdyyDEutgAK7YchYhL",
  "key23": "43q9dkX2mkQNTmxVEZH5V3m8hgrforepECxULLm2ENB8EhqNgUasGxS3F9tiqiJdZPN5F5dqNUt9tD3647cYVLPf",
  "key24": "3bGumQefS3RaTd1xjAmN5Cv8LWUMscDkZ6CNjpV3VKAPU5hqk1KHcTbnsttNVdMNP3Lvi1Wb58q47z8VycDuwVgW",
  "key25": "3KdvYTHK7ttAm7uxtTtv6sBeXCXNoTAhn5t91nSRrhtCDF9yJtU7K3RmFmH3VZZWgfhCmJ3Z2ZZMuSEb6RicLQRh",
  "key26": "2MNYshLW2tm594onN4Nmpsme3LzfiKezSy2dPebFWiSYkg9uZjPntNmJJLDnVuH7K71FubnxTfPZFb79scAg2o4b",
  "key27": "417RF4mUrvTPqLKb9tjVfnUukrCiK3BTWNZuwenFAqfLAjq4qhuG8u7GifhTQD1E6KWWPtXtBxeFGF6HgpQ1CgYA",
  "key28": "2LhUQJbZHq7WLosp55quQFfBtBpski94W378cQ7QnvwLncvMG2rejYyBUEYLRfHLjr41wRP8DgN5fRKoirsu91ZP",
  "key29": "4zsssnKCbNDrGFSqPtdWWh166f5WAFggf94KyuECMHT8KW58kCD27k2ytKBvekpidU7fifAaHg1T4L4Uvw77nj3Y",
  "key30": "RdfJeLvTXLGD1s98VUcsgzVbARDuC5hurNND4BPwxjLRVDHuYCeBsJrz4Qu9PkRVdhvjZj59hVFAXRHzPrmfuLr",
  "key31": "3k8i71BA8fxUjjCSeTuskmUu3fboGWWv49kwBWhQsMPYDxgbHnhhuVJm62Z5a6jh8EgUmR2D1mTtir3YqA4Qe6Qo",
  "key32": "2AwkU6iTDBQq6HuJgcV2ofKvYsuux9W6U5ybkWzzGU7cEtsU1oG13g6gCbj2ptQy2FsCXvaSGroiqkwpjnGhf13o",
  "key33": "3BE3YPQLC1oN5VQtZ6kjctRkkqAaQQCoGLwJcB4PXWsbv5NMBpdQhRHYvr4C7wdwpNjcexaYkJRcTD4zcwVujYFD",
  "key34": "3qPtMGC9S22wb3CE7QErojWxgyi5JFiwZ1emyHm6Fiiy187pXm4EP44h2skxoijzGxQRviM5avkFhs2Z9E68SvnU",
  "key35": "4saZJN9RcmE8DFSCPhWRyuSVdrNgwCGPKKQtmJFS4azyckCPmTSLn75fwH2oV7M6n3E4CwDvTt28i9fSQTZC8N2n",
  "key36": "QpKLPSd5FxfsBZLhM6vaSirwMsuRLo6WX9etAzT9nsmXiVxfqPUv5oqnQGsUGLTTxQwweQziH1xHraycnAje7Hv",
  "key37": "5q8XQMiQ5pGxu8duRvKJf26MHxasdMEqjGTrcqrM6GqkmZzH9w2vefusHCuK6fjWWyycvsSk9UNpedRSmeBsfSX6"
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
