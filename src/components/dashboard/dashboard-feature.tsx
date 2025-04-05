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
    "2tvXYRXtAU1p9CMjcncr29uzDCg1qCTa2FjkirXyRzYwf3eKX3BWXHHUEtruQ1SF2Hatzs8b1RFif3tTfX4BtbWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ynj8kX5XA98x6GG6fqxnAnEFMHNNzNy9rNEcNrQ5Gr5L1sVRzUgsCDg7ZacXaoWSYSUN57sMDy6LEJTccceTA3w",
  "key1": "4eMpTsqn2PQ2agypH5BU4GratRagZSU7sdoVBJeVTgdrgwoCm8W6Y8QHGiumBwPUxBT9pLT3YJ2613CWPucQvs66",
  "key2": "63bHbG7LqmRCago9cGwj95TFRtNnK1EUsFtwurBqi3qF2T5PDaKTZRuAWiqU7FzEKmW7d2KguwdLaz9vxcYJF3yE",
  "key3": "sVf3iCB2RFnoVsjuk5MTQXyRxXnoxCGherw4QHv8MyQbdLNVkyyPEvuqiHgTNz9rrXFMzoCRMHyfXdrS9qK5Sqr",
  "key4": "2yWsNMddpWkaH27cjeJTFz7BwkABbz2RcgAsc1GwDyqo3SUU3hHXup5dPX5U39FWWvsrKt12UxDdn1sYBf5WUCbB",
  "key5": "2ujwNu1WqUQzAC4APBzgoskK5ECYyKvyBXTP6YMBwpkMBih9fyi82xtrg1XqeYwbVfSZRzZbiHzJpEzcaecoeAUc",
  "key6": "4Vr3eSjk1UXcyjyuMUNs2N2Lw9DZQ79RnjGFP7qAUcn5YgKgvwrFP6Rb1JDRp19seP5ir5E7CW8cW5werpLWgUfa",
  "key7": "3zg1ALXMQk5doecV74WBbd1tXSoXUn7AT6cetBnsisR5uJF1L5GY4MnGknGVEN3ncPCrEMmdM16sMYsrWC1zN1ar",
  "key8": "2bMzgZBoRW4vfsEoWReK8SKb271emR3wFCHa2PZFHRYt4KcHJFJ1UosxgaJDB8in1JEMSyCtjTm7V7F6189VGhWB",
  "key9": "4THvCvMicqq3pMf4erGV8LUx2r9KpsDQRssUhYk1deFMZBHkbRGXPHU2YCELantXQkSvgXCLXtor49oeQh4R33vL",
  "key10": "364e5E7SXo5WPQ6rvMP9ipDwgdUQdZqLcTHRib97ZQ5egtpRJu4d4YkboTDsSnBP5fPrLGY9538EFVHsvZaCcgvJ",
  "key11": "Q9ZgiqUNMA4Tt2741BsongcbfYkzkMX9fJPgnZG4xjAkN7q2hJ8og9fXyW5fLVp4SuhSo2uRR57BDe79RseHdDn",
  "key12": "3tGzPTrt2D2zwEHap7on2nH1iU446DvvaQqbGjENd6A1toWiBbzxS1VMDWqsF9D2btvXQCPiHBxqWZuM4B8RpWcN",
  "key13": "3aaGxcJn2YTo7kJvJ157AtJ8jB73TxYGJzc1wdx4Cu9Jq1eM1C32K4SkArt6Jbi2GECTij8jKyMXdnZ1Mf4cVBQd",
  "key14": "6BE2QfHZnDmeR62z3a4TTE8jqGrB9QRrZsp5jbJmWApEi49az5AFDgYeogJtoeSZfhm83MFRDxBfLgJj32haNpZ",
  "key15": "3F137TpTb2wJYE3pMiQ11tpBsNVpMzYiaA1ehVphBALEZSYmxR8izELbevfx2YWubiga1f9PWW4y7Ai84BhnynnX",
  "key16": "2MXAWVZGkzMoLT1NtfZHzTnegvYSBRaoUasboVVeLADtbToeLs4yaws8rhbPk93u6dT6ZB24Mr523xrEAekw6cNQ",
  "key17": "5ETneBy3NRmE4wG1WZcJqrWs743UG2haSEKm2b19WkVi6D6Eeym3AmHtJeVt79RJZfM3d3KbwukznH4wek6FaYvw",
  "key18": "5aSWQiYZkt4MLqQnskSXUeWPC8uttZWk4BVWymvqNyGXTW43fcqWE6gZc4Fs9pZbX6kDCYfK4sq7U4a9hQT9QvpX",
  "key19": "5E19kzorEtYYJQnyeM5c3Rit1H6FnXQFcCpan14PnkQicJZuNEtyu9ExNoSJ44peAmvvi8bzvik9RztPdNKeDtCV",
  "key20": "2npzsp8uyDLVTstVfFTXwTs5ZG2ir3b2gNakFk97Zg4vrTBAQaciCrEv3HsYBzk4SBTPfZ1SMLAXdaPFHc5xXdb2",
  "key21": "2XjqNNbcbkyCGCwwj3Bsmn3rVue9XQ7CGp8SNikyDDJaCqZrhJzJdUrXWYqADxQTfX1741MeBFDTxNUCTyoenFMh",
  "key22": "5Zq9zeJxywNiW6kdFadxqLKp6EvZo31DFku4V7YW5Vc6CJdJdXXMTBZyMus9Yc8RAYQs8a8N923NrfvHbwx8CgPS",
  "key23": "pMeijrZqTEYuqbRMyGeRMqBmmRJAqXBehj21ZGwAywfrGhZzNrA2AdeGkjYvzLuLFGJvmwZVBjpVUERLEYrxUyH",
  "key24": "3GG1BvTwWwm9LKVAmAbbeGNWnbWzWvEKrcs8d5ESJojHVc8Ar7vDjsijWcj1etPKFSXzV3UdtRqxDxW5sL6VpMHQ",
  "key25": "5EV6Gsvb81Q6uzrLwWN8bBiXwVhptcEeHt7FvhD8NxnvjhgphRVo9qYkoJKV5eHbLtfew57u5vSZep7FfCYjbxr1",
  "key26": "2q2bTRv7CbBEZioa7hwf7DeYTaM7TGk4V2WqXsfW5FT9HPzKpQ4fob6j9M69RfYz8eWkzutx5xttHgqqWGWZ2wSy"
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
