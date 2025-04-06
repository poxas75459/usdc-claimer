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
    "2jsPvJGZDsVAEB2zUKHNy42fzJcG3pQk8gC9hnpkjv3yFJsQWb7dvctGfAgMeSV4YJ5YLh8S8NuUsXxoQbbAHhUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WKkzKd4J9sC2XcRtP8LkCXncPNLsHUkrFQUmqAZ2kSYWi4F9qp6zUkhERbNbCea2yqHmou8L1bADQjt3YWvPdvr",
  "key1": "msNgF9ns6i8uKbjUJhKaYr525H8t55Vi8YUzqeYF1csynSrb7Yrzf9AUcjxetLdeZ1HyJb6odq9pGgkhPsq5W7g",
  "key2": "4fJ5pNwFRz7wXpTvzRZfdPzAzwjcgCeuA6oTQCfgRLVcLTb2xaQ7q5779y96AvyM4PQxDtoXW9Xmo8jsqbYnmqmE",
  "key3": "3t2QjTuHRkdxDBKvvfc7Lxdoqj1JuhremGpsDoiLJxRiBU6B6s8EwNiedTgYPZBEqJebt1SoA5aTZCg9vVfGd9o9",
  "key4": "3LgMnCQHg9CDcSuAKkqGbAay3u8X65MnA1Bi554iUFQ9dL3VG5bS74S9jsdwoQ84geCYkhPf6ZF5QdMB4iMkniKx",
  "key5": "5Kain2QsieVs1YZH4CAKBhmj365cpxcdqHKkVf1vxg5YySXW1n25hSMDsdiVF2us84dyx9yZFKugWcqbzjJvbxif",
  "key6": "2ibcn79CjLoNcdW9nWuWwwLooYg2bC6M2adKGrXMb2iRcnVcDoeQPubvy6gZPeQFen9WM9Y8MBZB83iNPT5WXdms",
  "key7": "4wScHh1tqCCNUpFLVKkEeSKRA71nXTJ5PBoowxX7k418PGacMthchr5V2AFbkwjYnhnsGFFDj8tS4tjuN8JjQPK4",
  "key8": "3x7Acnsn6qDs4mbwfao1uLpU37YfXu6uLvN9o6S9q4ZJeUKc8tGu7CeSC65uLRpRzsx5ueNYe6bvN4nHuoyBwcWH",
  "key9": "4km8S8b8hTgbdv8uVcCEYTWJK91cBorbZ5RHZuBs9d6hUW2kqkVxGvqE95v3Gf4LAMyb8iBac9Hov2SN9bkLLYXJ",
  "key10": "2Pq57Tx8ohBDdiJP6twNWQUqhebrozQPYtdGNrTuxe7gDyrw7mDyteZajMTTNYnTitpvNdrpg5VHoHNT7ETA3S4u",
  "key11": "Rnje9ezNrbptDxefYCfZi1QSCog19DeN97BuA2ewDphAx4sFwDJ8B3jXmS8vgqiaKfag1kb83SKTBgDKa8mMe2m",
  "key12": "ukqSFoe5Fzq1pdkrVABANeQRH85nmQXvnmySnYTkZLv5tceYMgSmGBJRmHMzVGKUks19fRd7yP1CzFPXNEqw2aT",
  "key13": "ChMsn7DHxtCD4rPxCUButrS5o9DLezwAtip8agSBkFiegc3EFA3oU7WKKV4sTL2mVFfcQxoFQSFFr4qKMjyJKaR",
  "key14": "55LWZCp2efDabTSjE6Ejjop1ykiL6Ns1dNTPxM6m5hsobdK5Wj1wguS7KwACR5YgbeGdcvMqtDJVWZ1tCsKtqERt",
  "key15": "4ve5cDNdzLb2hboGDFy7xu2xDunLjLMHs9yx1cjBKkD8JuELB4EMEAJrupY5XPr2uhUxYMD6qWspwrg9wcZSRfEj",
  "key16": "4idVmnZMyQyfCoQSdm75o1iaF5UgszpubuNxteBM2gzXB3cpLJkeyJ2VJHZu16ubF3BMsW6Cqy6H4cDEBsihdfeY",
  "key17": "4grHZwDut6Nt2UADqknvZAHbxykbFRZNdZqoEKtobpFaaxC32D3E5xQei1JnhMvUJ58QQCpuwkCFU12bX8oSTkMi",
  "key18": "5nMDDuBZX92t2FcpZu9bFuVMVq9kBxF44WhM8WyRpQBDCsqZmLeZVFKnL4MjJC5n8t7ovYKWFXFsz6m1d3KKcs2t",
  "key19": "5r7qvMp4b7V3nVe3PVyYS8SQsbhbznduVZU5azEHDLwHKYqN5SCDb3oxc6Cjs7Mt2A8cbCh5MrEyrWj6pMgYEx4C",
  "key20": "2exZiuz4LWPQQ1DYjYeMkyingzBhdo3vQ51rwMcrkSojBWjavYHWxwiQyhwUWJpdAU2nmSG6n8XSYWXPdJkQe3sy",
  "key21": "3PiHq8xkax4jGiuu8bTKoCYt6oRYKuj77KzRYrCZ9vJJ4GRibZspRQpmFFXaEbnTsnK7BPKhmbFLGm3hW7zFeiDX",
  "key22": "2JCoAikofCySrGTNxPAPHarJ1DLzm6NmrkUn5L6WfyTmWSBHNW4gd2vBJHuf75L2skr48BzbUEqEaBU8Tt7wFyXp",
  "key23": "4dE1ANpBiBTHGD8JnwomBqPvXxUqxzq7KyhoaXGiiWkxytgmtnZansFNciG4whqnqYLNcNA4ecnwkLmgMJ9NHHGe",
  "key24": "2mWcsHBBB4C5QQzzKQib2XX2vv1zQa5wbWgHHzuFUD7nXTzw2WAEsp3EYMnRuiHYvSkek7XZVgZc4iNwjRaqLJgB",
  "key25": "2CRdjgL8SarQPdtyNut7MqeXbxD9E6rBGeD1tj3X1PMBnzSPn5HVkVLGjzhQZXBrCyqqEZhr7ddgH9yq8fpa7EbU",
  "key26": "49vVZqQQVYXmvfFuUg54TQVqSHXWqiW5WwefyxiKziqefG5LT7LgZm4HX9H7btdjQaDNZHUvkfEpUwGv9NdiYKaP",
  "key27": "52CK8qEGpbB9ckZPnECTy4y4Cc8AfdnFxCjBZxmt1v9gMLFK66427yhX9LNRZvMhdKYb92nrWekievG5PK45wANW",
  "key28": "4qnSaiSZA1o14BZb53yRKj1q89qQMBZrAnCMbYwYQDn1WVExs6pHkB7NTt2EpXzGsyMcRKHHtu8bufNHUa9RKaHM",
  "key29": "2Qvsgop6DiALpa2jAGzHqCz9c5XMo67EgxsHHaXqbRiFcKq6nssMbm9tyfDdgJJR25cfTeyJ1LTyqkjJ2zRgpNQW",
  "key30": "tvaVixpaLFrtJwxJzz2CBBpCEJ3daD6p1jLeCHUQLe7jj4CCNhkWUDWKb5cYSmmb9hZwRdM8ZUxrc7sSQiAHupD",
  "key31": "whyCsJg4k2yZWJJEAjuFYdq4xbkVyXVvtQRi9aaVNQENd1sp7Shu8DEi4Jq352m9FgHioFig5KvayDpqV9a8RNg",
  "key32": "2HvTYo6Jj5pMmnvUnbYw7bPW7iUGY9VxT2t1WgRGSJQXNFn4DD4yn1o5EDbD7iT3neeonRutwcPg9jcxi2dVB54C",
  "key33": "24qP7Z17Xb7xDv1WRdntkQJYZt5Gf5Y7yAgBmxgK5rchCrd3kJDgdtvQMCf1vsmUrcWXNLRVa6BFhPSxxVFcdsFi",
  "key34": "2j1kupBBSYnz5i2KWEgBA9VHyDrVXZLp65kX8QujBukjwgJ8xZzDda4MzWua7cRxdG9sVLHYZdcn53e4AfvuKD8R",
  "key35": "4zBQyYKDNVYL5bbpHo2gGW5HyrKpf269uk2N749fNCbA9EPYxcEWEeeSMdcBNvrNB6nfmcCKNxn9M6PvsX2G5MBV",
  "key36": "3GuqePrJezSgBFS7VRt7zc81ErEU6UgCyv3aoi8Pdv8rtbALybYRXmYZMy5Kg68kRbCGqGGnP2hhbcUkUf45CVYB",
  "key37": "2PacvNC8LUXRrG8dhGJEaBntvSBHxzzmPy36c1mJSArFMWmqDmZWns8o74hbCKr6d6yJmdogWuVVo7oj4P2YPr5a",
  "key38": "51ytL3jxTo4WyK453piBXoQAU6XfJz12Qe5tjtwC4iVS58u6qsTheMbX7oqwaVbF2GpPWK2NGAfPYgBgVC8UkAon"
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
