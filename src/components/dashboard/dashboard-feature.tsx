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
    "2ZCgYZPJNGqRfbH94Wd8qJkZ6jBr3gvuq5VG6GYC5WxQKhAotHFMNre2ui4zndZEGGk1opXwTw3eyK9KhBkVRZhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CeHM4dtEGtWGKAu1opvUb1CgmSMreANWWTBE24Aw56gZpqQHmZ4aYbFq3N1uDcJFPHeg34LVUmbTWsyAqWf2vaD",
  "key1": "5vUCx7tU65WuzAq8vXt2oxTivscsH3QPJiWzPnKiws1wJMzhGLQKLqtEvCSHYq9Lyad3YuRSHVGQfhwUAiuEkshK",
  "key2": "3ryW2b1ZBq7KT6pdUinms1ySQcecr88dugLp2MBCRiJ58fEAfoaRGQUEhDJk1Tt7qARrBT1vyqaLNg9Pxzo91Geq",
  "key3": "V8kq9BFDwdDY6HNYWKuazNEEpLndXDMJijTBdJWgTGPaT6uXzCx7YwMoxQZTrbvRzFiYMcsnFj1pXX4os3Pw6KH",
  "key4": "4zZ9tHu9XwgXuW5Pkzm791TC2BeB16wKykgY2XRGuDD95oVpCRSHA4evz3j67fWJBqYxx5P2QeSKbnJSasGQgbbm",
  "key5": "3YxGyMUQkYB2AjqYNoCfFM3iEZvBFu4M5iiaG8rmazf3u9SbZxnvGpzUzC6FA6ot2H6LAhybznDzZNbXuq55JsNC",
  "key6": "2CRxYfmDmtQuRDNRKdUmMh8UP9VyzW8YDf7nxV87m9W2tgZKw1YZMAeUZGd14fSgRWj9NZjrciPxK1jSFqFPcKfb",
  "key7": "3nRuSmQCCCpqt1rqFtGkcQU1rN2sKTrc4cu1L6Ca46jYhdc8s7CFQ4PUF8ewK2NajuKexNsGgTfsocx8gJCjqood",
  "key8": "5VEQYccdUt2HK8uiiTucMHTn3njJDyqcSQaAutNn9my8b19WrExuR1g31P3GcMkGmp4Rmmgakgy19eYewmu7f6dZ",
  "key9": "hQX9SDYz28m4EX8qTSFkFjgUP4S4Kioq2zogMvXn1iMvm15fQBm8VKHbEmf8PR9AWdhbENLZoW5GJQYytKrLNmB",
  "key10": "pFZDuUEpCeDEEivtegxsrZdURvastPojgfLfH1DFLFshNZaBHRRcbPR9UbUX6fViGGoTvt6hXdNDjJNMhxE9PSz",
  "key11": "4ukwQje8a35E173qDHKNLsvzakCxFkU2mXvFEcJ55UJQxDWcLwieNCgeYVKhWL8bwipcvEepSJD7pCFaBjAr76WQ",
  "key12": "3E2zpFJoxtdpEsUCTqrTrGikgQ54pYVEWELmLDtgz22evhXG7AekEeyPJRzj6ySzwvZmMu33t6c1Pi1eWMSepzQk",
  "key13": "4MaXwqQDY19mRmTwCKRXgpqJaPvaFy3yr5AVz6NU7jtMFeJjJTBgB24JtpqpQov895zN6jDvtn1Yr2yNdy9NjwnK",
  "key14": "4LQtfovNAspEtftN8S81fq4PmzgpTNgrDno1eVL655TnWyQFgUrde7NFKUDemJjkw6GAmjC4RErpjZ7s7A7GTmoL",
  "key15": "2x1R3DRWAygxfAY28nFWMP8nnvxNtVJJ5WJANMfp9S5bZCTZxzFhywf4HoRT3nZn5bzPGcrBaCxoD8sfkR1CqxBj",
  "key16": "4p8i2aqaaNERS4CmoEArVYmqwBa2NBAob2pinWMeVYUu8LA8BrtGmdgG2cFaTNT1nXdDhsXzcepUoLU68ZT8gDd2",
  "key17": "2nopzgrc4fFByk7b5HpjFzTteoTZHpXM2mB53hCGbNmBkwEhM9FUxhvMuQ5eRiYYZ4FHKTRC9fbPxxnWDmN4NyuH",
  "key18": "yc5Lt2TMpPKG5AN9txTp342Jzhnoue72kSeu5VivUCTfU5HUgBXrJXN9XGHy4c2ojnzewc2iZYfq4oEKw1NGeRR",
  "key19": "5b6qHKQwAei1bhPa8C74sBw16ZWv5uQns5yutp3BUevWn3asqMebbt9LmD3boH2bTJHHghk44yvYuDsFUoXh8myq",
  "key20": "MaUU8RtcyPDrQniff4rMNbAYRgFYvYEEbthEHX9fF6RQm5vwRJEHKbLKP8wZxCGfep8YYrNCsvoFLo1GQF7ux1h",
  "key21": "3XFfGEu21eDKR3W6mW6Fi4b5pZ52yZWoNdpxgmUr4M6pVevJHLFr1udpcw5e2UZmsvJwngEBP2N8sWK5PKWorPLy",
  "key22": "2w3Vfo9d8PwXuPStKd949PPavgasyXxWkopxeuBMQMA9arxKvtknuqjTrZXUHQ9t1Q6mM7yoeVRkm9hwnVfcqWpk",
  "key23": "SLMkAA1JhQg5MpPTZB7eQF2DN4LxZCb6espQz3BHh6q2CL7YwgDyCXH9ErQBKMTUnrimPDsQ9uzQjyboHs1dyzX",
  "key24": "tW1yKyxdwjyRWpRvupxocg6Qd1sCoDUUCa6JW2PfVeQy3M8mveAPHhHgzMZ5jQdBeG8UkxHTLqfA75c1AmUBqC5"
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
