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
    "3WJPbRVeti2xiN2LqFpH8SQX6ThDVQeBQdoEEWy6oMZhbbBnh4WYjRzGJhEZ49EXbVNTs7rhkhEEeTUDMQ27b8GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3261rcCSvMrdR2eAW7LHyVDzGyMhUtdaNPqUMnugtuemcRcRSUsgXajwic4NsDw1uEhyUpG1ZAxz1AXTxZs1LM",
  "key1": "2iCrC7XFQKRBiWBtQjRkcoVzG2FCAHg9EBCyeNDts8zptLtxgnc1GKThzMN6sMnqVbRn8yjnn1NaczqPhyz9aUPj",
  "key2": "2bbAXW6NxRAfRPVFeRKrKjttxMKK9HftqL6W6swukMA2TMxe69Z4uBJfKiAr6uJ5gYTnR1F2FKrPWwpt22jWppFc",
  "key3": "5u5spP3SX8VXyxKYwi6qFX5moSJHpVRNinDb6e2X5ggg2jYMkHtToaSk1p8avQZqBRNQEfwY9JJhjEAs8y6Mivkg",
  "key4": "3joigwjvtds34GaVkDaNEK8otJ8f3sc4TspJTg9cNsqVwKVJiQw8gexSQ3VGDZEMDbe5Z8Q1XStmKSeVCWeT465h",
  "key5": "5SWZmYtnf4tHpXucmJ85PEFEq8iSKwfkyHbJjVnSjtyzPvoAv1Z2po7AX5vEYJuXNuAbo2Ho5otk6zCUTgXjE5Xx",
  "key6": "66DUieXqmA512etbPTKNWBFXacVmpWhZ8C1R2uRH1wvhu67Yon59PstgSwYxdzU6V7KW1eaReq5L86YqVtEPGn1y",
  "key7": "48Ytxq8GufyuSrQrGCNaZVKEzJCTCH36Ngt6y1oVhNjWu8zzpVSyfaAbqqARM2WRGYJcHeWuV3WEMaQ95Pz9DYn2",
  "key8": "5Qrz9Zo3aWWguUfDVbA8UBGLpxEQzwB7CBb8km7Rf11bhyX5auaKdJHxzY2NQh6W3BQwnHGCofvnkYsa9xJsX5FK",
  "key9": "2Zv3GVtfnNWFM6EnvJYyagXJedRYFXs3x8TfwdAEwA3SFzUjuDfvCGArxhiiSYnqHtHhWTuS5LqcEW4Wu3JUEA2e",
  "key10": "5FRUBVJ9HFcPbSbDpCxkmuXXWWfkB9qAy6Gs2fypT66i1xFeZAWKYLp94sSBVPDq4CbeXSjoQNo9ra4PBWKB3fDv",
  "key11": "5VjysmaHU67zSzSUKnHduNg5FWYGSDGMxUcJzCZKiJqAqrEvAFDmD8xTrtwzNGTrNRUzqegkvoZNV9v2tDp5nQQo",
  "key12": "4YtUfcqLKRT272oGbNEY4KsJAxgV6FC5VuCbpoC9xxezMsz2uc6NdF279Ans3tnYfcycdzhy3vbcBVGLaJjFQqNG",
  "key13": "3XGp2BZdhXXoMA3djWJGNp8gQgAJ9V9C2sbUkePnyMhidhbZN8Ye9bQEk8roKmYcpqLUH84PLwExZ8dg1ZUfXtCf",
  "key14": "3RoWy8PJGgrQdCohhfsSKGPxQrSTWSBrwuB5yNiLPX4d61tf3AokpcjHvMhXENzDjSFfSakJHDBonWQaMcfaKVmN",
  "key15": "2FqEJ4fGVikV6cYnqkeB9xvkJKSDPBfcA3RvunkZXsGEhGp8DzNyEexmwrr25qFQSp5uAeET3NEAsUYYyzuwaTU9",
  "key16": "koZhHMG8mZVPevWMjA9h5Kvcnwj1G2TFFAqmA7mumRRPtv6pJLSZvFbxPao22PcekV93aZhwmQJt86Wqk8NsCqQ",
  "key17": "3A3GtuHajBGs7prypbFePQknYMUoHUxsgyj9Tb9KeJybAjY1G5TuQekEgGx7yX7ybgWAPe3SDLmGsVYjT1XxsC3k",
  "key18": "VLEXUDdBPMEffxQZnpPnVaK2hf2J5TMo6KWCceirNqVeAo48tiByVAXCzgzSqgdSrwxEmCa6mQj9vsH4Qbgbo1U",
  "key19": "3V5w1ruagw4x864Jn1c35ADzeSfiXvLKLexrJ8g3vRzsRmNAxu7qcEHpfjXXCtT6JQvR7ac3V8mVnEw5tzeD9mr8",
  "key20": "4fdUr5hoszorVZNzhcfXkGG73Jiu2Cy5c8VbEaL1F4Gr76WwaRtMtzpHzGwpnE7aV5p6Q29MSfeeMWjkjx4Sry5a",
  "key21": "5i7zuebCZjyPEkZcmZoynETT2qVJLxscyTFk3hJ3FUXdaREgBXFX8GJdNc5yvD6uctFZ96ZWKjgDSHEKG5oXmjye",
  "key22": "JU3mFUjHCTRsqRVzBKN38mkcrq25HmA2s7oUgXcrZHcfx47WQd9PuSaesPkeyemY2m3iP3xnDc1gsVPeizmKmp3",
  "key23": "3YavqB8oKdTGqZuU7Nsia5R4NJRX6Fa1BtHuWKz2xUXFJLqDeAqqyufUoLVztdYXPK1YEc9vEqc3Cx1NtE9Yr7Mn",
  "key24": "2nxtUg6eVfZhoRUM6ZZkszFfNhEPEMyDu2AVrkzRRMciq16aLGRcPcRrjJ6RdKAUbiAygBRgbFLuQZ6a9ZizB9JH",
  "key25": "6G7LSCPgBpnXKtjxGyWqq8jesw8MHgNPjBFdnygHeeZdC5AdsqGR3EaGzBtR8v1x73WfofVGq29qRTQBH5M1WU8"
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
