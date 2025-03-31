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
    "5K3a5zkmebfhsYHA2GA9XH8qAxwWxcFmBgR5vqvkqfdyLc5qxzHPas3H83CZ6Q2PPK4CQwXyUevpdAimJk9kyS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duYS17WrNZwyXdepzw3GaJhrFfBLsZj63G6gGsaBUq7x5BnoGbnpSa8VAe71XVLd4SzTNA1gcUwvzDfXVXwV1bh",
  "key1": "4kCxELjEiboP9eS6sJuEv4Dkqnz7MtTrp2BsKsr8Y6hrJS4pWjD9DWpooyE3EApXMWXrB1p6SESE61aFGLec5zec",
  "key2": "5VsNXCQ5SdAzrUhrinNTinJR4HC2CmjyvRwN8U7XRzN2kBqiuvtJtggxKK4fQbCWSK9oMreXzff4VoeSoSrFALPE",
  "key3": "2vTr1khgPiwj8SaeUo15Fz2dQU6EhuVftafJjH22iruEnm2nL6GkMG7JP9wrtsQC5RNRV44huti6CXkbbNjDXxU6",
  "key4": "5nWUCJxQGuYcoeLcsAqry3ihX2hA76KBKLG2CQEHMKxVXiXEH7vQA13stBzu9Tvq6FThPckxJf2HDWHYQjmijS9Y",
  "key5": "2hX8BY8oSTe85odTCzT95rX3woXPoXrgFe77CmGZXZaCpK7su4xV98GknsbrsJJvjfA3Fpyjb8awovyuCNEFB3QH",
  "key6": "GcwWL1zeURR8XBHAXjKnuwDzm4erKaeYbT3YfwfdeyTMChmX8bQQD4RbtcMSZJ2Fe3z6nzmLKhw1nWzRjHkpANi",
  "key7": "2eZVymj9quSn9G6FQxCtAc2UUSAvjibhpHjxYADNixFUamWPCYbYDbsFEUpH1yVkze2FRaVwZxQQQqmo8o2pLqcA",
  "key8": "3Me1ByUpTpZSbGRcSgqHFkYuqDrJKbUfEp8z4tyE2ePNaDAfs3DEr4yKcwJoxTw4XDDVS35DSLTJL9cgVsLfrWxU",
  "key9": "2LP4TXhCd4C55wCtmuZMaCtWDnvPXaL7TPRFePazxKKK3Nv8WPMXum7Qb3mdVFqxYSeanZhzHFmovJkM13dYYe2r",
  "key10": "2dSoT5sxJE81ZqMnn1pdx9QDzzjsjXB49i89Prc2pas1PocNokLYpy9kpxejyDCGWq8GzA9isXk2WWp4SScomD16",
  "key11": "5Je4xD7JKYcvLat5A2mYPDJwpHMBJRgiGc7Pds1DMccb3Jix9X1Zg6K7yRq1E1co1MXaj2GGUX3WkRu8Kyg1eaRi",
  "key12": "41LCs6QXZ2Twp1Li2zk3SYi8G3BvRFenk5JiHSDjRnkg9VeGGp9Mv2NWtuwx6jSa6idwAQsAfUbP9rYKAJFtspbd",
  "key13": "3cBFgmqemYxqWEF8VTDArvVZnj2Wah3fTeGUvSrrnFjM4cgwtVHCKYtdGK7Emq6FGSnykZpEkCiucEq3ysh8p7hv",
  "key14": "3DzosVkgqTF49wDvLvGwUNDrmbwTK4Mo9BoCRCsFoH9kXe4AubVKtbe36w94sUPf982Lu27Am5fUEnzmQquNNFGy",
  "key15": "2811RpwxYwQPn4vdkPut8pYEYt1Q2LQkRwf3ESEv5CVSzuAhVbZXCbao1kaKsoUYF948g2HAfshs4dcpKnZBpWeQ",
  "key16": "3GBy9fjRW9qCtDk1EnxLzWna8xy4pG57xRhZb1W38KJa3pLE71oJnhfQig91u95b2SkaFZc32YvYjWP8ZAk6Q1St",
  "key17": "57mW8VFcvXeqDTYAHPfAHP7znv8GFbYyCi8b7jru1a7Aj4AXiwWy1DYLVBtovfQ7xaABoPLwec1z5tzHtsrFo1kL",
  "key18": "4s2h5FsE1dX9nPfdektWTCzxMWXwNAJNzZVUHnGEVBE9xm5pBgbSfZWzg9x8sNfSXkVRLm4ZUQ5QC2KYt4T8Drtf",
  "key19": "4xTEvEVyCCsyHw9SZvwNGkutdhe4Vj7quHSZrkh1jxmkpsjKHCQCmJds4cKsoNaQdoGsHLyCRUnQud4C6y7fZsQf",
  "key20": "32eCY55VpR9wK8zpJdCD9P9KrEioqaM8fqDn3DNsBffa7spcSepRAh9XT2KxbP8b98yqbWGsa7xgkGXE5hmuaeQq",
  "key21": "4WowksUW2AggRx9owq2Jcr8Xjt2jEuuWsjn7jxa1mBgR5j98b4rrUj8q2VQUvHewdstQbfuUEz2VSK3aFUc7bqM7",
  "key22": "2g2p4Z7nqV7br6aomYZhv4co8H7mcBJYYmiWtLZ9VD7LRx1NKwa8rjQbwrNSiQ8qud7XyZ8qysEeQ7PTE6MdNYg3",
  "key23": "56CnxRXzBd4iFYefC4TKYjNoYBMetTMqRjqCTfTxUuWjTpS2SE26HP9zisMzmXmeSpH5S24yG2JhjhAz1KaPDFFW",
  "key24": "2czZZRbt6tL9NjyiAXSbHwZNcfykRMx2fbvTkqBGspYVNMQXFfqka3cB2xvLkjpEy2deLjHRgqtZZzMJX3W6mrFi",
  "key25": "NsLnnX6aRgk1vSUrWrY3ZuKMFTRs4a8AHf1FbnYqgkkdoRb4GuVEnNCR7dLfyacomaPqPjSYdP2DU8z8CnAKcRk",
  "key26": "4AG9kymAbpt3MdTQ3f8oc37Fa1yBwCXBgPmRxSXknhrythZmFiLiRK7oJcRTDpsN8Wi33bajCt8UCp1DkmdwgK9Z",
  "key27": "NphYK93GLfKMhCCjNnt6Ma8SET84MQWoX3RnBCFTPe68QrraQi4xje3J9dw8usdsBthj8XKWJZRV1JBjCxqNTGu",
  "key28": "3AGnTfm9DH6TrP3vqi2M8MsmyAvJybS42CsbJkWvgpbujCfJ8eXc9vmQe3XTtE6NEnw2VqdLAxV1k2Dz1R7iJoyp",
  "key29": "3vxieEJ7pYuYFfe5ypUFQHDDb97wsWL4jrvM36o4f2ydrJdYn3NsQpYo3PV6JMMknayQqyCaVdB2uPPXn8J9RrKE",
  "key30": "2mEuzSFvWZuk7du2mYmsFKBQZj2fwHP15bn1VoeAydftBKdhAvCBanCgyem3zVMCkRP3T1U7frXfz8ffK8jCbQ39",
  "key31": "GwKV8EUDnrA3cpZRUjsKubKnFFzXDWJnKxoBefKoXs3KBPTbUtnE6TMbbR3b7MQkeW64JRd16D5L8ed1jwdFmZ3",
  "key32": "5mG5BmGddSx2Njgg3FfWmvM2NBzi85qC9h4eAsh5Z7DYimnhpE6p4MLomJHZrM86Dk7pFUSvfrpfqFzmjadcirMj",
  "key33": "5QdAv3Hnb8VSKvkhc4zKFGRQhaiiTwrYmQADt7oSNBFDtwP3QSKPRs1e79KEvgruMnwnqk53wJiinVFUuE8Awneo",
  "key34": "58aqLioF9TWvByRFnndJLz9okBte6qs6kPK6QfqeTrZnYG96qGsWYvYEBYhL1dSAoxLLv2j8qqKfWjbfWRca24BU",
  "key35": "iGCguaALUVdrErwQtaqHWvATFfBiEEuHtoErBhbvbYkjdnc1irQRruxavnTYZiNEnbVuMoHEn8sUG6D4mgP7pSF",
  "key36": "5vVXzpUWWfCLgTpfRQAMsSskMiVhzfygkh3hx3wVsJ3MTMHVws6h7mhWox3k6FRYARs152PPvhQ5Dic5dHDC5K2V",
  "key37": "1Z6g1NDu3PurRCS22wVV53UDoS91ZDuqpSz688PCutJhCZB4eR76LQgBrTUY6rx262ZmAWbqJ7Ntyku8MoXSu1B",
  "key38": "2YXx3LhYZcWEpA7wmLcRAcPw5YwuY9VAYzpy28t6cxnhCZE3iJ43WvPWtLWVHsKee3XTQHd4qyoNNKCm2gUZ734s",
  "key39": "5duDLcq6JTB5UdUVNehmHkCWBTnwpSZLr44sL6LefgzSGGTnd61QrJmwzu5ZLugziHMufzVudCi1BDvBr9JVCK7K",
  "key40": "4CeBcqBaj6B8RYonrpzvxAGWknVEvrbRPsYscsUy8mamNNUzhNNUGUPLXpKUGxpqSHf2b1DKG3YzfCVKvzEwZmfd",
  "key41": "Jy5sjEDm6edfw9ANQw5d2brxFKKdCGt4ScQDXfFk8tT2TMMs489w6Qto1KcRfwYWAkQNfrBpCSpqKkL4HGEF3cJ",
  "key42": "3GvELqEiLMLimuHbFtoRtEaNwX9BTcv7nEEFmk2qbJThPhPdtprjKBHxYdKEHraexafPKtc4PXq8fix6S5r1SeaV",
  "key43": "3wqW49TowdeoxzQRB5Jj1zrQWb86UEEVa76HoKWd5bcA2vUkWGgpTBf3P8SRVWz5BDhwbu52q6BUG9wD2TDvyW6M",
  "key44": "3XFhmwQ6BXjQtACi3ong19KwzzxSX9w4szmy3BqBjWDqTEsXkY6L9zzGfhpDAB6VAbLVr6WK2PaRqdbgJ7CWg1yp",
  "key45": "4vSn33MWgEVS7a6FTfEaju615xcmAhrtDwm3pykeDcrxx5c3qtgyfLt7DWs3jddN5vC46yyKFgTDyFG9jEEoQciW",
  "key46": "3cfpXnpMAMB4xyBvuTtL68RPDnRfMRryP8d2o9n4Wef6S9UbN3cc6k5T7crMTHxwTudPs2rbnnTTuyLN4wHzb1ng",
  "key47": "hMYkAz9xfGYMQd46CWyLEE34embsoJFwQcarKLFRvJw4GTd1ZjfsfJFzVGzuQdNJAo7mYh75gPMDxodrPay6gX9",
  "key48": "3HqC9kkP93PRSBjiSwJVYZr5d8o1TaKRbp5rK9HJD49oYnRKSujEpnZUtB6BwAdJgA8gVDgaYdq2BNAQE12fvdt9"
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
