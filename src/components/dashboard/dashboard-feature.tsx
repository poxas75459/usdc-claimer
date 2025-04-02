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
    "2qUuxZBinDdAFwJJrayV4Sazw4WjWy8maoiayE8sLYUxEAg9uXmcuJt6RFmR78qtWfF6LjtikD9CLdg4uB6adWH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPSmpTgukUxZ38deTxF7J248vGjR2BmySDSABbtbbihmWqNudjXhKfycZQKEjaLdSv2QtRmeifmWuC6G7JTEvxN",
  "key1": "5LrNcFZ9XvayBnkQ7MiskL5XXFNURNzsSQ4ugcJ4cGLkJJQoVoFg8JrFWVSbpuPdYudjo6T9VVuuS3LYN3oLXrff",
  "key2": "588An1KctBjccYpeHfdvgJBvzVz4S7PcCXf6P1sAy1hKgp8mnAEinnqiu7gxaALHTFtrpNGxYHSrg6J6WURKHN6K",
  "key3": "43C2hwLZUfHJiwY3Q4xfpTTFY1CAeVQf4uRNXn5CM66g5AzV1GFi2u4EXFhZMbcKfWFeT9hiG9QVgf8kEbBFpVjE",
  "key4": "26x8tsDrVCcyGaMtz7NSXoXbp3t9sDxk43aDwp9ZMZLQ4otkDLYL9QkKnMBed8Tz9k9sLV4JjjBydpeLuM997m7R",
  "key5": "5sswCvVszTXehCZxkFRCdyapFBGu99hUSkPcGpL7Bpm1pPJUX4DyLaiLkxfFPaJigeXb99ANgpvRsXtnasuYjbyG",
  "key6": "3vWxEXpfrU2PLqUDdxLZWaSNqNvkgkLv8tz3Uy8E8vyCYPKUQaeDSjicbo69vaDvBd9q5dj2GZ6SpYzP4Dtjb2WQ",
  "key7": "21HkFGunSyG1q3PMrjxEoyvNmekpXrs8s8zXdi6svnHsW8X2KuRmPfzwrh9N6wRn271SXhivDrAKgyLKTrs2h2jY",
  "key8": "3TZVJmMoKm8mrmrreVPBmvi9ofuyusPXyWtQiF1T1XCKyd3GAHhEpT1YZwqQBJ5c74s9QiCjnCBLtuSU526gsT2N",
  "key9": "GyMJsAoZdrXgN5Pc9t4Q6GkXRkE6kgzMHwCpJp7yRqMBxjEZ8nFc8pnZHKbD7SkdoGggDcTZksnKjJSdwjTbZY1",
  "key10": "2PJqALdBpAJPCUgURRy7etyTsZw1ZbBexgPKzNppgT6YjYruqCz1sqRwo98r6YPqtAew8eBhCADAREjZqnvasMap",
  "key11": "w9EsA4Zxyaw8jo15ugrQnL6uMJcDVDZSYygrcbgT2pHPHjN5CvDoKt7CbpvLNrj6ND7K8UK9MJmc6HQiy2CvZU5",
  "key12": "2PqqBLghbB3jxheaQbBudASwnjUPBrosasFiRefUF8tUb28nuwExUW91muGgz69HwzdUeG3NfFLrArAcmL5WzEFk",
  "key13": "2AGzWerAMRM1Ze9Ab1TRmoi9H18YeuEajbkJ3Qa8k2585QPAe5MyoMLRkvqEoGVqorPX5xyUeCaDCfiSo2TEAmtT",
  "key14": "3H6nzVTusvnRmSjwEPx8X9QwHfc5UnMDSC3meyT3MKNz1Cre73CHUcRoByahEcepjWtxntdaFsjUExBE9GdMzsDi",
  "key15": "3qYo7sgHgPE6hFPofsD4WyBAh8Dik8ej4VV1hyqPrBT8tkjkr2V8ao6aqLATP4UXnzneWqn4f2yh3AAaevuMu4Bg",
  "key16": "2G1GuGZBirpDWWhuHYHJZvnDU1i6nC2YxBXHYuVmTzHbT5B91o58XZGf9Rk2eQYS1GRf62vKerrpGX934rUxVhCT",
  "key17": "5GJVuX3YqaofiMKxAoA6dbhmZZWEUbdAvSivFCfhkhjzFx5zqA6syAcFUFWsBhqPhq7UmGaihAJxh88JNwVm4drX",
  "key18": "2KsahTNq9MAdmvVK3GdiZGtyzapxbhYsZmSuPxvqrBskTRSAVhpWZ1GRkcKtqCKXjBRuWFBYK2oE3WppfcUyEjm5",
  "key19": "4c64mCgdwHtDtWsn61F3MFBR9HuBnrpgfPBfdtWgp6M1HmX7XByg5MQ2MJftZcWSkRSrBfDWENXUAQigPniaibPH",
  "key20": "65FDJvsmtayXYhFQwamgx4K9fGMM38QUYNcQGrX59mAPdH7gWYxDb7uX8vypzAhvbcHZ4GiZs4LM2pvh6hyGh2jQ",
  "key21": "3DHZXVjm6dK1KSdCP7RCVoEXLjdT36JjySxKeDdqNiSfASMpL5bf9bVjkrWYyrb1AQzp93NapkNoYJ9BhEqTA6zp",
  "key22": "5QvDJermHrWGfLHJi7fMAqax6suo1F4NfXmNNnvinTdiNi8xZJG7d1qDjGNZ46JjALAenju2EDYdd5YNk3D73Yk8",
  "key23": "dYyDdLRoTwPmYcxSeuvtodgTTUCP3zm9A4t8d9RUEBaph2GrZPsanC9kFnJEPutGCymS1Z9i4tGJgKYabBeB6ni",
  "key24": "3HiWPDrLSQQFXbHMebigZEdhojVAqCBtzC8YQBFAqoSDmvqrX9M4QrU5wDLKqnDj6RPgQFDTRmMHezcs2tHby2SD",
  "key25": "4zqfWZqw82ZFQ3rP7ZV1ACvahRLcU7cvay31zVrTNRWhfrnFsBwsJJUrc62dD72HngYyzEcFHRoZ8oisomnFW8fV",
  "key26": "42qSX8i8R6QPREB3CvQEGHAmVCKsxgNnApBxh9sH1KJCV4erC9qnWWkAVAWqmG4j3mCyo7tNk3mvvjkmA8uQnmxi",
  "key27": "5vtPYAQTn4dVt95xh2ydU9S66iXhePtiiDGuNkU3oxHXEkxdLrRw6F6igrMEY8C4syyoshZFJPKHMj9XWgVcpDEc",
  "key28": "5CxpyrWpxFusDW1nEoRLFUHjF27Af9PzBYFxfqyqu5ZbWnsZqzhz4ZCb5oDj8Ai9apd66L62EVezmqMrJQcoD4Pq",
  "key29": "2GDSrge5v9dQ2tDo1fk4bjxHe5atBLkwHfm8WAgRf5r4KFnEjX6G15M69aCYtvgJcBMDpaX5YdwMJ5GKX5tFjojK",
  "key30": "3jBqUWqyjB8tCf5aTSmDrLWxv1o2moeCBietmXYJB4wmaFFESvJ8bW3gJYkVXpiqga2b71KDG3TMeo2fKThGyQ7n",
  "key31": "4vLtgtS9pqncfjUP2ykjFNruetEQcsfWi852nQ3vnrkpgbR5TiK4SkcgJJNdXFvHt6kyQAhxFDyWoPVHbwUcsEgh",
  "key32": "5m4iUkV2wjRuBByKmRizwErpnyjNo3L1r1RkXJA43abLTX4Ywoyu37jsj5hygEUZiVxUzym77zCTDjUB6iazuGUF",
  "key33": "2vEXNrU8zaB1JZtd3kXpNXNTEYwpPzzzETud6s1dNcHPQFa8RARR4U5egNHVS7W1h95nfKbgXzj1LeuuvZWBzmuv",
  "key34": "5dSRGr1pKjceqw1zSASr2GAYdAzWgfLCFyxKhzeVHT6gCmmEm4X5mjSJcGVAW9FsrAwRpoo6X6uZNeL9rZWyEFnG"
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
