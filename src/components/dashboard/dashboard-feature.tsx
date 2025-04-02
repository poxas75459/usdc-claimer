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
    "rrQ57y2eEcNspBBzfsCrdj2vdyBB8wHmwAFFnLB7BPFxzNHY2eQYjGnoBaMim5TmVzLMcUSjwA1cMMij4hjXK2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8ywemMqNbDxyp4xuLPDWgG2LBkzKfqz9SH53AAFssnexhqr3C1zJ6HhW8QywssqjA22xwC3xrd75o77nX6kLv9",
  "key1": "2XYnabMnmfWFomYu9q2EszKyQTmh3fxg9j5Dqgyg2Wv42mDHjXDygCgb4bZhx57VemczEjMfU9iqWtUNx7Lkn5AU",
  "key2": "vcSjFezCDyDFzSwAcdMNagujhTJv9W3qSqu75Nqxz7f7Xr7JL3fsQMNZyo7oLVEvuKKNRSduRpyvNhmY9KsctM4",
  "key3": "2GGHdSEh5EsE68fjZjtrisq6uQhYFAbEX9363xMX3ARxKHb3gQRkhMbjen8Mc4egVUd46ifjQJra6RP9uwRUXjyX",
  "key4": "rDYdbcKZUijGVyM39d7ZgzUV5pRZFwZcU7aw65AmME1q8Gc4UMYHeS6CUP2FXgtM8jsbmi56UeCshRFxFHfPQmr",
  "key5": "3npqt9JwqnwNCzb2zoqotf34rb3VKSpfwPrfVs9yRZ19ekMi5E1Tx4dtS6yFFHnisTPfcJ81GkfLyc5Tvt8TBbm7",
  "key6": "2NWKWFuPjcHbKxssdzZ5u6UdMyHPSt4GomgwGczoRieNXJj4DKnK8eRsov4pZerpQVHNstxXGNWybuskWEzLah5H",
  "key7": "z2tSXYY19Wf6Vzg752RKU41VtBGswEZqjXSaps5BhS7vKC4p71vrsq7YmCkDeMxpD2U2FuBeVAqmwzReTkJSUsM",
  "key8": "3sWadvotwwS41qncJJKwuzMePfzGevDBUve6CFgj2YhjHMDpMksGcSf9oDrugqEc2xk9tWM4XL2oqGB9j8Jrizcw",
  "key9": "y5jWXFRuKJVviaGCn3ZwLDCYK2ZLeFh35TBC1sQfnngSYKdVKrCWSTfJooWaSWL5HoCdggxWCTWUMvjCTbiLhoe",
  "key10": "54B3SV1dCUHEKUpsgYpzHmEd6B2QturcWsdp5mWUtaJ4edBTExp1w7bsKktjeDHfQtt4xjrQFxQyYMJrW2x9uhbj",
  "key11": "2SBhESsASHRN5Guo6JGNDxCnvgE7wXHFbotAE39rLfUYkb8v4EDitz8CWgeZNR6PtBNwbebUkwZbxkxmUuPYppHB",
  "key12": "4HvZziHSiN5wCANBCtqYBWJB2MQHiJX9kWLfUiNiPPBmpKK4Gv1c378jN3ELnDYFUtEkxdnXL1nhMh1mk2exU5Sr",
  "key13": "4EUtw2ZdXCTT1bBVCqCgAHLWxNvuzeWr4LRzpqDPzM7dup4FtzWkenWJjxDCP1boXg1A44foHzJfCY3AxbysgZSA",
  "key14": "nCta51rdCnFzsmNemBr44EFnCEgbus8NQqgmfjujmAAtHNAtNs3nDgCT4EWFUcnp7jg8TF7mee5CpcJjaChVB1b",
  "key15": "gWknMRCu1dJ5XFWv36YgbFhXVvHEk5Jgnnnx7LnysFDr2dQvmT7Y5ndC39QaGU1cDtgjViNPXzXkoPiZ7YEGc6o",
  "key16": "f6M5KemBD9DkUhf43AE1rH6mDgC5Kr9Ae88HCzUmgWs5wVfeN5t2v2X3zu9VzymEZTHa4HbKULpY2y4uoz2xbUh",
  "key17": "jY5rCWv3EbQNB4LSxFB3t38a8DYCxsAKj9bVQWzzXgK8gkgiHDw7autdhMR1UQfRSFCAzaCnaRJ9omj5D1CE11y",
  "key18": "2gUhbxzSAzYS4SWWG3itLoYaXw11oP4cPoTpzgr9EQU1VHSFvheHp1gv2paz6BWo2w7yZMRT1iinUkEQFYFhqvfh",
  "key19": "3hLkiAH7LYkyZiCLLW1idEGE73BfQPbhJkGgnn7xEossAv1Tyhydiw3M8GGKoZw8tx2GuWouT5szsWm8oyDSEYmZ",
  "key20": "bqFT6FvMRdxqBmfvTwQm5x8sYpVL8Wv796egFm8dcz4Y5AhMBKvaqp5CEVxYujZa4v5UKezwkZwyPHbedXLRgW4",
  "key21": "491dQqXo38U7cWpbhyXBnUCWaECsqaBsnKGEVLKo3cNa2ijeLBcq5ywwYejKZGFe1TMioVaPaxN8gSMmh5Q79wCR",
  "key22": "4JQ9eSXK1ZfackK6Lidv5vbtrhKHiUCcZHiCixDxDTPdvcWmWHrPi9XHjvXVcYhXxjc5jWZraRvwRg4fjkqjBzP",
  "key23": "5Ph7EyZG8ewuzvRzuKq1x9UoYHxEWRPxLqvSgnWVw4pnEBh1NiyJVg3rHtoxSNjX7qS7fW53ZpzoMGQuKcKX3sCt",
  "key24": "2coZXYrHM9bjB46jzKZEngUbnxPMuciEc8E2YGzT4Y92joivz7PttwfnjkDZBvsUwnQ4i9qmQHPdYecX4peWQMxY",
  "key25": "564bRENhrTce9Tdbpy28qwKM53HqRniCPz25S3we49wEj3YgAodekseCnVgyqd27pMCvitTrhdTuGEi9oCJUgEDa",
  "key26": "3H2yeJ1KdwL441JhppMW8wFV9KipJpeG8C8Adv1RygCRSy6AduTPyh8ha3nWhr3HucRLsPJRqqPW47qGWLcUAmr9",
  "key27": "4pZfPQ72dsUsWQjYXhoKPwbkQmLf8VRmPT6EQaNycUuhX2uPpsYFGhd3aDNPPP3L4RXn2V1chTSYxCJjr7DP95M6",
  "key28": "3MQTQwih2YHWsBuEGL3q6vzcM5q8k12gQLF8zE23SdtaPcT9zVWodEW2ynC12hWBHSRDY2Ln1MvcaysRAHLge6tZ",
  "key29": "GpbNoX6EcEwEvnbXHhWaMPhbZc81f95UySRfyDfv2bMWAqDyVgBVzuSEuuj2crZBjVFb3GoGCUeNaGQQVKqXk8i",
  "key30": "3XG41pQU6of6qRsCtDnX1AKxiYU68yew9uqLd5VuTQRaFLZPjneBTpvR6rzWDVsGyFKQTs9odL62JDKZpKXc1Qek",
  "key31": "69dHZvSSPko3VoRyrg8GHEGeChszAdkzhqTWRn8LHxBV3unjw9j9FQT1ep1gbWs6TisYmkhwk4GXKqTNRfyLeFL",
  "key32": "2SXziTt4NuLDoSENyTWRwXtfY71UYhvxyzd4aFbJv4jE4EF4CY5Cp4f7Vs2kMXEFkkr4mUGEMAck7mrwd22AjUWu"
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
