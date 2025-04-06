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
    "4sbH6JxRCqW4rhhbK5xQRLYAPoHCAbeHtAm7iKcpZfwvSqrtiq1sFWnbbF3JTo69E5tBAL4Pj1ePdV9x5UWnvnCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxV1ttDopE1phwFFawbJ1gKTTo4M1aXD9HBcHLbpvEaZdSh6iTyfY9omngvg7XxfD3DP8hEyDH6LxfuXf8heFCD",
  "key1": "2GRGwL6h6x4rM1RTQY7DypyigXfBnvHkE6EdChKgEHHTbPumq7LYt1WmjHgbWk5X32vUKRHHXwM1uu6Z3R7juN6f",
  "key2": "5mJCqnuMMq5kUepFa5tPHrQ1onyqzqFTMJKBvXwTqNbADiVzSwXZgfr84pAXLM4acpfQNriHAqYTV4Cve3P4dgny",
  "key3": "4LtxKkPcziKhQmtLXo2rCbaYgNDzx1iMXL2neWBwde449oZdAhNd29iGQSWhvzjk2wbsV7KeYdCuMCj8DhBUApyE",
  "key4": "z6n6dk8JhgmJN1BjGtYuSJ7YtovCNYrqxkkcckw6B5qkge2Q1byphoSP5z8JmzuQGLpcqa2EzdpfeRXMRiex1aY",
  "key5": "59brNdUvvmPnSN6hZyWDTigWFbxd1qF85WrNosRzndvDPesWjvzQsTm6QbbsuUen4gJswUjh9E4g5YEntGA9SMze",
  "key6": "67LHWr6Uf9S4caQM9bJxh3ppb3oE2Xdq9B2HGEx4skN28FSbHJtLrzLJddW2nwkwLJpX5MhCSVCDcR59wLAhMxb",
  "key7": "Rb7KuBu3u7GFyd9pQwWosyxJpQJACZq8GietAqAxb5aCwFtXVbcdnQm5E5kkA9ZuU7roxHYin3g1b4Z7onGDDda",
  "key8": "cayPy7M81nMPfXTiDZF3JYUrnqJmtyKQ9ZqBTXfqn4NMLvk5EG2vFgyHQJwSS3Y8Fx1mfsf1T9fmPdnTWfVsydQ",
  "key9": "2eYJWz1fx8UhVxwp34W44R1FavwHFPr1V4ahAadU4smcNpMYvHq8y9dPEZ6FFy7zCwvJm3F1rmzgNsYcgrq2Sa9U",
  "key10": "5Uqyx2uWXCMqdgeSmiJqcAzgUjF4Cum7Tf7VmtNZCxNset8727eC1cC4zkaxZgzw8SSEwE3Vub8qbuN8ccA9rUNL",
  "key11": "4ap5KTKz7Da14phbTMYv3WE4E4tirEwoYwvwguSZq4eqykmQe4PGR3kkJ8GC3UJZLMwayg9henjB7rhceiCcJVeW",
  "key12": "2ThE1qf3NZ61hJ9NrmPEtzTcMxa5AGKrcDDsnHRy9h3dgdPuzDWUBcRkuqosXQQe2ytefEdP4gV1ELp6HiSHVS4D",
  "key13": "5zQwWgPZznQCbu8PrP7GXPgshE36mRh9oKNUCvoe4miC4xxcSwcrKZ8JshsqMDNYjAyNjg6cy4wW21i1cjhj72hD",
  "key14": "63Rjfg6GFWTg2LuUuTmNjh63PM3TTbVVxCpXSVZ1V3ck6yUUdCG35RccqUdtfdugjVomrnyuiuA7U23BJZbY1t1G",
  "key15": "32T2Tuo72ZRqM4tTdzz5kNAk3kqBdeyXsmr4rxmtJnQ1qY7cEb23aN2oUKJX1g7EcUiAwfDgRh2TSbHNTQQouQtz",
  "key16": "4dxauDSmnT8gojHpiUeQcZcETbPYPiJ5mVYVn9yyoDYM66XrkrP3YdsBXLs1ZUk7nFN7ULgjcmYicC4jrFoFZ79W",
  "key17": "4Mj2XSW7tT9MKBAyZyU8sWKcKExkB4osw2uLGXU9BAQMbFc9M39qeZmcESeXoF9PBkJ5NafEwSE5DeF62fVx7hgw",
  "key18": "3aXojm8rGkat43BmEMaetAhv1XTFy1L7JgjmkD4BxcjQfciStJad9WuxhCgWZNj8ijUjkPEV36Vmosmg2HFFGwLD",
  "key19": "3jVYgWeFNyz3Dhg8sPZoFUk58JvNTm2HC9vevJ2ScrmRN3HzjsNMTBzZtQJK2QpVfHG7PCjD57GK6AUXwNMjkUVB",
  "key20": "24rsYkqravu9CvRa15WU8YqHhe4L2xKXZ1d6HGNmjC1ebH2q15VNEZ3gCje8v7SsWm6tPtRQeBNNhz6fKgtkW9vC",
  "key21": "5SPBnGMSM5zVtvXx5AYYydh4azSifZgHhYjqEghLRvh9xo6z2pkZmhUX6pK1o5rz4QR8ejxqbxybA9H4bWC5JRs7",
  "key22": "2y2Vi8JEVsBJSNYD7VnZqmKGxBy82iEhreAdyTUYPzfaon6wMvLURR3XbfBUMrxRFGGYmsNnGPbjuX7gBXjLi1jE",
  "key23": "4WWdF93EvCbLZdjmZKxGwum4qWPnF31k6sG7tv23wS67zDBLzdKAHM8uNvyMgWAmGyC2QqDBgKhfgEqPka476gPm",
  "key24": "38dfE9bQD4Dch4jUnYR133ywe9CpUu6V2MwMwGiBrUz3qGiMn9fycSe7W5ZczBJrjBk7v1RWpKNpnVvKEgETE3wK",
  "key25": "3Ub1FnS69BWNybesusP96VVwvGoHVRipzQ8kZGU7fRbNZAjc1tvf9Xs47D3g4YaucVnrpEGCB8kunfRjtzHxyxdP",
  "key26": "5oPhPzjxdbBZrgEaN72hQECZHzvzf4pSSj5rnJf6eFGhC4p9sM31UHkTZRV1uH1HqpLcYfzZcent8pG6unh7YtVJ",
  "key27": "3XqTMPcMvuiSCyqhNnNnqp7d5k5xZCf1ZWgBRPQaTPwRxg7Z2rCZeoXVhsmFGPJinRhV8zEcdsAHXUzmwF8kMXQU",
  "key28": "Hyiw2VFG23te8Usw2pYpZUWawCFTX5sCGKRfzmb76kgs7Xy9WkUu4VAmJxpqTyp99CXi4zNyxLoevLBEBfZkT9A",
  "key29": "5813DxihpbqxpGT7Fbyk1UTubCFq8wYY2Erns5tFASYvwfHcF41622ne5xrRKidG8tKZFE5Lcrike8mboBigdx6t",
  "key30": "4hDYQAX1kmZmwei121Vp4gvr2KrSFqFxbEYEoEpg9brTPjBCQHDrB1F4d1gXRedLuCvacsKyxcvyGBHjbP4r9dzV",
  "key31": "5RCbAjWgwXh8LUA5gKGzJgauvLWvbfoNcNPvy3mLt3nycVyEXMPSkuzv9hdSj7wHGBPQng359QBVGtDQ8H7S8cZd",
  "key32": "5d6dTkCZxTon3J6bUPjk4HkcrQuPoXnvaehidBVjUoHWkowUZLBEnbkwM7dUh13B4TXJm76MRBHanGnq4CFesvtJ"
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
