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
    "3cUyaWH7M3tAUNsARPYgThts2qK9WNBAk4nBADtE5a6FWng9vFgrUtLxkFegZdJ39gxLQaMAwYcUYYNcEbt8W12D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495soczcqbk7UUSe5WQ7jsdNC3sF2awiwc1i6Bbf6FXUALzeghL6JArc4xStffDQd6zTqoazZrkfEZZtrsqpbdEq",
  "key1": "4JKGxeVH8Rh8UEeQEtsZ7mbTxcrZzZ53NByCTNqH3ZXtTaunVZViaK8wc3vXoQRpsuyNjG7JfHCmFHidv7Ftw3Kv",
  "key2": "qJbFBF8umtDmLpt6sr8AMYCst8VxPQ63v3xRfxA9oDkWsL7TEypPuWhfc6D76izENG7WXRKWmRfJyRvkYUCuUv1",
  "key3": "4ESPuLzUafbHtfokqLBcg6zRw8p1HgF7UwPQWbPa3U6iLnSk3upwP2MEPxSex8aEVHPGrJNoJcbseo716qNXF74R",
  "key4": "3Ee7JcpWi3exWbTejzDWiDYMqqrs4kzPvXJjANhW48kRxSX6TzQ8mePWkFd4PLFXbHxCThngZU5HZgSMq64Zu5aZ",
  "key5": "2Wk8FvbdJUNAnwx2p6VBpa47V2SeZ9ZNAo7L1qWJgDggJ2tBQTpbEzD2BHswNk4nevD9cLAGAzWLXtaF7WiCUXak",
  "key6": "3o6aaSHZrTKZCe9MGjmMrimNgrD9NBxrGwHjMfcimzw6nXsMJ9GMxBbBD7bm5ow1TddhsbUb7dygQDx38FGNENVB",
  "key7": "5h9L4uCb4aRuHghBDyXtfQcyrMR99aP5gY9o2htfiYa5PEnmyjRhcxTnU6zEEsZ6HSgjHghGyZz2Auj4CmxGZQkU",
  "key8": "B5mVaaBgzdLsVAF46ngPDdYq4uQtq8ZGMRVZu3CA7bYxhHVphqst22ehXSJKf8dhdM44oBgHFujD6tcop97yxKW",
  "key9": "4taC3ku9tmFNcCb96g85KKWqsjP9DfpMwCCRjmjnFNJCMzJsTJ18kUswBFrVme2LkosirjWb9RRUNpxoaXKdNRCr",
  "key10": "xX5UmbnZZB5jn5MbCi3tcFe4hx6VrEfmbcDW8Hw3CoqspsgKjosCek5YRzqM9NMdFyX8hnsBW2DjQdoRmBbXBVM",
  "key11": "5AXNNdWtrcpNct42AzKG1N3qLoQUnssMTfH3saUUsKAQ8ShM3DhN1VNJyZzF4v3584cvu9sdHuY9U4kYv8ueNn9W",
  "key12": "3MwtoE7WGGXNEcAYCP3jk9998bs8Mw5nXUnUx5yMFfhbNUr7ZZnQP7m33MkyiHjFUy3qEY3Q41pZ4ChAM4QpsAx4",
  "key13": "2Qany8cPMAU9NwwJHop5rSZ1y3s8uWTmZYvMZmsYDbwXN9SXSyfGB6U9feUMcpdMAQc4xYTEPbvJgpWS3wrE1NkB",
  "key14": "4YMMdAFTyxFwbHMMGVrvG2i7BdTz8McvkNJqo7LFVJwLVZmPnvrT33WTS7ybeYZiYGmea1zQqz6zVY12H11kjmaY",
  "key15": "w5ZrK6CKay3GC12b9Pf1QALHtXHsgKGYXFXV3hYyMAt5w1DJ7We4U4FyxnterqDGfz7RqodtnaMmzG1AAqrZ5YK",
  "key16": "24PnDyo82BnMTcvMswvVUvmuKDMV8f8jQGtiop2ioRRig2Cci9fz8m8dRw3gbd5fPYbgS1DhS5UtLm1VFAR8DVqA",
  "key17": "3ycknnYY7VKtHYhwRB9aGWokGBhGB7z1AQJ6XfeEg8RC2oUcjne6oxMh2HYRmSFF13rx5w9W7d1i8MoayeiK4w1d",
  "key18": "NgR4sGNWjBNPYKo4Ghkvpe2PpjnDVTao6ZFeNXKyg9fRZMwXrsvheTCsKR5N4cTL3f7rAfeVRk6xneopmRaUk1v",
  "key19": "xBHSVWjkpWrDdtSsKjsYY5gFL7EmKKkZdNi2LXoKhMzXwiFdspEnKQDbYAjCzF4vChovBFSCgG2Z3UE1Y4Edcq9",
  "key20": "3XAeFzL1sLX6pPuiH4erw4h624xmVL9h2YudrzVSCimSVsKr97WKKPknZEqn8sJUKJfh5FWv72GP771wj5JYDJvH",
  "key21": "31Knoy6rDE7TDyaqL3BXfDLHj9kAuNnKSLYm9rSFXo8wnfRBN1rvbHR3Lj9nKRGHdkoKS95VNkj6a4xBP2m8nynV",
  "key22": "3vu9g35v4gVdG2NSjqNhAxVsTB4cfjNGyyKCAttBmkze5EqVKQz5cXj2ewYBxxWA6ffauZTR7aZFQ5jHqaqigHtA",
  "key23": "hrRGRRGxzPj4GR2STRMM4M5buB5DeYpfNt5WvVGWGr2ZMPZgTMdQmMgrocYqkXbCAHYHfbsHwht9ttSUXziFQX5",
  "key24": "5cQARW5oFztkwttz87duqAhZ1o5CdVxqsx24QEUyBEgstt5dmGX3ZztEG4uDzz9WYx7FkfgR1Y6kNAonGw4PW32A",
  "key25": "4FwBNRQXyT45q2PzctB17tV1R9p1jbQYneHzXZiFDx2R8FNfDZAxDEoLtEimSYic2NaFtPToKeNNBcPWqtxxpK2Q",
  "key26": "3Gsyaz9UVjCnSruSiXqi2MQSsozxK6cao3H1DMHbeAHt1LHReLeKcYjNMS2UphPGMxgMQ5Ns3RkeEwMadnygYZKP",
  "key27": "3mcDY24KRt1vz8S7w22H6bhhoHB7r7PKinpUniAJ4uD8bUWm6AtCefFBhubpAEv8ZXsLwkReNkEbXfskbJrrND1A",
  "key28": "5ng1MyX7cccvX6FpA9Z2E63nR48t84dkZ8Yri2XvVo7h1RVGGUtLKzUNme4ydmfFwWhWJ2DzwkCuMbpwsVUQ7vyW",
  "key29": "57RGNYLnfCpVxdcUVJAbcvzs5kB8kQfA5XCev2Mvgjdf18QCxfmqubhk94uB2GnoroyxFUAWgqPHCTE9tLxKCwu8",
  "key30": "4WbtrR3nc7nQgKt4EkFttWzYEYS5DxAgv6xWLdRZ2jQRbZsrAtmh4hn2zcYjQXXrryLLXZ5tmCdZ31QJVd8DfLLF",
  "key31": "4hGi8szHtxcfSv68g8JhKGvBwi5WwJiQNcDK29JzMqt2L9XmdhCredp7eKA8PPSkCCLBdUebSLE9jCJDoEC4LxPj",
  "key32": "5xXWmFsLDg3Hw9RHQK3sktVeWhxYoDBo62H3S5DARzpq24kv9Bip5JBnyCgxFtFbCEJLLzPGk9X5x9qVCe3e6uXH",
  "key33": "3TQAJm8sdKkE3U2wNUa7ws3XPVeCzNMyiUmPvVXhJdWwT3MdwUZwYAeg1bJfqpfiyT5hAfmr3cw7BFwEmjj7XU1C",
  "key34": "2NyLC8LLAWf2kqRQX3bz1g8y1XPKmiyb73zC3WEmVBmg8kuvnVRdyMGg7tF92fsfmcZYQg3qedLo8NCfSGbyX2Zn",
  "key35": "Ep6dMKuWWRf3eofhHVTCNyJG97UuQ9tMAvJ7a546PyoGnoVKYmMa1L7ksEgT8oNgg9tdQwj42vkEbS13EhSvGqJ",
  "key36": "4KusQzC23bL4Y4MooDY13Asbgz1PtPLMhnUPRrbDVWC3Nqb1isv3pmXYijDWJSeCKBvLyUSm3CMssmBeACvHfhzV",
  "key37": "5wfJ5jwWsESDzHSrJ2WgrGuYSvZSBZrAdaKbgdrZsWXi8pSMHie9LGFSNFMiBryrQnFvM4D29aPoNh7omjPLMgfy",
  "key38": "5gpvrZzycTifKMvH4PZz6GEp316kY543fjgY6F2WzFs4pw7ujsGzFSWiy1zWvtJ75zRoroqpnE5TfXVDpvGvdbTu",
  "key39": "317Lwt4MPKv4Zd29DFDGqYXrCVjcpbKN7T7bsBnrCaghVF8ougKrYYSZSS8WqWiQRtDxKtoGeojfDHKsz2bPjssh",
  "key40": "2RsfaWQC2NXmPyaC7bG7X8zZ57TaMiyu4gZqd4qToG27LkvvYMBXkiuubdgGoYdxyFiczwmFoGWigFdnhMuTEfAU",
  "key41": "36qj3KcywgZvXR3axPfYdi7HmFz3yPBuo95zHG28s3MQZURpwQwZfChAoLX6HjPDSmjS7G6iaphiBEvWLcaj2Xmo",
  "key42": "4UiJTAzhzW7Je7mEe76pBbHCKLCuFRrseYiLEuUV6YRCdZsjr4GzgxihTS6TYantvj9Ha1YMqTAnaatkhyLjk8xz",
  "key43": "3FVaZUi9DTbQ9eXWsnpUTX6YKzGgJVTEtNcU14nfjmxWEvaNegRS4zHC5X4U3Hk6KzQSFSmjyUzSQLZnG9iXiuUF",
  "key44": "3qjyx9SSf5rYwJAvTKU8c8siG2CskpvAPaeKsocEEaZRLCnNm3e4cUpHmY3CtjzqVkzPs662w4y6mo1j4zSLjuac"
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
