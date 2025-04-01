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
    "5qANg8rmcNTeU9uo5hd2A1Z9uSSxxfNpzppKw97bAijK5aMMrbs31WF4Z6UEsYVhihrWkyDEL5LTvxgMj5RxmYTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsYmBE6UUpFyFpydWwd7GLHj62TArEaeUqLaA4SLtMA5zDDxyw4NvmHGKbrETTu5RJ5hn7FqFGUF7bjJ2uaaZNF",
  "key1": "2erzqwzci5izhTBx8Mm8SNry1Sc3N6Pfv4DztZpXJ7QbaypXcAgCYWjxtQLrjcpEDxbNF8ScBhsvtqoU3GcedspA",
  "key2": "4ovM5ZNZHsN2qvHpvMNjzFFrzX6n2N2rh5pvBuXBpAybb2VYSFuURE42GwdnpCEsffi4UqsZVNHdifyuFEjQnLT1",
  "key3": "v8VUkMr37cdvkGzxdH3UA8WZPoxqMXNQEPhzotJoTvEPueXJSQ5CPMnWvF8HPUnscZ8nydobP9R1oKcfbvdCggU",
  "key4": "2n3nBVwz2wcPaJFbVPYFzrw8A7bpdfegZ1R69KHnxcXyhhnEjU2fDptZESFzaVQwkXQAqGnnzdVyKJ9cRMkd17AZ",
  "key5": "hgvhsoNFzwXpq7ViVMY2YroB9gDJFNZeYdJQiaLrrfDKLQqA1LvKzW2GiE9398pMxotFYuhGWoGPQxC4JxQGLXQ",
  "key6": "5hbjiwLVZ3HiiihRHNqRfgiH6F2tpuJTLNoQuY6ZrJVVj6FJVZVcSESPUB96c8mjFTsisHVJJmNWz1XBTTrdEHv3",
  "key7": "atkqEtD1nUt22iPuAakLdRABHTUYdfjp23GjF1cpX9i2ugFRFpUr1FGYC9mAZgRNN3FeSLoW5sUHvZvnSmq6grn",
  "key8": "2qj1ufkwHcvGVjNGqqybxrpT6AtoMabJu55HPWUyZy7urugrzupoT5Nk7JGCwg4bbBYvJ9StK94KHtWqS9L71J3e",
  "key9": "2auTs5Rs1J6gtgN63LpbZhD8KbnyKUcAUrPiuiEyxdVaDJAV2kYV8ixhuj71tawMsagzV4qDwRdEMFLuqrTCHKuZ",
  "key10": "2NPpZCTuTzDdK7s8mDGjJrLEWUfJjtKzsyEz4DFaG8fwTfqeUAao25TpzoD4sme9vD4D541drJv2jnUbX2FhjEar",
  "key11": "4DJQUEWQqGS5kKRWShtdLvD4U2jrqg1LwF1mjKPL29myhmoqnRm7zdULj24CtuLJspnYSf8oD2zYoTyPfMDxHMRQ",
  "key12": "mJ2g6W4g9kSqEu8SetSpQvXpyKRDZCTq1SggvJKFwZvtW3wDvzBoCY5jAw8Wtd5Pxn35kDwT6CHh3kBqsXbLMQ8",
  "key13": "TrtW28w58SXkGCszxZ5wVsZb9Jt8fagjH7g5VqowMW6KHeahiRq7j2UkiXLYtNTCymB53rP3KnN9DyGq5hnWvVr",
  "key14": "52BJbZqW7Go1WPzN3cLLkdP8EKzKU7LUFx2ec6TZE6MMMQ3uHsFivTvbgCrjhALPAtv7rDj2Z2sNbzvUzsD9SXa1",
  "key15": "3sQRhy4dEMEHmyXaZaR8WX1B82eJfacfA7RPFNVHiwQGx7E4Z6A8rMDmPAtMixak8cbBH85PDQ5JT9Z8WXG6rjqn",
  "key16": "uprQpuH8Uh1JDhM3a7KvRFJP2T7QiozAaEjwZH1hTQFpJC6CvgCyTHoFcoz9fEdyDCiYeuRw91KL6ojQELGkGtc",
  "key17": "5U25y6Pg3AiWXk9TjyyW5q3QUAJhGXGbLqQ3AHDLHfXVTb8XebZg4J1ndCpVgNSLkmgfHoY4noS7sje481aGK9C5",
  "key18": "5qLyxkRVMQw2WiQJaWvSCsXL59Uud8TZgaHYisXkUBrbxvLNaJjkWeonodhQB9SX7iG6JnFHnWwJRVGii2SmvBoU",
  "key19": "47qqxVZeyL4gDiEip7jqm54TwSeHvhE2NiaYHtdH8FW7T24zqR5A1Ho9hyqxecSd4qEMyfUvsk4S8hP38kVYi9Y2",
  "key20": "5fqqtbM1MknRyjfSdghsjeGwHXZpwy3otfK2TGA8tP5ikEPioizpJwSjKFRjXGrmWYuKF9qj97PC8yPhe77rzSss",
  "key21": "4WvkhdxHPkvvcDNjMgauEgn8PEkYPHpFXJeEAAhQ71voRGcA7E1duuv5UJNkZafqmhoig32MCE9oQm9vJtZe767g",
  "key22": "3Jr6E99cHchYvJBquk14qCKadp948q4zS7kCjukXHKa5S9XNMJQEQiu9zd9gbLtnvXsca8TEpzXMVyihdXRwN3zN",
  "key23": "4mLF18caNfvfFPmkFGbdpkbArfoSgKBtdKRZ28AbffgFyuxrEv3x7fjw2heSc1Aes8mrbbyncHNWtRL48ns2CbcY",
  "key24": "K89q1m4AtGCeBskZrxUF6uyyqArFnxfFY7q961VJAvXVmoTBi7hdtC9hts77wd62wA59X7GtXhMVxgeoPr5LsqB",
  "key25": "5NGepBPqxWMRJoR9pgNeW1yTZsW9qHzxsE4KwCn3M3XP6cmJBHBpWbvone9jCJ4mKhDhyZmMu3fq14kbEC4ADetn",
  "key26": "2oDhvd7ru2LrA7jCKVrTs6DijeEYqo3LpYiEVouhB7iVG3NwL3jiUeyrMXzrmi8XqG5zZM9xc8BMHQhxy2QE3Pbu",
  "key27": "45MP18NAHfNX8rgr67oNVaP4hYHZ94u6abnAE1LWpSERfn3cHWV5hgSSnrZjodeLfohxDmShBEKf12cYDWuGE9fJ",
  "key28": "5xViLVKNQUWWbeYTToT2cTBa817aT5htUSwdCUci2zUt3oQkMqiB5XiXX6u6AMzxzREg4zxuFho6B8bNhT5yCyJY",
  "key29": "2N9KWQS2mKFKpMsysBRYtWmwYjgxcNuL1kqnDfuW9Ba7rWjtvbsC88YyHHSECP8pEkWgmhhpfZkQYELzLSFaUbv9",
  "key30": "5HTRnnE8fHmuWGykSS1vqxmZaHB8xmXKQJD4xP1udseJpJb5hFwSBvGi98gPdaUC2oNDPqYaUts2u8YhZRdsmBAt",
  "key31": "GuzsTrzD7GsPhRAZoaZzJNdZEbQTcxiomHZTdHP91aJuCwmwrPWzC4kcDxaQjV645kjvH7teW6hJwLjxuzCZZcJ",
  "key32": "4JRU7ATsyZ8wgxLfguxMUL2y6tc6q4zrR8wJRDp6gt529P73V1BWPU7mekasY3oY77vczzsbZzUXMuhE3xsBfjGp",
  "key33": "43Aae9ujqztqupVQPKrKBciwE7b55G3g9iAsTFUhVehuwaZHjgYP43tQDcqcAzknmGBMMXUT5MTi5zY94AmvCaUA",
  "key34": "31NXwM4iP4rZBh79Dmpe2227V4uQ1EatNzDv5hiGpxoyPEX6HELuw3MSpeBRe7L7WxVQkLZh2EqYrGtL88kXJ7UQ",
  "key35": "3KUa3KNkhXHhcSDFMTP8g7Dru72CRTBMcTNx1gfbBGcynS6XWGXFiwwkoBRbxuW8M7sYmeEt4FwDBh23qdybgJtE",
  "key36": "43fbvEp9sf8jsHfEk2kr3dMcudZWhDCTxg4tkmDKasPHoRS7wGYJfcF5jKkZXuuXiqGi46zSa8TySSUZLTCxUxRk",
  "key37": "2N5bSbqeYM8hQDp27rvAsDXgP9EU63yq2hcRKoTgaRrw9gWxyy5Ha3kNa97SoUKHYPUPJ1HtU3iaSkWe2gWTByf8",
  "key38": "2u7nd3Q8A3xAPRDwiXwBRddocDQ4K9dtecT52RhgNVZZbUuJGwsE6qPLUNHWzELZzubY4QA24LX36rTfoadDb6Qc",
  "key39": "2TcsHq2c8kUUihgjAb6VLQR9Jtj6hA9Qxbs9boiGqvspbaCQj1AqKPRVCfxkyTAAkHJesUmv1MiMLLb9jXp18W2D",
  "key40": "3pPmngL4BAgnGVyk5FyHyiydRq2x6aKvUBF2h6mLdrqKUuSvRLZi4reZcphUrU8ocU3KY4Tn3bq5dtFMdrp1wMX2",
  "key41": "uaQFgjvZwFngM2q1CHimAL4uoX1K9gWGgeXmnSHqK8971RfUMP5pk2z7Q77AxRjARhyGXskxUj5rZWH79h9eJqx",
  "key42": "2j2rXLERgKZ4FfUgtEQws4J3qftm4xH5vp1Sg9Nu4nZViEGerHY6qQqB1JUZPW9sgaW6gSnzLVZJmneVqAXHDPRg",
  "key43": "5gE5Fs6npyt9EJ6ms1DACERqwDugcqy6CTKf4wNE2F6fFUuomy2u9wtJsKWbu2AqPMT6WYMjtpVcwrrBfVUwWe7U",
  "key44": "5BNGMnFVtwdAcrdFCtsp7kezmeQbSqDmWYF9Ju8FuKfiWZja3uh4dh7MpcxPVSmWP8mMacCPHU4S7iaGv9XEmyze",
  "key45": "vMSEZzfoVwAwPkS4XTmDcjCJsGAEBDsFg5ZmQSn9ZugWePnHnVdVwDWchwE5LN6o6PabUx4z67HhFfGVoAkN9ze",
  "key46": "3uKuX5R8yxedTQLXU8vroVhtUQp3jytji5hZ4Lui8wTpEDCaeJinzddZM6W3qvHjtSYmxXpuBcuXKm4MmniAztXW",
  "key47": "4LSm1HyywoVGKJNTQHj9Ue972Xut2AYQzizrzmkzJTVcP3az27zKdgSsM5E8FKEK3CLQ7ngfLwXycvyvSgoPevkm"
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
