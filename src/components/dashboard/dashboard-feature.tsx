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
    "eVFyP4hvjUzR1sxtQSwcPKZUqM6Ne3PtCFD4JACDSTXUefUVApb4bzBkc7JtgzUz39ewzPJsNar4hwLAWRL6yjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dneLcqbq6U5FNtnTJ6n2U3Pcj7syhoqWMEARTujgBuLMAT71dqNNdvj5sbAX9EdAWAufqLQeAFQ7iTaD175UUVa",
  "key1": "5TSSS2N5gs9ZfrQtoiqe5X78VVToSynyf36d2rdHLmb6sa2dUzuQ2B6SWnqdBeCAyCcjK1zsLDp6yoHrNCnX8UfX",
  "key2": "5NB6H6tAGVZjxhh38y6Ymu1vGdXkCLK6K8uaDCQHpPy9Z7qdkYk7tqkX5VhVik9TMPsnyCDjEaU6QsZ7f8yHfXfG",
  "key3": "MBZMTVG1Q2rhbNRatiLLgevPiZXE9ST2tokF8UY7ib9FzgMyJvbQJkm4FkJBDmc6ymeKpvYTEmqUeXehTgFDjfw",
  "key4": "3oanSukD3cwLRLeUzR4dPtPgbd8PN5KiKEtRtmbaUrppMYbWLTVQatsz3W3q2uY5oBE7JiCEDLP8fiovfPcVKg1e",
  "key5": "3NjFytY2aK3UDXxXRnGvp1NUPisxvPLPQ85dyaPZXQjWDT6xNgp4A6qoaLVtMTmR4Dw7sos7HiQ25ZT1aHBLCa4g",
  "key6": "4xZhnQ2bBMfQDh7bV63dJBKFBF67QTu3XsGUKncGPf1jsPC61AphKXaoVG6MGVVhVyZTSSVyQfF6Mz5Jt2bRTTYC",
  "key7": "3gEgaWBSLcAywY5KKqDyg2nGQNERo6RHJNVrPJcfaohhs4F25HufD1hdFV2V4sRnhgmoGhdkyKubcgf15N1DTXKJ",
  "key8": "3kyAcVpFJrmpA336364aFMXecYPudZn2XuTkjs5A1R5TMxBc1ae9CLwKN5Q4oMUa1wgGjBdu7THjHq9YDGJuUAos",
  "key9": "5uEpiSRwyHg4BRXUKGHNubZuKpXGZh83ojQHibfJWeSb17jLswdc6KMmtKgpZxYRwVbrEsy2CppudBux4QNoBFEN",
  "key10": "KVKJbpkBLEciARi9FEpofPcRec73QFGhtKrRBH7ivKSvnsjkKxeiT5Dw7AFtuJvhDkDdPHKnkpaC4iJJjA4yDv5",
  "key11": "3bHtV1T1u4KWUGkt5xyiMRyxpoaf54qiAqrZ9d7eZShF3yDrcfGSL2f6ovq3jPkpHG3BS8WE8t2z8T4Ay29LkKGK",
  "key12": "38svHV2uTCjHRfmKPjXwgZFgiVUZqM5jtpEdNPP5o6cDQTFjtkAFcZKo89WHfs9ntvrEkB8US3TaGpovJPj2C8P4",
  "key13": "36NtZ3h2qN6RfRmKGcvf9WD9XWMXhnZrRv4ixja1VZe6ZwQbxtGfx5cvWLjht7WEkMkZzNqPgcR9rJLGnaxtQ193",
  "key14": "59YGCBvs5WYdb8gyLG6qETakrTCUvKY47iAS3KX6sC8CUmiWPYwiJiaHU7SZnkHfhpGUdMmRom3AAx1rmME99QYN",
  "key15": "LdPVmeLsHNaTHJz5asLAsW7vQH5GgaPJBTH71pJujmbow6VRYnD6dEiePFZ7QH3qnu1STGWr1LLasGA3ACpvRkg",
  "key16": "47T5moH9ZEfwkvBJJVY9uPoa5JRgUnZkTkJ5g2C5q6in7bdeCiaT9kCUL7CRT5dFwzGtT24sp13Vo4MgZqs5Fvgg",
  "key17": "feevAQBt6U2AeKbuLWrVnBJzanGEguyXXELp4gR9mZZjhmJWoZGNz35p5ZcdpwYD3SGKtqRiNLhMGuoV6SN3gXa",
  "key18": "44UjfXiAwZzqtGTGwejZyMNt5BmBzDqPy5EDVBHe9ifnoUko3j3EA3SUs7aSKrjrFAWgc2Nuw3m2uMBvbM2Zuepx",
  "key19": "5LC8mMnijyfnkqThw4d241PPaaf6Nz795Ze6tX8W5JxFFo8ARZuwFaqX6uxF6hrGbxzJggKCYUyBWjUXzWAyoPzc",
  "key20": "5g21pBqmfdBEifY7VuoyFfjtNEQML6HebkGttNm1XU4kTXwPN9mPyn1f8HiDkaUdLdehpj34uEXwXM5oojcUfqNA",
  "key21": "2GQ9QTrBAfkbqaEXxk7MCu9NL3ivaNDqdPtnPY7e8QtPf71f1wJhthkD56hNqAKaik9fUisbtcnSyGEPT2QaGMJG",
  "key22": "2mxYnge5ezk17N4RGdr1yfaGGJxZE12Gy3B1W9QSVb7zsZwfxNXX8mqBcFXWcRbVLXgZUBwgG1irp3qN8yxj2zLJ",
  "key23": "5xZhRPxgqDAb2FrWmLmaZ4ebAxSSYMCYctuCmJvFc7uX8kpEheJSimbdDcjUTnkwBgvVbFPtwULctbN4b3sMBQDV",
  "key24": "4GmpNiHEDb8zjjgwa65tiLFdYRLdkcbTa1xhm21XJHXBCm6eD5jRQNw5Lewt1fNACvnoEqS1Z9WWQo62iFXu2WXx",
  "key25": "3nKd9NLoMUkA6uWougXPGzKX6QNvV6jPNkXXi7eaAgGNWJn4xrvtsyJ7iDHbxfc4mqmWGVgahqcnEWXaBSR8Q1un",
  "key26": "3AawX7LGLZew7yyZPS5mJnAjXpKdcy2cGMpZVLhSbM6YGCDvpMe4edYmQfhXg4G6ZdqpUK8V2YaFXLAPXFER7iY7",
  "key27": "YgtfKY1UfQRUr4TvxjtCW5ceX11ZnGACi6ZFHhE3fWh7ACzRMGkNuFLuBnb3vNNEbmXAdjHsY94deBLo5VGdAeN",
  "key28": "63jFhE3VCi7CNuN4PJMA48CYE5zBXRtScwBbtciTw8ndM2mYWHRNtDzyEN9Uzq11keuwNjMkLA1LgHdp9cobHTbK",
  "key29": "2j2wkjynZudF1zjrjfV6SmiovUE3Y8cVt2132hYeCcBSfhs6bTakxBkXCoYrkPJh1P41mW7wnLzSGmMxiTyr7gHF",
  "key30": "4KsPqtxzbsMeqfa9wTdNQdWX2pXTEgpv94iygf6nzYxUziUdpCzP7RKxqTnRKEZ3ScN5eQ2mx7zBFQCtTpVwykUV",
  "key31": "2U2z3ZEmjHtKmAD2p363SFzHvZRDorYLThrM8NRSnD6e6WGyk9eZBBKnSWGkowYi3pPX4cXhezKJtX3SpZFTNP9B",
  "key32": "36vyX3evJvcA4urribTfgopS3gcKWgFdj7jniSLhFxuXp5USEFSTyji3HuE82mjfo15AGCsaCK8ta2SDD1qHS3bS",
  "key33": "3soWY7UwDsYAv8uqj9LcJUgzGZ92NJ9csCYzLSZh9FGVnrJqs7AYbLiaVR2JhjUpqPahHEbyUVPx2LtGfhr6N8cw",
  "key34": "BXuEbhVwTrJFz7Qh4o2RTRSbcTu6bHnMS1QPtWg9b4i8UDY9qfDUN5Jzyy91ErSPF59QRysdC3oGBXcBAY291DD",
  "key35": "4LnEBm2BzXbkoqccHmxU6sRw8JhNwZRLEe6bKyDwKMnpVbLuVM4t5KsqF6nu6pusfU3DcM6RHk9jS1H15diVDLmx",
  "key36": "36EgTDg7iGK7K3fPX1NmERtmsFpUWXKS8w2kBXiCCB4dUoDRue9iVVNNvfBXyDbkJ1dH1kxZC2o6Lyni3g4gMMnB",
  "key37": "uypPZ63LC4kG6PsfcrMnctoG4T4o4uPPYDVFTw18wRPJiyGjMFAK2nZmMXhYLMEhA5hJ9pdPGmbBiWdGLqgpJ1u",
  "key38": "JQWitYJZxbihLTUBh7DC9HgR1FnL4RKktPSpMA3JLW1RzXN4wFgF728qiybAaaBDbpULVzfzqqaXUcsioxS91J5",
  "key39": "2XMtqGcHYAZ7ZozAizZvoKg6xuxVtdKXw5WEwfMvDEcbr7E8jVQBzToMaguDA4f72ycdPtNp5n1gcd76TaafWbku",
  "key40": "YoL5cqTVoFzqNZKyT88WRavS1qa13PbhfGLvaGWTzYxEVozVD22x9KPr5Uszn3Ghm28Two6UKZaokzKiQ3b7GzS",
  "key41": "4Ehw8besZwUtp5FDwSTJyUbYTgMM53KWAcvyZNoJap3UeXq3CZngUUFhfNufusWbC28Z5MU4aaPPZEJHT5FJfhQv",
  "key42": "3x1KxUGdSyqUpVcpn9KYouyALDGBvazyHyTULcUaWVUJVvsHHw3vMkJBu9vit828nQaRPNCGxncVe8R8CqCnvWd",
  "key43": "3ULopDA4vkSKvPLzC4ucZm8FpMY3NDadKHCHAbQ99MfDuvE1XmE8rGNcu591utxEmxgThvbc1XbBLEJTyVGefAEd",
  "key44": "hKr3xUvfkB1R9g98CiFMUV4PT7unjLJjq7qBFsQMSEUGe5L9QWiCuCesLUojxS88HqWgpRgXWELg7VfgenSris3",
  "key45": "YMXv5q8FvyssZZaht1dkAx9oFnUE4VrSnphhzHregLuXx9YuZVWhHz2JnLyi3crUMeFPADWRmPTxgr67bH4RGeq"
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
