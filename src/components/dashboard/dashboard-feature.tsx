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
    "bXqQcv6Pr1ak647Qo4Q19xLfCgRyB5JKT7mvxus5PxRbVBewGq61pLQw13XpLrTUCK7zdA2FrneyCFcQEYhS2SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHYN9oT12yiMriSBd4rYf2Vju25TXXT9dsD5jFLACcrewAUaqWJjNBtxYpMnUd1CN8PU9xjECFuLrDGbgyacZ8x",
  "key1": "5qbvfBcAGKYPwbzUV8UC8hLZou9bSdXW2KTQVmpZpfhEGUF33YKuVNP3Jvg4eaHmNdYMjDFHJGMC8UJJ6VVU8vGF",
  "key2": "2PX2DbLxuqSnKeKKqTrc5CieWYQL65erveDcrMg8itNxKkkgumWWY4YcdRbK4FN2oGtyfkmT8CeN7VfxM5fzJrUh",
  "key3": "5gHvfhSndWAShSeHz8iLc3aAyKddjqWDUvn7CxjPGnWtTL3kjAHHEBxU2465zd6bryrka8L5ofPaM7TNjgf3M4Fp",
  "key4": "nR4RhZPg6QktxsLj5ADh2bwqsf8BQqzsH6EUiWdVA5NEFmP5MjoCJq6PAhScHEEaJidMKCubdf6pNmMeZ9nP1cH",
  "key5": "4yhptMZCsFztncnyEECB9RfXje8zzbE9SDbfifRtKsqhQ5Gw9yi7K9YAToqERNmp1LniUhiumCpaynqebd6jBw85",
  "key6": "5jgADUgg38fRBdKHxZZFaxPyrrwmFHTiVeojDjqqCuQK3nMMrqzGaBVtqjFQNzvt9NyhuJg5cDLu7cG9M5vUgvzi",
  "key7": "59jbqyrhf4yjToaKvKQ42jc4RQahc96PBjNLwk1yUrsERK6sNgcyzxMnRa6QxPenbC23tzgRcqw3QTcVAcqYHpe9",
  "key8": "3PBhHNUvCWvt9B6pq3YCoWaDXbY9Gb9qwxGwbZxFQ6LqK7YeT5PXjS2ozC6rCvNDB5DYUL2SQQc9kfap8iRjDNM1",
  "key9": "41kS3MaPw6fk5TGBrQr3WQ5uasS96ZQ8aNeTc4puxWg3gPXU7LZd2t11oyNbTZSwQ1kPJXif2dLt3tjsgS4vTyME",
  "key10": "2YkGMF8qAZ7afMMZ1DFiqDg2tpBeZvnbC4BQPm6KEjakAeHSXxqcTAZCHTMrTRayVGrPHzsrit34nP4fs16Azj5v",
  "key11": "3hormtirfJxmA1nMr4BwBxBVmTbaCLf4cWRd5RPv5awsW2JHtYRGiVMCn7aQW4oBLwg9Wn5CktbdFm5Ve4KGhtxg",
  "key12": "3mx6GLeQ9Mzv8JFsX4wqRJSCy5GMBFXVe5EbfazbSwsrgzXQGVsRNTwsNpbD43vLbU4ageAoN6FhVZPSUwfWzFQz",
  "key13": "5ZhXrC83aRBcSDrD8iv3CwuUahj8MLxhmCnJK4GDmpxuQV2cNYJjNhF7YxPeK78WMnjRRuQeNb19brj71x53DDhq",
  "key14": "21yPQvmUm2nJ8z4t5gMnr53BGmgPxvaR1SEZRwfch7anGoeyxHYDjaTPepnUbsGUP1XDWPVJB3bd4DuA8BcP7g3R",
  "key15": "3q8zDaHLT4aQumRHMB3pkUY77yBQHGDxXHvmLetyiTGDkWNXufRZGhkHVHHjrPMUibX6389YVWFZaGhn2GXSMB4n",
  "key16": "3HE1Rj4hkdEvJioCXbbBsxyhaQStFaG5ojL3JjE2q7b411ZrnNmq17a551pL2yVpvQtnwnhvkfVgwCWDVt41sBgc",
  "key17": "Ft9hDg35DFbaiqjKqLWU9g7gFsVjkRE9VCFdpSb9sQcVHf5PVL3XtrdGEuZQQVKoVkKBHvzrZitDZXDL6KTv9CJ",
  "key18": "3adrHvQFaRkPmwkfNPX8owr231s9pHNqtF9BPuvPiLa4bLEii3pPWxnWs1T2Bj5TnqMDFrXWSrwfWCbZ7jWEY5oY",
  "key19": "52Q2a5pdojt4HJztDbZrmqqwGYbhfpRUm6X5Rr4gr6AqeN71U3X35Y49Ked62o16S3qxtNbuANdBW8ynhBrKxAvV",
  "key20": "3Meiwgvgs7oCasBPe4uZAos5uW231rS9vZDbyKP96oMkPjWQVHmxr91k5LnZ9p68qDqSkpxLuLvfX1BcATfhYNbp",
  "key21": "5TA2DDBQvEQKvXuiF212PgU2xfekRY8X55P4gjZZnyQ1bpz8WSrRuu8tkeiSPAuLbpEEaTBxmhv4CZ9qukPDVntX",
  "key22": "2XmK23c9UeMrQ3BWKTPtWXtR8BctGD8NYn4vATruqYsCpw4AWSMFZyWXFstoJpMHCduw1xUMmXuNchAzi5zkBC98",
  "key23": "48VYiy64CnCaA6R2CkGBpuuGMRVn7SoTRYuGi9tkB5bjU24kj1rMgF7xg6HhQNYJgh1xoYfgHm9V3oVNDeMw85uN",
  "key24": "5HEY2i3LuuzbeUgcc9VzJvByXM9147C45hXyxsXGCjNx2Cwv2N2afVBfxDqWn4U9SHs5d5bPQkEza3Xt3b5GH5sx",
  "key25": "47YDkx1253riYN8KBLwgHe8WpPfrahznuWGGprxnDj3CWkD66tU2LNHEieLZzdgz1RqtHHHKfHPhMK25ekgvA13E",
  "key26": "4SQQMRThauTgn36boLEgTSWyivnHHg4YuYtBiTosfUqJgDQ97MrTVyA1LAhBdhuU4hASiDPxETVzTn98YAfd7SHd",
  "key27": "pBtY5RRzCr5uFTxtdHNmAq8tR52PzYG2LRVkhkpojhmxMg5K1mK1kprbH2XBWB53XJbvvc1HTRQc8fy9dGRyoM2",
  "key28": "3grRDVjgyhgBRHxZH2k92gqAnbKqno1QK9THNAn8Y43nbonnT7rA3NGiD5EG93maz5kCkCcNzrwKE1t4pD6xJGZB",
  "key29": "3AT75Tk95AAf9ekVzTyBJiYFXuT7t5koLSEUGWdCBquXj7HgLjYTEpgdjxqXLRGC1TSvVTLwmcG9VnuyDL6bpjfH",
  "key30": "26nxisrp5jsx4TJsDMSbKckdmoiSQx8QCnFVab5KyXaMkaRotrZ78xS6yDpnW1HQtWtJHQXain6x9n6fHF2h7M6R",
  "key31": "4bV8bPfrx7oB68Nsmg6Ekmz6w6UopPHFxHWgwMoxSm9WnXne6bZo7k1xuW6BJiWJE44JCTPVsvFbL7nW3s9UTBXM",
  "key32": "5YtShMG7dHKiDnR6wsuZuCJvQFHqC7mpuKem62BK7UgcX5cTZwJMfwHFy4ry82G956CSvpxFZ7EcQPJFm3L4XhMK",
  "key33": "42p4JEMo9MyLrDznWA9KAQd7nLKDzCmpXV1buejZaoBCA8BTqrzgbuL278MF8DtfCrnCnBK5igm9LhfFwz4cvgFB",
  "key34": "48QU8HxnMKBFEn3VLKAzEZWGKgz4weUb1KHuUCbAh8mSBkQRfeNoexQ6BVRiW9zQjys6kGKC5XQoMstf1tHnA8es",
  "key35": "4amkwPbaKJQAa42ue5AHNgMCt6afR6mrx5UNXLEpPcsoW4zwSzzCrYP1N4pk9Dt3euGob4s6kJPJ26XBiKoMdrw9",
  "key36": "5uWQ2vUp4Ms7uKjc2DPrPjaLzZhJiSJRmQtgEkaJ8yFY98fWnZ1UKgy7bHzfijCmiAS6o3xuGyRene52oozZ9cF",
  "key37": "kUzzoW4afbqdKy9fZjhAWUKKB1wVpbd5kNe9Ds8WhgWy8s5iNUxRTbMRpy7ZJ4jW6csgbz4AvxYpgM4VHX5YmKX",
  "key38": "34LsjWUhWN6ruYttZg51FJr6MnBhyGp9mngb3dtRbW8uVQM64uSnHpzN88dwN9iGXbe9NC3mnpnddY197daDFicX",
  "key39": "3yW5g5cPSNzkHt9ZpXqf1XBQZmwwRga5TnHa4GE8iYpHqADnDVXp5jsrtesSdHsW2GKeqG3WnoUAjxq7gHwPwc1Q",
  "key40": "2ALXnBCNrmWoCj7UruSu9FksSayDKaE6Kkqm6GxiSCdxpa21717grsSkHcQRHvB9ssSh5Kc1n9BxUspvnKhmrzBQ",
  "key41": "4zdriW7wLMz5DqRngdXAii5e6kZVHKyegPPgc69fXgQQScNxxRx7ycPxHJKXFLtkczrJrDL1ac5ph6jojtE9BCp",
  "key42": "3S53CXeo6bgdTnanr5Qn1tmVWEP3opWiubQ4a3fthQPUFtbstFAUrnTNq8ynZGwzVBg4ubFtGnn9EJCzvCwkroTG",
  "key43": "4jECzBLoj51aVQceokyGt5F6krSLy31kxMGC7geR8PqMHDLrAxYz49wsK3VyVLsfRLFzRYRw4jtmB4Tz8paLaRXW",
  "key44": "236AvKy5hEb4q3J13Sz6kcT42zTLe3GTRdjEZ5nTnwApW1NgLvv2HCYm9AixsKQvhtMR8gH3jzWLnJz2qYKtXjWU",
  "key45": "ZbzJVFBNXmc3mADJTw5PLTXASzfANPYqd1YsNQWJbebYYPvtKGJ5fiFPFjuEpTihqzFNxXaELu5WGRPEpDf1kTq",
  "key46": "h5bwsWgSDUEsnscj2QujRHBSiDgu41mWviEwAGDgPJyyd7QkSVaJmGDxr3X9Zpz8aifTtFFXvYexMD1a1TLE7QJ",
  "key47": "a9NXxCMCQrqvS6NQyrVGxTwchSHjrBsbW1657vfHmNGA7AqY3Phq6VfiyTV9cmmm8qCSMcaAMx7fa6NhadnujrW",
  "key48": "41HfPySJvou3hSW7YqotgYen2S7rjQJKA5KWH9WU6xHmEVvet3DFr7JW8PSRP8K6NNqEsrTTpAzc2mX8Vqe8Y9Af"
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
