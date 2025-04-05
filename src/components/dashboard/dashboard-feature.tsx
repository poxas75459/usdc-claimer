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
    "453XyQQChpFQvB8Bq6s1vTsVE85LaRaEcbmMJYqDZkXhXFsHew6HfSQGAhSAyRWRvYdbfY6PVevE9ZY4nsJArY4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yKkRehPbKZd5ZKhdKaqWS5qFemp98dx72wTPuaGu5Dh2ogt5VwnMTULETRe6zDREW24Yvc4MhGP2gDNyDXQ2mv6",
  "key1": "2NdLnwjHxDnNo84zvpGxATwzvZ2M9UydRRTJdAUDztsJJy2gRwAPRaTtjC7WgFEj7F6tg7LWrcMnmuJRgXCs1vNw",
  "key2": "3J1wS8s8Gun5YhcfvUYTwaZup4DL4wWeo5qbLnSEFYCUxSWjSrVaJzMcchLSntnzmnJNARzwDDiHgX5YLoirnzhY",
  "key3": "3dHmp4D9XJn9pSiHxFZFpejX3rdLkZoRVZYMAydP2FqXHrUMjQnaSgEviDBnXptRse2KNWxCCxQHZyLpHxyrpzv8",
  "key4": "4wMkNKuEKuH6jkrwAM3XZDSak6ds8CvaYdvkkUnNYbzBpyA44M5m5P4YDndEAmeeL3kTLcgQ2LaC66fksPbC4HBA",
  "key5": "3waXfsZza5LeewJveYjwYe4qJqU2BA1ZSspqkGqE33YJUdS98rgKugbopRvvPNSrw84T9VuuU6SiMJfJkXwU1bQG",
  "key6": "4kq2SnGakyBSU2WvUv5cvKcab1vCvWmQS4ajWem5NESBpNe9hJZhXpqq4dg9DAMgmzFZgmSCSbxcFGzFpM7W1nsT",
  "key7": "5LjBXtoMZfRSbNdxkpKoe88cRW6ixWFTh2p7RYQs71Gjv8mWYDsQRYSwfv2WKiY2r3ojAGbMH4F9BmBmv3kFfUt5",
  "key8": "3KYqXFyDCMctVtdaSVaHAovZod5mFdHnijN7oDt35Z7a2Gvp5sdgLGQKAdpSRGLpJUZvrfEJCRNTHCqTJZGEmEMS",
  "key9": "61Vn6kHtLzzDVSGuKZTUaKZaxrV7ngiX2mU3JNaAkCjYiYSckxTUkgHbJNZxQLggSGQddAaw1u1LzjFAR18dpFNr",
  "key10": "3fefVcCRD5U16xj9vRoWB484JnbhSkL5A67YugcRV2GGL8J6oJjN9faHj652WkbSNGJG2Xy4YQd8gdM4CsT1aGg6",
  "key11": "8rdYBpTBJeer7Zj5wWusYBmnmHYksYFPsu3gTbqqCmurLMPx3hnPUK9obt6TmYvBrSMJ1erczDSCicmYbFXYoLf",
  "key12": "3etNaoP8UGquRScognRX8JJi5nBjiaDzPENHGwMZP98Y5u9Tj4d5ApRPVwZoefTygN6h3m137WRcQPH5hLas26es",
  "key13": "25djmskmscpqQg3VhjBaZFcPqMxTn4RkUejLfhWjY21VsHHa3Cv4tHCL5ZHbrwx5HbkWCcDXehSgB2C3vzfmiDCG",
  "key14": "4W3g9jjHkvuebPnxcoeAEKiw1FXdYd4qfU7JtSQb6YcCpvG4n2aCbi4xLBDBWBCKpahMNf94Bm8iLp9wPfVenXvk",
  "key15": "42F5hajbXcS2BK744fk1jMYvsTD1YyYB8Q13nBRqbzRYWbemPb5cY2DsC9pX5VYnojzbwhZtLEhuhu5d5pUDSYq",
  "key16": "5U44fa3qoqrAELiCSyiQjW3hb2cMGvqC7BuDWyHzWn6FyTExLPq4FKb3xbt7crGnFpiZL7xezPmP9jDWzp5eThYu",
  "key17": "5ojA4QuaybpvKvWPCW6cbTVSRUmbnsj1qNuf1KD8fEwZykpGoeagPs3woaGoUL1iGU62GJRsHXcTnCURoYRDnVdn",
  "key18": "D4XvtjMyHEsVCnhq2zpKTbY42JNr19GyZGjMtdxthfVtrZzAhsKSA6uk9aAq66327zBgeyBpgHZUUGhtkdjhDWR",
  "key19": "3LEgZTmyxo1qhAqzAHxz9BprgWaxUDFuW42XpH1igis9sjAbdfKSvzD1K2ygRvohZp1eLus1QTDuEH2zvyTZ9JvR",
  "key20": "4MGmJ8hJpderuo1rAfrdkQP1ea3Sc5edzWheiaoRjXJoxPn7t6FCt6VWqGwTdguyskwUSV33wYryhGXchKfp3Axt",
  "key21": "5co9MEDYhL25T8YRUT2HV7PaYmiV5dtRUXSe9GfNDZv9mwnY3pGxoyPm7Dx5Zt9Xx6UzyAtFVH2gj795KAdKTM8w",
  "key22": "4aehKFHaNVJpyxbjpwAkNoVoSDqmYFv5n5Vi69BJXC3d8pcXGybqUcGVdPCYRUZEHU1afWUDHn4RHn9xz8ckYQC4",
  "key23": "5GtmjKbYF5MnR4dmNPZqhfXXVuoU4jyQeoanA6u5vJ1hFCxCwTH9THnw4L2rULcnRMuB3x5h5LV7Asne5q1DWwX4",
  "key24": "vXoM75bk94MbK9VMcrgUxEdmHCqXPxwBanQimyGodyPVCH1caW3YVRjYSonfgqRN2JrrA6Us7UnTwZyoQLxVP9E",
  "key25": "2vHqdYmcmub8Wx4YcZRFvDtjBinjgmBZyka7SZcGdoKWaXrxBnk4UARhy4jqSfM59kNW2SUZjobeQ9gz1LeaSfqR",
  "key26": "597ekEU6y2ADg7RjEvfNmPjoVLpr81QzEweKbPwtKnzAuCsRDzKkt3EAmqKHyp1w39je2pmvEQg64unb6Z1aZWV4",
  "key27": "5FKeVJF7Z2j8JA443m5iNcpq79x6cxDSZ4sDpS62eHh9i1mx5UAo2nB9DHQKkqQAG8gxrj1Du9AME2SYY7px3KiX",
  "key28": "3iAzqEutSxRmv4o2pF5yoXi8XuCesefCC4UqwSJLDhBeTDb3VaZBSJKBwAZXYTz76FugocAxj5ahmFh6eKuMEhXj",
  "key29": "4h27zdDNn4ZwwwxvGRumkD2T8yTVsLi3aYuzwBFgKDomjvb7Uz7ska7Vm9zag7mSosneuzZBSNjjvcWBtStLcLRX",
  "key30": "5ZTrS3vmaXRtnDAKpZSJP9Pm7XGJzt8YbxJB1oJEVo1G6PZmRtsA1qk98gbT3uAEjx3AkC9UasJm6r3FGvtjX7dU",
  "key31": "2z2WWieFgK9whEWrUxRoiDZt3dox9aSpCjJs9tDncpTMbW4o5XNEe763nwc9NyCu9FNqsXzy91WULwua52uEE8Sn",
  "key32": "2k7yeorg9QYFDSqWzBJPytPrGdWyYE8hHeM2FCoZhQs92YkAq17Lt9pjQUNJ487zFUJru88tGV5s5Aso9Z7KAJvL",
  "key33": "2JXCPJG3wnxs1YdKqZFmccQ9asoAr6BgWkuZNTKekBqecfCCdk9DBjiLVhAS4VzqtWMfTPQQ5YsH1QxGCqDLGwuP",
  "key34": "3jGKbiYbyWJG87EF92XegZUCVVezBhUQqwTzo43ktGQuBCSJB6nNCTYV8U3WacezQcoJ5y3cNMSarjDsEf35Daes",
  "key35": "3uB88jXaStkwSysSJqRPgc4VL1u2fJ7CGtvMpXeoAewrSkBnFGi1zP8ezmmRbunJfJ6ZmNhUzMy63tQNT7L2AoiC",
  "key36": "ZtSEf5sF5X1Goi42VnUsWQzia8zV6mRM5TDiaVo42kHCUQJNvLTipTTjAxy7PTnStpNKnJZSYx9RpfQWgRS7V1T",
  "key37": "65KoKyNg8eQ4DQ4WAwN2xgb3wHhxVFE7Y9ZLaTVPwxpuUCnThZYDMkz4ZjxobYWRCaZJfY6ZDiN1VLZznTdXbCDU",
  "key38": "597DLKNH8uCGfBJr12gd88zRrYaYhpVpaonAj4gMKwoBnq9DPXQG6EVJnSByUzyHwUecrmUMVkSvYjAZRMDCEbKP",
  "key39": "5QCShTF6qvkzJWTaoJNfmUSDY71v8PzpsnoEbbYneCZJfpjuoRaGimaFhHVRQip4WmsCZZ2fuBrRrSDdmRnsqvn1",
  "key40": "4jpJgwRoP4oC2br1wRVx9PspZ1pxagG4vbPeVqW8JisJ9m9ALBfDdBgWKz5cYRqcLPzWQkYuG5uRaLMUy6FWNUh9",
  "key41": "4Qimn82fx1FAS4kNfYpLWfUu32RyZosMTK6KNDewtG3VmBeDdsH75eK5kmfJgdTMWcY2CXrsYZgQJvm3VrdrEi5n",
  "key42": "2Pi7YqgL8xBULV9fmBEYFvmKRsFqtQKHbrMhWCLdBnG5c6Wc9Nbhpd5YNMJybJjBgJr5eWRfmiWUqCafkAMbGdKA",
  "key43": "qDbbEZSt2HrJmGwX63LYrXY2ZSLLoBKwCWBTdXr5eituos5c4TeqqxhRgQ7DZwqq6afx9eBGtmUtBxB9rqJFPGQ"
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
