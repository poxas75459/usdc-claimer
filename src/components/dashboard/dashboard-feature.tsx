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
    "65RkXxy2Gcez85CJdMgD4XVtyFqvTZrQJLn91LvpRDhVrpaXKUE3vZMY3ahVrG74qt6ystz8YzrCysbsbMCrZ7Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fB5baUgC3FtXAzZm8bTa9CeZfwygRCY5sVanJG3MGwkssozpPcTCyvriKeL2v1bccDdXxGvCnjf3TF5qg4aecMM",
  "key1": "5HHZPB8BVnBiqpV1fdgyimenUnGPwo69n9DUCkRkrKfwTgZDrEyGESP7jdsMaQoCkVZiCAmSD4XzaxZehaEivYb5",
  "key2": "3N32UH55EDkgazw1SCidPS78nEzowaikS78WRWa7829UhMer4JhR7wfPstDdZNqhsZqkqBXej8G1D61ZAyNjykyR",
  "key3": "3NHXwys14ipLVHLmvq62q3L6xuiyyqgLrBG2vNK2c6oW1khH1J8xn5sz1BKx22N4moHoNpGxZz14oS3JGAYWAhAX",
  "key4": "tp6TZRVQ8fo4GiUVp76XzS9FVFNqMiVSouXkWrwFKi9qENmik78wzYfN9XaUdnXQugq8MtN5tYfBiKytFvcTuK4",
  "key5": "2uSy6QTTd5Bjt9b4fZYnvGSWLGM1hXDeYeNtX2E8yunyNQmywWfXYBmrtybgbdgCEF36UwgzHVUUGQ1xQi9inw6N",
  "key6": "48mpfUceP6tbhxSZnSoHm9bJLsW43oAyXa7PD8pwx9AqVxyYZzQfua5J76hUrdcFzLM6S3LZQWnBRgMwuFJrrsLE",
  "key7": "4iJVMHqeAWnujVY9bfLXKp1S83qzFdustQ9o4tLEDrL7nEPvtw879LQgbBHbYyWscim6NKaTEvvdkRh4Tv9RYXFX",
  "key8": "5XLxF3nGAx3d6emwBBuBrtgnoaR6vjL7xsNWhvwkqLp7gCeTTTJfzAcrZF3BwmBmugKvgj5d2begpevV74aT9adK",
  "key9": "3Sk6SniHhzRRHsYafeVqbS78rz8z2et48CTo7QhYj583cGVw2zk2sUb4StH1fwLK7YNMe3AhQ4vuyM5xV5PbjtFb",
  "key10": "2tQHWV6orq3RfqGNshhV6dLsihCrKQyM8SdPiLnjeHFEeWPRvJqY4m7M24zznCR5TGEaMhF8vKtdV7dY6g5HX9km",
  "key11": "3DqqkNxnhZACUQu6cdmgFRo5rfGVYiKpoujwcf5fKn6SbqeP8gBXNJEsH7qQ8gSy7DnPgL2iZcuBKjVhQX5UtMUd",
  "key12": "26GqZfnwtzYzNQCkTiKvDHbXHCHYDnSun9TJuNyUvXXwaojFn7kyYSQ7dXftx7ftsJJKuKLJj6kZDQKMw69ZwEjz",
  "key13": "5JH4o2oYZGeVqA9vCbh41Fbd6j1fbZBbUFahneS5btNCmFXDczevfXHxXFknkE2ivcLxjnFK635PoxEsyTpH39hd",
  "key14": "5Dnc1y3BkqPV57gg5ATUuxjV2QwvQyMzpkmvzTb5Msz3ZBhLcnbqkjZedbvb7r1TM4NP9KuScfA9n1bqPbga4AKk",
  "key15": "642vzQx3jSETaQvpT47vEhNvPHhKhFsh99Gk48dKNDLQJDP2T5jRpTcqViRwZPT2tPUQvpcQUsosVeyMawShHuf5",
  "key16": "8L9S6sKqjRqyZy4CU1s44qpfHYvf2KSLXdnb8sUhTngFAkYwmKjKDPrea5aAAiT6kLN7n74wNAur6F1sWDUGGtw",
  "key17": "3qxjFn6hvP7p3MSiNyFyhVvFoynZaDCX5tMh89X5sFpSCbqUTQk9QFBuAUXTWoqE55khUBDtR5kRdiz2mAfJJoan",
  "key18": "4pTDD659v9D2T9d1tZWhnq2wzYSWuJ7re3yDVk2rFa6MZZb7b8BtKjNmj36QyhtMUQ5uZzTjUn62MyavHisKdTp6",
  "key19": "4deat9P1bJLzRBXnZX4tX6omPKDPzCZuLWpBXVUo3ozjX7ebfqxMxe1ebQdVb1S2iyTVE6hvjaDF27FV474mtqBF",
  "key20": "BmrAoxREJY7gywtixCVSpR1gU5nUPre73txRocvp1EUoPWH3g9M9iLoV67m7JNV8JmAPTxgJS8sjU4d5AmDyudj",
  "key21": "3SXCg2gMFf8k3rFA3NteEVLsLsiNAWohTkbSwfsgcrnt8cJQ5wFXaTc9nzBwddvVQjwYCK68qTvWCTQGUz2ibrSm",
  "key22": "2g6LeYeNJ6vBRHTB1yHxANigg4wsqa4vJu7hDfL84qGqsMWS1vqHvxqKj9Eu3jBcsLQRpyJwXFpzJv6f2vPw7GW9",
  "key23": "4GwA3ciXbv875tLk1ubeKCKzdghVSZpz3coNTuP33pxg3ti5m3zP9nVoyycu96Cd5hCWX7DA1nSpNttXHjdkdtZM",
  "key24": "2t4ZNG2iqEh8gGnaTxawTtcfgKkR4QuDdtumLCAGiNrtHwxHPktQF6VWncdH6Ly5UHvcFHwCWuH7h9Uz28jahK7L",
  "key25": "2hG12ZtnKRXYwAn7cujjzdva882uV26wiApGcau8REZGckPXWBpMZM2dtRRwGaQZ8jdzPr4rrBW2uGrT6Moc7Heq",
  "key26": "5ne2iUT688U8hZmNBaoPLHCuP4f5k5gre487kHrDxemvqNUo4otCHF2MVjBxpv5MEaThNGWmUnrQtuLBjRjtrn5w",
  "key27": "3V7QLr8PzZ5C4mp1mCC1JuDqf1fmByUz5bZ4pJhzmnNAU4onSmiQh3JTepaF1pXx5LRTzgF7qshTapeoQHCaJDYR",
  "key28": "wu7nZgimVfkAxSXdXshFxEGyU8K5hd7tzUKjSKwtk4htZ3KCQ1YYKPxnmJdFGehMSVwbkDAMrguYEGCD6MKFV4q"
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
