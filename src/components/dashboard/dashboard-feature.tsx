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
    "2EfdrUBUdJ6wgXWD4eNVbFrCZ4T1AuuTQmepDnHEooWCRjsusnfKggGN42H2B4JLyTfgDUJeycPJY5xCNqSRTgV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVynWcGwMoyi8vvSrSiKKNYJ2f9jQgtnMEFWk3GU6fK3yFFKompmYH5bGJH9NGX47S2BqReFJckSMCBPUbyELHm",
  "key1": "2RkbVQw68bCVty275AP5PBLP4Gv1HK1wxBdH4gBg4dXPnUSG5DavzLbXwTkLgoD73cJz9JkxTZTkoWo2x6icH3gT",
  "key2": "5KrxtNYjnLPr8MA1FeoLF2MiPgqRmUynnhZYTaa31oKVBRvARWHgPCHG8o7T4Vw6UjTGNJ6UUoWhebcLCJ9Wsn4c",
  "key3": "4DXDqTht62KHHgDcmtYXWN1P137EoMynH5aBjrS9XeR9uQoC8hApUL1kctMkkSUtAPZYPYx1rsFvhj4jcyjzEQhs",
  "key4": "2EzczH1f9ZfzY2vDzU5kbU4DEo1Fx5tZjZoAad4ZvgscM7PSaR1UkXEgbgMWr5jniGtLXzG1ua7HaBnPGZUbEMxT",
  "key5": "5HEcmuvuK6f253exdB2hCoiaQw4Tbt2HXyMaNWmktgxkz6WEGZGZ1Sd4e9xFm92dQ3b6mXV4rmoGuS61xYoobFo4",
  "key6": "4wmp5vbvU2qb653ScyKoLpfqMNWYDQYpkzhpxUJYP2Kqe3pT28iZqfc8HaLrsbYtGKjHkZefhHc6pAGHViUKRC9v",
  "key7": "3YmdW5MBKbu3buK87gmZT9DFxEPheBgufjU8R5PLjeK8gsmEhMjsipU3CC445xCQjFhQfY4esMYjc7gNqmFJZXqZ",
  "key8": "LNqVBhd8h9j5dg6n4CqsUxFZNriW5gNRwTyHeBx8f3ZpTKj6gt9sFu1eeL3BUZCxTPNV4bS38U4c16uovRSGzzQ",
  "key9": "3NwWHYMvsG6imQWTT1Wuzzk4qboG4Kv5QvjSws93h7GCXFwNss8qeEhgkKdKwVFStqKRvzZEWhTos3qMFKgFafJz",
  "key10": "2BAbuCb7bjK3qAcM6teJYLJaQ73Zw6G3aEmRA7LqPhftM61BJKE9tSWnoBaVojzc3ZcLBWom4xVTmdVL1CyBGvv6",
  "key11": "44GvRSWHmLhrh3ftX9a15ENDRd6uc9s3QbR1khNcViig9knbQvQjnp43z8A32B4Kb7Vagd3nD4bJXjpRrjf5A9T8",
  "key12": "2DqjNUGx8MKNj3e3AETHWKoiuLMpxtSkxGGnWu6beNLHmL6dUpAupAXtuWvDKQvZnLkdWvsTHP6AwbpPxZM3FUqK",
  "key13": "673pq4HAKWG26Wta92WTtpArEEp7MPh7VpxX5imyYR26Epp14MH31sGgSNz88HNm5RLEVqKu99BH36BwX8ZLZhRk",
  "key14": "3hxcaQG63dwskR5LduCTm5JmzqhRKaT5FeazCPadPN6wjjLdik6MhGutB91y6n6tYk1biuPmLrLHTZDbcATxTyJg",
  "key15": "2FeRzxjHazWRRrhb3RzUTxWwvVUs9q9bNCGb3yqr9vPyvU9idUVYCBUPq85vdDa5Gx7rHTYuef5xqYLgg5iFFgvi",
  "key16": "Q3r2yTCTshcFzVNgNw3Vp28873EwP1QdExBYXp8C5c5sZPRYVBR48ZqShfj26sYtagE6en1pssAn2KSCqp7uV2y",
  "key17": "L3sDjTcSXhPnqdg75LVGeLjV5XcFsJaT21VQkrUYGgYWfUVWFtmT1fRbmqJwB7Sv6ocp9HY1uUp2a6zR6mb25tz",
  "key18": "5Qw8UCyowB6QFJedQhLtGM223h4RFvF8j2y8M2H1my3nKkNuCCbWuqs4yAaobkSWkER46FeedXNBJ1rM39KURQwa",
  "key19": "jxyL4ef19rvsXkutLLQmKaaZvzqVUMCFHWugf2RvK2TeHKabxE87eohNEhNgt9JfXd27TCPBXzZhBimV3RTUnUq",
  "key20": "2PQZzQgiJbtpuF4eTbkSfPaLEiGe579wfbXiUEAbGaVMQz7U6vBU4v9Q19JmrCcvWcutTzuW8em1dfJnVdBdJidm",
  "key21": "44yC9vk85avczJwFJJGRC7SZRnwdu9GXff9gH9VfPPgjzdoUV4LZuJiBJVy3LxzTDT1eoQxpubhpe7CTijWVdETm",
  "key22": "LC5osfgs4tvw9NMKKqvEJep23FtCmE3cMaDZHtNgvG47cb1Kv338jrzb5JE4gxh5bbB1UcsgG9NHk93ZrB8MWGj",
  "key23": "2aqFbFBSCJDRd7rFMKh7ks2N8SPSoud7D3nNniYtbR3EJYDDgFHYUaKvMorQPfzDskUN4tkcoDCV8eY9RSfCrmMB",
  "key24": "Y655KULMhjhWS7Dvc8PVQtUoboKi23sumD7VrJZcBasW35EoHJjqXMKSYtKVpX9uEMLe8o71WDeZY4bb5BwQi2c",
  "key25": "4WqmVEr91UKiowQMMKECfxD7tFuUKzSf9o1Y6GjpXVoZccWyBMpCkG3dRkMRUGemkpWe221rcH6gwymcRcb5dkQM",
  "key26": "4pjUTBgukjGwPcsRSFwPAyUMe1Ux8JAvFykV6QN3W9VnmuCpa8dAzDhdFUP8ozebFcoYRaeJwVwDvrCNE8VtXV6T",
  "key27": "3Z7YF5CpCVJx2a9KNUyL6q1otntEC984A9aqrhe6RVzMaC3j5gXqv2PTTM5pwVnSwDDdwjktDyrrfWcTZg1ax9YX",
  "key28": "3xoDFSA1T71oiKy6QCnc8dA2HZJrap1vu5SwAo4tphofcxTwrwqixawBLkfvUXFukwk4MkPFUbGPdUQZZJA7pvVT",
  "key29": "Sab1E6DE25Xwfyu8wMCeYwAb9quuMjVqbsSH7hT75BU8BPnPYM8mF9BSGLi4mK3ijJECkY3wFbEHDXG8r1xDxDw",
  "key30": "27HzSmc53qdYyugtgXUuE4T6JQaG7zTazueJc2obSvLwRzWLkYUVt1DBfDcJDigResLXNpELjVykWpnmABAvrFdG"
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
