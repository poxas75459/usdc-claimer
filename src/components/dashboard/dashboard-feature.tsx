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
    "42m388R4vjHzaW1nLrUE8DntF2VCzd476jhtx3yT6c5GVD6tyiEH9SAeYUALMETU5XfLgZyZwPJ1AJj72AGLTb2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgMe3Z1xgNzSLZQ7PyzGG1P2GNNSYYm83rkVdvSPKrzD5c2rmyfg5g4sYpXDaDiDUibjJ1aq3SiMqgSFQWWbA4m",
  "key1": "3LWUb2m67MfmZcqacXh98Nrb7SMdZkYkxHhRLvYzZLQqM1k4JHewGf4EGfdhyCzTE7hT3hLsfVtTvfwZ5epTw9LT",
  "key2": "63SqE5tDzjP3rNR2QnDtRuoQujQPWAX7PrXGH1gitz8wk68TgyVBA4BYyAE51oAEcwe8U9j7FZ5UHMgGLFAnpTFD",
  "key3": "2BUcdBnQi6QZhc3isSVx7ogaLzEEupfgDXFBr7yPTsMxeo1QTBeQkFv1yxHJpUrh3DLVsp8XkYxuq3YurN55NmUx",
  "key4": "2ZBJjfoGYiwfD4UBnifPWbhHeW5L8D8Mp2pQ1yiGbg4ctYiiHuG2aYdZkv3yLd78AMCKqZTvpa7PHZGP8VuezkEr",
  "key5": "3osyVM5aqc2UEiKMDQPVfh19okTz33vQ5gCfsJvcbrnejnKMXanBDFP4Jg5CU6yRE2Ss7wyGk9wJWxjeoWVyvCiU",
  "key6": "5KCSdvFYcw8ZvEAP2fTn3psFqthhnRQAyoUJjh1ZRK64D2YzvocwrktXjDzQEy1pH8B438eyqp6C31LFdrzGWcJd",
  "key7": "4UXhkTrL6Sv7uzKY3pCtzfyGDqTwEM5PjS14jFhyN81NatMCkaTKyuLRSD1gCQfmAjLDjiJwLUwob8j36syHkb1Q",
  "key8": "5RdfpEFamhiAhX3rbFhZyYXigdRG5Qd3pAivdy5adjPjZ6T1w9y2Dsnr1A6cN3feaMH6EG3eBvXgudeU3tjx3Txt",
  "key9": "4EqWRVGQLQMLbWmgZbyKSvjE5ATGFokGvbqpu2z8Azy7EsULLf3uM8E9jPnWD4DdJqDcj6FZm6FWUpXA5ohEMCD",
  "key10": "5yC2reuY5P5tS9nBSMkgkDu87sWiN6HLbbyNPEe2Qzoty9QLX9o95YRrFWnD96FFeimj7cGnM8NR84qjrGkudKEz",
  "key11": "2daAAppRW45DCpZkHyhENpkaYN14rvAQtVnzgkLY8yNVZQmhN8QdgDLr41xkpWXvvqgYJzuEV8YQWUxbM1ffRTKi",
  "key12": "3YBZgxVV6wRQJHyE2pUygTvaCugvwaxcVxxowGAQtXoX1i6X1Ndzqyc4cUe1XnMhK4PEn6LKAdi671Wk1XDpYzRs",
  "key13": "83USSnbNLGrGEF5fB3D2PKZvGNH4UDdXckdQ3u5k25VZtN9nmY37pBZLERDPMcUzDEvLXfrvUxv4zyScGsFboZ7",
  "key14": "3HYWkPwwfZGocTxv5WywTuFswKTMXKt5TJL33TU2o9JF7ehovRhnjgL3fEfqRQLqkux41vLoqEfpzqU6r3HcTCp8",
  "key15": "2e2mXdy8pAAnY37Xc3Ag8DK8t1i7q95mFhW3oumgnmA6q8pSChFC4r6YDTQQ1F5owvX1pmnCkJobbWz3kAALzpB8",
  "key16": "3CYsSmU2hRdAYHA5SDsxLwNtGCr8muA1FM1pyTMg9Jc2JaAXTr47U2N8d7XaqqR4ECrE1Qo63fAEspxsFFcDU6Y5",
  "key17": "VdMMKyKL7KLQyqxHi2Gzo978cPE7fxznHpBLWW5fVfgM3oSMZrG3Koc7QjLn9u7WwrteFBZaDYwtN6FWSjbs3JH",
  "key18": "4TCg8vSwb4yP3QoULQBTkNyPZiX6TU5NrBXGDBAzMdzBovzej5BWbg5r5X68x4K8CudTmeHMHkVKaokA28MzdKcp",
  "key19": "4m3HM7i1oHAFengb7XRtdbVfqT8kH4RmAqRQAiE4fTt7oNruQokSqYaWETXKGaBB9JXjrq431FjLhg8V24yDpj7r",
  "key20": "5QHHi4bcUfkzeXVBY6LW5dzqGM6yMMYFyHMty5XHAu19gCS32gkavTqHz2VxDeyF5akkHWkfo8aRE1QiotGHU7Xa",
  "key21": "4NXapbs4YqV6bNNugBxhNyEmprKHqebSVEf7v6BY1tZyLCGp29A2vwCUo3eaD4PkgVeVmrJiQ6zccVvUSRLsNZnt",
  "key22": "4vMmDghX3w2HMiyqSLKwW7YozVWnDb3ycNh6sYGV256SqsJAVFUStyo8mnDLh5BgEGtebJ3FYhW1WLGgSYZn3F2L",
  "key23": "64SCxyDFZwFRKSC1nqvJVCBV1fwy2YALyvCtLWiSzUY6bz74Q1WWdcyP7i1wWR6ADFbN4P2cdmTHSS8dXukk5yPU",
  "key24": "5rVFK3YL6hMeCDNnTQfafXTVfegA12swkVn8QMwdCkgvqqAdvLCPc2yRejri61TqxQVKvsbqMhbfYWX7seBcQEsi",
  "key25": "5poUbctA9QdNBdrvwgHkSajjwpKJc2VAXvVdxsggR14CRABDGMQi3CY8j89f7qfnLDrb6vc6e8k3mYQrsrj7262x",
  "key26": "61mM99GqE48cF6xCV4xQMXw5AxL8fjTp8Z2iN7yCGh4uUCWzKJWk723jDrFKeuKgMh1GNZPN7xo9xdPziefFPewp",
  "key27": "6saw4nMMN4hpT8HUVhKBokNpfJuN4bViE3FPfk5TQDXSGtqD3v6n2TeHqMCcdfS6G4m4mUHTdRGtvpqwhPLV4NK",
  "key28": "i2JjthTxt3QHx8sPDWRX9N49Nbgqc2TkPVdSmKDquR4FBczgGTaDYxdzh5Vr3kipLfymsrJ5CD8r8GJR5TFb8EE",
  "key29": "2VdEZkHxYnKDKqRPaD2nWG33wddmUECTjvYZdffb7aVqhA48Q7seMTaYSnssj27ijgyd6AYiFBT9waZ6KkicjCWd",
  "key30": "5x6d41ukGuhhhtARQNEbH22RvEJXDjSBkhhSwCeKfQV688crLPYncrLDLLpZkEoMFB5cPfkM8xHJSEoBZxfrbfNG",
  "key31": "5z4Fq9T6njJJueieudNbNotmB1UqJtuDoRa1v93WHABinnjKBJBkbvYRSbTEgykcvp7cQaZ44NEsq6gkMtL8uhWc",
  "key32": "5iRWMeNdYnXw1hduEKktLGLXCFejkibzmC46U76ECZiSvESQng7nudWEhnUxGhvGnZAtUjLxEW36VBBR9QKcpjxP"
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
