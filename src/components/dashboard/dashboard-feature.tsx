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
    "54GzT5JCqQj2Zx2oAq3z2UjtK4Dsp2C68FkSBmqnSRXNUyzU7k9sfit5xq5GsX5hAPHR47Y7iW6LDvGmuhrYhxnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2SuFmeqvra79X5Tmfz93pxTLikQQPBNTMxdJLbykbByf7YPknraDzT5uhwcJVKsbaA5PqDSt9wqAzb7HcwQZiL",
  "key1": "3vpANRgrsR8y9EXEYnoxCAnFxpb5QuTD5Vx3X9aMav4ENc825qHvvsEVtNUybiGuUnfFhWobwLWnkjwSja5jdQx8",
  "key2": "2ZdpFLwofhu4DfdWjTqBTjDJA7GhiPEgThf5WsrPgCpnzQ8B7pdoMFWijYVHiN4GwTBoJUsXQxkUMyspvSQcicvM",
  "key3": "2q6B4LLJ2Vz4MW2NN1UCFsPPcVgLtHk1cmb8vgbi3PNbUnZu3dXXJ483Vpo2KYwV4S2RYR8ZwQaoKM3SJuTsX9Rv",
  "key4": "2Z6hYvAAY57SvSFVNfz73FK2ZW2MsX3W3i2LxNN3XJMgTVdihzYs2rt3X8CacQtv5oCjXaiSkqe5pVnvVZveL5vP",
  "key5": "4VGL3qWo5f2mPBpq22cLSW5dRrLyDKrkCzgzFVWRVwGjP3Fn2HF2g5ZJ75V66UGW61DUW8UYnC6zgbvq6EUKkVvh",
  "key6": "5G7j2RGNjEnx4NAnKoyddRVMUJnWAUZQ4dokrafJm2rWM6Pib25k4Pf9EXoUzgAQYHWMB3yGxhuBQoCQNMG9jSM6",
  "key7": "2VBTY4hmgk6JyzC9bUi1JdGCpX5LZNaKW3RpHxomfpSyo5CGY2cTqSqde9dNZBJo2ijWGykYHCqtJ1yzWe8Y18r1",
  "key8": "42RiZVv3vwkmRZGudqnVPLE3jQHhsh7WHcpNBVdiYxM8x8o6WUk1fxqZhH1em11DdUSyNgu2TFeagWy5Q5HZES5J",
  "key9": "67WyM1Vby7Er27SRfLnniJpTZ5TEru2mtnxC5xRqdRnYhDFMcRUfUYcVjggwqu9JvkYS9jHqarqMofrn5G1SRaD1",
  "key10": "39qvkhCSLsS3hKWdy1rEWCFN9uRp14phtgFz1fhkSZ6T5WVK8peb7qsutAcAt8eQhRBkrCUxUc6nwuqtvcAxMWdu",
  "key11": "3L397sdzz9vdrrSMsyfrsBFcTQzLCR2mRCeh37jhC5vSev4A3EKSS9NUoZij2qGWKv1sQqbfiPJtx1cakYu5Qsjq",
  "key12": "4J6vc997qxtjzfoxR612v9kJLvPhZv3ct4q51SwvbhNzbJQoC5NbPCVxt5LZxDYQkJumFx9FfNYuSm5xd9J3tosD",
  "key13": "atoCw4K1XwUyADgGmVzmJHewH6tcqyeXPDoeR3omVSez3QAuRxvN8HMGCVXSsBBzxGzseFSSbSknxbzbc9XxGdd",
  "key14": "3eh91MZQ7kHLABs32FkcV3CwWyNCRbMaNaBCNikvR9SXRdUBBp9pqSzSUK1BFmYp2rLGDqxJvyrQarqxBPdmUpdz",
  "key15": "5mketaHfxohwfncwdmCm3nUTpPu4DPXPJxKU5Kkbtotiggn25goW7C8qZTWyVchehjWapcbWFbgUP93W34yeSkTP",
  "key16": "5VeQwTj1hJmc4iLqV3vG26svd2TT3wa71Rb3B3VpAb78Pfvp4U2z9QyiUG8GJTzPaYM93h3VJj4ka7XJR1sjyUsY",
  "key17": "diP5ABNjXFVxefWFrjV2M6NooRF4uNEW6Z8v3jYoPGc9tw5r8efKYttFNLSnKACdCJFnzyejTK571mQfKc3UT3z",
  "key18": "sQPHHY6tcKe2GFseiQG6W5NZPoyqez5mzPRXkxb4sRUBxumSXwPVH8bhAXprqjX5uXJztPQvnWxfUx5rCberHy6",
  "key19": "2mJLjARBokwxyPCyU13DaNbGq1iJ68uG3MqButL7vpXpMQpbUmEUzdJDPrKMSJcLDyaQVGyDoSYgb12RQxqkMKGh",
  "key20": "4HdWdMTYKWhdmpvL29sLB1aeZcLF5h2YPqqzT9Tg8mW6TwZX8SBiPCNHrQfQLHjKHefGR7LbC5o2nYE4hasFyJf",
  "key21": "5jj2bEtUi7Z8dSbgvM6zrCs5gVQqDGSyna6ydj1VGYUu5UrHMGZBwEDrq7MmPafLZaFpXjic8n3ZQBmbdMAU7gad",
  "key22": "2N9zCfDgY8qdthu8y7VXuVbWZ2zvaRfvW7PgEXYJoLKCRcjKQG75mUB7rFLJcKNeXDBCHWbzK96KQ9v9c42uGCph",
  "key23": "5uGoTn9MskUYbgubuRx8Gqh1GUao5Yrmmin5FXaMWxJWTd7cpWUZdf1UFSWdVRTPWbKemjrexN5j5PkDsn9N98y1",
  "key24": "2C2GzELXobYzGG1swu4bGpn85ApzTWDgVEjzLLY8KM4UdcvrqSd5oWa9x8dZb1VX3omLKkxaqHGuTwwjZ1e4VN3D",
  "key25": "3NKjCfXwGWhq99JnMZQGF6iHaTJpcZvRrjJQtN1k5XcjQbgz8HuK7MKqz6GuHdoieFYjhboNpsw6mP6bhGcxb82f",
  "key26": "fgTbF5ikmGmJHPNBLwP7JbA4MWzbxnqZnnwHTtWcKMmkP5aoGbUpbUeb6bLkYLzVPV1AoayPH82j7qpVppTjAS2",
  "key27": "4b8xSGGCipBwwqtB8UfigdUhXe3hRWph1aFmfX6ZwCbRDzXtV75dowcyY8aMYfb3PGPuMr7n6aQjuYNVJ5m7qX6V",
  "key28": "3da7HPvPv3PLj2ZXpZXJynQ8X43mRcfrwJXzwNyYtCSM1R9CXr39XXJjWA6psuGJX21xFtoSDzgFRfi1rV15ogLP",
  "key29": "MBeY2ehWyWRTiHv8X4iGFHDS9kbSjX8tiyb2XpFWi89YGAm429fNeFxTbp5eauU6Qk6Zw431j36JDvxCaxRzpDN",
  "key30": "35R2PqiDCGeNvKGLzweuMZCT6oK6BhV53CQ1engg8fCzgtrdq2NfYeBngeFaiwABkvGDUQmvnrqb66swrnen4ytV",
  "key31": "Zd2Fjh2P7bUYMXgbZB2m5GAt7Bv1rGpbsB1XXeRtrpZ9J9WbqPKvmpw86csHeYP5LUoHvAhNY1LQbcMshZKDUHD",
  "key32": "47NHLUxZnSowYvpCkacTDbAVmoPa77WQMwMejRttyGmUj9eUMyFYpHuy1ojyU9XciSDcVea9xCnXPCSuXVzqYjxH",
  "key33": "2mAk5zsn1Zugx1HykVzFQjLVbgbmdYBUW2Hn4aSA5p1jnwNy1WyKHE7wiEZk9s35RhrozPavjLvQnTtQK5mc42oU",
  "key34": "5HJWsxj7EMhjrjouTcTJQCbc2drZiDErh5S4HGor2xydFAJb7yTN4NVdM4dBKgAjTqfMESM99w2fZwDn9eFKz8Pf",
  "key35": "3TtgRdJTLj3ya65Yywx4QqP2GwBr6z9i1cKk67kJrkQkjvz3Z8JDw5TbP9TvVZvHNMRrrjTtrucbB5tb6E8pcA45",
  "key36": "2qQyqMniupME1db8FmAq7VhvBRJyLxGHH7GTMkfE6yjKkFGRmLtzgAiNAxfok6uiFENa9ojV3HfgkwoxvGronXJ3",
  "key37": "5jT3tecYjq2tz4LYBpHpEBZANLpQkhe8tJZjp4m4L7SyEgmvqGRzw3HbMuyBNXUWaBBBcNKGnZ8Md5x3ACtdf31V",
  "key38": "5z5T8g8tMewKLTFxNNsLxkwhsfMuWDhEGLi8wCQtPhwxvG3gGrybwUpo2gkyZdbwyegCFmyd3bcaxw1zCrkUxk8j",
  "key39": "324vJQ5BdbPyscnVNs5RdhFCLzT1XummpRzVejD1ushRfmT24xw61ax8KDWYaBQgKn9LMPDott6vTiAXfU6zMdwd",
  "key40": "42NF89WZuzRf2bLU9cWML1TwFYNgyRbt5zQuEtt8SVmxCdcVFXN1NCYFKkmRf7pj8dCFtTYcdgSyLZJX3TzFvD13",
  "key41": "4MrsjitXSqXcS2mMd9d5K6DoX3hzdpQoCUrYmHderH4S2kfNVtx64tHUx2JDwMyU8oCJXUHAZCFTw9s9ir66urwR",
  "key42": "2Yse51zKNZdFkvWFKe7SmPQ3MPtexsfdMSThrKcwKDPpAihCy2VwWrZ1UhtKQtyLchNe7rqgmkvUeXnEgGEoBPkj",
  "key43": "FGkJGcaq3wMjrUbqAFAjNKxzdJ188kARDGEEzuuDrbvjFXTcC29TPSZnF5Qd9n9sYNtVJPkLWwbfDPQV6JSRUFi",
  "key44": "5UTyuYoceHG8jfeXP3ho6CG3KqqdRH5cLSyJMLLH8Y7fBkzuRFCHT2Nha1kpnBUjL1HDqKzecAUKnZ6R2qk43Bbg"
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
