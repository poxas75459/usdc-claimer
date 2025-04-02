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
    "24qQWB4P2pd5MJETZmnREJjj4AwucbVz4a9pYGC97YiGuXnymYih4H6hvhd9zPXZz5AjVejjgz3KNtZN1wwfqHiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AASGead26KoxrLDLTVufsutYdYLWXM2Qh56EMfgzsC3si6eUpoyS97g555Uy6EuTeXnY1cfjXJ2mbaRn19cq5as",
  "key1": "4Aaj1BT98ZY5N7DmxrWFJDVS3uKTHhUMbRkvmuuZW1uhEHAsGE3sQG4yBzb7DdudxGdgaPQhtcD7ZteUSRLEMnhB",
  "key2": "2rebdy5Rwc83p4UsAErCm5pnRSH8GLHVvVnYxaVF3Vb4Z9T9tzDaw1WncMUixqz8AAiSx8ugNwjddQ6BLTbwo1RQ",
  "key3": "YNGZ8DZ6niFfDbs76LYZ1DBvEeqmAuJqRrKGTytQzPgWH31BKGy1B8wWomw9goLFHC1fvKcGXq5HKwAie977EjJ",
  "key4": "4V3e9yU6EU5txiZHn49QLXNLUdFJfdhQpssHa1TqcC9ESyU8iUDsYo9JkfjzFgtGAV7jUmC5NG1rkRbDVr1hgfUd",
  "key5": "3BTJN39jtdgMpbZvt3NamAoNBjyRkRxXAozv2YyNpdEtRebncUfCDvvZ7XMC1RGRC2NpTkx6Tf2TpNuMh65yXXpY",
  "key6": "3KHztfWKjqSqfc629JvekBkaAspQws4Rha2Q4RVMj3Gd4Hu5uwRTmNahKqEVHqgzbgoZZ9Szk3MdTpsXYUeQf6Vz",
  "key7": "4bdzqM5QDmQMWkTFgQnoXanKXiCzkcoC5HuAhXdcKrQnEUPVzq21cpWbdp1CxRX8ZPKVC78V2q12aVKCYxYujdD6",
  "key8": "39zyJ9BscuSRczrTJb2CgsufEx1aykNX4d9obPgUnq4BX4de2whcYWPu26tgoyVhdhNh5knXpPwWrvZvfLTUpWH6",
  "key9": "5ymddswB2CD9iAXxnKr29cXZE2JeVpVLrCQgmh7bvkS9Rj6sGgP1DdfX4zNTcpFZJ5QsBrWhPhZ6VWSP5CYQwpZe",
  "key10": "2PbunZg3bt5jqNPHGkacf7JWBBuYYjTPT7ghX9bzL6qhVfwTJDJrGy58fZRwLcwrWMa9r2yJ5W6UGPWa9Pwdymhq",
  "key11": "2eJ8N1j4JUFNE28Mst5pMBeeSfRd64Y9Ec2XSukU8avFULEHcAbNhS4ztLSVEK491JqRKbvx2Ebv22S86pL4YuST",
  "key12": "2GUeR28gwHjiSYScpAD88PzS4UDiFVAz9eNW4qtsvBnNyQny6B4zDhsUrZR7RZm1nLMsh9WDagwz3tZesWeoDMxV",
  "key13": "4ZsrL5aBV9mSKZtPkwKyPHXJnngLZFAR26VEW6ABTsQUFXAaLqL56pzcq3Ny8ZJ6aKSwZYGRBfsdea8XK9uqM9k",
  "key14": "4UYcYouJnMbfhv4hwPRqoSZ9AQYST6L99TiyHnL7yE6VwJjukdCDMz881nQ6e9wN4fbXpDPZCf17uLFZSqcmeD7L",
  "key15": "5u6CsT6tVqHcZ2Q186cWu7XWJLFT9wtysVgw1FVBFSuBCkEVzFafx8dRKZquwaLnTGkNA8cgtZaVdCfgA3H9qLLB",
  "key16": "AnfEovS32Q2knnyjPqQDjgiHgQDS8dnZcTEX5Sf1WTebfQ8zXjWNXrZhvEiDKGsZ98gvMJca6CnqHaQqad6K4cm",
  "key17": "AZtDWt1bvmbqM1XzawdZVCpRtTnsPZwA3gfQjy57ZXzqozTaEqmSa59KmxV1RY92Lge5Q1BQCewUGZXjj1T93BP",
  "key18": "2e2uWtsppjLDMyz9qw1iQUZFHj2UBCotYh5xjpA4tyomYQSNK54V6h5FHkCz6DYuMeMiySNBC1vhhTjJYuHW4XXS",
  "key19": "81Q6QEBfyub73WdwxRT5abHfBULWBw2p3CVi2bkyVavfuRazFguDUUqYRdP5RBxUnSx2eySpxpvWfbpduRWH4bW",
  "key20": "2dwcArqvGfUJjYPd6Yvy8cHzMZbv2GjAh7d1JJafVZAVPCjngnJ4Rngen3sqNM3f9JHUA7VFg7uyviE2armH7DZa",
  "key21": "3sdMgJy8gufkMKgeqjhEkrLAHDMf1apZKF3keLPAyqwRsGPEjZPyQzMYTY1XthhUE6QFnm9cWNqNQ7msTYbATQeN",
  "key22": "34UMsy7bGyBAQzNtuim5LumagspTzooMURhf9PRS8xogGkbeWB6skfqSTtaJX1bDSbMxtWUu3f2LkZhp7ei7HrAT",
  "key23": "VbHaLqfsjCMssZzy222pJn8AZV9WkNVRV33HtfKtC76BNUTtjKKqbxSJURgA8Vqh4712BdDnoXN7fxKfhLmxmXh",
  "key24": "3ysE7wQq6yE2jU6prNA3bGGdR9Ymf2jWAFvH78psjfsKQQbuhkJ1zxhm4KCiW46VQzCrRowroZK9aqRqfiNhHkhC",
  "key25": "4ZY1emzmbpeseiFCWywJBwSrnomCtHLSLY4QvNT4btLC4pxwAGBYYyfYLfkadhcfzthsVyCuNcZk7yKxWc9xZDfx",
  "key26": "CzjHAscbEH3Hpj4daiQ2vx14RrUGpTx93ukH1hGhMSnD5FLpcoSJjQnek3u8HGpiqhsomYFvVnCN8R6B64gRbz3",
  "key27": "Q9rCJxoZqLsoKpcgbP7hv6UYwZahxeZb7Q3gG4s6qBr8naE6SA9VhMpxArDsWZTbvNUNYjzb9Csj4YcM79bWDGZ",
  "key28": "gnBXE4ymM3VvczTpp56rx8w6Apub62fyUi9whZ7md9FJXhq9Gb12oF25AEgqHG6o2smmSzpqTJzqeM76cWuGzvP",
  "key29": "29z3yBbbEvKJbUHMeZAhBjrtfXUjsh2evVkbUA5TQabmqAfriGbez2hcUxzjgx5RyBeKgPriJ82BQrMNGVM2XFkG",
  "key30": "4KpBxxuV7CUhs6wDTb1QXHS9Gy3e7cBfVNmYgV8LKAjxrzvAw6tn9SPRJheFZFoDGA1doePsukiqX5AgQt8Gu8St",
  "key31": "2UdG9dVWAQzHZ46F5gNM28jGzrc6CM9sheyuuxYuh9qqbbBJCmVmW5gUkkPgvYx6fzXDGAbPpPXDj1zYEfosV1rt",
  "key32": "4qPK43HaH11WQey8giuBH5HTZ8sYS5nsUyd72YcJvBzw66zkYhK3KkMxSVzggM2KS9RsAgDBoum3QRptUoU3Ay1m",
  "key33": "2KEKe8ibR3GBFLBhruvHEb12oreMefEgYQcmUX7kPZf28YnuDwcBMmEHi5yJe2r41yKJw2r2qbwu7ztwjtQXH1at",
  "key34": "3pFXRWRfLr7bR2riGbtjVSmJsnneTQa6RxmkJQViMqbyEBQqvfGZ4L6FitxCf2yVZPoviV4qAbvFvECVVDMLEwPV",
  "key35": "5jBwQnp1TibsW7Zffx346DzE2DS7e3gccD1cuYQeyt2cxUgaNA9ApuFdJHg98Q6gqRnu2hKkvSBwt9JHZUwPitAW",
  "key36": "5pwS8Z5yWjBHxckrgbXNkf8euN377TsECf6t7arAygN8QvdsyLHoCFk6rcLriEm2A5fYBQ9GNQRo8DxavMK81dSS"
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
