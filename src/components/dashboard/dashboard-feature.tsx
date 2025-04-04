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
    "5EHMGe99UdEFmzMc2eokYwjyNW6WMjLdzJjtMpj1yq4tXutVWfYP7c1oSbeWHUk3pFQzLTAGsk8AbYScJavhtF5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdPjMojBamZkGxhjYgpunR5TZN9ez7x7mPH77cFCUfKWojcWj8BV3CDKYcxjsHSVU5uSy8fmaK89RzdwW9hQNVy",
  "key1": "4JU4i2yFCytnMyMjUTas55ap74VbdzzSPqjsRg3D4tUoYHFsWVcxoVZSJPq2nDgsau7GYcM6bAmJ8cE3suQpbG7w",
  "key2": "Q1YFL8Tuv3pUrkg8UMcvAobkUsbHz8i73DXDELiUnAebytAU1UDBvoyo7yW7tZx3YRfrwd8csA6FMkk3bQABUD3",
  "key3": "2V2pLWPiPLb2zLHztPg89dfewXCLXDsobXrtqpMZ7P9EfcVTT4RB8sBQqzBCgxja94tcjcxkrsXos9tiAWbfuJfA",
  "key4": "bkbMbJUt4g5iAsbGS1jtHD99ETaoP8vj6VmnJBUrM1UsAxqAmqKHLfSfpoB1saF2deQUedzci7sCLRVdrvUDR9W",
  "key5": "4xfBwTbqsZnyoAuZj4Wb4U1kzsqWtd1emgudDUZF17sjZKwApaF9DyYaRkx4S89UXEstcsim6nyNuG8raqHLLuqJ",
  "key6": "5oWBJS49BPj1NhuJiu7A3CirbMGmYde4oSMbSev8ukaSGjjqEUNjQ6iwzLyaUkGRPNW35sysfHrxYTsAnYwXTZrK",
  "key7": "V52DkWhuuQLEw445MhWkKMLaYNTTjZJv9k1yz28y8aJBXpLYgGjJVY56Pq5pFCeCu231JtXqt2tgigMbBoQ2aZu",
  "key8": "56cxdLu78HpUsrJ1qBbji15DCk8Zrf4UF4YPD9QqyCKhmfFJ2xWdoHCgjJZ4vDDoJePC9df6x6Lxnyig6TruqDw6",
  "key9": "4kgLkkJakggLmSCE4on4qzm5ULMPZBoKNVSuoJkKTXtG9Y4k7LgTRiuSJ8X1yqgkcsfm2h6PrbD56zq6q6tzQdoL",
  "key10": "xvk3sreQH4W1wrYh8GNEaodzPMrJX7CiZ7WNwh9ydhQGbHCu6J4Lb6i9pqZCYGy597So4aBULttwBA7TCEQvHQy",
  "key11": "3RqjJ254vvwat9NJFnw4EbRiMnECXYfJNU2hMPAv8HurZZ7thB58H3ZF8D1VYJTpKtUa56FqivB49t5vU8r56xgA",
  "key12": "3V5jWvFQ7EBgCrcrPPCFe4DTQZNpadkcN1wzjpBrthyQZrcqGDFAQeU4ydGVatYS3icmbagj9EVn8qUX4UCwSsEc",
  "key13": "542YWKcfRfDvb4LsAnUpjYiLWuC3AyRUKPZiSJ6SgbgPvABWxYjAPPeLkw2yQayBLppnRPVKSJA42h2hf5irQreQ",
  "key14": "3DnvxNLvW2ynFugVFWudJn3sRVgk1BatsSinkN1ff53cKAEwCRJLbx1jboEu9py9jGVspmiZzFYs7bnri3XZEk2Z",
  "key15": "55aREp2tjn9Ltr2pvgogc37S6FbP1rB6wmEhosc2dEJ6Je3qRnj9eh1nWTup5LGCGLVhbsV83wVrQT85MKfvNuAB",
  "key16": "49QgQDf4ceGbdyjZpnZJe54FBUTB33G7Z2mgAGcq7RZgG3qagVs9CYbjTEBxjiH1MDTstckZksQNEfwbCvvt5rRu",
  "key17": "5bupeJvnv63b5EYHydhq5bdeShn7bHBh1QWrArWQRX4sx8aomUQDQi6msge27FD42AmU7B2yme7zfzs1UMjwNKyR",
  "key18": "uMedjCU19coUfUP4ezZpxS4NPSSKPEfnnNkziEZWrYJwTCLpeDgXVW8vn1dAcR2koG9nv9x4a3wnnw27BVSsM6W",
  "key19": "5Ge5mLWvzacqXs8xa71ZLAoQvHSVMKo5DYQZCastRRtT3KudqCoNGE1BgKi79o2fwJSqS4DThgJZUhhD2DhaS8Cs",
  "key20": "4BQWViZ3AuYJbsw1RqRq3B7bDQyDdgZFmjmp98o5VRTTr8H7VkskjT8xhYKM9QExRF367QpEKYVVNFZjvKCvj637",
  "key21": "fxYm4QwsBpwCMZLhXxMbfUb8kusDqW1iAQPn2p7sm4LSqtkUS1NfSw4VoV9QedKzLfDujAsXLVBwV4wi1hgGKC5",
  "key22": "2YLcVMhREUbKBRw2wVqcGdGXKp2TkqEuw4g4sVi76RJGKwYQj7BdLJxm99249cN2u5EpzYQfWf7bwrLNau8ButLq",
  "key23": "3K25kWjTE3JmPLPrvuidReg7HaDkQec6S8MgSz1M73TrFHNh3cG1ueNGso3ov6dt71tbjcWA9WQjKEtZr5tALo2y",
  "key24": "c3RZG23Jyjv9rZWV6NNvMEEwBrAUagEM1oxbLdKqXszGZ3KjAfYqLJFmbs6Xb5kwoF6m35nmPza7YHQGMXe9vTc",
  "key25": "3UdueZAingpyk4A1KsGU8qwyCZRkp3SzzJSTP1jsZhKX8WnTU17i6xDYnRxTcXvffdjS21RUkZeYaC2p3WRyrFbn",
  "key26": "4J3EDjJXXbbbUMgbSaiaRELih4gYajduv5EceScwfjwvkr5gCKnPSSjSFiLBqCjsxLPxcLzVt3QymxJ1WSVc2qDd",
  "key27": "g5qxjscWmjpLbxGdt83CYfgytY8GTJx8QtnQcxUDUbx2JiUBs2vTU8Eh5qgv7zmW1h2n5HEcGaXg8q5ARS59H4i",
  "key28": "5Qryo9ZiDWqkiD8GWPkAfkZLaBpKk5AxSsg6UC7MmqQZW3VNcaTvmRjgEgxPGBgWMmJvW19Yy8zo5soBbJ83bKBU",
  "key29": "4jV4xM6BQiqAMo2ZwHZXForkTmrxw54tyTKoQdFwC6WMouHs4PnMYYhqd9HAso5rMQFEnQagXpS57z7623oPzjRe",
  "key30": "kY62KkwLpHp6taeT1rPJLetgnF1zujVtEXoeejJVPNKLQsvJ7tTbtLTSGAiQ58t5aipJ7hZDm64wFbwvCUACxGz",
  "key31": "5etXgjmxJYe53rRQH5UCMppq2fii5xVSUmMCg1YhpVTXVoWWng4dx1Mh772jAL4rf1XcD6exq6GnZG9WSF139DQp",
  "key32": "3N1dKdFwmTsqPsJvmu8J3HDPxsybAss2gx7HeT4PLqx7QuuV8hFZy6RXU3XyjrW8iZ8kqA2UeXkQRzpLpYosMwJm",
  "key33": "2ppFAuUepo344PLXj7FNAwkcjjLCRXXzC37Ry6hFRe9Lndk1gpPt8JbsqU3cWaeP5FDiP1qQKqyahQVBueG4wnuh",
  "key34": "4tDVWvq8XoXMudJSrYTHB9Sg9PrfihDCPzNrnybUQz8yqQG5VLHnLNFFP4yz5Um6bA9nXexjHzi3a2KN1fYBL8kA",
  "key35": "5APQf5S3fKYM6hMwcvRBcPZZmz3P4gcSjGwd5BFNJHtex2RwkJ7wTw6PP8rY3KHhaVUVLwTFJxkaPKn5hwuMma57",
  "key36": "wS33FFQuJHVv8MQYA8rc61Y51ZJ6WrgtabETH6zuxXkieDWrXrEZrUu2uEx3GFW2ip1EeYPZS26S83t8QYkdp3Z",
  "key37": "4G9GdkAEGdfky6KRy737VDy22CTabM1i17a4cyQRwGfTUdWdZG29fRu5Nc3kMfQmrL8sGhihNWin5d7FbqTzNJVv",
  "key38": "3YZ8ughfykA38XEWgPeGb29UELtrpuziY5qDkqppRPwknfNwxDnJ4CePMaFHaNaGhFQJ1QQjKrdXAwRmv3C8S2U7",
  "key39": "5GJLViUFv6rtz4iStgq2FxotB1rFQgkfQRogfsvsbxyT7KudW5MceG565e4oPkR7U9rFKDuZd2JLEyMpojEi4vvA",
  "key40": "5B2c5QZJC1VhHPvPmK33GD3BYAuxqeEv4wydqhNsrcc3ZfcEW2K9vGmwpTUvpTRQAN4He7nrBEBZ7ZHY9j7cc4wT",
  "key41": "5RQSwd1fa5UE6nwjQ7ByPY54wUBupbJWMvdVY1FfmXji5QuadDAuT1hhV1PUYs8FbXrHUZPfWHoQfhRxjCCSrCrK",
  "key42": "5NLCtKqTq67qL6ixaivYmeDAXpP6zJEcUk5VE94c3mEDqBTj3otMaqBLwQwMJegX3vkaC5HQQ2ymFtG9MQP2nNdZ",
  "key43": "3ABDk1sxDCotiqsRy6WLDwr2Ut3vHQoddCYE66nYNECrm9AEaZX1XkbXxXGVuHwV4T4dFuRYdVq6YeHHjShysHNJ",
  "key44": "5e1v6boQnMcvzmeJQLeMTeL9zFgM8naejNbcrQuGLTuQLv945GSui3zkkfLS64jnRjH5oNs5v7jh5mRirWV3XWXD",
  "key45": "51fbD4nsu189zeLpZYQsvjdb979BATEMHaUEE7C3Xm7aMCnTFRUtkw7EQkkAXNViV8PCQfMZLqvY1cmGWWrgmvFf",
  "key46": "KSbYcz6KR5iqW5KVMU7v3wGtdBTi2xnJAnxG9BfAqwz5zyXMHn9JLm2Ci2ff9uLHqMDD1qXdhVEQ3TfE5uwMmyG",
  "key47": "2AnKuFjoRBFvsA44LHmvkqHwHgbt7xbhpqjdUEEwCwLQKQYWERcica4Z7K4mTsbmuNUsUZp741QUYAfAVtvUXs1p",
  "key48": "sYTdWBxYKaxMA3RtyJLUzMXa5FwTE22tLJtW8b75R2zMwLhjtaciaoGshrJAkk9CgYydkpV7rUKEC7qiwZk8URb"
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
