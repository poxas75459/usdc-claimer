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
    "MrVRQ1fag9W9kq3BWext5xL3oUmRSY8ws4aLyyr6ndc11oNVYv1DrSmfAiv2snGuv6nJin5nwrYGcFb94ixq3kF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2yFnFUdRqK3Xo4z5gR9awrwHcqzE2nG43yQNgdhZAcxChMq9wjqN9rcRL67LaGtQwLYWmasyFTENtQ4NpFqnEe",
  "key1": "5T8ZexpYNMFadyRdR7E4gfeg19mXjZPQ8vwVPytzLNUbEifMgF6sAkDZerFQm1kuhCd2m3wyhyYWatTD8oaD9EW8",
  "key2": "4EvfmSnN1dCHkfm7mJNJxyYW8ZBC4EtYfAduN2TJvH7DA5L6svUQ7LZicvsvaBMFbxaNQqJXNwBCfL75ozrz7kAL",
  "key3": "3umUmC72rzLfrhKjWxsAYRDTn6y38PQXNg4nynHo13yQYkZBABMJ7RTPC11ziXWTctbwKCeaBGwMi6fTizf7pdEf",
  "key4": "2dSG7uGkcNSAPKWpWnqqjzjGG9vHtdbamo4vdf1sGYhPwQ2ds5evCXH7xu846vaxddQXJVcNjVjJSSkmfL8UshdZ",
  "key5": "G4uxm8oez13MjAkyeSCsjC3nCPdU9vBCmG4ZcpG1KJZDpw3VmTGkX5UXG75cVUeGeEJkKH8cVudZztN2ouu7ozP",
  "key6": "4f3roeGnrxhyhQiMYZ8NLdbvgY9yBUcUSBk2Co3rzVNUFZzcTkK5L9MUNjKGVTz8sHfAaVRBF3tbuP9ncT8szozx",
  "key7": "3F7jBU8pa4SLVCR7epzhZTJ57qaFuxTsZ75615EfXVeJWBAcg3K1oXQf3WLnXMC1s72HfJRpKf1r3YdJdGvdbzTU",
  "key8": "J84KGfM8nLYyDwLryLNEL3D4qTLdHfWE1WdtytnXerVgkRAVv5DMKPjvnrZLur56SZDokX9GAAqjPThzFfknVsU",
  "key9": "uwQhDdJD6fRH8z5xRFgAuMuqdAPeSErfjS2B4RoUi9ChcaEccXYbGxM8C3g9rLi4gXQCfc7K6S8CtSSDo5QeYNN",
  "key10": "22J8kGrv1DwiX4XmS1isGeUNV2RhUeG6K8Wxa7ne87nbEeVzKsvHk6CmTamVFiF9fYPj1mNmVWJeseR3po1EnxHH",
  "key11": "3SmaGPxsoG3FEihicxC8XvQ1msmy2jLhnFanxoTygMNLZEhRWCrankkJWQmtcbUvJnFMkUkAsB4ipx7G5hz3eZBm",
  "key12": "2ZW57TB4CtYnr5Ng56HeY6iKyADVM1mjefGgX9YgonZc3cYKJkn8HNqoAki74LshwKxWoJMh6Kd1BG8jdJhNqpRZ",
  "key13": "5FpSZsCzXPVN2nGPeZfcJpYTyaJhQfiNJqUZ4GpGbzMcpLvumtyWq5dda9Gf5ancTwS5bhxkrwD9L1zaHbDSwAKG",
  "key14": "4Pwijj5U9UqKkQUvehGeG71my18HV11YHvQWsj9h96d2a3JqqkuKwYDzPFNtV68Vi9Dpv4b8EjThUF8gQ1JhTUi1",
  "key15": "3nQES4rYekfWJDkGZYmT4g9aSqFphqcJAu1LTNiyxkihNLRBYS3KsNMFTtWv4gTbSCHEgSZh3eUuYHF5joYvtrG2",
  "key16": "2iUxhs8YJB22YfYsnxj9Jkf9FAouqn8wmvTLY8HMeZiu1HA71ke5Qs6VruCxFxUc2Sx8bEY35KEfj2pLgQwVUXnc",
  "key17": "33ogw5ec55jcYEqp9iBRctt2rSEZkuHXzxCCgKNDb4KGhNNbz9EiD7rV574YvojBwJK9cbbXbgnSDFakN2MDyojL",
  "key18": "3TtfByF4VnKv1vGjb4q86JC9uxSv4B18Gv7u4aZWwTXWepNk2gRiChG2nDbbMcNE96vQVnSwzMF5Hao1Ja68FCKD",
  "key19": "LmzirqhPogaXvsytNjcUEeNd66QnYYUGd1gDw9h5o8Xmeram4c3LtRa6RkZh4mp4N73Q4B4eUxcvr3g1nSPzMQu",
  "key20": "5dVHpCSzRZEcVmYnrXRHpjoAiCu6SRF5PKzQgk7VQRiRZ7zp6cZ4JbNtkWFAEyGbiPxEo5MiLbEa8BUnsNx5rUmT",
  "key21": "7ue8TfSAeDMXjMBkgNx2SL42vzEmsCwCNTZFvpDo3eLnSho4waMnMaivxtb8ZSodv39vnWMS2wFrVX7wy3y9F5n",
  "key22": "3CzSkPZjruwQPKC9Z6xn5x6wCzB1seh1BQ4KLckwgtiYRjKZyW9RgWKMdXaZvSrkRE3sNEz1gdjSvNrxkcbZW7pa",
  "key23": "5fgwoqAXCXbifAX8BHPteS9eB5Y5uEXCV8pvZaoN3WE1GHRNohyA3hheSSYezJR89fCkR2qB5Y7C6j1jXXaZ6Wyo",
  "key24": "uQ4rXmiiBynaZT4ubVb4EZ3775hyJ2bpRyvUTqifXG5ZiET9omPW9P3HqB572yFdEX1UNXu3yWqFVNfQNL5sww2",
  "key25": "4n7RpDrfEdsw2zh4wrAHJA5dR1o6x8hhNimDQyVdkP4vK4WEFN6b4xLQn7xVy9MHwjuFPSMpZ5nw4i1n1vk5JpKJ",
  "key26": "3pDQwuaQ298Qi6yfPno7uUVzAgeFFCxi8tcG7mYQ3WCavWzXdVozyHky6Bbp83eqT62FF1TWVEiHUeuGwSNWuzzs",
  "key27": "5gbs3hdQfVqZcNPdTj1Mizg22gmswKmu9Z1dBQ6eRpGQPyy2NGHHpyew4oEz5Jg89Xq3BNBxfNv15uzxTUw4DKe2",
  "key28": "2XQ7UyH89RXP2KQE9iRcCggzLJ7XDPaWdFNyhSQKbmoPRQCEamDLz5QnMrMvxtTvxnBjJM5ws3LWNeAg7vFLZUGn",
  "key29": "4g39cgnrw3pMMsHneqJ2GHBJ33X3p61Gog6dyuyHsLGxpaUzsvnxhWskzDZJFtEf8RkUWNkGpA7xwmmtf43GA2BF",
  "key30": "rmDeJMvjtYfXiFFeLfCkHpCywpd62w1QFur58S3AySyDMk5uzSofUbXCVcazb6qjWzY6k4rqyo5JWjMtpHf8Wwy",
  "key31": "53e6qpaMYW1GdkjmSP3Vp7TS8Dafmu9uyq8VvVdY65oiHp6hrwQfqJwRvoCEdgjWWD7ecWTTZRy8v4Q9JNzSBz8W",
  "key32": "2Z65VaqhWdg5dQd1K6Rqk6LFC4iYkfeaAXSbKviN71Fb5vmHUm6X3HWBynKy7uxACCUoCkrZSv8DoXVvaZDfN3eu",
  "key33": "c6zDLSGYFGqQohren5sNRNgeid7kUFnpgqMD3Tqwod6XMeMzxrJ8SGVf6ag4tpcUsYxvnFYAitDnhYBjv6WxteY",
  "key34": "5oea5KGYdPyq8QFTHYLMg41JMdXVGyNjhDFckRG62iNjNeEsyJvod9WMx1DGskG82WVSPhaTLV3NVTZSiuNQT9KJ",
  "key35": "48a3LoURFHhiCq7tr5svsmrYfJwiM5PVCGCE6BtyNTLXyCcK5FRzq25J7apphKLK5Z3zuP9pPEQvyMUvKYHdii75"
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
