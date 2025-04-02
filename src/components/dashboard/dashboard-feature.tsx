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
    "3T2aUK43KML24oapNei7FXxazFEayCp7JJesnS9CEEhKtqwby6cdMzaN7yaQd1MmnKsJnYTvu3afQ1hVXBoC4vEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaEvcyFJajEbzpAwKhtPhg4xqNmiY6B1T2ukCaX7KtXCyzg7WAYBinvf9VF6CmpGVd5b8Buy2M8W8SeqsD2w5Vm",
  "key1": "39nGdWv1s5qh55UHs4uuBRuPNvrsz4hyej3V1GHvoTARppwk7nfk9UMc3NQZe52HLvkbaiFQn2GhmLZ7DsB3ZdER",
  "key2": "4YazVbTCXiygYCYHfVBNXC8BnK4kvx1EVWtqJ2Nxh6TufuiPumz3RGFAbmuZJ7d1UWXhG2GThMxxscL7pBSRW7WA",
  "key3": "Y6uJWDTc641UK8e3bNMm2SVJMR3JgKATW15fU2DFn9acz7i1vEdKnrpM9L6jfEynJU2eh78ccEuAfrbaX7t7NTk",
  "key4": "2JRQMYdFspeAYMDWWWXZ4KpuNh2rDbX6c3emqk1BeYCYQHSWRb9E2HgNgZx9LFTL7kaLqy97GNyDa7XyyzQA2XbN",
  "key5": "2kKUUUs6LeyvrrvWpCFsEqT4ocDY5VM3QZb5UcoBGo158cGvDxPLknDNGeLwuE439aDqisZAajEzDsmuL5krzziw",
  "key6": "2ZJDmyWPQ9JZ1g8AqT7oS6nFbQQS5J6qCjtV5xQrEvCC3BKwBESLSfG1M173gjABCori9Xt3UvUwMPS8xyw5hssU",
  "key7": "5ReT98BxXfphfhByAtamAMYBPPfZmsb9aeMfcTW1pxAD7seEHbLz9o9Va4cHbinqiE5XzzAcC3FnrhC1tUbBD7Vx",
  "key8": "3XDZvF7achAYrHGiEbS8khiAQ9Vc1k66yRB3H6dGCGPz1GBwJguffjYyEPyXooXub3bX6qSDCcUCt3j4jNoD1WH6",
  "key9": "2pgZ2NpwNFtyND92ZywmA78ji8WbHRHwL8mjtwqQXGRBdHhZvtoFrwp9g2UiJLsuZd9ThpDFxpD91SXQtgBrR4p6",
  "key10": "5ggkQJ9BBkZ7eZdSU9TXTqNHTN95GYoYSBHuQPuw9KYzFqip1D8yv7riDKtDe5TdbTizhXruePwu7aNnQ1XcNjeo",
  "key11": "4pi8BDSaWQdekXF18XYJ3uJ2eaHJr8rGFUMkMWPMLGN3ov1Z98FtLmpHx9GmKq5HyGjrGkzVC9GTHNbDUkPnqSyB",
  "key12": "5PUar9CtiNSabVUWBqRVsRTHpoEQvo3Rr1HZGMuuNQJXzqQ9bZCEfQhUvYvXRDi2z8DHGWoavdiYNPHtTPVVYdtX",
  "key13": "4nNegzJmqUqrjt5W9PyFLBE7X5qZYXkqBcph4nuyHYVGgXg5PntgZeA5AJQK56dtq8be74w7QnfVFxsJ3CqkskrA",
  "key14": "s95yVBNTr5B3m5htrxf5RtYaREZTfe1XQ1AjcMg3dCVpbrAoHq9uM9eUqUFTVUHQv79jkru5J81e3BntYDVRaGq",
  "key15": "49MFpdhA84f7K5hjf4i7yPTZVFJpciU154APGK2MrqZuPyYhMYRvo6chXjkBwVqfFZMyraoUHgNRKXniL6FgApGU",
  "key16": "2VcB24Q1aYaALih4At99MKToykzhx9YuYEMb4APZoXt6WSgY8MDFKznCp18UiggWFNfQBvjvBzfRNDhn1Bkhopq7",
  "key17": "4WS6ZDCZa9cQNxr4JwKe8az6cgFfp2GvsQyVvTJX889kKswJ4YmMXZZ3DEaxMMy8qjFUGwsSwRknw1gZT2QsFiY6",
  "key18": "4bZUB9NTwa9ks4irdMxwcARqWLK74Xj9JBUvSkn2d9jDPBgTzrMrvCoj4vd7i2hsBRZ5BMoLP3RybK5jjHeZkCdN",
  "key19": "5ER7GTjJGVVSpKMVt9ZJGoiNEds2mxCjmFtE63aSkJdDqap3vXvQJEW3oByt5KG8bXsEt9m1nuooWWd3cdutZaxE",
  "key20": "3WRoumwa4wbPKsE5nvnbgf3ADVkt4C4tF5xGmJ1gXcYc7pAu9znjzcm4kSnz7htLBFEwHLmixWTLxr67M1pectVG",
  "key21": "5WiFMAZx2rYwXs5G8YNQJqs2yWKNv7sXjF8HAezMDP7WvWSHnKagrRPptY6k6v1ttVNQdnfr5Fr3heGC7TCoPC4r",
  "key22": "4Pzea35ni2KGVuCUhzMkR6KTHKoLEAJBSiYenHDgdyiT6pTnBomeSYdGYWyArH9ScQFpo3RjEALMsPaKnZfizikU",
  "key23": "5u7FH1EiA1rSp34qKMvoX58nxm94rVw6Wupdop8nasL8GdwyZdafBV8JYCLKCk6srHw1SMCHM9sPMNAjtqRBXTCH",
  "key24": "39UVk2FZ8hWkB23ZX7h5ZDxjD1jJJP41JrRRqfEvfNBHx5RdXs7NWZuNWx1SEPpg1mzjSdwW677NyEBr9B6Ynu4U",
  "key25": "5AkF9f9WyBy6noQnf97ePZCbU2fxkAXz2Sy5ADVvPekHZqBNUfLaNsH3nqJNKtEqNAXR6nvz4kQS1hVVp5xjT8MX",
  "key26": "5pt8sWKMX7UVL4nGaJsmB9s1Uz1FhfTPmorcCArQiNZG8JB27ThnFL6RVm777DxN2iLG7pFQfghYMtqJTuF3zDqL",
  "key27": "5sjuxnZfpqw8niDFgsBHsGeAqdRV1TZeRKSfeBcq73Qre5DtBSD8jxpyAi3z1K4oQe4spj51spQFeFgUjVcMrsuR",
  "key28": "67BjDCQoxhPb3Lzvqci3RXokCeQ6Lwi3xZ3QRtyGWrscKcjM9xLCT68ffcXtgqPeyqFieKKZCrrs3xSG5TyeNkMq",
  "key29": "3dFZgSTaPjy5bEzkpMy4zbouecxskwan9Zd8wFm82rrXe9jxCDiWgigSmBwdaEcgSx3FjyCWrxa3kvL4TjTE4w44",
  "key30": "41k3MyH2GgxYkLDPyJ5MykKpaz1Z1nKiVzPxGXyNDpwNopeMwXum2t5Ktp2DdutcminRAA15q3vywgoHMGvE65sB",
  "key31": "5K5yirk8PvREgjCxC9WeLzNgnPMrkCgkuXkCDinTpLmqak8AZerpK5a7R1WUP1JXqRTfNvy6zooQj7wtJgAemhLM"
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
