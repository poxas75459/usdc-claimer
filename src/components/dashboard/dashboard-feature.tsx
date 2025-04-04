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
    "2ezZ2pgJFanWJqta3Y3RtX7Nmx3G36fKMcKd5Qyc9nKw4pUKfUJgAFrXkq6roYb5egwwAfP5shufDb7M77pXewVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrivCCmFMMYjVYnHvLFunbfxBm9RCBTpAMPBUVzoDqC6iov4zh9XFnRBFcD78QN31DBMJCEbrTt8LWxkYN2qQdM",
  "key1": "2GZxZmZKFqGoNWfwqAgguc33A2Kv7J8u33V8D6vutYX4QPc8GuSNo8zHM14sSkNGVaUJYAznCMryxi5Fc5uC8brR",
  "key2": "5hdrHuSLdozZFS6Ft2gYTrHGMyQs71XPfZHECupAnjuMD9yHmEK2XqZN1cjQfdDpFfUX2KHQkV1ukufcSeN49H1a",
  "key3": "5Wwr6EAAxida7A1euRVVfiFDosxRQhNgS88ZXKaEPDLtScDa1dgR4X4YiPYgETWk6S44nTHJE2vYg6G7ywYEoyz4",
  "key4": "4wtpsvEk6oPipJ2VD9cwvF5QDxY2BZJjapXvoHKbyhAjv25MC4LCtW9M89Vu9SWbf8nVKc8eusBn3syBBknXh7vA",
  "key5": "4hWtTVHtBmjYpUwy9poXW2fJFB1D7rPxpAigcxXPeVc5jFYBLy6DGDJ2QMiafnQeM7SYZFzxX6jztCTjSsK9Avi1",
  "key6": "BzcZEbaCoRVDp9U6UVk41dL1KhfDFdtU3Q41aGUnkj5D38UrJu2V2JM7KtzKothHiQystFpsWYV7nYN5syoTvdn",
  "key7": "2CW8F2mvaUc9Z6eChAY1YzaQmfycACGARuckDCS2Ugz8aVzHAmMJk3WEf4cmJQim9Xvxhg1usbpUoXAQW8YUGz2G",
  "key8": "2sqAURsm7YpaCKoAdvHugnCYHUywSbc4P8tezL8MmPsbMYPZTBNXbDmHdauUzj1copRMAb4X1Hq4tH2D78fR5dax",
  "key9": "KoG2zg2uXzvhfj9SHZRESkDmH8moTUh9a6ogEYWxTmAPPHbYKZciGVdJZwThacDHFWoU9kyVNYwpMqL9ynLu14G",
  "key10": "21qpYvPbJuSspY6tYrmLQ8zKGcw8UWZLtEodgDeuzy4JVSEXJDqxMHiVnUEVEmQceeo8j4Wa8ErMea8xcoTpJjkH",
  "key11": "4LbgVjbx5QemJWdtWoY5VwazZ1bfiKLRsuSVYPBLiDAbmRH8P6cLGGGc4GtyhUBD9Pt1RyhqESCsE7xAHuGA3NnS",
  "key12": "2c6tXuHbgrZPWHBHrwJdtUJWmg3eihRMymHPEGw67ivPyt2v2xNj7zpu3vpFFKr3A9n7gX7E4wLeCcqSMgNgRZ2W",
  "key13": "w1K5B36xekiz7aLM6AJonFdD11gZKpUJPP5951a8eYCayfYjVX4Wd1oqk7a9FQMrd1Q2wDf7ZH5LcrsG3zbHRrt",
  "key14": "3Yyn7znxntvJCpf8tyXUDwVdoF4rDwhb2b7UgBgCaNBfQtaYCiwXZB28yvJund1a1ZK1mSNAh4SNNDLc6fKx77Sz",
  "key15": "2pwi4ZcdmJ57tr8ZMwTXfw3QFJGnKM3SESHncpRExBoptL7gUi1DCrR6RP6tmw6bJwU39GQrybw1BJpq6rJq62it",
  "key16": "5H5zF6owhX2NtouMNxCTXq5AX4GG5wXs9Ms728xrghGX1UhPrFVwxvp6oHAA5KiAcs9GvXLfWQqwEFSAABhYv39H",
  "key17": "Huapm67gM4yEZWoV5M96yiSsof2MECL1X554rwvKxE4vvADvbLig85qYUTUpNmwJUozy13dJLdecbgzK46sEkpB",
  "key18": "EvrqpSFP8ZzF7wzi2st8nJohZmaVR7D1d3hTsecVZzMiBF7cjwsAsSi2pXkUEXecgxqSc4CEq7TGW8opWt6RezU",
  "key19": "5UwRU8WbQoFGizzKqWugsraJJXP12ZNvqVLjJAn64YJmHtLjXraCWDoRDqA4aSrzu3qXkcCGv8B7Wqvx6NnXnqBa",
  "key20": "rkrPRuz9WWpLBedEFf1S47yt88BHchSwf5XdwWSPVAPYP5ghBtY9KGfK7HnjT3iqgn9HHEnH7FY15NsgAPvVFDN",
  "key21": "3uSem5JLCZy7KYV76JCDaEE6YJZnc5qAkCefo5dgCrpDP8thiWHGbtXfy3m1jvLAkRnfJSaUe5hm8ZJEih6s8AXn",
  "key22": "2niiJVMSUPEk6kKN1pALRjPTKHWwn1LqUumueNBxG8Uwx6fBSMHFBc8BtK3KBwgiXUq1YcTniTNZw88cE4NuGHZz",
  "key23": "5ZTtDDw8e9JgrAXHi9u2XKnYfCXZ41bQxBpSB82hoDnTMYdUFJVqqKy1wftFbH2rNuxyEHocMT3gaoksmysgBJHV",
  "key24": "4U8FNuZwWGLu1jPiek94e3oY95nfVtJJXC4NUy68uaEXUEeCJ469jJKuxb82mVG1xn3yQU4dhfRYqMoJWpeewZdz",
  "key25": "5AFUSiNjq9jYKCPi1tNWkPpNE9hwUYG3o9NShEapDf9zqnTJ2XvJ42EZjc5D9QF4Y9cqssxrDGACRS2YLHWFQ6z4",
  "key26": "4c9MUaAJW2PvAYm2gaHnD4ZRz2KhFggkxW4QYR3xsHeCmSE3TjxfUcyW3RsPFPxwgaCipHowYz3SKziwmVmyj5pR",
  "key27": "5e7eDR9WsXsr9Yuq2xtWVQghiLq8YFLmk3uQYh74W6CEk1KFCdV8EsVLcJQmEKnh6LaP1inMy8QNzH2f8o6xgkq7",
  "key28": "5g7hr6BP4cb5CxKEHSiqfBnWgQtcrVPxUzipY8kDVzYcu2oVf5gFb2vBNsMHxyTR9vo1egY5vydEY1XJZjqGffH3",
  "key29": "KG8mQcUuV4z3VQFYSWG2cQGYp4TZmvTWynzqcBfk3NkSUHHzsRsytrUXXfRBbykM1YYa9M4E5Yd4WkuFtUXQzQA",
  "key30": "3RAJSbzAiJaYTTxaL6482zEWmXT65HekG8puSSNU6vnqdHMDULf5REoKRhbWQE5GEWSN6UdxnD66wuD11imEwVZ2",
  "key31": "5bhQez9vmYUbF1n2fj8tx2GRo84rsFLhv9NPyy4w5H82ZyHkAhVXdi2mVZJHo7qViAA17PGY6jyKqNSEwDvEUyMm",
  "key32": "4y3Rmry8oxzdPBCjfoxPQb1ekrByT6WMPkrgxrohZQ9eoijrYeK1RcggQwCM8984WbKmHcepxm6KLJzFVfA5MnYL",
  "key33": "5z2Ro22K3MReRqUiZkNFo8gjpdnqGGRRDE6gQiKRbbnVARLKG2N8qxcX4ZEJrdHTcvHLjKZ5wUdCaHhnzjFxMEjx",
  "key34": "33qZF8T5VzfZrRXWW8g5xpPQpMzbZ2a5fvhHJT5ijHURQ5K3QMcNEuVkJuW8xFSxdRPHkGMEaK4z1D2AW2eBKxXc",
  "key35": "5TZa6K5BQmsXLJ4x9piR7vpr9qb6ybLbHXP9yoBH7saRKEYLS49ekp3S5TU962rHth4xE84HJUbfVnbSVF6fgoyh",
  "key36": "5UKQhjyk1GCsRwr8F3kK7gLMbyFnS9h1SXX2wHWUGa4trjJFvEZceT1sqVmZ4eqBJDucMB9sWAYZ8U5gBATyi8LM",
  "key37": "TpgMfGog21gGAdLd7JfyMkAYhdeYAyU1UKqDKhqpzjpZk7kZmWik25ZffQyHUwwVifMfZz7BDoWitscuDFP2BNt",
  "key38": "4Y4mtnE8HTLQVmtZHGYhqmS8aUNon8P9ze21NJcKoFiTjAMM38oXuuVPX1Nsg9zTZSqDEv4bsAmUZvC1Usfj4NPZ",
  "key39": "icShM9j4LyyuaBTfTuYi4gNeLZqSytHxadaf5erefhdkFijsUFcTe3zjVeA9eac8BSuKiEAwsw4zq2ubjPgzR9u",
  "key40": "4zSEMicsGuwCx2wag5uZ2L25PGi2idrw39RbBpQaGoR9vQH1KYfWQ9Z64Uw1DudHeiT4C1fkknwqDvppcH9KiQpR",
  "key41": "qgWS1m4Q8bJEP6aF5rVCfRXg3J8HTEJVChppA2BKXxefcsSL3hr81cKun5TkbXDujKqd9h6dtzmjBNYmn6Mgvoo",
  "key42": "4okBJkxYP6xwePG6Ek3xELDzwsxzaqFFhE2KAWRJCrKqLHqVsoQGGgwJyKGV1dJ94tXffdeRGKNqsR4muU3izdMV",
  "key43": "2KXgajeTZAdVBeaUQVFG4sG7AB3UscMZBvbGiZSzvGQycrXpT9v29h6YgrfJCWQCNpTvLfa8Wp4ANjkR9Y7NvgJJ"
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
