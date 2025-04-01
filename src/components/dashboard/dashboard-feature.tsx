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
    "5gbPn2kkumTadGLWbG8tjg9o93u5NhYWbJsyniyRDLhm4d48YV7E4bMRSPRYvaP3WXvQPTE1icSDaHWF8Rq6N6vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W97LTtqqYVqXirDWUpSb5tnqSnDUemeuJVuYEJG7EqMbKmsjA9Xq1XMeVtNVrKeKsc9ysVXUgMmNcT8Ktxco9v6",
  "key1": "63a7SJTscTWyB6bwwaXoaupNcmXbi7rg7BKKMR3zUvppncaKMtewbpH3kbTUJ95KPgyzFGHSD42vNkW6w9fvkPuY",
  "key2": "2BUVBGhJFPbM4WxUXnwK3W2iGCH5iNn83uvjMVh3j3UX4J41TTk2v5zTjxx7gLomZEit3grKjE3VWzcD3E6DSNjF",
  "key3": "67GFopjJjhzvb3nTAWnYLgaJUuRBW4ntw4mMZSRScgxHYuiKMPuWRip2GwDRRnkg3z169ZBp4CTN8B3HGVzR5Hcm",
  "key4": "RHWLn2bTmGTkkveDPcSxeNsxjg2x4AByy6q5K6LZvkjPVSEqUUqcfnwf5jjCpWhZXLgn7uSFdB6XVf4Ui9Y3Sct",
  "key5": "4v5yJ5sw9xhJT5m1ynjoHZ4H6kZnJHZacApoCUy44N3BiPn74X1oyLeZbpKEwibZ9cyN7wCUkiJJ2iA1eMvKg33M",
  "key6": "4QNNFH97rP1aD1kjV6jeJfsaqzAj93USR6bV1mx9BkFUggXRJQDsx3Mvz8ZsbWhCe8kmHqm7GnWVPDUMm6d4FE6y",
  "key7": "4qxXC2fSac84rHNZLdMv3bDizPNrgfCjG8LSXBpqEeBzr3bgrMatW2vXK3EZLe2jHx1YqVYvKvZMm7rbgETJXfFp",
  "key8": "3e2HQ4u2Esbg4y6c5BWLQwZyLRG6GGgk75d9gzh226itGtkUcGGP4UjwfUe65CBAke3BtdYca5eodqKKt5UANJip",
  "key9": "47tUmgEGPtG69YEGRK6e6euTHz6taY9Bxj4u1D3ehXamucajjqTD7V6ttW2ZUJtXMywSw9Ark7CLrwD1D9viCbah",
  "key10": "nKAHw1kcSQbYrP4fX318FAQyLDcbQAKqSYC6pHMgo52q8E12aBEHw4cJizq88jzdpa59Z2qmG2XCS8MLhGSuxRS",
  "key11": "3LeATFC4GMWBqLUCHhcLsniVefzn7H5qprdMeB5BNYuwpVAaFi75WFiQx2cX7x5ebi3zAjPHy9EeLgrsD67bs5mJ",
  "key12": "3Pfnsi6373ToxZDWz5e1VTpyVzVLgpYNWrBq9m3raN3YmrPnxKgsfXrk3nVPQHmrCLdo5ni4jgURrDgrrKU3vxiv",
  "key13": "3Ed3cwRV4zC1CFqHppbXJrhQnQmcSS4myeaWx1JyXRiHWUNSg4UbFdyJXvLTg7WkTcuN4dWVbi9sZmzAfghdcJLw",
  "key14": "5jzX77YKCZw9WUXsXXSxaR6nfLdwNoB1pfNj9ujtBKFV7cR1tiRbhsj8hrGEUbQBeXwxc4qgGJpMLqsR2ohWs9kK",
  "key15": "2hAUtFdf6F9r2m8s6EF6hnxrAk9Ng8cFrwgqkcCboRF1vPQPsmPpWsZDSDY5oKmWqDq8qwrqduRnqMBNoMiCkUmn",
  "key16": "nfrejRh2Qg9UPDTa4cgXTzdbtfcrcux5B2tUb4SVKiDaDEn3Gm8ucNAUK9CyEAM9ZPMsKyPfW8KZVsWBmiD69G1",
  "key17": "3dF9GfYpjyKJwpsKAUN6ucX5ujFuenvfbRCbNN4bhNEYCaU7k8pCLiy36ZkMyan13v6ocgUDgKCMBee2S3vHqo6b",
  "key18": "4rYCYUE92pYQN22xBeAGGjkaiq76dcuDSpDsAeLmt7NbXkg6RifZ4RwyxBbemY3SXf1Pvwfpb7pGaKZeyBcbdqeP",
  "key19": "4QMnJ3zZm4RUmCsXBDGmKvfXFWxVmzinGbdjCfno5sY9U2QnZWi75wZh2LpUzVD6pu4sN75MntE5LPrJXPSrWD8T",
  "key20": "4adScabkS1iufRuxD8pq1d6Rgrh8DevHMcbkZfp3575daqijVUMpv91tV3KdxUYQBa3xqSNpqPJVAVbBTDh5LDfq",
  "key21": "3XpT6j8C2mtcsYJq6H1uZWi5ooz3D5L1BxwkiFqyNMZeVgcpkPACjs7BsNbsBSwbZZi8Ls6veqV12hJKed1oHuEY",
  "key22": "2XGKZLXQ2DkC36QgjwzX3ms7KCogZtG1TEVM55vjSFuRDypCUK6qby3cWwytdu896bBvrXWgf8pqfrRaHPU7JgCJ",
  "key23": "2PQpNLXyMsu4ABhD3BTzCY48A7yQEuaJxQzCFMZMvJVrmDqNjd1Fmx7d6mkL2i2tYGjeeUNf8s9zJcZ4gpm6PDj2",
  "key24": "4kcgZrGy3FhxTEH4YDFvokzQFnApRN5c3QbrnF8NGxzd3xufNXT34YxTR654P9eED2ZVX4haALRGTz8j4e6xdHpg",
  "key25": "gJxE2BbhpcPDvakTJTb7X28BCF8Q8nAi8n4jW8i3qzPEs9BsUjZtDJcnkJL5tZcHTm2hiZMfqVL9e2uw7R4fiUB",
  "key26": "M6Kd5piGtkHkveWYRpr9Q7ga9ZhhfSp4ei3ze2aJkz7umwr2TMrXQv6ePqKqWR8FY7rj74DaP9Z8wt4WQb9s68X",
  "key27": "5vc4VazwePHq5RszNTfFDbPH9z599FQ4ZPpAJWkqpvoR3rgVFBiTq9uPnan4x9zwEC3iNnnnGh8gt98Exw95yhog",
  "key28": "xoskR9CjtfBZBAdPeGX9YKqGzwYKUHftv3n3dikV1RvWgH7bNTbSxfZF3NtPTBYY9r9DBFzqH4khUT7spaTwV3m",
  "key29": "5FhQnMThcbqhCysim837H4broaRETBY825PqURvXYggEXL1Mk884kyZTQbFwVjjKpB8Jqkxs35pNx9RbZM8YPDVw",
  "key30": "3VLJ295nHvp8UUw5Js2QPGvXpE7HdQ8Vek1E9298jD4XBX3mBscPvozDmL3K5YPpuvK6uGXZeLcg1u7mk4Nwy87W",
  "key31": "PAkBeGQNTtJP5w5atXMV1ererCdaDB5ZK1XKjK8vBu7G3nSWkhTHLhFJYkvC8gcSXGqJpPh7SfGLPH9zZwEojEZ",
  "key32": "3rx4q71hX72jFUxLVDAa9coEinUyVLzytLbEdhf2tZM7qVy96TMxV7HW5TreKAMe4AzduvSpE6C7vm67zr8LSzkY",
  "key33": "4RjgETz3ZPc3BUjmWyF7SHjP9WuzkxNBqyRaXW8HJVN7kBZP8TXxqHWSuugexafQnKcH1TmqL7viXDAwtP8KuNQG",
  "key34": "4j1V7ee5XjduoAcWwe3R5tyZ4RSjEr7m3UCf65iyUufKscXy5tU8nfCX8znJRsZ81ZgKHFFH6hfbSWi54YEX5bin",
  "key35": "5VrfLmYAejNdPhpMxcWhZ1aPEC2fnVkAydZMBDtjb8bv2WZSmYE37hVVREFV6fTxjMgd3Lt1u4ZZGRgTboFZab2",
  "key36": "3hVEQFZEPm9AHNPVknbL9wwVkHQk8iqrsAmd9U2MVjYb7czso7ZE6xw2WiZnjMb8rbUBWi1ptYj55saR2hFbLNkY",
  "key37": "2AmvzVy5aMU4Z5BWnmpMzueirLfH1Q7kkvxgZxyQH312h9pRa3aiYvDcuhhQ7dqaARhDw22vkrJvzHpZiiSJJoTW",
  "key38": "4UvyDmht7CkDWHDNouDrZTyynBkg7mLdqR6PyyNUnA2zeU5cWPWqr7yasqNCjC1QNiX8W3DxyhtJqRovrGF1c7TV",
  "key39": "562KamWCeEFjWTSSmU3EvAowsaWziuAFSQeACecpHaKkmDBvW24REWLU15RZiFaXecqVh8C5M9P3mUMqJ3AEeyMP",
  "key40": "4qD8KjScKokBoYx3xECBurZ3YbCPnZsJuQREsD5VFkUX2ah5V7gtuP34fSirQwvhjzMqjgRWR5qwMrSfrUUmGSiX",
  "key41": "33rN3g3BJrUvy8k2MFuwkCybWySfmhm2uXiLRA3V6t4rC5BbCx2LVaPxm2tD8YMrfKtdTnDTVHGbCqTXZoTZsLgZ",
  "key42": "4X5njwCWsa6fk5k9qknMDXJL2uySZHqbVP5eqZBEmkTYoF4KQAEcHrST6A49qoHbdDe1y44GokwkTmwrhSZLoyEG"
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
