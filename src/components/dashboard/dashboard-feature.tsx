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
    "2cqSgRJWPhdhqFahsthW8b1pqNwex8JUsLyw4dbHVrTC2rGnqaP2tTadCppk2cjNfB8VATz3eoMCVdXbtNMHoy9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZzMjSD8y7Bz9ivPtM6VYxjD9utBCf7tHFMYD7L5n9eRwv6UDJkwHdd963PH8RdzAYT8XKDEDwCB49uxG1JLr6pb",
  "key1": "64oW9QVP5xYf5o5YKuKjAEnVXfiZiTq8z7U7RdXAfdoJGkEpGp6UCpWS2GEjbNkb66vsmgZEkBsjPrXH5BNHV45K",
  "key2": "3RAZ74QeH6MHR1nDxdweykbTGHpVA15dmQzgbArTLnfSzLjajzkC5n55Tee7EAnvcioaaBaBsXgQKbmGZ8Hi7bfm",
  "key3": "4s3BuChsHMacS85nAMMb8JFTTXhCwbLYs3Vi1BnXuq2w8LPp1xh9ZDPiuSoKLCfWjwZYAZ8VMWsmpTVvZrzQgmPY",
  "key4": "3Fk5csnfHjckwMciXYsUdD4DJPXr5QZFY8CCsChqkMTvgHuMqzx4HtyYeGT1Sz2Mpid7jmYkbhg2gFKDywrfgWV9",
  "key5": "4g4wrefAFUumrmuzAmAU9Gtjm9GySBXjVBMxsdou7iW7GfnjJsYZkenqLTv3Ft8vWqoKNVxbP6rn4eUefsDSF3eX",
  "key6": "4UyCDj1Z1NYFHqr9jDUUnKTw5UsJ7kF12cYZZTZdiDiZ3CBd8WymMvHDeW31SmT3GR7JgA3SStXjSkJbQakLjJ3k",
  "key7": "3uNjTifNXk3FFdj8Gn6GSeqbNS5TDY5ZcHbb75A34eSGgveCsbXfHgBWqMVeqZpweTn9qVCd24pmqh2sBctQpaW9",
  "key8": "5XcVEt7BJ5DpS19M4AAkR8FasWCVPA4wQsKrX6vbEf6vR5DDGi92K62Gi9jzGDNwLX7ApckcgLBoKTXFK8QcsXxG",
  "key9": "5NUmv8YDgF3Gwj96fJZsUhrESGW81RUuE4ySGGkC7Ua4bhx4RnreB59P21xpeBPFf6S85SKJkR5HyWgWJVZZrDRk",
  "key10": "4fHbyDztH24RuPEq7E4QEpkrr7vX4RjK1MxyY4HcjzUet4rdxDQbN5MhAkWoc88vggXD2RwKSdTZTb4ga1J1TWC7",
  "key11": "5tXiuHrQ1bPjBsXQX3E7tfgKpLpubgoXEu1RTJqZfi7HRgwWr2JLNXcvuikzoH395yQP5FFeUKKrgZEGV7rv8o72",
  "key12": "Mdjfxsu6UHopn2AHUqjQ8BGo8ZRm1SM8jZeZcR4DJqSm6Ah6eT6YLZ1K19daN2a7Vn5KYt4y2k1F7C2aTCYPeCm",
  "key13": "3TRSzyR2maw1CTnY8ndVoNhdtW3CVRcZUwApeuC1t19Bh8qpNx2bGyeQ784YXKtcYficurULymqNKdgdexrmhCKd",
  "key14": "5vZjKaZt8trWtbPMicXoHNXURTjVeC6qVgRVk5HrKp9waa8V8dwSnHUCSTLD6dX1Rf99atSJE2vQJhqBUJAK3LKy",
  "key15": "hECv9khgswMJGJkqQ2u9XAHaFJESpfsg8cGnxCFVWY7xxRdw4vYJFKFzypqiYMmj4Rut6e1a5wad8fCQ6RNHMvM",
  "key16": "5zng6fGqN8NxvpVmBr2buZjMfxdEWzjxqJJxopkxeJEWtuX48pzfrZwp5o923ywDpznWgRZFvyrBkkinzTAwABfj",
  "key17": "S5gKrg2ViAbwA4NcvW91XBJScExaGwXV1qXf9WkDo4E1QJQbKcu7pmGN9FMvQaphRjeVqsj8h6gTC96wDKYZX4E",
  "key18": "3pu6dBrFQP4McmVkNLh5BcbSEoQJLZsQFweCVrEsdpkNGKkgRi6Xm6NrRFET7chT2D5Khn1yRATVvHqexR8LxLGL",
  "key19": "4LSEqXYGW26i6MEpdRPEMN1gJSf8xra1aW2AzAfX33s2iwRNGfgpsgWiKUpZeCcjZJNC6nmFKTf6EG62k1LZc3LW",
  "key20": "3W2yDSsi9xTUcBgN6EvhCzNcPRmrcYEfs8xzi8pWKBT6r9tg6QPbXupiMpBC9upQG1cHpRWHwjsB74tamqGNV1cb",
  "key21": "5bNvpXRFbx3KaH79Eo41KZevFiBEyrkF2444HLbpNf4RDRSUnrbg9EZS9xM7UXxrZEZ6p3xSZuV3cxSwovELvTtd",
  "key22": "nvURhvSy5yiBe3Q7Zc2ZqzP5k7xr9atdUSVxjnKXYHVWWbE3gCWGD7KN7U4C5xoT6CyKf1uPbJssBZNCu9suvo4",
  "key23": "63mNfVC5etLXG64wR82rKGH81t8CVdzyv56P6PUpJiupmR9NyLbbywAumJ9PAXDcotaoU7NHQAwYHowpbHGGp7T1",
  "key24": "AfHC6WB5PsHa48dEEYvJBTxACnYU4TCpF44qMBiw7tPPRgj96yxAUbZf8xyXrQbqNX3gfRxBn2vBjPiSPFr5Qf3",
  "key25": "4vAbepWuYxH8r59YVKNcxTEGuLcdZjbMK5WRi1Ub6stKd6ZVE7pwGhTbe3P8CvuVNQyvukizF3TvakLFYrWJcoi4",
  "key26": "HRCwoiNUYt53qQr2wEuXzitp2rGsfRJRSLcS3niVnGF7FAikJMqj3FTJW8Jyfc2vQcX9gGjsDEnK4GFnyW5JdgY",
  "key27": "dZUs3KoNgRHcfJHMMEjrSQWw9WpNdYphV8DxfpXguU24aThvVZBDxpJ63SuFgXzxrkVREba6rrRPPpRXKm9ScyM",
  "key28": "2xyBy1KCDc3RHK7sUPXHuZHdvbhiPbvvNga3szJAtNQW5aGSowQBMFJiaGtJyrELhb9afjNjFcfSF9ori1VoiDCV",
  "key29": "5XgmM68VhrrDFrf9Z4u9na6bmbVERU88aJKmnbqjRT86koosABPmiQkyvx5CLL4NGWcwdnJDAjDdMGB8yEBASiWq",
  "key30": "5nCLNUo8DoRscYrxjBQcN63DDBS7qSfETpiQvYLjJJqrj4wRzoqSQeGTkwpEQqidpddSqFxC5mUpDcb1M6HN81Eo",
  "key31": "mAzJipgiLzPT9cuT5Pgo31Dxk3EHXXjUoqi2HmW1a6fwfeoqkmEPBKNCD43VdrJXaNuRgYEwBzF9R83dEFb1Xpm",
  "key32": "67mZyWirMjbLpSmxViDocJmAEiyTDiixbczSsnRy8y9NdWh3cPu3wgwqLnkry4rUcWv3sCBWGF1aqa3yAnwMT9m",
  "key33": "5T1puA4bPF8ENVdcesDbU9o8Mop5x3z3APwm1D6KosQ7xinCMQNYXy9y8pyyfAtbhYpfGnQBJL5FXkn7Z3ZaikSf",
  "key34": "iDb6JmfjdEcVJtFsCk4UbRQ5vpCX2qabHWSzRcs4ZVG2UNrPEAiLUsy3qFbAw9c1hCTNHofUqZjBqur1vh4kKHE",
  "key35": "3yNPFtdTDVxBKsZE49DcJTVmyMDe6tTxWfd8QFawruTLDnMcJHtHFLG6BUNtdkGum8ecqqhsMHkBHT2zzX3Wmfrp",
  "key36": "3Sqqie6hm7sbgdmQPyL72RV12xcbv3P3D7uFrbuXHftXADfT8rJzi8Pzi6yfK7a6kDX6BCQ8J7DKhv4QCyUuQMBn",
  "key37": "2GKrC9oUNePtY7hV5rjKh6LoubnSthmzJtzuyM775nnDF2xAQFksoPpvm3vmnqW31FKzBLJfTmvjKC6uB4fAzdEC",
  "key38": "4VFzD35u69ZusLGu24Azhn5y9LYz2wsjeyJ4hHW1Z8x66Sr5Zx1aCsi23AhZGwNQo7aLdWJtWN2Umdce5z5r1PoE",
  "key39": "2KfJ19FYSZaEo1wY8AVnkCZiguokKAuk5LyVwLJMyJDbB45b1T49zZR4W2EueM46rse7bMsyCQjt64m8hCVtbmh3"
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
