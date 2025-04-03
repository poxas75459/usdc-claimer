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
    "4WeryPMkgByvwUy2SL8ppM65qqaoQwLpyiQv1gb1cNegSeyNeDJWcFJFFKhhfM9AxLXmzUS1JSxCnm2xJb9XqqgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsVQBCqahB58EckBALFfACjDzkNZeqbUuMXXJTAkw8SYFZaTmW33LdETsrK7d7y5SxZoxqPStywUcTB3d2k2hNB",
  "key1": "3ZdcBQePbCj9V5oqzg9TiPv9S71PXrYjK8ffFgBZ5N7he4b5YK4HP8HMv7nQy5WyBUXSgoHcA88brq2kFsVQYb4c",
  "key2": "5sDpdiRZgtQCbgKigvRNi8pT7pCuMNt4NnQU1sEMYX894nqyEczYGMGPExK7kyKy9p3svMRucVZA3LNinzSa7cfF",
  "key3": "3mUkPC1ZLDzfXTQcsdmhwAacT3APfD5ztaNM7yvFZkMycRpy9cNzTC7PJLpDmie1EwY8iRcrzXGMwEbhGdD1WA3B",
  "key4": "4vmNEchpH27TsiuZvxsC51thDjJtqwaz1iSqizPRrrJMEFChijaU1F2bF9TFvQSXUCyQSUC7LKdp8GZgn1RQxjaa",
  "key5": "oynJccf2zyvyE8BoSLpNoyfvfGFWHbCg2JG4QrPXPXtBCfpon2SFJfMxM5nxxNZK11YoXHyDtD5sHSx5Frp8Sq5",
  "key6": "41SuDEVzt9AQwyzPGhQWb2T1UCpeyMJyC1boXLx11HkmQc3vK3atmeXPMYCVYXC74LXCZx2PABqccnNVaboke7Sm",
  "key7": "zWmZAujbRzK9MysdBxBdTARWo55dq4bR9CRnQN1V4kPXYmGkuAvnV5JUj9UDotWmroW5qrUTvHu1iGwfw5s6mpe",
  "key8": "29fXkctkRYgkKt6UVkfiXj2S3HyPnfLCxhR6LDA5yvtUscJxTb1Kzs6HWunVTttxBr1Z5ikma9ynpKkUAjYdf9fi",
  "key9": "vEMJ66XaQsHUxNyTsWMmDe1n8rxxPyG4Yfr21t7U1JDVScNg2fXfuSsfwKJqqQ8bw86MHnMeWNMLuyPkQwFXpGG",
  "key10": "y5YhqP95HbJ19Jv5cBFVpc5yGfV2adhpzfFudkZauYLoPM2aGd8FHuwbegAQ3q4NuGqSSfmYqSdo13gPVnY6ot3",
  "key11": "4mVAw4WqH9kmQM9KJmwF31CzWb2oxA93Cx2v55iwfL82fw1HNztb15j5dUpbWfec9SbfQZcjUWZZJmRTfUB7zZAc",
  "key12": "zrGNfp5Xhh81rRVgs6pqY51bqGdJ8GXanRcBwuCL1Ws2M8exaDTUqa8PTuMb1JNnEw1E1QQxn2YRWLjsbQk1uX2",
  "key13": "3jXY7gngE7JikvvFLg5LPa1dFWpe4MJCmMN1juQMHjvKFvsPCBRWbiv6zCiDXK6XjBsA8DQoNn6qDLnjEp7mYEXJ",
  "key14": "SbEbAkAWGCgsayzPrGgV8Uf6CcbJ6nBuMVnGgA5eBTjTJLXzfySQAAM7NssMNkJ8R9tmQ87XHoncwbQ9AbApqMf",
  "key15": "3bSCqYwiNBAKJ3UwrwgbjycuC3KBmdS9WHhyJFBcpkuhjRpeGLcw49aV9dpJGsHKsB5m1WFfxgQYDNcwsmhsdDha",
  "key16": "2Hc7Uj6aifMUBcEz3cUTL6QR8SLg5Unu5VEaG44NF3pCvCoqKifA8tUoZCgbMe756p122oQW1mmM25AtbkdG5CHX",
  "key17": "2isxrCT2ctRUBKArxtV8FUKWFtiy426YYzEv6uZhbgeaE88EaXmkb3F91G29UBbn1geFoSRaoQhHHYQM8P9RCjQp",
  "key18": "4KEP2jrccv3x6qd9g7BAs2xExr9bwy94NtazgvJYYFZcPBZ6EqzCHgSfPoJ6TJXDXwZGu6wwreuDrTQcuiQmQkTg",
  "key19": "NKXgK2c5HZbzG4KDhEvp3VYbJpGRgxGM5gfic9KYzVFoi6Ax4EBKcu5MJbpP1dMMb9Pq3nCiexsFP99MdN8G9S7",
  "key20": "2wLoVJ6ejXw6Ehwmg6dLfuchnDhdd197VjNxtQzx8chkaK53wSEQyxs4gjzhEVUHiPXCfix8BWJ9E43t7TNWu45V",
  "key21": "5NXgg8z6xbiaKJLcGpWx8XPeseRnSpr2np5CfCu4q8Q9nmPobhhZzRxtAgssVaPoJZ1iEcSFJ6iTF3B6VrezL5EE",
  "key22": "3QGs1bmrkbhMQtZE43FmSxkqAS8fUhzVHtYge4G8Mkb9xextCwt54eSgPqLBhbqxVnxHVheFv7B6RozXaws7jjiY",
  "key23": "5AQPRBq43MuUcCZF2UVmyvgrdsrsdC5qCG9xihpDxn6j1vhhYFV2fXSiUNTwLEc84NUagUEMh3CjfwTLFcWCeqNt",
  "key24": "ts3CHd7egaVie9Zr2MZzR8CQbH8sKRvEoQC4LYkiZ2rfEuaxwSK7fHYYmykn1QJQTme4NzqHKu9mj7w4V7hvYrR",
  "key25": "bTfJvmBQAcZvGrzkpv5xm51A2jH5AXzSNupZjtTHMVZCWNjh46u3xvgFiEy1HHAo1zEzQW3rjJ36Ewu2kHttNex",
  "key26": "5SmrZ9az7sDYCtJ6Vv6iT3BY1MDXUzFtPTsxu84mD4gYdFnzAvf54VdHYAksA7btZUZaQX9woyfPPMJK6W2TNr1e"
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
