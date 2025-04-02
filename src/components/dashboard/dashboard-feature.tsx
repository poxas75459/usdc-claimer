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
    "5oRso1QrRP6uKotvUvrVV8wYiLQiF6Qa7pstpZNzbYGvVudaqiPLJ4RM7FETujZ2w13PZYuyHoQy9rGyPZjjG7ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMHLYgynpZAbWMDymNsVBZ3jw7TFY7DsA8LxwVggtCxLAUoXMBQJXxjVB7rr3Ac3QALsGJTgNP4HHEdqFqua8ZS",
  "key1": "Azch7R7Y5mPwCnDfVi84SnrLVNkBXtas5XqBxbxCpqSkrftpVqSdov68RmxX5NWxSheU5zLuYZKVoZB9BXHNZVf",
  "key2": "bTgMsDccPiNSSmP4gHLREZVwVY3RmozKZd9ih76yLV9dMcazbRNNxG4m23X3Aj855FuqZmKUDvWPJr33ihC6d9r",
  "key3": "2oZePhDCMZaN5znV4pQfSYancmct3ggp3qtouWLq8TYavDPPzP5xW2T4yEY4PUzYfVmCHYWj4K79PEjHAXCE4Z3",
  "key4": "gFTVUN5jdvmaL1BbsAjovsF8UWsdXNbhstgvjMaBjQ46wpjb4W22oeSLxzLApHoM8ZvPmjfSLdfezaK4aiUieqk",
  "key5": "2bzWzZ7f4iSveAhLwvPkBW2UQxRh1CZdjWx6SrFL1yHZ5YqZkAPY3NDnYTRjDrnhKucuF2nAyi36KRWsQu7bMhk7",
  "key6": "3m6d3DC69G6uyrPvugzFWuUkCy54kxcm8nJNskfNvv2mAwarR4DKDJXm5JYGDYeYWmMhkwVigexAJPinPvHpE1U",
  "key7": "321GwPLxV798WVxwXqM8RsTszHcqKTfy8UQxsomSxiKudaopjt1sqVHPrRX8DvwFDkdgnsTGS3iG6Gu2acFnp4ao",
  "key8": "3zkQiMQ3LTNGuGGJDx8DpxZk2Xs32UkAWYdVrHfexNuyKtUdA4w4E5XEUAWXbfSFSnybCEXnBEc2b2tw4MoR9xNc",
  "key9": "4zhCj3Z4TGVFLEEwrAo5T23uErcTX8JrfGR4dfenPMd6eJQ92ppehkXNFhj5G4nbxcwX6DSF38T3qbJMYfEN3rj4",
  "key10": "qwxbFrQ2x24SyXQZ4TqNPdAvfvw1gPn28Q1TZa7m5eskr3oDqhoeJSC9JK9t9AzikD3kjuF6z9n9G7xQr4knkXk",
  "key11": "7BUHFMEP63bwaCuNK7qdb3aJgAwjZSYSc3RzTmrs6XBP44VSccjqNw6Mj8P8iRGupthjaQBHjoxJdWquKvuLfmL",
  "key12": "5pNeM2H5aBCqKasXpztHzMf15ZQskdwyCBArAKL5C5TXBD1rhS3ivm3mUp6uLpouGZchNtoiY9GGdYQ5zGndNLce",
  "key13": "5XyUfzEeCPRSDRpYLBLknMHShj8nHB1UozRsdAc3qnayQE4UAFRaurX8Nrtukq8ovFrkGP1DNxF6oWUNM78s1t86",
  "key14": "3axyX7EXf9m2FSzZyckPi4dC3Eyyb1YzWZgCwDJxLB883QLGziFgnQ23bwWcq5msABzev2Th3GZtvdfGrRKMoFx9",
  "key15": "37Kk5iQDTcgtcvN9ByBgw3kr9S631jLjP6RX325P92AqWaDvj5L73fXtttxvquoNQLffFzFUhwh4rXEmA6etwR1p",
  "key16": "kgoKB5CYnwETUBExcGuiZxcufXtM1eYZZbUZrZWBjFy7jFTKZHmemYukZj5Zfc7teQRgqEK3gXjS4gGcMZ3889K",
  "key17": "65GZANPQBZ476HaAc57qmZkrAbemyR35PTRDS86ZhMxNtzYZ9mbJe561Vk8D4HsjGXzyHbBRk2q6zoVWu9tRKYAp",
  "key18": "2xTiBKKLvXbHJZeXRvEDuqJpQNs7xo5hYLKLzPB158bdTAqcWgQzPeCgAeJF8W8J2NfdjLt1VqsbXBPdeu7MdxTB",
  "key19": "4mSqjVdbsSLYLCggaLikCy2vF5ggvQU6xi6LQhrfSeLYKRiiqeevsX5cg3r7vWCk8mLvkDD2WSWLmDNiNkSwEoci",
  "key20": "vWi5byZoJaw3jqaNCktTJnV7UQnYtHUG6XV3iXPTFKz7GHpTTdAkg7wbwEhTELhRtWDenvVgXExL9dcYa3kLxKr",
  "key21": "3Sgg8reKhkNRoJZvCDoajhZuGoxBFQQZpNGcWGLBD9DrYZsCTaw5FhynQKyCUYaoTbzkxx8o8ysmZGch6pPQKp73",
  "key22": "biwZzRTXVceLxFkwr4CLBYj3fMgudL3cApcRrKAhoXvsonimebsfabdTUjAP2gCxqnhk3SWLS3W7MAr4gzxcPVr",
  "key23": "4JVxQ2FRxfMQXsS7u5qBqsPaKTnwVxGGw6521jy4xiw6BEX9xWcqnZnRPUGYvg3y234A8cJ1fBBc6Ch8DrD9ja7b",
  "key24": "4H1QiAwkPhcJXfurzz2JFh9TH6yJ4RHkeyuQ5shiYLPT1gD7KvzmT8afynWFKbPRxLCwgU8VQkA8V4Vx5TTrEwgx",
  "key25": "4gNGY6Rm1HNhqNXTVKZLuwHy7WcmLhubwVTTUp9PCmp4mipqQvD2gykyRM9RnL6WhFiUonbtE3oL53fz6F6L9oAV",
  "key26": "18sGmZPnZWhVYnyAFxuwUZ7xQ2VFQjPQPFCygHHHPFkRcz9chLAVoUivS8odCKBdrDkYNcgpLEfNzftZB6ipyjs",
  "key27": "3cM4v3rjD6KjUZNHjEs9Dv5k5J7fraMBHxbTaxhowuZqYyaXUTCqvY4r6uwfgHhDpB9ts7z8GUz4KKKqpHM2Ydns",
  "key28": "AMMQ6ab2ih5Z6AHQXgJMT5oG3QmHKnsZMNAjLrEmUHgjVEZMyeY5qFqLdqc98YysYtA4DBSdnZjVHAPr8EQtMbP",
  "key29": "4orycvoP8oMKbeWcqfNFBj8X82WYLAeebrpQATTrbWQXpeiYp4VemJqKjQAwjzK1cc9asCrPFCeN4AYihp5pktiC",
  "key30": "5mPkrhoMJVr4YXfCYYkJPPE3sdtjXemSWXhXmZrecGCNY1WWmDt6s7UqWuvEMBe1TW146YP1DaN5eAjMp168Mbzw",
  "key31": "2iQdjn7tuCzpRfu5iKP8UBywrsrsak5EGjopJ2X25bV4UQVbC5VtKJ6kfGSkmLKg1orKe7QbbkijmikWxnCt5sKJ",
  "key32": "5D5n2tSawLo56DhPJo4Wj92PhRKFMNvR5Fp8Kj36AL573NoVxoLVzGKBnvwhPrWVCvg9pPv8XsQeXu21r6HUBEop",
  "key33": "4nncozm53PhBhqZvJFjFAP5wc1bhMFFaUKcvYWtkw1Czw8XFguGEgztM8pujc2HLUJZ9WoLvB1FDjrJcc3gakZrS",
  "key34": "4x5aA9Lo18UwWBXoQt8evERMxiRJDHYG6zpaqba8KuMgAK6F6EWnRMv5uCdox7GV1yhpDwJ7mDNm4XGyun8ktMC8",
  "key35": "5zHrA4uWztFUmJXLE9Ddiu6YZwgSGg1gaBc9Wq2bbMtnw63oappHjGCg9HgE1YCLNS5Ku23VKLhtE1Kt9wyW5ooQ",
  "key36": "4EkdtqNUJvfTE4kX1xd1fdEy88yjuGmhBin3ZrREa29SXBuwTheLEGnSNgKEYf6C3f5rKCJvQSpSkqTK3QD8FuJJ",
  "key37": "5dkhm46f3KzEgxbXM6jtEtGov2DFQECqqNJnwUXHsyBBYvUUwbbcvLcMDFAiur8mzg2skpZKmbgSwwq9weC4K3Ls",
  "key38": "4o2wrsXPkjr6bh9KTAd6WNrNSDKWfWues5HxBjd8vKrMCBRCg8JRpmxLiArQ2y9SrWukDApvRVTz5Ed2KAN86yLm",
  "key39": "3xeSkBGAC8ZNLyjNhDooGMsdJWQsBTZpwDunhabzbktCpYSd1egCRkj3zfryHuUfnqmbCmu6kgGF2MEzKSsXobwv",
  "key40": "2LJ9tnkcKc9RE1W5N4u1reZ3HHpVc6ZneL37EHxTyxvtuZugKeEqgqJKUh2H3DQnyd7KNFUZnmvchRVmErTxg6mz",
  "key41": "67hYAKYG6NLUwsBwuA2V5Uu8DTJWSpRV6kTedvPEBGKCxVCtv9UAYXcmub33PFPaEHPmkHAQptgJymRZrfHcPf96",
  "key42": "5uuMKV2yxmf7h1uC5Ut9JqAGoR6dZWeAzuGaAvw9wgipxcjQRZpMXRMyPTTfW2Qkt3froW5vrhByV8J34wFDUYG8"
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
