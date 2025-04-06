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
    "4BV2chKpE9BigntRqp2dL826A7xQCnyGpqvZbHoS9VBTsy6TQ7TVGnYTERN5T7PiNZvSafkGFhcYRLqLYhh6erpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1UFB1Q5SYXsnj1UQNbSq8vX3paqSCTfW5NVSVM4XVEs9TWM3eeuRhBvTRrLXiwtGwh4aMifGGSxhjp4sCoFyXa",
  "key1": "3osP44zmDh61tmmxN5vN46a3yD6AhVYiw7FhhgTjktXcKYuaAuJiZ5DpwoTeVa9cQz944ynBebCCjXjNQovanN4J",
  "key2": "3rnPvmiNHtKZFGNETdoumnibMA7UjhP7iKe4vZTwXDSp1DU67i4HhYRgfd5EGTa727PDKSFz5VaWSXhP3bXmayU9",
  "key3": "5mK6Vsa3ouTQhP7zEfj5s86A1sTWwy3HidoeuiinNgKvuDtFfwDw4ycrTuvcFwaXabWu3FiD7Ts8qCykgHuEpvgT",
  "key4": "5T2ARYuYg7ESu7fTrQdPshTeutScWL5iLkb4m5mS33WAmim6iZrnHMjPWubZbKDMfXTXgsDgNoJKi2rHaqxLFLas",
  "key5": "5Hv5aeCfNSkAuGfAu2TBjUWLeSFz2FM5XLXxKkadv5JRBBnd9hpLvQQuvih6afhFbcGA37pM4c5CttV3hzuZu7TW",
  "key6": "3C9CjbxcPiqVKvZpLBT8spKFYyiyNw2JQTB5T88SYb4864ujBbaLVn5ukZQ2iHR5QP5FEVSnhVfJCeNJNZe6uGT9",
  "key7": "2SmLeoQNE2TfzGG38vN7pgQUjMuWGh2jmkcnqbUaPpQ5gYCD2A23e8qhj1hj1ECPij7iiRWNkmDBAi1s6yudtW1",
  "key8": "665xY1TZ9q2Rt61AjzPE3j9bSVwM4rp8uQq1GsTcGGPH16CtgsDG5mWfhNiHgCqQQXcngBpouaVWNadUgLQaWawE",
  "key9": "4U7n4XJCbQoAez3VwHgssbY2F3uEfDoBwvGveLqcqK3zRSFFpUmoVVhP4scSCJRxmvtD6S9AviRBUjkH8d5M1xLr",
  "key10": "5Rw8vJhLzX1XutMypsrUuzDGEdMkZqLxUKMovcqCnwQ8FjzLYWR7FWZm8WdYocC4QYBWgsB1PMoASxhwwU3XG99L",
  "key11": "4NbQUsAn4S5yGAHWqZQP25m5gDzFWDq1hAY62tcAXkbziEKpUtFLXyBRgy1SH4EMp6LeM9FKvnpag7RVsf7AU7eF",
  "key12": "PdueLNAJ6f9JHx8ajmmFxLmiNTsYn2h1mcvTK4xqk9pmN7Hnem1Sv5ydERaf1X8uFXWJCZ2wjKx29V4rGptc3vN",
  "key13": "4SSxgc2Hse1wSUS4T58p2ELcjF3wUaAC4xTH2XzVYxk8S531oUSYDLT241mD1yADjK4U9KNhAx5ARxhPjMfUQ4kF",
  "key14": "2xjyVHXSmf8tTR43Mg1sLFE7pCbCigyNQkz3E44enDWbTVNN97UiXbZKjJj1ZuFjPJvK6vHxHVzffSuHS9FfXMPC",
  "key15": "3Khvkqi9r9zLraDPxN51gt2WK1wShEGHTvGpVQMSGmzWugScHT2fnF64tdJUJHAFfEShBmTJdHuMVRo96bssXWUU",
  "key16": "3xQhnQAkZhoDWaHGaHFycr82uDLHAZGcf26tTsUy7WkHQjuASEmpD3jEZeWAcG4ChPRU7nKpquhue6FZbfEqC2Mi",
  "key17": "2XYm1Y7afk11gZroSHDapJUGqtxAnqsYq5XwxD7xZZXkrvGTzVhtX5mX5AfprrA31hV4Lusu5pap4mpMBCeozd8h",
  "key18": "3eAqybivaQuPotANUSXWnBJ54fuwWTtEi5AafHBm2d4Mc36cMTJBvxukzgbLxMf5FuiCSYuHhqU7ay7ZUPQSWHq4",
  "key19": "2iW8MjpXxvw13NBRAAqgcjvmB5a4sFfebtbcpfWgxBu8yCWzFxbFCWSkmTWhfzQPV7RPgvbwrnge5VMNgcZY3vcT",
  "key20": "2sxEvVfcG4fKDLKjUTm61xMjkspPBALgHSULJ8JLEwrkk7Eohf6jVWg57NcgrMseJPx2H3xCuxmab2g2uDbwMs5b",
  "key21": "5Ehne8eiCXzpxE5zTvgcZjSjcp9eKi5sCKjE4zTvosHeExpmYGFzkfrJizvpZ9C2WNQt2eFtDxYbjdBx8AaBe4dg",
  "key22": "4LRj5BRGGS4WNw7hCvzggxQS1dXpiBXMzkofompzAnMzpy47zhj8fFEZ8HN4ZpT9tP6t9ki2BpajMFLyAmXeUHy2",
  "key23": "215ETfffJM1WGqfps6tMTrKw2ZrZsRTFdjiWNodmScKSBFArQF5vV7hy7wT4SWvRe4ovcyM8iqCcj6fLcAWPGMhh",
  "key24": "3u2hg3rSCuf4YmhbeSAbKuCVpdaodKqL6g6Ae476swBFnySBjG6Mhh7rnF1RoxjnQZZtHTQRhDgfgdpgz4Jx84ks"
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
