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
    "3h5fQkKFaLdQ9DAgQdaXvD1dGqndkb8Aw62AXgKAEZH6E9xt7oNuVn28NMa7Nud2So9Pk3ZfdfrqvQ1m5k66Nwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ND8zvjqKpjzKqBXMrXP1sJ5jsSgj6tecahUdwFDb448UYqcfKCHKDdUSa2RUPeG4HXKSrGxLzP9brhGt1BqZx9",
  "key1": "4FBMZqTdq2bfZgY9PSsgCpvfY9VwCLGdHkjuBwCWWKyecrA2g9DR9b2UXLYmNvhHD3mPbssKz33nC3xh23ySPfcL",
  "key2": "2QLJpa9ZuUxmQoc6PLEMFR6sNu1a9XFot3kdigCFpPbzjSufbL86YDpd7zsgCFuo4MaDQDgNqSk3m8D9T9BSrYVn",
  "key3": "reccW9n3oAQPwusTrhJjeN9NVNxdo8cZjf8JBLsxut28Dr6FTQCRia7Z6KVDbm95kzUpLNH4Wiyz5xH4wriFgPc",
  "key4": "2GHtP28pbeSsFvE5BBdDiZKauU7YNV6DnS1JmLpcjSVQ32DBkHZfHjqv9Ba1S5k9a7pGrUFbqM3sMRzcgjHbeJgD",
  "key5": "5zVGq7HRAdqf55RHnbj3G7KRDVZC4fRukiHB8cUQyojmfAG6gxavu6CvoPb4jADuUE4xFkwonCHmsguXnV3PFdH",
  "key6": "3FknqJU9fY33K3C8ixBh69WWbdwEiSFZzznSMgoZxXcLwVsh85aQALNRe2nArCtfw84sZkHnJ9HeLTa8MhNzndk6",
  "key7": "4oTsvhug3n2AG9xxJKF5kKxb1vT9Y8CXi2o9Zwn3CKV6qx3CyuAzirYfFwMZPe8geCFBtxsDkwJpyBQA11CXShiv",
  "key8": "2GdJixhDrkc8uwqcjZZZRydJWSGPSTbg32pxDtT7d1GaYYuTRWbpoVZ6FMUVSxEuEyFQv2gZHdnEzuDXK1mfWCsH",
  "key9": "4YcTXnBhhzejzw4LkgbXnRePFJVboVrrhGqV5L6x7J1MbGWEWoa4J3NEkgv2HQ93hEmPNo4QzXvi9PVAW4xi3wMk",
  "key10": "gbcXxaKDRzYSHtNKvMTK7frE7HETYWcJ6HLWij1srvv2HtXqwEaQ3EDoJueVxdSh9ajA9mwajJkqYrS6wdZzoUu",
  "key11": "Vz7gNhdECWJ3sHu4cciL11DPMFcRunJPvcUos3pxVe58Va6861XzUrft73SjniD8HteD3HHNsm2zkMwXQwjUB47",
  "key12": "6JXtg8GEjQdvW5rXrgCJTMQEyqFt48HkjQ87k8VxUMRisNuEthdU1xrXUmA586DfLoNPCVbXnqXk7L33syoSq65",
  "key13": "p3ufftcUojsjCPbAP1P8BTwzHa2WdmqAysCxyz7zzqRN4DhvWgobBo6wTX5bxUReGowx6AEfWJkLCVkFSXvixHz",
  "key14": "4MkVaSYeJ4p3e7Bf9eQh87QD4WtcdYnReQ9bT2wG6T5iVknTixgtWu11w457QzX8LqTBJDRgzNsdvngwngrq9TnK",
  "key15": "3zxe6MsGiBpQxa8yewS3Qu5MkTwh3qnWuWuizmnWFAD2kz3Rbshm1GpxfWYyHZMDsxzpV4ra5EU3VRz6vdWtm7L1",
  "key16": "2vQKsFrSppPZsAepsUHQb7xMXLF7a1jCa2gkN2DyFwwfKDvAJLRHUXjDvcM1VJPJQxXqvTDQdwStECJnDD5YxR49",
  "key17": "4pvmjwPTN482QGoFwHpwYJpG7KTjqr4ypA41cjTzReWdDHHX44gXd9Wq7sXXdsLo976xDo1ZYNF6Gxat4U8C6pp1",
  "key18": "3yVaauSj7PLuqUNhhNmQyPVQWRFuNxJ16rHFiqxYqV6GErgfMnjpNp4Gg9s1cd1cW84pSb6VCGcNHphN2ngbiFnJ",
  "key19": "5heNkXvHXmAz3v9wF7WZJx7HdxZpWcjVNhV33KYiA1Qr5iD2UgH145kvRU4eotJvwWC7fgzL8EgTmXr1FEonAQZC",
  "key20": "3p5JTV8FnLUhtmQuoAUPekrwq9L7UgrRcsLTv1KGk77aGoWxcsZbfnELdQFoMxaSyqpzAmFUcp1ywuzugTWmZAv2",
  "key21": "28hiG61E87E6m7mA28Pqswx2zMzCnbKayFV5CHD76E6a4zoJxLUXoCn1WiH5S2HF52uyh2Eay4AsyGKc1oyiwbZi",
  "key22": "2YT52JW7beq4r1ZZ3bbPcfsBCWoHZRuRUCzjNZJhvAz4oStzxYfpvs6ecZZNmi2nKmGg3QT45n9St1RRBuj2gwvi",
  "key23": "4b83fsJSLUxyBsjaNNa22gjxGEzgo6xEhGcqaZdHLrtD3gUD2TCsEFGnKj4y8ETfycpzTrFZXP2RXccYdgWPeT9y",
  "key24": "4Ga7TPa4FMh3PPZxtHpYM5rCXkpVzj2dkJ1BE3Hbjhs2JRssoaJEK3Ewik7dH3kxtWriLQqJQMiPTB8h16p2VHLC",
  "key25": "5AkVrfksycS2dCWPYg7Vv62qHjzNKbaa19MgsYPFR4awQvifxVEsCEk9RNs4PNRLoLdHdQmRDBEwwCg83YxtrMR8",
  "key26": "3sAR8cv7kknkVVTMjaKGyiXhjgTtosUwn9ZSyqzB67nYZDd1JW4rQSL3TiqN2LMj6fqBmWKTLWa5MFyEuNC5TmCP",
  "key27": "43eoKB9v372tbfezhnkMB24DzeYzDwu6EQtifKRcXKSPeXyj2ndFnCmJLVir36JLnxCGgZLKi2EyEomKJhyJSLKU",
  "key28": "4ska4ie9Fw5rcsCRMaE8LMGwx5RPm2Uz1xezFywc1sma9goMNCX6rzrV63rxGDX1nJJMFA1PRjvkGpCxQt8NAd1N",
  "key29": "4TAknQ4Bkv3iRVYiDGhHgLXZ4d3JJyZD4jq7yAdW3Yhh3QW3QG3G2Js2mx2t2XSeqyyKNph1KQDnoYpdZyCfaxFd",
  "key30": "mkxHYZ7CTdpqJx6emRdaXMRvaKYxmKG8HKMhTmmB1g8jG3TRpEoen578NQS6EVDD8uvhu9W2H2TJo4UwuUdAeag",
  "key31": "wKdr9vNLbjxvMifqkgMWnF74iWpDaKMQYq6S9CcTs6SYsLGdtiAu22KfqB279y97bkqUQJVA7k9L5adaZcdHPRX",
  "key32": "FVrHuw8MbsdY4R13oomCDf26LirswPVfU6a7RkZL5JXGFEuVmoimGr17cmwNvGybZr8qZBPxrmgs6MuiEmoExfQ",
  "key33": "3NR3ZRrzyfqJkna4LP38r3pzo7VTnroVfpDJt8P8imaPnBN84PNqMN2K9T5gXHPWNskM93SkcsPZRwuvqizfjR4e",
  "key34": "LsvBdzxDeJcrDme6LJMnSZvhUuHLwfZxWQ2aVggrhJTj6BEzjBcX6PDkoragDCmQKLLnEstEFtgUhSctzuSxYKr",
  "key35": "4vW9McApEcjHeAt5rz7t6sszrG3JApT86RxUS6RtajtErpQB28H8BEGXcGVvX6MPFMzP7vYhQgZ9YUnnA3RSobP5",
  "key36": "i5snWMeS9jdsbJL99dUzyVSkhD4jSjxdFdPUJk2puBQ4gcBxvDyp3xcnGduUkVPVQaHSrxiPTX3nuchJqV4fHLg",
  "key37": "47Y49iPJYHhHE3wWJvMRjbR9Hqc1azpX5GmshcUuD6aurtYyHdbFWFjyJmryu6yFyYZnnDyAozP56qTky4d6jsM9",
  "key38": "24JAHGBY2nQTzS4sEce7PA8PUnGQaxz8Wa5NbWxD6cknVpcBFa4ZWVaRGmDcKgDuDDLt8Qa1VXv1aZ8v8EnrL2ov",
  "key39": "5xp8EVGF8HXZvJWjx9eivVJcKxPF3XYEAKCDNm6CimAaAgcA1p1mT911xfbSkMwSkL7qoVhy5sipUaVnHVkMbLVh",
  "key40": "26XrzLhDwtvkB3cvxkRBHMXbuvZvzzcVTpqur5CuU2SFWkrxDL45NvqcY1kmtCyWupx3iHTuqxcGjvwRRTzM8d23",
  "key41": "4NR2zzhL6DS6B7oDJPko3KoNx6SJReLh16E1kzuJxFW6QaRBF9p6U6StUPHjji3VqDUSmd1U7nkksM2RfJnMcqUH",
  "key42": "5xTbQeCDddU5ry2XhyUUSxJHqh8zoxXeXaRNiWuxXJ83MYCAyMSSv3gms2zKZ9UhqXsV9bitaMPQUsYquAw2VA8U",
  "key43": "2KPwgituVTRovFWeQLgMA15cRbe8juk4VhL9mECtGbsHsXubfSiWtN4AfDsLXKNyvSGDLqiRhRTAFcUQw5Rok2A",
  "key44": "25Wx9wExY5Gcf6gecmMf2eE2tJtgotqV58YhjyheVDLw17sXW6exwQUs6cnRiiX2ydc4SR2JEU3M1uXESUiL63PC",
  "key45": "2gqqajfbYTR5bXC9yBQ7EzazSTNUV2pdW1eW1GFGMH8W9gkSSdU5J1fj8Hha9RpXjR5ofU3xPQ3gR7QqhkmYFkt5",
  "key46": "3mTLVnkt2HCpj1mgp4PrgDuYN3NGZBa1EJFAsY8S34jT9zSmp7acx4RH2iw3Nkia1SeLQc2RA32kvNEnZYhBr9qA"
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
