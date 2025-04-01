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
    "5X56mw3t7K6qcm1Ncy36r6MQCRkDrDPJXiyqmNGppsvkL3f7etbg5iAENoFZMSyQWd7W9jZwqFCy8mtqSPPi7nwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gcbcRAjAm9JLVvttD2QYh5Foxs6FekairVLVBYffQgVDtJR2KtnE2yKDN9sWyoqgEnT5WWTUrpWzwMuhymXQXGq",
  "key1": "LFFT9LcSLxNN1SX7nbDg32yJLudfbzv1XcdJdMzVRLp9ic4kp2bSksWNAEJA67jgENkzbyDK6smaLzemSWowRUT",
  "key2": "mhE5EoXaN693DMv8vPVfn5jNQqVES6P2ac2fVvEr6md3JjSLkQasHUksTh9n5wPyYgaVVi744QqZw21PBLrYaAb",
  "key3": "2ymdL2pfouFHEqcTm53Sqy9mVToyuZwAN1QJvUGBQtJurzLZ2jUphffKRSU45qUk4Sfq5uJ1ekRAsUJy4RjE4xbW",
  "key4": "2PAbLRRp1UjeWfuK5tg2Hrq261oCvKjntkM2C5UWiJ583ikzVv7a2eCVwvp2LWBtwXC4DXiRnyrqWFS62UWLwHsT",
  "key5": "n6zqcbz4PHkwp5g1i9EvoCjrpj7MKv6sou1Wx2WkkRyYcmf3UKfjA1UfLn32pvpaw4LLrPic7pqMLqXh1JM5c4K",
  "key6": "33eEk6w9pZrcFF2iW1BF6qRoW7wjEEw1MHxtSwGgaQUZeG7DzeYK4DjnK731NPXk2obrjUjUYzMgeBmqg8EtrXfc",
  "key7": "4dvCFTD3KZ7TwGUyiYozvKT2RfqHZNnEJv6xX7vURiSReyRK87qiPtZSiuUPputpfeCrwwo167BZgW3TYrySKYs",
  "key8": "45WoDGwKiY2E5zjzZfzatLMM3bbcQhftAN7W5QCU4TVmMiA7eVco2ZFYHh7V25rLQRFfzdz6osUWr5tYJf2RrwjQ",
  "key9": "4sQT4nN17zLe9ehPPfAyXb9TwMLQsiC3Vx78BhmVv3c6wt8wxGxTBmqmfXcbfGy3prD6jXQPgyBzS6jm1PifF7ee",
  "key10": "5FMyZ6qzLLuPaFzzcLUi7aoAU3pk3on9jDiAZNq3798gs9QizUPE1jBYfhRokq7fhv762YLVZkV86HuSkdKYSGKM",
  "key11": "TRxWvQrybAjMo22xxg5VQwaA6sE6MLqBjfdzcv2Pw7CaYpWhc39SSSXTgYaMN7TJUG91qYUfzwv67dYHav1aBef",
  "key12": "3FXn85PKHjxK1E8ettg2NdagepzyiJ2cKmA5oS9xvSZM2QSqkCZRFk8RzMbt58SLcpX3eNNDRsAKoH46qzFFYiD3",
  "key13": "36FGyitHak2KeyHvxDFqe4trJFKyp1BG8squjC86HAGhDRPEwEhEWdC7GZS2ur1ZUyKDjeqR3pqXCzTWt5PuatEV",
  "key14": "pxhGiuDQ3BYfw8La831UZ5eZ65uD8o19ML2MBasyV7wiq1pJf8gMBDHPufXohio1GoKnv79C1qqZR37Jmuy7Yiw",
  "key15": "3TGwJnvwzhRkJhMz5iyaS1GE1YdYR6mrWo85ZkQL7BCLVD2ibpDXfuiB37smAddEtLZfhuu9RSra6nsFWbYdCWnY",
  "key16": "4qJXB4AfW7AcHkvGAGc9e3YswwgvrEbJ6Wqgg9fKgbJvhvVuGspHU7mem5gaCG6yuA2JKxr3zb7TTh8YPCXk9qvH",
  "key17": "5qcZR1KPLCuWkbo9CHtUcnctZYJWmxzojVc7rkFUCkCUkC6uLiBL53BH8BtwWHDPHyua3sFMg3JpghxnahmT8xve",
  "key18": "5aU8jSpPEdvtmQ7QMvgjYxA9QHemu7M99cRQ36dNdtBRsLGq9BhHioq4iFfnJeoiToEDFTtnzTKxVUYsqkCFrFyf",
  "key19": "UwwxkFtsjKbVap1MTmwREEUW3CmcaHXfTM6JyjASTHaVYAqdv72451TCFzwJ1HtMuJWAJKmHkoanz67DbVPocY9",
  "key20": "2jvAyRKnVkc9yfwj5FvsPqfKx3pmWv7xQEadGRj47NAUampM6TQa2Ng18ri4pajEtagPwbxZgT4wajdHq9PWYxZn",
  "key21": "62qYp22bKKmzkDzAwartuyR8LBqnVQcUqvzJ9LpDXwLTmX6WB2yq5C62Xmc8pGHM6LjPucco7itR85CiX3gcQ5Tv",
  "key22": "2dR2LfvdXr2vNzUcc6e7L3N13sDZbLKfh1sGp7cZbvnYLDLPwbaQzpcdJ3tqxKLYAzUre5jSGqdSqy7d72UutnfW",
  "key23": "2C7ssr1RS3hrPkj4qhhwySqSzF8LWoRvmUhtkGXW597YNBvdRMFYCVZpdz1zU8y1Zinj9giUqjwZrnyrQCTHSjpp",
  "key24": "5VHiRiUSHBwZKdyJQDTCLkFGuf6WFSzYdWL96NdBL1gMSWcVXuD9ZVcNcARyGBnuBNUbaXffiqPZeoQcNzktqsQV",
  "key25": "nsqerXJo7pgKpo2n7ZJgZHDTyK6thU5smKoTzChZk8iriPQtM6L4S8F87PjEWpSaULsd6cqTj8uxyN55jWPgmXq",
  "key26": "2vRp5TPMXVi3GHMhxHbyWmoGtxQuys1JQPy9kusEKbSMvqQ2DGvVS5S6ZudPofpzkWNBTx1DAhw25QhKfTf1qqwX",
  "key27": "3tqTjYsj8AhtGXoDtw1UjEaFTa92yAwQDcYZtnvHtzYq7MZs45gnqzJbZG4H8JHs19pKyFCJTQzErdTX8NWqQZgd",
  "key28": "5uL1SFb4uYpAMVq4rdVdkVbUJkCnphqveawwpf528Eg7ZQdh3rJu4UdCZ5cZYR5DrwY7h2JcmCnjtC2Uewb7zbgk",
  "key29": "38eJzb8WBTQYZAFd1FyWQ6RNTxnX5MjfUtnsoqGvxaogdMH15LKDkw2N3touLAZacsXhefey9QA5yjBaXtBy3Dmn",
  "key30": "ePqWwD6QkRESoT7F3jae5npmyZppBVPfKL5KbV6BF2HipBCpqZ4MXaJyqL7ki8jgQgHXP5jaomZYGABbbuw7HJm",
  "key31": "3YDxxKFswzunPqMtuDfo9khD9ybq5Ze9PEg1ZXS4S7KmBjonLQ9ZfhLrbXug9Fcvm276VdyfksTqAjQSvugxiPEk",
  "key32": "4Z9ymtSDMfR2m3zrV9jCccDnaLYjjJNeDRhMZVBcD3g9nV3hi5i2WQJ9WaFfMk3y9PE7nNscxmzzUQ6dSyXeucKG",
  "key33": "vu7k8Zn9YfsZ4cJEwJvHeXXQ5HvZnJPB24mrgN7znGq11QzXmdTock1MUHjqPETJQZ9qGGuv5T3uzfcwLBbvgKc",
  "key34": "o2A6JdUNE1Bp4BuccRLFqhW2L8NyA37XwKh9QfghK6o8eDjWVH7h57P1nEpu6t2Gbvwr2czAdoteahkWjzCtMje",
  "key35": "24LSiZxeofjxnQwTC91v4ptKu6qgMDNes3pCUJhxsbGK9MKvZoKSrpHnJB7eij35PNP3SXND5v4mczTeJzDXTGvM",
  "key36": "2Bfpt2w3VLmfTC2wtgQYTCTa8TKE4gGum4ANoyoKxTsBbrVDDgRysz2yDh6coXDjL8cCKJH9WgysWPShYMN5Y7VL",
  "key37": "4etu9XJFJH43bqmdUyuHhuiTU1VgqdF9g7xkNpY8p5Eb4NUh1cLgEinrMfWszkfxPn4inaieYSEnrb2ZCNKrBCgF",
  "key38": "5Ya7m3c7EpaZgioEF6PukEUYaQztqMLi3WwYrd9iSnCUR5rYWfELjrvsmHGYdCtiWAcGx4Y9u4vnQQJPLzXE7k72",
  "key39": "5nFPs4F89vmAJL4N315jaWkZU2MFFLdk4mCnxdrohMkcpChoXFj57XtfDzmpFAKGvcUE19ZXKshnNpbGMYdb3sd5",
  "key40": "3nG6zqQocVnobEdL4ZkSgy29JQknTWJM9pwEzBuvv6fAKV7uGFJ2fSLVHhMQvnEWHmkL9Yt3X1CW1tCvQ5AnekFX",
  "key41": "5QJ8fMU6rAjf989jkFxQhSptWx2p41JSENtJfxyiseLp5hapspcaYXz1p93nPNjCdbHVYMVYw6qj8fmVVtc9VZCm",
  "key42": "2n2yVyFFAwgQiPAwtgkfiQKwNYzWrWZVWqDmeY94kCvz7Z4YXjHABAoTAND1vsa4sS3JvQpT3Gy2MYkaFP2jyBAB",
  "key43": "4nE97xRyRdhfvz192JLKYzP7C7KuXRGpEyK4bEADHzP5zN3q85XRF47DFidBUVFGv474N2nYjXCVMteSZHpCTZTd",
  "key44": "62oSof8YsNWNTB39jmKrCLnEq6igZptK9VoU5eDe6WcbxzMgqDP7moR86FeKsNKWAeZTq56Z6fvEjRwMw2gS7967",
  "key45": "2pZL3csi4vBPQA44E7j2DiZyw9XusXQCdHeqtaSUYM4M1UDqz9oMSA6u4cUvogqnk7PGR2NzXb2YR2cLt3WpSkvx",
  "key46": "4NfyuUErWhgXkZm5n8YU9p6roEsoJ4n6t8EmeVRLGQbACkQCHWb3gGThz4Dw1QcSgG9eeeWQjKusrARi7MbrDYAG"
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
