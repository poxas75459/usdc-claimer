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
    "5LgLqhAjUAEB6mY7gF2VnHFpTNjgvipsae1qkdn5VyqNaEnW74M4eRqqwXjQd37QyF3AmGgARsLnj8DMsoW4u1u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUX5DViUPapQzraHqqp1CNxGdT1n9ZFbCeniiUD4KyYVBdGv4DetFizPPnsSwjTY3geZLLSKaz2oBXUruWaA18Y",
  "key1": "enHgAYvATnP5KLYT7ww4dkkrp4sxr9Jpq9zNTiBnR3MwAeniV4JqrNYwfxLBdmS5SVrTQXSVHUiz1RjNTdTNFqu",
  "key2": "BgyrDWwiJXoyjyhTkEEEV1VMTdfmfJPwKfw9XtGfhEZ9Q4wnpUCJacgH6u65mPCZgJ9CpJudWs2hWWncT2RJndN",
  "key3": "4ZwTVFWdsPxAiJf5EBmp66Q9DDS9AYJmMaXaZ1zbjJzPFUmQq4Ck7iMgcuwrhEJCPkRDQxcyy7Aix2DbQJUdj6f2",
  "key4": "4pgVvNn8VbgXLN9bYsaamZjnczfzbkEmXqK7w1YAmThUSEeMH6MPFzbysuZC7R3AdkY3uY6ihigu25aMFfmZbR9J",
  "key5": "4kUeSD652m3S34RZXqdKQMJJgtzerxzp5s2hfDBcWRNckvRxDm87aNxRx9jidqKJ8WFkgjhvtcacgutj9G9YVxpg",
  "key6": "2pBB3dXZbHwwuqqgxgqSurBuD5duVn57YqWo8qE64wr6m3db1oKkdDx2t19Zs8En2gzAQn4xY24BvJdrkbTgmDMh",
  "key7": "32nZeFugZRWKvt2F7WGHWzF8NL8E1XwLf9B9QKxQYQVe8buVvTKDbVVTXyswpyc9ZdwnDhAHrVk4P5gmAdzCE6H9",
  "key8": "U5X6v8L1DAhX7FTvdRW6Te2gDdwDuoir5PFotq3figdcRg884nFNpAX2nxKJmwSsoHFc4dz5eM3cGgNCHf567aT",
  "key9": "TqhjYP4xQzrxQ1a6HbG81Kh1ysGxCdVg3zLvQ5ohDsa22KyWZu9nWoUS6XXQgGgAGuzZaumPVcVNi7tqGMBUhmR",
  "key10": "wH55SAiieVcn8EqePQtVtqPU48biQ9sX3BukjPSeECBDmgd86E1mJakMz3bFzX7vdUSUumHawLL63W8NejPQQaw",
  "key11": "4zvG9FVHeyFFSe6giBgpcHsL9txCvaJF6h1SUNfufSy6qJFt7RvrcoDQigbaBDVHQXThFg2u1knGkcrWCfdjeFH",
  "key12": "364UVAwrzPL8KjFyzkejN9SJSZR81X38sbUTSpRkEfQcMoQb4JzB8asiDcvin6LQBtJoD1Qhr8Y22wYGbopMbp73",
  "key13": "2QobwmCmvCd6VvckXTkBhAN87yjb6rPKgCFBN3W6zb8Vx2hzSPcS7KGx4A27xPzFP2tTeA5LykqkaDHWqAMkfHTZ",
  "key14": "1SNcSCZqyJCbK17iMS4zRUk7aYpdNi1HY7JYvd5X2qJ3MhXUqjphuURyZqb7T7F2GyRnH8jYhYAUgrcQ4y47JBd",
  "key15": "5vSxaASQucpxRLUCGwyAttrd9Pg5WPPdLwUymqvPsYtBCJ4MqtHoAUtP6SgN3J9s9MjzzeRXYjFhzyhJua7V3Ed9",
  "key16": "4Qu2zpAyLdoJhe1CD3fzq43xbhgmY1tBSRQWXb9ZmQrv9y9c3tSWqEDB1PrdMFrGGNcR7dxzkE2rFPMX2za49z7T",
  "key17": "5Not5Jn6DzHewSwygFfhA34tQosXEK1KaADRz9nmKYXWtVfbbmGSnJKdLfmbq7mXboMi1HrZUgASBUxggtJcYP5f",
  "key18": "Jy5rTP8McS9yD4ncm72aWeosBErcxhy3DpcYzX5vup3UXz2YjhA3379TsoFCjdbEXSo3QxcjgqixCYfmikn5Aa4",
  "key19": "4QfeGWMjueQK8K6kLXMQa1rX9bkg4uubdsAGUzJamEadwMCkUutDsc65EhuQGVqdRXAycpyHiWhmi5P5LeazwoBd",
  "key20": "U3Q1YS5Xf5SVBPhGg7uLvvH2zTDB4KMM5DYY4vwD3hd96ttXV9Jnr1HB711frhqXvGuCQm8fhWq4rpTEbZ4Dq1D",
  "key21": "42bNtxR4qgzfJnZCyG1kJPgHS2ChejGdbEhR35WqZ3dNeo54x6UXaozh26AEEkRzwWhcM3HVA7NLPDekwmVxagw4",
  "key22": "5q2YmU8VwQ69JpV4XTGBr1r7Rkcpv2E72iNnZECrdNLeDBAdEKKPH8v63JFASKCentYzJurz8maCEDwbq6ZoSR5v",
  "key23": "2ohDA3ZYGbJDKNWGL1pVFBkpPTyFxf38ghhd8gWAdeLtXKJWgX3EhAZYUvjhfx7yKnJNNVjYKcSbpZ5iWYqDgPig",
  "key24": "4BErGDZneTU8nh9XERAu1xvPjTpU4h5hBpJ8GJtcnBDNk4s4KvwqJUWdFk8tk1dHBXVQ3PC8CKaB7oaqq4oMRYFL",
  "key25": "4NvyaqpjmhVSiiqQ99eJDSboUxtyDLxWmpHVmamkLfFL56KSFmqFur4hBPLosAsT2uyrkiZQg2JeDTyh2PSY7N3y",
  "key26": "4aq5Gm3WhJhM9wqNnSa33uPcy1YZGuTWzhAtnFhNJVjT4KBVpKdRSHebJdcysZs6KbcuUYKC1iA6rG9dTHJLfege",
  "key27": "4Moi6iYY1DLy7zNip5RhKGoRV8nhexbULBNyS1X3JEUeHFk4W9JZVKppUaPxyjspT792CDQko9aMyJ7atcj3dmg9",
  "key28": "S3suEVzpQsKCfBPXL8RVbDDBZa619FZYjKQvkH6BoVa9KysWXRYNaF21h3Cb7WxnVvRZi3XXCkMaH2ZHnAbNS48",
  "key29": "3R2fow6xqvKZaHmy39heWcKSoHkWcYrCgk7sPEzExgNHknoHvwNtbFZvUi3Wjn4PX3SnUKgTkoyDmKMeRayXNEEw",
  "key30": "dD8eZbNNNq1Ps5K77bJSNHA8jRGpF3z6z5jjR7ugUAg2GS2ye1tWvRjG89Voq3Q8UP4TxnrBuW2DCgRkdbcwXtk",
  "key31": "4jk3Y2Nj4Md1gqBRBcYRSUVqoNzpnLqEPhuoWq4Yc6eS93jpCAVHR18CkNriwH2MaDPkMmVLg5JeTjj5UjTi78dX",
  "key32": "mVXDhZdz7bf45Nu8w4nmRh8diUEK6Q2en6XnT8LmfUcJbhyNL4jJQcyyKiJXiX1q54kX9XZttTgjrKZL1wZPk3J",
  "key33": "3EmoVPwmEx8rvshYRctEb3HnsxWPf3iGLvtgVCFoyJvbXM5iQwgrC1kHxMQawKtJxVHLwMtmK4qdKZgMgE2hFAes",
  "key34": "3PXrdSMq98pAm4RG3SVxhxT7dbUDizVyg9QJziY1q8ESbc7C9HPJLfCxMtAuG53gWr6QeFM2qbmEtBjBJaG1GQMQ",
  "key35": "3AYdvrzgJai6We6GqYhz81bcut4XT1RmMsMgh1aPLx2dEecVpvf4prF3XkJDhqtdr7vus5ZK7MJq6GDC9fkPG2hz",
  "key36": "4bAtDjMzF2LLSBqgCyKodcS3jttKQzjZ1hx6sVRcJ6Q3rU4YtMsZCGKwasrL37x3PTYrtsQB8rrCbb1qzZzXDt1R",
  "key37": "3C7ff5ZrqtzB87nQsxUoj8UXsmW37STgSD17Lh3muDu1iDGq2mxEa8ozLqS5qCsUf3kbdGhcsrXTjsYBeUMdDWcx",
  "key38": "3tGJLxGGfabReVKvCv2hRPtSJvYGJX1gKgKHGC4sYk1D5uwEV5mtDHaWuch4WcU1F3Mb8ynP5R3DM6fuajSGxqec",
  "key39": "3AkYjzQXjf36kWJ4ygRcs6QeCqdempGohzW7uaJMCic6oj5Q4EfAtwZrQKJCZ2PUa1TpoGsQ6YHqpATfEkc2e74S",
  "key40": "2usmxU8x8cyrA7XNe9X34NTEtoi9vLK6Ns1LCogSkAZLNvTixVp4EBEftV98bDCVZp2V5PWLnB3i2tW3XVhAYXAz",
  "key41": "2rqyjUQChN6xaXptk4Yue62QwtnFZ3EeGJdD3UMap55HKr8VqzbLdYqApBWo4ZBqeW8jUVkTWucwAk9RAe5TNa6d"
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
