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
    "5AGxdwUuYzwdyLcbw4dqTF4AsFkCZ7uBMEygFcFWJJmieRPQDyD6aT5RPJGjxNhs6CvtwX7jSpLh1J6bvYgSGhFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLHTG5kwYkgfGWzCapHoyMSmBL4MgW2LNPhvnBQyyfnhvaYh1htqhyqxi1dgkMzURrYeTnj3enVTXyqMDguCb1m",
  "key1": "oBcY7rzJNv6uZXJPzwUAKr1zNHvtzQPJ5qoCh5b7wzoLGSZZ79tRoJUfgnaEkPe3en9PavWPEz2SYsq76dGXthy",
  "key2": "4fHh8pTb4yj45RKus8CHjDZ2isDCzvqcn8EEoNSNzRSAQEafMnGh6DY4e6Go3vK72CA31tWKoZGkCNrk57135fF2",
  "key3": "2Bsy1XMCFHXastij88Y4A75smFdFABuDPdE8bpK6ygmxNTJoq5LsbDKeNdYSvCN4w9BzQuqEvwNhqufTzs4L1VUG",
  "key4": "4cP8HiDjRNNak3R3b9QiNdQZvrJ7eM3rWDdZ8h1ak2eNpXBPPhjYmZChtZ62oy2CXg79ztHsz5PysSETojK1jLFW",
  "key5": "Jk44q25mZpVooeFVckrD8M8oafbP1tfqEz2gzwwJ6rNwMqXXM4R6H4RzF2gFYoaBpgszZMwuH8qTeMaV5zTyMDW",
  "key6": "3qMT8Wqa4d3HS5Lv8DMCEa8i9u9eBL4SNxnGhaJwTKGzqLR5Jk7vNWLJMoRykpaneBHsD2pcPTGctwwGfvpi5ZQ6",
  "key7": "33KAApZrTMSmtiTf5tXRhnh3kHfurmCJuxcxYsvfNXFEycpGPB4LkYovLQdtUpAq21kGPAvyJ7DdF3GCD2nRHYc7",
  "key8": "4jQ7VPtnrU5o4ktD6ctDyoGuHZf17TCRfsGHgU1mjKGY24Fd6Can1dyrue7kpFVXyFsr66xDb9L2ZAQgwzXsEBiC",
  "key9": "3ZYCH5xd1hgvPDmgqai8L6cf8szH8GgjKgPDJYug22uT5fyJB35exC26sh3JUgEcKrb1SWWnU2PBN3AeV4eBipgp",
  "key10": "5576pPZxycQfD8m1DnT9xYHs58uXdYV4aScwWDN5atrBLFBshKJ6XYQuMJa6yFpembmMTNqLDCetB97QussFt215",
  "key11": "5uPhXn78W9egzfPcj1ksEm1kEZXiofV2egwUVDFex4dSaYLWvYGwsoDJ1mzmBmtUmtCcu4kcrcJsP8QBLxAedS4i",
  "key12": "3pUTvdidnDgHrdXpZb45GQxrQstSEU7XAaS1HXyFbaKpNT7Tajt72zG8trJXT3jQRGu41rv9ArqrA5QsK9t7E33w",
  "key13": "28QvpzqCY1pM3mpyfres6iKNhG1EzA6UfvsbAkn6vu3uddvJg718A8K4a2KseFqNvuJFnwJ37KVJH9e6R3xXgata",
  "key14": "p51vk73xHWFTfbSEizxPihnxKB8RiM5aPW2FW1KBxPajCdqREX56anW4GfqiQewayx8N7mDt3mei3bzD8abgTfA",
  "key15": "5ZUkJWGyBnTLJqGZ92GPFcM6FGhNTHKdDEu6Jnsj96NPM4dkrsBeeUXP7QzKU21LzYyB3A42hoFtqHaJuFEdSJPy",
  "key16": "43auuCXUPZzdJUWpxALCrnrqQ9jWrC8r3Lqjrp8PqJQigijngVxVKkZNVrUy8f7Ep1zET31d8NpMqwwAQcuWAbch",
  "key17": "3orY2msLQj1ruDdnJQ4vwGWbrjjc39WUxZ4atoagwFAPjDC9J7F7vG9XKqp9Bs9UoANnWGB3sXHc2WbbcFuTKf3P",
  "key18": "kkHnVYXq4i4N2fgxsU2g47Zhf2uhYQ9JgnNjFJJm47ZPaGMzhZmio8YZ3o32uCwC7K9GmBJZ8zbRY3RVFfoQVnz",
  "key19": "4wkMqGddP8E59HHoYeAfttDspARdGbYgS4kXUqzySP92oHcHj6sc9dQzGPCBwcP9SPg9AL69Kedmi5nDchgdS5Aj",
  "key20": "mrJpBADg8dcJ8LTYt5s9DA6RmYAh6WALBhYZr49DNxgRKUbj3GFya7gPSvdqLLN6itRjfjEMCFeQQK2izRmW2oC",
  "key21": "4ecAxJ2q7Q4u8377K2tFpnBF2vJstAjijseojkcuBwjABRNJW1mRNicSs4qBMoePgDDsZx5BJygsq6RBc8W7uwyc",
  "key22": "2QfCrq1hsrSXp8zbZ9AxQJdPbM7GoMwuetYKC9tjK6Ew9dSMnJgk2hDLk9bsqwZo6J8xJ2pwyu1xjqqk4mzLc3YC",
  "key23": "3wyLs1jdXNKKNnwaUKXRPzJCx4bDnNgu4HAQ7TkVj1bXteqgZo3cT3QmqtJLp9htdQr5eqZCtmyZ7q8JnpxRaKJd",
  "key24": "3oJfU5y7tcHrKA8bu9pDoVx9551H4ZuQ4Axre5CnsjtgXnAzmLGKYh3u6Wif2r3mwsNXaZBKgxKuiN5wuTg9EXbR",
  "key25": "127Zev4iscjFJ2eHJXypQ67d9CtC5pSPb4koDuQkXSjbnyq5t7SFkripkTEAQvjupbDhaEUwCRXse1i8USvm6YuV",
  "key26": "29GdKYaG9GMehKNeTm1ouCxXq9LWfhydQpcNsuTz1CE2PXoBo1EiTihnsSRbeKdigrqVV91FsjptgmwFarmnjxHV",
  "key27": "5e2pCedk5tjTMSuk62TMT9a7nEmxtwHtcxBSHenvfG8XHCM97VDxmbe3FEJQsZRkGjtint7b4TGf9LnR3UV55F3p",
  "key28": "3MK4fC9SkULBM2mU8zVS2YDEj2gvaqPK1igXxKm1igXgFAbWcKkqDRaQ4TGxtEXdXgp34M7R4ure4MMv78fmC2m3",
  "key29": "29du8TBGASVniDQAu8N3ykZfgqArJXrThWRngDek9fxGPt2WJD91FTkjnYAUFYku2zKAJngqYEQA77Nxux47CpMS",
  "key30": "5BuhVeH2VSrudx2cmWRkYxyF92kYEkyBdRLqXFbnBZoaThpzbMtvukgvkq5q7FegomiS5daTukX6oCPMZsSsfx4E",
  "key31": "3Qm1hnxLeuc9vdDehAuNQbTouS7kL5tPsVqoYGPYsW8AQfsN9iSK2VKCwweY4MikFnKEs1Q4gLJiZDQ2kQMvdtfe",
  "key32": "kLy3CNFo3nHAsQiCtWvwtvXjd84nLHeqPrb8Rw5BUTT3ipnbpZayrgbFMXPqXNpQ9xHeFQLDrGdDv4PCTGPLdM8",
  "key33": "5SYur9917xTEBdRSf79abxBTiurELBmkVtaSyChruhSm3AHfM5tEcFn7CHbHsyghwBnv6HUoo7Ds5BRMRaSXHMAK",
  "key34": "3ybty36yhUjMzLQ7n1pK1dqSCCnTDrQuzDpwfvVvRfcBpVwHeUEWrTfVfBHKLHpEy3nRSRAvVUtSGXkiSLGWzEbQ",
  "key35": "5FFzhx6BDDxU9G1ZErxPDuEC5JHHGzYg8LSr7WCcgs4C4qo4ENGQV9qJbRwLhcLfyFx2XmbSUpFoCQ2FH4JXM9Bs",
  "key36": "5TbmCBb7LQjD2mfP7eWwvpVaHXR6fFXc6WcQnJ4St15QeT8cTiZMXCshCQDAr576KWbUzCL9M8jcduYm9zz2QgDw"
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
