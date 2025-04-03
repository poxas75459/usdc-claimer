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
    "4tHGmVMi6ARJLMiCwzKbbfW6wvF21CBxA5nHD7exB4HspM322B3pTRwejqcqZM7hy5kVQhGz672Nqepmm4VE6EWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAK7MHxqiUURq6ayTnZUpxpc86AgD1hePE65XTSyqQCaaUdGVuQNTKziorZS5qq3gLp1CV54VfP7G1mLC1t5A1G",
  "key1": "64HxvwYV6SQnSDSfJN3kUTM5PnpwCTw8mQwHnQ333LHWnb6mb2xhPLv9dxgJya6smtMpC7igcAgXfSphvbrex3QT",
  "key2": "4FXig5zXRoUihQxZkyZtFnZAS2FiEbdPaRv1QT8WihT8qdauka511QHZWS37U6kFfygVYfPpw5mAdyPMFMrgGguz",
  "key3": "3KohQ4c9N2RpPRyoP5uCCSMUkQNfwW3XQDUCyzjstNhWyiEtzocHSPCPaByBLzqoMsRvhJwaZb7oR6uML2wkoNTq",
  "key4": "yPjRM2FFBszWBcvEc4NGnRd5KN5MGurjk4cZc7T1ktq9hiuVz4hxYR242JXy13j3sBAsr9Pi5wYXKaYQugAwskH",
  "key5": "4YFxSnoLnVVWp2Ai8hzrcvGZCHKsNEL14C9jt55NMzMputf7AfvQyyk74yxXRfnvNcLseCnXpmj2Bpso6g6sbtWL",
  "key6": "3Li96WTR8g8exBAvrJAiZcGEG1DVnNSSS2m9vSucgDo1mtqzzacEb8HfaoB8upwnhAkb9UPDf8YwopLBxsCm5GyB",
  "key7": "V2n8mPtQXrfQdQNKnswP3KdULuN5AhL3YZ5aHoDcrNp1XkoPutvi5xcf3oWGDGQLXrx2NyWsYWcu7VkhpMYM5FA",
  "key8": "5sDCE5bBGoXB1UzhZERDRY2YUPwWgWbzg3Ajd57a8a29kg5XQ4SMwiUqu8bj1xbLufKYUveMKKaQySpBQLjudvsV",
  "key9": "3z8eywXczUcdRMuSQ8P39CriHMXLQYheBwYV3mjrU4VwT6TPsRnGTZpK8ScfUWzu5vRQoEruVijE6F9qaAuFn5WG",
  "key10": "E9ZiSm2ntMWyWtvrWRTPuSRFV2JfNXksWPBszXUWayzWdgpEQUDbA6sXFQAYf3Fimy6qGkoBG26Z3fDFVNK21RC",
  "key11": "3x3pFH63gSUV5e87kvNHCJXHombfCgzyaPuRcmpxVZgWAQxmStVNoaMfK3FhFYrUnWkJ8SuD2oqL8o3kUcWu73jL",
  "key12": "3KM9qEpczAgQYaLcreZopzmn1vg16edZcaLVv3vvxWsfPPxZyd2oZGeaSw5sz35x7jowJaKMHSja7bo2yvddAmzv",
  "key13": "2KVWeJLeqHPCQDW7WFbuRKyeVpfkzmfDptjKqV7HfDCHHLjNZUwzjJHaR5WYeTc8HGN7xAjdQAY4nNNffBhm36dE",
  "key14": "2oiHhF2iBRNCgZCi2zEc2z6ug43JeG2JodmXeVPWbiJcQTzaBSHm4aHMR3RVMCyQ9csJg9c7cf6fw42UjJup15Lb",
  "key15": "3tFCJB4RwceD8CNikwTbSpzApLnLRSRv2NdkjoSTAmA6k87d5n8vdDibM4xL7At7WQa7CWVdbr4RvAMkAnX5nVPm",
  "key16": "65HW5BrxBjr6ahAVT9DCsaWVkzZnHH3BaV9ULyMSh6YMA6ag6F95Hs3KJk3RsYeMv7vMUmZvnrnaywtmxCwCjqX6",
  "key17": "3grFZAmpsfn9hFbUae9r4kttXvBwWPGKL5GaiQ824oxXnzgxpN9Rbfhns33N9M4YabVMLUDLjtxFT9229KxNTJX1",
  "key18": "95g9jS96GHY9nckn5yT1M6hkgHfzG6ZBE7VD8XJX9vxrdxJJ6tCjXQN6SZM5c61q6HSXreBur3kpGYJHLSc4YQW",
  "key19": "3ndeQg37x19S4KQsWH5ThTawk81QP5MFZoxjv7UYBXNqK6cbhcNwPuXu5eH7K75QFKkF2EaXsm73ZFARHk3BJFTN",
  "key20": "5E3CWcQz5csnAr1pQhicUeMzNoHd1d1x3bmSnKZoWPF594HvWmua8WZsWTvvJBm49CVRsjipvBFsg9NEi76XpVE9",
  "key21": "3vMU35tZjoytFvjypa31xSMuxekKD3m6UnLqRb8SPbfgNtX7REgEsXUVGSxAt7rBNT9YskyRGdpKcBMPwDiNYRE6",
  "key22": "5gDZ6T49T1Bvq89m6ZQ9csMdrEzF5GCxWXxswo8x9EXGFunXjbfwTs7HStXvaPCsHPTyMFbguXcUoDJD5vi8jmuP",
  "key23": "3SMf5FsePkcVeHCjepsmvjd2ggQFwVFJzhKVLDxbhLNt6kc66DDZ2VB6tLJD3XE3tuNyDFdMkYxVm457sEPptzwZ",
  "key24": "3sPFiUqAoBEQcQQniYMNeX4uNoFTRh6NBV7pAvXYfeyxvZsWiJ9wWgwHsJYJ2T7cCWtWyFy4b9p9hDQrNdXmaKVr",
  "key25": "3FVfn8fmoiZSbobo4d7J6eH1VFtLqpjSc6Q4MxJc4o1A8m7RCyFt44Ck3GnaQPZpxkcuiDWwP7f8RAvsJUddvoRp",
  "key26": "3PfeqpusuTjaUcMZy5t5ZTyDbEboYA5a7N3fEBxs3pVKGviS45ZhzqD438r97n3hgXHVz98NZYUSfWoS4h5BzqAT",
  "key27": "2ZUgQhRyvBFhUSzENXeiD5C6QvpzgRwfLjDz9674vN77XkFQhanam51gBuPySkHdZJpz2wf4etMtQGaCud4K3AA1",
  "key28": "4LCLkFiGkRUSxqUCZorHh19DiqymeKFkgqcBxPpLFdTHZaCGGuL8Ykd4VMKK9YkL4JWxauXZHg7mQBBd1A7wFPrb",
  "key29": "458GGPF58ykpBxHWMfzXcuJLmXWMJfgxmTXG7CQkAL1ECoxpmiZTQfqfZYhYCVQCz29nXDkx6dWhnUYP9aHYCVop",
  "key30": "29jphX36S5Qjbpurfb7D5JghjBdvsUb1Cx8PH5kWnAY8CV9ediwVnTzSxUHEgqrNeUMtBasQjYq5UEzHg5nQBdtu",
  "key31": "5eMMpgXb66G8MtxUdwYZoavBfo3ZpTwCSFujm7T2tMW9MaAUGofY27b5r44VtJwsL73rjUZuw48cq9QYK19ZJ82R",
  "key32": "2QzcdhAdNibBiaVTFpJNjwRH9VB3kxMBUujQzCz2NLCa7LLUfhgggqKWkhubGwe8JrV69LHZw6uqfDWexuX9hRqi",
  "key33": "25aStsMn2wLzvUPtWMuiZM64ktn2cbTu2iU1CqzySK6okzquA9zvyhQMbYdSjfpHVxm75d3FL45rmPBY15MfvK2t",
  "key34": "5YgXRuvM7yDAHRD1Tdyz3RWog9swjHi8M87yxUn4qtYo51jDdbVyhHHaPvYb4wVzV5wsaen5SfoDkaZ3VdGWUcCo",
  "key35": "3xS1kZtYuNppMvtdJTopLgKWtdgiw7s8hqujXMoATFPPwJZU7ozdA1nfWWEZRDcUXRPdG4cr3tq8zHopPgrWueUq",
  "key36": "3rchjDJP4gchXbW2m5EsKSZiTDKzV817zoUu9rHjfw8iz19DwKUKr2X3PydvYfeUBFnjFT5x9c7qyyMp4RWyhBth",
  "key37": "4kd6gCpfMPyBi7Ug4KoM7vKbSne2MDDxfPS8BJxGy6A9Nw4E1QAizZyyMyefyRdsYJHRoMztyTckCvhbSqvJFW6Y",
  "key38": "2wi9KFAUidfQPYz848aZ3eKbj2fLzighGhcgrzmvH412ZP7KSi6aPGAtE5544sYcS49ybWqrB1RczyPzaF3ZnTWm",
  "key39": "4i3gCrFtN76qisxvzNiGoiPrEzhBcALaNUzbufR7xzgcynBLsu3cWzKNuj7fKRnxT4onQ3WwBs1yermbsXoCQ9bU",
  "key40": "3zJacZTRd9tmMcBxAr171ZXYJybK5jofy2MECQu4LTt64WUxZQXSa4KHaiBWhX8R91KscSN4JyhkWHNiLDWia9j6",
  "key41": "3ygLoAfSuU1oDkDr3u6M3oqvX3dnqujiPh5vUvhq2og6M62PPEaVxYhwbWiX5LdYGnjtm7xe8kNJ4kw1nB9e3NS",
  "key42": "3bAG1WKNHD1KMk8DBhHRjXZCDnVoL5dLSHfzXSvb4iaQ1hPDGG2xRVbMFNnfrHPfZWwG2GEZzQZyW3cW9WggLpyS"
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
