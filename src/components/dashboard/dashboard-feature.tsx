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
    "mEtWGMJTB8Y841NChSTUMc5S3iJ3Ai75KU9LXiFemrgNUW1pjRxbinfgE8c5rQVRrz4JWiancVM956kaYvk1qkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyLpg9MbF7GzrfFmZR8wnupjwrxEvh86FQ4HGi53WJXnfMK3cbuYXCZWaVaSf2oooCmBRUkA7hfnBWgXPEG1DVx",
  "key1": "2qGHr6Cr3HniTdqaqfSJ48zpMsVMo4n61aDuAdzP4jHWwEp1bdoy8WCeUForTEWJcrxZ3Cigt783Tk9qV9nRVd4y",
  "key2": "EkVknKJGn8kb3nukp3JZJqZq4GhLCKa6rj6byCAKuwcxssHGXfd6fUDqu2kU8BQBEdsy7eb3SfBku8SwFrWz1vg",
  "key3": "RCvSioK7PTKT3UfgFWm7TmPbUkyhrzv7u8FV2xWtWsbQC88DW6tsr4rPZ9UjZRXF4kWhMwneUkwnxGzjarkg8ue",
  "key4": "4mW888qjz8R8vxWYARCGCKgBSe9m56JBqPJWCBgxz5EeNh3uWgqWhcRCRogAicg5ZDAe46Pa2qNMUnwyw9bWhLw7",
  "key5": "4J74uavZHxFuFcgiG4rBt6BFMJZucmdwKheEtx4LSiKWs1dxbjbKcZLUsQUxP6Gzrj3pX8X33qAvTqCdaj1QdccM",
  "key6": "3iPfCdPtDA9apinoYXdzuy966farE85jnRpD5spSs7wQWSZ1iLtPJQLmBAiLAQpXPdkHNq6J7eV4VyHesmbWEo65",
  "key7": "4pEJDjRiycRLzfkWfa2tqnE8QYidWkLkzhN3WYEaSfsiEmom14xaYGJpJvGYY5js3yTWvrcJ6P4ReAhgiRWXzFHv",
  "key8": "5UUBNk95jbiByMGddWuJ3g7m9NQBFLJknniYcfYGF5MU3vj7UijY8D7urfCRQHm9dmDxnN5eTyYK2PSHa2jy2L1c",
  "key9": "4jAAPXx3fe2hVGS87EGJedophgf3wWZDJpk3kva1UGezwzXCEv5Yv5BxCmF7nVXTsMyF94bbDLiyaxnPtp68zA7p",
  "key10": "5Bqr5ZDzh7WrbkzMYZKRYuLHJkARYNL3cEt12NfdXArfkXzWL94m6uUfnKfk85wyGSknrDqeKmBqK93crBPDKvQS",
  "key11": "5FQ4Ggc8ojM7Pfsd3v2oSXy3ChzMNvo4Anub8YXRQWi45TiuUkYerzrBHXco8vxsHMr3KHzCRxDkGZf6G6JGDMHT",
  "key12": "3iKWgTH7SsxKCoVBEE51rLrWynfe2sMsKmjaBRxWxubGFattkDmD9AcHC1KRHVsyfbPrWhZX1viDD5BrPF26D4hB",
  "key13": "3eWothAQTTcZWoAz4Hi278oWnkF8UtKbYp6xP9xH6AGyvEh5HnqRmdsRr1DEkZSXZd3aPqvac2kw8cfVUGhWcLqA",
  "key14": "4369GcH7rtjtb2BZSRFEgUvCMZxhLasy5Vfogw9B1N825hcYSBRdjqsj1ppugCKici41niDPWh59jaKQauVkTErc",
  "key15": "o5Fyb8kaT2YmkjaC1rMSjetfzLwmk69WGfrSWz4TtUCfXfqt1MoQaPNhgTW7W6wH3qyAaRFYXF7grvSMSZZkFKu",
  "key16": "126B3r9GggEuM9WzYceohwcdGZktBDUJSvLC5eQMese5R3STLjfyZvhqRpAuTJqzxGDf5oUAxskv8eSDHwZ9GckY",
  "key17": "oUvRydJFuxP8Ryh6P7qbU79QFk5TtNxz4P3HLw1h2uPf5nwoiQ6cyz2k8Y9AZjgXEdpnTHff934HfWnLJCTUrMx",
  "key18": "3pAEYGEnxNMqUsaQenVUrczWyYfQX4RTxsCQT2dKMx2owmD5psoKCuytnggmEJPNSNiuTN4Uq44qrp4RKdxcKMV3",
  "key19": "4QhC9zZYUbPtVpxMuzv9xMHHz6VSn6mKWGXCpfi7d9RYA3mox93g26ZxaZ3jFayMNfZcgGcPGJmQwe1jJZ2DqJqD",
  "key20": "269pwND5wG7snJLFqPfzah8L4Bc5KBPeqHPusW5j8J79UqgBb3aouvhH9b5285bTBsFfGD5Z5Nxx4rBXdiJitW2h",
  "key21": "3BZDyW5dibbkrL9ZdZrUiuGgNnw3UHMxZpSoUpdcRzH8AHQrArizRnZHLbqEemqkoureiZnpiYHFmGVG99TXLvZZ",
  "key22": "5f7wMqJrQBHQZgXSVWtTxB5DeHePpyS6JAyVait6iEbh8kBxv7L5Jn4qxYAYZakdxjVCyHasoP9cbCzJML3MqGqg",
  "key23": "4cqpZ5wswbFjJUcMGEoFbpWuPLyENNzpzcH9prLgBZ8XaAtgMn1f9A96eEGCA2S8McrLs5thoszRBN5uYuUtnmxJ",
  "key24": "ZwX5kXkLwTENi97vGzXdJoiyigCLVNRfRYcyCwg9T1ika12VYeqdTsiLAK5YHVqijK3tt2HyG6oEpiDyftn7n3v",
  "key25": "mGxjbAxV2m4UbnwFLNatuEwz6pTwY5bh9ufxqHjdP7z39PCCif9EzuYG5g8ZTyxE2LJ8undRek4tv4sQ82i4BaY",
  "key26": "4RNPC2F4eNGqHhekfsDCMEHCYzsmt1TySHh3Udr3adSsVFpz3x8KuGRpghDGxirLswTDLWux5ZtLXMPAdM5LotTs",
  "key27": "3SD46uNLjprqUwm5ufxVqVaQQXovFhr658VLnnbVWA76V5Rb84VMqgEtD55Eqgs5jzWbck3J7DJfbBD11XUmnrnD",
  "key28": "5hKZk53u8P2a4fxtiKWp5SzEjw7EmZvcrTXkrtLwmYwsz4TbFyo4X63x55YwFthSTrQLVZFLycYMDqhZFqKgaZfo",
  "key29": "2aPpbC9hfLbkQJ5i57Tzr6CWyfifPq485Sa9q5prHSuSiwKbrgE7RdLKJGjCL6FAMJcj6v1GxVSnNW3fffcDwaug",
  "key30": "2HW1wnK2Y4ierVdfF78jEuRHyZkvjXjNytw3eiqqM2sHQFF8jUbp7UgEryBc4Lj41FCeDusgQfwbiFRDgvYFyyfT"
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
