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
    "XwVnrMgEHucQLVcEKUBBuRfgsBdnS5DQZiHGmfg6qfCxYjzzmFEwLRTFFVEufcFhmxzNDWa632M1RSzCg84mSGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMumx1AFHqfEqHn65fdS4Z7jKMxujsxncAuPT2xDtzaZ9DQhADGgKax6vJ5PDvj8mHZ4MUWTzUG2XuqcNzkf41F",
  "key1": "2Ubnm1fi6YquiJo476n62fQW88Cfm9ocuhecCrzw6MeSDXEkZkcwzafdAhQ66cprq3BTfnNB4wV5s51LVU1ZGagE",
  "key2": "G5vQbGpnRywArFa871Soq4B63LZQbtTCV9vCrx7nXPau8meyuhdKB27toXAjfPsxonvnEu8dtxwhmJvEB13zWUm",
  "key3": "bfTdVztKYcpg4iGb3hUvYn6cGPLMB32Qaqx5brJLjfRQ7xxn98WBQ83hQBjvmf94wp5QUHUind2qfBdfRU3Qbje",
  "key4": "3DA22kSXQKYfu8GT344DWXc65NpcfHNJVmwE9rPJvVTM7FaN3ouFvnQxnCqPM8aeqaccX6U9S6xNZagBnkyqL3kS",
  "key5": "2Aae436tTCYc9YDDNxGSnqb24saZdE3DVfrByoS25rHGanv2PG8udtKa7YXx42maP6am13RoDSk1jXqsjFQtDGY6",
  "key6": "5B3rZvWuhDwbeiUyusG6pmHdfx9HfkoUrqXj4SBGhANsWmk23PSA1XV6ezmtYZEgvPoRxynLJRyrYnHpCL6XohqU",
  "key7": "2QM5G1jGu9uktNASxbHiLzik2CMvvFH3EK3yUYzYMBiiQMMwbEjxJZBkjk4DUQYgLKNBJHW2kN3DhQ1q6uNnkrai",
  "key8": "5xZCzNP42Zamg3UfczZhoTwXF88i9d72AWM9SPM751vf55sAb9rsN1y4zBJ6sHCbP8xsXKpjmgdCX2tbEe3Zjg5K",
  "key9": "5oVS1TnT6h4dfxpq8a6Pzc6gPfgrxp8LjWH8T5eQTLvoaEi4h935mraSUf6fytYc66WoTf41QWC9GW5ZSgX76pgr",
  "key10": "2MWNNE7k2sSk3aUjB8A2DUr3nwVMrD5qj6n5guBgiYCLcwEdJ31CdtoDyDmSvSFjKvkpBofWVzB7uUdnTGTPWT6z",
  "key11": "XCbrFDjFgsucSebbWcE4RqaLCNsgwRESxKCz5ZEfK86e65YaSbXFE7nQYUudF9kbfyt2AWFRTvEFpYtyJT3iLsL",
  "key12": "26cCciMVKLrf7EMK1z6kzcHY9UMrfgs8aVUoDZHoeYGxV9m3FUT71WmrW1Py5fR6sAFs2pDo11Sk3DFAtzucPqZJ",
  "key13": "4KyYxuxUmBftigzoof5UhDqiMS3Khbv4hn1TRz2dsFF2S2qgfD5TrvN8axwfLSSwkDkRqSPBZpwHMmJWRWEbbm8",
  "key14": "2hy4SJamtndSXSDjeGnwLF1fkFXZu1cv2r3UPUDQqz7WscDZBXK8ZvjCLFu4tYMTYP9Ch9iQawf5SSSPoEwUGdZ1",
  "key15": "57ckxdUuLTjSEMJYeL8cK1uZjY9ogotZnbeP1w7UwCXam6SS5gaHPPVMy7wNL8za7P4v2fUChiHCbAqAxbgTjBKS",
  "key16": "RcEDcSxhfkpqpxrGEPqx246TuNxdp2F5bU8dmgWp8CM1GBgBnWGpQVBxhyvq2HpwA4Aa9wY8XEPLr2REsHuqBRQ",
  "key17": "1erKaTYQ1yydMDznJCL7KE9W8H2Skkbkzxd5BLmpugDQjFUqNNfk3QJcr4e8of3Js39ncE43gGPYNXaNQJgnTbo",
  "key18": "5aFr6v5Zjszb9xNHpT1hgMEzJxLoK4mXGZ43QMr8UWXs3cZphRtXALEwQmeHSVBvGJrSESHwvmbjxPBvvPMMLTs4",
  "key19": "4B49Bpy5HA8bfQijAhvsdisGxLzgL3S6oM7LCp2PWdniQm3aF2Q27EHDdixLGc6apm8a11tHs23dP4PCctiTbaAu",
  "key20": "4fUA27FHwE6BwqieepDt82n2xNBfx3GSnrzBX5YGQy2ZGFnXsCGF2HSUCSNW8biFw42pC4V46zFwpBzW1e7MJDoH",
  "key21": "59E1SWS8UZ2PAc7AXkM23qAnvrH23Bfb3FqGKhcMJ8Uj5kJbL8b1YtBZDLMvi1BLswFyuUuRSFd393KSPqUMY1Ai",
  "key22": "43dL2cmtAfkbcGKmsDcEcc3qxAmUTap1uXLWexZbpyH5DPRdBMrAXa31ihtoHyMkEfKn1xyVyQ1Aw1JobPyHMk4e",
  "key23": "2GW1w9jJDZ3y8SF6ELbU8HwE95bqBBf3QEyz9Q6B3oSQu7tzpT47vZYM99YPJQfH7ri3KNeewuAWUYpu48qgg6Ly",
  "key24": "3hR4mLbtKv37KBdF8XDzNLfAazWwusEW8DP2FKYXzMkWAZ1EK3zg23A4Bt67ZpZw7w4EFWqdLzaPvCTzzobdJHFp",
  "key25": "5qAzpCXvVDznQrQMzWEczdteFnKsGS3jNwCAFzRaYYJgPqYbiRaE4gKXBwgShVAnWM9Zx1wGk2gCbHCKzibcSWg6",
  "key26": "VcJjwx7h9xJMQAhHsfoZNUHGjC5gjNdwaNip5bBts9PduW5AXnFT1SLCSxEH7SfoHjUvZDDwCyxPJL832E4nwar",
  "key27": "4zeuv7oUT1DUeaFMkFhLCPrLYWfcuNkWMYbr5QX2jzTgXXMkbCuCoUNaLf45e8fvSMHXfbq2YCS9RuMupUMKTeGQ",
  "key28": "38effeKSPE117TifUWsWyieuXC2XGh2dgeUUcDkrfwRozNAoYiR1YydAW23gnGbEqzgJ4t36vqUG67MZAojYKfH",
  "key29": "4LEJuy1TjhBRdSS4M1qwkCTz1mYaz68L1EREX76vCMJjKt1rqsxqPYuT1jnsvBcAq7rothdoQWUH5FxzyZAyS1xA",
  "key30": "2vH1S4aKsPoSeKW8MnP1V3Zwd6GkXZKTCiQP5VSEk6oRqY26FTWcCtXSJD7E4Wgwmh4dpuWkTrsz5rukvMUM49Nk",
  "key31": "3iVNeRdaHqgNBzcgsNyAFVseMjHpSxgkWsELwbwd373jTovPMPyWqcu1X41sstEePUcNioA4LQnLXZE9UZNn1m8e",
  "key32": "47ztAGnkyLwRgmudVbXYDyYfsCrd71BN2oqL56QMfHTH6z1weYXCQyDzBpUTtaPH5QAD3sySgpT1M22LiNGwMnC7",
  "key33": "4fvQbovYg8qhdz5yF3pUkLyxMBo8pP1DW5q6FHmiaDeAN53tBdjdS8hd1PJSghLgEs3Ee4ac8Vj76Go3TiBCUkkV",
  "key34": "2RPABGvUoR5Fn4TJUNTgbge8fu465yfvsBceC5eEdJNDJDBbR4iSk68uQrCNs5xHdAioGhxwJK81uuTA3FZWWBNg",
  "key35": "7joSqpDqPVTE3bN837juazWBmDTnmWBnzaHQRXZ6AeuFJh7jKbSRxaW9h7FUndVUXi2i9XA2JJVixLbXsYVP3ub",
  "key36": "4RqgCEniUuL9NXqBt2Kz5XGQ3fr3vgUajBPaoqhzbi58zPFyfJ3t8R3qnhdZPRJQNCpLNynirUiBK4VeSrBMtNj7",
  "key37": "2hWyKmat6jL91M2SKGbRLCYf27rUYDGEWPMo6wivuaySA64diNNeYrDsJ2LayrPaekNpuLiE6sRMSHV5QoBfMjnV",
  "key38": "5xTrKJZHptJtLxV7ZmFp4o6aS9qGbmT6bzNvimGce3PkK1M5xFFqtCD5eaD9MJ8QQ1y8AGUhBZot3CFyJBwN9Zge",
  "key39": "4GgeGP9iZqHakNdboL5wvKcar8rbRpAcRqRjnWmwpPCHgdXsk1V98sjt9ssQj3TzmeQwJRkc1rFPiNUg3GoMZLLk",
  "key40": "4hcpxHn3BgFCNi4meR38gApeYn7j23hZ6SUjWy7B31uRJDU9xzUisu8b1vbgbpF48JGnEXv9JLhbR4Qd9hiLwXmu",
  "key41": "3GRjEYLLKatbSzxqSTNVikdxXKgiRBpoLeqMDur1s1KwFKVHHhifw2RqxBgNYrbPjeKMb4xhjudNimzxsgXtNufy",
  "key42": "4wHczw9LtuygNSzAxujAWtFABdvA2R9sTih4GxujdT17bXNxva1wB4aXZUMRxtNoshDUoi7LBeRcQtY3oQqpK5MT",
  "key43": "xJwqTvgSDhsePehcfqPL9wBhfgRmWFUCLC3LnUkBfTnoGnvzVtj7kYuyVVkyriJqpTiWsXSzbWmCzxRZ4QoLxdk",
  "key44": "262JR2CMhqM7WHJCt38gSWmfgYbUG8r7ssYLnb2ikGRbBfX3WY3d44gH6aqBRVcDDe7WdHeHDD8BnPFfqKknSd4B",
  "key45": "52APQpfWfBvCThzibnZUiHGgSh56zxNCRxSqUid6qGBrAbBpZspsAkYZFT7UDLBeWQetoBvbbSzheod7rCxtD9Fc",
  "key46": "Kmb5Cf1dgUwmxGPvnaHEdCktz3bCRrZYNR26x7dgcvvhUAXXyvYKyRjxHWPwsAmA1Qkr5P32K3aXvWiVECCYQo8",
  "key47": "iwDxDFjUbxcDN1KZfbXG5CFq2GSdrHktisn2b7hTXnJwKTcjTGxrJ9tgNnGm62wgkRUEYV1AHwF3WhysRHW8YnL",
  "key48": "2ViJaPgqS5qU2YPt2K4XJcCXQH5xzf5f8vAm1FWqCwWdEZESb3wBqnmicDuWYdFpZ7GMK7A9zLP4PEX5ZFUNxAkG"
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
