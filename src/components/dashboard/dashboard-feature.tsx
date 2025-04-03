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
    "4K9CF5FdF42mMKdYxSEDfS4uHYT14ZLpgmp5Mb75qiEf2XsXC1x46RQe3JGMzWEQAU549bZeJw9soNau2JR1VAFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5GZKvuuwTHYCL4mshQSBEF5VKWwSH4NDDLvab2BpMMR6y4wtpAeWmwjdVeLzUrFCRQfpzSxhtwBxMJQhGC1SFF",
  "key1": "4kk88Q8UPAY3RjqnBu3dV8opiFBf7R9oof7rc7mf7qBdx5b7Eo74VwJxfmEwnfVgJWa5fzu7ksrPncfH2k1XekK3",
  "key2": "36M9erJv4acSn4z9bFtDFS7rY9ZQjNw5HY6bXAP9HzHtXTBmzG5GhPTrzCDoPiinNYAM2Z5ZB5zd6n5H3GtQNS2H",
  "key3": "Y2NEkqhgin8JV1iU1jtRKPKV9x867zP5ATr798E8RyG7PD2x9jhkVGYcvRnB64jyqk4F71vQ9EJoU9vpRzFTEhP",
  "key4": "3Mtwhy75Bnz2cs9Ysmcs4AJm2XCsjVtTWM7FUvMhTU93FQGmX3TwoaRAdWvCauNMGSqRiHeXU9y4d3MGhoRQTaga",
  "key5": "2xHDHSDjS1NKUgyo7oEgt8ZGoChvRfVPdWXCDnHcU1gKYj2naYA2PMkr4DAAZXJGVfPtZuJTSCqa8z9tJxXhDtGg",
  "key6": "5TCamnbhC6XjQhYfsxscHaKhoPEmDRFuLPnVYukagjw4RJZriR9H3EYheMonUxpc2QZvs4TVskWJh38iio4oU9TW",
  "key7": "3SmA6ADzuu2RHtNKswEgQZgsF3FvvHkDgKaR1wpopHk8xrL9t9fnW7gew7XoU5ZVJCDwtZ7xdsyut2Qg6LeGTSSp",
  "key8": "3FBidKWVBfW1HVcer9CprxtmpHhZx9DYkvbEZsgaQ53SYG7rog7sVsiksh4V5HDASzLqgZtvc2VQFEMWeG1TbFtF",
  "key9": "4Uo4zjhFmhwCnvuKCgFHv4uA9EgbAvnM4CZFq7aRJ3SGeHKhwUGnxjfrjh9AamsTxJtmy55X1p4uchZ9ZtQ2DYSm",
  "key10": "SAwYZuV8WqSNkrNhVnqmKVkpu67EsJnm9PQYnKXR5Yg2oC418wG16N8YpfoVfybq5NEBzKxEkD2GKKRVq31mG5L",
  "key11": "WKTYEZzkdnN5qzHuFJdwWMatfk6XNLQe8c5LtggGxskXSHHq6gxTL5RgCYhM65aWyShFY7EPgeeKKe5rNQ3s21S",
  "key12": "4QoWZN4uBAN1tji6rmvpMHBqfqLjHNREB5R2Awt8M799osEGf79jLV4RAYzHkr1SG7N8TW6goxvLu7XxLjHR6zKK",
  "key13": "5Zsbr5ETef4Are68JGUV1vdUy7bYvAwboaJfeZrNPudWHUot8cnV9dxwQFcrvsVUk6Xxrqm7WBqNUVDmEePMkNSz",
  "key14": "25xmwhPhVnbaGADVAPT31Udb5idVpzL1hK9cvXic9hBb8RYnHJ28zpRzbBFx5exgPFeZEsxECPSRepufmwVvc6zt",
  "key15": "sw3Cphh46WHLaYv74A3nd9K6xQihaYm2TEhUaMryGbqxmcL9tRx1NLncu4SrHxcC9669o6wAVQKQJH8F3sn3sK5",
  "key16": "61mCJ6q2gJhxPnaR7Vt6CJt5ubNdeRGuuEejpwcS9NQ3w8htiCAkYd65zT92PwEMxYgZpS8sUoFizYV4vxjCwqRC",
  "key17": "4o9n8m5LoFDEX5Z65qVax6r44ojSV6i3znt1yoji7Pd7zUSVBuy7VjHJrJrWrsmTiBEXzYXiYYHkZ5SwfuQ2xdqS",
  "key18": "29vqzaf1438UJiVaFmDrvHEaPrGBgLviuCQAHQNb1udQJFB1L4f6yxwiFeg7cHTWR6ZbqhYfU76wMbqZQXKfzNfQ",
  "key19": "3NoZcHvUg3rNxXHWLc2CQag9d1sqTirVxfHAZyNuy7j6EBPWwaYTroEJKnyoXBnDqekxrfBFgoS3FzxFETVXquUi",
  "key20": "3hPvy5aX6kTUDzuSmtFMezRXicpDSqwR7jkveY4mezZv97xAksHS4YDjELHQa5YZALBKThho8gR2C86yxAPnovxr",
  "key21": "3cjDWFNsqNUhxyqWT352ZYVcfBXRxkXQDJSAB9Fmia6ZJeq1tcRB1g7QgVj8ghMQywiqMxgY6ob1ZZ6tPcSGEVK4",
  "key22": "4Lh7DWvjcaSwVYg9L5P7hiEMWpRNMoDykFyGs9t7CJiQ3WrzUhfc286T2hf34g6FmHJMmJnzbApoP8SmFVb3B9ve",
  "key23": "589sCGzbhf6mzSUYeWbwNTX1C2WbvXwsuX4ZuhVtgxxza8m3EXF63MhFodekg7r4ZCh1epMER67XFD8NotXzLtkV",
  "key24": "3ZfQMUi1xaEpWUKTbLME1Mx3qxfwWkD4sXMJWZJjQFFWA9hefurZkPCGyomrxyKQcwGY69ZG3TsZFdgzFYSL1Vfo",
  "key25": "5Aacs9kHheNinupx8cc7wGaDAdeZdgdGJswmvZUHe4mzpox8Nn6un1TU8qzeUeXHvrFUTt9piS76zz4LjHkN2Lk1",
  "key26": "5jcirtEp2vtJpMugUvycm7K5DaHwvFMMbXw6VPQQviKSJkkWFAyFVQhQH4v1wNXHJvmX22kKHS6E3UhXTPqW3yQa",
  "key27": "2bHdv55fD1o7afdfEMmbXU8K5JaxgqkX8BwrD5voqnsjKj31HzhrWmzbwnP4NZUMBoHqtW8o42dCxfawum4ZVvwJ",
  "key28": "4DX8ne2NAAYEh6k4ULrM7vuPK36HJB6YEQSZgEjQ1QvB6axFcZL7uRNrqnoaRGq9GGKgX46k4Xh5X89cfgjzkTgH",
  "key29": "2CZo8ratArUDWSzNNntqVLFHXUnkmxnobg7EwbPFcNLFzgCnTdthqM9ZKWEoGEXWCqKqkSUMswHtHrU4qKCWJ1Ff",
  "key30": "5s61pwZ3ur17H1FE5tc6ZUhFQSeJqe8qnqsixoT1v69hUmELizupn96i75cBzces7LSD7e1r4pjoC6N87WUzuY6M",
  "key31": "5fiT55nwmGayGEdZkfmNCC7k9LKqu1sNJgHqNj65obUE6jHsuKoG3HTFhZopQU66Zjo4FdxaL1UutZHMqq4xKcJf",
  "key32": "2yrkqfPY8Cryn5wosRaf29QmmgbLnGvn9XU2uFmYiHEsAa3JTfLniCrtApdNrvCxewgF6aXhfhTeR5J8Bi9xRd7D",
  "key33": "5YygsjUFcxFYzG1Vp3ma66tygLkMoAV5iHTcB72gsRmYMTRvRsnfsoDY4vMU3yaD35WnQEEKQgAJQPveyniYAKBv",
  "key34": "3hNLz2qMxyFJd88XWDzpibK1uVBAopJLRuMwppGzpHgU2evWiabXS65fUARWdNQwHzMZZknELv2McFk9nCzWKerd",
  "key35": "4nQEmG8146N9wYJb7tGXmqfCPyzfPew8UxtTPk8eHJisw6qgLNvrHNkDBNMU4uUmGE6amwmKE6G6WuDoUkMx3zPQ",
  "key36": "3DdwchfBaBEwpfAPDcrhc8sHmdFMUhHVB3VgZcq1cuy6pg2XZFrwoLq2aw7rVUnhmTJesGxWQxnqeEsDC5CmUShv",
  "key37": "5w7UWar4T29TkuCbDXtWYits7iCfFLH62cCNbYWUS5gr5GDsL7gdSgnjDYx2LsiDuUDV3eBzafPnt1jjkANZBvs1",
  "key38": "5C7bhJcEpvQnzPmzm6KwoZL1DY5WVf9nZRQ4rFJnMRuqUk1bLvGEXMqhZ7QUpDnoCi7ypMDkk8voPLkK8Mo1tMpy",
  "key39": "2wMbYEcB1iXYfWezDjjgMsKgivcbPE4w4mt8SbvwavLi8MWwxMXvc8bHYj64grvTHqT6EGnH7hfGgUkLKT4ruMPG",
  "key40": "4oNb6nj5GnJ9hKBpXXQTRCzAkehrKX6WgoXDu2vMseZKgtpbVfqhyXg6FzXeyJv1tunyjCFwMe3HBAAYt57CkLWL",
  "key41": "4ja2vGvaMYNhFFEw4imrhJxjq17i9TrmdL94pW9QvDE3gDsJd3NyGNkbcmvsMhQuTJv2vUqEoW1hWHbFdAeXTwdC",
  "key42": "BQ8zTx1FkLBNhwvHxg7W5K9oMHBCVTf3qc9K3vkwS94dLow99447Pen1gHN2BkxKopinudA3aezadnuKphZXN7s"
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
