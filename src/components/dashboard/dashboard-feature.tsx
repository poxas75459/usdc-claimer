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
    "3uRAocYrAGSApD78AcqhoRqWxuye4FJnJu96qupm3ATzyNMFkAwKHoJgnFABjoreotyCKsBjKRCyYrBwn4bSzeka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4BgDoE5Zy69uPkb1v9KxtGmorbWh221HLkjvgJSFWmkdviAGK4jMbTyqTakAd75JxPz4kxNEZX61gZbwCAeSpP",
  "key1": "5o6fNbRfLSLGPbFXJJN8h8XoCHq1nzaCTPAbxs2hnKgPbTxzWRiJKmRG2UFuc5CitnubBu4D9yRAsU4Fx1udoJp3",
  "key2": "3DbGhwyjMgbLtYxwncRLyifhu4kYWyMuaso9sJvGxQ35vn3iKeYfqkhJPuQoZgQW2Yw2LdRzMcPCume3VbxmTakG",
  "key3": "NtPvANBWsvKL3LQFYmnXJiBn8UdGg1as9uXrUe7axVbaa9dVk6bi7sWNZuj16jh8eYqn1Ef4q54WkRcsGjfLDr6",
  "key4": "NshWGpmTudCMfqpk3HauMmdQtpfuZsdRxBptBL5Tg7Yh7c7kiqD8vw8JpMMwK9G18diwMfUPfM6vMucHDzLgTNx",
  "key5": "fh5muvjCV6os1WmwPnGRQZGNF8HdxhbPxdSH971W4pH73DWSaHS7FYYpsz4wSzFixFqpDwUqAWad6w7hdK3w9tt",
  "key6": "2VUTJN5AtTaUDyeN31PMRRBCuuqLz6AeMMEPGZEXFjeT21FGYQo8rX6oFZ7GaAqGCBBvq8rsfxUDZ27tyerBUmVV",
  "key7": "5jbCkALxXtJfwLXyFQVEaR5g6jniz7zMWbaqHZNq5bpd3gX5s3zpPhzKGWFwUhxJXqMHurjGg9rZtfB2z5VSMCkL",
  "key8": "3kFZwmLtcb1kkY5cznZudSrr2KK9yj1hCVtRMrouvrhroe8Nofsdkq96UCu5u6jifW6qLnMBsfhTwB18ywNdaNXJ",
  "key9": "61BzfS7vYmsKFe34zsmQeF79oc7Xm2YcAkTBY7WNtnfsAzjMJsNkzhbuL1v463imDiJNs5guNp4rbaRSMj7Kg9TH",
  "key10": "4MpRpcmcd2Ux75HZWapEzwQuJ6B6q1iuHRvsHw1KMegchSHp8rTfYtaT3pu1ByGeLevmguYciPaCActuYYkwTkE",
  "key11": "56FAokwLqLJCrhh5VVvUqyhDx2dRPJ1MUjSCMxRrPLFMmN8HU3zAA7UJApyjQYrpLF9npdiqVwC7VZejPCAcGAnT",
  "key12": "652GF9LKgqHP16TjLtGJ7cZ25vNMmQsCduui7YabLVpXvE6bvjAfpnAM9Ueo4Qqf1BtLnhJqZFaRELZ22KQC5Pwy",
  "key13": "ATUw1fCnfbhWiwnLDuPZxbF8qFgBBCjJepQXdLwubhUpyX6ptMcSUQxF8cGhfvkMWHJmQWMwdEct38v53WmbExy",
  "key14": "2e4dzEgjXXUoPwGtpe2hLajubJ6hNxWFcFTFozzQqXfGPuMJFMhAX64PrPRjcsKUf93SxFNnoZTDbDSAfuq2FN87",
  "key15": "4fcEAvr2rpUw1PZnntVeNwfTkvprsVhZkjB3mStdwDKZTBk4mEFkJL7GLd9VGRgVeQiHgisbwwBG1ZKR6XLxCytE",
  "key16": "4M6V2KEzWNfg7dTowg4VKXkGpULuyeTSjReExShJmM1yf2UhSKHpsDeMMyMv3Z3hA4Zm7AofY7TBkLrXsSqNU2BF",
  "key17": "u7L6jKNnYj3bSDzzECmNZSBiEDGcnr5KmTXfUwRo1Kzh2HB3Bwmsvs9WN4ZkHGVVUvrQ1H8DVAZjiu6Vdjs6Zxt",
  "key18": "4EJD3szzxD1SgotZ94akyuKSh2ckTCnc2ufmhSCLCFetYxg6UzmMRQ72UP9zkCB6XBGAyY3ArCVX5F7Z8XqEDN9f",
  "key19": "4Hde3tdGxdh1QnTMdp4BcprR56QunjKLP2Z7BMYwdb56HFdLi73aW1jVrgD7D9qjJzojKwcGqo9sJbKtS17qC85M",
  "key20": "4pchbt7LBeJhEgASnAigqpSukNnzh8PUyxDFzgcL9dRUjL3PevZt1ybFNGuhK9ePrBsByytwJ2T2SKzDLFZgr1tU",
  "key21": "4vrfDPH3Q3XPmj2wFTHapEvvFThALBuUe27xJMY2dx3r3h12bzAqnhVZEkaYDGmWFnM33wHfmgjKZ2tHVZPQnXPa",
  "key22": "2e1t8F9YbUhJEUo1BYdxLmZRGSo8qxvonN2LE1pTeRtDgRm79jZUohWcqDmyzGf4YUpnpB5uHLB85GWKV8VRDUXT",
  "key23": "48JiYg2z4gMV46Vvqh6ZVbaiykrXz4VfB43AbZ2CoW4v4JQN8RsBAoinawvCG862sFDDxLFGZ4akxvBdtpY8V2mg",
  "key24": "2sFfBCu2BCisK9MQZoJ6oQJ9MTAroqdwFzosfvpHUwfFSjyHqhtyRRHQHKEG4RbiMZG3uaG2ogK4Gf4AfzQzxiHJ",
  "key25": "4jYwxNen1DKzbWmZouAGcziDwPevgzGmPBFpdefYfca8dWipeo5pdND9HbkmCE3BaeuKnTJJu62fc9eMkQimhRPk",
  "key26": "3DoFqkcpavbnmaaKXQU5zcrquRsLXGnfMiMbFsC42RXv1y6BwPr7AsjkB2wYoKtsuDhfmfw4XPPJzj81jk3W1esN",
  "key27": "3CxbFkSYZfNj594q6rYZmDw4EkqTggWqDspCHCqMZHbr43T33d6UXGBtcuVp8PyDqrznmKVEtnB4wPLCp2MVNbfW",
  "key28": "ebigHZ6UBLQSw3Qo1MtNMBjvuxzQimAdbuDFYdCdURbTMcKVh9c4zsA7YTt19LHg4KN8xnnaZAwzR2TFHBSEvVb",
  "key29": "q1tTerzEeXzPUiLNTADfMfUwSgdwhJbNzEYStZ7Hu54ZX58g1UyqNrY1E6gXz3pFqptqsksqu84eyjDjTMibRrP",
  "key30": "44zsoivBFrbGzE2MbGAtrwxybcUUzjqyL6CaoHrGjVwKYqeYHNwKV36VAMHcgMaYpQo4LkXvBuUcrDYsQ516PpFT",
  "key31": "4uq38gPDQyD3pLKEEYVu1kfk4jCb4bMt9FkJ6uiuKVUTw8wGoryzqQuHL6ADDVgGoCYnAupGzFR54CcCyHjANfg6",
  "key32": "5Ez8MscepEXy55DxnTGJJNbpWiZ2mhdyAE6R7ps8nBUVkq9FFQiwvHzSWCZtMHQnCk7TWeft2Tfp3uCScUUgwGmd",
  "key33": "65HXVNUsAmaUahy7j5Ueb11XV2juQkpqXUQMo1RnH6YDcEwjoB4RczJduthDaHVQFUW1uxL5BRA6NVQ95yispJnB",
  "key34": "4A7yiKSdxkdinPsggLor226jbQw5dVRtsR69oHtfpK7KDXxKuqYgMG51hyqzmR2miX4EwkywGgF3cEM8kFY32xoy",
  "key35": "4wjPn9ypFiuo28RvBLQArNvRrGZruPG7q1HsPzFNLkgZ2PuhfXhuY89Yiq7HJkjsAxsDLapugpQJSSreMyyPAfc6",
  "key36": "2RH4t2Gv32WNNNmPsbaBkdtS1WqPJXBu21sfaCWc8TQbVZgfwyAuZ6s7usDvRGppoWayS7HxbFzcRSi9P3VWnsjL",
  "key37": "4SmHUF9SpFTLmPjTTdcpfiBgvV5bznom6RaXmy1rTYSXirf46BC9SMhY8n3EsWpE4aFnLRYmhmo94UqyiQiomFZu",
  "key38": "66p59RpckReuiGZtyEzaYEg1hE7No6YYt2QJyMwEbmB9eGmDFgkdgZv5QjVddy1iaUH29MG7otCHcxS9yVGa2nkH",
  "key39": "223WaiFJNYToY9X7F9x6G66A8hg91AFcUQTLFP7w5a61vP41Cxfp2uL6iHresAXpM4ykqVU8SkARVZvcYVTn6j84",
  "key40": "5ETAwXQSzFmU5LqpeBMWtKd9mpxZhv9y76Ss1U3ZP1noFhQzMc4vrjS1kKUNbsDMw4j26gqQ862t91z4aycj17f8",
  "key41": "5EMqFs2yPC93BF3fD2TPNiUacShLZfYJ2WdcknbnCzQ6NhuJRDUZ6rCJkg1FZhtcQmssTDsUjK22r682jV2MCDfV",
  "key42": "4psM86StWfvDKnronJt2a43z7ZcbxQ3ee689wvTLqS2YSqJCPwpLYAvLEyQtA5UzPj4BDpEsznM6jUW6MnRUhHmW",
  "key43": "VCfvKvkbWNEaEXZsnD73vD3zwkiaTznqnZMm7LxKpzJeEooDrLgCFmj9UftmaaG5PQNPrVWrmQ5wjcqeiZREqQH",
  "key44": "3vwuatuxskW8Xvxx9vgmgzq3ac91qaoChSCbWen45fF1ME8FjymLnarQAjaZQjjBeuDfFN4Gw9P36saw7JbfZ6Ds"
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
