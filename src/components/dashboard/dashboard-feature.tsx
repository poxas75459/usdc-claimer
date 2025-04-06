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
    "QRzq2cCsmrmYYBxA442Ef4Bqy8C1R3jhZxFJFbhi551iKH2eBBZctPsfG84PNvS3urXH8H8YY2ibM1NDUM26ERq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcEy3qeDP1Pq7VQiJ5dv6DU3qrWsuFZDTeJpTkG8HsQBQEDwzjk4dRoRCJpfwnzvKnooY6QTtV3P9E8WUopathj",
  "key1": "61VDg67qi56pArhwtcza7xuBJQCfVt7ZgqRieNyN9SEv8fVmy4MAvT5VNPHogui2DbzTYtXCek18Ktf1UavDDyPy",
  "key2": "2pbVKeZjjJhM6AKC7k9TJr2S3mx7o2qBPbXqt7E9WaYnzsc6Nyjb49hSSdJxS58BeVPdC2nsGGnPoQqkGztuHugw",
  "key3": "57xJ8ddiVvSRxr5tNPUyqXxaniWKV4kPQJvVfQYHwwK5BAetXMU2CsQkZMQH8HwXYTq61rpnh9UNjsAcWiC5mwNq",
  "key4": "2r7oGeX9NuG73PVER5VkzyvT2JBudGkS82gkW7c2evHTGBK7LoX5zU6GASgeNwhG4XVQjAgY4uXR75B7SAAv6YY5",
  "key5": "2pJeTmGuAv8rKEigDK4S3TmzzAzYGsbZLPymmB6eQcHoP4YEvuq455hx8VJuWnzXHBwZV1b9BTMBQp28zTZyzfrh",
  "key6": "41BD3tVPXisn7ojTzJoDEajg1X2NwAcnTyD3RLw3jVtSpGCRBdy5GGFUFKkpNHY4hp1LG5M3dyrwKpvwUADE53gq",
  "key7": "KbRJG848KxUBZKkTgrT7siQBAJgJJJouuuuKjTh965twnVkJDPnzYRmsh2kjo53VdW4jvv5b4hPWzPeekTYfkcn",
  "key8": "5u49VpumPfr3LXuNxbjqGfFyo36rMSWdT4kvdHpu1EfCb2dJxDMzPsL58ra2ZNHCVCMBY1A3Vj9xEogH7me7ZeHK",
  "key9": "7LXaTTUoJ9H57gZGWnYeeLkSrEkRmYPgkarzqfbYwFNDfMnMjiTytGxsUDjx9Zp7fr7Ebzamq59qRHqBnxjPfSJ",
  "key10": "4T8UjGiMcP9Rp4mHMfBVbYo2MedWN3WXdjthCk8QxRoav9iubb2T1hZ7i6hGZuyFWBvJan7boWi7SBKtuzYvWGRp",
  "key11": "56XmqFjr7xrX6bhvoLNKfrkJz7wxrivJRazhF3QgZ1Da78MB3UWqjsy7KyBStJE3sVAQ5mLUXFrFjRcpTqKFsA96",
  "key12": "5dveEAMiZ78RYXKGF7NQEfJxtYpu5YaeP5VAYCNxKvqpNow5b1wGjazXmykAHDo2eEfQiDNkfNizf4HTHZf1N7Qd",
  "key13": "23272FNURqFHqgqvNKoyLtaEVe1mPA7UU2c5DMENTbaQBEp6ksJuCvt6Dxpyht23UVHZyJvKWYXeYx5BmCjH6nXu",
  "key14": "4YT9cr53SdqfhyiXewsqYFUGMaHct8o1bh758JRZJBoWXguCMyrZsENENreF4YZ5NYNsTnbcYfHByWv2qNfjQfy2",
  "key15": "4xfo3HnA8ZEVKCPKCDSh6Z7hzQXZEKbG52V7p7KCJswqScuzmyvztUBz4wNV3uPQfGBCnugKRK2dJjgj13JbHvpy",
  "key16": "26hTGuV5Z5wPMfyJwgrtmyCA9SwmF5eP1JyjXueLijdjp3jH3KKzNKnDuKzxPxVXCRdUyibrJnZ5DQcgQCgf6YrP",
  "key17": "5Y6fHxj2iVvGW6A8mwyzZuuxX35Bp1gJQtKVYF9kHhSvamUHvnqsJLZLPUWLveLPkJsQ16Ba5aAC5pWAHL1316UU",
  "key18": "3avBULnQG5pH91o9gww19TgYJCwYZGyFjXLMUQqQ31Wvtm9yAccKYmNkANfwPxMnKkfJuaUrxvA7S7bh3jhW9vtz",
  "key19": "Kqq768HPPW8PUQgK1KuH27ATTADcMan9VRmDXpiVcsXxmzRMpakZ3ceTJcUug755Q5koVBBqHzRXpH39LdWQruk",
  "key20": "2hBhrzxsFuxr83rHVB8bUzxnjMBA4xcfMr9EvZr32ZjUKZsE4Nu2HqecGcxE1cYgfda5VHp85z4oFX6iVqJwQE2Z",
  "key21": "5GgyU72d9LchQLf44L98LLxhjpQSp2MiCxMKxmC3KkqkasgMccTzd6vU8fxNLXHvvPurdUCHA5f4ufk3cRxajWYb",
  "key22": "5EBvrqNBEzn5Vof1jKJ8WQDt3kHdqhRUB5Tv4jYcDwVgGTWBnVQUM1As5jUDPcTttWNErPNSsChznmdYByRpEBax",
  "key23": "oN16C3RyadQMgJ1cqLhcHdwhUG5p6kCUKuZmcmmQ3NqCoewcY1pUWK9ZUvhNGUvepadg9MoHtLiXJUJkTvcaSm6",
  "key24": "jfV1WNs3ZGzP9MTNzPJLoV3XGoDUjGvNqCKjwLJAX6QBPnez4i559JiyMbR1hLbyZCZi4JcKfpQGMPa3p6D1eJz",
  "key25": "32TbK8E6mM8AxKaVeyoXhvF5AVhjDKkYwxBDu58mACUGZecHX6XMZX1hbhRytpeoEet4oWDnDvGbvTZGBXx6Nmqt",
  "key26": "58B6zHWiJdBeF5zuzRsfGBQUL2LgDjvEWXsa6HwkEeWsimvtxXVYWNnA1ZgV9r4T8FTWsn17RubjpjRo3kzTBdQt",
  "key27": "56iXhyYWpcMbN8r28JGPocaVx5pcyRvD8UPC1apkj2uwxPabZJ6chZB8eBUGAteBHM2XBqahHzEy42vMtNtZZHRf",
  "key28": "4wBFKcT5vBo3UDP416EwpNw8zBan8k16AeaJ7qDdm5nCqwNGUT67ihgVHodec45BxnHk6uGud5oxaHXiSPipxeLY",
  "key29": "8pX94Dkc9vxN3qgj6GY85QGBjKTwPtGgqGk96aavcZHRvYq4Yv7V4tb5rvzdctLPvfvozYJfTGwy8PJwv5v6gEz",
  "key30": "2rgnBSFPZQvhdRehZoQcErjAR7n3ovDUhiY4GhHisSnXKW83NwUHJ9mXfnHSwFyv8af8VV4u4mjVaFdr3JLhAQXJ",
  "key31": "35oPq1TPyp3SwRYRM5Jx9qLZKRs9wCorTWkN3Ez8hKU5kmGNPE2ZxXFT4eYRD2FLWFv6t7rQE4k4Z57uz4NpGfy4",
  "key32": "4Jr9fwM7KLqKag5LKXfp8YS8PzB1WZbziKqmq9iVkHrYCNEvdKQNEoWWucSkuQc6GP15yLMWCWYCJv6kn4ys2Ytm",
  "key33": "eLjiE86dPEdJiuRYRe55uyvpx2Pct41ukt62AayqUSRFgaCVrY6oMCy9f8xBtEGPBWWBY6C41RcJFP7e5bNcKY7",
  "key34": "5Xkc9NWA46Kjc5czryP3zfbCExUpx3RoCsUJVvZM5AQGT8TP79Mz2LCvuLcBvpRj8XZju4pmA8FBWzQwCMnKVqwr",
  "key35": "4yraFoxXiwE4Yttt3ZsroQ17dZN7MpAHW6h1KByEo2TSWAMSjoBbXmRSVEMpyFP6egq6ozUJhQiEfiZQfwe7VjsW",
  "key36": "33ZvXT4fk8iAZpRiws8Lb4WBA5q6ZihBc1Sy4KZpz4vSPdKH5Me3xY6Mhgd5f6pKQLgHaKcimUQmMZPXYcrQDf4T",
  "key37": "3hd8W2BeJaJaH5vk5svPj41DATW1jaUtenERgjtmMgFzeeN2zkBxhuSBn1Ey1zgbNfyU6jp4ASPZgnrWbpjVjpfx",
  "key38": "26KmbYEDdkjuMLaUim16rFMGnmV5fHEiSXuJ2Jk7dxEBFTkeEq2vLXdZ5SFZEkKP8661AzjsVDQNEZAnTyPJuvhD",
  "key39": "64shXeqFAhAx3f2Ah8sEjYswHRm4kr7WKe9rjsatXGXEu9qoCbAkrQ8UdGjFybNbrV4cuTAkRBc8MmRU1yKVjMrt",
  "key40": "2yGHD9uXAQnJraAQfruUaJSkYUFPQkdyRrnj2bLru2P4wBL7L64kbcy5FrF85rptiXrTxc7QqvyyXeCJrHJ2X8BN",
  "key41": "5L51HYyKaSMgEUWdiUrRPbex1LHRgxCxKLpYbU87cTQkCBREhkXKnfQi4aoxtjfYhwGHwctiCNncUwMCtrghqSyC"
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
