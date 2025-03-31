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
    "5xMaMTLFn4JTgxHJ1JCgJhWh3SKuqnB1KJJxnM4wXweYKna3G1j9GNAGP9Ryf6o1qU38dKimN1maVzmDRerghWK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmWRaXgjAX8ypMoYuF2bypjBWLps3pYvMDQzFKmtG3eh3Dw6arkK3jnCQqpjRuZXpambBxG8djpTa6v7U3SS6Zx",
  "key1": "4AMzyhPQ3k7YkzVEZ4GKeGQK4yAkVBnaVF6gokcMCu58W6g3x2vycXzZh8xsRNn18d6sGWT2PuVGuNCXAQR5fUcV",
  "key2": "2QTiaW7tzK2br3aZzm7u1fTZtRUFNCBkH4ZQjAY43DdaCTc9r7TSuQNQgiErggTkGEPkX9FXA9EijaErUaj6o6xC",
  "key3": "31bs35zPWAxGjrM4mosuv5wHmnEQMZZTmayyBVMiH6kVpYDUf8UyCEmpjwHZhoka2udur2uhcmBHoEWd2o61bWrT",
  "key4": "FDqXj42j48wnZw9Sc46ZWHGeqWr5Fy139u7piyp5eKNAVXWHAaFV6DF8oyRWRSFiQxtJHAmyrpEemjZnbyFkohB",
  "key5": "2uLr6JfCeyj5vczh7tL25n9Xqmg6et6E1g15rDBMtEfZWdje2uSik5G6x1spWQLaWRu8fvvHY5nJD4r1WuHsedBK",
  "key6": "5R81nVMNs92QQmmS26McGVqcEqqSok24ezDZ23Ta3EuW4mSsZnuN47tW9ySDjVj3GCsvbRfwNpsWuhWPzq4Yvm5N",
  "key7": "5MTA1nNwR9Af7gXvG8ZS8JQGeYgvNcgZF3w33sMzrQroToxevofw8cqhXCCw3qir2JYQkhgr5aYQJKhE4wDQhbQs",
  "key8": "4HaZ6STN6nteMs3ia97ixXut7n2YxXpF2s1JGJ4Soqh42GxVVqNcZm3pC88ayQQxxE7cS59CGqboRfs7DNhLUjpu",
  "key9": "2TGJPNgYP4Dmev9FXrAbaBovcb1jvEXo6Xr4Fq9qezA494hyvGGKPiaBdsGsUndUR4mnDkeE9iVxQzm7ApJWprTd",
  "key10": "3x38o7PCd3rYz6CkMsE1kwvdXY2iDQpQL3cuu2C6a13cgSUFYQpgYKCPR8EoR3oAph9bnj4ETgBMheS4WPEFV6s7",
  "key11": "3i5hBJNrGnTqf5Wf3NQGpT3MRjNTXE7FYpZe4xmKzyYALd2WKUow8rJDRmCcJmNiHHLzTY1hd44DNx3SBo6fAVsD",
  "key12": "FsGguv1CaUKf27ub78zP2ZFDdTy36jyJvuFkhcAM7wweBtHXjHov3AMt2ngipB3yRJ2Z4yXZaDc6FwkHw4KsaYc",
  "key13": "8wLtYWeV69ZJPdu8Uk8dB6o6Cbwxf968JQXVpEaQ6ypA2ziQqZqgctoZatUXwARNYXz2soBxLoAfyf5iwhibWgK",
  "key14": "Gpr6TTrdLVFmZYVRqEaReDKkRWfazWb9rbs5EQhRaxMvqyAeR25sDXMN9UATwi956ZRbq8UNDX4uirqsK6HgFSX",
  "key15": "56ogy8dxJSg4ndaHm8atUguB3zo1dF6NuWJbaKDfvDEvAffgE2mXNM3jCG45QjqeGoQPqyFz6uVfDtG8Q8KXSw7c",
  "key16": "VuHniWSmnSjN1tvwAphkwNuzpiJKffCFEHDptxQk3vwKh5LUVUG3UQRBbyCBzE4wd8KsCiE63DowKs95puDWkTs",
  "key17": "6tQTNuNSCjWAoikcQmD6vTXw4FYCMCm8xgqLVQHhczgqPdjtHUWL95XGpnaCUNv8jyz77ewd2pTh9p4Fr11QwuN",
  "key18": "5cpjy76hKh9vCr1ksyAywnz1dKmC3m423YkoqhVuMRQkb2cHUHwYHyxv4j6QZvDKHefSSAyfTpFRxX3bacVfvkzr",
  "key19": "3FsCG619xDJS48FS76bnwHTHypEgXwwnjCiPbXjmKbiXMy4jDZPjPrXU28HdLqM4sau7QPaaGu97xiPVwZf54RLQ",
  "key20": "3pi4GpWHM1fMBGrTZor8SrGKhgLGXYVgQhkjBn8w8DAccRVYwjFtxJzn7NqRADiMqmUfCyBCjycYvsu7AwWWoiba",
  "key21": "4JjarKvWnYxzAMNewYc6wtxoE5DL9iEix5C6MpCRxLRKh1Gjj39H53aeCiQj5LRAcys45ZMeojodgngF2UL1EqWV",
  "key22": "xHxJ4HzeeWpDA2yPrADbH6jhdQZV48Mvj54vZFvBPdQkK4yZ16esWHHf37jsnN6vw5wW8tjPFZkHLFFwN7FX78H",
  "key23": "4MDpZY8rNJhQTzYPZTBsZiss4Z3Fnzb6ojDAXGEGLm4wSofKoJBVN1Exqs7ah1eVZtmZyve5Dsnif9RVHC8P6k8P",
  "key24": "67gy1KurrYrUtbgNLUC829Ru69sR4Wp4DCWQYHtUUBiLsDxwqK94nY7JchEbYS7WwRQuGGaCHCN87WEprHRnhHtq",
  "key25": "54tVxF4jWaaK5EFMZtUYvYmnYiasn2Vi1oByvHxQGgER4nkQuJz6DicNAkDdhBhnYrDhkddqNceTC9dmLN189P9d",
  "key26": "2E3v4XXGHqWmtXmQwvdse9JQi1MnLzkqhzdwFWHpncR3gH6CjBVx2pgQ4wFoBxfLnL9oWq8cTZ7vBTGg3nZuxsvf",
  "key27": "oiLcvVx2DGPxxrPRc6GEFgVDAMz9nbLEjWxA5HPegb6EDjUTa5dSAXSygyWd9aj9VWxqp4iUZqSwTpA82YdmzTa",
  "key28": "5R2TCLB7QgR2udRSHrVDucL52D2C4XsdGo4ymNmg3RnDdPkMVbWWPK8QjXDYbocvQn1jao5KwmThfWMDHwdkWgut",
  "key29": "Koab9jtiwkjtbM7SUbX3xDp8GLkBncNAysRvqxnKfufb9C3LuPxaLrjEsoEpFs1FzCqc2u3QfEcv3NsgG66FwxU",
  "key30": "koK5y92cq8ogBbdkT9eigUFWfSdHbX8y6QmCuzQZnzJ23hAhxz8uWznJFkb1zPCNSK6NH4bZuiWGLao8FVKs1tp",
  "key31": "3Z15VCembLxK9WaJ7BqnJc9RhFPq8m9enki4xxnFy79spLQfGknHwyDAemq9Ks1PHNzBRW2G9MMtgdRxDCNgSpoK",
  "key32": "3nhCPs1N8x6nyBdK4cDjRBAqBsaK7YpZ2fbQyN6dawEAZjryx5gZezKhiju6crC2cELSwdpAh1M3v77p1sc6zYta",
  "key33": "wpMUACrgeFBRnBHjR1N7G7CQa9fKfL1NPYmzFjKczGqRuktZnuhJFJbiHu2hKxyjVT9AzUsT7yufwfzSKqVVX4z",
  "key34": "2FczDzRk4DR2xTCLWTDD51SQEACWjbTxuju8uRyEkatcC63NmcJcnv6WC1M9JFSRjHWwnqrZvq5bE5R9kxRNJWL",
  "key35": "3M1zsaipwnG8z5QgogT9AHJcGU4Nog5utXGorHD2QBMYAMsL4dCKxHRdU22eoEFeXJGL9WiRo2fyi1dknzD7EuRW",
  "key36": "3JdNqsVf7jLQCidU8KcZ1VkPEJQYxUnyQazPRzXPqQ17r6TnLqrpGmafdtpxkYDkrjYefvj28JypjjJA6jcj8Jby",
  "key37": "3f7dYsUtM6d9Toufg3yBiykRv5EPV5qR1aGAi7TRCbjfjV6dVgnQvjaMyaD6knK4Cqka6MiBz3ePiSFrBVZvEjU3",
  "key38": "49JHVKNKcgw5j7GZAH4rDeSUbiXVXbRp4xhVWQwebMFui5wsWCDDCogjbYoUCEPDj8QbXL1aCyo565HzdDJnKZ1i",
  "key39": "5717XwJyDp2BnFp9CMZjgVvc41HPhmw9au1xNaHspMvfPxUPWWaJL8sCtgijLrawa5ZLJRNPTrzy3pzsfYuihR9j",
  "key40": "4QkKx4eSVFk6AWDpQkTeBBfHaJm6xSuw4e9yNcVEaxGJup2kjwuM2mC8pVC61DWFGrYnnu5Y8efV3APttpNzvVb6",
  "key41": "491rZHkyAHwbgSiDi4sLhFxQjeojpifuNkFRFzJ5dHrNpzTqsjmFpcmw22NKMpw5stmVWbJgtCegtar6jh2PWXXD",
  "key42": "35jrMRMrWbS1F6CKY3yY2QrWomQzJnCCN9Tnm3XFz7sPdNKQxSxu4rzsx5d6HRFS85bSKpWbGFkjcHTkjzH5KRHm",
  "key43": "2yrEra5EBvdZFTS4xUc8jfsrmEDruAqTRHnt1AeH7J2GsMx8Ah6Bf9tWJKmHubWTpKMMPSVqk6jYzaA9grsvvTmU",
  "key44": "5uDFYzJgDowUJ3gDx5b7hBnAm1Ty1dQKFjVV3pmMLPAwm4V9AxPCEwJZBgDAZCJNSQQsvNbN1TF9gZYAAAZ1ZGLs",
  "key45": "2SxiVtrCmTNm2zR1wEEjPCUqKoPcnneQ4rUWFex62cqPmhUByLcLp19hnhXYsfbeGacCF6bvGMuMxxouQ5wc37Q6",
  "key46": "5tFPqZRMhKBrBGuLpCc8zcpMxmxzcfcbKjYU1cVZvL4vtUNEiafYrwXwC6rm3AmSQ2bVBQLSqfWzxUMMxn5UYfPt",
  "key47": "24ZpnV6yhiQGPpW9ekfX1miK4p2DH4FrT84haWU5L8AFqSwm5Uwv1bkpGGsgrCvHZSwwjiLEa3W3BgxKDtR3pkD6",
  "key48": "34FtGyWQ6NMd6B88hNRrmLSpLzWE6SrSegiaLWpB9ZHyFo4ZsDcQiFrUnj4YBDdCHbvJMSGXFmYQ4UNZCmWSnRQ6"
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
