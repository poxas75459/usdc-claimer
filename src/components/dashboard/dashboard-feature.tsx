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
    "eYrxpB7hecjvAy86jiY6UADcZq2PuFNRCMZhsKqQTJQRDmdEMjtHH1c3TMxqKjfkVjfwxR7ZP1DR5NRkhFpgSaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJp5m21rS9fW1MmvK97wS5oogNqvD9viV2Xd8uTmGKFSZu7HVJJpYaZAcQmRmZW2RM7hcHDAEpHAhsX8PVMsWbC",
  "key1": "2b7dejxeUf9QkNjZ7xKWmQNbo4h4fVJUJPgP8ebKcHTcgrxVbwFrKZiLoPxZGSTAV8sN4afjvM8aw3bvxqFmTh51",
  "key2": "5jbPgdXzyw3gNkFhjtNPPJhHWCANxiR21aqCcHQiDcfUZz1A8qfaD3JA1ZYWG7WecbJwyD3bctaQDdTEk8m7FNs8",
  "key3": "4WNU9uqLK93PMhZT4B5HVM2DTUThCRqcGmFxHw7jB4nEU6DQ5zLvPAiHGFr5ShAGMGM8ivVdwDGAusDmppFWAat7",
  "key4": "3hvhiWHdgTwypV6AFgaFZCmpi5GiC4XY8B9MjfELVCxJ1MUYKrVL9a4f2nVrYzo5tRncMGKbg9iSCtqEZHsDwTeP",
  "key5": "4WmBhEDPbBM75Je3zYzj7v8fMtQFcG1UfDBzgxLbpwizF8FtHzcrT3aiizCbXMbA8e5mSjgZLLw8dYZTdifAuBRp",
  "key6": "3cryfWtUSjvjGfzjCNr7UvKRaHJStjeLnMBQevGbgH1UbimFugRK61djSZr557Bx5JEUyCDAXbVtFuK8rZLSF3HA",
  "key7": "5XLpUvjoGSsTw56w3UDW5xFGjar3FpEvdQ3SkhMxCd4sQq3DaFoGxHKhuHcMkQFtp6LZ76xyT1RoxEHGhdQDCkeu",
  "key8": "66cbU7zycYb4UG86XcQkMFDpU8HivNSV3N5qCdEqeCr7Nte2AzjqfBUQYbushP89ktSHvVDAdc1sWaUrCUx6dtRX",
  "key9": "FGU7dMnYbd6bGi3y33EupE7CxDnmz8ZbbCQE8jDK7gDCF4WGije3fof6B6vUiAdyGFFFRZ6xtkheU51nTdmTWCc",
  "key10": "62kBQnjyzwT48VJZsn8P2crHM6Ng7FkG5usDkCHS8tsppTdNdn7ja7ED56y6eXvcdZdsnyjKb7Y3ECWNsiyyfaSY",
  "key11": "YP16MrCfUZqZAEbNBiJFZ6JUX6BKLu6dnM4q88VXNpCv29AK1FbwvaXf5D2boNXZgWMtCaesgWo4TojphAmiL3u",
  "key12": "3JoQf2aSRtqifx69xwjtqgLZSgfHc3UDSZA8Gxa2JFtng8XfQR1n65jcxxJbcKz91V6bDcFWafJXPfZRjXyTyzdj",
  "key13": "5HBQ8JKDtMCNTXqLSBG9eBagjUskf4Ry4MQUeZNr2kgqRZwatyVDFmLfQHgoxT9gvNRbg6BAxn3LnZLhUMJJFS9T",
  "key14": "5Zs2QzAHN9mUqTnqWe7B4jpBtt3CYgyuak8A7zdkyMwRQddXDktZD89MQ2WL5cjWeytztqsSL8XjqfTq8HwdntPp",
  "key15": "37cT1Zq7AmDKxw2mPgTR8z5pUVoXMjvi8EbMhpVLwao2F9Rbev3Bovp7W9u4jRvAtdKT2F1V3qiqFDJgrYMvFkP3",
  "key16": "4uQvHbMho7iPZTbuX1T3h9CkZHiu3jttDUvNse3ssGBRroroe7BCx6kc4cYEH1z7Y2XFG3Mhmy8use1J2FecM77D",
  "key17": "41oqMoysGyCGZgzGLzsKLfFmXx3bRykFFzJyB8kX2XiB62rbn8SmqvYepTxAZpm8bjVACbqCYVunJVcBFya4mEiU",
  "key18": "xPiENPK4Yhw6RdzqhAPC9mGYgavUV6GnGjPjrhDyDBRX2fYt8mBbJkH3QfPq4naLzewtC6RMCnyxrhpHSxXao7V",
  "key19": "ehcXpNSeANHjXGZBzPNXGQUEkjRUcFjpr6mvVD3rspywDrwCj6h74CV9yuZKsMHY9f6VouujvAjssnkP5xhKK6T",
  "key20": "4VS2NaxdiwwFvbxVyw1R7RfiMwar7szRjuSBq8eK5hz2u8x3M2oq3xgrMFrnqQakWNi3hsv5nTBQFE75gU1uVgW9",
  "key21": "skxoNyLMGCCtsDD7EMhEFm3tVsajQ6gtwjjw2mMSk7dK5AokjwhGyhD9kJp9zrTgTWcvUCzG6a47EMGBKLX2JcH",
  "key22": "47xjEfnsYc5NaMGeDgq52CmeFy9BtSTNZnBGzEdYonsokduCtuYw5EgQnyTzv6b1VxJjriC1ENG21skGNJNPMzPV",
  "key23": "53xsHFADe1yraUNHPLVYJ5Asrpba4fJPuqeyMpJVAqSsLCGxPx7WycuRQ4iZAi5xsuNpXcHfxb52MnaByNT3SCaR",
  "key24": "rAnB7oSDJumJBrwu9HNW32DcKBQPyPPgJHFZfFLFnbLN8hFpheMzBAHB5ENrE3np7nKQ7qzV71oJfyyyvw6jePe",
  "key25": "tRQRumb5BT4k9caxSVgbJntbfwGRFFJ5mvksKkmZQX9jJRNpDMiZSvNHo5yRPWhHSaMbDjP1ww18zXBv1NwSdvG",
  "key26": "3p4fmBBtvaoLgma28mYY59TeKHcJ9Lds4Ca8bXnSCiikrjadFCEj27F3UDWG7obJmhCqZUTqysRWyLs33pa9eMUj"
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
