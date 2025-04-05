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
    "5MPCvyWZugcgRQsmMQ8i91ENh5Vtn7asnnTNWCr2ghSXfYYhdFVkPUvKtqnn9kG7ioU8HzqT8Tenix6ruYaJZ6ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3PWge7jjaTuRR1XQsZjpAUxdvaKNPSye63sHtF2drsReN7zvA8YjU7xEbFKe6mcfF9HcdkmKUSp2vCP2na7odv",
  "key1": "3Ef2eErwARqEMhxcEn4jHNobJouarx1T5NDgVgRDTA1xtEH1UTUSg6q3ZbM3PaSJJXHWJtxZhA3iM2dRyF3iUZ7T",
  "key2": "5oVfuBbzSYkCEycAuCjBLa7bSD85YifEkw9d9Z65z75VuS3GfC4gXPmApp9vwrMUuD3v5tba57ZT7bW8bL1JLtzv",
  "key3": "3ydkiHi8iZWAME7sA7Ys5ox9ZcKazStGri5dg3T6enJWThMSUy6ZuYZcgnmP8wbPJWyPfEydYQYcdhmHx9DeuAkQ",
  "key4": "V7vY5QKH9BiXUc4a9VbHhoy11uPoFkseQuphBuGsWSGYKR83JNPKd6AfpN322QabJwvytK41NXmxZ7PMX6iGmwb",
  "key5": "2J6oxHSiworWQqGWdEmLVSAMNux8zeniH2eCqkxsM9fhhtknemVJZv6vz1VpJERvYfhnsqUtjHAFeAvAcweNRARC",
  "key6": "5y7wbhzuyPqytcfHZJy9rpWL8RrgE82vXcQ6HfFxXs4XxBF8ZQrXRKKgkxyvb4szxBMgQD6Q2cDTfZpQF6b8uvCn",
  "key7": "2ptjEmbZUvfjxi5uoRef8dhX1vF1eiSHkJNunxLH2dJuE7TYqgcEzweL3sNqg3rgVKCEjkapsVz97sVivdHZD5Vd",
  "key8": "3fhgWKdEaHQW73RNZnWXDLYy6DfNLLn5xbTL95xmgwTSnY8jBcUAf3RgpsFen3As9q25QXY2981FhFbEurDomAex",
  "key9": "2fiWDyMZiLJRabi68tvHGQ9mgqSPjW2VYhDVrDHC3H9vGBA9eZW8rpDX4yYQ3refsVB9pEU9XgfioXf49QPji7C6",
  "key10": "3nNPgY9Dap43HbUWDmtfAFyUPNZWYBcP8E4ebxQj6GzmrUSkJzqBTdyX2aQQtqQmHhWpwsiRd7BaLESNaFcE2Wpu",
  "key11": "2ybJHNWojMYK8xfqnMj37vH3PrXBjvUvbFLmWJe5x3tFmReAggeJRjjeRZx76Vfrc7dWad4hcT6aBNeTcPKHS865",
  "key12": "5kBQFJtNmQkZopTWJv1BWSCiX2hihvhVAMaFcThMbxcezgtvSYXbKT8fvaY6SxYs7fh2qVDRTK7echnohEFVKG5p",
  "key13": "5AXmtFYnpJ4QHNMkCC9cRfJAzQCTKdcU23bGmAk11V2dfvauVQH7L12hv7cuHd32uP1BTTvVwi3L4uJqZfJe7HPU",
  "key14": "5oWyknY6ETnpV6yYP887vGKpqL39uzM4J9cvyH6QQcjLXQVxse4xXsMX7UtsTby1Xsgs24zKiE6q22ZEK6yJKYtm",
  "key15": "5tq9mG8Pr3Qd4SPLiaurBGt3tuBE51P7B5FgFaPFo1yTS7KpfGGYjztjhsVFHkY57KsQUDJomGUHRtWrSdsazo77",
  "key16": "4yS3xSEJ2BYwMYR5gc2nPeMu2dTNwxJaJT2M8ywhBTxpePeyXFHKwsS2zKT4jnwe1fTRMUM32v9nV88EdG4K2869",
  "key17": "56wLsoyTACXKuDFXgsuYhxTRx1GfJtGbR837BJYchwyS8j6zw83V6fQ3WHudKKHF3GMRvnuFH7MCLSwxnuQmkJvb",
  "key18": "Z787jvhtdRyDc59shrk339guS6Vwxjh8AP2criFh4CcDYNKcSt5TfQuDExogDPyV8PjtSgGgF2xG5WYKHJKsRAN",
  "key19": "5fNLtsmWMqozS8fttEGynvsJFEhVQhazLQe6QBsRFPHpx8qWW7ibf8PEqjDvEe95HMKhi21KcCzoMZV6M2yUJgSR",
  "key20": "2Ve3uPL6DVCGJsC2QfC8MVLgrHhZFocxybyFprV9kjVWts1PWRQJyXXAWmYsKicyq3P7FiQy57uf8GyfcxViMCHV",
  "key21": "2QMfFcKhBmzVYVNCnj6PzV1Kr9cic4Ld4nRFa9z2PgcD1p37VQzfYYuAW5fCzU6NyEFRfEuyfaQFYD4fjx5wHXqo",
  "key22": "2y6FjmWebPXtmX9saR2SgHp8zAFNKygaoRbtR75bKky8S7QxxjcaGKPehhhGKsgo3KNumVhJ5HUfUtGq2C6aBA2i",
  "key23": "4UaRdnP2XgyBJkQ7AvLzSnmAVsxtXRpGxV8j4f4yd7VUeB9ahK4ErbVUjFc975Wt6i2rif9iuvxcJtKCAfL2iiTt",
  "key24": "5hYhMc5AZ9aDUBJg2ToJVU97MBTu3wsuqCBBCzCudbjiXzPE7iu4GMYHBroqPZUsWNg1JMXtLNXZq3PuQM6gtZae",
  "key25": "tnZvdBnefsLj8trz4j5zzufjyUSJtJqmtcCrnTztP6Wd5oDo4gseFZ2NS2x46gH7HAfC3f7PFWrq4NP4cHoBFJo",
  "key26": "3t3BErYw6naRvYsz8trVpC9ugZJ9N2idXRkBZLcBrTDAjwLnR3Q12PKPK4HewpUUfQCqjeaCNE9yC3u4k9vqRzfG",
  "key27": "3FspqPbPA7coQ5LrH3DmX9bx5GQssijahG8gJ5yj9yM3ZB6aFXUxDnM5Xmp16gFWK736jbxqkdyUdD66DjReEsJF"
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
