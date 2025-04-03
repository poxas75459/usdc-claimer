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
    "3Sk9QXb49J9S2CJRR5SwBqa6G9jTKzCv267yNcvcurfyV8ecPdEwNJob2NjQhQTzBNLG7L6MQiNbmnRXCZQ9U5vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3KQ2TxVFvwHzm4sY3jLLFNeWeuu9DkVpiGoC8eXqqmtkt5FSQbAhmBTt8aJaCLE8oszeTDoy6VgUQ3z6KVjMTc",
  "key1": "5crUVmUzhmWag3RGYpnX4twAVGLZPq1Ka5hDPrupSKoYwJCU2zGXkhag2U4VPoRCpS9nLg4bPXNNNdi1csrim683",
  "key2": "5UKF6syA2A35fzLTDqvwFvTaJrdheBKSwovkuX57wxWiGhaMDHvJV5J1PNWMUix2aBoHEmWDjP1dqotU9SDMyb4p",
  "key3": "UWWpP8HDbJYNt4seqT3kssB4jbeCn1S4Tt1wALhLBbX6YqVPbxTz3Eh3whyaG5FUTb8XQLPLf3JRdqpfNRYnPby",
  "key4": "2C3NpLtcuzefYpMgAc2xjiPsznBvfNVucU4qrdXXC1xXrwTu92Wxdu6MSEKW9UnrdFuURqEqsUhKCdqszMDFu55B",
  "key5": "4CEWWrzD1PrnXza6C9WGwPtYHE8HeDYZoVsqQ1RqBR4iDsFsTxee21WqVxKqwMUWvdUgPuFLnRLAQFNiDPjjng6b",
  "key6": "4ZELcppcYqEtZf5b2bWimSpk9vudxW6xA2RrkQudJySAamfTgMNba1imGc5wjozEhv6qj42RtEa1DP5Lgpcdx1YC",
  "key7": "4ftSWGDANguVgesq7HNFQG2NXY3JL1Gy2kF4Htavcsv2QRNqVPXAw39vYX7hw2dWj7Lb7H828261hJouAtaT8PKh",
  "key8": "aJr2gA2SUbUJYbMLyymNLqscCgmSs8nUz4qXy5nDyemaUewVnAXuyGkyWaQkoNzTuEvLE45KcUC9vUukdTkQuJD",
  "key9": "55H9j4TDGaefUW2ue6NLTCRWs26tZwxjL86CmWJoDCjWF8jqjij42ozMtWUakTpsHohm1SBQdtzqk2e2T96Vbfrg",
  "key10": "4mk9aG9WVJXQWqjuWsXqnurZDixCUfHaZLLn5HwHkzZGHhLqeukh9qsj5iNDb2aXuM4UcmmKLJ9zqTn4RQYraYsa",
  "key11": "3BuwPHsvCZ1nPNuLbSo7hhMYeqxR6M6tbXQ1yW3vN3k7pZGnKZZfvd2aq7sWCF6XBMBTbmEUUDKi3ZewQ1PouTRD",
  "key12": "4A6qqPXTQHa7QdgNkLrAw2uVt5JBcnmZjt69Whq1KLtfxfEZDiue3mJS3FmhpRBhWUyJ8hyQPC2fyMeFMVYbDNPm",
  "key13": "2Rjt322zswyoSqvpTcuwcXuuYkYGX3KY9zVKYHVZtbyiwYkkhJRtUAeYE9n4PpvrwGeNYEWVrJfPDF4JMcqcYqHT",
  "key14": "VKVgCqxKdKioSo9wwPvPTSPtu5CQzsk1DL2HpbsDGkQcBMDcvdz6pvqcPKMUnUhTMGYokoZEkZawfou5d6SVDDg",
  "key15": "3FughXhuArp9E7G1HQp6vu3BvQUYZ9Ly59CXtuE39XayCe8bibL5MzDzWTXggYsN9HFhPcHXcWkcJtFdKsi8HKrd",
  "key16": "EQUhVakfpMZ2V4rU9mmsNHdqYjBmQBUkaWFgpncWbALG1BTv5U7kJkcPPVfngK9HpDXTb1CSWPQJ2FinHA7Pz8G",
  "key17": "2LQhWkdsajofNMQapvxBr8RnXLzPchXyg22nQb9sqAmQUpyV7mvEsx17u2oddw59aeaekhsnRxozcasSKKhegwMm",
  "key18": "2vajJig1Bj2Cik8QGAYt5t3sxtc5NNY2sDBw8qkMPswGH65xBWAaP9ManvM4ApNvg6TRSA2MFz52qw9Y1N2sKWug",
  "key19": "32Abi1LT2zwEMv9qYWS3iT4rtjWEt7WBFWrjYyJFquqKadBhLp7D5zyVyLHVg5TCLqX6i9b82WQrPE8SZwCUBNaX",
  "key20": "3CRtMPStgcUbjy87uTpqJ9GJNmDauJvsLSnL4Jr4VMmdnE9gzCRq9tYvftekZfh89MniWAnU5V97PLc6nRk3kJWz",
  "key21": "dUuucJXxmjVhX45BFQdabG4LftQRf86fZWdjRwXttKhdS1HehfK5EE9TBRbLRH1B5neJnDxvQ7S5V8Q2Uw6gQhd",
  "key22": "4fPFF4n7n6mkgykF9CdE6bDDgWbA7EJTFRiWjZiZqutN1d8bAqvwXxJJnvo9ng8W4CsCEYs7sghfGY1qXUtA4nVT",
  "key23": "4PjsdRhj3kb5vTvoLyeYSRXBqmRURKbAL7CVLhg7vMFzwVnpnV3Z7ymZw1acvDSrXde6DibSywS6z5zGqAVrrPou",
  "key24": "2zUrZNmsB9bAAwCDncPtitNPRLJbJVxXxQpVfyGQiqCS7KH2qdfB83E1Wvhsypf1i6m4tNf77y1w4kZX3oygfNtT"
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
