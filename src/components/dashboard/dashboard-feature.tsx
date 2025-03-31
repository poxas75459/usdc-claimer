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
    "TtXrsDQPPCcNMTDu2DF1Dfq3V6vGSvU2N7bU9e7MoRQmvoEF4HKgthDdgvV78sH6QJnx5o5m67deSP9wBm6CS5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUbL4kVb2Wp4uS9TzPKzn7PwskydVPqnBFJgr27gNBiVwFhPcLMcXrgVCCkq4gwrZFTDhUqCubuGJb5ieP9Cowu",
  "key1": "2t4RqKebR5291d1LMg83TLQuk2fn6eFZC3q3iPbTSBxat8VTq3AKsHbhDAekM7wBt4i3r5C7YGgra6ToLwFQEzpG",
  "key2": "dtBHf9EBxYeB8Y8Sg4HPWQctCsXk7j1ieshdcMe4GhWcUUVY9pm92KwPGbWiYrkbVzgDTfKYfpfRUsjcVu5rvpL",
  "key3": "3dR4PSrUF374LtrXxQGV27r6pCc8oRgNTu4hDGKK8wUWzeNzvmNMt2V2APRVQDE62BkJYqccywkCR3z4iuMycNCX",
  "key4": "2WdtTMSkpfbmaVrhZfCPa8u35j9Y8vYFM6JaFHTh4KbZMaSM8ySnFuFxavEqAJJQr41GTPmZDHM3pfkGAmLHpy4d",
  "key5": "4QEfhhvJ2gxcedze3YYjoJ5uW8Dq22p7buhqN2YzritBFEju3ajNwyPYuygnE5185ysHXJvLTvEeXY24mwMVpbY8",
  "key6": "3L1dzAf1x8bHdGozZ626dc1bnKqr7RQU7jc6iJPN2q1Awr75EQdAFGggseCi9iRjq9feNHAcP8rGK17V9B61AaKe",
  "key7": "5ogpKsqQUJd8M2H12i7beefRuUVLW2iZUjGuy2YhuhzUPSLZP7BeYmphcZ55geooVrQhnCFxQ9DFqqQz7hK6q9u1",
  "key8": "5zUJnfX8ZoyMPUudiZCC4mwvoNRdzB1xz4MgwYK8z3mo2GYTumu9mcbGK7YaxKpPg7S9ueDEgN1kRKDpwuaG8xaN",
  "key9": "2diAvA4YTMAYYqhyBNV3Wp7jE6E4ndzQqPEHWZAiuKNFaZoKsmzfH6SMcbCzGWanZjoLnSvQdPRawMQWdMK5Jw7A",
  "key10": "2pfdVniTxbHnkc4gyLNBJm7DxxyG9QL6ghPN9NF2DhMimWcwLrwik7RBGW6G7z3QGr663n1Gi8BGhzQxCDNAMvDf",
  "key11": "3iguQrD1ZoXZLtyShnfTdSuhytnjowJ33LCgz3mqapNTj1AgZgQnoSb5r71PKNz1uBQnp8UEG4XUPjWDcXnzZRaJ",
  "key12": "5aw12qM8ssQRGPVdVuDgmQniTx6LGNArs4CXHKfyK7csthj3pnqjHc76xdorNjS4pouwxyXs5mhbe9P5D1UBDDS",
  "key13": "5TGYjjnpBMzou49LxpvqdUPcvm9PbkX3nfe35PejimjDzkrHTdrWNhzXSF7zULpDrFKVm7q3HWwSPR2zbaGdvrH9",
  "key14": "32MJyeXTC95Lp9huM4iZnmn9zTPS5n6hXJkYBaCs2fxSuVLeLuSnVoPPyQupfyz5gb9eixFxjwXZzwYVCywTx68A",
  "key15": "5UbMyNjL2sW6dFaja7GEDf5yvUYYysYpo354JGPwuaPuAj9JXesx4oSjrErUnnQP9rJNCnCer2udAiBbXnXyUv88",
  "key16": "4WogGJm7mS2dzitHpMVmW6kVP4EBXwJW3uRbBdVaS4GZa9joegqpZDrdabJiwbTbLa38VpeoNNbjFx9dZzr1ha7j",
  "key17": "3EG2ggtCtbf6LpoQxNDGGTYvZSnqwHuHB2sfAHtZne3JRZqUfcR8PfC6GQnvWw43MVx6NMJHNFgvJzWPtJY4Tx9t",
  "key18": "2AVeSjrtbmowF1qpN4MRwopUKACKdQRSrxHyCPi63HW8NZMT34Dd8kpaW6Reno1zj7C6cRzD9MuTr66xQZK28ekg",
  "key19": "5TEQrBGqq9GXnu1cD1evpLZLDdky6dD9jw5L7GUovCWCmwQxi6ZEk5ccZZL4btpfacqxsg4PiB3Xn8FDVWG6VpSA",
  "key20": "RBDAxyKTW9rrD4dosSqTAgCVRvBpu7o93PGEfhxwYiaiPg8oY786ChSQnCxxrt41VJY81DwP2veBJvi3j6rAL5G",
  "key21": "5HfG9JqZXAG9B7pfgDPogNMa89LAbop7guEQxbyQrrxdwxCKx9z2xhJBDtJmjSnszp7C8CAua9fxV2YU2ZAWu5SJ",
  "key22": "2rWJEuNS6QQJvfH4VcyiP6Mw6skEo1Ujbj3YqMbvP3habJ2PS33sR5quNcESEkpTTxnSD898n1M1GyNJxURjiSdK",
  "key23": "2HxJvxeUkFq9BkYuPn9KeJUWBEuYozSiv1he1t9tWN7zGkxg1cS2M54BcgxbXSAy5jSnodrABSoqDdqkkwTxH72k",
  "key24": "T6B64mtDPBgk4uP5s4QA3CCyZxr3XTfV1Ws8N5MNUgCzB9GeFoT91WC2bHWoa4Xhkj5dUo7fLt48F39AK6ZdUmP",
  "key25": "49jFrFKEdBAAGGGMhYHqgo8aY9MNHt1u8WbmWB1rVMY1WV7DbW4WyHdRyP29P6EDpuJN1XHxeY7CxGSmqabw4dM7",
  "key26": "3wRVGKcwptz8XSbm1R7QpPPDJK64YMSV5ZzN1uKyNfhpr6BLZYWPSsHQNLqVPYnVfbDzKsdapzZKYQVTK5BAaKQK",
  "key27": "3GPW5e893A9k6YA12Ae8ywAueGa4UMdswy5oyWEbxhkya7QQqHPtiwDiPVdzehUswhRssCDnEz6duKWJHdvG8HPb",
  "key28": "3S8ATsEGGcCEZhFwJ8ZSYc31HUTmvsA1APZBwpWG2qSWg7WuFVkr6ZK6DbBBX1vHaaiNKiFm3MMp2ebus7tHHCrX",
  "key29": "5sXaKJiESwsQQ4suKTuoxPamAQugYaf2VqCAJaiZm8pzuZSDmKpVbLkXo611AJQtDzS4d1itcKbFP9RBu87Asg9",
  "key30": "4ZXDs3A3dD2YBuDj9WeXE7hqo6HiiBTeebQni3dSQzj2HLCcsSRKLNrK89L5x2apAgofMYPxVBsZXSNFrEhzaw73",
  "key31": "3FdtVTBtZCKiGipEBKTRUe1VHR1Q81UHJdQrCdvQbprUtbyawGMjHvviBBckgKHyTzg4jAnXbqQtYDMThrmrMCQ9",
  "key32": "2naVJCNKGprbiCfP9rTzejdbc7ES4iGFo9KSYL1R7D3QCVGf1Gj4WsgWroKKwzCM34KKZFCq4qDTH8EYxJgYbBj4",
  "key33": "4C2hQK4bdcmqKojVSFsvLv8Mmsk8JwXHZiop4wVifCmX3qXyAnc8fGrvY6rfrQsn5RaPT75dXoQLwv7a2QTbSMnx",
  "key34": "7zvBMKSfCCN8FHjNncfc4RXLkoJhKhLLjcc3EGER1xDZZDDXfEWspxzrmxsgif3ZKm3CRHGtoUDXQgD55DRYVkG",
  "key35": "3uzCkpN5kfDEgahgypd5YFB8eahFF5zW8mKUCTxBuvidRNzPuExsFxSJ7uqyqBaBxKbj7tVMSXyT5Ync5Ajq7hyx"
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
