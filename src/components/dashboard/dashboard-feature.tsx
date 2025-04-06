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
    "2EcziWqGxrjdBmYs8fY3ok9hqyDdbgsMjqQMtgqJ4rZ5poRMRSr96MnckBM1PMcRG7f7nPM27LftbGy38Kxz3BLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohiupAeFpE18t5KNUigxUsrqRW4fWhswkLCzXRuBpxzXtojjQ3eXX5Tow2ka1aCFymsCPgEXcEFS4tV7irzgt7E",
  "key1": "AAYWpoB1ucR518hPt8yFy3V95y2fVu8FsCwWnS9SsCpQ9u289DSc4LGSGjKbrfUUmSTSb9R6fmb3WcmyqYHiyYW",
  "key2": "JAuESbJeGw7q4Tgvv4JWg4s4U3nrL8n9bC9qTD26ce2XYCsjYEaxhyRrKsRCQHJ4sqFzoyE6DrWc1f525G4eGYf",
  "key3": "a6RnrpyTRe72Poq8nmmq4sXbCZzLat9d2TRcUfzPYFCU1ZWLHeYy5Wd68wTLYBwQDrhsth87EtRhPGyoP6Vr16L",
  "key4": "2XkWfyKbeUY6CUNzba2ojLYAEdcBnXjYknVemfSb9yk2qSAzSahhgcj6AsgGi1Ht9RSwdM5hAnwcjjh3btYJyjR2",
  "key5": "5ePo8S5BgJZv3xPVbQkh4BVvVX1G9yHS9LsM7d4SZe7N7PZbA3nBZHGSeDrhyjHjBiUd3tAUCPxoD78kZeeLsfJV",
  "key6": "2vJvnynSu9jvMCR5dKz4JF3LEWA2nFjbVPP6KiQzvHJs2d6tmP8rcQbGgKorZafqyUPkT4NrppaLLpAuMkPVKjhN",
  "key7": "4G6kPGH4aVeeZyryYHqHznXQBCCpfPX7WKRQq3i15Jppse7mR1mzMWveuZo48USF1Mn9AvGufdc4CXw2LrmZz2oQ",
  "key8": "5iHmP9LJWwmomATLKv1GHv3wW9D6tW9mRQQ1UZCGx47n4mQMdhhigbprUN7f591NWAG6FgJj1S1CTqpA3pTPkL1Q",
  "key9": "4HQHt9247WpBtQ86XKwqaxuEnLTSB58jMzZmuCo9Fe1t9Mugfzhsxr984TBg8hZTk511hPZqBx1wUH6hvJQHv1eF",
  "key10": "5MHTqH1VRekmTsxgXPdEyy9yGtC5KRXi9BewuutPwJDyd6XwryGdK5Pe53E1K1tYVmjegmVWBsbLjDWWG6HNRrip",
  "key11": "2Voytmo97GJF4WnYZEHXx4EkQTDdETX2w1uw86G5NSiTAtLqGKvTqD5TonhCZ1H4n81BaB7XLUxtw49yTP65z7ym",
  "key12": "5HS8M1q38yDns8KHRaq3GKr39tYbHK2HaA9nk1Ts3tcXadQSxPjvgwvXaqr6Nj8H3FE8WLBgBFofn41ypxhVeBQJ",
  "key13": "2rGQh2hAQn1qWK3inhpf13gMu3ThzAd12sg9YebhwePgTxS8R6yikoVqMedYiTPC9HVH2gw865fP2nZkzW5qC67t",
  "key14": "3p9TnF3ty7LdaW2tsPQDZZg5UVvP3gxyUBNZ6vkGjtaz4BhCjDpbppLw7HYWJsKWBe3pw11eUCUovbWeHqnYzeTx",
  "key15": "5wto9doqGBsXudZH4nHk5YLquFdSi2wmxPS88G5ZcxW9TCq72mw5Xy6YzCnYsjEVPg79EtiGs9s2ECEYHr3D6vw6",
  "key16": "AmuuYkTrECQC1gaYA74zc9Np3nfKq4ZAj33DvYdKyeL5CVsZ9sUbEdeQsPVRvmifoVJ3bRAoTBbtMAxYWTSHSxp",
  "key17": "5v8SYKYWCR7S9UmVNBsSLuGyGJLBxk1TjyjHFiyPhwM4Z4JQZyYekBwFFCSeF7R8LW9yejy7EBpL5JyTWPPjsQ8j",
  "key18": "2p1VyFWfGHZYzUuq2jYzfpa2Nux4vxmgQvD6eu7HmBjZXyyNgTcggJkJawD3CJMg9M22gUxfgqNq96NvpQLer9mh",
  "key19": "QB7Wu7HRHNTjSFtc52uXZudvSiXXyFLVghLrgSW3Uk7hT8R4d8s1AQ5tQSmiXtAUazax7K7hWYTdavfrF8bhwch",
  "key20": "1QRHaj8MGX8g5iJfrSX8SmQ7J3G1hMhAPJRRqaNcu5boWkXpjoHPndAqwvtTaXqMuEE7vwQnafjcFuJBjwdcw1k",
  "key21": "dqSPsWBDTEJkjryfB9TpuZXD1n3NSPEZazpj9UBE8LDZ28pQg7R3MP3hR95nbNwLb3z1ws2jTBtGmUoP9jA8TXH",
  "key22": "3Digqew9xMJRpx9irT2cVmjjb428P94AvbXaC4MFD84uEU3jKZS5ZrHZki96ndLfU6noeL2xi28WMGjrVXM1JDas",
  "key23": "2VMZwiB85AaZhcn6BSD1MRHpMAXjzLH3nzWWAkopJVoU8Uem7D91rCetR16Lzw6NLpTdRVfLJHjTbrBdteP4mWSG",
  "key24": "66wFTumxc4KNCparrNPepV7MHh21wAH2eUAmwiVCAjqGG2Z3Rp1dtK8gmXwWsvVRFfrGVPpwyVHqMYeCKY8QRfw4",
  "key25": "2V4VdVPWsC9YVkLXgvTB6k7X7aiwf8dQVGJQZWVH2Gdy2WxLhdbSXphq3kDn3g5XDH3bLTxiCMwCdu4iTdDdQcif",
  "key26": "4mtZRARk23hW5qw5dnPDGWxiP3bhCcrSm4KsnyxdSuKyZf2NC1pcFXojhFizHvco8ryF4AiMsX9w8SCnNhvmxRNn",
  "key27": "2GCND45Zw2ochomHWv5g4qZbxisVYefMmJAXcXUs7bmFTVV1yHXRW4XuqzwfqQDqfg7fUx9q5DR6s3SWYAertHfh",
  "key28": "5go89piZ6nPrYveFhLL2Q84z4mmpYXn8nqErhuK74hMVwvNhHWBegAU1wFGt7KvZFxUN8eafk9eendfoJHpWK2sP",
  "key29": "Y64CLeyKFFdrTAiA9KpS1drmGWTtPdJfkvE7LLXCetEPoTZRR1A78HTC6UzvxHxn1eKmtDnyBcwzYmUUnQiCdjm",
  "key30": "2VBekPEBDes8Bbu6n41PPMth3joYtoXrPqeVYU4GUJQLeesg5iAvWV6jJWQvP3D6giJrp4qw6aAyJMdw9guTU3PQ",
  "key31": "2aVhSPMLzoxWuCjmvCcBWWVWZYZw3CGDZGZQFKGHVLEmx8MquRawtixPgj1D74w1vNkGXGP3pJ3kpkqJ3iwq8rbm",
  "key32": "4wQEt9oV7AioFBpPkeaws5yXEdKXYX1eJqLJaSr8NwWBK4yiyUqxod7CYqdQAtEYbGqXtxdBxgy5QcepUTsw3PFC",
  "key33": "3eQyXtzG46cDBjtdmV86KZjXGRvN8A9wZxXk6VnkmAWJkoSxH4EAWtMajDR3hPKrSCgvdcpakshahfdG7Yxmu89a",
  "key34": "41XrxZ6HD7BjzVE3s6igfXM2eVLXCo6Bt3onqeD3GSoVVSMdJXGNN4mYfLDHvq6d8UYU1hcS6tedhucDnTRaXJnP",
  "key35": "4hzXj1uVGULSaAwzAJibF3ir9qMCX4gTXeJgRqqydGrJ9CwkSmGangKpChtrGna7kQ15jW6jBsnmJUPX1iWwAkjp",
  "key36": "4M41NgAiU2sYCmB9BkGWCyb5SHhumN5vnqymoV4NtwDWP8cD9ALB6ySqBCUfxvVnpjKU1LQ2Lkiin3RahXdn5zTy",
  "key37": "3hpPDu7HWMwh13er8AqQU1oCZmD3Gtden88XvCjkfgnRyTKsgBwHvLLHFr2ULXwaHh8GPq9CXxcevCQFQCLbbT3N",
  "key38": "2e9bVFhtbT11LjBYQnNPXsXcS3EFpPBskN5t6uXTKzEKNDVgvCorDTQu6NEYfim9Ef9JEmiBWV5RJvBvxY8SJnEx"
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
