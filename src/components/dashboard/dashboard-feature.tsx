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
    "64pn9FK7gWVRNr7Uj6EpL54a9369X9yDP291V7VZPyRRdvkeBVDoT32wNkUNEs6i31t4PLnzs9P2npgganW7Wgf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RT6BftNvMPLdCCwfDUZJ1BM7ipyyjDxFx9oGtWUfxKjpD4Ax2Wd5ezYYs67MLnk6e6ibos1BjmbaZbTA2HaTvqJ",
  "key1": "3pJ9pJrcdZ9K17TuZVrnp5X2UCPTje87ZJEj2FWTbmEDyyq57UW3n66YoN8FfjzTYyLBDXKLMuCeypbwt2DH2PjM",
  "key2": "3FGDDRihQSEnvRNGBAX1HtYacniDg1TetpFz2y4mB7gjNBZLeBqubcR2t7xDCPJU5FL8qLqpQ3TTSzRCzUeHZyLZ",
  "key3": "3n2NU9da6hNocojABpsUFo3kzsE6XK7fcbZao3rAkehTCtAgoaSk8qyuagdR8avGN6WhcfCi6DnDdU9DLKnTYg4j",
  "key4": "48n5bQnY3FR65Wbgoaq8RPNbAhB9Jw43YigV116KvduVVYwa3V7t8Z9H7fTXSgHb3fjgJvrT2D3AUfMemTdg4U4s",
  "key5": "9yZxe9Rwdbdsf6cFRCxNqgW8vv8VaL42Q9tSwZwm9ivjfYNLTQB9QcXFgYZ7NBPKFdL4XFDK1QZFNUEa8JK5umh",
  "key6": "41U8qpodcrRMY3JSgQZzpbEUfaeg1M5Zxw253bwoTBg1b57eCV38nkQEP64ajXacyTFoTVVRbYwUAaJjtxQnpJYx",
  "key7": "5y77PkRUtHWu6iWApciz3LgjqpN2Dh88QXBqGsaEHRF6Pq2GLAixzAo2KLPWq8wVdLrYb8Mecx4bApQGsoZrPAKM",
  "key8": "2R8ZLaVkBab2sC2J9SsGvvYHWztXiHJpmdD44zJYEpVCA9DXW7HPUPU1Acizw7nfGhszbT1nFsFkFTedGsdECBUZ",
  "key9": "51EGyNXGLyzNv2d4Bi8mTfnUYmDUwCp5oWBT5gbynSVxaw7xoJVGySDU2FfSmC5Dvke9BKy7FLMm9MUXeFvM8kdn",
  "key10": "2UwntrAo9wAucYfKPRz2jACshLBUsxgmgDACrPtMmDrUpcTLRSg4VKwh6pVyHkG7wyJLHf3kQytEEcYRE6KTgYUC",
  "key11": "5KsEqTG4SvEN95KcH6Kxx2zFZUFD8x5vfQrP26Ai8zkV65bYBqiEHQnGptwbbSNbJpoUdeMH4L539Yg4eH6FLWkE",
  "key12": "4TvWVwqeoC7rPfufKAU1YeBCKjyzuy9ZVwFFxy16KdwpA8ct3sGvVwQkwKbjFpDWuwJ43KQVG64Biaua6sg2VKVz",
  "key13": "4rALjGfUAFcfPWRDZNACdJACJfYZUoX2V9ZFjT17FWrQE4NFWGqv35eV77h6sJfaXWEHQeMtfKSatTcivgGF543h",
  "key14": "2h3NYg9cnJbERCkfHfBqgCTQyo6rSaEfXHQ6sU3X4xZnAPzwrhuDhs232V9WXtWZ4CVjz4LCbMVxVgTZsMyJxJYR",
  "key15": "4JQSV4T27ZkLqE6yZRnGg7bukb7rYXQqzDm98nrfQXdha4nczfAdGKEzmMhDdvaFqZ549NnmnKgzPEUff3KwXc9J",
  "key16": "PDwAPLHjAcELuv2NYzi9CCE7AvCqfk6BanfEW3j653KBLnDCYjLzTzt8rx1bFSJM72eEWGQ7LomB8u181ppTyze",
  "key17": "4RzWPVDLFDtuLHaxyTWV7yEG6MtgcWuayW161NWetLntaTZDWKqtTGx4zpeiDwpXRgDM8FUjXsjAz5s87EVTPZHS",
  "key18": "8CvX3KaiUuqi84yu8jZHt5nBU4iULk2hviDYVpuTwKyMrFiWFEnxyQbTFo6U5jLUR4bHdcfwMNAHKhfTGAHgSwd",
  "key19": "5179UC9jYMiLBYULi3v7xWH8fb1NjeCnmH92mQaTxJYostQZBnQAiMJKR6DFcWof1sQtMT8y8vu2oDKUTGVgkUip",
  "key20": "XV4TpFftgMKymtt3GUpEg6wsg3XVTU2LCmfhYMRXGhsHmLGrcGQHEyoWyjCaLnSmKUq2VH6DptboU2EhLHNBMzM",
  "key21": "5hoZi1GJSfiQaU4v7HBa8uVMXE8A2eULpEKJtu9doE4ysdG98RC3SVhss9tvGXN6zRXBQsZshShmqefHmRzCMfzu",
  "key22": "41HzyHF48KmN6DKrVWkx7EPHzhKRfoT2722hMBY5DjZ8ThvpxEWhFd5X3uA1jChC3P4MfRNdoDM8A2NarpurT1Kk",
  "key23": "4PYr1BhAi9CcJhp4LYi3TEb7KgucGfYbwQRYwvAi7F4JgKsXM6FAJXiwgZtSqrf8PiNFvk8rVvdcWUhFdfVxbt4b",
  "key24": "2pHZHcErbto2UosRUKo4oRDNJvghGg2Ksujz5fDsuyZpzKrDzB4edqk3uty4iiJECYTasTH18XStLjUsKkEuahbU",
  "key25": "5BVo3hkGPoAb3yybbn4Xp598kwEHFUAjCeXNczUsnvdduZ9JoWPwQk93uetPBFsqveRjJaE4gFMFm7FJL8Fx1rvq",
  "key26": "3cE67VNFWgF2Gpab6paHZuonVaHgcqHcsveNhabTTQh2KppNdrCeNCSX42Lp27S8sVK8BkmJJxAzQyRoJHLrkR56",
  "key27": "4TLYjkh4cFpVJ2fuCfnHgSnuhiBSoVmkHXgXQNEUM8Wsjk94U3JFhQfXhewsqUFJh8aJjqKai6TCFw2aqswHvyB",
  "key28": "2mEVTq1Bi1VTtm6SqLHVzMN2qXHCXeXCYynUMQ5ztKF5GFPVkGbDWfU8eF96qGgnVjDRJKTt2QafHM6AQjMhL32N",
  "key29": "dekCG5b9VKnPrybxfZYUzhvWkQuKtaantsX4BkpVxCzZRtS2UJpGSvqrtKtiAneToft2AWYR9v6DtbU1GmvdSWN",
  "key30": "2XF5Mp67QyxLhVwKR1KDX7pucFNK3WHCoJNX76g8wJCEvHu4SvXkbAuiwe4cmTGbWC6zf9CF3qhEpeR38wZ7Rq3Z",
  "key31": "5NAbBJ5iU4H6LnGnW8r7yKji9awLL7VM834z25YyFjLz6qtYksuTzyN26TNUrHaDkWZzGWa8dbDMAUMDR4rrJDig",
  "key32": "iGpMejCG9x3udeoHDyxFgitY8v7uT3RVFp2gpzJnQYmeFHhjsBjjKF3Q3rtdbdgJbMP8k7jRQFxPtjbZ2UEZ82v",
  "key33": "4mdX5TPho3nm1aJsuGJWdfbAYz8EtNRQvvSP9VN6oLnZLmRMzbUT1EcWcf9d6c6rdq45Fp55wDB5b5qYVWnqrNCv",
  "key34": "5iJyuX5hMthqNZLU7mEEKnGqukPrxhGMBY795RPbyzChh96U235DqakAcoGmhnoBQu6iqB1WXtGNME8rXRWnNQTw",
  "key35": "5C7hP25KmK3rNV7MT28CxvT7JhijCZfSKfmRqoKg9CeKCDHnpKEm7BAi2dtRJBRpPcwscgoSuZMQznS7Uj9oWUcc",
  "key36": "4cJkBMU4wkc1eUbekipwEF9nvMudDyensuL5FbujqMvwYZrwrZa9dtTEBoMEMJAkr8fWPNGsqyYU8Ec7p9FS1vSa",
  "key37": "5ffPnkobCJ7xdsPvorAAEJn27xmmBbqkMaAAiPdd14UmbioNX5H99vZpPkwKJDc9qHSaQ4A5NZFLQXD1WDuorXVP",
  "key38": "34YdcHbADxhTpCDffEvbrcm8yqF5XMNZchXp865w3j96rV34F6F3hsUhb37daRJuL14YeLpSypeA29SujGeSNKHd",
  "key39": "3HvPvxGu59w3Gh6P4QmeB5H8X6yAHGaxynNLKou2qb5FZjco7dgE6Tzhyes4eFEgZ645TsHgotKRjZS3jcLc3pet",
  "key40": "27Cr44KijAooKT4QQgE4REqZtASMiPeZErNfnRWKRSnN2fexYS5FpX1TnutnRpJM7iU4Bf5NcdHGCFjDuFe6pqDQ",
  "key41": "363xk5y1DqQpdeKACQVNPRMmPPYaTJwjtwdywPivBkuH9NFwu5LXLFKMiUL72DJP8Kg8RqpywrXBAL3a85pUYgtu",
  "key42": "4WwKf2WonGui89nbJYLbnPAFU23ARGqjid55NPLeJHu4pUG13pCVVv5T5AhbmEwyqr67nQcbBixzUdc7SSvz4s6k",
  "key43": "5oj7vbKevh3g7q43uUqvnUkeeVZdeXFSHnDxiPf3SyQUYumH6BvV2EzyYNapXgD2KfXyp159vYzV2WkhL2pPK3Tq",
  "key44": "3BPK33DNMCVSsjEbgzheVo4AM3LDgEDSYGDJHCnHkoJ8TUNZv8hmofBFupkPXeVRWzEeMGEnFizvqETKafa7Ge94",
  "key45": "QStYyARZmGM2qsFLvnEGqrxcG4HJFcAG2vUsGyLXUua2SbBBJyJPS7ugjVUmK67MhZq46xJJ2S6btwiApAjtcYW",
  "key46": "67brFeCzVV6um35ibg6g4sGG9nMLfAS5gT2sb9Ai3aEPuh3w7CrjFgj5huEikYQvcmXb7ncW73YoUoE4fHgryeQv",
  "key47": "5Dt5Roa2mm8A3bgxYshfK2VXmZhDKj8Qq3NmfLi1x4QZ9ZDict2A4xZyQ5qySqrPGcKZmVy4Fqj1d75r19FTzq5u",
  "key48": "bQbgZRMdc6BspcSofNQEbYo5Ni9v59hhc9YkaJtWT1VXpGqrYY4RKUse3PR8bMczEPcHxwCGaVDkMCpzZZtMRBz",
  "key49": "3JR6D5c1fYosY8QywkfPLxFfgtM4PnKpiwDGoLVsc64TefXyJ2fmVDEqb6DVtEyDvZR3kcUTKsPhurt3qzaNM9ob"
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
