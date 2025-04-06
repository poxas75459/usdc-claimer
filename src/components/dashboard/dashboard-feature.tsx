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
    "2oCHGFDcmiAPVgYTXGoFNQTmThbU9CzCftkff27jDiSXGMvgaehvJMxsayZ8v4RECYNofGhBoz1GzGhCG5NgqsDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxudtAX9CkG1MFBVjT4MC46yRsWjDWf48uJFUsYyQkTcg8jGVCsPC7d91uCf3HPQhvWtHq7aNE92k746WH1TrRN",
  "key1": "5jFPGLRjim6zoG74pbLb3hDeYA465vRiMtNy5G5BCn5RBFoGziqN3JGn9wUUgWtyvRz3dBQz9URNH6uQhQV2MXVK",
  "key2": "61HtuLLgWH9dq47u4JaPpZ1n7zv6tsmVBgcNNxtyPvdRzzYnTyGfUtz1i1fKcm1jdRfLNk5p41DX6pdCrgCk49aK",
  "key3": "2uNTMrcp8Nog2dLrzg53t9HJbjJLijREfo1RDaCbSjmCgXSJs4sXnw1jf93abw9hgmuZYwL8Eaf3xXS1tjmoGcZX",
  "key4": "VHB8DeSQV4G1Z8MYe8QCz3Hgjait5b2xfcAhMfVANDSbPes75xX9AFPRZBsiuR8WY1thbe9UsuyVcXkiS53XxmS",
  "key5": "269zB1YfAr9ta9tBMZf5s1zYsRun6Xe84h6ii12upG2ZeGyrLqxEmY2WxzmssV7RT5U1sQ2jWZ4js77PuUNDqWnS",
  "key6": "SWB59haGfCKVFb8cwyWMwS7Jz6W4HKcndwnQF2sg5Xx6tAespna29gPVFRNfbbEAYweVLEzCj9Uy6CgffTfVp59",
  "key7": "tih792B57eB1rQYsSRk12UjUjXthGvE68YQ4zqdEYo1uJDAcJo6Ek1NzsYvXn88883AfC55QBCsDPQ1usMMWi3U",
  "key8": "22PcNK4THSypFCTQLoNjrJzFAcXyHKZECVGnrpvYdKX3MWjpGkq5ktU6cDAed3uye7ysLAoZ9B3vXXgnZbcLjog5",
  "key9": "3gP56e3FnP9AVGWuAXp4uDSGc72bzxBPyXxc4ABTrqyfs2xeJHG8HqY8RJjsFDXLQvNaoUB2X6dFPP1h9Rxq1KVt",
  "key10": "4R4t8TrVSmW2jkL3ejVUWNqCm2oajxu9DUjjQ5oGBSJUXRkqJvpRR5oDbj3CkPMDGeEBs7iuad2mvdVFVZZoaDj3",
  "key11": "2SxjRDde1oZZnWAtCCTCdaUy2G79xM7Q59bN4qpk6ingXVtK4nFBaLsAt4Zshww6JVVq9P6TFkHZ3Wm9W6dDA5j4",
  "key12": "yYMyiCqJ9za2dFZ5yhYS4ines5zD2RMPd9UsVnJvUovEowfK68ivz4uYGLLmX6ZMBLDFNi3L6Vb1vxrAoWGc4Ux",
  "key13": "uU6NQV91NBoYznky9WW5mWdeqAnvF6hYF8MZis7fauoRrygZaoV8GQvb7P5PANRq4SU93z5xrzw35RL2r9YVchT",
  "key14": "5EyGVQ8AT2kZZ5aGPEyCbc4j4RLmkN6gmwaD6EqbF3aKjPvcs49UrEXypU7B2KvgCCPfGNdKJA6qEPtPA4UiQjvB",
  "key15": "57Ew4LRCTLcdgFosKUfepC1fr5zMZSXYVxdvdtyXqVuP5etd3oqNwxby6UqEoKzdscLmeeWyV4wojCDHb6GvTkyG",
  "key16": "2o2Q729UbRHvzPwb4BrX9QqgjbMFrUwypXCSYbiWFnEGabS8jBhwR6fdjSTYyEiM9qZv8VwxcRfNL4MN1UtBcNUy",
  "key17": "4mYkw3HTE7GEvXuyc651Eacgq6pWo7MRSmPrfCg9u2NtjgS2TeqBrWbNrdjWBw8JJLndUFBqZ84Qadc3rqw459rp",
  "key18": "23SJXpmtvGxT5PgbMxBmmNqVHukzFaQNr7WcPUg2eAzRK8tQFzsmcYeCX6BUGzagUsa9GyqvnM2T9yvMrSG3F1zz",
  "key19": "6ZeYZZ9NZAn53C4zSU72E91zHBFrQUqyeiimy5i9zqmHqW6EWMJgNPMfLPtrb67xe6Gu6aP4wBrQPcBY8R2xnti",
  "key20": "29xvaPVjMvL96ZUkG5QgqmU5wR1pG973YPYRi3ZMa1WAPb5q6RX2Dq8RRN6jHdLsmyQdiJ86nhbD95YkhfwJ1V47",
  "key21": "4Uk5fR79MQGW5EFP7WqgwQ3gC3zn4K631w8MbfGjdTzauZB9Jp5kU7XPgirrxRePbieTRHHgDLx1rQgJkrY4THCQ",
  "key22": "oGgWM7AZzUYSYssaak3cax9fs9i4niSytTaiCVqAFnp48T67HrYDWmWu9MrZ7FmFPfEcSWhkSgz5cV6DdVGYE5g",
  "key23": "tzzo23P8y1PjjDU3TTHPLsXjC58U8RBEqvMxZjNz6Te8tV89jzjnJcNM2RynWUS2rx5D5EL5WGFQxpWycvNEvxA",
  "key24": "5YEmiJXsvCaE7UawAnf3DB8fkEt8Ub2fhihEdqsoutVtLbpFDj6tAqeceHJssD3ofEt7ksaMdfjVing3qtuz3Ay",
  "key25": "4bj89vfkEEMDnXYzarHaLXMvVxWr5xUQFNwgbr3EdFpnuomoG8mR8RkPmnPQ4UCsEf1cjudDCCCpi2Mbgjkqty86",
  "key26": "2UuxZwVQ7hddwtYEtDLNuxEMPjiCNBCNiixPgKMEwb8oduhrb8vEE3oK8iWReDQZ3iErUchn523y2jKfbrMTcHrw",
  "key27": "fP8WfcTXS9zazE5jeGyyNHgo8S1Lwn8j2xM6hoJD7hVG63gxjEgveYWtgu6DPX358Pk4gUAVR8AW4pQeRUz7y2F",
  "key28": "1nGtBV3niWDTCeqJoWGs3Lk7FDBqN82YSCFLrzbuBRjVpgHDNmDPGHn75HwVcuPMh15Q7E4DTzv8htTmw9hZyDz",
  "key29": "PYbEpxxSpUtardPPQr6rex9SJLw8TzHmDKz9VMqEXrya5iWmzncZ8UKmRFZP2vEk7QrJzrxW1Zpwrt9bg8YYzQi",
  "key30": "5YzCAAHu5bH4BBYPoSTj8S8cZxf2aDi7UHkTC9ovWXTayWPe4oDwbHExpPRMjMsRnH9B1MqTYcQKZmvMjT94BsYC",
  "key31": "3LedkJejEsosNCocXAhvwAiv2V3iTz5A5Ao6ZqWKAkfohVLjv2Z4JwuYzq9MRF9J1GpZhpxiKmDf7DmbvKPefBbo",
  "key32": "2ounQ4S5VJiZQicnzFtGwnLFDj4jDU6Ut7XnQrXDaN8As57H6GPQrDz5tuvRnTqJMhSaPn4o7nnnyXiM6ajDr9p8",
  "key33": "2vAdtPxZieXpGZHQhnxXZkk7eNQXBwP34w1NcefLU9P387BxKXuhGbWF1JRKukccxZkMBH2MarUETfQLETNQXQVd",
  "key34": "Wr3GTHDP38WnHNidtjmyn7qa9iBEfJkczNhZxx2yCwA2cwm55LREy3HnNHB9Mvj9HG3ZQsKjL5U1tSbwp8F5ifJ",
  "key35": "3aB5qXQ4anWAd5CLDebC4rhFdjXcdLf64LByVYcEGoMuB24oW5TEQLq3JFoC4R5utDqdAcP3xXNpbpsAhqFE8cbP",
  "key36": "45uwoekqFb7ksNGJDH7zNd6Bjdhd5Pgf6mZg3KBLDYDLc8ZaQvwh3PwL3eMi2EJ2eQeS9obWYTE31raTrhUNBJRF",
  "key37": "2NKnsuagz2FwtxRkrECDURFCrCKwzTEM3RoyD3aYegfkq11Gb4hqK8nk4WhnJBGXswwowVUvzXf8GgzYmJpGt4Ya",
  "key38": "4LSh68xzntZpPjGXFjNnqPkhbCMJ42PXuH11gqEfFbev5BP24xHzRCEmG4gKFgz9d6s5W1VP6ugKJ6wm3MGr3yQU",
  "key39": "3CSVMuWcWETWe5qLHv2u6vMDdXqgc5QW2unM15KBQAdduRLvjeGvvFYd7ACjymkdnUc985yvFz85GvkZcywZhGfn",
  "key40": "5Svhy1UA9dd4Ma4dfymENg5nFGiveUWWLSKRpZ5dkZTBMNZ8j35rQVbSaREwZMYz7amHWFg6ysWNYgyhFWnexkSc",
  "key41": "2Y5Qs7eG9KK7sMRjCr8PgUtS69gJRjGhz2fcLGzcaQ9mqmCX5r9TeKn3bdh4NqVnETCHdFHR8GQapCzXnGranR21",
  "key42": "2aGvqxyWih2GFF4bu97dpt5AzpRpwFD1F2ZPCrmzwthYkD7c4L6pn85sUTGmeCKRuTSiB74QQSSJCgb7tk5hit4v",
  "key43": "NwVojt52J8BEJvdPUmJon3mgNvgQtV1NnEtUUvsS1KnkQNhB3Uy9ED71JL6qk5EddC9dPPQSQ1mb4R8kmzzZ72m",
  "key44": "24w4Ru19yyoXB2NAQBwvN2FzLY1SVNVw4NYy7AqQ3mRYJjfMB9VLLUAiz5SVuiUjcjthwKZJH8coYghchAccU1iN"
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
