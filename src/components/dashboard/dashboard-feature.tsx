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
    "3HnY9W3viFKa2xNKDzLXViuMmjbkvRYPe9fEYVTifqaV5qgtudw1wzoeSyyWH1BUAipAyXcvyFkd1Uw8knGjJ8B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqaNqANRb7KxZ9FScEjK4iWycRMf7PF4FbvYoFQGqk2YSz5bsoRRho7gP8gFcgdRj1r3Zs7HgDDrDRogEy7A4bQ",
  "key1": "5nAgusxhBkFhwEyENnx3zqHjbAWvwrUz8AppDyPcsGAjCL2SscxM7Fa9Rqed6TBWRNKFHqaPjJhZacAdqxnLgHjp",
  "key2": "5J8LXdH5qtZt9Bdd1Jc7JtXq1m8vjRR4bi4Y4kY7YTZNejGvvCQ8efdE9LRpJnUMu9oab4ZgbGbKYBknNTottSoL",
  "key3": "5NQxg7VDXN193794ESe4YnR1bUix1vXZE1rbjjKvNBxRUbMSFeg5qEd19uKtvtRYHmQmpL6ApCVgC8QjtidZL69c",
  "key4": "5nqDAFQnWSGNQHBovCDnwcZKZw7FKrnkiEWJr5KLmVzszHbaY8gESUGKV8DVRc4cELfCnVdMsFXeBrsDEFoHx19c",
  "key5": "3yiqmoiADAtFdxuKd1QEzPD29F5jcffEbqQjyYepbErGnSomdVchYQnS2YnodDr3Lowud7iB2euRYcQuXEU7nW6t",
  "key6": "2yofiri5vezBJg2TYzsuf44tAHfA8vbsyoDyr6rueAfTxt6oMJQWpYXrR4xxfp5m1Qprgyceqgz1o2UxjY9zP9Qv",
  "key7": "MCv1khEhFVN7EsozkyPyMuZ8UM1Tmq8whtBt5PASnAxt9Sgd4mjngKAW3V6mZicDnYAcfwmHEPUzRebX1LHExPA",
  "key8": "5xY6fQhxpTiiR1TAEve3kuwUBzPwHwUsue1swAuq3yxJe77xhrFE7BY1mzbAoXQGxtJS3yDCkQnjtCavxV5nkEYW",
  "key9": "4HmBcFCAsdvL86sArxjKG1cwAgdHcMbCWUc9PwBTe1CHLFvG847Ruha6nCCm4MwEnRK2MmMBrGDx6VeJi4kCkXMJ",
  "key10": "2rLJ1YjoUMrG8M8WsHak9DNCbWh5szsfuULcjfuVWkzRVJcKnMLJjf7rR5yiNdbY8N1gDYdHa9KXyvwGNSyQLX1J",
  "key11": "3ch5kb7Pv5YzRpRhD5hZhKWUPFrCZ5RwykerRaTfkWtpLJhdcMDo9dfLjj6S8moXE9oDjK5g2R4kjKV4PZS7ptKU",
  "key12": "yYRCWFg8u5xGRxdsXk9UPpc5ucBqAYFNEq635AM4YYnighBYdKvFHVytQDSDcKMRfcMmmp1nBw5KuYsYtiDbgmt",
  "key13": "5h1r5FCpCJo2mfTQsEQJLoiHjTsJ83GNVZSaLH1Se9CN8rSkfpaeGToZeSvZ6kJUHvebXLj2tyf4EAM6JEFfYF3B",
  "key14": "2jYeU6PQMwmdCoDFKZkJiBC2uD5UdHVtSRrBXhWPV9kUfTaUEpWx3CErFDnKrkeqkALjBqSSFrsrckQnmE9EVTSm",
  "key15": "4zhun2qKsCKCsn29gnemxbcs6JTCaZaEssCidUdvk4xDjw2iXVKY263PKax8dLv9UFvjqkCj2wv9e1WN5nHTSN5T",
  "key16": "ZtYUqfEYfRtAxBAJFaArfRSwsN8v1vDF1JcCW3FpzGyprjiH3si6e2UXvbk6kjbV56HTWNrFvvTLS9LuSEhFTqZ",
  "key17": "PkABUdoAVpb9CWPNGMLDT4jZTbn6Pw8RJ1HGsrNQgw9uSY2UCJDKacRdcNiEWsH3eNdubTzBCQGh1Njp17yBVBa",
  "key18": "64BLWhhwTxkttqwjy1DdVBsWJghxnBgZsJp5vHTpoKkVu5VWKrJfwGGQfD2MEPGwCZZaQV9ga8RwUVNNJAWofdbW",
  "key19": "4JXAT9w2Zv8xK2TB9N9r2JQYaWJPsSkyHjyZcQJYjvgosHQqDdhhQTRmX1JFnNTz2A5LrzDj44jjR2ixG8grfXSV",
  "key20": "op29g9h5foRCtTDBfWKYoATe5NC57RoTY4gbSSAuCSN9Y7BcqxprvYgpUm9VP2tC4FVW9gqbnDFZ8GgToZYD2LS",
  "key21": "2BN5vC2QmYy5Uy6WUvNXsgCBLKzbzfRz2RVWCc8XfUnNCDgPpocskLmUQDoxQLsKaZwRVvkP4ybs4KFSi6Pm8tY7",
  "key22": "4gB2jAByZShdZf2RNhmwufYW4qkth9e5i1AHMT1MpKaXVhgKeEGMPrZSYSTP3fcwJLucNJgXkG6BusrD27ZyC3dg",
  "key23": "2cMSH58RpjyF7aVodvbktQFdFopCdkXfDo1TVcVWaToEfNTcdPPbPrpuwnrZJD2BtZVqqYuSnKsi2VNYjj7Fv92f",
  "key24": "67cfLKDCfbeFhbSQoNv5FxK5nASnLSX9mcAhyPL1VVRNi5tAjptfTsF6vgApP1k3CPm9KQ4YDjPsC7BmmB25yfGL",
  "key25": "3GsHxNJkB9eFFFneQVtdYrcfWQHB6MRWFXJMW77xEHnYpQrv1jfSVqj6SV6rDZkRBzv9YPR6ESeuDmY4WP5LjCpb",
  "key26": "5EULxbXTq16QKsmb1iktMYBCyFHsWdU5jGsBHi4PxksUrTBmCQFhmvoQb9bwx4SaMf78hAdHCTXugEQynuoAB3uY",
  "key27": "2ZfPMmpUo2ZLQSmbHLCWBkfrtXTXEpHMiY7DxUJa6FExGbUKmmmc42ZarmJdEtuYetXh1Dz8BYrZKHJaELcSSHif",
  "key28": "Naoqn5dBXkxkgw4BNd6M5vqjhUUqDcZTCsiAvg5FbKPFSoLUkhm1W7yGC96GXo5SioUKSsLoXo6tVEbXdauqXTe",
  "key29": "2y4dqa1ZjqkxTxmhB8XgAEKrz6YRQtjBWLCugVbMW3eJLNah1min9KyZST9CXsrCaxpws7Rs7cDfMMBPwKmqoqHn",
  "key30": "GyjrGe7diCqCab42gKaZaPtzSMxvkZzTeHnWmASRg9ssGBcpmT55f8EQHDwWvtQeQF6dkXtUXWjxuptncDeUMoB",
  "key31": "36n7ebSzi4ofF4zr39Rr8LsnmxwsZHKWSPRG55xroFzECto1zfAyWHWGW9tWnY6HjP6iNe7JvFmUaL2Y3JZuyJAo",
  "key32": "3J37JciuAn52oyan4SyEtTT32Te5aHqDRXMHhMHc5wrk4pJPd5LTq72isAuTwmG94cE6s4hsaQvwUQawH6X2Rc7M",
  "key33": "4hwK2jzivUfCjQqcxzUX66AaL4dhMqSMLxXfK5HXR5duXK8rzKAmTvsn71v1e5BHxEX5onoxJ9kXyf3J1TtsU3oB"
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
