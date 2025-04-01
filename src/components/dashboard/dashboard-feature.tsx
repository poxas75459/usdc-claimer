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
    "3JrHjaV65fCHE4tw8eC6uyRQUxSFGQxvEabxxpVwxMi4RZpFi3d38WNDYuGPNXmFgkvzGkgW6zE7kQwD93x2smpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SNRWyuhBx1iGpogJx4PcZbxSchnBFpz6rWjM6UtW1zciFTdqp4RN4x1b5sPRxEATZuPjhSTtjU8uKZWCeRoFSn",
  "key1": "32acEhTvBpZ3dBRCq1iK2xmjNjfh6XnrpW97cvuKhzbDa9D7SkjR9ioHmTXDghb6rijF6MnM1zunnDoaGPbHQjCP",
  "key2": "41XzBxDVapmpMGXMSMdsvm15poQRt2nGBKpZK7G6iGzJjETuuScmNDeZENjbsHvQtPiCNw3Qofdiijev3DBPXsWg",
  "key3": "3jriyqbKExGgbHuGVSQjQptQ13LPCB5KABWg4nwY8RbjR9ogUA1fRukYuZj9GhsuK6zXJfgAwNqEWePsqmmG3awS",
  "key4": "4PQEDY2N1RbvLxFJkPnvkDAUstCcwgwin6TJvoj8XrpxjsQt86bi5AuN3xNDuyrRVoQTh45y6j5yARHH581i7k9A",
  "key5": "PoGmYnC5wH4wLM88T7QZRZ1zNzMi62vJJ6Zd8XHkHyQmXctJfxJJtbjPkQvEytL2zpVQAmkH5X4siqWivNb2K2x",
  "key6": "4jSUUqmw1ZNJTc9WxJJYs3vGTr5Wh57R5bLtKRWPjKqp7qKnYDSqSZQamrJ6eVWPcQf7ximgtRAfq9UWxxhYysdo",
  "key7": "4r93cnK6naGLJZR286uvXsUVYFn5nwsnPKyfQnZsiedT1ARwghwFwvcvndWP9LiJY7ArKTAU4h5ZdDvM1YmpGTtf",
  "key8": "25hzRQrnsGZ5Y2usoyamd22V3KgSMDoKLreQrDd4Bm8zeMziLG3ZBSeE9cungGspaM8Xn7dFCof3eAVEoGGozJQ9",
  "key9": "22smZzGPupFjSV2pkPxum4yVLvgSfVjCWAPgGPHiVu4yKrdHxvaeAYd3dNjjRYqyZByHv5fKxUxuG2c7Ta6Gcquc",
  "key10": "LWbV1Y3MguNkvayAqTNEb7cMDEPzfwP8EJu2c9Wy1rLmVxno7YS5jCzz7rVP8R4DozCwUQXAQePUFT19JKTp6VD",
  "key11": "4mxJXtKzcn218jEPt7BpUwDeemKp7rvzbc57tYTb4He4nEQpgcvYWcZbxJ1U8ajMZ7L29zzpoj2dnhUSKTT7uh6P",
  "key12": "d8zTYwSNhhgzBi9sdoGGWkuL9SNKdKVb2A6SKDnYvypsyDm69FVHWh9Sg5fbCC2zEHGUhsnYEFFW7Ldx2DkcT36",
  "key13": "4zSxCdDQNVw6qEcQyTmvwi2TTy6KcaJ2JsdPgHQeQPKpMbZ7YbQTiCT7VKKwdWNXMtn4tQHxTxgSGzRvhtTYfL1G",
  "key14": "661ABvmfRcAzSGpAgRNSrydHcQATLbFfTFuyFJKG8vZQUVmK1T3KSFvnLDnDJJv6iJ9ktEgaJ5KZg4yssUtvUDRL",
  "key15": "4X1WuAeWx1ADbPKdTad1srdCFeqFEASrrCLUqU9cwpVnydpvAikC7qeBS2tGgmkZJAZNhTtbGU4r3agGFf652fWc",
  "key16": "291otZzB8w1suUXiFDkdGJFoLwWBzQj9HAQPahk8QH1MGRLdB5S3Ftn6z9gizWo2BWkNE8FVbCD6CAjX6Wpa5ukh",
  "key17": "3XLzVYN5HsR7JWpiaUpazMthC1j3RnbxEG2c35K63FTfGnNqj1kHgT2rceaxRqCYPREWThwpmKVHh8xJiz5obn98",
  "key18": "2X2uw172ASj4AKmUTv5Gj7A7ngmQ7BAhcE8bBH24D8XsKM5J5L1r8r9CzmxwDwTwEhQa8hfHVPrJMPzKwiPLJPVq",
  "key19": "522hT5jvYasJMESYu6Aa6tZ2e2WxxvryiNybSJ1pNhttUTxtasBKCTfYRHY5i3GoS4QE9Pqu8YewewGggQ3j3qQF",
  "key20": "35E35v3XyMfHV8mcSUSKwWUX64fieqkBDonTSPNb4k8eGDuQULN98gfuS79gdSQTByRmsuMJ9JXVMBiBSQbTs2u3",
  "key21": "5LMUM2wfTyhC3QiWQaq3nnHNyv6Fo3kfWDGSHXfondhiuoZh6nf56KDJdxiJMpppKpS5KAPEGH52xgZ98Vey46b2",
  "key22": "3s7A1UwWPbSK6ydSVFTB3WeC1fXTHc8qXcRRqEDnUzmgSUVEFHygmhLW6Kgh365ZfognPvuLCWyeD3hf7n7j5621",
  "key23": "23n8x5Vh4hGFFwk7KSCy7SJEMxwgbc4UqHhfAkxVgJUf75V3XM1cwcyAE9hcoCSZ7Epp6GdyJyZRHQSUA4y5VSTV",
  "key24": "38mHv2J2whJXs3xsautHoqYV1LGiFbMbRv4SNY5uNmKrf25pVYHnZZwP9p4ZN86E6BuuS79sFMUsTCMoPta3P8bx",
  "key25": "5s1sey8DJGA5U61ztKiqmKN6uCxEx1AC4pqAdHoqRZe5HtjV3g2Fj9zVFutVP5vdozPfvGzPfoSvGC4mojZv2C4v",
  "key26": "2c8q87LUfgdFFMn9KUtsMMw6Af65vayRzLV5cALG7bBXWKvPxXJqkw9QKEWw7xFVAZZWnGtKoHqsg6nG31scLJNe",
  "key27": "5Erja4jZ3uHqBUdtKgR8dfrKKyKCoeJFFcGGmG1JVQVGqWEDVptmRv8Ypnv8bjkMPrPcvHE9GEmgMT4ribuMz3cZ",
  "key28": "7hoSwT6MUG221mR4LgYZn5rwW6jGeABhppmfWnkLvgbhTgDqR9FG3XhZE196dPUb5Z8qzkr983TCW5548CQbjGp",
  "key29": "5DNuZLdFWM3aZEM61fbcm1vEQgNMVbzuPxQdGQAgy8FhHEskDuDVqXe3aqGZ329iHwn3Vao7YJefCmFn9bZgQHDw",
  "key30": "226MexjZX2aAKqHQ69wnrmVsxcitg2c1zEdJhJBjqkV1ePeEKiKvK99YV8oBw7YHq54g9whATiAH8iZKW1trm2hE",
  "key31": "4D6YX2q6k5pteVBwuga7b5UFFo4YwPFA7o5dWM8YD7jVm9DhdYUho9BJb5HcKQECCutcsSa4MKdkD7Uix6aodduv",
  "key32": "5fjC872hnHciWdLwQy5MuG78kCP4ih14qUQcy9Nf4q4njpFkBxxKT56fCR4STs48y3L6wBj7Gx6Tkj9vhbacuKBT",
  "key33": "8DDnecbqBVPv26pudQTQoWqiEMwhayzjoGK6YZaQVWM9TbVp39AuYZwkoBb5z34vSHTwVeAxZviCgNSsDZEGQ4F",
  "key34": "5UvdTXTNGmpRi85LciEi9vbVWzQfFVCVFJfdRB8xAhjLucHwbsXiHtXz3SjpdDr2kfUpa6NiUkGwcBcfnjgsPYbn",
  "key35": "5U8G8ednzLhv5cgWCn8nAWkazhL8YiALtN45pNVLA1qCh7kGJAxnkM9eefGD4HxApvQMQhKWV9X2UfH1Kr7m6L6o",
  "key36": "2a9yctVHnPEydWJzDBWwRReetA9RdVQutTumwzQDi23r8BVL9E7SgoRLF5n1T9UaeAJdQu17ifpkUG3Yw5dfRuVe",
  "key37": "47zw8CTwy5quyiDkLhojN2HCMLT48JbaPTC8Qey1dX2MwFMYxYayu9HL64fSeWEhKcpcZr4tY89WGvykADty5AYf",
  "key38": "2B8nvTHYfAB8kG64kCEzTwmNj8aMnL7e2FxGNqUDKhC1HMxqe8chNqSt49Vo66pGVyCczJ9Xhm8RGNVqEJjLT1dT",
  "key39": "3VorwYc1sGvNgKmy4HzqEmcFcWteLYFexTxvNrAc5FQSNHP6caymrbtZx4NchVUHohENeK6SVi8n445b3xoKtDHf",
  "key40": "5vyoSLqcCPkt3veoRP1ygubetmCWzVVg2261qeAFozWm1pZgbnjFKPNnLMjGAJKUHWtKvushQKSxgAYBopokEPEB",
  "key41": "4DfeQ8VTLtmNXGusYJxfZ4vB4EXbs99MYNNn9WKhMicdkffwaYB5kCP6UWiCinNJDrLZbGKNQLTTmeomJdRWxrTB",
  "key42": "675K1Miq3YQQVf6nCH5vA5JxmgLQy67yWGNuVJ1k6Y4xrMMgF3zuX4czpzp4vEMR2ckRnUifgbRLLcAvGtzEbZQT",
  "key43": "5GMGKFohsk6yTfvZTCpyp4UNtCrD18t4ZatWDLNTq3gA9q9aFgTkBpFbba4rnD95bvEDCPjVTipFsqGb1dcPPuXg",
  "key44": "5Wi8hWY2b9QrPGpeDk1dcdZJd4EV73qqrn22wtvutSvReDLV1AQqj47Uc5U1m9Fc2XhBHFh56o5mczqhejfUUvak"
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
