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
    "3gq3rA6yntM7aDGzNcBy1HPNQjiq4hVKTdvBs6DWtKZgaX3sCgY5dx4JDScSz21SWucZq267a92dPzAg7WYzzfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CqV18Qn8Gmv4VMkgLDYFjXD1X8pWJA4DwzZFnka3vZTNYTkLVyu1Hwvjnoh7sLmojmXus4zK3AJTNe81CcM4VjN",
  "key1": "3FKBRszHYNMAcjtBhgVz2hTwcSoYvY8LMcJfTFFnYizSWQxQruKv4CfzbLhxuQ5SdYnek9t1jSjH5viriWU56mPR",
  "key2": "5DUypeNFXzuCpNtFQNjGLAFDbYqDqnzaRBu8zPpkRZjL4b8LkxBqX68DP45rNjZW4J4QvraVDukg8ZYskS5dSGC3",
  "key3": "31FuhDRzZvkr2bPjHy7BTye6mkSW7nQiufNWSQXXB9MfXxDJsKTq16EGj5CfdseDdDGEjx9qMvQ126Bh1B4woLYF",
  "key4": "2NYKoEExoKpWZ9D5mPKZbgeKPQM8avwut4TJmjCe7CWuuLUuSCaB42DVBgyC82EoqEGVHodTGUsNB9ZW6SvzvXHf",
  "key5": "H9ircEpuS5PPm5NAgFJ4WFYrUkEkjWMyoA6wfjmzEBSfaT5D6e3x7CuDmstBFBQaShDGHR1LsUNnV3WBJna477j",
  "key6": "TYfCCycGgLeMuNKcaVqVh83vXGi1hEHH8UZJ1kMrTia6Z2boVpxK4ZauaWeXeJu9XqzxNmMZi5gFWx9jbAQvh9K",
  "key7": "4MipaQTRvUmx7oEWvSQ9gKCN2r9UAyMVK5cBTFZtmqgB8GgdQY9aujzPmwRDCuvEy7vCno1Z7XyrY5QzQrApBVaQ",
  "key8": "3vKp7zoxM6JQRD4NvsakXn5iNG6Do53QNrkt6Th87PLzXQjH7cVn4eEj1fBNpYqLzF8u8HdbL8c9VcDAzynFgKUF",
  "key9": "zSWFPxMDTcp1UZcaxJXSMsb95hARXpPA6w8UC5ZB2gKcvPXnkE6UtY3rrvMpwfLCZawUJ4MYJ3xcrwfmtV3soou",
  "key10": "3atCMAZL6bDnR9PpYdZM5eMvQ1EyiTGXx874ZV2f6pzF2C7FjN7xTGuSvPLnqvZzXHhZGzJF6hT2ybmiEA1tqqNe",
  "key11": "2fSrx8PTN2bWk3FK73yAuGvRGn5eLuNDqU6Fu84npBXoveidHeKzz42HnBeYPedKTixocGMBRWW6i7LxRdVnWnAF",
  "key12": "3ZBAaabkV6DCtvBn7tqVByRBo4ocXvpfgm5D8JJeed6SwvavX3y4kmAQMoTTdNVYrgcF8FYtUZTZPNNuNNikbQUi",
  "key13": "31rd5R321wArFaNw2Fw2BqyH1RAgo5hh1dfSqVd7DzQMghZMGaLgpEiRxhKEM6APaVew4gF5JDSFxPtX9WGRC5Rb",
  "key14": "4fsfdjbMiHSN5RAcqLBxLtC2QhV4ac4NabQUVN7Gu6NisyMmLYUpfNh9mc6yCzsaqo4LwX7ZTq7ASbpY6NDsSJWd",
  "key15": "49xTZmEoh5ksNfg113ZFiGPsncbh7ouwTjXwWzRS6tvK39Bh4vQUpgZJLcz34WeECLwjftE5zKCf2DisALeRLXyT",
  "key16": "CdmULZ3NJftidMYYXySz9noNRA66MAduUnQJXrQHG8uEmS13yWqpsPNfsRd5Wwx5mibfJDGcboFTCfUHgxX6o5G",
  "key17": "21MCzysg2EnQcZrhYFSQSMkhiuSzyjnLBK8CBehEaMdd9htD1AHTC7h6xNYfAZCqdFap5pqJihxHmdhxNNweoozQ",
  "key18": "3XgYB4E3a5GDhEuAaHraq1vUFzb3EYNb5LkaRHbXnCDnSP67jcpe2bNiNYe6FvarHg44Nyax6ZsXrFUL5R4xoKte",
  "key19": "YqX9JvgA2TmffH57sPAFhMdSJG9LVziR2d69oCTKfBq3XtLcw6utCbVnCybWma8221HtEUZBmCTgaCN3dLYRZCZ",
  "key20": "2QmWmESwKc9b6any5Zwrm7iB5bfR2nAGAnUTC8ajfX4pmWmgNPDfc19vevVpgUUCjLUyRFzt3Dn52vpUfjgSstbS",
  "key21": "3PQoNUnGK8BtZ1bJHzbf7T2tnCwU4tXyhg4PmAfkrZXV9gdZYCBJ1sWqnf2FdJsYs7zdmK7Djoqbmh2aF5pRXtwY",
  "key22": "4puuQa2skQMc21wmc8bP27nvzGRtLrDhX5B6hWMqXhSyETGTnfHPN2mCVgW7Wt9yhGEw6wWxFiAoTKvXCyR61LoZ",
  "key23": "5HbJoP5y1gdioCbZzCBSjtbJLsGqh5QzRFhYjXNaTTNMGbFJWgxzCjVfbSwbwqTbv8Tb75W4etBfuNgnQaXT3eQ3",
  "key24": "3B95nBSCnpNj84tXSxEUtm6CWXVFMt2dqgaTbL1MBL1Uu6VbcgiqMYyaJQjZRSzsv41HDFDpaHJTG3hmmQ4Jv9eT",
  "key25": "49xL4U7DHDvFv4poNMqpXM52zyU9vTukiK5gPRMP7dABwBNmFfFcdGyDQZgt4uRw4MGeRDyuxQj4Be3Zbm2W3urs",
  "key26": "5Xfe6mNA5kgUxkJEX5Sn5bySLg7VhzYFjXQrht54qw7YcMn3bSc1LJTu52n8dFeTApgX6oKDzu2Z5BGJb22aNHFx",
  "key27": "5fzUd7sR4KgumBwknAWx9hQA1FoA1y5c2k4XLMnE6sfsyR4YiCZZrp1xvw2psZ6zxvN9wmtFrYuf5Uc8uqQiyhTT",
  "key28": "4Ux6bnePCRypVy5cV52HHFp911158c7kNGzYuGRgZq5qhYLHNmLPpactDQF8XxgXvcwhe8LuMik6e4XmMKurRx8k",
  "key29": "3g3mAnaBeAn8U5bVyYbrgpHSCGUa1kQi7PyxCFXLHqhP6buheTZr9drbY68YV3bo53AbKgM6pYo3W9S7eJAhDwWJ",
  "key30": "62G64rdbZfzuaZcfmcN7wCJnqbKuJw8BMnb4dXfd4yXxEALdKQjt8tMRyBwVnuNxsZMaigUtewxG7QQSeYwSDQZx"
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
