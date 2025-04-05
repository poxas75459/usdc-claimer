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
    "2qyDUU1sWcY4E4ivWy5sTZUEAGRoVmJZpDKus3DgGv8LuYuMABzuxxHK7YPAEBdrYTxMEbuXoUwiQHcyMVX64TPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23VsRENT62oU1XNwwRKrgMF9ygHMYgZddBNvWYLnz9BPKpWdupLjqHSANd4hbgGJhZQ6d2PqKqM7Run9UHKST5x1",
  "key1": "5HfDGgQji6RmhfD2FoYbpxESVGHgoVmVWQrqXnYp47ZZ7Ueqo9u3XjKsu7YBURz1CaDtwhc38rFQ5f3adTecRxVo",
  "key2": "4hFR1NCoQXuKct86m89MMX5H4xqykMLSWgmxYBBjRfHyuSABEkgLanBfNU2wRaBqRjtXsKkti5AXdrgSZfvZeixk",
  "key3": "4jRBPuLMFay27JUJhMeWoMRa8QDu8SKjR31QiJrPgSuH1yMG7iDy9efrkrg6tvhY2qHfowAJyjDD3fFzKABR6SQ2",
  "key4": "uBjiVUPf29y3wJMUT83Dzteo5cWVrE8USgnsk5hE2HxuM4jVY2ERqSXNVyVPVfc3U35sbPTxp7JoETxBSDwwf6p",
  "key5": "3qiQUnwWP2awGs4EHcmauXa6bchGVb34WJq9HSjTwbRMuvsEiwYGnbEJNjNhyuCYfLDDpwPpYJS3Mxrm2wNHdcMq",
  "key6": "4TejAncg3JfWzHZkHK1ejnyKzmLHPL6LY71VyiEvMrVHfvtBuGextUCREzMH5zuUBAkSMwdzETsbDWCPViUoC2z4",
  "key7": "jh9iaj9VAV4dDj9S6DyGWEV2GPgxGu2u9BdovZQMLodzPtdvRhF8MDxjKjFkMxWQXPz4xzHSKmyQu7JqKwHSiT5",
  "key8": "3mfJnn5NEGLy8jukZP72ARVWukkRjJXoMPfrE5J4r7FBZuR5m3MJS8dWSjUFjS4PHRP3NLziEu5aZtrUbi7fRi8B",
  "key9": "5uWUkht4N8UmkFGx3kPPuvtZVTeA3H6pPXdhdUNv3tSY9cJ3JDkNd1LghaA3CFUBZ8bM11z9fvVaYHanyQ1WnLko",
  "key10": "2LSyq7M4J5PqC5byXxMJfnkTmhg7YvF4ck1F5R6zdRxEh4KzfUfEfqkVt9EKW5ggm11P5JatRSSHedP89xaTy7yH",
  "key11": "3cueKGCo3tqKQSxVZ9kLTyRzoRzXxd1Y2P2vdowVTPezg75uJ5M6keSNVNEhFxaQmuLGuSpfLUGuBt8BMqpHLN4v",
  "key12": "3uhEVXei198WARB4XLeB1gvphqyUa6DtSWM4U2n5Wfanu8kgjW4cskFYefxVZgsXTG1MCHv8moDikLf1aYfBTdGP",
  "key13": "559uwz3ahnRtqPD5vBBr4wGenooW8PJTykhmzim5MLYN8gsKZBKozVyqDBWksmSKUvdEuyskxvUuqgT32hrgXeGb",
  "key14": "5Y9Rwt72atNUXS5HSumk8VggP9hVara35muPmznT85kZBiyJs5rjhAAAoLR2m51hWE4dCFA1qAikbjND82F6TgPP",
  "key15": "2MUmLakCXg1dC2SCZqt4VR2WbqJCtXMqugH9JMmqH4YuDhVYxrYsmpTLyxGtYbus3S8zwybqTo86refYCpjHH57t",
  "key16": "3n7bLQuguAJ63P2aJdnLgbmA3bwVti1VAwuQGRfJVxnd5FfQgrFm125bWR54AgsMdJG1RAUxbnJB1A31Sfv1Syhe",
  "key17": "2U7tJvbGaNBox9mTEz9duqYskJmw5LWnU3cmoSWwKFwa21VZAZUrSGqvdeeasvcSHwkhWg52a4jMCZqhq7Hkf3DM",
  "key18": "2zaBqH69UJ5e7TeeK6r3FKiDDjyWzQoUBRo59SAKvyhipCv6Wtw1DRuRihKSvwtMAB8U4HMR3H3qZcZeYomjRdGy",
  "key19": "4zpuZogZCRkJo3HKovYa7CKWKirB3FuF28fzZQyLCLrNJrrRkV5fWJGhRP4EtWm59MxTAMZVB7aQGtHmCvhxCBt1",
  "key20": "25wo9hMCXRQshJSvYt9x12iZVSP2QtW8EiPNCBu6zC6inNF6SxamaWhwdsmTE4nyj4KW3xpRW3B5TZE2C5NjitfU",
  "key21": "4CGFqsjA9Kib7Pz12njU3UCAtt7RAtRywzGXTyA89UzAjmJ3GGsBjJ9MZLc32pmQnD7ayCmEpsrHbzQLF8KXvgV",
  "key22": "GzgDf51ePCHwbCfxTdMQ5XUPE1biBApDDdS4996Mh9dmBVuWauoCBJ6S84TcBTdidvL3KJ4b7cj5cdNpLtQQ3C6",
  "key23": "2XVCch5U2oUwmMQifDLssJjNmJvdSz6Fck7fcy4MXDNetnhVdjwRPaJLyHwcqYtB4mz6b9gBwhiEXo38CpRTr3J7",
  "key24": "3dx2ShdaFGyimCsytK6X8yvB8JfftcgtZkp5yR1q7Gp6e7YacAo1guqgapRJYvzF5MiknsQTQxRzZghh4t4bKiqY",
  "key25": "2RYoLET5WcbfvCkN2cQK9m7YMzovnUq4SADUmiyvtCWPLHpwREJtEyuWNDf1r7f1eDdpoi3YCCoEdaabTJvrwdFo",
  "key26": "35UaZLcapaXun4qxnZg8MvNousxrwCtgGWVLjPHdBJL3DjGSs4oiGRwEnkBzS61uLRA9sSNi2TrCtFv8rBVR4B8Q",
  "key27": "bpTnXHMoLp8vbTrq1F2eAVFpWWh9gNsNsBrUiUm6L9n9ay9Rv9fNh32u9SZfny1JJ8VBs1A2GvqScs9Ky7rAUgR",
  "key28": "3ifTDLgjFzNg2a6qDkr1eo7zBd5w3SQmmv9qeJpG8fbkVPDWQ6MhpbZVEHFCafPKrbHAebnCxH2VzWtvfYYpz3J9",
  "key29": "5usJzWjbBciyTPuoaDUjBkpsJi6KcQveYDbg261ubsPYZn4LZwF48ST4wXquyRMRuEwTAXhPpKgsvbLyRPRA4YtD",
  "key30": "kukPXzdR9iMiPxWC3d6j67EVEqFcpaNLiZ7VkqXVCd98CcCJazMo51fQmi4ZhQh4C7qf9YcHLrPed7kHzJkLgZd",
  "key31": "57TockoihCCu1do5PEaAyW4p57c6N5efQTNWcxp7hKz4A6eSUPghq1TuUZUjB1cQhvX5gPjoioS2gRghQgjrge2h",
  "key32": "38uFntL42rzTu1V8h9hpi3KW4Kwe8goEMKVk2v4E8vDgNonn621jS8ZDiFucmmLSt3V1gG5UcC8W4eQBAMUYzjBU",
  "key33": "h9Rbke6nYDFcDGmUA8d9Z6tKZNVjniJyooJX41GC4SLiGq5nhmmME3rNqKLL696TZUb9dtjE1Kztru1WfUa8PLy",
  "key34": "2ifebVeVTbhDHJ3xLnsKmYMo5ZkrNuY5C5rkLSq3ZcmomAqgdpQouNuXTQTUCNDq9h8BwJo1U3o9Tcr3EjGenQmJ",
  "key35": "24MsYAh3v2ArpdsY6LVCrAgtC5e3YawNxEjgrBeNimTkRmJ2kVN1wkyPpNwFJVL4fpnBcFUL8dqrFz6ujNZA9QTq",
  "key36": "eo938WBPegaDtZTPqk2tgo7jymVWspLGgZ5Lnx9ThSE25cQrMoprp5tuqskRwi16GgHdhsM7i534AV39EkArzA3",
  "key37": "3mXFERMDba8Pc7VrAvW2wUbP2E6VFvdnRYT73TRm7p3jRoAeegXW7Ca65VpKC7MYHDpRuR7DFuoC6y2SgmLz7nvx",
  "key38": "4rhkRrR2WBK1H54LK5R8gnRtnYhJEwdAcNTPUCYLuqzAeW5CRJcftodGbHf5hutvq1hPDtTwCWsjNV1p1XtzDFeZ",
  "key39": "3aTT6sHLH77SwtxHcyVZFUshF5u2EC8BTB1bo85soW2QJkbnMFygX5aqVdtmvFoaceSgxXq8VQZaGRLdwDApTbX2",
  "key40": "2J8vy7sokMBRjZRkYtwonwt8MSJqVa7fxtAxkEVoJKSubXrHDB2iFeJZx8DZY1wW7Heaj8akW5HnxVN9cwnQKKMB",
  "key41": "rqBRkAAAX3rSgNQrYRCESg8NMSobrjrCnrQZPJyrYpDGjBNGGnsoZQiDYH2csvLHgJFabo6R5ezPYxyvjogKmVR",
  "key42": "3JaYy2t9eQQAqdZACZRNDKxYg63fgYK758n4PQTDUR6eKyBcQyTKtJGdCxdQFJ4TctfCDiwouzbKgbNLx4g2AkiE",
  "key43": "yN8Md8RWXiPjBk9m3ktEyvVUxX7jcEGLr7Pk2Cwz4o6ZwaPWz8fqVNbeQRL3kLv6GxsBXSiESsnSA2PH5WnVp2b",
  "key44": "hB9cxRHJQr3GKMHAMvSpo41o8d82aFFVDbkdYW2YF9UaFoETR84GHy4JjHVL3kG1cdMdWxyVbQsV2sJ8Gy4QGmh",
  "key45": "3DfCdyNjCe6MzpWAvtyV6jCAyBAHfG6Vg7EYi2WbjD63RDpeh849G9oF5oxcyT7Ecyhgxke4bW5Xo52PnPPaxsME",
  "key46": "4NCXZsXLzHArgAtdjuxXv6chwQdVurzh3Kh41nYmScMxpzxVsAXVweR2EZrrNvPuZ1HJbJYWgLoTMMNoLzeSyYtf",
  "key47": "4g6EhBasB5vQQAYcqog6xBCfjqKieU3EFyrqEDUV17THF54ZQKDZsfga9GCQ6ybJ3sPHnh1GUbA7CNg56K43aU8d",
  "key48": "3ZHdBD6cC7DyNv5AVvBSYdcmoPoWZtCbbQfbjmpXYoaN7JS2sn32HMv42u3yWBPsPboraU4W1vvuKUXPSgxX2i6g",
  "key49": "5abVvKCGpqsfnQek1cHfVibNXLVXP5JHUCmSReRyS3ydRWjbFSDB4sz69sXmRPhvoiEGZYHUJW7XGvkKQ6xASw3s"
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
