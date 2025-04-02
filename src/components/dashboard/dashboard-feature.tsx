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
    "CEQFeRsXpwFoYV3c9WRMBDdARBKczWYnE9XLc6eC9KELLcMnRsnKEmebEzoEENgFxSB3A5kaT7e7y3qTxyqSYdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tz1kaMPu56W5Ph6iW76fNjaK7CQSStGdE4xuBSArxkCcwQvkQU2F5KD42xA2wfK4E2rBbfz97hRBGwZFPYaQhPQ",
  "key1": "2DWLxGk3KdhZb4t2YbDxno6ZGxJ37StLxocFmHTFRjnMQ3scMzUshehAvGzQcWFQqrjSxhjfLMfH7wLwaciz6WiU",
  "key2": "bv93DsqEmrXVCQU5Nd29i52ndep1zydEKGzxQNGj2ThfmYoDEDL7eZ6NbNgNcYHaUZRSMJFoxRjuqP9suLNVHHX",
  "key3": "6vPaHQd9aLhj8jNeAn6HZgx3KvYcHLaKChFDchQifVf5UYNqkgAcXCwX87J1y7bFXM1NMAGJeYRjGAmByTAJx1Q",
  "key4": "4utCxGPD3xVP5xZuiPvBUxErxbaf6hFnXPiVd7yWFkSBbeoRXNYjsdChZAzuNVdqVgCgFsggqksc3eJ4KT1BLSb2",
  "key5": "5jTLL5DjRmZ6smNLztjyh9QFAcoDaty68tu7nANNKdA849TdmLP2y2figdm52eyfLFzK9i8FdSkXjcEBcSqa87Ba",
  "key6": "sJnQiwqdFyw7jykDQdrDhb9awJXmhL9ZqmizhCyKP2PurguEwVPX2AgQDS6C3Mt2w61gcyBgtNkHp4F86wQaLm1",
  "key7": "21BqwLBQUge3SbvULmFwwnCaZJKeTta9Pcyiftz8vQmhPV3nE4zgN7TAnRssmBwyfraMXMMLq86LHeLsRyAzpwcd",
  "key8": "2uaRm8yZ9H6vUJEPAgRDDtoR84squjZxPg9uveHi8CePqTB5VZfWVvi9kHzFJCMNsMgHGbXsFnVuVVBQCPdvQtrJ",
  "key9": "2JXvbbVSMALYhVEiGTB5J2aXCeTKA8wzE7SEKZNVmgnkwhRQ1NwWZ4GfXRKmnVNZwGaLWYqTUmb7BVq2jAMXXSjg",
  "key10": "2ZcxMphtuD4HkDZ2a3MHR4B2N6uWFtXdnYRs9sqC3JovfC1bZFdEJFMYbezynK3ZtAbiwWivDSfSk7eVTCJ4auya",
  "key11": "63cYcTAgiPG1hKk4w2nwTRoN39WiSiQkjYDuNBsKqXXQi2wWcunv4A3ALRV5rhLbycjpgPPSTNCF74XvkqpLP8s",
  "key12": "52JQQdDfWWn9vSi6MQuFKvMLYYPgSCrxNyxye5QrGhHkaMaSESsXPturGgivCBxxcEuVVZGTWcqag8BUuCo8EuFh",
  "key13": "3xNhc7N4oLR2yexT4AwT21idvSNc3MHrVhcaitkwTfT9Y8hynM1xZbtBRmtBmQojJzpZAQpLnVGydSMkSP44yo6S",
  "key14": "4BVTxgjTJ7ziANNEyUM5Kh9EoM35paQSPKr1zQXwqiNkovgDhvYsSMrv6BE35b289Uk3Sxnp7FDTc3kNw7fSJRwX",
  "key15": "Td3iaeT5DMGwLybitoVeTiBbJWWnZETozCw3CXBSStutETTcJncBDa7xpUTYiRvhN69CZvkwws8cNA8ud2tvqTu",
  "key16": "5r35W88xn6hmNgvKiG1xKvXnpvMLU2NNFgUuvcr4y5WqiAu5PvKnQNG4Jz6S3ZLoUhbhxeknKJu1ArwTmiM3Kwgh",
  "key17": "34E8uUuSS1qhmhedCtpRvqgPNi3HeQSzTu2EoVRDH8xckFAkR9Ne31KuqSindmfyygdVpwE3W3hiKudG4cuo4Xu4",
  "key18": "4P1gCdRJR49dLMNXaFfFosy9q96txxLRDkL8XbY6DWxCNA1WokdeN9tbZKpXfjgy91cvgs2tNekMYB2qiRctPMwA",
  "key19": "3TTMCsK6TaUi8Zmi7fZRNqQ9KG3i364ArbsEgkb9v4tCoqctqYcyQeUqnRFeHFKj6VxjdjGBGrxH42wjH41mGKed",
  "key20": "33PZy4DKfueEf1PS8iVaMivYiJVw3x2qBH3PzrtH4rVwJbnacUjQ8gKZBVJRxjeBSLke7w1YSTkgd2zje5BxjQK1",
  "key21": "5BLBFNQFhpEJPpWXCjyutsuWWEWXH7jgGJi5UVNyRGKyFEXt96EsAv11TmLWcUSuF5gz9vPQCQ6L6FaopA7H636q",
  "key22": "2pWse9BrqFuwP3efxTNp8dk29TGy1kf4GgUjYJu8cDcAYhHNufXVdkigeYSUkJSaRhi7Co6e3FHzoUm7idv17Rhe",
  "key23": "4W9JLmXo3ZJDdeNsEoAiFZWt2YjdFVJkD26XugjRcLgZmvbsgQzvvtZzCvpKT6csf71R8FLZCd8vw2T6SQU9nMfR",
  "key24": "2ei2xE9DNbP4LVokCC5Ko8ubJ2zWCaVH3ryhFYZ1DV4yj65Hv4sajeF66XKsQJs2M4adfogVvHWEseGPvUNWum6i",
  "key25": "4u92fr122FrbZTx7xS8e9v8bvs3z6Qm1UDJmbrmcH8AjzL9vfSJ4kmr84k29YSoeSgKc4bWrV72mYiosQG2xJVLg",
  "key26": "3j59e1eAaSsRDvLhYiXH3iLtKz4yYqNcava5WoMBqJt8hRefqaUaipujNZENZvV3giHERjujqxpde4PbrsEDHauE",
  "key27": "3t7tVvoVqAVEygwqvEYJ68ZuFJUnhdPog9HK2Kcj4jVF83qctkXkPLvdhtLB8bFVDj3ftVfbD5qThp6RvsMnxRuJ",
  "key28": "pEYusrrZdnYZtMDBi8vFvBurbGpaS6YFQEQpom2hxhGEWppcoMqSAnFupKrneLGMm1nGmb23zBYEB5sUBQX8SfR",
  "key29": "45AJrAM5B9AWA9vM4er8k7v41GwCLqcWwtVBSZ2SBC1izxJH9oq56eRh9HnMuAiwb5ZqnuVD6JYxieDeMAj7mZrx",
  "key30": "9EqfdP15eVt4AWfJZMiBLkjY1y6YqMuehBePv2XDVdgAukBamjbXzrohKneBNGktt6dEKJ8knJMorvhWaGgCiDg",
  "key31": "62QMwp1QyKErGruCDgGhqhHtuvFfRw8FCcoYwYaWdovEy4iMMZazpjKVvhSaf5MWCYVtRouAQpuzm1KtgPdAmNU9",
  "key32": "AiDDV3sNBmN9pA4UfdnAbSenLntkkp8aagQZHDrWh2gwJo5Da3gApZJjG1QSNDYHaoRAqdLaVJwTmLcfVddNY9r",
  "key33": "28Nxytv6yW2tVHoK2gQeJWhs3o9cKTsKuEEEPPmzBfq3miZ6M71uzKQWbivyoTpH7iPkDqJQaaudSwct89GusHj4",
  "key34": "3vbLANvtd1ToydUWKUuNHciTf7c9fxCtCqCT5ZS9niBcm6456Jdz3grLEDuzf6Zwe4rVECCVXndztBM39g7xG9Eu",
  "key35": "2zZ5P83H8extNeR2rdoTTnx9q1Cr71e8U6QX6GVifdopE2hPfBPi469XCtFGhhhptqXfKaDxs2eey5k2jyRUq4ar",
  "key36": "5rL3e1ewyMGQLoMjDj7MjpisiwR5ijLLe4aW3GSakr3Ca3tKYXA7CSuL45J7sQ9men85pYaWcrE3x1oPVcRgKSHn",
  "key37": "59M5JwjHxfCWgvpMu6C4P19MvNGJytHamXkq7u7QveQEYntwEncZQNEJoc5dnuPsjTV2QZrdVTpAGfDBRXBSXuGb",
  "key38": "3Fxz5vCAcMEsBiLxKiNARS4eUJ8guGFhVXRiMmKNR46R9cc7pFR7r24gzvecUwYnrnkCk2NkkwHQDrtHBvSWnSGd",
  "key39": "33PJxuqMNjjGPqd81AJmjN7dxGEywxU9U6tFxVL9tWy8nDDCAy3nXNeBAtZwWva9LaqvRYfUvYw27EY5eBLmC8sD",
  "key40": "3ejTdzvvmrePCanEAFpbUCzNmrEHrKMTBZkEnmNKkAa8a9sy2gygUX2mVPkRAY3jenSZ3ZXZwrMftz7TYKtecmNJ",
  "key41": "427uEKSPnrRyqqCJyfEXeffyigFsUDR4QGzZ78EtARgkwDSqAGezHwUjS2EAvJFKWNtRTX893GdApzrPJZr56BuE",
  "key42": "52Zue7DdYDp4MFpBn5PejHZkDzK4Pmde1Uhtd3Adxx6JR8tcKBqWMB2PuYoZA57yLcdM3neG1bTYwNJYyFkCSwnz",
  "key43": "2iH87CAB4owjAFWTRHy3htjKbKx6wn11jnsrprEHb1Qvhk6E8thHd2muaE19ALUnSRqTmMuNHTn7rziomau19KL3",
  "key44": "2qhcWKMFJud64DqDkwiqeCWMAXDYVohseczoJBjXd8434APvuBEp7GSs84UVxUkGjbVKiU18wcJD8m2Jyy8E26Fs",
  "key45": "xSS26XkfChjsXHXMRc6eY9HrUmDcETBtYA6voJKuHftWDuHswfSyaT4DQgefpwvJiwe4tikNMCwBHXKB7MpiU1S",
  "key46": "4C7V6prcCPp3PdkeZk4MJRJDKJAY1JpFs1bvg5DYCcVPkjWBtyshkRoV9FL4Hb6vSagqwhfgzXrTzkfXr8DTS6kJ",
  "key47": "5bxGJLK3GVWaGaTgcih1ujMECn3xUDvhi3qiTfjvoh56r2RVdedQWsZAer3AiXYsfAYQd9ZPst3DagLYyG6jz1Vf",
  "key48": "4sn2wX8RnyaUSSQMjiPLcHBRa3AZ8K2KRrbcQvycQgboVPBctLEHkgArdJUvUdS8frHuhWp5WAPkK1yAQ2NssHKn"
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
