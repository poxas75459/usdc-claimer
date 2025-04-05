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
    "38WW7nnz2z4xAwRhnZs7jZNNcG1dVtMdP1ZyJfoKMfMeYYAx6nJsBD4X5k3fvDWcEXYWoyqEZsRwrbB23hfWJBgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gpMCH2L2PKALSUBtpLq3TUN2cdwGEyb1PcpFTwxuZL4C2qRfnH8J5mtGvmBwmdtZMKdf3tyfhYnJ5N5RMfDv4A",
  "key1": "2ZnxhrsayDRHafEdpQCv5BVfeBWeCyLCgcKpmpejvLtzNEAWE7ZBF3udSCDN7KGcLvKCRdtQ9BYwrMSWwpcCSj2c",
  "key2": "3gJc2yyCakrYUxkvYeJFW47uohT3aYFcbgm6t8wA1WTanuDi4Kket4T9Gg42QwNYZu3yN12VbvJitoc4YJrLba9Y",
  "key3": "4QnLSMBexybuNGSKgcsArsPpeCfzTLk8j49RztxdpouJEQxBa74Sr9BPdyGAyrrzqmFBE47EDewRi5dxEYbNUdgS",
  "key4": "2tvmXV36c87TRZxri6HKYZU1y5twgi7wQGHA1tBGgmmDwkVg3ZToE7q4LZSPH6q4PyhyLyfajLvuKLrGqGJnzaRo",
  "key5": "31njnmdHeTtkbEQJTWbrzhi7NJBVVmuyA1oRRhJfcaTRf6vJAf8z8XwCgJvgVYEN9oxq87Us9H4GKef6hGpNSCjX",
  "key6": "bhMzf5WwfdWSZDA6Puk6BCQXYMwhMaG2km2eMUQqgZZxE7aKkj45y4HtU7VVniHxxGw7YuwiifGd1YGCkJUAH95",
  "key7": "2UmWaVbJPEnkGuqeioqvzFNZrASE39djKK1FYPd9FTEtFYwTWaV2j8eFtXV28tsSufNoGx2ZZZ8UmN1BqTNr3EMk",
  "key8": "Z6YcZ444x4wZcBeaipq1BYPD4mK1KeRZKgSmUqbwdRh9uaTLLQAfKPAAycAZ21HCv7u6V5PCN8pbTX4guWhnBfw",
  "key9": "24sbSzHiFQRCwMJQhSHgCUwVEGHYperMgzoLyXNMi8uohJ1ZvrQHLnNjkA2vp7bVpgQYgqR7ikCCqY2QbDYZPuDP",
  "key10": "4g8gLRhz1exhEqT5vpsKJLSV4hmc8cPdKRuDyimuMZNuPSVb6QsjRJHcGix8F6sVYvqVJykvBasEmJpgPbdG3xkp",
  "key11": "YGNxg3uBqnHe31JnHZxNjSLmKWbUJKvZw8QTR8vXb68jVR6ndSkMGJ2XwobXsSP3ArJdryJibBL6DwKvncL834j",
  "key12": "5DPA6jPMqw1uoEUYTWELrc7oavV6vqHxmAXRzgJrWog6C9nSb9A9mTaaReVyKjYAKVSwKxBJkGdeBteNd7KYdyi5",
  "key13": "VfRGhxtnsbwv7FmhMqC6KShewU6wyHiKzG7pmbUWTmbRQmH9DMrfn3G6VQeWXawnkbKVYGsXhN6MehNuiBCLcPX",
  "key14": "BjUwtEoGoKgSEGQ8kx6nF9Qqn7JBx4Ps1uhZENTr2g6cSpaYBtjgyvRPzgdVfUbko2TLusDq9KtvtddnBGQnPg8",
  "key15": "3PoMGF5GgfXvu3TUF8dgjURsX4NKTra1NYHpYc3U4UgUUxPbr9q7Y2UyoQdK1jwsK8hZkV3V4y21ht69ts2j9Vpm",
  "key16": "2UtR2kyq8YaLf9bhykKzGyJErfDzqv8h89Ngo4AhnRPJQyhNKNVUztJSGK23fvkSGthWn3S6QoPDAJ65BCFA6jTq",
  "key17": "Ho92GYrGtNbpAimay9wq9z3W7EaX8ichBLhw3fw42NPkUAQSKHshrvAtcuScQB9FMibCAjgnzWwbsDDroLdGxwq",
  "key18": "3DKgQnCS7UJs4mRLQghjv5o6vrMncP5nzCrSrFGWL8f6Ak5zHNE8VzgT1c4r5hiHY6YKyV8bu3M9EKfoFuXaBAF6",
  "key19": "3ZGGWVM1sSJzS63JaKZ9jRFZuKYUfic4m291eRBnDA9T442ywJ5vm7VcxeFaT5sj1QuAqUeSUkp6aczMzeT85KMU",
  "key20": "59pg7gGU81jrztbq9yi4SYEyiwu2xijs4Cju9ZaWCFK9SmTV4k6y7wHWL4y6uFHZzYNhFqq6SJZuDAN1uwq865Db",
  "key21": "4nmRj7jeHnVqWNLJTJn7wC8tFPmj7nXaQswZdGUKb86r1vgqPCn3UULXdUGCoP39kJxCcbeaEf6QokiBWsW7Y154",
  "key22": "srJR21YLfb5LQ4XoReJ4CuGqdekusxcvzxD7ph4grNWvL3kdnmuSRH72NWjBwHiq4Jq2Z8jCiDZYDDHDkk6xfZB",
  "key23": "4EN7tdUQWDjStgqyd6fSimVmQ2zRpqgphwjWdbfuHZ6Gr5vJXVP1LSJjm2jz3eQcZEHkQity8BB96x8w8kGMgF98",
  "key24": "FAeyQYzEAiU7JZshp2aZyhHJErS5BynYsFVG1jb7YseYKRh22KvpfcLQPPnQEQQVDwkYvyv2MWBsPnePKVrA5eY"
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
