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
    "2dDSgn8zBY95Ndf9vAqRG5C1ZVk8rZytTu5pphsPuDAwWuXcTDYjzazdC4RQbuh3U43vgmtPhmumipHbg8ENVVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aUWMa63nBBvESKFv46s3VAeqm9DfsESvsGHCx1tuWy9se9yGfQ4rpjbDTLWBLECfzGSD3auesUPauZEuxQmCBHg",
  "key1": "4wagC52ZTFa9p2DNxe4nUzM4bN9rVH1TDCJ9xJKsqPD7xzDDT8wUiTC1j9GHWEYJPhoa29uTEybjjqYgPdb3N2KM",
  "key2": "kqfKzAGQU7cU3Eif5Z2p4Tz3WXyUszYhaUVWmUaqKiGTohuVAFAEpVZKBjNvGQiud4eQExpPA8u4bPNQgESgrxR",
  "key3": "2BQzL9NMt4U6j3fZKoC9VVZdD27qJBYEhn8AGkrrTkwbxRMv2M6f9VQCZEmwyhxNftn3RTGyBdiP25hmoUUUBjeo",
  "key4": "357nb9NFBRzx2f1eK2ogkM7gD85nCaHUEz86TxAUEFTdsPVG1FvKkN2nb4rAoWQ7ySyvJ6n35EKui1WVs7Prv2S1",
  "key5": "2jDTxEckeEcHboU1Cbaz2PVWmJ1fCGEtML7eSDmWEU6Ryn8sXqQ9mZhYBA6jF93BUGKBW1PQmMkyHubPkjxUQDfi",
  "key6": "5k8DsEP51nFydwPapTeZV7aTWNh6ZfB61WqWEF88vxuC2ZPyMUHu6Z1sqxCcEW3BquLyC74YQpDhfWhXWk9BYNHF",
  "key7": "5Na39FQwQqDRrxNiNpuDp3ohcmDHa9gkdvNZtX5tGLN7ZknT9fENBM6c9zUXqhRmgynw4pA9tdPaUKnWuMk1Xz8u",
  "key8": "rqXw3cZGdNAZGMzhvptBYbXd3EW1sqtSJR9UW65k4pf33deGN96D6HVZRvCryqMb4r4g5H8QeBPQcsjf7CoKeWq",
  "key9": "2g8C8zvpTK8LSeqiSKxeicuknwoYHcrw4scGoiudM1R5T6u19AuvjvMzWYHMLbvwhBSGK81x2pdtq69FFVQvTA7V",
  "key10": "3rcyYaASzCAEyfn5zV6WZgipP8x9VZFtUG5fmf7odJJFBMKYWzGU9R7dnU5BmiYNoCRNi6FqyeBYmsCt9CyB8bKb",
  "key11": "5J6Wk6usv77wHsM6VuupmrtbMVAo9MhTg1ACSMLaZd5DG3ynZZS8EhgYfYo8geLT8oZD9ZRKpJU5tTT1phkJbZaT",
  "key12": "47ke9XUzaX9BB71Yz461Z2dE7GsFFmgkYMRZAxGh3jocrWe56kPVzFhNbABkaxZVAVWjy4WYx2AMJwfUEGG6Gm9c",
  "key13": "5ECLtkCQePJn421Q6zDTD2L7TZVKSJU83zpnuKCJUdUco1KJ4y4Ci83zxqfUFBQbV1uNo1CwZpavtD6qB5D8gQQe",
  "key14": "4F7URYQk5y92cUu3m84W8TSobtQCuHBXKFsgRcC1CCUdL8VVJ3QWHTu5HgaTHtjw3MiF5wvgNn2Ry4gYjnG8jWVo",
  "key15": "4dggLbZ8CT1b7hp8ab3tCwje8QXZB6evKcftezQrFuuCK1sEh9JmqwsqhTwQpsnE43MQeX9ks4BEWFnJwTuRJkE4",
  "key16": "2UrPgZdaxvfHhrTUFqQFjS4qcFhaKEdaELWxmRt5yYXdGpVNYRwGG9wUcp6zXwL7sHFbfAHiXLantmtsdo1fFta6",
  "key17": "5HetCUshGPq98orN7GBJweYs3Rqt2m5LPu6nCzG9HrZKeDeqR6jBfRH2oqkbyADdhUxNdEFuJpYG6rEJgcYPBEka",
  "key18": "4ADhJjwbgbScrp9b9FL7mY9NGi5iUqYRy8FQcMqkQdbv4Mtf56HZdCjZETiV9Mvx64QGmZHvjKkMZT36Zfj3RdXr",
  "key19": "2PD1m2AcS39Lzv5ccDUF2di7eSVcvkgMGfixojqYzXstXNvNDmZSdjrkSXYELY3U8riFDKHonj9iyhMz9h74m5x4",
  "key20": "2zm9x37hxPc1g3KceicoLVtVkeN4okZVdaStnz9G8aEPTqBqB11N8DLas7vEj1N39DrJr8FYyLorJSf9Pmc1qrJX",
  "key21": "3TywUorEsCRK7jQ6Sn8JeTcBZj5tuZbnc6QyVCWi49PveKogcpEtxfuB4Xm7gBRvVghxHm88C2FVMnQx5EeZjVdv",
  "key22": "cZ5BxLPgn875W5xpfYAwbEefrATGnAX7GaSNfsFRVgZarfXttpDvG4jzSthg6bp8LNk1PJ1fVBGn62R8CdS6dyf",
  "key23": "56zbXWENwBKoRHFmZsfLo6HKMq7Zf6228BjLFkqgRNUhx5SCuQrsPg1AgrWUCkvu1Gk22soYp8kYCFoPdkiHG8zB",
  "key24": "3JZgNQdsxS7xf88Ff2uMDHYrTAuMMzq4A9zMtCHEKMi8ShWwqC9RSUP5pJsBvyXbcQUoLdwqKc6PGGXnWLy4HXMp",
  "key25": "65Ug97pj9Ux4zGvuipH1Pa9tAxMVY7XBudPHTaWbgBba4oDTvvigkSwvCHTyJUNeWzXsQ3pyrdJ5GtJQyAJj1yVz",
  "key26": "4jKdM7xducQWvv1pL3ZcT9YwkJbSswAtXP7HLeLpbTBG2DBzLFvvA5QodzKVDsgGSpKxhRq9X5Qs4JekEvvBWtdp",
  "key27": "3qSEbGog2nbyFaWb1g1dhJcEbpmSSSZEgSGtvnoriVhznKxBmF7HSRRQ79MaAKcC7Zxm67eHWkvp9A47YdYpw2xU",
  "key28": "4W3U2G8bqbkFyZ9z6J7BhcTTSi1cHEBLdbq7HYvdwRjSjNzrMW9ey49ZccZGSuhx9DwE1kNWgZYfdJJQ8fmqgFq",
  "key29": "5jGBivtpHBf1VqRvHd5K1m1wGRvzLcuGt6ohzF8gPaHyph6cEB3SfUUfeeMqvQkP4W5VpVh4CW1GaXWAkBjpt5QC",
  "key30": "bf3BTsMVNzvDYGk9q1XU81frFQnZBJu5wPVKkoL2Qp8qw2pc3r1MbxetvVDdru7426HESWUUoU7xSsvF1AhA68j",
  "key31": "2kP9sx8Vvs9fNwjNRy6N6YgzMR927VcNqdJcdKetm9so8e1A5nywM67q2M88dPWTkghJnfjmESSdWBKtJUiyJNdr",
  "key32": "4Gar6xPo4RtnxqDNUjLigCfM9y8DSysfx6GtbHwQ6wsofiBYWD551fekzuDU63VACDGzomuUVQfsoXwhNzLHnzdg",
  "key33": "4MqxweqKMqeKeUyJMdGhGZKduhXLJb8m51HMxT4Uqw77SzG1Eh9Hrv1CarvSXYpMCYYyqzSfnJvBP7vjEaZcLx5U",
  "key34": "2iVvj1zWPKu3pvT8XQ52YrqtPCPGYS993frCahQfkHkPuA5rrKH8Ga2QARuJ9BL2YPSFCpqFpfsrEAKjD5DGPudT"
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
