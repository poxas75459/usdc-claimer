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
    "44BYxHm5AfBmLihsAG8qra4hunXDnw1LRHBb3NA9jjeUhZE6DdM5eyEsm7BrqXwSVQTbeJsjckYSRjpYuGHiLm9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4d85hPJNxgj9DkAkJd3e1tPF1kJhyaf4nuE9DHj555LHhmSjs4qSHPURcwfWrzD8iYc9ugWXd3A2GSdUqGX4KP",
  "key1": "2NpzjsKpkScix7jb338r3ccWMbLuNMVxdTTFjT8jLkzABxg9vLTtgQYvwUdSRGkkYyNQJSBqL796m6zKwHpB2MyW",
  "key2": "2okphSpNqDQcHDdbfoxuGgzRsSAwkrDSXen12YzuK73mbD4QfizB6VjXp3LUnMQL688EWDYrPQb3NnhQo4aYm3Mb",
  "key3": "5Me53S4LtQWDjbNjzt13kFuBvarJPZkJrADe57rekjFXNYbAUefgNDLS3nWei5JX9YPAYrnzWZbLFZ1NXNPVBfYF",
  "key4": "62NtZFjWEsE22Sw5TtjQxjZGrTQRF7UNXvBQG6WoR7DWZvyRxuDzC8k2W1mYFohfYdTxSiwNMaQswXp3p4PkCK9y",
  "key5": "4b9yjEMRKX4vuLiG2W7m4r195QWvHneZCXxnTksNGaBhC6YqZQhfEtrCXnSz2gpLEn8LoBSizABnx8P7Edpiam8e",
  "key6": "3hNrWJi95GhJC6cK7QbUGZ2ND2Zue93MWwK8up3W2QGuZwViJVPBcFerg8FRUChMn2Y7LuyjwA4dGyHg9CJm8wXY",
  "key7": "eUQCgd7avfk1re4N1m5zqEJfoq1hXX4gY7ZSocpaDYgvDdknHs5JqQcsHNaoBVvRxoKwxR4EqEDJmenh3zneSTm",
  "key8": "2SY4DtT5CgwdyZ8b96mkY9jzSvSdCLhr3nHjM6m8dAu6tYH6PrLYpAoThBD6op5crs9zbFmAwNjqPFEGgKaCZV2b",
  "key9": "2JeMdGzNvA2sbxWaVrVD4MdN2Mc6TBTvvfz8EkECcFxf7ateQPzWmv1A3cGptjoFFpzFpze7ATLNj5QEUWmGyqVY",
  "key10": "3KEodSU1sdZcVqTGji5DDUoD8k69aVgSguUD1AecLnGRASDh3z2C9rnJpogmXqgd77UdFTM2AYWwj3hjcwPXBQbs",
  "key11": "3aXPGbq8YaWxNmTs7uFqnrVz11rDPnFSsr7sZmCbc5BhuKKXNiGfL59rkJ2NUut5vcrSx9ZwGYpXV9zHR4hKLw22",
  "key12": "t8aoz3rJok4Z7dwH2TF15tjHVW86b6Xkvf3ZjYCXwj6cLnQ82C1MGygAugEtaPKhk8297kNiGBwKu4W4d2nfaKu",
  "key13": "5eAsSfJ4zuvu5xuCsy66bw9L2umiZyrdEJbPJ8WJw36J1u7crWa72gWd9bihx8CfubBopr5s9EmQNmghorxJxbiL",
  "key14": "3Cx8fYCFvyJkUde6n4Nu38v5Mw8X5ksjpHUSvpag3u8qDJuyzUVMx6GWXdFvNxNFDCNM97xtsAH7BikvV74d1ZdV",
  "key15": "2jVYF7K8jHNJG84ZhmbVfRgxRtAszTNu81X6dzcnP9vmwETmpxA2V1ViV36z9wEgtCmYLiptbbtm7hUzwysGXcmq",
  "key16": "4e6PPGxFm3sQ8UzYyP4ieob2oVYSbDLWpGdpxrGnV8Rf9cPkbZXLPwsNG2FFvUviuWpL49ogvgEqLdSTRombYsjh",
  "key17": "4qTcJ5XBZrjPthd8Y4c1vYZF664jsJokTVMRqMXppprBKY2Lf9SH4uhnJRDCadoAVCKvoj3zot1wnAQq678wcGt4",
  "key18": "3ZVBC5jF54w3VzcqWn7z3Endqe9UvfKcU5XfQ6KnbNaXBP1g1tNhaRRsyQSVaMDenPrxFHzgi7WcGr6EgKd518TR",
  "key19": "63MGRJxUbnYYL75MQpkwbXPTfqVom2uTerm3jfgPcWRgoroauvRu9p5tHcqPHrzZFonaQL7Fh12QbTFdox5zLDsq",
  "key20": "4nCYNaaSbnJCcUHD5yxephLyq1R17xeEGLATd35meD54rJM4x8TRUGDufY3fUzxdSrXtjZxwHTd55nSgSc3ovHoQ",
  "key21": "1DXWQFora5tVqDUMFdWm81FWSzkvu7BC6QngpyEVuKLJ36SgJ92yKDq8gJALsaTZ3cBokFTipYALpvx1NxRcfw2",
  "key22": "374XDWLrc8dUGPzQreWPDSZSXZq9cMwdsEpW3R9Dk1QFTumadWxczGaLzXYHtrrnWRvnpme9tPR8Esmb3QbMu5mP",
  "key23": "NRDYi7iYS7gDDwrvWnVrcYynQPsKeYH1BGT76qhDPjZMbwjoir8kqEWRSTQ2Vm7xV5MZLSQGsbm2TT2Vwo7zKnS",
  "key24": "Va1EjMUYgYYt2VsHZTNc3UxgMTmZEQUBZzuPYyeQWMxSJ3DCn9AKqPZskt3dViEHqbErrAsCyVwp7x34izjurTj",
  "key25": "4tFkUME3tYRCXUEGhxDe7zgyV5EiCGjFnD8U3PNbLGx67SGMYGv2WZSuGYvz7qUFR2xqRmoiTci1RfNgUAoWG5eD"
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
