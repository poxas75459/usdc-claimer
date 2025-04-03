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
    "67VJA9VtFJxZSnJupwJnH6Yo1E3Y6RGZPjm7UA6NQxUsEkG9oc6ggDQKceztWS1Xhj2NFdqsSKFbqhe1QJkKJKPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5bT9EjhKsmLBeAKxjzVJDCzK92MZjL3EZfTKoozfx1Qi3bL8Ur6pXPL2BC5SJhvZZppmphR19BzKyYy723BAmh",
  "key1": "45xXzdYiy97faaFRU8Qve4zXJovWrZWyFd9MYQxuat5TPT4uBdzV66rQuiAzcbVGasu1cNq6GUwAa4fCZVsto9ix",
  "key2": "2Gh8jqpgTxDQfMtDwzPLvAzmaaC2WvRqeRCiXpqkx9oapRVJKmFn1zppHEQX8KMxVJf8QCxTi9kF9MEpiMJAp3p",
  "key3": "3HoT9QyrqE8Y6F6S5t6fiGCk6LrMLs4qKnEpBqoByHbYZfSeMm1LU4j2nLuPTk7KmzwsJgHtjmZkzJNi229i1BS7",
  "key4": "3stAJizLMxtJ6i5G4EjZpgqY6KjqzcmsPFtjH2nQR8eg5CKsRykWPLbtrTWXkgXAxruux76WgoATuwGdP5Zd79aA",
  "key5": "61izoAVNw7SqZaQBwS3r5EgPi8UeMp3rnNVLmxouhqRduiDhvkb8Q5dNf8R6YYuWLrCfMFfcJrk4ovEWSu7h2W3h",
  "key6": "4Eq5BxicZ96eZ2VGKoitnzCEbLLP7BvRejmj9tPEJzoAtQ5m5hLDzqCjkivCox86vC5nUAMZwo7ntmsMSqUbbiH7",
  "key7": "RUx2QNQVbu3jEMNsnG4VvRew16aP6UTXZVVCBAiE7QWZwiXsnKYJ4SuPrx2GmwJbhAxcyAyxTogbokEz8Qpm1cH",
  "key8": "55SM88FKDJEr1D3SbEbBG8mUHeFrSnFUFf3A7doNgB6Sk8LmafH3padAvwQ1bhV7EMBhxc6oBCZ6epiTXFcgt8ot",
  "key9": "5YXmJpYmFYbE79bcsWnKurB9yw5zSpGPUCzDeheTfupr93dmh7PpRsiXUQs4i6bcwjTL9VPJK6KWYQABetAU717D",
  "key10": "414RhRybaSwTLNWyngGqfae7QogSrfrQ4aju4KcbQgAvjEULd6Zubs8vmACvaYafcpQjzC5UNTs2Vk5hSdrP1eu1",
  "key11": "hLVv1PX9QZtzXuJPu7JbWun271B1TacGowL4YkfUAh9Zzvwiw5bNkVfEKfegjrV4G9aJQ1rbX5i7FygARmXMJAE",
  "key12": "2LWfVC7FPidP8cMrkiEu1pfJ1HYTBx1jKdkQLJWTgoNFneWLJpRcWoBN49AbjCmmNZKg8YaFHdzKv1oNCddJCWwU",
  "key13": "54nrUuyGHWx3TVjRqSgUmM8xtJ9m9VhsXMsKuzFeohr458R3NVVjrhuE2HJgLA7wsXnK2jmYNjFVWvasr57w5YRK",
  "key14": "2PG4wjND25e5YEZz86JNo7K99XjPtcH8fGESVL8Vch8SHg4Kvv2vwXXP3z1UPkpMJxuYacWtUsDRUsFnkh4oTWje",
  "key15": "36C13qrafoYQNvXVcLFXNFfCjDBvH2dJZxK5US7V5k71nRRRWVKsTT5p9AV5GyKcX8PwGy32XBFJYdzZxiZmrBdN",
  "key16": "4zuhzWDqi8y2KhDwRie7Ar2NwDCuC6GTEJYqLvNqUsZiFVRV93SmBadjBtThyPWo8EKY1Y3vRGbDrbGdrPUWU2GQ",
  "key17": "2q1k2y51EKcn6SsTzMbqwY9xZxxtb4yenvUdZ1joYzZYezmPiMXDSwNrnnmrzQyZgAyPDypjZmTsjX7s864YZxKp",
  "key18": "8EaHvQF4bQfHDgQESr2C91yzrMXQ6gSw5JrMtZruaquT57YHQDMRfivLnXnexu6493nhoCEpNV7BJc6sXeXHMti",
  "key19": "2y6ZmSjSoUVmYT6fKpCZbYkGj9Xc13Wm2D6pnhSn9Q6Vr3VWm34No5mVS5r8xJJP3MwwfCbA9jAVUuSRsd1vBQjT",
  "key20": "5sUDW6zr3UqV6861pNpJWLbNU7kay3Vuv3MsboNqXsweVuCw1gef77ibPsVwXbA3yoi24XC4cpN1xbfez1A7pgyc",
  "key21": "28KWVcVd7XKRXU3bjSpVcUdUh8sfmjUGrebv9pipPKA1K4AgBCJE2xBgUtCrR68SD1RjJyA6FV3waBfRFUycHKHP",
  "key22": "CnY9iVRbz6zHQT2wNcz4BPcj7ECDV6xuFKjk84wEumSQEc8bK3wRgJcYrnLr33LEpAn6zafdpUn4pgwi4QJTTBg",
  "key23": "5UBABoAYB9xAHhyQC5s3vkxW7769JAVj5FPCCEhfrY2YYASDaHa5nu6KXRcNrnwo6xqVqgWjgXoc83aGBXW4hVpk",
  "key24": "2SroWEeBhD7xvSepHNQb16vCTYENyzFtsrBAnKabuDb1gjbYbxTz76eP32P4ww3aN7Kk4FBZGjwHQJSTMczGcWK2",
  "key25": "3mWFfxjYE5cNP6RxXyFsnWvTbiHnyLpkNUYrKVUdcMX5aEoN5NnzbuDLRk2v8W7V3x9xBBmuusDskCAaGDDeEkkQ",
  "key26": "2kFVwVnacf2o82mufZeLRQaU1veiAALWAKjna72F9HeERBr1D6WDdY7MuZ1oxMU4ANZd6CaYwvM6dYaUj1YwMPAm",
  "key27": "2UCsY9MuZNqixGsMtrhYc3nmmgX5koBUan3EFLuwgBxJL6YdLxUc1DqsCudG6ZZ6nfzWThNWuNDgFpChzhntGPFN"
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
