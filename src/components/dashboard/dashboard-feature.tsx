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
    "5ee9vPwhkEGtcJUPEobbFCjCFztSrtjmQShP2s9ey935ZiG433G23d8BqVQEYZXHYonRYZpLm3Yw1nWp6xY2XfE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9DPbpMeCDBCxdjjiU3o7xoJhFtftKC1dZcYvF9dyiHM2WUieq6xMpLVmskXv87hbsniQc271nMFXRv85PnD5UE",
  "key1": "3TuYrLQkUK3Dq72Mc7Kdx3Zw7NZomunKzxVGNASnBj82unJ4HNLuKRnpj97yTdNSQqDSVtyaMXQg8KzwQCQo1bMn",
  "key2": "3FAdPThiEVG9bxAcpMw2tTfhvu8LoSz9MMruvr1aPykue9hqDGWrJ75DZQbzix2YcQ97zr9WbSmSzr8EFcZNsrMM",
  "key3": "CsnddUwrhDqkFQVkWNZR1g7KqYD9dYmzwtES8TymVr5GvYJWxDwZ7yRuT3GvcidxkAhKt9B5vHbE1nTHgneiPUA",
  "key4": "4ntagKYVuVTuoQUnAD1835FYCKpT5o5ikC7dPB6VJasg64tc9XBzR74CbroygpmRC4KfYvueWo6b2KdoJ1o8a7PM",
  "key5": "4JCZeJxmyX4pyD2NN87FQQEMM32Aw9eByqPnKj7GjPyJeFQEHW1uFtMiU1UNqTSitFyjc5RX8v8MLwBrgcPBRJe2",
  "key6": "2uzXsjnNqPw293s4TnhLgHCm8BGS71icRAU6NvmPmjPWxiPzxNqu9B5n3j7AXVAJC4jCWhg6MD8GBT2ek3Xo1HkM",
  "key7": "4HmPp8M5CjvMnx9rw1jMdQwERRuJe5NBgzsefuyE5dDNNCgNHHrw3UNCz83CfyS4xY2s8ppPGmYZZDpHNW65QURB",
  "key8": "3cGrGgC5rqU7kdMRn9okRCjYDH439MTG4p8MofGoqLptnQ3PBseM7Uz9JuvtYfvUNnqY5HxsRDdMxEx4mQvhHvh9",
  "key9": "64Kq8xshMA3mLo7VFMfg6NGPifBQEFUXoq9pXjwWyJtDEMbEuiQiJGzdzRExgGmSqpwGarcaoaUigXoEWAurHtrG",
  "key10": "477FmqHhTcxUFMA2JcGD7AEijTaUs3XHMcmpBrDaXueiUZTHw5cbmQgkv5Bq3Pxe4GeguG6zWtvRN4zg5NcGR8f2",
  "key11": "oANg9ci5m9ScVbogWTb3dK5oiTB3BhwBBMMqs1zefLoHfACMQa6aLhtkvFt3X1ug6DmcoU3QBfGjgYC6sDgpxt4",
  "key12": "24hBNQhjmGqPtgQs1yBg9uziR6YMEHsquHT6Wz1UDgp64pe6GCFqMhuGD86FPNUo57BNzLqJ6cxgqpybQhjNW1HF",
  "key13": "4Hodvr5MG9KG8WtbXHiytr9dBfiFhtCniVxDvpNqXvaXXod1q3bK5AVEMzG4T5qFY3Z98GbCcdiYmDYnxKDZv3ZH",
  "key14": "9h7V4sFKHXS3ZtehvsRAa5bXYmioebabwo9FbAs68LAsq2UsCBmPBoLKW7ZwJ28qmpNxpa3rGVmHekb9mMP294w",
  "key15": "mUyRiAke2g2VZQzzdGJFZySSdCNWV5jssfiNTmnWKRHcK8oAx6UJRhPUbJ4CazakoD7hNBzyv81PVRmxJewcFSY",
  "key16": "4qSJVyPtmQUgHZnM61rieYpDBwmRQuP4Bj4eqDaRhxFBNyPr56AZchom83r6ncRz1jgxatKaUVQ2R9qihQLaGZnk",
  "key17": "3K2jaSWTPhBDKZjucCkQmtzNenmYKagyEKw4i1LPsvaSY8tteZiw6Zx2XDXHJppaJSwkEfSq9AGcxkzJr6b9KMGJ",
  "key18": "3f8Wd23WcMFmsmph3Yy4ALsU8CY1Fr4KNLCwC51TXYVDpxTMLqnvb3TS8apdZ2Sx4ikbD4Je6gWUjg9zXvxsHySP",
  "key19": "3N2hKScKHVb3Qp26anZRuShnn51fN9veqYRftnvjTJ7BjzgRnaw6mQedtywYkoV4enRhXsjBGfV12k4PDYZYR733",
  "key20": "4AYUqgtqiNUbCZPtfgtE9tu5j5NgJCHbJ1L4tjcfEXnAftchdtLQEtukKwdKz7GimBdQCvsW76RJCqatfGEMrjr8",
  "key21": "5ZG3XoyiMQCNNs8ReGjWkoNEZAm3JGKzCq2AXKj64rcwFZP42ABM4TCQNTcTVKW5MACc5Syja2KsDs3mqSKBFHzR",
  "key22": "4H75CbcsfQb49axcmi91p8UHYit6nGhSy6WmNC8iLXj1LAzCjpGm7Lm7dQi4FSnM9yr9hAf5HZxubDfMT1yDQ2gr",
  "key23": "RW1DXXmJG89pvEYMSM2u8GK4XwRawxwmFgkatjM8Yqa3ifgTXbzKg1RvJcjaQQ8ToqK3oo1YgtuVe474ZBdmA2j",
  "key24": "65ncPdmNdvx5ywfydNYiTPCjNZXx5exMDh3iEjXBEpFi6T9twwtUiv13dkaoBkwSenDvJf7XkKeG9GSS65Gmh7sY",
  "key25": "4EP4fVruPbRA2i7YchTwDHt1rRQ36kMiLyBrchniNDn41zuu2NSESh4jZ9Uiebet1Ra9pc3sXsZv5LABwrjntLiJ",
  "key26": "4ctLtg9v4MjVPzYdsAYFwUJQDEtG9dazyzXnkXbZzQByNpsoY63DbthsstB7251Bi2SFmnk4ddhbNe4r4251e1KD",
  "key27": "4ALA2fBsVhSN3c4pVZn7bVcwr7c9BHaYwVsfmANZgBXLXZssZaygy7oPZ4rrZADVXwG3oM2Gq1tHtQZqCxoUUEow",
  "key28": "ksGumkjgCShzSGrTmPLvj91z8muc5TfBcSx37YUCB47eBsergKF4jmNZFxbr67jHDk3mHxomEZxX1MtHzfdt1m3",
  "key29": "3saNKZ76ruEqQTZAxbDjN89ywbdM29xWjnKZtJf846Fi1bsRsWWfrYTJiDzbBN5t6KdyRc3p5EzS1NLzbNwVeyxV",
  "key30": "4vHDZpYnhQGQybXnVs48u7kp5dC7UAa4k8M4ttDeumAb5tAW4U4cThrJNz8KJMzjedaK2ayZZXE8S9waAscjxPJf",
  "key31": "3hMdHh9hbZSHtUVmEZX4mTw7BULfRjC5nJPtgKYxpQqgTNSNKt5rf5Q9rCBgvTxsAmPiY8eYiYdKuxrqLwQKRPny",
  "key32": "PsvfxEdoeGSSr7eiZvp6dsJ89HhTJbmNtYTRPWWC4v7JMB5DAAXsrpJqAxX8dVLzBp7e5GNviLAt8x6W3qhJyxg",
  "key33": "5w8y1zkhG4Uwi3smZRiveLTPyoa4Lvpp7kX41SBJSKDfJBUsDAqtfuKyZ5sumhAiu8UJKFRgw2nqY2oxgiVwUFxB",
  "key34": "2j8Eq2xQKz2TvVP767egXBsLsP7svC3fme1v5Jp2ukSPpQaMTDEzhGvc9MjiSG5BpY6BZ9eUC3hSBEoJkgX6N64o",
  "key35": "4w7MfytdfF5qdfthQGXMmRBQWecsR6TLT17DGCakJS3Qzu7yzedhnvZg2dx1gCFk9crLroqAcDM3xiVjMWASYHgp",
  "key36": "3CBLZnra2ui4ueNB8vbpR7Hfbv8WGF5yV1ddn2dzFuQgkFN2wyWCFoSLk2YH2bg3ekZDgYgL1z73yFHdTwsaCzqk",
  "key37": "4HDgHYUMKSLD4TwsKiNRahoS2zP7rWdL1sJb3wpu6bq1quenPz21AS7AaxLaLNXer4WDDZHBNenV7cSM5XrWHzNC",
  "key38": "2BpGkUigBx4KRNHTerWnMrfvgkXMDG7NaqhjUfBfJYjy94bZ4b7EEKinSE3YJ5sPhR8xbtf4UH9JtFyw4J3ekfpp",
  "key39": "YoaQHDw2fvzJAH1bBKMYyLdL9nfoCSLC9feEHxJoVg8diNKbyCP6DQaYi8izMJndWjcbyhKsTf9jqpra4TkuhS3",
  "key40": "5khFPHHTcox15EeF21uzTssd83V3z26ShrpNoSiYgY3r2tCqiG62aSmGJySuAfS33HzKKPrrFEmpW6X9wERDjNeU"
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
