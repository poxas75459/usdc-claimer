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
    "3UhwDKVo2KJxh8Ywz1JWwSzYDMQCJoFoRLgssjqCWdKbMX4qeCsyDg2SaJDdFBkezae8v1oG48HNcULPjs3oR4eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54A4FE7FmDSpNcZ3N8A8YETwkvG975dXVCsk58cG79uLKeMTXfxKfTjH7P5MTBzQNABDZkGj9GxiQukodLhmMeLC",
  "key1": "3aQisdxYmesMbUDMFyy5Rsdv9EpufyVDY2UVmvfRhDxpXNe9d7pzkbfB1fNpFra2NR3GsjzHDoStdozyNxFtKk57",
  "key2": "2abDk26z99EWnkUYWqBzLjnWJY1ytLt9WW2FQ8TqUZeQxyG6pTAvY37oQEJJi9eLkuSk81oYXvpCAdAnJ7UWSbXf",
  "key3": "4BwHWLSJnc4LR6knE47tM27sR67j4ofpPmmjLx3gfbWZQUYjafXfp6yZCWjwrKgEA8C5naQB2PQhUsDPF65qZkzM",
  "key4": "58Cb3Awhf2od5avNeRMSUsF9uXcCDAaYM2HtNVqN7bY2JVGPGhiBRkZBU2JTnjXow8AbSy1s5ZDoaeHig3EqSRkV",
  "key5": "5ViWE9QBy1CTZJVQUB6XNNHvrrtv2bYSB4Dg9uKrwmRqmFEnqLxx5pk9PmHg4CHJ4f8kZ4hwP9kA2PVwS9UzfvvV",
  "key6": "3ZS3cqyjhLvk3SjK7cXWrnKAqS5grUjWysLRh3Sb7sqsjDBgnNqhp57XiFuCo2U8gCmLp3cXShXBqQMp2oHaULAR",
  "key7": "4E5vvwFEk3eA4qpCh2uzsdDTbXgPu5D991ziwsjzymnCwVwXLvTR9CkQppE12xyBKiHrfMvSJh4FDXi3cZ1rDt7z",
  "key8": "dmpvu9C2jCk7jrz3o73mXWkw61Xx5xgdDXBv4XTqSyrZtsiNE5QoWi3KRhtdp6rhTMga3DHykneEHmtU4SLsncm",
  "key9": "4WfRCRDFTVo9sSDJtR9uqqFvcCEGMjCZ5W7SWFxi7tUWvdV7zX9yFN25mPsE5BAKseh7M4XL3gJdgS1zAWg4PWNE",
  "key10": "5PEwgVGmmPPLBcpe88eqUfFTcPv2cV4yiQntN1tuJRXdcnP2YXNu24Y9pTJbmPb4bbEwSBBRcBAsQqYrTr1M6yAT",
  "key11": "5kVW729hGBQ8F7j9sNsVaGHVoLT8vkCoQDrzduCqqPmSFCQT7ZYnRkv6baXwPjKVQZxmLZ8hmjJY3HcygbhDWorm",
  "key12": "5VJyByfwZiG4k1GQZQUPMRw69eDhqSuYazCK6tHLJQg1sgLN9ztEEjUh6WrmyV1U2tHjHf7aspq9NjXFwnYCswSn",
  "key13": "VrsRjR2X27Ajk3MAmwaeYTg8g5RX8B6fnHzEUggU3V8eTRV4XrcB7egquXQZZWDTsVNukjnuUxae9RmyZRhGoWk",
  "key14": "49gYJ6jKitNkrm8uqDQbiJeVdbPmkwjbF7uUV5oYarWbDYuRJLTbFKe4PNuyTvnNbrXPRFT7FALLkLd3p9KUN6kW",
  "key15": "5w7THrjfCyoSwC9C4GfTZcMPKha361wBoVKfKyipKBy3wiFaPJWCCCLmZ65FS86w8WyDZcy2hUn9eW9gYjEfaRWm",
  "key16": "2DMag4D5GMer89Apg2vPxvU5huivqnVUcbNemHuUVJzGF3QkK2koGsH7PVL3iL7yYGYgmQswwvoW4FoyQFRBYZmo",
  "key17": "2JNQDUmQEgAFNPePMCf1KPRapaExn76g9YKq9qVk7BCxvv7HvL6CRxfkqUbLyrEc6kyA6KJeHNgnTFVWGJxK37R",
  "key18": "4jVfpubTBvTJUqd6gdY321znnDQKrepYwFCV7kC1GmQqL6VBkttqVPzPJQu9XgWt7SfxqC7VGVqMBCK8U4M7gGwv",
  "key19": "58Rbh7SVLMwCE9RdS8XBf6mtMDVNXamgsm6mLr8b6fE5L65dUJg2cJBtNBUP6zRQgcP9X6xwgoLcZi54M34NaSjJ",
  "key20": "3HDsav9ysNpapZvGnt48dA2SEytY2CTmwqMTSimKp8NVK4KTd6MTbDQBBtbfGhj5Zh2faZdeMXaacLVf7VVP39jw",
  "key21": "2hjj9EJhP2bfY7FU9JbyaNJSpRiFLhFcAimUN8aURVNLXyefMDUMjEWimG11VW8ySkPeYQ36JVDi89soKjSqtcG1",
  "key22": "4rTTWdRAHtFiDXZ7doZY3UNn3qvn6zV2ZYSTyd5Wrsj6FNsMeRgRk62CtTeU6vFS2VtWruZbvQV7FLpt8t4gPGFr",
  "key23": "5R5pKbjvMGpzS1TAqXBMDUynyzThejbbo8yCYE1joTenJgPDNqgQ4WFuyJSUPBn63v7PGaMo6S3VWN4tQX4rkoFS",
  "key24": "2FjDhpSSTbAbQsZTkPWfhF7EmrScGaTouhfg9RghbGCHVh7Q59k4LjmmcQEAAB16s45N1sYXTKPGzrfrnay1pCWJ",
  "key25": "1281tYVLJ6oKWLQACeWaePc2XYa7FTG3jGrnobvnyvkX2UdLdARdqRY8mBnq6SSNKx8Ty7SdDqbvBNtZQoNMihe8",
  "key26": "5fULso3TZd5UVpfauthWLkaoQJnrzypRWUo8Se85BnWDS5GpDsosdGe9iXi7DVKeNw8wTdjsQQQbCQXXoatSX6Rr"
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
