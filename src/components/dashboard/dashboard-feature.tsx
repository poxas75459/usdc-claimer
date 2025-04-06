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
    "9CTraWi7gyKw5gw3wArSbtGGyk9LGkKTqQbZh9kKXZqBHfXWFqH5xkfbjy8GEEX4F6Z64PDz3b6Ydn7HHhqqt2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62b31YPGEgLRj5R59Fjp5b8iGthf7JSeyLyK19vQn4miQnmZ4BJrP5HMvjAnvZaG7n8J4uhdR2UkJiSDPAZwij8M",
  "key1": "5TJq7DUgbJBXRyZspaxPfJsAKnbqaHNjBWh5B4KgLJYt4ctcDe9QxUM3TJA5ue4nA2Md6SnkovJ4L3MqwTRGCzHf",
  "key2": "4kP6B1LAGrSK3o5V4E9zADpFjReJLfhmsrKVKZw2bNpjAwVoWgKgBehHDc6e7rFSRa6fohfBSNsVRn8FXTAVDFU",
  "key3": "3UJk3SrQkk1aY7JoEgpuXTL1TEXBn2q4VPifJgwBGj9gcZ1ogoweav6JtUeoM9k4FtDqqH6PSXkbWZoB7oaaXE7E",
  "key4": "2pghBMXr5eQWFfpTKm9HaYYjEBswb3Wm7b2YBQzK3SVbBhZqvkM8KyomwB3KPreEH5syxnZgFFyzzmm6uXmDgRVp",
  "key5": "2HKWJCDEkBjc2JD5WTufyPmZsiXJhGDEUqEFnWA8xCwNQU4G7ShNdH7GQ7w37eGbfqZFaNRXUW1JttsFLY5RUzCj",
  "key6": "2j4rTMJbfZvLaZT3G5hR8x8cDPvTU8mnmKx87ZBeZBbHWowA7qyh9XwC8Z3xa36wwVaKJotEXE9fuLU67RQj6fYk",
  "key7": "2bN3i57BF6Hg7XyJAhmRAFZ29SJnu2fKtGJR3vVNZnjpU69ifNdenEiTrT6gPNKD82oWN1NaSfCVCKP34BjNEAq1",
  "key8": "23cQwrZ64KNQJ4RAJkAd5MJ3tcsnuRwtihLRLwWeyPFGdAuJnSD1ZP3EQY9Vx6EekUHKn1uWRSj7czSfH1BDiLeQ",
  "key9": "4ps2zwQkf3y4aAppMYK7q1TC4aWpBMu3kR3L8knEACniCi2qyUfPKFrzrBinsF4AcXc4hGc5evePZoCbAi7YYTHi",
  "key10": "Tq3ksTr2phKnBLJLrofrtp749NgF3dUtLTfekHFTz7QEreztV1rCuTfASAGd5w55E9u4SWCGaQYzKRg9CeA6Q6c",
  "key11": "3epvYrZTZ5HJPV94B98f46hpBv66ePL1G9bWWgZ42UFZjHJ383qeMz3NFZfsu256RRA3Zy6deDkYktuPwYYuuJjK",
  "key12": "3Ts4Ajsu1b93Gnk9vPEpzF5eaTtZkvp9yB6nMwRKrjjHTGgxWYer5FCV9epFvF5xhjbgETHEc1tKPpTePqxgMCeu",
  "key13": "3uJQRVuBm5ZRNVWe1EqC44kVuuJaZn2T7hNMK4cwVRHd4LkLQoS2X8yEYbDvtzvYUUQuDX5YbCMRYQ5RmBZwiiVT",
  "key14": "3LFRVq8EqPFCqzCcQfJ9NqS1D7CRLBzNLQj5G83QvmP8U6Jr5KTGR9ePooMhbh8dZbknji3q9HGE6YLavh6qbJ6E",
  "key15": "pEDpAQKjAL3Kw8Gr1NWxC5m5QfzkjjW5N9YjZpbxTX2RXtcy7VTPkVdU8o3zUaiJhfNrQqD2hq4xNk8x2UAfXJA",
  "key16": "Hpm2GYZ6dWdMr3jSHdjB1M4kLyzfwC7iu4W7RgkKZoZSq73qNqMgqepzscKSktaXXMM5nxcLCYirGnjwm5bPwia",
  "key17": "2BTFFN7SuGaifhoxcQj3M4nxPwtMgTthmzXeVsCoZ16n1FMB81kd9diBfsHWPQU3o7N3hSvWnSUbjVktcvz5xhCB",
  "key18": "32RbYmKqvM4CTXk9Xko7LnE4TvRQ2HPLTkc3ADcpeb3CkQEL5LxFtHqgBUG27Kt7n4YuYCsfinw2q7GpJJAQcJt8",
  "key19": "66FYJ3deVjMkQqeyjt4a8UQBmLgUEZg4AMExhDE6VhfSLUY84y5eaCdmXx7p2k43i19afdAKQrmfNfBg4TVGzEKV",
  "key20": "Gr9orCrGcsFYKJtgzvAtbt8i2qp9nDq6ks3h2T8NnkKN4xghJeWBrKnyXd7AjiURvwAHhKXbfSsyU8vENdjK2M9",
  "key21": "taXMEAZQh6TNQ54PxhdZ1qFo3uM7utU3WdNgB2MbjUX7MhwDZpSHsrYU3zUzqoqPDLDji4W28yjqY1a6ojyd15C",
  "key22": "41rmqak2M51c5WbrVxnq1UNbCKJugc1xQGWruXC3cdWoQmineBwspx6gVv5Ss7a4BPN8xfz1g67Z2yn1CyFQ794p",
  "key23": "4GUVvdnuArffZofA7wSk53WrP3pGKG5LpXti7xNx98zNBfKro7WXZYmVmMecsSWUYAHBNHM5aU3hUkLSL56hqfb6",
  "key24": "4BPVW1ytNYp6sfRfPrF5CjkwQDeYzri6S1FYDZs9p63Ej5DzSWeC2RFUNJBcttMxbGUKnms2PrpTe8Q1AZEm9yud",
  "key25": "WVHmuQcmB7FiUoXsM2Kgges2pKjTSj7SN2qBNW4PsZTRWKPxPtCQQd5x1oiBtj7jp73cQNcSn3uRNiNEmCRS7p9",
  "key26": "2ysYTZVKrpfvPhtLonF89NhRRXzSryovq8eYUrJnAeniXD167CWW87F4iwjWrHNZdPmHrDPA6yJdHga4YUwvcGHe"
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
