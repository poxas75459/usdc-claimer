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
    "2PS2sm5cKDaHTKh6tHgUhU6zrZ7YwPQrkeRjqJQpGoEVRReYgHitq8wgLnr1uaLkLbbWPZHQcEGcSE4GEvA7zQKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JJUwYRnRBwtDh3LzaUYscLY7Xz71529Z79fNKCqpUJ9ZohSCZ9Q3ZPciULE1vMij1vzjCxsJ91bWDrBj2y7gq4L",
  "key1": "2u4VLDLWpWyQH8izYrsLwq37fTacEqATQqyQ69CqxWbUHtmhoxBFNGdTSDwniddaiovbz7WaRNYap7S8be7YojW2",
  "key2": "4xxSwjUHKtFQxvZtvUPEtDjvhRpwUPawb5NmXrerduQuD5uvWfPrrKm8fM6ofPwprHeqNg83QtzMveKfshFoDsd6",
  "key3": "t8vebFEvcwhZiYZuxGDn42dfW3yvUw47RpkfTeUpGFatyDjUnNejWwVdANmNA2bvu9icooi6EkzkdFrnNSZjapM",
  "key4": "3sS85zouQ6aZpxmy1HF4kDy4hUYo932UsqxWwLL75JDpG8eMy9cLsZMsJtQt1sirhNejGv2V5XQVMXyujQg5CAVS",
  "key5": "65yAogiU252eC5stjo7KZV6XRCeRHjmYzuScTi6AwqvSgRSKUyN8HH21jHZnUaDBEgz9MwpQpq66tDghuiMTw4Bq",
  "key6": "3DVUBA7X2FQ1tjCsuM4Pfxjba7brAtTKkBT7XhTmQtN6PSZP9WAEZbMteKoHXVfafPVLJu7GG3TFfTm7ccayu3Av",
  "key7": "4BRyTmMCyzLDmyqEVHrGXBHGXdPN3zPE2VaZZtZL1tUt2ZXHeW26ozfWWUpUrJzUHLfz46VHhQm379breugj5txf",
  "key8": "jBPXMP16JKxNndh82J3HnB8DGfvGFwMue1oGLZwhNBgBahbskogdJF8dzKgkyTq3QzZbU7L7Lck61xWChH91iDi",
  "key9": "5yVw3RX1wHmUc13WqWrPD76Lm11oHiHziTVcBpndJpanmTKJ5uQX3z4ykb81aDMqAVvGpgMZpJ9k9nAmoSJv2G4w",
  "key10": "4dpFmTjko3ZkFY43NciLqaqaY5hV8xttbFwbWndkYXMvH5eFCRGD82MZQNnEF5oqG3iWZ8CLX8KRHy9eakuUUxJB",
  "key11": "4CcD7WcSsmq4Bt5pDaLE81fBaCyQfhrLN4rrJFdpNQ4HaTUjzuzsRKvarHbFosrxmbbUMbypAxoNK3nbp131vYHs",
  "key12": "4qYhH6FmJy1ybjsTEYpEdJJMg9j1kNtu4ZFVbbcWR4XcYrj9wBWrTCk7Foq4qiSLjXWkSE9Umfbebre21yfiSTa5",
  "key13": "2UneGyekUWb9gz75jhEbjZcKP9aais4J1UwF7nXeiYrUjvnmF7zt7r4qKVp8Hjkg7H62Rrc3wKBqLA58uKZfYJoL",
  "key14": "2wduFFxfCcpXmir38gYxRF5aNM2QpCLmsD5cJiz31qSvAaHXNvhHym6iuXSZucR1Y78P2hWKDZgeVDDiyC9JjEAB",
  "key15": "9i2b46xx8Ng3VKCEGCtxK3qTdKgKH6GCWQnC6CeA4QCHsmBUVMDki153qgKqf6D38prUjJHWZ6j1u1j4jmhBR3E",
  "key16": "3oi8ojC8hbh4Me8X92YTpGY6vZkGgop5VTCPPQPDrzeHgMATmLEetHbfUgnEZWMmJncezoBmuH5jsvUpzmTxXGi",
  "key17": "dQD6Bcu6326Rtnjb6fdDQ9VDFopUoAqfqTkqGNctw55fgz4m3L25x8kUvYsBe2rVxAa87uzKbrM6CRff8Lfzrnj",
  "key18": "4L7g211oTyxirp73UU3RjhNnMum6YLMrPFWseDZkhhGbfhSQxH4xvkN4XAUbGEK1wzNvsbBN1mmxUbXvqDqw7ZQ9",
  "key19": "5PF5zoTFHjVtBr9HPme6qqHZz4khDJCEHY8N98T9ErryvCjqNBcLhLzugiaJvsRjjq3yB4PuMgJJUE7n4DmkmCSR",
  "key20": "2aAWAz8Ur8yx2vyXoWkv9tAf1GXihTPYdFBkJbkrAMVwZqLAkd4zKRXbq1n7DaXf11xoTM55zuNKZwHWEgcGkJQ7",
  "key21": "4h7eXXLyVyPLKHCfV1SEy5WijxLnJu1oYs21ngggJuBfG8NpHb3fgroMm1BH7rhR4KzKPq1eHK7N2mbKmwocnNYJ",
  "key22": "x4NiTRpZj1ZcAjrPWtzYNkJyj5GgyuumAheg55EJft5AF5D3xWu88ncwscRwnhri4ay7tAmScvMgrkrCSCvFdA6",
  "key23": "2DrMiwp6ojELxqSr5ounyM57ASWoxxMxn2tnnCEY3ySZu1FcS3APRjFvmojcuTbAH8jMx7MzrrAvRwcAYwxoQivf",
  "key24": "2WXGdhLqbhBNSKhdDa489yrgmMED7e6RPDpRVo3gyXjJfDXrapSbY8Jj8DWj9DrVg5fNkfAZ4b9FNgk3tVDSoeG6",
  "key25": "3J66LW8QthSTusNWsTt9xmv5QEEqVgzucbsHH3guL2vPXu8ekvbb2k5d3RcsSKBRg4r3TxAgzKneWCAcTQU5712",
  "key26": "3UUkWoixyevERGQp6xNnQ8TKn87rkkNewpwHyQuSojwEuNrJ5ReqC1Ak7CpQwgXitvFs3U7mrNqcxnSxvuzUoLWG"
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
