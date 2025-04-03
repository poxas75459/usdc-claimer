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
    "2CArMvbyGRYt46HyhQKrHQL3rkPsMsVWctXVZn1GAn681jHLeFXG5QWHvksWouCGW5o8snJM6j1PiPUxsUGAPEtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615HkbdPmRhLx8sPn9FUf33TxKMSfU6DNuByLyM81uwo6fo2NEcubUTBXS7BcveCHEYvhuoHBsC1HYJWw274eJuu",
  "key1": "353vwhmmMinPS9xKgK6rGkcEP2xFjZXP9yNfjwJLoBdPDJnQ1HXWo7pZjHWj3MzM3frMA9ZSroY7su6p5z7Hhua3",
  "key2": "An31DcoKofEQD1e7ffgqZtcuQKSUSL68VQXD5w1fYAb8pdn1iJAxm4pWUQNHbCz6wYuohbcCCEs49i29prF22jo",
  "key3": "94YdRazwLoNQaeNczaCXbxSfEHVoSeqH6ZdCRe36b1MEifFSzvm8LBKiW8aow5tP9iXWMpwbZCg4XFHqyMAaZC5",
  "key4": "49z6iyeDYbTGSebpKjTA54yJQ1QjoaujcSqXjiBESsPnenVsJ7JByUHXE9sZZBs7FCst2PamtBVq72DYFGiaFqSN",
  "key5": "4HDPH6kp3zu3wh3qQjb2jLBqnXSzLdt7B18wkDFDmu56oVpK27HRnHWSXYLeFfKtU4wvSbDVcQbJS21TZ5SgxR7X",
  "key6": "2C4vGE3d2JUbCwcdbgaQeLFv8kZnZSLfSycrTtfrUQpDy6sdpV2GjEVYxbhXGY6HpNzaoGqZLE7f2W62zZRmwLoM",
  "key7": "2cx2uuhrp6TAebnYJEEw31tLpxW9pt7N9Bch6fQS4VuTdyKFZMGRc3LUydBCffAWc3EVa6pdidEPC1Awaar4DnkT",
  "key8": "2nkKH6z6kzgGNwoYuJh35SeiqdycuHAp31UiUjndGG8iKeuYTsKgCErb6eMQEJbHquYT7KW99sQDf8WPMhTaRU4D",
  "key9": "4N4sG76B7zjLZHBGmP7Bev2FBzrxA3e14JoRcLDL2L37Nk653GhV79LJyPYzBhayXnNLvEZZkt1mvm2u7j4bt2yY",
  "key10": "4hq1AKWUuG94qprkav2pqNLjnVrFR7SEFWyNGvH271AShzpeUrXeTkeuW3hzh4fzGDdsvHLyesMmR3RV8KZa7gK3",
  "key11": "3b4Gh5trYJgsa8PALCyB96Don6X2r5dkRk7mAs3dqksMi9eJ9jMWsaCsMgSVUo2psRCDECAgNMYwyRMA1nw8city",
  "key12": "pSxxDYTb9PGpkgBbve8m1JjH6yQgvtzPYXpTFifJ8kotPcsVFeDWhL8mDpFcvW8A64ohdWAyGVQefDqVqvDCaRS",
  "key13": "3HsZDbTktLQfSYiweYcVMREEB8mCQ5X2LER4NJZoZ7vQcG27YBt45LzhzqS13LVqBKx1eQ2uYj35dKq9A2vNad16",
  "key14": "2cf7QRkAD97GK7f91aEdUXrXJP1UkdyuDDbLcytkPxBtnC2ygkanY8cTs6F51ZCPCWXAMisg9jhw6w3DHxgYKD7x",
  "key15": "5FZe8wJMQ5hfkwwsNpRsT2ptEJ4Xdw3bp9WgpDhEAypt9RbE4RUnMJf5hqztsDGf8JUunpLhffp8watHBeVeEGyT",
  "key16": "5aM8ARjKjcV1SobGZ6wVopssAMfQMCaJLDxVurwZxoS2sRn3sr9zjZtqWD1eYBrQdknBQgi1YBupB7uWcW7u5KQ4",
  "key17": "2Cd8aRSQmRHAtAYe3qjrD9V2RHYanrCoS8mejkq5QN65pA1nkbhjQwjEf6wSaaEEWCc3mi5A8SFZJP5C6T4Adbxt",
  "key18": "2a1igJUxA2gYGjBXm7j2VBRgL9LYUamgjmQPmLjuMmrS98ZzzAo9rjWqpVFVq57UsHsxW6QEqKHew1z2rMauVzo6",
  "key19": "2vap4vuBEYVziaxAsHbD8AhvwSChMXUyFyY9V2CySrvXcNZCLiXWMh2ZoMX2NHPLgxqFDCu5YQHZrVQ1fq28NnmQ",
  "key20": "5H8MDWPKpUsD9EzwXByLi1uqsF5e8VgzkJ2QBPyYqYhkXmpui8SYb8EzgGVZzxNDWYXokjRDAHKi4o9HGjGq4dmV",
  "key21": "2ccsQyi4sBz6QeVM22z3RM5EMgobbxMVVU3ZGvLqStMjPmYgBsTn4SwsCWp8jvBsYDdnKW1u3jrh241kmfnTd47P",
  "key22": "42rnueFiCTMTAyi9szUmZwsEKtT6FUtig7eDLzZ98ri58Wty5M31UqNZonmdDzPMwtKnWokrgCMF8Tf73yRVPgVB",
  "key23": "2AQpUTmL9em3oKjFmS325r3P2SxF6ti1MBeLQRRf1uV9saEEyETFGW14sMTAqvKiKzPhCdJtzfiPwxZJF4PjtAAR",
  "key24": "61RaoFPqAfkmh24KQuonkKwYcrmJEqK46SuWZyRE2mkPq11YJGERZHYSYL1EWxQwYHVaTiUokP325mfZbB3kKV1u",
  "key25": "23BJHHXKdCpGgHCv9WYxDWWYuUsLudpkwWH2TvXu4JL9Q6KuQVUfjijFEkcG9w2VajmUK8oFBDpV5L12H6fHMdrq",
  "key26": "4p485mWa6ujAzEkov6WgJS8jUHYG84zhT7SGX4dqkQ5DvwWgC3HxuVzMfKgCVTFhrh8hvhASK65YDvadALo8woN3",
  "key27": "21HZJ4b5VJT3BnKXdA9AuhfswrjM5D3EhAbkGK2Qq72GmttjS9sR7biDkhuHEZrzkvM8AvaKRPnbDFqyb13xNDCR",
  "key28": "4qQU5nLzR8YojYtZkbKX54VNj2rDNvWKeCi5EgFAvkFyT6ELugkjJFbShhDoM586sZqePkad5xLNLXApsJPe7Pra",
  "key29": "2ZNWrL7p2uKpUoFUFjsbHsa49bar9bD5YG9cbWcMK3JHTjuNPsgdVNeBTFZYRjs79uECFHL7fFnrMH2o5Nopw333",
  "key30": "2XBRc1ZDLRpxYr1WNNiBPfzBR3XxRdZheSo9QyiXhA54X62aWbfuhLKteFsX2iG27uigyRG9aBZGVDmBwAQDDeFy",
  "key31": "aSS63cGyrka2QWYJ7Nt1kWf2SAzMLb3wCcHSLnyYNhBKKKSdhEfroALKuUqZz2DXQqFLn2zM9GoH3Por5s26cbK",
  "key32": "4BX6mwpjPVz4umxyhn4X2MKJNLzvw6b7hohR96VyG4LTs6kL3XvvMEDsGxRuVhueJVfwEDEZQAkHwm8KHgY5YSmi",
  "key33": "441He1GifsQAEjkFSpQPfs4NoQdssBwTzYimMGqo9WLB6GHA5HqUULPd7PVcZHmm9aFeJXBXtgXWp8KNMcAUzZFK",
  "key34": "2znBHwi8QHpe3iTKBW5xVe3PFYKyJ76ygXsdhdLgrvaioSGGeug5mYCR6LLwC9nNqKRQAu85x4hyYCw177QG9cof",
  "key35": "5VP6CahkrDMzVSnmpCJq5gnm4DRzLJLBP73pos8kShVzCVgWeMv76j69JBbFqGMWB6Gg6QWKT33Qj14DMTem3JyK",
  "key36": "gpyWpWGNfuD6swP1gcQBkwXdDw1HH6NHPMf9bvNZPz2BPKLDy4hocNeTVHCna4yzKxKRdnQbX7Z7ezD4LyywwfA"
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
