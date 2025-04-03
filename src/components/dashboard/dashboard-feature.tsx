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
    "2oYHXX6uZM1M84JDBQS23tLHb5wNoKtr1nPjMhKwa4n48uVJTAPTdpKn6hgWVzy8qPg29q4M5Gj1r27MmcLwDryF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpqtWxuxSnoXg15p5CEesZywRExk9x9ALArXW9rPDwwkWripCCMUfzPHdQeuZBam3pHfkFhHJoYFh5nZVUdzp8Q",
  "key1": "2bzbDb7NctRZqEphqHKDKT5pVNE68oGe1BA23v9G3QKmKQi8zzR6hkkcVZsNa44NNFBgs8PJgZLUq8CV49hByXNx",
  "key2": "iUaqGYhACVUwmEBv4CpRhBEBHdj9v6S5VVexcnMaPvNQ7cF1g18dPRWQGqafufXSYqbQCYajyYRByA8st9j5TSW",
  "key3": "67n44nTjtHyCFHytJgz8FDan5GKGSkpEDc88Xfu9AbCaqm96X3sxUKvnVY8dke8h5fQzNPLmySQmvUHEcHotakcp",
  "key4": "4ztFGL5YJe5TrcAs3RD1GnfJyBC958ZewZ3KaHaTZgbPBDjhYBBAU7qAjsaJ8ADWkXWdAgFg3bHWgqEHr78kno4c",
  "key5": "cpyTJcNvqcxqDXmJGgAFwQ9T5N8FFgg7hHHQ5ZaiYpni5KWcb56VrTEvNaLoUPb7YtQ5V6ufdUKwhmvMaGtK4pV",
  "key6": "9shznJ2BC51hKJeBxMh5H66QESfVQWSe1AeskTcbF9Yrt2GNRGTMuFd3RbgwuiWSMK8U2ZyL3VubgBYdJxbbSkc",
  "key7": "5p2NNqFm46PcRXowC5Hn4MMn5iJD71wX6atWPwvRF2g9nL61n8rT6BzGp7zSSZoZ7pY98hCLYnief5gF2xVKqGEt",
  "key8": "33Ta6f577H4x8Eo6g97KAEHAafh3RvbqmtGdNH4HhVNsXfXZEsJAxoEeYG2zHJkH8s4aZucYgrPvy58j6aQfcUD7",
  "key9": "4iADc8X9jAPARNBoGTcSSoqvyxLtVpzZhL2MvY5QWthnvLjUJLdBz1wdUtNxk7vdVEu5Ai4fXNuQSzQTjioa4aU",
  "key10": "5aJK4HQi4qv3ehwqi7VLuH9hM9CNr4Ao3kw1mupdjGFSivT7XkNWVmKeW9bLyt1YXo7ZvSgzR88CGkLuLRyJMV7Y",
  "key11": "4PW9s23XTAwL8L6nKTKZW1wJbCyFbAunL7d58c7W5SZvjk3PqNwwSBJvPK1oJLr8RX8ygjZWyu3SFzznjvi3Ybwc",
  "key12": "AvePYwA4RCciNC5gCxtr4EDdfGRMdH3u1ZeFgDk6vk6bK33mK71yKXMkoFTo6QH8DQa2BEq5qvYaWbY4GLHiDmd",
  "key13": "3ri4gqJUFYdPgaSheNdnkejS19ubcn7zGYwfjWJVAp9ZxwqaEtsf1j2XUCY5j8VtBejnRAGWw8e9UCAFLEwL4BGu",
  "key14": "mtfh6RpCtNifB9FPT2StWx5mM5nM1gTwsZrsaC57uXjwFYHkB2drmGmNGV54jQasM49r23LUXKijGVWb6QHskaJ",
  "key15": "1knUNpzRubs4EtuCSwNzkZ41xxa4YjBuNcFczepAXdiBTQaJWo3gpU3gZfVk2gC28ajmWxhzStBkGP7Zwiu7gfH",
  "key16": "4JfwNixLxtcjsFUmTNDJBNuTbHS9DqxvWJQvNYZz4uGdXNvSwiPytQtLQzyzrfzibiLSwccugdJTmPBw6eJ2HqNY",
  "key17": "32GVmBrbkFTD4sMnb3hBwoZGWhogw36aWm9umWt3FeyDLrYKxKY27EMWVfrKyq6RCNthoQaSy3o9M2ceEy3zjGKr",
  "key18": "5FpW8SK2R3n1dSb2FkA6mxru4nwZULBKukpu3SiRYBK2A15BVVE3m6SwnFLr3FmZS7GmRinGJAVcGZUjKexdR4YK",
  "key19": "5BDcSvyk6VFxJERGmH7tVGAtExJCqnEsPGKpNuScYiK4fFgBbcfxKnmmj67aWNtU3hUoTML2msXJTss9s2nZhvtq",
  "key20": "45bTSsnPUaAuGRNMQvhpB4eE53L7kuEaTbDsCzuUFKYXRGeCYcSt2WMLrNqDSGacxrR8bgDU8QvaPgavq1A1zWep",
  "key21": "49KqS3tJ2foTZsEP89aXJmfsu9TGib8Uto52sk4ZhA4FRhEWas8AX4FaHRDPzc7ehFuXt5Wj8kZZpZVCoExhwt5A",
  "key22": "mVcfqtkr4vcXAarWkCih6Vo1V598eEWQXUot4gVNp6hJfBoY2M6jfu6sJBM7LPQM1cNKUzK5WfWfsxDpK4Suw2j",
  "key23": "wyAJ9CC4dCcEZw2fKYwowcB7htZAMo4rR1Er24hVVHDV9DVmEcLK6wrLwWHh8MmwD7qY9p1frqfZ7CvYYnMbMeh",
  "key24": "gevA2sWX54tANBDDFqUyJPdqBtR2QehgHpMxviARRr4w3sTXd7rQ8huMDJEowzmhaZS11753uzP4fuSmwP9QgPx",
  "key25": "4iXRwNk8fva4YWEsWd8hBd8mXb9r3yDuB3Q7V2dJd5gpZBrg2TuxCkSn5rUpwkwNAfLgsgi28xtTbwYX7z9AAWdP",
  "key26": "rwiXSAZsQzTNhdNQFyxbKA1GL8BNcAp5HrFvq4AyLfr6RaJdKcr17jLGKys6u5fwSzejzZgPQMYbJWwXUbGQzET",
  "key27": "2DZGZuVGsHcT7YBFAX4xa2LrXR3EVuN2u8eFiu5rcUcjhpT4sC7DNK7DucTuEutvterA5Wf18BGG9JjduyvDV8eF",
  "key28": "sC45FrtzWEEHZdpfmdmXyQWjWUetMFJBkwpKp2Cvv7tvMLi5qcfdRSJBL7M1t4dLg6rxWaycjhauSxwHsvTPwK3",
  "key29": "2kRqr86nMPWvcwgmwonnZtp5aJUVt3fHBVt37WJg4ZB5BApX4FRUM9JQ5FzfskLm7mrSSwgWPZrHU1r9T7Rf4DQv",
  "key30": "2XpHnSDsMEm4HgfShsv3mfujeKo9GVyRp71aQ26BNGWU4N1HHcR1xa5KUxrefsy3H2G4qoEf31RM6kJBT8hQ17vo",
  "key31": "qfpB53RFmHxojyfMHHTvns8dAHUBRZ4axQxEmAYuB7ftAS66NZD8fVuGG595L9ATgZmY6qQbbUJYceTiEzC7fL1",
  "key32": "2oQ5kLK7nN8zKTFWF38znDXjVbyrpqk28cSP3Vcjr3ZmKDhGtsuVdG9MML9uUnBNdWFxmYvhtWVZY9Tp1qdZKQB4",
  "key33": "axCetfs31QbTvS5eEYCSKNjeL6zSmcVc3yabqQViy2k11sbrMFxFSGoLRQgcv1fQMBmemSoo26pbmvSqnbqjnZM",
  "key34": "3DXBvBLwTxFubG5ngJ1iZTLb2A6uiJup38s3CHwzms6p5a2pduGe4A9XevLkPTtpR5FBk2WnnHbyCEvxQ1RJfmvT",
  "key35": "284DAxfRs1Va889yRUKRLokw63cpfpDrzLtra3Sd9P7B5vEi9dakbUY4B4HcTseScDEUSNwo448Fhi484uSSQQLu",
  "key36": "2hjkD9TZrTqubGb7B5Ldybx6MWzqgira2XkuQYERYNokZy3ArAXsqvm6Z2tFPYnnDnGSot5DEMQPfpauGzaPjfMV",
  "key37": "5URaxwddYBGVFDoD9J3tQczjL1PqGb6gW2sA9wu8XNJRYV86aVdgYXbfFC68YarUMzSYzuJnH7bQjDJTAGSKQYpE",
  "key38": "2rBnUisw75vwekxHQuBmLnpssyXKmH7Sk4uJA49PugoJ8PnBQ24Aj6Tn6z1Ko8LLe42UitYHEtChicyBm1V3ujHH",
  "key39": "3x8nUSS2eRAMx7ZZqnUoaiTuD85doSdxocDM9rYEFmSNX9ZzJqQ8qwJ7ZdLyeSuQZQJMf71unJ5aEGV1aeiZUUbd",
  "key40": "2BQrAvrXBudKjTeBJDMTJKLhGDAFhH68884ys23FRDrogJaFxkE6iBmLfmKLFhc39B1G6LUhC8UvYNLg7YZb568p",
  "key41": "4yTebi5xinjEPHsi5hje5AuUP8ZqnDGQxbr6ijWVhEfxpJyK3JUeLWV9c5oehVsa8tuT14XHvPafkFzTJc1drQ3A",
  "key42": "rs1komgXDch5VGWcLiPX3XXk9GWFFXwEFRiYYefBdVnPeD1Vza5uhpdyELsiTkzYBzMSC6HLs2nprocGhLof5ux",
  "key43": "4JfV1Jk4bSELqfyp7pk4wb3fpsXEh7ak8S1VVSVHGaTwH4BqkiqKFuvpT9AuRFtnAeomNH5zoQDRJaeYJ1QfHMeK"
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
