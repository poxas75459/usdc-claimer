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
    "AuY16Ez7i8nQz2pjk5KEgWNey8vTitrc13rBTKLjfvHjSTKYr4cMNtLJyNGhVukbcUhcGonxvWoZbKCHnr6uR9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fS3wbTyEka9dkoWRGydGF4gDAng3XzmkvnNkjN3rAw8UcFgT1U8JdoxLfgNy346uiXjTZjo8x3z5syz1UrpPqgf",
  "key1": "8VJJ2Zmi8GensFRhvBM1jy15cDah7rgSVW7Dk5dSiq4y2ThJcdczhXqrUQhyGohE21P2eub7S7EAKJicddz9mfu",
  "key2": "3kSDm25XkzvFS3nEjcFJh8GQSZL7tJ4w58M3a2jqoG6ArY7bFGY8AoP6uNdhQGx3yRPvdZwmpa6Zf8myByAGfaL2",
  "key3": "xBeLnZVz5ZcvmE2nkaAhYgKKM2NfEwHuJXXrjNbjUzoyfgetzWUbyjGFzN4PiLw8P8Miokq3wKGJq1gnaghDpaS",
  "key4": "2G7k12mYyjG4HoHzw6q2caHJvvFDuJL1t2FrvSASK8meUtEjovwEa8J9246Hm5iJ7s7oRMTJAq6YH5a77G3V1HP9",
  "key5": "26TEn3ktNoj9aVHxMs8JyeRaRGBorHR65Ye5AjV8cpWEgdZTeywoW4Ad98hSD9xPEP3ph6QwohXTbBqMXxtxmGn4",
  "key6": "64sTBjBToRSeWvSLbMatYm1BmWfPkou1n7vis3pXt2uEx2SCHYcEmki4DE7cgn7QVcNLBHopqEX56g3du2iS97AB",
  "key7": "2JSzyahE4N82Gb5dupQ1vnx3e8wRxjHfFqXoQ4gvQkBQQfaJ2wJtEw2A6dFGoZNg5KCnCMPPpmFzZMbNRKLVi4Pp",
  "key8": "4xjuR7deC3X87B5mc9ecsdbN6ecunXM2uWZKnxGW6RVi69WusTX9DpsqoySZR1HVRJD6hcrp9QcpmWmLKdqwx3zJ",
  "key9": "4iprygWYGRdFfMAGapJH2XXSj78TSqepjNe9mRQqXd3u6BGCvjSBHWXN9kxxzfsdbsMsJMnnQeQuA2D4qqhpN1Wu",
  "key10": "5VrFvu1Ze1KriVuSE3BqvwiPCQ13eAR2CEGi4nzmn7h7cQcJ1KNB1dYnUYkxHPASf7kJTJToi6wCJyJi4AzJuwe",
  "key11": "N3wThxfGJ7wuq4CU75GRTV8R7yHAj6aRRvUdtRuMaYpmRpDKUJ1zjjiqu8JSGkvvf35HREMNxAyLzpBgdhe2oS9",
  "key12": "Sr4EWqY4DgQxqvUnVskqxKGL47v2L5hcCDEmQkKtGZUadNdbkgx4yU6qf3qpkC87o4sKxKBTzaYdgnCnQiyRLu9",
  "key13": "2Fey9cKrKDYRa6jgKy9LMxfNn7iXLj2ofh7rdSekib3V8XNC4ST7QvuZmyGU39HrU3T7QV1WVszBf7pw79jzytHE",
  "key14": "3wpni2todSV3qD3hXtqyK1W3DhyoHbTatN6oK28JXxJZXcqvoev712LgSsxzy46YzYvEo2CZQt94E6dC6boPgtBH",
  "key15": "cnnGYeqtaYSDy4kse2w7D9p9UDp6C4e161Z2WNCBqAceCfs9UzeTrbqKtcmJSicAjZRqnkBeTKMqxtuf33p4usx",
  "key16": "58CprqcdjTb4gwKFbNEcwxVTUe8Za9MMnKxnfdJz4mbHJGE1Txe29Zo7quhoqKQrrjgL7tSB9BCmYiuEwqdm7wt7",
  "key17": "NzEQYbvxy5Kevr4pZNZBTB4BvwZ7BCyWqTH2CBb6V8xS2za59PHD4vQLnCqWZpATAoGiDKuDs6CXYWU1tynghpP",
  "key18": "LMwjBLSPotSt3SvBwUrdW5Ya7RhynXzVuMEMdhad4SCisWiN4hN9VVWq8wJB7winDkTG4RzmfBg249YoWbLiCeH",
  "key19": "aQpxJuqR27uaMTJ1R9GvVQ2B79E2FH1D8AoW35r7LKZdwddsVk5tcMEASBr7CWnVvc8L9DyP8ivRoFDK5nJxKLx",
  "key20": "5YY1SxcDoNN8PGzpuhW9KKoCqGeRXdpAw9eoEUym915px5J5W2cYf8tXUeJ47SDRgp9TpZeZ9KBJnhron8FCGamr",
  "key21": "5s6GJCsuYDmMVUye57zdueWk8LbayPVhdcTh2JqKy49JHokVUkKewCQif7oFmMC1D6S1sV26M8gsmxapsRzj2mtN",
  "key22": "3QzaRBinL3fgkPzYRFqyYDdctWTnxStqfoxiQJAQ4tupXhBvFQ8BzybJk5uJAQZ6ppdS9jsfn8tV7bHkQ48Ms2mX",
  "key23": "2radeg7Y9Nwa12XVWWSvBSzf8PqTGDuiVBjF9jFPPiWxE17edjsZMANVqWJ3cBSAzBZPQWBDGUUDVjrMLatCm9Xo",
  "key24": "3yJeqZQYrwEMLqPxLmT1UcFbWjGQqoEvn3AoQUvDVEDBt87YRQ7oXD6ZugZXn7RSujTwipRQaSRaZF6PUpofQMbG",
  "key25": "4HSDKuBVMYWfByaNBpnRQ7naFcTnDZmTcRL38oiQMeQBDinfcvjYqWHZAEUTSJbyjh1ZUHbpHscLHtSjfuJVnFqU",
  "key26": "2xHxyCCG3wcRovpR2mWFuNcNrYxGtWwy9J2XGZ68v2SC8JemJz3CyYGJwtb2zGpbHosXZLga2gji9fvEwsBb7pFW",
  "key27": "3fDhcBRKLNCTk4KYcR9k9DdMjFrXwV6DtFRoeyghVshGAqckRDzFtU6WjyNbD9SZuRDKdRj1LxRuK1zvFn6wriyy",
  "key28": "4VEJndrMyZMNwS7JZYKDVyVkXZrKpUerrydXjQCTkQdVfu3VZXqvW4ZxPRabysjpRbL6QLn7ACtycnhkb7iDXQjt",
  "key29": "uaqT4a91kk67je91KjFZa6PXunQpn5s7wnwuLcYGKg4bLJyCfYLYBzoATvjAbdYxBoRJhUmR3kYn6GL9zUGMgdo",
  "key30": "5gPChVtAynJ6BcicRgyG1ma7GztCFUxh7JPv7EaeCXkWf8yeNfMsLknRKk4nU1guatKWbULjWd3ULdFQQtaPoRkb",
  "key31": "4BJ43mH5R1nZB8Kbx29Wg3cHRScosnKjoBgug6mGUiFdgfGpywK9U8wvXJtPJ5iZXzd9QPCfmobETEt1dBPm6P8n",
  "key32": "4FPJfzZAdmcmnPbBfSyGoeJdBB8HuAwTeUA39ZD8SZoNVRMk7edRZE3ez76grAt3Uk92zL2dUB3Mg9G1r6comfsM",
  "key33": "5semM2RFisUw7ATrH8Hv8mqXiwjsrwyyz7oq2eP7nYC17knChRhputDaJCs9Bf5b2mHzJRF86YGkcnhXQrfaKzvv",
  "key34": "4bXb5tcAQuH4MFtv7YdHBmKQ8rFxERTWaqqaUGpLGebeYRju9rD6atGVyv6Jd3a3mgcnu7dNie5zpdshiRBKaJsU",
  "key35": "2ETF22zRGcfc9WuKqNfhi5kbhp4qoiCDUsSX4MUtcRT6T5Lau37JLsCNff4YkyFScaj9TvPRwM19ZYNJZvCdZg8v",
  "key36": "62ckyQXvmr1oLSssQbZrAm1qrTZYoB7CbGnfRkqsWr6qyw42iaKZ4CsQY1eqJfdx8gzqch31x6YHdorT9ye7ZCC3",
  "key37": "3DrUscHvUoz4jtKmnPXBaJCsTN5goxE8ZVYbzqAmQGR296zvahHJ8LTdzpNLgrAfModzT4qCxwzMALM5adEFZmSJ",
  "key38": "TnF7iA3JPgnKBjng4uSHvTspTpgdvHwcHSkbw2HCbxUHB1NfsHvrWfcfBkBviVktfck68wF8nwcM5DebSQfSYkA",
  "key39": "5FpM61vEPtbexPAJmnToGCnjcb92Khr4tS9ncqi2D6PmnpZ2jDEG4rEqoYBLKfYjtY18y94L73o3eBBAo4wPQbFp",
  "key40": "5Z9oAFt25nkCbW11nQuUhndc1xvNQ5raJ42VxJqG5UJRXAHwPNoZzE9XPyfMyWmdnvhPkEdjhCP4NCxe69aFJCK2"
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
