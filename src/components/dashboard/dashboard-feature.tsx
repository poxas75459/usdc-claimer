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
    "4AUhTvUGJu9BUpsbMK42kWaczJtT9zhV9XPYQFvYBHNYUAWGR6KrSK9HyEVSZtsw5KKs18PrNLw2bVCircKnHSdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XrgpoMhpgQeg6tRFundsgtbJQGRuKHYMgCTH3r2SVbeuHGKnwhoUjnQDN6czsL4QDbrjziMgsjqCBXxvJgGgY6",
  "key1": "N1q9F786DUSn4FJ87EemjGrkDYGtk5rFazewGk4dN58hTdK1kv1hUzftwQrSPgyKCUPER4bpgoHL4sHUbYM2ai8",
  "key2": "65y2DfjeJKbuz2AK8jm8T2idhN87kG2DnJ9hGExnsZu7uPsjczcqixNbeRjTdTzZau5kHGgU2msk9GLGzHcBasyt",
  "key3": "MY52AC3pqbnpXyxme1vYrPPj7iQ2cHJbx6co2EirLTzduDMT8T7nvc64fQoCNJa7BGv1Cf8mo8QhN7wCdhz8HQQ",
  "key4": "2sxGWiyWrp9JdgTnp1khjjjEEAezgbKfwFN5BvhkneXPdB3WXmNtpyNSjrLjYNEW6dZpppfQApAtMxw6zzqSydky",
  "key5": "5YTc6SbPk6gBZePX66WKH5xqwVqioPMM4dkJnb9TJyL9ifBzcg1ZREN7GSRE1xJ4qQ9Av9mogm2wTwnYQpdYz3UC",
  "key6": "4aGfQU3a1WF9tDAj2gZRBFGmqLgVKTEsCRGXmUAhKb4V9jQrqMrH2jGfXky8znmjTYH34EdNfB2S95kVeLGxMCGo",
  "key7": "XvgeHpjaG5VMHRJzG1KBLz4cCo4FudMiuusnhdwppEk4cqSSQxnTQhgG1m5MjDSApU6pqpoe3RRh7zDvWnvkPYB",
  "key8": "DPZ8ay3tZkvBNQgko1rwpqouJ8vVsSAVQFZSZ78sUtDzqvED9NDqHt86gJKzoBURLs6KHfPYmsAvHx4YiNNYtFC",
  "key9": "4hv9b9yBEd7phifU4MPYsazwA3JXixi9y7WkdiYXg4ZQZUYwkE3V12W3FQUcNFNMgYFLDv6FTxecVuytHQrsCgqT",
  "key10": "wGQgzwFuiM8Ai35LNrfiCJwVdmAaXvadPnbwmbuKzaWWYGT6kWZ2nFH1BcQxLsxmpmpXhQ329Ej2Fb1vCH2hNDM",
  "key11": "3EHm9cBttMmVzVcz5BLx4fBMAZBC27wM4WBcCpZXFnd2aa3ALocoYkTNZkbEfkG37ABZ9VzJLggYA2HmoG88XFVg",
  "key12": "DR6UReuFEbUz5fV5zxocyoXgfCjTdbscSqPYw61PAydGePMkADZCkCsZZ5Ef4AYkCQBH8m7Fsi8EmqRjVyWVtPH",
  "key13": "5ziKLYL7C74sKVfF2j5bo7bprRepEKs2g3JdqHLJ5UPgr9eR5XvohX8VsFLqY8s9pB1dXtERpawwHLijcDAB2a9o",
  "key14": "3eFvYV4funzoRDhFx3iA9A62taZVRZATEvVPWEx6tPKFsvHRiuKZoYoTY2wfqKzKyuaqKsEzULrf4TTzy2yTieo7",
  "key15": "5mY1VyZYa8KKPZhgGWrgVzqpttKDcNk1ahTqBDkTxaNtrBdYWrQJ1qMW3ouGS5b9f2FxiFuXiTiv4KvsgKJG3Bjd",
  "key16": "2tR9ETCSqkoq3xVzubLnKLpTXicY8vujd9YBiHRZAUgEKT2KF3QjhDqP63erchrgxAH73Rbt3FKLMKJe4Kep3PSp",
  "key17": "4EFF2KHfQtiCUS2nGyBmQGrZpTEgXLsF4MXCbvYJ3Gx3j8joBKKT6RopNfD5GxrZDWdjNp8AEz5iGuW5jVGiVmRU",
  "key18": "2vFvGLaqaVn4q3HppSz3NVDWn7gMfh4AQrjLho5M3W6TpSGZPhmJ2ah6HqVLyfy3tpr8o6XcJbmE2SqSyeDMjwBP",
  "key19": "4CBT8uFWzUhfNu6MtZD52nGbL6oHkyXm7z77ipmjCGcpyw1xGyDAY7Dpn3Q1XfMHtmzwFkS5ssy49LZMDGNYQ2Gn",
  "key20": "3PLiDf2YqF7wydU7YS8QuL5u88UuRT1ukDvzBVWruhkaadu46oY33UkgEpZf67kMPPUEnH7VMriDiy9hZNeJDES2",
  "key21": "4zJ17ngtiLnxiModEpxCGwbp8VZ4JXxyni6RNSq7NeXxRMTqWGXoQTnHNhPc1qYuPqcF1tb5UHFsL3yTw2nn53Lg",
  "key22": "4UnX7R6Zu1quCRpDWFBGW9FrcnRpEg8mssUUbemWdmFtJypz85FRFV6NJRGVc7tFQmSGeoxfYu9kkWVh2vbvTNGT",
  "key23": "3tAc3hauXPsYfTSJCbdPPWGERWYJseuAKPUtDB98uddQZ8oC1Qd1uWSURc9q4gGaeXCc7vKKtR71Xig41EJfKMQZ",
  "key24": "4dZNtWSkoa2HqqQF4sbcxxr2Z3mwynzrS7HvQbgHGZWGy1PrPBa13EnShn9bJQ8XrGVZNeiM4sXj4a6F8LKuCRRW",
  "key25": "h1iMjqayEYUxKJkZAwts7K37fubksUiKVMFS2KGsVN3PJEt4YRSp3Ct3m8fG8XXBPZeAcLBoA1ey1hk9nSSxnx2",
  "key26": "4etWQiwGRYyky8whcgM8iM2cJhDaTtV4khdjx7yL1pkceWPpvpWHockFvD6bzJKK1PLUyXSGanP1RxXJP9nBoZKu",
  "key27": "52PCtC6wCdiKayynPdfRUV8RWuaKiEDCPrY9h8Zkwr841EfHQjW7hoNfjR5d1C6GG4tuvnPCzK8izPfrDLd4yufY",
  "key28": "3JkRK3pwNZEU8VmVKE9NZox5WxdLbb6UVySdQ1ZgKSz9ZxWR1v2HysWZ5VZQfGSLFjnyKx8CezcKauaLcVRkxNqN",
  "key29": "3dMAqXiarT188M2DqYgeXp1EQ6XCXHSXxBQjPk9hzbAP562MGLpieaQEMTVz9iQiqzTg5SyQqSNtwgLd2jKbfrfk",
  "key30": "2aufT9uyrM5naS9BTrnWgZE33wfKCc9ZZX7yaZjYb8iuahgqS7GmzP7As9wKYkCVagHxfhZK21WVLUdSAh1jUF3",
  "key31": "3Tx4Wru5mGKSM2mvwTWTpbxXxvzFB3dyc6epd9gaCs92CUtNutnNr6aw8UsqhMVcgxqV37amadZBmL9KDbrakUXM",
  "key32": "2UFCNBGh6AJHHrbkc5ZbfqmWRWRRDm23HTsXQyfcZDSjDTvJHzP2fxGfec8FYhwjUgCGat7Xq3Bc6sMxkJQUMHqx",
  "key33": "2o5eEZn3PVNZ1xh5a5wbKLWiKuGkT8cSF3z1RyTaKjt9TuzyPANYTnvaVftFfLfjEKW6bfKatpH9eP4Bgi2sYJiY",
  "key34": "4vBxJyAmpsdk4xSaE1ehGwdU4iUEupeKX9tQgWSBzNSJd1g4BP4MnvV2M9mHw5erxNP9xH4JjRJTsbYiNpm2H8g",
  "key35": "2d9cNX3rehFfaWNUsfzyCkrhah8FnYG6hQq89cMwR5nhgJ7H6qgniR3AYZF3y1aG3mVGwMH5bVKbY8KuHzuLJfY2"
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
