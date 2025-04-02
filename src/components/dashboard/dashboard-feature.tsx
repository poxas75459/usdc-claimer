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
    "2PxfqdzA4194nLkToSyFbaBVMzAgU7pAJMKJ3rw29YnJoCcGBQVVxJkAiGj6KonmkATEDp8XT3xPGMovKWysQrm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cat7rT8LDo3e5v6yLnUgdDNQDkvD5MesWzSGustArY4qy4VQBDhPZq2QEnEgD99nzvK9oGvtm8ADvB5tb6LV43U",
  "key1": "5EFhPP86gKU2KmwXhQrgMJau8ZkiUHp6P9DvvjWTSqoNw4UPHzAosxK8chRNDabj1opQ6V6FENUgyY3G8FZLFDaP",
  "key2": "4ovmHwjxShu6E2d2dgixcSk1fVGRfygbkjSTBohTRTKaRED3ms7Dq1MhVKi8ykRrLDv2kViEyzHyLdv6cixfqmzj",
  "key3": "Yi7b6GkMfxGmw3CDLPDPhc7nzGZKoRoyf6XRStDrymfTvYuLjUZvzQn4r2ASYPXAi5PnuPhLHBfqFLXACE1BP3B",
  "key4": "PPz8crxkTmo4rRCVcP4xHTvHWmiVD4ZdfyJcdUJcSmP8Crk6pzYPPG9LFNSvEPdrLE1PmLfvcTwchnWsWnr7dKU",
  "key5": "56EpAyWWEAf25Ctu329HQfSckhdq1pu4fL1pWVKw7fL9ygbyViQyFjsmTwJ2q4c2PfHb6qkWszYccgh3fdUSutxY",
  "key6": "2g2XaRhmAQkbwDavKjqpJRe7tgj44oASVG8tu8vnTmTZiuj7xdPoZA1SVVrjJ3E4xrpzuH9snx1pWzVPBpgSSsH9",
  "key7": "5V3LDZo8t4LTs2838nRdt1XedA6Gu9J44Lm85JBPgnZrSnzr5wkzpFxPFw1VEKH5kAxVymPfB2gDRNyALu7G7oii",
  "key8": "5JMULqMM5mV2pfMd9vymVoADDuExivvLRmJEbJtcVRZWTSeEBShEtaTNjkS5iET5kof77ngDBokjKBMQbMwv25Q3",
  "key9": "2kFhHrYxKgQcYzMZ6pVNrATSKkoEroaLoM1w9KMBDyA7sBU63CttSUC2d9Pi3rRN2JgMiH8m8y6L7ABbEmXuhd7g",
  "key10": "3M3jvD85gFEAXoybed5Kru7pxL4f5APTpz3E8gWAGg7aQaNho5QBWsu6eWTEVRKcA3cJHUg2WmiRNkrs3Tosmxp",
  "key11": "5KqNxuqaxTjFxKvYY17k4kFCZagE9gDtv5ehvFhrtgxffmRhKxRFL6MWuXHELKvg1iNwgKvuCAeGP5QMxqitX3CF",
  "key12": "2pG6zm5AKe7ESp9XxEAhj9kKmJXaESwY3ZSTweHYVLVbHbbAyhcDY1c7W3M25jdXhHsWYPF7YEWuLyfANPKoGegk",
  "key13": "52hDo5JTir65yEPYfDUT3ThbCnpDaUMqX8T5ihBrh5E7T7f9aUnvQSBhJ5xUnKsYY9yw6CHr6euLNSTyzvMWBKGn",
  "key14": "4Hq92Zifj8JAN91ptR1Bi3avxEGwvkhUADUz1RBkQZGu8QRtZL1PrStFmXuekEZxH2Zzerdh19bWxGTzjjcX4dmC",
  "key15": "wCei8JVaFjkQy8KpTgnkzfvsGMg32yV2vZh8iE1qfoaDYn7wiHQbMTGAv5zP2HmYWwpjJZeEeNQffpbwiT1Jznp",
  "key16": "5NpY3rR4ghha9r5Dk79HNr5M2HsZYqm4uCgSdGuB2pBC2mdHXJNRoe19vggvw2Pv4SiPwN9uVjLnNtKG8ApL5pV8",
  "key17": "5hGc5sQ5cyCNKr7ANPCqYUCGwK2pyXhgLozx7J2AeWaKXt7oZzAXi73aqaHtrKTE1kb7EWz5hGUa1hd8yXjkbvA",
  "key18": "67TDjDei42Z9woSBjWtdwv55Y9kNqWmYvrgnxxKGFCbrGbYeavWr9BprvzskhCWphHm9Lkd1AqSxrzrqB4daQV3f",
  "key19": "NFGedojaA6cuXdRu5sRfUrvFKZxLxK2jmpTo9hKB24eNSXQr65coH8aewa565rpr41AUkMD4vAWt3xowouaWzSW",
  "key20": "5ASQ8dQ5MJbS3UyyPtm6YpaHBYRykMLo4gDtimWHfvmeqok1mt2SXs1fPMbf5kHiQ4kjHzFjLphjnn4jeduR9ogv",
  "key21": "32NjmGc3X3CmUewZUG7RQKsgh7ETYTGB818q5LEQFz34oQ8PSY3Q3wVqVPsm6nrQivdzyi6qA5fEnhb17HDsqsGg",
  "key22": "2QpQkHJh95ssZ8Jd2cfcwJWA9zqcuCrBWS9YWchXyEWZfBEjY6PH9GQPfWJYRaNp3ef2Mox9n6BHE7RhHJiCguga",
  "key23": "3G8uX9jNVZfEzUxgM7hrEA8iTFrMiVvEugTe9MWVBcMRcFuJeUYwZdcD9W41vsty75gHW9njGSABd1srpzNwcbYD",
  "key24": "3GA4WMs78f8twsPjXmTL8zr5UHLR77ys79rhFRZyPuioqYmfNrx737NDiPqgGRXMSxZMMbqeU9uudh2zo9qVWXVg",
  "key25": "2ft8QnU81xUs8TfrifjdQ5CuZNpTyvjxPEjGApMne6bjF1TmqVxvK5FixfKgdqsPGke7gG2BGgtCesqo4k3vaVuB",
  "key26": "27a14xkngBVYEucRKk4iych7XzBFbFx3JHEmw3ZN6s4v2yXSoTbWAUSRqVwBkiZJsgD1ZRTxQJQHTgg6M5x1CXi8"
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
