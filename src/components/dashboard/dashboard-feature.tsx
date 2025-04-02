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
    "2pjqSGcqGuZFet8N2Xy1QkEfGft9CbSmMSFpFuarbkSAYX6x1NMg7AM8AfZGHPrd4iBsXe6J3oM7qXgsMeQMt3K3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A86gkjuuKpxHu56Pyv6MvDPmJovtDgZur57jnwNNL1uEJGFcVZqGzRRT5uvaSuGyQaVDeYa2X3HzDevDuPGBtjK",
  "key1": "4fMZzPCpVKxX8eaVnny6vTdWfHmxbEALoj6TnG6m9ECzsnVL1bszhhbPP16HgDWCHjZX2hD7eiTiecEZoKdtPmxP",
  "key2": "54sYji2rtFWQac163nWw9SS1PiDw2fG6qYPoVCWk5hx9zH5m2YBaMvPtRnzESJP9mpcWKCboGdwUXPjNwUojdQwt",
  "key3": "4PAYfFCw7SbVG2Ha9d9CpmuAVHwHuwBauuVhz8KYMWdXXg4i32VpjECdN8FBYuK49oR5ZUJj5wMN41HMpnKRDWSy",
  "key4": "8238nmRWdVV1zGhh5siq7AVvB2wwCg8LTPShKFJ1YBoNfo13V74hGGcrhXGoauK3pw5L2XftaizBmVbuZgPvH3b",
  "key5": "43LNiFPdYuVWd8mLE8gAC1absX4wpDYtCX8F5r7s3Vh9q37ZSMxwMGuuBuL7kdQujtcg5NZuxondZj3uS9RQQL8d",
  "key6": "2DUFG1vB4FM6JZrerVntG3Pq6qw3TFx7PhyqUbY72vWcak55gyuZ7wUgNePysnCNy1AGnJ4Jjk1fhS2G67BXVDW8",
  "key7": "2b7z7mWYGMyiEVWccs1m3FCTJcFonsL36FQvt4jfPTTU1fy2XgcL6ESHbsArJF3PuSVuNybz6k1B2Zrs3Rv4MGyc",
  "key8": "45tJ5VVycdj82cAB6uqxRxR8Gp3HQHsopyYMFQf7B9Bfnweq2bpovVCaTssN5B7pXN6TYafEmdjQryLySaqJRYU8",
  "key9": "312WBSrmdRVk1xwqcMEyyQ8XSC2p7AfnAkGdzheFRQ23LzkkA6FQF9si7KwwpmH63Ehy8Ufe2WdYHM1bh6YZx7Wj",
  "key10": "2wWCz1ceRLWeCXKFX6qyXyzwtJuSdjNA6R88GzQK3BkssPL4v1qmnyvrC9CVdH51eFxwKtABTxVWdUuS4AAKC1ak",
  "key11": "5UuRqeEUwEsdbWxj1GXtTPzKvvJBAwzzveEo8Cqqu1aMUTbZV3YYuwY3F1Ni6ePA9JqELddwM7VfyLuF3md219Jt",
  "key12": "5tZJySJy2epoKgG1VEkokegLX4EyMvxbNTPu13UpSirGDSn353TB3zCkUbSsZjrAANzQdo9ndez9DkG1sdWXauvg",
  "key13": "4FAX7bVbbZvnc8QHYbCdkJARYaFdpH6PKJ4GxB9DaNmnedk49qsnfKP9ZS7nMckc6V9gybWSrXmNHbPWYF8Gt7X3",
  "key14": "CXb6btPGCuFfPjtRbVToHgLsRCtrq2U45KEXeyxR5qjdpfxSskU98QmBfy8LAVVQRYGqEaQMUN7jAuKY3FShTXA",
  "key15": "23bbsAw24LYrJsVRRhrXXoMVXwgNBbHeLMm7LgmHkej3EyYiyRTuvxRNuTpDF1qvbGybc9ApSAZNwxK7qUAzBvdR",
  "key16": "3A1pyYq4fF8ss1FAQHg1gZb5U8P44cpuYJBkMqLZEpH9UD97P5ZRHEfQiozNQH8MDkNhgpuBfYRrwGYPrTw5x9z9",
  "key17": "59FPKZ2ypzn22pheJ79hmbbYfcm155WbHLYN7UCwcdZexXRjK5xE9wtb6WUVQ7eV83eab1AjQhmC9mYz7TqK4JFq",
  "key18": "237mP5NxZJB1WGGwUx2FfR9GSUzF5b3H9JM4HiJgSK9iLyXYfkLnDqcFAN4Z9iZiJn5LgUQ4yj3YY4hgopeDL35G",
  "key19": "2EFsdvBU3Zj6AxbJ4yGfEwCTuzxLJNe48yC8rGkdA4cgX2tWb4NRNrVTxmQ3KgKr2j3Y5Pmx2byqeyYerpNg5Cnu",
  "key20": "4FxiZhMu4ZX9cE8tAtCLbf7x9VWF9FGnqjtK5HNgNc52hPRNV4Zn8GF1pykooKsfrMFnyeHGipxmtJVouReQxVYu",
  "key21": "38jzKqocHzk66AC6oWkiwRtBDuJNUsUV6m5MiwfwKAtKYG1FADJqkmC1gBpJqfHS3KMGTX9LZ7Eq5ZuNQAzFBV4n",
  "key22": "Mzww39TjphvtFQz6Fj8WbosomRqJouuGRVjqm3RNTJuKr57Q3E1fH6dspuRHnBgtHgiVRmxN8fq3qduRrc12A8k",
  "key23": "3SDGncQJ3M7ASrk6bVpkwWcRhvFAc3Y8aXER6QHeGeTjSQfUWow3oMuDjZFKnx8Jhp9s8hqzBsQu21ZXmJdgs7QA",
  "key24": "4xXM9v9z86epwLY7F56swg7pFd7uAjiosMYA8dUyypyWaETWDXPbzWfcQvkJW4apJPsgKNhPPJh8w34n6VfALYdV",
  "key25": "4gHF2npjg6HjharAYDmjdgR8xocGt68EqdpccKkyVR5cXb7ERaLJXAKeCtb4UvPp9pyPKP2eLNE6SYpasrPhoPqa",
  "key26": "2Cftnuj9YsfKk3e2oGdGmu3uhCdxBsj8zTrMwxEmQAwy1jr5SootZebnfZkjsbygH4cfL3n1QgRGn747RLS74B2o",
  "key27": "2PanXomorcHPJ59NNY4gNA4CgieiRDeytefUQrENZfL75as9scog5ZMc2XXkubrp4HE4qCFTBYdnvmWAMBrVQC13",
  "key28": "4HTzgoH3XHYWWan7sriKkJBg7DJGj2PojHmt5FRZQ3nfhAXDPpu8gpGcxKGCg6yihVyZ7XwBBytbdAtE7ZSw6dpK",
  "key29": "5DkK593BWmrpBL8LTSS9jdG8xfitfkBBzFy7MMKpEgcHAhLqH98BApdpziciGn8zHDnxRS9XuGRs42YcSas9gzDY",
  "key30": "4o9F6uKTyeNXXPhXMpLzXyQHKRtPFPTJ9YxgDFUXye7iUuYuWgnoSZTSdk5cAhvUZxucXCrJ3CYPksEzFHDTKoPP",
  "key31": "5CzmHHiajqqVt3PhrFHePyBejuT33hGN416eHcYheK8NXc2A3k6oXzH3SWCTHGPTJEfQu4pqAhuua233bfVQginE",
  "key32": "5m7Vno5SeYwQgfLX5ymNB3miggyqV7D5jmHtfqmMq7QtomHG3HYVQKkXhEE1A6G4bkBaxV1fYTw4zyoq4Jpnj4pV",
  "key33": "9jAtgQXzgS6XVwSAD8WXKjvx2HJhC7XsUsAnYaTCMeCHQTBqX5ENNWW5Yx8FTynjoxbawnssBTFX5rQ5UAR4nKM",
  "key34": "54ahL1FTBqexJ7Sm2EcZUo7gpqTK6CLaU9dNCVihJPmj1atQE4qexcB319FAHfdNJooUjjFDoVQFPt8reAZ7GhG6"
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
