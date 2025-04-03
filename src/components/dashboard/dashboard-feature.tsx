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
    "3BCPZPzcBAHxbvG3o23aegPTYvoCF6GKtFHa72XeMJWoxfPKtSbn6kmgzZ5eZywrYo9HNyBFg8LyHK3LRuqRcuMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cq3dTx4ECtETpCK5mfcgZCE9aVC6ryApiUEpvPAWXQC1a9MtnbGz8wBpQqJSGdkDLw5zPFu6uggnRPE5RxJeQtF",
  "key1": "4VxVyAYZoqoXynnChGKG8DzYT5csRf8rdJvYwgZjpHuw8QZt4i4o8Y9fUydjdm74XP3ATH1uxpoDgXhpQLmuzQ7m",
  "key2": "4DjZsMg6wgLKADgKfY2QRNPY5939Fgmd1hviZwoY5X21xZw6sGegsF3MqQJkmnz3HsxtNf46KfiwHRoNsRodFoUL",
  "key3": "5ugxfBT85FjGCo5iKND1J5orWUuFvB4M8wRS4SgUuXKeHainKgodvSiUnaYff67GjPumyduCq8iabQB2hiHpcwE5",
  "key4": "mV45dbSs6yvFQz3umG8uCFShBm5gmHMNvEWhSbBUoZgamR6ocNx9FwhYNcJDDGR8vV4Wu9iuYbto2LhrjUyG1Nj",
  "key5": "REh4NarJLvuNkRK81y6JzTiHT9eR8btBrvTBdVhLdbUvQ38f4WXwEjXgMZZJbLPpv3bh1SAXyqJeZ1pHvY3cR1U",
  "key6": "27GmdDr3cJLxnBAedEdSEQXBdpK49juzNKmjuiLAh8byS9tZkEvAsNF2dGxaMGGHPyNodYtzbz29SnyiCKLmqzSz",
  "key7": "4C5TPuPFRJHLAMK5uq5ZthAognSoFCTuCaDMFDtZHEAVR1UkifNnVqGbn9AhQKgpvajEcBvxp3C9zvGzmewfvA8L",
  "key8": "v39nwpiGgvy4CtXBWWNhUKfWfNdCDHErYyD4MivHrQ3gwbB5M9nSP6Pr3JDQSonz3XUwbKbYAZxRQadF9ZMD2Ua",
  "key9": "4rCeVRopJXdwwnD48D7x4amCBYNzKzkSZUf21HqDgWSHjU4dJ3kSHd8GBXNV76x3uQTVc2Sojvz78cVRwP4UNE7w",
  "key10": "2BBxZyhW7q6VMKNgN4DoHLyBf4EcjxHTRWub3e8ezMxbH1PFTRHLmML3oYkZLgEdWNWYDBBHrHcVQQkUnHftewcR",
  "key11": "3mzVqQTPQdRjVtrm9VeGMAVZVMNLYMFa7RjnTYZLYXwmetdW1igq6gx978xoaEUpqt2GJFmrFnkB8kT4dWocgXF3",
  "key12": "5TYh5h45VNMeLCqBtSjqzHxqH9qqge4q9MJdKvsAMRpAX9JZfzgcwHuarmY9jBis1L87MBJsBk6c88Z6cYY9J1Qj",
  "key13": "5tnVZBusWRLQVrzw91P5gJD358S3KwN2mVb74ZgVRg3KK6FN4QdbjfVZT4HsjBdD1QDmTDT7SBemLdYEgxDP5Bhg",
  "key14": "4BZH1UGoQrpRqhNZefr7565ux6cfD6iQCLsQeiixQrE5QQSR2JF3iVGpLh7FSXgLupihFRyBsXSK6UKXhztrwYad",
  "key15": "5bWxiCU1wxighTfL38ZiPakzLjw1HfVaV2otRbnQN29BxYdy9jz9HcBv4FrHyoj2GinQJNPi3waJ8qyJ8L3iRptB",
  "key16": "4hG3LEVbsoUYP66sCVdh55DEDD8WBwgqMWx3zgPRWHwQTiEWf3P2Q3nJxPBzTTJctfEu9rs8CeoPn7LrymvCLPmB",
  "key17": "5tkyRjbPn8pp2hA2bLxuX49QoJAZRtGMW3Pe5rcMuegyLkX4yFAwfC4Zi59HtvUgW3PTo9Q9DdQBGa8W3xGxTN57",
  "key18": "5crvs4bTZuV5qtbyo6i92g7KdD33XfjBkQFX3JiStjRGv7ZyUfBfmrf1Tf84AXQvkLCpC4BTFwTqxQNq3VX2keet",
  "key19": "5JeoPYVQmRGGXQsGV5UVWgGWGsZjTm1YC757hvw1iqkUu5AQqfrnMGqVdyxdotKP9ugjnFbT8qySLQAdzzDrpzEy",
  "key20": "YUFu7o1ap5mVDvY7vkbSWTfUj1uep1RKbQadn7acUeSZZsWbZ5yj5ETxnjZ7b6o1cKEGrQcGg3a22XVKz9qyK5V",
  "key21": "3Boj9eC1RPtwzBVNsgYyNvEcLucwUEfs6eojwu765GgPuQAAcZjWj9tvpM9FgoG7FcmzFmvu1WxSx3REXGqBFggE",
  "key22": "3zh65GkqnCUboYXDeHhqNLDGNLRuzFaFmmyNUCRMyRUMb19Dk768qRvYWbTLsPfjepGcftcWnEeTwfMKuBy5mRuP",
  "key23": "2H1H2c4DFvm6ZJik63uw1jGUfS8sA3UGHkk4ag12XaAiK1mGgeG5L9uojSgKVv8fSfehD69i917thHThEkwyBXU9",
  "key24": "2Shx8EuEfGuqCPiXyK7A6EZLp3AErT7wWvb8hR1FUNZrjv2VDyaJsUo4JeTQXLktVJwXJULZRmTKeDjnNnvA1Atr",
  "key25": "31rHRmPgHdqxJuxFEujmkYq5nFFoRFNuAMuCJPbmEm4L7oBjd29K8H5Zrc583P7mRgjXhMPt1MESNBiMBJQVJfzs",
  "key26": "4u93YdtZXPo25DqkG9DJpCnwWzqQenU3bnCVaZkLAgyeEJ4F7KhLLNhVsYL3mqZk8DeVaeNvPv9ysL6JQJCFuiky",
  "key27": "4T92wi9QCpz6m1uEYX58KXePay6j94Jt9Bnqh7JzxbqKB1srSWc83CATZ4F5sirUAAB1A11uQdxFDvnvpczvBf68",
  "key28": "3C7mCK6juoQmSky8yE1fztzHX4F7wcTLW8HzpHFdiR6v7PSuotLD5TF4DDuryoeG2ZHMC7FgBqpY5VoDtg8qK6RL",
  "key29": "41zo3HprjhjYRSExxZqZBaTpWLT47Sd97aaKddoqspMuXpHP44Ci83nZzyGp8zzpNZNnkQAqgv84R3Xsf97Pn32B",
  "key30": "4gHmi7mjWaoegCyPX4zHf7kYg1DN4sFU1L7onzsuQzGPFprshKtxGPizPQGWqvhLNLSemJZJQfEx2q2Sz4twfETA",
  "key31": "4Xo8ZZUZYg2mDrjBUqWqETaEx14RwQeBRj8i3ES3q2rjF39ZD3Ni9mGMvxFHnDEkVgfmCSSPK1XPuZoU2pr94tSd",
  "key32": "WYoeaB8L4rStbXDQ3jPnSgtEDZCqmmHxxN3z9VuH9kjtZQtmEzLaQkBsFuMDhg5QB8Y7hMQBVRKwLZjifgPMBCE",
  "key33": "2Gnt9XodzZjj99TbtKVo3kKzKNK8XMWTpneXiMHLYhNHqqLrY1TwPEgBmo4LpNV1U4htkSfRnjW6EwjJUHW25gBy",
  "key34": "4SERz8ukYcxUWB8txdriYpdHNFRNXc5ggbSqiAN7mhWb3X72GT7hd1EgPj1WXU8e13mq35nxdQcGw736zkCUMPJa",
  "key35": "5bqWTnbJEnBMUuUSfKVuApWck8rRD3GfyxDwime37gjzAvpLcCmaQqfHAZbqK2MJjA8Jmob1cfmvAaBufGy3YGHU",
  "key36": "2EYN9u2H6B7TwQbgvYh7rJqxyQsZSkxkrfE7h8xpKCdfTA5uq66v5GyGazYs5mAFZcwtep7TkwQjpUP3K5siLxur",
  "key37": "3C96xBkonZBVHMQxLqaCUuMCPo7Tm5Ff5zxbhawLdqwjC6xEp4sBfLG2Z8zUJPUGh4KF5cpUE1SfQVH9231XkHCW",
  "key38": "5ARyCAZpxg4L43HShsZttbJsrupPmBVeX9yz6HExPE1Lvnzb9QWLrkfyKDxNjgvQAgABSkNYPXy5eLyBM4h4BUKC",
  "key39": "2X86EEFiR5jTCshmouTeC1GN6st9mGW6f17gy5byZdQKgp8XftA2b74ByHdS6iojzHiuFEZKNqdLucxSSvnSdc26",
  "key40": "5kMt5dj3toyA6MEpu83u9YHERNqnVkDxMB7FGsrjwmfmorF3x4MS99qqBN4LdrfgNDqoNg9VWxHmnahU7pfWcrVo",
  "key41": "xeZNYPsV3mRi2wybmhEr86NHPsddk3Ht3q4SATAptCK3UmPaDp99qYH28o32nb5qcWeKqtimLiQ1FkykCS7ycbs",
  "key42": "2qqBugUixXH6daDAstkWPq195ELA4wBnBuC4FC6Dubj1cq57fz2cRrFGPArpcWF8ZKcBwQXZ89fTHj9KbR1XB26H",
  "key43": "2YehriU15J7SsRNyyQu6phWNEUM1yQSovVYanzwnJbGW6csD2G3UjW9H5CHvKFfZoivkTRLqTQY413qtn1bRRHou",
  "key44": "27mzE28Q4sSfk2DtszrRFRayiSKMr3ASTkE75jrUte8PmFKGqKfjiVDxhoztcjMCXqiRH51e7QkV22ymzGmzXXsH",
  "key45": "J4NhgVwP4oBq7c9fFQAQGaW4yADcFs1enwRwhXJjmrxbPMkT5Z7T6cMpC5HY1tueTtKV4bJCBnvTgcg36VcbzuX",
  "key46": "MQLNhsumjkK5bZ31v8AXyY9FFMKPkXzS29x4gXhFVytSV33Hjatqv8mrnJ2YuQyYNDJfhnCWyiS9yRbXZr5CvDi",
  "key47": "62ydVjETm4ECG2iumizyqvkue4p5sQDLUnMWr56MD3wPdp68NkXTkAVU53UntU255o5CzxSRKnSAQAvdHcEBv1TL"
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
