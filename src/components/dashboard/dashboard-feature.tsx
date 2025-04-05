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
    "1kt8EvHq2rPUWxe6x6nnvH5CX1xwBBnJf48gv4Re68HqdzYLVUMDXgKfrXSEUjBemzc5BJntJPWNi3ENACuvtMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKGYjDavuhn66rtVkzszc3HKkGJdCBPzhBEDf48K8muZf3qubeiUHsVi9xehjcNuhdrJYW6xyPEseqiUj8ysEMj",
  "key1": "54JzZpzew2fktMKWqtqsJfYQUZQ8ovhr8oNrstQJy5tyM2Dit2EQaVV7Ecp5hehDTu4AAkAUsD7jiB3GvKLKgvn8",
  "key2": "3T2AzAEiVEfpZwynq1tbkCVQgAN7Vz5kXJFSC88tuDJNepHS4VuAKRzFgxGEyJXkwcNww15JDjers2FVxzMcdBeE",
  "key3": "3uuUfQ3seLwX3tXVkDxjoPCbKAziji68WjLLdXHD6LefJHfsUwdA9ShPFtoHSsFJ7CMgQa1DSCCsgmCd54HCuTwS",
  "key4": "4WRLAh1PaeKcTQgAxciDR8FPUNSwdMsjcSD1Djn5988rmGaLdnLZErGf7HaLddGU35a3opF28gMea8oXaBf38GTR",
  "key5": "4TyQQocLFexk9T3XqXktUzwiG4Bgm3Eg9M3jkkqSQB8BWrfBAyvzMqUeYbB17nJQ7epnMpgogMiQFxctYbWdb7uF",
  "key6": "36FLGzyNbiHvYd6MHy4CmDc7ZhUwTC8G97u2sGGPMBhr8CKgNTGNkUDdmjjGh9oTtMYtBvboBmsJoJ7EWS87Z1Tw",
  "key7": "bj8ZCXCC5V8puYUD5DiWgwjHiSw2HmgGzAQT7KFwNmvd8EPtdwwvZ39w6cjstJCH4XHaz95SmQyoV3ek8gNXarr",
  "key8": "63wTtp2KHUZc9fojArcpoBxfCMZomd8M4NmkPtqKch6ujZ48R6pzT6T8WLo57FTXTzcvXFragRNjkvkmTHUVKnz9",
  "key9": "3Wf9U52vV8SZ1NZTgVMT41BAu6TLDqynC14dZwZvnsSyNxpyWk4kWCPTEG9FLJQmzgJLoayCdqEHzV86tkuygGG2",
  "key10": "437VJGTxLFE3TUJ2jrLxjU3DvxW8wYF3xqKdssEpjHHuoPLX5DqQcQhJGBGyAZZkhymA8PfjzJDbLNV6Ds4aUeQp",
  "key11": "2iuuboiwUSo2MJbzjuWCPgnRFWgprRBgPi5bFesQ3obQb6eYLTEffss5v9XBpSCK3oovy1L1oyS6icwTLndn8wgd",
  "key12": "2KJ2rwWoqhKBTUbAbQt17Z5CQ8G77GK43RiwdHoSAGMZumkjADCXMC2xvryp4dhh3cJo8dz2FCTWUG5WkSAywRuh",
  "key13": "4isjBytQJCzrXx6m9UrhmnJCN7ZkQgdneYL2MPFbzS7BqHb285LE17E63TVGa4QLwhXUjHScP8935LSFEqZfT2Qg",
  "key14": "3n4P7dMZBeUBrJtCxYPz6rCwSHUC1zhrnLMam2QNqXPMjRAjGFwK3wQaF6iSAWNrZrbyCM2qMeRr5xu9MCEdmNQC",
  "key15": "2WHNCAKKitBCcC4y48hgTMkswXp2SP2isfEn9EJcoDfY61nzEChtkToPSp4PgJBtaEuD2Hu7f5dXRqPnJt5fusT5",
  "key16": "3nyD1V5yn45HnRVmX6Sm1kQ2jEqchVgrdAkQPyvr4ENb2vzVJsnpaondQQK1poq6Nk6RNge4VBvBbEE1xR6rC3DA",
  "key17": "3SF3nDqqiMDRmGbtKchj7UdbicWUi5tu6hDb3aXxfB2tdnkjDp2G2Y2NQVC3EHBoEyc3sR2fYuzrD8DbE5EHHUty",
  "key18": "5ZpEJXxozHkmPTtbCXEtWircXJ4NjUu3W2iF1wdeDnM9x3t2ND5Ci8y92CoipHYW9L9ZhsCjy68g6WZ6dfSiR4r7",
  "key19": "2LJcybU84RfbUK7S8KcDv64TCKhPUEZuA91PJwiXp7n8qiABQEjAzePgdNC6oWmnPfTq8WvsTLioGCLzVrSbQ57B",
  "key20": "3NMW9hGnYhZcqQ9CPK8w1w2e8gmFCkRJEonKqgFNUv2texyPBMVDhW6jJAFexvw8SrQ3FJhWhTr5e7MLtZh6HLou",
  "key21": "5CvxV8YBrJhgpQgkoRWnjR58mYS8nzuT8w8zT2aMhY7QxqbotRTJN43myUHoM49UHrNnbyKk8Y1i8jy7186eS1xS",
  "key22": "4k48AjQKi6DDpRgbeZuXVM5oYdbHNK25jENCbanhrqzmhGRYFk7R6ovfd9qbopm81rPHVWs532wYAUHvCdkLjDW9",
  "key23": "4pyy7Xuh2Fp7x1ByYwRZnMgGLEycm8QWAqVDukX2MVnQesbYQMpaxoTTJTaTSisKcJMAhmuyd1M5Stec9SesNSHs",
  "key24": "2X4L3DsyzvBpgacXaCLgg9YHTn7bNvFAXz1nginWdscD1p9ST96qT1FDb7TQzTZWvyrF3N7o3t67MpmZeCHjBq7x",
  "key25": "4wY78XdKFUscaCR9Yp6QStta1iKC4sCDAjZGVmr59Ba6PpvdsKJQT5xPiXKxW8HJFywhNmoYXMWHzQ4x2hn2hiqk",
  "key26": "4HRjrEKFSxkJGegg1j8USaRZTHyFgLCsAdsenRaDzEfqYsb9BCzR7yrPxaDxgdmuYCbbiKrueML2kZbtGErcFZGS",
  "key27": "3XxmAhjzLwk8fVWWooKvUUtT4tSassVgK2hwkMyt2uGEbyU38Qaj76qauo1Fq3SpziH2mF4BH2zA8iWxrUaS73vH",
  "key28": "2QkZfw5376bR91UF17q1K5bzGCfSdagbh2g9SxeuyUTTn23V9DQZXLeahk8r1LrwTbaky32fqSdVGJJ2ruNucRrA",
  "key29": "5Wc2y2ZF1wRpRJRDcdi3AjfBTVekBibrFXFzrMFG8bdQDg74vSpWBzowwNUHLEV9jGuQD8D4tw7mQEaauVzjonaB",
  "key30": "22phz2HPKyNQ9KiWxD6pBoAH2pG6AStBSAw3JgAvDMjYhKBhafKRWKbCs3zYskFo1fFogJf2tNSTxZgkqEg3zKpH",
  "key31": "nxwwCtDwwK59Gp171sH6S1jrRjqgixs9Ub29qpuoeH9bgU66ZuFy58aBnYGCV4XCuCvetz4BKfA3V32fZye32iG",
  "key32": "4pkVd8GSwBRnovRbE33T6q6Jk8AmTf4ipGuCym2WQ9Mr7Kw1QH3aSkuXPpKcp7BxUqLwYzs5L7mgC7u76GGTb9P3",
  "key33": "3fnmb3cZpwNPsS6EGpn7Xa8M4SeZfKhTfZk5vyJy8qvUSn3jWAeonEY2bWj6bEpyZWT3numtfVErJQTnhFo651FJ",
  "key34": "3rnwKBUeRoZUmmZmUzAmygm5cSxXpHGLqbG4asydj1G5ZkVypsBvSLtrY8ZhBtanPJFfB1WaD8rrzyufNAr4xZ92"
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
