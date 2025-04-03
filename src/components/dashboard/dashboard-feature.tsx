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
    "nVXh3yoKcacLH5MrWQ1uUXzU3SDzZwUaEAG2e7JBydHhpgXRX9i3uLdriHBWXJPmcCzmws44jpRoXGg6C3Z1Bkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDMgdgzks86kbhTEN1BUPcoC2VWwg6d6uNoq1D513eQ1Tc3sDWSi3VkTNhkCCWTVqDAXWD22QHTK2Rc8MSec7sL",
  "key1": "3pj2rVuAvvSi6NWonKTMxjtZobcvvUcdW1HsJe5WfrhjCQrhqHpuPuTRWjT3jdiZaY8qPDzw93gg1Zdjytbe8W6j",
  "key2": "4BqByjxVysiyFHvneU6UkbCUn68GdNBLD5B8N8Y9GHKreR3Q1TJWQX2jwHboy7bV9MVr9463CssaUtdfrtBMoY7",
  "key3": "45A4R2PKAKwEWGSWTdLARV3x2vnQvB5UXoDTWBvw5QYX9U5NLiaUe5PksphaY7dnGn78vcidzprhhtvC4VAPx8fu",
  "key4": "4RvkpnQxGzLE8k38GwH4AxSZx4dFNLZvi72eFzCjCszR96NbgvxczhPP44avs5gFRp3yDfcxvodYQbwRcWaqqs7G",
  "key5": "2LzFCwknF3oKUkzdmvv7STW9zM3HaJJ5Rdaxw1DcrWdWkUYnRM9H88tZyyabPJKgboajftnZsXM6qRNWdPk38LeP",
  "key6": "2uyzKHX78NYzpftHVUGvtnhEuga2c1DpD5XNWdpK9fodaBLxH65j1yiEgPfUVe7RWfmvJRJr4ak4NJQEwroH99Yf",
  "key7": "5bnFa8QnwmCTjd8YnVY6bdnUiPgBVnj8juYzmh3a8pYCQTXpMXLqkq6bdomAZX2r8vK4H8BmWcMfbeBHzSPgT4j9",
  "key8": "2iQTG8MLKdNvw17cQNDEALtRfZfbAx3pL1zehwnjXRypJMCHL9G2sBMoVZU38NTXetax3mB8xMpS3MSLS18zN362",
  "key9": "4ny9gRcuYzVwLZL8LoJ7YZ5VkpzBHainHLUxYvvhqFm3WyEnB3kMjj5xWdvpS3n8FXhAtjLHaxVzskYm3aGKmvWC",
  "key10": "3PisfNXWY4mh3kzVJMrry9jmXhdCt2kVuC6MFmxymJmpjK8AVtfpnuz1eg6ku5g2p64uLwCCVRzBngSE2egiE7Vv",
  "key11": "Ygt31qS2CN9E2pgwS6HHoTppiw7vFH5VBN3Gurmx4fjZspfjqkGzxGpe2VxifCvWxTmSWk8QjajzruNgbvDwFjp",
  "key12": "5bYNgw9ggdA73tfbeyghQyDrq4BCEvqV7m3vsPqtQmCVXr1jKdeyQjtsXdZJrpuqHcLennndvvjTL5Q3Vto3nKFB",
  "key13": "zHMd7cMxtMZZ4aEPq78FgrYk71gsNxg2gL1GfZwbLtK9xuWhYJbVRtejcPdCP5gm31PuFf7ajbM5m8cvVfEhVPZ",
  "key14": "5CZciB7N9zFtGe4TT2HoSFmTKdjfH5SkEaHyJ83uRMmzNGZmFDdV9nzvaeNMtCX6wUVxnWGjWcZAdscJsgZpgmpE",
  "key15": "586MTA7EcjQp687XBZy4G6fhhUzcqqix8ELCbCnb5jYVfkLvAbo9Moujrc2BJe1seoHzAArh1T4SbiD6Xq2nPUNz",
  "key16": "2CR17JftJNTATKqpEqvHUAdcu6yvZ8YPP58duDuCu92o6NfUT6hbfAJw8abHwBmoybpqnWEtvHBxR8S3HnExctAM",
  "key17": "5csXpX8e6fTZmajyBe2CgxQ9X8iWaBcm5y83FtyinVBn4iRoguvTQV9HvQuKyM7Gp6CX8jf6yeaBmYA5QEH8XZhN",
  "key18": "27nFB7r2Zrxd6ALF9vXx9CmWXnJ2ueArR9YezPhRik7jsY4SwaZEnU7uEDqa4DAxy3yuoRUwnktaBqRNdDPVqaPu",
  "key19": "hvUTEdJxkP4y1Hpr5i7RwJmgNGu8wuknmsgHSfciJisKdxoSvRmLYQnQbpxMKYPmt6HwuabDKi9k4oWGwGw3cGS",
  "key20": "2T4wWjbroCvm4Ydoy5zXHR6uP7iheGy51SmrFCdeWQ5uwc9Yyk75ADAyV564kb1KBZ7iSUmzXvNPuf65ocoJeYzh",
  "key21": "5GhWo6VaRKjicNiQXqFpqLyzd2zAGh1aoHNRhRSREybF4cMQa98BYuT7vcP7gTJoaef2zREi3VWfba94np6nkTRH",
  "key22": "ZhT53tsdGdQRhAtAJcwjEuNVFn9Q2vtpWzcaAuMmrdiJu88xtRxBTNfM2GKKAfqjaBZfL3w5J4AoSCYwcFqu2xu",
  "key23": "41UhB72xrwmqpvTPN8S6XDdUKkA6CQkLcnuSJprjTzzYxezducM6GvznevtWyj4Bxkr8QXcBTXfqfY4pxCrvJQDG",
  "key24": "8KnDRZ6DTn7oin374FSQBsUXaNNQUaLCMgz65CCwn8KNejs3ZiaRWfx9C5MihJoeMo44kV1zEVGd5uuKpNF2KLU",
  "key25": "FSuabQ3MvhpJMeQEgzi6uUBNgzk8AZNcm3FvXiizKctP1wbd15LRPbUakospPKRvPMjsYKttEa861jXijrAQVYd",
  "key26": "638x422ffwduiVMUw1KPbT5WLtaXpmk8QcJX6rXTSpDr22aFfrS2zPuLVBpZ9zx1Kgneu5wZHd4oCWcKqxyksSC",
  "key27": "2Bp694TC2M9Z4P7xNie1AMQnJBPKZALUJ8mh9Kr9kVqAxTHm16zsRQPKVKMc9UGsdhDpxQt8LRvZcWnk6UuE4aQ6"
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
