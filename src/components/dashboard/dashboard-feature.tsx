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
    "3swwCYwRzbGYFV9URY1o6ynJnrjmShGPX3UzZqGnXjhzQ5eM9716XTk8P4VFvBVu4wJGe6755UkyAx8o9fn5YT4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u16W4yYQGaPCtRDLM8yaYb8BruGu1BgDS37WXA4bJomr7BYS1hUzg7KXnBk54zD9zhkNbDfCvmye5LSbQMBHxRR",
  "key1": "2EwRf7sUy16ZMVZc46frZbCteHq11aK2E3oFndhEZ4r987D28AZFUspahXRCzuTd23awABMcaa57ePVRivLmesSk",
  "key2": "2suNdFeUU6pJbyFByzFKn3j1mLwJ4RRnU3wRzx2aDeMBjyj1FuvWB84aAp7evUcDQ9HJV1N5Y8siaRMxbf7zmpBa",
  "key3": "5C5ZmmGuib5gM5USU84fzodpaCSQdfVLDQRT9eNfGQZUCST5Jx4NFsvTBotxDZYzoyqdcE6aXJsAWWQSqNrcG1Xd",
  "key4": "23nxM5k2PpZ658anunM2zZZ5gV5MgNo5MLwmjZ41GixEmysVoptB7irvSSNyN2p4fNCHroNDT9HdxusjMBCbsiAa",
  "key5": "5M7dBMVJL8SvtoBxVKC5s8ULpmAHeyAS5XZmqcvaFyTGiFHp8ytHUp4vBy5KoTbXVugMToTdcaXtN6oshConYyF2",
  "key6": "49Dxwt4pqUbtmRmhVWqHtP4wHMkoKR94zXBy43TxunxTrDNrdAYcKSfUXbsTQypj2KLtkdT57HvdRxYPWrJ7eqnU",
  "key7": "4aQnAzKSk4dMKHH8hA8qHMmrNnWbyKTz3Rfj3MXWztd6XKYWsaZGzc9TmeiYYhEbb6tEwC9QzyhckdwA6s7gjfe2",
  "key8": "SmzaKFHcZ7ZzWMSZF1moxbQikrCJzTPARNGo5DNrasLQTQiThBsdr6PVNMK7d6HgQsgMLMYCBfGAXzu99q71T3y",
  "key9": "5iR8Drh1BgKQTMc11cTvBbrw6VNkQiYkBEAaXGeioZraqUuA5Xhmd1A5ZPJaLT9ZWEkjHv2BDw2UD3Hvkk1w5Dih",
  "key10": "2sQEQZCw4qGnGPQgnYpamAyVEZk3Ss3Czt4yQLW6NroPB76a6EZp98QfeuCKW8z4VNZ4EzdYKZvxejZWq4YQMGbc",
  "key11": "3hNhHp3aCr8FTjLwYmJDEupFdXRvUZJrV6NyXP5fq6ffiWRSC6DMGUUmxnJaUXwPDwuEsYj3DDRCrQBxzs4dqweK",
  "key12": "3jYttr7zckTwaQ9apm8GTNRTTdAFV6WpZ757DAiZVPRdv2K7Hqgq8dRgSn4cfoi4jocak5tQ1TniEP7Rk6AQY7xf",
  "key13": "4XEdSHR5j9HpWKxgDsZk18UAM8damGBtF65sEL5sjwBnwBjfBv6EopnsG8HctMeZDeBDk9LVb7p6Bh7rv2BABvSo",
  "key14": "2y7tWnXgVArouYFaEfRWjtLPAkQpnFRf6vP2udBn9S4eLFo47jo41Yx41tBheWT8swYddtWJgYKdeJtQyfQxDnki",
  "key15": "2Mu9fhkqayigHt8JhKnvwFcFc9m7yLTo7cDJ1LEDjrEEHLasSEgw1zZhvBaFRD9UstXK7FgffV2zeHsN6TbPJ7Qh",
  "key16": "5B6vis2cWGtn8JZudkMr8fU4AYiQnK37ah5pEbXLXhQuRXjpsf1aQEaqEwcZT97LQZGDdB8RAhwXLwthuDDY4rpF",
  "key17": "5SpxLpj2mssx8MHWchZkCzXixdkjt7Arw7fpPZ3ZnuTNGNHrN9xH45gnENVatmKZqrge2Vecmdr2Y5muSDdT8Xvz",
  "key18": "3fiFnwBoSb2a3uozMLxdP3wD7WxVyQ6v9MabXLrdzThDxpMzG1zhZg9CbmWQRjDubgtvQ7FiEeYKjXRuEcLLCrVM",
  "key19": "67Cn5Uv1iX9iY8dmBAwEE6i3bYfD5VCk2QjP2scifN915zDVaAGEm75Cw5cpZYU8GbfCxTfs1W7HMzksYyK5SGFc",
  "key20": "2xxhrsgJMbtqk8yj2tCTUDrUvHZpURE6GpQs9SdAdq6yPN13Mi4DqLmDTXSsDKrPpi2Ux7jyskdizQGUKntG9YAe",
  "key21": "2PLoar7rCKwetsK1svCsTukg5hYFEft3Qw4X4FNWrhG6j5pLus8GJBNYwd8xXa6uewRgsDmM9byMovp4UervkoXM",
  "key22": "5xqTH9wWW88HVoyxfDY5td8MCYBW9hCnKA7Tv4qkfT9j27uyeiHZE13t5cE41htSAZFHxwVSDSZfqjFMfrPWwrN6",
  "key23": "3tf3JC2YU5BnUtuvwcozLtVhz5iNdfbSvJQ75dxKFqUpHeyCACXCQPUeHL7M8ovS6rVB5rCPU776kY5TTYJSwzp3",
  "key24": "23BvcY7EHp1XwxNYzATD3MwtoFpfDbd3eWQiz2FhQD8K6B942aRXMVUdKofKyzMV6RJCvD8qn6wb8pq1atkEP4pU",
  "key25": "sdtJkonxuJBAYRqU1aQtJXq18TU7JTZNdcJXDy9pVDnKcxuV4DDttSARcPS9Z4s6eAHoKjuposY3twawX6qH4DQ",
  "key26": "3UWpEr1E9WwEFokudPKm9gKC93TWbFfkmSdW77c47NAjdkk6m5zi8muGCfFRgFfW55MigkRhQ1jZ4sKBQrcTZKja",
  "key27": "3z3nwHbSTKXPenUcvKtSdvXYDwk5mvrEiJcN2tHBKoHpvyP8tL14oBPZKvCe5dP269T1j5GdmMp7W5jjqVaiWfVd",
  "key28": "5LQ8bmMTcT6MqbEJvLWS8A8V12vD7ndDMEftfkszFThThnfa6uPjg4NcyJUiJ8p2dMgTKzVDsaKLSpnYLaxA6d9C",
  "key29": "BEdciM2CFqiz66n4ZyQCB97J8fAJuW4RtovTc2Z6LhBZhrmtVGs1kmJyYusCVxc46Qd3HNs8b4RigUTFJG7K3Nz"
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
