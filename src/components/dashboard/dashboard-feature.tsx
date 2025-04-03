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
    "BdbynRotFUxjK4NqJL1sRwJXqMGB8mC13srzSpxXp3cbNUQQWvFmAVVxRbLZ1Yk3zgB572rexppRTeD6SgUqpzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHBJdLmJfYAX3KNA9p5C8C1KtFEh2SstiUjvRqLeBqXBk3RgZz3mcimKHETtytidoa9rXwhncMyqkY3osTF5fvc",
  "key1": "127eAA9aUbyD49b7kCAReP5Vo9n3FsWGSSf7qTMTbfw7i61wfYRCNNnnmbjWpXVoTDk1GAGgepUnCRuRN68hGH13",
  "key2": "3f896qwGECDGVYhQc1YKGcvDWBidUYSpKpWCucRLJz348cA1sc6dbUHj6t3hK7UEUrkddU45EeES9es3EqzXUBxX",
  "key3": "57xVBemxF7pNG7xU1qmV9TH1oQcccxZNGg5DK6wcyRF9xdBiHJPHVRd1LAaxYKiEM9LPgLtYULZ97FbvJG1seFvb",
  "key4": "3ckk3ZpbkCXwUNwBrpd8DDLwVcNaqbCc4oCSXyKKdZzgpJ3k1PVhqmaE6yp1g3osqwouNVwErY1WwjgPVgxMh8jr",
  "key5": "5oYmGUN3r6NumfHCiquCTRsD5NtNBc2DUUCUDFdDV6SLRX7cUcxhN1bUko22Y5pHYpPBReKMMNQkBVtXiX65Umpu",
  "key6": "4vV3H34r7tUUSfQcTvX5iGbtyT4YusJf34wvW62jfvnS6TBHZQgZs65mANjxhzrYHoYWBzgE4xPxTJxDPN9NxuVk",
  "key7": "4csEqjRnLC7RLwU1cp5Js5CgEL4oyQhMxnwEPjsyURdJF2CWQdE3RwnKBy3tYQM9PsgPkRS6rw5QwAWyN3fpBzsk",
  "key8": "5JHmxRjdLDsWf52wS7F7Jq2uC56tTuseHffLNnKoTLFng4ALEoETFF6t2PydYSWHNFtT3mbhyPFzo5tzp4fqJMNT",
  "key9": "5jgf8jor3K4rsFwejm64c51zSc67P38VpZ4WbmtZikdexuf5Vg1vNk16HJNyaZvqbjkafZf1bLpY16qBURfTmBAp",
  "key10": "5qnkYQiXdJbhj2BiWbUUaG984rnw6iZjmWM17yp4MePyrjn8FpWuHCEyzvHHaLr6ty1Yb3YWfR6dx3KQpT8WN4pg",
  "key11": "5oJVG5DENtou3E5DAz9CejQoCNCkuU5J2XBeALjKgH9o1UkWF58ZrTHo75eMyTLWXGr5AY1pzhcFnjrADcLCkEbB",
  "key12": "2az3nBfvm2Kg1z68Yc7Hg9ZejmxFjcfuTBAamacS9ZDQW8p5c9FhHDjfugfXvAPAwkH4g2ozqXB7Uf3r5GBnZ4AK",
  "key13": "tXp8mj79erXYvYm4ZCQwoBJVqFjPASeJv5WCm7vYp2UEu2rR4HcaskjwbyJTKNm86kimMXir9ia1yzdTJG6kxmY",
  "key14": "YkHsLZKYVPQvAU71Rb1vYkV8T2zzZSAbK3jTsxMwYuTgjtViq3MKmShNqWofrFLfTLSVb2bAR4oFnnPuU5BZEAW",
  "key15": "hYb432JJBfGjAMCMiicrdoyUAJGaLk253ypVERHW1AsbX1ze6SYMnq7ZqM5JKdiJ746YLm6eaxyzUUvCZVg534w",
  "key16": "4Uc88MD1hRGHNvZD1FitD4nJRD2qbDQzNyZWXB7Rbxj32VKta5qPXEarfWUVPNPReM4mp58GEXBmYMD3h9E2Up32",
  "key17": "2QRKotjDWkVYCp1jqQ5Dc7Y69tijsGPhr6WDYG1w2zNwp3HBo69RsSUwUeWTTZawJ77JqhwP3EqdatEsBgE3JyAA",
  "key18": "3NGbmqKNW3oSkz3aFb5jXGSs4b3jF9pfxYTrB56VbEhgEpik45X5BYkXdUpiyuC2hJSTf8ADuCkzENqVrFGaJo7X",
  "key19": "4Dzr4VPCP8SNF29CVHwDVBv2hZu762zfBwTHWPU6VHSWQEjXZ2HMxVS5hdDezuLFjXonGUEyrprpYoKf6feC2hDC",
  "key20": "4VbUuYNcwVBAnk2enozwpRfFHCUixPypv3ATu9yPCUoKLpdS67HmHfnXnMrpugrBVg3VhdNcjwbx9C45cYH9ZRqA",
  "key21": "2va4hhThfKTTrFgsFcu3dHcHMystTefHbhrwauqUKqMk2GjxTUY7Khv6HtMkprm4BTa179BHcTbW4sGwnnVtV57i",
  "key22": "65aKMst1Yh8uDSkApEuMYXFXQxrwWUjaKMUTZ1JT9ncAh5B5Bp7VLxwgZKf57dzdLPC7Ti9tj1bZcw8C9ra4vNMQ",
  "key23": "4U2GP2nQcVMMbnatdkRginktPTc4GKqmu4g6DMhBVBtHavvzx8cY1X7P2DNPSRRb6zqeM8Pb1XHEnTYqCXw15NPU",
  "key24": "4CxP4zP2Q3yoZinsVrTMmYUEPDMHKyuiUKvCNbznYDA3e7nk19vamursHCA2PZcNsPGzWtFvG9sZvzXAd7Rhy7DR",
  "key25": "645V8rG1aGKBJ6pJZDpG3U5zmL7zfeLjuT72SwoQ85opisq5Lrho5D91UnPHm8nUS9K7TDdYbYos3BcdnQgUpLYC"
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
