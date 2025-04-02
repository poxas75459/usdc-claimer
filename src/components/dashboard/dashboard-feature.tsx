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
    "2XJ5Z35rhqvZKmBBBEAqSARiRSx3n6DgmHJURrURG8UWJrQidB1fx6d6gyfAHPFFhuEbX8joBdpv59HCVzvJ5BQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozLTP7ScRffJk3SEmkXQLPjYyJFoCkzTcq4EcQd3aER5dTMBRYhwh7eBuHjVPJpoZRmz2pWvp23KUMofDvmdM4S",
  "key1": "2Gp669kadiHScpZgN7kLxpqdSuMTMeuQaScUjTBwSQg7TiQTyYUnFNKt3ZZPgsC2RqbHpnVNgcwKG7fttCp8kBpc",
  "key2": "52aW3mwBf2xMYpxSE3GW8SZoW5MgzfbupDQe4SyyGm59tCixeG1zuuYzSKpQuTt5kYSwsrCGTwLZVDPVbAWzZEVz",
  "key3": "3xvLXJqA1brPzLHMFVaWP1iKLUxTH2yDNZmt8oi1PfEwPsCgRudPhGyM7L6fWh6d2BSujVApYXLQerHfM25SzuBw",
  "key4": "HPZGDavvbg9auj4J2KviqzXBzhhAuD2cyzngXFtYESD6shBmPbyD3RXQnAGmxvnvXJamFwGXPagz6Sy3iJTPDFH",
  "key5": "8RXEJ3sA3gZbRpZqo8woLNZYvK9LFp7TjRht4vPUnNQcU7W8tYNak8SMTY5Y1xFnswWx2AeRm8eSLBEEKWk1f8U",
  "key6": "4FnFVDXwAUyCJY6xHuBfnDG91x8y3sw8hL6LvqYKgftHsGmjcJqmd4qQbe4uykzXMyLdUB1NqdASyg17hY96V4kZ",
  "key7": "3Vyg2eYhq7uZkHAxSriYpQC2hfVHV2DLxxqGBZAD8YZSoJaXXRGxshubHohfsShBwEbGEnFmP62fixWZoUQSkcWM",
  "key8": "5qNSjk2U6C2Dtxo39dm3cLbWvNX1vbSpx168Rkrqocm39jxGXYkwNQcWp98uDra7eHGd3mbc1ph2e2VPUrLsPh1Z",
  "key9": "3u5WLiQZpDN497GLp9ZcF3ZbEvkHN8RV3GfzTikit39SRQCu9pZexMBcuFngc17FJWqHHTbPPXKVWt2P6pgoao3E",
  "key10": "5Khzw7ncB5hCYVevzV7Nh7WRHMM5WMYUAU6q2MYTGe6cbBqu1pSWobB7kRB1RbKHyrmDv7p4kmQpP4tHfVj25zEu",
  "key11": "2ZraNMWgKciSEVxEAB1tvRhUtRMR1DAjoMRqjifNgFBTCQayvwfFvGqJG5Ne3uXnAekKfyHkkCBAeJZksrZy925c",
  "key12": "671ovyAdDz1DirNFoSULAXiWzkT6xxg593teTJ4nDiWWx1Fu5wGYGoLH4txhFFL2fkvzhKxXEUfq4fqna2FzA5w",
  "key13": "4pFmhEw4itxM1Vn11eEyYpjMiU5CsrfXaFpMHVeo568HL4HrqpnsP2vevZsVcRnnLFyeadZEWwpSF6Mg2KPKZaV3",
  "key14": "5vZtbdDmWBWDoVntj7fZppmZGaQk9Un7mhdmsaAQh9r7ystAcLgVU51LptaXz3o67ToDy4cCuagLemRseG35AmoH",
  "key15": "5Yt7K4Ny6HnEz6JhX5fWBTEhuVejzP1iApTkBWgwWCjh4LpWd6LxBMMR7QN14WiegQWHKaETY7bS3bjjiDcJw24L",
  "key16": "3Z8uCYJvsi1Aozvz2eh8VLieRKyd73cREZWyq2sEsCKUM6kLakpP5R7M5Nm6jZ2DwPwEJ8rkF9EcDU77uZC7T9zc",
  "key17": "2mHCLLopVZAzR5ru7AyyMCq8ES5qybWbP1jPBDYnaNgYZT97WqziXeNYCYkmS8mUpngPo5gHXW9Jhp89dufijTqH",
  "key18": "2VPwDrbcY6SiPyRk1ec1tCM3xCY3ar9pvF3Bmt2WLWW1mbtbikqEApfDdyaXSEo3FtfPMiFKDYYJ3fECYuxMpaCj",
  "key19": "sCvfU75ex3JniViuhNUGSRHcTv7LLDPiJhEKg24oQT5pgBFEfVm35f9aUsNx6vhToojbFZdZVxQWv7FhS4JXRdd",
  "key20": "4HMy48hMoJiNA149hB5wo5BABkjRtYV5q1bZpbENh69ivMzgHL21AKd8Qzuq2raBP5w3bxLsoHiNpFEBpsbAm5yK",
  "key21": "5cmMYXjnwi4ZNvE1A4mQeJ9fyExagSZYaGm8idKNas9uo52ko2KhyxVNR6fDgC518tcmGHiUZwyn8Uk2Nc9W79Cz",
  "key22": "Gn5YwkM2iNFEAthJNiz9m8eN6HVmvjDj8Wsoq8EU72sSynTdDVmGs5cub1JUthVLZwvRZSWoEy8A2pfGUArEH8E",
  "key23": "xKyqVPmAg3rG4r52fMaUC1Yij3u51uZ7cL9qNixooNNFh9iXMziNXKnGY8jHZu5h6ZyxdmFagfsskczPcsiGx1W",
  "key24": "2HLeg7rg5GrQ4h4PKyD6go31RpJTF818NqHFS62sm7i6gEZVchJ7BcuFvAqz9mXoK8BJqma7sqeRmr1d9JwkNCqx",
  "key25": "3TjHvubWUQ4C2KmbKi2D3J8yak9esf8QdjjXAgCvoBnFEB3vwQujqc2xTPtEmLM1MeVUAP6EmLwS9AnjhDRJiptD",
  "key26": "59BdSMKN888PX39mbPBuHzdGrfpK9Yrdx2NHWsENkM2XPUk1QN7EHxj2MH4JD3B7pckU5ra2VTP2Kam7P8jJpLMF",
  "key27": "5YRVp1hV7qKWopoMCHVVhBaWv4a7an9LoNHUH9w6NZndHsjDd52DDcWdMyRZLtkasjQQzG6YaFKREj724627Vb3m",
  "key28": "3AsMTbRwgXCBBnz16Buus1qiw6T2NvY4LGbg2QRU3badaD482HLrFpAe7uQidp3bRz3tzyfDVUfaFWW9RraBPvzi",
  "key29": "2dcvEKC4NzZ1qGnavXpWFcXaddjQnUURs2uD78tV1tLZY3iMat6G5vwYVoEod4iE3fcQMeqZNUFjarZLqMhfdN5o",
  "key30": "4ajjfCSKbHjLXX5XEJXPyLfhga7rjaSLAmo6j5sr5njMSLKc1jEvMz9gKtXBi5V1Q4bYmsYntfgRxnDaGoFtRHMW",
  "key31": "hXwmLcb3U6v1p2cbwwHf4fvdcyWZWxcbmSgUyqTA5jNewq5G6pqEaQHSR5whQ7HZNpo5Vwqfqpmtqur2AKR5oXh"
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
