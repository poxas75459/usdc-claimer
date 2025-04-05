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
    "4JX3kuTwKFUmHMuMCNsyehkGtNFVqomRvLShTtHfsBR6FQrgW1U3sXGcKVPPP8vH3NLjyrzV9nDwMdEoLCDm6kXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDr3ZSKpALhZ5BRp82q6ZEFNLuGTZ5jMQ26vzNQeasHsY5Eh14dERwWW63R81i9VbvtsBdZ7hvRN1mUDP5VLjyG",
  "key1": "3WvxePHmCjCCL1EMsxNv8JtG94iUwTMWEmwjtuYrrpzDXTV7PDmG6Gw3PCjw15JssFVpLr7L1gND5xhsDTKxpQot",
  "key2": "JBznXEkq6vzftx4RGFXwebXbPa63r4N97QGSJzaymSD7DPBVTXiLLoTV11WW2iPqZVYfSQEUwkaL1Z4smecZmfJ",
  "key3": "4KHeCCre5UEUhXnFbo1KCAM9rKZY9FthVKNFrLWRxMGjg2Y2BCekEu6xY5ReieEykTPof9ruHYRchxAD9qwSN89E",
  "key4": "5BV3TXjeJjum5AyoQpdxSxjx8mmfws9GWAc48SCcG5cdiArgpf51YTGgbg78jWYEhH7CVaGMeCr6eHjXUZKuYuy5",
  "key5": "hJZhLMwD9gUu2HnjiaVTqVy6CRT3tm5519UDiNyUc7dMFX5rE5ENEve1GAwW8RUZ1L8h95ejrnt9uBHNafjhNHs",
  "key6": "45AvKWLbdM6hEMcqaV8N5GHxDnvFGd9zd4z1fwPUQtzEy3Gs11q6rN3fZGJuqbuYjrEg7dM4KLZmeiJxFkF6pggf",
  "key7": "5zJgTuG7aRmnVNrVPrKPbmpL8HMaC6u5aVKWZSXhXS4GCtGYtgcnPo4PqJahLXhvgZTZBVSvL6STV6ndAqAsSZ5b",
  "key8": "2KfUTCQAguXmb6PvSnBb7evb3nWfC9s9XH7TxF593XbvUuUB4TzRSr6VLv6TfX7ZrNyZTQStBYcM5f3e7CoqAGpp",
  "key9": "62fcJ6BiivSiL3GHLhd7uW9LVFBngQbgwDKeSVzTajhE6roMpZN9cjzfqBkFwzwMdduY7xvMCAYszKDcj9kTyJp8",
  "key10": "4HFP7VZGtpitfVosFcL1HcgaLQ8eLnLi7gLtTpdJjX3QZaLFGacHw57e4N7uCSa4LS2ydCkyAFEn7yv2yZtKw6S",
  "key11": "r1nhLQiNfPgwRaBV4yrnLdHvxxRjLSFvtHo7wSsNS3yCdDf3e2aiowUnX4Yywr9zgvoR9JifXojDstzDgmL5ngg",
  "key12": "4ugJsjoMPnoxZzowfjYGwFsnvAGnSkU3qP1QyBwUB1jddHa5UpfjhH19KpKe6aQFobGMneVxGaKWtxS1xGvYwh19",
  "key13": "SNnEPAYTf15uDCYqqMvio9wvShiGpRm1pg8tKtkQNCcSbabrSZrAUk8Bch9uCbhyj4Kdx4xDxzWfLYT2fTpTctU",
  "key14": "XxxZ6g9cYpPNV6Pa4MFaEKd83vaRM8n7aEuzoSKkXi92sR2yZA7aB1RQCSvPXPtHDWWoYyPRng65R8oUrN79nmL",
  "key15": "4mnNgDwYcoNTXgtyDTT2a63SeLunorX8qYYSURNe3cfTmGfJbL3fsNMKEf6wStchMVCYhudGwsiCeEDxCP9HWXkM",
  "key16": "4f9CxFs97t6HejW2k9XSHZ4yfyxQKDKHQDR5kHbKY3BqiSdcDRHh59vvYNar5oS4j2PCk5rCTeD9ZwjyiVBkbjNg",
  "key17": "2hHUrm8KmE2YumiLFYRWETihpuUdf55yfdrUPD4Dn2xxpQNGdh7mV9F17zeGMCVHi7eE2iZbPPSQTnyGxBU97FM2",
  "key18": "3fk7pqTMU5vieoWPvLZ8x2yU2VNYdXPhzktBLqDYgqYCpLyBdZUJHue2THsxKoWbMCr2xCCeNpszUDGmA7QAoaju",
  "key19": "3a6DsALivbBAVwKKvnfT6DtEmmc7XYSA6wrzoa1QmuKx6hUcjPcBzfoJfKTSN9PSvFXcCgQKYp7FSUdfeWnD57ns",
  "key20": "BXuYhDBZf1Neq1sCmknxs1oiQijoQK4FEmjnV4kAwaaM6VxPxYdLdq9yYQDjko5YdRmbbBiF1NNHbVHU4dqd2cJ",
  "key21": "4iVZC8on3GtGF42LFomrRPrPt38nd6551WfyigmEz2qqn6BtgEPgyzUBmgoEQEacWwyDoP8e4rV7hdJCFiGb3W3E",
  "key22": "5M9jatUZ6ZKFe9eQLUgzPDy9uQF615REgriDq2GPX6q1eiumBdqSQ42vHj1G9g8A59ZFsrGRUjvjvmMGfp1Ycadx",
  "key23": "3wPzpJ8pNKJ8q6dgx5wGh36GvdyQkjUZ5SQ5jvM5sQNZvcLQJUo8ET49UL3oQbkCdhZMPfNB5hAESi7tVDtqjz2n",
  "key24": "3YjFjqwYgk2pZuy5z532hrbUWA2KNtBn2vfgdXcomQbaAqpGxg6STBBSKJ7FdTpMHFsFRaqAQWja77VeKu1AjLbz",
  "key25": "34fEuENDKZ3H545ZJKJpwsQNGebzACxfvZPcKPUBUNzndQLpTojR3svGYrX2TXNWTk6V5pAX9CErCfXBGQDCEsyg",
  "key26": "2m7VgRdJVUtXMed4qXTj6v8Zkd7oV411xoMpxzJcFZQW86y3RUJvPh8R6RtfjrXZp7X3NSUVXx3ErTWYkRNBu9a2",
  "key27": "4GXhxjfKC8ZRQj5qAh4aZVbTeSPWMyjfjbNx9XYrkjBZLKRkXwDpfMQnbSfQ3FYMqG2kcpraxwDVUfKh24DFK7qn",
  "key28": "3RxfmA3AJ7ivChQfW6bLmVULjjfiymwF8Gw3CrsiXDmn5NxYzbsAzVDGpxc5zqcQgMHyHhgCHJDyDzn6QDqmXHzi",
  "key29": "3M1tHRDmBy2YiY97j6wzBCjqujL9n7P1r85dsXbfPXapfUvGf2k8nYVsi5akMLHAisDocrHS64Wz88iGXpVnLHda",
  "key30": "EtDr7DREnCbKXo55iT6hyJqZsiPAfu87cjaKu7DVR52mPRS6o71fFQ7jLTwv7vCwyhMm7Dv8RsW5btwopBoYGrX",
  "key31": "D17PEhMjABE5AV4wZz2JAmaZqg1iQehaGvYimGMS1YoyNpwvwayk64UcYXbpUyT174ATgwziY1KNJX2bQrudkN1",
  "key32": "xQ77GiWmbnQ1dawpkAQMoq927X5khjsrgHs8v3wb52jSPEqQFfJtk91Lex8cWSmgym4avjWdGQTYVsc677JrBXR",
  "key33": "4nXdKDqeY4EvdoXqQYcjDZ2EKqREAoiPE71hEJVZ662H265KrGsDyj9YDriYixnUaDmepJM8nDHdtaLvAehTrghH",
  "key34": "LWbYuEq5CMrC85uBFhtqX7VvQNKRXQpJMNtdiWi6puWE45B5SQnbJzHFF6wAdoAKboDoNKLTPyECTMd9uGD38y7",
  "key35": "5dGrpcavrnSxt4wBmHW5Tnguu2mpPe6e1RjaBnuoPanW5aZPd3XJujcNA1EBEUJRJiGRVcQiQxoyxKmpJRrBy1eK"
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
