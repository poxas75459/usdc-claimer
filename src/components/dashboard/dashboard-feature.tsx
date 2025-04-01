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
    "XTjoU3nHkeB4VrR6jh89n2XqBUgxqFZWptxfsSVXQzg3Cgsd5viqgdpCdcRcZjVQA3crJ9GdfgRXtuUyRK8cyys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7iF38zy7XNNfGrT5rKv1Eo9TKeRn3epjHsoZpCE2VQ8SjREjYjCmLHbBCCraz8d4o2bQKyarfrRyqmJsXQ3xuQ",
  "key1": "36gu4BcNh2qKjhWMy2chH67BRYG1BUoj27MrfWs7gMJJApEwsvENyMczcPVW919ziB14u4pztrEEeswEjp6Mhiju",
  "key2": "5PJLAhnrPs7DZvxyqxyahPmZQH8GKrRvsutzeJbq9uJPuTVcS6fGPkx3n1xB7Thk3cs1m5Yohqyago4s46puY9H1",
  "key3": "evXr7zD8JQRoeJ7wwFa1m16hjT6oyVntk4BM6zyugt66mx4W6P8a4rtQUDNANpY9w7CjGgvkjAoxRBFhTo5kKGq",
  "key4": "gMkFVpUVVpCZqKKXh27shhKfouP8MB9cZGYAvdjkDmi9ZhncHMm2CaWfMjcfhmWGgSCPuXNggASawZDsQmEobbx",
  "key5": "5PardzUP32VUfCfhQkEAdbhcgVRGKpZdVhba81jUK2qnySx4PsYVg7qpsUPDEFEaTHP8zGGdHMNFZSyXKw8App8X",
  "key6": "SCrp8fEt7eY93xmqiThbhfDjzhXrj5sdEfEWee2dpUYjbpSBRr1EbN3C1qvKMyZvn9KProzYUCMxKfYgYGAxHC8",
  "key7": "5gYvLbb2KBVx1DdkyYCEA5GjNM4xwiiSz7YR5UjxWv2GtUhQqpgBYcGCPANeiWV6YUv16rt56ni22uua7r6oDAaZ",
  "key8": "5AGsZdG6JEdAiAkhFceLcRw744gPp365Qprh8uh3TJHfX6Pr6gtnAAxndbbRXUpp4eyT534VCNxg4GhSiBT7yTsy",
  "key9": "4n3cwrNvbZHrs2yLUyMbkoKHtbQhQKCVKcJCACubqZw1PB6sxEUdnkUhk65DXSyDGd7o48uNGS8aQR2saG2wHtc2",
  "key10": "371PrXdCftoxoLSvNWoQfkjd1aeKYamnJy11f6CkG4qk1gUQB4Ct8ydcT9P7XsJwkyzGNWZVkKJogaHYotHhFyMz",
  "key11": "5CeHkFyiGp6LgFe1geE5jFBxJFYWDsevTUMWsv1hukXMkbQpehWdrYXMfKd9zSrAKW9VBdv5JuDSCuh6eWdbdmzZ",
  "key12": "3RQVVLmuNLX2zxyd6PyPcF8ZfLLBaXw2YyL2ZyMDUGf8pVxVNrYs23pn7eRLwxSGTMW8McYQjDC7Sgq35JUQGFfb",
  "key13": "3mhJQnprN1QppfNdqqfM7KHnraD6ej66hsA7RpdmfqvhRMBcaJXeTk5EYa7w5z9jqtV8mYChuSxfFJcA9xTviLeu",
  "key14": "2YZZodLnvUVCfuGS1a3sLXuN9LLBgvZ6JzeLJKQG4YguAELYjizU99fpCEpyLRVDzeHReej4DqyEgmS4vR6kkE9s",
  "key15": "52vptLw8CZgYviMtJjcyt43aX9qaXhbJhoTWJSxPTaqMcHbkRgkCnByz1KFzxA16a1DMc6dW99SnScYqeH994ks5",
  "key16": "3YKknyFoWYekvrSGjBi6b2VAypgM98Kz4P5Ko4gA6uNJuKi3dtG8Zw6UZNyfnLCSPi8K1XcLu2JLESBZBMXavS4q",
  "key17": "22RWrC1sPsHAa4r8bMAXMKZ6dkUpcvyysPaxsAepiLu72iZB8edLqkJsUxCVU5NkZgXPxuAD8QDF3w8irvRAdZ2b",
  "key18": "3WeZD1HcgsgzFVecHqv1Pd8jqHKgR5RufFHTM53D26te6a3Ttz8caA7coZvxFgEGEH32PrJ8tjZPtTR6fivPXrLJ",
  "key19": "58hvNC4YRce22VWTFpU46oTV8mWAnm1tA8k9rDvHJ683BgEAnaNjHU1MvMwwsAF5zQHYQho5YMWjyBzX4zzWLCQW",
  "key20": "2dzp2jEojxgSqxQugxHnwdL7trFZ87U2dVuFcY6j6HAaMsWEJ7SrVFU6qBHiaSagYm63fSxEvUDDHrh5oDxgGXLw",
  "key21": "2xyjv8eEptTRrSPdHyABKq32UBtPMqM9ym2odYhuedYbjCaeAdVHSZ3MyQbwAGNAYd2DrqXQqkbeJk9XvxRxDvpq",
  "key22": "PXA8KAEgqwjCPpg24Q2ouLZjHNoja8nxUK1zAVECZGin8Nfg5pt1kC1cf8841DmGxTU9MZpBs7BbF9CbDs9M4yh",
  "key23": "gi8meuwNjwz9BjS6KX7rLfqt4crpDTzUPZhhvUqFbUyYGAFvdkS1VqNAPir4gzCa8iNft92pigoJLA4vucwicrx",
  "key24": "4eQ39ov8rNyXJCqfK8JcxWsmCTSTVN2SBd8mNi6psiThqkaNWSnq29jiU9S2Mj171goJf8bavsMxSGHPEgUs8FC5",
  "key25": "3XLXwfE9BYvdNvCpDA3mSwNj6Xeiozej4igC3UAWYFWm1kEj2S8AqyuJUHxLK35dgRGckFVq1gdtdx25SkA9x66z",
  "key26": "sJW1ASv8WeDRQBXgEfT3sbkv7GWxkn6j57ss1fbMVguyKLKdwHrmZC2eDThLn9PhPLRCmLugm5CMdAqLKPxTFG6",
  "key27": "mnjJw9RmvqokqVXGxxC9o7QdGdGKkCZDiVKyC7LGA5frBkxeEY3NBkU2YZtgpQ6ATrsP62biLtFFX2bmwQtGnT9",
  "key28": "gUDTTFxY9oNgadk3Pit8WXaMM1CHaw4LzxQ9WGthtqgdjNEP3sbx1MdvdwGtFzUeTffY4F6V7UVWg956d3EpzVP",
  "key29": "4a1bjmdTQERqS7Zb3xdQ5yeB2J36L1SJBDm8UtTio5c6qzDd7mKTf5fra4v4uW5zoM5REwGhp2aXRJragqTZkpGj",
  "key30": "5hKykxnUvEgtX1f1NnyUA31sPrxq9rMsgryqhsxHHdxYoFRxfuG6gfbSZhULUz4G32fKsBPAcEzUyYrxB9SAnSPZ",
  "key31": "65mHzVpneoipYqXBN2PNUiyzhTM3E2pPgqa9RS6x8uwE68bNHXN5WRYY4zGYrN36QbYg4UFL6EUQCpBeH9SCw9b8",
  "key32": "2tykxuvKWigJAyWEp3stj1EghChqEYDcsyHmQWu2C2W9gHByfv2JQ4xA18n5ZbwtPT8TCpt4K4QfH7q1YVb1Yme4",
  "key33": "59PUNoucGi1ddLLxeokPpbd6uCEMzmDULPXaqAKt6AFkvQSkpduqKB9HQuYQYzJAUtuwWSNGpsNhuBxDLVju2Lwp",
  "key34": "2wF3L7Q7QNira2eBFjPqJ74euQhFHcVNmb4Pp5bcKyLVKKSA8L9ptFx6PPtwTqaxPmnYjtHMJt8g7KcpzV9hqyzQ",
  "key35": "3ALNDoPFB6wbWVFPGS1NuPaRz7dGj7vSdhrM7iazPqtdT1eQCj3RWwWFqz5YhdeRDpLoqyuq71wEwtckcC7qh9jW",
  "key36": "3o3saTitFX1mjwHPXZoieTQswzQCYdwJHiUxUkqEhUWGGE3yHzLYDsW7oVTCtP8pnGFEBLNkZZyxNzD5ZPcm73dz"
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
