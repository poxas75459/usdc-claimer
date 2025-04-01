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
    "2zfvvbGDh6F9ebbDMj3GbqhtEvfxtaeEi6sCfbAeJutWyFRFFuK3E3Gxd9dK7JEXUXXAMgCQ4Vmh38drPcuiFdZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iDarPM3QZMsMEHg4y4ZTGko3faghudaEDha7FLJ9YwCEnyamBeDXMaq3q9cXK7QpJh1pKoz9EFJKVAkAvBAkDW9",
  "key1": "2ghmqKwJNdsVVr7z9dMcWyKdddFa2M35qRMQx8jzDSN7XfTRRGk1yQ6jFj9QaSXDh2aHZuU6apgkp8pq1AcEfps7",
  "key2": "4NAQLcWENh6Kz8dsNRoTvBuzSZjmdTBRf4yDJJd9RAS2eyT5Ree5keGzaJxeM7Btk5z1mSa3fn49ch4DpJt573Un",
  "key3": "3TrsLVEWsGJYGxsnmqJzv94pAiTsuGTgWEFWd98mjTpowENbM8T9XbRJj1AnV54UMPFVeuNeafATyMKDtf2nQaK8",
  "key4": "5BXmyHHKQzR2RcCQWnQ5Su7fx4i6JAG8dP2ZNJGCxpJGwYdWe5epdm8KAhvzCZmBx3S4YhALtYhkwGdFvq8GWuuT",
  "key5": "2benDk7Sfrdha8V2iEpm6nhkYJDVcyJdKV37PKWAefMEaR4qYaqXzcBT6d8aHs3fy3uUbLiZUf8BnMRk2og3qJ5c",
  "key6": "3GrTpmzfkoJWU6Df2K2cst5ygifaVw8ydoAh1e5c6etHx52MAXrzPxEmQEMseSqHqhBa81YyXSLrCfyzL7wW8dm4",
  "key7": "4j5hU4At9ZJeMWAvpuNBuPPHX7HgtUxyXccFBWXTCPqyHAFSLLNA7iuzHgSQp2LMqRmBiB4NjMntbwi1tF2eMUQb",
  "key8": "5YKB6dvx9F9zASgNpD1cTiDutKYGa31ieH8u5ypxbzNcMvA7ZWV1WAJuvBbKBcTujmhysKWenfThLdWFfgmD14Ny",
  "key9": "SkiBWMuQ33FVjqkN3rdpws8x6zHKgtXxxzBy6F7Tuj8NSZ2H8fHG3u6tiB5UNA8HosVs3CQKahTdwfojSz6CYjd",
  "key10": "3xHfv619UAmCMPq7YspLUD8fisCjakvsD4foHn8oQXQGoLL8fJ37qM5JW5i5zaBb67dCeTa8jzZkULZbdGeGs8ka",
  "key11": "479Kggmk85FzZku8mqiRR6QV6kKoesmBmztxYuBj6eJGgNAPoJuGS8XA4J5YSbnH8Nn74QjDFd52YosPnEm5JJef",
  "key12": "56ybQRxtRpp5kHbKp41p7RdabdL4fkcJ9tW2F7DpZdHyaQYwUwvtGmGeux5Cte8RutNLzuio9jQyftcBzr5XSBFS",
  "key13": "4RBVZUsRT2ZXzEvqp6y53bzihBeVAdBunFxTWXz7VFuNJ561FGkfQEzuDB1GiL8zA1SUFynqJGMtpX6Mxox75Y7P",
  "key14": "3Rkbt1Xn2NKantb8C1eMXkWiAdqTMxYYGq5PV1wrEQCgbMugmF852ta8hNhzQS97yjDTEtxaBm886pW9okCVKXH4",
  "key15": "54CsteoqM8b9B6en1xjsWgiUShLc3Mu4cBX4unmTYAKTSy6gGPaEKv5ctURwyWWB5bC9r6ugLcidKfghhW4PWL1t",
  "key16": "3oYTZqC4N1iuzEXma7z62nmXSNzwbAGxRk8q8hjMSZRU5gAyUr7gHGS8mTsCY13JduBALgjPQejV86o5Js26LXxo",
  "key17": "4S5cSWm8GQjiKGGiMS4H1d3Y2Xtg9AwoUSH4a9oSKiMkeVHJn5fTS3Kgsxg2S6Kky1iEpK2uDYwQ1jQSp1wJauFi",
  "key18": "2zh5KgM5LwyDXbvMHi9FY1fHipStFhqxejzMiz1gTcdXJxnZ7b6MngNpCba6gLhebkk2bgsLcC2uSbmvhD3TnKiN",
  "key19": "5M5PZotCBz5QPRwwAyLqK4vvhXBk1gcL4fJnYEH9aiLoeAYFXN7DmPpSqDGHeavFiQtvs7Nk1Lv3fN5JFv69giHQ",
  "key20": "4NBrWm4y31oVEQfejdtDW3RJ3Vmaedht6zRkQkXXxdSgPV7eMUzkfDbmsc6jxxmeaHQsAEzcQgBLs4RZ12UJrzQZ",
  "key21": "66hfKwbJRxvjhY3eFz13m6fJScGs7qCQmjhgmUrUz4Ec5Dnj5nN5P4JvaMYkAjoTSsRX2XRrvAPTgBMPWfBrmKA",
  "key22": "5vVbto9tUrYSKABUpPq6Mj5RxwNazj7GaKtbPDTpf9CGRJ5Z9z1xADap362a2EFdjtrh9GuAWKuyehWKeCBfnETK",
  "key23": "4HrUfCxYFr9HptUx28RiowXjmR6nvZmEXX5XEpijPnqrLNoCXhxrW6empZ4223BY8hDyAEaSrg4f8M9sMV4Bh4Ye",
  "key24": "39rVm7iZndmcrt2gZ5tt7ByMBGXqjRyjkSfLg6z9PugW6udNufWVEgdWwjYDr3g68VEcTYu59kdQo4myST47bQwJ",
  "key25": "5Ajq89Sw6QAYH8KSdEzLco3FyeWnbcG925RiF7EyNCXMPkiC4z79uLWb12P5zdsVX148uvZhrxNGs9zpW6UhE3h9",
  "key26": "5egs1X3nuLQ3jQb5cTuzPasrEkhrZJBTWxjwMxqedHEKQewdkG7Xw3m47VCE6x2HhxoiZ6JWqbJXQKfUpSx67x7A",
  "key27": "cmETMdAh6UqgXwxSTft1f3MTbbz14oqWHXxUcRdaJ2KhcAPKnmKxd42Qcianxm2F4Z7P3X8twBhxBR5rDNFBLty",
  "key28": "57SnyLUg8vYYoBcyVkcTqJZtoS4grWjDZhd2teM552AaTtCNxscrsYWTHrVTeoUYvmFEo2geVHa3Y7LosfdrbRDx",
  "key29": "2VFAPqdCt8nfkhAGs3gvTXGjpmguf8XmwtScU1JKB8aKPz8dYrJXXgsxkY3XrEYZFybwf8LsmVR8PXXeuHduS7k2",
  "key30": "93UMmQcYQXdB8ajxvkAygXLkCCNPg2YfSFu9bFAtFTHgkW1kGZLX6tV4dDMDGhMfbVsE6EYTkz6DC8LvxmhiMNr",
  "key31": "4V4qfqeAPB9xs9YvRLSPPCw5Vi3ogCFv8QexhgfjRhs1VZ8CeLvUp7fbg8cQbAVNaz1cYqAEPioHQeZ74DTnvZdZ",
  "key32": "24uvw6mLMqcyawGHMPhVewyfsyrZhw8sT1kWHQo9ScNbiykGw6QoSd2GvFFDxyfsgXYxUxaL9tLghDhtcLB5o4Uv",
  "key33": "38ziZund6ariPPwt9xdSWcr4KNrq5JsiRTks7bZ8xdjooaUsyyZbGDzwWKEQ2QguoGbM16H4usZQz1hmzcF5Jxvk",
  "key34": "4h6dcaGZJJb3Zx1X9jwgSuLQp2HUvD83ZEbqp3637tMTEs2D4xzX48E76oc69Vv9VD9bHKVxXGgVnqVtg3NBfyj8",
  "key35": "27rMdK1Ke7aqqD2XLpkZqQvpwfuQrrNhTy8YGow2HTUjkxK2khDV5xcGpxHMhofpFX3oD1SPCsA4KHjBqdBJernn",
  "key36": "3dRC9jVLwutXvoFHKnFoNdnpBneR3Ew5ksEtyhz29pik6GLEtFUgp9Cvxkm9yXEDRJiCDMuiDZHXY6mEHpgwaT5C",
  "key37": "23vxNAvyRuAxjkm2CNsJzUbfoQY4DpeFHEvZgjPsLoUqsa4XYHD75R1TZPMPc1aswPTzi1Ed3Wh96x7CRr7gStTN",
  "key38": "2UGa68LAKWTVPuAYUjcPVeLNm7nNci9MQRY9RHmpVQXzTFra18QqT7Vns5X4KF5NxWmP2XeYGFu7oaGjEt8eFNvb",
  "key39": "d1feVBMWm8tX3DDYKWhmLYtQKaKfG32kgYo12iXra5UJb1Vtz54k9sNTqKXZSkuCdu5kKUT2Zh8Sx2DAS6vCtax",
  "key40": "q4CjNkk8r3gehrV35sTaiRVXNGrq6LGJfEwaJBcJZ6DvyEqGmjMY3E633bfBfs8JJg8XJPPwTDLYzHNDJSX7Tyb",
  "key41": "64oq8hUyRoQQeQzFJa7t3S5q98wySeeRkv6bzJhfEwBakYhTbZxxcFKjAAcbdju2qr75hWtX1zugXCYmazWR8WtV",
  "key42": "2rzwwiiRLy2R7LpFyyinDdeznhnY5HdF5oNUN1K86jDGNVRmHjxg8GZr76sapMSLCoicWd9AHHUpmMhissiDApCU"
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
