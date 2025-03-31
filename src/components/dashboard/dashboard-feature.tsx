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
    "3T6r9PP1PrGzezucKPk1utbSwcCZPZ2yGSrB9szWPaUR5JVYxYqqUThzauAvQ14G9tVpd3TW6mtjj2t5J9z7tpmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6GGyEJAb8r1GwUcGRsZLcvrM1ZkwUeDyAy6horLwZcK8K28MzZcYNi6FW9raZ7xaHKpzXLhaCPfW3DFnGQf7uc",
  "key1": "4Nhm3P1NkJAnXsFoLnLRK4t1FPKj38KeGRVLXJBrjbmuH6MMGeFsgtAyPSnvLYMSLoXypnuitD5PhD7cBtXc4K3G",
  "key2": "WFMxZMXrFPCqCiZt7bBSSfpxULHUErgEVb8QArm7igDPDuznafdgnJ8pEvqe6M3fkE6ufLmRWWmyPJRVUbNXyrS",
  "key3": "61JUeHaSC2nVhYhYc28oKZNcSfn9fdJrxzQm5swaK8dEgjCCEhhsCt2qFbha3EGsZ42atFbGgk8gX2fnQXa2myDg",
  "key4": "3AmTL9RZrxfFBVvvmJMMuk3HwiL1fBv7mXTY9xaMQWXVJW1zKKyaJL2YhCuhSFA4cvxzsVhTzvp2SB4PbNmi4TEm",
  "key5": "2Hjarr9p2we7Gq1Ezio1J9WfKh4FpfgGJ1yz5hErpSZJwpzuQBGJjbcmVd8GyqMJPePrWMoWCUGucVhbKgb6xAhr",
  "key6": "32vRYV4RYrBddTqQ8EW1YG8QB2Z8g4JnjW4cgqLZaPKPVq1oR8JL5vaCnkm1Sj2xqyfGMRYTzWWzKv9w6tCtwez6",
  "key7": "4enq2qW1sZHHT8xHFUtifwSXFWoUDd9D2T8ymdMqR12r13LwNFwWVscPFEfGUEKpfcoNpK3n9WHLzQpdzxq1Sxzt",
  "key8": "4AFJsq1kzYAALGJGzA5VbfZgmy8Z1Fp3zaXLBbkSAw7B8YvwJ6iVmvKNjXkXENCkxzQafGAPeTvCYeW5uUfwnhgH",
  "key9": "4rD5h4Hw7CygZziZ4uKeZ67Jng91X9x8cV9ihx89CLCt6HQFrQBauhsWtPsvcgPdLUSA94yMF1xGqbNvXFur46cc",
  "key10": "3zx6jfuDv57gGADVvBcHvpt2XL278GwVHRyQ7ykkjbKsfkeFAHShhQ6JEpeRomB8ABEHRVREjt56UdUD7uSioDae",
  "key11": "NUazyLm1s2Y1WSsbp5Y17wMoa4dQojxTd4bLnTDdNoZ98VNntjiUr9C2a58WZSPWs7emMjfh66uY1Km6Jz76AH8",
  "key12": "55sW7duTeQ6EMk5UrmccUJN4QJnRKzuZq89hBiBKRw5SyGP421zzx7nMFh8xmpRx6w4NdFNvfyWRqj2UP6AwL2Go",
  "key13": "5eaRXVHbTLb1WgPjoWGSwv1EHKzEsbiz3FhuHd9YakV1qFVTneXGt5wpr4bXveRo58TyMSmJSpS4o68JxbrLedXG",
  "key14": "4T4U7hgxj8yv5YYznxY9S2TZvYxZ6Pdndyj3vi5NDa4nETGTaSwSfXsKCLHJHLDpMhvJmtnJMaPT6x3jBqeShrvo",
  "key15": "3DCEJVAGHmhv8Ksz78U5seemesDTo2Pe2NKvFv9gycgooGg4papQdADNBr8gEkX6hepRAzyKZbbxbg6eiX9PE82E",
  "key16": "3jXrojJc3jtS3MfJ7uQUTeRTVCuaeUvUR3ya8WjrhQsJXwjvUdjiUW8oter3MYKh9Kt7kL8EAjRpyswaUGHMsShg",
  "key17": "4qbn244C5yudMqS8iyC1Pw3vLV66aM6rwef6yAUMKUhvHbjRXQS68HL4ashbME2oYSF23q14tHzWgYF2ZvuxrxU8",
  "key18": "pf1Kb5xjjC5dvY1mSZvntWnoFJgePL3ZTT3sLRKeYnoYLkhj5fkcdJ1es1mKEpx48biJvbVbHbUqfWf1pGmSiuW",
  "key19": "3yc1dQiXVqQZTCWTeu47kJppDCRgREn9kRFyQH9MM3NyrYQHarcjHzXsjsEWXUtY6NZ7hYkGf4en9ZDhRPajt5rC",
  "key20": "5koCE42b2kedYPeaZsRY56BR6DvNRwBwn7vkpbwo7s83bjyftzVZoC8vCBweiHVB2tJvGUUYaiBzq4pRxY9xKQUd",
  "key21": "3EfZ6myfC94Nt1nvP5jFwS6CGY3ae59Th7phdfADsm1cVkstAH4TTxfGnzvxnbnvBTinAJJxyaUuM6RonFmFHbvy",
  "key22": "2KGn6PhzHXsCwgBZ7btbcWGwVrjBzeUantVegYVMbCEL1dbwahtgGARhNLDqv8mGBkdchrfbJ2KJn42tKXMFshEi",
  "key23": "5HHgujbfCkKx6ngeVo9MBQ2gEe5rpmtxG8mEeB1ccbyLHktgjH3FbqUPEExM5E5nr7Bj5Jz4EbjbGMv1bMbEw2xx",
  "key24": "jMZmTsrfbDtKzFxQi5AbqGCFgdHYG6NGaqb1pYteGhBPhXGtKzoZxp4xSjb6gzArhKd8kXHpEXkWo96soUCzJAN",
  "key25": "8A2Lzo7nYspNabQVddHWFu3e2CcdZ4niKpckVnProKTupPEr9TrG5WsrZzk4Ec9s24ZEHXdiPoXmgqyQ72f9zts",
  "key26": "ED9DMv17wWGjTbzfUg9mDx6z1MGzbm3KtvgRrapgS2Wg5U79wYw8kEEVEBhAhcgc6nd4DgurCyhFPrsoDSSL72W",
  "key27": "5t5WAVjLMu56NSjwLpSdUTPLvj2xzcbFSy9chcrPiMEH42RGA1jNt5GjXuAu8Ac3TaCgbfzcfqwc5vc7jUax2SMt",
  "key28": "DMnYKqZTKpZHBJ8MDVborctAs7ecAoueC79biDrVwp74QVdp8EZ2K4dXSpu4JohZ2Adt95iySD2C69WvgwfY3wH",
  "key29": "3exr4GsMr5awn3bEA7HmW4hgZnx4Hf5FMGuvgrmVu6PFmLtE34m7v1zvrBS4UKGcJA3Asdk7LRY1WzFxjeZpGg15",
  "key30": "cD6k5yGGJNNJwxHEZQKFpmsqeQc9qNy6T7fXFyUJeQq24ChoE198jMp18A8mVoYyhRp4FMkvNggFTGLcouXs7Wk",
  "key31": "3xBPtMmKchWdiJXcXc33hdk5QBo7oXSGucUXkcDczqdKY1q6kbP99CDX7gZmBj9AWXKru43ifG8yvvM6fVEPEgjC"
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
