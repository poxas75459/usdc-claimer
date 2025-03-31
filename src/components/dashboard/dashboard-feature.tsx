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
    "5yHGzfZJdTZkxb9Pawp3zicQX3itKLqcf75KE11crneXpWa4kuvqDjs6bv1pWSojBtHxznQJGqaFtZgmsyr7oENy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zyk4Z9pQbt9zs8KsmwxQmfQACmYtVkHr3wx5XyEDUhL18uZL5LQJwWAME54Rpz57gaC19FNx7z2B9tJ5C3FBDPt",
  "key1": "44NdNPfMEagm8sME5EmFMXBAWQMtm4girQ2K2F27aGyjY2iHFDph5SshWGvUw5zid6ZFwDY68JQZPtESqMQs4dhW",
  "key2": "3UxuatPFmdF7oChRYNuyE9SBvUajvfwzWRB8iVb8rgL9uru699WLztYfeTQ5BBXtubksdv4sBfyCt1NeysQvGcsy",
  "key3": "5576yxzbWwBjjWcQHBzMW8bbrLAEHtp8HvGpNbUzjZq7Zdjj44PyoVUAjHBLb4D6coULbgAdEAGYwzm8JffJ6M4K",
  "key4": "RdPG3yryT7W4K1bpkbHSbWttuXXxncMTX7rAPx8m5aCG9pD7e9cUeFoRhb2jrpPy7mUUEG5ZQhe7y76Sd1YbjpN",
  "key5": "ELnihnknk3CiStsBiCjTHEqa3azisbxyrvXcb4sPaZY711nKbDFuEcypfaLgNAvVgHgqwBDV5VSdFBuBbgCDij4",
  "key6": "5qBuj3miz8T3J7e1tF3PrdNn7dUZjeWvvMJxrbQM42ysW8XQQsB3ZK2YiBFFyEedt6i3tKbxQXMJg6pxjAp2Agmh",
  "key7": "5yMkycQ2GiAJZeGR7f5copYpskhwFyB5jG7HoMmNvfMEPRJ8P3WbQ55AQ9ntNQxzcTEMMTkQKNHsm5qwvzz22vm8",
  "key8": "x6K5fuQTU97yX7khQyPQ2AE89tCjuR5pYVuVjF2jnJRHc1gM4oHu4G4NUYKweTup36YL2x6bArfrKGJGmJBmyk2",
  "key9": "4dxR8JFE56isKbH4fY9LYFCqCPWm3UF1Yn23AWs9KftrdPosMBusgL28W752Nw1m4HNwMkVJFLVVEW3gU6ZbDQgK",
  "key10": "kxHM7bEPvev6HGSsGA6Hf7y2TnWZQM4p289hVCyQniYoubiA31yNxst3wcq1PxrkVK1MibuXfdjnSEpdLDoR1LD",
  "key11": "5wnANCMt5y7JTmBUR59qYPsSEwTXavtdpBGxak3JpcnrcGPaUZ1wemt3yYfmoD6U2sQbvQUEzsCZENJUtczfjEnZ",
  "key12": "2m15GBYJvqZ9UNE6LiGSVprmnQVnDQpokGVYE7tjXsayJcjC7gNAcbPDGi8krsfkCL9XEr6PdiyvVnLyG3irV7Hn",
  "key13": "F32msogNH1hNEMBJ12aDuKXgajm1mmqUAw8j91Ei2or3XZ8eduAsQ9rrxgDBgPp1kq2nj8ybMGGkB52o3S8MQa3",
  "key14": "4XyQUmhT8BfRPLpNYLxbf637TnhZzcKLrLy9ZeCHqhDPe9S29NGds4P4budaWaf9nw2nAX7DsTXotWmH6zqjZAv2",
  "key15": "4WYk6jZnanBQkV8JTWUkqtgQYaRku4CNiB85MFaj7yRWu46GvdqGGLuBtfi5kNVu7PWzsjiBpKCjbcGeqWwjYhcP",
  "key16": "5QBHsbUh4SgnAsQVN5LD2bVXmZPh677ZDvzL77UpreiS8fHmgPcf96osr157P6Q8y1jzBiRx7q9JvoTv1Mxugv9p",
  "key17": "s6pnniC3Q4oxg1NopEkVAAuLVMcB5JrhqeHVLvLU9DooubAXVyQZGnskqrjSb18b9wpejDGG6ayoZAE6F1SbMAf",
  "key18": "2H1JNRYPTY3NVTFWtS9Gbpms1APN2EHJhp5qookjUKkq2RGZDWtsBVpDWVjm2eQUhkYTu8tf2BT6GMdR9G1cUYm9",
  "key19": "62nArce6RL2pAmJND7mHs6RrcShttGJNipWor8Nf5w4aZccG3E1K345xyVoKctBNMGYkETHs8t8i8zmpLkbkLxrg",
  "key20": "3DaBpDXo1FNdJ1jgbMGUNehsmdV74wzUzJUaiKC9P8hbkcKN8LqJr9HbyUerEqKXrEfhhC48evH7rGbGP8vGSnZw",
  "key21": "4LSnymJiHXnkWJZCuEWYg7jBfoHrUKAv79xYoroHcUHSSpgepYvZc5tTcDFZUv6PR5ZFvMFW8Gdb1DuuQuA1Q5Qo",
  "key22": "4c5XwqX3F16V4qAqsAyaWt8QCstwNNWgBbhQ3G8y7udJf5yVBzJfhiv6Q2FBtFiEfJGuDRoKDiZNybmg5x8nucsm",
  "key23": "UXNXZG7vmKSVbkdvhBmGq5ukc5vYEvryvMUsmRzSNiEXMjF8hR93x9qLMXGGJ8Fcc38mMTC1akhXcBfreYH3LKL",
  "key24": "4bijPLHg7hNr9og67NarjacVYcRXEAV9Bw2pfeVUAntSZBposbAp36FmnC1wH4uXS2NTYLz6pZF4onWJhb9kucDj",
  "key25": "4A296jfpRK7Vtqo2ktvr8KwX9rog4tiWjGzxXUd9VKnUiFU1s2ZKymsG7PjsX7rGSxumggZUE8GhCA9hYWcuHeXM",
  "key26": "34sKuJYfs8Em1jYfhYbJ5j1gd36F8jjJRZRxTLwi61UoHXE9Hsx3pnLq3o5XBobrcykLBAsK8VKgsMHWAEA86rWN"
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
