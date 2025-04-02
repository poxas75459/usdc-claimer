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
    "3iNJ3hnoANLshEpfEw1TNnQTzUu9thnVLx7KUAbxx39kNJdemLK9YtisPyTd4hrZ88cnVmDDGrd4HtrKuFQDrQQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2PH4AcoorKFkc2a4CZiXSZF9FWtvs3jJUVZkQhnc5oCM1CPFGdrFaB9DxEYLHVgEWi3jNhSJFDoSXUmfKsYwst",
  "key1": "3iHfvFcLiGNP2tkZqT6TCKo7nh6iqWdqiCyJQTm9t9p66j3Va9nSBaDe8gNNc2Ux6SvftnDYabfeRPYQCFv2rANu",
  "key2": "2k21zYXdqHtdXXTZLrcBfEmFHYPZvo8SBKJDrtkGSiKCHBmsaWrFhbLyeM9C2DiE65FQ8cqDYaraMb41sNMN7st7",
  "key3": "472Gfa96hHyPmTy7t3phnpHhTWTfjmWnK9SrARDEvv5LwwgsaFjhXD9yHNGnr96A498mSV8kvooPRGKFZvUwq7bK",
  "key4": "4xm2agNBuLzmSZv7G5VWuGam5s3qeWtjFZGsSsUSwAuB6qsNiuGTtihQohLa7WemFye6CVMLAB8niM1SLwSA5PMr",
  "key5": "5ncdGb9uXC9Gvy5hWpRjzrWPuBSa41ZpB7Pu8WCwWxK5SCFFUpkjSvu3L8oi1rvcauMcZbJRZMNn6B34LsGjkJcX",
  "key6": "526VYo2ZVjPCQCkRFfnKhQgcbCcM6ezRqvHPEvXTihMYd44hPyW3kKsRpPwCro9zXAgV6MyjYRcQSHuxNdzqz9oV",
  "key7": "4LQnorf3qJ4G7Ch9BTpmPjmZQLD3BnSiZVd1UTLfH5HcRwjeUAt5dc5d7JMRaHDYDMKozVqhmwc3vtrnkyx9QdHR",
  "key8": "3vwGxHFRJHnmRn59LAjd9tuYEaS9jdLd3jtJo8r8CY5NccYxTWeuXM12rimCKGjFov8zUka53wYysYG7KUFkiGiG",
  "key9": "3QJqDjyMEujtbuXEHk6R7ExWit2Byu1hNpQbVvWaYLtBaPfERrvK76a1VFSBYDKnUM6r5ifAccnvQaQRtQuCxzEQ",
  "key10": "kfetHvLKrPEGmxDbk4354atRHJhB7FMWLdvpnGXLGycJu3tUzz9hMYQxQSj9j15etANxYzjQJkU6Y8kGYE5e6xU",
  "key11": "2wnMnWH8uw5rnNgjuRH3oZnhGyDguipPrdBpVaNrt1HxVUoaipQpTYwjBzbJjuNeSK6zy65rzmKpZX3ABK1yUSLg",
  "key12": "4WoEuCT4qSTzyv41Rhzpvd7rr5NL6HbSZMy2g8myP1pKFCG2TV5wAHcPUNWkLeNwUjpVxGnie7mm6xKD7ddMSeBv",
  "key13": "5qhjiCzFrt5KetZj7HWTn26Auo9GE8PBLJtjHPcYwwZPoAfgYxyu2YiFgHWkQpw4pRS1tCaDuHFGHT26UTHKXozG",
  "key14": "255KkRBziKgYBdvKuLmNTw45G8Dts5Cseqjz1nDgWwctRLbbtAeV1iYqETmQ1ttd2Uryk4VHMU8UcP8UVpRVnJGJ",
  "key15": "3a4R7GtZciSgFiWWDTvtf9BoggEgfZHGeKrsvJC989nF8pDcak5tym1mpYs2beHCGKLhxxtL123p9tSRnSbmULn3",
  "key16": "3m7Pmz7kmtv8rufmVkGs4LSzULopEQCBpJnaV8taBbdsy7e65CvFnmvxVn3g1NbuG9Q9J22v52SLQWLRznDoUmcC",
  "key17": "3ju34vscr3asf1MmhLBHnVJj77MwdLB4AyYqaLKNS91euw9th4zWxoQM6njL1KbEKHsNeYXdJw1CKEJyqFYq9zAf",
  "key18": "a7YyKcAbEAZoxTxeNgzdysNSq6MTNcpLh4zHCXRJ73Fmjew5baYEoLwa7nKgQNXAUF5VKg9WVeBQ7X93aPsbBmM",
  "key19": "2tABkPR3pcQShxbCCbsRMSqGMJ5bYS2afCBz1WqJrJuy3PP3PsV7mKSxE1ANpWTn9CDX33d5iynLXjooYnv39s6u",
  "key20": "5DDnQN9tpTGbeVEBYSgSksbMzX4gHs1F21n7vYiRL6AtrgD6dW8cQy1DHX21cAemAAen6PKzbuXYhQt7drzmJrai",
  "key21": "4zAEmkVFrn7giR7yTAZNaKdVEK5AG4ZUR5hWDga2xYQpoGug34YFbaTqc2Uqc5K5rKW5vUET2GiQF2o817uZRi4r",
  "key22": "4LZeHxy5gdirbP6L3jGc6EnaF87vqs8Pved6nFwKmko68tg4vMFoKAX8tT6cjduAouRwd4P3FdhsW68WmSq68i9s",
  "key23": "3YUWyoGcVBZPze3GApoSZkM7VWAZaXszPVyb2j9har2uh13RgCwxJzYov3csHDqVEuATzmcK6d5yeBq7gYRovQu6",
  "key24": "3vqXGvWxsoBswSwKoxdEy5cv28xYhPoieGpmjgWW1LTsfyxG2tTHMNPikePPbviv76AQmAfWv3NWu4NtC4oJap4v",
  "key25": "3jp2KeM4xQS7NhUeg17Shp6u4qGAuiwuBfXdrNu682sek2BkQrtg3GiE3rNxvArFUmTrRhPY9VMyXrUhijHDKMCp",
  "key26": "4FyigWNsVxtJynboXkySvKWTG6iptbbyhQ3NhRAsVdnSbHPkti7EGLc9YKECNeYQnVZYwhbsJwuUmKXHPeXXuUzR",
  "key27": "QKuqWmN6QQgrJA6tZeB7DjTq7H3hQtRgpnjLN9wTPd6E965V4AKa1TM18woFjPWu2pdHJ8TCmdDn5JwdjjGTZvU",
  "key28": "2yTKx86fJVYPaLejhnmVhVykuYiUsy4h9cRR5pXNVuvccyBtWUKQVX8K8RMJwUD5WtquFGitdpwq2jSF6xCTXBtb",
  "key29": "64w77Cs3378h8iSkuiGc2tan7ptGdxYDxsUW2sQuPEjJHQ6tZboYT2f51QFmYgXZGdz8rYVMLeZyCcpr52F4M7A9",
  "key30": "4yr2Atu9UkPVEo2yFjVooMeoT63uaixHt5paJdLp3x8U21rRgkpLQVTn21wce87p7TDdT4vcfcpqiGhSq8avFXUL",
  "key31": "1boH4KSQVu51gFT5UcCZE4jg24iwiKYfRuTyo61nM4PWpHnkEkyRSGfqHJbqy5wKnGwcWvwcnP7Jzzaop4Lijcb",
  "key32": "2KkDAK8QNGp3BJ3UXN6GKqwFwvr3Bqmd6CUawM9esChLi17GLUQg6FtdSzmVutNC7tPv2bp9Fpz9PCLRJ5qCbXXK",
  "key33": "4Gf4frCajWFciLMAkmk999aC853BZVbVP5JrUC3pswG9HvUsBKjRkQuQvEXTRLyU5FU6TY6MuQ5ryxs8VrnmMYmV",
  "key34": "3yMMNQKdKGvyGee35WPRuccNmx6vUo4NRPz13x8ADh9gQ8Nfi4zXPkW96WZQAJF4p9DovPQrSBU4j4nZ9Psn4wbE"
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
