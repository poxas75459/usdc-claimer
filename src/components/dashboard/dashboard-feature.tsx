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
    "4vNiiZ5SbnHDXCdCZ2Vmu9MNCNFj1oaYLFPQCiEtrHrGYxAqDSmryyYniaTFBiLMjThTQHCYdRjtYh1y9v4m9SyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3TXFPJKCpYRnNRD9zgxunfipNzY7qtFC7asrprYamjonQAtet4f83UVD2cpR8j9DKWng4BpYgi3DefptSmDZsn",
  "key1": "4dVJ4psS9jqqCPrLEjbBimsL2Utj89gyvPk9ZqsPYUX9G6V8jnBj7gj17NWPFbKWeoaQYtN9F8VCe2J82fejxG2v",
  "key2": "3p2X4SdeEPPWgWTzpUpSxqz3yDsAjSymXhjsWih2QUCWEC21Q5atBAFH7xByRviLxdcqhuihgcn9XUnNgCVJwBEx",
  "key3": "aAjbZq39AHvgmUbDUb85m9gNc9rsaUnZ3n2ZdUdT5q5uGmzzdFdcEcBzn5Zd7cqeC4EaE3qJAdggbC3YYBCFAip",
  "key4": "1s7hqwsHhLXqABYoRGUJL3rfdmY4Cru2uJbfj2Rs85E9e4TpCuTYDYoPbZCKKYi5fzEPDb5bKmXj7eSgEq3QhFU",
  "key5": "3eQ3QGfmykVU9r1mTkFxp7C42zheKNDwtMTAf1D3BgXWL5duSitpyAQQrPfxT9RYAgvPywXwVtDsqssDhEhnWoha",
  "key6": "2XZqLKMbCbXTvNEWuVagCQwNTdPcNRPfh9Tzmvy9kQSuXWG9S5VhRQarZF8XC98KZxnQ9QX8xQWg9Dw5bHMLAtio",
  "key7": "51EiZwNjZpCshzT8kHjRLoxzfu9bVLBW3sekFWucUKZmiJCDC2CbB7F53pg1iEcCb17LAdruYaVswU9opJBeq7Ev",
  "key8": "5aQDpsXu4kNzh2nzSSDpfn2EM6UwbqgoYvdHnqcW26uM7Pmn9KTDjvSZ3Xr4Sk8tqRuCAgM4LCDy6NhkN8789bJ6",
  "key9": "36GLZJGNpc6ekN1g7kLpSfuu6oF5d8znRWmhRV5dygdZMJzBjogcELYaZZJ1kLJUZGxTpPvRpBRfA3geEFmhy62C",
  "key10": "3F7dDMGavQn61qqz9nbPZRN3qo4wk62ermkgqj9dGNsNodV8Zti8z5f8QgZ1dHsaiRyc2ZEKM16VSyXA4vNE9cgV",
  "key11": "33DrC1Lxuj5owLgA8d5AntbvNHyhQP31AFpZsqoeqciVzUz1K6AhezqmPwKmvdTRnnmZp3kN1smb7EksCT7TcEYT",
  "key12": "4WyttrCrmhW5wLufgddGh8BCZ3HEfeZZHivueLAV8fFuzXMy15h5Z61eNA23xSytV4je9xu82G6MKkosEuzJLvHW",
  "key13": "5z7t1E1gba3mwM8xavYwDm48mxuJ165RTddntvf1YSJj6zkZSyy7bmtcZt4T95ukdUKRHdg1c6TZusV4faE97Juv",
  "key14": "EBDy82ocUcKSsjtNAR6oScazjo8hWdmSVqDHW3fDA1shdR1Myoe7HAr4KWikjn46v8CWmwssceJQzS1yqES6jGN",
  "key15": "42vRZpeVErACdycj29PASh96yRJvxBUx4cMFauhY9uNw3RJoFh73CHaFJiMAv6oLn6eimuMrFs9mxJ1fHsR6tqYg",
  "key16": "3kjQDrWfLLDiFWGc5cZCfzKfBJVocpY8xXnVL49yAkcviHrvUUScrQUVyT2Ykg5nhZbK2CzKmhR7GdMgFSmNCYmL",
  "key17": "2xwRZxVTK6CY7Koq7mXmshD9TdRR3U33cHDugVz9rzTNCSc2cHSsprkRW9hXak8UJwvCpGxqh1t7AtiJErNcWFfN",
  "key18": "3HHufcEwHdEyQVydB7xXj98bz1S8sZkuafdQksJkoQACBxnTeYR5DdohQt6w6kBT6Ku7PMuXKeN5RWZV9ueMZj16",
  "key19": "2wSAzokWREoUP1ujheafXPHrPnBPU96HmKBpSTF9ecHtWEuZSUVCXazJu1mNGTXrFQyJdePM4ZoqfgnnvE1ChMN2",
  "key20": "ZkiLFP2ULod2SqiHapsUNeZJ2NSsSbNLYSo5ocJQH6J4aXZNTEYud8bNVvXc3EsEENriELXqJSdm9LW5YghtJHb",
  "key21": "29Un6D2DeixQ4ABJgW4xeJkwEa9L9ib1f1a3ZmFfKXnqiUFwB8YpXDXrYogeMLYuFxi4uWnmMZMM3m5uYnuiHa9K",
  "key22": "5BPqdJFoLVPDU1s9qeQdLXR8uUeiremxL9yoTMyvbriy3mCZKiUbduWTrg8CoBZ5nPcFRHS6MhKhbBTxXZZ496Gr",
  "key23": "5ebq9Wz1jA2diWve5NDeMsatqhsnaMDj6rYVzbpsaj64NY2gptF29ysLWzVPR7qZ3geUrHMZK4j2ru6MYDtBa21E",
  "key24": "5bEs9611RbDsA4B2hGmKNGhJbA6kgSyNyAPwimS5g4mjNy43jy5nEEKGxByohuA5fj1VYVRc4ED7DNJ8QA7JERv1",
  "key25": "2kNkoTWErjeyQiy1h6uzLo2bnchL4AxrUCMisPVsB1ce12UBGtYxW2hfg4kXWjRcaToQPXFsGsec75HJD7nnyzqc",
  "key26": "2d4QR8UMWEZ9yi76CuMAyn6aAbUfMZ9YpfpVScWpPyKBJQi2GbAvKuFgp7LtiqL1eitEXN8R8WtJgf23ePZKEf9K",
  "key27": "5CBtQj9iLRxWaY6RVhrxGFMhyUbZwpNSQqpQsUkbJA1LTuHUk73PeC9ppd5rAuKEs4fjkqiPGiji9aXfKbGohaAz",
  "key28": "5SRZbgX3ipSuktKuMf2CUWbqnD4W2qrQFXueqZzE3Bntr8yk7QfSX6gPdxrTQmkksZp8pvSH1RvmkhyYEbmRQ8yf",
  "key29": "d8pADNdn1ezcRyCmgyTksYBfb5H9fsKzvW5cmpaucxxu8S9aqtcHbU7Bau3xz9rtRqdRQkakGemkMSMJPNCW8K5",
  "key30": "5aqd9fJ8CJCrmMxXRSCdPekUjbepcAMWirDjRnnPgMoCg6rpUWhBQkobiqx6oBdw5o6vpzghUntQXF5vxo4kxdG2",
  "key31": "3zmk7MptFm3ddtWsKHVZqmgLvw2fbzuLpGPj5P1jWV21yUt4yNAcimDx9DTd7GFsxQhCmkrNPToYVXdhqXxpzB56",
  "key32": "557B3FTvJNYZvFKCG9BLjgJFGzgyA2dz2AL8JBcuMBaGNzYL3YexdEUFpbRTonDt3VpvGLAshstzKg5HZqzTmNu5",
  "key33": "4AM8WeFsbdb4aw8vbWPePg4Dd8e81oVnQ1vo8us4QrRke6pey6UFX9UpAtpyeGsfkQM6CpMnstwF7hdbVLBtFA8w",
  "key34": "tTT6hxbkaVTTap7EXNACkVkTP4UQSyEa4sGHGBM5XDGLekhdxmJxNZgT81QrAW6N74A33mRSyrGg832u1sxv7YK",
  "key35": "3fR3EodTwCTipFs2d2Mq9i3eaYkbJjvBZ1y2LHnc6SgpmQW8GwaJdPMcfTFoiZ7epSuugA65cYkjaKkT9xaJEW86",
  "key36": "3LVQkbf3BpqLcBCXdoZ2a6paYJeFbh3XvCc1A8Do1XNQ4sAunRyKYrJvhfTDTaMekxwu5hzYzaRodMWuJXaPHJyH",
  "key37": "1bt2bwRHWsRzbAxCJALGPENhfH8GFp81VULRXFaaGmPjEvixJRU8L4obnoFa17fQ6qXBvcMdBSbGUbZrRGdKz2x",
  "key38": "tkuaGyM11u23dd1614vSDEJd8fiotgUPvAmNaS6RgBpuiJgndxAiNnLpha8keSYDyNJHax9wQTqM3uaVK363mxh",
  "key39": "5NbjScbmVHcdNgTgkPeRduqZphMcDpk7WaJciJw6mg8wEvRV3PPLeoZzSfcCBKRvxgQnXqZq4Qm7PDPgTgSeY1P6",
  "key40": "4g4XXz1zyjS3yMzHYmQLvmKR1ZUqe578mn4Ad3Zcf4LvbCw44GDfMLfnZa55MCJEJeqtstkZVkMzaHFy2LYZZtrJ",
  "key41": "5nK1JuBRsGk4JfPW3W9aeL19Wnk5WnwD9mU9SCuAUf4VXYUTw1cHQzWwh4bKLBWKRdFYpscGwJ32hwovvkaBdGyy",
  "key42": "2xUaQaQ1s2kwBrsnH48Qz8QdcHJXGtscMuq5qn8QP7R8S9fhjZV1fPGVKvA4RFNYfi5YQioNsvMBDzJTfiz3FWLv",
  "key43": "3LvEi1DnAHyTmv7eQ2bWcyvbb4TaT2CqWMmqazAcXaz6UZfurtK4NaLLf8Jrxt9mUNZyDCkmCpukuGu247usHLCh",
  "key44": "5VVtzEeZhh1romfVqt4TpBJ39A6jsyuvF52yhz3KpgC8h4AZbyj7ZVkrZA2cAKhCKjCwPVHQRsJU47mvU8zPjX5t",
  "key45": "3UGJt4zmbUEssbXqL3atdhbTbqbAYDK13XvYDRYT49EcNZXaRgYwDieYqyBbUcXFwQjdoPR2bLTveiRMbVJ1NFaS",
  "key46": "2RKVfxTjEAQPGpLEQMJzgz6W3PGgfqc8Ftc9Va2jdi3nH9V1GcSB5cigqwDzBwDz2tepRoKnFhT248n9xu64ZgPq"
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
