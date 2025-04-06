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
    "FZPtLTnMagXepKZSrWTMTuyKYtrNwU18Dfp1u7td9cE8xuHC9YTD7cN24cEkDKUwDSK92HoEx4Qg9pY2m384TLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9xe73ZRDKrKPXJJVr9kWQQsCVzKfMJhp2VCNpR1DoUHvz2BjQhuDajexw7pRNGsYURXRLWTKZW2pvc1ga9HDzL",
  "key1": "FY3XnARRBCbYD7vUWEYkiNtnBDNigzhBJGBsw1zKkaFj6XBhCNNh7MjVEvyTXNddnoU4uygMHbaMUw8eyiivaVK",
  "key2": "2UDUW8RxM6zDKxMbqJmpdzPuBRvpe8jA5QZmQRzSBbw1pbKHaHSzXZVnkZfyk1EGnpg444KQx6jmPRZN8idG1xEQ",
  "key3": "Jsi9HRJj76xwR8D2jjPGDLbE4cm9tSjZZAvLKr9d531T8U1Fk7XGBuL1w35RwHUfCYshRb6j9MNBLkDqKegFb96",
  "key4": "24DZ6JDr1zoWaCCVRkvFoRCiznxYh88aEjzwHzQ1xY1BScUwC6nuQygDZuLSJY7MPke4a56ykzBR8vqaxWwVzGJj",
  "key5": "4wLE9C6x3e6Sc2BBuBxGh2KbGVevBoAiZFLazo166U7c6EBpbw9Sk7xayLNrfh6XDzxTZR7xFNLcB1QQa8kV7ymM",
  "key6": "5y6mH1hJowUzCPUcv9EcoPnhdUc3GQ5jkoSW1aHJXr8gEXnuPjQSGBmvSVc2xWcJMtczNR6o6WyWvyy5sfVPq1Jf",
  "key7": "41pu2fF6J3Sg4qUcWtbXXNdVFZ3z3jWTqQJfNk8G6rfjeCjQSw2t51GfNJkjCYGhYAMpiAnFRUAkpBcyiy15Zzwp",
  "key8": "4kmxQv3FPqY42kRoMh9hrpqoKKVnLcsv5JmCstQWzCmatNCB7Pm582VU8hMuk6GBqm2Dy4HQ9nLcjagZEZL3T986",
  "key9": "9NTuLpEDgYej8YfoUzzwbc75pWZuMXpZxszeZ5R7gSUDNwoa6pQn2DmGrbLcZgDqJEeXfhzruhcee5tDJFYDVd6",
  "key10": "5h4dfDje2goZj9o6AKgmgEFaq356hh8F1v6qh1h7T2bvJerT9PiuVm7fd94Taz9vqiv5jEPCiaX4qdJpe7YDmRSr",
  "key11": "3r5p1x1Je4YTFWWyDRaq7wazo25qKiNjhjBqCx3MhUMNaG8bHo8EBcfcLJZpmrCM9Ccib2nwaM48zyU68VQUG8yH",
  "key12": "3PfB97AiDw42qjHE8mvFDLiLJT8qJdswdyq4DvsLrPu4GBZDYmabCxmbdcMqNcs59EBYZ3X7vYJ86nCYYADNw7p8",
  "key13": "2meC9k1uk5RDQrx4EyHWNvo88zsyk4YymRJqvuCTEs7wC2xPGUngLaFxUHhirzEJBn4kWB7pfLYj532b38eh4zwA",
  "key14": "4DgZiFV1eAsHh2HCt37fp9gV2v9FRHo5bBNiTSeyZhajTHMGuSHSC5EyuKDcMpCPDCjG7yURBXL5GbEevfLwcC3W",
  "key15": "4inJpM5CqfFbU8BpLZDZ8D6BY5L3Q8wfce3zWBhBiHyD4QckezbwCFJR6UREEi6ZpWDz8JjHerxBK39NtTP5GRNo",
  "key16": "8uXyYhuiw339LuH1Jh4tuEYm5tqRfgcGnc6yPQvnn8DpkvLFaQNKdfEY3dAQBexSwLE7y35nCxbbowWEHY8K1W3",
  "key17": "2oMh4ZfyUYaHJzmmLGQjot4BxdfW9An1Ge6oU2XJ3BQFweqa4ttm9WF8BJDvfG1KJjVULCextoiA6V7AwSqRQEQs",
  "key18": "2s1ojKsQBYFoor9g71wD7prK6sSjr1nkK6kxWNHmJ6f7KvkWhZZD2VhBdeFj7xjEi5kHy7N4koBjtb2nTK4rZiqK",
  "key19": "327qDD6qZyZkG9Y9BuLnru4MXTcdTa2KXoNKfFiioowrSioAvmsTm68AjoK5BtARX7VAJzka8A27B698ftdgCoGN",
  "key20": "3swUkkiDZdEuMUo45zv5fs1x7VZpUums9FmKeUS5nGjzkTvxWQBmaj4A7pSrYwZShdqe8RWiBoZZq9LYwXSEdcZv",
  "key21": "3fXoMuHPn6iZuPDF53V5Gr2aQZpkbGDyHNwHqZRAoXCBERPzVNAPUDWjVDi2vsKRJkxi3fojzuhTwizFFymppWz8",
  "key22": "2zGdcffQ3UXbj4t2WmgCuQNYiomKNZ3uHF6KcGLHtGdiqiqP6afMMxkrXiBLgVYBH7jcvLksT5XcDmgY6vUFRfWr",
  "key23": "3P7Yrm3SS6TV37XnaU5mH9UX9zWBEMiSfV6ay8EVMBm9P3Sy22VFj13QUHtuJ57GXVgt9auK1hQJ2QdMKwy4C6k",
  "key24": "5iGy4UPWJTisV5JkDDMhyStJUrM58NZfad2EHwWnNRKGJnociPn8w4XuSSfuPNTtxW9c6ixPZDAyobqh3Lo3Ajaw",
  "key25": "4Do4bKhTx2QGtKydK246YR6rscCV8beG2i3E7bVf2M2FX5qsnq12ZBF7rZecRdtVnzCK3N2Dae7Dcz52UbrDUg61",
  "key26": "3pqXSbRM24RSi4nNkp7ej8LYvCQGGTnypSFJTsb88a5VPUDBwV3PqD9GHnouSspVnS4Rd25QQBCg7rxuZKF4dzGS",
  "key27": "4f3evzXs7ZBX8kGQyUW6Moj99Kxd81Ss2D5JPqugA3w8omrjg7qsfMyKd5mDJac2HhtjEuEcNC6UmaoeiB2SyZHi",
  "key28": "ff8MtsC4rbiiZVqzBfKPihdfmfg4yY7VdDVyzYfjdKmeXnZtCsZ1Pm5dPNaW2bAKkJhZrGTo5tYBkUucptKxSDb",
  "key29": "2L5yfTaZqkTUT2Eh6DyuaXwhjyb6DSLCzpwM8JF8ggcLnUbaBAncKrGxg3HmRqtAoeqigMnVPqX1rVc1kZHnftqd",
  "key30": "5vysinqv2pX6EEfPUnbXyWL4GZcnwC8MH2D7SBj55uR5BppbQA8p3tuUBMP7QQCMY1jYYzqriDmTFR74gXfGdEb1",
  "key31": "5c9NyjfzTqHokCAiehCQFYR5uBaX5RbjgCAjqq1gaN5VB22RuTXxg1hTdnFWPPKaRRuhWksq5UgP3EsSXQ5LYS8T",
  "key32": "36v5BYifQKQGQstwPLabuaW8fYMygmZ3o3GwLqSN2PrrqUqdpTAairuQ8e9HaBxWkhnSpa5JwMNnZv6pSgNqSRKt",
  "key33": "5bkNP7ctoBCGqYssyCjBbpVYUYeQXQg2wCBKJ4hHbvNLUkZAJKkcswqD7MKTCYLEv9GnPBQqijFoFaQ73M7YELEW",
  "key34": "3m5gn8Wg8Xt8SAyLxFNixASikhi3ptRctQfUphE7fyu8VJv6vVPM5rEF1mKKkj6CtqppBami8HgTSiR4Gri1dVFo",
  "key35": "5SriSZpy6wHfCdowvkmPD4xQmMGK5at3ixNZn2fXSb9ZmSwcV7jBk2UUMTmx4s19gVooEaVqDv1UVDwZUvxax1Tc",
  "key36": "51viyJqJt46AS9u952KBGLmW93sFUhRPopEHNw5NnGDZLBiorRkJw31C1bBRg5QabHvpAC36r34D5R6MxrV18zJm",
  "key37": "4WSxY3Vn8T31yURyipqo8YS6nSWMnysVaiv1hXo6yHh5uivWqX1nxQ797hhq5uJ2qa19BfMuPsq8b3vkqb4od58i",
  "key38": "2QEwvWGq6Ruj4wGRLME7tGG5pUjUXvEuS4bfS3nEx1Uiuzr3mBg19MzyUyuzGYemYGzK97dhYYUZsNCV4Ja82HNY",
  "key39": "4TEi5KatsbrWMJqheRjCNnQWcfXMMEwRcBTssJ5AQoCUHYZbEG2bHNakfWUN73ndv5USMjA5MycPnACBesWMLvYn"
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
