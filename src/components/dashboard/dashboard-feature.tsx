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
    "5fAgK9R68njsWAKMTE7hytUJ5kawnLLPqz1FNaq1ChQhyiLC24TpxpeV21KaF3hu5AymDdMnWfWrcgMgHGbJ55ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cepKt6amquw77AvoxbHTUyd4ySSdngMt3WAdGFYbSkBYpHeryXfRqF7j32eF1wYjupN44r7CiUQHPTM3rQFUEan",
  "key1": "4cF5rbA4GyV7ok9ZrvcAGxhesSGeQYv599irAXtdQbbc8ABf6uHz4TgHQ3YQxyUXjE6at5DYTxwyW3kj5wBvcsKA",
  "key2": "2qktwijBSKEBBJP1wrdNFqhxprZRhpkmb6Dtt1RTQSsDBE7ofyCuBMQyndseZxQLgNyUcjz49Lq1DGxzQ7qiKWjD",
  "key3": "435ih7S5eGfTgvc49Yw9hpVEK3jMBZkTtms47i3utVkEemy4hnPpGnpNfHyM2N1KHdRQfiq5ZVsRyx8YcH4aQygQ",
  "key4": "2aB33eVq5uds9wGqE4n8WZ26ahfpj8ZJPMj6WhxSyqLMiayJjmrt3GrPLLLFwQfsCzNxHit6Mbtx4ofi2S4c6Bn3",
  "key5": "5enkBm857aMSsQHNheQYRu9XqznXzf6sMtEjnrXqdM7FwYnCodqdF8g9BFQ3iUZwBNWVKhcahBfj4x1WFqng2m1Z",
  "key6": "3MPnRMwcxvdJnoXWNiDuPk5RhkSehYvmpGVdsa9dCctADee2iVZmYk5Yz5J2TMw8uVgLNSkVLn8GT56h777APQS7",
  "key7": "2hWuBwSU9hppgMppZy7Y8E3TrYYU85iKh29dcddGiBUUubZXQ91mBYdkEDwscV3RVpZL2Ye88BiC1n13E226Dwvc",
  "key8": "4JshdjLgGpXpbJcvENejsxinwC92jnXScvuSBEh8hxbiuLapyHE9bGHNszKnMGaaJo8hAdFwFDcCeh2iNg7hvZXh",
  "key9": "Ghy4FMPJqFhzwK7mcyvAfFb8DjmoxFfVs6occYp7oPVoHyeuBPhWFRYrJ6YxjpttHMKt5dCavrEor5vU7nPy5EW",
  "key10": "659yukD9kzmM8feSacCjAfBQCfYNV2a8yPc9NeQQEPuorq5k6w6vuQ8fnRrKRpYTXmk73a7xbqe2wDFWhVQ6CZKZ",
  "key11": "2vqsNJjxZtc8DRtGQrZaGbWkuWhz3koes6xrSp7LpvdTJ2HdNhJ9hnNsNmjSUDy3bG3zPjx7qU8VaTub84Qm4jrV",
  "key12": "35MQNeKTNK3C6rVKAzU1N73zf1TBr3BKqd1QswuZWDgrVnGfCWfbpJV4CgR2KqNVABpUZzc2oW86v6BKH6eF5ifD",
  "key13": "4dXHiHjYT4MNHUP15yTJpQvMB1p63fEu2f8XHDY4NA5ddvVnc14wkcgACzyBHNb9QG9WTKnMMVrJnAC4rjwbEQne",
  "key14": "3kLZcbN9UsvVG4xn6ngvVND17q7dtL4g6cPkE3yFmR7BVh2BSump6VTtEaEgX6TVq2RjS5kZFSJfA91UBz745o6L",
  "key15": "4gZ26pbcqLWVhKdcowN1LNDHRazFWAWXoWQMLbZX7zFuRhRsNq9ho8zYgWcSNUHKaHj6eoeCGKRwrqfE5xRncjkd",
  "key16": "5hsU6XZ1ufQAYetEShpW82mtFmr4in11xVUwzDMVkgLbAdGE38kRQe1yH46aAt2YPwa79hVszt5wiZM4ff3FzmSR",
  "key17": "3kJ5jM9rt4KN1TToNEmYNt2LcXJHNDQfrmACTwciAxhdpThK9685rbdLyPJaRGBYfPeog1pk9xjEiwJuW9d9UfY4",
  "key18": "4Jmuj3Tw32VDENPy8BaRHumqnnaH7eCzPNf2jYBJ43GqqQSDJzmbauWxUzF9zyK33ZuvuacJ6YJFif9vedtwm3P3",
  "key19": "3db8eK9z9YEUAUW5Pq8xpMaPLZXjmJ3F6uXahBaDdGR28gQXZsUhqvwYzKw6hC4VKTckptKGjMZJp2FqGy4iudq1",
  "key20": "5NwjZzksrkXk6AhF3HXAqoewviib5XcgHp5uB3LMiKBJ7MXvKUXvx15EF9tFSXZdihz6ucg74BBKMm8m8TrmsDDE",
  "key21": "5TiPrwPXG5AYHDYUvZVUuiRLuMRQ5Fw7xhxovrshVX8ctHRZkN2QrStthTiCdznuPAfkK8NsLPxNkpZGzrAuGzvw",
  "key22": "c1wr4A7jBxLQwfvf81WkAC6WSDxNtNbsAeKcA9oqkwtwybAuXGZXUzrqyZ9quZkAihSRmaapJjmSNzXf65B5u4a",
  "key23": "5goEyfxNpd6RuASHfJbnFfxtGJGsKC33KDGYDU9cnbS17KbkEaYEj8dqwnqjm8UnDmT18xj3Dd1m3XfhZ8bDY97B",
  "key24": "41j6kFWWU4ua3nBuqwB9JfHiuq2oVKKA5VAsNQq6YePoWVZ7kkZG3gM8XH9hbzd1F51scNXSqB8UfqKKp2KYbcVy",
  "key25": "2dBXfg8zYesgUgbqAxyieJz5M3EkrcEDeNcwUB5WQbUMpv9tTA15LmqYXGyCZChCdLAaFCkegC73a7kCKTFenTZ5",
  "key26": "5j8Hp1jR7qrrwfmKRaee3D314TwQoBPJfykmp4zgG7Uc1BGVmRNpKtwyRF4RVznRZnmfhTgdaXwmsUGwLRPkXhe5",
  "key27": "5z3NzE9z4P5gDTwAi5EL4WU8RKMsu4y3HWcBsb4HDt1J4AHfBfNfGHN9wcbgogj3jjQ1GXpifmz2xKKoVorR9Pi9",
  "key28": "29DwUftJY8sUS5A39Qrmwu4txtNxywrwzTz8LRrzWDemcD5eDRnJV2Lk2hZtkmR17F1XCxoj6dvq7vAcjgzfd4Dx",
  "key29": "3UoSYTcYbxg6jjUqt9PokNNYpuVVipHaQXZzhkxJLeF96D7nmjV38fdn22veZArdk8G1ifiyR3CAG44yRFnJx4gV",
  "key30": "5QYLZCz2frTPGBedDPzeDhd8zwhbnpkcPGXujrAZmBYoFxwL1wCvSWHFrvTUebpnRqcGszrQTohSq7QwY5G5TSD4",
  "key31": "4EYCPCMy5tibuMJvMk744UTC8yJBuLcNraW9dnuXRNvkUwnLt9rmgVmFtKMiKyux2Um8hazDCv5XZSk8pXZvttbi",
  "key32": "3nvFGxwyBGko9xEcSB7uMYaBtNTjxi7iHJqPBR2obbXLivEJisWgtQhsjz6Fs8nW2avpgv4oH6m8ywDNSWUwhfHA",
  "key33": "5HNGoMYqZDzHm43bxDuFnkRGqbigCZLifU9bua5LSNBvHWjjqHAj27JLLEsaJhMrPnnC3yS8EcnuJtxN9qk4tUfh",
  "key34": "3doZzqwoqSm8QBrCCghcAjW6ckWEjjTN5BuQbf2VdQg1BogCTAN9tGW8yR37S34bfiJsHsRMT8gXDZLBYiGqFktV",
  "key35": "5rBBtECbmjapZ93jsLJp4DecJVioR6AiguHdGpJwz4dmr4BbqaXVQNHRrDDCMgP344FEv2UyetZzmURohfe4cPbK",
  "key36": "4jsCEk9uuVauQVXtUGQFY6YNmiKn9UjuWeCcVgQMLPNhzPevk3A1dQcw5chcvdVj1s37cyjVkdMvhqnG8UwbGzfT",
  "key37": "2kWxebMsrds5HvA6MHhQ6UJjTii1FozNqVuQ4B1q38rqAGr1ooNsjVdw5hDJsKUbok8PSPp4rh2dvUN8mDEraSpi",
  "key38": "3u91vWGKVTJPeFiWiZtzKyNPuVQYBBJoH3wk36BaRk4mNdceLErX9qSthQkhrq2EL3CPvxnAzgaLMs3FERBrjo1R",
  "key39": "41rCYU1vh9ZyicntbFn5whztVrMoGycjPF7cxNwZJ4bHxT1knpetqAszDMZ6s92xKJZSphc92cCwuj94Xs8ywwk8",
  "key40": "5xEXZh1oy1qRrsCS1Rt23cUaE7BXoeW8BZD1X91JRbvQL51csSNL24C8jGTm5StPqLVcmcBCpRPea2YH5kimSfJK",
  "key41": "24pUvD3mP5Q8GCWmQpZtCCKV7dGNvc1zua6SKxQobaBwuKSQs7rkgjEkohHjjgPZ5iNeh1t48qFXAZAsKeEoYVEq",
  "key42": "c5CEfvL3tvn8Kiea1Mq6r8ASDHzZfu88s8T61tSJoVE8E3pxnRaqPBJ3xb9RWwVvYzCVzSvaG8BtnqskTLH2kZK",
  "key43": "4iNxdS5BKV9wGaZWEQZ2n6JZbvnX3DaFB5VdbF7gxNqVw2H3TF3WvX3Wg1SSAFqSKH8JKSMgfYrQKtKhXyY5KMPE",
  "key44": "4pswqq9myVxufpaKMZudAqdfnMSYMvYYWA5hLZPC91fFdaqesBoPp9zoRQhssjqwpV5GDRjUoBpduqapYaAdqu3q",
  "key45": "2ZhEmwBAV7xomQPM2F37KRfRSfi3hqHXUANnR8mrzXrUEjuT3kri1BVKiV2dXsZgWiYZQBWdU7Hy9aaX6w51Vfmq",
  "key46": "4GH81RQbqtkGsZRjGh8GnqVQJ7qXehZDSWxJLvhSpHNunYLhTQ3bAHqLZygSLqnniH3PZXiKRgKqH9MNddZLBRTe"
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
