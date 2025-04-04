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
    "59ci1pyMvA6znzWxiw5EnbXFTZ9nC4UyGzo5gPPSzPjd9ALv6nDE5vG85UqAFt9uMkPsaPURyBMK1HVztctzv1Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S7GXeLq3ySQdB39NoZAK8Kk8R3UszwjkmeYbQGsdpKJGMNe8nzdu95kSbUE3FUmw45KPcHiBKj1G3q8rdF4L389",
  "key1": "4cWFEMKYHLCGcziLN1kgv5S3UJ7ZbQoKh6ZTnowccpkTBzAsdY2gCmZu3XoL61yT8LQZvGi6VMkp1fi67PvxGVBC",
  "key2": "4pkcYcL3dohssGcD1Pz5rWNBeEagEM1pQ6KAUDRqGmKeuQg4NbHeTiJtmHsUhMZ1TgYLYksBVn49mdqcE5j1Stew",
  "key3": "3UMBYJYfoJdBmZbkGq17ZGe5uU85vieTt7D3xPMnXkSDXhH6oz9ELKUBj1ftB78FqgGQEpg285UcjAt4Rwv8bmWa",
  "key4": "3j5vanRMMBtSSGb9wwtGr8sJRbBppPRVtGRD3hJBksaqpNHAXuhhXV6KgLgwNjWBgeFLcrkRaee3Yw1DVasX5J2y",
  "key5": "2eDipuSb52SizKBca4uWhD2inZRL6zhueyVA8HUW8hiKw4MydKSqSMm9MNRJ6hffKMGh8wLaEqUcm1KNGehxKF8R",
  "key6": "3XYsg1FtnaCChyRCV2q7SaRfULhvG4pf1bkUJk2nEGKm7EwqixNqJuQbbFRKhfHAYpSbRxxqifE8WpzUDakEPW6x",
  "key7": "2BtRajr1eEQukCoDZapCQtjSw3mGvLsbnctWUCCLJv6bJTYhzkZdY9Tmew1wtdgT2fduvFMXx8bT9XmRoAiDh4gt",
  "key8": "4EKMhtuoM2HgLP8se6fDrrdrU3RYWRYrMk7qSZ2rbS9c7KThAJUYKEKJE3FJhXA4n1z5Vio1UrnSitLqPXe8oZw3",
  "key9": "65vvtzNuWNaDCjsms5FwvmyhoE7UuEpKvJsbq6QpCJe7xh7VdFLxaGftKp1UzZafauQzRNTf8ehwveejoWg4tafC",
  "key10": "2FF6SGLpc7yuaXi7MbvjLgk9YFW6BSQWEnX7jApjzn1JL7qMXNB4ErqKpoKD6ojCi4Gmp3hXjkVzZheSdg8GhwCu",
  "key11": "5WMVNrVfjLDhedV81f9voiLkuyVNigfcJHT88pSi4Z8xwtNo9EiUf8TGBYUmAYXPZGpE4mmG5N3eWWK9w9Nyd3zn",
  "key12": "3aXhFmw1Z6bmuPAFxJZQES3SFNPWD9gYXf8NZk1gjFdarQ4FvLA1EbxzzBJv37PqCdVTKmvvnXncQhr37BxVcW6X",
  "key13": "5h2NiheC3w7SEFCSXWCmH7zaV1kynn5CoRvimn7DbiSvuAC8uX4TjGyTZyHgfkt6YQBWsRkn2HTiXtYJ6y2y52Sf",
  "key14": "2PNF8FTJTjmvisXyT3GG2ZW8Z7a8t24fE9eNnMGySB1zCh1RooXJoUTbdXYzydYvu2mDNjqMBCK8Vc5CdeRGtvUn",
  "key15": "5jn8vSyB3Edewx1dvd45k9qkwi22ThsrEhf4gCKPcxQEBAaB3txUn7v4uGxPuhVWRb4RZ6f63qWD2R8R748M8TsN",
  "key16": "3TtY5STpukPgWj5ZnoLudnmfB4vw3yNXAjimtRw8HjqNPF3whYakTQmmC5pbwRgTv4fRbmGfVZRi2ymqYj24Buew",
  "key17": "2BbZdFjsBgPVfbGU2wBS9PeMHTnHKm2G84XtnyDVxRGRD1KAuT7oFUxdKqWofaaRGguiENBZM9h3ARDuYbXLq34E",
  "key18": "2WgZYB4bGJFiwywQCrJFXcdF7KrVrLyutyJJMC8tsgkcbeny5Ye1o3MRE44MZ8DTbufnSwTddqJajTVYJgg6SZ22",
  "key19": "5TXttbC3EU2jonpsBhAYABwTiZgK23cEYSG9FcymoYjAzJswV6JaXqGCC1X9VKs9oM4orW5f8aMCEtw3scW8bHJk",
  "key20": "5LVCXh8PVSuCXyLQBkXY7T4qffqhBWHpX3YZ4Nxj3XiNN6W43hin4f4jUJpQWKEe8k2pcA9n9BH1MWPCqVmEjBUT",
  "key21": "4utihXDvD7bciZqDzohZhCXYXBjSCeZs9uex3nJk9BeeLaK6GgGRducPHat4HWmQ2ZKommueCobRMPCvcCwb4pXr",
  "key22": "52HyxeHbedZehnvVWvXpJvinSpCtWNHMkm3QnpmNYsfNEcbkgjnuRNCHL19irGuWdmcgt9PxZaVdH37ZjqSnDXFi",
  "key23": "cqzPSiDWUcj3CeHQ7mKmXGH8cfUjNHDtJSErxx1vT3qPv3rWjAUrXMggBVc8vtxBURkwRRru4ZdVstSsvgJrGJ7",
  "key24": "BqhHaSncszxR1dY2b1qVi1C77z9RwdRE2CrwVF6dZheDxNzvzz6k2gBR2qUjWxMPgL3NhrQnEhvdQyG1HxvWQab",
  "key25": "2zvoTt4XCGYvanYzLBWgJ6TTTq4tZ9rk9NZusdWHTyLzSPYMqmNu7PPfiEbYuxvtz9EXDKx7sL219EnzdPKFwCBh",
  "key26": "3Z29Ts8EHhdGPPCwiW93f3LneHy9M7vpGy46avCxrcJAYvMtbM44ERgCqPscXvwZRcD1oqvpKQnrnbva3J2YKAxp",
  "key27": "2cPtwh9xhG32CrTrQ1svC8MLVTzGjq3eRokSASbmK8o7PEQR26zVNDDeWbD32KwbjHXnPJvX1Sqx9yVZxC1X9veG",
  "key28": "H3UEfcYBmcC6m7jMKWGXorfp1kKGGHFa1JtsZz1rD1YVAUsAfnFQtUsrKXSoqjftzZo51N5TdAQDicU7MdERsZa",
  "key29": "p9b8WWYJvAgCAvvytftwB9pyuFkP41LKPKsZ2fcMNtYQ6GZ8LqVL6iwfUEwNTLPj2Voznuoo1JGShU9Dv99k8Tn",
  "key30": "FknKpRZZDWj8mmfa4p6PMCaH46KGx9czjKn4mNHvi5DmVCe6kCJ6waFJyjuyWThRVXzHMebi7u7XNv6CoQe3dB7",
  "key31": "4uMt9CVWYKwqznQhTz2NT12FcSDbsfTo53mMsPTzRK9koWm1uLP6yKDEbXRuR87teqMEGUyMnKq6e2SZsDia2cyv",
  "key32": "3VTXVNDQfQmGbJaBFceXE8NnAqzP7mLjGZ7qYtNuBygCbvJ2TwtJ6fHHpGCS3WqnxEMERBX8n4UTjHJHUeMQMbHK",
  "key33": "iAwohyRxjomDx48XhsKEPgPipqCWKh6UqtXcWpYTEiMM6Sf32F1mNu4smL2pbwkNHt2LCGT4hA3jvEFNXsTKyS4",
  "key34": "4Vg8acjKLCeasFkmkLnu4AQayYMRrLpPRyriK1xR5aY9nkbEDj3fykpYHgCXUtxqAjdKhp3vCaaafqYgbnMUgiJB",
  "key35": "5q8arPnytt7FfbyeaZbZu6PLEW3TxNwNvVAR7ZYwFb2D5N5pmvyx4Cm79EncRHpoBRxRNGr1yAKCBWGMcde6YGE",
  "key36": "5bjxMCgMRRn6osen2Duod7fXStHcihjTeEpPsmHBYuQWzPExxBdMyKoFwWzmtdqAevDGkniFsbwmidTwCqMwnQnw",
  "key37": "5zecsn84ZDNXMP3WWYVch7FP6wjqba73U4EVDogwVz3qQF2oAgKW7q8HPJbYJsKttFi5x3XXToAaZcgxSyaWGRdM",
  "key38": "3YL26EPLmxTmrZSkCiDa2tL5ZhoxWEdaTSxSgpDuwtqsxAqC8xLBs3TfALzQ6Shmp59DDLhVMQpRXC8DZWiqchQS",
  "key39": "3d59cyAS4LAKJECc2uppH9bj1xi9RXgYpN2aTEhoWyGsvYRAWLStqhCY96cNTxunmoknqJk9q9S52KZpuDfhgBTb",
  "key40": "4foWJoeM98hjfetgoiLzncZbZNRE33eaJzzpTixxU9tsF5dSNVVAcsJfbYwzkStToqhcP86mW5PC6cyddJ7nCywv",
  "key41": "Ai9ja6L5J41TPtCNBevZgMUoPJZ1HRxVpQ1kxMSVwk9LSfQzqhSHj7ZNYEucRdTF2qNxtQStgTi3MhZzv9kx1Ww",
  "key42": "4sLhWtPQYTg1QaGDrEMgBnnEJX5LV2LhgyrHzo8UMmqWQ7Jwc3RcJuL54RhM3uKLQz7r1BXddJHSYiJY3uPtQYVw",
  "key43": "2Kz7H6NNrck7mZRqVryWq17JAm6WmfJosURyHaRMriaE6Z4wDYVi81VApTwF1tM94Zu6fZejcs3q4ZQi9JyrwHsS",
  "key44": "gNrSByRSbrMHQC1k7xoG7PH8rnh22JXBtAFzMoPj9KZwKU4iXsPXyZhopMgv1ukXPxUGnWJzkbcivXodi4m4PeH",
  "key45": "2WKhzFGca7GHk4KzYwidJb9BDfiJddkXBuyszCAivddcMCXwHaphUEQTqmxP9jAyVukGK7uWhT1U4XoXw42Rc5Bt",
  "key46": "TzCAwmt4e4qVnGT3otHCY3TwskZev3ZjM8o9pPXENKrWqKNaRNRmNWNQDTEtmhQvJ3F8oHDmFzLNJqtaniFXHbs",
  "key47": "4AjqsQj1zQjn9bo8sgSUdXh7VZ15eaASBqE2XWDKCsWQo4sNvAfXy83kyT5FFa3FU2V6yAhFKcUe6H5sJYknbAci"
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
