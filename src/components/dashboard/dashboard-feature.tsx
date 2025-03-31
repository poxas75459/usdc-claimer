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
    "3mQLrGApm13MxgqRULqpMkFg7NBwjPTC2VZyzVPqKo9zMtsTkj4Vrv8zTjosQBSPV3kqHJQsqoeGSo5SFfWguwUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7pgvNWfyPsxfCkofTwLjRy781kF3epz9TmGnwvcMMCAvfxtivohGJzfSg2cm3pnMxHhLnVXw3C7wid9ipZ9qAT",
  "key1": "5YwTivYVrf24UFEvnnQWctXMf3gR3B5n3VCfND5UgroPRSdae9aZ7inkBWNmpfku6NZJk6B3dJxJV2HEWnRUAhai",
  "key2": "4dsRgi2zDjsxhL4AQZQZMtm3i8UvRPwg776LLjy2hES1NnLhYgtZJYZuMb4XzPxptoG6RQLuaUX5ysVf8GL32Ajy",
  "key3": "5VAbSVGue4ESEYYsCr8bFDVCz9hVxFQmofBdcRkCTrq4PUZy4CPrK1MoSM7r8J9tMkvYJpdZMp8ZSbrJqHJ6iR9f",
  "key4": "58VLx3xTKg1eDBwuEY3Q5uCyLRiyH2RXQ4c7TQCWtLVzT4H96aoyYqXA2cx1ZQ4DirihbSrABnyDGc15HxKPiFuJ",
  "key5": "3VcYFBY999d59jRgrHkvFYLCHCaJmzuExUije6MeZJuQAQX5ohah3RXRMX1UGMnmKRWdHBsLQskWnoU4kafjBBMz",
  "key6": "3WnWnGZL27r44gBHhPQ6HSWd969YicwGVosks8trKwwrF5B4uqpAwBxmUtEw2Pgf1c3PwnGKveMtZ7fvL2gJkv4E",
  "key7": "7FejAemygCK5c8pdJAkKPdVMgD9B5PatnVn1Wxs3CV3bBbozkSqz7xBxHprzXf1YWWdP2bKEQ2SK7zysHMQEXdJ",
  "key8": "3KrXwgqRE5g5LMoTk4xLHeJMN4ZwsLwiUbArZbDECfPAEHG4XDt6MyuMttuq5kMfSjgSh8G3tPS8gaSTCnJcoYE",
  "key9": "4HZypDFM7sGT8FKeYfGrX6zY6EiCmQnzWmWEZ3C9KQ1iGWApR4QSQHzhKqTtAzc8Gp7JtfjNiDoFYKCkx4SNLP9d",
  "key10": "4He5vfXnEApqtQJ7TrecuYEAW1CgAfph1UgAu6oidSF6jj647Qpn7tTU4duCHB5j4YiVdWMKmZzDDs9hiFEKPfmF",
  "key11": "4aGPtAuwTedvZ7gRBHc2piHzxdpWFLahp6915kVgB2YAEyxdi1ePixbY3sr9mNZS2QmxqgV2Fk6ic21Jn7YcCsPR",
  "key12": "2zxtS7WGtjRo5arGiKcv7uuAUZ5M8B2yrHpufG4F5hoDvFuNeDQFMP7jm2v7JwA9mjrEA735MjiSJG7VDapb5cW1",
  "key13": "4jKw4K4MoYjjrMZucMQM6v5WymoWkGFMCwK5DW7ikga1CKYE8n5UZLRCRnWUacZx7Zc5PDbUa7atzpmGH61BaMGA",
  "key14": "RgCXcodK1H6aG7jcFes5tt7fmVMrXnm8o1JS4Y98AyQbkosiUK9Z7GiBYNDvznc34QmZbxzTYbs6MRXJ8n4BN9t",
  "key15": "7My8jJUdvK2WUyP9uivw6R5Rcx8rUDT1y1GfEJHcQDSCa8ApLGtAnDcBqzNjxpLaf9RQd4ddWGLy7UunpXMfYdo",
  "key16": "625XA3qG6atBQESST2Wv9LuytUQFRCt6FXCrGndo6DLDTx4odyE2fwNLwo6R2qJpUdJQrGPBnzikw2bxTcQsoF27",
  "key17": "4wQfXNxeuh1oDKhTj6kB13dHAwfLfWcBJRgCXZ6ko2kRT3yZ2DitwqAGQE7DcHmefzmGbNxWDEn9Mf8d1W4Q7n4F",
  "key18": "2PBXABszCRWGVnJJt1X19Q8iEh82pXY2ggr3dWwVPn8Cp7JBRkfHDKNR9dSLHj8im3iLzEBBAjLY5yDMeggXbSp8",
  "key19": "5Ckapeq72uJx1LYzZs4FmBWu17Wy8jF4dbHrUQrwWq2RGJnSV1z75TqaCgLQ5nZyr3tT22kSXWYYG9tT9Zq2UEBz",
  "key20": "48WrPShGAYfQCDMWHRMV9RzaLGTd38RUWiU7Tz9Quy12ZMDr4fwR2sV8om6zKEQg93SjneR59F5PMGaHfPBzaakX",
  "key21": "2niFamyPQsNLpAW6CA1Lh7TWGdP4PVkAu2LsWkxLgTZ5VFVCc4wUkPtjbteCMQ41XdozFm2TcSbGaMdoezW8A8hK",
  "key22": "bjsPJVYWdWoTTC9VtjM7AZyx8sxRRGcxwnnDqaGsV1Y7frMFpkJ3fvuS2hR2aAzzp4U5gqdxQBk6N3khjjbZrJo",
  "key23": "GeQyzU3FfeQWzwnF3bHvPLx7ha1phf34KkkD1gsih2EgjQZmj7etznLm2tbvTxVHij8tdrqppT7Zn8qGgTvGLwb",
  "key24": "4cCEQirXyunzTHe4BJPd7N3LBcgiuVjioPzadWH8mGDMCCAJNc6TSDLrwLYuTxQ48CBF8nNGLCTYgqGdYsdjkBr4",
  "key25": "3f8r2dJRYYYiRwccyrrjqoYvZbh2Ajhy6V7Nn5GW6b4trozTKkiN9Z4JfvzmwAfYrkLDBgpP4KKAYdhwBqXPdhkL",
  "key26": "43oYPsiURhFgageuAP6x6r6vKf2MdU3aPmUnymWgLQdH34tD9A4bPKWDhKbaPAXHPJWPcdyDLKBiDViEaqawhH7k",
  "key27": "2oEwHHo3HnUifmc7KvNYUaSCewx2gZHvfXtdXop9ZHKqKbMfzkoTiJcePt1an2VwcLR517QHiwfunE28wCKjPPep",
  "key28": "V6t7S4ro9LCbQgBa7h82UpY552HzUhTF1S1AiA7VefhJ1G2wiWqZy2eZAFt66vLtC4k3bn73ZoTQUsPYA73y2dW",
  "key29": "5vPeH1sdLAYDkS4qfpRyGv7pddKXrQWJTg2susLkicVUd1yvkSYsbayW58sL7cRPrnZtRhCsrwaLCaw7xWEPgkWL",
  "key30": "63B9xx2Vhn6zkvd4mFGvrXjU3RoRfSZFCqFnX8EwX69YhWhvaeKABLGz3u7tkehKKGwRi21w7xYXSMocejQp4cAT",
  "key31": "3xDveDFhHJfC7a7Rzgq1ZXVJwDvtcC6b12bkvPGUwYKXYCFfKF3pj25rHa1fdVQqBTkkx5NKgC37Bc1WHPCbLZ2p",
  "key32": "5AoHH8VDKZHMVTBf8uenyTqzJi5TmX6kUzBPDhUkqcL1M6UUZXc1c4ED9ieihvgxrEkpoUc4UWvFbzg9Um4amq4x",
  "key33": "3X3FXUqK3BTGeodiDiV2grv8rnV532gnKVNRc4xq3hX8fm4GnMm9EdJkSU28kLjXa6dSwJn6g6xNwheCRTB8E7HL",
  "key34": "5fMWVqQ1suKxJJWmFhdtoGvyUropoBDf7ZdtjrM4q1Yuvbrv9vDN6QX86vFfdYz9CKYLfKozyzvwZuyL4LbVptet",
  "key35": "XpmjAZo5fcYGGrwq21oK6pWXJBmJtP24fqQRqHJ43fsvMj1PWP1W8d7tBF88PAeyZ1NxFcXj6thyGHeG7D8zD3L",
  "key36": "3bdjCpRvRUvzxjHDps2H6t33gGv85QcZVBTGkNtmyCspgBHTAwx5dHd3FZ7JWbeRygL9W46oGwh9RQHtAgKrxUVn",
  "key37": "RrtDGuBW4NFqXU4QAtv9otP6M2CJU7CA1VfiAV3syMJy6i2qEYa5G71KqG3FSA8JNG1kyvUV5gjTUUbd7V42FXr",
  "key38": "3v4YGzXKJsNMeaoqGV4vr4jHD6iAVN57PPMm1K3iXgMv7cX6Kp1T9NFwgr8cfzDTYULYbz7QYEBkS5WYA9MCMjAY",
  "key39": "4RA7HWWvBUQJeC6JvpPXfLNSeBu34Wkn3q6g2uX8HY89Rw5jz4Ca67PwJRmBntX1hoe36ZuPtEqafTDXEWs3e7ac",
  "key40": "3J4Bam91z7FesaGgCeaNb5wpo6GkTKZyftU2ZSKbePw3asMU7yw3ckNBRfTB1jKUxwKAvuBSi9ohMwr79ouamov8"
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
