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
    "h1S66wy94cm3iSqPMPbT5R4pjwhF1gZKzh6ovQRCMsdpY5gJSMYxHJfJVrXoXHsNfzr5qzXgD8dfK8fPoxYL874"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44yanrDVugfmJgZd3pPhoZotNK8kCkde2J7k6jGVGUaFrK2YYRtW3Avn2ytAbkBJiipbT5Yr1wTXbL3RrmnSMrCz",
  "key1": "2b5NnRY2HSkDrFA1zTxsfmRLBHzZaZAjYrsDt8Pbo3YQrABRACJRGmx1WsPtYP7XU8THQW8VCvGYddsc7MBGygFX",
  "key2": "5xe99HyVg4voqNCj4ZDZPgo5gk5fRTfjq5Bq4ifbvPo7UpZ77BhyyJDLQNTZoC1YetfEnxQgnCTRnQbEtcRYentw",
  "key3": "2gkhbFmSSByYLo56qVnmmntbu3HCzUuQKPccG7cpEP7BUYGa1uv6Ai7KkbAPE7YCauX7zvPd9JaT7L2CBG5pMBxW",
  "key4": "62JPU53wyNUj84SisWyqLx6mRQhzJUTMTKx7UPJDjvNcsshSCjjDn9QjvHMPoLtfPhWpwrxXfx6gV5Y9iztjpAzT",
  "key5": "4EQqegz6o7RhwwckYGgrEZzNM3PHZ4CSqai2BPHUnDq3x4kpatXKfNya22qU95ovRGp45SHoyKAhEkQ6DkpGqvEQ",
  "key6": "4xp1Zh6A4bvdW6HXXv8C9hDsMdRphrw9T8CvhM9fzsxyWq5F9U35gRDPUbZBymajWxRQfsP5r5CLxRM8PZ75vnZm",
  "key7": "37obGVukJgGPig8afWrSCa6vo9MLA22LgS2Q5nxRuPv3hfDmRGzK8dqmyANMyEuSJ6ggh2CEHLFLs5LgkZT9JpSA",
  "key8": "fKv24WgpAEcj5M714oXViNKx53qESjbjj6BHtcCxC5ZFLtip2hVgtrRW6TzrMJCjgVHqeT3pddQt56EXjJV3LxW",
  "key9": "3nThV3modK8yWnXouBZQyqmh23JtfKrhZqo9vnf14gc3cPZNebChJv6HtAeZ3suSMWRqK38ss43rx9cRkNobU4nC",
  "key10": "2PZfHUqht1MM8N4hdM6Qtw1RuY478ddo9ZFw3ATunGGXRrrrxqTd5GpK6XnJAVezg1vJgfgnz5nVXSbEN2RrwJbU",
  "key11": "4EKPoAumrSLeo6C5pCtS75wdVbSvwWXtHvCtamhHC8JsabZ35MKnrhJrALQ7foPPmVEtKsU76TuPU6pjArRAwtNk",
  "key12": "wYz38VsD49eSEhCJrVHfsjHi8DW1wiVvubTBENq3carcsWcu7NzGB9MzEBWDG1kD2NJcZY7CaBdBibch6Wv9scN",
  "key13": "4TTJmgjTQNi8SRiZivtfjqLk7vZt1qRnomGKnLKUmeA5rZqcKAmKQ8AFofeN7u7zZ3eWGi39JSxN48A7QtRsQE38",
  "key14": "2Wma1gXJLQcfEv8uAP49pfw3K66GQ2QKn5eqJTXjP8bJuVYWpdToz3Qrg9Ec5GTmkAnek98ryLewawLQaneQvK9d",
  "key15": "56amaLefsmUHBAhjbgoLribsd2qWqvEVBH3Cu4qvZDc7mZPGtmPopUgmiZpM8UAiktvFXaBEbM5pRkWwZmdcxLDh",
  "key16": "JcBqTN7DUHanYaWygd2FZtcuRNwd7Lh1oui4haksUNYpJ679tHQyENZPYytGJmdXggehodeYoHp11VKyQXGeERM",
  "key17": "2Rvm4Vbkn929GZYSFbYwZ6psDXi5joVuNb9FxjNX64nPVM18BfjVnkwApJkjkjRM2JQ2SyuzAC3hFAxeYmuXSxX2",
  "key18": "d6w2r5S41kKt3jBuRDB8bodjNHGHBBQR3SycoTr4MLJMzuzeexMyDXka9wrRHN8XZZDwFSkuFvSE6vnygsHwtX7",
  "key19": "4BtWd67aQo8xdM2kRopqZmbbS6PY1YwybSpfpj1RM5TBfrSufzjbkvKwuSwkHSsMqVwMhRNg7CmqgmtUF1p5FZXe",
  "key20": "4qPY8FMbJb65BFTBNTsefqAN3RvNSs1EBkwzoRuZcLh27z4ZtjrgvDtfYE2jdTrJcL44qNYQn69wAZ5bXhdnRG87",
  "key21": "64Fz5EmmhxyWHhQ9q3hTec4WUYCPqTYUQ174Tdh2h5TcksuAhNz7Rq4i99ccjNohmPKopwV83KUDt4iATpZj1fhH",
  "key22": "5ohQyAqKTFo9wVX6jntqbk1ZUpThkNJT78xiRWZFMv3LtTJsAzbjAPG7xAFKd7KQBf3xpdrPJa74k7cogspfwKW4",
  "key23": "q35BsdBcushQKT2G5Yqb1GAVffVFDf7Noctbp83Hg6YTmYos5V6z6zuJTmanutMeYpucQC94JcmNqGtHwK6X9Lv",
  "key24": "4sNRggatE61acSsKC8fuep4Fdk7wQDdcfy32XtNwkEQLkXwTTtZ7X6xqVfeb6rDhu5jBDoZnkWtJHDgoYg9R67Zi",
  "key25": "SPhYm9BbyJ4o4vvEG9BGXCXmbDmHwQhT1VHQLyFiUXFtrnpdXqYxmFj7XJbEGt5tEE6Cvm6Ko6pvsSBrLZ8Nu43",
  "key26": "5ntvoNNyJDsteHyTQoWWuv41RPqxUEpCgeMBi6E7xMwNudkP5XBPfVBPH9hAkLzugoqRwr3ZsLywc6sAL6jeHznS",
  "key27": "3BaQtk6VRujh5bzrPF5B8JPmnQYH18nPJxTCSGMBG7hQYQndWq57k1FSDEQZBQnJeAiXwNKpcx64vvxRi9qc7xtK"
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
