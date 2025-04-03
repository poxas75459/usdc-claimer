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
    "8oFMCPX2vdPBLNKokm8pYEY7t7HZnncsJpUJKJMxPeTm9wgUyzLN6jxeWx6WmoTC5czLGdgx4baQ7wnmC4JnMi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkEkkfBobiiURtqteYB2hTsXLJo3c3FotitxMXkjX2bCuw92CuemaKgw3vvwY8YQuDCpN9rdftZj7CkDMBGrbKG",
  "key1": "4NE7aUEK3Ddv5Z2mgEtZTafgcGFx4HBVGuyBKui1qGhYa8JQnohkjzq74evEGjibkiGUaTNR1tLQ8KjC7663Q3Sq",
  "key2": "4vuoox9toaB2c3D3pSQczUugAh3cMpFEFK4Mo5jh6zUULHADwuFLXCRUqSiyasGKok54UrT8LRhw8jxWHZVszrx1",
  "key3": "3EVfZGfk62Pr9g6w1S9EksfkRLb1JkEWeHRjeWMLbFC8JVM8o2tcLTQzukrSJ9nhZLoiaTU7n1GfzcM7wCrXbycb",
  "key4": "4KRGoriL3ZxDKQpctCUjLKB4SBkNsEK8NcR91qDa6rNAX23fSwChvNen6rDaZaiiAQbJyX3qy8Ptyg2ChRnWWKX4",
  "key5": "5W3UPnd4X5Q88yee4sfu9F8YVjFhzwCke5QgJtY8doAVQzEJd7uDL4xDwjmA6mbgMosrhLefEWwHz59QagBMB4t9",
  "key6": "2bbYNyXztX5zh6HaZmZ8fZUjeGjemErE6794Y8pL2AQ7mmzuJXm4LzDiqSV2coFZHbd7cKx4cKVYgiccGxEHPraw",
  "key7": "AkBrUcGk8x4FDBGrrTWgj9UNExzkRiLyr6ZmVjgKGCwHSfEM7mgJ7Xu8MNFXNwxWnRLMiVWovC3wsQDq9j7tGTu",
  "key8": "2VGXYimw4k346T8LicHM1gDqXhn7Pq39yDctwGtrx7HaWMfhT9gbwnL7GKSuzEqJTQp7oyerxmcq8Xf8UZkvbQUD",
  "key9": "6412bv8cHe4ySYZTZ1uR7h6SPKt27xmkVpeme9EKg1sYqGb4DVyJyaTdHLACkmnyQZccZj3XKsS1zLNi1ceVRDDY",
  "key10": "2gjxfdTJgfHC7FjPWLHG83Ueg12i4GwnNg9C4Gi8xFyBXG1MRX2ciugWLbqydYDA8nMY6umfG7b4GTb7ptWf2RWr",
  "key11": "4HPhcCvTnsM6HCrP7ak6RDE4V8K76MMpkHqUxBHNS4vkqSmgYVBwR4VAB1AytHRzPZCgSq24yLG5FWosdYBvNjqD",
  "key12": "3iEHhZBq9wKbdFjzMy52urRNM1ydd3uxWJXqWwbXSzutSUV3fxyifpjEAcnyP5Ui2A7aYzX1zWBsrSEcZbGiYFpr",
  "key13": "Ly5KwdsiSS9Xe9LJFKNeLiMc9BiDaqMrreTsEV3J4R44egSzukmGSdrJHN28LMybEhKQhprd8L8mqv7MxxwgsKZ",
  "key14": "5k8GnJH5EEpsCUtAqxrS4mgVrPsA85HGmczJPBeZDFhKv9No6meM1cAe6n113z2AVGxYjPPwRnxwNnxZHCz54uTs",
  "key15": "3KUUStCHANLnDxro9y6MSwbR5dneKtH8oZJqN7AdHvB4T6E2M5USgq2ZDPJnMnUKLduNKL1uqrD5iKmQZYxfYPSx",
  "key16": "3e2obGVH3pLFq6jsYRZkF6jgaYuF1HEVxQgMRhKNAy7fprqt9me4rXwZW8KJa9frPbE9AVcxgL9W8Ev1T12zC9ZZ",
  "key17": "4zB4nZNmQEWbcNqnscou6o9HyDsVdsSXCEpwaeJe4RRWJwhUBY9te51sCmwsgFv4Um7Kwbo3VpheDLngtsvjafqf",
  "key18": "QuJjgr9cpcA2yVUZGQGUSR21GaCBXvveopEn71MVFvhq4ud2ZoZEZzFJfSQnQqznKaa2FhMiZ3KafbDYJABaguZ",
  "key19": "2GKCobdP1CKsgzDQbx6Z7xJWXUdRmKU9sYMtWagaTFRWAYwmsdA5nRoy4qRTRUtQtBuRzBVmcyHeiyYvJjsU4T4j",
  "key20": "2PxVFEPuwUSdg4RMo1C5385BdnseonZ7FE6WJ4AM9qKgmhehtYwcGE5nWc6FEWDPDYGE3Ko4m6Ecajah3XV9r8cd",
  "key21": "5svQPUoVrtM1beTuHxfUvcjy7UjjhLtoYZi83yWWHhKAYksjzLKQpaPL6hkrYW6ProLmsU9Vtw3F5xe7Q54V8ZrA",
  "key22": "2uAhSD6MWNJ5zjUYJiJor9uBJiEbcKecCeqQgh1AXgEDKmghT822fpxYzr1iqjsZnvdXmYBEWrFT2Bb8ZQnnwaGZ",
  "key23": "24QJyfJKyQtcnJ77etSLTzs1Zz6KdCQ3Dpe9rjVdy4HohMgHq8C2jZhcRSu9HkAESeg7zcQ3w1Z8nggN6JZGdXuW",
  "key24": "4ZZFWRFKetJLyN4nQjNSeGZtBW6wiBF3oo6WpjFtNNMDcCZjN2RHKoqNdxzM5o2pQWkFysxMz4bt5gAFPWN1q8Vg",
  "key25": "i6KjqP9uqSFPLhZZ5ddiFKeWL5K22tztWPzeTQUdpvxpmnqxPieTY6KfhZjedxYxkiUtDuikSMNC8Bu1E1sNgeN",
  "key26": "cMBJdQpxftoDHgzbLEvdAuzTLEYQLsdNMn1nGpcXZgmhnbU9Uv8bDU725kGcP9sCoUucufaJAYimZ8Mcic7BLKi",
  "key27": "5UwFb1aqS1jaSmrPAEFmeULHikuuhWnSKYcUEjecNKEMV7s8tnqaMBt7SARUsu2MRgSDaLdpSi5d1pZJAve8FMih",
  "key28": "5jj3hD3dARDJa4ND1XTubkYmtzTcqLBcjtMAzvyek2AuTgk9bacGqY3JKK7n6VFbpNy6QQfqWdYRcER5iFBYFwbr",
  "key29": "4xnsqnrF2ZVtnH3QbCeD9aDDfoZwntv9jdmkYxbSJpZYAgRGNkcBMmac1bcvhAXyTQ4WebdPvtcsy49MnEcjiETY",
  "key30": "4eBGvBkpM3pZPifV11VbW8Cuygb5ZWguLmUsczNVarHijiGppm2tcauDaiNktXF78SJsP5c8txLsg2H9H2aByLFF",
  "key31": "i9Fr29x1aLsNBzjxn2UbCbP6dWiBJYWWUXpBspQPmmQc6jLFstK9Who17Za5SP8eHZFZVGviVyxvb5r2uD8jyFS",
  "key32": "3T2bzTUbNjPdunoSo8VB3wiMpYjrXhDVReJ4xB9NvRvWziCs62EKVFXdWe6HN9XVFtKZxxqFi4E4TeTTj6MgTKP",
  "key33": "2wWsbrVHM7JJqrTS7mCYhvM31QWQmWzrvyZEZfZgMzsD3FoswYzdMx9Kvirevhyq1t1X6z59kdYFhwP8nzw5yuyu",
  "key34": "5WUbx7JxqxRMgjJKMhbykWsdqK8LPXkFZparJpNpou35zBDTsPusMhNHwHNv5DeRDSMjnrLxSWqjTAeMSxwUBvF5",
  "key35": "62EvDnbWg21rRcNkr2xdzEj8nb1rdC9Xci3RJqs3MyVUbqBf27dNqpWNj4pP3HNGQWs9qzs8Msdsb9BbPxUw5g6Z",
  "key36": "2fBPP1oUkig7DTAXYEvr5WBrE2okr7gWVgSYuc3MHcdMY9eVDMKDLWR6HwNV3z9d6H2Y5cN7PRHs6hAPuVf9ebyb",
  "key37": "3ZDP5uFUjvtDkhyayLLc5L1HUoLB8FuMafwuyoZEUQF2K2FhyMzFueAHdSvqHSpQt2PrJNeZcPQqu8y9gxyZhgBC"
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
