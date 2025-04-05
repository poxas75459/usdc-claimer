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
    "3kd3Mb3rhVYfSznVeGp3JiTa1K6FMQVjczmdwydWQSid8wEwDgebdyD5itJf69XPVmJ83RN5cWtYRhyZJHx179Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpVUTdvrDBKwVxkFtzkKiVTXyKMBPCqkFRQFQLfDswjrn991TaT5ueLodMubhgmj12EXNrSiazsWh8tuG4S4n6j",
  "key1": "4D6AnJZjSuL3c72KV5Eeg8pJ4T9MW6fN7kvTTz1Sk25VnySphxjuQg8D1VmrQ753KuFC4NksGkPoHdc3E9qLAf1k",
  "key2": "4fWWqJJAV4wwQVpctEBA9T5ZbxV2a2NvmBAogkxpXHvrS9avENAin1GY91NZTGUXM1HPysFA73id8ozTvykvFUfo",
  "key3": "CF2yLPkaBWhKCE9qzeA275ySHVCwD4ESfTNfiR9mmBJbSfXts9mAzayUoVqN6WnaWEFbJbS2ztiMg8Nd8j8mAYe",
  "key4": "2apsCayfpribcdGVXzXu6nNMvyVVgC3bTcj58SMc5g1LySS48vBTbcXZtbdwfakV7FaNn7ahjEz6uyE8u615a8GD",
  "key5": "4sB3VNdSfuti1s3SGBgqEaXoXBnLRmTdub4ScsW6id7hcp73B3ULjD1jixNCvWFPDuZeCcEU7rmF5GbrA1ZLqJs2",
  "key6": "3aUBUDuKQWpCWd7i9PrqYRTmWdmhhqt71JmMaqxLtYBMmqntZawrJ7eUqjzmapvpHbTR8XaNsAGbK3t6HjEWUfqd",
  "key7": "43v55g8hgWJ3QbN28ex6nFRMDDhJQ7KbrSXzcYfKKWmQqqFLgu7zNgdXoCzLa2JrQqE2jLr11kqP5mUCzZ3owr19",
  "key8": "tLiUtJxGdifXVUZYMKkkqz7E8C722UC1MVwsHvr79pPCuKW7yW846T8MTKZDfcQr5BQ1mhUnSLn451JWKjRrfJV",
  "key9": "2BaahtbUxzREWURCpapyJqthAXh6VfrZF1w3gWfuuYuZzdHov8EaZQyFo3VjHfDkhonWx2pMjPtRqEpuevMoKJxp",
  "key10": "4Vpb8TfTQX6vWW6ea1G3wfm3shK35XvaAM8p8S8BqLWXPYdW5bvWnJkeyRYwZAdrZ2JaGRQh6t8odxV3Ryu81dGv",
  "key11": "49gt7c1ENJHVuxmUWnvMwN1QXBNst1Doy3aQYy8JoHQ8SnUJjJoAEekFQLBgvFj2Pm2JDLeqGfXhHRtZBS1aDpYA",
  "key12": "3byxzkeW8xmfWp6KrJkmpau8ruQ5NTN2ARrZe1wK4Yubc3TSBSuVnGq3bfWgEM2dLkbpQJmN8iANcoVSoYAb6kZR",
  "key13": "32iSVzi9An6iEwZr7mxqpwuR3kXassq9Nj2N5qGk31Y9P7oeZNsXmEMWGS14ZDPuvuZndviukv3V3paxDvYK7Jq9",
  "key14": "5iot8uoRhW5t3r4kroKyjUVjsBPx69nk3dAWTAeBuoQFhvKnewmpLX9hSB3H4pAqxRyL4htbQsdfeu17L83j43ec",
  "key15": "5KVQrsQyfkCSTdWMMtHG35E8VwoZ6XEV8PjktJyZVtrfmFCFvbpxxtvNhVLjyE6qquxaddvMe2mDdqi3ZDKbYkjW",
  "key16": "wnoBfCg8V7LLETTRf3zBb7td7XUHBJyZoxvPQnhDbTjHzvj1Ty764FofeLoPM3jLvR3nTRCs7ebmqfDF6GBoYG3",
  "key17": "2imY3cmGhWEUr1YucoGB41aLDVoCh8c3jbcyCXKVg5FBGKaAy9gtRLygNsgyKSbk4JhvUBfc2qAruJ7yAFJH9Xg5",
  "key18": "5XQCdwAQVeXgVjvzGCRBakk7WhK6NPnipL8kqqbt1B1834R69rN64DMxASTjnrPkPuSbkTTSu2XRBwAEut9UYKpC",
  "key19": "39aYZcEGSUvWZntKVSvC67DF4Fhf4iHJGG3Xh8kzTnn3VbdhQkwHvYKLwEFgot81Cna2BrxT8G6nqsttQRJFvPT2",
  "key20": "o246ksiZVKvNFKPMXeKK8PCPNi1SRPUfUvhxbvhS14YLYMmok7SKDg8dQWTV6Zj8oBUGDJ6CRMvB7avMpnxGpTk",
  "key21": "2ZcfRPriJhWNeVFr4qMevdR1eFGpzT5hQt5AKpFpDqJfebCGuARsK9t1NERHWkxD3V4cYEihFi2wvnDbZzG9H6wf",
  "key22": "43Xv6NV73XgFtqBQGBPvoi1yWVmxtMvg18UBGNc6a2h3kKVi7GUopQgpjTt9ohf16SA8dyBCYHJiymfUnpuSDRmD",
  "key23": "3TSU4dA1HcpHTNj1qttVVyhZ5NMqfk1ZUGewaRJYEe4FLTULVpS5W19PumAXDVuMvkwrhnAjCq4CQeRgyUzsedfW",
  "key24": "ULGymC6wavZDUhyQfH4P1dpaM9U2nXjvTzcKdjHbtiwT7AvjvV7eLUq5RLAcZFUh4PcprXgCXJDDwBFG7TrNLam",
  "key25": "39tVQPKfRMvUdrVK7Km5h6J7vJvFJQbWkTKxvwx9UeA1dCM2pDWacELxPmtUZZ689saWLXmZdi38cm8ThRKLmZmt",
  "key26": "voSm9wsDJF3JYL316YuWJoEKoS1Qwfws2sD4NdugdwHUyJFNkpNP7j8KhU1vABrz6E35DRZotp1LxvUaU9Ka3vS",
  "key27": "41MgRYpqWMrz1Dd4NQnzueKzsLCpecU1pEacctqdom8SQGjxrDGQgLNyS9gfv4gxq7JnVtEwXLsVThWsRjgwXKt1",
  "key28": "5SdDyNQgdpzw91ywKbeHHSb2TfWU7ah5hMugdRTGHPRqpq7ZUAjnEa4iQBGDgbaHAjAjcZY5EKgfDEZxw9rkRAgC",
  "key29": "BAF2DLEDbWL87sUTL1chRf34x3EQHUzSb7jZfcmoPNPn5n9ZAZkErfHrYU1MGKBZTenSTL5EuFv3qP8XU7UMTtL",
  "key30": "3jKEnd7gepFKk8a3xb8mdkGMNGkC1K5vA8qtgiTaMzZBeiwFfWdWEV9CVyo2MiXjy4BDyAhwEUv4cwzF7nEWVYaU",
  "key31": "2voeEaH4GewTmKwnrgb3wT2FTs8Ee2eQrgGXVKKqQKGHaR4GEZZhfRNAGgKhTY68AwmUDcJQe91YbPK3eBs6GHjL",
  "key32": "52ieqEC49xaLVPkQsS5BPGX1T2dLv9kT5ABqdPjhPZucVBJjGvThuwJsLHFRgM6RJZcZt2tE1yK1HcikYUAnma2i",
  "key33": "MZRzy7M1w6ZrJGpVPbXBKCbqhwAh12zSSJzfyAhacQ6Aso4etY71psLYbw56AqCg968eE3MJnj41h4F6eShs8BZ",
  "key34": "N4ZzTVmydoExt45mHtWYjeJUjnqQ83WXtgVqgGe1hYSPVSQPyFZS6oNmQuHqRyGaxaTjTPDzLDmj5Gju91TkL43",
  "key35": "5yon3wdGfFjR4eU1zop5UCqWX664YU5G7rknkGvWAVucDAqFYLJcPT8eUwPjMmEqdxUDLTahkyuqTEBUXmtZiLMJ",
  "key36": "4CKJVpbv8YZZRp9c2hrRRgcj9z78kKxuDVgeh4ZtMocpGduUZcHwSMEVMssfMcGXAwonV6N3J3YMboKfT6WhQRXE"
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
