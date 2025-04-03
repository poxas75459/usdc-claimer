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
    "2NNAULzQtC2xtZ5AKcVxkJAzfFBf7kvCFbPWa4RaNhUh41qiC99qz2X6syNRosnPMiVv8S3NHHsKETcZQ8E6vvFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVPmreJVKvVsKr4PKRE1ZJLwgJPJDbjzW6qQsvLu32PESvATeRDRFBHHT6JMGcFCvrjMpuayrK5iBxLiygc2tJT",
  "key1": "2PXXK4TfWAH5mRRHExZCjiDCirXGdkdrpXb1i4Su7d7W9RZWATjNEomPTC8sZePZ3b1bCX4mi2PUd9Jo9yEmXCGE",
  "key2": "5hxtXoMq7Lm77pA1r4wxg11xD2DmTPSkv9PEQfJwLLJFiY4gTEjZmxVyMuHuCRFxz9LcEoiQnrQQvApfKW8T2Sun",
  "key3": "3uY39i5VpKBnTmLhtes7S7PBTZnL7VL7d1TTHqoQmNWFGWcxruSnL58CZEAasnDZ1ckqQxD9Kzf6gNLpEjRjSw5S",
  "key4": "3jGJ48veQdAFGrnaSgXaqMuVhmoupoEUFzxgo3VAd6byZjYfZ3Lsy5zPYiV5mZaFFCyxtQ3YVonHdiCgsCb628ZG",
  "key5": "ETYUSmsZnxb4iWXpXwu7L7w81WP85gRNh29fZqY8H1xr4bwzocKuvW77sk84PdqhoFM6SLBUGHiULzAyCApbfQN",
  "key6": "2WAt9cX45sWCzPAZ8JcJrB45hftsk8hAmq1y71Mk1gK8HmsZr75eARDeuLFJQ7Yx69LKHqj3thXNPmj6kjKuUqFL",
  "key7": "akjww1oBHuvkjKH8NipKFawW8ebUiNeXh8xxQzfVNixhF1HjmGkBGJy7qdPCyBqSwYiYcYQdyrYHuy2fhPjKrr4",
  "key8": "5tcqbLKEujMoYCweEv4B8L7Qr8kGkQ9pPqJYHmSYKtc14HbKDPP1MoTnTchSg9EurVWdfBe59rJFAPtsbSMQAcKU",
  "key9": "27gF5ArGddbZeKT6eoPDixAFaZydrkbgGSGnhw6xXdxNEkwa6SECLywgzHoWnJJyxG4eD1SHr8moF4oNRyJNKRb7",
  "key10": "4CuQcUMYUBQAiW2sAtoQZgEpz3TgP4YPxGSRHfpPDvy1q1rgZa6RoKpWiMqxeGuEReDDxV1sfncEgVpkAjasbkj1",
  "key11": "4rTzZaXZeWpUShMTRWWFu6mkxfeCJh4eRwKypGRpUxowwYHfZy47ayyti4byJynJxk6krjr3AukLqyDFE9QKPtAm",
  "key12": "3KdHfUuRstK3QmarsVntofWvohL77CcEZVoqKayvDB2FXHExBae842DdYKDn7cMr2oVb7t46k6B3ZxkQ9jVgtCZ3",
  "key13": "3bwP4ZpYtNyCkkYPq2rfiHdtsw3eHxKtAUP3Xx1BsdtiooPwRUfJ9dZNmuf18gmMGuMNCiDLgjTZW6nzpfPwfA5p",
  "key14": "5jFjgcrrcBnYmtXYEpvpGxxwzLyZawSxLsAsazG7SGz8k12LSt5BR5w9LSSUyVyQGZ37pWpHsxJdkBT8TBbuFeBA",
  "key15": "4gmsUrEbgByQM2imoHanNYm3qVKZq4uQsSqvpv3n9cN8K98m862uHfhx1YeE6AF89wPWPkpFHtu5hBHQCtSJhshU",
  "key16": "M82ZEdcP2zFM2JbGdgz35zYMS6QofnoFtfAuqBKxVR3ah9wevBmiVGPfwgmMMXpNKKCHf5cghU4qBp3pv3mghvp",
  "key17": "4tWnsu4oawuZMCDvyMRa7TrQmiABConQYAEfHxwpKWD3ub2KifMMieduAmv7eroE1wUUUsGsDAW8hpJjPUN5WjZm",
  "key18": "4LaNhDqoSXDoWbJ4qqLZJR9smTtkGSaE7RQL7eTe91P1BKVwajpTuYBHfdeDPakRVARw223H55ung154kudqQ2oa",
  "key19": "3ueBbqU6JBb2sy6N41zBn4EihebgPQgfFGaxpicW1quBibyMxcqxcGkQVFDcGRwBfHyK3juPBsPBEp5125WFWjjE",
  "key20": "4CuCyxa547WYfVG6Myo3CxvtRgFJWMiCQfRuB187Sow4wLdKBySUrBDon6Re9bTDUHidyrHtHh6djxdxjTd2siBm",
  "key21": "59gaTkKMvwKPhtQoqpT6gFfhjcmBwTZsjzJq8pfSceEr1PvNrQKqK2w4mimWMhnuGhdEAZhEb2kN6D95r9oiL7qJ",
  "key22": "2HZxu1EfgEPwBqSv7j1GsnTgHin3ZjwAUWDZZknQifjVadBTV8cUiWygxmrwXCscXWtyAgLUw48dVPx1miGtsCS2",
  "key23": "5AvcJvEUAieUXk7EPzMBeEqgJMuJBBRAaYCk72i69KrhX7G23e1CYZ9bddMLhX61bATSuxXDGfSekVMHzz5pd6Tx",
  "key24": "vK8moGYZ6ZGJQPjprUKL8ZvN4g26mJmGcjDLmFLP6E9AMDDi8LaVJoG2BcRVdGzF6YZDZjiHdpptFLiqxwQ3Vy1",
  "key25": "43eHVgvqirXP3j1fscpFb7HpnADeYz3kSdgrBwpqP7XaQRDJETkGjnamUSCaT1xFysevVX6JKjks5thSRJgQoqzM",
  "key26": "4Z3QgGr2eBF6Ca7HEa3ssPNcejQpBFTQy2THfRAa2rmJ6p3kK2tsSGQ34yF6q3JkzFX1iWYhFmNP2qFZx38VjnU6",
  "key27": "4PKUNMEV4LdDbmFTHHFfQbvb5NxvnqCpiwwFa4hJYU2XqugEJb4brVfSPZmvQ86RXMvrNaGXgcK3cxiQXE6VUnAd",
  "key28": "2GQmH3AKdfoyFx1xFRYmP4gJVS96gbqHjgMqJ4193S3u5kc23ECgxpVJVwnrB5FctoPv2Cn6MBFh5VptNgZE4td3",
  "key29": "cPuQ5tCtBJJzsiDjQK8kWS11qtiY4BBaggoShSAmef5yCurW2Ab42s9biACdmMdarNaMJvFEnHoT3Tbu4PXb25f",
  "key30": "rPZyioPZvB5AprV1bexYMFH4Ry5f4SiBS4D7rKfhPBhYNjTsNUkMT9L2W38htfzNXwZcKMdxaXhHqe2XkuvNSkE",
  "key31": "Pu8HujgyC6aXmhU5Ssd7utT5Mx37AutiAXy2mnPedPsbvEsR67FMQfD5vWNXVeiLpA9ufMMzEPa9LUEf1pGkHHL",
  "key32": "4mFCUdS2XZego9hfzNRywerVUzcFwcQVftmUEvXwgMhSzqyWWkSz29RN8tynjcum2HaJyXvXURAVfi3JinV3TAS",
  "key33": "3CoiewXHMCt1KK9rFVGyUoXvHL23RHFCV3xh9BUuZ95KW8AWFwTNRmorWaLkhjYU51wv128pkqA6GPMdMYkC8xU6",
  "key34": "YmqtPynUkwECeeMXw3qEp1zkUMRmyuSnQJJ3hRS4WK1VyrQwtNQ1Qsm6n4cQDa1wDkC4DTs85nf6bh1SDt4zgJj",
  "key35": "2eEDez4RpXdB5yJw1qSihmhbaRaDUaD1zY2UyWT59MgbqbjXRcxLK56E4XPySKxp8Y2DEKKtyS26BcPAD5m18wgc",
  "key36": "4Zas2a8yCNfUFyt4ntBtd1hrWdfJ5W9hrkrt5qHC5imtemu6NPcmtW26R6ZkKDfYavVzH5uVh3THDk7q7M1AdMKB",
  "key37": "cn3n3r9UGKJn1M3p1SN6bK72khwguCn5hrgGYgaYCyfg9nQtAwNUKFs749quMGzeJp4VpY6osH5xDzgAtCCToko",
  "key38": "3YH73RQoRGoVKX1FqgB23PYiKBzWj5wnzAvAoRgUWx6xsgSX88KduvaKjZLyU1W2fexK7MeDm1f6LevxGtWBNHTX",
  "key39": "4LT77gGQgTxAaqovkWQzUzQ5c58dLKZZU6yeavTpptX8ynbxnoXH1avmjM7rwkjZESFHXbrhbgY8mqDGrcBWDFRp",
  "key40": "523efx6aB17rGU5w9ShBnE6wBH1gvxDn8TYTNUuScQdMGrKcqQ1GHiigj5tZxaBfMk8npEDhBdZNPQ9k4WTKst8V",
  "key41": "2z238jQi2xYQ8ENnkvBDNXsRjmccmurAKRkBYhWgsszx7VHqDk6ZR3CVdCFBfMowzLyUPLJuugzREyZZogNPQidr",
  "key42": "FUwyuTtm48gFzCoveiJJ9cjzpNPNCFmwU8Lx1VSEtSkAMYLtxtWtjoiDxmyAMjDq5kdyFTACh9xewAbmbottGg9",
  "key43": "3aZ2mEGdjcRtbE2FzVkY9jTsU7PGn9WFTCE2v7UXRKFkWRcfoNib2rZQteubmAHQzzQgVWxcXMn3gihmdbexz7BZ",
  "key44": "VPXyJXAAqD324pc7yPHjK1qNHUNu263QdFVfkK9hwVgu4DB6WX3fWmdQVGJsCvzU2CRZm8pccemqiSs5ooNGHXG",
  "key45": "31aHFPaeTUxZxAbrae7ckEZpukMuratizcySeHambPhrGxSUkizNRoFutgr9muaEig9QMCGxDdgywD9DcrZhUWKx",
  "key46": "2kvHzW5XnKq8AxcSqiGgLRz6evEEYn96Ufo7RFqWSHXewcodzPmgVc4K1SYSZyYZpSJMN56ti9nENESje4KjsUh4",
  "key47": "36wVRtjbohVdpqngutn7YeJ7CEBsBcT4BQvfKLbbwtmLVxRwNp2BAvmq6FWWp1Xw4Nh7TNDu4AiBLrdP1ZQSEixj"
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
