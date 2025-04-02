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
    "5JnLLpuJdrjE2ah3EtvqNfxNwPCpvF3L2qs6qxGEDzqrVtHVgh3Qr3AwMH6GrZ2xnsC2VDXMfMoLNy8wzhyiBxZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GiTvy5gyxth3gjP32PZpgKK2TnVBdwj8CGCwx58uMpi8n4eWjC6GDwiJnjRhseFQsyikNjgE4hvtbY3BSyRdoU",
  "key1": "3FQEqxQxXCDnMAYYRgqxexjsiJighsCWNziNzuxrZUNgiM8gr9gzVpixvdau7akxMCsMS1v86nQH5ijrvPGHdUr5",
  "key2": "3DrRQaFaybtG6ZH11E4CYyf9RZBs4G7FhvHGo8LctwYXXm3quFuE6EEwguxDUdiEg2sqFQX1VKtFBc4hzeVzBjBe",
  "key3": "2hRBmiNgRcxLNUDmjS6WYBbwy4WpK9UFUgReH96uMBKZAyjD5umAq1A96HWGvpeWJF3FFPHxjkJ9NsrugPwg9TbV",
  "key4": "3CdmNwPAtMQyWTLgPFKxmv1kxGHApP4qRDNTiVTdEFrUPgw4STvanwqZxW24AT3MdwM96kcLYDSfAeqMKbcB9Nu5",
  "key5": "5wEjX7tsiPKmx1kZTn3M5UzQskbq3jS1LUWPzDG8hmWVmqcKBX6e7uqhhM5sdADUiQFsVX5MnsQYfgZ6tLB1ZjHy",
  "key6": "55GbwY5jefWZfmNLxCsLKgwktfUEcJt2GFs4AMoBojN5Qi3b4FPY3q4kuEiEW8tgs9NbDzXxDeHK14oYy2qJNTVe",
  "key7": "42HSY2eZbH7B7jmMRWY7Hqe5bV4WfRS9wDCWkfF6rG85U6nqNrwW71tX1fgyFtqEN8mZsB7WfX6unanUyGb3TCwP",
  "key8": "2rwWP6LwLTs3rinNoaDGR1vJbL5h5gXtWZr85rrLqFNMb1WFB6vf1hS6fyScVkHs6CQYDPcYTKkCeJEzGaQqTz1s",
  "key9": "9GPKBC699ieZ4FTrCKpJPfD1MqLNvVhM1vuPBwd3dpgJFNW4ajn4N7pSDa7q9a2cfAWedS29KDejiRiTiVPA1Gt",
  "key10": "3ch7izCRNhwPgQzLnuwKFdtFdXSpLTfKo97Pab7hNr4SmCCvJ9mc6JdXwQ4eBDLtS37EMMFBr7vZTSgD1hA4BbHb",
  "key11": "45ozNCtkxKd8VmkMNo1LLFFL36NAn4jrmzRBMX4V7mVf452inm1zAGs2EXSsCGMBbNC1HenparY3cs5kCkZLYtA5",
  "key12": "5giE9gx1CB4SJ5SJGTpmdwJdL6RauzJPAQ6wyMh8WFN28bGKEmGWAMaH6Jomvv73n2XeYPXX8GjRXeQUp4GRahyD",
  "key13": "2TLG5a8LjUGJyeH5J1eA4QiP65ANxCuHgpumfXvvRTwu13udMp2RiSFCiXUSo7G5UaFms6yhCgcKuqth6ARFL6P4",
  "key14": "2NSwb66awCedP93GFeUS7rprriPW6DQmoZ4t5q8TjpGw4EntiorLoLWFwUzVqBwDJ4pinQGAsf6ZorBwPuNmTa33",
  "key15": "5ubPAXqncFaJKbHgeGpgzwCqTeLYCDQGwpAkeFY613wuU91UwwHe3Gvq4ZPSFyM5XqSVvg2yZg7QjPxxu9wC8UrS",
  "key16": "4GLNuSxtxptpC4xD7DFQ8se5LgGJnx8hKpMzbLyJXAAxpfLcxjzYvowTPANgGsAKuLSxNdZZEvY62kBpVEyc1tqN",
  "key17": "qpNXzqabQiQj6tQeBoUumyj2GwBjVq5ES8tuFU8UxncobQpVBbLXoXgRNtTutXGNim9q7ZubU3MvDVJfGETLKZp",
  "key18": "3UedEDnn1giPmm3wg6CchoyvcKKEzNTCeLQFuAYnZXjVqd7FZqWqBqnodqnrZGbB1fRVeSJdribt2TGob3hKTbnh",
  "key19": "ZPWEH63qA2b8FHpB3mzdg3KLNdXCXt6H2i5EmGjyv7SEVBz1dfn38CWHBEhjrHmNzZ6CXFCg2wiYtRdNUYuMbcG",
  "key20": "2uHL826tktLa8QAU5mwCdRifhgLsBbjja4r96tx6chPKKDtaQns7cKtAiCZ9duf2itAy11nSwfGR3Jcfum9RGJk2",
  "key21": "5FNPnkw2tRQvy5wxeuMbdNWdjf2EjoRnhsHBMqfmjstnSyZ8gPGqeDkWLBQkGhrf5SdDEtgbVSb7oj5Yx4pjKJnY",
  "key22": "5Kr2DgdD9vkiC3tfguX3ibFEubhUtA8mtVM3rtnwPQLS1T3KU4JKyqeNo96WRcLBThWEDeNa3VZ3HrVTKawdFvaa",
  "key23": "43VgBkjEPAtdN9XpydygqULRN2fUfUmQ6UjqKXCpckgcdHu83uM4QUEbSvESagEP43Kb121YSUvXtNtp1CwcqWPb",
  "key24": "5k7WdnFQAzzPxAvAUXxyinwkbyKTw8aqyJm45YqgwYcnMbrFFW49NGBGv7wSpHMRhV7rdRxEGdgbHrb6HWy6dW7N",
  "key25": "4FK2tqAB4QDqsDojyR8JCtzNUqdHJ6igTwGn5Eu49zz78htTiU5cgbyxiak9T9sp5rRNSjN8UyF6cosbYKYxSUS9",
  "key26": "4YrxWWHKQ12BnQhcSAKcfacPb9yUsccSNhxzGz1sZLarUkc32WmgfMoc3uUyLMNraEFwokPBiTS2oUZpmb3VMPPd",
  "key27": "4CJgUuktqEsXdcHjqnMHZnktyBuw8dEjkKS8mdyJkbfsJhoThgy4aqA6Ypz9oWD9eCsHhUouYc9hb8Yz1Qe21H2u",
  "key28": "kVbxmPcxzpsxVVR3SnyvddzvtqV8RbATeDufp84DV6Cm5afWfdy5CmvpiuTD9yymzPWiCN5JH3wDZJWKNeG4Nsq",
  "key29": "5APgyRZezSTuUTumFkhvwoeYsiFQvA7P1QXnxEnQGeHoJYTtqJAfu4DkfG8F55QR2oSV9eYCgZBuf5iRz3UGaYkh",
  "key30": "SKBvcrVpXcghd7oQg495s9Xm3TcnoiGB14f6NhTfyxkEdrSbckUBD7VJzYvDkH9yqDVfHKERez5X9iZdyjN4ixW",
  "key31": "5ZK2tb59vJowynGbkCnFhajFSUNhLgAS88iibErSt5eTuoWsD96YXsgesu5yYEGNMbVUZrrgjygGeF9GDv9DJFaW",
  "key32": "4ESeDyqKvYjP8qgbi5U4bM5n5GvivNeyocnx84b1xszLuTnpKVBHE7uDvY6hPVq1itBuby1upRVxW22sUq7t7bMQ",
  "key33": "5b7gt9JELDCbqMxXrKTpGutApScpGjPtTXNhLYXBP9m8KEgTJ9fQwLTxb6s3K4PhhkyW9TnhrjC4qKYnuXEXzxr1",
  "key34": "42Dkx9ds512nRjvpzTvPVySdnXHJvVH5PAS3iEaukt9y7KNavEq5ovjbgxKESwq2uZDE7R2XaxwzrWvTmVgFxWos",
  "key35": "67737t9nP93ZwWyGkqpJbMXgcvvdt93uGjDNXnib86ZvGjdyHe9RjtgcKTBwk2vrjxdgZyVy8Zp9C87RiMc3Uv7g",
  "key36": "4AZYiyxVMZZwNUbMGHb6z2PdbTxkSbFc3PsFFLjJwcv1AArn3HYdsihX2aQssokXBhw1YB4VruUJsAVbQvTSCCoK",
  "key37": "3QxfQajYw8giHKc7GVhb9nXmfr1zjCesyTrvjZQUhpgQ4k9a4VT5kh3eCSw5TCPf6gP18S9792CW68ZcC9cxEJKz",
  "key38": "3rPWPxmoh21umfbAD6xkGjHYCc15gzb83WuX4iqDEFvXWAESD9k4dWgzk1pFeneJyGxVUJTs22RGsrqMMj3j7Gxh",
  "key39": "zPN1j2EsEeJpWs6jhRc1awprsvTSkRXL2EqN56LVPhG6JmZve22jLimF75LrBB2wTqbztyHg9m6LT9jqMvQpqpV",
  "key40": "5WeRUup9r4xR1a4pvHu7RB32vUgK3yEmkNL23NpoPM9BHQqYtM59L8kGfprLA62mGVQHJ46zMoyNGAWoNzipAzE7",
  "key41": "37He8uNMZam4Z9ZotjsSmBKGN5ka6ENjvv5Uu8o2NaR8b22tY8KWUHXNBaPBCERSdJdPZ9YQZo1EzJHJcePAWBsg",
  "key42": "yNgDE5hLjWNdubRfkYma6QszWUSE4WvtgYSY2pvFK4EP97tai6oc3Gw2jPXCbj4bprzLq7TZHjnwCJnERcsqCXU",
  "key43": "2VbiJ96JaqQUGTmbyH8YV8tj33RiyGWoP5hkZDPqzF3PwWkrHuXuhPdHkh5Gd6RmoheXWe1DiSybohH9TVN7AnTk",
  "key44": "5VYnbFTvu5LjiB6KLnRcpop15rKxCVXAZsudDwGVxfQXSrVbgegXrYyf9nw2qfAMRq7gdC1q7N2X8xDfdUPPuvUm",
  "key45": "3x6XPVNpEqCPR3xWaVfLMn1Dv7VvYpbqHCE62jUiZZky6dKbf4N1VZfaQPXT5EDKWC5PdStMy8k9tsLq2BVdpzZa",
  "key46": "heYcnmTg28Qn6anvpBPhVqSPQEzJPoHmXyKv6WT2CNyYp1Kmei2Pwun1tqtLjENbYEyxDDn9aodnBSDjzoArrcz",
  "key47": "42HaFyVPzBem1hHU1n9r7Q15eeW5kdnPRmds6ner58iAK8Z7FA54MV5pH9vtDwhKUGYdWezdm5en2kai1gESo8A9",
  "key48": "2URkKrVjD6qvVjVdAMQCf88BXz8idxaSxzCgTzteMUgwZCq5Bz8iSZJRB3YdFpbmqoE5o3e1ubXnTxXcYtJjPnXW",
  "key49": "27YTbmmGEijhKHY3vhuRZ1V56fvYiEXZZwBaUqNiXgKodDDm13iCrDcqtFicnjwRkBmU9hFKg7i4RBrufZsgZneF"
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
