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
    "qEhMKZya9LNT4aZxcbyxp3jDys7rVYgbrPqKXAmyTxfQY2RPc9WseFKAu5uhqawQVqJ6zP4xs21nusETiAvdwqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAeppy7zdNdBhkkL67sWhVhC9EngDV45wKAK4SFdUeXwwwaLA9SncNYuxKGy2Y9b7YJ2pjLqFTzzmkFaiDG293f",
  "key1": "3oV1EC1dBGArTniyYg2afMYLdGCf7teQEGSo1JSXdNQU8RxXCKGp77U5jzn2qdUTyFQdmPCTPJLXSQqKTnXbQxsF",
  "key2": "4qsFr9ba4V6NueKypgqtYBiyKMxYPvFqHUzdEjVdJDKEvLUaydL2YbbMDxtftiUQAHCWU2C4njxPGQd8RqCkwedt",
  "key3": "5tskbepoDTt21LWs1b5TYkS7jfheBXNFbCQLriF5SkpLSo6KDdrsk3VLj3Z1NPZQbiJTvgLYVFFdj2y63vJLYGt5",
  "key4": "5NmZ16XEBv6FDfDccKMxCTvVD9xG88FjDocJwC74kH4dzhwTY9RRgPZrVQ8Ww8KdRAcD84EpXeQ5hKFF8A8bUBq4",
  "key5": "3JyEThj5av9ddXsNDMUadyJ9UKtK6jUCnzqCCAoFjm5zFL4bxQNnLhfm6MPxeRdm3GcRyrvzJWJqHxTFkNoimmCS",
  "key6": "5aRFoW8ddW5rRqBgmrrMKmzAbWeSSvCCX3puNdwkUramjLixKJ8dpVBHHHcaN4Dq6NDemUiwTWknrE6gGoRwJu2k",
  "key7": "3orvo3C88mo46JoQtfwEmedkS2pKGRnaaAuGUxJT22yQCUNNGUMsLFFLgGuDVAs5NcgNQRYrAAHaJy8RuveK7oqz",
  "key8": "5TfuDakChBRutTNjCL3ZjAi9hhW4hrepoinN8kR8NQEnDdVTgu2hrEcy7gwx3Lz1hxtwMd4sgxiXJnvvekF5mVvB",
  "key9": "vTb37kbirpBopmggQ3zLnEDE64qsreedbwFV6Myk5JUKp2TfQjxkFadHqnrWrtHH5t9M7Z6Ex7HF5Eyhbr4FGxg",
  "key10": "2DZb5TnXgbpanWmWk1iLVeyiEw3oGeiN9Rkkdn6Vx2W8ChJCrbfYcqKXA6vRPE6KYvci33xwXA9d7CZhQgxf2Dkn",
  "key11": "3xKvzEuTcDjTuCx2A7JQFx3xduet5FswcJqosFGrYpZxgXgfZzWXkcED5jnQUeFTdWEzcq444mVTi3TPJY2R5vTR",
  "key12": "A9fZuieCwncGuHKjrpd7LkBAWQFA4y2WXenpz8svNuzAHiu8tZBmPBYTrUNBfX6B19R6VdsthaFRa1XQ7wv3Rpn",
  "key13": "5Tv4nE5V7piieDNAxpvamv1LaHzooFrfcMpXUezZZMDJMKW45EwgF8qt7nfdz81bnErCnThZobPcNn2ij3oEgu1U",
  "key14": "5jYzd5NGAwuaY3adVSuN39WztVbffXrS4UxaPRsiGbBnsBr29SNBR59Vmm2ezE1SJNucagerwnsJpXPGyVdVM2yo",
  "key15": "HU49AX5xZPwEovMtookrQViCK9pnZDG7ctZaedTuoCswdAiCXR6m5YeLSdrjHjsgkapEdoHPvZyrp68Vuq6sbS9",
  "key16": "5GiXk9kz1t74qn9ovvASnoMqDP27jQMQAb5hruSrJVw5uyZ5kHYoUqJWFgJG6b7Yx1hGZxc9W9RnHYosdNrAbn87",
  "key17": "4G2WEDAoexnXbTGUCqej9SUKnHuupvgxHi3GfMrqGK755geWxpAgrtzunEV6Nauy91pHXG7FnzJLsChPETcyyE8Z",
  "key18": "LkXE6idR8Ns2A6jzUcyBd8gHyn9J4DZr321ZaWqNTmc9Js2bEK6kv5Q4s6DYMuS5C4jZFkQfC3ayL9vbamBYLof",
  "key19": "dzru1hyqFmzyH8YaCSj3oVYcUXLheGZibgVFL1QoJ6wqU77jVUZi8XzEBgPaW2q22j9JvnzqWBmPnh6WgYow4Vz",
  "key20": "3fjUL99y7WPtamKCiwS8Qn686Y5jHnwwBLthM8nrugXnPK2deLHV7SFoGbvPJpPKhYbF6aQBDnd7Mf5kR24ctGaD",
  "key21": "47oaY6RurDsVcHfGzPHUxMPEYr77K1JgguXEyeV7L5qzYhordH72VQ5koYQorz3qTyK6mCtZFk2vh6vP82maf2qf",
  "key22": "483EnZHxXt5dVpYHrufstGrUUFy8z5sZULoaZspNb7vocG5pRkx8d4vcS4FHgwwjiW42D5tW4dsrV9qPWyNZLQT4",
  "key23": "63j4RxwuwHht2Xf676mGUQ7KVRSv55nFHzV1g8GTBCvZ2eBsSzABuoQSD4s6S3EVuXhoyecKd8NBbb4ib5jiK1sC",
  "key24": "2Y8NXywHrTfxU1pvuTKrfJ2izVqUPZL46urhgN5vphE3GfjvN6pVHU5G3MQe4A7cHmcjDX75xaPw6BfntwLybkcZ",
  "key25": "Mx6eHnWFBzxv6oYG9b9nkEWXxGaDDWf7jkToPHeNBVWEAdjtb9itgmNy3kV5REJYNmZzcidXoWU5pwYR6zVU3cM",
  "key26": "6PfTXeYFduDErguBukWQeMfCSeomnAvktzsj2kcArgiwuFhNiMwjQAHPJQD1omJ4EUCCPJyWaLgAFaX3qwKjeRh",
  "key27": "31zcpkwuqcDBDiixNjugDdQjf471VLPPVZKtRNUFugGrRWGfWMWVbqKg4FJG786Y9rEeAShKtU2BxtieRpwn2Ngo",
  "key28": "4u4ZE42ZMjpy1raxwQcEZMNPzccRSJXpeonYdvCfpqCswGJ7Q4njsMN2B4zLTtRSxKCchJZEdLTEvea1m3u374k8",
  "key29": "3QVCtnxu49jPHfHPkHbr6LTEp8fMhUbqnscXzqS6BjQt2DR7drDBUZbz9cNb4jBxNXSBirEHHbebQr4URgHooSJY",
  "key30": "5UeNZ1GjRWJScBwh7xC7gUG96ZTHs3uqEeyCgPTDya5yEXDp7icP46Bdx7oBaHFqxe3qfLr9yZnM3mSnh7XnvsSz",
  "key31": "4zAQGv7DLdUcPg6irAaNYFRXk6JYqsGqdmBTxW4sFizGHnhe6AgfFx9FE57AxViv572UNHF7xwYgmwzKSbWU3HK8",
  "key32": "4JTSswMZ6i5o4wHfE5fAaPDQC4LMhF54BMVj7JxXPSCswg7UE17DrabYudEXEQDxH3CDnTUacm39y1psejMeF4Uu",
  "key33": "4L8GJveZ4SPLx5nBRJsii4oDxy9ZJrdYAJQ6HfxHkAoyY9BbQRRwrrxcZkdSqM3uiuY2tjAPhqYj2aUyLwp2XNyg",
  "key34": "3b3EWMqYZf7P6xGkowYFUnwbbxZJcLpjukjhu1Go578HRi9NbpkiK8G7vqCinQ7Km2NuH89bjsTPK9hzzgFdpgSP",
  "key35": "3i1LkrXiZf8PLYtevqSjNFUBFcKkKRo3EEtVJEzmejAphQT9LLF5CLceViF8gsz5kjf8Qvnxigt9CexWWrkTmnUj",
  "key36": "FquQd25hAS2BZ7quaJNiW8oZTsaVt51S26m3NBx9CaccMn2JV74gjGAoxCBjnY23J1QsZiGJQYUbLsMbHgNuZsZ",
  "key37": "4c21gmK1xpeyyuMXDXkmtd5wZurWD9b6FkZuB3n8HM1dG8f2ikFMiWYLc26mkKNK3VJEA9duBW3XfKyynoY3TcBa",
  "key38": "5w9nZzj24AAWjP7mjKAYfduSPtYHTpadHkVNWiQRQXuBYaFTFKvh1GFrknRRaaSK4fcrhACWhL15Q4FTCPEy2knd",
  "key39": "26VUxpfy9AjhPQwtU1C8X87rEYFfphTAGSRJwd6ECs6gbPD2zJ6cAtTyDsNfA6Q3WU9eJArc2YEoxsQQ1VbEnjay",
  "key40": "5Bq1aXLGWVNVfWmzzdgi34Fsd1MpcSyMLMV2J3KZDCxLGhhQdEiTM8dKYtbLBxMkKbF1sgGP86FRdzApK9fvoKJK",
  "key41": "62zXxubTxs9kaV9fwdxQrDVjVoyutUWBRwB8G9GTt21AhJgstkCYYz5VXfSuJY3Sk5vkD7TK4QHvaAvn4QMAiubU",
  "key42": "2vpUNBmLehNTXtzBeTEKVdmkwHaKJsRVigbQbrU5ZvbKKMCugwZc4Hx6DYeJo34UnVfwrfWk5zSqU9FUKqsufeeA",
  "key43": "2DUXsmvXMXh9kFnNW1XSnaX7DG19eDFFTMRHbRFL3Jncozbg8nuMGR73kbw7LZX7hqqEzf73Y87wqtiZs4nNynrh",
  "key44": "63TQFYexg1hVywRbswzuuZUDTPb1NeWykTThoRaWHjF13XXssqJ35w9GatA31huDmjwGUnSzb6pqdspTUcDrtfpP",
  "key45": "5q1VpRmMTgDrRjhT95XD5tXYUS5xjeUejC2Ja8iN1xNWzgCidkjtP2sWfGgUCmgBLTJ1jfXcfobXQ2UQbUXS5HZ6",
  "key46": "64RMDa2qRvSrqvRkUBDhLHdom6Ryojm3QXoVYQEn1j4z7rvAa3Cr923g9XRrL6Vh8KFfsHoFbuGJHUZ8QcK4Xjbs",
  "key47": "3R2jVtWKKwNNyEvxcH64sQAX9tnyuLJub682ngk7dqhbeMk5y7Uf2D2CyiM91KHzfJmtwZWyjxg3xGypVWAUNLkh"
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
