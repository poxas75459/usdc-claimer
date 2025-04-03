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
    "36a8meSpCpPpAqgNtQ2qkd3xGqpzp427CvFJVUg2EEUUrVcGuPHyG2gmhSUmid7DmX2VMoQMqzehtFfkYX5cA2iH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtrctHgYcyxwbGcVZvPjmZV29WeRaZeZ1SmiFtpmxutQpuRxb2GdMN2QzF7CG5R98xGpisQ6uzG6VhoAzWQAR4A",
  "key1": "56kmA62hRcQUtmSToBbVJ84ehy3CgUgxjfkE9aKfHZUJCbdGBqLNCHUKZhv2pdP6vxCdSaZrFysJXhAyNGZ9TZeo",
  "key2": "5ecQKBwBHmMs8swadB2nL7Uf7TD1amXH31dDV6bkp669eDc9GhqUYQTPx1fp9ABL7D5NoRJxvKhhiEd3TBahXaPt",
  "key3": "3z2XvGaMDsxdJQB9tmw1mEU6ckyYxefK39EwNdqr3GR5jmonmPe2WQZsYdj3TyiBQm5hkmmPTDsQAF9X2PXC2PhG",
  "key4": "4c9fCwKhc3G7vu4gmeAbLCuisotvdJUFf8UdtBK1CCiaVquSutSGzVaJEcSGfuJgpGuSGtCJb9kvevw41ECQZ6LF",
  "key5": "4CFo5zFkXRXmMuegGazxB9G9k5octDcARa9EemXTrbJry9oJhm6x1f1dLx3ABkz6FAXopwJZ7orabBa3TKkuMgtJ",
  "key6": "21JhsqfHYujXvsu9dy3QU5u1aijVb4GQapCQ5b6xvN97cNUFhYGvHVGWyf2UtRsB6LGSMCZBujYV1if7ypPxHDth",
  "key7": "4488MmnpMZRxKZaMEEnNV6VXisiYAZCaJfLyCpJ8Cqe75fKKC8z4RCGxorrnVyMpSPyoBtTV3hsqiPa5J9X2Dupn",
  "key8": "3AQNwnRRNiWWc3nJpaXfdU66hr1vRHm72vdGASe4d9TTFGhiARzcWxfmg6KMcYosGK7EanTZgW3RrJPf1BYzZ2ko",
  "key9": "4eysMNAa6iPrRa4qodkqa24s2ZZQKWQVwtZXXbXG2ALbdtNgJmMit9KNSKYgtiiC6jdM4En1BHcq3kYJLEYRCAUs",
  "key10": "3T7QYxZKA5eaeGvYPt1SZVfkic1HpKeFuPa2AvZmhVJxKDEmENPRZcUq1v4GNEtQCxWGQMcKtQ2KkQMwEwysK2kY",
  "key11": "twupPH35mbPUydoo3UacQ1Ki2Mzy6L8DnuqBzWt6sGh61KV8gstff3zMDoXXc9FPD9FqFxPozXVoqx9NY3DeNpC",
  "key12": "4oqUqpAN8m4g86Ca6eEZSbhpGoJgKRFNRrZkidmfJ2e5T1kMC6AeKMSXA9gnE2bmWtfws9mvyzmxHUrhd8qwRzbB",
  "key13": "5j8aGRT8wNptWJuo7pC26k8QS99LsFWJmkfs78NZdN5oWy7nQs3Z6XRKCk228rJFbvp7YyhrHQuMT1G6vHxHAQLG",
  "key14": "31idE4HiHd6na4finyxjFEDfJJ3dibTxrvMB5sBcSimgbycU5gkxe3rLTgPvd6EH6FYs1Yf1xJywg7R5scFzX3KJ",
  "key15": "4YVmR6nwXfR746oe1z2SMvWUueMLvNYMhrz9wZBgDHjMvzXobhgnZ4zMmq1aUwY5Wq4JT7V9qyocvhYUchqoq1cM",
  "key16": "3Bke4tU2ZsRvCmW5bNjAAy93z47KFPRPptAxrwRNRG5T2npfNGNz8DwJC1xXdXbQbC1phgCacyXmP4hD7zUX7Jmd",
  "key17": "2EwFEtZBycrj1e5f8ogpvnRybxFKuBhTpDSyw5EGkqDmJnairLryo3NjszGNjQgfrbpCvsmhqa4JhhUzWvVZzPcv",
  "key18": "53L5wt9KAN7rstwTjpGbptRjPK7Z2tUi1zVYPPf6DX8ojSvHTijwG8QqE3GMgzLLSd3QRYSsHbAys2Qa7aheeAFa",
  "key19": "4HSBxXXyu9d8oZWsLSmm9BXoqxmF7bxVRHiQ8Wv4PNy2XwFMsVtFCXCs8AFkKJNwA5ao6GWGM1aHNPFoiZwtixhJ",
  "key20": "3s5u24hd7wrndK36DZTgXrbxHT3FBW5VCMZty3qsJ2nHDN8mKpKNtxX4HxV6aC5ZuyxHbe5iG47uqaNHBLJVz91d",
  "key21": "4VU6WY8YMTs5EMFamc8K53d8HCq7qqar8JUuVDbk926hXvA6mxfR1EaYBUhwxPqgVi97SdzirpXVeaqk5btjGE4z",
  "key22": "2gUiH3zLi7SLFQ2m4yiwyGMifYFdbgqs2BQwo1F22fx1kNcEuMQTzcEzWD8XBMj9m4aNRxu26fbQHYW2VWXGg6aK",
  "key23": "XcTvUG11qJXpqnKYBm8AzddszQnuwQbtGQEeYKKMaxLaPUFDxfZNAipvV3rmR9du5ENFpnWLS41EtYCCdV1Qqbn",
  "key24": "2u6KPYmJPJPbd52Jb3t6zv4P6p5m5YMgmhCWHVvFG1XiA9nMHLypRb8yWEGEQrmPFTeeMbWh54hktgGSNHcFWPGK",
  "key25": "HdTp5NDQmPdB2QG5gvpEo94Qc6uBgU2ms2Ujbqzj5x7956FKozcRtKddHHZXkCb36E6yBN6FtSEL7nUTTu6Qrk3",
  "key26": "3u7KEDV4MNoQ5Na2tDYoJ5qKSesuQg7w5HqVet7AS9vgtA5GSmfpbsTzzLc7j4H3hTV46ERnb2SB2mfWotLtFvUR",
  "key27": "ZNiaN2BccLv64ztqZW67pjpBS1Ey8RqrRAex7QUXcgBPZiLArKkWCsHap5t1LeZ9Zqa7uxdxMrwe9YCz79WvJA5",
  "key28": "3t7V71bxzNkHGGdtJgByQfhJGLvAKNTPD5QDwt9aGm2TseMEDmVpG2B8w5m7f52x7beiwzQWSqbrqhDhEnCBzzb3",
  "key29": "47M22i63cehVz75vgaVXrr74oA75X9TcZggufc8RydHSCeKdjZnxjDSFUrzN5LKYF4yJez8sKJLbcf6zrZXPdNCY",
  "key30": "pv2LuyT4q7VrXpbYZ3x424jmXiuxjer7jnNd5YXY3FToEBAMuwiyNXEbhU1tYd1DiMXKgrnJ7NgQnkEGN2B3RjP",
  "key31": "4vSrderxwaHEy55M8aVttiW2xacxTgJLvpvEyPzeAV52XTwWM8kzrrgLaCoqNAdQaonf6tKzMkeck2nhCZHS8nsF",
  "key32": "5AqcWveVycLv9TVe2GEDzF73NnTKBbW82VSR3BPgZku5ZpknzpvCj68hWjK4beCJgsjEyEWbHGN87DX4U6rRc8fH"
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
