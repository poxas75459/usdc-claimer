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
    "63Sp64f3Lo3cg7LX8gQvc72wACR1kUUjzF1k4JYUF2TsVysBc1g2KtzmztF99J5EHYn4fTQw8BMTYzZpjjjt178U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWsChiuxmo81rQQjyPg7Ah3AxrXTWKHTEYKXTq1nmu2B7ndyyAwGcfg46UsM3PghdxihBE2h5t8chLQo6RzZhrg",
  "key1": "2A2etj1spoQm7dmdTUf2F8wmrGmPQD5qXF4PUaWoN7auNEs5JMLARBTSv7gDwZ3dAKzQSPU9CnDU3XbgqEo3zfAf",
  "key2": "2wnyP4px9hPkuEfrkDZ9HkzWzV4baANyfmb9yxDtkqjDN2n92mxVtTTQnRY5oiPQfWyJfgPx2JgKYGPJmd6RM4Jk",
  "key3": "fJH6AqjyQpNQCboeqraLBPwdKFA5trmqf1JnMYnVsUGHKt6RwtVsc5aREsqw5DEPRDCrQpYau6FS5VJ2349MFqc",
  "key4": "2QYKRLEqYQzr5xvE62wsyuw8oBgJNZ6yQhVuaJFfEQJzD4h6eY8yAS9aP3Qd6xmLg89HALFqi43k7U2c1PJnMySQ",
  "key5": "kqwT48KaR1s9ek15fR8fgY4SeGbHgfBtjwaqrbTsjHjyWeR5osUmww3NWcHUvTEyPxwgVHfPHw7MFjteDJNZ3RL",
  "key6": "3ukPssJbHW2T3RhrTXU45sAiDqZMoLSpnaTZK9hrrVcuckHQWpu7NvxLzed5BEVDyi27CyzTq2MQd53DCok5e9W1",
  "key7": "5pHaftMNDFiJMgMZmvyCeoRgBuDxkCD6hmgcfmQzM8XQxtt7iQ5mt2CcLmwZDeihvSiyZVUifkNvL3w8V2uuy87y",
  "key8": "22xkf3LBnodxiGagJJy7qAvouDAFC2AyeWpEAiAVditm9MEHwjq33ebqcixJaFw6wwiX8aqB4k298dQtbEbbKgKU",
  "key9": "3NQukWY6XuZFZN9qh4gxTEFowjZZ99VuUTq4SnA99MFf28f5x4Eyp5zquAZ7mqsQmpoortBkZGwAJVYWc64AEDvC",
  "key10": "52dw53U4tZJPSm1zyXMVG3NFEaTVdnc6grcLQ2u2JmUD29kg3PKPWiWkxkrU9xUt1B2Ggxg7b7LDeYgpi9kWVx4R",
  "key11": "3jkqrv3SLQMBSacGWFGjWLjabGUGDV9FyFmvYw9jpJ5efVi8vy3QVoeG8LaD9PgvVevh85YpbS4BaSLBjcQd5Ghy",
  "key12": "4K5nvgSPjDaACHEEiFN6qxWkeLd5rufeHnftBSQTkwEpCxQxJHxaD6ERPL1ENMPycrv1Vmrv1dDz1tDH4LxLxtga",
  "key13": "4PcprSejWa7GdAvfEvwNmus1qxLipGo8gLBTpRhaRUJM5q6xqBoZPFJdferQ87XjSZUAondSncie33uvRVfmyYFS",
  "key14": "2z24HWLNvFFQWyYide4fLCeacJWDCaWJzPaWT8EMgwDYncVYh4FeeqaWPNhrj71s8ZncjBN9jR7HAUnXTwSkMAxH",
  "key15": "5hvktwez6W9T9xsARMi99ojE3uwvyHRf1yUFguSdRwQzsxYAdzVmU1CJygdM5kzdwz1CopEobRoQK9djKZU3xDpY",
  "key16": "pKgNsEMUT9exXvwzJ5E6FdfDgo5XyufqmDc74uRifEE87ajqhsEtGRyfmZHjQ4GhpWDahTYg8CRiMkrUMCaTRwh",
  "key17": "6YbnY3p82prXaxj8f5u2rnCPPp5jghQ51JuKe88CpqEeMtqfFHjqvBNzMoFQ5SDfBBRjAJubEih9CxifiPBLx9E",
  "key18": "4Q2QfUiftS76MGD8wUTUMkfa9Ahjrfh2y7s3sfgnf2Q9dUU7XzxXwz9unucn7yiK7sZhtmA6ZRPDSzBcS3dDUkza",
  "key19": "3ancCL59hoE2Uvc9GyFvQ4H1QBKpDHojgYVHrEi2Cq8976yegZB5ir8WhynXLxMuT6uzYGNwg3DQqsYrgScGwX7m",
  "key20": "5e6cWVo2vp7xnAiEAJZ1JzFU5uyoz7rsnTQtcyNeV6tmEpKTdkN4CRnPXVLGyodfCfMxQPqjgCkQW9bQfTdgJu6w",
  "key21": "5qBT2KC6DExQzbiHyamuw8cj1T74eqMWyLzh3eHYzGNHr3o7Wchjv7ZA9FDk2dhCatCmgZe53VhKmgFbGuWpvc5e",
  "key22": "jNaHKwC9cbaFZ3MDEH2JjSLPUm8j7udva9pMX39tdxWR4E462vVddTsHgKmqHQC9YHaf2crkp4irzhn7zuv2jJT",
  "key23": "511ubq4wuTT9rBfb1YkQTcaRCoCVWhZ6EMFc4yFGyhvVaUw4Nwd93xWMbgawCEWVS68arwAvyRrB8x9HTND6kn5R",
  "key24": "A4DBMtwofPWz1BxtVc7JE5hLws2iWBHowipC5ZH3uxzBtGFk748UCZMqRg8JvUMAVKTWRCrHvdNKf6KgKGNEJKt",
  "key25": "4SsAkFtjkwQEQWFrZhUPbKmx1BEhFsvn346gRyexBXeTG95M5JEDFz4aiyfFehe8k1BXqgRyakNgs94BY5YkWJRF",
  "key26": "3GXQchEr5NrxkLJSsZfk8KfdDEUyu2mcEfFKUZzVBN5Ca56MaD9uCtnDRE6icjdpNdy3dkq3wHGowCoYCCEmW44u",
  "key27": "36h8m4bVeuETcex6aLtMZ88M2nxyumy11ffyMAjr69ahmA55RkwvGc6TXUYSAp1rvWnvAg6BPZvp9EnUVSkKe989",
  "key28": "WHVdTUiVcsXeq86hdDUkPBhUE83NLdSNcGLiftqu1zb8xDPjGmUSwyjay3TgukerQt5ZudCM4nZhwiLX3KmyBgi",
  "key29": "5yxuDnmdqjUEmDRe8vxWESwmsiFYEXkU5RKpsXyzYaeUMJSVfDMcDN3HdjiRHkYCd1fK9DLvprDV8162ASHbeNeK",
  "key30": "4j6XG4Pqvivto8PNRN5TPZVGNAvPeXWk7HLbP9tuuPbr1jQW6MMoR1N679y2QDKuyMVSDGyDCwt5dfge3hBiESmy",
  "key31": "4bkE3PWPz8msgT5JnsQKvziN3kvW2CPfvjeck5XBv6d7xdvVNrQ7rto8mSjGJ4gUGYbmoi2oQoXvAFDDx6VzRzQT"
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
