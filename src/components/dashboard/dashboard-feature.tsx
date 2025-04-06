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
    "4cWC6VB2x3sg8S9JVQZomR4Xc3tdzDYWdNMv49Rq91dDjxaAHvRfEPaotpJo2DLbCphFsTVZ4ghfPssz7Pu4vYcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497BMWTfaNF7hrNnYGhaHpNG6LcZRjjfpmUx7gw87kqghzMkSEUxmY2Qew2NsYsAyJcjrkAPGPKGFsyvyMBVG2zG",
  "key1": "2WugsvaDaQe5ekGJkHzgLjqyGZuizgLqS8LJw3HCKJZuqRZfuyDngXxPHCuEed88qMXAsi64pzdLdsRtqPo4RsAX",
  "key2": "21yxD7R4xSWs2KZtnXgJ3nwSuzQVTvyZnDonDijnhgDtwaiyauQJSKgZSSvL2DRbYgg6r6pigusKaE4qydyvvp2d",
  "key3": "3TdXdbsJEZrdQwN2dY5BHUa7nggKCpwQS7VT9CoGY1ZuFegiRmm9ZKboMYqad5A9nruUpQE2RPKhc2ZxxrPgQKGD",
  "key4": "2zhEVPvVU8FUyGsQHaMWoeXbtWCgsvqSwQVQPyi65m3XXCUUkD5pWEV8b9t6BH4NEaS1ovCsBTEGFXwVVQspND5v",
  "key5": "3g4r3kkuvoV4Jge6D2TpfbiQp7ZHUp69bAaF4zeZzWz4tM7Ws7cChW7fg54gyVeBLd5kQCx1CW2djAd23zRAF2kb",
  "key6": "2m6PUkxkQwa8RTJ77TpQPgCFG2Zu7dMKDK7KnsatarjmAd8tCM5gVmvQR5kcNpWMHXtpRoxd5S2cuos4M4RQoMfP",
  "key7": "4vD7hwmWJx7CTx9g8Q243RBgjzfHc6DqUbBLvNGzK2NRcZbdhF5uFfyP925F2hvcCitHD7XVrrRsLLC9HNpm7TLq",
  "key8": "4KN7PtPR3hrbMbJ4GmUUmuQNvnip4b9j8QirGwdyCbrQ7nEvv2W5tRnFrVG9ZuUcHUKpLDJXoYKLhBsmvZv48eXS",
  "key9": "28TcxvwGxDA8asccWjAS6iqRfDkNtxoqhGuHtzS69nZvpjG4Dk9Vrsd7AJyGT2aPTFJ3Bx1p5t9kMHvnEtuUmS9M",
  "key10": "42qA4pyTtUx1eHjhBQ7ZtCe4Bfpzh76bUhNHd7duzBHZD5MaTtUoKWUTmumWqLjkeFMbZRquY3bDkU8bXRmDgA1G",
  "key11": "7KMDJMtbgFYoE6JkQ9XvShDYhjND8MaXSRVmQjTorN9rHR3pPTSpfCS7LLCnEJ8xxeFceQJR6nENG3spvyWKdex",
  "key12": "4wHm8KQcmy4dtYQAJ7WyxCjxz61cuCkDGkeyH3xX4NYhiq2efeP2tBbpdutVWTSagnNN39EbTHrPG9Ax4Fd2ddoP",
  "key13": "V5J2fh564WbajVCXSjygawguFEQS97jcQdawLbrgJUN6SGmrb97P3DRDTyZWmPV236r4GC5fL4Ftkd448BaarwN",
  "key14": "4JLNUkt4KzAKBi4vgPNYmGDrsKZmD4tYopowe3HwBAPkA5ArBgZR7gLd5Pu9VgPt9rmzTuQePDpsu3JcmqhEk91J",
  "key15": "3FGqo1h1RmXQReHprpSK4B2XfrxovAwvN5X6Yr7uFQ1nJgWBVoR2xv9Pvsb4B7xfoQwqE4XHZ9xnNnioMh9HQfbc",
  "key16": "2yzaU6PEya3PMnYabZ2yfo4zXHCVJG9gZXA815Bjovyfnrr1bURQSyCEvLe21FL7dQU7uPoSnMMf21A4Bc9Ye4bR",
  "key17": "5vXBTQb4vuug25RemC7CgishEt7P5xiixuZpxnnoqYobN9Ei6za62MiZNb32XQ2sygFL6vBa1Y7PYw4mVfPzqYww",
  "key18": "4CN8uRvySSAQ5sZwvoBrPME47guUqNUDm6UftwWSyFaqq6hLmgu6rV4GxzVsvULq1kV6JDStQ6TCmgsHSGVh3v37",
  "key19": "3HsaqyDyGV1jxRRgwuLRCJtmeES48vL5Xg5qCPQ6425h16KTZ6ox7TQxsWbDPjSc9FQFPPLf9crveUZmtoRhQJ35",
  "key20": "2Y89DUTyc6uJcBBhuCnLntoZwwQ4Zt9Pvk94vdtQAinPov4eQmTBkvb19BbLcH7LV1wbQNVv4fbvpgBfvP8LMNJv",
  "key21": "4P2HQeQwtkUYgWvKCWvM8GbXEqLCiaj8o6obKxLzWQoib5pFCGkE8QkRbDJFksEZrZAWvKo4bkQiSMwWrzuzCmYy",
  "key22": "5H1J5B3xULh7GAAtkhzjPm1MpqPHSj8TApQDdhicopzZ2ndNQj4vWeUhzVgL6SaEEwqwVcycRsSgK4YPFRVciDjW",
  "key23": "wYyzzQZVZdjDkdj42nubcggkqX8vnXcpUDFxZY8MnTm3xHXmzBfDGcKCcUWFLnYrPzYyqBR3h4W8vPtaKMsfgnT",
  "key24": "5AhFqQ5qbnj4jtEDGfwvkxX96zUqWs78E9CsYNewFeUc6eS4b4V4MPz6Z5PcSKpvB3CheLrubhhMmmnjm6eSYxTr",
  "key25": "ksXA9SJFwMuy6H9XRXx8XaYexFnfmqpP1vwFjLnPmfTuroxBMiG6Ae6aXnszqyaVgcUM7FXrbm6xPv7LcRrVtCK",
  "key26": "4qDNhqesQ6XxnmtzVbMquoRbBf6VV32RSLyL1TudgDKTTPpSfaCzf4xBfYvWr45cRcTi4aJseQTXjeoNU5jbf3j8",
  "key27": "MLMvyhWPvMuDYUNP7iu3QrJFTG32bevkUWfR5JFbDZ2Ai8M3nebG1VkJhGATxADdyafVF6nx7WRtvuBAhxdEhmE",
  "key28": "5EHRDyMYh6DH4GxbiVj4afDg6JDNAEpKatAJ8FzXkdBisMZfig6wLxFEYx5HJyfBx4HPyZyxJ7ahu6it1Uur3rt8",
  "key29": "ZvDqyNh2Qp23cpDtCXiSTegsuCz1zsUQuRQQoTi62yuXM1xsHHPnbsFJhCppLwqZxhuADdtPzNsWzqYVUFnyayo",
  "key30": "3AjBm28Cc84AV8d9NNgZKyYK7VA2STJhNkpdiYdEdvwvPffpe267DLb5fGqjJGVuhKkoCp1x1T7gcegskxZuHrza",
  "key31": "4cakjEPguHVDVxSDpPJPmt1BhQHGqQjjGs718phDCoDs1AdEbXF9Enw2zPEiHVgQQHBTTcMGn73FS32u2LP39gyF",
  "key32": "JcwbGbz7QFswbJF88ZhADTm8MinVT23aaMYo5bH4bJUE1trbj6MTMSh7A8XXsTstArJC6k2egHabzsKQQrnD9oL",
  "key33": "5NxWNkXgzaX1gpsw1LxRs3yEtHxztbeurD4YEKJTDSFvS67Y2o8Ni5E7fpkTiN85wZWtBwHjV4Xx2hVeTdkchgRM",
  "key34": "3jQ11yACLioPNqLPPnj2kZ5fzPLUCiDzYvaFARA7xPkmikhwPGrYsrUqr6EvNhPYADgs4xqbBR7waGQxyyUTwi6k",
  "key35": "q1ZJhS5H9aAaCa8rWiHARdZKnLGhGjMhWoeNfZthD4z6FbV8nHknqByM6p33X8aF9N2SMbwiMkx3dngzbQ3GhDE",
  "key36": "sewbktrtACYzS1ZMWsGda6zcaTW8jG9gcyxjmYUfofue93a3RxPymvv8Fvbc8bcde27HtZt8pMZ2uAHsVDtQXzK",
  "key37": "5YQz6d7n2rSR4NgUmwfEhTHVSMNRHuPa9gpzr9zHWgGcosgYbstAdDQ6Am7b8c7xHDuTEghwdqRv6wm8WCT96emS",
  "key38": "4bD7dVfWU2HLm6qSna58J5wDEPC8ZKgFKVLjmQikYJs8cWAdoLmTnGiHpF81mzkjTu8bbpotQbSQUtvpL1oPGBe8",
  "key39": "3gBaUPyEqEPynSLNv68GvTio5MAVRB6sdZFN5mFsLUBNumAshb1HAqmcFLNgpUjTvJEpA6BxeGfe57K53PvCuGya"
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
