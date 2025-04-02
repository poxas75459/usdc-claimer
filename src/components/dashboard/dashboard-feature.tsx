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
    "5QiogBWncRsqBSyxJap3BHxtDejjEPYK2n5JEDnpyDVMWEU4kNyTNZqH4mr2zV4QDVY1gFzxwEEBE5uYien7wNQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8pqQ5Zj8h1NNk61K3FRKrQeR2Y15kyXSq7fxwUjuZoVXFP1WyxuMSFxuPbiv7q2n3jLNaJqAuQt1Pt4HsoF2F4",
  "key1": "3J2BZ63ofhLKEgFKhZSt7hrZudfjv2CMchwxVxd22w7So9s1SUtPwnpjRFA1YVYKV4w3MKup54FAvfP51Nd44tWa",
  "key2": "3GoRdWqMeSzvqUUYgJVYGNHa9TVN6k2Z8iC3uYgbwyBxFSHWdybN85sH26qWC7TzPz1dqc9gMC7tjSzGMkaoiGei",
  "key3": "4FtpfegAsvBqJ19GzQEUTCimoEsYxkMAzTu3HaY1sPA3kBqSqSji9KbZRW4MAoY65rE8PpcAX2nAbBpxCK5HqUeB",
  "key4": "4AZXuEdsUmrcHnDYGCwQ3MEjQjujRn1K6yRWQSzfY5oPZXcYbB2g3ZqGfELxi47KYNM9owwbh2qVizXztTd59pXQ",
  "key5": "5iDsV2KtM8ybJAfPQkuXVUbDZHoY71Ln5jP2LZdFoWwaS1MaMVWkcHDuGjFpoq33BR4Y5Up4B9J9k1gtBWjshAAb",
  "key6": "44FmEMZEuVtEc3DXP2ELEw4W2LjUtrazFb7ohtSJDvBeDo2GhRYCkSBoFMPcBWGKLkbxngxCC3ok7agUSXiZwXgm",
  "key7": "128MPnY4KDRmzHbiJeUntfWTh42AfQwPuHysWdFfs6JCdFCStAaiEk2Co9fvFy77kJP1yjLkuxGSTQjijraqvch8",
  "key8": "31Eiom1sKdghXNg4yeUb7xXgiJL7PEQdW5JhRbKyBktRpe9m1oc5THpC1vTynPxwLkChKxoiemHNMEXUnC4X3APX",
  "key9": "2kyMT54FpBKRXS2pHgNXHrAYvejV8jazHdwKLVv5oEV8MXvuyCkmHzQUiGf6Swvkk3whM7uJsoddzgJX124dZhBQ",
  "key10": "4wV8FRNe2EVpZDPXkQrZ2LeSQgf9WVjGqp5S8LVMdTHXhWEE7nSjAuEdoBTxQbwdCbTxv4forsxtPMerj9QcaRmC",
  "key11": "oojBA6xxoV9KMj6tkzu9pU6JkYu6MhTCZsXh8SFZoMQssZsvsMx5bd8P1MVpEiwEvSm5CBCCMwwgyxypGRzWk9K",
  "key12": "t189K7onoFMXdTegsHWZeeH44GMyERaVQtXqErV3GiqZhURSp4nEyZMBM3cs6sdZZiSZYDbBEPgGFsH1n3MbuYW",
  "key13": "pfJafouuY3euFxjWCY8gbnE5wYg9NE1HmjhqHLXAYrjRSmV5DwXReuEnnwM1eqgyLstnsmkaciDpPJuMkJhtPfH",
  "key14": "4mXm5NBLCpAR6vQ9bvibCtCyAHoH6Jp52b4pBsAzFGZR4wXEZgXE1PFxZxRsXBtL8QiXbLa9jBrvVDw9jhNQp6bV",
  "key15": "2HW23ZbykqarBjRyPQTees8CFY9MdM5XK9MwenZqgdRDribAVXzuwUPBup9CRx6rwFrfABUTzYsAEUoiHCaRWrAL",
  "key16": "2q439upR6zUYEJ9XeLacV2CUpsh9cqkHdvSa6ZwntMFtSryEq2iRPSztWPyi6s1A8c1rMNQxHbTgi6dcVFHAaBJ8",
  "key17": "3JNLut9m12UjPdQur7keuF93NpF9f5KbshwXdaRgivqMvf2iNEsSryoGFpFyrLxWEF3WbAEZ1rADeXtBNnoMMaus",
  "key18": "52n4sptDqAe7ptKM91JEY1ToHyUcG42fVUx5gR9ifTAuw821jD6QW8r8iLxenSrWo8x7Pw6yx2T6x9VBiy7PBfF1",
  "key19": "2gSvBD6Aazny3S52VuUe4q1s1NYvow9uviLkm3itFTsQc3e9Yt23w5swkDc5jsvLhgxJQbqEzv2n2zUV23u6Rnbt",
  "key20": "BSNbPsqn9zV8cPRBBcK67zJjhh2DK3MABpA36h7ASzTV64UPTttbF5ZhN26haHfSdzYDxrCvmkktC91pGa3JFUL",
  "key21": "2YQhNbhA6o7rH4QaVc4Dw5UyaFAx6As9i5dk3JYQ3ar6DqTio9viQ6aaRa9wbjKZDHDLZC7Dm7gSmCas79LNMn1n",
  "key22": "ozVTnDqmv2oWBSWH1DfkNXb7WpimX541jscBex3XS9GMu1gEoi1jEXQCRKYNyYa58JyfSQMsnu5f378wg5PXgHT",
  "key23": "5HH1U1XTUU7vbPSMDTVRsUmhumn8zAZCmAZvTwHDAwCGzFwfa3WfXwcMN9itVoEGoDsB9HBZtcFWrNXvAMmxRPCJ",
  "key24": "5qVoYY2Qra3XbBnsdYuYokXjYk3uiuuZWNZ1qQvwH8Era5FfJYCQGQ8u9ieeXrKxMnbEwJqmveVVwsMXdsDGehW5",
  "key25": "56GUhoNQTy5xvmXVpxmN4HAzVJ9M5WYu3zdimpRQmcKmcyx4EScNXhm52ojBRkREecuHAJ6z3tN9rjWfz2vJatJ1",
  "key26": "23KmMeMdKAeXVm6WKQjSWsvvYie9ejRo2VHYunxbtsk2NhergzCjqnfa589o3dgH9C7UVs5rgDc8kgEFVPZ8V6s7",
  "key27": "354UKLRQF78dpayuPYiJLcTaVcesr3W88APHiAb9J6oCSPDsWFrMsRcN8QLn1EhM6ZjiKGjG84fLusNjzkpuY1fV",
  "key28": "4tYJxfrKT2x3C3LjS5m2Wmk3casHjA1cJvE1qqPFPCbbnv9BJvxXVtRWyHnKyxyhYHcSTXb9563L4HBTRcPNz7Mo",
  "key29": "2iaHFoJpuMwvad6qrEZScXdL6fKFdBpD7nS9Rar4DJCqYJduaSPP6UE4eNx65kqLwKZoqLNfVvCHqs7XYqndN6nG",
  "key30": "5Taz3Y6SGx98wVap4ynDmNgaZhj1gkt6JTJsuXUC78oZ8LUeK9HNaxe6zaazbPwb1zGYV1dUU98dMQishPVjVzBP"
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
