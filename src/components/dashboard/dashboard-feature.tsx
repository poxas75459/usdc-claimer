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
    "3XtycjFwJgXQZwS2gY6QojwdPM8BKcwxBzygsL4sf3NhwsrcdXnT3jmE6N4vrqHf8QRb4meC9xNv2EXi1GywZXQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g6FFhVdG7XkXkvph3CRVBb3xefaTtUuN4Tk7b5GPsVGDTHhaVKofQnmMsZ2VZRRoeZRfK4q67C1j34f5woN3FUx",
  "key1": "3QWsdPW4Z4BYofYxN7M3pX18kCGLoPBzUx5rtYmq5kfyxn8VMT7nUfXAbm7ohMnwhjjLqtrbNuL8YQX75rc6Dd9J",
  "key2": "4qjzgbfa3KAMZBwDzfqR8LSbf7SPXkVQzqdz7rEBBRoTQYdejkK421aF1QzPGefrUNNjRmaocPSCSVh357stQuCR",
  "key3": "27qmuLE1ttAtmxyHMkw6tPvASigfrgH72YWpyCzrejRSqzEx9aMNHVijZZjsu3dXpdyVMYneAHDY2GCwVbDwVjtj",
  "key4": "cQzAWeaxMZ1YnmppaDs23cTSnPspzJvckPDQB7UJjfqA7AcuGGuAJHcwpPe9HC92C4z5GdeRmgLMR3t1aJNeZWU",
  "key5": "3a9XpEWwJgqEQs7qYNA3iKC1URrT8fcSCkf71HFHA6UMyQRtqugzsMheWKu66PcumMNHtfKNfi1NMzSRxJQ3DuCM",
  "key6": "4uNymjceha4RCn3waENiTiz4tTnQDmrpxhd9cwn6ZFW2chFFfzoBaaZD3eAXETNy2bDg4xtK1vgzAP7Pu8xJGzcH",
  "key7": "5QRkcnEqh97tjJKBC5joEYLc9wCUbaASpHfP1n3eyLknJgxwPuQmABLYxxY7728koaF1Wx2znpQoeCobtCzWrhfn",
  "key8": "4g1RVVAfDgPEbxK3PZvDDBcGuhdWwSAYhEwbNnFChqD8Nh3uPXEMZzJN4EyAjPu4dapkF6avscVRWKVufFxmYj7S",
  "key9": "2meFscgDYjZnfGkYoGeytTnbYfzF6qkck6bZJQs6FXZpPYKhnS7wLUaFN96MNukbnTCTc5LHtg83fF6G3cfKQiHy",
  "key10": "2N9K54FyK61UqfdGrjH4sh4spMccCjFbYseR8gYvPai5X23fTF5UkV4pWAWHGh4sMtzbWrdSqsM1AHe35Y9QsLwH",
  "key11": "5DYUpCmLBmFF9pAjbFBiQpV31j2HujzmMNKTTJL73ypp9oykp1A7rK3S9MRN3Z9Z6ByTdGxczMCLf6otypGRyrUX",
  "key12": "4zo2ebvaCsvFvQAiLFKkogt3Cm1RXhDGjNuoTqMKczmcwsaY1uDj2riTaoYbkidtAu14np8VMm7956bbxMvXm5zW",
  "key13": "2y2d5yi4KxELTKwctvmwfEppPtZNTTAj3i8vNKYDthbqAzvMJcy3fJomZ41gvxFoTAT64gkfCAj24bqpTqdi5RDd",
  "key14": "4STc59b2qfjpWjpYdBsumBfc9knXV39LERtYgVKFXhrTYWTZhBx37GL4yUeF7oXRy8TS7ReRjgVvKpwb83rPMu7a",
  "key15": "ACUxf54nNExQkdjHTs2XpdJDBnRdFBqTgDXC4BHMLwV8ch8RgzyGchdGke5cbEabDdKXQteFFoKscgwb9JX2rNQ",
  "key16": "3zxT7B56u4HMHATiRgLSjpvGebj1BMepv6NvgmTm9nqtVJUMk9r6cTan8vroKExtcJsFTk2TEa6SeAGAqHUufNLm",
  "key17": "3k479PtfG1igYi3eenN8KZELT1eX6miCErauyhw59pN4sEDrh1SXENDw198RtvJz5rGvucRhwn1B6NnCXskUSKF5",
  "key18": "314bXhjPFWFrjXcmPNesHELzK5we68eVcy8oTfHW83rtM9jA2xhvNABx7MretVCkwZKATdHABms4iuZ3sE1LhcSp",
  "key19": "55obGgiSeaZF2ytG1CRDf8yE8aiXoStJkBxF5fSiwXj4KksS4cvX45mhTy3xazsG2z8fjGZqLeNKERWyAu4GHVP2",
  "key20": "5nJhPNhkLYXpKou7zXELX9FFimxDk9Yo8YdnjsWQtZ1HRu4hAaZm9dfbLs3va7ht82J7h2kNM1pRR4d35TMp22yo",
  "key21": "5m1fzMAgxtxLRBHckz3JvcA9KN1w4hpjYRLtmgdnZESv5aC9FT7KDZeKeHjszQ1wTQyiXsdbSANV5kKewDRnTQZi",
  "key22": "3svy8eLNQSzadMXqJSMv9VVEVvSXruY5Batf1ki9nRyC64iLFaLCxPYkT9NS4Rgu4bhLuWmrHKdGsfkoYR6wrYv6",
  "key23": "42ch47hBrHkw1JXYrgy4Eh4CABAgqj4Pfu4zkXVfYR6JkS5vJXPeo6KCVEGfsBfomHCPzp3NcA7j1W4bS6XABUvE",
  "key24": "8TxtpsK3C18HZiy74jgR7iJ6ddNvpZZuJPu4g9qoGy2JR5dFjwvAWXBADbTqaZJTdFQusrn9n9frfEusouE1SCS",
  "key25": "3Hx6rmPtpMKCfshNadLUHwErWDnxJ4CVnHzD85wzqRZmjrYzAodVGpcLBZuE1DeKqBSNbdeb4YB4HBojZ64HV5zq",
  "key26": "3kB65T2S6eBCtF1me2fpCjvVKyhc2ZVmqBPJPH9LnqvTfrdRkmdyUfCwGcQuaQaEWHWxKxqhUuGqJMQ89F1wrcpr",
  "key27": "4ee425BWkg3GFjLcJjNJE3UKjs3JyDNt8NVbLyZBhBKPzbVW9NE9jy7XqyB9esEVGsFkYxt2gcUvkt5a9Vsex7hj",
  "key28": "2My7hVCRfAh1AQQu5MTf8cULDaWFP3NQty1frHHPmBpbZbozDCgv33648gpUY5V9zDfxqVaY31o6zSyM3KojMUE3",
  "key29": "2TLW4HMRSnfUhTZfMQ169AkZbSzQDtp3sjozEjGp8PXA2dCzDtNRQATYmogNhLawwrjCFY4BfcCSg5yygzokXE9i",
  "key30": "5BhVcchnJNfz2cLMU3kzPq8PE2EDS1uU5ccHYd6UJvfAq7mY56njmjezMQisQRZHjQgscxF82puLQYHug3ypcVrv",
  "key31": "5GVogBBR1SRtZmzk4if6E3E65rEKA13yMCSZBZW6Q3bDGKCW4mSsTd7wjdEyDFpuvhWnL4hieHZp9JLjjxMQFTy2",
  "key32": "KNRAh1jvfksH1i1EXoabS2TdSnPAP8SCqK8aWVyNsUAPtLtqyJQpHbuMUbomn7vpUuaQjtLiqMz55Zd1EWJqHQn",
  "key33": "4SVfeMw2DqhgrxWhNH8uQjA9YzoXjkQUVVA2shjNG23mNtmfQsoN8FfFJ8mJih7EQjprVmza6gBCkoeFVpVTNQjo",
  "key34": "4uWxATXg2XxaJzqAPw8Ph1Pu4aKH19RcUdGejGy51puoLbVSAUpipVYEV8GBWRYLxo4hv9VQydL4CtquemWdm2ME",
  "key35": "5nXmNqWpTT1x5ifewHHSZhNuC1jYMUm4KoRb8gYAn3CMELSLHMYYdP5E2PHwtmQpB2Lz7fDofotdHzUvWXnq5kkq",
  "key36": "5sDgwsc6YLFQxqhz66XGNhwZ74dLBFxsQvhbFKtWE4UZnFQCCXyzZ83XfGqAJ1Ytr1HyLPYHgMmPA9opmmB8tNHk",
  "key37": "4d2tz9U3fX7eazoAUn2Ym95ssrsfZYZ5ysqZo7KE1bg1yY93WtP5eYUUyPnKRr4ZBMbEFiVq4E8tKe1RYgJsDg3t",
  "key38": "34zzNqcApj8dyqAXFeEe6CBPdx9UdXKHDokaxiLbjCtwKmHtsaQKVCcTm6tEZAKu2yJQqRBKjs3DVUj2EU55oMH4",
  "key39": "e1i2ML2HApbdgE2NnKbYNxd5kTwyCLgJFXnFT9EQsmn9GzE7VEyShu64aaW5ZHvwe1xtKZcbCc1MRxvjK1ddXGy",
  "key40": "3UkWzVckw7cFKzSGCyxsTp9X8pRSQhzqGiEGPDaPCcbRh6SqmxQG3w3eAuUFEGMWkwKxvk45uBAhe7rdwCwFbRqk"
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
