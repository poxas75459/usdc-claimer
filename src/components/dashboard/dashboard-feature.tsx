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
    "2dWte1jrzZKhTPwqWZEFRi6MgExbCUXywssFG6TJiB9HfQfs5PKQP16vWXFGjKuNESwAbgiBrdVVWYg937wrKtJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxwrcCvxLUp4Six1w2NknaiFdGe7T93cJpABWeuZRDM14j2SvU3fCbm34iXvBGL23t5SrTmkTJFJf6xUn1RvPEX",
  "key1": "4kbxipJjfhUCrkhKffGipPo8xpCkyedXbk6nxZxCXFieYfUBsGhN3n1jwUdYApZ7ctPR128Zj1hP8828izfiXDfe",
  "key2": "2a3weiT1Fx3ur21e7cBLZuKwyWwD2UDBsyGz9YJCsi2V3ma9dZ321AqS7N2f77As7RJDp7JtSjfLEgXGVh2spTea",
  "key3": "5ULknYzotBCBhepkYjQVKgMGhuxVFCSXLu8mMJRjBFnUvZC7d8UymxVXiTaeQegWbYJd5mAMuYy7XNtesArRVhT8",
  "key4": "4EEy9f1XZsd6so9L2JjX9DuwKhcSRqJP9YJP5KXpuk4jyRxND12WTWG2yFZJgSuPeyY7WVJxFc59yrRXUr41Jc9k",
  "key5": "2bYi48y1npYSceZjF6FGpD8T3yPccvF6pEs2XVTrkPzbxhPERxHSethXkkv4Bjaft959QH5pLc8KDDoqLjAAEKsT",
  "key6": "3pDCPAKcAp5xbDidUWruXQCDGWR7VVvrwYjBmxMBf9dwCvjGsdkfDCFMssWLQAAXDKdhBiLJPjHeamBa4PaQGKt3",
  "key7": "WVKt9qDHquGUrP4mXJop3s7isxGb5HaBLg3uouZKLayjJDBzeietAws1UaR9kLcXMKdHwHd3SWYBCgEHdvqaqSk",
  "key8": "2YtetjHzLjbaKTf7Xqv64hkJooPdVCa3ytwAfzr8C22RfNfkpn2dSoSQ6oxLhEAhnKsrxeG1BrmPeBN39No3d3Tz",
  "key9": "p6GbpArFZZZWr9o9qyLy4q7ZHENgw3nftvZsj3XhjYxGg8dtW4Ju7widnjpGq3Tdq4G6L43dGGcb7bRbLijsfco",
  "key10": "3iVtrjHUkbV753CM6nS2yhP8qqeHrFYi6MGibT1ros5xDS5YPKQeimwgSmhz4gWwv2e1bydKjcMTqB2BxBESzPvT",
  "key11": "3JHxur1XCXYveRFTt1eqr7amagN36ezQZAqGETF1gACHFneVn785rGFCd4qfY7EwncMByz95JVQiyKb5AqT7VCX2",
  "key12": "33yQ9nmMg9xRzPLr8w4cYzZrTxasPWu7gsBpAVagSQTJWTnkVv88iW8kx3xmi6QTLzHKchM53oarKESeJ1e1St9D",
  "key13": "86utBuxkxasQx45bGaSsNGbQieridDP5sBE96dj5aRpjewFZxUJStoyYKTKk7UsTayRPW6k6KiAJpM8X28LdBGP",
  "key14": "2pFRBc16137KVjRE9JAMcpZMCfZVL1faukrEEfnPPqotcqDWXyukmw3qU8678CsLR21xWLPKXhWqeWT2gFT7urK4",
  "key15": "qNrxH5iPsNg7htbQBdApEZ1KvyvjQttEatwi5iZx7vG8pbjZocZWEr99dc7j3Z3pyaQEtLxe6PDZhu2AmnEZHxc",
  "key16": "3TvwCnxxb4JWfrqaMKmJ3bTkrYwQbB4hrnWhfDF9UGMBCKtAsEv4PoGW13btfQ1VGAG3zdu1nnUTqifYzoNuArKD",
  "key17": "66XkvCV28rkVQR2GW2eGzQGDEnhj8QGuWgJwreBw8Yc4L5dFR237Snr2d7PRnkfxf2Q98wPeCpT34YtGiQLw6U2A",
  "key18": "miWnnVaskBuqaufQSen6UySoFjeta3p9fdwWu32FdS9UCKTaFXAyfvsswY4jyHEvBksHer2xcGKYxBQXKo3oKDA",
  "key19": "2E4Z9usNspeWvEpFvWkE8pFVzJLrme2bckVJFDB9LSF7oAd6RYrzNKyfBzutP7aJwPqCbRhtMffNakFPxamWAnC7",
  "key20": "2bycSffbTyVujAJTKeHuZJ5rw1H28BP23BPiCqQi1GJmZNVywWtbNemsrcwb8Gufry5hzjjyRmM52JNi5HNqzSge",
  "key21": "3vavTY74Y2gif9uzLcaMXud2FZ1C6UV5fMqsAaBKWkzqcFdd5NXez6AvVptW1av26oiCnXBqxTJV16Buo9vzrax9",
  "key22": "5cb255g6jTFGDCkYjrrYs3oZ2pV5yAi5JxXQcyuAQBAKRpP2sju6fgBGTFPDiC8kqfPrPo4YguVjCoUek46C8mVC",
  "key23": "3cQ8EzYUX2HqjnztidVEvzimvzSMUQ61GtChqV3YTNFtaWzNQKzZsoWhSt9BwTzvER3AmatY8TrKxsAcgQ43WQi5",
  "key24": "5yTeMrDS35Dpy1dAo6v15TDfwQyxkko9gpcxie65xhtsZp7rDXcm5evmo7BGs5btqJ9X4erQqNZxtGGuXmLUSzsj",
  "key25": "3briHFMjGXAv42Rbfo2zfyoyJ4W2C5NwwNWnm9FRsfSrnfjigmfP7SP3YzDiHS7TuVKMsCFKUH2GuGGxbFX6zYeR",
  "key26": "5d9D7YT4whfgEPMhy14wZCvQu49tJ5WHJYMe4YJgmRDmZS326LMMqHEDdfv6HajvWxw4fimBEAY3FZn7FwTMjEBj",
  "key27": "42aEJ4jXSw2t4Lhg71mkX374grLdRthsvnTrDqxUvBYEP7eQSGvChUVeHW2VNCCGp8TM59YDYZXRwz12zVMPpubC",
  "key28": "2p4D2Jhm4CZZxoEooTXK1WkppUCVd31q5VxvRDcHpL3Pn8RTVdwfTZ7hab9SPSF81mZ8fGQmPd1bjUfvQQWAA833",
  "key29": "3nNM4khhQ5RVucZ6BGyFY86EpV8XHc8L6dSuUXcyC7bB5tWzqTRz4Vy2N3G7eLyvj5a9yw5ba6Hv72JHCCPY5jMg",
  "key30": "rv8wYb5HucxEB4e4vJq9j6TecS75KDjtXGUdkggDDdktSqoF4spVNwhFgX1JopxnsgogYPWmwLidYFtWJ41hzax",
  "key31": "3V26Z2F6PcJZ5xyPub7zxaGHUwq6MyyzNht6mUymb4YXvwTZdwJJYvHuqzkoXC4XKXkmSNnUeAUe6LgkEJHckUuU",
  "key32": "5XMjBKKFKyWFoCJSEtmK8QT8St5VFv6VBqufUYVfu44xeiwikVBkQbQTcBJWiL6dGnxSgbz4LBgerSbgShR45AEv",
  "key33": "5S62zFxpEWhuwjdoL7ZrThRBoVgJRcZzY6X1qt8mAxTRLw3hvMLEpPz1HpeWVcsDNdbjA2xJbY2foCCY2KHnK9m3",
  "key34": "4X3Pp6ZUTANk9LH5e9yoLP5W2eUhDXr1DNNb9A2AzMJ7CAqw3Lc4ck9yHt3AB3na93iGB2MnUkAnfGJ3Havb1HKH",
  "key35": "3buxfNwfTYCBGZ9GaVEnhz8kPAZu1dEgZ8eWBLEHuWCt8MtoVCpaw8m1dDPZAKFcHyRSnEnLe38YsjKimzySiV8W",
  "key36": "5xH9WoYPsG4EywDfMobE3p3EyxegUuVpoCvk36WZjunQ2rR3GySFhH2mUBPXidSH3nxgwQkzW5Dz5DhXv4jJ2bgN",
  "key37": "2KWjTcaZh3gGHfuN8K7fFzNnsxvPEapg6N1qteUgnWWiREZgjE3y8Wy4szUGWx5XLiUDuDmqCfAm6uGRQZf8C1Ud",
  "key38": "3drXUqVYbpN3VdzEkriKfrx77ZuUxG35pTYforyiD81onXnju14RUJtFcc54WgCoxGj4bTn5XWjPDtRVgiKAUx4H",
  "key39": "5WdJFXUgUxGWZSV9EBWQwKkkw7H6ferTUniJRtSB9UcS1x9KDrgPYi7XrmuGfCkeYg8XZZuMip16N3HkWRQwnotq",
  "key40": "3SfNA9mFVqpS3jTvPomrwe3M2Ycep7YwideZzyqw5THNxhjQCLa1tsBgrcvTn6trR5PXV9dH1NPQBCjQcJ6Du5c6",
  "key41": "2uHyrefuZDQG73evx6nyH683k3j3YCa2DinCCB1sAkiN1qRapeZEELKYu7dnZKeej71Yz4hWTrT6neHN1dHxdZqq",
  "key42": "4JzvrW4w1LcGTKPfZLUT1cnhuFPrJZp9tebwS6EBAeVAF9it8EYrQYgqyCc6eE6xyYacvm5Bn5Yqh1cZxDxTsUSg",
  "key43": "2z3CjoZ21jPxqcbcWzhurtAJcxxwREiSKsixG1yEaRrtPqqcAgqLKPwL1RbU3UJdFDavMvMFKMQVHeGyF8gJNZMj"
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
