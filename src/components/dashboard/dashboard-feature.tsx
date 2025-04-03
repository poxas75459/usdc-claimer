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
    "5QgK2xzEY4TieyKmpdb8u6o1o4ZP8FbQP4ramuXFpQwD6T2b3mAezSKFd8z3R1E88ZkfqQ9FP9VzvghfwuDySLzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwCZ8RKmFkVaS81pXtFF8X2AxGz9D2KMtos8kAWASXnes6gjonnebvNgByFfkxeSz67MrBVTwuz5THBjeEmoLDs",
  "key1": "5VoxU7TStWxu2MB19hzHnG3np6ZtBxgvpSoLRdyPN9VtVJ3Wyo2nvjrsitgV9z28cvWNax8kqrL7zzYcEj4nmKQ5",
  "key2": "2kw1RFrbx2kziGLWoZtgLhTR1gnmyQqopsAhY6v3EMYYAyDAKhz6HRomqcpJbJd8TwxGD8XsTyNG8caMv9bWNfUP",
  "key3": "4CB7gDAX4EbtY12GHx4QkkPNFTeYduC6ypFR94De36RaY3F5TYbbb35EknHeZZ3zPYeGX6XPXTTWmyKUUp72Aj7c",
  "key4": "3mL2mojBHdLmdV4ZzWYJwrTRkwizoUZJS5WCgXiSuzPAtogww5mtNhzqPtxPuoaurdZ6ins9UEDaE7kaujCJTbbb",
  "key5": "5TJFXWWMUhV4ApaEpnpg4PjWuoAPUHHA8ncsTwsmXowf3SZopsVTZwDSzw1CAjUUS8WQbnm4PDPzRhxHPXmXFYmK",
  "key6": "3DYhgAXpxLK2esENQKewoLZT7XtrHojJDSbSW6TEjjZAWkxyg6HPeDumT6KpYxaABHpRmegkgzm216RnevEukJwg",
  "key7": "2WkrXmZbHRTu55AzmH8C1yhh6WbtVKh5akAkgyE6WmAoqrxw6ZUdZ2VNYJACkFoByz2JWxnPt1RwBJDJ1QwGy3ZH",
  "key8": "2NYRWcY9ZTSK4Cm5LC8yKf2s653pgw8m4Go8ZyJ9ZTAEeuQdDAPk6feUR4hqDGPRCDUEYKenzkRKMgRDSaMoBTCG",
  "key9": "4DQoBXakvZuuRiwXUQUyGfuYmnQcN2rMMyXUvrGRibnVQeCZ9bdvELoDFqvuFkRnEUTj15nnXmvN2Un6N7pjwxvq",
  "key10": "3bLKoPUNqwh9dmtBvZoNquZTjGteu2CD86VGJp5GHGebCKcZArNL8Y5VaZLEX1cAm6p7q83n17t9DWbcFeh5q8xM",
  "key11": "4bekxsbrZm6UiTPDeBqAyVzf17LNZMfywPJgcDDyb9Cn7UtWKJFs1AQLbAzQKF5tUVzzSPu2q7g3XFcugQwt1xzh",
  "key12": "5ZaJF6K6n7neebqaSvjMUoX65vYVp4whEe1Lct2Wq6YnmfAY44Wc1jegexFswWEVNnkgDcqTh94gP4rPGbv7vtmN",
  "key13": "41oM8y2YwUHsLKYpRqX7JLXFuMcmGvSCHiSAuEWzgQNZ2vZxy4F7wqecEcxJi5R9i58xihspnb9pVdKe7ytRaE9y",
  "key14": "4tWvRtxLmZkHxxkKqA7c58HvnGfnRepnB9WGh9W1w4oGxnuMzLsgnoyY3KxfQch3hp1yh5YLb3pXGKtJ58pb55cx",
  "key15": "2FMYskNV1whMdqjan46j5NQTKPH2tQUn6MSZCdJ6k5Uzt83oeTjcL1qnUrgV1mdMzDwb7ZNvzg4QmoDTEw4qW1ha",
  "key16": "rPTehJjhR3fMJ4e46JjRX2E79A5X79hSH4JcgUuH4t9pVhJVVwaSaw6ybi1jHJEMqS7shfqQ6bmHxbNAGb4ewhe",
  "key17": "SKkeqFKCobS7KDqsHG7HfDpcT4ZGfToKexTNGAYD3FnMqHLGtBs6nE2CsE5Ed4UBStqcFpH1AvxKytvFg2uoWsB",
  "key18": "4hGNEhkFp5LLnmRQC3AchcoPYCxTeFyhKHs8Fwy1iFtU3QmwKBGXpVHtLr9FTPyGSKsws2oWjenX2GJoDu6NVHgV",
  "key19": "4HGsKdUqUctVJi32AK9qhPcs7zq8kjHwQYUHrUm8YW2DTcJiNS3dfe2BkvX2vLZ5V1fu3p3QqganuHX5qvmQhA4W",
  "key20": "3Sk3x35NKGH71VfaMu623rHizw8gchR8m9xo5WeYhreuBwYngdAW2uEJKDR1R3esuHDymNv9MowN9QRYLSPgWyE8",
  "key21": "417q8htW7wVnM71k9XLEcvKXXuZnSwA8kjRCsxE5HUwJBQBBVn1nK9eqjokxfuekM79aNEGnN72q8UB4DnsnAM1s",
  "key22": "35Rh9Vrt2GxrS49HnDcNj76qawxTEtRtedP1SEW6VsbjPSNZYCA9eFsK3wnwkFApdn924P8jF4NDqD6qFsw8wjF7",
  "key23": "BssybdhdS5BbmFQ4oXd46YGGPuLHjgdYhFyKgfNL2WkftFYHwzxBvSiZ82xEkLWutkfNsj1yABC8f9KE66Q71QX",
  "key24": "3kswG3itrSN6dPfg515TRhuqQVnaZjDPqjnZ81MFTETNTXvVmuX74nofrRTCx88TLturMdFoHiePCNvFSiw6avMe",
  "key25": "ZbwtYFk2f2SrVNKUefwAo79eMq4nATTEzqD6vNupUqa5mrdYzQebxRdExya7HML2fNPX56b7c2fsujBZm3AEWbL",
  "key26": "2vaFkBxEVW25kMQ3h43VucdYXaR3VwZT4eNyxVhu6qvTfwnG4Kkvt8MoPbuTV48eS5VZvvA4jr1eAwKdMaED9TD7",
  "key27": "Qw3ke5GPMb47kPxQqoUqTPGXBhDAFTD7r6nWBtS1YcQzJNtfYHp5hbDeQtApSKkKAJ3ZhTpqFF5kQ9MnTPH6pnh",
  "key28": "51gakD1V9grts4q7XofbKb5mqwZTNuC6CFdXZxx3ZjCarBNJ3ViWBbjpT6SUZMNzFdirRtC5Z8bSgUyRuTsCrQww",
  "key29": "5A2kXLPUHF7FzUKaSKhL5JZsbvkkuasKpRdG6hgbkvyd5CJCZKRVuvAXCdGyuuHyRp4K26WQ6V51uTjdUYihEQ5J",
  "key30": "kFbg8NkT1VdeEHKZZxZ7G78aRKBgqc9USa1PEq9i7iuM43iyzxpvduVa7cD2bhQwNHcX8kdgfkz5Ui5MDR5fVGf",
  "key31": "R4PvDLMzaPnQQJBHsGZ6kn44KRtMXaNawfhAjgkVxrsw7xgEK2u4rgtnafhk9jrfQMqApESfzEbmpQFaMieCq3e",
  "key32": "5Ta87VKs7rotEVsfGVA1KP9S3uHHDxLYPKTX1tWhdaHMr5CfyEWGLwe1pNE5za7wcK3TcKdPUTqweGkrzK3Vo6qF",
  "key33": "65UDeMJvKiQDtXouZmRRzoHCrdkhGjAv6pvFzTLEQQ7vLQBYxruJrvDoXifsvW1hW186e5BfUuPsWyi7S4CQX6Zq",
  "key34": "5RFpkHjHFYk3Uf5M7rjC2ELhQGM6CoNPBxhCvuB4RavuF6iP93pBk5uspwwgkKUHmgtddu5hEJjyx4KGv1Vs2BsA",
  "key35": "3KhGwrh42xQ2tQjPLQThPdH3mFz1JgMhBjk5YaUfSAaUytTj571qj3sospzuDDcMQJc85FyDPMQrHCSRt5YfzQTB",
  "key36": "2pmS8qjb17fiFw3HX5XNEBsS5W7uG5dwnDhGKVWDCkN1XnpUBjT6HWcMWPQuiR6M3gP3rRhNTczStyp9kBrbN9pe",
  "key37": "3XqRFKNciVNFGEWrvAB5gFH6J3MVty7QiPdvtV6aodpQudn5pqQzz3ueXKSG7fCpCLvxrrTyXoEtusejWKVkoPW7"
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
