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
    "xFXLx44GoUSP5eTgGufKE1ZzEktsrYTReAkXnDr8QKmsW9gz4vFnUbzAxPbHKEq56QMSy8z25AxwkarHYypLWsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7kTJY85Nv8sBHPrxuxpRu41HBDnFm2RSPJs6bmRdRuU5V7g9zQ1xPZJ8UXf932HzWxB84QsAXS6CdRZK9MT5sY",
  "key1": "449yt9A6EA8cxG7EsYbzuX5uMhm6MXQrJVL78nD4fp7yNaDQPN3ckS4t7buvbnssjseD6Ab5ZWyPvb1hne4WDQoX",
  "key2": "2sDvG17wyMpAvmbPtUcAUXtGgxXutD3Kqw1c8ts2MSmCW7XsSpift34cULnrgG3z5bEDEjGC4gU94vru5WKaxqSJ",
  "key3": "3hWW27YvxjDYkpZAC2UUGzw7pJkRbd71DhgfXdhCGsCcRwfPF2tQHUgZ3Uegb8xLLDgrSQUrik6S5nYV46TfZR9T",
  "key4": "2kLVusPb9kYCLqzaVGJ9X5pf1DxkRB7DxdjSbMHmVtK6qreKQeQJqR9Nid9n883cGNrAswswfqoXPARZd8KfTYoM",
  "key5": "4xSRa6XSCEAfggrRTHYHPwnBPhd8krBetNfmtVS7vddtdTgmcz8FiEaQPBZ5jHURLVUTnqHZggcz6tA9J2SMHiUF",
  "key6": "4YmyAxsNjdGbHzvHJpEoTDET2f9edtXGaKVKBZtucpj1VMQiBCQhgAPKwknsErvhRRoVm2brQECVDWbgRQqJ2E8H",
  "key7": "2ZN4VBeqf24oY5RHR3hS3MnP2PyHJ8u7RWJoSMhYkZJod65bFYferYRGiFERktBE9t1Kyf5m8BhDqoRNgxaFfxdH",
  "key8": "5KnwV8MEoFzSSpkERkTMryTjjhHk4qTQjT2nuCgKtwndHaNtYVeMzmmwFHdfz41himY8R5UQjgK8rRETqgJFvp2P",
  "key9": "3i5rKePnpjRbZBKdP72Fd6tmcuwUGUwfZdyGT5wmb6Cy82wQpaYCYfNyZQgud7iusyBXLxyXB7gv1i55isYPYkqp",
  "key10": "5bcBf8NBZc7Fgz365rPXPjfbWz8gT1ZDcKBd7VgF8FBfuFLcmdofEBmPe7M1DzwXnP8Mb4GZ2kj2SWYxVnLppNyV",
  "key11": "4DCTqfMxiKF6F1NX7QgNQzmHXrYSFvirkRNQWRRvECJQrdxrrd9et7eRFA3fCyuNjoXku67m4oTUxgSTYXs17wA2",
  "key12": "FGXkrb6euhr76YPWhLhHiTsfphGe5k2hAFBWnb3uRwyzfV8hjJSwnPpmYv1o2Vh3BDFConWLic44NbJ6jYHHSfx",
  "key13": "2XqJ2bJATdTRkb9krL3KMpyN2qnoBuPuXQcdJZoDTUPEgmrnoL9JRLSaqXiUv8LcoLa6M9Z4zato2z7ofzKzFRpU",
  "key14": "nFd8TJrSMmssj5g37X7pef599QH6BxKqGhWn7VAVVrArn66dh8ZFgRQbX2U8cgzcTvBfScsmdAvsqvD8keeSvWW",
  "key15": "3BnK9W5fA1EqNFzCP6uMAHWTwHbJg8AbCLSRYnMZPseumyBbpcRMhaC9uYMEJNrTH9XMFsxatx2yMaUJut5M9p3S",
  "key16": "2xr1aaezKyvjknsKTvnsAeBE324ULgGJHVPA1TFnH5pJYZGzFggnQXCKZus4gFaEQzgjgFWsQ4wTSCBfwWS2UuuQ",
  "key17": "crbeETDVFMKnt1mHW5wadT4wVYu4BxJ5KvWxmLVvycm8Kx4PS2rvk1VMRKDkBrESHVptKyYzZ7btJWmVQgL8XKk",
  "key18": "A9NnxXUVzA2VMC419vZoE4PeUoMhpmMiyh36xgjXfdQYSMUcy2UZpnHUTwYnfrPaDY2sFKGNKWCVuxTSzoi5uCw",
  "key19": "5Wb2KSNBSJRmEJHD4wqH1W4WFTNrN4jhFNJQrHJX1ZgyVdS9DD4gH75NyvVWGufQK5YRrCrGgeA4PbM8eC6ZMDC5",
  "key20": "5NbxUgfiDaXkLK9yhinn8Kea9LAB25B7gRVfM3c8dip4MwjVaWo2rS6cmRgZi3yu7MU72H7ENQrW62Aj4wVKPE7N",
  "key21": "5pk5XxZHu5YbobVLVLfJRrhNFVKs52GnUdS6mosN3gTVamhpVYJi5suRq3hNVd1cGzArRzfBR1kLvsycfzyFLiZ",
  "key22": "4udj2xikZKw5zueomVXvYoZcLxWsnHpRQYjwFdDqcn22EQZmuuJjQmoZLjmrXLCxodyFmVGk3FNacgWwoYuC4vzx",
  "key23": "4knHRypcFooy2SsLxnUajmvkFcJZ1UrhZMD4FhCuyepyA6PG8uocPfwX8SQeJ9sFxtjGPERppDFY4YtF2QLm9wQv",
  "key24": "4CxEWoyZK5CydQou4Mfibscfq9CThqG5muNwbvz5h9y6vV9T7uGjz1FEzLcm5zwbLNdVKKMLp4FC8ThNh24MjNg2",
  "key25": "5aCu2BRuaPUuHQBfJahvsTVbXsKV5jiyBhtZZ6BzpL4K2B2KactMvsvoTHj8SSheF5Du2Jg7cuQtJUqcX3LRpVz6",
  "key26": "48dj9wcPLs62BsJveZ4abotudZKAuADCvoUFgXGQB9KnMHQUkQN8rwVjuTRpKoEydivHcEQXL61HAmsntcByvFMQ",
  "key27": "5DHD5epnnJBQhqEFyz45yYMU7JZg6PEUYcF8FpQFaiwA1Nexkq95MPLJRXG4E2d2qe6VxsPx9UppNtwdh9iVoa8K",
  "key28": "4dQmAxZ4wFvBZZefCUnTb9fCVrBDG8UYHpgaBsio6ZszFqr5sFPW923yoRyDZwCyujRFp7GfLdu8XtHeFdu6QpyE"
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
