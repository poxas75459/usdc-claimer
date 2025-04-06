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
    "DFkwo5yG9zVGE9SmtYhyfrBw3obNsjVx4poQpds5PSfDqNpPWYCAJscZrfN6aHcpTLDxiioRh6MV1LivgpKih4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzeEtQ57rJeVmLGNFkX6c4n1qQR2JEqkWYUNcQjx8eYm1wRz4dwExZsRwL4rLagACGGVcKtx7BPS6dETFfBb7US",
  "key1": "aYLTGdmYoXCcnZhAmvZHKoAHGxihNtY6GGCT8b6cF8jjfWdiZuMmmmFrfJEVyjs5jePxzbdZhK7J2xZQzz3DB2u",
  "key2": "47eCJkjycBiKuztnHyN64eU1xCNxG7dKC96TBzXtffsj2BXuXQN6qLEL4KxNgbZp1LUtbfjjxnsJ49xZNmAjAAU9",
  "key3": "5hwfdPPyD1d7HrYrZGWRYwiEuaLCkEwKFJpmwKya2N21ivHX5LfWHQhaG5o4vukbQwr8G3D6miwEkApbbhnNcNE1",
  "key4": "5mVb6hCYqDDL1tEfjWQhU2grsYahCpmdf8RT8tUMF9poBeyDkJhHbGRWuE3nDZ9HFsbJXwuqDMHhZnre28DKS3Vk",
  "key5": "46RFjccHm2UjrkRs4EbXjx3XnVG6B4KB8riFhGSjga1JYk9htPrX3yDFwfT4gDLR9sUqmYhhcf4YyjfpiMG5i15e",
  "key6": "2ofCLp7sS4En1faBuf3H2PnJm3F1ys81F6X1wC9anc4CMm17nQaTY49G5kLnR1XD8H5uKy6Mw1aZTjNfeGkPMDm8",
  "key7": "c5fMqktZNCBkpuwoP7d5xugkqXKbkA3VU9ZgHL5vVpyrGPexs33nVQNGCFeVYbeRySknfJGGNbzEyRoWB89HJMs",
  "key8": "4qQTctXSqHFK9TRFqm5FeZuyRSfX2HPDqLUid6cXGckDxk9w6aBsjcNhhrt5XFBaBbb1BQMfXJjqi94P4T9cDDNM",
  "key9": "3mgaU9Lqyap7HzoZmNYhhXnfAxu7GhPZxChQ59Ao66eBXxenS9Q4gmjq4RjUmGZw6KrfjJG93dRf6oY6NGTUhdk7",
  "key10": "2MnWV1v5gBRkbvUXCwig1RHRVfmaVfwRqzmz29nvmA9oTn4y7uZRWg3QpSdm4jkS58AP91xW1TiTKytmSGfGqSd9",
  "key11": "45sgaugQkWtunBcmMwxg5t7zMbNX1H7jS5XUvsAGeh9aBxJiZHhUaqu3qX4yQuRXxWM3wyGh7wxmXQ1QYLMgb55H",
  "key12": "4ygPgbEj8JgHXtrAUacajWrascSqLDtNgUCRnK11q8WMpgKvZq6WtdYZmDSXWjrh5JGV7UyEowH2ykBByvxMHD7e",
  "key13": "3ovWRfosTyYzgoMUMPqGBPWH1Y3AkTy62btH5uPJyxtj9feZp4vPXwdAxyDJ1jqvQumpywCkW45vM8B1Xr9Z32zX",
  "key14": "2jb8APXfau1QMpANZaiVAXXLFieeZvjdyrvZmnXQNaToibr3JCkKtGgkEKWCtczKPQJiGEe16XmVbtffr6tAZW9e",
  "key15": "2bwf8sKVmyUbsdYPGCFGrDgw62W6RDkZGM5a6DJGpgJin7MuAE9A3LhjNv3iL1iycUCKA7WpShdrBsob5vuzxCJ8",
  "key16": "63TeCqjQnrJHmKiuHZBJ6sonUP8b989ov2rse6n5R179nseMBTbYtLXWxkHUEXKN2CPQR5oZ5BY5skqzBK7GpSpa",
  "key17": "5wr2VWjNhf8b6bkmYMpB1Z68A3TiJGTSoquZAmKv9QXMtjjKVnBWgqRoVVXbCo6t6TgZr3HbFUU9V6bshfMZ7JVJ",
  "key18": "5B4x2mGFeu9FCc1USBgCSm5VqZPV9micLWSLr9qnTM7dM739BnaukNJfjdbsUY3JYxEkHZrApZYWAcfd9ULzUtdZ",
  "key19": "icFjSJhF68XNAetHh9eGiyZtUbCnVcbBLnnnUBjmPMdbJ6ednfYRBoWYsAB2YRtg6FfZcKX7ApKEjTjmyBykhEh",
  "key20": "2JtqBvemhvdE11y89K78kT1tdppux5bDjvMzx8p3bXfcd65TrhPVBht2r4V9tWapt7KTSbce19HS4zN95hNhzDTR",
  "key21": "5tR8QphXDRBL6sQikBKxDVK7mb2iQwSr2dyaBB9jz1TgeJL26frtq6nMCAcU3srJpoFzLPZzXB5mDXWtbdhQ8Xcq",
  "key22": "626EL6AuDtK8UUWsmxxCepanNP6yrEZSYY6qdx4Ddya47kVt1QhL2R7TbAeuQqRRqkPFTxAUEoY3pkp2e2Ut7BXS",
  "key23": "zbbwnaWd7UQE7t8D5WTm9qLfuxwmDNkdpvq3PRKBPTuzYDa5ZrahJXnq6UpfWjinqZs11RKLQPvEVTqumJwGhCc",
  "key24": "4wQcPvCycYSnZo45JEtMZNdWceBvDApLPWaYnT1zhyVQCzcqyBbHKJaR1LmScZx4UjJPDxHMxPfJjnqcksLU1xyb",
  "key25": "3EZSNiKKQ96wmfaNLf7cvpVT8TDEWiZBrU1AQbkhozTmk6cGtdrU93SfDE64zBtCGJyEQg23bcZc5BewBkdAWsmy",
  "key26": "2hEhBGd2cGpuJQ6yvcGcvsDiY1hMsSR2Fa4zqptNhLqbNDPvzx9H2pVpyGhxV4E43vn23NWCL6EiLrhDmbyGnGv5",
  "key27": "32WqwKnmQMzKspeusrrFeKwEmS2VyTCTKBbf9A1mftYQPUqQN73PTWRySM3m3KLg7M3Agjo879LaqwfoR8t1MBdV",
  "key28": "2DsNkrmEDnXou3KKodht4CDhPx4i7VUB4pQPY3xUUJG6jiQ6tFfe9VtoNcH8ARyqaThTq5BEaQ8W9tVbWTo4ur1d",
  "key29": "5afJ1i5uUuGExmyYqmm7SSCA4pMtD7MvHYChVzRmQ5UnEsayZUXq3VouCWt98PxCt6u1exyKBM93s3ioSqTw1U2C",
  "key30": "2GCwE6wZRgXWFrnsLixp92uVsNvmNKFtM3c5NzQgZ3r8b1BCVo2MeR1namrXjDkXNqwbCEmg31pEvF7WYhD65wDW",
  "key31": "28rvZp9ztd6V2CJCq6SU9CgZKXNZ1VH2n75PVYaGbP8N5erYYsKdJtZmcDdQuR34ocyyzL7dvFBtaiQ87kzUJwwv",
  "key32": "5RcbXR3KnT1dUePWmgJf5uHGg44KWRjaEozJVkrieYhwTqZNAcC8mSJBVu7hbxxpZnGTR4r7tEJYdMipLBhZe7rF",
  "key33": "2ja3XhpKDgnKMEP6MFnur54xbiaAFio2BysaHFhR6ChYxSGDjsa5523xS6H9qDsZzpK3RUk74wAj5KajJLMXs8VR"
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
