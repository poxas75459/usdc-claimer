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
    "5babF8rpV6Vjd8QfynwVNVzMHXAPZUhNAqmfTi3Kq7dFxvnoZS7JiggxXjKrKCohxgcnjkb2uiWnrCnAUPMraGjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wkyzv7twGewX9bzmc8imoFdv4bQLBWiCqJf2bTwxZxLihowsJLMXZNbPDZ3KSthYVBqXuf3VTWg7hiPJ72DZLx1",
  "key1": "29xVYuv8KjHtA1PrQ4DWEfVSgQC8NLTqVWfYy2vCJk18pHyhT9swEsS2oesEpR6w43PgayadVcNdvJqXojeX3GSQ",
  "key2": "5RdxhQtBYuKmc1FzEziH6sAFGJaVHPtu3Gpmowem3KDrAcvfxRof75BD2x4nxq5MpPhKUHkaXKP7At5Dk9WANaut",
  "key3": "b3oZ2e49HZyge6dwLoZFuNeekte2y69qayE72d3m6GdJBgbVUWxArCVRhbs7iQo5mzBNzPnwmqVQn9ati26G9fF",
  "key4": "22Xa6GAT7hLLfJEnnkenmrRJUwzvricdrkKUxLLmKYoeT2qJKBTsa4SPKjs3znQm6CZSzCZJD1bRoS83ZrsSRs6E",
  "key5": "5LmysKv9WXMgKhfCStqxv6GKv9uaWgd7t9W1XxdCNzsvMqVFZiGFLiDJ878RsRwYUuNtsF34z9ynHVVmog4isRDo",
  "key6": "4723B3tM6ZLQSd8JVZ2s5NaSJGyMXjXj4kbSumjYVwpEviyHfaNBMX4QNo6bC9sd1NKapHVAyoc6Ynfx9K9v4o2z",
  "key7": "2TZ7gpfsvEguN1SB9DT2XagMu6fDWJN1jhaemUx6WPhzDjqw1ERUJ58Kt1AAt2DdYjfE3LY4oVNCuejiQJ9EEY9T",
  "key8": "4Ziz9YgZXnKT4ofRfkpwwyGBwA98rPqh9SqzrVapP2jwoy4tzGGzVUteHqF2ZFFf6ppk9vUGEuatjVwMd13SUscH",
  "key9": "3bXFd5vMsReXBQsTQyApkwHCPggeCFRici7dv3BprZ5dPqLQtTCcHdC7GdKdBFiafmf7SxoM6SxJthNcNCCoSgYW",
  "key10": "55SaT4VAWjvq2dix92Xtm5kiFQoENwfRGhuTwobqBVwmVjgUd9fr8qjcnKmYQcap61WkKiHPG4jRzqw96FKmGDxg",
  "key11": "28L7vftpXS9N9Lrsw6p4MTrrfYzYdcFo2YDc7wWJKiXv6Nnq764ZEuXqUsU2issKtKbEzCjU29MGMJ9SwqSbX963",
  "key12": "vM1s7x7cXtVo9CYxtB4xo5iSRj93d6ySUyqo3E8JdmMgT8UptjzgYUsHs8dvr5XLxTigS6hHjeZoNDzTN5pT98G",
  "key13": "3v2dc4nmXDKAkzFfxrUVzgEhDi5m8QNaWYt9VmiWx7YRaxAnTZo1imggj492Ym4NiQhmoFZXnFKZNz6LfogECLcT",
  "key14": "3DtxkBPerzqowWBfsBKtABqKdDjC5hsxgGHYVDtN9pQGf1FnzEaudKieiyptRFvdQy4aHAs5Xzh26MaKprJJCfpx",
  "key15": "3u8DwBbG5YTq7zXBijhCjy8PM1JW9yu8UjpvwDAQHG6nBx2tD4BVWgPv2sMphHWX1FsmZGvr9f9H6bJPABoN8Wia",
  "key16": "3Ds9rH5XX1kHXBCErjCMQ2uRcsn4Baome5Sws1wvuZwspL6RDseDLkByqFNCK9JbGaznGYwb8BwRQUiRCFCvXcNk",
  "key17": "5je7fyb6E9AjUkUjkf5xenKacMJJhKZFCX3rU6cDah6MbonBd8biNhRwa7JRPwoaKTE2azVzwfbrirod5ajY8H7w",
  "key18": "5jySzdw8FxMkRMxm1xiQo3Nx3d6CLVyEhoDWMGHdZH5g1vCZLnJze2stiJkc1CcSfsgc1oDmhyojqPXVhKaZSLq9",
  "key19": "65MWvHRUtbP6SuaVou9nrEYHt6C8b1QRqCtZyg9caPmWDKo6Q53XL2N754QXT4BtZ6nY3nS74pfCJicGYwMYPN9t",
  "key20": "3Mw6edKAx2gWu76yMQUa3rVWSjoJLYyFcWnYKGpS7hN9K53ve1qtd6Nhn5itB4S24tT4LTDzs8ZzwaCh8KjxnKdp",
  "key21": "4tC6GTkJfL1wDLzvPWWRc3Me9FzY9BRWi8ZkYLf71M7QhMWEg69mT2NwZNGct5ohG81C6Hc6f61Bda6ApkPnAA18",
  "key22": "3J6HBYLvgwhgcGZpQNjTa4kgrXqMgpx7rF88Bb7BqWWkxNXMpjFEafryKumcCMwwsqpTHHn3dWVW4WREQftBfB5d",
  "key23": "2zFdm7MThkAgxBA4VwDp3Eh2daiWRPUwxLDc2tLGYcvfgbUDGTWBzv918MdLozrG96iRTEhsx6hFWTavncxVndpi",
  "key24": "7sTRUQT5dVyr2n5hN4GLLP5oy1uaE28wwoZGSph7znUhKEX5eCZKrEx1jM1jVoR7C6dQWH5ZG9M3AGmaMbBHrsn",
  "key25": "6363bg4dujrNPtYtbuyeynz1UHxZy8SbPCwaL6sfUYR5bZCgQUKX5tCShJfrCjxpsvE2jLbXpvF3makTaziwziyS",
  "key26": "3H4gzHbHvsSoMaoatNEpPtfyv5z9sx9GVzvX5VJ4LnVu5F2vocy8nZJ2C5nsKQtTbhiiNj7ZRHvd6Dr3hf4aMPhF",
  "key27": "2hPk8Q57vjWg78GB6qKRnL2aAN6GyJVuxfh1ECsmGbqpZsBjqQpsjJuWzPuArSvXVwedt3VnZSj8ihoMhqS6MCXV",
  "key28": "PX6D2J92i9GWtXFoYjveQNxqFTDQrd2wqXVSgJMno88iH38GwQ243pknWH7Qz1avvK5Z4xUKAxUthKHcBuBJhmp",
  "key29": "5ydP8DZfLgMdQPN3Jcf7NdRibnxGxwoZ5nWcRZG1Ph6FJAgMJH251MvJDvY9Ewy9REpg2Aeth77NqaNeTq7hRvek",
  "key30": "2jV1UCuy7vcP2mmdtYyaAB1nrKTqYW9G1PYrFjK786t3BtNGCp8Hat93NBSzcYKcNmw58WjnKPbXmDmsJdxEbr1H",
  "key31": "5SYW7d1LUBvHy9v2yeoaqL72pJcVvW6XHG5R23bdyYsqhFNARjqJemDzwh4q96D6R5eyHh3rZTQoTGw6mvT9Lf3W",
  "key32": "3mictki63kczERA6VqBk9ni4hhjUqZAZRjqqqaGmjWv18WhLSHXMK63z9qrmixtHNUiQoZnbdQ5nRXfS4131448E",
  "key33": "XHNJdVowBxWQQFHnZdCffU1XtTxybzC2R1cXKhSUBNWvDXVXzTetriP1HmS6oTisvNpZj21TbQbGJvjetqHu5Ni",
  "key34": "5648h5qotVV7c9QZ4UW7Z16Qq5HHwU2YK4ypqkx3sSAaM3RNUoHnNLFQLBUmdJempwZXvyZsuEh9tqk1cnTTDW4j",
  "key35": "GUxRBBZrVcMmtKdJXf7Us67xMaFWDR5cSpM6xkgibFAJinj3BSjNnc5GLfCZL1zxRzbXPXRk3fgbNJnrx1mLXGT",
  "key36": "4DrsvsD5jQfE84AAZvZyn7Y2MJNeFJQ9FbCnikuUDQCoPaKDffXLaYeYCzdafE8ZFcNrgAPQrkyVFMvQFHRJ71vc"
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
