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
    "4o8bVuJTndiXLdVV7Jzg9M8FWjpYQt2onc2SsKTGV9puU9b2awT41MjDEkJmzMiuRqTAsYXjCAQxCsZeM8HLi1Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6AzziSyg92deshXhAQn7euaNG4hk6f4c4XTLHU19SsUQVjgA6KxU8pM9Pv2N1QuxRni5R2tqH1GBKNG1beowZd",
  "key1": "5MPED9meYVTcL4Mgbmue38ZrJXRBnwLh648ouJm1B48K8ahP6ypvu3krvNec35kfC4zRWmRdPzVsdnAot84qiZgx",
  "key2": "2CF7joA3qtjEV6aF8WhEv3ZsWmSJBTDVEmeVFmzQAyLgMie6HPDuReBnw1ojswATHmG97Kb5rCTvAjF57XxKBbT9",
  "key3": "3y9nr8UgojY1PmLgSanPgSnckpHdHv3cG5q781JKim6y6rJYtL9gAzu9FDx9WvsM21yGf4EfNz34ZjKfyjnZQFCK",
  "key4": "2pMpKUyfHPqApd45UCHHDqDjnpUWKLwvFXMbQrCAyxmgp3Hz5kAGW8waQDd1ATx6sRk3BkTMye6SfVJ4HJVV6KAR",
  "key5": "5eMcZZzAS5s9pqem7qi8TN9U9AvpHATZfsHgDAvyQoGPb87suV5L23zvqPoaYCkAf7DVdNzSFzCJNG66x4nTA7Qc",
  "key6": "4sKkpbUz6EVaj4mHCY5ca9at6bHK7i3XLoJAhiipTL4qRTJY7ru8ENSsFZUvgeuDBuC9aXBuXPPoGgYVXwCVFyyx",
  "key7": "5gw1oyyPDvKjXAQ5PjsK2XXGDbWyb9UZPV6zUnH3E1DCej5mETxcxn1zJmK617UmQLyPqkEoKFge6EcoyKAyK3nN",
  "key8": "4yPDWLN5YoqRp3H9nhKCuy4ir7m2jmxhieLcBRTu7J44TTWJkcjT7PdDSKUxBAMH6QBzXXHv5tpKvUpzKM9YkapL",
  "key9": "5XNKgLhiJ94tNG3EygXhQwQZMzJ6quPJnMCWak2hNhHHc1S7cXzgr8VV4uoMbiqNi5xJ9J1xfN79Dvt8CySNrVyg",
  "key10": "3QXGyKNux2hYyd2UFhn58LWoTM6RzyAkGYM5QeV6LBC8GvuYi6nqLv9YSVq2MjqJUktWuty8piGLWvNJeWTemWXR",
  "key11": "5f6v4mKESLxgVAteGSHL7eM6ce8gKrX6WGQmTcbByhraBmSmCpSin9uyWTtr5TzC7YNtQFzPTXDc6rKxcUEdPvZn",
  "key12": "2vsnwkGSFoQ8rhhERAnx622x77p1pxrq4n2X9L1uZkgv7ZFLwTdfqhXwWAQEMZcW4wmjmAQq2VVEiaYuWwnb5uA3",
  "key13": "448JUdnCCtEWhxXXcneEg7gYk41wgwbBds8WHpWfKYytdFR7arf1Fst1FCaeMmARSCHkEkEnhhssvTaGYmf4tLSo",
  "key14": "gxmvaMfui1Tf48cEUwcEc395S6ehp2kcx4aWVVxGxumiLVrAChc18SYUwhyDqe3DMExmQqrewGsex9upNJmtM98",
  "key15": "P1G6XRRwXrDA6EQxnxugrpNVyzPPsM4yAtK7Tqs9SnyTADst5GJGEVgs8D5EdKvnJUGZkZGLwi9Gs5mBc9z86zf",
  "key16": "53ZbZqMoMXs2dpLSk71zJhyT3h7CMLqNBCWiLvv4BoaCzZkZqZfwabURfx6zEwpkPdaRmvSuRYt6D4HFRRfLZydg",
  "key17": "4L9sFbkvBwSYA7NnkCubAdomGKrh4QFYYhGNovQBHLRtgQdneaWuTvZeNWFhPykB69ZHaNEX6b2NEggU4M52uwfV",
  "key18": "2BtFJfRs2sC1uKe1gBJ4XewMH3Nr698w7Dukmkhco5d39fMiNJgaDvamhKFp18k4CA1YTYSSmUedXoe7RX3HLnU3",
  "key19": "2e7TUEbUB8iyg2Vtc3k7t25DpNUM7vbYepwRSnM7rJdJ1yUCiyCVhFn33j6Ftp9Rc5s2RhiUnhmCYsq5AQoFVQQV",
  "key20": "3TZjCKKF1244BoHVHnosLppR8YqRvrVMxorRNcRcNmYd3FfEdgSuhmeoCP9jo6jUkghGvVRZVg8FQrSJuJ4zqGKq",
  "key21": "3JV9q279SFPkftAKPhjmfA7SBzTQfNvVsASddhxHy5VqLmGnoGZZfYd7qZScDchBPUH1BWsUQmidMhup9kiJpE4f",
  "key22": "3qnwos7KpMVE6VXDnZDmBbppNRKvvY5bd7eVPghxB7G1c6j3yY97ErGeRJtrJgBuv5xoi64eh4fwjcq844D81Ww8",
  "key23": "2pN2ynw9JZ4iZaq8VA112iBZns3iDgAcRhZGAjVB9o3f945anv45nhksQc9NsZQBaoM1MbBPdD4d1JqAUYeHmHU6",
  "key24": "2RQsnQN2jmCFepG33iy73YYjn4gZuHteTKRd3bMARQDFN8sEscNQks68QD1K9PdiNNqpQMJUMb2g5AG1fR7EDR6i",
  "key25": "3qXeB4YK8oJAf5miVGJb2ocjJ7uCd9noaor2edQLkUSHcdLFZvz5kuev2QmDLk8UrqNFGpgRDmbwXL38xjpGNoU4",
  "key26": "3qW3A6YEU6okvWXKFXzJG1wTMUReEG49cp8yXP1R1RdMXFvoWcgdYYF7SUTEbakrZciMi5XDYP6ddkZ4mSH9rNhp",
  "key27": "5qa7NkedLeUPvPfTWiEivGu3L97RZKESgGT5N9Ndr5nqvrrHEPSbHhBCjbYh1yykseCWbZkhXpcjfxKHTNsd5yqP",
  "key28": "3pFrNNGoCzitc2Gk1v9nXBfpnF7XKXf7wXPZj6wL7wyijzMZuJtFwMN3wkHd66mvJKjZ2JYjCMcBFwSkcyUwjyxT",
  "key29": "njGjhDLCs9Shax6ykL61FqfBs9qH8eqse57CWEFyTTSA6rxrsWtiuz5DTsa8xYm25BDrhGrVw5cCq8TRqLV9tS1",
  "key30": "2iTaGUSDm2STrSaytwjAWd6cqpwibuXEPW6eiBmkvsS35UtfkRGbW4JJNAPajfuem7JaeVHwiLbFrNvDfwL5f5oj",
  "key31": "5GtHdAvXj14qdUXnuznMGitCqSeRV8Ht5YVSYYExyzfi6yAMh2iBcDnRaXqhxdfTmMoDabvoEMJRjTqk4TbgqtSm",
  "key32": "31k96PnKRbbqhyQzUthPP3b3ez4aAQ8P61a2wqBy2mDWXmyCbeGCD1QwzPh8RxopsJCnbH9R4YrxCFR5owpYjRna",
  "key33": "2ZX7NhNNumqKGrJkanNY1pDiGNgGRwjocGrrvvEbTBxpBerZKEJJmycKqBnsu5dLogqqRZimkj5cZFTqKHzn4yTm",
  "key34": "4mj8RkYieWxmn3AgAvkvrvwUgNaQJdgD9WEfQTRdZNSCrhjFdFYfBVgvLXRVCKYCFJZZv6PzeiggX8e5QDnGAWqf",
  "key35": "48mDF5mvSpr3jpc4XWRHBRqBNZMNifzNtMENFu9h2R3D7o9SkAdEaf4ga5s1ggSni5DVTkb6f8ZCphKWW4piPy6J",
  "key36": "49zvBJRJppWMRTicBA1qw9q6nTkD8ANzEGDv81P13hWyvjXdMaHGb2PeUaGtSNHT4dhGgrCYGjZ9JQ36Ff1ekJGi",
  "key37": "5wyCmDL9LnhikwGdHabG2efSdxKpDNN6w9FZkKjHeaEherC3tf1MHS9kAJzh2ksBhZacAe3ktvJ7PYj35xTaGMyw",
  "key38": "5Y1LKFYZoi7wBQKwc2KfmETBAFH6pxcm6PrkVwwv3oNPoSv2JuR93TzZfTSjwQtMRkGn8vUL99uQG2ghG5hrADzj",
  "key39": "5Li3iQQ2mBLUoskb5SEvinffrHrkHGphYR8W6NTGxGdva7Tj6LwVzJoqkLUgcxMwyQFJd7kcGowSQDrGDF8UR21n",
  "key40": "62STdhgMkhcoKLEE23kwXAvyhNdW2Kfaw5GTjJ656fMHPvk3nSrgx9nbHkypAVrAx69ZG4B36AzQuG1sHYpfDXax",
  "key41": "2eZig1kJ3qC7Z8szd95gijsbLM73AYTJh8gpwiCLgscBcWHZDHTYmVHJv1TR7f7zPhmhqGSzV9W4LFHDig1FWrZu"
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
