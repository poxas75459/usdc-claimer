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
    "3SCXCiPXjX3YjB2YkCv5yNvuq6Gqex1xqft2BVgEp2sYmQKgsjiR9aiLdQR4F4V7bKtiCojg9L99fg16QhpWymnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sfWifnwDdBGvnDhjtzERaF4SFyKuw64BxaY9CsTwQwnFnooP42jgitJPaDv9CyqwL8CEGcgjm6JME6H95nDEjz",
  "key1": "41Gvdj7Z236LUpZcR3RHeGGC9m3j9fqCv5jFjJfaX9pzNCPYamKhu1aRP9qrmVNHiuaBEn2DCFpjBwW3ZMGmPxCC",
  "key2": "5Ct1QAxwTVVqRZ6u86emu9om8W6tYcfQjUa5BuM2FTY1PLsb7npXmKMnPcpDyqd6vhYCz8gq8MUX7Z1wiDqejomB",
  "key3": "4cdnxxv2zmuK1dh5wcJA1AX5KQk4PVYLTSR279umfEgcNPsrB1op1tMZiUBGQ1VHzauG5jUpFM7ZG124QHj7HM9T",
  "key4": "54nu8AWjNxrdygdJSnPYmDS9RSGv3tvrT6NRwFaR3dWsnvxWgBEkbNfL2LMsZjyyaDH17S3TQ6EY2vxNLTXx23NZ",
  "key5": "3LixAkzx5Gx25RDz66uw8579v8ypfSNDdNrgbcWVKDBB2CdUaR98KSgD4rCte66SfRYRRMmWixyukbhiZNxkjkzv",
  "key6": "3R9MTmfPKiL74C7ETjM52ydTAt1fi5SnJ4d7S7ZbWfnS34GSdY9YAFKyfAkAzc3aswo7jweAwaxDKSyE9kcpq15t",
  "key7": "2bJMgVrQm6pSCPYbe6eQKBbaoutNzrNyYV69YxPBVYVV75S4iNmT4iYHVZiUW3VpWpii4gAoy9FAkkwn7nXkNmCv",
  "key8": "3SupwF1CzUFgETkNuve7gVkkwvYzfqhb3quP1p1ybiwZRLxDeK2eDEtBCjGo94GS3Hz2jsFm5SHezQzmf4iXVFLo",
  "key9": "2tdMMkkiXnc1FBTg1FjLJGBMu57tCizWZf8x9DaTCk94yvjnEya8nV52jssJDfrRhDwfxxXvkhjwwbA79LMqabP8",
  "key10": "4GejcYVyCq5NSbjTh1MRLQNWgvnPpKS4TcP4KJGJgFDmBn5V7TtPj5JRAHbBb7RxxoP5jhZwdzPaehMEjS4yPwm5",
  "key11": "242NezoyyTjbg6F5YP3DJzyrGGwisjwnzuaAGWceCZrB2tbQ4aV7AC7w3YH71nTjka22nWVMDmDTCexD8KwuG7rd",
  "key12": "hyEGYvx5XSwkAfpxAPJZKRhqrmV5wNLZkHNtJbkJG2xoLAW4o5mGnAVRgcBs8LcD4dkHt5m9g4AzQNMbLLY3fix",
  "key13": "2WgeD5RaSKkP5dTADZ7hN6h7cBaquCBo22QE3tPkFGFeQH5XFDh38sGZkJJCzPDAuVLvzqqu4UakUVeKJ4D87K9w",
  "key14": "4v6qgmhh7hdFn7NNPSYWTjV8D4X6khosETQ7mYNKQMdMFEUedQ4Y7pJWXFvhCmbYtk4spmVH3YzUCDBvXYGyJpyD",
  "key15": "44AXv3q6XwMZfE58Mx8r5Zb9kbZDVVEKz5nSsJnz7QJdQrAYy8GvNg42NhqYeMZxJ9RaNLgJzUu6L5v75msDmPM4",
  "key16": "fkkgaQbACWXpXAuZhzQX3RNT3vJWEjkNMUQ2tJYB4HbMsZhca1qMmzsVbYxVuo5ts3mEsUuRy4tK75qQurBX4qq",
  "key17": "3eePbHVHqTK74AqeyPFnsvZhhZjSDARa3jBqQPkMTXNaLV766iWeAMAx5vnd5sexD4DeKLdHy7jWqYPwuAdGScbW",
  "key18": "FpktdQCJ2A1C3AL5pQfqdpBmnsYerC1A9DRD1PrkDjpZ8yMUmFefHdEAzgKWB9kVc4HDPr7dc4KvtWq2dZoZSSN",
  "key19": "hpUhsdvi3vGEaQewyLwsA1zSocJr8rkK1oAY3Ta5fhXDSHK4Kw7FLKHVbtz6aJSqVbRmg9WsJWX3QQCNMycn9t3",
  "key20": "48Eb13SddN9wo4xx3C1wqPGpxLp4rrLoZXcZ3nN4XUK2dZVgNt79ovzdUsLvUvYZk2EZCWDPaMZEBFQd1uxcch1F",
  "key21": "nKpJUqzk1S6sdLD4MtP1LLz6JbX5RLkyteTcXyRGJv54Hx6R1ego7ktqMKZVRUWqkz1Xr1hjqU2n7vXt6hJFA89",
  "key22": "Am37jb1vJPKzdHKYUV3uJ8ACdCnXs3YvcWHiMjV1rwQ3pNvTPJoaSY9encNuiMvHWCS88zRZXGkNYdLsqw54dfV",
  "key23": "5TZ9hhxynCRDsED7tsoQhjgcJzusrhdhEWk6GXTBcw4eZRmE4yndYEGecUk9CVytuRDfQxBWXHQkdDoaHjA7R8GJ",
  "key24": "B5xuopkcjwpJ5QhPuizWyrSwRxPfFbbZGmMjMcGvuuoC1HBpq3e7z6X9iW8apSf9Se5bAw46yZKoH6CSpnYjgfE",
  "key25": "2SNKukyZ3tA8UyhQEiG4qmGGJCCGFGnGDhaHke8KwPuGZeMMveqEAAD2og4iTdjP7GMaEWhxHvB4Eara8Ngfh7Ne",
  "key26": "3DNpC4VJUh4f6XiHrLbKXGZ2p8XRTjcCR6tUJ9ejJXJTPEghd7w6QMZsGBzWtXuegHqN7HkjD2eGzNPSHAjRdmLy",
  "key27": "3gjxs7d59zGtEZXCUnL3DZzpCjdjFhx2rckdpLaFx1cfJ73jfLaWFXuZebGqtdu6fNvT8ZB9wcyPfFr3keuUr2cZ",
  "key28": "3trYXjLtzAAEc7x5AYSg2s41jZhzhkC1e2odRHxnMvTeB4H1TBVJgkmvEdjK9kQqynA4z6b5DCoCPbocNBW4pAZ6",
  "key29": "3mY47zZyWt3GYjz3H3zHzEsLi7i3J2NSioqzjVQWAVuYHu7BYDMQ2hrnnNcRQHVyYkFVA4XBH9bMzGBcHjTrBwyM",
  "key30": "31P5KUjcW6xbrnRzHULGn61wpz3kmnnGF1XMdHnz9LV2aGzA1j7YqdstwQqX38P9FYgFWmFWv7m6N7gxA8S69Adw",
  "key31": "5Pwx1rVdxRv2fTyLYmP6qXqVLDBw1MxJnrRzcizEKFSunWjpiudwSQQruBjp9RushrBZLxVKZ9nAJni2jnmvMmg2",
  "key32": "3YKpgxzNiNgTcKNTQhXu2TBwuFw6GSvaZo9f2uoB1hhxQ6AWLcEXXGDhxiHeRs9jJDUBLGk9vESst18LeUDKSa5",
  "key33": "3QEHVXtbhbNieF4hgTugBDnPdyPXXGuHtg16iDiw1B6M2Vk92uoEzp1stR8gA72RrqCgZiPvJ5KW2wZEUtuRE8nd",
  "key34": "4sH63Str8MqTGSCqMSnv1YeW7seuSdZ4T7ez4b4UL9dhLXoPc41uhspuF9YzNmxw3ReDB2XXNrLcLVGVT2f2sfWU",
  "key35": "5t7DirV8B3zeZ4MitzEaBPQLnYHGUkfSP4tp8DyGPdzacvdNsWdbBzs5YhmV9TruES8P4y5iDCz7KmywGR7amDfS",
  "key36": "4VarWqzmudkvz4LCBTCho6ksRd311EFytr93dZax4F7ywjzLjcSaPDXWx72TUaMpKtPHeVAibDofXCmMTCmmsoRW",
  "key37": "o73hr7a8rnDkPr4eQvfrQcs3YpP928AWSLVHSpZkoxSvYy88KNHhjDCodrSA4a2qDAA1iCtmZGFcCT9zm2ebabf",
  "key38": "wovS36A6MUmfy7fPk8qYC3cPomNtiyuTu9MSTz3u7D2QGEAACer7Jk47cnNYZqKLxxJA4yz8EkonpArdtcoNvp2",
  "key39": "2gqWNrZh8voxir8JuQnmzmyiLSEciWGQNLLf44FLEBFtHEDZTXX43PR1Sj6gjAX14Cq6quYaQQxKMoheGNKiwwDJ",
  "key40": "2qVRUix6q9JXzJQbySc2WSjkcYDeCP7Y5QtUdZwvs2v7K6A2Ek5zebYHp6sRLaMNyVKjLRxRuhGV9hgYWAepDJZk",
  "key41": "5V4MtrUsHNX6LoAfiqRNHvPmT8QiktWuYworyMgaGoJXGuASu7hAaADf6TMCLrakba1J4SNAabbXXXzTVy4HY21n",
  "key42": "V3yBQvgB5renxP3uxkzVXY3weLjpwR98HSS5MDrZccqaLPG5pAb4PmgBFQRKqZB6hX77PSy4ErXxKQjBXPrhaYg"
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
