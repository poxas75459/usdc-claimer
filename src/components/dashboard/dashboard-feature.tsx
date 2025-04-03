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
    "3TM7KCAsKaMYNrcoybwBULBVuFyh5zLATegfz6QmiUY7hVEoJneQay1s1TcwnmAedc2wRzRUQS4HTpBScCWSZzQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBfYuACgSTufq887cdXXSRM7oQ1fMsjmpsM6UGmpKx9jFdh1GzpKM8snPUsAQBR4B7AMc8RvqgxNfs57Nq6dosP",
  "key1": "3QmNEPiyQqqw7qc3wuAnPHapRQRSEcQAEyZivXj5mvZD9TvQYgHWYeKWGidEgUDJ4UB94utPWU2rDSF53h1Hdv4c",
  "key2": "5xePwNFUxJfsfVsakj12VMuvk2Prth8P6FbPBZ5sCvZwQbjQJmeazFGFrgoNkK2Qp7UW815ZsFkNvxMvfS8aMfvx",
  "key3": "26F4b1feCbArtxbkmLu6oQnZMzywGnbfH82f9mXFeMgENBpowjqH2SM59T4KBRBgEHh1mp4gymggKpM5ZukMtNKB",
  "key4": "5vwX7DJ7H7Twmj9HR78hNyq4a4cFXSo7tiW1zcZTUfveJSoq9rq1mG8WVSVyskUnRZ9524gcbFyakGmjsHEKohQz",
  "key5": "5kbkN6fhCy14DngURt3Mkc4gjdxWzqHrkQf9nYsEFrJokbXHdoxtJ1qJasWbzfvAcKxASVTkagG55ZQSxoyUooYc",
  "key6": "CBQbDBdicii4Vpq9yeqq5JF92mX2GcdxRqU9ThJhfqKb7PUdtT7W7SNrvwJqTAmXtcwbJjPT5c6Ne8Pjt8uGNDQ",
  "key7": "4t9N8S5zQ3g9n5GWwvMphRFKTzTCmJh9t7oKeUfyjTsa6tR9qJDPseeVcFS4tAmNsLBaBnpMFiS1Vg4zrsRH1Abh",
  "key8": "5oJjdWym9kB67xQgjA1eFW1a91e7WC9zyxLQFiA7Un96A5oopQ8f9P7dzN51rhozEeY12TDSVaAWgUcaVPavK2MC",
  "key9": "3PX8hcChCUyq6RFBZyFDXccB9noED2VcEzaYjn1CCH75ma8jvuH9dTbr47gzPWRzCi4kE6BLb9UyTENiZDPvT63R",
  "key10": "2XPsTgQRDPfMKUENr7sC3JAJ6QLQgTawFBMQLLF8iZaTMijpWf9YJusYzGQoGfbqNx3pXo185hHNqzit5LeMWcXm",
  "key11": "GpxQLktHsD7RdhfJMDPG5ja1vfpSziKK5Ey1W6PQocmuguCHQrExARB7yBhCFq8s8TgY3VHwxqqw8yUtX5cLjNe",
  "key12": "2cqUVKwmLNRnzUfcb9tZzWrCpJ6pD16fZ9oa4PTZZMseZhFhuS4aZVrETv6i1FPFz3AuW6UmtDnbySatSXFVV7k3",
  "key13": "wyNEmu7K47XvhV5XsdUdXXk6EMhCZUZXHbPvp9rjx8uKgxxdQQ9MyTiC8khrzUySHPySJSBMMectFKK8VZigGhp",
  "key14": "dfG4tBVYX9J23m9ye89vZ9HYw5evuVenXeek4o6yqNEXCnhWqsGjGiEHaYYUB9aJcmgmVWuLtxr7cQiuG3ESa9T",
  "key15": "65Kq6wF3XMP3T1JSecc5reAHbP3FaW8cTUUTBozgerDLFoKXgiP8qHa9wjivZCbKDn6gGHGbTJ12FscVWiecvca8",
  "key16": "2PAqbw56Cak7bnArufa6rTvR73CWZQmNfztkFuMTnjcnM8iGksMw9svryhnNHuHmvCeTj9UdH2DgWZnFqoGA1CcT",
  "key17": "9xytfumB3HTqY67cNjA381n88YMp7ut9F4oqTevE1MwMtnHuV18dkP1HeHVQT2Mimmt6Y3RNDskuvq4tiAFitLJ",
  "key18": "4HhsQUimDohYwt5MCXce4YNKbbKfdtNMtCYay3qJAgpeLDdY7S8HRDq1xRvJKhsxbyUKCBBY5WqqMA8wQC1HEMsj",
  "key19": "4dMVZ1Xho2wLFV5VNLm2cXhz5Uw3uiAdGe4R1t7LvawCUxEMH3RcoJYNX2FQhTGcgfBkHjgb1Fb5tUM6r1ZBvnu2",
  "key20": "sZgzVhmGk4nqV1QUkK1vnJW9kdEFEs89Y8Cf8jUU3UQtmiNPZGJR9M33bGuRY3FTq3QQnCf6MfGzFT4TGFkMwQM",
  "key21": "58tBAEpWhJJZETMThRVN4PY7RqA7KZw8o1ACU5Fd5dv12cYXStJiVdQ1oAKwShGKNxbT4ZurWP3JzKBFFCa7oCPj",
  "key22": "4TtpcwKFTyaZ5G5HEcT8XGyyEzv86qQLamxmak1tRjMyRXT1UK3r683NFFiNbvAxCnAjh3vEpf8ajtzjcsgDBCgW",
  "key23": "3j7nnCvD4j4w1PY8wL844kPL6V8eV34Fx9gLtVg1ppUtjgc376om2DUZMAqSugAH9kbAKJLAnzru8ojXiwcaaa6N",
  "key24": "2iM8exVrWKjAyjXEyQAL3mESHcqdHHUUvhg4n7mSJAFyetbLY3quXnikF9qahwRXPNMCCZywfaUVB4H6tzE21una",
  "key25": "3eXvtArjD2uyaRQavnvEVPLxnsNTi7x5pZ3p8JFXsqCHQHtLHHHheaPz8AYFKopy7rAASjTYsm4uiEGEkQnwNb3E",
  "key26": "41hQk71qA2QnfTrmHZjqdyo5GtwwZ7em5E4aBxQX47pHh8KrTdUkyaowE7Swk9q3KemL87pkH5Bsyb5kHwtNoHUL",
  "key27": "qPrfDXMCZJzV7eTj8ApjgwAkQBng11hhzJzLHKF1wu4cSvmJ9bDvhiNPEJ9bpiB9RS297psvn3xeGwQp6CMTrd4"
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
