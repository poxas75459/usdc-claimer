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
    "48SXm2V4YWBwCfaqj3nF9P7PbuQdJ8vUgZ4w7BRdxEfifaSC1dx67euJUpxH1pUkC9EfWCg5F5V8xX3NbJmmfJQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLBZxSQog7Ge1TMW82qZtni98ADuTLcJbVhh1zvLNPeewPWUhrCb3RMAPP2HcJCUm8e1iFJnisM6LAX1J5GnV2z",
  "key1": "oAAYd5nC9S9hcuJvAFx8hPGmtk7jZ2UtyZuGM6jc1oBewXQR8SJYiuCCYQgDApJud6FuTkTcJfbHeApiQzBWt9V",
  "key2": "EwDfzZohqTmszyRcystLnT6HYaREkz9YqTDQuTD2JoprWN1ih8WZzsmuMnxY86gk7NtrXXhDDoJC6oqkAUFDfj8",
  "key3": "Pxb2ARas7FtpBLDE5tXAJdPiTEzamkzFQiMsXaEjsPiqRkYc81Yrfzeoeub9XFPUhvEvTraNWaesfYQLP522tQ1",
  "key4": "5b9JULha3piX1N7WxjVzBwvA1HJrUe69GjtAv5vGFya4CbrEpRPRmr4QeqHGZsBeijdzyCVyyXnQw9jCwPGLFMn4",
  "key5": "2bj9yF2ET2ngjKDbmqeLjdVWJT9qZLmXBnBnZ4Sw51ijQpT89X99P8PupiGVteVkM8JfjCwGfjJLfvHW6Ldm7Wsp",
  "key6": "keeqXT6E49NbWFwMC8P5MQd7G151A6hrwUxv3BLYCtX6jp7d64Yth4PwydkA8T8d8iyQGf5gF6ffZAGxFEoVZxT",
  "key7": "65jKCs9Qs5YMVWAvQSQGuZ3b9qDTGd2RtiSmAGm8BBSE4MJXe982JPW3GWP3w2AtvPF1D7sQQogU6i3L6d6qZRag",
  "key8": "5Td8juyx7y75sxRghUqcKLccsKG4BGg4p3QH4aiTtRmxzsGPoLQwnb2DRQjjr5iPU5G3WbyEUpdoDjCnvKnqQ7Mw",
  "key9": "bFjJfh8gmWeUU1yAT2oDEqPKaCEhgiSwDGsp6ejjPt69v4mT2Eomi9EoTtGhvwtBuKAv94ZyYXWGTwFmCgd5SKr",
  "key10": "4o2NvKFo8H6EVtzpkZ3PMtjdtYuaawALDYoxxhdd7UKN6hEA5SfFaYzsPs9q9GGyybV6dsPAWwGCdKcsZ9PZjNie",
  "key11": "YQN9mMBfAfZGpdmge21xMZWB1M5BaLvC5KVMxiQmre3AN57CrMEP326kmJNCJEM73juVsJr7Q8nnE8t4Y9znF5b",
  "key12": "3Z32gtcJmH5L4xVgkJk1JMgoXCKoQs5kKv1VaudDvB3V8FY5DD8hD84ZtwKcNMuZEQfGENwWy2BUNoSXBYF875tX",
  "key13": "5xoQmUU2M14eso1s3JbhbMgSYX4PPcesECxfEWER3jaiRmbozq5Uv4rqUy2Fcbe1HjobXwjh13iPemCMAYrimxmP",
  "key14": "5MjYdz2k9moDBayj8c2TtXvw367e33w2vq7p6mhrJu1uyzt88TU6gsScrbF5vLpehZREN6mcsLcxJ9kjYhW5wfHb",
  "key15": "52RNsY5ya1pfNSd8rfXpVW6URorbH7xmHXQ1Lvad9tYdr5hWCjWfyg3BSzxcoLVKgepnKi1PDn93ct8HhQWtP7kX",
  "key16": "4Hpedzzv7ENHsj1NqyFMLaYDDtzc3HE3hEcTLhN293ANQF1MscSgv21UNZQieqyRRNe7Kxu65xxRYeYvKWFiYMov",
  "key17": "4DdXnjYDhtrnWG3RG9TL91pSExX17juSt2FR7VYNsZ7QkawkoMBiiwMngwdXX9Co2rgm4zdaAXDRJMrUZHBBKgUw",
  "key18": "2zW69rWnzZtK6mCmAWh2MDreokgk1V3AzkFUFpKF1cD89DuNCrFqzfHa3oaquDUuVmnsYd4kgoBt8RJaJwwnWkuS",
  "key19": "3psNEsohf53oDBtu46fw3eJdN5WtWpUpfKYWVFpxEhZ6oLgzhXHcEjtkKMYkJYcAGXBz86359DMpNpJG8e3zmgpo",
  "key20": "AkvLZxNYf6SZriJsyg5bY3zPn4qSqsUzUEgRv5HgdpHu5x1WXPyLFaW3tUThhxmb3ixq9tjVJ8Un96Ei6PHPn6t",
  "key21": "5iT1orA5C2qegbgXREhjU42nsaiuek4VmJuy3oyZRiSBjwYMaPKrmUfU22xrNmmoZYauLHKru1rDcRAMaXSwK1bz",
  "key22": "2ZMwHgj1KDQuc7Q8bRNrNqHdhEfMiccdXB6Atrsjt5BnWpkHKCEXBSpaAVC6q8s8u8THDyNaVAh4Fx6KDPgbPZTW",
  "key23": "fQvxmKaRUN8ZRUCmUe5GjCQ8dP8x9hMpaQZk2ZoBCuMTaVkhwsTjDw5RYL9sc88CfY3iUgGPawPGfZrAF56rNaA",
  "key24": "62K9DdtAaN6MeprEYL2VYEJqXF8KsGrRLn127yToMoMX8Gzsdet3qC3AtXt39zLAyzUCSijn5NSxCt4BDrYmcogH",
  "key25": "5VKkhs75ZSeobKnzp7vQF4URt81FmmuJ2ENy4YpcjH7psY1ctMLsQHDwEvnD4DnsDtL8iAjv3WB8a6dnsauB8WWX",
  "key26": "w4PPpXagcTrxQkg5i4Pz3vo77SxqaHBLRzxzqF2Tjpg5DtfjbbyXPTfwdP4znwegpmA3oo3Sr7uxeEfooJjE6uU",
  "key27": "3Nujzh2fdzgVx3j1QLPgPdc5Jmkmuy2ef3u3ftzZCkxHjLXcL72CvpS5vRGomvri7Q89Ywo5wXg2UhGiQuyib6Xa",
  "key28": "37DZd2JxPeiaw974EVEhLYPbhLhqpVfP9kK6eGLvtzBHMkDjPkY7FsNKXdeJkJxS5d2rNBjN6yRNqXi3fTcsnE7z",
  "key29": "3t2dfuWAEEcz8vvpWquKK4WeoZsN7LETPbcLt5pb7FjDNGLoGPUMj6FhaPuUy9x6u4wkxwSNob4tdcnSCCP9DCC6",
  "key30": "3vSjt6iWP8dyybAjqDzSEincFLp7817xvLN7LRMmdJyD4pN4fRqY3kvN4Q9g1keini8FhA4CUhttzs2yTBJyXuhJ",
  "key31": "4ahv8k1H44aXzrueCakWyrvNAemzgxrSAUGGvrmAGbeELFno1BKTP1k85uhHGDpLRFctD4fG6xLJk71LsPRxRqTT",
  "key32": "3hSsaqryKwREAb1JAq6P3DmKEKbeMKQ3vTMq2E8Yj6JtP1sKVrgUvVqviULcLXdYuoQrhAvTTsSnUnE3pfPbj1qF",
  "key33": "4JKmFat6o4ynRk9NiW1wZ5zCg3yRnUFKUyqcF7Yezs55G3TUqUtSPv7Agrw8iAGSwK5c7NHXU62Jh9aJag2tvDN7"
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
