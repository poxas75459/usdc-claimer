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
    "4ZJN8pCo4CZesdSAhJFzT43RxxiVWYUes37X4662VM27Pc2kYrRidxkffzy8j3r3AvcUrRghdKxmHSxdLmuh9TfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDwhT13btVWNCsTAPQPxwHHRMrXN4qwZUQkvUCEmDWCX2agGDGduvMj69dr674bsmfa7angZmfWvtdUyMsrXVNS",
  "key1": "5tZno6tQEizYFfzwpHLkqauQaejLuxqCLvBUNKbTZ58eygocq7EPyiYSuvDVZrPVGTbs8izowiqYbfaevUnSFqDs",
  "key2": "5QLPJpbxDLbBhFnfDCTQ7SJCW1CfoZLwWdYJB76XhjWYpgGicKThfhWU7Q6uFd7HFox9Dm8mx9nccYKyQf1NNgyz",
  "key3": "2hnLgyzMQvxHZwJ77my4V7yJ8HDGpZKZ9G1xTGXu2LXrJtheHT8octHofwHca91jBnNqxH1AWGh9NVMYdAWHNvgo",
  "key4": "fQkw3TLkMS7H8Wy23vVXiKGQEwS2NA9TmC72nn81euwxKBL25n2rfTLgHh9trLAgtFuX9dc26RXRqsrytFGYRty",
  "key5": "4QwfRZRFr12aUNGANUzo1JAdDtH1pWxFt2LSd26yqD4noxcbYsn3FjsZWSxhqCfeJbrxP2xToKQSg2XbDijqxagh",
  "key6": "725M91UpfAiBaj4PuN1NZQfBkoBhukrEfuU81Vq1Vk1Jh7Kji4gyoTfUb27D4dSYRLckm55ACWzMetbT24pHqU3",
  "key7": "53aveJzDVixt2nuSkqkgQc6Y12zKxWDFu6F9k7BouyxEaMNsXj1DgEyWmkGtY3RmA83Jd6HvVu8quu8TN2t7UVrH",
  "key8": "5qyPpCmCeZ5ATfynA5zYTgkzN3eVPKuwGa49bA4CTbBtcMijGSZs2YYNcWKFRSAUeJwtEymjBusKgPZpk5KXV1sY",
  "key9": "3YJGpCuUeETc89mvUbA3GiDNWfqdSDYXDtX5mfrMQ9F3smG1SDeZQLutVM37SqYnHc8v1wb4hPAJzPTUrjB62HvJ",
  "key10": "4smP18kibje1cmyjzJDKbtNzi2R4W2VJG1f3aGRosMwRHWEUFzga8fwQuxMwoYgiogoRL6f2kTEj1CLSsDc3Yg8h",
  "key11": "33MUmN7gC2PxahtPGm8jBYsUp5eSLa4m27FpVkKuR8ZSvcVcLEMpNdsyiMZaDTcZs2vUVyktrHmprjgdkc7BwXgv",
  "key12": "3abfY2xfGZz9Uw22ngaXH5PDXBCcndCKbYGM5nAmDK57jf1GHdN657rcqMcU5RMQpxRBePW4XsiJaHQ936P8wJbi",
  "key13": "Ewz6GM9Yhtz2zE9osWuZNvmWJpgLznWWGTfFY57uwVGaL5EsC2Q6fNfo1zoiGjhCGC8HGYApuiZNDQ4xsUmbkEZ",
  "key14": "5AqCxyU1r3HmQ4Qtv7264DkHCDrWFwWzPY5Wcam1Se3VGo4qF7MAeC3BskCetkNCNCUVundtw8DqdqMBr1ZFpn5d",
  "key15": "677WWypJn2htLYauBwxx1tr3qESDtYB2zVsBEmN3iwcZ54HUh8UoTQKbDFzT2xv4fJTpQotsMejYDJsxJCtwKzhS",
  "key16": "62LL31mTS9hyP57Pve324kTuXHPKRi4EqeLym5iucsXEy9cd52QUAzbj4mJoj5BQMsTk8HwWh1W4p4yvCgbRY7ss",
  "key17": "4HuBwH1nM2BKUTiK1v2HeSkiuRH9MCd3dD7FPUeZphxd42i6hsnzivaKfUUe13EQuAQYgjL9LRRDkbs5X95c5V9u",
  "key18": "THwRA9CaudWA8UqnsLRcg3YoRFvk4PQoGqpQB6SKAJvPgZhb1HykavBoUp8CrBrnLiS7yMt84akbARsfE6knNve",
  "key19": "mYpicGVyTvyPCWzRaodxWnw5KHWByYui22p4gASRHRgmGSW2Db7HYS8xistGZaf1B4Exo42RmFAoLiUkC3rqmYe",
  "key20": "rboCBXo71ZsZdnr1pLGV9ntdYYAPokvMFvPiFizNu19AjH7KP8rqBeusDWZV6coNpdS8Az8VBQXRuPy8iuAB981",
  "key21": "5T5ixPCGMjDswtuTuMTtfKiFss3C4q4N5rPrQg6w7nBycbpxYhrno2mVUkZ3n5Asn2w3Jdmnm7j55ceNz9B5yNZJ",
  "key22": "2J5JMn5FmuFuSEsN82iuSsdbU1FBorEj4ZoqdHoVy6VcfcoVUm9eEfVkD8kFHQKDb2rM4HyaHm8xvoLVAmQGjRDm",
  "key23": "5NkxsWBvbkT2RkigWZaYeSuaiWH23djnEVunUTwPGfrAKqUNeXQBPhoZGehfU7vKs4UnVJ2hqjyMn8AsvQ9q29R",
  "key24": "UDY2QWfJDFyt7JHpAdUKPcAuQuc58aPEMkFBLeJfS1SiZKSE1gxkD7z9e5GuWr6y1XFw5UBYLyMxncrjnsyDAou",
  "key25": "4vb6dGHGfLwTYfmYXoYfrUeK6VoRPVEJNC3g1AicZ3dcSZu77haAyz4cJbBtxC7u49yBapxjnusPrP6wb4EUraXb",
  "key26": "4y7rwpefdzfvekutbU5JLySP3vv7hE26aN688UtRRneBRWHPVTGWMW2cX9u55Z7DmiDqHw5vEdQCWzqBgEDPqBJy",
  "key27": "pSvhNuW2WGHUmRsSesYuRYTCayegoQ3KNFHGBJfGLZj14qftT3iX1Lmf5vNSFKoeMTR6mdY4Sj7pYuGyFJrMMzc",
  "key28": "5XGJwJHSzXe5F9NdBqf1wzpmeXeKAwG3vT7YLokWomsLvGJhULALVWgwXEejSfWWVyMgTDCSnonZbjRhhCYJj5Yw",
  "key29": "mZkX2JLmRndifX6CPbSjhPAX9A8BcHEZiHxraRyQYJyPXisX4Ncf2HVF5PHKNqsnvH7yeBn52CKN2grF6b4TScJ",
  "key30": "3Zn24Rte3AmyTdgHewVByxUy1bDo7AStcx16FWRuJR4jnTb9B9PznXwVoY9ctu9r1qUZsVad2Xv2rxa1evUGuHKu",
  "key31": "4xLGCVWTaf92h5dD2D85FaiW66YyzyFJ8YrLNQfM65gqwSbm7a6i76fuN8Q4tg4w25qaRkbbZ6tm1d1LT7trqDZa",
  "key32": "5ZvZmtatdcrwkP9oVyszoisCK2RFTsosoX6tBaGx3u6vaTdw2Yp5vvyZe6agSx5HrMkm5zCSkuaxSXLp3FVpjcNF",
  "key33": "9y9A3KTXmLYHi5pLjYEVZcKiTspT8Djt6dnzkVhBUXuydQDUFqJ2rumsYAwvgf78LVZqWdTxmjTUxkBaWnSAwfy",
  "key34": "MzAUVNLXAroiKVQZsHtptTK2WxZB9yVSTfJwcVoKZTDAQmKvnbFdFs7eRMkYxWRm54cozKKyfsyZDYFBZz5hSqd",
  "key35": "3qwqbpt7oxSptUZ6EaEUaXdXtnm3qehN9NAgtygYeiCFCkcs9p8CbTQp4X77iBgNUe81vz6tacP5qZoZRvQqKvNC",
  "key36": "4CSzRJgkSDmagLbfEp8Cw1GXNDPvJdqDHQ5yLGDXfAb8Am9buCZhcTXaC1rMntVRzq6WpzTaGzt5kTKoGRM2G152",
  "key37": "4cUMzTyBDycTEMA4MBPwnsWqGD4WkqDk1XMSzX8iddHYquuzgsExbeUE2EUrG3JBi3fkQQYzp2j2bFNGapShBC28",
  "key38": "4YS7hkN2Le15AEmRy2HMnZ6RCGyqxVkx1bh2fKzhzcJN7jyeN1QQFsNHdYujReisWoeMtjNTguhgztK6Vb1HwzUr",
  "key39": "5Ls9Z58XbGSYmpjonRRUYcgTGgP8MEvv1iNZkijMtESkgHHKBA3RytMGvyJAkjR3UwuJBC6yXETRPyCD4UVWw6gj"
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
