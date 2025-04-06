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
    "4jod7tT1qdqecLVgfUTPdNnmrAU57H9aaYMu6rwQTGk2XYUVWe69hn3RyzbQrbisPn8KqoGndCDk61VESaZ5UJCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366m4oXogKuCf92QeTYPbAjbNQvvKgDnmyKcZymLTofcQ7aE5358LfLAhJnzjWNdAci2uCR1iSL7d5HSDQisHWWg",
  "key1": "5CdfKxhBzDpiznBzGgMK6dqyRyTSJwaLhKtVhFTeBw6s6DVthfWMFkoCxjB6S6b1HVgMx2UoAw3eSuc9MRZ9uteG",
  "key2": "57UTkcLMFmkK9Z2pufEDECYgDMn4XGdDuXJj2ceUgcJmuWmBBiQoREXKmj4sXCpwhsCPEDwx1fAVAWtdYkocKN8d",
  "key3": "5Seb4a87RzhUw588Yc4n1WaptvKwhp7sRtLWxWGtT7NAmWG2rH7raJivS1Md264YToF5vEnpXdWGpi3jKLFfZN5u",
  "key4": "5oNhemKDMRPuLkabnRnotazWBotEn9TYXFSTwFBikHDhHKx2nCSXuWQspujRuUTx46a6kdsGHZ2bry9z178um6jm",
  "key5": "2U8YhKyEiTVCKYebpTEZ4Wj6hZRNEgXgsrKzTX4UoJH4LB1XLPKKduTJ8G9PWWYjzNudHrSQKaTf9qBBFs8Exw3E",
  "key6": "3nFNDZfDej3KYrPzNifU7fQzmGjUA3EL4dw3FZitGCk7cHKy63cjzEViDbL3g5n7gDYmUwLGXujFZrkn9x7ehqWp",
  "key7": "5HYfe8LrPND2A2V8M6BnXYbLLXBRr8gYpMwrrQL6noVpsFdwc7xyKnus3txmpoC7ue5dUWuQkg3cxWZpeU5jpQjS",
  "key8": "FUhmrm95Q9Tatk5WQSVfSdVYoy6d7ftmoLKFjUzhEipJvbpucWh8mTytGjqi5scMwX8zQ6UcB6ZiqTFH4HaDT39",
  "key9": "5zz84KQM2aQz6UFJ41KwkoTJHsLHyRRs8nYVe978B9NGt2cvxhNAHYWdWo1hUNC1ENhLtmRwpHZQVAKB3xnsyVUc",
  "key10": "4oFuGS7wXn6Sq28JZp1xc1Df5tiUyLFh3smSXPydH6NFzpGiczjGJqJcgrGiyinf8wvG3h2sMshz8piX8JbtmfP",
  "key11": "3PLqLPYGJzBbcRon7ByCKcTy6VfL1mbAo5tPAEpyEjd7EFPqEFuvT11ZAawbnz8VUuTerYxpB2fE8cphKqHdtSt9",
  "key12": "9qoR7k6TR2JxvKFgZdc8hG8VFqCnw16cuuhGXGabEDmCRbx6mUv46D2ksTvdNmS42m6ThnbNZr48PC9GJwsXzaa",
  "key13": "5ub4F38JehVqZTHFfnYiCndeMbGNn44LhPVGGnRBjTF61EyBUJR1MJYcM4Q71tNJyScrK52LqoDmn86aZTP1HGh2",
  "key14": "2FMyhZ6thdTeDoQFw3Eqx1BfPP8Hyerg3jaGk1qthuGFFmeBYbHchdEjjcyTWmxScp4uuFsbsdYTDHfPcgqDpuGu",
  "key15": "dYP118FBN7gMJX2knEvMUaCbsuPZ8DrzHtqukYMohWznPia259yBZK81Qy3EEi5kgCAhrj4jVDc9jFPi8fZcwBb",
  "key16": "hZVWq6Apv7wUxwGQVxvzwqLZMfhaqSgueqnaCjKqa3K3Furu25h1mwMPLMp4g73rJUB6rsvKSgfXNhL5iahogyj",
  "key17": "nm23a9rmT59VcSLsVW4Fct5AVtvVv22rxunkxPG4AmwuaY2jfNrYHLLBJyixGpteN7JuskAk1uPdHcn5FjvjDbL",
  "key18": "2t7MjiSwDGMwUQnsF5YhSR4E1tYVXj21kaphBN4GDs1YECPXPwimAnxvbsrrsJnoBobfSJFqXdmx9s9wSyHgeUa2",
  "key19": "cpVQkQdbw38ynCftVg77M9Hmn1c4ZpewNVBk3MFzzsfA7zaJ6Mu76K6VEQtewdBixbfRbhhbdcybF1aPXPuMixJ",
  "key20": "3UT8hndQhJcPFnUrVEDZX1k2qYomPdSKNbQfovBTsxU4sNPGHtkZ4GU1kSpEi9QBcZuAzbeqSJrhWX34uvBy3GkS",
  "key21": "4gWKpcPYrw4DVL3fZ9DfnBHdFqtnsXWEoSZs1sfSVCKVryT1oKSGzmSfr3d5su4i6nFtNubuN4TubcMBtKbK2yrn",
  "key22": "wC5TK7DYEtNd7Bz5jHgpijLtLkv5PzPVT33MLwiLV4vjJDtUnECYsgcA9HZhhYnepCqGrBcWqMafNeUM5yFat2j",
  "key23": "orbYUFtPWJTb3o2d3qPN7xDsqosBKLF4wrEpF5wAp3xphRoaqPiBJyvfynvErqancT5ehZasAXnqk6RcDE9E9DV",
  "key24": "5hPRFL8RvB2rKbuQ4AdNmY7XBZtKbUdWRCBx9r4AykFTXoLRabyoDvcVe58scGP7p3Un7jmejKte3hhjSuqETC6E",
  "key25": "5Nthtx1e1Rfvn6viFvmzB1Uir22zuftygSHXxv8FhD6Zt9TXESFq1QSRboioPSXHNJAefmSvFdW6KU9y96ZEKZa4",
  "key26": "33MjQmZptRASJMjwFpiNsUehcAKcDg2NHSf4ZGrsHjnfrWgVttNEfPeQHzJa5gsRe5LnCWG9x5YrLHrArsa38oME",
  "key27": "2tMgWpkEfoRKoHoeSaoWFZhzkpVUqFkCHrBLARdbgDSjRR8vfEjWmmJetbV6uDDRRbesecdDinyZAdnpmCgsaVXg",
  "key28": "5Udj8bhtrTHFJhYaKYJ7vWjhBcb3RiN7bFSZQdUcXMGCnPHgVzLUUyve5VPvaxRquBdtyEnz3yweNwtPwM7tpnPx",
  "key29": "65dWydB76kb7dZ9p1zWAf4A5cEixxpZ3Gf8RVHe9R6HSKzowSKaVGvV26NGd9HjUHM55oUaxQg4fwKRmNpxzPTBU",
  "key30": "5Mx2X5Ep8HACXwPA2yrrdZkmTkGziJXLNVdknF7EHi45GjMMcKUNbot5t418FoGRDby3FX5MbMutwU6uEwjm2goL",
  "key31": "4wMQDuzR9rr7CB4MV1DTnS2Y6ySKE1eq5aeZYFf7vuXK2jrbN64N44UKdAWe5ybfy54tf2jsQi69jYYdEdxNgRZb",
  "key32": "3vNPnV4veVcbLk7g22AiShSsat4rpNZVyksAqTDyxBK5kLNysVyL8cjzRD9GRxYn3yzNDNxFHZ477KuAFemcrkPj",
  "key33": "4cC9gfiqvMck5gKhggJFKsZUp5GCS4QCQckX3hFJVjRq1ckJcMDY8YzjafzGQ79H6178NhzPaeTtp4RvKZR8itDV",
  "key34": "3BxXCniAh2pjNNookp5P8q3d4wyeMiBMbgHoD6bGDExNsYm77gjqpBpUS27imhdxWQG6yETwDzPHeNCy6tmYE6SB",
  "key35": "XV9vUxwehBZY4CdW9jieUKZUcbLfcTCHWtWAuHcLD5VDw6NAnUjJu38xJ8tLLKfTbva9jh5KLgyDstSkEdiT3rr",
  "key36": "3SmJTgBzzGnE6Fkffs66Ykhm4vYnTZNo7QEnwWfg8Wjb3xAS5FyLHaY5gAb7fA1QhUD5QieCsAFwTZd11dyWf2ND",
  "key37": "5F9vZ4cXBe35E9sFephem49yiEePrMKibY5pnQyxbLyafSyzYEYMveZiejquPaCyUHh97EzNNKM1FxZBKmt7HM1k",
  "key38": "oN8t3Fc532nUcCSDb8RZDRicHiygfnazoabhNs7dbfenC55w5hkaeeRfzsYdfqNJ2H2f54KMgkKRVsu3zFQKhkC",
  "key39": "3hsPu73uYoNmePxZzxD4vSWvNgg3AzR39sZxv9ctW3ZdVYzCh6tQLXzLkaFzceT1i7vuj1ec6a9sxnCoL4RhJFWi"
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
