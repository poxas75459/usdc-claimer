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
    "2HNQ66iepNGsCBrs1TjQEmgTEBfx9EX9HNL5uViwk5n8gCW8B9CqLRcsYhjZCAq8xVnzwSLaeecvgX7XQcLNfH5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5ra6LCC2FM98jG9KoEpgzh2gnLwkaw5Dt5jjeTyiPeu7589A97GbmmbKbUzURwK5WE8ddCUTf9WR82SwNK6pnJ",
  "key1": "5NDRHibDRRKLhgiVM6ZqppHSGKR8nNRNeUabmZ3zzLp4T6iJEZvx59LwFFjLzAJkJWEw7psf2YQEyF6XMAjGnsco",
  "key2": "39euXoJQVZpuckh3HuU2NEzE7dPy4KpRSSW4TtvYoRtKmjeJgCLvHzuu7o1JYNL3ChAgYa5YEY4xtjxQoSn8Y35J",
  "key3": "3N2VWHmG4p5PRJAJ5RKs4iGyvTAQHDBUuDLvric9g9LwVesfgXfhEvcMK7utoEQpbrNtmpPxUYLzBm1NyTT4TTsX",
  "key4": "3HFLJztVyeA7NaezVZwDNrsRAr2vhwbBWqCu73LhGzX8hzaYNSpQ5txmSh7W8ek5fT6GHj3RW9ExPTYr9ZLHFFpb",
  "key5": "JPC9AhfXQRRTLMguDaLSCJkF2L3u7eLcimnUWJA7K1tydwfibbqXhLMmPuVwym68VVdeRdNHTbUQLq6vUMhMBXc",
  "key6": "2DfemFTqtbh2XNBFHf1xbyMP7e9Sqsok1yaW4eqEARMvqkc88fppMjwjrGZPrEx9p8nCdQWGNrWzb1VSdWfZDnVM",
  "key7": "4xnAznq2zHNiymSiJ2EDSUVtGpxsccr3XwGfimw7X7YEaKKBQbqQGJnfTieHWm5TarHJGgB7hq8g7YzVThsFVwtn",
  "key8": "4g5A7Gqob46cYvzVhEjRnXzNR94QT2CZmzmttBFNoqXuPqofKUiSrbr64ZT1zxrAgwBfuWXGPAQ6FwDzReS6Yo7w",
  "key9": "24PdH6KMkJqAZ2NodsxyYWeUN6jkPbjJ9U1ewwNky5f8G8W8WjTupyw5UuyR9rNkmzL15GVFFhewSmNJvdgz2fQq",
  "key10": "4pz8YgrQk7XRaS7VVW7FKaSPkifMUP4xYCgiRv8W1sk6Kq2dHL8UWZzizBGyxvYf4ikMHxJME6fcLtnuy8CXF958",
  "key11": "2fYkrPZocmMV6DDfnZh7D8Dj4G65vNCk8vehM7a4mLh9hWWk4DVRtAS9RUTj13vjdH1hjZ7RrNA476mpWQGc8c9K",
  "key12": "4cEZdEK5pjSzsE9jHsT4YDZuo6xcJeHMGjgqtoKGWt3pBzY1FF2Nk7SgtZ3csk6tQ4CQ6BjipS1NtzigfkPQGSWY",
  "key13": "4qySzgDgdtSByr6ReaFF4AgjxJk4XcxS5qpQ4buqPefuAY3eEgCbzffT918FG94gWbjFoU9E1fHJ48Mvfv7Kw76j",
  "key14": "4ourmTm6cU6ypF8JMynh6nXgyUzFBU26LCPNPQMBv7u5VM7CZhbbWaHvNFEgHed9ZVKRrEeaMjM3oPg9hqvXkDnS",
  "key15": "62z4tE58V8e8tVTSVBf5ce3fRCWJP2Bhfz53xhEmDrcjCA4TYAjDGtX1A3YEDbobVGmHmrWEGQ7NgtMAJN3PgKVg",
  "key16": "26w1r5RGG6uEqEs3BBmBuNnmq6i7ZH7ZxGx1T4dAmxy3ZsEFjVA3BxiHrw1LRAfSmygpHgzx7bSeCS5UXsRWgqK1",
  "key17": "3WUWZjVqfEgZu6HUTP1RNkRpguKDWXAMPew9YNZpZhG43rXbQu56E8asM6NjUtgHx9DrJgmBgkP9SSgWDJb4sCR8",
  "key18": "2D1K8QYWgKjmojDxnuqgXFAqZtUxEFXEwsg1gz2GibivQhiqFzteF9YjeVb16P5ZpdxdpL9RgXjRpuFuYGpdj2LL",
  "key19": "37gzuQH4JLRJpbVDXc5odUeZBiFiHWtdBSPCAhDX48s8czJLphjk3mewUZixY6iskuC3ufkoQ7EKGfuNRTxGpoiL",
  "key20": "5EtvKoA9MgSXZHf1toP3HnS1hSNwksiRyuWK8PDEPTSAq1BjnRr27bDwZQL1QmCCriuCyiCwaZtsvTbRtPrdjEvj",
  "key21": "4Rs3A6EMwukT3fG6b3PPEDRJW8mdQR1eK6NWsUks69jVb7hopMGZcRUcgkm524qwu9YhSmuDoUHCgiwKEiPHttXU",
  "key22": "3u4t19YhUWHU5Kyiv7FkpYv68KHfCqHRxq6s6jdXuBbTWaRkw7HxwgPqzVi4r9LUA3ZNfoZ9eUwoHW81tWoWUXmN",
  "key23": "5idV2XUZtvSRuuphWBjSqveJsDi4kegkq4CtYmhUnkGhfSTR1fyPDqYAoV2Q71rUfk8cB8BQQcosquxwXnWBqiwR",
  "key24": "us99wSX7pRoLKiwHftKMeBbbEM1c5Lj5wwf3humGCGuzWYTEXRQ7wpKNxh7BQpwCgB9B3jh3gevzsYn3yimw2kU",
  "key25": "2vutCFaNBahRsnPJXtcCk96ka4eVR3ajZdqVS4hiEmK6PpvCukYaA8bHzuWPpgcCgHoQdYqtVQBiQS1LGPwrJ3Ui"
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
