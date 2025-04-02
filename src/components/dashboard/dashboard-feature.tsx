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
    "oVYdJvAqAiE4kx8rhXZXdo7r8CUACjgY5qCYPmtgTsLVCrUAAFVCooDSNVsd1izqzZ9ipt8vKiLMSSy78waA94L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEvdqMxZwVjqTYfkWmFQHwNmQcUdBXWvMEHapMfsSwKuBM7dybDUFXYKQLahMhPsFr5jPvEu2biunmd8Ezk3ehN",
  "key1": "5qkKz4BwM5yorrNxU3hwQcFr4FK1woUNUrwfAnpb1yQEKCge2A3WtYViRSCVbfbr756jLTVqLBouBQq7fSPiwB2j",
  "key2": "F1ESQLUniuwoEj5Ve1Y448XtP5mgRiAjhaGkDpgAEqyLn9p9w9NxhnpXHbEFg2UjpNVfmU8GvNYo1ujk1JJ9WNp",
  "key3": "4Q8LMixduLF539vguJw539sCnDLW7DGmkkqQnqzqmhpqM3fRkdjUQvVkedYTMGBAE2t8uX4WdAyZMfYUJzKofKfa",
  "key4": "Bj4CRbDREoVFZzRnGj68YAhzeTWitTDVGiVA1P1UautFQDQn6o1Ypxj3jUng5qhHjTgqEw4ost3UJ3iCF2GW9hU",
  "key5": "4PpjAwoBhN2uuXDAXYCNbWnnZaRgd22DsKkCTqboHqsKahZdJUiMT4wrxpm3v6qWTZVotP1empghHcaX5mhZT6PN",
  "key6": "2128f6wgF4hx3GJktBh7Br8BQzzVuL6j8NUjZjAqzoBnN27rLTHWXayvJYGdFjwbTrfJJ8hVtpgF37PDt4kRWUby",
  "key7": "5ruobaWksKZnF4xboz4UGKNhFrX1qjFoRwXxfiXpnxtj8yXCAMZa88RBwVvBhByowLwu4bGxy642aXUhWfEbidSy",
  "key8": "5Lu6KAb7H3pxS7Y3eFfhytohaXzaRPR7tK9L4VUiKYVMHXvxdGA2sBxY7WnsYs6HQpm1h5MLhhuBHn7jB2N6qfva",
  "key9": "C2dnYuBnrjxXeEiZYNV1GzQ1u2aBTgP8i4sp3852seCHdD6x74pZjRGebkHr6EnESEEURVjGBKk4Sd3CMrAyS6d",
  "key10": "4uAmmH5fRWtRxTGpnemSUjFMRnLJabCAsqRquBoecTou7e585eYyCYwLKrXr1Cty3KY42v2KsX3d4jZBG6EpjWqC",
  "key11": "5vp92FhzVtXhUJYYZuhKs97TEXP3MRv7iVDsTf12Btitz2rEPhEY75DgXbR5BtCSnAFCVegJK3jKjdNRBoiKSZni",
  "key12": "2pk6FEszf6UNmKbdZDUfVqNSPZozfR8FEupYpKBaUdMuyxgNJH9irhyeb1osWsjPkcnSCHnE4BEk3aRj7pHZgLrw",
  "key13": "3WebVz9eiFu3WvfdZtTBR5PuLK3yG5EVZk6mTFfY3hWvfg1bc8BkU6jSxBnaFL3K87JyyaAFThhdp1vDn7NurjYf",
  "key14": "4imAFY7mLs6NFjbjuFDU6S6TbXnhe8WaqcZfjCvKVhmj3eWdKsbbthVuxGRY5XebHnsvLyEfVHPeJKQ1vn2BfEbE",
  "key15": "4qkc2UE3Af9DPQmqyKnk9tQh7BcFa11YH43b6fD5gZWc9DZz5XMxaCShu9DJHkxt9HEJ822iw1x8eEbZSXmwjig5",
  "key16": "2zjwkznZgPX8F8pAncnLCw6YsiJ6yBiWtSD3A4Uymc4xMEfQbym7o3FNXZmm5UYWnReRaz5KLe1r5NjKZRrhF2Xy",
  "key17": "ibcGjYyNPN9N2TckoMiYSaKiExAdNc88BH8UzxT846wUxqPCFm9oJK9w6KtGejRmrFBFV62bRCEzroe7ufczxwp",
  "key18": "4xdYxwyxR36ebWV5JT6kirSKJ2M81wVRVcASV4AEtStH5wR96PyqdMeDhHX8mKygRvJF2x7o6Tsx6pkTrVdShyNA",
  "key19": "5GCYNtKr5kdFvhMaZxs1pytjGxxsyFQPEZkcTzWZnM3V1UMpH6Boo41x7MJw69yEvkECLds8PdiRbSATPjZ3WeDR",
  "key20": "3ojNKQnnbHKmZ7vnjqRaPaFBabLEBMWGcq9PkLz43scWSREpnZSCZ3gpa1uH15ZZyAjPLMWnreQJFTLXjjKhLfu",
  "key21": "2rdmSvw7AtXdpaU9gvAHNLPgAMdSRWKSVtjRgdZbCDVTLHcwyZb4tqACwoPyqoiVcayZnnfpTqpafMAgJd9Uavym",
  "key22": "4a1tCWSTsuf5uDurNgxGfQHAEGQ9t7PPpEL5H7c4WHAQGBnzdEYzimS8thasEBFSchbtzoSr9wnCXwaEkHDf8nXz",
  "key23": "4iyNKSrxrEhnDoZfLBe1GKavor9gxCjpace3jNWjA8QLMMyeGE4w3z13YydbZFahyJzJb4273M5EDvFj37GaTCEm",
  "key24": "5FQibmUqLTdWDb6WnhruVb81BQzvNVbt4qkQURHGV8PAZd8MgvLha8GJY9zNLynRdTc52i3ipafTrLHejECqcLgW",
  "key25": "3VSwyK1qNVc3waL9xsC6wby7FUb3DP62xPL2urnxg7ZmX3ZeLo9G9E28WFsEWcjVXcbr8uYHTNUyYTyMemS4TmGK",
  "key26": "j5bKoijLthF5JVvM3NKKMg7KKpZJ2Bam9gXQEZgyFf5EGjTUjBD6yzSGvXfPEURCx22pbVAJPVFnWmGiq3MFqqd",
  "key27": "LRy347gbuhwTbYmYJkzKDHVqqJxHbKbwYYdBPds9BqzXpasRJux4B1sBdsV9Spt4GbUN1P25B3t3iQHhRj4UEQa",
  "key28": "4HhyL6Srvb35bAntQuY3RsC8nmkQyvbrYe1qz5QBHsU7MMDRwNh9Xi4LzwisCpZJwF5SsNo3Yis4dUFKqVtZWiHq",
  "key29": "gMekeCnV9XiSWPvn6jti2XWJ7MutPp6AQWVJBhenw9XuLDxQ6Ydabe1tmuCRXrsKk2ivAjoFHhY45fXyKsiUFxj",
  "key30": "uwvYPomrSyEsUYn7yGQWwqQj3XWTDD8RyHPHZ7wPeLPGeTACXWeBEYY8HpEpDgoNkBXxabJieUbr1W7Shc3yHEi",
  "key31": "2yC9hfHDVVMyNG1WwHmJ7GsQWT83KnPCMZ3hQ59GnBrCnipE1oxUDmY72J7XDaQieU4NuthvwhtUEnibEPeaSHGW",
  "key32": "2PRhkagtftFVDPgGd7CpcbTANGhQtc3tFbryeTmi3hM8YXdKDL8i7iiNMa2gpJLUR2J4hhMD7TKyAf5oRhpnajnd",
  "key33": "4FJFtcMLDSzN3DaSfBV5WuRKpGAzp7kiRzQpaPRDX3bHuq4WCHNyUAasND4KtGWf2rWPU3bfdpKcaPErk9iAYr15",
  "key34": "yrZm69MvugR4thczCamvz7xngUahGzWH4FKLuBsTLWDebYiR7LduBBKJPzcGLbf7CznnxzHDX22ySSM5kB9kEst",
  "key35": "1QvSdN2J4cJX2d13BdFCN7JkZwfGM1GniHiBP6CZ88JViyHpAjGT8vgqZP6gHbZgrmwH4gkypuXA9vwC5L55C63",
  "key36": "2VQd5w8YHSNbJ8xJoK6ETrESF1yD5Mn4QkuXET8xCA7P2i21CT66oaos7xxXXvfgKUt3jy6CCKD9hTC3SCn6fJ1B",
  "key37": "2pyHmdVC97exFFaxr937GachuctE4PCH9e7X3Zhv3SHMn8htJuQCP6MPVbq6ZnNg42iA47WCnwcxfWygE7NsV8CX",
  "key38": "R8YJb9ifdfYWeC1RnfRDN4yGX3DGNdp1q7Y9cxW8qHG9VEB77UrShgTfY1bMpz1kZcPx1hZ2f8AFYkEfwGhCKKF",
  "key39": "ih1mwg2yXoQwKYj8e4v3rsT4xckh2yY8bGYGxYZq4nYNq64XhKCstwJV16FJegCTCgsu1QYqyq8eFsw5n1aHBds"
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
