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
    "5qQofuP5BTEu5mFWJ6Trhk5XyVkAVeRrgsokhKadCbh1ruNgG2LQWtswwfbVYg1uJoDaZdsavxztyemwf88iWfJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zdqecJU6rzrJS8aCdWncpJsY5XaFighDjf8m2ydaHZt1MdwvLyfYMX64C5piMocyAtQwuCtqJWNjy3y7CNis8A7",
  "key1": "361mKcefebAWN5qKZ1BzNqJ4b5HH3Lu7hVyZKzvifokw1hTXRsa3ewTMSja5g8Mo9oSX4LpuoEDe3b6pkVykSRPk",
  "key2": "4pCyJrGjMVcAVryr4LZ94k6gNh39yd2Tuw83sGQhM5kXJ46DVmHHJ4UgUeKRysnQhF5CHcfnLYoY9TTmxXRmPDNK",
  "key3": "4UyCenaPZnAn3dSxN2aW6LeVYTcJua9JyrXmzJBNagoZTmRpVCUQ1MpqGABSysQvvscnLPDvH5rEzUiE3VLNYbi9",
  "key4": "eCdWogrYmdXdjFhXRHuJdHAGTYcrHLbpurVKgUYvRo5sq1rY3kMMQbGATZfy8CNfr28CSRahaGYndCjy6AVNiRb",
  "key5": "4rcq5fZFNHikPDBhsu5TCo8dKE3eBDspD4wKetiKFYJo1syMzwtmqtkqGu8JMpszEjHsCJ3qpF4xGeaSG73R43xw",
  "key6": "ki1sDnsGsUzxh4Ub9h6ZtrfgbJ4vGnVjNef1trwvbszX6RupifkbhBJ1FtxPjZ5jUcBiegEDXaJ8js5PRopQi5v",
  "key7": "Hfy2TtWzUvoGcgSxfEvToVn9tDBdbjW7JTnzAGoRs2mCd7jhsuSgYzirHdEvWFvLCCYzxCDyTJBwJbXPDwmKX68",
  "key8": "48iqqcFw6KnAkBcPCwnq9WMC2woqAdLDkQcLsSzQYRV2yRWeq8bUPwA3chGhk6ry2V3PECgxKjZa9p18haZ1B1SY",
  "key9": "2N6jokGsZLhso7CTb3dqBMUbue4jzMCHY6qWiH27ZMs4bq9tLhEJMmtKoF1KR5x5CpV8ByfC8n7mmoUJWyRyNjLM",
  "key10": "2jisHZj7aLGrgAGiKiv9sXXK2WrvbdFn99pXhUfWQrqn7fXpxBC85HJ8bWgeKuuxr5eThWfXt5TSJXZLUkNQ5L1r",
  "key11": "zTmXV6wD9WQAdaDceCkgGcgiX5omjbvn93UJBZyVXNfcG7UPpkvTbpMHpej8U11i9cB4XtmpyCfzagxwifbVXyk",
  "key12": "4XjJq5eK9Dwb6m3mAJMAM1TRxgiuB51Efpq2jormrxz9XGwC4YsrDouLsyzxBaz6cyLdsERgchs2ukKMQnFzDHX",
  "key13": "2s7aSn8XBdZWUhVLcNQjfS2YSKLEHBDUrziwezTgveCRbh9qnA9CUbx8xwuAZViMwPhCnyzxpYQBjNtyUnfm3npF",
  "key14": "3nMpEWDSG5EwQ3ynrnswtzNDKSvXUPLZqLFYMn4niGdZoDudpEiZa2oDjYpMcJScpVBioZb7sMhsVyqiEe2eWfjn",
  "key15": "2TcFW4kZJ68aEsyd6Ym8voDCwCf39hhJGKr39E7vYgTB2hsBXSVvH3owSHua4aU1EQp4ZtkHeptN3DfN64oUyz6b",
  "key16": "3ubFdSSDvTB8qTnExN7384E8urfaZBdrGB9MhUNRw2ch5ZZmhYjRrB2734kTsaWcZcmDrbUB1PN35LmZ1mFuUivn",
  "key17": "6m6wxvKj49PTPGUa9ovhZTqcmo797Mb6dR96nGXhywcwfgzR7j1bp54iwzLuC9XesabHrjvFdnbLiPxo6DbGKyy",
  "key18": "fRgoKfVZ6J1GpPfYJ64mEkhqnNqh6KwxcWAAZer1wTFVMzdN4xftLTnUgfsZdnEPMBWLzmU9aR72qCem9gVKiq7",
  "key19": "Zwg29zoBHbDL1AXZYBVcoFtU8wvgeEAhGysnvxCEU1EjEL5Fd1w7DzPo74RzaRRpcW4DbgbbBzqjjgZyDAcf1ZT",
  "key20": "2UjozNSQdbGAPLfXtX1i6BDD834Yp89E1JgkiAURHNLPumXLGxpumqV5XZRchbNHqEQc94wrJEc66S4WmBGLPW5s",
  "key21": "313PWp3BTMFXsCMrgSciotGdaAVQBzh8sesbD6mbNhQDQrFbGxGGRF4GzEGWk4RE7HnX7FrHq3qbG2FWuo3BFGtc",
  "key22": "5B6Z1rnu9o8c4RX2AFLW5yaYYTLwCEdLg5dR4WJodvvFeaKR4reMrNSmRu7zBKiZgo6wMSvLSQxQv6eKXza2S2N2",
  "key23": "3kyaTDqNQu6MQBkHWUp2QsoyNGTVWoorNXbDTeNWp6BrDM9EkpVAqmtdsP923AGBM97ZRFmoQcDmfrzXtL9Yx388",
  "key24": "4HmNgu8auBA4DSVoMWFUDsku3GaywL7scgeomSs8W8pDzBCVAHLZDDQcHFhfkESqkU6hmjzkW78PpMxbNnSmwEAZ",
  "key25": "2ekjr517qwXyVSt4FFoZSFjc8gqz7Yfzzt1zu67iZycw9ey1PFVZM6LZxKvFYaEHR2bZ4hHV3UxSDUUvKa19dhED",
  "key26": "2kvyUrjAahUCzcGWGggB54UQAZ79VybrpF95WA9sq6umwMGS2h4k5BQJdUcjyxH3xTGpw1xYkZkefRFy9cnyichd"
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
