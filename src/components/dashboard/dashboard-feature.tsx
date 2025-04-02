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
    "4czodhHqjmNKFyxk5F7wq7SdfNDzaj335Por9cMVVVngCbArokGs9sFbP7aJiD7KR2eWTuaZNLbxABaPurnzAzS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2756Z6Tv5XgkJsg2kX56mg36rgM1G9yvd3g4oHamMJdgFLRYaM873LTgbWmsWNEqZvfyroEh6N96tie65TexYvP4",
  "key1": "52wUD4AKEBr3S8ywU4uvggr3GfVYYKAgDPDKFGC4hCbjMwvu8QijJUd7tgvBsYwBaf3Fy2TVDRShYWoKS52t8L2w",
  "key2": "5mRcCuy1gHiymG7babpNgzhDFxinHiUvnHRAJUBWNRx9nssTZKxPZiPZiw42Kem2JBinmdFxfcr8GcukNkD1G53U",
  "key3": "DsfuyKR3y4ucwGSNEs7y5ekcXSKftUYztAy4MC9d6so9UibcmEwE51aZXJxegDSTXm2GMfWecXkjLRVDWbC2VxJ",
  "key4": "2db2F1p5Wgm5VCeQMzB6KXfGn7BiiXxUVy428YJVMLEJmvvEKWkfhK9qgPyY8aaRLkK5Mvicm2MtbV8eN4Pw4Gt3",
  "key5": "2x8WnfDfbVWUqDGG1BZX5NSZBbKAcfdjHyuUC1thYKYEjXcdcXJkbYmmGx2o3UHk2MkrrNhEpbspYEuordfL4j1",
  "key6": "45XWb79g2ad86F2dDBkEdnqtjbKv7MFf9KY3DQiLDUAVkNsHCF6SVXyrgD4NuUL5KaMyazQudAC4p3UA47uzEDSS",
  "key7": "Xyenha84t5BfQZURiyQtkUdyA8WaQoRZF6onZDm7PXnz2fjkxccxtLZAYaPHpzo4GvQvmxvB4G13CMotnxwy4sJ",
  "key8": "4mddcjYaKwc2DpC7gCDMqz7nzpXmkxUxJ94BSyfku5DHi23tB64CKUReGJsAoJ7vsDVBVEm2GeGJYrhsd6nXu5vs",
  "key9": "4oVrPpmTA49aPx4fC58qY6WwbgsAxXHK5Vs2x3F1R71HzDaoLHVU5mN32WsukiFQaYY4GEZ4kXNBnn5jnLS4wud4",
  "key10": "5Tt9vSb98YCMG6k3XXqLCRd8QBp6KVWHLkkHrBfPEv9oTVDjBVUZuNMT2Q7YwJ9bNVvY63nUQtsTFYvuoUqsm4hB",
  "key11": "VxaPQSVosb1ngULbtahoi5fmBNGz8JJtGLL6xDs1yCp9fayLP7M329b7tgjdidVoYgC39T9RPtA1xL5FFuuiCcm",
  "key12": "3FuWrsW5n3wFLZFbJnQGoSzqXbgUKyaq3WkJMJ4NMmjKvxiBaZtDSEeednVoywLWQSvYZMGvdD14D3vtYRN7sFkg",
  "key13": "5yzWPHPo4o5LRoQ6k3KcYQnvHWpa1zz1N7DyH1BatFQcuuDRvC9kjAfraRboVGrt4jSrV4Grzq5BA6PEe6dBZ1Rw",
  "key14": "3mLCABKgh9wdEaG9De18X7wDtSqW1AsHvGM6DJEzqRvMoBUyCFPE1VwgkQhTnYADKnWKGfezu48ayFLR25mhXvLd",
  "key15": "32c85gBZfuqfDkEpKTm15jRYNZLLr6dE2MTn6yrt5xiAenLFtNW1CbhpBjmy5fKmHFjdCLex2KYg1m94K5mZodSA",
  "key16": "2fpTDaLvR6vbSCb6Js9PW6Ab83G64fJDo1EF6aNEXs7FTbc9o3G6Nxijh1pzDyWKscdyf6VWGWDZrSBRWNiwpei6",
  "key17": "bpo4TRVPa6Mz96K3TP6KDggjmmusaGqRzThySoGxgXzbFENgDy2GGQaVFCvepmFicm6FVybzw9rApDS6hxBzQDF",
  "key18": "3BCP2jReRX7e2aQqrohBDBi9jy4dwVs8obSQDegYCZ1Bj2dN2CPJsj9aBAUKKrn7DTWhAuooqSiACk191uCiuw8E",
  "key19": "4LEbNV45PpQGwL3K7u9e4zZnRNvH5QsgSkukUB77QRYHxaXmpntrUTJtU1PDEoLmag6m5ve5nRdTEKneGFjLkgzm",
  "key20": "55sHomYcKCH3xFYWQYtg7hKb3bbRWwWtg75CSJnGoZCK3wnbzvCtWKo2j6vzvmyfqut9y42msHRii4zVB9wLpAop",
  "key21": "2fKmu5vRxB3eQpjYTWMiy5PGj6PQ1SarCgSzvhnUH6DGAr4dfG74uUfnfg1FdjDrfDcqGQF9eCw5WAx6Utapptb4",
  "key22": "5JgrUGe84n7v7cJwyfuzjLyHwbY564WL4hooKFiCSqybaqubVoLcZv3MBUqcZXyymvHgYEPPWczpdDP9tmfrAZ56",
  "key23": "2J4VfmsWvkeLB11CH54U7pFpgzo2WEjTnXxiyRw8gKnbSwJnJuK1VTEKTdh9hSDoDJidnqzuMzLkPRzxo4XuucNR",
  "key24": "2vpPdvi2Uxtu87M4cwSL5dzgXaop6wYXYdhvesjQeuYLKGLFZ6FQNzWXPXQwjM9Ayyx4hKZAfFuPLw1HiCFU85fq",
  "key25": "4CTpLgcdhL1m9kFymZrwsLwTBNmbGbk7GFwPosXNaoTXQn2CLP9Zg1iG7eMNK5xst2u9viqr45jWucZGBQHzvoJr",
  "key26": "u1YpWWwCCBjnrxHJ4ePvGMCFde2tvfJMT65arDXsHu42hA7SCdGLap6bX6peGyphLWQsqpnpH4Gzxf8Es7u4U6A",
  "key27": "b1vNbiyZRfNqqC4XFT7BqNNfoRaB37Bmhx1Yz3uaC5DC7YBc37THi4A8jMJNftFM4rGSUVizPPGBLmUPyghTpKT",
  "key28": "4eRuFPttgxfPEeyGDdDbH3hVFWbB944TvT247YtU8pHjTR2eyrfZjteAXxS8JCAXJdrS6gvtxs3cp5uKiRTSKqKk",
  "key29": "2P6Xp4bcDGr2s5wxKHPvKeYAYsp1t9po1bfSjdppmwe1UhT4tnzeYJe5WAAJtDSAkeyTJPwwZZkKuTZvdVXk3kPF",
  "key30": "5K1D6Yp8gdMADWrTuvBuTWx9312BpZ3ft3YknK6tfbuiuiqPgyUgZz4tM6gsxYP3nCk35egnWBvFDhd21WmxF4ht",
  "key31": "5bd7ivfff4VjjhnKaG52uGCfd5oqANvBA1qSigVFDj7kDDtV8YQJdSVJSFcLHH5kgTYDyURNwgjxHnhRvLk6qUAm",
  "key32": "27oB71FY28AR4v47FZ16BiHoCwZZUE6yqva9BVyoF9ARUQVsLkWVBoRvMzEyCnJckNUmTJzENNBR1u5UXJxHtNTZ",
  "key33": "5qnBFj17fWjF56D5WBWDh2CUGwUgDH7dkbcVWuzwWuA4juHuxKwoTpBbCig4AyDFyoUtKK2seStpuiHWR6eSocSj",
  "key34": "5FQPzQpaWzraaB8RKv8cCicjJ8pYLxE7z9kNBT2dtodDofvmuxgvsw1qVV17tmPCf6NQphFnF5PopYNfb8sdM37w",
  "key35": "5U9JUSnBtHnUcKgPmVXZqZNAkMtYN1aV1EhYCncGZ7dkrqLPj9FZeiQK4map1r454YCQgUFAaFDiaN92jMvuR6zN",
  "key36": "59WwqKwmoisi5XQUva5wq5D4YPYE3ZnpVR75nffRtFaQgqK3zoXaSKP6yDxExkgZe8Z25awbCiMZK1PmXJEqbLxg"
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
