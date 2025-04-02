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
    "24fBvAGU6G9ThuuKof2wvaXLSstGoyTu2uVydRi7mn33Nd47CNJhdS7YY3d4VksJs1oHf9ZwRSBRkXCTyKttLMKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5ri2iRg8cBAijdg1bybyN176zk74TaDrPmP8P3FZApj8uJTwPzBQyha5tQyNFNF6HAWcBCQ46xQ52LfhbVJdhG",
  "key1": "2ir4ZNCWWy9eu8r6LAM9Vd3zQabdrdJjrwA6W2Kdp5N5Y6TZYENSFaLTWJqq5rLe3evoMNNdmzRWggmR5i8aKrfg",
  "key2": "2Ghogr3TLBcSn2NF5yhxhFjn5y9LGwnZ1wKQDpJuL1hM3bVtjTpsLXgLNpo6WDjCTebE8wz6FcWd8gSa98n8wjQg",
  "key3": "5ojG8FWEvVK4kkP4YsB7P4fB5Axc7o3AjHWxN4HamKKo5M2Y3ad27eJQUNSVz2FihrBrDr3HrzyxAzM7cSJ7UXU",
  "key4": "3K5byWnekf45WpusVBNSrR6uhfreeGX1SfWqGJAjoNniC5Kegr7NVtWYsibn9deFnsVMhgaBP48RarJ2Xx2Cq29T",
  "key5": "w8MzFGB3QgUe8uK5kdGc7aXtuPQsBVvt5GRYRGh49bPXZxKDBGTSovGwpUemFRwtmXb6CtG94FCk7tVwQhn7ats",
  "key6": "37Sw59JBm3XAFGaaEvTkn7bPfKjgccSwNPQuwvHPzqTFHiB8TWsE3V9RXoNmT9GKV2S94WjcmnJCSsHCdTa3EvyQ",
  "key7": "PsAd1o1ZVvMPnGZJRt6mMvszAs1Q8DYaCDpcfkjkDwsvX1RdQ2QPmJ7VUMGERXtC7tEgQcA1r11nKJfzpSZphPJ",
  "key8": "27udj8DEQ6QiYKzGPZz98nrNn3BY484hK3zBKgJgxMFBW24g9ND2ML9oZawhUmSzb4xstEJ3JKa6pFtkzR7ZS37d",
  "key9": "aokBunLqKePnpzftrFCyhhDYaPXk9vSMDRpm2tx2NKR6bBbcuU2esupUoA5VvhCzGbJs42CbkCUQjdGfJaDzEsf",
  "key10": "XUEcme6cnTC1AboEDYZLFDoAW49VyNB6LottSL2aYkL7x1SDYSYtdYBJZnAnvfNCBh1rBs5FoERaRAE5AEDsnqQ",
  "key11": "4vcJC2aykkoZGmWTXVDLJdjecEBzhyP1hCs1XJZ6GjuA4cQUMZMwHMjtjPgVkYpL9KYxd2behWoHWU6YgU2MZzDN",
  "key12": "41VDSi6uQ9gpgptFmd6MFMCjyaSdst6AbiBAhHWR9kX63mPvoEyJ4qoJ1qz7AxFKh9BF5xTEDpqeyJ57LPAHeF9d",
  "key13": "2gZ8M82uijVyhmj6ehSYGM3RagwFrAiwavHFrMreZBeLiZ2zKn3kPDgSd8bTVG7NRbRgjR9a7SjhZmQnbHtptyuZ",
  "key14": "fhbAupncmaTAA5r4z83wDWKFdDp6Yj1zcknDTTnycoRQBdmwPYUnpeMuxRWPm8fFMuHHYRgyqwULii5R8oVrvGn",
  "key15": "38VURLGzBQvoKbFsMay5pD5gdxBbNeeJs1W1Dy1tMDwzQ75PUZCJn7SgjRGVwGY9Xtyy8p9j1HAATSJpwyfay4LT",
  "key16": "3HBFXAr42fsCo7hhywDdWQ1h1PtiB31td5uFaHaqQ8xqBx86FC6dcc5oN9zmq74KiouoMzh4RKxFKxozazomL2WF",
  "key17": "3KfeqDZcNxsHdig4qHiF9Xeso3roaSYwfXAgRQ1jJix1yCk84QbNAzXhRtVqSi6ctW55nrkNsdvV5dJQ35znSt6h",
  "key18": "4VZHnqNTK77QsH1yNN9iBQT2DF6xjqPHLfqu2ULi4ELNjdh8z1i2ybMgrcVkGDKf3xxNicwk5QHupptcPWmvZsZr",
  "key19": "4tWGChu6wvyxWCBvkWm2s6onEXbdafSDUTbDomGrYJrdWZMcviroqVHZHw2aC52AtKkzc2NjLLWQvcyQyxGLJQu8",
  "key20": "s5kdHzB5L1egYD2BPmzNWB1oGpe1114pumXmrLDTYvNqr35eLzfwTphwLzxaezD9sM1ugVrnHzZSCcHv4BVX8wg",
  "key21": "2iittcgMi32UBQwEbn1rozg133gjvHvCXDmU4gFJxfmfN7WcCQFHF6KkiEX51DwRQVRf4vb2CJuNEx42aXUBV4ZM",
  "key22": "5WGdP38jqaFdepDTu7jKr5F6ycsoKxKtkgNJfML5fSBDpCZUga9q8MjipAP7ig9hq56LqFhhQpE1TAmuf6pXLp7G",
  "key23": "yh7RaaBpXpe476ZnqQhmXyMaTAAbisQdLtCesDgmpuTsS3vDHDXVo33UqNoQbBAeGxqCBNUr2ofPoMG44F2n77T",
  "key24": "521kCWyVKUVaFLfEkYiv7KeYhCEJYk8HdBpw1ngxcsAWU4dqG9R1bBP6dNxvkuyi3jTp4no1GCeUmQZsG43kc7P8",
  "key25": "N1Gk46mA3m9CNe2W3Zm8NLUHAfdJ2qVifsHvda1v3V4hf92c5cGRPKEfYVaK3atnSeoZ3jw67VYgCYMeQe4fsAm",
  "key26": "EiXEcRmz1R14KhmChVi4GKmB2Q1VnPkjQf48FfWq24UMYBKBGnDhHgSixHDPUNkTViEzrfFnMpn2ssaUPuz7dvj",
  "key27": "3CAiH77sLgvDh4J8ph8cgSEN12oJw9dJQ1PNVeoz48xnQdaC7XJa6fFieLvmLBAGf2ncgEsYPkpSrUuP5nim5TLd",
  "key28": "51L5m5szkutBTAG8bcMs8M9AH8hJBhNG1VhfovPM3ccaad5oofmZr1YMy41TkMWr4gAozafbdLQUhxxYAdKcQXDU",
  "key29": "5Ti2b4yUqrV9PWgp6XaCqij46iKXNcKJnxBQR44m7VAfpma9yrXtuH8Z9vHQjLwHtUsTswR2qQRxQiDShBskob8T",
  "key30": "4PM3ScHg2uCB8jsmpt4wyS4Us44rA8eHzyrKVKs17LTBrMMWqZUbZ23oyxUmN2NMRmarSqYom6m3EcFvDBWtKuJk",
  "key31": "2sSvLmDv3PpiJpn6nXPeX8zci3dCjZg28VQAp1ecXzhGircVBtw5pXicosAQakkJacfdxgHgowNcBrGmar4rDqtK",
  "key32": "2bGbrALQh333qsUUfgPCYtMMjAs5kBHV2bKvAJro2ChFqdwcK9N6aiMHmCey2sGvam1xeDt7YqQoA1K1r8DLR4Hw",
  "key33": "4ZsNJfgA1cXkG8WXsxMQYDsiWxmn8uZmAzTz9AXv1nMvACQnDnqhRH3UjGfhx2MGEunjUxUC3QrWV945A4RqPT5X"
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
