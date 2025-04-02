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
    "52wXEvQSBYALUS35scXS8ApQPS2vHxWZ9fWkSNw4xMf9prR3TnMVHbLREGQeoMP6ZVRZNnWGWbrnaVwAFeN9k2cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPLu7L9EnbKUL4dVRkz6D6CzmbgTuPhnhkwpLSEubG8XR9Nz3FfSgKXoS8H6dNtawXkjKzFi9zx7Co7VARypaJL",
  "key1": "2AYfgjNaF1MBcLQSVdrjWEUWNLdMCFcKx9WjiqW3NywzikEj4JPyXpJKLzAyV3959B4yRL3Bk8Tpf7FuNsuMzcxv",
  "key2": "3n3BvAArCmRGDftYAbgyfvgDsyucWjH9TcCLu7F7KaoZod8wp5hDBodNWFjEJZWZyC1L4RaXruZ7A8wwSvFgHBz9",
  "key3": "sa3KuiMzt9CKwSgkKzz3kQ2thp7ARnnsKuwVM9TGJJRqgoqkkxwtPi5fcLsQ4ynfZeCXidxs5iUNRCFByWSxRsB",
  "key4": "4ffZf51SWHCErKN3P3cunCLpPQvWetjpTHsyZVZUASk8h2yNj4LSdkHtSrZZBfdQS5BkUWHDHXQCwhmK2G11XpjD",
  "key5": "44sNDcjYqvteM9n7T3fQtv128oYi87hrWBky8zJDC3KpmY8P65r6RWarsXY9HEpspUF7ah79qV4LxCNE1EEc53k2",
  "key6": "38vwfBMXTVH8PdGDvBBjLTNYgNvVT4sYmf5dqvNADhqaD4LWKVXWfdEH2TZL2DZ15VQyn8hZmd1UzoSkPTmsgEfA",
  "key7": "2RBr4eJLojRiwdUkmMx2Yb8vCvxT1Gxctfy1p99xjanh3Y8h95GRs2g141XazXKZBaEs8aXmGnDUqi9BiEgPsvZy",
  "key8": "54tqMEY9UDw227JLJcyQjwMLwC4RBAHkB1WDi4jxQkhfd7NpjGT6pQqowzfi4PeyvaBiNPTS7kcBRAnK5JKcMcVW",
  "key9": "3oM6yGnBQsJkoN4tm3HhMm1RZ7kLgsasQ3vnJUaU3smC5Vz7JGbuRyc9puEWgWeRubzxHkSX3FAiv5D8AGyd8MBd",
  "key10": "4XTbg2GbLDmWnhkM27Pi3n4VvUN6eY7rovGNUNhJ2JCjFji9E4nguNZyzsd9s4Bu2NHQsXJaFWicjWNy4DAt4ctp",
  "key11": "3jQnwyMf7ebMsUfvjDz4ZEbR7qKYYv3X3h8NhzZ1KwF4N49hwv1Ci62fGTyMXQNgJWFEWEUQEBwfFjDgPFGCGiqK",
  "key12": "1LDNw4kaixtS4EoAMVEX9Z7GKus9isnxNgv7cquF3j2x5fu8GtgnP8Nz8jpt9QG8geR8jEBLgfQ1eXmb2pVzWZa",
  "key13": "4LDhqRaz47acjoGfxzrXTt6ZDcRnYcPj7ifN7DzzA1RowVt6kt3ynpzpkL9WWzk5vj1HYSkb9ZAZxxmrokrGEEwW",
  "key14": "67S9qu4u3fpcXRDRdc9JRR8iis5oF1irv3GhDx9KmmSLGeveSRNerMC473KWHt9AY2W42LE79RFoDUqgtx7v3KgC",
  "key15": "3Dg8mSsB3BTYQdYsWDpZqFK6bjuGEXLcVSokXxRCek8EKq35LUERgsDmc6MQr2xmmKbhXkLSF8zvbufPFZLTf1uF",
  "key16": "RVA6o7mWTPFvzppxtnENwxV9pLwGCFdDoQHyhpSHxCeWKrCz1fCr7wCQpfTfNzwC5tiPePrFWHtx6qbC5W4kQUJ",
  "key17": "5ZJ6t8AEE6D43iXGyXYC36JMVncvhbSQTeQ47MMjLUvr2TtqVtCDTFnDBXv8ajfjAQBpUn5fqpjjcbkFjGXCjkb7",
  "key18": "59eQZsGP9qp5Q1xrjZqR4S1SKkDC78VAvpBn7UdHFyFaXnJJZe6gg2njCPKo2C6Fq7GwjqfDrMNYhZ6hDrwKTFjY",
  "key19": "3smyiJsbmH9jxqQ41oX9ryTPWm2i2hjCSLtckwHY2oxQDxytUPUphj5GKSKnMB7TCnV4KAuXWae9dtowETDRPFdW",
  "key20": "4NjMgNjTdZZQBvWWSVwgsqGQBityzpzdFB2jdH65cWoMt4rXUAkh9DKEDkcT3mHFcU56WSsYCZJsmcfUuovVfLMR",
  "key21": "QzveZfhsmRv8w4TYZs9KYV6FTN96rjzsfkoXTXQVHSRvooAcxHzEBQtmYwkBFMbbUA4kRvGqrRVWNUAXgKYKiZA",
  "key22": "5akUrG3rg1LaQc7SJrYuv2b5xzFhxQv8bvMo8EdfCiuXrU2kucJJDcwLzg5b27gFSmjzLTa5tt78CF68KY8GLGBT",
  "key23": "2P6D3MZL4g5n7SjomwwZ4TNdBCkiHFvZf4v1WYtspcM3rrq9HVGH7auavKksKNcVtj2fmN8o4573T4P5cN2awjc3",
  "key24": "bu3gpgBm7yTX3LGAzFQTqYKTzcAdERMxkPdLUU5vqsHqtadh9mFTJYVFLFSmSu8X3jFS7JhLSLAY1v5BB4KyHLX",
  "key25": "cdcLh5qEbFnmaJUwwco3qAfqCd4oimmSpWzkf48eDi1mPP5pDUm9a3CmThJMh4hx6549Ymk3Gam39FXfb3SUdG4",
  "key26": "hYCyonL5ha97onBReSGBVDtuyFZC1YMNXkeJj4sqYfwCpY3oVrtawAytnE1Yj7aWuXtrw8cwSi7Ebf6BL7XGHYm",
  "key27": "5uFjeHjTw3C2wnNNJrwLEtfr3H88CCKNch26MhVesJjuFVbqFYnKY8X6QZA12pt9SKXf5UVZD8QUQ5Szs6LUMCmC",
  "key28": "25sniT7CpXzxXsfcmUZQo7wymzZatcGRt4whQiBbePS2wT9cGVgGecwM3J8CUZCHoT639ajvgbpJv1SNPeW3bZPZ",
  "key29": "3k87sBtLuihBLDXQckN65RRgNotpp3iYuJ9zsEh6TpTRcT5W7HmpdPBhfxSGHpefUTvmMt3vTzGmyEiLrR8yXjBV",
  "key30": "2kUsnFvvTDYJcjGA7z2xksF2SUEsHzMXyGpXijL4Q2WWd5KiwwezEnfcA3kbcWg4vc4wnzV8KnxTUt3PPCgoG3qY",
  "key31": "5eEKCkByfG6WYjaEQ5vjajXKh33j22Sh9QikcZvEXKwHvzkLM6dWmUEzv6MyKyDJDgaLuBaQhJx8HXxY2nd72nKU",
  "key32": "4UZY8iWg2YQSnL3cf9nVN6xcbJRzcSkSRirWDmSDUCTrupWxmRmdnbHZuNrAhT7aiPBeMYxx4r8fwMvnX2ieGYC5"
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
