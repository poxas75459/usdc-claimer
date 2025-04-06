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
    "259BikgxufeF22xL1EXYoKYGZPytGnxmvZthqvHxDKUbZnVLmA8QS4fDZZq49VWLYhfWs2hDBdh3qM54qrR5iZYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ke5jPVCyadRCdUGV6CHP4pcETLzVyTVPrGN3xRo9WtxfDUCtMiugAwQLis4KqafMZQNe8XUnzpCvzkijSZQBHQ",
  "key1": "yS9tUzg6AbCZLHa7mN7JLKHTkg4i3rG4webYy8M3AhgH6ze6jEwYeNh4S3aLTpyXJTypwd3Hemxpc4QVbeeVZgz",
  "key2": "5uPgP8bCu4Gaw6Ui8JPzGj7KRrA2M1Xaa9fgqx4CN5tNaasY9tDCXicDZxhweCd66N8v4RxfXyu7h2vJZDwmTsfs",
  "key3": "2tNxJ3psnpZYBpfZsuZyAX3BR7NJgkJSYC62yDTThh9aF8KXkaKTqSG7ymrFW4omrqw6bv4jRoF6eUWCqciDieDP",
  "key4": "3KYEY36oHx5SF8mhrNPXrguDiGgNz7VYQj9ThJa1G2bfmrZrAiYQXS6iXMaMyNJRGZDrJVVgBq2Xe48yXQog5gz1",
  "key5": "2HbAaJChpypXni1tHWjgUA5yk6W7FeMqgZAV87UxzumctWsMMagQ5kKty51thCpcwtwEXf3esBwxZucnxW5eHk8P",
  "key6": "2PG8b4WJJ8W7iFGfBP5Nqr4FTC6whFmkkXU8QRuuP4SNUC8nUE5Du8jUzLmxc8CLECzz1UiRbhcV3svuMsqKKQ3Q",
  "key7": "4QYfYo3ioQZ7ZeJWdXw4N7KPNVxPjcnWGtY7kyK51s2FeEp3L4TteBACC8xkZV9T5vGc6ihybvW8fmQH3tYWepNi",
  "key8": "4w9M4vRtcLuv8QwaKKJjrB1goUAFs4tKiyPPyFJygskonbeR1oY2ToUMp6H8rhLtmhFKW1SWJfZoo9WKCGeqBnka",
  "key9": "3qLWtGDAaQV5m7eJNQPz3Kun599m1Dp2gTEirHzBacZqBHnAkacNpAUqm9pa2BEEK3FqYJTV8VYT5UBQKnmAx31v",
  "key10": "gxt1vu22nEcquFDJggtVv9Jr9Xip2CXGUvvYF5dUFqm5peZ65K1ZQLRGLoLJU67Ww8iKZSgNfHGhFPaANpnovUw",
  "key11": "3RSavC35d7xzy6asM6m9tdmU3tzowA2H7oVybpSspWBJ27HiYLJDS7dgNeh9gsL7eJWd4wNvHzkJozMwB6GpiWFj",
  "key12": "22FwsQ3qKMgZd4WBWs987Q9gPSwEkXcojZ3hJ4TjZutHUQV3LAMJ47F14Ud7jZcLn2fva9eg9P4dA6eZT1fQyfQ2",
  "key13": "3t5SbJmES44oQymkiyquUF5HRffLNamW5PukCP2e2czgkPCxPK5XfyYJhbZy7WJ1WPUhJ6ZMGH87D3K4pFp8etVW",
  "key14": "5yJtUWbwKmTSpVLXpakMm5c88hj2KSHobZrM4Lvbqp9UKvazbfJ1Q8fqaiRwiGPsQzzmHYsUfDWytct27bztHePy",
  "key15": "HKxkx5gpnVR5rVNMweo1aqZfSXLLupXc7S2QxjNEsA825efpo6he5GLJwZGvvTwjBDA18pFb9hKPtFgzwvUkLpG",
  "key16": "2Qp4GJ7T8pLovUtLLKtbDQgZf1PfEAWYRZuaBJ81fLb52MDukXLjXdsmoK3jhSUGuoVzg6vmPZbJd36SrS49yB4a",
  "key17": "4nKKXeqG6pkWAQYEaxKHQ8cvYFvqsj8niTKysvbYEiJMgmuKp55LhXhbuUgrNBY67xNJUYpS7BNsDpy81MrhLw7g",
  "key18": "5abyAH8AUDG3APbSSJjZdgPxsGpkX1o25gLuP7nPrRRCNWq4StxyKQbAoUcLdYrG6gRgCeW95oMuYygwmzw5X3Hh",
  "key19": "3QAHMk62ZChfmwmrvJaezPajE6gCY8nJ4g9k2RsFJtXo6Q6WCAJS42Yx9VDSGpRLYRHynZZJefBsgeP4ncZ9BaS4",
  "key20": "5KcPEygcRn6i9mZH2iYbBpb6gkSMFjvKDov7m3yQNqqFx2WSLodH2bZFALzxx4L5Uswmw9dUEzTVfPrQd9Yt1gSF",
  "key21": "4PHbcgXiY5gFCywYNa4Mgkzqh8cBY4REWbyjfxtYovqzmsuXwozd2YXLrFQbLFfvKMektPLYvjvPLrXgkha7gVc7",
  "key22": "4yEpUEepXGKxdaN6bJ2XxmEXL51PHP6NE4G8DxwkxJdNXPjLXgDN1Guxsigrk5n7Jb644j7LcFq1iEqXXq4fDxn4",
  "key23": "6AGMR9tCRYqQjD8FKtw4bP8KC7uC1kQgLo4oAHiyzWyGWzUDGtUEArjsHnevPAcnufDSTQrnmoupqpsbchz3i3N",
  "key24": "2azWQT9SRZ9UqeqafwhgiZKHj8MZeoqBnkcZqncKHfp24PgcC4TAvGZjHmSnf4wyguE1osogkSSwzEq333ACVkfN",
  "key25": "TAXfqv6fjV15ouWAsAhgMpDjjo9hUhg8oD9PsbJTHqgYH7DW1WVoNMfvDsJX6YmKF1yg3wPWNy1fWYHKWjSDC6o",
  "key26": "35cQCSouRRLupxFtY2ae8TA8i9VNdGTiS6WNknfh2qV3meWfWaDo28aygD1WyNvEcqW4GW9Qi3wS5SGGCGQaVE3d",
  "key27": "2wEtWMirafGRcZkYRzvWa2Pyyiduk8bzxVPVj2ULwkY6YE2KpyDuENCK13E8v3kyjZoXLcyYCLm8Wa8wn8sufLJg",
  "key28": "2hot5Rm5Vw8skR8wpzDSNrLn7Cmq7zDUe4m5nQZDp8pVgXzYsw3tb69QcmRLCwEoE9uomwthF4qYgSKKc4hraHgY"
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
