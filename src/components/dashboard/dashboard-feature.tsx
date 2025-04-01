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
    "4UXdRqBmLBqWHqmegPiGHsPzJkGnSzy8Auo3hkWYzVyxQnPkue1EnoaLwEq25NUppsKCQ8MaF1JzkHVerzVL8gdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HMfueJn1CBwzbZxqGmGuYVCAnXtkh31zFYFezmpi2kGC8KFgd7gxqYL9FQo8ibLjinXRHDj7UaDV8mbKSB71x9x",
  "key1": "2Qp5XTsmQF8UUozd3GzJ8e3Mzq2EWGej5QYDFP9YHF4pgLUKRwbgHAGm41RMP29ctUyJ9Wh5zNmeVgPPNjMHam2b",
  "key2": "24u3RhZ72F5E1DueDCEDPnezQ6TmJdvtMBXMitpDisSfThzjMMAqXq8UjZ2VFa9QYEp4cCjLuDXm2wMhtq7Yz1DQ",
  "key3": "5UwnbwFZ96VtEXefUcW6iQMHfLAXFBT1LzueSH427xZTan1UN7AsrCFNhLBvq36xmFC2MGpBh3YqNhk3G4jTcb2Q",
  "key4": "3qHPV1nx14F1QBFnQCaFFm7FUwyzZvZwCZqVyw1vY8JNHdDcLhjiYU25sbbrwtcZh65s2RGDV8r2jUJBB6hpP1b5",
  "key5": "3YGsbV7w8mYFG2oTy79rVuaGMacn5m5C7HUMiJZYg2VJSeKV1c7BrJ3S1F5Fj8oRR8vBU1EWyjY7PFJMbzMid9ve",
  "key6": "4hdwS3Vp325JyyvFQUP3no5tep4dz3n74Q4h4JXPKxECFerm91EvFvoyMFpR8kmfbvWq4UHNv6WkjKDviTiwRaDc",
  "key7": "2o6hLM336oVDRm8DYpRVGXFooLnpKUynKBqZyeFCBDeUVnczbA6hiqxmwvbSZK2CcU9MPXQm1qkAPdYMS7TfXLR8",
  "key8": "33NGB5tHsoF4bZQkwMye1RHRDrYg7ikEv1eWjLbaRmeaSGimHeGE1vjb2SzV5C9ZKsxyhT4fPSgxoMqQ8MZ4d3Y7",
  "key9": "3Uj4uNho89DvkrhDM4huNGEk7JY6cpGMNMTvuGnEnBX68MhoG1TDcYCtZGGAEAuqjTRrDbDD4gwzBKkHL978TeDa",
  "key10": "44tSXwP6LhBqvUtzKWQ3ADWg56SFGWyA5bYPBfVF9qEMhugmCVYHjR7uDA3FoaBVnx59CjkZZtmPrGyziXDZYhtR",
  "key11": "yAiTxbG4LgxBnwMYsjquiu3njLKQW98QRkjNNso4KSJdeFAt3KaYVGGAEiH2n8tpTEXM3fWGRY7WWgbWxZahbVx",
  "key12": "4bT62z9GbZWqPJQXJQgGrRpfoFSbCxKzZTdoWGR4sebW2H9n77zrAAPY4nXQhqgGuPZar1Ys6MHSDdW7wHLrUtA2",
  "key13": "BmgNSnrN2RGCvDbkMrJUL3JGgzXuixDfNvurv7M4hWLsh8wWgbDjjjHno7adPDW5e68uG7FS3X2xTf8n9UeE7Ga",
  "key14": "4o45vmidRBiQyj8uNCNN57pG7hvqeZvxCkhcYhEkeXHpu2drr1zRGrAUVjhq68Jzy1QRFxqNFxFtn3xSDoggRhNe",
  "key15": "5axxhVGskgVocayfNkZ7PEEcUxem8upgoNrKSBNpeFa7wJtFfw2rdNhqvhL3ssPmrcfM1e5wypTYoTUNJLQxfBwF",
  "key16": "1xGWkVdT8294brr5KabKVpEiJKzYYMt545dGFwsWMVCcWcUPEeymgPcBS4HUCTHBWJNFtBsVnKT8ko7sikDAVd2",
  "key17": "voaMTCdYGHFip7tez1fjZKKBUFPf1q2NogeSN6Pf9v6Pq94kSBZUuheWGyLnZ9ju8n9BFxtULiwAJfM6rzBSV7E",
  "key18": "4dcRf1MaCkPM2qqjGmv6SZQuB3EbQfdMkaUqjGy4m6HbYr4h8KEo6LcRVjVq26qC86WTa8u678P4zwHuYN5EXmV2",
  "key19": "2UuEz2dM9NJNFCUqf64EDbCYbhf3HotKX62eTCWN23e6EgF8nCytCBF99PnkeLty7cvJ7cP2jSeZQVBWHXzdMCzB",
  "key20": "3utskQU35F8isnaAsagmpj57DhFELPGo9VTXxtCYE9cQEHdvYnZyVie4GRZWSBqV5ehrYzR9KSc2sLctGysT4qrv",
  "key21": "CFr4xHoaT8o4Y8fyZtSCDGiEyPmCeZQLg4Jno9yrcY6F795x3dduid9GMnT8e6CaBRnxq8xeA3L3Qre7aiwEuZ5",
  "key22": "4cqHg67axfgoGrJkxrRqhif2GY8ozJ2fxuXrD68AEz4qNSrLYjhe1R7kBJvCrR54DDJH1yhmZfhv6xNhaKq3NKWK",
  "key23": "su2L264sFWusUGmjg1Cfk3yt5bhPFkwdDachDzCnadmGV7xgPBG9TpQ9XFvE4e5saqbwd1DhXbMk4EfHuPLdz6g",
  "key24": "2ZLiS1WRNtjgtv4AZyA9Gov68UEZWn3pWSXooEJFDgSL7nnujaZ5gpk5BCTQVzryv6HSccurqj4zv7arNAqrn6QD",
  "key25": "3GDpQiRGQKDQWhJ7nHGbA7wRum9B25imAy1eLWxFmMojZfaZa38aWY5C4Sze4udNRHZH1JYjAvfcENd6ZQSMgDk5",
  "key26": "FtirE5odLBF8wVaEnciVpNTMRnbaWPkeX8PJu9d5kotff6WDnm8Cb3S7xBa8ZjNBr6Qbnj3YzBvdhQJsBy7RZvc",
  "key27": "2TFBrPnHZt6Rxv8LYn7mDzCDEcpctdGLrVSN7pipHDHveXWjjaabiXZ1EAVXFDCp2eYutvzHttJDUiqa7T2TgJLa",
  "key28": "ZWSqqrAS6JVaPjRKfZAN19fJ3ycHMkhfrJGqNjG99f7rv7QqWggFu9sYWZtgHtYMKRdMTLmS62UC7WetUvg4CRr",
  "key29": "55SX1EyVQmatWuPQFkGcxjydwTUHvUgSh8jF5YGd3DNnaMjscF3Sq1Ugc3apfCUTTmFdELpA7L2fqwFJ7mqT5LjJ",
  "key30": "4j8qM2XgikEim6Xs1NZRnKyDD35K3oz37xARVDYEWg1oxDkodK4EvDWTnNEVJYRVarRJ6FkJ98fqEd6BwP8V4ZWi",
  "key31": "3QX7nwhavt1EW1gty3QuRr2KSdov52wHJsLPQRKAqXAKNLRXsczA8CgzWqeDGk5F2KHz6uUWqhHMkxcpGMbwGbqu",
  "key32": "28eZ2MHFQGN1t7mXTvdhH7s9qzgJJECjTGNmnddfTJ44AQ8gcJYtEW53uviPiiBzGJMGuNk8Se3S6dA1cFrAQK9V",
  "key33": "3AVfFr8rrho2K2YDiwg7TnkhsD4Noqh4jmVtggpY32e9azvytg1chuunsnRqfQfijc4qDLqtv1fBBiibTn25fbAc",
  "key34": "5wivn2skyfx3dbLkny6qxKR8FCzhFAfWXW3XduzvVDzYroxTt6EjWayKzSJfMwmTEidFvd4gvxq67Rrmht4NdNvt",
  "key35": "353Loy9e9jNdataENJ2W8fFggq32Qe5kVHtd5ZYY6Ea5JkL7WeakvrrrzzLALD1DGQfAQimb8yf495nmq22gAX34",
  "key36": "RqSyb6KoHo5rSSbnG4cAUWBHgQbRV2mwUKyV3DKtEWycJWEynj2FtSdddAVkrZV7JLou2WLZzQytogNMXqJWrxR"
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
