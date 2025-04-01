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
    "2to9YgCs46qeshxtenKBgdgM32iipdiZriiGEwm5KARt3JW48sfwQxFPAiB5YRAE977DpRe1RttG979UaQ3QnPEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcvnTqd9FWzfYJCbsZAUDqFwnRQnxRafEGUFVBYBwYqtCDoX1qwpv735XcCCVuvi3iNPheAPy7HgQrAj6hY8WhM",
  "key1": "4sA5qmBcpaZVPuZdgVgHk9an5vUxr1wqYgDoLq2NQ5sgLZ1CdRPVHtYTwYL4q3ZnWvmfWd5Va3gJ1oEzVYjT41BT",
  "key2": "2jE2b88Nq8Jb8AT3Kej5NRdeoqi9wX9g26CGN1EJ1RXEJtF1RPicg8X3CvEymkPQ4AHN8MFpeywPdLSRg2dVgebw",
  "key3": "5yMSvuXwRBNFcsmZwhJzdfsshPGE7kXv3zR3aYSxnF2x9hrnTBmu8JLVBvtLtu2PBfR8Ng8MZbgX6PX73mDuvuTm",
  "key4": "2Qn9dTnpHkD8Xxny1Ljr3QYgcpwjxWhahAttsQGo3SGUtqx2k9Q3m14pai7JQDdEqgiW29eQG1LZLgAKrCkuyqui",
  "key5": "3T41YGC3Gix15b4Y26Le19LtvQxMbgxLvV2QaDteonDtyE6kYGosP6WGWF1htBKXWoYBGhTG99hKbJseCPrtCj3d",
  "key6": "2NAkCYS2PXTNH3V71z8g8XZmACeMTpLP1JeneTCyxLJEVMCFy63FDiCTTXsDVcfTWtZFoCR1KpCxMKym92sVnygS",
  "key7": "4f8b5S6ugqas3DniQ68Hote1GhT8EALyze3K7woYjtzfC851qy1NtXKnYKFvPWkrk4dQizJjjWdrR3E5tMXU6fwc",
  "key8": "3bTuHPkci96hLKuXB4PXuV894mDU2iowC6qxqRAJq7AApJEHGLT8ZUjCUfda4sQYbUqs6Csvbat2EoZ4VEtQnQYj",
  "key9": "3MmA3kQAkUV5246VU8kvyBurNZE26mYTb8n4YSR2UX4uarsmisRAUNn1ygwKsTUH8M47WFsr5u2BKEdiHJNvhmYv",
  "key10": "41efrRuAGNTSNJhfMssHLUCzVefeb957PqfeXFVphDEw1VwSK9wWDxop4pE5iS5toqFt2ku9AbyKHWutAx6HLgrF",
  "key11": "2vfbVJvjw8Z9Ts9gHupGAVhumBuZYLUYVafqUmqR3cxz6GTKLXas9zi8zMWvXyhsWLh2FEMC9GFTgN4cYya9ThQ8",
  "key12": "jqBQUFv6KHuntDnHA9tnjBNz4DVdNhZu6E2Qps9AemwCpsG31o2sYKqZzaVMPto79kQNeUqqGY4VMshnydBbuTY",
  "key13": "4AVagBmw4A2qtTL5C778x9C1Sha8dLAWsuAF7ozqXLfahLuA1Sq3rpsBg9gXdvgGyoobvf9T9zWmBDFWuxJDiheG",
  "key14": "jJC6BFnbkuSd4XuzthSaijtFW3YmANAkSwcm4oKH1iZ9P4CTueeWiJur1y9ccw6Jm6XQDQPpmrVCosmekbPmEXB",
  "key15": "3Rn24hLp6P32kZL4qehuPjVN4jbyLz2FFc8exW2GDrs78UTGb5ndzLJJcHhD1pPveNEZGJQbsquazpQEC6TZYBNu",
  "key16": "5mHLDf95HDYuk9XWxN54CPz6DtfZLJsJVH2Cdxr8PmeTnRo9P4nHNWFvUuegDKD7ytBxQ3gXaUz939NtDojgb2XL",
  "key17": "3BTrp4wZG5PkBcQ47EKZfUPrBZWEgTNv1gVPLVRx4UYELNpDe3czyHFruiHpdhLJgQxwzWZNPbD6rEmTqbBr7wHR",
  "key18": "3hNHStEPmfZg9pUoCT2zrn2knV4wVpP8kR96svFxZfK3qEhdPyyZ3n4MPfuWH2L7ex6WyXBMT74F7TpWUyQY7Wij",
  "key19": "4P8XTGL6S4pfmu9pFKcku7An8vmvxjJmyiR3ec6XwTyJUgfaFkPf2AsLWnVe4EQ7DS4VpQqzr5bywhHG4opxDnM3",
  "key20": "3v75cshRNUoFZCW5qB554Gb1uau6EvqEeijFww2rHg35QEfs8BJgEveBsf9NBwGyYHjdzF3kp7ryeYMrzVo3qm8i",
  "key21": "gpQbMZRjHthWtdwhoi7VQMXVo7hiwL4qVLdXXTrCnPVjJEbejPeFLxiB7VMbsrDmSewRQbQorLcrWjcB5mx9wcg",
  "key22": "K6nLGK11Y9P87PKWibuJvJuDLECNTYUmNqa1DoFMaeYEvEPLdniLvpZ6yTkRAjwp7UdjQXKiz4YjtgpKEC8BmbQ",
  "key23": "4wLdymApai8kTMDEKCRNxaeHqdFK3WvXxtrSrP8CiyEUPuthgBeQRdq94zdZmRfHDPxCp65yJoQENE25PcW8PMJN",
  "key24": "fubJ3qpKdUGJYbrS1ZUQfaTAtD7opGGsdPFkNN7svRLSPdmMEzwWyMaUCJLSve3mLhno3rmcicCqsVpuSntVbG4",
  "key25": "yK7qPhWDcQyGqDRxGy3pYscT49fYsRXwWi7kNGg3YgZLhfQBYoVwV5jDxDdhCSv6oBUpUJ224m2giiiTueWfXMQ",
  "key26": "5eSb5xz47aMyohVKTsyTjjskc6Ky5APk4ttwwckbjk6dczVUmEf9NQ4qjw7L1Q8yghjXUvL5FkWMahnjyj7hAqUK",
  "key27": "31oySeNZVcLqztCL5ZtSbkJdNtQXVSwsCF2aJiRZmz7ZqvvB99oPE3hYP8MkDbuVULLBSGVBURCzNMC9vbMtf6Ld",
  "key28": "54m785RhSmPu7txEm2eTJVuFM95nmZveXovF5q8DPegDyRzz5fAiApSWfoRm15yWouHBXrM9v6n5Zoeens15MUXT",
  "key29": "mUhmScABT987s3mUetYvfNKtZTcTx2n1786Zb8SqZJYCnWbxag1u6gYkfxKUXVQ74WDPXRyzckSDhQzTigCpiqk",
  "key30": "3UULBz7HA2EfghbquSBi9v7JKYDJaqJz8WYovsXcAKTu3auGuzFoZeeSBCiA11u6M6SysnMdDmLVFffJLWBEVZL1",
  "key31": "bfTD6yYJN5kX8M1XGoDGWeQaedawTMdE2LKXK9sYdTJc86boZqWXfb1nyRVQj48gaqPPNDbmyM5527tzYJvqx3u",
  "key32": "9qgczdtKVhDQZ4c2nygq12EXoi3xG8zt2ChbxyAArmLLJVRG8peyr13hmAH8LFgfFsaCv2CxFZY3iKYowJ8QrJy"
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
