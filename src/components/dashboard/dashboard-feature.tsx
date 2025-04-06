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
    "3MsP4LqRtq94jEzPwK76Kqvs5uanhd1A8SjULF9Dw3Vg2yuGbkyphCciBTTZMywUt2w5XgVftq8JuY5kf6xTy9aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxxFMHnHCz7yzdMwrF3PcxxTCmrvscxC23UYdBKUkEkCyNwJvyQp2ipo2uU1ChKso3Ko1axXnJXtfngNnitYZ2H",
  "key1": "34ZeCkJXMgQaCLewaBkE5AtrJyR5fuW1rC7WHF8mSxA1dzBwf5eMztuRUTGLuA2BHmESnEdVTKeP91dKWstag8i1",
  "key2": "3tN1ykRMdgcSn7Rju2pqRGpEB9LX8Xs5o2ttjcJvQSPmY6zjFtno9F9onMMNZ8uHgzBCUsexGAEHwdVDZKNenDpL",
  "key3": "3Y2n7ormzsT5Gd5KR2YiUd5FZgJ5bDzKFTgd39KvPVRBNKgGPbqmQNCDSYvW7UTkG2hrAKPZGh2Y3oiWurvvi4un",
  "key4": "5y7BJgVn92KoMd92bJ8GjNcSyawjUCF8V2s2r6TrBUFkuZYFwyk1wtLsfNQwsRBEKWVGdochveg4dKXHfgzvcgSG",
  "key5": "5LzVBRRpdduKZmyB8BHuhGQkm1sqxRPXpXeBogLAvAKrry1Gbf35f26jkD7atp9rnuUd1Hxt9viFPA2X3S2Cgkmf",
  "key6": "2jCwv3kL4KshH1fsLWAgMFVZh7A72L38NN7EYtmXRNWjtaM5SnV77tSTxAzvBJUrW2kTmpZQwhN3VXt6SHM4fG6z",
  "key7": "2KiBx6oYYFpLnkS5JuY3BNWfkiZwtkR4pvdPgytk21UPvjNCS6GWXLoiH3JyJ6v6DHqUG4aorygR31LC6HD55Zpj",
  "key8": "3ax2byLQFSDUoEE9zY4Jf2cHCzEBKj7dcxr9xwELuuMa3p47ZtWqWwjjocLP9yrFyTGhxGRUyM1pgfxkcxNW6YhC",
  "key9": "3R21tSxau8tubT79EPQh5CtyQRsKLGtM2F6rxPpeY3ysBB47DMQLgze358SfyfDWqih4SXo2GFZptBA7pX3Wvpfm",
  "key10": "4hz9VSv1d9q1TfzEMLLFwaXSqUJdMpqGcTPswJ6dX6xn3kcNUnxqfbr5FQfhbpKDubBJYHUpYpXy8piA4LDEuU2d",
  "key11": "wgPg5B3fELZ6JfEdo5cXcXuPNF69sTp4ZqJUoiHGVrvDMaJXideXrvYwJ5n3Ndm3uQ48Q36iBmUe4FH2cQnsxER",
  "key12": "2KhHugCFcthtC8gXb16dNm8MQepEcdaz8AtAGzcctLKRhCswCHagRp5eB68o6DbPQBuKy5VY2GtLVsFTJZDRSz3g",
  "key13": "5S92PxViTgC4qzBz9QeMyxcshZPT112qkkJGCZeqNF6ndBVPGyhVCkoNmFXgrUzBQh9GCLPL3ETZoexfNFCEA2gx",
  "key14": "BNtjDhN898d79QXRet9UNmnT7wNxNaVoLwsmTrQF2sQNRGZWnsoigZ6VFGwa4i26DWAd668s7oSXuCci2VuzHVH",
  "key15": "46hyT8tSTfEhU96XKbUbe4r4h2cwMB6dVSEYyHwRYt2XhhaZBBgQtjsW6zpHbwU7x8woe9txJhTfftpPFVW3XPRQ",
  "key16": "3LuJZUSBtHCGvKoWmyHeqPYX4K1pK5mRrU6p1zZR4LSnzMzShZZWyHE18KL2QAVeX3VqR3y3GqJ1D9j9SjXDAHmv",
  "key17": "5q2oumdsfVzf2w8B75W2XSRpUxsCvMfhP6FKqizyigJQ1FD8XMpt72xyeMhJ3Kd8rjQqeJfB9dz87c1xFJueTmDF",
  "key18": "3mQxaZ2kUheHkdbadzdbzE6GyvceMdEoBfD9oKgxZF4tg9RdqNesbQha9t7WeNMmDMcgcqMVkLt4efSXipVVNyd7",
  "key19": "2wrS8P6Cy2MhZyghRBZxuqU3QYrQQfwGxH3YpubWuP6cYMrTbuzCQ1KGVixQe8KQ2iaHF3QV8qbUGwW3ZQ188mPZ",
  "key20": "2VB29wa6hSsptEe45ULMrZqcUkwzc6j1NrLwP6Fkex6VxX3RsPyv6ms3hc1MbUqBm962AU1HAFuFumdZUV1nM2F5",
  "key21": "JV8B9hgRZrLvP3kWf8JHTHH4zrjqKGY6ExDUhGQGgbJX3w4dtPGprSwiZ5dfD8B78JSPJJteN5gZrXn3t7qSgnq",
  "key22": "4tN4uHz6YYvKNBzWxZmMPgmmFFyVkDM51kXdkA99jv1ZTGLk5nCeS9u96swYUJXc3C4e4WLwzJyMEvsS1F29b9ae",
  "key23": "5H6k6iZKhVFcYqEqTaJpxcgX3vfpFA8TnBdHFC645BYrdhwARVFVPngTH6qBTFA2caWXYG3wSov2rY3k3Rct27U8",
  "key24": "28hTLBLfbXo2FU5GqeF5cV7T4p5bFxYUV9RURSFxRx8KUsBSaa7HgMZUgiq6W9rGtLNAaS8gadECaowhNnegsrPz",
  "key25": "5RjHwqKJo54s9u2rmcz2WHdLYxuP2AyxwbzRaNbeaSPBtC98CSt65X7i1t3R5UxiUTn2JTw6bVLzM7SCgUCCRKRZ",
  "key26": "24DdjfTUGr4T6nGx7Ers9Ms76oNgi76b1zeLZCAeww8r6p2DKLSwbnzWFM44w8n69FwEzYsMrUB24Bn3YmSBcnTi",
  "key27": "4H6DHAKp5AvxxVTCYXmZCBr2jmTiwTenLhGPAWJGE2pmfNkxAsgTDwd3RcTEdkmDhn2FtxHwfmpeZuUknJfXKoe6",
  "key28": "3HuvPoW1cUurb7rs8ENc5j6S36N8jFPnmCkPeESzskcKfZqY16dRRpom9zfkXdG5EzHrrmVS6mwnDvzcuzHSvSzB",
  "key29": "4FfW1yNPaXRgYJYDbrqU7EKGqyx56uGxqdCG5jcfTDQ8Xs3uHSWfaGnTtaR8E6V8hgNXqzNSPsWBoXep3Y8uWfDz",
  "key30": "4rCsifFhTfY4fFm5j7r2hTY26UaVdHVmo4sGRj8PmyjrpTXSPr8h5bM8yeEWB7eDi4in7895z1wWWjgsCSEfWgG7",
  "key31": "VrYiKWahi9yZVgFbF8RZUgv9SNaCpoNNjPjD9QjWkBBuw4uNNyWVfXDhfamVKdpobifcBLc311rSEYE4UAAAgZP",
  "key32": "2kc9zNHb5pDCsHP1RJubgUwZP9hb91zazAKy9CWTtcNzbHMmag3mRa8RFVJ2qjVSaHbbMv9zi7QbyNQphDjzy8Zc",
  "key33": "4aYfbJ5g5gCMXevaaLpZ41dE2c8K8J33mSHo2g3jKifhynbUA73ob7LizRvBDUKQFyc5cW7og3VYpN1HXWS1htqW",
  "key34": "3YC8nM7dWXYJ5RqaKHD8gGQ14pnMENcasj2k3A3fjdJ7YLFX5Q5yc1B9gEzxdVxaGgb8j3KAfmgogKebFd14hxVU",
  "key35": "5ZLjARc6quwadDYTQyKubfnPk5GcyQjVuBvH2XsEmPwDDSsuw5fXWthnQAyymH1iMzB3gipkNtuXNpjTw2RztkAM",
  "key36": "5CfRjUfKoMyKD647Z4PvDVhqnTaCaiNMnY7L53E9rPnGmuJus2z7GKdksXzEJ175dtH7MUyPNC5UzXSzTq92jFb8",
  "key37": "4cFSSggNuCgayJFveCcZE5VJpGw2XRVed9M4zMVnRWJLWF6UKQ2pyhiXhFdXSCDc3RhR5ByCc2SP8XU8LBf86j1s",
  "key38": "4MzLngk78nfYsLwKcg8wjt1zogPcxWxQkfxwUd7dsW3yvHwQgjKAKBQArWYjw1su2V49f7mmQBuBMLVRPicmb3g4",
  "key39": "3R5vCBN7j7Cz6fdrw41yjT7QzfotxaUK4Wxe1x2b79GtJWQdo5AUzYvpWo5dmUrXne8p8FKBcqkxUWMedud6j1fx"
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
