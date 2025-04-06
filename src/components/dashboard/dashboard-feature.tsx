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
    "TJh5B9cKBCsiKow8M8m4WVGUm5f9xisR48s6FzAWryW4o2X3ibHjqXmh3qSTggeuSx6heKnfUuKKNh5xpAwXhf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkjDngkN9HfEcswBL6ysbPiraFMVeGZfeUGDBAJYgFN1qChuzEeLZKxkEGEQLbChSjwqN5H2kTuAMtRhMYeeWEc",
  "key1": "4pZLg8XqNMbGJEBfC1BTqa1jwFviNFxpQv3UN4q8E9Wjm9844Ck21BQ3Cicpy8jeeFxvgXQgVndoFFwrZrHwCWA2",
  "key2": "3vjhrpGyRmmvZhovy9ELiMEaswgZSubnQUErSSNWDfQmawNGnh41Le3TWrjPPHwo2v4998hMXuwY6EUVuTtZPnxn",
  "key3": "2yJc9VTWLvuvwFYc5fo8C95vFxCL3aB1eTArC5LURxmwUBt61B1ynEgtzSKQoY4zH8WzWvbUkbUDiLbRn3T9GyxS",
  "key4": "2nmwSJfhRHSEeQkg67QQyQxmcdEG3iQdGJLy3M2K3ou3N6hDmESoqanmTdZvDh6yJZuu8RJhM2QJc9vfLc34ac9M",
  "key5": "3oXjgAq2hop26f6cjugTzLQAqAbStQKzobscD3JNqrmyyVsHnJDxWkf15TVqfSp26gstQk6ok54wfuApaQ5XhCo1",
  "key6": "2wPHj1C8vW1bUeLf1zagu8Bi5mkYP9wExFP5yGxWDKBrjmB8mseXT3ZMonMfvaB4TbS8GJqdsqjuW7Bk13nnCmYX",
  "key7": "635vAuKwQwy4qcJWNGbzQCywzGz8pGgTJpQxivohwYZDkedq54oNfRCA6uxTmwTCSux1MB1W6S6zppa1vKqgxa1r",
  "key8": "4TMGXn35EF1kjwX2AyxpxuFSAvRiqFwQQXmFDSVmUk5ethf2SwL1cdWDzQYtzpndSkBBDSn7FAXiyfSWzt23uynG",
  "key9": "2XhbsCMkJoSweYVAyFjETFSvnx99yEYnRyMg1sSxBeRR4wrEGdt5zqV1BxdrmHYhE8RXztbBH7NxXBqKFn5mjLwC",
  "key10": "RJtgUU3zatFBpjibPBXjC3Gi9793xCixi4k1vhscLqsoYCdGAAw4544hNKppxgJi3X46XwbJB6ZdUhkB7GSWFQk",
  "key11": "4JYm22d7YQZ82swVtKLtVniR1Yt81BWAzDRf1qsYu4XAPYgtBm4Qe4hQJn39bMJJnzMUjPqRnBuYQNfyYTcPjhmQ",
  "key12": "24avoJfb3KLxpKDiRKwonEZN8ExmtTPgftA76p4jqyVZjdtxwEup21NnsTJmaw6BwY8mJB21r9FsZtewn5mSEHwk",
  "key13": "3by6B119PKiBtj8B13hEPWfYhQaBJJQUMQ4Y4twdXHHoDTtwCyeGM6vBC46ZFwAP4tsvxLnhD1gATvcyrAF3WebG",
  "key14": "5aKpHwJfANyZHnqLKQotqF72HWnMTGDqSf77rdtnnz13wopBrbgL2aRifMwx6HVVKpFdEycwwBLkUn6Wo7JfVgbR",
  "key15": "2SQJEfgNk5sGJHuhxjUTxUKUfo2WPgY3QHuksuv6EZpSz8qortZoNeW5yw4bEQ2pKmKQWYpfPVaCzm2Rx1N79f6J",
  "key16": "23JyLnmAo6g1W3sJ8AVcnvLvKLRT63EYSiBFntLvbiFSVn97vAcF9rKr4zYZw4eqhH1BUav2fMXFJ4wLVJcUdDKq",
  "key17": "3ME5Lw6Ywt8QqLXpEDa9ehLeXj4WxbC9hNc6pz2zTzYREmsbaSGNFnMsYD77ZFtBbBmtbXv5MvJBtErJYqJxUGbT",
  "key18": "35Zspt7EhHdfF4qzp8rae85L3hGVGKNPiFvfucsVaKAnFpqZofLHqbtYhW3TRQZtPjbs7z71416nfD8BYrYJr89d",
  "key19": "4Fgs8TgyVbxaLNYCTnr88WeofbesRSAE3j7emUKVzuwtM232ZGSHYBKdwH5z12ipPpeaPFgKVSgh75GC2CReZb5K",
  "key20": "2D2fZspfkGdJPSJSCsN65JNZf2USy9aUJYJbXeAzSxPXswM4CJtQDT2noapLUXQCr36FG4wkbd9HXybgQF3FDJd7",
  "key21": "5PmZ2qR5uNqaJVefu1UKj5H3i1rJBX4xRqPv6KwGPqgVF3aWxwtFw3UQARhD19yUzFTKEEHUWLWSjNt44YbTq45a",
  "key22": "5yeup2ZJdnRXEuXGbEPyZt9EgUKMYWmwEAhbNyurG1Mw5m4MqyBzm3UhRAyKmGrELNXoY9NS7k1LVKjonA9bs25",
  "key23": "4sRddLPXm7JxvAJS6z5KXYfSQDzjs8XDzxmVQxQ1fuNSx5dcCfsTgThuhyvPYL7oBTR3pVeoUo6K3sT5Au86h5L5",
  "key24": "tEDGqey3JsPYMrsmZ3XrrTZTHGrdTJUkpWPdFxcAiAmSacNfFXBUv76mQvnVUDRYmiLfiG7oBSLvKQf1NwNNCsE"
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
