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
    "5uVrWQNDBHtqAn2qdwf9m2xeJ7xkSxV7SDQWa1NzC3gbYcB7dq9JcacM4sQASeAJCyXPvzePAGxFXdD2ByvDMgZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSY3SjGjZzCUedv2HdupXdY91AnHYSjWMQhG8csCQ234onw3pekA8upHmT7boKMUM6RvE8nqRo1Yc2R7Vu4hVSo",
  "key1": "2P8imQ8tR3YvZP2MYVcxvZS6SvDXss8TYqsCVfFAwf5Ze98UwyDtt47jgnm82kKos1TMkcvunbMybqDG6XADP7a2",
  "key2": "4X7N4tUFjcB2Pn9Nb9KMry4ogjEz1tQaDWAtEDKMUbDXcTQ1KdtSy19JW4JXcJxKx5p9BDouATSBFtmxwSHjxJAD",
  "key3": "5QV6BuuDYM6iRSi9ih6mkmoudctJJZbZL99x8nW8ssjrbb725eEWBPb2KqVu9rzLEars4u7Ftkbk4h8JTszkzjDF",
  "key4": "uNJQhCB68iizCXPfgQ1EkmpNEGvj5SDpDo9339p3fsywKe3eKG4ozenYFuhzWy4YJxE4dpxKfnM3ekZeJXCLJWL",
  "key5": "4TP37bQUGxfTofiW41v6xJo1J8nYMQevdS7m1zuUdJ7xWnfURVKupKxSexnsht4UNXRRE9qJPtYnG4Nd3g2YBn9V",
  "key6": "3V2GocaLFQEDggATHY8SNTP6L5C4gXjFRcF146LwiTcYVcB4hjsyqw7GT29TWR5BDWBSubrtE4j6CZR8eWvwygfu",
  "key7": "7Xu2BndgHZBWGko2Wvx1MDCuydoR1WQX8NVaC6J3Jqs4qYeXTdjUfSgm713kJDUzckMqapXQ69W5Gh4zHZePxzs",
  "key8": "29aknQb6Gdk2ErUsnRtX6D45Tf4JNwNRh91nmHace8AdSuMz6RoJ9HKHsrnJn2bpsgWG97YkrjQwMbEdALdiHEAe",
  "key9": "KRTCkLJNKPMmkPSUcaZYNVFMW8qk2f1gGPjxvCWiZBfhAhaqhay9LSFBqP3GoWDCb1PAdkUB5M43FDdZojhQE1z",
  "key10": "5AvJ8ggxrGv9MzuKMuveeyYCPP7zUeHkNugvCZ3s6qy57XVP3kyheR2VpT3LDkLnCq5awR13BCKhwkqyH8chhVE8",
  "key11": "5F93ziyPAtwmn3P5HQChao4nnBNgNmwdamBptLzPRvbdnpftZh8RpXxiFyxvX3fHPDYfaY3vRyYpguPZSMLmuMiq",
  "key12": "2gM57Lra199MxRavpgiQrHYYdzGZGqDNgnwBfeSWKaiMLpAFMgom993M5ZqC5uwXCanL2AotQLWi2mBvjdNGGq4s",
  "key13": "389UVSSrJCFfmSsKfMzoQunUdne6HU9E8YhRVnZi2F4M3HY1oB4F5t4KJ8bW8d6foS8zVYGjAnvxmMdGePpxUWyn",
  "key14": "VF7MjJPDT2XkJWt6Vek61B25iAsbndLLzPyiuSjWzvkdV5gvX6xNhSTcrBzhB1BSwWnvhPAZYg6tU2WN85QQ8HB",
  "key15": "3njG2vaR3AHJR4thasoNn8BnrQZezX2nfHSTmZt5ZnybcjLkBnBAZbfa2eBRCSWPwbQVyESm2TBXgNq4bCjzHB39",
  "key16": "FKV3Ht5GWBhQ9VPqin2cXp2hBTJMhATyVw5P7jRMTae5yKyf3xeFgkiSFfTLt4nNa1WYMax6rPjMcSENUayEagv",
  "key17": "4qSJCYtpfT23DvVxv8e7rUR848UN8UfN5tJnKB8oLkVAuvYo1EGDVsxn4KujBsbaVSzfwdkNM5RRQBqjX9Hq2Fwh",
  "key18": "2vFgoPQs39bToFqu4f86T2r6hkKb8UUjM8Z7F3kLrkJFoc7fYdXb2HyeXL5mag3VD3wmDTSXjubTkkS9ADdZqqka",
  "key19": "gXndRvDknv2UZesRyvznT6iKJHzhBDtJKGjXvVJ66YpVoT5DxokW13ZE8CvMhDCQXvNPpSC6npEULFhAXxck2n3",
  "key20": "g64WYFmdo8s1jBBx6cvZpvyxLxQyagizSFk2WYyNXZNLmvpqQKeixVFiEGY8vmM68ebhyGJ18CbYdf7RxzdEtkN",
  "key21": "282K6c9VQWeAHPuKxWZCyi2XXFXoRDdApZG68AXKPoBnvC44odZyePUR8vMdbYgqiwenhQ4quh1j9ZGSVTS4N8Uj",
  "key22": "2aPzCyoSBXspX4v1jEZKyp3x3Sp5AuF8pMuDmYHHmJTk3VLVwxXiiXj4EeJKWxCwdvBM2M3bEtVQGfmsXnPnyN1Z",
  "key23": "476R99duRiQTq3qaNr5oCUfbEiJVLAfYuXPJEmRoirxoRPwHJMpp4oSqA58RtwWuvuoLDwGGNB5dcSxCdhjfcca4",
  "key24": "3A881sBaQ5pfNPQtJ6ECRa7Fmgeb6ef4wCqorWKuyeuJHvijVE1gocFQ9s2jKkMu8F3cffeHqvoJzqS7naoxSobb",
  "key25": "3AAHuPrJDvA3EUE3nauryosbh9As6sQGDRsyte4Nf2gHNtoCmDRqy1K8EvWPjRdCicf9DoGQhBnuj6EWMRMT7LZh",
  "key26": "KADvbqt1pTcs376iZnsSjLGoNnmXE26Fvm3g8oZfuQbHM9EwBndAuoQK57wTa81DqN35bnDrP2m6Zk369m2RzVD",
  "key27": "KAZK8buG7MUqnA4DHadiRo3cbi17L5kWq86JYycxXbUEJ6dtZ3oZdbxQzM6a5R3PtDtDKeYhspY5qm73eqtSooZ",
  "key28": "4tujrqow21sk7boVsp8FCZk6wLwXxDPZKP13bNVJikmwpToRC8TJAXbfpPsR7mm3vFTK5kEq2NZEJ9kByZBdehUc",
  "key29": "4qrhd1fB7kaDjzryFaujHNox9kV1TWzdoUW7fDQGSf6P7tuQBo8pj9Sa1RqguEyqysJf1wRu1RR6ietsxTp6oJ2r",
  "key30": "Si8HFqvrZJXLx2Aq8nhsMPfirxQtp4aLkFKxNfqYiXsnKKBAVzH3EKMmkkKDqps4uYCxEWjDuTRs8N1aWgGAwiR"
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
