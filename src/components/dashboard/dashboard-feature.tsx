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
    "3NQE16xAsYv9sCFJjwdvjFuoMF78c6SVdL8tT4dzB3fgyQMoDjBm8NMj8qVNGRowZryw4fFSZKiLd3JdmttpkW9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwdWUqWWvFbH9QD5qZjBKpAG7YMzgaRQMCe7tgjsgvGLMpqe7SjAeD5qrB8k4thdPXVakAKWMB5F6kKAsy9GBZU",
  "key1": "3UE8ShExBou1acntpnvp8a7gE2GmKWFzZFjjDqC5zLDj9qh5DK6hztbdDp6awFiSyQMhUCuF444D756jgPwok4sB",
  "key2": "4HHDkpYbxpSBeNgEarrZMLBD8BnzdgBsMHMqMeh9BrjDVvYgHZbchgAqbXhfiMPTra8CTCHDznbeXNu2aCRwUqPc",
  "key3": "3tiH7NRitNz61EBBD3v181dgzAwf2TRhDmZPBZuNP6EeJmYqLgi5uDmjy2CEBWjZ4qXXVHeZ4rdgfDpa2hvziNrk",
  "key4": "5z3UT638j8vi2UkiCHAfqvgddnnRcwWwBdQWnMmkxKmYjqL1iAqFREEbRwW7NzazovNq64Uy51zM66U629S3a8Kj",
  "key5": "5CNo4ZECncEX7HSjZP7C3U9vqBmxjt9M1w2uoEg9NJd5s9UUExNbseasHJ11qQFFw5aufoMJMCqAfZiryjXrAM79",
  "key6": "4NdoJ67Ayvbg8NQCJabXkLBuXrdWUvCGPpUzpKbZaGYBtG4WU4doDmRdhJY5KedU2wYT3jBMWy7dunG2VWifPjhh",
  "key7": "UHxbra5zHJmcWCaVXf51S5Q2id12KgJ12aozT7EFvRVfbJQM74mY6XFqYDzvWrnXmm3BexVnRTvWQq4i28Yk29d",
  "key8": "WEfoQYGMXskSf5KHJ93Hge8EFCR2zeg88kbnkZNXDeVJjF4e4pMD9tmG5eU5445RW8vSHewv2WvbnnirGegJuTu",
  "key9": "2GX8VHPnRcFoniEstkYifEieNtDr68SWAEM7SQ6DZ49kthULCFAcG8Wm83nxsUfA753WXFV91Nkq1vDeYAwZVMyw",
  "key10": "AVBs8SyDk2eQW4Qcq4cvh7wdBxdshqb9WnguUeFVjnwSK7Y3kQA4eEvEf6iseUcsCpEBX1AFNrMEt3mJTrS5f4d",
  "key11": "42sxwcDQ2YTRJPHRqsJ5zahrs42Juq2xq2HrZxi81Au2xrMqvA5SW7929dAYFfDDd4zXhv9aqRbwxBinHGY3WDSD",
  "key12": "3LGZFx5y4pUigdXwgLt8VesKwRXW9i4YXc3XzbYsWnTPXwgevUe44nJRU4bu8SmFNfp4CABGTftnxgXn4CbSAtYm",
  "key13": "25gyZqqvmn64kpNKdGiYVFzpTnbQrwJGkBDfDkn1pd1ZBUhw1agMYpH9kr7NdwetFWCfGiUrE7Wvf1LkdE6L8twA",
  "key14": "3QRVNq1zXdUJZDLNnKe96Z8mweoDsStKG32fJnavyAa4WMvanYu4EUWwpWaxUyX5NFABbS3BJmHirEiMGEXq2YYz",
  "key15": "4Xnhjj6UKxngQdJQdQvaz4NMS9RPPK987DcYBGNJwFUCJDAHEKzHbLzRtYdV4D7q8oerkMh6GxYuK23HNHDkJ8DV",
  "key16": "4mMxjk8kwUhXi1o2uJtUhnks8Ms4WBekwzwzwYzCuSyQytA6RSGmhXmrTKK4VPrFwgoVuniMQSgF6wTWDEvTMg1R",
  "key17": "3DG97mqTtdfAyN3FyPqeMSodLFsUvWjeFar6TNF9RmRp3diPbwHhS42CbVo9QDvQBxaWXzvXNsuGVFFgWm9mcskm",
  "key18": "61oZa6nu7xPmZtRtMCpiRz17BtxvzNuGW8RVRCQXb4o2fhDBcgLVjH9DtfKMvNB9LTyGyNHen7gL5Evrustbj3dx",
  "key19": "5orNBXfYpLpixF4x1XdGesf6jRE8BoZYoP7EfZhvbi84FVqVYgtP2hybjLaweR5CzmghCYegNKwEDDKniVk1bNUZ",
  "key20": "5JMnCT23j3QC8tWEDnc2DweWf3vhCdoGvxdPrcairJz7MSgRXxKTXfyvPdnJi1iTb7rbcJWr5s4zRXe4EaTtpNBr",
  "key21": "wr4UBo2dG2SQXom8KGFiWTXF7zFgn6sprdqZpxh3f1xvDqq6nCkGCd9PtEeduv7doNKvL4QvSGT4icn76Dweu5H",
  "key22": "5R9z8tap9vPPqjZmCSb8FX5C8uWCXPPr1oYkHXEKXV6NZRmhjV6zezoguhYUtUmuzzywdjRjKiVviVkWHzWerB5s",
  "key23": "2DSHXB16XDpwSE3eho1UotoDcZnBeSqZqjtBBV6ysMdCpKhnigeh9N89yvMMb2BvQGEzU9zq4kVcsgEZ4Y9ZDdgp",
  "key24": "4d53Fxx233C7yG2FmLDdWsD6KsiRPZ8qSsnJheB3XTvvotRFQwsLXQpDzfvhkZoEbMrTuEZMLG9KPa76sgxaZFF1",
  "key25": "4EnKHKYFQQvPGG5h5kpTAge7BoSnHiBBtxVbVKxGEKtC8pCPLerSjxwuPLVQEJrKYy5tYocWuwdsWWx7oYBdmVwS",
  "key26": "2E4Honh7mqNA5RAUnwUc1iRaZcqGQpJzXKVEahFpEiXiuok3tRaUJdHVtoSoBLTmSogBByZN1MKQNHFBobiSqGty",
  "key27": "268yHJqZRZyuWJ4pjNG77dLuKhftWohbdsELM4EhHLjyfEZe3R8cVznSbCwKrHrHz94LiuvC3XqgqunjyN6kSQfg",
  "key28": "5sntDakHYuHQVpQDkmygA1p5NnB8U4MmDF5p5n2LcPqgFswht1vES7pJ53BMFXoYpvZcyNMbWC8xP9sRGwj1xzff",
  "key29": "cxjXyFACPvNtjBw8EGgNKX6CjGu7Dkw2Rga1FivevC9PG21xWPY9LyrWQiV272fjTUUQ8YZTFMBNzxQNTFedbLq",
  "key30": "46m8pdvg1RF4Tpu9mEWPQhCAxPwHUj7FD5nT2cKjBQjN7CvjJRZgtFWbaUedUCMq8rux5JRo9gYYu1FPpMezJCGL",
  "key31": "4TDPhy8LgXZ1T66iNWHo9mMVKQ5WSM8hcn4jvoeB9LbnpKniNh7DCpsC5iqdFh6Vb8zamxsD3aNn2CrVxMRvugke",
  "key32": "3BFMMHjA3HUGB739ZbhYFpXgkZkoqeF2LRy2h51TfMT4scpnUzaXEyNaRvDLk5PgrSfvgZB1BRmxFVtv5SMJ5cvH",
  "key33": "5Mf71GtsDSonaZBjn5gE6fXyKRsV3Z64ji43n97JxzA8fPaTaVEYgPKGm86dj3FqMT6xWWrcQwbKs2FsW7AAHWQk",
  "key34": "38fmN57NYXtAcVsVCM7N3QahcSiijLjZiZ8E6f31z4GvZ9hT2KhYFk7JK3Zc7hZaWaX93BQrySAiVzZBFGfGkTgP",
  "key35": "3xsuLaqZtnUyRWBt6iWvceBaTG5bWMVKAC8rCNg9em3wKTGAow43VWMaJ6rNPvewCuU8k87qmoJRqmKBzU8X3F4t",
  "key36": "5BrTXyjM1w6LX4pFq9bUYA5tA2aVXbSiPZhc7kPjc6RyvmFc3aEUd7dvv5ALBcNPz7hmSsH5DbgB14WHGzVe5bUq",
  "key37": "3mdufXQLCdC9NeP7hQ7NrCdRQ1c7csvJA3DkfB8shnPj5uB9UJL8je5g3cWHR9HCcqVvJ6nngpLJrsTenNDkieMt",
  "key38": "4Vx6iHiZCJJA7ghUhfsiMxYyUi7cFZGvWRt3oq4HkqFW4cLFpHdgwFJCi7sD4k1hMYjQ8ipHdmCcksNjGYRMVjo2",
  "key39": "jDvbweiDy1PzGy7ticQTawa1f6rLckLsUjbVPXbcWVUus4ytsYHa4gmiEJQBsxJyTY7kSexzYTaupvY4JnFghMR"
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
