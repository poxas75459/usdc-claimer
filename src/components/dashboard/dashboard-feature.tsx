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
    "JZygEPprokPgQRaBCUnCGAnTKdGdAKng3owqqaotfr65GAJvdcGXYM2pxGxVdopk4NPKAXBhVYpgKfwYyQjKk2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajUbYGLhSRohzWj42wPHku48xqCEyEaaZ5GkbNcnHSP1bic3TwM3SCSd5g6X52H6sxKLreezjLcrMLQZUmSURci",
  "key1": "5Ebnevx81sVwT2x1exTZ6jc7rPnRdDhZinXNvurFVSenumUKQY62ZZa2NtJRpqEN8mAsJgUsYJKmTi9Whb9SB9ef",
  "key2": "2rmtkqidiV6YMjr8iwxA1NEnMPT6H6LQ1xjn8kFvYYfNZBVQWKornHUcZTLcGhEH2Hr4MGhzViRW19pSjNx78N9L",
  "key3": "2BcWsqtm1SmjiVwKJLwSomEosx4h9dpqT7mE1LQzpEu4p3GTQQxi5yU3zDaHJV7D1aBDAoRnuf2KqMFy4KG8tqK3",
  "key4": "4DA2JwFtVyVhCmaFoQF55syzUzmPZZMgRrc9t8XQLwFxvyz7YSnbovX27WAiMAfS765CN1BE2SLs6oRwxhZ3jDmS",
  "key5": "4stc2toA5wHST33nDDEF2W1ucZjsTbhJkDR6rajgC9DyYUkvrYPoKuyrbcJgK9BCXYr5FSmTiabQns158s3EsB5x",
  "key6": "544o6B1PuraU6PWCQWH8oXNCsWsesFHtHPLwWntGXVdwATo3H2X8V86SZYXwfdHACWxve873sjb1xUAgnGd3MQiz",
  "key7": "66haDnYnr2uC1GBwBGrGtuPgAD4ycX4D3fWfn8aXLWmAyDPGBR23BEoMbzHgGgczNKQ6V5su6z6A1oAwuhy1mFGC",
  "key8": "4p1pKNj3pQRqMGz7ZcGnj9gVbJKw1TLniiWYXccuQvf3WaDSHmLjTFvExHMgEjeenGY9Wfh2z3W75HbWcUqUcqEP",
  "key9": "2VQpXgaCKBp2LEiU5bjhN5Q3Smrw4F94AjCrHJPwYQ5RbNEdDPBroAsXBZ2YgqyguYyVqEjovSJBdrewEaQNAw6y",
  "key10": "4Pth7thD38o1FR3QQ4DYngJEfSjhvUuKZmbnwwUFs5tbz6qS5an5rxdXpUJztav6Wg5eqhQ67izwvvfZA23rK4uS",
  "key11": "3j1qcQahpiCBDtKC1raBZddPeMfRXQugBGSk1duJxkVHcHnRRwwGS3Mx4YQpdVL4gZfjxvgd1ZcCvwnA88892e49",
  "key12": "34MeAuQpKAnBZZ52JxjFjAHdzvg27VVFEG1yuciL8NCPu5u2LbBt5zPaAcrc2YjKjzVcZtLXEjjg6CW5sVgr9jMF",
  "key13": "26TbQM6fPfU9NNWUoFh1MXEKkUjXaS1GFbVyNyVjQBMjzSkeA3sGrFSWt1MmwMXbt598nZzXs43pGzDZqFUKK3Wf",
  "key14": "3NgGgHXpRSZ6YcMhA1mnpt8XDDq77u9SGV2GpWMMHkjWi82jViuLrG2GN51T2QFjcfWbiacWPEZuSERGz6nnsnvH",
  "key15": "4UkZXq8nqjvGEkSpLsN5RQf2nDe6nzytU4snnAzYaba5RAPMQEb3JiMLMJGEur5WrZ56QyjDtbWDuGomutnFRK6G",
  "key16": "LALCJSouendWgdrbgiJfZnRNLqUoqKLLQhHC1wy9PTk5HvEfZWxARSKUiJ87TXALPvkdbzz1EMNwGy4TeJ9WS7t",
  "key17": "3vFWVam5qGt6k1zXphRR9dtHr49HL4WeFdfeZvgeh7Y97tZYB7aixgsBNRPq7h8vpF8R6gyETUEuU1SfcAweoJak",
  "key18": "62PJiBfZWMCGuAAEzXuhUPdan1oJHDarEgMHRjdrEyPBRXfauWMKTiff6vpbQmoVdJSC5SmFj65FqFNQDTNLYYcb",
  "key19": "5sEtTbftikLfC83ST9wHXmK1iBs5NUwQADUNLxmxDSrBMoyN7jmaJWoA9B9Xo3hbC4YFNM5MNpqGaL77Hupx1YkZ",
  "key20": "46K6ztyorP75Q29vhBBNDJ35RXRkUvbmxS1WAsFGENdxVhxm5NUCZuUGMNwdf3d571NQ97D35SC2HtZSioqNesnn",
  "key21": "4ev9CSmWwPFB4dJJHKqz4xZWz8wncarDq6L4gEMqr4UULQX8WXMN7vzxCWQMnGDeYQcYZhETBYYrTDUkPB9SpgKP",
  "key22": "2WCbMy9HTrYwLnVP33S7XaFvYD9GQcQXsQtyfTwij3rs8Hvh3f19zcd8CGbFJss9WKV3CS6oTYgoYPZnbH6bF7jY",
  "key23": "g4HVuXXSVXRufKjK6cBmLFYpmJeBjD4FXTEjo1gnF5tkxnZMnpnrbTVyk3BjfRQW61t75Xan9rU8MUosdjLHSm3",
  "key24": "2deCCLGcQLCU7GBuRQbRuo9XPJs2SERy5yLVQdawkwVFDgpvGu7YmQHZEjJMDu5ZYsYULZhERJYf2s8JxV3CyoxW",
  "key25": "5WN31KJK5kkufzB4wnvjE3RndcSwUXfN23oxWMdP8LVmz25ogqarhFWfJBa8mvuVBAsRHv6tRTBJXgfZmjNcceuW",
  "key26": "651E62kSHMt92dkaehwu6JD1dAPuATVkmf822J4frBrK63qoa6SDtnuyZxA99MFmWD57vbMCZ2xpYcjuTi54fySk",
  "key27": "2tEgB1zrEis1MKXBXomDXUdyj4GnQuCdNDk8cSJ4PbTGqeyyr3dq1FzBfba6vng5CKWhV9HrLnyJDGe4ycvyjPaR",
  "key28": "5XqxDvp8HQgEDZh7aC4rk9WoNhSXL1K5mwtjRt4cprNZ7N2AK6s3HVkTNGUpm8ZNt2TwHuR57swnh29X5Ep9uKuy",
  "key29": "5vLAtvuRvVbuCTwh44sAdTRdENjc1xS5A2yJChxKaBebmazibJNjRHfJCvBPhSpgSPxdYX8tAKjPWMoVFxtyyuV",
  "key30": "4oXq9SMqqwRNucDeDvtP1ifGokSPZCgZ4g82kpr7ZUidmfm9AAWf229z4Z185Nwkoyoc5MTSdhKPgHitKQCMJBLU",
  "key31": "4cmrHezTyTw9NvxTzgYQjGqKhPe2QAcnST7nZzmYGvePwpxriMnfvGfJVppn7F7qs5EgVDA91uBfE6RPUiDwGVZu",
  "key32": "2Av3VnYVaYTzLVmwug9KjcCt9wZnPLByw7XYPEUBFVqUSC6hwNeZSuN3eJ9R3cY16heKZ6WHUgaymkeeYS7W9FWJ",
  "key33": "4w1L8VzbKR8Fb8DcKNnyHZAbBNpaUURRNxvu6Wwj78VofYH92vjopwLehcbVZWoaNnazdhPWBJA9hCsPtbRmt22k",
  "key34": "2roEZoKoENuH2mrcDBq5vixeZPWTqSkWM7p7CjDT5GY1G7tJ1vpBjfMWuqPw61og5aZ1z16suveNf5wMZHUXMoPv",
  "key35": "d7VjXVW13hGnZcjiLyLAtQaEyGBiFFWRrRgPxUr4gyHUKt9Rh8PyVW9dzSZ7hAoHBFFht5yxkPgDQDGkBXhrB8x",
  "key36": "34RLZ1annSrCDXowjkEJdWtA33Mm5fnc6S7AZLxwhjypLWDJxwc6bcHHnW8N87eN1AyRJyv6rgkdMsbwdKmFtSyf",
  "key37": "4jznJ6ATowkz8r2KSvgxZBumPg7HxBG8C53jUYFebfFic1UQoUQzeMKay4FaR8Mybh7Dyq1R98xRWMTqTeUsmJL7",
  "key38": "5EtoarYNnT8ReidiX5GrCWi6cZdCBJLWvLSJg6BuJngPFvmEEpuS7x99TVXSDDYSD2E6iYkQDPSCcpstafg8L7rV",
  "key39": "35e4L3Xs68XAzFZcNHSy5CAPhSnMCZg91WxBPiXFiWhk2ConVGzuVUrGKuCTHomWf5nuPLZSn9MohE67e9ynKHox",
  "key40": "4HVLfT2YHjk62zpGfx6m876rk3Bt9Z2GR4rYLnjN6ATtgxCm8pAMkfTuYNEvF5At8SGgKLgZLspyYiGpG3v2mqDe",
  "key41": "41SY8bcQVMxcpwo3Byp8tv1uF3fyDwVfhHBdH4UPjRw76HR5MKfLnD4G5emEUJs8eT7Z9qPELBxfEX4jDCPC5H6Y",
  "key42": "57y1fJcCASoiZro9BythmTLL7AB6qDwZ1VTsx8DnQeCDridVvYpzSRnuA8MJpdGjqcFUFabP79cNA7y2doyFf7VU",
  "key43": "2BoNXXSuCFg43qm6ME4mpY5Cj8y8uKD6gKXYVkn3nX8rqJRnDg1ASDhU74GZRCXVjd73BEdAAZnxLuGWJRdV6rg4"
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
