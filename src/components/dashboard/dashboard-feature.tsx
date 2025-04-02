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
    "65Fw2r3LogzRSYu6UE7W27amQspCqWRN618LtHvW2qBzXtkfCaHW2pBzcVvy48jPC5ctKtAfmRKmvdvEgqHndQV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xn1Ks3sXwxBNkznpYDj4CZDtJrx81gKBoXirrFjr5pJeVJ64g287hucQZHMubXgxfFvgpfF1uwuw5zAeX5uk24y",
  "key1": "N3xdNLweWG8fKDYNdahvj6FMZTKrWXtnAU26T3GYL86Zsx9htMDsmdAppyLDiJ913rU3Hkbda9bfF8cNqWVM6JV",
  "key2": "4Y6j3Pn6N9uHwqug6UskPodABRMx44Cj4NKjD1W1zLmZih87SgNa5mx3oHVdjAqQLLQUEb2kAahNtd6ENUoXmvVX",
  "key3": "2e6Wj1rtMhFWPYfsBWbXonPrQoBsKzcFn5iGoXgqDprZfuGndo7sGjTRVJhd2s5JBNWzugjpeen9hKixxvqxyAN7",
  "key4": "2ZoDsxv6VGw8EGtxEUjNTAyuFnguMQmEKrhvfQcHKs2VYBkXeegpmSjaG2o2B1qjr7FjsKYnEPyap3STST3yG1Lk",
  "key5": "67k385Rk77tvik88gZ2D5ThLPLa51QME66d12auVfTw71espkHnG2ksVr6o3ha6Fcgyx6Xr4oa6FEDrW9ufgCqGH",
  "key6": "2V1J8YS7rJcR7SqmvBG5GvjF2nD4H3jCHj7Tga3HRT7q1LUAxTvK4MgdiRjYyNm47vo8jLyExG5mm1HwnV5HA1r",
  "key7": "eEteSHz69T6hdbQcZcGfmnKk9VwUF1QfhcCYPEjfPPmHt1xhF6CWT8cS6fWgArni2Dv6yrr6YDzCP3wUvqG2uAk",
  "key8": "3wsSBbdPfju2sYVFFXzapST6BDFQkTEBXQthE2xHyBAPiirdHe8PLrgMWUycrhLbKgLbzjrfXDc8upsrbkt5mPy4",
  "key9": "2w4SBZo3ctWNyu42yaucrgP9VJEYjMrthuYuosCpNw8kq8QCZyBEsFE7h3G6jB3f1zpx8N4bgvis6aHoC32mUry6",
  "key10": "5wEbtrMDVgj3fJrrd44fvzoHQFzkbXvAjKeueppg8RhUyqWDJabKUxsc8FhrHsoZPAoYfDCUAPTrW1PHNJ2huVRu",
  "key11": "45WG1g2B4yBs8obqjPymEfmJA7pTGK6pBpHNpdbZDk4WcK34RyZfPJUF7RyFvbTp86wfg652ti95vpGmj2x4ByxW",
  "key12": "4VSvZSaqz8NRuHdvMNCLXxo1ZW7pNCSrjciKpeYv2Gz3KNwfrPQyXn6KY4UzTE54LfT88mV9Zq9PyoQmZs2Hx586",
  "key13": "6GtcGXWWPZVw9BZcVrDeDJAGpGfKz7st2jcU6EQgV5KoybAHsSiPLzo56HBEk65m7Fa9fwBbwUJAM5CJR3oDVfV",
  "key14": "3ijWbZuNpzzukpWW5e6nzrqk9CfDuqWEzJVncW6pYfnviRfh89Q1sVdqJDRMRuAMsYiNJrCMEEFdk5tH2Q1SxniV",
  "key15": "K9AnCNhrdydUDkD8cCTWgWu1z1X92hSLyeF8q81zjzQsLzfVTuPS9xxBz87VhDGp2tsY2ybbojDXbyyJqxW49sB",
  "key16": "5DGfxgMV8f4MdrtV6aN5LNNsBhedFXWkrQBczVTLjebgHoYUb7xNBJuT5eRnvaniVNWkUBakc3vT1JhNkZFL1NBJ",
  "key17": "3s9EvEXxx9SzRs822LnzzfMzGi8B8pPLPnkeueAKiPxzsTgwAuqvz44258Tz8XHFiYaaEj8E2AVtv7FHz1VyAPNY",
  "key18": "4qYguCPiN5YhT7M4UopH4TXWBDF47zg99jVR7psm9RbGcUP8o1kHHibVcufA1mE89gyDmmGEWoguTpwmRTLUgDsb",
  "key19": "8SmpkWtgftpqTPZma5HQYFaXkCiNBHoMSyZAcY4yAYA1q6uzRzhGPxL2z3Q8Hrb6XFKUbryrnvAxTWL67zUDc7t",
  "key20": "3ghEFAJkxz6rcx7ZMddG3XFxUjayTzuGWzuaaHB47YAPZ7fBAj3gV1KiUPUB478YeUziKiyHvDRk4tQxAox9PgT4",
  "key21": "3uiGhe23LDNE5QvPk7SVFabbVu6gX5p66rqrhrx1HZ4XxqMtoqZZUcijUgKJJU1maJmByZqpi8yKhwQVY8oHhzMB",
  "key22": "48N4gMSzJkdXFgFmCoAurWGnZNB8PK5aLrtVgawgtMNaAPcaL4rnTPgvjoW6GV98eqKzhbMqjmY9PrB9awRPaZg2",
  "key23": "4aYDzcE5mRkZSUi6jhr7KgA5W9poNorffhPgdmG1AHn5Zu4qvpkz8SjNdtd5gzN7W3CCSjPLZNw8T3hP8bMTY9nP",
  "key24": "4XFtJPVCYWDoDvpULwi1nMqocDJV3nvbHA7S8cXaKJWBn9dHnAFuger2QZbffZ1eLhw8LYR17qbqfM4HHcjX9bBB",
  "key25": "kz5BViCHoMpz2858P1VgvDtSTZ5pfqprPpVD5MnksDai27HiL8UcdUD8GcxuicnMgVfFXmMDAzUeYhhfBZM4rZx",
  "key26": "2NXVgLmmTdPCSDt9iHeAYGXGAfUZBRpqDxmvHWJUvVnzuGfA8VzhVz9CY1w48NC9CNzUwWTTXUkzoxBkzErC6rqo",
  "key27": "2s3X1gFvFCKMNCdthErSpC662Kw4sfb3Rir47WdBBbf1Si6pW5FpVkHXAZutfU6d5TEDzWUzcywiS7vxRLdH2yTK",
  "key28": "5yUAWpi9bSzq6iB9JgnNNMemnLQ4ygw7VdByeiAXNUN1mZryVZs3x48Y6X4mbPDN6Pvbqjjdk2EVHLx48U6kDNng",
  "key29": "4eRr3B8zxTvdkwXxCQbkLCNHMCrqGXHiR5ojP6qqmXXFD7b5vF5MiJjJjnixxWY1cWJh5XK8aULfCrypJFpyVqjn",
  "key30": "5hfLmpScPUbr3ZZNWXzd6ba3o6RndtsmJsAq7y1yyoYzgiPvn5ryCypBZ3dWys8twj9Z22Lji5WJNfsNgVwWiS6j"
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
