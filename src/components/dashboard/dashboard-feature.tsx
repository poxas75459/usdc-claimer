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
    "2qBvpuN7KacPdvAnTREFnAVcwoQZiidGCsGi4YVVzucsjRXsaCza4BgZrfLyUdNEibBs893DyQ7mQ5M34GUMydzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDXgTKC8dnzL38iMsF8yiLo5yqrmJy5bthcVzE6inYuDc3fQR7YkBmrFe8SoqxYbNrWmTC69qDBfCXKDwuHz9Yh",
  "key1": "xuxbtfSbr51R5BpnYCo1iVBLKKdox1Za9uJmgTEF4sqYNgLavB2LzjWmMLbxhHBakY4rVG4Q5x7keJnmS41EmZM",
  "key2": "3YYCR9QAbUrU5a44vndvQy6agBqUt1H7ofEsFgEtVH9xPLL4PCkzPBrtw9JcNsFjU1MbKsY4Sr533J82WhUuNooM",
  "key3": "ao5UCL3mbpFfNxb1waTxiEsenCmgKi4pUCvCEg6SLnp746vsVgf1UUBDBQCY6kqv8tZwUsR8JkvvoBwLUTjZMzB",
  "key4": "3rKjfZwURASA57ik9YxvS4KiaArKtCUQnqUkkZhwGcVfixPaiuaz2v2r22r5ErhgSTQqojhdiHx3H9hUGpzPb9mX",
  "key5": "QhvsU47pT1FAuzMKvGLtPafkDiZGz4F2Ys41jXH7EEoJWzDT9vXmqBqUdRu6vyfttCYchWByXUQeT2awCJWsmV4",
  "key6": "29svwRR8yWLMB29SesCawUGW6YMEMEJfE3rsohZ8aJgwxCb6ehhgZTxgDHDLnket4KHYU2uH1STgW4P9jubMZCuY",
  "key7": "iAJEbiJnxyET6cfXKCcq3XdUqLpqcTQsqqWQqsehuLQb2AkKAmSHxaHCACcETFpUKPzSfiS4xFvjUN1KESby1hq",
  "key8": "31z9m76K2o8828pcT14LdhACAfTUDr8rG5FudyC7fugsDFmZX5RdeyoqZ7rnK45Dwqd79sgjFzmsL59XNMJaU1XJ",
  "key9": "3oVZmTnee8N2U1ds18T6fRHrYHSLr5pGXrxvH1mzLBqCSwXWeE86AW9qdqPXjVAio6PJ1uo3v8mR4FsXkvGC2Zaq",
  "key10": "VZonEW7bLs2rJjWpRdC9MtJFTE4k6tLUATqwCqHCupqe87YVrmG2B4zFyKa5WamM44haE42F1FqX9EzadZatUkk",
  "key11": "4dg5yDwoozfVpGQUTw5nRAtRMNiZqzg429Tz4NEz8xcp5hkGRiqoQ7i6a6Ja4hmvAiKSWHJrczSj3vKZbwk33sK7",
  "key12": "5CSScr3SEja8LDeSSFMAAufWCVGWK5FwaQ1LjxqeNefSdDhk6jkjtFygogEa3PwFAgH4X6FFTDYUmGp5zof5ryAv",
  "key13": "2eRCuYMH9BHaxs7rKp5RV2PgAGux6YhSoCRHj2r4zd5bG4w952A67pp9fn69bEgyxW1bVStTv1CvdXs1e1KJ7pyE",
  "key14": "4qxEJKVcrG4P8A9zciyQymgitc88tnKdTzTNmCMG52omx5erTKYh1gKfdgP7ZiegQUzuTaeqqFUxhGNvCYYH5Tv1",
  "key15": "4L9dtB59BAH153kPD5JzP67TjnKPhiAnxYGn2ZSu8u6NtKCkDb4VXczR9zM36NTy5vtfpcgCMZuXCfMU2CoP2bei",
  "key16": "2GbFTbHyF2ULPRNnYF8tp5wXYohiicWEmvzcY6A66aFU45xAi6fkobc4iC1P8Kh5TGU92pK1PgPmc6LGrN3YLAS3",
  "key17": "4AGa7RVpFEtd254qE2q4zmgZjQq7RSUhzRiFDwGX6QNjJRCuSW6ApZSSXPyE2xi4mtMwkL8ABRmi4hCBTsianBZ",
  "key18": "2MLL2XWn1fr96YunNbLvxBZpo8ZHyxWjjkHRYbWhoQRFWNqn5hGBfEoCcerfg3CEAEAzmB2teqn1CFpEMHPqtZ4d",
  "key19": "4RwngMcFZZxaRfgyePxp2fzV2hMrq55MM2Aj4rwUFDkwSv3AVNBn8diV9V6WkawKEYMz1ng6JgBx6xVQFYpiY1bB",
  "key20": "3WHqiFjodJLHN6rCTmJoFunJgN3bPnKFiWu2NQJZrejiFLnXuChrvHkTWwURBiwtiqGcC6SRqcjTuLjyz95k7MHv",
  "key21": "2V5zCCy9gK7TKt2TWdPNajk41Yawwnvy5HxRXvH6APFVieHKjK6VCcqfqU2a1P82ZCJgyQm5Fn4S7oxMLvAvL296",
  "key22": "5U3aAqqf9MNDbEHv2zfir5n93fN7rTAD8P8T9sk3PdRRShRHDXb5ypYbgoH3zTyWkvwPbWbC63b5DJ6PoCjqpq3m",
  "key23": "5ShQfWzeWB5QiX4s5sqKeV3fC8SZvraibwvS7CKnxDysyKPuDhpfKzKgqC9D5RL8hC5cGwi1bwGa1trkMRkFSH1U",
  "key24": "4HqvoLBbchYtNXS884Y5CiMqjmV9CJSPCwiGsbLoRg6VFF6VJE2eNdMBJxa6cJ8MFTnsZxDQ529v1A7EV4aDHNKX",
  "key25": "vtqXtHTGxo7DAdvcdJWnxeskiHSXWpoZ62dsjUDpjrm7XH63r21xqpCMZoFm4SyjHW867EDMv8LCjpbbtKKDN9R",
  "key26": "24cAdK6QPpsgEFY4tWSPNwazkyRkW1VFeYE1UuQvMpeN3v7T6CDiJeVQcow1dJmY5d9sjSDgSj8GD3RwdoRofZsb",
  "key27": "64nTX516YKDxkVxfMRDSyu5E8dwVnmmRaXpNacy9cetRdGquerweUtxx5iwfNdbTjLsdfhuZoEjgMdkWnaNLZcwg",
  "key28": "2VuqrPsXNQciEnU9x5uAv7Sn1jXyGWmr4GLgPYTKfAPuNVP6keHamgrwLH6TSyVNFAFDTHWQb4M9vT8Bq9CHXAy6",
  "key29": "5kfsQJWhbPQsGE7sw2SCQCjvCdaVTCaxrySu7KvdZahQm8vkMiD4WN9a3heeTThjFaxSme6R4WdrBJJH7mDoxDud",
  "key30": "3LZrT7AqmUa9XKKYZ3GG7HS5AMZpEExB3xzXV47NobywP6S8jyVRBe3EWc5oe1pyX44ceqJPqvuCifi4B8Ga5xVS"
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
