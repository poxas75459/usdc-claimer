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
    "GgNYcy3HeZSNNJbbyU5LpQUL4Xn8Yg2NYGh1ssDZx4d4ixZDHxcUNiiDGyLhZYC6pYoijjJKYXWvscjn8XN6RvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6wVPX4M3f5LB6ebUiUTzosFpxM2nycrhpELhCGneS14Y8SPz5LnQj5pp19GJsHsq2ERNvwbkMbqZMkTNdxfoDd3",
  "key1": "o9Gt7Yu5hUdv12wpkvUAEXyN3FKEwwe3uiTaUdQgZ4twobesU7kAHPS1xTUGhRbGtJoqvHvngZVWi2kt4aA2X4E",
  "key2": "yCwfP17d9BBxCef8MVpQiXFVJ3de6rs12UvE5tDoHUvrJQziLnCWPZ4hAzgSCn5tWp4Zx7rmJ2v9Hxq3gT2W7QN",
  "key3": "4BibvrnGSoiAxejYhjBuRHS58wf7d7RabnYHcZ1zVUgPbTPcZKs7hs3bKsN5wqTtz2GcXCtEefqP2tEGxJ9hgnSb",
  "key4": "3qjzveUxcs9ZHqW6A399ecNTEtUNuKMjDjiQYLiARf5UeSksvqkdpjKKYp3VqCx9AELU9GwV28mV2SBXqpJ2ey2g",
  "key5": "361JFny3xaLTsAyEa2oj8Ac4eo3gv97hQKephUyMpmCx9dxcbHGBUehhLqoUn3PrNcUqcaFUeHe7deG1G32f4D9E",
  "key6": "47gKwxz6oqYuz3H7J5HKuoPXvD9xVJ8RjKkgKTwWY6MZwMbUfuoCZ9dW9ywf7aUe4V99o95Pvfivuy8sau9RPf4Z",
  "key7": "29dkaWHG4gfJUchU3UjzkT53ojp3BGiCA2BzcnXzFGHXrt8KFQ1MpBrC36RqVdassujjyJucBbQtBJL1XuWBefcY",
  "key8": "5PAdEAQfMbDQ84TwToBqSqbSHEW4x8wmp4BFCXjDPrdYnQcEpe47QPXQ79UCaXc655dtaoPE1q3jd8vjeoiFRMxm",
  "key9": "Y4DYpf8XyYwV39zHiADTBzYwcrAaCfsJkW5DjXHrLPEb7637EaUqjvH6u4ftTKAf7Jg7Gan7kKH6uV5tL4dy5rH",
  "key10": "5xebPwuFj1VFJ1Pi9Zu3gP2fQpKoe7qwdwpzwdzPj1CXLNUDKa8VLKZCurFCoqUToD4kTK2uwAE1eqeuAtSwoywp",
  "key11": "3wzqvkwzypDVQh5oK6M1nozJLw8qYFVgtbjmZctauYvWAVuKugrvRqm9ptcN42gGMuNFndrwNTbtSRVhcCKhpsLs",
  "key12": "5q2zqKoNnzK7SypBHaauQhD7yhouUx4ZWQsVnviMNThqq3U6nbB1vi4dw4n8m4Ze2ChT7hSvRz3LMjoHtSBjeAcg",
  "key13": "56cM8uQFj7YBeMcDdBi1kveyWQ1eBzYJFQuqcsQRdsFsfvfHYYpqPcatUkQAhdq7Fz3hiA5Ckhctzf3jvRfAGGv8",
  "key14": "YPgQfu2CW2KHmz6M7tnuGEJBn8LxKVSmT2BfuzqUSfbVHLrVjD5Dtue6pczumRLDNrdeYCJ85YP4We9cpw6EyTF",
  "key15": "3NnNdQBDBtmxTwpNRmtxdbyvy86LqAMMWUrHwujtEorYTGJuAJVXL4oDfkJCn88VchJcWtPZGrVhUEffWztiDAn6",
  "key16": "5VGnygRhJiAZyEtqRjFTovKqyizxcwFsjyB7v6vvZqkp4oyv4LJpqhmYrQev4KvweLzvdMe6TSPGXULZEHu3597N",
  "key17": "KsB4mKVGaStUyomkpRoKsw86MfxaBntoKYDKbvbkBr3r2huUdsaPL17xwb1g3fF3u3vdheqUn2TyMHErfEgmejf",
  "key18": "43igiV69BztA9LgxuySTeJ3oNW3Ei5kc8K62xanL1UdJFxhsVH8PswGzrAfsmhLAhBBXwM8m6bDPs8Srp4DX9FXT",
  "key19": "4kGoK855hD34bweRP4jH5uQuGCgwQsVqYpZxTqj1ixSNdFb4NqMvmj5ax54y8be8qTSDwTDyuyuaENpV3RZmS9xH",
  "key20": "4RofqzKp5GMvLK2kqc4fUUuyhrCMW5T7862nZsHWGaHRxS8QdcPzR5JhLqDgFQSGuWksiKFkkeE53Xr5ntqA6r2y",
  "key21": "597EQ4poLAXcf4dFRHtgGuhRYJnGxkhMpY4ZqtJhrkG3mwHEgBPtcg7BfVaEDMcVUwoDdbwSufV3xL1cUi5ZEvpc",
  "key22": "2ELhNQ4EMThZ9WPsuhEsttmQbjeENfiKPeh2h3h4VCneS2xDScT2w2F64Jo3rHRwDmfN8vzHWV2PUYvcnxjSVg8Z",
  "key23": "2D45X93MxRyH3quKHkTgctpv4pxS97NU4v3dDJjR2XcB22mq6wiWsqueQXYP3Bi6pgawE2JFGmFNBiseYCahEv57",
  "key24": "4vhxkGwBXkCxeug4NHf2cXTLPgn4qfBbKH9be5eZ7PW7MTWQnZsxMWja6LEccYJdtmqZpuC9R68uKu6uD7DSaF64",
  "key25": "567YYrG6gEqGpSKoaHKdyPD6h2SHtQ2jw9PrrVfzL7cUZQP5YaVr2qYvS9c4E63Ydg11KfQV51CtoHZH3XSexGna",
  "key26": "4PxjcsT95h67w78CnGJikbyidW8i2NKZPm1uBXGHUxCmFcBEn3rKajffNeeQTBuf9o2L63Mpt8wR71NF6rq8tTbe",
  "key27": "57bD514CectdwmmKwVEjpAXsjiWLqkqNGH9bubpSRzz3BvHydZxhfU4Q5q3SZu3e4Q4XnbegsFqJFS1vK4fMLdt8",
  "key28": "2x66DgXJz1qCcPKy6TYA5qDTGVRbcvPtkNxkBjPcKkGPRAaHXRzQWwWktfb4Lnq8aW6KhecZwv88oMFAA9koA9H1",
  "key29": "4PxqZnMS7RYssc3vT72GKu6zgguSWVyrMjSDhnqS2WZAvt6H32w4wK1qrM2Yj8eJX61EJWKVnpceE4Tz1ecp5kX2",
  "key30": "NvT7Zq4eZLw4tvNyyLUbugDNwXfu8o5WNnG1DoB7znDxaZGDwNKve5zKrVAFMuL4RB3Zr3GHtJMEEiehe4RDXtQ",
  "key31": "3g5piwJJbFd8xBEKVbRSx7cBoVa4e2x9dL6qJAvBM6FC73yT9jzgHCcbrBds9nocUvyEMEZVKWabrj2pRQtsfEHx",
  "key32": "w7wMZr6eypFwujyHujXNErvLYLnqLv3LftmNmM6tEX7EXj4cuTSM7zdh2Cs3t5cvZCAgqboPP3r5oUa8x9nbc3k",
  "key33": "wQCM7if9yxVUCA2hTeknFkewfShtq3hJc4kDtH2eFLpX4g8va9e6GvFbAmpGFVwsDSMKy5MJFr18ojdaa6CbLVP",
  "key34": "265KKFMZyYhpF1PSEKbVpvJ3TrPgo9aAXBPKkqrfNkQXhf1FJpZJ9z5qeE39ndMUYrJuCuwdQ5gGT2EEMVZwcZUm",
  "key35": "3RWDcNA3UKyFpXie4JX7GDyU6XMC7ZuchFnwZnxHzPb5gVG6JEBHzmXj1PngEuvGFJwTLAqq9JTNbF2cFK2QvWnp",
  "key36": "5sbdbF273h7uW4RPM4ViHHvnyRJsgAdLPqoqvRDfmECRCZdSc5JYE4nkeWZf9TZY5LkN2BcugkS1noAyyH9Nmik2",
  "key37": "47H87u6sDBpJ1bajxmL8oxLYxtwLb3i6vooXYq7W9JWfTJT33oUW31r5ypc5jE1JnDmmYM1aZ51GNU7JXzX4V54r",
  "key38": "5iY7i1cvJ1w5thUsRMJbRAuZ2PQnc7XRa6GqQZkNaiCknntjWZ9vv9XMXyPdrH6UMbqUntWbMDnzUiFEUNDNPg2p",
  "key39": "5rApsq4s4JBbDXp5zAmPUwbgP1kw8cXK5nm15e4bfFaczMM7gCofbsDoQkjpPuayB8wdcyXqaaeAK8JL422TtEqL",
  "key40": "2YHSEvY1EgiuP31aYbmDLfmnuhyaEcr6RV1exxQjKG9teVUTWLWXYJHsdCf2HuPTTq3pKW4yK7ZhEp4UqypfsCu8",
  "key41": "2PGSw8RgUBagLLwyzv997xTGGKAxgjzDpi5izK45siQxJs9YtDQYsE2qU1DAEMRVhoZk7zYC1GB2rsgmvUuJhzqR",
  "key42": "5WQZ9sRkzhcvwz4NNveJAQvMSYguByLDZfVrT6WrTd6pg5Ww4eq5qVnRse5P5VjdnADGkL2mgty9NM8PAUCgUmt7",
  "key43": "3LFRBLtQG8nvrFYgiJSvmDjMhpbKLaBtfDyubksRCxMrRfzsaM3S9ZamseK21zmfpWLRPwpB99adbU5GmaCEbNXQ",
  "key44": "4h7f2ot89BSX1tAHtfmNADC7WXtkqVHEU7pGzMechgLvonJocEG5VWXmeH3VJZ3VwNtBqv8UGaWHZMeXxLP4BVvV",
  "key45": "65haaUR8QhGcTEzbCoJ3YCmZg7KojssqkNVTb8P31ss5QNWFeRpWSnPFCqxoaLFURUTuSWjCUzhfk8uod4xwf39b",
  "key46": "4H3ExHRiKBnJcww7oXUp3YCTf1uUQhQcrzufkEkSH2ScKK36MDmcN8ouqKBaEXtPi47tyoMyfjFdBMwSCiLZyFJ9",
  "key47": "3Qkv1VsuB178awMxaT3UKrukNyaYUHGSq4jM3Zox8CSqyJRwzzyC7t3JE3QhkQVdQA3VYLofmm7bYV5KgL9YkBvM"
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
