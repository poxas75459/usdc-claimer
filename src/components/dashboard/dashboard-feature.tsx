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
    "5vnBxTJVcTjxpbW6icGF4qhoiN7ZpGXiW5USvBnv2rNCDXCFYkmUZpDVXo1xsr1cg4ognGfvBppxcWz5sQQq1oTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZBBDn5Mtip8EMeCx8gd8MxW59dLLQ7LDwdNShDFVSaYnGpoxypjdyC9mEnU9Pm6wJ5yonLVrnmii74ytqNp4NM",
  "key1": "4BAcY9woUrThjNBEYNYnPQV6BZGugxVkDCX3aw2MYqz9cggCXupcCVJ5yVrUnLTHCJeVhkMMDdyTY8GeVFzCeBeJ",
  "key2": "5WZLKBysKHyXf58VDRAAeVkmJHAaTeEmtXvyWcqvsPrGZvxfNcVmfiC6vjTZwGPeQwZokrbxEx6Duj5gjLwXiHEG",
  "key3": "5VdjdMK2LqFFCXscRrqoXNpzx4mv23s7AmodTSAQo9jW5wRy7CrnRUivqyvTXt1L4ta1NvgU2rtvvdJW4NfEyuWB",
  "key4": "5q31QaqvBiDbKmcvXNsgtSgQh9nrR7wst5S4YWfoBMyLg564adybBGwq4Ws3uQB8nEKSz7h8tnBggLDuNHmLZtmn",
  "key5": "2KqiCnvTTCzbrWqrigUach1dS2oP1HcYaNJW4kzoVqi1fwD3kV2HahVBxQE78JxZx8XVx4bAAx7jQNWoG1w2HQu7",
  "key6": "4yWUTsrt5fmxhC6A8smDVStJMAwdE5hbCN13WvASAcufzhQfZaYZZAp476F5ckxQJjzLnLFnPn2eGQiNmcwzGu7",
  "key7": "cHtnLCVCoD7BWwdnAEf3Gyv5JFTePrUGdXXkQ4GUhMiMD8Q487Vs3FRSBRmwEGsnvUCpqxqF1Gsov3scjDJCMKU",
  "key8": "4Qtue7xmup1aoHhz73LzpddU844B9JWEwY2TvBYPEZssL682ag4ErsviPttgpMBaCPJhSP5Hf3sHmwE7qakZtAfP",
  "key9": "3cZykXs6jcthhP8X9EW9wSVWiSsERzFb42YthLZGHKdRQeB6Zn8RaF9R3uqPd5fBk3r98EJSVnC6oW9QKM8REewh",
  "key10": "3TpTbVBM4vZuGxQEa9Jjxj5NQHmY9HhGXdGeoEvFVxbwGkoYEwV2AxuTRm583p4K8oEXp5EJmwWdrdhyZH1JEuor",
  "key11": "m1utJ1iKMbdgStdF149HRaAdro8VMS4jk2zrAHyfuPaUFJWaX2n7tTsn7yeyBMzKJgCr3YBDKSHMf2Uy1zeZUHM",
  "key12": "3iGxWVWEfa9wGySHYyS4b6dmtr3J7W1SnFpEushFjE4FZGRASFScXBd1utek2R6RqCFNSqwsfah23nbj1jN4PB91",
  "key13": "pV9WPa1VwuP3HpPgA74dUdApmJDpVckgzHMXYZdEkFQDS2Sp8J1qDu77TmkaChsTX2jVwEEKSJdvuizxZLVpFFE",
  "key14": "4XgfRhvfHNaXkp61hUvAFp1VkissEBsY3Ccwar3c7aJz1naZ1LV4biU5iuWUq5Aq1t2hRwpbadbLEcCYRxt65rYp",
  "key15": "4CZCrF7HBQP9G776m1eFHxNaiinr2HPVFvgs3CmnR94n1pQarYZPjrxAR5Hm7ynY6SK1sZRrxaZCyZwj6PCcC1ip",
  "key16": "3FSzHtRmaAiuJC924GVxtzQ461R2oajzwzFHP2MxBFdyKDVsrRjJvhskwcYpgiBiYwyiBpSUXuo3ndhF4B1hV5Go",
  "key17": "4EbTdAf53ZVHdqKRwnv387wYw26VGtfszpreXkV3DSUgJisdcPtpASXmZnRwz1z7sevwztEKHZGsU3spE4r1oT4y",
  "key18": "2WQQPTCpQox8a7UChRA5kLrrbFsw4TD5Sv3C9BKMTbaG71rhzaMUMqz5YVkVffHwv3jD4e5Z9hzxNLKdRw4PQvi6",
  "key19": "3UNvAJwojkebgNf3JhX8fwDgLxnvxPuJ4cmPYjeqfGizgmJZVigkn82pqFnWrexv6KPFs9WWnb9M7MYoiU7ybLJT",
  "key20": "4bEZSfxDLA3Uy1pr6g6BmWuNviQ1B6NEVDDwA3CC1A94kxaLDXkLz5K13yD9cAdAoeivKJ3edBs46RnAKkF42jao",
  "key21": "y3YXgVjj42iExAwMBxspnnWJQvoJBtLZPf6rKy43CrTRB4xevxtDMUmLrNsQUPWcyQ7kNyQyq3uRY9zGYoX1i9Y",
  "key22": "5FoczNSJLRMHNesy6WtAEfTvXYqcZzTw32Dj5zpKR1p85kn4MHmdy1T5NDYBjQX2SyCVZpkUkCraLJnNU58ZZ8F1",
  "key23": "3KKTabTwJH4eRjoxdeHrC71d2KaTNcRJRsKuYwdQwUQghkZMQhVKHXDzWUgLqDiVsbr65CddK93jQTkZWYWm4u6X",
  "key24": "3KmVKRSMYk6bRBuBKc2aTiP1ZDagB25wsFCYFv1ufHFQQJsAN8c4dLagvBuK939tfFSjnVhQ4F4KjuRc76zpanKG",
  "key25": "54m3hwPVfFj1N3zejifZYVzauhEAotftgh5xK6HDzhdfewroXZETB1aNPpHXHKt8nwJ33qnci7K1727arX65PC2z",
  "key26": "61LHzV9fzRZubcCeaZjzKmkivXJbvJuGVKvjQXtFqQuZqWHXs6w6gWh9jXwCB6U8ofnR2ze7WkPZUvRtEy4ixdTH",
  "key27": "4ivSjzuJ3MfF3ns63DKmxGSUyDbMbn8DZtDXuwYZmdDgYgU9FwnNyQzecQ5EARMm1VTiQWX1GtDvShpQk4cquCnx",
  "key28": "3AjATciHZT83ukfkUzGBgdfjzFRoa4Ct64BRpFLeb4meerNrkyqXmauj8N9eUoUVZjZqgy9JwCSxKvf9uQu3Dwjh",
  "key29": "3hFxUxRvLRef4qJVur3veiUvi7qFfxLEQ6EvT384VAUAfTMSdT8hgtQPBNwpQ1bCXTt6SccqAaZtjpaJMKByL2q7"
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
