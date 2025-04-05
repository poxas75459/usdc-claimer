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
    "5XpPc4WETzjE7dFF7mpVjAUYDUUsZiYKpf6LFZ9XWu9N2k7uLh3VKXidgPjbXDMyZz7ut6XbFwGHU9JQnLrbrn2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbByB1pzeivte11gRSH6zw4AmnGqCAZBSwqUjK4f1jXG2jJxoKckTgjNYyVG4DqGx8zVkjmwvBeUNY3e88kPJ9S",
  "key1": "58NcfNRTuKLcAkQqYA7LoYKutSE26ToKuq3EdHASt1oYEncaVSj2Un7przcxV3yxnD7LfbaCWMK5gR1ALzUih7vA",
  "key2": "5v85piBeujEmoHpsjuy1qmxKHGxj8Zayv2WsDUbpNrZnBJKKv9457hsei7U3Jjte9jxQyG5fNtcE9dPuR2UaaKNe",
  "key3": "5fLC38yubhpTMwuqVjGvMVqUHXX2PfAv2eXbM4MGV6DUYTi79PShSJhYNfKzMEo4VS9XgqcJEzBuSfby1TsfGMup",
  "key4": "2vyN12G4dc2moWmvBGUSpPSJJTUuS7PCWGr5QFXXCZN95QkHnahmFtcnfXTcfQeGhwYeZNAd1EXVx5sEjeP15f3A",
  "key5": "25sxCN1gEaN8aSF8Ai4efuCn5RKVcKiyckeLr3ZJuAoLfMc35ka9ACkZxCn88WgPQMqHgHFQ6ssX2mGTg5BSK3fW",
  "key6": "5kTc8RyRaeZBe3UoEcGmqMcX7y5mroMRPL4WSjdeHEKnV8fhxuGRUb3zkYgQo34rCR2BtQUTgu4ixo9tFcZiQksc",
  "key7": "2RvUKzShryBhGas9Pu6ra351jBSvchgp9kA5iX83iJrsasYqjW4iBcV7h9tTCMSNm1t3U19KHTQwopSPhFudavfG",
  "key8": "3LaUSHid1Tu2inQjkrXcjQESxYLeZ8fXQQL8fd54tuANDbzgoPPr8o4kK1mFYFUKuocEkeD1hM6C2Dw9BbgoKM4c",
  "key9": "GarhDzB3XFdyNSGc3t3YfuXzmHSYXCAgH9xY63NuMBcaAxn2invYukhGcdb6sJdqQYU9qbw6LRroCLbS8YDeUid",
  "key10": "2JpoFbGLUuZGNqbHA1X6ZAZq5mV9beYh7NbP67tEDEJH8ff38nx5tYbURqR4JJJsyajV73tXX6RCHrcNBTVRBPGJ",
  "key11": "3P7yGi6v7A2TCghz9K8zfm4qsTBdyZdnainMhWeTpw3FCaJzZsT8Hba6wuz8gRRi3vd8ydopmFPQoqhjxrWkTkk9",
  "key12": "29B4ta6jvsTUZzMjyT4MrfkGVxStK68xvsoK9iAy6L43pWbgJT9C1VNVJ49YcPJpKr9T9jANSpJvnrijs9Mvcvq1",
  "key13": "3dPm8MbKG3RvvopPPkQS2y4JbypESG2er9KrWCq3hHEh5i28iUQNnHY9SWGfqxGBYzeNSXqhHAu3rh7kUtkq1eLQ",
  "key14": "5UUxf84b5foxHi8nwwaVYk1RE8Qm9eGfCVMJoLpM3dpZtq7nWSttTdWsyTPKNgmbSD2nBTtF1TEYTDjgd6mnkb5Q",
  "key15": "3ceRFHggcihf5gLEfwQU2Ew2AULryED36pDSTWXvYsHbCTMfCpzmS1nckW3sa9TRQLtuKYhVsB6KsrzK3pKn3ADw",
  "key16": "38iJPyfTMnSmSjowDXdAJv9jDP6PGHmvdcA3Kwj8sKQpFqgewwY3AKBJqmeCL7DbBLf6dz1pVNcnP3cUdZjHvhvC",
  "key17": "Hf1mS3Ggghg3ACXn1NJuVP58iPhKErzq8w1PGdBEZ1bfuZVLwNNPhZq6EFdGDbWpYEk2FTfXGrRrqhWQb1qpFEm",
  "key18": "5Qm4jEkwGFiVSWq3G69yJ6ourQKJ4pjAyoSqasWBQoyGWgkCMvkkfhZ2GBTtSpSJYQfg7yNPbobQ9tsAM2wJGdr5",
  "key19": "EXW6cW9Dn2Jsjheo5Q5EQZyNwwsCKnfCKXmeFXPWfXUSHhdKHb6XBxcpm1LrJTz9JsBp8PHcA8vVvZdU6B6mq31",
  "key20": "28EmAdkyqPxMhGqQY21AVAUNctJ5Ncjo46XMXvYn7MemzGdEshX3pGXV12mD6WcXAcAHBV4VMdkNXLLHApSiusoF",
  "key21": "3v5Rx6AopztZha1Ybg1jT3BnFjQVxD8HmgfFuLRxD6ZzbnZ4M7j3JA7DWdPNKUBoiJBNmXxzNMAKJoEWwiZDb7m1",
  "key22": "2mg1PSSLHY3D4VgCZc5SzXB29vzkaPN8KBJEHAzrwh5xTzm8cLQqT7GBDTmMGFvs6QR5wJqDm19XcggKKzJie8Ry",
  "key23": "attprsQYRdJrjVJYYT9qPhELL7oJwndVjtwo3K8YTGG688Sk4GWxgHbntzjo7i4hv9Z14kQH44m8X4FGaBs4kZo",
  "key24": "5aYzEesi11EZgnwSba3SmVZhV2JzL6ME5feUMqBjBGgbsYbtE6pjaowRxij7KfMFSHpAvyLYbLMvPGxh9jxetbxc",
  "key25": "2xgEPovhLYVFMQ5Fo7Hx7hHNKm9RqZTFMPMVN3S2NPbto6MNwKG7RSyyJfsrBAbRWAS9kuVUDVZWcRJ5PR779YhN",
  "key26": "57pm1SUTjV2JfJuUSHaL7VRfGyehirGuP5EH6QVzTFXXEvFYfVyBnpZEiFN58JDHzspasYX7FQTjmoibt1s2Bj5V",
  "key27": "3wLwEyNWnPn7Hmr3xRTgdgQYc8hG5RsNeynvUsCQA3mTbnxGRp2iCgEkP1XJxR3ac54P8s4PKn3PfrUsVPm4NXx7",
  "key28": "2RYTQbadc7FSkD4VSuPBuPqX6xaoc92bf6RLggxcqLg6bhqQyUGyLoR4CL66vn4jm3hCu898aGZvHoe2icGKi3yg",
  "key29": "HiDBAcEaLjYKQzmo9kKovtkpSznQxnQrMnxGh3CuYw1rny3H2NRm8gh9nLP4HkJVfcH5UeKFu7yRF3Lm2oJacwv",
  "key30": "4Q5Z1U77Ez6Zn6BtvHxj8Rv7s9sbszmggDTehK3VW5Ua6JCvpLAnGgZw4DzxoCZX8gMVc9Y6Hov3nviF4AdqqW7i",
  "key31": "QeodbtQF8iF6aaaMEdd2rWzVwp9LnKRSQa6Nu1jViCMm2h4jQnxMcsErhbkcLCzX1wEEU8omjeRTMgxKpbrEJWW",
  "key32": "2yhUUsC5dD1pBi5nDxBGEfWSrAxfxubHwGbnfqf5EqGacn27LYoBP45adp9QjruhPXaQqhpRABcBq3aNWdX3jHNP",
  "key33": "2TsxKCfmS3PNYph287YJePCW9Yujvs8vvtZyewpzyfjm9LWmgxxyP5EyvaM4vV1SfJh38fiMxPs6ZHtx1rvZ29vp",
  "key34": "HxNjpKW5Pjs3FgXmoHdqYXLrbasJxyWF3Bm5yu1JXzXJEvh25yxaZ3Mo1ybMYS9rQJnctk9YJvxuzNksrCDnYxd",
  "key35": "3VZgfxSRjTvGVaRXsgnQqvNPJ6Bbu8KcAe3Z8NX7ZEKmzYZAwev2SS2hHoNATJicvLcBrC1nL9xBQCnUyki5rEKJ",
  "key36": "4kVN6cZP5QhronD2imaib8T9pmDNBoGBBeQ2JcQHUvqfTa2S8QgbYSyxn8AAA69krZzbR5NsAVU7SQXAbiFM9x49",
  "key37": "59oyXbLpVuFaoYpESgAHH1mVwEXLehyKoYUEg5KF6GN9yZkDkhUe5zdjRTkZd6BtM9WJ8PShgsMfQkodmidSqX9s",
  "key38": "45FkdtMSG22PPMZ9vAuYTvt2Wu71oFQFJHEm9mgBcqNzPGiwoS1qATV98u5QPA3ezYPkJprGHrmYkYyFopPJgdjS",
  "key39": "3L5h8FP7vY8rfeJkuob9pGr3YBFxnkNMW8om6EefNJMkWXNVNRFVREi2AApgKvdCMTRGBbK1a3DgjuXxw9EodvF1",
  "key40": "nVbFF54EKNFzAHh4tF5E4iqpLrxy4zBvNpQnnwi9Yyw3yynXKXgeZKGH3TqLySYDgxgSydpNRKG14TS1P2vwctB",
  "key41": "3NsmK6gFoaxqYpLeHQmjA7jMR73LkCV5KEJAWx5DmusqbWdW7YBCY8VHscqRfm742wLSntgJ94FPHfJaKH1kpxmo",
  "key42": "cjSy63bR9HtvgrwhJ5RtZhZ4B7re3eQi18caHN2V3voSpBXy4PqgiNFforkkjTLTnosdetEk5Nfj7q1A6r1N1Ea",
  "key43": "2K4ToChDF4eigWT1UwfUpk3XnJhff4KRtSCg35h3vkxRwNqQNunkoR7r26L846DS44WDGaK8mza98BeZRveGnubA",
  "key44": "2dTkn5DRnsKrvFJt7sLEd63qC4E91MW3J9AtwwoqQW4Y5Yip9L1bhCTNqGGLuCdCnMukYiSzhojKW3wECXdMoPKh",
  "key45": "3pFHptVUvccweurfezPahV4MR8NVhYsGcqVhJwzJx43SvGEjvfJj9GnftbtgNwoGSb4woEF51dWzyMoqtJMN5WMT",
  "key46": "3DVVdMdzR6BaYY6hET4oDs1QuwzDfGJb9sxbQuRyhjs9HJyoC9a6QPE93NRdqxNmXdWqUFr6nu68ycZYeyZX3AfL"
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
