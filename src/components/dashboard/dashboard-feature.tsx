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
    "3YKpmZJiBWJa7bJMdx3n18NL2Q2U1SAAzHXPemHhHx3coERxN2a6AHoXGndZRJuHJqvkbXN5FqP2TL3aP7bnWWrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7mZGqAqo3Yu8BZAK17kCnyn1hzzYnYuz1DS639Gkiaq6NjdocyEdWnK9tMkfHwNDL6HZNK1a76zRqZrfUySkUh",
  "key1": "2mhyZosLwR7viD8tgyMDvpSvYCw8CfsZEqpeam5Rk2MwqThAFw6Q3Y8f4DK9t13qhgmM1xdpuJtKDsZHJ5cdbGx4",
  "key2": "25msajPiYYTPGZhJK5NW7KRnzYRaoqp7gzqeSBQzSQ56jrCq3tJqvsMoiSnTdhWfRuhhMZzSwEoZNNxyoJfjM2jP",
  "key3": "4GhS3VAd9T9Yq2n4bYztAvgeCZWJcExaJaeMHxNmQiaVdGY3PiWVpQ4EHdqYBZKTbEPEP6kBv4bdYhtHovcY99Nr",
  "key4": "355kT2sAtkQfPUjgJMTKcw1BAY7kH1YnvNUF6TsZSkDXNYtnEwkKeS5banATR7Ff5WpE76vX4PrrHKBZC3RHS8wT",
  "key5": "2kh1v4n8xgHgkUPhZHYwzs8vFJL9yfcRKvTzUZipBht1xYK1jRHaTYyE3mHjCavt6MKK9ayrDq3tWYbxctpXCUaV",
  "key6": "5JEXeAhKsZEdLqL1cpCYc7RS1wPGfs6hMvntJqqkHkqcbTjWffd6tzJgXA6VXaPGMWoz86hDbkaMEceT27DzoHWx",
  "key7": "38cMap7ib6FznXwQZ6eRk1qiJoxsPHjX1zjaPFoaTSXRGEcDrahNEMaPma3VBcUMbnWn8srCXPSsAdiVbrAMBNvx",
  "key8": "4EMWCUEjY43Yze214DiV4LTRbM5MqDiLgx1fr4UsTDZsw4yhpZCg3p7szmv1p7trff6fephK1eCbvL1DVbwae8FT",
  "key9": "1iKrv92JHhJ1YcKVQGyMB2W2uz72UpyXiKbDjYjoYEzJSGJ7hcEeerQBNSdsfJVyhYBF5ETwPM5ZRtKVo9peKpd",
  "key10": "3k6sA3wQgRyYXw6FpX4UKFGCDJByc51NoUyJfN1gzKpcWm8r4xSKonh85ezi8KgUS8ifWcwzunAwLgUMQbkQbyiJ",
  "key11": "yYfDYy7tKW84wxqs5ekXHUhxrBd9QsqVEWz39UMriMMJR6FKQ5PthEexYotsH7Py1sr3bXRjrZggHLCXUp4TAXN",
  "key12": "yw6LrcXUMYNpyGZkTNwPKqDYjJ4iKHU4syKsxZjVFPtWAFFYLFiwjvGzMJTdjK9wjLefsR6omy14WX5WtZC8SXq",
  "key13": "2g5PAipdCcPR4AonKRknitYfihsiq3gphzAtejXmsBqpmvxvjePYL4sKG6SPTzPND4WjmpnKrES17rUfuTHLUKrR",
  "key14": "4ZY1gg8Xkyb9RobogEgDf9Sa1QVTZ2XPw9ahUYcgViQiujcjbgm3r58aHaJqaiWYiyP5ciJz7vvxeBVye6XA8cha",
  "key15": "XcjQWre8GxQjLJUscA6i3nzWqCCrybAaokQJUXjhrcXi9eCAiPedDeTEVxd3a5yrnro4pZrbaYKR9qaZNXJF5xB",
  "key16": "4kMYQ9iVkS2Gz1h3STSL83jueKFHF554taNvrCuMMSLz8U6f2JvMEXFknyPZ7WPJSoMmcQsTADLzep7rCfJhcUxm",
  "key17": "425JuZ656qRe1Mbdc5QPcE7NRWJiBPgTHM5EYtEwRupsS932RVLdASbhavojrGNfB9iTt8NuaGV5JmJA3cWxvEhg",
  "key18": "4nP1mZhYzVkKvgpKC9DLjQE8sosNfLhvSokthCXLMfZNgi95N9cDCFU8Zgr6yegZAm96NV8bueUxjJeaa8BSpXtv",
  "key19": "44qevRVFq5iCgu2BkkdyYU3qFZ6yqMjWHsx2nbCDfZ7cM2orJZ243oobH7uvwMYNsHQNndem9fb8E9KWooX9JXM4",
  "key20": "5LuhNuqfZbKH31GQg9XL6622VcQfav8PCsZjMhws9E7jo5FQ7kDGiMyxkyX6YJrnCPf23GhGtLzVeYrFz73pDfkA",
  "key21": "4FtmJhGWRwtXJbbc5Sh8PWNPTk4Q7XPaqYZCaezrtcmjjHeyTQ5HenXJeobJhy5sByKUpoLoVUo1P3FbwnUZW9r8",
  "key22": "crcohS9nyckHCzyMGaQzKxdJpd4XbFmG6dEa8nSWx4EbG1yZMSxVh1czaNRvVsYrDLTBFEoZWo3PmXA9qgCg7Ws",
  "key23": "5rVpkdxYp5WkCBHfThbjbabauqN2W7X2fKYRnTBH8YmNg3sfRBWUmVfSsYV3a7WN8nZVXviqLoQd7FS1PFwAQZtU",
  "key24": "dcM65hMGyjTuVhh2mqEZR3hfd9BNPeb6uNFaxaZRSci9AkvsqBrNGWfoVzviPCytqyFNV2DaUYEth7QnKxj9CsA",
  "key25": "41y5qhgTL9RdDx8z3WABjp6axNx3yUh4nGHz2NxXFDxqRbywaCem2i4QqA91KBge1EtCokkRMyfKNuRgWU6WoDPy",
  "key26": "4Gn1TKysMzV37dZYYdMGwd3Z1hbXKuzuuDb2zRJUXZDG8jqiDbzgWTCFruX73w5njFxPJnGUFYfTFEynFhdwC8id",
  "key27": "5RTo6CP7bkqZaoLY3RRwFphkGJSrxK4pvCQaMUzKk2HSjuta1VGZobT3RdMkKHquztb5Sx6sWUkHaUuTsJP3VoCP",
  "key28": "5kLwT5a6e7XkL3JEm195eBN4mBYEf4X98rkNQbHcguWYJgttpfbHdrM3h2diyQHHEeBjX6rzDSqmJu2W7NU8Y8PN",
  "key29": "4xvyVJvh7soCGUcXzq9VVrYRGEK3emDKVNFEa1tbcpW7fuhD1V1qdxkamJZnd3W5FUc1DLpG2NLXX9pnV8dsXtFx",
  "key30": "4ep7AMxgUTNc6RPgeTXZ7twDW7CQRRsfUCXwiB2qZaHdj835L6HTqRmsMVX5fRV5z5wPzMw6hBq1gsanSoTFy7da",
  "key31": "3vHitk6KjVqZSGKUY9pM5BMgZHwRwL6AvboVAuHGJzpb9Kkd9sfqwp5NoepVhGcn37izQ6NHEAhDkThgLgn2tf38",
  "key32": "Sdkqo7E3pY72GRUiJUssJi1xKF6Fx75EYzaGkUWa64eN8gzE6uTpPQfk8VmuC4BDsqyEooz6F2jwjQfJr2rPCed",
  "key33": "qieLQdHpr79RHLpZLSGwKRMh8PRszMJT7FihsdQy7NktoYPxeqtmHPyneztcvN9VoVHnc4XzATza7awpDqjSQEy",
  "key34": "1AF28cKxNkuSRdLwXtY7BvJkombCWt3mtyzbF14mB8xNEJmLDj6pfuvjHkENdz19LcnPdQfoy9y2p3BjF6ud6B1",
  "key35": "ib1CDbwnJzMzyAd1Eq9GZPWNPgLu1XNmkcGeY6msUSqL4uhA3hHVPgWETyy3B2HmXDwj748RzB5A33ndnvzZGfa",
  "key36": "2w4uhfpV8XmZSA5g81cbRigZbYbPT9QjERfNCe9W5Sexd1fr7WjLuKMJ7tg1q6fQtGwZbDv3cpTfjWetiCdaUNux",
  "key37": "3a5q2QHVR6ZDb36tCrsQRigpYPxobkhY6bctxyiJL4qgFGPN4ZcJHpMXNtMXQYsjT6iKeipkYzvDmvM2U2uDGd3z",
  "key38": "62VCJXVJWuwhKgfVvDpSMwApic3eU7RQXcApAFE48hdf7e1h8VAWFcp7jMVL5J5g76PjWTgpSmvy5zwwfrVnSh8x",
  "key39": "5PcRFZSsktB75CswNBz5DWJS6dey7P9wwy5twD4xuq6UMDoL9meULNZwdnrRacZQ7bMJVBVCeEq9vpK3xe9yg7ER",
  "key40": "3yPpFwTis8WYTZpTUYSeT2Kw9iKcB4jD5ePVGCXuFXXHq6zz9v4q4iyRYB72zwNFgyb6wjd3jFdmH46RxXgB7Sm9",
  "key41": "5Nt6TkaR4N2MZbZhs6qmoFz1uGvRDWMjMUqZTKbHeNsaji2qwzjxU34AdxYn9kuLsjSEDJL9McYWfgDD2mtiZMi1",
  "key42": "4jamqSAUain9Ad2MAMGvk4nqHWxCoanujyC3ehBgzbCzYEZ3KjhjoKzYuht4XvqXXm4VNGDaNsbdZJhahxosjXeE"
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
