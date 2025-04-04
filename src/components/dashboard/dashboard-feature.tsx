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
    "4WEzFwv5UNDzMCW6DgKAjyjLq6hDbyUc9Wj1YsmF25VATpsmWkGimx1yq9xzfwGk9MoP8FZdrDt6WDTCND2ZjCZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJRx8xk8HjupvSXJeQJ6cMoMSL29oFTDRz45K9UNfoo5GvtCs9VeBRMAhoVr9FkDDGn2VdFcappEdAUirb8q7aH",
  "key1": "2wJdnRwKem6v3m8f2e63TU6X5Gb5dE4eMFbYyv2o5CjAF8dmp2PFydTKmZt9FvB163tLxVLxaARFveVJAGkgExw1",
  "key2": "2RNFFe2mbtSJWGb51hHkxkubiT1A8yRtvzVamxgZ39eyw5dP9hTfyXngZQr5krpRcKtzaH8ZKjxwQH4QPjiJZ2th",
  "key3": "3ddEGy4CBcmS6x2bqzVTkRBw6RvT34ca57odx6kLRjXju5cQKs8Cacqzf5V32XAdQdFJtNPRSVNYgVCSBnsMuvco",
  "key4": "2BsigsZ9ZA4sFjhqwkkGy77QPuSLm5awEiXAwXk68nxiaE1ok1pSvxJ1zD6aM5fujpTqV1ExJCDeHf2ZaZzNQpDN",
  "key5": "4nYEUuMo9TS4GenA3AQ2mBDsNjyqyHBBpMW7YLaR1mqjL838qnfU46TmhnFRJ3U4B2dqyJ7wm8wEbf75yMvHMLck",
  "key6": "2ARFEJ81sEH7gHsQKPg3uSQizu7gUBjZqgxjN7jazkAk3wPhFrB5gW5hyhu8GhCjSfJoqVy2KN7wEPXqP5mb3C1E",
  "key7": "2nU4qE4HoU8kDz4HQgrCLL15NGswmAPqvWXDYu8iUPndH21sVYRZSmBmv4CAyvuQ91A71QqmkuWyMmGCKtfg4LgJ",
  "key8": "3d2kj4e8hrNGXy6jSEbhEHidUP2VfEPz29Knsd1XUb2vkX2gfYzScdthzJmUpmPxdTHBW5zCbWoaunrLnnDCakRy",
  "key9": "2WSNXbHiKXU8esNLYQc25v1NpgxydzKetCPSDMDojE3o23GHku7eq8PoZcLCSRXHsBjxEg2YYubeXfFbwxzgAsaG",
  "key10": "36w6hRRDepgCJALtDKe7Myso2XQKrD33c2nh89bUcJ7Q9Y4rYzRo23ZNtNcGuv7e2yhoqgjgcRJSw49rUENtDszt",
  "key11": "4nWgt2YD3WUxic2ikXuWszDDdnUN8rEgfN2edNcyPejS7DgKS5hxJQyfSA8gcDCnxxDsFWvbKHMDb7UFJqb1VrqM",
  "key12": "5C7iMQv9GzprYHcwB8mVPWccyrJsUyU1eto175FmuHRHwQSyaULxybuCrbJHoPqwHZPa98JLfFqwHeHbcpxH8E41",
  "key13": "3qXv3PDEz3AnjLC5PzknBzQP4e78fRQiqBSVJNMekAZgcx5qwnoQcoDy6VskUNErtLGYJDnJQjjo2Tj14tZD8bx5",
  "key14": "3iA1eqbGdYVwcFjtEqS7Y461yHuunrrorX5PvPNbf2cscGbHtpXERUZhXjeUUaehz9Q3G14zTPfmrUSfBHYvP63T",
  "key15": "64Wybv6R9NXZu3U9N9ZRruYGAEHrd3KqNHFLAcrELgcmjwzmmSb9FiYxoqQrf1QnpY8j4yM8dd8C9jZA3WX2c5rH",
  "key16": "32mH6X7gxXs4a9BH1daRKU7w3xb4uydNwtteCbGSQuWttfJPRknCfBXBCKDN1BpCTSXn75XGw9NGxHGg4aZ6zzrM",
  "key17": "5WxADDuM5QtN4Yrk7s2gCZZSPEtyRDyRHHTzqac8XrBSY5XyefFzoGgLu9VMFCgmp4Td6x6apyqe6YcnkpZwHZYc",
  "key18": "3KJwwF8YnzZDXNXsrLGF1DByFcD27EjSNjrbkNEWS8MvC2Mv1MxT7R7x6KdDBGUBavQycx53UdT6QwhSAFEZVi3E",
  "key19": "3SRedghVdAiWkZjL9sxnEUYz3qCg2s35Nq8hi3SsbJXGu41KEAVBUa9B2eEGqyKzsUpWi6pJF8ri7JicRzMFvZ1k",
  "key20": "1uyZCQ5zW3u39Af4xE22BqsdKXYG7kedAtrPLJNxf31aU8tXGBdeKsxpQbAWe1jyMf1wPfRwrZR1LAtAtAd1Zeg",
  "key21": "2CeqXXiPp5ZUiAZh2YxnxE1ToJawWK9PbChXJiQRAmdvsUBSfzvv6ub6NnXcNgqD34N4xzD9vqdwZvU948B53iGC",
  "key22": "3ZnG3nqKrc6GseeLMbJn8xGQpZeEgeYQ45jgvSduyw2pgjy3cUgNdE3y4reFPGokL1PEbSwEG9wYQsrmJGkk62TC",
  "key23": "3458wmY9iaYYbAnKTaAHD78nfwNgFPJs3ctWoodDe2D1GLHLaRSeLfTX3ERgVfHZJPXaEm9KpVnDJr8waFBr8Jsm",
  "key24": "3KAd2zyU8z8xEEGqRPcnjJE1vjgKxMtwacZM8LcjhAt6N7NrsUci54i433X1pN8BzKK9iJLiPbJTDjfJU2dQXw9B",
  "key25": "63y3sVH7eWGCkJdAwZZf3BNjosHD3Zkjf19gDvzmNUvT3zN9CqEc5Hd6qCFvkmsZNPrrPBwp8oJyT3W5wtzZfDPL",
  "key26": "3JXbkKtNqygw7Xm4BvYaHr21b4W54CYLmpmt1AW6prkBkhhUVyGTXw6bdp9TehJEsStejwBGTJDo2CrneSQ7q7vB",
  "key27": "2nVACWwoePwwBE1htkbBEnG5XCRHzEWL4vivYdgjEAtZMvq36KAz9REKnWoxZHupHWMJQbYcDuTVsjWMSPRz1K5q",
  "key28": "2Y2m7reUShbfsbnGpzCz8WNWUqitim69EefnRx6mnESC6DaGVPsvWoKhKxAYFAZEinZwNDGyFhMbGSih72GDvsBL",
  "key29": "2UerH3qKyhm8mVCMqZvYZacZKxLzX5HXW6tUgJLvUwdp7QbWcc2hsCDtYKMk9jEQqWs7QUFDGtPAmB6jsnrKvLwN",
  "key30": "4suStXQurLxrqARRAGyhSoMX5h9YLE3mS8CTYS4gjEdYcYE7sSHam9GVGySEnV8aarfPSQkNtGuRFZ25v6jMoL8W",
  "key31": "wqHiXm4e5omPogwsiQA45nHUosc7hzAEQ45w9Q3KViCAvxW6xX3W7hnh2JHHSnmNAjEvPwUTRYbVAvwtv8E7dh9",
  "key32": "xE7suqxy1QZQnMK92tVj6oh3PCcdxR67XtuV9baNPGf8P4aKWtECDuYA743oFZqXAyucBgAWB7gcu3g3HBB4qcR",
  "key33": "3mif8G9xSdMhM2Bb8moHdeWkB3rndduRfrkwfthprfHeZPwWfehnt66Jc1ZfLKVPsDSjaQq2G2NPvdWrnmJt5ZAA",
  "key34": "5qtbBkGTh7EBQsxnjb2XLNR3aVDWvwwaGWs4Ptx78JbX255jDABk7GVBNTDUSi5WRgEuU1E3vRy1J1zm1ezxjh64",
  "key35": "38j3BDsbjLux4AD33NdPykvzXwmN8197oUhD2aQ3m8qyvuz6P9eK3uX3dS8FrGc5ouyCBuFdivSmsV8kMvdBbzRD",
  "key36": "5hpJsPourTwA68CRmiK4wXcpabWQFFr9N2ZPdi74ywcVkSk6WrVxptSfMdvJnFznUYu8PsAbtKh3VTsTroyNBQFm",
  "key37": "5jBWbtDotkCMVQFXWGByMXeiPhbRSMxejyyGA4SPrkGxKoUbKfX4v8NNBidHUKJXWEsURXSyNsA14xpZ7vhCYJFr",
  "key38": "4QL1eyH4aHCeBVjSsSpkw7XLYKXD6qjFyFrqRdDnHsZXuMGmfWmr9hg3BsdjzRm6ShqYLviEQk4H7Fa9NnLnV5ox",
  "key39": "4Y34196HBZwUKEsB77tzH98KLuzXLB743wvsKFfQmcnE1CRDwfjdsn5yyy9BeUWVTcfeqfxyW6qn7cPgnjjH5e39",
  "key40": "36xgexscPadJjsaUaQydG3Xs9LPYG9ewjLCtf2groGq9MudETxHDEnbwLK8b7mpDGczCY9CMYhGzPGxEL6eg1cdd",
  "key41": "2KewcUJxpjrqN8kCnNUx3ThdEXmFn9mLf7dGfp3xuoXuUdpYVF1a8KhHtFnDo8oV5qg8RJRGtF278MBPNxqNsMqZ",
  "key42": "5NVCZYjfF5PrjMkywYvXCDFSVYuZyWHYEQPbAVwRVs8awzqKfmBrzsJXeAwq3bJ9JnXJTGRnKoTYMJ7uQv9PgaS8",
  "key43": "QMxkxJhp1URp4L51i5Xbq1SXCkDFHB6T7ACcrcUSadNJmVQ6MrACvoqSewBz1TegMYonh2yNX58E46F6GMPGmhK",
  "key44": "2oZcmNPAykGweUhzGDpsaCK2arqTr6PhpxghYyCE7Cxyw1q77K3ShBpBQ44FsnyCiXyKg2t9E7E62NjrExWd2cun",
  "key45": "og3VqhTs4BGeFEbUGqgTJP1ii4edG1BGHwmqpMREKDkBqdVa1RNCdRdZ16bCAXi7n7BNGhhNbtDbg8u5XoQxCnM",
  "key46": "4Ys3qhwCzu7EWnnVp2XkcGAyvbyh7zBD5uo4276aH3G1CZ5zn8NhJB6LkU8ExvEPr44GHHmatAkpvyhBR4yyrsbM",
  "key47": "2XUdzoZkVWDxcLqrnDvVCmdzJvSxrZAsU9yepEZ97qd4EyBQYMXBo4Uaxke8rcozap3JgPf6gMC29tj1rWrdtWPP",
  "key48": "3XsdGAyHkvk9duSp9aYRBGggGKpGshJp19BYaFyMFbfLTLHMLt2M2xgdeU6Ne2p5fxEwM9PjMiBkhvCufWzZdhty"
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
