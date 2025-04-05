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
    "33UctJn4o3EmThapBELTWqTbm4ZxrheHCGnxNFyQFtrzW2vhiAz8KKM7iZm8CEsNL6mxW9mAWWgUmLWTA1nNYG5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3L2aFRVHxB1C42sZ2jtw5AAfJp6yHYH2zamBXipcHinMX4epMY3GSEEgNRqT83jAN66WJKHrfa1pkimvdr8ADn",
  "key1": "Wr1hme3jYMnLYUKjYRNYUEzHDarWD6ds1xskCnJFZ6cBHE2QzKG3We6Xmu5PStbKhk8gQstg1u7FQJ9YicuTYf3",
  "key2": "4mp18KEZXupeczNNHzvsTsq5C5HmdpEG3nLWgbxr3tvoczediL42evigCfySnb6EooAjCvijbgetXJYxqQm1XTsb",
  "key3": "41DeCyqGcJj68iTQjfafHTgKV3ipS9sFFb6RRq7MmWZfPgkxA1W9Qr2ZT1ayYrnQyJFA4aTFrjdnRRWKrMg6Fcuo",
  "key4": "5yMstTEcAtQxwiUxQ7BgzxU73RdsARWynnkbsWY8aZniXCmrVpDLWWAwuen826WBfPZwFxE8RTSsmBt1z89225PP",
  "key5": "4XbN9Hgg6tyYTznbwH8ZM5nbp75ZXTXxQNPtTptCaModpCXRNiZqVtaMhYDA1jqYJZK3JRKB4pv8sWZuKVo2v6vV",
  "key6": "5YpoRakXiyQMSZ92ygA7hnco6DUUqPaXpuxefj7KoXetwY7nuyV8x16BuauYkR9JbZZRHG2VEKvpbvxc6BTm4upz",
  "key7": "4pGfcMmt9DfK35KHWeKRoozmbwTUdZ9ZaKLk1yrsuZmbLEE48VnYB1Pfa44JHxuBumhsZJ9ZJ2dARojLLvrDrtUL",
  "key8": "iwPe7W5SG3maYZY9zexpYP1CqbQhveZLzQgL23oxgYfvhjvc6tSDuY6YDAEUdqDYsnP32Ffe91guispaChwHWJ9",
  "key9": "3V8FomvbqtZVizo1HYPeEL75GjgGnqiz3vFT7rSFqpyyEbXf3wZM6zvtRRCLtMkXDLuAsDQmKEtNYajE5oh8CdnX",
  "key10": "5hR4tkrCr8ivdZxTNEk52kPXiLdhTbAatcFL8mbwyDGtq9NeV3z4SnSCYza8mQGAj1RPDddGXcsmijxDrcQrbzZX",
  "key11": "5V5795e66EDVConQkSueLqwQ8VZsiDrBZJ8iZ6H25QvRnpXMBe3WBuGBvYx21ye4mVDvDmgoQ7eVCeuHkrcQhYtw",
  "key12": "4bFGLYnHPVfVjLgxN4QawCr2Kdnrvy5pZ7e5svZYvvrGym577CTQ5yvwVkb6WPs4QzeTigtPdrqbSAKpnCaMNCmj",
  "key13": "9fDXogmVCJFnodyxKbAVjGuLFSsjFuF9ZQFg5gMQFbcPofJ8EgyYYrNCUbsBwk7cFhYZqbjFotuEoL8dhWkuoki",
  "key14": "2NqedjM7oVS966qx4ET14aSSrcgCZqthMPKLHsWEJPPrvrkmF5PBbJ6sqRPFuYEwiusA9itUnUsT3DQDbwenTyZB",
  "key15": "Zrm5wir4KY4JswC4rbkiFFf2p49ExJxMAnRpJM16QvbZX6vF5JEXQoMnqhFRRoGDtSoqWE67bNJRkBqtW7QUcbJ",
  "key16": "4jWLwHWDxsCiTS9jqoQLoZvXQR3PT16yA1PJREPJtAhQGg54ZdgCobND9HH827iK3RuGVz17hfg1oafXCNX1SDEm",
  "key17": "26TddzwYBAXzu3zgtTyhajB26QZqH1dAVUpW3LhQnMDDv1usXxDQGruGfeHcWHnhiX9L1hdnQ6woMU9xABdX5q7D",
  "key18": "44PVQGpW3FE2aG1X3Ne1vJqN8J9qJUX7ZsWYk9RYPER5XXRdyKVKDo9qQHjjWaCdUZ444v1sVMUrd9xTRTZj4u3b",
  "key19": "5zTjGQbgk7tiZ4JPXMQmajQ9LrcUpsejikHzFtDKm4XLTh9rG4ysd8ZXdaWivCc22ePrFXnnncz5zEXe3QzGCoJq",
  "key20": "5JcEYtaPebsAUV4DWS6qo3D3kVEVKcYjs6D9GPF4tszswFGaaGoPevfDdnG8ZJbzvrmyN4bmnzdneaxXq6ctJgHn",
  "key21": "4dPajxhY5gPdHDqrg8RTT5MqenbJtL27Zq7tKzAqKJdSipapoCp6SSaDZryyr6K9VLBa4TdYKzviuGQajzuzCDWe",
  "key22": "3WCr6pSLrHiTeEdEBgux2kPdZxFyYnU5CN42RTzCvTVHWSoh5n2BUnFoHBou8HFkJ6VigVVjcX7t5PdKEdfwiaUk",
  "key23": "5ud3sr3DTAWXcb5PeTf1pocLBAF4i9HN7kkN17NxypsqdNoXQXr5X7n2yGHMdwUfHpKkcSLfnRwpsQz3fNZMGJtS",
  "key24": "pZ5hPQyxMPbTFAUFsRwWcMK4hzcSE3EKEkkBjMnaiPwpx25xeUgdvaV3sG4sg15exDEL5VCy7Zc7VetGjdVi5fM",
  "key25": "32SuuPoiz1pXA691SwuP1V1u26hEm6aQDG3TdKTGGC8wZNv7a3xu7H2w5a6z3d6b54xveBM8xD4fEM1mVWHFdkJQ",
  "key26": "2eoJCYNTMNryX2mtPhkd5qs3sSdD2XBTrWiUpMrsje8Hbkgc4Pu43LejcTFPxrKsoR7FPr8xoKb8KFKBW7PnbqVM",
  "key27": "631brCd5DrPKXRQxXsasRUKtSgEb5ETgcU2T7rJ9tUVqiWc87KwFeBf2vjbGL39CU8nFFJM37sfgApNDiiGxEboT",
  "key28": "5AuBp3GuEtCJzteNL6y9YqWkRGKN5NLGF4mwARxQhZfScvJAGFBhLyuPYiiMApxapG6m1gS8LC4fYsmBd2ZAzfKL",
  "key29": "2FdR8dg4FHUkmM4qcCELTFc9V62iLFVisw43wNye1s6jQQDfYbS3eyRszTNeNUS2S46sbGCucT91JW9VGPnxz76q",
  "key30": "FQGYGomUpknkZsCuxRA2gt9tL2vfGusdzJFdqBevF78mX1Yt1AJA4JqNQtxPM8nxGtSqRF6jPbgrVDFaLzM8WNQ",
  "key31": "3aknUD6iqxjALKGAWGumpurXw7WCWZchvgzFvSxUBBJCXMmdWuCstGLpR3aN3J72iq3hZFejQ7ufSAxieHghDKUb",
  "key32": "4wCjDWtZz26qxDrWdff6ed9dFyGLs2QX4dWsqzwoHo152B9wKoF61XTRT8HxxpKARANDVQKFZ2MDTUs8QiMf4ics",
  "key33": "23KmxWUCxF95Bi8fqUkqdgTP5NPrW8QEYxmy3cfGrMZFKoFZKxQVDmxR3A3PJJBD8uExUjvEHfkBUL96r8EwhVn9"
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
