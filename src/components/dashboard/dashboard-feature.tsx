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
    "5RJL8ogNFBuLXVmrrXuef9gKvCQLLpjBuaiTxs8LJ6PKmhgCFnRqzKHRhovTzDZYyPw8NvADQChBguwwBzznxuQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLEhguar4661ghzdsNYBGatux23ehCH9GoV7mLg1wUSUE7HQuaa2NdwDBeHVZRnHP7evsqC9TT1Vc9f3GHzBAND",
  "key1": "w7AxEkdTFHHvxyZvT22ecA1qmjbF6tmFfAkhcYUXF5NxBUsghHy61KEbBUNtyAuYkf5kpD8L5ajotLh4LwLPrKV",
  "key2": "2NaTEq2jynys4MPtgk3wVKrQfrHtZqVkoxB4z5QYwAoWNZL8kTUZtrM1EkaPcvQZrLhWUD8ddZx8s4vsLK5isoTg",
  "key3": "5ybkWMi8owEKeQ1DikTqGBtxkai1FydeXBfsNacJbTs5TNC4SPxuJRMdrYe6cT2epdfbQgpvcWg6VeNsKgZhMg8u",
  "key4": "5ga3VL3wrzijRcEAFcS9ShZtf1GXte8dbyHqyAqPSDde6CXaAsk6VhY33ZnTFkQ8R83pejbGVTo9CatXEZLKVVfV",
  "key5": "5NNcXJrXj66NN6FMtAr7Vvw11TuGeetToXvT8bt5GhmeL6zxHt4WeVMXWcQ9qeQGxsJRnT9iDg6u7nzoFpKM3CGV",
  "key6": "3ZqK74rtKRrDkGnNLfGQs4fDfqTnLF3aH7Cy5ECoZSgZBMsar3rMyGmyxcAHJwJnkM5DcxJEZGnBvSE4WMmzsgTQ",
  "key7": "3HHnYCfYntZvwxKmUjiWu3ctp56RSrgrFeLaDJdSPhssVodySrYJCUT2ncKaJXmob8sBEKHz2HSvujKb1PoGRUoF",
  "key8": "5dLwjNj5ycns2y39RuSjgadY9gofSnUL9VLfyin9UCuaYwv7cHw38emLXB3uqsaVtN8WA4nJGLinZz1wYyJttpa2",
  "key9": "4T22urA5cPHM5HNmUV2GSe84YU9cM7ar8AKyzEatEo1cCDfk2qdMnmxrAaJEq42BtfvvFHprWZxeuqKsSWDmg6xG",
  "key10": "4JVJkw4zujhbfMMNqjhfTb9kog3dLvRYeXbwPEZyYSrb7RfxvzbSN5HthuFTCK6TqwGTeBAGVqsqs9EHAZpwinkJ",
  "key11": "64FRbwSPUyxKw3P6fjeu4fx4ZBuv3j6fzrwnZeTL8MZVLiz3SD1a7o6aEuapJfHeeg642foTVkXJNsJRfHYAxZhS",
  "key12": "AiBiVDwkTAYmozenuhchhiSeFwjP1JJxr3NtFqNfQJTpGFewtJWttmK7fbxcgBa8Cu4rTpfy3weAnnyqAyE3wrP",
  "key13": "44Ft7S5DddpKQmFqfgPxB6qMazjoBTeoZgWwoTPvB1WQvtGS8q5fpZkqKpXH3wjGuWRJuRx8mXDzgiMwg3ZBhXP",
  "key14": "4kEjSaQVd3AKvjGhaL4wjrjTWQAEedrYCX4qrt6rff111mu9xxQbSybrhd8WDW5hDbahcpUCB66PRChie9bxvdza",
  "key15": "2CaxepEyuprnXUHZcnDEeon4ABRiRr7zWRY2SWWibnsBdtJssQ6k8fiJnAhjKvU1SPkuxqTuB18MbUrYETaWqXuK",
  "key16": "2St13aMjjfJW3JrhwaeoFYBWpHVtemwoi2G7J3fb9abvyb75MUH2jnAvptuMK3nvBMvLXjffHUhw3qUoRLEpS37A",
  "key17": "4EckEcFDC4GkgoqRxssbYtzutK7p1PgGyZR2pRZ9Jqxd5YwwnE4AquTkzD7miyV4gtRVmH8bpRJc9W4g4cEEKFEn",
  "key18": "5Gyr3XBqC5Wrb1uETKYxADJaZ8PLhC9nRfXRoUXrGepS2C7JDct96AX3GcBnfwvRmoBV62PYzUPwVc5hhhqkooAW",
  "key19": "4UaZ8UNyQaHF2gtSVzR8jzEFWDZjH1UEA8TewCCXtNjLRc8fkccw1x32VFdL2dm4oZZXMXpgmk1eSMmC77wuduPt",
  "key20": "5sRfVUsftMysiV5N3vkJhVS8yAmeejb3cPshFpN7TgAkQKMRXGGAneX8zLT9VHuxtA8qV1y3YiKhM41E3bMSu5fB",
  "key21": "3fSjzEZbtVRHVBh8uhMWuroKt1CqmLmMheFnhp7bKjgwN9u4voNuVysmtNzVmvfRgEEdtE4EAkGDj2UfNvFz8QeT",
  "key22": "3jN54fbREPo7iYiPwCLNNLkJFPxF4FgQrBekzp34YB6JU7QfFkjxvssFHjNDbHbFPfEawGVVD5kGvCxk1St6yy3W",
  "key23": "5UBCe8FER3vmQ2sewX8bwmsddpKLhKkTsSQDH3eCASfJuBs8KwnH3gzRUkxHdF8xgwNiboGKA5hwBi9jBaSHfQEw",
  "key24": "3ST8XytFtzBXzaiqyaQYXKggHjAnRY31UjafYv2hpDjD8n7FapqztzUwVCnaQtU1hogPJe4XzhZm2fGmXuZRrUBu",
  "key25": "VAS79bBz9eRfZ9mGHZerBmLVwAgrw8VZPsgSKNunhUGXbGtFviqr8V9irhTB4nttnjtf6dLFCUhatCo13HZT2sz",
  "key26": "3WfVZyBjScCPpif33i4ZJigbNK5FiqpU2i958wPdsJR25BcRwjJJwbubdADkX5gimiriWuRSHvTgNsBG3ypovF1y",
  "key27": "6QMXUzXwuoqyNeYAvN7ZxKjTCENV8WT8WegDAvBaGDyi5wkkxL48S9NFSNBJp162evnFW1csGkLUVEzxQNuhUc8"
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
