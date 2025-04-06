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
    "5DXwK11eDBsKFU6DRxUxehzCfTFE8TGPWfcA18EMtywHAAL9Z38thzWVtguzVncyKqMHKhRd2m3KUtxRx27ej5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CvfG9K8LyMF8ie5oAmmxwERQyhZXbHTM7qnFpzv2YTv7qFcYJE8pLBgrRKEDuAKu59X9R8LXHhSKSZPNRegTFK",
  "key1": "ZA2uhqjv1eRYTdqZuzb8Yqs1Sy4a3HrN2SJehik48HbnHJXJuw39kj5t58SpFHQrzhkAqy4axTYZSQgqsF8Vvuf",
  "key2": "2BLWJEVkSzFvLZowMgM9yNzRx5LETiacJ4cGK7aeP9bf1ArjrU8pyea3eE91uuCfnoHhiB82LqCxXxC4D1ftRpAK",
  "key3": "47uzQgTHdNRVssBJFK6bsGkrgqJZuaYdtxBe3DRwL8iFpF9UNCjC2ywEDsfoAA819rCpQcDSH1q3u14kYiqQjgud",
  "key4": "3hP7zFikuZ5kGPBKzomExDEUhhaL9DD9sAF9Lgi8fMyGpEiidDkrX3g1dTJRB9MTAC5PToAPMg6mfW4mpTrBnjKF",
  "key5": "25wL7EFCPGE1TDrpNSpRjndMSGeJDV8CiEnoTeAHt4T3b1Z6cvVwibrZFRUBdZaK26mqGB4j9HLHDfD3N6V9D8HP",
  "key6": "3VgiiBtTZk5NZMcakT64VXs9HqdS6iT3jTfvcsVr4BDrHPivZ7Qv3e1qa2eTBbJSndzJ5iaZacNQ4AhYQhW6GqEw",
  "key7": "3aEruwFYrMhHinzKR218jqzXvQCkhrBCrQ9ugvkrsCWLFud4jcCRfstQs4AXqmdWpb1WYQHc3wTNWNG2TBcwqS6J",
  "key8": "2advAW6rLeGCgkx6H53oZJw5j7QuWqfJL3P11AyPsbQuxbd5pj6yjc2WxUVcivnzudZC8uysYuM6nM6N9Pusx1g2",
  "key9": "4ppRiccxFuRLaEQ1FSncu9RQGHttLeeyZBK7izi23cvZTuGmWq3LhCkGMaZows3vE2Rk2G3KVWSZX8MQsww35wCv",
  "key10": "5DgHMeKmivWg85pf3LFoUhs8dLRLcE7Wdm4vuBjcnF9VBa397a9u5w6bwSAnrLuXzmxL3knb5w1BPDDgrQRbgpjT",
  "key11": "5si8h3bRBKchNWsVYHKsvzktHe3XBNYMChSeKnaJMxp8JmTXMGRdBgRrCYWGt1ZrZPxwjhC4D4neBeTZx84PkqJX",
  "key12": "37j12HQb4Yh31edw4hZwAkJLuxYnHdhcbzA4h59fmnTrj2Zbbnb2bSgVUQoYKvXDvwS7ANnKv3iHQAJgd3P9jT7Z",
  "key13": "5gL5t45ta6Lvxv3PFMh2PoN5VYLNvMWWvhpsyve991fuhPyBogoAQqnHqca8hJdHRc3fHJuj5yEycdN4TeHECxXv",
  "key14": "3PGg6vhqYGpQbKd8MKnzFR6pA84x57sKEQGfbf2gXNfdnc36hj28kahGUjdcdKUMtJ6mUgpQwaEproPCAQEfjpUh",
  "key15": "214YqWksixWdPb1UtiNVVwigrHvxfcYCwi7Cu161NiiSp91Nk9EegV9bpWxo78LXb9YS43bwNC5merVb2yygi34U",
  "key16": "21PpRL6tSMd51ob8Nc2Z5uLzXMmYPYjAmSxXoDegGYy6nhCEX7AC9FxPuCHXecJDQSq4cQLLDuVU9cf8jUx3nu5L",
  "key17": "2P4LSsLjq34CLFHZ2RB3PwoBdQZjRofMGcNzpNGTPGQ84bpSd2MAGEn5RuChYpS84cQM4Ut25NNPzsoLRnkHafUw",
  "key18": "RckunBS3xbQ9DKpSNx2BGamb4oxKEW3m3p3TJukFWEmnkrRXGjGDid8dMq7mTivxq6ryzpbZkMJH6qpxsxpfaHb",
  "key19": "66h6rDCw4eK5Ubc6oLadLeQL1L7UQFe4SkowJJFw1ysixPC17HApb5HDxxTQebpDuCf85TjqjxRinLvKXTyPYR45",
  "key20": "2JboT3tAuP6UVpYCB9LM1yNBAsUuAaYHjggvpZxyrdbSEeYMPSHbK1pR5bY3c2YYe5atouaNvEF6jTSNQEHuQtgo",
  "key21": "34XCA9TUkerjD3ztmQvYsr5bb1xxE8KE85ZGQL1tMfkDuk9GY33T2FEihdBTcgAqT7Qh1xXCytBHC7HVSk9Rd3qG",
  "key22": "5aJUJXFxsHsQ9avbYhUC6MAr6U3L8LZu38mennarg4DSUkA8STSPNH5kHZsXAnJf5RkNy24rm81aXZBPSJRC7JXn",
  "key23": "3Q5R7e28DLnf2bvewCM7ndisSsYYYvHX3JNoUTRjgtKtu8upwoZ2ymVG4fJrd1oYXRfcySzwmm8VNwPaMMgYmjJh",
  "key24": "3zB37TzJjrBt96k32fc2SthX6wwoNkuWhGXqEe7ZQPiXTo89TKn35XCefZswp17UG5aSc4hQZM19FB2NcXMW3Jgz",
  "key25": "2GZuwHbrGWk8JwxyiDd2J3tF2zWkEn3zAHXKxw2oq7xv2vjrcz78rNn8fpDQcp53SC53gmKiPuvkCVYfiPWr5uaQ",
  "key26": "4ynAhNF6vDSp1AT9Ug8B3G9G3V8Vc1XumM7eS7yHqSjAzHLWD99ZYo7jaheWuQkLEBCLn7BFjcnx5LLyGPZnqk5d",
  "key27": "2vGzy3xjQCg3UK9QkDmEpyDYuNJKJxj1k7kz9tqUrc1zbBSFYBSrQmBTdsbUTYiKnBsF9zie89HkUGTqMLy5D2pD",
  "key28": "222nBXKNjweZqD5wt7MsRQmNRe2hoZKAEeucW39SsebqzQ5YS3DNQmfWTZuPvgfd9W7NkGugGTBSCm4ocnGgKtBf",
  "key29": "2RZ8AgQmnhq3rsYZ1m3aaX7gej5RpTH8ZiG9zZg1vSqrhiYFHEvvVETkNVXAXRcp5ycVcMNEo27EuAfMqCDzPUhW",
  "key30": "3Zy7LgLhXagrsNCggeUg5YQ4chHiwhEubyJqFEKdveMGEnAmp2yP4kDfgS1i8GbPrdk3ZMccZu1khA2SMbkDCbZB",
  "key31": "3pvxMo4wkHFVB7T1cP3fDjhEt3P3a1SXndoGq66dzmKDdXzCy9VH2jkc35rtPJkKqK6JTC1qMdxNk3Jb3cEUt3Dp",
  "key32": "35Ys83nsLyehDDu3MfsDGZ11PvJ6n3RRXpz95XY8AqvPWcAgsYRTRHqbzvQxcKz643gqqPn7rrDedGMpJJcTKKUE",
  "key33": "okkZdPyATJrUUC7k8TZR4mUwfSmXVwP5DJxt7KtWyxQXC1XHBEKErqXbh2Q43mZuFTvsYiPsBe88jX7gfmrqCSR",
  "key34": "3WbBXQvrytiQbJwbARmP7q4viU6PojLAX9V6hx51aXFsN5rMPgSDsa9jknTEVyxDLwe4kSdUo179nFxuWBb9auvX",
  "key35": "4RmNaaeB13VmRUju219DdryLkLrzwwTzeEGpSsCaxSExguv2gsbT6MmFZZTXJL6qctFZ6DPgsrVC7JFaEMhz3fz4",
  "key36": "4vTeD1gqjoeefcp2i98ezUtWwaGiMyhxrDdHtSUwbCK9HUNw3RksfUiCZR7aUa3fgbaJMHSiEriRKAPiWfg5H694",
  "key37": "zoWnZxNJYxmHSuc6tA6zYi9ccmLUqWa8xWHxfH2o2qhbXAgRHzKAKBLpBx7m5RNsy6iLeEnS8hk1TitsLY7cmTh",
  "key38": "63Q6yL5zuagNyUxRdRQi7ttzgGBLdTvy7m9yU2zDNUCttnC1so8j1CpW2Gv62pkFtkAcCxtMkHb1qUBBYk2xz3tQ",
  "key39": "351Nvd5bugQJRzo3cLQXx7s9qiyC7WUDomzakHFUGD6fASebC61Do28e8bsQpV8tjR9T8mM9Wm6yui1HbKRAVXKy",
  "key40": "65TDdahurDd9FFgtXnxxwEueF8jtFi983zSLzgw4kx4ZPWcjVAVxWJkNJwzxgPpJqkXX939qs8k3aU5DgEGrYHtw",
  "key41": "45LiUQmDaC7o2pNptantTcCT2Pp6yjsgp4X7QUyDyRfkURdzcM8vvnteyUwtyMZUHxFbx82UKh3GJgS3LebcacdR",
  "key42": "3gvi5nDSBDR3zQsCstgsnnAyV9Bi7rdg84LDEB3CWAsMwDwqUCrvveE6wNB51QQQ11M4M3e4gq177V7wFrJaXAiz",
  "key43": "4Pi37WetckGo5DZfs9mtUS1sE67Kz7o85ArTinXxobCHKfy3QALNGH6PLeh9ut3Fn1u7D274NMcqwcjoBmHKhkXy",
  "key44": "3SpsnyYzL1Ce4vwxjEQLB5rKfTz2bi198zqnwRmExmGdGnn2SKGLorw1Jx7W3EBZZoWFtWX4w67HqSjqgjeCJN6a"
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
