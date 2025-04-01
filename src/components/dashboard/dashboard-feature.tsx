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
    "2ti7PiBsyrrLV7EhbTyvsuuGp9zcKA3YYZMXzMBe26uHkyzfjK1wgER8HG4Pm5nJzA3KtW2wk7qQrT7bT5TJUx56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s27T5mJNEQuVWqWV82255cqvuDu9BLumFdqdH8JJEpGpTDL1NFCdYhES88EYwhieLsyJoy7gF9yRHtG1DVvHwLK",
  "key1": "Ds36nigtg61KojieuqkuAXwynxbX2pmkACEhfp97uqXJe8s991iVAco7PzU35heYqAT5KnqxJupFPR69pfomDku",
  "key2": "3n825s7xHChvNDBHHHu472oSm2hchepvHA27Y3JrRK7SCLKG4dZTQPQCb5DLrV7DnYmAJtvJj2yXz7NEdPQeHucP",
  "key3": "5yJCdJwSPq4SM4RHtC6F2wWWYw4WY4VUpSB9LtTx5t1u53vMkZYFGuuwrxCXJSMezNYrQXjsTmoGwMevPaGzVtxY",
  "key4": "P5R9oBKLBJ4cGVqJE7QYo9i87gKGSBQWYTEZRonQm6ent69rYhNMRJAzcnNJMcSM7vj88FxPu4jh7kRavPGTt3v",
  "key5": "4jEt2XdHfznmHZjhH4uti7ZMuusvpQEZHRDDB7xqAKBc6t59nzsbrrSDE3KhcptwEALjtNjfeQNHzRV2iCJRAhB3",
  "key6": "3ycjXzed4TFhDztJsTF1KjLYPnnEBVZ6s9QFgqLzT43g5jiUwG6K9QEooE84JLwAPUBFrs8mEhHyBpGorPAySQt6",
  "key7": "2ixmn7VwqY1KPUAdBrJGWS742ewn2PDcUVq6qb89HbSLPU6KYL6WLEgyjqnabnj2e9mDSUWNTRXLuuA2aeMcPu2e",
  "key8": "2hJ6hb73JpAEkfEYEknCZy4nRw1fXmXeKmodxEQL5TeW4WYmSEh45rTP5gG9GU8yt5frgdTCYqrSB2NYpwgmanMa",
  "key9": "2hbWpPCxfETfsk1YWdKkwWML95L4G5DJSvxQj2oDMezoUK25KLT87PedZ7P9NPWjTggWKe9oun6cZ7tcc9TG1KoR",
  "key10": "3TUunrbCYThYLr7C7T9cQX73G2yg8PMLnhB6EBBMZ9z7Ap722J5cEvghUchMLHQh8jTqNkWYuRUvkBCGAMQot6fM",
  "key11": "2xF58V1HZAgWdB97zXBhr7BL2vguSHSUYurbd8Z8PGXsxsD4H7fdwz74dnCNoYduJS2mnQvrA17XtHNstSCCCvDX",
  "key12": "3Ubua45HjRtE6VuYhA7yj6sznoTknYgLfSBJvDBXa6VnFGm8PaXhxjaqRZ7u5tkcDGCxChNc8bwfym2wt9ZFQuo5",
  "key13": "3vpHUy964eoLLSWJpTTBxgBX4PDFqpDEm7sZeaZPG6ZJeTjw3GPcmQ6qDTFAtrVSoUpxC6k7srbrQBTKj5TRfDKq",
  "key14": "5Huys9npDHwZX7BLky5bWC7cZqGKBZcmPhrkbgRUZp6c7t3zaP1oApVM2a8cJRAgu8a7qQGsRue2hctTpVdBvV22",
  "key15": "3snAznktAVFW7kYiXGXWUyZRPHtSkXYy3fBDUC1uXs3LHrSUJMCiNebym6uPxmrz9oE8VkQCkUZ2uZyJXr1zhMbr",
  "key16": "kBKrJp6SYGj5h1nK7PomSt7zo5ynqUFwnu38z5BYBYtPswj5S2M9gTBhYemHQWJxZSxKJacemCCFzszoGF3qpe2",
  "key17": "2c9QTfiC7pcyqyLqJBDkRCFbeCeNRae5Mxhv5eHUhckPkUiSua7r9K5Gc14tZo6NbhNfiLiGyqgHupdrMj6RCVQN",
  "key18": "27c9XftuBDWon6WrrfBJeFUDZLh8cCKEhNTt8hXWHu1WFNanmHxNamLRW7M8a7gfoCG7KYCi2oKfXoM9kSGckZGB",
  "key19": "4sHPH11iiaLZZZrjDv3mciBtms8No8zDaQuhqV9bNBUj2amhTcSs325dC7rJbdQdA2Et2KH7Ws2NhDxeJxhhYZkJ",
  "key20": "5UAze8vxe7gA8VPay22y1DZKgkeqBGRAsNTumJJx3dcxsSZXXhVUdE1TFMrTvpoeRT9GPijJSHGQju582p2iaqko",
  "key21": "5UmGxrDxckCGkeRGJuXNTszKGsHSLAYussj6Py3zffxM32yVVLUUcmp5Axpjons7FcoTbyXVpDtgwgP7q2SJW66o",
  "key22": "31FoPF9UfR6oxjV5errvJgXgPkPJZcvZeMa6Ji8XiGHEw1H98cF5C7deDwyatH3dBBT4EJpTCxjqwNeSikzXA3Lh",
  "key23": "3f99DYWBtcPqp7XkZjCwZPHgB2fFhWzW41bqxPPXyzUbshZQm2HZm9QD2Lhni4HgnsyxHakBqehPTa6dEmnmy7Fa",
  "key24": "23X76ur6GngZTp9eeW1nz2XnCZZ4ru1uUhKbcytcbGFCxg824Y1dvUB2aZbQUQBcSPokkz59Z1TLz36HfdDxtsYM",
  "key25": "2CtiN2SrYetSFHQZeFAU6suX6yK3XJbaQm5x8S35mdqgRWxV3t1t2Xs7sWpHFXuMeV5bSizDhkh46vrxWY8XFXwq",
  "key26": "4hwuTtLAv2YHB5dVZ6LhKKeKNdvV1xxUFbTWhLL9xNa2NW3qDY2yRMMFxYetZq8J3kGrG7rsy1tc2gQMECnkL3PG",
  "key27": "2H4xm4qTooQ8ACwP8kxzpJwHLrS5UeE13w3uHD8EtAJ8UqF2vWQX93zTejnPXxryGXdL9KVZdWwSC8DDkyjK9MaS",
  "key28": "5U3YzJuWBLSuWwps3P4rnA9Rt92VEnMAwvvYX24PL1zWjcxcHnesF9vxeZJtUwG7fgekiBJTrQAiBDAXrdPeKFMs",
  "key29": "3ASXs74EV6rxb5bxdv62gHdy4Y1UQg6aifgeHM5WLcWbQCq5mbE5FScwY9Fe7cdETcYfSTniAktTg54xUZiC7TD9",
  "key30": "5hxmWLtMiEecnxNg2AsW79nb4wTDTkqfAj1iNGBygnii6MaHSszJzBD7hY8uZr9WRe4FsEbrtTBi9UeeSZ1tcfgN",
  "key31": "Fbzujp8fE1UKW31UVCzgCnC4aCZx1iinBZyqsJsU6RJso2Db3opbcDd4ssqz366MPz1BiJ8svxC1cZaxpZ34yvk",
  "key32": "5Waincg4X2xpF6xXeYQAZYUZtDyfrRsDSsLP6bBmbbBwKBXihBx95oTcwY1Ej7zpm7vqXr7TFV2ZukdZoqZ8jigp",
  "key33": "2hNWcoZBjhGdLxrBXaBU9NKNJ7pmhgRPA5L54knZCqJDNGG49hrvdKbhMga7ox5HSoKhsMjrw22R1wdVcCycecTw"
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
