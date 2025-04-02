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
    "4SuJwjfhEnaT9T9g1vyABi8R8HBxAvsUsWrxwuLbyNZC1sTYU71LRu5Z4kDJY3qdSoxcQPnP1VM3uHDAoh63gBh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSNx4ejS3fTytuoJzCzfJNKnpZRzWFpcZqqyT1an51Ke5McsDuKTmYq4qtQMQWbb9UmUHgEpjdu21fHa4QgYUcX",
  "key1": "2m5Evvc6P9SUZkFPbjCZQAePnR7ZKjCjVynuFrggqZo7gPkyiJBcDLus58tGQtjgRagJau8RCBBsUkiqMnqj5XxD",
  "key2": "3moQjjmFBX48WSV6V6ppNg6KUPZcHZMp7ARNa5n3Kvifh4SrvPk1oaLk3PA5D5njcAKcWvjFSSxRb4ZNu3E3tsWs",
  "key3": "4L8n6czR4UoHh96TmxNeJPdD47YLm8GEKNEqfLREpUq4bbBaWb1G5A8UC78XKht4MkSm8UrkSUGcRjK7bqGAcqbQ",
  "key4": "3Yndxfr9Me1UBBvisXtDHRAR5Dv6TjFkPHFmg65sbQnPguf1PQMG3rWhf6WJ2J4gpg5zKYJXJYnL7rb18XpSuQBU",
  "key5": "5p3orZKh7LDPdh1FEEKTU1hvMBKxrf3UGzvDBWvUoXXJfhUPyWCoGoXkodUewkz62AvQ191WB42TcNAP2drKbHN7",
  "key6": "hbffm4zPkhdfGPrB7XUmXqsagz8pN71TdzkWW6gF2Q6brKRz5RznCGVuFZjKz55xCsvNqS3AQjNGJ3vC6z3wmiL",
  "key7": "5HB1Jn6S4UtnDYFPEfm4XBQs2cQEpd3eHt7yDzhS3gR7XDHoJPsQZE3PfJ98rw4QJw1y3TNvYDgax34Dy27uSiNz",
  "key8": "5JNmZ9N919axCUFoovRcSkKXsTuAYLppR6cKd93yGd19dawDwY7bu19DZXjxy3FqLiqxQrLNmJQtaPXVv7wd1Gfb",
  "key9": "jui2i6eh53cYAAEErqjmfRrSoEMVSF5pzPAdcCbqAtbnbCsXskvtX73uQ9HGRQb2D6BMv6HjrVjeZ6WMo5hkAWZ",
  "key10": "5qgbGmYmTMgobPRU9wPiLWwhfmzsZV65WsfvW3r8fmJKzGXN5ExN9EeF4Fb6RKiFhaRw45Jzi1YS62v8QbTpS8aE",
  "key11": "2XtdkS3XhK9zvkqqdGzMQtaN8Cz8D4FERGvotRwcS5iMYxBB3Lrf8nBbcgYcLTaB4R8jHEW97R8zDpnDrCfbFyxP",
  "key12": "NDg79ZpGJZLiDf7ejoMq5wKmQisdJ77rq64GRAcn3ugiun2sLERWFLJYigMubzibfHtPj6nfJBa72x5rp2vFMVG",
  "key13": "2yFJNFAWvshxADJPxjjjcFhuqFpyTJHN3bjAg323K71v97gGT4khgqVwuGq7BB1gSPvvKjU7mPAgEzU9vrtYjwzj",
  "key14": "5jL6AZWLdfQTwFJroEoD9SH9oZVNRP1R5mmJe8uQRMLfwv2Znczp3Vo3cWtD6K9CWpY1paaT9vpKrh8WpkZHVBJp",
  "key15": "5aNr7z34LKcTttubAVxzVsCNqPtx1VWQpXzJuNjSeJmmCaTpS8z5Nz2vh5WvdjTKdbqvSqNFq4zpPdULmwaTz7J3",
  "key16": "2E7yvfaA1KdQDbTi25GPZAdeoEg5bNDraZzRzpaLrnAK2Jc8NsHsvGrvHYjzQoTvoRTew4Huxp8dCoNH521aHRT6",
  "key17": "2weqZgZjh153iyux3g1dA8WSr6TWWyAig5WX7TxirS5qQme2nssQmkdAgAsXdxXqLXL1i7okXXMaF9UAyYvtg2br",
  "key18": "3eqiAHdaAbN7JX8XN4MmWdHTrEhXWxQYgZnfdtMvMt5hZSwE4GDTqdDyi86waUVRyCHtTnbehaF3VXcpkMzdjVM7",
  "key19": "3qhCesY1zdmtjLbVsxJwmb57cTZsHov2tJ99uAY7gjw5LYf9Y5dB6sjXRFxKMjJpUT4Qkpp5Bzvefytvn2xMUP13",
  "key20": "y9UhmVT9HjdcaLits59oNQ2CdDetx81BRCmcJprkzxWjDRppN78tVARaP4Cej17WAbDRLoZLDXPyKRUbp3TYxQy",
  "key21": "2SeDsm7KCKbeoCsAZz27EfWVm8XeLSwgR6yvGdQhSEdosXHcjUtve3zy3V9JBYkqQZdzdUznm5EWUmYQDM6xC4cR",
  "key22": "54F6xGHNQQeWG9bsTi7z9iugYETTWxQ9UtDEAwPZZyjXTFbr52dpwqW1NdWGS7fqDxFeAo5ZxTQXCi4UBvMqDHLD",
  "key23": "3pNkU5MC4s6WTrQrXoLtym2VhDnEm8TKssbG5Ya1z2GRVH7mLZqrf3sQk2spNougyYphUahZF74hWp1RLKs3JUWy",
  "key24": "3umX5NSdVcSDcnKNUNBk28eqvJUdbjR7BQ5yfZTzmzRFtwG1gsm7kZFWAbiPrC6s1K8bNaGV47N8gXurEiUrWSdi",
  "key25": "66WgYNotdgXoM338Ru37snTL9MmUJZEytLkWB2QRvdviQAaLPQ5KR3Na1YUrvzJ6DyEtP3C6R7BrXTcz1Eter2EC",
  "key26": "32t8kYTE9WtezGCAAC1gmyGAHses5Qn3wFTUo5xaxXiVXPzPXKPnQEK5GbHojw5LMkQJgmeX5Qx8EPfF13QJ1RVY",
  "key27": "3AM6KF9yNbqEBgJ1UFwvBf8LChZjNEiVLkZQCMstoVcj2a4G19wRwYdBXH1aabqkkkW4PeLQZmensP8fPyYrGcbE",
  "key28": "rFybEs17tdzmjSUpiyxbKQ5QsvC6GTDtLNKG2ruA4bxxzRQPx9KeEbXjN1LzajjUoX8MsZtTZbSK5LjHNQro3Ry",
  "key29": "3uSkXBaCoBm4hDJujrFizEXdmacKvpLHRPHptGA73WFuVkmtUoSFh4qfAqpB3QZi5aQxAGaM1TwN2aSvGXgF5jyd",
  "key30": "287hbXLZZuojnEPD3UB5yqp5bZnEEv6QZNr2PzGUtXUG3Xhq2EX9jv1BVL8d3oKDzxBQ3pW8PU1v4mLBwVKP9Dqo",
  "key31": "wXfse36YHAGSfJ9g3kpfWyshRRhJzDMcofmBgigpgbapo2mpNeJbsQbsLaKwR3yXvoxRqyHpiqiUsThrDDg3vJU",
  "key32": "99KmUgJHyvqLKriVymM1yWph2wuaF4ATe5KstkfkSZT7CGye6qpA6UugxmvAbpmG7LX4HGPkrWHHPZ5syu1AJ8B",
  "key33": "5ZXeYotmCpYSxh4KCQKadc7maXdAfUst84UNNJqxpd43bqSyjQ2uqjLdQ6vctQHT9kr8Um9MvjMnrhHv7xKxbKi8",
  "key34": "2QEx6N9uwshqczh9sA96gWiEfMu6zwGyGcveoPhQ4wZnJSQabw8qiMuaNvTA263vbwUa6a3bcEHVRveyZr1xUixP",
  "key35": "4n1mGYF7xzX3W6RWjSk4bHPw8govps2gVA2TDfzJdoyXTumtnbxy8hz1HkpHQwaH9PtaU45qgq6AtkaoVj9JNg4g",
  "key36": "3WSZrRZgXFQ5XdfxEZdLrgb295h4PYWXrB9kxxPaBjnxLDPfLMQngR4YQAWBe2sjheAN71gHW5xJauKdgvajnj3Y",
  "key37": "381RfGeTs7GQZcmv4JdjiQtWKuZEBo6Lus2cqM8nm5aBkhrSPa4BU2Zp4ieDuUCQ3qX9jZkpZzCUwr12buCM82xu",
  "key38": "4UTiwj833qpw8uRYGgnwhosS2czCKX2Z1tPLWoBHnopU2Y8skonVoc58imGuKkxjhejC8EnUQ7ZQFvzcMomN3XZ9",
  "key39": "392xR86S2MbC8wMh1u5DVmGYGv9wVWHUxrHEEtbZSYPsKpm9Zqz7NiigZUs4zuAHsRtbVUbNQWxETTsHuuU6hhtE",
  "key40": "3Frumvm2HDJDLrTWUE8XePTDStJCeMHkLUaxcYebd1ZygUr3dmVULsW6bj47vNCkUgzbesvv2pt3vJJzjeCk7LoJ",
  "key41": "aJSFoBFAyTpzCKheyJm5EMLdY3D95KGbEbh5Mnfvk3ZxEC527XQtny5FBR5zyQVbWavR86dB4R8JG99CeFrP2at",
  "key42": "4nPGm6dRa7e1rimAXT8q7QaSqU1tWeu7Qv7CHCeQJP3UoXFvVVUHyvwqV63pCPAyxWXDQ6G5iT781VgmxaD4w5Bm",
  "key43": "2QwmqEqRrd7Z9V9EMebavakk8vAAHdPc232ZMrYQxSh375cidJ67qmYu5EgCFrJkYkPeBDLFf5U5k1HCQTLnk8fU",
  "key44": "p4EHreXmCSQKmGZ5wFqcbN7AaQuW15wnkieRaHYCdWreCnJQBrwB5BqXaBKo76GcSAYHGVSiBVujdDC4dJvwWZv",
  "key45": "5j3xD5CjAyW4EbCFvPu7VYDfyGUeTSK4vGo6Zftc737cZHoJDNaMFawtXhzcuosvKCamamxBT2bCxvUvdfjDmmah"
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
