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
    "5AvV1bwaVw1Yux9kAPuVsZBBzASxuB28XviWswd71Y2QCdSEwJm3uteTUUUnFgJbaBqDNeHmMpchpf3k11wcaQkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1yP1ax3aDexDP1UCgzkYwkebLZASEkj91DtVXEwBCfwCWmmubiYejqnDpamtzpkt6vc8hLdrmYqJVwg9P3Dr78",
  "key1": "2a7F2fLdTimaeRtfVTAk9rdeNBvmgdF8ej6gcAqwGPPfTCRvAHaB3sYYU86odATj6F9k58P8dWZS4Gp2z9S2axBw",
  "key2": "5qrwcake7FU3jNUxjFFNRQG3MaURh38hpu79HjiH8oLrXN5a8m2vDqhUDFUqY4a18L2aX8VdULKkAdBeG6NfZzJn",
  "key3": "3rhErgj6uqZynKNiCjsJmqtzXguX2rzSseH9GZRtecLJXqFgqoCCE8MsL2asSMnfnuSm6UqeBnk5NC4DLNxTiDwH",
  "key4": "2XXwMG4D7XE1jBFKuAZXRipuxyM5QAVh65Yp3WMvz7oMHxbMWoerpFNJtFhMhJMoBkcCNJvkotVVUnAZo6FHwGmy",
  "key5": "4DFWgPS8YnBsoKxyA2k4F8A4Eu8A1unqvcZYXvWwcR7AGiUkmiRRTGcichHDxV5GzU6o5uMgBAvM33PLoCBRjS8p",
  "key6": "3iFQs4HzM45gJTgqv9voZfWUAA3f4TY4n1n6TcsXjEex9GLmu3aaKAz6MmbfQg9wUYcnnzm8r6PTW8WjivHco83H",
  "key7": "4cTnBQujRPHaCJvMbebHkggNwqEx7dtbFW18UdjMScmdKiGdxGabrmqKH3jy91jQB7JB8bySHnEDQyuZEXAzgGiR",
  "key8": "3ZMqWVWew8kRSRUqZNjn151N1ejyXC4iFgi7cdVRMdVohSfVVPA4Mz3jyXiSfvQu3p5PEWaULodQPEwiKzz4wRFi",
  "key9": "5fqeFDL89tSTtTUmARmtdtshp2GVp1PjbQnS3N4sX44Zf9zv5NVnzudSppxGJAF1qgmM9FoVA39edVSBs49yD7wj",
  "key10": "7N46th7mVD6oHBDWwdUueUc11Y7uWTR9HhF4g9YvhXJHzD8rxEg45qxWhJkJNdSwyNL65n6ZPBfCm32kMGqWF5m",
  "key11": "52JQGCUaYG5ATaTEFda97pc9G2kRnuqU9oUGDPdJHqJrZg7eNor8vqEPi8XogEmrVJZae88mxN5g7g19MWygnpNh",
  "key12": "4cAphp9V6myxHuqzWkUoGPWDMihXfXcJ8AEhFq9zeYsZMdvnWAjRzFbr2zz99TaM2szU1Ro7RGDCiyQ866htRGtj",
  "key13": "57vbLfNdTZ3Sf27QRLAXpkK4zv8V5AmX7kAyuRxDGrh9WbkfhMkrEAPiGp4A6XvgwGXLV877uzEPsRGWWvH3hqp4",
  "key14": "cV3ngyp8JRcasxT8ws6S9BcjGVCu3KTEcHsCLoFQzL8zXJmeka8f1Fb88bwyt3bY2YxWCZmMsNeQSeDFjhHC5vL",
  "key15": "vmnWkja25uRDaXnKVj982AsHdrDzNzJe3wPnwTVSUZKs3ZrNqgsvJfYHXMax57srBt6SUjefsWZQCFZPMzcWVE2",
  "key16": "2ozPGEfA885BCkg2kdS5QJrREFifqLeooaEeXafTeXxokuR44yK5qVhSqcQjBYdCk9tYJnMrameLhzBXb5vxiy3Z",
  "key17": "Q94aLqA75KgjMgjQCYwwkekSmLscFkNVpRGC5taQzvJA6rSmxkFZwcseEzaqKm5sa2WS67ukyZ9e8pJ5GVuEYYL",
  "key18": "3JCR9DxGYA9fLBuoHjEXSowbbYNjZqZZViB5Y33BRMV5fxW7tqoZ6mC6x9SgrtPU9i59DpLbd472H15xpbWLGKai",
  "key19": "5yvLVtpRtEKB3AG33uqyGFVuZvUtWgpK5EYcpoKdw3CBK9YD1rLHRHhNtedMw4uuAo5srKw8HFqWRrFq2F93nch6",
  "key20": "3WfifePgcbS8eY5HtZS6W1NeAhqyovHHfXX2PgZ63xkUiasEWndRnhmEngzDzhYa3DWKbDabufDGZd2FAXbFNinr",
  "key21": "qwg1xbUScNY5kJz7p89KKYn5x8VCPzNr5QFVa7E64Y5eDoB8qn7KS5feLKZsSGn8mGMRHTNSytijfRX7sZgRAEN",
  "key22": "cvMC3V7xwic9c2peoRyRyGLzULbn7HzTd23tzDDtNgYKWCwgDsCqTNZFpNcJGDxWqcSrJx3yiKa5WAeKQ761Nra",
  "key23": "5cBhDfHrhV1tPU6KUEjAuNWWYuozbiB3JRt5UeFqDEUyiQwPxjkK2Q5ac9STCGAhBzzDdEnM5YxVM9Ym2AbsrXeq",
  "key24": "67gKfQhCdgh7UNkcW32TejtpTjPM8QHrc6DTLykaQopufWMe49s9vBNeD6hYLVs1TGFP98BV99kCxq24p8Js8ihe",
  "key25": "5BcwcxyBWB6vEWAite1p9aNrHDCoFKwtfvw4AxxHRsUjTQMiLEbL7dB2kqL48Ha6rsA9vxu8VU76avufysZK3ker",
  "key26": "4ecHkgmwZhDLyzmXkq8qtbMgwmjomWA3UXQM1Rpa48sBjLhcdZ9H918iKKrBj2BwHNk72D9umuXs9bWYeQaPKLaA",
  "key27": "YBxoNWpV539rGVA59DWNkuJ1vWyGDagiukU8U5t9LWcmAh5AkFyQ8aWS8RruadzxzXKPpc3h1WjnjUWxn5JmcSL"
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
