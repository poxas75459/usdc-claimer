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
    "55eAVYCEg7pwFdW3zWsFKBDVpVXMKvoMhu2257AnuQsHYd7ZMAucEigMb5xwvbN5hPFHo5aeYtDmLyzRKBENdtE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHSf2AgL68Zp5aPPEANMmt22gCEYzcMDD4Y8kvUjHCxEPxoL9ejVhBorjXEJz1X9c7QEBmCeyFYvYH1cdUzdmZN",
  "key1": "P1vzzYYTghumtstaoaRNK1Khp9cfbbfnyEUyKS7xfpJvyCs4TRm9fefjh7DVZ1fdxREPXW5sCdsPEAGPmFW74Gm",
  "key2": "4zfoCXYbPmcjwUcAuvN6eohpVKBd3Wq6afbr2XkxUFhZbS98YshyCxh8BtesdM8bbnQuSJar85yaN3Hi51m34v5Y",
  "key3": "5un5VEXCeUpYZBworNKoLQevt4LYcqsrHxFnqSVjV1dE4dUvAfAsyhbagkqv4YPW3ZEwmQyC24QfmFK2ZY2kaAuk",
  "key4": "4sycYy1LU79YzhmFKcpApurQDS3PFg75vE2WrtRSgyztdW3s5xjBZ2qz75ShNkmU22UaTD2QDxbyAyhTLTk2t8zj",
  "key5": "3pvMJxhiHZnM6U5rAMQb9RaneAraY7bG6J6tA2KM2LdaZhQe852YG3MxTEMQfbDtPh2XiPKGBs823GF62JosZE4m",
  "key6": "4zg1hrCgaRufPYtvWB4G8GCA3Jrxb3X24Ae3YxCo1zNDXZYb6HFg99ZA35aQ3Py9MqKXdQX52jButSweHZFmjAzY",
  "key7": "3kHLmTbTBjkZpcoZfqmcJ2x9ojpPBNgGfnfuLuTBF247M4bip3o3GYMnntLza5VuqrcRCV11j2oZzGPVvQJkgCjx",
  "key8": "3P3pXv3APRg8S4r5NZPV8PDQMYkru7zj1V6mZ4u9z6U57KCzwUrVVg1rYmqV3c8WpfpaggWEEsUyxdxtJpv2WCqj",
  "key9": "41hQCM7HJsE51S8QjsKLiVD9E9MfFe2cVQGPf8MtZCjLEK5cEZ5qnzyKukBYu45ET9y4j6mwapkwEciy3Ah6Ld2X",
  "key10": "4PnonqE2H5MMUEP6s1oB5ohoraBJEg3VgtWZQ4K81d6bzJNC1acspbVSRhVU2dByFnPyrsVZ3QF9FYqCX1icwRKX",
  "key11": "34stPGS5Q4gop3aTgoT4zRPVNDL4jPAQTf9XLJCLiQdE76jsXLzNZVt3yGQszccM3QQJk8dHCf4QhryFuE9pw1jT",
  "key12": "3YDqHAR2KDysWav91QrGoiSspiPb6s43con2p1G3eaiftYffRwpkQEfFcHLJzAaR7MpCzrFCFgfJPHYyjvp4aZmH",
  "key13": "5KNq9SHtyi4EG6eYWmgiJyGEkSw5buYYcKCyao5uYJsot1vcV9fc9SX3q2cUNauF91BppfkAZsfqg4KyuQfRiZmH",
  "key14": "3M2q36YeXBcavBcKxKJJjGG96TfdM8efNhzxmzzxCZjUkWUmMWPia4mvaFJRcdTH9gDiFyDqXwfSZfAyGeEYXWjy",
  "key15": "514Meik4LgHimBv9g7aEcS3JvgvYA88Wwz6cbt7p8mGA65u6fLjsmRDieXpC9Xzk911RThsaHAPV4gM4wAkP9hAb",
  "key16": "2hev9JJ3AmgAbsBuhahq8aAz98Fr8k5jyS3mAtUXPHhpeaLhw62Md2oWEWc1wmsmoaVpkqLMpqGULdV5UD52cZ5J",
  "key17": "BwZZv3PXSyrDUKajQUSM1kdbyanBWMN62nASJGegtE4f3GHSASjyLA6st3Tq5KLufKme2hiBUWBG4zcaq3nBD8G",
  "key18": "3gsYAeXh6nDkb4NFMaPv5UaS1AsvCE7fcTKjFZcg8gJpiqRDEGGBxPY2sYK2NjvaHFwdXG8PnNvfYVTWnkgn2U5p",
  "key19": "2rUzf66L5WyLXKEVpXMwVCEH9XrtqVUKKm3zSYoa9ZvJof7nnJ3vGabrhWrSyWmVqquQGWVu8XLTqpRw68pKTkvW",
  "key20": "3n2ME9XpixcLE4cDFduNdhJYHdW4RXBhPLJVteam2c1wpC5wHsqkAR6srhnAra6J4zvjhvxcomMfseBuMEmjSg3P",
  "key21": "2fww7QQFvqwNEmBM1oBtzgrKrbV5vt1h62P74ZLTPabmpEvgP3DsgK6DKMcqNuWX3hKbY5EVJjtnAjtnR6XiJA8R",
  "key22": "4c6bSu4rE84qcV6TYJHfBNrFNa9JjcSp6FDM4caBSvN2ogrvn5fEXkhroARYiby7k2zs6VN8bFEDB9hraJQniKru",
  "key23": "2C2qvpHMNSc6x6pdB5heNAUGQT3CQv7B3AQsB3vFnPjQTGjWjMSEVYj3wjvwAW8BzNtuiMHr2QLgdij9UnVsx5X4",
  "key24": "SgLMd4tfPobTmEZnKkR4nx78nnZCuUbyCAHgEKcPu39ueoRFF59TJAh7XCsbv9doPter6hdiWPdHN1414Xy6tWf",
  "key25": "2ipAXKMYWpUELeJaX57EBYKgESZudv3bPVFAUFzmr2HiJCWDn9ZAcTLDdm4J9qeA8FDj6WBmZiU664RAB6RNcaKB",
  "key26": "4td3UbPRgKipiSPtLC8ngPwXT8YpzH6rUhhTZMRNM6U4tJa6SutCBVtdDcqU5Due2LYMTNgEQNFqDYV3fPmrwzDD",
  "key27": "3oEUH6A2tn9USjRkm8cp4tYVBnSgzAtvWRQjo3cWB5nU3SRGHKvhMQkeVNu8JiXPmfZT2HQ1iX3xbth1TJkyjxj",
  "key28": "myjXptCRg6mM2AhAZhbiJt4D69EPe3G9aD4TXuhyksMZHHduocq1Sq7YebYBNT8YrJPxk7NseYZkarPyiQFMTHU",
  "key29": "4AxhMMGDMHdUP3myjF5iAUxjkJ2X4edJxtq65v2XLkq1Tyf62UYqoUSznVNjBimtnZceUPxZphEhXrogyN3TrFRf",
  "key30": "2xUYASvfvvTr863czQfJ1MawHR8nE59zX7mtYaz2U3pz4rMngbnC1S6EH6i8pwCHNLi7PXJQfht3VkXpPCm42tBn",
  "key31": "4yuA6XKj5DYihAwTwzyADbV3ZzTge2ug6okfxijU7CNPA238WiRVixYwAVLEVjtpFRqhV1a1HqiyUuUUTitt2tY9",
  "key32": "4jbxfYnASsVzLi993JTBB4GkVtWwiZYS1MJxnQxTZkReQKxtRizAomkyaAC7vHYACMattPNCmHQfzW2vZofbo7t2",
  "key33": "5vchvykm7e7hKXXGv3SPzsRoKWYj3D6Y8ahvWEJvjZ6LSkx1sdFKwGNWssQ2dj1AwnJ2gkUbb8dU2Y8WmNStyEjD",
  "key34": "3newZGR8dobuCKaEnGHewu6izFQSPB3ve9nCx3d2pAVJ5zNYpsFZ3EMSRAv4GnMtZYyBWe6opW6wmYTyjLpe6vb",
  "key35": "2VnkeY3eYnysn8t8kEmuBMTMaTKaPJm4zUqiY3np7uw5Gqe972qYo6vqPvpjtQEUCwuKRvYYevgxNs6EW72vaxD",
  "key36": "59iUEdF4BDErcFmd4DCUJ2wF12XUYo4B1otN5xGcaW8TBpryoXssjiu9pztkkiwzAAcPSTcgq47Knu4WRweMx8uB"
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
