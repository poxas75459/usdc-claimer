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
    "6xe5MTZqBVeWCjsnapApkAoNBDF1qpxp4edqMDJKmSGZhcJy6bXgBvSpK1fevv7t3boPEFVFFp1SdzcvNgE4tRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REwB5WChCYMKu4RATPY28aNkvxDwmKozfbjvzruN3zfBff19oPCE4DzM7eFX8UDdZa9H3iM79thPayHaCZymRHo",
  "key1": "44RHiQKZCDp39aoa287eb8YbGWWTFctDBPneJB8QN5djpK9XNArWXYgwEiJvFPGQg55LK9KULk3Zn3fp9HpCnUgt",
  "key2": "aggKZvevCwmLBB6kLYUscF7yKdTdcvCGLg5Qqv9yTEiKkpY5dxmRcpvUdzzypvYTcJafoKFutqwVoCn9JC5CpG9",
  "key3": "57uFDWNxR6ZwGU3BihEVAoCBWEegnbPUfQHRMHbgQyWFYEFo9CJ4QyEU2xSGYTgvyJHfnKAMGQ4vJwQDiQEfZSfG",
  "key4": "33bduvZeJncGcDcSE1NCzXw4enqe5D8zGNFATGa1Ejwb9efuGFL4H4So5gx9trn3jiZ4drPGKCK8XfFmD3Dzon1u",
  "key5": "4mpHxw3vqAKERN9xuCfPVfvhLwWmU7NLQSyiYQj2CEmGjuzdwBsGT1bn8FEZdspNQkPVxVVES8b537t4zgofemfi",
  "key6": "3n9QeTtC7pTJipae4v5XNkKCzUP3ELL89krjShJ7CBqsQhXKSo4nZKRDs62YwPTmfyEno9ftLtCFiaDqXrf42TUz",
  "key7": "3nzks9DA6JR4VkDsn5cDmR3kNyVxpGURmtGuhCe3icudhERWips55cgoupvcHKS7dKuEPYp2SygkftonJnusnpqm",
  "key8": "2y5knvcrRUpRSycUDh8D91zouW7xN8pb7DucYhfqpcNEdJGW3AcFfMMeUskgJgaLpDZevei1HGTsbymhrxKxnESj",
  "key9": "GqixFh7QmyBGgLhoWLQr3vBMtvo4mLhuhq9VwEezWm55zEzCNj258n172xuiGoeb42nKNUo7UVkJnBRNzb8y695",
  "key10": "gaTUiJ5RMCM6QSjYPUmaVnFxhqkBYXYJHQAPFjnBbhjY6TkTe1kp58HYthDyfexuhYHBjKE3rp2fzVRoQ6vqNFM",
  "key11": "5SqyZLEgzJouamxWxHZa3ZE8Jiqq4V19mL9G6MtyAmkiSHei5fkNMa6R6Z2wkGMx1h8WJPRvCW4SEMA7oR2RKpwX",
  "key12": "25zrcSADDbMsfHTAxK73HPHDLXiCb4kiANfGcJFf5cXZQHGgPX3oAA5z8kLzXmpenPKpK4CtwPvpj9fMDydiXFWk",
  "key13": "5ZHFU1SB94N7uhB3rK7xDrLUhnR3j94AUYmqaa7d6qKsFzrq2vkz21rYvzVU5eEertkZ5CTzqEj6HibmvcJxP35N",
  "key14": "32BUaAqKYUevT4ErdreT17uKhkgaFwDX4vK39oaGV354DzXm6BZsvUabRe46nmoK2shUNH7LQJHZu3GdNwVqNC3m",
  "key15": "XM5hqy8LT9ihx4af9KHY3rXon3QvwWfesSmS8P8vvweFn7hj9iEy92eLD95z9fZZb69hSDHmfVPiwWboktZ3va9",
  "key16": "3Xzv68Lu8LGktbKTkHLJivGFUxDGLhgyq3CqfRyGym4QYAbAqAA4FqhkkopxgaGguaxQZE939kDopRZ93x9ajdGm",
  "key17": "3v5YDFEFZT23dhzwynSgEmQ1PutU3FzmaPzspPnW3fNPAGWWyUUhQRQwmJSubhBevRCfo8LWr6ZvrhoMzmBRA4zt",
  "key18": "5PgBM3zGhG1Bz9QLTLBLypCz9t9PZCQnq9RwQxtJCFBRYrEF18tz4kpJkSTtaBXEwDJHTbiuYzMzAL9dKMrZZHgp",
  "key19": "2hgq8Xd6kZHPgwBVePQNKDE5Hdhn6S2qozDghcmr4aQAZhzdph4oWSLB5Tj5AYYdq5G8H6tcxET3H4XZDhtcdwj6",
  "key20": "3bFJhP32Ks8v95aSrk9p8TrixPYSPVjRzNZsvpRiEAxR2TjeDJraKCE4sk9snNWbzBMjZDKXNKBBxVkZig5TMKEm",
  "key21": "28HVSr4F74LooAnvRDfmiekQewU2o83e6JHRbsunukQzcYxHSPgJnC21bhMV25RESmDZ6iW7Mhgffxu1KYZfZMQ7",
  "key22": "2hscgcPbXJn7obrkW6bFvm267xzTFq6gJ1cejfdy6iEXWTHh3swyLcnwx6Gz8fsm86ydL6F6TJ4f1YiGkeSba8iV",
  "key23": "4AWYUJL7tkHuQ5E4V9tP71vRA9bAGkjNFaqCJRRQxrWH5tEs9jJQnZ9BcnZd7foyNQbufSs4NmimLNtf1Zruoozk",
  "key24": "3gZQBYzHftqZ7qLTccHEtoDniDsQofqJazkiV99WVYwZCVRLajWFkec459AUEtiDYDeqgqLoUUpmkLER1GDTGik5",
  "key25": "2jy4kJjDKcdL4WpoHqEDzg2mUt2FtBkLXBah3EcaEZJaL6GJtaVF6sZVy4HqczfCQM9rMjXmkCqpotaQNb6q9W5m",
  "key26": "2QzoAf9CzuzY6x5u5SitHoFqVkLNhGvEFcxUjzfkm7oQwiBBKkAToYbUd4iXHBTVeCapEv1Cmqo3rkfzayhaSw92",
  "key27": "fZxcuymrMX2RPYuPuVpxDyD57Y5CrnkNUzeMmrEfwensXagEGmHUqTxXwjqvDHmHRVXi2NABXggiJPwt43L3McJ",
  "key28": "4yzpeszcDZ9YR9RVj34nbuThnmY1BpBw5dYzAMhjbmZLwvY6xpsFSGt4fnviM2ezAD4Hi18AhKFebPXuC56mrMjg",
  "key29": "3w85Up9na6nhnr19tTZy6rS3P7vNmDnsXKrdjGgtCZMrFEpFD2KDJ6jNy2pZr1Fwf8yekBiHmzt3SYrBDJ2vTH5m",
  "key30": "3ibrbK5xFPVXGv4CY735RxhLWH5aWXpyE7TCdLNRZPBtM9SjpXRMQNWTyAnajLJppHWY77pukazbPD7GGxiE6D3Y",
  "key31": "2JrbBn9iF54tXk5H9aeW1aHHwjTLVQZvXv37dsbfedRMmUDP4cnS4BrTCAa3adKat2wQXTz72CaoxJmNVCfHfg1G",
  "key32": "4st4KtPSYyFXcCPXw9L2oRnLF5uE85gPEebbNKrU8c6fVSKi4TENdTS3wANE274TNx2f1t9FiMKbawUiD5T6bqfo",
  "key33": "3iBYACX5zgtV3uUTMmjAaK6Hm8pzkwXW8UCJtRcjuMvPu9p3PwXhgUfPLo5HjGzpbg9tJvpxm7uRp6ZLQjuvWx5E",
  "key34": "RsTZ2rSqWSaMuXPipGwJ7NXUet1M9JJezwYQVosW9iTXXStXCEJvSruzxpXo5XBPCxXbsH13wj2C39dy6Pq2Vpn"
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
