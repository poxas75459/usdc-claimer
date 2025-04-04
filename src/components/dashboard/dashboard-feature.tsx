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
    "3LCgcx56CunrFKKUZnbEtrQwoK4VMg6b68RkJqY2z833anSw1mauej3zeFNwi4hN4zrDgkraWwwUUjoQ1myAE8ET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HL7BErWAyPGE2B2RVt7rnpBNk2qh2cGvcVbbGNjcU8CN2pWof4v8SN6tHFQ63ukjRoNXvjjAAvv5TptXBnNJTmG",
  "key1": "5RLGeQhZbqe8zuM2RQAiEn8a5Ue32uD5Movg42hVh4SaQDLr7Gjecb6wYGpt7KquGMKRZbcGNjfzS5vQa8i8VAu3",
  "key2": "5nPejLgvn7VCiMqsRhE8h1jbfktywvRsGojpmrHP7zJgMzjDgavXFsgFeGFk1SLLCoHo8mrM4KsvYpieDTxzxt8y",
  "key3": "QnW6iwm7ys8nivs6hF3w3GufTmg1vAviaXfXfzfy2Ww6qnYU3eLvMxRvwxVorr4qeztoZKwHbeksvjK8vxAeVCf",
  "key4": "4xUwKEhaeZ8DB7428SjTBSwwf2FXoK9vthehSdiQknkXxR7m3zPH9b1t5kCMhXuMbHRZschNzhZXDLxzMxu3a4Ku",
  "key5": "4Lzq95bJaoBVfAbPamU5Ep8yTQiM7UcEjfBcEe4GLGqXN9Qex12MWETR1wF8Sgs6qPUJp6Ppph22MyS1SjrmVnxm",
  "key6": "2GXPUtmDAdVSV3CiAS1XiVqnjxCBCjUwAWF2cPcz2nZce4wDpmWLNCJEXhibZaQWkPc1jhoofcDir3b4f7p58YEg",
  "key7": "572sG3gFRgy29DedxUQXPhJPypYE2vqrUZ6N1vjtZQNUFueZGVkGTFze2iCvgTXDJ2rp84HSMyBeCdYLnZAZ1LZV",
  "key8": "cTGuHdAB3CmpjxaZDqznrgd55CZgnRy8p9CDo5rNZ63uRphW4pk3Pnp8mEhfj1ESC7cYCNULxkFx3myBmUsy3XA",
  "key9": "qDhHCE2nfQjo8UrQNwUV35V65q9J4JucqHr9xPW2neZvhzsLyu5xpgezrnv9A5MCF4SAV45MUYWYELj2wuvfhPo",
  "key10": "58GAJuE8YhK5DuH7dmxbu3Xgi9J9MMHmP6AySWFiT9pZb9D3Cavw7cJMzKcfydFGoa59Y9HZMsnnmb2AMD6dNVsj",
  "key11": "4EHbfacBPiWZYKWtYuSyBb4WiNtzHVC2o1d1zty3rK2pKWQzxmE8Vdy5ewW3FgQusrxrR9eWYpe5smHR8BWS4QMt",
  "key12": "5bR48VDL3RYz1mnRDnU6M9o6nWqwo2xL4R37L9Kzs3N4i9Z6UMSDzhT2BRHdYnY44JZTUmqFLtbccasTdW1RRdaA",
  "key13": "3g9VbxuAgrUoPgWs6LW6P3KxiQPL8PPxL3Vdiij33GfCyn69V5BcC3N9kK8QYdAXJWo7MUjsLmVfAC7KVXAxcazL",
  "key14": "4gaihHyFAP79wnhFzqgdJ3Angz2mszjc44Mb17WsBZaH1W7kJgAKVtm4D4DUzCjNS18DaRKa634yagBeVTNLAPrL",
  "key15": "3WtBmFZnqy3VpiuVbaaP1E499FYfcEYRPHKFszRshCYP5iUP5vSCTR8f1F9bJnbptr5zJakUsAYuBr9MECJqwtQE",
  "key16": "5gA9pui9a57cbfC27WzJwhZoKuuSZF82X1aAsp8cZxZDqHLsm9qZdzyLj7yv63tbqeYMpAZZYM4CWTd6Q38yDMG8",
  "key17": "2vZ5gvCiTpsa6YiDbkxcerXuRHxTbmj5vZw3ao8uMSHMbNDidsL2qaHzhqxbVokznBXyssAQSRCMQmzkW4nCAYYU",
  "key18": "5TNTC7PFTKYbGDhK7LtXH5v15q8LmQJyCHY2CP32XnWcNmYPUFxciq2A1xbfQorBqtUeiLA1shNXHjEC5pF9oVLR",
  "key19": "2rQVxVZNgtDUVp2J1q4HMZueiFcUNGkQDEVvuZb7MZ9HqWBMb7zG2DpYNFYuPWs4bpbSYcEYrEEiQrK6QTviqQmy",
  "key20": "66evMDLpRYK74zoZKyBqzG72PUjA1MJf48UJXuKByEzPLpoyVfqzUkgMEyczhYCjZLxCggLRy3rfiiB9sqnn3Zjb",
  "key21": "4tZBNERxtcjyQx4uHQeDZHpXK859VBf7xB3dQvoYR2w1nDNywUTAPUK2gi15ZUCqiQorZ4HP41DFu99FdtLnP6D3",
  "key22": "3uGEZY6WgS7WC3fT8vjijedLWiWARdwGo2swgD67t7RtDEqnVmBFDWmNR6EmoPanx6Jwr6tWU9eZ1GKTq3iYK6xE",
  "key23": "5yjNxTk1aCaEcm3xWEYtS6ase8Wapwg4976XucqkYANkYzjLmizGet75AVy9JBNeTdqUsuryunnrdt8Jo3ut4FVi",
  "key24": "213bHAPaTQoSY2cK8XXYAbD8vv7XSq2y1egL4Ve9MGN8dVVjivinRz9Ev3dgHx2YWsdT8ABwWoUtxGNCTYhKub2i",
  "key25": "4RoTeULAspJixwVhZhPF9YWyFv12i76VfK7PGN7hAWa6C4V9vMg2SYKWCk3k3H2YuGdWLtpXBUFm2yAvKJf6B2Vi",
  "key26": "5E4zwmi9ry5rhH6ZsbhG2yt8knSUDQDv9oKU6oskpBMVvKUFfhQGRcaeTuctd74z8FpRvQ3UShHrDgKyEtmqcUhK",
  "key27": "mCxyto3zEdoozSSye6QayMf4DzZizRHeoCCszc98UKHUvqi6n6dzWgu66TKd2VVkfKDys7WJTSeLLts21qG2nFh",
  "key28": "66vg8tHKQ1L1EqtY8e36B9ESMsWCse9yKnSxChiUqCSEXcQZoVwBzWzSrcNUjmQG6FGbERD1NTLtba6LmXGpUShp",
  "key29": "4ZGveBkQaxpdehaQvfsATza8WuphokVDjE7GtQMyVCYoTfQkX9Cnv1bzwMYLXEyXKFPAwibStg79AN5L5kiNX8Ur",
  "key30": "4tpr3UWuwxZp2rGC9Q8hfBJAQZRt2kdBxKZeFhZTRrSqiXb7PoFfiFHBZCMH2oaDBYrSkCaKEKedxgfzzBpF21PN",
  "key31": "4P2W9XshCjgf2VKK8S7usS5fGNW5soJNRkHnUHQwrCsZAMfbFmWP7CcKf8QSmHeUkuD4igHvdFWucJ6CsuyxX8cR",
  "key32": "tgd1NMZspcNPhhZbRfuQFtbWV38QtdpHQ6yXt1ZmVTfDxH2yHR37YBixWb5M5aBQLAPsF3v5hfgboAr3GPkHNfF",
  "key33": "jcgPshkMtEuB7RZqT2yvfUgXMLJVA6b3PXgpYqD8smjLccrKUCsTNPcRH7A942xeWfmNoQi2n1jsDASiw4TcvoA",
  "key34": "5nsi3jUAztStJRhqEnJRi1bmxozeNujPPhgARey5oSECW9TQJrZe4GqHr1Bj2d68b9mPy4uDmMDCkHk1mrstxBc4",
  "key35": "PFGBDdjapokTnwivQ6sbq8tAtiDNwd38aXdFgwcpDc6D8J31SvRzEgWqbRsxsZeEA9W3JxLoRRE9HM4wGaVv4Tj",
  "key36": "2qT23XykKv8N3L17vqK1vGCSFQLpAUYpexV8UeAu28VjAangbymwxiMNqTPifUn57f3HFd6rWS5kYPt9a7Y4qxpk",
  "key37": "AmjitN4QE6Lfzu6xMwm7EJwFEiBjjGi4RFEPE7dd2nnEnf5msxrDHoBkNg6X5fWhKkTpctYfMwjWSuT5VozrPXg",
  "key38": "24Nan5yB4sUF3iBuh6dQYLArNBqY4B3ANTkLPFvY5NTD1x6VmxLVKw58K7Rztzo8Y8SnL9FX7yNsQfput2aPfUfD",
  "key39": "4cmS9A9YZ4jZPcX2A27VzRunvgkXV5sB2CiokkiLsUdjxkoGpo3LmmJMaQYU71hWkKSBD1VToSsDCwXq4BcZeMZ3",
  "key40": "4kFTbFSZkRSCJandN9eU4cApkFiZtvYc1Gw8x2UNPbhqTUedfg1iPC2icvWqtkeC1L4yVmhgvV3dY5GxVQfgLd29",
  "key41": "5g4TTkxMx6ciiNCaJWmuT1Mpath6qSGfyTxS6VaUBHUndbnxFxhnYnzvAxrkmtLyhCkzQVsNjmsgNpxMmmqX3PQE",
  "key42": "3sFKVWrExWAu2rzK1VMzyEJT5UdfPeeSYR9kmeqRdTcHALUtr1VBXRXeTAzUSmMSQXPLjBroTQz3cJLkFJZTUBVn",
  "key43": "35ndudx73y9HmZ8dh8omkhRTmnkpNHgtgP2fAWThz8VY4N4ojZJJnrxxYf5aESsDujioYrp8UBxjiZq3KxjZn9RF",
  "key44": "2KPeZ8T9bL4FdVkHRuutxduGLCYLL3TiGnRPDh2xiZY4orjovZNdQ2umwmZS2h6xWUMRFvmtv7mWaHfq1beJUepb",
  "key45": "5N1qARwsDwKvsADfVCuKp4GLdQBq2DtkbpZcK2cHLRk9fq1SkbXQcsDfuS4g1cfW2YHkhVSiB7yPxRVojfwEZf7X",
  "key46": "3TvHo3aYPuccxzwpxD7oopLQTfFtz9o6fK5MnU3rbvPg3YM98AjSh3TxM5AK1sc52KfrxxNvKVzCsTPHH1N4p73R",
  "key47": "iVUAhLdfGboy3yYobGHMdkEWDx8SLSShZTujeF5FZPDLa8TsihN4h8G4do6LFv1WJrZ9i2nPDPurjJM7EMeMtFk"
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
