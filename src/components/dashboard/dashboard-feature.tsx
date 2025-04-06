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
    "e1vUCnsqAmX8vwVZwipp9FCCg5q4QUJHVcrfYzQcKLNZAujU444YsXgZ8DBS4qzr8c77ecrW7qbnC5ZC1dLD5X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evvsRVJ6pSbMvHKcJwcvdJjAQrLo4A1SDMs1YWB9cnYYqgczb2YxU54W7QqPiWpwBkTR9tidRdwKdgQzK5dVekr",
  "key1": "3ZVkGfHCtzQZZVp7J4dnbk8H5fWZmLSWXJTpAooLsZ7pPuDsez5LpPwtpCnNJm7UKih2Jn2mae5mAYNP6CAgoGqX",
  "key2": "2DftNmnjoPVpqxyhAyr74rkcwxgbtGMFEV8XaD8RDV5LYqny6xRPgh1NX6xPqYgbCqdk1wewVcjQcvBg4dxYC1kB",
  "key3": "2T7B2rpizTyeX353meyAYVFY91CUA8M3SGALCph886xk7ye2GNVfbLhYi6YNDHovGvd4E36sk3kaUDodNArXRF6p",
  "key4": "2CnZR37eMDiVDfYm4wGRwucEVoahNZNzbea8YwqvvB8a6D3RXZxDxn31nJSdFBjp6zC6MTfs9Ee3vWPpBnUfdYg8",
  "key5": "5af8KP5oxNai7YN662bzpQizwzz5caVsFzGY9grmXJq4jV5pCvm3JuvKcuzduwuR45ybtbWssjEB4meWg4R7Yp4U",
  "key6": "47VebDdDbBJ43Q2NLzVjKSg8vUewNXfjXfmEumCRv1WVpsnvH1S3n1sCwPmaPq5kSgpf4yCekgDWYoWsSF7JteS7",
  "key7": "5w2Won9E9JAyHDrYF4Kdpkdz1jEbJqmTk3TeswTbQuu1nnv2DCc27iDZ29uNVqZZbAxpBZD8UW2MFvPVqdyL1Cux",
  "key8": "4rUDFMHUr46tAXaxBWdQdXjL4YzBecMUa5d1PmTbzNCdXZ6hrZ5ugNBuSyzJANuoRHA9R1YjacCtw5H64ANAojuW",
  "key9": "3Uv7sG3gMYwYQQAkgtGfFXMoxgSFn3R7ZWZcKaNMq6bZf4tTwHYW7twB8LHxYFyyEsTiDSUkHXAVStk64UaEUkuZ",
  "key10": "53T2jYnsHgKS4w6q473oxEY4N6scJCaPUr7Zp8TKdcuZJ6h1Exm67YZED4G5EunD7ZrkBKFLBTuwckD2PqSDzmUf",
  "key11": "2QmirZzDcU12JqDxHWrH7kEfhmqYzwTc8yEFnWrkn2g1btuJ5V76gayByfP4wG3FUo6t1yqjSmds89mP2wWvfwyC",
  "key12": "yxE4vXs4cXs4ETj4PupDab6c4e3RtVjhKBWUCR2kfSsRK44PSNR1FnFzGrArnEh4P8pJEUxt1mbtNuDrZywqFc2",
  "key13": "3eAhfmj5CFxQfk4P6hzMN7ZLSqHPBjy2XQd58fFn2iZUBf7x7F9XZf17igYM9FySGq4v8yezdR5j8b86VMiThaw1",
  "key14": "2y4MUyHQSxbDB7x3MqBDEQMPEK2Vw2QdfYbsbDfSapsdKd9LSghjHDmn2tA5RiuWV1t7qHZPjiUrY17zUVurtjiF",
  "key15": "48rt8LK7kqnFAFhyYUqYRck7cNQCjqzcjwkenAU2AYP2dJ5GzEjvqbFqSyfuKqxiBZwTuUfZiH97sp2tT3tfV51d",
  "key16": "3RZ3V6DSs4AEQPUNbgyPFZMXbmBTsztJ2UhJFCbURNPL38AbJ3By7AMfzGtc3TatDJP9MwD5hMut17PNCfFZhrEh",
  "key17": "4Um28gGiR75xXDrjauGaJ7LjN8ZNMx4e5sj4QzF8M2MG7NinJ8ZcC2oefJDvnFT6KF3qZ8xAM1U7ubscniQ76yus",
  "key18": "3rN9azYrBETcXvbaApxg173MzLd4F6ir91qbSegJkBueWGPCumeP9dxv7YJvY14jLXW3j6fnti759L3qV6G4VwWy",
  "key19": "LhxJtTfwph87GWaSRhjDXma8Gwz4yipkiEhmvNzqnY8aqetPeK2N3yU31hxRBV4i7pAykxjLscVBCZqW8perBH5",
  "key20": "3THmRdBEcasm1EcYNX9C9zmFT9Zbujh3VY1M4x6oyV1Yjg2hQU5wBQHJKpoAZrFjoCtmUZPCBAWR53ASjbu9ptAH",
  "key21": "5sTKobXjvJCqysydePGq9a6eBgGPtWW7nMqMH7jHHJw5ia4TN8nohr4CzeU9w5PpDKuo19s7RnGFzN7ARqK8wR4b",
  "key22": "uXCLpVQcWSuf6bWRTQzXbcu2ZJcdJAtvwPmsQUXwY1Rht599grmSGMLNt7uAZ34XHpsizj4gfpfksgegmcotC9T",
  "key23": "4XNpPgVcqn7FC9CkTdYUDBNY2VwYGFozNSvuuDkzPqUVbJuj5AKh5j4r87sfzknBgDmpGJWAuS88hbJf5c78dHfu",
  "key24": "JbAHZzqLt1H8QK6PMnNXNBoQtEwbu7hXsbGPuJFWX1zpSAGGvhwwuPr7L9fa6Ut2X4dUuYHP4dcWvwmeFAcuuuA",
  "key25": "4XzMtAER7ZuVGYBh9uK5Dsuvi4LVhSEWUMjbH9hsTBe6MVNTmodUr431MN4UnGQxnLTT11WR8g786u28tcUihGCf",
  "key26": "vfBgDvYK7Rxpeu1KTeQbdcdJysD8Rif39rmLAgXMdqJwTJtTUFuYtZNDb1rsEJPsMPojqhRNTrw1DT9vEkPaaA2",
  "key27": "Jz3yrSiLgoePoycsKMqnSjen6FUrY853CURkPm8S5vGrmhRd5KjP77JbRd5o9LxA3FripsLEtikwfv2NrpPqL5h",
  "key28": "5dTLFST6kAGvnahDk4wDEfuMKUdT89WRmGGWFqXvxbskQtjqg18e8RnFnFtPbfb3ocasj15rz8wiQ5Kr68kFQ7a1",
  "key29": "4MCc9BDJKmurmmJifWzm8f6W62KrYK36TEBGW6npEaKXVKZ4TZNLwaTtmS66kjUnTtJPGvcpyuTkko2gA46yc1dL",
  "key30": "3dNWr9v5yb1GwtS4E1QszADXBeNEaTA7ogVo5D2RBH1Yb4FyfQDUzEgvUPGy9NAT9egVw1nSoozr8cJdTCzLf3u3",
  "key31": "3VKNvu7oQNgSEP3gSB3HP67cApkrbrS61hhVhKtNkcU5ThAWyaPp3jTN9BX4V8SzjYEN5ZgrUVpdxAsvdNVeuDHY",
  "key32": "63bG4DkZMA8YTuesoQRXddhFw2ph2ha1JWZVR4B7sBvfJcLqDo4cmvTEBcoQZXoCG9nYanqk91fYppPbzLeUpSPZ",
  "key33": "7upkoM957VbvrtqJx89oMjYEh5hmE9v4ckXZwWYFExAfwCaLTTxfcaM9xTuuGz6yZFyc1vgK1s8cZDD2rPccRKN",
  "key34": "63CiK8HkZEKNZTeuQnv3zTG1oXAnj8mm2VnPREGXZHyfxj2VajmaY5VAyGiDvzasqcDKzqZtzqbyD6bujiGBXWiJ",
  "key35": "5pbmMuueVSFhR727iUQJPqES5iNgCyeu99uosg4MbtGqpm6Xok5m4r686JX6RTgG56GfMV3S4aS6192jSeutvwga",
  "key36": "4tu5k3FmWuaKcKpwhhgc6BVR8czW33cU9iQzEmBzjK7NMHaMUWpxCVJfvyG7xScmiaAP7HGLQStwWie1k7VNyuyG",
  "key37": "2UFXNt7LosT3JRuGHUQJeDH3BcN6DvjUADSU3yEip7NyJrwhdLetTNQ1atdY3af6jDAPvTgdHwEVyfkDgp9Bf9TY",
  "key38": "2koX8CGmBDdPGoKt2btCv4dpfB5ygLsRZK9m3S87Wr3xnFTFQgsEwkPFohjtuAZEFNRKV4FGZxFKyv4YV4E5YFvy",
  "key39": "5U9eZxY3x7VvZhbdsML3CUBGbQc7YSktUp9icj7rEzAZMdoVmSeezSJKDjCVRBWUJsSh6wQ1z5HCAaw5QsrxrQ9g",
  "key40": "4nZNq5xqKPofRPC3GN7VmZgAFoaN2UUbb6fEE33TSJWS6CWof6Pfpxy3wBfrGcniPkhyvpPzBK3pKMiyLprVBc18",
  "key41": "CFpbv3fu4f9TdCgtPVrNnwWLWVns7UCLtEPi2n2AHmkXRg8e2Y6YPe85Cv3tQ6RjyfMJDkrn7KoiujuDUNaatw4",
  "key42": "2HBVwLb4LqMeirBoEwLePErW6xRSzj2omWxENQhZYWa2C6DecMCfgm3McuzM3Ra7e1vqrkou2hz7GBcYT6JGyzCa",
  "key43": "65AzrRoyw3uK1doVxqNb4SEC2RLfo7r3h6GpcMrmR7BdoSeQwjR1F12ZKRAWX5xKfXY4nCWPT6Gw1SiosWHHByLv",
  "key44": "9MUH4eLFZmTwKXCsp1LCrLRXNWc5R9JVVfxp157ChrRg8ir7JRYSCfzvALRrcbzbXe1Kd8Z94TxDgs9wQer6ZHp",
  "key45": "4drcT7FG78qJBackGKtAyE7TC9qN1DTUV6wYqFDncYaLkWzhh38WgKcJa4XUP1bxm4MG1xQJxP1Z7LyevJZRgTsp",
  "key46": "322Qc72W9GAPqMEWE5DVrL7EuQy7YnsEdQiVzFmm8D6gRy4Lw16ZzpZw1axFNsPWvki2qqShVq6RcmWxNHqYbE3L",
  "key47": "YHCr9QcidSZWaA9PxNvK9evRDbeK6AoGowMQinJxGxNsvnqLHrYh6hgTPdWdCn18Uk7BR9E9bKCmi3jwpxVcchf",
  "key48": "KPW328qXM9qHrR52isBT5a9gd1ZXuxt4hmFtKyQbeDURgg42ZLQkCbqDmCgv8KM1FodEdKZc8LG1qUXqrBf2aDx",
  "key49": "5jBcBca3fozshu4rhGf6vt4gmt6JZyWKSiviYZ644EHroyoaLV7CtehJvPRshd8NcE65goscY5S5Q6s416qdWDFe"
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
