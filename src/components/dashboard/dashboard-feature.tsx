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
    "2jtUtkTnYRuCPFpUqb5nhzCQMcZXB9nRXgaai2bjyqAdLYLJJUmskBVP6mEz5R89AuP8dCagqtTAxuqvPqhhsejs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wgVaXPYwTLQg6aafXAMuWfvNWQ1H2Bv8ATLTkUbSpkY5DWYXK3cLma1i66kdvnoUDNvWVD6rrF7B3tMdm1rnWhd",
  "key1": "4aScNcQTU1vnc21wV383RyPurSWCC77CEfJ9uZs6d2t6w69UW2YjLUAnemHcMfborB49zDacKskyym4ehC7Kdsjz",
  "key2": "2wQLuwe9vNu4muFWNqBTxqQBNsDb8p6Nz7hwpVfGhUqQjwb4HP3brEoHL4swjEvtjw1kZXSAeK3M3maMSUDpqF6Z",
  "key3": "5sYniEoLLmrFcGQLJi6UarmqGQeSAoQdR6DLYY2XShJs6aqZY9dBUEnfxnTZY9xv5ErqcLquxmeA1S43EGAVaY9V",
  "key4": "22nAGsuQDtMqD3baZKJbaB49qR1JGK56Qnspk6TrUTrDtWVaMjA7U6SnsvMxhHAubT3dUkvwg5VWhBuE3aeBgSPj",
  "key5": "N4ChZKdHkqbv8BHmrDVteMQopWz2L7wjefTmFgPs4BMo88z6SRGsb3K9qdbns63Es1WGyL4NYvNXbPt9dUXGw1x",
  "key6": "2Q5smj3os5FTurNaKFVQtf2wZu1sSa9HQYHzN1CLEtK9Zjugbqs2tEfxbBkUgP4PxFQXqSurXS5DbvAjzhjh7C5e",
  "key7": "3bo8zDbgheyBhttEcDXDSsLmMppapoZoqgSGzNperf6TUDyoofdLdHAPdHoH2SiCVmKFkBCpgbxtt2csG6pHpAFy",
  "key8": "3BHXMWD42ozEfsZkTq94JGwxG57zFavYjepSdGetxrpsMTP2AoPh4nkKe3xzzuvbR7A9h1wQmVhGiBW4WTm9dNuw",
  "key9": "hYzn1jaXjFSyfE7DULoh5ZHfK5caKMvNqKT5kYzELS4EeTq7MhipW7DFPQUqAa35DwMoeeN7fLDm1dD5bpyhLsX",
  "key10": "5NHDGoUFH9EBzAh2qWvw6gK2oT99s9daMnQjbdJYeGEgoyC8pkKEmJkMqRc1nAXfFiefa7dVRC8yVDEeLGCfNjx1",
  "key11": "26hgnYWxtaeomEWdTBnQ6FAkgXUn1QzCdWSejos8K1es1NBaCNYmyY8setdWt1cs9ELbRA12JViWcnHfHevpmArK",
  "key12": "36SYjVUrFCg3pzrySLmXfs1v26jgTBpStdHwujGGEmpGnCEpKSV66KHvV2pHB28N4ixc5pPPsLS7ndqJRfXjw41h",
  "key13": "3sfYadp8Gm7o3k296Vdaci1ykQRbGVXzMpseM3KfRxVX2BJfU93Tvo4dbUJLnocKsCnBC2FHwLN5sjNXew6785Xu",
  "key14": "2tyzvvvQtRgk4nfkpC3QAEVxaHqyTvVkFJMsLfAQKQTio1CahwQhTd2B3stSiNBe9eWYKorMvu7k2sgpAxX6RRmw",
  "key15": "2BncRh1oJGrPw2FDgBRmx6K97BMBPW6wDGuKdRAQLqZrrpAiNnqtqRX9qZ2wFYkuNfKz3aoEHXLRvYvrtsNdjpfs",
  "key16": "4NopE9BCKxGZPzvXZgNkgn1A7sDZFFSm6pfGcWLJF1aqhqQZ6S9gkEA6TKcx8otZHaNFz9wbRdU2ks2AyqhGChYd",
  "key17": "5MZfFzRNPU3qqZC6aaYqZKZnzf1NsJ6NJ2Nihgn4Fne1RSnZZ4e5F8yCDA9mq43bSThzvpskowQWjwvThLBk4ctx",
  "key18": "3kR1dGdtHxkwFu5tsEuqSaBUCmjihPKA1egYeskA1AV5poWfaJXQEdVnSxhdUmP8TxihD5sbp7K93cjPZmMhaQ3",
  "key19": "5P5SC4FZoXexodorEc8gAPxB4HdV9vAojNGvBfM7n7FiDnt6UaptDHenZ8rgJRSqxforiBTYnVV2bcRpYCB5C9JJ",
  "key20": "5op8EcPx9qtN4wWsSYnqVQyfRV7o8tvF7Li7N3DvcqUwvgTpQsurjwTeTsmMtRGsLeNYAbGnkbpUe6Ltc69gyMCq",
  "key21": "3QviABBHBrbfzP3kakAL6VBchKf1q2VLB4xxnhqt9bryn5aTLqDNDK6ojhDc4Z6UHFeotVrgTy5KG9ymZpvm7qxL",
  "key22": "2b19n9yzJ3MShz5bP7QiJkeiGkZPRP1rFcF7faiQYtbbaSZYJnzsEoe46kprBBmmwqBhVKPJYJacKRgGZvdF8p7M",
  "key23": "5CpMQtkxBREZ3BXU9BXWCFysJrEigaJJXCCH9hwP7eAqh46Tu2zQfwEr7pMDs5c5fahbSLY2rVBvbus31NjCn36k",
  "key24": "2hfV1zEfkubmUy4ydiErdeVhadzvyEwT4HoVssYQzQkpSEZeQf67hwudWn7yERc1fCVaadJyevvmhJX4hx1DSgu",
  "key25": "5rVZbJUmUCLwzZifC19bRRUQfuqrWAbAw8PnfbxsifMaMBPg3ed9sCNX3CG3kDDhRt9nAf9v9NqovS7DYbre7DTq",
  "key26": "VMzcE39XN8JvAmFHnpWbrwTxMCQYDZbHgFoooDjPaD7FUbvHSdtp3hzKkgCF273ow4uzvCx55aSXpeg2NizxNBE",
  "key27": "5T5g2JRryCbRb8eix7MFSdK7Wnc8ReDJY7jf1yWKMV7niRV4TutN38ZeXuQZ7WLMtkykDThznEQjkCZDUSv7XkwN",
  "key28": "67pKRpdXeKW4HgwQ4m44dotmZFWknVoMJvX45CaBc4re5aD672d2KYCy6jMXh9EqYCijRPHs3bqQVMkosPHKRH2T",
  "key29": "4XLffMXM56G62fcN3mms4hMe13ppASF5rShi585naYrUWFDQwFt5MeobdLgMDrYvDk7de68QgdQ9byaSEWvqzQm2",
  "key30": "2nP6hvSY3smpkEwug7WEM7RebNbvEEx4KDrcdMRtzCsLG7E77QbZsHFxJH5EU7AHqzdUt7fPayQ7aBjNfTeGXuuZ",
  "key31": "65HX8u4Q1RUjVgLdTRQqaqRsdqmEzq3AEyn4T9FeGZsErpD6FdXPMDK5ZjwNEkJd2UAome8KAdSyDvndDYxjiYN7",
  "key32": "5SdzhFqjrJY7UZQCoAhLqmZHu6dchxV38MaHMZ3W8uDDjV4snBSLFDQBBHvmpjXzFSTQiqY7zX1Kumt7ydWiSCWT",
  "key33": "5FRRPS2w3pXTzbs1xvRYP8wZGXy9dWGXmvW5XJXvRdeDG7Wun5JbgPYDTv1VS7PaZ99cn2w1EWXomaFNHHSTkfbj",
  "key34": "3z3JyNEeAXb3ra8ac39EqjSF3jqH8wNUZbFrWnDazm4XY9Qx53D2QtLg2GJn5NDtw25sHzfxgimkLunMnNkDCtmm",
  "key35": "3Z6yhs52GvpAzu7hsREdJrR6Ky9uXhMh4UhTmXgb2APWLYkipNR92yDnXBKbrNVqzyzwUk89XXhLkdwg6hLoxfdC",
  "key36": "32z2uXyvD3W1m5AJPHhBvPFE9HMo3H4pnUAzekx6vX8wGT3cktzGUzV9udWocstaty2DtadmbiM8pC5u4WLdewjz",
  "key37": "3gapxdaR7HhYsPVgRyYkBtreitvLLmLPa8BpcR8AUumwnfmfhyj71QoNNYLHVdASh6Xai85j3RNhps7XsZupXLAU",
  "key38": "3eiJhJ56tTh2bNDchwadPbTrB9hMCyXwzU9UjhAfecwtV9LjTf6rkwjAcBP4guiKGqDGwt6XPBhwGh78GDD4shx5",
  "key39": "2wb6mmiBko511KiDrT5qHMhiKwcJcBW2voMv9jSpU6xopUbWZEoFV5HDEtbSYMw2mFE3LC4kmUPCLxA6LfMM1jno",
  "key40": "ZXLABXbtYt7yVi1344DsbQJp5cZbMua9ZLRzBgiSArz1YpiGMAKXCwHF2VfV52zSz3GGQjFSVNpRFABbrRpgy53",
  "key41": "3EE2HqUkPBGHqxJGwB33XW1VUNDEWjxDPU113FYmPeNnCsWhz7atfBNL3CuBBwgyhYW7Zx5UFS1KyAKtioyJ3yc4",
  "key42": "48XY6WMnEXo1hMtFWvLBattek3VXajZXvZ2agb2PKarsGatt58Ub8XqCT8Qk61zS6XfoB1sbhEnPKbodidgE1thm",
  "key43": "3SjxAnzFV5LzJtw7hRm6b2h5zmR31GnmVq16NgoRC8NWd8Y8vqQuzhMGckyYjsKv4vK7wGogNHB7FKaF8bvkQ6k2",
  "key44": "3g2ZYMsXJN6iP6h6qYwLvLbJEoi148MbXoZehrfgUBMNsL9g7fTQHVhP4VyRtPUC4x9yKNA65PtpujquaCX4YyU7",
  "key45": "3jYBKJbaYV6Fwb5DVnS7tDf6oTRaojL9JJcmfXXBBZbMujUqGtPpSLUQy6Sk5nXw5iCH1u4XZPUNSQnzLFGMX3MJ",
  "key46": "5HdabYn355grxr6W61d7GNfKg1AxDrRbLAVP4jZXmTwikbwcaQ1uyLxi2pUwv3nY2quyHEkb7meeW7gnqtJzMsP8",
  "key47": "5UHFkZUMiGuJNDKb2NrCgEZ9s62zk4mrozrnKshDb3mBHAMcckASVfvjYQzbvkJRjf2tVg1tSbS8JiNj6NkVzxsh",
  "key48": "2TjXbpcZ5TvQaRPn72VYufzXjycH9BEhWYWxHdyW9P5nE8Dq5b8s2bWtiBBwXyf7HFw1KFWuVU59ctvjxX4BGrWF",
  "key49": "EB15MPBbwrYnCJz9gsqfQ4i1beWuz2Yf4no2deYLprL2N7X4fkiVY9jcmpZpkbreCb2PDtx1HtRu9v9ufHBBQpn"
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
