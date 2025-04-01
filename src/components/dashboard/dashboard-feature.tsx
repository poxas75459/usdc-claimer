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
    "5DvKvpCtJLAm9joHaRQjNdXySRDg4eAJycikMjbV4hxm7iwLLkETg9gzwDqWKy8STq5ELDC3KFvzs7g29YQBK7q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scu8eaLjm8tQZ9hnuT5wt6FR44v63wURecB8AzqbiGtmNXWGLSg6y1xWYjcxv9jTLpDxZvXDKXfdPhMvZ9m1JXv",
  "key1": "4SGbhQ4wdfUbBexmZy6Sh4ST9SArG1KgeYHnz3kfAp2KhFH2GYTaoqirTCCiCWuAMyRvZby8FSE4vvc5SDDFmsCj",
  "key2": "vzBNLWwJWzeUwmVknBUnA5DESit8ox7pFqEDmFahTbHGoCFpVjm5eNBy8HLNAt1HCGzwrfPnickGAMCJMyedDtx",
  "key3": "5Tj8AMsGrKrpQ8Pyf1yApLB5RQSUDr2ZAxxAQZJbKnT3UWrPxfK5iryRnehWAWEtqgHLLutmbjPsAsiA8uxuuAuu",
  "key4": "5zc5PVZvUshzZyqNpBXZLiheLns2hrtr1Cr8sb7m8fkFPvba8Cb3BEGPyxwjcnvzdxa2s92CPdw8osTh7wmTfHJn",
  "key5": "3wTTUDYYkcEuTfH48YBmWjR7wizZjhKVgxeueEZL686zPBNmmquZqEEDpowZNLLCVcYXwrX4XJLuHZS2KYx4oP53",
  "key6": "21fYiKUBcVKRtuEtgpLm9dCZ3DyqSkFtVD5Lhk3KUG7ngpaNNLTji3tAqMm7PeWZjZNzTzUd7mAtAAfXaQUNVULw",
  "key7": "4BTai53oHEwCTTWzM4S7FzcqpE1i1mDuiG9ru39ZD8W8qXMZdRgxob4TzV1HLfYSCoyDKSiFHwjrsGJ3uoTCW3wD",
  "key8": "2cSRucfjbfzbBKtT9ZDWbnq2sW7mnRqsAoyAKdRMNKGXhs5Wgcrv1YW6TD6bk5tFCEY33eEhLu8dwAcUubniPdHX",
  "key9": "373pPnYGy4D6X4P8GgaFCYDbNg6VZSiAxoULKc6aMupimMcweoRfdvZapvSwp88kxuM6Xz5WNTJNbd1jf8SLW9Vt",
  "key10": "5b9mJAWWg7Dzofxugrizx24TjTVyvqJRaWVPwswP3tMYxuazoJX7k3KiSSszhzgYnDwqDdKJL4GuzrvW5tPatrEp",
  "key11": "48CJ8uwL1heMnPbYDsbyPSFurPoP2m7LxBRjLvShBQsNsN51uNmrnBwXEznwypxgXNCDc8AqiNCBmPDEUu8kP8Z",
  "key12": "2gtKujLAN6y6FfYCHKzJNSvD6MRDFtNXgrdSgZeaTDeWosbSRrCP6vc8dfQVuK2DxeEfU1dxV72unXmmym5LSNpx",
  "key13": "4j7mqJdUapwJ3GRZ7N3uP4oKVMWJAKrdk36joXdiFniHwASesYonQZkjTYfZ1C7LxaT7vEAkTnhfFYw3PRVjhyQn",
  "key14": "ujb2rbYJ8Q7JLPeaeeKoVRL6avAbqhqBjKg2R48ZEUaJSaTthvXQwbme6kes5qLMkdhg1ESUZ9TM1iqYb5oMZFS",
  "key15": "2S4cLChZjJjUvXHBcfkd7ZuEyhpFrBxUBLWi9t4W9FzjMjMgfoHdwDxAqWJ1VERdEatYYUGWz3L92TNyu91gwHaP",
  "key16": "3kcrAWdJvfHwXYb2T2E2TYc6meBLCPymHWTRuHiVdH7CxuTDVmSVXtTbWz5aSYW8L5AnNJ9i6a7MYhvBgKXWBnww",
  "key17": "5Rb1uHxx4GFmeRY8MGRzdYJP96Db47p6dYquiK2hpK66wmBpZmBRyY6yuxXyYRPrGeaxd8M6HJCE6ftzs74phKGZ",
  "key18": "4mNKJjF5BQ8NrtKtx4qvKBeyBr7tfkvVMBN1LL5yLWVphWSp3yquttrbzpJ3bVHJBXmtRFsNW1rUQmHFFjBBN53b",
  "key19": "5Me9gnfU5JmUiXKt2MMAtbeM4jTF6Z98jU4Q9iq39KP2frMPH9tVHSLKhEcRZHWGyp6XNhp7dcZQonhuEtySYoBd",
  "key20": "8utpZBdTCfxTGceBu1qvB4hg31EJVryVE314W5pPhvMP3BXc5tTvXjNcSWJPAzjgY8QUvN8fQ5fnrscshsDPN62",
  "key21": "46aaMdRxgPi1VHjWBhjT7G45ncSmxpuYYAJv4QkkaS7XMddXxDwcEKZ69bmGXLuFTnh68PeqoxDzJSpocHSqShYC",
  "key22": "22YoQn8L8hhibB4FvtbXrpDGQWydihX2GTh4B9aadu3jwdKiPrNvAwepMMZLcRrJ6eyCdearQ9gUze5FHBpYdbn1",
  "key23": "3aCHZp6zUk89ncxfX5GvRLg5dwtLjSwZ1bQCWMVPbQAJ8cKRm3aqmGsvR7dwty2auNbDPT7pPJgdYUAgb8z59eGV",
  "key24": "5fiYoE5yELxp7LtxJzvtA15HFDoRVrFYRQ4eCg2xJjy71wFejgSKVii9F4bSgXKAYy3DgYk6Uq1qsKNNHEcve4jQ",
  "key25": "5t5Tmd7gPqdM5xcAAHUveXaxbfW1akYZ7k8GUHA7R96EeEE7v11UJiXVVRGEwYyBo6xUjZkE61g5WxZQH7Wj3jH2",
  "key26": "5MboeAoTSxGovaQcK88QLcv9RsprrqWbBMoPUsxBUSXrzhgw1Z4P4JREdNmat5cqydDc8iFaLU4QwU9Ezs74LcFi",
  "key27": "4tJrGfNrnuVP6DXbjnE92Q5Mk4jJgBRkL9AZDvNSUEsoJqrxZNUUaQteWkEgSpEChpAR1VYpjrJ3aGZ35MmGLGKc",
  "key28": "knNzgJzXQmCey1M6cTsJcqvBdFX9wVZv7SYKUTWPYzpTQatUtZd2hFD213xub4FqfjrtXqJNC77BNeSchT61qdb",
  "key29": "K9iHvGL5x3iiEy66gjQYkjzN14SDie8PiPkjWJCCw7VqKqcfJrTdoRx9oB8MfYVfoaBmrbLffTSgb6FCc4yN1ix",
  "key30": "45KcWkn5KaHMd4C2g8LGW5wjDSF5hnmcyyH7B3DDXMmgiAWg8yM4TWQLXXKaDWUr6TcmTjQSAmTPWStFyJnSHdyj",
  "key31": "26S5dk7AWiFRDa99dnttt7zk1m63XJgNcMigTLemvhfdDhG7EWZ4FJdPLRaKgnr8MJdZmZiMjiYhkk6ANdBsLrJJ",
  "key32": "3U9T8fkpdReiooRAZU7LSTURrTbtdYuQUGRroxYUSXK5RPyWoby5v8xNpXBBgEz2KYQGmGR92qhizFzA1GwguXwp",
  "key33": "49HeCC2yHwKCsTeH16zbZPcPXquUqB2AZrBp4TNPbvVtTxNCqpqDm871uy722ydPNYya8K4GrCdsCaXbGtXxVsSk",
  "key34": "2q9hbwRTm67cyL57x2uoibZkDobHq7aVhWyw7b1fS1rjdEfRmNyoY6i7F4BrbVPZbSZTJuTEGCDthNFGYdfnuXn8",
  "key35": "2VzDjrULDiC787pWi86qvo23GfySCJ8aEKL1P5jNaB2XeYEA7MtiyZyVVc245MUmogJJpGQQTcoeEpXnpQfoXHDb",
  "key36": "2U848MGdoMb8YvHirXpFhcPf416Q6YUVAKa7e9AwfUYUhbncyuFsEwYYMNhRT9tEpAkch22vsnxV3JbTE8TPfrXV",
  "key37": "5mmv6vPhAStPRKoFswYthMXsDBZWvF2ZKfZE4avhJN6C72Em9F7D6NqsnYBzonMNLsVMAfFsd7TXjpp85kqVZocu",
  "key38": "2zbWHHK5UxYGuWtAhiCPu6BCMdKKrwmvQbugNNMcRXfT8kjAnvK2ut8PvzFDXZZA1Eeq8iqgAVQEMU3qcCuJFT1T",
  "key39": "2UsgCFwisjQGxTRdvtuiGsjJYyGCEw1ucXXagtFoEtgY7XfDcLu7Lz3Zb16RXEKHQTQnJDKJuVMW6T9vJrS9e5Nd"
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
