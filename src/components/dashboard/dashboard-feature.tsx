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
    "66qdeTyqnoG1d6HgDyyDeeYQPH6Rr1C2UwT58wMDVgrJsRzdnpyS1YyzpfKeZaCocTDFRfhRxDR6iJ4XR7fRGTyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVeusw4S7gGgKhj3KLmL4Zp8e5iKpSYYfQkuogp2YHPvosbWoTzfvZ4pzgTMtQBXEn9bZmmn1eyEiXFJP8hNwx9",
  "key1": "2JeNj7QNNMip5YVP8yLqwvBMwPv6BaD99cWPBXK7zdGF81kAXivD3pPCKgQn3rGgrB3GvpUBoibvQNBipsStTTHK",
  "key2": "4MsB4bNmfz2DZ47HcvgRsgx5NnDmxqmf9GuKxLQrh3tNitAu4S8h1khzkerTkvAFVc2xXkmEqxq5a7qLzcgZ3DpH",
  "key3": "22qaYSYVRd2ZsoNKLgCzLMEGPQm6xB7cFeYFKafce71wZz8xWi88nAzdAncbJsLT7ZHabSSScgKpz88UHWXMkbqA",
  "key4": "2D2zhLTW6hBKVVrPmcHrg4QYtUSWJT4xvHGdnfXgeJ4vWWBbfkVVsowTbFdLPC93EwT8qajFu8Lekj443JMox4Ss",
  "key5": "2umowBE76e3zLKBCyisageDvWnPY5HkCSvPrLvZYLpLdjUPGkkVUNbpnV1GtAuV6y1AMcXxMQRRKQKr1gvFgZSoB",
  "key6": "hooxfNnrJBLNDRGWUUkjyhAE2hgZw4uH9fsDB1gMsgs5C5CrYBumD3eF393RQifDdGCbp6YEWTdJWp2NKC6xWRL",
  "key7": "4M55KJbNXuAQ8efuLXCy3cDWjsAKAThbd53XqQaVzqBPC1UAoWeCji5VnPqsS39CtWuWU6Cg8DpM56cfqDuKXDZy",
  "key8": "5ybcphi3KwCTS66D5VtfFDYVeFNivpPRf4UF4d9nvDiXuZXo7pfvDVRn4M2gbipKVdnbAJr2cbn7qnyL2JvUdkkj",
  "key9": "22isPDSFXzaPV5KPFaBpD1uyUR6DoPRxFt2JcrbuC689TgD6JXQ5xJnNqtCNQxJtA3yoSjXJnaQbWkB7RwgPFVs4",
  "key10": "4BUV1ur2VpdhEPQFD9xns9qEvP9ipQKSB2KhTouL33uinaBe5q6xjt6pgXjkP4iWdDHJGWwVzawrkd7PuJL7FgZD",
  "key11": "57tPHqkKddPBGbuU7MH5ETqwTFxLWSjda14t8Pzke9LKDfnGGHz9iTnuevJBrxq5ggwCdnQ2D9WsLAHX4AWVboFY",
  "key12": "3pupw45FWrju8anDRnEX5zHj8RJw9ijJgdHgHXW4AQP928xvVjt7eHz6rKSHXy1sSnr26Fnz6RmkgXXGJMHtrEJd",
  "key13": "3wDUmfLnq1ydwLf8QjExWdDYGBSJZeXiMi6w9BoimepznppFbHS9xHG9JsT4XZGC6BB2sQ1UFpZ8GAahS4K5nJHx",
  "key14": "4jr9mbfJbaet19TibnbNPCRVxWV2p5AUjsnLmEY5aKkXikoiMn6KwQYAsUfLByxUqm4NVhJFBeLmEWiU81bTDeUm",
  "key15": "2TDGmKLRhxvuCyZDujFpVt5y1yMDh4r2GMfvWHcQ1Nnmfnp1DeMhgbrBNCEtw7r3uJx6y81wEjigDR9HEQj4KTef",
  "key16": "5jN9XcMcWhmT5VhDBFkWizqvdQm9yJUgcACZqBZn2FTnw5sWcf1CJf49MqWF7D2Q66zd4Nn2Wwcia8J3oQ9KVjoY",
  "key17": "5Vc5URR4KdjtrdcyJ8H4pKrWD5dFSq4gmcGTsFV6Fujm7nzPZZEUpu2FxZK6v13oUq2uoDEvAExJWVckmtdr8Ur9",
  "key18": "2ripoqUz26oqY6gx3CvwkzCaRJgnA9jmNk8DHvUjj1Er5yRoJ1AZiw5H38NdBzhf4GFU5or7j8muBNmU7ohFVC8p",
  "key19": "5p4rW59LREqcWPSdz8Q7pW7m5vxSpGnCpkz4upgtAqVAdVjaFJJiKAbcJeeWUAn5AciqkMeAFpaKHTyHsoA1wB3y",
  "key20": "23SwaaihfZGkU4gKsWRPtMQ5pUuqCfoeigxwP2cEXGGjBrq45SisQhyXTcAxPxeGBdy8BtWhy7MB8L5CDkceW5hz",
  "key21": "xeqWw7RmGkZnx5ZrrRaYk2Q5GnoBgPBttodjNkQUtLjioinkKVYy696JPwQTmJMocPV48M98sigPqSo1en9ydUi",
  "key22": "5pnGqCaLuYfP1bSXUiToEqwwC9gmhHMfdAxaEU1ysS2Jkoaxsj2jY3XtQnrRUAtuGJw5UttHxPdc6fFwtoLt9T8B",
  "key23": "CUktZ5HyCsdx4FPAMgsDGbciuqc9WJriEsmyfn464QAuoumNbc2KMe7BUadNpJfnUNavp6eyx36k5uBVFtqHjxB",
  "key24": "4JQQtnmSey9fvkBadpDGrV1AnnShYfHXETmzMhzzKdncnTNYyXsasjG9wzTEsMbaAxy9yfn6QTsPUwhmoohLtRmP",
  "key25": "2YwQ13NWVYYxzjx9DnXirfhzqFWrnSiX1nnVFUQoQV3gWwuWaXWKB3cFULrMwbi7h42TE922UZ2WDvt1NxR8ZJXz",
  "key26": "4xQWiq743QTBqN9HcC3mXMVH1UhNTLb6qf4WVQjhTUxRCpNmSRYkFBv57fLYnqxy1FgYo1db7oMHhNzSv9Na4Ddt",
  "key27": "2imGpfnnKK3LMHsHC9nEjZq5XzLYjcBg3nXveqZjEPiuwhDviSZVQYcQk6cbsUK3eoKhygG1DmJf6TDPiVG8JMws",
  "key28": "5mfaJRXJvZcPAoq8jadq3t8YWaXPV9BfreW9QzCkYQ6dt9biNFzHzSK92siFSMPe2QJKCuDpzfcPJvpwwjpMhuoK",
  "key29": "59waFKFUaP4m4nHEGD24Ufe6c868F8AJaYxoamJEE4tQz5cXJMMAvzpTQtxruZx8b7vwHLw643Kz3vtXPFop7b9S",
  "key30": "35rdfYeDm3GWDVw86CYwd4XLRM8q3xEUtJii59GRMQREUAMbZyDszi7DuEdRjcwsgdJqVfpMA61huKQ2h1urbCbL"
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
