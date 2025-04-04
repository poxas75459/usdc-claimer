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
    "PusfjzR8KhtKynTA4DvmERE4hccA9VpaowhyXH4paX4hh3jG7fsGEcSWQXocoWKGgMmuQ8H4zBRyc5f8WNSZKrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hrFyRY7ZeY9NpmVfuPuwXMTpKKnEayShd6YoaNv7mNqXnF83pyZkY9D2iioieyLvPcYV9o7RybJoem95gHz8bS",
  "key1": "8kUxHkoE9ZSzypqRnzY87AxxKqtJpH15WDFXdyVkG8yGa5KbgMtGYB9MedQLgCrJUTsYBNxE4S5FYkgHMdjab2n",
  "key2": "2KuWZreUfGXH2KkLeowYGbuJrv7GpPdpJU2KSHbgibUZ7Mv7n9QTUkGjdhyAF4xawz5ZsmKevzMKEBY5SfA5EGDh",
  "key3": "4Zy6L788fdEXwuPg529yoW5TQYH5k3LZNHm6KiiUEHmnyJAMGHhQ4GGd3cVuhHTc6qh4pUfCuLi4ohwu5v2gaT7B",
  "key4": "3UuCJoNnDLTS3iv8C8j15EqJoCyaEWVXZW8wpWYbgfEfB6MpKtuNFpQyCHcA8rQ9MFhgpDpckeySxYG1P99jNk7K",
  "key5": "2U2JF9ZoqaGHLorCJ9C5rveKNQEHMcM4tr1KB5dPFhAbPeaS1ixZyxVVn2Paw2iur2zqNxECg7RC7u4yF7oYso3s",
  "key6": "2YLD3KDMvEPfynDXrX7FHEzPSyHeNSYCF7cAfpcmqFkmbKzC7FgH7UZ22H2VLjfrk9qMJZ2f3jvFsWJ54TwykrcB",
  "key7": "4wkMrjsjtbGezJ5U8ymWTX3LvDZb22kVUwNG6GE5iqLYWKbL7fG4B3gE8FYUUBVXFvwjLAi51t4A98WxCSSZmtyL",
  "key8": "3CAGMuVQY1ys2Fqqf7tbMnNRuu2y1uAo8qzWLwxmW38xc9qBpxmneNZRUKJgmExbbMLWmSMHPjki6AR31UdG8W3d",
  "key9": "3s3NBehvjwp7jRUMzN4pjBHHBJoa1UxAbLZy32KtPybq7AhgHrX3Vjh2Fbj5u9rEdGrwa3EnSDDJCBLPSnUarJT3",
  "key10": "2KebCKj7aYZF79WdXkU55ZSUyWpXvx72h9vfkWVFk1ME3FRZvQYrvhFhMCBnVx3ofbLH7KNf6pUo1i82Vs9Zmewx",
  "key11": "55Z4TSnUoG742cqMadqJDz5yuTnJXjVYt4nbX4VACzJKZv34Enb2BwCGHUK7uGU4PJCKwvWrkKab9ZQ2KRDvbxzP",
  "key12": "4waBSPmMMYHKS4ZMNMRAgZop5RTyzPF5fx5H8MbB7fNA4kYf7SqymUQugiewKu2rKvRswb3PSNxQKLf2TUvNMZBY",
  "key13": "4zJJmrcdWp6JuD13FieKxAnvaQif84qzpPugP8XcgaMWYkBNgrf4WQkJSjjfxNvVRomMx4oCYsMv3yBhUhgdgjEQ",
  "key14": "soLS4eca5hDCbAtzFQZmdCBYCPTQfZa4jo9FyxH8KBVmaJk9hwX568BS1dN1wwb2WfAfCpYGfv5Km6WCTCqj4uZ",
  "key15": "2nzYQ6PjqXQeufkXMuFbzRVjb3aakzFKQjUcT295A8rpdj76qmo4yRFF3pfbapZSwYvPFBSKMttr7Fxtff4DCnNo",
  "key16": "5bstVkBcaafEa2WBD4iPNZmVKqmj6cRFLAFqHgHAPDcpjCdf1hgtCuTzWPZ3pUvQ5sN3GorQqY6SpmtKAHAu7ytv",
  "key17": "4WtCCpyMBHF4r1iHs2eNwvb4pxAjtZ2ukwFXhSxHDuUvuM9ShfSJR935QDEWyRoTAxKxki8hTVKb3RnXCXWaDVDE",
  "key18": "5uzJcKWTQdFQLPwFBsvWGLuKUQu1qYsSknLtgYiWaVa4Kx6KkLj8684HvrzENfpZbwsUnhyqQMuTYyEJxJL6p8c",
  "key19": "2d7qcDNiHA5V8BYiK1zAHWsKKSBpxJtqAJAuAZc8Ryjb8aC2aS6Qe4h2eeMSKx2tD3dXz7eJqZFAM3bMcY2mrRxi",
  "key20": "2gkcR5Qr3aR6XZS3WcjuvQRsnnYwsANGGzR7JVLCuNEhdnqSewQRueWmcdNHW9n3GPkHaDtkVeXHCTuMVKEEzqqY",
  "key21": "hz4ou2v893n91dHEKVoaB7pCXm77Vd6yZCaQNy3aRsYxiL2vyvedp55RhL4fRJEBFQm5Nro6rpwvAVcKyFi6p8h",
  "key22": "26vTag7mS4mwR7Xx9J7uYLLn4uP5sX2hLxERr7n4HanBKudtQD2eEinZcJWqp2QAfV1n3DLaopxGDvrSR2n9xTWt",
  "key23": "rQZrtU6rH6MASWoKJkHLM5bGPn7z9PXHX9gCeLTS5tVNbUUnS7LFS4ZX1h7uW6sFDoiuWNRmCFsce1tSczeNrnC",
  "key24": "2ZXErxhdNaofqgAz3pJwTotL3F9ANSyXBU4VVkVb7CnLkfGcMEzpFnvHLE3CgGSoFz6wjVD2oiYSZ8RAj2V1oKVB",
  "key25": "2j796V4TeJKJX3XxNNEnKk9qAKR1tmuZa9RfByzrf5ESSyY2k74iPrjPWzXdcBa3nyXybQUesFxKkYiU6RyRwwTX",
  "key26": "SUezYnRYQKMMTcCrsVetcNpzB7GDrr6aFpytS4jZMuUAjfCck3FYABrbRNJKVezqY8T9EnEzSYUdTyuS3QpLHWd",
  "key27": "5Wh91dPHUkMW4fPefg7evi5uoMMupVnjaFZybRofdHdf1mwNFGd3Scnroe2ecwJZfZWiwQQvvdiknqWJmLtEhHaE",
  "key28": "9hKntpHqamSPg2CQZxXxT5VDrwkBQwdKhbJ5YNKjgfjsktmCNcDysuUkz6NmW9fkBREMhUAwQCPZHisb8Ld39fu",
  "key29": "FNepA2g4W7djZCm7g3mPKEy2kaVJYnv4XzvnhDnULf1WmtSqxpvjf6uABsenpNBudgdisQFjenKgKa1iZdD7zed",
  "key30": "3HnfJSEbYmviMymPct9VDmJT32yFGUwJGfqeTrf3XPx2Yyxv8YgHM7ZPxAmApUdHtdYnzdECZDJuWRjyaAmQVgdt",
  "key31": "3hbg6sJ9YGxTjBgKRReTdNDH1CjsWYvSTgH1z5Boq9ruSr216KVeEesjcS8YH8BX59NmS7uK9c397WCWirrkwPG1",
  "key32": "3dZbjtK1Tuxbev9aiVeSuF6QqbjDiZJNa2GyGEd8okrt7KAcJUck68zGmFYNWzuFof1Q5Frwh7xyTd4TwY9mUofG",
  "key33": "kq5Cz5EyZAWLsq9ZnyVTFERYuMtJb9TR1YtduGptSgUyyWpXbSXtPQ2RY2Ybi9h9LJd1LwPRZXkk6UrJYjDDywh",
  "key34": "66ZxMT3kZr3GUyXYNFSz7CaM4iR2rMBsYFWTchtWX4m91JYKFo6GEbi1yw699BGwSBC6iSKSmzFTCJHpo6c96Nwh",
  "key35": "2UYLPJFuyDzToWtn3HePWFV4szrRFS8csrfm7skQCiTuaQX7K4FX2jjnz9kgCWMPqN4RakfJJRSiU4LFMEG5gQf7",
  "key36": "3H4DqszkVUWRwdGLetnvaDAZS1uQxopodYnD1wT3G63DMbJksPJkC9RcehgTGDt5XeH1UhEQa2Mxecu4aN5F5iNJ",
  "key37": "3RwZyjndA1rA4irVA2NNxTwsjxTUDE1KPjs66E9q2q8jNpW41ZTDFZ3GZi37PYFhBQrSBhHHCc317nx7fkx7vPTq",
  "key38": "5Vkr2BBZkNscvvbGeX1HTS9XpB2iBLcNjtkxo1PWV7Gg4QfW2SULvwqAYTfx1a44sMNksEsM6V9z2dmEVFt9hWCo",
  "key39": "3o9xemtByNWiPXkdUNmzbLZvr5BgTLayvFhW5TbfkTgGSxvYte6osKGXowW6fijgD7c54g2yaqfihwsxVze3yiY7",
  "key40": "2JpyxUQCEyXp3LN7TPGSvZeBFEietFuchzdcEHvBsodpekrBCbUHatxKhdTJF714iqZZXB75ibSZ7EFq5iMGrb57",
  "key41": "33xmmTHwFHvbCZzD7pC4SuoNzGEEz7epzQnhJpXqmSF7hgfpEYt4S9jzPnnH99Y8KcGp2aexRsZ8LvbdfGs9m8vY",
  "key42": "2Y1HpScw2B7cvr3smCQvYBUQ8DCFoYrBeud4bBHxkZJk4dNDtv6HQQZXSb8zg8vQAFBqoiVFfU9yxNnqzzaKHkdj",
  "key43": "23AWKzcJJXtJK4Lk4PRQdpkGzpzm2nLpqrC16boqHKasav9pTyBpWJZEd7DzpyEHkxfiEenoWNgsJSGPaEEgH7on",
  "key44": "5rXHGftvFRtbDoPerhmbkEH7LPhTpi9PdVmkshk46vuzxguJJVcTPaHsE4zvFd7Wdmh61dHSTFhrebRY3J5unU1X",
  "key45": "1Bj959VmW3grXuyzKKLPQFAe5Gu5rH57d9PvXUExxdtLN6qicSC9LmcY8MYZwTHvogUZshWKMX3mFXS2Afw4UeT",
  "key46": "5arc3E44b1DFNT2aBAq5WLfUpXi426qBXDhqHhrekh5qrkGxEfwHC7WJKk9oenbua9hUSnnsTw7sBomGFohhMaut",
  "key47": "53LH3hxtXtmEWVLNbuDH2KC1qVLKJraR7Gp97wvuvsk4RGGE3hkKBRXVeYrY6UNqM5ye6HmuFErnpiNejG51VGqs",
  "key48": "4aaMjmG35K976F1PRbegbzczeHfaQeiawf3byGosBREEqp4gaVRdGv8akjpqpmZJhcvD8cYy8N8Ty8PjpGrS91Pa",
  "key49": "5vNMXxx9TeqSsvDu3XiWhL2xgM7VMDCqrunNbqmJoYE9NXUXKW6teBJwbpaJ5o6Zb5k2UpAgTg3cMGvabq3cLpLz"
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
