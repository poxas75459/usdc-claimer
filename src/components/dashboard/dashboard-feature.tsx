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
    "3R2nRMEsH3sUp3kuFmKAN4GLva3bAwALJccsR5zkgQXyaoNZv7dEiZ8cegxcKnUCGSYJmH6tX1XD3swmKKUjACn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEBe7NyWkfryksk9jxydk79rMyakSwrjAKPaXKDudhwu8PtyNqCJCwVAyVw7rT1XYZYhzbg27PAiY3LPxgXZgHk",
  "key1": "4NeaQBTb7N8UViNqTggwxNgLHHW7apYCmiKfwv6M5GPrXAkoKZPXscarq1EJd82eEGPhhKDgySv76C6mApo5y4h8",
  "key2": "4eQuqaSJAL6WnKbBsxjh6Ncc3DfigYC72NE1mQQvjHhSEsxE8oBpw8BbM5BQT6B6aooUkr9eEiCVkLUFUuVePXdq",
  "key3": "2FwTnCpgDiPWDLstkk498A15bwTFjip3rTGJ54TUhkRSdaWHTesZTmSfSAtSqTjrL65J8brEMn2835BYHZZXjPjG",
  "key4": "3LUxf9Sq8DHybgWpQdU8nHVSFx29tTpWEJL4jJrZg9j1A53wtHpFJYG1dNh7LVaresYayksqmM4s92wrur6bW4QY",
  "key5": "3xQ4Js8t8W5483kqSbHpbBiC4oqch8Y58qL7UzPpVogjBpjqY4b3tbpEopwGSmhVrDDg4noUEQcim87YJqMRLYaK",
  "key6": "2n9cBTbKWs9rTthhme5HF4b1ThC7LgB3PH5MKxNAXcZKAKswHsVPqYTZ9RLeEv6xY9qCtt9GcDpqUe16yb3kEGCK",
  "key7": "2vprZNptzB2g6ohbNNZoThCUpjHLXmRMpKzaq9EJ1RvbfYSe8YJRD7bHQjoUS8FJbe1n5BUff85aj9pNsuJmEeBo",
  "key8": "5ogRATGeom8yH3kAcPwHJQwKALxNRqDBAYjuF1odiQ1faqtTdZgrwkYBinukyTUxBXTx2Bz2SvEdeWhYD1GKHQWf",
  "key9": "4EzM5kEEE6VFq7REYqtXHH8Wqphp3PR4kBhwEss4TUn981fbv1JV1PqfYnyy6KXV1DsdjqQWp5JRfbyrZhk4YR1d",
  "key10": "4Q9vgZ5oYp5s9Pm7LtkctVMpUqMJ52C3GLEnRshS5H9bxvK6tck5UkAhUSyzEncDESkb8gRJNbpw56DQjo2RQnZi",
  "key11": "4LQHCMBMP6XmSRjyZ2bQGe1SqqM4u9nkQGnqzmVLzc6XTZEaQ7KJCVo7thoPNMaVAcoqRbfAvcQ2aSQ2Jik1FXZQ",
  "key12": "4Y2SHCmz61AEqfbs4PQhu79bGkGYHwWsByDuaxcVn5tNtw4cEdhUvBApfpN41MrgoCrpfj1ySxDbHSiu1Hwo1cX5",
  "key13": "2qecs6hthytSoVTk4rhLB9PizDnFcRKtNHhoR1DGdnaQkXTiyeWn4w3JBJWGjKQekMPSk2s9ej8wDXfuavNh9xmL",
  "key14": "3XVRKNCgiqzxEufpSPnoEvpTv6SUC24tCe48MehMF1NEfkMe91kK8kZqkzFuZwBEVUD4RmJsTeoFU584kpQe4KjK",
  "key15": "2Y7Hhagyc7XDA7a6CRt71hJRrZ1oEzk1FUERV13ADAQukpPab1fuuX8D7Tyx8yB8UNjHqbjTX3VXydJtjmxaGPdg",
  "key16": "3LYvxSN5DDTSobEqfQwVSw5gJYwqdxc57bnP7X2oEC21BXWWDZzd7P46UyqZXrUxum2114JRZXXfRMDEXAhWHtmb",
  "key17": "5aoqxWELzcMK91924ZG62nkvNGDRdmi7pMrFUiwiRFbN5Z4ormza41ZZhjyrJCcMQSWrJKhikGSuqPoNoGvAqo3v",
  "key18": "fW3BamtmvbAZEsL3XScvXS8mBxLT8E12r5ynrdWo4b5QcsAGiKdQrkqgYrSwnk4oTnUs54QFvcoiFWq6dDzbATL",
  "key19": "iC5sWKmBuCa8pJ1TGSRVLGsyhTNW9NZotUuSbqw7YHTU45CaEsDR9a9idPUc56bq2E5CXH9XgMTAa1jX1mHnk3f",
  "key20": "3NzJcMNEy2j9s3ZtA9ToJaJGXjGYECGP8iEHvwGjsVZ5Z9iaqRiTzar4H45u5Yb5cPEGgWLVynJ8s31EDXUR6frJ",
  "key21": "3eAu9cDgNuND3kD1mhjBQjBA9arEK4sMeh3dSDoAY5aYtTz7xMVDzzHd5oKNhkX6ojLwo73ayRsbGSMA58Yi8dWN",
  "key22": "AtPbeuss4LVZSGUr9DDLHeicM9CUmZi5EAaeXrkKkUFBgBWZmTxPa5u18kJKWiiCtF9mcqWqkSYWHoXMkAnNQjg",
  "key23": "3XFAAz6exEUAdBg1AQNFcgJrztgp3zT17NUrUrwgMfa4ToAcuFDhodjNdTkDxTN2mh8xwUWJozmMxohqTtpgsGep",
  "key24": "7Ry2cKTUUCQoS3DCu7Y49qvaVWxRYwLWN2pPscZjLHxiQQCkKEx4qcQA8WK62GEZhBnKdqJmFdxCf5HBFnMVcx2",
  "key25": "63jXSUfqRvV5z4p4jcKVtmsd7HKw6HTHLRGf7syW3352udonPM57PpjHLYbEMgEBub2eR1PKxaLmWQAhBMj2atmB"
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
