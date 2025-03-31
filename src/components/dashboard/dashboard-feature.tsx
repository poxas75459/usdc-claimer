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
    "3XMrfj7NjoUw9JDrWciutmj65dbnrDfiP6h8h4YCWEJKQZa2QnVVgdB8tNr4JXb6tHoCfC6MP4n7Zf6W9DciGxF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37gMpnE2Znm2bbmW2TU3yptQnoMzZJcfguaLJcYecJecSVxVQ2kp88zyqGZ9XCrx6VRcWNHFHLHfpZM3ikwHN3VP",
  "key1": "evKkbZYtZ8jD5hQTjUAc3vvqzasrYdiTDTtoq4TRXuwXw3U6pRu9yUBLY3Tg37Yutam7UzFcrewTPjpmfxcFPui",
  "key2": "28g1eK9EwFVyhNiCNUZi5o8hySdzUqujYVS9D8TmkgXCRWdJ6boJfAhDpdTLA3PcfKju8qSJNKkL2eqMbo5RJEZr",
  "key3": "4trvduyBoGyRdieCLqYkG5ZLHmRtJEjuhxxVfS2oSSG3JLAvBGcVGoFkWpX7nspCspXnYhPjxkBGp5jSypUAbzu7",
  "key4": "2YJQTsn2gxNqTfmLfJ9bGenk8jehc1LyveYi4SnjEy1kViwcWuA1kEYKbvizMv1SniKYhNLni1uMVtJE6ZQtg56D",
  "key5": "4BZncmumYFKBhYnNXfADfSYSiENnW5gNk4BrHBRwHkndz4aZK98jGCgLL5i4gF1rYz2r3wMYKJW2sVcLUZTHJG3J",
  "key6": "46MeswYMSgXQVvhsQT9T2J716sYDyzMsYCqeqYBPqttzNn2oUFSwRa2dyiX5fjQmXpJwWcCi9tUpNo1uZVLA7hQa",
  "key7": "5uCz6Wi8sPExwrNsBSjL6LaHHVgAMANjzE11PgUBeKv4gQSSusoZ8S5efwLtY6c24f4forGzEPaAMUwjWrwwKzP1",
  "key8": "5mQ8548ovUtgfUt2tgVs4UKw5nzwPFAwLEMMJGc3iZ8CmE1VnWw9J322Q6f7MCB1VcXNwzxHLdL95WGXxp3MNjb3",
  "key9": "2nNGsLgyX7rAqpeeMw5UW9pYCzYbHbvM1uGb3SH8A5smSMcvA5o2dTWsPL2zHGgdRoo9GHRaSviKqYMFUyV8Hjpy",
  "key10": "34SQWWbF1u6ThcCoqx7FxxPJHYyTpi59NdUNs4EBdSyopGSqZ9yHVPiAqq8rdNWcoApg4nXnSfA85qeau1V2UJrq",
  "key11": "24ardLVxcTtyRQk1CmvordFzxwhvnUw6HzBtGDQ5jpoEYAmjeZ56SpgDPPyG7b5C4sHjkSKrbLiSMwDac2RxcJE6",
  "key12": "3DByUAo1EiZWC1sHpEUWTr7cxeLyAGDWRKPXXi8vfxW1f2VMbcpnKhDVf1Uw6nVs9i9W8jXfLnJSR6GBT55cW15C",
  "key13": "2V6NWtBzics3ZyDL1ZaJsytHZsLoTtgfvWTg1B3z64UVVNFAm9TLzLtsgPPG55j1gh3uuWMpZrDjp8J9NseKVKsh",
  "key14": "2wkh1bhEPeTPx8fNmZfzyJ7UzpUdH8jADwPurK7ZhQNDQzCKhiwKrdj6xm2J4BGn6B2zeQdqjWiPT75Xb2jsTKki",
  "key15": "4CrSnyfFscuAP4ZEfUtSNUoAWnesR5zaWrabzd3A6szuPfm1343YDQAJ51qruxKh6wbC2ZiN7kUD5DM6gbfAMKGf",
  "key16": "aFPKS8azyiA9QLazN5poQLTqoxEvw73gQNkyEKPwxgsH9EKAsK8SQzq9aRPZxrAKod6uymTM2vHJRcLWRDaRDFt",
  "key17": "34x38husRipn3TDQMApQSx9MJ1W7xm1jfHKZE7ZFhZnWwCRFDzgUCiY2WXisYp48AKbm6CcLmqZHNgnXbVjuQWfA",
  "key18": "4FjayR8iDmSsBNixpyKDvQra1fGQLY3bwm1kzUNv8PJm3M4nrcfKPLMdoG3wdoAYxfwXGpL1obL9WcZBo1UaWBJ5",
  "key19": "4XsW2SR7gfhRodKeEiqBKBMnMcSzjzys2w5MxSXcmggTpXteAYWNZrY2qMCfSJ3Jhu572CH6VfqULEa3o8mAR5je",
  "key20": "obQQMdEhZqzqytoy6TSgFnWaFDTjcnM9aa151oCLEiNzuFX2qeWDSKkdUYvVRqcuhUpu6twmK3UNKKqL2yXijiJ",
  "key21": "6aX8woucSrkg5N6nx7aU5Yu1op1mY3KLXkVvUNhCNyaPQJnXgBmxR1Ut6gDAj24e8NNdZ2rqrwdBhqs7mAzCy25",
  "key22": "3YdRFuEyJgMMx1PtCpfhgugH1DMiG1re3TmFFQjca1r8r9oSL8uKo499eWSxUqKZf5gQkzpu9dJc1oWRGhkAJnYx",
  "key23": "4tAudk4kDHPnPBZqgdJaSvWsTfy4nyqheNhyxL4pyMTDauqqWobeLxHEXcMDD8KWBFBT8MY2iugdPR1mVNCp1iZv",
  "key24": "3tkBNbPYQcaGfuVQqbvwwUiE3ZaiJ2KpKsvad63hK2rj7eNhhabwGi9635xwvPttrZAsLPTz3vwxaXGeP3mryBeh",
  "key25": "5FTFSGHdnZ9eqdkifaYNVDuKpVXYSZsKa21p5kxU99HnGPv4KZi9AdWAYbBJzUNP5V5VdAvqvdPLNNRNbqXd7VQ8",
  "key26": "4YrjEGX5mcbHvxgAAHWxw3DDVDCVztt9RRt3JFEWqEWAiFarxyDWHvKaozi45JVwHTrTtvdrrEWiQB7H9ZUdc9LN"
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
