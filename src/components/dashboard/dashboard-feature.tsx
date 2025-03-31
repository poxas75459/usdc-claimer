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
    "5pvGi6s9AkggHzfbkZasfy8HivNnNVjPvL3WWvZ8uzCorAbmr22zFYsGQiW5wVQczmL8fu9CXp6xwDMrh7wzzjoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFnzLeFgeWs7MxgxQWexryQtg4SnprJA9FjRhqQEQxqLAfj8tXuLH4snCdzQBTPsxr2VzLH3GWryvTtSRwT5gKy",
  "key1": "4RSn4Co5SRYsNdKdAF98HuocY4DhiKA6BYvEDD2NRmvNuqRWwTdFHohiGwQKa85KCVDzJJamwPu5fh5RZGepVtVa",
  "key2": "3w8qToTnDT4MA5bT1rD1XJt8PT3B6EbMGTYLsKkdnvVsnBAoU1ccXq14pBakfihzRSR2jBPoDutoKq4LRMwZvTGH",
  "key3": "4WS416gaxj6Qd5NRuRypidHQYDo4EnqaFmKAaQUiHK3Y1kapkzJjEo4KBRUBuQUxNAbEegQHnQH2uZ5R2iADh1K8",
  "key4": "3V9E2FxaMm7tRYaKoHBATizNpdoBS8iCJqd4kS6Zt26iH7bnjP9iiHmzepBVU5j1zrAfh7Rzpnibjptw9rPFUKqm",
  "key5": "4a8h4RgwtbBpXYR14Aq8rVLQmeo4ssYuD1hF6Dp3Ci94HkRmZNetwci49P5mfggmyPJhpv4zKR6ccQpYFj7yVeS5",
  "key6": "knP4viwFd1V62qNkQoY9NNmE7AXVh7fY1x9VvCB7rNgeRTjvNpw5B8yTdcCzD4kwU77PHyJ6526nAzf8etax42C",
  "key7": "3HyDzDsHx6dHgtUG3enVTXq3LD7S4sxwBAvmVoXquvwo5UDDuWuRD5BaQC9sacX7YZggQe3UoiSndi4XZDHpobVM",
  "key8": "41mykWsQpB2WNfDEBV3L9MAagYjJ12wUM34bNZHZaxv713tRboPgSxYqDYMfBhQA9299h1WQwXsLESaBzxWwucxW",
  "key9": "2mBc4AEACjYg4SbEyzpie5mxre6cMigu8iiiFBFk2s9cGLsMLF85mbpvPctp6CwLV4jBGCQj6f4qdmPTYZu4ZWFd",
  "key10": "3fNpQfwKzV6S1AYgV4HuFnjWcS4D6oJsnrLA1C6hcBV5qP3SPgL6q2b2G8VXmPFmE817dV4g29YGBzbdgsi5Hz1s",
  "key11": "5LcvC7m2TGifCbtdZdkcmTwdNQ9wHjLRXecAmiWeqrEQbQmimkfGM5m1WkUVmMjiSq7UsUiJTfFd5bjEZpB8deKa",
  "key12": "i2BP5PYhDPVBbfS2VJHvTqGes2Tk7nhPvZeEbu6v3pZ5FhY7ZNzZxETWy9ekpEMNx94UE7Z31FK5s5rndMG63aJ",
  "key13": "5yBGbeMrbnj6ZKYHtiTvRqq6fQS9MCBk61RGPFvSoUw89ggKhQ9UNe9c6NkaLBUKfm7HForz37X8gh3MhchRHLWx",
  "key14": "4z8bYD4RtPBseAp8DNpTzB9tYdrgc8z2Lj1x9WVTfyLyFfXy9tkT6mdVr8YYEaPWiCWJecWKTr7dZx9Bw66A3nGi",
  "key15": "2uUxcWffGUg4qpDWo9mUFAnyWBpBc2WnuXURHrsYf4bqtxnUGAbs9DZRcxCfJfuuim7EHy4Kn492SmjPjEAVA5JE",
  "key16": "2agxyPCcvWmpS8ussRzmRFN8cwURJDterj5YLPgf4ojyZf8RfN5KrJH8EEgR6pLfTZhsoLJVuS8QXGkjURBUcs7e",
  "key17": "4xkPPBtLCT4rbJU8nKDzGN8deYRUUPQ1gqYSYE5ZdGZPf1HRxBU6JhEttNhC5bbmrScDEuFiUsCzD6K18oEWQNQV",
  "key18": "AxzSjAUjJvSaDcB1nMHZHCHyJAopAmEMHbQAwsckm94HsgNitu9dujChy8WSQ8d7LkcmEv1pszPCcb9ic8EM5Wz",
  "key19": "23r1XVSPrEb1XNLzXLk4x1m3czTyfV1zjSaLuk1a6K2kS1MwnYk5exUTLcQRDiprBTd4o3aE2G1YhaNBUy7Z8vs2",
  "key20": "3CVzPEDwjHUJNajWpsoW2f8vnq7zyHCdZR8KD1hMUbzSqc418BdKzhTgJLJRjsoQgPECrcAzEuq3VnHbf5AcYZFm",
  "key21": "5ALLcW9R5kpEA8RDnL6Uz9MctGbYgBwDFFEm3TrJ7Vm8AXpGDgCaBUKG2RqJFEeo954hdP3Snw9NhMQUwwCee87r",
  "key22": "MXWPFRgu8Nk6PMumGv3oEvcengiDCU6TSJ4U7aRm2LnAP9mEAKEpyXS2qDS8CUQsZEaGHAgMqJpcMLiapjosAii",
  "key23": "3udUejrELHgC5aQK5HkoTwnhFgFwRpk6XdK58t41GAg7W6UHtfgfrAGxJyW5wbPZbMhHpFnwYk6pTynMX5nph6sW",
  "key24": "E1tttT9x7eewac55r49waaNGGHxHm4TgaFBrACeyp2U7RXVWDzEWhSkfDyTaWteoBZtgu3RPNyF8agmd2rh7DQS",
  "key25": "2Br2rNxqFp3JYrGtjqRkRftvVgAqgiYqRYyD1XsqMvKRHcnHtidZ9XbBZLcJmN1BWiPZqyu8HKqYM9id4UUZ2arr",
  "key26": "3poaQurzBCe4kUpSE3CacX6i3ruw2FX48sJnNJ7nU7HiicARSitbpDEtV4WDrjUoVjxKy3fqGGovRE4AdppMvGRe",
  "key27": "27d3ww1XehD8su22GZVQi2432kyqJjb3JKik7n4BZtbGoa2PgfLxwFU2GNYKcjpkhmNFDhrudgPunTG2ayfoLZ9D",
  "key28": "5QSEw7wLDyadBVokMKt4KKZwtUyyCo5AZvTSqSs3L9dtyMu1MCJeQ44VstQGcc3H9rgSTAZz7jedtkaCjxnfndxd",
  "key29": "3xj2LS7B9Smr3PSoGXVeZbFMRs6tJr5HryNdtPKKvX1KMPA4vFRqZUVtswQGTMRtgy9hPcgQ59FdrRfgX8Gcsq6c",
  "key30": "zcVDpF7DWSzNgmWpWiMKYLLW2GDwrb7XoLoV4zgZcHprBwv2xBYoBRnv34XKescpBzKcYikqEAzq38zzy5UJ7Je",
  "key31": "3vcKjpmvtWwfwZ5mNBRL4Ajv9KTKAsMEtrrsgTkGf62iLNZMggdWomD6NCvw7y9BZcctiQGvtx3cw6qenoLHVmjh",
  "key32": "21YBxtgchRzTXEpuDjU4soNZ4nkM4FQtZM37k6Vuw1q2VHA1vWBGD3pUh1Kwn5LB8QVyyE58jUDspWuYDprG7FMV",
  "key33": "45dgKu8NjRNaJuDjcLzs9BXvFkHA2JMi1iJ5vUFFNk5u4CxiwNpY68FA5AYStdgvY8mtffsEf5GUH4tSUMSJAj9y",
  "key34": "5GX7ZeggpHQUmWwFgwDQCZHE676iSC5vr96eKfDTTF7rEi3tx9EfEBo7yMUN9yQdiJb6tEELRVJdw5WSAQX76yBs",
  "key35": "5JA8Y6BzZxu1obrrGagbMXnEqE348vg85BXkmwb5hkFBosjcr7ZeJ3RUtbF74P1MdayGmRK9sb6v1jH4XHXbKA98",
  "key36": "39YzTWBeH21SgHhvr4pWnDRxy5QPbK5cv5tT4SVSLFPor2fXc9vbbx76bL7gWwVnkzuWWeW45w2bwh23XGMMQMbX",
  "key37": "4d8LXMyCNSW4pM8Q6tXkdNxionyUKRi2vmB4WUgCXsJdWKuPVDdwxAbufPDMHv7ASTaJyucHKVZsQ41sb99gpQQe",
  "key38": "2Yf4fJt5tknWJ9fAt7hethUhe3tXdKERyYcSGegjf1f7kDmcRnP3p74e9zoc7naRcNTAbSZtUk5Bsm6SjTw5gLKp"
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
