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
    "3kkWznPDkQJyxWGBniT9rkFEw8dXhhybZFvqWZj6RKcrLbr1WnFo5YvXt4rfbN3TqMQfyWbgyPRor6ftUPKDzFQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkiMNY2hhSqcRxyE3tcv8GNKbYEXbrYMZP2wBPWcbciBR9VnWH8C3PKjmhxTSuJKjEa2nZH4SKmuqpz1V8C6uYi",
  "key1": "YqGfqaxBeGVsAtaJzQbnTkgC7tc8Sgv6q77JaqdiTsii8mibrn4fjZfepe3buH9Lsr8LzMgvSD41UutyRdhSw6r",
  "key2": "2iMYEwxiFeigNYQa9mu99NtpFjwHgCiqjrT3F8KhKDXFK4rJ2giLRaE8J3EM96VNWxGqChcUhK5eNAoe4XM66szg",
  "key3": "44CzywuQQC5VK4B9pQyqRZi8Tkzf1WuZ4nKAuz74JC9tN7PUpkMYFiYupkLEmLAFzaQEPdhRfxythSfpXy7TTkyR",
  "key4": "ayqKvL8WkRpJ99rwSW51DCNGXYCNqTNuMUcU22QBYrZvigx8ZTBKmXE1ZXHJQhAPHRBMb3hmNnVqsa2XD49R4y3",
  "key5": "2u11vxgvCbi8Fs729NEYDK5Mce1fH4M5KRW7BNAky7goB7M1Wm6BmX2kcvjQnTB79YnQgFKzi2orRwdotxoagHFH",
  "key6": "3x4tbXLRpCySsghvyFR7ifQ4YNH6jqHz8gWqpU2nVUQ7EMeLF7ZpHPEL7H1SAkZBu5xmrHSLE65di9XCUiSKersp",
  "key7": "8LhvoD8pyVgY3MY792GnfCvbEgc9ykAcTDZy6zwMbAbnv4N5jHA2uxQVrfCcCTxp7gkrD3o7QBpUvquLBUNVzLw",
  "key8": "3DfzQEYf9sU9ZcKgXkY6a7Dp3KYN5oSM6gGAuwveMCjdsYRwabuRDyfxjmVZ97ajbYiRnhWgSrL2ahwBTkzd3goe",
  "key9": "3h9JCJTwcEpdLYcqjBgP3hocaWZ8xFv8JhtTa6VwwG39DaA6DLXCjbWJ2UkW9UdwPaEya4Wbi7721zJBtFNz6SPP",
  "key10": "3CtHN6Yga89itJNz8uypKUjNW6CRd1gRb1S7rcbaDnDscxojVXQTikFKfCxUdmGG3Rb5vHocZYRK1VTNmR47Mrsh",
  "key11": "4AnuDK8k1jo1w5tCLvkBHYddQQmVhvrWVBQdNui4Hj8ju5v4XcNv6ynfGS99S1UdNT9jWG7UZSg8BRNffLrrxPHa",
  "key12": "4BQEF1WcGZuuioJVz7N9Lp5a9ykHmks2tXqSLgDtwwp3LPBX2kNERHHR6u6A66b3Z5eE35vMyGbpdSdPV5pNGZRg",
  "key13": "G1rpnZ9PACn6JJetiKvs4XMypDr3n7awcLNrUEHnVURW8btvFWEdW6vPT854Uq1kXtqwsD1sranQevSMn1bowg9",
  "key14": "4Ca3BVWckVuMKghjKytQRxtnPKYqz2QwnZZiBtBmEvH3ahbZdLzecqijAPHGEntPcUyGCLCaiHmRn2RjPRszny8W",
  "key15": "395oG2UMDSS7fzDoJPA13VNioSzV7xrPWQ17oGGUe997kKrDGtXzg5xrquxT9nrWLd4PDYEg8hz4cDk8fbuvQGCH",
  "key16": "5RcyRdLrxQk5ZuRRtxDQkADmGwff3R5zPmDTBTrkwWPDEGtBDDof4cW3jYejEzA6vrVDbkhbLXkxySQZ3HFav3mA",
  "key17": "3LGH9n9SCSmvkutiZiBddfWN8GdiAJqcPKzVjqN6ndqcc69uHdBhKpPjuqiQDwRiyHbRXySM7Ag7B2dYFVrS6LBu",
  "key18": "31tmSa24eyrkFHV5Hmmoes3Ur2cHJoa2TUwYntfivwwHFYFUcpor6FazFCdGuDP9vBexHnVvEQnNJdHFM8VD15rQ",
  "key19": "4NZg5EzVb43J6gmRc2yKUQbs79DkoUS8e7N13Wt5SvaBf3qZumxhQwB4fJvK16z2RQtmPoLDt9tLtQvNEoohDQor",
  "key20": "3ym7Qd51fHM7WLNxGCrRxXKDEt4eLeqtaSt2mDvhvzMiZLTBmXcJXjo92phmh2fvMMZ2SvURYVDFwCSBAD1bKkU2",
  "key21": "3SS5otqjpbzrwuSymFw26qaMwtzuSU4T8ec4Us4XTeZ5nvDcqU1GuDBamrQknpZpyhbgR1T4zK9VaRVuCnwQck8H",
  "key22": "44jfhhd1Fx6Y2GxgS1uTMxPNvCvdmDU7rLb1XE8yazXht8ckFVwUJbGPedeTYTLjhvJUYxVabzm68bpChtoucab",
  "key23": "2roerQrhnWZH6Bo1etR48ZsK9CKVhAqscbtP6fNymRjT86wEef3oFQ7FESZiNqQNsy5wf4BLy92NXLVxPTcCAKpG",
  "key24": "viHArspBq3e9xJ4S8i5Xerz7KucwCwNg8N4SJkXxAKLW7ncBGszeQ8Yd6SyUuzcMkbGZHRQujPMLGwL4S2nFZvK",
  "key25": "5Tr89zGk5UC6pvzosXNyNnYC4rqjgBiMwctPzjDciS7aRPEQPgrLdehSTCYhBiqDrZHPrKjcj7dhVsRzbvpNAqep",
  "key26": "jXkRzqivmHBP8ePYtY9EACrNRAXeuQ4MB6xFJYi5do26zudvC9xp87sAdvM4bjc3DaC43u8tDidKdnL74SSDsXm",
  "key27": "vGVXqWhtAXoJ6uK7jyefCXHaLirJWRRwnUocYohTgQN8GxeG7ZgdGgk6eFuU31VGUgXf6JnvyLYpa1txj7VocKK",
  "key28": "5y77dZqviL6n9E45ryo1ia2vrwMChsKZCHVarmuBEtk2Jb694YyDcAKAXspu1dk5GNrRg4oMGVqu9af4d7qqWGP9",
  "key29": "3V8iotmt2CRvFj5CMQv1pAKXw649B1Gg5nwqCC3wB7MfKCDEZQcUQHE6CuQ6sEYg8JEwai4yuyoa5NTA2iqKrPFy",
  "key30": "2wtEQFqqwe8ZzAKFGnKkHs7u7Aq9YWrJyekF8d8BHTuKmuDnbvvS5pJjeEpEe1DP8hbr7Jag8TUwfs9mw1rF3wGj",
  "key31": "5kbUoKShnumiNai75WZNNxqakguxGLdnbGD4YiSfD5P2gTC3ymYnMu1AKAze99DkiatCyyWnLD1jLKmVbRgvbEsG",
  "key32": "g5c2mz84DdZcPNqHAgS6bY7oJ1HABUDhF6574ueQS8XfFq1N7CoKPLmeNZTSMu3xGBbmAk9AMKh7RvUUME8LaSh",
  "key33": "4mKf9tyrkGrro4G7TDkeRcMyoFLrXz5kq52AYJZMfmUYhbHseoqci2q3MKXTw2Z1wr85EfTdRSfMWEB4Pom7fi1A",
  "key34": "32REaSKeTS4MNv13Qk2YmbjaJnfT8GWpkoebsL2Taa2BLTXwHCPCFB9ztVT2D9N3cwYeuQYkTAg8LDxj7Gch8TG",
  "key35": "4o49oMfZ4MFenG5Erspd439eUYFh4ktMT56AtvehknL8J3otz8Ta43aP7S7iuJKBNgbLhuxY6teuXmznzjVv4jDY",
  "key36": "UMzMp4gkkHvaS3dE4pVifATUE1Gmc58RRUqf3mPDJ6c41YCA6qbUh6ymxvrpLgvNmMv6nYQ6Gc3zQVQ86VBb7RS",
  "key37": "wVWMcgax1GtKPvozJGGm4gr3p3HvcHz7RgVSsf7CBU19T8Sdvxhmf93QSXfBntRWmDbf84Hy8Et8ZbuPoUPPTHq",
  "key38": "2jE7kqkir9XQK498zfL5DLkv3ub39b69s4Rmdee3NjvebUdBnE1MTXChc2j9eYucaTdc1wSMRiFwmWuwRvAbKhpR",
  "key39": "5v9bQHXwvQQwgtRTsJ1fVjUz3K4wvVnRXZLVxJZuUGEV5uy14ZZXELHRB6z75V3RYGTR1nEnZdZmwBuGKevp8hNn",
  "key40": "2SJFLF3zy8YDyi7y9TpVtzb9h8yMyWP6Zsp7wtjc7EttV4ghTQEFD8ucoP4pqRDaomSpdQBqDgsxsDtWg4HjyTz7",
  "key41": "QsyyAgNj3puq5bDLpyne6gUKAuupBmeX8PxPpUKR9uWcgsCVGgf4v8j8SrY6BCiizpsZotpHjjW6Lro296R5V65",
  "key42": "2nsno3PYs1LGEdYVXJC9kYnKBFjFj3uQQHwJByEEGd7m37fa8Kaj9oEs7LmS7cug3arThqSsmkuvYSLCjKmEZHVW",
  "key43": "XZbp1LFpKDse4TajDLDmx3HfKGyaRHPqYsWbuKd3zy5JKgYckD9T6hQfvMzAS2P1fhrWkHPR8HvKzgpSzsq7phA",
  "key44": "3PAhwtCkNCGe5w5WGTt3zzJVwGnKWZmdJnkCZbVSYBq6XHMTg6rVJG5BGmcDW2k7NA2yMqu7az85Gt2iV5iyhmAi"
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
