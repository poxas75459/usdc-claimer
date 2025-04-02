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
    "3zhrKxs6GbJPvfThQpYb4REu2Ej7upAJ5Nc7LsXM1oiNGXCvC93y1rPKJm8XVYafJQbxojmPAHNzJHGVogvRXX7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WZeRNBnqYkod1sm9hfH4AQQo3xHZm4RmfayzJtpaWUDPQj124kCcdRni261bJ3Gje9HDu9oUdpnAHf4h9xA2fQ",
  "key1": "5iKxMG1nrMRHp53ixFSTJ6Avgy7whiW9iM5FMdW93oALmpuYCLBk1iAxfBAfHfdFs1xcYdudLsTPVKQEGyY9x57",
  "key2": "4mzq8j9shyZwTDGug84BV8pZXEQ8nZri5yTBa268QfJkXDJCDRBaax8HMdyrGUpWumkZjAHDEqGH7934DqUH8T1p",
  "key3": "9R6Z2U8Lus1dZ7wtZXx5gUkhqMhikUyq2sPt9hwU3TqKY8vXgvEkGQqvWgPCiv698FpsRWAsfDpV69DTiR5ChDZ",
  "key4": "5NYGsDsE5sJaHLu2RhVRp31x7WoEJtwGc7263FyqVqu4z4GVddFAzomcCU3c5GJ3b1wbQ1qCsKUt4R5PsPH45YKL",
  "key5": "2ArEznATDHni3KDD5yRxJJc4Ycc3otXxsKwXMeu3iPWQLpzTRT9MJ2iy5U7hYgH9ZM8YSdhsUtgQUFZuvBcBiLGw",
  "key6": "2BLZfXg7ZGAbs2JF4vs1fGAEekcMe3cxDEiuUrthzsK172Zhxto9sDGhDTx2EceCjU4xRaz1bFzx2HJHsLziTQd",
  "key7": "5DrpmCLnsFzy2y6ZD7eh3jZv2WBUSbqVFiCkZmmqUwgT2n7KdJUndE5mXdR8QtjsrNbAa3oxs86PhXSpcuCdVhbK",
  "key8": "3PfF4PmwSzeN1EFh8zYU1p7rNKP7Y8Di5j366xgneiZUt5VfEKD6iQVY9xzwYrNBHU8jY7SKKSq3c2joq9VdR3yj",
  "key9": "66pRG4bqUdNwoGUpWC2NBd4gi6ia4CVvEePNSxwFfhuGGPaswqPcHs93is59RW6CdhHAH7KzvfqGSojcqz9YUnNH",
  "key10": "3NnjnYAnLZ5M9U2BZUPn1MkMyszCSQYKH5u9g9DfPqNU2PqdFjX947VZsVp9HsyXo5Sv2gpJzX3re6HjdwCkTtjm",
  "key11": "31jzt8QDqbpc5AdTAS5CUk88kL1hFceX8pxSJgyKC2ByfRSRbRFyBnVNqmWhvL7Tpv8UPEXM25wsAv7gUrFj2fcB",
  "key12": "2mcNma9KubB2gQ1en3KuFx4mNE6CTj27su1zBCQJEmDEwzW2z39hurnASppV9yHbZGMMBG6G8qN23G2YVCU8BsLf",
  "key13": "5Df3EasoGVj7ja1KxF7KTySC8K6T8wJwztf3M7aPhk7TFsdQynrWjwcJchEzdMWRJ5twu7ZYfpAJYgGhSePaLbcf",
  "key14": "2ySSakBcRBMpij3VQZawbS7Jw6sfrgzEGLmV36BCGxbohe53WXDir9qBxKZQhEbe6aqX9xBZj973g1rXeTjRCSJG",
  "key15": "3ZSxEZTxKLh9wbRYyLPtJCbCBHkHuaBCRmAYEFrCqgsF438KxYvbx4yfeexzJwyt7hWXc6CHob67ZfU1mgWjXaTF",
  "key16": "ugCY8nh4XuMHRrFpsSwLZkCwJsQHm4d82HarSHLGnnaNkpjpoVWQXN3mZrkWtgaYMLSd9C86HdqcAqo4nWpNpKZ",
  "key17": "4aMCBu82Wpfm474iJKSjfVxhLSgFJSh9Qaq1Hzyw7NchJKKMD3UsW8t3z5yM5smv6Nr2bCZzEpQmiGrGC8uWZ2x5",
  "key18": "3rHkheEdHAwxAjbQcrrVRFkSCGTyYMsdX5xoJP2efCyYAGnZmLjQQ9YniM7JggtYHeoqS7mvRNkJtxt6J76hXmri",
  "key19": "4km4Uzh9U8xa84CkNoZj72rATRBXiAZ3oBNCVBQg2RHqZYYuo5tBpYEjVLRPb2uFYM35kC62euR93xba6kCWiUxd",
  "key20": "2AiwhuKCraWp6Xs7paQFB1Y1zyZo8uiGgK9Ft7qKwCneZELqmFFsRerrapGJVtsUPyCpQQHhaMCWh7JqME3CkTmz",
  "key21": "3aLTCFXcRt5Nf6Qx5kibu345rqPEM2aXeUCddge6UYossA283RLGg7cmUACoUxUq2mohWMw8M7u2baU1BRAifsWP",
  "key22": "S3peZKUT4LqSpfGiwndtdhm7TXfWi8T55AZQQeF64YL8gidUsHv1FZ7MECZNLk7s88gdrifxFBXqeAN39QKdE2L",
  "key23": "2H8ubrsDiSTtKRp8WBuM4oT4fgBC2cPDJxqPepva1Tg3bz8qibvoAbns6v6ij2CvYaAewC6C8qkWr4YcVPLCs7mK",
  "key24": "2rNHLyq53X8a3B2qXvKyf3J9TJ1vVK4M3SX8azNKXDsNx3vKUixQJbcqN1avfbh8NujVGndCupEaT67y2CNfbVQf",
  "key25": "3q5ad3exNyyJA483X1UTaCSjf4yF64YpZbGXx3YfwsR9ZUmTk5cRoDAcMMhc2aMXsAPNWf6f8adBaYVSFjdYHL9u",
  "key26": "2Spo1nBY1ZoqXb9cFGYATvfQ7VoANh5n9cbfFdFCFvUUyWEzPyjZRDAgZDwVfbsT4DufQQTSz2u6KG8dhw2WpvKF",
  "key27": "3BrSd72R7nb5MQEYaAuxACgwszYVEFToC7ngdMjuiXCVMsTYm5eMeyhMf9m8DzZXV9Kq49jGeMxSXf6iLDaHyA23",
  "key28": "5qXLtwEL6KcM6iaJeQbA1tFU1PokQMgKA2oQVmtyLug9Y5sEL7u8oSXfoPqBxcQ3h3mwy1VaHqHgF5N9LAocziCx",
  "key29": "62gJvzzU5Y9i56b1K3fTNieLB3JvFcNgnyyUPKWtJzjiH1Eyxxx2s2JHPfKdJbcPZi7zbGZJLB4x2feNjbP4GEEZ",
  "key30": "4v3KVtrHR7CeuF1TeWUMyJwrf2RyybYVUj5gkWCJdh2LQ98uG9E9n3FLuwBRtY5TxzF39dqgjLNYyVWq3fBvxJPn",
  "key31": "3jVw6gDNWvEPPQJGbP31GnGXUX6QNZeJ21u6QznbuKSPk9iPXaNo7JwQABjH9HZy47npMgrYFqy9i5X8uwvbKPFR",
  "key32": "592cyS1brXyKkdrX8kGahi9ucbPVFZE3zgSHy51uLrGSj6R7R5D8vUvkZYc1v7ye2ooiLsARetAz34dPBBrTYLUn",
  "key33": "4dSSneQ9upgcHYqdP5cU1H2c14LTPek9HNjgKS5pYp22yBfRuoeHuvvHR6Gq8QH1eS9rYYTT4nfiDoteDprqjiJM",
  "key34": "5HAa2a4LCNvz9Xbe7Rt897chncedxkYdJNkPqvpv77kSM3swcnAJptd3v1zMAFwycG81u2jLRtCWHTxmi24PmvkJ",
  "key35": "7uAueHDTtmuaLx5FgPtiCzPmtyrLCMWbPA9J3t4dASB7zezj3YB7sNGf2fGmBZ9mRg1Ycjw2SZZ3nu9K92Ra229",
  "key36": "2k5Xu1pGeK4UwpJbmkauv2V8WkATAQYMgP84QvXNJ5wAqM3iaVqRfDbDCQHPkYqEPg42MDqPEPmxWG1kLG6FpZNY",
  "key37": "qQsCXkpEG2eTuQpUq7TD5sycvzf3QdtkkhTUtk35bhoxUijRGrbAGDjF6kB4kvaVQim1rumAt1YpUsXMBCS4Rq9",
  "key38": "3qramVHWZXRV5of8EtBtDvV1BwLX3ZqYPhcT2sqgLJ9UqHQZ6u7Vdg2uAet6CBMopUiTSFziEdxUYXaiWqg3dUYk",
  "key39": "2rLscqcQNVAaGq9gsAzefNr7tLQxs2H5wMs6Xt5mLGAZPo7ZbzSmQE6vvmdPhvebFhvWisKs1LNUCBjT4DUS5JRn",
  "key40": "3QDSN5E3TGsFMMpfHrHeCgNPtp3guhueTwmnxRGY7NNmHYtvVMdr1Se2AHFLwyV5gpEHgjmckFQYyRVQixxEHs2c",
  "key41": "2sbiNNMgv99Ei6UFgd1u9JfBKqu4s7CvXnVkT1PMsmXMBRRESpFQkgYJSQgp4eX4HK4zGie2XqZizihb2WhrTt6c",
  "key42": "2jjpdgVP7x1F7yCMs6svUTnFoTyyT8KD5suGyPrBa8Dau5CDKcgNAY44RevEBVg8franj1FHYUsUt4ioj9mqqcAr",
  "key43": "5fmCUBC89ivGkoLmbTYy2omXVYp13Nz6H5LroB4HafVSUAsrmamw3hwhABmcvWtERtLCzgcrLHKY5nH9pDdaGsWd"
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
