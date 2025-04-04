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
    "3R8z8TGUChuJx9oi4JUdQBMwmbyBTUJ9BAPJsB4ESLfZpzNzy6vWxwhx5TgGLTpMKo5sycF2uaQ3Z8Z18Yw6ERzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEmMGCvo9CdXL8oCn8mmxWfg7PQGTbWx7MHYvpyDrguWBTnms6sXj49ChZAkksdeLBBhsWL8riw2qmYcu9bm4pv",
  "key1": "4kM7U7nEYrdH9WnhvCw8mppjS5QcMrX6eBFq1LyosDhSRoY2ZvZ85f4isYPf81t2QXA62Pv8LbfjNcL5wFczeNi3",
  "key2": "2WkNJjkAV6GNURE84mnJUnMtbBKKaZosoZXTU6jRadoiSyGjoX1t5PjEUwsGy7m7Vupb5X7wEMoQfyXAHwYqm9HM",
  "key3": "3qMsbYN1T716wTBwAa6rVfSB43LLg53sBVqnetJ7WCcfT4PphdHJqjtDiJfqZQXauHStgdyr3f6HhRdwxj422Dnr",
  "key4": "24qekLHngAWHypnyL87WjZXLfCtgwni2rr1umyFroM1dFtHHKYXSSf75UMVotjffwGVvrMLTPPbKBRs8xxa19AdS",
  "key5": "5HNKaQJcgiYRcdMCgornhdAFcnqTAt56yssagUNnm4DM4Dd8CPoRocPBwvBQp6sahheeKmSYDYY4KMmbdpuWGY3X",
  "key6": "3q59aGkCM5wxp6oJFB55CG2NqNZd2qXoZVm7N9Y8pL2S7Kttz3TKccvMJYD49kzjeDW3bD8JeKFGFP3BTwtTzUjq",
  "key7": "4nUdKQcu8QHMkkWrxayTWfn2fNWHhnnEWRrnfhxkpPx7yR7bm1mN1oVkUx991wKTdukn3nu2C8WDFS8V4FDQmRtR",
  "key8": "3drrcpj3WNH1XMd6rEX6ueDPJRCWUcvMmSuAdaBBFsjS8d3V4SAz9XJfoKjqkAVB9ce2sNmQoW7svHAffLMyXgUe",
  "key9": "2e5z8A3iUGfyYrGvHeQtPiW4J6NXwhPtEEiuHJ2msk6D9b7JT7qKiv2ZmzJz8mPzxiwWxhv61ToWd54xF8Kneki8",
  "key10": "62w2TSSVDKdBcRBEFrBtFKYgoWwJwQkSWozT5vEyU1RU7orSJSZwhVzNW3vqpSnFRAds1D2yGQ8KQMLNeLMzCJPn",
  "key11": "5QbjL3KGgT7hvDbvstrCT9Vcoztdew2MczFcUvvRASZKrJ16E15iMBYYTXyGHG4YzCQrUod7fMJMqy8oaEUiGTda",
  "key12": "2FAGUt8ucHnQdLqQwL8X6PiTbqtEWrECzjPrbjDTGjC3xLmZffnHvnUJdSQ9gd5Q2amLg1LLxHtbraLuji5mbE1o",
  "key13": "5cbnierwjV6KTDKFqiG5MA6w2VTzpgBzug4fSYkwx5hJZCF4dFDcEK9tToxs2iSJXM8A3yZMBa57TJrtqk9VUG1k",
  "key14": "KrMVm7F3ELdQxmqFu2Po91ev8fsGpUm6WcT2z4WgbmZECtEdX2FQ5TkWRZeVSCC3t4WS1ZnZ9CkvdcBeYYFrs9v",
  "key15": "3rz731tp66uASJEGFbs9ujHbSCb91Dvh9UN6SxPxriVayhedjnKyQiF8vUJc2ntvMJm6r4bbKjHVFkqNujVqsyg9",
  "key16": "4fAFX9r6QrC3CZosqeGXJQgA5W74BREjZhVP8j6P5LSDeSwResvMLrCU3szx5F23VrGwM1SVLbQSrVbETSVYh4bs",
  "key17": "GDgV2ddciNjrNgwqX3aC8ZYP81W19wqLn5gFgsywuMEpWmmehDzqFHvft6FMe46w7vLY2stRGbcBXW8BVDuSFzC",
  "key18": "63EGAHUboP7Y9hdFYCfABrz63o32qHh6mKvFf38Ga4CnRsyhyxKgtdLWpFMg6Dv4Qs2i1HePqjzdTiJxMycPyavh",
  "key19": "ebBi26sKnefRPbdYLoTgWau3ry4Cve3zVkZEsUCU2wJWuCqcj5No2dpaamVekVWwdrgtEHGZAGGRtHiGgw9YR61",
  "key20": "5uvxyMSSWJ2GPzVdFYuNhVfTbp21vDWNEWbmwJdAA2Zx2QNyutJPyQDWEhMxeyE1LWPtpJjXfqLGnj62b2yv5vp",
  "key21": "kHNiMqYogxTYW6qjeTVTySWYvzgikecbvjQqspvLYhJeEbuUUcfd44YApQRo4gqRVLSdY55QjFdUaV6RAe23WmY",
  "key22": "3g9wRs424xeSp2Kuji3cuL2q3M7bj6p7fQZNmfmivhNY1WT5ipwkwBi1zVTXFdLSz9AaCSkVXkNjJH4oE42915X2",
  "key23": "4G9mKM832u6EFtTaHKw8f2n5NTcsEqCwPUCkETsA8Gpjqe3pjY2SDag9q6UacGLw6SmTQeKdvzCB5PPzRryTJaV1",
  "key24": "2Mw5ybmtn9LvGnYWajHAtnQBFRjDvmFj7STFhCHR4vQVQ6WRBvaJrUN5e7Fc8rd4GS4W52FViNxnMawLqvazoJkG",
  "key25": "3AvwRgboWRRFeYwQCVQcTdmBfMiWvjMPTDgAnTiZirUtRy87bLP5fjs26cLxiffRNFYfEpjYkwnwLVhJzny5qwu1",
  "key26": "4ohiQQGrSkHwbCQje69sCNn4XB9vSyJhajEqimYUai3LEzBqvGE5PPyLnMduRQaP4itCgdoqeL55Rg8c1oqq6ZiZ",
  "key27": "3gckGcYAUzHkEaCbLAV4Jun1UpZwXjdHwFiwJBNgfJrdGv4faY2RGPDBJV7NGhbftBEVZYw1vozmeggTFwUGMFbx",
  "key28": "4A9URw7CQNh2aFdYJdbwCazw97i9uFPDj4kGY4YcFUVqkxjsDGbghfnCD35GPA7p1hupZtiN7yPQKX3tkDhAjHgW",
  "key29": "5aNh5wzChcmKs1yDjY3HmSh8ohqzRS99Z5qHEHumKf8M4oDCzYF8aJuuu1tKEB4j3k43ZsxhYWMPdqUna5cpztwZ",
  "key30": "3CYXYnsZWaqgRnikNU7a1zvbbqxUhqNj4r7UbHqdfrYYzJZAHpt5B2wNapVtjaBEJTvHfAxCj9Kk8vxve9Bb5cC2",
  "key31": "5ZSsXT5hvyGhbxT4CBxBTry39MpVSyrCQ6u6Y9mdsKFkKCSxdgNXjbKVi5edjnyxXYH9rofGASDCEYaWz4P5zMTe",
  "key32": "AhVQ5j2QVbe7Z6wwj6ULDGEa3z7hvg6RimH4bfKvgC8F4qXjEWuS2amWqvAfYvP3BWcYm6nYhrxBC53b9AaoW1h",
  "key33": "2bUmFLgw8bpTExF3J7XV75JYxcqjoGTqXHSJTuykkDaZH9ndFCgk2VZr8fG2HrbBotbu3ZcA25651UqCPFD1wL5z",
  "key34": "4kpcrGJSr7vt2mxTnYezkoCxosEqmf8vJBsaX2ssjaW3F97FFrA12xwNjpCH1Fqgr1BJMic5pp9mM2XyygvXmSve",
  "key35": "21hXHFfYKfM5umMufkhSycRBBALMAQwsLtWS7UTZm4tLdofzdmxZycVM6sMA41P7VdABRN8YezDPX1ihQzGFAeZs",
  "key36": "3AeA17X2VGXM5t7iWVLKfpsCsBkXXiLibc4smjDtFmWCrTiwW1JNE9NPzBy8cS9ANxR3vBAcmanmbxh1rdZRdrN5",
  "key37": "1LxrE7AuZGEN4w6FVB71wF5J23z7o1uUTqqEFLhRf5wE65G8nc3sbshevNeb5hpgxm9TBBqf1YfCpubwEhDQj3m",
  "key38": "5yX7Fj1t58XWG1dJtFqeaRJsbZszAEFpENbF9L7gcgWi9XBgiiURA5kbkbw9d19w3et957m8MigpbBpUex38SPSg",
  "key39": "59NsRb3th4NNB8gRmqXWsMch3gyqUhxttm4JuZCWTGHdxQCtJ9tgxKuG2tVg9tPXuTZLBgaCLRbNAadM6N1p7udu",
  "key40": "4atwkQ23gsa2i4mVyyCbg4YkNndBfii7g2mxHWAnVfXVLiBuNnTYPx5kniJeiAiWW4pViEVzY9Wdcbsod7BfX8Yc",
  "key41": "cfAThdSzYGWmgW4kfsWgZ5mUbFtAsRPzW1GEPo35VcvEMu75XXGMayJn4VLsL44heLV2jdjZPY6QmrXsqFDTpXS",
  "key42": "2bFvP2xEHWgmuuwJPNzMne5ASKYdFR5jijaezZG8Jw7k9tFtfmjH3AdtxoYvP3mP5fUd9GAmDAkoDsHnsoBvXwfR",
  "key43": "5V5YJZ598AutYaoYW5hb7pVzpjPAEKEhdK9jhakYLo8t2jZw3QhCxbQq1PHu1ErMYq5qiZgLziTc1xSLL2SiYt2Q",
  "key44": "4Ar2zU6vnorvYvWTwe9wTW3RTLVCpyuRzkpSZpmka6VL3ENmkZBNrExDJMPVGjtfyrXCaJ6XakY8E2xfZRRGfc92",
  "key45": "4n7wsu3faYPqEzPok2iu9cdXPaH1HzwiuStWWyGUszdjsydPCUum1ozUMWtNjHUPkqPmfHhGcFqXRHPkj1NpHb3s",
  "key46": "2HtSb6pbf7TZb6LgtFdZcBQEPuEVahJ9cGcQ6VJJK1fC6yXgG6uV5ru76B9FY1zkJjhV752FKmeGa1HpyxXEeejT"
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
