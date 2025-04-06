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
    "42YmVj8ikg6wMi65J1yEEQ3NFBmEzrSTM6opsiG26BVAXyosSpwvhAXAzJ2KoZMnxEY8g1X56sZmf13Qxfd57urU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssTukRizyBbyYFTJNC2471cQGJ6RwQkGZWYKFhDPaXPS2MstEKbMm3QjtN712CeuWSRTrttiHGkR4aL2DLoRRrQ",
  "key1": "5kqFoHihGip61bVMAafyqsHUE5GgpKr7zFtk6tSEbXvYTF3Zpuy6wukcyaww983cbhrdXxowMKqxTyzNbkSDfDGS",
  "key2": "3euTw1dHFZsRRHmg8C6rU9uuLpewx15s1Ps1o2NiP7UP2nLGFLwBJTGr1QcRF7W6wNkK831QFxHrfYax86ReWzeY",
  "key3": "5LhCyJgEkKxAyN3JQi8xfzXVy8UNW1mhVYaC36rGKytFJmLtgmrBBJ2QU9oHKvo65ew84G3LojnYnJSiMKrdGRm",
  "key4": "5WfN4qiiHrPDHUfxjJsCJ5ys7ofDYXD46ib1Gr1aaNhMWYwv6XEiWgQDKC5B2YbLJ1XEKbjmuwJPvCgHtD63y4Bq",
  "key5": "33iBUeVR6AmNhBMU163VAXaRm1beYRH3Z6we9g9baZZCWuoX8JMSjqFnU6a1oVfBtaPadmhXnnhcCkEnXmAmK8vo",
  "key6": "2PrbdHhT93mNzLZTSfxFBF4Abkpvjhtv97AdAghvoLa9wjLr8c6Gw6pu83MZymPbQH57zd7uTV7YfQWdELAVjwvQ",
  "key7": "5F8PCUEG48kmAAfQJu9WSdF6JWWRn4fuaZcWshe5XLazWdt9dERMzuHxrU9MgyCNjWUvt552TSLXh6wtMVLMX2k1",
  "key8": "6nBYGYpXndLgZDMLk1jVf23KLirykGFN61ynxY2pEk3yVLJmUp92Hp5gsCuyfFrA1BYeFG2zwc1y7MopZZh7CpZ",
  "key9": "4WxZpuwDSz2SJNDfzHbc6rxETmKMLVXscDEdmgBYh1xcRJjCZqJXshKk9qQQVofajZifpWtPZ2AgmFdZS9yLbQ3W",
  "key10": "nCKGkBAGtg1RZjKE7SGvFA1193o3HU5YesPsQV7SLdBz5EgX8qu1xX3bcMgoyEGDhpwoaYubCAxjNRfn9ukKMsr",
  "key11": "3RGUQ82SAEWpQkd379kbgPFqwN3AHNVepE8HX7fNdRLZxK6KZtf6My9vxc932r6QDh31iBnVE71cTbFWzqwrVpPN",
  "key12": "3xeBWhcTK45sTDZbQW9xMcQLHiuuQkCVRHm6QC1ZPhVy7CoU6CkpTVpjnGaZBC5zhDBkiaiZsdGX4N3MnbuhSXSg",
  "key13": "4mnGgETFSfrpskPgJWS3WyeZeVQ2EhiEveuedbkdRhp3kv5cyep4JFoNNqi8QaR1hgugFbFB4QdxLC3VTrYYYgbL",
  "key14": "4frQeSxWL6ZrobCFV2JUuznGfWNH1t4xKaiH3qZJT3Q1xkxgkZMLp6gat5j9D2ffLAPhayuTPdrvn7vBRwHBtt3z",
  "key15": "5NWDiE5m1piq5dLuMM6hhGytUULzm5rS4H9X7LcVbasfQGgEfgFBwuHz3H3tLnjYnoFuwhQbjPzymxd88xUw2ZHu",
  "key16": "5Bo36GUx7Q96F8c2WXBGW4mn9etyGfauhySJR4MKNfNZLijRM8oHFnRTqXNJBHss6T7cUSHNDCRUQr4ZFSys7rUd",
  "key17": "55tR2mZ3yaFJkfXt4unKRHZQuW9XurRFp1nESdzdETR1biN3SJxDBdiDzN41a2eSxGrKDWcDSSF86mFKBzrsce5q",
  "key18": "2PVrHXskALxsp9fG5iv1x7mxN1mARhPwqh5TGZ1XboZLdD2N2dSq3jD5onJVxHbk1CfvHz5cuL4j1i3xhztVFfac",
  "key19": "22Px9DmoScbMteyeWxmdARaGczooBBCs19CN4oPDN73u7GRyAoFC4UwW3CDwC2NFJvmWXf5jKnnmEfGT8TWBCmBM",
  "key20": "Q3ReVKsJJReWiB276rhXdKuqYYXKb6Qfo8PJtQFTL88KJKYcuyunrD7WzAhboFQDjAFDUe86qLwvBAP1Ef2FiMn",
  "key21": "bfF2uSBjvy65ZSSoBpnXaC3SohT7L4tAP9iiRRmFTAHKN4RrxJoV1rR5UpCwVYUnpm3QqdFzfi4Z5EQaa8PzT2H",
  "key22": "2gnw63nHbFUnxXYReLHQaerbUHB7mPuwA5DudUt3xaRZzc1ih7d5GGf9QLnVq6zBVfNB3khTkRb991hPPawsHg7A",
  "key23": "hGi4TMhaGVj5iVi5uUD6Ly6d8c9LJCXWKTbTzNdgarSSr582BKrm4BEP2aTeGZ3HdAAQfkUkenb9NEutmc9oCnZ",
  "key24": "5syko7SLdprdd65uFYW8XJY6Ug1zuDMfP8qHRSQbAZKpXwU7Mj61FWgmsypdmUymqUt3TpNpSVvCWjZhgXMCtyvo",
  "key25": "3XFJqHcSc1e388oVA8S2dBXt8Jbf2khxJUmLT7SiKim8tZH68hPEAuUMXXM1eAPEyuZNsk9bNb6CLzPCeexRPBJH",
  "key26": "27YNU9HKyczGojfNtLUfKfXU8WL4SQFqSEKGPjGof3s5yK8mymdt9q5LzQrTn5shNzWguGR3nb4DayMf5vnimvZU",
  "key27": "Pgwc8bPfPvhRhjWTh8RQ2DeKx4gGwC9V7AEZjyaBbSXhWBvbgcqvUjpkV9asp5dNCCMndTMrMZh7tdQgjJAwav2",
  "key28": "4LRdfydrmyVuX4b28DPjAB9ABcJFYQwb4u4n2CPYwT2VAHJqDHWtCzM5dY1zBdPh8DMENLKQj8ek4wGWZSE2xqJv",
  "key29": "5F8MQJBXi78iCCBL5mq4C4KrjLNfi5uA6UYXsP7haZDLre6a8jrvD67Fiv1fxwj6RawvSn549aXGLvwEAmEjSrEh",
  "key30": "xc4o7w8uTjFWuuPzEhjbhPSJ7mwZQfqEoStqqzFufVUmv5eFbUwj1atXmU9G7JbHazf5RKadaRCZuqm3dyzWVgY",
  "key31": "22x4kzRpqUqXRNA6YA43wfFahYJzj96pST7X9WLH4uFj1dHgLun3fReQyzKVYv5MGVjtDHLABATbTgCDEmgqbbHu",
  "key32": "4Aeqh6mtiRqWiqoHFUzsmw8Le8CH3FrAkTNv81BMFGWPQPQBszL8LnYLMPZ4gjbgWBoPv5Y9pR7z16T9BfQ4MMBw",
  "key33": "3zq8qE1vGSJHK72x6ADkpYdx5C6yXrSPGnFYgSHUH94TpBTcpPkQRd8m56J1x9bjrSEpwsR3NCvxKqSwXrw6KVqc",
  "key34": "9rNES4jSeWLop3xCeR8oEtibgZ9wFjWmRXEbXH3zE4HawLmQVHLd1aGg2qA4V4KivJwMXkETBaTCjQqFt6s9wVR",
  "key35": "3fk5PdcLxsshW6LUtMgFnwdMyh4dAJk9VVLUT3mZyHXzoggPcdacqRyPu85gcpPUYJDy8Gh6TszohrQ2JJuScnSW",
  "key36": "4mRM5ue2pHvqes16bPhAaZCmNG6mBu3gF3czXjsWRwf2yzDXU5zC2b317AfN1nfg8HSQaJPnRXR6qe2BrsXUMdBq",
  "key37": "3q1tqvhqS4TcHSLFF5CE2HvYjLyufaF9XkWvjwqmbRJy2Um1rwJqKBXotvny7vYsrGUi14eKYs6mcKnyvpqu1TBV",
  "key38": "9mB6cEe4Wcc8RmgTH4g7qYDV7bB97aPXLpxe2bfYYsWQU7Ux6ay8GvV9yuXZNX2M7AhJjGGA8s3GGtPx3digVge",
  "key39": "2BnDorbqPRCjkdhim7CeNZTFUvbXCTWKKgDxNgFU8oQe5Cc6dyrmjhQQwwFCUXJQ99a52PeYPKzB3Q53Xvo9TsUy",
  "key40": "4tJCHx3f9oGeqbEey1xCt4HMkdJj1xnDAomQus8e4kNnoDtDtenDxANW2pd7h4BgJAkb9TT8MuckggPM6oM4AFZA",
  "key41": "2HRPo89bzqFfSoxZmuLdNTDGvcS9Ko3nv7W7jGc7YcxCW2yCtq8UUM3aJMtA7ZkBGfyWdTU2kh8rXe4MZXzwNoWX",
  "key42": "3uqt9uWXsAEGY9Waz1NAQ5LmW7aP3DV85Z9S2ZenEQugLetK5ZcKM5ht1Zm1L543VtfbCiDGoVNjCQq9sJ8WsZfj",
  "key43": "3Xs8yTo7i4GMhCrx9uLXJ9e3BBG296tbwa82LdZfSSX7onJ1xKrfoE8BQXQmxjQsTxQesTu5mXLyA6yjoq76ZQQ2",
  "key44": "65NxGPUGLPw9Guodp3iBbHw8NQ2YeH2tgYkmDxaHbcnPTc1mcbegr2ZSv2zbYB7dRT83hLFX1DMauNSdqCTj31u9",
  "key45": "5EVcsyCKcVMHDRP3QimQt22jg5X8jim9ZL6PDX32uQaAppDqFghXqPuVtsLjUxRCefYUTdG2BgA3N1Qfw18pXS92",
  "key46": "4dKdkKDS9WRWhDx2Uf87Pyuv16EanXSUnSSo9Hn2vjjuYDKAVZ2sdNX6hnUiSmqJeXdgUMhCNjgqWi3cZc56uTVw",
  "key47": "5h2uw26bwAW2W468wQcn4KKc3nEXHpKUnxBQDMRHtv5Eefv99uyLnRGWrhszA5X4gmmwd67kKrnSGhaGqTkppa1i",
  "key48": "35EUSntBnGepJqoXJBfhPoqR7BwGeVWp26JLfaWQBRYBuV6TtUQxJM5ZLB4onSM3irj9uKmCGbpxCPDvynStwHYi"
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
