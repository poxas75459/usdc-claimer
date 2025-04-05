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
    "44Tfqx44XnsErxNfEAX4on3p1zNwXnYhZtnDDW5UYiJdLzReNuisbbBwwbkvgwyhbD4wKiEUEYpCQxqatp3SJzfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6m5zGd7ibmiLTDNksfGWqmoNs9dWqWJvts3vLZtKp7qPto1LY7zgBLM1fBAUCQ9UMpSF5fG5nN16iiux5vGPzQ",
  "key1": "5KWSBerCgtJc2Lq76zG9MedP59b6dH3k2VabDk68HAMAKeAJpsoyajibPBCxZawaA5dZo3EzJjGG717sAU6hMyo7",
  "key2": "3DRzSL26umZz8Nrekidsrg48KT6Cpqhb3wchix4CNAFccGC93p9QtrAf3vkstJM8jm3M2T5LAbeaU27LeLBox81V",
  "key3": "5RF6zhNr5Am7cKFHGU3vkK6BGb8T65pkwYiGbfGNmWedvuAmffxPxFiZTAhXVBM45QQwKgQ68fu3MV7NtN4HwNV2",
  "key4": "4L21Y9CE9RgbqBQHXQjhL15a1CXxGtvwQKnBjiv2SwsyZ14r5aeFavDNdnsrw2KDeaCh9Dx5BKCRv1EHku1Mx3aA",
  "key5": "9pfAfYdhWh1MRqwW3Y9P16JU1ZaiUnNg5khVob1gTureHwju7vaGYB935wrsEF69uAsaDbMiaBQzTtJWevpgtss",
  "key6": "4fkhkytCWQwHAAAWvpUMcz5uFxDq8s9scMighRv1D4tCmV8QzJ4L3shiT6VLm9ewF1xEEpHk2RNw5aVE6q6uXjbw",
  "key7": "4n61eZHjc2aguLaj4CmWFyHNJpfDmhXCNq8U8NQGv4V2qXtTmibF9PYoLK1QaU5zkefFxsNAzR23hZf2m5mLf7EJ",
  "key8": "5PLkoEc2r6rEhaeeVfbNQqxD4Ez14r4rw1mB4q6YZn1dtNHTuw52Hykh2hGXsbRkt8Yyrn2e8hCNJGFRDxsppkmy",
  "key9": "2VZRhiAHAU17i8TPFcYMhpRffRKACYV5kbSMYfc8pAG79x11oQ4iSq8XGnmsAtisBT8iZWEjs6dGL2q6qnoJjFdS",
  "key10": "yhNB6BHQnDZaP1t6YiaUia8YwCxBUQhaFduttmZBvXA1ejG6GiqvHfkgZQfhyKAXgPDzEB6eSzXqN9k9PAUcQPX",
  "key11": "5PsQpMM4ZirPzzTezNBMwJWv3kUZ49MucBtSGkeRmNcyEmqH3YvkcgaCu9zYh6ZhEBnRCcuf2Zac2268wFwL8uK5",
  "key12": "2Y1nW4NB8ovjD68wHR5TpGjvmt3yzcj7asFPodDBM8BmE1rHeQH5WV6w9WPCZwiGPT4eHwfWzPZZSN9LBeVmRjQb",
  "key13": "16aea9ooCypQ2yV7MZxCSbh3use5m2EM66ymaxbsgPMxWAE4xpdgPDhrWQYZe7nzRZtdoiKi7fbiH3nR4E1qoDr",
  "key14": "2m7mBhGh8SZUDhTxAY1YiSPXEPEKJRc9Er7D1YJ47pDrWN9QfhNpxBaaepZ2CDrSJbrRh4rYbkrnMxZ5nyNDVQmF",
  "key15": "3N3xQPZqXSgquRaWrXGWJWd1KRuYXJVCqtmhC2f3X1DBpeNSzcfxqLr8c5Eij5y3bbAHpLeFmY2eymja3h8kpNJp",
  "key16": "4KQH1DC8FKA3AMuATc5Zxp49hzEfSnJvehbi6JfY1MmRVXT9BjDUPuVKMB74Hf6rF3sNDE8vtjuxbpRLaPjioPH9",
  "key17": "2a7rJDvLStzu4VkwiYzh9ye59uiaNL2GP1EB2vGLA7XsZ3SpKUf8eeoWarBu7xTrpt7TrMxfLAjt6dP5CR72FiLj",
  "key18": "G8i7W5FFWg7RJKZErfUXD7Vp1UkUetYjKCz1Ca2gEf1wLQbMK2mGGTAFevjmNZBw3WJLHr7aGMpvquvJjyXXEE6",
  "key19": "34vbzCvgCj4oCTYojsNFGshxhkRRmALRumBzXP6buAYG8anwKzLSJckvWBPDM9vA2WBBFh1kPNPntyKKMMo2ttN7",
  "key20": "fjgovnQxoqr2Hfj5Kxz62tDn6J9GY65HsDVNM3LEHUYfZu984WBq6dC5MxEm3cjtf8CxJA6Y58TsYJA3vjA8Xcu",
  "key21": "3r5Ff232C4uyzsudWCcKy1JUXs8ZZdExU3QZvsf3HWDor497buFiYdKKE9gk8yeQ1fEzZbDRXDzwpWjPUDaai4Tk",
  "key22": "2sZjW7yyjkUE6BmRZCPm1wuavLnVyhX7C97tk1pRjkKEmQ3RDw4oe71gZp7dwwN2EBUYZqcbpHJdYwwKxnP8FDwD",
  "key23": "6Bq6t9ijRdJHBMLES38aGTqZGPNhJwUFvaMX55uEaHZF3L5bcXJ7baBNbE2mRUGkqobHazkoNqSJUDiJRHnNTxV",
  "key24": "384VHrv4qNXBtXnBM9oKqbGWGwK99KxftBWZr9KB43jCPzfifwPUsFsfhSwaEGmDkggTRJLKNNNdLSKjUExPzyeV",
  "key25": "5WUjr1XRLRcm5gLMdBEm3fz3u9d4zh8xKcyJgsEFRM6rxNoFm52CXEWNEztULaWhjNYhU1SEjd4KLmSxT2ScxZu8",
  "key26": "2dLJQSPGuiqFKAzUiC784uNF9iMRCNNHXD6v8QoVFt1ppgjeScvJ1evJkPfnT3MeHSsYZuVZe5S3aaZwq7qyKFcT",
  "key27": "5MTpvFqZjhKUT89qsEneESXbKCNoRSGbxHAG6zc2NVmUGra7NjKUBS1DooTZ1rFvHAeUoGuAJgWvv4eFg3sQuFLU",
  "key28": "5CcTCzgyZQyZ8f4r666PMm4JkTCYZ9Zhh9H3NzoArW8A1QEfnh6n5DcY1pXkydezBeU2B5Xz82CKmPqU6zq2gbvm",
  "key29": "5c7H8YaNLVyjK2sKpPyKGYTwViAU5aoBWrEcAQHbjsXmwxJXmj2T5voLAEyJ78zbbGx8JYf1ebhqWo5T8GJtGjE6",
  "key30": "2pManSoPNTmZWqcC6sUsgPNzhcbpyWQGVogzchMfsjcCAbmkoVjHDLaEVygV3whzoRB4GFPRCFSDrMi2fXxRYcdK",
  "key31": "2nTdkX5TJPzX1FhfV8HCsNtgbFi2ycsUDQW6HkBVSFL7mpzLCQQ2zoD7nSdZAj8USoVcwTGwEGRR2SF3GPmzeiHR",
  "key32": "5aMZU29jQWjFfKQqF7cuQXjXk5jMqZ9aFaijvuxQnJCmsGApD7iEDWXAmjFiiZb7Ha21jGsPSM22XfBrSx3rW6rp",
  "key33": "42h5qrRyJbnFDJCUW6FLLaNF5sFqw79vJzevBYrYhDbFYytMdJQGXKxJdE6Xv4hWk5TSVgw3ak5Pmc8a12hGCULA",
  "key34": "5juhCFGL18XdiNXFf3AXv7MPEt8K9cxfoiN14DjPRYMU6PxxjezLf3osWidYReUYtBrSpLqt1q2wurDaiuf8rGk5",
  "key35": "axpL8hxb6BNaAiwwY2dVfXiFT9WQ4pbWunLyXFzLaACT1rwy59sMYEmr6s1wzSU78SSNZSMMCKzUA8DMUja2AL7",
  "key36": "49S9HrsPzT4Y1hqXn64ynm6dEY4pBksVnS3gD7WverkXzLVZv1MVNoUHRcxAx3NwUuGrfxmDeHuXRXwUGqR8YBBw",
  "key37": "4sN6gQpJgkkzszva3QQ7CobvditoQ5P2UavhmrrcBiQEfFMPucr4DN2sXmHdGMGcHHy7rQtRGpGCUzjuoysfcrjV",
  "key38": "4CWgq7qYQdP4NNH1kJgzF8fz14rEhpc9FbaDiPc7jEdw1KU4A5VggmXmAFez5BCN9BtzRijxiD7NLKYxgG14YLYk",
  "key39": "2dUMCUTT5XLzsvNEvHyvEMUPKgkYaoyV9puCgqh83C2riYyyXXfFFTUQwzYN5463St1g1yPtraoyNaYxNaJfSNYk",
  "key40": "GAL1NfExcNKKJxknSzBe6eTxUG4TDa1wGw4p1DpqnabZ3QHyXuqenTyuxpCH7Sm14rVqtVMsp9vqGqXcJeNTHQL"
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
