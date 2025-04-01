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
    "61aHY4hpmxggpjhAB99C74mfcc1gUzjnCPzvDwoiWuRGrYvJ1K6uBXkBcE9B15AXs5wcKjnvNaRETQfgghmyH3BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvfM1Uf7weGiED6svDzdGWnCdDubNzQXjvaHnuffwSchMcfkY1KPsbJbgxrmJrEQcuxQX1ghUqagkyEznCA7Dgc",
  "key1": "4byLDkcyriKRKhEHzAb9f3qtuV7Qg1TQjLY3L3exTjKz4NstuPJrTfJ56Bym3fL3sjLSoHprPfdRE6cHxQS9osZa",
  "key2": "5tbwRgZRzh87a5zYKruePaJJWYdVsSExrGBs6vcNYSnUpGR8dJ62xBw9JGyHHwLxtMwcNVQNeGQemf7MNtkK1kCv",
  "key3": "2tEW6kostF2EuX51NmpkTyszk9VVoBzpDiLdC9ue84Dny5WdJim66pVVL7UNupxucUi3Q6Z8DAaYY9iZdWTTjAad",
  "key4": "ZhvfokqMagx17A49Rczs7S7iH7ZoF9f4cSmfXV6Luq4nqEekk7Gk29dsJAMpmKZQdGZkHnZDMwg6UhCCaZkbQQg",
  "key5": "Nh7YKUrtfVTdhoahgh4VZ6BVkVkqYh1CeseCk8JujXmLCmpHMjEZiQpTx8FDeD1oxAWFiWB5iJUE3y4Nb4XdWGC",
  "key6": "64ebybkQ8FyXsEiy9N2Ei8cuiyLr1vRpV5TpYnAkDYh6iXak8JLsLNUSvU9dHux641LuNcmM6645wnp9PKAtxxfy",
  "key7": "2rfndFtvnwMJ8juczbEWKWgPEXXkpXRwvQs5rasHjj58jGb4CkaqQeGW7a9TnffHxHDyJTp4hB2TuzKpSseHKich",
  "key8": "E7873jgYhSmwcRQeC9DpoBoC22oGEaJAS8bRc5T4v4sLfWJaUSg6Zh3HtyKgxQLiSaS1v2QbPnnBuKYgLZV3Skf",
  "key9": "3YNQzTwQBdTCDVf379qAfPsf8fi27NTzfYewETgB3GZbY5j4ehSs49848GpNFw2FwEjzArS9LfQ1cC52VQxZtkj1",
  "key10": "4PkGDt73LGv5io5ods7GBaRsHZ8Haft4TFec7ZL8oD26kB76aZVZEyK9uzoUFLKhUq1DLAgwbq2aVTe3Y746NWts",
  "key11": "5DGpzZSAnDBjMUCtHMujXLPXAxkNAzE9fMzgkuiPfJyyxzzfz8jyk48eA2ovHFZqqQKTSuJzjaZTjanzoAMs9WyQ",
  "key12": "33MJgP7fQ3U1EnqCNPLPpf8F3N6WBfLwgTQ2YFahYpi9AreSeoXJ4GhSK3kEc94dTZF5VkiN9DBmkqq42XyDtLuR",
  "key13": "fjvUpcZDawm66NgpJFGkeUbkjxWrZvfYoozDtLhhbNwg1WwaKnPvJ6cAKN1wfZccHKppR5obcRnoBW8VBQsU9xv",
  "key14": "24bvn982ELkUG5xAMFU18nq8Ehr2TqvPQ4Svd9DmdJqfL9JUTJRQT2MCFsfJmjgA7LBKgrmmiBQ4NPkhkJpQvwyq",
  "key15": "3SVMC7XLVJwcAHRECa2rHQwjaXTcF178aWqyCsn19ZiKQ91zy42nDKAhrD85qEkaj3cdQVRv9fh9f8kwNM9US4Mb",
  "key16": "3Mo5S3cg8xyHaj4Fei5F3iXmVDU9RZ278abkSkm4Y6dBRW7yiBxYLevTqgyV9ZMjAKCtQ52fVnALqcRqobfVML4r",
  "key17": "4WTQJD2tkHatgSm7cr7swEgpYMFdvf4gaZEjnLbsx1PuajZJmkWaNuDi7KDxpJczHb7eeQxqKstFWrSCUBaPzMn2",
  "key18": "382DHLLrMtcRHFCzPsphkRbdkGXksrFkhZ2JT6u9UG75puJuq5SGBGajRFytGDac5yZXdaxghAvyiYKYrC9kwT8J",
  "key19": "5qKUWqWPeZoKKMHPL5X4Ue6GciocP28eans2YjxBEpp4o5HuKvgbgEo1yQC79wBeryDxAve9tfSVRMUiPQsKxQmS",
  "key20": "4S1aX1Ju8qqJsWwqVawM3cCpX7AQbtHcKNJ2PcbdBKJ7jYdsUywvGzdxrAb4SMiuD4sbCTbi4dE9VpbBMQLH68sN",
  "key21": "55eJZRsu4HFfQqKQGnBFy5kLoM96EbmXVDUVRmUB6QQ9m39ksvnYFm4Kn5UP8iGg3q4yzpiCUv9EpA1M9HwToRZP",
  "key22": "nbgxh7wt69o71pguVvcenAdRYkiQGYhyMJzscYDA3HwUs3QtuxFqPcrJPpGej5owJzf3hPZGTwvkYnsqTfjTomf",
  "key23": "5RZhciGErY3vL3MR5LjXzhVFY6ppeBeau1nu3ssVTVYcRGnvRLPsq6HjZ5NgGZfBneZ5WrsbNyDQvFxzvfhpgyRY",
  "key24": "37bEURQHhKsMSEpha4sinHdWQHg9NyZ4jWUv4j1wpFLt5wVHHQnfRFp4AQhFsfJtNUu2Lb5w719K9PRC9LtoYdvA",
  "key25": "3TL8UvrGuygh1JtqiFpBQswDnfz9CzjjDbvACM1EqaNX59QWCPFigquzvY5ya7e5Rdhurfu2r9zLpfYWrqH4sKSB",
  "key26": "22zE7o9MFj8f3WDVBfbwRoqaJdiDoMG6hDT3yJYLtBjrQK6ndztooioQkDcYXThDpqF3DCyWL1SXnshkfbJdY8DQ"
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
