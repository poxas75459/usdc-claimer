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
    "4EJFrx12tAPuosEYDuR1ZxMQubtTRnWWYVUUzq83j9Fj7k8S3BB1JBAQ3QReRbg19Rg1PUmncaAoPmZrQQAnJmnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLi3omRCsj8Q53SoktyCRZutYGG8YNUMLQS8UokkJjEb7afuSxbfM15FXEzACc5Gj15aqwFBZ6tovbtWgmcArWm",
  "key1": "2sd2XUwJyoSTYQ7xFaxSweLVGCfoyCwRoi9mCjMHvTugM1MnLMdKWTxATpwKpk85ENgs6hm6ApyRhuVYCbyzHMAo",
  "key2": "PgHSrEnrxatijWq4F9LeknxqEVfGecs43g4gMq87YJBLoeToCbraxk348mE7N3QhV1nFeQ9y1EgNiaMb1QV8Kz6",
  "key3": "czuuB3cTZrKmNSg6fPVEFK6gFf8Tx4dpLu2KxTrjNDPkxrfEgE4WEHS9Y8XZKazH3hGWJZGqr79YbxB6Jd6fvHH",
  "key4": "5b7pb5r6YfZPfex2oYDbnG2Dyc18xbX5UcXgVVacabJ3LhVbJuneVYYpdMDXjQkJXm4cFZY9vowjKuDKzWYyCk9y",
  "key5": "2f7wEGvAHVsxjcZ2GBpwuk3yNw1hk6epBNo9M93Cr8RPviW7NJ76SzyzB4eKYffcn1B6xzpqywJu9fCxpNsAVpM6",
  "key6": "j6SRzvHgT29CZfXJFVtP6pGBDVpfWWAWm1tWYvqGgao4VZZaiPRYQe4BXXxfBwEg5nCudzdex9wdVZ1SBzyTdGr",
  "key7": "5aRjKkAtoEVunUyVPEunH9zxRLACXYDry75Vr6ysCL7TKsgxX8wRYArygKb4Rd3rj4NReK9WuHQe8YeK5D7fgajs",
  "key8": "5Hzj5FL1yTJ66dicKDQVchzDd5FXvhuo5ArGPqf3HWqoGGEj2aVzxh6X6dy7by7sgUJLLUxAe7F9sQADNWH3zVRV",
  "key9": "4fQUa4PZYkbCY1XwEdY5idVRApWgxZu9MCAwQ8wxxKJ2Dhd4MtK4tXxPJVrxkRA767m5hoU8t3dH6MUM9virK6gK",
  "key10": "62AmeR9YyoYFjeTTZPqkE6awGFHBUndvitti5DSWSbApMPh561uXbv6VjhY2ApDkc9c9pDYACyFGeYKH2PpjiEBz",
  "key11": "5x5u5eJW9YqGcR2nTLjk2TDGaiU2MgYSVAoSPcHmVJUDUdrXjDbRd7fzS9rMqDL33bFhuhrAeAPivK3FTXwKARhR",
  "key12": "2qAu1oSTZ8XaJPRYQuT2Z6dLJqpHrfsYuXAdVRP4KfSVbNaUcxYTnMnzkC4snjQ6Kjwhv7NupWF9ovycSnjSNfGg",
  "key13": "5rjkGPNDfDv1r8zN9e6uVZiPw2di2iMptW4tme9fLSgjvCJxrPexzshBKDySmmzh9aQxWJkcwPAvqDSC84K6FyJW",
  "key14": "2kR6WQ2ePwLNMqc8BrTQZUVe1qfXgGEQPvmwWefGuiiTRtNBK341mVDp3NJwJBggAR29hFeGsVeYR32Bsk38ftDz",
  "key15": "3bp4RRmRZm4EstvD3niAce9jxwToAjsA4U719rB941e82U413km45FRQHLUKEFcana5wGySkE95idwDiqkP7SE8M",
  "key16": "3Ve1UPdbdyoBYpBgYqFUzupcYmxggjZW3aRTd6aHDeeyGx1QxxmGbXdt79fEnqFWKbZVzzcomKAEaGTfhbNGNub2",
  "key17": "5P4xaWbHnUUfA78YLEzrs5YJGB6MAjsjD7V7eM3aBNSerYaeQH4jdNU6ECWFxdcJsRREVLz2ZQK8Kc1j4Tew3pjK",
  "key18": "4HFD79fZqU6tvqow3rcnZHkpnjoRyPKU7XCP5BmDX2JxTWbidFkr6m5PvcuH5zxppmH3zxN5pGps9xkTjAyPGBSp",
  "key19": "5q2Gihq3b8BPQcRLXMm11pXcphh9mkdJFdCDExXWHTjyXZdAA5futHEU4PvAZLhqPbVgWjTMkgpWzn3Y4YSSriWS",
  "key20": "4FMEUDKjgGrBoZZjhZJJPTPfwGp2Pvni2PDgZtHiHJCS16svLYakZVB6PDgiVw4AcA3Jz5rJXUTRtHPqa3HXTtMV",
  "key21": "ZuBNCDVWsDfQsokNt3NSSKB2o9URDJpiF8PmZQrP1wpErThYmcGcoxCkwm8nErg7rrJoHfgAa4uerAUXcdhSA2z",
  "key22": "3RSR25rwM9GoFG3jCTMLV8HQJsWxGwzN2xuWL2gG454gx6eooR6B7NJ5nwRMJfTff278r4dj9YawaYoukXbQkvHM",
  "key23": "nPhpK6kw2tngvKuZEdsxZcZJdsConkThQocE5oDDVoyewovu4f8soKiuv33Koy3txfzKPLndwZge6TJW3mcE9F1",
  "key24": "5Uw4BLzbW186HXrr8EaCNd8KrYcJJfsybCRb99Wv8jhf4F6dhFmNdm8prRKg1utzjv9ZT67RzsUTY4ZPqUdzgBPw",
  "key25": "4XzjkJQDRtZSGyvea5sWtgHZJMNpBpmKLFE5JALLNTYZUcSg13CNhdzf6MBDKgbJQ2Rhj3PBc3AybS4XbNt1fLF3",
  "key26": "5Kfu3HGLsDpjAfz4bAeG81QUavx1zomZUMpMjLQ8yTWG1861eJbHpbT39TJhWuJESDW7LCWa1XNULp5R1kCuGQ66",
  "key27": "3jyU2oPA76TV9jL1P7oZMA6ToCkk1qdMEhD3mrHkPnWnuYGimUtT5rwAC1T49FXSruxQvCa7p7trky7vzEtsk7tV",
  "key28": "2RTos4mi3T948YkdvK6mvLnd4wFmfpbWGnZjFknaikoQ9ursbJS6oMGbBXYpMrBqNhDXF1p2yMgqo7xZCsxt6a9f",
  "key29": "2PkwJerV6Kp2EMH7eA1Cf1QM3XT3GANrFqhsdkHXWNPWEsghgZTYL6L8GhYMHwQyMQhaYdbPb7tMquJ6NfXb9PWM",
  "key30": "jetUVYLo39uhmvWy2EksinVkF214gKnHqp333cetMnRjxKo4ZmR4eXXSpZnTiCw8oJEBWpEJRnzJi2NKdqpLzos",
  "key31": "5fmZtU8GptDA2mDLqRdb58ZvAUvKi7Gs8NJ6J8FgR8wzUmJxrj2QQmYSziXKnCjBVDiBGgK2iKJL6tzVwb1hAPjr",
  "key32": "2wBFozAVvbamQtuuTLDKkPFdsYrS2mGGkYp21y8ZhuPtzhyCcyzTp3FK343vzwuGvGQHYrnk9zqzR5Ju2WfL96rk",
  "key33": "47wFUoSBYawpCJ6B7PFdgaPqXc4GUYdG4oPu9zGe3oVYgsuQxGzA2t78ELW4oNfTGrStEei8PQQhdhCvxdLDfk6u",
  "key34": "3zahxvEAkdEy65oM1CS837PyesuTeBRyyzRVduNgb6rJoJVQTJs6FmxhCVagFRs8BiPVLM1GgHWoxm8a5Snivcyq",
  "key35": "5D8jnyhjAqKMaJVvPVBmeT4DornXcPJY8xAzjKr9EZQG9PFuJbELv8Mf8LjZK5ceT61VvBNkCyARTogLvJGQpt89",
  "key36": "DGHSXAd66SJ2hGaFimhBCXttYWHxox1MWqSaahr3NhYQAhLJhVJagRC4YqWs5Uv6kGn4w9jj8yhsE6vpMWAAjEU",
  "key37": "62utaBLUit9EvpxcSjbzweNuCHHtfXbHhY5iwTxkJntr4eYZfM7UpsX7bNVWqRM85DNB5hsKzdiuqpDEVtoYL3V8",
  "key38": "3SN5mHdjyJwRvhsYev3iMWsvhHgYXo7EEQzgEfB2CFspKvEsUT4VyJZZTc357ueV4w7r2EehoVbLtDoHgw3KX5DM",
  "key39": "21FdPnpwZfAtNJ5VVVJfEFfnjYpbkN6ykMTqhRMX9Z28DjvviopNtaQ7gVFVjaeAReBPMFehGfaWqAQ8bDpCcJTf",
  "key40": "4q9MDETPv3H94ufHRAbUnjxjPWnGAdcTUH6y81iYjbBcdvmaGUA5q5Nqu9oJv9ABo7riPTzzUzP3rVbYmnpd5zgV",
  "key41": "38VX51Wiz9VffXP6agZm1am7S7aQC8ZUsgHiAvfwYRCfMSawohPpsVnh9uUatPth4iMBNQy6nKExLxMsyQAPjqgt",
  "key42": "588bxthJdNpfhTkSpYKw5JSroYkr92z7HjYqCSzgxu31r2KPw1bjweYCM9wAfUi56fQBHQ4gZWEKjPCr1NnUer4Z",
  "key43": "5cZtie54YqpFB1ysgH961wBAYzG1ktxo6qcN9dvVJsVaSEhpNLCJakq3onFycxrWeKTDYbxffTBWZJts2KFTV5xB",
  "key44": "HgoKqmqb5XR1toy5snZHERux2aibphs738A3g6m1RrJF1hCQ27zDAHxAezMFrkxpEmPivki3USwF6dzSqn2LYaz",
  "key45": "66RucBe8F1YzUH6jb3Vgg3uC3jXtvfdoMecrxtWZS1B8gqe63gWPeTpuuRDaUKcHfxU3c6DeTbP1GXTZrtdpdS67"
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
