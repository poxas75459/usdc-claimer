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
    "67MB6LvjcC8bmThZV4huNbXPVLcsm6waPETqdowTDH4r2Udt65EbmMr8UdrNATktoQNo5TYKLTbRmfjZ6oDE5Mna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdWviifVYBeuuDqhHLVXCshTYU3eVLkARRNPBaPHCcAkQfmKHn37TCDDybsPhhK6pCTuJKyCErvzUcEx6d8pPPe",
  "key1": "5UEK5jsUsZueuk2ogjAjs5tGm2LKY51ZamxG2DabjWPyrzS7stcmN4zfUYbpUKBbmez5vQocPytmHHq7yvziyHSe",
  "key2": "5mMVKdUw2cF1jKmDiFMV8VgktNkkGsBdqEyRjV37HTd3yMMfUpW1ZnajTrzUc8efy3MUMKieu5EguEDQQPnER2r6",
  "key3": "2rYgL46uPnSrurSbn1zEEaBYnrS4oBjriNQvt2Uf4EWmWpH7VgCWx6EcwPkQtBrmjDAY3EpHdXGS38DyVuAXLQ4S",
  "key4": "3n2dXGnsk7vv1BUN4MpswQdvggqf6Nhp21dtbZ6QdvQsETuDvqzenLPdsCrc5SArcFqDbozRemzq7rysepH1dC6S",
  "key5": "5DWJnhTddJxfkLk5UuYgfNN25ReANm4syrg2J2JB3EDzzGotTiMhJLew4u3Kix5eUw6SbRPZBZT1FJhHDshEbE6q",
  "key6": "55WewcArCmEZ7QZg9NdywvxCkrC3NzzPoeMPt3NbVrVCKv3EKDfSvB74qokicpaKScisTjYYW8FqiyuiXxjqc7hG",
  "key7": "3y5a3mVAZTLynJKdaybF6CnxuP3esuq8XyYBRjhcvzE7UwLgqjvwrYsw1aLJA9QgMDwGNEc6xRSRzPTLsqk35oZW",
  "key8": "5drkU9gc2nDSqzX3hsu9JwDaSwmJVcz43xjdfdZHZR6B7BCX1DsKtEZ13QMqqGZ8NaViK3XBzqWDT4o33RRdLxba",
  "key9": "AXUYhVzZvef8tBPwt4b3pg2qMM32b9FYJdARrpYbgfC21ABeneFgayU75mspDX6iJBYCtNSf5BbUmTxMFaD1dkZ",
  "key10": "2qjgi7BcBqGqZtG6PNb7QxBduWgU8goLnXZn3eVgVwt9XqnTmLuvXQB8TLxH3i3e4y4oQLMRBUgiRmoVPjEwS4jZ",
  "key11": "2h662bakfaDa74yL3RbRV4iL31YPni9nQU24QqRJWY6D6cpNMU4AexXkEJbaYPfqubhoP554JKKNv4qLueTPx8Kz",
  "key12": "5UurZFHBUC4HfpWuCGCMX9yN5MN81TNq7VoRnc3jDY8HXh4M6CuqejhMyPhoAvr4qM6HKTpbZTNrdLJycgk1KRoG",
  "key13": "4yYDqKFdy8LTNB914GksNCEnPnAZJzBe2kGfQ11P3ht4d6dQ6TdGZcTqvHYqSR3ewDxo7XJfpAnBaMxGoGWAT5XG",
  "key14": "kEVVFeEPLVkm3GgQYcZzSBTGoDXnMG54TCiVAbPPUoCQtit6wvksEerDHUwttkLZ9YKycrUoMVtJU3BT1ntKsk5",
  "key15": "4e6ED4ZzmT5ZgNh7P1vBJ7bVADDU3VcdVHstWmg355j7Ff5bwMGScjbJkubjzAiBGiCXMnNiPgDu24rf7eKKbUpQ",
  "key16": "54hZbswqkRkoJb2MQd2rt8yqCaTK2NWrkb2e3YLrxG8ThumabqACspdrYV5T2S66EhTVd5yAsDodKFycFr8MTUDN",
  "key17": "2ERuUL8DUNYWDGEGMKjRdsuGo4GBNBAiXcWQwKazUTnvrr2kKRKVCw66oCvJ21y4cv8PzhsnHHi6ZQqoMBwuSpBM",
  "key18": "5G7Nkm1RgPwqJLmzfAUvdWZr5eD5ym23rfqBgGf7pE1PuojDDg7Er7D3QhpfBQgGELmS8BipgNGL8RBSvdXJgd99",
  "key19": "1oA9kHXGQHUy2SWwJ1w6thamWjfdmsVjgqc2VAJJB52VfrkKS6zREgZzLhurLSbhThDyyU2xR3Aw4GsKt28L3wT",
  "key20": "4Y6vjqTXpvtk2zfmvH8rUosyfpBV3uU6nbH1AhsxVrAh75jSQ1G7aUqjgQjUP32gvboRFRKh481cFWi4aYs3QNzC",
  "key21": "3atjm9LSb8tjgitRk9JUuAZmqgofEo4PFF4ksPiW4L3BkmBPdnPE6C9qwJ1ouXwAGM5u8tagq1p4qNJAXYBhKUY3",
  "key22": "4bwtH7kkPhRWFoy7Gu58jamMJEEyiw71ZdqeNosfWsAQKDJ6exPZMT7xd9gxmpBmEJTaRbiYuqnud3KUBYFZ5ngU",
  "key23": "4ajgC1BRtKfFiDxNCFh6HUaoUo1HXD2B2bJt1PreR8DQht4PYDWpH7Ap7TQk3MaJwCSobRMHn9pwpvzBA1BNkYLs",
  "key24": "3cS5YNssLFNJ85XWixCMVkoKpN5rPjL3UayaijZwzdBdXmTfWYrUQ9KMVm6SCQ7BQv4akAoUmD9HwA2xHmGrNMM8",
  "key25": "4U26SqYJqU138imqyH5DiXuLc55kBmB7zNXAo8svMs8vhY8e7caKw3HcNPGvb4wd6TudNKSKnvnnVBF5KiyaVPkK",
  "key26": "3HpujUniLnLXpmiEMbpmGVyQuU32zXAe5KrBxSfcqjMnfcZz1TWMGXLqg1jjKcAvrSUqair2UtAxwUFARKXisBm9",
  "key27": "MjNCpWrrxGuehB8nPbi6KRheoEGtFF9fLgaNSV3XxfugWD9E7ocsU3fmAZXV68aYyGeg47RHd8nugi4meZkSuPV",
  "key28": "4utDvwUfepBiAr1xb5LGYDahJp3gGzsffUZd1bqLeUh4T8FPhCu5A6fnLbqZk5PWD7K2ZSCmJUUmqRRSDis4mmca",
  "key29": "5gGuNG9hYW6d5cXVpQRG38erQasoL5sPtXhBdbFK7c1NCX4mau4aGXXjQ1UDiVivdmwxAecinhz8uhcPMdkRuZsM",
  "key30": "4e4snwWM9UpnnwSNiEVP4LQ7HJ6Djh9Ba8Po1Ev51mtXuzW1aGXJL36JcntdPhKkKPwZNdPxp8P8pgU84RKUhjLB",
  "key31": "3SW1u43ihYVyDNKxnmp9Q5F6UxoL4DaAE9e4KhLVQ8nSSh35eF1zvgTMYD8mYRCZ5itW2KyFVTLivLzhifa1kkj1",
  "key32": "w9H6RhJXHatcUTo95b2bcjTSkBfAnmbw6WWnmmhjTQvCjjADpxzdtQDBDnaUcBNAjTz55nRW31GZqZKAxDcUXxA",
  "key33": "5wsppoMVvSQScbddU2EU7VouTxRXWzm4m12tWh6rXPk7sUW6PzWQZ316enHgR9qFuinWu5BXNZeVk2N7NP18cbEC",
  "key34": "23xQ2Pger91hVyNbSdBWBNQMn7KhbmbN2jKgwXe7vDFDsBixNFLhVZyzZQiKExUHnr58nUhJsCangWJ32Veu5EQY",
  "key35": "5yeqv5oDzsELuLMUdDnRC3TwLZAU3dxbJWXZRMopsQ3hQAdQkzeJSjyNZ57GUNpzz9WUdvj7dE4ahSFSdCpK8c3f",
  "key36": "zXNqY9xPyD9oUHGsgD5oa648bRG73K2Qq7keXLDmrQqNM6bdrf4xzse5mzGe3wzHRXqPJ3TbpYshjuR91hfh3pL",
  "key37": "5KJi7BAPcxvFoiYkhDVHXgLD8ieVeneXmXaTn39ZWCayMTthjhWH33TDkvWpsydgUwT3RhHtRggB6LSkT4aGKmzL",
  "key38": "5gQrDr4pVuChioZYXecSarTJTmMBmX8N97RTFhYCMdSsysLU2Pq9LQMBtwrVqyzr7KWegGZrFCqBe1SA5JewGtKp",
  "key39": "5U4k9S8u7Tt22wTL3sxLmrYZ8rX3SyQ8nMXBGrRDe3BjqBdHaZ4uenqusquqVxNdYgcYC9tah2hHaMcb3jvHQhDd",
  "key40": "22dBEk5jLiJCD1mKd4GZj3TksvJRAHavztZpzyJDUbi4GhfxqFzHfPvL7D1teKrnbiife6gARY5SzwuQG7sgLarb",
  "key41": "358oAJHV8DNHcEqhnEw63Kykv7Xf72PzdTxMEAsbLNJpAwL2HiS5sZ3BELC5WiXSJs6GtKcUVkSgmc8UoxVWXzsp",
  "key42": "2ZVX6uNSjUGVD6Q5Rgd543hbji6QipAGQ4p2hbYFpVWdC9NdEwJjTCK7wsHNrwZA9ZVt3pC8VN2NefMKQ7WkGT4c",
  "key43": "Yh4xZeX9Don6VqQA9pLBFHo6SaKNRJjbXTqe6h53YC6RLzzZd26XcMS8iqc9VJvDf5r28LS6taQqyWnrkaQPBTn",
  "key44": "BTf52wQaRUgugwHbP5afRRN2EPMsPcwrTnrQjbj4Fp4Pjn9tb4RmAU3QHU8kvC1zWcAy1hbrXbbYojtffMYQ6wN",
  "key45": "5PPTs1CeXdnCAEaJP8LEUCWxBYUyvkFmwvvsHrkFeqqMjrYDfMy9LwCsK5oGFtpuqgm7bxj4yDt6NrCDX7VfUjL4",
  "key46": "3pKFjBMWKuXTXNBLiJpqzs4Q6yX4dbSDLnvKCKz6QUQ3LTDE2JxjNa8WC3CXb6cn4ACG57JQnztNKmvPRgStKNus",
  "key47": "XfzFU6YkvoWS2fRdAxL6X1bCzwdJGszTUcZoVo96RNkDBeby5MidDy1wPeDjsuHFCKpU4VxScp1Qmr315rMLLCP",
  "key48": "4ofhXdJvCHQNhEmNgXCwMjzHT4Hu3DPCmNKxmJmNURcBwchpA1GvjoMXScAJi9MXLME3QofhvbndiFxMSmaVbXU9",
  "key49": "63WWHvCb2NqxNXAxaSMLcKWwTovV1eHjz9p9bCgYDUeoriRcR7eWUsgK8FoUDgDEhPrGJwN41hfapMDCSgJFmfZB"
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
