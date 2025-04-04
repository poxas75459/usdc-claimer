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
    "4hXZfDMXWXNiZ223c95JtC5nDJuwCxpPHx137o7NUAJyWJfz7B7QPNErEQSvxZFXSZxMDT2oeUgyzhp4h6KFAivU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lj2QWSurCJRkrdd2YvKMsUe2Va19NEsduTxWtpeHNsKAWRQ2dzdzvM5sbwEuSSkSSaXKgMSLpJc6ZE7kM2GEnaC",
  "key1": "5pNdQe8QmsHiEJMFU5UaZ645wvaVmw8VtzZsX7GMupQgfPDPtV3RUpp5Yi6WboUNXKWUCykL7EdoFJFPkXjcVAbd",
  "key2": "3GGBFWbXahmnbyeSis5uWe9AeX7um6efJ1ipXShmaEbGDS6HK788dNkok7gTU8TdbKtL59WRct5PL7uoiZ8hCU3Z",
  "key3": "5x4xPVy6h937NyoWmxmRyZEnnoCR7JSYemqCN7ceszkpAq6tibFtvjZU7LUh27qaDM7dU7afJDJwZrshqG2Jurwc",
  "key4": "2EVYpDTWtCmz9qG7PW1Ej3GrRW79vByGxK6CSHyFhzUrMhfXbRRfpctvn3pzxJrHTf2uZ4UEKvDJh1ALgJ1vM4m9",
  "key5": "5m2wMg8S9pKZ7WcpSd8CCFwKbddMkqmgZMDDRCoqFiCTZ3gmXi88Pn6sSNKKjhUU7Qv33z3upx3PD8R9C5LZuprw",
  "key6": "3JkJ6F5HXrYxAv9NpTTXXnsdhN6qoqZj7XNhjdyBTp4zAZYmhyWQW6dTTARyox9Hu1QURCwi65Sz6c9dnWRYWxTT",
  "key7": "4hBDenHZBHyqR9jfHojdSGo1zCi8sGQjdLCSBjgnBeEEoANMsKaBcpqyHuCzwrsusugyhYzvzp82dkPyJvJdTA5F",
  "key8": "2DWpxcQcTm2vYD6XSTpdN9zsi14YyWHXevTaFFniFrGXSA4sLZuZZQp17PBAB5ZuXNbYQt32ULLZvKjEpH9GLyi6",
  "key9": "4ootn5xtbz1fN2X7xRuaMJadNCWWq2sLUHjYpdg1c73Qt8yBKugekKDn2vdNjCX5LE25woW66PtNfKz3RguLgj3E",
  "key10": "3tMn75sjXRe9FL9LjRxVsiWkesPRfCnTY7xVAwptLdjzssRuJ2Mwo83zL161ArRaJyDJUcWygCxHzRfwQCXK4Aad",
  "key11": "35iDm9iCzrToPZWq5PoYg5hSsMGs1Cqb2w2UBUkRQh92bA7aKWapufohXp9HS9tKaZ98AiPQPVPhrem3qNz74FFv",
  "key12": "QEvajv43jED2ibMSD4V6xZ92vPHXttZirtaqcSqZsd25HJxYW3zEhDhYp536hBRAd3HcvpfiyTd1et7RCJz7q7B",
  "key13": "3rs2bYwB66X1hhdwbEZWHFdtzJUeFkbkHAFRfxkACGfs25nz6dhsU2pMMpsmo9K11CskMiQ4ECfbTj71tDEq3bzJ",
  "key14": "QRE7QxMeVfZpJ6xahU1QJFfSVNHzStTtXX1QXf3Th7WZy2sXzVTJhj6P3GStu3YvnwKQhwqkBXoxUnAKSyNHXkh",
  "key15": "2PGW1KiGybEy3hnLjCgP8K4uR9oDhYixkJcViMfaRTHp8BXpepjt8zs4vfUFV7qiq8LmctZ4yc8aJ9BRbMYT9ZVD",
  "key16": "anAmgVz6Ho4HFRUdY2RGGFZqCTCbTrSUoF6kLSUNsXgBCNqwWJ1b4cxz1EYpu8PVDyxDWzCXKURAEFVuvEgenyk",
  "key17": "4Zh9RTuDYVZFPNU87hg4hfBnKtE7tDowNvnSY7yVjdebm2ZUb54mHP3tB5DjpUDc6qzZehQ1pvbzPARrQRbp6KJL",
  "key18": "EY6AAsY1i6f1FAL7zYtoGgdEwEU2bdM4QChFxsUsNALTU5T9MF6TvGsr53pHizLyy2JhoEuPmvmeRKfWVKMQDLk",
  "key19": "CVkWboBZfz8pbM61kZ4XmUJqXct7XF8mfMtUCXrb3UBDX9FHd1RxxNqDQKdoodrnP1jnwPbF2XpXNLyWnews1jX",
  "key20": "2rG7pBxBUBFSWZW4fJYkU2zpqhbfv23Vj3GzWQavgacA77RoSKT3HrpGzmVzL3dB6NDQYBRm6A64aqsfGVxo1bS9",
  "key21": "2vrGxgzADKr1ZKgBsqB6pNHcn1dtcrXHXCjzBEoF28nYk1MXnJ4o32HE55KjXjD31DTFiUnJJB16UR7NAeXJgfnw",
  "key22": "3xCUBpzAQjj7KwDprptB1gWxTf9rESeZiEa47ggSNHbG9TzUv9DvmJgqkiYy5JC8ZevE5MR9Jtoa3sf4g8kwYbwg",
  "key23": "3tHLMVpusoUDbGRfnXP8k7uKqbYf7Y9CPzzwCBR4R6L6y1huftSoLHygxKNeHwLfVE7KosDPNZDMkRT6Q6JbRFkV",
  "key24": "4rWUxeX8npGkE5QLeLuLquGFbcLLob9b8idtE8BCbmGHpR3C9MLb2aTzuu4TkTFgSVFfSaAJrvx3aB2F2WPsvcm4",
  "key25": "BtyKFNq6vwzDnE9iRjKyTtyJJxdC4pQFkQYWh2Z1z7NuNcrvWGCB7zciajmbnSkMsqw2sVV5xpKVyXpCtWBjwdc",
  "key26": "4hu7pY74qa5HbS4f6x5MXJHpr49g9t51ADn7ZGMQFepLfnRHfnqnhuXMGwwhRSGSofpvkdu7pg7WSyLoxnZscXXv"
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
