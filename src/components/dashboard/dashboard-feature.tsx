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
    "3jUyocBzi3zDxFsWJbYTa7vmDo6Vac754dsvD6hh1ZDvJa2JjjgZo4L5rmpMNLqi6PM16p6peTzKiQiJE12jE64r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2t2zVmq8c7pohWjyfQqpjTAeNAACcVB5EdWJsnqyJM25j2JJ7GiSCsDDd2Mg5MEa4kjdRW22JCY28qbHafjU98",
  "key1": "29GyiNzEbKSqTZpyop2XejsZ7Z5tPEhFvkkwgpCGmDK4drbS3aXsSTStRcEQVPbzb6nAYzcf3yrTn2ZZcv95uuDJ",
  "key2": "2sivNyW4PWPvAbNytar9LDhAm6JVXkwfRL94wrvrc7UBEQ1ZngmKodts6PzYwjmPFH9ZjeU9NuXMUSButm3wKZ9j",
  "key3": "3Vf1mnyUfRBVDd1WkQF2aXSri1hCQPLCWZUzGh4nMKScfjpBcAY3Hn6Qd53xgAsUHgC9e5tEPp9iJL6YtFf9nEkG",
  "key4": "5cddz9B9ynL9yW4ocy3Jd3UQ4K7Eh8Z8n29dDAUn3uGWghgvc5H2gSG1W5DHL1R2c43vmmWYPLsT5Zm5AsY9YLxG",
  "key5": "2bn6bUSsJaz3GJ6k4jZGcz7cb86DMafoqovpyhZe9hGAg65oay9tZKLEFKnoi8zeJ53EDBxnECamfVDW5AU8n2s5",
  "key6": "639Uf32RZb5XHyKWTNxL8BMyYTULnHtiZGouCPGZWKJeHK1GEkZisjemYtURMYETEfpaZ2AEhBLaR7sby1VWrvW6",
  "key7": "Pbwj2DZVvYY2xsaRi6WnYi3JknN88PgNWKZuiAuekaUUGDDXytcFsLJBHV1cRVSYBZgetB4nyPX9srFCGNfGcsX",
  "key8": "5C1xVXjweb4aHfL3EetE4THvCoHi8R3YSEmmoS7MzjfW6wy7TYWtgQDur9LgDp7k8MA8WzWFWqu4zSxFLsBwKNTZ",
  "key9": "2Zpb1Bd6JXJM53wE2MXtiDab2SEiVDNEgm3fqzCZHmNphKui8rwntuweQxkRwp6qjpFyqQTXXML6EqZzYhfrrQHY",
  "key10": "2Cpz6Auoa8kPcPTAN8axVkQHFQ7XRpngYfBRZQc4e6LxtNVNWiEMiaYiurwm433NkGTKNYg683Gyo9prNoLAQn3T",
  "key11": "5CBRp3z5vtBa6nncfW9JBjPbPevKRiob2pCbUvhA9dd7S2SPutY4uW36V4gnZ4STjStzn9kRjWcHs8RuyE4KYpRY",
  "key12": "2rsu6e9nnQN25aKnd1yaT9L98HaAwcJteacGDgKp8DjHHDdYSoh6ejHHWRVYJ1rtAdDL9Z3wmf9YyrxvajZ46Lk5",
  "key13": "2ba9pLkckFKBrdcSCufXnk66dS3BYFUMnEopub1ZzLs6igrxtthjBVq9pWmv6Eh5bPa5kmheEnjMh9X4y9eQVfnh",
  "key14": "5LnXF5ihDiKVbvFskYCz3mumgGdgXXXwjmibCRUhKxdN1RJHZjcntqCJSqrU3dJhxrbXRtKLs1wR1qwU6vgUhWYf",
  "key15": "5WPBps757NA7hnN26d5zJtmLApfr4vHmUjj7z59gSXJ1NqHfSyNLXUGJ8gXrUD3NiGhrR4LYmVzmJUaVGRNgGCPx",
  "key16": "2STxv6qeGERqwUT5j82Cfd5oCtnhfMPmYGYGE4jKAxvYK3itZmACm822MHusKf8SXVhTqKWeztTPYrR2FyHKpLSa",
  "key17": "33W4bMEQahnRndxqGV2ddk1vzqGCtYqdXTGdjoUSbZnzLhmtVNetb8Sm5PbgjgP9UrXcMTgPntJxt8YbxvGcFcaK",
  "key18": "3ns86xb26SR1G1ScRs3pTuoHTc5Bwq5WkUTsSoYxi2qJgtRsjMxJAa1ayU6g8mQHd4X4ZJJCCxdmvddwnzrfzHWD",
  "key19": "2T5azAT7vi969P83hQvMJbDVf7YQEuifCPe4nNzeJbbf1g6nzN8NRG7dXk15ipP8oWmxN8L8MxEjmwsMwnmeudp3",
  "key20": "66FkggRmuXYqsjDSiSyVBPhrYdgrPYiDrh3kEr55jFaCvF2WD9XPzffQAjeSi5iUXTdHt85nB4WyQqwCiiGhhBPb",
  "key21": "jAMzyWCNNdb8JBF8ooiEfkpuj4HXDur6znaNgQeugj7tsavgxLUEKPYbiHE8X8sMVJt3upN75pcahz2mg6GernY",
  "key22": "5wunwpqBj9pDULkxTmYXY41ShspPtDR2H7Y5VM1nuWH3eVvDMdayTawbpxrAEeQybm2QgRXZkHeLiBawKSX8yszP",
  "key23": "5hDxLcaJfZMd5APraKQCQcDFkJwjooStskGX1KXGteu4fjtUBovGbXUf7hUjm8CqwPtruH1v4vxQzzH4HRt1renZ",
  "key24": "21hX7trTQdL1j94D8yzJYT2GcyK3VvbxQYyqoYqNJHK55fX8ctE2w3VNB6Ww3cECPME3csoeCJXuV4i1mGpz5wXh",
  "key25": "Df1QzXYbB6JWGHhQAFW6bZGYrL4VVF6WXn9zrjWWg18t3nphF8R7y24MrWb17JRgd75WV4dXVBYk2ysTkwhxbhM",
  "key26": "2vYQj32ytXVthAV8jxLJpRchpnro86i5eD6JWPc83vqkuP5QjFo3hpCWCPfeDfZFLeeRa2Hme7h2cj4PwRw8ZKCX",
  "key27": "4epg3faTcgHLQioVF7TYGMVn2sqCgg6cijRLPcKvjfET3Nh7vsPq1XfG5udo7R1rXafWY4Jy7uSSuyXrwNXdMgB3",
  "key28": "myexctCY8v7NwsNSQnMsFVLfrgBAsGV56BjZdUWiUfkrHmwK6S1oA7nQvBzenDDBLHfZyuGPurMPKfcWV2vaARt",
  "key29": "3PtnYzqZdukMV3THruMTmXFp7qFgxaCVWSRfrdPVho8g9hQKBSDyjJtjy4bo6sxmE9VXGH1ZEF8we2RLh8b5uZpu"
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
