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
    "5jFbPYKr4q3rMvZEDTZk1MQHJgA6DGgykMudsKQFXAHdqEWqYQMKWxGRe8d9dX39X5Z68NE6fk8ejG8jhFXVsh9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUcwDzHUB5cyGLcrWKXPwBMvaT4j4hX5cTKbrJUpVDa5TWqb4cNif2xHdSyaGpJcRK1X9gd2yQVVeRXZjU5EEnK",
  "key1": "4FwjJGyLS363GuPiCTsVU4uzhnZnRwRmnyhTVZoH5iNb5uV4eq9RsZMjVsQXuGx4N8hK1G48hCap4kYkZrtuexsC",
  "key2": "43Zps9beAYYJNutTME1xVkjEXkfKfQNSJTiyK5WV4ZauQur22Ya8WZQcNxhnx5fvvEa9nCgUPETq6S3hBQbDCnmx",
  "key3": "oVHzLngAUYvb8tw3Ynz6iitszrxcAFiN2DaQdtyNoqzDbHdqjpNaqpphFR36GUs3TH9AWbQ2fwA2BhsT22n12vc",
  "key4": "2tiVgZT5Y3saHZHsKVu1kUV3jCSKcZ92WDHgxdFd9ChZ4kENRzy9F282CTvA94xnz4R26CPvWfxSToeaaC2t8HaJ",
  "key5": "3VrYAry8tfs5DmXG7fAUSSGNw6LeeP6AZN2Mp4RBwxtLhUJEmMcBQaaLHVZtzkEMy4yLX5BPrJ8gG3mEdrzvNQ4J",
  "key6": "2qEtaga4EQk11wBGH8ptBXFUncB5UJDvB1qcvKK2oxZ8ojnw6MLP3AiVBzSViA5dSKeCLHR1aPucs9Nmu2Z2JLB1",
  "key7": "2NDAuxUjwyQbU3bXPJJfBavRjpPdFoHFY3JSgVacrPo5QjcjWzjHfgcCWmKEZGWhUFeBLbhbfZfCBhDUAQH6EjtY",
  "key8": "4XtgSzas6AnbKXNeHbjrXsDKgWD2nPEFXRdtT4h3BBWkyJ6dGR1r42PGtxGtMpn7F5qGgMYMJsR6u7HXrniGRSbz",
  "key9": "3y96D9eXiKXQZCXYZSf8mHJsBzKt3VREjur6jqeBYJtkdJE3jmYFxfQUEPrYx865uQtSHQeB1NVvvYG2EiTkydUZ",
  "key10": "5GDhVt4Sjf7qMA3uowk5uQhZ8zP9kYULPFk7BwM1Nf3eVhpRSg8iMSQYUsCpKpZ1ondDsXrcDcgXiSFZosJ42ujL",
  "key11": "4ojRw7RXMEuLCxfUysNn8dsNJFAbv8bsq6WwLCZndgP6GPECnqiAPpzTFtXC4gQq2uiqzcD4eJDCCQ639jmqHRqN",
  "key12": "yP7YXG591gA7ydMkr9PN5oYpBG86gM6WhtEGPMzdJYPCHdHLbKNPo1SfWj9whvjQEiUvZG67VY2wDPNGJqt27wA",
  "key13": "2ywmpmeNJbjhdkUpbZQBZqHy64NuPNPTQcR7n1jVKVV4ALdmEYx747jhxUCKxp3mn67j6BqSijsqmeG19MDVsUV9",
  "key14": "t5mwCWLngaC22fWxvP9fAyE8p2Sya9T7bTbpBE46BNyh5wA7SZ8vFT4kkmrafwhENM3uns6DFzdoHKoXTZAXZfm",
  "key15": "25eLmqqKkbLEyqff2RyY91rDGdmWXrJtU75M7hapxrVSwbo5Xu5YkmhfwkYDgaj2vF8zupTQ94bHAc2zaicD7rWM",
  "key16": "MWha8MrnGNSagHoqFb4H3Zrd6Y7e4zb8b6rFcFdZF3KHbZ2GzGMHhBn4vtNHdYXuFSaj4Pkh6KZRG1pnwpHxMue",
  "key17": "nAME3eGVTBmyv9p6nyFGWFAfv6virRaphpaGWVFvmZvzUvnUdcfpjZaiKEgi1LPf85NV92gLMSxig1goK9D87Yq",
  "key18": "5kkfWGNM2HiwrZtq7V2hqu3MKTZX4wcP8p9KcS2Hmpfas43zAfxj2mbBre9ThttRpDbvRNwaTJRFNJthrfSk2Rn7",
  "key19": "56vp1FjrR7ceJBa65srk2PvWm5mSCArwADrr39k6rRRhhVAsXdjGzTDc1R7s1nmetLs9WL1mbnRJoTe7C81hsspB",
  "key20": "47KxT7MYvSJxuG2Aja77WscGBHowMzFgATGAkC4DMreyWmMp2uoSeUVdzD85BvhXbgZBjVMEaQB6K3vZrtkSzjD1",
  "key21": "P8tvmwNtQjUR5dV35x9GUEa76jbPK6c43mcPPvJptAjtBTKhGJE2AuLy7isBKmojH9E1wn3S8bqdc43CskQjSgs",
  "key22": "22nuzvmeCjMh191F1m37LUTPFzyeFimBC3hFK4A6AFwnFTKgEHh9MwZdTQEdUNQzLExksXL6daLXtX4symQxdCcF",
  "key23": "4fB1bc5WR96piyLG3t4p6AgE65B6eBxpfz8h73oGWLhSQQmcGEtTjEfw4Xp7mz3Z4p77bXXMpretvYmbTXgWL1fH",
  "key24": "5SAasdKCxNcU12CGnTZdtFey1TDpRxAXnG8qbUWnfMoDivdmc9RL5xu5DVP9kRfazyHyUcZpdieGsjR6wZcwCekj",
  "key25": "2qbAy2TbthyBbgxTZpvr4Eb9TnRkJmpcGVTPXGnvtRk4oZv6FNS4dZtykF3hcyYghgxpHid2D9HbM2wk5VLMv4id",
  "key26": "4yEzRgbaAVRTc47SVVqA32NzJyNzz59zATygG8W7fSnJdFX6sw9Nxvcqy32CxK5dYu46KgLNRAvh4HGt3PK6iqYW",
  "key27": "9Rb32TR9Zg5ztcAw2KENGNG5R1Pu7gnLvj4U8n6ELEVfpxY7dbM1bHkNSQb4rPjVFJeR8uqjNk9BKxA8s4DZSxM",
  "key28": "5okgVbzqmWF5uRH82TNf8ZJsEoxLYNkYduvtx7fmj7hvS6ibnx62DbrLiXa3WXAN9YQcE22L4HbnNVPJUutJFd7q",
  "key29": "5RUdb9Wdw1LiSPfNCy6KVQeXTcFju3bMR9H5CVWFVt2quJaBRyqcPhvp6ERBYtNZ8vDNf1phhnNb99vKE3yK9TLZ",
  "key30": "3bYzvLLgg5bLp5j21HtkVw5N9nfiBr7qUhCMonnBzpJ4y3Z3WtN47KfBajMwhGM2BEQeRx1x6vm9MaXUQqemiShC",
  "key31": "3CwAzrUsTcaexBbqx5M9K2rZUczQTtKayKSaDXqSyLtP5Z5YXTKtFCK27G1WepjaDSvJYkFKQxXMbzoCRaUNqx4E",
  "key32": "5kC9VC2VXih9r3Pv1S8M5qZhNRnmJdz8x1fDyBFQBuC7gmqXgFo4q5jfy7maUvxUceg64BZZ8ZfSnZHLXoysiMAo"
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
