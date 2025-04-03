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
    "5gthAd8aLPgkgVCPG7UykKCCKXvaK4bQBBT5XSvzefLJPhFQgPU8ZAGsZiVehMFcmcRjjXfARNhxsrTjtFSvDdYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGCSpHGw78T7YWDgyrZi8vR524w7crHcFt6VKmgE1SCbya8gnqhmod8qYKWEmRGzZQmwY8KfZVka9FPiheKVxfY",
  "key1": "5V27cgAPcybHysFcvS9o6Ht4W8M1TnzbShkUJrz6Ar8poR7szDDfhg2tkWrFZtRiqUFRWdez4NsP9cy67j7tuPPR",
  "key2": "2ffLR5oie939J7UFeMXmRYXeLKP3xt5bFquhXsMZPJJV2LZ3sokcGABCVtktchbKmvBPyXrKKBKzysbrB7xmeRTK",
  "key3": "4jhf3dn3PVftCRR4e834BjeMSCptRGH4PrR3dmaQp273TWGYYHLCNV2GeTayAiS7LFBXB5NPCepMHG9VwrMvsPYA",
  "key4": "2VccEon3mqKvnLgn5QggXKnn6MjbJ5qxbmJfWRLwAr7CeSYmDwiAoz1LFCjeR9yMGALSNWhBS6SHYc7axMASsXKc",
  "key5": "4cKDDYXJ6etwwpAZXyhFrKiiMZuMsQM5TyC4C4rxDEdhtBYLZdCuTzBnGoPksj6m65LbUoY5KFt5xSMb3p4NmYvA",
  "key6": "5cSbZ3mpwzaszpTS1VcS6Q4GghLWdimsEkemSKMuQbdwhyujr5JxCgVvHFdN4KpL7m7kqf8ifV9qbZRyFyTrqFDt",
  "key7": "2MEARip6YC8rCmBb7JR7rqRm6UnX9WCfswqnzyrjpSBCeLBBGiLAXXXbYCVEDRvFg2roqNqt71iKdPt9RP6SheoW",
  "key8": "66h6qsbP8ou8PCvjPUy47L5AtumoTDiiuoPVmudccqHZ6xGCY64n74Nwv6Zh4g41crJwytbtZoJVUp58oYQd2b7F",
  "key9": "4W13A5QJzQXAxZyHq63AnjKz8uDHZqdSQbLK7dss6emHcAdsKaPaAhyUE9VTJaqRF2gTCAbNRkefCTb2XtiB3oyK",
  "key10": "2MjDtFj6BrtmUmG3nwCkwW9qDfCCrWGcVEt5rMfriixuMr961BxgM6qdPtVVqaGkd9P2HaEmLkDV245Ch1baQxxU",
  "key11": "2zYB76JvQbhqy3LTJGNv1PNVLSAKFwVjuWCzEo56dxprEgwisCUhBMctiXXgWRqYbHLJJdKSBfDLbpHdUwHJJy2B",
  "key12": "3DxsATw8LA3ZKBZsr49kLLHBSWAsDZNg2jU5Td6KTeteEJ83cMmqeqgDryg8nbQVbnpx1C9A2ptbhMMEgoQA1EQh",
  "key13": "5esTVGd3kfncWRmv5bMs9orjAWpds8JJ5zMWciNynec3jMzhrH8ZDoHukUsjHo55VdRrLX1f6aSZruKtRo2jjCcx",
  "key14": "3NqudMUuyZQLT1FZeEX9RGc3R8ZcK4wLv45uDXbb6aez1znc7PjvZrdQWiPb2Ytd2qJsNUotEKwxM6QwyiBuQUnN",
  "key15": "ZS8WRkCQ1kE8HBr7FxDY4QcrxqLMLyRSn97Yyj5RVXpaxzXTy9oanCo7QFnWBPMW4WL59LSzfLB8FVkuVMdMwnL",
  "key16": "5Umq7fNECrxHxoySR4vFdYb21c1N5dejpVaf6rLLRzuy6y1AWPbByreKHw5TwepYLcWMn3CZGwMcgLebsrB3BN49",
  "key17": "3BYzepch4pBEUEWJb8VC5DECcaVyWrFxCgGwZZtgjUr4D9ejKD5bSJFkWv34hkqTcYzHB1kzHC3QYJZYTEy36gzy",
  "key18": "RGzaNQpx8Pdjf3Ncpr43mSgJ7UmXSEKpR1yrNBLnezWmWeG111S3HtPn3E19wx7QKCrihSGFetiy2TknRnK4MHN",
  "key19": "5V7JNL1PBAWvs2zHTohRosZDZLeW6g8sjrJgCYL9QNqR3t46rYuhNfEKbN4ymkhWqt3RK2p4nXtTq4Lao7pTeYX6",
  "key20": "2meKaduMXu9qamHMsX3ZJZukf46iwQrp4v1Nh4WxUH9uH9zKpn5skjxUcfpMX1cdeHwvEqhJkSE859Sb9ePt8ro7",
  "key21": "3udQwM6HMoftRUh4AyZMhcrjgUt9KEJswfDfGYWVLFXPjnGpeGFMvGupRRDT2N56Tw26Q4W8Ahmf6aCX8gof7G8v",
  "key22": "3svPWubPdS4KkjvafuuWw3dz8WtryxFeYwBhF5PSs5YvPac1pXterMYyFKRy2WooUyHHxi3JeD6QLUhyYbENyQkP",
  "key23": "3MUxzCVk8YvNbEq6HrtFr2VMqnZ9LGYedutThDGUqXhKwBoj8uSxowe6Menf37APVoV76Xh5jFJ1KSF1WjczjjxY",
  "key24": "2qe2K2oDYTbi6f1obNV2Y8Bz8xu9bvmSjZfCVYdYEjBUaYZHBbR4eFmAaTYDeQXozop9aBQhZ7AWTnzgZZbXTTiH",
  "key25": "5UwCPyq3oaPZPdS4DaVhhndrViARzw797ToddXBFg4EgDcKLjsM1SUdVECEuZkPN5rbyjdAvedifqbfHV2bMLtsf",
  "key26": "5kJMsGsws1fFupw2QHy2jEBx3i1B8z4ukmZBjdZRUYYrQp1sbx6ZhNeWLDNemBNQrEMffztjdtwVnxdVRXALc6xM",
  "key27": "2D7Jt6LytGtq82QuJxtQnCcEgusPDrr92cw8NK3KBwC2Bd4bgJNG3d7UaztLhmggKNvvU5dQYRcNJRhtPXj1DbNd",
  "key28": "t3kBj3TQUbKEVoJG5WLypTKXNpDyix2LA5V1M2MMNQ4edttaAd9euC9GZdm5gS5WgvSpNUsp851hpWa5hQRGGw2",
  "key29": "46wyM1G6tsubtsmwD9WeuNYJ7qRkASmEtQQUezBzK4sGhgT4NpAuDrv9M6Y7ZUHhhC1bc8nrVRhB4USyJigW99Zf",
  "key30": "4CXbj5rrxJDy47CyEU7iZ3BAKcxVv3C2m5rzxEuS1fugzLWA9ZgHBFnW8fYsktjbJJiDKcJ4MneVWwwKp7zw6ohy",
  "key31": "3w9RBFx3YzU4kBhQJPSv1gDdMSoGEUiace5D4vmPeEYBWo4BzYMKqfYuxERbA1XSD2utFKaH4h1UnoNSfFQ7jzgi",
  "key32": "5ocsPLXLhGoYFZuVJHvdrUHwarGEZNmDh1ag4tRdVTTdUrwCSzMXd6JYYHoDix1WgukXjWueD5xq2jwUGe8WZBgf",
  "key33": "4a7jUrvp6SReibh4a4TqtsNNeWPmp1NYpwiLwHPdKkJhYcQySiPhW94RtiyYyLKRPSSf2teXMfsLmKuw31dFsrmn"
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
