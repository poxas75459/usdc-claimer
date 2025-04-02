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
    "32cShhRBYeFdmDRYmFENBCHZJKN6Mffdvaq82iYXsEAE9866NtNK6dLhFf7fPj3KmvB9HunT7By5NrBrc6St28FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmTC9US7fRuNEiNpGetd7tqJxzj7Ji8cT3MnKbTXgJ5euFmXJUf4drVpaAdhGj8zrWqUhsYX8rGrnrJ6N34jSYD",
  "key1": "5Ke7y3mpdG9LyqUyZxdRNTgHpcfWN52LnLTZV7muTVEc8Hcp2yY6BHZNFH6hD1WrQyDyjvLeeUyw4adnxJbKabQe",
  "key2": "5aWJFFnu24qwtjkUcFUDRZwBQxiMat76hQJrYuM98jg73zMGGn72UFjiiJfvsMamQBdWmNo8dsbmV4CquQ6A3znW",
  "key3": "4bBZ2PdQemfmRE9kmu5fVgYcV8t6AgAL7bFfJTjqMEtTFv91j2pbEwPCCyoAX7HApMM1gL5SXF7Yo1sidXuoPvuf",
  "key4": "pSNxRBsXYMs9jwjXHg511ZHz9tNmdEbMrNDhoxHPQ6jfNrkNfyQYHV2GyBLBxFaWkFHhVwfwZ4YyNt8Dwg4BnA2",
  "key5": "2kzsH4GuxHRPLqbqKWHXHQuMgeTGWPjWLVxggvvG7FbE9J6oSyXhc9Lx55Bi4kwaXiWpTWJ6zwQ93JJWwX73sGXW",
  "key6": "3g74RUsxokbdEn856f2ENvarbUVgbZkZUhFPBC8GjxughvAndhmaWqB7kokLS4tcyQSXttSxWYgbJLMkCxhRxXB5",
  "key7": "5NCG8H2wESQ15xCz4a1GGjNSyXiE8GxWh2aHtuREzJTYQFubcfCjJGQU6XNKKNViJXn4NLs3TsPwY6Xm1GeK82Pt",
  "key8": "4icbczx9cjAFsCdkvS5ihLAvyvHR5usMy1HgCrTBra79FANfcb5k7DfTxJhi2oqFH9tdEqcujB63q1wpRPqpkBbb",
  "key9": "3ZdaXogJ9hmkpZ51UMa5nspwh5QSGHD3Y1vZxueABLmnNUwQKMRksj99dd6Yj9ML6zsUVnVghC4QosicqW2nZvLm",
  "key10": "5bxdR8KonMYVDt4WSJhwX7MgUdSu2iP7UzAgwvwjuVvySuSzvLqybEp2LdRXjskKuN7CxEZKbDK9jnC9HdLuobyy",
  "key11": "2KC7WYNWwRE3UMG5V7GjYAsoXhYzgieXE98KcqDh8dKUVQvD2V42RD13cY6KqJh5ue8Mb1vHSY4S9y4V36iCbuPg",
  "key12": "5ohBVPqb396gejsefAGCXd9GBB1RUe4jyoLyufe5MmjPFfxrJmD7Bqw4T2FVBDYd3Y2dGmDL7cZSHj346WofWBnn",
  "key13": "31XnRneJkcoxWQCrSFFP7iCG7WmMxcXT21DzqQhGvMprXLxAHW9uiKPd9oeGBhjJFzU8oFbwQiXNgJ63dy3qs2Wf",
  "key14": "5ctE45m6j1Nq5ZYn95WkH3Yo99vPDLf165dJX8buhayTEFHCYxH6RXWZTgNYyQiSXoPJytbG6UUJVqqjFtgjmwp1",
  "key15": "5YtRShEuMVGqk8UZEUj9gx5cncN3mrpoUu9Ur2KRLT25E5tQVZWvAq6Yu4L8TqHjHMH9D51E1ncyRazsPfkpVhiF",
  "key16": "238NuzqTJAi1cS7KxxwriDiyBLk1ZeGnbH8zvEGWT2bgdhVEeGYCiWhDUrF8wbKtSATiRvDbcxRZCqQqJYPAsJca",
  "key17": "H5nCcFU13rb235mvjGJFTLss5gWsbX2k1DFtZgDrwU2gs4wio9ia6enJoD7dMnrvXVtYv1JRgRM19CvdeiSQMSF",
  "key18": "3fEYtdgoxnm62JftZLnjE9sj5L43JY6FYvPn4WqbYpea8UZQLEVxGo668BWErPEMXtrV3ka6kU3yTKQrcvapki7Q",
  "key19": "2aBo97Gz76h5Tn1oYEo45PFHuyvYvkh4qPXr9RwtNTKr8fof1ow6EByGb4Vy8g7Z1cjxHdkxYNaAfZeN9JhShKHY",
  "key20": "5YXhv13EM7iG3xAtFdUSynDibACkmc7Eur76mxeXYaPGPDFfd6rzSWsWGSqoadca6HxVEyegUzByh4dnMj9aB7Ru",
  "key21": "5ERNvLTPQJ2f9DZupDfCMMFcufgDj3Tks6J128Ld7o2DbKKhA91Sir1TEYvkMPccypyGmsWWqebGLzMGSQXhiZ9c",
  "key22": "5YdNwdG7ZhiWrXnTTbFVbNUurvjf4YFWVRmrDvVdFdcbDZZupwFqkg2ttJRWMMJPY28M3qC92LJQFTSDNKCQgTco",
  "key23": "4ZABaR5j7qbe8q82rTEfbVTkwARXttLxEcYorGLjDcoXAmuL2XGZpK5jACSTMLHSK6ibzrQE2fdFF9g64nC93UGK",
  "key24": "2vF2DC98agtz8W4GAbdjrXTtR2sKHUCvibbQDH5DiZHWHQJDRUVSTUmwg1HDuEqMoxC7QEgKoqbACXKA5kkKMD7f",
  "key25": "4LXwQYTvSpoXwG85dVYatH234vcoayksze1M3yvgaS6T5h6bxBjQU1ddXK5DBot9UAw7JQjpqz5sasW59Mz3HsxC",
  "key26": "sHX2VXW7k2snJdc6WNZT3Vc6eAL2e2vBC1kSiCPiL6e6Neq6TKf6CaaDvzAiRNQrRYpBDViju6EXXRWhG9YTM9Q",
  "key27": "3PvmvRVKhs8MdbeAsivicDi48GnJRpF3sxg9sBpL34uwQThjnsTnH4BaGagodXcYhppkCoyGMyxWBqmcxzcFTb3U",
  "key28": "NQFUVLn5EgrmijQ7fW25VmiuLCRJvG7utNeCYG1BiwfafELLC1tHKrXhFLEXh34Ec2z7CqSm2qvbK8yP84PB39V",
  "key29": "3kSNsuu1fuZzA8YoMZQc7Dy47HUHJU4Cj3YcoGbioLwhTrkZHcdjTwgNiy9RbLxc6X7ENSGz4J85npec9R7UDa5S",
  "key30": "3z6ZeLuMJbmDATyzmWQoLKL75x7bqAoRMvciuGwxrDEZoyUbTYAvjVRTfTXihUH58GUQngFjzZn8JFXJmU4osBBd",
  "key31": "29wcqRRgsjYBkSvLN7dvXmEgieb71EjYKWTyfxys7KhipefjGwYMyEpLeenCkTfXmHXFY3M1BKudekrtxofvM2ae",
  "key32": "2LU3okGS6iHfwgbSQLFmcry8peX4D1TiNBcg3WNiqhDTPtt3qwnBkiEjTo1LaXB7MaEX1KMRP1yGygM8ibyNWgWJ",
  "key33": "2735bWTpVSyqGZAGVgNQuTCUF566eiaS5nrfLJWGGUZNBtM99rbiGV8Ffra5E9u3MTL2ARcFQGddfX5bi3fb6GYN"
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
