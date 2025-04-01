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
    "3uJ7LwgszsCDx5iZb3b6iiLN6FhBGY8useXuPEMjk8wynAbu5UX76CFC5yc5tk82hhrtddGYdwbQFhKZZM6n2dJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfYd8Y33AvNaZY7FPPLpnBzECijSXoFRZVdk3RFH35ebiCGuE1JoUZ6qXf9EsH2yYY4faAXZoSBK9kgEWR9JaK5",
  "key1": "2mpPvVUK1FspBRHvqXVZUxdBWt8hRT54CznsimL5yKtshuFtyppF2LiCSs81LiSEHDE7nCvAYWSiQVpW2YbKgEfs",
  "key2": "5N5vRE85Vjqd4PpP2MNGZSc9L1qcXgzoiYnJqK5ZFy68izWJFqJPanWM9wVNchGjJCuZNH1UZptJtYSvTraUYwJd",
  "key3": "FC48tEhU4rdfsKf1Phx8FzjEeNECeNJtFT6LX4ocnh932WKz8rbQYp1dkPixcwnHpRwvQ3LsVcF7UFRXDvTUHtJ",
  "key4": "2J79HNEHS1HXF1M5kCcCJ9fvZTDvBzRzebqcFoRY7z566As33C81qmbbFUTHw8U3Mi4qFYp1WxZa4a9gXXcijJkS",
  "key5": "2CFmaokj9ca8vEazmjx7YyzgKEpwamu2nJJiYpm3sK9dg24Axc7rGmjEndybXTbFVji63wvizS9i4my1xVGHNyLi",
  "key6": "5KdfRaL3SEdGniht74dnt7P5XJtSwsvqxXXW6hKMFy9SqnSDLu7yjHuiSWNEwjEqwq4sGk9vNdBcLzne6qeksoNA",
  "key7": "2Tzp4jVDp1Ac8Ek189r83iLHwtiPFE7E9H7AmDTYQee4S6QkwEMB8r2fjnBBcTnLj99rGezjFbJDSnSVCsKbZUXu",
  "key8": "2E4dC5jfabv12p6T2u7YzSA4c31EnChpEihKcbZ4g5Zdtr894YFwNvrbUwbhxniGwRHXAkFhDipgaTvto7uyqp8A",
  "key9": "4EU9wkjHcsRdKaetqTTnTnWHpgVf1P6udG8kcrEkr6wk6YZ5hjqHFC87yyaWVdAEthtArFLo89Pfus3mwxVjh2x1",
  "key10": "3n3HSNo8xQ3UEf8jHacN2mqcfTFZunQCRQ1uGdD6dYuLWm32kb17GwQ83rzf2r64JRpBZjZ2hzGBmq45Cf4rccZo",
  "key11": "89rrcTKzvwNV1aUzt6vrzhc8CPEm4PZNRVViTfBDhUpcoYNvPezuXWQ79ppT2iebErWhzLVUHraX4tTUhx5qpUS",
  "key12": "62XPTkb8amXpmFvdARTBfZh1cGAr6raTEwx4Kg5JwJYdY9Po8CDpBQhRZxnfDtEbL58zMMttCDPNbbwHumV5fS2S",
  "key13": "2QNZHshKibnh6RqjBsmajDBLwj7tHajHLdK7eHugoh3VJZaVuHyf2vv1WYU8SCJ29ryrcsZ9vcMNo4HWXEkRuTsT",
  "key14": "43m5P1DqGecS4jUjgv1byWCC4j5nvgJXuCoFKyLQNTr7pmi8b8sukaFuekkaTmNB4fJZaFFnUSBfLj2kZppxQBpu",
  "key15": "2tnuxAgCjc5aRh8EcW8nP4TmuLDe1RnVHpWWscmqYC8W2aTkTzNt9nBchFqXaZGZHWtW9XmLLRAmbBM9D74m57U6",
  "key16": "5VdBJ89aKoPcWt8GTevbztx9iAuLbWb4Vm9VFJyFg6oWSef3xXDa7vri8X6d9DKVmD68Jpx4RGtpyB42tNp6QxUs",
  "key17": "2CTsHYHifhmULM8TFoUu5M5SEt1QjBiBPA7sF9tavkFJ5vzDDDb13WY1bLoszdL9WEv3BxkGE26RU67PYE1Vnhht",
  "key18": "3jJRykNXok8vwtqwrikjv69JsPX3aNrBNUpLYjq87ZU4y2S1oae9gXYCzjc9W927C3ybczZmpWSYqL3gi9pv5Nj8",
  "key19": "31Db2Y4K2dxgFDgAdDUat4pqJ6EcZgVn1C4ccY8HDUzeX4QnFM4KvjKSp9ErQTzTECmiuEYy7Qk3pgATBYRaYow6",
  "key20": "7Wr7J7zvGLqkkw59nCSNGnVVGk7RH9gj6JTCpapwhzmzWcdbA9yvXo1kJpevddToSsHjsoAx1dsS7jU9vnSdb8d",
  "key21": "4FVcZwzB8kke4KF1xN7zM7KZAHcbzcANUba5Dyw3X9R9P7Y8qr6F9rTieTU92fdvUZNHtwrc49nFdaBFMD1JMbER",
  "key22": "2iEKvmWUihShf5nmPAc6vKZmewZ2h1nBjdNX3i7dBMyBaGdL3muZkXGk4fT7WNwAwoAVoRcitvjyFh9B4KMfbutP",
  "key23": "2htsuSzHShMHghAfje74Z14MuiqMaDm49iHvZdndEvSBytMXW3BT517nG2ptqWUbPXJBDZ6crLxZskVAH49nfzat",
  "key24": "5egGHUMTVu6seyavgERdSSGNEvA81KAFYPiVZTvYUnbKP6SSnYVEKYTzfoYqJeNrr7zdvAmERwiiVupzmitFT419",
  "key25": "5aZ4h22LvvwByn1YChbDdBXZ6PHcoTyzKZ2tWmL2okCEHoWc8RAoRr1REf65GcBREgG6iW2Ju29iyazrmkSfeR3E",
  "key26": "cguDF53XdoM2FnnwovRJUAQdnZr7n7VH94tR6JdwC6cn4fpNuVkba5UvbsqHynY8qjDruoE748PPphSY8xLtA7S",
  "key27": "2DWGFTNzdnwsnVPdnvHqyHQ7ERTrXep9KxQfPDa9CuNnAZef2Jimcd5kpB4Q2xRuUb3j9tqH4rPnpebbZqC4s6EN",
  "key28": "4PLazPMjzLYmYi4A9SyZoSuGYqF2uFdNac4j12vY3wrR9WVbw2irwkLyVqCQP1xPQkoVfXBXDsB49nb4RVN2zoFu",
  "key29": "2xJgUpJww6PFBoZ8oHmZQhqjsES3RE9sKrxJ9rbhArokDWUhodX6URFnxudB6UqMPY49H8d3C98BKzxAMuuZL8NK",
  "key30": "5R4EcsdZBJkA8Tquj67kEkeLHpMUh2FRyHF5FdtScAioXLNx7bfFQYWSfwxFBwXEwxdpTuezEwVv2LBrxgsfDCpi",
  "key31": "4Tk5pPw4GohduChyS3DimkCPSGUuqtqRLGk4PBgDyCHskgzvDzfxzrrjhZMAnKCAnPnh3jX6jmugiigsANsaUMyF",
  "key32": "43yQcXBPuYLLd5rpnj5kzWcW7gTbN5gjfd62qYwEnUFDv38N1GJx6jkrRFKUHcDCZ1r4oyTuZmPp3j3ji5V7ydej",
  "key33": "7bupfuyrzRwUKsmzfenzR21YCVzC33sj5zHnp6o25f6rwXvr6358exz87Ewdhn6vjsNTw5o8kDSvSwZAUyF3iaD",
  "key34": "YGNqGGtBBmQ6bDuydR8G6F3xLoH45Qfx7EgXVF2TcB8Ha5fq5AXGXSK5tLCacyeC4vXx8B8PYbAKHYYgM2P8gbJ",
  "key35": "aTxKwQymi4WqVjVC2VM7C3WAmZgWc7eDt1Kv3HkZNxg3j3LQRF3ZoRmPR9YjiS5Qkzdbmo5msT5v3mVWFnVK3Fs",
  "key36": "4yArLGGUV8huZtbxHPkbrQCuXwNUeoXNVtU22Xk7zYSEea1SLSkEkFY4pJiMSqvVDZ9vcw4dnq6GHDX9B9jChw1J",
  "key37": "2tqC3xEaFPuiSvGKxvaGwPgbbLnVvhhjduPqyphyR9kP8uEkSpLs1yWF29ntvgnp6ifrRP9JMCRkCriAaNe6pPA7",
  "key38": "66p4r1A7KFXzGZBJDASrtS2vDw68toXnV4DqkqqmiKCKT2abG3agnEUiZVPXy8PALszGMQfuJt9FLHjjSn2CLf9U",
  "key39": "4vqfEFDgC1H78coRsfTu2yQcxr9Pw2GMc2WnYdDhbMbgDKL4pC3WrbsBidWZxxxhAjwW92PfwdCeRAoNvjzRiMGL",
  "key40": "2EMDKhJkvErZzXWntHx4xzAsYsdfQd5rfENrEs24B1EyNhyjJe6EHwLbLUu2jJKV86gSVL7kUtSr243tkY1beP4i",
  "key41": "2H6PfbSwBvHGbwBPnjCKu5nAbn7oAGezJr6UxzcceXUwtKjaNnuhV4edDbL1CzPVUTmE1eg2efLotyzJYL4MitW3"
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
