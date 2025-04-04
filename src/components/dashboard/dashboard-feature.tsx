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
    "2vVxDhU6SW8X5HTtiJ4mv9DKoz8UJkuZegh5y5EWTCY5asiBmqrYMYk5iX5dPrdpb7g6Vm4aCRE1G4WgGLkEtd8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SejZwEMePwnzUxFWn538y83TdL9LmViFSxLAj6SkZHZnuAii9WwZfj1gKScAFPKyceXGLpC3NwdmRxKQBrEZtkf",
  "key1": "2JgnJiHJP9PdXT2KppPG5VJMiCXMxcczo7GmQRUsXgwVwXNGXBkdS6uNZg7UHHM6mb6Sje1LFfoZtuTmsSBTj6Q4",
  "key2": "r1p2kPtunQcGLKUgKbRcscCQyrmLthFiRMdwougfKfPR7CxgLsyH1igD5WCG9g4Q63tSDcrPiP9JA6XV7KEt91Z",
  "key3": "49WxDk4PTJACKEBogr95gQ4EGo5cno5kQ88QfGnmkPRTQMLShY4nypQF4GFH9txsCD8zN3577C2ok5JUW7amQ879",
  "key4": "PqBARPwXMNz9m2SPfpy9YG1nwjrhdxZmcqzrao3nnbu9zeh98L7P8uTJZ9aueinQGEv3wBFwX95FbpxZCP4eK8N",
  "key5": "33QrqhGokcKZAkBgWzDHZj5XDCRpJTxpurYjBzwxRBU3Qa3f2UxKEswgsdUKSuntYpWBkUFcPHA5KRyVwa9asZJB",
  "key6": "4ehtzHJJhVarXEicMFrRLwf9i1HybmEp4tWFKNhPKrA6XhzR5r2gY8BapE7EGEpjLLxonjmdbtjkXGG4SZye95k7",
  "key7": "2np71FC8GJ2aVAiZGFyBt41KHzeHQdV9ogVggevUnaLwNyTJd2kpE5xdUQXaVTWvczjcjR5VNmTCYz4Q4AdG8cQ1",
  "key8": "533f2vWA1muNBSqxTFGHtm16DCspr8Fz4KHH7Qj8UPsuaeHdcg64LM3AS26gp2RNLFkGLTWVAYjQzCQcBsGLuFFw",
  "key9": "43oJnvhoh3qCyHafwjcpDwFnJ93jjztj5cvrPceTQttRy8Eo6AVMG2VBtTFmoqgZicmbhKXKzvCbTsTfgdHt5MCy",
  "key10": "56M15E9GDVwWQtByvJ868WX3VVg6DVsLbNDMmr1cqkayuVxDRTi34UseNcbptKK5z38VAoPhZfw2Zhihz6hevKwf",
  "key11": "54hF7MeTHc78Mydc5BdUQRJJgw1BZxTGAhDP5fmgnwUscYGBPeYqFndn1np41cm1izHKvq6fFfkZBkZSxpsa6y4z",
  "key12": "L1q4SevCt38woCSz3LNppuuTgrMyk5wxBYGptJ8oy2DNXRunWGxoAsZcS6xepka2PCa5BanofkK5jtemW3mUaep",
  "key13": "3xZHG1d2owauH2sKSXU8nMJ31rigBPWKKtr1MYCQmWkTF4mGGuJ34TfwKJpfEUCVs4MucsFgP5VCMh1KaFB3Ausc",
  "key14": "5mTWENZ2rgKBKESYYKEx3UEuZTsPEgxqgnrqVcZpXHg45GJ6t7iauxXRYDUi17WiMF9EYu96ZABqSWoSQ1DGwxyc",
  "key15": "4BXanz7i6R6iraGDqNUVZWVCM9c4Qrs5rz5h8AkZqMSMePPqcyV6szNAC7jzRajGZpo3XnygyCVgr6xcxAjT9VW4",
  "key16": "44v3yz864CGfkfdXrmyBKWogRhgqVa3LDGFvXvhoELQF23RTUoWVGm3UVJAMf8cmG8nJ6nCL3aXQ4J92p7PrzbwM",
  "key17": "3wYusQ7tnPVGCm1NntAQmaAa2ZXdJuQ8dfeyLsJ8JKWocnh9Trut3uJApdPHkkBHArk7E2MECS8NsKbWfgBr6qXz",
  "key18": "2iHjTnPLePUi3MwCNaRVnDq25fkwiTtfLreSM3C6EQxKzgDEiFw46ATTPJCGxeee6Cthnm42GwBMsVy9Yjo34QMf",
  "key19": "3fni5Ycj1XmbPi8QuNRa7nDWzNbJSZFeEkjPvFStDjVQbdvQnDUp4JqVBp2PDNfSwDrGH3hMArSvEaoisfiWTNAN",
  "key20": "3mS4MJWGm2hD73rhKDij7dPENBJTxJqYsd9U28guurK2faryymUMfSuCuZKfNYpGASk2gXrzfCaGdQtGDfTifKw5",
  "key21": "33BNRSbyRbFUxywKBLgB5hnbvYs6r8WuriCd8UzkFY5QCKBw28fHmGFTgNnDdqXvnN7ADNNZebgwTvkMVnG9S3Ce",
  "key22": "65idCnU1pU3XfEwF2DYXgjdc6eriXzxzfYo5F2o8T3EsxbQ18VHfFUmDZunAB3cXDnhkiPqPCtmrkrVqCbsrKcJT",
  "key23": "opncQNL2rEdrMWEzf69yv3vGM3w2HeLiCkhpAhZKNfTQgAyGsmMKqYcd7TSMv2MZmPUr3WjDdQypjMP12TDE1km",
  "key24": "5Fk7UznvZoqA7Zf739npeYU3CYWte8udumNXqeNMf8piPKVNpfeBA15BcV99jcxrkNYRgb6FPbcMQoS772WJj6Sg",
  "key25": "3wwjihBorXAFkAvwATvmWhuDUeNhVoyG2ote9WRjvRc3b4jetskKofGCYijpp7aNYDFQVKkJ27jaMybWeu8qWszj",
  "key26": "5o46nYjCnjvE6EZfaZKjAV365Y3dXbxKCQmZ956HQPRqNkQDAjFN4H7XHSiiPFfyKTenpPgPCmWF1vdYP5AnJ4fj",
  "key27": "2MrgBpS9Vyf4w716b1A4KLEbT1pw5hmSXrJzLZSySdGLZEqjM5zoJRHYtvhYBi5Vbhmc2bs6wwwPNDy2KriEiNUw",
  "key28": "U5ceSPAxqPhetw87z98CdNJ42b6JgE7nJHQa2bdceyWeRXXUe1agdwmbXEEwhZxDkpJQAJaqyHEGQzBoyZ4bSZF",
  "key29": "3xiQmAS23Qy7ov9pJPhziJjw2WHoXSjruoXMxHJQ6zUGMU3Z4WmExh1ME9WW4L95oYtx6MXUnpkLLm4FFnsMjVgi",
  "key30": "4WzhNLku4ocDZ9XWP2X3nJiHqKRHp9ASEJSYtSvg6eXJ5SAjLd84UPdHM5a7M2wicEpETiFyaZ2e3PCPWscxmzNq",
  "key31": "5dhaMTtTPLBUZ3qdhzNLN5n7auHmaBKfZtgA2Z6MwdLjxmjHfxoibXEdqDHB5i6tsG14b3X3iWRcRmSHaJcYWrRH",
  "key32": "3gFFcEHzTDG8wqmoiNsqyEbZmiDZ1m5GiFmfsqfE5TVkKEjP9h7mWxz22azfgq8A1MC53iX4bPA8c5zBj93VxbDh",
  "key33": "82bkwjdQ9AqFjM9XnGsAyixneeb31GqRZvWp5BEmnGvLRC7vuCehJf9DDU9rVJbmVaAEhakdFxDxyPt4b6U8n2U",
  "key34": "2NaUSttZU4ULAha38hVSdekPerDFMna5GVufeb2Zj9tHPBMJ8CVUuWXmdSdoZwB5Ar5D7qV4E9P5dGz94jB38kho",
  "key35": "5Kcufag48YXS7NKzUxnL4qDJQLY89Wc8igosFZzz2DLpqT6kfz8r6pUaCZkjExPWz11NvhuvUcFb64dvZQ2GNHkr",
  "key36": "3qozLATj9ZWXt2qKXLaVJ6z2tpe7jiSGjZEZC8tvSAgSMswWnwQQWkmMwCmiW8H7UpqmLPWZHxLMt7XKGqfUcBcd"
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
