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
    "5LrRovDBrtpngsnqUstLbSfdBiNBVp6mYd281X8DD1hnaixrbtDtCY5zFdtBHVAhRQUhWA8VpfPTXrrHN1rMoZDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGehXj52S4cg1k2UYWL6mz3NPu3SXBEvBfc9Kyh9hqcftEfjerGBNKhNpbHedCtH3yU5hACkaCjG8xwoDfF3jtE",
  "key1": "5TJWS5xjPze64ZPjjLuEqmknrqq6ahfbj4bsgsd29H1SMgpc18FcDcSBzvve4WxpzgdEb6KUmvVMuWejqiAJhaov",
  "key2": "FXFv789Nojt5DBMt238uEzaupaEmEyQ8DuPaHY5GHhop4nWUN6kJHj1Tq5KvWQaphCduv4KunCatamXfEdS8JNZ",
  "key3": "2iqC8EEzZpfsbey4iw2PgAV2NVdC3LY4Ati6DtEYq2RxqpGtyJyWT424dSJLkvw3MQ1KXAunPG7muHQW1WvrRda5",
  "key4": "4HrYsSCB4tomRejiJW3cdhc4F2aAHoabtXCU5wgcd9Xch99wmNLdGo23vBPa3RnJhcJZRmqfy4P85VHMygMX64Ec",
  "key5": "3MZqeJ1CAXX8xv7LARd5CfATxvWQsQsEwaR1wZE3613mJ3uXKU6bex2pTpxMs1eFojmNJjbCHkAWv5LsXNNMcyDQ",
  "key6": "5SAbbJJWHrUiDmynAxFJypyUQXePqGUwD6EeNbjKyppz12Zs4pTJnrAgmU56bP8bRbWVHBTcPvZBD2CjCv1VZkGV",
  "key7": "5qLats5HbtBH4HbCv7AQWu6P5L8cTb3Da3NEjfRrr6Y3LuWxKynFKuj6u92Q2vNhmADeqBn5swqyEVHnwfWaGDiT",
  "key8": "2jW5jY9izCfUUf8NGEnSiccQayevQLrgnkyup2xJ2UUsXWK3qixXaxTwhj1NuGVENYRybgX5vsdswEWcoDZjunj1",
  "key9": "51JcMBamuuBGyK53U5LW1kUmdGSJsqVrNmuMQRoJ1aNVwabtHhBz4ThNErQ4QhM4t6hMD7poAF1PiZkVpPJ8oKEh",
  "key10": "U2QzXvBqxjBiduUD9dqNWqb8DCAyNkoRJzXmkbfmCxih88k5ibrvrBWjHuXbCQ4N5kHvRQ8v2pk4ioL4oZkHtG2",
  "key11": "5Dw2HrFArTrutgzqPT4QYP6DLtwsoAfsobBkAdgy5ubh73ujDVZkpEDwhM6wBSEWQwC2eRZdVu52Y1Hd76qFdD65",
  "key12": "3RGjxnesB2fACSqxNVukdKBY6jkKAAr2Cin9FLopSgPfc4r5JM3XtCuWk5rB1PUsNtFZTd3bKG6m2kbV1WBvTTDJ",
  "key13": "HwW95LN2ZEkkyaVqG3YFXc8tBFr3CY5xmB7HhSRRoe58WsTifpYxUePf52WQTRMdaq3rouK4JCgFDmiEz9WnzB1",
  "key14": "5c8KcWUwbBGYdxDikG1QQxvGonULeAGAfUzXkpyE7uLFUssTvf6sDa9gruQqGLgpZGsRq2qyUcvUBNyaF6iYWFZH",
  "key15": "32uraDVLhtEHt8xYmL5T4FPyEjo4fAU1naRpXf48VdchtFHmnXGWLQLmYFBHykP4UhewuY4j6PC6F4SnR2HUNxRE",
  "key16": "4EeFy8ndh8Avsf4EbLWUR4M4HK4MeSE7cvZgXGPNTYBkyumx26MS6mZ6dnzYVHGoN1z3qT1wdCG8LZw7TkTgj8Jh",
  "key17": "3BnSFpiVEkyodg1aG3iTDKadh4xNVmf98qz5nQ6EkX2uCbA8mncKvArRDNMmkMBBWpSRkndP6ggxSidXJ61ZkiE5",
  "key18": "536bx9XBzEYcZxVEEZPh828E4BcKySQhd1DWRdDEe5U2fmy6ZXkuQbpDunmrXnhWhMp6tMm6FNPZTBEQgeXb4zC4",
  "key19": "35CVnuzFgTgXL3sALS8z12mYRFi1jp1iXdb2gEXtsrPkky1M6FzYMDfsT67vFiMrJbGxThj4iX5LxUMEUffV5Ka8",
  "key20": "5VMeTCX5LqBEc6XVQpogWn9CmbJrsy6HNfFxjLNcG6McqVAySD6mNqegFvHKXZDtpQk3CRoTLGunH4fjNmq6zHFQ",
  "key21": "2zAuuSoDk7Yn4ZiQMRc7vzrKEQgBn9rZSnRm6CU3LmT5NFKiEmTENtwNrtvuioeNSDGs6CBS87baqMLrmH2M2wsj",
  "key22": "4NsFXg9RzmpErHqbk2HSEW83zvcB5mjR8PuBDjAUKgDJoDe9TangPLTUNnz5739RxX1BaptUJnoLdMdpCEcZkrsF",
  "key23": "5NgXasWKcWugChMaqeApX2JRmKoRrtJQST66FXtXUPmhGjXQ4cS3UhS1cygwofZQiFnEGVQSv55N6Z7wQo8D4r7E",
  "key24": "3SFgGDNx2UCwdkNFZZLpbyx7TJwhDqn4guTdw7v9QXtvVyuc3h5sayRb6pcyfpiexqz2cAeyJt7N8qKc38vaXVRj",
  "key25": "bjTTkwQo8WRPXHfzFVSeA7jpiMcUZtwCMWQSdPTaBoREJ1EWbcRpevMPBvFiX2ZX7FE7u8aFfQgXeH3WJQjq46C",
  "key26": "2wynsgTHzBbkDrYR8CQyWRWCBdtobCJJHwgwCRzJbM1w2tcNhrfoyuA8G1iMcJjaPnB9q9whU2t6pjKHUCDFwSmQ",
  "key27": "282tzG3iVnTy8tdErxX5n4eoB2hBbFbqasUPGvUvvCyTgg3CDcXc3nkQF9v7g9yo3a9nksrjBX3QHShErrYBqoGV",
  "key28": "3z2KvhvEbpPRHaZfeMWPHZj4NBwEnnJAfStSos7kiHhpCYNQQoyMuGG7BJG8bWSb7BDrueL1Vv37iuVVFerEKXMD",
  "key29": "4Ua613dMNM5AnfjHJVvKMKTtb8yzfVUfLQaGTLh39wJwqHapbSNU7VeiiLZ16DHivmr7ik8XXoXcQe5x3YHDDYB7",
  "key30": "tNgJe8CXfAWJXJGaqczeUsqNN4tYAFMLyZjbf4BXLygu5WVKB7pdFjaDS9wb6LP5SCuNSvohR5dXtG9v5E6ahLT",
  "key31": "422G63nYUNFeK7tV1Q2z6zBG4FsAtmeZqcQLYWuHav89NaPyoXyEwwZxeqTWeuUJGx8wY6WGQYfsASdQ66TXSKiH",
  "key32": "3DZx2GJkjKeVntgVbSwKRYgak11cGE479xg4EjPvkiZsMdf6nkq84bKMWDzP73g2Kp5bWZBkgfjSk5fN3o5qpnLX",
  "key33": "2nLfSkf7QvGySREvqJ4BRBonz67azKxnUH3aNmMQRLb84W3xmXE5fgF4uqdKJE6LnjUvcSfG7B1wcysmPwrFupSQ",
  "key34": "2zcvuVSt2L81dLJs6AioXjCS89SoYM5qT94TgmxVtfqGYBYJFdQjwDnq4x8sMr6fPXADKqgDogzEx5s1kXPTJmPW",
  "key35": "2TU6kexkm7MBkU8Q2j4vHkoJ2rtuxcg61HtmRSwxEBMuzLLTivpEPyEnn1uWd4eDko2HQUCut62ueCtThsmwdy96",
  "key36": "4bge6PkRBC9sJ83pHsUNBRT9v6BRvHcorppeHUZM2XYft5QKoJfAnpL8UGyFiJaMHcgkUXsTdRXcgkxcHDRrYhvL"
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
