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
    "2eQsBYBpYiX8JecTsyZbqmW5kx2pmmpHFtU9WDeGgvs7WuYGqUow6PZ1tnf5tWCcKq7uGQLR4M8Wn7DU4je8x4YC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmeQ4tayqhksyK5QZM4XLnEBAYZRnwuoTnXpfsgd2iFwyyjZnX9KUav3xCtZPWwx44oPDsrXmZYAeqyph1hAf5q",
  "key1": "3oykiCSKgRrddimnxMnBLvPqmjrC9Ctq5EstBZcn7DJ4Zjh1bHd9D64F3Yx7aVhk3Kz7LvMU3GUvjv5Gn1rbsuE4",
  "key2": "4nb8GftVcAgRryDiYpkn9uRVgf3r2YRVdqoNZibxFb6dJppAC6ajkA1wZxkncvxbfgwtnp93wdeo1xxNh9Bq4sbq",
  "key3": "3UD7TyvdcGoPHKEgoxVTBYKwFJF7mTywZKzJEGyTgykH1r8FjdvZv7VJNbwmYqjqZikeqJZSrNAY5NF1vUMmBUYR",
  "key4": "3zzjPez9i4X583fifN1fDpf8f5Nxm9HFax1AKHkvKgcSVZPk2CjMhx8kzVMnBBGnfcXMpCU4xDU89Rqw2ujAmhkW",
  "key5": "2XMmxL4xR64QZyQahaG4dsQ8kDUuniLMGy5A1BZYLU1JtSnJtjK1DS54pxGPkopoV8LD1tMkoeJS58CQ1g8fUddc",
  "key6": "5FYnWp4qkAYZdKgc4xrEaHm6W7Pv3X1SGBMBWC7CEvjDKmEjDuV4GvSm3HuG4pyfTuFoCcL55aBDE21kyUwsavDP",
  "key7": "46pJxztFKxcpw8rJPEppwzmZZpZXY9qykTCfV16DbLoYnWQmokRyY1N1LJjEhBNmGp3Y7Wv76n6DgTrPZzo1a7wW",
  "key8": "fN5vftY2hsNWr1HHhFsK7tKmBgGVBbiEwURbLt6R4gc4LqUu7Mvttjjd3EpKuMkBu4wGyDuWVXq2gMM1He1Mcvn",
  "key9": "35ZSEGA54hAXwREqjLN62jdrhy7N4Dae1458vSrWrzzv2spk5xdEpk2xRgKjDxN17byXg6g76jDC5GkUFMvtHptv",
  "key10": "uwmecS6F9q13k4SRfJUd4Xz6F1XXszXtSZ1S7m9L4tR3xMHxvMWwaXiXCvhk759JZbV1MDCBnG589UqVcrGfoF1",
  "key11": "3y9GfSmnoXUeEtLRBtA15A3U9vRUDr7Y6KpciZcVBqcv4xnLF7bn7tLWQ7ojWkW9rbo86e7qbiQ5HNHDJhymqtm9",
  "key12": "44so5Y3Qf3bTsHHQtxSeW34iwcPctzAG84n8QLzNQnHvoaktiSA2JNVvQeqpAbbw74eMZFnkSP2XbSx4PRaXhCdY",
  "key13": "31PGg4pd3te2TEgxg2fx5xu7JuLc5z4P1nzbwCU2bfVfhq5RJbnXXezFpjwKtdmSGzJZZZt2dTm5oPK2DjD7Hsan",
  "key14": "4R5132TM9YdQHgD8GqcgY3T8mXgoxiK5B9JyF4Ex8BvuJ7xvsgzxLUCytoyragfoqSuhg5fj7kZ53tLn15tsGDNm",
  "key15": "KejgvQBnSdWaq31TzcSvJ2sV9S85HANrQKDvdBY9MYSuhWuCXNHek7kWYtz1CZ3CXmTitJX7bd9rfRgaDosiwJb",
  "key16": "4fBuuzT3X8FpAhS2BkvX1fneBZ7ZnnTWbAeuzqWRzmFVCkomjEDRSq1tGiJpodhC3R6meFoLaaoqRg5vNB62bTL2",
  "key17": "3rCBJvttD13bVV42J2ifrrNVjTCSebBMVD8kMQX4xQAxUZVx8UZUZSMK6pXeTSbmtuHXNR4rLanSqMvdyiUqnPda",
  "key18": "2bQ1UkRX7mES2f6cT97dsYWQbWbGzRpeoJ58LRtvZtHCQt5EyqVV71v5312YEFXD5Ps8xfhhgmNu7M717iJtAoGT",
  "key19": "4SDmaiopeCL2yiXxtRJTLiqHqEwCCg4FAszo2arFAw3bViHv5zFWuBKL5CYY6bZVodudLHsCTHqT6wJuYxiGtviZ",
  "key20": "DT6E1urv7vUigoTRgnWZJMCaA3ByT9EMyTtPu9jY5wAcfYb5tNaxmFgT8KZmkaf1AS5rAhtBzHGQf1abmTsq6HB",
  "key21": "5mqox2HHUiqQWcX7rYXBXaezfuNDQZ7HLD1YmngkoAmDywqCnHrJSssrpm6dW4Zx5d8XkKYot7jEZXnKSqEDRFbZ",
  "key22": "3dsipqN37VM2qjzMuN2BBMVtJVwLCHZrYKqU35YwCcATduJBMLhTxySdr2aDKTkUgSCtKDHPaP9VYgvsnX4chNUB",
  "key23": "hSVx5bexGPhbXrDziDSZ3TQwwU7sqftHbGbxXxUVt4NDPn1ohjYkCCSkjgySxV3AkYoCdeRm4bsFjuUJ91VkVDw",
  "key24": "4nwfxEorpq3UwgeFp3WG6xXd5nsWQrQm71ZsNh17cBx2iCKi9oQKiML7atyhX6WTJtv96pGGh3qkKow9LPNc7JF2",
  "key25": "3KJN1Yynb8SztbbMSQueUGvW4q5rCqX9qfCDi9CLNKk4RwDXjTtfE52oiXz6LYRKVgzNg1LVkmrnpg1VkmRKRpVN",
  "key26": "4qfUiChAqW4e8vaVPBi6q7rLo7Z2HDZ4Cmb2AGY6RLS8CXhWsMYYvRqknbVeAbJ2yMVbc8sck6qGwZGv9wPinek2",
  "key27": "2WDPy7BrMq97h2oVMUqNvBZjvSqnr4fX3egbtMaZ1gtYFurWZfrGvJjxkkR17avmPHxPEN1kW3JDzYEJLJtrovtR",
  "key28": "yEudscX1np4R6kcxrdmDK2JnBqywPmqwhkEKhDAU1nEuVXdncYpfdLpyNxgwCs5dNRvT6ALSptaWcsKVWBXgcmG",
  "key29": "Rq6sH7WgY5w59TDwdFpiEJknDBu4JSxDJyS3SQC6eHSuhYLSLaXMxGkuCwzb4TTHDbKWUgkExNvbD718XFZG1mb",
  "key30": "5jwPuZ8xGWhB8Bqeopb6UP4hNdGNUQKiGqtADc8nBiScMhcBdWB3QnUJUHMGNLdkbMXpW2wSTonwJ5H6T3A5aTbr",
  "key31": "3K1N3fuwdA6oMMXXAZKZ9ZJGTBcW3FvUtYiurrwi3YGrfDWzixZtaUX24M76QmK7WdTcxjx9bEa6KWwYRE6vgf2k",
  "key32": "2MwgCahquRDHcWcLm7bP8eLJZmCQQZv1EnruKn7oW1kV3vYGT6mYz1BXGmUJUY7XcQx9Fok5Qt1s2kUXquG81h6Z",
  "key33": "bQ3GmxKAcsyAUXxShbfw4qRZ4vTWqYVaBZSdfpsC6sSv6FSPnveig7w2kY8jGFA9Vzf7DfPrkRk1G2j2uXCbrnw",
  "key34": "5MaWFQr9HvYFryTJ2T5ZEX6isiu4PPiC74XYMX3E7uh6TGGU5LJ1yCKa6yq9jQAaZRSzAgm1FyLHiYniYgQBXFko",
  "key35": "2rw2bZ4KTdsK9D8qhHe6HwrNZHV3bK8ms4YaEnaqnwHUsvsGoboCcLyim9pf3Vd2m3JN5PGc1UHBB5S4swP32Fch",
  "key36": "48e4PqKL9UKkRL5jyCMsJB6ak2ACLaRHqVf8sX2642TjtYxS41Ur1auyfzt6RJtoJqjtTF1DcM8wTKXkysEzJddH"
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
