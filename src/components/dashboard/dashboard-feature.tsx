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
    "39r9BJXyKxJcQY6jGPooitkkcanPbuBUNrbRrZuC8Jxmb8KaWJ7ppGEn2hLLg2hrMyfPLN3H7Bo8HpLhu3ZYQV1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wu6JjhZoTpVk5S2oxMSQGi7DMneamgrpzmBB4v63qxRmzCcTdme8H2PB9WJkDvtJCq9pNjTFoapAVS2mwo6jd9Z",
  "key1": "31hefMv1x1MecnDgPvKvPWLQinkv254HxqnyhU1DZmhgSt1Sd5xHy2wsDJDoRyPyE7tmpF5drdZTiHaxQpocJojA",
  "key2": "26MTrF1Cgx536mqreqMJw6mFq5DaoqXGZifi26oNfZaHj7LydfXWXBpND2WhCKKY5jnje5MSb3Jpu5k62vQvR4yT",
  "key3": "56zuLwyibKzyhNYZLEz8c1Ru6h4vrJYaYTHMTTJoeb2s4aCibcKASAetzxwH74Yq3ZLrpi656ib5YHSBv8ntxG4f",
  "key4": "5sqArhFzSci9ApaRkTiebHmxxFRcekEiKgsYS324tf9Y7LZzi5eUNEfbQ8KnBZpz8AKcWZ2pEgyb4XR872Abj1n7",
  "key5": "2Nttwdtd6hu4o3wLjbXXWkikkqd83a1Vu9hMaBYaTfQtSb8LZqcCGhrsk5txQbvp6MjqA5wQTkCr5N4qwiR4z2jm",
  "key6": "584KWZv6ijbPbdS7KEQSivVTG341nHBsDd1zHkfTuS4YTxPUyHb7TCNeMPzzgyPAvXR5rFaVZokFYEQ3SsciUkN1",
  "key7": "4iPjmohSKJDZGHffSzkEyQTBv2kMuQ1aF3hc2n7PkbFHnhfJT3pqut2Ui7yXLtFFK3LjWaKdwEXrUmrVkDPYHLCR",
  "key8": "2LcNTr4cyT3XXy5EgySafBrK3tsTXcLKyv6tkaQUBBqgzerwnJLs7seM6Ksj4XWB3gvf49rUYgxAp137cogiwu1p",
  "key9": "3aHwnMh9LeNGCURcfwSRkEwUGkZX9XGLy8azVDzPU8Xb7nq7MoSZiphwq9hGn7jykPV85dDPCbpZdVwYFSvjXfnX",
  "key10": "3EQv5k1XW2oRvS4VLBr1oyLwh1p5A4Zpwiza3YC6GxKhanrkuazKFiek9FqBt1phkvrYsPJGcfgKaKqPG8hsqEWi",
  "key11": "Um9XcapGr8qaf6epMHZsxh28dFdgnee4mwzThy69ygiBxiA3hwRdfWtTCmmQ6614np9daNgyWoTzv2Lcqt61fHp",
  "key12": "36QR74hxDWVzUbNVHz4rrfboUT4hU8kFwoqKVFUvqsxHrMaMqvKyZ6uVSTjQdtBFWRHvKmmcd4QF3uuKMGEBM7PA",
  "key13": "XJuq9RqumaKpgbhwZAhAfTFrGpxjbbiTkWpEZ81FTZc37w5fKUyteUQguvS2j1fMpSqNfhZpkZ9wUqnpSQM9rL6",
  "key14": "3gzWXEsgXuQM5woxhymesYmFEzcHrJwzBX55rbunFYWYdAotYsbTkT3vTHm2rv2PCKutLnGZMFunBDSrsQZa8wx4",
  "key15": "3m9pFsNkYJX4fjbYvQ438tNKDNq9eZMhN3krD8FBubBqbYuEzznaQDKsHjvpHGnGRAP1VPwqYxSnjzLmkoKGXCGh",
  "key16": "WUbFZBB2uKgqYauEubKFgvkQpmT4mduDyuNDgs87xF9JPt3uJRJS1hHw54gmSj6yNHjdLgQHtH25Q62s3mc9NfC",
  "key17": "4UZGQ8A1Z4ZiKVAHoGYLh9AkQSHN31B4fBYAYoitzx2kXvktPMWzRxrmcGmuaEKzTHY9aQ3muTkbNmd67JkBUViG",
  "key18": "3YT7wvyT8tJeoh1TzgzhTE743e2ywY12nVW9J5jX7xJ13SvtSoosEphZyApaNMUTChnB6NT4vdv44WpvAnLM5N66",
  "key19": "5focHGk1D9UkFVqkYKqZ5Ycxm9vziPpfH7kAfqKvyq3AEsJfcDKVpVgu2FXriX21JUFbgMLKydEreFDndvHk9hra",
  "key20": "JBRE7BgC4e6kKHqcdTQNQNb5jRFHM5Q61SGT4L6rxniUUWmJT3LxMEcQPMtjSKbyrMdw2sPhR4X8gxpwFqjZ8Zt",
  "key21": "xBRsytEmAxQXACCzFfoHhpnPKsTnKgseY4KmPqeMfA1itTYsoAKK1iPAk2wWPvB9cjJG4E8PZQpCZUuRyMoHuBQ",
  "key22": "5iWhW1QkpH1a3DGNYBNJf8LniYXSLDxpfDd5g9prFdW2iGoXrVfff7gkEkJLGXEKcRVZc9BpXXDMRKrvWzdrfFuP",
  "key23": "2JDQAU8C2yK6RbLWgJJm9WWP2xti9m7TRKtayars82MBqM7D7D2yM49k4mera3ZEW1sVQLWs2VyBM2VqMf9wWgG3",
  "key24": "e7msvuD3dv5oQTTAF35xpQFaWcNRLWAKPR3G4JByfcRxJ67Yoa98VpmzSJuqZURWk9FFkxF53iRH6EazeKgQ4vn",
  "key25": "5JyY8xoSgnf3dT4u4ciGxSsSefoZWv2NUQrCBumA3e81bM6ZPfK3ahuMRDkfWJVuDN7Z6vtM8UGSv8XYuWdYfSKP",
  "key26": "2aSvkdJD9spnpWYQK5nnBLkNqM8eFnFM38zTF3guvXsjonNqAAESR2rBBLHk2KkjnfZkybJJ2YQgdZzwa5e8tmEG",
  "key27": "4J4aabucXWaANje4KSCge3yrTA5tjnsiZMSC8ASbuBik81dpjgg4U5kTwpqmoQ9ugkc2URRjZZa7cAhfirdk3MXF",
  "key28": "3DJUBvGqAKN5yAZjFXoPm3TW1ysGsqK17EKJN9oCN6T1Npg8LyzFTTSgA5B5S8JCw5PKeJeynoDBmW5Pmb1QwJ6p"
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
