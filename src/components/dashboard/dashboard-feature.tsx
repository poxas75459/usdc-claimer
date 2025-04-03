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
    "57wiEEbywc3AeaqU3iQhaXeaessYxxU94XutC1nJDuqdnUojmqQ63s5Rdqmex4Z8K1y1w3fJV9vnBMAaxq6zvgeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLfJCVAnA9y4XGfYPq3zMvNevwQ9YZH6AU3osFCEB4C5GMX4E5g1kMdxtDMdwk9DMHZ6QGWnD3j5MooMCcVBhzS",
  "key1": "3XUfk3FR8sYfW1ay8J5W4VD1BXiSBHP1PUjzuDEZuRz7rhxj4k6YQofiR4gZhCnsDPv3FXYGN8H7vKVouvC832M2",
  "key2": "64ikN9qNdT1bozNtBrKGEXmt7cU2FUCSysdYMNPoc69hq7S6zGw9WB6QZMJ6xDK9Y7EaL9yGu3bRVhUCRRybw2w2",
  "key3": "3MV95Brxc4T4TcBHiq67qk1UWWhNDYQozif9FzAFuvkvcaMjaBs2vMCz1p1LDP5saisjzdrfitoa4WGJE2e8a5pa",
  "key4": "3SA57iLL4mMWSDCeTC4qM3SD5TNsDmzcf2GeuzYDstqDqv32qe1ZK1az5RS7eRRYTB7iYYACvRkNkaSVgXKuvNiK",
  "key5": "4sEqunkBgaqveQUwKFHUiLjauqLFB7Boqr3RDynAh4nWPjnBTPaisX3FuzfqwP8U6Z5sgrWeJn5hDvgKua3sS6J9",
  "key6": "SuSWejYk6ycXM9nJgXUm1HKtYeEjcjPyHN1PU96C9YBNGUtHxra8P1Y674uxk788rZx6fyw5ni247mD8H4BgB93",
  "key7": "3dyUeGFTeFVTszA8F68yoMHhxDyjXaKLB8FtEPXx7ur1p9atmG3ZQ2nG8sKx2oktziNzFR5bcpWb5DEAQ4CYArAn",
  "key8": "4tMnVTapdzT9Kd8NVEgK8NwVkSTRohvLCzb4pUoyPkAKCL93QYVUKxPqwXftPUi5T49RFMNq7gEqccRUU8pUu7Ce",
  "key9": "3qChub35oHKtMmAampZPivcwRaWHLhBunk7pTPD5MWZwETbUJfkZsRFx8RRTjhGxorSQF3crMG363Bo8uRLbYryZ",
  "key10": "3BBw5Civ9LZgHFxRtCkXSHEyDRKr8FULKnkh1Qz6NGhNhizmeYLTs571y4gG7rF6T5Hk8ktQsHRtmwTk2Ss81WjH",
  "key11": "22ozZo7HNgUY2HZG5RmA2kfZC2wPjsjoXhGGWTVftQj4StF9AK3o6b7nrP5LJqGxrtsdTcUeebAHS2VKnkeft5yc",
  "key12": "6yqZXYq6hBVXhigk1xJWvpZW1ry29k9rtDfg46zYWQ6Z75MhCo52KTJYRJAksfi1ncJACrJa18HgwUcCAHxgkay",
  "key13": "39vVHWECvFPgHJPXidi7aYsSs4UJboPvnzJWrN3ksYDcE2o21YeBbFahPXzJTGENyh1giqvmx8dpF1rw6i9ZRSED",
  "key14": "3JJBBT6aM8fZFjYrEYpunePcnroMzW3nUVXGPpG9UwuUUu8q3vN8ZVADBW9D2SCQK6PNt4Zq6JUjYmRWo2fPd4XW",
  "key15": "w1eLMCVcdPjrmpQbceLm15RgjyDd81T8TdKP3ZtTcAWYtzmkRk8Yb4x9QpSkcfwtiVCJANy1BhaLnGWvEGRHduD",
  "key16": "3KQsn6pJ6n5houREdnrANC1b5j33S1WCgQ4LNwVYbXmFHf74FNZYn7sTvUQGWdqxPeRuPMzamovDLHGtVMxewsiM",
  "key17": "2vUX3U9v9xnTf9VP7gZrGLBSkZfUDRPnDw7mzDwGeFj7ECZUZkf4mgqSusbvuUhmtNZD3Ve4XwrQvwKSgHf2w9mT",
  "key18": "29hbCZugpLr4ugV4MbkvqC76XY9VDgGb8aD71GLyRfxxfZ5hBnzUStEQFrE8Ea5LZ5JporQEoLmNXdZZ6DUSuxdj",
  "key19": "DsboY3yH7DD2rfJgTGPf4Wr1p9Bsj64tGjm1jNZ2jzqUQmWHZBmNGh2HUWvA5oUHqXxPCkkCEBqF6ZLU4au2D2P",
  "key20": "vTARiD7HSiqbfXLAybFubEX7BJLhiN5QTRLqpWMaRw3jL475FibMDG5ftCf6AnVZrGie1J4dFAzHBEHMicLtfr7",
  "key21": "3JA5FvBfhRR3Ft8bV5qu2PENRDqxu3JPW9DsBW4u4L8Hh4TtMTF4qGFwwZ34E6aZoaHYZ1fKHwZ7hoFfaFAvzJpj",
  "key22": "4YLWxTXKgRS9KxbzPvKeXxt9y7ENnJAFXg4BYCo6N5TA6YVfX37LUzDgH245TMqXnFTvkaZJYBTcCDKgNjSF6mbX",
  "key23": "3VhrxvSqsoqcq3EJMArVR2etRVU2gAJqQf23ehYswWVXmLJcTjmK6pfu5VBADZhZeYrabWpgoPGspz3KmwDXKbP7",
  "key24": "2bNUo9LuFvzT2Zb7yZAZuGp2oxmyzLMp2mLRvtmdGFSXvoQR1DpMhLat8mRxynroUhkrFhPyqQGmh6wnDEb4FnrF",
  "key25": "3icNoMdzqbBBpfvi3mfhdYpXUF4aDX65K9qZjc4aSsaC73LN3G4DxxAeGotP2YYtVJjeXktQsLrojcVUmUSPswMH",
  "key26": "5xokPjU1Lr983pkLmcecbL1J2eRUfqCy4ikAYLDhz1r5wstdKkqKGhw6ydm7XFs1WTDLiCpXcPbmVxeSwiT5vGJs",
  "key27": "5dy3UjexXZgf8eMb4YGJTbKWSPRAKHngc5LjeNZqcCkcaVpKaBTmvUrEqW8XV9QpeW9gCo1n194LbegzkyDVSwei",
  "key28": "oK7UPhzJTSLpTqA18PeW2nXAD7rkWpw65ftcmdZGq3174fxPiUHymxPjWuQUyk7k7qtZiHTLAe6JyTx9ut7t3w6",
  "key29": "XHzPQSUpq3y3Jim6Z1h8RBCHK3RiMj7sADbW9vhhbJZ58PtKru5ZsKpcpLdcsHWGmPpPmnQCuxrYexCXucL8QS7",
  "key30": "4nn6FU4kGQ6fdsSkYAhycCu8LhZ16JfFaY4eXWzdU4EkVbLE5iRdgSJ78XYFRGSKuvPjZwguokFc3cyAXKNKpiKe",
  "key31": "cMkVkdGpsNUjrDPpzGVSpvq6ivUUMutsp5Lt8zBmV4P8JqPwfLTghVPq5FK4LGzLvJ6NhN6BJ42cedfsTudiSGX",
  "key32": "4qEU1k8vooPuVwGuGCA1FfoCxZwHv4V816euVAMMYGZb3ZPe1FjkXd8bSWUerVTW8CxkUGHSVaaCzrrHdVJii5NM",
  "key33": "5oBKouLs9LqDG1JiaWgYQNBrfNT1N4pvkzuJQgfxCQ3ha1XeyWeUhMUQqkKLaJpf49KrWY5qUYyb74HDd3zRgQsm",
  "key34": "3mFBwNAASvAJ2GRUf15pNEmTRouqAwCK43zNh1mpq9Dr7AZPBVozwcCzNE5jeNUQtfvzguAu4ntM2zZ81xrVPz3C",
  "key35": "2yQXofU6zZ3MVHwv6gKktGBV4TPJCXwpFQgtevWbSNcnDxMgR13HuwR8o45wFpcHPRNgRntrGSjVheUsxR8vvVpw",
  "key36": "2ethe3X2PGW5oVrMnSdYLHvqpVHFWUGcfKhC5kxAq24tVWdpmzn4UYQNA2hV193zCTvnq4BPAkSeocqB9u9c1bEQ",
  "key37": "2qdRmBQS1DGqiVPDM7rqbxHG4BQ1qMwwBbcWugb3YkXMEVneh4Q4CPojUjWTGNT1c6wNtwA6Gq7SKt3QMhcqtrnN",
  "key38": "2ERBbCaBUz4vW38XpxWi8tnzqiYFyhzXmRh4Pta4WJW5qBPZ1FSVNL3yDy9mhx5fnbTqC93CCbwoK9utVdUhetoH",
  "key39": "58LwTg9HRWveSdrkxCkUjkXfZvxw1PAdnb2xGFTxz1Xzw5YK9jYmprX2nq95nT25A8QuSAq5yVqtQ5AjTfm2nUMc",
  "key40": "2eCdWv24tjacMKWA2dEwEqUG6D8BNpr5WFBiLXfhishaSdFC5b4kREgdidLmgcozVR9Bgk4oPxF9wrZzeXCo7Hwr",
  "key41": "4YyxL5CQ3AJd5jfyzcsEjyfzNS4mjoC4QiCapyKAP5ZUWyko6aQrFQEFPzSaSEnyxykzTkR6ygTGvgcVRL9iGTGr",
  "key42": "5EMFbEgPrQM2DMXV974EvXwHAoucBw46Ha2mVXSL5RQKGfA7p2dYf3eGvFwBt4x9Z6UsFjWi8BKBnRA7d68Qr6yS",
  "key43": "4x5GUtHd5U33rJM5dZdDhMgffFCHzS1L2we8JPZGuixpCJm9jHJvMVZuPuTehPzAQrw4vc9vyrtK13iauYc6W4KZ",
  "key44": "fBNiHbYhVzUrzWAbQBFKpn7buShjXmHiNdARyj9amYJkJfP9AY2xgBJjXgrkiRHatNDpybvzgpBpKkSYEvd5EiR",
  "key45": "2Tz9poTXvBHSUmwW1UCoUPqBkVZ1o62dLSVrEfLany6mmXAPYLEofZs7ngRq49XQWaPWwc8XwfFJzRm6MSfzWp5L",
  "key46": "z7N9xP9sgVuoGkvBefLe8VFSGeJK4ah8ZXBxiG5qKhaQ868HqRduWoSH8U5iNNWRqvm8c8zrCWxVuSiXDds93v6",
  "key47": "ypZVgo11NzgrKf9ea5UPQjgKC3hxoEnKN9f8T772kmHu3Asa1wYLokEhmTUikCzJC8P1STnJyy6zi2RdvAvq4Bi",
  "key48": "3bZizneJiVikrYPxeyAxYCFVZDKoeH3anCh6CcJP78tu36tynJEewuJSoBtgkZmPsmSqyXDZ5qpzzNYL1ko1ebw3"
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
