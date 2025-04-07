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
    "4WfeN91KF6KyjpXMQmRHdxrconHURHVSbUS5gXFEB2aVQxZdZUcC8cAW1beC7pVZx1WFkrNLK4RSAu41P4nuoJ6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejVX22Gwwx1K8ju3vofcJ74s9m8PoHBdU328ttiWckfsFJhcBCoEsLVyfwDzMTkR5HmCuJK8hCVDW7Zc8tASYs6",
  "key1": "4qCQixacMyztZXc8HPXmYGWCny6c4XHu5c144WHZvCJ5vAsDaSWc4TBQCmUUJYbGip2AVnLy8idx9DRjzXbZLDjR",
  "key2": "3sZqS9zfaky4we5ZHL18RCBTbhC96cze4Vvf9nD1nNwsYZiotw9CenquFgBme8tTJGjxvfwEYGSf3LSRjaTo2kq7",
  "key3": "2q5eBoSsuFt5ayvTeDhZi1JnE4iSNRPqNDGPQoDCCTKfM1T9tFPCJr24XyfNuC9f5fHnyftJeYRZqYeYQWTvXHSU",
  "key4": "4JboPc5PeqY1gt5XmS7DX2cXYvh5FbcJCDGD97J5x6xxYAMUCsu78K5Z16hDcKLZzz3NwyJW9ANnbCgwYXpMTkaH",
  "key5": "5qeViDX68UTywKwn6uLTZsozZRZ2ui1d2F6u6Nz5kbrXE8vVeFUVnzXR5Egthn48fcVNroJ3kb39JdUBFbsJHKTq",
  "key6": "4WXRiETbcr7WjdWRD5zg3ZjAu4YVxEEUSdyLqq8dXWciikNHwBFDfuvuKg4nbW2WJskW1UfZ8nhG8V9gaCYArym6",
  "key7": "5oZScorQPLPYmAEMfyQPE9dR2dH8YfMY5hywTwnjrmbx5hntMBLRFwj3u2FkNgMqummmbiKtp4GH6jFN824TgMj9",
  "key8": "4CAWbhrcMpvax5Feuy5v9Cx7nDTZeAhvbuXV7RmwXfpEJ7jX38cEBkct68TWSCPhvnPfwr1dYBsuK2zoU4PphJR8",
  "key9": "5RcFGdV472Ae9Zzu7zgaDbiMc6EeTSo3ZUKqegUwZk1TDY6eCBVNwpg6dWUpu14jJ7Vz7BFivNKfCUAsnFupN1i4",
  "key10": "2Bj6rFxZWebhCDpvCbuSHCdqkf5gJgPMKkN5YjnDxyRUMpsNEiSvAmjX56oSzn8Am6Aw4ePmjnusJepGNSEiHjzm",
  "key11": "5BQ4cgbxniZg7WXFGqLQTt8KUzokVBqyFJcADMSbVXMt256HCCNoKk1LKoBUTdwYGTJdcfGisx2suwpSca9j9PtV",
  "key12": "45XR9dCUzAHZZ4yHhu22kKwp8Q9gSgb1iWXKQdhpP7pp9Hbf1uhYko33CUhvNGTgbZBoDAw2FvjTTYDxqmw9CFZB",
  "key13": "4tSoyKhV2sPVwWrqo5T5AGNQmAGogJG8Mx9nbSHdT4XQ64MSv4CU8W6mh1tMtM8SwUYKmGMD4LHwSghK7ooY2dP3",
  "key14": "3JtAnQscv782PJAkdtnRDv2Vo5Mq1XTkQHah7kP1WAUJK9nmn6bcQ9tWL3BT6mpWgraCcaSG2WNZrF32hbqoYSQQ",
  "key15": "64bWzGycTywv5244YWti2yZY9dgz28GU4WPvSfWFkxSCQHB7Lv9MXr6pczD9x53GbPXTfJEPKbveG7q7ouaf6DpG",
  "key16": "3Lo3j68RCf9ksj7SHeu1cMwipvHaW6UL45wTvwgdi81S95MK7hwHbyWPNth56TX5YhyS5NFtgKo9NTxXJurUBmff",
  "key17": "5wnBDppLjt3gHq54uArvEcAHfrmpAPGjDj5cM4rS28fuXgzjbb1JhQE35czDRSUsf2QHnYWoBAu9Xk2Sscb5iSmk",
  "key18": "2Yh3ezFp31cR86THvbooUphnsMCAzH9Z18MBeA19aWs7rwtNmLAR2aePvRm5qQi1CdUkHwGqS93NjP1QBuXdv1nD",
  "key19": "nNhQrTVHeipCzEQekQ1adv76iyUkDir1dLJTTYxW2jMMNvZ4RjkJKqCFNtAdZfbQcYUTnvCyj6ohDqQmUKjcRLS",
  "key20": "5arUaFuXGvhpgWNS5AeNKtY6hM35NBMBprUzYbNFrw5g42pwWML4B971ZgVoQLsCPq2QHLqpKB29gvjYxRPWQ3PK",
  "key21": "2gL7q2VCSLkPzDcW6snn2bQ3KAGWNEfwGW8F4Vfp5c42RJ8gWm9ugxrLY9P5BiyLyRpJ7y8zBEVzbkGLofc8M82n",
  "key22": "3iXG9zU8xww1HaMxqbgifShjSdc57eG6JBZKPVxw6TnWHMwRM37yEM4FVcfvmQTXKGpjt6DmBdTTEDMafWyU6myo",
  "key23": "4uGcDuuQJvKRjr4gsL2oYMBsYePMKhtNPimJJoC8CqGh463J2ouXFa6YFwJDxqcRRVbANjRY6ZRt8boHM1i5spm6",
  "key24": "2uTmzEaTQmhgKGqUkqoLyb5pM7bpyEkEjxkubvuCx2VGkJVhF7faxFq4QNSwMQG8c6iFqiwXrvCRxmqPH6uGxnXY",
  "key25": "2p5qHyEcYmvAHahDuFJ6qtFNGoMw8LBkJ29rjhXCi2z9JpCtYCTGrbW4ue73eFwre7EGNBBCTd1Jj3TdBSPc9zje",
  "key26": "2UypLFW7t7TsGjEGZg2FovfYnbMfZuR1cvD4WYKDVNAsAjmTZx66sMBgQh7CLTwXUxVLoyBhCvCGeTHKu4az8ZQt",
  "key27": "35vhFHBnD91GwH1Sp75JrNHJFGjBEvMzDsSimzQahWeBXLEiUdVak2sPeScbTc3SoEEfJnQbNwTRFHiULksre5GS",
  "key28": "BfmL9z2HGAJT93urQV59hmoS6NMbFAe6nFS7e5oQ8t6UJV8CBjjAQZHhBA44pZwKfkgDwqscahw8oaAd5E5HkpF",
  "key29": "67LVsFRaYyDWz41v336dTYDq4i72XxU9quPvxYGHa4bMscuudGYWzVsrjAvrUru83HGf8oeQrrxpRv7m1vYD4RCc",
  "key30": "rZXd3NcX3CKh3rzcHrghEaxfz5njwpggidkysL5MjdvGDE6zWy2AUEAYPtcjsB4vSfs1t8GToK1r8wgUYpJZTU3",
  "key31": "3jsTnta76oubt8ysNuNia8Cqz3QuyvbQhrhmczXkeLTFWCQr5RqNAQ5iPuYFiyPzEm6NoiCLdcKofu7tdmxoFrU3",
  "key32": "3Qzh3EU3wpTbSf3g2QvofjDwNyheuZeXTzr2brM7eN3Q6fk8cWvunEQkKctnrqSTs7XJTcWKSwrGWTUyF35qw8bL",
  "key33": "5ViZdoGt2gK42Qia3MsJy8Cqq1CoWuHHGYSzjf7P8tAKfhhCEYdYXsu8zA4yxuqd6jLucbVvcHxuYucXMyc2XbNA",
  "key34": "37RLSREu8292QCjDy8qpRnoCftRCDJj8Dd3CanGMdggJFw6XqLJCdf516xm1hNnd2Xe2LkitTHGJ9KV7jUFfHP26",
  "key35": "3EppzUQd4xKtC9mKgszjZDBY1EBXMdj2yNLuygam1aihcUeCHiGRtuf8ddQ4N81tabmExE9tTCrMYojFsrHiKVKw"
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
