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
    "3wUYrtNTsPYy835A6vEF6A9ZQQCcVCAMoTqCoR2FXNVwdipRZAcUfJDwkcLFYdDDQ8r7ZnFjyee6ApRwCdaK62ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xt23jCCLUfC7NpgMfWoz9rZNLznQpodYxhxLpYdRWG24zrh6vuUhgJS1qwsZUYXRBQYrWxzsf15GAj7uq3upL8s",
  "key1": "3o6gKJhoyEKtU5BSrFMgpX7jH2EUfCxYNSqMKpi6NtJW1AVh3sQ2Dn9XP1vd2A8qKeRU4Nhsq5zqUPua57uHmkRu",
  "key2": "3PDv92ASRnwpP3pwU93pRKa6N9AwgYVZitMZDC9FaK6T8hwbNbZasy5phQyx5D8McqSMsfZ89Gmm5M262jPReo99",
  "key3": "3MW8DGeWdTQkz2t3mbYwK1o8wXs9VX5KxYUqVeix7oem4LnbJHjcB3GKzrcNLSvEHyfSaT9pbWUn3JkYBcGXVSY7",
  "key4": "5kDrUPBgWDfTNYpTmq3jTqkbWjPAw8Y9VpaoJFKpfUZu32RhV8AqXjxRBPVoLqtzgkQV4gHrDadrjHU2vx5DrUcB",
  "key5": "3QVhKcP1pF6C9FyB26yBGxo7iBmrPbwyvcV38TYV1VKznUYBzWu8MKPrj7WBFcshnLXcM7jcHDX6J6f4BWVDVWfw",
  "key6": "5eG5ZvEZgzS2J54SQohvawFqjoXBYTNWvjzrL9rejhMr9ewvc33pp4cmBB7veDngXqGvkoobAeuNj2RNMhvZCQbt",
  "key7": "2ZysZFE4AzbnjLgPpfMZA6B5hFEvqbPsHHNumtbUn4ownDhkkwrC3QCx6mvWXWHjBNwGQNgomQsPFcgsTsg1D2xf",
  "key8": "fT9TyYhjDPuVRxuRnJ9DmYziKV6fQXfG5w1QakndZG4e45MSQz8NX5k1iuYSdwJJmCJkmbH1b9MsV85NUA4RP81",
  "key9": "5xx5gXSBsFHJQormEYZbjiWa1G2X2cqH2X65U7ZpFoNDdsnLsLxm8EKqbU84zs4XX28YxuJ1ttMtRupDpfCEWLBf",
  "key10": "2gpU4GvFffM922mjX4pdn6WPym9VkFG9ejwV8y3qPvhX36e5SyxE9hhLxnsEP5vtXSRfV5mLpkwmF6nUoEEQh5QG",
  "key11": "4TbYFPxGKgfjDjNcF5YgNXm2wSBb3tbExHU5tuEwxWxAgBBf9gRbdg7C6Y5TSYJzz29Tr9qr8Xhk59cqMrppKMYn",
  "key12": "288HJsWMErNghnGUvc8DuERViLzj27qtEqBSVReA2J6wPamy1ehDU944mopT4H8XL7hS2QEzpNpCCfFMaDzmH9Pr",
  "key13": "2RAVXrC1zNLUN41AE3TAx7WW7L76aXjaKPqB51m2CFXezqMNXX3R94b9W7QmwrP91KDwrYkowhBb6quNphvefTKR",
  "key14": "4RKVKpFhq9jBDjMaFrLzjrVB8Bn5Nygs96tzEioK6o84st9EjsGSUf3ffY4hhZT39X8jDmU3RDmtK9Jhp22k5Uq7",
  "key15": "4ncG7vn7H3SVkXVoaiUkVWqTsMGo6f7uGTqGR7utX9fe1pNwW17kxvhPQ37wujeAkJY1Nr2EMX3XorJapQrPMokz",
  "key16": "5Jg3ybjGk2BZsHVr93b4CBDuD5wF5JLgp11xqEFMQ7k5EU85rMtDpQH8aNMZuqxyP2wP1aE72RWheUWLJG12P7TT",
  "key17": "3ioMcZrf7rYBwRfBAPVCGRKu7i3GTeKiP7i5jcwjkX66bQioNCcSP7oauW2gifHnaniTFhFp3m8reseuqm7CjxFf",
  "key18": "52NaLAkapPapBizRrkmTQTAuH3SCJgr4pQbsrb5CY25VSVL3ye4vvbvidGRtGNgzsekkvSZgJxf8vuSARty6ej2H",
  "key19": "22KMcrbEfoNgxeNie5E8Fsw7KGWGXLBNNmoLmDYsY5ngtEhqdry3ytdKjmdXm3Nxs3BHjSpN1ag8VqK6Go4zXhQT",
  "key20": "63eb9S96NecfAX12aMWpkFi1TKvWw3WkqAEj2qqvq5zP6zmSaGhixn8X23FQewdQAxGhdHKwZdWUC1garx2suyMJ",
  "key21": "3aVHVtzd1Sv76de1BinJxsts8Shj4s2YEBntmy7K2ecw7Uz1V4DyKte4kEK2DimFkarjoAZjnmBf6ARMKu7KvLzH",
  "key22": "34Frnwj8PD4kDRkYAo2V49c9ctyLaiS8SWPrKs5sndnGMzZj2yUr14uzSu3BvZ6Fnce819dzz4CFvAAJaTUfgo7i",
  "key23": "3yYy6Wvc5HuK7CUjEVRHNWKT6twKSh3C9aEEfGNPjxoQqbgArz56jxZq3t772fLrtT9dwSjBATGFuFAyyNC1xENd",
  "key24": "4VBDfRZ1xtdj11ZZQ4G5eQLUvKUy5jcK4bBTKH6etd8bjPKenDns3GNkbtqVUvL9Bwt1NMvxEopuxJJ1PXdm5ZeD",
  "key25": "4z5JKs7k5Nti4qCobye2hiaNFtUmPNcCumUHZCfdBAhV59FhJpPoLnNFgwCnF2MihRtpuqVPFzuvuAPmV51pW2Au",
  "key26": "4Jmpb64b9frQApV95qcrBCx7N76inPSB7yP3LMDN7vo6JXtcfiepDjer8syFL2tcGmX9fjryDqf7S17unWv2tkf5",
  "key27": "63Dpn2MnJQQFAF3MSfMj3L2XFfjqyVRQbwj48sxi3F4CpBdUHPEJBrN8N2QXYiibwtj1m1voA6XivQy2fRY44BAt",
  "key28": "3zjb1F8REKuHP4CG7rBn3LvkGJzSYPVeELpbjfiKijhe3UKXjzMr1GESkcyyt5sZFkdJ4mCDprb9XXC1vkHDot8u",
  "key29": "5FhtDcunyTFNYxiVTsXxTmGEwbDEbay7BVVsqhLEgRFc4zjXXzVGTSPVi11BECp1Axgnr9yQmWY8wyESxBh8qKkf",
  "key30": "3F8K4Fj8tv4MNaW6XGD5giC1eczAJR4PejBXqAeaNULQRWd3e8yNRVaawZTrY3FUhR9LioNELvvWjsQeR8QY8Y5E",
  "key31": "4QvEz8ErhdYoMX2uZJgp7mTdNYU6HMt2WnSBFpvGA6J8xKiZXjdbXi77hKt7csS8qr2VCP9cV93HE2GxVt5TnhmZ",
  "key32": "ZgUxCpcA7kdnPGxwEvgHzk8L4d8TnjTSbkDYPGLe1s2tLM8Ln7G4Qt7TWv5sf3dZqg5vB2TVuaMXCHT2TNTmLhN",
  "key33": "2uKHyiuyw6HtDTDNDxcE6mXs9K98eBArPo6E2MamDeMBYgEkxz7pPqXZE9a9hL9fmrLM6MBS7zskHcs7WouEzPFN",
  "key34": "YuKAi2cDmsz7TgUNP63MkBgaB32KfwgrYAbDqurFrw4U2XGnbV4ucntRk6MJQpsySoaPK5ktzvjyo3CyPTb7NGy",
  "key35": "2ZP3sr1Mpf3uo2obdgZ3Gm7QqaAaoTu2sx8QCWe6JpMRenzrbMXYg4zYu4oHzGW8Gkdxe6Pc14XwCwWwdUwQE8VT",
  "key36": "4SeXSUEQ5NVHGEzVbwdSUiYMkpN1VC9TYSuCUKaH1p6Ye8z7ybr8dwcxH8CVhvU4ZXix1EuA4JSsggGk3dYyJ4Rr",
  "key37": "54muFbJhXhLygY9vQst1DDoZpgZiG7RigWZzPRgaDv8ZuDpwqR6VxV3KjVHth6dLeRUphZDkfPG9ZAt6Y4iwJJb6",
  "key38": "2KmFpwSV2ZMN87YxsK61tLc7DkVsm7UUrQehKvL8kgjZTBYfgQqFQXQdNRKqJYYWgh1V5ci6neSD2GRU81TRjUfX",
  "key39": "2FHnXbN8UNFdRiBHtE3TBSdT7GnuKAPJLGZ4xgLTPsMPU7uP32P76kzhYspNZHuVmC7Tu7ihjD4KuKjttBPQPR5M",
  "key40": "3iJVhnE6Nz7La9kjJAFpFrQrcGJQKwk6gYMRa94XDp8Y4NMpDoHVPyWXZZnFjR8M3nDnqdBfMt2xRv8QX1sGGJKz",
  "key41": "5JrJXkvDE4z6RV8YoRafQF5JxrSFiDdJB1fpyZuGdURmtrGrS9C3D93QVesCctHgCnupkxjoDnSxsfTVbENBtZ4a",
  "key42": "3jetiMQ71UxXwJYxQ3j5TYANPXTU1R2H85C5AksP9CKSvXmDGDDnjwXQKGZKK4AQjXn15nYy55k2vwmtfSqYMe5B",
  "key43": "38wjqdNLLN1M8B3c3EE5LUpK8Ez6xBqbBJGT9gZgupWjmNvCkydds1TRKt3TMhnrSdXQLzQLpfZqpwc3CqiqiDjA",
  "key44": "3RLxrpdcBVkR8nsbF6YptzEdsJifBVLyVmypMmfYvdwZLgpksLkzDBo2mk78UeQ6LRCFMFAuiVuURv86JrrcaUkb",
  "key45": "3gQE55LC9fwmC2iL8RkhHFJ1pzrkz9C7KjnpvUkjNKDtTEkqZsUEBrEm1AryCt7XTVNPCL1SjKvX3Tms7u8RwrTu",
  "key46": "5Ddk7kHj6RP3BW8vN6Z5CFn72r87N83Bxzw1LunKngErS16yWnuJ5UxNab15cxHXTmWG6ZmvM9d511Q8LLap94hA",
  "key47": "WmGWhU8yyU5Q56JRj5tpb5AknZDLtrpsCdGKZ42MR9WfkzX6pHfhgywj7UCBEa3vsC3NP9MyfAyz6b3dt1pg65N"
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
