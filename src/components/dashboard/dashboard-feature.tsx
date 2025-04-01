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
    "5qDSBqMF4UTzPoMHSYkfhEP81FGz8qH8tqAcUyfLSjcgbVyM5MofEuDjByUg9zGNqpYUWnj494CfGmccf5RC8q71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaPXVNPaSoEZftzNzoUYYrMLJTYYZeLw3AQ6Kj17fWr4CiPziCbm74ErudDJ6fshHcRVpjiaQRbGnK5u7RSDfTZ",
  "key1": "3S765TFQg1J2RhUk4mDgf68kh4JYCZzCyy6A7WobeEAwMG7QhXxA6MVhQwSFmMcLQVPb46779KbpxwPVSxV5uLso",
  "key2": "5ABD1sAaN1pueo9UkRTYzWT1HGXsvLGb7tbrEuSiHvJ9FKWjnBHK7Bh22aJTD9iWG862V9X6Mb5EiiLQNmbM1KGb",
  "key3": "4J7rVUn7hNEDNgp9vVDR7K7buHGf6mrxT8R4zkWFuGqAqvUiNGCnTZM85Gc3UP1vCk6f1pJo15pk7aCHQcVc5c9s",
  "key4": "2mcdJj18Ahu1ddp98SgRnp6LT7FSH4KUaCp522xKEQK2x719DoqER7uddQw86ZDCJ3rwt4JYDzN68fM19bwxMUtW",
  "key5": "3wQ5pPa5NjCiSSus3r52mQVP97qu6dxc8a567UfXYmqSk927AQPsWKA1idiEDW8mxGtu6Fyuzx9YYMTAAfEX7FdF",
  "key6": "2kNXbPknPkjrsbiHfpsEy6x2rqS1rmLoEkF73FzBbYpEvrPtTp55oDqPXQ5dKfaKbD1AkUfUFFo7GqsrqGyjVqAQ",
  "key7": "3ARQkzG99mqfddXqFTXyjQxksX1QWQYxNEpvEbRdB9VNGwanvryL4b9JHZ8HXxXs4ERDX6jmWxsyLKk1gfyDhQ51",
  "key8": "3koCQ4q8StrQ8SxrfLb4ape6T6kJqBxFqRyy6qFSeTxRHqbypXa45MByQnnt3PE4T2kb25ULryBqNZ9Ha1f5AfCv",
  "key9": "4PabFskvXr5tgKDxtnbDmQCfVceNZdwwCgGZg1Pp5nJtJ881JUrCWoQYf3z614NSqqZfMXegmUsu5DyJxG2kAqyq",
  "key10": "4gDpbFeDwRciENnUj6JYAeeFDwSCJWe88yCWhBHwRSKjdjrjFU5FZ8pwc3bVvF3Ejk33MqNzC4YeqzjitinXqdVL",
  "key11": "3pnoh3JbdUk49GcKFS1Hx9dJY1kDbPKtZNZ8zkErL3PUFNa45PJhKTnymt6f76msWthRm52Axewb2RF85tQzttPA",
  "key12": "2EHiZ8HpEsZLYhszVoPmYGYtS6GdGBVNmHhwJApahUQs5L1cZpQVAcwdBCrX1jTwLYS78ENz4hTy13zzKyuYxf8J",
  "key13": "5WkRYvK1dWrNvDYipqqNpxH5n6jYbQvxceba94ZooNW8nuhgMJjGCouxBYbKMDBSEvjfvkU8vHZnUpTFEBmXjPQE",
  "key14": "2uRAMioaMP3C4HpSLF6fHu7ivYs1LDmiFvf6Lz4c62BJJtFYn1YRALYMLgfFEh8rXpNDRfkRP2z7vVvpQkHnga7s",
  "key15": "GfedTU7Ua5YhrgeBn2c3pNxgy2yeeiXwdq7vH3eKpTpfrJLTXjkDjTapanzfS1mz4ZHKVa53xh5WwvQjeCoZA8G",
  "key16": "7TmAfaf7wHrbHS7HYyNBeo43coikEtKErbzhBGPKt4q5DiMNZAfCtHzwHML8vyQwdpvtfYFuB6pZ4hqQjcxuimy",
  "key17": "3xNZn7ZEq2LUMSmTPZ5mttyds2R6ZBdME1EHp762J59A8ypjxQjNVrRH1VV6vBWYcjfy4qPuYwzSF9bNYSw29gFR",
  "key18": "47Q4eVafqN1fgeE9QGc8D1jHAsn6SnntQUidTyLCXLHHSNkpcUAJrWNzPQqbj2Bo5rVhazjNtgjqhh2GKD8ra9EZ",
  "key19": "58q6H9oB5NxeYq1UowGVwAV1v5EMkdA7epUF1fjWiVxaesdL4uMFVLYUtuFpjkz1NBFUJzKK4axLUdRA15Mi9itg",
  "key20": "5nkykNzoT7qkNjYYTU4x1ERd9HgZcyTMWoqALHW2xiwch9bHcu1WTo7LHztHoWKFpFneoU3CN8a6i7ne3bjprmpA",
  "key21": "WX6VsPpFX1Q2R1ru9XUZ8zJEsUmELiVd5f8RYGUQRLEjtNpkVzigmFZW4XN4igj7yE6gYySYGkqWu7WoERfyTSN",
  "key22": "jKHzMP7mXj9gDQbKxs2Qo7N4r7raA67MAKLtHv5WG1o8JSw2dDXu9UbiW1Bo1FtNXgAwXhKTCUrB21b6H1n1m67",
  "key23": "aKa1uHHAjcxP7AwrjsKgLs7ARCdcBXXB1ZEnhBQRKyBqFduQ4shMkQc9Syc65EQCBSADx3EpGruZ6rb5hMvwSJF",
  "key24": "4qUKP8wztmBKrzUBRr5Twh348SLYRxxkmw77V7aLHTr1zw6ZNGqJXwZ6ULRjvNyrNrUMSvnyTwark79eh9arH4nj",
  "key25": "2WdwnK1vSF5TWR1qgKoS3U6pn175hcaju5rxVxRjedXPbcEGLmdyMHKf4D8CwkychTLAq7m9MyUJMoiVcW8WVnk",
  "key26": "3KsCN7mwiEbhyxmq23wYSACZNK2gSgdyv4BymhpvtahQNv12FTqh1pytPsfM98oSmmbhg2Yqr4a5NmRPnn6TEMhV",
  "key27": "4bZCBe1Hk4JGgvPDj5p9MvLNmpCLZLYa24FuhybWHmbg1dJiteNRENtksCduYGaka6rkhmf4dJ1Qo399bY738VAV",
  "key28": "43JRUCQHvtdAHziE1SmhtFbdhSYYnyGrgD8r2UVM2JgFzXzGH2zxy1qgX8mPSzkyH1U2HRdDCoStdtq3tN4hitmi",
  "key29": "ovniLV43YFYFnTTwb6iW4EF7pDNAuTAV77eyPZzd5fThqajY3kkYmJiLvHYFXFySwy72WGVKL9mefN3kqvW8xyh",
  "key30": "2JG85LV3wzx6JSVdbazBTBFd2SRpx9r888p7tXkTFjLcuoFDxzoJ31XBF3UJhzAv24E8eYLB8cUYi8zzL7K5H6k5"
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
