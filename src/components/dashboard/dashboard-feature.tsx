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
    "2PEzeEGpbr4qH8yFxvYxKgawyRC5LMMScBZQ2NrNZRZm2UQenxTYYf4QBgFKYxp6WrT1VTn5Frt7uB9SophW2xpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tWmoUwiwZDxsDA9tiKAyzcq3jAiKvesugdmbtw96NRrQzXqhvFwbaZJXZjZsNZbJp75dHDj4pRyT44mcjkJsLYF",
  "key1": "2ZiAkXPuTah3vtZHPzHsVuLkMy69eU2pVeAapMjDTLKi9qBKGUUmnE4SKbxU31bp1U1XdQMv6iVBkLiRh9NwACn3",
  "key2": "5Y9WMn4tqVwQZCobut7r2iwC1jU4Gt9zgrCyD1NY58BdpuVXsHYFRpxK3qE4yAP6pVeMXtZwJKq8DUs7ZgjsXy1a",
  "key3": "4BhBZnnMesbHegMnRuGg3rvSrAMaxDkBcFRFurDg8K98hS8xgYj84xYxpM4v29eqBP4Wj5SJ6ZsNa5Gezk4rR2dH",
  "key4": "63Qf6k4pzHNLaNuFqwwdeUsBCEdGiVxr1N9N7RZtDbK6RTdt4da2gRW341y6hJTMVXcT6adjvtsz8TqRWTNARKkG",
  "key5": "27QQTTRBN3snGRknZGwpoBzF7ToSDBSpESynm3KKxSYhkUDhBdzwcKiSaWdMJPWKouuaqAiueKNeQKzZxNYS5GvE",
  "key6": "4dNTgX8diPA9KSPfPwsGPxmWZanJUM9nfRb93SJPkqjabBDohDtApjhwxU4f41ENbioeUoMbmiiFH3yPugUosLKQ",
  "key7": "5w6ghsGxzyzWjNUgMmannCp6gxKabUvd9ihnc24iyyFKes5mgbTMdqL3ukEcKtMVbPGjCVpr3MXs7fG5RXeWZw14",
  "key8": "3augj5FbxRzDoz7pwsRiCZgbPmv4rhzNZahVVbDJtLoaymj4TMRHcTcCLa7Nd2BPt9bKJQjg8we2s93VXwJQu7Cm",
  "key9": "2AcEkCC1HzHtyHMoV3fvqgoc6z8AzVULnMuPk9B3ofTGgt9SGMRqRJo8P4THJtxsP87fHqfumL8sDTRusGs2Jy4h",
  "key10": "i1M9U4xjih1GEoStv9LeKZTeNuUSfEpdXUQGhWGvCPHnCuGWSewCLMbLre64YaeqypyQhBCB6R3bfB3QAg1B2tM",
  "key11": "HKmZyKuw24aJ7SuAUNYAeKFapwocthfSM4RRkzk9wc1iB56k4Hmtarj5fZiN3AKsc4fYQk4Xesg9VQ2VGcVP5QH",
  "key12": "2H74kapPJ47DqBgT4RVx7jQb7VH2mTXdgw7NNdvykgB1pesz33DdiFBdwWxpiM1Ui8sCFpkf9ZwQmSCTR7AN3Jue",
  "key13": "HvR7S8n8RDev3RV7Eu83oLhjMmooHqHWbvds58dzgFZ2axejBXBEGeJX8dEpJWRZZ1fdd5VQSrsYbyNwQYi2qVN",
  "key14": "62aTGtxP3vu9aVMdocNtXEqa5kMUCCD3k3esmu1yb87XjzhkProLzAA5geDBde3qKYXFgxevCehj9PLfo6FAdaLB",
  "key15": "3vJkHUM2bcx4z7N4A2KCdCEWfWX3Nj1xLiaT2K76wzySrbpVzeArjs8xNSEqtzYspX4uEtidB44AxpQWyfeNiphs",
  "key16": "2Zjakh265vXY4rSxC3ew4GkfLKAtAf97z72sufWqiYP7e5LRqSvuAJNXabjQYPt9N3yNyqYrNu5Mq81mQUts88tw",
  "key17": "3LmPgjE1GQCEKE1W4psDUkh2hR43w1oAWQwuSyEYFzuwxPZb4uLdY4DnqAmQuAmzjtYDHZwJosPjcCfBkWJTgcrt",
  "key18": "2KKaXfABC3GKXJew6B7J9d4rhBHTMtJ3iidH8DFda75jqTN7UnFvRq1gDm7H8PyZdWaxyEtq6t1RXb4WyTFbeZLJ",
  "key19": "2UwdxDYv4Nf2JwLpMZADER3kULrDd2ZckF8JvAtRLJjw7yipeRt14xC75BD4C1zoSdSWYoEd82USWcY8LXX5RG7a",
  "key20": "BrMmgSCHEMyTd4T2xDRSBuvuhjgHMaBZmbqA51RjgGkfenhox7jDmbzp6CxUPK3LdmfpNotRDuE8X6jXQ8B5qBd",
  "key21": "3iRjYVoYBBaAYKs1FvUQFUFAchzgzBgBwh8ugJVQF9nRruLuwpfyS22GwLKFqgWwhsyUerpHuXPNVe4EeMUkrPe5",
  "key22": "2pyzWG3itUhqwjVW5GimanRAWVPbo8ZhEr8hqAhm1xGTixj87SLsfvPLWKAezwJ7EDigjEa87NivFgiGgNGB8YQr",
  "key23": "NRcdaaAzQ8qfGUCcdK9HNqmwHiy9a3E4G4GA4oZkd4d6sxVakswiMM4vNRfgUMn1qCH9uGCDAZNaVirMn3GZhGx",
  "key24": "5ycUTjjtW8e4p1B1d6oKj39VRRdhswTkWJfp4rQKp7kzKVmc6zngaQ55t2jtraVbSKDrzGNxkmjTgfMGiurzYaZ3",
  "key25": "V14FdxuuzD7RXdUuVwMyTbm4CCbbQdAdBu3VvHASi4bXxg7BF3gcXx8FDMef5SoyrXXDbNWB81q2CpsmQcJh4jk",
  "key26": "5s5BQQ14gNs9qNsNVYBQnRpN2KkT8RmtapUEAjtqmfkotdU7jzZxpZuT9noGbJ9KzEUT1KXf6gzvRwDa6c7ZsnJd",
  "key27": "3fTXAPboLskocmS5YD6gg85miB93Jx7kr276mYmqTMzv4S8AZVp13HvKZhv5orXxKFXbRW2GyvtvPQR9occbY3LP",
  "key28": "ERE4p2a17T3dBpfQfZgVYrFrW5KLhxfZkhPmcEPjtXa3pGaoZBcz5H5Q2rJEh39akAiELXDmVeFWaViobGxvV2c",
  "key29": "2UcP1fhozcbkYHceHHdiLvCbQwdBdsHKZBtrQkXfnHA8Rb9LL3neAA8AeMxtxB3SNKTHVnMs8HrYcsCt96iU1e2P",
  "key30": "2vMCV4sJ7bDfHpth11JD7LR7kbXxvCKscz75JUnAfK6bB4L2nxdVxsQAiz7U7dSrK7rZD8Nwe9zQHqaDdou57h6h",
  "key31": "2F5jEoVudsFfovrYnpBnBbocVSQnMG72VfuNRDkErToy1kaz8iuLzA21AUnAxoXKZvVLajuQyoZYo3L57fiAg2ha",
  "key32": "2YZJgKQQxquZBZsQox9uUAcsVP6Z53KizqCmaPe1GEPLYPCaU5mySAgHSg94o5EaYiG5A17PLq2CKpp837efCiYe",
  "key33": "2UZPNZtRCyUvFS7MMdDYmYbWJDCxCFgVddLdy7e3DXyYgNu5TTSeCwW7YqMkk2HtrbdsXgMepqtSegc6chbXHeQQ",
  "key34": "27xb8irru2oz5oPAUE8QFm68zkDmbPwBND2EGMVW8695TaTThsLuV9hnryG5zbz5hfsHohKrLZRNwJcpCR7AvXPR",
  "key35": "2JcFZU7dLjUXKVxHhcMyHf4xcBD57xHewMdWjhZUzUxbCZwtomkZ6w7QoKF96FeHacV5fS4FHsRPbZRz54uYsny1",
  "key36": "4XAEbsZt8CLUP1RC4kvhmvNtfEA7zKuu4Y7ycqSoEwd997EQ2FVbZQSB7oMDxM24sARZoyjy8uHjLqN6yZXnx9F7",
  "key37": "YGdpYDoP8xzLgvPW2XtzDrvbtpuSdi3TVvhbfFfHndMqSqAEakpk9r3mgSTQdB1T6sUe3KBQBEdmkMM9dnbmy8j"
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
