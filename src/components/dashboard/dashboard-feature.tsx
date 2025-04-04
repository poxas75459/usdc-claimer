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
    "35xzM7YNbUE9BSM3mTttuFjkM5Nc54NKX2MJtBpvCANJk5UWEXRZmwc6bMRVrYdArpFTJK8WvsNZr6vYYKdWr1p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZmxJg52qh4N4upFvngSc6YuHHYZdjTficsFyvcT298Ap51AiFAggee1hzDw2ke4iUz1KeeEr5XAqijeGJh31FA",
  "key1": "5fRf8WSqrwDdJhN1vkjPYGUCZcYrsJTBK7VaYMJcFD2Q95UiuHTmPiAnq9vrF6vVRGoEedZN8oP6f4fPZj5eBQS9",
  "key2": "4kLeZHpAYEmHTjW2ZtNxqskWnLXAC3uXpKwFFwyMta8xoTYxKDeGPuTy5YMjpuNJM4gJAWexbG6CsjTcHeH4T4jd",
  "key3": "4p1uzpMNG8y8YdjGUYi2Lvd1Z1az6ULM4dkdcxUw11DSXAzPWdz2CMKofyqTFsRBqVCrNRNYAfgPBsGphtt6jHwE",
  "key4": "2Q2H343JpFfGjWxkFwqCELe26N3i8Af8b4dmQ9f1c11eCaiTbwZ1Jbh3DniQzUXgesxvUBrH6rbh1G9bbgarWnLE",
  "key5": "4rEUGaruVYb3VaT1dQZtihXHvjG8Bz9wUycJcpAcNV2evZQ6XGTDVTDrY6YkPWvSF4bGvRZW7CkzfkeBTN2D14w7",
  "key6": "f88BgKrDGim1C9FTHB71Eb5jSw3W9SP2RLfhZdeNDKu3aZ8zbdRGSGbouBva5jamnE1tRDFWyqUSS8QNLseuqhA",
  "key7": "uTcR3S8DXqHHK8nxUmANGQLG3XkQQoKWd45i7sZ5Egw6fAsRmoXEd3TAA3BEKrp9A7REXJ23kTkRCJvew7cdoN5",
  "key8": "gbSp3bghRgghDqP9tYCK9VNFiCvoEF45yrgmTSYM5yLRB8GGLkt3h43iQLWdq8pqjsEDL5TVK9SuXDD8QzUjpQR",
  "key9": "59E8vnBuvPjXAsEBkQUGS7S6LUjXPFz4Sf2KL68ZK6MAdJrmNW98rPzrRhmRaDKCRx6Jhh6uXNbY6yKe1tUfCtnd",
  "key10": "2AbVn3WjCrSeVGjFangk82W2B7J9MgzRpEgFwaWjAW8Zbqm7JW6gprVV9FkZetPyZ8YJqgjcMEfLk2KTgn5BBFHd",
  "key11": "2UWjDj9txkiU9E3bdvmv2xbsnVoKjfLqKaWF8pggAQrZV1nJcQQ6ijbdbQH8YzoE13ikvCcXfkba6AkNx2HVjmzY",
  "key12": "3PpbFBWsRnXpjH48AipQ7qX9PpE9z4Q1dmX2KMYumqUgDzpSNHcXvtLEBeN8ee1WKbHq6xZQVSLtMbccUxKhgXoo",
  "key13": "2FxUsETUtL9MhQdhsAczbcqLnS7Dup6c5V4fm4qfZMCLaTkkPSnMfS1FDJxomJJ4LEc59ZXt5ECVrAUNdFmbgaBj",
  "key14": "5f7n3AsavEyze27JE885EjVtJ9xnmYzKWxtDRDb3Db69xtrejMkCSUsq3KwKPmZfqC1GYgrgHZXw8Pp47UeB9xvH",
  "key15": "2TRjPgzD72poP7gxG7Dmi6GJHnR5j1SWhwZzvvkLKUPbcAHDoK4evCX7zVYfzM7F3UkVbqr1d8rW1LJiWqyP8gH1",
  "key16": "2S1fnbDCeH7gJuYZWdY2ZqsqB9NXwbdjMwPPy7EhCeJ5Ue5FFv3a68WVndJKiZm5BocuZW7xcyza6geXAaJruKH2",
  "key17": "ft2Cpg16d8UMcNM7KxZPW7N2b56Mf7eGoKZ1gK2wHsSPXhdRKuBh2YF5aaxxooKPWA2pC8gNycQ3QPhXGrbB1eC",
  "key18": "2V96ZyMUc9objBJqWoSrN9ZV5kyva3rnESi52H7a61ZnEpNGw3TsT3qfpxSxGYkcypzYAbu4ESEwjSgaUbS83mW3",
  "key19": "2DG49XNHUxWPmCSVUXqpEXXaZGZ492QXS7FwJpcHXrGQ3VYJ56yCC5gWSeXz9SKtfVMfdqaVEWBpnGG1ncRcQZ9q",
  "key20": "XuUity91KBcUJZLAEkcyhrNTAddsFBBciXVhi1zzAcK2W2eVYxWjUyt2pcEHPSxUbq85tXWFhuC7ou6ZogwSekj",
  "key21": "2Tx5aKoXToU6eDu6DMBqVFytktZY2CCmfUEFv14Wru1pdguDdh3WpTuBLhMyvHRwjRhf1wUFNWAszBqtnvkpv75F",
  "key22": "5JB6aHgJheQn8RaFHtUssmuVGFHsEuA9xE9MrZhCzXAD7B5sCky21P3g6UaG8WttW31gDECQgKbPndNp74NxHs6M",
  "key23": "5MjNoDZd6CuAmbDur4ipVD2UrQsvoyeSqj2EcEwa2mfYz63djYzj3EiZQje5HttaKWhigC5jcRH3mgBEXciy9Lif",
  "key24": "2A1uwzdrWPEzVfsyENXuX5ee9sv2A8k7SfGFcBLF3w5o16TVy5cwBoyTJpLbFqmMxBxUFi4JTVHP9SfYEWibQrzD",
  "key25": "2nNcoDmyGkRMYHugyBNqdqLdPYsLW6kTRdrjXVLrDPmhpDewdisYoghkWQ5X2CkeSxQaUWRjA5iV3VZS3wzMZHDK",
  "key26": "31UeKQxmkm7xs7TcrxzipNX8W1Rxm4anKJvbXqHQcTBD9EbX4pQg5ANN8QYwmvNbLvG2FBdAZCH8ZE5gXQMRAf1U",
  "key27": "2BREMqQyyx4KnNFL4ASQhFAB83vNdCo266moTHvEsFxZ7nSNSijFGpTed8nWH6U766p2WPwCocioDXR1a4sJ4idx",
  "key28": "2VvHn4aVWjzHZ2SN8AD1FUACqwEm3SABgKhTu5P2iutYBLTQjVf4f5yhCPASaxjDdRNDS2jDBt2NqVff8p55ZBtN",
  "key29": "95rMGBkk3qZ3t8PdQMmrg2cGL5cajeDxz7HsAXE68oEGgDxdKWRS9vxoGFQo6PabHy2HoUupYYD5DvMS2p3TQ5P",
  "key30": "3tSEKSNe5geMxCqZVn2vwxM7Y8nAvecfiJnDtf43FmmP7xNShVgyq6qgFZZuMvMnPr4pTFcSQqFjtVyQ51VhG2B1",
  "key31": "5zQkHvsixyJD8cLwFfBevwAnXu65beAvBpSTCNo36xVwCofxoxZwaSTa8zzqp6MJwoEjDAKfmVEcct8pj1eezXVV",
  "key32": "2jBTCi9szeoK5RoPSGVTtoMcKbKxF925qL86r7ZoxvCkSEYKXzxgDPCwvgtJqXG2xMK3tfPFn4q7mae1S1p68xtN",
  "key33": "5949BLjkGvHHfoTdYQbm2vwxPQTvWVwi9f5M8kkPJUiVHQhJGxPDF9FqhGKHX2C1MBjoCKUBdSJi17d1fXqnb7FL",
  "key34": "44P3xAMa8e73DZKNxsVFUEygVtvug9B5FuyP1vV7WRi6GCzz7gS8u2ihdvvBaivKkDNWiNrmkosJJVn8P35nUdPS",
  "key35": "2HiLrznMkjyFPaiXivE1zyziPsyEVAWNQanA8FWH6Gis5EuJXVtQB3cREhrdHFborAk6vEc8z1Qm14aWxdLFYuF2",
  "key36": "3myoxeqHDxswhdQYLpF1WFeZTboJsv66t5MyMbJgGHnsDazYdhstiondATkrpnNTFZrUo16tTe1DEGzqMPSA7ch9",
  "key37": "3LsrnABQkhsb5Er52paWvc7MycUdc8oV7oiVmV69DFtcJPVgV11tbUQVwLdRwon7MBgJ9BnrnxtL1ucjS6nhXhCZ",
  "key38": "5a8tMryrdhHtAc85wvFEzok7igx7dsnkwn6ategWa6E26MtkoGUyCTiyPtCz3aK7WXoTgzmNLuaFK231XNskez1Z",
  "key39": "3BPZPrH7K4CeSZBudrYokhSSE3ES7ynV2JYpCACYTLvyqS55SNW7e5Uw5bxaEveHDFjN97un4oxLQKGzhp1eTAYQ",
  "key40": "4JoK3QB1Awn4en55q1WWfSecSuaff5DDGFtaEgF2KS99xqMRSNQYH8bQzBVivTANSrBbG7tAE6kud5NSXCcTZeLs",
  "key41": "2GYjLhpR3y7DWPFubVsKK8YUmgFCibnjPLZWeyud5dCT2J6JghcSieauoEE3ztPPQDTJDchKYxV13M1xKMcdFRxs",
  "key42": "3NhV8CC8HcY4k7APk5WB4SeSWdHasYhCqgsc5zhAUhR2rSuwGucwDqHWawun8ATwurCw2N9B5hvMxXUMTLR9zenx"
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
