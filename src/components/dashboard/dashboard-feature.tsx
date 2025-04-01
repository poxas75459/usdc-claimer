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
    "Cj1X5FSp5Pv1mi6W7S5daorqkJfDpuWK7ewTJwsVMmipaKxVdGQGf77PgdEmuFov4uD7DK1Q79BQj65TvqtLj1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPcerDhAmeU7ChQUSzxA7aombawpv6WuKU45CfHhwNWHS1iDG3ratpyGzvHjf2n6nLyjGcfTdQG8jPV3RMYQF39",
  "key1": "wjqyJfAawMw3UfiS4mXR2XnmduZ6sZqdh3Lj5jVgZza8PiVvP9kT57nHp3o2VHTCKr1dyS1WpbLuVwVLNpBNTgw",
  "key2": "279EYG7uVbGrBHzKtXZzF82zYqgAbHR1116AgW6HwRVHWqSUVtVBTQLER7s756uD3gyAScFPAr5Y6EMUfzvm1XnC",
  "key3": "zFYo6cfdAY4G6qczEpV1qbH86ccDLarCkj2da7y1xUYmWNp9dJ9ShPE5CLGRQhZ7VtHadNKoCNBXykyQs7PkHws",
  "key4": "62MiZvd7432KFAqQCH7vViL7RLqxfUoACAae1B1xT7fJckvFycSwRfQXr3uuD7jG25Mq4XJKzpqkEgFkEs7Bq8j8",
  "key5": "672zxg9Z6SZkEKeEfnfTt7ewdSX9ABuK93L3DQUyujXtN7P4NiEpnvVvKirCw3CVMi5NfC6FqDk2DUx4LDFtbbwE",
  "key6": "2PQmB9hfFj5pVKU8wJcA6sbv3dCH12bBHWBExn6SuGukNLHMfxZ4ofFPs1eQGCk16mXr7YrknRMdhaeu6CqbTQW2",
  "key7": "5pLT5hi6eHo421sKf2wfnZc4iRicfkxn5CYKRpVNbboFTWVeaod1oCPmpMAbQitXj6DJrK6CR7UXcWXtVae1SYZv",
  "key8": "5sNh4GiWAZ8yUutUikTiNTXhCio87gKasRytsCHaAGhHvzbAwmW1Rbxencbpb48iDrt5sAypcJ2tkLhSkWALTqnL",
  "key9": "4r7t2jDpqwKAq46P96M7SXgWhKZqLiNrdkJQWp5R61JtFzto4uSDQKuwEAo9vj6sSGjpzr95uxeo3rD3DyGbHsyu",
  "key10": "UMPm5PqLwSsm8qRew1roFwxmjx6rRQ3G2m2MTrd8hSLTBXUhrEH38t1iWdE5rKQj26JknFi2B1JG3BkPvagZoDG",
  "key11": "447gHgnKLiX3LRCsMiL7DFyB5tRBd86F4KyiXEyu5AwYsd3EBUtivZZcVpQX3RX137eLu8DVfvc153pDhh5KRrw8",
  "key12": "5EyZP9Dm8XrftczUNt8qjiXtfE9UV92uKT8xUJEV9PyvjTzwmg7DvbTx4BhZQZec4mZfzZaZnX8x468C85Hu5uJ6",
  "key13": "2NrGwaxg5DEoKQuV16TLyAGNuRC9Zg9rSbQJ9sJrxY6TepqJeZWg2HD6F6vzemiXYjFWEqysNEnAVBuEyGQUn85K",
  "key14": "4hFS3sp5dyQxHNg19iFWvWp9awAKLCrokKdgJMeKmbwA4bkAADEsd1VHVsQ6JYANYnRm3LKJF4ar3Eg2Q716dp8d",
  "key15": "52Jvgf3E1kJregtnWG9WFv58k8DCdJ9YEMqrpYd6GRpnx9x4QEdeWXW4FTr9NVBuK9rHQH2UFKX2ahAu5zAByuMx",
  "key16": "53Cm2q6Gweyc91CbdrYZFX2DxQc1XrnDQVrTzbM7K4Ko5HMUHKjbeTyr1kYTPtoJuKyT3v3xFXkh91YiWD1cyhpq",
  "key17": "3Xh5KnJUmzYaXKYFfbt2SaWHCwLPrWqz7LZY3u1RwjfJbcWe3nFrvWmozVChMJgipE1sK1uZX1z2rau82TNJAFVV",
  "key18": "2wxpQdMP92xYQ9Jd6QpEXFerzHnrg9uzpvkWPjawT4GgGt9KoaetoFmXGWJWLBsk8TnGS5nb8xnUqfGyUNqhLM7e",
  "key19": "52V9G68VMKpnUyuVeLdQFodRBxdVtvbaXtXocmqi2kc9KVGiwucruoakg1nnCuxHHJhN88AfG5so7KZoFqrnb6HK",
  "key20": "2KCCdoAyW6LUd9CC74bmaUfmN3e3niKF8Gu8hF94ArMvKVEeUN945iXTZASmDzkxNrJYZ2oAtsup45YqSDMcz4LJ",
  "key21": "jZSWrZLnvwBGLHsGbwXMAUr4NCAStotY19PQdmZKUYJZupriCVP7G3FHmBS2ysm8wGWjM6KQqZpcxuZjRGm9cLC",
  "key22": "2YwG1FSyxkckSxbi2LtfjR3yf2Wj5pK5rzgTt5MeYYJZR4ThzWwivMLa2HEWziEmd8AikBNEFVCMgdyfqTM3Tgji",
  "key23": "5td6juhv1dQbBnJtXmN5iviMEzSs4bFSDoFj6FNVwXzUQtVv66qtspU8Uq6HV3oUcx7kdJGaGwCBKQG3zaxQJZaN",
  "key24": "5ZM8FYMGYzwMrz5Sa1cQRujdLqdBP88Uzu2TY57894TSCXF2JX2oCHCgP6PqJpFMoxBJR8aNhhgBhH55ruzy9svq",
  "key25": "4mHkpF1PB9QPBAAigCGzrVkFpkSNuUVZhBZXP7xLsePgBrgcCWfbdtMVyRhtxLkStKKL8s4jmWFkVyV6TS7i4nMo",
  "key26": "2BgDTEjtyeZBAd64ndTa4ELqfXuFqzsQRjc55yDpGkJx3sbXGZ7TAqKnuYTS5SY2iBjgqRMp2QXnXShhrAtZu5Hu",
  "key27": "3dPK4fKRgKc68hp1YD8TSiMCwbKrXf8x7JsPUPvLQPCLkcfkBMxHQKLJUB1jy5rWpFNaSG2A6yMrTVzecEGKx4oV",
  "key28": "5xskoNHtxAwvSgBiP3Ymeeap88SenQYrGjyZkDERBrB4uZ2jJBB28BNY7iqRFXjnPEkY7h3RiXA5Au7LP5w2tY1t",
  "key29": "43S8rJngC4TZ8kYxrWEHbibE4R5PNQwMwcTnai1SMU4YFs9P4gyyg749URQssTmscF99e3eHhuMsNYKaMriwTQSa",
  "key30": "pfEzSyj2Q2RCZkTteTwf72bRV1ym3YjN6kC3pFa8vPmtNCA3GXsxGqcBNnmCu1jHn3teavZFmASMj3nMM2bfqDg",
  "key31": "3bYVKo1vHfjvrHb46hYiNcGraUyHam5uiKvsz3vnQvHRK1uGauitKszsw6tTZu5mueqeJaMSHBC3nYXPcjG3zMvf",
  "key32": "4J4Bmne6ehWvUrSZ8Q6xAXn4tL8dAeuuJ8h3gmwjrqYtd577z9ED4dJkvSxYNGkExfBrnyxgSNdzHxib9ykfuE8h",
  "key33": "67cHt4UNXdojoJyJ3wHc4gGw9XS656NY7o9jQtG6QhKJbSdw6kaq6g1uKrPGqPjcMXKka9sSPZnAv8HGz9aeBT89"
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
