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
    "2mkAnyM3nqX9gi9gVkgXfoDMfX9wfwpdoeZEVrsmLBaJCk2qf1TkoheghckLUmzb1L62DbgPYy8DmVD3tUJyxrdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvyWoHjfwVHEHjUjAzw1Nf4K2qcP664SE65XWyozhoirNSAQwtt5AdifLVshCwnhU7YsLLaMZ6Y5fRs4wWijCzy",
  "key1": "2J3yhYsZCHnBbbz9YHB84WCdrP7AwTmor8EDj2yvHVhKaLVZ2j55D57UxtmJfdmJVZSuk6Y1KdJgJJRebGFZ5eMT",
  "key2": "2zMsyjqoNaBo5ym8fDTxF8uk5PvzFzxr4HWW5nMRxMUoZgQ8m8Pgcm9U8YZx2EnG3SBsCmMzmquQjZgDYRUSpRYc",
  "key3": "48Y3TZGThiVH4tWUZtS5k8T8frYm3nCpZN6ysbSrddGn35omHozREowvSBHi6HrpEoSxhJFZFz9TzTJLA7N5cZTg",
  "key4": "2nn7X7PTaXx3AE4RtdN3tLWhAxnSgcjUxxoVzNhYKgU4ENySgoycCQXBvMTQgPjbY5nyZkewRZzg168poaawJNc9",
  "key5": "hBK7E6pAhrYGPTiStExVDTT4nLo8CMJAk2sYmaZQQT1iYAvnEb4x1E8Fd377pkNJSWNYreqXEkDa5w21Wn9Uw9B",
  "key6": "4Ek6ah8yHaeef2pjQfNB2aHjYGWhn4QgT7LGBggY7x9TPQcymQNWCNWKxUxgKmC7PJJx9G5ik2wv6x9RMNMqwjeD",
  "key7": "3D5LUTqiMypiXLFBF1JXhbN84M4XMdiWxMmfEamQhmFw2QfM1tgMJmsmXeRMqwUnqQTv8YUrStsAsndsoTgjhkHC",
  "key8": "4cU6dspWU2KZtKDauxCooQL81y92RhFso6vBsRw8rcyJDz7S8fFajZJT4mQrBP155jCp4ECe4BbeCUVEjCS8LZ6F",
  "key9": "58mByEDck13mhj77ykhvRFNj57RNGpT4GNkdZz982GXWU7U1MxCdwGmfK7KiwbjJCCKuvH2aT178cHaLTYVEsgLF",
  "key10": "tnAyZs4Pj6GL8SBijagGwcsx9vrzzVJGfDR6tMfyuLTh88Q32ZatkRc61RHk9pEUBQQmBoheZBJ4FCn8hvn3LaK",
  "key11": "3atTTwo4YJ24AKWhmD7vVpqYp75G4ksfrdq7USRV8MapLyuAebwxXPPXgiTUrMBpr1eMc765HVykoU1sMoMUZYUe",
  "key12": "2DfGVWaa949xqk9VFRcaxvXvLAD5BazxHPCPHmDpQwj3Dbg53oQvqiwdqn4MrXkVS7fgZkRNZi5JG7WAjhRKznkS",
  "key13": "4eoes8PcNbBqKft44PbrHjdEyV12SA37LXR2Mn7wPsU9ncvMALWp4fzfmpkoTPdKudggYF9jAFU38cK161A7QgKV",
  "key14": "4HMwLCtje2iDNNumHGasdRHHCWSDQRA2ah59xrJo9KM24AaVigDrWT5FLcY6AJP7YSCU9T85ofbvysa6jTTYgMnR",
  "key15": "2Ru1AGVd7FRG3Jj5Wo2FgxXt2ot2BphdtSQDQDcasvhkMUCjNCBVa8Hrgc8Kk3poneRYuS8jkYZhkJUNY7KWMVty",
  "key16": "3eaha8ne8GiqJKhHqY6NkPHfJJZg6QYF6XHhZWQTpbq3cKENs62c25htust6kWer3qm7eUCd4h5F6CWkKZaHrWmS",
  "key17": "3iwtPAKNxKwErWDLdYoWunibT9R23aVNKiKNizWzwzCMQbjVMJD2Xot9N7pbnPBsQeZ1d6JBRe5EgLn6518jh8vd",
  "key18": "5zQRmg6HfbAciJGJd5Q9L9tSvr4j1WMnbpM439zbjarap7GvzNaD1arxGf8cW5Yy25YqwNmYjxsQxJQwys8195bV",
  "key19": "5ZrozGahMRwqWUkbYyWyNXHPqEYChkbDNhGvyreXHEojMpcf28btun9ACXHtu2bHDPJA5aiqgnmAHYKY6mSpesH",
  "key20": "4H5Kiu7cmfYENgEWtvf1PDX1RqC1Zac7CnZy8DxBawM7RmRiYRs7ciFQcNWZiGY59sgkBcFhDU3dMkRNqyxLs4Dr",
  "key21": "337qHF2iNULcdyJWHkefjvadEyuhWUWnR8HJruhwTmqpknHitjwNVZcFgV7ABFYcAVrPnPaNEihspyxrJKW1v27N",
  "key22": "5yBUtjfsEV21s9U5PV53HghbD4uw313Jh4JpJB7vaFfcMPJNc4XjSfqGyufEqMvn8s7p4fEQD5bx11thX6Eo7EDn",
  "key23": "tCsZCT5BCAUy7ZETaiCz34CYX3BcVKRPdFPjnFWE3eDRUwLBm1t3kUX4uJGWuJCAQcYHwfcQ2wHqsCB8U9A7mvV",
  "key24": "2qFY8zrwpf1gPYXv2ggUzxM6KEjKYTy6yKw9ckfrkVAQ5ibjnriLphXYLsEDBVZbkZ7XFENxqsQkHVJ3staQGnHJ",
  "key25": "459k9CXfWdzx9pAAyTj2dnkN3NnpLLoMxogiuTVN2TNFxdHysvZQ944f3oynzVYvtZzWv91ypiPxd2cbUFRaVsUj",
  "key26": "3nuoXeTgxUVvNAdsqCLNo1w94mR5VDoRpcxnR85YX3m67NZajCJRmfdbPDHuynRfwZM5L6dAzv1qL5or53CHYs4H",
  "key27": "47b8P19axLRSbvYQtKhEyrjoU8JGbiBHS9wJDYukCBp3gHrY1PwWrbKUXkrNstPw1TyiVzpHjdb3xfSQiXtk9CPL",
  "key28": "2Y37hvaEQG2FhnpAX5vZiRpsRoSnYFtAkBTdH2TFGhoSS8RC752ChnnNJpBgKN1dv4A2h9KQL5iXoeUjQwLZDagw",
  "key29": "26GqLDqQoHnobBJ3hB1eUfGda14KeAJgFhd9FnbBV5VmSUL5k8TBR4TDNz9SzZx41rDHhm3kPj2Xrrdj8AVL7MHq",
  "key30": "3HDbZXuxjbKEGWVgiWPsGZ6wDEnM7kDTBAzGKrFZDMNupQygPTs1bYwT6rMBJDc5AucPd8qCKbpTWiv4zy9gFF2d",
  "key31": "4uZFbBLheHLmhNeSatHte4ac1HncCua4H3RAWUhrjHaPNWTynbS2kD6khuXgY9Z2fUgf4jPbhE58ahJqre5WpqPK",
  "key32": "61KAghzTbT2VWaaaHt54KLRT3N3KkAjtug4tD9TBQFWYpGUeUM1kzcVXyorpTvZePi8ip5fESn443yyu8Lt9t5mA",
  "key33": "5td5xY6UHL36RFNRNPpaVamQx8FFHfnij7Zpu2EZ7WbCseznMCw7ebxsWKRjXC4Jj3PJ8fUvL6rGmiDR2QgtVyFi",
  "key34": "P26jxe6GozRR5CSxX7YjCy4WaMApo4oEMzEf9LxFAnChRAiXw217ERXbsda7tnArsFRdGQXn8q55ZjJ6DEaEp26"
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
