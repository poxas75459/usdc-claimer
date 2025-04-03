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
    "2P6LcQ3kUcpJXkCsAoXSay8q7UyjeCnAwmxkY9udb22fVigwzAnVm7pR339jSogxdA6KhZZMMKuu9M4dj4rtPLRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCTQhA4y2GzW53nAfT37F4cRrk9u2FgmuC6PLMg5VDmqBmC5sBtYmsRYKZaiqkDBJoVr9WGd4JJmM4QPBPdKEu9",
  "key1": "5tJhYJqrAPN3MX2hk29GaFNteQ2B2r6buaAnhMeGvyCadfBK2aqdnX8PiZhjvX9ZCDt78d4bY6afVF7hGTCDamjF",
  "key2": "3xTNHbR8JbJSQoUnjLGohyvpX9tSKPe3TmZdATCQYDMCUYcjZmsdvxsoD7XiWpe1RD5P35sKmW1m17E4QufXHWiG",
  "key3": "4SAB63cn1zLyGJGoqk6EHU8nA3VehbDBrkHznT6qyEEyxQNEH39xkr5FsotnATsdUrZp4g65bhztXMTQYSuCLbUz",
  "key4": "65Nt5yKPq9Frymv8V4tWYKYpjGm8xKfDfkNaDRX3ZGNUohar39eYtvshPWSgsB27ADsofxuYo5fiH7WzDzWkX5m1",
  "key5": "4nEfRN3wwpgfioWunviJ2dqcxH2bh7PJQpvrBLz92Mx7PBrpfnfSzcu4M95iP4xT98D5ttpWjjMxT4wQVvwf6LRT",
  "key6": "2SW1aLcf8tH5J9B9vQfq8AngaM25uoeLAuZJB9Lkz6oxTm1h5tTpbZVt7ibvsRQMJ9AUJwnvNxiMweWycJ7VT336",
  "key7": "3MYKSvoQHp9QLR2QUa2jEqgqXPgQydfG3DXp6iw2Mch2uFw64RczSHQDTfvpwEv5Eh2PwR3LFkVk1wzYLsvqcPUC",
  "key8": "385qVRm8bNVG834Dv42fECcMqcQUjxVe38Zzp5T9u7mBeuR9deAQjoeDxg2Zpt4HS9kwswaonM3vT1rXacDcB9kd",
  "key9": "pSTTQyaMoHBEy5kvkhkSg8nZKnv9DQ6eF5GxLL3txtwMz4r9Pjdudbn97v4GBnZV3vWLhcNWPaX4PYtwdGpHoW8",
  "key10": "2X4Xmu6ryBEuRzkgVy8THoV91tamwKGiwumra7D8J4WHJgd4Ve2dAbSJti5b7jpjWTAJejVdXXfdBo4nAG3wAvn7",
  "key11": "2v3vuf2QogPC7c9CLYT34RWXAFqFrRFMZPVoRepGH6KmmQ3JmbxxpMCeVBX6ing5i9dWEWT8GdEPyMFn8nTKKuuD",
  "key12": "Y3vkUSbKH2hQgJcVTtV16vX3SmLfpSYj8GLTGqsjGdvbeyMmVxLVgpkiCDnNVgbAayqRrjFMeHq5nq9qZsFDVXJ",
  "key13": "2fWPmMQs2E9nwrEozVZC4pTX7adYNkz6NFb6FcncRwe8mTkfecL7dWCeaG52VzRNWF8XePEzCsTSffnXP7yJjCxG",
  "key14": "4PxujVpB7UyUxSEZsYiBJ1WBhbq3ivwqUwTpxU8mcYTzgprDZztLePazAmt1GAG331xDiJYP2c9jHKEg9WhC9TTf",
  "key15": "4Dddo6xWunBBsQqaXSXyDRvwMuCCBngcYutLjHQZY8bkgt1QLTezDtKKhJKLsGLDyTNjNTXfCSCx5PyyuNvN3a35",
  "key16": "9iqMJbtqptZ8MsohUFNt8pUEJmDJnvMXs2Th6Nq8iUgQZ41R1WSeT8DxAKB26J255ta5JMRqbcQsdPru5WoWcv8",
  "key17": "ut6R7MDtkmpoAFPUGRwcLYNUNQBvoXSkNXnXQZnMq3t7aJLvHD1HC22WaSbXvrnPKffzZdQvJW4aGU1VbWnnCzf",
  "key18": "oPkHBPkK1pBGaTaij2Ak9oVq55YjdxxnpZUrRdrnKFpGdATHi3SQb7oc8qqu5f5yZxj8tPPZ7FuYPGBtVJ6FNQY",
  "key19": "4hZfMWnKqmjkRfF1NCN4bLtWEd2KojDdWoTuztRcg7AKA8SsLz1TU5Ab9oLBKdSdmYrKXRkLBf6o6MwWdrbsAthv",
  "key20": "Ut3Kfmi9NH19GUJAf8dcsCtLodrVnAcDsgZSVRwTbDP5nf17nxMakagjTJRaD5CfuhCL4r9U2DpSYSTfvCde4Px",
  "key21": "4C5YG5CJbcbHuwqcVfqr8MC2YPyqpjBUc6vQVQS27UYxhzM9sGrPPAYkDZ7Cdx59iSaEoT7gjFufA5kgNFuwUAK8",
  "key22": "xGfv3pAKG8ZSuwGuLL63jABiY1zQFZBAZ1hW7R26bWChk6eJ5QE98QXfLmhrrMYMzRGbS3oobc312C9FMStBeQG",
  "key23": "iT4z7GGCxvoKaPb1dU5WZYQpE9ojSySfZbAb2ZoUQCNeQ8TxmCX7XZEd92Tvt4gPoNVGbfBFi7whMgiUS4W4UvA",
  "key24": "M13XXhFySHPNkkdVwk6R6hZFXfk7jxiup8B7iMhDsBqbUdNkN97mmeMP14UmD6MYC8gEEEDN77eYFNwy5GV7hzi",
  "key25": "3jE52kesWGx1wax2UydGHjUNfiVgqzt2Xbf5J3NcF6eLX6gZSwHR9vpufbs89w2NFogdhbdsZ2FCS3SuYjo4bP5b",
  "key26": "2KXViaxVFntmUNoCF9XibQEcohPJmkyFSLX8ynTwDZC3h7u4U5jieLbLPFPs27LZS1Lt28NVNQ8Haa14Awdda4o9",
  "key27": "5re6gxiLMT5CKjDSzxwuk1Viq2f5uMDLCo6Wg3Vh2BPdQ9dTsocNeeZXvrYuWJjYu9WxmJEMvR4NeeH2XY9kU3cG",
  "key28": "LvLqMvzFR3YkKPKR8S6xVhVc1ERJxsYz6RQfnf5QiKNdug4qGna74scPW1iDoBD5AgNmrj5rpGTkPeAbfbLbyZa",
  "key29": "5jb1BdKKKVVSqQUTGTEaUc8XfTWvxECtBXwBkWbpdwfeskpHX4FmeZRoqPqDVU6pC39HJuh8EbtTjJU2ej6xfUqT",
  "key30": "Adcd7LUcfwptX96JAEiDgjgN9iaNskn5qcCn6F8MndD9WYNQtDXK53JK7qz3muhJh9v5gqnG7TyQFDaGPjWG5os",
  "key31": "D1RcARqmxH9ZKLHz2inW3RWTipW7r3g6Fstcn1TSboHXhu6Ly9Y6QyecXhZwYFioSQbpX5ax3xvbKeYsKvXRSHk",
  "key32": "4wiq9fA1nnBDNdYiszFktmzpQSEhFBpkpob1hxrVGSRQxwFoY8GuLjG7qRfg8SAdo5NKXm4wsgyCLq3CxiX83KXg",
  "key33": "8sZxcA6SAqp9esnuWX7emP3vG36qqP9SSpxsrihN4XCSNyGfac4KVEfTaMJzv1oJfLgjPfwJJjkEU1PmxmfG8YM",
  "key34": "4FV8zKCHBR6WHZ6d4GAUZPS47hktXxRV2f7wJ23y6Z5EpNSAxzEqZDZPyH7W8iUDnqTFFmitDoFF7yU19VCqVuCe",
  "key35": "2Z8nNKYHYAfbzNGDmTRMsTepEH3YMdHorr78r2WKYDaWgrLbEhY6cZXftSE8cwcnBAiK1cXnno4jwFrZXpquQ8AU",
  "key36": "44TaKWDvKQhamABGni4n5JZNTuAcdvNRVzVBh8gJoFpyTsZAmZkkd1kAgqNSe9PZDQPCuENaHW5gJC3X5aJRxRKA",
  "key37": "4A7GkBavKC8FMK81os9JzBTdLYdJvDqb1oDh9P8ST8XgXEBJJdztTtRHnjdkGPf39wB8hHmbkfWugPqEYSYnGhfk",
  "key38": "4ahgvFhsCZGMaxsMVtvqt2Yw1TNU5FmddX1Uuhj1rLAvtSYqnhgSQ1KC1kqeSjvVCtNY9xezy5Q6MhzwinBCwRU",
  "key39": "5CooapnQVSy5ffSPcG56Bqy1YPJhCc3ougG1sQKPcTsHCQBrJKmDf1UrvRjNE8LAvndGyg1hZDftefc6QvSPtdi3",
  "key40": "2nyBxoYHeGS41NjFr9r33EnCCiPXgwf56qivfdPDGACRHSYLhLCmfLTZThLjuc2Pc6RF5BJPXn3vhUr19GQennAj",
  "key41": "5BUpuDEavPq2epzys4FAVnHsaSBDkNxat8QDZj8BE6nCosQfbBRp3CgjCuYDzVy1kGaCZPPhNXDVfrU1GvNqQ2CS",
  "key42": "2Uhk2Brv3C4HrsErFfBrEJuWMhwfMYsBkmKzkHPf42LozaEbNqYdvdJ7Y4B4FnQf1XG9DqpDmJLc92QrUGQLRtA8",
  "key43": "2yPhGF4ShP8cww9JGvqGDD5MJqrux4TcnHk9ZHJeNNKL1d5ir3TfNgqXKrETWoa844DN6XXGiiq8Cdrd6GcC3VKY",
  "key44": "4Y5fJ5qH3NCQ9ZPafpreCgSY5dLiM7ijUA2z8vxRaf45iQ4z9ucKbXhHkSLHZJ9LUQRHiu1igbGkQA34UNuwkCso",
  "key45": "5BzPrmghJH827utcGjYA1C1pWpUncFwNNDz2n4jGU2UWqNfondCAvTFaFxvBzekg3jS3ktpS27Jp5EmHXMCiEFXs"
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
