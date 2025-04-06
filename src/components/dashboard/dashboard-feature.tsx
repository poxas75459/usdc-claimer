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
    "3XxS36DvV7C1ER2cmwNmwSN94jgpPyemy47nk2YvzqXhBW1AwZDSbTRmWQja1hkXmRg6ydfbi4TzWC9rve5kLM3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BU6nyhfs1jM1sWCDqM9ma4moA28WS8CdbiNfE3hn9Cm1MmELzR2jNx2gjwAuyE3bhX1jeyCgpP1VaKM7ijdwYoJ",
  "key1": "2XdkB8M9CNFJgMp8gKKj2fqkeqFpvBMwW7ZGsyoKcc1cCP1eha7zF6Jx2dBJm6Lb8u2p42oNCQU5ZEobjwGv4eDL",
  "key2": "2psqDbjUNW3kQmfcMedJdEHULzucHTQPi2J1AbzzeYyu36ygKhpqQp6rXWqbk6yQbujKxRSr3sfmCKF226RV65pm",
  "key3": "5CxiQcm8WtgSuHJKhUfSAHgZC8rBbRvh2S8b57odeH8J6a2bEUtwzZmpDcoE1vvaEqmwwDazVWYiZCRdrucBtqqT",
  "key4": "4dk7BkhrvM6SraoAA3kHZTywmJEbpzAcFZhNsACCr8Pu7jVy362BZCqbjYQhrMJDfWWgrdkNgx8NCFQ4fCBmd6T4",
  "key5": "5jVJFN2A4CNkgNYf9ZtAp97gJ3bAbGiqVUcSLdha78LmimR9hLsa6xA6Zqb2BupoJ7mBT5MZ4ZEMHB9Pd8xPwcv5",
  "key6": "64Qs8ADnyjYd9Bk8teSmQxM3vKtCqpVeBPVXNXrQKMjSb74ch1tB96nzKpr1X17qKdCrWLP7GftdQPt47cAYovcZ",
  "key7": "3ZDQr4irZmzjBUN4WCKuPvnzFGgM2nrYbYPAuDew8f5GNnir2ygF88dtZCyspZY8G9Au9bnyEffcr1SVfQe91GEU",
  "key8": "uxhbjn4w39HaUe7mAuAGwXQeENLYtgQKugt4ktMRMKHwy3vq5MgzjKraf5CNoKEaVzQN4U3KRi42h4X94stFNLt",
  "key9": "2ZJCK1cuJtaTkFDeTSszMp9dQrG3kpmYke9ZeetzGXmVNrANiJGYcKsZxMa4TntVWLecYTWSaZg5ej17A91BoPia",
  "key10": "5CfDzY89dR9o3WMT7fpeGSQuxoMcfMoju27WusuVAdEEdHchu1uFjjd8MBtPx2i8qw9fhCytMrQksH3aeRMqV6GC",
  "key11": "5YFQNyLWfjsZhWQ8HJjZqJwaEfrwg4AhvZnpNPUMMQVi5pw8iUtV27UqQVmgUKPQjdE1SG9iVY3rbLVASpa9ebdP",
  "key12": "5HUde2vV5ucXJY8TBTwXc1NgcWvkVfygBDHQykBA8qx9JBQcwh9U6MfPVvyEhABxkeHXmKzheFLfkqD9GdU6adcy",
  "key13": "Ffc1VuzB3JY32rbBEAdUiUF9KrhYuefq8tuEDHUummF6QfDrw3CFq2wCHkrgVxjSsXjjLjzhNpoDEMK4yxzLMz4",
  "key14": "2jH5nvSHHVLA9XYzp3Le4uMC28AcYfyFPYA7CoHtjUrzntDsTc4JTinqbhqijzEY6jUYFbg9d8iyAcWgj9KyMaBK",
  "key15": "4zcVD8WhkV84gmpZQ1zjSnuTcwZqrM6U2ie1oNkGpF4tM6C4LbYygpjszZ6v6PGwvrfLzY99xQRHrXv9EpfLpEnr",
  "key16": "2mX7BFGffLHeVDApMaZPNZfmdKufXLDH4mvAAirCxuKdcF8qriPNizB7cNBNPzdu9URd7xJPRRMyjj6weCSDCLCS",
  "key17": "3tsmteWqkntt2ZzPAxsJV49jMhazg8FMceZuMthey79qpb2Hy6JvwWsUNDYBAWvv1AMT1MqTdydTAfpVqNvmPFEn",
  "key18": "3DoF2DUdTCQY641ekSve9DCBM3iQeEo634SRfrc35Pc1R7Pjtv6uQMYd5LY1jw8wYX2UqjknCDSfUz8pNofWQSv2",
  "key19": "4NvFTXjyU9GFh5nT8jWLUYkZMswzgUHSia3YgEdw5BNkVq7hkBENYW1CT67oHYTRWJck4Ycdmqz83A6GHQKUXNMN",
  "key20": "2TG2kEwGs2BtcgdtPSuCsSGx6XgBqP48zBz6xTwSGdUhykYCE1zecjZnszhstVeKPtoU29w5PP4bRVMtEe58pfB3",
  "key21": "53H1ZKKvQb7NUu7MAGvg4RcHoLFyd1mt1cXfiGytjozADeRNijKYmiCjjtVr6F3NPTpzKUGg3X7S1jc9hcc63tAf",
  "key22": "42L3hWpTHNaL7qQQZUY9zTzmQnaK7zPH8kHa7GruK7sZgqojHyUXsb6oYga7GDxmEKxX1MVjuUkfmtsZ5Sfoc47J",
  "key23": "QGvGcfgAbcPaPatCKeLWNGXAE4FmkkrAeGa4msezeF5AbD8diuA2DkZXfAvP4JT4TizgGTgnYUv5ozD8vphCnEz",
  "key24": "2gXsV3w3ASFU7sNzkENwjYTjrtfSXXQzYY7fdcfkrKNBTRq3FTHASAMGDWfEYH3Jt1jFmaJCuEuj6E8jos7H1Y9",
  "key25": "5Zu4fy3Y27djQu8wY5mCdbDFJFEAvUPNgNRSAWAiQQL7gh8XBYALFjkeMxXGQNjyBv6uWiP5NsqDnwx2s4dSp5UY",
  "key26": "49S2ggbBqaC2AdPETb3kQjJBnUfMe3hEjNz8a3F5Pv6DWzqjAicjncpXXpBDLS79G9hfsasPRujmCo1i3ix6aH1H",
  "key27": "5CQE84fF7bFDUsMW6bv4Nc5rHBHyz4Jvmcfq8zvz1MQdZ8t8NmxjW3kYXsqwvAo5mcWidmb2zFMVgz5qF6AawYGj",
  "key28": "2FP8JGmEP57NAqF8Zc9aWLpH2FY2D68C8y1u1espZZLVVeiURZqNPBbsdwNCGTTKZZBbbGEnMA51bjnX2JoxtLyD",
  "key29": "4GdgxFBJC3PRFqZ2E11YVdQhQsue3zzGdYbeWwrpjfR8kCkF65ALW5vEYcd21KqrUEr7VFTJrRNS9uAzhRUczf5b",
  "key30": "228nydpQ6gwAUynpVTJTCGPrKFJxKa35VJKyjpzkcSjNsjSrr4N7HxeeScqebcXhYN3U6KuRBsJfkn2iWNQtE7JH",
  "key31": "4FhdHeXNms1vy9GTFUn2WDy2U13LECWJUcHkqSeqQnfeyeHWd1vB9yUQUFVUM5RkZWd3ZtpxBrXRA9nwFJM2EAfU",
  "key32": "479N4JGE6NeA9gmT6bJReritgR9AFty5yxLh6q6YBRuhZeY1iZRj9L7dEwePEu3JT3gx2NgtYD629ntn5JBJjGfM",
  "key33": "5gxFZmLfYhPk75yxyibMwuWLNfvrjAoXyNJduuQ26hQ5jXP3XBvY7iNAgZEuDQyoCAUy1zmg1Q6XhFBGhBbRKQ38",
  "key34": "4LzueEjjMCoEbD3rve822qSnkGUvCqm7Pa9jAXp3f4bSp6dTEoV5d2Q7ZGNJcL9BX2oFqL2u8PvfYQBsHa4tLEdw",
  "key35": "3iAeHLNMqDPAAjhfsDcx1ZKXwzyzUMYtCevQXrcQewTJE7KhT9gZCq9eEMjutHJ9MEHELGei1tcaBs8Um1Qd7ayq",
  "key36": "LSCSGDWxLMGd6Q6qFxRZP8oQtyyj5U9KDkGgVNJNk3VigG7FsynsMMBVkVRdmpAbQhh4K9ExJGK7SETo6a6apYS",
  "key37": "HcfQZawuLbSaSmUQkJni8qdNPBumv7FTg2MzDVRY2VeYyK6G6yVG6jF8zMPnQnzM4fnZ4qenMXPmabi8HRQByWb",
  "key38": "pT8svNZsP2mMfyJ14QYbu9wYDpBnxrNaTFamKn4ycYKkXX77ew4PEPqyEwFDuZYWQwWJTUhSmXjsQc8HAEPosB3",
  "key39": "2TKC1Q22BAzqGTmWTQDekasWvBbtwpMSVTkDBFtLSka2EiNegxGv3czBoF3veedCYn32QSVBSXQuuSD1MPmAuKKT",
  "key40": "3TH18fcUNCuwbWZ4MX8X27STrz7QsUCnZMRzLsULpZz2YkUpZ4anqyMHwCsnBBR3VTeHDR1dAwQEH3iau2388DJq",
  "key41": "33o1o5shzFFqaUScDEjXzzo9W5ZgxA6c14YPJVGeFMz8thpbfi6MQ1WcA3bxCCZZV512EZycPkC3rVca3QKSD3wR",
  "key42": "RUWxHie2bKJtcbP5Zv6NPgZn39xjGqEzcEXZJZkW7XHsUzzAiVouHnSsyM8oKytoNtgDLvFf6LUjSg9RNPP4SsA",
  "key43": "2W7SPdMAXJ7QyTEwVEV6BY8vcfjz9AogvmActY3iRo2sU5PdqaoF46CUCv7wwpvAWWJXhFkM2JDv6xWX3GJqF27A",
  "key44": "48PuD6LkYK4uhPRjQfZsX7gFr6XNAoUd4soeur3LoqkDnTQvTD7LL3YURvEcFLCXy4u4jL5zzJ1twdWzET7kgyHT",
  "key45": "3qF51hi1pain1p1XzNaTaAbs5d9eqNXDCcEvQk31wYHeGZMWcJidCjiZRMVYrLWyiLSroXaf6bWtuv5iiFYukq9V",
  "key46": "61HbeGcKydtRzFqJT2w8YujBswDqWtQCVg4bS4SGLwvZ3skHpRbsaKV13udq8jfwTxAA2jw7rVEse26Snv1kxk72",
  "key47": "67JeCHnCfZ4g6CNJ7T2ystXQq3vM5uKbyRwQMjSTgbPDpz1VmU2izD9mjd8Jh9UEP1pmHnjcmqjaP26JassK2F9Y"
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
