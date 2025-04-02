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
    "4gtcPayoC3ZdvRt4Sb5ScpSpq5wfU5jXmPL3NUoARFtrdKh6hks7YgGHeJ6JQvfJcYT6HDM31YeqibL1ARCHZJFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agBo6t8A7M8ZDDGUdVP3HDt1XeELvEbhS57satQxVg6wwH12CpTXzCxR9ri6zoNLzMe6BswKzbFgUh2whqDSNMy",
  "key1": "3ohTvaFvoRRk5tadZVkz9GVonwWm9iFdWJpocMokDL2dfZLGuyNoes6Dmv83SX1vRpmDPk88Nik4cgQFn8LQamkt",
  "key2": "2GTYbNvdip4PQZyiZxvF2ukA7oxpVsDmJYFAyif74kdtD631FRTjXM4VXqqkfWxn1cMY4zzyA7sRMrnuDNPTLFn9",
  "key3": "5qcTogMkkSDZ8CtCjQZGZKz6AeBdu5xsxde4DdD21xpV9tPqLziWtRJtySqNNBYxrEgHjSM8ww5mJRfXhQExDCKq",
  "key4": "49735YL7vgrpJ97z62ef6anuLV7dLgNpqrdwqShvFVDpM567quAJ6g7pRHDQU5UuupZUXKjbynk8UwMbnbu7svMs",
  "key5": "5WuCqsprr6t7x6LgMwoD5mq8bDF5wVXWwKv1ATPFzBFymjHypyUwDDRnp7CAXXs7gFRxhAzdJQWi5mYRviaRQwS1",
  "key6": "2RdqGeSMiqEHTuf77Zrjfj7Ktw25kv8xRLkwotJBFYhHePgJW5m4SRzi93Si91ZJF2Pb5KsUyQfBsdtSG8dix3JQ",
  "key7": "2a2zJ6KLCLe7ZJCDL9hpE7Y9edWojxN8yymi9VeL9L9uMur7SK3m18sNqhA8m25J2GBQaBD5KGLd2eQgbXGWaXp2",
  "key8": "2CA8idsJzB6EFYhNDZf7zE4VT7n28AC9Jx1x1xDXfGjfUwSUx4AJm5wJNPyhWLgoDKMt4j9ckJKzURjgqZQHm9Fx",
  "key9": "nmcpWxerdNpXTTSGdvLHHF54NK3eNLPeYban8sq3SrKEsWHfFxv7Ge5BNpUZUtNPsCsALqzyvTGRSMWtdg8ZCBe",
  "key10": "L6eT9a3wtJ4m8i8zQLw2dfydXEnZMjGUeiZzmBJrGRjg743gky2XqXcQKaRToebCZGQZQAUvjYW7fehwbAv2bFE",
  "key11": "2QGMme68R4aU9xRnAyz3EMYiobRXofJf2xWafajxFRkRf6VErHKKJn1QNJMDKoonDCdYRegLFuJkPYZZEpn1UC4S",
  "key12": "2Kin6HUWwLcbuko8pntErtiPafiqfsd5NqkzHRLW1ZLLv5haTsPkvycdpyXekc5QRaFZWwdJfNp9mYK1ycjLabKi",
  "key13": "3JDyHXPKbz172cNeh2t1nnbiWFFya9Yw7XKQqa8J9U1qw2A3BZqLA9tSxh1kkjpbCYcy5A8Sp41aKbvpMUkpLxGg",
  "key14": "5LX2dkBnrFMSBXWo6TT19WToRjJKaf4fSPk3DG41wGihrRHzDzTH9AsYKWtTAgCjyLGefDNmtG3KPihGW2WDoWWj",
  "key15": "2M6wY7xn56hzVvYiLPustsJq9gswUkZkM4ZkJf14eq5p6oYT6NEZkMEFFq8zqiL8rijKy5FKnhQ7j9xVJS7xYUf2",
  "key16": "5ZNGYBVuoQMwce3RdMBY19zCWfREo13T3uuusKu6bxLcH7L6fDE2YEfqAfHzuZF8qAdWzRb1EWUv5vpkaay5djWJ",
  "key17": "2kGcChBGUReGis7RRtE7HLYs7SkLnp2SmkNZogHFgXnACQNmhhQQnTUwrb2emVJMDqeShSiBafJ2PtQP5FgWghtx",
  "key18": "ydoFSYcVLUFqKJUFSTkbafVq4VDucdKNsP9vqCYmLdPhwmvtEgCquD8S3xSUP7EXyKjDhbfmFUrpYcXNzdLtytx",
  "key19": "4DqgNJ1W496u9qjizdfTG5RorBWXWMKXGxAaHMPgJy24p1152ekR82Em9CE2gwdbtoWWsitFuN9H91LNteJt5qo9",
  "key20": "3UdKTUPa3uoudAfPTmCzjbZk7DYSrbjiKsZaR5QJFCEyVL39cVeJcBUNauCx62EcT2MGnzxCXV797hE9wWdbLnqv",
  "key21": "4fAAwCwNqGZdMdwPBrjqYyjZ2GYw5EihKnkEsFSLuieQ7zG9KFAhnaVqtn2UAqdurEGAgLvuDRzQWaLn4A8nRsuT",
  "key22": "3tPw6tmApLF9FbaARAq1SFTmYmmC9w7B1btWKUgtMvt2RNA5EgM2546Bzhj5kTejzb7YtCYP79R1T8npMvkyxGiA",
  "key23": "3K8VtzydUQhr8XEooQE3dNLMqT5Gsk4XrrptR6i81hR9s3CXprqj4jrqWZp9RnUroAQZJZxCn1pwbGMHSKYUt5JZ",
  "key24": "28sNDNYttJWpm6xHu5cFp4P2wF1Y8kmegokDSrFH4KdU4PJ1EY3MZdSJexmRRTYd1ztjF7DC57MKczUphqrxJjEb",
  "key25": "5xVF6Gm4fZNDcHdeutNhdUDPvKcvBocqDjJWqhoMwT8Ke3rzcWjzJ8v7j2ib1htHSEQBm1EP7g6ZQokCKgkxqNUn",
  "key26": "3LQ8L6YNRvsAsKKTiLzCgugyoYiGevBPB3BLGjYTokW1mHRdbw6xAMm6mGFMf8TCAvKcxxc4kZdYifp3SDraKbyo",
  "key27": "5cwdDGuRCCt7691AgS9kdhSBmpeXRdeQ7nyu1EMyzfbxy63pB1evVoLtKYjCx68ye419nTwxWt2qccHfqWiBvvES",
  "key28": "51ihQxUtkRpFmztT2McicAbsGPXCD8tqerjYqWPYdceUTGG7ttAxYJQJAwEHVuhSHZYTxaqmY2DQK9BuEFg3yhpB",
  "key29": "4HFmNFQURmTSaKwn5WtHkwjZuECtAR2qGKpjLQBj4Me6GVMqTxXKPP92hm7zJzyjya4KTYfbycutu227AjRcwgdW",
  "key30": "4RMFoNBfd4oTodkZJUZkXNtMr4qp5guTZRmv7MTnEDqKeZkaW73tfrnH2AyyhCGgjow2vKahcJZWdgTcJvGvKHh2",
  "key31": "qzZVji3VLo4j63eAxbevugGQ4N9sPzWyzjbGm6QEzvq2RVcntmbvz1DbbZzMguGqizfaQktcinBDvJsp1JcPPWb",
  "key32": "2VD5c9NyQSV2tmG7xqyd8S7YYUNMt4RFnaFEjyke5MoK9gp6sQm77D3UWRXmxFC49tCANWNFm81Ad3duxCgDZHUs",
  "key33": "2vs5n1jkqQKrRm9zap6vy19jLHE9HtNcZ6TMF6zTCaTEaaEpoNLWWLrpu5iq5H6yWdhZ6Wy1Mn8wM6hJ9Bya48WP",
  "key34": "4cwcVNe9aWBYFZYysxWB62ztwFvYpatFPsN3i9wGXK6xm57fNs2tYtrzkoqQWzC9mAc4JhLgwCs44KjHEjKS8wJj",
  "key35": "4Rohvz6uF2aJtFKQ6DccHgFhEvEfT68oWuxSHb69L8Y9ZCKJjJ1ntX9TStd2yNhNmyD4hkoVYkHEFn1Ymds91WNg",
  "key36": "3oYxRVxBAqkEokYgEcqRYiyj7rUyLShQ82aLexHUX3DaTy8QDsiLGWJDdjzv7U2oCUfJXxM4GawtDZLEdRKaGwcU",
  "key37": "4dDp4P1sjCc7PHTBU7zLtArBNNhsnDmdnPzRH1ysvzjQTmT9mmVVsHfAdeuhYEWTKQyc3GsSCJgaafzxT6AuPmDG",
  "key38": "3BA5ee4KQ1m1Y87gJQJWHegSeyXgon4u6xaeCGhTW9QoNiHkQ2rN3JtqFVZP34ZptxvUasukV3TdaiyxAidkpmhz",
  "key39": "2QoMidfUgBP7hCSwy4bmjXCZeYbrob3kSKfdMSKPgRV4NzBjQMJiGAkYMNW1ZiWSXkgQuvZmyTmEFEUJQGDdyzmQ",
  "key40": "4BjXhBhqZ3Ne6TcpsE7hsnzirmC4yjArGH4Bio5Ga2kReePdPkua1FzqkVePHKREisnB4mqSd4DUcdWTytRtDK47",
  "key41": "5dFW26wCz83nrfj1ThdpLGzY22xzxHhT7dAPAhf2SaePfuRi2RBRgutsRjo9hjgpMjZPquQSVtwGewDaTG3GtnEX",
  "key42": "9jfwyQUCZcehARmvPVryFdEPKFnA42ZVvDso7r9M2ZTzvbCjY3oAh86T4QDqrTKusJWpVBHRKTDpGxWf72SQSd7"
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
