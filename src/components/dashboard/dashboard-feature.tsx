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
    "5j3FNwvarKnrcgeu4DquCYAF635MqKFYhWaZqp9ffbmeTT7Jetrtb1vG7ge2NcAxnKTCTNvKbHBLM6DiU9dkvegz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mz6MX2WGqHFpmxJXKESaf5mKyCJQ4xmKc7gGdhCqSPLFnuW19L71WzrJQy9iefRTiGrR8DJjpwsuqMm5bPTowC8",
  "key1": "52fmWTLyk9ffAyXbMWCNbSL2UHUyVgPzGXnzCVnhK7L9Yoc4d2nUWEv85vfsGf38upmnj3HY23mJ4w3h8x4LPY6r",
  "key2": "4Jy6FHX2gQoZgxCsgW4HTZw7KfhVCNss7d7tL64jfCfn77AUfPS6kr7ibxGvEQDAMyRSGvx6VrgzF4rhqsAnHEc1",
  "key3": "34spQ6q3j9TR5NLTSXrr8944aaf5WVCiUtjfrhBuqCi3aY9F9FLqsWQUG978VpfL9jj8MwK3Q1TxHixZYaSdaTFF",
  "key4": "58xn54MJuajWA46zQWCVzJQy2g3hqz3zTDvGJiqD3oGMEzaeZ2csYJeuCkARFHeaqgsi7HTYVqwhmp4aKH1e1AVU",
  "key5": "3FvGM9H7dAj3zvuNd2rBA5z3PBWidHL6RvxuaTMwi9S5g6cgQS85R2m84kKYFLV1ZMatt4jwLFgd8bJMskMdRafx",
  "key6": "2t8vK1qXt7hWpRHr7rJJNhzbif8TeJZaxDjAuF9tZPZE3xeSQucMP5e3ReQmufHyvUPKdEafaN4hiGNHjezkpw64",
  "key7": "2mdfzT9VRXN1f8NqLraufDvB15V2q4EhaE3yi1ZSNGhxJMSMR25CDkviHRUt1eYnWey9FJuzuP5Abpao9JVStgLe",
  "key8": "5LxM3M66hoQJWPi9qWHk8htVYhAwjG6B9F14rgUD3c83uKVLSwwt1dm8UpnHE3bVTRH3NZqmBNjtnoBXebDD5tzy",
  "key9": "29JGvMY5shwY7MJm1VNqGZMLhmLmA4wvxVHaTsEv8xBHe2fx5Lar7TnTNVTuE8FsWwT4tGRBh4d1ozBYeJaZa4rp",
  "key10": "4mpzsd77uUa48y3JjayhgTKeUY8sNZ8AHBLiLoLCUKLoxt7nLxYemqGKPwsEFY5jugkzn4sam4vKbCndDzpUMNpo",
  "key11": "oEjhqf9VHiZGHkccz2rWeEuidMAUHRWAQGRa3oLyjXgWRBYPLXFBXS6j5tQsgzmXZcPamPYiiG22zaPU6ghGt8H",
  "key12": "bzZFxMX8E3anHQ64dq6scZn1kYHt6NBLoUcYdSukDRqMWi6k2anxL9sQtxJ26TtP5X6M2ngaa1iXpZ6qif7gNnB",
  "key13": "2UF1Rdow9Ebz7pqHiNbspxxVwCBmVZv9vR9LV5JwomQLGo4tk4W9HdZ7QwRahkawcbwCF1Naw6Tn2cxZeZ4rMdZv",
  "key14": "2bk9fmUEnZKYzrynggiRsA4czVJzwQL1N99XafHwtAswypQk9V4GsyjpA3yigm5Uu6aBgEEbdLhoXTjiGZ32EuXz",
  "key15": "iU6RZ67Jffy4539UsYYcvCN7FynPn1R66G51NexDWUyxK1imhNXgcQFw5MkohFNPCQ6JtTeDPv3uzQJq1UFLEWy",
  "key16": "52GjUXc4Z8RCVz4UZbauQm4ZDvBf93XRgD58aoFMCuHdjv99qUwGCWBAGWqkgxGUDmxvPsocVELTeBJnZxC9uALQ",
  "key17": "4BjBQiPAzBUhQNiP4eufc9zj3QzbGkmsjogD192vP554CobvHNxPYgKXHfsc9GKpcso426NbHXoiEPDjfggT53eY",
  "key18": "2UJM7Z2TCPMxBsTzBXgkpq9N75HYJbhsfWSns8RxszkcKb6t3N3SVh3xrh419YGUA69X2EoSz3UMMmk2Si8LKHmJ",
  "key19": "4LVCZjAfHAVD22HTZpxjLjZ1ptWtxopqYQYkTw2Frwm14tN1nF7GZwy21K3tWnYyjUQVt1Dc95ehxyDKzPuGkfxB",
  "key20": "hJF9KGgesZ66Z7sx8yFtBSL2NRxhdW8uPSJKf3TXPtq79rUhLHmwH4DzVAXACg4x6A6SVshoBnSuemX3nrb4CAv",
  "key21": "3s1DB9DhmUmxfAsP5SShKgKvsJTc3BTeSsHx8jYX4xpesJPqpF2kAWBzJxTyrA1MEEjW9q3bBZQKnLSGY4Vj3Xm8",
  "key22": "3GgjaDVi3hYLfW3xP8mUwh6Rf4iikscbqZzB5Jt4F5mMXLhBEohHvtJwTWMHZdqynXGi4g6QRyXKCwxDAnqmFgwG",
  "key23": "5iuM2tdU4fXc28gfRfz5Exa1fze5UzcCZwU9Dp1qoBvAd3EMo2B1eX4QAD1Y22uhj8VWSLZw48MMYKAEwbmEzfTG",
  "key24": "3N3LZ7TxeRAAnUCdQa1UR4shX5PpUJUsdFLFti7cVXfp3c3eNGGuczZC6dZz9onrYq1BGbUry2ftPXKv34PYkPUK",
  "key25": "3rK8R8Nhq5FQ2q41WHaS5L7t3UQWMZNyfmE2vDwcudiXauwgUgzSULbQ966aKjqgUr4c1pXwKmjDc8KnqszXL55d",
  "key26": "2GbxFHqPzVJoqSForJHFEv1bhyQxFpv9dUSYYq3YPPrTWJfRkxdKJrL3Xfc8V3nq4fScW6hG3zDHtjnYEVx1fhEv",
  "key27": "QtREkyE7X8mmZqrBqroTERypnSemjWmpSwFaJDXeDbQKU5UuqiWEJG5ULfGRvXM9cyWtuUAi39FZqJJbo1jfxef",
  "key28": "xT4Giy3pugUfLrj6qVo1ZVRkAa8wSutUD2ifd1FJcmF7GrB29sJmcBEHW1HLbc89JXRH5N3K9DrJjv49anMLJ1R",
  "key29": "4DWXiXRxJpcsQ7EZepRAKNShH77AjtJqQ9GPsFB4DhhebanUAn3RZE7ZTwvMdBBih9MaJaC8o1uUMPcjctj2qXey",
  "key30": "t5aA37z65a5QrMpRSTEqJdkrb4KtFBpLj7jm1ZEh7buNaxKduGvLcNBnLSSVYSiSQeEFYQRhVvQ9skubv5gmabH",
  "key31": "3yGVVhYY9BxmDrgngJqi5nCCDggBquKyQgE1Tpk23s3Ya6ciJYbuNdNBapsRvuNQmT1yjQ6DSjp2aZmMT5fqwwh3",
  "key32": "ydGTXQQm43nFysV3dQKzQcSAy5yH7nztHwfy2RVA4CeDagkfjUp58tDKbXxofXCH5uEGoCb3dPukcWhckenFsub",
  "key33": "eFu3EjGzpXhivwKRNMqGJc7PoTCFysgS9VvbHvUyc9msXtoe2yRzsB6VcHnxfZG896QGSuhW2SM3HhTrMmULBaU",
  "key34": "4fm8cSuQb4YJbzUucx5f3PHCbCqbSkdEba9AMiJ1Fkz6HD6HosJSFrk1cGmgDN8vUas7GrnkXo86ptFRNoGbzJQw",
  "key35": "iDhuqzubqQejHkk5RRD89gURfp4twAMdK4vGW9QqZ2LZhmfEuEQZpBTQtQMowYHK1YqNFchAf7jm7q8AtEv4EcA",
  "key36": "2GJnfW5wJ3jZzbMEAP4KDonHJeWL5uSfZcHyZTXWSKzj7UMbVHsvpreCV4oKv1vsKpMozvY7fg8uPSY6DURKj8uT",
  "key37": "3Dzgdxrwdkaw1uNV2gYEwZ1WS4fqiCSvhPDmDPSxfnccMwGwsauUyNwhrdhKWV9CHHTceTJGtCckq7PNoG6v65T4",
  "key38": "7ChJtXWDwhXSgtestgZSAHrKAYtCiXF82mzc7GHhAvLrW32ssrfp9LvWjQuuE3PiS9N8E3KZCji9rS9bd4Vnrir",
  "key39": "3P4p76zZnv1JxBrVBJA13MGzjdhpUx5vz3oxRLRJ3bCPajCk5eJZFz7DxggL2R5Vyy2gMc3LHHmaBSwhtUY7ENYn",
  "key40": "3en6vgqCBDa9t1wTtmrYRpJrhkyvkzaSiySnPVhtQJFKUNehYjEfas1af5oPTdtM94o2wtDeyByEf8499bCRH46U",
  "key41": "SMU9NYHbHD41tFeuvWRYHWFWzNxYX1Csu3urVcgfGToFt8TviFb4CtBR9ZoyUYYpr38PdvJZvPSekGxj3qmVR5H",
  "key42": "gvb5zWEq7BngzqvY6gPjWc4tSQonZjdZbyakqitiHWv8wpxPvhUQR96HDTHqU5n34Rpnf8qeFgdT6QStRnz15gF"
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
