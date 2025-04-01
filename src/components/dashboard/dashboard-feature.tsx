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
    "53HcE9wrZ69ZBtDPx88EFJb1HUF4t7BY5e5PNSzS59fL91AesW35dtjKsvWEp5NvQbckwib5PdfP7g68ZgexSKWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24wUSmUy5T9fWxGFsojQwP5AomNjxRtP9May3cC83oZABiK8EXn2YhT2a3LoPDiy2KvSrw5PVzfd1PY8MB3V3mgv",
  "key1": "4fscQsvd5x1ygzNNTA4zQv9keBGK4JEKqiGHGQQbZBN2VcsdiASi5dM8TYSHF6rprTLkowfnUfTYL18nwdLmM5i7",
  "key2": "3SDpHShjdbHZqrZEDhbo5ToZA8XT5ovTqiBU5RtCnEyewdkbvA6ygooqmT3aomh79kctfcHmoqHx1UPdxyziYiHq",
  "key3": "qoa6xqXaXC7D8UGk2Jqh4wnDNzgyvC3yGy1wZwabxkCNxaYvuvatAbAGGz67W2biPgKB4Vj8NH2GcWzSA22sn4X",
  "key4": "GAPDfyBr3DnjQhF8KeQUMfNTDRR5krpRM4wAtiLQuLPFZw751nXvJ4m6bCdwTUVCxJ9XKx5vKgbFWqRmgv8474n",
  "key5": "5iekKHtZGxc3nySeg4SDKgYWTUJmtgDBmkVN1NvopYsW59DThqpzyUTfXpmLqXfJ7S5HKjc7ypqTFgpp5DcHmZt2",
  "key6": "33b61V8J6F731gRgWZZ1m7CWfsxaqWbstYUbmTwjnawZ7Yigr6i93uvUsGxz1bqjNjvFur8MNXi8PHUas9wCjAyg",
  "key7": "2ZmSViMhj9jd4nfrqaHWseX3aTSBjih5JSeukFddKwi7gatJukFfTo5wokjTKB5fHiiyCMfArS7jT5QTDwdWroX5",
  "key8": "2pNDXW5Q1jM1vmNUj34M197L8A7xctJmrD4YwYdhuxNJnUJH7duGfMJYYJVYGAUWMLTqKCoQEKzWVxt4gP1RBZyA",
  "key9": "3LiMgWyMskszYBt2iXy1pQGm2zV5xApxZZnczDtwq1tohd5NQtM1tPPhKZZbngqW191DAooEFkJrVMpvNUFUMV3C",
  "key10": "3oyyp9V5ZThq1c4afGjT4ikYGRmBKYsPajB3kBkS4gvnoyMhzoEunXnrbcHocY5AmWKU9qT1RUAHyVrvTx26BDSp",
  "key11": "xXf2caRK7c311uM6L7vVL7xrahijzwKy7jn6kNbMs8izQPnMpkaryivZ6ZnNei2iba3qLNmzx9pPazqEnXPaFHm",
  "key12": "d7aYReFVHPiPBB7b56QhEmT1UTt1j4GxujrdtwpnVxbQvmnjBfmKLWKVXwrsaXGJeXzZmBxi5SphRTjDJqu8vNy",
  "key13": "4byuC2cc1BymmcYPpGJRSM2wU23bGXonkh9qfQ1L2DYFX7KDjiriDfEa3gYDpnUnitJxafGLX1zyLg4suxXnRm7o",
  "key14": "34QBgEdqpjs6uCvp1f5r4V2XjcDY5HG3XiRGz7jADQPH8NzYrPFeaRYGJE4Z4Cpgcmv43SGi9giXP2NQJ1s9dsuf",
  "key15": "62EgkGRo4e16mVMg979BW7s4PPwWyoCMW2ZE5MSkWP1Gdn3Vb8GDJ6njTxUovJaUyzshzXRJrwmP8Ubq4hD6de6A",
  "key16": "SW9C6PqKvoLfjgnsqZUNoQ852ELHuAjy25gKqNSGwvCfWNiSHkSa4zETYJ3xbzC2Ma8k77LKHK8Xp9Y6U5G72Gs",
  "key17": "2HNxoLgXJQy9yguKv2rMrDqREk7kVyjotmUcHfaPBXandLk5VMJBWac81MSb8B1NT9kNa5UpwyixyfRvBR4HGDPQ",
  "key18": "3ud9VGjQAHsgKaAbgyi9Pqk2KkX9Gc7Qjves9sFfQm6Y2Ue3Tsd2JbUkDDDE9rRo5ydHPxKx66hLrmNTZ8PSVG4y",
  "key19": "5ed2LwUR28gxsg6jSLFpPn3Nq71LDbRmBV4AZG5zfqoiksmYLWrpFBXzGsmURvbwuwdtzhvJUNTknwr5a4MEbpta",
  "key20": "5w2mySQNDBX9Cht7AiXHQ4NSNLmJgtVXtdqPEVhDfDUWAzSDV1NArhg5N51YxQdCbXirW4Terhe9vjrnHwWPu7hM",
  "key21": "5GdJzdLi6PnfAoTLQTTkZtuDTYnLCwNdZZFN5JnzyhqnAGAsvRNjUDdaQ4pWKafpBgV1tPRE3bjsm95JkEEKuzL9",
  "key22": "2nHeHd5JV2jzXsMqyiE8Z6PUDVzpQut3Ciiqt7PgtPeBEUpL9eRh6a4PdXSku3ie71TEXJVy1qaBvDGwQrUQpUzY",
  "key23": "42Su7r2MPoJJujRa78XSt7tiqYgV4HXN1U5krdwsxeV7DAxK7jUfwxc5VDcWv3NMKfCYUQipiD2LVJ2yMfKsHb53",
  "key24": "2s9EPFwUhUKhei2gZYxoNB9C2d5PVpWeUJ396VxX4TybQgsmMdpU6DPCgS8q6LajhdFoq7uzwvwJYGg4RFNyvcc",
  "key25": "2mddtpCFMF6H3RYVE6e1Sjdxv48jbSX4wRCGRgoXWeTD9q15mnvdoNwLCShyNZnK3JQabG2tmvQf1GQbTH6DCVgc",
  "key26": "4LX6jGZ5FoU9cnmKfnAY1joqKc8GSo8sSzwyQAGGtaZkevGvTBKp9tdJNA31pyWnrfUEtyXpxd1rBF1qV4x65Wrn",
  "key27": "39Zt4hQiHkoJWHnpUBhfbfxhPH8Tn5rec8A8Sy5katjHedYo4Qe7jBY9dnr8aJfZsctovg1AijNevKnyCociGa9o",
  "key28": "21r8E97nfxHuujjR29NUi4D97nmLK6hu8t2Etc5mRzPTUD14MED1DY179PtHPHaRueHNHVbwbkDF2NvJwiEtvKbY",
  "key29": "5wufboa7qLNvqnrC59acQKHZ2Pakfp5gQKnjtE3X54WzVY9Z4ADBufQRTiLQnx7RwbQyWjFm6EdaazgNkojkJohq",
  "key30": "4M74Zm2ipyK9x48Pep8bCLv7UenP6T3bbzHNKDFmHAT8GbCKwy7mC8NHEUNfDam4HkxWTgx1kQQ27BirkWgj3XL8",
  "key31": "4qH4dvFUBaWX527tFBVnDBrSwmB3cqHp8Wq4QAm8BxFno2EvQz44DiHVCbXAyvGezqVifw1WmSYKs9oiSt14FG6Q",
  "key32": "5QtSaaNwwyPdp2A76zjuJXgaSLfWFRB34AQ3XNzNMd4LktcE1C1j7Yac2NUVwEnw43uWHBvaZX9GYvA3hK7UbCjf",
  "key33": "4oQNdtkB43eSD8L81dgm6p9hFvg5AM2BjGMxGzFvYy8fA9MzN7Nr5GpmCsTfMKGpQhWeiNi2TxvLS4z65mWHPxuz",
  "key34": "5VG8qi7kqLPiFB77xrG1Suh6ZKDwJBCnX4CiGcxPjVhWf6BhUdD1DHYz5kCS9QdndjHNqVtMPLB24UXmmkF76jNw",
  "key35": "5fYoUzcTT4WKXRz5JpsCK1Bkr4jpMbmXy47nnepGRcKZcrNPraj32wcTBFd7mYy68Pvpdd229pBwyYTJAJa5hxcR",
  "key36": "5piKJTJR7GDvgBZ74SdXk8oeS5BzmoQ4Dc6JDXhfCz5QpVgijE6KjQqtS2JqwEts8d2SezkCsnSUNmhAoLWVSWEu",
  "key37": "S5yVBgZJ5Jvba6XsNX7vCwyS45BHWwymr3fGWPT7pduAbUg7zSvzaWoDXDA6Hu9oqRdFkSj85Nh624FXb8FNYzd"
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
