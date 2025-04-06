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
    "5xF8hG5zYVMkirzUViL6LeHiAxqxCELmhQR8CrTAocxuvjdK7H2rwFVzfaQ2CUX92jA7atrdimC5qxuENztqnPsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3UBjtLvMTeyQ6bhjW2J4vfPKBrQot9fJLDF39tjrfznfNqibFg8GZ2u59wCT4RGXnFyqWyDpYAj2Z35bemnSeC",
  "key1": "2eHqYqPXvXvdqepyLeTRgzckTXFtktsAimzTKZSgyu257S4D15ih3bLsWeQVS6HyEqetaKNDkj9gyQ2wTZoRJyMT",
  "key2": "4EWnGosBUXNSPwWwYCnHEBiPUk2ToEUA7A3Lp6egFP3Vr5589JQ1dcxgGaGHNHG4ZPkZdLamJWzsjQPCnfNi2YGT",
  "key3": "5KVAqH1vP4hxBnbGzpHYY7WbtVm8UrrvnG2Z83y6Crwm9iT53bMcrVEtTxHYFbhJM3dvaySChBMSgTRtqZSovbTz",
  "key4": "5LnphMuXFpoZyK9AQjsFjhdL2A8pAb9VAhxs7eZHF2VjuXzKY3cpeHMELEGBUh79FiM358jSUnCvQhKFNxBWqiTf",
  "key5": "4N3fU64gST4NA47x61r9sL7m5BSu5QcrEtLuLPzi4p7szNxiKrSSq1rGxk8rhANtjBTuRw96Wbw9fSGcYBe24wFQ",
  "key6": "aPovfa8h5QfitRiAX6PCUmYL6mnh6GggG4jYhhrw3GUbbJYvqwj6QEbhfawTUJ94dnDX1CBcVd9AXJhPC8XLyCr",
  "key7": "3K9FySCeChBV7jfTCXCLY4r8rJuS8WrQBsS5me8tsTf85Tz5FDYTJgT38TNBzk6tPQwGpzeQeQUbHMxmLQ8NzxNE",
  "key8": "4hbKwutioihthjZK8h5UxkWmDUWWKBv7vazsM772WwjMdefwGVNQozrt9RvUFsJTjkSd6kLVBPqeVfzUYB6tRjLh",
  "key9": "3unzYeyXqRCtCtoaJmpVpo5kKuFCuJnDSVWbRxUY2y7c74qLJ4Sm9ZLkTpGtv21KLa1nH7RxMJvKE5WBBGN53wWS",
  "key10": "2fTnVjqY539AiNrbrNMJbXVc3wMxNDs6c3Nw9W942tjuYLhhjGW4zph6c1bwGVRGcps6pzpUKfpL4YY5yP7Jw18",
  "key11": "VmfheXXJFwkjQUMFLd9k7QXsFgXZqR7oz6vgJdXXf7ivfSCJsoRnXCpgT8DCpuBT9mTMFCEQBFcVTPs8PqbhiB3",
  "key12": "22vsp5c6xNW7Ps4jP2jm6LyTGfSHE5RPg8krCd82cgiGQWM5AXsyX25DRdqHmET1C6KGrBsEvaqpiPvMRFjohtED",
  "key13": "3FZSiiLod7LhMPr7RZe85KgWdxRCCxE9NBgUedYDMFi1X9oC4G5c6vMvtzPhdwT4Mws84joxzbcpp8oi2Udow3fY",
  "key14": "WKwR3uFq74Z1DQ6h8WAepoEG4R6fhhyMWQtXzpPCxeWuc4EtZ9XELwYCsPEFNtsei2FLJMEXc6TBVo4kKzxpA9b",
  "key15": "5JiCTNU9aNtCvigQZFiPyU9KBmFtLuM9abWEFABRS3ecNnbi1rP4Z24CAgYZPZpvbqmCSHvUiW3MJY7ukgRYyfb7",
  "key16": "4Cztw6XDp1r33JfNxJqCpPYRtFFh6GBi9VosKhjNjTvgSukFmtegtthudNheTi5ajAeGjUwgFYm5EtHmgMghDZef",
  "key17": "2qjJQCcjByz4xm3MzkXyNzDcYiJknQA6MBXQN1bGwTtUvSUgWRLwUpZkJWuuL8VjXPe3ofn6qjvJoZrYF2gqbt5V",
  "key18": "2p6YEiZrbE6jJZSrH35bWBZj3ADFpA1gW8qNsWZjeS2PPALhhqJjX2ssNhvGjS1dhz64g1oATaajoKPHvZZ5T4ms",
  "key19": "2JiwoGFH3J26D4T2NogWwVDJ9J1LEEGmd2JF8wAsrk9kch6fwCSTiL5P3CVKQQq6G3j8efdJWgJqSWKHhunHfPAH",
  "key20": "2BzhZnuDSrMigMDh4QgY8WoYDYiT6aQhwh4aYkVZY3x4W4mhSUp6BTuWz6fDe6f1FMb4dYtRUTAnvMxsoJKFbAR5",
  "key21": "SbDs1pUCBXRUEsrRHLghHW2rP2r3vAKjbc4DJ78Wx8YDYxi9u8Nhm6wd2L35ennMMXAsDsKamk4jouJUm89do8w",
  "key22": "5gBsQydHmtHNrptZubxtf2oFEo7TjJqcfqHagsuj7uVmaqpatEWhUWMks4aEwD2D9gm4rj2tEm1D8d98A9Exjxkz",
  "key23": "3N9K1hyUggqi2DhioJE2eRjkHwDqMurtaPEH4381ESZpZa7aVvW4Fak5yvRXDLi5YimJCfj9Ev3M9URjRYABJsH9",
  "key24": "nsNyj5Ugkw9GohrPSM5AkVp8aYdaB8JgCfs8eb1abHdaNmVNd3toqoVyUy4ZvPRZAmLuXMyG5HbShAm2KU9DYiY",
  "key25": "3noKw5ka4C8cg2ZDq9QgireoEzcsszaPP5a239Dp6yemMohsBQ4J4c5kGNXNH6XHtEgW8bAgDMBUwkzRLNAo674b",
  "key26": "3zhshb26gxPwmyhBJYcFfkfbpTDkR7poiHwn1DjNwN7KdxKNMuDH4hBCi6Ehd2ypSY3MBjjBpj5k17ud61ii46jD",
  "key27": "CSv6AHbdSBN3YauQsT5VHXaujRV617LD67d4dB3LGRwKGPpUaJQj7bk5UvSkNdMU3cnjfErGia12AETV9MNiayx",
  "key28": "2NongadzKwRpCnwPBHtjm3YQPz7QXkLFhLyW56UDC6imiAnxTCMX4kchMgiaXZzMFv6Hh1RAKvTDeiUMVakmizba",
  "key29": "3VkQUhTbMWzN1AbqZAffZCeAzPDQgUjsb3vtSgZeWAy73fwJ2bxktRWyPSm2NEaaibnY2TjCD1LuscWKHjHKE4KJ",
  "key30": "4AZQbNepurnFgDQgwnJbkBmHXLXss8vCJkofu9XK1YycCnHZ6y6TrzB7YeArLbwiiPti8aaGVodFPLb5j44gp81i",
  "key31": "3thUCjwpTFTC3BDqvayDtVjhRwwepP4qKVH5cWPY7jd5nkagrfoPFiuSNYQQQTHadDrCtJjkiaoPPsDoc33ZkVTR",
  "key32": "BQ6oFJtxtrNy7ay6DuRYgdNCqFjrdGub86YECHBA8foqahBqyu4T7tR6a7BierwP6GfvEPKroSjimhgnjyuWvr4",
  "key33": "5qL7SZyrqEsGuByGSjtkKKD6KD1AeKCRZyddn4KbW3HaUT3FPz4cBATh4SLrd9RYDuVyX1KNxmyKpLsTXwFYRK6S",
  "key34": "DcoPU9HRP34sZwuC7d4VsKpBjLD5bNv5Vy1w9frwZBoc8nLUuD26e9JkZBZ2QQgabzQSZYB5Rkp56rxJPrfcYrx",
  "key35": "2WWZBDL8VzAr3zUPzFBxSCVRDdHycqhmPwEcoGkAZ6ekhk7Lad7NHscR25zqEBeCKk6SCbFXyY1CGUiue2Y2pxxR",
  "key36": "3KkFCs2re6xEAUYHvkDNYtAkQ3GzuWCZnCDtnvBaDp2PB2rx5JNidh2UkFKsGmVUC23u9M1o3FYfiCDyYxbN53wy"
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
