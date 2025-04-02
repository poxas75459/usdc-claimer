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
    "R26NVL25LPnDgVusxkZJqZSzLo15ypmB1YWzj3pDBpbD9tGqmZEzCsABBSMw9PmTCRwu73VLrgab3ydJbFGUZEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZYiUqKv3v8N8GLhvFHSEbyQBpH9qfLGBLtsAveUhDCC4LxY6vW6zuGyx4nUU5Sm89w3eSvctC1v2uZixZ5oiYa",
  "key1": "B55zvJQyvucEgoZj8GYLmuEEu7dD1YvmwSBcMFbPNzcLck57tyGCd4rej855v1zrHg8dsTWUrcWgXN6MvVzgZzH",
  "key2": "4qTh9pSwNDeARX9cvrzKtZBAnNz9Ck6kRe9WSop9SznGQ8JeNsy1CfSC6NovU1idkKq5RTCjVntNNbz7wcQxb9bP",
  "key3": "5JAV4Mt5j4WkTnojugTsYgp3gKQ5raRbyDQqm4Wq3oztSzFiuScd8WBA7NhYVZGqr1i3Pvi5hjWzvcSWMywrLyTL",
  "key4": "5VPJKxTgmTHCv3GAEZE5beR3as2K7QJK6sQcHKmdWdWY9QeRkxn9qmBQGnwsmBeWw9zrQARzZMdn5zMiEpN4HBxp",
  "key5": "24Hh6YKZY9Zgyrjmmv2Z5LKSYaRnpAmgyF4szohC4yy9xRq5GfSV9gojXJgrp1U5SpdYHwZpYgKV4aE4j7sKaEzg",
  "key6": "2vXJ4VWgCJyCfssAnsZycYcBGBkSeak2bkh26jCoJL2pq5pFyvFnTB7SFjpgfPPxbpxGQj8bHmm5EEaKRkmihiXw",
  "key7": "PHx29Qgr1SAe4pqLH6rZP49JBhgrMQrPNCNG5bushBJ8eLQbw3LVKxg9AixrCc4YvF7zjw5RRkrC55aoaPzUxcV",
  "key8": "4dSwPD9KGCnrmb2YUp3juMzR71YmZCKUaBWWgHsELJbdHZSW3HCaVYTzUHztL8Mfmy2Q7TQxyKaXUycbPoj8gaAj",
  "key9": "5u7XyhHHKTxuYzpgUbo6xSB7PmmEsjDUKzSmE82GduJKHjLet4eVWbi6ehnRtJXYSKSCg2BEJ92jFxUw7wPJEukv",
  "key10": "5BXrWMNQrYS6nQQqidmsqG2BPV1K5rC6AMENghiaQEFhA91An9otWq5TkyyF1Vk4UULz9k781FdikZhtguQZyDB9",
  "key11": "2uQbQ8cJeLiAaBZgKddDJnac9NVpaBdrkBBvDmrx76jaygFMvtqhsXjmnTWs3ujWJcbs76Ust9G8ctgSiSPhuRdd",
  "key12": "sNQCrQqZZbijiZ4Co61dhFk79WQRZpuunVBAHFrRJda7HmXhiDbqnnYuACushuY8vsaM3K6jRy6TtQTPs2QoXPC",
  "key13": "2DEkxdFQ7BjbsuxtrdQZvd5rKrTVi21F2uYH1dkJzYwZ91ziQysEUpAxhkTuWRxuwgj2XQJskWNab4jsvmxvPFaS",
  "key14": "5qo2pYXDjN5WVXxZMnFDd5bSGgJJN8QuYBsK6fwh3b9iqnoqfrPk6coBU5qzYTH85wgCneDXJ7ouVNQwKXUXGmKm",
  "key15": "36HUC3xvkwUQs7A9L5GAN51EucQSqmgwS7XGd7YyC2YwAwMWtY2wgUnDcMLeRrGxz5Y5BHAfScGjPT7GUEp3QWVC",
  "key16": "DqiVhdbwCD1u55EV4NUqvvby6cVVeW6ZzzPQxy51xnoKS1rKKV4ccawtyqBJqCWgt8twmsbBik2ejgghhrzsU3F",
  "key17": "HjkvfipjCzHxBRG6RGez3tkjBjQpxdcTVcJM28RiqvQAh3thWRJBmNgjEDhqiC23vzx8nbiFmEoXx7sbekJsseR",
  "key18": "c2W4pQs38jLNkcwzZLyZ9rUJXbpyiGFroCoxcU9KinyP7QJm2WwKZmukD2sTitjW7kBdBXbBgavgMJQ86r8vBM3",
  "key19": "w4XZ7cJxtDeE9DHTETPYDj2DoKNJayDKhYxH7yr9DvzY2EqnhxE4MFWtw5wwJe2tSoRxZzXsVjbFAgAZV2DN9ah",
  "key20": "3EkKgPjnkJDVWLhGg9MHmb2fdh2f97DBUB9qgYpFyM2syUgiBvSVdLDAH4Y9JFohZNdJzZGi9zmXzzXxm4wqpLtP",
  "key21": "2qxUfCrf13vXjbBQPhBXFhBypMi6siq6taSnXZWpSTNAFqv6eD4nnv5nS23nL1gFxKQe9stCsRJEfajnn3pFwrB7",
  "key22": "3Fjpiwx7uKAbTkoQraWM9QLFZfhgxdpQ6QtBm8VCksGGPcq4fQ6iWMKriwuqxJ6cjis1G71pAJcGDCwZc7QdoQmb",
  "key23": "2DV878y8hHfs6xANb1ENNSSYwRGKaQAcy5R7en1RMfgNAuPNwE31P7GLi2A1QqMmU8neQk1F3T5SdNRi5Ez6FXf1",
  "key24": "f4vgC32Tt4RkLW4ZrNzgfUPkeq1RjqdnY92xiFi3pjftYzYKqM3884CHdU8rqfpEGaHfxeMG2VSDBovoRwqAycE",
  "key25": "i3cUXT5TGbSRvLKhdUojWpEkvLqHSBJztu4jai1eQneuLZ8wyT3YH6gDeB7ghaikmYTxNs5oRmkGy7PKpqDnSJc",
  "key26": "48U7UbQ7NszS5opcFgjrSAyUCJ8Rv5aNtvGev7FYUk1F2MAdjPYmvkUxCXubs1jYeP14A3986kZ84NTZdASzspDi",
  "key27": "35jj4t33vhpr8jgCtHpoG4qvksVkX9xyGCnCw8zhnTfAdmui5yx7nVV8PtFC9G9r1X5LyLYxsBxrD1F7YiWPiheQ",
  "key28": "4Qvq6MMcp7VZiqUaJ22fgYL9Hq2bHCWyeSgY7PGA9XGNyLuHWbyXpcu7fsRpTCKxYWyszk2ifa8QrdmimaBaEsAy",
  "key29": "qMTSLerdyBWPwZCFzSg6H4rwanM47XuYmNJCLr3iT1N14ozFD8SRYuk7MUb6rvdEdrpL2EhWvtp5N7z7HKoQhZM",
  "key30": "5JgAZPrG7b1X447Fvu8i5T1ntzPzjgsfxXj8KU7prxGhwp1dLSqJTxC2VavpFbkDf55KrvU5Bt9UYTyKj5QY7EPz",
  "key31": "37EQsMgyyShgNFHFskLMiixWcVq1oy2ippxvX8STXka6HMAZhZq1uCahhukh6xSiWvca8U46Da1g939W1rz6BPs8",
  "key32": "5Q3KTF9ncPiEWfNzTdXJan1DVGAc4LmCoMYuc2dUVMgr52tiPzpZKdZK8cbRZT9Q6HpDU1QCE8qycGbzTRbxGtDB",
  "key33": "4EU2w6pUstMJnVRoaSTSPT8uW1a3P28jMRyJGgLjqZDMtxBNzHvZ4zLT2mpmVHQTJLJiUHxZuQTtQw9YTnDTvXxB",
  "key34": "2cptjHe7PU89nxHDBMComffJ7wreiLjs5m9SHREg5EGKU3CwBRgzcmKqYq6BPH5hgWe3Tfx3mPHn3LiPxmtHpvQa",
  "key35": "2LNjg2r2ph4LRxkV5m8xm9Nd6EKQcJWwcLC3hcUyqmZXkvVEuED1DjQkdMp12Q9wg6sEvGwGk688v9XRu4ZcSo2U",
  "key36": "2MHSjT1Z1vT2tMAnmJD9i5SXKRqMvuiwGMDLMjLvgYWmeC3rcdtNn1PqVWuJFBhJaangPG4zWkvwb7hycrFTvCTu",
  "key37": "3psrPhXdBVzgVXkJ4CGMFsNknYveyiZ8qBLC4d93Gfv8vQtDprP4E7iS8fBjvLcUffAchj9kcthi9LZjLV65opr8",
  "key38": "429vrAESTWj36dfjg6kngYBQgrqbzeW66ehvAcBcZzfXzTeyNZxkRaaVvvuzpsSsYG9kwpDXcGqVK99YMBRKkpz4",
  "key39": "25FJnVemcmS8SdaeYKGDePqPedrtRfgFmxTe9pGRrecqCnXdDNFVo6953atMCv1Fh5qygNv1UMaegpv6A9SEiCz5",
  "key40": "52owmuFQ1kLKt9wDprKEdfM2ymFeFDtffKFyCYUPgeiEXCKWwSjVA7AvjJfeZyJSFNBbQzntfte1YF4fnTbyMBY4",
  "key41": "5cJe4C4DdtFsb8NyVkGJX95M5u4rVGjSYusc6TJsjneuuuvne7qGmP4jtoxjZBTexmdeiE64mCR6qkniNm3DT3YS",
  "key42": "4cNrgKdYmP93W3z6SK5f1fJah4jJAv49rMoXupBSWJo7cCVGNo7gmq6BrFzhL9L83CKBtk4Pq6hMAgBiFatqRDEo",
  "key43": "4YnewnBPY4Aj5kLNsuA7nrm3TGNLDcbDFwQskGa8WzX6Py5LpWmQnNJrLMsRS8jVFM98EYvTj627bcYRbr4yFSHD",
  "key44": "2Hugth8QsKDEpZk1VraXhmbwn67y63wJSMA7imUXfnRKdkpVFwfS5Ji2UgZCZ63A2wnzoLw4aJLGqSjdgXUEm2o3",
  "key45": "4UYsrFJfPFzCtLVq9gRobEGYykGLbSW1d4wJQ4jmy9RxiBUwMGf6moe6L8DryuE7rYbUTy5zNHB6yyGxEM77jkSt",
  "key46": "5CgWceShQe7xqncjvhfjjHRnGokJiEjkCGTg6N5NrdBosH3x9CsVFpWBfwcoCqyCiQpf4TSmjoVsA61dGSmpMCys"
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
