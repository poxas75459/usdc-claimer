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
    "3r25snhhd9waQ5UUZwNmi88gebAuixKNgjZ3TWxDbyp45TZeCRxoLyMsfVtLKXvkTpqgsogC7uekrkPJoev9VknP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GHg9qXPbSV7KTQGSFZKrGjKWnkZdZ3VPz7m5amJiRr7o4Qp1LPDUZKFVujzKuqGo4zD4m1bk3mdAZ71fs5ygG4",
  "key1": "3YhrAZQEv8whpz3Ms2ZsvbHxzxz4ZWR9nKrasTVDsJAB4tTDVDVHvcsJ5PmgqSN43ZAnzMSxFsJ8EU6qboRjYJnd",
  "key2": "5Hf3LX7TqWvzKz8wvboiiF52AGjLaysMGRPKKFSjoqdyRvia2Hgv7qYCLsht2hrwaJTiL7rjfKe7zWVvKZFG7G7w",
  "key3": "2XhhdpqCs7QtdsfZVAoK9mQcDWtE2wYmUgx3rgmZSJ7tpcrmwxYkR44noENGzVst8VvnszS7hddeVrb8o154xwtk",
  "key4": "3g1M8VhiytLDFTHtwKcYYZFWLktfSCqu4Y47RNUdycAJsP8UBY2Y41SHM8MCRX2tPsBtPp6m1ysX35ttfyqo2UqW",
  "key5": "4YByEeA6j6oE98aGjbkp7mboNpL8KhmwZ4wbQutZkTkiSCXq9AZPHGfvo1QAJqXhysU6eJbAgcWJun9rc6AejerT",
  "key6": "5w6yQNPoh8sS2dfemogvoj1Gw5nvCypHcxosGAEApfUCZFvqT7USigXAJdFg2QGKbkvyQrVMmfyzZKRPrjrzADTv",
  "key7": "2Ndrhmn5GfcJ9WG4yW9snykzqZ7JyPJr2wWPcoqwHUAm5fq8qhwT1wBBZ5zPEjcPHBJJ4oEAbbpghagwb7vju9Ru",
  "key8": "YZ4diQ434eM1abWh66KS72d4yMPe3upR7PpBEC3RukNF8r2ysErrMiPPjZXDBEtzz1uHrUXBezCCq3m6LMWSuP4",
  "key9": "mVb87QYVQBvr827EPkutfgW4snCvN9QLWwyGcVoZ4qrKfn29cuLK6hPotQUTWeYPwLMHKos8Jh758GXg2LbqrbM",
  "key10": "4VBsrQmCg6uY4QB3RLpvjDyHkcLWtWXMijifPCGe5Kw14GvJsYyB3VBu445WboFJXVkvwTgNSvKRpkHuRjRzuowy",
  "key11": "2ys1c4ezwaB7aut7W7gzT9u5NdDXNEBRpLAD5C9VtQ2DbNJ3iug8cAzf1n5VwrHZfagkMLmyXuZPcopvXcCLKYop",
  "key12": "DswhYCesr7x4vHaaLiLvLbJxZHe1PrNJtjN4ayeyP98c37dn8AQCHfrSwUVLzY1HimC2oax2ES6ZyDAGCT1wL1s",
  "key13": "5kCFtUwP6c6zWDtRpcUSn55uim1HuuZD4dmaQZfUuzENcbKVqGNL3bPQHtS7ZzyboKax2KPBpXW3mseZPuDGsSwn",
  "key14": "3yXKrv8f6k3R7Jg1zKyDbhUCZddXcduZcxRHR7Qbr9sg2jtdbHLcLFHSokkewkuwMkmUFgZ1zMTQ3bXAU3VECUbD",
  "key15": "5Ko2c9X5Rejm2hWx9a5DWA7qbzmG9mFW9shtm4r94bTUTddXGzniDPTRyYt5Rs6cVdmorUdDFbj946ro2wNGrrPx",
  "key16": "43LXC1h7iN2RxnSkYrEQDPzqTxg3DfVt6B9vEanASKjdq2cSZVS5N6yfWieXnh2rFegzCNNupd3vck9sByApgyWh",
  "key17": "ZxDpDgY64a94qJ8XQVXMFLTdqSnarrDkkedFB191vJNEzRspJzLxLsSaFftBTJze9bC7gaDsYWDF4AcBDTC919C",
  "key18": "2JwtovQsZK3N6mJzKc1B1fm83KEMtQh7e5rumsePEmVnKHg4oFtmJmf9qC5my7wXoPNe82P8nxbY5iXFxp4LKcxS",
  "key19": "ioX6JTTnNJHQAcj6ciQrFUgXenPQrSvb8FvptZQUsUnXS3Nw9R1JEfVy2nY3puwzxLLmwVnNwT3BfvqFrZVTq65",
  "key20": "1VpntdfSzCJACcuVJTZnbEjone3cyDURaK48D2BvMRpCN2t4mBjv5pkd7rZ9fjesUAcki2mXtS9EeZavbKPzAZm",
  "key21": "2aspMqysksy97TvZfnjVMiU7cpA13RsaUxebfGCG371sAyc9cTKMUJmhRCnGms7zpQnETPzReVZoCRy6vkLRnRND",
  "key22": "29B4hnkzaamLK8JNJ3x2EQWKMGaBz3W5HCVr9Ghwz12WEG8cNhvPpqppCKkRBvhEhQDcF2eGxBjJ39Fo2Jrgxxms",
  "key23": "63TpLssRH6M3sBRGkHpcuTWiSLpEx7nMdie4iosu5Qdk8fwwsXfBKQyaEqqXdJz3noGQLLwtXCNcmfbppPVsUpE3",
  "key24": "nAX9KACr8sK9ZEz3zYAcSMNyfnY9DC3mGXsJAhgtm2cRx9qxYpCndJSLPsnUKWeAW7nJ2kfuX3J3BpTL4bZXy9b",
  "key25": "36t1qe5niMYEJDXAhnzavyVKD5kYkbBzQE5fwftMTBoLeTeHs4LMeGwfS5YRtvdc33fLePDFn18Zh4jrFUUvtB7o",
  "key26": "aV7pTqdSELsoRMZndPEfpk8Xw9h2oGbsYNx5yXmP3AwRbRmTtC3gAivcUbe4SwLUrmsgr1YzanZJy2iBsMtZQJi",
  "key27": "2G3hy8ABgK8xeuHniKqKUy7zbNSBKdQPE3XHrvo1Ycb7tBSN13iKsVoGrnpvndYQP5ojEiduEmgKFpqQH4h6uv67",
  "key28": "522qyyCiHRkBuHHDjmbuSnvrJswdfw1WcFKMwfpMTnYMFwFcrBicr8PV5vW9QUPVbWutd5QKTMJ1bZWMvmwMPcKn",
  "key29": "41JRarSruVJXqvYGH461HPdpXP7NVTW86zwXxrYD62iQebQ9sFpbEHrEhAjZskgYoRd2wS3tYRbtowJ1X3NRRLcB",
  "key30": "3k3DNokCjCvqSvFuVSyrmhyghmJpM9AMfwpK7YxvvEv13GXZtct7BPicjaBurUqyrCznSdrRPi4WGy9RSTojGojv",
  "key31": "4oqLPQPYTDm5txBEgCC8FRtYdKMufdnnGSq1pFmpLGKcSaQ3hKXbPrWZgxCaRX5UhVtnxqDuSKNro7zZPUdki6qB",
  "key32": "2uqYAM1nMNhuaQsncRHBZYaa97RQxP7Xx7W32J4H4AXpKaiUw99863fHruk2X84zDNByWfWqVMCvtSY2e8TssJ1c",
  "key33": "Wq39WGWM7698wS5huBmKcXyLjY6JQMrfxVttJ9VvsAFjmPzmLcmfB9GcGkyb6PCcUXM9VKadQFgjtqkvw8vr4jU"
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
