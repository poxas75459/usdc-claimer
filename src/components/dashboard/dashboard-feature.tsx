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
    "7k9pStZmHdEbKWWx7xZ8R9GLvYDLFEnDGbAfmDoZMuGcnBdJhbnpQZDJsuL3JLtfucr4QQ9RaHL6YZgy4hi54i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RDWmGPUL17gRgpg8r3XnHTUjD32uNUHBHPk2iiFPzqhTp5aHFq5pynmStZrmZ9ukBW8b5NMUhz74jYzzzkX8FWj",
  "key1": "46ccaEdhpj4Ys5b4hEGmKwnqKJoJFa5snBELF3yLRberG6jGGSxr6R8RPo5QB5q2tDkV5PD4DVWJSyCPM8126QRz",
  "key2": "iypF9WX6ZpqQRprSV4CLtRnJgXB1qv5u4WpN68wQYuwVjNF4bY7yK83DNA7ZUoMQUBUriYc9zZAmG3mZfUg57QG",
  "key3": "3FK1sf5rBHKCUEi46cSPwMS9qkwT8UwDm5Ywnf66Af2B32DpuzHMBh9jWxmua9UEqQtKDLrruYgDA9ASH2ftRqEQ",
  "key4": "YtNzdLcn9GrvHA3R5wH62RisXRxWfdK4cApTcxuRChWTpoAMN48G1V2mzVsqCfrx97HHcRsxVFq1aiq6bwMQJLB",
  "key5": "G1jjgsp3yLEjyUTkmYaxyUjMm8MznVrcDbCpayvDg6pKuEziagdsZT57rYrFKAUvbiLWzfg5arNUVWyoo55JHX5",
  "key6": "5iRU8xshQeAwhTP9ueMb3tbXVcVE75WW9et5QUnY1QX3bffPPDz8wQuNi8xxLWCMhuJnzAwSC1875GcBnKPNrDQe",
  "key7": "4GxaYoK3htimWCRDiHDzTUXHzPctcoyPZut8eRv8UPVPCzpxWzXp53FHYv9AANVsqbyE3trdQrUtTdE1Qm1D15qF",
  "key8": "2EkhnXXjvY6W9N8NhpxhVwMvM9kNGUYPjBhY1Vz6pUm5N1bM2QpaCShT7Hq3vaKs8jU7Z3uhUD367wYHjVnh8FUa",
  "key9": "4RRxjhyKHXtmhSHkHHo6jihpmv8UAtLfoPDsmLFqm4oYV1KERA4MS3cWy55QtNZkpurRwA8z5Zhi1Ph2P9pP8ovp",
  "key10": "5Eup4qGUvUcoyJitwWaKnxYPQ3T6ZsToPHLUbhwKVviG4XSgFD6LxECe3mTtdsLEK6knfG1ZBEGTNHHyVzTffZxm",
  "key11": "2VcjWhdmfyfSdXR4StFWtc1A6Wk5FTJnspTX4HotvTDjpS9xCPbzbwK6w79GZuNdtXPzBNsi9L4Bm9pFTGLenZhn",
  "key12": "4KyGED5cniaD3fZJoU3bAYfqf5JpCRqC3GFPBjzomQz51mBrVKLTXjFx6NsbE8SyRHw7DoN8g6jDVNuox4TCQCGJ",
  "key13": "4KjaJ3MhpoamFeA1GCViJWfwP71LXyLqQWm5QjpJ57hSzkg3FmMdkf2zyiYuai6u6V47qb3N8qQrXPg6ScP39zxz",
  "key14": "5pCuBYM9pwb15MBrdJJYZMB14rSWQspqfU71twciCfXJYB5mbGernWfSpvKZFmaz78RpqMEr7nVPE3Vsq1y3ggMM",
  "key15": "3UPgf5uodCG6ipL6rmhoMFWMjVotsaM5RVZkG6DHJjJpJjocUpfx1iGMP9P4d1RFLQm9fh7kSvMU3aGMScRmPQqV",
  "key16": "4BYzdGiEbDMh56P1XyKfmSVEDbaosscFEpwPvnvaXaBzGNZtfQj5sTrWhrHa233zvgxW8G1F2s1WrUQm2Rb86vRt",
  "key17": "4JLv5GfpVgYPFQDuJowxtzEP5jbqQSYreHmkvRGCKey5TKLh1Ut5T7dFRsVUXaixkfaPqqFoB6WbdMsmVkmB3oAf",
  "key18": "wgFdYx9mo5qUhrSyPkeS3rWVJzo8rxXwYqHQZzxWjRH1jL7p6VcoXKV1zLcxKzTJ3wTqDBCy3UBo2b8dotoLsg2",
  "key19": "5YK9gtfCBZT5p85zwJJhCXcbRWR7qH5B3B5AbqfgtW91iodEJxnEF91X6SMVN289UyDucNHqjAnvKkRNDhKqk1ep",
  "key20": "2xbGHtVAmxcYuQixXs2kVbR6C67bxCAMysJrEcgHfMNDryd49BxsGPzBo6Vs54uP5NT93a5wVnTTdDet36pFH1VJ",
  "key21": "4r8Anjx21kf8cqjDnfWHwSfBhLF4e3qmqH862jGZh8t2NgCpAZNqrMMtieRdqcasPFQF3dowSCgK5K2b3HADomMg",
  "key22": "43x4P2uwQf2LCm2CBoaBkXQau8tD2QgsEodBvKktHz1jirqAXjsU9NraMPbcsBQZu4z4p33zKVvqzghdL1AEuNUS",
  "key23": "3BEkNTCPSmXPs3GpjAcFEV2CdoypQJ87yTNJkCXPR14y7TnzDszsMTWMqUzg5oyGg5gR7pAP8oBACnGz7Cr7NRse",
  "key24": "3d2kF6XsKtGprvbXhspfvSLE2AuSVWKjgne6evkA4L7HKCtLERKMV1c327DJh7qEoA7BwoA8vV1Z2sZzgjfHiMLd",
  "key25": "278Q7rNfZKuZRL94UnzeZt2WwY4ByfFdNjL757NHn7WJy1vVNAkVQ433hCfsrGXT8F5KSmabByjVT1HgjZzRvvwp",
  "key26": "4oZXNRkBSfHcpwzJZeiCHW3i2TuJ6QeSJU34pv4pb2cxcaDSW2sXyLS5EyajcmHBV3V6sgxv2QyJAADMf7mTQdpL",
  "key27": "4zG37T74t21yDSaPtsaTF6kZzNz9kiaEVKbdUg4Sf1hzQekHfW7iPacVPv9oVuo3382TNdsJYc1GtTWXrjJPrQfv",
  "key28": "2ufQFwJm8j8oQRuP18BXGX69AoenehSt46m681XSaMEFsaeVifNkAa8GoaqLdPmkQS9F4JMAENY38gNkQzjTGsnR",
  "key29": "4D35eS6NMwm57hdd1faT9RCBvRQmEfXbhD2cnTbq7gBqSJMBPFggZB9UFXBFbybKtqTKgQi5gdsuiVnvvqnNqYKe",
  "key30": "2Ti4thPSxQDDx36aQybVe1QcYNixJyceDBZYjU4jgg1oNffdxC4oWuLMXHuRT8DxUzFxcLbw6fTZNrWbtA3yA54u",
  "key31": "64ZFZgkGMQQpCsbR2C4WeWPm6UNK35FRjnzk6REgx21YeNjWU1cpcWH2x6oQcEve2Nfo2fT1zCxw9VZH6zVJY52c"
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
