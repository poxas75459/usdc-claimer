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
    "31BHL5sUbsqGyVncirWS79qs4memQsbrj22r5xAV28rwB387c7cC3cBqKF2UvKzCnFehrd1rUwCi2dtn5JGHsbnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhrGWeh9qGPqbGgdQ9JL5pnoKJzvHTSdVtexHXYyLJxYxVssZKGMDVBrpneLqLme4Uj9AGgXVmJPa8i9b6X3nG",
  "key1": "5kQ7yGe8G66g9ME8Nt3DmtcpBdEs4KSfCdAn8Fv9dtTzxShoYiwYm5XJC5QYrX8bsDC2NWCTRZUX5Vv2bbioCRgM",
  "key2": "5sumaF7pTjf7o5tJToYhXrmMwRWJBgc7L1ZcYSAEWkLhsNX4NEoHpaHbEoafBweHabbbyfnn7tMx5rq7VNTttazp",
  "key3": "3H3d9bMvJ5RV1B2cRwNyG6KVJfDefEWKMQjeFTeNoQKUoyx9NEyDJozwzZojtjWAMi7TiavwABL5oscAB9ULKHs3",
  "key4": "5877srg9P1J7fVCZBHzTKZX1yFUWnFcUELukpm4mx5jraB6MtPnquuK4oseTin5JV5UWL9MKyNZWNq7tLk5eMbye",
  "key5": "3zVFM9by2ZEzmxLSQnM5K8fegtpBjJbZogszmL5VKkN2Vn9H1PuvocfoxBXWUCyBUvfmkEn4CEzsDxWKxPwjLApJ",
  "key6": "44yyXJy6XGXGViMgKh2zwTTn8VhJRPsWm3jCwc5MJaZYUqgHsPYSXGDYo9uxVXEohXDGWxd1mPhL9TnrzK4TeiCG",
  "key7": "2tnxbcnm9UEZaqd1CG22DPzkRs7zMWTpVdmF6f9NAfCd3qBRNQKYAKY6rZa6XgL2uxGkRGh8dL23RNwLDa7iSuAF",
  "key8": "hvKDzopPbS9B2nSepsJSVcKqKeRSvM79MJs3XbgXxeUn2FuRLuQAoQAyH13KvdHmPQ2vNvRXKqoWbvipLDhyURb",
  "key9": "5krUMRruuWCUJXsTm1qBfGRKCg4VX1CPeNVch1yiRzf2FscdUvBTsUXcbiA12DpZPjxKC4ELrxM2HcxspuP2uioB",
  "key10": "3oX6rbXC9G7CsGkHNm2ULL7DFvzEyxM1q9R2Qotz8qDv9ur4dXb8br9h9sVj8ms2bKKBMuhxd7Wjx9oqU5YKytmS",
  "key11": "3UPwQs3PyhqcUCRuQTbnLFJCaeiqNHt5Es4oabYBkCuJeSgAPtjW1PPA7hxW4zWp3pu5T9BThsBDfxgcPcn9Ru13",
  "key12": "5nbTnRm9aXUWXVNa63N8t9BriTUVBPUaMiwpYam8a3iJaU2vERask1wnVKq5vjqUYt5ec3ymT1eC7d6nxHMG7ZsB",
  "key13": "62bmMZE19LXEXjNSiJK3KAL9SELVybgxgfnDiKFpPQVxRYL74Euery82qbRaypAGVwZdRnAknqxCYjj68ENLhUy2",
  "key14": "2gqVcFAZW5RXi16w77wRx1ZrVzbzM5Vnx7jfGRwkVkYyBDMVd6HqPWFSSfNKp9Hcwu2UZLNpoYiUkEaEYsfC64cL",
  "key15": "KdmNtM9PgPnt33fyDx5zrFaLevpkcGUx8DXNb1XnEpMdfU3eRbbmaXDd5U4W3gMsAW47Yw2wxBrxveXxiAMVW5n",
  "key16": "39Xz5KJeQEedf3ptbTzTsRUUJmo4CsceGBrSwqSXaEW4ZgNMLVbGaVJnovQYThmBeVunWJmDZGkhCMDn8u3iAVCN",
  "key17": "2LHLUp6UNvNUVsHyc1NJafoo2kkePwzsq3tVE1uNP7fEi3W73i8SNWfEvRhGvKeSMvEuoe4Fn8nabmjMvomEHUYA",
  "key18": "Fx5E7vYDTqMSZYiGeVM8fTF2A5YPLpxrvvaUdgqt1vnLnW9SACDx2cF75PV4BG9ccwCpwLSbpeZbuPioL37W85Y",
  "key19": "4Xz5uvL1MwpweFNgiJngjHrnksUq3diDC7DR2RR2dzTR6XHrfBEsgmrLahCRZb9Jozq3Dtgpfe6xihoocqrSNTPR",
  "key20": "4AXSHpmuXcFjetP3LCH3Dev3dZ7xYLku5oviiT6kof2EsjZHPyaXeP1BF7rTxBh6VURbJvjewmAtqwk78xvnMSa5",
  "key21": "5GjdzE8K8sWVdS18c775tDzoJw7JsPA1GsBEc4bXYQPPhAJRyiNpy1JgbHDnjtoYqsN3L8dWVxEwYneNqMtQjs5J",
  "key22": "5nk2nUD7CK4m2BS2w3P2L5CnC2EXhHxfFnQBQhuYEhstMkA4HQzrtjcVJJAvqEDuT97QsiWgp6EykmeeAuaEbEk5",
  "key23": "5sSmvzpYQhMkrnfT6TxVKLwro8psTiRPYQpmDMtCWzkV9Jic2LRYeNQe5A9k4mA6nDzCwnZWQhyRwRXV7c1XMmfY",
  "key24": "3Cm39EGr9wycJYhi5yoa9AtzZh6EGcxpoL7J9WPWF7BfKeVrUaCsoDvqHVM71YC62VcEUKKECTo4o8ZXPzUSesSc",
  "key25": "3TYkWjh2xmG6jRezFmVYSnCcLN7w5nreetqHNKx3ZuPag3URkBcLMptPR4oTmkBfDQH5hE5nWsBLT42ozENDnTht",
  "key26": "Ahym3t2MUStCtF1VJY4L2LdKRPfobDhvdYXZUcS1g4Ne5ue4ovGPxDCEoyjE2aWEGWiLLG6X3unPkviSfr1t14h",
  "key27": "kyMiq9K9nthro3dCJXp9H4qMpsFYnm4Robx1nGMv5zUNhaHczLjqTuqp2jQRXpWPRD1PJbAAbh2nVeBten36vGQ",
  "key28": "18VfTyqhCech6u4hv6mZrUeYWCRfdath8nuWqN2SrMqwiHzwrdDMuZvRF7DAtGpqCnUuNd2HHpXBRFT5HP6UfvV",
  "key29": "4twcFmrmkZxGK7CHFZhZ9KtQ4FVFPUqU9ogjcveoAfijZMLFyx4Sk9wu2fBdMNh1GEp3U3436HcDeH1E5FgowqRN",
  "key30": "AWijRHdVErkRrhSgTsZ7ZYe7687TuCK5HmeJcPr9faCj1u9XSNC38Qdp61fRjXQdDTVAkjVoF3fnFB7wLbJPPMX",
  "key31": "5BN5GXjii2Rmri3m1VKKc7ZkEcr7ubAs9wU6FqK3peeg8jAnwnLk1vp4gG9hSXAiH46FLxiqp1kqJGyf2nHB9ZkT",
  "key32": "2rmUCPGHcbxwxL8sxs8hDe1tyP6dkLkGkoucJcyhF2pTEVyjS3RTMMpBzmJrqub17qGGRhsRP6pXm7bQ6XW2vHf9",
  "key33": "2eivu56o2TBSA83jDiEbWN7R8u7psfwQL44S2rtkWwf92i8Bcb2NntsYgQWgkcxShnc66zNijwwsLFjz26WkUdyc",
  "key34": "5YANqMsK31DCb6YSozQsRGA8sqtzjGNg5QsVhSybZP7b7cjmUencrTfNeRVBiQG4HENMtfBrwAAmjFntVbqDgoAy",
  "key35": "5BKKStnK13QfcMxKBANN6LPus19Nz3oRERK1rkAUr9RcWRf7Uf4dzpTzNMfxEiKtoBTVFQUE38Fyw4QvULCjLJKE",
  "key36": "jtK6VfaFeqQyeeKDQuH6njDE7yRPhyFh23AjbfsAYmjtMXLxrMQMS3FHLst1EtHc6WqXaHotG3yybYf4HFxJDAX",
  "key37": "5EaDJsX8Jc1soVnzPTMKdn2Jf6aqv8tdMD76YhtkhCsvJWkoAyKB8zpoaePSDzaKiy8m3WCpwzYNsnFdjF4Q56fa",
  "key38": "25yrWagXXVLfP8gxrT6yEfv6pRyxoBtQaAy6ny41Hknhfs6bixCfLMCMJkgESrhoUxvsYB16oqy118BbUehZ1pjw",
  "key39": "2Cu4dQpZAJBedZxvQ9Tyt1hQS3jb4dJY9SrJxQ9uiFwxjPnahsSvcCBDCUXgvMbR8FPr4Ui3xqWw4H66tEjudAMs",
  "key40": "N7T3z9ytTbF9YXzmLKwfrSMe5DFJLGCfHhYfQuLmtSSTnqK28d6e5U1DoqXqXBxonEk2Hg411ig7ZazyxQ6sBz2"
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
