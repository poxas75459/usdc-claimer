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
    "4u5fjgDvX79BZLvL9o3yhS6ZBxuxp3mfP6pu67w6ELWzwi7yQTsNCTWUDZUUYecyMMtzwNzLNPqj1JyJhvAsKJkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kmrTUo3Q7jUkMejRanbGThBdgpLtnKdnVUWSGQnjnyss2f96HG5spXqYkHVmkAqgjkaQwna4m4oEaooBHgc9ig",
  "key1": "F3rybpn6Dyt9r19C7RFotbB7efHUUNMouoa1hcFT8kvQJFZ4A1rkK9Gr3s2hJu59o2xNGXA1yougBKgeMJDJAS5",
  "key2": "62sgNCYyX5Yv181LF1xj7DaoPwxEtuYDGvgHF7HTNpYdRhziBLDcSfATRa6Dx5Uxha81KA6Kkqb7joKjWRgzFYH2",
  "key3": "sxiCiM6LCMVq5hiDLkS9d29ijyzcx4YqdqRE1zzVF36PcqmTaabzNNEzPhpYMcfwBqaULLZDpsm5RQB23yqjaCJ",
  "key4": "JkSPV5hbtDAQwbV41zBz9RWZ822p6ktYPoxSuwfTRH5AGV2b49UnZu5C67n6B3qLqChoKpmsHoMEaPkiwhyvBfq",
  "key5": "2PyFh9ZgMA1pS8QDUFa6wUgdJQetPnBJisGMB4oUtTeYj3HRi8ZoL6EiVFyHpRj7ZgZYfbH8yUJxL1nq4eQv7eWY",
  "key6": "2kkzPtptz2Bc6QzgWGczuUSUgtu5NoL9kBFCAi2mvgBbiPrAZWGVMw9cJbLaC1bRF4wLJicLv73B5sZrFMbqtDfs",
  "key7": "4GPhuTzk2SFCaruN3PT9GDYqX4VHURge8q28U6YFwydxiF2oEu2aGZQqZJAZZPZ8KYxujuopPgKjWwz49gko25C",
  "key8": "5ghyHdvGMV8Yc3vLiStXRFYciuLvu6zue5EKbFSkEoB5ixndRzbCquLfc1aenujwu3HCV8KopuD48iG4EZdfVz6M",
  "key9": "3LouUoe4tyhBE3FSHeCKwYNCtbdpqzMZYddyL9ZCpM9nhGUQzLCGn1S8h7PnHrqN6H4GoncNXctLT94YLNMyYtvH",
  "key10": "5yAFdcr56ADQzg9nejw4gyDQK2N1ZBpARETGEntvdg3s1e6G6tCJZechtE72CMQKXL2BXcgJaaVBctgN8SshT7qF",
  "key11": "3bCs5M5GGUbu91sjMxSwtnCqKd69MMnLSapLmuw5dLfAMG7YKhiBHzvWHRBtjQjbqST2AhAv1wuBB6p4yZV2dAj1",
  "key12": "3UrSgf126j9nsqD63qXweEujRyh7XMgZYFqJGwbFrxAL4YpeAtiWybbVsyV4mBQMSRQ6ATcc1ALBP5GvrT7SaA6A",
  "key13": "47bNaTR4vS1C4UJpCtei1H2MHkjk8fvJBL5Xt7XhnsMGGGsmqfZvk4icYgpq51Chtr1qqc3wNQDBTAuWyYkQLeEd",
  "key14": "mAZHikME6VwBVM14CH98tpavmfBpkoswUZQ5dRs8cK1Nf9FY76DKhpd71tTF4hCkTWboniYxxjxEhivfCT4anin",
  "key15": "2CnADZoqViosHgWNCfQSF37thEuZ5Krat31NrunaaQxWDqwjCZCh5VWBpWpTqzJvjkzER6vtBWfwtrkLHyDtAqKg",
  "key16": "66dJrYycGBQsEa1FmtQAoSBtgEkQj26Aouo7Tip4idsecgxufqGJ1JZXyveCG6ZhCdjqnUsCTq9hwvDdSj3QxAez",
  "key17": "4yQfXUvupqUeNTdbyXhSi6JugTYkeYme6Rj8X8sENvPtbsLosmqwbE8BkTV5TxKD496kxfX6FKRQxFuU3ACW7dyX",
  "key18": "26ugCHC22vnBGSXvBwqat5J8cqrSQjapeGt8i3LGKckHbuCxfr56CckyHkDJQ6n71bQJnqWzNor7TZpcqcGpHB65",
  "key19": "36bZ1dQNGe3zziDvUfzAEsBs1zL6XoHZWFSYccN57UvWYBSqJnVRfwM2kA2MNBqdVES8B148snLDLczLCQeUoSaz",
  "key20": "3hQzn8wKotvm6LmdeYbbfWinHE2n5UVKF5MEGEBykHjncvHWNmQmZXitzrx5QDva89x88KxjKE1n9TvwNE1HynKQ",
  "key21": "KS1pG639vaRmxZu1qiAjzGJBDKgb7cfADQYve57FVxKuDeBZ73TTp218ujUJsfQJZ6QLJRo28MqakWVB5ZnkSUv",
  "key22": "5tgWCQWbcHAQN3xuEHetjqJxjJni9rWgqkeHtgM4SYtwAV4thVrPyANDxmxDK5Hm2kgbDVciLCnejwGy7Qa4oRag",
  "key23": "4rmQKnkGxqJLRz75ytZoZkMTLg2MszaUxBZeh2vaPs4igKRRw8awi9GsqLuugxR47tfhP4XViVawWbrXBotHHwBm",
  "key24": "492NpRgK9p7ZUh7Mi1JtULgjZDDvS7dhdbRhRt95qRaopbwsAaxbXQB7ahBG6BG2AFhX2vnmcydTNyfh25uYnXo5",
  "key25": "2bWSmYj3cCpQWPfhNHgU83P6gqig4PPr22LDvhRiwjH5HPQ6H8v3EQZVk4xB29GVN3cuE5b3ZYA1EmCiSWBj3S1V",
  "key26": "4hYQsHmfFVRgnv9MR7F55ah2CuRVMcswZUqWZLbc8FRMSe3dZL3gvJajeTnWe2RzuxqCq7KkCywL7Qf5dMRgNY3q",
  "key27": "3gppnbQ5iwFM2zq37QKG6gFLSeNXDUm46EtQW1qqyTr1ZBEM3yuqTq4BGu56RoGHk7YTyMy9b2uLLArB5fsHRPQw",
  "key28": "2tmMzJx8LDJUARec6kngUNMiPcgcQPHgwthuDwVd5Jsf31tb2oF7bxzFSjhar64SHbM1mzmxcRbRZAx1hYABJT5",
  "key29": "5KzfWMM9861x5gz5j7qBA826cevYXXqjHdsBauNSJwzTm8pwqrUTybpfBRcN8KGyTRALHaxTvqqDtvTSrr4Wzpe6",
  "key30": "4VV8hU8jimRdZQk6McwyWe9jVkpLdH1igvCTNcGrC9SNdxMi8PYPy1Ggzux4hgr3ArdAUkJ2SPNegXVPctunPz22",
  "key31": "Jb9FBrsxzRhrasPR1YXSf2bNiC9pPZJAQA9H1JUXxJf39shfvigUqkWAdezcN3pDpeXSseCH9L4iifB4C7xJ7Kg",
  "key32": "66VjtjSWZQiRaNzFSLUMMsieMWQE7hMnqYyMJzCibXJXoTCfHUhS4aUiob3sbUDTYWgtSLjzcvDp3uYr3wA8ZQFc",
  "key33": "4VhSziEqPnQ63RfPSsF4UGUNE8SCtqxyfDvMZwkPhJtMfRyA2cmnJK9RyNzaRqbn5eaxER9aBKUFx8Dst6DqSrYB",
  "key34": "4n7gPVpekkzMRAgRi5CA1ZfmBATYFYctVruqjyTiU2D8eQvq8FX9SgWWei2g3X1uJLBoPQRvig4cXz5kL2ufvA27",
  "key35": "5yZJxL8vPeFcq4Ua2onReqMKRnTRtvPpsW75pqxoH15YLmDDCh7q3Usg3XRJY5zw8z3V7VNWZk7QDRWD4s27nSeW",
  "key36": "5AF7bZqQ6A2gEBta3PESh2BEakbrB1PGBGBbo21M4p8DFvYzEDrXZVagj9iSPapNAagGqCXDCKoChbcMgqnQP3Ug",
  "key37": "4AB68o9FUcDkJ8ojrbDSUv2yGaauutEbuX147JcqoQJ6jBT6rDeMKejQLA8E7EyNb764fp3VCmNWP4VZV6cFY845",
  "key38": "d1dNfhbFnVAvcVgiysiR27ELKDaXLjVqkyvwQBMvrAf7s4V3QBmvKEe6Y11UEuSy6WCvWmmfdT1USV6v7t2u6pd",
  "key39": "3h5QtHcDqL3PEHQHoDaLKtWeesyEhU9UykW8Pj6DvMKXyGfYzotjmbYmyXqGtxS5uip17bXYNoCzEg8D4JLdV5aE",
  "key40": "2BHZ2wj8eG9hwGRusGxSgeVyM8aXMCztwqdBs51ntDEmtw9BM2qzDRKpZmwwX9nZ8UV4BHRQ9DG2195DMxwkRWY3",
  "key41": "5fazTxxjr7oUhqGzpugiVeYn4xsebcYrtgWdPevgshezVB7Tc75GXg7vpKVVxH79BnC9vQEbD2jLpPJzeMH68tyM",
  "key42": "FoLtLQxLjScbU7NTtc1S7g8fnXoDYTrtGfDSEb215sUKo3YRWrpocoEJZZDtSBPq9JgS9hbp2nxQg1hyvWMxiBt",
  "key43": "5o33SdfHomS4jTf7aprpUSq1dTQpK6Z7WZUyCLxbDZWAmvTYvDKTaGfWWdcD9maVuHqAjgTx6J8xVoWaruD48eK6",
  "key44": "uPqBNRw5wboHAQSZNzWkJ9cApjg9NRxiwBz3VYUXC2v7ctXjjwJL464HL33hNx2efu5kwiLJJdHJsDUDKi3MV8a",
  "key45": "5KZuAkmE4Kvs5Rp4NGVbPxG7RasjVWi9ACJ4UFtGq6kPMn7MAP7M5LTCKnUZTseaVShsr5S8kWJmf61yGXEGLm9b",
  "key46": "5YKaT7YHWgPe4KaW5QnQuLTprykMRNPaBCWrnmQTSSr11Y2vaC6LEXawX8hRDB6ndsBs3Hv78uaJsQ49QbvaRxXK",
  "key47": "3ixxgdoCbK1fTgkMfs21xHrFk7rVqSTywh8D1fVhXXrgv9DvzEvdAmTtT9bFVh9fR5i9TjQpuSPvVq6EPPkQKbTN",
  "key48": "5v3GUjqWT6cHyVf8rpWVk9dM1FMPCbnbBpqvcZPPszdessvHn9kAsEswDVCs3Hgyz7ae3TfbDcEmhwUfVR5JxkcK",
  "key49": "31hybdYLDLDVDRGZNpGJvF351neqrYnhDVEkvRzNXN1nRFHkiEu2fPifXSUnpzPoBb8hbL5zxVsjPFEZjRuiU2tw"
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
