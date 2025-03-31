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
    "37vvcypxRJze1xctvgbXgwRZQ6f7CkjKGtARJ8zBAstF45YHfn59cz4nTmWsog1sM2ZnkmRe3pkMeZsTtVa7rqX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMzA5sDR4DwTySLjQarAgBKymzKejVbzd63QqXHyvowy1o8nu68RiJAa9Q8JxcnGdydNaoqK22ipKtb3RZpCAhh",
  "key1": "58BdoHGbgzUjwrL76MWb8BtxpeVfZRULYAjFVqgy3aov3K2RJT5BaDcgtuVadTRi42BYGGhX4eF7xUUnmen8hLcf",
  "key2": "4e7T8dRMUcgP8aYquii6FvPLZMjKHJ4rsm1479Mvjt1MQpJMYAoUdanCepWUiezNj4d2UaP1wCkM58WHYSH2N9ge",
  "key3": "WtwaGTREkTGyXLTTUrcvz7u9MSm8Su4UuhAu9Wwz2hVyhnvRPogvKcxqf716qGMprsDGFuHSunDPsgNcZ6suDgm",
  "key4": "4EPqGY3v9QFuov6hQZBzHXoZyjVUHtDStZz9gbhpcSRD3sEmC32WDgTuVuLVD4Pa3SZ7nMoHpzkRswbfD5AdSZuy",
  "key5": "2zim6c4Mw7TL756MM3F4V7sPdBS6Ku8LxTaMhK9t6mX5cm1czx6CA3HSYmM8zF98xEVvu9HLV4N7s9sbC7zpkM89",
  "key6": "3GXMvNFWkEJ8Hd2QjvctSt7HybVZE3kp8ScYZpWPLNG26dDKgiGdrCvMKHZCfwddbGjq2hLbM6DJE6CZD8gefb66",
  "key7": "3ewzGdaNRQ2eMEFJdGTTdXYeY2ktujXC48Z7aTpqcctZ5bCeTNHuZRxwguHJQFYzyMwiyWecKejv4qk6VqYTmoJj",
  "key8": "2ePauShtTDDt9BPWFqeQmot9KytwYB5j3CGWtzC66Miigmqea4vFKP12YtcXjnHhC2TivA1YrhCiQEoLSYbFTTKD",
  "key9": "ydB4j7hY6vuLY1rdDrnZDw2TNjJ6kGoQtGSNNR79XApVGBCdjWn4qh9oVYLvFLhppWuS1HdNZiiruaJs8rdVCBU",
  "key10": "WUZk5D1oUfKV3oMwa5kmDtKPwLdPVV7vgrRADYWpeUsgPtbT6NuqivmTnw8jYGppJEnGRrKu3TkGgkQaCQdEbax",
  "key11": "PWXo76JAzvacZSbW1tSY69La2ipfPbDWz5btnBy6rgZ5JXRzK39Yb9fbALc2vRWMjBAKYXQbkBYviv7ZgYYRKkY",
  "key12": "XNFmTt5Vf7qdZpAdnxQX4z5eYCLMjBCy8tzzhwsTH74VSbdEPP8UveASpYvvyrJpQPFgcY5xtmku7jU9T73UA87",
  "key13": "5Z8ovdqiihtwvTcACK55sadDCZnA8WVoqyYNuYB7ieQk2kj6Fn2bW7uaqfizsAt1eJgZaYFQ2NBZXowzf77NTZgn",
  "key14": "48JqofcKR6yPWkW919TpMjHKwwjAqDRSEFvDmcc4ouLYk2uzFxXGi5Lh9HEm9PSrvmbP1rCUZTa6vr5N8Ev6pTTp",
  "key15": "67EjexfqrPyfxHqYFEAjcjg7UW2tiqpySQCa4bgzb7C1ycPch9LCP15UzSqfBVnzebctRT3cwZukyBaLV8yTKQa8",
  "key16": "2GVgtLn9gHqSrB1K1esCLgH3v1uDpo2LCtrXADa8eCP3WvfDAj3fco34yfm7sfoL4mSw1D2gvTAxFXdLwAaY216W",
  "key17": "2QxgkmiDXansgosNs8YJzqAjqGf6suVwNTfmR7y1wBEXLSnhtTvaK1eG3WL91cpzTqk5JSqDeBmjDyu3onyj5tYb",
  "key18": "A8whgfXDKhJE1ft8mepE6X6LaP2sxV6gx5YKa2zNvXxnPbP8wGyQG7L3CqaeVH9yWNsCrFd568jnyWWqR66rgNe",
  "key19": "NXLuuDBq8EaqdbPTuKLZi2d11UaustWaywfep2qoVfZ2qFar8tvgpJ5cUdSmfEtZf24RtAekhi2vawutyWqft4n",
  "key20": "2H1v3DjTUuLj2Tc8qTQ9Gktbe9goJioRP4t69Wwj7qyfanwjt5MPef8qbfNGVqpHxjGUNsrmSAxfBGufd4YqXHgm",
  "key21": "2BD5KVtMQSB4t6g8XZPaB5Z46McvGoq15WKz5kHDE6Lo6WAnbVgMPeYykuXn4JiGGMEUVR9Bk8SPJC54QBMUoSHR",
  "key22": "4DeJQmSzafv5RVqx8FjRn3TTd7Ee1bAgz8Vp2tnbKVupX67ALB3PBjaB4DNKXdB24zKPqmgNDKJr549ByH62M6Mw",
  "key23": "z6j4xNo7bTz49M8LxBYZeFAd86MKNxnXKcUt5n2xUYbgT69m4HuowekuJggWKQAVhuZGhbruH8yope7nibHkQ2P",
  "key24": "5eU3PBRfnTLhWiPSJtonzTz112ywRiGjQMEB1WaeVmjVWq8AK1k8UDzr5BKM27uS4MhAAbGTPhGBWdUGoNGaq5fJ",
  "key25": "agxfUTZiTRGyPqVjnXXdHTYs4Psx7LadMKkEbZ1S55pDgkKXEbDM9W6C6eK4xnbtkz846kjvdvFVZrKT5tcSRXu",
  "key26": "qeftBjhxP8fVviqnY7P2wAuKvZKJRo4WKnyUqK8D9hB4AMSE3HAYjuvVkJy2thMF9gdiwkbojSPgJJx27t78DHH",
  "key27": "65VwB7k5gsZNvxNUJEhTdAa6h4x13XukDkikLGsNzRK8AwvBxjYNUSQZGfoHEik85chfSeFBQ7sTWBnrAS4cCPsA",
  "key28": "4qZXV8yTakD5a777JfrsfNWZwzP3R2bTSBSsuNxC1qAKhQApTZ5rGAaamor4zVcaQjmJfbKX3WVJPAiLNhpk874A"
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
