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
    "2Qqho5urv5gFeJHdpw6WYj99o6epraaaVJYqcifUQSTMy4RFMu6bEubCm299kwPyzLPWxg4NU2yyYq6GJdXHpHZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyY4jtaBXwPmFheFcpBgSHRKeS1kvZipfEdqHMRxHcvBb9z3LtJsLaf4NRpErfhbskC4AGsgWLPj63fHi6Tv4za",
  "key1": "3Cg9RYTT7gDmoxdY5RSWFcakuAfbthP9eZzFkmdpEvrTiBBjmbKLDqSSgpWSJY9tnKh6xcBWWBCkg8tsyKYZcQHH",
  "key2": "ipGhJMAfqCpxFj2jRDQcPw7TScEmUaosVCU7Gqb1V86x7HzNZCHgWYiQw5EG65YmTQS2zVpVZnuT7UX8vanWyTP",
  "key3": "4tGb2CgviVmt9xWjZ3QjihDfo1xkAbNQD4dsiVBA4f1FrycGj6z6BeL5FNrWUUawEGCin8KbkES1DMQwGb7SpdCi",
  "key4": "39vmAiFy9EtYrsma711pRm9Azt8F431yTcBXgF5Gtui77y4kZY3qXois9QzWk6hwPWSHZArNA8yniH9htDuoKcya",
  "key5": "2afLJMMU5jnz82qh9ZmNCp3TMWauLHy4UQxDzTKN5LVJeahh26hVymEx4ZzQ69C9moBzD3hdg7M7WGKoHnEAaFeN",
  "key6": "mF47gg9cj5t7Q1VeKMvGE9Ea5GarzFhtq2gkquresFfgZ71jwnZuEJEvEZkDkxbFvdzi33eKEZmA4pH5Y8PBzNP",
  "key7": "pHx1amAUaSajxcvYhgmyrHCueE8ciZb14Date3gcpNb4vXPZP5hYHoSJTJ6PXk1U1fHMZ5wsaiGBJxg2XWRVD3b",
  "key8": "3UDQx57MzMEnw5S1d7uWH73Q1Erhx6fGEFNbqdMR6kqpjXEuWBruhetKeRod8HygUovXVDXZVnTqwbZFmGwvrutw",
  "key9": "2hYrA1a6EXb7sshZhf7jHcQZGsVqX5a1bVR51hCHnbUkMjEoH1pSY8xt6nKpeBMHMJ17eAvKbJSL6bfJr22TBSnQ",
  "key10": "gqDmfLmRYSK82HpEQqeQjNwFSq1uR8ioMtCcAkir9SbJf14bsokSQqA5pteDYouGjDBzp9W865bxHTcEmGFjLVz",
  "key11": "4M3u8zw7gZVpQDVjSjQb2FJDZkKXq8cm6249t8XD3XN1B8VpPCJMybvjBkDYF2ywNGaLVEdruUWbEaaFT5KfFerL",
  "key12": "5Q5zBRXu3izDiWfnNtvZaHD1x4tLg2tEnPHee4pug2ybTGyCkDVgyGL3kGVjTZFo6Ks5jNBPLZhcC32dHYCReVJY",
  "key13": "GhKyvrjedhDiPvpzU7DbQNKA2Jz1k2DnZSsgvJjLqLJBdTZm53g4y2FpV26kgggQrZy3sv13dqrVGpFof8YCbUy",
  "key14": "4q4niH3SgGsR8YgBbTKQQhPXoQQnrioVwJigfREaDcKuzvsc1QprzVkGtkJ6JreEHNHyNRugEmA4yy2n2B11UaGg",
  "key15": "M3kRZvVWuzDSDe1uSWdt3dSuND8z1FZ7GTwjmA2jryo1mAoSbYDEtsyKVsCdg1haZg2LaW6RAohnbgGxwNgLvJU",
  "key16": "2jsTteSBtNxSjUDjVTQWKBvKbHDLK1q82jQDtkS6JS7td9JHmyfnMJMhbW3zX8n5Y9EGVWz37QF6Dqw74mPPDifA",
  "key17": "64Z33RpMjkgrWDnuYk73ygaEyT984muPPzHrxZVUwoTeu8D88xj3hHRgeJFrVJ2vDsBR8xxKSyrAyjXt68Z2GNBx",
  "key18": "62d4kbAHkHL3VNVgVkpLAU9FyQm8RZyv784WV1q4iEBEpEQ6uJAuWyamZheJVnQwvtgv9FYb7cBudkfJ8YZo267a",
  "key19": "3CBnZLePKXdQkfezSjKJALpaHfjgMGj8ryn1qjZSVACktPFCRFHBHzVadFaHUhA4SH2hmgqyQY6hQ9aNZutRtXcW",
  "key20": "56jo8TrH8VVL8MApbgo7SRXr4LVWBdBxAF6AzsomnRfonZMqr6VxBLqmnDrHyHHMfKc5UE5SJcY2KfP3Nv2kwwrt",
  "key21": "3aL3b1zFryn44NBTuMKaVQmv1XNQJSD9jBktAVDjdpuWsYGyFPACLPTqWmfgy1FPJ9kJmoYtTXWci82jZX7Vv2V5",
  "key22": "4uzJw5LTQzCin6b3bb53SC95GBjgDtjzQ9DSmCTJ8i3UCqszcdBwK3sjjvS3ZDHRByHCjo9AFYpSB76gvRcogxxb",
  "key23": "3W94mKcL8QswUBX547KnKcS3d7kQpJx6P7U4Rii6CZV6RWABfW8qwxiBFXAmTbxmu6vng6iwMdEFFhUmVaKtU9NM",
  "key24": "2kojnsrscdyzTFvb22rkfmLFDHnXtX74qSxkY7u9mokc64kMiJVX6V3ZVezS46Yya1uWcQDXj5taFZ9J4xwxrknN",
  "key25": "5iRbr1VEzRQz1g56WwHUWN45Ptjw2cjXNVE6qMZNfNL75Yg1fVBhZJRneaaqRd7WNc7SjDMsB9KVEdyvVXu7pGxS",
  "key26": "4AtkSjgdwpc2FvnFBmhvKqRdN1y3YWL4c8m7Km8qkwsoBPwTLWVmTKocVef85JSqRNGD8WW9iZaZpGpNvPQoLAvV",
  "key27": "5L2SX3HKy1xaQe1CT8p9S7PMRWnCL2yuqNc1JAcH6UFiF4X1tqZHKhKLqdpKcJ7cpmZ9bwJYga9pSpiyMVuQN1HN"
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
