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
    "56qrTZF4z779yRMhqjKtFcsnRAxE9LfcJGdtKFEtRebVg2usy6uei4AgseChdcPWYg6cFCWNdbr8h3i9upvharLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNAzXzjDHkD3UXwFo9Yp4Gj3b9VY4y9VoSwLetbkiEUfZehzquMkoeVxbcXEYPMgVG31txvXWxZxfSdFG4XNByJ",
  "key1": "4MWP3CcjQmCVk2JEHhkxXTaY6iJ5voDgdTvgBVYE22XXiGi9PeRmGgqjqG8Ta11hmD7v7nQmZCxuh8BisMzrPe4r",
  "key2": "5coJmiLfqtWYr9VEvCqukw3n44aJe5gc7vNB9rKe4tAk5KMLhRmsNSXcw447Vb3Mg7S7ZRR3wPdraeijzkV5Rudm",
  "key3": "tHLXiVzHAvjvavsTo5FDxrp7X5bc8DjEPLSzTWHY1bvzmPMV3M6req1AtX1Qu9Kob4DMxAbWoobnX7CehmbYDmd",
  "key4": "3NEz4XkechLn6EczAdkHNorYMrcUArsvQFMBcpkEmYBSV4CagZKCaVEqxsCp97oeX7FdX4zq3ttw6w4S2Kh86nct",
  "key5": "4mZ7QMHCXXTHDxJEEneaMLyqLFoKqL3DtQLBnQrAAbQgfAKWRiHC864UCCNU1uxegRUpp3inLpC7PJ7ixNsxxx9V",
  "key6": "4q5kzbsdEHcvZDcUks82s5sMygrMHm1fAAiCmQbajHV3pDH87LNQp7fC53ddeV3Jn5rVHkjz7grLQWXpybbmwwWA",
  "key7": "bsZ3Qip6AjMqzb8Zrk6E1U3opLYTRKh8MZx7hwWWTiGo6oXKKCopFSucZtLEsN6mgZb7hsex1dAdd2qTwRbCxgG",
  "key8": "2fC3Mq2Qjcr71nVzPb4JWPvqVBmR9bcNdoDZQbFS5WH3d91WKRgjTSC3C5F5NwT5Db1UDVqieordXKfwm1Wgi7iM",
  "key9": "UiKVvv1ZXhGCs45V83gbYpeFfF6SEK9GaBX4X3hyQTTjBhgxpiPiRwpWES3n3fxtDZhV8sU37yd1RoHVsxBYsk7",
  "key10": "4VET3kPmcE2kEisfQUsaZ9Q6WgonUHmc672ygr9Z5jsC5XFWiaGBisDuCvTh1frEsaqsQoLC9zGUJMser3JkREL5",
  "key11": "5A7H72Vd1c9vL7dFssyBkmRAFyUUoGBp2zUuxSBMV1wfRXnFrYpDd147GkDsJqC7aoShscTakY41QZgvyscT8rcW",
  "key12": "1mQjAnHyPm3p2zrUwFCrojyK1rTmBJjUgWQaDki4BTqxBL4iQtR6gtQTYtP1L9wm6rSZnnovkB2yRi47Cw6j6oL",
  "key13": "22W7PjjPwC8RVLQqwNzLpTgF9Ma5uuywDLgFnGwUd1sFVUrQuGbgxtiCoNkMRvPrAs6mn8QJnHMMKYXbM8tSS6RB",
  "key14": "2dJ5syyyde7hBsPAn4TUFXuM5KcD6aaN68z56ufXYTsopmoPHs87SLqWjE1aUQjo6ALMoEL5pMzCKYw8sUktUSy8",
  "key15": "aoN4VFhNTYH9XLyni16UyzarYb2g85bkwfjXGdVVAEgbChimcYj9Tm3cYCbmpEfr5UX7Pnjnm6yP44bh9JpWWFN",
  "key16": "65nvXidEnR4BzRugvVGsgmJxx3f9TdJNhxzBPQyVyFXwaFTZZ6Nbnz8Cg4M7aQnAsmWNMJ8Rk8MhMkCxipLoJRXH",
  "key17": "63kKtJB6D3sFTnSKeaf2ExpHXeeHZH47h1N7GjnLbN6ETp6esi3GSW8A55Y8dUNCyqWjxwKe1AJni8WHcFow7dZp",
  "key18": "4qmUmMHmjQ9L99kYvGMKiNm4CCxp4FRY1aVvoktt3kw2etf5zZCtivAeLp3akMC6yMM4GBXBZBVQPJ2MxoF4Ar1k",
  "key19": "3rzBmvMpPU9W2U26jiqGiD6dj6Py8gsJkBJPsvay7smQAoEHSLEFWYttUsNQdCwqbFgqWdW3EAAe1vi8siWwPZr5",
  "key20": "2GrZGgBxJs9MYdi5yX3W2Hb6Powg1knBTUmmJW9ZCEtm3pVkMGbFsADwjKJ6DC4nd1C7MrNbMT6KRgE94w5jLiAY",
  "key21": "5nkw2s3wvATcML4mLMGw1GuBQJbSDCBcXsgyEZbYy39PjCdtK7vtg5M2WvBiSfEuwDtNGLKq1TnZsPa4SSRiwDDn",
  "key22": "4BLmsWC2QDbt6WKAWFFyyrVQnB1p48LeMUDYfauVjUJHyXNo1QNLy9kXda8Ykqf6fP67k13Rxw9W6pjFcPn1MUkb",
  "key23": "T3v9e8X5S7HvmxKqSvaXRCpaZfUFpMqrBHd5cqPq4SjZL8a2WGgr9N7h67mYLeUUtCxFZ1t89P5WeWyBmLiiaUG",
  "key24": "5rgW3aK8QLMvVE3jLp95DubiG5KhiicddHzcbjdw2mH1G5ghNJoF6dzkZzBiEU4iosNYnFBWY86aqrQxms5WE8kk",
  "key25": "4W3ttkayfqZYq9YX2TNh4bYRFpmpCMw9m2DCaM5YJCA5JnHr6C4eQu1uYtNBpeuEX8Jufm5zmvuiYQm7eyb7ts6L"
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
