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
    "51TJYwT9qcqJTt8cev4dMbbNtesyA5BYxRPusGE5QEWLK7VtVX5ff79osabmNa9EHqqr2KanTGgnpKWdBMd653mX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aauuzpULvRg8tkg8e63jvJsa5V5rUBRGcqE6YKZwsLmRxq8ndDyvq6q5zKCCooGrx7BbBjM7cHTZpW81DsaS4YF",
  "key1": "7us4e9L9cq6wBRkhs9kzv9ngh9hJC4b1sdnih4XUZKXzrpLfVxjskYfCKqfd9XdF5rs8BhaXbk41PudABahccap",
  "key2": "pPxM4xzvzRqPE35MJAFw56EDJ3bsVTwsFhvdJ6ci8tUqK1Yz58BEjgoLvFDQFC67m8D4f33YNZG6ptRUYjRDXKd",
  "key3": "FcLBC8eCBQr3bS72BQgLoCGo927BM3GkV7PYE8Gjt9raPhG1hj4niWNUbivD6ok5rGVNWXKSvyn6Q7h4xDGgUcG",
  "key4": "38oPPPXHVrdo6PsFEcM9YyhV2hMrR9pA1nfusuWu9fGXP8EfSSfVrPZYZTiYfpTfue5oWDnwMQvP93sHXnFkjwYL",
  "key5": "5ZWaEifHnsZvdAXeU811zz4hFw8XxueD84bqZjzNXNEyJfj3vZGgGsrNCA6jrcGijbyVC2uLJFk87q9UNCt4BkwZ",
  "key6": "4x3FkbB9y9tYgLxP86TGb95DWB3CgHQ6bj2oZB4PWgcnE8grcfHZdiGYcd76eWSALGh2GdUegJwzbBqkRV3AQJpx",
  "key7": "5GZ5ytYybzZR2s155sMcG6GdaEakkDghogPq8KHRhDzxYh6LWpVV1MSqaB9i3C3p8py168n357CQ1U8nJLPyrbXp",
  "key8": "39L5LEKnzuqYkaKo4dNHS4x1WTmb8CUkHC9TUgUEguEKqbN1oX6hypNaS6oEFiwoqC1eYhfU3fDhenZYicCdPm5D",
  "key9": "4qVLsxPYNjq2DT5HfWe4ogVbfK6hvwmCv22bruHUJGFDTFJhZWy2S4iMDoMwVV1apNUWePL9LzN8nwSbfem2gMDB",
  "key10": "5C5RsVu2dBxdMz3x7qSS9Gh2MxYhzoGwV6wxr2n7YLoW8Gprdwnb7sCecXe2H2Fzvz2pMgigWeMvck547trCmWiU",
  "key11": "54cNvQHCP3Zn21K8kKcwke9n3oX3R3GWK9XiDCBSD3c4AXrrjwySKBHqXT6LvP7qccNPkjenHSV9Jds4dXvipt39",
  "key12": "5pKdCnLFQnEjFvGjueTdCSpxA89YpAxgJsxJwxTLv7QcSsVdeHqbmZdwuPdJVCR92Jbd3191qPs1uPorPpAaTAZg",
  "key13": "uAwLt49NPzQ9DoHeyHiB2GQcVgKzSH7y7EcgcuiwdPwmTVcZEDeSuvR2tjzaRhR5ZBtjik4hym8r8TQAHB3vKYT",
  "key14": "2iKHJbjPZ3sTFhwh8TckazZQKBNRs388jtMQQ5GZDUbU8KZ9x3Yc1hV4hm6xQgAAiNayHdvHcNEphxxJ1kqVe6eQ",
  "key15": "2GEYuaEWSAoAJbW566XxunR2zLPTT7WeCE16u96echLgd5BvHdkgJ2Eb8Z6byEH9acT38mpe5PJCprP3ScrxAA7k",
  "key16": "3prCEV14HgUoiaiN8W76fKQaYE66wdw3G3VpRDs2SyATo9jgjb3k6AZuyLpZ1oZq6SFCv2hBP1qonP5oh6xdbhHS",
  "key17": "1X29gKeSrw78B5QSLRu5fcpr4rcjyJo8PKdA3PK3YpPG1F9Y4cxi3ys8tHCtLdPEFupczosRXkDUEVNL659ogXN",
  "key18": "4s9LBeDn2j9CZUVLCKmpcWCSYbLTcahCPW7qPYR7jwP16McvDH38jd6mdRnDhnBkcDin8eeKps7csay8gskfEgV2",
  "key19": "5QBjAeUcwovS9JjULQ3a3V1e7jRFQjLFcFsXkjGaVgJDnB8YGrB6gPhbasTtVFbAfNhcgiYrQ3HARpgH2uvho4cr",
  "key20": "DXYJGJZXr1UMnBZNnRShMZQnMdc3vFjvPbtsxuVYXCCc1Ve9E5VwYDvdWCG52GFk5MyVxMNc2nJdpUWMQ6BvVxU",
  "key21": "4emd2hoiLePXeSJW4KhSeUPbrj3w2xYfLepMnDfJ5gTjztzwNF6dVih9uDaChpxBftWkcvwFj7k7CD2Qv1pQkTgh",
  "key22": "3dcD7KUJBmwy1cn2m3S82UzHSfUXcNCzHrpkSo2tfSHMUtVy8ToQQSs8j3V3LEL6ubrxUxQSd3h5Aj2n2dhPzEqU",
  "key23": "2fvj7Cts3LHZPmEWQWyTFYMLCUGR8hfiCFNLCmpckAD5AR2eewoX2tnHJjD8Db9QSSSs77uUd5bRKpjTgqzxV9Ep",
  "key24": "5EYfvU4rH5nsZtHiqEi8pU7rmUaXSRDg5vET5cewcgAt2CAPiNbGGaVvuwHrNZ4HttzpdVZLfgHjHn47ugCKgdAf",
  "key25": "4Rxf5RuYVjVuXmJVm8U9FLYrWaYH3sBYKKY4s5c8TgX1HPRxWieFJFjoTxvVWPqJLThcT348izvXea4wYEjF5enK",
  "key26": "5atbq8HrL54mpJhYztsnM1zyCubwftLHMnKg3F1Gt3MHzeeBQ8QM5Xb2iUULiE7PmWMPcnKwhHGpPRNJBctcBbUw",
  "key27": "3csGqTwKbdWM46NP6YPNN9UPFuTMVCazWpdmGdcNYqsr1ZnD3Vao8thoHnj33V9VNxQcQG9Sf94bsZX4cML2ajzh",
  "key28": "3QqAtLMYEBxBvbQD4ouTGiShUybGqr3ELKB19iiWbAwSMQ1W8JdGvuBmDaB1LaokNqbb3od1iQLm1p3xv2RsqNbo",
  "key29": "5MnsFSJKG9PSvEyiWKpGP41UWWnc9JQyXCsCb3Gx8BhCtVZNUuTXN6nuw8FNM2bxWmQmZrDdpxEUGU279xUcYDsM",
  "key30": "4rPGMjCc65Krk78aww1mooFjE4SzstUs7eNVYXnVkTHzubHymHFfTbwyRfV2iQFsXoFJKJ8s71hNi3MNX9uZHLeT",
  "key31": "2W2CHrjx1NdCySbkCDa45sMDbw9UQqZw85L9Uk7Fjnc4KmPqPQpSyda4DwsVRc4QsNZkPQmxAddC1Pu3Uyz9VnZZ",
  "key32": "3snNfCzL117obwDbSxjTqGH6CFpva443saxGMWLVYT8viMqd6AyS3WzxJt4948sWFMhfABy9Y2yKyFfGZfL8Zksg",
  "key33": "cXN7X1uGiUnYQzp2YG3f2yVA64vXEkzCKYXXBe5Wxc4U27pHawNxfd9JWTs2uh24estvMCnF9DzaTqjAqu7REtH",
  "key34": "5o62MTGmoMW8zizB7qLkGCoBusx5QiKXfMWzkmXVin5HwKHZP1qTUg4uD89QPAP21GFkgyQa4M6Gkvk9WDUhkbP7",
  "key35": "4nN2ZxwBc1RYynvJsoxYCPANaaFYC9H7akcRjup216x4iM22hZ6HxugPpNeS65TgbPbWmbvM3kEziEpVibGVEAow",
  "key36": "5LQ59kHbGkqPsfombuK5sY9H3nVmHRkLWbfHBSSvynci7qXWNJP2VQjnFnEMQLoeJB4ovvA1TksBm9CpC5Lq3nZB",
  "key37": "mMe2qKC5RhtHLjFvsBe7ZwkaUfkVZdMeLSfSL59KCVRDthGCwXWnTcpUP2nMsw9HU3c7GnkJcxNctg6kEZJQL4g",
  "key38": "2btVAjiHjYG1Q9Ka1GPmNbS4RXC2P9JGHpaF3tybhh4wGXgP1FRNjY1SUbNgqaR8vYzPfs8RQ6uunNy4zcPdrqim",
  "key39": "4csYxEamyLUcsWjza4jdt4prZiBE5izmXWkkiEvbmcmLgi5EiUjyKfNzjLtdiUHvyjfM5jRwz7DCAsxGjJCRM8Ph"
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
