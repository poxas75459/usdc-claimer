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
    "4sDw8yqXF9JGJBuRJ48bQPdaqUxpA2E4EDr1RLbsp2nY6HYe3zsXp9BgPGhDm9ycBvkpe9j3gXT5FhZbJfgk6EEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxDdZxHHbimpxmy2VWkNFp38mRApdeVN8prF1xf2btvdQsPnsBEWHWvYMNrJnddaEfqqCfQYFXPJVekbzrx7xaw",
  "key1": "5tHs5vUT3eKEgctGR9mUePKX4197gZsdeXP3cUaQgbMP76j4fnsGePH1undjsLXAhM1dLoJYDDKqsg9RKo9sJufW",
  "key2": "2WohSXhfRZiJizfP4tt24cnVER31hxi6zRTsDXtkaZcpSNkQ4YqrBhovvGaxXVDyCDtC8J7BnVzDjbSCmEPSJGxk",
  "key3": "5DQ6puKRRd3XG5B9qbsyCqx25wfKn7dr7q2Evgq1j9pdn7GtUuqWP7eMaZ1RFhCifLzZSbjs34NcR1uNZ5xRs3u8",
  "key4": "UQR2f1fHVKPqpF72TsxfpVJkS8XR7ePtxhcRjhLFqCV8fJcVUddN42FJyE2TMNm5f2faLLQbUsEVdXD2qBSu1yU",
  "key5": "5Tn74kCdQxuRpMDymQEWx7y8qtVmHCxZzQXM2Gv5WdwbqRZdKXXj22VMbKJ8dDxhLCC7VRx57R9Mp4pjAfww8QPr",
  "key6": "5ebrw7JTRzLW8szrypRfvxWh4XzDDFkU96HCG1mgY2bfZsuQ9JUH93vg83vzKfg173Bm2CwVv1bcTTzaDQSmfcYF",
  "key7": "NYDqEUT9vCNySDXTbcifqdnwBaPWmm3SPJZ8B7dDEPvKAqUPP7m4vncfJktt4WfvcGV96CZbhonwzpUwULdz6iw",
  "key8": "xaoXMj6w3XHQ7PbCN2xHwhgZAXULcrJNDJEkdLNUjUU5g43itPeuXQvYmFW4ByochuZmJrGrJonnv6NmwHM7HVg",
  "key9": "2yrfaRne6kra72pJwxtzaP2342VUzTiVi6YtjxyHgQzJFY2iAWJXdMqz6vgH8tZ9HuJigm4T1eSnGbhycvmdThg7",
  "key10": "3VxCsPp5o8R8oXeyNtyVMZcBxqUDAk2Y4UZY3yWJQhqDzvgP9tBcpe6XdbpkouyveWuxoQEuvWTLvyamn7QVxTa9",
  "key11": "fxaM3VvAF2YMQRABgvhHyvWGxbH8MZcpowinwefg7PMDZCSuzNzCiyHjNicEcKgTwYkmJcj84Pv3HTSmjFLxDak",
  "key12": "5C5h5qw1w6recbuQAZVyUKdE6P6szvCJyWxMR8tdtbb6ELRD7Hzdo9iFdrUysSR2NSjWc8M6mF9pHJAvEYceUxPS",
  "key13": "4kYgMa2qiGU2cy2vKSuwpr5uS4NdkViN58AnBEpjV8LwGRrPaq9E81XE4wePjVF5xHaXcjST4rhwDqM6PKBuBxvK",
  "key14": "32ZB47EZarj7UfL1qXbvmiowTYny8cpWNhZaBQofBnZ6wz7yFC1qigNrJbN4sRNKUAAVgVkns6h1VGMoK1H2zKUE",
  "key15": "4aypnkEXjaVUe6NVKAKzfo39WvCE7hWvpJ67Lmegr6cF8UUAXmRrNpbwnLyUph6wvqhUpmsLSJyJUaeFuoREZJas",
  "key16": "pAfBaQFXX1b76WKNjppeH7AtXWjRMkCsnv6JcP1xZwaXz3eveztdCfYBG97JEgbPrJ1DEDuSRGG3ns3vdncbvZf",
  "key17": "5fkGR5L2XifEHVFwzoviPGybPDHsW7jiPYdAusHLm62KCMmnhTor55TeG56DEG3BBUQ3Fs5vRiio6npEbqAhLs8a",
  "key18": "C5whHePVQvujAVKPBkX37s2BjeHhr2t5phcAvY5WBQMeNWpxgb6CHJgLAvoXfNk8cu7hiLqtvvzYWBC4HNnXSmb",
  "key19": "2iVSFhx3mGveJdbfxgVLz1EZBpK4yPsrUqxmJVKrrLYKLNCssqb2Hh9GE9vLTjrUTufu7AxCfaLRh9xDrTmjsvnr",
  "key20": "4bJtdnyQu6nsDGFH6wwnuvzX2UqDyDZ4jtZoWgWPDiLRrgfSmW7o3DQWuoDTHkeVEr6gpYNApt4d2bJ5dhSsgyWh",
  "key21": "4Jmm4oJFmngVZ8pzMdFRmbC1RDegad8bNZqUqYAm1godjt3ERZKLniHbZHTbJsc55s3XsUpfZx7PxkGQvX5ENE44",
  "key22": "3VpPvNYCuCsxzLXLat2UHqCV9YxzYAikG53jsk9NXwVBikWE54z7VPCySaGdCKGjD9yFkxPEm2ocLytB5bKLysii",
  "key23": "5UDH4Qe2pdtUEu1qrmJVEucrV1My4J7szG3swuaQ5gHb2e4CqeXSqBX2ZKsWBuNyqPzRWvGN5vTMUWsBDcFrzPoZ",
  "key24": "4Jf3pYsLE4xSFXR8iR2tUKjJpMygXiHBUbzoGaQbqAdocBgneDBmRWGdaG9CPUbV4KF9mqp4tjJGLhxTqFEm1ZE9",
  "key25": "6BgKmnEoxef7Sz72pUtDM9EBp7A1K9NKMAt9za2mN1uCKst9CCYmdSpVhcMfU8n5xx82NVQdKxumXYTAD6wJ2GA",
  "key26": "5EnKYjq3pH9RsiBNR2hz7vWAKf1d3Ub5btjVMeRn3X5BrqWPF1af7BmoWtrkQ9YS9cAJKdM3MbDL8LgrhAMC1saK",
  "key27": "43H5L9tp5bndrWEahAhcv77sDSe6mLbcNSWP6V8XuPDgJHZMAjRUQmdkEnrjePvN998jNq4DiTMXYyYGZmKDhUUQ",
  "key28": "3dZceSYgTbMAvntAEwDie9G7nRboyEuUkKKJ67ce2APV7XKffkuWwqC2VWWUP5DjMf8Ep3Gyi9hdGjjv6cnCVyav",
  "key29": "2QAeYzYzoFyLVN3G39X1TQUPG6s12KFUFQGoCTDFTq4qxeWszhFFyDFppwVgJHfoSJGTfGxHDGyjsvvhPdQuQftC",
  "key30": "JpyQMAhA2HSSLqKAhhLGeisyczjtTRUZRas51hqpL4gpr9d9Vq38Z2eyeZkamVXPpt9eEbFAAhEp9cS9n2Q7Z5X",
  "key31": "JBMHLGtoLCD7Zs2GwXVcQff9SGS9oXzUP8YrFMEVy7HCAjtp6XZ3UMVFmDVyZMemZGD4tp23Q84FQ3AobHMrmqS",
  "key32": "3C8Uu1HBqkq9bksQdwP3CFYuvFpFPwaeR2WyWAJUpchDxQrynMxWH8VJPtqmsFgrybKzndKXNBoWsR5CcRd2v59z",
  "key33": "3MBGXbH27CqjwBkqMwVzDQYgNm9Rup6avjsPVXCeKxfXUELGaUTSRycUyMnxdww8UNZf3jo81b6f3bUvH82eAHjk",
  "key34": "4DPQLoky3qskXLdSKhAHwNzAdLGiZQrwBMDtXNHBof1vEDx3bAEK2nQTP9QVvjjzQvCiSdCKz74Mjad1f7vrAjWw",
  "key35": "3S5xf1EKCdiu9sdcFnFGtdjn4RDYUtgGSZJ1VVXUW1jFvpGfGQaKPfRyoW92LhBGAKyhvhYejypbVo5aKRBiUVGx",
  "key36": "d1KPCctJnMe7eX8QPt5fFxuZGFcZWhBvGDLnR71v88Kap3DdhZgSXcD6P1PrpwjVbjTgarnJEiF2DnrUma9fgsC",
  "key37": "5zyeVceMJfFwNfYoCffBJ4WmKLccvXf8wquJc4gcfFJzzUiG2UWgXcgoY699vgoD87kC6P9mBHtdgwLk2D5kguNg",
  "key38": "3AT8iKgxZm3UUBSzWgDRYGDrsUh884xtH3zucdb5tRwG5BrBY3wsnEJ6DeMYQujKBeZUbmAHiQMy3gm3Eo5fLwd5",
  "key39": "3aa5r249epmfZaAjjZFBBemihzaqm4bL6rGMXGvamVeHUxrSEVTuRfzMB72r4257cX9XyMyeWo3jSFQ8H3HX1Gg7",
  "key40": "2qGja1gKmipXs4icfshmuSmrWK1oCaubTuLM4xeQz8pXBQVhnrQYtgxMLc3RoPqX5ehGjmh9rRzp841uwzdvMuz",
  "key41": "2qtAx2DdJKnxP1XrZPbU4p6uikMFNAta7DBWpgWYTXtp1hmzE22AypTRLNR36hc4qDDC7RSQv2KBq5R3Loj8NtfN",
  "key42": "3nZmxTaEi3E19VnqxwKoBQ9ZrV6To6yBWUtCjLKq42VFL9rPW5VP87tYxMVjTJtfF5kQuFCmXC3HUoYeEaXBpuBp",
  "key43": "5oSTmv2Kw5RWcwX1UMZSxrWsLyyAYL4qe9mvgMXD593ef7qz8zXpdegGCGAQFhncPCJrvPkUeVxQmu9hUnSjgLZm",
  "key44": "61YA1Fz7v7VvSaWdUYNCFYzhuhoYY9GvCKYRXDEPDUvzJ8e8z6rD3SAXQCwSN3ppegRpdMcxRgSBq6HRcMJswisv",
  "key45": "5kQQ9FNrF9Bk5BSwxHsFXQ28cwr5aeZzgaLgwf6f8jMACAsKEeRNhXER911UMC6ti5WrVE29dAjLhWa5QQyPA8VB",
  "key46": "2rrFaSWQjFjpYgemAGDwu7w8AxXFBxG5i7VCFDBK8ccw4ihMrmjqd5LdCypwmE6T34VrRzwEyfz5N2yoQxTbhXZc",
  "key47": "KM6jGS92v1LunZBMDCuDtpoDQcBm224Xq2HKhqiqgnjqTQTWmWsx2JRWc1XgbheP9panxy5gEesPQ2KFDPL6iVs"
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
