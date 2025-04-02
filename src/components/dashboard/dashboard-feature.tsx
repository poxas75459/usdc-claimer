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
    "5js416ugHE8nxBXGDCHVYhXFSbbfaWoUP1w7wQhYRPD8kroWkBgBNWECvSZgGBJQVV1WrvVwBk2jpy2yCKthaW9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqXFC1pdCnLdVEYRdqBM8K4qC5EXxxiBkwXmLb6w5XkLjUsPxyJ99DuTi2t9wofHjGhaiWkXxUsqHKuFSidKH2p",
  "key1": "2pnr2tyKmuikEztwmDbHhQ5Bxf2FFswuzGfayjpZroh4rQMJxZ2pH1EtQwRBysyPeZZZ7Z42yxpj4ZKxaL3QeRAn",
  "key2": "2xjq7qhAVFRNq3Nhq9Zf7QS4JiUZ8EKFTZHvjs2KCx11S9hZ4xaYXWZVTmoUMfomEe2VLBhtrUSuoAd2DAw1Qnaw",
  "key3": "4dJne7qJydu2WFmV8KiETUB4wqPin9PxEezXUt8fKC6wqQ64FSqLgsPvZd5tUwCx6QGp8HaJ5nMsT5duZZ4VsnMf",
  "key4": "DfVFK3pwECJZFkCrDgw3Y7ihgyaEzUa9Y8Di1rgSrX4EpV2ehGbrb5kN6nhdEE4hjGKLtLD97p3DPfPoBmdPq2Q",
  "key5": "3Uev3ZQMnCQddNvBmNgvB9QW4BXEhUs3WAxLqcmRpKdt9zSqWZzgEcvuSaGLJUBeNLccvsH1vHGfmn6gbMSuwszq",
  "key6": "5QX1xUVGV9SWEmpVC5nHYgQPzL9tFvNzPd3fymuZxmYLMytqDCod7Qo5uTKt4vUHWGXiehBQcPohaCdnn4bvh7j",
  "key7": "2CjEUaHeavNFYTsRrt3s6e7ZHGJNHrXtkjWAPxg64bRSPLtrNkKTrcF3CcxyKj6WgnMHWmtcBxAjhLziBeTnbSFq",
  "key8": "25MGwG4hDKsu5FAkYp77baGzszxJpLbe5DSN4x4rxMgra4E2hbYujP68Vb14mKKLwJFDnTiqMMYwQYiPuPxx5nJw",
  "key9": "56aaGZXKuswHAayNSt9ahXcL9R3ftdYspiJQayMcDxHSsPjq3hw1dCcZQeVfuP2C3K6Azz2ukmeMXbE3sfgw2NCQ",
  "key10": "2L3FkBvFQUjTZsU548DPJXxs8k2qqcTwNzvPuyexuvE93SPrhrA9p1TuqQY7arKVRH5rRA9jJmfmZQjE3RcCb46N",
  "key11": "4F2jvrEBsLw1Zx7nPM85aPtRAHFuGVZqcCTf3rz9hnM7cJSxrNCrgQj8JY2kptD4kM6JGNYJR9TA92tjk2bCehmR",
  "key12": "28REH6qTw3ubpGmbkKEtmiJxekGNrbHPGPq7bmGEz9iWiUaniNdM9ph29aNp6XvJhmCFbyWCnE7MpNz2EbV7Q8Hq",
  "key13": "3UaUBgFNeJJenXC6ieFEC9qexHHzys8cGS3V8pnhqX93uYLkfjgd9EhMJ8nZkdPGt2R1gMmhffcdEEGNSCY2ow9E",
  "key14": "xSznTnNeSgAsigt3aitNEMGxtnCnTG9K7iCjY4g4mRCw539nyfouEMqWqmwTe4XV8T1ir3cZVuuhqhcWb42kD1n",
  "key15": "5ZQoCLDRZbuxyNr3pNgGud7cjAzLXUJLPUWNf4XXbPnkJWUdmFv1iy9U9Cnunak1VxjyrVsRWw6RVoUQU7BPiksc",
  "key16": "5JJGRtQ2Vq5gKhZixbrryH2Sb8cPYiLxZjiTb8TithtUZymP69sGDiu5b59EAjtPrx3fKdRHwga3gaowGTQDxgj8",
  "key17": "3LCFi4EhS77zJi1WexmRd89PtqBCjndneHX3vJoW3z63usKcgGMaSysBpNpQahTi6G7wJhX1f21wvGAJbQRztxE1",
  "key18": "361DjQyZpfZbkxF4Xej3nAgbuo7Ke1AyiW7hRgCUqDhxQtWzyspMr2ZPpdKBd9gUfFBHUnr6dK2FRgCywbHPnEzg",
  "key19": "33ztN2Mgin2kJcEYu8qWUUBnVAcSriihNG2NtoERZNSSjTEf4gZdaqWS8Sz5nNXDMUL4d6S9FyrYdV2BTnieuD4U",
  "key20": "aCMyME7cveU8B2Y1H4NacEfkv7WR71aAvSprV3s8ggWDFih36K64t8Zc6rZtg2JqfFQignpU7H9XKyRhq1cp97F",
  "key21": "3FFaSSC5GEWG3u4wTbL9QXeviFGXroTHTGEThDYKQ23cdnQCtR6CH2GSkmM97YWYPagRLCFK37e7ZWjXwuHGDAxa",
  "key22": "2Brm7rMCzhf2cFgzyGz29jGHgTNStM2XHJBbZHZNzccZE9K1rT5k1TNoDiMHqStkmc9iMhPgaK8UL3NuY6T4vcM5",
  "key23": "2UnsKjhjtdUGbtgnUmkHFRy64Xj8zu9AWsgi1h8NGgCjHhBek2DQEbFtxkU1nDZf8NsXpZf88jzbGUt1J3pQMB32",
  "key24": "3V76k7gnEtmFQzc2WKHBUfV6RPxqj325CUU2jae6ZCyeuaGzbq9zxFDTco52REX29Bi4PN1kPzeAxQDeuc7PSiuR",
  "key25": "56aJ8bMa9apQDecM2DHuBW31cKM6fy6vTezip9sBietmc4P5Ce5Vp76NpeqygYvxhnGr1mmZpHU862fiFMDfWPVn",
  "key26": "3oa84xMkYRVuwzxn687CXoQoSLQv5XuEcYzHuzv6SCpyDqMZ1ZpwDpWy4VoLMZzqMNhXhxAAA7awDE8mU4YeT3n6",
  "key27": "pMqYVngKk1XgGPMesw686yLCACRYYgeiNUnjYQLPeWTxwRfWbUdKAbfYZRCBnuApxsSjXjvLxSyjWZgHEDgCEk7",
  "key28": "5yNA1BGTbAt2T6Km4CKaFX59sh2Pd2beDibw7Jk1UxFqQvEb9nGHFDTwpsEnXoU6FYmoccoJr26kuY5HRC2QGnp4",
  "key29": "4gJG31d1UN1TYjc1edxECrUmchWGDVft8aTw9KmZtAEt9HduA5d7N9BpGv9vgqtXN2ZKmnzLwydiMvDcVyYzsFqg",
  "key30": "xsnSPncaTVFaDzzi2wXAymxSV5PqtYX6fnnPHLjt9zhVfkBTBebVvxtm3tLjcpkCBct4yJpw6VruAbW9MXbULHH",
  "key31": "3MJdfdG85fHThu3waNDjxmtxbfN56Vt3M9Crj3A5ep4T9smvYcgMeLqBe6Xd28HtSVWYdtddWvFk4kRL18x4X6F6",
  "key32": "67bmbijuyYbSs5pr4ZVQ8azbsvrJN1MTsT4pomRo6fQgcnxYyphcv31r6gidapHkaYihaDaBNf33ZUmBq9XgsyPC",
  "key33": "3RigrnhHMwMrYfDyTCUYDTZbzSGxn1sGYZ65EFsskHQ7kQfHFEyKfVxxJq3mD66UZjafMGiXAmsx1ssoPvNAjABo",
  "key34": "3RbU2Q8BNPC4tSixPvzHrhicvxQjbJ7JHg9vHVKbwqnaA6ZwTuzMUr9ffnkp15YJkhp5VAD4jxymmd65C2HX3k57",
  "key35": "234Q9jvwSnJyDpB99jpsbRwuiwqt6dnehgLLmyGFmrNJhd92taGqVPe3f8z1fWB32hFS7e8AYTTJ6V26nU5LqLqK",
  "key36": "26vwWnVzs5tBpk4g6E4DydMtwQgPA9KXVcwRSArpJYVpJbnWzr8Wfz8brZvf8qcezJtwbBeTVGjtvXEVTHk9jwYE",
  "key37": "4ie5WRQtgFP9QsQF1UDDj3tmgRpRDgadbVwJNZkpBtEH1wZkqmLVmW7g78T3rUvUjf685tmtMrJsBVL4V1snw9gK",
  "key38": "5G7QwwtxZqRR2PS7HqgyrrxtLqBiFg7q4ckDAjfKNmm4HoMDhK9sg6nG6CUKZLy1ttQ8jHDdNuEvJveFZcap42NG",
  "key39": "3KQghdQYWn5aStSW69SbJQuBJLYT4HoFfCWS5xFyzqMMV356HiywzCj8kEDGVnRTeSbGqddE5rUZ4QHXZQYjMZ1c",
  "key40": "2fkxz7rr3epV9xqsL371Tj6yfYF65GpX3iiDnBh6aLnCAEMwDdHDnnzagor3YgtASpvZcWTm9obP42YP6RaVVxRJ",
  "key41": "2VcE38gSMcfBqhWadXnjzEiEctEtdL4s8iG7JLwmY43SguXmgMTg2UNmGfdiqoREUe87TpBbodPZZsVJCPE5oxbd",
  "key42": "3oPytCnBbmfuQrhysJPuj2VYVSwWXmkwYAzWWmT62Nux2HAKvvFWbvFakqG9a9f4vwGG2xABprQhi2T43468ekDi",
  "key43": "5WKWsJzXyJVi2fRrYCSfRJNJha15YHF68xBJJ6Tg3UV6Pq5K5evDguvczB3VuJdSi2catjzMmGfiPieuqSZtnoU",
  "key44": "Ex2uWF81eALaW9oL1xvHbKHgmn1w3zEN3Qvc345gm4CFCVoLt86r4wSc8bMe4qgxfHWRNyTGQtZtU2HuUgtmE3H",
  "key45": "3z8S3qdMraa7BKMsmkmt5Zp5tJ18s714S2Mj3Q7gMbYwGwAWK7pkKRy42Rrsy4sFwkGZYQZ7qzsZhgJABs3o2bxa",
  "key46": "hfoaz9GsNpoNR5Pqwebua1uTuL8bRiufUnozuasQ8xbFaTxM2c7dKqR8zS5PLa6aQqHW8yW2UVZ9nrRqizGfz3r",
  "key47": "3YAZYtZUuUrXuL3Da34U7rCnwr3dHvvLWYhriuQ2VDuKvdCEKNzRiBcZTAa4csM2EfLHcfVBd5GyrnQ2K9yhy6yZ",
  "key48": "2PDB1tvZwYWcuBHAzyg6uNssgEuTG1vUxnw6SPWtSadGvxd7NqcBRqyocknseh1bgPfDHB6iknPvrgWUqEzLWvTS",
  "key49": "4TBQ3JDVVdwxzEJMKqvcF9aK9Pk12wMZSkmWgWHWPpjYod3SnumSfQAkT1ZSQgQ18x9chaZgLEMXdVS3qjuppggX"
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
