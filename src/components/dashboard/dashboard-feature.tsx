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
    "4Y3sktSNxKUePajU72PnkwrzzuFKyWzLPPM8xNj6jbTGNVwrjRUFtVX2un8oaqD8ji86jg9E5aN2fA3XM3rLHvUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E25QQPhNZzTWZsLJ6tfgkbfE3RFEZGk3AFfCfAps1ntuB21ffCjtxKsV9SNsnPv48buaveJzCT2QqWDjDq6ngPR",
  "key1": "4sNVdkPQ2AS1AJdA9pBf9cXympwEcVSYchF8AAcq8M3mpNpRX9weTyhJiJvZitmY6dK9GGPG65qEAUS8ZSroZtkx",
  "key2": "jFu7seBUtjMcp2CXYgj7zAVahmMamBQy891G7e4YiPccSFRtnpwgmNHrA4ULjhRxvEQYZ7cDVvgHBQ4kZhpEj48",
  "key3": "5EqLwzGPVopqPuoP5Wkhma52VxDRJD8BoYtYhTg3Phm5PBZPbAuNTzH5XU8m5wp7uqdoSoWDzjPp863XF1SxMJYr",
  "key4": "3VE6y63w7RWK45iVz3osQZLPPtnKSkABaWRZP2UHr3EVJw1oXCixPa5JerYTvBZHrSkdC6xFUG5wBRSuGmYAG1N1",
  "key5": "tfavF29XdDF2CdDRooZov48QyGCS6TmxiurUCShzrXH8Y53fuY23TbGmqhEKZWBxsxvSLYBZgMxzR8xPo27fjrK",
  "key6": "3kbHA8UjoKe6PY3oXAxsJnoUiqnwy7hxh7mVV4XhccUPrrFyjVq8dKLrmRGevLsPxGtWXLvn7GDH5BqiE2KDczZf",
  "key7": "2QN5GpxERuZESZetSGHksRaFZwZsnc2n6areaBboNP6B2SGBqxoXrWEkirA7x4pkMZMxZ5yYfNLN4pvpi3wzWshg",
  "key8": "5ebqLJc2rm7A2mcuxMAFiA8SCe1akFYr6g6V7DeNDbYeXJvXagUaBwGn6xobtXVfz51xCGWQLJcEmdsefZXq2z4V",
  "key9": "4ckjz6dkEd8Y7JXrCcdgjTbvB4c2kjRz9qso6PkijRPqfKB9KVYPfaCLyzXbZC7nSHsz4CbY3sT46ssZ8PTo5WXn",
  "key10": "5cEbXhY6RZR1LbTTwFS1eoBKZXSBBTYTxZeQwqn1vyQrzdAYWDFQyKtqeffdr447e1Pj6ExtVuJspvBgEGknLWYf",
  "key11": "23JYu8Fkhge4vmMBsNAXYN6oJH9rnahMnDkuhP5wUNpfCsovvr4DGYcyywcT4PqZagGW7RrLY2gV7YBKoDuhVYtf",
  "key12": "4d5XynESm6vTbnxiLs93Czah3mqF5NVP2JbmDkM3DMCXCHFvHehwD37cByuGd4XgBbYRoYASeQWLjfJqwpZ2oemq",
  "key13": "wtFR6Kw5n6SFtMP6j1YTmdFmA2EvPyfFASVacqEngTc7BARyum2ZRfJp5LeftqjA4phAfEbAitgy1GPixCUNtHw",
  "key14": "3PZ6C7DHsUfcd38yV9ErpGKCxQaun32rdf1j9cnu1TuSNYqT5wR1uyvrZwqhcnWmnPc8qSGwS4yyrSiJWCqVohst",
  "key15": "2gg2SXCHyNtGTuufk3C5n2EFtJzKsZWfBh2RAEzMnnHvqupo8iJ3EmJH2ybLGmgTSv3LH7aMjMevRcmWjVBkMmJv",
  "key16": "4gywGYQrkM8Yu9EBWQmLGN15WHgzVb6wuHTnxspJetqV2bgpLb8Y45rrD5mSB3TeM7RSR3UaSwDFj8RMb9fuDbAq",
  "key17": "Ga2jWqAbmztxDrG4z1Y1TAd6aBgQg2TXYBzQFZ5GMax9EYnKA3MEmKXmAYpU1rMLU1QCFSYFFmEsMnNb79ng1dt",
  "key18": "2yWqRDx7yeLio86zhbE4SnPXPcUeXeP85ut1zR9p9bshVSDzAhax48Pavzz9NEWszDShF2Gk6yzo9PZAZXH4yggo",
  "key19": "3ZJFvmFsx9ehd6LzY9XEbZiRuwqNzgi7RKRwh1nNrwVmKiEa5Vch66GBqU1NKtq1WHgfp6ehpXwCTcajDazVJQJ9",
  "key20": "wDeNYdJ1uPX54JtLAatQ15Bgjxde8edqyyw91Jdr4DmjN3PZf6uGGpKhEddArjWvrFcnfyJkES97hKwrgMLL6B1",
  "key21": "2nLqNm39cNMXfKLxv8izx2fQGJUFRP4CYdwwtwGXGoPsr3EHs2Lc6XCkGJCrwZzYwgvUGwNsCycMjLgDqArUWuz7",
  "key22": "2EmPEjq8bLWsKhy6E1fByRBjtgdfdrjeUYgAzo8ssdtG9gqf6TKRgVcRD7uC4qtnmemm5xrSFixa1AmRauAnTczz",
  "key23": "2g5tX1sqtWfDDwLvcyWbzG92wTNDSvc6ohBbpd9A89kvFMK8WfCMgWx8VDTUBUNdFqtiurVtcdGi2hpZmQHdd6nd",
  "key24": "3xBFSqjxy9wqU4XhE8K9B7uSJup9HjEdDUidHu7QxjtgexMuHGULpQmfL5FTD5LxYnRc68Bg9EWBwbFNSqCoGEsk",
  "key25": "5KY42Skpry3xyBpbrdsCTJTAx3C6sbHTAvtWTXdNBJHdcWBFj7ZczAHsjqEGsn93CcSwBYWH5TActNhDLzaC7i8W",
  "key26": "vt77j3E5SVjosrhGJGU5p2eycuU1pw3C7P2pySXWdgugogk1xGHzJLKSmfP1geYKSkLZ35EfsGpjN4jRFHmHftz",
  "key27": "4maGRj79bAMonz8JKyUAyiVYaHWKESqCyg63AuBD7iiNhfZN3kEd2LroqX14niHvaB6UBPQEKzUW9KX4W7DXD6u1",
  "key28": "3NWPmds68RERNZa9tizUiybkuzqqVpehZYbgW5U7oNikS1hmVy9MTZVeSQcNXFJzAaXWrx9vaJ3bau48NoSG1Kkx",
  "key29": "Qrc2n1ap4EZxbWqL1thWPCUR2XTfNza6gU3ZhqjLCgH5bsykjyDS9qes43GMt3Fbdvo1xmY3BcqsZhbZzJL9C5q",
  "key30": "5VTcYtng9QxUnAdtJcbxorkY9ADf9rC7XrezKdtaXJmTsgt6HVYna52im4CfhVQN7D7jmGxAPTRzQwufFzg9tH2e",
  "key31": "2kZnFfJ3pH2h3AF1j3fa3HkZoe6FknywpbwWk7WPXdLFugeW74iFXHCxeHtWt3J9AsjMhhpWu7T3GKV79qfMgaCX",
  "key32": "64Gb8pkwBL7p5k9QivawZ9DY2i6SDrmifYJQaGG3ijTAQovnJRgKXivfWPfGR1a3i6c1GeQhoVWP4pL2VYezzBY3",
  "key33": "3zfuAuFSPAAUtzpGba3pvs8ufDXLE5C4w5m4iDEJENUDtv2fzoYWQSN2VcBV7mynThutUqJPFUTDLrJJkVXSMJNJ",
  "key34": "Ueq5PBgEYMzvjwuFjxWJMzmcmJeKJj8sv4g6y8dDAnBRvErX4suVm9CXy1A9vJTxCXwnc9S3t4c2ikBtV22PdVo"
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
