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
    "4m29Avg3v11TxxyhWxUK994E7TH7297KQaR3xbHnurzi5ycB4gSn2NBPFSXmZmiUiJKSwvtd4sTNjUS3bHfbpw1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTTgcRTLgNiAJioH3tvvti5sYJLsMvVZzewp9zNMNqK8dk5KUGyYEEM2E15YtDQWCpkHfzFQ5TTm3ejbi8bYKpe",
  "key1": "5B4xqi8b8S1RXaozg5kTguUD92pceQM7xqyQuoqTkci4Py3wGRZum2MqU96rJmFy6SZkmgPJaXTibo4yY9pg3QZj",
  "key2": "3sXec2kjJ7TABtEaKERBfaLqAcEG3S3ifn9pUR7wvC12npLzKDcB869iLaFGMMqZSxtYTRPkaxihYBa3Fdf7LPxb",
  "key3": "4BR5i9F3huefBQQyYKPHM7w6DjsTGDoaT7ATyum4YNsQxGZcjFcXQevkGLQUVts5c54iQSgWvREQcMvKvXqRRPzL",
  "key4": "31aj3U1F2PvAZP8c9XBhjCRqqeYdbAi38GFbaJUdoQyTpq3qdc7HfXKyVdBxRb3urexyAY4BzMx5QbfXUN7miXtM",
  "key5": "2UAdcEY9ev2Rm4eUeuNL2nJu8Vo7rFyQFhvw8Xmo5bCBmXQN9VB9yCVEbcJ3QrNX5nqqF9j53aAUfmcAvP4dDVqz",
  "key6": "VHigxREbqFUuvpBmFtHWmV5xxqDhEeffv3kmTiDq9A1oBCu9hTidWxsgaDW1zwU6A7bfsh4947SseDLpu6GMSib",
  "key7": "56kDMRC2LEZGtoraHwSFuwuyyJnRk1VSACkfvUVzNxoeu3mR6BMbdbGZLZG7KW5RUBieWGAo84bEJ6N9Km4Kg2eR",
  "key8": "2N2myk1ifrnWDASibkMmFjuwsmJj1RNZgPbsCs8omrVKoYdEEHgWtivoL4QfyVmrUp83CNy9d9KdmpsDXrrzUrVX",
  "key9": "4vMkrPZP5aUFy74Zjy8u8xw7X4EuweNXM6ZFpoHgwSW9CZQ5qpx1KzoCD7CaKAQue8aFHvnrahdTwMGTAHgAnp5",
  "key10": "fLRh99y2jCgfJi7DECUqHTmqtSxz84wSfLqqdd1ECvgjLFshrsABfzmDW9sdfQ9AYZKuv92MW1jLQqUXtz3L1Yr",
  "key11": "37bnmxZw2htzi8ZVxhm9rxuiQkeXWyhsztHt856j8X68sYEmzyiiuqytQckQrv8hKdLNZgMiUgXeVhdbLoXkvdVP",
  "key12": "3kMKdpyw8n17qDYSPiqvpphX6y5Pj78QwTBdVV3cjpPsxiwArtYFaDhcTrNAGwmFrkjA85GwJhHMd2BPj8GjWUsU",
  "key13": "4nXwAvtsziNLbVRvRyNmaVneZQCnsoWChkjaUV1aLXdKjoX6zgFTZZ7xxB4qFKPgAnDJMF1koumuBRnYZ6rZgyPZ",
  "key14": "VVHSdxtzSRAh4rTPsd8wMGfK8YKLf8RZ3oBreLfLUG1WFCEQUo3ZQ7yhKvDMQZGCQLVrq4eo9p3YhgVCZx8zv7S",
  "key15": "4qhBQwQikFXkyxsG93uXHGed5wz3Y8r1mk4LxyMSNxaGhJi2Fqkd6qvxihneKUL4dMyQSe4tqo5Trxt3ZpESZQiV",
  "key16": "cDM3mTJ7ierYhoDq8UET7FdN2M6yTsJqrWA6qtXsgPkDBPK5vJNVad3ReAqcgFcBsqWzQmgxWuDbkGggkLjnK3f",
  "key17": "5mqBdfwowVG4Q4hnBU2VQLtDhHTspKnszig4cFmvp2mDg9W2Z7jeUsSPfPoC7SxSTz6by2xNcA3dMMFtq1zC2JSW",
  "key18": "4SRq8PP7WmP37242URJ2Z5cbMsFcdmBbCPP6z2nbzim59xovk5wC4fa1Tw9r1VxjiDQYE9ZeuZ56aPW4tmW3MUL3",
  "key19": "5fV7E8gUvip9TXghjTkjq7wgj8tgr2q5vBLkneAxZeGYEfZP53Qq8jEDn2dsqe9BNXvgz3ij31LAJq9RdC26CmvC",
  "key20": "5k5hYNaSuBviSTzF6aiYz7PrFkLRRDfM65CsJACJS6oDbtXdHqkx8Wgqs1Hu2HvGcLd5DGB4d5cFpoSJZws837UC",
  "key21": "4Z4FqjjRN2kHJoDXk6BmseFwbHGXnpZ6oHCXjry6ee98Yeq5LZbMQZhpS5FZdgvD8vaaU87aS7t3vTq4RtcQ33th",
  "key22": "2sEccMdHrm4hm59UJcukKUUrDjZEEVd9dMvqRUqtoDiYvWaDrmxFWdWw56GWJRZX9sfdNoR71RSewJ31VK2PoYmr",
  "key23": "4tyrdSB9aKcSGgDzwL6JJMnrHxDnCBJkA5XVM73rCx7fxZeDQ7aGdz2NuWG9XLc3GnLYMjEYsBNybZKi8Wt1Rx11",
  "key24": "mWQnRvDnzahYgqVP8UYshhhcuFYugpxByeh1xBPwJisQymjsXe6WrvmBcPhdq4XHeeSDxijE1Rqu1tWyATvMrNC",
  "key25": "3j869vvpJjKwDBbGxHoPcAsLxf3AbWqiSNsH3WR2rXHbMjhMccfYr5DjmqFh6LLDvmXRNDcsGJ1zrE2WPAyFbx4p",
  "key26": "58CH19Grvott7Uz6X9Qj4oQ4bzqW1b1sYGE5szyNoUpU4jkiQ7bcTC1WKsJjYt2RDbcL1qkCTfZgpT4zvecrjsbC",
  "key27": "5bjB9GGbtwSXjsG9DRLVA1uXiA32K9cPGPLNs63FUbFW5S3TPzMrq7DZeEfikmqXVXSV1hwZEmjcXK6FKgZt5zdL",
  "key28": "4FQHx6rtcaS8iweTYXuzbFH9iF3eqgcW2YibNUVbWT2AF1Evy8pNvctu9HXrqAJqiUFFwfirQs5nfwJYjDYGNPsF",
  "key29": "4jrt2eHirzqzPFsq3L33fQm6U1y9F3MmDAMw6UoCjvY9so7w2g16HH9hSLHfz5GqPn88C1smSdor5uepdv6e3sGq",
  "key30": "5wrZ23vurhfkT2cR2yuwTz2PkvUEj43k7WTHbdP5igF3FgRzSbimBtBawi1USd1awFrNEoa1XXsAZPTEZQv4Fxt9",
  "key31": "2cuq5U8h7d6m8pM2PS3Pf6mC5Y5nnFMdFqqv4ocbYzGBC6LNap9yE4DijY8cVPEWj1S3bHRUSuxNmB9Ndi8bZX5v",
  "key32": "2y9X7VWnABbY7vkwKrsBJzBmkGTCJcrtDYYY7sa2RVgAupuktLiCgkDaCUkcJC6xAoSFR9xw2bp9jBL2qhVV5WLL",
  "key33": "5D4rT1gdwjyVc662tD9nf17v8p9b8i8BNumCWpzzBRc4wrrjgJ1QVQ1f4F4hv9dbbw3ike9xuDQMsCVxCcSfgxkx",
  "key34": "2V4W2otsraoRabiEGY4iwrmSZecUovnF1pcoojcvB57qBdeEw7hB3zHtvzRQ1HQBY6Ew6J8X6uDMspAmUyvTYuty",
  "key35": "37NzqaMMw67vw2GEA8uxmgDjto9HroyT9wCndUYs2uUf9JMSjRqLzw3hibFYoEJWEoS8xEPci7gpp1bTMn4iG8dF"
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
