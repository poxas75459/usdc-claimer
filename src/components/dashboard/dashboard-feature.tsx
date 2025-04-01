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
    "5VtAG2NCjtNvKZt9h8b9HRDR2Z2w1B2XyypRkUxYVuQozgxqKbmMPTJpg3DavCrzgoA6XjKW8djXR782JBjzFneZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roUqjZB38tdxYNfoMwVeDNUNwYagmjQnrkXhwAeY16JzRQNouLwqgzPz5qqNnGn6aLJPqb8qUokhLt9CW2TYSBK",
  "key1": "re6ZvC9WBeLM11ByFitdjmGPf8oD1vZwC341evCEyfZP2xPRqx5gVxv4FiGAX9cXsCCttZZHChWG2CU5SGySkfx",
  "key2": "4ihpmrzyMPzDHiPeTs4o6yrKQUHciGpDmui6EVXBymWFRnPfvzKjmrYe98hTTiYYXEJx9qJqtoobSQL6nLGe1vmX",
  "key3": "2UCSPcponHKvmotofhRQ6oXZnVfefxtrZe3UfU4urgjFbXY9f93JBdoDpkp6mDpZtDViECHrdo4JmKQyafMwDRun",
  "key4": "2zXrqiBXP8JZPq8BaA8hsTGUtDQS1cGE2P1GbHa8nGZbTMqt7fMpkyZp9jZX1rRaQVkXGTpiShMURu78kT9dcK6N",
  "key5": "3rpyLns2ikRrJ5moKiQVvrfzXfcuQbForsVQCrVPi4vLaFcKR7obAMmSs2oaZ3jNvJC7JhGqGEUUiP9uE1Fpg88G",
  "key6": "eygDxF4Uyba4QA7VZitDjsnFdcwuX41zkbpCvvEkEsWUVU9uw8AT8Cs9tqY4QsBHcRh6oBwFwXYtfGqwpTi7t9L",
  "key7": "3zWdx4rdmj3S2qqeBvAjcH38siMttwq6mDDjFTYhh32UWRQSK5Ja6DHRJypZUVbjKoe51Zj1ehKTtmv4YhHQz6uj",
  "key8": "2Lt4pGVcndsDFcmTB8tSTbbeTPDGGh7hCw9mMDrESzbDAv6drtfcZzQaYzubDoSDvX4kMiKoKoGuH32qrunnAFA3",
  "key9": "52GYqHbpiGcqrgFxxnQTHQ9GCuoxyTQFjTvH1PrHLRoJZ5zunKaEQPbtgkkD8qWvGVcxHLru1kzaibQ8XrHwAweJ",
  "key10": "2GkcKJPm1axaCr2TRuYTRqXkv9iH9cjUk9eX6mRQzAoshac51wXueDb4DptL5Z3Mtv6an4CWvbjGMaa6RmvpF4aL",
  "key11": "2RaeD2ThmEtpHNxxjBcPPcSiBtc8WpRW7ACopw8RrKoiAuqtTdHLNTYTNdjwCYLvg2hzF77ezoGab85qu9JGvEyG",
  "key12": "611vz2vtKWcgCVTfgUQa4y58dS7QZthrm4zEETtcMmFt53i67nmom4rQ998YdBJYXsSWAg7dJ11rRYRJ2GzzuLrQ",
  "key13": "mgLs36yhK46SkQVSTGJwQVzwCHqqDAUNXvpvmMZe5AeLLNHhY12XAnNrAdS1DbBXFrdcpP8qDSnYVek27K8br1X",
  "key14": "xUi4yTGJNfzAWgDbYPAs42a6QgD8fHNMHroXZXZ517uiHx7NmH8YZqhtXMRs473S9rGa9u5vyM1ZQhe6uuxiGUa",
  "key15": "yE3vokNniaCwiGMkn9y27YPrq56Hsa1Jj9PvFG1xQmmeGPeFqVuMsCH6vUbDwWMAAMZAnVVcqiuuJJmftuyHHxr",
  "key16": "3Z3HadnG1KWKnkYqmPxfCUCB7YUgqmw4wtWgk2k2berrPKWf7W3boMSD3CBqj8GhZEnQAmYSC1QvoWx7eR9f9QDh",
  "key17": "4Lk4yowbz1wpgoo4qyTQ6P8Th8581kMLQcEuGVp3YwJcTRcLbAt6JLZE4e5fEHdXKepCge1RqDXidLmnGV1WbWZK",
  "key18": "Td5xTGRWm12Sr9tuzXZHJCPhjt4V6RGhW86693K4i7RGWvGNNZBtnNj7pkES5suo3LseHfvRBkdGWrjs72wRhkN",
  "key19": "3DnoJaghqbbyw9qAFQLT71hhhs2wMDTNio1xVQZxenNeoqqDMZfgYXxcCaWAiu65s61gSDb49EDo9gCYhaZbz4Hg",
  "key20": "4awoZKqZVtr5dHPJMiywtV9pp6C4LT4Wgc2QsHrnAhJDVfNyhzJ8kmjxnkvpxqc5c2MYt5cDPhvdGpqScYYFXz6B",
  "key21": "3omgAuJKb1o9BEdFZ2WJDkHYLy69DXFX5iQDoe5yPYyyBpnjozqUHYpGDPZvJ8ZB7xvPCqaYkRaPFUYUL8z4NKTV",
  "key22": "sa8T51Xb1oT61Y71jQwwQRNxh2dxbPyYHy5JUBoWBC151xU8doMuGjpAv6u2EjqNpepnfCXqzEKfj9WatLnVYEr",
  "key23": "4GzC7rZuWfZHkKPe3AN9itadjMfVZzewWsLdXvfT5ocJddWjHYz6v76NX8kgt96iGyRAc2888utq5F6QjXSQ3kDr",
  "key24": "qUQUuhsgyt7BLJeU6R5w7ykqGFAmBXn8NJzQz2JT2fpZK3dWueb5VN81qYkeyqamjyKEexHsNcZsXLzpL8e8p9Z",
  "key25": "4eBmUike4Umv2ZbjKxA32s46oyXGWjw4vWty6FN43AAtXpkXD9dMfr8Q674kJo2GzPvkeYnv2Zexjx28fjFJQt8M",
  "key26": "3t74pGVfWhXQ9J6jaVpxGkaCF8Btxa8yyUYGCfW5gmS2rm9bAxt4rModwMwWraLvFwED4x58SAAHst48LqygWcEW",
  "key27": "2MbFS5YmdUFjtgeAPRxNudpjSsPBuMAsu4GNiHYcBeSpizQvRF6hvWTfb6J4p3NPyUvhLPbJvvpSdyQWMydwjLGN",
  "key28": "2FGYPBFBwmJ2aDPFDMSdAdh2rHkCwM8LktamCfEnB7rvKr5XYJAhdh3362rL7gf7sZMvAeBrU3zuXD1BxMebJxht",
  "key29": "5ryNxxHWe67AE1Hx8Gc4mKCam2wkSysFaq8x16AvCXwp8TzV5fJJUtticYjuX8Apr4LZzDQ2eD81k2zWqkhK66cs",
  "key30": "4eVdF7Jv4LBF1phjLY7upiT46L5Mg6kpY5qaVuee5x6qD6CcNQF9Y6JPtwDwaFBvVNeaSYNQkdiCiiSzJfjSgqEi",
  "key31": "c8cLov8GHoarQ4APYEGNB6xRynU9rGFDq9RBQDddWAS4uALVy7VBKPdpTDv4vgraT5yk417sxVurWiZ8W3Kg7KC",
  "key32": "5ZoQZsdkRRXkjmm8jSoWArrnnmA15ST7j7RXHcap4fLKTKAi5uwokhZCVprJ9NNSsrKjUpWDfyLvGFvP34wE8sVf",
  "key33": "4VFG4PbaX2pygjpre6B9L4VrbYo17FiXtgfR6mprKao74omvAA2R3b9J3TTUvfcw3dxXFDje4P8SJ2CZMXhftH8D",
  "key34": "3GFRKGA7Nb4sYn96eJpGTH5YsSCeYazDBdDgVUVWhiiRLUM5erni2PP12EVQUXUZ7bAWipcLkFMZt4sWRPjZNLUh",
  "key35": "5WbcdCa7UDevCpU4LPGeA3u6782p654W2a1qLeu6q676HB5LG9SD6ktZPKcYtK6FiGuBNzpDtqGqEDUdQRhfC7YR",
  "key36": "g2j4NpnW7yVG9SrWPy41xSMtGLjCgatYybaw6w22bPghAiXjWVuKV5CKTxi5TqjgJNWJFY5QDhemUgySGeZPCtU",
  "key37": "4WeEujLtdnVsA5cfE2UPssKseqWwFFTG2oEkrquwYtWFqDWZrBary2AuYUfyXfUT8bAWT1DrNrotRKyGh1XT3sDB",
  "key38": "3FRXY59VH2e2Az58BEAF83r2rehLkBPp3ebuR9naDttW8CAF15ufZ4jJoer8QaJGrJxuAxZha3Z5D5HSD7pHY3DC",
  "key39": "2E8D25GPtrT4Nj85BMynZWMZ3VPhWMKi1N4914deaQkZFUvrUKkb6oZ9K1EYwP47XSUsuDUWq3ff8XLKjFG6nFFy",
  "key40": "3sRwZTL9pT7Pe1Zamt1pc2ac7fpdmfdRVyzvFndbCUqu2EFqGNEtCHhbkURJjPJ45QdfLwrT5v1E269xUkkRwKze",
  "key41": "TwnrW1zFCLSojY9p6iRDSPuX8u3hP5rhK9TbbapwTqN4RSwtVy59phFUSTot3hn1eeUxMwQMW8bX4a9fu2QgSuu",
  "key42": "4qwK9NYkr8X93VzdJNSWdRrD83qrtnpNUAGMjMPRJDoPxnCN3rzSxezJnskayDJpyvg6JKGGbsXaSYJN7fQdnew",
  "key43": "5UsqTJNtnCW9dzC4E3CvNuDn1mkZm8pCNuPrfKByQQ26RH7AJXZQcAAL7mNG1Qq6qQ4Sp6QUoLbtxjoBzhQ5A9hs",
  "key44": "5ps4DukenGYTb3Dr5V22D5UVDujD66qPM79S1csVWLQ7jXMp92vsYhgV5PuEg6b5r65cFERWqq8zSFsunyiXukVD",
  "key45": "5jpWS2oTzfVH86K3uXtWoHVtzuhd24Y1CkFG9m74KMBwvzyxLbYNqqcUMheehnTfMJuvH7d72JEdQG5LvuAeSMLi",
  "key46": "2dehAp9g3B6Pk9vWPA1jznjvboZKF7Dgs6fHvT7iKcyzKeti9P5hACUqNfj2oXL1d74teVUjaAbJeKEvvwX6dcq1",
  "key47": "4U3MEc7Hk3MNn15Game5QsdRMrn6o341M8qzoPAnmpURh9WqcSkBq2hqZSqJkQkFZ7pDvLyNm9uwcocpEYLJKoFN",
  "key48": "594RYXaXjUBHpKQBiz4zNVVbC7ybxzwDQsERapcMEfBMG6BiFL9H3Yq3AUqhoFAD4nzi2iVJNqjSWkLtT42Skdmu"
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
