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
    "4gEj7qT13c5dGJxxFX9sZyxfdoY7vg8y6r4vssQa8kHPbQhvPuqaBbgx4bSjcjC82KVM9CnXVGTSTNLj4xvibczs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WD8rpZymrkYJGLkjiww5RpyAmfTWSyDnzw4piua6NbwxbB8ZzZoa6Ht7StL5ovWQAdDeTnCSRXvvTaHiw8aB7vV",
  "key1": "5MbsZTy2CzGQABpBiUx7ZGr71tFLqE2KNJMicpP1iRQgTeFxt8Usd72uV92vHgE9ao9GeKAzXxN6oJMRPS6bYAKh",
  "key2": "sYwWDscgvxQLC8x2E4UiNy4ir4uMLz4S4pqWBiwJbpqyPx1pGi23rrGNuPtBrXNSKsg2hJiUrx85BBwCmfuur9M",
  "key3": "4Yzbboqye3rXfWNEAmEHUz8UmrxqCNDoAsoNUTZEkcWxAPWtSX1tq1kwitdNLSDwdR3VSxQ9jQuxCoHajiAdm1Qx",
  "key4": "2YrVDywsFw4KtvLcgczcRxet3XDPzPRfYCTs3USMsvFiFw6M3mcKftb7t2z6KEcmijXnRmivJaEGNPsti1zECaxw",
  "key5": "yDViLyYiP5cJ6egqp7haiLgvaZFSHNyHK8VaFAeJwb5YCVsMYb7JkzRpHuGSc8ixsmjvsRF9XSG1HFL73HD31QW",
  "key6": "2ucQKXWtDkjLosWeGpF8v7kAxCw3PtxatsWjcENhU8rmrLSMbzbbEPHsoPs8kD4GqWjwsAwzSsUMxTkYprCCC6U7",
  "key7": "5DYeDK3RneAnK9bHqjAitYyWFp62e4GwScAt3km9Kx8okJVSP66XAJpUVpETim3LLJXpQ86Jf2S3D8NEAqewkBWS",
  "key8": "4YkVFLYvke2nU1bbzci8xUaGT6hSdLzBSA21kVFJos3JV8defxEvwt5XpAz5Z4zviFsJkKuMCfD7LZywxmRtpzP4",
  "key9": "5eM6DFgdReMjghZR9LS5rq31WR2RWWMCZmYFZ29UB9UjC6WddZoPwGGvPxFyQzah7rLACjiewPHbAWCxHNkBgBA1",
  "key10": "2SVoabKvcfiztMQETNP8RptdjwbKWw4H4t2ybqLQ3VR4abbW9PMX99TwZjA9CCLFL73ZPiwWMCwr7zQZ3kNDETGC",
  "key11": "5XEi7STyzrwkTM4kdhNHBs3852eyBdtJSU8zAeLVBwKaXipAVdHbzs8JecYRJVB2azZ5n5cDoDCTrPUacTjztjnZ",
  "key12": "4g9NhV8JXrYYkB3Nas8xCLdKGVc5RtgNm4HrouMNWAuKJC6ECG3U76p8P8BaBTepH1UNYCfA2ZSBAnPwE3bLUeG6",
  "key13": "45oMHzSk84SHud8AuL5CyjBeD7VruGJFT6TN3bmyR3Cr4PUvtZjFZ4venrLnPvBXp487hrEc9GAS8PUbybFLw4Z3",
  "key14": "7y3o6Pm67KFxCGiMXfW1KBSBkAn5Ezf3rZD4EBTMjm2K6NqRj2peJbub2K4RkTxp3XA8cM2afUEcS4oKbQj24cZ",
  "key15": "31yzSHM8v2cCALnDRcecfzCQ6ufyksjhiNgXHt1Qoot56muoXLjLuvKzBACUEx2UsTKjQ3w9kRgRP6p3ywQDkaNF",
  "key16": "NNhuW7fCcWP7NqpQBgCU43S6TJ6r4jQESxTkPsoKXxwXyfxZVrG1VMWb8yxSzNgG52u4TX7hKoyZTgnA52PiU2K",
  "key17": "AtaxqsqgSXkMqQeRcg8otD4NeKEZKZQmw5xvEqYNFbr3artZvu2zksnrtCWoDKeKDLYJBUWM1U3yFtvhrVvne4L",
  "key18": "2rEZhXC9LQbqgXWHhmjCRbZ5doh4tPEZZ3kpN2ERctgAYWFmZ9BDj7MdpqzgPoDZqCmXJhcCqjvu34ot3sJo1soR",
  "key19": "5fVtGCSDY9xrEtk3Vwc62nRY4SREbb5Zq3fPKD84uMqFvbWRk5B6WnGmoXo7kvwWZLa8AwSPQEQKgBmJLCJe8Ti9",
  "key20": "65WpThLzTcnfAxr77q7LERU7fgXgHX3pyLgcYjUNigxNwDz8nGKC1ExCWJvXhQzvpoJEinGkSgDcdv4bicvopzP6",
  "key21": "5ynSbmZaUfUcjTGa8igk6mEAfsYGEKK5xSkT6ikZUFNq5ckxbxS5D7pA22yX4N6q7t1Ce7JnzgoaGoN7C96pLhqv",
  "key22": "3LrT6fGaSxYgxRXmHnRD1bo853eYaBGjFsnSYXs1vQtLuyciuvQCtU58HbTafmUWt75jfLa557BbNgjTaewmEYBy",
  "key23": "2AQDvZ1kWZgu85EwdW1ANhY8H2JxiV2DsvrFSJSEh1ZhXMtPRxbWwzFHrNx1WbYCvJabmsdhfM4Bi1Zrdpg76Nej",
  "key24": "26xzPUWu8kFgufsJskc2kJmuFxtd5NjbZv7CvyeHCjfsiZo8zsvnDH2FWFro3rk3GM4ygjDfKiRmT9oUEqBEL3jA",
  "key25": "2Ru9nqujRosbf6nbAiSkzaLptJRRYeiKiVUFt63WiaaDNJJwbHPCPwWnwZMnFx45XVn45T2iZD4P3Z7ehPQx4HUs",
  "key26": "4S2D3hPoh9Qkh87ktDMhPQnP9BbAZvmDaPQNWSPPcii7heNcQxWMfEWiTTD9kyp8whGjsBAAJRVg4a6Kf8U16pEG",
  "key27": "26skctM59smg5LqmkYd5xXaLWfJJaSMvNvNveiBGxTVGMG7M2RCisL7WUTHJRCLFg926C9F9WyKcaFCNWSNyJ9K7",
  "key28": "vQfsFxCtTFWZ6KeVBZFjQgT6hJcm5UDWvRPkt44K1nfz2NaaCN6Big5FfZ2R2KSh4deaW192ugyKUksXBHkuKGf",
  "key29": "2WDZiFwhvwB7UBuQoQkVB6SLKewJpujXvnyRJoJ3qe46SBBYpfrNufLCFV43T2PwyQnNvTRLFrFU3sHCPfHy5Ha7",
  "key30": "5p821jQv4qx3dZdFqsPnUnkDxsvvqzdQyRb2FVqvE7DHktLkL8EF5oFbdXMccepLc7Zf8fGdngAjBkQGe8htdDST",
  "key31": "4tdcieTuv6gpWKd3kZ6ahDSSXCbviTnuTT4cB2Yzp5GifuTnqparkhjVfHueTXqPp77m9aYf3DvprbuGJAHTmA6G",
  "key32": "JHtdfMXbSgFxx9PqC71xPdrexRP4CiEWEaZTCGS4keJp8iQsFMpc7AWywfQzbvLvP183cWbEcnXNk5DY1AXPmj7",
  "key33": "2xbQBccQYq2c8pkMoDm1H4W5ZYL7uX1Q1TMR3MwcapeFm9mbSM3RPdQrvUtPM5gxs2FLxoTNCtjavxyw4zjHP2tu"
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
