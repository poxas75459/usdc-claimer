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
    "4ESetw6MyKdUN5tZmxRTXvR1qB34PwCbTXWQaurSHrAHdxm6AQyAHeLKTMYHEmcun3gLWm4G9iiesMc86w42uQgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c643jsXrwNWvyBiwHSjEo6Xoz9BRFLmbbZfD2iBHbmsCidoMFgDeRNzULR2pZYQR42Q1JGMdgwHbhFNcoHksZdT",
  "key1": "2Q5J8wkka3a8CjetjiVLcBKTKHyYvidRLAedo91jFEJYHsAV9XVR2qHUvW977x5xKQ1B3QkFXGzaTU9vbRePmhDJ",
  "key2": "4rwZEAFnEq9d2g1rADBeBCWcwrReREo6jtsWVTGnMSzJsX56NHhVuP2DxDo3qtrrF1ZAfZbHhFBdqggr8saZMSBQ",
  "key3": "3xM6NabuGnGqKxETenkB15k3j8eosJNycfK7EaPw42sUDVqzQVYyNo2NxwFFecy9gSQxHojNk1oeqP8xKLeq71zB",
  "key4": "uDyaPRBqcuEPp4fSi4FgST2bNK43TjquNLikTRmrjYrwhd5QNALdhUCrhsBDJp5RYoGRi2F21uAa2VBKcE5WNau",
  "key5": "4NeExryzyfWu2uXbGhVwkvtCnAfYULxhzhVjBnNYvNR3rKRC49TmZhzJzJDim16LCfK2UyfopRFvXjDFSiHcB7gd",
  "key6": "4iXFTuMsvEQsZcJ3nhitmoVTuzuuXzesMbGZX6JWkeoNNmxRsLCwaQnGFXwGu7btp71KiMVaWzZtf6wzQixpV5hX",
  "key7": "4VhcaJNNUKQeyQYNFd2Z3AhE1MqSArAhpXcinV5x5HLeAAKgSxqp1ZEAUMgCdnzgMytjkkmmXbZpSp7skLEzcWpW",
  "key8": "2HRtPv2h9d67rScqYtNvBc7G5eZuaYLavi96wBa2A4EyTwhzJaC9k2U3dDaas4CjqPNExsJGUwkkSrGSofeefBwS",
  "key9": "5QBkdKmMpmBxKvotciGN8K1f7TzD2idaDjx7dzd44nNCPbDHnJqKFoTQBBfjA16M1YiDFfM4Qgm71GG5zkEKY5aj",
  "key10": "2WrXwgbNvkjqqimn9Ds9KtqTWVkXsDP1tNwFAHE7BhLhnBiYMHtnMeJaFcmAeMNJS1rnjzpM87eq4cn7gDHAgGov",
  "key11": "4uTQ96QGsDZEREtMMjaEqf5eRrMnSJJ4WRFw2oDvmMpD7ZwWU7GTPEPR9jVX4rVSoGD4ry5U1sVYtqfMFZYPtuoC",
  "key12": "4jP4W3cjFTdF5scbqYiqKwxawKTouxzqygfqsmtQ7NYxYAA2HArAPBWpnZyxNHBr46Xsw84rvkXmfPMsHzoFbDWJ",
  "key13": "3ZATDjpuNRJGdFjZkyVWFvdVpp2p7FGA6gtvy7CJ5SEossTizMEiUokaPKXgtQSQtQQ6558U1zyZi3jgR2cT5Znu",
  "key14": "4QqoD7FRwyYKWv4V2dCgnzg97dCXJDLtg76veDaWFV8hS7DU4eKEfqHXkNvQv2ERX4AXpcx3h23v2mgG34kQCq1p",
  "key15": "2tzWWc8byHPxSLv4BEGKtMaTt2EtBFD2dbFxQZXc9Dkw6X622Rq2U3dgqHCx1wqc44xHETp7pgN8awDfzBYSW756",
  "key16": "3SAnviUPWSyyEsUNZUnBTa2bSNPRnVmmVGmwZqPbapDg3G8vXnwLp1Sxhw5R4FhjJcvUGfKxhHgydvBV5yCzuiBa",
  "key17": "5MfqVB9XSYfJBAsqzheWYc55Nr8V8HFwnPs2L2sj62H6dLkgTVHPq4BagUx51NZDv9BvzK5q5CmUSbxeHaWaJzwp",
  "key18": "5c7npdqc1E5CS3Jsm4RTxnEkEfqKWv1nKEYViEsjmVo9ngoYiiA9oKJtDRy6Kffnx3xB2LwfamwL9hVBprBqKYh3",
  "key19": "4emX9REfGLyRfQvUWdsxXNbdYirgniSmwWGy9ofhwgB8HZtUaFPCGWBTdtkZDNiB8TCUeqWgsbM9vCJrpthX3Z7A",
  "key20": "2sFNBadjqp19k92TbRtmkapZ8p1d7af2nPhnLfXiEaBSsEi81dRkuJEFSi5g18QxAjmQtGZ6yVQZNP2HG5ex1cyH",
  "key21": "3bNWhsiXygNhKpYczowvS7fkhG3J42Kx2QyhjiDzco4kXpTJMz4Z4b2KgPbKubr5qDaeAJJj2KDD9yo49QwubyA2",
  "key22": "48N1REhxpghqvrDYpYmxRHZEwqnKxmCXn1gDU83wQhrdpom51WhfgjXRbbtBnoTpTYv4KHZGRnWNihY8Paoyye9U",
  "key23": "2VA7hYr3ALbLWvYmTQvm71vmWMGYrSDPBAGQU6DueVYk3FnERtFY7iHqdHUJnKzvpWU8JWLQHuRiVR7LxiBbyBD2",
  "key24": "4wwueYcZq9N6969FeUDtvsyo8zbkFEmiXv8mC6ChaWRkXPhgf5p4Pnrk1jTExUxWqFBTFURkyoLS5jXdVSGF2kLm",
  "key25": "5DaWvBa2r8YqGmuAKZmNHDbdRswyX3ir7ptUDYq9PFj7LYrMyXmeBJDTZh9JD4gyne7H9QfNWhqmuw5eTE1DRDCD",
  "key26": "2CHdsi4zqE2sdP3XSz7AK2L4oU2n9PUZrkxwhRQ3zoYtfKoEqXNpnck6nYvoahTYvATMwoYrpHTP38VMqfCmjhdq",
  "key27": "4oy152estCcRbQ51EbTGykceXWXG16r3DwU7kCySd33QnvzbSMpmhtPLTfgtQYfj6NPX8wNgrXpQNEneGDFgR7cQ",
  "key28": "53ofYMc6pVqexX95Q3NF71moHuJmfiY8dsvCXzTeozepXQZ4HSoEMt8yXLAGGud9vCBUJwf6kBJRTHrJDZvjS2ss",
  "key29": "3fK9gi3v92vkRSnvmgioFxv4KmEJXSoDPjgBVgccR2Fn4puNzwkaiwZTfrqyrSJZxWHWSVhLAG4jBsbCRTHv66Fx",
  "key30": "5XhLY5RnSe6uisRCQmgBG27qjNCCL1xwFGfc6m2oHMywBfNWpHYQskFApeCu4XqyB7WCiJcXzqx8T9ZtQ2apVani",
  "key31": "5Q1JjPHaTJNzaf8NiYgBZ7X8EGhb5g1kPoBWfC9aJJTBoWfjk2dZrErfcE4XznNAM3rmqsbebbRTES4RSiGimJLZ",
  "key32": "39VEvFgiL5Q9wb3TqNHHFxrrv6cBRpZ3tANd8HmYB92SpeeiAeoDdDWBJUfQmyUAz75R62huZx5s8FwwXzYDU3Yy",
  "key33": "4FoqoZSUvpGL4AcZAkjrdz9Qibt8fxzW8Rc7KFBdXEnkL5yY2KSbLUN2Vet444STjxHJcCPfMVVm41fShQap4Ugd",
  "key34": "5ynUhwDF4AFKBAGk1dEk37hHWK4TFHCFxeouHZAL8wtyr6d7fQj8kMJXUArE6qx6WXSrdk4L6m7agF5YYY3Sk5ye",
  "key35": "gvU9v6WALGra43qZmLCTqJT7A16HEC9fCuy81VEFdqd3K4oCtwB1WqVLQn8zqFdcMuNNW7Vxqzv7D4zNA1G1jkT"
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
