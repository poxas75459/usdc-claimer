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
    "2eZeajgKxLNBE5E1o2b6exqjPAAaKkDvpv1tUbqBLJFPBpggFiXzVLPGsVQBC2yKHrrF1sqGP2P9iUGz33YToLWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewicmLzuYNWhvY9CpKmFj2WUZRwjocUKHM5JFdUKP9oCSExrw4oXJNCYBCRPomkT9hBEi9aQQkafrhK8AWGaYxv",
  "key1": "5BRj432oqKNd6EqMGeoDbSPm97fnVCbdSG9H92LaaSA71Eo7XKA4jFEfacBhyPmseVt6T34oL1XcYwzKEcoYfVTA",
  "key2": "3x7BvKTeynkBDRqy8vNrF1KGMy8kn95if9jxheU34XWBUQof3gPp7TW7kfUSpme6Pm4QBsXSBVa9rekz34zKZ1s4",
  "key3": "65r9A84DB1NXzfhA87tv7pMTb5SeSTEBYDVQVFW2oZR6fpktkc97nUzriYqNBaFAngbCaeixcj45SEjAiKGVrsf",
  "key4": "4EUDLkTDTQG44YbR9wtNu5m9YEp4KnNrJjumjtTjv7kwSvEstxR6UeWWLL6GN9ByK4P8GoNcktmraTEdL4FRCHgS",
  "key5": "2wgigjSsw3Bdf5NZPcHbS7SUreGYmYDcjKBKtsHj6vujkGaHwFNjTR8AysjbU3vbbwU4fgEvjNAy6vGbdiGqQFU",
  "key6": "27z5jefdEyFfMDCJ1iGPxr12dmbZkdg8CV2DJtfrCRHiWLcPNesJkex8BuxH7CtU7MLJyESuDsBm16Sf4VsMQZaY",
  "key7": "3XTp2ot7TKAUss5pab21sSHSyKYdHmz2bC7cA2SwiJZBVYD1a6zPDMQpdP59um8UjtDTrJuSwCs54LKxadGjWhq2",
  "key8": "9RaXZj3rbZWzr1qTcB2kDnk4Ux7Z7RPCfYYASE6xg7G5u6DAYnUkLLoWvQcE9JrT11K9Svc17GqBzGHe5RvjAY7",
  "key9": "faGPcb3bGNZcM6AgAM1rZDLuuX7HFQAyQ9zBzrmh2SwsuHVeGNmKjfbsrVMai356HbBiQPu7PYo57dc4S785CTc",
  "key10": "5AzZUHt6VwuAYEvbYwpBsJqHX8HtoSmYiBNgF8fUwY1Md3gqWvrdQrBkaEJmZQX4rYAa75bBymwtQ8GdaTNsjRRY",
  "key11": "4Jejcik6cmhGnZjxsik7NLcQVHpNvoWLMAaG8GeowWmnkntQudwNLXkN1B2eScArsmZBeJ929oieaHGvP2X7W82t",
  "key12": "ieGGHX7LhDq83vTCwmCVXu4Hh2gUpmxEfJZV2qEaFijykUAXkhYMYHsag3MD35etdAyJkpXGjwJrZmJsL1u1y2b",
  "key13": "5b8Dvd9AbDxUk2MvAnFg8Jju4pWCbnmWWfxq7RWf8xzQN1v6h9rS41VDxf9EynUmbCF6odVGPcPo8RhQEcqJ2g4k",
  "key14": "4n2iDggoVcfYVXTynSmjqTCM8xumzKQ52WApWkV8AX4LJYVd3rYVn4Vh1XQAXb9mLe1y7fZfF7QbxifsfGVRjzV",
  "key15": "3LcqA7RSHETM9UAv5tyWZq335dxKKbdsWV15GS72RdAR3xM3v6jscTtdMtry9CSEZ5Qdderu3f1j3B2M8iGYaThC",
  "key16": "521Q6g7PhbZXELdnEEjX1xtpkxhJZ3gYXCisQvTXwp2buHFQ7ZTaXU6r87Sz8BpDKP11t4bogxiKxdtSP5ami8Np",
  "key17": "4SvCvkaJpyubnRJJ6KZn5LNX3KEmXxPf5yVC1gMjQsGYJKcnjKTgHDzxKqdHKh7R69mYXtYZ6CxgmzzRyaQd8TUt",
  "key18": "3413tZkLEzJpydh6N7yeXpgDi9NkGKgMzjay6ZiZnobjYVqLJVCBwPyxiGWgT3e9ydLwH1pHDJqST97KGiTdiG63",
  "key19": "4dyK6RWG7uAPYZBDkHXGPDjjNWoKNkGrXtA6jtqWrX8P9nVEpRwcWYTnTUQR9puCte6V3Got7BprQ8UUVtyXGAqu",
  "key20": "h4K5RyFQ5iSB1VokPw7Po2gAVxYYvAns4aVu22ZrRm1JXUndgx6ZsyPPqRpvpeuVdgZYdhYGQCZ3hALYoM9jKjg",
  "key21": "2anARDQA4G4wVTSxAPSxUeSCEYeB1Ljv4FFDJSYPs6FReUgSqBViRF3jXmnvT7oCsbdkyDtzh5dZ5kf9y7eRVNhd",
  "key22": "3yV5UuG4iq2rB5xyfVFXQiBrr7PaF7Xk8uVtkRHuJK9NfPGmg8sPiG58b7KWhGKsH1VJmNFQHT7uCeDS4djAQFq4",
  "key23": "5YFCKumbx8f8PvpCFHUYyQnjGWoUXAGgGMKwb9q3PqY1ZLP2k4Xw91gDnxqEpepN8h9mkLPwntXr3ZTntFzKkVxa",
  "key24": "3tBbtv4M2E9c5qKAQcWa7d5dsaL2iB8sBxmYskWQg5VuQhBf2mZcFCcCduKuPm9cYbNWg5Ly9gMn9euUor3X6WtT",
  "key25": "65AnzcGeGLBsRPQy1UWa5K1iWnYsjjNgHUisxvXMQwqQxEePjF21docexkPwBkQNCJ9uXUwb8cBpy9RnPb8eSbim",
  "key26": "67LTCwE8GUwge5Rmqa7ZL94L4oCbZj9jDaJFE1h4aNsmXgsp4T6YHmWHs9ugm2gy8W14sQnqXi6tmfd3JD48ECPx",
  "key27": "55vqtEVB5je4wk7XM4djBW1SS7DuheBQxWV2uuN2f54vT56KkRRmnhUbk2uoFi5vv9xZh8qAM8aPYFUwKHyABShG",
  "key28": "37PkZVa1pRZxFuNCxDjufbgdqSNSCNzyf93M4PvGwYcrcd9KuEPjXG4MavDpb6oczwSCV7bphQm3FoM8FjkgfvKu",
  "key29": "2ofxDutUCUbc3YqoY2SnvrgxRmfs8hGQocZy8CumG1xS78BkcNrkY7JK1kA6GU8gopJtP2K5gkpB8RLzBq4J6UwJ",
  "key30": "kWW6qzaaDa1nKZoTbDvzpdnagWEA7Ph61sHebtiepDKoX4KfBvstiAgCQ65FhGgP2KVw8eyWciD3HjRSqz9t5Zq",
  "key31": "5JkebEFrpv1z8vy9Wsg92PbkpBxcYEPvJqhfT6XjUUf9rpEHVwuoeiyMJRzcrBYnXdMuZaFTWwQtH8KLGrJVZgv7",
  "key32": "3vRhhuKLePLf7GiooJ9wGtNmBNQ1Ko1yZHVjLxWi7T7vTXpbbVaGUbjRpi8uBTutBk2A35v1aVk48iRewpKVCqpM",
  "key33": "37cw88XzcMdEcwtLQBm4FUtcseyirxHjNzobCn14cCNVEDsXU4BTFGore6Dg4uPc91kSTc27ASYY4Sr6QGbHgvE8",
  "key34": "4jT7mVkUVwWQBQpsV16R3dnRxptuyrXTN12yL7kXsYJPns7Xzivbz6XkZz2eYWgS1hBUdLzMr4S3VgzkmibMqmLL",
  "key35": "4q3GEnBnAQqJ6yQGg6sekyDx8GyykwPGkxoJJAwgbsDayKh9AhkvbsjYoTs3kkLLWSoQEWP1zJ2HAYB83UPWmz5N",
  "key36": "aDwoKrGYCN51QCTPxAqFQrnSNBeajbDdLJmHM3mBa8pCrKwxJ2BtaUQP12SVcdw2qtv4zy7P1ivaJ6whmZPdrkf",
  "key37": "4KTQH83gn8x7hLLbmTMe1nMgQJd7oiuWDZvkA84g3YjXo2ukU6F9pwrHJ1tqQ9TUxXG2bBaRnQ26JeZub5Lf9eXu",
  "key38": "51mY87AfvnyHFCyFnJbe4iCjP1o38H1cQYKmKJxLNjkP8AbECKdYbnfnSaCFThkjtSGsZ5u3WrQwNMC9zJfpTmBX",
  "key39": "3WRNxyvdBGHJENSSEWDtFJxNMoFPPj1JA64RBQC3cXEC47AVJsXT4ioetHdjKdbiAqAriJGmov3wRzJhYBGfKAcU",
  "key40": "rErngS6dBcUCW5j7VqvL8mJi43bp4sajRcaqooWwW7MRPMiZMtwmt8PgkMcMd4jVFb9Gh6nN2heR3Kz49TwQZgy"
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
