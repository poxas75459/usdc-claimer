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
    "61S6GrL5jYCdzUsYJWML4TTEPb9TwZupvh7gr7NEZZc3WcMdeoG8LfcNnM37LHP6jguvVa2oDZAGzgGF2dERRjGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ytKKS7UqSxFsbMdD2PgyVMzgLL6Q7L7NaYdkhLPnyJxkpRqg6egain1LkQi3XXcBjjQZc4fJsbM6x4mETL8vkQ",
  "key1": "4mr9t9xR7pnSPsdJKzJsSZdGjSzmqxpWxvrrrMw7avreBxALVf8b3mvQ6LsKDR9aFoprYpZMxY28rfRbMgYFxL3A",
  "key2": "2nBHBH7NcDANsK4wet5MoBg2tocDj4jHkm4zUz6NnXh2NRzwxCroaZ8nxKm3Xzq9oQBsQfXfB6UBC5m94FPzvL8C",
  "key3": "5cUe45xZLHowxQZsxy2uyhGHDPHdhx6qaEGB5AG4o5pNLryooLaPCnEwrfK7xY8mBugYV4PSgPEEgawtJ39m5g4A",
  "key4": "43jJ1GXn37VTgtPfqKHLuZTkDKkfVUQ4De52JiANAgvKpjVd3hnNs4FFMtJggqDk1DwBZHUeYLEQyTxBUbHv3nZS",
  "key5": "5rhEXE55JeVfk59VcixBBAM3TVdkPHrN1rgb79eBFKqozD3qVCMxQKPpbg79fTiYDSEyYfnHyGf51Ndzx4xDNdHp",
  "key6": "5jG6k8y7QegmrzGGXYVydVnFTmF1NMaC2pNjziJjAHoubykwKJuaPy4nYXAKae9oq9nP2pPLyX5RDSBp52Nws9f1",
  "key7": "3YcheYEjuMwnYgzYo15ajh4fq9PHeynmj8W6R891SkHTv4wkPjVKfJiXMhsaKbjXNivKnjkG6icG3WXoSQBoQyY7",
  "key8": "518W4p9ZpGALdmfyV174X81NCjTDuzceakRniA4x72Zqr3d4Qb7WXV2d6UK87onPCPLS3jKxj5vpLR2PZrxuEdrd",
  "key9": "4QmcGuhHaFTQgzD6ZntGqUaNFrv8ncQFq8JvUbmdrfPNqcoxMjmwCVaDsFxqDHg6ropRSRgshkTbuptzyf5tsi5R",
  "key10": "5ygwv6x6xdvoemGEkqQq2bKG8ixeiQ9Qpbz6g4pi1uJTPMpZg9t2VhLYuC92TciPc2n7P2aK1CxKGu7gK4hS1uRA",
  "key11": "4G6gifhTBqkjBR658XAKivdiASQwWwpLfJsaTzhVgEuvk9P9y2jB1bmou87bJAygr2UuJ8ZxfdsiwZiHf45nMteh",
  "key12": "5L3yoa1Zwkn9VEQTcDcdXSoPxXMvRvY78b9gBjR5C7DrSehSHiWTEHL7ByYfYCsGjjHMzsXuMGwUkGcLXfjPqvgB",
  "key13": "4D8fQvpWZKCsGN3c56KdEcBu2v6ozHGYLWLBCFwss9gU6XY2fQhbuS2JU4hnJXAWhwafJ5m4G65sqRVPgEmw12DM",
  "key14": "2aztdsPyLPpKvzd1F1GQ4xPTMUcqZidNRz72yC1PexeCNSenTHsjaAFL6HiD8DokmjcVyT6JSvPLrEv1bNSRdoCG",
  "key15": "3iaH7mFQsegXJ5r4DDRWUDtJ2MTmEEJMToG3ixhg7Y59svwHcC9cHaKN7uaUC1q3fxLQDjAKcuFFMuBjNMfwjy4P",
  "key16": "2nHiM6cjJgTXqjJ2M33ZYaVwtKLQJiG7jJxmVrv5dW6pA4jv46forRve5ab8bEfJUj3y6zmf1rErterntwE5Sjxz",
  "key17": "kUyUFYxpYbjS1imHUApD6nBKJp9puvWti7B31dXrcG4Yn2dkpzdscaaPdxNHhtmriS2dWQeg3uZWjTNNofCSgMR",
  "key18": "4S5p5oRuq6sBfiRoc9aLukCiZTRmAjfduH4GtcVGNbzyHEsyTehXu86FEf2J6YTWeZeRYLdCY3EejqmmiJP2hHUG",
  "key19": "3QUQuhb7awpuUc8t4ULaVuw9E42grYhf8Ssn4KnhUh8CkJZFcgx8GRCwdnuSX9AhusSf3h8sdGtqx34NRFUFx4Qv",
  "key20": "3PYGXbVdLhXFSZbQBFmUnK346mrGMdNmvvf4Am3KrqGP2Ztyn7pkpXEYR5uB8Qdod2v1xqmCbQLvVHa2UhFMvjiV",
  "key21": "62qReYjKHQxe47SZ8yUVPrGG6Te1Bv8RESqkiVdyPvZQoJKCpMH1S1yuUw5yakAgc8QPkBeNuS2zgg8RdjLdd9HT",
  "key22": "57jeR3h3URvF2v1FX43TGvFYSaQZheJQRoeNVNoU3R94Lu31FYwDZtNn5GThVVBitJVYQMsmVRJPxui3p7AG6NMi",
  "key23": "4rXtuyUrG76Yza8BbMpwNhUCGJaZk2oZTrRoBJzCarVNoVudT2Px1CxwBdgCx8Z9BzdX7kSLifPWQgTXcqzp3HeL",
  "key24": "3fPoCrW9bcSGB3sKzfiaK45eydhr2hivj3LGqVT6S5iXtKt6gAL6giVQTeCbB6r3fM4avt3JuPQ3p5wB9ZUDdDiH",
  "key25": "32GQJX8STtCyfB9m2zC1XRVFurrGMzTpXyonQs1gUK9jdwzaFBoExuPuQQdjQAkqA5qYnPikDZsq5a1YCjazkagC",
  "key26": "5DDy3pbUFMnioJfbzokMNp4Cvdq5zyTLCzie9GcScGBA3fbfrS3pzofthUfDQHU11WYD1pSDw7VDw1KYpKRDNPN4",
  "key27": "B2acTSduSLayYqALdZsEZZGzrAdRwRoAS8N6sY1j46zqfsWe23mkvnciv2LERYWNDq4695GVqkGySvDVKTvpyjn",
  "key28": "5aV93627pp21KsJc2krBEsWTcpQ4FBU3yWr5XoJTb7rQ3TFWTtwun4pr2Sm5q4LaBJBwMktPwXfSUfnV3irBKFiY",
  "key29": "56fprLL2PYYRZvMHvVTsFDQtQUkFoiP24ovGtZNu2Euica2a6tFtYYfbeCKro97v6KwtzpprPiQSoJ9gXz2bKUZW",
  "key30": "45FrouxxxFD5oyWA4Rbx1xqyBCufPDzqrN3SsqD4D5uFFS4z5mzaCDbRkwAgpZ12hDbLSnbpoMD7VTFufDzk6Ztc",
  "key31": "2R83yd8MrJn6xrXhfWUaN7PjdwsXPjzxNqk9Qpnb7DK9yQxFV5u8rmfAgnGbwVRwLZbkKiQiH8hzCUnZkin3jMQ8",
  "key32": "2BYR14kqYNi9BTiiiebXj5B9PF5UzPywFBDodzhdrC9BxG58Y7R3xdbpfxdDcLixdVivo3j5o9uyR7N9q9R3Hynt",
  "key33": "3XNBuXodfKN2bjfVQqCQ4fmytJfizqbuUrmRoULDpBz3jJWUXzTXfaWAxvU2cVjtpkmgDGkUXGzSiUQ8nEsqk9em",
  "key34": "5X4cqHkjvVJ6RzHMwB9tLnebCHfpNSYFUx3PDPcqWXY2tAqiLbA8U4Rwzk77Aihhbwrkvg3VyZRfnVo7mWYtc5uv",
  "key35": "5Hda4rFqJDKwRBX1su8p7EWLDSeazr61y9s5x2CC3MYt7afmiCismbhjry7dSef5sDqoSEhRRhz8a9QJcxJbxeaP",
  "key36": "3Vt9t1TWYCR1V3Lyir1TxA2vDrKYyXR98TigrQD1pwcjgzZrfCpR1KXfpZFFt3uHNq45DtwdGKrK9VCcuJzh4DFg",
  "key37": "JimVoLwK2Hg2U2yuxQ3XRtqd1Wdq7QUu16xh8kQRKGwiA7pAMbj7vZifTpLBTfuASAdLdo774UsTgsyFfHbj6Fh"
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
