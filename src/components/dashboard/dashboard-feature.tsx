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
    "35mVfELRZAxgSdy1No8JPrQqpk5nkEhguPQYxByp1i6mxMAHLpXEuRU5PKrLo7Kw4wjW5vM1CVagzhn8GNbjSuBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCmjyfvhkmEafuzttnwFDgRRzBVf8VCcktnJruNLttWCyZ1V5nJCiWggky6W6AneKps7bqqLnKqsycMjU7nhNmP",
  "key1": "KGZaGYGWQ2zT8Dm5AdiHqJuNKfDvtYqRL88Jdfg2g2eW1S9AXnvVBapDvC2TL4Y9NbEcKBNbGQtYXXYj3k81R3W",
  "key2": "3HCfUDobzb9Xg6WvZaNjFtvY7j19KZYGZD4dNkNSjbCbEQUMLATDDUMWpVfvXo3NT1AmqVKDxLPkH7GJSa2pUdDS",
  "key3": "3qB5rDzhrxAz85a3AQt1zNzGwn1kcpMdiRyzFwDpVpSrHLhobj8bdqA6p37Bk639Cx5DunrddJ9WWys6aydaUQbn",
  "key4": "4GPwvjjmq4P5ZoCep4zGgcy8XUL9ucXG954qEjd446Tsqo4JPofPcMx9mjsvU9V2Bo4z1PeVMyCMQQp7nY9qySVP",
  "key5": "2TPykfjBmngurSRwKCMi4Rgog9wuTY7ZGuooGCUj13CqQFfk7536ZSWdznSJKg9x8rJMw6HSvJ1qpgvF8GLBUSTk",
  "key6": "eyH6NPdoQachwm8KWzPgUFGvGC1AoHLK635PrrMG1WvdcLHVKWSzSJFq3KBrndEpYA4hrizp6UNz1YBfDsDxF9g",
  "key7": "4aGDAdKB9qmuXjMdo9NqEhLsQ83FtN68QpLhmNKGmuDTQagyKAhePXevPQPQ6XPJr2iH1jrMJYMHLaPhjfHDyihU",
  "key8": "4cjB6HnELXkFweyGA98JTRNvuSjSPwnexqxiYPDo9ZMmY6ENg9cFMfKASWLFdiwLCfEW5eLH3Y93r4CZ79w2CHWz",
  "key9": "Bpd1MKw8yi18AeHpt7VuqrZgz77PUxrKqTjmcNXKWxy124cYiAUXAs7KuyxWUDsGvqqTxnGa1Epgs25D3a7q6n1",
  "key10": "3wV4QttUd9WuvTVZP2qQcrvvWoZQCuYgu6VQ8VuTEKMQUXDi8ZDJF6gSjyqRgimghUBvRB74fqfzore5Yyd7tRzU",
  "key11": "35iz82ULGKR943yewX7ySDj62hAr83RLoXBZtnn2iUYUJJK5RE1U7DnXCkPBV21rMac3GPZbjpKP8xEYM8L1tEnA",
  "key12": "eGftpwNmgr1B3atqtgqd2Muk4abJ4mq3JperzSkDca8teVEiBC8iyByuJgK3dUnFQtMz3gw2RNWqfwqgZh69QrH",
  "key13": "3F2Jn9VYBSdQFFGGd1xie6GBtQPCbMverdj4PAbfyDGRLUstqpfcUBVNKXmXhTFbBSkXDJVVW2wooyc6Mp88BsaF",
  "key14": "2e3d7kg1HiGEHiQbgJ94dfkWS6u2zZdxKrbkCEoBcvt16TS2CREPSkRrdKx7orDcAAxfEcu4QY4vVH5surK6LUZe",
  "key15": "2mnDfG8KMJn6GQss9FYmES7VmYwKyL6pna9HTcdShVJ3YRZaNHJGHyBKhD6sNTk7C3r7LEuFa1VeCntHabXkinEs",
  "key16": "53G1pZAZb1t4kiErF5WSTeQEmxdGDJmvDEjBxySECD4ieWuNM9eDgKV81x5cjCp3zUfaM7nFGSoef8ZhNcAkbnaS",
  "key17": "4ykydB7Dr8wZJ3E1fd9Qes4v6o6iyFjYnYe4unRNRKQc5V8jZY6D3oPRoRxnyu9FNMxQu86631EpqYrvY9QHPVpC",
  "key18": "Wrdw91ckbgqLkSe6CUU2ZxToHrWk7mCPtEAwxCs8Rc9fx2CRoZ3dRfKrHDFB3Jn6WDawuf6bU9fhAfYmBS7ShLL",
  "key19": "36vBWrgcLL8MepFWSswBerB7eHocFivvATCVnJyC8CTuzvHYALSkWGsjRyafnV6mTMm82tfyggKpy4kQ5acoqPZc",
  "key20": "2pva8ER1qdLLfQ2Es52ngGQQ7b7YeuWobBzpZ3TDVtJhQT7STQXp7Z96Hex4PEmpPZ1HM8neJwdMXY6pNXw1uUJZ",
  "key21": "4j3Ns1CCD6YYfMUb6uWCQrzn9jDDfECXGe3DH6Mub7jLikyr5mHbuWYgobLhHHjTsPV25vb4W8kChqyVChWNDczf",
  "key22": "XWBxKuC8ZYnBGwgCyHsG6igAyEUCLofz5z7CXULPkgYxPvE1nncX9nMYkssNWHwCj8KG6bmawEoCq9BdZhGpJ6F",
  "key23": "2jtbDLtLiPX8bsyMj8jauCqgeeBuqUwmwDUfsx98KdTCBedFH1rDYcyxnMKHkQsFgDBmH4YxwKvjxCkFk5HJBu9e",
  "key24": "2sF9Mmae4mTBcfP9mjbf9Q2aNTKjv2uxMd3jo3w7cgSbNyYALm97FhddKkMx6HwUyA1VoYohxskgN7K1yZ4fByzH",
  "key25": "5VatBtggv1rnb8ok45yyKauuDgHLYxHsQNpnAYsHFdtcSNxNkEyKLRPkJwCE3vUkfDmgL28L7vQXH5N6fuvJZ7ok",
  "key26": "3w17Yd6YEeVPngFQ3KLUJJnXtDtdW2iyt89WU6FV65nYqMCBV657B9xV649QD3F1YT11wQWG4qZW2gK7g8e9vRYu",
  "key27": "51QUHYTf5VahgfzQx57HBNSnYT4EuLy1SRnexEFYFGMsGCL4JckB7zfYACZAMC4c5eMZPVXLrwkmiSxfdNAaakxF",
  "key28": "AGozqU9ubE5wKc22NXAiKDrQjasHQLUdhBcSbNv4Ers2BCJjTkkZzYGa1XkCWxsX4SPu3WdijvYXxD7UFWMz1dk",
  "key29": "4JWRhcMcP7vQVWjFK2MUK4xLt4UKbWYCgd7GdqncFuvVRgXpiBRijbzzEkNt8wgKnXsDrMvtTsWMujTDmjDvMUiY",
  "key30": "3RYKLMQugHBaAkLDtgDWbuemGVNxdkgRN2GSGJ8n5SQSAJ3jPUStUwGS3QzZ9shFdfiDqE1V78rFpeF3KEGxsPud",
  "key31": "4TM3BPG31qquLJsvteQBMszQihady9KHUTT6AHifjKiU51cGtt9Kt3BjmtfwaemWAG5hqUBTt2dQPLqDjkjE2VYm",
  "key32": "3X6rDLzXDPGHCM65ewedXex4e3hDSbfVUz4PNtdfARywei5HvRezXd2FGoWTTzkXcfSPzyFpxGY4rts4vA2q8Eqw",
  "key33": "3hty2reNrTcQkguaKmKY3pZmCFeKDqEE7oNBdrpgzJ54RqDbFACzfQZwYu6yLPVDd2PRCG45VuJLJPKPzTdWtKm7"
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
