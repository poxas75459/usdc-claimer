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
    "53GjRs5xz6xe1mJ3eoTtGKzQmYizFgKArB1eXrmytmchYiEjPD2KiaExypu719W1SEPMVUyb7kSHGvFsYc8zoQTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pu7fr4A6PSwYFePEgc3zpbLQpAt4g5wjr3U6MLzBXYApzgbEHeyobKVVgTrQHRYKuueb33YD6t7igXWP2E2McGx",
  "key1": "TS2iWUmGazzhBkP5t1YMiRkkqe2WML5suZKMYzn18hyyvUtYJivxScSGVMWpLL3fvKbWnDdu41TxmnPWxHUDyuT",
  "key2": "3jafdkfrzqqiTbuQVRDsRsXboqymAoRryFfYqvciZgWg2SjaQetsUBwrczWr8wf9ZWAswbT3MR1gU94cwTUBE3R",
  "key3": "4b65wPxiFo27ZGZZxaew4AfqJzkrSBgnYJg6n3LYkyEU7waSZHe3FewbBdmn7FtFyo4zQkPv8Ua5hSz6uXXW7dQn",
  "key4": "3FEFyaEnrzHUu2y5ou9Zto9msBjsVcSZEU3yVRn8myVrnRrVYmTiEfoxA6rvYnxxZkfvrNFt92LhXFhKeEns75Pd",
  "key5": "5P7d1AB8AJxiQAtaHhd9cUd1DMCDpUzK4oT8B2gM39UQYRpyuf4rdmkCvHNvgiZDikE8XzFT5Xqi4vx2qFYF7LHc",
  "key6": "5sF3Uu4DxRh142L6bNWMq4xSM2gb12QBnmoWNUytEBaRctrBzQxmbJghqLuF5EDpur4GBMTaMD9oXRbj2xvfthmN",
  "key7": "2KJ8Hn3sv46CKcMEgUVtTs61einNRkddKopnML557AhWQx4xS2ZNUcUVgbospXnct31DvMn6k9MWos2XLphPhLQB",
  "key8": "5qgRggfX3XgPVZCQv8YiHUZeUUn8d2b3knDWqDLFapxLLF68vhmPx4dwnDw8ocH5mSBjT9A62NuU5c4BtLLEENSb",
  "key9": "5yQuiWjXShhAn8cqqPmeqetmj8mYq2gvpCvZNKJZAJpTVHd25YVWnBvpANnokg8PEzMbt8PE5TeiCKf9ZsGNv9wz",
  "key10": "3LZpBz6MGCH6UEgsNER38MNW9ngnRsk13Q5QTK9hQYNHrs4NFWe5wdPb9oSTFdBGmJ8QTm29VWCeCFa9kcJwWxpK",
  "key11": "5DK5sy2Eb5yUTr4wKctNQjfqDAjEwEKaXSqzXpahAyT5WZ3Bqohs18VmmHxnLQYDQ8wQubjUXwNFh6ami3Xj2ecn",
  "key12": "3sX2DWh3ucWbgXHF4RCkNfaSZ8eUwe1KqnHJTAAVs4hzsUorSXUUos9MW7WPA5EabKh58QT9NKXTCBNN2pbHJMNc",
  "key13": "QNSCvLHaDnpp6Hfjct9vEjU633RYRTxi5S1CYxmUVE5JiSThq31VsVtUz2xg7ED5jMRnTdRPGoB84cLjYYmSkg5",
  "key14": "46JnqZf9fL6UTSZya2g8AdEVU9QR7UgZcTr6itqVoxjFxrpDqTVAi39cDuGTSo9oSeJ1ry1mWouciSJGUCQpaFp3",
  "key15": "4FwGrKCv5DWL73D75DRLo1geB6dJ9uYiefBpdnzkQGNRET89WoiZAM6mXk5tuNN5ZS61z4TSeQBvhv9Byq8CZCEa",
  "key16": "345LfrZvWC9YJ5S4CbxyBzvFHKKb9wCZy4mfX5PRfoq4LFyegHirjmnajtiJmJRjrJEbACyepf7J9uETCVeyJXgp",
  "key17": "38vM5vhCn23ppbgHrjvAMxgXQpwW53BPkUMYs7rQonoETonXFBHuqp4G2mbZb1eKQBYBi4ToP4ymxPnNC6pbnyvw",
  "key18": "x23gPuJksPohZSFoSiq7EqrA1ka4WxnDXarGRLHBxEFNK2ZR25tRBKTsaaBzqnUrBLQLpRGHNaN2JFMsawgbY52",
  "key19": "Jk7L4uz6ULDJLKvV5Z631G2j4Yo3LeTHbYLh5ZxkiAEc4nWVdJeD4MYMBNSRVcgxDVXd5AktJqyZMb3PiZujcdv",
  "key20": "2oX4G5hQsXufjLwP6igKxyj8Mb3PJwhrcfk9sJAE8czY4vfXbbRjwq9d9jsqiqV1o7JSW48nvQaQz4NZsjhk6Q4o",
  "key21": "3nF5BsoPczLYs5n6A5nN3NM77Fyx72xWh8TYDYmZ7JtiD3VK5uw2iRPyGKozq2fgMS1cHczno6GbFbmasyeMNPP5",
  "key22": "4j4XbkgF91LxPVo6zhjcoDY2Qq5BukwoaCKr1xbuyZ5UEwqBKV57cbJ7zuXsXV1mLN5wE26yWzQhnejVcKAxURoF",
  "key23": "487aRzV9Sit3Vnd5EtVRBEcmFmH5MrdwJsnvH2dfqozuDfaqD37pPQMgeM4MUH2VtEvRjuNULTQMawW98eYsLQts",
  "key24": "2XndQZ12P83FxXYFTvQKMfwDo33UpyRVkjHonWjBX49JdABi9HyssH6LmC3CfuDaBwSJA6miiPt5S2SRofZbymXD",
  "key25": "49BXUXrV75yds6uZEx9Js1PZaT4QWev2M6i6NquNxvaQJqT26Li91HRdP1mFof73qUHeh73rjKHb2cTZuPUiJsNj",
  "key26": "3jqTdPYrqdh77fvYSKFvo2jup7V9Vc4Jzcj5t3n9nzhZ7SVMi1jtLEDXFWnaxwB1ebfQJQcaxzti1s54yrrdzJGt",
  "key27": "2WwP9oVDW3N1gNF3uQi3qwcU1yyRGAt58ydkqYpSYAjQht8B1mBKxTEREqeP1dFGYvEHs77QCr7i8NK5KcUC9FPZ",
  "key28": "cAF6hwGuakq5mHMKXjCey2BsaN1ESQMmk4uFHnHz4Reo25Bc1n5LcJUEg1uVadgATHrKXsUUWCx3rgD8iwg6u31",
  "key29": "4aDEZtLuZKbWYWL6yvyjVcymC4L2rU5m5cyVNvWCPsV4zM79B3GsZFnhVwtmcKakR5PK6owvCdGmuCN7P7MMEHq9",
  "key30": "5rfdYmUsKXwiqDF72MYpfNthsxb8VyrpwUsLvNBAd6spae3J5fAhShEDZb6HiwWUC98M7NoAmkwFw24AQ2crEiTK",
  "key31": "5fJVumMwPB2QRejkrZwexEzXMosGWutGcqD6EWy4mAzMgou9AVrwXmcZkq9dnAQKiCe3TQYD8CfoGRks9jQ3uaTX",
  "key32": "5wvhHmWzT4CthBCo1BfgPKJpfbwpRoudqULnHJAdqKx3sc1pTiFHF7oHEg24UvrmsihBtW3Dw5vAhLg7Nxe7facG",
  "key33": "36EzpjRwhWJXyEP2vsASi9poKN8uH7qqh6hNBWTnzWFcUytYzzCnt8sNcecuJnDTzC96EKqA152jvpVtzYawmWFe",
  "key34": "2kjDyWFz1xknbWMUQB7FNuUFxwNhTxH74rC6ByrVUyHWvvUzjjzJPDQEWjDzvc4QFcn6nUHGL2nxAmULqpHpp9By",
  "key35": "t8eR1baq3be32dvEJXMpZXPWN3YSvyMBKUavGsqF1FfYwPghQ6kV1s9bMtMpMijrXTEn2dpsS5M6zET4oMEpF3X",
  "key36": "2MWWtJvUeBnrDG7uBKSvmwsZKf8jtP2qAA9qZJGgepyTfo1TPDqfRf1LxYeYdNUvnWJFE4pGJ7KgkQTpMFiLmfnh",
  "key37": "5p3fG6JxXyKFn5E3HVTfcMT8LF9JL737Ge24UgQkYTvxEvioHm1hSJr69XncJRjNPJBHTyPBnwYvsuUqzUWtCQJR",
  "key38": "56HSCMdsgRxcBbsMPqbasiGibz2Jznsno7vWK6GrRkv7wcm9j11jvvDVkkG296fvEGtr5Z6CVLpMPu63G9WADvde"
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
