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
    "2VMGJRzV7yCtas8rf2th64g9koggmqe86foiaFqG2HWENqSFuAf9gZqJVJAHtzk4hZh4pqFyqrjQWef8jiBnMjXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxfrYBEkiGXsu1HUModnZVCsf9h2QeKpwX5opNtvfc7eXiyAKcKhbeZ5jG17MzfLcMsTkpFrzUeGFP6QaSV6XUs",
  "key1": "593KGbAFWuKFh33VTGzDX5ieoqyNSUrjG2DCvNsiFZYo5tLZRdxZBrsmDvpp7UX9Na4SqEBubRbko2ryRiXhvWo3",
  "key2": "4UZ22SZxNbvedpnvxLVXwQcUF2Wnx8RHGBn3MD4LNEFpLeT1gHWQKo3imav2yAh9CMo6utVuWDn5VQH6QqcxJ9ma",
  "key3": "3fiRXDeEDozb86rvgGxAVUdgioZf1f7nHtETcoF3c2AKwWHw1UZrMuph5rVa8PdARAaYSzGboG1LYKUNJYJeXdWV",
  "key4": "2usmo8huk9qkEdVe6G1JoHeBTCkApoQH265VJYWxpBTrFYuh7dqc91CaUbWcCVzfs1fG8QteHS66rjGN3GosbXw5",
  "key5": "5e93WA234DL8ch12W3Ja89ZwrazdAziG9zPmtc7rraSKZafnDpPLPJCCwbmfUuWwmKDDhCtPkeJt4uJqwLwEQcc1",
  "key6": "2FqswSPvLiZesKtskJhM8fHu4cSV6wf8RqgsUw8srTgoAXqP6TCLjgC3cWvZEoAhCCcp7Sw8y6CKJf9BLSqWqEGh",
  "key7": "4cKiDGMySKGqYmwz9Pw5ab7ptQY4L95QYZkL1JPBxkNFiABEhMLbhmPyJqY3xfE5kAosbYe4ZrU98gZnrBz9FdRy",
  "key8": "4XSPz6z5yW9Py7g4PRQbFW2LYS7EZSfuniZ2Dj6GG8hczqxyRA29jaHFvDk3hWk4NBtVmMp9Y6ebyaUdugAXDNQV",
  "key9": "51j6cmibjx9cQhjDfhPgmugXoCB623Bgv3Pz2j7235UjbLUZLoSXzrWjvoyatH6SKdNpC8Nm8EQ8oUj5zfyb6MBW",
  "key10": "3vrrToRTf3fc8UMpg2EftMdN5WTemdY37uPcDzzBosBfKuvG1wZHkwu7w1TiWJ8kZaxMgiJSfcVwidyKv4b7EjXH",
  "key11": "4RdR3516huxsQopLJyZsJSFMXDqWUy4tmk1bD4FvXF5G9svfWuPiRJpNLvAinABzuyeLvAUzFJWTKV4MAZeBr9if",
  "key12": "2XgbBZ4UmBJV9MNZCzgwkGQm3EKQVLz6YJ1ha1VGP9Epuh4TJuNSyX1L1r8LaC1frUiRGayfZKKW57RDVzrLBYh5",
  "key13": "dVMEVZzn45WvuiY3bgJnRDDL5kCTuATMysMH6tWRHqoSE2uRw9kPuy3yBJxgdKjceUPbHXcWE7j9JKHH4TiR4Ju",
  "key14": "5GBm6gG6s5P8xAbfrwsJRjZiRqtjHsqVxPx4wr5cAoxsKnSjKYVhEhq5tfcmgssDD8jbHC12XNKaxbQPBGjg2o9o",
  "key15": "P5k3tnm4MkPV3SWuAZ5Ts1mxgVpDQnQJGzca7tkLyxx1B8tt8Rxjz5g6t4TfnJFdpwD3s78KocuD1ozSH5svCcS",
  "key16": "4RxBqwZ3SLZT4i9v2zd9TBaUYkG3iHvs5T8AdTu5MPMCACY6HJs1eDr5qVM1FURbHz8zLuEXfJ8ESgLVn43wFp7U",
  "key17": "58Myx8J8g2ZsDu3AF4iQkGYe2QBqBMTZZxiuDPP1m3AeyECp13errsh7oVKLgFBMxVCD9dQccrCdKw2gCMQRRUg3",
  "key18": "7C587eEACeSxE2S76mvqF5SR9JVkwNFMQ2NUrNQkYNHX3JSDSD9i2sca8rtjaQ8fYy7kun23v2athV4KdacoeE5",
  "key19": "4gLf2Pn8pCfyLwiPCLjMDWkXWeJynai1q5v1rYAxbudxJRHCGVRvEevC1HcMndKhDsDTGUqcZQWExqynvQGPYiCv",
  "key20": "4SPQvLhAhf2wibMiHDvmBZ3zSFC8WRVSBwsDUa2hf1fP4NmMtL2wp4QT5PemZAjX8AnQzuGLAoZ6ZCkbzuDgCxjW",
  "key21": "2QccvAfurKs2WZeY2FZdpmUy7phvG5j1KtWKudUrJjsEkcapvBsUnmhL3nobQuM8gZZCg6jnZzHT5nrwj1k1rEaV",
  "key22": "NTNYmxPscefdhqnMB5dqvtp8D1fCEGHUrjw4KZex9YWmh23vTh5tgdEBD1qW9hAwMJGLYjqkYPbzpojxbAVJ2fR",
  "key23": "CkqboogV8Zj2mcF67iAXiNsnHpHi3R23pvtJz8EuJg1tBv9onTQdUhLC23jPHZRLkSQ5NZsVji24uxjbtUWLHK1",
  "key24": "amjT6EchjV4aZUjpUbnwtnyPvnow3HjbaJ6graHveq1Siqjc4UrWFCuEsmuY3GgJeJYEosvdbukpN1HaaKifSgB",
  "key25": "2YzrLAnN1wBxkvN77qA1Vd1KzyifJ4erpLLoVeduC3zyc9yB9vZB2MhGStWapSXtDAXQmys9rN83FeZVmwPGwnnq",
  "key26": "4FCHCTGXyqay3k4rk49fr3fJNsDbTa3FN31LPUjp2S2ctWou2TyHSTi8bJve9HwFUgJ2BeJ4N6kFdH7rJFMCpJwL",
  "key27": "2ocMTnK7FEoDv8WsT5Lv9nVYFufMv8hf78C9zBdtYW7cTjPBsBSh5C2XgYxaNxaS9663euByhzKMiEYFqyCQFPiT",
  "key28": "38f3fYeRCjHNdj95jDPkWFRFLMwzkQXKHk2VeeK7YwudSNCN4qunAnLU1q7HGoNT7YGZnYzcXZP85HV7KpgmRigf",
  "key29": "2qUUbUM6RYqy39A1jiJYr3WmFm7Ni2YzwJzUX8CHuVCP8P9YneiSgfogqfmNb8rZaqBfTeVRbePvuN6rBDVAT4Yj",
  "key30": "5ATpFve4EMvxr8DKXDoM3BxPDTamFNWqnndsahuhtir2dmWU4ZZVxdJc53xPaCWyzvR9BQ1LKTMSHkye5fQj5RKM",
  "key31": "2nZcxXdn8Hats2MvQtWZ99yY2tpHLhtYLD7U7p3LfFZuLmaiCiUssxgrz74m8fyKbSqCc7nBQeNBEXJaXTFDotp4",
  "key32": "4VkDDGGfaFWChNifoL5hbWAW7kJEgZfwAiHvYJE6JmtABEEi5Uo4dsYT8Nm8HhivegHyJ88b5EctZgLT8GCBphuG",
  "key33": "67ZBKEYJKRbXCNBSM1RvQSkrtZn3Bf8Wh3P18Uq9PfWdiCtKdBGCLuoCxjKok2neSSMKMaMwKtXJWBGxFbbC5n4y",
  "key34": "2E5wTYFgLPgSjpQw5kFiwzYLXRpjbhstuugF6vBXZfbQMbvTcw42uFRXNFQDWQnKQdJPUHVkp4SQcqYSjqkRR4g6",
  "key35": "4Fz5CdJCzmBsjAKYCd3yVbAms6smBZEd9ttvQh1nMUv8v645Ry7e8SXdGxoWpWbCQKusggg4vKp3s9VDZNaXMwpM",
  "key36": "2cxhsQnimHXaxJ8RkR5MJXsQ5gWqVkUZ5VtKuymSqLkjX1mfp5nVpqvgkbQMwMMpPhbjw8JwhaYHCB2d3VDTTreR",
  "key37": "5SuE13MVLVyt3a12NqKyCibPE662WNd53abXZzTDHz6uQXVpGGpfdBKNTTL3EhwYJd54FzoyNbY3bxrb5u9DFMZH",
  "key38": "2aUccqCihMxJRiCDiXQ8xj219MkLynQSeHPgCVY38Yqya7bq5BwCuWGse2GerZJ7JxV3BGJeSFkHSSmL21BaFcrj",
  "key39": "2Rm5S5sLSfbQ6WhNkrmmj8p8syobfhvbb2gjAfxfFsV8Ag7vC1nLh5YZ9ZvnWRut7pvK59b5euo8KDegFdxDiWGR",
  "key40": "3oQ4TB43im77xusETGP5EWGssKpVBRdvH3mcadfo7Q3zSVDh2hKLMfTUzJg1SfsYNEoasqq75S5VFYVDpuPgRCos",
  "key41": "5pLbE3Z7ZNAVEKbPiJi41qs2nPouTc6p9nUFXxpTz9qDrFHVav7zPJxCnGZ99UcB13NF2r7jafe7ghwiZqhnCYY8"
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
