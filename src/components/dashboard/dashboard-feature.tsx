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
    "5qLRxRSad9EzdVGTjrLYN4ZxiRFWgFehpxZRG6dYSntveyLhxmfY6oekRTPH67eN56bUSbFHAKSkoRjnH1VWfK24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQF36JEZpUtZVYHEd8PpK8wrAtiLLTN9g4ZxWCfUrujGFxx1S8e4qotP65fxs3wax5HcyeaDeHdQW6tFTxu4sUE",
  "key1": "4ZqE674QoSHv7sVma2dXEu6zRHfvFG2A98gcYHXce9bD6T6NRhJ4L743pmf9UcYKdAarHYQjeo3ewqREg4FR5sHw",
  "key2": "59RUvbTXG5D8qHviHjkMuvZCXLrFFoxnKNyUnVAc6PGpyLTdwGsjofZMrGKDSY1peD2EHRESLYmzcmhdcsrNqM72",
  "key3": "645PGvNU96GuHnexzGSZ7kmLJVKBKBrTXsySM9K6ZatR8bEv29eQW5eeaA6fTNJJ1Kw4J8H6BMeddS8GtxCAk6xF",
  "key4": "PyQTXMuTB1b2FEuGPi7amKVbyuR7FTpZ8ZgopUYRabUYN7vJmxGjVFQSTMAZnnxHSXxZEQRWYasFRZy5CF5MG4A",
  "key5": "2a7zwReZQJx9dw6PVsBR4FSgApra4wap5toB8vEyre7QrYMiyL4umLGRP5yjgatvdjXJ88nEKTXjYCpk2aJfDuvX",
  "key6": "3JrM2TsM3K2F8rjRdtw7m6HcNPxnPdTGnDNHrseCqzrByRbn9g5hYk9sTMqTWQpZqALTfdstYujdaAyFa95ojt7G",
  "key7": "5aVfvhUK4kmr7yGKAvZbqhQsSx5dc84rbKu7de6RwHUXAwng5tyZaTpHRgFXKK54GzHm1BToqhYK7g9fY1KnM9PF",
  "key8": "5rf5T6GPENgzxYBz3j6C6MuMGQ5E7Z4b1PBUyQTeuDor1aHK8JrGTkYJfeJa2dxfWceU9ZXxf3TZRqxz2fyJc5Ud",
  "key9": "5xnskZRb2UhDVkcuThEUUdua1ZNci9xxqFMUPq6G1JHxpooyPEYrgweUPB5MhhC7M4efo44ezRzLLt9VYcqDvLqh",
  "key10": "5EXWXRMEf1TG3us3dowbsofQVT3uRU54MC9EnX4BTTptKmAoAwjNckw4bfNgp6Hjn1bDsXBxCBtqEz2c1fE2VKEY",
  "key11": "4GxRhWpsGUYz54yb2BwF4hUFXaFJivyTa3HX5yQqS4uQoPv6wBUa64pKAP9ixsK4RYfzwughqKYaSmCkYs35UuNd",
  "key12": "7S8gh7QnPSeEaaK1qLjFfarupZZdKLAk2ZxVBDrDb8mewyhNVFvHnoQWbvDpKroyV5czDN41cfTXJmjQ7Rx1MH4",
  "key13": "4bxusbtPLs26rVgaZFSixNcZcbRPieBAN5DjhocG4ymg9B6UiU1JZShSEDTybgPh2ynejZMzA9wMJSqx5Sh73LQs",
  "key14": "mBjFrz7rst65y9gWDe1SAHfQJzMUjNcPkP8ZS2r7N1apF6gWu2apopoDZC5fPPb2FcZeKt7zRTBL1Vgj5GCVnnL",
  "key15": "3GWVPUiwXArEXB1GQcJGqrUujuqF8fmmLBbLg9NqAmRQefC7z1qkEWGmxAxrxd6kj5V7KjEpZT1oq4jdvtQB3A4q",
  "key16": "2VB2AUP7Cj5jZesw7t1FXfTJcW78uGNMKobXob2ZU6zd3iNmEyniSwsGRL8tbUPoULpUVj6APgK27BZBmHakMEkD",
  "key17": "sVNcwAf2irpHu49kqqDV9oYf7snXhvrgKGTqgt7MCdSSaj682vF5xQTeCt9QEw8gvjnoAgPDeFtFPb4SYMitFSo",
  "key18": "J3ZeM6ccbd1yBuVjdY56zt3F8m5rS8LGV1dtAjSkapUNx4S2jqbbZAe7if2g8yihxWyfDGaJY48ihsco4cg1zmF",
  "key19": "4sUjhvrT5X9jjFhhuBNTFyd9m1kwPSzZQ5PmTCvnASUsLegnXjFhM8RcnfaffZFGe1HC4XCCJfqeZfeK1FtAeTgo",
  "key20": "aiY9cZW3hrJnLhqCTnRNXdT7RthtAvp1ANLingSfvLeWq3JajWErwPYWAoxR44sEiZ5KcJgjmStuXyFoBTPJTZp",
  "key21": "5ggZXCtcivJ5wXE835uY7dnsunumippbAJtV1RdZgHwRhdRGguo4bSj5dGDV2KEGCUxUNU8Uhu7pGnLYxPEJZxAV",
  "key22": "3HCQuxynGtHV6sirnSWvFqaWVuQc5m2n4K2SCjmhdH9H6HNRBF6U9mRtXzuLHdAdy3CoSLBKiY67YMAYAYKNHvvA",
  "key23": "51vUs2eBZPXyng56eCGQEevwVfFiBuenW8y3PK2hoUoyhsHufpAfRgG74dPy4chwD6GSCSAZgHP4tGo3wV2iUFhs",
  "key24": "5LktcDJYSDX17a17TnJJgcpC8NU6FW5x5FeRCZzSe8QkUQah1QrbPKpffj7MBmwiA77hDdDnm2GJUwapwJ4ZUdSm",
  "key25": "61qxUouFXtQKZ5LMdycGxkTQgxctqz4uK6nh4Moi6pwpnvHZADs2iCKTmdMRj9mGpra4dB7RjiWj3Cy1sEbvwchQ",
  "key26": "36xzGZDrsYmxDT3REhphqpbzJJjZCaykdgDKCGi9uT6XM8dAa4TmPBpxhCyJ6mK5UgsFTDJRM1NfRZH2WA5xae7E",
  "key27": "3b2i1EURQ32T3jajxrxEELMqYz1MXK2AQRi1QYhHG4WRPr8WYWbPMNwc4Z4JetLGdtirFiuSyw6vJL4sTuKicQMp",
  "key28": "4NBpV9TopZqB6Ff5jasEF4oiCtbjPf9vovBZqHMP5eTHfe8bh8PqUMv3mYsrzNEE36zNYLms7LPJFNUujPFpuMko",
  "key29": "5gXCF93ggsCCaT3ByLweX9smMDU7SG7FB5aNF3Dy2BTJfEe1Gc7oeW7tu3JyUped9pu1951QfdvhReMnoYZqMU7U",
  "key30": "46uHRM38Dr6TSrdGi176AdFjHJnbAmt7T7XVDZKnkzUuKrzLpJBjRiQVTbg7QhtnjYPGsgpTkZR4smonfM1XLshs",
  "key31": "3jNczNKNtjP1wCMcsAHaUqcrSaQwhmj4j3jd2DWFcktJnPJSRiF89DEBqnz8Yrw6tpD2uV9FkMpGxnoMCrZRfZML"
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
