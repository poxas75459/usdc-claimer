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
    "4mgPjgmXngcYxALU8Kauw4TNGveB5KwXnesFirUiAmXN5NRK8iiGqgFiZM9bVfRacWJzGX4gLs1RZX2SceH4h276"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcSa8Fif7Eg8endbtDpJx67NcBYEJw65D27WTrNGdb4Upa4LefDirmDCLwq6d5cDqN1EZuDwPb6HPw63CH7ajX3",
  "key1": "3ag15hXLLYnf1fKd8ftBHF4SsP8fsvmNSL8bUxeHnZQQnuCP9QtffpMyWMki2cnYU6KtQazKdpvkWLtYtrpSrCB",
  "key2": "3Z2wRcngvzruUwBoNBKBaRbxMVjk8WoWQYcrjfnEwYquPdTpvh7Mqu9SugUUW6s6ccyUFV1Y328sDukGB9gf8hTV",
  "key3": "45zcVLBsAkvWJTpJaXyGCrdZpiY2sSHG57C9dh4Nm3VVRKeX4D1BNF3Dq1YHjshq8RX1uR8FMQBUhhPDXhtSYqdL",
  "key4": "2CbcaNHPB4fisCbDMxjTNadrDaCHEvvAAKzTW3E1y512rR598pQ9KMZpW4MbAGusCknY8XBbWXoMuVhfg3S42zXg",
  "key5": "5KeY6LghgSiRg6wXG9zvZH5Dy59LvXbcZ3TYwwLgC2cSRG8S6CrCnyFtpsLw8Qj9wq93NuFrwCfapBQxg8D2XEhA",
  "key6": "HtidrVD9VxAnjMrEEUKNQPMhLVLj7sf8Jzd4Kz1jjkGyS3Qe5uDn21joUbX758obXCtn1u8aizHpfTpzSJexrwy",
  "key7": "2CPo2JEhiemga9MXWQydEg2wmaUukeWUL3Qj25G4wWMhfaFBzYvmgfnGV39bAHxJNjFtBaJ2jBJUmKFd9HTaho4V",
  "key8": "4QvV7aqGBrqE1WkRvqnohZTeumD15unXmE3g9x6TUN9cGWMrfC2AvD2PFscaEr3dv2GvZHx8fJnWcyoPWoGfEnAJ",
  "key9": "4js8Aq22FhC31dvown2dZEzAgq1uJTbSQB4q6xifBkNEGq4TQ4vTv7qKyb4Du9Efntgg5iF5JxSBk2NRjZBNujgE",
  "key10": "5nPHYPz4eBfMdfpE5Lk8thde2b61AbmcebenVJNtEXKCDp4LtcGUVHfecrt7KduXY5xFd5tnvKVZ39VmpPz1KDT7",
  "key11": "4jfrwQWeZkyDAXhjr6CtSQaGNZEmqTAzWyr4z9epockMPaVTNzpedDfG1YFKRc1HYaDVqtTbFGFdo9Pif1DSsmM3",
  "key12": "4Gm961TutQgF4g2MR2mfq9SFTuDtUy228oq6ABRyFh7MEqMD9ipG8qvKtM5FFhmRmQtMkPMZnFVmxTZXV2zzVmcT",
  "key13": "3Hg8rmKeQenEePeU7igcaVv1YCLeVhQYxqQ6ty1rNpfrzzBeSiwiwnvGC3KX5EpEkaHs7QSHQbdqnjZqSzbPuSUS",
  "key14": "tRN8f8dXzMqeXWrFyayKxzktLohfJVW4hFvA8uGgMjmAXsRmEzW3GrMCy9mn1tZaSS3ryixtzW62BeKgjDkfnwQ",
  "key15": "4JHP9uEuwQhJZJGeGWoRrTtR1ZZ4KSiVNwpmU9ozhKp9A5ZkRZkcreU4bsuiDG6LXHrPewJPsFr94FMadLhvbjLg",
  "key16": "4NejZmTEFci99UQPNYdxseNzg41doAPFSMX6VGwYGD8i6NUNuLyUighztLhLZnXEwAgAKXD41cSd6gz2mQtrnWtA",
  "key17": "29z4ELjyv5R4siLh8im4ah4VbV7VBZjdZ2mZhzcevvmyQMRqXxSEVMbrpYywv2v21RUs4AzuMpuYbkQr8YGiBKms",
  "key18": "J9Xk1vKsU3pzAbHqJ5Rmvr7om6j6QJrcpQdd2TiZe9u49up1PMgFxvyDpcYJTgjX1L6eX4sayJRrHNtj2sRdacQ",
  "key19": "eUoQ5nsU6QLMpTzo5sePndpdk3xAii8dWFSVG923Hwav5iYGCyw4bmDUiBKepzo232wXran554mtZU2xn6RN8eC",
  "key20": "3zEC156JBYEbmLFQiCzhsACfjViMmhgLWRRx8zQzrrscLjXtbCyGBViVP3M59KjaLGSNdcLanjXjdJacXCxuapRd",
  "key21": "2m7bk7wKB8Wn5MggSoBR1nZqH9FJvLkpv7d6rpq43NVpf7hUKdXeyDZtE4nhpwmQJkmg3QmwY6LEDyomYNpYAfWT",
  "key22": "8YuNeZphQHoUvrznjDg5wbU2gLEyRaRkjtVL87c3V4nMaMaj4rDkjpxnmXYtb98Rd2wXyQ1QqNqs3ngyjHy3EHS",
  "key23": "4EbY1eaFfqcYSQBaHf3dduVzNrgGygxUAh5qBwK3L2CKFRmfNbJJyvNTnE136zxdECCm1vP5HCFUDTefbPDkaCa4",
  "key24": "36g69a2EYf8dVPgQgQmAUVuoCPCwJu5qUqNz8QcXZBSq3fEHuHSPxhzMZEz2AbzWmnQCsaiYQhwydDjJg2CTSCo6",
  "key25": "5Ss85yw1j73Ra1b5o2jCjrDTFxhuSkMJngucPD3TEvNnCW1CXn7gZfHqoVQhyXtL5xD6CNV5a8sSFj2H1QGurrTY",
  "key26": "abRBENh9n72fo5a8FFMQGUjJQ1fFbeJJohZYRHteHqYV3E2ohcoT5QJcByhcdYcqSaK9PSd4PLVP41XKsJxR83h",
  "key27": "MMXd5WrszRqenLmCrcgFnmJWEnmWeSF1Ty3SQkuwWXwZtPctkEomb4k9LEzrWk6gLqESrSrSNBthY8Sm1xe2roN",
  "key28": "4UnVuZZ9e8DG6SMgQibrq6utS3AespxsAy1435NyyJyp9ZqZFeZnXj5ZhbQPPF8RjBCGzSqvaGZ6ExUwWUjQoK3M",
  "key29": "5Vh1ideyJUrkEaVPShoxq9QFXF2U2BWN4Qds51us41nq1YifGBcRJiQPCXwGDRtfGn5n9oLz5yiM7rtZWB8uvH4F",
  "key30": "2hdruAsnJKgDKrM21i8QGdBGUQxSnouaZRTZM8YgT2aB6DLNs2sFKexwrDNydnMEwWmQJoeiQW5NqbPQkNdzXC9E",
  "key31": "5mFyYxANfCuh496jiie1yPmiokNt9bqaAgWD5ekCizZWKVCC5ukDFHmBSy4ie38nWtdteVHEz55ZpAASvU7mtB8B",
  "key32": "buk9rjr39NdtdPdcho2azRvUYae7B6xXdhbM9pDbSm3aS7CRuU8mvpH2BeMjfbJhDic8CfEQuaQwKSJF5sRp6N4",
  "key33": "P3XhzHZqJG97MCxdqJUxmAXybN1HosopJTxyqs9cBeXLw921JxWd9dWae5aiHepf38NfSw3Muhe8oZ9Hj4Je9aQ",
  "key34": "SSVVjdBCnQoP1Xg9dcpcGqE861CuPHMDkYhEr8kVsA5SzyGgAE7ZsixnRD6qeQF3JW7fVncQaGL3czzhGetU36S",
  "key35": "TUftr1vYW1KXPbAjC6zv2DZVxmeE6fAXwM5JiicCrVDjiNj9W1CQrfNAswEZyZVzgQCKofUmj1oxKkduvgJ7ymq",
  "key36": "4Gbk8bCoLbzAb6hdLPRYVryU2NRajZTNuW69wkXNVL6eQEM4wF24XyVWdTjtMWVjduonu8G4ddpXbPvM1nWMwUuD",
  "key37": "2bKuxETWD4KBZcNg5D1drvmv7VduXU1wjqCSKkbj9z9CZiKCXXJJcHmSzZWHYfE8arbsAuSkhMTzTUq5nnr7q2g1",
  "key38": "5tMGJtumxEqpxiWuNYhbiAmQhBtmaRrHCHvJ2Jfn2A9txWZHT8r7WboEdqDwZTdQvnKAazttcpSP2YcvMafY8zLT",
  "key39": "PBAWXdJz5VgtbVTW8ghYanboK9LEBnT4WL48i2yoxJJKjs2wJqpU53TYXR2qZXyPZJtjP47aXMw2QC8a7uypu3D",
  "key40": "2YmaraM63Yj6WEyfq3da5WHqKEMdHCfEr8KfYwkcr587q9DjGiwzcsJgt9xMaFiWi5XLEbrT8rj8rsneuHw1ArjL",
  "key41": "2gypUdxWqsbZGFDFT1HgWqDBPzZfzQxUeUojNJoiHjFvsWzMB2QZ1k3zTgHMR7wUyjw1Wpt3Z4cYwr5iQCheMXxe",
  "key42": "5HZ4d4dEVUpfRFZnihuXSjFxGoWCjs5eG32g92nT7PPCXjCn7LynfE4YzE1qGLyVUVrS8w12QUEXr7d31tSjY29y",
  "key43": "4LVU4grmVe2vrvSvzG3anTsScE6R2zE1zRxGpyfVtvj8r7dHwWfGbN8HVXdTQxu2AALE3E3DQqrJ6C2VfsAcNk7B",
  "key44": "4W6MvkAFZVaX1VqWeuRi6rc8qE9NfetgpDNrWCgZqfyvNV6WXsmB43fTGXzHUfV9frUGgLkUDECsRCCaB3Y1mPix",
  "key45": "61eEpfrzEWZzL5Ep19BRJaHxPuKUMNfjky7jhoDawRwYYvwsjxteqr76oYWk2cndJJ4hP5WvWGDw8pRTgbFj8cvX",
  "key46": "2oToXLCZNWwbMWDvkqU4UioVgpfgEwkWMLPKPxFZWpRS9uPzmW43fCayNPGQEW4xJFpitJGZjNATvs9PYmxr1qmJ",
  "key47": "3SbtrCpmwjo5ans1iyWG1CAqggs3pda1GfKBsnMZ8yRiYft3a7RnpwVEB9MkZruGNqqZUqJ8kh5GpZbwA7Vt2WS5"
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
