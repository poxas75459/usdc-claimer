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
    "4FFDFzNL7jiPz8NX3btHf3Y8zu4r2nDLRCSGKqxQaHcKSvUYuVPFZn6G8ScL1ofjVQHpzx3xCTnYqAYvnBgi1Ep2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTDEBLZzSvjg7BYCJi4K4Yurgr9XKGkstosmpxgGMZEG7yHEupTnwyCixrj42EVtALU7uPnSGHC4i7jEcfPrx8h",
  "key1": "3CbpexCB2ieTzMbpeffx865Kno4SpAhQfgEANYyLkDy8tGcAZ8fPN28EzaTayzXcpxjqeLYum8FPM2bLzzfnrTDR",
  "key2": "3rnzushsa3Qya52DrasCdiCji5UzyN1fLAchgHmRhffar7eePVJHAsTExJVpwhkTnKkfwXfd4LuqjiKTsWEQWH2P",
  "key3": "3WYPBwfoJSpyKTdFmhqewhJk59ykui65Ayu8g7FPWhTazD48Dfo5wPyo4kHZan6agpc99Jtgm3BaornDnfdJXULr",
  "key4": "256XrrEmcpnVWWej2vsFykLKDN5rbdWfQ5LH72wDVpey12Aw9rNic3pMpXFcsaGHm8cGF1YdvhPtMqLaVKY763Zk",
  "key5": "KJe8AvPiPrk2ifziekzFFa7mpbks9agZF9H8pmAJsqRs7DBSc2XR8XKZWpzfYa2LhXoR31MFPVkztDHnp3GszX4",
  "key6": "w3R1FDXcubgnLuisTkraoGNkmRPQPWwx2fc2puyGRCzYKTymwKUkZnWXkHd1SABGAxvBvoFZUdSr37kLmRFnzAb",
  "key7": "nD7aqLTMcQnDyRGa9QnfHcV1Yyq7uT7oMRX7mr48ZW5gxvC8dNihjkWr4UvugP3HE96cBJMtAvKHwYUDxdc7jvi",
  "key8": "5oeaqLjrwLvht6FVS7xMubnap7jybxSQ3U3F43As6txgc44xM7ZwVPU8ajRQGnhBiCf2d251pnVi8PkZGNBFBrqL",
  "key9": "3wBeCDcWEnMPQAF54hsxVbJ8AaiNR4Gc2BYfD8wHuUkD893YaJyCgbyMCV7AiSpiSihXnbAt9qqXGDmCyVL4i7wR",
  "key10": "2RZv5tKx76WhPaZuwMooXuS2ZCNPyr8ibfdY2bW4DktQsABXvGAeLxknTrLTMezXfDaqyG3Bh72Q9GUniQkSomWd",
  "key11": "8Mgfs5dDHTThyjCHFuinH3vpmXa1U1RSRNqDU3WNEi5R8CkEYHekZWfh5b89SmmibPa1KyW2R9A54axq1RLRsRJ",
  "key12": "AXpTAEKW8BWiDSHCennRWK4nMFsCacTw4TLS44GtmM6wHULrrfk7SZdEzyEGqhip7FcemAWBoxMvLuiS7Xahasy",
  "key13": "2SoUTwRa6kiVn8zDGKM8rkgnfE8FwoBydxtiEM8VQQS3ZuBmwt3ktjMeUEPFFvNZmJodz2c9bKCCzUmq3si8AQuP",
  "key14": "fEKhiWGvevhc7zK25MsCtbJoAtnWq9jHn1srYeYn6ygaw8FnWF5hs4WnUMhZ367CqkAkkAxFQtjtF7EyvQM2C4a",
  "key15": "4MRZahZookH7XNcP2pz9AJPV9LKuLw9E2kaQNB9YTD4MFmp6S2MTYvhiXLGuqtRv8EmQvA2tDtLoC2LmQjunMLpN",
  "key16": "52xqcrZ1Z7mQ1W5XWCYmXvmxpb7tuyQhUJwq4ih1NtE3YdgbzedueGGVfAQDoxaXxtpc3azVWMFkL8FoMavkW1zq",
  "key17": "2sHfhB53qzJhJf5Z6hUCrXMLNuwuwv2CeUR7Ct8v78tebAFpauVajVttUjE8VuGg9K6WGJ3pdodFwGcV3RXKrRna",
  "key18": "2LNGG7357FeWGScy9eCXnk3vvWb9KQh9KiKEEZGsboskta879BnQWuLXEVCUfSLqi4KnHnVp4rf9R7AKNDfNuwKc",
  "key19": "2SiRutg57cSGVV6uJrRzudRu7Zgzhxywt99BAzXSt13A72dESZ7Br2QcTE8pEqt8cdQ8bECRNRYkQWNKDR2tsgn4",
  "key20": "62pPCtGGN7FuTw9WLyHWfjCFFK3fX6cgNtaqvUHQvrE8EuNuvJZuSBSqWm2DcqT1GT1cigM3YFPYtKNgfZdUfdkG",
  "key21": "3cJFbuFCGGT2gNcqbaz2kKXbeiZpW1nG8si1Nr5vaBHQydqjdN4ShiReZR3uGAvCCwmK4sgwgPZ2ZfkUHYALqqBb",
  "key22": "536PFJkupNJL86E22owThUue9GkxkUKpVUzMsT134kxs88i1gWvmAuhYAGsCRFhkMDfzyEWAiztQpYW7kZm8XLoV",
  "key23": "2BMaEYuugZsEsa6hUkdAeJvyQAqugd7E6q7tsyKdZaVaBwwRzYThJUstkc5bANKAUZdkPfeZuFq1F9GdnZjXjSgx",
  "key24": "2XrmrFZ8WWWyiykiUvMY9AfGxY8SzHWbGcKgSL2CzMn824Yc1AT9cBxQKGwQwK8LhWLf69L2ySNueRF8yqMK444a",
  "key25": "3BjCXYii3CssuEhVPrLYYMRMUuTSo19mzMrA91i2gVusCNa8DmJr6WitAaQZzBh36fqo1Yoxv5qmTQeYupervSDS",
  "key26": "2aKLMHYTYMyahw2QTRqengN6bc4fGNpgc7nd6WFYLdN7wQExMPpK3MDKtint6em4pyCp4pWShCrWfvAjLoVTdyFL",
  "key27": "3gE8seWQJEwBhfy7Sup8RNqedBzhw75FKHDec2fE6qfN66DQzQ8g9RVDZvKXgoEWFSgQc1bPxkkez4XnVB5W8Xxn",
  "key28": "3kPVSUCYvTUdDGVDujVRX1DkJ1mw5s8q9pnTNX1NKbnZKiBxws7ZUVm8u9qg2nU2v9AygQ9Pgr8akbssmB9JuTaX",
  "key29": "5UxDVV27Mc7Gewt7bafPUdq5dspMFmD3Dt9dcuFCY8tX9E5CEXS2y6eWgFy8orgycZG7d5VvmP3aB4vUreSNgnjV",
  "key30": "iWyLRPXq54o1c8WCLYfrQkZ9gK7J2beNgUEdDjA2BLg46Yv25Eea1Z6ftZyAPVvmhHPGhaZcmLzq13av5hNfyNu",
  "key31": "5MPCeTSRNksEmtUioStgrfw5Wek5KZkHR3QxxBbcudSb8x2n8DJjp4Po44e2c75p3QexDPKd89DuZUrDESMeNqVX",
  "key32": "roWzscbYqQFxLnWeQZgZ3ZnpJQgyisJDBkCmDq3yBzMnYijGtcXKaTLR1toVi7g7DRqQMzjTSVjULfoyPfnnsD6",
  "key33": "STxHBP331wmFKzvJpwAnZjoDwM5JASzksmW4xP9dHyzEjHkNpxAg1yjySrQLreoszb765RYhKDUeWm7xjgZ1vcU",
  "key34": "3Ueth37xo688eXLcZuVBYYwV1Pj44pv3HzddU7XS7vsbvvXxTfFrik3wpvCaGpnW3Y4RExJDG78Lqc8pf6fD3MW6",
  "key35": "2p3mfpvG1nfyQpLtQxfYZTaWXVvrk1B4ioSwWktczkWjMiVKgmWwzjz2tpkiPMJeEEqBDKNc4jLvANRD2rn6CHH1",
  "key36": "4kQGsRFqoEoY8qFUdh3poseWUGBYvesTEhvd1PwFVPDPYYRkBmChebwnkFfJXvZXSsdgeLJPigYbxQSVVNvAqfGC",
  "key37": "5qMKfGMZh2a4Ynw3ddeBcQRe1gmVGhWiytCw1GuTfWN6rC5Ko97qwuYXXQpajR9fgAwXGSs5aYmqPxCjks1CUU7m",
  "key38": "3myRg2ER36qr1zkDADHnvvbbp5jmV4DvE53dxEQwfdr4WgGyXLNaEW6vhgugyd1LycE8mN3WZhkpEa27h8zQA1o9",
  "key39": "5VeTBSMyNE2FhnAivKp7NvzA7qtJaikYgEhRLV6YFVCpnRxX2hKr81DbTsvrW4DdkNTHNuRzRLEmmphF9mDk6i5a",
  "key40": "5XWe35nyqTNAWfTmHJKCajPbNXv4BsAGT4BpvgbvVVphKCTjbEyYTvt7extXcgiJCrEenFoExSZtcKxm9mo9Crca"
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
