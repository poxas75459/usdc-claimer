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
    "4rKwvcie2uuywMwM63UpLkVYJn5qvyqTYDjv6YrE84Y7DDvKFob3dzoxJaAC87pttGcaSLsXvkSSB2bfZwjqu3uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hY17iiB7UChKzvp6ZQb6ZrN8HBkt2pDmi5mVMFgzkF3amizqkQySnp7pj8Kco9LoRqByrBqp8ZLF6UwHNsiuJj1",
  "key1": "2WBKskZRrKECk3bBL6QtKRKSdtmZdGQHPDJStRhB71SpQTfKaHT7NNqURJncK3xgbe7qAVsTvXvNZu3XB9U3UziU",
  "key2": "2FdXH9FVhfLDh9YdRmU5iKnhPJ7isd68QfREiTWJfsUtociWkPZzYXhyeUJ1W3Zpbe8jRZ5xdcHDWA9rVefaqxzn",
  "key3": "4Jh3sii4AKJH1gvjtATSbmLWV4kVsfqKcLJHzLfVwRazBngPxmPinsFuA98WoUCXa5M6TExzPEfvLhCUeLsnjvnS",
  "key4": "3fLHKU4DKZetPh8qu1J3MseoNPou1KoUyGxjr4ppV5p4yAEdKxBeY2QN7PMCYHeRWGS16BuEvS3yebCQm7CpZ5qn",
  "key5": "KLYrn2WhksKqKXUjmq8YTubAkDbYkXzb6FyBEPUSdHV3VFChL7E1ZbYV13CxpsY36X6qMafmU9p969TvX5ycedv",
  "key6": "ibzcKutgWUY2nBrgPZiK9pQWdvEdRV3KoNDRmxu8WoCqyeRUHR7y5L9VbCgZuXxTaQuGJPR7ZJCJusz7YFZUu6f",
  "key7": "3n6Az416Lzuj1tWny3oVDKzKitAwD3Y6qdN5vwkmmF1tq1tk54MdYF9hECLc2oMj1qmi2XT4S1sMtBCJxTPm14pu",
  "key8": "5i2TsqftN8znQqR8FzaQKBBYTRVsQM2iqez1h4pCfgmzZ4dqnZDFhjzGqxqaY4bY4Ppi1RtZZq2vMvcqjr8NrvwV",
  "key9": "5foJSxaiFrfLV2JSA6YKbC6BbSPJoHt7V6FzUhbKZmkkWjNAt3nnxpXcZw8CHQDB8EVi5fK8t9DrfyrZdSpQfL11",
  "key10": "SZy8upJbdzstvU41osnihLUWY4w4aGj4vDw5Yz6fBgEdEYgNQz6oTbaZgjq1FybeeJACf5QvEn3PqpMXwj5ysc2",
  "key11": "3eNuMguMLFspsbpQKV6ZkDb5DUesJyPy51VQ8eXpb5bkscP4Rub9i3Pc3Lku7u14F8U6WX94xVJqXPY35sbhxXgf",
  "key12": "2cWEcfBrCP9yPfq7mJw7kqJFUR7zLiTYSrFmKYpi9LwFQgEp6Y1hJYkkvWxd1zm1ASWpbBoEVCsvntQwkh4GcxU1",
  "key13": "3wcdmbtANFL1a1TGfv9gMoojDyKMyfgyixg2QF9QYTMWaA9bd3vMin9Xns3LwsgDKuzd4PRNZ99X55dPNxTjgF81",
  "key14": "uQSAUiMxifonrVYvuZdBerj4HDMpBuAyYQyfRSs6DCNtU7jes1boH7VUkvuVfbz62GhmMZaJtJVBqpZ4UJanhKx",
  "key15": "5V2ofuqsPSt9rnVrKRw54QFGAUyHjMqgjzUvcdTip2dSYdLtWGrDur6PSnLcmaCp81mkt5DoDDf4ENz1uL3QkhYx",
  "key16": "3tGN38HXSjDVtPfdAHCC58XvoZnARjUrdrr4rsWZt6rqjfbjNxnnn8gzoovmrjByaujUWWeD62YgTCV6e5aeVZZJ",
  "key17": "41PBvby5yh2THYn6aBoWqeoduvRXgKXYVP4U8MaTjNDAFkcT48uFYRmKeUY97upjNkN3xogHhyDCv2R683PdCkaj",
  "key18": "3jHubNFfHTNvcFe9VzL4HtkNfi9Yy4GtoNXT6H3fNNnhuDJtNByFESoeVsUbARaFtQrkb9NrfSexkwug6axfWVXd",
  "key19": "2492H7vDtqssfYdh1UTFCUPnwwAZFCL72vpm21caca7WWzd4E2YbZevJ652UyYWgJaDLM7VfHiurdBh71pLdM2X6",
  "key20": "4FUh4EPsSHweYBHRgNYVNc1b7Dwp1VmH8SQnid9zE1Wf2h1ijMBjYS8feuHCa5tcPhegDE43MHM2FKYMnjAAVAxR",
  "key21": "2k4WiNkResKD85QTrqVjSn6inNFzzM4r8HLrgmgyQwAA2ehhQ1eRWi2Cn7hjCft8iH5RjLz8QX4xHdkLR2gzg8zJ",
  "key22": "3i6RrxbbLnBdn2iPRWSnB1BU7Jy9eoi7Sj4BEn5QDtpnj9AACtSRBejrzdfDAr76u4fLZSere5UxhboBNnL4Ar4r",
  "key23": "3MyDHdnSSxmBufHw5UGbxhiGTZshbRLxLKfM9YLdfd2NFeurakwbpphZMAx1KVQtN1YP9yf9eirAYn2ZEBLE2Dfo",
  "key24": "DTXCb4PhAszAcnockjLRY1DK4M2D6D4cJ3BUVJ82EuR95E7LARfWCwDnM28UEMMBTdyrioQBp93C1X41rsZrdHJ",
  "key25": "5S5AYPtG4LZL5GRZY5JF6BhQ2ZBNJR9jnN3iN42ZRUuJJ8ExhUkUTmqB833dt8uiQ7rdhzobRok1MG444gLJKrsH",
  "key26": "5zDpvsR8wgsxvqjA5AkkokypNbk46m5o63eN7Jah925jvsneRKap5mv2vWVWMbZs7aqouEDbwRs8nwXB7Y4bSbsL",
  "key27": "37opXCadCChYWWkAkWE9fxeGPg3KQqLe16y2VXSoEKA8tLQNkxgq2wpcGNN5ZWF5XocvHqvWYPCp5WmaJ49Syp9e",
  "key28": "1ouKZ5s12sNKQPFLjtA7FGx6J1xFAKjGgGnD7rQGeS49n7AbgNYj48tRFeyqmBwSAFPo8UAugFdjbBkcDV6y6QX",
  "key29": "3E1odNaTWWTcFd6njT9VzxJXnZHSrA2EAZTq6KoK4FuN4VAPCWxtgi8sYLjgtrmEtr6tV8mRkKPaa3tTUj3PSbgH",
  "key30": "ceyGXGM2XbwJ7aaJSA84wqHqmoeL9ggFthCZtD3CCyLjfVfdwNU7psoVSB4dzfHRoMq1B8h1gGaGtozax5QUCz1",
  "key31": "2MiHukQUSLkjQ5XeQrKHuM61Ss2yTy6J8gKFsFDVqyWNecMMBVWusFDbcznJNtveXZ7BB4xpDk6j1WbSahFyvgKN",
  "key32": "5aDt6vHo9sNjkya8QnFKqaHuds7Aj1otKWWqFrJvY3B6wFpV18MyVGLS3tGMReyT1JhiabgnwS5eNkj1AB4tMQ5e",
  "key33": "2pWxeS7UExmXZVfedBcuZ76ddt7mefzgwXkfxVnmgKMVSQ1L67KeKrSvvYbzkFyCMDxPfNCCrw86XpHvPN1BAx1Y",
  "key34": "5LHBuoLSKb5vLk9K1Hi1HBmcYBYvdzv4Rh56tDocf9UmBMQwhkLxSJNEVWEU3GZ5z3EtLkm93fMdabpFm7NBo17J",
  "key35": "2nasfJvU9UgpthapbXSFjjSGrJn7pVpcxNRD9UcB6u6yzpjwsEUsAVpJBdAofs8orEjEUPvCnETAQhmZNvWap3zn",
  "key36": "suqdZviwFzZdp6K7iFPiMaeiQApfyN4zWRZ5xS8sWgRnWKqDNnQ4wGVLPLhzQyinnXDXm95WM9SjW3c6wBZK2cy",
  "key37": "5JjCffbM8BK1T7o219GajosCuQhTrrTZR8mV9uvqt7iu83wFdRjWvC7ZHFyAVkjZMk3AQVUXcjdF7JuJCtMycU7R",
  "key38": "4gijzVmgHESARkJcxqCrReLRn1YAPjiBTAHDQTvBFWfzhXpDmUNzptnfaNCHTcvsmvrdRUV5UguF9M86Mbicrm2y",
  "key39": "R8K9dYKmdFwYUqwv7Ubawf32dvDs8iFSJaDVYB2izSwW9i5WPSsunagZB6spB5fhiMq72PCyg4YVzZXw5PAhwRy",
  "key40": "2oRw5P6t8bXUguT5upc1pgVDvg4e2MQr59kexUmVTzv9vNeFBGsiYyxyxctgoEcF7vzEbAYGDQ9w5Whg9Sf8YBdW",
  "key41": "673bY78rURHY1Ecwam9XbjEdwwMp4r3ykt2L6zKAPHKHYS7p23gcPSSRo4gg1hQXud4d2fXqWdMwBcAafiDVrL2N",
  "key42": "3TMP6HVYsoejsHuurjtDgbNLAvQBZrMBR5aiev2zkhwhCGXvLCj9TwPhg5ks6KgxfsiTwDx1P71PPjv57mMFp14q",
  "key43": "2UPNCUSZCBWy242m5uL5xmfd2ow2jqwagLuphjQqzUV82mAX4ThZ7VCLtykaKNmRWFKkrHwBQ9TqcnbznseWQjVA",
  "key44": "RPvf6nBN4KEsJnZG8BcQp7ovR4Wa2FFxQiEPjU2H4k6WEAJA69tipa9jRFgKaUNtFwD2GQmSnRE3qzrP4DRzFF5",
  "key45": "5fx9BJaqmVGfuiK2dAEe7SK4y8q7iG6dTkqKrHEQtLhtXZ9GQLCMzGAhQbWqNxeVdv9uSFidZ4WM9uBy3EfFW9YF",
  "key46": "4xi3oDFDiZQkQ28oGht4XHZqwKHyqi3ordeE1ZScPM6LsmcZCSFqvan5uA4QCAEU1VAvKXaLWQhUczTz3nihFB4v",
  "key47": "3SgL4L4Bi2R1Pye8RpsqtMVTB7gh1atkHijAPXurjAFh9kT6nutbuuiNuVkzQRYS1hWHPuFYbuD6WnYhrNXe7xto",
  "key48": "4A4XzFWe9umWUxZZ3Eqspfm8SrAkTbJZFxtPvD9q8SMBjCZJ1YyhUYR1KATZJAJkPgm9PcouSysFYxgYeMpyjJjZ"
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
