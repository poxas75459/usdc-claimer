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
    "3igUxBkUW3t9dPKCKZwNgXvf9YUAnesEEeZMoX1j2kCCGDwa8MAvfVRKeTvwQb2qGbvENn1cEWxtzp97PaSqJP2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9PbgpVczjBzriFqbgjR7soLEVUPaHSU9rmJZVowQeyA9gquUE5skeje477C2yqUhfUuBNNmWdhtFCMJed4KG45s",
  "key1": "Fx1euZS3F2p7GdeqozECcTmurtFfHfh6Jod5Lp3UgPKFbXG5HkNPgteWKXLEyLsR5G2RQPZradi1GL4d683H9zv",
  "key2": "34JzYPHCmbSd8kRme6SRNqbDkiSqZiTw8AccFagk6EGMAnUzBdkFF2bEeBJF7ziEQF92i4g1YcMTb3yxA6SK1MBk",
  "key3": "65gJmTWbfRz5z5sQBsywFCXXmMiWfdNsuav76Xk4aUmeav6ufA6vKZjy8skDa8txcqSMzV8Xd2tGa5uPdxCUWAQr",
  "key4": "5xatysx4PNsyi7hQf8zA74HDCREoiTeCQzL3zCRZzSaBj1F7eeVZkK2ivsypNVn2NFWkCuSyqjNzWmpH4j6SXopP",
  "key5": "5bGz1o5Vysy3p232dbPW7eCZ367HBHDa8UftCxX7Au5LiWY16qgcpjTw4xTJAmFmPaKvLa7aPnfXNapcV8QKoA7d",
  "key6": "4RdfsQaxXme54cCAbqjdoVi8uGHUMVPtTUwupMaHhL3bi5CowBfAWxaDV1wx9MhcQkKwPwSZB8A7tUZx7mNjeVkK",
  "key7": "wQryp6Ck7rDdsdh69kJECdBa58D4jkHCVNYPMAWK1C4wyhJ7hzpWiPMbrhoYD9fK8LKZqBPzGKhujurX75VKJEM",
  "key8": "FURqaDiCehEpRGWZDgxVSdPrJEvjnGFZeWBvJYzUXUV5FywcNkagf3cnzvJLvPcoqa7VPXwHWBwcYcQ5VMBZTh1",
  "key9": "4HEKco4bCTbFWBoa3X2tFtW6Nce5oWqqThQCFnrQaaWrxbuENh76U5i4uyc6wrhdd6ZouDeoUBkr54Kk6dH1ST91",
  "key10": "3tVRhXVUEMd2KAxgqC8Ks4URtttPVFe6EU6jpSuTcDLo3td8bFCct7DHk38U8CMhRUfn8etgHUDux27pZ59owtJ9",
  "key11": "5dFWq1Ukvs1REsF5GBJhrchvkYB6HDGrusMwPZb35a8NyzpQGrzcrqWntR4yggYMWho6aXzoGmHigdTyVY5iJJtm",
  "key12": "4w9UYQqyfQKH1eNGPczb5Amw6qoWpN41D22DnPKPfutifHuqYzKGYKqeT4QwXtzPaUxue2LkLqYsiiPqGSemCqhR",
  "key13": "TrRo4iKqGsffwpHM8zFi2CYLdsLU8rzLUCZJi42jakaTzSqEo3LLejaeX7faTZYmoJ6SJYLh5za9LDSFuqD3ybF",
  "key14": "4gf5ACyurQSDXyzVLcb5SVurC7881frY3Xbf8zz9jmWSGoah5T6Z4nR8bc8wQcA2DCcEK7GH49TYb6teYAy4bCVS",
  "key15": "RmxrsFXJkyQScd9VnXpJ4W5f9gRvzDqxqSkcey21DqPSdtF38nKjfjAUr88ZgBCrDNUf1rQiZVrZsEPS9Eb2nLh",
  "key16": "FzpAWaLXnQJCUu3vzJpWRRTjCXjeNeQ6Qwajh9NstshmbRA8Y92KmZFYyui2fNwidJYEU87Ty9huSM25erunqRj",
  "key17": "4Cs9qFxGGVcsCkTEhLETVYhiQs6AZan6tPyYwbYi6B9c5ST17oAY64dizEiMvJk3orgaPfuz7jq8FmvSoMnwLSbv",
  "key18": "2mrMLpfWGSVjmzsQWuQ2yyzEwmh6SrptUeDpCvLMDDRGXcHkQaWgZZa6ZkH1AW1Fh2gJimxWEimiqJcHHRPUPc4a",
  "key19": "5ST857uBh87m6GN8Sy7LRWBBgvhjjVSxc7KV1GHZvjGEB1qhPwh9EbNNwHWNkdKrUYhgerXjki5cKuNQZiFyjVoU",
  "key20": "2ukqgH2ckfLjbWzRoj6YFTPZKS6rTSXarsJXQnaxf3mUXLbvb7EVdreVXTLyt9G21VKWRqVDYbY4DxBRUgXM2E3w",
  "key21": "3cHjKxYBuBeUxVuPWQ55NqB7iNDHieyS2uGrV2mXvrWDuB8Us69H2AJQ5KGKwEUXBvmYQmmXXLHaaZJgbiZGSYik",
  "key22": "5JUM5a99PnR8H88dJpYjbJC7tKMqJ9rqeQQirqEoCFTChmuetmKXPz1FQKsKpRW7MGKYLsCQT9VVoe1HHRTawJ3b",
  "key23": "3f5azdYJxV7yH3vuxcBqTCfScLfxBEPUR6DBLZZWEYrPzYbttZ1GgP58FPNfNNw3PzzS1ip5jMoHc57bYQ2BXR5c",
  "key24": "5LJtSWEMTyYTQEoVq2f7xrWPNrgfpXEjwYme6tmtvvnJadqQBYmAPkhJK8dNXa4SoUc2PfffmP1tyqmmBtottdnz",
  "key25": "5T41QsQPFoedX5THitDqRFU4Hd7wThVChtvKYtE154CnpamaP8tiHcvs4S9jEfKkTuZyYEKbh5z82EpMr1F4keNn",
  "key26": "4ikJyXS6Lb61veHM3qvGdbViyy9cU5kbT5VU6sRaLpqZ6AD9uL6H4TWQngbZY8rSiQMREjaUa93XXq1G4LyN3k7b",
  "key27": "2Yn4BEBo4dLS8yGRedAHZ6gtwwqguQvdZ6CiRSJoym5wtb2ddAKPTvBux94SRssmc3SQQL73mKPCDDdoKQxYwory",
  "key28": "4msimgMpC2zjZfX39ZUc41hx9uk4rxCd4aCLT1S8ACrhAGb9gdtaBxDjV1muPTNYhHQw1KyXBTYV67A5m37QDDx3",
  "key29": "3Hoe2gA2Yb7eJ49M47XuKmFBgMiHQuNvBLR6DWVz3ZWqzxo6ZoWqjBFmwmB4NeEFUnAGFt1hSf9VzE1ezegGBhHY",
  "key30": "3UV9szrT9ztf9PXZy1Pdm2p5LDmkyg51TVXZnxXVDy4iHHv1WKCm3q2kjYvLcG3Cy3uLS24jTc9HdWMK2HhsTfmw",
  "key31": "4tUv1Z9WyTiuLL797at4hHazosSENJRLFoHVfG473ADpmKT72uzKYqnE8tGi4U6iTMoVv4CBJpW5W8zRTGiN8pCt",
  "key32": "4qU4gx9BSQvrjs82oTvLfnhHY9k7PdSm24DJpZ69tXHuFQsyRb6jMUygYpLjKhZDHvyhs2Zj2fzQMQHhS9daKgJu",
  "key33": "Hu9jabJpaKvdKxFhsC45k7W5LJCFGqXYPGFQRyYWVASpyoarsQCrDr1DLzJVXEXjN92FKgfw2U8U9v5hunJ8xKF",
  "key34": "3fMFBexVrDg13tKDwyHVsoN8YUyKykHztY1CTfk6SUkgGJVVaWFRmVMavX8ophszyySFtsGxafqUyJ85EdpcqtKf",
  "key35": "3bp9tW9W2TQ389HqQGMVzuX1GQzBzGrPdHM6czM5wzYXQcGt9dn59CChtSa5aUuyJkyZftSbSX4QH91iL1t6FJ8k",
  "key36": "4JV4yHiYNYsWSxB7RYqrzPKpHvdbotRtuaCVbv99qpYsoBP9sCpbbBEGvxb25C1pEw6gGyhV89VHGGvzGKdTq3eT",
  "key37": "2pbgAXbEPv1rrkZpYBmZvK1KXt9xV4hDFx1kRJPMCWXzzb6pJfxBvVa8zr3GgJVoxEFPYSRcLV2iLsam1iTc2GJz",
  "key38": "5Zbvr9qYWaRdpzYBYFNj3dNQ2go2c9JDnTU6q5jVRwu6dzWu4iyPZKGn7XwnzHdj8gdzoAMjRq1NtxTiUkFuuX4D",
  "key39": "gv5wt8BFA7dEnhxXFEkjpujJxd6KXGAcV5nJmUsMdXYSJBWDmM36dDrEb6bUiuhCtjfp4tmEdxoyh2Qq6ZQMdRA",
  "key40": "5oMxqqN3VwmUseCcFRZVB5MChfgNm1LAeSoUnQYiESGCRJ7AZQamHyKGXm72BmLLMTmnjkMmKhRJsHxpPvkMFeNe",
  "key41": "3VxCBjznEQSPjc5zud5PsZPFL4BpcMqgtos1jQKgfi5auWeAPYfeFUV2Nk1AA8EgjXdmGhnyACQG9Nthr3s3shVR",
  "key42": "3mcAQhD842wNvS5iApvBPBp7xDJjsgcRomiKdrQX4WeFBLrxfn1ThH1Rx2BVmYW8Ks1ax8nStxiBefDFQiCTGYMR",
  "key43": "2y63rUaqtkXdorBaLeGa3gEEMyquEHEGGr2m77gSsSgPpV44vdE6ab3mjwB6rXo3mau3SxWeJ7m1VaC9Eyf5Baba",
  "key44": "5dVxwXzJGti6vjCF7wZC33gnBk9TiQ2QhEHBRE3wVPaXC3fAQEVXyKKWqcrXRXPmDREpcpehy7v6f7KUtnhfEG8A",
  "key45": "C5ED584CiniRQPCjDuw6dnRbvdmUyx6SdfzQKbebh8LrTzLPEoUGy1zBZZRcsB93vTaBaXAXp9EcZBmMKRJGtBH",
  "key46": "35nTcRy119QhRJKdVpuN9CHNrwj7JH65KSKSAv5BU2yjPXnsjKJ4MsJbzgeNUDCFvd4sZZXAVeGn3B4qNwRRBXBu",
  "key47": "v81nERQtJTGdrDjqN3EV9tnGEwbhmBftZvtJjksMHPRiCMPvNsFrPmn1MukJ82dMDutgiTivhQdh59yGsZnq59N",
  "key48": "2sTRqhL1qToC8PBEJnHEmZNBgXT6iwordk3Pg86xZHe8HJvfV4fJyzY4zJXHJEFNGLeWjgK7Y5jMW8RssX7sFHdE",
  "key49": "5zXTpG6YsXuwtBfUyziWQ3VvjGGXDCzvo8pFbjVFxYXm2GdH4CpVriCkgxwV89W55ufQkH7t8rBeLs9fKnrPyQ72"
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
