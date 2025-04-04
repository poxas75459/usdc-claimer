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
    "2qpi1nv8ZeaDd5VakhTDvwXE4k8HCudKqhccyxDfiRPpyk41nVJZ4VSRr793Z7vVcNf4PKDRc7sJmpPKwu9QqMP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxQQgL6GtWBkBhcnzX3R41udNahXmon4gJEUincaLZi1XtDhgr77w8VuNDhcuqBj8aH74WSQNd1RBqa4FyKqwgX",
  "key1": "2wFmQTJrMrBGjqckQcHXW6r7N8cLdoKgTkntWG3FTdzJb9zBUcD8qvFNmZuPcjMd9wMGdp1X8a7ueAgmyGxLizSv",
  "key2": "4skMtexdLueJSKgyaDo9EvZGYzVbGA77Kvm3Ebmzx6pZh1HxRE5RbBHspaPqE42qxArfVQ4UZnu2zcYNUD2Qd1EU",
  "key3": "48omDG1t99jXqUYPNxGeb4v11G8xg2bdVwi4rwhD31NJpqjsthoDGDs9S2M555uVCDfy5TNZfP8mk1ibV165SApc",
  "key4": "2gUBkw6sEQkV46TRQ1JREC8Gro2vnrqAetBfwQLV3iG6Zzs4wTjVqmitVCAPJAebjPuyWtCWU18ijv6rodq9C21B",
  "key5": "4Sf5wBkrUiwh4EGz7k47CfoQ1h1umpqgxTu82611HVVQ2JcX1xgtyWPyvjzCSMZDyzT2xrAWtG9EeE3JhZwUfzww",
  "key6": "3qcRLoUiNK63WU2TgGcqcJ7vvjhhAh9dtFvLKHtnnCXFVQ1H5Pf6kfZBd3CupoqXux4gXt5suPcVKKs4WQ29Wxtk",
  "key7": "3CyFALhKp8ocisiVaY29poU9jmhiZV2XQn6eos6kPmmut5KQEqEJ4XFvVZQBps2CWszgpi2NMPo26caZ82F6wpdd",
  "key8": "4uVdpW2Qd26TrCuQs9LLwuLakRR7zFHh2yS4gveksT5qr3Kiz1CLwEW3hETGBycJQ1dm4K1Hr9gEXS6pooy3ydn8",
  "key9": "3f5Me6b3JSV5ARqc7Bq536FhWQrH5uFspDHEkNAi8eqZtoAjqPmBUdQYSZspJ7N27SxYCRydi5Q2CWXfbCfAAR8P",
  "key10": "42PuLVRzWKxu4xXWAgSLgE6kD4DMcMqzgsz9pmuBS4Z8jH6QzkvbWTNZK1Yht6uQ5xtsGvysYBjvKShdBh59HkY",
  "key11": "3LaG3oP7BwqXMx87599eehDFds2WZvDtnbfHDVaTFpQodhD6Fpo8gpBNfVUzJgxrg542LNzGG9AWXsgnbuRf2yFv",
  "key12": "4egPy6gJFZWKgvgw5xa8gRAoaddkD1MKE4NA5ZpKiJRW34ufBihMvXx65zH4jibir1H5LWUT9SwGhUMJrBFENZS1",
  "key13": "WanKh1tyYQJnNYQeRM2LepheyMQGne8gwSWV5m6Xrxh33CBGvCuhnKBaPkK6tHH5PGrBJVvVkA2FPRiFEebnzbs",
  "key14": "5NCAnPS6uvcmZ4GLaRQc8Pp6hDa7btADuijj7CDFXsk6x7qYbjzj8mHEAp4Y33MFtDW77MGsPjmdQs6vEUxLC6mQ",
  "key15": "4akbGQrCT1BySkcUy4jQSZ5mma75tPsBpSVUcjxJiDF5ZuJHrmgvSPscV5bkRnmbpwNRz1MCo8uZyzqW1SiDwGQ3",
  "key16": "5i8sCamqqmcteqz1nN8iu32oQ2b1VgVczJ3oWhU7Nv5U3cVv2kcBRA7MWV8e37ueDGbzyRBM3LNuu6zfc7gFtdQ",
  "key17": "2xoxVarEJgA6cSQL5epGnmtSJLQRRzoXWXyYCFikAiMnmXd77qaFHdNfi9qwJZHihA67mWFNDfh7DPWyCepkvDid",
  "key18": "3aSL3D276TpjTkkPyMZkvWBK7AvjftwWeedzSVzDrjbGiLWM2B7hHmYdAjUiKwPrG6gakt5pVw5k6628qKZ37rWx",
  "key19": "5QHCwYr1KwBwKMpRbXYZMWDnZB2rZ3gKizqSaAh4KimiFeTdcWcnowdoA8nGD1ae85ujYDAqXpFXWkXQvBfiet6o",
  "key20": "5ZiBz3xw5KA3jkTwQoY6We6LNzKT7g7s88fihjbUpvjjvnJGPEZ35Msx7mH7ZoFhGkiu4KSp28vQm1NNdUdXSkiY",
  "key21": "2y2ZzTqTxLc25gAewjeFMbggEx2X4aXGgJ8DyHhHZD8UqXUyPP5JBWJ7ha6e9BFzn7w5r8wAesiQEDpyFoy525sZ",
  "key22": "3eSLqtp8vGa3eTPGKDzUKMicQ8q3y86wsewTiycHc7yAosVMwCEDYnndhGdxMMFjwGdakPsGCPG23UMQ4htKDXZS",
  "key23": "4xeo9JCP91ZDStwWy5AS1PabgshCnrqh6Cd1NG18BacuE1HcdBozyNmTHYAQgKGfGFXtPwYA6GDHSVpqbW4sFLuW",
  "key24": "5yTcpapR2cvD7toPUgCkdo146eRMuwAyn4uYvqSwDna2XQzVuMCh6gnnHmmkAD5atdTEabBG8LuFtfxZCUDnzhas",
  "key25": "T2bAD1cuoUppvdphQG2S9PL3JesuKfh14X34Wn1EexqpNKL7a94hQcEzyeEjjD9r7VYXNxmzaxhqATR5kH9RV9h",
  "key26": "64wcDMwoEwjvCVtHwjQbHUXVgtZ5hSn3oA6krMH7JURAigPB55GqwGknuefpbKsKmfPszbF5kc6meKSMGPUwosKA",
  "key27": "3Art7x4suLQRG8fZtRxTSmzaAz7FqKmhb3oELWdmRHtPZJS1pGdGSSCVaFJdTogZHLyLh49tRjU6EckHLMpCLrXN",
  "key28": "2nZtBVufz8UWni6Pu1D1sh8bNkSy62zmFkurJGrkn2wFbkvFSjJxUHRKqfA1rqxCNf5zXMUpEU7oWWyEQ7sn2qQd",
  "key29": "JySKNTeanh6ShFGV4bh4tQqvBR3DRmpFQe7JXxusqK2oBsVfpzmGj5HcRNAntHKeMzBfTKA2cwGS73kK2WCPD2b",
  "key30": "4C3cG98P6jUUgV7UkUxqVb7uMqyGqd8Uaui2SnJVg2Aa3J4xELTkigadR2w7U5oFDQ7msj9eMNBdS2qEyjmZunNR",
  "key31": "4v4FFAyqSU4kjZywFHUsjSWxHuqBtNEBFgvEMRi1uNh6pvEHDGciuEEhZMxgjDQ74BwjQyjbNKLR7pRtQAD7n7as",
  "key32": "659vGzhNDwU6eZ4sWd5vtkcUw6XjMQZ9dGBpZiYiJfBnR9BoXoP8o5bjnsoqWhSaWqPLYesmfyk6U922QibXgGGt"
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
