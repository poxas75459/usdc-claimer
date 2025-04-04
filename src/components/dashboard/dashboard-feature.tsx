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
    "5F5mwKSDoanotpjf4Lfgvw36w86dXgZmzhcrUVVrgMFcYttEtkcseg8vi66Hgek9MrX9YEHhURu2LpmRXahBDuzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tYrgddcJbJWhSAkUK8svzXKHyifAbHEjn3z7Ypvd76eVMGvNEapvAP73FxriMr54i19ota7riBqketY235TzZEg",
  "key1": "3qpbSePzS5fiURcHpW5q7ucKqpq9SwMBgWHZCrU5i6uX3tjMUgt3v3U2dgJ9FgvosAhPWb6mNVjc2cCv2B8g9g15",
  "key2": "5t8sjbo4pduvcr45fGhkVCRmvrqGiqGh2Pir54nKwMoNruEuGWyz29p47oXs8HaW3Qpz8s59fCkSCTDeyvSiJhwr",
  "key3": "5azqbYK74B5cPqa41CbvTBg7b6wHwEUBiPqUCX6nH3nMjtxjmP6XJSZzQZ1vQ9MHPL6KpEFPQikLNuvt1tL3Tsse",
  "key4": "2px2vszT3siRQgbMmMsssZVQ8b1fvaexMroKXuFiCFo1qex8fqt8S6FdCq68cBMWZfLq5gVSSAqQKLc8fWZ7S2HV",
  "key5": "XSyjDXrtqFW6hS5KYtY7WeCRMncvDW7V2tTeN5y3a9CmJuUTNARd9dptK7uFcAe6jCvQP3XcxDaLTNsUsWPh9Lh",
  "key6": "GdSUq71CYK6JgnnetscUwjhDzonmnqBWFZZok1vus3aCRPTPRMadDEfUSgNjiV9BBLfjhZpqjhETmiuSmZHa5Km",
  "key7": "2iasmYyvwvd86HCPESVUseg2mVgBuLmCpQZnBvp6ZbAHME5ETLpgDcVhJJ6cmhjUDiKQq12mPdu4Mb2qvuANALwT",
  "key8": "2i4smMDN52ncvBJSy5Hi8dveKQKsQ57UM86jQpmEGNeM75E51uWFav8E9XhnpEQ9AUtJF76Pf1gnZuFACbCdVqf",
  "key9": "4JpmRSeck7uvJHHD7hXxobVPm5qdmNGAsM3Tg5eYc7GWp1LmEV1JXWEJGeWAquoc7MEf4mS1Kv5TCNgndFiXGVFm",
  "key10": "2DS9mQNgUyENq6dGoW7tfEtpueM8Jypeyc6HtsvgtDXkc1vMBr8tdtKHTcF96Ww94u1XwwWN53CqVXnxuC9iSBmG",
  "key11": "57XJx1tgXM8M5SUCTktF8rJfSSZJhAwu48WbqhswrXdP4u4tLriGWWW2u1zz9RQYo9Phxe7BATWaWwDLPb6wVfNx",
  "key12": "3HBV5EjQmHSCLJQQgfmHj2pjCJgAtr6d5pwQ9xCQqmpcdAMozSpTvLbSvxTc63yzS1LfcAGhpfKVQQ9N6NDJW6sW",
  "key13": "5updgGCnvGSFTM6JyoskH8ijYrCcd5X72nerbLEabZnf3CMm6pMFHheporeKUCYGhqdhTaZ64uLzmb5NF545ty8o",
  "key14": "4aQwn5Wmc7b1ENUAHcbJEPc3QMEXt3n2yjKkJv4SneT1roZ6iaNiDFomELR7ToyPRtHxC8jGoq2MRST13uH6Nu5a",
  "key15": "37uTia56Lvt4JWXBhibqRW6vRRzGoTs7Wsd4SwpBz5uVh4tadWWkLip7FUFYrQvvp76ycxjLFA1MjrgFQY2EhHDs",
  "key16": "4P36Hrbm8VKaXmLNjEwCxLb4GTbHe3tx3cfBWKu9Dy4a3m7PooXdzK2eovYtvgZmMe1g3a5QAQsZKRfKbXL8apb1",
  "key17": "32nX6eiRxxZdUaYTjzctYTGv39avGPYNXuJWA4QdyKecjr1vkRaqZ137nXZo4wfm7YSsqTdcKg6hBeoc4ZbWmiP6",
  "key18": "4vFYPmXdz3hRPmLPCqx7bbYNWRtSrKfRE68yHTw3xCEJtpbXE6KzL8ZGkHq8x3XGNpHh1o88SxgJ54BFcJF3F2kp",
  "key19": "3Vd9t1eFRvCQ9ijdMDmTC74nSYPxz1we6npD3NDUVmanYSWXyjaS6wtEMAJd4KGqv61KZr9ZS5QraT9otAiaQ9NM",
  "key20": "2QNESL9Tt9JNrtyBGY3adApym21fr2vAZbJEBgM9JwruVhvEyyjgU85ag6qfE21HK97gJZoZ3tqdzqvPyRqDxFVt",
  "key21": "533JRJcwbJNyc8VVCGDNd9A91zqpJTz4qT8xq9weFKcKS87RTzgwG1sqyYb96WeLwbbk88nCnHNoKR4kyC5j1KiR",
  "key22": "3WFKF9Yjhk8Mjc4jYwW7Ky7WihP7uRBqdxTD6hMXHLFBKR4RWLx6b9hN4rWXCrGiQXohHUJsEwngLe55Hik49VbD",
  "key23": "3nQnZUHNBJ7GE4URN7ZnrpSWMmDeWTe6Qk7QjhpsMCZR8PhKVdXCnwfM2a248DAGHz9DiWHhSefGD2j1oGk44vTp",
  "key24": "2Ef5hubvBMCXtXyvfdxvRke4fRPpRBdcg463hgcgYRyQNvUeNxPws566WrZctEA7zsNw2d9rMApbmmdE5nWzkA13",
  "key25": "62Sm6juwRVwEUCcbQJyFthVs8ysPdGdNx9zJMneqPjCahNV46Hibf22fNWXV61asEgxpMGtMtRy1QZTVYYh8Rjq5",
  "key26": "5KuisBgz65NCX1AwfYB1NzvDkafYfb12KbKXAug4HoJvWYneGAAeCZUPvUgb9cerEga82skW2fW3xpuJjsxWLtdV",
  "key27": "2a3VLC5dSA48YQqPigKGi1kHVNczPBgPnAcf2hMxx8JvZ4fCC4dke3fDLu342jJzdrTygafjENruFgBAwr6o4nd1",
  "key28": "5Jbu8PXur5S65UL2tn6RJpiJ3f7exug8DfzsksGWhj5H4NquJoRPBmyRafNx4btBnE2xm3p1Vte8AFobb79Aqgh9",
  "key29": "5RMd72ekekyjoGeR9WSNiGEPEKmyjohJzK82U4b5GYb47qJtBWZcYh7LPB4oD7eRwUS9bNpzCY9a66j8DQX9oVtd",
  "key30": "2Zwg5tgqqgzt1DZLfYCFxxoYtz8a2Ay8TGz1qdTGW3wMSSszKtVrAR2aD5MEYqPTAYTh5A2ekz4VZTxHxu9hf9pi",
  "key31": "5SdS2GR9tu9vAki6nNaPzg6htFzzaXwuffwab1usGX9nrWszRH2ZFDjJMbfFJYVeQe5p725keWDsFaPamSYf9MKs",
  "key32": "2BCyzQibMKTW98awG36Np6b1SLgXNUsgmyZPY5nhrMeNf2zQ1GLtg6SBhjtFaRZwj6pndfEPPEvS7dSpqwDRndpb",
  "key33": "3AmzDZ9Xn4dE8j3WNHzj2PARp6XpqF6opkb59hYrqns4PkpJdxgrKEqZf6JGU5DKCpN9xXRYxaoZ1rvN3ZkYw4Ji",
  "key34": "vZyyGE1CtDGX8cotuFknAF7Jt4bupopupJQy7vfSRVaYRcNJa28gaBf4eZYiVraXwSTi3KQftfL7CZPx2dHED3q"
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
