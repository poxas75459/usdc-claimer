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
    "27PfMqZwPbmicwAA2V7GVr1PdfdutFnNCZsHdyeSfKUhR4W6SAdtJ4sUNkajJB8tHgGVtoNVE5m2g3HXU59PJfxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNZvH4KLvyGyM7gWXGLkMhn5vLxwG5EPpFezyMvzgE1bcum4yDJcQVHMT1m3wfUt6sfLfiWxBeZ1m3Jz32WPZPb",
  "key1": "VxdfvaZshEkkFD3M3gRz4h8joew9WfdH4jZKQscSvMsJnE2P1wPJ65EqUeKuKLHMcZPN4Hh6SeRdRXFMLfqr6U7",
  "key2": "3Lk47kZXPeMzRzzWUFZ4SoENe1vU5fxArDMSbRAgKbjetysHAm8kVH37vZ83MJq8Msgp5NyLh561hHynhuoqqhuD",
  "key3": "2SzV9STQ1MLrPk3uxNpTKJ4BuGWxDHNosUh32drj6YuzU2HLNrFqBpFDfxnZC7bxAV73fa9v3xQuHVGbwz2nu6P3",
  "key4": "8BSPqrbEQvntgfjhbX2Sq81mUEChrGzo4RJgFh98yL69baRnLrVDKcbRJW8tzRqczzS6qpxc3DjyGuX7rH2WzNH",
  "key5": "4FSjF9BNuSwv6Jw45GeyyZdLtokwNaeXwXm1muaCKw5taqZhAZ7b3TfTwniYpGRFj67NNdjMpSVC7Q5DaDPWB9SH",
  "key6": "5meidJYdz6cNJJR1rKRYEk91uPdRaN9974xZmLJuyto4ocoNZwmMYn2KWALcQaGKxfhSvpKMnDzgi8qS9PHpWrkK",
  "key7": "5BuwMMQf8cfbz27L1gBXXC6PG9tEGdw9pUy1N1tfBsf8MWkGzZp3AUcCZ51sfMwH8EcniSm3WwxRUKramBSxszb",
  "key8": "44pUHeVfM1bA2WYLTfPwkFMy5UdM4mnutrsaPJpC2tr3QKr35bLQriSiTNAdoNH9Spj6drbcWMbNtByqEc62wLVM",
  "key9": "443RqHqtLKtUUUjeiSqX3GmB3bN6vivemZxv8Vf3SxSA8ve42CMssDpBhugVdJV1PHJeGcDyBbEqFLYiSBjopGNR",
  "key10": "3ynomRxnfj5o7L4SM4rYPZqXWn7aJM3mkLabWjqvPKpEUtpMbVdXnxqdfz8ubKpjK7mnKnXpwMDiPkAo9NU7bZZS",
  "key11": "3P2ZyQ9HD9mAV7MYw7Skj1MichDvDt3EwMH8jXE6gYFAocSmZitiXmbyAi9sqdptcRMcfz2kJ7CZr23xAj8g8C6F",
  "key12": "62WMiDbHngQMyQU6mG3HW1hS1TXg2kk4C6LYbVJ9M6yevZJo2ariDQAcughM5kgSdZW5SpYqtpy1WSwaeHCK1WQ6",
  "key13": "LRTuRAi88ZyXC92iuiLzbtAYLJ18DtJTGtobvdNUfLazSa8nuSuuMUfe82fxGeCqmsQRKRNf4djV4d8cStbhJ6g",
  "key14": "49TvQfNiDDG48QGFveeBqkmCCJgwCxgKk6YpfNKo1Ggjx7d3FC72y7CEv5juTymfP1NZ1jJixNkSfz4hdrWj6nGW",
  "key15": "4jDiSqf7qhqYgEUhQ23NjTcPxi7fA9QxAnfQdXssUyZ66qaWekdnV8uzmGBqoR7XpMAPg69ibt9M6rqzMTehZB3k",
  "key16": "65GzHJtgGdM913WffWz7MinnpMY3auNs3p2HsJM4pqaQFpmPsNjqtTKbbyi9pvvffzak4dHZGUN2QjNTDG5ryhEF",
  "key17": "5N7ZDXe9uWnzfuHroeiGHR5ukQYEieoDxkuzT8pCKiGPTETsY4qLAacJWbMkmoFidnqcznj7fWtSuq1p6J7Uq95e",
  "key18": "42xyYfREjeikqqABskaarWinBZSA4gYJ6qqfaTooSNonqFKJ8BqoPmdzPYkpwEigsAntVJfGGXfst6ab47SRJgHY",
  "key19": "yCpCKpCSMrizYjPk3vqoteAxJYXkjMMe2TQ1a6CZy4qfu25jZsT1fcFHW31QkJm3GTWENcxjyUuMCMRGSi3RdZ9",
  "key20": "vqddi4DqxW2qkzECkPFsToBAnf1s7Qse6XcNQEraQsrS1nLg2zqvhBEnT3hWeRJ61D37SBxR66La5AyEPx4Mtn1",
  "key21": "3xFnseTsquhYJLCimhLabY1ELgUFhUSorqaQxKu7gFQcV47ZUTCCnSJQbXoRQUrNReUuQEk72rGcumnSGdBoRenP",
  "key22": "4xVfgWvy6BaxxWCJg6dgt4PSssq8xvxs7MmFZpMb2HJg1i2NcktabxoABFxDCx5CJys3aUpxXjnfmMNyeVhZW4Ao",
  "key23": "3vG6YLBvhKKeyEmNskHgX1AaRwiUCKC4ZUzu9XQEsbNtMA61pRNpErXmCk9T8N648Ybhcrpuicjfa97rSmE6PEjp",
  "key24": "5ZdfSW6pa5ivgtTaEXNX2RaiMhsQLh4qY2f1yetmXxHQq1Q48vmHUgcgEYtEe8AgQEB3psB9jfykoYsF5TdyoXm2",
  "key25": "Jh86LRemxEkY2eYiuYemU2to7trbnat1eNuiEh8V6d2yNZtsnyF62PWqfQiegLDFJTeah4xH5MStw6LtZbXY8xG",
  "key26": "2zCX1CSWMuiyJGm44AYbadQCr2CpsEmuoEgxvJjTV2Mu5xyDdXcn8wavHoMmuMCFaWqWG3D1mqfgjDDTxDf37eki",
  "key27": "2v5m4YA3sgq8wD2kr7kjmk1djrkCd1s72T8dJC2VdEwB7iTM5KsmNzyjCuTXYBiVh7iUxWUicNu2vqpA81MCBhmX",
  "key28": "3x3ACqBJmXhDwsXqzYo85xKiR6Hgr3YET1G2LoNZWCogFePc8AW8qQiNPre66UgSN8D4XQGpEEB9avpeeFSbXkhH",
  "key29": "5CDJ2npFzbscsWu89AnLNBh16FoTiNJPtKDDA1BKuZM9twWahqZLuQxmz9sbaUere5j3w8bsNvzqLyKJWQCtubLV",
  "key30": "25AF3y5ceyC9VwtHqjRYr6RhVwdDhtywuK2LMqBhzEW4SfsDpGhnjJMrbC9NRdNccVjb43rmauuWzk4AGDmE9A8X",
  "key31": "33RMDsrRmWkcCiRxpVHoqHwPrSWjYYVtWDAFzvzrW3M1YXE8KkNdWUXwAFgH6KJbag39tsgJdfWHgcffCs3GcP2h",
  "key32": "4yC6nU3oq9246ZbYS6MaBK4DA5AZzkyPDpuwrivtm9TAdGXSztkR9S9vouusueY9q4fgono4T9D8uEt2d1KRitjz",
  "key33": "4MtzsRx1C4tQc3CWWnteJN94s9tQspK31L4bYHvU6xSzEZ8cbe28S6B5pTq1zCBwjJXu3PTSFAYtLvibg8HoNKyg",
  "key34": "5WGYmy9Sp4cG145aXcnLz8GKPZGnvWDurrrJHBJc3TooDemqr89nVNQ7pJGWGk5q3BATGUxLmZyRqQJbV2oAnpbw",
  "key35": "4YnPZ4mLQaHo7qmh75KyWkxVhhZjodGUZwpB8vj1LSqt98RjV7pENdz7RLutWN5hhxaEgGzpAypFRpb5sMdYCVY1",
  "key36": "4y4gaXXAsx8KfgCycStADiymVUdGTvAEmEA5xzMi2PmgHt9U3L4foaFggjQdYrwLZA9KfYUNiERMxE65DYy4mcTw",
  "key37": "pgGiAMJfwn4MX58c5TcbZJCG7g5TUuyXsXGdS1NMz2ZF3269zDE72FLsgVtGh4qEJjmQrYNey8QvQCdxVBzTRk6",
  "key38": "26JYRkAjqbV9vscPmX5CexQeCoejFsTWdWAyi2jeBMj24WajsFYXiWphg5aSr1Ytdc8FfKjz6dCAsJo4wXvgrBP2",
  "key39": "58zBRcKRxDx1sjm4AB2M1kYLR7BYVxzpDgMMxBcEbjSnwyevjNygrjQifER2WWy9XoAywP2j2LLcXhbwCwuSAYFV",
  "key40": "WSiw5iGZ8MaoC1CQjfWxceTuVFdsxezr8CNhXGqhKGeRTwogX4phkYFMBxqVpQPcvg84trGs3YuMQ3fE5bSPJAd",
  "key41": "2Si1kCNBb9VHyY1JFMpu18xaEsVLxDksxGsEszdwd7c1XtbyMsCUYNk7X1CUWS4V6SXFD8syL7F4GoMK5Hq7HexC",
  "key42": "4ikeiXQq4CsMsHoTffSUWzYAHFhxAiJNjNo1FyQbZTe82pbAHPaSFqzzzQxsegRdgUXcKK1pVTPvkntEGAepj9Gn",
  "key43": "2YitcfmPrRbe6US2vX2LiawZ1CYBhucjqgmvZZ9qry4A2mdG5nyHNBnTZQ4hRWr6fKwrzkvN3kk9Mbui7NzWQatw",
  "key44": "4tFgp2zK7ip3TDHFD4QqRW2QjUJWX5S96Fv1wF197mPPjbVUa56tQhhqHHo8dgttuDo9HkJC2AJj3YQV9ZcRn8xu",
  "key45": "496zkg33rFSRxVAoK7NhDGnTjCg4xNNfPqEG6vfhQAmXnzgZhEMaRNm9HJshu5tw4ymTAWxqWsDLmN1eTrrBST71",
  "key46": "2CgbhiYfX6gmqZKFkHm4xCZGak5FfKdvFUPjXMKJ9WCioFgg1hC3uDEod6a6KTiSZDxiYnfqDaFpnnHWtKmeBu6d"
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
