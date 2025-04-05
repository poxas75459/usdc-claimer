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
    "31PR2ifECJHPLeGTTG1BtoEpEP2Cob7T4nFjegCPcjNFvgwSTzEu2wvgdQquJfFQWQhjLCrmNjcwDgg9zYGwpWVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYBQjJWoW2Db5uJMNi8Htarhb6pjVkAfLiYpjHSKRpdXiGw5jECTwhV5VskdioSb4YVByKXRtXgCCL2KPiAponB",
  "key1": "4fpQqygf4MikKYHZkimGqiQ4UJMRKfgWBQqcTCmsbSBfkYXkpu7DvZQVNGiGBVvirSqDSgUHwgEy5UVwW4wzm5Pc",
  "key2": "EPQoGhC8mUZy4XqJns3WfZUztBtKdirdhNFxnmpN3E5jNZ4DAqS3jxbe98wuS2GZfspNjAtjV1JTJcuTaGeBWw8",
  "key3": "2FAd7w83zvaCc9qkrnizkLqag1hDGAxLVWyVyjz4g9XYSVshJG8NmXizeZoNthaMByAddSDC6JAAgPNiYNBGnWqr",
  "key4": "2i5kiH3y6MrvqntmkPGQgpJs52Zed78ueBVK3fveYA6WsmPSM3eeh8gLwUcE5KeXscGyMbyJSs3dJaNcTa8EKmKM",
  "key5": "5jEw2bWeEKJDmkydH7XLmaNZNyr9pBpjEBEv6GCom6CpbeYfuV4bQtEWd5BuyBbDbMM3L3YjTygZtuoFNc6LgarD",
  "key6": "5WVPBNtjqQysy2qBrzZXpQdsXnBphZZ7cokfPAj6k2gRJwNcdeY7PQfz3CqUR9Qjk61yBfgob1cPpMStFD1YLTe5",
  "key7": "5GnG981supdfhCdR8SR3JbPFetH1qsCW71pNXz1xKvzarwZ2hPuwjd9wSV2azNgoVP4CRd6XM3uzHHra7uzJfjXv",
  "key8": "2dNkJKnSPDGaW8vQBGCVQgEVJCQnewghwVBZRsBCEKRDgxTgacDPmWRHNCL6evH6VT5ki2i5aPM7j45wb8fc9eVd",
  "key9": "wSUukfyLcXtBoPWimXXxhhumdDLo3ML3HTEBKzf2JGhqr3tVWqvouStPoPYNP91KvUiitP9uKZvr2LyZts2yZak",
  "key10": "2ma9URVoiASxnpm2frAVNAPwuRqhPCj5mywa764CR1ZBaMqTLAnBQfGMBCDToe3xBxhAVriapTMoZ4oVumqq5k3G",
  "key11": "b2jrQy3JvfZ6DAf5FA97JFBVg3H33jYjMT93xX9nEqK3BbB1QWbhcxJw2JLGch1ULcu5PYDpMfDmM6SE4V4W7nE",
  "key12": "TwM2wX44t63R5xdEbNdYXYxJSGUmsK9ds6VAhGYbPvpiG9Eh8v9AeR4mqRJoYEENTh9q9ij9nZZSXWB5J8UVCdp",
  "key13": "2DginNVwyjqyWkBeSkMEbPXfkh5AC4RogDB1g7e9mghwziuTYEwPaWgEnaKdAXT6NugfsGjFZznr5ezWTBih6B3L",
  "key14": "2ZGuRTnrBzWdHntPXHyTSTZujcxk8W7XLn9nczg9cANqj9kxZTEJmB1UcbgVEmi3M4LqLJVbr1jc2Stu6M7Czzsi",
  "key15": "5pZxRDjBrzYLyFdeAGpHMfsZUYu4WotJAdwms5Scc3XvAbQ8MoQenL74kmytksTXaio9fzAjkWgvjZyvCFTzD3e3",
  "key16": "5JChACHqBXux8phXcfqMwGZN6BGLzr7rAYsVetdszWSG5WcaEFrALzJY8Lu5BPCkaSJbEW8hUCp4HxqmcSWWwsPW",
  "key17": "27QE9TMgfFeJc1QoimyLVfxLoLpQEUhssmp3LdsYfByr1DaTXncZ8zxVh4qh6LKno9MjPDxMT2KccmENPttLcyA8",
  "key18": "77Uz21jWL6jJs7czKCX26S5HhS8rPmdxw75oST9niJ66QimSWGc1YP3XJbJYtDtbJKsmdj9nfSxYyD5UkPGfjPr",
  "key19": "51q4uqQoN5P47XFBBnhs7DMRn7A9Q9a31cLx2JDqtw3qyJ1xzFQYEKiJ1Q2T83LeiZ9tMF5wmz4e8EYuS6p2ze8S",
  "key20": "4gmddWKyVSPAwRsWA9UR9snMKcQM7opC7R4ksVPGMis9HPu2hnnoJd2WAxwucnjtUFCktWzTWguRPo4eg3LcU9BJ",
  "key21": "kFiGvmx9tcuBbc9Ln5apKMamsTXfrTwux3utGEbTr6xVhkfAcWB9Jh1ggbdhn6Ec6mETRULMYmb7w5Bkdy4EqWr",
  "key22": "5e2PAvoqf5VW5qsGY7MhLasHWrsQbVBWkbwtNsBF2fR1gFgqLhqevrqYJfsyLxzGWiDw3KZNNgsCXuuMr9ZUhkup",
  "key23": "2ygr52F8a3XnrtGqKkuuyxDqehWxCYuk2SXGmQgYr4btz6Ytyh1EnYUYWBYxo6BhGPr6aLgdjf6NbobJaESYx42d",
  "key24": "2ZBQohPAy3zfLuVdks1Bh5EQe7zkYxS33PVjzEsn76gGfU8BZitbsptHpCbC4akrSryfDMLSBoyBNkUPKWtyfG9",
  "key25": "66GfwNBeGZcLScvQUu28VPvDwkXpifuGCWCdRa9ZfwAd8i8jR8yrwjxLBsy5KWVyXFamcoEsVHz5dtsWUpQ1n2KB",
  "key26": "3bbVN4RZVwSU6bmTerocyKuHrG1ywNVLrudXPaxywAVSz3DA6gFeKhfm1PCKK6KrfPwudtyvZw5iYVtQkwW9cYf9",
  "key27": "438KHBBpTK8dJg2BPWnmgExHZqoGr3CR7YJ28pjTLsDuVYYgwbXjEr1LoHRvsymuZcZLs3GFcNfu8pzsWfs4kP7T",
  "key28": "uFtS56qoEtDgMpvrgdnHqDjwiA1AeZm7fZscQmdwC9ZkG4LLreoM56c9SXqeDWpd7TCMF7Nh7KZPQZS3RB4dq27",
  "key29": "KeNPXGCR3ih4VF7u1d2EX4cniMNg3ouHwbjbRX4bNp5H28J55efMTuByU8kthF5q3dd6o1bXZAMpQFZhUh6gUby",
  "key30": "4oyRXpYgc4k8ypjM3mJrj3JpFKM7XdTjU4m1tMCDfdXTasNZRFtKpmwKNZMpUo9tNxgPoxAWNoi8JnLwirfrz4BC",
  "key31": "5Jb88Tu5SgDBffJM26g6HikJdERt4BscSuALBbN9d7biKEAhkZcX58KpYyXSUyuNCbpryCqHYtKXsQY3BFsNUpXu",
  "key32": "5mtYS7PcFetePKHayEmG8WrExJabSahcfbbWgFjduNNKLwnkMeXNnFQ6wvpS7ZJXp8gEbY1CBecLctCpP3xZqHNA",
  "key33": "51Sauo3hSQMMV7mtzmbqcjByYwZWdJKuCUqtUyPb1JopK3Gu1c6KTRt9XHxHiHKrhBV7SjQQ9vNqJCGtE2Qv6V4k",
  "key34": "5kPQU9TVBs9F82pqorMeiknAjBsNjK2QqD8QrFahb6XVUnpmktxarN5c3yWn7zVXXmDDACpGZTdyJRjFFPEkw9R1",
  "key35": "5ez5WnY6xJrx5BpPpAgmyzGyHAZDuCX5mnFTpUKrHHttjBAsEG6UoeYkt7BRnjT8Vav4fn5HcmyP2DKKmKh1g7gu",
  "key36": "E6yLVJg5Y2sZEXe8ct8sTNXd7dgxAA5z14Gr3Yts4R1Ee7UkKLayMjRtvEKHjRRu5tkagJ6gfx1vwt63QK8sUzB",
  "key37": "4yKAtetoyA98cLfcpCe8UpHa3zgxwMN9qh37eutH9APPMQ4b33F24tNvosJw8LQSf9Esi55Ym5DPN7VzfxqHpct4",
  "key38": "57xQrZvr35vNnsneJVvcJ5WBUQL2jpMXhsKXfHP6QfsbRFRkVzcFHK3nSvT7J79M9bVSZSY3T4fGFAeyyTWL7JpF",
  "key39": "29FqfsCt3Bgkw3ZmRWk3vAKoB5vMKwALAjtB7gCaGqLbG1Nx8eNBcxCzfRqgGDmpGbD7Wy2gCMUWL6EZGULe74J3",
  "key40": "CjuhdUeYz4mJVKk61sEEJQoWyzNtQgEotdDXEFFGS1deWULCPj4UUkv3xmPW3FJeRKT8qKHsr7aEcndA43dko6H",
  "key41": "26jYNUtdnGv5Y7XuAmvpkFzoDxwPKyhPBhKMJxy8orNT3Qx8zYC6QjobhScCMEecVxxU73755PU7CZYD4WuFuKJN",
  "key42": "5czCH6P3wm2LWp1eXpbaKuDUC7aURMRBt3qoWKa3dGUxCw2heue9PBCMrztCed27j9bNE1b9A8ypkWfAHrFoguVp",
  "key43": "3bnA9ohu5hUwXsHgFHRxC84wqZ8pDrFMGk9i3BmD2he4Amy5UQyBE8mAxK6J47eauQ236Q5ctZsqhkMc46MLzbM3"
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
