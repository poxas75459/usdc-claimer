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
    "4MUPETkDBbT6AZLHjmXjzQWJuihPWqzS4tySLmX5dk7o6Ca5gab2wVVkNFg3QBFk9f2NTMru6fvGCtrQkHYxbaz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvryTYMwJpJfcGVJMBUn66q8Pde7fY11mReSVw4XkQn9CKBd6y18xUQ9kdZqXkuvMWDzF2w2bXNvwft88oECqGR",
  "key1": "3Xobmc9AWE2T4t6A9cueoWaeEymsGyoyTKob3z7SKXUKR1gNdxKduETHazkPYxStLHQNcYkefwbAP8dAvms7x3RR",
  "key2": "26hzfXJ6tdCortmWFG9DN8xSmHEF7vUKneh7B6VrpRwRrJihEzKAkaTN5aSb9kjpQZb2REgQcGtcxZdsJJs75QW1",
  "key3": "4BLxTT6sZ1NoAkvnTJpuxkca4hwZdqLMR9ecnpWDeRHxKQhtSKc9YabT9kpRTwDuGwaokRUGc2BGymmpFewiCgwv",
  "key4": "3iahz8x1FDsxW5izDW9aoKaTRXVzkDQ8ZNnqeQhjk7WQZgX7LNVF8vzu5oXJ9ftzWs2WLNKpc7ZrDFNaSJc9AWwC",
  "key5": "5nvd7kptZVrESsfhyDNPB1Xrv6CZ7T7hiANWHffGywWRtHKJpxni3SA99ygSZSGTeHG92PJxCi9WG6fC2a4STToh",
  "key6": "4MCLYd2hZzo6nC5BM7u6Fno4SaxDeMjoj7BuzNfSrsJoVm2ZFaq76qdmds739W26h6LfsVDtgPZYLhNZwu6vtMLD",
  "key7": "31HVt12g2Mh6CpBmjYm1NJCj7ncv1aC1LRy39pbCZ3oyTkZLR8pcU7jKrtoo6QbXkGaQrLzBcVYfWg31SEz3axtv",
  "key8": "236N6zMGwcoMnqPukaca9UxfUKeCjCKwpcb6RCZnHUJJLGD1NqirDiWxCeHzZN13XfXEGD3mg8LhHEo5afXCEaVD",
  "key9": "5Q7RZ8qMJizGqRJhN6fQJASvYrxabhoT2aWga1DaUtjijjFZ6ir1G8LvmGEU7v9Hd3udepPLw5xqZEQm4i6MTfjN",
  "key10": "5pHt9T9SWzZ8frUU7u3gBpQzecC5ceTaVnrUVngFYfdUo9Xg8WEni5rSs8KGP4Bi6TngNuk3edNT7pABDKEXgxY2",
  "key11": "cJrBy8UikzBKsiVfj5oYcYmkbHZVTVyd3LeJVzhnC4ptCVkzriJhNnHuoJpjqvwYk2HwTcJu6W9wwbZG1a7TJpx",
  "key12": "3cxX6uwTayuAxJKpshzH5ZAgicGQUvic3PuYDGvNvi3zyRzKHDtB72nGNnVWZYmVsCgRWqyAmrJPbtYZLhiGB47j",
  "key13": "3oQSE2imHMiMo567siEnZDRtDYKmSU4dzL1ZQVFuUqMwfc9uEcbmnTTr8tLkL48yhPrz7JNyub4m4kDhvicDQvNk",
  "key14": "2ceWq2uM8o3w2Rqfq3Fzg1uAHwNaoH3dCX6UR3pbksP4r5fQ59yxkwifjdtRFS3GSwdK1335EskAGTxydKgvWPWy",
  "key15": "ui6193QJC61iTxCZtDyBaunBpm1aP61auYkrbs4mTZJYaTJc2F19shU9gNKKsBJVy1PE3gHfLMeiAJgTZMUGQbY",
  "key16": "J3AUaxSTzKf5W5J89dgBJPfhh5z63tQL4YSPCseZU11L597i7twWpnL2nUyHdsBQAw28TSPtyA2kSP9tXvtMTjt",
  "key17": "bkq1f8X3VxgbhvMCxbCawhGhoH4Ke8k63WW24ucVbvjyMNzandu2k2LFRQZsxTPCitBpBkz82RWV13615z6BeWM",
  "key18": "5N2YahyFUgAKTMLNaWQCoQXadSbjjCgFqeeoLLLfPZrhWKf2ZrKw9xn7Pi8Gj3PNBUr4syziaWydkHZdkAkL8t7s",
  "key19": "3UZQiwbmnFWLep6xxs9rNUrF6yMi76EUf8Q8b8RYhMgjFu6nGcApgKguT8sgJF6cXopBNBa3zcp3Y3Ev7rMaU6xa",
  "key20": "3nYuBZNSxr4SHGiJQiRsvsDFtc8KyMM4gbEWqVmVjCip9eKMEkwArLiiHayyHtdK1XZbFAsE9Zi7nGpS7AioMLKg",
  "key21": "51eMZZaeenU7gxkLGbdJ4gYKwKx2nmTxHawzBDoxjLw4bCPyQny6fzJqE4RLx1nZqGUokBFDcUXrpEUNHbm65pV8",
  "key22": "icP1cJQXmrWvM3V2zks8CQYQgb7CEyPinLFtAqZusyivNn3B6q2cy5w7xXbiTD1qSHCzHfh9ipUBbCfUQ1aHZLJ",
  "key23": "2hrpfCb3gTqGLMVyFRYtpfkVFF4rL1oHM7pFdyuBEg4MwT3BPefCgApWZNqwVmtk3U2LZphp9HHKzjRCSvRP2dVy",
  "key24": "2kHAoqSHzz2f1hA1afnxTR58eyUXyN88NFHpcbRcKhgmvhbv8bHByBEyBAoFf1j5hkdfeEFubJLoo71oLp1xNPJh",
  "key25": "4aqhLS2jfKy93VRmwMxCgWCVg8f4Zfg4DoQ1bJvamRsj7S8aTZnMb56XE8fMjWqMEM6KgC2sYU2DxWNxLwFe7Hdu",
  "key26": "wZvChnZ5Yx3koo6dgccvXJxNh6dnvEYjknrhQW1pmAjpojRRJvdtNpf7H56X3Qt1bJtmbjnn5pBvsduefYk5vcP",
  "key27": "UuXaB8jLPYwXaYDXVHz9xTU4KpDGM7fXMQ5MumQCqRV9vGMZXhfM77RjLFbAw6j1SHkfpg39oUr6yBifGXSiCqa",
  "key28": "2bkKqziZGi6Vgy876mQdD3EqQoPy2iFxoYVteAFoChcTgYAWH8VDkZ8hgWw7Lc62u3S8ABK2itdrTc1tqxJf2R3q",
  "key29": "4ubVFoyU26p2RXbZAQjy5HDYhT379xH87mgmyTqEUgCdXxLJRLwY1KtFWcctF3gmJ6W1kVnWomdSWq3wdvV6aH43",
  "key30": "3wNKPNKzpBBpSwBExUAtqzx7RBunvbjjLxnAtPjRCvR5x6JD5zCsVDc2yFnLqerVMDFtF7VpEhTNrDByPCPZ4hjx",
  "key31": "5pFwh5QNJZeEhGWsQom5JCgxu4R3xnRfdivc5qmbGWL3RX8YBHyHAt1CqrWUTdkqSbhShvTzUGKV4JhzqFp9qd5f",
  "key32": "5JnCAjxU4qUVccMREdnaZPZsr9awB6RjsVdzhSnFuL58tzSpvwD3tzMmJFtBPmhSXcczfu6G5fUpQUf1btkV7sd9",
  "key33": "2eFZdVdUUg4hg1rxPZUPhDbXPaQXArnmi6seC4bpbfsFKjb8fgpCcRc1miGd9rYzLqybQCLp5ZpSWbDi2k4M1AHT",
  "key34": "WGbdSu4qr17JHfGeDZSpJwXoeXyZt1DHU8M2PzGUFfoWbDWnrdqLmNctUZnGagCmSbURJFH98uUoWdEGCDPYZLt",
  "key35": "5HRac4AnEdQSPF4usiQoJbMxXooYeuEAuhoZqVmSCQtz1X7mYxigBNWQfmUw1Ta6eskhTsB25oeWyXLtbjS2MWYb",
  "key36": "7z4HVCN7YnXk4CTE9ziNo48c6jp8RgxjMYuXHbaz4TeoiSkaVQs2UdJLW67qwoqjiDbY7dd2z3cvXNVtHkN15oE",
  "key37": "5iifTQsiG2o55B7HUeqxpN5xTMXYgRJEc7vMrW5iGHUtkfkVfKgBh65iKKwWRf3NGhncAjD1hEk6vK2EDAXKsj8B",
  "key38": "XX8u8cbXDViwCM8wJYyNLvuyR2kce3PPskGdSLcKHoL9qFSH16yUbAJy7SLKE5TgXrWhFGo9xWXBaeWZHYWuwaZ",
  "key39": "5ZRELpBsQLgCDLQhka9NBf6YmrPcrrSSPpd58T2ohnNm2pjE5b36bUzDCxZcPdGCrWGJB4kFfnMdfrFhL9hLdvjs",
  "key40": "37Y9xnXc5uGriJptBNv2ttnxZgT62i22CZ7tHs726U8xkqbeAPtqtS9KQ69ttMmoW9diTKPdzhnimm766DkbABqd"
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
