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
    "jYkcvedM2mt3L4MrjpaRTE5hynED34xPMAdYbMWZSrzBu8AEcsnAEdRai3wv9nnrAbk8PG9W7c1rZZ8XJAnTD4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uBsNWws34UhhAyZWcwMo4roB8tmFKmPSmqqt8HvCV7dmDzWTVjToJR6AK6yeVATghTvB5uWt7QXMgY5QzUxHt8",
  "key1": "2ue7qiUdmu7nE5NTHnk7pDZsSMtc1BpzffQBZHChtbFK61LVQFjcj9vEnV3pDKCj1YFRVubF5XQXZCoXuya34yz7",
  "key2": "4rNfRgSVKZ5zZrXgXFJFSaRQJuEH1joYwxCFVJaweW3v1aRD6baSSDkQrbGrGd7mgXMBNKBhLx2tZSSH1wiW6UrP",
  "key3": "42LhgEvnhaBcr2FUZvsgSz7Y3xnkMh2vPZUoCVG9jQZjKmUuyic2mHjRBMrkJnRNDThfqJaDuR17K6gLmWZ2iidt",
  "key4": "DSkXbawj9UmeERgmiDLTeZQmZ4T9fU3MVtuf6eQ3o2muAuNqMvuHn51TzghTiw698UWvBjWRy2YircKTkiz7vjF",
  "key5": "2ChW1nQJXxReJrQ5jc56fbJ1A8EcjnuQ9SM3ocKp5a5QpLX7cPdwAanmD9ZvYqb52b5xmfWn6Q8Jn7ijf6TefHem",
  "key6": "22o8CCeJAnXY1KMR1HB8YZ6ydEAACuAbxrTbePnivJPE3x5wTzDUZrarMdGmCScFoWEnLySbEJZd4ArQ6PfBiw25",
  "key7": "4chch3kJysbPZA9CViBEf79MY1x8uSVZ1x1uAJAWieTTxQL9AiJJXP65ch6f9GyZzYa7Rsuwwi8vC2bYCEE2udsz",
  "key8": "xkX1hCmMt1oCwXxbSsWCE2b8PkDZAWzpXZX7oBXQjYdX3S96H3YBh1jjojhmuoX5UPNMTTnaPPZCwvQPmM1bfMT",
  "key9": "4oM9rTTvPDnV7TethpKNQsHfdkkYyzbW4q6Q4iMimUEpR93jg7QCvt7ZgcsgsRpYbt2UdvfzRJ2XxSZFdGaYF6f",
  "key10": "4vKDtxqFgMCYgwShXawWTRXGJZ6Tui8LkYUbtuCWSyVEJCPYix9WEEazCUiAHJqfqBzMuMPKiiEhvbnb3XCZTDk4",
  "key11": "4637qKunEAVNkcDTS6Bv12Kit1QpKiCJFp7KjrgjZfUKqLayt9X5fD2K4yGWRY2gd5JriL6h7fysGhm5GytLyrJo",
  "key12": "2PMnzWcFQvqmiJqDbCzhwWKLxdM2ebxFAPAvVkdUFGmBqNbu3KFgp54xPaRErJy1rur6T7yU5V43Q8QbfpdYhVvq",
  "key13": "2iFxhxQcprbrBiGF429YP7KMBL7n15eigHFtpy9zMyTUgfwqk7pkyKCxePYEiCDhzSwjTvEGWHiFMqkiSWXk63Vj",
  "key14": "2Cj6G97BigtNfTk65zHnWwKzuEPVk7Ww5NswDPfrhvpnaUKjhxNTsHoxup9DnJQVRR96kpcDvnjihvW9amxjhg97",
  "key15": "Ua76gVT5G2J5wJtazUBxbSwdz4iUndbtc5fBwbz4DV6FDcC4edMkMxDEneBrV5Mo9GT2mfGvVRHRWaabr9YwDso",
  "key16": "24bC98DkoGfo9wS7PzC9AQaatr5bwEwKFKT3424Fsff4o8AwWWT8auMj8SjaRPZfD9iWQh3H4RVXXbD6Tc4ptzxV",
  "key17": "ekthw1ZeCES5ybhYYp17v6vchBfpKF11Vsa5mFgJNQyjw9eM3ahTY1iqhrfZehmX5NmnPnXFMXH8y9yfZnwsiHi",
  "key18": "4x8kC96Ddzz7UiqRiAFaj2VhwjpcA7kGiBbxojyTN8Q24q9dM3LsxoeNfzov2NiquiwimBhKDdoyejYCTDcTobtj",
  "key19": "iHCjmEeRqZVJp4ZAcAKXv5sW7cBXu9trCZunfFAaePMc87jbBRjZMFsenYFc2Ben43BF2VEqcx6jCkWuZT6RkYQ",
  "key20": "3qC3iRjBQmBpmgW9oB1rggcTAZkiDxdd5yVKbpbvgByxRvjZaRS9HypCPGpFT167TX2ZmL8Am5AdtPHJ1MspQyWD",
  "key21": "5KwCUZDq4dkQu9oMPExibCBAVxzBB6aJHkjtTFYT8iibataPKAnf1xPZ2n6vRpTVCCoTJm2yk22kx3JB7cSQ1GKR",
  "key22": "39TmQ4M1xKERfpboAXMm8fN4FDzQo1itLj9UrUoCbLwzAJp3Jx989jkNEeHxsabftjukMPhwCZwP4tThTkuxsYY9",
  "key23": "EMsq27thL5p71KtVm6CUWvHjpsYsa3CAuZVtrTyatYu778QsdcfW9ZQuxFt81L9cb29FuMqeVsiVGk232MbvryN",
  "key24": "32bHcgbz4FKwT35BgUizWhdUM78GwwVviLjJnZmpjvU84z53d8B8zc34GwVcwCjxJnk7ustJbcL5WJUwtpjoLwV",
  "key25": "5qtfqd6U4fFasbL9iZiog4XNzKSc8yS8Je9frAZnnxdso5Ra8BJFquqZjdwY5KQALEWP2pHJ64TCRMxGpamrGgXb",
  "key26": "4vCNEhULTTwmn6bME256HhAQTumUC6ExUZ6mYQLRL9E6G7wt67tWzdnEyTdJvAeoBtg5p677WwSiwUxLb4Ekyvk6"
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
