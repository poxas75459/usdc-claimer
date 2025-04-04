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
    "5WPWGjYso6EkvtZtJkeux9aNida4GV4cWrZcCdbZDRzqbnARB8HgAabiT7GRvn4FzVY5xRPkky6J2bPPzkwrVhoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVCZTVZwrqyEumTESs8JTG3X52GhkSdi7UJzRTz1gbDtnN7DpTdkmJRUzGoTbuBqFsMh1X42V3Gctz8B35kdECY",
  "key1": "54vWFSUd1v3pkMkqzQapNvAHY6xy412eKUztmHspYk5oXqXMbPeqGoUmCzejmG7X7zQUsUMc2j5qgYYrUk8fKyJ3",
  "key2": "38QuzqLskg7EVbWetPLUsayJp4xffhGUNE1cY1GVRHAQCiBM72QreYUjNQAb9jv8mNhnPfBz4tXxCiurZ6jKJ2EL",
  "key3": "TbXMJrbtVJMeYAAEDzLhAQZzd7N2dgdHp5oqgYvoJEzGcYbER472Zp9MwtqveVEwrwnxVTCwXonSQT4UKsGjqde",
  "key4": "2RvW3ja8z4JunGD2wLKGu69e8HeE4LsJq29oLCSDWhTEg7nthHrZjMyCJvMufbFN2Aosj6fpW4mMeMkYmY5JzxaT",
  "key5": "4AMUiVZKi5aPTv1z5RBPG4H2ZwA9ycNe3mKPfpjXUaTtvSaE1uu8ydQaoCoeEU1StfmXTPeh7TnmGzZiERTMBM1A",
  "key6": "4TvLtvsbQ3J76PwKYb59n2npn67g99naFp4EQjHepXLnWsYfsE5cbzcg87BfNttBvaDSqnRqqAYA7S4z88XZxQQp",
  "key7": "2wuRmNgUPDbgdjVbrYAs2MncMxGS1ccLip5QRtbqayt49hyKJBHPjv2iHcLaJvDuXuwBFRTsmdmD44fLEQsbmPdB",
  "key8": "4xTZkDeARY5caukHb4m9eF2vKkw4RJTwgteih2ngkZDk59TPyki4EqZVk5jK4H4QsW3vyNMq17f2ztvrYKPfosjZ",
  "key9": "3dHgteP2oMTCSWnvPbTW8Gu27J8N9Yn7cabK2UY2yFviwkACwZ8Qi6F9SYmcaDRzFBDXQg4kuQQ9n8SaedMLLLcp",
  "key10": "5USvnvUWmK4XbeaVkcC3REgPcPGyZqRRBWNSf87QaBegmhn4qUtcsp1iW3GcDPuCx3LewtKYnHwxx53jv5XaARgx",
  "key11": "3pGUFvW5t11Tnms77QjQA3VH7cTAXxTDznVT4TLbPgK8scTS9xDrymynUfTMFKfKSGm1R9s4f76c7e5UwDPwXghE",
  "key12": "2GoGXGbW9R7yNtcGMcDXi4FSim1msWuwTphE8vGHvXUgh8hYgJGdQQtdTK9CoGqqbmPpJ2Aj9FrKHcVmanbAzjQm",
  "key13": "2Gv5FriqJWfkyErMMo9muen3LoBLtNx9SEy5zbHwmgCvy5UQfBfLugDtvrYHxBuMtgYXxaWSRqX1oz1pQLxiGWxB",
  "key14": "28nFwNpTZxUxeizuUe8UDAxCbZ2RnWTUe48Un3F3ME7aaLJzo9JwsPQAsUoSfAoihexp7vNmQ8xH9Qd9CbaorSq8",
  "key15": "3RrLn8jajsLx8LYrt9jU6tbTcnF4XkZGL8K1B8HZbGuvuGTf37zbkVpGMJeRB7tJpjRKtZGHknJA4rVCcfQHac5T",
  "key16": "4zcJJFqTRvni98S1FQZKwN4GLzxbPJDMwMwgvMcVGDdHZ7ZX6sqhAuqf3oj31Gk5q9TkSTmyeRNuTTCFvY8YvFn8",
  "key17": "4fMy68LckQzETjpfNXuebykfLJRB7m5pUQsjRarfUjcsbFsYxj4X9AjvzuihPWWYHXX8wrg7G2J7KUfGY5QPrPYY",
  "key18": "3V9uY9Kp8AuiUnmfYT3hjP1kei1ZhFLsKzY2uKCyU4tcf6aNQt2BYiVzWqVDMkGbmtVWtz9tpnU1uxMkZTy4PUgH",
  "key19": "4vj9orfQCA2q7wea9frRaE7z9kqnbKT5Jniqa84zfb71ASsEzaAPNCHFjYRgt1hKuaMTjaopNBw7fauFYmamasQh",
  "key20": "2eSzuau7itrPB4raTAcvANUFtBiA7JbSWYcL5RMbr28fFh7CiwyNsnUvisZx6V2mhjxbPjQWLZx9rWHigLCSU5fg",
  "key21": "2ztJX2dU9terjA7ecajsLrSzevzLDML1GU48N2uS3GmJeUzCiX65JbQwiSJNi6RMFPMP3SVVdur2ExpEeEBPrpWM",
  "key22": "2w1r9gdc4D95ZDDtTEonc2Wo7oeDCk8pwAW3DQp4eFhzJyqiwi7WCBWTfoQa7aj3yrVHeXEtNa5gdp9njWgFXUxq",
  "key23": "37cQoKReEuJ5emBRhnTMaffdxvvcuKKtNEC41gxnQjw8uXV2Zmz4uoSePFnXZEKH6VUh2smrRatLff81D3Rzz1N9",
  "key24": "5Rxcyz2477UWzS2J71GSNGygwrsehms785X5yM5URDjqAma8EjALogsw4UJM8QFG5hhQPFsFeGDRHtasMith4Uwc",
  "key25": "5bF5jzNpGDJovHK4PYeX91m7mgte4hEd89n4b4MmKwYVVRiPUpuQfhRyA6Uda6CyaxmHQRB2a7mKRefLWvMu96qD"
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
