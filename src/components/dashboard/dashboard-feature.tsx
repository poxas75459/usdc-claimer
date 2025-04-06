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
    "3HWgG15V6S83m5FYU9R2uiTpsrxgrZyENV6XL2EVz3pfDhewQqpHRrUwrkfJfoFYVBdVvNHRE6geKvdxMxBxMns9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuFrJph8EV9rhwr4NpqDZjB3VCpZ5imDK1nFmVivRiMRysBV1w1P14pEJyZ6cnb4zNwhQcznF4AaLqUycPWfhe",
  "key1": "5FjoCwpVo59ZJAU6ZVUGxGANDdqvxpRVhND3dbsc5ibpkKB89eDxNbmqMERX2Zs6wM6qnMzRV8fxUw8jCoVdKytc",
  "key2": "5R1QYhKhXJdXzXwdrXFcoD78EiS6Z2opKhkgR26e4FJMpmWU8f1DZFhk7CWbJWDj6VV4DXJGzaioNZdWeUjYXFV5",
  "key3": "5nmCZB7NASd8RhGRD2TDeTrgXCTKtWzb4jmHzn94KcgPGVPxKHQHCWYXCnbQY7Jfbs4rxuiEQuPAGj5cPhwEcs4r",
  "key4": "gY8RJLXhTVv2fKdTkYS6Ec9RCpPGYURJGAYVNkWjwnH7FCueZXCFvgwqLUJn4b3Xg6EMKeyKcdGRbm1F8TWWnSY",
  "key5": "3McnWUEa2jzGF8mYcFgsAJiEhEGfec9oG1HRXeaDczQ1CJzuSk48rvx9H5y45faozw8hXKyY1oKhdBCfgKv8jsE6",
  "key6": "48m5CWZ64d8CLWfngycEUpRhb2nkn8egFSeWxS1kJDUPWGAHWpDFs1zGprsEc3kVm2rseHq3egjcKCVGtbHXEZju",
  "key7": "5h6qqBfhHKmjLSjdWUkmjZspqmB85eHC66x1EN1wVbRWt2eqred281B7UprYaMmAuvhFwzjwCecwqyzJo7NowEHq",
  "key8": "3CzwLPfniUzd9cevag4Xvsjpj3NCpqRUx7nXcJvEQP5ACbkmuJmKnURYJbKXGiAAnUmapL8Vy413JxzSiEsznvUE",
  "key9": "4EWX5Z2tcxzEkWeZboybD9gYgBiu78nRG9QgiPP5CzmcEz8jBuVS6TCj5fFkmMhXz7TqX1sMz4WTMR8MjuUu4wUe",
  "key10": "CwcpNbvZfrZfwEqkLDCr9QDwbXeePXuhMB6QAdB31o9WA5SLrzc5NgGPeeraudLGt6feuGwuNzDp3Gn6Umgc8Xq",
  "key11": "25TPwJvZ9GjVhvqzf66jQdCaCZyFARuPKMjJTAyavbtWRzirXTsJ4Wgak2FoFTFEyjhF53CbdNXM8dXRaeCnEom2",
  "key12": "W1fV3Y5K3ZwPT3ruSt4FoZLNtTJXrQLYRjeFqrPfmXGqsrfV4n6nzd9K3sM8dSn9feDX13VKD7Y96z5Pnx6U448",
  "key13": "5DjkzMCz1Ce2VK17jSftYMUg8xdb5kEM3sK8FpSG2KfMd7qpNhk5oW9ZNbsAWFmtbsTEvcopMFbox5YKTtTrboJf",
  "key14": "fBgrq8vaLL1eXgTbfa8mgjwDy8g8kpRxJdwvAWnuiYu3e1FtPxGGRovVckJA2x7tufofUwwPw2MMbAhmjQVk1jE",
  "key15": "4H9H2hp9gS92Lvq3WdqBAgtZALmtgrgpEAgVP6ckVBxc5RbCavn9NmLWB3VZL5WvR5UhXS9wPYGm6tSoMRqzMSgV",
  "key16": "5K8sFwkPNqojaxuk7bzbxd16JLor8mPMmseSCMLzizKQ2t3HQv6rH7CmdXNEJ4z67yVciGVzxzWJf7Qh9Yg6EUXY",
  "key17": "wFGKLnExGzr6jYhHJ69zwibQGVDxvaXGLgAaWKncSVtm915N6uxNu1cGfR7xY6XqXv1gwYCzSFBKQ6wrnLaLiv6",
  "key18": "4PhDqC1gjURh1s1nc8AvHAhVHRa6hs5steQB3zAcrZSPiy35q1dWHXxvvmZiajDBftUEEWo2kh3EyHRQpxoZAjYs",
  "key19": "5pC1fRtPoh6HvuuHJQF7toNA7fDhQ7uuRDiW6ySVxUew2uRW7BLqyDYmemcsJBfC46eGEe8b9YQPSUnFVA1ekvcy",
  "key20": "3UBEBro7oRBdm6hhyJXrx76seqW6MJVk51HUBAtTfhC4Soc2QHJ1RiY7odUrTZ8rRdgtK5KudgjCD5mDhricVm2W",
  "key21": "3MWS8vd2ibV7b3BspvbgA5iTN8rr6pqtwPRdCE8Qyiw2EyYDU8LkMvSjbUuiy7weDvFz6zMcxQ9yLtncGXmwxezR",
  "key22": "3xDvqN6U8KjFdAe7Z71nehUFsktsgGuUEUvNjR9UUTuXHRNaXV6GSGERH3g4j4S9gZwZtHvZ5qHDEHakK5wJVfdW",
  "key23": "AwUHXLaPaGCbY5XXPA2EwUib7hnviji1W1bzff6gwPApZsam6wkBu3mQ6uiSRJbmje8NQbVbeT7ihiXG2w2m5vp",
  "key24": "RtDJZ6iAZ3iwnHLTobCjTK4EB2HWBEZCbzsiZrcXL2hT34WyYnYPCPEnZhNorAyK8nCNtJxnEVkhKLdmz3TTvM3",
  "key25": "2TpjvbHKVqFzjrw6mSALyJ3LE4aZdepHvy5Y4UKBHYwHbYQqiepsTNXQBWvbXzTeF6DTXLYg27LkwdXNxUs88D8C",
  "key26": "3nTuMjAiegeA9snbm3y3GkBqiQE6XtFocRp2nFbebu3o5fNfPnPC4bLULvJtnjxC9z6jEc4j1GxwEpjtUi388gCQ",
  "key27": "3M11m4a6T5up16JP3bU7eaDvHUKWCZQaKWudzjsvSCkx6nSQ27d4esaVghMbvnGNxq9ufwA8zCvULy3N2csWuT9w",
  "key28": "2VMMrc44a9LP9PA2Jf2e2BFvqoXYM1yNE77evvzYHBqwu4ExqZFnghTuFTz1v3iL7rYbJEEv3ve7BuF8h69R9FuD",
  "key29": "4XGMx1uYJ1btUFUYxEbeLTpWiPoPrZTBLfwgNaYS6wsT2MaYKrpFSS6gonJSkAKPScJ2WNs9BrqwW9ArCCJjxYWy",
  "key30": "3Gu3WGW2s6CJupFQLWqFW1fjEQ2Z9kPThx6x1G7wvbmsRg48EC5zByPB6DpijVEFq8cW2vjemfQqxv4cd9oXhDtR",
  "key31": "53bi39gTEKbpHVhb9tVMP3zej4ZrCAjQUfF39XKFw9uYcj3yEpMPz8EAzsA8UeF3G37Ts4Swxije8pM73xdEHQf8",
  "key32": "4Ry6oMazAQZxwZMUuDni4qYWGA8QGcz2Z8twxUih1JyAQ5c5T7kJFfayKZV5UwDdHp9w8R9WZKFexeawsTNU9wwb",
  "key33": "2FnFpiDGbyieD8smHJRbKCnYJqbeEb95PbjkE9hAFJVmjcTuJmsfbYD54gF1tQmEER1oRgTtK13umXcryUwpSvJa",
  "key34": "4gePKgHDnhDX1eGXsoQVb43hmQEhDZZXNCQDkJ9f8f8yKLsHrmZhoPDGZSCfEDgMKUnYM7hSUWFch4Uj3JN7ABKc",
  "key35": "2XVrrUtPfu6PbMwvb8skrGeFC1C3LTT7ztZnvAdsmkmpT7r3XW7V3nqBPnjV93LRbzj7zc9YCvFE9oQUV8XxfFEy",
  "key36": "5d6KXD7RrnqCEGqi5QGeJ6Njty1W72aDRgFaXBMhNmLcUCvuKSArnUscZV5xHQwH5Pke3x9MddpErZVNVZWHq1Za",
  "key37": "5ZFwBCC5VaxpogPUEcKtq6123pYzyiRUFvgAD1kwv6yxMRL8dZBeLpwpJGt6yqWNBgPfBQMAm1KdmzYs7SE53kEv",
  "key38": "ayswoqRKqpBqVo4aHDuUyBzaXonKn2WNci5Ehno2CAsn25PEFugqCGp4wkxN2zNyDtLaQDtxXcqrciveD28qcjj",
  "key39": "5itfUM3HDPAsAg4f5s4PWP9uc9YSEDd8tLeiWTfWyFgJnnDcJihEhK5tTnbwEW4sEDLAsXL2wrkHmcFeLoxcEBAa",
  "key40": "3sNBFQEk2H5krY34ne7Gg2kWi4yKjvUKmLK3KyP1mWKoWQ7PFN7kJVWQ4JzcMcZU25iT5DZCJfgdbaHncWhraRXA",
  "key41": "5Vgi2o6Worck6Y9cn8iXn23YzVt213z5uSY3GP3UKLCNiJWAVqU7UQHJEL1B5dzXEuvPwNdxth3CbodFei4PrjWT",
  "key42": "2d8osoBKfEzdTeyNKKEjY3BFJjiuswHgcnXPej6DWs1phLTMp3Wbv6hCG9Y3KixbuBj2YTeJEvoXqpJpNUgFCxdA",
  "key43": "3JDMiRwM7WygLjCuphjqmyULUDBqJvXtav2U1xcD6uaPyL4afmVudc9abFnqRffVmrDKs3zQPNzUfSpSx3ippq73",
  "key44": "5Kvj47i7rJcp9epDNH2ysDejphYQUAmPDLSRiiC7Nx88B54xKKLiKtEZaMgtA5SoVW13WFNCoonZL71tfcAMxJh4"
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
