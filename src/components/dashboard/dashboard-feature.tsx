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
    "4KKoqrUgAGtHDRYBPSMrb3HMtsVrD8USDfWocGR7WUJNq3dVsqyEZERHtdHppraeqffaNjeEvLzYvsXVs1kdBAif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaSyGKxi9AcuQMYaFQYVWV3n4TdCu2NVyGgG2eHy2emVesM6vs4SceXZBzd5rUT95pkWywJft3gghqk13HyVJiv",
  "key1": "3ohrCUzz8FKeH6MbievjCbHoQkie1C15JueJMuQoWFLae6uxJhFZbhqEF2f3SgQRaZ5zP3pm9JXNuSMxz64ovGV",
  "key2": "9j6jTNh8vChQa45NmMqfTTDbbMe8GLz8YzbBhW3zUh9FXn2j2BxctJ1toPGgzHQRS2Sm18a6yQkZkwt3GrsuJ6K",
  "key3": "yRLNYkmdQ8oBDBNRTTPxiDQMbJpGNC3McV1FSBcbwd3DXSUdHvumGBcwAYVGk38c3g3dZhxcefXyd7C5u3ihLnb",
  "key4": "4U5AxqT4qgbk6EM29HdS94pLM55MebC3Yx369SkCs7dhFbNt1AK3XHoiBGtMyJ6bZauPiWszyZbWZcNnHENGjSq9",
  "key5": "5Lyo9oSqYoP7v1CUhrnoPLWr3uoEdngkcq81MHCDPboCY4Dr61N3N6vjnRLKHVrYBpnPaekUz5zS6XqfbAoW8GtM",
  "key6": "4B5xSsvSGyMqM2nxQ1PeqoSvGxPpCbbh7tqErtZtJX9jRSDhTq1FvnA3g2brpYoTeVezKwnLioJJ3Ei3GHsrif1k",
  "key7": "5UwfdVaQhXQW5EZFnehJADtrrQVAjnt4ugxKdRyPzSqpQAXgCJURL8ScS4RF1Ecd7JK4Aq45qRb9KvPqo9Zy8gzc",
  "key8": "2fxQrG3cqySvFmKGS41Uyix7oSUhPZmPExawaZqKarp7Z4s8jEBHXHp1b1MzeuAepdjMYUeCdJ4VAd6JATgZQj7B",
  "key9": "5qPYnDSSYHT5gNPrSX5iEMqNaDG98U2HqtPH2kt5CVYCuDWmM2WqRbjM2iJcyVLMY2no6CCPxtZ12YUn8wFUZtEE",
  "key10": "3EKGLZQsBcVDkK4V5teSbG2LJNZ47bSiDc5UZ5oVh6s8eGLT9DzfmrYcipgXCvocX6XfPacDGg2Gy9Lzg6nm7aVJ",
  "key11": "2xNDdDTxEe9as6NsDH94t2TDnoNthiydcQQG3Xm3Rs1sPr1B8XuukVJyAMio55P6x5TbGi7jTy865PQYw4VhgJCY",
  "key12": "4t8z2rRpT861vdR3SBzvJDoGN6rrzF8NVz7eQFTyYwqZvpJXYAAnBhScDfsrdoUbGqiLqKMSJnzdu2PiGp4HLkcM",
  "key13": "EAZwkHZXDhZJSBq5zEAMMALA6toBMJUfk6CxH7cqmRcB9UFX8QqcmJQ5w2AJnFQHJ1KtroyNvJUbiPf6g7VZ7Zn",
  "key14": "hkmC61kHK1QJn9YSVgtTKWMk7ytB9f9A9QswDdjLtTqKnEJZX6hncdSQPzjiPo5m1Jfk6wgfrarn7ZkDdcMsK3N",
  "key15": "5ZP3DDvbkwUcMKJbmKMyLK85pyNsrdxUEoJ29X6c89C7TvBDJaVCaeFSJC3hin2Xmvg1p6cNiTtkmQYq4L1v2hYK",
  "key16": "o951vQctrFv6EpCBS8epvae31sJ64uwYcwyGEYcBVYStfivnoVUorN5TbqYpAZSzYB66oqq7CesepodmaQyQAv6",
  "key17": "66PMi89o6mkhEdZFvhXb9wmL56G9qwUFF582RqFgE48XGPsEVGoGfTxrVcUsfk89JKMngHBQiktWud1SQYANVnz7",
  "key18": "5DefCyFucurvcRQgA67Djb4rNciKtnKpgrSTB6j97aUjJWLLkdTY25kV9wF5h2dkhM3E8QUBGVDCeLWztvaDuLn8",
  "key19": "3WLqxF2FdJokZJ4y7ohCV1V6QQxcCDMGcaLAgqP2Ex4SnM4FrLSTEKagaHXgSxYQQuUkcHpmSiyGm9q2RZGi686a",
  "key20": "51cNicBKpy74mkj56ZVD685jdzk9kATvEbJJTM8TEmR92eNWwrCecam9BbovEP5BbzmRZsXEi2rRXhfpvLo7McKV",
  "key21": "4XHr9SYYEtxpbx9cBcuX8xkAgJo3kfkLggAPpH3HHYxSt57C3oCmRmphgcDi9AXt9pnsrJcD943TPAb5aadfGcdj",
  "key22": "42YVJTtShzes8E5nUHsFtxwQ32pPDSWPTZYpviN931HGwezpgSiou6fwcpEABsdSHmVZDfYvNdeiyBTogKLDEVkg",
  "key23": "5rxBZcma93Sh7wLvRRnmE43a4FJgEkd2VDVgbngX7yj4ZGonQt43kNMZH9JNtT9R1joEnEk7Ljp1hSU825uccKWB",
  "key24": "zhgwoRMajbCr7Yfr8ePp4HJBHex3Too6VXPbu3vFKPJFyegriSHZQQR1jpYVsReJCZouyXXrBYPjBUb11MVuAyW",
  "key25": "UYH5CPJefjMGk9bDir527sgPRbQDN8ASSaa3rqo9hao9TDjY3bihsFbg2cDn9XfmFSM3eru5tgX9bP1FS9iebKV",
  "key26": "5QE3itEMkeeaKVWppdMTTDj5C1aKyqTBBKjCrznSPbET5EefSGLoYUfM6BbUgWJ4YRNXWrB3w7cGe9TU7mvVxsWb",
  "key27": "4sJzWqq6bu3e5nb5e46o1pv5eXyE2K8w27Vtqcayjof7F3RcKFHwGjxbm3fC98vBWeRGS69poQWJ5WCb5AP6nsUk",
  "key28": "4x5NLn5uGeQFc23Q2kkujj8KYTPdLCFnri4Wa4sKk5qQHNWuQmdD2fdcQAvzouMSKYYfkLMArBr1hdjhLZcEY8Jg",
  "key29": "sJ1PUWsDdhq6PinSssNygNMBDU6db2ZKMnjrEVToaxKVgKCgyrCfVdL4jqXNp2ZxMiDYNqwh9CkNGugNsk67XAx",
  "key30": "38vcQvPcN2K6ENSXoRG26wZua67BjpimVHRS59QNG4nYPWZsiF2fZuvkep9GRS9Htb5EDz5SchF1XZZZN93QYjW9",
  "key31": "3K9nwTYYinUKSG4MyjFqyEMULbYwqEAnPFqpwhwuufLQYC15eaPZQDVPNLN3zy4b7Qm5ZF9R7UFgCGPipaa6KeEL",
  "key32": "5zxGaMuQAqn9wJMhNETYcsE2ThSZzZcAmbwDnex3nRvXcNDCkH2SAz4P7zikfjxHBKJnii7KVDFQSgFWc7nqR7H2",
  "key33": "3qVbMGM7c39UdrRQadA4X911dTvZpExoigPP4SMSMShxJRYt8A7x5PbiFTiymBdx9EbxDqwEynrPWECbmoRJQBmx",
  "key34": "uogtpHp9fZRApiYPjgWiw8ZNARzdeimQHDTgTa4HcGoHC9PjTaXJPU12fGjRnEThWBzfd6nZPRngdfEYBXiqdKg",
  "key35": "5fNqWmNpSb8pHCh3yUnicXwmZ8Frkg4ZPuCShmqPWzx6YqNT9JBuBF3xoMYT1PMGXjSZh3CRd1Up4wACprDokJq",
  "key36": "33zdEVxHNRvKpSvtRt5HVm7K7hGoPcC6Yyrt9Xda4hgsYvKJPi9cYTZsPxSpSdxjEY8awNprNGQCK8mL5iGUj3qb"
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
