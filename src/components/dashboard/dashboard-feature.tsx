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
    "4A9p9fhhe8msShHFQwHk55WCFk87PKaPAmi3h2ScGezHLNhjVrj5ERdwDpiN4TSKECmSqFpLZ1GiLyoMxV6u4qvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9KtveCFBftj7wS3cFe36fkHCmAKissxNsbu6MQYYKB6YEsmJP7RCYHhhSWr6jUsG7BJuhVJLgXW1C2jqkJfk5n",
  "key1": "4RNPvpw24fBBiiDDV4naSkfTDrSNqnMF8u2L21jPNjVDP9Ztik8rv1CaESQv6jCpnQTDfQcMsYZHVPSokLJ7ZKk6",
  "key2": "2XQ7SgX2DKaC6qX215XyAXMRTmBPbPdoNHhbBYH4xRGrCqKaAYxPSmqyDuWMFoM9ptPVfZwpMw9oSuSUQ3UiuhXk",
  "key3": "68Ktrvct1owi7YiCXG6ZQKDnmy4tL8MyManqHdLKEZhqtvLkwhzPSqvVYG5MmFNuthALMrcRKvi1UMT4XyThEzi",
  "key4": "5XGzNoGNDV8fR2dtCLwQfX2tQ9mAd8ftTxzUMLDKtWKk5eQwe7yvGzqXUDBpZAfRczfLhSHjRdoRz33xgKpaMUVK",
  "key5": "2jBz6UwsR9kBQ662XuXMiW3EAiXtzZ1MRn54i7wxPED7mTZmLSG6vGzERr2UgwGoX1tkh7EwiKPt9GeUYQZCFWpF",
  "key6": "3HYpf3R44FuogYvtb4N18KkdxUipk7954VBeZqXN3z5w5HDHuaYpBxzimrqsu94HhM9hPWun4meKKWr3wpcamfXV",
  "key7": "3xsqTiPzB6MgkPpoM2JooWV1hQdBAAb9aTzWy2N9apMyiH31xN3wWiNQTUDZPuuKG3xM31o95zkzKhGgRCpeKrnd",
  "key8": "3PiHYqRKFMfMaGMcNxYd24Mb9zPWYq4s76vcNKHvYUboEnPrHi5VotFRUiPWHk3VfAWXWiknptm1G93PSSdQVumW",
  "key9": "4iNjX3aWhPKVFbe3gTJaWigjxgPb8pi7rpercobqb261Akq5UCSZek15fpKXZYFdVVhfgtGEYpEZe2pt7UL5XK9",
  "key10": "5ADVFQxRQ8vTX9LjQcb4Et8YhQddTaTG2iLAhD9dntT8PEpzHTH9L4yCFaH9jCSUBUkDHkAfhKMaDRSLmn9Aum7A",
  "key11": "5ZMChDnY168UJ7NLUcV3LekJW4tdKfge8uAjaBDo8uDHUBu3ZPkcG6V2ompQk1j86T4nvFbv6QsLagh7V7wqgV4",
  "key12": "n8jNU1xoKzKB4SRBU1z4dMcDAFqNppmBEXCwW5d4Qt4yj71EnFt3YS6dgRRGrcetnWojvBa4MacQwXZUMYNHTFd",
  "key13": "3Lsq7J967PxmGPEtEpBZqohkvbQR22SMHMBi9xqq7AUqtsfvyjM87rRvsiyutULgrH8rSDCZ8YCrAzXTsPY5uGJc",
  "key14": "5BV1otXUU9aoEcXKzyRe2N3uDxA4vXza6FfCyYZSaaJ5uyjKmQdknKzLUzS6r7AQUJzcmA2sbMcHQVWXanPVJ6LE",
  "key15": "vyH2qJin6kKkQPCnu6AC6K8eoeKJCzVA6vuh9Sk9MYVaXmjafNwx6huz2ZfPe9PUrZBrv7GcnM4xJd4jQ3Zsqp6",
  "key16": "3vDAkVyQmpwCkexr2tFsM3w3sUhUmvexrQCGw33mDPk5sLLAWMrn5rvMqrWbDzyv6FcpyFfcH3EdUSqn6EtRy7S9",
  "key17": "2J1ifQezVELT5YCyNYib3M2kp2vFQmq2tqP4w7Gz7oHajNjhGHJtPLq4cuicDY3CSevLvuR35vnsRL8ZHN7Go9FP",
  "key18": "4BmYKbq8BJU9H2LC2tLdKY9pyrmyfuWg85QPfXUBL8ftWWW1PmMJt6mVRVhcxBwM6ci1P1C4eSR5sw63wPhfyG8b",
  "key19": "Hw4GYMRYFjR8D2zbFdKZ8r7UXZHBDX7EMv4JM8hsgMd5n511Bn3RrifpL4bhq9LUcKY5ukHckZZHgB1FQFdx8L2",
  "key20": "5egeBCMXHsfynjeixAWjrw3ew1DS7MUzNZaJkQzm3ov3GAvM98WF2WaBv3xE3pp6oTvT2rjnk6M3HpxsLwQaYGa4",
  "key21": "2NumSxfbLeeV7Jkt4YEyXfJWBGXP3riFgixdm5sCRN8Z42jLBgyDLsF9xTEiPHuXKqRddrYHNmXNVsAG8jd1vtp7",
  "key22": "5iVvp9UQDsDUXkYZ5SKkyDfH1tGLEPiWyjZUiuNVhYHdpLm3UVX8guUTzeSEeoiQ1AFnvHDAFPtni4cyUSGQZBaZ",
  "key23": "Ez2VfiMwZ4whjdnQk2UgngZ6tKzVVzVyBniFutAzY3764C499CipyKghWr9QV827mrwQfVaKUa5xSMmV2ZTCNnH",
  "key24": "5cSn4SaR34cS71D3bJrKZzs9XNGJdiGb86TM4DyJyve5JGczZaJyJt3dxGgdinqyXWVmjGEh5dA4JXBmq71KVjQ6",
  "key25": "4c5u7t257DqzcekShMUbbxJffL1VgBG1vKTtQKBmuk83Nofj9yZhrMToj7JFEWYkGsHzfqNKk1tP9QQ9C8yArTz",
  "key26": "3y9hqmNizhKDNMFhBzawxeUeAwavQdP6z3JHdaxBLi5VRLck5jzNUnZtW7dTfjBBYb1GpCfZ9VkWhEjERtH7Dc5g",
  "key27": "2c1roTsPadrKSAhSZzT5qghgtxh2Y7EnKwicqXT1AwdiUBZcuZhPby29xwa5WBPAJibfnbC2UWcTehb7ndx7KmKC",
  "key28": "2ecbveEphHJLdjuRoGyU82SE8kE4iTmfWUt1z4RNNBoSaaPtdP1ivJ71WyHuWF3CcXf9wcw5h7u9JSr2zDMtTxv",
  "key29": "iWxKLumzRFFWSSWi8PvzAATy2a6FM85mb2drr7MagDo7rMd4UY6Mbo2MFM9CpfGUAWTZZjmXCQAstZ7oucopTv3",
  "key30": "3zoJ7dN8U99WekAyindDxY7ZHAWwGpVw8yHTkpYzPmH55Hie3cfc1doPL45ktrZfLoLt3ibi5GrTrpkn3tPCpvpn",
  "key31": "dp38UYXCzPhJpnrXnTYozEfryf4YXBzM82iZTJU6donenxqvA7CGRV3zLpcFziGpdmeexWpTGfkxDzYh7ECaXfb",
  "key32": "65ooCsbpRzfNzxnr5s56rrb9j4etfDruZ6ySPctbuJmRj9fM788NxpfoBSpcwiLHHg2iYhQcVP8982DJmQ5U8t32",
  "key33": "2RBu1gAwnhdgGs1rm7rFrWCeen3zsYbwySNFao4rPtpgqu2fQ1sdy8ErQ1EpSYg1yXFMJu3dy319Qd7TnmCGA8x5",
  "key34": "2jVPEF2gUeeR93Xi2bwympMArqdtKFr8M9pQ7maudYxaHhZcufTcg4ZWfhWkjqUAUJXeozfqRaazHvS8qp1iRyGf",
  "key35": "VksZouKKtE7YdERu2KkRbjQqQUMoaAnhZL6i2ynzcXQywEgcDPrfVGJoGWaeB3cN3kavC1i7in5bM4VY4U3wAKs",
  "key36": "GA7oE2ig7Dc4HJEN8UaVEdSEAjjyHS8CUWfxkSsT4QxuF6EQGFLLqTVNJkMLXPRiQxpXN7zJejueRzfKVQqze7J",
  "key37": "28HNteKX693cMjDGoB5HF4fgCJTjHkqgya3NUSPWqZ3Jkraz391UFZZ58qU6fkKn6WUaNeApkMDMLqvKkKX4w8DC",
  "key38": "51RWHyXrxLeDf2bdh5tGegX2wVdvhAMikUkGQ6WDH6QfBWFwfLVx1xsRf84gwBVNYVULN6K9ueRa47XVWMh9vHXc",
  "key39": "2E7g9qq2n7kLTc9tUNvynJsLW4HcHSePvJc3oFQDFaMf9okCnxM6SuZX8sKS7wRge6Xu3Ei26rCdLDg8smAgULqU",
  "key40": "3Bq5seeG9UFpis6QyNk6kFSPvBCdLrgDXt8Zdxpi5jnxfD2uBq3tRhhideefWLYTocX6qYzXguda4F1rNQ5a9efJ",
  "key41": "2SgxBFH6VXc7arch9ogF5EaDxgjsTz2aPFnJByvqtK7jdseSr6cyT3NnSMKpHs4PwRtLsvA4hWtGTe9p18hx5rfz",
  "key42": "2pmMj4ZpCVC8keJkTUnasnmidGKpXRUDBPx4959BsYbDeXfSaBYDAGRkxK2TEhiJvYi3LthNV7PKcofV4VrUBVAr",
  "key43": "3wAhmTe3S2GBD6YNYtjxFLLayuNQ5n9ei9RRN3piVspj1ufCee6MSWqBQ87NXDBN7YB5UQ6ezrHjUjD93iWLXL6n",
  "key44": "27WoWfFGhYCDWRdqvUaVxHSQofNV4N8o4KbUs3iEbY7BSwftfuTd3e14TUBvbD1FiL5UJSZ6PKHFDXZWnqsWYikd",
  "key45": "3Xy1RNuAKJctuhK79N7ELk8hZXwGDnnma1HSFe56tVhXuWLQ9KTMryqHg2FzW98ULWAbLsSCu27nQLQ1JwanfVAv",
  "key46": "3KqUwW7LP232aLALHGmtetttCaSPYWxP4BGyQb3Cw45373grKRfo6sGEJLbzutRw23vcfcsDJrNHkKJS4VvzMCC2",
  "key47": "7k4T87ife29PbSVyzabzUMX2DMz3v2kLL2i2qjE61vm413Cq7BUaY6BkBvp2LpNx5j11kZtH8q7PkocRCPdnUa9",
  "key48": "5FCiZpFPTMy9zmryCKPfz6v58K7HfdaWgCbMy4cid9DG6vrasQXVhTFXX5FYNdRXH7NoQyyB1kgYFWagmYpDavS2"
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
