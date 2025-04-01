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
    "2h1MiPhjiNLd1NrAkWaGM6msudTwdv6qbUodYNe3j5n2474JVepfG7iCcnfXMxs5cPh7QS3RVjqBLMbJMGvSa43b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hop598qHdFpF5T2bdvcozgQ2Jf96gkUJhNXXHTeUn4wwiKuccK6fA4C8Ee21LwzoWh2nu28a5EJneG2kFxxcRM2",
  "key1": "5odMrdiK69RQTiMHVKNrMuKuTXMWjXhiQgh5V7yH3A31XocPYGUoZp7gCHupmExT5ENTZSv8Xs6pqM7nxZZcAEZ2",
  "key2": "4P884114inynGZwP1j8yWegjdiTewGW1nXt4XGcCoj7vS9dMsTEE6wRbKd73LW4rWPNqswpVPTXc69NcK1NbQYmp",
  "key3": "3fFHipb9tDDQrLrvnk7BAkYi4amnR6tiwa9nJYufYne6qieU3RbxkasSRDkEF1y5RHXbjUvtLYmq8jQcmfq6VQQU",
  "key4": "xwkynmhSFsrTcdWhrY4reJzW7ehUzGB8iEgrwMohN9hbUuv5Q68u3p8U48ci3VFJcVwBAh8tcKx6qJAHNnqx4Lv",
  "key5": "2YraVpgHmwxj9Eq1311nK5sn415wnHBJGhxx5GXMohH43wmFiViRM2EiX5eizucSmNxEhopMyeTHqe3wAtZ21v9v",
  "key6": "3pqzCiojXSSBZD4naKEyy6Y1xDmUs1sLLZfUFRSNcj4kz9Ep348w4APoAbd42HeEnqX6W89LA1GGvdtfjuXVVs9u",
  "key7": "3M4oZZWcxB8UB5ZHmbFjBZ5MQiEqDBDFyE97JL8PpifuHLeU4XqkZgSDNTfbdE9MzrjfsAHUvUsBZmtLtvyxh57r",
  "key8": "5jDezGCrfVTdFic7a1wpFFpx4bD5fBicAky952o2NTC6UFEHtFgJ3gDsg7kcxh4yHDuk7yxHV5uHiKxffsg2dgFG",
  "key9": "2kpFEq4gv5L7yymM3qRz4g4fqaHtrGZmdsnx4jchnizLAM1LmoENMWoRDUEEDc5jQNJf4chwmyGpybYs8AbQj9AH",
  "key10": "2VDXBsprfb4hz3PjaCfJrDMhquoeZynkB6Cq9ewe8nzjMSga54bY7tBiZuhhKEDC2sAdEphtQGcQpbcoZ8wgXfn8",
  "key11": "Z5q57GNuxx57yd18fvzWLVP9e39NQ6SoquMbx37TUgAPeZvA47gjgbK4EC4A6jTwGkREdNCvYjkBgK86G8TwzAH",
  "key12": "61QudHcMBCGNM9mrPC4W1UBmo4a61RTYjAFMQBRq9CFDY54bYPPh3HPXVkdjAhzCa1dVcoT84zUi9TPJDhMBrhU",
  "key13": "3DksqCbSeM1K4jt6fi9cJN84bZEyRmbJMLtsp9D7yXceP72DBE7WUDv9WM1NazQug3sj43ogkdKRRwCBbkzGEr7x",
  "key14": "5BcknBLkRorbsvG47xuSRghKqVFDiNk3yzBaEKct9mtBJUhVyK22R2xCVLt8aRAyKjRb63JG3bMVJzPc1dxjABzT",
  "key15": "tMLQXh7yAtrM6Lwc4R9YopecA6op6XU5vtzZbRKQ9TYVg5pDBnhxFkwgkKTMZqUw9oof1wDvak3YPF3pNUdhrU5",
  "key16": "4CiCig5daXZNokAyp3RRyFjYVxpFEhNMX9xnjK5YrB3N6d4DFHAGBtsafZKRnbv1QcDk2pyVX35eGc1aRtrfq5aL",
  "key17": "3i6V4yPSPcEKuToBbb3DA1Zn9WNRQ4G6RJ43329G6ynSkRGzuhZgdmZVaXdhCNp9apoobuzmVeKtRyCRoDj36R3p",
  "key18": "2ZJvwNC9QuKJ8JSerkxGY3ZQrwNZgCrsx9D6R7GZk7eMHeCS2n9gFtGJgxAwnad1feZvxkBKciKiNbRuevntDvrw",
  "key19": "4TAouvPQZqY1mZSgfWbsMAuE25pcwB7bowkKXLm3bSEdUQEmAe3p1sYo5hxxmf3EYyqCYjXVrfaApj9W7mKFJU9D",
  "key20": "gktHqAE3jruoC2Sdauwh9PQ7u7A2CunKodetWAM29p4UAG86h3u4DxdX1DqgW73JtAr5jMyPHAEWBUTfibyPRC8",
  "key21": "U1boZuSWFRi45jidJmeQsaRu2QYeJf8suuG983tnjRZguHTtn2S46MTQRZXSAXzM6UCddzHGJu5XHMoHpti6zMd",
  "key22": "5mqBZVzGswrmJTC3mD5MKPwebUANmVK2xj8uygufupRKD9b7Z6epJXDAyUtr4hAeZG3KbAdoigtpqhr7qXGW3Rhc",
  "key23": "42TRHMquaSCGbFzaKDeEf6TRFu7srPeSaCF4hJ1BrHnLYLKYC1Sth4RSQfbQ7a8qcBmPG6AVZBu1kbR7jZptVgCQ",
  "key24": "31hCHCRpfhvRGJag44CG6w3RQJeTkKWFVSaNfG59gi5a8rrBYcpMRUWRJWyCmiR5uUrhmjMDE9JhdZSTVPEzjbv2",
  "key25": "3wUCByskYdef4M6QKvJZn9M9MrCQntFw52K2Pcd7XXuQ8tq7PKwL2heLte92eCTN2k2nNsK16offgyY8tMPTbq3R",
  "key26": "6WQKsYJsRX9Q6TeGqP5siGvUMQjSZ5PepDfSwuiqsokBaMSHAki5nUSPcCr5ztAHyidGJ6xtD5RWzqwunsi1WA9",
  "key27": "3c3txXXayVwKhp3an9WurDgYk4j2UqKqqC6C4gRpAMoH6WSq5NVr1eTeUQjhxkz3WXB9SPaM4xupXeCbTxGhfbg3",
  "key28": "QCtzw5cXCKuDHGa9ceXXGZfuP11xmGuJ7zNHDibdT4mTWEZEbEBJ18Nd3uSQ5VFXaweE5UgwjgxydYHFTM3Uaqd",
  "key29": "2bCjiU73bFigrbDFs93btBNhHDdCnTddTBunU699EsDMxeKaZMWoKeqCdwXtw3U5Yd5CwKyJn78L2hpLw2iCe3QB",
  "key30": "4iv27aCmhZEDG1ymYZJcadfUGaQxfy4HC9oneNkjxxvotSDejvBnKAFBDYEnNbaMWLKyeTpJw1imz3QXVRyWFBfH",
  "key31": "4iBYoU6aRZ51xw3vvJ4gMHhUKqJ6retdXVRn4AJjn4zmha7gx5QyrEwGBgu7cU4EBGwF1aBv1hfhwsxTryrojyVE",
  "key32": "3o29dUpCDWzYVwZVJzn5yHTxRx7Uccv2uQn2eQqt5LeFUwJY8tYhh89hdHY5W6YWFT9WfBgBnPqNVYgMfNGfFCmL",
  "key33": "2vysHRpAUEMS49PSW74ga4jNiguWL5vS5yDxGpNjxurre45DwtY1jKUcrTxHtNKLTbvquWfhq5NDJUDaEnqeMQgj",
  "key34": "2R4YWPBcJHogaJhNrPBAxA7npn9wVLiSqFzFqem1hom7E3z8TiQzgrYjqDSLanxyLy2Rv35Sipsa9URTKGWEZ7rg",
  "key35": "hCbuzy984j3PzCXbToJwW1DQqQB6PWL6MkrKzbbEV6uwa99AKtL4cqKA3SFHqUafR5uccLbGpsosHtR5wLzmCQf",
  "key36": "3u9VpyhcSSN4c5gYAEjWnerZpWmNZG2PNEeKRgVfQSNh4b4uNWnxzUxuYMnqEKMPs4r8ufLwQTaCFRhU1r4CN96b",
  "key37": "nV9hNV2BwTj5UDacD3UNbP1HQ9DToyL4nYZ6NULR8AK7ZRuQg9JL1GTMa2HSjEPFR33NzecFd15ciMgnfyyxrVN"
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
