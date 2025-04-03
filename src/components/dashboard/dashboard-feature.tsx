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
    "4ySdma9CHgMxDwYQJ5T7RGJabsVzhSjnvq9cxdcwrB57qDBbYsPLkVSjc8Z7nkKgGGijxDBi9S4RYHPWhvbzBiYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oAmBfw682PAsQ7qh4P2zuSZuWP52WGzmjr35SHuhsEVhPSZ6sQW7JB4y1Sknzp8EVJJafUXYw6qPS5tBHStRRfc",
  "key1": "4mWMLSooSga1MqzzKrUK5T6PSgvzGfsJ4PxuNP8P3z6UtaUrWLuWsLRAd61hxdxmasKRZPgE8wMJTBs3wYXcSVuZ",
  "key2": "KURzUzy9rtdDn4SCFbLSF3JBwzLkoa84HjczwxviVcgB3vNib6LW6xJa4NuB3uo8eED2mEKzTzoKzw2Bd4ja2ki",
  "key3": "2zq83Q5i7wtmfMBCpCcDiFVoiQg6f8S5m198uK1SgeRxkkSdBL5GvCB7ZoR8fcejiQPQVpEUXvgXxQd5gNViUc6X",
  "key4": "2HEBwTPJfN4h59C6BY7zSckDYSAtw2iQnQHLyXwKRuPmLRBDGvd1BEcXWtoLfbrA1gZ32GyCsfLztXZVbB7nZajp",
  "key5": "3ZXe85Hb9E4YCVas8NhQ1QhYagZWbEAztq3B4eEuetQJkPeGHTQaHvii84sR8BYbhNGPQ9VyxVa39oupVkfuz3iD",
  "key6": "63sF5fdbC7x2JNJ6egSTQj2rWiLVuHv3UreP6YhJnoZhYSD2JFav38HsT7mYWRoJ6YGcSUyAySnwe5m1WpsYByYW",
  "key7": "2zx7LBexsQKnDcTpqAgrxw5bUaJRcrusEqJeAd7F2FVaAh82S58q6bvqMFKyBvqwwttbRKVT7AJuF7q26WgBb9oG",
  "key8": "yatVVazZkYZYa9GdwJo2TEBrVLvjVZM7L16Kn4AcW5SUzqwzVN4WtrzLg6fZFXVbWgcjGz71z1zWNkp1xUpBkj3",
  "key9": "2bw6BwX4aMumJ9Rr1TxXGXZWcB46XgE31FLgm4WRHBfuN8GAQUgHd8KTS1t9XqLa4BSNNpEBYAKd1vEpa4MKgysH",
  "key10": "3pRYRMoAGsyC2CTAqJYmVPDnjiswszousrCiBHvWapu1AfKeKbtzMVEB7WdeCuP4UVqWp7u6YiV4eyf8yGvupXzt",
  "key11": "AUaWGmx3X5xfUDhD7o5xwksLeLfhuVJXf9dFK6xzyNM4omc2jjYkkoNQ9wtsrktjNtKEuC93Hp68a1AXjko8b3c",
  "key12": "3vhPyQWMjDADpmgRB8WNBwwaicmFmkyJujBP8TrYNJceA3GXL9nR2P8WSokkL9NeaJR9or2wnKnKv9GRfHbSimFX",
  "key13": "2yBzTondbFmPB2TbjgR3ij6iUo4ztyH75Fh2deVNTjmsyqDEhmgQN8RR1avC6RBn5MAMwX486LLkzSJZHLNytvFA",
  "key14": "2CPjtkssLz9LA88sr9uu8NeJaDo1cHAHPNeKXLTcqdtfgvUUgnTXMS3NGBkofxkE5tvr9qzJ1kK44jgrjRQCuMbm",
  "key15": "5UaAwevoFkhn65RtCC7eQwDSrGgoCKzQSj8NACVSHeUhTVGRyLJXqjpWwrirAXs5k9GXga5j5TB8PitBJ4YWJFPk",
  "key16": "32bQ8QkhfbHBeKFZMCrrtLzV3sQxSJvKk83UeSJmVriJMUZ55mdXk6SaDjL1WntCTX5Fv6V3d74kxB9JScCYfAX5",
  "key17": "3xEG6NEHejLsqPFemhYe6fmaSq83kUXfs34W1uupBNAs34UWXYuDhkfCp4xo888yX1SJZj3mLPALpNhWtF3y1fPD",
  "key18": "5hw3YrtN4SWyt1BfRr1JJo3H3xuUC5hLRhWod3VF4XC4zL1hGki1kt7rUkEm6LyQKFpZDuCAnzs622uts76iDRr7",
  "key19": "3iuCANMBNfcxgp2s3BXm4wPoQpDJXTNX58ZNeow6VFTva1qvH15rnbqpZVUso4pGp6FyPBz5A5QDSjWDXMBFZhZA",
  "key20": "5S6XzzXe5sDAehc3QKexEEdRictn7wpeToiep2XYPePYDrR7BgE9bNoqzRfhuQ7GqyxrapdDkxL3g7NP5h6Qpt6U",
  "key21": "WgWCMp5ELajNRYw65beeyRHWbeZ9EP3jAzE4LuZiKsU6ycLBd6da8jMHdzpaLKtHJ2cFyEkVZek1sUwGfSgZ6SH",
  "key22": "3h4RQ4BCSf2pkq6ZyVskFYBZ8vgn5Qavdjc4fnuQ2uXK53us9u4Sg2TKtL3gxAydXqEyn64bZGchXruXZaRjVumt",
  "key23": "5GMjya9xis95JqbYWgSxKMuFHLTSNonqowDQ6AqAkCQhmmUWrQmt8qKqD91CzqYtfyYshYcHhFcQFbXLiR1SfJ9Z",
  "key24": "3KvhxSnwrYnMfmRjyhc4tkRsy1ZBXzNULchxwuw8Ygm9oSJD74g24AQPoZ9VkQJpC3uCBkyp33Xw5Pfz3f1ugeB5",
  "key25": "YCk5kHcfiY2SLvBw7R24LS3a54JnPgzCpzDQno4bsCFF9PkqUYN1fTtPKV1SyrvwQEio6Tn5YB14NZim5kwgtwV",
  "key26": "4FbScCZQ7jZ4g292keXjTd7QDH2GauB7DyUDoVpibrzoDBEde6RYBA5zy1odR2ngVcqyY3ixJKQzaMxazTG4JufW",
  "key27": "3xkhFi2eroD36WC54BWHRZSm8XjJVYudjAXjCYTuWj3EYZEunQeNNwEV9v35U41j8K5ZW6svZk2WcxNH2Jfrw6Aa",
  "key28": "5f1uL9TMp3H2vCoc97JrWfzyaK6Jt5N9eP3LJf9tNCy2cbmVu3X2NZ7VjUAw5wZLWwMeN5RgNoqAqb1xEQfTxtrZ",
  "key29": "2K1N15rcEMpXN2NnGxTTM62PfzBcytNkkoC3eA6FgQHuuNvdBAK2ftk8SXpcW1iG32mKe6xfXpQAGMKxKGngVPxA",
  "key30": "2zZrEbhXfvuTKTgN8jHJXcJkQY1tCT2exG5PqFrb6TaGL3heSogkNzEWq3MxrTw2dfhxm4NojMHHDn6t98zqyBZj"
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
