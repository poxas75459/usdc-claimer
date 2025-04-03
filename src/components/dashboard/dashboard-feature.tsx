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
    "5qY7q9pHJpbgZH1m7SxHuxCGvzh8Y2jwJLCYQUETUvn8fXzpXfC3E1nWrAXF28BtFz2HedpuWBErX2AXMNCs6ne3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vYRasswgLQNAdXF5Gz5nXTqdao3zZiLKYJbumnMF2QCzKyJMPN4aM6bDFxXtGER2WSH9a5q7w6GGzZw4EgTgbr",
  "key1": "E7vhDyWXeCaJHTGKLyWb4HMVi46Fj4WYHZrUBeHWTo7vjhYWhb9c828Gj397qVuGRVFC1AokgLRhki5CHEKwX1r",
  "key2": "3zcVRHAu5XZjT2jWPzVPP9xFG2kUDFM9QGQoEnNnJNiKkJ2QwvQjjDs5TmYS56MaZJwGjf83NomxiUABqF1khv5s",
  "key3": "63Tk2VthSnqeHDyQmXZ3MPhvMPjJDpmYXRoRpsAdo9uetFpgXLf7utX1u8YUfg4vEqVSeacAu4xWsG4ocddEZFqD",
  "key4": "23aDjo7FLBTtCsy2AqYjfiEYurZ1H97uVg52iq3FvjdNKP6FShW9KYKEoC85fKevTNpvWcMDbnBQT2K8gD4Bc4hA",
  "key5": "45tmn4uhJjj6NMaVb9bZmLdjp11PUBvJXMNbZDwQZXhoEJZ23TZECEV1g8qTeKGvNY7UhDmp7uPQ6n5yNPMnRG3r",
  "key6": "5L7p6nqvSCfGHPyNEps5a7MWBSQ15NDH7FRvWoeyXDQTCvdnAgwDe23giu23Bte8KzWzMzxzZPS27avHRsZZnSyL",
  "key7": "j2TRwjrHeqZbg6ru5LCaiuwYYjvGrgoiaDG1DJDsnzjvEwvgSp2XEKXFCzYUN6Ngjf9SDmctZ2tr7Gfmeyhe2RC",
  "key8": "5zrge2ENoaVCmKWtkiLxx3HFWH6LbKC317C1pezFGRCkJh7nagM3zGc6vcZ7kw2ixBJrchYD9UBp2BcZao9aGuFp",
  "key9": "4juJd6VncQFsdXP5pXfvcw8QtguTA7hYKxK3qiQWGcNQEsbSENd4bUKKq4QETkYbmNUJ2UCjSq14cyHQBUoQUxRo",
  "key10": "5rwYfNSFjpujSdPWhSeK6p4Mgh6CjM3wfihps9HPHNRcogXJZDJgGdiJJuJ2kd5cbF8mEKwuhZ5i6LDyX9qSXm8W",
  "key11": "4vM1BD9hmGgYe9Kt4Wg9v8vFhu7G8aJERjh7MUmHU61gfgcB3eyymQZvVMGyvNsEvDm2ikmKckT1fhFfxtxCWdq5",
  "key12": "5K9sGiueKdDHCnnnsgEAXWrv44Waw59ynAdN172fjfGMiHFd9dczKMHYwjVrgn6QKyCL9xK9sx4UcL8uzwKGPnmJ",
  "key13": "3mvvyHBPAu49EoqLebLT8mr8dcrG1Dv7RzEKz39EBv6natjt8eBQ3PGdUzBb5AZCTTyKMAvKWvWGo2bJES6HPZHF",
  "key14": "3mE7Z45yLE4a9AxUQeSvr8XB8VnsmJrh1QbdEbsjwEwZ3ZXfcFr9qsm7jU1SwLpKsp5pNxdg2zXP91yHX4KMtTDq",
  "key15": "ez9GppkDrrZxXBUcnVWpcH4sSDMeD2zFCU1yVq3safohnkbGemRKiriuEaYvpj46Stk6M61Gsx9zjGjanJiDAh1",
  "key16": "kYx3dDNYNiTBmCRTZJ3gy9qfRN2t8VnknRqanfLN2Q4VkQhGn9mQ4A6ey8p6FhKnvEEKnVTzbrehk2rEp5Vtjz6",
  "key17": "US9AvtmtFziavcfE3roaUXVmZxAjZ86zhVsEVWvk6h3wpKuHDG4Q8XYE7GWgZdx4V2QSBV39fnVxa5WuHgK6p7F",
  "key18": "3u6mF7L2qe1sd4o85cqMXbbFVMeZs9VCN7Vanx63SLoEnTerVfHeqaparSExoP59FP8LuMhWAwZJKqEcC5g4hGaM",
  "key19": "2PSWkJ4rp5V5nL2aLfqmSty4hkcfuReYbnuAVNWRwCeeXiLQiHUszNETYBKF2VAUFbiRU3NxLqNcW3wKPCNbr4v1",
  "key20": "5fSqsudhvn18nLeF13VmzZhAYq6Btyp1h4b8KafyBBBoxnZu5TuvA7fofBHszsp65rFkFthu6zzMmNCifxA2CBGj",
  "key21": "5mL3hroSofAcu426e5wX7A9hkn5QHph7yDjqC8sXShdZue1sexb6eAFX5irVuGwcyP4yjehUzpAWjzRfL1khuXsj",
  "key22": "5yK2kxMMTE2PxF1Xs6DbVbTwP6fH62HSAb4mJcV4k7RSdHJdwUPBV6ehqSU3V19ANnf3ws1QYvkE2j5jfBek3zeS",
  "key23": "VfC6FVVWKkp72JtRwSuGmbDc6eXt5S33uxbC9cDFq1S2d2JtQahu7eNJD6ywc4tovKwE2YL5zZoUDhNr47J24Sr",
  "key24": "H9zxvXje6owQYa9tWuqfYnUaJTMJKScLRFmegSUsFuQ1GS1ZCBEuma2s94Uu4X2zEuQm1wp8ssnsX1qnSX29Pdi",
  "key25": "22Tfn9Edx2F7uVNa3Lr9F17qdvps9cGU69gjpj78TfTMnPdwvt3HXQ1hLTGGwRsYSkm7gwEesChaBveU8vraqwT5"
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
