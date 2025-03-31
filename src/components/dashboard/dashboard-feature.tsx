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
    "4rzFQv6xJg44rbvmdmPqgz3Q1LFvpzE8N4Bh7uTigCM4YpzD21hJtKdwsnGqtWQio7pZvgyJtQ6WyU7a1paCJNHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wp96t6Wc7DiKp2vpufzU77kswmfGqnwoZGDBAFTSzKvp9LjbqaV8WTUapihpC4gDYHvAQsn3qCAj9bpkajSCDtU",
  "key1": "25sMhVr6TmXpE366V6pBJxAyN5tBHUfrRnxFuEYThvToLJg9ebkYB5sAZLHMRPvF7pZ6LLFwm4XxcUQCWNqjZoa4",
  "key2": "sTttMARmzjR5uJPFsEtWf4vdGYufNcqaFpEredfo6puXt8oskwQ5Z8GXc4ms8HB6jMJPA4ARKCJrZGXYf5sZh5d",
  "key3": "3R88GQ6GskvcttbZKXsBYUyjnY7YYboRkytYPYzbLgPX8kJ5YLveT2NWTcuJDiwbR36kFb5tgXZoSGPGi6HQ4r9j",
  "key4": "5uGF6EcXQ83DBHCKns7F51nyDG3o4adGKWpU5xpbzvzq33MXACyCEcTMo3rydwe7MjLrT59FU39bbuQm7Ksp2uAm",
  "key5": "4B1xS1TxLyniEweP5JJUVhNQrmAdSJEp62Fguqot6bpozBP6D2yUzveVpz4PSreanX8Z2AF41Nfzbus76Fcg5kTQ",
  "key6": "3iUsu3CeaM2nZjn4TsM7usEPGeB3WvA8wCJn41GVUGXwRZbDMV4hXQJmaYDSu72nCdKmhhgJTfZVHmJLBMr4mQVP",
  "key7": "57WHkjRn2kowT5PxnBj8stygoKxTtozMNogjgAd2Mmziv84kzhjmjFceKcMi2kJj7SRnPeYxNzow8eYxeq1DYUfV",
  "key8": "3LeEYWt6DBJDhLKq1v3YJ6JyiqpfCJnqqifjzaVsuLBvsaGeuw2ZkXQtLw4VU2kdpJ7PzqGUGzNGGhDgzpcSGBk6",
  "key9": "3okba1yDpoKrBmGPw6ygihgy8berVHoeV8vosoqBQf9Ekkp6fNAMMdMwfTtKZfH3F31qiF6jiHb7ry1VQZySCvLr",
  "key10": "4wFU8Q54jYYjJn77CTobx379UqAr8AJPjjE5RkEnSUU7S7nwXMmxXcjNpWGvLuUy1hddFgDBJdPfBYQJhMc3iiBz",
  "key11": "2WwrftyCNUTLZTqUxxyir1rZG2b2QgZKKM1Z1821fF2nfhmdnMYH4N7vw9R2i3WHH5HXw4ZEXYJC9ggzJi8ASJaj",
  "key12": "2ZpbwrWipyf5QBa52yhye73nUtMxPHHodot6zKrW8PYj7aE7yCLnp746o1nfVxr7BUEh9xRqEqHii4HXAN5axUzU",
  "key13": "5qEM3Hsa5Nh1HcBQA7HFNBozhBZ4LJWJEhecpxvS2cYc1sCbFHCidfxZfpY6HU66eQJC2U7fGHpQDv6usEi2W6Xi",
  "key14": "hULjxfgsgs8u1hmM8P3Pb7veed2t6UMS5srFPSs3DHMdBbn5oEN8QuDzqbHpUTqJfazwMEDmdMiMWxs5CfykHQg",
  "key15": "3Ugcd7SecFJw3vt8d5YddYm8gaiqb653LTdhsp31U9Xc6AiqthX8Yq4GQAG9frvyWcb1YoabwstCa3gGuVdFZcN8",
  "key16": "GjJmT6cRsjTtVvUKZEsadqtQWv8WuuKbB2xyVJAZCPPrE5BVnWV8kAQufofrhgvhbCyxXU9WZe78UCSZuE9ZfVq",
  "key17": "54YVKfycwAYwvgjCnJ4xv3DWkk9JEMnGXTr9U73LCLiATX5BMZX6uPiSUMYCy3DrU4WMB2UXiPnj7FvfrWXqpE8y",
  "key18": "5d8SXB9aF9EXmcEnx2w36JD2Awfw2GoHzDGJwhsTLPWZp6rxE7LNhktb8Sntp9QG2f5JcZzsXwgCMxWy828VGjpj",
  "key19": "2WgQmqnNWdHcGk1RdWYh1sijNrnodjutFKs7F3Zc71Gkh4jataCi9C7qzVga1yEKsNMWpgnrXHot3tjZb2EgAEz3",
  "key20": "65BtkuivC5tpNcYpwNBPWTtryEsNnHCKq8RtdJBmhUCS6AN5vrz9BSg6bNV3aZY82t8Z9XcAqTxQxwoPQjXxwNrs",
  "key21": "2gusr1dAHDDHyEabDyE3j3fvJMbq3oLxoUbV8EcUw1dQmBwb5sH6FYUWd7iJN8h43LNESje8HYkEZ93TFBAJJQBc",
  "key22": "5TBkyjEU8RfMNn5SdLv4TXzobkhECGdW2H4i8Fd3rrV5bGn8V59zoo2cLCoZMhxZ9Ls6uWHhMNj5K2RVB3rSnrE9",
  "key23": "NvNdM8PshpMzdwXJAB7u1Co31H5sSkU3c8FbMmBrjhXizQWQFtp6KJtmpj9AedCsj9CXo9xe6BYPsBjohF4VqVF",
  "key24": "4gASNbyr7y5eXMNKZrM56VBqNYFwQpmmMgAQV7ZkG4bSNVbwvfGPTJQA52QQC1MXGtuhXgG8YrFAJnPaSbSvpGru",
  "key25": "2YWjzNviCAb5XCfqDePS2gqzme36ShHsoRHSGdPqMo1TSzh7xn5THKyUCaLoMHP1oLgQPxPWHJ1XxtonR64hYGcw",
  "key26": "2Yzsk7qSu1gs3sXXZMFR1pPZY3jitWETQ2mQt9oPiRZjr8z6VcSrLHzuXVEGATRz1xHgvMjWstTAdRE5MmFXNNMx",
  "key27": "2p224HzRBridJGZG8CRABXX6f3cFMahVBYQyrTu5pzbas9jMukzQ3Z1XSY6ApqVrec4AJHH1B8eiYHYnLEt5dsch",
  "key28": "3UeVKWRL6Rcpb83jZWnBKTrWk6uxy7AA4CYxe2XafZ1bKwuBskKXbyrMtJZRLYL4D38yR1Be5T3EUn1h1Pq7FBeF",
  "key29": "5K8Da4C7PowDPipzfDgThLLA5i4SoqcbWRtTThfUuHkZ9mEL77r4oudWx9i6iixHzBSvRRBXZXbHWLt7cH1u9tiy",
  "key30": "3844vds8RpGAv1nD9xFuRzW8Sqv2FBigypJCNQnzPckcpok4zKmKo5yCCnYwu9bKZvBkLg8Ta9cMagQP2HcPyCwr",
  "key31": "3WPkFKP5ij3nwiDwfqwTZheS5trDMivGqED3gCLnZKXwVC9AWZsJUQt5zoHoHhJqTxxswbouy9Z9wGVMZNqqHoiq",
  "key32": "4kc8HPfLURPtjusTx1FPnnx5YtZbmYWaPBAtof8HJg4AdJh9nL77zi4Wa6nx2iHqsixZTDi8YYQmgsCSSbpEk1gT",
  "key33": "5EfUKZc93tNb1eDTHo4NEsk2inp638Rd1ZCgNvC2JGoM9VMwA8W9LwukSwaLCht1ywFS4nPDNqTPhz3PvJCPvmBg",
  "key34": "3zNh3MY1KfDum59Jsf3o4sNYak9NUyT8Mt8NxXcYGxkkT9wyTaDjZNU1tjhNHCLJTm6pwVydHWgFT69VJmT5dZ7d",
  "key35": "2XDjshS1JdRyP5MEg2pgKPgvFpFEkEVW6SXXbSMRej2GcQ7FxWpudWscT9cEgs9xE8yUtY5Q8wjcY25AS4ZhfsHm"
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
