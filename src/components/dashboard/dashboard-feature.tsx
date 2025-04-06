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
    "2bUfZWLXHzHEyZ1Huwd53USGi9AjbaDvLSMoZQ7xWPvq7jW4TDY7myrDjcYQc5zSPnrLSunCZ6EyUR2SsKZp6QiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpthTB5tSDsE1kHsYBBJnjTRqfn6aCP1xEUt5rUShToPj3Kc5huFpFigJKKmX42yb9Vvesk4j1NJEmovZ21QNma",
  "key1": "2GNVoQV6TAuuGpTHtG23JAq95omJLGAUEhr25NSBy5953Fr4YehSaFPTpzF3xoBRwd1VGqFqdYnguH4zK7SvV3ih",
  "key2": "4trfvSEG2aWscqDVrZ5AgvZSaAGWwpnHa5hyyzn11HgkrXfqJcArdQK47BQmQ7BuEqJqZPXqJwxqsH5XWhMMYtrv",
  "key3": "559KtkpmA9CLEau71irzUxEN2aS8uDQK2rRjto8XKgEJTPF2LH2ud7evHDeiuDc6b9eQJoU1RRzCZqbEQ7XHBq4U",
  "key4": "53NCvNhvfxwL4X1VHuEefecdhcDTiBferr2vZTZkui79xFqTgRgAXzW4bKt8D9wRAkDGFDLbMvHh5Zrit2Ra1w2M",
  "key5": "4EffmtBh37d5xLhSxQsqsampko6mSTiqegYgrkHJLBurxUsdnCuTwhE2i9NeoChgRFiD88H2bjLKTP4r9Qs9ZDyJ",
  "key6": "5wL4TD1GiM1kZmDbCXXn6skUcKyQM54oxzRo6MT3ubFZVjcgF2NMEFaKoJ4iEHcNB8y3W4rCj1fofrimQXLUGC7q",
  "key7": "iGM5F2U5jiNufu151WhRKXBLTP8uwg7kZmhavxX5duFfsUCLmdy7GATYkfeVytpvxUWQC7u55w2gHZAAHPB3ARD",
  "key8": "tRiV4LNA4odbMWn7Dc6i3f6yGAh5BQEqhgDCr4y1yGHXGaEnh5GsHRa9Z4y4mRxB6ADs8FSJjtCMGtziBw4hVUp",
  "key9": "26PJhaVxv3EDhusphMAVyUUZCdKgiRfPHUCMXVd2WZNnYLRREyCG5vBs4EEFJRj9RqoSB4Hhtf9zUKZQVE1edXNF",
  "key10": "cujfPNoX19HyyNv5Rqg64HVp3LTvUgrCSBe5S4WjtM3EaQ5vpthFf8NNx9ewkSQaAEvh731ze4vxmzcyabuubVb",
  "key11": "5WrH3Z2NXPaMZ1GDAU4TXp6ahWvL4c3Lp4CfYJ88XiFSoZJLxGXcP9cSELgB8QGHXnqY6XEWKQS8EehkmAnb2SZ2",
  "key12": "2n8iWqLLr347Ph5zjfqVDnYfqF36HayMQhFaCwCaZzp5dT3m24jV1n8B8sngeCS2H8xntCx5ogvGBfV6YoH9XVME",
  "key13": "4hGs16vmsxTukYw4wVJrtYtRuNBFz2bT2mHnkYPNGhEvK51adS3n4sdedzRz4N9BrLrmpJpVKg1GBetKxoN6tUHc",
  "key14": "3PEkGq8rjSRv5LkwqWUTdM3DgxpL3zGyVrskXqvhUmjr8v8wQpNSfbxNsuguAb5QKgLXXATGfJdkPRZ17cfTapzS",
  "key15": "4sZ8g5T1q8ZP3ryzAynnCY4tpTpDcWR5Fu8P3xY7dxQAXxiqmkqzKes6GFVv5oqxZxUQ37CNTwsveQd4kbvFSKTB",
  "key16": "2mtCJJZvX5mV4TqUAhgMGvmtpB7bjuTucx2w68pR86izhPtyuMqfS4H6FxBABd9CoGpVc2JiWno99UztgvNgFr7z",
  "key17": "w7CLnEah66xmh2EDxU9vS5XUofiuQSVvgcExFWzsbRQPFYv5joQfnWnyV6wZxxB54Pj6eiFUf8Mp7JERNifbpYz",
  "key18": "4wVFLrepjbBWAViWF3WjVfwB68jmKBYUq8551GuhyFnFBxjYnEd7ygeYitcX2XwiGDGuEPPiaUw4K5aVmY34zT11",
  "key19": "575v7M8bGcHXg2DW3sNUBQCriePDF9tK7jvBRXG8bp35gAHeG56QvAXavwDkYxqCJWq41zqw7abWwTnjbURRJ3MV",
  "key20": "2jYQ1XBuS6ZKWz8knBb7y1pRs5SYFn85A1xqxHgpVjD1k9vftH3bfMKRy8NV2WEzjXk7zbiooW1KgWT1e8M37ui7",
  "key21": "e5bSh5BMdCoC751BZuddwuiUj6JxUNZ6bPXBxXXwscuxeEaDmu27Wi5SYJj8PcftUG9Z4V2CuzT9GgUc9n22FjY",
  "key22": "5REK7voQd5tf2jhDZR12bzyYWvmY2s9j25wn2TjQ2YBwze7s2fTZAovGTqwaAbmNjrUdJkis1vvQ842WHQptMFiY",
  "key23": "5KZj6cKd6Ao9FLAoco8NgybMdoGFibq7nQSidAszgQdBPTWC7Qq8E2bXQEx5EdUCaJPjuZ885yxnqqHdhw7rh7RP",
  "key24": "3ADKds3FMsFdpxHZKovKPPJVbzmoXr5XywsVeoaAZFGqZZt9KszBbpaZnuNjkWtH29VMR4dWYWzVtCKiXhj9EEr1",
  "key25": "5mDnxC5qDHKamoKKozxvFNio8YZ9Tk3NmHEZ6shgMRDpTmczHoPNt3c85yaEnHh752kboYK2jFYAYcGBDSDnu8xF",
  "key26": "3Hae9ApYhqg7Hof6DtU3wrWSXmYDAMQcyX7upDGHitz9EujiNBdhtXgrQxtdzkxHc9YwGK4MbKpq5h6u83SA7KGf",
  "key27": "4SWkYvobnbgF9Vv8ouHHx2BM5Dj9obCqZ1gjjx8GRL6Dqx7fod8xYxS9YJXJ6PhKANbS43EjHeisuwgFXhEDq82f",
  "key28": "4FVQzkhrrzvfREWgW9yAgwZYeTTHV1y7WjBSbP4RX7uEmP6ek89muPmvdaVtGon2iE6fYqekCiUNXjYU6qgXf26G",
  "key29": "2kjtJZsJXmr3D4amHRsd2DtRyV1pSTuihTi75KYnNhoMiV617jgVT2oz2yLpURgvgKqaD6FgmdKdVrcUk4uhKz8G"
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
