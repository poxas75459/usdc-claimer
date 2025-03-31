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
    "Y68BAWkLvsfTG7LoZvRSvJaA6h9gmgt99SZfTfjzhyrrpQvqEZinRT37BtkvqsAAfKDfbC8UjYnLdaUDy5SfCFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQhbRjbbRCg5dd7imR8DUDCAhAwDkPAvt12vQZJtRps328ccu53PQVC7mn8CXYSBjFELgXVQFjfJxp2YSXe1Tcd",
  "key1": "4gmeV8JFvbQKUaqQzYBdhVQQm2FkVfCaNFawdELD21pCHRnMUo15DNrp6sabtvXR8uXCRLmGYSSpT8URKkM8FWE7",
  "key2": "Dej2whcdnpQKFqX8JdAKcARZee4tJTmGFn1bsqgp6BZh4N5pZxJZitHRoHEJbLfEaE28J66KnhaU7q5MuiDD9wE",
  "key3": "5C9fyQFgiHjcEaCUTTC9SodPaxqtTRUE1aXLFziaH4W5LZTEfyDqq8VEaevFerxrfpK9EUGGZpxAVkpMSauSZLnA",
  "key4": "5pFcBjdxHKB4Kpw7jShJPwAq8b4NvLwtWpYVyWDpSgMvQifHmCq5NUNBZDTZ19uGoYhYqDxwrVsHwgoW62ZsMfsv",
  "key5": "4v8YJdTnMRERewkJRRxBWVJSSLQXszirHXXA2ebXjGA7dMiXk59yGvVtDvnwobfCCWXeR8VWnvWbpQZ8MtvjT2vs",
  "key6": "2eF3KbrjYMRbVXTBjnPkYg1pX8Jx6KT6aXkuPbwY3Ydt7L4scCrc2Cr9CUSxk5C38GYAQ6akM22CrMCYKWcCFu7B",
  "key7": "7NbwqSaQipt8upSuHhz6RV61GH2rGRUW9v8VsX8GurmTQao8ecVzbtD8nH4DSEDDk5RZ3o5uzCikRZh4jhCUFnx",
  "key8": "3roE2s6mMewMddBcTF3dMdAdXPvYPcAtNaqJL7KmMZVxA3Q19NYkCPzpR8oo54oiVonrYoK99Eew4jphg8UmJT4k",
  "key9": "2FEzpdvxxydy6fwqDnAqrehDZpgAy668bvKyr5adk61T1Sy3dhTVDbEzWSHifCNQtu4CmpNB6XLkXLzohN7u7VVx",
  "key10": "36W1ve5DWmA7tVQ7bDVX9yr9pYm6t5egK38LskKeuGW5e4FS1JnrryqMMWcSu1Qc8CdEzBbpLGGtpCcYifH6bPVM",
  "key11": "57JmE21KcMMLDUeUYowxMuZtGMQUDLJ7zC1zHKkoZzDJxjtAuqWL3CqpmGwFaJMcLXkPXzRt7FbmDB9nKsx8Gxzm",
  "key12": "2f4fbz3bW1z62f8PEeE1B942J5jEY61vQ2rzNY3vLBBJGDL4xkpaVZjzN1DgthnHVExeuoekupvL5PkHUBd7hRSM",
  "key13": "W8rmwjdqyJNkoYgQju9eXCCwYYWzrHqS2V3WkEG9EBjDaEg1XXS8kijhzeuJqFxqY8C4EV8CNKWXgRrTzCghskm",
  "key14": "5wW378yHKBu4mUvuTigD4SHq1Qyq7PdK8NT9FHeWAuN7PTcXFRRGHHPbKPSj6mV4DLZAH8fCNWyM7YzEEcMQuk7x",
  "key15": "2m3f7x7pqXkidoarQgcCtsAd5qwbzXczJFj7mXwwA6HqdapeuFHYBwrtbrcsacv33QhGMfrwqGHqKExPwmaJ48tZ",
  "key16": "ZsXiDYRCz9ydLsGtH6WriC1qZajKpm4SRY1b4PXkGXEYY7STRUwvPMUuZjg1zQqQLBH1uW9WT7f3229Z7tXJCgd",
  "key17": "9n1PpfzYwYyMZdqmDFQAWbta5DRFW9GWbdzCQ163vma17XLc2rBoyZmanXa1SCqKXuQmDACwMTmn3RW6QihB165",
  "key18": "3fN4zigwJRHeHi59tztVU3Y9vwksy5y6CrJtyU9NrRyR6Wwhg5r5VJKwGLfAKnHUL9gtkhEb4QEmyYG6pPSqLxkP",
  "key19": "5yGyc3J4YwFgR9G5RVTwNdyUJaPty7999fFZatqdTVDvdQERu5TrYxCEcSHW4qDNoWrvKMYdf4NEuszQ6uMoakWX",
  "key20": "34UQQBPoVoujskSaeKtpiwMRqzgps4uTaqUoN2RGdUDXdPgZTD9Udca919QGXjA32aqkepRBDvP3TqEVB7qGze1k",
  "key21": "CHHBTwuC1yBhnkWi4LKaDBgF1BcSD1KKAtYhvP5JTAcCNJmrCZfPjCECoa5o4H7Sx1ziaPADaNe3bCxdmGdKDta",
  "key22": "3zHffX6sd1sXN2PHqAbSixrp12isGWMvHtpJkd8vkH416xcJs6My3SPKbmAMRcB8dgfS1WEN8pAJyuZkWwAsjmxz",
  "key23": "5JkAriw165zsDQ2PQ3fgH2QyRTNaAfTXP7eTFZSRXNVM8t7KP47Ls4QnvZVhwJWNgnSqNGBQBLNzhXx2guKhHmiH",
  "key24": "4UJt2sL1WYGJYYXCstLT3nuXew7LXTBLREXhgL66tNJTyUB8x2QUMSWkvkv3QDPnzBwnTaT6BxTbSToKxXCoc9eJ",
  "key25": "66HzmhEQ5sXirCYSxCwRgvEYcMCKSPt1HEwoZYbp7sdUjrW7pVpCqEayjRACixdH4G8HRFeTczj7ZjGmp89dpsSb",
  "key26": "3fh5rWcGCpzLkjGcLGaPmZjT1Je1PY4xp15eDb9hSuL4MMgy2388QfYz4BnMsaN71hjkH9sQczNVq5qGU1gvTLyD",
  "key27": "3k7r4huzsaDpk4UV3N2B7HF8sp8vmixk6n43u487vYfVKaL6pT4LrgM3xGFtzgysfM7g5p5MBVvWzwzPaVENZ2eC",
  "key28": "5pgayEj7pvKdULBk8ebtXyqBm5SrBnw4uJknRQSmMvgm8czNGxEgcQxM4K6tkSUrMZ6yNLQTtFSZEnFdepvFPDiE",
  "key29": "5vGK97rnzXGfU9AqnWrpQvapktirPHsFLmLEV7VaQXRUsm4WwxWVDRbCkx11JKaG23jjZQVGu81sG2SsD2fsAg9v",
  "key30": "5UC7DjsowNKD5bMrwpjgWGhgkUND3rmnn4UBmSh1kPyE2szXSYaghFF1dGqSsL9D8CViDWPtXHCfsHKs8XE6c7Ua",
  "key31": "3MoFUcFoEN36HahqzBPxyB3WsASXABtma5ucTZMkJvq9m3cxymAEdrTr9bdJ9CTECQEgM6cS2oKLn3tyvcMJVKdZ",
  "key32": "2SkwBYgX9SJBmcwmCXF6N6YQK4zfX39Y78YXeRTWmK4HkcHHvRoLeXdnbTJQVWijV1hhSovzMSZeKwHbfKYZeTsF",
  "key33": "1tt9Wxua2QMVQEDBi6BHSTdk9SHeFFZwMFSimQDZcGzw2nutG5LF8pn6mRHmEmRH4H1FL6cQgMyozFYXAFRAYuf",
  "key34": "5e2CZvNvCPh42YTzZAcDPSYpnBjh8UJyNR5zq67i14sgAmvjGMmr2ipWxN8f5tXYP6rXd9yGpWmsKhwrTHU43yB4",
  "key35": "2hczsh1oK5D5VSE5YupU7jdRKVHdV9UvfgrtmriruYPAeH1oWuG1bNBZwBo2FVwJV5PXhs2AGwR8rZeG6nn6aVu6",
  "key36": "4Q6HLNyXXEwhEWpB1sDD8QNAQHwiSXANK4CcXEvWfLKdgMJkpBKh2dx5H4pxikXkdc4m3G5ELTToaRnDQUkoGurW",
  "key37": "3TUC6uNhGqmhi9RYNwHk6NPjgiLr2wJ8W48twnrku6Ehgs3xM9VTkQ8cdphzxPioAN3GEGjhrUJWpmABbARiVbTa",
  "key38": "MmcneBdMjy9wKXM2FdvRfapbt9CMs5vLTf9YjnugKBCBqJwkQR2cy7q1FFzHHRL2BpjK1efhGa7yv7rbymSADLi",
  "key39": "3xhrTiDALVnj686ELfxtuyGgwAGTBESr258kFZqu9wpQXKUzg44zByaARJh6fvS5Qts53vRVcUwFHV8honV5BDNa",
  "key40": "5xLvQAPZKh18Xbtn4wzcsth9MSZSM7z5ZsZHALiB4kSKBLHsNxXwSM1dZBRvvvdAnGr7hYzchXb5GpT3zQddt6bM",
  "key41": "5ouBySfCoZDVzZQAc7hGYvW7CmM3kBRZ25pDvxbBLhPqfdgy1ppNkYkfyP7UKU6cgDoPrDEdPvvEYKcP95Ni3XC9"
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
