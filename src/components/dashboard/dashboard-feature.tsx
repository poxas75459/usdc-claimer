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
    "4XCpjiW4TbjaQgesMX1pm1NNkKbiyYHFnftUBPzXUWhUewMvLFF9mgPRrX731FgbFnTucCjQr8qa7QaxdtYtH6hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYdvTjyWWPEqa6eaXGqVHL3qTrMhePWhhi3nS1CowY8twT8UEdKo9jW9xDVNLAF2LhbDam2zEcgv2XyXrozDmvt",
  "key1": "21G33mPL8uMTTfjtEwsH8eSARaoYNxooxRXVTkJkv5LhXt5zEngwQZe4AFc9MAY5bozmaHR8v6sjai4VtZ8Pe6Eb",
  "key2": "3V9dTrFuavo6uPadKE3iFLyMa7DbSmwSu9dFNV6xwoeDn17JcqpQmLY2cGxRymALy2ag4KurAxUe5eQQEjcA1adg",
  "key3": "kDk9WUbBwbyGFagzW6ktxkgkNsgR59zKEURKfFhPXkrV3YrGJJiCyzvx9ECqTY4XBcSJiD8j2oTxrHzMAFwJPTd",
  "key4": "4gWxAHJvPdqTumwGRPzv7Qm7Cy4sHMdNp5mA2Ct6i4Jav1MdT4MSpYAFNv8W544ocr4TrJj8eCW8zG2RBswU9E8q",
  "key5": "3VEmjWRqbJMvQNmYV7NyLGUGEzBVXEFNHc5FmEUtpqWZcij5XeB4D98KcVfU6bDzoaVEhipFNVwJgZMyNGGmzYuq",
  "key6": "4ZmYP9LhKCbgAFLk6BXEKn7pZe2CRq9mSsBwnHpBrW9xSF49VjS7Ypwz4ckYP3KeVuzWV8Xov1Cc5Am1MDUt6XGE",
  "key7": "5auj4UMqKGEiKLcKkiMYMtP8kprDp9SVaLjhujiJRUfa9FG6Go5Wk3XAoQ5ex1pLjqhGDRGRZxafBKKTxijYzuva",
  "key8": "n8R6DBeUwbtZoF3HKacwMSPbKtkL5Sg5Lzfxx8EeqFKXqicw3CH3rNuJ7yGZ9UuLf7NaCxjLVxpSpPFjFEoqSAB",
  "key9": "4eJuwJWHT5ZqLQQVi6QgdFMT59kfLLNoAgeksdvgZPDSqA8jU5HKBK3cHMchcwh4SfgQuj4aCCs673aY3c2PVsk8",
  "key10": "2LTSnmJtjk7NAgJtSrBrkNLoWCsBav4ZcTKifVvcj3dX3jVYZdusChrb47JeZmmhiWh3iEju6xYnKKjghrJUtWVo",
  "key11": "4oUKBL1V1Pz4yL4WPMBBDR2HbFBpk7sybZSHKxeJiNnM1WmTL5P4cLi3U3iA6RJCqQr3qDBTHhFSdNjYoLGGEQJF",
  "key12": "56F1P8PGRPHtM9FHmveaG8LfgxKGi4unAeHDSsw68H34pTgzgtJhUFGt7vkUTDz6FPVm1YdVTwtQXfrVDPJEgFv3",
  "key13": "4Jg1JPr3V2L7avrkEMm2Jdoys8cHVhAWYN8mNZXpS2ktjMfLAxzBNng3WMAGU2KPbwF3PqykZgVLkjUk5wD6KKC6",
  "key14": "66fyaPXFBj4bj41TFipAr8nRuCXUk7sbUMjaNgefpYR8xQibjHPm8GTUdrEMMuAs2uD44nwhzsRWVXrcHG5odm1s",
  "key15": "21pA9AgF4PhamyNcnG9EywtG4nECPN3JYWMpchF9xBwo9SLmqe11g2m4rqEwyXWMTnWKCmPHsDiujKyTQWM2BWvC",
  "key16": "5F9hh9nbi2Uga3E3CdckQgwiNZ8BHhr6mWwh5cFknhLkUbzsrwbqrbmdC41Bs4LhG7rdxfJTJ2aB1NyyUsyXeMvY",
  "key17": "4J1T5ndub2Em59R8cFMgB3gCU1HHJ5J7CJuGdcvHJiVzikfYmtJWWfq34jvoPUk5eavmEm7yxUKyqpgNSepNVFaP",
  "key18": "Y9hxPKGCdN3TpPBaBZaPr9k6pdDAWKwk84KAppSVxYNyu5snwYYXjZMWbF7fVwraAv6dMPNtryC9uPgfGhc3FbJ",
  "key19": "25c3MP5an6HZeFx9CcbGDiB5pPNmo6YHsQ8nHiPJjffxkAwFqvNiRrG3hCZRW9KxuZjpTyixDhqP8rpvKJwTUYaF",
  "key20": "5SdFu6hwqsKvtUzvBDfGiKDBqAvYotK2ubTC2wZbxhh8YBwZa42a7LKKuovDWCmTzMnmViFgpKv5MpNbNjNXwtXQ",
  "key21": "Bc59JEo9TFMMWM7hAQpgdA8rw1r1HNNLZUwxiZdqZV7uVDDHa5Z87bavwssNYzrBWhAXCmkD71aFdTKGYdjUL7H",
  "key22": "5w4nKkHw7HsrBpn8vAurKbRK3GJgzm99pPcpYdySjvNWQpXhELbGoBesYMnVsvUFbufjToeuTG9uk9uewR3BZrAk",
  "key23": "5GUXRADHYpn6MpdtczLtVTucKbdvntiAcGaXQHCqrzHARPzNFDEmfEXhwCpNMa3cwWJggM8y2ppnVAXKEeVdpfuw",
  "key24": "rRP6mxcTjJGS11NqtX2GVjH9zMtaL5Mqgs7j2dDNkrFVUghRR5nenXShfqYctQ6sa8n3PoigX4kST8VMU6xSsE5",
  "key25": "Z86Mq5FiRS5ynxUujReVJjBTEN3Aw88DFvugbvUD1hz6viR7HzG18XbbaCV9NH2KCfguhoVSfGt92u86BuCDUbg",
  "key26": "2Kkq8GRRpR9VHzaZY2h1GjfmZzsZC4VjU5mLrN3sPad3M9rd6JxtaLEABBfwqkVQVeU2gRjxxUfYTEUqPHVkxPs5",
  "key27": "4RDi3ksaPtZugAaQM7yj55ELZZ4yL3pASXttYNybhuGBmxHLMViRUc1jXT47JoSNqAZsEzxrV76yTpUtAGugP24s",
  "key28": "2QdN1xRGcJQoghRMBSfQjZY29xzM9V7H8YiaAe68CYAyizwZjgofEVi7gikKDYsBLQGkm7fbcS2X37uzr48qh9Wn",
  "key29": "4znqsMmH48XzcaCbAoBnW2QuQaG9MTcTgmtADyCDdETuW6qY64CjqboaBnURyYQxpx6Zd1xsiuZJbsQXh8yUe7XZ",
  "key30": "2a82FLzjXa1m6sL74KqGyuUaon9MaoH95V7EQbf9iqTpnzmC8Ren1HvT4gQ5idpeDBhmahhJuGZYK9YskQJ896AP",
  "key31": "4SyXuptG8p239kbGpBuX2iLCAuUtAfzffVL5UrgBVxWXf2fkBFbZH6J1uhtj1136MgkedG7A62G5n8Tx17TBSaJV",
  "key32": "2UXGhxHkuFrxKtcX18nBQog28jD9LkEkawXfbwyfi5owzLHq2ehzHdP7obDGJDCJSAhkP1Yt1XtByxUUuvac3WJg",
  "key33": "4WmB8ZBKHKUiYd3FLT6RYFy2mFE2bj12qSQ1axqRdEngz3JtKFecuMssao84HzBGHF9bQ92N82iKpKXDEKU9d9NV",
  "key34": "3ziQZroCohswQDU9BHLcEJKtVBFN3WkhoovqvSsEWSjD1iwxx4ZdQje93GFjTqjR75nykfF8Uo7PyF9WgXtHxeb8",
  "key35": "HsCSPct6LFpTr8HMD5zMBQ2KsVL64yTYf6jnfYKWyeHiqNPvGpA82NGZAXeZC4SunL9Fiz6owH14Br9NzgE4FgE",
  "key36": "3Zw9RYRDzzUQ9TTuS5R62qA2py4ybQsdVUHvF8nu2LHXMyKXKbgGfy6m9VUfSpCG42hJdmoAqShnzkDRCrMedmU2"
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
