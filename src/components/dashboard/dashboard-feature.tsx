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
    "3yzwQUj1A47Ed9bVP5jfcT9GxjWwvZdrejhYiT5aQto3UWUvs8T2Qgh2SDmYgvYvaWEwQr3616nQoZS8yPejP1LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRNyqJfqzPQCQhjzWYg3NMu2Vn4jVDZZb1RUQaK7Fza8VzgRuZay97RULxtxZgCFyGtRWVYWMgKcZKK83NjNBAN",
  "key1": "5mQvrtaKa6YvSZKPM3atiQBjYf3NCMr4yHV1MABfiEUzfa8pUeFs8WGwCF7ahXoxCtwqDMhjkWo2yaB4KusmgxF2",
  "key2": "2fiBjq3TnpaLLzdiDAwNKYccxy5d8gfpATHqB5tMFkegYFvWSyzFxK9EymnRo3VXfvVnhHLyAiZQrZME7fE6phe2",
  "key3": "2VfADvQ9JYTs4bhzaR2m87Sc76VHfQCn9v84c8ZnYUBN2fqGuRZMkvdDwMCvAh4JoYWyyxG5DXbjBCTfAVQT5TQV",
  "key4": "3eryarvuBsBbJXkYuqf5JVyvakwNSRvVaNLt6W7mD3M7s6WdJhz6cnnJzAk4ykkY1UAr9W4FPhJ6uGDuL8hG3pSv",
  "key5": "59WZDcXFbkJZBoi2s75E6zgck9QMP4awdfJGZQnu1QgRA4EU1GQZArNVGCNhkzG7sNuFEYLMC8EBNckYrVcXc1D8",
  "key6": "56nyFtyPJmHJvG6in6FCFWZqW2SAckq14QBQJb8TruZeJrjb6XVvh7BefyHuPNMDSayvRDkr4cZBBhffJYsDKDRq",
  "key7": "4PLCRsjpb8o1LR2yJoxUG9oyvkgjompPyY6PFb3NAMyTJjnHdRJJa2Bdmn8tQxgc66QMTUko8paGYH2wwRZaRYca",
  "key8": "4xidy2pZVU8guspf1PipGBxveJ5rP7Pd7d4eN1ycWtA7eNsCSEh8tUMf8YmTwAfJCS4J1jB3cNDe5q8dBCLPeHrJ",
  "key9": "3sMS3ysFzJcQrj6C1MZrBFE6jBzFHBEU4DCzjPE2HU8aoMTbpLZkiMdyYi9TF2uJS4xw76BYEgJA8CzsHgmzrALj",
  "key10": "EVcX4YVXdL7iBFF6Jq6bteTHvGAb3FjyGsiqAZ2y6gA4j2HrgQTHsdTHiyEqE7RYv616EbDQSkCZsuAMiuWPVuY",
  "key11": "4XxnSKvuakScajYDBjZX522CArCDVVVTjMVtgsVm9mfekJGoos38eE4xERuiT8YRUBXJLpBXT54kBqrsevofMB9q",
  "key12": "43V5KzEc19Y23puWar9ZeXizHRzb4nc3XuioNg9YHkgToU1RBXXHMWusAUgGQhdkSc58YZqVrFCHi5PJn68n3ZB8",
  "key13": "32Ku8e4NCqGtZTigC2BgqKJmVwTJ53P1P2krqBvcgQkrprM6hUfTFY44yUq6g4qX6Wf2ag24YoiVXQPGj6XXv59U",
  "key14": "5ndAxSGF166bMbgLK1G85GXgJCS6e9MNkn9rNKJ75dVuFCQ1WjY7DCUyf7DREsNGTALbDAKgXNQUPRdeHv7Zkmmy",
  "key15": "5ZPVfdR1iLKVqaTpMXtCQUv5rTdGmrADP3PEsynaiHvegZj1gvv2mtAny38QRLw4soK1XLdTqvGSs5Y95cGvCwAw",
  "key16": "4GHJexwAU4HCko4giKveVx92Hbe3xLpzWdFYN9SqSGPbdW58Uo8cBWTeVVA6mbwbHpM2ShCwe4NmFwoStXuz2dtx",
  "key17": "3Q5HxPHxiT9jmMJdcp679SxTGndjNACXWFtBZJV7cSYsLq2BKc28d88BgHqj1MdkVWz6SjnYxozTfaDejjhtdtwt",
  "key18": "4FNLAZH9Lk71vLfL2s1vwwH2Ts17UrTAMwmbvTRqkwBkABNBuLF1PjiSitJnLocghYy54df8uhzfbnQ5drKXREtm",
  "key19": "YNsLfHFg6YbZ9748n4DVDXatUEeqxCDQZdj2r18WuwXmLuwPqyEiLzs4jmubr74wMwaNvLWr2St5WrUYLtrtPJ1",
  "key20": "35DpxbHk6Kvwcm87uZnBqZNPw9njUTeTsdePyEKpxisNVdCKe4AudBTv5GzKy5qxgtcGMKnzdTgVEUjhsbjyHG3d",
  "key21": "3J4D1xnf3kdGNYyurg6AHSuAWNJAaoTJG2Xa9imbdMn8PPyMnTekAdy516Fv9FkpBGY9chc7MCAKqawjFmLTRma7",
  "key22": "2C4RymPZ9NoVpuWMqs4hCKWdf2Z9RjUU6ftV85mmPJ7KpCXdgwzFPx7FigJUAaCV7RzQHuWHdyFErYckQohhXKkS",
  "key23": "2YKtN3BjXdaAGntZ3EaLyvMnuzuhdCe3K9SHiW1z9oFMDXVC8GgWLqhBmbe4ej6KZzXSXDZ4N8H5jyGJUZJaouRS",
  "key24": "2VmY5PhLgkhigDtXnEe83Lwvg9SKEgWLW3niJV38dhddYdR9eA9vUKff5RTdEGPr2c8j3CpouichBUHAHsrYB2xx",
  "key25": "51H2MbzyXSeuQCnsUhiqVSQJfJ1HrpKqZL6giMpiFkgSsFgRdLoDhBgKeiPausFBnQ9tCNcotK4RtGGF6KKm3uBR",
  "key26": "52drzUG23RJe3QW46r4bKJp8kHztcsSyKRp3zzaoTctGqxLUAJzoGUHQcujRUyiemCjsDFopNbZ4Vehj1hJEd8vQ",
  "key27": "5ATY9Y5HvREf6dBCCcokxAYaodbzeM58RUKCDcU5mCXGJ5KuM5jU4uAzWNBgoN55Eie8rHnPUB7P2RXmJqcsPUjr",
  "key28": "fbVvYSYtz9ios79SqmEdrU3fG2CJbxjdFj4XZwNiVEJdKbWhm85mSTiXHpZFJfyBvSddDi9j3LqpRMdUFxgBbNi",
  "key29": "VtafBiDbggGtnEDT8rdkCxQtanXCLkGpPvpUVZA6qGqg3v1ES92PKn99cJr6wzcb3GZ9XeLpe8jZEHoJMgExym8"
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
