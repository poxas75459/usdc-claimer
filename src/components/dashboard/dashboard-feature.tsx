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
    "3c1a4HjH4KWvGNy1GnwKwhFMTwz3MEDoqpm4tqUxp2ZEkeWd9D1rd5338QfqdXkBnP65yfJXAx4j9Aa8MNuKkgnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L2axYJmLCNGbeW79qxbmNTLjqayfqrArL6Q7ESb12TAhbb8kymMGoYvce6fnk4LmppmcYyqjhEko1tRadN8eqYe",
  "key1": "4DQEpXTSjXwKpx54Vg4zTMc7CqVAjdioaoTLgHFJJJxQeeNcGWNvfE19vpRCdhrgqU8mRDijNWVGspHGze5ahh5G",
  "key2": "3n9LorfJRgH1dtnHPAg6brX8FLG8NEZkTavHTtWbu1PaZrspDAkCwe4J2Kt2M6msKvUqbPnq9khyqp7ZYV1sxyRe",
  "key3": "5z3H9H1cNZJqkwXJA9jveKCBXN8bVeerWe7ipwpfRL4FR6wdyddti8KeN4uZXoSfJpnG3sqMPqWaRyyyNdTk3rAh",
  "key4": "3JNUjnt5H6DZg9SDFJ3Mo2JyJE1mmxQVvCbBQWLj5Xz4ecYKmqzSmccwp7CkYHdQqkotDRBSJJ78p6AgZ7U4Ma2h",
  "key5": "5GtyqL97jDS5PgdJ4hdgU2AJAMrRzUguhrz1euq3ewhiqjs4MPpH6ZqBYYAG45UWuA7e9CouErBgu4QTRfXyKFCH",
  "key6": "45PqAyHxzx2C7qPFW4gb93oAm1SJWErf93Wn3yKzcL8pxjFBtkDd7thATCdAhVd4LZvSy5YFqsqo86iYstX8nMKc",
  "key7": "SRDqvna3ZrMTuSr7psHQzAHUgXWZzwZHoaQUyUmfceShNKaAxxnpb9gCN33HBRj4gh3NCBmqLVHHgJsFymHntTz",
  "key8": "5c2egiduc1HVWcjgNVEy4hG6mbDc9zagrnnUTYPghSaTbmE64TeC6b1NLWGPevSfMGDVsgWauPNnLetN8gGxmzzE",
  "key9": "3jbvp7ArgkutWYW4MA6EAGKNosJvPHGyhrKR91JvBMWQc4xVmNH5cW6WRh5ro5aYyRor7frgLQmnu7HNCMvocRBV",
  "key10": "5Y1bkBPE77XNaxdAKiBHCEvCE9Ke3PbBtPrJac5HsaiP5HhzTGPTxs1wQmP4Fn3FDA9hSGdBSXA5c2UFahHtWLB5",
  "key11": "126tGxVWfaikQMeLmth657DcjNJ4WCyZjwmnouRLugr8RafcU5hLXZBUPwtmtdZ6tnCVZW9o4Eo3vhbszxbP53oa",
  "key12": "3YpEjBKXKcsr8RcfSvRozhdFU3M2rVxzoP9bguAXYW1YAj4iESkuMWTZ5Jj9Tr7mtNLfGrANeWrk7MAsWggKhKZq",
  "key13": "3XCtt4bPqn9iZufqceDSfBp9Hh5PBiQTcaQYPUGBao8dPBNGrwFuFMzHRtmVXLWRnMtACexT5e4AGd7S5T4cSmE5",
  "key14": "we8tU7Qabh3bTwRuhaV2jf4Z99bWvrA4Nm7QPRxA91eNUYaYWPeppsCKcLjJnMWM5LXX5hX8DENDYRkaAwfiJB6",
  "key15": "2QkUdoY35Wqwx44sUq4vEYLNoZtiuSe9Cxktn8c6qQPW5vmwa9UPmBbY7Xb476zPY4TCbtTaUBaRBf5qmgpKhE2E",
  "key16": "3SCr4KCCJB4rZ48qn5uhVrC6SPrszMttJo6yyxnmPtpXRMLCAM7mPwCUP4Qwo9JFBoV5Y27mh6QvfDc9wfpF8NHN",
  "key17": "4qwFxmGiuzEgzmiQcV9pd89hJfwcMRvsAnB6MZRq6PxDeXcw7zdUoXPYAi3KD9Ph4AmuvjYPAW5oh5TmmhGtcXaA",
  "key18": "29NLMQpvWZNmi2MNCudkSAr6BpNbYiES1ybBt6WP9Ttuk2FJnUFEjaHyw7L7ee7PwVniXWRPRRi9XWCgWb3dxBqq",
  "key19": "43CzeWVwktfSnTYKtDDr1bVbw27KucCJjy4CbCA1n7mgVS4py6vAudsBarpP521URCpm2DPRPMHK9Npq6yGyrYzj",
  "key20": "W5JZZEPWeJdh5me898qfWMvT2csy7ukHVvZyrKgqGn4vN5gZugGxGy8kXWW75qy6nWDpZ4i1rkjhzb2jy6iWq1q",
  "key21": "3TrCn3ysAphaE8sP9Y8Mwu84fr3qT9SywxWf8c5chrFW7MJ3ud7nZG1sjsGVgW1YAGKudtFdH6Gcb8nvygZFgQ6i",
  "key22": "3LhhzxdtG6vhYAGEN19QmMT7yvWzUCGJ4X1543SFU72vK3ExWGUWmevCV6ngARmxTj9xSizqrw8ZFh5wX2vwPQmc",
  "key23": "47nSs81C6yX9Xt2NvveMnr5LrLuccVwEMZyfEY32UekMXMs7vcpoUHBKVUfM3fziyKrzyTbRaQzxpFC5MmezNJdf",
  "key24": "3QkTsseArgcCXi2x2JdYuHCT7qac1PCkMyodigM96DbTSm1tbAY8AcPgnciW5PGBGmzN2nkaGYNt2D6uTNkAN47k",
  "key25": "2YNjimyLbpyeQ9A1bvutS9XqxhcuVQpPaQuyyGb8ujWT5JEwPeKjkREJbQvzv9oREpX6nwuccLxwQewuEgsFV5ff",
  "key26": "44xnmnfKdniuH221eED96f8MjNd9hTxVxVe4GBdXs1d6qYiwj6ekY4FZpzjVTuiJegezycszsiRG5q8k5qrVnNiN",
  "key27": "5pMfJZnqWZiDvfwAGBLxMZmzNn8ooQf5nDehZ537wwmStg9Gwiqr5oe2oUo49MXjk1Y8fveccRRtkbLH7BRdZuW9",
  "key28": "5Woh1C3vP5MQCLJjAJFPenqBypWTV7kBtqH65pqQUNQx5Mi2Gvni5S4y2RQGkYPnJyErPvTFi7eT8aycCW6owdU",
  "key29": "Fdpouedihw29AyqztQXdscV8bQrgUmSQW7rbyZ8h8p1XCGJCgtTbNsVnYUecam2JWPgRHweZmyCgp4oM5xVWSzy",
  "key30": "2ysb2LfXcQBhxQqMadyJqiSjpSwqhVqACjWQ4XkzrPXn1LXZQGYXErU1U6w32aDeHjTY39A8ee9D6gkQdBX68ZAz",
  "key31": "5bc3QXim7Mf18CX1oS5pALVGLiNJTF6rH78dBv59Nq11hBiAMrRCxY3jQyFFHsrsBA1w5pjckEgPA6Pb15Qn24wZ",
  "key32": "jxvMmQNaFYhfNzCV8MGU5kG8Petui1wXuZoYZikmy417anR6Gxpfw8Es9J2tHEwtknnt6pSbgsBDHA6Y6BqY6ij",
  "key33": "4XR6MJjDQ5wEEJcG2nBcfuVFzqVuKmh7QXFvU36FkKvQgVfg6KEScbmFz4jHQZxbiViLVdiGHQhmCbJRpbNK2oKp",
  "key34": "4DFWJrDwDbhn7dzkgzhuTKGFPAN2Q2Y5Pb6gfjv4dpZ2sDSsXp5mSXw7oA8tCXw4Z8npJz2RuJe6sezoK4KFS1DF",
  "key35": "3rG8Z6hj4gxHjJgW6WnS8qUVYKdoBQyu9Y5MYk1qJNESia4GxgaVKJrgnsh6Q7ebtRDNrHFSWo3ipQ7tePzxoKgX",
  "key36": "5VQnNzQCEZxDNPsLYykhMdG9TC8GieiD5RVTu5JuYQ15MBnsGqKHnxNKRT6kfV5vZy5LxjEam6sJ4x6X2NVAE7ur",
  "key37": "52M4D7Es5VyUybHkxELRtzMtij1QS8PxMyemojbqgz31u9T1eiseXTKtcTYCcCy5gSF7cVShHwyrZBm7HTrp7c8a",
  "key38": "5UTvLh1zFYTCF9GsFDg5ybmKppUqqJbBwdLuSGt7mfbjYuEMEfmKLbRVXApdJ1KvK1u2bkSzeN8gkU4EEKXEZvVH",
  "key39": "4uVUgwCrXygbCPTugKTrM11gG5HnYgvXrPeyusjiNi4DdRvdiBq11Mzkrv7C2LEGoA692EdrfFX1DmESdnN7hNgr",
  "key40": "5Mhwa1MCUdnYgCMowDWqUbVRR2R7wE2BmjBTydvEuxSH7KX7Xn6ahfKetJSLUq7whwMYY9zWUVMoZPDPLbsuUiCK",
  "key41": "33yMCdd1nDjVSgxnM6DrLfHnKgnRqfHfm6tAfmuMGQpsWB1gwkfojW1kkGhSAzXaBhRnbwAFBTHDETq6cyGEovkm",
  "key42": "3jJWaeX81uongehC6PubJ1mt5WFWR9iuL6zEn4jGdsKVaeHRAJsiXBSUh5HM4HKjfMHmC1mHq7Trz8PxqXxyJks7"
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
