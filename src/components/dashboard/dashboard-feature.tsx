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
    "5BKNH5gvHNcZZr31kW28zAdHmFfdoxWibjuYyj2tMBLSvDxKndHLeYwX6rcuWxsMafNdcXXxbEzynh8C8sPNfWoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TDE4D8jBe3WFujmJLWCChZRg581zxpB9FakAydZvamKmtfvJ4KdAL3nPuZ6BGmRf8kePoW53rARedSxLxuFwK28",
  "key1": "4FQ7L3H6cKrQUBcqZDYxo2h1wBqGmtbsUDanYMS8LKpvorCvXXYneedKXSt2NjpAzAufZcsZDdgjLagx7aRLS5Wz",
  "key2": "4KEcCKqsrPBQVtU42PZg2pZj4X3TVo9QS2j5UvCAWdr5X1gcvKKD1JVjzLt12ch2qdvoeqizB2qHwoVKncoR2hob",
  "key3": "VSFEKjMn4ZcdgwoUabJPmss4Vg5LeYPVn7kFg8MeS3BFA5NvzyYm2ntHtXqaT2BKqirDZwYiCKJonCzcGXajBEz",
  "key4": "2WWQuPVNbjJkZaHnauuA4YbpWcub42po1NEGGP6JtfZJdLxztF3FFRpQKaVzzJyNUi7WYmnyVwFzYUvccf8kdtFX",
  "key5": "4rjznihkK7pVCKFzk3s3iXpmwx6nawGrcvyAxPiPu2NtsjgkaMNGnRWYZtgmtsHEGJCLqohbZmtyGGncteCp9Gzr",
  "key6": "2DAiyxX2gLLFdubX25XSuWgbYEVYdYdk4MgdmakvR4Fs4fzfsEkG1q5MGLL1pWPPXVtcY4fmzSJkUtSPoYuZybRJ",
  "key7": "66y2sdHBVKEvHrufFajsNfMSLwgAx8FKGvndZ25ZDmuyEesmJNeyvTQKWHmdd4kwjyhDpMDkUQ3RZJM4NBAYF1v5",
  "key8": "4AScdf8ePzDv4ELWLTZGjQk9MACunm3LrJwRixLuMsuHsrzg47saBipuHV1j8ctyWkdnnZmbg7kLWZvnMssAvQvR",
  "key9": "1cQ7pkA4bKLooTNWSuon2UrDc6Yho9LDt2fy87FwtmF5JqnUSCH3P5LYTo5URH24GQ8rwCo3Bsiw2GssARZWz7F",
  "key10": "4CwBYNeKPPAGswMVdRBJ8aSyajk8CjFgLsrxSfj5KKhHgUJVpQyLBF8wwVKoPGiBkc18DUDGALxpFx4GKk8XX77j",
  "key11": "3kYGDCcji555wuEDGJoB1PsnWHkDWNhuN7NvpC1Y1xtf3QjXUz2aZWTZHqsJei7XSRjHxNw9kYm1TNxhUA7zzNs9",
  "key12": "4GuCUAgrCKEmhyJg8gZT6wTm3PnMSnR7SLuX6UyP41kMpi46Q19y7jTLC6KynDWJ8cRp3VCxdEBWce291VR7o9fx",
  "key13": "4x97VyknLVGC2AQHRXBDcTULLztgyHXHJxnmjybusQEKiemXTA9ZHRDia6UKWAcJ9hfKaBeDngUZk2GwrNFLQwg4",
  "key14": "4JchH2wH268d2eARNYqrH1fnPee88XuusazbCnmW9JKu4vDB86nAYRfivvJaHvsZxRosqnT4cvQM2maxQRB826yG",
  "key15": "4rEoKDDAHXsJA43w9gNkUTgKntYBa1iH5v7RUCAfv6b76L9AbWQ8D5dxGVgCnk1KUtMAq68QNk4vecBam5YpWiVM",
  "key16": "cFAKLZJDCYjNBibH6esrS3HmLSkkXwhmf6CkiSpow3v3WZvuPevoCQQrMUTh52oTYRbEEDFmJfBgVf7tj9g5eaC",
  "key17": "2ecJm6xhKV7aCv125s8HyDvtzHuQVD8aPzMPLTrKFevwJ2gJEU3qAQodHayMBstDnn7hEDnyp8P7mJWYJUFNWut6",
  "key18": "5JKqxbx14Q753zbzRKd8P3b3Kuen1Q9fWca1U5ndW5gmsCowLKyjPHXQoUE9s92NsbJzpLzQ9VTq3XxQ4NZEZopa",
  "key19": "3okyct9N2wXT1tf9oGuE39M1v7E7enVtxquef93Dpm4XR2k3t1bgU83zUUn5q8dAtGbfdnvAHrB4GhrQUH6LG5Gv",
  "key20": "5x3k6DAUbP8JuiUm9Ahwfvp4M7n2Qa2CbADKmBmwBShFzc657CpA6rhvwYZwjnVM6SxGvfR9prtAQ4Qv1wSpCqe",
  "key21": "5deT6uBpRVCxdQK73CShNoNjfikEP3Md9QFR5xkF5zmQeW6drPADGE6T5utqymcaZycVGVFX1N8aSNcgtiST4ShG",
  "key22": "5Y73N1ctBvL4d8ioueWL77Mzro6dWW3o6ae6sDGLjQaDskDwMTP4f6hRttT7aK91aF1A6sNUVx6RhMDvvuKpg9N4",
  "key23": "8RwFF2hgFbUJGXrj9kUbq9HHAthjPJieRsN7TdXA41MegjFismUfqhP96682FNLXcexrdnpHzUiivBe8vP2odig",
  "key24": "2w82xW6LXn4znxiAAvTV3n7CTGmC8Hpzo5wwc3U3oeiSbQRtcDHmxRgSsFQy8W9maPUnPtaK7oXtiGdfRGH12Axt",
  "key25": "r9WiDJZJtmVX28MmbfkAXkziR5no1qAcy3eWZGxzdyTJTXiYLjeMjKcRSCXQUo2EB5k4qabS3br8uYnD31LwUte",
  "key26": "2dfSrB3vPWGasKkMdHf9CWEgwx8mLjPnjXwXZQ26bMpxv4wxLtiHEaTh3MejitfDWPxNqwSipL1o8Q5qF1oxLnEj",
  "key27": "2kJufoYngPnNQwRBzj27RFRH7ge8GEBoGajNUwVyAgAEy9683H3DHvy4a4u39ToUQyTGxC1hDvsAUy74E2QgoAZZ",
  "key28": "CCa6QTd57HsYJQR95ntUBQUuyGJsqaUBwiDpiGU1MQ3Y2BNUDZqDGZRq6SUvp2QUgemzb9CccPU7LE45hGGRFjZ",
  "key29": "5whTnoTpwxVJFHXMqLuDDfXn4xhcCG4NpT8VLFt92N2WMMUwoBFTLxEMb4SC5TcTgGLHvj4MUjviSz8PnCnAyJz5",
  "key30": "27PANTvXMcE3y8eDvXcw5RQz56R8gedZqg2d5E3mPCB34v8b9H2eoWQXowZa2SefKUFoB3MvKQzABtBnoDYLJn1A",
  "key31": "4c1VrpK2QURyfG5HDzA7qV66kwX2h7czRzMNVKKEQAT8eK3Ft8eFRfdQ5ruZEEFauv6VCEEk8rxVPdjT7LnkiBdV",
  "key32": "4qkzYAxLzEWeQL68Quy8CuqLR6YnKm4vTZNpyttZJvLiUQ2LPRW7q7wMhH5Sv8Hn7iHS1Szp7km1J617wrkDbgYa",
  "key33": "AQz6u6VP5Un1FR8ZYBMhGSwcgoX1Ght74ZofZN17935hbHawTAEKBRwPL8xSwYVfwV1h5wrv17dhQvj8c7BcXkV",
  "key34": "29jcbwqEe97VFaywzJyFPW2fYUqTvH6wWZfURyeUKYhWtBpNm6r9nEHzq8NVHcnjPsRydb198ZzoArywBEnjBanw",
  "key35": "2YdgZyxcd6bgABDpkLnXboLB69ArNCzgy5Fay3NFMnwbxrzQoxQE2j1tx2WrmNc8M6ge87hm42QyWA8NzSaeixmG",
  "key36": "2QMHzy1UuM91ugYFYK5DRYCcmSdrPVfSfxmaFKowvbJatm7BWqzWjPBcnqQuxidhTKyaEVpv5tw8zkYhJDqhffEW",
  "key37": "62fHBiANWCNAD3gLsSmgCydLEmLVT9mKMxbpjfhFWTye9PhpFj7CLA3JudDmiEpfww4SUaay1aQKAse8GCYs3Pts",
  "key38": "422HNuthT9guAMszLt8TgcfCh1RLMwgaeGuVbzuxMmQKr19ttSN38595AjBVuh6GS498SMv84pUPu94r6PZKT2Uz",
  "key39": "eC5vq6KTYcpywEaiP24HjTYvow28ZV9NhwkgJA3o6Ur2nEqNopKcMLiYqmUFiSeXahSLbtxAtu2KySuYZt4MiYx",
  "key40": "5KzEsrF8aAzZo9UgBiB5C4oDqExnPbnStuYtAAxBJLgbQQQyEPZpV6jC2p8suKpJ1LDoHcWuME9bie2fQyVvDaEH"
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
