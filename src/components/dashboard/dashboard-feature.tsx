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
    "5TfydqSrinFZ8o2j3mqbXLB6deG33UasCUU7L2rTtJMQnwefBa3bRPHseRL6HWrT7aZLKUuQCdTtu3tDkSmkMc6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwpNU2eZLSje76Nc5etvry83DFoK8hiXkdGkzkEAMzK7fYYahdseoyGe5JvAEUqDN9F59uDmRZYfvhPmgQC9FwD",
  "key1": "4ZnqraS6eUPR6b7q4EMxNejzhbW94FxF1aGuEDPqYH8ZL7z23PoVcgFHJP9PExZA7SK6QK5uU8WysT5div2YuPhK",
  "key2": "4PEXZiK8KbDsN1eepq1aTYcVEJCQEWvmkg2vJVLsjuKZpszbN3pobu5LvLtuscuQNjB2vuqBLEmuL51R3HfR8MVu",
  "key3": "4QDKrDokycUb4c3nQ8FcDYZ7nZymNQw8x7EM639Ewfu4C8wEKPnJkzW3LE4GNprTDXp4LEAEckCv5tLkGkN3DV3M",
  "key4": "4CD1pJDuPTXGuh2ULq32ZMxtQxkdrHURcw6ytdm6kNTjvAKwFzXqojTtet25w84je4PazpEYrzriKdXQ1SD3YhQQ",
  "key5": "Scca5imecMNVNNFBeULCufh7rVxGVrcsftvPNM2M7WyYMzJrRigcvCkra2P4HkJYLiUTJpdakx5reWYXFQcTnr4",
  "key6": "4ntuLJU6Q4TptR8XZ8vm9Ph8Fj85h1L68dsBYxX2g8S8LJpcW8Xq482QGioWmhvYGzGkXSL3LrL3d4GY7xappypk",
  "key7": "2yXjpqYjGRUYYH23ZoV5myea2Q5CY6sjsw6deMn4DecoHbnfU9hCw8B5zD4kL3euazvKtdyUBNp2Z11r4x5ad5fr",
  "key8": "3fVVAWCuhta2PZXpoGt56ZX1TNjezUbd2NKJjfow7kg3Xw5MRdy9AWZ246Y5QhF4pL7JsqBVKqj2jiC9TzsFMDTb",
  "key9": "2BzTnN9nKjAE2DbFx7EtyZ8roFxSdPW9pMpp6sGSK8KGmLsXSrvg1c3FEnWgx7FGMYNf6xFkr8eDpgwdGEwoLUWt",
  "key10": "5E9g5k4JDd7DMnpwb9XoFYfdT4ntAoCPWjqLBDSBRBbfo2eLTKeFAupTYfryedCTbpnyPJzR7cNywL9gauxRwmDQ",
  "key11": "5XajocZ31CyvTc1GDG6gnq1Pq8AAi2jdpc2PQVdkdQAqzcYUNepRzmpMvUE6g28rkAjmd6HVqfTSYzjLfmLkpnCY",
  "key12": "5rCW5oUqdoKZZUAF6MJ7HZSZGeSAf4dFhAttepWoDd3X4L7ABZymubpLogrZBB2BY8ag6CQKhBozgsK8DeX2y8p8",
  "key13": "4uqrzBcjCSusAhLa5kn78KzSVb73RgWCLB9DmfAimXgvF8JvgzwHXQZGdBB5CH5urEr1w6YPhDtjQGka4qDjWkJZ",
  "key14": "o7sDBzPnbMgqD6hCZYfSafjCuvpJLqiCJFrLW3LV1DVjyKM3QjKXNSnfHiZ9HU9rUbLpg5Bn32GEPEAJMCVRSaQ",
  "key15": "FpH8FGbV7DouehniqFnHKfuJpf7VaRHxZwUjHQiBtQPZBZEivrfKsHCQJWLKdeFttx9YUG2A73fSaP1wE8op9qG",
  "key16": "5fcEEeNrZ5sbNEJv5dn5JaJLXS9vajnq4f91BBs14ii96JwPhmusyqKpv6y435ogAcUFwjgFXhrHA8PzMHF9CWDU",
  "key17": "YofdsAWF7N6VbMcL4re66uJhkxFNJ3pzYLmRnirA86y3k2s83aFSsGVEVYBt84PtWeYguT1szoigWpAZsMtcEok",
  "key18": "2J7jimoYG9sUCAaNgcERoFfLeJAfpz6EB7GLQVp2Ba9DgJ18KMkAVaR2vLZdwirmpZftT4tDMurRWfUboVbeEuen",
  "key19": "48jzDagxiyEGMrdkcHCSYV3s5mjSrWn9GUhXuUqf8F1KSWYRt7WuyMFLSCcHuAeGn6JtAQ9MUYsn6Xq4oh1w7AA2",
  "key20": "7dFtSopwkRPLP6SuhQpEDxjn4Y6JxW2UdMsTfZ5cma4eTWBHEt7grtsuvbzA7HggxD7bTfBhMspKRpCqZoXwFLh",
  "key21": "3pvFBCkoBqcpD2J6sLKCGSxYRkyMaQNy4kP5utauoCQdhPgyTjeZFgaMRjvjdKfJ1CSHEtgexypdsqJ2hDiP7zHh",
  "key22": "56JkMnGcXn83BKcYar1UVSpHVQwh5RhjYGuxJDJza1PWJkygKCVExtsyjrwKT525pJBywjwX3eoZZ93cu8UraitX",
  "key23": "3KiBoPQLT4pfk3THVj8bMZwCcKmkia1BBVZiXmpWsek58R3pqdcWmgk9JZGLXHyVxfxLWNqrrfhjzeSV9GRuTKBQ",
  "key24": "2g2HmaC98MM52GRwTW7aBMSoRuvbJRVRHBXcEzk74Hhgg45RyVpFM33D6xno14pECZeNHrW1KvcHtNJKwkMfRy2c",
  "key25": "5KVeqzQKfnPZywrrboiEMSyt9tT81L6sfPHCNoPhX9HzTKgGcQ2QcS3biMVSsLC3hUvFrn64J2oHYarg1Jw8JVy4",
  "key26": "5e98718H1f8caf2ndGxVUtz8uJTpmznhByiUjRCPFaGZ4AGLyUqMeZ4qsnAFet8FuqMkUtVVgf32NiXKnQdsSPaE",
  "key27": "4k1mYUiKgCLVVAT61sitZi4BYudxv3ywimK3Fd3rrLoFb9KnHiL27NTMDAn1AxDLPYtmRx7SgEiakqNTrbDCr5XS",
  "key28": "TC8zszAYZg6qufXfqTQsj6tqtUg8UwEagjMkQ88ZXShxpBKMjDjDSz5AkGiRYf5n5pMFgTihuCAZF7dhrFhfHYd",
  "key29": "56HvmA2inRE8hzJkmRb4dMtT3MjtdxPUYrQpFnLfCaMzbuizw977jYpm6AiLJzkQwSEvdJBR9ovFmdVUiTmeGA2W",
  "key30": "4BMiwtMc6kYj5M6FH9eZfUH4xVyjKLR3HfBAAYzwPBgTLUnNvKs2ZGM5KZY8ZxH1KeQqxMtcLw5mQUCUFevhjvrb",
  "key31": "5597sZuAEyPN4wHxhCT6WUCoKWfsZgCz6S4oLgt66iuB9J6QM4nY2Ew6N8xU7qk1yqTGJ8anC1CeqkQhUfibMCU7",
  "key32": "SJPBTgTRP7EUD6Fg5YzWkcLt8c51nhuTfMg9xxLogkDEMmPQdZj6YnVkvfFHcTxEnhmc2zBrzwKQkfDpNkq6ZPJ"
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
