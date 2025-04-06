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
    "jgG5hMm6rHAXqvCCYUVYhXSsiKt9pPa4JBc91CbSHoeXU2TsUnMJS4p6jGxBxoQxcoJsupr3gvmaecyZiZnZHJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwZ81vVrm6b5zScjteY4pBfF8BZfCGauKGFxfqMR39NGX8wojA8RNHtyUXgeKAgZ37RS6dfHPqyW8VrLe62u3cf",
  "key1": "cxQNQPuLMyqug7HZZyaGzJpZWskdZSBoSo4zJsUKLkN2KUxTy1Tu76CoXRwHNq1Tn8U4NZ4NZp1ZB48vCUiu8iw",
  "key2": "4vDT2Jt1Q2x6KuXYKX7M9hLa1mkdCF9SoKUWAg5HnXo73Nzhe5USy8WuLky6gNdhaC2BmDp5mewAMJ8shevyDrRw",
  "key3": "4wodqvwfsY2YaYC83Ej1KES3TGDkWPEU6x39TGR4Yu579yLKoPA6pDck5bFbDYEp9aR1BW94zJ95zXyWfvKgBBgU",
  "key4": "4jWZqjHTKDGpSWrEz5vGVDGM69itZ5cLMmhWKw1azZLTWmFwhgDXEUX4v2j9cm9SHKumD4YLdsYL6b5rMxmXf1kL",
  "key5": "4YedemYp73H6dmkzVmmH3FYc8636FFUeSvGa1HA24t5K2tfgd1aWnQ3ekX66roAPvH7pW3sh5Qe1EZJCyD5KahdP",
  "key6": "2ofTyyFD5ULMi2nm579MmFGF9KSPH7hyfqG2j6Wm8R11PmbuwWPgJLFRRY1R9TVbZa8MiysRAGKfyZNRTnqgbGwe",
  "key7": "conr185KAKQ1ogStXtuWLsmpwEnHTpjwcXjdgKveFNcjPuVUmjtgk3Nitpg5r85ff8oUjmHtGRUP4WsNUKKWmxB",
  "key8": "2qKaCM51v3YgFarsnJaXmdxDSckizf8rMY8VaHu7tPyS5AK59m21YAKdExmRhHp6JaurrPzEqsbAN6Rp4nJg3DsE",
  "key9": "3bkDX9hb19W3RUVhLMGuAcv3atCKys19LnruzCTDsWyhhSbCpfuEZCzmJVeF9N6k2rvyq2QBd2i9gNMyQMB47aFM",
  "key10": "32Ly21Ar7GYB6XVPnJKeZTppVrrA1EUmuWxwesMoCHWXNz1nD7BYhype5LfTVLpEj2gDwRWbWLwAmU6WQS9k3spK",
  "key11": "23xntBt5LTxKKhUBZ9mvWA8mw22qn4h2o76gqzzcABcpqbv4EqgcptoHsQYfsT8mC5kDYjcxYf7GyNWHJBHmDN4i",
  "key12": "4iWwx96GEKWTXrZ1fQpW9noPDuBmWEmm99JDyuzmwKv66EUo6k5tEJ3k8uF2Aef4wqT6xaGBhfxe5TzvbwLcqqfE",
  "key13": "5csomNj9v8EDD5pqvE1t61w5K48JNJKj3NVQBacppbTvTF32d6Zf1Ue6cx1s86dPyxaNRn5SSu6eE19DSGevUTu6",
  "key14": "3EDTchSARwFE74DViwvTr25U3nQzNwLnpX9CRdCQhrcxripkuASCBGNjesNcGhbi5gQsCAbQXpha8TGXSoAZmqyf",
  "key15": "2zzmfsx41N87qzqmh8TZe9rRHGiA7QNRf6KQLmUVpyKRM8KHiF2GJzLyzgRJsUEE2Lnb19TZpkbZCZX5N6Yss1ai",
  "key16": "2xWbsqPcsnKyUcZWWsz83UPCk1zVXT5c2HqyNVjTRSc6y9ybpjgwwrbBueCVZbj8JJCna55Vv78o9fTYWceYRT15",
  "key17": "4DKKW5BmhGuKTGCL5umftmpodHwZFgmF48wdXJvvXuYG9z3rAG7VxuhzCB6Grdou9aoUqxASdD9FZNYW7UG1hNXZ",
  "key18": "3XFtGZkRTtPEMfSaws8Tyk9Ey9zMC6JDzfR1BKy5RjXiGXdgWhXPMc4TjsBVvxXvNY8d4JKGjqN2h9nDU23GD5nT",
  "key19": "435xwUEpLbjfV96MdwRKrch1HmWzeGLhhdDUVcQZgwREftK1ANoZDqwSefzT9VreUZ5c5kZUYpm7aB3iGcAR6sJe",
  "key20": "zcXiriXukjKjuUzoBtbtZ77rxCGByZJ7HV6rb2rfgsAyn92naqAq93WcKGWBqLjbA59LyJoGy7P2nvuo5KLwBt2",
  "key21": "2kW3Dr2usy6PDfCvv7xRd5Lz74zyf4tuAPqtLXAotRcsZsY5DNnGHXdYrWeZ8UF4SUC39SE5UHixDNpGoxqVwFhM",
  "key22": "zemDXujqYvq7Mv7ysJTGwRRCK8ZpdvMjZEwD2dvcxSS8Cy44PyZsQDb2es8J4qCxmywU5X9X3XAkiFrudHgSyux",
  "key23": "2AysxnHaQJf4P7k1USZY6PwtVQGYqAxfSTvBxoBtDAhQcYMyJJyxGVEhqmdBG9qfnu9oRK1nUNx8j7x3zPsCz2tC",
  "key24": "5KvVFcHzmm5izwCF82v34afYZqQSjPGDTZLTe6N3iYYA1ah7Ew7cqEbQJD3d5W11xtvBKAqmoSoGuqDUKRh7XfiT",
  "key25": "V9ZZ7xjiSkTQtP1v3pG8SMz3udRnsKBbd7zbfqm1aBWf56eBPF8YJ6USEbQjjb1V3KCXFkUiTGMFYDm7fbbVbmA",
  "key26": "4oyrbViS5ZhEWgcDmubkVHoRKaWRwWTrNt39dRYuFUwiVpbpX4H8m1dpr4qtVuMjUfK2SPSHqR42wH1EEC7dDcS4",
  "key27": "2dEJq2ds7E6g7TAdMhjx39Bz9fz4ZZ6WLTCP6A6u4wjy6XnCbLUer5HPobM3CL76qTtrBVHChBxGNY2DYMyaNzBN",
  "key28": "3Xj6iyVUDYnvPVCgbMpunWNcQ7YRDerJgGhQZCUYbDwZAWjyH2SC5mkLRVWLHkFQtuTemXsZnUgGQYMS71R9mu6L",
  "key29": "5KhgN8ppprrPxxX5nVbf3cjdRzFutLqjWrhqnzYSPN36e8Am8nz3ptNrVSndGPFf4CH7tcS2ZQ5Caq2qiMCGtY12",
  "key30": "2XFB6BcGRX3jBjConEMbKQmZ92w9gkG24nkdC1AxZnnvMcqpQ44wp7Y8opj4vmAAVveivcBBHVRyqSJ2B2dbuyMU",
  "key31": "5H5TZcpsG6ijh26b3bEAYRYn3C2XN4zkUTQJVzneRKWwUyGVvd4J9ewg1ahFpowBPNF6KeYwd7ogQqnAVqVncpDW",
  "key32": "4Fad6JUiccQwAsUfjxCPLi7tpRm6RULpx7GxtxUDFPtjsTD3UtCjUPAyF4PH6bBt2B8z3dNPWAtCBSpnQigXURfN",
  "key33": "5oqsnNaPUUNgUuFGvfmaptHnR2HyGcThf2y3rnWetToET5e2B8dBr8cXY97kFDPc3LRGjG8jwHRnMKN1bsgC7scK",
  "key34": "2KmvvRQbyzuNJseNNWh5qm5a6hydRQSg67zcNMjw9ZLkPFHoSUN6rPjN4JBcBiuJygnTcYiWfMoENGmAWveeWauT",
  "key35": "3xLHLyh88Jta5BVssUtnEdRw8gTzVzmQQxPkrhJy3HCucMBN2ZCjp2kkkRx51cmwszNQoKKtU4EtcvpU6vsW2BfC",
  "key36": "5GzFxdjQwmJb5fNgpQhGkYPpmCR9AQXg4aXrynmfP2zcNozgpUEXMQwHZZnPSgJjMoEGVguUgnyhKG5rpWRqyzPd",
  "key37": "4TGPtxQDXQMvDbVx1Nxg2NvYYkyN8r3MgTAuiM57iWTB7TcsRmdvwQUQLHS13XZ8cA8kbPLyNHAJRTcAUBnVRSzd",
  "key38": "28g8nrRLNVfaqSu989QaGnLaxMHmTNYaSbcn7Hp44Q157CSi7LTgKEPypQeAvHGD3wsvqnmDzC6wzhRs14fWSecE",
  "key39": "65GnSbYbP6r4DNLR8axom95QsbuskzfxgGNLLcjbaX26ZseCrVSS3gypFvQNXLAHphf6WLhNVAkWAJdaMi5nepsr",
  "key40": "3KXngotaa9Znn5msE9XnCYZb1rUxU8tfdeh2pTTHNF1rGAmNYMKpGTGdymwifZU2df43XN3ewVsYM6ed36t6ztkZ",
  "key41": "2QBSDWDX9eH4q9hfZtMYJ5vGpsgcWT726aHC8do1ZtQk4Mb8ZLLsTqcpbW7C7MFHc3CRA92BKC7LNzZJXzGUipgy",
  "key42": "5G4JtTLKKLgQCznvo3qmfQeXkZMSm7v5GDP52J5XjsXHPGjqZG68T2epNWjaMLc5LdeTo1mgcFGWHEAc997ayXRZ",
  "key43": "3Y3YY72LCisJsyZZUWQU3J3URGSXjhQkB7CHkvBUsHxnT5MUaWUBK3beAgTTcuZPq21PLtBXGci4Lg78FLGSRXoX",
  "key44": "4KGXzviCo6sCrApJJKKHNLB8zKSUPxCY9RALyYWLDg6nNY74DrsALPZo3FXtAXLjcxybPghbABRR3bPG2MZNnwCD",
  "key45": "2xABFqXdJ2w84CQLVHK5f8NL2gkhtrAiQXoWCNqYsiVkfQCrmhLXzRCzSuQWarNhF9GkQGtcEGSTjgG5aqQFirnT",
  "key46": "4DBGW2degsc9Xq2mqECWnSRBuLAzW6vp569YmnGByrBGozEt3ShoLS94LhdPGS3v4NhNHGtn1Kziq8NjznuR1A5f"
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
