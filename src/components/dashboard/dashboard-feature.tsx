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
    "59wcbfJf7kPhjn7nN8r9vzwSyxsgM6GYH4waNbV7CzMuE9WFYTS4QT7MvMJuFPBCw4SwaXam9yqPPXKjVn5Kw6Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYjDRjEK7dQeMPKVMTrxjFm7xzGeyfiojytTAeWg86Gt9jo8mUtBK6HyfVcuRXqBQCLcqz5japw7XCZ18iNk9Dj",
  "key1": "3RrmSWvYTqYQCwtiWAWTwNs8aZCNXjgMWwNRk2BgaBKyNwZvToeAY4oV9KUzRqH1A8zwsCTdGjXfHEvgQT998SBv",
  "key2": "53C1fJpCK8FVHFcXS54LUNTr8ziApBMGpM1yfjta5S6mzRAV7w3BhNoS5ZZ5QBmqVNa4tWBfMZ19SEdPVrDPvLpi",
  "key3": "aUsqBUMbdvhdh7byyajjypSjz2P553iwRJREoMHcmNinJ9Vmmvdbes8niVWPm2hVR2JsNLKg7uZ2FdJRgDVfQiV",
  "key4": "61GaUPC39CcC83NWoyJDcHLKKr9naugeamE56UACvF5jebYhqFQi4CsCaXiykNeKPtQEGf8mPEAphBCYK6GEt8uf",
  "key5": "5zXumsX6mVoC7pb8o8DgU8UNm3FuHUEb2K2NWgm33QhdAdSpexZXazzshssRvbZoQ25Xk6HpX8ao5QyussjjVKNn",
  "key6": "2NnYrbj34bKCTc8g2j6hhMuFyhpRj5rHwiPxFUGiFeqicTUujFSmP1CLukFQhgQubSntGdLshbBwRbkAtSTMgcvC",
  "key7": "4UBZkvdxtQ2VdLgnCi2JUdvbf4nVjcAviDCWyCfEtdGbAhaEtyHNw3s6av1mB48w1sZgY8nC6zWMFJtAWJwXpZQQ",
  "key8": "27H6Qo5WUsTowfrkGvrdaURuy2xPxtPsHndgXPiKGq5iSzh6pyhqWVvsBQXjzwHMYQumohKYg53gEoqoKtsRhCVR",
  "key9": "3ij1pzKqTM9CGXSSYSLCaWeDHvETs3zKP3bDTdHkRd2UiUg1fCJFMfpE3SVNkXAyj1G6VBKitQYrdNmuA5ZihJJY",
  "key10": "4izVVG4NKDrBjd53m7vBNLqNoUibayGQa3QhrCwG2bhsGeMCJGmGz77ZP428dAMgwNzC7ND4x9vVoodmae6Hp7dr",
  "key11": "3odtWye2vGq5GN6jTTvXPG4VrhpQH43KVpxFRRkLersASwYaNrotW2RSYFZstn8u2r2D2BbSwCEEQnnHWRzsQ6py",
  "key12": "5QPf8ac6eLLfNz7rnhSU6pDCvtddDVLeckSskTGzSeUQ9LPcM3zwc6HC41U3h1kYt72CTa7zc4Wdp1edZ3oGAiZS",
  "key13": "5oGeGPeNtdHfbiaVqFzT64RQMnBwoi7mo9nbStN9gVMYWNc7yP44HUrQWwgf5U976fN42mWUqnABjjuttmmSfsza",
  "key14": "5whqBZjhwR1rRsYnYBwJBo84w6V9ACQj9EigfJLTobYVKdESaTqod3pgvvzKXsQxZWL6SYREfwboZCXrUDTgqDiF",
  "key15": "4MqWXjm9qyAeapym4vEwDHtZGXMeth14TxFb6gwKnEtEe8NhSAMV8zSw72Haegy5SPPVM7rYQ1XiZQEuwoEc5sdL",
  "key16": "3DFE8ebH82pCgRA6tHL2SZ1dP1mwVDLRYREmZeX2WAaFrbxrRQARLB2SZPzqqhPVFjqf4FBz9SmFdmWmVrpFon4Z",
  "key17": "63kphxqyQhyMgtsjT61PoeMTh5Tp8d2vMFVKvc8nAgEpf4EWV68Uafj4MTHRLeWL5dFUFuSbyYNSxXQFjdgAtBeE",
  "key18": "21kZsrx7BtFwrnfQGSNhJmSNR7y3Sd9V1pVohHoUg7utCmHtB23SA2y8Pqo1gPVioD8mp9ip6JmAtwnvJ5uzXRnE",
  "key19": "3h4xP9MdmdfnFBGH5peFfM1kvWYHbTLrUMJgZNfPPTtZ9KA3bLaPzdmS3JHLRyy7DSJX8rSpntmH8WmwshTfxYvH",
  "key20": "21YjG1RB5AAFW9B1LUEXt9u2eMJyh4hv1VxxzqbbMnyuCidhAuDT6EV76DU3aJctJMqq2rGvJi99DZbLHtd6kwmk",
  "key21": "3RTwY3fFCwqGkjKFZDSBDZFgyDKvXw5GkQ8a7zVGQBu82zXjVuS2YYW12cMBU6u2bfSUqv33bf6zisQCAdip61mt",
  "key22": "8WnsqdbqqdJ9We4Fh2TaDSiZ65ftuAEaMoF2QwJx4mkEv2DwrcVQtbyA87npA88ctbtUC5QWpVG1jBm1kTXFWfJ",
  "key23": "5iU2WjwrYHB3uPC2yp9GFTLijhJ56wQS6J8QeCgJboLwuwJsDAow4iZManAYCnW5wHSFebSBnNpSuvrTasNFUMEp",
  "key24": "3U6axgs5R28LMZyxo5Rsw1Fmy8y53TmunMyAYR7vzs9qrYGUsQ7E3H9Xnbgiafs2uN7fQJiTYvoCLxLtJTuPj5Ph",
  "key25": "2eDucj6ed9Nop6UXknw9NL8qgHkLe1oaLGJf9AvsKShUSxNTBRYHUzUQEcKxWWCxbirYazqKptST8NGkBJNEyHAA",
  "key26": "3D6GVYNjX1YWBbh1K8bKVAaNLSJb9zciYT6nkAnm2aMaRzr1qFDncGVfevNnSkjwLZGD3rUVLiyqRb9shHSQVnQv",
  "key27": "2MeA5XgpR8ZyeYpunJQY8N7aG5p9iXGpsLRMCeJJgjKdYXZSgqJs71ZY7TXMmLE2ZgebhMTL6ki5vP64HQXuQrRt",
  "key28": "22naJMsXeEh8egM3zgwYFE1HTWDVbrBaEJFuPp7U9C3AQWyZgDqgbFyUi4MybhwnHKVuwa7uDfAoU6oXC3CALoXK",
  "key29": "2bxM51Ht3xQrnbbgvZZkmG1FkCzSjKyjST9j92aVqzFPqcHSPLwhRd9RY7PA3RprszjYGRVdjwt8kbCisobtXAhc",
  "key30": "36SNaACsWskwa5FQCXd8zGNu6bvt9rEwJPXcb8f7T4kiyRGffbP96UDz3nNYFu3hEKfPnBJGFEAfMJJF9TGfEXnA",
  "key31": "2JvkwMNES8217jBeqSj3nhcAxJTCVbhikJMRwjdQ2Exb8UoUAGkPxxeyp8JdLUoCUKdCjantkR64Qo8P5BP7rQ78",
  "key32": "3ve7UKRp8jCp2yyYoRhgu1tiNNvSqLMFdhGbJj2zwhr6nCTpETYYoZyRhMyCbXKo7AioB1HRAaKxYr661oiyycwf",
  "key33": "5WFg34DaU7spesWGjNcMCyesY1UQ5wQFUZnq5NNksqAui7xvKJJPihhBZG1F7hM8ZrBoHRg67ZVho1cDyXESGNhu",
  "key34": "3r6yCsQZp8jPgnEkdjHg8BMYowD9xmpXvebykUstRLUP5PoPLYBZz6qArdnx4Vx7Tmg61oDVEWf9yXeJjQgnXNUh",
  "key35": "4Rohp9dzcjZAB2PJtvNZuhYkLKHSbif2A1DcaRbHuDwWyg82um5yh6fWc8J4U4DkNDGVkYRTNn8k2yeJD2L7PfN5",
  "key36": "4TcA3C6QnFHfSBeqwzas7G34HVwiAtFXU3Crw52gRnUCBow4929yD8hzAhxkJgg8B1zyV1r5FzbsKek8rhmyTgJ8",
  "key37": "3WwJF1bQxF8YRDz6TFpiMoCSzQR1UFAUvoHk5ci9LNqEaX7ZBKoDbZKXkZNvXEQL6QjuwhBZoSngYhVAyd5gww5G",
  "key38": "2aPfTmMs2G4RZgwpxaqgAXz8X5r9DgMqUjRWRai9cyHU3bo6dW84BiwAoEh4p1UQgGFBKvhGaH9zuBf1MYWAmDpJ",
  "key39": "2U8PPFxZJMbAKAQvBL7t9bR3aPJhcgmm5pLKQowv9Kn9oFF8F2C23DSxdKT7UiZkFEVn54qkketmGzcLLMQaRh3R"
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
