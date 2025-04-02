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
    "4Za7Qnm4F1UNxDY3LEx4vdiJR7Z6QLHwWEVvYqci6qBhUUrCk7MLfPW3nYMgS7WoTEGP72UPwUZAiDTHCYuyRcAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jV7fLajmz8ZobfEH7dP41tVixMVoCmUusf5uRZhH1CXyQvxwpy3rSNkzGxDkGwn58J7mzV56FPaQFm8TkAwhUnk",
  "key1": "5LeyW7r1irs7SDxmfJAhwz1XQsaPSFmDQMtmw1Ho2fdTeiFSn9BsEx8pzGN2eeAaJRrt5UuxJCoMk4KmfGiUxpPm",
  "key2": "4ypuKNtWkHuSESNT51jcuD3T7fo1AGcrgXxyMFbKHCseY3fEoNTvUmxaK4Q1ZHgghpf5y2X66PVH5J8FbGPnQ9Zu",
  "key3": "3n1kbYJFF5dc3d5UoWMYiuZiXYbuNpMSTupEqzvKB5L2yjoAJ98v68tvGW2TPmJdhap8Rm9R4qe8Yvs8kKcgLJ21",
  "key4": "5GyzBbwNnbb83W1f4PTMaVD4apVK1LcWhAZZoKUnf4vyrk19WSMtyqmm1P4WY4P6fALU3MUrHbPX5U9vGYREqnJN",
  "key5": "5iPVRcGEUZut2RRsoot57AC7D2LeGG36eMjJcBASZaQZWnusZWwFemCdcgk5APbQDEQjtT9NcwocTsAt3aKt9bKP",
  "key6": "2Vy9FpJ4ruL5iSV7NNcufmvyGtuik74A1R6FN75XweWX9FinNatoh5SoEp6o18k2JfBXjEFSLzHyyQ8wDmK59Hzv",
  "key7": "25iM7WonRfwhHrUgCjMmjXEFAez8QBjChwnCNPR4z6wrPLmVr7kxcxWwEwdXb2c8BuVjjU4TnvdqugSVh8BmuPTX",
  "key8": "4o6nabVXyyeKSf4QfwX2Tk11Kz6Hs3duyFjcuZM73sZGJoJdmNvWHsz8GebHzAAKBhRQ2HVrjQCB6PfJPcedgGJc",
  "key9": "5PhQYQPCDySryWsPqBNHAkF86t6fThVWuT8w7es2ApPD3Vcx2ngBmxeQbsCY4dpZ1ynujfrzsJBdRnJuyTPwm4bD",
  "key10": "2VAWLVf7mqrzDfy8aaAJpmeH9e5X824RUFRuy9YZ5Q4BPNr14E1FTogYAP7HBWjr1pnijMPieYdXUB3Dbxw1bq3W",
  "key11": "dhoiwDq3SKQNppeUuB4Mc6zA7bzhVv52HWYWqt5NZ2WCjMva5MXjK1FUyqsWw5cbDKNBREFnjuAqy2w7WoW8Hq6",
  "key12": "2g9Crnfnx99pKDJ9nCsWicdJbChMgR1wGHGAq5gvNTNTtYvQBAEukkLZLL8vQ3Kbk4EvFsLosY6xqKXr4oCNWigN",
  "key13": "4PV7j7YXdXKyABGwQJyDpuh2brgdJTaeynBWe9erXcyEBK2swNQRQgwNVE6FPvtSv49h3JDux9AQFAv2PPL1ewGH",
  "key14": "2oGSKF6jx3X8Cx6gxGYoqrgFmUyXGxmUgKeFfvNecjooippVrBDzzq2LRTmiWug64tYuMiPyUin5f1vrCNQaNpnP",
  "key15": "RAwHUirzT3dZWsXhHfgy64QUrbHQJE8zHy9mQLvLmGdBmdjRxBSA4dLsKT7PSj7RvMNcixPTTbnnsaoigF2mK1w",
  "key16": "3SYh5kZPAnezJCCc88mShJZ6kBAynxtVtfkcUAYEopDAwRLVk1zohu1DABo8ufZ7VEEba175ZSAZRub4gCvAnZhn",
  "key17": "2nPcvxhQng1PLKdjTf6EWg1nzASoe83LW1gK58VDVpCpCac5fBCJDwwGxWq4zVHDopepXqmoFbuHgDEp9nMx3Cmt",
  "key18": "33EGE2mZuWZvkCvWpHzbDHBf5o6vUhuDhDMQwVND7KvxYqmWtJEPoDkLGWjaJXaa2HPWceiJCnrgsQTHU9TGCq2N",
  "key19": "5SEQvm85oEJjUyHEvJGNeSqTa7dsHsx6TGgxEUtFJzPSBieH7GVxggjBsy6rvXKfNEh86NyGDyXxo9Ns25HRNkWg",
  "key20": "53Lj1vBnCFm4WUEE5V9p1W87yikRkpfS3whH4wSTEHGD4odcgcCx2KzveMXyHT16eb4eUXncUSGfretox8tsLFVm",
  "key21": "T64QVT7tugwPaWUjgJNb3BH329NX3ibkxAqKXRdJxnGXrcZJcM3qq8exZkhzAzZ6RZ6zSJpvF6F9Ur7HkKfj66V",
  "key22": "2Pi6h2csbXzpLDXcM5EqvyE2ejKybx7z9DUeRMh8uz4gQxczaboGkSwUoVYqUrZi1nsEaR3nJsH3RrodFfGAvsmW",
  "key23": "38mHPFBbc9PvwYFE2V3a8g2zffmDhNHAm2GwmeEJo9R4TQcGF4e5G898rZYC3iweV2megbFhrrZRB7VywLZHhbeg",
  "key24": "61wyfJFPQ4eT4rHip3jFKSdMpF91na5HEVFu5vw7xRi3zkRkaXVwcwJGbTNbunUUKBkTZYqheQSYsKXFya1gTCQz",
  "key25": "41FJozV1K28jtjA1F4j2E5NqoM8MQaPQDajhNzboRg7xpQp1zpd8gmL5K4DiJDCMDpwe66GYBy7t995SB9WHZbeA",
  "key26": "eVh86QNbwtgvEZkeU6oPeokuCbsgFQUaX56rb7AzAHkbciMXSKW9epSA9USfDVuepQNGci94Wo6sjPzqzA8bpWL",
  "key27": "LqKh5XnEjiX742mKckc5pDXidoCShyBP8869SZEyUtjiWeemEisrE7S7ps6u1h2yAkheZ4asydPkf19t44ZWXGL",
  "key28": "5jr4d2kHx2R7dQBVsTWtKJxb4n9P8yuzyXR4b7V67M3NEVEtjMEDYsxMpv3tZPtFqwB1LeHjDv2weZZq3Zrggy3h",
  "key29": "4JmmpTv7BSF6V9XiqvfkM4C85bSqkpuegHKcU4TpsKUsFFc3AqKCZKjr2MrbmhWkv1BmRFtSXTGRxY7gYuNqUjSQ",
  "key30": "vojhybMejrsdPDBtWvVQpyUNruA7xnkZBYKtJE8uNtz5jiM6Pexw9xe8maLTBvFYyqqc2B7dmzUgjXr77dgLujf",
  "key31": "46w8Skpoee2UFLJfWLxx8yqd2aA5b7NxTiUygZFS7TrYpJ1iAtPEe1hUAaxGxF26fAj9T5VzLjMJU9jFEnZePabs",
  "key32": "2zqZ46DSUNvT71GgHr4pw8BRfqafXQWKyNU2driwBv1pkRV5FThrSWGrvA5e1dxchh9Cav8EAiXnyCzmYfjKQJYp",
  "key33": "25p9n7tfH4QGreqetYFDY6hhJkzChfMVTWcPpFY3hEdMcL7WhMsYhVmYPTbZfZBnqtjdETW9WifY5T6LNVUX9YtM",
  "key34": "21zQqzgAR4nDnSTUtsMVyUeYaEpzwJshbaZnpwVXkYoGzxWfGL2LRsJe9BgV3aWe1WnxbLY4E9a5aPJE7Agxc4ct",
  "key35": "5M6XwdNqNCHd1zqd2BhMTagqqgiGMZLkct2LRtWnJkc5UBExhDtnzGkhxQVjTQMSQXoZ5mhLxEBf4LxzporTspwW",
  "key36": "4L2JuoK6KNk2nS7y76x8TzvGdepCKDbMkMYLBUb3Vn51xee9w5Cf7LLE17MroFx6iCc9bP95uXWssVLLWxrSRRKd",
  "key37": "4s4zum3SDp5ZDZHE2brPwf1KjyaVGvQxzTXKyNmJcfWDFgUZDCWtZqbXNtQPTcUvaJjAtgg3KG49afwuQgxVudbk",
  "key38": "4a8Ldz7D1HpGCLXLB5NaMatKN6KfuHZcUhHJQpGbnqG1bZpUbMvtqLe7A5DDc4dA9F9e8KHCLw58R6M9No7bpDg1",
  "key39": "brhzXwy3xmeKrMZSMfSczhnWL7kTtN6pPcTp1F1Qgo5AqGZmb9ENC2KaMfk5r6t7PSQ2QzphFfbKSkALwJiuQWy",
  "key40": "3NCNxKAPLrd991SVMLMxJ5ynkaGzNgzzQqZnBWRNka6KCeNL78ELoQc29YzLwtcPwLzKWErjp8oCq8Q6KUJQLUid"
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
