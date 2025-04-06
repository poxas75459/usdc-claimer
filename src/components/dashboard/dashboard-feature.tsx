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
    "3dCe7wyqEmLNgrSDP8BLDkdS5Jn3F79Eq8A9v9iKNknhGAbF3xVyUbRUhSYiqTZhCyFFDYJuRHSzhG2Sc8cnbrc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PNYoaRLSwY1JFSrVLhWy3Tmk91WXxHcFG1UHkptib872dNQorHCDbtmBsXoBQAKpjv3CtH47E7rKagRiYc2Kqu",
  "key1": "45EMvLVsRJDKKUia6U4CVc7cNkmvpB54YG9i8zkxanqujK6yptYfDe9ZF7N39BWHU9bYqxAi8yWDwGi9xtuPnFJx",
  "key2": "55bnZfsmHRnDWb5J8asyS9AwYxfePVWQoRgnNGSc4oYL1CLFr5U4s7cNUT2AkJMkwX2DVp1QWhATtNDRMywoLjAX",
  "key3": "3yxAeoJ9RYYJNyRnnHkYG8Du6jXuiF1KaeNBpWRaGdwWLRG6bQuXEA252J9MhK3Dw43f47hT5F2Yi5pGirThT99w",
  "key4": "4BcUGqeDiw6cc8CUBy8LRCMA5xpQdaiv2HfJnuBBJdPEAwwcSCsQ41X8DiLYahgHWVe3TraHmqG7j5C5WLG3q6Lo",
  "key5": "ecBep6pWXi87RZGMkHJARXsDBgq7HL162SDSa8gTY1vAfTWYWy4z7G9g9w8APTQF8XzRw5TBMJ5XWH9Quf8T7ag",
  "key6": "3yaHNfCc93u168hRHdCYKyqTiZkvp9p9tokAFmdKAGNJUbtF9QBfFiTaMjq12UcugMhJB7gV5hKVCHFvNnRtKxhz",
  "key7": "5gDx1NV3xnfk8fHFtECoKaB9UsNFzoVbgtE3pZnxGtCGawC3ZZumobpNpqr1Roie9CFjtENGW1kTF4L5ffKFBUWJ",
  "key8": "HmVXxak9HUeffaNUM1DgT5f1T2TokARE9v6SUrrPdmziHEQ65TggtfNVVvzagidpRfqKCmsoGbgWUD3qXPRXFh9",
  "key9": "3XH2YYFeYBrcHEwGnZdBBYGVRLdg6PRZc8jkXQGjMLUo3jUZHdwJt57z32WXPsMzVq8SMc5s48YNqFLMi9d3hDZM",
  "key10": "4AEzELayYrC6nXeCf2ck1g7B8jCNZdkqkZET4ypnKxSZytFMGwN8mb62s2hqQJNjdfsN13ghNjZPFECbhbWkhVqW",
  "key11": "fn2q1DZ1LD1bhHpeFLCLAmcA1x9jQQjZ9jo8DhFMJdAv4n4513oDwWWWPqx6uwgB8Kap7FdZwL4a7NSqZXvahDt",
  "key12": "5ji9iVYRzvyNcHJjk66nkNg3V2Zbahp73QhkW395k6WHXfYpMj7guaYcxgMAYgDQ1AxQJcpSx8aqf4YyvSiUeiW6",
  "key13": "5P8MfkHu6czALFsqgbH1vWQqDvpdWFsyUw8JMsdPPHHWvTWsdEhL3z7TvppriNwNcRkwTEy21nErVUTRuXTpcEKm",
  "key14": "2891CoRCZab8Shk31XgiByYTLDNHG1gAqPtFT2S5pJv6n9tNySf6b5c8EWzRpsFPxW2FVmxHtPwVnEQ3oLQx4GF1",
  "key15": "5xH2tDkCeFymDFPFAwpqgUL1H24XHaWYS73KFGZSA5cotejRWqTp4bpbJjCnFgAuV8ZTEQLgeuDQuKZARBbW5Pz3",
  "key16": "3wyVn5SY3kQKcCXgPDZm3vVe3uKPo277UkLQBhmsqSm6SWuGDgtNiy1V6mD137JpJSZXTAeDXd9HKfYxyAnacg5C",
  "key17": "Em4aJoGyCj8Qk6ydVqD9t6MWhyfMoqCULH4y2fh9j9Y6YpaP1nXuj4xHznQt6w6ddf29wWbokDMg6UDUDjZfM8m",
  "key18": "4SHm6k7o2eb9WKMQtGCWLfzHFVLKPfyNX2BNjk9KowwzuxwRbBqwtH4PZXpgbp4FLHxz9Z4ogc44dN5iJbBeGW2V",
  "key19": "3ChxPv9hzcQTo2yw8jsbcRxHj4JEfTT4NxVgtTndKGij6wTL875MsS5fWBHsaLxh5UfxvVczGBBm62BrHt7hzJ8i",
  "key20": "3ehn3TPDJrtvh19DKggKfqYBGAxHf5cUM6gKLWqWYjD1e41dBHTGFF5B9LnTA4BgR3EiiwABStTXEEWGmSrkUGGu",
  "key21": "5adqmoC9k6pqLdTE36p9ia9rEJfeA4WieQJwjjXdpsKCm9pYLxjXsBWsDouPJYscc6RAsa3SE6Cr2DsGWTEB4j2B",
  "key22": "32XoBNkDDNhewT7NW1cDTM9AUBhJVP9oHezJikFWy9NS1JovPvfb3ufNz6ciyVkwsjQUfRcecrfVUxo3biDAtRXa",
  "key23": "3ftTUG4bxX4GNct5aUe3DK2E7DY67AQKFnnVuLbk2zXoG9QfxQMuTqum7NrSSGdJXYT3WYU8RwyRj7oXTsrCySoa",
  "key24": "21V5aegkxG2jZySaQxd8ZsvoQrFDmu2V2AWY1WRYQQtpV5npE9h2mGB5y26ARNJMxzjoxxDRKwm6k8R6guRhggUn",
  "key25": "5Bv57WZVWmgfWQZ38ygt8b3sb1Sep2G8gPRgrkTAiN1Wz73X2LoBXFdyvFGj4my9prD8ZSuH9p7RczqKRCBBEU5G",
  "key26": "55cVxPuXqoUtx3Wh9nvqdpetX3jQFfL8UmmovuK246G6rnH6zLsDb5GZLrnSgkNxyVh6YPpfede7tA2Y6mqZVx5Q",
  "key27": "W2rz7N6jCBgi69sKY8bnpTWKnt28Jdh3JmpWTzkpwLjkU7sp76JDm91nNiLEuPCkCnra9h3n2FhkxEbon2rV3BE",
  "key28": "5wCXozduCCPwZcRAQxAKfSadC3zN239CtC7d4Yp11CPPhHXKTtuZzd31myNQFNPw4RnAtheR51PouoFu1EFiTKNH"
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
