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
    "2wrPKyLrPTQBUjX3Xzhdz1Uz9SrMoLNtf2AgxTdhuB8nXsywQ9e47drKZwUhaHLZz6HJNgYuzR5FiULbHuAF5LVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h53ZAFJ5mexSc1iLUQ7uVWsHGF4wYm3x41FmSnAXdvPMkLWQgoZ789JSJcU33hgiLP2n8mUUWyZTvCZYFCDRhiC",
  "key1": "2tgNnRxu1FmLM7rJ9D31sFwDq5jYpgCnwptMbpWL9pgtqP9xoHDUczyna3gApLZE33QRQi9jmMq9f6fRwyeLKGpx",
  "key2": "3BTcCT6dBYs3gXqW9wG6c6WdmkPMdmBYFY4z9997oorHZY7P8pefwWKDowxBTDjCqTbzkDdNdkDUyEQ9ELUHFHbz",
  "key3": "2Dc9fFR7AU6tsetAt7ktya2e1MMScTiK4E2hmHndxGpfTGqDL2nPhAD7f2UoYiX3sUTWosR3uf2TBq17mfvjUNQh",
  "key4": "NjTSKJjoeTUJanEtuccFaFpnaTkeCyPGy9CVbBZvHjG4XyEWK1awVTa9fDK3TNakWDaYHLEn3MQexBwxwUFwm9W",
  "key5": "4gDMsF5tEg3JvVdUmKb7JyG615TpTsoc4jZJ6aUYjyaKYEUenRC65B9aeY3X7FhEoZCKQgzGYYhWVhHVU7dpMkyt",
  "key6": "5noN5mRJUBn6jGv94nAQn4iSsue5mQvFoeGeL6ntCAC5yLPRQF9CQ75QQoHQmKuunaptXuBQg8sKnWG46dsaGhbk",
  "key7": "2MEmqiWjjjcp5bLyjHuC9ygKyRYjWgHhM2kzeRzBCfg77zYPRL4yWUpwpZwFkHB9ywGjCsDJuNYUxtWX3T4VD8Xh",
  "key8": "veJojQHSuJXuHhNxC5Bzt1MsujtYNw1ZALncUba3vu1x4aYG55FY29fuudvcaw7KkVt1BieQH6dx9qWkBh9MMvR",
  "key9": "2SAhK7g1dZ2twSSGktpMxCe6ZGC8Zoam5Ps3heNZTYS6C5KWPS1zrZrX9XUFppAnw7rpc64a5DA5e27V5tFxd2LA",
  "key10": "2JDPSoyzJaPmub25pNww5b1EyHv7bpDcXS8jUqtLFUj9xime6G9Grv4epffWYp4Sd8r4c8xPCeWBEw57Loxs81RL",
  "key11": "2LQC54Eo7ZbHisiyoR92a9DcPfCnkQecfGsTrRMGoMsGYJ6To9ZDEamQMjtkX7k8LFaNc5p6CBV46ijBpzDWzwpt",
  "key12": "2nJ3oJVVhuzrbr8HJ8yfJfTm3sfb4Kgyuw6MyMrvuP5CxcdYndcEpHeF2a92tRxxHAwiakxi85NaLLUHUc5o4fD8",
  "key13": "3vXhgrHVMb3s3UdFn1FtDB3Vkxrc9LoNhBrtLM7PYBBJpuHWvzg4w3ZhCoPvvaQxsWwqFRvvGEMSqudyUZvvCEBs",
  "key14": "4AUbn3iAdGehv6Gw8tQG6z5MLsrTEWLqxy2oS6BHEj8uzX26kCpdyJjbBih4x2udd2A2eTP9S1tw8DUeXJ8BxnYn",
  "key15": "3Raik2cXLsvH9Gg6biFiFPfqg7nJ3hXEpdZpbFkJXyuat2uDC58KMkNvwMMX9Vnwk5V4FRRvXk7S1iKT1ckrop3s",
  "key16": "2cRvVSZJUN75xiyQTh8CpWjHKxtm3VZPh15DsPJPF7wgTZGMcXPHNyncznysLwjQvCuFLThckk45tTwbqrZVuk4d",
  "key17": "5kDAkKfDUTeWqxwdDGXJXQ35eXhnZz6utCaVZmGP4W54a9bKvLDf5N9KTzqp4pQdyaLwaj4iXXz2WYuXh2vQDZZp",
  "key18": "2EDvEy9vzNtG9qjbKP1ATvMg4w3gKojPixLN6i5gsDjb4GG7Sm4qYj9RNNpjHnQiqYmWwUsvR8LDkfDPG2LgzgeY",
  "key19": "KUFJYhzTZretf88W64s7ZcDyiP5qrt4qZrzzcCMnpi27kng23wYyPubknqyPYAA114iQtXaSiRWYLLufBhYnHtQ",
  "key20": "5aVoDnMNz97WF7QmgkdaKEdxd9TR38RB9QuMM3hxzKeo7gpXEtmPk76K1dYqTodUN2eFqk1WSYjFWvAGHmJKbuuu",
  "key21": "5TDZsAbMwqRbQdTsBzwRRotHUaYXcqTWkXKtzZqidARf4AVLLz985NLuHXPkcrDHWzgzoWJJ1tLoumRUEXffiY17",
  "key22": "3t6vtHVw143DcdkNaE13HNqLZdx2Vu7tPRZKKmJYWtYbkAMvBupp2GkvuGu2YaNH5vvxdhC8ZU3NLpwhNo7LGGjY",
  "key23": "5UBcMZb77MsfM3pBWn6FjHgG2HmNKiPzwPtwfhzUvzn16eaCc84S1EhVHz5oGKSEbSHjjhRFjRrbuZEzHBDZnq5c",
  "key24": "2DPwgx1aASPvTi37cyJ1FWmx54gP3YE6cJc5jSg2rncvTKpSZpda88fueDWAgDBomz8qXeQ9ACtX5yKSnGX1mycZ",
  "key25": "5Uf7VxbDERLEqWaWQpj543S4Yovb6aYUeRjmyG8SsZh3ZBxPdtBwsfD8HAKZqG1qmC9E5ySCrVwte6NyFXdVaYLH",
  "key26": "3Zz5dwRzF8zbDYU9JP8GwtrRTn8TrDmYpeH1LAi5RQ9cYgGGGqqFgqR65erHmhyxsaSAjCXDTLfJYyQy5H6Syav",
  "key27": "2QtthBtQsmEg9F6jBjnj62ieRrqXyF1te5Poo2YRSamQeFZvXKdmUGsD3C9sF1poVepQCb3Pnm7pJVSrN93oBfFn",
  "key28": "4EzqpRdadgMe339eXKMoxZBsAkZmRt6mtP8dyyLPZ2GjGzNPfbTN1ZP1Es5NBaBPVbY8MKozTJRQnaM6WcsL3aeM",
  "key29": "2eu5RCTaVGNW7rx4mRv4agaNLebNu9aHCnY7XyxLDqaLHb4kYEdrTLjJKFYbLgSdDtWR25R3vjUN5sdxsYjtBAPZ",
  "key30": "T1pEoDaSCed2CwotnJWWxBa8GMaBLXSYK1k6MEGiBZm9ZhWbBuAhmNbdDDctta2dNM5LzawKNcoLmVe45QYYQCc",
  "key31": "TkP2ccZdpXgM7neZK5Ac5aKVBXNcDcfspezpFCJBqa9Wn6gshtksg1bvp3YzugH5pLeG3tZVRQ3oNL9frc3c531",
  "key32": "zuNH3BWoeJTMdUJ7TPP25peEe65VXFHCKdBHL7k8TMfUWAJN5HEVK6fxt9148nGc1VmJufWTkrTD78uoMURYG7H",
  "key33": "4LQYbABXuUPNbfrWDV93Rxa8CmM5B6ugPFKMB4fgqL8v678cDxW6C9UdzWpxnTp98MWNwa8qptwxukdMrGD5wo4T",
  "key34": "3EXiS8K2T13EJN5txVJv4nwnmw5uu4BzZsA2CCAmwgX71Z6YtPKpFXKTs1krvwfzQDuSzGGRf4dn3YNmigmrtY7s",
  "key35": "2WGkYWbGPVUneJD7eBZntXfso73ZEqpssRA9zgHHvUifrf6zTETpmXgGdhoamVBaEqjRDzVgehvDWUJdTtpPvaZ8",
  "key36": "3JEvSCHc3xVJKP81YdvcZmpLbkpLKBTRrRBtw71SGypj9TvNPuVtRELga2hrdJjSUMRtHzTPAKdrAojKi7qr9yoU",
  "key37": "5qzVCFANjRf6WsZHqLajffKM7DtEkj8ewXL5p9662LkAkCFe3LQVgrtCxG8Rm94Nz4Q9bhroPwEgzDmRxwaEdi2R",
  "key38": "5HHahSeFcWXjpTDwXjTiJLWTijjJFUDT2CbJoavGmLkiA64X1vHvJ7cV22NmiZtiHDkPcLyHRtVTuaPb1WXyecgg",
  "key39": "4Naf6CK3Nem4iTMAeyWNcUUtvjDLMwpjC7ZxHqpKNBeUwKLKRuDncZw1q8aPJQ7PRgdfMaR5HeDaQNQ4nurdFnLC",
  "key40": "51oZNavFBTFEwdkJMuH7t2DrFBRc9sduXgWBMHnHNLtjgYH97pTPtZ7q4e6NyRP3Wgz7pPNfgWh7Ek7qTe1W2jkt",
  "key41": "59we3Nn5K2wKxLukTYMVmMF14oV86WZuRaTbhT8GXE4zm1M4Z5wzKU1s2ovJRnCsEDq5sDvPGyEsMURe2rGRPgWV",
  "key42": "3zNYB12Dxcbo9C6QCWc1FvYizS9GNiLim6zhzrufrjZX9CHUn15Ch6JbSMUtUpJBjVKskdbQJWDTZE28LwynzziT",
  "key43": "5MXfTA8A7Tt9XCPZLMMSsnNprLP6eG55eLQHb89RLxPAb6DTQ7V1sjQSHyB4aS6317Xu8PAWr3qMmV8gvKe5HTBD"
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
