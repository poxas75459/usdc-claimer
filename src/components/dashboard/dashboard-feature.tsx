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
    "sEAbLf2sdR5jKTE5uPKNtCdiFSUBuieS93PkHg4kAtTrGLKeEu6q7ZfNEMgTHt521o93GG13LH6nqTnzZn9pUUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKQnADiJCSFiUBZoqiYzJN2SRfYbcFgZ15RcqXRo66Vsr7NbYJTpLAWX2CqvJxYkxBeD31SKzAVa7n4UDdZUBNe",
  "key1": "3YYh4rysVMGCYNstoiTRmyPfpbbtzFEp9jfCSFbtPcFhfaTwDJCnsYYqjFig6VvF6mxkvGGtbcmD9kKDWNneK1Br",
  "key2": "4HTR31Eqtcm8zhesz9LGreHjGcY4uGgqcpwrf5uXBgeWkUwGS3zWQnP6wDS3p3opQc72yXaiTn2xnCDjxP5uUHsc",
  "key3": "4emoMtet8odmhyHEwgSAVHqTdQE7FUbHQbXLYZdJaQczePAf4qTvHgPwV39dxnUPPhMuvo7R8oNNW3h89yEpZhFJ",
  "key4": "4EFAFkw6PA3kNoJCS5CcfrxPNBZmzAsqzaxtPApZFxfXbQrizMzUE4vypTgDW9MGuAwVSWBUugxhjd52MHjQsoc3",
  "key5": "2EfAXcTG3aWBEHZhPj3hNjQyvnA3eXMvtDavwgsN4cz4v1GB4LgxGQYKACdF6uDQjEwWcw3hyZe8QPtdBPiaGkBW",
  "key6": "2sV3XTxxukJxmGbZGgJRrCPgMnHNzkyVZBdvdsswbpdYdf5YJBFkrPAys3TD6QyrKL4MZzZE1kCmFHUbLWBTreBA",
  "key7": "5r1uSzbiDroHaWyFAczC3haEuyJSzC4XDv2NmKF9uDCeVF74ybWSsRPHvWgaSa4FD4EgBb2jRyRMembyL6thhUsN",
  "key8": "5VD2imEAonhpPNNFSzax25ZNSTSDsTG4w9josecrsqzo3u2QEMtWxyBCJm4i2jT2Q4giQNui89V82Hjnbw6hh3i6",
  "key9": "4s5WQUfnZRvD9NehEjAig6iLPatAiP56Hf3hyR9pDTtxV3YQyY4hHyrmdXspQwvMtxTzmNAGkA2pSUdznVoyzfYP",
  "key10": "2jjSXzuNZD98NnTH95rHGXr2CCvsppMuYGBf9VEmqUWPcsPCwQE1HPYVfYZTe3VkJVoa2GnB7PUyfMnz2esk3xdv",
  "key11": "2ujM1aUQp1NWa9d91g24XqpQra8dYRuMMf64CbWMU7qJYnMrb8tPJqA99xUN3DjAozfSSEKQXcmuKA7CkARi2eTC",
  "key12": "3AiUAJDcU2w2szBR6pKqyrHCgoEqdBod5RxDqafvnZVyFeMuK6hBRdzbmnSDRVujnbzeNStZTe87wedtvgYHwzs",
  "key13": "4t7HQEB3dkp7pawzQf4SeUkVhmxLYUoV6T6XTtihiBgWX5ea5qGLyuKwc99AZNd7RFUUsabhQnwpCmWuGJposzwS",
  "key14": "66qjdaShei1aQqqoW8DQ2JJSfj1x7t7HqtEAC43giKZbBNub6bwymAMb1SZh3pqCgzcaU22MQzUGbWCMXQ5Krd7s",
  "key15": "4SekA6PdKS7p9oFEUbbVqrRbemr5GMx96zM6nL9NqEqVWCP17PDPTCibtVa8PrVG1z1iYNyLerHg6BXqorNrsk23",
  "key16": "2JK14TnSKZpVKiZmyUrS2q1hQDegmwTQxmqvCx7XuLgu6LKiLo7hkgU4opqMGbPG3JTPvZp2xaCsGnwTkvYk4C4c",
  "key17": "2wjKh4Yf4A6Au2wX8EKkThHA415kxBqtEwBYnEaMmft4YYyQGYBjvPJLRBzm1QciMKzGNtqJfSWePWueWGWyhUTy",
  "key18": "62TaWyV7ikTaP3qJfa7LDkjBtsd1295BXPHTrU5FKwzVfFYBtCoEj4gjizhF4qby7d2LWSn5QWjUDMUaifn4aBqH",
  "key19": "5rqHr9mzvvVyUBKKs6wdothE5nhSoonZK9wqRH8P9hZW3ACcA5Pvrq6FqRVY6d6PVJESauhjYGFX1zFVx7gWv1T4",
  "key20": "49T5BVdvWgC7rRfcq4RHYv6hJDxXKKcbND3uVTMkPHT1n6R8p5QPAnn3DyzBqcHpvGrs5aBnd8QrRVc4RzRfMJFi",
  "key21": "7a8TEu9fV9PrVxKsxXJLZsxNJc1C5fBZj9J9adfzdHqwTLMqzbBGi7iRqGKwH9JLQLZScBqbRvFzGegGrB9KYwG",
  "key22": "3BzzK5k7mQGuaxz8CfuycHKAVbGUH6J7EjNnneTvDUswkJThhdjWCzY7wa78pqVUREkMMnZREpeDousR7YRaA6h3",
  "key23": "2rW1sWP8cspwox1cEYs4dPRcSWNYp8FHbMa1JQpfRA54u7dNyHZGCijyKCcZoqQWEq6fCnJLFWfzuGRVu4hbQWhP",
  "key24": "2YPQgp79bQMqWsg8KzWHKoDRXfn7zSn6F9ATjeBGrwjnj3v7WMFMeawG2Lzs5C3CzpCjnyYmNhGKPW14WmVy33sy",
  "key25": "27BMxKDcMhBspkCFVSPsX2raVVGLfYyiz5b3upf9mdvcp7ycPvnHaEDiHrutt35oq8hRtv5bnKDDCavdJAari4zt",
  "key26": "kMskdo269Bk62Q4mFeWD2hzy7nR2JX6otZxeoiGRkrTE1VsqyZjh2W8QjV6xsmEeKKyqmu6MGp2nhRoS9MQmBdP"
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
