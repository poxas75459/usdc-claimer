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
    "4LTA7HzRnB8Ku3L4w45yKUGSsddTEb938JxMGCdhnPXSDGS7SFYpvG6nL8qCgMGcf9dkEGLpGvkG96n1yFaoSFGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fg7N1EcfkHKTnAeCHoFHpW4TCxTrmxCGAqS3C7WBfZmFC46rEyxs5bgALASXztVXz4sdg7cd1iGfBKQRyDimcBK",
  "key1": "5Gf3tegyYTaJKf81KEQvKvw8qXdsCqDAs2Fr7bdaJNAw3CRNoxU9oY5RHQFy1TYnBELLpJW8XaukVx1Xa8zHtdxu",
  "key2": "2WAxeMD7bH5YsscxA2iMw18uuy6kZpAwDoRfDjVpKQXNLiUQb2oLRPhhk6D3iKqxqvGUypAyxEQxFCgDRjeiZM5r",
  "key3": "2RmCMNoJUcFfVjpKnsJLg15aLdyFdTo3Wdd5DuUJP4Ssj1jqwecctUbmUwgApT3brEXZAApgLeNjuSkg8DCT3z45",
  "key4": "2ybe44HMVR8RMDkmHxdj7f3DU4MN8cESzd3dhNnrZTEXGg92mkBk8XVHejWckhkZ9Ri5nGCUBdT3AqggYChhaJZN",
  "key5": "4PBE631EA7XfbEMFip7uBwjwo3xaNQYb37BvjF3SCUiZLPvxLTfpZtqEgp6ABkgfUD93A6uNWSBzsBgk6u8i5Tor",
  "key6": "5La6TZg2JJW7L8A3Uf9cu98U5fT9ANg3TVHs8KTQkN6gKvAJB3GzpLQBCFK5H5KQMr4XDJ11rgCrA6f2cFSrAUGu",
  "key7": "469Ypt2LaGSWCWYEJB9DhNjz6JNyaahRz26gxJE66VXFZTiMXeESM7iycxCSKkQpv1eN3SAzLkSEAD5q6JeEPiWC",
  "key8": "3ccqvN2tpx5nX7YJu3bYivorKhgTgB1JXLt4qLoTUq7sDP7ebePhNw671roNM4maKqAa5jXiTSWfpHeQj8fmVCmG",
  "key9": "3H4RSmUGWhRr4BfmAKTDiigzNJmK66hVCLkk5ZH6Sj3LEV87TcxAza7aD9XrG1dC1DWoyyokEWHf7idrkeM6Huyn",
  "key10": "2hqKHjrc8dY3tVvnnwxowR1KgcX4AifKNak477sLhbM7QvdWfe3erVW4qaMoPf235RADHHRDsu4ar17ynjy7xNYF",
  "key11": "tLX8V2bH3zf3ucWW5QnGwiEjkrwyvNR5TN81jdLktTJjF5K9KTZgouKzKxu99gNRa8C7RVWTWJifnm7k3R8kcFx",
  "key12": "hAvnVtyMtGc3u6FyjRsa88xgbiCknTYofP1i86oRYciSy4C2tojpu4aqJsveyyauVAGo5VzUvGTtshJdZF9H8Np",
  "key13": "qyM9yYJejNZvodA4PBVHRJknjUCwbzTevr8VH1pYEMecry7VohvSpTCPRbYTCW2JJP89Zemg2j8Do5xfqzrX1Tw",
  "key14": "27G5h9oQuWwuc7KLSWmBxFoeYZQAee1tFiEL3WXDEViuzgpffQ1CazrbKjxygKc272Z3BT2LpdrNb7itpmZa9ont",
  "key15": "qoVNT3Hss4N6XzuZQRGkgQeqSezoDN5YMyFHNyT4AtfMbrdp4HnRm23radzMBhgszWuYKW353UkSkP8ZTSdak95",
  "key16": "3DH2iGhLY1Jc4SBsj1TocMRr2SzBNw2h7FYtpdqELmC71Q9ZHS9GoCPcxNk29Sm6XfRfWw4vc6YWuBk5QKPtDYD",
  "key17": "5hkwVGWo1dwMqx1HxdH68GMh3Xyx2RdbD8ChSAp2X7xBY8E5cos7brQMr5FNvoFk9niTxXwyBeXpZZFcYoXSuEcA",
  "key18": "3jZyfgT85KfxPRLzpdjXcgEsNsQbHvrczRcus4kPAFVq66r6vuVM9dGkTpP3MdAHVAN4osr5vgZVXUHXW29Sdfhu",
  "key19": "5W9DYtfrhnUZruMoXm9ZCPgijpxTq3nZVyyTjUHmrP3PUHco1pPS1aLZB7rK8RPCyPA1AbL1ZUij4HfNivNRy9eY",
  "key20": "56nMcrTjKF3fu3EKcW2kJqT6Qh1c3MupfXbmK2ft4zKzt6mEe4b3HmWqq2Wqb3c551VH2vmZoYCgKqnYWrUtMkfn",
  "key21": "24SYFkGJV1JUgp44a8kXd1aNzYiCjgKN69VXcpMvJWoAKkYvq6G6U4tt7D8NstDTFf4ZNwjEkbgy5z729Ad9mW6W",
  "key22": "4yYefnGeNE8kg7wv9VWusrEx8U71ULyMb9CCU9szXFVuaiLKKw4z4NbQBbkJga5JgJ8WF6bGhac7GYDpCCPsmeH6",
  "key23": "4AG3SscP8KWjR3FiUey294pkcMsmWhUcKAHJNjHnhi4AR51RuCQKjLPFdqcwwzkLoCcbv2A12t4bttKyd9o54L4r",
  "key24": "4fH9PmPFZpvunnG4sJts9u1Pnxv35aYaha9DSwfCzvMyvmbJxgMuuvzfxFcJdP7gHSWr9E85zHCzRkCBko9r2mAM",
  "key25": "XZanjEmJUggdr1kK1r1ggz6MQ3VXYATP7XBmyyyPUmPksLuZ5BYdynHLearbz2LhK1faity6uREX3rBd8fmYtgL",
  "key26": "35EQNeMqoF9WNCPH1rdbwgJh2KeHS265ZML8eSdNyWa4u7aMNWQTmueLtiDiXsskzHcygF2ENfMQY5X3wJtETC1G",
  "key27": "358YvKdqxN5LUxtNNcdFJGdqKE7CADHYpJu439Gqxx3vPwcYruUbxKgV1fWw4TGaG92WQBZV95iySjWCPGXBELxx",
  "key28": "4nSd8hsPVybg2yL3qzdxRDpes78eqP5YLeyn4EGTk6v1GKN8pWqTnofQM8DwTdquNDeNmb7WgkYBgzzaJAZ981jZ",
  "key29": "5n3a4eGK2Skb7jM3jBhXg1hcyvDYyTrDyhtwsNb1NCPJ3NR9TBkPyopqpKBsc4vkTHZcB4RdFjXcukhUa24PaeWY",
  "key30": "5ambT6eks2d8QcHe9acjMpJXYytU6XCDvVLYKNMCkQn3XwLxqdqfFThinC3t3SJSaoDkfzUyNHE6KJh4gpcvdTUY",
  "key31": "3JAN8nbB8odyzYQPyNUhxDjCBnUaFboUDJa6kufmoysLiDCH65DqdtD78ECdph8i3ZURcFb6Ts8ssP7eTQKFt2dK",
  "key32": "2jHesrmXngsjhMByuTSzQvg3SpfqPmapG5bwegSJgRUJEHWCjfWEp5daek3tzGX2P4EWKmNav1mNefvbFyvn75iJ",
  "key33": "45AQUFSgwZ9Uspmj93nuiieDu4KSKii8fUwGL4YBiVbKnPyrgQhBMEQrzejBCxwXQw3GPLVqZZq6WsATMgHki1hm",
  "key34": "aJUHBXLz8cdoRa5AN9ksS2NRrxwbfpqfXFDAk3SRUsjmK5oa2Vmo73vtwuz2NUpJBhL4bhattbZi2xxbjFKV2Mq",
  "key35": "hMSKqJgrxrCBZ16yc4ToBGKLZtsjokrSvvDxrLC69WnbbHihcVrXW28FfFTuvkcP9s5tTzhxCPRrSFxFYfgx4GP",
  "key36": "aMgZufNgf6wRh4yAaKoKSnRbXkpDNRAVaQ7iJ586smQzZngVFwv7VLXShZnmcFYRLMVRXLHwFAThpWEnV7jGA4r",
  "key37": "54vi46gmkZxBqKZXpusbkYPqd7B1tqn5wzH2d7aKKEXcprJYfm5jKyhWmpgMti5opRvzNHw6Q5HcnvBtjx4Frea3",
  "key38": "EyRwQabZd1pyyf3ANcakb1VNZpXdyrH9yB32EeSDBySnhubtfNf354KrGUYXTqo4zUHNBN1XqVXw8EtUZpL33j1",
  "key39": "4qWou3Q2sBLi56KZAP3dXwJk4MnGLBwGxRrw9Qtbq4Ny7hc8k65VNKxqNXBiN1AEzCYy7ZbCCbMbfe6Zh3TASmaz",
  "key40": "2Ek9dRVb3QmWEYEwbUmPx4QUNF8M9cNjKXNzqVPnPZu3gDsX71DehQBXfH4gXy19ygb1CmYBYmuCj5NTMoc1buoz",
  "key41": "3zNipZZypFM5UHuLw2nTR1vbeieG8kyZWLrQikPc6LnmaD4W2JgC7JDCMUPVKSMucEzxzqrw8WL5czD6sU1Hqqhu",
  "key42": "AEWZfkoNQC5s6iRG3e7xG5n5WdyXEfXnGgmar78z27cBWkfP74ZTZ65KUETkjbuzuFEFRSywgQJV56USSsak6Le",
  "key43": "4izcn96T4mMGY2YfiRQH648VkX1F4rTAVL1LfY45sWhs4Pp5LvtNkgcdAStuWNC9wu1avw7hyXNxyVVBhe9wtLpw",
  "key44": "44pgYupjc9he3jY27ZfFXFoEGzTuL6YGs1zn3aNV9cQ5Xt51sFnknMctNep95De1yrxkgEmVnr9mSwUSK8evAQTG",
  "key45": "31NQ14jBQqGVGWkrXrPY62H1LTuzjWatN24Finuu7nKKFVgC1sivD2aQ88tScnhq5wPo4Uqyzcdv92ngmvVv7L8K",
  "key46": "VWagMYgbNnsePEHH29oiN2P2ZEsMWXv8z7ZptCMfdtPdB9urnwUZuMxjZmDVgYxsAeLXDw4CkMzim4tyMm7VrYc",
  "key47": "qLw7QaHyE4oBvcVRDmyJKid7cxrRhX7gLVTx2w3DzY7Mq4Zn7AhUeVCZxf65pztUhydnuqU8AvZY7YWyspiEFiK",
  "key48": "3YfcZ58xqkCXuHqHdgXGWcRGcd7XSDEt6ia7H7cuMQhYipiDjeJcF7aAJY2YDcdYPxmtGk82GxvPckcjCvpGxgYC",
  "key49": "3DyWNRT1aGgrZfGbZh6BfBPy9ZaXnLAqitTBM8gRjyvwBhsvQrCZE1KSGMmq8jnn3EhKEecT5ov2CbCschzU5Be1"
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
