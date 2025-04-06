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
    "pfjA2d6f2MooJtqTSFc55n3CwYm6QWCWajvkubGaNkEiERxmhFytxtk7j73ZvbUSbR7F9L6KNWLAh7FmcLt4spr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YMP1SwC6VGRmHRJsMoqN9QB2guMZnjjbCwCwKu4nqhMLnXFHwUAWrQ8Z7D4eJqzAdR6utaNsPeVbiQpdB8ckWm",
  "key1": "RthmSCfJzYfKPEDMSpMfFn5tUAG9xnH9tcAd9L33rw3U4wJg7rxo313gy8tPHizUzTNJHjpbwUD4zGTWzo78urq",
  "key2": "2zAJEkAG48c5khiPKDkwWpCvA5VcekB39D23E25j3KyDVasGvoYxxiBs9aycTMcpFjDG95iw83Vo9bXfsEUDFyhF",
  "key3": "4ZivZT7mXq5oKvnW9ZUxCiYdZ5XxVCYRDdmL2zPM3BLEacCnrEDindCBjfccUERSMLF5ncoKCchvrWx3XcAmFuwG",
  "key4": "4SwdFoDpjwJC4MjmCwPfaLJVNNu4qZ6SjDGpTbrRdKY7MTLfwWwFkvR1xGUryBpWcQcHWvUNebiNoJNycEE6JtA7",
  "key5": "CPLBCpzRDaG83aE9vW7wKQaCKQTkiDTxAPPQxBUK5NdKiVMt4txTVtfNFKnDBErpjNHc5B4L7dkXygAE9pSzA9w",
  "key6": "4T4JnhNdvedHcjykaPRHJt9dB4cBB2gX1iz7PuCUVtpS8yicf2AhhirujeXrQJBy6sv9Lfk5sYNFkVoZEsKmc2f1",
  "key7": "3Y7uHdzL6y13qxMiYfmEkRxmLDQfAn3LwZY2s7W8eyR8bK8aNxNEZZ3WjUeDjNU71HwoLNx3hXS9Wezu575G2f9R",
  "key8": "22BhpAdM44hUXLmZS5EmcuE4a7dumRGcf5ZePfX7kKBTqwzViZtAepNJ5m7wgNtWodWTt81BmoqCB8M84MBB8Q4t",
  "key9": "LbxT9Dgna1BwRVTU3cwAtQ7WJmK4wnmDtmYpViafic41dUzV6yxvCbyfxbAhq7mQ2THdiJtS5ogXF9DhmXcg8EH",
  "key10": "4tL4VrJ4EBARhBv6VuVMQLWLpr1W7rKYzA7urF6fjUVGdh6oC4CtCGaYa5Yj2JwyXKc2gd9ipVLgLx44PpTPjqBe",
  "key11": "HP5pX3ABqXfsmj7nXjKag5rs151ebH32K7uogJQRtWRBt5r4DPSpnB59nz3nwrRi4JwQ7BLoXaA6SFJNvNxwmyq",
  "key12": "5AZyG7QpFtF1g1kzT9mq1XnDowLgZ88fmE9t5Wmvsv7KHHoREqCk2g38vvXBNNKE2JktnDDu6igWYD28irnCxxz7",
  "key13": "2U4DnaYiRw9DbDniRvdSdNMjqFVBS583cg8womBCsFHLkKnC84n2q4VF3xxa1s814VatXYjqGVJhFgZcfq1hZV6a",
  "key14": "3FptU5hCotQwPU7YuFkkvTCWiNyMSJmRnxQawPWRmnTKSPQ7cZg5meDF5tZNmPYix47UjyQM5TH9brUMZAGCeCpR",
  "key15": "e6ocYZjW8MqPFcAc2ipP6xwAkEmed6qej4b4TDqB8CrSZr7ta8yWhb6px2V52VhHY73K1ck5TAoqMpcUqUGSPyp",
  "key16": "5Ywi2jJFVTXu1HK1YZu5zdJABpi31EHPhLH8DsmFuW5gUx7zgbkeemyzHVPivwoaq6MfviyAyrZodPVqvth5Hhmo",
  "key17": "3ew5j3vg4SkJm5oH8c1D6W7XiE5d8pnsTuNwVaBhUtA4f3ACSviHwtdnmmmCns7qLMV9sWzoTwZS83wTKXApKLGL",
  "key18": "2rFYm7gpwvoDfYTGnGtoMFtfvAXwooVWg3U3iK8wpMQQeXkgbfqUjuR5gTCtYL1KMqunBKRkEJ92QPbzSkwnp2kd",
  "key19": "3bQ7G7XrvY7nxwuJeg1fRMKGXdzWkzVTkdePSpKDjx1z74ucfdM3Ern1akiUJXPCibzqEM16GSAzHdVsVMsYDanH",
  "key20": "4eoj1MLqed6hQyEPwPmAgpQYd25hhyKAeNcYTMk18PMLkNo1qw8nJSuWqy7uzeTcXfygorAB3vkZitp9VLWopjum",
  "key21": "39h2vjtXtVG2DowEr3yZVaTQ7ToDC6gdBWrc5mfpx7NCMLPhgJCT3qUEfcmuZnsbaGCotAgvwXWCVWHaoWULkmoW",
  "key22": "4rHatU9YzuqgPUwrvpxtLo7Lx3m3n4nP9Hx7B2Ue6tYX8irynYTiS2uEnTrVF9tferSxg16uu3dPHVX7ngrBsoyz",
  "key23": "wSnX6aCxxpWyxazBbHyotieXNKpucpZhe2NBUWHZwuTbqH2mqQ3L4B5hknc8pJARwdVyFB7jmfuefsVYbTy7bMY",
  "key24": "sQKyJUPYVbag3heyS7iWw1Szh76rP8YGKzHwWoxi6UMYxdEwVCaRU7ZwY62CYQJUtxi7A2iGV9NDNb184m32muG",
  "key25": "Nh9vw76pVVteQ2kiPb3eh47c6fboGBCSWs6BV6AQV4zT7R6fKffxZECEHiBuVqQM6faCsw42fPZQrF3Z9efs8up",
  "key26": "HkXo1z3wK7Xh9BAkcBckTCumpDaJPVNj8DydJPDuf5RXMZzfsRbz2vP9Kk87QMVfGUvpCLiCxX3pNeYUDti7uz7",
  "key27": "2Hn4vLqFTjoVinvGSWBJ9e1Eo9N6D7KFcKdm3UbFQ9qqG8CfEwZjmMmR1U9xhtP5WQWBf757Dkqd1B2RLKaDWctF",
  "key28": "5pprwvq3FL47SVQxpGmbqombuZsvGdAfyansW6fBNTsh6UvVJdhiLjU6nw1ky1HAaPV8dqPvEsnPxsGkwaEKmNb8",
  "key29": "3Mr5QUoXNihJJAANAJbMgnVyB32kMgSR66fbJLXuV6nsrYoDcyRrSAWj2je7h26AsHqA97Kqyf7mTZ5E14phATS3",
  "key30": "5DtZX1489GaCZvo3B9PJsKFDbkLZpe5daRGwqYFzJ96RtZk9UzxtE8AqJhRVCc7AsP9mArMZmz3LzrUA52PwT8ZP",
  "key31": "E9aPCA1YEndp8myFaKecpjwGGWWqvSgSGqhUyK6mYVYCfL7LBbNbBN5XUTmLoD1Yjgb76bcYRdq1sHA84heiZjR",
  "key32": "4ccYQKVeDsfhaUYWr8mzik3BY9Dn92yiRMbn97eJG6uVHLBGzCaRzovtWETtC3L59RUPQurtMg4V1CEGY1cZX4MM",
  "key33": "9ZJRKyEXvTRjJRQtAFzDNhqGm51cteD9czBf5yZQ4aZSzz8dVDh7ssY1LLvFxaZ14XQdrM387PuZaqsA5FafR8Z",
  "key34": "26ekmmZCdvEGiw8aNmTLCRTZmKaXFrj2kVXe5yJGVefhgHNt8GNK5TCQixPz6EZiCutqcz8GBsKFHZic1uqYoyKh",
  "key35": "3zzZLz4BuVhqgjwNa7kCpWveodcWg5PhSBKWggVefi4ThGYf4dovWvP6nFURFruZSao2XoxCMd9Q3dDVKKK3McD1",
  "key36": "5kCrBS7nUSFdeanZ9NDqqc2omK1qRbtUZ4G9y1xoNUqkk2LMB5gZJ9PDjRGDfxDf5L3jijVGbbpivdG45X6JD9Vh",
  "key37": "5axvbTHqK5RTQYXB2rXMGFM1b5fE4VaJf9pvtxF6cy4iz6YukBhyKErd5joWaX99AUGv9aAu676ZNUBWaAL6xni8",
  "key38": "2ZbMdkEVKG6bPwmX2JPqegBVWQe7Fh7gAkaaWS6CFqAJPD51H4izs9vHgd4MT81ZRSWtxcun1moNicDmCxsDv7xc",
  "key39": "4Z2AZBYFjMBUJspYSWey4oSNSqLWZE71RHLJexsy57ntkbtjT9fjUKH6B89jGLDDknz1fLL9stzXQr2xFTs5LLV2",
  "key40": "3FEqzAqubf8ds9ycvPm1zt1RTf7zqCuh1FPM7i6zwT2WQBkmQbaqZfT7Cw64Q2MnNL7FZmxBnJpGj94bcYaoYTYX",
  "key41": "27MxUUpC4fzVVnhiK5wMmJPLcB7xy963HC6NU4fCnjeSuabD7hBv973apEA2wU9ZX5bM93YsjSHtAgmeRshT8WT4",
  "key42": "4Bw4maQdfCDAnaPVWHbJpaqDtuDZkkUEQcbwzSRGtprrcs7WSpr7TExs4nf4C91DzaANq4xoNfDb6TxTcXTwey6f",
  "key43": "5BzndYFEAhsJKUqcD9iDqP5DjruZSx4fZp7PKKugjjUsHk7YrHvFFgeLVLfkaWVtoypcaTiaEpLswSuRsxA3DQxH",
  "key44": "5nhrGVPPSeWT4JmSXP3R7r4veGyDdenx1CmZs4E4RhgoVnTabgqdtHd91cmNHrwxCRGZVsyjVaKvYys9x68F2sNU",
  "key45": "35KBTev41Y4LhPzckYgrPSxrLjTtrkvPap7XyuudD1jLMbsmcR9SLNNJ1bTQoNvaLy1qK2JsBvSCVtjPYAW1hkjT",
  "key46": "56u6HnUZtqAyDkoE5K698852nQv9XBXNxDPgJANwFXRqCiWeWsGAnKwDresAoCd5Qx4RyYXBUWSPEb95ogsByqn5",
  "key47": "2HGnpQ2WYPHbQ65ZqRnGYACPipq6WgXuqteA7yhwzXnwADiJzsRKXVNZC2sXL9BvFe6ZhvuCTGSJp79KHyjAnyWq",
  "key48": "5Uu9mvgs3hJJVkatWeNakoV4fSR7baym6AXTSYnVFAXbpvsWx22n7xWXwvSZg1QwHh4JTwUuhNV7qPXCwJUppFyv"
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
