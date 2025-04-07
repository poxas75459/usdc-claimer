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
    "2ufE1VJZBD9tC4iDxdqmwCCxCAjSjCQtwaJmNbTk9NBPGGKUQDgCbv5FjheA7q4rcH3E6k75y3oi1Hzibb8hEQon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mxQpRytMiAzZgn6tZfQPkEtjkGUWGrEmbFQP6Mfp6CP2rkcVUGas3DHafiTYHtjy7e6BckpHcjJfsJFifULHqr",
  "key1": "1RXGo3qiiJkcVYPb5spEevczTm1UGxQBDKQZZyQmve3zoExYV2eU6YUJxVqBtbbyLdaEYW58QW1fGTHk97AKxJ2",
  "key2": "2xxAGUqqXrEAfmiKXSH6vsqqyAY7Qj75mu1Qfb5dSRVHQdRGzyLsAWi9KhUxZJNCbFj1LKjxZzu344q61qsCo9JQ",
  "key3": "3XNTyGiUT7Sb9iETptG192DwM9qDKWh1PuH4jJZ9mnSogE4ZtV5vWBfqquHvJjA5Sfb6WaEJqJbLCkFXo3hzhA8h",
  "key4": "51HU4pXgENth1gmhHnyXLwBkpCaCNbQ66vtkZ3ceHhobmnoqQbs8KZD9PR4EkNXtureF4YJaD8hVRVjDAPxGyqXc",
  "key5": "2AtJ4LenXc6DcUdDQQFoGrJHq8cjyvAiDzCdzB7LfMqivqf5cf6XLvbarha5DuavJnHj25MWhRtKJV7jVkWJQnN3",
  "key6": "2B95P4GHJQeCpRDJgzBSiAU7iSnNYhKdoBLgTz49ZEFbbi7Jg1xLgzFAph2uzq2YWixfGk8unFx94hBQpiYzF3NX",
  "key7": "5L7L7icdVtwhvMrwMiRiMx4rtmWCNVo42DtGQKN1hRGYSEvBmUJgYeQfMSQiPtziEHnvTLJvu7ufjjtxJrZbMWaP",
  "key8": "2pTnnRGLKuHWfLxEDCtwGzWBf4GwNeE8LGgVLwj89Ch1PfjfrCoze6NoKDUYn281GCXNUxnZcpJLdLVWrjnmGht",
  "key9": "4Tkd5kGg6Sru6vJj6iNkdgaKmkGqgajfFXi4N7carBuZj6zPs9fh16MjBEdEpodSCLVkXVhsXVN3EGDEChSd75Ec",
  "key10": "2w8SkU12DNfpbgdbT4Kah86HtWgAMPrZR98CsAApMmenaoWcHeXU1C3mrNH6p6kpAo2gY9cDpjTV2VfGbUY34U9G",
  "key11": "3BvqtQbq1px7ZagDMbiGnnp7vbqhqPzDqBNrAygwp4fzD17BZ4vHH2avpmF87GNNAnAxYyGN7tsJhzkbrX1FhNwX",
  "key12": "5qLhaXxQtjsjjVK6DjvpLmqTHVixkiB2LGTAJVV236psei4gjkkmQfsh8vEk6B1LZT34Rw5icyaPtAyEhrCv5kEu",
  "key13": "3JdYZHxknTx82sgkzhL4XruP41L7LiDrthREjM6swzx2YD9Qv5NuPZGBLc8aXTo64ScCnWe9ANKLZ5DLpUUDmx2j",
  "key14": "5YUAMCXazaQ1zWFCLpkHqk9kbktaHSSBprvRKRCvRJ5FkTwZRrjM8f8Z4f4gvfLS72QeLccm3mJzL6G8tay7YyKF",
  "key15": "3rUuW3bqc5fD6QHMnAFqubNNT7vrc8cN1Xr8Caq5yYAghDzuxCSmQi8BnPfvMZLXuST5Edzi5JmAYfM7yetsZA3m",
  "key16": "3yH9qHKHqoRTwiP1DKNayo3hCCnejfiq5i2Rh641ae1NTVB8GYThfhiTbZzAfH9QPYBZYsRsYERdoPobSCrBwrXJ",
  "key17": "g1LJEQbKQDXSkmTZgdybJm8E86RngtmTkSCRqQHSpqYvV8spZv7D9di9wp9iJTbtdFRpKi2bUiusrDh6K8DDFUM",
  "key18": "64Mj9vY6ncmu39PMT86THBz4K9DZS1BAzqo3qwUQpm7aVyQCu1ifpiqWuCAebfCS92kZHt2Ao9SBUxXUrGdhefgn",
  "key19": "22DG5BkqYDeDZEU5wiwXDeAMDjvxVop6RKfU8rqi7i2bmpvajKkuJX9cZtxS9PLAMhauDkRmzbRDeMCH24DJB2rM",
  "key20": "5TvvNYnzeuaCJds8wdgogVRNYAhfoMpER2MtGYgcgW9nAVZQ2SU9TEWaG2NdT6Sj3RtmXYZTgxCp3arpnQaGYSPJ",
  "key21": "4r4pp9CSzAAW4L7Coumdh3v93cth1CJhSXv9Y2WanCDZ9yeVJM7r1SGuykzGoFZeTSFLyBRgHWL41XoBKqkF98Nm",
  "key22": "2tAXiwacKcqoJeZLhvfzrjwG1NBcpa7acvx2gXuDpzF1n8wWCDe3ZGRqTS5UfC4Fjht8FTW1T9nXURCuKrbz1zbs",
  "key23": "4N2oo7xCcHbB8z7wVttShQ8EK6YDHwqjZsqTTHCen67BmdUeE2Yt1Zm9DG34oc4JswbF4NH5iFwsho48JPRoRQgP",
  "key24": "4qRTETBiA2QpeJntk7fUBaXz6x5NBzop5NQW7Kg3xPkAAZRsDLxTwFhtBF5mNfvKUAcnsWyLWx7YUGAkyG7U6TrQ",
  "key25": "3bBKUCDsSqUoDvi68kFi2W6fiSWeUiMeUaFRcJW11JtjXMLCeDFJwHH76bivyeSHKoQwJ7NVAbHyTGMo7b9uam9D",
  "key26": "4tkUkdBvB48ckdSPpAywbyPbGhEZgXCXvSroLdRtJ1Qo8WkQqGhf827BJfiybt73AKcfHCVZr3bzLh3mJBGUWTRB",
  "key27": "2uKG8QLx6V6fxbJuDWSq5ZrNWXRPFYa6nm1sgudi9WBhhZKhKRAiGd27gfK99kcVKs4VqgVfYbDoW7vzFirz1Thz",
  "key28": "21vbHqxqu1GYQfZDAs3cZKJmoqRQYHz5oHN3XbPuzcWTws1Z1wTVSHY5kJUhQMnWRiGcx5aiudSRAZuEbth8gKY7",
  "key29": "34kZyvsroBtWXF9Z8ZNfL7FUHXuxdXSrb9idkXNXqGbLEgqB8DYAj9FGn1X2b4tBfth8uB1Ls43pt5LQPtJZ3XWf",
  "key30": "5hC2PfNCD2DS98VuLzRxzV7JPdhrUpaKr7i85FLFo7g3z3SXrQ21hB7JTYLCKD58rpJ5BC6s89GaecFBtzTfi2pL",
  "key31": "fD7UuQtiYU3JatwvQhQUPL6aVqKHWh7QBxwGQmFSx6r9FF7V7bycYrw2L1ExEVpDhTGtBQNXnEkmGKzrMYhUvFD",
  "key32": "63Z5ccH9s3hNzqDpMwgy5XNcgoq1MH15gw6qU5N9aQmxTjADxehvQjdAEZry1kCR2AfTVucoMDyTFLW7VCkwo3gz",
  "key33": "5oX7NSan3SLzxNjcwxPJyyzr7aHHNzutr2nBvo4QXCjxRyzT7d77sEW7EwdH34GgdZ9K9mac2oRgR47UJxE3ypoi",
  "key34": "5FJ9WiY2EHihJBRA1SRsbqEYWJTaLxtwNYgubqQFsUzcgrk5mQsjuxajPV1c8noQMrR6ifx9sF5LFdvEcrkmb6fa",
  "key35": "Banwdbs4drh4GL6g6PTzZZw4DJG9zJEuoY2fkXmYTf4CCwVyv1yqDbfG1uRi4eSArpnZvb9xStHgsU7xTYLHePt",
  "key36": "62xhreNNrttzHS5xFAkvaEiZpApdDi2r1YFc27peKvGNXeEovFwztvJx48ugy5tw6RLVoxo2LmZ4U1VjBYRtziZt"
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
