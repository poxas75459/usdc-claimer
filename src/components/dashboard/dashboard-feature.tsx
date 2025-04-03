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
    "ej3sCHQNRhGYB8YMNgedCHmveGn9XuvtgUJ6u1n2ytifZrphQMCAfd2oFaieqtkFKVFL8tAJgUDjWLAqGEcVN8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NN4UKHxu6RixC2Ho85YxeXxhcFhS321gWcgem7VZcdFguPQz12kxV4jKf4e7tRJaBhB25kpM8dMXZiYtRuJyGF1",
  "key1": "24jjrWcosM9KJGMfj3AuPyT9Vw1GWYQfXriNsJnToioMZiZVd4K3phfxNRAu1tuJ4BdLEcjT5LcG3Q9GHTpAdxnE",
  "key2": "3znPrFtWhCSzgK9tL2g1TxFVYfiQnyuwaRszoqDzx4XUSBXS3gE28dYVotjCmn7MaMgs1ZMETL9uQHSAW3EQbFV4",
  "key3": "3xCBwV2XGEhRqs8t39Hy8vL6booA5AoCEnK4A8cHdzm9zaCnksioPpWbG4fMk8nhAej1e3S4j2triakhjhFDmPbd",
  "key4": "4NgiFwZjqrBHVZnmdNvze91faZcnejuphoYChmd728eQKXrLxhsh7mgDWPRF2QBfjbTGGrfxAxCdPhggShqq37hy",
  "key5": "4DyNqBgTBP1M9Q9HwKeR4dABALwwce9tqWZrYXKBb96rSsHMWRpXtUVHguq6ng2EgxSSQUB1Wh6mgKctkonsfE9Y",
  "key6": "4sJ32vYgdJhJMAXDUGkHJmTXTFDkUfZLygpRuL7o7USzHogqu9sjwM9YFUb7Dgh2TzQmKXfLV5Br4FFGq2jkjcWv",
  "key7": "3z76A8sxTyU2J3CEzwoj1XGHdaCKB6PRGQshDzvCL7b7k5c1S7PuKutmG7nofCqnbFEBQcaxrph4kA1GQLyM3mER",
  "key8": "5GQoEjtoHsJ8DW5ch1rUAwPzUtCSyCU8aX1cEpS64oEvRU6oWdoArnS4CWH7Boy6hvHBMwrkxWy8pprJc6j3sqNf",
  "key9": "4zRdXaucTHucEKWhpdcUULiQZwEvZZ3ffTbNM9MhvZiwHAhaERnSMiB5S5LEfZNQsfgMBzzR7qNYKUPTsoiRyorh",
  "key10": "3on6sq5WU1AdJFzsoxg4pYRGAaigzwDqHZX16gcYKUDyHKs8dx8h2HcHVZHnHeY8hr1oiNUZZNtRVt32rUE2Ed5V",
  "key11": "55T98XwPbUmHuSQFPNDJMzxiwE6cxLg9C55r2pt2BvrNDG7V7pcwjwAaGSGmpNSWrmiZbaeLqwMesZXgi9LTNsNw",
  "key12": "Wo6SAhoSkaU6yJZJMheFeZMTcVC4ohBbzEyd2UtoyHS9zRq6c96ckyDo1VR5wxwriYHCqYeW7oCosfc6REZ2KV9",
  "key13": "9Em1WmpBck8PnXasd4a219i3NuLFC7Lw7PHeRyGMPFzy8XqQqBtki7mbKcCmMT3zjy4vXtC7LhqXxFoX31bkxRh",
  "key14": "3iMtFDTAT1woVcnssbdGgWggAjUxdQcGQSWZiucV8Cku4BzbXvKZptvrmVWhnTgoeQwgcCvKzyB1bZpazhRgdpD8",
  "key15": "5yBRXmrbpeVEPLMTt59ncnfAuRBU46Fe9LcsWwq64WLAJAZJ4kVicB35eHYaSpoXqeJTMkFQRk1wSbhBEsdfBuUw",
  "key16": "28QycnvLaVYCPeQeytgtG7qfR1f5avFbRaQzD5nZwZA5rh2o2J7e161UjSiv4wjBdmg6h5KqQ3u3ovRk1JmbAEE9",
  "key17": "5NAymAo6AUUEAK883hCux1Ec9PZ8zQbKFe9xuHpowJRyrHvpqfXtkxHdcEbnGeGtvsNjAu4TknUPGpHhKe2wsV5D",
  "key18": "2QBkqxPpVk7eo7zsuemH2jmj8r6VEnmp3qDe4BqG9FtVTj4Rq9ag24iGg8T7D4355wtg8cE4cQpXgie8TeEPAKhv",
  "key19": "KgWEdCBgn1SF7n9AHMCLWHdSXY9pv4a6sRMbNW48YEmivMmjTiRUqk84iC2SjKpnk7xU2zxM7HviZwc2HmFhWMv",
  "key20": "h5EHRqHTWaF6ekatKYx3Tw86bgchDtDcWZPUTxKadNvfYDRoPTpaZGqL4nsHmfLtEV1KHFDaZyuSYKGnsDvopnK",
  "key21": "5UX6muJ8Ju2ReBeyiXU6oJzqqx7NMEUpPmVjttfBBHkKoPmAYRbYGFF2hq4RNBJ7NXcE6ppRsonSXR2g61ghpoXS",
  "key22": "5z8ToNqnE48cSYdsHEREMyDn5vf5yp3h5NFAUSX29bJ4Qo8qKKxfSx4PSSkXGqx55PEofmd686zRh3pnYWPxpAJt",
  "key23": "3KZRFv38rt8TJmP9UzYqXHKjQfRpxz91MTfJweDWdUGmkD6jQYTjvj3u5qzpPDakP6TYnupBF18NNaaLMdBnFdUj",
  "key24": "werTYsjDM55oLuYn793vfDgDX6JV2ag5jxipKvZiDNmShkbKLoPoTo5aqQMvNEKLjznJmMFr8T73cJ2NvK1d5a4",
  "key25": "5gDvLDEXr8XgnmAEbvcwvtpdWiEswubevtBiC48yh1qkokYXcE3RQJxrnRFEQWmVJoXiRJ2abzimZZhf2dyvhy9Z",
  "key26": "dBVvkhTrKgasCzHgGJdu9kns4bJKhqx3nWdK8Mcv3w2BUukwe13f9DNMeZCEPXHnEu1fLus4k5cY7aSsRMFuzRU",
  "key27": "52Bi44veXvnBYvpEZf7Qj3dMarKuocH2ZWo2a4qco8HViZjWeqBGRbgfdAPpsHfRnrmPixADgtF6X6mrxNqx37Ss",
  "key28": "aNFyhmBvAtP9y8iknMM9DSAbeKEMkwtkkUWDU4QjYDABQHcV2WVidd9Vb4Wzp9b63Ev3CWgsCY7n6F77kisL2Ai",
  "key29": "54qFmHDecicStR1XcLQ91AyELDjZyz1mjJsoB6actQDXkhAwGDUrJRV28d6onvGBpXeGveGurNtTZLFwHxWwSuSN",
  "key30": "2zBE7fBXFDNU3oYfuDRcvqTLGAX21cCshbGhFiYjAPrKds16fzp9m4EDb3VxTA2JhAX44m6G1yc3ChxzXPVa6UAb",
  "key31": "2tKRwfDqgsSeYrK7Rmv5XsgFhEnCprysA35LehWncMqNM7BscnWngEh2MLva7QzjmqXYrdVezLep4aq8AwxJi3Z7",
  "key32": "4BWfBL7v5cd8juzH3oz7mvAbMHDULpkYAEa486SFhh8j8RosvimuQ76Y55xiNFuwoHXEMwnp167XRYbUhnZyDKHm",
  "key33": "2zLRPPDBz9bs5uD4k4hRbbAiMkhDdzYA5QCBdT4G6ELp2KSVEVjyww7RUfCUAGPKyNqj4sazjvhsbUzRGyAev6ja",
  "key34": "7ihtM4MibeHBPxowWkWvAGhiFAdKiro1Q7AK4pP1DwxnXX31bAy9m7ZRfmhTzqA8BKqN6q89NM75mGMYiA74qMD",
  "key35": "5KzjuzAx9V1HNwWpAgLam8JYc3tV1CbErpBphubYj7LbEAFUxm2aAneghBLsjYATj5oYQmnhL474R5vQwMm6B1mG",
  "key36": "fmrC82mGeZfVw677ozmo8Goi77t7ESFqYMQvzYScakbGimkuUhbysVToZxPVKvnRDH6uVP2jXdbvvJ6aLckxi9h",
  "key37": "D4KaesGf3cqUFDudhzSrModuhsvV8nDHMDjJ38gHJihPimfJAdeYajfCdDMKjK5ii5sGgJqooBDpFHWghajehAG",
  "key38": "5gih1j9S7xMzFEoMAgBttFN6MVUPjR5PJ3Cnjq8MxCT71Be1ZKAjM3GxvCJN2L2ztcWwCuLmBU4cNP4NZsk2PDKo",
  "key39": "3XMngoJcdLhP6oYVMUR6AQ7jipAThB8XJE63M2RkRe7AN2dhuN6AaWS8UzkMH2149ExH4y71rn8Mo6fJwKVJAtzp",
  "key40": "4NCtuEDhqxMYa7NsPbpSrhec81NWsGEemz4APnG4kT6pKruStAKEmAuyU6U1kpYCog2iGDYxnLvPH7JAojMjJnfu"
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
