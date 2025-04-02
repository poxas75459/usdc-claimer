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
    "5DbMM92CLFKKh1u1sfy1Tu81LK4z6smkTmFbwNjMT7ECta184fF63M9CfKtXZCv9aNHoFNd8fLxioKoxzVHdhXv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQGvXVa7YLvmVHBj7jrz7g5mAZUHikfqKh8wTcsXgn9ctUZoZZm2cC1RKnutgiMY96wn8KM85cMLwQtcjexu4nv",
  "key1": "4QBeGVs1tYLyoZghtVDP3uHCijvCdoa8bVTCYaiDMDtLZYpmYoncp31KpUHw9u7uaT8rcAMsY6yA4s822NjPbrzT",
  "key2": "616ytw7Wom8NwFTsTcxS3Q6Cw2hGPXyux86VGk1NDoBXjeDG9WAizLu8NAPQAwGVERTQQ3EoMXcukJxbLqzXvRQv",
  "key3": "4ns2ypxRNqknkr5AATJ1xXHAghYgWQyjEAASTA7hwqfiGNKr47wsmwwXjt914n9Z1ei87BF2bYzdFoV7uzLH5WeL",
  "key4": "45cgcBdDfdVZtUUm4nYsurUGV13TuzwM2yb2hgB3jDzxUcvh5YkMXpgqJUnKGxV8tqdMzyoHRYRa2K26yB1feN95",
  "key5": "5rWJgih4oCwra92gHwBijMVFaHyynQuVGhYgKrEqhXmyFUw5KuohqR74EooFM8Jgxv1qENWVZx5CJJCzugYnnUCj",
  "key6": "61bPPimon1UsJoTdZUrqjbdzj3eEbVknXGHqR5HSghbeDvBrTiLP9k2dGcJuwR3fECMXbVFHf3baoQsmhCAq7UqB",
  "key7": "5WdWxKaZdTfaaruhzTh9ys9vGtvdHGAeSWP3xkze1uxGUxNpqKNb8CmsWvAKH99qVieGwi7GvJcFJh333D4zKES8",
  "key8": "5G4d63BFCfZjMuyQLg68yeNkZxwZdEo9buH6486p3w2PH8wsYH5CbAsD6yKeGins7uj66YvJPoD7vDrpqcx3Zthx",
  "key9": "5ffzTZc1trSeXgwhoLPhGcvR9VZcDgNHuwymoit457pwbBocHVLaPaLUKtMfYqWpyzEKy139tTKaLWJtbzbsNxpy",
  "key10": "4CXc6wBHkr7kuCdFq5HWYrgzmLFUNte6th4cXcqpjvJ5mr61HEEkButjEGX9DaybRq4qj4ZTQcT7Lekd3dTDXHv2",
  "key11": "2JydeHuukMPzMqANypi38N3FySRaGQtQhsp6JdSh4FVPyA9Yvtkxce58JYtg1chjgYFGSgsEu5gWbi8fhYiS7Ngv",
  "key12": "3gJ5A9GHNTBY13WzKgm2H6cnVWqFD1HXQ7Kaz618WpnYP5EGPBzVbs4XCcnXDg2EkQ1dKDnTiZhtxtbr3QA9LRnW",
  "key13": "vhrwqiCzhH9D8TQksB4F94igTFWGSkTwghRo5jAFgTdsCpNeQ8M9rTYAeHN32WZv1t8HrinYJCiBe3swyccbeAn",
  "key14": "2B4UaJMxnxKMoY2NokzCLhzcv4hUA5dvkNhHAreRQAhfFj71uyYhLeeUNQNdpxv7TAfiXcRiq2jSFYPTz9BVnDfb",
  "key15": "2HAEWj1dasDg19GtHvw8AtmzT8snARpptRb84bVddUz4gbEmxCiK8QDQ4cN9jrj7V4fkdVEkvjBc28hLCVtQmdpJ",
  "key16": "3eDTbP1dicteoE4xaGAt5kw5GDWmtYaEdrqTenLdc69LpUEfCxaVB6bTgAM5ch9NRvx2V5nrVLK6H3czf9SJrTa4",
  "key17": "5eDNP9Bm7aGci1vuwnap9W9KfmkjuY9tA3FCedTUAmXYPK7PZNaV7245gCgsabfToiJLWopJ9MVTSh1WB1sESGoo",
  "key18": "5fj1CXRxwVg6XXurWbHo2QSWuuTBCM4rpbgvfUNEXTcM4eu2mAeoRH2rmXaq9B57KCBwWvXFa2kaeK1tdTP8QqRk",
  "key19": "2Ggr9M7t6UYYuhmYfKJ8enb2jaGRtWeGB2v8aYQd3ugf9YNoLYwFgU1kQ4eWwNC4osrVw6RKvrn37frNpDt4DRF4",
  "key20": "4n6bwLsLQnghQ6QefoEUohPjvkjvU8JpEv9hpvqh9QYeq15JJMRv93jannU45Bq8ymHQqQYGe7HKC8KpegJzbEPT",
  "key21": "3Ju9qihzZA4n3pvnKC3sRMZKXcyVSbfEKu5bKQUmzuan4YSrpuG1gnX41TfZLxE3SoU6PTmEr24KQxSf5hfrEASG",
  "key22": "5F8THtZLsJg6ry1qB2wzbbfo7wsfKg6PXH6cUmegHM4LLemt4KVUq47Bj5nhXLjZwJNrYK3kYtJfAWKNc7sMqTVz",
  "key23": "2ren8V44nzNmfjtKEhXuCJYF6S5UiitiDaPuKKKzY3Y35SeMKRfK8WEz1GGWbEydBbisxuCvRieiPna1y4JT5U7h",
  "key24": "64j4r8eK24jx9PF6QCrPeFe8r9AnvdzocTzHuKWWvJ4ovBPyh3B8LcCdwB6w8mdcJGgHkdpZCkW9LAvgZjfBuJ7W"
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
