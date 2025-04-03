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
    "5DKo4hiJYCKCfQHAMocpXpJnmmkYmndS5sUMh8d5vP329NR2fShjfiamzJ9GpzP5an65QuJspy3Xqcge1iegqkJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DDKicVmB94EkxcVLXtwnfCDxXG3i7QeDpjoRSbaQVWP1QMgtUDGFNL8opjGqydyzLokRrohP1TqKSRvydxGGGK",
  "key1": "2LkN5P9j1qbN8KbivqUEzSWqr51sXDXMzevDBApJKPsNd7DX78ZN9pWkSP6J7ZD4HfwF68pmuEsgZetBhPn351z6",
  "key2": "4qkRoU3mdA9rguSj6XQmBWaRVbsVN6x3M8irnRbe4itesaxS5yfAjHJpF2qVVy3C2hAvzwLHo34GniF9QShPXied",
  "key3": "3h5cqzX1REtyjq2e3zryy2Bm65yysjzhAfHiAYJt5HfPP6nDzDrDnqsEPdab4297XaZnNhhZErLGczXZ7BZa2zoB",
  "key4": "2QNwPsDcgH6m4JhRHLmX671KjiYVTsnBe4PZg7YHxtk5xS9Yjmbtn8kVycDDJYvxPGwZtDfNABqGB6HaKeopL7DQ",
  "key5": "5PvVTRW1owngZun1Qpz6B9KbvMUF9jHwkknGxE1F4mBEjwvq9CtZWVjVg6N23HLqN52ATpSeu1xnCSQ5ReTpuJ9A",
  "key6": "5mGtq6U8XDNwb7C7K6SrEAnXvBh3PCSr2NqdofBPLqrRy37t9gMdZZzci1ZkLUKr9vCHF5aHVWr2icBQjRbKBg9F",
  "key7": "4MP4huzCV5KUu59217BzNRbufKJsEx9qosqx2cdt5nBhVFQgGASZnyzQ8yYprG6ZeMe7u7Th9B4ivkFdn3zyWK9S",
  "key8": "5bbf43cMiU3x2owhovgZjzNZ3NLxi4S3c2oDgD7MFM3ZReR4tLMZn8i95R1paSoxB39GF8h11NCGMUo77URqP4ND",
  "key9": "3SiPqaNheijqraY7TaL2aXYZGC4A412DSKzwbXKufoULzNwdG8kfkooJc2X1nj7LJPQyQzfzDZsDoCmBz7PVsCZf",
  "key10": "2nK9Aropzy3iMiusYTTPCuUmkKbYUMX7ynYP4SUqQ43BXkrjTrpbjQ92BV9Css7TtJpqaQEoX65cEs4wJEEspPRV",
  "key11": "3fH1S1taTLsgrqmUD1JbFZiddeZNqDtm3wXP9LFPzwJeqKtct4hS74EJZf2fKJ1YrDHZeXAFv5rX89cAx2K5yT43",
  "key12": "e8vKaZLkHz4fvZjLhpAkKqAGSBHh8AHEn5EUG7nCFRgG14Fje9qA2gbkhLqtxzhYW27kwF7cDRX7SYYXrfcE6L6",
  "key13": "tYZWAeP8HX9txEnhvpAKrNqYdD6GSBizKGTL175RnSH8DzFXdWB74H23aFEQVooNUTDua1kZ666Q8CSLfAUxtTo",
  "key14": "2gDUY1pQLyRTRNgsSsRGEPeMxeM9BkjuqWLuppo39RAyr95UkwNbratuuRYBvK42safa9S3Ti1fvHH9mTgaqGR93",
  "key15": "3YfQnVcUH7qPzu5u11xeN46xrDVQCSDhbHkspDGqkYuT5DVeghrBTLqgPgvFJi1b4eN8mRbahAgDp7ogQqzwhdPu",
  "key16": "3WuDktD9vPsMbBUHaCDZGf147TnHtDEVdbjSw6Qje5p4tV8MxfZkknCopR2vpET43JMY71X5eVNPh1a39zSkxJYv",
  "key17": "3MNMrHpGR8vhcg1evQ4ieQpLUy3DTB3oZonbJtP7s9TYqyANFuiDvrjtfcGt17iw3dPyXqXKLdaByLESVUmFDK9x",
  "key18": "5QPDtwncV9K1Hr3ijjkuS5S9rCspNCpP7odSKqPcddcmQhheHUtwsvTgLhGJt88HPz2kQyCDSE37BGBjGRYAdxuh",
  "key19": "5UxuydJK7hsqCNSuJkD9cbWA8H1DixCwxrX59ze9rfhRDBqMKGrs6ejcnme1XTYDkiG33ombFW1nr2bCX1rnK7oP",
  "key20": "4gLAesc2bzBBpAVjMaeL9rP1FmCyMFBb35y1d3A2tPfmrC1sJvFm9eC8Jkn9oATSnmc48MqMoJQ7fE1xDBsSpePF",
  "key21": "4Ehwqp3X8Ckuf7K2dGc6Yrg6vCCgsXefT1oZaxQobME8hF3xsjFJg4Th1E9tTAZ5WUBYJkT9FVma4asq4ozXwwc",
  "key22": "sSkeAUjw2Yh7T9Jdvm43icVy3t4mX8FPRgSxPD1RLi2De9TNUrioyc8T1b3tZyUGHUgrKWybUCAEQA1kRZ1A4EN",
  "key23": "5MUEy4mHWjJegUwBv2aRsBEH5ofhe7e9Lv2bqfz7ahqbnQtmRLBChnaNSghyLrRpgnhba6js2Y9K9rPiQhrayh5f",
  "key24": "5DWu4VsNu8CwBN5V86JxkXon7i9dqxM5bop3L9QYhk7uSnLsYAcGpva7tZYUiEZHR8hSGZqJwWB5KpMczJ8WqcjY",
  "key25": "8vB42XrsnmiE4ja1SBVmhhzmcN3MW3dvyR2di5Y45VUknwsYtAhLPJNHu9K45yJm3cbV7ZAJuNhuytbcwxsuCia",
  "key26": "43J7wiU7xy6QUiKKQ9j4Y2RH91riFv4siYyz79KfmwRUnQtAx5zuR9HW5PXUaUHBQ56RJP1mkfi4j8Pbo9V1W1Fh",
  "key27": "NGiXj78Mw8SXeF68aPG5EhLZTApL1qrudcaZsgCEhCwMYcV5DSRPKf1pDUVYvzEw4DA4xL7e81M9CV68KALw2o9",
  "key28": "3vz4FwJt8KWFwWJaANMJdvWKDswGoPrdZxDDpuunXZGYyKCGPgmzhFQSgNhit1r3vz9UqcBF3w4QcxwJahBrpgsM",
  "key29": "5sMuBuGQxErzoXwDUuRcZoQ74qArBj51z9UTbL75djA1K2ksdbjjDLjkT2Jo98Nw7PG6q1PnK2zhUNUD8QTmsQp2"
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
