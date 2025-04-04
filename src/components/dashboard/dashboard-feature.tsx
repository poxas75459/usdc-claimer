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
    "vjL3J4Tp6mdNB2JRWvfQ3YZqAQgxE78cFPA1wTHpbkNqmqaSMvvrcR94HW69imKft9myTBgjZZFaHn4K2hfUqda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223tuSurs1zbmYxzCBTLrn9aTHTHFm23TGRVWnjVd6WiVXVCkDPefrKFQG8fvKmWXdR5Fzz5WqbvCkPwx8mMJdK2",
  "key1": "T1SZGzWcEUJXw6SyRKB3obNEon9hzHzKF2FDu8mXPPLxyZo6RKmtsxHtqSqVPQ5fts3EGLVV2GDBrgFAX4KJtko",
  "key2": "225axC5CVJsiNQGEQDuJs9tFYBLhCFqABaC4gU9f4uSytnj24inWqTAzcpfhNNW2nGLpEn4WtfZB7PUmMQqTeXE6",
  "key3": "4v6YMSpGo7CeGMXwRNPaW26MKxbPKRFjJFcxweDH7jxggfDZZy9XAjNTHMqFRkhTUburmxC41KANvMAXRfnvmzAz",
  "key4": "5zJNhVrZhjj2gGJzocTJ6CiCgN49KziCda6gDhiPxSsdjw1ZJfcNckHpdog3dVdX2yf4oM6VWjjhxDqYcSkcaCV6",
  "key5": "64L5zARN3NmEUng2Y1h3wanyY3ac9M51mabHJjNU4M1VxSnD3PLA9eYt3toGU1xuCfXnuPFsFfxTgKLSb5rtCkfa",
  "key6": "4E6NYsLEjR4DQWrQ8zifXjq7tgKyxm3mqL3nqgmWem8WD9v9PrNcHNNAxsyLa1ii2vAjRRiDmMEF1YYxHdvhkbas",
  "key7": "dxi1gxnqTi6xuM44jAQzEcU5b8XoVAMwKovNHpgP7vbXZvFjp4F6LebxP6FPxBxVBfj96xqqXfouhWNXrp3d8Kq",
  "key8": "2vu4SWe2sJYe3Co6ZcWpF5J7xNxkt9isogJ1TzfjMgTBwpFQUik7Y8DDD4JianUbWHBPWYtZxB9SCE4QHaTJiRHU",
  "key9": "9qutbxku3pCxakjcH9sPwEZJCfZmJ3qfdhp2HpLE9jFX9YfSg3FQVCkNhLr5fCnvJBSnQcqMFVpWnd6uHLs1Pif",
  "key10": "5hRRnfSyRi23jdUio6qb8itw21ZitETtKtLHH9MaW3vnzTj5EJbujg3cU26XT5SpeHDaCjnCcawQxQSGcrgWkAox",
  "key11": "3jN5xW3UrkME9ra1fLGSupZC1DAdYWTwH3xkEZMEQ3CMU3pz9DodAHruce18wvnachwU7nk5h64cA58MwjP62wVq",
  "key12": "383V66XdftcJ982u6wX8PXVj8xXFXbxZATBybPtE4CvhTzjfY4f1XikqfEzXTp4xs9aEUGvQqZKF6VbzSnToZ79q",
  "key13": "cbk4DfTZ5MmJu36AG48bgFaHbjvm2TPH22BEVikELEyLYMXX8trqUwofu7nAd68jcHxNtT5WbLjWG9Vkvi2mTfM",
  "key14": "4Au56fenysY8o1UpbeEvo1w8p117YSLkBcnYCcbKsG9Hni9cSbqEwXp17HtT47dyMpDcxP4NCPRaDv5zX8n8EV8p",
  "key15": "2jmEdSQTVmTBSWjYv1R5SsHZbhsoQwB1mx1pWQGu9rc3odmmPyqT8cNrToRcKxrXD69nd8ejEX3Fo6FzCP7UivbB",
  "key16": "4PVnxafUGKAuHdWaMgGUHQBbtSGx5LCpXVGSEY4RXGXhbNpDyufNgxBnuVjWAp8bEugQqF3mN9rECbzbKoGFFtK9",
  "key17": "2cjxye92hWziN25EFScin434p3o8Gud4C5pQT6yigQwTHTcWvCTn7Q9jHZCeoM76wEJwULsPTKGebhhFnLMmv47f",
  "key18": "3vNW9YMskoUTedktncEZHZ15LRtwnEujvbmDgmxk9fAWprJxMNY9sU8ZoLYc15TYggmvu4N3Xy2rLbHXJRNnAh8r",
  "key19": "4QpheujrVmyHSRxUN6EbjVE281PyyyktZ2GpVtA9jHHLrikjL2tM5t3uC3dRFp7SsdGyZqEt8kTcHBisfH6bZdLB",
  "key20": "3y1kCjs8GC7u6SD9S7yZgCtSsoZHiKPUqxg67DBD2rLz6vCkzEz1F4pfV9n8QyNqKjXD1ekbSjBYswf2nX7v14U3",
  "key21": "36QeitmM4aNATs7vze55px4rhawm5b6eafvQV3RfzrB59sDmwh5dkafVmL9YnhMmKCo8WDKJimdr9u8syUJsF4AE",
  "key22": "3XfKL7vMVcY3fT79SgrhbsD2aUBAcEqGARTAmY6RUiuaSvmHErpaagCbqXUEQzidq1be8aWuF8k6dC6YgM5yNVz7",
  "key23": "4isAY9vkCjjxcdeD4krvGRAhW4Wg7jTTnEGpt5DYiGrC4SxRMdKLnjb5SNAFapu2rUK3bqHzADn2tzAYpN2z9ZAD",
  "key24": "FgfkveMmd4a4E5yr7gsMVVf2Jb3BwLCtaeiTrR56xhqhFGyy3bhDgHFKfh6na4SY6qHy5LV1zYJyDypsxGuvvKB",
  "key25": "4C8jX1EsaTbjdmnmKeDKZS4jo3Fdz99QKoMSC56gk9QHjBzWJB5ovKruWMdW8Rt4rz6CxtrBjTtsgu32iFrTKW2K",
  "key26": "unVFqAwfQjTPKH5uLe6GnjFYBkTFhKNkaWDSQzGKLQzwFDfd5hfRcTxNjQumUVos8xjhPZXWgBnkZGAS46RMQ9t",
  "key27": "FwCDHcGhSFpsakMAaS5aMzF5NU1h7RhinX53xYYQ6Gw6qwnkMdAD9s4snCobtw5mFEeqT79bPsVyohbizy5P7vm",
  "key28": "66LEudVQ3aLpN1Uwg9enr2DokkGbZvFK5WoX3ZB8SvNKwj6kUoz72nNt2mkxwvtiGQtN82cBrbcJCZ1Xfe2YyzGt",
  "key29": "3eGpVFeAa42iQnmVTyprD3fk3N3n92aDNtuX3iG9bUYxmMWfNbVmAhhM9kfQEM552CahaNZAEwgvAurTECJ6tMnC",
  "key30": "3y7c8jzuruG62FzR8jSvTUrt8qEdjGj3Tigxs6aycwp9Scj4annTTSGDQaFhSPxV3mhYohjxpM3Z8F62nNpKLXfU",
  "key31": "5CdSRkAK8xW8T2332nWDok5ggTmnCmzhWjH8mX1FtfzvWhzqq8djg8TfpgyVthxUQt8y6rfef6qLZCErF1ui2T7B",
  "key32": "3Uo9QC3SQvTnCj9kBocPPGm9yTZCZW8TSjMB7vqUqY1Q5fcr2VUaXyL9agn5dqD8GD7Kur1vvoyLk5NSGN6ezhD",
  "key33": "GiLDGRwERgB3mhMiwExz6LJnFYE7JgYe7XJ3PYLQefk77coKUShx914Md54XcTxQpXQMTXZKAfANjf49QLH46fM",
  "key34": "2ZYuBftv2NmK1D14jSV5Wf6UUygAPp9gz6BxVmjjQ9TZ815wAnuy14Mx34cGKnJ6uwqBVCN4QaSU9rYj7FXmPHxg",
  "key35": "31UUVYA4kCjeMkCvPnFhEAGCS41UbF3WryErYRPR6wTU1x8EstMYYjQCbsfb7Um2bu5bHbr2NhChmpXbR2YLDSnn",
  "key36": "4BZC2sqCmowAF9iqbkn8fC39GfjFMjnj14CDPTpqfqES7Gfq64wokqFoZ1s1CxmM1BGcjDNA9uBs6J1ARFwTohXo",
  "key37": "5uw7L9gwsr2UTDhPJGWbg7SkLrnaCBfyBLn8349LeHMvCmtQXd37nKNTfugKyATdiEMJiuEZkNR9Wjt6tkQWuquL",
  "key38": "4sbjDjZxCTwrLB3wB7y7gBgEa9PrZvWHiXD9A5eAxU5moCoZ67rJgbJ94Hzvpj85pvU5paPqhStcq3TE6i1z7w8K"
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
