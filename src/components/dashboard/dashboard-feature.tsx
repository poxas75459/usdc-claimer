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
    "4pn8vpRDee1Hwm6oeiBVyMVaozEfnCukaaRwosAQhK3iKeRsu5HEsCJEJXeu1qjJrgJbyybrJdq5L6N4o942wx62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnUZGM5LqZDNMEce44mFuzjWYqXVidCMKVwbJVbZw5E8rToXvaTW6CDNv8bpdm83SKa6JxaD8SAoFBjkboxbB5Z",
  "key1": "2AcwRTx9rzwUYxigi9mvQHTWmnnWif7FUkqHkLBwAanbaZWV75D9r7DENQ6a4rty4jCfBbsJS6NdrMWXFUkEajF1",
  "key2": "anpCD6Kk8WzvFDtev2vXV99pLfv7YJAY8mAW6dqwkMK1w7PdrC8JxQxPXiG2hJTTSEsPHfU45nb5u7TNS3npRwM",
  "key3": "2t56DbniCeShxKVWCUEEXUXjcKJ3vLVkSpQCudafPfFbnG2DdvNw9SiwwZtC2icVQZwAcvMV3eDrdkzZ91qELNVv",
  "key4": "2b1sTYbmJBtBE1NRezjxwJYqRkyC3TVwsg45Zi1Z95cNY5ir9RVaDaWLA6s299K7ynTsYmUcDNwZW6J4CMuakimr",
  "key5": "CP88CxByXEkcPrmm7iNWfrhuL7bWmktNGQtgj3PgSiAK2oDEUpyQQzNvhfykvwvUpYtUrbrhHRpNajAbow2TSxM",
  "key6": "2qwb9xEDQYt6Q1AaaqxnKKUVnN9VgMpkgg578XKisdqDeA1ZZhomQYDsRjTVNpRHFxP8BVx8i2fZSVQVNb6x5S2X",
  "key7": "L7N64opyvVNym6fnTUSxEp2FTTWpM33UrxT8XcbMYP2ZvwbkSJmDTmG8SjdXZ9HU4Bot5gph8FBhddBzThiF3cP",
  "key8": "4cPmfqzioG99twueaadb4AiYFfXDGLw3tapUveCBrWQNo11QwZg6qgPxxAc7GpvuJ1391WkYRDouVJfn9Mqqk14E",
  "key9": "28jpcuGhs7sA1bA2fM2gaGjJAXPe6UH9btCsCzuq3PAUUjzjZaHi6tPHRdZX1v6UGLZUowWxNxdphUZ61mAcJaU4",
  "key10": "2QTAYRjYsaXZBdwB3LbddBL5CyJXjt3kTS4DGE6XfbyPc8kKP7g52dF84fHg8RvcEXPDco8HFSaU2Yvx4pg9GewJ",
  "key11": "u7gXJxxZnmxn72g7rDdBqFiRWT4mLC6XGy1kP6PBMiev4TTFzvLY3ZEBz6gg7D3E9saKDZxPMnwz1r9ibZY7r3H",
  "key12": "2Vfp5B86L6Hxs9qraPFVTzKsmSdjqMtXSVinB45uCtwNwVwHT69utpL7b218cYuSnbz2ME3kP1xBgJkHggaE9c5X",
  "key13": "4nvjGfCnE3hPR5gtkW55RrE37AHe4vB5ZGsUqRsB6Da6grqtFE5rFLWTNBkcogzdomwtDTjyseL4LCVEVBVUAfVV",
  "key14": "4s2WVP8qztVaZEpXd58XRCpHnvdC8zJvujfvHxHaAriBmMjEUWzatDHQaLwEy458vqaHjNLFiTnu8JHKsbrjWX7a",
  "key15": "2vDMmKn7MqHYtpGAMbitY3xiQLrFtDpE67BbnVqhdL45uxFqByyvz4vcrm4rn6mVTYpCznUEcY2J2hooveJpnhez",
  "key16": "4G1t6nAfZJnpk7jNQxkm2FjKaavXkAQs93CUCc3hf5G6uadb4huBZry5H6VirdjQv4u5m3duPYhkVaUjH3g6ScBA",
  "key17": "5yEXYHBp8hEBRsCRwzPt8orCrwEiWVvkaXf3SA8XzHefx9SHd8JUoTHFK9BATpEBacgLwtnZyfYUZ1mkXKQeh5Aq",
  "key18": "GkmEfi94oGjweygC2FQy3fXiWE5EhQdAG64bzwLWaBkHFv8o8bSgJffPmMtXjBZaVZe5ghnRbc6QpJZ1kUBhQm5",
  "key19": "283MFoUvhN1f8j4ryJJF4Z1tkrFet3U5ZLXg5cah8dW9Z9WVpFf54L1VCNBT4wQFDsA1dWFfyFitgg2gmoGXDM1j",
  "key20": "4xXpedAUzWNH2Rb3kxxzAfua1MQ2Vz5qunkZFpNDLWhGmu7saKYwm3KNKFuWoMixxHoCXCuBWmmgnF5UkALwSZAG",
  "key21": "2QD1MQskGNbBYue6nuXLC3fQS6DxKuM7F7dceadiTPF1W2LvCmm1GE3LANFa7PgmZQUj7yFSNZuQMBDFuVWJ2pb9",
  "key22": "5qFYBA2hfkWXLok4D7WoLViQ9HcUTCeR87BtS8Hib4NCfKgcR5or6v5ndVR9maGmEZYkSB3supqsW4ThyBBguxPS",
  "key23": "3R1uxjmCcB3XG9m1SEdQfS8y3eGBPuqCKmBw4DSmwWpYk5NcdUbb1Su2QNtHLoYFDYGcBef4CCVrHxWixpDzpHQH",
  "key24": "6pBNKEcgNckfdnf8yJNpsvmArY5URhQQVbMYTsv3C4B7FgHynVY39hUz3PcLjK86mkjcfMJTVvDrxKMKowBqMs1",
  "key25": "3fB6WVj2p8axA637F6SYRj1kWBJaUKej3h3ejd9LT9P5RzmDTASMWSqpNuQ7UdtAbTWEQAgjTkXFn4t6uyTQ4i75",
  "key26": "s6YD6YQh5Fv27XQtY8k4LMNHo96TdVE9ACWiEK1qdYdmZoTXExDQ1vHjDaqmDLFx4VPKJzmanPhVovFckUNYKM5",
  "key27": "3yAfM6BL7feB171cz5wSenZu1mBNjAxpWXtQTr9CjvxGXV2yft8rxZFxAuucw5VX3FT58QxEGMkL6C4PQ3WJZJ9C",
  "key28": "q33daNsMozBfXHPehtn3XmhmpSxVgwJssJdBQH6PVRjGbxKZoUynQdCuU93Y1eqhz8rr4n9LjNYu1BJLhZbpLQx",
  "key29": "3tDfVKEYNW84j7R6qNZ93KE2GfyxQgzJucFFj2iYpwsPAm4P32HG1w7JAtrbMxhyprHytpACTYugPkKrTudLwpNo",
  "key30": "jNVkY6gkgxAjVw1XypHH3Yn4wqfVvAhT8oDSCqiZMzTCcLeniHCaZU4UmXXT6mC9YAu4SKzhHuNsVsTDgtTm6tt",
  "key31": "5Bd95YH2ch8XD2mGgGcrCPxHKhpYVwJTxR5Vo5oM7EGBBhBaoaQzHM4ZNDvfAauDvdXqXJihckPyCBmUAYyMq8pW",
  "key32": "2AEQZ95xPMeZaaiQXJuHT5UkoM6daE5udmE217LfJ4wCCekV5Gyy8pghio5QNRyWg1cXAincm9MCc2MYhPmEoH7h",
  "key33": "4fxMXNfupPLD4MdqWPW8CpUuq73zVevg2XiTgkkNP5YyvqLxvAHTtS6EEdqSsZ3HTupcH5ZXwnNHPniJnjoYsQ6S",
  "key34": "pefsoUxUinxoSmXPKP1z9jTTRMz1AE4xZbGZfMtfrBr6v6BSs3mWKh6oUNkJJqqECc3bJwoDskN3mVEgKof2t9A",
  "key35": "38VeYknWUVk6PgrZ3FWrVRTdDbAnBSTa6q9G5qZsBiPuy9HNPZSsexu4iwTRmCpUK22HRpgLNswKkX1PJEEfneqE",
  "key36": "58RiD8ndDyVexafeVi6fLA3RMVkLYcyMXQmTSXwoFx3vdtbibLQABzvAd6y27xT3S5qXnqchWjavsXffqPbqNNLZ"
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
