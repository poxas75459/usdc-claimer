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
    "5RdxQtpEqR8tEVEMUfrWgaNvs9Q7eaYHr8YXKHA2EmKz6SGgaoZbHnfgjjEGrP5qZXQUzrEr86mbjDvMfJSEV7zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9sNszwfk1jqxNqCisD6NERVumcaqAcUrwPNqWRVmK7PYZSERDRyRAMqFG6zRqw3HUWGCHbL4vDabQ3uFZWsKx1",
  "key1": "3g3ofosfNoomRwu2HJABf3iUDrfLtZ7Jjnj1j19sun3jc1W2mmkLKP92yhJeQ44jBm3gtCCMKHjR7wtUoq5R5nN2",
  "key2": "ytzMY4nAWfxqQydTzFBAPTeAKSSBHsLuYX4BaLvYPXTqKqRthfjSCYU8NmjYmk1gtkPR4diQrFisD4iv9esQmiU",
  "key3": "3nViSDS7Gr46uXbjQfMRVxsQSe2ZXnQsrZBCejpyuFnFg3WE6AiZuUsb6S349EpAzpE9Z3Su4nRxKPSPZHb8XdbD",
  "key4": "4NbLEzrq6r3mJbVDvYw1nmEcX4qcBdXyA7YTR46WY34cuDV7DCDCuVQjtRtfDSgNfo6BgubH4Xt4tUCFfpDrrUGu",
  "key5": "5Bj33y7RPEZZQ4x2tyLEJQqg94LxPZhgv5xHs6nTUrtqS4PhVpw22mLYpBXvxtaU8wuz9BGpHBRb2acHEdjn3dRQ",
  "key6": "2JS2YsEZ3iCjvGMvcGrKLWv9Hm1nbXTzS2wmH1AGhwUoxspEtyudPQPZmCu5ZqSNajccgQyjhFRtavB62YVYQKZw",
  "key7": "2ooD3GtSQvARR9YyB2PjF1tYXMgNLo5T712w3YiKyVmbBZszR3tF3edjxmfg9KJuQLJdcVSMDt1pYBWtS9784ojd",
  "key8": "4RshP7pkTqkoxkn1Wbs3Y4AtZ8ajVVCiBMZt5WcJhW6WARqzgi8zmWQiWCSahKS7hfrFTihzY5VvToK3buhnozq9",
  "key9": "4X2b3G3E75554u3AgABvxothvnUYC53TTWAUbG3VTrnCDv88EknPHecQBJsS6cdkc8dvbcuamAnGjGMMbtC8tPm5",
  "key10": "2d55S7f8tWWijqMgZCXoHGpzuFvHZNqQis5WzjkUeEhB63CusFdSM3z5v2vYYao4DhBTfZXdE94BNQYpSofsUwZz",
  "key11": "tcSEK63aVDqPzNB2q6FPtAJ3ftYkkvrNsHg7jBT42sevQM5h7z3vwYs2uKrenm4AmFGfdsHkUhpYpMEKS8FWWfP",
  "key12": "48wciPSgzKYfuTAVptBHMn7tf4KN65ABNJK18sf9uUguYZgr1omksUzmdeXaB8C7DW5tKiFg3zD6YkQxdGB4g21E",
  "key13": "G8kWqEzcgDywTw79MV8XsumLDn37wKVqpRTUSqQxnNmxRLSt73rBPR9Z6V9mB2zerML68ANmnUp2c8rvopuGpvm",
  "key14": "3B9NpXYosLd4o3CiaAGvdw4esCpzxDTEAstPERes4ACj92125W3PCU4auJY2JG1ABbSLd2nF5rzLDDp7bRaduE7U",
  "key15": "54B4JuwuHfH5NNehRA4PiAAUxdneo94uqTg7eJY2h2Fkrps59sWXkHatKKqPrjQSAdLcNsk7Cs5kWTC7ez4TvcMp",
  "key16": "xGXUXZzV9SnFzXEqBhjo7HYWu9WpmvcCwn8TFfdxt7iGxDzoL46sf2TdVXTZDCxwWN92USC1PmeqhtqpZHHZt85",
  "key17": "3aY36nrfZMWGhA3o5YkKpLhXAqXfzHvNJGpKSQkT8ZEHv3Y7oSxTf8FG2PY2ZmdRemPNCyiwfrXBu5Tc4xiqFxeF",
  "key18": "5nM3f3dvysujmkSFxDA6Zu8jkHACNC5ABfMTusvoidrQLh6aiHb8jjrczsN1ZiazXDXdMcWTiQA4CcGiWyGDMQXJ",
  "key19": "3BFfQFhehFos6HqoaNtNujXHn6hLJ6Ctn4LJCVcCp6kgWa1aCr2gB6uT6xHve79X51uZmxfjMj4Hx2weHUhTAVmr",
  "key20": "a9XkEZum9j7mDRuAKCoVWS3B1riBc5Evn5TJ12Mc3qLfiuUH2WHKipSrhmZ5iYyoV4EXZP7X5qAELkr79QYCe4f",
  "key21": "i3UmR64EjqBEGpo1gBw93f8nGjkgTxD85AdKbiKdU2W1UekXFG1bfTZpy4z14aMVgRY61smtiBFLgTUj2ZmftHT",
  "key22": "MstT7PN7bXgn7Rw7aNQKLkwhD9JFo7xgoQEJZk7nCSHbbqvzSUV6ve2DXxUidiBtqdz6dr3wVC9mH3xXrQr1drF",
  "key23": "3zqnrHL324t2JEvT2F3MAbDaSo6hjnHzAYVy97meNisTkgcQuxT716xer782XuGcEyB7MrLRtG4Q3haiUrhTQMei",
  "key24": "3UPfLuVFd6XySwGhHeULPD6JvLpRVk7SRNdquTLtHxTzfsrfmWco9m7iPvD6ApygHHeQCtGcPvK7BVba7KSNamks",
  "key25": "3Z4r9S6Sa5zdA5iUvvziQ5FaQaoWN1J2Zpcyfpau6sJqWft3uY8jkQQTFtfgcdfCtrABmKLN7mFxJ8CFi2XRkHxV",
  "key26": "ypPTUiGq7ug35e2tX67MgE4LXc5GfpzQRct17sfsQuJQ66YUxkSfLQZkFnLfSkJ53WGaziMUpcfC14zqGhSYFSU",
  "key27": "2hYCtcorpKnfmGnGRVcdJTtQnZ1R3Y9kN481w4XF8CQMNLsD5pjyL7zJZSCCMtW3yeRjfj1DzZc7Pstq6qWDKY1o",
  "key28": "3NHsxd5gRBcWkXbBrngK8PZLaVzbDtapAFKZx6iKiUvXd5AtrTQJwdyTmEn5nL3gRFRkgJSp4bYE7k15xqH4HfZW",
  "key29": "5ejRA7rgu5b8dAhvpTvFbwhXL9VMVLoKecYb8hxz5fVGxUPMSn4yu95xvQ2Ros4DfB5P1o6nGjpJdGNJnUgD4hoj",
  "key30": "4o5LiKp6U87FzM7LoB4ir9VojCRzbPbS9FQppJqZMx7pCRknmwFFwgMM7WBQjyk88iHCWHhD77hFF3TXJ3FogxdJ",
  "key31": "2QyFAsbwQQF5KcdsVSnfgacPBSKqatdg2mVSSk9u62DU7LTucgURJUUYjhXjTJd8kKU7ws1HoaB5rgihzvKFpFY6",
  "key32": "5mHJDD77ewgBnyGroFpoSA3Tac1JG6jTReUBrf4MBUW2CHeDkeA7En372cviyTrX4ew2uKCFopfTJbjnanCa3qaZ",
  "key33": "4QJUqPp4pGXtzqgeANEdCrGVALgSyP4811f31Py22Zxkg7xpphYX5xE9z4AN25XNfktdtcnT3yJywuM7xWyfE3VM",
  "key34": "2oTLpre68nBNVQP6kpueec7rUviLqiciaKsJpN5PujAtv3V68xtQeCkLdidtvq46V7VYZBNhD9T8Fuuw2TUaY834",
  "key35": "3VxqHzpxv6ZPGmXjv6xcQCxgQGQCcobAyHgYjLNt223XRUp2RdYxnph2DrnhcG6F9vsZgsxUXEiEkvGDnDjF3SJt",
  "key36": "5x8834qqRNpjcxBxUKyLigmaGwbz9aFaFQA4XCVLn1iJQWSp9Jx5hvEE4bviKRASbfdL16cAw3Tm8f4kbmdtYXfD",
  "key37": "YBcPAE9nerh9YRqzLPdGv1yxx9zeCQpguK9HofHoquJnVDEYhWNjLmrpQupiiNFivZ2rKpXqLkFikJdM7QiMCGC",
  "key38": "FeWUKKzwEmyag1ZaCprwKxdtpe7sj1rTu7UQmCvjXkcjmTpM9mPTcCAcxZTNSSo8H6K6N1Hb3YLvh8zjj1Dy1wc",
  "key39": "2FixHTp6PzovJNbkbgg3TSHT5ua9Akrv2rey5z2Y4k9U8RxPgK84HeaezqapzMV7W9tGjKgrh2ZpUj673uCKE3gq",
  "key40": "5PeZJcXk1M77hP6nRBXqj66PMzJXyUbyv5GQxwhCGPYwKrcYBfwQDe7fYpZv25xTK8gVy3K2KXw2ECbUZrJjTj9D",
  "key41": "5FYQYjxfMnUh7GdfBbho8cgJ1aBNiXtQXPLGumPvwQAQzE5fUhhXgpfDuu4tGuyX1AxzvqUWfpafJd5kAeZUr3GF",
  "key42": "hJMhBdn3GnjhPMYzU8NvBqUnF53RQfMuxr598qa1itRc72Cvu7D8AnDPaMoceXux9GjM9tnAmPrnGxQqCgpAVBG",
  "key43": "4Wt8QyYXEGef9hT3wFM8wyBdDjr6SpYeDoUkaZBdMFJLEg6NHZf2f57n8fkXRjQCZLsuYDueP8tsiebXMbA1VLGw",
  "key44": "5pvRBHX1AamJfwFP5vZtJMbwMxmWSe4gwdW367PkXuveH6qkxqcbHGefY9qjE3bYALGCXo95EtmHLvqYKCeJBnGo",
  "key45": "y352C3xcagcqGyW15wmNe2WitJxR2sJSzGzccxiADHGVNFWe34EEVm7oc7wKXDMsanHv3LTtaL7cFCmVr6DLvn4"
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
