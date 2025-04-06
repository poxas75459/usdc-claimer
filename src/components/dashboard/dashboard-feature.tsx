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
    "58dgFi5ogLMra776g7YsoaD4BffeRVKg36TKqtYfpBhnnTDPzymdBK3djXUhrxQeFwXbSPqJgqB1sPNcbTF5ocGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZHQ9MhnJdoZmMMQkPvAfwSAGEhmbcWRnQ4KHU9q1X5vZqDRKohfxFz8v8J5oj63w981dsQV1crm7jsxTVNUTsp",
  "key1": "4BBJdRVYronTLPHw1BoCBjQWyRgUVfpkbgU3x8QbSHzmeWMP7nE4HmBbQpCXbuqFFrGaenhEMrT7Ui4XTer31363",
  "key2": "5hh8VWdat6NQ43wsoaoqpvkLnBEh6EL3DMn3keuJbmERchSsiJN18CLePLvHCdWvC7jnTDPgCqqd6LzLQPRiZFtQ",
  "key3": "35XD9KHq7YMEroNn11a1KXBQ6SgpTvSxoMNKC8bpcWZfZMxaBmnAhi7eZg7xiMq6FkAvjptqHsStrZ3P2gSz9yoK",
  "key4": "KJa3g9NdXSChfZgL7MA6znVoWWMEEP9Eci8KWTkDM2UgPJNJGYd3FEBUW2pmZrhomysQPSdD1QYUArSDyxPVkXR",
  "key5": "3UeKCowb1Qx7rJZGkEJKRrPrU7HQ1btgXK4o9vj5HMxWVhUWpFTzJwzCpwr9SgQXoWt3fe1Dk8X88ymEY4RyybcZ",
  "key6": "4jb9JMAohneApDQPHqQ4dEr95XRLnf1gwAwJT4Qg7TSQxp8hvf31qwmgpZz2kfX2rvLrULgnD4hSqAAD49jFrhSx",
  "key7": "2r2yAJgASk2NEUCxyEmuEG34QLTdy498EeAqWdUZov7beGWPh4ZWJrCvemk82f2qiCH14U8hsnHdP5ZrHZy8Zq3C",
  "key8": "3pgJ84LcqGiDdnXfCpcZHBgpw2ZuggVoVgCLJJr4TnppU2UReyQVVvpWYbD9WGQcJcc6rGFsMaBA84SL8dBz8yLF",
  "key9": "2M6YgwGAdjd22b5xcjJN4ptrVLp4PGLbY8phjP7qyD2J7w1SZFgqYHrLyfTwbTxCCDyFBAPRg9JFr4v6QUhmxDo4",
  "key10": "26Wiu3ypuo15d8WQko4bu6vnGvRHDQBLeJKmojLAmuLLgXGwrbEpm3tA3ndFNf4BUGNHKYjV8Q9sJZP1GnsVaC8g",
  "key11": "3BPhC6rDeFhdqhmUXN6MKMVF6mpwD3mtNn1sXHwuseskWdGzVXAbovZpYsnA13GHnTH16tUuHe9Tq6wwSjKkF39q",
  "key12": "cpSZdx7A2oDuU3QMy5KkcfbBoiUxM9kXbZSiSXYchxQ8hiCCYgaeQ2Bs476ZzfSuDMi1R3ct6cnynfsNJb3bQoZ",
  "key13": "12yDfSYYZwNVS1Rbvdradc2t1VDGXcK58Rbo86pfAWYb4PsSr2HWzf8c6enbrH64FWmoTZGLqbJ5eWj1S4MuRGc",
  "key14": "67azW4JDFR25eWo48F1tNzkSTM3zDp4eeoXLMYmwKmDGRJmUcMEi9NcrqAwtoD95k2yMDNcVJxqnTHN7TDMGDWaS",
  "key15": "5h7j9badr98PJLbvhTDUyaUU4Tv1zE35csRDKi6DgBzFCS9UftpYGgPB4JhKHJMmScK9uAC59yaX9AYQ3uVK7tsB",
  "key16": "56RwwJcD1tYBXqfg3jEp7xXKVLyCtknycoqhp7niiHMAxF29GXPqDVXyXSFekhx47UbAEziWb9r5wbkEjnBBQhCZ",
  "key17": "5HcrxykAQpaXiTXyuAC1ws7Lp29nm1VvL6m2RyquQE33SZRAn926CJivU9XjKyvTkoCSsUdXNF3FwfqQHKBpvRhh",
  "key18": "36Ty3zcN1dMAAzRiUR9BcewxdQJQbtpjQofApx8znWBCA6hB9xNkwHxztNWmPP4YcsaVNNtKDxLvnQUHNkAwr7hz",
  "key19": "cqgMstvLXxFsJGiQABdn57moamqL6L8X3CsB4Jb7qP6i3r8VFDj6cLhdGHNrTwCQcBE53wwMoG2NMdnC4wSxNdG",
  "key20": "2smKXVufJyyFyNZwRGqb234BWCLRAvtHg4rj9zT6hZ2GsLghxLWBFv5p841hDxVmioUd51fL4LbLUyyHV76Zrz6p",
  "key21": "4DYvDu9f66S9a7cwZ6FcyED9PS9vKNmZhk3vg1EMpPtLr2TikMaQZrjGbhMGvAmVQLEtgiHmF1CL25xgcZdt5Zus",
  "key22": "kXFmEhK6meTgYsN6LTgDCEmkRdCa9wATmuTU5vLxdaZ843y4PHWSXThF6HbBFWiWNMV7WiVC7DB3yuNWYA7jcJZ",
  "key23": "22AYtk3YfUZYex1WKXytPMLBvGvjod1eM5nJP24dtFLLTBERXvb9MLzU4AZfQnteXQtoY7XpvTAZFZdC3h4pVhLJ",
  "key24": "M3yWGD9eUu9dL1YiT7xx8EvErjSbjXYGsJRSc6GJxeRTdHKaL5PGVB9KjKkGHiUrvMvM5i1mRubGqL8VbjuhPh7",
  "key25": "4AX446j5jAWUvPDFwjv41G9ygn1AgWuA5Z23fHDKk47YCWKvnVdqRsL9f3yBMC6XQiEVc7Lw82JcQxrfTp7NHoqo",
  "key26": "HqkPqZmnbzhVzqq7e7Cf2Z5PUAJdcBCrGFigxTAy8P4ssAxj9ceoGJptJJLLv98NCvucT8F28e9FoufB24yvLAa",
  "key27": "4RQKRmakjJJTRqbAHbBAZoE3g3U5w7e8DwizxFKQFNLps84mYhR5qS4hWxXjRexwDWdq2PLP7e8Yzafi8kXfR7R6",
  "key28": "3vRGyYuMpaMwUYGMXhgChBE2HFEztnCh5dtZUWHAZ1m4rVQzoZABbHKHQuC92JYNPeJbu7dBGbvSkWtcAjocS75o",
  "key29": "5auvabojXdz66t3kG2x8Gwj47DoYM7e2yX9N1UUKpZL3Meiz46ewsGTcLAfFHFzrCDCfCJwceofoyMpqzKCpZwM2",
  "key30": "4UJtCst5xid2x3uXoDPbgU9MDWWwF6JxmL38uozHRKDQyqLefR6f85pMfbNf32N2hsBstRb1td1gRnxm9QhfrCz3",
  "key31": "4fvTrXG1FHWT2mRxwoyka2JxQjATYRR5xgFEB8j1kcdLAmFk1DqbZqUBDyjEypeynVdSqB2n9FAvW6QBegX1HUPc",
  "key32": "2WrjKT9VpmCe4388Fwt28fcLi4cP8HwCpBxfgaLfz2K3KLaXtTmqmLjb7i9F1dtoMAGtvY2K9ARanLse95SwmBLM",
  "key33": "2iZVYWCKmwZjwttiJVLGTLvCry8FHcNcCnG9tcxFfNTA1WeQJVr2vumCU2jnwVD2x1YxCFSKZRCjrVad8qX8AJ9u",
  "key34": "5yfAsSEhkWVRdtHazmCZJMBmF4oPoNihemAwyk9eMP9hwuDqcMHkTrJxrw8m34no6WeHbng5vJejUFeJpn2Skwgf",
  "key35": "2pQNsxqmX7KMPHwMGusdpYDwUV14Yzx9h8NzcY2RB8o2h6St7nAnAsk1koh1KosB8PPvxuyq8VuWUnPgTRkR8TgB"
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
