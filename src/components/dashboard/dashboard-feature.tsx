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
    "5nHUNB4g6RdzBaidFNy1UQUi6cnrSyNUWQSFLuPGdkErXxunm3uzqZyY5nd7j5qXwEYf8K6mAMcLKBjkd46W4FKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNibxUPNTk5d2Qnp1cnGSfTXLuhP2hcWkkKPYceNv728dSK5azKmUZpYPH7bRzhd83njN2RhYV4g13vMyqc7P8q",
  "key1": "3XhU2uRxT7jiuMdxGTd5xbASEjt4QkwAN5L3wc2Uqf13z3VQKY32PN3iyFvkQTYi5KBLbjsXrd9tG3hoKd26Hedx",
  "key2": "4AGuLDNXjRwT8q1BSvZyimNQxbjEW4V5ERmsT7rxubDLCD9t5Lebe4rCwuRzwG6U6SvNu1R22MzbBgqrjUEums6y",
  "key3": "4MPs78gxicBnyTL5qoTRvUqGDAg5LPJAnX3dC1YUADM228haksdoPSKeNgfUbESuh4eBeJ79ZZCiYfqNeiVmNLsg",
  "key4": "4BK1CVhjFRfx6neJYRt89BPAzRhBEGXSZTiKYaZSPgBEkpBVxLp5qgvZEsJRqtd9Ft8VwbNk1fettQUKEMJBbnin",
  "key5": "4s5WiPrGcxGZHma8kHgzCNitn4cRWu9diRTnwQvbRrTZaMctZtGnvDthdx4AXPBYpSK9JZPeMf7VnQ3xB6SBUKXF",
  "key6": "45y6xSLBo9viHYxGNVndofCJ44mrQ49qTc3q57KCS1KzGYZsUiYfEpDYHJwCRVCVTXvJj4jDYPPgCEZTRdLL4RYT",
  "key7": "2Uyqe2LCjJF6gx6aSeh4CHPpemvM5Vn7ico8SstBEcPN32wyHrE6AjEPYoisvwTv4NQs7jJVdg6kK4Vs9jURbowQ",
  "key8": "61KFXbSPzJiCcoPb66ogQQ7iUmYiZ6CLJ9s3Gmd6ywnAbnWtgc7U51r3sMAb31houFHtenkWvGQG2ExFR1JMHatX",
  "key9": "2vZPm8uAT8QLqWYgrh8PqEbU3rxBLBpsovy4T9MS3JgHMeYdWuSgdy38DhW5UZCJw25RyBUYRdVQB8W5SNXHRXtb",
  "key10": "47agn8nNkhdCmcDrdtNJJnNSxieFUPrjArHH73GL4be7jxaYaEmVcdPH3f6agkqrhS4xFobzTFzc8anosXHUDZpB",
  "key11": "2ZEqd1qV7xXdQeQkYiUiRnYHPto4GTT9pxaiLacMZX1hcq2aEE5T8LngEJgy8iBj8jUBg246bM4efYAhaMugCJqZ",
  "key12": "39juVv2SWJjgq6D9F3Y4eLv3EpV1UWaLCTXMUrrTvUR1ws89sfL8y7CDQ6unLqaHZKhptDyA8nYfZGJ7CUcHZCLK",
  "key13": "2XbtKVKLwP2Fwn1tyv3mrb89P4oos9D7WAb33CkD6rCyPzLG2wTFRmW433KuJg5wf5qz22eCZ2CJptiJz3wTGXMS",
  "key14": "TrHcJBWkW4nFn9KLYJJaR1L7xFthvNJN3D4YtQYdK1h3U19SDLw6ttQrzL4xXz19Qkti8WMudix1bRZXWZ724gm",
  "key15": "4Pq3GMJUXYuMXgnoxv2Rqg6sUxjhHeaFURUNEiJYveNuoZfbHgkfKCfBM6S6JfAtdUA7uuH67QrxTpCvZGcxVdoq",
  "key16": "5yVveumiZA1F7ZqasREQwk31hqPmC2uatom59DwkehYBUFrWDKUAcb4gwmnxQX4p7dV3jVg3M5fU7rfBEd6ETZms",
  "key17": "gN9ShYgNMc1v3Xo8pS2Fq99Au9NwZsG3e5bP9hZP3LYqKUeFCuLyxmbtLnmBC5HdLWdbVxnxLsaBJTuz8jRQPW7",
  "key18": "5pDAvR7QTfonVnGinhHs4DTjZyThaRV99UrXBw3rqcHV1r2Cvb9QKa68jn4s9AyZr3RMUxbSHzns7zbxv4nzTLE1",
  "key19": "duMnjJPycSkz6PQ6SXnuQ8kSBCAxTKfGcvJLkNZQwm9xZw2n8cmiojBUwk5CN3cgRns5xDGRPPD23jU9KnwA9Ea",
  "key20": "47Cwmq37YPZNHYKjfe4ubCYRH4tEXkaPd3vZnAQzKnXLBSQWe3W7HfaaPqNskfc45o7uRWqbpeFy56rFY5QFLcKd",
  "key21": "CfgNN3vKvRKAsE8B34sLtnhfwP4Se55psRikAtZv6dKcxn8QR46RbxZgroPL5UdNh8xZfvsuucG92iG9nMipDH3",
  "key22": "27dFYijHvsMJzCUPt6NksSb4k3KNBvM6bMR7ZrPsmXjbqGZy5yDPXTLGav21wDqkodFh11dXtXrRA9KdA9BriSp1",
  "key23": "4EVUqA9cKD9cprLFv7t7Lxi4P8HB8hEYmUNw8i8VYN2hztcxH1RgjSbsvhrvyz63sc73JBVUhsYGYbxUvYvwXzfF",
  "key24": "3fG7D8QqqHDckWFRWS7FEBzYbg2PK7EDqB957ZFjQaJpZg3uCEhignPMyzt7KxnTszdLA97NuwwVE3Czi8fpALPV",
  "key25": "5YFhMRBBsP4k9Zn81SuXtebDdmwhR8JK5DFRKeNKoVwWHHGR4KAR6jvpLU6RBeXEHXGC8xwpBDu1LXSSWJQHZkZn",
  "key26": "5b8zuLrJwWG9aScs2iF37LgwM73WnERN5yfeAv3q7FshuW6CXJALuWx7t9mRpAjmpUWrRmRkNmRH8DJkzw74vzHZ",
  "key27": "2vWNZN9fSFtRwi8TS6rCEfM5EPk6TV53EkQFjeyoH9FePvN7GQREhYZgpaEoCy82gcymxdtkDmxGUzBenUbRwWK5",
  "key28": "2iMT7d8uxGaB925PqgEWx8gaxGG2d3DBb9J2yRNWAZZC4mJvtZ25BYT8ViwGahEu6MJ48tZTJXgY2HzNVgnokzhS",
  "key29": "2ocTSPTU5JG8wokPkiE9ccjPwRrupf23y8iNbmwR6eFbSNbfNmEoHKUsJf5qgGKHQEWJwKHEoqjDUJbodmisNngm",
  "key30": "3upjj7dgDxrUBeejq3QUCny28iNdZLvF7SdtzKdYtjhh1YXGTnjCm5pjQHzA7iyQ5JYkbvfyunrrwhnSsHUCEYar",
  "key31": "2Zr5gVuEWiUiH9rGFE7ECwU6YBTsuRvvDCfjnJGKm1nVG3XMtkFa9Ss1zHh4kdB19n3omeMwaavuMzjujPeMMSwr",
  "key32": "4FZUkXCsMyZUWX7GHnMyegeZFsroXVBP2cMQpRFDq7WcpFv3JyXsQze8geodZMbGeWgXVBb5MKxMiNwWKgccEeC4",
  "key33": "4iQsuarUjZy9oaKsdpX27pJBKFcca6bp2wih3HomXW2vcF1sPJrzBeMx742KpuD3xbandrbBqwWuBJG2CXiHKVr4",
  "key34": "3hBY3qxDrJr28kbuHDKuoeixN1fGgXVpFfbeyEZ6R9gsZu3zVCRYjPY6yEuroUsDxtWLTwYSiRs4zje1TJb9CLx6",
  "key35": "2CdBJSppvLzq69xornf6sUSTgtKyKgJ9MEc5WqGz18Am3oPkbZneJ4G5znK7CeS3A2L2hw38xcYSfHW2rKS5oQ9H",
  "key36": "3VFbHQfS9QwQZ4AVyy8cJ4m5EeKwxFJAEDvXVbkQVydpV3eNRbXMfV8J5qvuUQ2wr22uCSoWxTTvoQUSG8qziRH4",
  "key37": "4buWYrY7Th7KctEjgWmnTKeS6xHikVPn3xs8ya6Vyz8V4nfvjHNkekoGeLw5gN71f6qiv5GvFVcK85ScdwS2VStn",
  "key38": "48XmyUJpTXuvcymgmDZbU6Umyn3MRWABf6B1zLcwJB75qDV6cwhJEeVBWscL6EGYvdMgbc6zWnsHZvc5EQ4xjtWp",
  "key39": "3Q5FPqCQRsxu1Apiv3o43cAKVNMzFyD8HG7FBqgYqDytqGdzDz9ewMXUMZghau3FQjyLAKvcWQeukFHzRabxFBFj",
  "key40": "FLVUhuQtMzW5ekuv6SFRZbr32isAw7VMx7ssDZUte9oe1fHhUx2iMFxnWnkTyPuR6CXE2xjuCCkQ2ZgZ9w4YVNn",
  "key41": "4sJC7JZAU5zaWKji1H8EpsfaQakeTGEyNcAwdPsv9w2hVuXRnFDM91foufsfjrJa3PaznC2aVrdWN7cZu9KnEHsv",
  "key42": "4muoZSiWPztysocTe5zKN289m3ScJ22o3WrrFPJDQoP3eDFC4LSRVk2PksBGgbECQAW5Md4wsKrWfSyUnB8e3oHk",
  "key43": "2yqH3zgpJSSFQhjnM7cavwpoEBrfsPAJMyPUCAbAAGEKmHdiHuSjTjcHb7U61hz9xDZMvcu8tJYrCJQQX9Uje2rU",
  "key44": "34qifwV3rXwYuWstQEApwWnHi1gCHs1dFaJ6zimp399n2Yrs7WLK4d2yc15NKLiZdeV9ZkjSwJbfmF49XiJBuP9J",
  "key45": "NTeE612PAER77L1L72YBMJ6pcmhGo8oiBFDzcg81N26PjyJ3tFvrwfVdzvaPHdvUgbAzbG19eapJsd2cWjmmtAP",
  "key46": "2DRVXv8PBdTKE4pqFu2xbVWwEWpn3a7iGUYtyJiv4VTvPFbgyXeGxwqhmQRfo3ALjep6dNNuajsJb6VmnP5sbPY",
  "key47": "2DSot4zedZZeG3cJzTz8XDPrbhGH7CRty83tnL4BbVVHxZrk5QFfq2KUGEQtz2sstik8ryQ2gSBGak9kBfu2nbcc",
  "key48": "3QJpAzSCvwLxqCLPeRkGTmpEHo6c3NYkVqNrzds5W15DHTaihAYxSti2K7R9eidzX6PjnBU7oxVCtnRENcQsAQp3"
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
