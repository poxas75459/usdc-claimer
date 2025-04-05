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
    "5YTqMLGZjQWmUwjVKW6zfipWwFVsRW73rbDuDsBPBPwkc6fgywbbsfZ6BYsJG4bJLYVrDnKvX5wXaAVGNYxBWz3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwRc2nENyVEDoANVp15y4kaeAQU31WsboDNfPue8TisrQ6YPFFdhx6BxCmUNzxnynGhVoDJVuLE8XFRe8Dzdaa",
  "key1": "3YEJGm1BcA2vwY8y5uB41jru9Vb33STA4vL2axfEvKGrNmMnpXQKa2sGSd9hnrpJu69xmfyuxsWsH111ysD4FiNF",
  "key2": "2eNQzHuSSsFWymFJqKKzjvUJtL6cHQ96yU14cxRZEFJspRc3MGkQSbmUoC8EDEm9fXQX8ew41yk1N4xqo3dA7TDA",
  "key3": "jZXuZVJfoqRPs14eW1dt6x6ngsFoKjhJJiMcGmtmv5chtkkNUxNDNrgvUPZoPYsuT4jZMFkyLVyz6gjHgYbspMQ",
  "key4": "QiMn7b79tcnfqejW588VgBcp4mjvqPnHQ46VAGJ14ojMQ8fBXZnAhkcuVC9w7uEzBwwuRCVgSLPotSwbgD9cF69",
  "key5": "R6budVqg3aGvT94caLPi4zw2yapXSgn28QeiHvqkGKoF4QR7eeVzQNXjsorGJSbCAiZZAAu1Njw5usB4d9E3geu",
  "key6": "gYXBx4fzRmSquHLsDUTS7K1vuY8GEwLZd5iLALbeiBDUb6nq2kGrGVz9RDDSDMeu6iZGfaG23hLU6Yrtr21pWEu",
  "key7": "rw19Vpem8MQHtKymufJzcdc6KC1vAuZxXzMaUWErV19CQLKYEZyVtfsNcfYSpoxNfsEKr9jtBWnRGPvH8w8FNaC",
  "key8": "puDJa8yfTecEi5qFmFo3kM9HNJwGX44nEuxKkeL6JcMcJK4G1nr9obpQQzHoanVfmveePbP1rpx6GgMpZB8L2vA",
  "key9": "3BrqkPJBj7XaZtXPoWbgXhJr3a7jLxNJriXx1TRJASTQmLu5mFjcKh2hoMa6NnD1FbPzrjet6n7GynY7UNCz2t49",
  "key10": "4ytTPTht1jz4AHhS6GU2V6KPHLfXdZMnVV6Gt3B79LyyAm1sJn6japNvyYeeSsg11epMu4EKdEv2rKVmc2dw6fah",
  "key11": "2KoK822qjX39HFZNi7DyvmNMc9SDrtKcejEZojjbVMgGnAwRqH85rJUVR1qfxrbFJ5c4TfcjA1pwGMsFWmaPT87F",
  "key12": "5eazmWKoAmEG5mKk2yvjpySRgz98C66U1TXXPTdsFxGqyxtwhoAGkgkHBBMS396fi9bUNyX1kd2XqAQ1Bwh2gwR8",
  "key13": "2mU3Ca9NUAMbNz8mKzxmXVRuLFiBZ3mx5q7ruFU8HkEzMYefEGtPBCY2sYHyy5r1HZH2VPswyVrkXkkRv6sKp59M",
  "key14": "4pbepMaWvTzvEjfPRu5jGpfVPHM7vpUgCn5VcZefTWiaK9KfHzpqGtdBiKSg5TaHn3vGyTCiY9SanSbwCU2qdcC7",
  "key15": "5wpAFH7oyspd639oLLAs16Li15isdxgnT1m9YDdfggWNfd45JiQd7RE7V4mFfJZySyHdJucGXY3ASWhqPQjPoNjC",
  "key16": "4PVwFrmBXfJpQDYeM7XpqKn7dTQRBtuPm1bKDFK2TRRHv7zkrh2NQuqpsyrCQyrUxTxMcy1m6w6jDqN5NYaRTdfD",
  "key17": "5qqGH31U11WmwcJGpkKnE7MCf7XGBXSM5Uat26aRF9bNV2kjcgjKMDrwTRTf5M8SqBunMfbw8fJmKcXMxE6STjbp",
  "key18": "2e9nDLbdWBTkW5fidEo1xdeDEXLcbHzsYLMmw46kZB1cZXGWknxoDmciaWSvw7UwSyYaDECwYNz2xmRJ2sanxbP8",
  "key19": "5uruaaFgD5JXHy3851kh41orNb7YkiYXVFdgq29xs7BJi1QpLjDMxQSpPpmETVbGKABKxEDjL1xvzKsQwVeNayTD",
  "key20": "5QPJ7FQfpLSYyCAhFDPRVAiq8yBqfBUpYuj6KKZfNpLuQChbcLGixWHsj7YcRYLj1dZWG6QDMRb9sFhW4AiWUVyE",
  "key21": "sNZrhxRs1i8455iEMFZc5RNy8WpEMN4pGZcPX7bbfP9r9Y4Bpnaj4xUJW23M3DCbyQCB3wwrdoQdfdFNovMgP7N",
  "key22": "3vGjMdttxaJMQWZbpBwCVkLH8eyuerQKyRdm485rBZeswRm5FhzDRH8wTkKVZLjf4B2kCSmzqdYL7egtx7aon5or",
  "key23": "2RUVV2W6otPsgnwbt3ChS4BLCf9uZmrMPxgv56pZkPEKpN2Fp1VE32QKSbAJAPnk1FfPHfGUFV4jXy3fSg2WZ3mz",
  "key24": "357yazwCzLWdwdNPqhaZcR9Zhn1rcbRY4P3BBQyLmsej7CxW1WBALRLAkCt7qJKNVpk58BXn9o1KMaHHZRFSJGbz",
  "key25": "2rKgUaR5M3bGDg4WSXLgnrhKvPsf4Aa8fUuK7fex5zBSeceyewGzsd3KTcnhZYNbSoZTveWnWdBKDPWz26jV2t4J",
  "key26": "4YnX6rJdGcPGc7BRNc9dTbBAcmaNLbwPHJ8TXxgg9jPiBTF6TCNoS1tUvkUFZ6x21J9rat2ZvXKbJjkB7aTXKyqU",
  "key27": "QDeGABbycgxDVQLvMa2pJ26D8TJoAeK4YConNBAqUyMsmXS9rghpRMUAvfCo7GiLmDiyi5KFz8EoXvtiDuFQ5gq",
  "key28": "48PZHFxnDKDcN17oSFUCLNvDUt6F48ihLFR4u1tN8PWgKSXFonvRpaBCvZrLTDR443YcEApVBxSbTdpL5P2kk6DN",
  "key29": "hjgjCT14NaWbN1ijaHKjogu94noA7urZeDTF16wGh8VyJf3xpKEPRRm6ZqWBqWMvgSan53yqyva2GW7LZgjyvnJ",
  "key30": "241NqdmzzAiSjEYVV9htHpEqciwkbm7L2GdqcHrybzqkHgcUU2u5QvTGyzy5Ukn4iLmnfCVXTxyq6yWNQKvcZEnv",
  "key31": "2Kw6Q5VjBZPn3GGLyLgSrCNAAwwreSSi2hFFZbPek8XxKw6c96yKZ69jMGx1t6B7T5oFxtiD1pJnhDMkwM5X1HWD",
  "key32": "b5YQUzXyJCiRsEHsB9AmBkY6EZE8yy3ezEJjaGzfjAdJoj4Zc7idoghwG9F9V6HTk1MTBKBfahWJiqDPZrZSknh",
  "key33": "29Vzo5rh24udxfxVymVQPJEZcd2KtUjtUxzEF4eCBfVxBwRKoWM6JSX1Zn3JWrfGWe1ve5se2NPpij425G8eGDbp",
  "key34": "5cL5iKE2pSaovTSfZNqbUTPui4gd7ztFhVyqGNj661mHW6Bh8dj6eURamc2rwUrq32Ax324fRGQrvidq1GPfLZZN",
  "key35": "2kHEvqpCEKv2dohBNwP7mUqhfQZqALEmvKvDBDh2b5K5utxhSKGyjNcWwhinLmczGaahZVVnxx9MnBVABJw22iw3",
  "key36": "5drY1FTFsCWwWgTBLpmbB4Q81i784PvKmJYJLSurRjPt93bzSzsWgRx5gmVe4jupdN22vKjPhHqZpRdB9JkvJbRv",
  "key37": "29i7LF5zopqx3prKmTNNZVhoWKn5iDUZ656W21hAXesRSodNPrtrarWXVtP36CkbrpX3mAzFN3TgCLNSAS6buqTQ",
  "key38": "2t23ESQhXXhKpYvbLqHzyENVrQQPHwXKQRdv7RusuaW627dET6QtN9Vzm8nsjp7E7gVZ7HtNFvq9V14aNTWyFXz1",
  "key39": "5z5dywTNUPc298ADUyRGd99GoBjnHHDQWbnGZ7bAYanbcnWd9u7msPJDTs6XbWpcgHZhiUWuTnMGHpfKHzmXiwkE",
  "key40": "4YCe2jwtu62daG9PV4ZD3xfmeMuuYCgemJsEBzw8skkCW6Dvv22CtaiECZcssdCPPTHMByXQAFja5fwwQFKVGJiL",
  "key41": "4g1MAaUY5MiebnRevqwAX4JUcx8LspnDuBRw721vvXTajbGjMa1T5N7Z8EzMtsKwiEUEJqM4juxTBkTK34pkVHq3",
  "key42": "2xGH2HRKQcTi6cmYp6k8psqUTvLTFmWpYDuiX6YHFcAewJLm5Nb1Nd1vx6EMfbUMXfbqSYZW9DzdG9cU5uyuxy3z",
  "key43": "2a7MhRZYp2sYVYVBJbojL1sDFwmWurrshFSfbmms6jX1uLGfjyKVER6RuNptzVNzSPz7KnNF2T7rtN96AW4LrG6",
  "key44": "pzw9EZrqBRTK8Yx6PvHTQfvqtViXU2fUv6GFPisD7Thz1thf8cap2vCVvJnVi5EC58Ub9iFf3vM2LEzgqvNt4Pr"
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
