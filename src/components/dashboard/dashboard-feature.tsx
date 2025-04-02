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
    "324YDpgK51gyTftKvsY4MQgg6EizNrE67NuCW5jJCaPNd5U7jaogUGLeAmb2F4yaCphZ9gmUNYEyPzKfjYk21bgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596s85kQGSXcPRN9CMWJkxB19gy332yfZ79uQhKhPhL5CS5tzUCf6XnoDuhrubREGjD5QFwkNJS7QBSe5n93wgcv",
  "key1": "Hhxb1kHn6qQgrz7DSinjZW5cEhZY9YzaC2vHyo3AZAhatuuPHc1P1HKZg6TtfzFG7mUqvFjwv2RgajuazwNy7kY",
  "key2": "YNkLXsE6h7jokcPfWKALgZAE3rhFHBDZVwChYsaAMX3gqfdnqDSGCeMPF3gUsUs3x9VR2USJTJwmBq54BmpN1zf",
  "key3": "53UqL39cCDdkcPoEWfhVXW4NyQ5txMxniYGwwjX5yJngXzCBsLCJhWBSodUiKXFsAciaYM7pMMK3RgcMftuv9xp",
  "key4": "3jbrRVuzmR58MARkRgTMQt4eq3GNK4UYz12UoDbRm6mKHCYL9cAtjNujZpAnHdCrUWeoPnEV5bSXAS4sbTF1ppzz",
  "key5": "21rAR1QkLGPU7oSWCMbnw3gZTVJwBzV25iKzMSUHhsspozcdKZSwrLLmRQAZKVGxYiJ7Nb1zXHxjPdf9ruvnH8A6",
  "key6": "2gPVKx4VbqSQYS12T381XPejodufPSuZKhRjHPvk6PX2sH4oiGphHYU9nTvPkQ3Ksb6iMU6uVC4NBeEpYeZKXSLa",
  "key7": "63xujoVjwk1oPdKH61ZfyMf8TfqDoyWD5CD3EWHytnMqZjLpaMNdQHgZooPvxhS6onBe8kKino1GxkHyMyD3jfXL",
  "key8": "23vGA49vRQEt8HmHPfNUxZUqHoqG85HnY6Qqy675b4JoytZKkho4p8grttGEVE77X53GLux26WSrN9fVVer1tPD7",
  "key9": "4XXKJ8U7wXiJuVQ9ezXvZraPpBE5wRh3fDS34RxRJhj3uAu9MBLWANuyGi7hQN8gSzeVaHu3CMPy9p1E7Ueb8deC",
  "key10": "5fptrxN5iK8YY5vHQ4LwMxiLFGe2Na42phMvujQ94xEma6Pwb7eoBi8mysezAqLaYN4anRYpacL5DW9JbDQQGapR",
  "key11": "3P2xB5v6Jb3AB7UMKHaYbnd13YwmyEeDNCzzF9QTA8f1wbAt6tQ9tUTodEpKMo6BERnnoMWko4mV6WNNGmRfWFHr",
  "key12": "2Ro3vDpneYGA3tJLhohXTfU8qqitJK5unv7iW33fSQBN2YGE5zxQPNxs8XT5uSpNwAATwSBgqkT3jMGyozcKPxTp",
  "key13": "3qRtTGisKGLxp1VYq6ifhzANtM1wWaLH6hJ62k3ujW4MDDQzr5wPCNr8Um12a59n4jk1A1q3M7MPjLhpBuLbNrmH",
  "key14": "4KUM9CtzAexqgpBpBFgjHzZK7ibwV2NGKsM9YwTQM31Dz92oJN1LTDTrHNUi9Wh3uAeTtkYrZoKrVTT8WNzHjbX6",
  "key15": "3ukHhEx7wMtBdiegHAwymEnha2jpUWHRws61n3zVuBchozz1u6Lmdkx2nNHXziQfk46emP47xdE3Hwao2QHEQq7F",
  "key16": "6YoJSafgHsWa7jzASYGMuRXiSSTX7fBpXyvPbjs6V66qHPcC4vwDsTX8TmdDTg7Np2v9osqrtnmj9dYVBXtSnP1",
  "key17": "3kRP9TqAAYJk15iGXsNGVBRWG2ivvJFDqRSZc11MBDHYh4rsiUVzciQNtqxpV6JePmPB5t7FpVNmHo1tuj7zczGP",
  "key18": "CG9hRVHNfMgFgKKPAG6vHatkhRDaNyKq7CCtYBWTr8uh4V2fqikyH1ke3W1zd4X4GmvP1J8aEQ2i3C9R3JjJkUj",
  "key19": "5qTwk7xdLZGReCnMUzqZAdx9Q2dAyRojS8KC6w9dqMRaGhobSjhgadxftRJ8nWUyKFboze2skC6BtwCqN18rkvwN",
  "key20": "5ZyeN9wGTqiQGwhecsKWwkYZEd4rjP9Lruce7tPGddd2GVoMyFCtpPWkU1oijM2MmDuHKHFazev49KDD6VTExRZB",
  "key21": "2V6m8Q9H4LgaHutsT4r2WSP2ukT7DzjQWfJavzDZjmia5CwzBQ5hmwf56786poXr9fuwi8rRKzXhzS1Jm3fzHLB3",
  "key22": "3QLQ9G9FMbYdF9a6BthhvxqK9oLQiWZtskNX2p29YCcR8prhQ1PafmtaCt3WYcunVKujgYr2ATr3yksQ4trKbhYj",
  "key23": "4yEETRS3rGZadTd8HzdhvmJ1nQfMu3yJAEMsfsNQepp4Ujnm4JATb6Yx8PqQJTPvwVnebRXcexyT9zPQqQNH8oNN",
  "key24": "4nXgLjr5R9xHy2fgDun6HQwJirwWdHWvyeM7jxzFDBV7EidEmdr6Hdqc7tyygx3RpBqKTpzUhbTkj4kCZ72LX3xZ",
  "key25": "2nAZSzj93aziKhKAd5aVWFpMmfYJ2PYvsEEKtf4ZCP4yHujSDNA4rF7m3Lkz6WVJV1bpD1SJFWxjxrPVCSUfz85Z",
  "key26": "4EBBabR43Eo1mskUFwh2fS1u8vH82VTJVkPk6ZQxQZnN4Q5Cpq6G8rGVaHYaDxnpDaKJpAC9LkG5AQk6afSDyM8h",
  "key27": "4PSHavJaG1vLZrQWGJKcUTu5r7bYJuZbur89bAbDFX45Kc389RoWgpnqvEmQ1yjtvJcCitxHiZthMRDB7hfHtJsr",
  "key28": "534tZkwh3j9j5M66TUbeGdNG58xM39s1PP8zAo71RrnJZtWUBTKQeytWBajG15JEVfgRGuhNPbP6ok1eEGAQ2ALo",
  "key29": "2sxYgvxDh3W9HX2ceUc7BiL23gsS3bpZuGU7ZFfkqrTK9rfA8No6Mg8w4saQxkrMCEwMQgJdZhZ7SQ6vfxKDeYDP"
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
