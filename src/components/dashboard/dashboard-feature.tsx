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
    "y8xt6UsWW3vC46uyWfygiBkqTswGSF8uUe9YsgXfdhtRaiVhpw9P5MpRzyhcQ3teG3hkCgGC622qLbH3zKzRWst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgS8zwytHXXSLhF3vu2umvBx28qVet6sShWBiWXEGDKYiRWaQDViLM2aNciYXr3yAD5PpwDFfQkQ6ePhgdFVxXD",
  "key1": "4Lx25hs1AUmmDzrZCkRQhRmQddYhKGKAnjMNP3rpiLZLqjXUbDbXBKy1nWiYPGd2HJcty7APUKjFhyZ8KzeFBJAN",
  "key2": "fuWD1sUq6biwC3GCEY12SBT8KkmZSa4fYreNt5quyuun8qb6y5E7jNSLZCpwY1TcABcL1VMCsrZ4EWoBQngqsYM",
  "key3": "eFZmxbAYXSznYkZRHp6MYxZGeTDctKMSRcVePX9GjP5hiswS8tiuXG7ypRMVhPxmC3WQc4FF4sdAzNY94XrgAET",
  "key4": "5fgr29g5ngHFmYucGjXyEZnPubQooRPGuUsMUs5TTLg52z4zGwze7q9qMsUjKR27jDsNDobwZPXQdXm177kphMgv",
  "key5": "5P5CZg1qU5f7Pm63BVzfqRNBAxcofaWLsERhzG4Tcaw6wck2Ty1QeUUJtvtEi27hc2PLKyQma3NZLLsZnLXs4cPT",
  "key6": "3N2Q3e81RFMaLVkTBoz9SfsrYjfqrzHQ4dKVLMz6Grm7N6rUsoS3oabwGSQdVYXCGnjBBBdpPPpyrj1S7KrhK3Dq",
  "key7": "34encUg7yFNpGGiczQbUSXZ83qEEdEgLAHLuoCqLbSfcFhbUTVXRxYaNApcbgT59bQqxJGgxU1ZYWG3F4N6VvfJw",
  "key8": "3M3XoToSrghqJkbys3FMq6T2eGbMyUTjBEcnm7KLHBtA8JuiXSPc377GB46hVUux4FeMJWxcUtC1ecH6JQcxe3GF",
  "key9": "Vor8ruPvystHX6TBaXAmKL9qQnejqNAJhxwMZ2nrdKZiaUwKUVm8oHi6UKdYLbDDGXsffU8SaWr6cBBqCSzntKS",
  "key10": "65XtVxbjY8vXgsnW1eYtNBq38PNorke2XtxceUqh4gBKEftLoCrnTRqCtSdiJqz1iN3e4CEjNw71s8FHzVMvS8EW",
  "key11": "5rJHuGvFPNo9VytifrEXK9D9R5oRgLkJE3HwnNdn97WqN5KSPcz3M93hx4jD9Qx6M2mg9AeJQ1xvGyM1QWporWvM",
  "key12": "2KpUUbUUwxS7aka7uByfcT1udhgRtfBSkirNwfcSnC8oG1wgukBQJYQXe6gZ7TsasFjeVKJ5RxW8HBC5CYbCuWi9",
  "key13": "28tuNwBP8MWxTZ439EcLeKxYPtLGS4cHqsSsb8mHEjpnZFQaC64eeGAjmyYCNs9kfEQ3giWm6oKKqjkg3HSJzHdo",
  "key14": "5A4VhCQsFxaD4YsGr7QC8t2pZAoEH7nFWuEGL3EqLscn1KKeriPQfT1yVXznd747uovSWwskLG46Pkg8fpcDV7BJ",
  "key15": "3Qaz4fKjP3sGDGEUgWuY2NZdimDBnrb6jmJGEoMtAs2DFsmWHvgXWzwqnWa9Jopm49HrakFKhxeSjqaiSdb7DCQF",
  "key16": "1xL3GRHvEbMR1omEv3GJcwrJ8wWvk1dQLUAQAerjKKBaYWtFqNPYJm7jUnbkeZUCfKWSfP8ZasbyaEsvS6R8muU",
  "key17": "eY9ueKEZTtTyWkAapWzRrbGwZWmZDTBbjNkhJVq9gmFQbJV8hFXumQP5H8WpVsg88RYrzZR8Y6zVPQkFTJwzhUo",
  "key18": "4HSMX2HPavArsNFEbNdP26ygJeKMpPwvC5e2eRySK6HXAfjaA2F9XPUBcaYbDGJNvf1yBNP5BmzNEet4Nu66rDGS",
  "key19": "4avfizVeEvMou21dd1zd8q1nwU9Y56buLC6iUMbVcqa1G8JjXgcg2T2Ht2qRK51o7q1NuY2FGSi5vrEQ1FJWyMw2",
  "key20": "prQhjzdDCHT5NEwCgEvhqejPhpQH3QLdhkaxc5myQqG7CuKqT8xuwwstJR6jLZARP4jQRxL4NH7a8kPd2RmmzA4",
  "key21": "3HcbP9WekgjPULb6CF9Y1FU1VA84CAfwa4sgqkXy4zpr6dm8bpVKJP9nyYUZq6bUyBPk4L1WHHqU1Qi5yaFgmUmS",
  "key22": "35whNYcHWP8hCS3FeCdBrp9gWC87WnG8AhtRAZMRS4C4Kp83HUn4i14Fpcr2U4Vn1iENQcsEB94B4LVsMpNJTpTQ",
  "key23": "5P5x1q8svsBHp3f2PDVPPxp2BLx5hqAe244jNz23TCCQfYQej7XJwLvHGQTevEhFHLxHEAHUnnTyz87TbSTpXFhU",
  "key24": "3AUE1hEZEwEtYQ6qHsddyAHAUoMKaq85bZw4UTkaNKUBFZXe2MB9kzvBu7NmqChWXyA8BjGriS57FJ3EkW451aKv",
  "key25": "5dfCZyQ48DyB5To76FdJxRVEgKaqVWe8TzR3bCBpePioARFYqu9HsatrgSQ1h7bLmDWo8x7Ld4Cp8CxvaKApwFNM",
  "key26": "2FPs3MaCdXik7fEVybdRZKiWvmN95dRijB9HoFSgYJXnmqfscPnrmxY6qNn2iHo5zVUWQ925vtVuiGmekpsPQEkt"
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
