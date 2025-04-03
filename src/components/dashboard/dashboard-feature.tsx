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
    "9U911fobLzYAQzvVgkzWN2SRCrjjQMHnvzwimW8LrGsjQMYz5FX9g752FECi6Hg7owdjP3YLed3EnZVvS6fUmQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jyq2UqeExQ1XsttPeabs2Ao8JGpBCRcpJtYtWqCd3sSdeBEgTGzUHyL4NSryGPo6i97vAkvYjBNsemPnbtge62y",
  "key1": "2zXpgh8hdA1uh6JfvQZ7cyncgrkkLX6CXYpZPnXWzPaxvMrkhvKiLXsYqMhf77r1A9QUaNX5sc1QjHdosdS9U9Ns",
  "key2": "63JuYgvPLrgc5DptwSCNLwQcGyiB3DeiTsAt1xdQ8Bi68KdFTp5q9ev3pbaJRBhMpcUSgxa7NBTt5VGhbxyzkisu",
  "key3": "4JLwBnNVyCwFobruaRR88uxQyUNPshVsWJLo5CeZCk3BP8uQNPo9MmkA9sAoyR9tY4YS2EWAnKV1e4J3prjrHL18",
  "key4": "5kwL4cee7thE5m3L3NzCk4V15bFVmZ8M9FqPRqTXUgBL7H5u5eoDsonExj2pqCzcuRXE6gkDjWWufhQkit42tkBx",
  "key5": "5TKH1Sm8vxUjueDb5wEWWdhoF44svU34C3Tuf6EeSZmS2C4cvN4RP8kdm5fQShdedkvBvVqX79kas83Qgm3DgwQE",
  "key6": "6ypq3UUAiY2FKGPmCJrfGAADVFBtjKLp8ggxaMQ33UJaiw6EQCD3XYRNL1AZ2yVnErKSxatrm6zbnXbmT997mS5",
  "key7": "4uEj8eaHGubVk4ZvgADVqvMujmjDHqKX6DAhdA4tXHKExAXUCZEo2Reno66Da6Qj9jNWa1MNggb3Kiaad58mjKyt",
  "key8": "pvyMVTe7YKYVtoNT95RUx8eWnCpnjm45vhsFxJXd6gpTcixPAtpaY74gHYnFX1thAxbWgoiZE4rHkET9ECLqX17",
  "key9": "mZ521ym9ki4TNgx3m8r2o9yJnJHPR8QzQoGZCyrrLvDKgdi6iDiB2ExEA5cE5ppkUMqub1koCR8fctmmZtDyJW2",
  "key10": "skeqHWXEMSqvhsfRwyXjb57DPcTr3nwfptk8dcBUGD6Kgw3mrjE9XxZCfTea3pw3Ufv5xFBsxNN5AYRGiwpQnPZ",
  "key11": "38AUwRXLtm11zRR9sZ82jotPT12z2iNH4gchMXK5AosxoCdcJrmELtDpGxxEWvawb7E31CAiWfT68EALeFNhjZmy",
  "key12": "4661gmNxKZQaczVA8QHEpWMnaVCdaiq92GkbouRrtYsfmKhHNGN1GbLzDTzd6K7FbCbvGVaycgZYYygtZJDcVmGQ",
  "key13": "srJ2nCdofmQv7WqbsdcJQBcRJMNSEiViVkLf4pfKfxxDLaKShiLR1VQ6GN9UYP3B5VjHejsJxqrb2nUM6zzuBXk",
  "key14": "3jXVTB6HeqLHwDJZWuWwGuTpguwnFRCPUbS4EGmWmCRXeB2gu96V3XVSDzQs2vXrS9wa1md1GLvB7rpnQ7E4XoKC",
  "key15": "aJ9CgtdgGMZ2BRibVhwBuXxDqPYKf8LNH36ga24K763eB1xk9GTCPWvd2JJxmrfjBBBGptL8fzMuYx4xtn1UDGC",
  "key16": "5fQV9TmCRM85bTpDTw8xoacJrAD11EuWKoS7rmN8h5LEP7ssdoYNmmVKfLdemPezNVvtEEQeiSk3UmHJVFt984rR",
  "key17": "sYn8EBiv3RMRRuwRs7ENVKVoBzV3YX6V3wSxaams7SBysvnmPH6zmDC9NivNVhFSrWwyZa9PMNggHYRNoYFA1q6",
  "key18": "SbYNJg1dANhYXxfbuGWurPcJ6htksSWzDTugrPMo4mygSWgSX79c8icV9BoN3VQQyRDFQYgiLxdNZ1gx89ksHqm",
  "key19": "3mznckffeeNLyCMcTVSExRoCXhPWntUuhL24CD7NUvy7kfQfEDE3WmySm4nJZ8u4AGxGpKxCncxcUVvRRY26EkKP",
  "key20": "2XosE5uvqB6Ke8Rb5yzi3jdLnUFkBHtaPVMwJCR23aknPow2aKpsGJumcNNfRiBWMgJhxHnaF5Hy5JQnyPYB5c2y",
  "key21": "5kBpoD8Q48c6iH6iXGiueW9iU7so3WR9mMif8GJtqc8953gR4ZHQ9hfBYPT4tAJPcy9oCA4MD91Bdwf4usQKtfXE",
  "key22": "5iaiKxHWdVMGLXDGwcKHZjdgJ3qYdFcZjjvuq4E8NZ6r1SN1CazCJ7UaLVPTkHMo7unDshrs56Neixbu8dV5k3N2",
  "key23": "CJRkVPN9t4cev2VmB3YA9KAVe2Lx9SRJ9qdz6ZEoU6CdiT5aeGxhCmNqyaAZeJ9YCPXGe1sU6YWiy4B99Yn5h2k",
  "key24": "YcD5aGqGjzwArSgtCZYkyikqAeDzLS3WeQUmLTTDcgW8xzxftc5ZVDovGinMUDLjuDvvAtBgQsNaeH2vRPdWqNb",
  "key25": "XeSHbQR27aydb9uPxNSbk1eYbFyysheeiN3iaunLUnQmTiGWsBLu1SynmLMpmuj4reN6bm8Xhvi3HQkwQHs96B4",
  "key26": "3JW1Q2Y6uoySvAzYJLpuKjcK3tAv1fqQeNES3AwajhFVM9YdUr3DKoLHVPXvbYUkezn4LEcYm6wG5PJN6PU6ux53",
  "key27": "48BvY2imoPEAS7aJF3TRKLBCqvdGpJYBXFMb1t6aoQH9h1ZmUTaSJKNfUdTy7NQTmNBZuAQieE4RVxxjpQQuKLkW",
  "key28": "4BPf9YmnZSW1oY22ohFkxrcqrUYsvRYbU9e1JAkG2qmUueU2xKsvbwzNVWr6tYPLe2VJX4ErVgsySHYDbq4yNnLu",
  "key29": "3Q4CM1e6t37JY11xZKJNPHAEyC57VsAG3sWbYnEPqVU7GuNZix1Tz1tXRiYjSCUh1NVFsuhMay4dXhqTS1jXo6X3",
  "key30": "qbjoXRNu9SAgRBPLNEZaHh3s5YwJ9x2sezTV3jbx8gfspuNtCmeWwvohL72EeYHU6rhjjqQ3SPFhg4fEGHdAf3M",
  "key31": "UUMLoTZ9PEvimzmRG4edcS3qqQ5dh8siomD97PvTJR9TuFmcojQiA2nYpMqZXGy7dSMyAZhTw2UCX7FJ2owFS7d",
  "key32": "5y4ESHSGyi2gWsJBPzdzRWvHERuqUQJVHzPMhChqqTCgzMxtEBenriKZJVyBJ2hRqu1nGnxB4owzeRbQiEat1swf",
  "key33": "2r1VFZWsvf5B7EvVA1HaRYwnK9NfRq1FSJ94kjQyMgMq7X6BtkMGBeWM17PDDmQUSafYa26JCWmhiv9DQy1ngNbu",
  "key34": "4vHyRqYfideNUM8eBnGfWfyN3jMBPjaSXSmJSfcMkKuh4yyCcZFyy1KdWShNowXTP9RzJYN1tBSxG9nFzsn2118d",
  "key35": "cGZo7ACed1GS7WDD2tMCR1WkzAuxxo5qnUmBHxNv4eMeBL8S4SXGmagPBa6UscuHfN1JokbgLuFc4yvmwp7pPVG",
  "key36": "5v21LBeYMNkgH8CKALgBfRcy3Ma2Ni7TguntDSJKVsnCxTSHJ5zFTmNw7ZJjjbouX2XxygMVJX2qyMepQ1X8nCXw",
  "key37": "zY9HZ2E4S8QpkdkkT48cHao1qj1t8bKvs6LUU9KWNuEuPkp6Y2fQXLM3tcV5LuyuH5wemaiegAB26JrcELgDf4w",
  "key38": "2jZXDALXfjgTwSGDGZyALpRn2px5Nti6vPXRQ6wHPfRWACEYNNeeptEdSBLeWvVjnBuhtu57m891SRfMcRwyXryF",
  "key39": "1u4FsezUqaTH6tPJtthGoEP9PBLZM334UcNRdGnjCJyQcHeFWZuBk63d8VDb54AoVijcExf275hxpakT9K1nSFk",
  "key40": "g3EpAvUbGMEMac1jH1nUFAKnDkiJYkGNYDz5WRPxXhT4qW7pDmrJMWyF3U2AkKJhVKNmp4a8V44b6jv22qUPhT1",
  "key41": "X3KFEFfb2cZgPZj12fUrNED4BRepYRYkyHrzW2YgVJZxEp2kWdWdHYMJGf2smYntRxwyC9i84a5d7MkuC17vmH2",
  "key42": "2naQoMT9MWNDoMUH6cMbyFYuBbSxmaspqGMktLuwrdqkSWrS4ZaR4Ti6rvEZaupWXfZ6GDMuXLdfKii5EoMLYyGM",
  "key43": "y5TBwNo7mbFjjG9Lirov5HmViuXYBRJZnyFkJGSKyKg3CBhnTm181wXTfU5dtLS8eETQRWdCfMrLG4zMvRyAWx9",
  "key44": "5wvfvFjYCHK3g4i9RZvvBGRU8iQ12YzQZY6yMiB8j6hjQnMuVdF2wXUqKhnDa6vzEV15y6V6JMa9esgGVMQYGsSp"
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
