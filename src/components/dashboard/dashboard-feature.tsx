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
    "4upBrQ9gCGZqiRVLTQ4kd3NCVMVoj2VUx9wYCa8NK2k323Y8U1XJSwMNQxC3bZ4uVEcjJak7saRSEUzwfiXCumY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zoPKRZi2BkLvoJh26gWeChxD1K4x3RYFVkqRwyMsErCwBZ5o4R6X5CwJeMR3ybgVQG8ZjXpqCHLuBz8G8Z1vKzz",
  "key1": "3e71iKa13UFgCJH9M3taujUrtKzeA3epGGQipfyUoG9TBajbBMZQYsmhXECC9ybxgzM62FbV8eGfgdCzai1UFWZA",
  "key2": "4Qs63GP9YxPwWy27imwKih1PwgLcXyVTQxCQDUZNpDcVJmgvR413yRynzi536ZViKXWQKioG78ezyrGhcwrfcf6J",
  "key3": "5gG5WEZUXPpxfPyefByUMxLwt1aWDELu1HpK4ZETimynSFDE6RtpuSBjT3pcqk2XB4dFdvDeZ5nFCbjo8nkQ68sy",
  "key4": "4htsPMpKD7325eajpYa69U5DcrreChQfY8sC8HEQv3aktzNzm7kMqGmS7m9eFab8bkWVBtMz7SjDJU6s5Pj9iBWe",
  "key5": "4cZbN8ZdMF2qvgiZwGDFpkJxc3CmP8P76W3euWgMASbqCpk6tRHPw2P4oU4kPZ2E5NeHv7gcVwkoSRJeJNKAzTNZ",
  "key6": "3naZeQg4yocnewLKXFdrdFESpwhvWZHXLq83umA547aFjoeN3TJzVoK7rCVZKxrNumkxmUTVVx3LJXZnyUidthgJ",
  "key7": "262yhDtL4jayDi1XYWEskBzfCJwRDnLojf4FZjYCXbShuWKtFosjce5zZaj3b1sPE3dd1b8rDdMeVgbvhj8wLzEG",
  "key8": "2amm28KyKaTVVkvXGYD28C1gRzFAYnJBooWPUdmAyQa1YcTRoEkgQHPB45g85PudmA8NtHidEUDwkQM6nPHQqCM3",
  "key9": "3TEe8kVRAsc7kUbZUqcnxpfEtGdiFuzLzN9c7kC2oAUXr9uZr78MSXtgAHqgojBkZ5MzrM5PG6vBYk5RwwmoAfoU",
  "key10": "5JQfPYcwPyYcdCRjqyh8SYamBCcJRGfvcQW7Uvjtj1CtTVM8ut6sd3KwaQxXK3tqjb7nbXbE1RCUJyqJsh44LdwG",
  "key11": "5Ci6jgtPir2CjPur55kPGmaF4eWrDjDaTRBQ5UDHXvPFej4RLUB4Sp6kPJwYRUi11bm413rLsreYcP8rxYt3AwUn",
  "key12": "4rr5f573Qk8oASbPHeVd1kxi7WNLNdKQMT2Toyogi9MUQFmNoJo7hajFTC7mjQAyGzX2uZun1SRRxr5FjPC4NKUY",
  "key13": "62jNFvHMAH4ivBTyKw6EKxHBUunaFhENXM1NhYSZrBAdpZuUf6S7pLvq7bawstz5aQGgwqubCo2Q6imiLgEfPa5F",
  "key14": "5AovPJscPbMCDh9KaxJVCVaNswCwz5Dcq7qFExGYbEFqs66nKkieYRce8VYfA7CcdYR82X3RsPg159Cj8kS4BgEP",
  "key15": "CfypMizw94DZQrkA5fNNUA4EDBDrAAFwpZ7jbpYXZ9cx7hL9nsY5uh4EeWXR4DYFETSDs1Ya2LNHwJ8dCQ1NQET",
  "key16": "4JbTFkVGqe36LhcADrMiVWcFz8fsG2rdjvLgVmJEteEAECbt1aqw6YzUtafheu84BKPnvKgjn5QqRNFaKMjCKRkb",
  "key17": "5JSfzCPuY6GKCEdhJscGR61zQsbVAmHcTRa6XmAWPd9pUhuv6BCzo9B6RVcC7nyRkbioyWFF2n833vpGpKB9TVwm",
  "key18": "bYT6hV5cwMtsKBi9QMAip29i2kRWU1xRB2RnpE2QUq2SQoqLmUWnC6Ph2LMeLj8AgrQSFYAzB1rHm99ZFbjjGXy",
  "key19": "2o56rodzYcM613irAxYVZZyTdKFQ3HwCBHY3u26P9suPZ15SQnHydWu3pJD6dypLu58FhehE7oeGmW4ia1fNDoAL",
  "key20": "4s68UXR23oZ2hL3hyRQRXc2FtwHQuG6ifuT8hScUPqz2S9GGySMt8qW9FpiJC4rUmpT869zvdLnaC8MogMvtAxCA",
  "key21": "2GxgvvUWi7BCoVT2CnQcxUMERptSghWVjRNiCcfi7jKNH9veu2Ht7yVfbYChvWAkLY4CpHEArVfnpwip5SWL6aEL",
  "key22": "2ia9EHcjqVSkXMcPDLqoTk1xXsxTLrFzo4ni6JRFyC8t1cUgDw6WpQJFg9umGADzW2vAjR7kfmw4Y3TR9gxZq3MS",
  "key23": "2Bqq8Gi6VPo4SRxACeKKDXfbGM72JFJa9jWMbQLxGFfnqtvFpWWdySs4inZo2JVmBLfb7abrYxm7ouf2nMbTbBdN",
  "key24": "3Yj6cdNbUntPgxxNPXJrgUZercVjXPNMLZTk1hXicYehNdhQoGCXTNSJxs87z2Bbj1GzkksDRpHUEXanWQ8eJSTE",
  "key25": "4nSL5AxBZ5QT6YkrKKXrZHFEdCneELW1sMMVDXD9CCoWegQzDT1g6FhEGzC9zLj9Nfsw6GTziWNeUuNtZurXEkiX",
  "key26": "37VRrr3Q1ChCUQnxnTN2QtAAuJub6V3JnZgoKkNwBYVc9kHK8ZFsoFJkceyRV91ayYa4fr3rJ2hDdVrgLdGwsg6B",
  "key27": "3QUHb5wUkLtAQDhzyrMAxtXPBHtJ6WnpjAMG2iZgJ29XMBGSHrxunK2L6d4EjfDFziaFR4a5fdWDdXdMiGbTqmVX",
  "key28": "5m1PY9Fk8qnjvAzK6Z5tN6H4bKWsj2hWKnPzBR5QRwJVXE9Wntd2b9eMmMX514GPuVBwqrTt4QtTFrhCLcCGJU7A",
  "key29": "4b4uZmdj5yEHUpQSLvv6nDXPz2eiSUWmW4VXHqESwWqMR25gUpsTADsuMJ8CaAkx35Lhtr9S4ojupwZ8sDbnjrCZ",
  "key30": "2FnnEZtTjbj4woyWSUF4tECXDhwbC2XvVxjbLD5c4HagSMCJV77CjQMYFQ3oQmHLi6B3jQprEzxsLezXywTF28Rr",
  "key31": "3xAwTjq3Kp5KyXAJPYxEK78jquo8bnSx53YWRHKf5r4hGidCifLiFAXFhfzyeWV5L98EdNxYMPK8gebyLhdVzf3i",
  "key32": "3FvuPqbyHdctv3zaWHJpp5ErLQnDtMb1Rwd1CaYviAKoVYTGTmPjrgAnsCcCz9n5bbuDc2k98PFaargNCk36dZWt",
  "key33": "4mXVmCMLehE2fJNs7DwFxMu5XXjYBgH4NmKCCFS9pdZno2KgK8Jb1S9CP7GR7xTecYUvAbJix8yBm4uBDLBHZrHf",
  "key34": "i2Hq9KBG8VAU1PkPV5nhwWZx8KAssPdW481YEQjV8L7GCUFcRUV7Vvqh55jWKq9yXdv2KfE96Q1XpThCpdqSzzc",
  "key35": "3parLghkT3k8WqkAPVR253Gy7knkWCCx11ajzyqKXN229QkyKf7fYX1PvUyjKqrjbkd1qBnHdZaLLZkBBnRFUNS1",
  "key36": "4Gm4c6qwXhdrMgzmGsA3j3WwpQNFGMc5gZcVa8dy5UxBZNMBDLKZ69UvwRzv4ujojyTocgU7i68hGTe4JLjFiPcA",
  "key37": "34oU78NapqPDTGM16x3HaSCJdgP1HN2L2si3VLtQPf41bVXekEQYXZ5hY96YQ81fY87Fj3Nqomhg5nCzbN5Ccj4s"
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
