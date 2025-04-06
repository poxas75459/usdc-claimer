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
    "9bqMVpYnp5UDa5Rzxm4ZCZ2H6wkARSvPpQBbprh9utAaBs9kKMXCy3HgeJYoQTjTGQFVWd6wC2zFtQAdMXugUkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UAusNm2qPh8czUCC462ByQXj4yY2jgKMiNwzWvUxsSJbf7HnZzo65jSwAG2p1kZdJoLaHf862FBE1MswZ94pGBo",
  "key1": "LViuwLoyGmaUmyAoTyktS5UjLVG4oiDmZLKgXs2MriiCTJ1o7fNFpJRDENMrWfHXptze7i2a5NbV5aa31hqWZtb",
  "key2": "55EeHyPWp21bytYvdnfcWgwZAA5yidkPF7s2i6BEmSC2hcyyUu5WeM48SahCvQxTTNZq87f3nU2F9RgFqZ7m9zUF",
  "key3": "31PUVCPZC6KNbTsqyPXLPMcYqWdRoKDyxie4siHwgvEstza7kNdAKEMgfxRHFZkD6m8ZT8wXUt2gH1rmQsCSj9oS",
  "key4": "48aLdNboHyW92fu8H6oe1Yd6NEMW264MdLZXS5VGyet13rnJM1CWCjfRYK791CzqiLg9f4uGEbZoJXaAtEzbdMr5",
  "key5": "4D7qbjdy1HD9AdYFzpJn4tDoKx9GtKsnPqhGnwV5CM2GKD7jocf2K9QeSgjnU7wz7ZHG5UmuCYRh1fE1pKSKh6jv",
  "key6": "5fMkgrTRdjVnuqBGZbncWe7ho1oLVyxFTGVJDCdLsv4n7CSQ5BfonFciRhVkMJG99THnSrRM9E4YdgMMVyFvE541",
  "key7": "K14jdtX8hCBRktthpzrzViSQUevVKMJPaFVvFRW6p9hXqytqntTpUth5LMeBTTWNxWJwkgkGnVprYAWNZYZsG9H",
  "key8": "4FrW5x67jxVaY5hVyVu5HrQgBT7P6RhuSPV5FYzx8vx3G8ATHqEkEeenL6gSDweKyswQ8PhNxsNDyAxHDBbEKLy6",
  "key9": "4gf5tmdMg2D7Y6GZbUuGW3QqCGs5aNAZuC2veNFrwz45VKAsJEXL8v5weUD7VvmwE7qJ5GuYSLe1QVKx6rxwj3pL",
  "key10": "4r6EmC8wsJDBhqLdvjVwVH9XxUrDJA9YHCed6kdTnjWykFh7GYUYfu4KvdEcm5nnA3YrsDb4HviDDYmaLaRV2bBa",
  "key11": "4BCHJTh9Z4DAUzATx53GMbvM5nNYnyquKBpK6yhrH23ufDCaCVK6MGAkfpMtPkM5DpYAbvoikrnaG9DAHBtawo18",
  "key12": "4fqTG8i99UpgSpuXa5wQfNuarxZAgTw9z6f6qfsLzH62Sy2xb9HDeGYYXe2kbSqYCFHiw9brFddiWU9Rer9RYnyb",
  "key13": "47rNGDasfdkk6J7JcXMVAQY5gZDia1x5sXqotfF4Cs3E4ZKEqGAQdrgp1QwPHr26MaYMYmgjkqEV9T3h2aK89Cta",
  "key14": "29AuD9DP5qPDvJa7imp9dsP4i2Z4cwXwKjJg7pdDQ5tjmBbpGVJNHV7yTcZxpuVySC9M7eZv4MVwa7XHggVxUUny",
  "key15": "2tpTDTCSf5o7ngBYHWe932bUza59kc8rinbVqv8ppikHFBZSQg3XgK8d7RD4pjdD58YVS9sbwseRsheFzD5JvRLv",
  "key16": "3uviqVvDY13VTyWHuoRj58Q86iKfpvj3cgRUb5puQQLjhNhxs6aFjnMRLxpPRQhzNLBgx7xdCMSe27FzVtSHzy5s",
  "key17": "4j8dBQJq2FoQ9BtZX7ngZARfv3rMMHFygQqLWw27uFEkqcM4T8Qsu7MJoHVUFh6CgzVNFarQmWcLnnmQKiqogWZg",
  "key18": "3492GA726jQXJ8nF3cX5LCfyQwxNU5RCzhBSVibxPMoLbVLfHDz3cmPCvtyZfYS6MEFcc3cyCqGLcPzU8rLqh2YP",
  "key19": "Jf9AM6QRaqBy1CGnHja9Cow45qmVbSzf3G4FcD15dAnUWujyVY4yv2RzvpaJnBKZtQcBzCAXfV129pVvtSHcHjH",
  "key20": "5tuwicgNS2kHhZ5ksYSjJ7bdYV3PveDWEApX5ck6NWBDtaz3BM1icK1ZHMwbkVQioQQavZ9nwniUdUKcvrfEjJvy",
  "key21": "4Z8XiLuFtfYUaeQAHuYBRZZCjuy7ELBeFD7VwaigfVsypsv7Nvk5QexXqvHjvmh2zFmJ36nAGTtbCptkUzM2c4mX",
  "key22": "24PbcKzwYfbnxWEiw58KGNsKzKFPQJ8VuneJLg7CuATHycdBxACTHs1pDkSJMWxLPTkQrSHGLpgVJGQ3UjgjyFT6",
  "key23": "5qzhfbwcRTh4XF5uQ3t4h4FMPwYDUiFEJmuw7uL8kCNn9C7Vd5xrmKB17pcYiNFrEkmdEt86bcFEPvWQQPpGSXSe",
  "key24": "21YAXPT3ni48sPe33mKmgZFS9QRG3r8qS6nmC7jVhF6GbzrttMfS5oBd4wbfVRjUgf3N8ogquWLXje1jm7hXSP2Q",
  "key25": "xG2zDjg4jGfni2b96aZ6ML58y4ouM6M4JeJAP2FoEHJb2KYy7FWbVw8DHGD3fpDZs3QbwZErbfyApK2h7Hr382J",
  "key26": "2odniJAzCQSfd2E3t6TfhyNQm5Fk3QgZMUaT3PeShJwJjpMhKvDh3kTNud6kabFxpiE74CHvuDHXKfNPWGcbc8aJ",
  "key27": "4C5w4RPz3nbDLgpDtVAjkqFefDC3q9XWWZMHZR6PL3bwr7KCGbP778tQLBosfGQ998QVY91wEjgdGHN8s2CDWkpD",
  "key28": "33ZfmVgUvRXo79QSrTgFmsj1meGg9dmf89Yncinz1Ma7W8A2ymdFawaMeREAcZM66Ls2h8RLPWd1zrBaUy5VJY7e",
  "key29": "2pfkGhY72tp7HYaxz5DKoUAspMC5b4PHxTAL9Lqt5a94tF54B1EZAx4jb2j4YoruWMiaomEuR6FAYVMohWsEbhVq",
  "key30": "4N4Y3NjkKfDDe8cBW6ZXgogneNq9G2aiiBjMWXrzVvXizxRDgsT2x15TP3SkfKP4PVgmRzzYRuYZJvvvXs7gr5V7",
  "key31": "4bzZJuw2KuULVod4YEoRV5Ln7CFwARdRgFAie4PoATyJ9HApkXT3W5WhuYk2bjGsAFveyJkAKgTuGF3S1rrNaRGv",
  "key32": "2RjSFAAEkz2PYVrKY15Hno1U7mnJWDCS3LMVw2dnF8EnJW6cfSUjkv5DpJXTXzEHWHaMCueEHFm2PCjv85CPRFyG",
  "key33": "4ruV5gMUokLhPnJJhcZf21QmfuL6vausfpXf2L3n5NNHQo3PdsNKwf19RMSwuNSLc43djq9DHykJaJnY5FaEwxjA",
  "key34": "2AV7X2QNEYLJybFp2QCzFu6QTGziuS29jBcQdXFQFRwmopnj2LGj6YjibrW4MvN52aRzbNAFXwN4zyipa2rq4nBm",
  "key35": "Ef9CuLQAGJ1JJLs4BpkkEA4L4FZBuDZ3r1itvdpesNNjRHPqjTJC3PMLTbQKsf6NnYdMirFw77zHn8QZVwwd6y2",
  "key36": "4ze26eT1xHE37ktXXkmxr4UfMUeSwFbRRVuKVGNecpMdCequ3eceGNvgD3MLcDzoBmxrz26DH9rXFooz8eUHKHVN",
  "key37": "5TSWG1TKELENgVDXv1GHjQMBMEhERihAeE9ppW1XBk3CUBP4UTwow4peg3Lyfn4eEyqUaNQxbkjgcVRnihixx3Kz",
  "key38": "AjyBMdRa6TV4t1ELviJtz1HymbPGy7AJNQmb29Mc3vvy7eZjjdBzyeCfgwFqz5dmjJyHR22GSPYQsj3vpH5dwVA",
  "key39": "4ePAuGzif7iFuaKD3HBMmramUVMVJB4zPvBRSnMKL7J2qYpk1jKaxopwhFfU6hovPq2RxxAuPgLTXLzYbTJeEFdv",
  "key40": "5kwAatGj4eF91ZjNTihhpHMYVCr956xcpm2iEN1ojNKXGRE7zrCoXxFsNAmY12MyaMdwfNBrtqEEyuEFSTYxj3oW",
  "key41": "5aS1QtKrRfX2sjZJFgGHNsaRZeysDf1gYQJn6jwZoVpLX73hGPvCbUcFZQeEhauF7Kw5MEd6tfzexAyCBUuxuJ4u",
  "key42": "jEs5522J4dau3Kbq1NZyhon8DohUtq8Z2nwAd5fdS5HJp84mVJzeaXEqkKzNkqSMZm58UKj7WLRxoF4cfBmWRYn",
  "key43": "5giE77uyk9NAE2vPWEu9HMo3yvUEUv6kmxHRvJPJKULeyDea2BR9YLw12Zm5UAFe7cSnBVMySRMo9EKuMdg39pJ2",
  "key44": "39pvPvmzL9Bmx5kn2Cuhm289mbE7gKUGsFoEzhXWiQSfduv9Wb2Kwc4B9FUrFY4E3cmjEDkG1w8VtZ2T6KacoBoX",
  "key45": "32tcS8YkCDWq2PWVY3xHSXVLChThFMGiJE6fsh3wJ5k7ZUesBr8ng5TBbXiBeuQEdFFnsGKNMd6qQxDZmggsxDiJ",
  "key46": "2QH7a3HZRsK54RgY2UscR1rWLg5S3tZr9hYXFfWe8WY2Rhp7Xw9xnWYgChrKPYxmoUnG7dgmnshX4unwCaa3vz9U"
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
