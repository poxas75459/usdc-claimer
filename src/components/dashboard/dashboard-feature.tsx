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
    "N9ae9SZRw9nExXcARV12AUmWG36JU6YiEyB4FpZtLUL54eAKpNJPsobgQnrhsdHykafVYqaDChuwK6tBZawKXZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2Ca3yfPcWYYnd1enBkMsDWofGvagrbwvkNrW8h89bzJNATx2WJ9a9qk4BxrypxWKHubaiyiXs3dv2rPSzvwUE8",
  "key1": "4RCXvbQxuFHvA9FkcvjgUQw32BygsTuia9ab6ivYFXc6gwcKJmPXWubYwenmd7b2St3Cs9Gd7ottV2yRcwBMEck5",
  "key2": "3StkPiWPmYuSyTBQD2S1aPQBJUAFWE3g5newqfrkV4b9RJsAG91VhPwLrnhRZeHdt3YbUiG5JQHw7KrqTzcrzWrd",
  "key3": "2rQhUTGPc2crVB492anRHr4jNHZajfMRjmCVpDxKjxBYBjqfb9ytYUFjcmJP5WdesgiPk1kds4ay3yL8hP9gv6C5",
  "key4": "4Cd5u2UYGcacJte3JcCD4Nfh346dtoNfafgHEcP6vYBQQrvkQtLZaesz2zqM1en2cS5Yp41JGEc1YgEKfgPz8b6k",
  "key5": "25xZ6h4L5KhkaSJXTZ1iB3X4uLZh9BCSEERNcsCCaDhHuLXDw2XamUseHMk9VdsTVJ8cDA5TPHiTZ7bcLCCkugZc",
  "key6": "2wj73T3ispjxuY6A6ZRjF7efusC8eQ8qxpnrqkxEMFVxnAzA3f4EqcbeJgnUJHWNWR7GSVnF4enMMLKF6Hh1ujwK",
  "key7": "p8bJD25o3ACVTgAyVAuZXvkZT5FZnaZWf1ne1CzR9n9GDuAjmE8UZYdJmpL8DFJHUrX44xutNpezWgbNPKKttGR",
  "key8": "5ifAPH3pZ3FfzXCngSW3m4FDjTvLSpbyiCefM24usPLjSDPA1H4pJZ4yZ9BV9Pc677KQGZMW9t1ZffCnEkBJTm3R",
  "key9": "5o2bdwkxAqeDhP4UDB37ioV6zAE1vtycmsH9tcHDYJWCPWxvFY9LGQBxMx47oBfzUGQU4rnChJrizV17xqzs9Nqm",
  "key10": "Nhz5baMQaAtrgf79KNM1MeXpbE9dsA4N6WzBwp6gY5b4Ty495SHXQ4aonigxs6tzWxR5jVPynGExr2k7Vh66sHZ",
  "key11": "2mtWF7t9VqSgAqoJfxtxQaSM71U7EonwwLe7mbQJkS7n6uoyE6hXcJeT93zux6YRPFuzMa8mYaNM5A5VgjyoRA8k",
  "key12": "2dbV5rwzMNLb1LQfWkTLDxLB6nWMe8Xas7wdUophMVg9VRwQAkZA1F59XUpGteBJJuWX2B9VbPpSpKVCHKYybX2Y",
  "key13": "YHJQdQqx1fpUX7Sdw9nExjC4KP5v87PNsaEskaxAQpLJNg499XvwaK8W6hx6JC3y1nkTQBjD3cBhaaJt1cMEFKY",
  "key14": "3unF6tW2QyHSZM1SNQGSpz7D9VN59843nCaC54rUheAaPVRXax8ntKxsvemNUZCK5MsFQtieSW4R3tuYZSKmpsFC",
  "key15": "4JcXSXfyFkw7T3VYXa6xzCy459rCZN9BnCaZRrnom5i6WALw71DQyKr9Wo8Wsd9XKpUFbZGrW65Xa51oGvK3CTUE",
  "key16": "5dr6QaYsWC3mPmvUvg4rwzcZsbZ6j2M3MJREMaPSgdudsnjaSMBxV9K3j7WSMtq8SzkRQTXg8vyxr3a5TNqyd9B6",
  "key17": "EEMkBJ7SDN8KkULp7pTeqDADmQfGgEuBL5QkkdqkGxebT9CWjNXMrhdqUWsX3T7vGT5FAeXHwSHGVn9tvWPvjR6",
  "key18": "3WNVMdmHTtc7u5Fg8onTtfkizyEb8hj5mD5qiMPZQBgyekp94awKTbF3EUCJU4EKfQHYjM6ca9Vn2woDXhTJJwLM",
  "key19": "sBqmWn7oGTszHPG58T69bRSUuFVaYsY8RG45nLabHPVP6ZSVcj8oLs1G82E2MKeE9xZoKXsgWb4hDhX4odcn9yv",
  "key20": "5SqH7by485gFxdVatZDiybbBdDV1YxPq6aed5vnNA52HoXTE2LGPPq5XmeEfzSB8uya3Fm9HSBoeY3KDh7zYmq89",
  "key21": "2rCcyvMG1GT4zkLxAk8kyuVxDWTwBGbs2anSPZFkXJAq9FYwGnavB1BaaSEyVEwt82Sntuv9MZEmt3jqDzizzqqe",
  "key22": "4cCBonPsRPdTWgLBAPKf5YwtKHm9pMMVeRShF2d5jRrH4Bo2zW2SGz3aQYwNFTb4e8JaqWpEdVF76HHHRrzKZmML",
  "key23": "44WiK35YNB5bjRyE6EkN9zhseEKtuVpWXvvdNveBQ7NXc66s9XTKLhqWto9rsJ97FQsfHTEiByLnfAcogHZzheRU",
  "key24": "hDMUerVBNbWeoSiARsrcGVAdFvWCsW8gvh49rrgFSgSwYRTPCWXRExno12hFoTepRBe7JKNvRfaGvwETvXpdd9v",
  "key25": "1pB6HHMEDRjzhX9w2D47sTnYwnqs9BJoBLj2qSvfAiNeAoWKfEYvETjXe4k85UiEx7MN7sZRqJF9t3pLcpXKsA9",
  "key26": "3C91a5T8g8jT1gg6h5BxuQyf243WhuDHgGwvpK1PW3WKA63QoM7kxBaHwMN8Tw4KJC7KofjDHddssTUnMef7wJnY",
  "key27": "2mUhwmQhqrtfS7JC2KRakcuwjT3M6dFP44PGNurWTJjj2friJ1iAzx513FGRrRW46JtLPwW1pBbWvCfXvHbU2B4t",
  "key28": "3BfsqMAiBzWv7XJJMmt61dYaMd8SfMjsA38PTy6Q3PvCyFqJVEa4rdnuyRwu3ZHmA5mGyhYdaCDHJu3NPKxYUdNL",
  "key29": "5WEW4Eiki3sF3MPzeFm9mvoHdwPnLxcRowfRnGA9eG3rbDx383himxxroZRMjVjVnQB7X51yLykCtNTq2y5pTYxE",
  "key30": "42LmoPuf1yjoL8r67PNvAMA3az9zYRrzqpuivvR3z4tC7HE9jYVRCTLe3AWJ8ADW2UeZ95trqWthzTAXFYSCFbRy",
  "key31": "4KLDn2i3zcjD1BCXsyvmbnUqD6gfo4dFmoVL3q96ZSTMp6SgHJhS31PPDCu8q854iUDoSBaJ7mp16q3iEKVTnXUr",
  "key32": "3zm88gRnE7ZmKntCAy4sA8DLBYvjPPNJVT2fwcfVsQuw5UikKVR3ZpcK6ucdwsLm8wYW6rmDArqoHesD8uieVjie",
  "key33": "2AePYSENaMwh1u5KDSnjbo7PoevsFWmDxnaBJa25JyGsSqbZdopNy7SnWmProQDGRNc6puqeViTUGaK3jcJkTi5S",
  "key34": "587XUMQhjt3QhqtB6K7kqj2yx6S6FoYb9XjniRefZwFMKKcfzvNNzrwyvdGZYtU5GiVeUYftTNHeA5TeY8cyL3Km",
  "key35": "3DJ2RwiRCDpAZZ6nSMbrFPPKSDjsGKW7itYGapirqbkVgaBYpYiq8AmUXKqq1EotG43GXjntS2wc93gBYhYm48U2",
  "key36": "2mKgHvC8jJBfZeSayEcj1rmaiK1f9XEG3mc2p1BHWR9N4Zg6b8Cu4TToA16ktUBRAd2KKcJhvNeysMtnv5w5kY2y",
  "key37": "2v9U4SUAr3mipC5wJn2usS5vneQNU1N6P6ycTPyoVnpAcTmZ7eowH3z4MB7jkf1Jg3sqUxFM5CzWziLgrGjZsKD5",
  "key38": "5jbN2eETMFPJEwbGozbfHmE4nhJdPnFERZgaGfYfaVLW7gMVodSXvJqgoikdZoCH9ccCA4mqo7T1JN3HiSCgALtQ",
  "key39": "2upHVeBikwMbq36VjFkfAJek22Wt2wBmUMmtPeMVioesFM8FXZj2qHt4fVBFxzjkPzpd1vx6uZGwgMRDWccz6s5E",
  "key40": "37katymQEgaxnvdC4xZPkFusPLuuzTRUPKdcQnRxZg5Z2aUcfmLBVwRWP8BJ8dnPjHRFrgtPJ11Hwj8x8zzxvmrk",
  "key41": "2xfMqqWU5Gt5wANUhqpNJvZwdvZaYGJysu5b9bvyBDg3Rx1yuvKXzSjd4JfLVJzYGh1CuY35Ci8fBH1LgAqCxbJB"
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
