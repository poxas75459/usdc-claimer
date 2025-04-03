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
    "EaLvm6PsRavjsd4et2UraBKJEN3H9dY1ACYv6EFmb3qyQU95xvWZCZj2Tt12KP5USgAQ9x2u4GAMAqj8KajRAjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PFEaU4HovpaK7RLFSk8bAiDc8QQjguzGDqsFXtiN38FEsSsLWmynAb5bCjR7AVYYbFaY9RWg2sj3Pp5LH1BLxG",
  "key1": "4A3QohZazWeiyoWmNaqZjHVzqPE8zX9eSUV97Drxj6daMRiEMZ6irq73Z3ucm678LNRp68ABX1ePBoQT2Ao1ns6s",
  "key2": "3tYcbaxB5JdGEz3XMpXGFL3HNHyX2ZJ5y3EdhqGXVFFyBDxu5dtaNuixeeg6X3vK1vTqWhFjo15aUnvNSp1BwmaW",
  "key3": "2SUsUbMu3T5qgM9m1uD6yTdTbmy9P89yVMb4Y6LoTRbVYX1c2WorcdjmozTh9Y8cAeDSGGEMpjDbgnxzC5pwbhCY",
  "key4": "3864XUVS5DoLQGb3eCTQCUW6pCTN2HrgFfLh4ee9JNjTk3Dd28vN8BsPTxEPLme1ugQwUciFJR6QweUarfzecNL5",
  "key5": "4CjsACtGaR2e34bMo6zefh8A8JRH6bMNUfL8sxqRQ5tEhiiQymLCWTSbwRmoS4ATGE5zY6APrJXinpXD4z2KoWEX",
  "key6": "4hPzWcZqD18CQKKb77muMMcZs98ZBPSvVx7Rfoei2p1YYEpX8Txc9rWqMpZkRogeMwYJWnHwcBjmmhA89vTFRWGR",
  "key7": "4JtSDhaaA7MnsC9W67n97gP1v6TEQg32JUhWn83ZRdsBSMri31BQnzow1yWjh6rApXTkmxJzWbHtuacBYJby7V99",
  "key8": "2XKKfnKWtf2s5U2BPAWcjAreEEXz8YywbgA3HuzjQUevrPWzLg1KFeqEFNSKDGWSERNPeJh2vVctffKsXKPV7LUe",
  "key9": "29ZhK3yTj18ekxURUmCpZbVyAtG2sm6uxgFwRg5ieqXAwFLH1xct952eBfFQ4fiQ4HGab7PHrrWT5N4iAFRfE3Jt",
  "key10": "2vMzfLdBmSD7yfQbFfzejsUYYhNSsaFLze9fgCByU1nQgg9pUevsGWF3ferte9MyCoJDNrhBgkxA2pUyUZ3dZhCM",
  "key11": "4zd2Fj5R1Sg8yeCEFkUzyC7WoDWptHr2NxSzHk3MHDyaz9Q45wEeHSLq8cWvFuaEPzm2XCbTJe6Hiy3JjNtRHbQj",
  "key12": "3gXvvVvSdEenvy3P76gakuXAEKp1QBM7qGd1K4fR1n6vAUChWFwE98Rm2RrbewyKSDDQcBhgvpaPNDVSktLxupYi",
  "key13": "2uZQ4ebq9DuyzHpSQBzarSsPueyEb1S5zp7iwT3acKpXj6apPdUShrZYhXYsFoUEJFQqvoP4xhkoSsvc9AnbDmBo",
  "key14": "KxqF3gmbNxjCj2cDwFpka4j7CYFQXUoW1JGK4AzkRRWhVk6455b97JioQ5DMzBoj8CJRSdhFuXsP1SkuJa46qsf",
  "key15": "4HaTHHSx4Hkp9yDXkFNbs8JVmMt8AwfYCtPvmLYLVsZv6tjPXe9SXoDwhWxs2xVVw4QodPWZrJTNiSESFjJsFgNA",
  "key16": "3pWV4apcvBRaffTeSV76hjcuMdbFyYX6NFv7Mr15duwfvP88fm8LkPXDx9SGcBz4YCSitDUnYUKkmSBHgespfKRM",
  "key17": "2hMkKPBqhCkX9AWfChMRDt9dZ4cTHgsJpuBNSnmsCXeFP1z8FPBLrY6MjxKrq5UNwZkknrJenwDe4QRMimXuBSyv",
  "key18": "2xQSsj6w1gBp53zJdW4hmLMTj6X4YmTD96ZGdMUNxtBVrf2sKsMiGfwuawVWmX97W8TPX1h7oR3Ahc63Y7fnyFtC",
  "key19": "5KhvQev4hemK2UVgbKgWvcqzFRDt8wMNZawg5m5yDWVBeEMLdFJRQ2ZzYEjxPhAH8ZXC7oWaPJRNfP9BUA9FMzXH",
  "key20": "5ygKRiFgnkM26NQNd1Y1sPigxdV42sZ79Cz5QstzQto57CMjSstgMhHbe5oNaJGctgZRJMwWTf4nxFwSWjUghDxK",
  "key21": "4BQx2ghdvJkTu8F6gLUXUiwwNTVVEKEZnLAoF2mbo7rbKyVVCtrwieuH1rxq7zUjVQNCQKWch7BLzTWaarKYn6Bt",
  "key22": "4ZiMNSZV7xJxztjeyWc8pKDMB79pZ7FowYJq3DkNmmhaGuf7XkQW7YCrGzajsYfYfAyTEyfdNoszdPoKLCmE9FNS",
  "key23": "2LYVCF3gcvbbYYh7M726mj5UpbFSj3bqpS2GT8oxziBzxHNiS8JXvoXUZPz3hGQ2ddWGJ5hoJ4Q7ewQNKPpiPV5h",
  "key24": "3MQ91yMkqCvJiUE7ky7AaqQucGd3XgVmPmnUNBVMG94jtXCA5vSy2RRc6XeX3ZS2TGeXfPy7hf6fDMBDUpMWNFv7",
  "key25": "4Q1MpBJcf1QaXJ5uzZ2ohxcSqXayGuMhDm8zfJiGTePuy9ASWBHirtgVfjQXssLF2NxRvN7EnATJ2zJMVz9AD15y",
  "key26": "5msFzDsrMKAUqvQaaNZDVL6gLE8Ugh4U9azTbsaRxqZFuEN8JCcFeZzFQbtFoX2rRVR2rJVA2oAkn8grChA5HvHq",
  "key27": "44N6i7RgPKkqUJcEisGpUwj3BdbEEmTEiYLNKX94MdzZGkt5dDjwv3P6t78dyR4pZDJZEpxzcz95Y3Yk3PDwEnku",
  "key28": "5HaBcRCpL8G7cYbPKxn67mzqkHnC3Kg21nwoqziz1Lx8FsRXS2vLnCj4gAGhTTQcVZBmnRy8mta74zZfzq3SGscw",
  "key29": "4WTXYaUbRhbkJTWexp4Mraa7KQ5HBKwyB77LPBpssd4hxroixg1kYhd2nEdECopgpyDKgq8J7bvtogQruXaiGebz",
  "key30": "51Pfn7riSFKMQRFbBR8NLcwhvLAmRmqztLWAphu9VFoPdfVBBYcRCvEAduNLJFj97BTreaTaQkKp8HZAEf7s981n",
  "key31": "2qgWSuZ1Q1RDZMmfTEpH9PMVqk7mHE2UetwvU1HN2Zu7p44bqzSjjnT4mPcHqon7TZjiAGUSVc4WTKnrmpDac8HC",
  "key32": "5JB5EyNjFsYo2K86XN2j3hndcomQqxuhEszGwR5QALoKSTquxHRgH6SUebzzJzTcJAD5fAQH8esVaixxZXUnk4X9",
  "key33": "gGGKrWqC7X6fgKXasdsyDUbRj5gtcb4o3ZdyPUvyXyeSph9819iVmupyPprT6dFfboLa6Bq6sSbN1suYdfPjGpe",
  "key34": "2r34g5VgW3YBn5DRDipcASknUYdEU293F8sVsygMA5mkbZJNeBgrZFPsxxripS32SaJxYxFQK9LVm6JRbnTEGd8z"
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
