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
    "2wStRcoLoAMSQ4zMVsfxcKBHtHQ1WufLDBk1onpsgjZtJ7VSCniVfvzj1TAqAYpyiCxtzztLSGJckhdYqGmavYDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxS7WUQ1bVCy3qWvetRbE7tbShgW8oV8vyiWo3uQrmzNapbBP4ifFAohQfnP8Ktzg6CCsaMgCaeYvpEn8oUob1W",
  "key1": "312LXytEn46EdVhPV3Ma9aZtLwq5FYYBKVnpWFwXQ9SsB5jdm39cz2YDQoEUmGYtwQjPf8CSDwpTBAtbxdAUbCRX",
  "key2": "4aN26VA56akddy654WcBaSK8h3FSqFUZF9hnXkniGfnAnWbXD17ND8DHHdwskKFLiMrpgx19pUybNe1aizSPkjZg",
  "key3": "5DvwCy4XgPQeRTs17fZ7WU9D8EKyrrYNdWbXGuowsgvA47HXHX2WXPCqv2ERaWH5jgyFuV4ikuAhT2w8zkVvzZ6Q",
  "key4": "3XLWUyJGyC4UmGh5VU4cdDUVHAzvFDj4WwdqqskX3Y8G37GtFyYFeeDn61YN2iRvhpmiHKW5ExiJbu1WdgETgQzx",
  "key5": "2c4fz77p3J8P8fxwz8yfzn6hMNHPWyFZfkfKd2cL72eisuvESG8yF6REw8WCaQuVktG1W8RWePqtjodSg4beuUem",
  "key6": "3uXE36mEWNmC7Sa4vS73EpkhSgRFH9GAbwEvmuWCRwZNMTriiAYAZunqSYuyUoYUwHBQW6Wm4h47CRD3e2CmUvQx",
  "key7": "ApszZqBGmnFgkVdmQKJBdYpv9MKxCD7rkLSNR3yT35rbXnsAuLQ3fS6bmXKx89U2QFJfrdfNcdfKkffUGhPHzog",
  "key8": "36RvK86tQejNauKBGpcVrzgAgA84tLmvNEnc2GDq16Akm4TrEDJQ7MX6sh2z4jgee2TBV3YmKS3DNxmSRB8dpxZ1",
  "key9": "2fuWg1Gqw42bCYyQq1yqXcXnY7KawzpCrcrLmPkkm8srUCKYSZkxkrvJTW3ExM4VYkpUbbiCqYonjoUiBeShxM7i",
  "key10": "41FHYHTEjBnC3ikW9ZtJVuJa6AfB1GUX3tUbyUamqGHJpBX5ShMCyEeVPWbpkwENCE9CZDX3VhE6ZyzKXCQmhTmJ",
  "key11": "2HBgK4D4k7BRR3X7PFznKDR65QAC9bfqGCy1DehFH5Kvr8VmZTfjgH2Z1RZRAp6mY1ojXoZkikFMi8nuoE9qeUg5",
  "key12": "26U2CorZEReLYUvTmBTiSPnr4GPRKJwQY6BpUtJCUmZCWiGoVTzz5hjfDeVGjpZUgGVGFDcJ5rd9mprD9cXX2QcC",
  "key13": "2fgnZMt9LYHx7ukx51DBELj7HRHUQYxhaE55Rio2kbquVpKW1qqfzWKJpKAui8aDEoXF4irzsGZa98zb5nrnNngs",
  "key14": "3wwXH1q1SFs6heh77B9TfTcvodyEezbgzTrg5gaWUPDaupvbsyKtQN8WvDs6yH6dofpyBRA7C5RTcgwRBb4ipMX9",
  "key15": "3frnMSAZSx8aGXdszXVMdB513xdp7rkSAzob8VeBsK4QHJoWAJTgLWgeTcRifeHnpEB9xVRKSmACMn8hibW4VZFp",
  "key16": "44PjbnH7VRMebkamYrqhkt2xTY2FdYSWuQhVQhQeQtEo5vgPXJZFgXZBdir2i44iK7eDHsy9U6JjuX45VedeabDV",
  "key17": "3L781bz2pkgn78gwF6RcqXJLBkDKntsCwR8KTSppp2JWj4oHNBpSD4RqZMMGUBAxeBQyRyrR12YiYa1aD69GLAnD",
  "key18": "3xMTLimNVAacgXTZ7uqs4jkuABHFKDWSQc7fhsVU99NgX6wYgX3eR913RihSLi4JyMdCiJx1zvtCy7P6uikJdpbd",
  "key19": "2oHimnwSbycrZm8jXbJ5efyNuKPjxPVEdp62ckXyUbPJtuK2mcJC9P1UL1E3ytCjdRbU4APWYXMEE9VRDbBkhLUG",
  "key20": "4YoXrHCFgR7Cfk1FkE9Yjw4jnnTUpPTQQKWBXyRC7YPW67hnoj3GeTAVH2FcJXps9XnhDxxbFKJAG7bBMLnm4S34",
  "key21": "2danextxPeurcQw6yw5TpzSCiN4gzc6QVFki5sGqh8BLSeUKjg5y7T3a5CaJRGtkRURJCThK9otJXvZycCRfxax9",
  "key22": "2Lwkaj8DvwBi9ydTNLh6ph2PaXUWc9DxPVqfgg2MLL4GExzPngA334pMbakNS8CfhtwEj32QnHyDZmgUtfTpvyY",
  "key23": "2F3tJkFUEFnjt3SPaCDCPeaaZJs4yopN4wX9e2FQSicvemyri38er9Yh4QrL4QGxt72W83PqXi91TFzB7W27g44K",
  "key24": "3sRTJ8GUxJyZf9TXAcBBjAt75ssgFzkH7ieRs7azQQNgRTBXHLNiYiVg4QqDJvRX8YZGN59i2BLiqZnyN3fw5UWH",
  "key25": "4gXwvJXJzTySR8qHTdQCKjfB7LouPXq3jBBg8v5LL27K4KtNTEP87uXZC8MLKuD3cotwgAQJ2PTdNyzihAtMPUPW",
  "key26": "4MoCZish6QqkuV6mR46n9vBkCdZEuZzcNyvok3VtHdhznTWqLqZRgsqTP8EbQDuoPAivm3kMsgLaA2YKDf1kaCw2",
  "key27": "3SZVJpjroSj9JKpTKNwzccFon6wJwHACL7LSpkSDqDvP393pWjrr9s7gJwL187mbw2BF8jxEatMZ8iHKsseXSQvZ",
  "key28": "2Ah78XBrsYDzoZp6n4LG7iJZt8VTBq1ZNxRsQ9EqpvX6WLQ5XvrFLLQqtYbDq8qLCGTktTfvSiynahyqhs6VQzD4",
  "key29": "4CB6sYfujnVtn5HKtJbg6wmwaeRrxCY74fxPRt3jZYvCTqtC74dKatN59EbQcxCNKBPib8NGgFPhuEYvpUBrKvnM",
  "key30": "4MtxNSxTJEvdACDFjg3zd3QZGes8fzwRDweDyLgvu9dQhH3MQDYKNZCx1qCBzYyc2GE96yvH1VkcGcXa2BfPTiWV",
  "key31": "rNrE4rYTYPkCCwHJMQG8fctmPFkAqmLdUNpcStPsb5m9ZQnvB76htVLCi9iEcTp4VNvGpZ94sKom7L3wTNk7xBo",
  "key32": "5rp6pQSS6WE52Ht6D6XyVHgQnF1KAqTt4UVnJY3fn9MmbE5AUvduKsMBt632kC7QPvEQ2GYwmE294iXwSsw72WGB",
  "key33": "36VUoAW5wtVy6WSas8qsmiTor5JCJiv1e7aesEwHffLGXCwrGtvzP8CtY8ri1QEUNk86bTESMysQwWVAWbHUdhzq",
  "key34": "5V96QoNztsPqpDTgsBK6bxBzjf7FY6iDgNwm59T2AxLrbtxaCGqCd2AnzAPn8zo7mNRYUR1TxwBDHKrXPGtWi4ey",
  "key35": "2fDa479HhUqzEEpPhP5uFzXSCoismqVcoRUbCRYi1hEc9rva5zdixbrMRj1BCssMgPzA4P9avjWij25B3ipwFhKz",
  "key36": "3w66rG9p4bX2tmJT4GcfekJNhp7bAyxLkTKhZn3UTDNsWQwgdhiagXbCXy8nNYPooG3FLjwpPAZaaRoPUm6FYBkm",
  "key37": "3pdPJXBLDWWMEDwn2f88ZNG58rb8M1giT9SKEdsXnWJQTqe92WypbA3bryZfF5q8qjUcd7M8QiE5nWPfW4cP3Xd1",
  "key38": "UfZJdPYA6g373Gt5XgB48ymZ2U8258mXgmQ2FDLKxPVWUax4expDXsRsbCGyw7T4tFFwiLfXaG7cJVFsTibiLEb",
  "key39": "TRiERLSNgj4srhMCrQqLjASygwbe4vxKLrxgv5jsXd1d3yGhQZwYzaXk5EexcxnbCKzsCMgzhxmbeVCUJVTaG62",
  "key40": "XF67DLJQtrVayLGa2hPK2xvYjU3QJBGabDdcvD7DKMERDft1hqciJPDr6DTZh6LAjdcMnSCP9dWCKf2Qw3pasNN",
  "key41": "2MkPKJDf3KRPXY1j5MccV9mSLDF66DvM4Qp4Ni5F7C7Ey3jAArnmFo8uhfK4UfpTWJgH65CWf9PPJDLn2JFppMts",
  "key42": "419QMzwppncEmGxmSBchQxt1GXXM557p7jQJa5LxJSyc5WZVb75qsEaP3zpUREccfvpR3R2WMMenUAQboAT9hqBK",
  "key43": "4375Kz6Zmc3r5N5N5BF2348FCGWKpiVsg7EjnzqM3UTgnPp34oqrfrv6DWw9huydncctg8LYxRZs8L7wczb1EJyw"
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
