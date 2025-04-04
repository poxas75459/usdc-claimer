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
    "4APwgzkBuBuz8iJ3pJ5JAV3SDiquyVgNd4X1UHn2MBW5Cu4UZAjSkYtWaQT8o2ECeBzKUseBoGd8VAsxHaMmn8AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymJh6cxYahcJ4d6zYbwYLefoHuNTkknMSZUr4Tx2E5iLj52qDvXr8gXrRW4jx85DGY8w672PAmz3T5P5pr6bATk",
  "key1": "5tAxBknvezygu7yDAF751yJEgj99ffZgRJNN57y89BT2mk8kUCSYbkHHtfWgCKnX6uJtZUpb22RY2qv7dmtDCu7w",
  "key2": "3WnXREGPSHM5jkWJTQpXXVpuqrf3w9jLXhdo6EkLXA8ZubcGsZ6aMPdJW2cv97GyNQYwD7gaDNuwChekki8dAMm8",
  "key3": "4FcLnBBwuHdCjGDfDMyzgUofxjhDpdSifXVar8kZqQziVnfezsiEL8ChqzTMzUTQTcuksuMm2tRGxp6dP1LRHrmf",
  "key4": "3GKRo5ybgi4pNwZ7iykzjkprLEV1CUBUBYeJ1NzyAF8w4bMmPtuWEgoFyzrjwQRpmKJAChR8RQ6Ffiid7sEFa52a",
  "key5": "4YaYd2oKajUdPKdguhg6dWdBrnda9oxsdQzusSGbPZ7zKMY6aRshCpi3vojbNk6MXUWdaUm6xTxzxDVF79aifUPo",
  "key6": "2ZPkjCBZLkkrz5tdnGzfPUagAuGkZjMJAiJQt4u2Yd1vY7UUeiwHA7vecpDetVLrkKPJQg8ZchuL2dzoszEUVc3f",
  "key7": "2JxuPTxcfg3sbkGSmMrSfMYdMd97vEwGZmmVG3au6dwDbsuCo2cyZ8Z2Vk2Lt4YVdkvgGwY884NmwRUgqwCCXSJu",
  "key8": "5CUp9YMUhXgtyurD5dhR3Py1w3EByH1n6GU2eH6pQZi9XgqqZDbP3L2cpa5yqFsN1JK6jt2ZvS5ZKBvdUNk194wd",
  "key9": "4qbbva39tAo2FKhyDoTkGP9WkECjEYfRd5v2YD5bcABKacXr4232c6txti8gf4qNRgGf5qgyH5rnmGSaSNBZeNLn",
  "key10": "4uHNCHZBcuQwCesGvpkZeP9PpGATUsC5WUq8J685T69kVt4dhuEhbsoPeo9TrTYMpgv2rk7PAcc1Mj26Yy6c69ZS",
  "key11": "3mmemprHNYujLwe5Ro567DYgt1Lm92dFRzo9M8RAjpWGTRGK4iBAc66vH4BCshJqyNSYmoMb5aAgXxYkim6qz44f",
  "key12": "5CC4Hn9F12SAaw8SifmrbuYdubPJLdUokZxV5MvmPzut5jf8mpjyjGDocoUh3b7hkHCpSebcQSmyf4jb3u448qrG",
  "key13": "27TAqoD6aeurb14VCNU5GsLbdq9e8NxjwYQh8A1Xa1e5b6BWntsLVN1W6ivwmncw2zzfMeZ3WRpsmAjddRXrqDiE",
  "key14": "2G2G6r5Pfi5tQpXoXZPb3GW1sAWYuPexHCSenk4zcW9nsT48YBDh3HxEWqmhq7gvirMxpJSv8mLaHcYG2epbx4of",
  "key15": "2bnMJYpUYnFdxXm2KHDXszJKefxNdG2oeSR9T4QKFVaXwk5CfRazjL1PbYt2pVvERBDN5nH2bYDXGZr2aebH4jvs",
  "key16": "5iR1Vr3eqk7VgMXcYocdivYNd8o4sPpg5oNDMyhCQF4LFjCYEBNy24kJgCr3X3jfCa3i8CFQFiy4daHVt4LqgN41",
  "key17": "2tJFq7xUVD1FQzd3y8yMoph34zS4NWXsw1Mg4eHdqak15rcJs8LvwwvQFF4gn7wPe4E7YJ8PGHnr8hDt1ZketzPu",
  "key18": "54gpgEPBBtsSQN7M9nCkCHVnFKYRWxNAR1ey2SC6WbrBw4g6i8EER6sjY4SnGr6iYswq2zrs8Rn7xaNeCWVnUCY3",
  "key19": "2vbX149SLA4BJPkuBsUERBHJ9Dp6Z576qPX9W2vKv4s6UNAyWJdBmnEKR6h8tX8pskgSx1KPPYjkntRCG2nnZWJu",
  "key20": "4tT6xBBGgv1p73ZvCQvryErSyf6xQ1jNPGJQCxiQKvMMGTgDfv7K75BG63uJZidCMv3anA3N431eNswmgZFikWvs",
  "key21": "j74qnjvEDAy4BNsQVAthtPPNrha3bYjs5HpG5TRKLR5CKNC3hWZksrzf2HGki6GByLak4cEbt7UhXA8jCTvnGSW",
  "key22": "27wfdad9FkzmTHB21LuE4GT1QHR7Kw9K39n6aiXGRoND1RcUshAcFUKb7nQNcAZEcLQsqyzXdPGr4Jqm2xWCMxKu",
  "key23": "gsCG9otTmLHAEqrNhDT2X5PbkdaBeePsy6iTod9kpFq38toVyipSHhcEW6yzWLwiYz5BLpWTWQ3abHXQrmV6rkH",
  "key24": "2sNrspzjdqVQCnyv8zrVLXwAJCD7YtgSj9sto3whuYusR4vzGBb1LxA1myevDe6q6YvbX9VP7zJMi8PmL5uYSiZ8",
  "key25": "2QXYQkvgctx9vvyyVBLKUZ6EDoCtX5hGrZN1EjcpkGaHFABTpyo1RgzY5s1KRKai9bfzAxB6EhkC15CjpjBsWjLu",
  "key26": "3eWktSpRbs1eYW3B7H6KtkVbmXQ9sWgvjpQc5QPEnDBThZkY6AAdQsz6J8cRqT1bNhJoSt6a6dW55tJE3h2o9PKw",
  "key27": "3ByqcvtEv4cCU8VuErkQNVeNhsEA3Mkks5EECQT7imZpTjpqHGLbVWYfAmCSntaQzSpDduWJrhDWkBT2BbUMA2ak",
  "key28": "2w5PNVaoswYV5uJELCWS4T5qt5uygcTvvj6qQVwKWBWHJBYBeytBHSdbjzL13T2xFNj7fa986iJ24MxL7cATPBu2",
  "key29": "4U5cJbAqSMvQCzpWin85AqfGpvG3s9T9iuSDdf4DVFWBcogizxYnCuMnextp9gH73stx2gHypbtUhCtcF1r1jG4Q",
  "key30": "5QqBWDCHA5p5UDvFr3FDNRV5oPggmpL53Jbo6NWm3VhJXatfDFmWVToiUZtA4xTr1xGkmn1ptwyqLdZYYNrJvddE",
  "key31": "5ZpK1vPDXWGASTEuTyF1woLWefn29ZXsGkERZ92xHbaeBonmhujmqLu9PbhPbkY2vpTgnVZpT4HuaNqKes5n9cmq",
  "key32": "yiG7djFuDYtoVEyge83aKoh2rbqyFoCXu8duZfKcB7RHuKnzgMMWSRfK1fe6DSbdxSxwhL5bbjYBJo4hpiHm859",
  "key33": "4pq3WmkBRoQ4riXJH4m7neNFDTMhaNpTHGhsLcM28CBdPrJrfKCqjw1LCqzcpxAt7HYJ3XrEVPBAjs5eTWkgwHJq",
  "key34": "315BCbbnHCxg4ho4vG3VR6PuDdf296wBXzJy4QzveSMCLZQnNHQogDhF9f1YPGxGnrzyiFCHihArtJjK9Pn1noXZ"
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
