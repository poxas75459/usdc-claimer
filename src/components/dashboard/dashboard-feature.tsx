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
    "5EEHuUjDBcSnzaoPNdAEKTqushkTB9soAXoxHhB7Ejjm9NKLzJHKYovRsn3D2cS7nhKFfFQUQ3s47NCAkemTnMqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ciGgCyNukVgvKikWigZsARA91kqCYVpFjMBH5fTsM3mKLzELz7Yp8soi7U9rPnu9sd1WgUEtWzjFva9SYcFXJk",
  "key1": "53tC18B1CdPgGBjo2WmG8hjowdMrVSet5eFFWYfyhu5rA3C5KZFjUCTown3sQf1f2nJVUYtewj2SoezSSpnWCX8x",
  "key2": "5eEavMUJM1THCGbK9Vt1fnJUftZZT1LoArrcQSidTrPjinx1mLVx1WPNkx7J31uXv8aeNMwhD9TdaBtfXeRyAAan",
  "key3": "57VpiCTFDrXYiJGv8t3bBb7SNcW27wKgjCasDeNngjxaa2MUi6Xb4Ca4ywFVSYcxnkNy1KWJxugx2MJCop7oFJcf",
  "key4": "2NWRPUC6RHGJYQdpEFAeMA8Yq631jrY1RNQcQ1fS3XniffmehX2nCh3WYYwdiiZxcYGNc2yAaKVbAS7whrqRmJba",
  "key5": "kfxmLMdpzz1FGNJQZgekHQppzBGK2yFKLR7aVmKNSFPNCnLHTn6WKnb1qwmDYsYxJiMs4V3HdjaMQgsubrkUpxb",
  "key6": "FVpvMs6Xdn8ue61UsQ7dQbzxnyVxPam4acq6GGXBR2rhRgpgdkCLX8Q1zR1hSotvS7bXinP2v7PaLK44GvpdAMM",
  "key7": "4nkRVPa4qnGsiWkPWStSKmtLitM7uwKe6nMVR8KZEkX7bGLMgnf8Chf4EqBBeFQYUYarcAbeLV5VLyQmMkCdXUd",
  "key8": "2ex3i1dtyzgeqbfWBLKcwRzCzCzSyH7s5wis8QbpfwpnL4KMoNWzp4sv7LZAGsKyExruem4hBGvwW2qeJ6KjQ85D",
  "key9": "3hgo4GzNc4Sq2UtDjQTkEmKzFaeRmGaZSfi1NxnVfEMF1QaSXfvwSZSSCKni35w7r5zVCbEKmBZMWj5quLmF1EdL",
  "key10": "3n1HbVgXS9eAiz4dcH53CPkPYJyKpEcupnYAoHogrP8tLtUby6j7CQaBwgcfve8XxfQ8LzTjyjeuhcJf4C2AzDjK",
  "key11": "4SnGB9NrbNSL2RMCdU7wh2GNAF9yJip1pGK7muJRbw35K5oEAzRo5j4rkBvVSFgPHL7rKDiHMytujbMaeqZhTkjf",
  "key12": "48p4yyHSo7yPbaN56oacFX4y5XuCWB25pAW8FToEydEkeW5UvFgXQa498ePDuAtVtuvqQPh4JLrv83peT6ZxEzzE",
  "key13": "4HVpWnKoTfR1phNSRBPNSmwVZKRfcFLT6XiNMLrx2e5oRJPdZrknaMZKkK5XvhBLUaUUV8rAHSXWpY8vSzBrTce5",
  "key14": "4cig1Wpn3W3CBQ3RXTRvkBgg4tZ2ry7skK4CVbdVKegD66fRYXfopxSTGPMCKX7MmrMppts4fxUSHCLQC3XhsBPj",
  "key15": "4nhkbHXarxGogub5tFnFXKzHanFZoXUBT83VmBZYqt9cCpT9qHDcawSrmnrCqiA6vGYRei6GEQD1bM22MZmUeVcV",
  "key16": "2b2VLVtsntSR6fWdEYPi67bAUt8wDHDGoxkccd12o426cYWHzvFAu1pZUheGTWiRMBrpQpX6uN9ShT4sXX8vxYZr",
  "key17": "57GMQqx8pXYUKCGPrfvftVr4GjHavoCdLYiDg11bKz8gMS9kUyff2hX2rybDNLJAZUZYmYgtwjZRrF1YoFdHDiaN",
  "key18": "5BA5ZV4w8Zu7TVri91KKsPVjWXcucifvVPwmRgExQ7UPrKNt1PWraGo4dhghGSXX6eiNDKHFGm6bXb8mbPHMWPoZ",
  "key19": "581svpN9MpybjbkkLk1YR51sGpv9bkvmRbkGAxDfCew4jVZT9DWot5isjDcezG7oJ3o4xy6w1yKgvXycHStTHipp",
  "key20": "5rMQQhpgXSGQGsA5iKvYvwJYWknSwyRvyG2ytLQiBqCbw4GwBCutsoJddmTwGu9NkzkbnVNhBaBtZjqLmcW8g7hD",
  "key21": "4QLnAiFR9fboGj9Fscggp2VH4bqdCHDDarNituC9TpP7MvwLyQ4oKm9btcUUKYbwRh5osv4weAEbU1CYd8ZvGJAv",
  "key22": "4VgeZFxCpN3bBwaqwFLgYFXKotgqGy3PbME7YZSAnbiCvcANeHGVZhEmpoy8UK2uLDKyYi5Yi7ohXRsZvnyKLgif",
  "key23": "23m1Xz4pz6RngFtH3RiPawkCPjsGPjAiHd5BnmKULDYuFW85XHHix57AjCu3VFxTMpRjiLYGwe2JYYqW6CCwWS3b",
  "key24": "2VBLe1tbMt3bdSX26jLCCiGzzTcJ7UZAHqHpVDjgYdSthZn9RDjPdwMvLYq8CCpteAGwvsvMtAWq8eiV6HiiLfdT"
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
