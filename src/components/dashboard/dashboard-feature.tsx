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
    "5SX8ppZs2yJtmTT7SKvxJxPRd1xUafMGPgo2xrqHLSpUNrVCYQBVLqPU9Lzpo5NHdsrAg2gJ9tN9gfsMtd7GZrLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZffhggtjykwhnRyx1vpHVLcd4UqCQzNbrhNLaxWZJYbumdcpoGv4ucCtTvasSHm3X9n1kfve9dzDmF7bbQZ2pa",
  "key1": "2NH8wvMVWevejjpDnWTk2rvKvS6H4YydyX3b2BPyTk9TmzKBmDW5Lofpmzjji7rDPh27K4QnMLYeUSavr71SxCvN",
  "key2": "4F2FbqDZdtQrnebcumLh7GRzytK9jgZL8RSwaPrBrvgnmWRRd4Ytg2wz82DvEgsjagFov4YUrBnooiPyAuvDjcwT",
  "key3": "2zAwnbUUygbEUdj1vXa3fStLwQz1z8aEmQ3xdzm8ewdNC5xciy1hQutwD577kEMfLs1dbYnBSyFNfVds6vAoxWob",
  "key4": "2Y7oVhdJj9fGaw9bNiFdNTEbYCJNKnGcYHyHkc61hGseDF1D88DfPpgc9y7dsfV5VJ6K8uoaYWWwrFoTKun1ZnoF",
  "key5": "2sE9Pn274ndgSR15nnVrEiC7Sg8piM4LTaG2BPoVkodynRwtne3v9dgebRpL13wHSe25NN64nBrPVvJPWG1TNyjm",
  "key6": "5vdh1br6GNhmPNg4Zu7FrtBfBp71kp5ALa5t8ViJK3D9C8BeT6oBpfWwfVvLCCYnZvZya48w4oSXqYCxBExhyprj",
  "key7": "3cDeRHywam79XpG9ZaqzGefEUdA9BJVVTuzjLVtz5TXzDNoWgZqKkDXjLBr8rxFL7pmMvnBto4AjSujFQNJobJVW",
  "key8": "5pQ4noLHcnve2GRhtdHKL6dAeZZ3WWiebJ1N7ZAm9ausa6LTe4DjnE6rtmBquPTdH5tfXFKpXd5SYuSJpFo16CAu",
  "key9": "8T2zWn9aHToH48rySkzeN7CQ8HTnkUDP871MKuoCtb9rRkgjjBmWGVQXGxLQ8u1WNVFmdF5y8nbnrKc3LnwUKxy",
  "key10": "3sFLiAd3pptVX4fYnWrovvJKXjgUfimhfjJPYYGDvTNmPsbLuvEoK4SPY9rcUCDDJGBXWdKwSKwEAdBZuRb738nS",
  "key11": "2foeXjqkh1QfMfMnDW45pLRqdGxd7Bko4MoJP6N8ZNZR4Sn2qRLkxaAUNUZfCpjpxUAGs7MzL5dga7hasCNQqJha",
  "key12": "2LzBGo28GRrLgioFRS1fvDWSEcpV9G912k4Q8sx7Rq4yb1C3tEzxw2gEVGdY7WbdvBWNPQ3mG3FwDABZ3AuBgVYE",
  "key13": "3LLRQH9huBpPnRTpr1jVeoYRJQWwpTUHXepJfnLTaLgH2dajEkUX3JrNxrtn3eM1feRZNe33a6B4H6H9RBqmNMb1",
  "key14": "4ik5SKtDtNJkP8oMH6vunfLssjN6oZ1XbKK7pojNJ6GpVpdYiueL3uB5gvz2beZrnmhCDq1d5NKhAvjUndBrWK63",
  "key15": "37HsS2yG81xkF8vtMHASwv2ZWq5wgRjLPexjS9gtfx3XsBU5TK4rcoC1M79ANcj346mdusrSeCWYHRhPpmobNYuQ",
  "key16": "SSJoSvFQUDQNzTu3VvTLk4jyCTXo3gYRyPgQL9oiXEV1jhRyLYj8rWFzmo3GgeX6RQGVPN1XBwcjsbSjF591Y4h",
  "key17": "5qZStn5f29HYEZGj6iaftz2BehTMYxmrzjPrcAic5Uqvy6dHvGwAUYKEb82qiVSirWhA9MPyGXywQZLT6cas2xvj",
  "key18": "4E78kxVe1fmPfTVmTqpmKYLV6hhYMCJ97qHTnCKLX9FpAKLADFKUwgdFCkJr48rND6adFnHpfHzCmk6jFL4eLojf",
  "key19": "5LGKZhEyXi8f8GA3Y3KgMgmNVpMdtg9X79e9mRuWViSvdfFmWeJrpUVXSvriv1y97HjKn5UsvYb9eJ9zVUVsJXYE",
  "key20": "vjCbyHktqQJj4kP6jhJLQ6kwZ2ZvWsmHSMqhnp1Da9SwxYM1uWp7pW2Z2M2ZADq6hh7xA1c4wn2kEccDdWcto9p",
  "key21": "5BkgrHjbaBcELPZiRW6PK91ag4ckaiVTRWoqaiAxcn1Sr11MK5ydiHmdvku78LL7Ejn5MvSPydtE9nGxhvVpqgeq",
  "key22": "7sNhcRSZV6fjZmP93PVKNi3qCV5k3okkGZNHji1ZExQYuWVmxPEjnn4uTm4sEPAPUeqxj6rdFyz4PMsdPdnFjpj",
  "key23": "zTtBq1UEECKjUoAgVGpDsht1xbfm3Eqsm7tWEfzwthQv9kDo6CvQ9hDSu5EdVCMwwezkivfMw4oPU8wGrWvkq8p",
  "key24": "57ZPkbWBauW1inu3NDXQcjh9Y88yJ65GG1CEB7sbMbCjmVkpdVS6QRDuSBFjoWnzfwdzM9gkVkiJ8ZqHx8GvFw2E",
  "key25": "5XFvuQiFipqxCW6rNH8zDK5WxMSua24boybNqmYLV77pbCNkkMs9U3HCoZQL7SAWzPaLnLiC8mcTj7YxuMkKa31e",
  "key26": "CfUWtX2WoAWYeinHjysyaUXgS1NPkkCGRshSntP4hQ43RQhpp5JSWM4xkjBBzUwabhUhyMRtTVA61VBnhSyLrJA",
  "key27": "3W9NwP221km8PjFRFUpRds44yQEaiFeQNvnuayqgSn6KfWKqXp5fAHxSgWFm6Tqg54UJGVv1wkHTwVDD3bj9QJku",
  "key28": "2LiXYHK9UE7oFikzj1ZPkCLZYwZ3Yw8huwCmHSbGhNsYNcZWgkEUAoaFT5pHWdsPLdX1oUZ3ekpSjxcGhey37463",
  "key29": "4BbD22dcwhamedoxn668xKNcHpb3dax4zUrVyZKMSUJcijw9uDL5NdJALCbnCT7ccSEKx2pmXQsAWd4cEFpyTG1h",
  "key30": "u24CPAkXaFyQt1X4mfveM1jGZF6CPF7Ywu4HCCnarWkaHmed9Sa3APtkExRwso3uYpZAYtRsxw5j8mRmFovcDWG",
  "key31": "4qFpKWwWFuYaAcN8dnWkt7Q9jVBQWFhcgGbkjQASxq8iPMBKbJeqLSJpU2PonxQeUXcQAx44MMsQPnhtPZbihwVM",
  "key32": "5Qg7PZ2BsVsAkDuP6ae8xCoa7q14GuH9pS2hhfwVXWcd7NXjG2BKGtXLdJdYUigpjg2nL32ibU2AWHBsXUdVt3eE",
  "key33": "yy8fv8nNAzaiXTx58sBUwf16P71HFVVzQpMw6YNmvyMUqn9jUCFX5KF7KvhykvVzBft5Yh5RFVZKTRNQWHKzxP5",
  "key34": "5zSBs2L1AnXzSAz4g852RUjQfeARYfZ2NgmUiFBTC4vBrKQEmWkBboH8uiLx82mSXTsnjRUFyYAEarNsi3VoBydq",
  "key35": "5FhznmTCprymJ3g9MXRhdvxnQnJeKE2YJHLdzbA9bVpT1Yo7tkrzAJNdBaKAPRWyQswms46qLv7BozpD1QDg4da6",
  "key36": "31FEJc1CpjB3nC9p1euHBc1VgGD4fCBL4QWtT9fH2fMCoBpqeHjJpX3wMQjiLmLCasSdj3aZy1DagdbbnVk1jvPF",
  "key37": "3fVAipY8x15gghD7uEccfEsewXqGN8a53utSYT227YGHAW7eBZ2HnUUBA2yz7ES9dZhJsnFheJrg1LwpfNuwi2WQ",
  "key38": "LaE5RTS2pezNhfoumadXRC1kUXCYAdusuZLiCk1JvUwxpvLzaXY7BzaQ4UrioXVKipwRhX7Hi8gE4oAzifRHFGp",
  "key39": "4kK2XNA79SDZssMxs3TvNQEGYUeLG2tT8mnjzCpgh5TCZGSWqqFw7b5kdg6PJnbzSHsKokEoRFetSTVkhAdJXZ7p",
  "key40": "2oib98nGGbj69jWWDR9MeNPXrmtbivefYxBidzBiktza2mmdNxUGb9xHSCAjTtFzbFJQxmGyW6ba7uKheuDkJcFT",
  "key41": "iBtnysb5yoEVxxWHqXF14oLkNYh7tr31zq6mShQA36CNMWNaoH8yHtZ6jr6jhNJxojVMCw8nhx3XNBaS9dzBVMf",
  "key42": "41soHPq8xiPfgz1NLUgyd9WEHBNN3E9r7qGgLCwMX9eUrYDP9mFsRNqEEEEUdZGff3yMEaA7PNXqfm9qyHbbJZRR"
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
