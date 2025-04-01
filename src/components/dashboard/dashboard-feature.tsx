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
    "4yHbqZk5qWxnmYNj1ySspKNoWDdCANQYw6AqY4XYUWqgZgqbtuEjLAiMLRstRvwhCetkS4Vg27xRC5dNXNxkYsM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SpodUQLGAkZYdt2BN26fxRCF8eFmoXox9o767yNqBuAtJdaQ9qPCt27oLYk58KWDkA8qP9kLXfEwE1RKKMBb3Dy",
  "key1": "5q775rGrdNXDpNtrZ7HuirJST6KZo9XWe6Cn9tMSrm7VbPynskd2JkuW6vPnEby1yZ5YhQLfxYyRsXBsYqVF2hdN",
  "key2": "3MN3Z8g99SJp7NRi1rYVVHC7bkeAsshjncT3XnHBHW17z8U8ReXoUxd2gQijy85F5yiMKcnMewEftDvhKyGo9Fq6",
  "key3": "2K7vTp3DfAbWrwqFcMDvdaBpgFruGxFA45A1NWzmerHXfFK1Te9vX3Zfdt3N4bmeuw7PtL178pibeseQuSpyDvS6",
  "key4": "3L4dCQSB6Z9BBsGxGXq1MAmddpqZeVmD4tWiEuQft911G5TBQXVLR7DHPMxLxFA5Dc93x1fHiyBB8dgRVR7FUTDF",
  "key5": "4c8Qf9Yu6RZwLRMUABznKgF7are9TCdKg83gLVawRvjF66T1vSy5fGc2fiPH5dXbJA9vAG9kcDrVgCou3UJTEstb",
  "key6": "5YHtWcSMQXZ667eKCfZsu9ZmwHqwddPyRZ6C77NeJpf1MmBrGSCmZ5sMWP3U933r7jKPXM8ZfrDxwU9A3aeaGnxK",
  "key7": "2ty4jL33P4QSbZsmChMsetsYWcB6umW7bKYmV63tUfiLgqi3egKf3rYWsR63iEnt3MkEAn5dJrirH3WBWd3X6RZX",
  "key8": "2LPjYeoMwkTW52NafQ4KDzxFQwf85VQtq3fUhnxQf9W5KsvhXPwCqxoNwaiQih7VpQj8iQrb2vb7Xgp8d5gMmvSr",
  "key9": "3nm61tcTpuWmCrE7wKUMgWMp8uyDkUuUuv9Lz53kUAo3ABLE8X7aAvD8BR2NW3MHLx7HjpTRQphUTRaSJwtjBGax",
  "key10": "5iLy8cDnrLTQnyoRgYzLZdj6q6CvbLD8T5WDPUMxfnYRVTYwJ4pv7aHM3cAa8Sbg7Ln36ymaSa76FL1vGUL4bd9y",
  "key11": "3deUeU3xLFFRyFay2Dz2t846Mxf4akEEZNtipafWwPjTjQw85d2oquTy8Em3bF8KXEumSjGX2gMHKY2bKPBg9dbP",
  "key12": "4iXhKuxnsBEt3hBMQxTbqLyQNnZ4MGsB8wbmp5UHzNofSNCDxp9UpQ2u8wCsyjuwMWqSMDRtYxKaqskWBhDFRxHy",
  "key13": "5Zc245LxDTNQYyYs1bzfqW3yreNzWm6dRGWFx8UGMJCPtemQMWut3QFYW5qQPbTq9eJt15Dx3S8s8qs38qKYQduB",
  "key14": "AreF5vU4zA5haUpdCqtwrVj87KCmtNZU3hzXL3ns2tNDNWpqa7xEpUqdBoxDwfKyJpVCXPsANUFRZT3zj4QHa5x",
  "key15": "Ggc13nYghaActa4ktcSrsUpZePNepYHmCQaxnWpLnL6UX2pWamFFwA5PMFaKhw6Z3YvwsLUaaq45WyArNfjB5xF",
  "key16": "3pWEd7PPDXWQDSX5KzrpigogDbZQb1ZWDz5ynGAeRsBhcoTGRMYMLNBTn87UrgdaWU3HyZHc2Vs2bKJGwNPyVWGC",
  "key17": "2DEHXyU3P9aJpqw5dTas82EuhPd9KkWUiafdhpswnnp31SrM3DYEkc8THMVmtF3DCjAL1ZdB9zJe8p2T1eByLcfx",
  "key18": "4SCKaja948strTu5dQRoENX85KknwEroZLQM9AU5gFxjF16CPiiC23hgThBoHnb6b32VEjZKphowEu4YrxTEEeww",
  "key19": "3nKuYbfBHa8CB7rBWZu7SA3iFDS7NqFwZNqFu1f7RaGdehobS9MdvzZFANsyNvSv5xQCbDRes9msEzRpe7jAfPrh",
  "key20": "5X1t5oH9rMAyUtyNUcDco1YkRPC5ej9RNdZvEFobbHid7CdmHSpz9W5nT3pnEkHEdeiETLNL8pYa4EhowdXMLTcL",
  "key21": "3dZuSEp9X4eMNxbDUo9PYzZArhXS6ZLNUUQYoZ1dPDMorJ5TX26exvoHkNZdKctgW94gRK1unypZgYuDMxwguzXH",
  "key22": "4ysB2gBcQ8LPQ7UqAh9dq4Jm9ZiRHpM4HYh4h3PBFoLdB8TStN4e4hnJF7yRfXZb8LLjdPazBx3E5QXzoN1VAHvC",
  "key23": "4XSkfKYhFhT2BFVVdfYpU7UhNcyLco7sFP9DhVQVrcjwXPA2xA4ALGcYakp9Aq5xkBRiC4ZGuzybRi8iQsYady3S",
  "key24": "5WiXzqT1BEmAuVymLjghXiVKbZkhLxEvJyheaujQ9sur1SZJUG7mDzurVZr3nPvv57AVABkKJZpXCBv8xV3uD9qb",
  "key25": "5nWuxhTGiHGJvcux8oiEcE9aN2oZuE43XDRwPGXpCcMHGsPRMEWoHgrmJeJcSFU1pddpK9bVhHVppZ6xvRQGQFK6",
  "key26": "3UCdWSC29yzt9agqTvojee3huwJgzFgWswhmSg1fifns1V8QWrKbW2G1NmoYRbZdc12WuZkCzU9sKfc3GzyLHQeh",
  "key27": "5AunEj24a3x35etwaiXn6fEzJr7qdT3DNDGZwbBxTLWY5DBg7Hm7G9BkrMCYmLP48RswM98NBxkaV6ibUqFhKsqS",
  "key28": "3xVVH3wX3vA63DB6miT7tsWKgCSkNaHmzngDt8VyFcXonQmzBK8Y9csSBoPdW6dWVRHMV3T5AjZZjU7wP6hAhfTA",
  "key29": "i3aUDRKraF3euEMAzFR5CwcgE6RrSVqCpiLntN9BpouDYTFUhRsZsUZTwnBuaVDc5aQpScvixW8MZptrUMPAEi3"
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
