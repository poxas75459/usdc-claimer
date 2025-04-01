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
    "3JYUvUwKqVbuP4bDJWBrAhCoGV4VG9XuDFGzLiftRCHRpsJh3GGnVJEsCsXSR1UE8x3zqHNTSFyHBjowWjJY8biH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t48TBwGdwnK9y8GqgVvypUVorHtXCrkYh5B3mZ1Dpq9mxx2GEqGGUDsuNnQWvv7veygMmGiUF82w3oKiux6zq8a",
  "key1": "2kvpUyT2PFSnTRb4ayHLZQVypHcv5FDe2b4Ke8rkEgexiZsynRUPCGwj5Tm1qXLZwJPt6P6kNstCKGmmLzcDutkM",
  "key2": "5Cfbja3C2Bz9UmNxGPmomeYK1fudEVgvQtGee1emAAe56i1NuKjV1gPXzFu5sAfcLdu5RChL38Kph6rWUZ32Y84Z",
  "key3": "3W6piygzgt5MrBhMXaPSwg8e2qomHsMzARR3mbLYpkrV5ewghvKK1xdDu7HTiCRAdofHEizpVBAffofMQbBtRJsj",
  "key4": "2eqepHUHkRhifB4ox375XQWaoQ6FLsj7Grujce6iZ21UoBMjPwBe7L7skm8a8CUNqxkbvWbMhhbgwiz79X9VMsMz",
  "key5": "2BvwEBX2hjEXB5M2r6ZRe8noru394UJHVTtCAPvgMDYS9VFVyYhxXghCiFXKnkWnE5NcjYBtLn5CQMKvYDw72YVm",
  "key6": "3X2RWCN4Btmq3Aib1Q27UsSYo38CxkMQDw6SewDKPQnVB9aJznET3ppZu4hqZLeia9osE5DhNT3yinSjFqKNtWGa",
  "key7": "3FvzX7UzwB5t5LLCXB7WUsKSbcegiSazu9EQzdG1y7BDzViqQwdq5yqi44oikhM4BhgUryrNNUfev7zDnDwg5PZ8",
  "key8": "cs28i4ihWLuhZJd49mByTx5FSm2oxxzvtQWbHpECGiPNBg16NzoTPmyUD16cnbkJBwFWn7RMHRqyS3fLsQxHBc9",
  "key9": "4pnxXM51HDtu7r2WFZLftwn6wLAZqLjrArsLXuiGcEhJxJA3D3LvE7xYLYrowyfJEkrVVUvCucXrmFwYAbqucziA",
  "key10": "2NX3aB8gXi4sUv5e8WJKQny2rvh1vcirW96fggVkzVVzMoA2nSYXBgE6zcps7WnygrUTTAhRnfRYmMyoXVtME5qP",
  "key11": "5shHLZzK5g483jKxzk8rzUrCAYqkQACn2PwjwFY3c4yttPiZoBSA7XXATW5JnaCiwGceAvfRzeKPL2HkqohRZrLf",
  "key12": "3xHRvJn23QW79JAyKQg5VQUrs2w2JWKNkXpoRV3J67E6WxDiC3E6jL3VAMBZUzVymodnBDQxgjioWWuUS8v6fqgw",
  "key13": "5VPdjbMs68To6fvHnZYFZQiJTK2GK585ZHgkGuwZaw7VXpgEsJQFbiC2qbn3d8NQ1yQm9V6w6Hc8Az4W23Rx9ei3",
  "key14": "2SMgNeFZXU6SwxKV1pfCutnNj9a1aQ7A8AYG5amk99EURH5zitE3ed5w1Sete17FraF3CtxzTcS4GLujeZScMX1w",
  "key15": "5HYHafgFoVUYG3ECGdXPUugEcVQMEYEoxC6WaRXC6rY8jUnR1fx6Mb4KirGFGsGgwS91i1FQVoLze6UGd8JYboMm",
  "key16": "5Jx235QS2V5yDZuYCUB9zbmvE9poYP5NUw5KSnN4V5X3KMVCSpQhX9nMoA9iXaFVowoMSTuZkJ8DBBakhjj3qYHU",
  "key17": "uqL6SAiZ84BKyjzqVuU9GDaXqdqFBARmQmJng5stCd8oXiqGC9JGXPdL5SqYDH7Wa2FWzNcHa4MnomZoQK35xTC",
  "key18": "2chWLtXXMxnndZExx6ndrCpsj3GLYBjWJmiht1Ta3onReyLAoMuEk5rk9HyaQZgSFDWQ39wL14wJKYQ4umu69cGt",
  "key19": "2aoezAMvwBHj4M7HxMqJ8MyTjpN4o43CPFJJWQYaUWXMaND4STiEZEmSpEt7u4ysPnNTjpKu3ekyMmJy1YriUGSH",
  "key20": "aU8eGxaJuiSNugzP5YC3QeqSNCGYvBjCWDuHmaQYhYG91x3iQxR89o399jhN3qkxj1G4tNGvbEZdvb6pat5hCAh",
  "key21": "411xMWMBuxCofAMDMMaxFvf4Xs1SaS67fUiinCTokehAqoUb3rVxqvH9p4EN4obRJEfZX1BTbeFwK4vNjhTUfqJK",
  "key22": "5dwthoPJUrQrBXctkyL3JWezAWsYDgFRrynBD4pGT33Kty4UTQgKnpNsgMVV4pf4dGmXYNi78K5eNERessUS9uzi",
  "key23": "3puXiPvZUsJUmZc5zQrdfuqDRJBhXZSFJSpyLn5c3tqhhkB8bkvxTcJRDezZnQFfYL82j8SmkyoNNvA7abfNAzin",
  "key24": "nFCJaMUzBkKaMWWCyFu7hZBwHYbsbNE7aop7xmo5Sc3nu4w2398Zn9xzvqvrHNogWeEv7Bow1qnA2r889nWtN7K",
  "key25": "2oYg75MegHAQdQyfsB7toavVwkzEPCtf72CJRKVXPn9FbwgNd28PAZTyWALJi5sYbdXZwj6LopsqtWayZ9J4jdtv",
  "key26": "5BVLJBpHdgcgwzmSevNtdkVbhVCu8mmdJnRoHLL3yuXDg6Vek9U8CVqvdt5NBntTqRrNn2TbhZ1NqJN8Yw6qtMEW",
  "key27": "3vxLF6GwmWzfFZXYjRdh3Kwh9CcJc3wyDq4SiTgsqVpwC7cq9WAsbxn8u3EhjF6PY1v8kqJk2R6f7c8bar1AZ1q6",
  "key28": "4M5ycDYVZMkhtNeqTqUBa3vjs1Ny1AEKZLCfMA64b2Mstx9HTKQFhyzcQdm7GUd9YkDBmkf4CenTmhibnBFCv4CB",
  "key29": "3sBiG9P5rvLgDkG9hPPpcxTkxUw4KkAmtKM2FA4FGLn5YujZ9J2mHBecfyKQrFbMe3bpFHKyVwFaH3YFkaohSuzP",
  "key30": "5jQTFcxYVX1yhEDPHovhA9m1Yy9sXcjwLV4faQBce26CzohE3EeZ7Bh9krn32E332iHD9rFcLZjFLKnX2LwcYnTp",
  "key31": "5CDgagc5cqr86cQQoQ1EXui3iorgUGDxmw4H1eRHBmEjoXPw2qmCn49baPGoDKQ6hDozQqtYyGiGPu9hKeUNoDs8",
  "key32": "371mSJhs7XtLkEgQibicFeYbnTJCddkqvCSBjmiDnTvZLxadYnVN6B1PLd57i8UGLpzwd7ABSY5AdxKsuQYo1nDQ",
  "key33": "46TgGJt7XsjTgpYKVQRf9NtPRH5kBJkFUkMxPzdvcf8tC73ahMsRzagpBG9o6LrPoUA87j3qcTsPjEFJPPHk8fZS",
  "key34": "4NdeRb5cLT98uKGFmCoa2KQTaDYpayyTMTQadntMqqeNWR5N5zC7VV7UGXuG6h4JQZxcZq61ZMFAT2ZpyosxtkhG",
  "key35": "3QYi1AGros4dwR24JNEF8S3qB8tRMfqtACn8Z7wNvA6iCKS6iYoKcXCghrXJb8JCScS9sNEU4a1YbTBpLeyEJkNs",
  "key36": "3hWPy78ChHyQkW4D1yRWPpR6NKQHGNPWpDm224EXYGb5XnCRhWqHyoSbYWsQfmk6jxc59RPqeriWDBwE9bGhhw8Z",
  "key37": "3T7Bw5t4qrcY8Du5WVuDhURMXiWQT7sHacLTZiq36wK6izX4DQVAixnjXxd54HofF4iSDP6pTCsEvJVHbJ4B4jAq"
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
