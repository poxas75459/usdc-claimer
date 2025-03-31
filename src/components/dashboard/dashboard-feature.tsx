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
    "4xNjUWdgrKSGzZyPBTUy8zuKpYAVKUie6sxyehJKmSpXVwQEiVciqhwPSHh4drzSELJ5vun3Atto3qTuUPG8hVrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2gUgge2GJJxe43KgJ5rB72axesRbvghEmkmxdomebFKGeji9Mt39kkTk6WkjMxhvALgS6pMkG8US7QhjwFHXRY",
  "key1": "5pAmfFUEoCeLay2RCjX7DreoMeMRGV5Pn6a5b7diKE5zqSNJdqtbwXCXzXgr7mnjgSadrMyVRq7zRRfsw9aB74t8",
  "key2": "5SZgoz34Tn64RraiZTJWHCo66qtp8CHct2VnaqMvrKfx2ZZYM1Kmb3ZS5KS6y9g8iFsVEgTpBWjHHqaDNoAwFZBW",
  "key3": "5ULiktTP5eKTLh1o8y5oWz3nXh7sj45qjtnATzLaZyxR9LLLz3wrvZaJBABXQpj7NzSnyKpEQjBtT6y2e1qbq2ek",
  "key4": "5BGqBXipmd8maf5FHTNcXrEywvA17PcH9YgJh2NXYerS19Sqy43X2Dd1tsgU873rgJELQZmGBZy3snheEKhGZfvX",
  "key5": "5pVmc82vdnYYRid4smnG8hBA415jCcYW4ShqULnnXTNE4mExKsF5rb35UriZS3k3NQDkAzt5ei8Vp5TGP8rHog8f",
  "key6": "2w6tTAUozi5Zg9bxWJNmh7ijBpZK4hvUN1XK9pGixs3ijATb6Bdv9CXk9mayimVbnC2NpMRvycNgomnFcX56y4Jf",
  "key7": "4MBUYPLwB5S62dEkw45e11y1qiMa3ThoxTMxCy7iu1cwA8MAqjJQvtZxUmCC7XQ9fyhA6XA1MvyAtPE3Lx6uhT2U",
  "key8": "2xAy1QfXKPFHUWmmRhhbbUFFvsL4wGD5boFhPqksAe2jq9hwSow4qzMxTgdS7aJ2YiuVivEzgU8mDtZBuWio9Ma8",
  "key9": "5vFDcfZkjPiEDNi2hSrqgP6YyN2jfwqochJZr4FKf26RZTCKFcV5ZvoyY6rP5aj6xhiaHkkmCxPfThherbwUhjs8",
  "key10": "2cBRaF9gEUW5w2DCfy73F8uVji1nDyyh2Cp5RQbL76RTCSQct9sKY2X3jckTcfCGPRgM42jK1X7gSf4ZvKM1qrfg",
  "key11": "3ZWBDmqwqNGLY7p49M8xmP8m8JHFgq3ySo4MMzRHWawAhF8x6CP8TMHiYRrKoXosv5QHJcs16YQMr4MG6wZT5sdJ",
  "key12": "EmxfzJ2vZgFpnc2F4QANk6d9xQ26hwEHZViRbaUAx4g3227AELwke46jx3FFQUM2RBjcicg7ppP9eHZjQ9sPGDq",
  "key13": "z2tms9dEMBeviA7WzyPV1jPYihzvuG2yKGAm2wa9cwHtFdW5v4E6JacEDxxxzvKYR1uEHStP3QN5BpiPxG9mCK9",
  "key14": "3v2F4hScrXiKXyKPa2WDJJXrfz78Bzi8tQqz95aX2sdT46ueatre72B7gEBMPnG9pxyoPtzssgDDtEebAoZbzbpC",
  "key15": "4tn3ksC3oD6rdtwFWgmttBSDeEfpTiLXv2dXwvXiyk5FBHrcimgE52NWN9pgWnesBeucpVWXKKP9MTTeTK6U24z3",
  "key16": "2khsuL5LTwojJpCa1NzyA33VZT81TmTfuxxsB6GWRykyn5su2gFC35DPor8ReP1TtpfbqAGNHygDNNQM24KwFteo",
  "key17": "KvQP8vQufk5xTxreNDhWDiB8KdYEPswZRbiGjogU6PYNzCyQVB65DM5CHMYsMZgsFG2MsZ11igHPNrTrqvkyuVy",
  "key18": "5oDpZhFyFKXcJZecmCHjzvttyc8akNaQsWpVHrJ1FhcSbkEC4JYB2rfupBLrMxss1Br9W1MQBkN4sX4BDdhpizWG",
  "key19": "2FXy8bWgto9hrVjNhzWyQMjh9VZTFQy1UhZ3mwGBBpVLs3Qz2pBqsLVJgJHyXi1EH4KML1Bq8qM74bh5aiXqdBBD",
  "key20": "EjswW4rZ8muMb72Dtaqjwp9VCFEMPG1Cuk5psUfy2w6vfgAUfdHWd4Z3Nqj95QUwYRrmu99sQCQ5MQATxkbveEQ",
  "key21": "523jPUDtKeEY3vjs5TVUvfie5mKiCUTBYLS62fp5Gy5jMjvEnWJ5dFvNiEpTRSYWCKJY4sd4XB5k69RNnnrHnsjD",
  "key22": "5UsqoTnXFD8F3doxw819AAK3RMdLJiw2nBVPTsS1pg3XMpb3SdJJAMYThm5kiE5MSNBVb3GvfhyxdUVsLkeNZGUg",
  "key23": "4zppiaxAFvcnnpZ8EjuL2efD8nhbPLcnwPAh2wsNig2HTjYisKgB9psigmyQaxKrKZi99jFnbQcrGWCrS2BGMB1q",
  "key24": "qVy5jHcHtCAfK6Jee4KkjW9KVo6PBWtJKrBDWCd1pDbMELQqxFmJQHhR5PcSEeDT4ztg8rU4uKsBic55ucTRBUj",
  "key25": "58oZFv3txZeMaJXCgWz8oigSrfmZVyJ8U4wRbAsiY6izKbBkUuq1BuRDLFUcDJaSyVtwKxSgQ9JvKWQey3MKH9p7",
  "key26": "e7jBwjvWmZwGcodk5cqP7jmjDGDrmP6U6ta3N9yKYxBEgurGTwi8mKAxHySPbTUivjjRkov1y2sbEoPEuc8B2Ko",
  "key27": "51SnVotJovZ3ZDtVBuxmNSUUhoZ8AJrMpDbnWdkYFhQrhbReSpJxMkc3t1iCBsDrXysKpLzPXRquWNdCiDc2mCVh",
  "key28": "31ZRqNzy1kAAaWP5YTx9UjP8DMWZAocEiCHWz2oZ1cVEpsamPj6BTfx6EiESrFr1KXFGQaoEEoJCqBNR9NwkZhA9"
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
