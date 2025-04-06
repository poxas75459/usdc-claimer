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
    "3H78NcUPWJLkGJVW9REvKBh9dwSK3BTjAbHL2HhXPM1hj7n2cCgnfsNF3Tot6pC3Cz92xZi22yygskNJfUF7BujV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zua2DbmKAwSvVmoeaBkcuf24o56H2wMi8QoGkGj2xvvYkrzoNupVieZd8WA2ssP3CbivjJxqB1geMzT5V5gDB5t",
  "key1": "3t3njEzAEAmaqAdWJztyR5n8H62QxPrN4SDJvoJASCL8cEua7CmdjY4zgnkqLgpqiowUx8k4ckKwT6Qwrzqj16Ga",
  "key2": "5YZHzNcoQjfUn5SZEAQtkCDx5os3awzE96nX8DfRHkdg4PmqA3Qo8rKGa8wR6r2vgetxts6THoBmktWCFu1qAup6",
  "key3": "qjEmdHJG5sbdPVZ41HYmdkewA9sLhzF1eyxpmK2yykiiBv5GEPTBWU9PFgSwynvnPQyDePtKfZLqRnRa6VLedxU",
  "key4": "GT3hMj2jmSbg6LzYDc3jgr1g3AJNTrqihSwfoZN3EEcsTSM5G1kvzFnT3AyMRmmFDEBEDkjGe7okHXx9Rne6BUK",
  "key5": "3Awie5h2ieqJdL1H5DaAJ5h1LMLgkrYhSyrLKsv4DfZH2Zafe7UPwPQwkiPgwh4FC4ALdh4tJo8JXfddtckw6w1T",
  "key6": "5ieWFrvsPP5tEMk8AX32kTxRkDF7e9USze7qcED8TAdrtySeeqDFiAdkbSbDYaNBvgQv2xL4GrzLg8Pce79GyW7o",
  "key7": "2zLVZejbFjZSwXPvYWQGx5m5wcPkTW1qgK6DaxgzDeAmL7jKJ33ZbmmrLdkbND7q1NKweMsp4XZGsc7eW1WcCZoC",
  "key8": "bGHhemSVQiMWciT4oysKRyGtUVK98LJQCymzscUC9zYe7SCMovxrQsP91MqgkrqKTBXUdt8TcCeTKAzvHWsjW5G",
  "key9": "2tc2ZjuCv8sF8PqBgugnFAdGipqua8rX2AeawASrrqeLXQTm1CZVxtwLDZAAutB7j4p7dMM9ieLwKa1ws2zkk8Td",
  "key10": "2NYvP5avFe1YBWUaWK8rSZbNA9m3tpqZfPc9ihPsBB9zGq33sbRFELrQQnL8mSWKbgqMme28PYtbAvBLdPh4r5Pc",
  "key11": "4WknReoefUqmLk9MPCJ6k7wnbk9zM8djnqYtSHx7NgiTz5aNDuwVjnBfr5brqg5rDQDsUMehFkNAxpXiwVNqVxtJ",
  "key12": "2oCdJPxCmVAV88cp9kjWxkCox3qU7GrjvuTi7XrdsAoVZqsR8p2bWzo4vZDRXu5ENyixLhRxEsMUbR7DoFGKryQh",
  "key13": "2cN3XDEbdr9XqufiRRWKh2cQuEjEnwMMGh3nVF1C2b2wEwWbCL3KaeU4oKPnTiwJJZ3UuXnS7U7N6MB9GZEJcGX4",
  "key14": "wvsPA5H1Vt6QzX8YtoeN53xxKffSoFhbZkz7RfW4aUqr539umFJN4QJ5ouUX6qd2NtUm85qZrnKAyC4yaB11p73",
  "key15": "3rL1c7feVLwqrpzPDMY4bh95nW2GpVRdZvkMNwB7gqEFdkn9BVrj1eCX8AK669BZMdhi8vDYeXERxUNj6PTbRoXM",
  "key16": "4G8DW9WiL3Bt3bFsouBqKMegYf7e4fhyisxvQzhtYvsMk9hxhiV37hpjmZaY4EnJaqhwEtwKodbNoZckwdAHqVT8",
  "key17": "7oKoxbDAyhFSbgpasYezFL8DnKyEX2wjwj4ykWruz8SsD2JESqVFMrsxRZttQ4DV84zRRis1Rkv6g1zJ6jYV289",
  "key18": "2V2SDHW6drpqiBGJmZGJheELANQGFArQVqmHgm3vXqbabEa7b2ZEFzp3mHJQbRA4MFvfbsuPLGBXrZAhkkYdJE4o",
  "key19": "4jpCAjfw7WFaXpLHsmfX3dE8uNmJeCfwtyzqo2bs6CDnAFNzncv5DY8EMCuZXPscX2JEqV8aM8MRJteEAV7Eg4tn",
  "key20": "5ZhJ9cborbUDrGAK2QKubFvobx6AbtJDEKPmgBBVEsTUu6rb8J1msYe3bsTwvLtZS9nafj7psMvWQFG7U9Haz9P5",
  "key21": "3JJN3z2MMxsxo5EDASSoSpy8CJVMf4cPgq4rm8LCU7sFF2cJcnbxwAYMoYUn9BBkLCyEpVFcgnFwKZqB4CH3QY1G",
  "key22": "4tkYvJW5CZNP4UoUS6Gb1fi3ouc4BYc1FHjoeyZPJxD3Xaj25cVMZTiHNzV1QycivDnbxv2J4sJdMp8cUh1vZw8T",
  "key23": "4MYv2XtgiodX8Y5zQZic1X9ay8xQrh5oobAnGrEsPgF3Ys2oxoL8ZMCWjHiWHF3XeS2CbTR4YoJQ78TJAnyYGhwo",
  "key24": "45VdFgKNTeWbDzmZdZJBAxcAY4K36Tj6pBtmjPVTkRnm29SViCynh3mRN4tVRq4pMEP5moufKFz8oQh5WPWsiTUq",
  "key25": "3PTiHceNMmN5xe3KFBcMmHEbniUCgqZbpMc9v5fqEWDRurFBruCh3XkTFCnSXHwEfUMD22wG1jZj2XosgesGpszu"
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
