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
    "4p94Y8zat4EqwEsR3F3pDsex8KuH6NLGd6tf7GrtAayzgPTqjgHBqEkjGKJdDnLt7V2582xr8Z3vVUqE2gFRD6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7T1QMuCJJBy7nw6wFgCegtdQ6GqDwNKFnVv82zjUw76poJe9R5bPir1QGBxL6tCcce3MCDw5Y8EdDEU44gWCZr",
  "key1": "4UNKXNEWHYMyDyRcerp7APkLxWCAFqnkekYYYnFXxD5Lo7JFmhHuxjkJAjPhfjpqVrsN6HPpRSZCWoLa5mtXuZ5z",
  "key2": "2anLcgcBZMsWN2d7d6x5NCr6QmEEvv4JPay5ADrPsntKZS1SKWzMBdA6hJ6T4KA8DD6juAnwZ6AwFddqp5nvAP2X",
  "key3": "34JZtNCXYpCBKcsKSQ7CSWBYL2WYfGN5uErDGiZkLMFanmNnnYTV1svkjC9VzZzEQdcLY9Sq9HGMzi2dC3wUWRRk",
  "key4": "3mwgHsftWuaTp9QAmen9qURSQSZtiZDiWTqyocQJc84CxewQvGRKc6nj5kNHureFg1SC5SBD8XT1Jn2ENP6pQHJe",
  "key5": "3kp9SW1BUmN4E9heWWebn2kse1jjFiE7LUqQEqP3qRiHAXBUZP38ctfQiVajQJnG2aCgygbhvZMQASpCcmCWjo9B",
  "key6": "B1GjHKDa9FmzxYnEjFtndK8Cjyd2eVDawyEXpgXL16vBrWq68w7wtgZmctoFRf8bgcETnZip1wocX88AsVFcWwC",
  "key7": "H6kqdrL6tsPyFwLY5Td9ByQEMqzyMJ15dmx7C2UG1jPvKkYkHrBXyRivFFU76kqKfXy3eezqHGQr7qmPRphmf3J",
  "key8": "o2T1EF6Abza2keQKmtfrYGGCgQQnVRqCCDBaJhRHzSwN2DNTwWqArpMdXad3fEWkNJXdQNLEutuAeoi6GcXv7Ca",
  "key9": "L2rmM3nh1SGLgEzJHrd1sQ6vzZ8MMHLsTdcFrmqT8CD4YSmTdgMueFK35hHGjDGasUrNw3Q7yVse5jbGzPwq38E",
  "key10": "41PDUMdTEekbxk8kPpvXq9RPEhHgMFw5V8hdkKaYr36UzVgz7R7GYxY8jQzid9yqgo1pGb8ahHKt19MWfvMHSUP",
  "key11": "2uSD3BvV5X7a7394JAyFfLUepmWT2JKWMnhEGGh3ZJtNQ61eJo5oMxPxGFmF4GqRyofM12fq9KYDUU7pUzVXC3b2",
  "key12": "5h1RyifK2tsVijYX6bJHNLQVx27g5iCdUq71SihXQrbJXgfHSPUqVMXo2GGmWrvKgjErvfch44M1GPpY9r1uyLdN",
  "key13": "3sFNGVeJtTQ7H3TayE58fw8H8mPfRpPvmrQYgzqxDnBP8S6cbihSfMWkb2Q5cTXo2HJfi16nPPYpnRyeCwg6PVgt",
  "key14": "5Y3BcepYD25yPBczducW3bHr8tdo3ReTt24JYguwCNem4xFWxnp8VhjAU789xZ6smfpMnCM9YRTGs9FmDsabe5kF",
  "key15": "6TWsEgvKVAmYvoH4PZLKPzfm8MNsWKLyE6tt6N4fbSzULN6pjjFCXTF5Pw6jdT1ZyACg1B2GE9Z7o5tUeV1L5gj",
  "key16": "3DBFnkc6cym5PQovhn8Zo5AcK1BTpQjR9HgyqUosUqXoeNMq7qfjQCkzcyx6cHcqDXbfFo7711EKs6st9fkJm28s",
  "key17": "sPzEEywNY87To8LdejdXiQubg3iQLRG9CxXJiWQTCBzHS3gQWnRsnUsJQ9Mo9ZP2iEGKzhaXm3414W2f1p5cTdq",
  "key18": "2CMGzjvo9RKqoxUbb5QjJ3qv8FNqm2oTQeHz1T9HthnTTYardvKsXxFC7PMvFrwCu2aUmkCFzLtAuJzUFwxta2Lh",
  "key19": "2umDVNCJKP5tEyU2M3o3jN7Zx4Dz8QdPEvDQsnjY1U6wYtMgtts2nMQYuWEXZsjX4ia4bvJoR6KNanJHUAED8oYo",
  "key20": "3x27XbUroKTaV55en9RNY6yEJC5o8zEUxAG4Mtomf8Rno6ozY1jQvUW1PwychmUGt39i98gXonV4SjxUUR5iCEv2",
  "key21": "3awgsgmMRumqNDnUXEC4pGSSvroesTVNwxUHyvVExpJKsqqWZrSLceGY2tfnN6upFJGJsWqibDNjWF2wdqzLFJJS",
  "key22": "YuP2XzVUdeMhmRkED5rR8pLFcFYrcmVTdZjDvNVk3eQgn53fiFccPCNFxytfV5fBzzXtVNu2hiU3M6Ku8z6ySm8",
  "key23": "58J1JyuXEBA3pKYZNsCLZaiGYNU3gbnwqdJcHMquioKJcQY63BoftxP2yaKY29g3RFjp6kLKwikiuD3PL8Fy9EQ8",
  "key24": "3Kec8JjR8xKPMgAKcrvVYb3SYZGG31icw1ogE8g4eBENfWh8Dwk2NnX8URcCvAoV1p7MxCrK99vBhqqYeLJQZYpu",
  "key25": "h8o2zGLM2GPAGycXV24F4YxEDuGAaEWt1w2MmVZQpZAX5tot5azM2eyJ35rKKsJhStGMgsiSo53zNHf35Dgf8kN",
  "key26": "3xQF9EPPyddkxSaV9cQXSvARHMWx7bq2ueGPooUuWDfwSnyerQCqYowyGe1LkZX2SJ7QAQTVykx1K9WM6BJRVrHP",
  "key27": "4rnrtqxwBjjWuXcGavuFXJczqF6bD8j4yUP7r1H8WuVMARanRxZpB5X3Qm8szNWbFMUBKtkGMrsZWEvxYXEJfWvp",
  "key28": "32E9VfucLurPwcY1eDaVgwSrLpK8kHPjCkvsFSGZSpNQfF8J87nXsbLpE2HdfGhAHtZ1Ueuw9sr4gVQiob6p3w2V",
  "key29": "4dGu8xDsbbj4dUwwejwESrFPga4M33ixxPPpiZ3RYKs9gdwFnWtVhUbArggEtec9EPyfBsBezzMTxyxidsRobxcv",
  "key30": "4sU8wu5pqTy1TUnQ9iap7MXiwkxyTBqSrC3uNXgB5yQaPPunV6e3PacFXoJbd4xyQp7EnJeddbbrjc8fiLst3nrT",
  "key31": "32Ma7FnfjVnJ2x8ZXkstGaFV7XK1T4LpnwkCsaiU3j7cYTdQKZUGTYTkwMvxBKaen3PJjEHmbFykgqAMeaSFfz7U",
  "key32": "2iiNyLPBusLGBuEguQ6kJqwicCpxEYjLWLZRpaX5MuRC9befxYAaHsfXGLnXhZ9G4Csg5sGi5DWdPyryfRnDbfKn",
  "key33": "5q9Hp3imjDHKMXA5R5tYpk6ebLWEsFY5ahnSAYgRw3BQgDvAymLtZLvW6iwk7imUZkcSBs6ziM1koMtx2XPFim2e",
  "key34": "5pntDBKXt5x6EjBxSqW6tbMBAY1uMoaSjt7rBDeCChQwtVt5aVB3KnwnskeJigBG3k4fMvLTnTdTq6YzgdqYVV8u",
  "key35": "2iXirmeZ41sy5iUVPAzxx6eK6KDs7p4K5S6J15ARnAgPStcST5cEUYs1rQ4yxBHEFFegoRmfpCLp9yqGEXLj33qu",
  "key36": "59nSR5yZci8ibmsa3MuuQLmRzu9zKZA5iC1bgg5KYSpcVyZGXLaBbVLjJCf5Dw1ac7toGej4w11hnZAhZ8To2fF3",
  "key37": "2XUzKY4aAUYfqMoJmuK3XN8Xj3ymMjQpz78B92SvZW6nBwNTmGsErebq9TEBCfEpMskWyGKzxPmPxBRjy5ckZ2og",
  "key38": "3nEDWmve3ra6iVvD12xzd8hs9pxSSiXaSxDrm4sWHRLy3cM4BW7ddw5QyY9aF8jgvjkgNFbKGE5oiMAdXse5P9Wm",
  "key39": "2eHRCbjZtMmtHYTNyhGo37UkoN8eFHAMSqYRzft2F3ai8WpTuZPxpVEHVUAV6aiNL8x6MHBgfhPrGEqFxQULK6Jn",
  "key40": "2B9Xi3BrmHRSF4y7W87bQgrsVQ3arHcnptk912yq8uQvjErHxWsV9m74Zxzp8uPCKcmX6eXPBpQmoPJ73nYFXJB1",
  "key41": "21SrXxzF7earMDCNrvWi734Mv9PVVrC99nQtMKioQS7pt6fQQiJDmcBLCBiwepMKT1tasqLMrC9hyTwQbDxorK81",
  "key42": "4khASszRDGaK7d6TDVwoQJ1h7FeYt5aQXKAGaSZ3jny1FvRCzLBv3YcnbnnmACMrWS36xSBjGvfaN5ASNiHERokE",
  "key43": "4ytou9BVPu7juz948wXVnqCcXwm3xUDt3tEc162ZFhHDBqnCaY2d7LEvnwDqZypBRYA73LBD6JNsB5V73c2g19x9",
  "key44": "2c2YjTruYRpY4gDErUnZ6eU61qbMco35ey4iryM1N87pPFR7jKHedEn3NggY7T99DuYuTYBpgpjXxHR2SdrNrogS",
  "key45": "eCJyvvUB8RPSXgaxtmAKChm4uk9uxY7d1AqJLudPc89yrdoZhtySTW4CdEGB5vF2oJV77wKpgXa4GoM1pKB8DSd",
  "key46": "5Hi6rk3JnokTEH3BFf9ThGoBTyMJmSzES57ZyopfPn8Zdj3troczJqaH8hUiGgSA9R3hTRQhDQtUMbzW7S5qH24t",
  "key47": "5nKMioAdFeFX7m386PRn78YLLGSYU4Po4zF91EZJUAd4jZzFy8A5DnF9PS6wuQp6hFTqtP2xcoKv3syVuRsfRf2K",
  "key48": "51op5wzvbSEFcJkT7Ppywvbv2UGHrw2HWtpBzLqHgfu9o6n7YHtaMeT8HFpxxaxGavGuzHqPcmeMsKZFMkknzWXK"
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
