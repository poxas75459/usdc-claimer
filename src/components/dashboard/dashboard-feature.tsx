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
    "5Wyoy2F5u4DCjokVkv5TMZK6drAEoAG1soiENcqXmCAXc2KwQvzYnsMd36FdeZRb9RipSa6KmQpctrps7k9NJcT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJrLWeNrzQ16M4VmbKqqz8gcL69z5zPmqZz9MHUbbV4ZSxASKw9E7XtSSTYa82pddRHA29RTXw7odUAAdPYYvhm",
  "key1": "5sVaRifhUMFEMNVQxp2hYsMHrKv8m9QpCz43C1UhB5irDUaStJMvX5FuyoCr5qRJTJyHA4pU5oqMA5jP2NBebbff",
  "key2": "4GWBr1WEvXkXLU3onvL9418TkQxZnEUjhnhzWJNUuvJcxyLqUrYZhG9Ui9pqEYQ3jk2JUe6GuGuNai9eg2sEhY7B",
  "key3": "577Ywm3TpDsXSBdU9XDo8WDeXXZMYh8HkbJeUHdJNCihoXV1pZ1EzS1Lk3S8xBDg5zw9NzkgmYYy4qiizGR3dirD",
  "key4": "FehoBhEmgJUj54BLs45cZBjTtAQFYnAPLf7eCA5cuscZEneKLmDe2mQKXszXTzNa5XQTe5rDtgA8g5211bwkyfD",
  "key5": "3u1D4StGByjpQ2koknRm4MAHH4CUYNkT82t2gYRBzewdyJjJGkzZBkjkHvokNFnMpc4fXgjfLdvTqexQ2bPr24Ps",
  "key6": "38TC9RMyVmoaqwSoBHAbZTHiNjWYVPjB4xdrxqTEtCrw66J32tYJTbj8quRaHJ5ydwRSuHmaC6iDJxHGPsEkChko",
  "key7": "24jgPw3KpfXTb3st6zcBrZh2Wr29rYqHF74gTibuUrAFE6SK6uLH96eMtUYjyn4AVSrVMxYERWmxNocn9UT763yT",
  "key8": "4pgRsVR6B8rafceUTqC22VxqUvVDTZaRakNrFLpgDw7Pen9XJeo4MgLN67MSmFuUXwgMUQyUKmZYW68mRP4DwnKq",
  "key9": "5LjbfH4EdYzFhGibi7Y4uxWUy6ubEV5UL1EjiZuomNGtjfPJP3rXNkUnDW13sZFQSpTk5kd4erG64ZukzTifDDhw",
  "key10": "7vCZG3tK7kaMXrUfys1zBa8VHWN2xeEnst6qW4xugSvCHKzuUMDM4ANTSHzzJXTNpFtDjJNNXDwpmQJUC5X7UGh",
  "key11": "42t2pfmNnaxy2iukN9qpbvBtheYrmeibrpqY6ZfuoBFR7zaFAyrpEcE9wGi2rSVbRwVVxFfhmtFZ1zqHq7BgyRTB",
  "key12": "JCfDske4TB29St7FPpww1XHw1fKaRd9UmucQVQWND3e2B6SgQgNTog59Lmacb2kJy3CA6uQo7Lj55CHCepYLKkY",
  "key13": "2e8M8WETyCtX32j77JW1jzrNnwmnJAY6K7sqdYej5bTkfjHeYfEHqKnqHgTXTrNGBk1qT2e6veQLgUQMyZZy9yBq",
  "key14": "3mE6F9fASRyvEBdcRCyvPxhXPM88gMLbxSYsDN5BfGHpqxCW6gFpeuBzkVcQW7GkWu1gznkXsSbD9bz1juAGAaZW",
  "key15": "255Mf3o2eYJG4XDfSqj7kZV1Bn2MbQN9uTQYBvNQb7pPg5DQtWpvEax3N3gcHCYttjHtbr9iijRm5UpxKcftjWfp",
  "key16": "2tJboT4cj7jxSXE26z98ar6xwMA2NypGwpRZdqEMAJ124rRVYxMrYGusqSVe5PxNVYArjdWHrvvDeopG2GSdpj74",
  "key17": "2jP96FYyJoyWW1h6fWZz5388dkW56vQX1sGRx4LF1vwXb1XzphV8bVHiqu815FQVn9ydkYdGqdPx1oMpugiJMzo5",
  "key18": "3KsRm1eG2bDwukgaDffFo4zSunnbQ4mp4fkXGNPhg6UQd3rKqmt54CMG7kn2WWtnMggPdVeehcd13vFeCZY8ZvvQ",
  "key19": "5wy5XkQB9fd1xniWcFAY25RZf4LZtWj4HFEJdwFBKZpSUHpAtzCSHd6L7SMpsLPzYNbvXTzDzhE75u42scK9EJXt",
  "key20": "61dBkeQAWSmBL1Uczg8DDgR1UvBcVgw6apGF8Xrh7BiNsZyoDG6cEkWSNdsoPLiM9dHsePDbbQD2kXRQpAChRWe",
  "key21": "omRJg3LGA3fWwqaxZL1hLqyztj71j3qMcaj9ZtWCJapMxdodqR3xM5PSGSNaeWCrfF6uwshRbByLjr6tmdpEN9L",
  "key22": "37bf43DaKuh2A7ri5PoEFZo7k8qhGgSrVoMbfqTr78fFsUsbpJFREWbs7ehaeAM7d8SjWQsRNTHiLddxp6HEU2C1",
  "key23": "3cqoMma6nSqotQ3c7CWhPt4vmY2jpA8Aq2fk8iN1fBopfKhBaUFFNnH1hNzDDAUDBgMyDdtxzWmLzfGP8oufrTTQ",
  "key24": "2gQvgCP8heZRkBEQeAHvECqvLufP8k2PnzeDfKhYr4UgC7sH5zwNbBRUtnE2CT6aawRbu3TqnAX7feYbVYP2gL1z",
  "key25": "3ZaXCCwrWopcn59qzeFMaHz6P1516BnYF39mf782ErJdhfqfGJ1QXXr5zTJJ5tv912nEewWLQWHR6Dovcn6BtgMx"
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
