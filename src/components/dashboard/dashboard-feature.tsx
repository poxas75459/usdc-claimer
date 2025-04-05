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
    "AAmkKaSn1Y7y8medeSRR7kTTfscd1gqHs4LJ5mxUSESyxLJWY5LNzsAYRgvS6kVAfj1HtqieVtmhrv3qYQ5ffAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9vsUXBFqdf523aY7YNGQxV7dYBWpdjdPmcFeBtfEaZi1HXvxkFA7LVvz4rcbCfegfGdBPtjhL9fRXUCPLpxhLW",
  "key1": "SJNCZaxXjZeEqnFfYRtiBeHo6vgyWkHFSMGTfTCRWiQGBEu6SvQM8NDGAcsFvDrp4sJMVkp5aFouZjtJyJREbWX",
  "key2": "5UXJtCw4rp8NnKeENgk3c3bhVXQWFqDNmRtry49M68Cb5ep6kWTKEVMZphjAeVJRmT8Ky5xa5v6pVeY29ujcspdx",
  "key3": "25fAFD6rPZnjJ6pP5akxzbPFEgHLBb41nHGzGGuoCm8mFuaH7fJuzNK1UYeAKitPM6DCxZ78iyd15DdEkxHvRRYN",
  "key4": "5sMz4hp95iF3eQYSutUfCVsXD52Ntw6Rcg7kWZTTuA8tAyisyS1aYMUiVpF7KJwYyATiKKXMjcMdxkkHFn9TChNy",
  "key5": "mGznvMfNkNhMznb91rL2kQGWCYVdGsTJppQyyoLx5hjt4V2EMSiHgRdHcP1ewE44sKXAh51jMCaH3AtWbwoVYYu",
  "key6": "t1FMWNENfJjEo64GBb8yRGYV9NuqfVScHQjho6AouEQhXtLGG6PzX1rp6Qz21tkt8TKEo9qeDUpUJYN8p1964ZL",
  "key7": "3vPd2F3Cf5SJGNHbEqTLHWbiab9oZWWU3kJq6MwjUaNquiFhcW8RFTcWZm2LQ2E8X3ccckAS7cKhugBcBv2gV67n",
  "key8": "4mXwDJwBv8hZmiU5o3wU4XjjQua7ZDoFd4LdXuXsQ4VjR6X86BWM1vv8UCCZ9Z4zKS5naLcJFE6FeByU8usfGxwk",
  "key9": "3u9P6ndj2wBaLbD9bFqprRxYd499FLFXdQiKMMDazQXqJCZGN3wHSKo83ZZveWmp9EYDEWzA2bwoFC3wBjVvjR9D",
  "key10": "2RuCU2HQUgSKzP9KhqANtaphWjVyVNnHz1sAmYbZoRUMYTTpV2ucM4Md5VPppHJLVCEuTYEEsGm8iDLwpz4LBX5J",
  "key11": "4VedoZpNUUBqcP3RuACSVCD3tKTvyvopQPL2rLdVVoQEQxRCwEvCogn1KYVWGJXeqk8UhayxCt8FggW1GZwUmPYF",
  "key12": "5fDWZchsv4Z29wv91REi5DASXoRMaWi3siNsG4b53cWFiuL7E4XFeb78x5yvBmDYwJhThNZ2HGuHL2XD5LKeCS3Z",
  "key13": "2ztngi49o8TrKhfhHkYTgdxRZ7DabjYSemgJPfMHTk6b3WMG7JsrvcjhrMkTx8oruTyL7imDfP1dt1GZs2y4Boi9",
  "key14": "4FfQnZwqdgmAtzx4siPVrh5ahVg6UExGtWNJVzFPWCaQ17qG1p4qC7XoFR1rVGVCnfWpMaV5YMVTvB2J8HtJqhkD",
  "key15": "5MajAFxHXysbvGiYvtWoaT21A8JdbSkAh5dqkHet9HGThLTvLBBJ8PBu3FFRQ64WqoFsKkaWrgR7Tj9w8ZPEjoMk",
  "key16": "7yYBx6BYbpBs57LYX3QrbNc4eks8tNHLHKqPH9Z48ZHkYtXDafM8cqRwzBSDjxn3N2AVBdzfNg2UDvL7QwNKf3q",
  "key17": "4bJ4fhduFKUeAa5DrdkhbBPf5jmvWjurtkgLs1f2NNwG3VkECNZCtESgv2SMyG5oeoKCHcnG2banuruH5NFaCkHk",
  "key18": "2b4NgptT8HH2eSfUUdV7qibFCLcUS6mru53iCjH1j414acEW2UCAhA67ztU6tqMijS9NZTDacXR4DsLDFskuofvh",
  "key19": "5rKeEAj2HbgRLfP17MdJyFcuzvRBrFNTz1ojVDirxQfMrGERySdL2QMW3L23xR2S4WPhZ2ipuPVKWuN3vurtnpk1",
  "key20": "5DJXkJu4KVGqfcmE2xTiWcAemCMxwU3zwfFpSFemBHCCForBj3sJJxkiSfQh4RnprGo6T8Bv9dK2L1W2BCbLuRXY",
  "key21": "5ALyzxWvt534ygPUyrLxohujCxwM1eG6Qk18ChZ4XdFhXe1XNEZXcpUimH2X1tHRBRbHzrH33GTxwYV6PpmNpgNE",
  "key22": "4nmZJGo9xp7ufAatoxAFvfUCmzaapvDdsmFhPuPhRaVaNq23gzN7tDHqg4utttUUHE9692tLQ9A2k97ase8CxUgS",
  "key23": "3toZQxG86vG5k1jnAjHGk6RYcPqtXm362fWLXcDA2ikRkrbcF38EapUC78V45Gpc1AnFSUM36LS4B9yNBN98x9ZY",
  "key24": "CbtSB3r3p486FV3wz8yHqhREsvcGBY7VNo9SJkLLpFj6Z4cpDK7eW8pekjLDDgPg1DnvxyY6BmzT7uZPDq33FRV",
  "key25": "4Fi4yZH6pznpc1WV1YwsAo1LtDUYZkBV37eVjsascG8iQNwqkRmnFrK6ENswZ5fqhtW3CYdwZgND1oe8UQXm2bAx",
  "key26": "42ZvMmotNHwTL7pwxisZ2PGDyuWRhKUe87NSNfVb7PoYPdaZSz8rystaQScKXnEwLzHTwR6XF8ViKHjSRThx7YTg",
  "key27": "2qrQrPMoLW3F8tm4u5SARjd6aTYLxS5TxyqfFyH7rViHG6wHiU5NVeHb43THLX2aRYjeXZ6Y8wvneTrCzKFirER8",
  "key28": "mZm4oL5D7hnDspEGSwrRpNisPA4DvGLL83EWyz7GMwuwGQn8efQbZudusvTn7fRWgDFux8phtEASdzqvxTWfsn4",
  "key29": "41J2Huajs8sNxR6fYNr8vsdzHRj3P7EZTobq6AD1NcY1eczkoVFGYKxpuQYsgjQBwVKyaUtiL7yfYL3V7W9MX11r",
  "key30": "5LAWFWwvfPtGGwdqqGQxFqy8WCWuYCWV48JfARMNMD8Dcif9vbUQFx5oRHa1m4aaHjNACJnuytH2kKmJGxDdTjFZ",
  "key31": "28tuUSevb41ujouHPdXcC6p27WK8pvzBxgstYSpL3R3RdYA7t1kqk1nprx2Yj5fyYqjsx9Ygsm7EatDMj6TGX9BG",
  "key32": "4NqKhERLMZgRgNpneN4VJndHGvh7ysxv4rgAz4AXaj7hKACDjihEfBNtoC6wTHeKXJkJTBajtLmoPgajrWruc8Br",
  "key33": "4MEg3Jx9pTnnn29SmGswbcu3EEPQQXDTyLv3ZC9WoCtW3Ed4Jr26bJnzjWVznpafKL7XzNegsYct7KmkNSdWt9ut",
  "key34": "553Ukq5y5BZnZQuyvS9DwczSDHqv4kw9HJJED4LCYafDwwhuiaTEM5nnhFAvcU27fQ82hdfo8cPMrc164AjWg1VQ",
  "key35": "5PZ9o4e9VNKoJ9Yt8812Ncds1fNcQGw2EgE5pHofet4zyR65Cdm6y5cNihy5VerPerdyAwMepySh2gXSWeEGr3t",
  "key36": "SW25uxEma5L5wAZRM4fvUjdk696wmVvvFyNbeV4tJk3NwGCg3MhnpXdH7WNhebE6hAdE3eEjttd75cFJ6b92dro",
  "key37": "5KZerDErJxPgvjxXBHUiRiZ23BhCAgrnJ4zXADqWZnDXU4zNPB3jzmzfNt8cNBGH3Q3amR7tAry26c4fWkAPdCYs",
  "key38": "2b8qh1NJEknCBV51GtU9h1jkNPM1fZVoDUp8ihDq8MYMGgouXfezUDJ2Sd6qy5Q5GFofz3Tn9H71zpAsmxkP7y7F",
  "key39": "4c7VAd8mjtk4VyycM2KLmVuwsqKqKea92MwsKg5mWudjbCHNj635tHhQfzpMU2Qq1K22CK8QrwZyngZLfQvcwt6R",
  "key40": "4YTw3Cym2oZEJj6dL6apSzvE33V5eaBP8nQUzXFMfUY6WBFVc3SnJGB1NmCKfk4vegRE1DMHbdeyMhQVaBh9U7oV",
  "key41": "31n2rtAyD2EMPtWyPnpzBjfP9F9WWmPawmyPm8SwMqSEbzGf295HYgy7ABuWEQVZEih7nDFHAe3FwaT7DWTjdtFs",
  "key42": "UGtEXXHAG5CDwHuBTUDmDCUxCeVDQTuMCcQQ7dAu3FmKWfjH4kpaMTjwgAfyzn48PRMEJD7eGBFfHugsayLHsH4",
  "key43": "3GHxjX7w776ZG782bGGEXBnCzUrNj1QuEw3WFxcic67WA5RyKtbuxCMXbEwRUHGDXAbDLzTRgBbVYuaXWtMnuMdV",
  "key44": "5f3sR15pDWuRLhNUT5Hewy6S3qE2BRU4riEsNCLwhspx9eaa5P3h6hzfT1UXhyfXuvKT3sU2uWpVQmxVHV3WXEXe"
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
