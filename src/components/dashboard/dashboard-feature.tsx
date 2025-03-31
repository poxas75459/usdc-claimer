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
    "2UZ2b7qBAc7BQpf2Gy12sUZKWEsm1vP2SgEFFGqnhkMczJXiAGFTXwSNdQ116NZhs7v9dqX5V1kmctwc6PwSE8bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CfPfhLGF9sciq7hqonB5f1mykpmxkN5VXDE2BHESWZqV4QUXMu6yDsfPxzxZV7ekZ8uFMdHbrmXo7PHmRKGTdrY",
  "key1": "E25MZvMJkgJQSZMXsLMy2MKacVCKGUHkRkD9GiL44954Taefb4mriywDC2sjZiPyLmWtM9peM36TppYB1SYaadb",
  "key2": "5UkmzgWuikfkEfWeStmg8KUK4sVAqfDmWps7YWLHN2su6Db4Ssq97E6oQQCi7XoxdjeDhGkxjMAcRFE9kb8cu2n2",
  "key3": "5HLXrvQzs3cHvn5M8wLvjB7LGJmpSx44Vf51H8avGmHc9VDrVf2zBFvgWPQKpTtfYcoBgCDpqZhWfyKh7ceeFugF",
  "key4": "3oYMSP7NXR5Dq2KMCtMnaMiRngi5NSR8UggxpphtNiqcCUbPnpKjjhsUEN3irqXePmcEfyjTqUy9Ubzvr7L4T1uP",
  "key5": "398VbM7WTtVT6A7F3xEj51trQHm2JkdxjZ2eYiU5gC5kpaMEtkvCvrbi8hsVvmemEDMGRrFx6R78QrmZr7NevtMW",
  "key6": "5j66QQwJ3hHVGKM4XbKgrao6eipE8PMir8iGpnePkpQqzpNkmtsfuyyVHtfYb8TMfsaDs9B3XXekDkJaTAkP1uL",
  "key7": "3d2LsgJLpXvXPHiGyLyQQFE7Kf4gXChCJCWRrorWrqwF5b4mUdNfmhc5kL4MqXZyDugn9JDo48AhMY8UJxR7xqjn",
  "key8": "qrBBb6XJMGbwZuQMU7uT6wXhExE1xdDbxJtstCMhkRvUiSF7EqCJAMqV3R3EXSdcM3eJKm5oZsE6efqH63fCaKG",
  "key9": "3qwct76s7EXM9dKPxccAy9DsRx1hLzAHMwdsEV5E53uGkRT6THEXdYBvBL8HV2dngtxs2z1TntxgrRBbMCh36FZc",
  "key10": "ap6fVxge5amsTceHXLQ3f5GeVac7mA7ZFLcSniqqSM4yt6dnNrtkzWreJX3KvfQFSXKQjCFa1N1fkxYUGovBmor",
  "key11": "44TRs8D5d58JMTdumMCQfcjdBqzu5M6KjcCwHMmjVZ8aA1hiTcEbtCDM7XDbPsPZGdzNHDFFVP7s6m1ZUM3VUs65",
  "key12": "5Z5LKqkpS7ZfPtsTn42VfKayV2LQhoKbbpXkGTGgKn8mYnNtgckTg8h6qhfNZ71NpGJWmKCxU6P4dZhHycA6y5HM",
  "key13": "3j1vRxX2Za7k4Y2RRp7zMX9ieFwuJUQqnzVrrsrSgVavgWdrMMX8ZHn1md7tTaAwUdUgt19wfc7QGh8w6PMK6DPR",
  "key14": "3VaaXKisJZa9cb9aZPiZRRnYpKmXuNUvAzCVfAQ9zazgbT4RC38br6cszx2bfw4eQwvK5FbmKh4srC7j49pQxRTv",
  "key15": "XuKdjBZZBy5u4hq492T9hPa1YAv8AM9TLhv1y8pWEtrLnj9C3jw84XhhcRUgHobZTe8Tb4YbeCJTtidypwgRxue",
  "key16": "4mSd53UgJ7LrQwwHgc1K5qTtUzJ7mGYzNbrkBLPDFaneZ6onqGP5hTFXwSZA9PjsPxZV8XrnxWvysfnCwhupqNAT",
  "key17": "35TiapgWc8MUwbrzYJV63Gz6WH3j9LzC7ahUDSuwXUqXMSLBQcaWE3yT1cqK8wC2TdB5Fq84maUvUrxzyEXnrywm",
  "key18": "4JNGCmpTaj8sQ67ttaGUEoirH2w17ticBh1ks7JL3PNvWcDhLdPPJdxM2QwNCno9d6UcRsAd1Rcb44WNZ19QBfDW",
  "key19": "5ymfebX9YddjM6se5uWha3ZrdM6UGjHAoUXYTM2xZEAgkHCDnVuCDMcGoKVV6G1UiSCx94uQXiaLo569jo1aaPV5",
  "key20": "kHVMb4ZwKHCREznYKrybkzcCEqyKQXVhpZmy51tJSEd3SqveLEze2Yhpi4uuPRVfMnec9BRmJrmy691uM8ZQhJE",
  "key21": "3LgoS9R35TjiCEmZBzAAeC2M1w4FDCLi4fkRkUAg4moBY6TpdoFqyxwnu9kMEXRmhRvYn7XCewqQWPzsR8HySCM5",
  "key22": "2PJR2PfEycd1aUBGAJZ431gzE9VmCFZR27urmzLHij4gnpfhjDKCRnPWBJtV4v5RM5itR5VXBRRr2FGJ9KYjxhPu",
  "key23": "3kBhqQbJsrbUoHx7sF35UuX5ntPq3VJP5VSUBgeKkAGv2DZBRBHtHUrj1eoYeQ1PMbzPc37z8nZL2nTP7TH98CB1",
  "key24": "4Nc9C4QMCGU9Wk7Kp8Qd2wem9XiaQScDadyEeNR9jy1ruQxwMCi2M41B2eQwy79ZXTJpf41WXYT3iXQjLE722gSo",
  "key25": "5EunHx363TFX2MiysGpStaBGX5c4eBnTDbaaCveAvPJZxRFB9n26Dpp7daK2hbC6QSYWVLqCw5NTnc67V6BFqap6",
  "key26": "3AZbVHhQyCHzEHUmumEFw9mpRUrn6sfj9WPUo1FGoAn3wtFM3WqyFaspFY2yipzWyj2Ts4hNZib7uYCc6jLXhR5m",
  "key27": "2MVdKanmr5PGtZ3BhjihjEgreCJFe5i5stgvFpPMDe1AWsdYX5EtzZjNmPkEssq1cdHFGt5u9SUy2sawQxpB1eJJ",
  "key28": "44ukDCyE2htvUhDEkSszmi72NHb1J8PQvJi2zgpxShdCr3Sd36pQ7S3eoXpSJ1HiYoP4eyXvUgCxcLokreL5Ravb"
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
