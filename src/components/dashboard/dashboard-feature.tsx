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
    "4qKWZCGaxrJxo1bFiH4AgXS9hYq13ebmYoCuCLx4rUGPE5tX9GvXoUAWtL4oC9bijzkNqZuyyuAo4hG8JB2WHob8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQ9ZfZReB5qtbYcFirSCRHADGM1UvBdSfx1eNPk7EWajzMe6essYy4dtFfRD5uZqKUt3tfm77GeEsAvdr7bQ7pB",
  "key1": "5WkBC2M21F4qoGwEgZbvjSLJqfNGKvBM9DpVjT5VrzJXFqXXenvs38iM258c2AwdC7XNAD2poipkgiPcbUC6UDxm",
  "key2": "4rkUfiTq6AqMHXAaQoZra9qdT7WicMAtW7zz8RkXouuUb9EJ8bHXVEPw15YvHwdQicP7XSAt2PStsxsF58WTZsB9",
  "key3": "yBdSwfjeur6aNB5akeDMMbmpK6GoLQitYMtc9oZL7nUHVpfrBFMPQgGUYw8cgZNpz1R3XqrmJzSFjDU4hiCqLGK",
  "key4": "s6WNqCLFmEqGyGDLJ3c85g3VEKiXVi3d1defMFwMERvpyjYVx8pDmSmdZLRwNUbqexMfumBPDbjjdrSxCmX9sra",
  "key5": "3k5tUQRETYEwcjz172UAYQ3aenUYoDCLDw2QJyaY1CBdnbuaGFWtigLRJ3Dx5DCQHahQ9BZtbfEaXbqBYAyxYF9F",
  "key6": "3NKVDpMo7VE1E7bSTzYn3aaxPxZJd3QgUVRu2Qw5HQX42gdPNBp1q55JXmqoXFAeG2svjL8fTWsLs5gu8gyNPG4",
  "key7": "LtDt3vX5XgK5AEMNZGUYFzmNRjVc2aYqqf9BP4VYj3e8KzwwfZVxWHm7DxSBDCBmbExiFVUjk5UBCFNfpk7uMV4",
  "key8": "5HLSHCjJKkLMBUToPsHNseX63AnWMu8uDh5QiTs2MPAR2PxxWtLQUGRVLn3b4gPKMQss867AhX55nFygv7H5ufi1",
  "key9": "4LiWGqh6FmHMtcpvRgJJQHbMSLSJx89HseQdkEUoP1bmgrA37vRbSSc3GzGYbY1VSe8NRjysiWZ3kbT3C8jHYdiG",
  "key10": "5Qi5jaJ2vAWt6t3oT46g8Hxrbzxe2i8mRpF4GVzgCHoK6u6xVBKD7XjLcnz5sm2trrKNqkakHTNHewfBhX26RmSa",
  "key11": "33udntTB6Hb7v1Br3D4HHrCPbw7pV38PhiEj2XpkszxDtbmxeD3QLWtg3zwedDGZB7EAnV1vtS1ZvagtGSDzmvqr",
  "key12": "iEqkiqsQG7hWqSCEMMCLQy4qCGs9vXjKPGqVKu8bfddpzTuEuER299Yx9rTZxojHe35Zq6HCNtADWvGSvXV4L5q",
  "key13": "aPytcfHQyh2wWnFv3kQ24fmGjV6G2Dh8Jg3RiBFsGnbhK1tbVVfjnJxQVDrvoagoPbDgXjGH7yhb6qqEay7s14v",
  "key14": "3hm1WUUMyAWRfK6x5JK9VpkETUw62eupnM9LuSg8D3aB2xJWukMtRsy1XMmgBsUzMCFsJtAdBXfRKPvWfKRBRNHM",
  "key15": "38mhzVjjQonYRTRDUQ7k1CjqZnLDfmBQXrj3LCNCygdm635KD2jeQMdM7ymtp1b7UCWmU3yiqTsQB1cLPQ2qbBty",
  "key16": "5mNr5obpk9zSfkwTq6xRivMccKcfLRKh8USz4NVU5qC8pW8tLfcNnP4VttMaFnSGQnxLcBCnrVvpPvqVzPcd1YsH",
  "key17": "67pQPEhSAP427y5QopTbkL5sSL2b7FWDFkKVyuHBsvWyxSLbdaHmG6CJFzBavbeW8E4hVSZrMDLYCeD6HWB65j3v",
  "key18": "PKtCnFL21ZwuSKS9ug1VLKCFz9gJoYsenuK6CBjkvoY3MHa7m3JWfw2CaCqyeaCyQsfwR2FJ62Gi2XhEuyB31CR",
  "key19": "2WnibowBYyiRxzxMtSAZcMmXdL4vzWsnTWimhMQpG8qRxCdDTmZyevr9FbXXfPLwmV5DxSVYSBPXZ9U5vMN26gJ4",
  "key20": "Nw267mUvjZXDwyJvhBxFUiZarMjvWJw4wrZTfLVexgg29zT7JoLRffqc9m6xsx6exdtfrw4CEeW8Q5DmpuVhGxr",
  "key21": "5Zfqyr74BagqWTcAwGcy1joBNy6azqis36kXzpyUczAv85KpYgdX118TkhR1u77RRb8ZhNYmJ9yHqvx34dX47EbK",
  "key22": "1MMZtqFSLMxbF8pUgDPbSxJk4oNzFeZeVo8ezHER2NEZrvCVWSFJq8voDpfQZvnHF5vistKY985tiLYWRNkZ2cr",
  "key23": "21Ykhpjbo3yqEPAU9YRJsBrtdsQZArhtmFKmFtu514wkT32n9t4BBWazA3w7V2eZ9t5sZs8pdp7k3vdfKto2TdNm",
  "key24": "3NRby6i3Qbh6tbSXEEt6s6kKiUZD6krkHqEs3dfUBBra2Xb9U63H3cVz7gRBdY3hKEjP9k3ajhxjQY7vs81F3X8w",
  "key25": "5vYw47nfpLsiut5vtVoPeUVJmX2XRLLvbet1xvEvvs16LpJKTkU1YeSnQHvJAsAeckFUxz2rdJYzUk4fwxFwNM3a",
  "key26": "64aeCUFFWeo9nuNxCV9AKMjy3iA3FFucnHL1aa8Pz6yKapGWdH2dGRb7cSFkKcjB8r8Egi3ATr8UxWxvHFq2w3zp",
  "key27": "4GWGHcDiHELySGPdkUhNcqYUAG6BYn21ZjMyTNuyafdCQ4KZd2XhJteYXf1BrMykcjUCAWATaRVTNxdSrJAbW5VP",
  "key28": "3eEMi4F6fQfSTpw5T8ernGqzpGGDzVMPmF6vXA9uqL4QSuZSVyaZ5PQq5cR2d7z7d64ESUYdLxpDbH228Grq3mR6",
  "key29": "2bBp8txEEfrkFt45DndZsK3yHWfZbwf57xX1UFCSTZrgvASkudzhhNH8NHwSnNwjp9pb1QbZTqYMuvVeBAd5PrjV",
  "key30": "LRTw9V4P5AUiEos5tuameXHYYXKvc3uWjN1hxSSjugB4GeoK52Yy66jXP5vcSFsaurRGoYvbKnuiocbjhmC11q3",
  "key31": "yByqsZjsuxUZCZmPRWGwFRTduBekgZk1sEPmU8Pdg2gbUgxguwZrtZzvk4xAiT5soBjRiohwRxStAXt4493Sm5P",
  "key32": "2KFna2N1btgdhiDABBePngojLdE8vopVivLCkRFtVk4DH7dj4isG5RcUubVHCbV5Uv2R7wMYEnX8QVcKHiPmBwu4",
  "key33": "2jzowA1nrvZh83D1bXGJTzDJ8wyz5r1XD6K6AZi3CB7mVAZNxYp5XhPfXr3pYjVvi4Uub7NeoSGSi7mWS7yVLDXd",
  "key34": "2c3Mhys31wkC5EH4yhA5JnsG5qVsw5xcsiv95BS7jscghDVkEsybYBxXy9zpaECoD9EGxMiPARkP4joTjou1TwPF"
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
