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
    "2XoWXaq2HcE59MD9pqVyioL755UBxwkz81K84o1xo1ffF9ntnc7wwdoT4subGarJDJmxUyoxew5y5YCUmHzQJbST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCTKvo9euM78KAguU9UcP8oucpwhNanRa97FXNM8MqNPXHh6shMUF9NBc4TK7X61TpPC7WTo9aVvmDbtwozGabq",
  "key1": "3wPX3GcyS4Sbd3V7nbw4MdSKx2Sz5BPaguk6WGzsDD5FdEtJYZnZ2CtCLgg7xQAZMGcoZTEtQw7hcENDqGBuMhNq",
  "key2": "5qLzwgbYwFTC1MVfRMve4T3sAyiKSub3dMgKnHDAHLCuxSNCbAnJvVewqUehsLN7YLMCtJ58FzzYnJuufDaaDf3A",
  "key3": "4L1y7PnhNzt44CaAoAUbbgVknu5vKGTSov8uYJjkA1e7UcybLCM4sHU2oERmEyk64DDui1zDF8zWcMHWCDHtmjHW",
  "key4": "2Pk9dXouvZVdZfegmqWj9LVgcthH4mpny7mx56Dfoy1Zuz7bLxPzm7w9z49gruCgytRr4CkBmp16krRLKBc4qAXB",
  "key5": "2FpuQg34LNmmbry8FtKEgETwBuLYSfSBVYTQ5fu6aJFBvxYvJfEb4dH7TVZmTrMEvAi7SeoDpBKxZna1jnAyYnFX",
  "key6": "5oy1CY46DyZXtuYZkvqCYsz1gNnZwrM9B33JVmhjXRiJMM6nDWAYNgwoxYH28Y3fn4V2wXfUHoqGTaykNiG8xLpr",
  "key7": "2E7uskFAT6vSZPpJw26zbDRbTz45961kJqxo4vtdJvTowuXgQLMSwHRe58HfAyW2RBWFk7HjBUh7VAB6xNzWbYa4",
  "key8": "5oEBTQn2HyXBTUhncNzoeCsNa3jNVDYhJgdrTCbhqQtcSTocHuUYX7PbVPDRMedhWdvvxXn8Rq8RcHQsfFYa2dyN",
  "key9": "4j9KSWFxr1soCNGHBn3ZYVRx1ksTxh1m6df5Rf8JBmkBj5eemkumZuvPn841UvtPnqVQEGTMH7cxtc6C5tTfEAuZ",
  "key10": "maCa8QuUygSShHVWmgB4am6vPF2eW1CiMjkiZypHvqAYGanV1GyLje8J5t7xCwp6XmZNnibsLrV32c7mdhVHwtm",
  "key11": "3UAh2kUbLwWW1B6Wr1ToQ9qrpZ8WDzhy7LDZga4FE49UWPiH87M21ywp9BCHRY7JyRjjLF5pkkcs5zaiKRbDpcZD",
  "key12": "26cMkaQRze8VeiHPQNwu6stHEMYpba2beoBAjdxdc7h75R38zwDkSsVY6qrHbmaVNhYfCsPoq44Z1haPKmrsHdch",
  "key13": "5ZF4BYQ4t2ovhn7zTkjt35k5SgpDB9rcKz8PYA4TKNKKo9w6TJrVbuLcRe5w6X5k3QGAZjHNoFGjVfe7xNCoRzDW",
  "key14": "3dL1ANyAp1BZmLPnHBaLmcEWnUiaebtnZs28ttwwv2itcmW9hwwrs3SKxGhDggusY65fR7Tkj7XCfbGm7C59HXT",
  "key15": "xqnYwa5NyR1qs52y4d3N5uPDUpkxLLesPacFb1C2EAAw1So5VNbuXVnetY5E7nggKJVU3gvcZrDTQosjBRZDTWi",
  "key16": "QeCCiWoD62fpuGrZEa2qPJKFJ8uqnuL4QPA4Zan9jSSuJXXnP89AcDLT4Tz2XpsCH6SHHQXmYpfUKpuye91RzWc",
  "key17": "2SUmE1U6ag4FjthF7GCJKu8bcko9CuanwreZbynHLFKkbHMuu1bmnqKpHfzM6xfEhbSbFW8Vtt8forEd7vxNdPTu",
  "key18": "5d4xnrbagpuNC7vnZx6nn9NZ8jfrgBNmgHskz35uJZHLWL3toiPA24AfTiU9APJHieuaKJd6pD3G5MBmTRDsxxSv",
  "key19": "4g4CegAi6GUbNPwis9qhMtsBKtABDRyq5QaFKXh4aHALvLiLuAJrVEUFYfuYMB6e78Gc1Jz5iXXbaq71ftJkTEDJ",
  "key20": "3ZeufD7L3acpM4ocgtBt5omAwAZ5M6r8hr412na4dR7DaSQHWz5xLRfckVoZhj12ycAEHvhFW2yYuQyLTaWSGnVZ",
  "key21": "5MzZmLttVx2SQevyAKkPpG8V392Be4FB16RohVj4yVBhbEGaskC9gvbXWVqv6LJw2Xn4mrJfMH5udMPoFg1ArvGh",
  "key22": "2t7VemRLyRKmcdkuqvMJnGjRQ1U6vS3C9vzLXAWGJddjzL7eDugZwSY9wg1Ay37fNDWoaFPgcXpMBa12xjrcfm5R",
  "key23": "mcUJLeCdCDCmPZEPP159EistDsvpqPY4KHge6wdcjBwSDQHQmSDt6kZttDad4ZTUFGkfAXzgBa9F5Z8K3R47X9G",
  "key24": "3PwtSJP9J4cEvVvQKbuT7qbpKZBTpVwoCuPdGx7CZWcDGPacbG7Y7PNzXpbbBzKvrsxomkDwBVLSvsCUcQ8eptjg",
  "key25": "33bEDrJbWaotSohYw1zQWeLQRhjPPuPgMjg63hfZ4GhCotTTjs7RKmRgtBz7kkZvYWH2hQxU3aqAvt18BxEsS5wk",
  "key26": "3hgmQ5DiZbqWLsmh2yNq8KVnxS82z3GdawTx5ai8xm1wjZ5KcDU2sZvStFnyYd7cVgocfETVf2ZfHCUis5H6Pmky",
  "key27": "4bgUeKtjJB8z5KK8Ufo5hhAEcQiQB8kZTyrZyLhh9csP2TgyjfVb5QozWART1MbnpasQh3PEgbCaSD9vbboStKu3",
  "key28": "2oFHieaKdD4WUSbvvLF6q9SCAhcu4GFuc5aRJua2J7nm3Z89iiHKrmN8FDCzkNMTcuMcaaKv2yvRhd5GcpebDNdS",
  "key29": "8ndACxr3ZoFjP6EjJJbDmtpfjMjsMVU2NMrn4W7d9H6zwEgddxoixA91cx3LFZBY2U4UMLEE3Aoj6rvk5JF2Mkx",
  "key30": "4jHbX7wSfzA1fDDsqvcSbwyE6WGk1MXLkBiQvE7WvpYsUUARqhg3JzEYgYt1EgsaSrxR3NrQKdkhzzFfEcnYPKsy"
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
