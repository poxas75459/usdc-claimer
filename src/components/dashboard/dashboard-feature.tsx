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
    "4qLhNFV5NcfBKnLwPCtCeJiio9vqpswhbpznZibitNTRXSK8WykdmzwWHZxBt36otJRHjDgCbkGRSDfrq8FLmM1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBSM7YbcuMHo3vnaQbYdeauZqDtbNMojSMY98JqBmPkXM2QPaR8ii25HW55xCtgB7oH7j9jef45yuYDWWhJvzGR",
  "key1": "3vStddcqjzFajtvSEQn2uTzwyUM1q6iD91aRq3Kw7twBVEZHg4D5dL9uSZD8vQPE3fuNqkDBVdWX8nk8TbzCHyHy",
  "key2": "4fN1vzEBNdLCwHEAHo7GAB6CYowkftVP7hiHMiEu4uVh5hSrCb3xC74YgCWzdt7Y6L7zVdMSSUSPPhNBfTkqcNHF",
  "key3": "3nQr4D7Mfq5MZRJ5uaxzXW1h7NyCBeJjMAvBeUea7XFG4tvzoD3JHnkoy2Raj7QtE3fqAtNaCfFEX6imFHUjvMTV",
  "key4": "5BrWcKRWTNpnLc4oiMh4HD5pEWb4ssgn3KAwF94AoRhi2ikBcWv7M2HMvrDXNZAFK1zwYytifMtXg8Vghjeq7dSt",
  "key5": "4rZuyNfeWz7q78AjCekL1e9aNJd4DPrxbUWN6FjeUpRAaptXri25czXuYJPmVCwo3ds2CMYWbr7Fm3xtHdGcyZfK",
  "key6": "3ZPhGB81RDmVctyFrT6tgo6oJguZKH2RobzMVQWWZPXak1LKb4yFHiTwPhZiy5LiidQ1PM9ryHtAopWREUTvnc2b",
  "key7": "4hgc6xtmF1w2rfrT97KkTsq1LbotzTVNgYBbqrtp9FkVf5DnBY6HLEF2YqmjXHNETp855g1HtkqbzCneWBrMFc2t",
  "key8": "5LoVa6aPUWDbWjxzUVQPPVrFqihmBQCGEMWjm1cphoosQNuXe9XxBE1D1zjLMVvk5zk3ZA9b9FHGqhpKLcYY63Vq",
  "key9": "cBDkANCUXYeTeUywgiWKuKvtjqbuzVPsxCuw2DZmgYkPzEK2yfAkrAGKp8svo2U4Y97HjuGFiYNmnXXuymG44pg",
  "key10": "2gvwhDKEgdkvSecXwCuiTbpdmx2sT3tbEZv8e6f47FD2TtgZxaETdefMRHD97HHW6UdxXutCXCDuhwLJoGq6wMK",
  "key11": "5QAMwLdqJWRBxt8GEPaoDi8ojdcjyD69e2aeToDts97mPL467B8VGLTmsMDMfSKbinbzXSVTb9ywZjWrhqZy7m7t",
  "key12": "4rfN6xdqM3nhoxiSyAqZevftFt2ppAULooWwaETqnkBwHH4wAgHow2Y2RkKjyj8c8duKVtF61hdwxXCnoF8Zakuq",
  "key13": "52Ueu3Ns4JvPGHLSyqEgDFRJVx7197agFkaWg5mg8K4RtvY2aDwQwmtrzEctN3KboquarWP5bLHiG46Hy4ZbNSaJ",
  "key14": "zgUVRrgKCvgkZvUP3humBUayF8yxCnEDReegUVYdee67fYavKMW23ySiyGuCxUhTwDRiSvGPAW3jM2B55Lyzcce",
  "key15": "Ej1fK2RSvJHBrnZssSAdqrXZkusd1S6SQXv9YNhU9DLS4MxL5KXnJZJw4uvjdtM4DomL4kxmVFGPQkxqBEnnjFV",
  "key16": "67SujHYxHoWAsFXHCs8yLQNC4spuLCBkStjLVUgdapwUWQikixZNEP357vhJjj7Zc1wYN2Qi8V4RttMdpmma9pJA",
  "key17": "4TiicA2r2vTfREbHYfSXpSJ3gmHrJVgutBsN2um3n2XtcrG1Nmfu7hc4a775RbTiitLYEa1JGHE9jtAeFXo8ep8p",
  "key18": "2EJULEt5hmYVt6pEWynP5Eixokf4g2DdgmS8ge3k6iaFkVj6Xhdjhe5hQAhxHdRoy4rAtQucWi3qmtQ6VQhayDR8",
  "key19": "3TQS44BPfmxrxSGZuNR1aSg11QafiUDvwg85KQFc7HURnMQhoCkM4WVGzvMxm9Za1jPJE3ZuArXACWLqNFSFKbWU",
  "key20": "4RsDMc5Hdswiyieqxm5sVhCXqhcsJhAcjaDCukBffeQTtcCxgcptAbXjNwWy3b1uWJBAkLP8QFiKZgJ31LKbgGBM",
  "key21": "d6a6rzdfmtY61ofp93V1SWy1jwJXgnqAETjVSxeojzmw1PMPHFmThTQzPsQrfyvKYDgoSxk4fV1zqZgN3fYCUYn",
  "key22": "CDxswA9JG2HHw9Uaum8AA7v1y6ow35kVwDVNE24c8PCvRwasNcnJzMQHhLeapnM8N5ribEi24cL6LQUfCDunmh5",
  "key23": "56kFi2TZxpXaWnAPzUwDJSRypbE8wR5ACkwYyUYSMXQncz986W1TC7LKacdsb2Le2kW2Y8dTYQAPAA2auVdsuX4H",
  "key24": "31YxhpNvKhJLc2g7tJpGxk1oPKM9vQdYtUkHwEAPbAyergVykuGJX78yyHPKnKnwRzmBs2L9rb8RvRorb8ZHhZ9w",
  "key25": "3dtefDLHGcgMMJTbfxr4L6d3RfkUc1ji3rkeQUoP4zhcFffiuDXQed4kPScJVDjp1g4i1vnR4xJd8MrCR2cPsN4j",
  "key26": "2YYQvz5MjuJdciH8yRXf5PLH37MUks7UxEaB6tircBknsfZUS5DjQyHgKw3n8qcEQHRgUAs1da13gS799xVzho1c",
  "key27": "4x6FXqFJNxiEAEFTmMcYZN4XnqfWEpwDrkXqYU4tXEQTJtpgeS2FaFeLXDgvR9aDF3ynf7VnfwoWVeKYNrP1sWaj",
  "key28": "5E8ARaRFskMQUhoagiAidvNvRL6U6GJwudjdK6oTwm5w5xb5eHx6jMmWTWAKZBMkkEXV8Wc7xY6t9BhuGhyj1Et4",
  "key29": "3C452kwqH8iRFByLb5GYqzktsucU8dvnhe5z9RW3jfQc2WrQtpawheXDws8gcNsNKmkUZXn5QLFqBwfgP1AzsHm8",
  "key30": "2C6VmX7t3HW4FJ2DPCs6tWCgi3yYQcERmvKqGxHADkHbBzNgoxpRcCbBVn9v7FCY43uPAsMo9DgkjJmfUrDHo5rw",
  "key31": "4q6vmJwYFKeyndk86BrWdZJsLxjccdzNWbdZbzwRQ9TD9C1XMZhMpLCv97tcQAQuLAnCFui7aPJ51H795r5rsJu1",
  "key32": "4DLWEhz5AhTwa7MK4wyg3YvjpFEMUUHJ2Z4vYnL6D5mBSPBKNjZ6B5aPCvGPZr9HQnnsjwKRM2cqhqdE4ijywfHz",
  "key33": "2M1vUMmWSDf8EdAnyobPKCmLd7uDSD37LCL83fxN8sraGv7WRvFxte1qw9KNWHDLp3QsgVWUxTgLmRh72tddX9Mz",
  "key34": "4FRkRXM6EVZesL5h9VxaffC57s8cCs7Bfg3xECePsoXitFfMvKQ4BepDg2F48UN9VKsw2PyQQQAsc2CHBZK2CFuf",
  "key35": "3H3ddqMvdrKzGApV7EBGhHEwktqokRnJmjgTKCjUeegNK6o13hvxqGCNbRc4krGTRBDsBYy7FxZyEAXXa6UfvuGk",
  "key36": "2sbajfoLzwLrWzjypCQykFnrt4yannWh8Qee7P2hGK2VTEJTbp2tVnoJhPnXd6BXQDKhhkGm3SkxBbkSuK6CAP6q",
  "key37": "4QFMgvSiKNybVad7PNkzG6EYvskdPTS6EFqkxtCzAmSKnRZmjPDnF8JUCZVdYgEBRx2jkRyHnRAAugWnuthdfier",
  "key38": "3UQRBvDavpomnCN3WmvGc33qbCecyKFVUnbJEhQYgnnpRdVmPgzxqPNDhwDfd3yxyW4ysqRMsix6JBuY76KjfXpG",
  "key39": "2Y2S7txi15m1Y5FaURaQ8wC2tXRvgpwnRN27EiV4AZDFcSbEvkuEsqkQ9UL2DbGiWPxm7GgAsv5F4ftVHu3RJJ9g",
  "key40": "3PZdLuAet4NR9TdfgqHjqiAufmFkiszo8wiXTYNEZwn49eAo7L6Te25d8TCkzEAJ7wSZye77KZRhkRLfSFgfHRDs",
  "key41": "AMK1qPPy1cGNbKK8qRHTxi3qrQQS4TAT8ekYWWA1RMEv78d8CNYbcu3bMQiYH6TQsXz2avJXrjW1s2GnJ7a5TXk",
  "key42": "3yaehkMQ2FPHaiPzeCDYt76a8wAScQBSAWs6UEyezBeHkEqNCGqH884ghuDQe48qyfCb8fNt477YbJ4XsaMu29Af",
  "key43": "33srVhsYNvRPqKJj3QoPZsUTxzjazwjTFH2UHdKVVcj9LyZ9aj4B1hGM2nQECXAPupqDmQAeRZWzHhcT9qf4oMct",
  "key44": "3dgjkKBYsK6e4knMQFY4KTVgmHQg2d39ifL8vncWHEApmz7EYVzYvYNBRwJtuNECeo7V1voJYarWGYhbMfty7fqM",
  "key45": "3VLpVzxC4KUcGAGHqP4VLDJ2LDmJ7B1DU149bEzRW9iFAXgjVCXnVJzMCdyVYxbyo23cotiyzr65k7NEStJjDawi",
  "key46": "2x56i9mTcHz4xu1oRrkdrQa4uiP33cSmeNC2Sdmi4qDnj9yPGzunbimM9aPoJkn9tiWskUgS5aAtf9j2gh4iy2Xf"
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
