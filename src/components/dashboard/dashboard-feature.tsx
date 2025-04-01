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
    "48DX71HJLNSKmJLJ1agxp7ebVuUvKU1YV26ccoYjgezd8vsWCnLK9swEerBb5cpUtcX9BXT1eLAKvqSoVuuwDjJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4Li31ffSqpk6zP3ph3yS6EL3He1eJhQrdNGe59fDSrmN1GPHRPJPH2nKRo3dV47UC5vfmZVqvsTarDK4XUapTC",
  "key1": "2E5PcAxSMszXDPCPX3CUTDYimRcuW63TBw5ohQVMZ1eVDoVVrLhxsxAt589gUGkrPTrgZ4Sc8SwyL7qTRV2msHBM",
  "key2": "7yRp5Wqdnghw7w5wN3b3oVkRCJCXumU6JTkUbLEsjiFqcz1PrVdF6Yy3ZqpN75vM98SE3qrG7rYLND1hJMqJV1r",
  "key3": "21uykStWC2LW3ifjzVb5az97ftnJubXVpA1ZxsVCYDHxQefQeEzSRUvM9GtkgfGYn8GsZVEhn6tjUF2YVmviJmAW",
  "key4": "3QZYTTFBUiRizXm1Uv6x9BYznfXct5qkgBzneUTfsxc4698zkYm7J3sDKWb2vsjMjtAWef4fwrzh4LUniLzy6W9X",
  "key5": "Ew4bKA89vpieadsoPrvVXWf1Har7L1bLKi5Qmq6yN2HyZhibNTq7wGUZP7mQc7RxyjNEmF4tjTVyBzHjw5WmuCN",
  "key6": "3bDPtJgwJZRwJnaCgM4U8tjdbmtjNSScfJjvagy9J2go1y6zSQTAjWRitDyKonS8jLxJSKtuYVHgmVKvD8mALA7a",
  "key7": "33abTG853i1RbH7rbiB7EgSrU6bkX5MLxFZ5dTdbgFLDRnqDSJwKB2RfUQzdLKshmeCPNXhNtNsFFEPCeS9gHy5p",
  "key8": "5bunRkb9JZ22XZkwdVexitNEMvEcjF7vS8hENLYs9CLad1DGKYU1x87Fgs2vXvmF3DZgP2eUfo23skixTo3KYLdo",
  "key9": "2notTzikuQT9g1hGZTnP8srLwLFS4GCEegxvS9Bi62EevZsXHXhaA2rXJm28NHgPzanqQ7drWaghuZDfJ8tB5qhJ",
  "key10": "4i126zzGVmmrz5yZVnhmo82aejSCWpXrRdhB2woJtX6nom5pw2HYxRTK65Dqfnc7ZcoHRKkfFbYKYFuEVxZwCFXD",
  "key11": "Mzv2RzvJnSg3VuQD1WrK3mjNGJcMyLxzjhza19TgVJTd2B5hL2m4tL4HEDDGyrnkBdasud55CkQ786bcUbTE17D",
  "key12": "5uKHZG78QdYkkhVQgVrpatqs56PJnHPexJqihkoLGrZzgypyH8L7LNay6j7kqSxV5M5XnFnjQTUTBMHVG3g4QWZa",
  "key13": "54h1r7aaqUemgMLecnZzLVSBRsUNfSiZsbV5ebHXkxxd9Rw9G67SpWeDmFbDPfPLUZ3JA4sS4oDw6AQfCC336bw4",
  "key14": "58FLrPa3QsYLtrPT5GF37iM6PhpuUyEbwtUysE9BtCp8syY8run2nommp8B1SGKWmAk9bDq2ZxWwKtnrrgX712Rt",
  "key15": "3R9yzW9sSoWKvbxq8qyzYVKshTSepYiDAeefkh8UuWJeGqEfwFKJSaGT45tq8jNVM529VmwkPWJAWF2WQk4u4vDH",
  "key16": "2zDGhw2DLWgLLKPHf4sUJdYM7CSGJ4jHDcbrBKzTZTEdf1Z4brEbkCy84eg7asoqRMQsnPU4Dv4TjoaXzKSWerTw",
  "key17": "3WUX9v6yzDqe3uVwiVhiAH7nPkYXEX4Rb7vNvzXJc4WT2uxtdtQeX1CNYEv3Jd5dR7SVAmsSigqo5Kt5eXKwaMXT",
  "key18": "4skzkWW5tYpVVwD1q9NuU3VFaZ8cPVua4QsYTdips2rT3xFwVSLovxdaJ3BxcbeTEdfTyw5iinxFV5S8wvwma6KQ",
  "key19": "3p6mZf3riHLihX58JJvfGN5smw3g8hHdd9nJF1EnjjBF9f61F1zBj4ADmm34ZGHqgB2erdjFUk6gQwdQoQY5ZNRD",
  "key20": "4VDYSYJycMwhjfx4MpLtgZEW2sv63rtyvD6icAVivMihSroN9nqJQCs3xyPVPqPDQDxDFGo1ue3i2PFkBkaccnDK",
  "key21": "3N3XVRRV6h4CBFZmFJc8sCb8GwJKN7qRi1uLXWdWfmsHPisWDozXXbuHLmJHXpc9Su87YaoNjRH6Mxjo3azgWSEd",
  "key22": "fEJyLtSmQdxgPvk6z89a9wZbZR2qLKGWSSr3JztrJUKkMyer6gN3BnbeX6vdU1iphTRTgeBbyHZTf19VD8U5M7Z",
  "key23": "2AHEB5Udfn6MxMTyFLZP5NshN58787zKp4iPdxFMdBVwVwhat3difWk6sZ8J5Bz8y6nfNN1cdMm9poSUCaTMCxJF",
  "key24": "2B4HbkTH38pVXZ7LbLNaNM7rYPngknRq6CKkCJ2CyZd9uYY34ptaXwAvx8t19bZP4NzkW8pGv2MtpUYgPJHtHL6u",
  "key25": "2dC3tA3CdJGdMMPEanfT7PHCtWjpvoHsN5RjYu4aBgxn3PGwUziVUkTGDqfoKrTq5yXvWkDipeRd8HLTu5ZWr3og",
  "key26": "3Bmgo8LrfdYRzuWtyk1yTK7B3u6NRKGMdWrM14XCaWFDCuTxGfRDKBYD3ASw6zpdkp4sQZjuxHDbyiXNunpFvhRh",
  "key27": "21rgqQHtXgvh7GvstS6kayHcnyFegzq2LeGQj8HqqqQsjScURHPea5LgeJmJZx4bzvry3rSEhYpYv8Djckt3Tw2u",
  "key28": "43GFYF1W5EzARdAG4ybioui5Srv47mzBTVZMd8Zoek3TfojZbRHdqRKrUFdwzuumyXZ5JtCHcR23BUHSdnFP2T2r",
  "key29": "67FGHbQd14c6RcWUeFS414HnHx4QYiMq8ouvUU82ixQ1zwE3ZizMR5t3n8wupWwLF9DyniHPT4ZvE4DZv2fNoStt",
  "key30": "2Qg5Cqo4USpfHnwjYdxyHo79ZNMuToW7xnud4LsN87qmwxJGM2iGrDwyJHRfgtGmdpfiQef7tJnpmgWgE6kDYLLT"
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
