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
    "2WB3eanQK34ibrwRnGmaU7ZXFQnDacwYyAJtcRn1G4TEMgisMQJ9WmHKpJoWXiuNN9YVRMZ7cX3gqerrqaY2RDM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AfwvnbY7Vf3vHzDxKGPVUK2Brx7hxHi2KUcDbRdfsv24jLzn9yXcd5nYsYFajtX6UHtDY6NSGp6ospfs7p9ZLc6",
  "key1": "3zKybeaP4MZCViPQ39XHfLaTojdbzoPyPipaPmTwpSuHJ2eD1o9BnXkc9hcCzeWE6ZaPHZuG7wiYHaNbrYo3Ld3z",
  "key2": "3QcLkXG6yv7U2a9hrXdXS3TbTuRofTofmAZoKzt79BpVH9z82uJq7vrgxCeqHBK6DTfWLgCpZYFcMaEP4W7JXPeA",
  "key3": "3b8Q3cgf1bZrSy4VLXpFo2axEGHfYDX8V5oZWvbEFSraCQvVZGFrQooFQr6aRgVuvg5ZGad89b9Zs2TEHXXQBLSx",
  "key4": "23hBPo5BJdUtxz1Wb1rfJSuRZy5qKJ8zK7BFS8MeseWDuQPi7b1K3oYuXC2jd8GoHZKJghXrzjau9zXvtZeHy55i",
  "key5": "3F6d9BG86TbtLiLkoFJNhqHTbFGrMUEwS32aooAKWUwMv3GCk66taz1wAaThUyCFioPQdc9FMcBPV5fFfE9s3kdi",
  "key6": "4n8juMEAtiWr17ypRFQfQ7NPjhAzvogqmfR8gfScCho2zmdtoBvxtpYSqRv5kR4zMTrbu5t6km91RFhAFnyfRhq",
  "key7": "D21jAFniiv45njwtGkr6xdx4CwtQ73HKoyrzodF4JaAfWZXSs5kstX7NPDVoTyMZL4CCSn4TZ5mhz3a8WzrssGn",
  "key8": "4NpsKAxg34oLjHU2D2rX88r2y4G6Wur519BHymR6CaTtxVE2Pg3iNovcPhXL1oDgC1MJ4bb9Yc53PddZtZ9w3Nqx",
  "key9": "2PpnUvFk6Jnxfv2M4FmUAifQt1f79wLnUJMRPpQdGdrWbB1tzuWatDNb3WDnBLxucKZEAcrUM27srMXo8HqMCuBw",
  "key10": "5eR3mJS1CXFjeyWDEVnHFQqSndjyv1BVKJREaSgzoCrnbJH9v1pYcfWXWzkxQL3xyqS3SWEiuNT1Uah5F4aHSnuF",
  "key11": "64FunNWC7f3BvcnyLFVHsuJu5VgDB4s3hNt6KC6RM9b6tETq8De9UrAtZcqLNEjEmYNT1mREgHgqUVZWgmXascf7",
  "key12": "5Awuy6KbbRKudqybwBRkKxEoTaDhTyE7Kc7vuYJ5YKMdNVXkyh3TBEzMEXHZYZZn7DyFcd5Pg66y3xAzUEHwtajW",
  "key13": "2P5M1pJdpGXZbbCxw35HDJ6p6arzzPZSrLUzFbheectnVXLfpZZjpg426ZZgRa1Bao4QKANQEo57PJzik5FLmLYd",
  "key14": "2k2R42pQrUB52M76673iu75NhTJnZ6FWRYmmY6hM6PrHkXGNe1PN95sGLctxhcx9GrEyfjMLzAPLQyqq16Kmj5SG",
  "key15": "Gopxujwt1qkQDfgmWT6rUVRcd1dTHAFSE9ySXcBcbaGZDuGfmPDAb2ZrC7ifjTGtA7EW7dATAgJusTKEyqbCVHe",
  "key16": "3asPpXyskB7X9BVjqirncNDFh2K9HY8yNMpJQu2HUnQNEBPuqVg1fYMBd5Dv2UY1jZYXUbXUWn3AjshdtCJtRFLz",
  "key17": "3hiMFjuDuAx4HqMKhuEtXeFyZgnCT3ZjYa5nFHxMmpkvqKAqMBMqr5kXM12tgHnFB9s8ZnH87T5X8Msd4WHFa3ih",
  "key18": "b5J5mrYupjzJdgEQdjywg7F7sXGGujdbXGW4tQyoNpgeK6W5LgTFCRGkZEenzdAitbQmu72bjaHRTSyXHAAYZjL",
  "key19": "5Sc1EyeyFq9vBQqQLfghUvmpZoHF8WZXc9s9ZRZhU9CevmTjMQXmi3LzZjTqJFhwszBUkTmaoNGKWPm2smZZuhoU",
  "key20": "25h6FPjZeLVWJ9GBtnCQK7J8NJNsDREtD7iiS7k4wpWiUEFc87RG1qXSyfVwcfpRhmFEiAFcMZyr7Wcd9JjpSmrC",
  "key21": "4xNY3F5dLmfj7AJixT2UgoC6pugX85fqYJY2VrvAxT941UFSr4BVGMsFLPe6CzJMZtEFAEpTRTa3Z4fL2n1ysZfi",
  "key22": "3HPvzvfWozT7tNSxVbv8YzryaAJNvQxxTmWapVvxWQ4yVsFA8jMTBCXQ1bgsuPSxwEn879ifjVyv6D4M53d6h2Ht",
  "key23": "5jgzwMamCSy1udHGwTn8ihgY1VNkHNfaMmh3QnSuLhSmVvDw9hk6n2PbG3SFbQgfejFieowuYrjQ7sxLLBmvHwe5",
  "key24": "ZcVbLMe1u2Fbv3n8Az5bkmkgUkfax1bRzwYK5gYdDerunCcpJs9Jd1zdypd2gTbePCGztVEE1GUZtWxWzrQpgas",
  "key25": "kJjjT3QNtt8asaUo3tQsfc6miHvCxi9x2a5Chmh26mq38xA3wrzaHqifdGNGfDQdannpj9wRGzXXepHWkXT7inX",
  "key26": "4jXyqstSHcuteiVDkZzZwqQfM3o1XDxqBrtqmBbPZ5HLSB6YybkSVCfp6tGpdusikeYPwJQeH9NznL3K1QC4K3U1",
  "key27": "5pLJyECaVHTXrvyziznJMyokoxXFg1VtyzmNh6EfXsPfZY2qzejuMPAKBxVqn3sVxtrYvDXSFoegTcYyTdfzGGXp",
  "key28": "2Q5R8suEAMe1QcivocnEfQXwQzpVVbBEXUVEy37WesHqYWQ9pefcPnomUgUrztxAMyaj7h4D2WZM1FuPzuKNqn8P",
  "key29": "5DqBVK42TgQYDrzbGB9WjDSA2PwRCEpHdYTViTnhJ4jjdEGPWi2YrQtCC2zdw2w8fV4FyBP6nHrr3MXJ54Q1HvMQ",
  "key30": "2y1bb8kUq3BdTnBiUUJJ7jwch7u8R1wYYSStokcueyGSiebJgQuu8B9fMWW9LtRP19e7TpSH1mAgBPa5HRkHg5br",
  "key31": "3D39sdLG6FtZUrxqJebFm2zbwJisokvrajpCtG6zBFmETw1zWKfz6bzi2vgNwdpJBHYzRZEfZc4vKdLDXqmv4i3i",
  "key32": "3uJGFGMDtBDaTmeB4kj9J2uTPuvxF9P6gpXJWonjoXQWxpn6a1mT6vy7PkaBn4LW4wNcd7GXoHp2U3i2qmcJ7tdG"
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
