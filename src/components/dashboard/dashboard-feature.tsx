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
    "2DZX8LH5P83mPm74mXKGJvBJwcfx5Esc5KmYjmvfNnyoFbT1onJBRwNBUazaaVmWSkxbtYeuGPfra3hxhWdeRhBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhwf5KFs2V9Lt6EU1JHg5Zs1SoD1HyuqHwQaRJrLHcvnKmyBJoqejKBozqHhRCKYPexEGGJB82roDJHmzcDjBe2",
  "key1": "2dy5i8iinQY4GJXZdmzuTJX3g9PX7nqqNFXTsaLRxb3wdBUpf1N9NLu4DtLdYPNXSNXmPBCbn9N1bW6UBj1r7P17",
  "key2": "25icUx1tSzrs9cfrjeA8dtvUsS9EJu8AnPrGJwiz1t6xevfXRbxiYnS32JFhtZSaJqy14XhWJNhYiKsxDmQR8JJg",
  "key3": "2rYJ7FjHCLWvuKdU5LXRuZ5XGcq3Y1ENfpfVywpqJp1Xz3o4ibubD4yV1LWfJQefny83ZFDgNopGxv9bfTnYxwHb",
  "key4": "5XNYij82RFfWjKTS6ho45MM6MUxFNhDZ2KEUyLgoD6roeBqW5sLLcEvrQDfsciGkCve3Ypquoi6kS8nnYpipsMsQ",
  "key5": "3ZmDLox7gpRWRkepiAy9WgXV3FKNkp6oS7XE4rDoYUejSDhbqaCJGnNwJuU6AQTfAb511HYWeoxxrj616ywPHMYe",
  "key6": "2JWeEAuYpHSUu8J7kvrHHWDS6Eub3Rmg8jsFQKKAoY4VUcUS4k5kGHNkq7ZyfHrVkgNSeB6WLonUrGXdc8AmpbPX",
  "key7": "4CpgXQeCZStDoeUboGE8YG7hR4b2C8C7wKaTPg9pRRHoqidx2wwvZjFhTE1PYXgNUY2XeKr7EtBcCZyQPskV6dpG",
  "key8": "28EWTtUMeWEmBAGFyGxuScHhdyQjQdqN14T3E4HuXBtgHrQzXoMuncF23CZ266Pard9X7B1TDiCXrAsiAGk7u7qY",
  "key9": "2jMttKQYBFahHJLk6b7BqmfoupHcxrb8rT39Jx7s65GoQWyeorSwkK82YVdo4k2KLH3qm1MSo1Ev2dMCAg9P9du9",
  "key10": "D2y27XgUxDbfvJ7EayoS14wUVuC88Lv33s4o14x6ymWby6zkTuQc7xwWESdSKVJy22fyhgainJDKSAPArALS1i7",
  "key11": "2JxWCFWtnbUVsvk4YGUzUJ3VnkH2K52ji9SrNyqrcMxEz6HxFcwMZq2p7k8CpdZS5e4DE8YKsgKBrVVq3kTB38mM",
  "key12": "5Mx3DyoJUQqiTE3tHcPBF492ozKhLcKu7KK2QL9taqcLhrCPjXt6XgsmC9FhMvNKjVTm6sMTv8jT16B4GhJLrx7K",
  "key13": "2hH3nbNdLK96tXH3w6phuA4CR4niquPWQYMc6qDxnUx7ZLx8vRweDsfZbgZkGTU4DYzH1NPNQ2bmTVx9SVACnakN",
  "key14": "2MzEHFJBT2VF4QWHixjNGw5Qn9zNbW572Lo7VP2wx86zU7NJ6ExPhmVV6u23mzp3su44bvp4gk3C96sQUeiQBocD",
  "key15": "2hVTZ3JshfEybEsRbMcfS3VsbKZUjrJqGcd7u1nJvfvsk26fXRroerCjYEZ3K3Lkpucsj4FXACM3umoLAAa5g4s2",
  "key16": "4iRQC8L6Xy1FevRm86qzwegB6fmVH6pRD5xdQ5k6VKHwAEmtxBgJmyLNWWiGY6o186NdBJagCeZr1wWGYpYBa24f",
  "key17": "5Ggg3hA9Wt9J8GW9UTVzBVokSaERD7BG56HzwwEgyo48d2K9N9tsbCxe7262LHQeMhwtUZfioe38YBrRJ8LSGyqj",
  "key18": "5GMM1cSGw4qsCU2fmtMq4wYEYBBBifvQoPGk6jKFTy6qHaLZyGudue2a1R7fbxuddZt9Yhf9PyXwQu18UU6TdoMu",
  "key19": "5pQd7CvUqAob8pXRwkE4rM47byMezwrATQkCrX27E6qQkdTvuPSGNqxqBFM3nsB2cCMDsjwhuAT2WyFabGcyT9kX",
  "key20": "5NmdMF9A1KgHiLWMDPqkvMQTLhs9NwwSxrjH7oM9LqeJxEUKb2duzuTUTfso6trgdkUS9ibyAcf9AGvPez3SyxjA",
  "key21": "4AaUJ6bKBe9D8ejf8JfQQtBCHipph7KJr3yFr4Bd1MoBjU1GMFuw9LtZjT9R5CrJ16UEkiRwRsayuEAr8MKFJ6HY",
  "key22": "4tk8h46myHaLKr2wMsZVqujFBYMW1dFijMcrU2FkUXYxAKgqSyffA3kikg8tjjyPYFBK1dsNSJPXk2s87JDV6hUE",
  "key23": "x5FL7494powE6cR8XXrfdF6npqd9mnoKSPNG9b5dbpQX9ie7iAsSVURQVxYvq6TidMr28HodJCprjpZvk25GeYu",
  "key24": "25UZWPhLWC7ese3Zjo1NvAXYRFUfvrGgoicC8bYxmqfAHKeMVSgFPWcNWDSHte2zLfv944sRLQnkqnGQ5iNUbjcn",
  "key25": "648LfeRCKbfsQ7ovMxENgEBFRM7Wo5Ror5bPTUS4zvu1gars8YGWVgwPtMNyjiohQbYKmDq36sNZsna6ihyXivGe",
  "key26": "3SPp3uQ3WhE5TYsgbfo3FVZ2CjUDNFP68Lzi6pm7NLb8Km2pu5EZB88EWFd3LbLfkk1KAioH49Bn3d3F6LfZSojr",
  "key27": "5Broh8G25btTJWWBLUL4cLnHqZtKbe3Qx4HjZ72B1BhdJHn7uKYSNYvzVEDWqCF7Hrtco76vh1DkQ8GNGGTRhd6C",
  "key28": "36fFn8VAF32TgHVSWsJc2ktqEggdcnqFeW4hp1mqntvfscC4dqDJxt71qGeFjZNqvxtMf3AUASGtB19uLW2bQh2C",
  "key29": "cb8KFa3fibwtdZEcTiUkGi1kpBtrQJawgb7kYLVTvyiegH9iteTV6zVtXVG6axT1tWxNaQ8xHGAgnh6FMuM3kBq"
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
