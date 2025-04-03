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
    "cFYSUpPs9Cn6kEtf5koki37ot1Xox3ioUPKkZdrZjCEojh3V7EYCStUu2tRzxJiq2QpLTFk589cRJw6i2KbX6Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cc4opVC4T1mYoaEKGsPoRw6tMAGVy42zkiMRPvrBePph9r4HViu4L979Xk3Uva6sAzntpYhPFLwVUi7u9wE1km",
  "key1": "4dRgr3HLCXTYu9GfyjiSsoBCcfcj1Y52vYRCVtLQnqRtjcyEc4fesqWAcgYwPgSUPFYzWWxzf4XoMCMakLvJ1s8S",
  "key2": "2Ni4rp3tZSYCZuqmSLdAnuDbqoPJe21qXLALwu4RFoYSHrRyxZ31ynT7aDqUN72J2FVNhRopGGCeAmH1zum6pqoU",
  "key3": "Dp2ZmPfZLXixdsFqrz1dq4jhhsUtf6VfYsgijNGx7mjxFcEYt7xbz2pryfPTw1h6fUC1ZEacSNTudu67uMWreid",
  "key4": "23SrSBEfs7n8QSp7SdTyyfRFRJNvzJDoZqdD8cLAqouLzPYHbjxgTBshbaDTJhqT4CqTgsFMKYSS43gTBwK4Cgqe",
  "key5": "2ZHsUKXXdV8Q3tv5aWGZP3EdSGbrarCCmfErE63w9TzSvxPor47jsfLAe6dgfuAFAMhAAKiZZ8RAvQXuvH35tFUa",
  "key6": "5z7amEzps1PpCVNtLy1iwH4Mv4s8ieo5Ron4Bi83bzXHRFZTFwuxX7qfrBHm2zkzidkL2aBGz7miPyCDRWtffwZ4",
  "key7": "3fLxgZp8gyF5HAwLWSPjZCA4DFjJ4h1utNvVrij2VtGm7FchUoSWLXVMNb6mfG5batL6ckMeS2YbR3iH1rfAZP6U",
  "key8": "4CaRVTJcLeDfmQYncRJ5gu1K5TjJsAqVsD7L93cy5rQt1txEWmbgZ9DHEwnn9a34EYVhM7NsDRYhRSK9xPwn8sRk",
  "key9": "3LvY6NXoJnzMgHhFZW4NefJRH9Jbj1EJhq6i5CYpg61qNCDQaQMS6aJgqyFsQvFKqeMFpaLyDvn1Pbm4ShiUnV1t",
  "key10": "31AhYhxD2UeYQwZen7LHhJmdp59EyB8RSNPCKAFfSwW4htJzFqh9DJt4ju199LagPWa3PgouMj8hEz1EN11fLf91",
  "key11": "4w9R6bsoEnxRVNLfPgnvNtNZ5LgrQ5pTxoKWsdGQCP1tmnGx2mTxPF5PEk5DzihgKpQ91f1ciZwfiAwbnd3y3ejd",
  "key12": "56cArzCrw1wv2ayTQ4WRM2iHtwfm5EyCsKUeUk3MBYKSofnPTKN2gpz4zQwZTRaSDpFDn9pk8nv292icVbrGTVba",
  "key13": "ZdH5zcLPyHk9XP47iszp6y7EyTsGV9mmP9519gTZoSdTFx8vRW8sVxqzyzjf9EM8VEoXvicPMb5VWRxRu4hvnan",
  "key14": "2hxhiQoUbaFREJwsVJzcVXWuoiScFGLRJwAyBfmuHKG4Ys7Fx6Kmko5yVey9RH3F64toxLbU5zFArbT5pCkkw7s3",
  "key15": "4itQw3poTqrmg1d1W2cAqRHLMJej4B1tQCHxu6EmB734ZQQ6JKXqvMfAuQr7iZb8H7t9bZsQGPJSxkWhSVAF9sbt",
  "key16": "3sh76UKYfTd3vBwXX3XU3CR3cg4vXqKUfKSYTan44n8QLdHKNrGCUKKNpNYpXaNfLGFUUch1RzP5A1wue3tSyaVK",
  "key17": "R4BtMDn7WBegzGVuRh7TR5xpttLa1iPetLdPDJAmvpBZQgeRVEMGr6ghqRgmUfufBK2qUyQ5pAC67srmgY6cCTv",
  "key18": "2axmWjbAWbrHJJXrqfzbSmVrfJfSWTmR5Aimx8JLwSgdJ7wbibKdcZwzS175Z9Pa5XWrhg35Pbv7oSfLE4hPtdiv",
  "key19": "3qWX8xxTYL1F9DW4RsUJow2PqDSQoJuv4qJ2eALB118wr976vSD35Kv7cR88pBMFA8P2X35yMzJR7x9fyoDDA2T",
  "key20": "4y7Eo5bFaheWuiGE2c2cg8zPxGiR2fNTw8PmkRzNHVJy5sHt9uHdLCKd6XeGcMMcQufBkarBB4gLZjnD2tUXViCQ",
  "key21": "3CUfieSAxgepBdxvGFHQP1jbsB1j6V5PBgxJqrpT7Az2U434soz9nvZheNGZMzmSkwHpuRhVeDMCKp7C9b3QTYad",
  "key22": "2yv2aoH71vDFvANUXcXKCjRrB275rT2BmhyNYh4iGSLkNRJrrTACqEiz1yMzrh2AgARk3Bbvo3FnNJdZyHbjt8yq",
  "key23": "3LriQgevUSCq3k8Z9bx5QhJ4emPJAWDKhayTYY7iV27FiwCFboVzbJ2P5z2pnj79kEhsYhCT8iE4FVf2jQcxoVG5",
  "key24": "2Vma14HAXjbyr6BVJZpkUfbRLFFkTLYjgX3D3TAdsH3uKEhKgPG4cgS7o2vaavL41MZvQ6ydEVSvhTHr2k5pPnoz",
  "key25": "5mfRjsE7znNh1dKpdgeFkrcVmEzZNh5PrYCyUH4NxSFkP4Dr2UWxEYBseW7QgQRbawySUkWETQfyVScgrkhrBqVv",
  "key26": "4rRqQpuYXnHLXpDHxA28MkE6gptvQ8C8hk3eydpsme95oZfCs7ARFqwSzZ4VBHKtsVsHGHmJvtaYLZtRRuqsiC67",
  "key27": "5eHy775ewoN1drnJ5fyoKWviWDnkyi6gBf3QvpPTMEkZXf28An57hFGDXwQwqasN3rsoWRWyaKRpurd3p4p15Qsn",
  "key28": "18tW91J5JVTkAj64kHUW35A9YmP3WqNfvkWB4RbXYqvCQNrnVH4Yvtdxhv1FyuDvkiP9zMZBRF1jmUhUtdELZYP",
  "key29": "37Fk7QgZTd54ekvWQYenfkgWvM27nv7AKhevDiAVoi92eQ8HsidEfUKE3H11qPLaBL886wzP7q7tPwbVuBJTDjTE",
  "key30": "4FFKn8aVubYrnz2t7F4A2Q1vSYR9wdFTKseKmb58THNJMeC9RV4XxxN26Qi6m9FBCbTjMijEQzEpEHbQVX12uCHi",
  "key31": "63i68ieMJGeGgxiLWFCC8pkUMQqLxCYXHgR9jCNWR19F1Zfb8Wg8CoBCuctYNXn8ThkY5okeV1tXybJGSib9F4Tw",
  "key32": "62GGBrmdxQ1aESxoG28PLtX1uFsBZ6hCmqEBf32GDeVdpLiQb6HL3sXYK58mwmViW3Eqsz2Mh8Jp4qfF7rK4U1rc",
  "key33": "5RFZGz8x5AdswseUoM8TvSM5XBeuHcpc2GZAjAWNQZbRDkJEfduHX8bFunEVbq6K8CL1FB3G9xpoNNbN7KCMYMAd",
  "key34": "4o6mAWxo1Y8uaDzv35FceRfALYAzQG5AQe4zgBoGcDYNS7yug88E3wikt3a3ByvsFdnAKuTAZWeP4v7uUSXqYRT6",
  "key35": "2rkahSzf9uWvdjVv6xn4AHZ6WDQpa7hwwW7afXzqtBhDAQe11D2ySZgX68sYGULADKqyMHVEwa4NHn7XG8o223Sd",
  "key36": "jFpQdUjPYyLxiSzqfjiPymUSpxbNWeMMsk1jJAfPsXR9n6bCnNrHbXFsKS5uDR5MKpjyGin3Vu1H25vLrHgdprc",
  "key37": "4agv7fZ52tbVfk1c4bYEEoNLYC1rq29R8LcgkGLaj6w6M7cs6uSsZmBGyvJPAs642VxHfp2cAspbsck1s4i6duHp",
  "key38": "2WF1gj6vu8wD5WHamMexGE9zK5uKbXQwHu9Q81ZcGgNgoBwN4AhdtpFSn3dsH5gsqPPwiCFNaiotZK1LGYo6xeQX",
  "key39": "5i7cwykeyApSZmtM8sjWh3nxoofNKS2F6q1MF74FRJuWJ4U2NNJz428XTSiHmyBfvsbEh695XeKn8bjDrqKjRYnA",
  "key40": "rRAXim133HR3ruG9mQ29bJtfWXomJ3CdFtgmy6D4PE4FsJxKXRcPtKJHVdqhvRWzPyGJ1LZh17Wxn6eoPtTq5Tm",
  "key41": "5sPLdnPyoUh13axncpodJwDKi8AMwnLhtDbk1AnLWnJ2UTCyFWCgmJrfAev56vVJSuJFff3B7rU54goGVQCebk8D"
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
