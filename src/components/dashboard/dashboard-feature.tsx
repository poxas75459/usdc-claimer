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
    "58JaAwgoduphAcdw6LuMkfvvRsuvuxF4BKdpZ4mnHLjevNHbCMffzb6YubL3QfMrXRBgm34VWUES4VjpsWU9tjpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFVwau3ReAfFYfKuHbj2rym446TKd1A49NprgiFfWHGGQYT4vm3JvSDboeXcaYfxQkFqBpyT8Des3YsyDj4JFrR",
  "key1": "4LNnrtYQzPNbc4x149WtbzR9fTXmZ5QKqvFj4kppapy75DfYZmDghxgVodUM2wifmFefUHHLwJwbz5n9drkNSerN",
  "key2": "3iJkogqzeJT1q6v1zoXp6hbEiu2p3E9G1uPfCFBJntdoTA8qjvsQCcWvCsAanFsqH6ThipG9rqTKE1FSANF7JE4R",
  "key3": "3azbNx1kYWKUpwaMWRHkxmdPYtQ6ah9MM3qpUeDxJk7VJerUuw1T3cT9L47YyffgMER1iGbrec4hFs2SZEk4rBP1",
  "key4": "4qVVaLxk894R59J26UhmqxR8JQLnB2DhFWyuZj5cutzLqRSc29yYiELfk56wF2S4mTACG4tsyjSQ7c9S4JwKZKdT",
  "key5": "67qYoCpSe1qVmdwM2VPbWKuF8xiHyVKEDjcGcoS89i7sD6tQqGy9AjDksBwwT8csTZK9o3EJ3bYuCNqkQsoRbEne",
  "key6": "4MyxD2BSEaUiPiypyCRXaRvd9z2ZXKsxTdHJ1s9zVjqYFg7JKGhL8T3T24uTQKo7pfU26iF18BrQbgNcemKoWdca",
  "key7": "21encoM67a7gXgCvaeHVQLtVXJ8rCuk66M823bDVZVGWbhpsC9kRTzCrHHWeiL4u8W6BAjNMo8mg6soMvz7gfE33",
  "key8": "2Wmo6f8ob4WzGNy5bGoTmKXhLmX9gEXwe1HjMStotqHWutU1uUsnpc7HFxhEy7JfeA82tc4HMe22eZj8LbxCztFq",
  "key9": "5MeK7R4YCXDb1ZStEMEuQST2b1gK6T1NZY72mhUxvNruPP1smbRJ1Bp8Gf15fc2TEWubc2aRpHyVpWfMhdREfccW",
  "key10": "2iTb6Qr1CVLqaKhqJqTBREGC6ZKvFGAftvjgn8eS3zAYwyiMWV8KiQunas476XhxL7pRH8EpE4DdvUxRuG2g4Y2c",
  "key11": "48jxKipzPjNw2NPRqdX4pfwpZ28DzVcRGySwh3haTRg2N6AwBGD156bNJKS4WY1vzpqU5JVjhMG6u7NuWHbwxsME",
  "key12": "4XqrL1DC5988Qgv27uya7xjJT9dsNLLJRZmH5z49RaiUztpP5ksfRLgbWfk8EPygfYeunJU2sb9Uo6ZAmMHRrjiD",
  "key13": "3V8ktpmQbJQJZxuiFXW9NLByukP7tnmM8n95hYtkKrMvrRembcfo27aDAYR9ACVWTfLn9TffnwKk6bkWezLtjMqz",
  "key14": "2YJSaeGBPqfYpDd3dqcK1bjTBMtUtLmi4RVtR8vsGvbsrBtdxZHwAT8ZM5F5yxNNRiv7eo8tT5dHPUSPtHVxeEKj",
  "key15": "3pnJgYUfBELU11EjLGZ6QSKRqNbunMV4osNnPH2jiqHQkX66CdWySFVLuthgCzEGqkQNH5HUfYsXasVBTTN11Miy",
  "key16": "3hncT3czVeZArZYR4XJGUAAQ4iFF1kLf4C8bjurVj3jZcfUE1tf1BQ87kMZkjADWpXeQrigr29RK5GexwcUDGvGt",
  "key17": "hCLd3b2yxNgH3Wi8hdgtSpwfubNjyG46j5hQ7mmAeVTpxwXKYK8FvaGQVUhWNdbAzYR8PrdhS7MeW72mSyR2ddq",
  "key18": "2EWUieArzPzfsmevfogeTXSFwEvvkjR4CGN1bqtfbLG2PNsxffUcTYK9PiNUj9PwFQ21xVcrgJuCiSgmd9qvJiYm",
  "key19": "4xDgW8sncpc9u1FiHdC2C9ofYyyoEzzvqqKpAzTnTF7KKQbCceeHUjvSuYHTPtiiYUkKz39WX9qeXKv8G9EBUjVW",
  "key20": "55gfKpxsgtpv3GHXTFpHkjQXcgT7fM4ParpS7ygxuHmfimgySwf8kds3v4m7AYFTXCY7QpcAPzsB3tj4DKodFEzZ",
  "key21": "2fMFMdrjX9RACkL4T3kNqf25xzk44op29uwPuLswsFQpTuSjjdGwQ6MBPmP8beRpEW8YsvDm8FviudvKQEcosiri",
  "key22": "44d24xhhdjChwDY2MhWpLTbzBDa7stvQDJkgScXtHp4GgNAKoQ4zj6NvdHee42uGcXmpUxe95wC5LH8dzNsoC5j6",
  "key23": "ASxee66jnaVLkjUFsJZGZwhxyJcQR7P3j9HcMZFqguroBXNGSmZ4DNhu8thbz4gT8J3sLMxqD6d41ix3kZHVqu6",
  "key24": "36UywDadtoN8VivDMq2zfB8P3K8KKgYc6Ao4rga27QXossjHp2NNNes7PQBGBnEdG4NKbD1GHs8WkCki5wigCaMf",
  "key25": "2CyTnniWckjdtYALMR5jGvbGLfkKab2KRURf2Mzuw5UF7WrGUREP1pCZ9Yy64476Rxya6zhG54pePorMnZnMAxsy",
  "key26": "334vsBAYHZ5QjCZzkYrqDFY3Tz81qMztma7LPVSDFThun5BshkytsSM9SUZ2FEmVXssRfuXG9i576kChJpo3Qn7X",
  "key27": "4cd3hCUBPESyXvFHfdDTeY1VJxPxqf89j1wgJ56hsNsQL39ojSsvL6dar9rhLJV3xFVaiAADnCbLRa3HqhZHtNmV",
  "key28": "aUE8s35pAEa8A15mSrFEMrdbP3TBkAHbomCrF494seGUaw3jSPUFsX8FKwsANwgB2M564bGMf1gm3EXxy2zhyXp",
  "key29": "5duopYgWJikHGzpnDa15oh6r7KF6HEMwxdcw3fVPtz8m57G9tb53PicGWSYGNdgwFcU2buNWwSKMcHhqXwzAhP9B",
  "key30": "5A5xDyogLajAuynWmat2Gp6G73s8qQyrWWS86sLqkb5hhYRpFgz67oHkUNvv6EFZZ3XZG8tXxo8tqvVVZCKpZCdX",
  "key31": "2JrkmsYpGmEqhYc1PqWPtQ2MYStZpsbaCufKwQcq342xzNKFFpSoUww63WJEon66L6RLFa4mfPwCoCgucMWZwgqj",
  "key32": "5nyJwjTkAW9NQaTMMb4dkj6tB7gemnDVgwwHsKwrQuTdgj15N2fQfkpjxEi6qYRiHsmKMrXBTa3KWCThcY5tHSeT",
  "key33": "5yAYH9gnt8jFcLwr9eQf8qWfG3Ao4vnrCJU8Z9xPhMsaZ4jfNErKLdAkFW1qxGTXYfj8uEvCYht5q2VEfgeSmfFa",
  "key34": "p6TkV7EAeCw3AvPqJzt3U9FRcX83kEn3kfDRtHbFgdJURBLaMCcroAcmuzkNpEvMuWPCRFKaw96wE1RdMcBTizo"
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
