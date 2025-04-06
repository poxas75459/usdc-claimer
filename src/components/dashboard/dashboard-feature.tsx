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
    "35xRP96ZTwdGtaRNosU2e6Hs8HqkFcDZCxmFu2nQg1k58aCLAHmg859jLyVB9JiXiwKzeJQmHUNqdUFSk8B8AC9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34URqNMLMsFx6XTVX5Fwt4mth53ZPQ4aN5HRdU7RAA9j72A3QZduKD5tup1wJTHo2dzP6VFnajSijaWceL3DE9hQ",
  "key1": "2KmsaRRDtMjEqvN2e7vyhUbcMRrDXcGrCAD5Jx1wYwkbQJRWAjJjFizpkTaNgvU71YeP6gLbzCp1Fvivahds9xf3",
  "key2": "4ead7h9P9tXJGH7rA5z11rK2kXMecHYyidHfwyRjGwwhmGRQt5w5acHgYYjbm3gL5mvDsuHWSvaviTDbYBduGNpK",
  "key3": "bAYAgswUU2oks6uoemqatfHST7aLgchxfvuMtfJRMhBFJ3u6o7pA9VxxWzKodPFCHNSHMoeoEVfBX5KoSqsyX8G",
  "key4": "4R2NH65ShpMsdukYE3MK1xuGjrmmiKWbe4eLKGk3XeyEHKB7q7wUzPu7oXAxVFkNzkmoiH1VuArX3XLu7qsjKU9G",
  "key5": "5KSJZFWEi1cZFv5h78wN7xWG8Z8wZPUs5CEPsR6GKQUwNdhPhr4LLGK9Y4Y2wPJEN3bBwyrWQmj4Z6Fpc9hNJfan",
  "key6": "4ebKQVbkCfy9sZHhgaZp5Fxy1nRiWobTx72eBzNkxwAzan9f7oRjAjG1AJxGMCJG9BCoS7PxPMKsAFoDbiM49Kat",
  "key7": "3dRKbf9UwwvtNfpfYuFYwvxYNkEq4SK9xpWVmntv7k6un4ihuuvMgBtWPU7PqpbFp8b5yfXKbku7zXhBjbZAz23E",
  "key8": "2Sa9CSDFUaWAiVqHdCbBnuUKgghpHJ1ViUr8Zwu28TQPB8S7rquMpuyQHZWG7LY5VmRFGkXyQk2LXiYGhinqt2Lz",
  "key9": "8ehZxQnigeGCgq6dHj8cYm8RJ9NDH4xdDTctwkZLgDpsGcYh7jKcHGCJJrpCFS7tqAyNdMx5ToQ4Q5r9KEgbij5",
  "key10": "4LG8EdSkg79aaFrETkKhBQ7fyYgmq9o95GeaHRATN6E8UijXUyJhMSTa7d63xyu494WdiTuFbHGL87fhmtibvhgG",
  "key11": "9ojPkLAJMhAjRHB1PLuuQ5VbaaJ7m7LfeLrJsAEwbw9tmZvwGvTEwYv7eMLDDp97mBDzBL8kuD398eUczLrEC8E",
  "key12": "5Hv7nvLrQmzPPpisy4ysZkFpRTE8UWNUGQqHgx5Lj16zNGetC8nVs9XbvmZh1xP9h3Y5wM1SFPxZp28cYxVgp1Z6",
  "key13": "5rND9AfaUquRs7iZYRAzx2pwfZ5gJBCqVBZcxvaUiNmZ8r2sbzxjM1ocWWPw2HFuNXyGKJQDJUr1cmga3xo5h658",
  "key14": "47V1JQaQEfp7Y7ER3hEkbQg4qq7KeMzGEBbvP6QD6iGz4sQ74XWntqKpoChSjsVkgMGduFo7gh9iQwHTYHUgee3p",
  "key15": "26w3mfiHxmWs88zFJbA7fpWj8ZN9wWZmahxzmwEXzWMxN9Qq9i41djFtPmQb7jVT7WGQEQyBY5Lys4cKZVc254vR",
  "key16": "55FuRB2wrouagQhVecogcLjYRVEdhjijLCx6a4dCXub7YJLXFDyEhdShjkrWW3WP75g64fuDCqfzKtDBKz2TBY55",
  "key17": "3T9NFTWWesb6KVKvnvYjysb5HU9rFqJvbbodboAVoj1kb837qhAJtL476YTkQzm8n9yuWpUn5MJatM7A6gS8vAAC",
  "key18": "2RrTj3GMnrJC72RUied6kSjaei2CunFSwwkWmzDNHdkegAUosvLxF7FDq9uUcxHhuwuaJknAsZq51TJPaSSSuvNa",
  "key19": "v7acBQyrZFC7v67szQE1y5TFQ4buZENfv4K7RcfeknkHqK9yhrA2ZVYdC7xDdfwikckkpevXhYGwNo7WZScpsWZ",
  "key20": "3azv4V12CBt2DS19wbVhY14cD4cr73mrJihFJQy5MGsRZF3zfuYegJpFgVhhwUNbhx6kPWTydyiKtGJo5ML1z1V4",
  "key21": "5KhozYPenGgoPeje41WKhujbUMQ93tsNhwMrBtLsD3UE3i6F22hcwobBX68i72MVSFiwFEwJvCgxQKWyLJdLEpgx",
  "key22": "4bPvhV4rL1jcv5mQngHMUqs44Qtb8U9MmBHKEdbjGZUya494KS9A2duh8WdYcue3Rs4upg22Sp1CwCcxvT3FiJJp",
  "key23": "3Z6fewQ9RJXuDt7ymGFH62DSygjnwwCS3JW1krkmfy4oL6f6okevy6xvMnd1miKE2GsqHML3vCEHNGWtKpmHxdGr",
  "key24": "2y1f2dc4i1mV4t6JhM89c7R4oVmQreyifVeKf9zC1fSJkQkC62C97WmW7hvNxKgCNyTwEMtoCmRyudQz87Y5UCW4",
  "key25": "4kbALuqAaowLZaSHjcCpNEvwRBHVZUSPHA6XGGRRc2auFe3BNs2SC8x5zL13Xvi5CCBebukNwCrf4He7QNz7mBWV",
  "key26": "3NKcmw4MNNLFMjEsuD96X57aLDk4wPWMXhrk7TTeSVzqhgqMXBbP17Sr5xPrF2VDQQhMgDzbu4Z4jL268AJ4Xf3Y",
  "key27": "43BW1tpJ4iFoZGdr6VFzjMJUwLJxcrZynXwW6qarKYnUAfhVkx1TqufAo8RZcf7MeiuXhaU5yWF1xvBpcxZCZggE",
  "key28": "35jQc5vuHuv2xXUQAJtHu7H4w9iUE1JzQLEYBywyzHFC6ZGcu931ZkX1XyoCpaW1ZTqaahmfEaHCPawvoubDvm24",
  "key29": "2eR1w3QF5H9vJd5sPCf3a5ZmtqNNDp1ByetXSPeBpm6Wrwtxkr3yEAk7ED4gL4en6MFXd4zKiznQcrR3FZBss5aL"
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
