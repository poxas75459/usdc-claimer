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
    "252UZtdHS3h3Wh6USF1tYgbW8TWHNQhVb8W5nwNiCqANYWg3gTswFtFYwphTfKaXJKnfjBsRfS4G8tdMNNLNLB1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1pmgVJSqQ2MiB5njNJx5cwMAHGtJQUKExUkYqvS8KzYZd7Dieipf71HtK6Gr8ayGDqhkRPsCreFvdAjcGFsUBd",
  "key1": "4sqd9nDzJw66dbnVPVwatBrFsprfMucha6mKvsmNiEhmvnpJeXM4969NcJJMMyWJCx4FYKa9gLQDJX73SkBB9Xyq",
  "key2": "heLreQErPM7um2vH4TDH9mAzsRrXSZavVfziiGfK6s4Hq9gq4wyFc99hXr8vk4F3dMqFduEgrKBCf84NvA294Ak",
  "key3": "5R6Cay5KhmGAhkB5gMHYSQp1vgunDU7YTJEz9LHoLBqxqHHF54fyMH26Msd8DWGWpigjgpB5BWNN82knZ66EV6MX",
  "key4": "3V2P7SwnepgAQv7EJWhawiQq7Yyr58SYZ9T9VDujgDfP1w4Dzk9XHNvTNWMnpeWqosrCrWFxKr3zMtDwhLEDdypV",
  "key5": "Ewp1axcoiEhvx1f1QuKxPr4eSRVizkwTQg6z3AS72xwwUquEeNVGoke3fpYkPHgQx8v189jJ7LfGVGcUgZiXMJJ",
  "key6": "4LbD3YxmpFDdAmjBXsrFyMCdpygpphzBzpQkHh2XN6f7k45iXeRSjbJjtwM9nfPw1UywUBri5c5xathQuhtqmKgG",
  "key7": "5pNVeB7rhDtUb4ihoaDEfv2FAGuCwJ3RRKcE72vPGzYyAcsyPH1xxGZeeoTqZzy7pXzjqgiEMSqss68DWCJ774zF",
  "key8": "2WpThLyikDMsAnkdBgvmxQNFW5HwaVCvTisvipJW3hNRjt876vieZB4WeG8mK9xmVQtud6psqZ99GD5gCVzx5jFm",
  "key9": "P2zGCSMsTMfPH4rjSCXNM8xhaaQQvhqDGCY7BWeUg6H3DipTKnBDeEDrYVUPaH9ampYHrmbzjGRVKEH7qpuXEkb",
  "key10": "4hLkGBUDP8SQvn4KQ5uuvZmCjJgpiTuW3dmnBLyy8ecCUFQqAqi1gQgjwfdEfTw5mRVyb2f2QVtqMDC1tXR8GzAV",
  "key11": "28CvFthrY5M4y9LYsYJ1qg7wrbSawTGqQBypaCXBtsNVVCku6cxU4jGunQh1fKQ63vF7G1vacDkaXbMWgnLrqt9n",
  "key12": "5ynTqmpThzuQJD8kGwF6WNu2NbaT9tZmgHposS7BSFNGML3Dx1TQJYBTDGWgfEUZmYJGuKbjyMSqwfWTQr8J79RW",
  "key13": "2C4pFwpEB6yJ49VBygD5pYib1RLjugsQU7oCeXfseTGiccCTnF7XVfo1JbdRhqNoFNexjKsDjrLeqAYJqGkXhaWQ",
  "key14": "5frUeDF28bwzXSodunPHLkFrWZvKdsxH9jdFe4CUhYcH3BCnYHyS3gT2KPUGtBUbFuBEA1jmPimFNaTMRzy6kAje",
  "key15": "25NEux6Xq9vyvetvoPgwGnxBs8eJbpVofU9fW5Ga6HuAdqRRey8mntF3z6kvmrv7PYHwRcHKLivgSqpyo6u1juLE",
  "key16": "5zgfqwH13j3DRxXrVaSRMJBekWfMkmCfN9aGy2ZDTfpGsQo2GazdH3yDRpoBgjSGgFJbkxgmnpnubh3M1T8Nuyvr",
  "key17": "4Dfhvmp4hX4jo955aRFVinibyZLXB7R1YMjm3v7GoNcBd24b6rYnH7J417w9LQGATFWgn8V7PdZov8Z3hzErtnEi",
  "key18": "5qkkSomrQ8FoD9h4gUotWEFyndCrMz1fVZ5AHJxZVXyoxjPtnndiZBLYU6ZVhzinQ1TqRM3GSHu74A9nvFD44rU9",
  "key19": "4Nsf9EBEhvqxDGcQb5fNs4HgV6jNAquzxmL5XAJPRKZqA9WWhnLvA1m1FxfdFuHtFHqgkNQZvhQd1vM2Lc82U21x",
  "key20": "3W1qneAGcAbCDkriPtHWYinq7T5KBzHkRXL9xbJUGG8erdo4dmJrzG6XhbSNo5qVcB1Uz3EbRKpX71aqbDwhEfu3",
  "key21": "2e1Tx2pWpNf3bdwTWPGrRj9waENr1jsEjaDoGChzmmHEUxbbgVSg2P7dUiN1f87APRqESGWTnvz1uPXEVdJuaa1S",
  "key22": "2JCmEXemgHvXLZ3jnLAewZBU9JFBrtxCi2qGbGsTmrahjMYJ3SBy26D1bGyi7pwsTfwkWqQhSz9pAeLGNVMVictP",
  "key23": "51nLmtUsa7LLP3VfsRRxFYYaGczasG8JKnyyi5yBxX7dP4AB83C9tVxMAjuAEJKtkeEhmvvxJhuwBXySXPFpNFeu",
  "key24": "5Z4aVL74qzkqL9gCTX4jtkmQHwKWjvdsNTy6cZfWzdN9uRDdrQd53WBfjfLhm7sFyQFDASPxGixHBBSBtGjDSL48",
  "key25": "m7iyAmkAH63TTdVe4GFfJMgpoJh4tPKH46RHQkdUXQtAGJ1icQeVQvtVG1ccfPKirpW4zYxExkACh7ZANy14RGu",
  "key26": "3YLRTvUgngYR4BxJ6umEArZD1i67K45BABBxuJ2VirJW3v4WX9UWK3EzTWdGDCMQXvBTAe7nft47SUnYLDonsXX4",
  "key27": "2toSajdbHgEjigufLQLn66qxntq6S6zRZJ5TXJ7ouu5VLtnuhtrsh1D4xpuuR9Bj3jza3bnv3xmcU3jrArJnJZPD",
  "key28": "4efCXswQZsV2ZryWtwmZ6PkkwLCjweYuw1oHGMUGwaZk9CoyKbr2mSDKmjUsQQ7gccnDAsTi7AXCPUJs2p8jNo1B",
  "key29": "5kJcaziPN7iu1mXxiA3KoWLXK3v3GF7JkicApvnqSUh3R1EEmNn3AAV67J4wZ1hPnHJmcwcShH99Fe7BhT442xhk",
  "key30": "5nwkERL3HwMA3rb85meZCdUQSJpqVx3DnHtw7asCB1BocQJd81Nh2WV7pZHst9VVRx7DgwvxEVdQXNJa6AWa3SDo",
  "key31": "EtDfbAiViwaTFPyhBfqENnUNQh9vruceh9M8qKYhmVWXJ2zJjqYNmTdEBbjP3LF1WsnzDpcfCBFQ2bXp2KC2aSS",
  "key32": "4WDUDc3mQUSXYuD5Q54RUwT9f7atohVtQCyXJm6wkSyfrcHkGxnHRbd36m4B8iLR83iXe3DQkbLSn2Y9kqBtR8fW",
  "key33": "2VY85Sxx5iuoULDunfvQL6uDNwMGfPQYVnKy7tKssFTQEnZKeT6cchBBTmc7DCDQmAZXr7REv19fJpovbam7wsmE",
  "key34": "47Zyh4d4iSDQo4YESnFhd76wgpQjocH5nzBJUs13TerXZhJVGMQaFQMdbEdJzHRpBjN8K9WEMBdL6zeZUpMttyGP",
  "key35": "T8QvBhF4fdZ24sGBxRuXXx6YV6KaWoZV6rv9WDNZ9YbjbZrpAFGEnLPWdKbKNZsLvtHzxEw7iaZg9UyCMXUDkhm",
  "key36": "4NV8EeHLtX9WDPf9KzFpEZND3974X1KrURiUsveK6XoXuUZRS4ZRdgpPMMxT6hM82rNMP5dddxMCRiRMyFwgJy5s",
  "key37": "3RaT9Kfbh3zPdgGhUBZJN9YrCvVr3hHYBf6VxH33Toea8fBGSLRhFqmyQrToEyWesPpZdEKmHfYYBXzyJH1JDBt9"
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
