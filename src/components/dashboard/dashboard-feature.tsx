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
    "3njiSdw2NEdXzaLznenNnxYf2cu82W2bpqXqqSQSgB9hqRVobhapNZcHH3s7rdghWSEm9SC1LRFbLVnf7ukoKgos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpH4JARyvQyh4XAy4dtm1q7zUDfF9dUBSo9ET7mpeEDuenhV4df7PZyWaiZFKSNJLshKpX5v2AxMZDjahSaEbQ4",
  "key1": "2qw3VGzW3My95KBp2s4bTdajTFgHFy5kGj266WhdXvvShRSiBw2hh6vPwhiYZXr8yiekGtrzvgchrNhb3KSYpym6",
  "key2": "5oYvjzs6mUhbLbxMiAmxccYGEicj1GKju3XLuEkaVeiGvJ5sRRniUNve2DKJTMcWRthvAM7nQfD9mmzjqcZrBzWs",
  "key3": "466ohyTrYKtU8abdJ1iQ4NYxBMRLY6AyLjffJxnMYG1QEMck8THSWk1YZ4xRN7Rr5BZMhzbnocc96DSm1HcFHJ7D",
  "key4": "42Sk1shmvfmvfeZASXAPXZGyUafWmgAumjSAshuu8X61Xe7UWfJQaDdnRK1VsvW1znKQb4ar7W5oLDmx9TBBwmAG",
  "key5": "4xP3ZVrQuGqkCAx6R3whAXEw85MvayPR2pqsJJcBBEJUkVfHzNRJw5VJXKHW1G93RgBtWVU1Mt2GkvexctBjEF1N",
  "key6": "TLDbF7EEQ8bxJJKXC9FWjXmNhwLwFSJeLSMhd3onSWjiSE3xLSsVPbaQwYkNUJxXWpjUUnwUsxmnxjhoh1PLzW9",
  "key7": "3BLbmiXXHNnWkiR4bY4sF9HqWkvaig6f18qiuZN87zQWG9wtWtm7mieEuBqLqHELkKDGzC9vJLY7jgZr2p1MQHkW",
  "key8": "3xXX8D87V6mNsAFm1yrh4HGxSKJLe9hdvqW5reHH3Utmnb1ehjndAoQr88vs6dCM2LScphotzzc8WCBHqokAJmf9",
  "key9": "3bKhaGvsFLD3q1Ew41KZBLJ6SH4U2mBQYmUAjVRGF4L9RyYXDW2NfHSbZgPsJaeyrP6FjKdXMK4BQFxAYN3MuKsN",
  "key10": "4rM8Wg42thgvxZJrR7aUw4oLLZKMyqKeR4dDXUmUyL5p1tf1TNCFwfUY3XohUQGo6mTh7HnR5U9PEFuPaMJ8x1A4",
  "key11": "33QsbB4rFZBC8hb1FdMyVrNEdB2aFm42WPXFoh8Ef7htXJLjSu2qhXwwJqgugMBHKXt2ovX6WnDGBpJoM8bmzzDg",
  "key12": "H8vD8tH6vMhHsVrtyidkjrF7ZC5W25MBAwFegCcmhczdoyoBC9X8YxVjTQYJVVUaa2GZDNaMNCjgbpme4b6yrzS",
  "key13": "2hZqLhhdNVxnkbU1jEXp5hJr2rfWdYodgDieGed1QDbsiWfvvM6U7LmNG397rSMYfQ1pHrWnaMYHNxp2nXcPVshD",
  "key14": "3AXrDaJDrBamwYnunpPSp75dWFrzzT4Uriewjf7cvDD8Q3vEQTyeAoYjuYgGX68EmFZ3fDZwdcZqhkow2JFyR2YY",
  "key15": "5Rgkj1NnSd9EK5ydNnY7WySqBk2fm5DiaMAsmxVikNTGjwyqf6vN1S6w8PzmH2JhbHtBdkzWDvvzJjnAR6Qo873p",
  "key16": "2AMTsz78JZHMyuCVqpECFEm5xh5b5AsMPychiYH8NngDdHp5EsxCSpA3stdus2WymBvRJxt7tZ1792ojKBAPVfPZ",
  "key17": "eoeb8Zv3cMcf7oWfPx7XNffYwz527zftpquEKF1AXd7QL2mn5xt2afjUCSVRrq5SfoHAwG9DkmEs8dqG8AJmsgK",
  "key18": "2JYDkZt3cSv8TpDhzYDrKxLJ2EHrcGKffivMAm6Jf7b34q3dMSRa4PRYeuxftib9uayR5XNCxtTjJGLQ7thZu5Dw",
  "key19": "yBG4BgggdwKifbTPxBinNe1M9aMcvUea54vL5Eedp2b1AaowVmciH9kqXHTy6tz6Kaeo36deQbho2WBmbDfX4ck",
  "key20": "5VjkMF75vnFE9XWpDjAP61NRkNauivMTxri4w4jMtwtHPCqL1yMwQGLcXvXPUJJZ6DBNm9PcEY98767FUSveRv5y",
  "key21": "5DseFAqDuUGoz6q8AaFt7ViWM3g7x6PxtD9nQ7EjBohWMPhuWWNp3hwkM2XWP8KiTa4znxyFQkJVnwCQ3Rup2KKK",
  "key22": "qZcF3Rghr4fjcXC32viXqonkEeTfwY6g3xknpRvxUuecjttLrD3dBjAd7APKh3MBHDT3DTG7wxZexJwEGtN7dxy",
  "key23": "3nAdfNRj2cKeQTc4WzTdHSHW6jJEKsT79Hunzx8B1nAoCV5q1wNBsf3iNXDP1TY2ELoMx34R57xRGVqp1pMGhLmq",
  "key24": "2ubWjCMzr49fpBF5m1npKPk2xZiKsqrjUfb2oJnSwwhVAEioQ4TwuyFxuBpJQfe8h5cYY3Qs3g2Lpm2UKfdCEkNt",
  "key25": "3J32BnZqFbDxaHo5c5J9vbzaKAPzwwqqaXn44wbaeW9TbEgw6GX6Hp7QoFqJzXb8fdw4VEJVyfFYtijcKgRASonx",
  "key26": "494aJe2P13nSMiJtuqQwZ2tEFPBSE7NaxeWUPActWrmfpuAzzRXmLYRAMLFk8LUWpYmDGYCpuTP2svvDjFCtWmGS",
  "key27": "34ui6AwZaaGK6qkcNPmkusgM6Mk87utSRauhAzJjETDNbxTi3FVZAHwqJKnmUBXwQm4LGixmd9y7YzbY45BDTeaD",
  "key28": "29P8oJGteLrDqhFDitLwgduaPV2ovjut6KwmT2jwETw83MEWS6PuPVHUi4wUKBfG6KkRpEn3SdMSnHzbca3VqdKS"
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
