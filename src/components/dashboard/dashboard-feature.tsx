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
    "5HSQJ4NJFuPPbDDvdyqXH3cnjh3prMF6B9TrGeYv5FtUSG2qsVypFUYFDdrUfSamC2ugG9PuUYDr1gFFbYDbHudJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Seg1TPMkXUQNg9VRZSuwjBSBEG8WHSNdJUdQeuaTkwDjDPpcgTVmqzVwoeQwRgKNZD94t1TeoT8jftZCyBJCk2L",
  "key1": "5WPi1UW1ZGjx1PDftBhe5qnJWxj4rSpNQkR8PzMcfBvooVcCzxH1HKgV6JT9PYFVoR7PF5hueTP6zPYt2v3YDSqo",
  "key2": "BXike8h8gUW3uapJtq5XKgtqYUMaXoofPPPzvmD5C4bBtDqRi5TdBs2nRbGbVSV1FtEq4KQBfGaPCFxMJxsJUtF",
  "key3": "2TNs1nWY8cVEUSUeYbMdoqyP47yL5tqcDDu2bFBoLbr8NTcneb7RbjyCFZcSSFMpVawpa3UUn2XTEVH1rvqFVMyF",
  "key4": "2dkTqoetsLjq5cQLGwpETUFcsiBw2oUc5B4WGmhWMyrizGjCWKcfNv1nXA8chcAb6tPz536cbJ3fKvm8JFkA6UXm",
  "key5": "2ZPK7yERyhUhZE9QFqfHQx3jYcFkHzSbqYwmQokxZjKtVtzGWRFaGRJAJVFU4k9DswqBo7pxmanamwDyGQCSmqyn",
  "key6": "4L984y92HDEv4j7ke2DqRmuP8T476nQZooG783NifJrKXAzdoqUJxLqJbaXv8CaAwygF62MgakkphXs3zzEerMfg",
  "key7": "46Xpsx9oJx3hGLshnyKWirQonUnuYaqiW1jL19xwc3B818CiWcpWGNVvKSrVXXdv9if1dAi1f7kTYjojmwvXxBDb",
  "key8": "42XuyPwZrAJh1VSMUPxzbpnoEyrTxKn3VAzG1MtXAMXeFwguX9yk8WokC4JePJqxcX2G4Tt8e47CDrA49HGxSj63",
  "key9": "2LcRDaDZ7Y1EBL2Unrj5dESj61ncU5xVW2afoDnSXd6MyJJH8mkQZ4YBSSzS9Axk49Zg8sTgUBrXdUcMdX6YVS4z",
  "key10": "5bxicWYx5Knyo6X7ewSZTMX4Qoxe44hURiwo5SpNBkMYPqrYUuuz7scPrJaDmjQBMqsn8x62NFBvQPCzYh9cYnY4",
  "key11": "4P2aqRFcPzu1MkQ97jK1mkdv3UkMK2DSfKrMMVh98xzDWBwFaSTi2WPHeZ7ooYX6nos8WnJJqHPuMZRmc7yaVqdW",
  "key12": "4RqDREFg9WMXoy7Ji9VpSz3JMB2u8oZkj7EZsYYRZTwUXckndzXZZ3UnGW3XCBzfEH92VsDk2iFh8tgdEgg2U761",
  "key13": "4o4V4jdYHpHG2R7SqrWYTQSExWahWYEt9szBhR5PZfDeozTQaXvuxUprBpzyWHswe3bFvqpsar97BobYPA9f1SBe",
  "key14": "57tQ6q13LGwSMFk67jgAo5ezQuQXfChReMSuyCcEWQReXNH5D6NjusCPzHbRH4sTPvJs5eEkBqpTQVL2s5h5AFwq",
  "key15": "66SyBThMEJo653a2nvBWihBYvMXZgDiuEUz3KDj4Rqxx8fZFcfnJx6WSMqZ2yue9NRaF4rBeX44ZzzSKhDvppPWf",
  "key16": "4zSqy8Kv9FNkaxoNvYRwwn8bVAsMyBECosvzsogkEgkKWE3RUWWZj5pp9b6U56z13uV1GTHZxpYY9thiDQzYD4Ha",
  "key17": "sLDQNKDc7Dm7oo3tzq8dsZemdMvck69S737Wv5gF8ZeUzhWPwDb5E78rViGxBDcUtffWST8EDmMMQ4eqyZeiHPH",
  "key18": "YNY2Vp8eNJoi7o3f1rUSif1RyJwjPgHiD2NZMHQgcKPaoC8TJCTJqXKJVwUxywGfKfhzKWgLrmN3C56rA9zG7Ah",
  "key19": "2mUYm1ABAW7hhYdUWrfx8msUUKYiDi5FWYYYVAzUjFNNv7ypxzqbqSKWDLGQPx994cYPtZSvXTEKkzwsjRQnKyhg",
  "key20": "2xtr3dHmQwarmrEHbdWBr1G8kfnKraWedgtAtpSGV3eHWB8XESz74uGLuu2t7CdtM3mnZbKQTN7GcK4L9a8NyCHh",
  "key21": "2EEsQtvGDGJD76Yjm6rim1RHhp3evwCBz3xDJVqUumPQKGfmzhxoFGWipv24WjesfUviDVYXz2eWD1nXMNxw4Nhv",
  "key22": "HmnnRkdZQVSXkBydm6bt4iT5uvAs7hMtvuJheYgAedwRxjn6Cm2aShA1hhX8rg8LXC2eAjWrNMQRxcvRSWk94Kf",
  "key23": "3BMfxXV2q6PadAjdB8JTCHRGRVJFiPH5XyhAxonT4qyu4yGjZYXyZ5sBp6QnhvQBXj587cctwb4wDAHvM9QpzPxF",
  "key24": "5eCNti76Y92fED9P7usoXhWAtxoMmDDckTEfUuSPyFooDYtcdczg4G79cNZTAuWsRzaaE2h8MRamUX7Buo4UxmNs",
  "key25": "mbJxhEYKPNxSYYoTWBZAWPUqDUmZ9nFUnjmDhD3hBJouK24U9sUCoqxyhk5nuHNpGPBGM65CdDSrzZa46KrD4Tr",
  "key26": "57ZSBNp3ve9L6bTVUTBAjmAUVJLrKJobjbcCqJPzQgMRWw5NjDDQWMpeaKrGfMRWcq4Dn6kowDxDuZWuBNVnFnZg",
  "key27": "5yoYbFqrpZFPs4k2JAwpUmX2Pax2dZeT4ULnVirbzpdSjbHDkX4ZBnMorDC5UpEkT8B1c4Sb7z6uToYD4ghqkbZA",
  "key28": "2LtympSqex1mKUyHE3Q2WvghWYp5LZ6DtEHwHmXy3EQKG7qu6XXXfUiu5J82rSMMejkugSUU3BteRPcN5Q7Xzbo",
  "key29": "4dXP6QN16WXyucbniYb1acExNqGBdVaHZgN2PUeRApPDUvJ4unHwLVQ2mUzxAxyqdC8HZsk3WxQsw4d1uyP4MX88",
  "key30": "7FxHa54687YgLzMi9LGyVXri5tFaDzJiFnPPV4iEz3YLvQ2ad12ig2Pkdn6ydXgvxiohogthN12eCEKA5Xne2n7",
  "key31": "5So62KMxYmS2KgoU5K2ZMbV6j8kGmsqxEt9cSZW4f7vG8LU7opNJMDaUZsvEyPoVC4HcaqBSwpU85F7JPHuhoNZ9",
  "key32": "5Jpyo1xmJqEMymbk6W8iD1QAJi85sEPed8kKkuZATRZV4eUw8QTm524XFpFgoqtY97sBiCrzXBgwDvU1uVeutXb1",
  "key33": "2TMbshfTDe5LK7oes2JE4fWR5nK349zszKAsVE6r3SzX15WqLBRVGqPyLuyjvT1y6L58V23TRrg79eXVbCc2X7fF",
  "key34": "4o2jDBBRovUj7KaahHzpua6y2V57fj4SC6ZHQ5bQkkqmQohMYnw3gVWJPKa1x3YJDof7JzebSmPWZgtHuxxHcNBm",
  "key35": "4mBAngxdCejZaqucJGTNAfNZMQhUferUi3f5wA5KNzuGZhShZeqx137cVpenAz9xn8ddsrvfRKP1o4Ho663FUBza",
  "key36": "1b6yKoohuXsgRsoVHAvHBv2U4RoVJsnwmVnfXMoVgjpippyGNNoBuhy7MXxVnp5uux7YjTjYHhuiAx8vXXQ4kJY",
  "key37": "3cZNv8Jx79Miy5JLd7D4nRwYwPzpeGrQDBd9xdBeJ18rNYsgUeiguzj16mUX43otNc5RST6xw5dum3bFDYFeDVzM",
  "key38": "5VyH6HCL6gBSAsA6Lb45zXexoNXfdNJF9Aq6FuV3wWaDHnr65u9kQaQeycL55zVJJaWetL9zdUxvfbL1NdkoBmcC",
  "key39": "4ZtDt5qCPB2fk7iCZGV9zmrmrLyHWoXMos4gFJBrLiM9p5z1hdM34ZmAsoTZKBw8Zgh4PpsjB1PK3xNRJiXKiYer",
  "key40": "3kCWy987mARWa1iLS57WRRDp9ooF6Vge8gZektT5L9XPaKouFDvEQen3B6DTtuFdmtMnvu2BoGeni4ayGH7AMRFK",
  "key41": "4kX7AFheyZEaKS8qM9SEPGHywhKvJFDz2z3U8eg3m9eGxV6Mfuqo9CnWT7UEU6jXSa8yYKUAhwFVRXjxemm468QH",
  "key42": "54jKQMG2ChXLwKyHJYi3h7GctY2XqRouapwogLikDSGxhZMm7x4Lfj6NAUKNmjv5C3EoW8mZGGn8oGrXPQQsKHh2",
  "key43": "2KTtCLnNsZC3oCTFwvtLq7HdQbkFbFjs35TxjduJFKx68i1DpTaZfbzXzjHLCUTaHQ1TmP6XAGHuHgjeq7QMKDpi",
  "key44": "5bgyJqEGixMFmtGvzqD4m3Aem1sFCBQttARvdiftx91gfDrhE51VD1CYAQPLKiBdnyCbFsWefJKe3k7ECUvapNPe",
  "key45": "4LJA2BrLvfrVWTjvqUQUiu5bhcBJu4ctuWvEANmCcGo7KHgQnQ5rdXnF6y6k6AWcAVQDQzDQn2C2WopFL3oGzz23",
  "key46": "4bKjXYbAC7zNBrqQc1PYuKvbAR5e3U9Q4mCPB7q2crWLdFjbTWCsa79u4ShSXSfxnW7LX5wDVghEvxTT9YhUD6mS"
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
