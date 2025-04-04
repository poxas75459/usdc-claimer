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
    "5fYE1ZLCxL3cPEypSKabhF8TPSM9sG8np98JCLEDNdNpdpVbbMWdvCFFcz8p5T2sPxB9kbqHW27UxnUcDu4KgZvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ABde2hsTrcMfjSYYoqDYBzzDxny6tKntsyfwtrsyDoUyH2SJ6cbsaSL5UxRS7abUcTpNQMfqPcDu5x3NoTnjz1",
  "key1": "2KLmijnfB4aZ7WzwLBE5hGXWvHUxgWHNkdzdxMJosKmj34BQVPSHQX5JwrWtn6kh8VtS8ckcYhDpUh9WHXH8W2R4",
  "key2": "59dTVsbivi9FU5YhwU6VLTSXhtyY33hfkfzx9FuiHXm5KK954fo9XGaxnSMkcpfy4BNHCoqXALh3afUtzNA8EpdM",
  "key3": "3Fo2r8feDJKHeX8srbC26vqrkVeLdgNQHhoEGKAhGgZ1UgjPFs8EpBLmWAhJxec4YG4t2HRdFRTjacxEthrZEcXq",
  "key4": "2b211gcQNQBKmndSnjEHk8nz3SpuncCeefdxPxS9ckzBNg9iDNzJA5VQZmBLmmt4jowTuy7As2yqXra9WV7o1utw",
  "key5": "3QZ4dFPEGCiBejMi1K6y41GXjij39PDGvXBQxGBmX3c2AzFGa4foiKJAuUYUHCZfLN8YW6qvdTyCxxKorFfN27oQ",
  "key6": "8CUhZx8PCd9uttS7LGp2udvM7EbHQddtBoVows73Az1oZNdcDa3hNHwGNsyZkTyjHusN688UCwujBh5ymABKtr3",
  "key7": "3CaCAcPz4mkQdASusHTgP3oqLXJfv9Jf8mCjntgriVBnpgVGWP6zdkeavj5vAmhHshJypbo6Xc8fQ8VfdyyT6EJ4",
  "key8": "5PKnDkPTXz95SZ7FUN7vWMt9esWMRck2CoFL6mC9Zhhv9hPPKC2bNZGgTyzYuSxc3YW6xEsaYETuacpT8ozQZUSp",
  "key9": "5y9d3tLfPD7N5GK4UT11vXVk2uZ2MYSE9z3xiHjjpicyrDUP9fPq7P2zcqBhKSy6zp7LHyuo46AFarbN1TQNzikr",
  "key10": "DxGLM6wU1m5Cci5URte7FJ4brohQ3YanernMoBhM8wZPHGXtesX7zfcAejMPEfsc5Q8tXpxyTgZb4jDiGNHzcaN",
  "key11": "5xsavmS2PA8hFLPQsHK8gJszvGWdBTWwz4gfwQRbZkt5hefwq8LyFbdbdxKUiNVUCT7xFWMubuJonEUxzCGSeaDH",
  "key12": "4r1Eeh9eGAuyDQgZuuyWpkT62MB9qzE8VVSRPBEjnwZ87K3YrazfLpvfcZb1H4VxBtYrtNvK2xLDsoop5DSTfXWe",
  "key13": "2sqA7Pi6ZcPM8E1nnNAi3cSQePburNQZXaYaxpYYpwm8fXv8JQNZtSx4ad1KGcd2unWvdofxGn1jaNmqTrLHFPkU",
  "key14": "4MVTvYsBZ1ENctjV11fLqPTaYQPR2Ve4qAf4TvEmLhW6aaBurxhrXExMMNZGZ5sj9hcs7Xv4JkXbTuQ9846WDqSo",
  "key15": "YcyJEDsEzUhqQihEhzjfJ2TUGFYoVyUZbvseSA41YQt3QMPKtSrESxueyD9udQJCP5CG8azC7mYLhuKprgiH6Mt",
  "key16": "WfoYtDvipiJqVzMrWSuz7Yo9hnbFrXCwGdFSw3iUxGJWShbaDhrC6QGF5XkjWEhSwEE3rqcPSYidhhCi9EH2S7e",
  "key17": "64M4xE1ytV4cgzjXzD7rXeYVfkwNesiPQRcsHkZjdHrooxgvY2hBKAiQWctVshydfGcqkNf1JoX1FZh8PpxzNG64",
  "key18": "65uN4DGe8qfXnaDe3Yo9rU61BTLDpRY61tg3UxnznwDYeRhbRsgzQ7SADqrXEQ5QsvtJMq6osxesiD9dN1HgAp1n",
  "key19": "4TivGpkqKkZEqrw4ododU4dYX8FBEyrahgp17Gk78UWr6eX31kuzETxRHjXYKA6b71c86SzdudgE1vf7k28miF8H",
  "key20": "49ksumGPM17Cs9oPk5k71en1jiikYJcVs1npkuWaGCEZmq6ptocNzwqkkXTSQVrhhi9ij4HNL2WkML78GUGEEST6",
  "key21": "56FLwDPdh2TtqN99fmHAtjcE5nZPeUboN3fPryA4DcfjRZWdkmXWpo22JDtC3qJeJrQziBihnKbXfvHtinUnDEqG",
  "key22": "57AVyguhMh7KjgyKx44UTbm8DbXfLCoCMbDtJkXjf7GdzBHwX7CkTvTydfECyAdLmCJVhGpDYwmxjyUu2skNMzKf",
  "key23": "qcUv5LUTRUbWSUn1Qxzfzi8E5GZQr8ixJYA9BeWCVRPKnMbwjPoMymeNmF5MfRrn3VkrPPYrbH8hwFgHH3NGHrn",
  "key24": "519hhWDtZ4PAm4AAw2ZMqhbnBFpmjFeAnz6a2VzNpUDnPbB2bNHFDkTeAwfXBo4Y4c8g6uzHqy6S8vdKrj2Sxs3g",
  "key25": "3MqEU72JBLy3bmfqctRQZ3cGhFVZSGM1artYBnKwuEr46b3q1msdh1qZTP6aDbNKBrQA92BiSRoNMSZxgjJkCJ2y",
  "key26": "3EyYZeTXVE5zfKzmFCWDr3722XNVMCanhon1BSKP7LV9cwJWe9G3f6GiPXFg2SrZ1kzVfn9TTA1WX6ecV5ftaVW1",
  "key27": "4wYeoBDPPZaRi5wPmNosRgDkvJSEPJFGRi8pmxHkrx7Z39mPWwyCvnkWj2yQXnqJg3jzw61RDxqpfn2xTQ8Wdcx6",
  "key28": "4fcu5qbbpCYEBujDhQcnvtmpqiHjbGnWj1EphnLfN8RdGZeKtK6cJYfmdHbw3BiTwwzfbKkBYnBeXNoRmKRH2fk6",
  "key29": "296seEDMRT7GLHY2mLHh1iUKwJZHDFrTrpnUXQ1NfqsETiMkjXTn59A6Yn5y8uJHuvq3GRiQi9GLAiUQuWKJxwZD",
  "key30": "ybWLR5g4ebdzkZbZF8r3gAv3uGeTriVj6h9zbm8TLq1155P9eTTmkZC7eJBXdf9gS3H8fbeyucGgP4qSBYM5cPS",
  "key31": "5TRMitMt3MvitozGMvpYTNBZhGtrB5LSW1Hx4NMCbRHjhrQSgASEK3eDGCGRoQ5zYJfHCBBGk7dfAsn9iwTG7riG",
  "key32": "4aTURxj56JoizvgTVrTVLVyrjzy7zUnNpUTQdsdNeNnYNH48S7s9uxVVKzj9rvagCN9Nt9dU7k6bg6pmUWSLBeao",
  "key33": "3xXNsXsuBGPFuT7S7XPjFzfrNLxFTFLw4nxg4ahTNQXYxMfZMcpsWsLQV8kU3yMx76C3qxNHhz48pqby1Nvd9mQf",
  "key34": "4P7H2emNgPEigc92VMPPrJxSPZ7f4z76G8o3jQUmhDyupamAc2R4azSWhCa7rgcc15obv8iYCbFZPU1Jb2cEzNqY",
  "key35": "3vmpdCnAt564WxgFr2wzcdg8bWWFBLPY9TmPj9gPtK2BzjgjnVyZa5GZBgB9tVQSh5AQHXi2kCm596Jn5SCdD27k",
  "key36": "3BATUxq8AU6nVKqr8UtywMiAoZ9bpVrfcrVeqRB5QmK7hCN7AkbHW6ybjRJxrS86WmGVMVUFLjoQBwpkgBtBbGGR",
  "key37": "32MRtxt9U8vqF74FSWEtn8rDVfuVKi71pUX2X7KjzhhHKXYkqM8j2KS59Wq6nQqAQ8zqcfUtbpcV2TtYBAhmvbdX",
  "key38": "fsMZQ9JmuqYHXPntt5LWHKZcB6eMLHcXXZvCj7iyaVC3pBdPpMxSR5JNvgv12LkLiYoHUHUAXX3CpaCWAFccUpN",
  "key39": "48iHYEfdN5aB47RNgH3qdTxsoXxUivk9QDGYKAwh9Ww9k28qTg82vw9fjjUh89FDgSXja969UFUyEjS3k3A8YyLY",
  "key40": "2tKuPrsKH1k63hdTT7imrjVa2Kb8fQA9svs4XFZA3eS9pZFK11CnnTf5K18P7zQ1uYsywUJuna74U8Ti9MQWthFv"
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
