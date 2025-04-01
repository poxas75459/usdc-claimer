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
    "5wzjkvCGkDHQWdWMRs5XYDJ4MvptDPkXXuDzN9tsx9M5yKkhrkEcJVRexZX1n45taNSAZkCBDJTEkvm9wdgeBuXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYdCMZQFyH2nc6qH6ujqqEpRJjTvrZHFZpM5XjMyARy2mgLt2ytgedk6Zx8vvq8qGoNg1m8fuDVbZrQZ6cAsTsh",
  "key1": "2Zt7Zj3XVZh2wgf42ayHVbgR7LnLtnVX42hebp93sbixb7EzgjGGNkoBUBNzo6eTCT22Sam85zBEFh1AGeSnG5K8",
  "key2": "3PMfbqVoYEii3McVWZBYwLoZ8tk6ydyfis9n5o2w4gaU6UQBimKYdexhhBL9xR1wENKmJHxpVrv5egPLsyeATigv",
  "key3": "4iaQv3bJPb9npgjYBEkoBZQKKakNDigvpAREG3mnAk6ZX5XDdY8jXqrifcDTNSQBiLiUasVbvPojuDCdZTM8wiyB",
  "key4": "4WVjbhR7cH4kwGELo41CvWHBBqusZawDP6x8q6LE3RsHFtz7zzibtkRkHoZ4BhxsyeP2V1i7GRQLiB9a3cLiX7Zy",
  "key5": "4reeWt2wXy26Hq4ydpfjv3ysaNkTPQY8dtFVMZrwmTrt43GbungU91b93D7UWQzbKAVZFzV8R2vsTrzDboaZR7WD",
  "key6": "5xBmH69iFr6zun9HBP3R2nLWRnSE25qmZ4YNvLkuPm9D9bUn382WcX64Vnx6NNjaPU15oAXciXjBwGCp92grHcaK",
  "key7": "7BcwCP2CsikzPu6qbmjEucjaNVfPbQj9SM1u7zMHc87gsa65ct3WYVtzad7JsiFjPfs83cG3cERJk2bYgd9Ztch",
  "key8": "xhvcYvjkrCBgprViUAojH2ATnjJ4V3tXNYybh2HyMS1mXXWv9jidbmzj6vCQrrnGtAjMndj7Tnq2pVm4Pz34mmn",
  "key9": "4m9a8MxZJBvrRRs5kFTEYWYwTHuC7QLqFAkFq3HykntJrwSLvFvtaDPamLAeKCzZzUn4bZZSHWBqUKhEqBdTty7f",
  "key10": "5g8kNPdmF8FnFNPEgZ5znP4ZCRKZ3PPhTXL3wUSBRfNNFVVPYa9zRnRid1jdUBRpL4DVeVYh3HGYeQHLfhywGPQn",
  "key11": "2ppxWyNXkanC1pYsGyW7VdNGdc3oMReL2QFZfnUYaiEAXVuQ3SpZkHuQtTK1CZUtr4B5dcbd9tkJyTMWTzMCPdVQ",
  "key12": "3AiymM6FGaZAv8sQkUnwkrkizEVmDgfArxPwuWiiuuLgcnH2EmNa3MnT8TVWLf33RtMBwMk8XL857vC6y5ustDEX",
  "key13": "2v7Dv71GxRtbiojBHRgNeyMLKFDfnmQcdEGtMX4YqA9hgTZD8KD7iRjCjHSDemXyigFQ2sWGTWMbZoc2JcWNfKjU",
  "key14": "4P2PaU977xSvuuTQcxM5LEPDTwAj5xW3gF4W7n4ZwXbXKWwmdTymB246g1HPVHcb8JQS9WadiLzg59c6Jtqq4rX8",
  "key15": "5Bj86RfuU5V62rt6X4XQ8RUQfnMFkqJeqnfAhnuWGuBcXeqZbkPT3b33KFnDUPFscon6dvkfwQj9xmJuyn5MtcbA",
  "key16": "5nta45xSdfsCdPMmEY2YpTpDu5uk7aiHrT773XYbepGMtAuvg2KuCdBTajGoXh2xjnKFCXrjfps9nn82rLJhHkni",
  "key17": "3x2fjeHTtmurum7kb1xA1HdjMRduFsi5QZd6woCa7sZQc2JktjY4nV1U58FB5cYaCrNMzNyPJbaMtMoE8pRwZB1G",
  "key18": "5nYwisqkB4PKZvXhrqfzx8RsFDYU8U18yQ7jNidjdBw2VGo4bDHiFaYCfRYmX15E89A2oTtAC82fVsWNJoVaQMWe",
  "key19": "5zm8DciBF8KktLnPd3BHEG6tUnZEWyD3zT8bsnqW8tZNeckVZuBH2Vi96hYGUDQGFWh8uhojdem7TFpgJE5Aq7id",
  "key20": "5o6zWN1JbdjdCuqoRAVKYxTyiLKSY7T7n6JiqDkrvrk5MeLJbh7Ex9BNhAEpbyU2yZGtve3ueShCk8CkksZrPQrU",
  "key21": "PYFGZJFgHZKBohZuqHRo7xmoGks3jmLASGM7swTD4iuZGD4BEw8m87yCsFg7LCrVkexSiP33orVQ6cDSNPhzam2",
  "key22": "24iFWq7AENDsEPvFhnbnZKkMzmkYA2USQrYhRezLBfSX5xLeFtcBqPXbu4FHzWL2R3UMqXcpTGDi6D3J4PxSGHcA",
  "key23": "ANEXduyb1eCwhfrsJoxvSXUbxBUyy7W2hc3WUMRCd3jBfUJJ3QiNf3jVWyHXWjkUg6V9Ug1TyyAmhJ2UN7is3HN",
  "key24": "2YEpjAQobc3a5k7Np5yfUuJeXP9bHc3rapQYewNVB9VczaVQG9rjFVV51yaRMmhUQeYPckww7FXa5xq8exesfxWd",
  "key25": "5rvCnYcfbC5cbtjU5i5EV7LVyEBwwJad35zwfczpLuggU9xiB3iddYn9F5LG8TwKQjRb67fi3rb26YGsjkEdCZFr",
  "key26": "4xQcKpFzxwsMNEC2mUgjmwFjgUghBNu7SWyyzEJ83EhsKUR8pnN9jwjxuq5PBxq1jviBnLenAQRTXCWZEoNz6JxA",
  "key27": "3mk4Sqey69CF5hNiPL4fzzSuGtgirru8oYDBg75BU9wmBRAi76M2ZKjm8H8ZTQffFZEL87q15Jc69oMG4jRyVJ2h",
  "key28": "63xjcMWi8tSgzTVCQ3xySPYa1RwTqoFyvtxG9nbtjUEuZy5nD4NBPnEksndonnXBHD6rphWWgfBwceTSqr5LzwvJ",
  "key29": "2QzYfWtm9Wd6e2ZXisr9H4RSr6Wq4JkLh1XcfxtRmeyouJnTMCWSnUvg382akNWfFk4WUpYAcQN3oiBG9MKd3VE5",
  "key30": "5qVty8QJcNnkqQxuKJAr9tcCv7eHBHzvvMsFchrFt2fQLsgG19BiZRNLuFTvxSwFhqJ77vC7pADPdQjVFMMX2ZBa",
  "key31": "4dM1WqEfoW5xLmW8XsRtEkvRSdsW1RzUeCs5P8td3TuQudbWZK7iXX3i94fv4g8T1YJASanm97JMMSN6Ngp9HtbY",
  "key32": "57x8mVGkuQC1qGXWvznVRMXGJ5ZJxcKM4WuVi43fJ74i4EWP4a4tvQJw4UutDYjxKYFkknTFyVW3CgraqzCPXcaE",
  "key33": "3tiqUFJPc15qYkAWmK92DC99FhLtsgFwmxCAd8fFTgdrt1QT53Y3CuE5CT3TvkC2vYNppuVE6fc7t3rPDGtPoHbe",
  "key34": "32R6nZkXpTNknb6kxTh5uy2Askmews6fFF6q4nRZMHKMu5hLVx8cFo2UjXC9AM4bk1C6WJ1XdhKLz5KoTWbNGFx6",
  "key35": "5fcRiuqZvsQ8EGSwQ6Lyt4whsxftStfyYPjxZzfYqK7wAJMd7cXaVvsE3SaG4W6McwPq3cKRo95EivrUyQLiDdpa",
  "key36": "4ETweYbNSmoCNf89b5bVtrCZkYwt8Xt2biSpXfFYgahjnoX195buw7TmE3BsAC5EkaNuURRt8ZWHHRkJ97XMEQkt",
  "key37": "3KtZNCKgQg9Jnm7cQdPensbUtNPxRE2YQaUFGTinArQkZiyDfCbaiqRAsJysd8uM2hjLayu2tzbHx1GyJqSDs2yf",
  "key38": "5tua6TqSoxgXsWisAVBiYvSeh11gQ2zBghbHkCnCSVUjL4VysX6yTUweFFpCu6A7Q7CNRfJDJhR2FnXCWAkeUFr6",
  "key39": "3LhE4gym3ZysWM9Qu2Tr2HnEzm6A8Erx8cEmP42mHzKW6iMd3QNzb636eTn8YmqBB3z35ZfeLy29YEX6zFvS71FS",
  "key40": "sYZVMoJFAwJdjYzK75QAoQt6kNpUjymVuEysTJKzEAYJCgXaWRpxhZUQdSn6LFN6RYVEfAwwyCjcMDs8ho14d7w",
  "key41": "5bxgY8Pm14JJZeena9z83tY4zjNZoCA39abL5jhuVpWvskDtoPtYGn8EiYoEhEmBLVJMVn21NNQN3YP67C97C96A",
  "key42": "5ZRbWDFt357PYcJAUJ8dqce3UnoHyLBtXgdhnmt5fCrKnUmD6KvfRTjqcU1EXhizom2aomZkqgRemMx2TggPQ9fY",
  "key43": "4zNEUWyTG2g61BcADRkw7qnEFxFufCVPJAnC6kqfLCZYqVTA7gd4rMTochBUDy354jesRN6tk9j9c4giRhyYWoy3",
  "key44": "YRiEKKPa2qkkYnzYoCUCUJi3nAXmCY74xkZD8qAC1TZbtmFYsLzjtP248RueQFPVn36Exaz9F8LRs19Rh48SJ3w",
  "key45": "3zziQNAuQ2ejhFgkiz8VFciudC9e7hVRBW3ViVkdDv6LNQ2Lw7g8Hgqvj1GiS8YsSjX5gCfsKo6N14AsDirjQTPr",
  "key46": "24fuHNEp1qMjVJbX3NbAnVTyoK6pjQpNUEbc8tmudMxi77JVo5AXvWeVh3umnTGVgf5eVmycdZsJMiuXSic2akBM",
  "key47": "q9tgg1G8kSNe9VESWr5ZUtnGFvVNSaJwZLAYxcbM8r6oACdudGhyy7E6hEN8iVJ76nYUGvuo7sRxfuuST6XPg7x"
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
