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
    "1PMK5acuBTPpNSokVDKuNwfQD4oWe1GjUPaDnBVaV5MrwYq4ccbpF2B1Aq9Jbm74Yt9beB4fwCpJLpJjaKbDfan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AFPYcFD8EV5VZBrxMK364YAVT84iDNbEZCtUvZzBs5n92S5XA3sQ3wUrtpQQHdM2nGjSDaZ8D8e8XG5RKwgVNu",
  "key1": "4fwvnsWEpKkCXZ7oYFsxMBYAcxBvS3k7ZTeNCkVwAsUdwfYKASzG1bKUENQmygQzygEf26tRBoSnnGHHoPxvNmPr",
  "key2": "2zkFs8Rhr9bo9p3xJQFsP25NVmyCDg3rT1SmjeE9c1tHjy4kyYw6dZZmXqAci5YZmWvLTN3rmWEPevRdSj73HuH6",
  "key3": "MRURtyi4aSd4kXDQzodBZaQ4g2mBxh2Uodfp8Yifkf7TvGVZyLVrHy1kUyP1SxxfacaCXvv8KZQzLGWaWmUzpKq",
  "key4": "5X2B95aBMEnSUbDTMqNfo1kWW5begRZUKuaCuvd5jbYn4eNxyKZY8bdbFbBgnnPjzVGuighknkuyby8fvXE7Q675",
  "key5": "3HYNB99uuRpYxrWLRUJr79eFxJ9MKuAWxsJvPW7wzsp8RLELbZyEaqTrYgyc3Cu3VEVE3wBcfsVsSx1CCscSZgh",
  "key6": "5zXWmrRYDEgykD3rmVNLMePXPTuBpKsqG1aVT8B7EdisJ2YZcjfAqr5miY4jBQ2LXkJ9aHKHh5bdqgSXKjK7j1ki",
  "key7": "4fZSHtJGAPrBrJ6uk5S8BAQgcS7NunUw2YZTxbyXYym6wyNobbxoCQ8Uuy86y327jfUiJ1V9LJQCxSCEhcGjNTeS",
  "key8": "4epkbQYfQB8djPA4GWHYDVELu54mAHbMgQBgrDrSqMnSXL8RsXm4PNj8KQPYENyPs6Tc4TRnkE5S2u9r9UqFVjrv",
  "key9": "2rUgVgCnkgRMJe9grZ57nmjJtLWQQsDQ15tqZkGYg2D5CnF9VChcGhAb6SAaFPCbtCJVKUNmPf43WJ41T6VR124e",
  "key10": "3cmAUTY8eZcA2tpBXAVGYNBXHXGZ5YqEmNfhWC1ubPFYG4UkkKT9cz39VaibNYvYvMzkFTbXoPPP9onBSh8KEqWr",
  "key11": "5rKQpt6BL4aApuRRt4gjJLjQKvzHnVtYy3w4qpYQ3AxLnHrT4dkY3tyYMQB7zuVCdPgBZnZUR7B9BcJyMjSnwiBi",
  "key12": "2dniVXBGo4c3nNE9o4nJDtmUM7HjmMNfgKg3KkyL9LoReJRRRurr6QA2Wzn6J5pNCin2LKthDvdb5FNQZZUUZXCP",
  "key13": "5oyeQ34XooCAqak3S8st4BYV8xNZYvgAEEFSJdxCL3fqtMD6xjryVM774Y4MsBikzkQHDVi3NXtkiifbMYkqL5CF",
  "key14": "3nz1eUDiBSsAwdwzh1tAmRrEXVzBx741jkWMqsz23JAnEThMdYc2meYvmkepp2Jupyciucgjy2soAJkw7UVKLSKv",
  "key15": "io8VJc9pnYj7E3QcVPJZqG3GTFaxVt3BvJZJ51Mdyu3Axb84TzrUigE7auAC6juL4Pp7uRp6Bf45SkAoRTQLXgY",
  "key16": "3hXrqS1jYaZ9D78t2jYDYztv7He7zTS24qV9XLajmqjHZsrE6LPHiEMdto5sKFRsCQVZKcvaGayP8s9dhPTZC4h",
  "key17": "2LcRStyooTkTB1FqHJj3UATLoHtqUuXnk5vpEeL7CcUuepocjZ8ez77Mn8RCsdnrT5HN7mF5LxqRMbeuTVSn6ZuJ",
  "key18": "334gkdwzmup6uBmHLaTEuBDKJNAwiSQsMvjS2wUoymys3ba6NzEugbcTXN5jgSnaZEjPkCVRJpSCXBcecmbAYFKR",
  "key19": "jzcG2KZgSCZmrokMgUERwe4ZHujBEGhASJsYotvhhE3vpPhArRy3PJV1BGbJb4ArkxXictyzBMsEwv44gq3kqq4",
  "key20": "297TrLwZduhytwsCz9QqVXco81dPLEXuieFVQZnhwiKr5qFPRmJNQo95Yia38t1fLwuFdwiDLc5u3QUQWkx2ZCvC",
  "key21": "2GH2ZSgP6csRsmM6Z3K8Scc74FbDrGkVhZ63xeMB2mWbUdwBCwosErgwnnFwJvAtwEkr3efpnFTVAagZRFnGSACw",
  "key22": "67LpTFo5BpNnJu8RQ1CAjqNgUedgSRgpCLJqsMF4KyQ9MbNS9TaaJGVL4FEeGMYnvdNkKtSmZ2Ep81DbDEpTp1YX",
  "key23": "MYztbu4sa4Z2aq3z6jQkHiDECdP3SfK8kbWHt45KiP84JJSDfAfebiUzrPcvGSMQ83PL53JYtPobgzBZ8YDwkpC",
  "key24": "4pmnRukNdweXpyWYj2UAkiKbET6yySJbaTGNbHZWMdEoA6qj9a2wfrYGDhgYnnz6vncffPbHXpVi6nCwnbpP8kEs",
  "key25": "584Ls7WBfvCd8x9MoQoVgoJgeaMTzWgFN4ZPnJfrADwkVb5NxXS9Gv4NUioFu3qZTjVcsbCsm2iiiJqy57ULhqNf",
  "key26": "5uArKvDyP1a265pUxfEfzcyicJWFHRhGJ9EwSsc5m9s1s7d6N2KskYDGeX96cSkVws1esTMEMHSGWaUdiExbj2hM",
  "key27": "KG4dYscyhuZ8rfD831favdnUcnGbH99J7DC1Hh38tNLgGFf45h3X7uFmbmWJV7mgyR6K2pscFcGPmffnxpSf8SN",
  "key28": "2GE56EpQMBi11EQBFg8kj9r7FTbntNZ9PYSWgUKNPrnceiGEWVebLWFtB8pqPWo42521FYkfRCHYEFGc8TJGJuoD",
  "key29": "2xoAnhyQiSKsd6SPUci5DSpiqA6LHR9r8hxB9UqzdVWAZcohTu7EmU4qFJRRhh2BDMXBWyhxgj16J5MwX4v44aWi"
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
