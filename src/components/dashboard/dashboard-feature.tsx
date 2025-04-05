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
    "2K7gppFr5CFVqf5LXXH4EgYZvTKJ3T72JoCmeBmnsrZmAhxqJgUs9bs6UPQUKu4NrWcUW3uANnvvJMFFMcNFon74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XK96YcQKxzz3HCUn96385a97A4ypw6Nx9xvuotnpAvaMa8W1bdknBLtNx2zpiFeMVP51MhHbrHcNGKRLNjLTP81",
  "key1": "2GaHzVmk1KLNgmXtWtWWufr2zRro5nwSLxg8uPRybwAVe9qr2TgJ4Rzc4gMfmEDxrpbsJ92jZGdF7MYGvBeSm66G",
  "key2": "5zcqrNBRUeC5JiA7gvR1ENzRMwkuJE25risxgs4HT1voRaq7Wpbk6AN73ALNwhG4dq6zqduLQ4bKthRAKitGMwhR",
  "key3": "4jYPK95nGCkYsskJwh1HRZWZpxSnt5eMTW3fuyRQcjdtCm8tm1PJAKWvFWPzN12m34YyK175hk3AvqDCiAvTU1uU",
  "key4": "SjJJBsFAuWYLuhzptF4MnNuPnpjiSVHEuqkvDp49SXBqoTBwsXuDoJXJq5XEWcACUpMNi2iAJ3h6UtNwuopBZkY",
  "key5": "4P9yDLBryTAHTC7XY29JW3vYaYa7VbE1ALsh26oSE2DoQYdNPWHgyBhx7FhPruf885RQu4wg3R39oweT9kZ8z9X9",
  "key6": "2ZqsAKo9HMaggZzGQh8HyqncxY7ZXnWDV9zwJB8tydye4S55Sg8ZGnrFoapUpdJziefPzzH3xyXJBaPp88m2v6Z2",
  "key7": "v3qzLi97e8zehj7FobgUND87xftf8yYTa74MbSEUHXDwED31ccjQUBRq6mPpRTcVNrzFP2KxsvfuXYgMjMiAjDi",
  "key8": "4kBbr6FaB19NXyhUzDhQMibDCiLUiz76Tzgc7dRRcZFVbKadXiiw8q3c3YQEZNHjwt9siMpqLkS9QvFfpyTfZe2j",
  "key9": "4UxBgrzsvVmGAkcszRsyeHgnFjQ5jxFqc2tGZB3bYajyyLQDUENGfhxwL526zGHrBc8nXMi2i4YcSx7KWuXTe9Tf",
  "key10": "KpVxBvCjaQx1UqAAH8Pateh5UYUnuNVHrKRE3YtBeW1kRNQDQCch626dy4RtZfNuKrnu1f2f7zxDCkjC6pAEsSY",
  "key11": "5r4Bzzcoov2LBKjsQRGsNpyYUT5mCHG7pGiqEtmjhNgRjKDrCTYndxapjMUfVQhG59zubrDNFYfjgFXiQpf9WJGQ",
  "key12": "iKzV2X2419qdGKdjC6cYMChzS6WfLhWzHCVAXMvobWGLJH8MkvWowk22vJrWfVyhKNafLWQwsfhws3QRsnvsKse",
  "key13": "5CHtJGpVN51nu2JApDuGFNTckigJZQQYgPBGnnRsN5aTBZTpaLJpLDNBW34QNMBJEiAbvt13vXUurobCwFFRhKKo",
  "key14": "5MGYyzdEa9Rtmv7iCQsJdzpBJ77Z4ki9CwxXQ4sx1BpFfwoSQDHSvVLY6Kbk4iWr5xBBG59C5SxP3JtwupAyY3EJ",
  "key15": "3wewq2zoPLAgXWhpc274h3mDFZgen7fWAqJ3pPVmvYSSdxBhqLYE9xaekixuCgdHzLNuP4xmXzHsqJU7KcdeHtEY",
  "key16": "2M9eHgtG7hwRLa58XdmJ2NDJ5bMQkqpCnjT93GEZJZ43Eji4DeWjQGvBDQVTWBaqW9Zqrb1Zsvu4jBMJ1VWtd8eZ",
  "key17": "5dbijo5i8fTGVfBhaneqqek8LwGmog3e9Ug23hp2MhpjcarHwGaTunWgg4i2hQ1QRUoyfDbGJeXAc2GWArbruR7Z",
  "key18": "3oD3ivczLAhfgGteTsJBMAgfN7NptapULzVhNdPhPc26QCxP5b9tos6zHuRJbijfQJwHxKZQM3HF6jzgs9jGsneP",
  "key19": "5dXv7Un7Ew7wrKRVgrJpwqGqWqYovYFe51wHRgx8Y4gRGMgykNPs4UKXM39bXFDCFD1SJt5wxyhop448xN1s5eZE",
  "key20": "5M5K6rewnT72VofGpKMqSyayoHuFUYjjG46X8tVhB9E5LREtinmSr9K31vmCLWjALmcNEefMjz1ATeXcJsRJb9XW",
  "key21": "3ZTauFJiziCcXvbFvqjtciyfSz2oZGMLV3uocjcywn6V1yLj5p8vervWSpdMTSzveA9Gzvep94Nz2vRLnATiBLAt",
  "key22": "4Y79C6xQSUbjNaPNYLEnSRR8SEh2CVQEk8YTz7qwE5VvV8t45yKAfzHL7PmUEUasyQAg2mY3pnXuCteemxJz466E",
  "key23": "61maE6KMLT5Bik28ifzF7ePoe9nudXLNK8qtTRVWVRLgL4wqWCAaoZexC2C31HNBFYckf87iXbh8vgiQjwqfpbyp",
  "key24": "5y15FY7tfk8BJrMyyLB28XWjSVEG69AFE7sRMpWjzMxTjAagCPZmKT18TJUDvsFVXeBfVW11Ypm8xeb2E3E31Kpe",
  "key25": "5kqbfvA3oJ9CYotmyAsV2QSFTVj95b8rNkiLebJL2X22DHWXfwCsv4xzHrvxMkdqNzfMgSJkGgtqSMqo5P5jzSdn",
  "key26": "4ZH9PxQKeWT7warzDeGKvTVyjfEmqxCNLVtiWCvFW9D7Z2pZRUTAA4T8WCLcJXFKrVerC3nXtPiqXbGzFWSJzKQ6",
  "key27": "48vZHmRDJQo77jgM7X6gQHRkxxdSZtV9BSojNgv6tV9exiEhbV5NGEANvqAfAD4CRJDweJJwfSPhvy8QQwW7bjv7",
  "key28": "sFuyCK87jQNjnCJ3jMd7i3AuNZrpSjzC9sPG1sxvjMR1xrT6SuJcNexkhFWSWD6egGs4VmYAJ6kJiouyVQFDumZ",
  "key29": "2qUcyZGwZtr565xRsPCiu76xmhiF8WF7VbjwsZVPzXhoNLkuEJ1RQuuZaVtsKzcoGAZUW4iXE928gJ64yThe6wCo",
  "key30": "2PLAFrJfyhDcPib8LeMbv1AscX3MuX3nf12VASGzUytKb46ub9eJCM6EAYGhC9rPZRfJKe1awiyn6G34bhTAAuyw",
  "key31": "3PGvrXg8oSo4YggbmkUBbhX7m4dPKQPVs8nAoWt8wQtJTfia2MvHCRehqsZvLeiBkgnuo67mudxhSgfoM53Yr9P3",
  "key32": "3u8BeZKNaKvC44mpeSjfq9524s642z6qBRcooQHk1REt82tXu1LQyV7tBvdnTzYA2skhu8Voeco4e7D7VktVkePf",
  "key33": "4AMrMyy5uWdbUASrRojg371WevM4PSbYUJYU6ize52Bx4q3ZmHFjs3FKyRSQznZGjLGN9WhG4JQuGEMAFD2RQifE",
  "key34": "3JtFfoVYccoTMoUCwC4swJcrcEWsoE6eZxKqWL2CGSy8d2zmB7gD9tjXd766ABKrrsEQVju7m8qR7oQHjqJhVJit",
  "key35": "3YKgsBtjHyB12jRDVgMjMPUpHn4TC9wbCNbSfcExUU5KzJaMDaqdJVn5PpCWjMciXxZFp5CZHXS6QGjQmzUD7QVZ",
  "key36": "4YiQkcVsqSaTzmncAXijp9qwtRnYHepgeZh45dwjWPgdogkX2kNtj7WQkMdNapcjAB3a5awmCokupf7dVx6zEuRU",
  "key37": "3tzaTrG46PK9shYgjhqS56UzbXPBAd5RGXc12Yb2rpnKWdmmWawuwJExjhoWJ4gcg6uVQvTc91zQ2Em9MHVjZNzh",
  "key38": "45FkArgu5MjfWgtev6gyaABPsXJQMjkGJwxq5puTmvnBmNu2gDmWBBytaHHCG743pNNfbrZwtBNutGKDCjJohTHC",
  "key39": "4TgxwETuMdPmb9jSWnXjoX6745jkTnqNEb9pVrw2FEkHB5tXDvWeyQm3qRVonvTgaAdawAed8uf1oHzYrLPNCLz2",
  "key40": "56j5aMAyX1G32WLXqTgYka7PXf9c5B4nF77vek4aMNZFyypwJJv7jhV3tnVXedMJ4oGcEpWy4pM7wydSz5gbnWF6",
  "key41": "2d9EWoXkYZkCk8FKYtWYwpKYZPfRkFkvLtBXhtwZFxC36Xyez3XeTEWnAvGhzptjuSneyavE2stvNUWYzeL2ASqh",
  "key42": "iFar4qJjq7f28M3mBTsFbJjg4aKK14k5vnyVv4ew9orWXhHSspL3mos5mdbPX672j63x8wWnyGKwUWsqRt5XLZH",
  "key43": "kXQUPMX4LBDAKqz1rLQu6SemqWQHK9xd9qh2WECo5PhHcJWf8E5vs5LyEGk4pD2ZMKsYQJosEbTf22eGgnzuHPZ"
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
